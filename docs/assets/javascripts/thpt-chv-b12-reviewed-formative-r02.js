"use strict";
/* G10 ChV B12 PUBLIC_FORMATIVE_ONLY: 8 original independently reviewed R01 canonical items.
   All stem, options, keys, hints and worked solutions locked to Git blob 49502fe39cf0a67f6a3e973a77f94164150637a7.
   D5/D6 corrected separately in reviewed R02 overlays; no Chapter/Topic Readiness or Mastery. */
(function(root){
 const contentVersion="THPT-G10-CHV-B12-R01-ITEMS-R02-OVERLAYS";
 const records=[
  {
    "item_id": "THPT-G10-B12-C01",
    "lesson": "12",
    "role": "CORE",
    "skill": "G10-B12-ABS_ERROR",
    "stem": "Biết số đúng $\\bar a=14{,}37$, số gần đúng $a=14{,}4$. Sai số tuyệt đối là bao nhiêu?",
    "options": [
      "A. $0{,}3$",
      "B. $0{,}03$",
      "C. $0{,}003$",
      "D. $14{,}37$"
    ],
    "answerKey": "B",
    "solution": "Đáp án: $0{,}03$\nLời giải: $\\Delta=|14{,}37-14{,}4|=0{,}03$.",
    "hint": "Lấy trị tuyệt đối hiệu số đúng và số gần đúng.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B12-C02",
    "lesson": "12",
    "role": "CORE",
    "skill": "G10-B12-ABS_ERROR",
    "stem": "Kết quả đo $12{,}3\\,\\mathrm{cm}$ có độ chính xác $d=0{,}2\\,\\mathrm{cm}$. Kết luận chắc chắn nào đúng?",
    "options": [
      "A. $\\bar a=12{,}5$",
      "B. $\\Delta=0{,}2$ chắc chắn",
      "C. $\\bar a\\in[12{,}1;12{,}5]$",
      "D. $\\bar a=12{,}3$ chắc chắn"
    ],
    "answerKey": "C",
    "solution": "Đáp án: $\\bar a\\in[12{,}1;12{,}5]\\,\\mathrm{cm}$\nLời giải: $|\\bar a-12{,}3|\\le0{,}2$ nên $12{,}1\\le\\bar a\\le12{,}5$. Không suy sai số thực bằng 0,2.",
    "hint": "Độ chính xác là giới hạn sai số, chưa biết sai số thực.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B12-P01",
    "lesson": "12",
    "role": "PRACTICE",
    "skill": "G10-B12-REL_ERROR",
    "stem": "Số đúng $\\bar a=80$, dùng số gần đúng $a=78$. Tính sai số tương đối theo phần trăm.",
    "solution": "Đáp án: $100/39\\%\\approx2{,}5641\\%$\nLời giải: $\\Delta_a=|80-78|=2$; $\\delta_a=2/78=1/39\\approx2{,}5641\\%$. Không dùng mẫu số 80.",
    "hint": "Tìm $\\Delta$, chia cho số gần đúng $|a|=78$ theo SGK.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B12-P02",
    "lesson": "12",
    "role": "PRACTICE",
    "skill": "G10-B12-ROUNDING",
    "stem": "Quy tròn số đúng 4286 đến hàng chục. Hãy cho số quy tròn và sai số tuyệt đối thực.",
    "solution": "Đáp án: 4290, sai số 4\nLời giải: 4286 làm tròn đến hàng chục được 4290; sai số thực $|4290-4286|=4$, không quá 5.",
    "hint": "Chữ số hàng đơn vị là 6.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B12-P03",
    "lesson": "12",
    "role": "PRACTICE",
    "skill": "G10-B12-REL_ERROR",
    "stem": "Số đúng là 2500 người, số gần đúng a=2475 người. Sai số tương đối là bao nhiêu?",
    "solution": "Đáp án: $100/99\\%\\approx1{,}0101\\%$\nLời giải: $\\Delta_a=25$, $\\delta_a=25/2475=1/99\\approx1{,}0101\\%$. Không dùng mẫu 2500.",
    "hint": "Chia sai số tuyệt đối cho **số gần đúng** 2475 theo KNTT.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B12-P04",
    "lesson": "12",
    "role": "PRACTICE",
    "skill": "G10-B12-APPROX_CONCEPT",
    "stem": "Bản ghi $3{,}20\\,\\mathrm{m}$ với độ chính xác $0{,}05\\,\\mathrm{m}$. Khoảng nào **chắc chắn chứa** giá trị đúng?",
    "solution": "Đáp án: $\\bar a\\in[3{,}15;3{,}25]\\,\\mathrm{m}$\nLời giải: $3{,}20-0{,}05\\le\\bar a\\le3{,}20+0{,}05$, tức $\\bar a\\in[3{,}15;3{,}25]\\,\\mathrm{m}$.",
    "hint": "Giải $|\\bar a-3{,}20|\\le0{,}05$. Số gần đúng là 3,20.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B12-P05",
    "lesson": "12",
    "role": "PRACTICE",
    "skill": "G10-B12-ROUNDING",
    "stem": "Làm tròn 10,06 đến hàng phần mười. Sai số tuyệt đối của phép làm tròn là bao nhiêu?",
    "solution": "Đáp án: $10{,}1$ và $0{,}04$\nLời giải: $10{,}06\\to10{,}1$; $\\Delta=|10{,}06-10{,}1|=0{,}04$.",
    "hint": "Giữ một chữ số thập phân; xem chữ số hàng phần trăm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B12-P06",
    "lesson": "12",
    "role": "PRACTICE",
    "skill": "G10-B12-REL_ERROR",
    "stem": "Hai phép đo cùng cho giá trị gần đúng $10{,}0\\,\\mathrm{cm}$, nhưng độ chính xác lần lượt $d_1=0{,}2$ cm và $d_2=0{,}05$ cm. So sánh **cận trên** sai số tương đối $d/|a|$.",
    "solution": "Đáp án: Lần 2 nhỏ hơn: $0{,}5\\%$ so với $2\\%$\nLời giải: $0{,}2/10=2\\%$; $0{,}05/10=0{,}5\\%$. Lần 2 có giới hạn trên sai số tương đối nhỏ hơn; sai số thực từng phép đo chưa biết.",
    "hint": "Tính hai cận trên với cùng số gần đúng a=10,0; không gọi đó là sai số thực.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  }
];
 const validate=()=>({valid:records.length===8&&new Set(records.map(x=>x.item_id)).size===8&&
  records.every(x=>/^THPT-G10-B12-[CP]\d{2}$/.test(x.item_id)&&x.exposure==="FORMATIVE_ONLY"&&
  (!x.options||(x.options.length===4&&/^[ABCD]$/.test(x.answerKey))))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(Number(lesson))&&
  (role==="core"?x.role==="CORE":x.role==="PRACTICE"));
 root.THPT_CHV_B12_REVIEWED_FORMATIVE=Object.freeze({contentVersion,
  records:Object.freeze(records.map(x=>Object.freeze({...x,...(x.options?{options:Object.freeze(x.options)}:{})}))),
  validate,forLesson});
})(window);
