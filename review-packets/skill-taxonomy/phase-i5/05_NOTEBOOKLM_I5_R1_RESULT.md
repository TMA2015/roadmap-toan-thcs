### BÁO CÁO PHẢN BIỆN HỌC THUẬT ĐỘC LẬP
**Gói kiểm định:** `MATH-SKILL-TAXONOMY-V2-I5-EVIDENCE-POLICY-R1-20261003`  
**Ngày thực hiện:** 03/10/2026  
**Trạng thái hệ thống:** REVIEW ONLY / NO MASTERY OR READINESS RUNTIME ACTIVATION  
**Căn cứ pháp lý & Quy tắc nguồn:** `00_NOTEBOOKLM_I5_EVIDENCE_POLICY_R1.md`, `01_TOAN_THCS_MASTER_PLAN_v1.1.md`, `00_NOTEBOOK_MATH_PERMANENT_v1.1.md`.

---

### 1. PACKET_ID
`MATH-SKILL-TAXONOMY-V2-I5-EVIDENCE-POLICY-R1-20261003`

---

### 2. OVERALL_VERDICT
**`PASS`** *(Đạt chuẩn kiến trúc chính sách bằng chứng R1 — Khóa tuyệt đối runtime activation, backfill lịch sử và regrade)*.

---

### 3. DECISION_MATRIX (D1–D12)

| ID | Quyết định | Trạng thái | Tóm tắt căn cứ học thuật & chính sách |
| :--- | :--- | :--- | :--- |
| **D1** | Mô hình độ đủ bằng chứng | `APPROVE_WITH_CHANGES` | Áp dụng mô hình **Hybrid (Dung lượng ngân hàng + Loại bằng chứng)**. Không áp dụng mốc cố định (vd: tối thiểu 3 bài) vì 63/131 family có capacity \\(\le 3\\). |
| **D2** | Xử lý family dung lượng thấp (0, 1, 2) | `APPROVE` | Family capacity = 0: `NO_DIRECT_EVIDENCE`. Family capacity 1–2: Không thể đạt trạng thái "Mastery Eligible" nếu chỉ dựa vào MCQ; chỉ ghi nhận "Bằng chứng ban đầu" hoặc "Đạt ngưỡng ngân hàng giới hạn". |
| **D3** | Phân loại độ mạnh bằng chứng | `APPROVE` | Phân 19 lớp bằng chứng runtime vào 4 nhóm chức năng: *Formative/Descriptive*, *Procedural Primary*, *Partial Proof/Modeling*, và *Non-Eligible*. |
| **D4** | Ranh giới bài tự luận (Written Evidence) | `APPROVE` | Bắt buộc phải có bài tự luận/rubric đối chiếu trước khi công nhận Mastery đối với các kỹ năng Chứng minh Hình học, Mô hình hóa và Biến đổi nâng cao. |
| **D5** | Mẫu hình độ đúng (Correctness Pattern) | `APPROVE` | Kết hợp số bài đúng tối thiểu + độ đúng lượt làm độc lập gần nhất + không còn lỗi tồn đọng. Nghiêm cấm dùng % thô trên \\(N \le 2\\) để kết luận năng lực. |
| **D6** | Độ tươi dữ liệu (Recency) | `APPROVE` | Xét trên cửa sổ 3–5 lượt làm độc lập gần nhất; ghi nhận "Phục hồi độc lập" (Unassisted Recovery). Không tự động giảm điểm theo thời gian nếu học sinh không làm bài mới. |
| **D7** | Dùng lại kỹ năng liên chuyên đề | `APPROVE` | Giữ nguyên **1 căn cước Family duy nhất** trên toàn hệ thống; lưu vết nguồn gốc Topic (`topic_id`) để phục vụ Readiness theo từng chuyên đề. |
| **D8** | Bằng chứng có gợi ý / phục hồi | `APPROVE` | Làm đúng có gợi ý = Formative (không tính đơn vị độc lập). Làm đúng ngay sau khi xem lời giải = 0 điểm độc lập. Đúng ở lượt làm độc lập sau = Đơn vị độc lập mới. |
| **D9** | Đóng góp vào KNTT Core Readiness | `APPROVE` | `KNTT-Core` là tập duy nhất tính Core Readiness. Các tầng `Core-Support`, `Entrance10`, `THPT-Bridge`, `Specialized-Challenge` không được làm giảm điểm Core. |
| **D10** | Biểu diễn Family chưa làm | `APPROVE` | Hiển thị "Chưa có bằng chứng" (Unknown / No Evidence). Loại khỏi mẫu số tính tỷ lệ thành thạo; không dán nhãn "Yếu" hay "Chưa đạt". |
| **D11** | Thuật ngữ hiển thị học sinh | `APPROVE` | Chuẩn hóa thuật ngữ thân thiện, không dán nhãn tiêu cực hay khẳng định tuyệt đối 100%. |
| **D12** | Giao diện phần trăm mẫu số nhỏ (1–2) | `APPROVE` | Ẩn biểu đồ phần trăm hoặc hiển thị kèm cảnh báo "Dữ liệu ít / Bằng chứng ban đầu" khi số đơn vị độc lập \\(N \le 2\\). |

