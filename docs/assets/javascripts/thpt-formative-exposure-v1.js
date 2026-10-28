/* THPT opt-in formative exposure logger; no score/answer keys.
 * Records only when a verified user and private API endpoint are configured.
 * Anonymous/older visits remain UNVERIFIED; never treat absence as unseen.
 */
(function(){
 "use strict";
 // Server de-duplicates by verified learner UID + canonical ID + event.
 // Never cache per-item success in a shared browser across account changes.
 const tracked=new WeakSet();
 const roles=new Set(["SGK_CORE","SGK_PRACTICE","SGK_CHAPTER_APPLICATION",
   "SGK_WRITTEN","TOPIC_PRACTICE"]);
 const events=new Set(["QUESTION_SHOWN","HINT_OPENED","SOLUTION_OPENED"]);
 function settings(){
  const base=window.THPT_EXPOSURE_API_ORIGIN;
  const auth=window.THPT_PROTECTED_AUTH;
  if(typeof base!=="string"||!/^https:\/\/[^/]+$/.test(base)||
     typeof auth?.getToken!=="function")return null;
  return {base,auth};
 }
 async function record(itemId,role,eventKind){
  const cfg=settings();
  if(!cfg||!roles.has(role)||!events.has(eventKind)||
     !/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/.test(itemId||""))return false;
  try{
    const token=await cfg.auth.getToken();
    if(!token)return false;
    const res=await fetch(cfg.base+"/v1/exposure/record",{
      method:"POST",mode:"cors",cache:"no-store",credentials:"omit",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
      body:JSON.stringify({item_id:itemId,role,event_kind:eventKind})
    });
    if(!res.ok)return false;
    const body=await res.json();
    if(body.recorded!==true)return false;
    return true;
  }catch{return false}
 }
 function attach(el){
  if(!el||tracked.has(el))return;
  const id=el.dataset.thptCanonicalItem||el.dataset.thptWrittenCanonical;
  const role=el.dataset.thptExposureRole;
  if(!id||!roles.has(role))return;
  tracked.add(el);
  if(typeof IntersectionObserver==="function"){
    const observer=new IntersectionObserver(entries=>{
      if(entries.some(x=>x.isIntersecting)){
        observer.disconnect();void record(id,role,"QUESTION_SHOWN");
      }
    },{threshold:0.1});
    observer.observe(el);
  }else{ /* Unsupported browser -> do not claim verified exposure. */ }
  el.addEventListener("toggle",event=>{
    const node=event.target;
    if(node?.tagName!=="DETAILS"||!node.open)return;
    const label=node.querySelector("summary")?.textContent||"";
    const kind=/gợi ý|hint/i.test(label)?"HINT_OPENED":"SOLUTION_OPENED";
    void record(el.dataset.thptCanonicalItem||el.dataset.thptWrittenCanonical,
      el.dataset.thptExposureRole,kind);
  },true);
 }
 function scan(root=document){
  if(root.matches?.("[data-thpt-exposure-role]"))attach(root);
  root.querySelectorAll?.("[data-thpt-exposure-role]").forEach(attach);
 }
 function init(){
  scan();
  if(typeof MutationObserver==="function"){
    new MutationObserver(records=>{
      for(const record of records)
        record.addedNodes.forEach(el=>{if(el.nodeType===1)scan(el)});
    }).observe(document.body,{subtree:true,childList:true});
  }
 }
 window.THPTFormativeExposure=Object.freeze({record,scan});
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
 else init();
})();
