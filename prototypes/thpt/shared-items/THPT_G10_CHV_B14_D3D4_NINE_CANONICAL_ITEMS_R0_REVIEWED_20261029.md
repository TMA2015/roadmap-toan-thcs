# Temp — Toán 10 KNTT · Chương V · Bài 14 · D3/D4 9 câu mới, review R0

**PACKET_ID:** `THPT-G10-CHV-B12_B14-D3D4-27ITEMS-20261029-R0`  
**LESSON_BATCH:** `B14` — Các số đặc trưng đo độ phân tán  
**CONTENT_VERSION:** `v0.1-CANDIDATE-20261029` · **ACADEMIC_STATUS:** `AUTHOR_QA_ONLY_NOTEBOOKLM_PENDING`  
**MASTER_PLAN_VERSION:** `THPT-v2.0`; **PERMANENT_SOURCE_SET:** `01-05_THPT_PERMANENT_v2.0_ONLY`  
**S1 SOURCE_RECEIPT:** SGK Toán 10 KNTT Tập 1 Bài 14 trang in **84–88**, SBT Toán 10 KNTT Tập 1 Bài 14 trang in **80–85** (bản gốc trong notebook; reviewer xác minh lại theo thực tế).
**PREVIOUS_VERDICTS_PRESERVED:** B12/B13 D1D2 PASS (8 KT, 10 EX, 10 outcomes); B14 D1D2 PASS (5 KT, 7 EX, 7 outcomes); ChIV component D1–D5/Readiness PASS đúng snapshot. Bài tập D3D4 trong gói này **CHƯA PASS**.

## A. Nguyên tắc nguồn, kiến trúc và ranh giới

- Chính tả và phép tính theo SGK/SBT S1 KNTT. Mọi ví dụ dưới đây là **câu mới** (không sao chép nguyên D2); reviewer phải đối chiếu near-clone và tầng Core thực chất.
- Trục SGK độc lập: Kiến thức D1, ví dụ D2, **3 SGK Core / 5 Practice-Application / 1 Written** trong bài này; **SGK_CHAPTER_READINESS chỉ ở CUỐI cả Chương V** sau khi B12–B14 được duyệt, với câu mới hoàn toàn.
- Trục Chuyên đề độc lập: chỉ Kiến thức, Luyện tập, Tự kiểm tra, không có Topic Core. Dùng chung học liệu dạy học một `item_id`/đáp án/lời giải/rubric/lịch sử qua placement, không nhân bản item.
- Câu Practice chỉ hiển thị hướng dẫn/đáp án **sau khi học sinh chọn Check theo UX được phép**; Written tự đối chiếu không cộng Skill Mastery. Các câu PRIVATE Readiness chưa được tạo và sẽ không sử dụng bất kỳ câu đã công khai nào.

## B. Outcome register và 9 câu ứng viên

| Canonical outcome ID (S1 D1D2 đã PASS) | Những item mới đánh giá |
|---|---|
| `G10-B14-RANGE_UNGROUPED` | `THPT-G10-B14-C01`, `THPT-G10-B14-P04`, `THPT-G10-CHV-W14` |
| `G10-B14-QUARTILE_RANGE` | `THPT-G10-B14-C02`, `THPT-G10-B14-P01`, `THPT-G10-B14-P04`, `THPT-G10-CHV-W14` |
| `G10-B14-OUTLIER_IQR_FENCES` | `THPT-G10-B14-P01`, `THPT-G10-CHV-W14` |
| `G10-B14-VARIANCE_UNGROUPED` | `THPT-G10-B14-C03`, `THPT-G10-B14-P02`, `THPT-G10-B14-P05`, `THPT-G10-CHV-W14` |
| `G10-B14-FREQUENCY_VARIANCE` | `THPT-G10-B14-P03` |
| `G10-B14-STANDARD_DEVIATION_UNITS` | `THPT-G10-B14-C03`, `THPT-G10-B14-P02`, `THPT-G10-B14-P03`, `THPT-G10-B14-P05`, `THPT-G10-CHV-W14` |
| `G10-B14-COMPARE_DISPERSION` | `THPT-G10-B14-P02`, `THPT-G10-B14-P04` |

