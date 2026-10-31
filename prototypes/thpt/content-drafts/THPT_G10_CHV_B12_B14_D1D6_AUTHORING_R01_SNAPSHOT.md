# Temp · Toán 10 KNTT Tập 1 · Chương V · Bài 12–14 · D1–D6 R01

**PACKET_ID:** `THPT-G10-CHV-B12-B14-D1D6-AUTHORING-20261030-R01`  
**LEARNING_PATH:** `SGK_CHAPTER`; **RELEASE_SCOPE:** `PUBLIC_FORMATIVE_ONLY` (B12–B14)  
**VERSION:** `R01 / NEW_ACADEMIC_MATERIAL / 2026-10-30` · **REVIEW:** `NOTEBOOKLM_NOT_REVIEWED`  
**BASE AUTHORING:** `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_S1_D1D2_PREFLIGHT_v0.1.md` (preflight; nội dung R01 mới được chốt đầy đủ và cần review như DELTA_C).  
**CANONICAL_SOURCE:** duy nhất nội dung câu, đáp án, lời giải và rubric ở trong snapshot này; file registry chỉ tham chiếu ID.  
**NO RELEASE:** không thay đổi website, Firebase, dữ liệu trình duyệt, lịch sử học, Readiness, Mastery, merge/deploy. Không coi NotebookLM PASS nội dung (nếu có) là tính năng đánh giá sẵn sàng.

## 0. Nguồn S1 và phạm vi kiểm toán

**Nguồn thẩm quyền S1 đã mở và xem trực tiếp:** bản PDF scan gốc do chủ dự án cung cấp:

| Bài | SGK Toán 10 KNTT tập 1, trang in | SBT Toán 10 KNTT tập 1, trang in | Phạm vi Core |
|---|---|---|---|
| B12 · Số gần đúng và sai số | 73–77 | 72–73 (B13 bắt đầu p.74) | Số gần đúng, sai số tuyệt đối/tương đối, độ chính xác, số quy tròn |
| B13 · Các số đặc trưng đo xu thế trung tâm | 78–83 | 74–77 | Trung bình, trung vị, tứ phân vị, mốt, nhận xét mẫu |
| B14 · Các số đặc trưng đo độ phân tán | 84–88 | 78–80 | Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn, giá trị bất thường |
| Bài tập cuối Chương V | 89–90 | 81–84 | Tham chiếu kiểm độ sâu, **chưa phải** bài Tự kiểm tra cuối chương |

Đối chiếu trực tiếp 18 trang SGK in 73–90, 13 trang SBT in 72–84; các trang gốc được render để đọc công thức, ví dụ, hình/biểu đồ và dạng bài. **Đề trong gói do tác giả mới xây dựng, không chép nguyên văn SGK/SBT.** Đối chiếu nguồn S1 tại NotebookLM được yêu cầu xác nhận riêng: phạm vi, cách lấy tứ phân vị ở n lẻ, định nghĩa sai số tương đối, đặc biệt các ngưỡng giá trị bất thường.

Áp dụng đúng **5 Permanent Sources Toán THPT v2.0 đang hiệu lực** trong notebook, không dùng v1.0 đồng thời. File 08 THPT Dual Complete Learning Paths v2.0 là nguồn kiến trúc trong dự án này, không tự coi nó là một trong 5 Permanent Sources của NotebookLM.

**Báo cáo cần có:** SOURCE_RECEIPT / LESSON_VERDICTS / OUTCOME_MATRIX / EXPECTED_VS_REVIEWED_ITEM_IDS / D1–D6 / P0,P1,P2 / MINIMAL_DELTA / ACADEMIC_CLEARANCE_FOR_THIS_DELTA, không mặc định PASS khi thiếu bằng chứng. Mọi verdict chỉ áp dụng đúng source snapshot R01 và B12–B14 PUBLIC_FORMATIVE_ONLY.

## 1. Ma trận outcome và bằng chứng dự kiến

| Outcome ID (ứng viên) | Bài | Mục tiêu cần chứng minh | S1 |
|---|---|---|---|
| `G10-B12-APPROX_CONCEPT` | B12 | Số đúng/gần đúng, biểu diễn xấp xỉ và ý nghĩa đo lường | SGK 73–74; SBT 72 |
| `G10-B12-ABS_ERROR` | B12 | Sai số tuyệt đối, độ chính xác d khi số đúng chưa biết | SGK 74–75; SBT 72–73 |
| `G10-B12-REL_ERROR` | B12 | Sai số tương đối, phân biệt giá trị chính xác và ước lượng | SGK 75; SBT 72–73 |
| `G10-B12-ROUNDING` | B12 | Làm tròn số, số quy tròn và mức sai số | SGK 75–77; SBT 73 |
| `G10-B13-MEAN` | B13 | Số trung bình, có hoặc không có bảng tần số | SGK 78–79; SBT 74–76 |
| `G10-B13-MEDIAN` | B13 | Trung vị ở n chẵn/lẻ sau khi sắp mẫu | SGK 79; SBT 74–76 |
| `G10-B13-QUARTILES` | B13 | Q1, Q2, Q3 theo quy tắc nửa mẫu của KNTT | SGK 80–81; SBT 75–77 |
| `G10-B13-MODE` | B13 | Mốt, nhiều mốt, trường hợp không có mốt | SGK 81; SBT 75 |
| `G10-B13-INTERPRETATION` | B13 | Chọn số trung bình/trung vị khi có giá trị cực đoan | SGK 78–83; SBT 75–77 |
| `G10-B14-RANGE_IQR` | B14 | Khoảng biến thiên, khoảng tứ phân vị | SGK 84–85; SBT 78–80 |
| `G10-B14-VARIANCE` | B14 | Phương sai mô tả dãy số liệu: chia n | SGK 86; SBT 78–80 |
| `G10-B14-STDDEV` | B14 | Độ lệch chuẩn, đơn vị và nhận xét | SGK 86; SBT 78–80 |
| `G10-B14-OUTLIERS` | B14 | Giá trị bất thường qua hàng rào 1,5·IQR | SGK 87; SBT 78–80 |
| `G10-B14-COMPARISON` | B14 | So sánh hai mẫu cùng trung bình nhưng phân tán khác | SGK 84–88; SBT 78–80 |

14 outcome này là *candidate IDs*, chưa có chấm Skill Mastery hay đăng ký vào bank runtime. Tất cả bằng chứng công khai ở B12–B14 có thể được đặt lại ở Topic Practice theo placement nếu hợp đồng canonical cho phép, **không nhân đôi item**. Không tạo trang SGK Core riêng trong Topic.

## 2. D1 — Bài 12. Số gần đúng và sai số

