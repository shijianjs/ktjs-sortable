# TODO

## 上游 API 覆盖

把 `sortablejs` 1.15.7 的公开声明（`src/Sortable.js` 的实例成员、静态成员与选项/事件形状）映射成
Kotlin 类型，并在浏览器里跑通。

- 总计：57
- 已完成：51
- 明确不做：6
- 待完成：0

详细清单：[coverage.md](docs/development/coverage.md)

### 当前待办

- [ ] 无。下一批事项见本文件的「项目交付」小节。

## 项目交付

- [x] 模块 `ktjs-sortable`：`SortableModule.kt` / `SortableTypes.kt`
- [x] jsTest：8 个用例，`./gradlew :ktjs-sortable:jsBrowserTest` 通过
- [x] demo：overview / playground / api / conventions，中英双语，接 `ktjs-dom-kit` 与 `ktjs-vaadin`
- [x] docs：intro / getting-started / usage / licensing，中英双语，kit 首页五件套、右侧 TOC 可折叠
- [x] `pagesSite` 产站 + `gh-pages` 分支发布；Pages 工作流暂为手动（站内依赖 kit 的 SNAPSHOT，CI 解析不了）
- [x] MIT 许可 + `sortablejs` 的 MIT 声明（[guide/licensing](docs/src/jsMain/resources/docs/guide/licensing.md)）
- [x] `.agents/skills/` 同步（模板副本）
- [x] GitHub 仓库创建与首次推送（<https://github.com/shijianjs/ktjs-sortable>）
- [x] Pages：<https://shijianjs.github.io/ktjs-sortable/>（legacy + `gh-pages`，文档根、`/demo/`、`/api/`、`/zh-Hans/` 均 200）

### 注意事项

- 声明只放 `jsMain`：`external interface` / `external class`，不写 `dynamic`。
- 上游没有 `.d.ts`：声明按 `src/Sortable.js` 写，再与 `@types/sortablejs` 1.15.9 逐字段对照（源码为准）。
- 构造时 `group` 会被归一化成对象，所以 read-back 拿到的是对象；`option("group", …)` 会重跑 `_prepareGroup`。
- `sort()` 同步改 DOM 但**不触发**回调：页面若在 `onEnd` 里读顺序，按钮路径要自己再读一次。
- 加 npm 依赖要同时改根 `package.json` 与模块 `build.gradle.kts` 的 `npm(...)`，然后跑 `kotlinUpgradePackageLock`。
- 版本口径：`<npm 版本>-kt.<修订号>`，工作树写 `-SNAPSHOT`。
