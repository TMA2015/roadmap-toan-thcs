// Secret-backed Gemini tutor gateway. No secrets in GitHub Pages assets.
const MODES=new Set(["HINT","STEP_BY_STEP","FULL_SOLUTION","TEACH_FROM_START"]);
const ACTIVITIES=new Set(["learning","practice","self_check","timed_assessment"]);
const MAX_BODY=8500;
const json=(body,status=200,headers={})=>new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...headers}});
const assessment=(activity,submitted)=>["self_check","timed_assessment"].includes(activity)&&!submitted;
const clip=(value,n)=>String(value||"").slice(0,n);
export default {
 async fetch(request,env){
  const origin=request.headers.get("Origin"),allowed=env.ALLOWED_ORIGIN||"https://tma2015.github.io";
  const cors=origin===allowed?{"access-control-allow-origin":allowed,"access-control-allow-methods":"POST, OPTIONS","access-control-allow-headers":"content-type","vary":"Origin"}:{};
  if(request.method==="OPTIONS")return origin===allowed?new Response(null,{status:204,headers:cors}):json({error:"origin_denied"},403);
  if(new URL(request.url).pathname!=="/v1/tutor"||request.method!=="POST")return json({error:"not_found"},404,cors);
  if(origin!==allowed)return json({error:"origin_denied"},403);
  if(!env.GEMINI_API_KEY||!env.TURNSTILE_SECRET||!env.USER_RATE_LIMITER||!env.SITE_RATE_LIMITER)return json({error:"not_configured"},503,cors);
  if(!request.headers.get("content-type")?.toLowerCase().startsWith("application/json"))return json({error:"content_type"},415,cors);
  if(Number(request.headers.get("content-length")||0)>MAX_BODY)return json({error:"too_large"},413,cors);
  const raw=await request.text();if(raw.length>MAX_BODY)return json({error:"too_large"},413,cors);
  let data;try{data=JSON.parse(raw)}catch{return json({error:"invalid_json"},400,cors)}
  const {mode,activity,submitted,question,turnstileToken}=data||{};
  if(!MODES.has(mode)||!ACTIVITIES.has(activity)||typeof submitted!=="boolean"||!question||typeof question.text!=="string"||!question.text.trim()||question.text.length>1500||
    !Array.isArray(question.options)||question.options.length<2||question.options.length>6||question.options.some(x=>typeof x!=="string"||x.length>300)||
    !Number.isInteger(question.answer_index)||question.answer_index<0||question.answer_index>=question.options.length||
    typeof question.explanation!=="string"||question.explanation.length>2500||
    (question.solution_steps!==undefined&&(!Array.isArray(question.solution_steps)||question.solution_steps.length>12||question.solution_steps.some(x=>typeof x!=="string"||x.length>500)))||
    typeof turnstileToken!=="string"||!turnstileToken||turnstileToken.length>2048)return json({error:"invalid_request"},400,cors);
  if(assessment(activity,submitted)&&mode!=="HINT")return json({error:"assessment_locked"},403,cors);
  const ip=request.headers.get("CF-Connecting-IP")||"unknown";
  const [user,site]=await Promise.all([env.USER_RATE_LIMITER.limit({key:ip}),env.SITE_RATE_LIMITER.limit({key:"all-users"})]);
  if(!user.success||!site.success)return json({error:"rate_limited"},429,cors);
  let verified;
  try{
   const response=await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({secret:env.TURNSTILE_SECRET,response:turnstileToken,remoteip:ip})});
   verified=await response.json();
  }catch{return json({error:"verification_unavailable"},503,cors)}
  if(!verified?.success||verified.hostname!==(env.TURNSTILE_HOSTNAME||"tma2015.github.io")||verified.action!=="tutor")return json({error:"verification_failed"},403,cors);
  const qa={question:clip(question.text,1500),options:question.options.map(x=>clip(x,300))};
  if(mode==="FULL_SOLUTION"&&!assessment(activity,submitted))qa.reference={answer_index:question.answer_index,explanation:clip(question.explanation,2500),steps:(question.solution_steps||[]).map(x=>clip(x,500))};
  const system=[
   "Bạn là gia sư Toán THCS, trả lời tiếng Việt, giúp học sinh hiểu bản chất. Chỉ xử lý câu Toán đã cho, không xin dữ liệu cá nhân hay đoán năng lực.",
   "Giải đúng các phép tính, điều kiện, lý do áp dụng định lý và kiểm tra nghiệm. Nếu đáp án tham chiếu có dấu hiệu sai, báo rõ thay vì lặp lại.",
   mode==="HINT"?"Chỉ một gợi ý mở đầu, không tiết lộ kết quả.":mode==="STEP_BY_STEP"?"Hướng dẫn bước tiếp với lý do, chưa nêu kết quả cuối.":mode==="FULL_SOLUTION"?"Trình bày đầy đủ từng bước, kết quả và kiểm tra.":"Giảng lại kiến thức nền bằng ví dụ tương tự rồi hướng dẫn áp dụng.",
   "Chỉ trả văn bản có thể chứa LaTeX. Không trả HTML và không khẳng định đã kiểm duyệt độc lập."
  ].join("\n");
  const model=env.GEMINI_MODEL||"gemini-3.8-flash";if(!/^[a-z0-9][a-z0-9.-]{2,65}$/.test(model))return json({error:"invalid_model"},503,cors);
  let response,result;
  try{
   response=await fetch("https://generativelanguage.googleapis.com/v1beta/models/"+encodeURIComponent(model)+":generateContent",{
    method:"POST",headers:{"content-type":"application/json","x-goog-api-key":env.GEMINI_API_KEY},
    body:JSON.stringify({systemInstruction:{parts:[{text:system}]},contents:[{role:"user",parts:[{text:JSON.stringify(qa)}]}],generationConfig:{temperature:0.2,maxOutputTokens:2500}})
   });
   result=await response.json();
  }catch{return json({error:"provider_unavailable"},502,cors)}
  if(!response.ok)return json({error:response.status===429?"quota_exceeded":"provider_error"},response.status===429?429:502,cors);
  const message=(result?.candidates?.[0]?.content?.parts||[]).map(x=>x.text||"").join("\n").trim();
  if(!message)return json({error:"empty_reply"},502,cors);
  return json({message:message.slice(0,12000),provider:"gemini",mode,model,source:"ai_generated_not_independently_reviewed"},200,cors);
 }
};
