"use strict";
/*
  RESEARCH ONLY: deterministic response contracts for NotebookLM W1 R2a.
  Not bundled into learner assets, not part of Practice / Core Readiness.
  No scores, answer-key imports, localStorage, or historic attempt changes.
*/
const {parseExactRational}=require("./exact-rational-response-v0.cjs");
const GIVEN=[3,4,15,20];
const COUNT=[1,2,3,4,2];
const DATA=[5,6,6,7,7,7,8,8,8,8,9,9];

function parseTile(v){
  if(typeof v!=="string" && typeof v!=="number")return null;
  const s=String(v).trim();
  if(!/^[+]?[0-9]{1,3}$/.test(s))return null;
  return Number(s);
}
function gradeRatioFourTiles(raw){
  if(!Array.isArray(raw)||raw.length!==4)return {status:"INCOMPLETE",reason:"FOUR_SLOTS_REQUIRED"};
  const values=raw.map(parseTile);
  if(values.some(x=>x===null))return {status:"INVALID_INPUT",reason:"TILES_MUST_BE_WHOLE_NUMBERS"};
  const sorted=values.slice().sort((a,b)=>a-b);
  if(!sorted.every((x,i)=>x===GIVEN[i]))
    return {status:"INVALID_SELECTION",reason:"USE_EACH_OF_3_4_15_20_EXACTLY_ONCE"};
  const [a,b,c,d]=values;
  if(b===0||d===0)return {status:"INVALID_INPUT",reason:"ZERO_DENOMINATOR"};
  return {status:a*d===b*c?"CORRECT":"INCORRECT"};
}
function signedInteger(raw){
  if(typeof raw!=="string"&&typeof raw!=="number")return {ok:false};
  const s=String(raw).trim();
  if(!/^[+-]?\d{1,12}$/.test(s))return {ok:false};
  return {ok:true,value:BigInt(s)};
}
function gradePolynomialProperties(fields){
  if(!Array.isArray(fields)||fields.length!==3)return {status:"INCOMPLETE",reason:"THREE_FIELDS_REQUIRED"};
  if(fields.some(x=>x===null||x===undefined||String(x).trim()===""))return {status:"INCOMPLETE",reason:"EMPTY_FIELD"};
  const values=fields.map(signedInteger);
  if(values.some(x=>!x.ok))return {status:"INVALID_INPUT",reason:"INTEGER_REQUIRED"};
  const expected=[3n,4n,7n];
  return {status:values.every((x,i)=>x.value===expected[i])?"CORRECT":"INCORRECT",field_correct:values.map((x,i)=>x.value===expected[i])};
}
function parsePercent(raw){
  if(typeof raw!=="string" && typeof raw!=="number")return {ok:false,reason:"INVALID_INPUT"};
  const s=String(raw).trim();
  const m=s.match(/^([+-]?\d+(?:[.,]\d+)?)\s*%?$/);
  if(!m)return {ok:false,reason:"INVALID_FORMAT"};
  return parseExactRational(m[1]);
}
// Percent in 0.1 percentage-point units. Half-up for nonnegative frequencies,
// using exact integer arithmetic (not a tolerance around unrounded values).
function roundedTenths(frequency,total){
  if(!Number.isSafeInteger(frequency)||!Number.isSafeInteger(total)||frequency<0||total<=0)throw Error("INVALID_FREQUENCY_FIXTURE");
  return Math.floor((2*frequency*1000+total)/(2*total));
}
function gradeFrequencyTable({frequencies,percentages}={}){
  // Authored source: create BOTH frequency and relative-frequency columns.
  // R2a lists 5 percentage blanks but does not explicitly resolve 5 frequency blanks;
  // this 10-field contract remains an unapproved research candidate.
  if(!Array.isArray(frequencies)||!Array.isArray(percentages)||
     frequencies.length!==5||percentages.length!==5)
    return {status:"INCOMPLETE",reason:"FIVE_FREQUENCY_AND_FIVE_PERCENTAGE_FIELDS_REQUIRED"};
  if([...frequencies,...percentages].some(x=>x===null||x===undefined||String(x).trim()===""))
    return {status:"INCOMPLETE",reason:"EMPTY_FIELD"};
  const freq=frequencies.map(signedInteger),pct=percentages.map(parsePercent);
  if(freq.some(x=>!x.ok)||pct.some(x=>!x.ok))return {status:"INVALID_INPUT",reason:"BAD_NUMERIC_FIELD"};
  const freqCorrect=freq.map((x,i)=>x.value===BigInt(COUNT[i]));
  const total=DATA.length;
  const percentCorrect=pct.map((x,i)=>{
    const actual=BigInt(x.numerator)*10n;
    const expected=BigInt(roundedTenths(COUNT[i],total))*BigInt(x.denominator);
    return actual===expected;
  });
  return {status:freqCorrect.every(Boolean)&&percentCorrect.every(Boolean)?"CORRECT":"INCORRECT",
          frequency_correct:freqCorrect,percentage_correct:percentCorrect};
}
module.exports={gradeRatioFourTiles,gradePolynomialProperties,gradeFrequencyTable,roundedTenths};
