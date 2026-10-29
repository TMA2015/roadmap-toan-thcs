# Temp — Toán 10 KNTT Tập 1 · Chương V · Bài 14 — Các số đặc trưng đo độ phân tán · D1/D2 review R0

**PACKET_ID:** `THPT-G10-CHV-B14-S1-D1D2-20261029-R0`  
**CONTENT_VERSION:** `v0.1-CANDIDATE-20261029`  
**ACADEMIC_STATUS:** `AUTHOR_QA_PASS_PENDING_NOTEBOOKLM_S1` (**chưa được Academic PASS**).  
**MASTER_PLAN:** `THPT-v2.0`; **Permanent Sources NotebookLM:** chỉ `01-05_THPT_PERMANENT_v2.0_ONLY`, không trộn nguồn v1.  
**S1 đối chiếu bắt buộc:** SGK và SBT *Toán 10 KNTT Tập 1 bản gốc* trong NotebookLM. **Trang Bài 14 mới là chỉ dẫn tham khảo CHƯA ĐƯỢC review:** SGK dự kiến 84–88, SBT dự kiến 80–85; Bài tập cuối Chương V SGK 89–90, SBT 86–88 cũng chỉ là tham khảo **không thuộc packet này**. NotebookLM phải xác nhận lại số trang in và ranh giới Core thực tế của Bài 14.  
**Bảo lưu PASS theo snapshot riêng:** B12–B13 D1/D2 `THPT-G10-CHV-B12_B13-S1-D1D2-20261029-R0`: 8/8 mô-đun D1, 10/10 ví dụ D2, 10/10 outcome; nguồn SGK 73–83, SBT 69–79 (được reviewer S1 xác nhận). Chương IV D1–D5 và Readiness đã có các scoped verdict PASS, không suy rộng sang B14.  
**Mục tiêu:** học sinh chỉ đi theo SGK vẫn có định nghĩa, điều kiện, công thức, minh họa bằng số, ví dụ tự học; SGK Core/Practice/Written, hình D5 và Readiness cuối chương biên soạn ở các packet riêng sau D1/D2 PASS.

## A. Ma trận 7 outcome ứng viên cho Bài 14 — để reviewer xác nhận phạm vi S1

| Outcome ID ứng viên | Năng lực cần chứng minh | D1 / D2 minh chứng | Dự kiến phân tầng |
|---|---|---|---|
| `G10-B14-RANGE_UNGROUPED` | Tính và giải thích khoảng biến thiên của dãy hữu hạn không rỗng | KT-B14-01, EX-B14-01 | SGK Core candidate |
| `G10-B14-QUARTILE_RANGE` | Tính khoảng tứ phân vị `Q3−Q1` theo quy ước tứ phân vị đã duyệt ở B13 | KT-B14-02, EX-B14-02, EX-B14-03 | SGK Core candidate |
| `G10-B14-OUTLIER_IQR_FENCES` | Kiểm tra giá trị bất thường bằng ngưỡng `1,5·IQR`, nếu S1 có dạy | KT-B14-03, EX-B14-04 | **S1_CORE_OR_SUPPORT_EXTENSION_PENDING** |
| `G10-B14-VARIANCE_UNGROUPED` | Tính phương sai chia cho `n` từ toàn bộ quan sát và phân biệt với mẫu hiệu chỉnh chia `n−1` | KT-B14-04, EX-B14-05 | SGK Core candidate |
| `G10-B14-FREQUENCY_VARIANCE` | Tính phương sai/độ lệch chuẩn từ bảng tần số không ghép nhóm | KT-B14-04, EX-B14-06 | **S1_CORE_OR_SUPPORT_PENDING** |
| `G10-B14-STANDARD_DEVIATION_UNITS` | Tính căn bậc hai không âm của phương sai, hiểu đơn vị của độ lệch chuẩn | KT-B14-05, EX-B14-05, EX-B14-06 | SGK Core candidate |
| `G10-B14-COMPARE_DISPERSION` | Đọc và so sánh mức phân tán giữa hai mẫu có cùng trung bình, nêu giới hạn diễn giải | KT-B14-01, KT-B14-05, EX-B14-07 | SGK application candidate |