---

### 4. ARCHITECTURE_CHECKS (ARCH_1–ARCH_12)

1. **ARCH_1 — Tách biệt kho dữ liệu cũ và Taxonomy v2:** `PASS`. `toan-thcs-practice-v1` và `toan-thcs-taxonomy-v2-evidence-v1` lưu trữ hoàn toàn độc lập.
2. **ARCH_2 — Phân biệt Mastery và Evidence Sufficiency:** `PASS`. Đủ bằng chứng (Sufficiency) là điều kiện cần nhưng không đồng nhất với Thành thạo (Mastery).
3. **ARCH_3 — Bảo vệ ranh giới NO_FAMILY:** `PASS`. 214 dòng `NO_FAMILY` / formative guard không bao giờ tích lũy vào bằng chứng Family.
4. **ARCH_4 — Chống lạm phát đơn vị độc lập:** `PASS`. Làm lại câu cũ, làm câu cùng clone-family, hoặc làm có gợi ý không tạo ra đơn vị độc lập mới.
5. **ARCH_5 — Bảo vệ KNTT Core Readiness:** `PASS`. Điểm ở các tầng mở rộng (`Entrance10`, `THPT-Bridge`, `Specialized-Challenge`) tuyệt đối không hạ thấp điểm Core Readiness.
6. **ARCH_6 — Nguyên tắc không chẩn đoán quá khả năng dữ liệu:** `PASS`. Khi dữ liệu ít, hệ thống hiển thị "Chưa đủ bằng chứng" thay vì đưa ra nhận định chắc chắn.
7. **ARCH_7 — Thống nhất căn cước Family liên chuyên đề:** `PASS`. Kỹ năng dùng lại (ví dụ `NUM-PERCENT`, `RIGHT-PYTHAGORE`) giữ 1 ID duy nhất.
8. **ARCH_8 — Giới hạn của trắc nghiệm MCQ đối với Tự luận/Mô hình hóa:** `PASS`. Câu trắc nghiệm đúng chỉ là bằng chứng một phần (`PARTIAL_EVIDENCE`), không thay thế bài viết tự luận.
9. **ARCH_9 — Tự chấm trên giấy không là chứng nhận hệ thống:** `PASS`. Học sinh tự đối chiếu rubric trên giấy là hoạt động cá nhân, không tự động cộng điểm Mastery hệ thống.
10. **ARCH_10 — Không backfill lịch sử / regrade:** `PASS`. Chính sách chỉ áp dụng cho sự kiện mới, không tính lại dữ liệu lịch sử.
11. **ARCH_11 — Bảo tồn quyền tự chủ học sinh (Learner Agency):** `PASS`. Đề xuất ôn bù mang tính gợi ý, không đặt cổng khóa cứng 100% quyền học tiếp.
12. **ARCH_12 — Tính khả thi về dữ liệu & Metadata:** `PASS`. Chính sách vận hành được trên các trường dữ liệu runtime hiện có (`family_id`, `topic_id`, `clone_unit_id`, `is_assisted`, `evidence_class`).

