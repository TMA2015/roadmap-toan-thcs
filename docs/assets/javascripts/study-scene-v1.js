(() => {
  "use strict";
  const init = () => {
    document.querySelectorAll("[data-study-scene]").forEach((scene) => {
      if (scene.dataset.studyReady) return;
      const button = scene.querySelector("[data-study-wake]");
      const gateway = scene.querySelector("[data-study-gateway]");
      const title = scene.querySelector("#study-art-title");
      if (!button || !gateway) return;
      scene.dataset.studyReady = "1";
      button.addEventListener("click", () => {
        if (scene.classList.contains("is-awake")) return;
        scene.classList.add("is-awake");
        gateway.hidden = false;
        button.setAttribute("aria-label", "Bạn nhỏ đã tỉnh và bắt đầu học; chọn lối vào lớp học bên dưới");
        if (title) title.textContent = "Bạn nhỏ đã tỉnh dậy và sẵn sàng học";
      });
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