**Lưu ý kiến trúc outcome:** Cả 7 mã đều là ứng viên, **không tự nhận canonical đã được phê duyệt**. Nếu S1 không có quy tắc `1,5·IQR` hoặc phương sai theo bảng tần số, đề nghị reviewer phân tầng `SUPPORT_EXTENSION` hoặc yêu cầu di chuyển sang phần bổ trợ, **không** mở rộng phạm vi Core để hợp thức hóa ví dụ. Khi B14 được reviewer chốt mới hình thành 17 outcome Chương V dự kiến (10 B12/B13 + 7 B14), chưa phải ma trận toàn Chương V đã nghiệm thu.

## B. Bài 14 — Kiến thức D1 (5 mô-đun tự đủ)

### KT-B14-01 · Khoảng biến thiên và ý nghĩa (D1)

Cho mẫu số liệu thực hữu hạn `x1,...,xn`, `n≥1`, đã xác định cùng đại lượng và đơn vị. **Khoảng biến thiên** (range), ký hiệu `R` (cần S1 xác nhận ký hiệu), được tính bằng:

\[
R=x_{\max}-x_{\min}\geq 0.
\]

**Quy trình:** sắp xếp/nhận diện giá trị lớn nhất và nhỏ nhất, lấy lớn trừ nhỏ; *không phải* lấy số đầu trừ số cuối theo thứ tự ghi ban đầu. Với dãy `2,4,6,8`, có `R=8−2=6`. Nếu mọi giá trị bằng nhau thì `R=0`. Khoảng biến thiên có cùng đơn vị với dữ liệu (ví dụ: phút), mô tả độ rộng của toàn mẫu nhưng **rất nhạy với hai giá trị cực trị**, không đủ để miêu tả mọi đặc trưng phân tán. Hai dãy có cùng số trung bình vẫn có thể có khoảng biến thiên khác nhau.

**Ngộ nhận:** `R` không là phương sai, không có đơn vị bình phương. Hãy so sánh các mẫu được đo cùng đại lượng và cùng đơn vị khi diễn giải mức chênh.

### KT-B14-02 · Khoảng tứ phân vị, liên kết Bài 13 (D1)

Sau khi **sắp dữ liệu tăng dần**, tìm `Q1`, `Q2` (trung vị) và `Q3` theo quy ước SGK KNTT B13 đã được reviewer PASS: nếu `n` lẻ, **loại phần tử trung vị khi chia thành nửa trái/nửa phải**; nếu `n` chẵn, chia đều thành hai nửa. **Khoảng tứ phân vị** (interquartile range), ký hiệu `Δ_Q` hay `IQR` (reviewer kiểm tra ký hiệu SGK), là:

\[
\Delta_Q=Q_3-Q_1\geq 0.
\]

Khoảng tứ phân vị đo khoảng phân bố của vùng 50% dữ liệu giữa, nhìn chung ít nhạy hơn khoảng biến thiên với những điểm cực lớn/nhỏ ở hai đuôi. Đơn vị của `Δ_Q` giống đơn vị dữ liệu. Đối với mẫu chỉ có 1–2 phần tử, cách xác định tứ phân vị có thể phụ thuộc quy ước; **không ngầm mở rộng** các ví dụ/thuật toán cho mẫu quá nhỏ nếu SGK không hướng dẫn. Các ví dụ dùng `n≥7`, tránh tình huống không đủ hai nửa.

**Phân biệt:** Tứ phân vị `Q1,Q3` (định vị dữ liệu) là nội dung đã dạy B13; ở B14 ta học **hiệu** `Q3−Q1` để đo độ phân tán. Không nhầm `Δ_Q` với chênh lệch `Q3−Q2` hoặc `Q2−Q1`.

