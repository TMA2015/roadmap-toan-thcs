# Toán 10 KNTT Chương VII–VIII · D6 Remediation R02 · bản điều chỉnh sau NotebookLM

- `PACKET_ID`: `THPT-G10-CHVII-VIII-D6-REMEDIATION-R01` (giữ nguyên định danh nội dung 14 thẻ).
- `REVIEW_ROUND`: `R02_MINIMAL_DELTA`, dựa trên verdict người dùng chuyển ngày 2026-10-29.
- `R01_VERDICT`: `REVISIONS_REQUIRED` (0 P0; 5 P1; 1 P2). `ACADEMIC_CLEARANCE=HOLD_NOT_ISSUED`.
- `R02_STATUS`: `REVISED_CANDIDATE / NOTEBOOKLM_CONFIRMATION_PENDING / NO_ACADEMIC_PASS / CONTENT_READY=HOLD`.
- `REVIEWED_BASE`: `Temp_THPT_G10_CHVII_VIII_D6_REMEDIATION_R01.md`, SHA256 `3d018a6e6c34b5d92452d64af0acb8f6de6e2674941a7d58650622862e97c188`.
- `BASE_GITHUB_WORKING_DRAFT`: `THPT_G10_CHVII_VIII_D6_REMEDIATION_CARDS_CANDIDATE_v0.1.md` @ blob `25cf1bbaf47e98c884e954328b0b637a2b4e30af` — **không byte-identical với Temp R01 đã review**, không dùng làm baseline cho R02.
- `R02_SOURCE_DOCUMENT`: `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_D6_REMEDIATION_REVIEW_SNAPSHOT_v0.2.md`; nguyên văn file này (kể cả metadata) phải khớp với file Temp R02 gửi reviewer.
- `R02_REVIEW_SCOPE`: Xác minh đúng 6 thẻ có chỉnh sửa D6-G10-B19-02, B20-02, B21-02, B24-01, B24-02, B25-01; 8 thẻ PASS còn lại giữ nguyên. Không tuyên bố reviewer đã PASS R02.

## R02 change log theo verdict R01

| HELP_ID | P | Nội dung sửa | Ảnh hưởng |
|---|---|---|---|
| D6-G10-B19-02 | P1 | Chuẩn hóa \(\vec n\cdot\overrightarrow{AM}=0\) và phương trình tổng quát. | Ký hiệu, không đổi cách giải |
| D6-G10-B20-02 | P1 | Góc B20 mục 2; khoảng cách B20 mục 3. | Tham chiếu SGK |
| D6-G10-B21-02 | P1 | Sửa khoảng cách điểm–đường sang B20 mục 3. | Tham chiếu SGK |
| D6-G10-B24-01 | P1 | Chỉnh hợp B24 mục 2, tổ hợp B24 mục 3; ràng buộc phân vai. | Tham chiếu + diễn đạt điều kiện |
| D6-G10-B24-02 | P1 | Hoán vị B24 mục 1, chỉnh hợp B24 mục 2; ghi rõ nhân 2!. | Tham chiếu + hướng dẫn |
| D6-G10-B25-01 | P2 | Lưu ý ví dụ Core chủ yếu n=4,5 theo reviewer; không giới hạn hiệu lực công thức. | Phạm vi |

**Giới hạn:** Đối chiếu trang SGK/SBT và 5 Permanent Sources v2.0 là kết quả reviewer R01 cung cấp, chưa được tự kiểm từng trang trong đợt sửa R02. Chưa đổi đáp án, hints, rubric của 64 item canonical, chưa đụng private Readiness hay dữ liệu học sinh. Sau khi có verdict cho R02 vẫn cần kiểm D1–D6 toàn chương và A1–A7 trước CONTENT_READY.

---


