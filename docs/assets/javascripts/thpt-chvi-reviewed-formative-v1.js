"use strict";
/* Academically reviewed PUBLIC FORMATIVE content ONLY.
 * Canonical source for B15/B17/B18 SGK Core/Practice candidates from the
 * exact five-file NotebookLM batch reviewed on 2026-10-28.
 * Never place held-out Chapter Readiness item bodies or grading keys here.
 * Practice answer/solution is allowed after a learner elects to reveal it.
 * This is NOT a production scoring, credit, mastery or attempt engine.
 */
(function(root){
 const version="THPT-G10-CHVI-REVIEWED-20261028";
 const records=[
  {
    "item_id": "THPT-G10-B15-C01",
    "lesson": "15",
    "role": "CORE",
    "skill": "FUNCTION_MAPPING",
    "stem": "Bảng dữ liệu có các cặp (x;y): (1;3), (2;4), (2;5). Đây có là một hàm số y của x không?",
    "solution": "Không. Cùng x=2 có hai giá trị đầu ra khác nhau là 4 và 5, vi phạm tính duy nhất của hàm số.",
    "hint": "Kiểm tra mỗi giá trị x có đúng một giá trị y hay không.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B15-C02",
    "lesson": "15",
    "role": "CORE",
    "skill": "FUNCTION_DOMAIN",
    "stem": "Tìm tập xác định của f(x)=√(2x−3) trong ℝ.",
    "solution": "D=[3/2;+∞). Điều kiện căn: 2x−3≥0, suy ra x≥3/2.",
    "hint": "Biểu thức dưới căn bậc hai phải không âm.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B15-P01",
    "lesson": "15",
    "role": "PRACTICE",
    "skill": "FUNCTION_DOMAIN",
    "stem": "Tìm tập xác định của g(x)=(x+1)/(x²−9).",
    "solution": "D=ℝ∖{−3;3}. Mẫu x²−9=(x−3)(x+3) phải khác 0.",
    "hint": "Mẫu số phải khác 0.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B15-P02",
    "lesson": "15",
    "role": "PRACTICE",
    "skill": "FUNCTION_PIECEWISE",
    "stem": "Phí giao hàng giả định (nghìn đồng): C(x)=8x với 0≤x≤2; C(x)=16+6(x−2) khi x>2; x tính bằng km. Tính C(2) và C(3).",
    "solution": "C(2)=16 và C(3)=22 (nghìn đồng). x=2 dùng nhánh thứ nhất; x=3 dùng nhánh thứ hai: 16+6=22.",
    "hint": "Chọn nhánh theo điều kiện của x; công thức này đã xuất hiện trong bài giảng.",
    "exposure": "EXPOSED_IN_KNOWLEDGE"
  },
  {
    "item_id": "THPT-G10-B15-P03",
    "lesson": "15",
    "role": "PRACTICE",
    "skill": "FUNCTION_MONOTONICITY",
    "stem": "f(x)=|x+2| đồng biến/nghịch biến trên những khoảng nào?",
    "solution": "Nghịch biến trên (−∞;−2), đồng biến trên (−2;+∞). Khi x<−2, f(x)=−(x+2); khi x>−2, f(x)=x+2.",
    "hint": "Viết hàm trị tuyệt đối thành hai công thức.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B15-P04",
    "lesson": "15",
    "role": "APPLICATION",
    "skill": "FUNCTION_MODELING",
    "stem": "Dịch vụ giả định thu 100 nghìn đồng cho quãng đường 0<x≤2 km; trên 2 km thu thêm 12 nghìn đồng/km. Ngân sách tối đa 160 nghìn đồng. Tìm mọi quãng đường x có thể đi.",
    "solution": "0<x≤7 km. Với 0<x≤2, phí 100≤160. Với x>2: 100+12(x−2)≤160 ⇔ x≤7. Hợp hai miền được (0;7].",
    "hint": "Xét từng miền rồi lấy hợp nghiệm.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B17-C01",
    "lesson": "17",
    "role": "CORE",
    "skill": "QUAD_SIGN",
    "stem": "Xét dấu f(x)=x²−4x+8 trên ℝ.",
    "solution": "f(x)>0 với mọi x∈ℝ, vì Δ=(−4)²−4·1·8=−16<0 và a=1>0.",
    "hint": "Tính Δ và xét dấu a.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B17-C02",
    "lesson": "17",
    "role": "CORE",
    "skill": "QUAD_DOUBLE_ROOT_SIGN",
    "stem": "g(x)=−3(x−2)². Khi nào g(x)=0? Có x nào làm g(x)>0 không?",
    "solution": "g(x)=0 chỉ khi x=2; không có x làm g(x)>0. Bình phương không âm, nhân −3 được biểu thức không dương.",
    "hint": "Xét dấu của (x−2)².",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B17-P01",
    "lesson": "17",
    "role": "PRACTICE",
    "skill": "QUAD_INEQUALITY",
    "stem": "Giải bất phương trình 2x²−10x+12≤0.",
    "solution": "Tập nghiệm [2;3]. Vì 2x²−10x+12=2(x−2)(x−3), tam thức không dương giữa hai nghiệm, gồm hai đầu mút.",
    "hint": "Tìm nghiệm và xét dấu giữa hai nghiệm.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B17-P02",
    "lesson": "17",
    "role": "PRACTICE",
    "skill": "QUAD_INEQUALITY",
    "stem": "Giải bất phương trình −x²+2x+8>0.",
    "solution": "Tập nghiệm (−2;4). Phân tích −(x−4)(x+2)>0, tam thức mở xuống nên dương giữa hai nghiệm.",
    "hint": "Chú ý hệ số a âm.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B17-P03",
    "lesson": "17",
    "role": "PRACTICE",
    "skill": "QUAD_PARAMETER",
    "stem": "Tìm m để x²−2(m+1)x+m²+3>0 với mọi số thực x.",
    "solution": "m<1. Với a=1>0, cần Δ<0. Δ=8(m−1)<0 ⇔ m<1.",
    "hint": "Dấu >0 nghiêm ngặt đòi hỏi Δ<0, không phải Δ≤0.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B17-P04",
    "lesson": "17",
    "role": "APPLICATION",
    "skill": "QUAD_MODELING",
    "stem": "Có 30 m lưới rào ba cạnh hình chữ nhật sát tường; x (m) là mỗi cạnh vuông góc tường. Tìm mọi x để diện tích ít nhất 100 m².",
    "solution": "5≤x≤10 (m). Miền 0<x<15; S=x(30−2x). S≥100 ⇔ 2(x−5)(x−10)≤0 nên nghiệm [5;10] hợp miền.",
    "hint": "Lập diện tích và giữ miền độ dài thực tế.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B18-C01",
    "lesson": "18",
    "role": "CORE",
    "skill": "RADICAL_CONDITION",
    "stem": "Giải √(x+5)=x−1 trong ℝ.",
    "solution": "S={4}. Điều kiện x≥1; bình phương x+5=(x−1)² ⇔ (x−4)(x+1)=0. Loại −1; thử x=4 được 3=3.",
    "hint": "Vế phải cần không âm trước khi bình phương.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B18-C02",
    "lesson": "18",
    "role": "CORE",
    "skill": "RADICAL_TWO_SIDES",
    "stem": "Giải √((x+4)²)=√(x+4) trong ℝ.",
    "solution": "S={−4;−3}. Điều kiện x+4≥0. Đặt u=x+4≥0: u²=u ⇒ u=0 hoặc 1; hai giá trị đều thỏa.",
    "hint": "Xem miền của căn thứ hai trước khi bình phương.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B18-P01",
    "lesson": "18",
    "role": "PRACTICE",
    "skill": "RADICAL_FILTER",
    "stem": "Giải √(3x+4)=x.",
    "solution": "S={4}. Điều kiện x≥0, bình phương được (x−4)(x+1)=0; loại −1, thử x=4: √16=4.",
    "hint": "Vế phải không âm; thử lại mọi nghiệm ứng viên.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B18-P02",
    "lesson": "18",
    "role": "PRACTICE",
    "skill": "RADICAL_FILTER",
    "stem": "Giải √(2x²+9)=x+3.",
    "solution": "S={0;6}. Điều kiện x≥−3; bình phương được x(x−6)=0; thử x=0 và x=6 đều đúng.",
    "hint": "Không mặc định phương trình chỉ có một nghiệm.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B18-P03",
    "lesson": "18",
    "role": "PRACTICE",
    "skill": "RADICAL_DOMAIN",
    "stem": "Giải trên ℝ: √(x²+7x+11)=√(x+3).",
    "solution": "S={−2}. Bình phương được (x+2)(x+4)=0; ứng viên −4 làm căn x+3 có radicand −1, loại; x=−2 thỏa cả hai vế bằng 1.",
    "hint": "Kiểm điều kiện thực của cả hai biểu thức dưới căn.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B18-P04",
    "lesson": "18",
    "role": "APPLICATION",
    "skill": "RADICAL_MODELING",
    "stem": "Tam giác vuông có hai cạnh góc vuông dài x>0 mét và 3 mét; cạnh huyền dài x+1 mét. Tìm x.",
    "solution": "x=4 m. Từ Pythagore: √(x²+9)=x+1, bình phương được x²+9=x²+2x+1 ⇒ x=4; kiểm √25=5.",
    "hint": "Dùng Pythagore và giữ x>0.",
    "exposure": "FORMATIVE_ONLY"
  }
];
 const expected={15:{CORE:2,PRACTICE:3,APPLICATION:1},17:{CORE:2,PRACTICE:3,APPLICATION:1},18:{CORE:2,PRACTICE:3,APPLICATION:1}};
 function validate(){
  const seen=new Set(),errors=[];
  for(const item of records){
   if(seen.has(item.item_id))errors.push("DUPLICATE:"+item.item_id);
   seen.add(item.item_id);
   if(!item.stem||!item.solution||!item.hint||!item.skill)errors.push("INCOMPLETE:"+item.item_id);
   if(/-R\d\d$/.test(item.item_id)||item.role.includes("READINESS"))errors.push("HELD_OUT_LEAK:"+item.item_id);
  }
  for(const [lesson,counts] of Object.entries(expected)){
   for(const [role,n] of Object.entries(counts)){
    if(records.filter(x=>x.lesson===lesson&&x.role===role).length!==n)errors.push("ROLE_COUNT:"+lesson+":"+role);
   }
  }
  return {valid:errors.length===0,errors,count:seen.size};
 }
 const api=Object.freeze({
  version,academic_scope:"SGK_CHVI_FORMATIVE_ONLY",credit:false,
  items:Object.freeze(records.map(r=>Object.freeze(r))),validate,
  forLesson:(lesson,kind)=>records.filter(r=>r.lesson===String(lesson)&&
   (kind==="core"?r.role==="CORE":r.role!=="CORE"))
 });
 if(typeof module!=="undefined"&&module.exports)module.exports=api;
 if(root)root.THPT_CHVI_REVIEWED_FORMATIVE=api;
})(typeof window!=="undefined"?window:undefined);
