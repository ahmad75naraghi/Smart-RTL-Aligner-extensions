<p align="center">
  <img src="icons/icon128.png" width="96" height="96" alt="Smart RTL Aligner logo" />
</p>

<h1 align="center">Smart RTL Aligner</h1>

<p align="center">
  یک اکستنشن مرورگر برای راست‌به‌چپ (RTL) کردن هوشمند هر وب‌سایتی — با ۵ حالت مختلف و حافظه جداگانه برای هر سایت.
  <br />
  A browser extension that intelligently right-to-left (RTL) aligns any website — 5 modes, per-site memory.
</p>

<p align="center">
  <img alt="Manifest V3" src="https://img.shields.io/badge/Manifest-V3-blue" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green" />
  <img alt="Chrome" src="https://img.shields.io/badge/Chrome-supported-brightgreen" />
  <img alt="Edge" src="https://img.shields.io/badge/Edge-supported-brightgreen" />
  <img alt="Firefox" src="https://img.shields.io/badge/Firefox-109%2B-orange" />
</p>

---

## فهرست | Table of Contents

- [فارسی](#فارسی)
  - [این اکستنشن چیست؟](#این-اکستنشن-چیست)
  - [حالت‌های تراز (Modes)](#حالتهای-تراز-modes)
  - [نصب سریع](#نصب-سریع)
    - [نصب از فروشگاه (پس از انتشار)](#نصب-از-فروشگاه-پس-از-انتشار)
    - [نصب دستی از سورس (همین الان قابل استفاده)](#نصب-دستی-از-سورس-همین-الان-قابل-استفاده)
  - [نحوه استفاده](#نحوه-استفاده)
  - [ساخت پکیج برای انتشار](#ساخت-پکیج-برای-انتشار)
  - [ساختار پروژه](#ساختار-پروژه)
  - [مشارکت](#مشارکت)
- [English](#english)
  - [What is this?](#what-is-this)
  - [Alignment modes](#alignment-modes)
  - [Quick install](#quick-install)
    - [Install from the store (once published)](#install-from-the-store-once-published)
    - [Install manually from source (works today)](#install-manually-from-source-works-today)
  - [How to use](#how-to-use)
  - [Building release packages](#building-release-packages)
  - [Project structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

---

## فارسی

### این اکستنشن چیست؟

**Smart RTL Aligner** یک اکستنشن سبک و ساده برای مرورگر است که هر صفحه وب (به‌خصوص سایت‌هایی که فارسی/عربی/عبری پشتیبانی رسمی ندارند، مثل چت‌بات‌های هوش مصنوعی) را به‌صورت هوشمند راست‌به‌چپ می‌کند.

ویژگی‌های اصلی:

- ✅ **۵ حالت تراز مختلف** برای انواع سایت‌ها (از حالت خیلی خشن تا حالت اختصاصی چت‌های AI)
- ✅ **حافظهٔ جداگانه برای هر دامنه** — تنظیمات هر سایت به‌صورت مستقل ذخیره می‌شود (مثلاً می‌توانید در ChatGPT حالت ۵ و در یک سایت دیگر حالت ۲ داشته باشید)
- ✅ **اعمال آنیِ تغییرات** بدون نیاز به رفرش صفحه
- ✅ **محافظت از کدها**: بلوک‌های `pre`, `code`, textarea و اینپوت‌های URL/Email/Password همیشه چپ‌به‌راست باقی می‌مانند تا کدنویسی خراب نشود
- ✅ سازگار با **Chrome، Microsoft Edge، Brave، Opera و هر مرورگر مبتنی بر Chromium** و همچنین **Firefox (نسخه ۱۰۹ به بعد)**
- ✅ بدون نیاز به اینترنت، بدون جمع‌آوری داده، کاملاً محلی (Local-only)

### حالت‌های تراز (Modes)

| # | نام | توضیح |
|---|-----|-------|
| 1 | Aggressive (خشن) | تمام تگ‌های اصلی (`body`, `div`, `p`, `span`) راست‌به‌چپ می‌شوند. برای سایت‌های ساده و قدیمی مناسب است. |
| 2 | Soft (نرم) | فقط کانتینرهای اصلی صفحه (`body`, `main`, `article`, `section`) راست‌به‌چپ می‌شوند. |
| 3 | Text-Only | جهت (direction) صفحه دست نمی‌خورد؛ فقط تراز متن به راست تغییر می‌کند تا چیدمان گرید/فلکس صفحه به‌هم نریزد. |
| 4 | Content-Focused | فقط تگ‌های محتوایی مثل `p`, `h1`-`h6`, `ul/ol/li`, `table` راست‌به‌چپ می‌شوند. |
| 5 | AI Chat Optimized | مخصوص چت‌بات‌های هوش مصنوعی (مثل ChatGPT, Claude, Gemini)؛ فقط حباب‌های پیام و محتوای مارک‌داون راست‌به‌چپ می‌شود و دکمه‌های داخل چت دست‌نخورده می‌مانند. |
| Off | خاموش | اکستنشن روی آن سایت غیرفعال می‌شود (حالت پیش‌فرض). |

انتخاب هر سایت به‌صورت جداگانه و بر اساس **hostname** ذخیره می‌شود، پس تنظیمات هر سایت مستقل از بقیه است.

### نصب سریع

#### نصب از فروشگاه (پس از انتشار)

اگر پروژه در فروشگاه‌های رسمی منتشر شده باشد (لینک‌ها را در ادامه به‌روزرسانی کنید)، ساده‌ترین راه نصب همین است:

- **Chrome Web Store**: _(پس از انتشار، لینک اینجا قرار می‌گیرد)_
- **Microsoft Edge Add-ons**: _(پس از انتشار، لینک اینجا قرار می‌گیرد)_
- **Firefox Add-ons (AMO)**: _(پس از انتشار، لینک اینجا قرار می‌گیرد)_

> در حال حاضر پروژه در حالت متن‌باز/سورس‌کد است و می‌توانید همین الان با روش زیر (نصب دستی) و در کمتر از ۲ دقیقه آن را نصب و استفاده کنید.

#### نصب دستی از سورس (همین الان قابل استفاده)

**۱) دانلود کد:**

```bash
git clone https://github.com/ahmad75naraghi/Smart-RTL-Aligner-extensions.git
```

یا از GitHub روی دکمهٔ سبز **Code → Download ZIP** کلیک کنید و فایل را از حالت فشرده خارج (extract) کنید.

**۲) نصب روی گوگل کروم (Chrome):**

1. آدرس `chrome://extensions` را در نوار آدرس کروم باز کنید.
2. گزینهٔ **Developer mode** (حالت توسعه‌دهنده) را در گوشهٔ بالا-راست صفحه فعال کنید.
3. روی دکمهٔ **Load unpacked** کلیک کنید.
4. پوشهٔ پروژه (`Smart-RTL-Aligner-extensions`) را انتخاب کنید.
5. آیکون اکستنشن در نوار ابزار کروم ظاهر می‌شود. تمام! ✅

**۳) نصب روی مایکروسافت اج (Edge):**

1. آدرس `edge://extensions` را باز کنید.
2. گزینهٔ **Developer mode** را از منوی سمت چپ فعال کنید.
3. روی **Load unpacked** کلیک کنید.
4. پوشهٔ پروژه را انتخاب کنید.

> نکته: Edge بر پایهٔ Chromium است، پس همان فایل `manifest.json` بدون هیچ تغییری روی آن کار می‌کند.

**۴) نصب روی فایرفاکس (Firefox):**

فایرفاکس برای فایل‌های `manifest.json` نیاز به تنظیمات مخصوص خودش (`browser_specific_settings`) دارد که در فایل جداگانهٔ `manifest.firefox.json` آماده شده است. دو روش دارید:

**روش ساده (نصب موقت، برای تست):**

1. آدرس `about:debugging#/runtime/this-firefox` را باز کنید.
2. روی **Load Temporary Add-on…** کلیک کنید.
3. داخل پوشهٔ پروژه، فایل `manifest.firefox.json` را انتخاب کنید.

> توجه: در این روش، اکستنشن فقط تا زمانی که فایرفاکس باز است فعال می‌ماند و با بستن مرورگر حذف می‌شود (محدودیت خود فایرفاکس برای Add-on های امضانشده).

**روش پایدار (ساخت فایل نصبی .xpi):**

1. اسکریپت ساخت پکیج را اجرا کنید (نیاز به دستور `zip` دارد که در اکثر سیستم‌عامل‌ها از قبل نصب است):

   ```bash
   ./build.sh
   ```

2. فایل `dist/smart-rtl-aligner-firefox-<version>.zip` ساخته می‌شود.
3. برای نصب دائمی و پایدار، این فایل باید توسط موزیلا امضا (signed) شود. برای این کار:
   - به سایت [addons.mozilla.org/developers](https://addons.mozilla.org/developers/) بروید و یک حساب رایگان بسازید.
   - فایل zip را از بخش **Submit a New Add-on** آپلود کنید (می‌توانید آن را به‌صورت Unlisted منتشر کنید تا فقط لینک دانلود مستقیم داشته باشید).
   - فایل `.xpi` امضاشده را دانلود کرده و با کشیدن‌ورها کردن (drag & drop) به داخل پنجرهٔ فایرفاکس نصب کنید.

### نحوه استفاده

1. وارد هر وب‌سایتی شوید (مثلاً ChatGPT یا هر سایت انگلیسی‌زبان دیگر).
2. روی آیکون **Smart RTL Aligner** در نوار ابزار مرورگر کلیک کنید.
3. یکی از ۵ حالت را انتخاب کنید؛ تغییرات بلافاصله روی صفحه اعمال می‌شود.
4. برای غیرفعال کردن، دکمهٔ قرمز **Turn OFF** را بزنید.
5. تنظیمات شما برای همان دامنه ذخیره می‌شود و در بازدیدهای بعدی به‌صورت خودکار اعمال خواهد شد.

### ساخت پکیج برای انتشار

برای ساخت فایل‌های zip قابل آپلود در فروشگاه‌های Chrome Web Store، Edge Add-ons و Firefox AMO:

```bash
./build.sh
```

خروجی در پوشهٔ `dist/` قرار می‌گیرد:

- `smart-rtl-aligner-chrome-<version>.zip` → برای Chrome / Edge / Brave / Opera و سایر مرورگرهای Chromium
- `smart-rtl-aligner-firefox-<version>.zip` → برای Firefox

### ساختار پروژه

```
Smart-RTL-Aligner-extensions/
├── manifest.json          # مانیفست برای Chrome / Edge / سایر مرورگرهای Chromium
├── manifest.firefox.json  # مانیفست مخصوص Firefox (شامل gecko id)
├── content.js             # اسکریپتی که در هر صفحه اجرا و حالت تراز را اعمال می‌کند
├── popup.html             # رابط کاربری پاپ‌آپ اکستنشن
├── popup.js               # منطق پاپ‌آپ (خواندن/نوشتن تنظیمات + ارسال پیام به صفحه)
├── rtl.css                # تمام قوانین CSS مربوط به ۵ حالت تراز
├── icons/                 # آیکون‌های اکستنشن (16، 32، 48، 128 پیکسل)
├── build.sh               # اسکریپت ساخت پکیج‌های zip برای فروشگاه‌ها
└── LICENSE                # مجوز MIT
```

### مشارکت

خوشحال می‌شویم اگر بخواهید کمک کنید 🙏

1. ریپازیتوری را Fork کنید.
2. یک برنچ جدید بسازید: `git checkout -b feature/my-idea`
3. تغییرات را با `git commit` ثبت کنید.
4. یک Pull Request باز کنید.

ایده‌هایی مثل افزودن حالت‌های جدید، پشتیبانی از سایت‌های خاص بیشتر (مثل Notion، Gmail، Discord)، یا ترجمهٔ رابط کاربری، خیلی خوش‌آمد است.

---

## English

### What is this?

**Smart RTL Aligner** is a lightweight browser extension that intelligently right-to-left (RTL) aligns any web page — extremely useful for reading Persian/Arabic/Hebrew content on websites that don't natively support RTL (for example, AI chat apps like ChatGPT that mostly ship English-first UI).

Key features:

- ✅ **5 alignment modes**, from aggressive whole-page RTL to a mode tuned specifically for AI chat UIs
- ✅ **Per-site memory** — each domain remembers its own mode independently (e.g. Mode 5 on ChatGPT, Mode 2 on another site)
- ✅ **Instant live updates** — no page refresh needed
- ✅ **Code-safe by design** — `pre`, `code`, `textarea`, and URL/email/password inputs are always forced back to LTR so code snippets and forms never break
- ✅ Works on **Chrome, Microsoft Edge, Brave, Opera** and any other Chromium-based browser, as well as **Firefox 109+**
- ✅ 100% local — no network requests, no analytics, no data collection

### Alignment modes

| # | Name | Description |
|---|------|-------------|
| 1 | Aggressive | Forces `body`, `div`, `p`, `span` to RTL. Good for simple/older sites. |
| 2 | Soft | Only the main page containers (`body`, `main`, `article`, `section`) become RTL. |
| 3 | Text-Only | Keeps the page's original `direction` (so grid/flex layouts don't break) and only right-aligns text. |
| 4 | Content-Focused | Only content tags (`p`, headings, `ul/ol/li`, `table`) become RTL. |
| 5 | AI Chat Optimized | Targets chat bubbles / markdown containers used by AI assistants (ChatGPT, Claude, Gemini, etc.) without breaking the in-chat buttons. |
| Off | Disabled | Extension does nothing on that site (the default). |

The chosen mode is saved per **hostname**, so every website keeps its own independent setting.

### Quick install

#### Install from the store (once published)

Once this extension is published to the official stores, this will be the easiest way to install it (update these links after publishing):

- **Chrome Web Store**: _(link goes here once published)_
- **Microsoft Edge Add-ons**: _(link goes here once published)_
- **Firefox Add-ons (AMO)**: _(link goes here once published)_

> Until then, the extension is fully usable today via the manual install steps below — it takes less than 2 minutes.

#### Install manually from source (works today)

**1) Get the code:**

```bash
git clone https://github.com/ahmad75naraghi/Smart-RTL-Aligner-extensions.git
```

Or click the green **Code → Download ZIP** button on GitHub and extract the archive.

**2) Install on Google Chrome:**

1. Open `chrome://extensions` in the address bar.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked**.
4. Select the project folder (`Smart-RTL-Aligner-extensions`).
5. The extension icon appears in your toolbar — done! ✅

**3) Install on Microsoft Edge:**

1. Open `edge://extensions`.
2. Enable **Developer mode** from the left-hand menu.
3. Click **Load unpacked**.
4. Select the project folder.

> Edge is Chromium-based, so the same `manifest.json` works with zero changes.

**4) Install on Firefox:**

Firefox needs its own manifest settings (`browser_specific_settings`), which are already prepared in the separate `manifest.firefox.json` file. You have two options:

**Quick way (temporary install, great for testing):**

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Select the `manifest.firefox.json` file inside the project folder.

> Note: this install only lasts until Firefox is closed — that's a Firefox restriction for unsigned add-ons, not a bug in the extension.

**Permanent way (build a signed .xpi):**

1. Run the packaging script (requires the `zip` command, preinstalled on most systems):

   ```bash
   ./build.sh
   ```

2. This produces `dist/smart-rtl-aligner-firefox-<version>.zip`.
3. For a permanent install, Mozilla needs to sign the package:
   - Create a free account at [addons.mozilla.org/developers](https://addons.mozilla.org/developers/).
   - Submit the zip file under **Submit a New Add-on** (you can publish it as *Unlisted* to get a direct download link only, without a public store listing).
   - Download the signed `.xpi` file and drag & drop it into a Firefox window to install it.

### How to use

1. Visit any website (e.g. ChatGPT, or any English-first site).
2. Click the **Smart RTL Aligner** icon in your browser toolbar.
3. Pick one of the 5 modes — the page updates instantly.
4. Click the red **Turn OFF** button to disable it.
5. Your choice is saved per domain and automatically re-applied on your next visit.

### Building release packages

To generate store-ready zip files for Chrome Web Store, Edge Add-ons, and Firefox AMO:

```bash
./build.sh
```

Output is written to the `dist/` folder:

- `smart-rtl-aligner-chrome-<version>.zip` → for Chrome / Edge / Brave / Opera and other Chromium browsers
- `smart-rtl-aligner-firefox-<version>.zip` → for Firefox

### Project structure

```
Smart-RTL-Aligner-extensions/
├── manifest.json          # Manifest for Chrome / Edge / other Chromium browsers
├── manifest.firefox.json  # Firefox-specific manifest (includes gecko id)
├── content.js             # Injected script that applies the chosen RTL mode
├── popup.html             # Extension popup UI
├── popup.js               # Popup logic (read/write settings + message the page)
├── rtl.css                # All CSS rules for the 5 alignment modes
├── icons/                 # Extension icons (16, 32, 48, 128 px)
├── build.sh               # Packaging script that builds store-ready zips
└── LICENSE                # MIT license
```

### Contributing

Contributions are very welcome 🙏

1. Fork the repository.
2. Create a branch: `git checkout -b feature/my-idea`.
3. Commit your changes.
4. Open a Pull Request.

Ideas such as new alignment modes, more site-specific tweaks (Notion, Gmail, Discord, etc.), or UI translations are all appreciated.

### License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and distribute.