### KT-B14-03 · Nhận diện giá trị ngoại lệ dựa trên khoảng tứ phân vị (D1 — S1 xác minh Core)

Nếu **SGK B14 thật sự giới thiệu** quy ước hộp (Tukey) phát hiện giá trị bất thường, đặt `IQR=Q3−Q1` và hai ngưỡng:

\[
L=Q_1-1{,}5\,IQR,\qquad U=Q_3+1{,}5\,IQR.
\]

Giá trị **nhỏ hơn** `L` hoặc **lớn hơn** `U` là ứng viên **giá trị ngoại lệ (outlier)** theo quy ước này. Dữ liệu nằm đúng `L` hoặc `U` **không bị coi là ngoại lệ** nếu áp dụng dấu bất đẳng thức nghiêm. Đây chỉ là quy tắc sàng lọc thống kê, **không chứng minh dữ liệu bị ghi sai** và không tự cho phép xóa quan sát. Nếu mẫu có `IQR=0`, quy ước và diễn giải trường hợp biên cần được đối chiếu thêm với S1.

**Cổng Core:** Nếu S1 Bài 14 chỉ dạy khoảng biến thiên/khoảng tứ phân vị/phương sai/độ lệch chuẩn mà không đưa ngưỡng 1,5 làm yêu cầu bắt buộc, **gắn mô-đun và EX-B14-04 là `SUPPORT_EXTENSION`**; không đưa vào SGK Core bắt buộc hay Readiness SGK độc lập khi chưa được reviewer cho phép.

### KT-B14-04 · Phương sai của mẫu không ghép nhóm và bảng tần số (D1)

Với mẫu `n≥1`, số trung bình `\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i`, **phương sai mô tả mẫu số liệu theo công thức SGK đang đề nghị xác minh** là:

\[
s^2=\frac{1}{n}\sum_{i=1}^n(x_i-\bar{x})^2
=\frac{1}{n}\sum_{i=1}^n x_i^2-(\bar{x})^2\geq0.
\]

Ta **chia cho `n`**, không tự thay bằng `n−1` của ước lượng phương sai không chệch trong thống kê suy luận, trừ khi S1 chính thức có chỉ dẫn khác. Nếu một giá trị `v_j` xuất hiện `f_j` lần và `\sum_j f_j=n>0`, khai triển đúng mẫu bằng tần số:

\[
\bar{x}=\frac{\sum_j f_jv_j}{n},\qquad s^2=\frac{\sum_j f_j(v_j-\bar{x})^2}{n}.
\]

Phương sai đo bình quân *bình phương* độ lệch các quan sát so với số trung bình; do bình phương nên không âm. Đơn vị phương sai là **bình phương đơn vị dữ liệu** (`phút²`, `cm²`). Nếu mọi giá trị bằng nhau thì phương sai bằng 0; điều ngược lại cũng đúng với mẫu không rỗng. Công thức biến đổi `\overline{x^2}-(\bar{x})^2` là phương pháp kiểm tra chéo, không phải phép thay đổi chuẩn số chia.

**Ranh giới:** Công thức bảng tần số chỉ là cách viết lại dữ liệu chưa ghép nhóm, **không** phải công thức xấp xỉ của số liệu ghép nhóm theo trung điểm các lớp; dữ liệu ghép nhóm nằm ngoài phạm vi ChV.

### KT-B14-05 · Độ lệch chuẩn, đơn vị và so sánh mức độ phân tán (D1)

**Độ lệch chuẩn** theo cùng công thức phương sai là căn bậc hai **không âm**:

\[
s=\sqrt{s^2}\geq0.
\]

Vì vậy `s` có **cùng đơn vị** với dữ liệu, giúp diễn giải mức dao động so với trung bình bằng đơn vị quen thuộc; phương sai `s²` lại có đơn vị bình phương. Mẫu có `s=0` khi và chỉ khi mọi số liệu bằng nhau. Với hai mẫu **cùng đại lượng, cùng đơn vị** và trung bình tương đương, mẫu có `s` nhỏ hơn thường có mức dao động quanh trung bình thấp hơn theo chỉ số này. Tuy vậy cần nêu hạn chế của dữ liệu có ngoại lệ và không coi `s` là khoảng sai số chắc chắn của mọi quan sát.

