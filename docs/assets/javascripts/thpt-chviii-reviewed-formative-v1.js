"use strict";
/* G10 ChVIII exact reviewer-scoped public FORMATIVE bank.
 * 18 original Core/Practice/Application + six advanced + B25-P07 reviewed delta.
 * 25 UNIQUE canonical IDs. No private Readiness, no learner score or Mastery.
 * Source overlays B25-P02/P05 optional support, B25-P06 optional specialist.
 * Review grants NO whole-chapter release clearance.
 */
(function(root){
 const contentVersion="THPT-G10-CHVIII-D3D4-R01-PLUS-P07-DELTA-20261028";
 const records=[
  {
    "item_id": "THPT-G10-B23-C01",
    "lesson": "23",
    "role": "CORE",
    "skill": "COUNT_ADDITION",
    "stem": "Một cửa hàng có 4 loại bút mực và 3 loại bút chì khác nhau. Chọn đúng một cây bút. Có bao nhiêu cách chọn?",
    "solution": "Đáp án: 7 cách\nLời giải: Hai loại lựa chọn loại trừ nhau nên áp dụng quy tắc cộng: 4+3=7.",
    "hint": "Chọn một trong hai nhóm, không chọn cả hai.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B23-C02",
    "lesson": "23",
    "role": "CORE",
    "skill": "COUNT_MULTIPLICATION",
    "stem": "Có 3 áo khác màu và 2 quần khác màu. Mỗi bộ gồm đúng một áo và một quần. Có bao nhiêu bộ?",
    "solution": "Đáp án: 6 bộ\nLời giải: Mỗi lựa chọn áo kết hợp được với 2 quần: 3×2=6.",
    "hint": "Hai bước lựa chọn diễn ra liên tiếp.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B23-P01",
    "lesson": "23",
    "role": "PRACTICE",
    "skill": "COUNT_REPETITION",
    "stem": "Mã gồm hai chữ cái lấy từ {A,B,C}, được lặp, tiếp theo một chữ số từ 0 đến 9. Có bao nhiêu mã?",
    "solution": "Đáp án: 90 mã\nLời giải: Có 3×3×10=90 mã; mỗi vị trí là một bước độc lập, có lặp chữ cái.",
    "hint": "Chú ý điều kiện được lặp.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B23-P02",
    "lesson": "23",
    "role": "PRACTICE",
    "skill": "COUNT_PRODUCT_PATH",
    "stem": "Từ A đến B có 3 tuyến đường, từ B đến C có 4 tuyến. Mọi hành trình A→C bắt buộc qua B và chọn một tuyến ở mỗi đoạn. Có bao nhiêu hành trình?",
    "solution": "Đáp án: 12 hành trình\nLời giải: Quy tắc nhân cho hai chặng: 3×4=12.",
    "hint": "Mỗi tuyến đoạn đầu ghép được với tất cả tuyến đoạn sau.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B23-P03",
    "lesson": "23",
    "role": "PRACTICE",
    "skill": "COUNT_DISJOINT_OPTIONS",
    "stem": "Học sinh chọn tham gia đúng một câu lạc bộ: 5 CLB khoa học hoặc 4 CLB thể thao, danh sách hai nhóm không trùng nhau. Có bao nhiêu cách?",
    "solution": "Đáp án: 9 cách\nLời giải: Hai nhóm lựa chọn rời nhau, cộng 5+4=9.",
    "hint": "Không nhân vì chỉ tham gia một CLB.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B23-P04",
    "lesson": "23",
    "role": "APPLICATION",
    "skill": "COUNT_MENU",
    "stem": "Một thực đơn có 2 món khai vị, 3 món chính, 2 món tráng miệng. Suất ăn gồm đúng một món mỗi nhóm. Có bao nhiêu thực đơn khác nhau?",
    "solution": "Đáp án: 12 thực đơn\nLời giải: Quy tắc nhân ba bước: 2×3×2=12.",
    "hint": "Xác định rõ mỗi bước là chọn một món thuộc một nhóm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B24-C01",
    "lesson": "24",
    "role": "CORE",
    "skill": "PERMUTATION",
    "stem": "Có 5 người khác nhau đứng thành một hàng. Có bao nhiêu thứ tự xếp?",
    "solution": "Đáp án: 120 cách\nLời giải: Số hoán vị \\(5!=120\\).",
    "hint": "Sắp xếp tất cả phần tử, xét thứ tự.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B24-C02",
    "lesson": "24",
    "role": "CORE",
    "skill": "ARRANGEMENT",
    "stem": "Từ 7 học sinh khác nhau, chọn 3 người vào ba vị trí có tên A, B, C. Có bao nhiêu cách?",
    "solution": "Đáp án: 210 cách\nLời giải: Chỉnh hợp chập 3 của 7: \\(A_7^3=7\\cdot6\\cdot5=210\\).",
    "hint": "Vai trò A/B/C khác nhau nên thứ tự quan trọng.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B24-P01",
    "lesson": "24",
    "role": "PRACTICE",
    "skill": "COMBINATION",
    "stem": "Chọn một nhóm gồm 3 học sinh từ 8 học sinh khác nhau, không phân vai. Có bao nhiêu nhóm?",
    "solution": "Đáp án: 56 nhóm\nLời giải: \\(\\binom83=\\frac{8\\cdot7\\cdot6}{3\\cdot2\\cdot1}=56\\).",
    "hint": "Nhóm không phân biệt thứ tự.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B24-P02",
    "lesson": "24",
    "role": "PRACTICE",
    "skill": "ARRANGEMENT_WITH_ROLES",
    "stem": "Một lớp có 6 ứng viên, chọn một lớp trưởng và một lớp phó (hai người khác nhau). Có bao nhiêu cách?",
    "solution": "Đáp án: 30 cách\nLời giải: Có 6 lựa chọn lớp trưởng, sau đó 5 lựa chọn lớp phó: 6×5=30.",
    "hint": "Hai chức danh phân biệt nên không dùng tổ hợp.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B24-P03",
    "lesson": "24",
    "role": "PRACTICE",
    "skill": "PERMUTATION_LETTERS",
    "stem": "Các chữ T, O, A, N khác nhau được sắp thành một dãy 4 chữ. Có bao nhiêu dãy?",
    "solution": "Đáp án: 24 dãy\nLời giải: Hoán vị của 4 chữ khác nhau: \\(4!=24\\).",
    "hint": "Không có chữ nào trùng nhau.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B24-P04",
    "lesson": "24",
    "role": "APPLICATION",
    "skill": "COMBINATION_TWO_GROUPS",
    "stem": "Chọn đội gồm 2 bạn nữ từ 5 nữ và 3 bạn nam từ 7 nam, không phân vai. Có bao nhiêu đội?",
    "solution": "Đáp án: 350 đội\nLời giải: \\(\\binom52\\binom73=10\\cdot35=350\\).",
    "hint": "Trong mỗi nhóm chọn không thứ tự; giữa hai nhóm dùng nhân.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B25-C01",
    "lesson": "25",
    "role": "CORE",
    "skill": "BINOMIAL_COEFFICIENT",
    "stem": "Hệ số của \\(a^2b^2\\) trong \\((a+b)^4\\) là bao nhiêu?",
    "solution": "Đáp án: 6\nLời giải: Trong khai triển Newton, hệ số là \\(\\binom42=6\\).",
    "hint": "Xác định số lần chọn b bằng 2.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B25-C02",
    "lesson": "25",
    "role": "CORE",
    "skill": "BINOMIAL_X_POWER",
    "stem": "Hệ số của \\(x^2\\) trong \\((1+x)^5\\) bằng bao nhiêu?",
    "solution": "Đáp án: 10\nLời giải: \\(\\binom52=10\\).",
    "hint": "Dùng hệ số ở số hạng bậc hai.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B25-P01",
    "lesson": "25",
    "role": "PRACTICE",
    "skill": "BINOMIAL_NEGATIVE_COEFF",
    "stem": "Tìm hệ số của \\(x^3\\) trong \\((2x-1)^4\\).",
    "solution": "Đáp án: -32\nLời giải: Chọn 3 lần \\(2x\\), một lần \\(-1\\): \\(\\binom43(2)^3(-1)=-32\\).",
    "hint": "Giữ dấu trừ của số hạng không chứa x.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B25-P02",
    "lesson": "25",
    "role": "SUPPORT_EXTENSION",
    "skill": "BINOMIAL_CONSTANT_TERM",
    "stem": "Tìm số hạng không chứa \\(x\\) trong \\((x+1/x)^6\\) với \\(x\\ne0\\).",
    "solution": "Đáp án: 20\nLời giải: Số hạng thứ \\(k+1\\) có lũy thừa \\(x^{6-2k}\\). Bằng \\(x^0\\) khi \\(k=3\\), hệ số \\(\\binom63=20\\).",
    "hint": "Chọn k để số mũ x bằng 0.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B25-P03",
    "lesson": "25",
    "role": "PRACTICE",
    "skill": "BINOMIAL_COMPOSITE_COEFF",
    "stem": "Tìm hệ số của \\(x^2\\) trong \\((1+3x)^4\\).",
    "solution": "Đáp án: 54\nLời giải: \\(\\binom42(3)^2=6\\cdot9=54\\).",
    "hint": "Nhân thêm hệ số 3 tương ứng số mũ 2.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B25-P04",
    "lesson": "25",
    "role": "APPLICATION",
    "skill": "BINOMIAL_SECOND_HIGHEST",
    "stem": "Tìm hệ số của \\(x^4\\) trong \\((x-2)^5\\).",
    "solution": "Đáp án: -10\nLời giải: Lấy 4 thừa số x và 1 thừa số \\(-2\\): \\(\\binom51(-2)=-10\\).",
    "hint": "Bậc 4 chỉ thiếu một thừa số x.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASE"
  },
  {
    "item_id": "THPT-G10-B23-P05",
    "lesson": "23",
    "role": "PRACTICE",
    "skill": "COUNT_CASES_NO_REPEAT",
    "stem": "Từ các chữ số \\(0,1,2,3,4\\), lập số tự nhiên có ba chữ số khác nhau và là số chẵn. Có bao nhiêu số?",
    "solution": "Đáp án: \\(30\\) số.\nLời giải: Chia hai trường hợp rời nhau. (i) Hàng đơn vị bằng 0: hàng trăm có 4 lựa chọn, hàng chục còn 3, được \\(4\\cdot3=12\\). (ii) Hàng đơn vị là 2 hoặc 4: có 2 lựa chọn; hàng trăm chọn trong ba chữ số khác 0 và khác chữ số đơn vị; hàng chục còn 3 lựa chọn (có thể là 0). Được \\(2\\cdot3\\cdot3=18\\). Tổng \\(12+18=30\\).",
    "hint": "Tách trường hợp chữ số hàng đơn vị bằng 0 và khác 0.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B23-P06",
    "lesson": "23",
    "role": "PRACTICE",
    "skill": "COUNT_MIXED_SUM_PRODUCT",
    "stem": "Một khách có thể chọn đúng một cách đi lại: 3 tuyến xe đạp khác nhau hoặc 2 tuyến xe buýt khác nhau. Nếu đi xe buýt, mỗi tuyến có 2 loại vé. Nếu đi xe đạp thì không chọn vé. Có bao nhiêu phương án hoàn chỉnh?",
    "solution": "Đáp án: \\(7\\) phương án.\nLời giải: Phương án xe đạp: 3. Phương án xe buýt: \\(2\\) tuyến nhân \\(2\\) loại vé bằng \\(4\\). Hai nhóm lựa chọn loại trừ nhau, tổng \\(3+4=7\\).",
    "hint": "Nhân trong từng nhánh nhiều bước, cộng giữa các nhánh loại trừ nhau.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B24-P05",
    "lesson": "24",
    "role": "PRACTICE",
    "skill": "COMBINATION_AT_LEAST_ONE",
    "stem": "Chọn nhóm 3 người từ 6 người khác nhau, trong đó có hai người được chỉ định A và B. Có bao nhiêu nhóm chứa ít nhất một trong hai người A, B?",
    "solution": "Đáp án: \\(16\\) nhóm.\nLời giải: Tổng số nhóm \\(\\binom63=20\\). Nhóm không có A lẫn B chỉ chọn 3 trong 4 người còn lại: \\(\\binom43=4\\). Vậy \\(20-4=16\\).",
    "hint": "Dùng biến cố đối: tất cả nhóm trừ nhóm không chứa cả A lẫn B.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B24-P06",
    "lesson": "24",
    "role": "PRACTICE",
    "skill": "PERMUTATION_ADJACENT",
    "stem": "Xếp 5 học sinh khác nhau thành một hàng, biết hai bạn A và B phải đứng cạnh nhau. Có bao nhiêu cách?",
    "solution": "Đáp án: \\(48\\) cách.\nLời giải: Gộp A và B thành một khối, cùng 3 học sinh còn lại là 4 đối tượng phân biệt, có \\(4!=24\\) cách. Trong khối A/B có 2 thứ tự, tổng \\(24\\cdot2=48\\).",
    "hint": "Gộp cặp phải đứng cạnh nhau thành một khối, rồi tính thứ tự trong khối.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B25-P05",
    "lesson": "25",
    "role": "SUPPORT_EXTENSION",
    "skill": "BINOMIAL_COEFF_NEGATIVE",
    "stem": "Tìm hệ số của \\(x^3\\) trong \\((2-x)^6\\).",
    "solution": "Đáp án: \\(-160\\).\nLời giải: Chọn 3 thừa số \\((-x)\\) và 3 thừa số \\(2\\): hệ số \\(\\binom63(-1)^3 2^3=20\\cdot(-1)\\cdot8=-160\\).",
    "hint": "Dấu của ((-x)^3) là âm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B25-P06",
    "lesson": "25",
    "role": "OPTIONAL_SPECIALIZED",
    "skill": "BINOMIAL_ODD_COEFF_SUM",
    "stem": "Tính tổng các hệ số của những số hạng có số mũ lẻ của \\(x\\) trong khai triển \\((1+x)^7\\).",
    "solution": "Đáp án: \\(64\\).\nLời giải: Đặt \\(f(x)=(1+x)^7\\). Tổng hệ số bậc chẵn trừ tổng hệ số bậc lẻ là \\(f(-1)=0\\); tổng tất cả hệ số là \\(f(1)=2^7=128\\). Vậy tổng hệ số bậc lẻ bằng \\((128-0)/2=64\\).",
    "hint": "Thử thay x=1 và x=-1 để tách hệ số bậc chẵn/lẻ.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B25-P07",
    "lesson": "25",
    "role": "PRACTICE",
    "skill": "G10-B25-CONSTANT_TERM",
    "stem": "Trong khai triển nhị thức \\((4x-3)^5\\), hãy tìm số hạng không chứa \\(x\\) mà không cần khai triển toàn bộ. Giải thích vì sao chỉ có đúng một số hạng như vậy.",
    "solution": "Đáp án: \\(-243\\), tức số hạng tự do bằng \\(-243\\) (không phải số mũ hoặc hệ số đi kèm \\(x\\)).\nLời giải: Theo nhị thức Newton, số hạng tương ứng với chọn \\(k\\) thừa số \\(4x\\) là\n\\[\nT_k=\\binom{5}{k}(4x)^k(-3)^{5-k},\\qquad k=0,1,2,3,4,5.\n\\]\nSố mũ của \\(x\\) bằng \\(k\\); vì \\(k\\geq 0\\), điều kiện số hạng không chứa \\(x\\) là \\(k=0\\), và đây là giá trị duy nhất. Số hạng tự do:\n\\[\nT_0=\\binom50 (4x)^0 (-3)^5=\\boxed{-243}.\n\\]",
    "hint": "Trong \\((4x-3)^5\\), số hạng không có \\(x\\) xuất hiện khi không chọn thừa số nào chứa \\(x\\).",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "CORE_LEVEL"
  }
];
 const allowed=new Set(records.map(x=>x.item_id));
 const validate=()=>({valid:records.length===25&&allowed.size===25&&
   records.every(x=>/^THPT-G10-B2[345]-(C|P)\d\d$/.test(x.item_id)&&
   x.stem.length>15&&x.solution.length>15&&x.hint.length>5&&
   x.exposure==="FORMATIVE_ONLY"&&!/READINESS|-(?:RD|R)\d\d\b/.test(x.item_id))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(lesson)&&(
   role==="core"?x.role==="CORE":
   ["PRACTICE","APPLICATION","SUPPORT_EXTENSION","OPTIONAL_SPECIALIZED"].includes(x.role)))
   .sort((a,b)=>({PRACTICE:0,APPLICATION:0,SUPPORT_EXTENSION:1,OPTIONAL_SPECIALIZED:2}[a.role]||0)-({PRACTICE:0,APPLICATION:0,SUPPORT_EXTENSION:1,OPTIONAL_SPECIALIZED:2}[b.role]||0));
 root.THPT_CHVIII_REVIEWED_FORMATIVE=Object.freeze({
   contentVersion,records:Object.freeze(records.map(x=>Object.freeze(x))),validate,forLesson
 });
})(window);
