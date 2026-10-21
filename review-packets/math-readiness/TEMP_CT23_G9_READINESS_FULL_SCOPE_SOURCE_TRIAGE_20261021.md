# TEMP CT23 Grade-9 Probability — Readiness academic batch design, no item implementation
**PACKET_ID:** `MATH-CT23-G9-READINESS-DEPTH-BATCH-R0-20261021`  
**State:** SOURCE_AUDIT_ONLY / NO_LIVE_RELEASE  
**Reviewer:** NotebookLM (independent; should NOT automatically approve any new question).  
**Source head:** current main after CT17 readiness repair, `43ab2cc368fcfcc26fe1978ed969b2af7f2949a9`.  

**Reason for this packet:** Owner-provided NotebookLM 21-topic audit says 19 topic screens KEEP, CT17 fixed already, CT23 BATCH_EXPAND from 12 items / 5 primary skills. Before authoring, verify whether Grade-9 KNTT cards support a **separately scoped Grade-9 readiness probe**, rather than extending one mixed-grade fixed 12-question screen and accidentally demanding Grade-9 mastery from Grade-6 learners. The original 12 Readiness IDs/answers are historical immutable evidence. No new canonical taxonomy skill by default.

## Source locks

| Source | Git blob SHA | Content |
|---|---|---|
| `docs/assets/data/practice/23-xac-suat-micro-v1.json` | `d1c0d3dfc71418688811ab54e593707cef716162` | 8 Grade9 Core Micro questions |
| `docs/assets/data/assessment/23-xac-suat-core-v1.json` | `6ecf6eb6545fbb8e01465ccac76db0d5c60b7485` | 12 existing Readiness questions |
| `docs/assets/data/curriculum/topic23-learning-workspace.json` | `70a934029d7521dc0170867efb7c884716cf30ae` | seven mixed-grade Core cards including two Grade9 cards |
| `docs/assets/data/practice/23-xac-suat-v1.manifest.json` | `7b936f2e5a01ce0937fc2cfd6ae391d4cbf741fb` | 120 active Practice questions in four shards |

## Exact existing Grade-9 KNTT Core card scope

### prob23-core-g9-6 — Không gian mẫu nhiều bước và sơ đồ cây
KNTT lessons: ["Lớp 9: Bài 25"]; canonical skill families: `khong-gian-mau, bien-co, xac-suat-co-dien`.  
Teaching idea: Với phép thử nhiều bước, không gian mẫu gồm mọi kết quả có thể của toàn bộ chuỗi bước. Có thể dùng bảng hoặc sơ đồ cây để liệt kê có hệ thống, tránh bỏ sót hay đếm trùng. Khi các kết quả của không gian mẫu là đồng khả năng, xác suất của một biến cố bằng số kết quả thuận lợi chia cho tổng số kết quả có thể. Khi các bước độc lập và mỗi bước có số kết quả xác định, số kết quả toàn bộ có thể tính bằng quy tắc nhân.

### prob23-core-g9-7 — Xác suất trong mô hình nhiều bước và không hoàn lại
KNTT lessons: ["Lớp 9: Bài 26"]; canonical skill families: `xac-suat-co-dien, kiem-tra-xac-suat`.  
Teaching idea: Sau khi lập đúng không gian mẫu, xác suất cổ điển được tính bằng số kết quả thuận lợi chia cho tổng số kết quả đồng khả năng. Với phép thử không hoàn lại, thành phần còn lại thay đổi sau mỗi lần rút nên xác suất ở bước sau phải cập nhật theo điều kiện đã xảy ra trước đó.

## 8 existing Grade-9 Micro sources — mathematical references, NOT direct independent Readiness duplicates

### `PRO23MICRO_021` — Card `prob23-core-g9-6`; skill ["khong-gian-mau"]; grade [9]
Tung một đồng xu cân đối 3 lần. Không gian mẫu có bao nhiêu kết quả?

(0) 8 | (1) 6 | (2) 3 | (3) 9