### 2.1. Đúng/gần đúng và số quy tròn
Theo kí hiệu SGK/SBT KNTT, **\(a\) là số gần đúng**, còn **\(\bar a\) là số đúng** (có thể chưa biết). Số gần đúng \(a\) thay cho số đúng \(\bar a\); viết \(a\approx\bar a\). Không phải mọi chữ số thập phân được hiển thị đều là chữ số đáng tin cậy; độ chính xác phụ thuộc phép đo/quy trình. Làm tròn một giá trị theo hàng yêu cầu để có số quy tròn. Quy tròn tới hàng phần mười, phần trăm, hàng chục… phải xác định rõ hàng làm tròn.

### 2.2. Sai số tuyệt đối, độ chính xác
Sai số tuyệt đối của số gần đúng \(a\) là \(\Delta_a=|a-\bar a|\). Nếu **chưa biết** số đúng \(\bar a\), nhưng \(\Delta_a\le d\), thì \(d\) là **độ chính xác/giới hạn trên**; không được suy \(\Delta_a=d\). Số đúng nằm trong \(a-d\le\bar a\le a+d\). Sai số tuyệt đối cùng đơn vị với đại lượng.

### 2.3. Sai số tương đối
Với số gần đúng **\(a\ne0\)** và số đúng \(\bar a\) đã biết, \(\delta_a=\Delta_a/|a|\) (thường viết theo %): **mẫu số là số gần đúng \(a\) theo KNTT**, không phải số đúng. Khi chỉ có \(a\ne0\) và \(\Delta_a\le d\), chỉ suy ra **cận trên** \(\delta_a\le d/|a|\), không được viết đẳng thức \(\delta_a=d/|a|\) nếu chưa biết sai số thực. Không chia cho 0, không nhầm tỷ lệ với %.

### 2.4. Giới hạn độ chính xác và quy tròn
Khi làm tròn một số đúng tới đơn vị của hàng \(h>0\), sai số làm tròn thông thường không quá \(h/2\) nếu áp dụng quy tắc làm tròn gần nhất. Không tự khẳng định mọi phép đo tới hàng đó có cùng sai số tối đa: còn phụ thuộc độ chính xác đo ban đầu. Khi một số gần đúng \(a\) được cho với độ chính xác \(d\) nhưng không nêu hàng quy tròn, cần kiểm đúng quy tắc SGK/SBT về **hàng thấp nhất có một đơn vị lớn hơn d** trước khi chọn hàng.

#### EX-G10-B12-01 · phân biệt sai số thực / ước lượng
Biết số đúng \(\bar a=12{,}347\), số gần đúng \(a=12{,}35\). \(\Delta_a=0{,}003\), \(\delta_a=0{,}003/12{,}35\approx0{,}0243\%\). Phải dùng **12,35 ở mẫu số** theo SGK KNTT. Nếu chỉ biết \(\Delta_a\le0{,}003\) thì chỉ có cận \(\delta_a\le0{,}003/12{,}35\).

#### EX-G10-B12-02 · giới hạn sai số
Ghi chiều dài gần đúng \(a=20{,}0\,\mathrm{cm}\) với độ chính xác \(d=0{,}1\,\mathrm{cm}\). Số đúng \(\bar a\in[19{,}9;20{,}1]\,\mathrm{cm}\). Không xác định được chính xác \(\Delta\) nếu không biết giá trị đúng.

#### EX-G10-B12-03 · quy tròn
Làm tròn \(3{,}14159\) tới hàng phần trăm được \(3{,}14\). Sai số tuyệt đối của phép làm tròn \(0{,}00159\le0{,}005\). Nói rõ hàng phần trăm là 2 chữ số thập phân.

## 3. D1 — Bài 13. Các số đặc trưng đo xu thế trung tâm

### 3.1. Số trung bình, trung vị
Mẫu \(x_1,\ldots,x_n\) có \(n>0\), số trung bình \(\bar x=(\sum_i x_i)/n\). Nếu \(x_i\) có tần số \(m_i\), \(\bar x=\sum_i m_ix_i/\sum_i m_i\). Phải sắp mẫu không giảm trước khi tìm trung vị \(Q_2\): với \(n\) lẻ lấy giá trị chính giữa; \(n\) chẵn lấy trung bình hai giá trị giữa.

### 3.2. Tứ phân vị theo KNTT
Với mẫu tăng dần: \(Q_2\) là trung vị; \(Q_1\) là trung vị **nửa dưới** và \(Q_3\) là trung vị **nửa trên**. Khi \(n\) lẻ, **loại chính \(Q_2\)** khỏi cả hai nửa; khi \(n\) chẵn, chia dãy thành hai nửa bằng nhau. Mỗi trường hợp cần ghi thao tác, không dùng máy tính có quy ước percentile khác làm bằng chứng thay SGK.

### 3.3. Mốt và diễn giải
Mốt là giá trị xuất hiện nhiều lần nhất (tần số cao nhất); có thể có nhiều giá trị đồng mốt. Theo ví dụ SGK khi tất cả giá trị có tần số 1, mẫu được coi **không có mốt**. Số trung bình có thể bị kéo về phía giá trị rất lớn/nhỏ, trong khi trung vị ít nhạy hơn, nên việc chọn số đặc trưng phải theo tình huống.

#### EX-G10-B13-01 · một mẫu n lẻ
Mẫu đã sắp \(2,3,3,7,10\): \(\bar x=25/5=5\), \(Q_2=3\), mốt 3; nửa trái \(2,3\) cho \(Q_1=2{,}5\), nửa phải \(7,10\) cho \(Q_3=8{,}5\). Số trung bình cao hơn trung vị vì số 10.

#### EX-G10-B13-02 · mẫu n chẵn
Mẫu \(2,4,6,10,12,20\): \(Q_2=(6+10)/2=8\); \(Q_1=4\), \(Q_3=12\); \(\bar x=54/6=9\). Cần xếp số trước khi chia nửa.

#### EX-G10-B13-03 · bảng tần số
Giá trị 5 có tần số 2, 7 có tần số 3, 9 có tần số 1. \(n=6\), \(\bar x=(10+21+9)/6=20/3\), \(Q_2=7\), mốt 7, \(Q_1=5\), \(Q_3=7\). Không dùng \((5+7+9)/3\).

## 4. D1 — Bài 14. Các số đặc trưng đo độ phân tán

### 4.1. Khoảng biến thiên và khoảng tứ phân vị
Khoảng biến thiên \(R=x_{\max}-x_{\min}\ge0\). Khoảng tứ phân vị \(\Delta_Q=Q_3-Q_1\ge0\), được xác định từ **cách lấy tứ phân vị của SGK**. R rất nhạy với giá trị quá lớn/quá nhỏ, \(\Delta_Q\) nhìn vào phần 50% số liệu giữa.

