(() => {
  "use strict";

  const typeset = (element) => {
    if (!element || !window.MathJax?.typesetPromise) return;
    window.MathJax.typesetPromise([element]).catch(() => {});
  };

  const bind = (root = document) => {
    root.querySelectorAll?.("details:not([data-math-details-bound])").forEach((details) => {
      details.dataset.mathDetailsBound = "1";
      details.addEventListener("toggle", () => {
        if (!details.open) return;
        window.requestAnimationFrame(() => typeset(details));
      });
    });
  };

  const init = () => bind(document);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => bind(document));
  }
})();