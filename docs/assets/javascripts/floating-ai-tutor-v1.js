(() => {
  "use strict";

  // Read-only teaching surfaces: topic lessons plus the Topic 25 anchor library.
  // Never mount on practice, self-checks, timed mocks or answer keys.
  const isReadingPage = () => {
    const path = location.pathname.replace(/\/index\.html$/, "/");
    if (/^\/(?:roadmap-toan-thcs\/)?kien-thuc\/[^/]+\/$/.test(path)) return true;
    return /^\/(?:roadmap-toan-thcs\/)?kien-thuc\/25-tong-hop-on-thi-10\/(?:bai-toan-kinh-dien|kho-bai-mo-neo|anchor-25-\d{3})\/$/.test(path);
  };
  const contentRoot = () => document.querySelector(".md-content__inner .md-typeset") || document.querySelector(".md-content__inner");
  const topicSlug = () => {
    const match = location.pathname.match(/\/kien-thuc\/([^/]+)/);
    return match ? match[1] : "lesson";
  };
  const clean = value => String(value || "").replace(/\s+/g, " ").trim();
  const headingLevel = node => /^H[1-6]$/.test(node?.tagName || "") ? Number(node.tagName.slice(1)) : 9;

  const activeHeading = root => {
    const headings = [...root.querySelectorAll("h1,h2,h3")];
    if (!headings.length) return null;
    const threshold = Math.min(innerHeight * .34, 260);
    let active = headings[0];
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= threshold) active = heading;
      else break;
    }
    return active;
  };

  const selectedText = root => {
    const selection = getSelection?.();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return "";
    const range = selection.getRangeAt(0);
    const node = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    if (!node || !root.contains(node)) return "";
    return clean(selection.toString()).slice(0, 2200);
  };

  const sectionText = (root, heading) => {
    if (!heading) return clean(root.innerText).slice(0, 2400);
    const level = headingLevel(heading);
    const pieces = [clean(heading.textContent)];
    let node = heading.nextElementSibling;
    while (node && pieces.join(" ").length < 2600) {
      if (/^H[1-6]$/.test(node.tagName) && headingLevel(node) <= level) break;
      if (!node.matches?.("script,style,.practice-engine,.topic-workspace,.written-self-check-solution")) {
        const text = clean(node.innerText || node.textContent);
        if (text) pieces.push(text);
      }
      node = node.nextElementSibling;
    }
    return pieces.join("\n").slice(0, 2600);
  };

  const lessonContext = () => {
    const root = contentRoot();
    const heading = activeHeading(root);
    const selected = selectedText(root);
    const pageTitle = clean(root.querySelector("h1")?.textContent || document.title);
    return {
      title: pageTitle,
      section: clean(heading?.textContent || pageTitle),
      text: selected || sectionText(root, heading),
      selected: Boolean(selected)
    };
  };

  const button = (label, className = "") => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = ("floating-ai-btn " + className).trim();
    el.textContent = label;
    return el;
  };

  const typeset = element => {
    if (!window.MathJax?.typesetPromise) return;
    window.MathJax.typesetClear?.([element]);
    window.MathJax.typesetPromise([element]).catch(() => {});
  };

  const init = () => {
    if (!isReadingPage() || document.querySelector("[data-floating-ai]")) return;
    if (!window.RoadmapGemini?.isConfigured?.() || !window.RoadmapTutor) return;

    const shell = document.createElement("div");
    shell.className = "floating-ai";
    shell.dataset.floatingAi = "1";

    const iconSrc = (location.pathname.startsWith("/roadmap-toan-thcs/") ? "/roadmap-toan-thcs/" : "/") + "assets/images/tutor-girl-awake.webp";
    const launcher = button("", "floating-ai-launcher");
    const face = document.createElement("img");
    face.className = "floating-ai-face";
    face.src = iconSrc;
    face.alt = "";
    face.width = 64;
    face.height = 64;
    face.decoding = "async";
    launcher.appendChild(face);
    launcher.setAttribute("aria-label", "Mở AI Tutor để hỏi về bài học");
    launcher.setAttribute("aria-expanded", "false");

    const panel = document.createElement("section");
    panel.className = "floating-ai-panel";
    panel.hidden = true;
    panel.setAttribute("aria-label", "AI Tutor cho trang kiến thức");

    const head = document.createElement("div");
    head.className = "floating-ai-head";
    const titleWrap = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = "Gia sư AI · Hỏi về bài đang đọc";
    const contextLabel = document.createElement("small");
    titleWrap.append(title, contextLabel);
    const close = button("×", "floating-ai-close");
    close.setAttribute("aria-label", "Đóng AI Tutor");
    const smallFace = document.createElement("img");
    smallFace.src = iconSrc;
    smallFace.alt = "";
    smallFace.className = "floating-ai-head-face";
    head.append(smallFace, titleWrap, close);

    const quick = document.createElement("div");
    quick.className = "floating-ai-quick";
    [
      ["Giải thích dễ hơn", "Hãy giải thích đoạn kiến thức này bằng ngôn ngữ đơn giản hơn, từng ý ngắn, phù hợp học sinh THCS. Nêu trực giác trước rồi mới dùng công thức."],
      ["Cho ví dụ khác", "Hãy cho một ví dụ mới, đơn giản và khác ví dụ trên trang, giải thích từng bước để em thấy kiến thức này được dùng như thế nào."],
      ["Vì sao lại đúng?", "Hãy giải thích vì sao kiến thức hoặc quy tắc trong đoạn này đúng. Ưu tiên lập luận trực quan rồi mới trình bày toán học."],
      ["Em cần nhớ gì?", "Hãy tóm tắt đúng phần cốt lõi của đoạn này thành 3-5 ý cần nhớ và chỉ ra một lỗi học sinh thường mắc."]
    ].forEach(([label, prompt]) => {
      const el = button(label, "floating-ai-chip");
      el.addEventListener("click", () => ask(prompt, el));
      quick.appendChild(el);
    });

    const answer = document.createElement("div");
    answer.className = "floating-ai-answer";
    answer.hidden = true;

    const input = document.createElement("textarea");
    input.className = "floating-ai-input";
    input.rows = 3;
    input.maxLength = 500;
    input.placeholder = "Hỏi về phần đang đọc… Ví dụ: Vì sao phải có điều kiện này?";
    input.setAttribute("aria-label", "Câu hỏi cho AI Tutor");

    const send = button("Hỏi Gemini", "floating-ai-send");
    const note = document.createElement("small");
    note.className = "floating-ai-note";
    note.textContent = "AI có thể sai. Không nhập thông tin cá nhân. Nếu bôi đen một đoạn trước khi mở AI, Tutor sẽ ưu tiên đúng đoạn đó.";

    panel.append(head, quick, answer, input, send, note);
    shell.append(panel, launcher);
    document.body.appendChild(shell);

    let pending = false;
    const refreshContextLabel = () => {
      const context = lessonContext();
      contextLabel.textContent = (context.selected ? "Đang dùng đoạn đã bôi đen · " : "Đang đọc · ") + context.section;
    };

    const setOpen = open => {
      panel.hidden = !open;
      launcher.setAttribute("aria-expanded", String(open));
      shell.classList.toggle("is-open", open);
      if (open) {
        refreshContextLabel();
        setTimeout(() => input.focus(), 0);
      }
    };

    async function ask(request, trigger = send) {
      const questionText = clean(request || input.value);
      if (!questionText || pending) return;
      const page = lessonContext();
      if (!page.text) return;
      pending = true;
      trigger.disabled = true;
      send.disabled = true;
      answer.hidden = false;
      answer.replaceChildren();
      const waiting = document.createElement("p");
      waiting.className = "floating-ai-waiting";
      waiting.textContent = "Gemini đang đọc đúng phần này và chuẩn bị giải thích…";
      answer.appendChild(waiting);
      try {
        const question = {
          id: "lesson-" + topicSlug(),
          question: "ĐOẠN KIẾN THỨC ĐANG ĐỌC\nTrang: " + page.title + "\nMục: " + page.section + "\n\n" + page.text,
          tags: { layer: "KNTT-Core", skill: ["reading-" + topicSlug()] }
        };
        const context = window.RoadmapTutor.buildContext({
          projectContextVersion: "1.0.17",
          layer: "KNTT-Core",
          skill: "reading-" + topicSlug(),
          question,
          learnerRequest: questionText,
          helpMode: "TEACH_FROM_START",
          activity: "learning",
          submitted: false,
          stats: { tags: {} },
          graph: null,
          recovery: { events: [] }
        });
        const response = await window.RoadmapTutor.run({ provider: "gemini", context });
        answer.replaceChildren();
        if (window.RoadmapRichMath?.render) window.RoadmapRichMath.render(response.message, answer);
        else answer.textContent = response.message;
        typeset(answer);
        input.value = "";
        refreshContextLabel();
      } catch (error) {
        answer.replaceChildren();
        const errorText = document.createElement("p");
        errorText.className = "floating-ai-error";
        errorText.textContent = "Chưa hỏi được Gemini: " + (error?.message || "lỗi kết nối") + ". Nội dung bài học trên trang vẫn dùng bình thường.";
        answer.appendChild(errorText);
      } finally {
        pending = false;
        trigger.disabled = false;
        send.disabled = false;
      }
    }

    launcher.addEventListener("click", () => setOpen(panel.hidden));
    close.addEventListener("click", () => setOpen(false));
    send.addEventListener("click", () => ask(input.value));
    input.addEventListener("keydown", event => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        ask(input.value);
      }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !panel.hidden) setOpen(false);
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
