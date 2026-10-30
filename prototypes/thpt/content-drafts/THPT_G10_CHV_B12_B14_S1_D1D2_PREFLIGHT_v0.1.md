# Toán 10 KNTT tập 1 — Chương V · Các số đặc trưng của mẫu số liệu không ghép nhóm
## Preflight S1 & D1–D2 candidate v0.1 — CHƯA ACADEMIC REVIEW

**AUTHORING_ONLY / NO_CONTENT_READY / NO_RELEASE.** Source-first draft, không phải kết luận NotebookLM.

### 1. Phạm vi S1 dựa trên bản scan gốc của chủ dự án

| Học liệu | SGK trang in | SBT trang in | Nội dung trọng tâm |
|---|---|---|---|
| Bài 12 — Số gần đúng và sai số | 73–77 | 72–74 (B13 bắt đầu giữa p74) | Số gần đúng, sai số tuyệt đối, sai số tương đối, độ chính xác, số quy tròn |
| Bài 13 — Các số đặc trưng đo xu thế trung tâm | 78–83 | 74–77 | Trung bình, trung vị, tứ phân vị, mốt |
| Bài 14 — Các số đặc trưng đo độ phân tán | 84–88 | 78–80 | Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn, ngoại lệ |
| Bài tập cuối Chương V | 89–90 | 81–84 | Tổng hợp số gần đúng và thống kê mô tả |

Đã mở và xem ảnh trực tiếp SGK p73,74,76,77,78,80,83,84,86,88,89,90 và SBT p72–80 cùng một số trang cuối chương. Độ sâu S1 **còn phải audit hoạt động/bài tập từng trang** trước khi phát hành Temp R01. Các ví dụ dưới đây do tác giả mới soạn; **không sao chép nguyên văn** bài SGK/SBT.

### 2. Outcome candidates (chưa đăng ký skill_id/canonical bank)

- G10-B12-APPROX_CONCEPT: phân biệt số đúng, số gần đúng, số quy tròn.
- G10-B12-ABS_ERROR: tính sai số tuyệt đối khi biết số đúng; đánh giá sai số khi chỉ biết độ chính xác.
- G10-B12-REL_ERROR: sai số tương đối, mẫu số khác 0, tránh dùng sai mẫu số.
- G10-B12-ROUNDING: làm tròn phù hợp độ chính xác và trình bày đơn vị.
- G10-B13-MEAN: trung bình cộng và bảng tần số.
- G10-B13-MEDIAN: trung vị theo tính chẵn/lẻ và thứ tự.
- G10-B13-QUARTILES: xác định Q1/Q2/Q3 theo phương pháp nửa mẫu đã sắp xếp trong SGK.
- G10-B13-MODE: mốt, có thể nhiều hoặc không có mốt tùy số liệu.
- G10-B13-INTERPRETATION: so sánh ý nghĩa trung bình/trung vị khi có giá trị bất thường.
- G10-B14-RANGE_IQR: khoảng biến thiên và khoảng tứ phân vị.
- G10-B14-VARIANCE: phương sai của chính mẫu số liệu theo n (không nhầm n−1).
- G10-B14-STDDEV: độ lệch chuẩn và đơn vị.
- G10-B14-OUTLIERS: nhận biết giá trị bất thường với ngưỡng Q1−1,5ΔQ và Q3+1,5ΔQ (khi đúng phạm vi SGK/SBT).
- G10-B14-COMPARISON: so sánh hai mẫu số liệu bằng xu thế trung tâm và độ phân tán.

### 3. Bài 12 — D1 số gần đúng và sai số

Số gần đúng \(\bar a\) được dùng khi không biết hoặc không thể viết chính xác số đúng \(a\). Nếu biết \(a\), sai số tuyệt đối \(\Delta_a=|a-\bar a|\). Nếu không biết \(a\) nhưng có \(\Delta_a\le d\), thì \(d\) là **độ chính xác** (giới hạn sai số), không được khẳng định \(\Delta_a=d\). Sai số tương đối là \(\delta_a=\Delta_a/|a|\) (khi \(a\ne0\)), có thể trình bày theo %. Thực tế thường chỉ dùng ước lượng \(\Delta_a/|\bar a|\) nếu \(a\) chưa biết; cần gọi rõ là **ước lượng**, không tự đồng nhất hai số.

Quy tròn về một hàng cho ra số quy tròn. Quy tắc làm tròn phải nêu rõ hàng đơn vị/chục/trăm/phần thập phân và mức sai số; tránh suy rằng “nhiều chữ số sau dấu phẩy” luôn có nghĩa là đo chính xác hơn.

**EX-G10-B12-01:** Số đúng \(a=12{,}347\), dùng \(\bar a=12{,}35\). Sai số tuyệt đối \(0{,}003\); sai số tương đối \(0{,}003/12{,}347\approx0{,}0243\%\). Dễ sai khi dùng \(0{,}003/12{,}35\) rồi gọi chính xác.

**EX-G10-B12-02:** Dụng cụ ghi chiều dài \(\bar a=20{,}0\,\mathrm{cm}\) với sai số không quá \(0{,}1\,\mathrm{cm}\). Viết \(a\in[19{,}9;20{,}1]\,\mathrm{cm}\). Không khẳng định sai số thực sự bằng \(0{,}1\) cm.

