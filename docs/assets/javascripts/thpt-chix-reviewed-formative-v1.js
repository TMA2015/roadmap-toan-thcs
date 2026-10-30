"use strict";
/* Toán 10 KNTT ChIX B26/B27: source-locked reviewed D1-D4 public formative.
 * 14 canonical C/P/Application IDs. 2 Written kept in shared Written library.
 * No independent private Chapter/Topic Readiness or keys; no scoring/Mastery.
 * Academic scope: NotebookLM THPT-G10-CHIX-B26-B27-D1D2-D3D4-AUTHORING-20261028-R0.
 */
(function(root){
 const contentVersion="THPT-G10-CHIX-D1D4-REVIEWED-20261028-R0";
 const records=[
  {
    "item_id": "THPT-G10-B26-C01",
    "lesson": "26",
    "role": "CORE",
    "skill": "G10-B26-EXPERIMENT_SAMPLE_SPACE",
    "stem": "Tung đồng thời một đồng xu cân đối (N: ngửa, S: sấp) và một xúc xắc 6 mặt cân đối; ghi cả hai kết quả. Hãy viết dạng chung của các phần tử không gian mẫu Ω và xác định số phần tử của Ω.",
    "solution": "Đáp án: Ω={(N,k),(S,k) | k∈{1,2,3,4,5,6}}; n(Ω)=12.\nLời giải: Mỗi kết quả gồm một mặt đồng xu và một số chấm; hai lựa chọn cho đồng xu nhân sáu lựa chọn xúc xắc = 12 cặp phân biệt. Đếm (N,3) khác (S,3).",
    "hint": "Một kết quả cần đủ *hai* thành phần, không chỉ một số chấm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B26-C02",
    "lesson": "26",
    "role": "CORE",
    "skill": "G10-B26-CLASSICAL_RATIO",
    "stem": "Một vòng quay có 8 ô bằng nhau, các ô được chọn đều nhau. Có 3 ô vàng, 2 ô xanh và 3 ô hồng. Tính xác suất dừng ở ô vàng; xác suất không dừng ở ô vàng.",
    "solution": "Đáp án: P(vàng)=3/8; P(không vàng)=5/8.\nLời giải: Ω gồm 8 ô vật lí đồng khả năng, không phải 3 tên màu. Biến cố vàng gồm 3 ô; biến cố đối gồm 5 ô còn lại.",
    "hint": "Đếm ô, đừng coi mỗi tên màu là một kết quả đồng khả năng.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B26-P01",
    "lesson": "26",
    "role": "PRACTICE",
    "skill": "G10-B26-COMPLEMENT",
    "stem": "Hộp chứa 3 thẻ đỏ, 4 thẻ xanh lá, 2 thẻ xanh dương, mỗi thẻ phân biệt được khi đánh số. Lấy đều ngẫu nhiên một thẻ. Tìm xác suất không phải thẻ xanh dương.",
    "solution": "Đáp án: 7/9.\nLời giải: 9 thẻ sơ cấp đồng khả năng, có 2 thẻ xanh dương. P(không xanh dương)=1−2/9=7/9.",
    "hint": "Tính biến cố đối sẽ ngắn hơn.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B26-P02",
    "lesson": "26",
    "role": "PRACTICE",
    "skill": "G10-B26-EVENT_SUBSET",
    "stem": "Tung một đồng xu cân đối 2 lần độc lập, theo thứ tự lần 1 rồi lần 2. Hãy viết Ω và biến cố A “đúng một lần xuất hiện mặt sấp”. Tính P(A).",
    "solution": "Đáp án: Ω={NN,NS,SN,SS}; A={NS,SN}; P(A)=1/2.\nLời giải: Có 2²=4 chuỗi đồng khả năng; hai chuỗi NS và SN là những trường hợp đúng một lần sấp.",
    "hint": "NS và SN là hai kết quả khác nhau vì có thứ tự thử.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B26-P03",
    "lesson": "26",
    "role": "PRACTICE",
    "skill": "G10-B26-CLASSICAL_RATIO",
    "stem": "Chọn đều một số nguyên từ 1 đến 10. Tính xác suất số được chọn chia hết cho 2 hoặc chia hết cho 5.",
    "solution": "Đáp án: 3/5.\nLời giải: Có 10 số đồng khả năng. Các số thỏa mãn là {2,4,5,6,8,10} (số 10 chỉ đếm một lần), nên P=6/10=3/5.",
    "hint": "“Hoặc” cho phép cả hai điều kiện đồng thời; tránh đếm 10 hai lần.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B26-P04",
    "lesson": "26",
    "role": "APPLICATION",
    "skill": "G10-B26-SCOPE_SMALL_PROBABILITY",
    "stem": "Trong 1.000 phiếu đánh số phân biệt và có đúng 1 phiếu may mắn, một người rút đều ngẫu nhiên 1 phiếu. Hãy tính P(trúng) và đánh giá đúng/sai phát biểu: “Vì xác suất rất nhỏ nên không thể trúng.”",
    "solution": "Đáp án: 1/1000 = 0,001; phát biểu sai.\nLời giải: Chỉ 1/1000 kết quả thuận lợi. Xác suất dương dù rất nhỏ nên vẫn có khả năng trúng; không được đánh đồng sự kiện khó với sự kiện không thể.",
    "hint": "So sánh xác suất của biến cố không thể với một biến cố hiếm có xác suất dương.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B26-P05",
    "lesson": "26",
    "role": "PRACTICE",
    "skill": "G10-B26-SCOPE_SMALL_PROBABILITY",
    "stem": "Một vòng quay được chia thành ba vùng đỏ, vàng, xanh có diện tích khác nhau; đề bài chỉ nói kim quay ngẫu nhiên, không cho thêm mô hình xác suất hoặc tần suất thực nghiệm. Có đủ căn cứ để khẳng định P(đỏ)=1/3 không? Giải thích.",
    "solution": "Đáp án: Không đủ căn cứ.\nLời giải: Định nghĩa cổ điển P(A)=n(A)/n(Ω) chỉ áp dụng khi các kết quả sơ cấp đồng khả năng. Ba nhãn màu không chứng minh đồng khả năng; không thể mặc nhiên dùng 1/3. Ngay cả việc diện tích khác nhau cũng chưa đủ để tính xác suất nếu không biết cách kim dừng.",
    "hint": "Phân biệt “ngẫu nhiên” với “đều nhau trên các kết quả sơ cấp”.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B27-C01",
    "lesson": "27",
    "role": "CORE",
    "skill": "G10-B27-TREE_SEQUENCE",
    "stem": "Một túi có 3 thẻ phân biệt: hai thẻ đỏ R₁, R₂ và một thẻ xanh B. Rút lần lượt 2 thẻ không hoàn lại, mỗi thẻ còn trong túi có cùng khả năng được rút. Dùng sơ đồ cây hai tầng để tính xác suất hai thẻ rút ra khác màu.",
    "solution": "Đáp án: 2/3.\nLời giải: Sáu chuỗi thẻ có thứ tự đồng khả năng: (R₁,R₂), (R₁,B), (R₂,R₁), (R₂,B), (B,R₁), (B,R₂). Bốn chuỗi khác màu là (R₁,B), (R₂,B), (B,R₁), (B,R₂), nên P=4/6=2/3. Cây phải có ba nhánh lần đầu và hai nhánh tiếp nối mỗi nhánh đầu.",
    "hint": "Khi đã rút một thẻ, chỉ còn hai thẻ; đếm hai thứ tự đỏ–xanh và xanh–đỏ.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B27-C02",
    "lesson": "27",
    "role": "CORE",
    "skill": "G10-B27-COUNTING_OUTCOMES",
    "stem": "Một học sinh chọn ngẫu nhiên đều một bộ gồm 1 trong 2 áo khác nhau và 1 trong 3 chiếc mũ khác nhau. Tính xác suất bộ được chọn có áo A₁ và một trong hai mũ M₁, M₂.",
    "solution": "Đáp án: 1/3.\nLời giải: Có 2×3=6 bộ đồng khả năng; hai bộ thuận lợi (A₁,M₁), (A₁,M₂); P=2/6=1/3.",
    "hint": "Liệt kê đủ cặp áo–mũ, mỗi cặp xuất hiện đúng một lần.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B27-P01",
    "lesson": "27",
    "role": "PRACTICE",
    "skill": "G10-B27-COUNTING_OUTCOMES",
    "stem": "Trong nhóm 6 học sinh gồm 4 nữ và 2 nam, chọn đều ngẫu nhiên 2 học sinh không xét thứ tự. Tính xác suất nhóm chọn có đúng 1 nữ, 1 nam.",
    "solution": "Đáp án: 8/15.\nLời giải: Tổng số nhóm C(6,2)=15. Thuận lợi C(4,1)×C(2,1)=4×2=8. Vậy P=8/15.",
    "hint": "Tử số phân biệt chọn một từ mỗi nhóm, mẫu số chọn hai từ tất cả học sinh.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B27-P02",
    "lesson": "27",
    "role": "PRACTICE",
    "skill": "G10-B27-COMPLEMENT_PROBABILITY",
    "stem": "Có 7 thẻ phân biệt: 5 đỏ và 2 xanh, rút đồng thời đều ngẫu nhiên 3 thẻ. Tính xác suất trong 3 thẻ có ít nhất 1 thẻ xanh.",
    "solution": "Đáp án: 5/7.\nLời giải: Mọi bộ 3 thẻ có xác suất như nhau: n(Ω)=C(7,3)=35. Biến cố đối “cả 3 thẻ đều đỏ” có C(5,3)=10 bộ. Vậy P=1−10/35=25/35=5/7.",
    "hint": "Biến cố đối chỉ có một trường hợp: cả ba màu đỏ.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B27-P03",
    "lesson": "27",
    "role": "PRACTICE",
    "skill": "G10-B27-MULTISTEP_CONTEXT",
    "stem": "Một hộp có 3 thẻ đỏ và 2 thẻ xanh, các thẻ phân biệt. Rút hai thẻ lần lượt không hoàn lại; mọi chuỗi hai thẻ cụ thể có khả năng như nhau. Tính xác suất thẻ thứ nhất đỏ, thứ hai xanh.",
    "solution": "Đáp án: 3/10.\nLời giải: Mẫu gồm 5×4=20 cặp thẻ có thứ tự. Thuận lợi có 3×2=6 cặp (đỏ trước, xanh sau), P=6/20=3/10. Cũng có thể viết (3/5)×(2/4)=3/10 nếu xem theo giai đoạn.",
    "hint": "Sau lần rút đầu, thẻ không được bỏ lại vào hộp.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B27-P04",
    "lesson": "27",
    "role": "APPLICATION",
    "skill": "G10-B27-TREE_SEQUENCE",
    "stem": "Tung hai đồng xu cân đối độc lập, đồng thời gieo một xúc xắc 6 mặt cân đối; ba phép thử độc lập. Tính xác suất có đúng một mặt ngửa trong hai đồng xu và xúc xắc ra số chẵn.",
    "solution": "Đáp án: 1/4.\nLời giải: Không gian mẫu có 2×2×6=24 bộ đồng khả năng. Có 2 cách sắp xếp một mặt ngửa trong hai đồng xu và 3 số chẵn {2,4,6}, nên 2×3=6 kết quả thuận lợi. P=6/24=1/4.",
    "hint": "Đếm từng nhóm điều kiện độc lập, rồi nhân số kết quả thuận lợi.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B27-P05",
    "lesson": "27",
    "role": "PRACTICE",
    "skill": "G10-B27-EQUIPROBABLE_MODELLING",
    "stem": "Gieo hai xúc xắc 6 mặt cân đối phân biệt. Một bạn đếm 21 cặp không có thứ tự {i,j} với 1≤i≤j≤6 và kết luận P(tổng bằng 3)=1/21. Hỏi cách tính đó có đúng không? Tính xác suất chính xác.",
    "solution": "Đáp án: Cách tính sai; xác suất đúng 1/18.\nLời giải: Các cặp không thứ tự {i,j} không có cùng xác suất: {1,2} ứng với hai cặp có thứ tự (1,2),(2,1), nhưng {1,1} chỉ ứng với (1,1). Cần dùng Ω là 36 cặp có thứ tự đồng khả năng. Tổng bằng 3 chỉ có (1,2),(2,1); P=2/36=1/18.",
    "hint": "Kiểm tra xem {1,1} và {1,2} có cùng số cách xuất hiện hay không.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  }
];
 const validate=()=>({valid:records.length===14&&new Set(records.map(x=>x.item_id)).size===14&&
  records.every(x=>/^THPT-G10-B2[67]-(C|P)\d\d$/.test(x.item_id)&&
   /^G10-B2[67]-/.test(x.skill)&&x.stem.length>16&&x.solution.length>15&&x.hint.length>5&&
   x.exposure==="FORMATIVE_ONLY"&&!/READINESS|-(?:RD|R)\d\d\b/.test(x.item_id))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(lesson)&&(
   role==="core"?x.role==="CORE":["PRACTICE","APPLICATION"].includes(x.role)));
 root.THPT_CHIX_REVIEWED_FORMATIVE=Object.freeze({
  contentVersion,records:Object.freeze(records.map(x=>Object.freeze(x))),validate,forLesson
 });
})(window);
