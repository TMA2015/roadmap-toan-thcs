/* Opt-in formative preview. All keys, answers, and explanations come from authored formulas, never AI. */
(() => {
  "use strict";
  const BUILD = "arithmetic-template-preview-v1-20260927";
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const engine = window.SelfLearningArithmeticTemplates;
  const el = (tag, content = "", cls = "") => {
    const node = document.createElement(tag);
    node.className = cls;
    node.textContent = content;
    return node;
  };
  const button = (content, cls = "") => {
    const node = el("button", content, ("skill-pilot-button " + cls).trim());
    node.type = "button";
    return node;
  };
  const typeset = node => {
    if (!window.MathJax?.typesetPromise) return;
    window.MathJax.typesetClear?.([node]);
    window.MathJax.typesetPromise([node]).catch(() => {});
  };
  const loadCatalog = async root => {
    if (!engine) throw new Error("Bộ sinh bài toán chưa được nạp.");
    const assets = new URL(root.dataset.assetsBase || "../../assets/", document.baseURI);
    const response = await fetch(new URL("data/curriculum/arithmetic-template-catalog-v1.json", assets),
      { cache: "no-store" });
    if (!response.ok) throw new Error("Không tải được mẫu bài (HTTP " + response.status + ").");
    const catalog = await response.json();
    if (!engine.catalogValid(catalog)) throw new Error("Bộ mẫu bài chưa đúng phiên bản đã kiểm tra.");
    return catalog;
  };

  class Preview {
    constructor(root, catalog) {
      this.root = root;
      this.root.dataset.arithmeticTemplateBuild = BUILD;
      this.catalog = catalog;
      this.used = new Set();
      const randomSeed = Math.floor(Math.random() * 4294967295) + 1;
      this.nextSeed = randomSeed;
      this.firstScore = null;
      this.firstMisses = [];
      this.generatedCount = 0;
      const ids = [0,1,2,0,1,2].map(i => catalog.templates[i].id);
      this.original = ids.map(id => this.newQuestion(id));
      this.start(this.original, "initial");
    }
    newQuestion(id) {
      const generated = engine.generateDistinct(this.catalog, id, this.nextSeed, this.used);
      this.nextSeed = generated.nextSeed;
      this.used.add(generated.item.signature);
      this.generatedCount++;
      return generated.item;
    }
    start(items, mode) {
      this.session = [...items];
      this.mode = mode;
      this.index = 0;
      this.answers = [];
      this.orders = items.map(q => engine.TEMPLATE_IDS.map((_, i) => i).concat(3));
      // Shuffling only affects the four displayed choices, not the authored answer index.
      this.orders = items.map(() => {
        const values = [0,1,2,3];
        for (let i = values.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i+1));
          [values[i],values[j]]=[values[j],values[i]];
        }
        return values;
      });
      this.render();
    }
    render() {
      this.root.replaceChildren();
      this.intro = el("p", this.mode === "initial" ?
        "Beta sinh câu theo mẫu · 6 câu đầu từ ba dạng. Có thể quay lại câu đã nộp; không lưu điểm." :
        this.mode === "retry_old" ?
          "Luyện lại đúng câu đã xem lời giải, cùng ID. Đây là ôn tập, không phải bằng chứng mới." :
          "Biến thể mới thay tham số thật và có lời giải tính lại. Vì vừa xem hướng dẫn nên vẫn là luyện tập có hỗ trợ.",
        "skill-pilot-intro");
      this.progress = el("p", "", "skill-pilot-progress");
      this.card = el("section", "", "skill-pilot-card");
      this.root.append(this.intro, this.progress, this.card);
      this.renderQuestion();
    }
    go(index) {
      if (!Number.isInteger(index) || index < 0 || index > this.answers.length ||
          index > this.session.length) return;
      this.index=index; this.renderQuestion();
    }
    navigation(record) {
      const nav = el("nav","","skill-pilot-nav");
      nav.setAttribute("aria-label","Điều hướng câu theo mẫu");
      const back=button("← Câu trước","skill-pilot-nav-back");
      back.disabled=this.index===0;
      back.addEventListener("click",()=>this.go(this.index-1));
      const mid=el("span","Câu "+(this.index+1)+"/"+this.session.length,"skill-pilot-nav-counter");
      const next=button(this.index+1===this.session.length?"Xem kết quả →":"Câu tiếp →",
        "skill-pilot-nav-next");
      next.disabled=!record;
      next.addEventListener("click",()=>this.go(this.index+1));
      nav.append(back,mid,next);
      return nav;
    }
    renderQuestion() {
      this.card.replaceChildren();
      if(this.index===this.session.length){this.renderSummary();return;}
      const q=this.session[this.index],record=this.answers[this.index];
      const score=this.answers.filter(a=>a.correct).length;
      this.progress.textContent="Đã nộp "+this.answers.length+"/"+this.session.length+
        " · Đúng "+score+" · "+(this.mode==="initial"?"Lượt đầu":
        this.mode==="retry_old"?"Ôn câu cũ":"Biến thể sau hướng dẫn");
      const template=this.catalog.templates.find(t=>t.id===q.template_id);
      this.card.append(el("p",template.display_name+" · "+q.source_template_version+
        " · Mã biến thể "+q.seed+(record?" · Đã nộp · Chỉ xem":""),"skill-pilot-meta"));
      this.card.append(el("h3","Làm bài không cần AI","skill-pilot-heading"));
      this.card.append(el("p","Đáp án và lời giải được tính trực tiếp bằng công thức của mẫu đã kiểm định.",
        "skill-pilot-secondary"));
      this.card.append(el("p",q.question,"skill-pilot-question"));
      const options=el("div","","skill-pilot-options");
      for(const i of this.orders[this.index]){
        const option=button(q.options[i],"skill-pilot-option");
        option.dataset.originalIndex=String(i);
        if(record){
          option.disabled=true;
          if(i===q.answer)option.classList.add("is-correct");
          if(i===record.selected&&!record.correct)option.classList.add("is-wrong");
        }else option.addEventListener("click",()=>this.answer(q,i));
        options.append(option);
      }
      this.card.append(options);
      if(record){
        const feedback=el("div","","skill-pilot-feedback "+(record.correct?"is-correct":"is-wrong"));
        feedback.append(el("strong",record.correct?"✓ Chính xác":"✗ Xem lỗi và cách tính"));
        if(!record.correct){
          feedback.append(el("p","Lỗi có thể gặp: "+q.diagnostics[record.selected].reason,
            "skill-pilot-diagnostic"));
        }
        feedback.append(el("p",q.explanation));
        feedback.append(el("p",this.mode==="initial"?
          "Một lần chọn đúng là phản hồi của bài ngắn, chưa đủ kết luận thành thạo.":
          "Lượt này là ôn tập/vận dụng sau phản hồi, không cộng thêm điểm vào lượt đầu.",
          "skill-pilot-secondary"));
        this.card.append(feedback);
      } else this.card.append(el("p","Nộp một đáp án để xem lời giải, sau đó chỉ có thể xem lại.",
        "skill-pilot-secondary"));
      this.card.append(this.navigation(record));
      typeset(this.card);
    }
    answer(q,selected){
      if(this.answers[this.index]||this.index!==this.answers.length||
        this.session[this.index]?.id!==q.id)return;
      this.answers.push({question:q,selected,correct:selected===q.answer,mode:this.mode});
      this.renderQuestion();
    }
    renderSummary() {
      const score=this.answers.filter(a=>a.correct).length;
      const wrong=this.answers.filter(a=>!a.correct);
      if(this.mode==="initial"&&!this.firstScore){
        this.firstScore={correct:score,total:this.session.length};
        this.firstMisses=wrong.map(a=>a.question.template_id);
      }
      this.progress.textContent="Hoàn thành: "+score+"/"+this.session.length;
      this.card.append(el("h3",this.mode==="initial"?"Kết quả lượt đầu":
        this.mode==="retry_old"?"Kết quả luyện lại câu cũ":"Kết quả biến thể mới","skill-pilot-heading"));
      const first=this.firstScore;
      this.card.append(el("p","Lượt đầu: "+first.correct+"/"+first.total+
        " · Lượt này: "+score+"/"+this.session.length+
        " · "+wrong.length+" câu cần xem lại. Không cộng gộp hai lượt.",
        "skill-pilot-summary-lead"));
      this.card.append(el("p",this.mode==="initial"?
        "Đề, phương án và lời giải được tính sẵn bằng module trên trình duyệt; không gọi AI.":
        this.mode==="retry_old"?"Câu cũ sau khi xem đáp án không phải bằng chứng độc lập.":
        "Các ID/giá trị mới dùng để luyện vận dụng sau hướng dẫn, chưa tính mastery độc lập.",
        "skill-pilot-warning"));
      if(wrong.length){
        this.card.append(el("h4","Câu sai cần ôn ("+wrong.length+")","skill-pilot-review-title"));
        for(const answer of wrong){
          const q=answer.question,details=document.createElement("details");
          details.className="skill-pilot-review-item";
          details.append(el("summary",q.template_id+" · "+q.id+" · Xem lời giải"));
          details.append(el("p",q.question,"skill-pilot-review-question"));
          details.append(el("p","Em chọn: "+q.options[answer.selected],"skill-pilot-review-chosen"));
          details.append(el("p","Đáp án: "+q.options[q.answer],"skill-pilot-review-answer"));
          details.append(el("p","Lỗi có thể gặp: "+q.diagnostics[answer.selected].reason,
            "skill-pilot-diagnostic"));
          details.append(el("p",q.explanation,"skill-pilot-review-explanation"));
          this.card.append(details);
        }
        const retry=button("Ôn lại "+wrong.length+" câu cũ","skill-pilot-primary");
        retry.addEventListener("click",()=>this.start(wrong.map(a=>a.question),"retry_old"));
        this.card.append(retry);
      }else this.card.append(el("p","✓ Không có câu sai trong lượt này.","skill-pilot-success"));
      const targets=this.firstMisses.length?this.firstMisses:
        this.catalog.templates.map(t=>t.id);
      const similar=button("Tạo "+targets.length+" câu tương tự với số mới","skill-pilot-primary");
      similar.addEventListener("click",()=>this.start(targets.map(id=>this.newQuestion(id)),
        "similar_after_feedback"));
      this.card.append(similar);
      this.card.append(el("p","Lượt đầu giữ nguyên. Câu tương tự dùng biến thể mới, lời giải cũng thay số tương ứng.",
        "skill-pilot-secondary"));
      const last=button("Xem lại câu cuối","skill-pilot-nav-back");
      last.addEventListener("click",()=>this.go(this.session.length-1));
      this.card.append(last);
      const link=document.createElement("a");
      link.className="skill-pilot-lesson-link";
      link.href=new URL("../../kien-thuc/02-so-va-phep-tinh/",document.baseURI).href;
      link.textContent="Ôn lại số học →";
      this.card.append(link);
      typeset(this.card);
    }
  }
  const init=async()=>{
    const root=document.querySelector("[data-arithmetic-template-preview]");
    if(!root||root.dataset.arithmeticTemplateInitialized)return;
    root.dataset.arithmeticTemplateInitialized="1";
    try{new Preview(root,await loadCatalog(root));}
    catch(error){root.replaceChildren(el("p","Chưa thể mở bộ sinh bài: "+error.message,
      "skill-pilot-warning"));}
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();