- `PACKET_ID`: `THPT-G10-CHVII-VIII-D6-REMEDIATION-R01`
- `REVIEW_SCOPE`: 14 thẻ D6 hỗ trợ tự sửa sai (B19–B25); **không phải 14 câu hỏi mới**.
- `STATUS`: `R02_CANDIDATE_DELTA_B_SOURCE_EQUIVALENT / CONFIRMATION_PENDING / CONTENT_READY=HOLD`.
- `LEARNING_PATH`: `SGK_CHAPTER / PUBLIC_FORMATIVE_ONLY`; không suy rộng review sang TOPIC.
- `SOURCE_BRANCH`: `content/thpt-g10-chvii-chviii-authoring-20261028`, source commit tạo bản thảo `97e3e8073f3884baa4d272774904973767af0663`.
- `SOURCE_DOCUMENT`: `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_D6_REMEDIATION_REVIEW_SNAPSHOT_v0.2.md` (R02 corrected from the reviewed Temp R01).
- `LEARNER_SNAPSHOT_CHVII`: PR #620, SHA `51b0fc0cf1f8bb79a7d0280380ac83b1850658e1`.
- `LEARNER_SNAPSHOT_CHVIII`: PR #621, SHA `5d14ee0b027d276a3b1824af8a0ff15f72a5acfe`.
- `SOURCE_ITEM_BLOBS`: ChVII JS `2b191d7abba7a4f5bd79d4c122673cd53a45495b` (32 câu); ChVIII JS `2ae62fada28913ec336b3507684408a1e05a3232` (25 câu).
- `SOURCE_WRITTEN_BLOBS`: ChVII `89e405b3a5719a877e90ff0c85823ad5e603dca5` (4 Written), ChVIII `e53ab99e94a0fad38f277256cb7dbe4e6b40928b` (3 Written).
- `S1`: SGK Toán 10 KNTT tập 2, ChVII trang in 29–58, ChVIII trang 59–79; SBT tập 2 ChVII trang 27–49, ChVIII trang 50–59. Các trang do nguồn receipt cũ ghi nhận; đề nghị NotebookLM đối chiếu **trực tiếp PDF S1**, không coi đây là receipt tự động cho 14 thẻ mới.
- `NOTEBOOKLM_PERMANENT`: chọn **đúng 5 Permanent Sources THPT v2.0**, không chọn v1.0 cùng lúc; có SGK/SBT KNTT S1.

## Quy tắc review và snapshot

**Kiểm xác nhận sáu sửa đổi R02 trên đúng 14 thẻ bên dưới; tám thẻ PASS còn lại chỉ cần xác nhận không đổi.** Đây là bản Temp gửi reviewer, không phải khẳng định nội dung đã xuất bản. Bản thảo GitHub cùng `PACKET_ID` là nguồn làm việc; sau verdict, phải đối chiếu câu chữ của bản được PASS với đúng Git blob trước khi cập nhật manifest A5/A6. Khi hai bản có khác biệt có ý nghĩa, giữ trạng thái HOLD và reconcile trước khi tích hợp. Không tự cấp Academic PASS, không merge/deploy, không thay đáp án hay ID của 64 item đã review, không công khai held-out Readiness.

Mỗi thẻ gồm: dấu hiệu lỗi → bản chất toán → cách tự sửa → tiền đề → ID luyện tập liên kết. Thẻ là nội dung hỗ trợ kiến thức, không phải canonical `item_id`, không tự động tạo chứng cứ đánh giá.

## Nội dung học liệu đề nghị review

### B19 — Phương trình đường thẳng

#### D6-G10-B19-01 · Nhầm vectơ pháp tuyến/chỉ phương

**Dấu hiệu:** Từ ax+by+c=0 dùng (a;b) làm chỉ phương, hoặc chấp nhận vectơ không.

**Bản chất toán:** Với (a;b)≠(0;0), n=(a;b) là pháp tuyến, u=(-b;a) có thể làm chỉ phương vì n·u=0 và u≠0.

**Tự sửa:** Ôn B19 mục 1: đánh dấu n và u, tự kiểm n·u=0 rồi mới viết phương trình.

**Kiến thức cần ôn:** Vectơ tọa độ, tích vô hướng; B19 mục 1.

**Câu đã có để quay lại:** THPT-G10-B19-C01; THPT-G10-B19-P05.

#### D6-G10-B19-02 · Viết đường thẳng qua hai điểm chưa kiểm điều kiện

**Dấu hiệu:** Nhầm AB là pháp tuyến, quên A≠B hoặc không thử nghiệm kết quả.

**Bản chất toán:** Chỉ khi A≠B, AB khác 0 và là một vectơ chỉ phương; chọn n vuông góc AB, rồi thế cả A và B để kiểm phương trình.

**Tự sửa:** Ôn B19 mục 2–3: tìm vectơ \(\overrightarrow{AB}\) với \(A\ne B\), chọn \(\vec n=(a;b)\) vuông góc \(\overrightarrow{AB}\); viết \(a(x-x_A)+b(y-y_A)=0\) (tương đương \(\vec n\cdot\overrightarrow{AM}=0\)); thử lại cả A và B.

