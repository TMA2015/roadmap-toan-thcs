# Toán 11 KNTT · Chương VIII — Các quy tắc tính xác suất · SGK learning path · Academic authoring v0.1

**PACKET_ID:** `THPT-SGK-G11-CHVIII-B28-B30-D1D2-CORE-PLACEMENT-20261028-R0`  
**ACADEMIC_STATUS:** `NEW_SGK_JOURNEY_CANDIDATE_NOT_REVIEWED` · `NO_PUBLIC_READINESS_KEYS` · `NO_MERGE_DEPLOY`  
**Chương/Bài S1:** Toán 11 Tập 2 KNTT, ChVIII, B28 pp.63–69, B29 pp.70–74, B30 pp.75–79, Bài tập cuối ChVIII pp.80–82; SBT Toán 11 Tập 2 KNTT pp.42–55, theo **NotebookLM SOURCE_RECEIPT_G11** từ review G11 Topic R0.  
**Permanent Sources:** `01-05_THPT_PERMANENT_v2.0_ONLY`, file 08 (hai hành trình độc lập) ưu tiên khi xung đột; 06+07 cho handoff/delta.

## 1. Mục tiêu của đợt review: SGK độc lập, không phải sao chép Topic

Phân đoạn Chuyên đề G11 đã có PASS học thuật theo `THPT-TOPIC-PROBABILITY-G11-B28-B30-D1D4-AUTHORING-20261028-R0` (4 modules, 3 examples, 7 outcomes, 10 items). **Bản này là hành trình SGK theo BÀI**, mới cần review D1–D2 và tính phù hợp của các placement `SGK_CORE`/`SGK_PRACTICE`. Không suy rộng verdict Topic sang SGK; không tự nhận SGK Chapter Readiness đã PASS.

Học sinh có thể mở trực tiếp **SGK Toán 11 → ChVIII → B28**, rồi B29 và B30, học đủ định nghĩa/công thức/ví dụ mà không cần mở trang Chuyên đề. Từ mỗi bài: **Kiến thức → Core ngay sau bài → Luyện tập/Vận dụng**, rồi **Tự kiểm tra CUỐI CHƯƠNG** với đề held-out riêng. Không tạo Core mới cho Chuyên đề; Chuyên đề giữ đúng **Kiến thức/Luyện tập/Tự kiểm tra Chuyên đề**.

Canonical content dùng chung: ví dụ gốc `EX-G11-B28-01`, `EX-G11-B29-01`, `EX-G11-B30-01` và **10 item mới G11** đã review tại:
`prototypes/thpt/content-drafts/THPT_TOPIC_XAC_SUAT_G11_B28_B30_KNOWLEDGE_D1D2_AUTHORING_v0.1.md`,
`prototypes/thpt/shared-items/THPT_TOPIC_XAC_SUAT_G11_B28_B30_PRACTICE_WRITTEN_10ITEM_CANDIDATES_v0.1.md`.
Không tạo `item_id`, answer, rubric hay attempt trùng; tất cả mapping dưới đây là **placement đề xuất** và mới cần reviewer xác minh SGK Core.

## 2. BÀI 28 — Biến cố hợp, giao và độc lập

### B28-KT-01 · Hai biến cố có thể xảy ra cùng nhau thế nào?

Một biến cố A gồm các kết quả làm A xảy ra; một biến cố B gồm các kết quả làm B xảy ra, cùng nằm trong không gian mẫu \(\Omega\). Hợp \(A\cup B\) là "A xảy ra hoặc B xảy ra **hoặc cả hai**". Giao \(A\cap B\) là "A và B đồng thời xảy ra". Nếu giao rỗng, gọi A và B **xung khắc**. Không được đồng nhất "xung khắc" với "độc lập".

Ví dụ giải thích không tạo item: rút đều thẻ số 1..6, A là "ra số chẵn" \(\{2,4,6\}\), B là "ra số lớn hơn 4" \(\{5,6\}\). Giao chỉ có \(\{6\}\); hợp là \(\{2,4,5,6\}\). Hai biến cố không xung khắc vì số 6 nằm ở cả hai tập.

