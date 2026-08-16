<div align="center">

<img src="/assets/icons/icon128.png" alt="Restore Maps Tab for google search">

# Restore Maps Tab

### Bring the Maps shortcut back to Google Search.

A lightweight, privacy-friendly browser extension that restores the missing **Maps** tab in Google Search results.

<br>

![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Chrome](https://img.shields.io/badge/Chrome-Compatible-brightgreen)
![Edge](https://img.shields.io/badge/Edge-Compatible-blue)
![Privacy](https://img.shields.io/badge/Tracking-None-success)

<br>

**[Installation](#installation) • [How It Works](#how-it-works) • [Privacy](#privacy) • [Contributing](#contributing)**

</div>

---

## 🗺️ What is Restore Maps Tab?

Google Search used to provide a convenient **Maps** shortcut alongside tabs such as Images, Videos, Shopping, and News.

Restore Maps Tab brings that shortcut back.

Search for a place, restaurant, landmark, business, address, or anything else and click **Maps** to immediately continue the same search in Google Maps.

No copying. No opening Maps manually. No searching twice.

<div align="center">

<img src="/assets/maps_return.png" alt="Restore Maps Tab icon" width="128" height="128">

---

## ✨ Features

* 🗺️ Restores the **Maps** shortcut in Google Search
* 🔎 Automatically uses your current search query
* 🎨 Matches Google's existing navigation style
* 🌓 Works with light and dark themes
* ⚡ Handles Google's dynamic page navigation
* 🇬🇧 English interface support
* 🇹🇷 Turkish interface support
* 🪶 Extremely lightweight
* 🔒 No analytics
* 🚫 No tracking
* 💾 No user data storage
* 🔑 No unnecessary browser permissions

---

## 📸 Preview

<!--
Add a screenshot to:
assets/screenshot.png

Then remove the comment markers around the image below.
-->

<!--
<div align="center">
  <img src="assets/screenshot.png" alt="Restore Maps Tab screenshot" width="850">
</div>
-->

> A screenshot of the extension in action will be added here.

---

## ⚙️ How It Works

Restore Maps Tab runs locally on supported Google Search pages.

It detects Google's search navigation bar and inserts a **Maps** shortcut alongside the existing navigation options.

When clicked, the current search query is passed directly to Google Maps.

For example:

```text
Google Search
coffee shops in Istanbul

        ↓

Click "Maps"

        ↓

Google Maps
coffee shops in Istanbul
```

The extension does **not** send your search query to the developer or to any developer-operated server.

---

## 🚀 Installation

### Chrome Web Store

Chrome Web Store installation will be available after the first public release.

<!--
After publishing, replace the text above with:

[![Available in the Chrome Web Store](YOUR_BADGE_OR_IMAGE)](YOUR_STORE_URL)
-->

### Manual Installation

You can install the extension manually from this repository:

1. Download or clone this repository.
2. Open Chrome or another compatible Chromium browser.
3. Navigate to:

```text
chrome://extensions
```

4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the extension directory.
7. Open Google Search and perform a search.

The **Maps** shortcut should now appear in the search navigation.

---

## 📁 Project Structure

```text
restore-maps-tab/
│
├── assets/
│   ├── icon128.png
│   └── screenshot.png
│
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
│
├── content.css
├── content.js
├── manifest.json
│
├── .gitignore
├── LICENSE
├── PRIVACY.md
└── README.md
```

`icons/` contains the production icons packaged with the extension.

`assets/` contains images used by this README and other project documentation.

---

## 🔐 Privacy

Restore Maps Tab is designed to be as simple and privacy-friendly as possible.

The extension does **not**:

* Collect personal information
* Collect browsing history
* Store search queries
* Use analytics
* Use telemetry
* Track users
* Display advertisements
* Communicate with developer-operated servers

The current Google Search query is read locally only to construct the destination Google Maps URL when the Maps shortcut is used.

For complete details, see [PRIVACY.md](PRIVACY.md).

---

## 🔑 Permissions

Restore Maps Tab does not request additional Chrome extension permissions.

The content script only operates on the Google Search pages explicitly declared in `manifest.json`.

---

## 🌐 Current Compatibility

| Platform                | Status                         |
| ----------------------- | ------------------------------ |
| Google Chrome           | ✅ Supported                    |
| Microsoft Edge          | ✅ Supported                    |
| Brave                   | ✅ Expected to work             |
| Other Chromium browsers | ✅ Expected to work             |
| Firefox                 | ⏳ Not officially supported yet |
| Safari                  | ⏳ Not supported yet            |

### Google Search

Currently tested with:

* `google.com`
* `google.com.tr`
* English interface
* Turkish interface

Support for additional Google domains and languages may be added in future releases.

---

## 🛠️ Development

Restore Maps Tab uses:

* JavaScript
* CSS
* Chrome Extensions Manifest V3

There is no build system, framework, package manager, or external dependency.

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/restore-maps-tab.git
```

Then load the project directory using **Load unpacked** from `chrome://extensions`.

---

## 🤝 Contributing

Contributions are welcome.

If Google changes the structure of its Search interface and the Maps shortcut stops appearing correctly, please open an issue.

Useful information to include:

* Browser and version
* Google Search language
* Google domain
* Description of the issue
* Screenshot, if appropriate

Please remove private or sensitive information from screenshots before uploading them.

Pull requests for fixes, compatibility improvements, and additional language support are also welcome.

---

## 🐛 Found a Bug?

Open a GitHub Issue and describe what happened.

If possible, mention whether the problem involves:

* The Maps tab not appearing
* Incorrect tab positioning
* Incorrect language
* Google changing the navigation layout
* A specific Chromium browser

---

## 🗺️ Roadmap

Possible future improvements:

* Additional Google domains
* Additional interface languages
* Improved resilience to Google UI changes
* Firefox support
* Automated compatibility testing

The goal is to keep the extension focused and lightweight rather than turn it into a large feature suite.

---

## 📄 License

Distributed under the **MIT License**.

See [LICENSE](LICENSE) for more information.

---

## ⚠️ Disclaimer

Restore Maps Tab is an independent third-party browser extension.

It is not affiliated with, endorsed by, sponsored by, or officially associated with Google LLC.

Google, Google Search, and Google Maps are trademarks of Google LLC.

---

<div align="center">

### Restore the shortcut. Keep searching.

Made for people who miss the Maps tab.

⭐ If you find the project useful, consider starring the repository.

</div>
