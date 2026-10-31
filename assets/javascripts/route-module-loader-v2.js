(() => {
  "use strict";
  const scriptBase = new URL("./", document.currentScript?.src || location.href);
  const loaded = new Set();
  const load = (name) => {
    if (loaded.has(name) || document.querySelector('script[data-route-module="'+name+'"]')) return;
    loaded.add(name);
    const script = document.createElement("script");
    script.src = new URL(name, scriptBase).href;
    script.dataset.routeModule = name;
    script.async = false;
    document.head.appendChild(script);
  };
  const path = location.pathname.replace(/\/index\.html$/, "/");
  const thcsHome = /\/(?:roadmap-toan-thcs\/|self-learning-math\/)?thcs\/$/.test(path);
  if (thcsHome) {
    load("study-scene-v1.js");
    load("home-orientation-slider-v1.js");
  }
  if (/\/(?:(?:roadmap-toan-thcs|self-learning-math)\/)?hoc-theo-lop\/$/.test(path)) load("class-learning-v1.js");
  if (document.querySelector("[data-anchor-browser]")) load("anchor-library-v1.js");
  if (document.querySelector("[data-model-examples-library]")) load("model-examples-library-v1.js");
  if (/\/kien-thuc\/(?:03-ti-le-ti-le-thuc|22-dai-luong-dac-trung)\/bai-tap\/$/.test(path)) load("practice-level-focus-pilot-v1.js");
  if (/\/kien-thuc\/(?:02-so-va-phep-tinh|03-ti-le-ti-le-thuc|04-bieu-thuc-dai-so|21-thong-ke)\/bai-tap\/$/.test(path)) load("practice-role-consolidation-pilot-v2.js");
  if (/\/kien-thuc\/\d{2}-[^/]+\/$/.test(path) && !/\/kien-thuc\/25-/.test(path)) load("anchor-topic-related-v1.js");
})();
