package io.github.shijianjs.ktjs.sortable.demo.page.api

import io.github.shijianjs.ktjs.demo.page.DemoPage
import io.github.shijianjs.ktjs.demo.i18n.Binder
import io.github.shijianjs.ktjs.demo.i18n.Lang
import io.github.shijianjs.ktjs.demo.i18n.Langs
import io.github.shijianjs.ktjs.demo.i18n.Translations
import io.github.shijianjs.ktjs.demo.i18n.texts
import io.github.shijianjs.ktjs.demo.page.Blocks.exampleBox
import io.github.shijianjs.ktjs.demo.page.SectionBlock
import io.github.shijianjs.ktjs.dom.css.cssSheet
import io.github.shijianjs.ktjs.dom.css.dsl.className
import io.github.shijianjs.ktjs.dom.css.dsl.invoke
import io.github.shijianjs.ktjs.dom.element.invoke
import web.cssom.BorderCollapse
import web.cssom.CSSStyleSheet
import web.cssom.ClassName
import web.cssom.Padding
import web.cssom.TextAlign
import web.cssom.integer
import web.cssom.pct
import web.cssom.px
import web.html.HTMLTableRowElement
import web.html.HTMLElement
import web.html.HtmlTagName

/**
 * The mapping table: what the module declares, and what it deliberately leaves to upstream.
 *
 * The right column is code, identical in both languages, so a switch only rewrites the left column.
 */
internal class ApiPage : DemoPage() {

    private val binder = Binder(apiTexts)

    private val headRow: HTMLTableRowElement = HtmlTagName.tr()

    private val bodyRows = HtmlTagName.tbody()

    private val rows: List<ApiRow>

    init {
        rows = english.rows.map {
            val labelCell = HtmlTagName.td { classList.add(API_CELL) }
            val valueCell = HtmlTagName.td { classList.add(API_CELL) }
            bodyRows.append(HtmlTagName.tr { append(labelCell, valueCell) })
            ApiRow(labelCell, valueCell)
        }

        val table = HtmlTagName.table {
            classList.add(API_TABLE)
            append(HtmlTagName.thead { append(headRow) }, bodyRows)
        }

        val section = SectionBlock.NAME { show() }
        binder.bind(section.heading) { it.heading }
        binder.bind(section.hint) { it.hint }
        section.body.append(exampleBox(null, table))

        addSheet(TABLE_SHEET)
        body.append(section.root)
    }

    override fun applyTranslation(lang: Lang) {
        val current = apiTexts[lang]
        setTitle(current.title)
        setSummary(current.summary)
        binder.apply(lang)

        headRow.replaceChildren(
            HtmlTagName.th {
                classList.add(API_CELL)
                classList.add(API_HEAD_CELL)
                textContent = current.upstreamHeading
            },
            HtmlTagName.th {
                classList.add(API_CELL)
                classList.add(API_HEAD_CELL)
                textContent = current.kotlinHeading
            },
        )
        current.rows.zip(rows).forEach { (row, cells) ->
            cells.labelCell.textContent = row.first
            cells.valueCell.textContent = row.second
        }
    }

    companion object : ApiPageDefaultReference() {
        private val english: ApiTexts = ApiTexts(
            title = "What the wrapper maps",
            summary = "Upstream ships no type declarations: every Kotlin type below was written from `src/Sortable.js`.",
            heading = "Declaration by declaration",
            hint = "The same table a new module is cut from: read the upstream source, then decide the Kotlin type.",
            upstreamHeading = "upstream",
            kotlinHeading = "in Kotlin",
            rows = listOf(
                "npm package" to "sortablejs (main: Sortable.min.js, module: sortable.esm.js)",
                "default export" to "class Sortable — constructor + statics",
                "instance" to "Sortable: el, options, nativeDraggable, toArray(), sort(), save(), closest(), option(), destroy()",
                "statics" to "create / get / mount, utils, version, active, dragged, ghost, clone",
                "union-typed fields" to "group / filter / direction / pull / put — declared JsAny",
                "types" to "none upstream; cross-checked against @types/sortablejs 1.15.9 (MIT)",
            ),
        )
        private val chinese: ApiTexts = ApiTexts(
            title = "封装层映射了什么",
            summary = "上游不提供类型声明：下面每个 Kotlin 类型都是照 `src/Sortable.js` 写的。",
            heading = "逐条对照",
            hint = "新模块就照这张表切：先读上游源码，再决定 Kotlin 类型。",
            upstreamHeading = "上游",
            kotlinHeading = "Kotlin 侧",
            rows = listOf(
                "npm 包" to "sortablejs（main: Sortable.min.js，module: sortable.esm.js）",
                "默认导出" to "class Sortable —— 构造器 + 静态成员",
                "实例" to "Sortable：el、options、nativeDraggable、toArray()、sort()、save()、closest()、option()、destroy()",
                "静态成员" to "create / get / mount、utils、version、active、dragged、ghost、clone",
                "联合类型字段" to "group / filter / direction / pull / put —— 声明为 JsAny",
                "类型来源" to "上游没有；对照 @types/sortablejs 1.15.9（MIT）核对",
            ),
        )
        private val apiTexts: Translations<ApiTexts> = texts(
            Langs.EN to english,
            Langs.ZH_HANS to chinese,
        )
        /** The table's own class names: only this page selects and carries them. */
        private val API_TABLE: ClassName = ClassName("api-table")
        private val API_CELL: ClassName = ClassName("api-cell")
        private val API_HEAD_CELL: ClassName = ClassName("api-cell-head")

        /**
         * A static definition table has no Vaadin component counterpart — `vaadin-grid` is the element for data
         * a user navigates, and this is six fixed rows — so it stays a real `<table>`.
         *
         * The rules are the table's own: collapse the borders, one padding per cell, and the header weight. Colours
         * come from Lumo's tokens, so the table follows the theme like everything else on the page.
         */
        private val TABLE_SHEET: CSSStyleSheet = cssSheet {
            className(API_TABLE).invoke {
                width = 100.pct
                borderCollapse = BorderCollapse.collapse
            }

            className(API_CELL).invoke {
                padding = Padding(6.px, 8.px)
            }

            className(API_HEAD_CELL).invoke {
                width = 32.pct
                fontWeight = integer(600)
                textAlign = TextAlign.left
            }
        }
    }
}
