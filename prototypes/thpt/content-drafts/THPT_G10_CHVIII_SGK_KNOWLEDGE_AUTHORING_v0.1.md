# G10 KNTT · Chương VIII — Self-contained SGK Knowledge Draft v0.1

Status: DRAFT_NOT_ACADEMICALLY_REVIEWED | NO_MASTERY | NO_MERGE_DEPLOY | 2026-10-28

S1 reference: SGK Toán 10 KNTT tập 2, printed pp.59–79; SBT pp.50–59. Book chapter/lesson/page ranges visually verified in PR #612, but individual activities and textbook figures have NOT been completely crosswalked. All worked examples here are newly authored teaching examples, not claimed as copied textbook exercises. Golden UI R4 is untouched.

SGK complete-path structure: lesson knowledge → linked SGK Core → Practice/Application (including chapter-end cumulative work) → independent **Chapter VIII** Readiness. Cross-grade Topic remains an independent Knowledge / Practice / Topic Readiness path with **three sections**, no Core page; shared canonical items use placements, not cloned answers.

## Bài 23 — Quy tắc đếm
S1 SGK pp.59–64; SBT pp.50–52.
Candidate outcomes: G10-B23-ADDITION, G10-B23-MULTIPLICATION, G10-B23-DIGIT_COUNT, G10-B23-CASE_SPLIT.

**Quy tắc cộng.** Nếu một lựa chọn được thực hiện theo đúng một trong các trường hợp A1,...,Ak **đôi một không giao nhau**, số cách là m1+...+mk. Khi các trường hợp chồng lấn, cần loại trùng hoặc chia lại thành các trường hợp rời nhau; không cộng máy móc.

**Quy tắc nhân.** Một quy trình nhiều bước liên tiếp với m1 lựa chọn ở bước 1, m2 lựa chọn ở bước 2 cho mỗi phương án bước 1, ... thì số cách là tích m1m2...mk khi số cách ở mỗi bước là cố định theo lịch sử phù hợp. Nếu số khả năng ở bước sau phụ thuộc vào lựa chọn trước, chia trường hợp hoặc cộng số cách theo nhánh. Phân biệt "hoặc" loại trừ (cộng) với "và" liên tiếp (nhân).

**EX-G10-B23-01 — ví dụ đã giải.** Một học sinh chọn đúng một môn câu lạc bộ: 4 môn nghệ thuật hoặc 3 môn thể thao, mỗi lựa chọn là một môn riêng, tổng 4+3=7 cách. Nếu chọn một môn nghệ thuật **và** một môn thể thao, có 4×3=12 cặp.

**EX-G10-B23-02.** Từ các chữ số 0,1,2,3,4 lập số có hai chữ số khác nhau. Chữ số hàng chục có 4 lựa chọn (không phải 0), hàng đơn vị còn 4; có 4×4=16 số. Nếu cho phép lặp chữ số, hàng đơn vị có 5 lựa chọn, được 20 số.

**Lỗi hay gặp.** Cộng các nhóm không rời nhau; nhân khi cần rẽ nhánh; cho phép hàng đầu bằng 0; quên điều kiện chữ số khác nhau; giả sử tất cả bước đều có cùng số lựa chọn.

**Mapping:** SGK Core B23-C01,C02; Practice B23-P01..P06; Written THPT-G10-CHVIII-W23-01; SVG cây đếm draft THPT_G10_B23_COUNTING_TREE_DRAFT.svg. Không phát sinh item mới từ worked examples.

## Bài 24 — Hoán vị, chỉnh hợp và tổ hợp
S1 SGK pp.65–71; SBT pp.53–54.
Candidate outcomes: G10-B24-PERMUTATION, G10-B24-ARRANGEMENT, G10-B24-COMBINATION, G10-B24-CONSTRAINTS.

**Điều kiện chung.** Có n đối tượng **phân biệt**, n nguyên không âm. Với 0≤k≤n:
- Hoán vị của n đối tượng: P_n=n!, với 0!=1.
- Chỉnh hợp chập k (chọn k phần tử và **xếp thứ tự**): A_n^k=n!/(n-k)!.
- Tổ hợp chập k (chọn nhóm k phần tử, **không** xét thứ tự): C_n^k=n!/[k!(n-k)!].
- Công thức liên hệ A_n^k=C_n^k × k! vì mỗi nhóm k phần tử có k! thứ tự.

**Hướng chọn phương pháp.** Hỏi "chọn nhóm" mà không phân vai → tổ hợp; "xếp k người vào k vị trí phân biệt" → chỉnh hợp; "xếp tất cả" → hoán vị. Chọn nhóm rồi phân vai là hai bước: số nhóm nhân số phân vai **sau** khi nhóm được chọn, nếu mỗi nhóm có cùng số cách phân vai.

**EX-G10-B24-01 — ví dụ đã giải.** Từ 7 học sinh chọn 3 bạn làm nhóm trực nhật (không phân vai): C(7,3)=35. Nếu lập nhóm 3 bạn và cử đúng một trưởng nhóm, mỗi nhóm có 3 lựa chọn, nên có 35×3=105 phương án. Không nhầm bài thứ hai với 7×6×5 vì hai bạn còn lại không được phân biệt vai trò.

**EX-G10-B24-02.** Xếp 4 quyển sách khác nhau lên một giá theo một hàng có 4!=24 cách. Nếu A và B phải kề nhau, gộp thành khối [AB], cùng 2 sách còn lại tạo 3 đối tượng có 3! thứ tự; khối có 2 hoán đổi bên trong, tổng 2×3!=12 cách. Việc gom khối chỉ dùng khi điều kiện kề nhau được mô tả chính xác.

