# R38 — NGUỒN NOTEBOOKLM 2: 40 câu gốc và ánh xạ Skill Family cần phản biện (Markdown)

**Packet ID:** `MATH-R38-R27-40-SKILL-FAMILY-CORRECTION-20261018`

> Tài liệu chỉ để phản biện **Skill Family**, KHÔNG kiểm định lại 40 câu toán đã được chủ dự án nghiệm thu ở R33/R35. Nội dung câu và bốn đáp án được trình bày nguyên văn từ bản bank R38 đã khóa SHA; phần ý kiến NotebookLM cũ được ghi riêng và có thể sai.

**SHA nguồn bank và đề xuất R38:** `5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad`. **SHA biên bản tổng hợp phản biện trước:** `b3ae2c4b450d6de9f4de56dc5e077d5914168825`. **Registry đối chiếu:** `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`.

## I. Phạm vi và tình trạng

- **40/40 ID gốc**: giữ nguyên đề, bốn phương án và đáp án có chỉ số 0–3, bao gồm sửa câu chữ R34 đã được duyệt.
- **Phản biện trước:** 33 PASS / 7 REVISE. Đối chiếu Registry cho thấy **27 PASS dùng Family ID không có thật**; tổng **32/40** mã được đề xuất không tồn tại (27 PASS + 5 REVISE).
- **Chỉ đánh giá liên kết item → Skill Family + vai trò đánh giá.** Không nâng tầng nội dung từ KNTT-Core thành Entrance10 và không tự tạo thêm Family mới.
- **Nếu Registry không có Family phù hợp**, dùng `NEW_FAMILY_PROPOSAL` (đề xuất tạo mới, chưa duyệt) hoặc `HOLD`, nêu bằng chứng toán học.
- **Chưa có ánh xạ Skill mới được duyệt.** Không kích hoạt Skill / Readiness / Mastery, không sửa bank, không hồi tố lịch sử học sinh.

## II. Danh sách nhóm cần chú ý

| Nhóm | Số câu | Yêu cầu xử lý |
|---|---:|---|
| Làm tròn số | 12 | `NUM-ROUNDING` không tồn tại; đánh giá khả năng dùng `NUM-SETS` hoặc cần Family mới |
| Phép tính hữu tỉ | 6 | `NUM-RATIONAL-OPS` không tồn tại; phân biệt phép tính phân số, thứ tự thực hiện, lũy thừa |
| Số vô tỉ | 3 | `NUM-IRRATIONAL` không tồn tại; kiểm tra `NUM-SETS` |
| Căn bậc hai | 3 | `NUM-SQUARE-ROOT-INTRO` và `NUM-REAL-SETS` đều không tồn tại, phải làm rõ lỗ hổng Registry |
| Mô hình tỉ lệ CT03 | 4 | `RATIO-DIRECT` có thật; `RATIO-SCALE` không có, kiểm tra `RATIO-BASIC`; giữ tầng **KNTT-Core** đã duyệt |
| Chia đa thức | 6 | `ALG-DIV-POLYNOMIAL` không có; `ALG-DIV-MONOMIAL` có nhưng cần xét nghĩa |
| Giá trị tuyệt đối & đồ thị bậc hai | 6 | `NUM-ABS`, `QUAD-GRAPH` tồn tại; vẫn cần phê duyệt vai trò cho từng ID |

## III. 40 câu cần phản biện theo từng ID

### 1. `NUM02V1_121` — CT02
 
**Câu hỏi nguyên văn:** Làm tròn 5,83 đến hàng phần mười.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 5,8
- B (index 1): 5,9
- C (index 2): 5,83
- D (index 3): 6,0

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Chữ số hàng phần trăm là 3 < 5 nên giữ nguyên hàng phần mười: 5,83 ≈ 5,8.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35–36; Ví dụ 1 tr.36. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 2. `NUM02V1_122` — CT02
 
**Câu hỏi nguyên văn:** Làm tròn 12,349 đến hàng phần trăm.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 12,34
- B (index 1): 12,35
- C (index 2): 12,3
- D (index 3): 12,349