### 4.2. Phương sai / độ lệch chuẩn theo dãy đang mô tả
\(s^2=\frac1n\sum_{i=1}^{n}(x_i-\bar x)^2\), **chia cho n** như SGK chứ không tự thay bằng \(n-1\). \(s=\sqrt{s^2}\). Nếu dữ liệu gốc tính bằng kg thì phương sai tính kg² và độ lệch chuẩn tính kg. Với bảng tần số, tính \(\sum m_i(x_i-\bar x)^2/n\).

### 4.3. Giá trị bất thường
Theo quy tắc của SGK, giá trị \(x<Q_1-1{,}5\Delta_Q\) hoặc \(x>Q_3+1{,}5\Delta_Q\) được coi là giá trị bất thường. Dấu ở đây **nghiêm ngặt** (<, >); bằng ngưỡng không bị liệt kê. Không tự động loại những giá trị đó khỏi dữ liệu khi tính toán nếu đề bài không yêu cầu.

#### EX-G10-B14-01 · R, IQR, phương sai
Mẫu \(2,4,6,8\): \(\bar x=5\), \(R=6\), \(Q_1=3,Q_3=7,\Delta_Q=4\); \(s^2=(9+1+1+9)/4=5\), \(s=\sqrt5\approx2{,}236\).

#### EX-G10-B14-02 · cùng trung bình, khác độ phân tán
\(A=(4,5,6)\), \(B=(1,5,9)\) đều có \(\bar x=5\), nhưng \(s_A^2=2/3\), \(s_B^2=32/3\); B biến động hơn, không thể dùng duy nhất trung bình.

#### EX-G10-B14-03 · nhận diện giá trị bất thường
Mẫu \(1,2,2,3,3,4,4,20\): \(Q_1=2\), \(Q_3=4\), \(\Delta_Q=2\), ngưỡng trên \(4+1{,}5(2)=7\), nên 20 là giá trị bất thường. Không gọi tất cả giá trị lớn hơn trung bình là ngoại lệ.


## 5. D3 — Ngân hàng 24 câu SGK Formative canonical mới

**Cấu trúc:** 3 bài × (2 Core + 6 SGK Practice) = 24 `item_id` độc nhất. Mọi stem, phương án, key, hint, solution lưu một lần duy nhất trong source này. Hint/đáp án **chỉ xuất hiện sau tương tác phù hợp trong Luyện tập công khai**, không phải ở bài kiểm tra độc lập. Các ID có thể được tái sử dụng qua `placement`/`role`, không nhân bản nội dung. Difficulty là nhãn tác giả, NotebookLM cần thẩm định độc lập.


### 01. `THPT-G10-B12-C01`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **OUTCOME_ID:** `G10-B12-ABS_ERROR`

- **RESPONSE_TYPE:** `MCQ_SINGLE`

- **STEM:** Biết số đúng \(\bar a=14{,}37\), số gần đúng \(a=14{,}4\). Sai số tuyệt đối là bao nhiêu?

- **OPTIONS:** A. \(0{,}3\) | B. \(0{,}03\) | C. \(0{,}003\) | D. \(14{,}37\)

- **KEY_CHOICE:** `B`

- **KEY:** \(0{,}03\)
- **HINT_PUBLIC_ONLY:** Lấy trị tuyệt đối hiệu số đúng và số gần đúng.
- **WORKED_SOLUTION:** \(\Delta=|14{,}37-14{,}4|=0{,}03\).


### 02. `THPT-G10-B12-C02`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **OUTCOME_ID:** `G10-B12-ABS_ERROR`

- **RESPONSE_TYPE:** `MCQ_SINGLE`

- **STEM:** Kết quả đo \(12{,}3\,\mathrm{cm}\) có độ chính xác \(d=0{,}2\,\mathrm{cm}\). Kết luận chắc chắn nào đúng?

- **OPTIONS:** A. \(\bar a=12{,}5\) | B. \(\Delta=0{,}2\) chắc chắn | C. \(\bar a\in[12{,}1;12{,}5]\) | D. \(\bar a=12{,}3\) chắc chắn

- **KEY_CHOICE:** `C`

- **KEY:** \(\bar a\in[12{,}1;12{,}5]\,\mathrm{cm}\)
- **HINT_PUBLIC_ONLY:** Độ chính xác là giới hạn sai số, chưa biết sai số thực.
- **WORKED_SOLUTION:** \(|\bar a-12{,}3|\le0{,}2\) nên \(12{,}1\le\bar a\le12{,}5\). Không suy sai số thực bằng 0,2.


### 03. `THPT-G10-B12-P01`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B12-REL_ERROR`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Số đúng \(\bar a=80\), dùng số gần đúng \(a=78\). Tính sai số tương đối theo phần trăm.

- **KEY:** \(100/39\%\approx2{,}5641\%\)
- **HINT_PUBLIC_ONLY:** Tìm \(\Delta\), chia cho số gần đúng \(|a|=78\) theo SGK.
- **WORKED_SOLUTION:** \(\Delta_a=|80-78|=2\); \(\delta_a=2/78=1/39\approx2{,}5641\%\). Không dùng mẫu số 80.


### 04. `THPT-G10-B12-P02`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B12-ROUNDING`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Quy tròn số đúng 4286 đến hàng chục. Hãy cho số quy tròn và sai số tuyệt đối thực.

- **KEY:** 4290, sai số 4
- **HINT_PUBLIC_ONLY:** Chữ số hàng đơn vị là 6.
- **WORKED_SOLUTION:** 4286 làm tròn đến hàng chục được 4290; sai số thực \(|4290-4286|=4\), không quá 5.


### 05. `THPT-G10-B12-P03`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B12-REL_ERROR`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Số đúng là 2500 người, số gần đúng a=2475 người. Sai số tương đối là bao nhiêu?

- **KEY:** \(100/99\%\approx1{,}0101\%\)
- **HINT_PUBLIC_ONLY:** Chia sai số tuyệt đối cho **số gần đúng** 2475 theo KNTT.
- **WORKED_SOLUTION:** \(\Delta_a=25\), \(\delta_a=25/2475=1/99\approx1{,}0101\%\). Không dùng mẫu 2500.


### 06. `THPT-G10-B12-P04`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B12-APPROX_CONCEPT`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Bản ghi \(3{,}20\,\mathrm{m}\) với độ chính xác \(0{,}05\,\mathrm{m}\). Khoảng nào **chắc chắn chứa** giá trị đúng?

- **KEY:** \(\bar a\in[3{,}15;3{,}25]\,\mathrm{m}\)
- **HINT_PUBLIC_ONLY:** Giải \(|\bar a-3{,}20|\le0{,}05\). Số gần đúng là 3,20.
- **WORKED_SOLUTION:** \(3{,}20-0{,}05\le\bar a\le3{,}20+0{,}05\), tức \(\bar a\in[3{,}15;3{,}25]\,\mathrm{m}\).


