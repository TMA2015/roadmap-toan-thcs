"use strict";
/* G10 ChII B03/B04: exact source acea9776d1c7534a4cd0cd28e98db26dedf0c122; 16 reviewed MCQ formative items, no Readiness or Mastery. */
(function(root){const contentVersion="THPT-G10-CHII-R01";
 const records=[
  {
    "item_id": "THPT-G10-B03-C01",
    "lesson": "3",
    "role": "CORE",
    "skill": "G10-B03-LINEAR_INEQUALITY",
    "stem": "Biểu thức nào sau đây là bất phương trình bậc nhất hai ẩn?",
    "options": [
      "A. 2x²+y≤3",
      "B. 0x−3y>1",
      "C. xy<2",
      "D. 0x+0y≤2"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B.\nLời giải: 0x−3y>1 đúng dạng ax+by>c với (a,b)=(0,−3) ≠ (0,0). Các lựa chọn khác bậc cao hoặc hệ số x,y đồng thời bằng 0.",
    "hint": "Kiểm tra bậc và yêu cầu hệ số của x,y không đồng thời bằng 0.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B03-C02",
    "lesson": "3",
    "role": "CORE",
    "skill": "G10-B03-POINT_TEST",
    "stem": "Cặp (2,−1) có là nghiệm của 2x−y≤5 hay không?",
    "options": [
      "A. Có, vì vế trái bằng 5",
      "B. Không, vì vế trái bằng 5",
      "C. Có, vì vế trái bằng 3",
      "D. Không, vì y âm"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A.\nLời giải: 2·2−(−1)=5, thỏa 5≤5. Dấu bằng được lấy.",
    "hint": "Thay nguyên cặp có dấu âm vào vế trái.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B03-P01",
    "lesson": "3",
    "role": "PRACTICE",
    "skill": "G10-B03-BOUNDARY",
    "stem": "Đường biên của x+3y≥6 được xử lí thế nào?",
    "options": [
      "A. Không lấy đường thẳng x+3y=6",
      "B. Lấy đường thẳng x+3y=6",
      "C. Chỉ lấy hai giao điểm với trục",
      "D. Lấy toàn mặt phẳng"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B.\nLời giải: Biên x+3y=6 thuộc miền nghiệm của x+3y≥6 vì các cặp trên biên làm hai vế bằng nhau.",
    "hint": "Dấu ≥ có nhận dấu bằng.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B03-P02",
    "lesson": "3",
    "role": "PRACTICE",
    "skill": "G10-B03-HALFPLANE",
    "stem": "Miền nghiệm của 3x−y<2 nằm ở đâu so với y=3x−2?",
    "options": [
      "A. Trên đường thẳng, không gồm biên",
      "B. Dưới đường thẳng, không gồm biên",
      "C. Trên đường thẳng, gồm biên",
      "D. Dưới đường thẳng, gồm biên"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A.\nLời giải: 3x−y<2 ⇔ −y<2−3x ⇔ y>3x−2. Nằm phía trên đường biên nét đứt, không lấy biên.",
    "hint": "Nhân với −1 khi chuyển −y sang một vế và nhớ đảo chiều.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B03-P03",
    "lesson": "3",
    "role": "PRACTICE",
    "skill": "G10-B03-POINT_TEST",
    "stem": "Khi vẽ 2x+y≥0, kết luận nào đúng về điểm thử O(0,0)?",
    "options": [
      "A. O hợp lệ để xác định phía vì thỏa bất phương trình",
      "B. O không hợp lệ vì nằm trên đường biên",
      "C. O không hợp lệ vì y=0",
      "D. Không cần đường biên"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B.\nLời giải: O nằm trên đường 2x+y=0 nên không giúp chọn một phía. Có thể dùng (1,0): 2>0, phía chứa (1,0) thỏa ≥.",
    "hint": "Tính 2·0+0 và so với vế phải của phương trình đường biên.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B03-P04",
    "lesson": "3",
    "role": "PRACTICE",
    "skill": "G10-B03-MODELING",
    "stem": "Rạp bán vé loại A 60 nghìn đồng/vé (x vé), loại B 90 nghìn đồng/vé (y vé). Để thu ít nhất 18 triệu đồng, điều kiện nào đúng?",
    "options": [
      "A. 2x+3y≥600, x,y là số nguyên không âm",
      "B. 2x+3y≤600, x,y là số nguyên không âm",
      "C. 3x+2y≥600, x,y số thực bất kỳ",
      "D. x+y≥200, không cần điều kiện nguyên"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A.\nLời giải: 60x+90y≥18 000 ⇔ 2x+3y≥600, đồng thời x,y∈Z≥0. Chỉ số tiền không quyết định tính nguyên và không âm.",
    "hint": "Đổi 18 triệu thành 18 000 nghìn và nhớ số vé là số nguyên.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B03-P05",
    "lesson": "3",
    "role": "PRACTICE",
    "skill": "G10-B03-HALFPLANE",
    "stem": "Điểm nào chắc chắn nằm trong miền nghiệm 2x+3y>0?",
    "options": [
      "A. (0,0)",
      "B. (−3,2)",
      "C. (0,1)",
      "D. (3,−2)"
    ],
    "answerKey": "C",
    "solution": "Đáp án: C.\nLời giải: Tại (0,1) biểu thức bằng 3>0. Tại (0,0), (−3,2), (3,−2) bằng 0 nên đều nằm trên biên và không thỏa dấu >.",
    "hint": "Thay từng cặp vào 2x+3y; cần lớn hơn 0 thực sự.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B03-P06",
    "lesson": "3",
    "role": "PRACTICE",
    "skill": "G10-B03-MODELING",
    "stem": "Cửa hàng mua x thùng loại A giá 35 nghìn/thùng, y thùng loại B giá 20 nghìn/thùng, ngân sách không quá 700 nghìn; x,y∈Z≥0. Cặp nào khả thi?",
    "options": [
      "A. (10,15)",
      "B. (15,10)",
      "C. (20,1)",
      "D. (0,36)"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A.\nLời giải: (10,15): 350+300=650≤700; (15,10):725; (20,1):720; (0,36):720 đều vượt 700.",
    "hint": "Tính 35x+20y rồi so với 700.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B04-C01",
    "lesson": "4",
    "role": "CORE",
    "skill": "G10-B04-SYSTEM",
    "stem": "Cặp nào thỏa đồng thời x≥0, y≥0 và x+y≤5?",
    "options": [
      "A. (2,3)",
      "B. (4,2)",
      "C. (−1,4)",
      "D. (3,3)"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A.\nLời giải: (2,3) không âm và có tổng 5≤5; B/D tổng 6>5; C có x<0.",
    "hint": "Một nghiệm hệ phải qua mọi bất phương trình, không chỉ một.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B04-C02",
    "lesson": "4",
    "role": "CORE",
    "skill": "G10-B04-REGION_INTERSECTION",
    "stem": "Miền nghiệm của hệ x≥0, y≥0, x+y≤4 là hình nào?",
    "options": [
      "A. Tam giác kín có đỉnh (0,0),(4,0),(0,4)",
      "B. Nửa mặt phẳng x+y≤4",
      "C. Mọi điểm góc phần tư thứ nhất",
      "D. Tam giác mở không lấy ba cạnh"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A.\nLời giải: Ba điều kiện xác định tam giác kín gồm hai đoạn trên trục không âm và đoạn x+y=4, vì các dấu đều không nghiêm ngặt.",
    "hint": "Lấy giao cả ba điều kiện, không chỉ một điều kiện.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B04-P01",
    "lesson": "4",
    "role": "PRACTICE",
    "skill": "G10-B04-REGION_INTERSECTION",
    "stem": "Cho hệ x≥0, y≥0, x+y≤7, 2x+y≤10. Trong các điểm sau, điểm nào thuộc miền nghiệm?",
    "options": [
      "A. (3,4)",
      "B. (5,3)",
      "C. (−1,3)",
      "D. (6,0)"
    ],
    "answerKey": "A",
    "solution": "Đáp án: A.\nLời giải: (3,4): 3+4=7≤7 và 2·3+4=10≤10. (5,3): 8>7; C âm x; (6,0): 12>10.",
    "hint": "Kiểm hai ràng buộc đường chéo và x,y không âm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B04-P02",
    "lesson": "4",
    "role": "PRACTICE",
    "skill": "G10-B04-LINEAR_OBJECTIVE",
    "stem": "Trên miền x≥0, y≥0, x+y≤7, 2x+y≤10, giá trị lớn nhất của F=4x+3y là bao nhiêu?",
    "options": [
      "A. 20",
      "B. 21",
      "C. 24",
      "D. 28"
    ],
    "answerKey": "C",
    "solution": "Đáp án: C.\nLời giải: Các đỉnh (0,0),(5,0),(3,4),(0,7). F lần lượt 0,20,24,21. Cực đại 24 tại (3,4).",
    "hint": "Xác định các đỉnh và tính F tại từng đỉnh.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B04-P03",
    "lesson": "4",
    "role": "PRACTICE",
    "skill": "G10-B04-LINEAR_OBJECTIVE",
    "stem": "Cho x≥0, y≥0, x+y≤8; tối đa hóa F=x+y. Mệnh đề nào đúng?",
    "options": [
      "A. Chỉ (8,0) tối ưu",
      "B. Chỉ (0,8) tối ưu",
      "C. Mọi điểm của cạnh x+y=8 trong góc phần tư I đều tối ưu",
      "D. Không tồn tại giá trị lớn nhất"
    ],
    "answerKey": "C",
    "solution": "Đáp án: C.\nLời giải: F≤8, đạt bằng 8 tại mọi điểm không âm trên cạnh nối (8,0) và (0,8); có vô số nghiệm tối ưu.",
    "hint": "Hàm mục tiêu không đổi trên đường thẳng x+y=8.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B04-P04",
    "lesson": "4",
    "role": "PRACTICE",
    "skill": "G10-B04-FEASIBILITY",
    "stem": "Hệ x+y≤2 và x+y≥5 có miền nghiệm như thế nào?",
    "options": [
      "A. Miền nghiệm là giao của hai đường thẳng",
      "B. Vô nghiệm",
      "C. Có nghiệm (0,0)",
      "D. Miền nghiệm là toàn mặt phẳng"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B.\nLời giải: Không có t thực vừa ≤2 vừa ≥5, do đó hệ không có điểm thỏa mãn.",
    "hint": "Đặt t=x+y và xét đồng thời hai bất đẳng thức.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B04-P05",
    "lesson": "4",
    "role": "PRACTICE",
    "skill": "G10-B04-FEASIBILITY",
    "stem": "Với miền x≥0, y≥0 không bị chặn, F=−x−y có đặc điểm nào?",
    "options": [
      "A. Không có cực đại vì miền không bị chặn",
      "B. Cực đại bằng 0 tại (0,0), không có cực tiểu hữu hạn",
      "C. Cực tiểu bằng 0 tại (0,0)",
      "D. Cả cực đại và cực tiểu đều bằng 0"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B.\nLời giải: Vì x+y≥0, F=−x−y≤0; tại (0,0), F=0 là giá trị lớn nhất. Cho x→∞, F→−∞ nên không có giá trị nhỏ nhất hữu hạn.",
    "hint": "F≤0; cho x tăng không hạn chế để xét giá trị nhỏ nhất.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_APPLY"
  },
  {
    "item_id": "THPT-G10-B04-P06",
    "lesson": "4",
    "role": "PRACTICE",
    "skill": "G10-B04-INTEGER_MODELS",
    "stem": "Với x,y là số nguyên không âm, x+2y≤5, 2x+y≤5, giá trị lớn nhất của 3x+2y là bao nhiêu?",
    "options": [
      "A. 7",
      "B. 8",
      "C. 25/3",
      "D. 9"
    ],
    "answerKey": "B",
    "solution": "Đáp án: B.\nLời giải: Từ 2x+y≤5 suy ra x=0,1,2. Nếu x=0 thì y≤2, F≤4; x=1 thì y≤2, F≤7; x=2 thì y≤1, F≤8, đạt tại (2,1). Bài toán liên tục tại giao x=y=5/3 cho F=25/3>8 nhưng không nguyên.",
    "hint": "Đỉnh tối ưu của bài toán liên tục có thể có tọa độ phân số. Xét x nguyên 0,1,2 và chọn y nguyên phù hợp.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  }
];
 const validate=()=>({valid:records.length===16&&new Set(records.map(x=>x.item_id)).size===16&&records.every(x=>/^THPT-G10-B0[34]-[CP]\d{2}$/.test(x.item_id)&&x.exposure==="FORMATIVE_ONLY"&&x.options.length===4&&/^[ABCD]$/.test(x.answerKey))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(Number(lesson))&&(role==="core"?x.role==="CORE":x.role==="PRACTICE"));
 root.THPT_CHII_REVIEWED_FORMATIVE=Object.freeze({contentVersion,records:Object.freeze(records.map(x=>Object.freeze({...x,options:Object.freeze(x.options)}))),validate,forLesson});
})(window);
