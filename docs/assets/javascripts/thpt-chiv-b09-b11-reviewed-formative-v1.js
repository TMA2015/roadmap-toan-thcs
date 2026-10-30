"use strict";
/* Exact NotebookLM-reviewed R01 public formative: source academic Git blob a9f6fab820559a8da98a5a42cd9902dbf9891f34.
   No held-out Readiness, no scoring/Mastery, one canonical item_id per original item. */
(function(root){
 const contentVersion="THPT-G10-CHIV-B09-B11-R01";
 const records=[
  {
    "item_id": "THPT-G10-B09-C01",
    "lesson": "9",
    "role": "CORE",
    "skill": "G10-B09-LENGTH_DIRECTION",
    "stem": "Cho $\\vec u\\ne\\vec0$, $|\\vec u|=4$ cm, $\\vec v=-2\\vec u$. Phát biểu nào đúng?",
    "options": [
      "A. $|\\vec v|=-8$ cm",
      "B. $|\\vec v|=8$ cm và ngược hướng $\\vec u$",
      "C. $|\\vec v|=2$ cm",
      "D. $\\vec v$ cùng hướng $\\vec u$."
    ],
    "answerKey": "B",
    "solution": "Đáp án: B\nLời giải: $|\\vec v|=|-2|\\cdot4=8$ cm. Hệ số âm và $\\vec u\\ne\\vec0$ nên $\\vec v$ ngược hướng $\\vec u$.",
    "hint": "Dùng giá trị tuyệt đối của hệ số khi tính độ dài.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B09-C02",
    "lesson": "9",
    "role": "CORE",
    "skill": "G10-B09-SCALAR_DEFINITION",
    "stem": "Với mọi vectơ $\\vec a$, $0\\vec a$ bằng gì?",
    "options": [
      "A. $\\vec a$",
      "B. Vectơ có độ dài 1",
      "C. $\\vec0$",
      "D. Không xác định."
    ],
    "answerKey": "C",
    "solution": "Đáp án: C\nLời giải: Theo định nghĩa, $0\\vec a=\\vec0$ kể cả khi $\\vec a\\ne\\vec0$.",
    "hint": "Nhân với số 0 làm độ dài còn bao nhiêu?",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B09-P01",
    "lesson": "9",
    "role": "PRACTICE",
    "skill": "G10-B09-LENGTH_DIRECTION",
    "stem": "Nếu $|\\vec a|=6$ m, tính $|3\\vec a|$.",
    "solution": "Đáp án: 18 m\nLời giải: $|3\\vec a|=3\\cdot6=18$ m.",
    "hint": "Độ dài của tích $k\\vec a$ bằng $|k|\\,|\\vec a|$.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B09-P02",
    "lesson": "9",
    "role": "PRACTICE",
    "skill": "G10-B09-DISTRIBUTION",
    "stem": "Rút gọn $3(\\vec a+\\vec b)-2\\vec a$.",
    "solution": "Đáp án: $\\vec a+3\\vec b$\nLời giải: $3\\vec a+3\\vec b-2\\vec a=(3-2)\\vec a+3\\vec b=\\vec a+3\\vec b$.",
    "hint": "Phân phối hệ số 3 lên cả hai vectơ.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B09-P03",
    "lesson": "9",
    "role": "PRACTICE",
    "skill": "G10-B09-MIDPOINT_CENTROID",
    "stem": "M nằm trên đoạn AB và $AM=\\frac35 AB$. Biểu thị $\\overrightarrow{MA}$ qua $\\overrightarrow{AB}$.",
    "solution": "Đáp án: $-\\frac35\\overrightarrow{AB}$\nLời giải: $\\overrightarrow{AM}=\\tfrac35\\overrightarrow{AB}$ và $\\overrightarrow{MA}=-\\overrightarrow{AM}$ nên kết quả $-\\tfrac35\\overrightarrow{AB}$.",
    "hint": "MA ngược hướng AM.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B09-P04",
    "lesson": "9",
    "role": "PRACTICE",
    "skill": "G10-B09-MIDPOINT_CENTROID",
    "stem": "G là trọng tâm tam giác ABC. Công thức nào đúng?",
    "options": [
      "A. $\\overrightarrow{AG}=\\overrightarrow{AB}+\\overrightarrow{AC}$",
      "B. $\\overrightarrow{AG}=\\frac12(\\overrightarrow{AB}+\\overrightarrow{AC})$",
      "C. $\\overrightarrow{AG}=\\frac13(\\overrightarrow{AB}+\\overrightarrow{AC})$",
      "D. $\\overrightarrow{AG}=3(\\overrightarrow{AB}+\\overrightarrow{AC})$."
    ],
    "answerKey": "C",
    "solution": "Đáp án: C\nLời giải: Nếu M là trung điểm BC, $\\overrightarrow{AM}=\\frac12(\\overrightarrow{AB}+\\overrightarrow{AC})$, $\\overrightarrow{AG}=\\frac23\\overrightarrow{AM}$, nên hệ số là 1/3.",
    "hint": "G nằm trên trung tuyến và AG bằng 2/3 trung tuyến.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B09-P05",
    "lesson": "9",
    "role": "PRACTICE",
    "skill": "G10-B09-COLLINEAR",
    "stem": "Hai vectơ khác không thỏa $\\vec v=-\\frac52\\vec u$. So sánh hướng và tỉ số độ dài $|\\vec v|/|\\vec u|$.",
    "solution": "Đáp án: Ngược hướng; tỉ số $\\frac52$\nLời giải: Vì $-\\frac52<0$, hai vectơ ngược hướng; $|\\vec v|/|\\vec u|=|-\\frac52|=\\frac52$. Chúng cùng phương vì có quan hệ bội vô hướng.",
    "hint": "Xét dấu và giá trị tuyệt đối của hệ số.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B09-P06",
    "lesson": "9",
    "role": "PRACTICE",
    "skill": "G10-B09-DISTRIBUTION",
    "stem": "Vectơ $\\vec u$ biểu diễn độ dời 3 km về phía Đông. Sau hai chặng có độ dời $\\vec u$ rồi $-2\\vec u$, độ dời tổng là bao nhiêu và theo hướng nào?",
    "solution": "Đáp án: 3 km về Tây\nLời giải: $\\vec u+(-2\\vec u)=-\\vec u$, nên vectơ tổng có độ dài 3 km và hướng Tây. Tổng quãng đường nếu đi đúng hai chặng là 9 km, không phải 3 km.",
    "hint": "Cộng hai vectơ trước khi tìm độ dài.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B10-C01",
    "lesson": "10",
    "role": "CORE",
    "skill": "G10-B10-VECTOR_COORDS",
    "stem": "Cho $A(-2;3),B(4;1)$. Tọa độ $\\overrightarrow{AB}$ là?",
    "options": [
      "A. $(2;4)$",
      "B. $(6;-2)$",
      "C. $(-6;2)$",
      "D. $(4;1)$."
    ],
    "answerKey": "B",
    "solution": "Đáp án: B\nLời giải: Tính $(4-(-2);1-3)=(6;-2)$. Không lấy nguyên tọa độ điểm B.",
    "hint": "Tọa độ vectơ AB = tọa độ điểm cuối trừ điểm đầu.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B10-C02",
    "lesson": "10",
    "role": "CORE",
    "skill": "G10-B10-NORM_DISTANCE",
    "stem": "Tính độ dài vectơ $\\vec u=(5;12)$.",
    "solution": "Đáp án: 13\nLời giải: $|\\vec u|=\\sqrt{5^2+12^2}=\\sqrt{169}=13$.",
    "hint": "Bình phương hai tọa độ rồi lấy căn.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B10-P01",
    "lesson": "10",
    "role": "PRACTICE",
    "skill": "G10-B10-OPERATIONS",
    "stem": "Cho $\\vec u=(1;-2),\\vec v=(-3;4)$. Tính $2\\vec u-\\vec v$.",
    "solution": "Đáp án: $(5;-8)$\nLời giải: $2\\vec u=(2;-4)$, trừ $(-3;4)$ được $(2+3;-4-4)=(5;-8)$.",
    "hint": "Làm phép toán theo từng thành phần.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B10-P02",
    "lesson": "10",
    "role": "PRACTICE",
    "skill": "G10-B10-VECTOR_COORDS",
    "stem": "Cho $A(2;-1)$ và $\\overrightarrow{AB}=(4;3)$. Tìm tọa độ B.",
    "solution": "Đáp án: $B(6;2)$\nLời giải: $B=(2+4;-1+3)=(6;2)$.",
    "hint": "Cộng tọa độ A với vectơ AB.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B10-P03",
    "lesson": "10",
    "role": "PRACTICE",
    "skill": "G10-B10-MIDPOINT_CENTROID",
    "stem": "Tìm trung điểm M của $A(-2;5)$ và $B(4;-1)$.",
    "solution": "Đáp án: $M(1;2)$\nLời giải: $M=((-2+4)/2;(5-1)/2)=(1;2)$.",
    "hint": "Lấy trung bình mỗi tọa độ.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B10-P04",
    "lesson": "10",
    "role": "PRACTICE",
    "skill": "G10-B10-MIDPOINT_CENTROID",
    "stem": "Cho tam giác $A(0;0),B(6;0),C(0;3)$. Tìm trọng tâm G.",
    "solution": "Đáp án: $G(2;1)$\nLời giải: $G=((0+6+0)/3;(0+0+3)/3)=(2;1)$.",
    "hint": "Cộng ba hoành độ, ba tung độ rồi chia 3.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B10-P05",
    "lesson": "10",
    "role": "PRACTICE",
    "skill": "G10-B10-COLLINEAR_COORDS",
    "stem": "Với $\\vec u=(2;-3)$, $\\vec v=(-4;6)$, chọn phát biểu đúng.",
    "options": [
      "A. Không cùng phương",
      "B. Cùng phương và ngược hướng",
      "C. Cùng hướng và bằng nhau",
      "D. Vuông góc."
    ],
    "answerKey": "B",
    "solution": "Đáp án: B\nLời giải: $\\vec v=-2\\vec u$ với $\\vec u\\ne\\vec0$, vậy cùng phương và ngược hướng.",
    "hint": "Tìm k sao cho v=ku.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B10-P06",
    "lesson": "10",
    "role": "PRACTICE",
    "skill": "G10-B10-NORM_DISTANCE",
    "stem": "Trên bản đồ Oxy, mỗi đơn vị ứng với 1 km. Hai điểm $A(-1;2)$ và $B(5;-6)$. Tính khoảng cách thẳng AB.",
    "solution": "Đáp án: 10 km\nLời giải: $\\overrightarrow{AB}=(6;-8)$, $AB=\\sqrt{6^2+(-8)^2}=10$ km. Đây là khoảng cách thẳng, chưa phải quãng đường đi trên các tuyến đường.",
    "hint": "Lấy hiệu tọa độ rồi dùng định lí Pitago.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B11-C01",
    "lesson": "11",
    "role": "CORE",
    "skill": "G10-B11-COORDINATE_DOT",
    "stem": "Cho $\\vec u=(3;-2),\\vec v=(1;4)$. Tính $\\vec u\\cdot\\vec v$.",
    "solution": "Đáp án: -5\nLời giải: $3\\cdot1+(-2)\\cdot4=3-8=-5$.",
    "hint": "$\\vec u\\cdot\\vec v=u_xv_x+u_yv_y$.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B11-C02",
    "lesson": "11",
    "role": "CORE",
    "skill": "G10-B11-PERPENDICULAR",
    "stem": "Chọn cặp vectơ **khác không** vuông góc.",
    "options": [
      "A. $(1;2)$ và $(2;-1)$",
      "B. $(1;1)$ và $(1;1)$",
      "C. $(2;0)$ và $(1;0)$",
      "D. $(1;-1)$ và $(2;-2)$."
    ],
    "answerKey": "A",
    "solution": "Đáp án: A\nLời giải: A: $1\\cdot2+2\\cdot(-1)=0$. Các cặp B,C,D có tích khác 0 nên không vuông góc.",
    "hint": "Hai vectơ khác không vuông góc nếu tích vô hướng bằng 0.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B11-P01",
    "lesson": "11",
    "role": "PRACTICE",
    "skill": "G10-B11-GEOMETRIC_DOT",
    "stem": "Cho $|\\vec u|=5$, $|\\vec v|=4$ và góc giữa chúng $60^\\circ$. Tính $\\vec u\\cdot\\vec v$.",
    "solution": "Đáp án: 10\nLời giải: $5\\cdot4\\cos60^\\circ=20/2=10$.",
    "hint": "Nhớ $\\cos60^\\circ=1/2$.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B11-P02",
    "lesson": "11",
    "role": "PRACTICE",
    "skill": "G10-B11-COORDINATE_DOT",
    "stem": "Với $\\vec u=(k;2)$, $\\vec v=(3;-6)$, tìm $k$ để $\\vec u\\perp\\vec v$.",
    "solution": "Đáp án: $k=4$\nLời giải: $\\vec v\\ne\\vec0$, $\\vec u$ không thể là vectơ-không vì tung độ bằng 2. $3k+2(-6)=0\\implies 3k=12\\implies k=4$.",
    "hint": "Giải phương trình tích vô hướng bằng 0.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B11-P03",
    "lesson": "11",
    "role": "PRACTICE",
    "skill": "G10-B11-COORDINATE_DOT",
    "stem": "Cho $\\vec u=(1;3),\\vec v=(-1;1)$. Tính $\\cos\\theta$ với $\\theta$ là góc giữa hai vectơ.",
    "solution": "Đáp án: $1/\\sqrt5$\nLời giải: $\\vec u\\cdot\\vec v=-1+3=2$, $|\\vec u|=\\sqrt{10}$, $|\\vec v|=\\sqrt2$. Vậy $\\cos\\theta=2/\\sqrt{20}=1/\\sqrt5$.",
    "hint": "Cos bằng tích vô hướng chia cho tích độ dài (khác 0).",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B11-P04",
    "lesson": "11",
    "role": "PRACTICE",
    "skill": "G10-B11-COORDINATE_DOT",
    "stem": "Cho $A(0;0),B(4;1),C(2;3)$. Tính $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
    "solution": "Đáp án: 11\nLời giải: $\\overrightarrow{AB}=(4;1)$, $\\overrightarrow{AC}=(2;3)$, tích bằng $4\\cdot2+1\\cdot3=11$.",
    "hint": "Hai vectơ cùng xuất phát từ A.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B11-P05",
    "lesson": "11",
    "role": "PRACTICE",
    "skill": "G10-B11-APPLICATION",
    "stem": "Một lực không đổi $\\vec F=(10;0)$ N tác dụng lên vật dịch chuyển $\\vec s=(3;4)$ m. Tính công $W=\\vec F\\cdot\\vec s$.",
    "solution": "Đáp án: 30 J\nLời giải: $W=10\\cdot3+0\\cdot4=30$ J. Không dùng $|F|\\,|s|=50$ vì lực không cùng hướng với độ dời.",
    "hint": "Tích vô hướng có đơn vị N·m = J.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B11-P06",
    "lesson": "11",
    "role": "PRACTICE",
    "skill": "G10-B11-PERPENDICULAR",
    "stem": "Cho $A(0;0),B(3;1),C(-1;3)$. Chứng minh tam giác ABC vuông ở A và tính diện tích.",
    "solution": "Đáp án: Vuông ở A; diện tích 5 (đv²)\nLời giải: $\\overrightarrow{AB}=(3;1),\\overrightarrow{AC}=(-1;3)$, tích $-3+3=0$, hai vectơ khác không. $AB=AC=\\sqrt{10}$, nên diện tích $S=\\tfrac12\\cdot\\sqrt{10}\\cdot\\sqrt{10}=5$.",
    "hint": "Tính $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$ và độ dài hai cạnh.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  }
];
 const validate=()=>({valid:records.length===24&&new Set(records.map(x=>x.item_id)).size===24&&
   records.every(x=>/^THPT-G10-B(09|10|11)-[CP]\d{2}$/.test(x.item_id)&&x.exposure==="FORMATIVE_ONLY"&&
    (!x.options||(x.options.length===4&&/^[ABCD]$/.test(x.answerKey))))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(Number(lesson))&&
   (role==="core"?x.role==="CORE":x.role==="PRACTICE"));
 root.THPT_CHIV_B09_B11_REVIEWED_FORMATIVE=Object.freeze({contentVersion,
   records:Object.freeze(records.map(x=>Object.freeze({...x,...(x.options?{options:Object.freeze(x.options)}:{})}))),
   validate,forLesson});
})(window);
