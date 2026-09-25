(() => {
"use strict";
// Optional Gemini adapter. This public file never contains private API credentials.
const src=document.currentScript?.src||"";
const configUrl=src?new URL("../data/tutor-provider-config.json",src).href:null;
let promise=null,scriptPromise=null;
const load=()=>promise||(promise=(async()=>{
 if(!configUrl)return null;
 try{
  const r=await fetch(configUrl,{cache:"no-store"});
  const c=await r.json();
  if(!r.ok||c.enabled!==true||typeof c.endpoint!=="string"||typeof c.turnstileSiteKey!=="string")return null;
  const url=new URL(c.endpoint);
  if(url.protocol!=="https:"||url.pathname!=="/v1/tutor"||url.search||url.hash)return null;
  if(!/^[A-Za-z0-9_-]{10,128}$/.test(c.turnstileSiteKey))return null;
  return {endpoint:url.href,sitekey:c.turnstileSiteKey};
 }catch{return null}
})());
const loadWidget=()=>{
 if(window.turnstile?.render)return Promise.resolve(window.turnstile);
 if(scriptPromise)return scriptPromise;
 scriptPromise=new Promise((resolve,reject)=>{
  const script=document.createElement("script");
  script.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async=true;script.onload=()=>window.turnstile?.render?resolve(window.turnstile):reject(new Error("Turnstile không sẵn sàng"));
  script.onerror=()=>reject(new Error("Không tải được xác minh Turnstile"));
  document.head.appendChild(script);
 });
 return scriptPromise;
};
const button=(label,handler)=>{
 const b=document.createElement("button");b.type="button";b.className="practice-btn practice-btn-secondary";
 b.textContent=label;b.addEventListener("click",handler);return b;
};
const renderText=(parent,text,kind)=>{
 const p=document.createElement("div");p.className=kind||"gemini-online-note";p.textContent=text;parent.appendChild(p);return p;
};
const open=async({panel,question,activity="practice",submitted=false,onReveal=()=>{},onHint=()=>{}})=>{
 const config=await load();
 if(!config){panel.hidden=false;panel.textContent="Gemini chưa được chủ trang cấu hình. Lời giải offline vẫn sử dụng bình thường.";return}
 if(!question||!Array.isArray(question.options)||!Number.isInteger(question.answer))return;
 panel.hidden=false;panel.innerHTML="";
 const heading=document.createElement("strong");heading.textContent="✨ Gia sư Gemini · trực tuyến";
 panel.appendChild(heading);
 renderText(panel,"Chỉ gửi nội dung bài toán và chế độ hỗ trợ. Không gửi họ tên, hồ sơ học hay nhật ký làm bài. Lời giải AI có thể sai, hãy đối chiếu kiến thức đã học.");
 const actions=document.createElement("div");actions.className="practice-tutor-choices";panel.appendChild(actions);
 const modes=[["HINT","💡 Gợi ý nhỏ"],["STEP_BY_STEP","🪜 Hướng dẫn từng bước"],["FULL_SOLUTION","📖 Giải mẫu đầy đủ"],["TEACH_FROM_START","🎓 Giảng từ đầu"]];
 const select=mode=>{
  const existing=panel.querySelector(".gemini-online-flow");if(existing)existing.remove();
  const wrap=document.createElement("div");wrap.className="gemini-online-flow";panel.appendChild(wrap);
  if(["self_check","timed_assessment"].includes(activity)&&!submitted&&mode!=="HINT"){
   renderText(wrap,"Không tiết lộ lời giải khi bài tự kiểm tra chưa được nộp.");return;
  }
  const verify=()=>{
   wrap.innerHTML="";
   renderText(wrap,"Vui lòng hoàn thành xác minh để gửi yêu cầu. Mỗi lượt hỏi cần một mã xác minh mới.");
   const slot=document.createElement("div");slot.className="gemini-turnstile";wrap.appendChild(slot);
   const status=renderText(wrap,"Đang tải xác minh...");
   loadWidget().then(ts=>ts.render(slot,{sitekey:config.sitekey,action:"tutor",callback:async token=>{
    status.textContent="Đang hỏi Gemini...";
    const body={mode,activity,submitted:Boolean(submitted),turnstileToken:token,question:{
     text:String(question.question||"").slice(0,1500),
     options:question.options.map(x=>String(x).slice(0,300)),
     answer_index:question.answer,
     explanation:String(question.explanation||"").slice(0,2500),
     solution_steps:Array.isArray(question.solution_steps)?question.solution_steps.slice(0,12).map(x=>String(x).slice(0,500)):[]
    }};
    try{
     const r=await fetch(config.endpoint,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)});
     const data=await r.json();
     if(!r.ok)throw new Error(({rate_limited:"Đã tới giới hạn lượt hỏi. Hãy thử lại sau.",quota_exceeded:"Tài khoản Gemini đã hết hạn mức.",verification_failed:"Xác minh hết hạn hoặc không hợp lệ; thử lượt mới.",provider_unavailable:"Gemini tạm thời không phản hồi."})[data.error]||"Không thể nhận câu trả lời; vui lòng thử lại.");
     if(typeof data.message!=="string"||!data.message.trim()||data.provider!=="gemini"||data.mode!==mode)throw new Error("Phản hồi từ máy chủ không hợp lệ.");
     if(!submitted){
      if(mode==="FULL_SOLUTION")onReveal();
      else onHint();
     }
     wrap.innerHTML="";
     const label=document.createElement("strong");label.textContent="✨ Gemini · nội dung AI tạo, chưa phản biện độc lập";
     const output=renderText(wrap,data.message,"gemini-online-response");
     wrap.prepend(label);
     window.MathJax?.typesetPromise?.([output]).catch(()=>{});
     renderText(wrap,"Sau khi xem lời giải, em hãy tự làm một câu tương tự không nhìn hướng dẫn để kiểm chứng đã hiểu.");
    }catch(e){status.textContent=e.message||"Không kết nối được Gemini.";wrap.appendChild(button("Thử lượt mới",()=>select(mode)))}
   } })).then(()=>{status.textContent="Chờ xác minh..."}).catch(e=>{status.textContent=e.message});
  };
  if(mode==="FULL_SOLUTION"&&!submitted){
   renderText(wrap,"Mở lời giải trước khi trả lời sẽ ghi lượt làm này là có trợ giúp; không tính thành thạo độc lập.");
   wrap.appendChild(button("Tôi đồng ý xem lời giải",verify));
  }else verify();
 };
 modes.forEach(([mode,label])=>actions.appendChild(button(label,()=>select(mode))));
};
window.RoadmapGemini=Object.freeze({available:async()=>Boolean(await load()),open});
})();