package demo.e2e

import com.microsoft.playwright.Page
import com.microsoft.playwright.junit.UsePlaywright
import com.microsoft.playwright.options.WaitUntilState
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.junitpioneer.jupiter.RetryingTest

/**
 * Smoke checks for the demo: the shared shell mounts, the drawer drives the router, the sortable list
 * reports its order, the buttons drive `sort()`, the table and the list render their copy, and a
 * language switch rewrites the pages in place.
 *
 * The shell lives in a shadow tree, so the demo's own nodes are selected through `#demo` and the page
 * element the shell mounts — never through the document root.
 */
@UsePlaywright(DemoOptions::class)
class DemoPageTest {
    @RetryingTest(maxAttempts = 2)
    fun `overview renders the shell and the three cards`(page: Page) {
        openPage(page)

        assertTrue(page.title().contains("ktjs-sortable"), "title: ${page.title()}")
        assertTrue(page.locator("#demo img.layout__logo").isVisible(), "the shell serves the project logo")
        assertEquals("Overview", page.locator("#demo sortable-overview-page h1").first().textContent())

        // One top-level row for the lifted start group, one group with the two reference pages.
        val rows = page.locator("#demo vaadin-side-nav-item").count()
        assertTrue(rows >= 4, "drawer rows: $rows")

        val cards = page.locator("#demo sortable-overview-page a.card-link").count()
        assertEquals(3, cards, "one card per page behind the overview")
    }

    @RetryingTest(maxAttempts = 2)
    fun `a card opens the playground`(page: Page) {
        openPage(page)
        page.locator("#demo sortable-overview-page a.card-link[data-route='playground']").first().click()
        page.waitForSelector("#demo sortable-playground-page h1")

        assertEquals("Playground", page.locator("#demo sortable-playground-page h1").first().textContent())
        assertEquals(5, page.locator("#demo sortable-playground-page #sortable-list vaadin-card").count())
    }

    @RetryingTest(maxAttempts = 2)
    fun `the list reports its order and the buttons reorder it`(page: Page) {
        openPage(page)
        openRoute(page, "playground")

        val status = page.locator("#demo sortable-playground-page .readout").first()
        assertEquals("Order: alpha, bravo, charlie, delta, echo", status.textContent())

        // Second button reverses; the readout is written from toArray() after the sort.
        page.locator("#demo sortable-playground-page vaadin-button").nth(1).click()
        assertEquals("Order: echo, delta, charlie, bravo, alpha", status.textContent())

        // First button applies the fixed permutation (third, first, fifth, second, fourth) of the current order.
        page.locator("#demo sortable-playground-page vaadin-button").first().click()
        assertEquals("Order: charlie, echo, alpha, delta, bravo", status.textContent())
    }

    @RetryingTest(maxAttempts = 2)
    fun `the mapping table and the conventions list render`(page: Page) {
        openPage(page)
        openRoute(page, "api")
        assertEquals("What the wrapper maps", page.locator("#demo sortable-api-page h1").first().textContent())
        // Six rows of the mapping plus the header row.
        assertEquals(7, page.locator("#demo sortable-api-page table tr").count())

        openRoute(page, "conventions")
        assertEquals("Conventions", page.locator("#demo sortable-conventions-page h1").first().textContent())
        assertEquals(5, page.locator("#demo sortable-conventions-page ul li").count())
    }

    @RetryingTest(maxAttempts = 2)
    fun `the language switch rewrites the page in place`(page: Page) {
        openPage(page)
        openRoute(page, "playground")

        switchLanguage(page, "zh-Hans")
        assertEquals("演练场", page.locator("#demo sortable-playground-page h1").first().textContent())
        assertEquals("打乱", page.locator("#demo sortable-playground-page vaadin-button").first().textContent())
        assertEquals("顺序: alpha, bravo, charlie, delta, echo", page.locator("#demo sortable-playground-page .readout").first().textContent())
    }

    @RetryingTest(maxAttempts = 2)
    fun `the page keeps a single scrollbar`(page: Page) {
        openPage(page)
        openRoute(page, "api")

        val horizontal = page.evaluate(
            "() => document.documentElement.scrollWidth - document.documentElement.clientWidth",
        ) as Number
        assertEquals(0, horizontal.toInt(), "no horizontal overflow")
    }

    @RetryingTest(maxAttempts = 2)
    fun `page logs no console errors or failed requests`(page: Page) {
        val consoleErrors = mutableListOf<String>()
        val failedRequests = mutableListOf<String>()
        page.onConsoleMessage { message ->
            if (message.type() == "error") consoleErrors += message.text()
        }
        page.onRequestFailed { request ->
            failedRequests += "${request.url()} ${request.failure()}"
        }

        openPage(page)
        openRoute(page, "playground")

        assertTrue(consoleErrors.isEmpty(), "console errors: $consoleErrors")
        assertTrue(failedRequests.isEmpty(), "failed requests: $failedRequests")
    }

    private fun openPage(page: Page) {
        page.navigate("/", Page.NavigateOptions().setWaitUntil(WaitUntilState.NETWORKIDLE))
        page.waitForSelector("#demo sortable-overview-page h1")
    }

    /** Clicks the drawer item for [route]; the router is also what the menu drives. */
    private fun openRoute(page: Page, route: String) {
        page.locator("#demo vaadin-side-nav-item[data-route='$route']").first().click()
        page.waitForSelector("#demo sortable-$route-page h1")
    }

    /** Opens the layout's language menu and picks [code]. */
    private fun switchLanguage(page: Page, code: String) {
        page.locator("#demo [data-menu='lang']").first().click()
        page.locator("#demo [data-action='lang:$code']").first().click()
        page.waitForFunction("(expected) => document.documentElement.lang === expected", code)
    }
}