**Lỗi hay gặp.** Tổ hợp và chỉnh hợp dùng lẫn nhau; gộp khối mà quên hoán vị trong khối; đếm thiếu/đếm hai lần các nhóm có ràng buộc; dùng công thức với k>n; bỏ qua việc các đối tượng có phân biệt hay không.

**Mapping:** Core B24-C01,C02; Practice B24-P01..P06; Written + Anchor THPT-G10-CHVIII-W24-ANCHOR-01. Anchor là một nhãn trên Written canonical item, không kho mới.

## Bài 25 — Nhị thức Newton
S1 SGK pp.72–77; SBT pp.55–56.
Candidate outcomes: G10-B25-NEWTON_EXPANSION, G10-B25-COEFFICIENT_SIGN, G10-B25-CONSTANT_TERM, G10-B25-COEFFICIENT_SUM.

**Công thức.** Với n là số nguyên không âm,
(a+b)^n = Σ_(k=0..n) C(n,k) a^(n-k) b^k.
Có n+1 số hạng trước khi thu gọn các số hạng đồng dạng. Hệ số tổ hợp C(n,k)=C(n,n-k) và C(n,k)=C(n-1,k-1)+C(n-1,k) với 1≤k≤n-1. Khi b là một biểu thức âm, dấu âm ở b^k phải được giữ: (-1)^k khác nhau cho số mũ chẵn/lẻ.

**Đọc hệ số.** Trong (a+bx)^n, hệ số của x^r là C(n,r)a^(n-r)b^r (0≤r≤n), với a,b là hằng số. Với biểu thức có các lũy thừa x khác nhau hoặc x^-1, phải viết số mũ tổng quát, giải phương trình số mũ cần tìm, và kiểm tra điều kiện xác định x≠0 nếu có.

**EX-G10-B25-01 — ví dụ đã giải.** Hệ số x² trong (1-2x)^5 là C(5,2)×(-2)^2=10×4=40; dấu dương do mũ chẵn. Hệ số x³ là C(5,3)×(-2)^3=10×(-8)=-80.

**EX-G10-B25-02.** Tổng tất cả hệ số của đa thức f(x)=(2+x)^4 bằng f(1)=3^4=81. Tổng có trọng số dấu luân phiên bằng f(-1)=1. Dùng thay x=1 chỉ khi biết f(x) là đa thức hữu hạn và hiểu rõ hệ số cần cộng.

**Phân tầng scope chưa được S1 xác nhận.** Một số item hiện có — B25-P02 về số hạng không chứa x trong (x+1/x)^6, B25-P06 về tổng hệ số bậc lẻ — được gắn REVIEW_SCOPE/ADVANCED; không tự gán thành chuẩn SGK Core chỉ vì đã có lời giải đúng. Cần reviewer xác nhận hoạt động/tình huống SGK và SBT. Các ví dụ EX ở đây giải thích nguyên lý nhưng không biến những mở rộng thành chuẩn bắt buộc.

**Lỗi hay gặp.** Nhầm k và n-k; bỏ hệ số b^k; quên dấu âm với số mũ lẻ; đọc hệ số x^r sai khi a hoặc b còn chứa x; tự áp dụng f(1) cho tổng *một số* hệ số không thích hợp.

**Mapping:** Core B25-C01,C02; Practice B25-P01..P06; Written THPT-G10-CHVIII-W25-01.

## Hub Luyện tập/Vận dụng CUỐI Chương VIII
SGK bài tập cuối chương printed pp.78–79; SBT pp.57–59. Hub tổng hợp theo mạch: (1) phân tích quy trình đếm bằng cộng/nhân; (2) phân biệt chọn nhóm hay xếp vai; (3) chuyển giữa tổ hợp và hệ số nhị thức, bài toán có điều kiện. Reference 24 canonical Core/Practice (6 Core + 18 P), 3 Written; không tạo trang bài tập cuối chương cấp menu riêng hay nhân bản đáp án. Chưa có crosswalk từng bài cuối chương S1/SBT, cần đối chiếu.

## SGK Tự kiểm tra CUỐI CHƯƠNG VIII — blueprint
Scope SGK_CHAPTER_READINESS:G10_CHVIII, 6 slots CHVIII-READ-B23-01..CHVIII-READ-B25-02 trong shared-items Readiness blueprint v0.1. Slot không phải item; chưa có stem/key. Việc biên soạn bank kiểm tra thật phải có held-out content, no hint/Tutor/đúng-sai/answer key trước Final Submit, ngăn evidence lặp theo exposure của cùng item canonical ở SGK và Topic; self-scored Written không gộp mastery.

## Học theo Chuyên đề — scope độc lập
Ba module kiến thức lớp 10 B23/B24/B25 có thể đóng góp vào Topic tổ hợp xuyên lớp, nhưng **không đủ để tuyên bố Topic 10–12 đã hoàn chỉnh**. Topic Knowledge phải trình bày giải thích tự đủ trong cấu trúc kiến thức dọc; Topic Practice tham chiếu cùng C/P items theo placement, chỉ 3 trang Kiến thức / Luyện tập / Tự kiểm tra, không Topic Core. Topic Readiness scope riêng và chưa có blueprint xuyên lớp.

## D1–D6, provenance và gates
D1: theory candidate, needs S1 deep audit and mathematical review. D2: 6 worked examples authored, unreviewed. D3: 24 canonical C/P candidate, unreviewed. D4: 3 Written candidates, including 1 Anchor tag. D5: no authentic exam-frequency claims. D6: hints/diagnostic errors draft, need independent scrutiny. Figures are internal SVG draft only, Golden UI unchanged.
ACADEMIC_OVERALL=NOT_REVIEWED | ACADEMIC_CLEARANCE=NO | NO_MERGE_DEPLOY.
