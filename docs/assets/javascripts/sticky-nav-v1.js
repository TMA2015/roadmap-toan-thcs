(() => {
 "use strict";
 const create = () => {
   const tabs = document.querySelector(".md-tabs");
   const list = tabs && tabs.querySelector(".md-tabs__list");
   if (!tabs || !list || document.querySelector("[data-roadmap-nav-dock]")) return;
   const dock = document.createElement("nav");
   dock.className = "roadmap-nav-dock";
   dock.dataset.roadmapNavDock = "1";
   dock.setAttribute("aria-label", "Điều hướng nhanh khi cuộn trang");
   list.querySelectorAll("a.md-tabs__link").forEach((source) => {
      const item = document.createElement("a");
      item.href = source.href;
      item.textContent = source.textContent.trim();
      if (source.classList.contains("md-tabs__link--active")) item.setAttribute("aria-current","page");
      dock.appendChild(item);
   });
   if (!dock.children.length) return;
   document.body.appendChild(dock);
   const update = () => {
     const rect = tabs.getBoundingClientRect();
     const visible = window.innerWidth >= 1220 && rect.bottom <= 55 && window.scrollY > 90;
     dock.classList.toggle("is-visible", visible);
   };
   window.addEventListener("scroll", update, {passive:true});
   window.addEventListener("resize", update);
   update();
 };
 if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", create);
 else create();
 if (typeof document$ !== "undefined") document$.subscribe(create);
})();