### 07. `THPT-G10-B12-P05`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B12-ROUNDING`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Làm tròn 10,06 đến hàng phần mười. Sai số tuyệt đối của phép làm tròn là bao nhiêu?

- **KEY:** \(10{,}1\) và \(0{,}04\)
- **HINT_PUBLIC_ONLY:** Giữ một chữ số thập phân; xem chữ số hàng phần trăm.
- **WORKED_SOLUTION:** \(10{,}06\to10{,}1\); \(\Delta=|10{,}06-10{,}1|=0{,}04\).


### 08. `THPT-G10-B12-P06`

- **LESSON_ID:** `G10-B12` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **OUTCOME_ID:** `G10-B12-REL_ERROR`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Hai phép đo cùng cho giá trị gần đúng \(10{,}0\,\mathrm{cm}\), nhưng độ chính xác lần lượt \(d_1=0{,}2\) cm và \(d_2=0{,}05\) cm. So sánh **cận trên** sai số tương đối \(d/|a|\).

- **KEY:** Lần 2 nhỏ hơn: \(0{,}5\%\) so với \(2\%\)
- **HINT_PUBLIC_ONLY:** Tính hai cận trên với cùng số gần đúng a=10,0; không gọi đó là sai số thực.
- **WORKED_SOLUTION:** \(0{,}2/10=2\%\); \(0{,}05/10=0{,}5\%\). Lần 2 có giới hạn trên sai số tương đối nhỏ hơn; sai số thực từng phép đo chưa biết.


### 09. `THPT-G10-B13-C01`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **OUTCOME_ID:** `G10-B13-MEAN`

- **RESPONSE_TYPE:** `MCQ_SINGLE`

- **STEM:** Mẫu \(3,5,7,9\) có số trung bình bằng bao nhiêu?

- **OPTIONS:** A. \(5\) | B. \(6\) | C. \(7\) | D. \(8\)

- **KEY_CHOICE:** `B`

- **KEY:** \(6\)
- **HINT_PUBLIC_ONLY:** Cộng bốn giá trị rồi chia 4.
- **WORKED_SOLUTION:** \((3+5+7+9)/4=24/4=6\).


### 10. `THPT-G10-B13-C02`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **OUTCOME_ID:** `G10-B13-MEDIAN`

- **RESPONSE_TYPE:** `MCQ_SINGLE`

- **STEM:** Mẫu đã sắp \(1,2,4,8,12\) có trung vị bằng bao nhiêu?

- **OPTIONS:** A. \(2\) | B. \(3\) | C. \(4\) | D. \(8\)

- **KEY_CHOICE:** `C`

- **KEY:** \(4\)
- **HINT_PUBLIC_ONLY:** Mẫu lẻ 5 giá trị, chọn giá trị thứ 3.
- **WORKED_SOLUTION:** Trung vị là phần tử giữa: 4.


### 11. `THPT-G10-B13-P01`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B13-MEAN`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Trong bảng tần số, giá trị 2 xuất hiện 2 lần, 4 xuất hiện 3 lần, 8 xuất hiện 1 lần. Tính số trung bình.

- **KEY:** \(4\)
- **HINT_PUBLIC_ONLY:** Nhân từng giá trị với tần số trước khi chia tổng tần số.
- **WORKED_SOLUTION:** \(n=2+3+1=6\), tổng \(2\cdot2+4\cdot3+8\cdot1=24\); \(\bar x=4\).


### 12. `THPT-G10-B13-P02`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B13-QUARTILES`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Mẫu đã sắp \(1,3,4,8,9,10\). Tìm \(Q_1,Q_2,Q_3\) theo KNTT.

- **KEY:** \(Q_1=3,Q_2=6,Q_3=9\)
- **HINT_PUBLIC_ONLY:** Mẫu n chẵn; chia hai nửa \(1,3,4\) và \(8,9,10\).
- **WORKED_SOLUTION:** \(Q_2=(4+8)/2=6\); nửa trái trung vị 3, nửa phải trung vị 9.


### 13. `THPT-G10-B13-P03`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B13-MODE`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Mẫu \(1,1,3,3,5,7\). Mốt của mẫu là gì?

- **KEY:** Hai mốt: 1 và 3
- **HINT_PUBLIC_ONLY:** Đếm tần số của mỗi giá trị.
- **WORKED_SOLUTION:** Giá trị 1 và 3 mỗi giá trị xuất hiện 2 lần, các giá trị khác chỉ 1; do đó mẫu có hai mốt 1 và 3.


### 14. `THPT-G10-B13-P04`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **OUTCOME_ID:** `G10-B13-INTERPRETATION`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Thu nhập ngày (đơn vị thống nhất) là \(4,5,5,6,30\). Tính trung bình và trung vị; số nào ít bị số 30 chi phối hơn?

- **KEY:** \(\bar x=10\), trung vị 5; trung vị ổn định hơn
- **HINT_PUBLIC_ONLY:** Sắp mẫu, phần tử giữa là 5; tổng cả mẫu 50.
- **WORKED_SOLUTION:** \(\bar x=(4+5+5+6+30)/5=10\), trung vị 5. Giá trị 30 kéo tăng trung bình nhưng không thay đổi vị trí phần tử giữa.


### 15. `THPT-G10-B13-P05`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B13-QUARTILES`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Mẫu đã sắp \(1,2,3,4,6,8,9\) có \(Q_1,Q_2,Q_3\) là gì?

- **KEY:** \((2,4,8)\)
- **HINT_PUBLIC_ONLY:** Mẫu 7 phần tử: bỏ 4 khi chia các nửa.
- **WORKED_SOLUTION:** \(Q_2=4\); nửa trái 1,2,3 có trung vị 2; nửa phải 6,8,9 có trung vị 8.


### 16. `THPT-G10-B13-P06`

- **LESSON_ID:** `G10-B13` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **OUTCOME_ID:** `G10-B13-INTERPRETATION`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Hai nhóm \(A=(6,7,8,9,10)\), \(B=(6,7,8,9,30)\). So sánh số trung bình và trung vị của từng nhóm.

- **KEY:** \(A:\bar x=8,\mathrm{Me}=8;\ B:\bar x=12,\mathrm{Me}=8\)
- **HINT_PUBLIC_ONLY:** Cùng bốn số đầu; 10 đổi thành 30, ảnh hưởng tới tổng nhưng không đổi phần tử thứ ba.
- **WORKED_SOLUTION:** \(\bar x_A=40/5=8,\bar x_B=60/5=12\); cả hai trung vị 8. Số trung bình bị giá trị 30 làm tăng, trung vị giữ nguyên.


### 17. `THPT-G10-B14-C01`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **OUTCOME_ID:** `G10-B14-RANGE_IQR`

- **RESPONSE_TYPE:** `MCQ_SINGLE`

