# SGK Toán 12 KNTT — Chương VI: Xác suất có điều kiện và ứng dụng
## Hành trình SGK độc lập — Bài 18–19 — D1–D4 và mapping Core/Practice v0.1

**PACKET_ID:** `THPT-SGK-G12-CHVI-B18-B19-D1D4-CORE-PLACEMENT-20261028-R0`  
**AUTHORING:** `NEW_SGK_PATH_NOT_REVIEWED` — cần thẩm định riêng, không kế thừa tự động PASS của Chuyên đề.  
**Permanent Sources:** `01–05_THPT_PERMANENT_v2.0_ONLY`; quy tắc hai hành trình `08_THPT_DUAL_COMPLETE_LEARNING_PATHS_AND_SHARED_RESOURCES_v2.0.md`.  
**SOURCE_RECEIPT đã có từ NotebookLM:** SGK Toán 12 Tập 2 KNTT, Chương VI B18 trang in 42–49; B19 trang 50–56; cuối chương 57–58. SBT Tập 2 B18 trang 40–48, B19 trang 49–58, cuối chương 59–64.  
**Scope của review mới:** hành trình SGK (theo từng bài) độc lập với Chuyên đề; 8 outcome lớp 12, 4 ví dụ đã dùng chung, 12 vị trí của item canonical **đã có**, không tạo item mới.  
**Sự thật đang giữ:** Chuyên đề Xác suất 10–12 `PASS_WITH_SCOPE_TIERING` (gồm G12 B18–B19 D1–D4 PASS, ví dụ Bayes R1 đã đối soát, `THPT-G12-B19-P05=SUPPORT_EXTENSION`); nhưng SGK Chapter VI **chưa có review riêng** và chưa có bộ Tự kiểm tra cuối chương.

---

## I. Hành trình SGK, không bắt học sinh mở Chuyên đề

Người học mở **SGK → Toán 12 → Chương VI → Bài 18 / Bài 19** sẽ gặp kiến thức giải thích đầy đủ, ví dụ hướng dẫn ở đúng bài, phần **Core sau bài**, luyện tập/vận dụng và **Tự kiểm tra CUỐI CHƯƠNG VI**. Tự kiểm tra SGK là bộ đề riêng, **không sao chép** 12 câu Readiness toàn Chuyên đề Xác suất và không dùng lại các bài Practice đã lộ.

Các ví dụ sau chỉ có một nguồn canonical: `EX-G12-B18-01`, `EX-G12-B18-02`, `EX-G12-B19-01`, `EX-G12-B19-02`. Phần dẫn giải của Bài 18–19 dưới đây là nội dung Knowledge riêng cho SGK; ví dụ sẽ được dùng **qua tham chiếu ID** (trích nguyên nguồn để NotebookLM kiểm tra nằm trong **file Temp thứ hai**, không tạo bản ghi ví dụ thứ hai).

---

## II. Bài 18 — Xác suất có điều kiện

### B18-KT-01. "Biết một biến cố xảy ra" nghĩa là gì?

Khi thực hiện phép thử, ban đầu ta có không gian mẫu \(\Omega\). Nếu đã **biết B xảy ra**, chỉ các kết quả thuộc \(B\) còn phù hợp. Câu hỏi "A xảy ra khi biết B" khác câu hỏi "B xảy ra khi biết A". Có thể minh họa bằng bảng: nếu biết người được chọn là học sinh nữ, mẫu số phải là số nữ; nếu biết người được chọn là người đi xe buýt, mẫu số là số người đi xe buýt.

Với \(P(B)>0\), **xác suất có điều kiện** được định nghĩa:
\[
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
\]
Điều kiện \(P(B)>0\) là bắt buộc; không tính bằng phép chia cho 0. Với không gian mẫu hữu hạn **đồng khả năng**, khi biết B thì:
\[
P(A\mid B)=\frac{n(A\cap B)}{n(B)}.
\]
Chú ý công thức đếm trên chỉ dùng khi từng kết quả sơ cấp là đồng khả năng trong mô hình xét. Với dữ kiện tỉ lệ không đều, phải dùng xác suất biến cố, không chia số "nhãn" thuận lợi cho tổng nhãn.

**D2 dùng chung đã được thẩm định:** `EX-G12-B18-01` — 30 học sinh, đổi điều kiện "đi xe buýt"/"là nữ"; cách làm cần thể hiện hai mẫu số khác nhau.

### B18-KT-02. Công thức nhân tổng quát

