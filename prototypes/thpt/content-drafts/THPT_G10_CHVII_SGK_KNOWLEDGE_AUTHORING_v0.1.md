# G10 KNTT · Chương VII — Self-contained SGK Knowledge Draft v0.1

Status: DRAFT_NOT_ACADEMICALLY_REVIEWED | NO_MASTERY | NO_MERGE_DEPLOY | 2026-10-28

S1 reference: SGK Toán 10 KNTT tập 2, printed pp.29–58; SBT pp.27–49. Source structure/page boundaries visually verified in current PR, but item-by-item/activity-by-activity S1 audit is NOT complete. All worked examples below are newly authored, not claims to reproduce SGK exercises. This is an *authoring draft*, not a replacement for the Golden UI R4 or a published chapter.

SGK pathway: full knowledge → SGK Core → lesson/chapter practice and application → independent CHAPTER Readiness. Topic pathway: self-contained Knowledge / Practice / Topic Readiness only (three destinations; no topic Core page). Both paths share canonical items, solutions, figures, skills and Written where appropriate.

## Bài 19 — Phương trình đường thẳng
S1: SGK pp.29–34; SBT pp.27–31.
Candidate outcomes: G10-B19-NORMAL_DIRECTION, G10-B19-GENERAL_POINT, G10-B19-PARAMETRIC, G10-B19-TWO_POINTS, G10-B19-MEMBERSHIP.

**Khái niệm.** Vectơ pháp tuyến n=(a;b) khác (0;0) vuông góc với đường thẳng; vectơ chỉ phương u=(u1;u2) khác (0;0) song song với đường. Từ n=(a;b) có thể lấy u=(-b;a). Qua M0(x0;y0), phương trình tổng quát là a(x-x0)+b(y-y0)=0, hay ax+by+c=0 với a²+b²>0. Qua M0 và u, phương trình tham số: x=x0+u1t, y=y0+u2t với t thực. Hai điểm A và B phải **phân biệt** để AB là chỉ phương hợp lệ.

**Tại sao.** Điểm M thuộc đường khi vectơ M0M vuông góc với n: a(x-x0)+b(y-y0)=0. Còn biểu thức tham số quét mọi bội số thực của u. Thay (x;y) vào phương trình tổng quát là cách kiểm tra điểm thuộc đường.

**EX-G10-B19-01 — ví dụ đã giải, không phải câu Readiness.** Qua A(1;2), B(4;3), chỉ phương AB=(3;1), pháp tuyến (1;-3). Phương trình x-3y+5=0; tham số x=1+3t, y=2+t. Kiểm tra A và B đều thỏa mãn.

**Lỗi hay gặp.** Lấy AB làm pháp tuyến thay vì chỉ phương; quên điều kiện n khác 0; kết luận hai phương trình khác hệ số là hai đường khác nhau dù có thể là bội khác 0.

**Mapping:** SGK Core B19-C01,C02; SGK Practice B19-P01..P06; Written THPT-G10-CHVII-W19-01. Toàn bộ chỉ là references đến canonical ID đã có trong bank.

## Bài 20 — Vị trí tương đối; góc và khoảng cách
S1: SGK pp.35–41; SBT pp.31–38.
Candidate outcomes: G10-B20-RELATIVE_POSITION, G10-B20-PERPENDICULAR, G10-B20-INTERSECTION, G10-B20-DISTANCE, G10-B20-ANGLE.

**Khái niệm.** Với d1: a1x+b1y+c1=0 và d2: a2x+b2y+c2=0, mỗi cặp (ai,bi) khác (0,0):
- Cắt nhau tại một điểm nếu a1b2-a2b1 khác 0; giao điểm là nghiệm hệ hai phương trình.
- Nếu định thức bằng 0, phải kiểm tra tiếp bộ ba (a,b,c): tỉ lệ cả ba → trùng nhau; không tỉ lệ cả ba → song song phân biệt.
- Vuông góc nếu a1a2+b1b2=0.
- Góc nhỏ phi giữa hai đường: cos(phi)=|a1a2+b1b2|/[sqrt(a1²+b1²)sqrt(a2²+b2²)], 0° ≤ phi ≤ 90°.
- Khoảng cách điểm M(xM;yM) đến d: ax+by+c=0 là |axM+byM+c|/sqrt(a²+b²).

