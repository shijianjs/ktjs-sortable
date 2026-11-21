package io.github.shijianjs.ktjs.sortable.demo.page.playground

import io.github.shijianjs.ktjs.demo.i18n.Binder
import io.github.shijianjs.ktjs.demo.i18n.Lang
import io.github.shijianjs.ktjs.demo.i18n.Langs
import io.github.shijianjs.ktjs.demo.i18n.Translations
import io.github.shijianjs.ktjs.demo.i18n.texts
import io.github.shijianjs.ktjs.demo.page.Blocks.exampleBox
import io.github.shijianjs.ktjs.demo.page.Blocks.row
import io.github.shijianjs.ktjs.demo.page.DemoPage
import io.github.shijianjs.ktjs.demo.page.Readout
import io.github.shijianjs.ktjs.demo.page.SectionBlock
import io.github.shijianjs.ktjs.dom.element.invoke
import io.github.shijianjs.ktjs.sortable.Sortable
import io.github.shijianjs.ktjs.sortable.createSortable
import io.github.shijianjs.ktjs.vaadin.button.createButton
import io.github.shijianjs.ktjs.vaadin.card.createCard
import io.github.shijianjs.ktjs.vaadin.themablemixin.addTheme
import io.github.shijianjs.ktjs.vaadin.verticallayout.VerticalLayoutVariants
import io.github.shijianjs.ktjs.vaadin.verticallayout.createVerticalLayout
import web.dom.ElementId
import web.dom.clickEvent
import web.events.EventHandler
import web.events.addHandler
import web.html.HTMLDivElement
import web.html.HTMLElement
import web.html.HtmlTagName

/**
 * The one thing the wrapper exists for: a list whose rows a reader can drag.
 *
 * The list is a `vaadin-vertical-layout` whose children are the draggable items — upstream's default
 * `draggable` is `>*`, so nothing has to be marked up with a selector. Each row is a `vaadin-card`
 * carrying `data-id`, which is what `toArray()` reports and what `sort()` consumes.
 *
 * Three buttons take the imperatively reachable half of the API: read the order, reverse it, and shuffle
 * it. The readout is written from `toArray()` every time, so it shows what upstream thinks the order is
 * rather than what the page believes.
 */
internal class PlaygroundPage : DemoPage() {

    private val binder = Binder(playgroundTexts)

    private val list: HTMLElement = createVerticalLayout { addTheme(VerticalLayoutVariants.spacing) }.apply {
        style.setProperty("width", "100%")
        id = ElementId("sortable-list")
    }

    private val cards = mutableListOf<HTMLElement>()

    private val status = Readout.NAME { show() }

    private val shuffle = createButton()

    private val reverse = createButton()

    private val readOrder = createButton()

    private lateinit var sortable: Sortable

    private var current: PlaygroundTexts = english

    init {
        english.items.forEach { item ->
            val card = createCard {
                addTheme(io.github.shijianjs.ktjs.vaadin.card.CardVariants.outlined)
            }
            card.setAttribute("data-id", item.id)
            card.style.cursor = "grab"
            card.append(
                HtmlTagName.strong { textContent = item.name },
                HtmlTagName.span { textContent = item.detail },
            )
            cards += card
            list.append(card)
        }

        sortable = createSortable(list) {
            animation = 150
            ghostClass = "sortable-ghost"
            chosenClass = "sortable-chosen"
            onEnd = { writeOrder() }
        }

        shuffle.clickEvent.addHandler(EventHandler {
            sortable.sort(shuffled(), true)
            writeOrder()
        })
        reverse.clickEvent.addHandler(EventHandler {
            sortable.sort(reversed(), true)
            writeOrder()
        })
        readOrder.clickEvent.addHandler(EventHandler { writeOrder() })

        val section = SectionBlock.NAME { show() }
        binder.bind(section.heading) { it.heading }
        binder.bind(section.hint) { it.hint }
        section.body.append(exampleBox(null, list, row(shuffle, reverse, readOrder), status.root))

        body.append(section.root)
        writeOrder()
    }

    /** Reads the order from upstream, so the readout cannot drift from the DOM. */
    private fun writeOrder() {
        status.set("${current.statusPrefix}: ${sortable.toArray().joinToString(", ")}")
    }

    /** A fixed permutation rather than a random one, so a test can predict it. */
    private fun shuffled(): Array<String> {
        val ids = sortable.toArray()
        return arrayOf(ids[2], ids[0], ids[4], ids[1], ids[3])
    }

    private fun reversed(): Array<String> = sortable.toArray().reversedArray()

    override fun applyTranslation(lang: Lang) {
        current = playgroundTexts[lang]
        setTitle(current.title)
        setSummary(current.summary)
        binder.apply(lang)
        shuffle.textContent = current.shuffle
        reverse.textContent = current.reverse
        readOrder.textContent = current.readOrder
        current.items.forEach { item ->
            val card = cards.first { it.getAttribute("data-id") == item.id }
            card.replaceChildren(
                HtmlTagName.strong { textContent = item.name },
                HtmlTagName.span { textContent = item.detail },
            )
        }
        writeOrder()
    }

    companion object : PlaygroundPageDefaultReference() {
        private val english: PlaygroundTexts = PlaygroundTexts(
            title = "Playground",
            summary = "A list created by `createSortable`: rows can be dragged, and the buttons drive " +
                "`sort()` and `toArray()`.",
            heading = "Drag the rows",
            hint = "The rows are `vaadin-card` children of one vertical layout; `data-id` is what the " +
                "wrapper reports as the order. Drag one row over another, or use the buttons.",
            shuffle = "Shuffle",
            reverse = "Reverse",
            readOrder = "Read order",
            statusPrefix = "Order",
            items = listOf(
                PlaygroundItemTexts("alpha", "Alpha", "the first row"),
                PlaygroundItemTexts("bravo", "Bravo", "moves by drag"),
                PlaygroundItemTexts("charlie", "Charlie", "moves by sort()"),
                PlaygroundItemTexts("delta", "Delta", "keeps its data-id"),
                PlaygroundItemTexts("echo", "Echo", "reports through toArray()"),
            ),
        )
        private val chinese: PlaygroundTexts = PlaygroundTexts(
            title = "演练场",
            summary = "用 `createSortable` 建的一个列表：行可以拖，按钮驱动 `sort()` 与 `toArray()`。",
            heading = "拖动这些行",
            hint = "这些行是一个垂直布局下的 `vaadin-card`；`data-id` 就是封装层报出的顺序。把一行拖到另一行上，" +
                "或者直接用按钮。",
            shuffle = "打乱",
            reverse = "倒序",
            readOrder = "读取顺序",
            statusPrefix = "顺序",
            items = listOf(
                PlaygroundItemTexts("alpha", "Alpha", "第一行"),
                PlaygroundItemTexts("bravo", "Bravo", "靠拖动换位"),
                PlaygroundItemTexts("charlie", "Charlie", "靠 sort() 换位"),
                PlaygroundItemTexts("delta", "Delta", "保留自己的 data-id"),
                PlaygroundItemTexts("echo", "Echo", "通过 toArray() 报出"),
            ),
        )
        private val playgroundTexts: Translations<PlaygroundTexts> = texts(
            Langs.EN to english,
            Langs.ZH_HANS to chinese,
        )
    }
}
