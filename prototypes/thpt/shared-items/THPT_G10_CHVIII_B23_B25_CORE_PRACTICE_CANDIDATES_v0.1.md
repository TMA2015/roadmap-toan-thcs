# Toán 10 KNTT · Chương VIII — 18 Core/Practice/Application candidates v0.1

**Status:** DRAFT_NOT_ACADEMICALLY_REVIEWED · CANDIDATE_ONLY · NO_CREDIT.

**S1:** SGK Tập 2 Chương VIII trang 59–79; SBT Tập 2 trang 50–59. Đã đối chiếu trực quan ảnh PDF gốc; xem `THPT_G10_CHVIII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md`. Đây là bài **tự biên soạn**, không sao chép nội dung nguyên văn SGK/SBT.

**Quy mô:** 18 ứng viên = **6 Core + 9 Practice + 3 Application**, cho B23–25. Mỗi bài toán một canonical ID/đáp án/lời giải; các vị trí Topic Practice chỉ là mapping điều kiện, không hàm ý chuyên đề dọc hoàn thiện.

## A. Canonical item register

| Item ID | Bài | SGK role | Skill | Topic placement khả dĩ | Academic |
|---|---|---|---|---|---|
| THPT-G10-B23-C01 | B23 | SGK_CORE | COUNT_ADDITION | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B23-C02 | B23 | SGK_CORE | COUNT_MULTIPLICATION | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B23-P01 | B23 | SGK_PRACTICE | COUNT_REPETITION | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B23-P02 | B23 | SGK_PRACTICE | COUNT_PRODUCT_PATH | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B23-P03 | B23 | SGK_PRACTICE | COUNT_DISJOINT_OPTIONS | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B23-P04 | B23 | SGK_CHAPTER_APPLICATION | COUNT_MENU | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B24-C01 | B24 | SGK_CORE | PERMUTATION | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B24-C02 | B24 | SGK_CORE | ARRANGEMENT | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B24-P01 | B24 | SGK_PRACTICE | COMBINATION | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B24-P02 | B24 | SGK_PRACTICE | ARRANGEMENT_WITH_ROLES | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B24-P03 | B24 | SGK_PRACTICE | PERMUTATION_LETTERS | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B24-P04 | B24 | SGK_CHAPTER_APPLICATION | COMBINATION_TWO_GROUPS | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B25-C01 | B25 | SGK_CORE | BINOMIAL_COEFFICIENT | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B25-C02 | B25 | SGK_CORE | BINOMIAL_X_POWER | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B25-P01 | B25 | SGK_PRACTICE | BINOMIAL_NEGATIVE_COEFF | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B25-P02 | B25 | SGK_PRACTICE | BINOMIAL_CONSTANT_TERM | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B25-P03 | B25 | SGK_PRACTICE | BINOMIAL_COMPOSITE_COEFF | TOPIC_PRACTICE (đủ scope) | PENDING |
| THPT-G10-B25-P04 | B25 | SGK_CHAPTER_APPLICATION | BINOMIAL_SECOND_HIGHEST | TOPIC_PRACTICE (đủ scope) | PENDING |

## B. Đề, khóa đáp án, gợi ý, lời giải

## Bài 23. Quy tắc đếm

**Nguồn đã quan sát:** SGK 59–64; SBT 50–52.
### THPT-G10-B23-C01 — CORE

**Đề:** Một cửa hàng có 4 loại bút mực và 3 loại bút chì khác nhau. Chọn đúng **một** cây bút. Có bao nhiêu cách chọn?

**Đáp án:** 7 cách

**Lời giải:** Hai loại lựa chọn loại trừ nhau nên áp dụng quy tắc cộng: 4+3=7.

**Hint (chỉ Practice/Core):** Chọn một trong hai nhóm, không chọn cả hai.

### THPT-G10-B23-C02 — CORE

**Đề:** Có 3 áo khác màu và 2 quần khác màu. Mỗi bộ gồm đúng một áo và một quần. Có bao nhiêu bộ?

**Đáp án:** 6 bộ

**Lời giải:** Mỗi lựa chọn áo kết hợp được với 2 quần: 3×2=6.

