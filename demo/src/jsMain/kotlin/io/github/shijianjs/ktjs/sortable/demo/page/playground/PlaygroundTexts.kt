package io.github.shijianjs.ktjs.sortable.demo.page.playground

/** The playground page's copy: headings, the three button labels and the five rows. */
internal class PlaygroundTexts(
    val title: String,
    val summary: String,
    val heading: String,
    val hint: String,
    val shuffle: String,
    val reverse: String,
    val readOrder: String,
    val statusPrefix: String,
    val items: List<PlaygroundItemTexts>,
)

/** One row of the list; [id] is what `toArray` reports and the other two strings are what it shows. */
internal class PlaygroundItemTexts(val id: String, val name: String, val detail: String)
