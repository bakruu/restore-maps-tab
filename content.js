(() => {
  "use strict";

  const TAB_ID = "restore-maps-tab";
  const GOOGLE_MAPS_BASE = "https://www.google.com/maps/search/?api=1&query=";

  const LABELS = {
    tr: {
      maps: "Haritalar",
      images: ["Görseller"]
    },
    en: {
      maps: "Maps",
      images: ["Images"]
    }
  };

  let lastUrl = location.href;
  let updateQueued = false;

  function getLanguage() {
    const lang = (
      document.documentElement.lang ||
      navigator.language ||
      "en"
    ).toLowerCase();

    return lang.startsWith("tr") ? "tr" : "en";
  }

  function getLabels() {
    return LABELS[getLanguage()] || LABELS.en;
  }

  function getSearchQuery() {
    try {
      const url = new URL(location.href);
      const urlQuery = url.searchParams.get("q");

      if (urlQuery?.trim()) {
        return urlQuery.trim();
      }
    } catch {
      // Ignore malformed URL and try search field fallback.
    }

    const input =
      document.querySelector('textarea[name="q"]') ||
      document.querySelector('input[name="q"]');

    return input?.value?.trim() || "";
  }

  function buildMapsUrl(query) {
    return `${GOOGLE_MAPS_BASE}${encodeURIComponent(query)}`;
  }

  function normalizeText(text) {
    return text
      ?.replace(/\s+/g, " ")
      .trim()
      .toLocaleLowerCase() || "";
  }

  function findImagesLink() {
    const labels = getLabels();

    const expectedLabels = labels.images.map(label =>
      normalizeText(label)
    );

    const navigationRoots = [
      ...document.querySelectorAll('[role="navigation"]')
    ];

    for (const nav of navigationRoots) {
      const links = [...nav.querySelectorAll("a")];

      const match = links.find(link => {
        const text = normalizeText(link.textContent);

        return expectedLabels.includes(text);
      });

      if (match) {
        return match;
      }
    }

    /*
     * Fallback:
     * Bazı Google varyantlarında role="navigation"
     * olmayabiliyor.
     */
    const allLinks = [...document.querySelectorAll("a")];

    return allLinks.find(link => {
      const text = normalizeText(link.textContent);

      return expectedLabels.includes(text);
    }) || null;
  }

  function replaceVisibleText(root, oldLabels, newLabel) {
    const normalizedOldLabels = oldLabels.map(normalizeText);

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
      const text = normalizeText(node.nodeValue);

      if (normalizedOldLabels.includes(text)) {
        node.nodeValue = newLabel;
        return true;
      }
    }

    return false;
  }

  function cleanClonedLink(link) {
    /*
     * Google'a ait tracking/event attribute'larını
     * kopyalamaya ihtiyacımız yok.
     */
    const attributesToRemove = [
      "data-ved",
      "data-jsarwt",
      "data-usg",
      "ping",
      "jsaction",
      "jsname"
    ];

    for (const attribute of attributesToRemove) {
      link.removeAttribute(attribute);
    }

    link.removeAttribute("aria-current");
  }

  function createMapsTab(imagesLink, query) {
    const sourceWrapper = imagesLink.parentElement;

    if (!sourceWrapper) {
      return null;
    }

    const wrapper = sourceWrapper.cloneNode(true);
    wrapper.id = TAB_ID;

    const link = wrapper.querySelector("a");

    if (!link) {
      return null;
    }

    cleanClonedLink(link);

    const labels = getLabels();

    link.href = buildMapsUrl(query);
    link.setAttribute("aria-label", labels.maps);
    link.title = labels.maps;

    const replaced = replaceVisibleText(
      link,
      labels.images,
      labels.maps
    );

    if (!replaced) {
      /*
       * Google'ın iç DOM yapısı değişmişse,
       * bozuk ikon/metin bırakmak yerine
       * basit bir metin linkine düş.
       */
      link.replaceChildren(document.createTextNode(labels.maps));
    }

    return wrapper;
  }

  function updateExistingTab(query) {
    const tab = document.getElementById(TAB_ID);

    if (!tab) {
      return false;
    }

    const link = tab.querySelector("a");

    if (!link) {
      tab.remove();
      return false;
    }

    link.href = buildMapsUrl(query);

    const labels = getLabels();

    link.setAttribute("aria-label", labels.maps);
    link.title = labels.maps;

    return true;
  }

  function injectMapsTab() {
    const query = getSearchQuery();

    if (!query) {
      document.getElementById(TAB_ID)?.remove();
      return;
    }

    if (updateExistingTab(query)) {
      return;
    }

    const imagesLink = findImagesLink();

    if (!imagesLink) {
      return;
    }

    const mapsTab = createMapsTab(imagesLink, query);

    if (!mapsTab) {
      return;
    }

    const sourceWrapper = imagesLink.parentElement;

    sourceWrapper.insertAdjacentElement("afterend", mapsTab);
  }

  function queueUpdate() {
    if (updateQueued) {
      return;
    }

    updateQueued = true;

    requestAnimationFrame(() => {
      updateQueued = false;
      injectMapsTab();
    });
  }

  /*
   * İlk yükleme.
   */
  injectMapsTab();

  /*
   * Google arama sayfası dinamik olarak değiştiği için
   * navigasyonu DOM değişikliklerinde tekrar kontrol et.
   */
  const observer = new MutationObserver(queueUpdate);

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  /*
   * Google SPA benzeri navigasyon yapabildiği için
   * URL değişikliklerini de takip ediyoruz.
   */
  const urlWatcher = window.setInterval(() => {
    if (location.href === lastUrl) {
      return;
    }

    lastUrl = location.href;
    queueUpdate();
  }, 500);

  /*
   * Sayfa kapanırken interval'i temizle.
   */
  window.addEventListener(
    "pagehide",
    () => {
      clearInterval(urlWatcher);
      observer.disconnect();
    },
    { once: true }
  );
})();