**Kiến thức cần ôn:** Hiệu tọa độ hai điểm, vectơ khác 0; B19 mục 2–3.

**Câu đã có để quay lại:** THPT-G10-B19-P02; THPT-G10-B19-P06; THPT-G10-CHVII-W19-01.


### B20 — Vị trí, góc và khoảng cách

#### D6-G10-B20-01 · Nhầm song song với trùng nhau

**Dấu hiệu:** Thấy a1b2−a2b1=0 thì kết luận hai đường trùng.

**Bản chất toán:** Điều kiện này chỉ nói hai pháp tuyến cùng phương. Hai phương trình trùng nhau nếu toàn bộ bộ ba (a,b,c) tỉ lệ theo cùng một λ≠0; nếu không chúng song song phân biệt.

**Tự sửa:** Ôn B19 mục 2 và B20 mục 1: kiểm định thức, rồi so sánh cả hằng số; tránh chia cho một hệ số bằng 0.

**Kiến thức cần ôn:** Phương trình tổng quát B19; tỉ lệ các hệ số; B20 mục 1.

**Câu đã có để quay lại:** THPT-G10-B20-C01; THPT-G10-B20-P05.

#### D6-G10-B20-02 · Góc hoặc khoảng cách ra giá trị âm

**Dấu hiệu:** Bỏ giá trị tuyệt đối hoặc thiếu độ dài vectơ pháp tuyến ở mẫu.

**Bản chất toán:** Khoảng cách là |axM+byM+c|/√(a²+b²)≥0. Với góc nhỏ 0°≤φ≤90°, cosφ=|n1·n2|/(||n1||||n2||)∈[0,1].

**Tự sửa:** Ôn B20 mục 2 (góc) và mục 3 (khoảng cách): xác nhận pháp tuyến khác vectơ không, đặt trị tuyệt đối ở tử và chia đúng độ dài pháp tuyến; kiểm \(\cos\varphi\in[0;1]\) cho góc nhỏ, \(d\ge0\) cho khoảng cách.

**Kiến thức cần ôn:** Chuẩn vectơ, tích vô hướng; B20 mục 2.

**Câu đã có để quay lại:** THPT-G10-B20-P02; THPT-G10-B20-P03; THPT-G10-B20-P06; THPT-G10-CHVII-W20-01.


### B21 — Đường tròn

#### D6-G10-B21-01 · Nhầm R² với bán kính

**Dấu hiệu:** Hoàn thành bình phương ra R²≤0 nhưng vẫn coi là đường tròn có bán kính dương.

**Bản chất toán:** Chỉ R²>0 mới cho đường tròn thực bán kính R>0. R²=0 cho một điểm; R²<0 không có điểm thực.

**Tự sửa:** Ôn B21 mục 1: chuyển về (x−a)²+(y−b)²=R² rồi kiểm R² trước khi lấy căn.

**Kiến thức cần ôn:** Hằng đẳng thức bình phương và bình phương không âm; B21 mục 1.

**Câu đã có để quay lại:** THPT-G10-B21-C02; THPT-G10-B21-P05.

#### D6-G10-B21-02 · Viết tiếp tuyến khi M chưa thuộc đường tròn

**Dấu hiệu:** Dùng IM làm pháp tuyến nhưng chưa chứng minh IM²=R²; nhầm cắt nhau với tiếp xúc.

**Bản chất toán:** Công thức tiếp tuyến tại M áp dụng khi M thuộc đường tròn. Đường d bất kỳ tiếp xúc khi d(I,d)=R>0.

**Tự sửa:** Ôn B21 mục 2 và B20 mục 3 (khoảng cách): xác minh \(M\in(C)\), tính \(\overrightarrow{IM}\), lập tiếp tuyến qua M vuông góc với \(\overrightarrow{IM}\), rồi kiểm lại \(d(I,d)=R\).

**Kiến thức cần ôn:** B19 pháp tuyến, B20 khoảng cách; B21 mục 2.

**Câu đã có để quay lại:** THPT-G10-B21-P02; THPT-G10-B21-P03; THPT-G10-CHVII-W21-ANCHOR-01.


### B22 — Ba đường conic

#### D6-G10-B22-01 · Đảo dấu quan hệ c² của conic

**Dấu hiệu:** Dùng c²=a²+b² cho elip hoặc c²=a²−b² cho hypebol.

**Bản chất toán:** Trong dạng chính tắc trục Ox: elip x²/a²+y²/b²=1, a>b>0: c²=a²−b²; hypebol x²/a²−y²/b²=1, a,b>0: c²=a²+b².

