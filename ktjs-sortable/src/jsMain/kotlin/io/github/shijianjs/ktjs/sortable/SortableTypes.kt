package io.github.shijianjs.ktjs.sortable

import js.objects.unsafeJso
import kotlin.js.JsAny
import web.cssom.CSSStyleDeclaration
import web.data.DataTransfer
import web.dom.NodeList
import web.events.Event
import web.html.HTMLElement

/**
 * The options object upstream reads, plus the callbacks it fires.
 *
 * Every field is nullable and starts out `undefined`, which is what lets upstream's defaults apply.
 * Build one with [sortableOptions]. The package ships no `.d.ts`; these declarations were written from
 * `src/Sortable.js` and cross-checked against `@types/sortablejs` 1.15.9 — see the coverage document.
 */
external interface SortableOptions {
    /** Animation duration while sorting, in milliseconds; `0` means none. */
    var animation: Int?
    var chosenClass: String?
    var dataIdAttr: String?
    var delay: Int?
    var delayOnTouchOnly: Boolean?

    /** `"vertical"` / `"horizontal"`, or a callback; `JsAny` because upstream accepts both. */
    var direction: JsAny?
    var disabled: Boolean?
    var dragClass: String?
    var draggable: String?
    var dragoverBubble: Boolean?
    var dropBubble: Boolean?
    var emptyInsertThreshold: Int?
    var easing: String?
    var fallbackClass: String?
    var fallbackOnBody: Boolean?
    var fallbackTolerance: Int?
    var fallbackOffset: Point?

    /** Selector or predicate deciding which elements do not start a drag. */
    var filter: JsAny?
    var forceFallback: Boolean?
    var ghostClass: String?

    /** A group name, or the object form built by [sortableGroup]. */
    var group: JsAny?
    var handle: String?
    var ignore: String?
    var invertSwap: Boolean?
    var invertedSwapThreshold: Double?
    var preventOnFilter: Boolean?
    var removeCloneOnHide: Boolean?
    var sort: Boolean?
    var store: SortableStore?
    var swapThreshold: Double?
    var touchStartThreshold: Int?
    var setData: ((DataTransfer, HTMLElement) -> Unit)?
    var onChoose: ((SortableEvent) -> Unit)?
    var onUnchoose: ((SortableEvent) -> Unit)?
    var onStart: ((SortableEvent) -> Unit)?
    var onEnd: ((SortableEvent) -> Unit)?
    var onAdd: ((SortableEvent) -> Unit)?
    var onUpdate: ((SortableEvent) -> Unit)?
    var onSort: ((SortableEvent) -> Unit)?
    var onRemove: ((SortableEvent) -> Unit)?
    var onFilter: ((SortableEvent) -> Unit)?
    var onMove: ((SortableMoveEvent, Event) -> JsAny?)?
    var onClone: ((SortableEvent) -> Unit)?
}

/** `fallbackOffset`: where the fallback ghost is placed relative to the pointer. */
external interface Point {
    var x: Double
    var y: Double
}

/** Persistence hooks: `get` supplies the order, `set` stores it. */
external interface SortableStore {
    fun get(sortable: Sortable): Array<String>
    fun set(sortable: Sortable)
}

/** `group` in its object form: who may pull from, and who may put into, a list. */
external interface SortableGroupOptions {
    var name: String

    /** `true`/`false`, `"clone"`, a list of group names, or a predicate. */
    var pull: JsAny?
    var put: JsAny?
    var checkPull: JsAny?
    var checkPut: JsAny?
    var revertClone: Boolean?
}

/**
 * The event object the callbacks receive.
 *
 * Upstream sets the fields per event, so most are optional: `onStart` has no `oldIndex`, an `onAdd`
 * between two lists has both `from` and `to`. `Event` in `kotlin-browser` is a class, and an external
 * interface cannot extend one, so the fields are declared here instead of inheriting them.
 */
external interface SortableEvent {
    var to: HTMLElement?
    var from: HTMLElement?
    var item: HTMLElement?
    var clone: HTMLElement?
    var oldIndex: Int?
    var newIndex: Int?
    var oldDraggableIndex: Int?
    var newDraggableIndex: Int?
    var pullMode: JsAny?
    var related: HTMLElement?
    var willInsertAfter: Boolean?
    var originalEvent: Event?
    var target: HTMLElement?
}

/** `onMove` receives the move event plus the DOM event that caused it; return `false` to cancel. */
external interface SortableMoveEvent {
    var to: HTMLElement
    var from: HTMLElement
    var dragged: HTMLElement
    var related: HTMLElement
    var draggedRect: web.geometry.DOMRect?
    var relatedRect: web.geometry.DOMRect?
    var willInsertAfter: Boolean?
}

/** `Sortable.utils`: the DOM helpers upstream exports on the constructor. */
external interface SortableUtils {
    fun on(element: HTMLElement, event: String, handler: (Event) -> Unit)
    fun off(element: HTMLElement, event: String, handler: (Event) -> Unit)
    fun css(element: HTMLElement): CSSStyleDeclaration
    fun css(element: HTMLElement, prop: String): JsAny?
    fun css(element: HTMLElement, prop: String, value: String)
    fun find(context: HTMLElement, tagName: String, iterator: ((HTMLElement, Int) -> Unit)?): NodeList<HTMLElement>
    fun `is`(element: HTMLElement, selector: String): Boolean
    fun closest(element: HTMLElement, selector: String, context: HTMLElement?): HTMLElement?
    fun toggleClass(element: HTMLElement, name: String, state: Boolean)
    fun index(element: HTMLElement, selector: String?): Int
    fun clone(element: HTMLElement): HTMLElement
    fun extend(to: JsAny, from: JsAny): JsAny
    fun nextTick(fn: () -> Unit): Int
    fun cancelNextTick(id: Int)
    fun getChild(dragEl: HTMLElement, selector: String, context: HTMLElement?): HTMLElement?
    val expando: String
}

/** Builds a [SortableOptions] with only the fields the lambda sets. */
fun sortableOptions(configure: SortableOptions.() -> Unit = {}): SortableOptions =
    unsafeJso<SortableOptions>().apply(configure)

/** Builds the object form of `group`. */
fun sortableGroup(groupName: String, configure: SortableGroupOptions.() -> Unit = {}): SortableGroupOptions =
    unsafeJso<SortableGroupOptions> {
        name = groupName
    }.apply(configure)

/** Builds a [Point], for `fallbackOffset`. */
fun point(x: Double, y: Double): Point = unsafeJso {
    this.x = x
    this.y = y
}

/** `Sortable.create` with an options builder — the one call a page normally needs. */
fun createSortable(el: HTMLElement, configure: SortableOptions.() -> Unit = {}): Sortable =
    Sortable.create(el, sortableOptions(configure))

/** Widens a Kotlin value to the `JsAny` slot the union-typed option fields expect. */
fun String.asJsAny(): JsAny = this as JsAny

/** Widens a Kotlin boolean to the `JsAny` slot the union-typed option fields expect. */
fun Boolean.asJsAny(): JsAny = this as JsAny