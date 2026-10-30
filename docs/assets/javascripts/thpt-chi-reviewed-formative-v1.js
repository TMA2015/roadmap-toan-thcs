"use strict";
/* Source-locked R01 G10 ChI B01/B02, Academic PASS exact source blob 95a554e31a613b8e215679fe6790738473d598df.
 * 16 canonical public formative C/P; 2 Written in shared library. No Readiness/Mastery.
 */
(function(root){
 const contentVersion="THPT-G10-CHI-B01B02-D1D6-R01";
 const records=[
  {
    "item_id": "THPT-G10-B01-C01",
    "lesson": "1",
    "role": "CORE",
    "skill": "G10-B01-PROPOSITION",
    "stem": "Xét hai câu: (a) “9 là số chính phương”; (b) “x + 1 = 3”. Câu nào là mệnh đề, và giá trị đúng/sai?",
    "solution": "Đáp án: (a) là mệnh đề đúng; (b) là mệnh đề chứa biến, chưa có giá trị chân lý khi chưa quy định x.\nLời giải: 9=3²; câu x+1=3 đúng khi x=2 và sai khi x khác 2 nên chưa là một mệnh đề xác định nếu không gán biến.",
    "hint": "Tìm xem câu đã xác định đúng/sai hay còn phụ thuộc biến.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B01-C02",
    "lesson": "1",
    "role": "CORE",
    "skill": "G10-B01-NEGATION",
    "stem": "Phủ định của P: “15 chia hết cho 4” là gì? Xét giá trị đúng/sai của P và phủ định.",
    "solution": "Đáp án: “15 không chia hết cho 4”; P sai, phủ định đúng.\nLời giải: 15 chia 4 dư 3 nên P sai; phủ định của P đúng.",
    "hint": "Phủ định thay bằng “không”, không thay 15 bằng số khác.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B01-P01",
    "lesson": "1",
    "role": "PRACTICE",
    "skill": "G10-B01-QUANTIFIERS",
    "stem": "Xác định đúng/sai của “Với mọi số thực x, x² + 1 > 0”.",
    "solution": "Đáp án: Đúng.\nLời giải: Với mọi x∈ℝ, x²≥0 nên x²+1≥1>0.",
    "hint": "Với số thực, bình phương luôn không âm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B01-P02",
    "lesson": "1",
    "role": "PRACTICE",
    "skill": "G10-B01-QUANTIFIERS",
    "stem": "Xác định đúng/sai của “Tồn tại số nguyên n sao cho n²=2”. Viết phủ định bằng lượng từ.",
    "solution": "Đáp án: Sai; phủ định đúng: “Với mọi số nguyên n, n²≠2”.\nLời giải: Không có số nguyên có bình phương bằng 2; đổi ∃ thành ∀ và = thành ≠ để phủ định.",
    "hint": "Bình phương số nguyên kẹp giữa 1 và 4 như thế nào?",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B01-P03",
    "lesson": "1",
    "role": "PRACTICE",
    "skill": "G10-B01-IMPLICATION",
    "stem": "Xét mệnh đề với n∈ℤ: “Nếu n chia hết cho 6 thì n chia hết cho 3”. Mệnh đề đúng không? Mệnh đề đảo đúng không?",
    "solution": "Đáp án: Mệnh đề đúng; mệnh đề đảo sai (n=3).\nLời giải: Nếu n=6k=3(2k) nên chia hết cho 3. Đảo “chia hết cho 3 ⇒ chia hết cho 6” sai vì n=3.",
    "hint": "Từ n=6k hãy suy ra bội của 3. Đảo chỉ cần một phản ví dụ.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B01-P04",
    "lesson": "1",
    "role": "PRACTICE",
    "skill": "G10-B01-EQUIVALENCE",
    "stem": "Với n∈ℤ, xét “n chẵn khi và chỉ khi n² chẵn”. Đúng hay sai?",
    "solution": "Đáp án: Đúng.\nLời giải: Nếu n=2k thì n²=4k² chẵn; nếu n lẻ, n² lẻ, nên n² chẵn buộc n chẵn.",
    "hint": "Cần kiểm cả chiều thuận và chiều đảo; ở chiều đảo dùng phản chứng khi n lẻ.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B01-P05",
    "lesson": "1",
    "role": "PRACTICE",
    "skill": "G10-B01-NEGATION",
    "stem": "Phủ định của Q: “Với mọi x∈ℝ, x²≥0” là gì? Đúng hay sai?",
    "solution": "Đáp án: “Tồn tại x∈ℝ sao cho x²<0”; mệnh đề phủ định sai.\nLời giải: Với mọi x thực, x²≥0. Vậy không có x thực có bình phương âm, phủ định sai.",
    "hint": "Phủ định ∀ là ∃, phủ định ≥ là <.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B01-P06",
    "lesson": "1",
    "role": "PRACTICE",
    "skill": "G10-B01-IMPLICATION",
    "stem": "Gọi P: “2>3”, Q: “5<4”. Xác định giá trị đúng/sai của P⇒Q và giải thích theo quy ước mệnh đề kéo theo.",
    "solution": "Đáp án: P⇒Q đúng theo bảng giá trị chân lý (P sai, Q sai).\nLời giải: P sai vì 2<3, Q sai vì 5>4. Kéo theo với tiền đề sai là đúng theo quy ước logic.",
    "hint": "P⇒Q chỉ sai khi P đúng và Q sai.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B02-C01",
    "lesson": "2",
    "role": "CORE",
    "skill": "G10-B02-MEMBERSHIP_SUBSET",
    "stem": "Cho A={1,2}, B={1,2,3}. Xác định 2∈A và A⊆B đúng/sai; phân biệt hai ký hiệu.",
    "solution": "Đáp án: Cả hai đúng; ∈ nối phần tử và tập, ⊆ nối hai tập.\nLời giải: 2 là thành viên A; mọi phần tử của A đều trong B nên A⊆B. Không viết A∈B khi B chỉ chứa các số.",
    "hint": "Phần tử là số 2, còn A là một tập.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B02-C02",
    "lesson": "2",
    "role": "CORE",
    "skill": "G10-B02-UNION_INTERSECTION",
    "stem": "Với A={1,2,3,4}, B={3,4,5}, tìm A∩B và A∪B.",
    "solution": "Đáp án: A∩B={3,4}; A∪B={1,2,3,4,5}.\nLời giải: Phần tử chung: 3,4. Phần tử thuộc A hoặc B: 1,2,3,4,5 không lặp.",
    "hint": "Giao là cùng nằm trong hai tập; hợp là nằm trong ít nhất một tập.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "BASIC"
  },
  {
    "item_id": "THPT-G10-B02-P01",
    "lesson": "2",
    "role": "PRACTICE",
    "skill": "G10-B02-DIFFERENCE",
    "stem": "Với A={1,2,3,4}, B={3,4,5}, hãy tìm A\\B và B\\A.",
    "solution": "Đáp án: A\\B={1,2}; B\\A={5}.\nLời giải: A\\B lấy phần tử chỉ trong A; B\\A lấy phần tử chỉ trong B.",
    "hint": "Hiệu phụ thuộc thứ tự A trừ B hay B trừ A.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B02-P02",
    "lesson": "2",
    "role": "PRACTICE",
    "skill": "G10-B02-COMPLEMENT",
    "stem": "Trong tập vũ trụ U={1,2,3,4,5,6}, cho A={2,4,6}. Tìm phần bù U\\A.",
    "solution": "Đáp án: {1,3,5}.\nLời giải: Loại 2,4,6 khỏi U, còn 1,3,5.",
    "hint": "Phần bù luôn cần chỉ rõ tập vũ trụ U.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B02-P03",
    "lesson": "2",
    "role": "PRACTICE",
    "skill": "G10-B02-INTERVALS",
    "stem": "Cho X=(-∞,3], Y=(1,+∞). Tìm X∩Y.",
    "solution": "Đáp án: (1,3].\nLời giải: Hai điều kiện đồng thời x≤3 và x>1 nên 1<x≤3.",
    "hint": "Kiểm lần lượt đầu mút 1 và 3.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B02-P04",
    "lesson": "2",
    "role": "PRACTICE",
    "skill": "G10-B02-INTERVALS",
    "stem": "Cho X=(-∞,3], Y=(1,+∞). Tìm X∪Y.",
    "solution": "Đáp án: ℝ.\nLời giải: Mọi số thực x đều thuộc ít nhất một trong hai khoảng nên hợp bằng ℝ.",
    "hint": "Xét mọi số thực x: x≤3 hoặc x>1.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B02-P05",
    "lesson": "2",
    "role": "PRACTICE",
    "skill": "G10-B02-VENN_MODEL",
    "stem": "Lớp có 40 học sinh, 23 học câu lạc bộ Anh, 25 học câu lạc bộ Toán, 12 học cả hai. Hỏi bao nhiêu học sinh không học câu lạc bộ nào?",
    "solution": "Đáp án: 4 học sinh.\nLời giải: n(A∪B)=23+25−12=36; ngoài cả hai =40−36=4.",
    "hint": "Tính số học ít nhất một CLB bằng công thức cộng trừ giao.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "APPLICATION"
  },
  {
    "item_id": "THPT-G10-B02-P06",
    "lesson": "2",
    "role": "PRACTICE",
    "skill": "G10-B02-SET_EQUALITY",
    "stem": "Cho A={x∈ℤ | x²=4}, B={−2,2}. Hai tập A và B có bằng nhau không?",
    "solution": "Đáp án: Có, A=B.\nLời giải: x²=4 ⇔ x=±2; A={−2,2}=B.",
    "hint": "Giải phương trình trên ℤ, rồi so hai chiều chứa nhau.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  }
];
 const validate=()=>({valid:records.length===16&&new Set(records.map(x=>x.item_id)).size===16&&records.every(x=>/^THPT-G10-B0[12]-[CP]\d{2}$/.test(x.item_id)&&x.exposure==="FORMATIVE_ONLY"&&x.stem&&x.solution&&x.hint)});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(Number(lesson))&&(role==="core"?x.role==="CORE":x.role==="PRACTICE"));
 root.THPT_CHI_REVIEWED_FORMATIVE=Object.freeze({contentVersion,records:Object.freeze(records.map(x=>Object.freeze(x))),validate,forLesson});
})(window);