| Canonical item ID duy nhất | Role/placement đề xuất | Outcome đích | Trạng thái reviewer |
|---|---|---|---|
| `THPT-G10-B14-C01` | `SGK_CORE` | `G10-B14-RANGE_UNGROUPED` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B14-C02` | `SGK_CORE` | `G10-B14-QUARTILE_RANGE` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B14-C03` | `SGK_CORE` | `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-STANDARD_DEVIATION_UNITS` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B14-P01` | `SGK_PRACTICE` | `G10-B14-OUTLIER_IQR_FENCES`, `G10-B14-QUARTILE_RANGE` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B14-P02` | `SGK_PRACTICE` | `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-COMPARE_DISPERSION`, `G10-B14-STANDARD_DEVIATION_UNITS` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B14-P03` | `SGK_PRACTICE` | `G10-B14-FREQUENCY_VARIANCE`, `G10-B14-STANDARD_DEVIATION_UNITS` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B14-P04` | `SGK_PRACTICE_APPLICATION` | `G10-B14-RANGE_UNGROUPED`, `G10-B14-QUARTILE_RANGE`, `G10-B14-COMPARE_DISPERSION` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B14-P05` | `SGK_PRACTICE` | `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-STANDARD_DEVIATION_UNITS` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-CHV-W14` | `SGK_WRITTEN` | `G10-B14-RANGE_UNGROUPED`, `G10-B14-QUARTILE_RANGE`, `G10-B14-OUTLIER_IQR_FENCES`, `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-STANDARD_DEVIATION_UNITS` | `PENDING_NOTEBOOKLM_R0` |

## C. Toàn văn đề, đáp án, lời giải và rubric