---

### 5. RECOMMENDED_POLICY_R1 (QUY TẮC CHÍNH SÁCH CỤ THỂ)

1. **Định danh Đơn vị Bằng chứng Độc lập (Independent Evidence Unit):**
   \\[\text{Unit ID} = \text{family\_id} + \text{topic\_id} + \text{reviewed\_clone\_or\_question\_unit}\\]
   - Một lượt làm bài chỉ tạo ra **01 đơn vị độc lập** nếu: Học sinh trả lời đúng ngay lần đầu, KHÔNG dùng gợi ý (`is_assisted = false`), và Đơn vị này chưa từng được ghi nhận thành công trước đó.
2. **Quy tắc Tính Tỷ lệ Bằng chứng (Evidence Accuracy):**
   \\[\text{Evidence Accuracy} = \frac{\text{Số đơn vị độc lập đúng}}{\text{Tổng số đơn vị độc lập đã thử}}\\]
   - Tỷ lệ này là thông tin **mô tả tích lũy**, không tự động coi là chỉ số Mastery.
3. **Quy tắc Phục hồi Độc lập (Unassisted Recovery):**
   - Học sinh mắc lỗi ở đơn vị \\(A\\), sau đó làm đúng một đơn vị độc lập \\(B\\) (khác câu, khác clone) thuộc cùng Family ở buổi học sau mà không cần trợ giúp \\(\rightarrow\\) Trạng thái lỗi của \\(A\\) được chuyển thành "Đã phục hồi độc lập".

---

### 6. FAMILY_CAPACITY_POLICY (CHÍNH SÁCH THEO DUNG LƯỢNG BANK)

- **Max Capacity = 0 (4 families: `RATIO-MODEL`, `ID-APPLY`, `ID-PROOF`, `RATEX-INTEGER`):**
  - Trạng thái: `NO_DIRECT_EVIDENCE`. Không thể đánh giá Sufficiency hay Mastery. Bắt buộc giữ trạng thái "Chưa có bằng chứng" cho đến khi bổ sung câu hỏi.
- **Max Capacity = 1 (12 families):**
  - Trạng thái tối đa: `EARLY_EVIDENCE` (Bằng chứng ban đầu) nếu đúng 1/1. KHÔNG BAO GIỜ đạt `MASTERY_ELIGIBLE` chỉ bằng trắc nghiệm.
- **Max Capacity = 2 (29 families):**
  - Trạng thái: Đúng 2/2 độc lập = `LIMITED_BANK_SUFFICIENT` (Đạt ngưỡng ngân hàng giới hạn).
- **Max Capacity \\(\ge 3\\) (86 families):**
  - Trạng thái: Yêu cầu tối thiểu **3 đơn vị độc lập đúng** và đạt độ đúng \\(\ge 80\%\\) trên cửa sổ gần nhất mới đạt `MASTERY_ELIGIBLE` cho kỹ năng tính toán/quy trình.

---

### 7. EVIDENCE_CLASS_POLICY (PHÂN LOẠI 19 LỚP BẰNG CHỨNG)

1. **Nhóm Formative / Môt tả (Descriptive / Non-Mastery):**
   - `MCQ_RECOGNITION_ONLY`, `MCQ_SUPPORTING_EVIDENCE_ONLY`, `MCQ_CONTEXT_PARTIAL_EVIDENCE`, `MCQ_EXAM_SKILL_PARTIAL_EVIDENCE`.
   - *Quy tắc:* Không dùng làm bằng chứng chính cho Mastery của Family.