Từ định nghĩa, khi \(P(B)>0\):
\[
P(A\cap B)=P(B)\,P(A\mid B).
\]
Nếu \(P(A)>0\) cũng có dạng \(P(A\cap B)=P(A)P(B\mid A)\). Đây là phép nhân xác suất theo **điều kiện thực tế**, không đòi A,B độc lập.

Khi rút hai thẻ **không hoàn lại**, kết quả lượt 1 thường ảnh hưởng xác suất lượt 2; do đó phải xét điều kiện. Ngược lại, nếu A và B **độc lập** và xác suất điều kiện được xác định, ta có \(P(A\mid B)=P(A)\), quy tắc nhân tổng quát rút thành \(P(A\cap B)=P(A)P(B)\) đã học lớp 11.

**D2 dùng chung:** `EX-G12-B18-02` — 3 thẻ đỏ, 2 thẻ xanh; rút không hoàn lại, tính xác suất lượt 1 đỏ và lượt 2 xanh. Ví dụ phải giữ nguyên điều kiện không hoàn lại, tránh tự nhân hai tỉ lệ rút ban đầu.

### B18-KT-03. Những bước tự kiểm khi tính xác suất có điều kiện

1. Viết bằng lời **đã biết điều gì xảy ra** (biến cố phía sau dấu gạch đứng).
2. Kiểm tra mẫu số \(P(B)>0\).
3. Xác định giao \(A\cap B\) hoặc nhánh đã biết.
4. Tính tỉ số/nhân có điều kiện và kiểm tra kết quả thuộc \([0,1]\).
5. Kiểm tra có vô tình tráo \(P(A\mid B)\) với \(P(B\mid A)\) hoặc coi các lượt rút không hoàn lại là độc lập không.

**Core ở cuối Bài 18:** dùng ba ID canonical `THPT-G12-B18-P01`, `THPT-G12-B18-P02`, `THPT-G12-B18-P03`. Không sao chép stem, key hay lịch sử; ở Chuyên đề, các item này tiếp tục là Practice cơ bản qua placement. Hai item còn lại của B18 và Written vào phần Luyện tập/tự luận SGK.

---

## III. Bài 19 — Công thức xác suất toàn phần và công thức Bayes

### B19-KT-01. Xác suất toàn phần theo hai nhóm

Một hiện tượng có thể xảy ra qua **hai nguyên nhân/nhánh loại trừ nhau và đầy đủ**, chẳng hạn hàng do xưởng A hoặc B sản xuất. Đặt \(B\) và \(\bar B\) là hai nhánh, \(0<P(B)<1\). Để tính xác suất biến cố \(A\), ta cộng các đường dẫn đến \(A\):
\[
P(A)=P(B)\,P(A\mid B)+P(\bar B)\,P(A\mid\bar B).
\]

Để không mắc lỗi: xác định các nhánh có phủ hết trường hợp không; xác suất chọn mỗi nhánh bao nhiêu; xác suất A **khi biết nhánh** là bao nhiêu; lấy tích trên từng nhánh rồi cộng. Không được cộng trực tiếp hai xác suất có điều kiện mà bỏ trọng số nhánh.

**D2 dùng chung:** `EX-G12-B19-01` — hàng của hai dây chuyền có tỉ lệ lỗi khác nhau, tính tỉ lệ lỗi chung bằng tổng xác suất hai nhánh.

**Giới hạn Core:** SGK đại trà ưu tiên hai nhánh \(B,\bar B\). Mô hình nhiều nhánh là hướng mở rộng, không đưa lên Core bắt buộc nếu thiếu xác nhận S1. `THPT-G12-B19-P05` đã được reviewer xếp `SUPPORT_EXTENSION`.

### B19-KT-02. Công thức Bayes — đảo chiều câu hỏi

Nếu biết **kết quả A đã xuất hiện**, muốn biết nó đến từ nguyên nhân B bao nhiêu phần, ta cần:
\[
P(B\mid A)=\frac{P(B)P(A\mid B)}{P(A)}
\]
với \(P(A)>0\). Khi A có thể đến từ B và \(\bar B\), thay mẫu số bằng công thức toàn phần:
\[
P(B\mid A)=
\frac{P(B)P(A\mid B)}
{P(B)P(A\mid B)+P(\bar B)P(A\mid\bar B)}.
\]

Bayes **không** khẳng định \(P(B\mid A)=P(A\mid B)\). Một nguyên nhân hiếm gặp có thể góp phần ít vào tổng các kết quả quan sát dù kết quả đó hay xảy ra trong nhóm hiếm. Cần dùng cả **tỉ lệ nền** \(P(B)\), không chỉ \(P(A\mid B)\).