**Đáp án nguồn:** B (index 1). **Giải thích nguồn:** Chữ số hàng phần nghìn là 9 ≥ 5 nên tăng hàng phần trăm từ 4 lên 5: 12,349 ≈ 12,35.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35; quy tắc chung. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 3. `NUM02V1_123` — CT02
 
**Câu hỏi nguyên văn:** Làm tròn 4,265 đến hàng phần trăm.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 4,26
- B (index 1): 4,27
- C (index 2): 4,3
- D (index 3): 4,265

**Đáp án nguồn:** B (index 1). **Giải thích nguồn:** Chữ số hàng phần nghìn là 5 nên tăng hàng phần trăm từ 6 lên 7: 4,265 ≈ 4,27.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35; trường hợp chữ số kế >=5. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 4. `NUM02V1_124` — CT02
 
**Câu hỏi nguyên văn:** Làm tròn 0,996 đến hàng phần trăm.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 0,99
- B (index 1): 1,00
- C (index 2): 0,996
- D (index 3): 1,06

**Đáp án nguồn:** B (index 1). **Giải thích nguồn:** Hàng phần nghìn là 6 nên 0,99 được làm tròn tăng lên thành 1,00.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35; quy tắc làm tròn. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 5. `NUM02V1_125` — CT02
 
**Câu hỏi nguyên văn:** Làm tròn 73,486 đến hàng đơn vị.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 73
- B (index 1): 74
- C (index 2): 73,5
- D (index 3): 74,5

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Chữ số hàng phần mười là 4 < 5 nên giữ nguyên hàng đơn vị: 73,486 ≈ 73.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35; HĐ khối lượng 6,2→6. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 6. `NUM02V1_126` — CT02
 
**Câu hỏi nguyên văn:** Làm tròn 73,586 đến hàng đơn vị.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 73
- B (index 1): 74
- C (index 2): 73,6
- D (index 3): 74,6

**Đáp án nguồn:** B (index 1). **Giải thích nguồn:** Chữ số hàng phần mười là 5 nên tăng hàng đơn vị từ 3 lên 4: 73,586 ≈ 74.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35; HĐ khối lượng 4,8→5. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 7. `NUM02V1_127` — CT02
 
**Câu hỏi nguyên văn:** Một đoạn dây dài 2,746 m. Làm tròn độ dài đến hàng phần trăm mét.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 2,74 m
- B (index 1): 2,75 m
- C (index 2): 2,7 m
- D (index 3): 2,746 m

**Đáp án nguồn:** B (index 1). **Giải thích nguồn:** Chữ số hàng phần nghìn là 6 ≥ 5 nên 2,746 m ≈ 2,75 m.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35–36; quy tắc; Bài 7.14 tr.37 chỉ nguồn so sánh. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 8. `NUM02V1_128` — CT02
 
**Câu hỏi nguyên văn:** Một món hàng có giá 48.650 đồng. Làm tròn giá đến nghìn đồng gần nhất.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 48.000 đồng
- B (index 1): 49.000 đồng
- C (index 2): 48.650 đồng
- D (index 3): 50.000 đồng

**Đáp án nguồn:** B (index 1). **Giải thích nguồn:** Khi làm tròn đến nghìn đồng, nhìn hàng trăm: 6 ≥ 5 nên 48.650 đồng ≈ 49.000 đồng.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.36; Vận dụng 1. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 9. `NUM02V1_129` — CT02
 
**Câu hỏi nguyên văn:** Ước lượng 19,8 + 30,3 bằng cách làm tròn mỗi số đến số nguyên gần nhất.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 40
- B (index 1): 49
- C (index 2): 50
- D (index 3): 51

**Đáp án nguồn:** C (index 2). **Giải thích nguồn:** 19,8 ≈ 20 và 30,3 ≈ 30, nên tổng được ước lượng là 20 + 30 = 50.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.36–37; Mục 2 và Bài 7.13. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 10. `NUM02V1_130` — CT02
 
**Câu hỏi nguyên văn:** Ước lượng 4,98 × 20,1 bằng cách làm tròn mỗi thừa số đến số nguyên gần nhất.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 80
- B (index 1): 90
- C (index 2): 100
- D (index 3): 110

