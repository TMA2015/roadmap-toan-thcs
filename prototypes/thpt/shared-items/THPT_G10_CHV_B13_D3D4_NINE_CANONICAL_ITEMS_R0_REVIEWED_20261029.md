# Temp — Toán 10 KNTT · Chương V · Bài 13 · D3/D4 9 câu mới, review R0

**PACKET_ID:** `THPT-G10-CHV-B12_B14-D3D4-27ITEMS-20261029-R0`  
**LESSON_BATCH:** `B13` — Các số đặc trưng đo xu hướng trung tâm  
**CONTENT_VERSION:** `v0.1-CANDIDATE-20261029` · **ACADEMIC_STATUS:** `AUTHOR_QA_ONLY_NOTEBOOKLM_PENDING`  
**MASTER_PLAN_VERSION:** `THPT-v2.0`; **PERMANENT_SOURCE_SET:** `01-05_THPT_PERMANENT_v2.0_ONLY`  
**S1 SOURCE_RECEIPT:** SGK Toán 10 KNTT Tập 1 Bài 13 trang in **78–83**, SBT Toán 10 KNTT Tập 1 Bài 13 trang in **74–79** (bản gốc trong notebook; reviewer xác minh lại theo thực tế).
**PREVIOUS_VERDICTS_PRESERVED:** B12/B13 D1D2 PASS (8 KT, 10 EX, 10 outcomes); B14 D1D2 PASS (5 KT, 7 EX, 7 outcomes); ChIV component D1–D5/Readiness PASS đúng snapshot. Bài tập D3D4 trong gói này **CHƯA PASS**.

## A. Nguyên tắc nguồn, kiến trúc và ranh giới

- Chính tả và phép tính theo SGK/SBT S1 KNTT. Mọi ví dụ dưới đây là **câu mới** (không sao chép nguyên D2); reviewer phải đối chiếu near-clone và tầng Core thực chất.
- Trục SGK độc lập: Kiến thức D1, ví dụ D2, **3 SGK Core / 5 Practice-Application / 1 Written** trong bài này; **SGK_CHAPTER_READINESS chỉ ở CUỐI cả Chương V** sau khi B12–B14 được duyệt, với câu mới hoàn toàn.
- Trục Chuyên đề độc lập: chỉ Kiến thức, Luyện tập, Tự kiểm tra, không có Topic Core. Dùng chung học liệu dạy học một `item_id`/đáp án/lời giải/rubric/lịch sử qua placement, không nhân bản item.
- Câu Practice chỉ hiển thị hướng dẫn/đáp án **sau khi học sinh chọn Check theo UX được phép**; Written tự đối chiếu không cộng Skill Mastery. Các câu PRIVATE Readiness chưa được tạo và sẽ không sử dụng bất kỳ câu đã công khai nào.

## B. Outcome register và 9 câu ứng viên

| Canonical outcome ID (S1 D1D2 đã PASS) | Những item mới đánh giá |
|---|---|
| `G10-B13-ARITHMETIC_MEAN_FREQUENCY` | `THPT-G10-B13-C01`, `THPT-G10-B13-P01`, `THPT-G10-B13-P02`, `THPT-G10-B13-P04`, `THPT-G10-CHV-W13` |
| `G10-B13-MEDIAN_ODD_EVEN` | `THPT-G10-B13-C01`, `THPT-G10-B13-C02`, `THPT-G10-B13-P02`, `THPT-G10-B13-P03`, `THPT-G10-B13-P05`, `THPT-G10-CHV-W13` |
| `G10-B13-QUARTILES_ORDERED_DATA` | `THPT-G10-B13-C03`, `THPT-G10-CHV-W13` |
| `G10-B13-MODE_FREQUENCY` | `THPT-G10-B13-C01`, `THPT-G10-B13-P01`, `THPT-G10-B13-P02`, `THPT-G10-B13-P03`, `THPT-G10-B13-P04`, `THPT-G10-CHV-W13` |
| `G10-B13-CENTRAL_TENDENCY_INTERPRETATION` | `THPT-G10-B13-P03`, `THPT-G10-B13-P05`, `THPT-G10-CHV-W13` |

