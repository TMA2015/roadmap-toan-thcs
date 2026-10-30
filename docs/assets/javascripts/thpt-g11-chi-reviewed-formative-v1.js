"use strict";
/* One source of truth: NotebookLM-reviewed G11 ChI B01/B02 R01 immutable Git blob f0e737f2d07a27f233615345b60070319d5bd00f.
   PUBLIC_FORMATIVE_ONLY. No private Readiness, score, history or Skill Mastery. */
(function(root){
 const contentVersion="THPT-G11-CHI-B01-B02-R01";
 const records=[
  {
    "item_id": "THPT-G11-B01-C01",
    "lesson": "1",
    "grade": "11",
    "role": "CORE",
    "skill": "G11-B01-DEG_RAD",
    "stem": "Đổi góc 135° sang radian và xác định góc nằm ở góc phần tư nào trong [0,2π).",
    "hint": "Lấy 135×π/180, rồi so với π/2 và π.",
    "solution": "Đáp án: 3π/4 rad; góc phần tư II.\nLời giải: 135°×π/180°=3π/4. Vì π/2<3π/4<π nên góc ở góc phần tư II.",
    "difficulty": "BASIC",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B01-C02",
    "lesson": "1",
    "grade": "11",
    "role": "CORE",
    "skill": "G11-B01-TRIG_UNIT_CIRCLE",
    "stem": "Tính sin(5π/6), cos(5π/6), tan(5π/6) và cot(5π/6).",
    "hint": "5π/6 nằm ở góc phần tư II; góc tham chiếu π/6.",
    "solution": "Đáp án: 1/2; −√3/2; −√3/3; −√3.\nLời giải: sin(5π/6)=1/2, cos(5π/6)=−√3/2. Vì cos và sin đều khác 0, tan=(1/2)/(−√3/2)=−√3/3; cot=−√3.",
    "difficulty": "BASIC",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B01-P01",
    "lesson": "1",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B01-TRIG_IDENTITIES",
    "stem": "Biết sin α=3/5 và π/2<α<π. Tính cos α và tan α.",
    "hint": "cos²α=1−sin²α; dấu cos âm ở góc phần tư II.",
    "solution": "Đáp án: cos α=−4/5; tan α=−3/4.\nLời giải: cos²α=1−9/25=16/25. α ở góc phần tư II nên cos α=−4/5. tan α=sin α/cos α=−3/4.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B01-P02",
    "lesson": "1",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B01-PERIODIC_REDUCTION",
    "stem": "Rút gọn góc 765° về góc cùng phương trong [0°,360°), rồi tính sin 765°.",
    "hint": "Trừ các bội nguyên của 360°, sau đó tính tại góc cơ bản.",
    "solution": "Đáp án: 45°; sin 765°=√2/2.\nLời giải: 765°−2×360°=45°. sin(765°)=sin(45°)=√2/2 do chu kì 360°.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B01-P03",
    "lesson": "1",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B01-ARC_LENGTH",
    "stem": "Một cung của đường tròn có bán kính 12 cm chắn góc ở tâm 5π/6 rad. Tính độ dài cung.",
    "hint": "Độ dài cung s=R|α| nếu α tính bằng radian và xét độ dài không âm.",
    "solution": "Đáp án: 10π cm.\nLời giải: s=12×5π/6=10π cm. Góc theo radian nên không cần nhân thêm π/180.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B01-P04",
    "lesson": "1",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B01-TRIG_IDENTITIES",
    "stem": "Biết tan α=−2 và cos α>0. Tính sin α, cos α và cot α.",
    "hint": "cos²α=1/(1+tan²α). Dấu cos dương và tan âm nên sin âm.",
    "solution": "Đáp án: sin α=−2√5/5; cos α=√5/5; cot α=−1/2.\nLời giải: 1+tan²α=5 ⇒ cos²α=1/5. cos α=1/√5, sin α=tan α·cos α=−2/√5, cot α=1/tan α=−1/2.",
    "difficulty": "APPLICATION",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-C01",
    "lesson": "2",
    "grade": "11",
    "role": "CORE",
    "skill": "G11-B02-SUM_DIFFERENCE",
    "stem": "Dùng công thức hiệu để tính sin(π/3−π/6).",
    "hint": "sin(u−v)=sin u cos v−cos u sin v.",
    "solution": "Đáp án: 1/2.\nLời giải: sin(π/3−π/6)= (√3/2)(√3/2)−(1/2)(1/2)=3/4−1/4=1/2.",
    "difficulty": "BASIC",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-C02",
    "lesson": "2",
    "grade": "11",
    "role": "CORE",
    "skill": "G11-B02-DOUBLE_ANGLE",
    "stem": "Dùng công thức góc nhân đôi để tính cos(2π/3) từ cos(π/3).",
    "hint": "cos(2u)=2cos²u−1.",
    "solution": "Đáp án: −1/2.\nLời giải: cos(2π/3)=2(1/2)²−1=−1/2.",
    "difficulty": "BASIC",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-P01",
    "lesson": "2",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B02-SUM_DIFFERENCE",
    "stem": "Tính chính xác sin 75° mà không dùng máy tính.",
    "hint": "Tách 75°=45°+30°.",
    "solution": "Đáp án: (√6+√2)/4.\nLời giải: sin75°=sin45°cos30°+cos45°sin30°=√2/2·√3/2+√2/2·1/2=(√6+√2)/4.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-P02",
    "lesson": "2",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B02-SUM_DIFFERENCE",
    "stem": "Tính chính xác cos 75° bằng công thức cộng.",
    "hint": "cos(45°+30°)=cos45°cos30°−sin45°sin30°.",
    "solution": "Đáp án: (√6−√2)/4.\nLời giải: cos75°=√2/2·√3/2−√2/2·1/2=(√6−√2)/4.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-P03",
    "lesson": "2",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B02-SUM_DIFFERENCE",
    "stem": "Không tính riêng các góc, rút gọn E=sin20°cos40°+cos20°sin40°.",
    "hint": "Nhận dạng sin(u+v).",
    "solution": "Đáp án: √3/2.\nLời giải: E=sin(20°+40°)=sin60°=√3/2.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-P04",
    "lesson": "2",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B02-PRODUCT_TO_SUM",
    "stem": "Dùng công thức biến đổi tích thành tổng để tính 2sin75°sin15°.",
    "hint": "2sin u sin v=cos(u−v)−cos(u+v).",
    "solution": "Đáp án: 1/2.\nLời giải: 2sin75°sin15°=cos60°−cos90°=1/2−0=1/2.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-P05",
    "lesson": "2",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B02-SUM_TO_PRODUCT",
    "stem": "Dùng công thức biến đổi tổng thành tích để tính sin75°+sin15°.",
    "hint": "sin u+sin v=2sin((u+v)/2)cos((u−v)/2).",
    "solution": "Đáp án: √6/2.\nLời giải: sin75°+sin15°=2sin45°cos30°=2·√2/2·√3/2=√6/2.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-P06",
    "lesson": "2",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B02-DOUBLE_ANGLE",
    "stem": "Cho góc α có sin α=3/5 và cos α=4/5. Tính sin2α và cos2α.",
    "hint": "sin2α=2sinαcosα; cos2α=cos²α−sin²α.",
    "solution": "Đáp án: sin2α=24/25; cos2α=7/25.\nLời giải: sin2α=2·3/5·4/5=24/25; cos2α=16/25−9/25=7/25.",
    "difficulty": "APPLICATION",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B01-P05",
    "lesson": "1",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B01-RELATED_ANGLES",
    "stem": "Cho góc θ ở góc phần tư II có sin θ=4/5 và cos θ=−3/5. Không tìm θ, hãy tính sin(π−θ), cos(π+θ), sin(−θ).",
    "hint": "Sử dụng hệ thức góc bù, hơn kém π và góc đối; kiểm dấu của kết quả.",
    "solution": "Đáp án: 4/5; 3/5; −4/5.\nLời giải: sin(π−θ)=sin θ=4/5; cos(π+θ)=−cos θ=3/5; sin(−θ)=−sin θ=−4/5.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G11-B02-P07",
    "lesson": "2",
    "grade": "11",
    "role": "PRACTICE",
    "skill": "G11-B02-SUM_DIFFERENCE",
    "stem": "Biết tan u=1/2 và tan v=1/3, trong đó tan u và tan v đều xác định. Tính tan(u+v) nếu biểu thức xác định.",
    "hint": "Kiểm 1−tan u·tan v≠0, sau đó mới áp dụng công thức cộng tan.",
    "solution": "Đáp án: 1.\nLời giải: 1−(1/2)(1/3)=5/6≠0 nên tan(u+v) xác định. tan(u+v)=(1/2+1/3)/(1−1/6)=(5/6)/(5/6)=1.",
    "difficulty": "CORE_APPLY",
    "exposure": "FORMATIVE_ONLY"
  }
];
 const validate=()=>({valid:records.length===16&&new Set(records.map(x=>x.item_id)).size===16&&
   records.every(x=>/^THPT-G11-B(01|02)-[CP]\d{2}$/.test(x.item_id)&&x.grade==="11"&&x.exposure==="FORMATIVE_ONLY")});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(Number(lesson))&&
   (role==="core"?x.role==="CORE":x.role==="PRACTICE"));
 root.THPT_G11_CHI_REVIEWED_FORMATIVE=Object.freeze({contentVersion,
   records:Object.freeze(records.map(x=>Object.freeze(x))),validate,forLesson});
})(window);
