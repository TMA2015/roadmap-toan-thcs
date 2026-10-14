"use strict";
/*
  Experimental, source-independent exact rational response engine.
  RESEARCH_ONLY / NOT imported into production by any site route.
  Pure grading. Node test fixture validates accepted forms; no scoring stores.
  Future rollout requires reviewed items, localized guidance, accessible UI and owner gate.
*/
const MAX_DIGITS=48;
const gcd=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b){const r=a%b;a=b;b=r;}return a;};
const canonical=(n,d)=>{
  if(d===0n)return {ok:false,reason:"ZERO_DENOMINATOR"};
  if(d<0n){n=-n;d=-d;}
  const g=gcd(n,d);
  return {ok:true,numerator:(n/g).toString(),denominator:(d/g).toString()};
};
function parseExactRational(raw){
  if(typeof raw!=="string" || raw.length>120)return {ok:false,reason:"INVALID_LENGTH"};
  const value=raw.normalize("NFKC").replace(/\u2212/g,"-").trim();
  if(!value)return {ok:false,reason:"EMPTY"};
  const f=value.match(/^([+-]?\d+)\s*\/\s*([+-]?\d+)$/);
  if(f){
    if(f[1].replace(/[+-]/g,"").length>MAX_DIGITS || f[2].replace(/[+-]/g,"").length>MAX_DIGITS)
      return {ok:false,reason:"OUT_OF_RANGE"};
    return canonical(BigInt(f[1]),BigInt(f[2]));
  }
  const dec=value.match(/^([+-]?)(\d+)(?:([.,])(\d+))?$/);
  if(!dec)return {ok:false,reason:"INVALID_FORMAT"};
  const digits=dec[2].length+(dec[4]?.length||0);
  if(digits>MAX_DIGITS)return {ok:false,reason:"OUT_OF_RANGE"};
  const sign=dec[1]==="-"?-1n:1n;
  const integer=dec[2],part=dec[4]||"";
  // Locale-neutral auto mode must not pretend "1.000" means 1000 or 1.
  if(integer!=="0" && /^0*[1-9]\d*$/.test(integer) && part.length===3 && part==="000")
    return {ok:false,reason:"AMBIGUOUS_SEPARATOR"};
  const n=sign*BigInt(integer+part);
  const d=10n**BigInt(part.length);
  return canonical(n,d);
}
function gradeExactRational(response,reviewedExpected){
  const actual=parseExactRational(response),expected=parseExactRational(reviewedExpected);
  if(!expected.ok)throw Error("Invalid reviewed answer fixture");
  if(!actual.ok)return {status:"INVALID_INPUT",reason:actual.reason};
  return {status:(actual.numerator===expected.numerator && actual.denominator===expected.denominator)?"CORRECT":"INCORRECT",
    normalizedResponse:{numerator:actual.numerator,denominator:actual.denominator}};
}
module.exports={parseExactRational,gradeExactRational};
