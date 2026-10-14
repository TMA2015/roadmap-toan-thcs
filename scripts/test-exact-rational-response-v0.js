#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const {parseExactRational:parse,gradeExactRational:grade}=require("./prototypes/exact-rational-response-v0.cjs");
const checks=[
  ["1/2","2/4"],["-3/4","3/-4"],["0,5","1/2"],["0.5","1/2"],
  ["3/6","0,50"],["-1/-2","1/2"],["2","8/4"],["-0","0/1"],
  ["−3/6","-0.5"],["1,25","5/4"],["12/4","3"],
  ["+0003/6","0.5"],["0,125","1/8"],["0.125","1/8"],
  ["3/9","1/3"],["7/3","2.3333333333333333333333333333333333333333"]
];
for(let i=0;i<checks.length;i++){
  const [a,b]=checks[i];
  const result=grade(a,b);
  assert.equal(result.status,i===checks.length-1?"INCORRECT":"CORRECT",a+" ~ "+b);
}
const invalid={
  "":"EMPTY","abc":"INVALID_FORMAT","1/0":"ZERO_DENOMINATOR",
  "0/0":"ZERO_DENOMINATOR","1 000":"INVALID_FORMAT","1,000.5":"INVALID_FORMAT",
  "1.000":"AMBIGUOUS_SEPARATOR","1,000":"AMBIGUOUS_SEPARATOR",
  "Infinity":"INVALID_FORMAT","NaN":"INVALID_FORMAT","2^3":"INVALID_FORMAT",
  "1 + 1":"INVALID_FORMAT","1//2":"INVALID_FORMAT",
  "2,3,4":"INVALID_FORMAT","2/3/4":"INVALID_FORMAT"
};
for(const [raw,reason] of Object.entries(invalid)){
  assert.equal(parse(raw).reason,reason,raw);
  assert.equal(grade(raw,"1/2").status,"INVALID_INPUT",raw);
}
assert.equal(parse("1234567890123456789012345678901234567890123456789").reason,"OUT_OF_RANGE");
assert.throws(()=>grade("1/2","1/0"),/Invalid reviewed answer/);
assert.deepEqual(grade("2/4","1/2").normalizedResponse,{numerator:"1",denominator:"2"});
console.log("PASS exact rational response prototype: "+checks.length+" equality cases + "+Object.keys(invalid).length+" invalid-format/security cases");
console.log("SCOPE: unit-tested pure prototype only; no student UI, no answer-key exposure, no assessment activation.");
