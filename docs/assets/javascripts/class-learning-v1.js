(() => {
  "use strict";
  const init = () => {
    const hub = document.querySelector("[data-class-hub]");
    if (!hub || hub.dataset.classReady === "1") return;
    hub.dataset.classReady = "1";
    const buttons = [...hub.querySelectorAll("[data-grade-select]")];
    const panels = [...hub.querySelectorAll("[data-grade-panel]")];
    const select = (grade, navigate) => {
      if (!["6","7","8","9"].includes(grade)) return;
      buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.gradeSelect === grade)));
      panels.forEach(panel => { panel.hidden = panel.dataset.gradePanel !== grade; });
      if (navigate) {
        const url = new URL(location.href);
        url.searchParams.set("lop", grade);
        history.replaceState(null, "", url);
      }
    };
    buttons.forEach(button => button.addEventListener("click", () => select(button.dataset.gradeSelect, true)));
    const params = new URLSearchParams(location.search);
    select(params.get("lop") || "6", false);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();