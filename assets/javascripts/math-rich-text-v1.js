(() => {
  "use strict";

  // The AI's Markdown/TeX is untrusted content. Construct DOM nodes and text
  // only; NEVER pass generated HTML to innerHTML or to an unsafe Markdown parser.
  // Supported: paragraphs, headings, lists, emphasis, inline code, fenced code,
  // TeX in $...$, $$...$$, \( ... \), and \[ ... \].
  const MARKERS = ["\\(", "\\[", "$$", "$", "**", "__", "\x60", "*", "_"];
  const textNode = value => document.createTextNode(value);
  const mathNode = (body, display = false) => {
    const node = document.createElement(display ? "div" : "span");
    node.className = display ? "ai-math-display" : "ai-math-inline";
    node.appendChild(textNode((display ? "\\[" : "\\(") + body.trim() + (display ? "\\]" : "\\)")));
    return node;
  };

  const addInline = (parent, input) => {
    const raw = String(input || "");
    let i = 0, plain = "";
    const flush = () => {
      if (plain) parent.appendChild(textNode(plain));
      plain = "";
    };
    while (i < raw.length) {
      let handled = false;
      for (const marker of MARKERS) {
        if (!raw.startsWith(marker, i)) continue;
        let endMarker = marker;
        if (marker === "\\(") endMarker = "\\)";
        if (marker === "\\[") endMarker = "\\]";
        const begin = i + marker.length;
        const end = raw.indexOf(endMarker, begin);
        if (end === -1 || end === begin || (marker === "$" && raw[i + 1] === "$")) continue;
        // A dollar sign with no closing partner is ordinary text.
        if (marker === "$" && /^\s/.test(raw.slice(begin, end))) continue;
        flush();
        const inside = raw.slice(begin, end);
        if (marker === "\\(" || marker === "$" || marker === "\\[" || marker === "$$") {
          parent.appendChild(mathNode(inside, marker === "\\[" || marker === "$$"));
        } else if (marker === "\x60") {
          const node = document.createElement("code");
          node.textContent = inside;
          parent.appendChild(node);
        } else {
          const node = document.createElement(marker.length === 2 ? "strong" : "em");
          addInline(node, inside);
          parent.appendChild(node);
        }
        i = end + endMarker.length;
        handled = true;
        break;
      }
      if (handled) continue;
      plain += raw[i];
      i += 1;
    }
    flush();
  };

  const listPattern = /^\s*(?:([-+*])\s+|(\d{1,3})[.)]\s+)(.*)$/;
  const headingPattern = /^\s*(#{1,4})\s+(.+)$/;
  const isFence = line => /^\s*\x60{3,}/.test(line);
  const isMathBlock = line => /^\s*(?:\$\$|\\\[)/.test(line);
  const blockStart = line => isFence(line) || isMathBlock(line) ||
    headingPattern.test(line) || listPattern.test(line) || /^\s*---+\s*$/.test(line);

  const render = (input, root) => {
    if (!root || typeof root.replaceChildren !== "function") return;
    root.replaceChildren();
    const lines = String(input == null ? "" : input).replace(/\r\n?/g, "\n").split("\n");
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }

      if (isFence(line)) {
        const lang = line.trim().slice(3).replace(/[^a-z0-9_-]/gi, "").slice(0, 18);
        i++;
        const body = [];
        while (i < lines.length && !isFence(lines[i])) body.push(lines[i++]);
        if (i < lines.length) i++;
        const pre = document.createElement("pre"), code = document.createElement("code");
        if (lang) code.className = "language-" + lang;
        code.textContent = body.join("\n");
        pre.appendChild(code); root.appendChild(pre);
        continue;
      }

      if (isMathBlock(line)) {
        const start = line.trim().startsWith("$$") ? "$$" : "\\[";
        const end = start === "$$" ? "$$" : "\\]";
        const trim = line.trim();
        let body = trim.slice(start.length);
        const sameLineEnd = body.indexOf(end);
        if (sameLineEnd >= 0) {
          body = body.slice(0, sameLineEnd); i++;
        } else {
          i++;
          while (i < lines.length) {
            const found = lines[i].indexOf(end);
            if (found >= 0) { body += "\n" + lines[i].slice(0, found); i++; break; }
            body += "\n" + lines[i++];
          }
        }
        root.appendChild(mathNode(body, true));
        continue;
      }

      const heading = line.match(headingPattern);
      if (heading) {
        const el = document.createElement("h" + Math.min(heading[1].length + 2, 6));
        addInline(el, heading[2]); root.appendChild(el); i++; continue;
      }
      if (/^\s*---+\s*$/.test(line)) { root.appendChild(document.createElement("hr")); i++; continue; }

      const list = line.match(listPattern);
      if (list) {
        const tag = list[2] ? "ol" : "ul", el = document.createElement(tag);
        while (i < lines.length) {
          const match = lines[i].match(listPattern);
          if (!match || (match[2] ? "ol" : "ul") !== tag) break;
          const item = document.createElement("li");
          let body = match[3]; i++;
          while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !listPattern.test(lines[i])) {
            body += " " + lines[i++].trim();
          }
          addInline(item, body); el.appendChild(item);
          if (i < lines.length && !lines[i].trim()) { i++; break; }
        }
        root.appendChild(el); continue;
      }

      const parts = [line.trim()]; i++;
      while (i < lines.length && lines[i].trim() && !blockStart(lines[i])) {
        parts.push(lines[i++].trim());
      }
      const p = document.createElement("p");
      addInline(p, parts.join(" "));
      root.appendChild(p);
    }
    return root;
  };

  window.RoadmapRichMath = Object.freeze({ render });
})();