**D2 dùng chung (chính xác snapshot đã đối soát R1):** `EX-G12-B19-02`. Chọn hộp X với xác suất \(1/3\), Y \(2/3\); X có 2 đỏ/3 xanh, Y có 3 đỏ/1 xanh. Giữ nguyên kết luận \(P(R)=19/30\), \(P(Y\mid R)=15/19\). **Không thay bằng dữ kiện/đáp án sai trong bản tóm tắt review R0 cũ**. Chi tiết ví dụ được dẫn nguồn từ một bản canonical trong file thứ hai.

### B19-KT-03. Đọc sơ đồ cây và phân biệt ba đại lượng

Trong sơ đồ cây, \(P(B)\) là xác suất **vào nhánh B**; \(P(A\mid B)\) là xác suất kết quả A **bên trong nhánh B**; \(P(A\cap B)=P(B)P(A\mid B)\) là xác suất đi trọn đường nhánh B rồi đến A. Muốn đảo nguyên nhân, lấy xác suất đường nhánh phù hợp chia **tổng** xác suất của mọi đường dẫn đến A. Học sinh phải biết nói ra mẫu số nào đang được dùng.

**Core cuối Bài 19:** `THPT-G12-B19-P01` (toàn phần hai nhánh), `THPT-G12-B19-P02` (Bayes đảo chiều). Ba item B19 còn lại cùng Written Anchor vào Luyện tập/Vận dụng; **P05 chỉ SUPPORT_EXTENSION**.

---

## IV. Outcome matrix SGK lớp 12 — 8 ID ứng viên placement, chờ thẩm định SGK

| Canonical outcome ID (đã PASS cho Topic) | Kiến thức SGK riêng | Dẫn chứng Core/Practice trong SGK | Review vị trí SGK |
|---|---|---|---|
| `G12-B18-CONDITIONAL_INTERPRETATION` | B18-KT-01 | `THPT-G12-B18-P01` Core | CHƯA REVIEW |
| `G12-B18-CONDITIONAL_FORMULA` | B18-KT-01 | `THPT-G12-B18-P02` Core, `THPT-G12-CHVI-W18-01` Written | CHƯA REVIEW |
| `G12-B18-GENERAL_MULTIPLICATION` | B18-KT-02 | `THPT-G12-B18-P03` Core, `THPT-G12-B18-P05` Practice | CHƯA REVIEW |
| `G12-B18-INDEPENDENCE_CONNECTION` | B18-KT-02 | `THPT-G12-B18-P04` Practice | CHƯA REVIEW |
| `G12-B19-TOTAL_PROBABILITY` | B19-KT-01 | `THPT-G12-B19-P01` Core; `THPT-G12-B19-P05` SUPPORT_EXTENSION | CHƯA REVIEW |
| `G12-B19-BAYES_REVERSE` | B19-KT-02 | `THPT-G12-B19-P02` Core, `THPT-G12-CHVI-W19-ANCHOR-01` Written | CHƯA REVIEW |
| `G12-B19-TREE_MODEL` | B19-KT-03 | `THPT-G12-B19-P03` Practice | CHƯA REVIEW |
| `G12-B19-BASE_RATE_REASONING` | B19-KT-02 | `THPT-G12-B19-P04` Practice | CHƯA REVIEW |

## V. Ma trận 12 vị trí cho canonical items (không tạo câu mới)

| SGK lesson | Placement dự kiến | Duy nhất canonical item ID (đã PASS ở Topic) | Phân tầng dự kiến |
|---|---|---|---|
| B18 | `SGK_CORE` | `THPT-G12-B18-P01` | Basic |
| B18 | `SGK_CORE` | `THPT-G12-B18-P02` | Basic |
| B18 | `SGK_CORE` | `THPT-G12-B18-P03` | Basic–Intermediate |
| B18 | `SGK_PRACTICE` | `THPT-G12-B18-P04` | Intermediate |
| B18 | `SGK_PRACTICE` | `THPT-G12-B18-P05` | Basic–Intermediate |
| B18 | `SGK_WRITTEN` | `THPT-G12-CHVI-W18-01` | Written /6 |
| B19 | `SGK_CORE` | `THPT-G12-B19-P01` | Basic |
| B19 | `SGK_CORE` | `THPT-G12-B19-P02` | Basic–Intermediate |
| B19 | `SGK_PRACTICE` | `THPT-G12-B19-P03` | Intermediate |
| B19 | `SGK_PRACTICE_APPLICATION` | `THPT-G12-B19-P04` | Intermediate |
| B19 | `SGK_PRACTICE_EXTENSION` | `THPT-G12-B19-P05` | `SUPPORT_EXTENSION`, NOT SGK mandatory Core |
| B19 | `SGK_WRITTEN_ANCHOR` | `THPT-G12-CHVI-W19-ANCHOR-01` | Written /8; `anchor_tag=true`, one item |

