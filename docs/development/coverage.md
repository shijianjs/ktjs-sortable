# API coverage

## 来源与范围

- 上游：[SortableJS/Sortable](https://github.com/SortableJS/Sortable)，本地副本 `S:\workspace\github\SortableJS\Sortable`
- 版本：`sortablejs` 1.15.7（根 `package.json`），npm 包 **不带** `.d.ts`
- 声明依据：`src/Sortable.js`（构造器与 `_defaults`、实例方法、静态成员、`utils`），类型形状另外与
  `@types/sortablejs` 1.15.9 逐字段对照；两者冲突时以源码为准
- 核对日期：2026-11-22
- 纳入统计：默认入口（`Sortable.min.js` / `modular/sortable.esm.js`）导出的公开成员，以及它们读写的
  选项与事件形状
- 不纳入：`modular/sortable.complete.esm.js`（另一个入口，预挂插件）、`plugins/` 目录、`src/` 内部实现、
  站点源码

上游是 MIT 许可，没有商业版本；核心库及其插件都在 MIT 之下，需要排除的只有「本模块不引用的另一个入口」。

## 统计

| 状态 | 数量 |
|---|---:|
| 总计 | 57 |
| 已完成 | 51 |
| 明确不做 | 6 |
| 待完成 | 0 |

统计口径：把「一个类型 / 一组同族成员」算一条（例如 `utils.nextTick` 与 `cancelNextTick` 合为一条、
十一个回调按语义分组），不是逐字段计数。

## 已完成（51）

| # | 上游声明 | Kotlin 侧 | 验证 |
|---|---|---|---|
| 1 | `class Sortable(el, options)` | `Sortable`（`SortableModule.kt`） | `createReadsTheItemsInDomOrder` |
| 2 | `el` | 同名属性 | 同上 |
| 3 | `options`（默认值已合并，可写） | 同名属性 | `theOptionAccessorReadsAndWritesByName` |
| 4 | `nativeDraggable` | 同名属性 | 编译期 |
| 5 | `toArray()` | 同名方法 | `createReadsTheItemsInDomOrder`、`sortReorders…` |
| 6 | `sort(order, useAnimation)` | 同名方法 | `sortReordersTheDomToFollowTheGivenOrder` |
| 7 | `save()` | 同名方法 | 编译期（`store` 在 #38） |
| 8 | `closest(el, selector)` | 同名方法 | 编译期 |
| 9 | `option(name)`（getter） | 同名重载 | `theOptionAccessorReadsAndWritesByName` |
| 10 | `option(name, value)`（setter） | 同名重载 | 同上 |
| 11 | `destroy()` | 同名方法 | `destroyForgetsTheInstance` |
| 12 | `Sortable.create`（static） | companion `create` + `createSortable` | 全部用例 |
| 13 | `Sortable.get`（static） | companion `get` | `theStaticRegistryMapsAnElementToItsInstance` |
| 14 | `Sortable.mount`（static） | companion `mount(vararg JsAny)` | 编译期 |
| 15 | `Sortable.version`（static） | companion `version` | `theStaticRegistryMapsAnElementToItsInstance` |
| 16 | `Sortable.active`（static） | companion `active` | 编译期 |
| 17 | `Sortable.dragged`（static） | companion `dragged` | 编译期 |
| 18 | `Sortable.ghost`（static） | companion `ghost` | 编译期 |
| 19 | `Sortable.clone`（static） | companion `clone` | 编译期 |
| 20 | `Sortable.utils`（static） | `SortableUtils` | `theUtilsObjectIsReachable` |
| 21 | `utils.on` | 同名方法 | 编译期 |
| 22 | `utils.off` | 同名方法 | 编译期 |
| 23 | `utils.css`（三种 arity） | 三个重载 | 编译期 |
| 24 | `utils.find` | 同名方法 | 编译期 |
| 25 | `utils.is` | 同名方法（`is` 带反引号） | 编译期 |
| 26 | `utils.closest` | 同名方法 | 编译期 |
| 27 | `utils.toggleClass` | 同名方法 | 编译期 |
| 28 | `utils.index` | 同名方法 | 编译期 |
| 29 | `utils.clone` | 同名方法 | 编译期 |
| 30 | `utils.extend` | 同名方法 | 编译期 |
| 31 | `utils.nextTick` / `cancelNextTick` | 两个方法 | 编译期 |
| 32 | `utils.getChild` | 同名方法 | 编译期 |
| 33 | `utils.expando` | 同名属性 | `theUtilsObjectIsReachable` |
| 34 | `Options`（30+ 字段） | `SortableOptions` + `sortableOptions { }` | `createReadsTheItemsInDomOrder`、`theCallbacksAreWiredIntoOptions` |
| 35 | `group` 字符串形式 | `JsAny` + `String.asJsAny()` | `groupAcceptsANameAndTheObjectForm` |
| 36 | `group` 对象形式 | `SortableGroupOptions` + `sortableGroup()` | 同上 |
| 37 | `fallbackOffset`（`{x, y}`） | `Point` + `point()` | 编译期 |
| 38 | `store`（`{get, set}`） | `SortableStore` | 编译期 |
| 39 | 事件载荷 | `SortableEvent` | `theCallbacksAreWiredIntoOptions` |
| 40 | `onMove` 的载荷 | `SortableMoveEvent` + `Event` 参数 | 编译期 |
| 41 | `onChoose` / `onUnchoose` | 同名字段 | `theCallbacksAreWiredIntoOptions` |
| 42 | `onStart` | 同名字段 | 同上 |
| 43 | `onEnd` | 同名字段 | 同上、demo `PlaygroundPage` |
| 44 | `onAdd` | 同名字段 | `theCallbacksAreWiredIntoOptions` |
| 45 | `onUpdate` | 同名字段 | 同上 |
| 46 | `onSort` | 同名字段 | 同上 |
| 47 | `onRemove` | 同名字段 | 同上 |
| 48 | `onFilter` | 同名字段 | 同上 |
| 49 | `onMove`（可否决） | 返回 `JsAny?`，回调两参 | 编译期 |
| 50 | `onClone` | 同名字段 | `theCallbacksAreWiredIntoOptions` |
| 51 | `setData`（拖拽载荷） | `(DataTransfer, HTMLElement) -> Unit` | 编译期 |

## 明确不做（6）

| # | 上游部分 | 为什么不做 |
|---|---|---|
| 52 | MultiDrag 插件 | 只在 `modular/sortable.complete.esm.js` 里预挂，默认入口不导出；封装若引入就等于换掉依赖入口 |
| 53 | Swap 插件 | 同上 |
| 54 | 带 `Sortable.mount` 的插件基类与 `utils.extend` 约定 | `mount` 已声明（#14），但插件类本身在另一个入口；声明基类会给出「能挂」的错觉 |
| 55 | `OnSpill` / `RevertOnSpill` 插件 | 同 #52 —— 它们是 OnSpill 家族的两个成员，同样只存在于 complete 构建 |
| 56 | AutoScroll 插件 | 同上 |
| 57 | `plugins/` 目录（含 MultiDrag 的 README） | npm 包里只有说明文本，没有可运行的代码；封装的依赖是默认入口 |

## 决策记录

1. **默认入口优先。** 根 `package.json` 声明 `sortablejs` 1.15.7，模块 `build.gradle.kts` 用
   `implementation(npm("sortablejs", …))`；`main` 是 `Sortable.min.js`、`module` 是
   `modular/sortable.esm.js`。complete 构建不引入，因此插件不封装，`mount` 只作为逃生口保留。
2. **不继承 `Event`。** kotlin-browser 的 `Event` 是 class，external interface 不能继承一个 class，
   所以 `SortableEvent` 自己声明 `target` / `originalEvent` 字段。
3. **`group` 用 `JsAny` + 构造器。** 上游 `_prepareGroup` 把字符串归一化成对象，两种输入最终同一形状；
   Kotlin 侧不做 sealed，因为写回时 `option("group", …)` 允许再传字符串。
4. **`onMove` 返回 `JsAny?`。** 上游接受 `false` 或 `Promise<false>`；一个签名表达不了，所以保留联合类型，
   文档给 `false.asJsAny()` 的写法。
5. **`option` 双 arity。** 上游是同一个 JS 函数按参数个数分行为，Kotlin 用两个 external 重载共享同一个
   JS 名；这是 Kotlin/JS 唯一能表达 getter/setter 同名的办法。
6. **类型参考 `@types/sortablejs` 但不依赖它。** 1.15.9 的 `Options` 与 `SortableEvent` 给了字段清单，
   源码给的默认值与归一化行为更可信；两者冲突以源码为准，且不把它写进 `package.json`。

## Kotlin 侧新增（不计入上游统计）

`createSortable`、`sortableOptions`、`sortableGroup`、`point`、`String.asJsAny`、`Boolean.asJsAny`
是本封装自己的便利入口，上游没有对应声明，只在上表和 #34–#37 的「Kotlin 侧」列出现。
