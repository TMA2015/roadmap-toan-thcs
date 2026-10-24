/* R17: opt-in Knowledge presentation enhancement. Original Markdown and math data are unchanged.
 * Reparent only a verified sequence of existing nodes; text/math/figure count stays identical.
 * Failure to match source leaves the ordinary vertical reading experience intact.
 */
(() => {
  "use strict";
  const route = () => {
    const pathname = window.location.pathname;
    if (/(?:^|\/)kien-thuc\/05-7-hang-dang-thuc\/(?:index\.html)?$/.test(pathname)) return "CT05";
    if (/(?:^|\/)kien-thuc\/14-tam-giac\/(?:index\.html)?$/.test(pathname)) return "CT14";
    return null;
  };
  const headingWith = (root, prefix) =>
    [...root.querySelectorAll("h3")].find(h => h.textContent.trim().startsWith(prefix));
  const isCodeBlock = node =>
    !!node && (node.matches("pre, .highlight") || !!node.querySelector("pre"));

  function enhanceTwoDirectionalExamples(article) {
    const heading = headingWith(article, "4.2. Hằng đẳng thức dùng theo hai chiều");
    if (!heading || heading.dataset.mathR17) return;
    const p1 = heading.nextElementSibling;
    const code1 = p1?.nextElementSibling;
    const p2 = code1?.nextElementSibling;
    const code2 = p2?.nextElementSibling;
    if (!p1?.matches("p") || !p2?.matches("p") || !isCodeBlock(code1) || !isCodeBlock(code2) ||
        !p1.textContent.includes("Chiều khai triển") || !p2.textContent.includes("Chiều nhận dạng")) return;
    const compare = document.createElement("div");
    compare.className = "mk-r17-compare";
    compare.dataset.mathR17 = "original-nodes-only";
    const left = document.createElement("div");
    left.className = "mk-r17-compare-item";
    const right = document.createElement("div");
    right.className = "mk-r17-compare-item";
    heading.insertAdjacentElement("afterend", compare);
    compare.append(left, right);
    left.append(p1, code1);
    right.append(p2, code2);
    heading.dataset.mathR17 = "1";
  }

  function styleTwoRules(heading, label, snippets) {
    if (!heading || heading.dataset.mathR17) return;
    let lead;
    let rules;
    for (let node=heading.nextElementSibling; node && !node.matches("h2,h3"); node=node.nextElementSibling) {
      if (!lead && node.matches("p") && node.textContent.includes(label)) {
        lead = node;
        rules = node.nextElementSibling;
        break;
      }
    }
    if (!rules?.matches("ul") || rules.children.length !== 2) return;
    const items = [...rules.children];
    if (!items.every((li,i) => li.matches("li") && li.textContent.includes(snippets[i]))) return;
    rules.classList.add("mk-r17-logic-pairs");
    rules.dataset.mathR17 = "original-list-only";
    heading.dataset.mathR17 = "1";
  }

  function run() {
    const topic = route();
    if (!topic) return;
    const article = document.querySelector("article.md-content__inner.md-typeset") ||
      document.querySelector(".md-content__inner.md-typeset");
    if (!article) return;
    if (topic === "CT05") enhanceTwoDirectionalExamples(article);
    if (topic === "CT14") {
      styleTwoRules(headingWith(article,"3.5. Quan hệ giữa cạnh và góc đối diện"),
        "Trong một tam giác", ["Góc lớn hơn", "Cạnh lớn hơn"]);
      styleTwoRules(headingWith(article,"3.6A. Đường vuông góc, đường xiên và đường trung trực"),
        "Tính chất hai chiều", ["nằm trên trung trực", "PA=PB"]);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",run,{once:true});
  else run();
  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(run);
})();
