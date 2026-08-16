# Restore Maps Tab

Bring the **Maps** shortcut back to Google Search.

Restore Maps Tab is a lightweight browser extension that restores the missing Maps tab in Google Search results. Clicking the restored tab opens your current search query directly in Google Maps.

## Features

* Restores the **Maps** tab in Google Search
* Automatically uses your current search query
* Matches Google's existing navigation style
* Supports Google Search's dynamic page navigation
* Works with light and dark themes
* Supports English and Turkish interfaces
* No account required
* No analytics
* No tracking
* No data collection
* No unnecessary browser permissions

## How It Works

The extension runs locally on supported Google Search pages.

It detects the search navigation bar, creates a Maps shortcut next to the existing navigation tabs, and links it to Google Maps using your current search query.

For example:

```text
Google Search:
coffee shops in Istanbul

↓ Click "Maps"

Google Maps:
coffee shops in Istanbul
```

The extension does not send your search queries or browsing activity to any external server.

## Installation

### Chrome Web Store

Once the extension is published, it can be installed directly from the Chrome Web Store.

### Manual Installation

1. Download or clone this repository.
2. Open:

```text
chrome://extensions
```

3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the extension folder.

The Maps tab should now appear in supported Google Search results.

## Project Structure

```text
restore-maps-tab/
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── content.css
├── content.js
├── manifest.json
├── .gitignore
├── LICENSE
├── PRIVACY.md
└── README.md
```

## Privacy

Restore Maps Tab does not collect, store, transmit, or sell personal data.

The extension does not use analytics, tracking systems, cookies, remote servers, or advertising services.

See [PRIVACY.md](PRIVACY.md) for more information.

## Permissions

Restore Maps Tab does not request additional browser permissions.

Its content script only runs on the Google Search domains declared in the extension manifest.

## Supported Browsers

The extension is designed for Chromium-based browsers supporting Manifest V3, including:

* Google Chrome
* Microsoft Edge
* Brave
* Other compatible Chromium browsers

## Contributing

Contributions, bug reports, and suggestions are welcome.

If Google changes the structure of its Search interface and the Maps tab stops appearing correctly, please open an issue with:

* Browser name and version
* Google Search language
* Country/domain used
* Screenshot of the navigation bar
* Short description of the problem

Please avoid including private or sensitive information in screenshots or issue reports.

## License

This project is licensed under the MIT License.

See [LICENSE](LICENSE) for details.

## Disclaimer

Restore Maps Tab is an independent third-party browser extension.

It is not affiliated with, endorsed by, sponsored by, or officially associated with Google LLC.

Google, Google Search, and Google Maps are trademarks of Google LLC.
