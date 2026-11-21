# ktjs-sortable

<p align="center"><img src="docs/src/jsMain/resources/static/img/ktjs-sortable-logo.png" width="120" alt="ktjs-sortable"></p>

A Kotlin/JS wrapper for [`sortablejs`](https://www.npmjs.com/package/sortablejs): the `Sortable` class,
its options, its eleven callbacks and the static registry it keeps.

[English](README.md) | [简体中文](README.zh-CN.md)

**[Documentation](https://shijianjs.github.io/ktjs-sortable/)** ·
**[Live demo](https://shijianjs.github.io/ktjs-sortable/demo/)** ·
**[API reference](https://shijianjs.github.io/ktjs-sortable/api/)**

```kotlin
val list = createSortable(container) {
    animation = 150
    dataIdAttr = "data-id"
    onEnd = { _ -> status.set(list.toArray().joinToString(", ")) }
}

list.sort(arrayOf("charlie", "alpha", "bravo"))
```

## Modules

| Module | npm package | Wrapper version |
| --- | --- | --- |
| [ktjs-sortable](ktjs-sortable/README.md) | `sortablejs` | `1.15.7-kt.1` |

## What the wrapper maps

| Upstream | Kotlin |
| --- | --- |
| `Sortable` (the default export) | `Sortable`, built through `createSortable` |
| `Options` | `SortableOptions` (all fields nullable) + the `sortableOptions { }` builder |
| `group` (string or object) | `JsAny` + `sortableGroup(name) { }` |
| event payloads | `SortableEvent`, `SortableMoveEvent` |
| `Sortable.utils` | `SortableUtils` |
| `store`, `fallbackOffset` | `SortableStore`, `Point` |
| `Sortable.create` / `get` / `mount` / `version` / `active` / `dragged` / `ghost` / `clone` | the companion object |

The npm package ships no `.d.ts`: the declarations were written from `src/Sortable.js` and
cross-checked against `@types/sortablejs` 1.15.9. The plugins that live in the separate `complete`
entry point are deliberately not wrapped; the reason is in
[docs/development/coverage.md](docs/development/coverage.md).

## Versioning

Each module is versioned as `{upstream npm version}-kt.{revision}`. The upstream npm versions are
declared once in the root [`package.json`](package.json); the revision is read per module from
[`wrapper-revisions.properties`](wrapper-revisions.properties). Gradle derives the base version and
the `npm(...)` dependency from these two files:

- Only `-kt.N` versions are published; a version without the suffix never exists.
- A working tree always adds `-SNAPSHOT`: the derived number is the *next* release, which Central does
  not have yet, so development builds never impersonate it. Publishing passes `-Pktjs.release=true`,
  which drops the suffix.
- Upstream upgrade: change the version in `package.json`; the base version follows automatically
  while the revision stays, even when the wrapper code itself did not change.
- Wrapper-only fix: the revision increments (`kt.2`, `kt.3`, ...) while the base version stays.

## Requirements

- JDK 21 or newer (the build uses Gradle 9.4.1).
- Node and npm are downloaded automatically by the Kotlin Gradle plugin; `kotlin.js.yarn=false` in
  `gradle.properties` keeps npm as the package manager.
- Chromium is downloaded by Playwright the first time browser tests run.

## Build and test

```bash
./gradlew build                    # compile, Detekt, browser tests
./gradlew :ktjs-sortable:jsBrowserTest

# End-to-end checks for the demo page (Playwright, against the bundled output)
./gradlew :demo:e2eTest

# Documentation site: Kotlin configuration, Markdown pages, built by ktjs-docusaurus
./gradlew :docs:docusaurusBuild

# GitHub Pages site (documentation at the root, demo under /demo/, Dokka output under /api/)
./gradlew pagesSite
```

After adding or upgrading an npm dependency, refresh the shared lock file:

```bash
./gradlew kotlinUpgradePackageLock
```

The `docs` module is a Kotlin/JS project too. The ktjs-docusaurus versions live in
`gradle.properties` because each of those modules carries its own revision. A SNAPSHOT there is
resolved from `mavenLocal`. The kit's browser bundle is not a Maven artifact: it ships as a resource
of the kit's klib, and `extractKitBundle` copies it to the site's `static/ktjs-client/`.

## Publishing

Publishing is configured once in the root [`build.gradle.kts`](build.gradle.kts) for all modules.
Releases run through `.github/workflows/release.yml`: it signs the artifacts, packages one archive per
Maven coordinate and registers them with the shared Maven Central hub, which merges the pending
registrations into a single deployment.

## License

Released under the [MIT License](LICENSE). `sortablejs` is MIT too, © SortableJS — see
[Licensing](https://shijianjs.github.io/ktjs-sortable/guide/licensing).
