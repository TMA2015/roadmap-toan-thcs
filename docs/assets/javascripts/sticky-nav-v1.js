(() => {
 "use strict";
 const sitePrefix = () => location.pathname.startsWith("/roadmap-toan-thcs/") ? "/roadmap-toan-thcs/" : "/";
 const mainDestinations = [
   ["Trang chủ", "", "⌂"],
   ["Học theo lớp", "hoc-theo-lop/", "▣"],
   ["Roadmap", "roadmap/", "◇"],
   ["AI Tutor", "ai/ai-tutor-core-contract/", "✦"],
   ["Hướng dẫn", "huong-dan/lo-trinh-tu-hoc/", "☷"],
   ["Kiến thức", "kien-thuc/", "▤"]
 ];
 const addMobileShortcuts = () => {
   const nav = document.querySelector(".md-sidebar--primary nav.md-nav--primary");
   if (!nav) return;
   // Material's drill-down topic list overlays nav children. Put global links
   // in the drawer scroll container, outside that moving list, so they stay tappable.
   const drawer = nav.closest(".md-sidebar__scrollwrap") || nav;
   if (drawer.querySelector("[data-roadmap-mobile-shortcuts]")) return;
   const list = nav.querySelector(":scope > .md-nav__list") || nav.querySelector(".md-nav__list");
   if (!list) return;
   const sources = [...document.querySelectorAll(".md-tabs__list a.md-tabs__link")];
   const section = document.createElement("section");
   section.className = "roadmap-mobile-shortcuts";
   section.dataset.roadmapMobileShortcuts = "1";
   section.setAttribute("aria-label", "Điều hướng chính");
   const title = document.createElement("strong");
   title.className = "roadmap-mobile-shortcuts__title";
   title.textContent = "Điều hướng chính";
   const links = document.createElement("div");
   links.className = "roadmap-mobile-shortcuts__links";
   for (const [label, fallback, glyph] of mainDestinations) {
     const source = sources.find(a => a.textContent.trim() === label);
     const a = document.createElement("a");
     a.className = "roadmap-mobile-shortcuts__link";
     a.href = source?.href || sitePrefix() + fallback;
     const icon = document.createElement("span");
     icon.className = "roadmap-mobile-shortcuts__icon";
     icon.setAttribute("aria-hidden", "true");
     icon.textContent = glyph;
     a.append(icon, document.createTextNode(label));
     if (source?.classList.contains("md-tabs__link--active")) a.setAttribute("aria-current", "page");
     links.appendChild(a);
   }
   section.append(title, links);
   if (drawer === nav) nav.insertBefore(section, list);
   else drawer.insertBefore(section, drawer.firstChild);
 };
 const create = () => {
   // The sidebar is reconstructed on instant navigation, so mount separately
   // from the desktop dock and guard each against duplication.
   addMobileShortcuts();
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