- **STEM:** Mẫu \(3,7,9\) có khoảng biến thiên là bao nhiêu?

- **OPTIONS:** A. \(3\) | B. \(6\) | C. \(7\) | D. \(9\)

- **KEY_CHOICE:** `B`

- **KEY:** \(6\)
- **HINT_PUBLIC_ONLY:** Lấy số lớn nhất trừ số nhỏ nhất.
- **WORKED_SOLUTION:** \(R=9-3=6\).


### 18. `THPT-G10-B14-C02`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **OUTCOME_ID:** `G10-B14-VARIANCE`

- **RESPONSE_TYPE:** `MCQ_SINGLE`

- **STEM:** Mẫu \(1,3,5\) có phương sai (chia cho \(n\), theo SGK) bằng bao nhiêu?

- **OPTIONS:** A. \(8\) | B. \(4\) | C. \(8/3\) | D. \(2\)

- **KEY_CHOICE:** `C`

- **KEY:** \(8/3\)
- **HINT_PUBLIC_ONLY:** \(\bar x=3\); tính ba bình phương độ lệch rồi chia 3.
- **WORKED_SOLUTION:** \(s^2=[(1-3)^2+0+(5-3)^2]/3=(4+4)/3=8/3\).


### 19. `THPT-G10-B14-P01`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B14-RANGE_IQR`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Mẫu \(2,4,6,8,10\) có khoảng tứ phân vị bao nhiêu (theo cách chia nửa của KNTT)?

- **KEY:** \(6\)
- **HINT_PUBLIC_ONLY:** Bỏ trung vị 6; lấy trung vị hai nửa còn lại.
- **WORKED_SOLUTION:** \(Q_1=(2+4)/2=3\), \(Q_3=(8+10)/2=9\); \(\Delta_Q=9-3=6\).


### 20. `THPT-G10-B14-P02`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B14-STDDEV`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Mẫu \(1,1,5,5\). Tính phương sai và độ lệch chuẩn.

- **KEY:** \(s^2=4,s=2\)
- **HINT_PUBLIC_ONLY:** Mẫu có trung bình 3.
- **WORKED_SOLUTION:** \(\bar x=3\), bốn bình phương độ lệch bằng 4; \(s^2=16/4=4\) và \(s=2\).


### 21. `THPT-G10-B14-P03`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **OUTCOME_ID:** `G10-B14-OUTLIERS`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Mẫu \(1,2,2,3,3,4,4,30\). Theo hàng rào 1,5·IQR, giá trị nào bất thường?

- **KEY:** \(30\)
- **HINT_PUBLIC_ONLY:** Đặt hai nửa 4 số, tính \(Q_1,Q_3\) rồi hàng rào trên.
- **WORKED_SOLUTION:** \(Q_1=2,Q_3=4,\Delta_Q=2\); ngưỡng trên 7, dưới −1. 30 lớn hơn 7 nên bất thường; số 1 không nhỏ hơn −1.


### 22. `THPT-G10-B14-P04`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B14-COMPARISON`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** \(A=(5,5,8)\), \(B=(2,7,9)\). Cùng trung bình 6. Nhóm nào có phương sai lớn hơn?

- **KEY:** B, vì \(26/3>2\)
- **HINT_PUBLIC_ONLY:** Tính tổng bình phương khoảng cách tới trung bình 6.
- **WORKED_SOLUTION:** \(s_A^2=(1+1+4)/3=2\); \(s_B^2=(16+1+9)/3=26/3\), nên B phân tán lớn hơn.


### 23. `THPT-G10-B14-P05`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **OUTCOME_ID:** `G10-B14-STDDEV`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Độ dài (cm) của 4 vật: \(5,7,7,9\). Tính phương sai và độ lệch chuẩn; ghi đúng đơn vị.

- **KEY:** \(s^2=2\,\mathrm{cm}^2,\ s=\sqrt2\,\mathrm{cm}\)
- **HINT_PUBLIC_ONLY:** Trung bình bằng 7 cm; khác biệt −2,0,0,2.
- **WORKED_SOLUTION:** \(s^2=(4+0+0+4)/4=2\,\mathrm{cm}^2\). \(s=\sqrt2\,\mathrm{cm}\). Không gán đơn vị cm² cho độ lệch chuẩn.


### 24. `THPT-G10-B14-P06`

- **LESSON_ID:** `G10-B14` · **CONTENT_VERSION:** `R01` · **ROLE / PLACEMENT:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **OUTCOME_ID:** `G10-B14-VARIANCE`

- **RESPONSE_TYPE:** `SHORT_EXACT_OR_EXPLANATION`

- **STEM:** Mẫu \(2,6,6,10\). Tính khoảng biến thiên, IQR và phương sai theo SGK.

- **KEY:** \(R=8,\Delta_Q=4,s^2=8\)
- **HINT_PUBLIC_ONLY:** \(\bar x=6\); nửa trái 2,6 và nửa phải 6,10.
- **WORKED_SOLUTION:** \(R=10-2=8\); \(Q_1=4,Q_3=8\) nên IQR=4; \(s^2=[16+0+0+16]/4=8\).


## 6. D4 — Written & Anchor dùng chung (3 IDs độc lập)

Written và Anchor nằm **chung** một thư viện. Nhãn `ANCHOR` chỉ là metadata của câu Written, không tạo item canonical thứ hai. 3 bài sau có rubric 7 điểm, không ghi Mastery khi học sinh tự đối chiếu. Các rubric cần NotebookLM thẩm định ngang hàng với MCQ.

### `THPT-G10-CHV-W12` · Bài 12 · WRITTEN
- **OUTCOME:** `G10-B12-ABS_ERROR`, `G10-B12-REL_ERROR`, `G10-B12-ROUNDING` · **Difficulty:** APPLICATION · **VERSION:** R01.
- **STEM:** Đường kính thật của một chi tiết là \(\bar a=2{,}486\,\mathrm{cm}\), bảng đo ghi số gần đúng \(a=2{,}49\,\mathrm{cm}\). (a) Tính sai số tuyệt đối và tương đối thực, làm tròn tỷ lệ % đến 3 chữ số thập phân. (b) Xác nhận \(a\) là kết quả quy tròn \(\bar a\) đến hàng phần trăm và đánh giá sai số với giới hạn \(0{,}005\,\mathrm{cm}\). (c) Giả sử chỉ biết bảng ghi có độ chính xác \(d=0{,}005\,\mathrm{cm}\), viết khoảng có thể chứa số đúng \(\bar a\) và giải thích vì sao không xác định được sai số thực.
- **SOLUTION:** (a) \(\Delta=|2{,}486-2{,}49|=0{,}004\,\mathrm{cm}\), \(\delta_a=0{,}004/2{,}49\approx0{,}16064\%\approx0{,}161\%\). (b) Số đúng 2,486 làm tròn tới hàng phần trăm → a=2,49; sai số 0,004 không vượt 0,005. (c) Nếu không biết số đúng \(\bar a\), chỉ có \(2{,}485\le\bar a\le2{,}495\); \(d\) là mức chặn, không phải giá trị \(\Delta\) thực.
- **RUBRIC (7 điểm):** tìm đúng \(\Delta\), đơn vị (1,5); \(\delta_a\), dùng mẫu số **a gần đúng** và % (1,5); làm tròn đúng hàng (1); kiểm giới hạn làm tròn (1); khoảng bất định (1); giải thích độ chính xác khác sai số thật (1).

