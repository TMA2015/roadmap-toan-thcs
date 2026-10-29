# Temp — Toán 10 KNTT · Chương V · Bài 12 · D3/D4 9 câu mới, review R0

**PACKET_ID:** `THPT-G10-CHV-B12_B14-D3D4-27ITEMS-20261029-R0`  
**LESSON_BATCH:** `B12` — Số gần đúng và sai số  
**CONTENT_VERSION:** `v0.1-CANDIDATE-20261029` · **ACADEMIC_STATUS:** `AUTHOR_QA_ONLY_NOTEBOOKLM_PENDING`  
**MASTER_PLAN_VERSION:** `THPT-v2.0`; **PERMANENT_SOURCE_SET:** `01-05_THPT_PERMANENT_v2.0_ONLY`  
**S1 SOURCE_RECEIPT:** SGK Toán 10 KNTT Tập 1 Bài 12 trang in **73–77**, SBT Toán 10 KNTT Tập 1 Bài 12 trang in **69–73** (bản gốc trong notebook; reviewer xác minh lại theo thực tế).
**PREVIOUS_VERDICTS_PRESERVED:** B12/B13 D1D2 PASS (8 KT, 10 EX, 10 outcomes); B14 D1D2 PASS (5 KT, 7 EX, 7 outcomes); ChIV component D1–D5/Readiness PASS đúng snapshot. Bài tập D3D4 trong gói này **CHƯA PASS**.

## A. Nguyên tắc nguồn, kiến trúc và ranh giới

- Chính tả và phép tính theo SGK/SBT S1 KNTT. Mọi ví dụ dưới đây là **câu mới** (không sao chép nguyên D2); reviewer phải đối chiếu near-clone và tầng Core thực chất.
- Trục SGK độc lập: Kiến thức D1, ví dụ D2, **3 SGK Core / 5 Practice-Application / 1 Written** trong bài này; **SGK_CHAPTER_READINESS chỉ ở CUỐI cả Chương V** sau khi B12–B14 được duyệt, với câu mới hoàn toàn.
- Trục Chuyên đề độc lập: chỉ Kiến thức, Luyện tập, Tự kiểm tra, không có Topic Core. Dùng chung học liệu dạy học một `item_id`/đáp án/lời giải/rubric/lịch sử qua placement, không nhân bản item.
- Câu Practice chỉ hiển thị hướng dẫn/đáp án **sau khi học sinh chọn Check theo UX được phép**; Written tự đối chiếu không cộng Skill Mastery. Các câu PRIVATE Readiness chưa được tạo và sẽ không sử dụng bất kỳ câu đã công khai nào.

## B. Outcome register và 9 câu ứng viên

| Canonical outcome ID (S1 D1D2 đã PASS) | Những item mới đánh giá |
|---|---|
| `G10-B12-APPROXIMATE_NUMBER_MEASUREMENT` | `THPT-G10-B12-C01` |
| `G10-B12-ABSOLUTE_ERROR_BOUND` | `THPT-G10-B12-C02`, `THPT-G10-B12-P02`, `THPT-G10-B12-P04`, `THPT-G10-B12-P05`, `THPT-G10-CHV-W12` |
| `G10-B12-RELATIVE_ERROR` | `THPT-G10-B12-P01`, `THPT-G10-B12-P05`, `THPT-G10-CHV-W12` |
| `G10-B12-ROUNDING_DECIMAL_PLACE` | `THPT-G10-B12-C03`, `THPT-G10-B12-P03`, `THPT-G10-B12-P04` |
| `G10-B12-INTERPRET_PRECISION_CALCULATOR` | `THPT-G10-B12-P01`, `THPT-G10-B12-P02`, `THPT-G10-CHV-W12` |