**Cách tự kiểm:** (1) Kiểm tra `n`, `\bar{x}`; (2) lấy từng `x_i−\bar{x}` và bình phương; (3) tính `s²` với mẫu số đúng `n`; (4) mới lấy `s=√s²`; (5) ghi đúng đơn vị và mức làm tròn. Không ghi `s=±√s²` vì độ lệch chuẩn là số không âm.

## C. Ví dụ D2 (7 ví dụ có đề, giải, kết luận, kiểm tra ngộ nhận)

### EX-B14-01 · Khoảng biến thiên trên hai mẫu có cùng trung bình (D2)

**Đề:** Hai mẫu quan sát (đơn vị phút) là `A: 2,4,6,8` và `B: 4,5,5,6`. Tính số trung bình và khoảng biến thiên mỗi mẫu; mẫu nào rộng hơn theo `R`?  
**Giải:** `\bar x_A=(2+4+6+8)/4=5` phút; `\bar x_B=(4+5+5+6)/4=5` phút. `R_A=8−2=6` phút; `R_B=6−4=2` phút. Dù cùng trung bình, `R_A>R_B` cho biết A trải rộng hơn theo khoảng biến thiên.  
**Kết luận:** Trung bình bằng nhau **không** có nghĩa mức độ phân tán bằng nhau.  
**Tự kiểm:** Khoảng biến thiên giữ đơn vị phút, không phải phút².

### EX-B14-02 · Khoảng tứ phân vị với mẫu lẻ (D2)

**Đề:** Cho mẫu đã sắp `1,2,3,4,5,9,12` (`n=7`). Tính `Q1, Q2, Q3`, khoảng tứ phân vị.  
**Giải:** `Q2=4` (phần tử thứ tư). Bỏ 4 khi chia đôi; nửa trái `1,2,3` có `Q1=2`; nửa phải `5,9,12` có `Q3=9`. Vì vậy `IQR=Q3−Q1=9−2=7`.  
**Kết luận:** Khoảng tứ phân vị là `7` đơn vị đo.  
**Tự kiểm:** Nếu tính trung vị nửa trái trên bốn phần tử `1,2,3,4` thì đã **sai** quy ước SGK KNTT khi `n` lẻ.

### EX-B14-03 · Khoảng tứ phân vị với mẫu chẵn (D2)

**Đề:** Cho mẫu `2,3,5,6,8,9,11,16` (`n=8`). Tính `Q1, Q2, Q3`, khoảng tứ phân vị.  
**Giải:** Hai giá trị chính giữa 6 và 8 cho `Q2=(6+8)/2=7`. Nửa trái `2,3,5,6` có `Q1=(3+5)/2=4`; nửa phải `8,9,11,16` có `Q3=(9+11)/2=10`. Do đó `IQR=10−4=6`.  
**Kết luận:** Với `n` chẵn, tách thành hai nửa bằng nhau, không bỏ phần tử nào.  
**Tự kiểm:** `IQR` không bằng khoảng biến thiên `16−2=14`.

### EX-B14-04 · Phát hiện ngoại lệ bằng IQR (D2 — S1_CORE_OR_SUPPORT_PENDING)

