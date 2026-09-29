(() => {
  "use strict";
  // Single source of truth for the independent learning stage in the top stepper
  // and the topic workspace. 01 = overview; 03 = academic-content pending;
  // 22 = optional THPT bridge (no THCS Core). Do not add those without a real page.
  const slugs = [
  "02-so-va-phep-tinh",
  "04-bieu-thuc-dai-so",
  "05-7-hang-dang-thuc",
  "06-phan-tich-da-thuc",
  "07-phan-thuc-dai-so",
  "08-phuong-trinh-bat-phuong-trinh",
  "09-he-phuong-trinh",
  "10-ham-so-do-thi",
  "11-can-thuc",
  "12-phuong-trinh-bac-hai-viete",
  "13-goc-va-duong-thang",
  "14-tam-giac",
  "15-duong-dong-quy",
  "16-tu-giac",
  "17-thales-dong-dang",
  "18-he-thuc-luong",
  "19-duong-tron",
  "20-hinh-hoc-tong-hop",
  "21-thong-ke",
  "23-xac-suat",
  "24-bai-toan-thuc-te",
  "25-tong-hop-on-thi-10"
];
  const labels = Object.freeze({
    "24-bai-toan-thuc-te": "Ứng dụng theo chặng",
    "25-tong-hop-on-thi-10": "Ôn thi theo chặng"
  });
  const routes = Object.freeze(Object.fromEntries(slugs.map(slug => [
    slug, Object.freeze({ slug, stepLabel: labels[slug] || "Core theo chặng", path: "core/" })
  ])));
  window.RoadmapTopicRoutes = Object.freeze({
    get(slug) { return routes[slug] || null; },
    slugs: Object.freeze(slugs)
  });
})();