**Đáp án nguồn:** C (index 2). **Giải thích nguồn:** 4,98 ≈ 5 và 20,1 ≈ 20, nên tích được ước lượng là 5 × 20 = 100.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.37; Ví dụ 2 (ước lượng tích). **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 11. `NUM02V1_131` — CT02
 
**Câu hỏi nguyên văn:** Vì sao 6,241 làm tròn đến hàng phần trăm bằng 6,24?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): Vì chữ số hàng phần nghìn là 1 < 5 nên giữ nguyên hàng phần trăm.
- B (index 1): Vì luôn bỏ tất cả chữ số sau hàng phần trăm.
- C (index 2): Vì chữ số hàng phần mười là 2 < 5.
- D (index 3): Vì 6,241 nhỏ hơn 6,25.

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Muốn làm tròn đến hàng phần trăm, phải nhìn chữ số ngay bên phải là hàng phần nghìn. Ở đây chữ số đó là 1 < 5.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35; quy tắc. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 12. `NUM02V1_132` — CT02
 
**Câu hỏi nguyên văn:** Số nào sau đây khi làm tròn đến hàng phần mười thì được 6,4?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 6,34
- B (index 1): 6,36
- C (index 2): 6,45
- D (index 3): 6,52

**Đáp án nguồn:** B (index 1). **Giải thích nguồn:** 6,36 có chữ số hàng phần trăm là 6 nên làm tròn đến hàng phần mười được 6,4. Các lựa chọn còn lại lần lượt cho 6,3; 6,5; 6,5.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 30, tr.35–37; quy tắc (không có tr.38). **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lam-tron-so`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-ROUNDING` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` (historical); current bank blob `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 13. `NUM02V1_133` — CT02
 