### `THPT-G10-CHV-W13` · Bài 13 · WRITTEN
- **OUTCOME:** `G10-B13-MEAN`, `G10-B13-MEDIAN`, `G10-B13-QUARTILES`, `G10-B13-MODE`, `G10-B13-INTERPRETATION` · **Difficulty:** APPLICATION · **VERSION:** R01.
- **STEM:** Số cuốn sách học sinh đọc trong tháng có bảng: 1 cuốn (1 bạn), 2 cuốn (3 bạn), 3 cuốn (4 bạn), 4 cuốn (2 bạn). (a) Viết đủ dãy tăng dần và tính số trung bình. (b) Tìm trung vị, \(Q_1,Q_3\), mốt. (c) Nếu một bạn thuộc nhóm đọc 4 cuốn thực tế đọc 20 cuốn, tính trung bình mới và cho biết trung vị có đổi không, giải thích.
- **SOLUTION:** Dãy \(1,2,2,2,3,3,3,3,4,4\), \(n=10\); tổng \(1+6+12+8=27\), \(\bar x=2{,}7\). Trung vị \((3+3)/2=3\), nửa trái \(1,2,2,2,3\) nên \(Q_1=2\), nửa phải \(3,3,3,4,4\) nên \(Q_3=3\); mốt 3 (4 lần). Mẫu mới thay 4 bằng 20, tổng \(27-4+20=43\), \(\bar x'=4{,}3\); hai phần tử thứ 5–6 vẫn là 3 nên \(\mathrm{Me}'=3\). Trung bình bị kéo lên trong khi trung vị không đổi.
- **RUBRIC (7 điểm):** dãy đúng và n (1); trung bình ban đầu (1,5); trung vị (1); Q1/Q3 đúng quy tắc (1,5); mốt (0,5); trung bình sau (1); trung vị/giải thích sau (0,5).

### `THPT-G10-CHV-W14-ANCHOR` · Bài 14 · WRITTEN / ANCHOR_TAG
- **OUTCOME:** `G10-B14-VARIANCE`, `G10-B14-STDDEV`, `G10-B14-COMPARISON`, `G10-B14-RANGE_IQR` · **Difficulty:** APPLICATION · **VERSION:** R01.
- **STEM:** Hai nhóm có thời gian thực hành (phút): A: \(4,5,5,6,5\); B: \(1,5,5,5,9\). (a) Sắp xếp mỗi nhóm, tính số trung bình và trung vị. (b) Tính khoảng biến thiên và khoảng tứ phân vị. (c) Tính phương sai chia cho \(n\) và độ lệch chuẩn, so sánh nhóm ổn định hơn. Nêu rõ đơn vị phương sai và độ lệch chuẩn.
- **SOLUTION:** A sắp \(4,5,5,5,6\), B sắp \(1,5,5,5,9\); trung bình cả hai =5 phút, trung vị cả hai =5. \(R_A=2,R_B=8\); A n lẻ bỏ median: \(Q_1=4{,}5,Q_3=5{,}5\) nên IQR=1; B \(Q_1=3,Q_3=7\), IQR=4. \(s_A^2=[1+0+0+0+1]/5=2/5=0{,}4\,\mathrm{phút}^2\), \(s_B^2=[16+0+0+0+16]/5=32/5=6{,}4\,\mathrm{phút}^2\). \(s_A=\sqrt{0{,}4}\approx0{,}632\,\mathrm{phút}\), \(s_B=\sqrt{6{,}4}\approx2{,}530\,\mathrm{phút}\). A ổn định hơn. Không dùng n−1.
- **RUBRIC (7 điểm):** dãy và trung bình/trung vị đúng (1); hai R (1); Q1/Q3 và IQR mỗi mẫu (1,5); 2 phương sai chia n (1,5); 2 độ lệch chuẩn/đơn vị (1); so sánh có căn cứ (1).


## 7. D5 — 3 hình SVG thật, XML tự chứa, có thể dùng chung đúng phạm vi

Hình nguồn được render ra PNG để QA, không tự nhận đã kiểm thử browser/mobile. SVG bên dưới là code nguồn thật (bao gồm accessibility), không chỉ mô tả tên file; khi tích hợp dùng lại cùng resource ID và không nhân bản khi đặt ở Topic.