**Hint (chỉ Practice/Core):** Hai bước lựa chọn diễn ra liên tiếp.

### THPT-G10-B23-P01 — PRACTICE

**Đề:** Mã gồm hai chữ cái lấy từ {A,B,C}, **được lặp**, tiếp theo một chữ số từ 0 đến 9. Có bao nhiêu mã?

**Đáp án:** 90 mã

**Lời giải:** Có 3×3×10=90 mã; mỗi vị trí là một bước độc lập, có lặp chữ cái.

**Hint (chỉ Practice/Core):** Chú ý điều kiện được lặp.

### THPT-G10-B23-P02 — PRACTICE

**Đề:** Từ A đến B có 3 tuyến đường, từ B đến C có 4 tuyến. Mọi hành trình A→C bắt buộc qua B và chọn một tuyến ở mỗi đoạn. Có bao nhiêu hành trình?

**Đáp án:** 12 hành trình

**Lời giải:** Quy tắc nhân cho hai chặng: 3×4=12.

**Hint (chỉ Practice/Core):** Mỗi tuyến đoạn đầu ghép được với tất cả tuyến đoạn sau.

### THPT-G10-B23-P03 — PRACTICE

**Đề:** Học sinh chọn tham gia đúng một câu lạc bộ: 5 CLB khoa học hoặc 4 CLB thể thao, danh sách hai nhóm không trùng nhau. Có bao nhiêu cách?

**Đáp án:** 9 cách

**Lời giải:** Hai nhóm lựa chọn rời nhau, cộng 5+4=9.

**Hint (chỉ Practice/Core):** Không nhân vì chỉ tham gia một CLB.

### THPT-G10-B23-P04 — APPLICATION

**Đề:** Một thực đơn có 2 món khai vị, 3 món chính, 2 món tráng miệng. Suất ăn gồm đúng một món mỗi nhóm. Có bao nhiêu thực đơn khác nhau?

**Đáp án:** 12 thực đơn

**Lời giải:** Quy tắc nhân ba bước: 2×3×2=12.

**Hint (chỉ Practice/Core):** Xác định rõ mỗi bước là chọn một món thuộc một nhóm.

## Bài 24. Hoán vị, chỉnh hợp và tổ hợp

**Nguồn đã quan sát:** SGK 65–71; SBT 53–54.
### THPT-G10-B24-C01 — CORE

**Đề:** Có 5 người khác nhau đứng thành một hàng. Có bao nhiêu thứ tự xếp?

**Đáp án:** 120 cách

**Lời giải:** Số hoán vị \(5!=120\).

**Hint (chỉ Practice/Core):** Sắp xếp tất cả phần tử, xét thứ tự.

### THPT-G10-B24-C02 — CORE

**Đề:** Từ 7 học sinh khác nhau, chọn 3 người vào ba vị trí có tên A, B, C. Có bao nhiêu cách?

**Đáp án:** 210 cách

**Lời giải:** Chỉnh hợp chập 3 của 7: \(A_7^3=7\cdot6\cdot5=210\).

**Hint (chỉ Practice/Core):** Vai trò A/B/C khác nhau nên thứ tự quan trọng.

### THPT-G10-B24-P01 — PRACTICE

**Đề:** Chọn một nhóm gồm 3 học sinh từ 8 học sinh khác nhau, không phân vai. Có bao nhiêu nhóm?

**Đáp án:** 56 nhóm

**Lời giải:** \(\binom83=\frac{8\cdot7\cdot6}{3\cdot2\cdot1}=56\).

**Hint (chỉ Practice/Core):** Nhóm không phân biệt thứ tự.

### THPT-G10-B24-P02 — PRACTICE

**Đề:** Một lớp có 6 ứng viên, chọn một lớp trưởng và một lớp phó (hai người khác nhau). Có bao nhiêu cách?

**Đáp án:** 30 cách

**Lời giải:** Có 6 lựa chọn lớp trưởng, sau đó 5 lựa chọn lớp phó: 6×5=30.

**Hint (chỉ Practice/Core):** Hai chức danh phân biệt nên không dùng tổ hợp.