**Answer option:** 0. **Explanation:** Mỗi lần có 2 kết quả; ba lần tạo 2×2×2=8 kết quả.

### `PRO23MICRO_022` — Card `prob23-core-g9-6`; skill ["khong-gian-mau"]; grade [9]
Gieo hai xúc xắc phân biệt một lần. Không gian mẫu gồm bao nhiêu cặp kết quả có thứ tự?

(0) 36 | (1) 12 | (2) 6 | (3) 18

**Answer option:** 0. **Explanation:** Mỗi xúc xắc có 6 kết quả; cặp có thứ tự tạo 6×6=36 kết quả.

### `PRO23MICRO_023` — Card `prob23-core-g9-6`; skill ["bien-co"]; grade [9]
Tung một đồng xu rồi gieo một xúc xắc sáu mặt. Biến cố A là “đồng xu ra ngửa và xúc xắc ra số chẵn”. A có bao nhiêu kết quả thuận lợi?

(0) 3 | (1) 6 | (2) 2 | (3) 12

**Answer option:** 0. **Explanation:** Các kết quả thuận lợi là (N;2), (N;4), (N;6), nên biến cố A có 3 kết quả thuận lợi trong không gian mẫu nhiều bước.

### `PRO23MICRO_024` — Card `prob23-core-g9-6`; skill ["xac-suat-co-dien"]; grade [9]
Tung một đồng xu cân đối hai lần. Xác suất xuất hiện đúng một mặt ngửa là:

(0) 1/2 | (1) 1/4 | (2) 3/4 | (3) 1

**Answer option:** 0. **Explanation:** Không gian mẫu {NN, NS, SN, SS}; đúng một ngửa có NS, SN nên xác suất là 2/4=1/2.

### `PRO23MICRO_025` — Card `prob23-core-g9-7`; skill ["xac-suat-co-dien"]; grade [9]
Hộp có 3 thẻ đỏ và 2 thẻ xanh. Rút liên tiếp 2 thẻ không hoàn lại. Xác suất cả hai thẻ đều đỏ là:

(0) 3/10 | (1) 9/25 | (2) 1/5 | (3) 3/5

**Answer option:** 0. **Explanation:** P(đỏ lần 1)=3/5; sau đó còn 2 thẻ đỏ trong 4 thẻ nên P(đỏ lần 2|đỏ lần 1)=2/4. Tích là 3/10.

### `PRO23MICRO_026` — Card `prob23-core-g9-7`; skill ["kiem-tra-xac-suat"]; grade [9]
Hộp có 3 thẻ đỏ và 2 thẻ xanh. Biết lần đầu đã rút được một thẻ đỏ và không hoàn lại. Xác suất lần hai tiếp tục rút đỏ là:

(0) 1/2 | (1) 3/5 | (2) 2/5 | (3) 3/4

**Answer option:** 0. **Explanation:** Sau lần đầu còn 2 thẻ đỏ trong tổng 4 thẻ, nên xác suất là 2/4=1/2; không được giữ nguyên 3/5.

### `PRO23MICRO_027` — Card `prob23-core-g9-7`; skill ["xac-suat-co-dien"]; grade [9]
Hộp có 2 thẻ trắng và 1 thẻ đen. Rút 2 thẻ liên tiếp không hoàn lại. Xác suất hai thẻ khác màu là:

(0) 2/3 | (1) 1/3 | (2) 1/2 | (3) 1

**Answer option:** 0. **Explanation:** Trắng rồi đen: (2/3)(1/2)=1/3. Đen rồi trắng: (1/3)(2/2)=1/3. Tổng là 2/3.

### `PRO23MICRO_028` — Card `prob23-core-g9-7`; skill ["kiem-tra-xac-suat"]; grade [9]
Trong một mô hình nhiều bước, một bạn tính được xác suất của biến cố bằng 13/12. Kết luận nào đúng?

(0) Kết quả sai vì xác suất không thể lớn hơn 1 | (1) Kết quả đúng vì 13 lớn hơn 12 | (2) Biến cố chắc chắn xảy ra | (3) Cần đổi 13/12 thành 12/13 mà không cần kiểm tra mô hình