**EX-G10-B12-03:** Quy tròn \(3{,}14159\) đến hàng phần trăm, được \(3{,}14\); sai số tuyệt đối \(0{,}00159\), nhỏ hơn nửa đơn vị hàng phần trăm (\(0{,}005\)).

### 4. Bài 13 — D1 xu thế trung tâm

Với mẫu \(n\) số \(x_1,\ldots,x_n\), \(\bar x=(x_1+\cdots+x_n)/n\). Nếu bảng tần số có \(m_i\), \(\bar x=(\sum m_ix_i)/(\sum m_i)\). Trung vị \(Q_2\) là giá trị ở giữa dãy đã sắp tăng hoặc trung bình hai giá trị giữa nếu \(n\) chẵn. Tứ phân vị \(Q_1,Q_3\) lần lượt là trung vị nửa trái/nửa phải, **không đưa \(Q_2\) vào hai nửa khi n lẻ**, theo cách trình bày SGK. Mốt là giá trị có tần số lớn nhất; nếu tất cả tần số bằng nhau có thể không có mốt theo cách SGK trình bày, cần soát cách diễn giải trước khi đóng gói.

**EX-G10-B13-01:** Mẫu \(2,3,3,7,10\): trung bình \(5\); trung vị \(3\); mốt \(3\); \(Q_1=2{,}5\), \(Q_3=8{,}5\). Trung bình lớn hơn trung vị do giá trị \(10\).

**EX-G10-B13-02:** Mẫu \(2,4,6,10,12,20\): trung vị \(Q_2=(6+10)/2=8\), \(Q_1=4\), \(Q_3=12\), trung bình \(9\). Cần sắp mẫu trước.

**EX-G10-B13-03:** Điểm \(5\) (tần số 2), \(7\) (tần số 3), \(9\) (tần số 1): \(n=6\), trung bình \(40/6=20/3\); trung vị \(7\); mốt \(7\); \(Q_1=5,Q_3=7\). Không tính \((5+7+9)/3\) vì bỏ tần số.

### 5. Bài 14 — D1 độ phân tán

Với mẫu đã sắp, khoảng biến thiên \(R=x_{\max}-x_{\min}\). Khoảng tứ phân vị \(\Delta_Q=Q_3-Q_1\). Phương sai theo **chính mẫu được mô tả**:
\[
s^2=\frac1n\sum_{i=1}^{n}(x_i-\bar x)^2.
\]
Độ lệch chuẩn \(s=\sqrt{s^2}\), có đơn vị như dữ liệu gốc, còn phương sai có đơn vị bình phương. Giá trị bất thường theo quy tắc tứ phân vị thường nằm dưới \(Q_1-1{,}5\Delta_Q\) hoặc trên \(Q_3+1{,}5\Delta_Q\). Đánh giá độ phân tán phải kết hợp nhiều số đặc trưng, không chỉ khoảng biến thiên.

**EX-G10-B14-01:** Mẫu \(2,4,6,8\): \(\bar x=5\), \(R=6\), \(Q_1=3,Q_3=7,\Delta_Q=4\); \(s^2=(9+1+1+9)/4=5\), \(s=\sqrt5\approx2{,}236\).

**EX-G10-B14-02:** Hai mẫu \(A=(4,5,6)\), \(B=(1,5,9)\) cùng \(\bar x=5\), nhưng \(s_A^2=2/3\), \(s_B^2=32/3\). Dữ liệu B phân tán hơn, dù cùng trung bình.

**EX-G10-B14-03:** Mẫu \(1,2,2,3,3,4,4,20\): \(Q_1=2\), \(Q_3=4\), \(\Delta_Q=2\). Ngưỡng trên \(=4+1{,}5\cdot2=7\); \(20>7\) nên 20 là giá trị bất thường. Không xếp mọi giá trị lớn hơn trung bình là ngoại lệ.

### 6. Còn phải làm trước NotebookLM

- D1–D2 là **bản thảo** 3 bài, 14 outcome ứng viên, 9 ví dụ, chưa phải học liệu đủ D1–D6.
- Soát hoàn toàn trang SGK/SBT và trường hợp mốt, thống nhất tiêu chí giá trị ngoại lệ. Đặc biệt phân biệt sai số tuyệt đối thực/độ chính xác, quy tròn, cách lấy tứ phân vị n chẵn/lẻ, và phương sai chia n.
- D3 cần câu hỏi canonical Core/Practice ở nhiều dạng; D4 Written/Anchor và rubric cùng ngân hàng; D5 hình SVG minh họa trực quan đồ thị điểm, trục số/tứ phân vị, biểu đồ phân tán khi phù hợp; D6 thẻ khắc phục sai số, sắp dữ liệu, tần số và ngoại lệ.
- Chưa có NotebookLM verdict, không đánh dấu A1–A7 PASS, không cập nhật \`ready/\`, không tạo held-out readiness keys public và không bật Mastery.

**FINAL:** \`S1_PREFLIGHT\` · \`D1_D2_DRAFT\` · \`D3_D6_PENDING\` · \`ACADEMIC_PASS=NO\` · \`CONTENT_READY=NO\`.