**Giải thích.** Tích vô hướng của hai pháp tuyến xác định góc; trị tuyệt đối lấy góc nhỏ không phụ thuộc việc đổi chiều pháp tuyến. Khoảng cách phải không âm.

**EX-G10-B20-01.** d1: x-y-1=0, d2: x+y-5=0. Định thức bằng 2 khác 0, nên cắt nhau tại I(3;2). Pháp tuyến (1;-1) và (1;1) có tích vô hướng bằng 0, nên vuông góc. Khoảng cách O đến d1 bằng 1/sqrt(2).

**Lỗi hay gặp.** Pháp tuyến tỉ lệ chưa chứng minh trùng đường; bỏ trị tuyệt đối trong khoảng cách/góc; bỏ các giá trị tham số khiến phương trình suy biến.

**Mapping:** Core B20-C01,C02; Practice B20-P01..P06; Written THPT-G10-CHVII-W20-01.

## Bài 21 — Đường tròn trong mặt phẳng tọa độ
S1: SGK pp.42–46; SBT pp.38–41.
Candidate outcomes: G10-B21-CIRCLE_STANDARD, G10-B21-CIRCLE_GENERAL, G10-B21-CIRCLE_TANGENT, G10-B21-CIRCLE_THROUGH_POINTS, G10-B21-LINE_CIRCLE_POSITION.

**Định nghĩa/phương trình.** Đường tròn tâm I(a;b), bán kính R>0: (x-a)²+(y-b)²=R². Dạng x²+y²+Dx+Ey+F=0 cho tâm (-D/2;-E/2), R²=(D²+E²)/4-F. Phải có R²>0: R²=0 chỉ là một điểm; R²<0 không có điểm thực.

**Tiếp tuyến và vị trí.** Nếu M thuộc đường tròn, tiếp tuyến tại M có pháp tuyến IM, nên (xM-a)(x-xM)+(yM-b)(y-yM)=0. Với đường thẳng d và h=khoảng cách từ tâm I đến d, h<R cho hai giao điểm, h=R cho tiếp xúc, h>R không giao.

**EX-G10-B21-01.** Phương trình x²+y²-4x+6y-12=0 tương đương (x-2)²+(y+3)²=25, I(2;-3), R=5. M(5;1) thuộc đường tròn vì IM²=3²+4²=25. Tiếp tuyến tại M: 3x+4y-19=0. Thay M vào được 0.

**Lỗi hay gặp.** Nhầm R với R²; đọc sai dấu tâm khi hoàn thành bình phương; lập tiếp tuyến tại điểm chưa kiểm tra thuộc đường; dùng điều kiện h=R dù R=0.

**Mapping:** Core B21-C01,C02; Practice B21-P01..P06; Written/Anchor THPT-G10-CHVII-W21-ANCHOR-01 (Anchor là nhãn của một Written item).

## Bài 22 — Ba đường conic
S1: SGK pp.47–56; SBT pp.41–45.
Candidate outcomes: G10-B22-ELLIPSE_PARAMETERS, G10-B22-HYPERBOLA_PARAMETERS, G10-B22-HYPERBOLA_ASYMPTOTES, G10-B22-PARABOLA_FOCUS, G10-B22-CONIC_INTERSECTION, G10-B22-CONIC_MODEL.

**Elip, trục lớn Ox.** x²/a²+y²/b²=1 với a>b>0; c²=a²-b². Hai tiêu điểm (±c;0), các đỉnh (±a;0),(0;±b), tổng khoảng cách từ M trên elip đến hai tiêu điểm bằng 2a.
EX-G10-B22-E: x²/25+y²/9=1 có a=5,b=3,c=4, tiêu điểm (±4;0), tổng hai khoảng cách bằng 10.

