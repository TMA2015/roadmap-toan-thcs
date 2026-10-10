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
  const siteRoot = path.endsWith("/roadmap-toan-thcs/") || path === "/" ? true : false;
  if (siteRoot) {
    load("study-scene-v1.js");
    load("home-orientation-slider-v1.js");
  }
  if (/\/(?:roadmap-toan-thcs\/)?hoc-theo-lop\/$/.test(path)) load("class-learning-v1.js");
  if (document.querySelector("[data-anchor-browser]")) load("anchor-library-v1.js");
})();
