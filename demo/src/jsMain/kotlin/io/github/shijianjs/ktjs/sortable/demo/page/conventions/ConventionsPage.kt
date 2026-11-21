package io.github.shijianjs.ktjs.sortable.demo.page.conventions

import io.github.shijianjs.ktjs.demo.page.DemoPage
import web.dom.TagName
import io.github.shijianjs.ktjs.demo.i18n.Binder
import io.github.shijianjs.ktjs.demo.i18n.Lang
import io.github.shijianjs.ktjs.demo.i18n.Langs
import io.github.shijianjs.ktjs.demo.i18n.Translations
import io.github.shijianjs.ktjs.demo.i18n.texts
import io.github.shijianjs.ktjs.demo.page.Blocks.bulletList
import io.github.shijianjs.ktjs.demo.page.SectionBlock
import io.github.shijianjs.ktjs.dom.element.invoke
import web.html.HTMLElement
import web.html.HtmlTagName

/**
 * The rules the library and the demo are both written by, as a list.
 *
 * A list of whole lines is the one case where replacing the collection is right: each line comes from
 * one language, the nodes are this page's own, and nothing above them is touched.
 */
internal class ConventionsPage : DemoPage() {

    private val binder = Binder(conventionsTexts)

    private val list: HTMLElement = bulletList(emptyList())

    init {
        val section = SectionBlock.NAME { show() }
        binder.bind(section.heading) { it.heading }
        binder.bind(section.hint) { it.hint }
        section.body.append(list)

        body.append(section.root)
    }

    override fun applyTranslation(lang: Lang) {
        val current = conventionsTexts[lang]
        setTitle(current.title)
        setSummary(current.summary)
        binder.apply(lang)

        list.replaceChildren(*current.lines.map { HtmlTagName.li { textContent = it } }.toTypedArray())
    }

    companion object : ConventionsPageDefaultReference() {
        private val english: ConventionsTexts = ConventionsTexts(
            title = "Conventions",
            summary = "The rules this wrapper follows: declarations only, no dynamic, and a DOM call only for what " +
                "upstream itself hands out.",
            heading = "Rules this module follows",
            hint = "The checklist a review of this module looks for.",
            lines = listOf(
                "One npm package, one Gradle module, one Kotlin package: sortablejs is one export, so one file group.",
                "Declarations only: no dynamic, and every option/event field mirrors its upstream source field.",
                "Union-typed fields stay JsAny with a builder beside them (sortableGroup, point, sortableOptions).",
                "The wrapper never re-implements upstream: no drag code, no DOM helpers, only declarations.",
                "A page is a set of components; each sheet belongs to the component that owns it.",
            ),
        )
        private val chinese: ConventionsTexts = ConventionsTexts(
            title = "约定",
            summary = "这个封装遵守的规矩：只做声明、不用 dynamic，DOM 调用只限于上游自己给出的那些。",
            heading = "这个模块遵守的规矩",
            hint = "评审这个模块时照这份清单看。",
            lines = listOf(
                "一个 npm 包一个 Gradle 模块、一个 Kotlin 包：sortablejs 只有一个导出，就按一组文件来。",
                "只做声明：不用 dynamic，每个选项与事件字段都对着上游源码里的同名字段。",
                "联合类型字段保持 JsAny，旁边配构造器（sortableGroup、point、sortableOptions）。",
                "封装层从不重实现上游：不写拖拽逻辑、不重造 DOM 工具，只做声明。",
                "页面是一组组件；每份样式表都属于持有它的那个组件。",
            ),
        )
        private val conventionsTexts: Translations<ConventionsTexts> = texts(
            Langs.EN to english,
            Langs.ZH_HANS to chinese,
        )
    }
}