### `FIG-G10-B12-01` · `THPT_G10_B12_ERROR_INTERVAL_D5_R01.svg` · bài B12

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 445" role="img" aria-labelledby="b12title b12desc">
<title id="b12title">Bài 12: Khoảng chứa giá trị đúng của kết quả đo</title>
<desc id="b12desc">Đo 20,0 cm với độ chính xác 0,1 cm. Khoảng sai số từ 19,9 đến 20,1 cm được tô xanh, tâm 20,0 cm, số đúng có thể nằm bất cứ đâu trong đoạn.</desc>
<rect width="920" height="445" rx="18" fill="#f7fbfe"/>
<text x="40" y="52" font-size="25" font-family="DejaVu Sans,Arial" font-weight="bold" fill="#15314e">Độ chính xác là mức chặn sai số</text>
<text x="40" y="93" font-size="19" font-family="DejaVu Sans,Arial" fill="#33465e">ā = 20,0 cm  ;  d = 0,1 cm  ⇒  19,9 ≤ a ≤ 20,1 cm</text>
<line x1="110" y1="241" x2="825" y2="241" stroke="#26415d" stroke-width="3"/>
<rect x="300" y="202" width="330" height="78" rx="9" fill="#b5e5e0" opacity=".70"/>
<line x1="300" y1="193" x2="300" y2="293" stroke="#007f77" stroke-width="3"/>
<line x1="465" y1="179" x2="465" y2="306" stroke="#245aaf" stroke-width="4"/>
<line x1="630" y1="193" x2="630" y2="293" stroke="#007f77" stroke-width="3"/>
<circle cx="465" cy="241" r="8" fill="#245aaf"/>
<g font-family="DejaVu Sans,Arial" text-anchor="middle" fill="#173a53" font-size="20"><text x="300" y="332">19,9</text><text x="465" y="332" font-weight="bold">20,0</text><text x="630" y="332">20,1</text></g>
<text x="460" y="374" text-anchor="middle" font-size="19" font-family="DejaVu Sans,Arial" fill="#007f77">Vùng có thể chứa số đúng a</text>
<text x="40" y="412" font-size="16" font-family="DejaVu Sans,Arial" fill="#5a6475">Không suy ra sai số tuyệt đối thực tế bằng d.</text>
</svg>
```


### `FIG-G10-B13-01` · `THPT_G10_B13_QUARTILES_D5_R01.svg` · bài B13

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="b13title b13desc">
<title id="b13title">Bài 13: trung vị và tứ phân vị của năm giá trị</title>
<desc id="b13desc">Dữ liệu đã sắp: 2, 3, 3, 7, 10. Trung vị Q2 bằng 3, Q1 bằng 2,5 và Q3 bằng 8,5 theo quy tắc loại Q2 khỏi hai nửa khi cỡ mẫu lẻ.</desc>
<rect width="960" height="460" rx="18" fill="#fafcff"/>
<text x="35" y="48" font-size="24" font-family="DejaVu Sans,Arial" font-weight="bold" fill="#183451">Tứ phân vị — mẫu n = 5 (lẻ)</text>
<text x="35" y="83" font-size="19" font-family="DejaVu Sans,Arial" fill="#45556d">2, 3, 3, 7, 10   ·   Q1 = 2,5  ·  Q2 = 3  ·  Q3 = 8,5</text>
<line x1="105" y1="260" x2="870" y2="260" stroke="#35465e" stroke-width="3"/>
<g font-size="15" font-family="DejaVu Sans,Arial" fill="#425269" text-anchor="middle">
<text x="150" y="290">2</text><text x="226" y="290">3</text><text x="530" y="290">7</text><text x="758" y="290">10</text></g>
<g stroke="#bac4d1" stroke-width="1.5"><line x1="150" y1="248" x2="150" y2="273"/><line x1="226" y1="248" x2="226" y2="273"/><line x1="530" y1="248" x2="530" y2="273"/><line x1="758" y1="248" x2="758" y2="273"/></g>
<g fill="#3773c8"><circle cx="150" cy="235" r="10"/><circle cx="226" cy="235" r="10"/><circle cx="226" cy="210" r="10"/><circle cx="530" cy="235" r="10"/><circle cx="758" cy="235" r="10"/></g>
<rect x="188" y="164" width="456" height="46" fill="#abdbcc" opacity=".4" rx="8"/>
<g stroke-width="3" stroke-dasharray="6 5"><line x1="188" y1="135" x2="188" y2="257" stroke="#0d8a77"/><line x1="226" y1="111" x2="226" y2="257" stroke="#bf5f2f"/><line x1="644" y1="135" x2="644" y2="257" stroke="#0d8a77"/></g>
<g font-family="DejaVu Sans,Arial" font-size="20" text-anchor="middle" font-weight="bold"><text x="185" y="124" fill="#0d8a77">Q1</text><text x="231" y="98" fill="#bf5f2f">Q2</text><text x="645" y="124" fill="#0d8a77">Q3</text></g>
<text x="45" y="352" font-size="18" font-family="DejaVu Sans,Arial" fill="#263d58">Nửa dưới: (2, 3) → Q1 = (2 + 3)/2 = 2,5</text>
<text x="45" y="391" font-size="18" font-family="DejaVu Sans,Arial" fill="#263d58">Nửa trên: (7, 10) → Q3 = (7 + 10)/2 = 8,5</text>
<text x="45" y="432" font-size="16" font-family="DejaVu Sans,Arial" fill="#607087">Điểm 3 ở giữa làm Q2, không tham gia hai nửa khi n lẻ.</text>
</svg>
```


### `FIG-G10-B14-01` · `THPT_G10_B14_DISPERSION_D5_R01.svg` · bài B14

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 460" role="img" aria-labelledby="b14title b14desc">
<title id="b14title">Bài 14: hai mẫu cùng trung bình nhưng độ phân tán khác nhau</title>
<desc id="b14desc">Mẫu A gồm 4, 5, 6, phương sai hai phần ba; mẫu B gồm 1, 5, 9, phương sai ba mươi hai phần ba. Trung bình của cả hai bằng 5.</desc>
<rect width="960" height="460" rx="18" fill="#f9fcff"/>
<text x="38" y="48" font-size="25" font-family="DejaVu Sans,Arial" font-weight="bold" fill="#193e61">Cùng trung bình 5, nhưng độ phân tán khác</text>
<text x="40" y="105" font-size="21" font-family="DejaVu Sans,Arial" fill="#225998">A = (4,5,6)   ·   s² = 2/3</text>
<text x="40" y="250" font-size="21" font-family="DejaVu Sans,Arial" fill="#a15330">B = (1,5,9)   ·   s² = 32/3</text>
<g stroke="#54657c" stroke-width="2"><line x1="150" y1="184" x2="835" y2="184"/><line x1="150" y1="328" x2="835" y2="328"/></g>
<g font-family="DejaVu Sans,Arial" font-size="16" fill="#354962" text-anchor="middle"><text x="150" y="209">1</text><text x="302" y="209">3</text><text x="378" y="209">4</text><text x="454" y="209">5</text><text x="530" y="209">6</text><text x="758" y="209">9</text><text x="150" y="353">1</text><text x="454" y="353">5</text><text x="758" y="353">9</text></g>
<g fill="#377ac5"><circle cx="378" cy="165" r="11"/><circle cx="454" cy="165" r="11"/><circle cx="530" cy="165" r="11"/></g>
<g fill="#d37c3b"><circle cx="150" cy="309" r="11"/><circle cx="454" cy="309" r="11"/><circle cx="758" cy="309" r="11"/></g>
<line x1="454" y1="127" x2="454" y2="368" stroke="#168174" stroke-width="2.5" stroke-dasharray="7 6"/>
<text x="463" y="139" font-family="DejaVu Sans,Arial" font-size="17" fill="#117e72">Trung bình = 5</text>
<text x="40" y="420" font-family="DejaVu Sans,Arial" font-size="18" fill="#314761">Mẫu B trải rộng hơn; chỉ so số trung bình sẽ bỏ lỡ điều này.</text>
</svg>
```


## 8. D6 — 6 thẻ gỡ lỗi, gắn vào outcome và câu canonical đã có

D6 **không phải** item chấm Mastery. Mỗi thẻ gồm đúng năm bước: nhận diện lỗi → kiểm tra dấu hiệu → nhắc lại kiến thức → tự chữa → câu quay lại. Không trích bài Tự kiểm tra bảo mật.


### `HELP-G10-B12-01` · Nhầm sai số thực với độ chính xác
- **OUTCOME:** `G10-B12-ABS_ERROR`
- **1. Nhận diện lỗi:** Nhầm sai số thực với độ chính xác.
- **2. Dấu hiệu / tự chẩn đoán:** Nói Δ=d dù không biết số đúng. Em đã biết chính xác a chưa?
- **3. Kiến thức gốc:** Nếu chỉ biết |a−ā|≤d thì Δ chưa xác định, chỉ có giới hạn.
- **4. Tự sửa:** Giải lại khoảng có thể của a từ ā±d và phát biểu điều *không suy ra*.
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B12-C02`.


