@file:JsModule("sortablejs")

package io.github.shijianjs.ktjs.sortable

import kotlin.js.JsAny
import web.html.HTMLElement

/**
 * `Sortable`: the class upstream exports as the module's default.
 *
 * ```js
 * import Sortable from 'sortablejs';
 * const list = Sortable.create(el, { animation: 150 });
 * ```
 *
 * One npm package, one class, one static object. The statics below are properties of the constructor
 * function itself (`Sortable.get(el)`), which is why they live in the companion: the companion is what
 * Kotlin/JS compiles a static member access into.
 */
external open class Sortable(el: HTMLElement, options: SortableOptions?) {
    /** The root element this instance is bound to. */
    val el: HTMLElement

    /** The options object, defaults already merged in. Assigning a field applies it in place. */
    var options: SortableOptions

    /** Whether the native HTML5 drag-and-drop path is in use (false when `forceFallback` is set). */
    val nativeDraggable: Boolean

    /**
     * Serializes the sortable's items into an array of ids.
     *
     * Items are read from `options.dataIdAttr`, or generated from the element's index when the attribute
     * is missing.
     */
    fun toArray(): Array<String>

    /** Moves the items into the order [order]; `useAnimation` runs the configured animation. */
    fun sort(order: Array<String>, useAnimation: Boolean?)

    /** Calls `options.store.set` with this instance, if a store was configured. */
    fun save()

    /** The closest ancestor-or-self of [el] matching [selector] (default: `options.draggable`). */
    fun closest(el: HTMLElement, selector: String?): HTMLElement?

    /**
     * Reads one option by name.
     *
     * Upstream is a getter/setter pair differentiated by arity; Kotlin cannot express one signature
     * returning either, so both arities are declared here.
     */
    fun option(name: String): JsAny?

    /** Writes one option by name, going through the plugin option hook. */
    fun option(name: String, value: JsAny?)

    /** Removes the sortable functionality from [el] and its items. */
    fun destroy()

    companion object {
        /** The instance whose drag is currently in progress, or `null`. */
        var active: Sortable?

        /** The element being dragged right now, or `null`. */
        var dragged: HTMLElement?

        /** The ghost element drawn in the drop target, or `null`. */
        var ghost: HTMLElement?

        /** The clone element when the group pulls a copy, or `null`. */
        var clone: HTMLElement?

        /** The utility object plugins extend; see [SortableUtils]. */
        val utils: SortableUtils

        /** The upstream version, `1.15.7` for this wrapper. */
        val version: String

        /** Creates an instance; the Kotlin-side entry point is [createSortable]. */
        fun create(el: HTMLElement, options: SortableOptions?): Sortable

        /** The instance bound to [el], or `null` when there is none. */
        fun get(el: HTMLElement): Sortable?

        /** Mounts plugin constructors onto the class. */
        fun mount(vararg plugins: JsAny)
    }
}