2. **Nhóm Kỹ năng Quy trình / Tính toán (Procedural Primary Evidence):**
   - `MCQ_FINAL_ANSWER_ONLY`, `MCQ_FINAL_OUTPUT_ONLY`, `MCQ_APPLICATION_FINAL_ANSWER_ONLY`, `MCQ_MEASUREMENT_FINAL_ANSWER_ONLY`, `MCQ_DIRECT_PARTIAL_EVIDENCE`.
   - *Quy tắc:* Được tính là bằng chứng trực tiếp cho Sufficiency và Mastery của các bài toán tính toán routine.
3. **Nhóm Chứng minh / Mô hình hóa (Partial Proof & Modeling Evidence):**
   - `MCQ_METHOD_SELECTION_ONLY`, `MCQ_MODELING_PARTIAL_FINAL_ANSWER`, `MCQ_MODELING_PARTIAL_SYSTEM_SELECTION`, `MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION`, `MCQ_MULTISTEP_PARTIAL_FINAL_ANSWER`, `MCQ_CONSTRUCTION_PARTIAL_FINAL_ANSWER`, `MCQ_PROOF_PARTIAL_FINAL_ANSWER`, `MCQ_PROOF_OR_SYNTHESIS_PARTIAL_FINAL_ANSWER`, `MCQ_CROSS_TOPIC_PARTIAL_EVIDENCE`, `MCQ_METHOD_PARTIAL_EVIDENCE`.
   - *Quy tắc:* Chỉ cung cấp bằng chứng một phần (`PARTIAL_EVIDENCE`). Không đủ để cấp chứng nhận Mastery hoàn chỉnh nếu thiếu bài viết tự luận.

---

### 8. WRITTEN_EVIDENCE_POLICY (RANH GIỚI BÀI TỰ LUẬN)

- **Các nhóm Family bắt buộc có bằng chứng tự luận (Written/Constructed Response):**
  1. *Chứng minh Hình học:* `GEO-PROOF-BASIC`, `QUAD-PARALLELOGRAM`, `QUAD-RECTANGLE`, `QUAD-RHOMBUS`, `CIRCLE-TANGENT`, `SIM-CHAIN`, `GEO-SYNTHESIS`, `ID-PROOF`.
  2. *Lập bài toán / Mô hình hóa:* `EQ-MODEL`, `INEQ-MODEL`, `SYS-MODEL`, `ALG-MODEL-EXPR`, `RATIO-MODEL`, `MODEL-SETUP`, `MODEL-VALIDATE`.
- **Nguồn bằng chứng tự luận:** Học sinh làm bài trên giấy, tự đối chiếu Rubric phân rã theo bước. Bằng chứng này được lưu vết dưới dạng `PAPER_SELF_CHECK_COMPLETED`, hỗ trợ học sinh tự đánh giá nhưng **không được coi là chứng nhận tự động của hệ thống** đối với Core Readiness.

---

### 9. READINESS_LAYER_POLICY (CHÍNH SÁCH TẦNG CHƯƠNG TRÌNH)

- **`KNTT-Core` (98 families):** Là tập hợp DUY NHẤT cấu thành điểm **Core Readiness**.
- **`Core-Support` (6 families):** Cung cấp thông tin chẩn đoán lỗi nền tảng, không tính vào mẫu số Core Readiness.
- **`Entrance10` (20 families), `THPT-Bridge` (3 families), `Specialized-Challenge` (4 families):** Là các tầng mở rộng/tự chọn. Kết quả học tập ở các tầng này được ghi nhận riêng biệt trên Skill Map (thẻ "Mở rộng" / "Thi vào 10"), **tuyệt đối không làm giảm chỉ số Core Readiness**.

---

### 10. LEARNER_FACING_WORDING (CHUẨN HÓA THUẬT NGỮ HỌC SINH)