### `HELP-G10-B12-02` · Sai mẫu số khi tính tỷ lệ
- **OUTCOME:** `G10-B12-REL_ERROR`
- **1. Nhận diện lỗi:** Sai mẫu số khi tính tỷ lệ.
- **2. Dấu hiệu / tự chẩn đoán:** Chia Δ cho ā rồi gọi đó là sai số tương đối chính xác. Đề cho giá trị đúng a hay chỉ có số gần đúng?
- **3. Kiến thức gốc:** δ=Δ/|a| nếu a biết, d/|ā| là ước lượng khi không biết a.
- **4. Tự sửa:** Viết lại % và phân biệt tỷ số thực với tỷ số ước lượng.
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B12-P06`.


### `HELP-G10-B13-01` · Quên sắp mẫu và loại Q2 ở n lẻ
- **OUTCOME:** `G10-B13-QUARTILES`
- **1. Nhận diện lỗi:** Quên sắp mẫu và loại Q2 ở n lẻ.
- **2. Dấu hiệu / tự chẩn đoán:** Tính Q1/Q3 từ dãy chưa sắp hoặc đưa Q2 vào hai nửa. n chẵn hay lẻ? Em đã xếp tăng dần chưa?
- **3. Kiến thức gốc:** SGK KNTT: tìm Q2; n lẻ bỏ Q2 trước khi chia nửa.
- **4. Tự sửa:** Khoanh riêng nửa dưới, nửa trên rồi tính trung vị mỗi nửa.
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B13-P05`.


### `HELP-G10-B13-02` · Không nhân giá trị với tần số / nhầm mốt
- **OUTCOME:** `G10-B13-MEAN`
- **1. Nhận diện lỗi:** Không nhân giá trị với tần số / nhầm mốt.
- **2. Dấu hiệu / tự chẩn đoán:** Lấy trung bình các giá trị phân biệt mà không tính tần số. Tổng số quan sát là tổng m_i hay số giá trị khác nhau?
- **3. Kiến thức gốc:** Trung bình bảng tần số = tổng x_i*m_i chia tổng m_i; mốt là x_i có tần số cao nhất.
- **4. Tự sửa:** Lập lại bảng cột giá trị × tần số, so đáp án.
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B13-P01`.


### `HELP-G10-B14-01` · Sai mẫu số phương sai và đơn vị
- **OUTCOME:** `G10-B14-VARIANCE`
- **1. Nhận diện lỗi:** Sai mẫu số phương sai và đơn vị.
- **2. Dấu hiệu / tự chẩn đoán:** Dùng n−1 và viết s có đơn vị bình phương. Đang mô tả dãy số liệu SGK hay ước lượng suy luận mẫu?
- **3. Kiến thức gốc:** SGK dùng s²=Σ(x−x̄)²/n; s căn của s², cùng đơn vị dữ liệu.
- **4. Tự sửa:** Tính lại các bình phương rồi chia n và ghi đơn vị.
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B14-P05`.


### `HELP-G10-B14-02` · Nhầm hàng rào ngoại lệ và phân tán
- **OUTCOME:** `G10-B14-OUTLIERS`
- **1. Nhận diện lỗi:** Nhầm hàng rào ngoại lệ và phân tán.
- **2. Dấu hiệu / tự chẩn đoán:** So giá trị với trung bình hoặc đánh dấu giá trị bằng ngưỡng là ngoại lệ. Em đã lấy Q1, Q3 đúng quy tắc chưa?
- **3. Kiến thức gốc:** Bất thường khi x<Q1−1,5 IQR hoặc x>Q3+1,5 IQR; dùng dấu nghiêm ngặt.
- **4. Tự sửa:** Tính Q1/Q3, viết ngưỡng và kiểm từng giá trị.
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B14-P03`.


## 9. Kiểm toán và giới hạn nghiệm thu

**Expected reconciliation (duy nhất theo snapshot):** LESSON_ID = G10-B12, G10-B13, G10-B14. OUTCOME_ID **14** (4 B12 + 5 B13 + 5 B14); D2 EXAMPLES **9** (3/bài); D3 public Formative **24** (6 SGK_CORE + 18 SGK_PRACTICE); D4 Written **3** (W12, W13, W14-ANCHOR; Anchor chỉ là tag); canonical candidate `item_id` **27**; D5 SVG **3**, D6 HELP_ID **6**. Toàn bộ đáp án/giải/rubric đều nằm trong file, không bỏ trống. Chưa thực hiện bank-wide dedup hoặc đăng ký runtime.

**Reviewer cần đánh giá thật:** phạm vi S1 (SGK/SBT), các điều kiện \(a\ne0\), đúng cách diễn đạt ước lượng sai số tương đối; cách chia nửa để lấy tứ phân vị (n chẵn/lẻ); trường hợp mốt có 2 giá trị hoặc không có; phương sai mô tả chia n; tách R và IQR; dấu <, > nghiêm ngặt của ngoại lệ; khóa MCQ, đáp án ngắn, lời giải và 3 rubric; tính chính xác và accessibility của 3 SVG; 6 thẻ D6 không lộ Readiness.

**Báo cáo NotebookLM bắt buộc:** (1) SOURCE_RECEIPT xác nhận đúng 5 Permanent Sources v2.0 và SGK/SBT trang; (2) `LESSON_VERDICT` từng B12/B13/B14; (3) `OUTCOME_MATRIX` đúng 14; (4) `ITEM_ID_RECONCILIATION` expected/reviewed/missing/duplicate/unexpected và 27 verdict riêng; (5) D1–D6, FIG, HELP; (6) P0/P1/P2 + `MINIMAL_DELTA`; (7) `ACADEMIC_CLEARANCE_FOR_THIS_DELTA` chỉ đúng source snapshot.

**Trạng thái:** `NEW_ACADEMIC_MATERIAL_DELTA_C`; `AUTHOR_QA_PENDING_OR_COMPLETE` nhưng `ACADEMIC_PASS=NOT_ISSUED`; `CONTENT_READY=NO`; `R1–R5=NOT_STARTED`. Nếu P0/P1 hoặc material delta, sửa phần có ảnh hưởng và review lại theo hợp đồng 07. Không cấp PASS cho toàn Chương V/Tự kiểm tra cuối chương/Topic Readiness/Mastery hay quyền merge/deploy.