### THPT-G10-B14-C01 — Khoảng biến thiên và độ nhạy của cực trị
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B14-RANGE_UNGROUPED`  
**Đề bài:** Mẫu có năm giá trị 3,7,9,12,16. Tính khoảng biến thiên R. Nếu giá trị lớn nhất thay từ 16 thành 30, R mới là bao nhiêu? Nêu ý nghĩa sự thay đổi.  
**Đáp án chuẩn:** R=13; R mới=27; khoảng biến thiên rất nhạy với cực trị lớn.  
**Lời giải có giải thích:** Ban đầu xₘₐₓ=16, xₘᵢₙ=3 nên R=16−3=13. Sau thay đổi, cực đại 30, cực tiểu vẫn 3 nên R′=30−3=27. Chỉ một quan sát cực trị thay đổi làm R biến thiên đáng kể.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Khoảng biến thiên chỉ cần biết giá trị lớn nhất và nhỏ nhất.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B14-C02 — Tứ phân vị và khoảng tứ phân vị mẫu lẻ
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B14-QUARTILE_RANGE`  
**Đề bài:** Mẫu số liệu đã sắp gồm 1,4,6,7,8,9,10,14,18. Tính bộ Q₁,Q₂,Q₃ theo KNTT và khoảng tứ phân vị ΔQ.  
**Đáp án chuẩn:** Q₂=8, Q₁=5, Q₃=12; ΔQ=7.  
**Lời giải có giải thích:** n=9 nên Q₂=giá trị thứ 5=8. Loại 8, nửa dưới 1,4,6,7 có trung vị (4+6)/2=5 nên Q₁=5; nửa trên 9,10,14,18 có trung vị (10+14)/2=12 nên Q₃=12; ΔQ=12−5=7.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Với n lẻ, không đưa Q₂ vào hai nửa khi tìm Q₁,Q₃.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B14-C03 — Phương sai chia n và độ lệch chuẩn
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-STANDARD_DEVIATION_UNITS`  
**Đề bài:** Một mẫu số giờ học hằng ngày là 1,2,3,4,5 (giờ). Tính trung bình, phương sai s² **chia cho n** và độ lệch chuẩn s. Ghi đơn vị chính xác.  
**Đáp án chuẩn:** x̄=3 giờ; s²=2 giờ²; s=√2≈1,41 giờ.  
**Lời giải có giải thích:** x̄=(1+2+3+4+5)/5=3 giờ. Tổng bình phương độ lệch=(−2)²+(−1)²+0²+1²+2²=10 (giờ²). s²=10/5=2 giờ², s=√2≈1,41 giờ (lấy căn không âm).  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Phương sai có đơn vị bình phương, độ lệch chuẩn có đơn vị gốc.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B14-P01 — Giới hạn ngoại lệ trước và sau khi thay dữ liệu
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B14-OUTLIER_IQR_FENCES`, `G10-B14-QUARTILE_RANGE`  
**Đề bài:** Mẫu đã sắp: 1,2,3,3,4,5,5,6,9,10. Dùng quy tắc 1,5×ΔQ xác định có ngoại lệ hay không. Nếu giá trị 10 được thay bằng 15 thì các tứ phân vị và kết luận ngoại lệ có đổi không?  
**Đáp án chuẩn:** Q₁=3, Q₃=6, ΔQ=3, ngưỡng [−1,5;10,5]; mẫu đầu không ngoại lệ. Thay 10→15: Q₁,Q₃ không đổi; 15 là ngoại lệ.  
**Lời giải có giải thích:** n=10, nửa dưới 1,2,3,3,4 có trung vị 3, nửa trên 5,5,6,9,10 có trung vị 6. ΔQ=3 nên cận L=3−1,5×3=−1,5 và U=6+4,5=10,5. Tất cả giá trị mẫu ban đầu nằm giữa hai cận. Với 15 thay 10 ở cực đại, nửa trên 5,5,6,9,15 vẫn có trung vị 6, do đó ngưỡng không đổi, 15>10,5 nên là giá trị bất thường.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Tứ phân vị của mỗi nửa phụ thuộc vị trí giữa, không nhất thiết phụ thuộc cực đại.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B14-P02 — Hai mẫu cùng trung bình, một mẫu không phân tán
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-COMPARE_DISPERSION`, `G10-B14-STANDARD_DEVIATION_UNITS`  
**Đề bài:** Mẫu A=[5,5,5,5] và mẫu B=[3,4,6,7] (đơn vị cm). Tính số trung bình, phương sai và độ lệch chuẩn mỗi mẫu; kết luận mẫu nào đều hơn.  
**Đáp án chuẩn:** Cả hai x̄=5 cm. A: s²=0 cm², s=0 cm. B: s²=5/2=2,5 cm²; s=√(5/2)≈1,58 cm. A đồng đều hơn.  
**Lời giải có giải thích:** Các mẫu đều có tổng 20 nên x̄=5. A mọi quan sát bằng trung bình → phương sai 0. B có bình phương độ lệch (−2)²+(−1)²+1²+2²=10; chia n=4 cho s²=10/4=2,5 cm²; s=√2,5≈1,58 cm. Do A không dao động, A đồng đều hơn.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Phương sai bằng 0 khi và chỉ khi tất cả giá trị đều bằng trung bình.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B14-P03 — Phương sai tính từ bảng tần số không ghép nhóm
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B14-FREQUENCY_VARIANCE`, `G10-B14-STANDARD_DEVIATION_UNITS`  
**Đề bài:** Một bảng có ba giá trị 0 (tần số 2), 2 (tần số 3), 4 (tần số 1), đơn vị sản phẩm. Tính cỡ mẫu, số trung bình, phương sai theo công thức Σfᵢvᵢ²/n−x̄² và độ lệch chuẩn.  
**Đáp án chuẩn:** n=6; x̄=5/3; s²=17/9 (sản phẩm)²; s=√17/3≈1,37 sản phẩm.  
**Lời giải có giải thích:** n=2+3+1=6; x̄=(0×2+2×3+4×1)/6=10/6=5/3. Σfᵢvᵢ²=0²×2+2²×3+4²×1=28. s²=28/6−(5/3)²=14/3−25/9=(42−25)/9=17/9. s=√(17/9)=√17/3≈1,374 sản phẩm.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Tính tổng bình phương có trọng số theo tần số; mẫu số vẫn là n.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B14-P04 — Khoảng tứ phân vị ổn định khi thay một cực đại
**Role/placement:** `SGK_PRACTICE_APPLICATION`  
**Skill outcome(s):** `G10-B14-RANGE_UNGROUPED`, `G10-B14-QUARTILE_RANGE`, `G10-B14-COMPARE_DISPERSION`  
**Đề bài:** Xét mẫu A=1,2,3,4,5,6,7,8,9,10. Mẫu B giống A nhưng thay số 10 bằng 100. Tính R và ΔQ cho hai mẫu theo quy ước KNTT; so sánh phản ứng của hai thước đo.  
**Đáp án chuẩn:** Rₐ=9, Rᵦ=99; Q₁=3, Q₃=8 và ΔQ=5 cho cả hai mẫu. R thay mạnh, IQR giữ nguyên.  
**Lời giải có giải thích:** Cả hai có n=10, năm số nhỏ nhất 1,2,3,4,5 → Q₁=3. Năm số lớn nhất của A là 6,7,8,9,10 → Q₃=8; của B là 6,7,8,9,100 → Q₃=8. IQR=8−3=5 ở cả hai. R(A)=10−1=9, R(B)=100−1=99. IQR ít nhạy hơn trước cực trị rất lớn.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Tính Q₁ và Q₃ theo nửa mẫu rồi so với phép lấy max−min.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B14-P05 — Tính phương sai nhanh từ hai đại lượng tổng hợp
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-STANDARD_DEVIATION_UNITS`  
**Đề bài:** Một mẫu n=5 có trung bình x̄=10 kg và tổng bình phương giá trị Σxᵢ²=550 kg². Tính phương sai s² và độ lệch chuẩn s theo công thức rút gọn **chia cho n**; ghi đơn vị.  
**Đáp án chuẩn:** s²=550/5−10²=10 kg²; s=√10≈3,16 kg.  
**Lời giải có giải thích:** Với công thức SGK s²=(Σxᵢ²)/n−(x̄)²=550/5−100=110−100=10 kg². Vì độ lệch chuẩn không âm nên s=√10≈3,1623 kg. Ví dụ dữ liệu thực hợp lệ có thể là 6,7,10,13,14 kg (trung bình 10, bình phương tổng 550).  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Không chia cho n−1; kiểm tra đúng đơn vị sau phép bình phương.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-CHV-W14 — Tự luận: phát hiện ngoại lệ và tính độ phân tán
**Role/placement:** `SGK_WRITTEN`  
**Skill outcome(s):** `G10-B14-RANGE_UNGROUPED`, `G10-B14-QUARTILE_RANGE`, `G10-B14-OUTLIER_IQR_FENCES`, `G10-B14-VARIANCE_UNGROUPED`, `G10-B14-STANDARD_DEVIATION_UNITS`  
**Đề bài:** Một mẫu độ dài (cm) có sáu số liệu 2,4,5,5,7,13. (a) Tính khoảng biến thiên. (b) Tính Q₁,Q₂,Q₃, IQR và tìm ngưỡng ngoại lệ 1,5×IQR. (c) Xác định giá trị bất thường (nếu có), tính phương sai s² chia cho n và độ lệch chuẩn s, ghi đơn vị.  
**Đáp án chuẩn:** R=11 cm; (Q₁,Q₂,Q₃)=(4,5,7) cm; IQR=3 cm; cận [−0,5;11,5] cm; 13 cm là ngoại lệ; x̄=6 cm; s²=12 cm²; s=2√3≈3,46 cm.  
**Lời giải có giải thích:** R=13−2=11. n=6, Q₂=(giá trị 3+4)/2=(5+5)/2=5; nửa dưới 2,4,5 cho Q₁=4; nửa trên 5,7,13 cho Q₃=7; IQR=3. Ngưỡng dưới L=4−1,5×3=−0,5, trên U=7+4,5=11,5; số 13>11,5 là ngoại lệ. Tổng=36 nên x̄=36/6=6. Tổng bình phương số liệu 4+16+25+25+49+169=288 nên s²=288/6−6²=48−36=12 cm². s=√12=2√3≈3,46 cm.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Đừng bỏ số 13 khi tính phương sai của **mẫu đã cho**; ngoại lệ không mặc nhiên bị xóa.  
**Rubric Written /8đ (chỉ tự đối chiếu; không tự tăng Mastery):** (a) Khoảng biến thiên 11 cm: 1đ. (b) Q₁,Q₂,Q₃ đúng: 2đ; IQR=3 và đơn vị: 1đ. (c) Ngưỡng và chỉ ra 13: 2đ; x̄, s² đúng và ghi cm²: 1đ; s=2√3 và cm: 1đ. Tổng: 8đ.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

## D. Reviewer checklist cần verdict tách từng item

- Bảo toàn đúng 9 item `B14`: 3 `SGK_CORE`, 5 `SGK_PRACTICE/APP`, 1 `SGK_WRITTEN`; xác minh độ khó Core và 1 rubric /8đ. Không coi 9 câu là tự động PASS vì QA nội bộ.
- Kiểm tra từng câu: bản chất toán thống kê, số học và các phép biến đổi; đáp án, đơn vị (phương sai bình phương, độ lệch chuẩn đơn vị gốc); tính độc lập thực chất với ví dụ D2 trước đó, trải nghiệm tự học và tính khả thi của phương pháp giải.
- Riêng B12: d là cận sai số tuyệt đối, phép quy tròn có cận riêng, sai số tương đối chỉ khi a≠0. Riêng B13: trung vị phải sắp xếp, quy ước KNTT **bỏ Q₂ khi n lẻ** để tính Q₁/Q₃. Riêng B14: ngoại lệ 1,5×IQR là SGK Core S1, phương sai chia n, tần số không ghép nhóm, không lẫn đơn vị.
- Nếu câu nào sai, khó quá phạm vi Core hoặc gần clone D2, HOLD đúng item_id và chỉ định MINIMAL_DELTA theo policy 07 v1.1; không tự suy rộng PASS sang Bài khác, Chuyên đề, private Readiness, D5 hoặc website.

## E. Requested machine-checkable verdict

```text
PACKET_ID|THPT-G10-CHV-B12_B14-D3D4-27ITEMS-20261029-R0
LESSON|B14
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
ITEM_REGISTER|EXPECTED=9|REVIEWED=?|MISSING=?|UNEXPECTED=?|DUPLICATED=?
CORE_PLACEMENTS|EXPECTED=3|PASS=?
OUTCOME_ALIGNMENT|ALL_IDs_CHECKED=?
ITEM_<CANONICAL_ITEM_ID>|PASS_OR_HOLD
P0_ERRORS|?
P1_WARNINGS|?
P2_NOTICES|?
ACADEMIC_OVERALL_G10_CHV_B14_D3D4|PASS_OR_HOLD
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

**Nguyên tắc giữ chứng cứ:** NotebookLM Academic PASS chỉ áp dụng chính xác file/hàm băm snapshot và ID được review; không cấp phép chấm điểm, merge/deploy hoặc Mastery.
