"use strict";
/* G10 ChIII public formative only: source Git blob 6320aeaa89bd51c514b07461e01fad5e3aca833f, 16 canonical records, 7 MCQ / 9 written short-response, no Readiness or Mastery. */
(function(root){const contentVersion="THPT-G10-CHIII-R01";
const records=[
  {
    "item_id": "THPT-G10-B05-C01",
    "lesson": "5",
    "role": "CORE",
    "skill": "G10-B05-UNIT_SEMICIRCLE",
    "stem": "Giá trị của \\(\\cos120^\\circ\\) là bao nhiêu?",
    "options": [
      "A. \\(\\tfrac12\\)",
      "B. \\(-\\tfrac12\\)",
      "C. \\(\\tfrac{\\sqrt3}{2}\\)",
      "D. \\(-\\tfrac{\\sqrt3}{2}\\)"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B\nLời giải: \\(\\cos120^\\circ=\\cos(180^\\circ-60^\\circ)=-\\cos60^\\circ=-\\tfrac12\\).",
    "hint": "Viết 120° dưới dạng 180°−60°.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B05-C02",
    "lesson": "5",
    "role": "CORE",
    "skill": "G10-B05-SIGN_DOMAIN",
    "stem": "Trong đoạn từ 0° đến 180°, biểu thức nào sau đây **không xác định**?",
    "options": [
      "A. \\(\\sin90^\\circ\\)",
      "B. \\(\\cos180^\\circ\\)",
      "C. \\(\\tan90^\\circ\\)",
      "D. \\(\\tan180^\\circ\\)"
    ],
    "answerKey": "C",
    "solution": "Đáp án: C\nLời giải: Tại 90°, cos=0 nên tan không xác định. Tan180°=0 vì cos180°=−1 khác 0.",
    "hint": "Tan là tỉ số sin/cos; khi nào mẫu bằng 0?",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B05-P01",
    "lesson": "5",
    "role": "PRACTICE",
    "skill": "G10-B05-SUPPLEMENTARY",
    "stem": "Cặp giá trị \\((\\sin150^\\circ,\\cos150^\\circ)\\) bằng bao nhiêu?",
    "options": [
      "A. \\((\\tfrac12,\\tfrac{\\sqrt3}{2})\\)",
      "B. \\((\\tfrac12,-\\tfrac{\\sqrt3}{2})\\)",
      "C. \\((-\\tfrac12,-\\tfrac{\\sqrt3}{2})\\)",
      "D. \\((\\tfrac{\\sqrt3}{2},-\\tfrac12)\\)"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B\nLời giải: \\(\\sin150^\\circ=\\sin30^\\circ=\\tfrac12\\); \\(\\cos150^\\circ=-\\cos30^\\circ=-\\tfrac{\\sqrt3}{2}\\).",
    "hint": "Hai góc 150° và 30° bù nhau.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B05-P02",
    "lesson": "5",
    "role": "PRACTICE",
    "skill": "G10-B05-IDENTITIES",
    "stem": "Cho góc tù α với \\(\\cos\\alpha=-3/5\\). Tính \\(\\sin\\alpha\\) và \\(\\tan\\alpha\\).",
    "solution": "Đáp án: \\(\\sin\\alpha=4/5,\\ \\tan\\alpha=-4/3\\).\nLời giải: \\(\\sin^2\\alpha=1-9/25=16/25\\). Góc tù có sin dương nên sin=4/5; tan=(4/5)/(−3/5)=−4/3.",
    "hint": "Từ sin²+cos²=1, chọn dấu sin theo miền 90°<α<180°.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B05-P03",
    "lesson": "5",
    "role": "PRACTICE",
    "skill": "G10-B05-SPECIAL_ANGLES",
    "stem": "Tính chính xác \\(T=\\sin135^\\circ+\\cos120^\\circ\\).",
    "solution": "Đáp án: \\(T=(\\sqrt2-1)/2\\).\nLời giải: \\(\\sin135^\\circ=\\sin45^\\circ=\\sqrt2/2\\), \\(\\cos120^\\circ=-1/2\\). Cộng lại được \\((\\sqrt2-1)/2\\).",
    "hint": "Đưa từng góc về góc bù của góc nhọn.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B05-P04",
    "lesson": "5",
    "role": "PRACTICE",
    "skill": "G10-B05-IDENTITIES",
    "stem": "Phát biểu nào đúng với **mọi** \\(0^\\circ\\le\\alpha\\le180^\\circ\\)?",
    "options": [
      "A. \\(\\tan\\alpha\\cdot\\cot\\alpha=1\\)",
      "B. \\(\\sin^2\\alpha+\\cos^2\\alpha=1\\)",
      "C. \\(\\cos\\alpha\\ge0\\)",
      "D. \\(\\cot\\alpha\\) xác định với mọi α"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B\nLời giải: \\(\\sin^2\\alpha+\\cos^2\\alpha=1\\) đúng trên toàn đoạn. Câu A không có nghĩa tại 0°,90°,180°; cos âm với góc tù; cot0° và cot180° không xác định.",
    "hint": "Tìm công thức nào không có điều kiện mẫu khác 0.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B05-P05",
    "lesson": "5",
    "role": "PRACTICE",
    "skill": "G10-B05-SUPPLEMENTARY",
    "stem": "Trong \\([0^\\circ,180^\\circ]\\), có những góc nào thỏa \\(\\sin\\alpha=\\sqrt3/2\\)?",
    "options": [
      "A. Chỉ 60°",
      "B. Chỉ 120°",
      "C. 60° và 120°",
      "D. 30° và 150°"
    ],
    "answerKey": "C",
    "solution": "Đáp án: C\nLời giải: \\(\\sin60^\\circ=\\sqrt3/2\\); góc bù 120° có cùng sin. Trong đoạn đã cho chỉ có hai góc đó.",
    "hint": "Sin hai góc bù bằng nhau.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B05-P06",
    "lesson": "5",
    "role": "PRACTICE",
    "skill": "G10-B05-SIGN_DOMAIN",
    "stem": "Góc tù α thỏa \\(\\tan\\alpha=-2\\). Tính \\(\\sin\\alpha,\\cos\\alpha,\\cot\\alpha\\).",
    "solution": "Đáp án: \\(\\sin\\alpha=2/\\sqrt5,\\ \\cos\\alpha=-1/\\sqrt5,\\ \\cot\\alpha=-1/2\\).\nLời giải: \\(\\cos^2\\alpha=1/5\\); góc tù nên cos=−1/√5. Sin=tan·cos=2/√5; cot=1/tan=−1/2.",
    "hint": "Dùng 1+tan²=1/cos²; dấu cos của góc tù âm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B06-C01",
    "lesson": "6",
    "role": "CORE",
    "skill": "G10-B06-COSINE_RULE",
    "stem": "Trong tam giác ABC có \\(b=5,c=7,A=60^\\circ\\). Tính \\(a\\).",
    "options": [
      "A. \\(\\sqrt{39}\\)",
      "B. \\(\\sqrt{74}\\)",
      "C. \\(\\sqrt{109}\\)",
      "D. \\(\\sqrt{14}\\)"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A\nLời giải: \\(a^2=25+49-2\\cdot5\\cdot7\\cdot\\tfrac12=39\\), a=√39.",
    "hint": "a đối diện A, dùng a²=b²+c²−2bc cos A.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B06-C02",
    "lesson": "6",
    "role": "CORE",
    "skill": "G10-B06-AREA_SIN",
    "stem": "Tam giác có \\(b=8,c=5,A=30^\\circ\\). Diện tích \\(S\\) bằng bao nhiêu?",
    "options": [
      "A. 20",
      "B. 10",
      "C. 40",
      "D. 5"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B\nLời giải: \\(S=\\tfrac12\\cdot8\\cdot5\\cdot\\sin30^\\circ=10\\).",
    "hint": "Diện tích qua hai cạnh b,c và góc A xen giữa.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B06-P01",
    "lesson": "6",
    "role": "PRACTICE",
    "skill": "G10-B06-SINE_RULE",
    "stem": "Cho tam giác ABC có \\(A=30^\\circ,B=60^\\circ,a=4\\). Tính \\(b\\) và \\(R\\).",
    "solution": "Đáp án: \\(b=4\\sqrt3,\\ R=4\\).\nLời giải: \\(b=4(\\sqrt3/2)/(1/2)=4\\sqrt3\\); \\(2R=4/(1/2)=8\\), R=4.",
    "hint": "Theo định lí sin b/sinB=a/sinA=2R.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B06-P02",
    "lesson": "6",
    "role": "PRACTICE",
    "skill": "G10-B06-HERON",
    "stem": "Tam giác cân có các cạnh 5,5,6. Tính \\(S\\) và bán kính nội tiếp \\(r\\).",
    "solution": "Đáp án: \\(S=12,\\ r=3/2\\).\nLời giải: \\(p=8\\); \\(S=\\sqrt{8\\cdot3\\cdot3\\cdot2}=12\\); \\(r=S/p=3/2\\).",
    "hint": "p bằng nửa chu vi; dùng Heron và S=pr.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B06-P03",
    "lesson": "6",
    "role": "PRACTICE",
    "skill": "G10-B06-SINE_RULE",
    "stem": "Tam giác ABC có \\(A=30^\\circ,B=60^\\circ,c=8\\). Tính \\(a,b\\).",
    "solution": "Đáp án: \\(a=4,\\ b=4\\sqrt3\\).\nLời giải: \\(C=90^\\circ\\), c/sinC=8. Vậy \\(a=8\\sin30^\\circ=4\\), \\(b=8\\sin60^\\circ=4\\sqrt3\\).",
    "hint": "Tính C trước: C=90°, c là cạnh đối diện 90°.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B06-P04",
    "lesson": "6",
    "role": "PRACTICE",
    "skill": "G10-B06-HERON",
    "stem": "Tam giác có ba cạnh \\(a=7,b=8,c=9\\). Tính \\(\\cos C\\) và diện tích \\(S\\).",
    "solution": "Đáp án: \\(\\cos C=2/7,\\ S=12\\sqrt5\\).\nLời giải: \\(\\cos C=(a^2+b^2-c^2)/(2ab)=(49+64-81)/(112)=2/7\\). p=12; \\(S=\\sqrt{12\\cdot5\\cdot4\\cdot3}=12\\sqrt5\\).",
    "hint": "Định lí côsin cho góc C; dùng Heron với p=12.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B06-P05",
    "lesson": "6",
    "role": "PRACTICE",
    "skill": "G10-B06-APPLICATION",
    "stem": "Đo khoảng cách qua một khu vực khó tiếp cận: người khảo sát đứng ở A và B cách nhau 100 m, ngắm điểm C sao cho \\(\\angle A=30^\\circ,\\angle B=60^\\circ\\) trong tam giác ABC. Tính BC và AC.",
    "solution": "Đáp án: \\(BC=50\\text{ m},\\ AC=50\\sqrt3\\text{ m}\\).\nLời giải: \\(C=90^\\circ\\), \\(AB=100\\) là cạnh huyền. \\(BC=AB\\sin A=50\\) m, \\(AC=AB\\sin B=50\\sqrt3\\) m.",
    "hint": "Góc C bằng bao nhiêu? AB đối diện C.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B06-P06",
    "lesson": "6",
    "role": "PRACTICE",
    "skill": "G10-B06-COSINE_RULE",
    "stem": "Tam giác ABC có \\(a=\\sqrt{61},b=5,c=6\\). Hãy xác định góc A và diện tích \\(S\\).",
    "solution": "Đáp án: \\(A=90^\\circ,\\ S=15\\).\nLời giải: \\(a^2=61=b^2+c^2=25+36\\) nên \\(\\cos A=0\\), A=90°. \\(S=\\tfrac12 bc=15\\).",
    "hint": "So sánh a² với b²+c².",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  }
];
const validate=()=>({valid:records.length===16&&new Set(records.map(x=>x.item_id)).size===16&&records.every(x=>/^THPT-G10-B0[56]-[CP]\d{2}$/.test(x.item_id)&&x.exposure==="FORMATIVE_ONLY"&&(!x.options||(x.options.length===4&&/^[ABCD]$/.test(x.answerKey))))});
const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(Number(lesson))&&(role==="core"?x.role==="CORE":x.role==="PRACTICE"));
root.THPT_CHIII_REVIEWED_FORMATIVE=Object.freeze({contentVersion,records:Object.freeze(records.map(x=>Object.freeze({...x,...(x.options?{options:Object.freeze(x.options)}:{})}))),validate,forLesson});
})(window);
