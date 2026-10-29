"use strict";
/* PUBLIC reviewed formative excerpts from owner-reviewed G10 ChVII D3/D4 R01
 * original 63-item snapshot, preserved canonical IDs and math; no held-out RD.
 * Source: prototypes/thpt/shared-items/THPT_G10_CHVII_B19_B22_CORE_PRACTICE_CANDIDATES_v0.1.md
 * B22-C01 (eccentricity) intentionally excluded from mandatory Core.
 * This is self-check only; NO credit/score/mastery or per-student history.
 */
(function(root){
 const contentVersion="THPT-G10-CHVII-D3D4-REVIEWED-20261028-R01";
 const records=[
  {
    "item_id": "THPT-G10-B19-C01",
    "lesson": "19",
    "role": "CORE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Cho đường thẳng Δ: \\(3x-2y+6=0\\). Nêu một vectơ pháp tuyến và một vectơ chỉ phương của Δ.",
    "solution": "Đáp án: \\(\\vec n=(3;-2)\\); \\(\\vec u=(2;3)\\). Lời giải: Các hệ số trước \\(x,y\\) cho \\(\\vec n\\); \\(\\vec u\\cdot\\vec n=2\\cdot3+3(-2)=0\\).",
    "hint": "Nhận diện vectơ pháp tuyến trước.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-C02",
    "lesson": "19",
    "role": "CORE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Viết phương trình tổng quát đường thẳng qua \\(A(1;2)\\) và có vectơ pháp tuyến \\(\\vec n=(2;-1)\\).",
    "solution": "Đáp án: \\(2x-y=0\\). Lời giải: \\(2(x-1)-(y-2)=0\\Rightarrow2x-y=0\\).",
    "hint": "Thay tọa độ điểm và hệ số pháp tuyến vào a(x−x₀)+b(y−y₀)=0.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-P01",
    "lesson": "19",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Viết phương trình tham số đường thẳng qua \\(A(-1;2)\\), nhận \\(\\vec u=(3;-2)\\) làm vectơ chỉ phương.",
    "solution": "Đáp án: \\(x=-1+3t,\\ y=2-2t,\\ t\\in\\mathbb R\\). Lời giải: Mọi điểm trên đường thẳng có tọa độ \\(A+t\\vec u\\).",
    "hint": "Dùng điểm gốc cộng (t) lần vectơ chỉ phương.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-P02",
    "lesson": "19",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Viết phương trình tổng quát đường thẳng qua \\(A(1;2)\\) và \\(B(4;-1)\\).",
    "solution": "Đáp án: \\(x+y-3=0\\). Lời giải: \\(\\overrightarrow{AB}=(3;-3)\\), một pháp tuyến là \\((1;1)\\). Qua \\(A\\): \\((x-1)+(y-2)=0\\).",
    "hint": "Tìm vectơ AB rồi một pháp tuyến vuông góc.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-C01",
    "lesson": "20",
    "role": "CORE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Xét \\(d_1:2x-y+3=0\\), \\(d_2:4x-2y-5=0\\). Hai đường có vị trí tương đối nào?",
    "solution": "Đáp án: Song song và phân biệt. Lời giải: Hệ số \\(x,y\\) của \\(d_2\\) bằng 2 lần hệ số của \\(d_1\\), nhưng hằng số \\(-5\\ne6\\); do đó không trùng.",
    "hint": "So sánh cả ba hệ số khi kiểm tra trùng nhau.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-C02",
    "lesson": "20",
    "role": "CORE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Hai đường \\(d_1:x+2y=0\\) và \\(d_2:2x-y+4=0\\) có vuông góc không?",
    "solution": "Đáp án: Có, chúng vuông góc. Lời giải: Pháp tuyến \\(\\vec n_1=(1;2)\\), \\(\\vec n_2=(2;-1)\\) có tích vô hướng \\(2-2=0\\).",
    "hint": "Kiểm tra tích vô hướng của hai vectơ pháp tuyến.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-P01",
    "lesson": "20",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Tìm giao điểm \\(d_1:x+y-3=0\\) và \\(d_2:x-y-1=0\\).",
    "solution": "Đáp án: \\(I(2;1)\\). Lời giải: Giải hệ \\(x+y=3,\\ x-y=1\\) được \\(x=2,y=1\\).",
    "hint": "Giải hệ hai phương trình đường thẳng.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-P02",
    "lesson": "20",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Tính khoảng cách từ \\(P(1;-2)\\) đến đường \\(d:3x+4y-5=0\\).",
    "solution": "Đáp án: \\(d(P,d)=2\\). Lời giải: \\(\\dfrac{|3\\cdot1+4(-2)-5|}{\\sqrt{3^2+4^2}}=\\dfrac{10}{5}=2\\).",
    "hint": "Tử là trị tuyệt đối; mẫu là độ dài vectơ pháp tuyến.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-C01",
    "lesson": "21",
    "role": "CORE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Viết phương trình đường tròn tâm \\(I(1;-2)\\), bán kính \\(R=3\\).",
    "solution": "Đáp án: \\((x-1)^2+(y+2)^2=9\\). Lời giải: Áp dụng \\((x-a)^2+(y-b)^2=R^2\\).",
    "hint": "Dấu trong ngoặc ngược với tọa độ tâm.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-C02",
    "lesson": "21",
    "role": "CORE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Tìm tâm và bán kính đường tròn \\(x^2+y^2-4x+6y-12=0\\).",
    "solution": "Đáp án: Tâm \\(I(2;-3)\\), bán kính \\(R=5\\). Lời giải: Hoàn thành bình phương: \\((x-2)^2+(y+3)^2=25\\).",
    "hint": "Gom (x) và (y) thành các bình phương.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-P01",
    "lesson": "21",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Viết phương trình đường tròn đường kính \\(AB\\), với \\(A(-2;1)\\), \\(B(4;5)\\).",
    "solution": "Đáp án: \\((x-1)^2+(y-3)^2=13\\). Lời giải: Trung điểm \\(I(1;3)\\); \\(AB^2=6^2+4^2=52\\), \\(R^2=AB^2/4=13\\).",
    "hint": "Tâm là trung điểm đường kính, bán kính bằng một nửa độ dài AB.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-P02",
    "lesson": "21",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Viết tiếp tuyến của đường tròn \\(x^2+y^2=25\\) tại \\(M(3;4)\\).",
    "solution": "Đáp án: \\(3x+4y=25\\). Lời giải: \\(\\overrightarrow{OM}=(3;4)\\) là pháp tuyến của tiếp tuyến tại \\(M\\). Phương trình \\(3(x-3)+4(y-4)=0\\).",
    "hint": "Bán kính tại tiếp điểm vuông góc tiếp tuyến.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-C02",
    "lesson": "22",
    "role": "CORE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Cho hypebol \\(H:\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1\\). Tìm hai tiêu điểm và hai tiệm cận.",
    "solution": "Đáp án: \\(F_{1,2}=(\\mp5;0)\\); \\(y=\\pm\\frac43x\\). Lời giải: \\(a=3,b=4,c=\\sqrt{a^2+b^2}=5\\). Tiệm cận \\(y=\\pm(b/a)x\\).",
    "hint": "Hypebol có (c^2=a^2+b^2), khác elip.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-P01",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Elip có tiêu điểm \\((-3;0)\\), \\((3;0)\\), độ dài trục lớn \\(10\\). Viết phương trình chính tắc.",
    "solution": "Đáp án: \\(\\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1\\). Lời giải: \\(a=5,c=3,b^2=a^2-c^2=16\\).",
    "hint": "Dùng độ dài trục lớn (2a) và khoảng cách tiêu điểm (2c).",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-P02",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Hypebol có hai đỉnh \\((-2;0),(2;0)\\), hai tiêu điểm \\((-\\sqrt{13};0),(\\sqrt{13};0)\\). Viết phương trình chính tắc.",
    "solution": "Đáp án: \\(\\dfrac{x^2}{4}-\\dfrac{y^2}{9}=1\\). Lời giải: \\(a=2,c=\\sqrt{13},b^2=c^2-a^2=9\\).",
    "hint": "Hypebol: trừ (y^2/b^2) và (c^2=a^2+b^2).",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-P03",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "COORDINATE_GEOMETRY",
    "stem": "Viết phương trình chính tắc của parabol có tiêu điểm \\(F(2;0)\\) và đường chuẩn \\(x=-2\\).",
    "solution": "Đáp án: \\(y^2=8x\\). Lời giải: Với \\(y^2=2px\\), tiêu điểm \\((p/2;0)\\), đường chuẩn \\(x=-p/2\\), nên \\(p=4\\).",
    "hint": "Dùng quy ước SGK (y^2=2px), (p>0).",
    "exposure": "FORMATIVE_ONLY"
  }
];
 const allowed=new Set(["THPT-G10-B19-C01","THPT-G10-B19-C02","THPT-G10-B19-P01","THPT-G10-B19-P02","THPT-G10-B20-C01","THPT-G10-B20-C02","THPT-G10-B20-P01","THPT-G10-B20-P02","THPT-G10-B21-C01","THPT-G10-B21-C02","THPT-G10-B21-P01","THPT-G10-B21-P02","THPT-G10-B22-C02","THPT-G10-B22-P01","THPT-G10-B22-P02","THPT-G10-B22-P03"]);
 const validate=()=>({valid:records.length===16&&new Set(records.map(x=>x.item_id)).size===16&&records.every(x=>allowed.has(x.item_id)&&x.stem&&x.hint&&x.solution&&!/READINESS|-(RD|R)\d\d\b/.test(x.item_id))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(lesson)&&(
   role==="core"?(x.role==="CORE"||x.item_id==="THPT-G10-B22-P01"):
   x.role==="PRACTICE"))
   .map(x=>x.item_id==="THPT-G10-B22-P01"&&role==="core"?Object.assign({},x,{role:"CORE"}):x);
 root.THPT_CHVII_REVIEWED_FORMATIVE=Object.freeze({contentVersion,records:Object.freeze(records.map(x=>Object.freeze(x))),validate,forLesson});
})(window);