Một biến cố đối \(\bar A\) gồm tất cả kết quả A không xảy ra. Biến cố đối A và \(\bar A\) là xung khắc, nhưng **không phải mọi cặp biến cố xung khắc đều là đối nhau**. Nếu cả A và B có xác suất dương thì xung khắc và độc lập không thể đồng thời đúng.

### B28-KT-02 · Nhận biết tính độc lập

A và B độc lập khi biết A đã xảy ra không làm thay đổi khả năng B xảy ra. Với các bài toán hữu hạn trong chương này, phép kiểm tra là:
\[
P(A\cap B)=P(A)\,P(B).
\]
Điều kiện là hai biến cố được xét trên **cùng một mô hình**. Ví dụ tung hai đồng xu công bằng độc lập: một đồng xu ngửa không làm xác suất đồng xu kia ngửa thay đổi. Trái lại, sự kiện "ra số chẵn" và "ra số lớn hơn 4" của một lần chọn số không nhất thiết độc lập.

**D2 đã PASS, chỉ tham chiếu canonical dùng chung:** `EX-G11-B28-01` — chọn số 1..10, A chẵn, B chia hết cho 3. Học liệu SGK phải hiển thị nguyên ví dụ đã review với khóa nguồn một lần, chỉ render ở B28; kết luận A,B không độc lập (giao có 1 kết quả, tích riêng khác xác suất giao).

**Điểm tự nhắc:** "Hai phép thử khác nhau" không tự động bảo đảm các biến cố đang xét độc lập nếu chúng cùng phụ thuộc vào kết quả tổng hợp; phải đọc kĩ định nghĩa A, B và kiểm tra bằng phép tính.

## 3. BÀI 29 — Công thức cộng xác suất

### B29-KT-01 · Khi hai biến cố xung khắc

Nếu \(A\cap B=\varnothing\), không có kết quả nào thuận lợi cho cả hai. Do đó:
\[
P(A\cup B)=P(A)+P(B).
\]
Ví dụ rút đều một thẻ trong hộp gồm 5 thẻ đỏ, 3 thẻ xanh, 2 thẻ vàng, tất cả khác nhau và mỗi thẻ chỉ có một màu: xác suất "đỏ hoặc xanh" là \(5/10+3/10=4/5\). Không có thẻ vừa đỏ vừa xanh, nên phép cộng trực tiếp đúng.

### B29-KT-02 · Khi hai biến cố có thể cùng xảy ra

Cộng số kết quả của A và B sẽ đếm **phần giao hai lần**. Với mọi A,B:
\[
P(A\cup B)=P(A)+P(B)-P(A\cap B).
\]
Chú ý đây là công thức tổng quát, còn công thức cộng cho biến cố xung khắc là trường hợp đặc biệt giao có xác suất 0. Nếu \(P(A\cap B)>0\), cộng trực tiếp hai xác suất là sai.

Ví dụ giải thích độc lập: chọn đều một số nguyên 1..12. A chia hết cho 2 có 6 số; B chia hết cho 3 có 4 số; cả hai có 2 số (6,12). Vậy \(P(A\cup B)=(6+4-2)/12=2/3\).

**D2 đã PASS, chỉ tham chiếu ví dụ dùng chung:** `EX-G11-B29-01` — 50 người, thích A/B/cả hai; giải theo \(n(A\cup B)=n(A)+n(B)-n(A\cap B)\). Khi triển khai trang B29, ví dụ phải được load từ **một nguồn canonical**, không viết bản đáp án thứ hai.

**Lỗi thường gặp:** Trừ giao khi A,B xung khắc vẫn được phép (vì giao bằng 0), nhưng không được tự cho phép bỏ trừ nếu không chứng minh xung khắc.

## 4. BÀI 30 — Công thức nhân xác suất cho hai biến cố độc lập

