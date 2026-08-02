# 观易 Open Kit / Guanyi Open Kit

一个面向网站与微信小程序的、隐私优先的传统文化观察工具包。它把抽象文化概念转译为可测试的节律提示、空间观察清单和本地手记能力。

A privacy-first traditional-culture observation toolkit for web and mini-program projects. It provides deterministic daily prompts, practical space-observation checklists, and local-only journaling primitives.

## Why this project exists

许多文化类应用把“文化体验”和确定性预测混在一起，也会在没有必要时收集出生信息或个人记录。本项目提供一个透明、可审计、默认不联网的公共基础层。

This project separates cultural reflection from deterministic fortune claims. The core library has no network dependency, requires no account, and stores no user data by itself.

## Included

- `dailyRhythm()`：按日期稳定生成自我观察提示
- `observeSpace()`：采光、通风、动线、收纳与安静区域清单
- `createJournalStore()`：支持浏览器或小程序适配器的本地手记存储
- 零运行时依赖、Node 内置测试、静态网页演示

## Excluded by design

- 命运、吉凶、医疗、投资等确定性判断
- 用户账号、支付、商业权益和风控代码
- 私有知识库、专有规则、提示词和生产密钥
- 分析 SDK、广告追踪与默认云同步

## Quick start

```bash
npm test
npm run demo
```

```js
import { dailyRhythm, observeSpace } from "guanyi-open-kit";

console.log(dailyRhythm("2026-08-02"));
console.log(observeSpace(["daylight", "airflow"]));
```

## Mini-program adapter

`createJournalStore` 接受兼容 Web Storage 的适配器，因此可连接浏览器 `localStorage`，也可以封装微信小程序的 `wx.getStorageSync` / `wx.setStorageSync`。参见 [`docs/MINIPROGRAM.md`](docs/MINIPROGRAM.md)。

## Project status

The repository is at an early public-preview stage. The maintainers welcome issue reports, documentation improvements, accessibility reviews, internationalization, and adapters for privacy-respecting local storage.

## Responsible use

本项目仅用于传统文化体验、自我观察和软件研究，不构成医疗、法律、投资或其他专业建议，也不承诺改变命运或预测结果。

## Contributing and security

请先阅读 [`CONTRIBUTING.md`](CONTRIBUTING.md) 和 [`SECURITY.md`](SECURITY.md)。请勿在 Issue 中提交真实出生资料、电话号码、邮箱、地址或其他隐私信息。

MIT © 2026 Guanyi Open Source Contributors