**Đề:** Xét mẫu số liệu không ghép nhóm đã sắp `2,3,4,5,6,7,8,30`. Nếu áp dụng quy ước ngưỡng `1,5·IQR`, giá trị nào bị đánh dấu ngoại lệ? Có thể kết luận đó là số liệu sai không?  
**Giải:** `n=8`; nửa trái `2,3,4,5` có `Q1=(3+4)/2=3,5`; nửa phải `6,7,8,30` có `Q3=(7+8)/2=7,5`, `IQR=4`. Ngưỡng dưới `L=3,5−1,5·4=−2,5`, trên `U=7,5+1,5·4=13,5`. Chỉ `30>13,5` nên 30 là **ứng viên ngoại lệ**.  
**Kết luận:** Việc bị gắn nhãn không chứng minh quan sát nhập sai; phải kiểm tra bối cảnh đo và nguồn dữ liệu trước khi xử lí.  
**Cổng S1:** Nếu quy ước 1,5 không nằm trong Core B14, reviewer gắn `SUPPORT_EXTENSION` đồng thời cho KT-B14-03 và EX-B14-04; **không** được ép vào tự kiểm tra Core cuối Chương V.

### EX-B14-05 · Tính phương sai và độ lệch chuẩn trực tiếp, so sánh hai mẫu (D2)

**Đề:** Với `A: 2,4,6,8` và `B: 4,5,5,6` (cùng đơn vị cm), tính phương sai `s²` theo mẫu số `n` và độ lệch chuẩn `s` mỗi mẫu.  
**Giải:** Hai mẫu cùng trung bình 5 cm.  
- A: độ lệch `−3,−1,1,3`; tổng bình phương `9+1+1+9=20`. `s_A²=20/4=5 cm²`, `s_A=√5≈2,2361 cm`.
- B: độ lệch `−1,0,0,1`; tổng bình phương `1+0+0+1=2`. `s_B²=2/4=1/2 cm²`, `s_B=√(1/2)=√2/2≈0,7071 cm`.  
**Kết luận:** Vì `s_A>s_B`, A phân tán quanh trung bình hơn B theo độ lệch chuẩn.  
**Tự kiểm:** Không chia `20` cho `3` hoặc nhầm `cm²` thành `cm` khi gọi tên phương sai.

### EX-B14-06 · Phương sai từ bảng tần số không ghép nhóm (D2 — S1_CORE_OR_SUPPORT_PENDING)

**Đề:** Giá trị `v` và tần số tương ứng là `1:1 lần`, `3:2 lần`, `5:1 lần`. Tính số trung bình, phương sai và độ lệch chuẩn theo công thức chia `n`.  
**Giải:** Tổng số quan sát `n=1+2+1=4`; tổng trị số `1·1+3·2+5·1=12`, do đó `\bar x=12/4=3`. Tổng bình phương độ lệch theo tần số `1·(1−3)^2+2·(3−3)^2+1·(5−3)^2=4+0+4=8`. `s²=8/4=2`, `s=√2≈1,4142` (cùng đơn vị quan sát).  
**Kiểm tra chéo:** `(1²·1+3²·2+5²·1)/4−3²=(1+18+25)/4−9=11−9=2`.  
**Kết luận:** Mỗi quan sát được tính đúng **tần số của nó**; không dùng số lớp 3 thay cho tổng mẫu 4.  
**Cổng S1:** Nếu S1 B14 không yêu cầu số liệu trình bày dạng bảng tần số, chuyển ví dụ này thành `SUPPORT_EXTENSION` thay vì SGK Core.

### EX-B14-07 · Chọn thước đo và giải thích sự khác nhau (D2)

**Đề:** Hai mẫu mức tiêu thụ hằng ngày (đơn vị lít) lần lượt là `A: 2,4,6,8` và `B: 4,5,5,6`. Một bạn nói: “Hai mẫu cùng trung bình nên mức dao động cũng bằng nhau”. Hãy kiểm tra bằng `R` và `s` rồi phản biện.  
**Giải:** Cả hai cùng trung bình `5 L`. Từ dữ liệu, `R_A=6 L`, `R_B=2 L`. Phương sai và độ lệch chuẩn đã tính trực tiếp: `s_A²=5 L²`, `s_A=√5≈2,2361 L`; `s_B²=1/2 L²`, `s_B=√2/2≈0,7071 L`. Hai chỉ số phân tán đều lớn hơn cho A.  
**Kết luận:** Lời khẳng định **sai**: trung bình đo vị trí trung tâm, còn khoảng biến thiên/độ lệch chuẩn đo các khía cạnh khác của phân tán. Nếu mẫu có ngoại lệ, cần kết hợp IQR thay vì chỉ nhìn hai giá trị cực trị.  
**Nguy cơ gần trùng:** EX07 dùng cùng hai mẫu với EX01/EX05 để kết nối đa chỉ số. Reviewer cần xét tính **sư phạm của tái sử dụng ví dụ** trong cùng bài; nếu thấy quá lặp, có thể yêu cầu thay dữ kiện mới theo `DELTA_C`, nhưng **không** suy sang Readiness (đây chỉ là ví dụ dạy học).

