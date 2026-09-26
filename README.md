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

> این اکستنشن در هیچ فروشگاه رسمی (Chrome Web Store / Edge Add-ons / Firefox AMO) منتشر نشده و نیازی هم به آن نیست؛ نصب کاملاً از روی سورس‌کد و به‌صورت محلی انجام می‌شود.
> This extension is **not published on any official store** (Chrome Web Store / Edge Add-ons / Firefox AMO) and doesn't need to be — it installs directly from source, locally, on your own browser.

---

## فهرست | Table of Contents

- [فارسی](#فارسی)
  - [این اکستنشن چیست؟](#این-اکستنشن-چیست)
  - [حالت‌های تراز (Modes)](#حالتهای-تراز-modes)
  - [دانلود سورس](#دانلود-سورس)
  - [نصب روی Chrome](#نصب-روی-chrome)
  - [نصب روی Microsoft Edge](#نصب-روی-microsoft-edge)
  - [نصب روی Brave / Opera / Vivaldi / سایر مرورگرهای Chromium](#نصب-روی-brave--opera--vivaldi--سایر-مرورگرهای-chromium)
  - [نصب روی Firefox](#نصب-روی-firefox)
  - [نحوه استفاده](#نحوه-استفاده)
  - [به‌روزرسانی اکستنشن](#بهروزرسانی-اکستنشن)
  - [رفع اشکال (Troubleshooting)](#رفع-اشکال-troubleshooting)
  - [ساخت فایل zip برای اشتراک‌گذاری](#ساخت-فایل-zip-برای-اشتراکگذاری)
  - [ساختار پروژه](#ساختار-پروژه)
  - [حریم خصوصی و مجوزها](#حریم-خصوصی-و-مجوزها)
  - [ارتباط با ما / پشتیبانی](#ارتباط-با-ما--پشتیبانی)
  - [مشارکت](#مشارکت)
- [English](#english)
  - [What is this?](#what-is-this)
  - [Alignment modes](#alignment-modes)
  - [Get the source](#get-the-source)
  - [Install on Chrome](#install-on-chrome)
  - [Install on Microsoft Edge](#install-on-microsoft-edge)
  - [Install on Brave / Opera / Vivaldi / other Chromium browsers](#install-on-brave--opera--vivaldi--other-chromium-browsers)
  - [Install on Firefox](#install-on-firefox)
  - [How to use](#how-to-use)
  - [Updating the extension](#updating-the-extension)
  - [Troubleshooting](#troubleshooting)
  - [Building a shareable zip](#building-a-shareable-zip)
  - [Project structure](#project-structure)
  - [Privacy & permissions](#privacy--permissions)
  - [Contact / Support](#contact--support)
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
- ✅ بدون نیاز به اینترنت، بدون سرور، بدون جمع‌آوری داده — همه‌چیز فقط روی مرورگر خودتان (Local-only) ذخیره می‌شود
- ✅ بدون نیاز به هیچ فروشگاه اکستنشن؛ فقط سورس کد را نصب می‌کنید

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

### دانلود سورس

**گزینه ۱ — با Git:**

```bash
git clone https://github.com/ahmad75naraghi/Smart-RTL-Aligner-extensions.git
```

**گزینه ۲ — بدون Git:**
روی صفحهٔ گیت‌هاب پروژه، دکمهٔ سبز **Code → Download ZIP** را بزنید و فایل دانلودشده را Extract کنید.

> در تمام مراحل بعدی، منظور از «پوشهٔ پروژه» همین پوشهٔ استخراج‌شده (`Smart-RTL-Aligner-extensions`) است که باید فایل‌های `manifest.json`، `content.js`، `popup.html` و غیره مستقیماً داخل آن باشند (نه داخل یک زیرپوشهٔ دیگر).

### نصب روی Chrome

1. مرورگر Chrome را باز کنید و در نوار آدرس بنویسید: `chrome://extensions`
2. کلید **Enter** را بزنید.
3. در گوشهٔ **بالا-راست** صفحه، کلید (toggle) کنار عبارت **Developer mode** را فعال کنید.
4. سه دکمهٔ جدید ظاهر می‌شود؛ روی **Load unpacked** کلیک کنید.
5. در پنجرهٔ باز شده، پوشهٔ پروژه (`Smart-RTL-Aligner-extensions`) را انتخاب و تأیید کنید.
6. اکستنشن با نام **Smart RTL Aligner** به لیست اضافه می‌شود و آیکون آن (فلش دوطرفه روی زمینهٔ آبی) در نوار ابزار بالای مرورگر ظاهر می‌شود.

> اگر آیکون در نوار ابزار دیده نشد، روی آیکون پازل (Extensions) در بالای مرورگر کلیک کنید و Smart RTL Aligner را «سنجاق» (Pin) کنید.

### نصب روی Microsoft Edge

1. مرورگر Edge را باز کنید و در نوار آدرس بنویسید: `edge://extensions`
2. کلید **Enter** را بزنید.
3. از منوی سمت چپ، گزینهٔ **Developer mode** را فعال کنید.
4. روی دکمهٔ **Load unpacked** کلیک کنید.
5. پوشهٔ پروژه را انتخاب کنید.

Edge بر پایهٔ Chromium ساخته شده، پس همان فایل `manifest.json` بدون هیچ تغییری کار می‌کند.

### نصب روی Brave / Opera / Vivaldi / سایر مرورگرهای Chromium

همهٔ این مرورگرها هم روی Chromium ساخته شده‌اند و همان مراحل «نصب روی Chrome» را دارند؛ فقط آدرس صفحهٔ اکستنشن‌ها فرق می‌کند:

- Brave: `brave://extensions`
- Opera: `opera://extensions`
- Vivaldi: `vivaldi://extensions`

در همهٔ موارد: **Developer mode** را روشن کنید → **Load unpacked** را بزنید → پوشهٔ پروژه را انتخاب کنید.

### نصب روی Firefox

فایرفاکس یک فایل مانیفست جدا و مخصوص خودش می‌خواهد که از قبل در پروژه آماده شده: `manifest.firefox.json` (شامل تنظیمات ویژهٔ Gecko).

فایرفاکس دو سطح نصب دارد؛ بسته به نیازتان یکی را انتخاب کنید:

**الف) نصب موقت (سریع‌ترین راه، برای استفادهٔ روزمره کافی است ولی با هر بار بستن فایرفاکس پاک می‌شود):**

1. آدرس `about:debugging#/runtime/this-firefox` را باز کنید.
2. روی **Load Temporary Add-on…** کلیک کنید.
3. داخل پوشهٔ پروژه، فایل **`manifest.firefox.json`** را انتخاب کنید (نه `manifest.json`).
4. اکستنشن بلافاصله فعال می‌شود.

> برای اینکه بعد از هر بار باز کردن فایرفاکس مجبور نباشید دوباره این کار را تکرار کنید، از روش «ب» زیر استفاده کنید.

**ب) نصب دائمی و بدون نیاز به هیچ فروشگاهی (برای Firefox Developer Edition، Nightly یا ESR):**

نسخهٔ عادی (Release) فایرفاکس فقط اکستنشن‌های امضاشده توسط موزیلا را به‌صورت دائمی قبول می‌کند. اگر نمی‌خواهید اکستنشن را در هیچ فروشگاهی ثبت/منتشر کنید، ساده‌ترین راه استفاده از یکی از نسخه‌های زیر است که امکان غیرفعال کردن این محدودیت را دارند:

- [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
- [Firefox Nightly](https://www.mozilla.org/firefox/channel/desktop/#nightly)
- Firefox ESR

مراحل:

1. یکی از نسخه‌های بالا را نصب و باز کنید.
2. در نوار آدرس بنویسید `about:config` و Enter بزنید؛ روی «Accept the Risk and Continue» کلیک کنید.
3. عبارت `xpinstall.signatures.required` را جستجو کنید و با دابل‌کلیک مقدار آن را روی `false` بگذارید.
4. یک فایل zip از اکستنشن بسازید (بخش [ساخت فایل zip برای اشتراک‌گذاری](#ساخت-فایل-zip-برای-اشتراکگذاری) را ببینید) و پسوند آن را از `.zip` به `.xpi` تغییر دهید.
5. آدرس `about:addons` را باز کنید → آیکون چرخ‌دنده → **Install Add-on From File…** → فایل `.xpi` ساخته‌شده را انتخاب کنید.
6. اکستنشن به‌صورت دائمی و بدون محدودیت نصب می‌شود، بدون اینکه نیازی به ثبت‌نام یا انتشار در هیچ فروشگاهی باشد.

> این روش کاملاً محلی و شخصی است و «انتشار رسمی» محسوب نمی‌شود؛ فقط به شما اجازه می‌دهد اکستنشن دست‌ساز خودتان را روی مرورگر خودتان به‌صورت پایدار نگه دارید.

### نحوه استفاده

1. وارد هر وب‌سایتی شوید (مثلاً ChatGPT یا هر سایت انگلیسی‌زبان دیگر).
2. روی آیکون **Smart RTL Aligner** در نوار ابزار مرورگر کلیک کنید.
3. یکی از ۵ حالت را انتخاب کنید؛ تغییرات بلافاصله روی صفحه اعمال می‌شود.
4. برای غیرفعال کردن، دکمهٔ قرمز **Turn OFF** را بزنید.
5. تنظیمات شما برای همان دامنه ذخیره می‌شود و در بازدیدهای بعدی به‌صورت خودکار اعمال خواهد شد.

### به‌روزرسانی اکستنشن

چون از فروشگاهی نصب نشده، به‌روزرسانی خودکار انجام نمی‌شود. برای گرفتن آخرین تغییرات:

```bash
cd Smart-RTL-Aligner-extensions
git pull
```

سپس در `chrome://extensions` (یا معادل آن در مرورگرتان) روی آیکون **⟳ Reload** کنار کارت اکستنشن کلیک کنید. برای Firefox، اکستنشن موقت را دوباره از طریق `about:debugging` بارگذاری کنید.

### رفع اشکال (Troubleshooting)

- **آیکون در نوار ابزار دیده نمی‌شود:** روی آیکون پازل کنار نوار آدرس بزنید و اکستنشن را Pin کنید.
- **تغییری روی صفحه دیده نمی‌شود:** صفحه را رفرش (F5) کنید؛ اکستنشن روی تب‌هایی که قبل از نصب باز بوده بودند به‌صورت خودکار اجرا نمی‌شود.
- **در Firefox با پیام «This add-on could not be installed because it appears to be corrupt» مواجه شدید:** یعنی نسخهٔ Release فایرفاکس دارید و فایل امضا نشده است؛ از روش «نصب موقت» استفاده کنید یا طبق بخش بالا از Developer Edition/Nightly/ESR استفاده کنید.
- **دکمه‌ای در پاپ‌آپ کار نمی‌کند:** مطمئن شوید در یک تب واقعی وب (آدرس با `http://` یا `https://`) هستید؛ در صفحاتی مثل `chrome://extensions` اکستنشن عمداً غیرفعال است.

### ساخت فایل zip برای اشتراک‌گذاری

اگر می‌خواهید فایل نصبی را برای دوستان یا کاربران دیگر ارسال کنید (بدون نیاز به Git)، از اسکریپت آماده استفاده کنید:

```bash
./build.sh
```

خروجی در پوشهٔ `dist/` ساخته می‌شود:

- `smart-rtl-aligner-chrome-<version>.zip` → برای Chrome / Edge / Brave / Opera و سایر مرورگرهای Chromium (شامل `manifest.json`)
- `smart-rtl-aligner-firefox-<version>.zip` → برای Firefox (شامل `manifest.firefox.json` به‌جای `manifest.json`)

کاربر دریافت‌کننده فقط کافی است فایل zip را Extract کند و مراحل «نصب روی مرورگر» بالا را دنبال کند.

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
├── build.sh               # اسکریپت ساخت فایل zip برای نصب/اشتراک‌گذاری دستی
└── LICENSE                # مجوز MIT
```

### حریم خصوصی و مجوزها

- **`storage`**: برای ذخیرهٔ حالت انتخابی شما به ازای هر دامنه، فقط روی همان مرورگر (نه سرور بیرونی).
- **`tabs`**: فقط برای خواندن hostname تب فعال (تا تنظیمات را برای همان سایت ذخیره/اعمال کند) و ارسال پیام به آن تب.
- اکستنشن هیچ درخواست شبکه‌ای نمی‌فرستد، هیچ دیتایی جمع‌آوری یا آپلود نمی‌کند، و کاملاً متن‌باز و قابل بازبینی است (کل کد در همین ۵ فایل کوچک خلاصه می‌شود).

### ارتباط با ما / پشتیبانی

اگر سوالی دارید، باگی پیدا کردید، یا پیشنهادی برای بهبود اکستنشن دارید:

- 🐛 **گزارش باگ / درخواست ویژگی**: از بخش [Issues همین ریپازیتوری](https://github.com/ahmad75naraghi/Smart-RTL-Aligner-extensions/issues) استفاده کنید.
- 📧 **ایمیل**: [ahmad.falnic@gmail.com](mailto:ahmad.falnic@gmail.com)
- 📢 **کانال تلگرام**: [t.me/evented_ir](https://t.me/evented_ir)

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
- ✅ 100% local — no network requests, no server, no analytics, no data collection
- ✅ No store account needed — you install straight from source

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

### Get the source

**Option 1 — with Git:**

```bash
git clone https://github.com/ahmad75naraghi/Smart-RTL-Aligner-extensions.git
```

**Option 2 — without Git:**
On the GitHub project page, click the green **Code → Download ZIP** button and extract the archive.

> In every step below, "the project folder" means this extracted folder (`Smart-RTL-Aligner-extensions`), where `manifest.json`, `content.js`, `popup.html`, etc. sit directly inside it (not in a nested subfolder).

### Install on Chrome

1. Open Chrome and go to `chrome://extensions`.
2. Press **Enter**.
3. In the **top-right corner**, toggle on **Developer mode**.
4. Three new buttons appear; click **Load unpacked**.
5. In the file picker, select the project folder (`Smart-RTL-Aligner-extensions`).
6. **Smart RTL Aligner** is added to your list and its icon (a two-way arrow on a blue background) appears in the toolbar.

> If you don't see the icon, click the puzzle-piece **Extensions** icon in the toolbar and pin Smart RTL Aligner.

### Install on Microsoft Edge

1. Open Edge and go to `edge://extensions`.
2. Enable **Developer mode** from the left-hand menu.
3. Click **Load unpacked**.
4. Select the project folder.

Edge is Chromium-based, so the same `manifest.json` works with zero changes.

### Install on Brave / Opera / Vivaldi / other Chromium browsers

These browsers are also Chromium-based and follow the exact same steps as Chrome — only the extensions page address differs:

- Brave: `brave://extensions`
- Opera: `opera://extensions`
- Vivaldi: `vivaldi://extensions`

In all cases: enable **Developer mode** → click **Load unpacked** → select the project folder.

### Install on Firefox

Firefox needs its own manifest file, already prepared as `manifest.firefox.json` (it includes Gecko-specific settings).

Firefox has two installation levels — pick whichever fits your needs:

**a) Temporary install (fastest, good enough for daily use, but is removed every time Firefox restarts):**

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Select **`manifest.firefox.json`** (not `manifest.json`) inside the project folder.
4. The extension is active immediately.

> If you don't want to repeat this every time you restart Firefox, use option "b" below.

**b) Permanent install with no store involved at all (using Firefox Developer Edition, Nightly, or ESR):**

Regular (Release) Firefox only permanently accepts extensions signed by Mozilla. If you don't want to submit the extension anywhere, the simplest option is to use one of these builds, which let you disable that restriction:

- [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
- [Firefox Nightly](https://www.mozilla.org/firefox/channel/desktop/#nightly)
- Firefox ESR

Steps:

1. Install and open one of the builds above.
2. Go to `about:config`, click "Accept the Risk and Continue".
3. Search for `xpinstall.signatures.required` and double-click it to set the value to `false`.
4. Build a zip of the extension (see [Building a shareable zip](#building-a-shareable-zip)) and rename its extension from `.zip` to `.xpi`.
5. Go to `about:addons` → gear icon → **Install Add-on From File…** → pick the `.xpi` file.
6. The extension installs permanently with no restrictions — no account, submission, or store needed.

> This is a purely local, personal setup and does not count as "publishing" — it just lets you keep your own hand-built extension permanently active in your own browser.

### How to use

1. Visit any website (e.g. ChatGPT, or any English-first site).
2. Click the **Smart RTL Aligner** icon in your browser toolbar.
3. Pick one of the 5 modes — the page updates instantly.
4. Click the red **Turn OFF** button to disable it.
5. Your choice is saved per domain and automatically re-applied on your next visit.

### Updating the extension

Since it isn't installed from a store, there's no automatic update. To get the latest changes:

```bash
cd Smart-RTL-Aligner-extensions
git pull
```

Then click the **⟳ Reload** icon on the extension's card in `chrome://extensions` (or the equivalent page in your browser). For Firefox, reload the temporary add-on again via `about:debugging`.

### Troubleshooting

- **The icon isn't visible in the toolbar:** click the puzzle-piece icon next to the address bar and pin the extension.
- **Nothing changes on the page:** refresh (F5) — the extension doesn't retroactively run on tabs that were already open before install.
- **Firefox says "This add-on could not be installed because it appears to be corrupt":** that means you're on Release Firefox and the file isn't signed; use the temporary-install method, or switch to Developer Edition/Nightly/ESR as described above.
- **Nothing happens when clicking a button in the popup:** make sure you're on a real web page (`http://` or `https://`); the extension intentionally does nothing on internal pages like `chrome://extensions`.

### Building a shareable zip

If you want to hand the installable files to someone else (without them needing Git), use the included script:

```bash
./build.sh
```

Output is written to the `dist/` folder:

- `smart-rtl-aligner-chrome-<version>.zip` → for Chrome / Edge / Brave / Opera and other Chromium browsers (contains `manifest.json`)
- `smart-rtl-aligner-firefox-<version>.zip` → for Firefox (contains `manifest.firefox.json` renamed to `manifest.json` inside the archive)

The recipient just extracts the zip and follows the "Install on ..." steps above.

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
├── build.sh               # Script that packages a zip for manual install/sharing
└── LICENSE                # MIT license
```

### Privacy & permissions

- **`storage`**: saves your chosen mode per domain, locally in your own browser only — never sent anywhere.
- **`tabs`**: only used to read the active tab's hostname (so settings can be scoped per site) and to message that tab.
- The extension makes no network requests, collects no data, and is fully open source — the entire logic fits in a handful of small files you can read yourself.

### Contact / Support

Got a question, found a bug, or have an idea to improve the extension?

- 🐛 **Report a bug / request a feature**: use [this repo's Issues](https://github.com/ahmad75naraghi/Smart-RTL-Aligner-extensions/issues).
- 📧 **Email**: [ahmad.falnic@gmail.com](mailto:ahmad.falnic@gmail.com)
- 📢 **Telegram channel**: [t.me/evented_ir](https://t.me/evented_ir)

### Contributing

Contributions are very welcome 🙏

1. Fork the repository.
2. Create a branch: `git checkout -b feature/my-idea`.
3. Commit your changes.
4. Open a Pull Request.

Ideas such as new alignment modes, more site-specific tweaks (Notion, Gmail, Discord, etc.), or UI translations are all appreciated.

### License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and distribute.