**Hypebol, trục thực Ox.** x²/a²-y²/b²=1 với a,b>0; c²=a²+b². Các đỉnh (±a;0), hai tiêu điểm (±c;0), các tiệm cận y=±(b/a)x; hiệu tuyệt đối khoảng cách từ M trên hypebol tới hai tiêu điểm bằng 2a.
EX-G10-B22-H: x²/9-y²/16=1 có a=3,b=4,c=5, tiệm cận y=±4x/3.

**Parabol, quy ước rõ y²=2px và p>0.** Đỉnh O, tiêu điểm F(p/2;0), đường chuẩn x=-p/2. Với mọi điểm M thuộc đường, MF bằng khoảng cách từ M đến đường chuẩn.
EX-G10-B22-P: y²=12x cho p=6, F(3;0), đường chuẩn x=-3. M(3;6) thuộc parabol vì 36=12×3; cả hai khoảng cách đều bằng 6.

**Điểm cần kiểm review scope.** Khái niệm tâm sai e=c/a trong candidate B22-C01 chưa được xác nhận là nội dung SGK Core; KHÔNG tự nâng lên Core. Không yêu cầu đạo hàm hay các trường hợp trục quay ngoài nguồn đã kiểm chứng. Hình conic SVG thuộc thư mục prototypes/thpt/visuals và cần QA nhãn/hướng trước khi dùng trên trang học.

**Lỗi hay gặp.** Dùng công thức c²=a²-b² của elip cho hypebol; lấy tiêu điểm parabol (p;0) khi phương trình là y²=2px; coi mẫu số a² là chính a; áp dụng công thức trục Ox cho conic có trục khác.

**Mapping:** Core B22-C01,C02; Practice B22-P01..P06; Written THPT-G10-CHVII-W22-01.

## Hub Luyện tập/Vận dụng cuối Chương VII
Bài tập cuối SGK pp.57–58, SBT pp.46–49. Nhóm luyện tập tích lũy: đường qua hai điểm/pháp tuyến → giao điểm/góc/khoảng cách → đường tròn/tiếp tuyến → conic. Không dựng menu bài tập cuối chương riêng; nằm dưới Luyện tập/Vận dụng chương. Dùng refs từ 32 canonical Core/Practice (8 Core + 24 P) và 4 Written hiện có, không nhân đôi answer, attempt hay score. Những nhóm tổng hợp cụ thể từ SGK/SBT cần full source crosswalk trước khi nhận là đã bao phủ.

## SGK Tự kiểm tra CUỐI CHƯƠNG — blueprint, chưa có câu
Scope SGK_CHAPTER_READINESS:G10_CHVII: 8 blueprint slots CHVII-READ-B19-01..CHVII-READ-B22-02. Đây KHÔNG phải 8 question IDs; không có stem/key, không đủ điều kiện triển khai. Phải viết held-out độc lập, no hint/Tutor/correctness/answer trước Final Submit, theo dõi exposure của cùng canonical ID ở cả hai nhánh. Written self-rubric không tạo mastery tự động.

## Shared Topic mapping — học độc lập
Kiến thức ChVII cung cấp module lớp 10 cho chuyên đề trục dọc Hình học tọa độ, nhưng KHÔNG tự nhận hoàn chỉnh chuyên đề 10–12. Trang Topic Knowledge cần tái cấu trúc diễn giải tự đủ theo mảng Đường thẳng / Đường tròn / Conic, Topic Practice tham chiếu lại các canonical item đủ scope, Topic Readiness riêng cần outline xuyên lớp. Chuyên đề có duy nhất Kiến thức / Luyện tập / Tự kiểm tra; không tab Core.

## D1–D6 và gates
D1 kiến thức: drafted, chưa S1 deep audit. D2 ví dụ: 6 worked examples tự soạn, cần reviewer. D3 32 canonical C/P candidate, chưa academic audit. D4 4 Written candidate. D5 authentic exam frequency: NOT_CLAIMED. D6 lỗi điển hình và phương pháp: draft; chưa nghiệm thu hình/đồ thị và hỗ trợ. ACADEMIC_PASS=NO; NO_MERGE_DEPLOY; không thay Golden UI R4.