| Canonical item ID duy nhất | Role/placement đề xuất | Outcome đích | Trạng thái reviewer |
|---|---|---|---|
| `THPT-G10-B13-C01` | `SGK_CORE` | `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-MODE_FREQUENCY` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B13-C02` | `SGK_CORE` | `G10-B13-MEDIAN_ODD_EVEN` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B13-C03` | `SGK_CORE` | `G10-B13-QUARTILES_ORDERED_DATA` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B13-P01` | `SGK_PRACTICE` | `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MODE_FREQUENCY` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B13-P02` | `SGK_PRACTICE` | `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-MODE_FREQUENCY` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B13-P03` | `SGK_PRACTICE_APPLICATION` | `G10-B13-CENTRAL_TENDENCY_INTERPRETATION`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-MODE_FREQUENCY` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B13-P04` | `SGK_PRACTICE` | `G10-B13-MODE_FREQUENCY`, `G10-B13-ARITHMETIC_MEAN_FREQUENCY` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B13-P05` | `SGK_PRACTICE_APPLICATION` | `G10-B13-CENTRAL_TENDENCY_INTERPRETATION`, `G10-B13-MEDIAN_ODD_EVEN` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-CHV-W13` | `SGK_WRITTEN` | `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-QUARTILES_ORDERED_DATA`, `G10-B13-MODE_FREQUENCY`, `G10-B13-CENTRAL_TENDENCY_INTERPRETATION` | `PENDING_NOTEBOOKLM_R0` |

## C. Toàn văn đề, đáp án, lời giải và rubric

### THPT-G10-B13-C01 — Tính trung bình, trung vị và mốt từ số liệu có lặp
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-MODE_FREQUENCY`  
**Đề bài:** Mẫu số liệu về số sách mượn trong 6 ngày: 3,3,7,7,7,9. Tính số trung bình, trung vị và mốt. Giải thích vì sao trung bình không nhất thiết trùng trung vị.  
**Đáp án chuẩn:** Trung bình 6; trung vị 7; mốt 7.  
**Lời giải có giải thích:** Tổng=3+3+7+7+7+9=36, n=6 nên x̄=36/6=6. Dãy đã sắp; hai giá trị giữa (vị trí 3,4) đều là 7 nên Mₑ=7. Giá trị 7 xuất hiện 3 lần nhiều nhất nên Mₒ=7. Trung bình chịu ảnh hưởng mọi giá trị còn trung vị phụ thuộc vị trí giữa.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Với n=6, trung vị là trung bình cộng của hai số ở vị trí 3 và 4.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B13-C02 — Trung vị dãy chưa sắp xếp
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B13-MEDIAN_ODD_EVEN`  
**Đề bài:** Số phút hoàn thành một công việc trong sáu lượt là 18,4,11,6,15,9. Tìm trung vị và số trung bình; chỉ ra bước không thể bỏ qua khi tìm trung vị.  
**Đáp án chuẩn:** Dãy sắp 4,6,9,11,15,18; Mₑ=10 phút; x̄=10,5 phút.  
**Lời giải có giải thích:** Sắp xếp tăng: 4,6,9,11,15,18. Mₑ=(9+11)/2=10 phút. Tổng=63 phút nên x̄=63/6=10,5 phút. Nếu lấy hai giá trị giữa theo thứ tự dữ liệu ban đầu sẽ sai.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Sắp xếp các giá trị trước khi chọn hai vị trí trung tâm.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B13-C03 — Bộ tứ phân vị của mẫu lẻ
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B13-QUARTILES_ORDERED_DATA`  
**Đề bài:** Mẫu đã sắp xếp gồm 2,3,5,7,11,13,17. Tìm Q₁,Q₂,Q₃ theo **quy ước KNTT**, và giải thích có dùng lại số 7 khi tìm Q₁,Q₃ hay không.  
**Đáp án chuẩn:** Q₂=7, Q₁=3, Q₃=13; bỏ 7 khi chia nửa số liệu.  
**Lời giải có giải thích:** Có n=7. Trung vị là số thứ 4: Q₂=7. Theo SGK KNTT khi n lẻ không tính lại phần tử trung vị trong hai nửa: nửa trái 2,3,5 có trung vị 3→Q₁=3; nửa phải 11,13,17 có trung vị 13→Q₃=13.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Với n lẻ, bỏ phần tử đứng giữa trước khi chia thành hai nửa.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B13-P01 — Bảng tần số và giá trị thường gặp
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MODE_FREQUENCY`  
**Đề bài:** Một nhà sách ghi số bộ đồ dùng bán được mỗi giao dịch: 1 bộ xuất hiện 2 lần, 2 bộ xuất hiện 3 lần, 3 bộ xuất hiện 5 lần. Tính cỡ mẫu, trung bình số bộ mỗi giao dịch và mốt.  
**Đáp án chuẩn:** n=10; x̄=23/10=2,3 bộ; mốt 3 bộ.  
**Lời giải có giải thích:** Tổng tần số n=2+3+5=10. Tổng có trọng số =1×2+2×3+3×5=23; x̄=23/10=2,3 bộ. Tần số lớn nhất là 5 ứng với giá trị 3 bộ.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Dùng trung bình có trọng số Σfᵢvᵢ/n, không chia cho số giá trị phân biệt.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B13-P02 — Ảnh hưởng của phép cộng hằng số lên số đặc trưng
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-MODE_FREQUENCY`  
**Đề bài:** Một mẫu dữ liệu đã có trung bình 12,5, trung vị 11 và mốt duy nhất 8. Nếu cộng 3 vào **từng** giá trị của mẫu thì trung bình, trung vị và mốt mới là bao nhiêu? Giải thích, không cần biết toàn bộ mẫu.  
**Đáp án chuẩn:** Trung bình 15,5; trung vị 14; mốt 11.  
**Lời giải có giải thích:** Với phép biến đổi yᵢ=xᵢ+3: trung bình mới là (Σxᵢ+3n)/n=x̄+3=15,5. Thứ tự sắp không đổi nên trung vị tăng thêm 3 thành 14. Tần số của mỗi giá trị không đổi nên giá trị mốt duy nhất tăng thêm 3 thành 11.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Tăng đồng đều mọi phần tử không thay đổi thứ tự và tần số.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B13-P03 — Trung vị chống nhiễu bởi giá trị cực lớn
**Role/placement:** `SGK_PRACTICE_APPLICATION`  
**Skill outcome(s):** `G10-B13-CENTRAL_TENDENCY_INTERPRETATION`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-MODE_FREQUENCY`  
**Đề bài:** Một đơn vị dịch vụ ghi số lượt xử lý trong sáu ca làm việc: 3,4,4,5,6,40 (đơn vị lượt). Tính trung bình và trung vị, tìm mốt; chọn số đo phản ánh ca làm việc “điển hình” hơn và giải thích.  
**Đáp án chuẩn:** x̄=62/6=31/3≈10,33 lượt; Mₑ=4,5 lượt; mốt 4 lượt; trung vị thích hợp hơn vì 40 lượt dị biệt.  
**Lời giải có giải thích:** Tổng=62 nên x̄=31/3. Mₑ=(giá trị thứ 3 + thứ 4)/2=(4+5)/2=4,5. Giá trị 4 xuất hiện hai lần, là mốt. Giá trị 40 làm trung bình lệch cao; trung vị ít nhạy hơn với điểm cực lớn.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Tính cả trung bình và trung vị trước khi quyết định chỉ số đại diện.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B13-P04 — Hai mốt và trung bình từ bảng cỡ giày
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B13-MODE_FREQUENCY`, `G10-B13-ARITHMETIC_MEAN_FREQUENCY`  
**Đề bài:** Một cửa hàng có số khách theo cỡ giày: cỡ 37: 2 người; 38: 5 người; 39: 5 người; 40: 1 người. Tìm tất cả các mốt và trung bình cỡ giày, làm tròn đến 0,01.  
**Đáp án chuẩn:** Hai mốt 38 và 39; x̄=499/13≈38,38.  
**Lời giải có giải thích:** Tổng n=2+5+5+1=13. Hai giá trị 38,39 cùng tần số cao nhất 5, do đó mẫu có hai mốt. Tổng có trọng số=37×2+38×5+39×5+40×1=74+190+195+40=499, nên x̄=499/13≈38,3846≈38,38.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Một mẫu có thể có hơn một mốt nếu nhiều giá trị cùng tần số lớn nhất.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B13-P05 — Hai nhóm cùng trung bình nhưng trung vị khác
**Role/placement:** `SGK_PRACTICE_APPLICATION`  
**Skill outcome(s):** `G10-B13-CENTRAL_TENDENCY_INTERPRETATION`, `G10-B13-MEDIAN_ODD_EVEN`  
**Đề bài:** Nhóm A có số liệu 2,3,4,5,16; nhóm B có 5,5,6,7,7. Chứng minh hai mẫu cùng số trung bình nhưng trung vị khác nhau, rồi giải thích vì sao chọn trung vị có thể hữu ích khi dữ liệu lệch.  
**Đáp án chuẩn:** Cả hai có x̄=6. Trung vị A=4; trung vị B=6. A bị giá trị 16 kéo trung bình lên.  
**Lời giải có giải thích:** Tổng mỗi mẫu đều 30, n=5 nên x̄ₐ=x̄ᵦ=6. Giá trị thứ 3 sau sắp là 4 (A) và 6 (B), nên Mₑ khác nhau. Trong A, giá trị 16 lớn so với phần còn lại nên trung vị 4 mô tả vị trí giữa tốt hơn trung bình 6.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Trung bình giống nhau không chứng minh phân bố giống nhau.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-CHV-W13 — Tự luận: phân tích dữ liệu có một ngày bất thường
**Role/placement:** `SGK_WRITTEN`  
**Skill outcome(s):** `G10-B13-ARITHMETIC_MEAN_FREQUENCY`, `G10-B13-MEDIAN_ODD_EVEN`, `G10-B13-QUARTILES_ORDERED_DATA`, `G10-B13-MODE_FREQUENCY`, `G10-B13-CENTRAL_TENDENCY_INTERPRETATION`  
**Đề bài:** Một câu lạc bộ ghi số lượt tham gia trong 7 ngày: 4,5,5,6,7,8,30. (a) Tính trung bình, trung vị và mốt. (b) Tìm Q₁,Q₂,Q₃ theo quy ước KNTT. (c) Nếu bỏ ngày có 30 lượt, hãy tính lại trung bình và trung vị, rồi đề xuất chỉ số thể hiện “ngày thông thường” đáng tin cậy hơn.  
**Đáp án chuẩn:** x̄=65/7≈9,29; Mₑ=6; mốt 5; (Q₁,Q₂,Q₃)=(5,6,8). Bỏ 30: x̄=35/6≈5,83; Mₑ=(5+6)/2=5,5. Trung vị phù hợp hơn khi có 30 bất thường.  
**Lời giải có giải thích:** Tổng mẫu ban đầu 4+5+5+6+7+8+30=65 nên x̄=65/7; giá trị giữa (4) là 6, và 5 lặp hai lần nhiều nhất. Khi n=7 loại 6, nửa trái 4,5,5 có Q₁=5; nửa phải 7,8,30 có Q₃=8. Bỏ 30 còn 4,5,5,6,7,8, tổng=35, n=6 nên x̄=35/6; trung vị=(5+6)/2=5,5. Số 30 làm trung bình tăng mạnh, nên trung vị thích hợp hơn để tả ngày thường.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Luôn sắp xếp mẫu và đổi n khi loại một quan sát.  
**Rubric Written /8đ (chỉ tự đối chiếu; không tự tăng Mastery):** (a) Trung bình chính xác 65/7: 2đ; trung vị 6 và mốt 5: 2đ. (b) Q₁=5,Q₂=6,Q₃=8 theo KNTT: 2đ. (c) Trung bình 35/6 và trung vị 5,5: 1đ; giải thích chọn trung vị và ngoại lệ: 1đ. Tổng: 8đ.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

