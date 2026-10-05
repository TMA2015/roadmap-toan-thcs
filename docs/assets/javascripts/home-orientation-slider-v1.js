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

  const init = () => document.querySelectorAll("[data-home-slider]").forEach(setup);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