**Answer option:** 0. **Explanation:** Mọi xác suất phải nằm trong [0;1]. Giá trị 13/12>1 cho thấy phép đếm hoặc mô hình đã sai.

## Original 12 existing fixed-topic Readiness sources (do NOT silently regrade)

### `PRO23READY_001` — primary skill `xac-suat-thuc-nghiem`
Tung đồng xu 40 lần, mặt ngửa xuất hiện 12 lần. Xác suất thực nghiệm của mặt ngửa là bao nhiêu?

(0) 3/10 | (1) 1/2 | (2) 12/28 | (3) 28/40

**Answer option:** 0. **Explanation:** Tỉ số quan sát là 12/40 = 3/10.

### `PRO23READY_002` — primary skill `xac-suat-thuc-nghiem`
Trong 20 lượt quay có 7 lượt đỏ và 13 lượt xanh. Xác suất thực nghiệm của ô xanh là bao nhiêu?

(0) 7/20 | (1) 13/7 | (2) 13/20 | (3) 1/2

**Answer option:** 2. **Explanation:** Có 13 lần xanh trong tổng 20 lượt: 13/20.

### `PRO23READY_003` — primary skill `xac-suat-thuc-nghiem`
Một thí nghiệm thực hiện 60 lần, sự kiện A xuất hiện 18 lần. Tần số tương đối của A là bao nhiêu?

(0) 0,18 | (1) 0,3 | (2) 0,6 | (3) 3,0

**Answer option:** 1. **Explanation:** Tần số tương đối bằng 18/60 = 0,3.

### `PRO23READY_004` — primary skill `xac-suat-thuc-nghiem`
Một đồng xu được tung 30 lần, có 12 lần ngửa. Kết luận nào đúng về dãy thử này?

(0) Xác suất thực nghiệm của ngửa bằng 12/30 | (1) Lần tiếp theo chắc chắn ra sấp | (2) Xác suất thực nghiệm của ngửa bằng 12/18 | (3) Tung thêm 10 lần phải có đúng 5 lần ngửa

**Answer option:** 0. **Explanation:** Giá trị thực nghiệm chỉ mô tả 12 lần ngửa trong 30 lần quan sát, không bảo đảm kết quả tiếp theo.

### `PRO23READY_005` — primary skill `bien-co-chac-chan-khong-the`
Gieo xúc xắc sáu mặt đánh số 1 đến 6. Biến cố “số chấm không lớn hơn 6” thuộc loại nào?

(0) Không thể | (1) Ngẫu nhiên | (2) Chắc chắn | (3) Không xác định

**Answer option:** 2. **Explanation:** Mọi mặt đều ghi số từ 1 đến 6; biến cố luôn xảy ra.

### `PRO23READY_006` — primary skill `bien-co-chac-chan-khong-the`
Gieo xúc xắc sáu mặt đánh số 1 đến 6. Biến cố “ra số chấm bằng 8” thuộc loại nào?

(0) Chắc chắn | (1) Không thể | (2) Ngẫu nhiên | (3) Phụ thuộc số lần gieo

**Answer option:** 1. **Explanation:** Xúc xắc không có mặt ghi số 8.

### `PRO23READY_007` — primary skill `xac-suat-co-dien`
Rút ngẫu nhiên một trong tám thẻ giống nhau ghi số từ 1 đến 8. Xác suất rút số chia hết cho 3 là bao nhiêu?

(0) 3/8 | (1) 1/8 | (2) 2/3 | (3) 1/4

**Answer option:** 3. **Explanation:** Các số 3 và 6 thuận lợi trong 8 thẻ đồng khả năng: 2/8 = 1/4.

### `PRO23READY_008` — primary skill `xac-suat-co-dien`
Gieo xúc xắc cân đối sáu mặt. Xác suất ra số chấm lẻ là bao nhiêu?

(0) 1/6 | (1) 1/2 | (2) 2/3 | (3) 1/3

