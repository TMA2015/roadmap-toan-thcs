"use strict";
/* PUBLIC reviewed formative excerpts from owner-reviewed G10 ChVII D3/D4 R01
 * original 63-item snapshot, preserved canonical IDs and math; no held-out RD.
 * Sources: prototypes/thpt/shared-items/THPT_G10_CHVII_B19_B22_CORE_PRACTICE_CANDIDATES_v0.1.md
 *          prototypes/thpt/shared-items/THPT_G10_CHVII_CHVIII_ADVANCED_PRACTICE_CANDIDATES_v0.2.md
 * B22-C01 (eccentricity) appears only as optional specialized Practice,
 * NEVER mandatory SGK Core; B22-P01 has shared Core + Practice placement.
 * This is self-check only; NO credit/score/mastery or per-student history.
 */
(function(root){
 const contentVersion="THPT-G10-CHVII-D3D4-REVIEWED-20261028-R01";
 const records=[
  {
    "item_id": "THPT-G10-B19-C01",
    "lesson": "19",
    "role": "CORE",
    "skill": "G10-B19-NORMAL_DIRECTION",
    "stem": "Cho đường thẳng Δ: \\(3x-2y+6=0\\). Nêu một vectơ pháp tuyến và một vectơ chỉ phương của Δ.",
    "solution": "Đáp án: \\(\\vec n=(3;-2)\\); \\(\\vec u=(2;3)\\). Lời giải: Các hệ số trước \\(x,y\\) cho \\(\\vec n\\); \\(\\vec u\\cdot\\vec n=2\\cdot3+3(-2)=0\\).",
    "hint": "Nhận diện vectơ pháp tuyến trước.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-C02",
    "lesson": "19",
    "role": "CORE",
    "skill": "G10-B19-GENERAL_POINT",
    "stem": "Viết phương trình tổng quát đường thẳng qua \\(A(1;2)\\) và có vectơ pháp tuyến \\(\\vec n=(2;-1)\\).",
    "solution": "Đáp án: \\(2x-y=0\\). Lời giải: \\(2(x-1)-(y-2)=0\\Rightarrow2x-y=0\\).",
    "hint": "Thay tọa độ điểm và hệ số pháp tuyến vào a(x−x₀)+b(y−y₀)=0.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-P01",
    "lesson": "19",
    "role": "PRACTICE",
    "skill": "G10-B19-PARAMETRIC",
    "stem": "Viết phương trình tham số đường thẳng qua \\(A(-1;2)\\), nhận \\(\\vec u=(3;-2)\\) làm vectơ chỉ phương.",
    "solution": "Đáp án: \\(x=-1+3t,\\ y=2-2t,\\ t\\in\\mathbb R\\). Lời giải: Mọi điểm trên đường thẳng có tọa độ \\(A+t\\vec u\\).",
    "hint": "Dùng điểm gốc cộng (t) lần vectơ chỉ phương.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-P02",
    "lesson": "19",
    "role": "PRACTICE",
    "skill": "G10-B19-GENERAL_POINT",
    "stem": "Viết phương trình tổng quát đường thẳng qua \\(A(1;2)\\) và \\(B(4;-1)\\).",
    "solution": "Đáp án: \\(x+y-3=0\\). Lời giải: \\(\\overrightarrow{AB}=(3;-3)\\), một pháp tuyến là \\((1;1)\\). Qua \\(A\\): \\((x-1)+(y-2)=0\\).",
    "hint": "Tìm vectơ AB rồi một pháp tuyến vuông góc.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-P03",
    "lesson": "19",
    "role": "PRACTICE",
    "skill": "G10-B19-MEMBERSHIP",
    "stem": "Kiểm tra \\(M(2;3)\\) và \\(N(0;0)\\) có thuộc Δ: \\(2x-y-1=0\\) không.",
    "solution": "Đáp án: \\(M\\in\\Delta,\\ N\\notin\\Delta\\). Lời giải: Thế \\(M\\): \\(4-3-1=0\\); thế \\(N\\): \\(-1\\ne0\\).",
    "hint": "Thế tọa độ mỗi điểm vào phương trình tổng quát.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-P04",
    "lesson": "19",
    "role": "APPLICATION",
    "skill": "G10-B19-LINEAR_MODEL",
    "stem": "Một mô hình nhiệt độ \\(T\\) (°C) theo thời gian \\(t\\) (giờ) có đồ thị đường thẳng qua \\((0;20)\\) và \\((5;5)\\), trong \\(0\\le t\\le5\\). Lập \\(T(t)\\) và tìm thời điểm \\(T=11\\)°C.",
    "solution": "Đáp án: \\(T(t)=20-3t\\), \\(t=3\\) giờ. Lời giải: Độ dốc \\((5-20)/(5-0)=-3\\), nên \\(T=20-3t\\); giải \\(20-3t=11\\) cho \\(t=3\\), thuộc miền.",
    "hint": "Tìm hệ số góc theo hai điểm và nhớ miền thực tế.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-C01",
    "lesson": "20",
    "role": "CORE",
    "skill": "G10-B20-RELATIVE_POSITION",
    "stem": "Xét \\(d_1:2x-y+3=0\\), \\(d_2:4x-2y-5=0\\). Hai đường có vị trí tương đối nào?",
    "solution": "Đáp án: Song song và phân biệt. Lời giải: Hệ số \\(x,y\\) của \\(d_2\\) bằng 2 lần hệ số của \\(d_1\\), nhưng hằng số \\(-5\\ne6\\); do đó không trùng.",
    "hint": "So sánh cả ba hệ số khi kiểm tra trùng nhau.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-C02",
    "lesson": "20",
    "role": "CORE",
    "skill": "G10-B20-PERPENDICULAR",
    "stem": "Hai đường \\(d_1:x+2y=0\\) và \\(d_2:2x-y+4=0\\) có vuông góc không?",
    "solution": "Đáp án: Có, chúng vuông góc. Lời giải: Pháp tuyến \\(\\vec n_1=(1;2)\\), \\(\\vec n_2=(2;-1)\\) có tích vô hướng \\(2-2=0\\).",
    "hint": "Kiểm tra tích vô hướng của hai vectơ pháp tuyến.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-P01",
    "lesson": "20",
    "role": "PRACTICE",
    "skill": "G10-B20-INTERSECTION",
    "stem": "Tìm giao điểm \\(d_1:x+y-3=0\\) và \\(d_2:x-y-1=0\\).",
    "solution": "Đáp án: \\(I(2;1)\\). Lời giải: Giải hệ \\(x+y=3,\\ x-y=1\\) được \\(x=2,y=1\\).",
    "hint": "Giải hệ hai phương trình đường thẳng.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-P02",
    "lesson": "20",
    "role": "PRACTICE",
    "skill": "G10-B20-DISTANCE",
    "stem": "Tính khoảng cách từ \\(P(1;-2)\\) đến đường \\(d:3x+4y-5=0\\).",
    "solution": "Đáp án: \\(d(P,d)=2\\). Lời giải: \\(\\dfrac{|3\\cdot1+4(-2)-5|}{\\sqrt{3^2+4^2}}=\\dfrac{10}{5}=2\\).",
    "hint": "Tử là trị tuyệt đối; mẫu là độ dài vectơ pháp tuyến.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-P03",
    "lesson": "20",
    "role": "PRACTICE",
    "skill": "G10-B20-ANGLE",
    "stem": "Tìm góc nhọn giữa \\(d_1:x-y=0\\) và \\(d_2:x=0\\).",
    "solution": "Đáp án: \\(45^\\circ\\). Lời giải: Pháp tuyến \\((1;-1)\\), \\((1;0)\\) có \\(|\\cos\\varphi|=1/\\sqrt2\\). Do đó góc nhọn là \\(45^\\circ\\).",
    "hint": "Dùng giá trị tuyệt đối trong công thức góc giữa hai đường.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B20-P04",
    "lesson": "20",
    "role": "APPLICATION",
    "skill": "G10-B20-PERPENDICULAR",
    "stem": "Viết đường thẳng qua \\(A(2;-1)\\) và vuông góc với \\(d:3x-4y+2=0\\).",
    "solution": "Đáp án: \\(4x+3y-5=0\\). Lời giải: Một pháp tuyến của đường cần tìm là vectơ chỉ phương \\((4;3)\\) của \\(d\\). Dùng \\(A\\): \\(4(x-2)+3(y+1)=0\\).",
    "hint": "Đường vuông góc với d có pháp tuyến song song vectơ chỉ phương d.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-C01",
    "lesson": "21",
    "role": "CORE",
    "skill": "G10-B21-CIRCLE_STANDARD",
    "stem": "Viết phương trình đường tròn tâm \\(I(1;-2)\\), bán kính \\(R=3\\).",
    "solution": "Đáp án: \\((x-1)^2+(y+2)^2=9\\). Lời giải: Áp dụng \\((x-a)^2+(y-b)^2=R^2\\).",
    "hint": "Dấu trong ngoặc ngược với tọa độ tâm.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-C02",
    "lesson": "21",
    "role": "CORE",
    "skill": "G10-B21-CIRCLE_GENERAL",
    "stem": "Tìm tâm và bán kính đường tròn \\(x^2+y^2-4x+6y-12=0\\).",
    "solution": "Đáp án: Tâm \\(I(2;-3)\\), bán kính \\(R=5\\). Lời giải: Hoàn thành bình phương: \\((x-2)^2+(y+3)^2=25\\).",
    "hint": "Gom (x) và (y) thành các bình phương.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-P01",
    "lesson": "21",
    "role": "PRACTICE",
    "skill": "G10-B21-CIRCLE_STANDARD",
    "stem": "Viết phương trình đường tròn đường kính \\(AB\\), với \\(A(-2;1)\\), \\(B(4;5)\\).",
    "solution": "Đáp án: \\((x-1)^2+(y-3)^2=13\\). Lời giải: Trung điểm \\(I(1;3)\\); \\(AB^2=6^2+4^2=52\\), \\(R^2=AB^2/4=13\\).",
    "hint": "Tâm là trung điểm đường kính, bán kính bằng một nửa độ dài AB.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-P02",
    "lesson": "21",
    "role": "PRACTICE",
    "skill": "G10-B21-CIRCLE_TANGENT",
    "stem": "Viết tiếp tuyến của đường tròn \\(x^2+y^2=25\\) tại \\(M(3;4)\\).",
    "solution": "Đáp án: \\(3x+4y=25\\). Lời giải: \\(\\overrightarrow{OM}=(3;4)\\) là pháp tuyến của tiếp tuyến tại \\(M\\). Phương trình \\(3(x-3)+4(y-4)=0\\).",
    "hint": "Bán kính tại tiếp điểm vuông góc tiếp tuyến.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-P03",
    "lesson": "21",
    "role": "PRACTICE",
    "skill": "G10-B21-CIRCLE_TANGENT",
    "stem": "Xét \\((C):(x-1)^2+(y+1)^2=4\\) và đường thẳng \\(d:x=3\\). \\(d\\) có tiếp xúc với \\((C)\\) không? Nêu tiếp điểm.",
    "solution": "Đáp án: Có, tiếp xúc tại \\(H(3;-1)\\). Lời giải: Tâm \\((1;-1)\\), \\(R=2\\), khoảng cách từ tâm đến \\(x=3\\) bằng \\(2\\). Hình chiếu vuông góc là \\(H(3;-1)\\).",
    "hint": "So sánh khoảng cách từ tâm đến đường với bán kính.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B21-P04",
    "lesson": "21",
    "role": "APPLICATION",
    "skill": "G10-B21-CIRCLE_THROUGH_POINTS",
    "stem": "Tìm đường tròn qua \\(A(0;0)\\), \\(B(4;0)\\), \\(C(0;2)\\).",
    "solution": "Đáp án: \\((x-2)^2+(y-1)^2=5\\). Lời giải: Tam giác ABC vuông tại A; tâm ngoại tiếp là trung điểm BC, \\(I(2;1)\\), \\(R^2=IA^2=5\\).",
    "hint": "Có thể tìm tâm bằng đường trung trực, hoặc dùng tính chất tam giác vuông.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-C01",
    "lesson": "22",
    "role": "OPTIONAL_SPECIALIZED",
    "skill": "G10-B22-ELLIPSE_PARAMETERS",
    "stem": "Cho elip \\(E:\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1\\). Tìm hai tiêu điểm và tâm sai.",
    "solution": "Đáp án: \\(F_1(-4;0),F_2(4;0)\\), \\(e=4/5\\). Lời giải: \\(a=5,b=3,c=\\sqrt{a^2-b^2}=\\sqrt{16}=4\\), \\(e=c/a=4/5\\).",
    "hint": "Elip có (c^2=a^2-b^2).",
    "exposure": "FORMATIVE_ONLY",
    "tier": "CHUYEN_SAU_TU_CHON"
  },
  {
    "item_id": "THPT-G10-B22-C02",
    "lesson": "22",
    "role": "CORE",
    "skill": "G10-B22-HYPERBOLA_PARAMETERS",
    "stem": "Cho hypebol \\(H:\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1\\). Tìm hai tiêu điểm và hai tiệm cận.",
    "solution": "Đáp án: \\(F_{1,2}=(\\mp5;0)\\); \\(y=\\pm\\frac43x\\). Lời giải: \\(a=3,b=4,c=\\sqrt{a^2+b^2}=5\\). Tiệm cận \\(y=\\pm(b/a)x\\).",
    "hint": "Hypebol có (c^2=a^2+b^2), khác elip.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-P01",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "G10-B22-ELLIPSE_PARAMETERS",
    "stem": "Elip có tiêu điểm \\((-3;0)\\), \\((3;0)\\), độ dài trục lớn \\(10\\). Viết phương trình chính tắc.",
    "solution": "Đáp án: \\(\\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1\\). Lời giải: \\(a=5,c=3,b^2=a^2-c^2=16\\).",
    "hint": "Dùng độ dài trục lớn (2a) và khoảng cách tiêu điểm (2c).",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-P02",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "G10-B22-HYPERBOLA_PARAMETERS",
    "stem": "Hypebol có hai đỉnh \\((-2;0),(2;0)\\), hai tiêu điểm \\((-\\sqrt{13};0),(\\sqrt{13};0)\\). Viết phương trình chính tắc.",
    "solution": "Đáp án: \\(\\dfrac{x^2}{4}-\\dfrac{y^2}{9}=1\\). Lời giải: \\(a=2,c=\\sqrt{13},b^2=c^2-a^2=9\\).",
    "hint": "Hypebol: trừ (y^2/b^2) và (c^2=a^2+b^2).",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-P03",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "G10-B22-PARABOLA_FOCUS",
    "stem": "Viết phương trình chính tắc của parabol có tiêu điểm \\(F(2;0)\\) và đường chuẩn \\(x=-2\\).",
    "solution": "Đáp án: \\(y^2=8x\\). Lời giải: Với \\(y^2=2px\\), tiêu điểm \\((p/2;0)\\), đường chuẩn \\(x=-p/2\\), nên \\(p=4\\).",
    "hint": "Dùng quy ước SGK (y^2=2px), (p>0).",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B22-P04",
    "lesson": "22",
    "role": "APPLICATION",
    "skill": "G10-B22-PARABOLA_FOCUS",
    "stem": "Một mặt cắt chảo phản xạ được mô hình bằng \\(y^2=12x\\) (đơn vị cm). Xác định tiêu điểm và đường chuẩn.",
    "solution": "Đáp án: \\(F(3;0)\\), đường chuẩn \\(x=-3\\) (cm). Lời giải: So với \\(y^2=2px\\) được \\(p=6\\); \\(F(p/2;0)=(3;0)\\), đường chuẩn \\(x=-p/2=-3\\). Đây là mô hình hình học lý tưởng, không phải thông số thiết bị thực.",
    "hint": "So hệ số (12) với (2p); đừng nhầm (p) với tiêu cự đến đỉnh.",
    "exposure": "FORMATIVE_ONLY"
  },
  {
    "item_id": "THPT-G10-B19-P05",
    "lesson": "19",
    "role": "PRACTICE",
    "skill": "G10-B19-NORMAL_DIRECTION",
    "stem": "Viết phương trình tổng quát của đường thẳng qua \\(P(2;-1)\\) và song song với \\(d:3x+2y-7=0\\).",
    "solution": "Đáp án: \\(3x+2y-4=0\\). Lời giải: Đường cần tìm có pháp tuyến \\((3;2)\\), nên dạng \\(3x+2y+c=0\\). Thế \\(P\\): \\(6-2+c=0\\Rightarrow c=-4\\). Hai đường phân biệt vì \\(-4\\ne-7\\).",
    "hint": "Giữ hai hệ số pháp tuyến, tìm hằng số bằng tọa độ điểm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B19-P06",
    "lesson": "19",
    "role": "PRACTICE",
    "skill": "G10-B19-MULTISTEP",
    "stem": "Tìm phương trình đường thẳng \\(\\Delta\\) đi qua giao điểm của \\(d_1:x+y-4=0\\) và \\(d_2:2x-y-2=0\\), đồng thời vuông góc với \\(d_3:x-2y+1=0\\).",
    "solution": "Đáp án: \\(\\Delta:2x+y-6=0\\). Lời giải: Giải hệ \\(x+y=4,\\ 2x-y=2\\) được \\(I(2;2)\\). Đường \\(d_3\\) có vectơ chỉ phương \\((2;1)\\), là pháp tuyến của \\(\\Delta\\). Vậy \\(2(x-2)+(y-2)=0\\).",
    "hint": "Tìm giao điểm trước; đổi vectơ chỉ phương của d3 thành pháp tuyến của đường cần tìm.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B20-P05",
    "lesson": "20",
    "role": "PRACTICE",
    "skill": "G10-B20-RELATIVE_POSITION",
    "stem": "Tìm \\(m\\in\\mathbb R\\) để \\(d_1:(m+1)x+2y-1=0\\) song song và phân biệt với \\(d_2:3x-6y+4=0\\).",
    "solution": "Đáp án: \\(m=-2\\). Lời giải: Hai pháp tuyến cùng phương khi \\((m+1,2)=\\lambda(3,-6)\\). Từ \\(2=-6\\lambda\\) có \\(\\lambda=-1/3\\), suy ra \\(m+1=-1\\), \\(m=-2\\). Khi đó \\(d_1:-x+2y-1=0\\); nhân với \\(-3\\) được \\(3x-6y+3=0\\ne d_2\\), nên hai đường song song phân biệt.",
    "hint": "Sau khi tìm m, kiểm tra cả hằng số để loại trường hợp trùng.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B20-P06",
    "lesson": "20",
    "role": "PRACTICE",
    "skill": "G10-B20-ANGLE",
    "stem": "Tính cosin của góc nhọn giữa \\(d_1:x+2y=0\\) và \\(d_2:2x+y=0\\).",
    "solution": "Đáp án: \\(\\cos\\varphi=\\frac45\\), nên \\(\\varphi=\\arccos\\frac45\\approx36{,}87^\\circ\\). Lời giải: Pháp tuyến là \\(\\vec n_1=(1;2)\\), \\(\\vec n_2=(2;1)\\). \\(\\cos\\varphi=\\frac{|\\vec n_1\\cdot\\vec n_2|}{\\|\\vec n_1\\|\\|\\vec n_2\\|}=\\frac{|2+2|}{\\sqrt5\\sqrt5}=\\frac45\\).",
    "hint": "Dùng trị tuyệt đối để lấy góc nhọn giữa hai đường.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B21-P05",
    "lesson": "21",
    "role": "PRACTICE",
    "skill": "G10-B21-CIRCLE_GENERAL",
    "stem": "Tìm \\(k\\in\\mathbb R\\) để \\(x^2+y^2-6x+2y+k=0\\) là đường tròn tiếp xúc với đường thẳng \\(x=0\\). Nêu tiếp điểm.",
    "solution": "Đáp án: \\(k=1\\), tiếp điểm \\(H(0;-1)\\). Lời giải: Hoàn thành bình phương: \\((x-3)^2+(y+1)^2=10-k\\). Tâm \\(I(3;-1)\\), khoảng cách tới \\(x=0\\) bằng 3. Tiếp xúc khi \\(R=3\\), tức \\(10-k=9\\Rightarrow k=1\\). Hình chiếu của I lên \\(x=0\\) là \\(H(0;-1)\\).",
    "hint": "Điều kiện tiếp xúc: khoảng cách tâm đến đường bằng bán kính dương.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B21-P06",
    "lesson": "21",
    "role": "PRACTICE",
    "skill": "G10-B21-CIRCLE_THROUGH_POINTS",
    "stem": "Tìm phương trình đường tròn đi qua \\(A(1;2)\\), \\(B(5;4)\\), biết tâm nằm trên trục \\(Ox\\).",
    "solution": "Đáp án: \\((x-\\frac92)^2+y^2=\\frac{65}{4}\\). Lời giải: Đặt tâm \\(I(h;0)\\). Từ \\(IA^2=IB^2\\): \\((h-1)^2+4=(h-5)^2+16\\Rightarrow 8h=36\\Rightarrow h=9/2\\). Khi đó \\(R^2=(9/2-1)^2+2^2=49/4+16/4=65/4>0\\).",
    "hint": "Dùng tính chất hai bán kính IA và IB bằng nhau.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  },
  {
    "item_id": "THPT-G10-B22-P05",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "G10-B22-CONIC_INTERSECTION",
    "stem": "Tìm các giao điểm của elip \\(E:\\frac{x^2}{16}+\\frac{y^2}{9}=1\\) với đường thẳng \\(y=\\frac32\\).",
    "solution": "Đáp án: \\((2\\sqrt3;\\frac32)\\) và \\((-2\\sqrt3;\\frac32)\\). Lời giải: Thế \\(y=3/2\\): \\(x^2/16+(9/4)/9=1\\Rightarrow x^2/16=3/4\\Rightarrow x^2=12\\), nên \\(x=\\pm2\\sqrt3\\).",
    "hint": "Thay y trước, giải phương trình một ẩn x.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "INTERMEDIATE"
  },
  {
    "item_id": "THPT-G10-B22-P06",
    "lesson": "22",
    "role": "PRACTICE",
    "skill": "G10-B22-PARABOLA_FOCUS",
    "stem": "Cho parabol \\(P:y^2=8x\\). Chứng minh điểm \\(M(2;4)\\) thuộc \\(P\\) và có khoảng cách tới tiêu điểm bằng khoảng cách tới đường chuẩn.",
    "solution": "Đáp án: \\(M\\in P\\), \\(MF=d(M,\\Delta)=4\\). Lời giải: Vì \\(4^2=8\\cdot2=16\\), \\(M\\in P\\). Với \\(y^2=2px\\), \\(p=4\\), nên tiêu điểm \\(F(2;0)\\), đường chuẩn \\(\\Delta:x=-2\\). Khi đó \\(MF=\\sqrt{(2-2)^2+(4-0)^2}=4\\), và \\(d(M,\\Delta)=|2-(-2)|=4\\).",
    "hint": "Xác định p từ 2p=8, rồi kiểm tra hai khoảng cách.",
    "exposure": "FORMATIVE_ONLY",
    "difficulty": "ADVANCED"
  }
];
 const allowed=new Set(["THPT-G10-B19-C01","THPT-G10-B19-C02","THPT-G10-B19-P01","THPT-G10-B19-P02","THPT-G10-B19-P03","THPT-G10-B19-P04","THPT-G10-B20-C01","THPT-G10-B20-C02","THPT-G10-B20-P01","THPT-G10-B20-P02","THPT-G10-B20-P03","THPT-G10-B20-P04","THPT-G10-B21-C01","THPT-G10-B21-C02","THPT-G10-B21-P01","THPT-G10-B21-P02","THPT-G10-B21-P03","THPT-G10-B21-P04","THPT-G10-B22-C01","THPT-G10-B22-C02","THPT-G10-B22-P01","THPT-G10-B22-P02","THPT-G10-B22-P03","THPT-G10-B22-P04","THPT-G10-B19-P05","THPT-G10-B19-P06","THPT-G10-B20-P05","THPT-G10-B20-P06","THPT-G10-B21-P05","THPT-G10-B21-P06","THPT-G10-B22-P05","THPT-G10-B22-P06"]);
 const validate=()=>({valid:records.length===32&&new Set(records.map(x=>x.item_id)).size===32&&records.every(x=>allowed.has(x.item_id)&&x.stem&&x.hint&&x.solution&&!/READINESS|-(RD|R)\d\d\b/.test(x.item_id))});
 const forLesson=(lesson,role)=>records.filter(x=>x.lesson===String(lesson)&&(
   role==="core"?(x.role==="CORE"||x.item_id==="THPT-G10-B22-P01"):
   ["PRACTICE","APPLICATION","OPTIONAL_SPECIALIZED"].includes(x.role)))
   .map(x=>x.item_id==="THPT-G10-B22-P01"&&role==="core"?Object.assign({},x,{role:"CORE"}):x)
   .sort((a,b)=>Number(a.role==="OPTIONAL_SPECIALIZED")-Number(b.role==="OPTIONAL_SPECIALIZED"));
 root.THPT_CHVII_REVIEWED_FORMATIVE=Object.freeze({contentVersion,records:Object.freeze(records.map(x=>Object.freeze(x))),validate,forLesson});
})(window);
