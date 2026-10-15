(() => {
  "use strict";
  // Formative Practice ONLY. Deterministic exact math, never Core Readiness.
  // Node export for no-network unit tests; same module is loaded before Practice Engine.
  const gcd=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b){const r=a%b;a=b;b=r;}return a;};
  const parse=(raw)=>{
    if(typeof raw!=="string"||raw.length>120)return {ok:false,reason:"INVALID_INPUT"};
    const v=raw.normalize("NFKC").replace(/\u2212/g,"-").trim();
    if(!v)return {ok:false,reason:"EMPTY"};
    const ratio=v.match(/^([+-]?\d+)\s*\/\s*([+-]?\d+)$/);
    let n,d;
    if(ratio){
      if(ratio[1].length>50||ratio[2].length>50)return {ok:false,reason:"INVALID_INPUT"};
      n=BigInt(ratio[1]);d=BigInt(ratio[2]);
    }else{
      const decimal=v.match(/^([+-]?)(\d+)(?:[.,](\d+))?$/);
      if(!decimal||decimal[2].length+(decimal[3]||"").length>48)return {ok:false,reason:"INVALID_INPUT"};
      const digits=decimal[3]||"";
      if(decimal[2]!=="0"&&digits==="000")return {ok:false,reason:"AMBIGUOUS_SEPARATOR"};
      n=BigInt(decimal[1]+decimal[2]+digits);d=10n**BigInt(digits.length);
    }
    if(d===0n)return {ok:false,reason:"ZERO_DENOMINATOR"};
    if(d<0n){n=-n;d=-d;}
    const g=gcd(n,d);
    return {ok:true,n:(n/g).toString(),d:(d/g).toString()};
  };
  const supported=new Set(["numeric","rational","numeric_fields"]);
  const validate=(q)=>{
    if(!q||!supported.has(q.response_type)||!q.answer_contract)return false;
    if(q.response_type==="numeric_fields"){
      const fields=q.answer_contract.fields;
      if(!Array.isArray(fields)||fields.length<2||fields.length>6||
         !fields.every(f=>typeof f.label==="string"&&f.label.trim()&&parse(f.expected).ok))return false;
      const view=q.answer_contract.table_view;
      if(view===undefined)return true;
      return view&&view.kind==="frequency"&&
        typeof view.value_header==="string"&&Boolean(view.value_header.trim())&&
        typeof view.frequency_header==="string"&&Boolean(view.frequency_header.trim())&&
        Array.isArray(view.row_values)&&view.row_values.length===fields.length&&
        view.row_values.every(s=>typeof s==="string"&&Boolean(s.trim()));
    }
    return typeof q.answer_contract.expected==="string"&&parse(q.answer_contract.expected).ok;
  };
  const grade=(question,raw)=>{
    if(!validate(question))return {status:"INVALID_CONTRACT"};
    const fields=question.response_type==="numeric_fields"?question.answer_contract.fields:[{label:"Kết quả",expected:question.answer_contract.expected}];
    if(!Array.isArray(raw)||raw.length!==fields.length)return {status:"INCOMPLETE"};
    const parsed=raw.map(parse);
    if(parsed.some(x=>x.reason==="EMPTY"))return {status:"INCOMPLETE"};
    if(parsed.some(x=>!x.ok))return {status:"INVALID_INPUT",reason:parsed.find(x=>!x.ok)?.reason};
    const expected=fields.map(x=>parse(x.expected));
    const fieldCorrect=parsed.map((v,i)=>v.n===expected[i].n&&v.d===expected[i].d);
    return {status:fieldCorrect.every(Boolean)?"CORRECT":"INCORRECT",
      field_correct:fieldCorrect,normalized:parsed.map(x=>x.n+(x.d==="1"?"":"/"+x.d))};
  };
  const saveAttempt=(record)=>{
    const KEY="toan-thcs-practice-rich-attempts-v1";
    try{
      const old=localStorage.getItem(KEY);
      let data={schema:"rich-practice-attempts-v1",attempts:[]};
      if(old!==null){
        data=JSON.parse(old);
        if(!data||data.schema!=="rich-practice-attempts-v1"||!Array.isArray(data.attempts))
          return {ok:false,reason:"INCOMPATIBLE_PREVIOUS_DATA"};
      }
      data.attempts.push(record);
      // Never silently truncate previous student attempts; fail safely on storage quota.
      localStorage.setItem(KEY,JSON.stringify(data));
      return {ok:true};
    }catch(_){return {ok:false,reason:"WRITE_FAILED"};}
  };
  const api=Object.freeze({parse,validate,grade,saveAttempt});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof window!=="undefined")window.RoadmapRichPracticeAnswerV1=api;
})();