### THPT-G10-B24-P03 — PRACTICE

**Đề:** Các chữ T, O, A, N khác nhau được sắp thành một dãy 4 chữ. Có bao nhiêu dãy?

**Đáp án:** 24 dãy

**Lời giải:** Hoán vị của 4 chữ khác nhau: \(4!=24\).

**Hint (chỉ Practice/Core):** Không có chữ nào trùng nhau.

### THPT-G10-B24-P04 — APPLICATION

**Đề:** Chọn đội gồm 2 bạn nữ từ 5 nữ và 3 bạn nam từ 7 nam, không phân vai. Có bao nhiêu đội?

**Đáp án:** 350 đội

**Lời giải:** \(\binom52\binom73=10\cdot35=350\).

**Hint (chỉ Practice/Core):** Trong mỗi nhóm chọn không thứ tự; giữa hai nhóm dùng nhân.

## Bài 25. Nhị thức Newton

**Nguồn đã quan sát:** SGK 72–77; SBT 55–56.
### THPT-G10-B25-C01 — CORE

**Đề:** Hệ số của \(a^2b^2\) trong \((a+b)^4\) là bao nhiêu?

**Đáp án:** 6

**Lời giải:** Trong khai triển Newton, hệ số là \(\binom42=6\).

**Hint (chỉ Practice/Core):** Xác định số lần chọn b bằng 2.

### THPT-G10-B25-C02 — CORE

**Đề:** Hệ số của \(x^2\) trong \((1+x)^5\) bằng bao nhiêu?

**Đáp án:** 10

**Lời giải:** \(\binom52=10\).

**Hint (chỉ Practice/Core):** Dùng hệ số ở số hạng bậc hai.

### THPT-G10-B25-P01 — PRACTICE

**Đề:** Tìm hệ số của \(x^3\) trong \((2x-1)^4\).

**Đáp án:** -32

**Lời giải:** Chọn 3 lần \(2x\), một lần \(-1\): \(\binom43(2)^3(-1)=-32\).

**Hint (chỉ Practice/Core):** Giữ dấu trừ của số hạng không chứa x.

### THPT-G10-B25-P02 — PRACTICE

**Đề:** Tìm số hạng không chứa \(x\) trong \((x+1/x)^6\) với \(x\ne0\).

**Đáp án:** 20

**Lời giải:** Số hạng thứ \(k+1\) có lũy thừa \(x^{6-2k}\). Bằng \(x^0\) khi \(k=3\), hệ số \(\binom63=20\).

**Hint (chỉ Practice/Core):** Chọn k để số mũ x bằng 0.

### THPT-G10-B25-P03 — PRACTICE

**Đề:** Tìm hệ số của \(x^2\) trong \((1+3x)^4\).

**Đáp án:** 54

**Lời giải:** \(\binom42(3)^2=6\cdot9=54\).

**Hint (chỉ Practice/Core):** Nhân thêm hệ số 3 tương ứng số mũ 2.

### THPT-G10-B25-P04 — APPLICATION

**Đề:** Tìm hệ số của \(x^4\) trong \((x-2)^5\).

**Đáp án:** -10

**Lời giải:** Lấy 4 thừa số x và 1 thừa số \(-2\): \(\binom51(-2)=-10\).

**Hint (chỉ Practice/Core):** Bậc 4 chỉ thiếu một thừa số x.


## C. Quy định đánh giá và tiến độ

- Tuyệt đối **không** lấy các câu đã hiện lời giải trong kho này làm chứng cứ Readiness độc lập. SGK Chapter VIII Readiness và Topic Readiness thuộc scope đánh giá khác nhau, cần held-out selection theo exposure toàn bộ hai nhánh.
- Một item canonical có thể được gắn nhiều `placement_id` theo context, nhưng không nhân bản câu, khóa, history và mastery.
- Chuyên đề dọc chỉ có Kiến thức/Luyện tập/Tự kiểm tra; không có Core tab. SGK có Core, Practice và Tự kiểm tra **cuối chương**.
- Cần NotebookLM review toán học, phân tầng, source depth, rubric trước khi phát hành; không tự Academic PASS hay merge/deploy.
