(() => {
  "use strict";
  // Old links may include filters or a WX card hash. Forward to the new
  // canonical paper-library page without touching learner storage/history.
  const path = window.location.pathname.replace(/index\.html$/, "");
  if (!/\/luyen-tap\/$/.test(path)) return;
  const params = new URLSearchParams(window.location.search);
  const legacy = ["topic", "level", "type", "kind"].some(key => params.has(key))
    || /^#wx\d{2}-[a-z0-9-]+$/i.test(window.location.hash);
  if (!legacy) return;
  const target = new URL("tu-luan/", window.location.href);
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.href);
})();