**Answer option:** 1. **Explanation:** Có ba mặt lẻ 1, 3, 5 trong 6 mặt đồng khả năng.

### `PRO23READY_009` — primary skill `phep-thu-ngau-nhien`
Hoạt động nào dưới đây là một phép thử ngẫu nhiên theo mô tả?

(0) Đọc số ghi sẵn trên bảng | (1) Đếm số chân của bàn có bốn chân | (2) Rút một thẻ từ hộp kín ghi số 1 đến 5 mà không nhìn | (3) Tính 2 + 3

**Answer option:** 2. **Explanation:** Biết các kết quả có thể nhưng không biết chắc kết quả trước khi rút.

### `PRO23READY_010` — primary skill `xac-suat-co-dien`
Vòng quay có 8 ô bằng nhau, trong đó 3 ô xanh. Mỗi ô đồng khả năng. Xác suất kim dừng ở màu xanh là bao nhiêu?

(0) 3/8 | (1) 3/5 | (2) 1/8 | (3) 5/8

**Answer option:** 0. **Explanation:** Ba ô thuận lợi trong tám ô đồng khả năng: 3/8.

### `PRO23READY_011` — primary skill `xac-suat-thuc-nghiem`
Mô hình đồng xu cân đối cho P(ngửa) = 1/2. Sau 20 lượt tung có 11 lần ngửa. Phát biểu nào đúng?

(0) Xác suất thực nghiệm bằng 1/2 | (1) Dữ liệu 11 lần ngửa là không thể | (2) Xác suất thực nghiệm bằng 11/20, khác giá trị mô hình 1/2 | (3) Lần sau chắc chắn ra sấp

**Answer option:** 2. **Explanation:** Tỉ lệ quan sát 11/20 = 0,55, không nhất thiết bằng xác suất mô hình 1/2.

### `PRO23READY_012` — primary skill `kiem-tra-xac-suat`
Một bạn tính được xác suất của biến cố A bằng -0,2. Nhận xét nào đúng?

(0) Hợp lệ vì có thể âm | (1) Hợp lệ nếu A không thể | (2) Hợp lệ vì trị tuyệt đối nhỏ hơn 1 | (3) Không hợp lệ vì xác suất luôn từ 0 đến 1

**Answer option:** 3. **Explanation:** Mọi xác suất thỏa mãn 0 ≤ P(A) ≤ 1; giá trị âm cho thấy phép tính sai.

## Reviewer decision requested

1. Evaluate both existing Grade-9 Core cards (Bài 25–26) against S1 KNTT and classify sample-space counting, tree diagram, without-replacement and complement as **KNTT-G9-Core**, supporting technique, or entrance/challenge. Never infer a page citation without source.
2. Audit mathematical truth, completeness, answer alternatives and *cloning risk* of 8 Grade-9 Micro plus current 12 Readiness questions. Identify any defective existing Readiness ID requiring immediate bounded correction.
3. Recommend a complete, coherent **Grade-9 readiness probe blueprint** (e.g. 6–10 varied *new* independent items) **only if necessary**; distinguish already-reviewed Micro source idea vs. a new independently authored assessment stem with different numbers/representation. Identify intended grade, skill, cognition, expected response, anti-clone constraints. Do not create/commit new live questions yet.
4. Specify UX/scoring segregation from Grade6–8 topic quick screen; recommend grade-scoped independent versioning and what can be assessed by a short screen vs skill mastery.
5. Return `OVERALL|KEEP_SCREEN / G9_SEPARATE_PROBE_REQUIRED / REVISION_REQUIRED / INSUFFICIENT_S1` and `AUTHORIZATION|NO_LIVE_RELEASE`.

**Do not** merge Entrance10 Practice items into KNTT-Core to satisfy artificial quotas, append Grade9 items directly to a fixed cross-grade 12-item quiz, introduce 1–2 isolated new questions, modify progress/74 Written/Readiness historical answer IDs, or declare a whole skill mastered from one answer.
