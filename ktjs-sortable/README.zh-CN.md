# ktjs-sortable

[`sortablejs`](https://www.npmjs.com/package/sortablejs) 的 Kotlin/JS wrapper。一个 npm 包、一个 Gradle
模块、一个 Kotlin 包：`SortableModule.kt` 放类与静态成员，`SortableTypes.kt` 放选项与事件形状。

## 安装

```kotlin
dependencies {
    implementation("io.github.shijianjs:ktjs-sortable:1.15.7-kt.1")
}
```

## 用法

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

`createSortable` 就是 `Sortable.create(el, options)` 加构造器；想自己持有选项对象的代码仍可直接用
`Sortable`。`toArray()` 从 `options.dataIdAttr` 读 id，`sort()` 重排子元素，剩下的实例表面由
`option(name[, value])`、`save()`、`destroy()` 覆盖。

## 构建与测试

```bash
./gradlew :ktjs-sortable:jsBrowserTest
```

新增或升级 npm 依赖后，刷新共享锁文件：

```bash
./gradlew kotlinUpgradePackageLock
```

npm 包不带 `.d.ts`；声明按 `src/Sortable.js` 写，并与 `@types/sortablejs` 1.15.9 对照。封装了什么、
刻意不封装什么，见 [`../docs/development/coverage.md`](../docs/development/coverage.md)。
