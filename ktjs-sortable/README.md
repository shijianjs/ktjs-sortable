# ktjs-sortable

Kotlin/JS wrapper for [`sortablejs`](https://www.npmjs.com/package/sortablejs). One npm package, one
Gradle module, one Kotlin package: `SortableModule.kt` holds the class and its statics,
`SortableTypes.kt` the option and event shapes.

## Installation

```kotlin
dependencies {
    implementation("io.github.shijianjs:ktjs-sortable:1.15.7-kt.1")
}
```

## Usage

```kotlin
import io.github.shijianjs.ktjs.sortable.createSortable
import io.github.shijianjs.ktjs.sortable.sortableGroup
import io.github.shijianjs.ktjs.sortable.asJsAny

val list = createSortable(container) {
    animation = 150
    dataIdAttr = "data-id"
    group = sortableGroup("board") { pull = "clone".asJsAny() }
    onEnd = { event -> println("${event.oldIndex} -> ${event.newIndex}") }
}

list.sort(list.toArray().reversedArray(), true)
```

`createSortable` is `Sortable.create(el, options)` with a builder; `Sortable` itself stays available
for code that wants to hold the options object. `toArray()` reads the ids from `options.dataIdAttr`,
`sort()` re-orders the children, and `option(name[, value])`, `save()` and `destroy()` cover the rest
of the instance surface.

## Build and test

```bash
./gradlew :ktjs-sortable:jsBrowserTest
```

After adding or upgrading an npm dependency, refresh the shared lock file:

```bash
./gradlew kotlinUpgradePackageLock
```

The npm package ships no `.d.ts`; the declarations were written from `src/Sortable.js` and checked
against `@types/sortablejs` 1.15.9. What is wrapped, and what is deliberately not, is listed in
[`../docs/development/coverage.md`](../docs/development/coverage.md).