### B30-KT-01 · Quy tắc nhân và giả thiết

Với hai biến cố **độc lập**, ta có:
\[
P(A\cap B)=P(A)P(B).
\]
Ví dụ mỗi thiết bị có xác suất thành công 1/2 và 2/3; nếu **hai kết quả độc lập**, xác suất cả hai thành công là \(1/2\cdot2/3=1/3\). Nếu chỉ biết hai tỉ lệ thành công mà **không biết độc lập**, không được tự nhân.

### B30-KT-02 · Kết hợp nhân, cộng và biến cố đối

Với A,B độc lập, hai biến cố đối \(\bar A,\bar B\) cũng độc lập. Xác suất **không cái nào xảy ra** là:
\[
P(\bar A\cap\bar B)=(1-P(A))(1-P(B)).
\]
Suy ra xác suất **ít nhất một** xảy ra bằng \(1-(1-P(A))(1-P(B))\). Có thể kiểm tra lại bằng công thức cộng cho A hoặc B.

Ví dụ giải thích: A,B độc lập, \(P(A)=1/2\), \(P(B)=1/4\). Xác suất "không cái nào" là \((1/2)(3/4)=3/8\); ít nhất một là \(1-3/8=5/8\).

**D2 đã PASS, chỉ tham chiếu ví dụ dùng chung:** `EX-G11-B30-01` — hai hệ thống độc lập, tính cả hai/không cái nào/ít nhất một. Không trộn với công thức nhân **tổng quát có điều kiện** lớp 12, vì ranh giới Core của B30 là **hai biến cố độc lập**.

**Lỗi thường gặp:** Hai biến cố được mô tả là "không liên quan về ý nghĩa" chưa đủ chứng minh chúng độc lập về xác suất; kiểm tra quan hệ \(P(A\cap B)\) khi đề không cho giả thiết.

## 5. Mapping canonical item sang Core và Practice SGK (không nhân bản)

| Bài | Vị trí SGK đề xuất | ID canonical gốc đã reviewer PASS ở Topic | Outcome chính | Vì sao |
|---|---|---|---|---|
| B28 | `SGK_CORE` | `THPT-G11-B28-P02` | `G11-B28-INDEPENDENT_EVENTS` | Hai đồng xu độc lập, kiểm tra bằng giao/tích |
| B28 | `SGK_CORE` | `THPT-G11-B28-P03` | `G11-B28-DISJOINT_EVENTS` | Phân biệt xung khắc, đối nhau, độc lập |
| B28 | `SGK_PRACTICE` | `THPT-G11-B28-P01` | `G11-B28-EVENT_UNION_INTERSECTION` | Phối hợp hợp, giao và kiểm tra độc lập |
| B29 | `SGK_CORE` | `THPT-G11-B29-P01` | `G11-B29-ADDITION_GENERAL` | Công thức cộng tổng quát và giao không rỗng |
| B29 | `SGK_CORE` | `THPT-G11-B29-P02` | `G11-B29-ADDITION_DISJOINT` | Công thức cộng đặc biệt của biến cố xung khắc |
| B29 | `SGK_PRACTICE` | `THPT-G11-B29-P03` | `G11-B29-ADDITION_GENERAL` | Cộng có phần giao trong tập số |
| B30 | `SGK_CORE` | `THPT-G11-B30-P01` | `G11-B30-MULTIPLICATION_INDEPENDENT` | Nhân hai tỉ lệ độc lập rõ giả thiết |
| B30 | `SGK_PRACTICE` | `THPT-G11-B30-P02` | `G11-B30-MULTIPLICATION_INDEPENDENT` | Nhân rồi cộng |
| B30 | `SGK_PRACTICE_APPLICATION` | `THPT-G11-B30-P03` | `G11-B30-COMBINED_RULES` | Sử dụng biến cố đối |
| B30 | `SGK_WRITTEN_ANCHOR` | `THPT-G11-CHVIII-W30-ANCHOR-01` | `G11-B30-COMBINED_RULES` | Một Written có Anchor tag |

