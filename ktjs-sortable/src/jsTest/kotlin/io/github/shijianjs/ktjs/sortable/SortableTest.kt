package io.github.shijianjs.ktjs.sortable

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue
import web.dom.document
import web.html.HTMLElement
import web.html.HtmlTagName

/**
 * Behaviour tests against the bundled `sortablejs`, in Chromium.
 *
 * They avoid the drag gesture itself: `pointerdown` plus a real move is what Playwright exercises in
 * the demo's e2e suite, while a unit test stays with the deterministic surface — creation, the id
 * serialization, `sort`, the option getter/setter, the static registry and `destroy`.
 */
class SortableTest {
    private fun list(vararg ids: String): HTMLElement {
        val ul = document.createElement(HtmlTagName.ul)
        ids.forEach { id ->
            val li = document.createElement(HtmlTagName.li)
            li.setAttribute("data-id", id)
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
        return ul
    }

    private fun HTMLElement.cleanUp() {
        remove()
    }

    @Test
    fun createReadsTheItemsInDomOrder() {
        val el = list("a", "b", "c")
        try {
            val sortable = createSortable(el) { animation = 150 }
            assertEquals(listOf("a", "b", "c"), sortable.toArray().toList())
            assertEquals(150, sortable.options.animation)
            assertTrue(sortable.nativeDraggable, "no forceFallback, so the native path is in use")
        } finally {
            Sortable.get(el)?.destroy()
            el.cleanUp()
        }
    }

    @Test
    fun sortReordersTheDomToFollowTheGivenOrder() {
        val el = list("a", "b", "c")
        try {
            val sortable = createSortable(el)
            sortable.sort(arrayOf("c", "a", "b"), false)
            assertEquals(listOf("c", "a", "b"), sortable.toArray().toList())
        } finally {
            Sortable.get(el)?.destroy()
            el.cleanUp()
        }
    }

    @Test
    fun theOptionAccessorReadsAndWritesByName() {
        val el = list("a")
        try {
            val sortable = createSortable(el) { ghostClass = "ghost" }
            assertEquals("ghost", sortable.option("ghostClass"))
            sortable.option("ghostClass", "other")
            assertEquals("other", sortable.options.ghostClass)
            assertEquals("sortable-chosen", sortable.option("chosenClass"), "the default is upstream's own")
        } finally {
            Sortable.get(el)?.destroy()
            el.cleanUp()
        }
    }

    @Test
    fun theStaticRegistryMapsAnElementToItsInstance() {
        val el = list("a")
        try {
            val sortable = createSortable(el)
            val found = Sortable.get(el)
            assertNotNull(found, "get() returns the instance created on this element")
            assertTrue(sortable === found, "get() returns the same object, not a copy")
            assertEquals("1.15.7", Sortable.version)
        } finally {
            Sortable.get(el)?.destroy()
            el.cleanUp()
        }
    }

    @Test
    fun destroyForgetsTheInstance() {
        val el = list("a")
        try {
            createSortable(el).destroy()
            assertNull(Sortable.get(el), "destroy() removes the instance from the registry")
        } finally {
            el.cleanUp()
        }
    }

    @Test
    fun groupAcceptsANameAndTheObjectForm() {
        val el = list("a")
        try {
            // `_prepareGroup` rewrites a string group into the object form at construction, so the
            // read-back is the normalized object, not the string that went in.
            val byName = createSortable(el) { group = "shared".asJsAny() }
            assertEquals("shared", (byName.options.group as SortableGroupOptions).name)
        } finally {
            Sortable.get(el)?.destroy()
            el.cleanUp()
        }

        val second = list("b")
        try {
            val byObject = createSortable(second) {
                group = sortableGroup("shared") { revertClone = true }
            }
            val group = byObject.options.group
            assertEquals("shared", (group as SortableGroupOptions).name)
            assertEquals(true, (group as SortableGroupOptions).revertClone)
        } finally {
            Sortable.get(second)?.destroy()
            second.cleanUp()
        }
    }

    @Test
    fun theCallbacksAreWiredIntoOptions() {
        val el = list("a", "b")
        val seen = mutableListOf<String>()
        try {
            createSortable(el) {
                onChoose = { event -> seen += "choose:${event.item?.getAttribute("data-id")}" }
                onStart = { seen += "start" }
            }
            // The callbacks live on the options object; a drag is what makes upstream fire them.
            val options = Sortable.get(el)?.options
            assertNotNull(options?.onChoose, "onChoose was stored")
            assertNotNull(options?.onStart, "onStart was stored")
            assertTrue(seen.isEmpty(), "nothing fires without a drag")
        } finally {
            Sortable.get(el)?.destroy()
            el.cleanUp()
        }
    }

    @Test
    fun theUtilsObjectIsReachable() {
        val el = list("a")
        try {
            assertTrue(Sortable.utils.expando.isNotEmpty(), "utils.expando is a string")
            assertEquals(0, Sortable.utils.index(el.firstChild as HTMLElement, null))
            assertTrue(Sortable.utils.`is`(el, "ul"))
        } finally {
            el.cleanUp()
        }
    }
}