**Tự sửa:** Ôn B22 mục 1–2: đọc dấu trước y² rồi mới xác định a²,b²,c²; elip có c<a, hypebol có c>a.

**Kiến thức cần ôn:** Phương trình chính tắc; B22 mục 1–2.

**Câu đã có để quay lại:** THPT-G10-B22-C02; THPT-G10-B22-P01; THPT-G10-B22-P02; THPT-G10-CHVII-W22-01.

#### D6-G10-B22-02 · Nhầm p với tọa độ tiêu điểm parabol

**Dấu hiệu:** Từ y²=2px ghi tiêu điểm F(p;0), đường chuẩn x=−p.

**Bản chất toán:** Theo quy ước B22 mục 3 (p>0): F(p/2;0), đường chuẩn x=−p/2. Với y²=Kx, phải giải 2p=K.

**Tự sửa:** Ôn B22 mục 3: tính p từ hệ số 2p, xác nhận khoảng cách từ điểm thuộc parabol tới tiêu điểm và đường chuẩn bằng nhau.

**Kiến thức cần ôn:** B20 khoảng cách điểm–đường, B22 mục 3.

**Câu đã có để quay lại:** THPT-G10-B22-P03; THPT-G10-B22-P04; THPT-G10-B22-P06.


### B23 — Quy tắc đếm

#### D6-G10-B23-01 · Cộng hay nhân không theo cấu trúc lựa chọn

**Dấu hiệu:** Dựa máy móc vào từ «hoặc» hay «và» mà không kiểm tra có các trường hợp rời nhau hoặc các bước liên tiếp.

**Bản chất toán:** Quy tắc cộng áp dụng cho các trường hợp loại trừ nhau; quy tắc nhân cho các bước lựa chọn. Khi nhóm giao nhau hoặc số cách mỗi bước tùy nhánh, cần chia trường hợp chính xác.

**Tự sửa:** Ôn B23 mục 1–2: mô tả một kết quả hoàn chỉnh, vẽ các nhánh loại trừ hoặc các bước nối tiếp, kiểm tra đếm trùng.

**Kiến thức cần ôn:** Tập hợp rời nhau, quy tắc nhân; B23 mục 1–2.

**Câu đã có để quay lại:** THPT-G10-B23-C01; THPT-G10-B23-C02; THPT-G10-B23-P06; THPT-G10-CHVIII-W23-01.

#### D6-G10-B23-02 · Đếm sai số có chữ số 0 và phụ thuộc nhánh

**Dấu hiệu:** Cho chữ số đầu bằng 0; nhân các lựa chọn như cố định dù có nhánh khác nhau.

**Bản chất toán:** Chữ số đầu của số tự nhiên có số chữ số xác định phải khác 0. Khi số cách bước sau phụ thuộc lựa chọn trước, tách các nhánh rời nhau rồi cộng tích; ghi rõ có lặp hay không.

**Tự sửa:** Ôn B23 mục 2: chọn trường hợp chữ số cuối bằng 0/khác 0 nếu có điều kiện chẵn, lập bảng số lựa chọn từng bước, kiểm không giao nhau.

**Kiến thức cần ôn:** Quy tắc cộng/nhân; điều kiện chữ số đầu; B23 mục 2.

**Câu đã có để quay lại:** THPT-G10-B23-P01; THPT-G10-B23-P05.


### B24 — Hoán vị, chỉnh hợp và tổ hợp

#### D6-G10-B24-01 · Nhầm nhóm với phân vai

**Dấu hiệu:** Đổi thứ tự các thành viên của một nhóm không phân vai nhưng lại coi là kết quả mới.

**Bản chất toán:** Tổ hợp không xét thứ tự; chỉnh hợp gán k vai trò phân biệt. Với 0≤k≤n, A(n,k)=C(n,k)·k!.

**Tự sửa:** Ôn B24 mục 2 (chỉnh hợp) và mục 3 (tổ hợp): hỏi đổi chỗ hai người có tạo phương án mới không để chọn A hay C. Nếu xếp toàn bộ k người đã chọn vào k vị trí phân biệt, dùng \(A_n^k=C_n^k\cdot k!\); nếu chỉ phân một số vai trò, đếm đúng số cách giao vai tương ứng.

**Kiến thức cần ôn:** B23 quy tắc nhân, giai thừa; B24 mục 1.

