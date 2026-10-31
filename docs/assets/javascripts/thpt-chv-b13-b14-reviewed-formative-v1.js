"use strict";
/* Reviewed original public formative source Git blob 49502fe39cf0a67f6a3e973a77f94164150637a7; limited to B13–B14 unaffected R01 items.
   One item_id per question, no protected Readiness/Topic bank, no scoring or Mastery. */
(function(root){
 const contentVersion="THPT-G10-CHV-B13-B14-R01";
 const records=[
  {
    "item_id": "THPT-G10-B13-C01",
    "lesson": "13",
    "role": "CORE",
    "skill": "G10-B13-MEAN",
    "stem": "Mẫu $3,5,7,9$ có số trung bình bằng bao nhiêu?",
    "options": [
      "A. $5$",
      "B. $6$",
      "C. $7$",
      "D. $8$"
    ],
    "answerKey": "B",
    "solution": "Đáp án: $6$\nLời giải: $(3+5+7+9)/4=24/4=6$.",
    "hint": "Cộng bốn giá trị rồi chia 4.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B13-C02",
    "lesson": "13",
    "role": "CORE",
    "skill": "G10-B13-MEDIAN",
    "stem": "Mẫu đã sắp $1,2,4,8,12$ có trung vị bằng bao nhiêu?",
    "options": [
      "A. $2$",
      "B. $3$",
      "C. $4$",
      "D. $8$"
    ],
    "answerKey": "C",
    "solution": "Đáp án: $4$\nLời giải: Trung vị là phần tử giữa: 4.",
    "hint": "Mẫu lẻ 5 giá trị, chọn giá trị thứ 3.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B13-P01",
    "lesson": "13",
    "role": "PRACTICE",
    "skill": "G10-B13-MEAN",
    "stem": "Trong bảng tần số, giá trị 2 xuất hiện 2 lần, 4 xuất hiện 3 lần, 8 xuất hiện 1 lần. Tính số trung bình.",
    "solution": "Đáp án: $4$\nLời giải: $n=2+3+1=6$, tổng $2\\cdot2+4\\cdot3+8\\cdot1=24$; $\\bar x=4$.",
    "hint": "Nhân từng giá trị với tần số trước khi chia tổng tần số.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B13-P02",
    "lesson": "13",
    "role": "PRACTICE",
    "skill": "G10-B13-QUARTILES",
    "stem": "Mẫu đã sắp $1,3,4,8,9,10$. Tìm $Q_1,Q_2,Q_3$ theo KNTT.",
    "solution": "Đáp án: $Q_1=3,Q_2=6,Q_3=9$\nLời giải: $Q_2=(4+8)/2=6$; nửa trái trung vị 3, nửa phải trung vị 9.",
    "hint": "Mẫu n chẵn; chia hai nửa $1,3,4$ và $8,9,10$.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B13-P03",
    "lesson": "13",
    "role": "PRACTICE",
    "skill": "G10-B13-MODE",
    "stem": "Mẫu $1,1,3,3,5,7$. Mốt của mẫu là gì?",
    "solution": "Đáp án: Hai mốt: 1 và 3\nLời giải: Giá trị 1 và 3 mỗi giá trị xuất hiện 2 lần, các giá trị khác chỉ 1; do đó mẫu có hai mốt 1 và 3.",
    "hint": "Đếm tần số của mỗi giá trị.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B13-P04",
    "lesson": "13",
    "role": "PRACTICE",
    "skill": "G10-B13-INTERPRETATION",
    "stem": "Thu nhập ngày (đơn vị thống nhất) là $4,5,5,6,30$. Tính trung bình và trung vị; số nào ít bị số 30 chi phối hơn?",
    "solution": "Đáp án: $\\bar x=10$, trung vị 5; trung vị ổn định hơn\nLời giải: $\\bar x=(4+5+5+6+30)/5=10$, trung vị 5. Giá trị 30 kéo tăng trung bình nhưng không thay đổi vị trí phần tử giữa.",
    "hint": "Sắp mẫu, phần tử giữa là 5; tổng cả mẫu 50.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B13-P05",
    "lesson": "13",
    "role": "PRACTICE",
    "skill": "G10-B13-QUARTILES",
    "stem": "Mẫu đã sắp $1,2,3,4,6,8,9$ có $Q_1,Q_2,Q_3$ là gì?",
    "solution": "Đáp án: $(2,4,8)$\nLời giải: $Q_2=4$; nửa trái 1,2,3 có trung vị 2; nửa phải 6,8,9 có trung vị 8.",
    "hint": "Mẫu 7 phần tử: bỏ 4 khi chia các nửa.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B13-P06",
    "lesson": "13",
    "role": "PRACTICE",
    "skill": "G10-B13-INTERPRETATION",
    "stem": "Hai nhóm $A=(6,7,8,9,10)$, $B=(6,7,8,9,30)$. So sánh số trung bình và trung vị của từng nhóm.",
    "solution": "Đáp án: $A:\\bar x=8,\\mathrm{Me}=8;\\ B:\\bar x=12,\\mathrm{Me}=8$\nLời giải: $\\bar x_A=40/5=8,\\bar x_B=60/5=12$; cả hai trung vị 8. Số trung bình bị giá trị 30 làm tăng, trung vị giữ nguyên.",
    "hint": "Cùng bốn số đầu; 10 đổi thành 30, ảnh hưởng tới tổng nhưng không đổi phần tử thứ ba.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B14-C01",
    "lesson": "14",
    "role": "CORE",
    "skill": "G10-B14-RANGE_IQR",
    "stem": "Mẫu $3,7,9$ có khoảng biến thiên là bao nhiêu?",
    "options": [
      "A. $3$",
      "B. $6$",
      "C. $7$",
      "D. $9$"
    ],
    "answerKey": "B",
    "solution": "Đáp án: $6$\nLời giải: $R=9-3=6$.",
    "hint": "Lấy số lớn nhất trừ số nhỏ nhất.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B14-C02",
    "lesson": "14",
    "role": "CORE",
    "skill": "G10-B14-VARIANCE",
    "stem": "Mẫu $1,3,5$ có phương sai (chia cho $n$, theo SGK) bằng bao nhiêu?",
    "options": [
      "A. $8$",
      "B. $4$",
      "C. $8/3$",
      "D. $2$"
    ],
    "answerKey": "C",
    "solution": "Đáp án: $8/3$\nLời giải: $s^2=[(1-3)^2+0+(5-3)^2]/3=(4+4)/3=8/3$.",
    "hint": "$\\bar x=3$; tính ba bình phương độ lệch rồi chia 3.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B14-P01",
    "lesson": "14",
    "role": "PRACTICE",
    "skill": "G10-B14-RANGE_IQR",
    "stem": "Mẫu $2,4,6,8,10$ có khoảng tứ phân vị bao nhiêu (theo cách chia nửa của KNTT)?",
    "solution": "Đáp án: $6$\nLời giải: $Q_1=(2+4)/2=3$, $Q_3=(8+10)/2=9$; $\\Delta_Q=9-3=6$.",
    "hint": "Bỏ trung vị 6; lấy trung vị hai nửa còn lại.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B14-P02",
    "lesson": "14",
    "role": "PRACTICE",
    "skill": "G10-B14-STDDEV",
    "stem": "Mẫu $1,1,5,5$. Tính phương sai và độ lệch chuẩn.",
    "solution": "Đáp án: $s^2=4,s=2$\nLời giải: $\\bar x=3$, bốn bình phương độ lệch bằng 4; $s^2=16/4=4$ và $s=2$.",
    "hint": "Mẫu có trung bình 3.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B14-P03",
    "lesson": "14",
    "role": "PRACTICE",
    "skill": "G10-B14-OUTLIERS",
    "stem": "Mẫu $1,2,2,3,3,4,4,30$. Theo hàng rào 1,5·IQR, giá trị nào bất thường?",
    "solution": "Đáp án: $30$\nLời giải: $Q_1=2,Q_3=4,\\Delta_Q=2$; ngưỡng trên 7, dưới −1. 30 lớn hơn 7 nên bất thường; số 1 không nhỏ hơn −1.",
    "hint": "Đặt hai nửa 4 số, tính $Q_1,Q_3$ rồi hàng rào trên.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B14-P04",
    "lesson": "14",
    "role": "PRACTICE",
    "skill": "G10-B14-COMPARISON",
    "stem": "$A=(5,5,8)$, $B=(2,7,9)$. Cùng trung bình 6. Nhóm nào có phương sai lớn hơn?",
    "solution": "Đáp án: B, vì $26/3>2$\nLời giải: $s_A^2=(1+1+4)/3=2$; $s_B^2=(16+1+9)/3=26/3$, nên B phân tán lớn hơn.",
    "hint": "Tính tổng bình phương khoảng cách tới trung bình 6.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B14-P05",
    "lesson": "14",
    "role": "PRACTICE",
    "skill": "G10-B14-STDDEV",
    "stem": "Độ dài (cm) của 4 vật: $5,7,7,9$. Tính phương sai và độ lệch chuẩn; ghi đúng đơn vị.",
    "solution": "Đáp án: $s^2=2\\,\\mathrm{cm}^2,\\ s=\\sqrt2\\,\\mathrm{cm}$\nLời giải: $s^2=(4+0+0+4)/4=2\\,\\mathrm{cm}^2$. $s=\\sqrt2\\,\\mathrm{cm}$. Không gán đơn vị cm² cho độ lệch chuẩn.",
    "hint": "Trung bình bằng 7 cm; khác biệt −2,0,0,2.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B14-P06",
    "lesson": "14",
    "role": "PRACTICE",
    "skill": "G10-B14-VARIANCE",
    "stem": "Mẫu $2,6,6,10$. Tính khoảng biến thiên, IQR và phương sai theo SGK.",
    "solution": "Đáp án: $R=8,\\Delta_Q=4,s^2=8$\nLời giải: $R=10-2=8$; $Q_1=4,Q_3=8$ nên IQR=4; $s^2=[16+0+0+16]/4=8$.",
    "hint": "$\\bar x=6$; nửa trái 2,6 và nửa phải 6,10.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  }
];
 const validate=()=>({valid:records.length===16&&new Set(records.map(x=>x.item_id)).size===16&&
  records.every(x=>/^THPT-G10-B(13|14)-[CP]\d{2}$/.test(x.item_id)&&x.exposure==="FORMATIVE_ONLY"&&
  (!x.options||(x.options.length===4&&/^[ABCD]$/.test(x.answerKey)) ))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(Number(lesson))&&
  (role==="core"?x.role==="CORE":x.role==="PRACTICE"));
 root.THPT_CHV_B13_B14_REVIEWED_FORMATIVE=Object.freeze({contentVersion,
  records:Object.freeze(records.map(x=>Object.freeze({...x,...(x.options?{options:Object.freeze(x.options)}:{})}))),
  validate,forLesson});
})(window);
