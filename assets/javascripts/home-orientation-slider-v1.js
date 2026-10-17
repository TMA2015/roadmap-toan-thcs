(() => {
  "use strict";

  const setup = (slider) => {
    if (!slider || slider.dataset.sliderReady === "1") return;
    slider.dataset.sliderReady = "1";

    const slides = [...slider.querySelectorAll("[data-home-slide]")];
    const dots = [...slider.querySelectorAll("[data-home-slider-dot]")];
    const prev = slider.querySelector("[data-home-slider-prev]");
    const next = slider.querySelector("[data-home-slider-next]");
    if (!slides.length) return;

    let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
    let touchStartX = null;

    const show = (nextIndex, focusDot = false) => {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === index;
        slide.hidden = !active;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-pressed", String(active));
        if (active && focusDot) dot.focus();
      });
    };

    prev?.addEventListener("click", () => show(index - 1));
    next?.addEventListener("click", () => show(index + 1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));

    slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(index - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        show(index + 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        show(0, true);
      } else if (event.key === "End") {
        event.preventDefault();
        show(slides.length - 1, true);
      }
    });

    slider.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches?.[0]?.clientX ?? null;
    }, {passive:true});
    slider.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;
      const endX = event.changedTouches?.[0]?.clientX ?? touchStartX;
      const delta = endX - touchStartX;
      touchStartX = null;
      if (Math.abs(delta) < 44) return;
      show(index + (delta < 0 ? 1 : -1));
    }, {passive:true});

    show(index);
  };

  const setupGuideGallery = () => {
    const dialog = document.querySelector("[data-home-guide-dialog]");
    if (!dialog || dialog.dataset.guideReady === "1") return;
    dialog.dataset.guideReady = "1";
    const image = dialog.querySelector("[data-home-guide-dialog-image]");
    const title = dialog.querySelector("[data-home-guide-dialog-title]");
    const copy = dialog.querySelector("[data-home-guide-dialog-copy]");
    const panel = dialog.querySelector(".home-guide-dialog-panel");
    let returnFocus = null;

    const close = () => {
      if (dialog.hidden) return;
      dialog.hidden = true;
      document.documentElement.classList.remove("home-guide-modal-open");
      image?.removeAttribute("src");
      if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
      returnFocus = null;
    };

    const open = (trigger) => {
      returnFocus = trigger;
      if (image) {
        image.src = trigger.dataset.guideSrc || "";
        image.alt = trigger.querySelector("img")?.alt || "";
      }
      if (title) title.textContent = trigger.dataset.guideTitle || "";
      if (copy) copy.textContent = trigger.dataset.guideCopy || "";
      dialog.hidden = false;
      document.documentElement.classList.add("home-guide-modal-open");
      requestAnimationFrame(() => panel?.focus());
    };

    document.querySelectorAll("[data-home-guide-open]").forEach((trigger) => {
      trigger.addEventListener("click", () => open(trigger));
    });
    dialog.querySelectorAll("[data-home-guide-close]").forEach((button) => {
      button.addEventListener("click", close);
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    });
  };

  const init = () => {
    document.querySelectorAll("[data-home-slider]").forEach(setup);
    setupGuideGallery();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