## D. S1, chất lượng toán học, phân tầng và yêu cầu verdict

1. **Bản gốc S1**: xác nhận SGK B14 trang in chính xác (dự kiến 84–88), SBT B14 (dự kiến 80–85), phạm vi Core của `R`, `IQR`, phương sai chia n, độ lệch chuẩn, ngưỡng ngoại lệ 1,5·IQR và bảng tần số. Cần đối chiếu cả ký hiệu dùng trong SGK cho khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn; nếu SGK khác, trả `HOLD`/điều chỉnh cụ thể ID thay vì im lặng thay tiêu chuẩn S1.
2. **Ma trận**: kiểm tra 5 mô-đun `KT-B14-01..05`, 7 ví dụ `EX-B14-01..07`, 7 outcome ứng viên và độ phủ/trật tự tự học. Nếu quy ước ngoại lệ hoặc công thức bảng tần số là Support/Extension, xác định rõ hai module/example `KT-B14-03`, `EX-B14-04`, `EX-B14-06`; không tự nâng phạm vi SGK Core.
3. **Toán học**: kiểm tra tính không âm, đơn vị của `R`, `IQR`, `s²`, `s`, cả quy tắc tứ phân vị khi n lẻ loại trung vị đã PASS ở B13; phân biệt chia `n` với `n−1`; kiểm tra mọi đáp số, số học, giới hạn làm tròn, đọc hiểu ngoại lệ, và sự khác biệt giữa mẫu không ghép nhóm với nhóm lớp.
4. **Tính độc lập của ví dụ D2**: đảm bảo giải từng bước từ chính đề, tránh lặp số liệu gây ngộ nhận và không đưa ví dụ D2 làm bài Tự kiểm tra cuối Chương V. `D3/D4` chưa được biên soạn hoặc review trong gói này.
5. **Đầu ra yêu cầu:** `PACKET_ID`, `SOURCE_RECEIPT_G10_SGK`, `SOURCE_RECEIPT_G10_SBT`, `LESSON_B14_D1D2_VERDICT`, `KNOWLEDGE_REGISTER=5`, `EXAMPLE_REGISTER=7`, `OUTCOME_ALIGNMENT=7`, bảng `ID|PASS/HOLD|S1_CORE_OR_SUPPORT`, `P0_ERRORS`, `P1_WARNINGS`, `P2_NOTICES`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G10_CHV_B14_D1D2`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
6. **Bảo lưu và an toàn:** B12/B13 D1/D2 PASS chỉ có giá trị đúng snapshot trước; không xét lại nếu không thay nội dung. B14 hiện là ứng viên mới `DELTA_C_ACADEMIC_MATERIAL`, cần NotebookLM review riêng. Không có câu hỏi điểm số, rubric chấm bảo mật hay đề `SGK_CHAPTER_READINESS` trong gói. Sau khi cả B12–B14 D3D4 có review, mới làm PRIVATE Chapter-end Readiness với item mới (không sao chép D2/D3D4), không hint/Tutor/kết quả trước Final Submit. Topic theo ba phần Kiến thức/Luyện tập/Tự kiểm tra (không Core riêng); SGK học đầy đủ Knowledge/Core/Practice rồi Readiness ở cuối chương. Không merge/deploy, không tự ghi Mastery, không đổi Golden R4, THCS hay browser persistence.