**Câu đã có để quay lại:** THPT-G10-B24-C02; THPT-G10-B24-P01; THPT-G10-B24-P02; THPT-G10-CHVIII-W24-ANCHOR-01.

#### D6-G10-B24-02 · Gộp khối và đếm ràng buộc thiếu hoặc trùng

**Dấu hiệu:** Gộp hai người kề nhau thành khối nhưng quên hoán vị trong khối, hoặc các nhánh không loại trừ.

**Bản chất toán:** Với hai người phân biệt A, B phải kề nhau, số thứ tự của nhóm sau khi gộp khối nhân thêm 2! cách đổi chỗ trong khối. «Ít nhất một» có thể đếm bằng phần bù khi tập tất cả xác định.

**Tự sửa:** Ôn B24 mục 1 (hoán vị) và mục 2 (chỉnh hợp): nếu A, B phải đứng cạnh nhau, gộp thành một khối, đếm thứ tự các khối và nhân thêm \(2!\) thứ tự nội bộ; khi dùng phần bù, nêu rõ tập tất cả và tập bị loại, kiểm mỗi trường hợp được đếm đúng một lần.

**Kiến thức cần ôn:** B23 chia trường hợp; B24 hoán vị/tổ hợp.

**Câu đã có để quay lại:** THPT-G10-B24-P04; THPT-G10-B24-P05; THPT-G10-B24-P06.


### B25 — Nhị thức Newton

#### D6-G10-B25-01 · Sai dấu và vị trí hệ số Newton

**Dấu hiệu:** Nhầm k với n−k, thiếu hệ số tổ hợp hoặc quên dấu trong (−bx)^k.

**Bản chất toán:** Với a,b hằng số, n nguyên không âm, hệ số x^r trong (a+bx)^n (0≤r≤n) là C(n,r)a^(n−r)b^r; nếu b âm, dấu phụ thuộc tính chẵn/lẻ của r.

**Tự sửa:** Ôn B25 mục 1: xác định phần mang x, viết số hạng tổng quát \(C_n^r a^{n-r}b^r x^r\) rồi mới chọn r; nếu b âm, soát dấu theo tính chẵn/lẻ của r. Theo nhận xét reviewer, ví dụ Core SGK KNTT lớp 10 tập trung \(n=4,5\); công thức vẫn đúng với mọi n nguyên không âm.

**Kiến thức cần ôn:** B24 tổ hợp, số mũ; B25 mục 1.

**Câu đã có để quay lại:** THPT-G10-B25-C01; THPT-G10-B25-C02; THPT-G10-B25-P01; THPT-G10-B25-P03; THPT-G10-B25-P04; THPT-G10-CHVIII-W25-01.

#### D6-G10-B25-02 · Số hạng tự do và bài mở rộng chứa x⁻¹

**Dấu hiệu:** Khai triển toàn bộ để tìm hạng không chứa x trong (a+bx)^n, hoặc tự động coi bài chứa x⁻¹ là Core bắt buộc.

**Bản chất toán:** Trong (a+bx)^n (a,b là hằng số), hạng không chứa x là a^n. Nếu chứa x⁻¹ phải giải số mũ tổng quát bằng 0 và giữ điều kiện x≠0; đây là dạng mở rộng của bank hiện tại.

**Tự sửa:** Ôn B25 mục 1–2 và P07 để củng cố Core. P02/P05 là hỗ trợ mở rộng, P06 chuyên sâu tự chọn, không dùng làm yêu cầu đánh giá Core bắt buộc.

**Kiến thức cần ôn:** Số hạng tổng quát; điều kiện x≠0; B25 mục 1–2.

**Câu đã có để quay lại:** THPT-G10-B25-P07; optional: THPT-G10-B25-P02; THPT-G10-B25-P05; THPT-G10-B25-P06.

## Đối chiếu ID thực tế (không tạo bài tập mới)