| Trạng thái kỹ thuật | Thuật ngữ hiển thị học sinh (Tiếng Việt) |
| :--- | :--- |
| `NO_EVIDENCE` | **Chưa có dữ liệu** |
| `EARLY_EVIDENCE` | **Bằng chứng ban đầu** *(Đã làm 1–2 bài)* |
| `SPARSE_DATA_CAUTION` | **Dữ liệu ít** *(Cần làm thêm để đánh giá)* |
| `REVIEW_RECOMMENDED` | **Cần củng cố** *(Có bài chưa đúng)* |
| `PRACTICE_SUFFICIENT` | **Đạt ngưỡng luyện tập** *(Dành cho bài tính toán)* |
| `WRITTEN_CORROBORATION_NEEDED` | **Cần luyện tự luận** *(Dành cho bài chứng minh/lập hệ)* |
| `CORE_READINESS_READY` | **Sẵn sàng tự kiểm tra** |

---

### 11. METADATA_GAPS (CÁC TRƯỜNG METADATA CẦN BỔ SUNG TRONG TƯƠNG LAI)

Để chuẩn bị cho giai đoạn triển khai sau I5, hệ thống cần bổ sung các trường sau vào Schema lưu trữ sự kiện:
1. `unassisted_recovery_flag` (boolean): Đánh giá lượt làm đúng có phải là sự phục hồi sau một chuỗi lỗi trước đó.
2. `written_rubric_check_status` (enum: `NONE`, `SELF_CHECKED`, `TEACHER_VERIFIED`): Đánh dấu mức độ xác minh của bài tự luận.
3. `attempt_context_type` (enum: `LEARNING_WORKSPACE`, `PRACTICE_ROOM`, `CORE_READINESS`): Phân định rõ bối cảnh phát sinh sự kiện làm bài.

---

### 12. IMPLEMENTATION_RISKS (RỦI RO TRIỂN KHAI)

1. **Rủi ro hiểu nhầm % trên dung lượng nhỏ:** Hiển thị 100% cho family có capacity = 1 (1/1 câu) khiến học sinh chủ quan tưởng đã thành thạo tuyệt đối.
2. **Rủi ro đánh giá sai bài chứng minh:** Luyện nhiều câu MCQ trắc nghiệm hình học đạt 100% nhưng học sinh không thể tự trình bày một bài chứng minh tự luận logic trên giấy.
3. **Rủi ro lạm phát điểm do làm lại:** Học sinh làm lại cùng một câu hỏi nhiều lần để tăng % đúng nếu hệ thống không chặn trùng lặp đơn vị độc lập một cách triệt để.

---

### 13. REQUIRED_CHANGES_BEFORE_I5_CLOSE (YÊU CẦU TRƯỚC KHÍ KHÓA I5)

1. **Giao diện UI/UX:** Cài đặt bộ lọc ẩn % thô và hiển thị badge **"Dữ liệu ít"** cho toàn bộ các Family có tổng số đơn vị độc lập \\(N \le 2\\).
2. **Logic Cập nhật Trạng thái:** Giới hạn trạng thái tối đa của câu hỏi trắc nghiệm MCQ thuộc các nhóm Chứng minh/Mô hình hóa ở mức **"Bằng chứng ban đầu / Cần luyện tự luận"**.
3. **Cam kết Kỹ thuật:** Khóa cứng toàn bộ các đường dẫn kích hoạt Runtime Activation, Backfill dữ liệu cũ hoặc Tự động chấm điểm Readiness cho đến khi hoàn thành QA kỹ thuật độc lập ở giai đoạn kế tiếp.

---

💡 **Nudge gợi ý bước tiếp theo:**  
*Báo cáo kiểm định I5 Evidence Policy đã hoàn tất và đạt chuẩn PASS chính sách kiến trúc. Bạn có muốn khởi tạo một bản tổng hợp kết quả dưới dạng file báo cáo chi tiết Markdown/JSON để lưu trữ vào repository project không?*