| Canonical item ID duy nhất | Role/placement đề xuất | Outcome đích | Trạng thái reviewer |
|---|---|---|---|
| `THPT-G10-B12-C01` | `SGK_CORE` | `G10-B12-APPROXIMATE_NUMBER_MEASUREMENT` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B12-C02` | `SGK_CORE` | `G10-B12-ABSOLUTE_ERROR_BOUND` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B12-C03` | `SGK_CORE` | `G10-B12-ROUNDING_DECIMAL_PLACE` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B12-P01` | `SGK_PRACTICE` | `G10-B12-RELATIVE_ERROR`, `G10-B12-INTERPRET_PRECISION_CALCULATOR` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B12-P02` | `SGK_PRACTICE` | `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-INTERPRET_PRECISION_CALCULATOR` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B12-P03` | `SGK_PRACTICE` | `G10-B12-ROUNDING_DECIMAL_PLACE` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B12-P04` | `SGK_PRACTICE_APPLICATION` | `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-ROUNDING_DECIMAL_PLACE` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-B12-P05` | `SGK_PRACTICE_APPLICATION` | `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-RELATIVE_ERROR` | `PENDING_NOTEBOOKLM_R0` |
| `THPT-G10-CHV-W12` | `SGK_WRITTEN` | `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-RELATIVE_ERROR`, `G10-B12-INTERPRET_PRECISION_CALCULATOR` | `PENDING_NOTEBOOKLM_R0` |

## C. Toàn văn đề, đáp án, lời giải và rubric

### THPT-G10-B12-C01 — Số đúng, số gần đúng và nguồn dữ liệu
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B12-APPROXIMATE_NUMBER_MEASUREMENT`  
**Đề bài:** Một thư viện ghi nhận **52 cuốn sách** trên giá A; chiều dài kệ đo bằng thước được **2,38 m**. Cho biết dữ kiện nào là số đếm chính xác, dữ kiện nào là số gần đúng; giải thích vì sao không thể suy ra độ chính xác của phép đo chỉ từ biểu diễn 2,38 m.  
**Đáp án chuẩn:** 52 cuốn là số đếm chính xác tại thời điểm kiểm kê; 2,38 m là số đo gần đúng; chưa đủ dữ kiện để khẳng định sai số hoặc độ chính xác d.  
**Lời giải có giải thích:** Số cuốn có thể đếm nguyên từng cuốn nên ghi 52 cuốn theo giả định kiểm kê đầy đủ. Chiều dài là đại lượng liên tục, việc đo phụ thuộc dụng cụ và cách đọc nên 2,38 m chỉ là số gần đúng. Hai chữ số sau dấu phẩy không chứng minh sai số tuyệt đối bằng 0,01 m hay 0,005 m.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Hãy xác định mỗi số do đếm hay do đo.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B12-C02 — Từ độ chính xác đến khoảng giá trị thật
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B12-ABSOLUTE_ERROR_BOUND`  
**Đề bài:** Một phép đo khoảng cách được báo cáo **a=68,4 m** với độ chính xác **d=0,3 m**. Viết bất đẳng thức cho sai số tuyệt đối và khoảng giá trị thật a*. Có thể kết luận sai số thực đúng bằng 0,3 m không?  
**Đáp án chuẩn:** |68,4−a*|≤0,3 m; 68,1≤a*≤68,7 (m); không thể kết luận sai số thực bằng 0,3 m.  
**Lời giải có giải thích:** Theo định nghĩa độ chính xác, Δₐ=|a−a*|≤d. Suy ra −0,3≤a*−68,4≤0,3, nên a*∈[68,1;68,7] m. d chỉ là cận trên, có thể sai số thực nhỏ hơn.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Độ chính xác d là giá trị lớn nhất cho phép của |a−a*|, không nhất thiết là sai số xảy ra.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B12-C03 — Quy tròn hai cấp và sai số do quy tròn
**Role/placement:** `SGK_CORE`  
**Skill outcome(s):** `G10-B12-ROUNDING_DECIMAL_PLACE`  
**Đề bài:** Số x=486,378 được coi là dữ kiện ban đầu chính xác để kiểm tra riêng thao tác quy tròn. Một học sinh làm tròn đến **hàng phần trăm** thành 486,37. Hãy kiểm tra và sửa kết quả, tính sai số tuyệt đối của phép quy tròn đúng, rồi so với cận h/2.  
**Đáp án chuẩn:** Kết quả đúng 486,38; sai số |486,38−486,378|=0,002≤0,005 (h=0,01); 486,37 là sai.  
**Lời giải có giải thích:** Hàng phần trăm (0,01) là chữ số 7, chữ số kế tiếp (hàng phần nghìn) bằng 8≥5 nên tăng 7 lên 8: 486,378→486,38. Vì vậy phương án 486,37 sai. Sai số do quy tròn |486,38−486,378|=0,002≤h/2=0,005.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Xét chữ số ngay bên phải hàng quy tròn và nhớ giới hạn sai số h/2.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B12-P01 — So sánh hai độ chính xác tương đối
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B12-RELATIVE_ERROR`, `G10-B12-INTERPRET_PRECISION_CALCULATOR`  
**Đề bài:** Thiết bị A thông báo 80,0 cm với dₐ=0,4 cm, thiết bị B thông báo 240,0 cm với dᵦ=0,6 cm. Tính cận trên sai số tương đối của mỗi phép đo (theo %) và so sánh **độ chính xác tương đối**; không tự coi d là sai số thực.  
**Đáp án chuẩn:** A: ≤0,5%; B: ≤0,25%; B có cận sai số tương đối nhỏ hơn.  
**Lời giải có giải thích:** Vì các số gần đúng khác 0: δₐ≤0,4/80=0,005=0,5%; δᵦ≤0,6/240=0,0025=0,25%. Dù dᵦ>dₐ, phép đo B có cận tỉ lệ nhỏ hơn. Không khẳng định chắc sai số thực B nhỏ hơn sai số thực A.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Đừng chỉ so sánh d theo cm; hãy chia d cho |a|.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B12-P02 — Chẩn đoán ngộ nhận số chữ số thập phân
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-INTERPRET_PRECISION_CALCULATOR`  
**Đề bài:** Giá trị chuẩn đã biết của một mẫu là 7,996 kg, trong khi kết quả công bố ghi 8,000 kg. (a) Tính sai số tuyệt đối. (b) Tính sai số tương đối theo số công bố và biểu diễn theo %. (c) Phản biện câu “ghi 8,000 kg có ba chữ số thập phân nên là giá trị tuyệt đối chính xác”.  
**Đáp án chuẩn:** Δ=0,004 kg; δ=0,004/8=0,0005=0,05%; khẳng định ở (c) sai.  
**Lời giải có giải thích:** Δ=|8,000−7,996|=0,004 kg. δ=Δ/|8,000|=0,0005, tức 0,05%. Ba chữ số sau dấu phẩy chỉ là cách trình bày, không xóa chênh lệch đã xác định với giá trị chuẩn.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** So sánh số công bố với giá trị chuẩn trước khi bàn về các chữ số.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B12-P03 — Quy tròn hàng chục và kiểm tra chênh lệch
**Role/placement:** `SGK_PRACTICE`  
**Skill outcome(s):** `G10-B12-ROUNDING_DECIMAL_PLACE`  
**Đề bài:** Một giá trị x=12 345,678 được xét như dữ kiện ban đầu chính xác. (a) Quy tròn x đến **hàng chục**. (b) Tính sai số tuyệt đối do quy tròn. (c) Kiểm tra cận h/2 với h=10.  
**Đáp án chuẩn:** 12 350; sai số 4,322; thỏa 4,322≤5.  
**Lời giải có giải thích:** Hàng đơn vị của 12 345,678 là 5≥5 nên quy tròn hàng chục được 12 350. Chênh lệch |12 350−12 345,678|=4,322. Với bước h=10, sai số chỉ do làm tròn ≤h/2=5; kết quả phù hợp.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Xác định hàng đang quy tròn và chữ số ngay bên phải hàng đó.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B12-P04 — Chặn sai số sau khi quy tròn số đo
**Role/placement:** `SGK_PRACTICE_APPLICATION`  
**Skill outcome(s):** `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-ROUNDING_DECIMAL_PLACE`  
**Đề bài:** Một phép đo được báo cáo a=48,264 cm với |a−a*|≤0,02 cm. Sau đó người báo cáo quy tròn **a** đến hàng phần trăm, nhận b. (a) Tìm b. (b) Dùng bất đẳng thức tam giác để tìm một cận trên chắc chắn cho |b−a*|. (c) Vì sao không được kết luận sai số với giá trị thật chỉ ≤0,005 cm?  
**Đáp án chuẩn:** b=48,26 cm; |b−a*|≤0,024 cm; cận 0,005 cm chỉ xét riêng thao tác quy tròn, bỏ qua sai số đo ban đầu.  
**Lời giải có giải thích:** Quy tròn 48,264 đến 0,01 cho b=48,26. Theo bất đẳng thức tam giác, |b−a*|≤|b−a|+|a−a*|=0,004+0,02=0,024 cm. Mốc 0,005 cm là cận của sai số quy tròn một giá trị đầu vào xác định, không phải cận tổng sai số so với đại lượng thật.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Tách sai số đo ban đầu và sai số do quy tròn.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-B12-P05 — Khoảng sai số của một nhiệt độ âm
**Role/placement:** `SGK_PRACTICE_APPLICATION`  
**Skill outcome(s):** `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-RELATIVE_ERROR`  
**Đề bài:** Một nhiệt kế ghi a=−5,6°C, biết độ chính xác d=0,2°C. (a) Nêu khoảng nhiệt độ thực. (b) Tính cận sai số tương đối theo trị tuyệt đối của a và đổi sang %. (c) Giải thích tại sao cận sai số tương đối không được viết là số âm.  
**Đáp án chuẩn:** a*∈[−5,8;−5,4] °C; δ≤0,2/5,6=1/28≈3,57%; tỉ lệ sai số không âm.  
**Lời giải có giải thích:** Từ |a−a*|≤0,2 suy ra −5,8≤a*≤−5,4. Với a≠0, δ=Δ/|a|≤0,2/|−5,6|=1/28≈0,035714≈3,57%. Cả Δ và |a| đều không âm, nên δ không âm.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Khi a âm, mẫu số đúng của sai số tương đối là |a|.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

### THPT-G10-CHV-W12 — Tự luận: chu vi đo gần đúng và chặn sai số
**Role/placement:** `SGK_WRITTEN`  
**Skill outcome(s):** `G10-B12-ABSOLUTE_ERROR_BOUND`, `G10-B12-RELATIVE_ERROR`, `G10-B12-INTERPRET_PRECISION_CALCULATOR`  
**Đề bài:** Một tấm bảng hình chữ nhật được đo có chiều dài a=24,8 cm với dₐ=0,2 cm và chiều rộng b=13,6 cm với dᵦ=0,1 cm. (a) Tính chu vi gần đúng P=2(a+b). (b) Chứng minh một cận trên của sai số tuyệt đối chu vi, rồi cho khoảng chu vi thật P*. (c) Cho cận sai số tương đối chu vi (theo %) so với P và nói rõ vì sao đó chỉ là cận.  
**Đáp án chuẩn:** P=76,8 cm; |P−P*|≤0,6 cm; P*∈[76,2;77,4] cm; δₚ≤0,6/76,8=0,78125%.  
**Lời giải có giải thích:** Viết a*,b* là các kích thước thật. P=2(24,8+13,6)=76,8 cm. |P−P*|=2|(a−a*)+(b−b*)|≤2|a−a*|+2|b−b*|≤2(0,2+0,1)=0,6 cm. Do đó 76,2≤P*≤77,4 cm. Cận sai số tương đối là 0,6/76,8=0,0078125=0,78125%; chưa biết dấu và trị số sai số thật nên không thể thay cận bằng dấu bằng.  
**Gợi ý luyện tập (không áp dụng trong Readiness):** Gọi giá trị thật là a*, b* rồi áp dụng bất đẳng thức tam giác.  
**Rubric Written /8đ (chỉ tự đối chiếu; không tự tăng Mastery):** (a) Chu vi 76,8 cm, đơn vị đúng: 2đ. (b) Lập bất đẳng thức tam giác và cận 0,6 cm: 2đ; khoảng P* đúng: 1đ. (c) Cận 0,78125%: 2đ; phân biệt cận với sai số thực: 1đ. Tổng: 8đ.  
**Exposure/assessment:** `SGK_CORE_OR_PRACTICE_WRITTEN_PUBLIC_TEACHING_ONLY;NOT_HELDOUT`

## D. Reviewer checklist cần verdict tách từng item

- Bảo toàn đúng 9 item `B12`: 3 `SGK_CORE`, 5 `SGK_PRACTICE/APP`, 1 `SGK_WRITTEN`; xác minh độ khó Core và 1 rubric /8đ. Không coi 9 câu là tự động PASS vì QA nội bộ.
- Kiểm tra từng câu: bản chất toán thống kê, số học và các phép biến đổi; đáp án, đơn vị (phương sai bình phương, độ lệch chuẩn đơn vị gốc); tính độc lập thực chất với ví dụ D2 trước đó, trải nghiệm tự học và tính khả thi của phương pháp giải.
- Riêng B12: d là cận sai số tuyệt đối, phép quy tròn có cận riêng, sai số tương đối chỉ khi a≠0. Riêng B13: trung vị phải sắp xếp, quy ước KNTT **bỏ Q₂ khi n lẻ** để tính Q₁/Q₃. Riêng B14: ngoại lệ 1,5×IQR là SGK Core S1, phương sai chia n, tần số không ghép nhóm, không lẫn đơn vị.
- Nếu câu nào sai, khó quá phạm vi Core hoặc gần clone D2, HOLD đúng item_id và chỉ định MINIMAL_DELTA theo policy 07 v1.1; không tự suy rộng PASS sang Bài khác, Chuyên đề, private Readiness, D5 hoặc website.

## E. Requested machine-checkable verdict

```text
PACKET_ID|THPT-G10-CHV-B12_B14-D3D4-27ITEMS-20261029-R0
LESSON|B12
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
ITEM_REGISTER|EXPECTED=9|REVIEWED=?|MISSING=?|UNEXPECTED=?|DUPLICATED=?
CORE_PLACEMENTS|EXPECTED=3|PASS=?
OUTCOME_ALIGNMENT|ALL_IDs_CHECKED=?
ITEM_<CANONICAL_ITEM_ID>|PASS_OR_HOLD
P0_ERRORS|?
P1_WARNINGS|?
P2_NOTICES|?
ACADEMIC_OVERALL_G10_CHV_B12_D3D4|PASS_OR_HOLD
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

**Nguyên tắc giữ chứng cứ:** NotebookLM Academic PASS chỉ áp dụng chính xác file/hàm băm snapshot và ID được review; không cấp phép chấm điểm, merge/deploy hoặc Mastery.
