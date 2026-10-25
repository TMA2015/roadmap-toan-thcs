/* R30: THCS Knowledge presentation parity (source-safe).
   §6: Preserve authored details and verified R20 Practice/Written links, display
   H3-based rows in one clear table. Never change learner state or bank data.
   No extra tab or content copy is produced. */
(() => {
  "use strict";
  const activate = () => {
    const match = location.pathname.match(/(?:^|\/)kien-thuc\/(\d\d-[^/]+)\/(?:index\.html)?$/);
    if (!match || match[1].startsWith("01-")) return;
    const root = document.querySelector(".md-content__inner.math-knowledge-r19");
    if (!root || root.dataset.mathKnowledgeR30 === "1") return;
    root.dataset.mathKnowledgeR30 = "1";
    // Place the slim, sticky jump row immediately below the site's blue
    // masthead in reading order, instead of after the tall topic hero.
    const nav = root.querySelector(".topic-workspace-nav");
    const hero = root.querySelector(".topic-workspace-hero");
    if (nav && hero) hero.before(nav);

    // The semantic CT10 table and source-authored §6 Markdown tables are
    // already correct. Only H3-authored §6 sections need layout conversion.
    const exam = root.querySelector("details.topic-learning-card#exam");
    const body = exam?.querySelector(":scope > .topic-learning-card-body");
    if (!body) return;
    const headings = [...body.children].filter(n => n.tagName === "H3");
    // §6 H3 source families are independently validated by the R20 build
    // hook. Some MkDocs renderer paths wrap links as siblings rather than
    // direct descendants, so don't gate layout on incidental action wrappers.
    // Every real H3 remains a visible row even when its exercise is pending.
    if (headings.length < 2) return;

    const wrap = document.createElement("div");
    wrap.className = "mk-exam-table-scroll";
    wrap.setAttribute("role", "region");
    wrap.setAttribute("aria-label", "Bảng các dạng bài thi vào lớp 10");
    wrap.tabIndex = 0;
    const table = document.createElement("table");
    table.className = "mk-exam-table";
    const caption = document.createElement("caption");
    caption.textContent = "Các dạng bài thi vào lớp 10 — bài luyện đúng dạng được kiểm chứng";
    const thead = document.createElement("thead");
    const titles = ["Dạng bài", "Nội dung cần nắm vững", "Ưu tiên", "Mở bài"];
    const tr = document.createElement("tr");
    titles.forEach(t => { const th = document.createElement("th"); th.scope = "col"; th.textContent = t; tr.appendChild(th); });
    thead.appendChild(tr);
    const tbody = document.createElement("tbody");
    // Snapshot siblings BEFORE moving headings into table cells.
    const groups = headings.map((heading, i) => {
      const nodes = [];
      let node = heading.nextSibling;
      while (node && node !== (headings[i + 1] || null)) {
        nodes.push(node); node = node.nextSibling;
      }
      return {heading, nodes};
    });
    // CT13 already has the six reviewed R20 exam rows in its source table,
    // followed by three explanatory method H3s. We must integrate those
    // into the EXISTING table, not render a second competing three-row table.
    // The two parallel-angle methods belong to row 2, perpendicular to row 3.
    const authoredTable = body.querySelector("table");
    if (match[1].startsWith("13-") && authoredTable && groups.length === 3) {
      const authoredRows = [...authoredTable.querySelectorAll("tbody > tr")];
      if (authoredRows.length !== 6) return; // fail safe, don't lose content
      const mappedRowIndexes = [1,1,2];
      groups.forEach(({heading,nodes},i) => {
        const cell = authoredRows[mappedRowIndexes[i]].querySelector("td");
        if (!cell) return;
        const note = document.createElement("section");
        note.className = "mk-exam-method-note";
        note.append(heading,...nodes); // move original headings, links, explanations
        cell.append(note);
      });
      exam.dataset.mathR30ExamTable = "1";
      return;
    }
    headings[0].before(wrap);

    groups.forEach(({heading, nodes}, i) => {
      const row = document.createElement("tr");
      const name = document.createElement("th");
      name.scope = "row";
      name.className = "mk-exam-name";
      if (!/^Dạng\s+\d+/i.test(heading.textContent.trim())) {
        const prefix = document.createElement("span");
        prefix.className = "mk-exam-number";
        prefix.textContent = "Dạng " + (i + 1);
        name.appendChild(prefix);
      }
      name.appendChild(heading); // preserve any existing heading id / TOC links

      const details = document.createElement("td");
      details.className = "mk-exam-description";
      const level = document.createElement("td");
      level.className = "mk-exam-topic-priority";
      level.textContent = "Theo chuyên đề";
      const links = document.createElement("td");
      links.className = "mk-exam-links";
      for (const node of nodes) {
        if (node.nodeType === 1 && node.matches?.("hr")) {
          node.remove();
          continue;
        }
        const found = node.nodeType === 1 &&
          (node.matches?.(".math-knowledge-exam-actions")
            ? node : node.querySelector?.(".math-knowledge-exam-actions"));
        if (found) {
          links.appendChild(found);
          if (node !== found && !node.textContent.trim() && node.children.length === 0)
            node.remove();
          else if (node !== found)
            details.appendChild(node);
        } else {
          details.appendChild(node);
        }
      }
      row.append(name, details, level, links);
      tbody.appendChild(row);
    });
    table.append(caption, thead, tbody);
    wrap.appendChild(table);
    exam.dataset.mathR30ExamTable = "1";
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", activate, {once:true});
  } else activate();
  if (window.document$?.subscribe) window.document$.subscribe(activate);
})();