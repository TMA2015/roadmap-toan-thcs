(() => {
  "use strict";
  const KEY = "roadmap.home.style.v1";
  const valid = (value) => value === "standard" || value === "playful";
  const getSaved = () => { try { const value = localStorage.getItem(KEY); return valid(value) ? value : null; } catch (_) { return null; } };
  const save = (value) => { try { localStorage.setItem(KEY, value); } catch (_) { /* Browser can disable storage; selector still works. */ } };
  const setup = (portal) => {
    if (portal.dataset.homeStyleReady === "1") return;
    portal.dataset.homeStyleReady = "1";
    const dialog = portal.querySelector("[data-home-dialog]");
    const panel = dialog && dialog.querySelector(".home-style-panel");
    const scene = portal.querySelector("[data-study-scene]");
    const wake = scene && scene.querySelector("[data-study-wake]");
    const illustration = scene && scene.querySelector(".study-art-image");
    const gateway = scene && scene.querySelector("[data-study-gateway]");
    const standard = portal.querySelector('[data-home-mode="standard"]');
    let restoreFocus = null;
    const apply = (mode, persist = true) => {
      portal.dataset.homeStyle = mode;
      if (standard) standard.hidden = mode !== "standard";
      if (scene) scene.hidden = mode !== "playful";
      portal.querySelectorAll("[data-home-select]").forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.homeSelect === mode)));
      if (persist) save(mode);
    };
    const close = () => {
      if (!dialog || dialog.hidden) return;
      dialog.hidden = true;
      if (restoreFocus && restoreFocus.isConnected) restoreFocus.focus();
      restoreFocus = null;
    };
    const open = (trigger) => {
      if (!dialog) return;
      restoreFocus = trigger || null;
      dialog.hidden = false;
      if (panel) panel.focus();
    };
    portal.querySelectorAll("[data-home-select]").forEach((button) => {
      button.addEventListener("click", () => { apply(button.dataset.homeSelect); close(); });
    });
    portal.querySelectorAll("[data-home-dismiss]").forEach((button) => button.addEventListener("click", close));
    if (dialog) dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key !== "Tab") return;
      const items = [...dialog.querySelectorAll("button")].filter((item) => !item.disabled);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    if (wake && gateway) {
      wake.addEventListener("click", () => {
        if (scene.classList.contains("is-awake")) return;
        scene.classList.add("is-awake"); gateway.hidden = false;
        if (illustration?.dataset.awakeSrc) {
          illustration.src = illustration.dataset.awakeSrc;
          illustration.alt = "Cô bé đeo kính đã tỉnh dậy, mở mắt và vui vẻ vẫy tay";
        }
        wake.setAttribute("aria-label", "Cô bé đã tỉnh và sẵn sàng học; chọn lối vào bên dưới");
      });
    }
    const saved = getSaved();
    apply(saved || "standard", false);
    if (!saved) open(null);
    portal.querySelectorAll("[data-home-style-bar] button").forEach((button) => button.addEventListener("click", () => { /* explicit choice already handles switching */ }));
    portal.querySelectorAll("[data-home-style-bar]").forEach((bar) => {
      const chooser = document.createElement("button");
      chooser.type = "button"; chooser.className = "home-style-reopen";
      chooser.textContent = "Xem hai giao diện ↗";
      chooser.addEventListener("click", () => open(chooser));
      bar.appendChild(chooser);
    });
  };
  const init = () => document.querySelectorAll("[data-home-portal]").forEach(setup);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();