**Câu hỏi nguyên văn:** Tính \(-\frac25+\frac3{10}\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(-\frac1{10}\)
- B (index 1): \(\frac1{10}\)
- C (index 2): \(-\frac7{10}\)
- D (index 3): \(\frac7{10}\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Quy đồng: \(-2/5=-4/10\), nên tổng bằng \(-1/10\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 2 tr10–11; Bài 1.7a tr13. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `phep-tinh-so-huu-ti`. **Family ứng viên R38 trong repo:** `NUM-FRACTION-OPS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-RATIONAL-OPS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 14. `NUM02V1_134` — CT02
 
**Câu hỏi nguyên văn:** Tính \(\frac79-\left(-\frac29\right)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(1\)
- B (index 1): \(\frac59\)
- C (index 2): \(-1\)
- D (index 3): \(\frac19\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Trừ số âm là cộng số đối: \(7/9+2/9=1\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 2 tr10–11. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `phep-tinh-so-huu-ti`. **Family ứng viên R38 trong repo:** `NUM-FRACTION-OPS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-RATIONAL-OPS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 15. `NUM02V1_135` — CT02
 
**Câu hỏi nguyên văn:** Tính \((-\frac56)\cdot\frac9{10}\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(-\frac34\)
- B (index 1): \(\frac34\)
- C (index 2): \(-\frac{45}{16}\)
- D (index 3): \(-\frac12\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Rút gọn trước hoặc sau khi nhân: \((-5/6)(9/10)=-45/60=-3/4\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 2 tr12–13. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `phep-tinh-so-huu-ti`. **Family ứng viên R38 trong repo:** `NUM-FRACTION-OPS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-RATIONAL-OPS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 16. `NUM02V1_136` — CT02
 
**Câu hỏi nguyên văn:** Tính \(\frac38:\left(-\frac9{16}\right)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(-\frac23\)
- B (index 1): \(\frac23\)
- C (index 2): \(-\frac{27}{128}\)
- D (index 3): \(-\frac32\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Nhân với nghịch đảo: \((3/8)(-16/9)=-2/3\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 2 tr12–13. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `phep-tinh-so-huu-ti`. **Family ứng viên R38 trong repo:** `NUM-FRACTION-OPS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-RATIONAL-OPS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 17. `NUM02V1_137` — CT02
 
**Câu hỏi nguyên văn:** Tính \(1-\frac23\cdot\left(-\frac34\right)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(\frac32\)
- B (index 1): \(\frac12\)
- C (index 2): \(-\frac32\)
- D (index 3): \(0\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Tích bằng \(-1/2\), nên \(1-(-1/2)=3/2\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 2 tr11–12; Bài 4 tr20. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `phep-tinh-so-huu-ti`. **Family ứng viên R38 trong repo:** `NUM-FRACTION-OPS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-RATIONAL-OPS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 18. `NUM02V1_138` — CT02
 
**Câu hỏi nguyên văn:** Giá trị của \(\left(-\frac12\right)^3\) là:

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(-\frac18\)
- B (index 1): \(\frac18\)
- C (index 2): \(-\frac16\)
- D (index 3): \(\frac16\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Lũy thừa bậc lẻ giữ dấu âm: \((-1/2)^3=-1/8\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 3 tr16–18. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `phep-tinh-so-huu-ti`. **Family ứng viên R38 trong repo:** `NUM-FRACTION-OPS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-RATIONAL-OPS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 19. `NUM02V1_139` — CT02
 
**Câu hỏi nguyên văn:** Số nào là số vô tỉ?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(\sqrt3\)
- B (index 1): \(0,75\)
- C (index 2): \(-2\)
- D (index 3): \(0,(6)\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** \(\sqrt3\) là số vô tỉ; các số còn lại là hữu tỉ.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 6 tr29–30. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `so-vo-ti`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-IRRATIONAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 20. `NUM02V1_140` — CT02
 
**Câu hỏi nguyên văn:** Khẳng định nào đúng?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn.
- B (index 1): Mọi số thập phân vô hạn đều vô tỉ.
- C (index 2): Mọi căn bậc hai đều vô tỉ.
- D (index 3): Số vô tỉ không thuộc tập số thực.

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn và vẫn thuộc tập số thực.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 6 tr29–30; Bài 7 tr33–34. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `so-vo-ti`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-IRRATIONAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 21. `NUM02V1_141` — CT02
 
**Câu hỏi nguyên văn:** Trong các số \(\sqrt2,\sqrt9,\frac53,0,(12)\), có bao nhiêu số vô tỉ?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 1
- B (index 1): 2
- C (index 2): 3
- D (index 3): 4

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Chỉ \(\sqrt2\) là vô tỉ; \(\sqrt9=3\), \(5/3\) và 0,(12) đều hữu tỉ.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 6 tr29–30; Bài 2.13 tr36. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `so-vo-ti`. **Family ứng viên R38 trong repo:** `NUM-SETS` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `NUM-IRRATIONAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 22. `NUM02V1_142` — CT02
 
**Câu hỏi nguyên văn:** Tính \(\sqrt{121}\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 11
- B (index 1): -11
- C (index 2): ±11
- D (index 3): 121

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Vì \(11^2=121\) và căn bậc hai số học không âm nên kết quả là 11.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 6 tr30; Bài 2.7d tr32. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `can-bac-hai-so-hoc`. **Family ứng viên R38 trong repo:** **chưa xác định** (`NO_ASSESSED_FAMILY_HOLD`).

**Ý kiến NotebookLM vòng trước:** `NUM-SQUARE-ROOT-INTRO` — `ASSESSED_SKILL` — `REVISE`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 23. `NUM02V1_143` — CT02
 
**Câu hỏi nguyên văn:** Tính \(\sqrt{\frac{25}{49}}\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(\frac57\)
- B (index 1): \(-\frac57\)
- C (index 2): \(\frac{25}{7}\)
- D (index 3): \(\frac5{49}\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** \((5/7)^2=25/49\), nên căn bậc hai số học bằng 5/7.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 6 tr30. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `can-bac-hai-so-hoc`. **Family ứng viên R38 trong repo:** **chưa xác định** (`NO_ASSESSED_FAMILY_HOLD`).

**Ý kiến NotebookLM vòng trước:** `NUM-SQUARE-ROOT-INTRO` — `ASSESSED_SKILL` — `REVISE`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 24. `NUM02V1_144` — CT02
 
**Câu hỏi nguyên văn:** Số nào thỏa \(x=\sqrt{16}\)?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 4
- B (index 1): -4
- C (index 2): ±4
- D (index 3): 8

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Kí hiệu \(\sqrt{16}\) chỉ căn bậc hai số học, nên bằng 4.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T1 Bài 6 tr30; Luyện tập 1a. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `can-bac-hai-so-hoc`. **Family ứng viên R38 trong repo:** **chưa xác định** (`NO_ASSESSED_FAMILY_HOLD`).

**Ý kiến NotebookLM vòng trước:** `NUM-SQUARE-ROOT-INTRO` — `ASSESSED_SKILL` — `REVISE`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `c39c177609cd5440de98b81461896c80f7166121` (historical); current bank blob `c39c177609cd5440de98b81461896c80f7166121`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 25. `NUM02V1_145` — CT02
 
**Câu hỏi nguyên văn:** Tính |−12|.

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 12
- B (index 1): −12
- C (index 2): 0
- D (index 3): 24

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Giá trị tuyệt đối là khoảng cách tới 0 nên |−12|=12.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 7, tr.36; Luyện tập 4. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `gia-tri-tuyet-doi`. **Family ứng viên R38 trong repo:** `NUM-ABS` (`EXACT_LEGACY_CANDIDATE_ONLY`).

**Ý kiến NotebookLM vòng trước:** `NUM-ABS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e` (historical); current bank blob `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 26. `NUM02V1_146` — CT02
 
**Câu hỏi nguyên văn:** Số nào có giá trị tuyệt đối bằng 7?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): −7
- B (index 1): 8
- C (index 2): 0
- D (index 3): 14

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** |−7|=7. Các số 8, 0 và 14 có giá trị tuyệt đối lần lượt là 8, 0 và 14.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 7, tr.35–36; quy tắc và Bài 2.18 tr.36. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `gia-tri-tuyet-doi`. **Family ứng viên R38 trong repo:** `NUM-ABS` (`EXACT_LEGACY_CANDIDATE_ONLY`).

**Ý kiến NotebookLM vòng trước:** `NUM-ABS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e` (historical); current bank blob `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 27. `NUM02V1_147` — CT02
 
**Câu hỏi nguyên văn:** Khẳng định nào đúng về phương trình |x|=4?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): x=4 hoặc x=−4
- B (index 1): Chỉ x=4
- C (index 2): Chỉ x=−4
- D (index 3): Không có nghiệm

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Hai số 4 và −4 đều cách 0 một khoảng 4, nên |x|=4 có hai nghiệm x=4 và x=−4.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 7, tr.36; Bài 2.18. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `gia-tri-tuyet-doi`. **Family ứng viên R38 trong repo:** `NUM-ABS` (`EXACT_LEGACY_CANDIDATE_ONLY`).

**Ý kiến NotebookLM vòng trước:** `NUM-ABS` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e` (historical); current bank blob `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 28. `RAT03V1_121` — CT03
 
**Câu hỏi nguyên văn:** Một công thức cho 4 người cần 300 g bột. Giữ nguyên tỉ lệ, để làm cho 10 người cần bao nhiêu gam bột?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 750 g
- B (index 1): 600 g
- C (index 2): 900 g
- D (index 3): 1200 g

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Lượng bột tỉ lệ thuận với số người: 300×10/4=750 g.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T2 Bài 22 tr11–13. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `mo-hinh-ti-le`. **Family ứng viên R38 trong repo:** `RATIO-DIRECT` (`LAYER_CONFLICT_ITEM_SPLIT_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `RATIO-DIRECT` — `ASSESSED_SKILL` — `REVISE`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `759fd83900fa5b64d5db7f6deb2197c343c46732` (historical); current bank blob `759fd83900fa5b64d5db7f6deb2197c343c46732`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 29. `RAT03V1_122` — CT03
 
**Câu hỏi nguyên văn:** Trên bản đồ tỉ lệ 1:50 000, đoạn đường AB dài 3 cm. Độ dài thực tế của AB là:

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 1,5 km
- B (index 1): 150 km
- C (index 2): 15 km
- D (index 3): 0,15 km

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** 3 cm trên bản đồ ứng với 3×50 000=150 000 cm=1,5 km.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T2 Bài 20 tr4; Bài 22 tr11–13. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `mo-hinh-ti-le`. **Family ứng viên R38 trong repo:** `RATIO-BASIC` (`LAYER_CONFLICT_ITEM_SPLIT_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `RATIO-SCALE` — `ASSESSED_SKILL` — `REVISE`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `759fd83900fa5b64d5db7f6deb2197c343c46732` (historical); current bank blob `759fd83900fa5b64d5db7f6deb2197c343c46732`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 30. `RAT03V1_123` — CT03
 
**Câu hỏi nguyên văn:** 5 quyển vở cùng loại có giá 60 nghìn đồng. Nếu đơn giá không đổi, 8 quyển vở có giá:

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 96 nghìn đồng
- B (index 1): 72 nghìn đồng
- C (index 2): 100 nghìn đồng
- D (index 3): 120 nghìn đồng

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Một quyển giá 60:5=12 nghìn đồng; 8 quyển giá 8×12=96 nghìn đồng.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T2 Bài 22 tr11–13. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `mo-hinh-ti-le`. **Family ứng viên R38 trong repo:** `RATIO-DIRECT` (`LAYER_CONFLICT_ITEM_SPLIT_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `RATIO-DIRECT` — `ASSESSED_SKILL` — `REVISE`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `759fd83900fa5b64d5db7f6deb2197c343c46732` (historical); current bank blob `759fd83900fa5b64d5db7f6deb2197c343c46732`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 31. `RAT03V1_124` — CT03
 
**Câu hỏi nguyên văn:** Một mô hình dài 12 cm biểu diễn vật thật dài 3 m. Tỉ lệ mô hình:vật thật là:

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): 1:25
- B (index 1): 1:4
- C (index 2): 4:1
- D (index 3): 1:250

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Đổi 3 m=300 cm. Tỉ lệ là 12:300=1:25.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** T2 Bài 20 tr4–5. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `mo-hinh-ti-le`. **Family ứng viên R38 trong repo:** `RATIO-BASIC` (`LAYER_CONFLICT_ITEM_SPLIT_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `RATIO-SCALE` — `ASSESSED_SKILL` — `REVISE`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `759fd83900fa5b64d5db7f6deb2197c343c46732` (historical); current bank blob `759fd83900fa5b64d5db7f6deb2197c343c46732`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 32. `ALG04V2_133` — CT04
 
**Câu hỏi nguyên văn:** Tính \((x^2+3x+2):(x+1)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(x+2\)
- B (index 1): \(x+1\)
- C (index 2): \(x-2\)
- D (index 3): \(x^2+2\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** \((x+1)(x+2)=x^2+3x+2\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 28, tr.40–42 phương pháp; Bài 7.32 tr.43. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `chia-da-thuc-mot-bien`. **Family ứng viên R38 trong repo:** `ALG-DIV-MONOMIAL` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `ALG-DIV-POLYNOMIAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `34e52b7900f77815e0bff79ba82fdb491d6794b3` (historical); current bank blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 33. `ALG04V2_134` — CT04
 
**Câu hỏi nguyên văn:** Tính \((x^2-4):(x-2)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(x+2\)
- B (index 1): \(x-2\)
- C (index 2): \(x^2+2\)
- D (index 3): \(1\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Hiệu hai bình phương: \(x^2-4=(x-2)(x+2)\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 28, tr.41; Luyện tập 2b; không dẫn Bài 7.39 ở tr.43. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `chia-da-thuc-mot-bien`. **Family ứng viên R38 trong repo:** `ALG-DIV-MONOMIAL` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `ALG-DIV-POLYNOMIAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `34e52b7900f77815e0bff79ba82fdb491d6794b3` (historical); current bank blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 34. `ALG04V2_135` — CT04
 
**Câu hỏi nguyên văn:** Tính \((2x^2+5x+2):(2x+1)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(x+2\)
- B (index 1): \(2x+2\)
- C (index 2): \(x+1\)
- D (index 3): \(x-2\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** \((2x+1)(x+2)=2x^2+5x+2\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 28, tr.40–42; Bài 7.32 tr.43. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `chia-da-thuc-mot-bien`. **Family ứng viên R38 trong repo:** `ALG-DIV-MONOMIAL` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `ALG-DIV-POLYNOMIAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `34e52b7900f77815e0bff79ba82fdb491d6794b3` (historical); current bank blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 35. `ALG04V2_136` — CT04
 
**Câu hỏi nguyên văn:** Tính \((x^3-8):(x-2)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(x^2+2x+4\)
- B (index 1): \(x^2-2x+4\)
- C (index 2): \(x^2+4\)
- D (index 3): \(x^2+2\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** \(x^3-8=(x-2)(x^2+2x+4)\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Luyện tập chung, tr.45; Bài 7.39a. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `STRUCTURAL_CLONE`.

**Nhãn cũ:** `chia-da-thuc-mot-bien`. **Family ứng viên R38 trong repo:** `ALG-DIV-MONOMIAL` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `ALG-DIV-POLYNOMIAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `34e52b7900f77815e0bff79ba82fdb491d6794b3` (historical); current bank blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 36. `ALG04V2_137` — CT04
 
**Câu hỏi nguyên văn:** Tính \((x^3+x^2-x-1):(x+1)\).

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(x^2-1\)
- B (index 1): \(x^2+1\)
- C (index 2): \(x^2-x-1\)
- D (index 3): \(x^2+x-1\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Nhóm hạng tử: \(x^2(x+1)-1(x+1)=(x+1)(x^2-1)\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 28, tr.40–42; Bài 7.32b tr.43. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `chia-da-thuc-mot-bien`. **Family ứng viên R38 trong repo:** `ALG-DIV-MONOMIAL` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `ALG-DIV-POLYNOMIAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `34e52b7900f77815e0bff79ba82fdb491d6794b3` (historical); current bank blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 37. `ALG04V2_138` — CT04
 
**Câu hỏi nguyên văn:** Nếu \(P(x)=(x-3)(x^2+2x+1)\), thì \(P(x):(x-3)\) bằng:

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): \(x^2+2x+1\)
- B (index 1): \(x^2-2x+1\)
- C (index 2): \(x-3\)
- D (index 3): \(x^3-x^2-5x-3\)

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Vì \(P(x)\) đã được viết dưới dạng tích của đa thức chia và thương, nên thương là \(x^2+2x+1\).

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Bài 28, tr.39–42; định nghĩa A=B×Q và A=B×Q+R. **Tầng nội dung đã duyệt:** `KNTT-Core`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `chia-da-thuc-mot-bien`. **Family ứng viên R38 trong repo:** `ALG-DIV-MONOMIAL` (`SUBSKILL_ONLY_REVIEW`).

**Ý kiến NotebookLM vòng trước:** `ALG-DIV-POLYNOMIAL` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** **KHÔNG TỒN TẠI**.

**Truy nguyên câu hỏi:** bank `34e52b7900f77815e0bff79ba82fdb491d6794b3` (historical); current bank blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 38. `QUA12V1_121` — CT12
 
**Câu hỏi nguyên văn:** Phương trình hoành độ giao điểm của parabol y=x² và đường thẳng y=3x+4 là phương trình nào?

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): x²−3x−4=0
- B (index 1): x²+3x+4=0
- C (index 2): x²−3x+4=0
- D (index 3): x²+3x−4=0

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Tại giao điểm ta có x²=3x+4, tương đương x²−3x−4=0.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Toán 9 KNTT tập 2, Bài 18 tr.4–9; Bài 19 tr.10–17; Thực hành GeoGebra tr.113–114. **Tầng nội dung đã duyệt:** `Entrance10`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lien-he-do-thi`. **Family ứng viên R38 trong repo:** `QUAD-GRAPH` (`EXACT_LEGACY_CANDIDATE_ONLY`).

**Ý kiến NotebookLM vòng trước:** `QUAD-GRAPH` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `22c73f3d24020a7db1ead9b8b90c6488c8379ce0` (historical); current bank blob `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 39. `QUA12V1_122` — CT12
 
**Câu hỏi nguyên văn:** Parabol y=x² và đường thẳng y=x+2 cắt nhau tại hai điểm. Hoành độ hai giao điểm là:

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): −1 và 2
- B (index 1): 1 và 2
- C (index 2): −2 và 1
- D (index 3): −1 và −2

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Giải x²=x+2 được x²−x−2=0=(x−2)(x+1), nên x=2 hoặc x=−1.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Toán 9 KNTT tập 2, Bài 18 tr.4–9; Bài 19 tr.10–17; Thực hành GeoGebra tr.113–114. **Tầng nội dung đã duyệt:** `Entrance10`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lien-he-do-thi`. **Family ứng viên R38 trong repo:** `QUAD-GRAPH` (`EXACT_LEGACY_CANDIDATE_ONLY`).

**Ý kiến NotebookLM vòng trước:** `QUAD-GRAPH` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `22c73f3d24020a7db1ead9b8b90c6488c8379ce0` (historical); current bank blob `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

### 40. `QUA12V1_123` — CT12
 
**Câu hỏi nguyên văn:** Đường thẳng y=2x−1 tiếp xúc với parabol y=x² vì phương trình hoành độ giao điểm:

**Các phương án (thứ tự tác giả, KHÔNG phải thứ tự đảo ngẫu nhiên):**

- A (index 0): (x−1)²=0 có nghiệm kép
- B (index 1): x²+2x−1=0 có hai nghiệm
- C (index 2): x²−2x−1=0 vô nghiệm
- D (index 3): x²−1=0 có hai nghiệm

**Đáp án nguồn:** A (index 0). **Giải thích nguồn:** Từ x²=2x−1 suy ra x²−2x+1=(x−1)²=0. Phương trình có nghiệm kép nên đường thẳng tiếp xúc parabol.

**Vị trí SGK đã được phê duyệt ở vòng học thuật:** Toán 9 KNTT tập 2, Bài 19 tr.13–14 (nghiệm kép); Hoạt động GeoGebra tr.113–114. **Tầng nội dung đã duyệt:** `Entrance10`. **Loại dẫn chứng học thuật:** `CONCEPT_BASE`.

**Nhãn cũ:** `lien-he-do-thi`. **Family ứng viên R38 trong repo:** `QUAD-GRAPH` (`EXACT_LEGACY_CANDIDATE_ONLY`).

**Ý kiến NotebookLM vòng trước:** `QUAD-GRAPH` — `ASSESSED_SKILL` — `PASS`. **Kiểm tra tồn tại Registry:** có.

**Truy nguyên câu hỏi:** bank `22c73f3d24020a7db1ead9b8b90c6488c8379ce0` (historical); current bank blob `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08`.

**Cần NotebookLM kết luận:** Family nào hợp lệ và phù hợp về ngữ nghĩa? Vai trò `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`? `PASS / REVISE / INSUFFICIENT_EVIDENCE`? Nêu lý do cụ thể cho riêng ID này.

## IV. Mẫu kết luận cần trả (40 ID, không thiếu/trùng)

| ID | Family ID **tồn tại trong Registry** hoặc `NEW_FAMILY_PROPOSAL` / `HOLD` | Vai trò đề xuất | PASS / REVISE / INSUFFICIENT_EVIDENCE | Giải thích học thuật ngắn |
|---|---|---|---|---|

Đối với bảy câu quan trọng (ba câu căn bậc hai, bốn CT03), phải giải thích tại sao Family phù hợp về kỹ năng và tầng nội dung. Đối với ID có Family tồn tại, kiểm tra cả vai trò trước khi PASS.

**Không được** đánh đồng `tags.skill` cũ với Family học thuật; **không được** tự thêm Family vào Registry, ghi điểm Skill hay phát hành. Tài liệu này và *Nguồn 1 — Registry 131 Family* là hai nguồn batch Markdown mới; giữ Master Plan v1.2.1 và NotebookLM Rules v1.2 ở nhóm nguồn cố định.