**Register:** `EXPECTED=12`, `UNIQUE_CANONICAL_ID=12`, `SGK_CORE=5`, `SGK_PRACTICE_APPLICATION_EXTENSION=5`, `SGK_WRITTEN=2` (trong đó chỉ **1 Anchor tag**). Có thể thay đổi **role/placement** theo verdict nhưng **không nhân bản stem, answer_key, solution, rubric, content_version, item_id hay lịch sử làm bài**. Review cần phân biệt: item PASS toán học ở Topic ≠ placement Core SGK đã PASS.

---

## VI. Sáu vị trí dự kiến cho SGK Tự kiểm tra CUỐI CHƯƠNG VI — blueprint only

| Blueprint slot | Đích đánh giá | Trạng thái |
|---|---|---|
| `G12-CHVI-READ-01` | Điều kiện và không gian mẫu thu hẹp B18 | BLUEPRINT_ONLY |
| `G12-CHVI-READ-02` | Công thức nhân có điều kiện B18 | BLUEPRINT_ONLY |
| `G12-CHVI-READ-03` | Độc lập / không độc lập khi có điều kiện B18 | BLUEPRINT_ONLY |
| `G12-CHVI-READ-04` | Xác suất toàn phần hai nhánh B19 | BLUEPRINT_ONLY |
| `G12-CHVI-READ-05` | Bayes, xác suất đảo B19 | BLUEPRINT_ONLY |
| `G12-CHVI-READ-06` | Sơ đồ cây, tỉ lệ nền, giải thích kết quả B19 | BLUEPRINT_ONLY |

**Chưa có bất cứ đề, đáp án, khóa hay item Readiness SGK mới nào trong gói này.** Cuối SGK Chương VI cần một bộ held-out riêng; **không sao chép 12 câu `THPT-TOPIC-PROB-RD01..RD12` đã PASS của Chuyên đề**, không đưa câu Practice/SGK Core đã xem làm chứng cứ độc lập. Lúc triển khai phải bảo vệ toàn bộ đề/khóa/rubric phía server, không hint/Tutor/đúng-sai trước Final Submit, tracking đã từng thấy across routes, không cho điểm mastery từ bản thử nghiệm.

---

## VII. Hỏi NotebookLM — review theo từng bài, mục tiêu và placement

1. Xác minh SGK/SBT Toán 12 KNTT Tập 2 B18/B19 theo SOURCE_RECEIPT đã có; đối chiếu nội dung lý thuyết D1 và hai ví dụ D2 của từng bài trong gói này với S1. Đánh giá người học chỉ theo SGK có học đủ khái niệm, điều kiện công thức, ví dụ, Core, Practice và **một Readiness cuối chương** trong kiến trúc (lưu ý phần Readiness hiện chỉ blueprint).
2. Kiểm tra **5 vị trí SGK_CORE**: B18-P01/P02/P03 và B19-P01/P02; **5 vị trí SGK_PRACTICE/EXTENSION**: B18-P04/P05 và B19-P03/P04/P05; **2 Written** W18-01/W19-ANCHOR-01; tổng 12 vị trí cho 12 ID duy nhất. Đánh giá mức Core SGK có vừa chương trình, có cần đổi role không; ghi rõ `B19-P05=SUPPORT_EXTENSION`.
3. Kiểm tra **8/8 outcome**, đặc biệt tỉ lệ nền, điều kiện `P(B)>0`, vai trò độc lập và tính tự đủ của từng trang bài SGK; không nhầm các nguồn SGK Core/Topic Practice hay công bố khóa Readiness.
4. File Temp thứ hai chứa **bản trích nguồn canonical đã review trước** gồm đầy đủ 4 ví dụ và 12 item Practice/Written, chỉ để NotebookLM xác minh đúng content/role; đó **không phải 16 bản ghi mới** và không phải đề Tự kiểm tra cuối chương.
5. Trả `SOURCE_RECEIPT`, `LESSON_REGISTER=B18,B19`, `KNOWLEDGE_DEPTH_AUDIT`, `EXAMPLE_REUSE_REGISTER=4`, `OUTCOME_COVERAGE_G12_SGK=8`, `CORE_PLACEMENT_REGISTER=5`, `PRACTICE_PLACEMENT_REGISTER=5`, `WRITTEN_REGISTER=2`, `CANONICAL_PLACEMENTS=12`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G12_SGK_D1D4` và `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`. Không tự PASS phần Readiness chưa biên soạn, không tự cấp quyền merge/deploy.