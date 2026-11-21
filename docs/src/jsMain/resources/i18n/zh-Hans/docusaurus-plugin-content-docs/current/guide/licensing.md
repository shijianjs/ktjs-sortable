---
sidebar_position: 3
---

# 许可

## 封装本身

`ktjs-sortable` 采用 MIT 许可。见 [LICENSE](https://github.com/shijianjs/ktjs-sortable/blob/main/LICENSE)。

## 上游

`sortablejs` 1.15.7 为 MIT 许可，版权归 SortableJS。它的条款随 npm 包一起分发，该包仍是本模块的依赖；
这里不对它重新授权。

`@types/sortablejs` 1.15.9（MIT，DefinitelyTyped）只是**写声明时的对照参考**——它不是依赖，其文本也没有
被复制进本模块。

## 使用方需要做什么

| 问题 | 回答 |
| --- | --- |
| 能用在闭源产品里吗？ | 可以——MIT 允许。保留上游版权声明，打包进来的 npm 包自带。 |
| 必须公开我的源码吗？ | 不需要。 |
| `sortablejs` 有商业许可的部分吗？ | 没有。它另有付费的托管服务，但库本身及全部插件都是 MIT。 |
| 插件覆盖了吗？ | 插件也是 MIT，但本模块不引用挂载它们的 `complete` 入口——见[用法](usage.md#封装层到此为止)。 |

上游仓库还发布了本站点与本封装不涉及的 `modular` 源码，它们的许可不属于本模块。
