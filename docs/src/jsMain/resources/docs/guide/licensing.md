---
sidebar_position: 3
---

# Licensing

## The wrapper

`ktjs-sortable` is MIT licensed. See [LICENSE](https://github.com/shijianjs/ktjs-sortable/blob/main/LICENSE).

## Upstream

`sortablejs` 1.15.7 is MIT licensed, © SortableJS. Its terms travel with the npm package, which stays a
dependency of this module; nothing here re-licenses it.

`@types/sortablejs` 1.15.9 (MIT, DefinitelyTyped) was used as a **reference while writing the
declarations** — it is not a dependency and its text is not copied into this module.

## What a consumer must do

| Question | Answer |
| --- | --- |
| May I ship this in a closed-source product? | Yes — MIT permits it. Keep the upstream copyright notice, which the bundled npm package carries. |
| Must I publish my source? | No. |
| Is any part of `sortablejs` commercially licensed? | No. There is a separate paid product for a hosted service, but the library itself and all its plugins are MIT. |
| Are the plugins covered? | They are MIT too, but this module does not import the `complete` entry that mounts them — see [Usage](usage.md#where-the-wrapper-stops). |

The upstream repository also publishes the website and the `modular` sources this wrapper does not
touch; their licences are not part of this module.