**Expected 10 placements, 10 distinct canonical IDs, 5 Core + 4 Practice/Application + 1 Written Anchor.** Các item này đều đã reviewer PASS cho câu hỏi toán học **ở Topic**, nhưng **vai trò SGK_CORE/SGK_PRACTICE mới, phải được NotebookLM xem theo S1** trước khi công nhận. Không gán duplicate attempt, answer history, content_version hoặc canonical bank record vì cùng item được render tại các nhánh khác.

**Giữ tính tự đủ:** Trang Kiến thức SGK B28–B30 chứa lí thuyết trên; đoạn ví dụ D2 nạp từ 3 ví dụ nguồn chung; Core xuất hiện tại đúng bài; Practice và Written nằm trong cùng hành trình SGK. Không yêu cầu học sinh mở Chuyên đề.

## 6. Tự kiểm tra CUỐI CHƯƠNG VIII — chỉ blueprint, không có đề/khóa

| Slot metadata | Phạm vi outcome | Dự kiến mức |
|---|---|---|
| `G11-CHVIII-READ-01` | Hợp/giao/xung khắc B28 | Basic |
| `G11-CHVIII-READ-02` | Kiểm tra độc lập B28 | Basic–Intermediate |
| `G11-CHVIII-READ-03` | Cộng tổng quát B29 | Basic |
| `G11-CHVIII-READ-04` | Cộng xung khắc B29 | Basic |
| `G11-CHVIII-READ-05` | Nhân độc lập và biến cố đối B30 | Intermediate |
| `G11-CHVIII-READ-06` | Kết hợp cộng/nhân/đối B30 | Intermediate |

**Chưa biên soạn bất kỳ câu Readiness mới**, không có private key, không có active slot. Đây là định hướng để biên soạn **đề độc lập** cho cuối **SGK Chương VIII**, KHÔNG sử dụng lại 12 câu `THPT-TOPIC-PROB-RD01..RD12` đã PASS của **Chuyên đề**. Các câu Core/Practice từng nhìn thấy không thể dùng làm bằng chứng Readiness mới nếu chưa có kiểm soát tiếp xúc. Không hint/Tutor/đúng-sai/đáp án trước Final Submit.

## 7. Reviewer gates và verdict bắt buộc

- Đối chiếu trực tiếp SGK/SBT KNTT Toán 11 Tập 2 B28–B30 (source receipt đã có từ reviewer Topic; cần xác định bài SGK đầy đủ). Kiểm tra D1–D2 theo từng bài SGK, thiếu khái niệm/ví dụ/độ sâu nào không, có trùng quá gần với SGK/SBT không.
- Kiểm tra **10 placement mới** của canonical items đã PASS toán học; có 5 `SGK_CORE` đúng chuẩn, 4 `SGK_PRACTICE` và 1 `SGK_WRITTEN_ANCHOR` không? Phân tầng \`Core\` có bài quá khó, hoặc câu Core nào thiếu, phải báo HOLD cụ thể để chỉnh mapping.
- Đảm bảo SGK ChVIII là hành trình tự đủ, Chuyên đề 10–12 tiếp tục đúng ba phần và item/câu đáp án không bị nhân bản. Đánh giá 7/7 G11 outcome dưới vai trò **SGK** (khác Topic outcome PASS).
- Blueprint 6 slot cuối chương chỉ là đề xuất. **Không chấm PASS Readiness từ blueprint**.
- Trả `SOURCE_RECEIPT`, `LESSON_REGISTER=B28,B29,B30`, `KNOWLEDGE_DEPTH_AUDIT`, `EXAMPLE_REUSE_REGISTER=3`, `CORE_PLACEMENT_REGISTER=5`, `PRACTICE_PLACEMENT_REGISTER=4`, `WRITTEN_ANCHOR_REGISTER=1`, `OUTCOME_COVERAGE_G11=7`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G11_SGK_D1D4`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