## D. Reviewer checklist cần verdict tách từng item

- Bảo toàn đúng 9 item `B13`: 3 `SGK_CORE`, 5 `SGK_PRACTICE/APP`, 1 `SGK_WRITTEN`; xác minh độ khó Core và 1 rubric /8đ. Không coi 9 câu là tự động PASS vì QA nội bộ.
- Kiểm tra từng câu: bản chất toán thống kê, số học và các phép biến đổi; đáp án, đơn vị (phương sai bình phương, độ lệch chuẩn đơn vị gốc); tính độc lập thực chất với ví dụ D2 trước đó, trải nghiệm tự học và tính khả thi của phương pháp giải.
- Riêng B12: d là cận sai số tuyệt đối, phép quy tròn có cận riêng, sai số tương đối chỉ khi a≠0. Riêng B13: trung vị phải sắp xếp, quy ước KNTT **bỏ Q₂ khi n lẻ** để tính Q₁/Q₃. Riêng B14: ngoại lệ 1,5×IQR là SGK Core S1, phương sai chia n, tần số không ghép nhóm, không lẫn đơn vị.
- Nếu câu nào sai, khó quá phạm vi Core hoặc gần clone D2, HOLD đúng item_id và chỉ định MINIMAL_DELTA theo policy 07 v1.1; không tự suy rộng PASS sang Bài khác, Chuyên đề, private Readiness, D5 hoặc website.

## E. Requested machine-checkable verdict

```text
PACKET_ID|THPT-G10-CHV-B12_B14-D3D4-27ITEMS-20261029-R0
LESSON|B13
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
ITEM_REGISTER|EXPECTED=9|REVIEWED=?|MISSING=?|UNEXPECTED=?|DUPLICATED=?
CORE_PLACEMENTS|EXPECTED=3|PASS=?
OUTCOME_ALIGNMENT|ALL_IDs_CHECKED=?
ITEM_<CANONICAL_ITEM_ID>|PASS_OR_HOLD
P0_ERRORS|?
P1_WARNINGS|?
P2_NOTICES|?
ACADEMIC_OVERALL_G10_CHV_B13_D3D4|PASS_OR_HOLD
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

**Nguyên tắc giữ chứng cứ:** NotebookLM Academic PASS chỉ áp dụng chính xác file/hàm băm snapshot và ID được review; không cấp phép chấm điểm, merge/deploy hoặc Mastery.