| Bài | Canonical C/P formative IDs | Canonical Written ID |
|---|---|---|
| B19 | THPT-G10-B19-C01, THPT-G10-B19-C02, THPT-G10-B19-P01, THPT-G10-B19-P02, THPT-G10-B19-P03, THPT-G10-B19-P04, THPT-G10-B19-P05, THPT-G10-B19-P06 | THPT-G10-CHVII-W19-01 |
| B20 | THPT-G10-B20-C01, THPT-G10-B20-C02, THPT-G10-B20-P01, THPT-G10-B20-P02, THPT-G10-B20-P03, THPT-G10-B20-P04, THPT-G10-B20-P05, THPT-G10-B20-P06 | THPT-G10-CHVII-W20-01 |
| B21 | THPT-G10-B21-C01, THPT-G10-B21-C02, THPT-G10-B21-P01, THPT-G10-B21-P02, THPT-G10-B21-P03, THPT-G10-B21-P04, THPT-G10-B21-P05, THPT-G10-B21-P06 | THPT-G10-CHVII-W21-ANCHOR-01 |
| B22 | THPT-G10-B22-C01, THPT-G10-B22-C02, THPT-G10-B22-P01, THPT-G10-B22-P02, THPT-G10-B22-P03, THPT-G10-B22-P04, THPT-G10-B22-P05, THPT-G10-B22-P06 | THPT-G10-CHVII-W22-01 |
| B23 | THPT-G10-B23-C01, THPT-G10-B23-C02, THPT-G10-B23-P01, THPT-G10-B23-P02, THPT-G10-B23-P03, THPT-G10-B23-P04, THPT-G10-B23-P05, THPT-G10-B23-P06 | THPT-G10-CHVIII-W23-01 |
| B24 | THPT-G10-B24-C01, THPT-G10-B24-C02, THPT-G10-B24-P01, THPT-G10-B24-P02, THPT-G10-B24-P03, THPT-G10-B24-P04, THPT-G10-B24-P05, THPT-G10-B24-P06 | THPT-G10-CHVIII-W24-ANCHOR-01 |
| B25 | THPT-G10-B25-C01, THPT-G10-B25-C02, THPT-G10-B25-P01, THPT-G10-B25-P02, THPT-G10-B25-P03, THPT-G10-B25-P04, THPT-G10-B25-P05, THPT-G10-B25-P06, THPT-G10-B25-P07 | THPT-G10-CHVIII-W25-01 |

**Tổng đối chiếu:** 57 ID formative + 7 Written = 64 ID canonical đã có. `expected HELP_ID` = 14; tất cả thẻ mới không phải ITEM_ID. B22-C01 là chuyên sâu tự chọn, không Core bắt buộc; B25-P02/P05 mở rộng và B25-P06 chuyên sâu; B25-P07 bổ sung Core Practice theo receipt delta riêng. Không thay lời giải/rubric/hint của các ID cũ.

## Tiêu chí và biểu mẫu verdict cần trả

1. Trả `SOURCE_RECEIPT` đối chiếu PDF SGK/SBT S1, từng thẻ mới có vượt phạm vi SGK Core hoặc bỏ điều kiện toán không; nếu chưa đủ nguồn: `INSUFFICIENT_EVIDENCE`.
2. Trả 14 dòng `HELP_ID|PASS/REVISE/HOLD` theo đúng ID, và 7 dòng `LESSON_D6|...`, đối chiếu `EXPECTED=14`, `REVIEWED=...`, `MISSING`, `DUPLICATES`, `UNEXPECTED`.
3. Kiểm độ đúng của mọi công thức/giới hạn, phân loại lỗi có ích, hỗ trợ tự giải không phụ thuộc AI, liên kết chính xác sang các item sẵn có và không mâu thuẫn với hint/lời giải cũ. Nếu không có đủ nội dung cũ để đối chiếu trùng ý, ghi rõ hạn chế bằng chứng.
4. Ghi `P0/P1/P2` theo từng HELP_ID, `MINIMAL_DELTA`, `ACADEMIC_D6_OVERALL` và `ACADEMIC_CLEARANCE_FOR_THIS_DELTA`; không tự suy toàn chương hoàn chỉnh hoặc `CONTENT_READY`.
5. Không đưa stems/keys/rubrics Readiness đã giữ kín lên GitHub/browser; không yêu cầu bật Mastery, merge/deploy, hoặc chấm tự luận tự động. `SGK_CHAPTER_READINESS` và `TOPIC_READINESS` vẫn độc lập.

**Quy trình delta:** 14 thẻ mới thuộc base `DELTA_C_ACADEMIC_MATERIAL` (R01 reviewer báo REVISIONS_REQUIRED). Sáu sửa theo reviewer được ghi `DELTA_B_SOURCE_EQUIVALENT` có căn cứ từ R01, nhưng toàn packet R02 vẫn chờ reviewer xác nhận phạm vi học liệu mới trước khi coi đã hoàn tất review. `ACADEMIC_PASS=NOT_ASSUMED`, `RELEASE=HOLD`.
