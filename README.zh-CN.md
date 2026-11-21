# ktjs-sortable

<p align="center"><img src="docs/src/jsMain/resources/static/img/ktjs-sortable-logo.png" width="120" alt="ktjs-sortable"></p>

[`sortablejs`](https://www.npmjs.com/package/sortablejs) 的 Kotlin/JS 封装：`Sortable` 类、它的选项、
它的十一个回调，以及它保存的静态注册表。

[English](README.md) | [简体中文](README.zh-CN.md)

**[文档](https://shijianjs.github.io/ktjs-sortable/)** ·
**[在线演示](https://shijianjs.github.io/ktjs-sortable/demo/)** ·
**[API 文档](https://shijianjs.github.io/ktjs-sortable/api/)**

```kotlin
val list = createSortable(container) {
    animation = 150
    dataIdAttr = "data-id"
    onEnd = { _ -> status.set(list.toArray().joinToString(", ")) }
}

list.sort(arrayOf("charlie", "alpha", "bravo"))
```

## 模块

| 模块 | npm 包 | wrapper 版本 |
| --- | --- | --- |
| [ktjs-sortable](ktjs-sortable/README.zh-CN.md) | `sortablejs` | `1.15.7-kt.1` |

## 封装了什么

| 上游 | Kotlin |
| --- | --- |
| `Sortable`（默认导出） | `Sortable`，通过 `createSortable` 构造 |
| `Options` | `SortableOptions`（字段全部可空）+ `sortableOptions { }` 构造器 |
| `group`（字符串或对象） | `JsAny` + `sortableGroup(name) { }` |
| 各事件的载荷 | `SortableEvent`、`SortableMoveEvent` |
| `Sortable.utils` | `SortableUtils` |
| `store`、`fallbackOffset` | `SortableStore`、`Point` |
| `Sortable.create` / `get` / `mount` / `version` / `active` / `dragged` / `ghost` / `clone` | companion 对象 |

npm 包不带 `.d.ts`：声明按 `src/Sortable.js` 写，再与 `@types/sortablejs` 1.15.9 逐字段对照。
放在 `complete` 另一个入口里的插件刻意不封装，理由见
[docs/development/coverage.md](docs/development/coverage.md)。

## 版本约定

每个模块的版本是 `{上游 npm 版本}-kt.{修订号}`。上游 npm 版本只在根
[`package.json`](package.json) 里声明；修订号按模块记在
[`wrapper-revisions.properties`](wrapper-revisions.properties)。Gradle 由这两个文件推出 base 版本与
`npm(...)` 依赖：

- 只发布 `-kt.N` 版本；不带后缀的版本号从来不存在。
- 工作树总加 `-SNAPSHOT`：推出的号是*下一个*发布版本，Central 上还没有，所以开发构建不会冒充它。
  发布时传 `-Pktjs.release=true` 去掉后缀。
- 升级上游：改 `package.json` 里的版本，base 版本自动跟随，修订号不动，即使封装代码没变。
- 只修封装：修订号递增（`kt.2`、`kt.3`……），base 版本不动。

## 环境要求

- JDK 21 或更新（构建用 Gradle 9.4.1）。
- Node 与 npm 由 Kotlin Gradle 插件自动下载；`gradle.properties` 里 `kotlin.js.yarn=false` 保持用 npm。
- 首次跑浏览器测试时，Playwright 会下载 Chromium。

## 构建与测试

```bash
./gradlew build                    # 编译、Detekt、浏览器测试
./gradlew :ktjs-sortable:jsBrowserTest

# demo 页的端到端检查（Playwright，打的是打包后的产物）
./gradlew :demo:e2eTest

# 文档站：Kotlin 配置、Markdown 页面，由 ktjs-docusaurus 构建
./gradlew :docs:docusaurusBuild

# GitHub Pages 站点（根目录是文档，/demo/ 是演示，/api/ 是 Dokka 输出）
./gradlew pagesSite
```

新增或升级 npm 依赖后，刷新共享锁文件：

```bash
./gradlew kotlinUpgradePackageLock
```

`docs` 模块同样是 Kotlin/JS 项目。ktjs-docusaurus 的几个版本写在 `gradle.properties`，因为它们各自带修订号；
那里写 SNAPSHOT 时从 `mavenLocal` 解析。kit 的浏览器 bundle 不是 Maven 产物：它以资源形式随 kit 的 klib 走，
`extractKitBundle` 把它拷到站点的 `static/ktjs-client/`。

## 发布

发布在根 [`build.gradle.kts`](build.gradle.kts) 里对所有模块统一配置。发布流程走
`.github/workflows/release.yml`：签名产物、按 Maven 坐标各打一个包，注册到共享的 Maven Central hub，
由它把待发布的登记合并成一次部署。

## 许可证

以 [MIT License](LICENSE) 发布。`sortablejs` 同样是 MIT，版权归 SortableJS——
见[许可证](https://shijianjs.github.io/ktjs-sortable/zh-Hans/guide/licensing)。
