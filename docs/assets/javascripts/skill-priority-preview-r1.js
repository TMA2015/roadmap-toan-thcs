(() => {
  "use strict";

  const BUILD = "skill-priority-owner-preview-r1-20261011";
  const REVIEW_CLEARANCE = "SKILL_PRIORITY_MATRIX_R1_REVIEW_COMPLETE";
  const SCOPE_ORDER = ["core", "support", "entrance", "optional", "all"];
  const TOPICS = {
    CT02:"02 · Số và phép tính",CT03:"03 · Tỉ lệ – Tỉ lệ thức",CT04:"04 · Biểu thức đại số",
    CT05:"05 · 7 Hằng đẳng thức",CT06:"06 · Phân tích đa thức",CT07:"07 · Phân thức đại số",
    CT08:"08 · Phương trình – Bất phương trình",CT09:"09 · Hệ phương trình",
    CT10:"10 · Hàm số và đồ thị",CT11:"11 · Căn thức",CT12:"12 · Phương trình bậc hai & Viète",
    CT13:"13 · Góc và đường thẳng",CT14:"14 · Tam giác",CT15:"15 · Các đường đồng quy",
    CT16:"16 · Tứ giác",CT17:"17 · Thales và đồng dạng",CT18:"18 · Hệ thức lượng",
    CT19:"19 · Đường tròn",CT20:"20 · Hình học tổng hợp",CT21:"21 · Thống kê",
    CT22:"22 · Đại lượng đặc trưng",CT23:"23 · Xác suất",CT24:"24 · Bài toán thực tế",
    CT25:"25 · Tổng hợp & ôn thi vào 10"
  };
  const PRIORITIES = Object.freeze({
    P0_FOUNDATION_CRITICAL:{label:"Nền tảng cần vững",explain:"Là điểm tựa quan trọng để học tiếp những phần liên quan.",rank:0,kind:"foundation"},
    P1_HIGH_VALUE_CORE:{label:"Nên chú trọng",explain:"Kỹ năng cốt lõi có nhiều giá trị khi học và vận dụng.",rank:1,kind:"focus"},
    P2_STANDARD_CORE:{label:"Học theo tiến độ",explain:"Kiến thức cốt lõi cần học đầy đủ, không nhất thiết luyện nhiều hơn.",rank:2,kind:"standard"},
    SUPPORT_HIGH_VALUE:{label:"Hỗ trợ quan trọng",explain:"Hỗ trợ giải quyết và kiểm tra các bài toán ở nhiều chủ đề.",rank:3,kind:"support"},
    SUPPORT_ON_DEMAND:{label:"Hỗ trợ khi cần",explain:"Có thể quay lại học khi bài toán cần đến kỹ năng này.",rank:4,kind:"support"},
    E1_HIGH_TRANSFER:{label:"Ôn thi · Nên chú trọng",explain:"Hữu ích khi kết hợp nhiều kỹ năng trong giai đoạn ôn thi.",rank:5,kind:"entrance"},
    E2_STANDARD_ENTRANCE:{label:"Ôn thi · Bổ sung",explain:"Nội dung ôn thi theo nhu cầu, không phải yêu cầu cho mọi học sinh.",rank:6,kind:"entrance"},
    OPTIONAL_SPECIALIST:{label:"Thử thách tự chọn",explain:"Dành cho học sinh muốn khám phá bài nâng cao hoặc luyện chuyên.",rank:7,kind:"optional"},
    OPTIONAL_BRIDGE:{label:"Cầu nối THPT",explain:"Đọc trước nếu muốn chuẩn bị cho kiến thức lớp trên.",rank:8,kind:"optional"}
  });
  const isOptional = (layer) => layer==="Specialized-Challenge" || layer==="THPT-Bridge";
  const scopeOf = (layer) => layer==="KNTT-Core"?"core":layer==="Core-Support"?"support":layer==="Entrance10"?"entrance":"optional";
  const normalize = (x) => String(x||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase();
  const primaryTopic = (r) => Array.isArray(r.topics)&&r.topics.length?r.topics[0]:"ZZ";

  function validateAndBuild(matrix,spine) {
    if(matrix?.audit_id!=="MATH-SKILL-PRIORITY-MATRIX-R1-20261010" ||
       matrix?.review?.final_clearance!==REVIEW_CLEARANCE ||
       matrix?.status!=="ACADEMIC_PRIORITY_REVIEW_PASS_NO_RUNTIME_ACTIVATION" ||
       matrix?.family_rows?.length!==131) throw Error("Chưa có bảng ưu tiên đã duyệt");
    const seen=new Set();
    const rows=matrix.family_rows.map(row=>{
      if(!row.family_id||seen.has(row.family_id)) throw Error("Mã kỹ năng không hợp lệ hoặc bị trùng");
      seen.add(row.family_id);
      if(!Array.isArray(row.topics)||!row.topics.length||!row.label_vi) throw Error("Thiếu dữ liệu về kỹ năng");
      const code=row.review_decision?.learner_priority;
      if(!PRIORITIES[code]) throw Error("Mức ưu tiên chưa được duyệt");
      const layerScope=scopeOf(row.layer);
      if(layerScope==="core"&&!["P0_FOUNDATION_CRITICAL","P1_HIGH_VALUE_CORE","P2_STANDARD_CORE"].includes(code)) throw Error("Mức Core không hợp lệ");
      if(layerScope==="support"&&!["SUPPORT_HIGH_VALUE","SUPPORT_ON_DEMAND"].includes(code)) throw Error("Mức Support không hợp lệ");
      if(layerScope==="entrance"&&!["E1_HIGH_TRANSFER","E2_STANDARD_ENTRANCE"].includes(code)) throw Error("Mức ôn thi không hợp lệ");
      if(row.layer==="Specialized-Challenge"&&code!=="OPTIONAL_SPECIALIST") throw Error("Mức thử thách không hợp lệ");
      if(row.layer==="THPT-Bridge"&&code!=="OPTIONAL_BRIDGE") throw Error("Mức cầu nối không hợp lệ");
      return {...row, priority_code:code,priority:PRIORITIES[code],scope:layerScope,topic:primaryTopic(row)};
    });
    const counts=rows.reduce((a,r)=>(a[r.priority_code]=(a[r.priority_code]||0)+1,a),{});
    const expected={"P0_FOUNDATION_CRITICAL":11,"P1_HIGH_VALUE_CORE":37,"P2_STANDARD_CORE":52,
      "SUPPORT_HIGH_VALUE":2,"SUPPORT_ON_DEMAND":3,"E1_HIGH_TRANSFER":10,
      "E2_STANDARD_ENTRANCE":9,"OPTIONAL_SPECIALIST":4,"OPTIONAL_BRIDGE":3};
    if(JSON.stringify(Object.fromEntries(Object.entries(expected).map(([k])=>[k,counts[k]||0])))!==JSON.stringify(expected))
      throw Error("Số lượng nhóm ưu tiên không khớp");
    const topicSlugs={};
    for(const strand of Object.values(spine?.strands||{})){
      for(const slug of strand?.sequence||[]) {
        const id="CT"+String(slug).slice(0,2);
        if(/^CT\d\d$/.test(id)) topicSlugs[id]=slug;
      }
    }
    topicSlugs.CT25="25-tong-hop-on-thi-10";
    return {rows,counts,topicSlugs};
  }

  function filterRows(rows,filters={}){
    const q=normalize(filters.query).trim();
    return rows.filter(r=>
      (!filters.scope||filters.scope==="all"||r.scope===filters.scope) &&
      (!filters.level||filters.level==="all"||r.priority_code===filters.level) &&
      (!filters.topic||filters.topic==="all"||r.topics.includes(filters.topic)) &&
      (!q||normalize([r.label_vi,r.family_id,...(r.topics||[])].join(" ")).includes(q))
    ).sort((a,b)=>a.topic.localeCompare(b.topic)||
      a.priority.rank-b.priority.rank||
      a.label_vi.localeCompare(b.label_vi,"vi"));
  }

  const api=Object.freeze({BUILD,PRIORITIES,SCOPE_ORDER,validateAndBuild,filterRows,scopeOf,isOptional});
  if(typeof module!=="undefined"&&module.exports) module.exports=api;
  if(typeof document==="undefined") return;
  const el=(tag,css="",value=null)=>{
    const node=document.createElement(tag);
    if(css) node.className=css;
    if(value!==null) node.textContent=String(value);
    return node;
  };
  const option=(value,label)=>{const n=document.createElement("option");n.value=value;n.textContent=label;return n;};
  const load=async(url)=>{
    const response=await fetch(url,{cache:"no-store"});
    if(!response.ok) throw Error("Không tải được dữ liệu ("+response.status+")");
    return response.json();
  };
  function init(root,catalog,assets){
    const filters={scope:"core",level:"all",topic:"all",query:""};
    root.replaceChildren();
    root.dataset.priorityPreviewBuild=BUILD;
    const banner=el("div","spp-banner");
    banner.append(el("strong","","Chọn kỹ năng theo vai trò học tập"),
      el("p","","Ưu tiên thể hiện vai trò của kiến thức, không phải mức giỏi/yếu của em. Trang này không đọc hay thay đổi kết quả học tập."));
    root.append(banner);
    const stats=el("div","spp-stats");
    for(const [value,label] of [[11,"Nền tảng cần vững"],[37,"Nên chú trọng"],[52,"Học theo tiến độ"],[31,"Hỗ trợ · Ôn thi · Mở rộng"]]){
      const card=el("div","spp-stat");
      card.append(el("strong","",value),el("span","",label));
      stats.append(card);
    }
    root.append(stats);
    const controls=el("div","spp-controls");
    function select(label,opts,onChange,css=""){
      const wrapper=el("label","spp-control "+css);
      wrapper.append(el("span","",label));
      const input=el("select");
      for(const [value,text] of opts)input.append(option(value,text));
      input.addEventListener("change",()=>onChange(input.value));
      wrapper.append(input);
      controls.append(wrapper);
      return input;
    }
    select("Lộ trình",[["core","Kiến thức cốt lõi"],["support","Kiến thức hỗ trợ"],["entrance","Ôn thi vào 10"],["optional","Mở rộng tự chọn"],["all","Tất cả 131 kỹ năng"]],
      v=>{filters.scope=v;filters.level="all";level.value="all";render();});
    const level=select("Mức ưu tiên",[["all","Tất cả mức"],...Object.entries(PRIORITIES).map(([k,v])=>[k,v.label])],
      v=>{filters.level=v;render();});
    const topicSelect=select("Chuyên đề",[["all","Tất cả chuyên đề"],...Object.keys(TOPICS).map(id=>[id,TOPICS[id]])],
      v=>{filters.topic=v;render();});
    const searchWrap=el("label","spp-control spp-search");
    searchWrap.append(el("span","","Tìm kỹ năng"));
    const input=el("input");input.type="search";input.placeholder="Ví dụ: phân số, tam giác...";
    input.addEventListener("input",()=>{filters.query=input.value;render();});
    searchWrap.append(input);controls.append(searchWrap);
    root.append(controls);
    const note=el("p","spp-note","Giữ nguyên thứ tự chuyên đề, đưa kỹ năng cần chú trọng lên trước trong từng chuyên đề. Các tầng ôn thi và mở rộng không ảnh hưởng đến Core.");
    root.append(note);
    const count=el("p","spp-count");count.setAttribute("role","status");
    root.append(count);
    const list=el("div","spp-list");root.append(list);
    function render(){
      const rows=filterRows(catalog.rows,filters);
      count.textContent="Đang hiển thị "+rows.length+"/131 kỹ năng · Không phải xếp hạng năng lực học sinh";
      list.replaceChildren();
      if(!rows.length){list.append(el("p","spp-empty","Không tìm thấy kỹ năng phù hợp. Hãy thử bộ lọc khác."));return;}
      const groups=new Map();
      for(const r of rows){
        const key=filters.topic!=="all"&&r.topics.includes(filters.topic)?filters.topic:r.topic;
        if(!groups.has(key))groups.set(key,[]);
        groups.get(key).push(r);
      }
      for(const [topic,items] of [...groups].sort((a,b)=>a[0].localeCompare(b[0]))){
        const section=el("section","spp-topic");
        section.append(el("h3","",TOPICS[topic]||topic));
        const cards=el("div","spp-cards");
        for(const row of items){
          const card=el("article","spp-card");
          card.dataset.familyId=row.family_id;
          card.dataset.priority=row.priority_code;
          const top=el("div","spp-card-head");
          top.append(el("h4","",row.label_vi),
            el("span","spp-badge spp-"+row.priority.kind,row.priority.label));
          card.append(top);
          card.append(el("p","spp-why",row.priority.explain));
          card.append(el("p","spp-family-id",row.family_id+" · "+row.topics.map(t=>TOPICS[t]||t).join(" · ")));
          const slug=catalog.topicSlugs[row.topic];
          if(slug){
            const actions=el("div","spp-actions");
            for(const [label,path] of [["Xem bài học",""],["Luyện tập","bai-tap/"]]){
              const a=el("a","",label);
              a.href=new URL("../kien-thuc/"+slug+"/"+path,assets).href;
              actions.append(a);
            }
            card.append(actions);
          }
          cards.append(card);
        }
        section.append(cards);
        list.append(section);
      }
    }
    render();
    root.dataset.priorityPreviewReady="true";
  }

  async function boot(){
    for(const root of document.querySelectorAll("[data-skill-priority-preview-r1]")){
      if(root.dataset.priorityPreviewReady)continue;
      root.dataset.priorityPreviewReady="loading";
      try{
        const assets=new URL(root.dataset.assetsBase||"../../assets/",document.baseURI);
        const [matrix,spine]=await Promise.all([
          load(new URL("data/curriculum/skill-priority-matrix-r1.json",assets)),
          load(new URL("data/curriculum/vertical-spine.json",assets))
        ]);
        init(root,validateAndBuild(matrix,spine),assets);
      }catch(error){
        root.dataset.priorityPreviewReady="error";
        root.replaceChildren(el("p","spp-error","Không thể mở bản xem trước: "+error.message+". Bản đồ kỹ năng hiện tại vẫn hoạt động bình thường."));
      }
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);
  else boot();
})();
