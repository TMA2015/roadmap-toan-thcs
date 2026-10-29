# Temp — Toán 10 KNTT Tập 1 · Chương V · Bài 12–13 · Kiến thức D1 / Ví dụ D2 · review độc lập R0

**PACKET_ID:** `THPT-G10-CHV-B12_B13-S1-D1D2-20261029-R0`  
**ACADEMIC_STATUS:** `NEW_AUTHORING_CANDIDATE_NOT_NOTEBOOKLM_PASS`  
**MASTER_PLAN:** `THPT-v2.0`; **Permanent NotebookLM:** đúng `01-05_THPT_PERMANENT_v2.0_ONLY`.  
**S1 bắt buộc:** SGK Toán 10 KNTT Tập 1 + SBT Toán 10 KNTT Tập 1 **bản gốc trong NotebookLM**.  
**Trang SGK dự kiến chỉ theo mục lục S2 (CHƯA phải SOURCE_RECEIPT S1):** Bài 12, trang 73–77; Bài 13, trang 78–83; Bài 14, trang 84–88; bài tập cuối Chương V, trang 89–90. **Trang SBT Chương V: S1_PENDING, không suy đoán.**  
**Lộ trình:** B12/B13 ở gói này, B14 làm riêng; học sinh chỉ học theo SGK vẫn có đầy đủ định nghĩa, điều kiện, ví dụ và các phần D3–D4 sẽ viết sau verdict D1–D2. Tự kiểm tra chỉ xuất hiện ở **cuối toàn Chương V**, không dùng lại câu đã học.  
**Phạm vi S1 cần reviewer xác nhận:** B12 số gần đúng/sai số tuyệt đối–tương đối/quy tròn; B13 trung bình/trung vị/tứ phân vị/mốt; không đưa phương sai, biểu đồ hộp hay quy tắc nhận diện ngoại lệ của B14 thành Core B12/B13.

## A. Ma trận outcome đề xuất (10 mã ứng viên, S1 cần chuẩn hóa)

| ID ứng viên | Bài | Năng lực học sinh chứng minh qua D1–D2 |
|---|---|---|
| `G10-B12-APPROXIMATE_NUMBER_MEASUREMENT` | B12 | Phân biệt số đúng/số gần đúng và dữ kiện đo, biết đơn vị |
| `G10-B12-ABSOLUTE_ERROR_BOUND` | B12 | Tính sai số tuyệt đối khi biết giá trị đúng; sử dụng độ chính xác d khi không biết |
| `G10-B12-RELATIVE_ERROR` | B12 | Tính/ước lượng sai số tương đối, chú ý mẫu số khác 0 và đơn vị phần trăm |
| `G10-B12-ROUNDING_DECIMAL_PLACE` | B12 | Quy tròn theo hàng cho trước, kiểm soát độ chính xác do quy tròn |
| `G10-B12-INTERPRET_PRECISION_CALCULATOR` | B12 | Diễn giải số đo kèm sai số/độ chính xác; không suy diễn độ chính xác giả |
| `G10-B13-ARITHMETIC_MEAN_FREQUENCY` | B13 | Tính số trung bình của mẫu và mẫu có bảng tần số |
| `G10-B13-MEDIAN_ODD_EVEN` | B13 | Sắp xếp, tính trung vị với số phần tử chẵn/lẻ |
| `G10-B13-QUARTILES_ORDERED_DATA` | B13 | Tính Q1, Q2, Q3 theo đúng quy ước SGK |
| `G10-B13-MODE_FREQUENCY` | B13 | Tìm mốt từ mẫu hoặc bảng tần số, diễn giải đúng ý nghĩa |
| `G10-B13-CENTRAL_TENDENCY_INTERPRETATION` | B13 | Chọn số đo trung tâm hợp lý khi dữ liệu lệch hoặc có giá trị rất lớn |

**Kiểm tra sâu:** các outcome là mã **ứng viên**, reviewer xác nhận giữ/gộp/tách và phạm vi Core theo SGK/SBT S1, không mặc định đã canonical chỉ vì có tên ID.

## B. Bài 12 — Số gần đúng và sai số

### KT-B12-01 · Số đúng và số gần đúng (D1)

Số đếm chính xác và số đo một đại lượng vật lí có bản chất khác nhau. Chẳng hạn một lớp có 32 học sinh là kết quả đếm chính xác, còn chiều dài được thông báo là `148,6 cm` thường chỉ là **số gần đúng** do giới hạn dụng cụ đo hoặc làm tròn. Ký hiệu `a` cho số gần đúng, `a*` cho giá trị chính xác (nếu biết). Không tự cho rằng thêm nhiều chữ số thập phân làm số đo chính xác hơn; luôn nêu đơn vị phù hợp. 

**Bản chất:** Sai số thuộc về mức chênh giữa số thông báo và giá trị thật; nếu chưa biết giá trị thật thì thường chỉ biết **một cận trên** của sai số, không biết sai số thực bằng bao nhiêu.

### KT-B12-02 · Sai số tuyệt đối và độ chính xác (D1)

Với giá trị đúng `a*`, **sai số tuyệt đối** của số gần đúng `a` là `Δ_a = |a − a*| ≥ 0`, có **cùng đơn vị** với đại lượng được đo. Nếu chỉ biết `|a−a*| ≤ d`, viết `a = a* ± ...` chỉ khi diễn đạt đúng nghĩa và ký hiệu; cách an toàn là thông báo **số gần đúng a với độ chính xác d**, nghĩa là `a* ∈ [a−d, a+d]`. Cận `d` không nhất thiết là sai số thực. Một phép tính có sai số bằng 0 vẫn là trường hợp hợp lệ.

### KT-B12-03 · Sai số tương đối (D1)

Để so sánh các phép đo có đơn vị/quy mô khác nhau, dùng **sai số tương đối** `δ_a = Δ_a / |a|` khi `a ≠ 0` theo cách trình bày SGK. Nếu chỉ biết `Δ_a ≤ d` thì có ước lượng `δ_a ≤ d / |a|`. Nhân `100%` để nêu theo phần trăm. Không lấy mẫu số bằng 0; khi so sánh tỷ lệ sai số, số tuyệt đối lớn chưa chắc kém chính xác hơn nếu tỷ lệ nhỏ hơn. **Reviewer S1 xác nhận đúng quy ước và điều kiện SGK**, phân biệt mẫu số là số gần đúng so với giá trị thật nếu nguồn quy định khác.

### KT-B12-04 · Quy tròn số gần đúng và đọc kết quả máy tính (D1)

Quy tròn số đến hàng đơn vị, hàng phần mười/hàng phần trăm, ... phải ghi rõ **hàng quy tròn**. Ví dụ `12,346` quy tròn đến phần trăm (hai chữ số sau dấu phẩy) thành `12,35`; khi đó sai số do riêng thao tác quy tròn là `0,004` (không phải sai số đo trước đó). Với quy tròn thông thường tới bước `h`, sai số quy tròn tối đa khoảng `h/2` đối với giá trị được quy tròn; riêng phương pháp chọn hàng/chữ số chắc khi đã biết độ chính xác `d` phải theo đúng SGK S1. Máy tính có thể hiện nhiều chữ số nhưng kết quả báo cáo phải phù hợp độ chính xác của dữ liệu đầu vào.

### EX-B12-01 · Phân loại kết quả đếm và đo (D2)

**Đề:** Một câu lạc bộ có `24` thành viên, đồng thời đo chiều dài bảng được `148,6 cm`. Dữ liệu nào có thể được xem là số đếm chính xác và dữ liệu nào là số gần đúng?  
**Giải:** `24` là số đếm người theo quy ước đầy đủ một thời điểm → chính xác; `148,6 cm` là kết quả đo, phụ thuộc độ chia nhỏ và thao tác đọc → số gần đúng. Không có cận sai số thì không được tự tuyên bố `±0,1 cm`.  
**Kết luận:** Phân biệt theo **nguồn phát sinh dữ liệu**, không chỉ theo số chữ số.

### EX-B12-02 · Sai số tuyệt đối khi biết giá trị đúng (D2)

**Đề:** Một thanh thẳng có chiều dài thật `20,15 cm`, một lần đọc gần đúng cho `a=20,20 cm`. Tính sai số tuyệt đối và sai số tương đối tính theo số gần đúng.  
**Giải:** `Δ_a = |20,20−20,15|=0,05 cm`. Vì `a=20,20 ≠ 0`, `δ_a = 0,05/20,20 ≈ 0,00247525 ≈ 0,2475%`.  
**Kết luận:** Đơn vị sai số tuyệt đối là cm, còn sai số tương đối không có đơn vị. Lưu ý không nhầm `0,002475` với `0,002475%`.

### EX-B12-03 · Độ chính xác là cận chứ không phải sai số thực (D2)

**Đề:** Một dụng cụ thông báo chiều dài gần đúng `a=250 cm` có độ chính xác `d=1 cm`. Hãy nêu khoảng chứa giá trị đúng và ước lượng sai số tương đối theo phần trăm.  
**Giải:** `|a−a*|≤1` ⇒ `249≤a*≤251` (cm). `δ_a≤1/250=0,004=0,4%`.  
**Kết luận:** Không thể biết sai số thực bằng đúng `1 cm`; đó chỉ là cận trên.

### EX-B12-04 · Quy tròn đúng hàng (D2)

**Đề:** Quy tròn `12,346` đến hàng phần trăm và đến hàng phần mười; tính sai số tuyệt đối do quy tròn trong từng trường hợp.  
**Giải:** Đến hàng phần trăm: `12,35`, sai số `|12,35−12,346|=0,004`. Đến hàng phần mười: `12,3`, sai số `|12,3−12,346|=0,046`.  
**Kết luận:** Tăng số chữ số giữ lại có thể giảm sai số do quy tròn ở ví dụ này, nhưng không làm phép đo đầu vào chính xác hơn.

### EX-B12-05 · Báo cáo phép đo có giới hạn (D2)

**Đề:** Một phép đo được báo cáo `a=148,6 cm`, độ chính xác `d=0,1 cm`. Hãy nêu cận sai số tương đối và chỉ ra một cách viết quá tự tin.  
**Giải:** `a* ∈ [148,5;148,7]` cm; `δ_a≤0,1/148,6≈0,000673≈0,0673%`. Kết luận kiểu `148,600000 cm là giá trị chính xác` không hợp lệ, dù máy tính có thể hiển thị các chữ số bổ sung.  
**Kết luận:** Cần phân biệt **chữ số do hiển thị** với **độ chính xác đã được đảm bảo**.

## C. Bài 13 — Các số đặc trưng đo xu thế trung tâm

### KT-B13-01 · Số trung bình và bảng tần số (D1)

Với mẫu số liệu thực `x1,...,xn`, `n≥1`, **số trung bình** là `x̄=(x1+...+xn)/n`. Nếu giá trị `v_i` xuất hiện `f_i` lần, thì `x̄=(Σ f_i v_i)/(Σ f_i)` với tổng tần số dương. Số trung bình sử dụng tất cả các quan sát nên dễ bị kéo lệch bởi giá trị quá lớn/nhỏ; nhớ giữ đơn vị gốc khi dùng để ước lượng một đại lượng. 

### KT-B13-02 · Trung vị và bước sắp xếp (D1)

Bắt buộc **sắp xếp theo thứ tự không giảm** trước khi tìm trung vị `Q2`. Với `n` lẻ, trung vị là giá trị vị trí `(n+1)/2`; với `n` chẵn, trung vị bằng trung bình cộng của hai giá trị ở vị trí `n/2` và `n/2+1`. Trung vị thường ít nhạy với một giá trị ngoại lệ so với số trung bình; không được tính trung vị trực tiếp từ dãy chưa sắp xếp.

### KT-B13-03 · Tứ phân vị theo SGK KNTT (D1)

Sau khi sắp xếp, đặt `Q2` bằng trung vị của mẫu. `Q1` là trung vị của **nửa số liệu bên trái**, `Q3` là trung vị của **nửa số liệu bên phải**; với `n` **lẻ**, bỏ phần tử trung vị `Q2` khi chia nửa. Với `n` chẵn, chia thành hai nửa bằng nhau. Tứ phân vị phục vụ mô tả vị trí phân bố; **khoảng tứ phân vị `Q3−Q1` thuộc chiều D1 của Bài 14**, không chuyển thành Core bắt buộc B13 nếu nguồn S1 không đưa vào. Người học nên nắm thao tác sắp xếp và xử lí số liệu lẻ/chẵn.

### KT-B13-04 · Mốt, tần số và lựa chọn chỉ số trung tâm (D1)

**Mốt (Mo)** là giá trị có tần số lớn nhất; nếu nhiều giá trị cùng có tần số lớn nhất thì cần nêu chúng theo quy ước SGK (có thể có nhiều mốt), không tự chọn một giá trị duy nhất. **Số trung bình** phản ánh mức bình quân, **trung vị** phản ánh vị trí giữa, **mốt** phản ánh giá trị xuất hiện phổ biến; chúng không thay thế nhau trong tập có giá trị bất thường hoặc có độ lệch. Reviewer kiểm chứng trường hợp tần số đồng đều (có mốt hay không) đúng SGK gốc; không suy diễn Core nâng cao từ bài tham khảo.

### EX-B13-01 · Trung bình, trung vị, mốt trên cùng dãy (D2)

**Đề:** Cho dữ liệu điểm `2, 4, 4, 6, 9`. Tính ba số đo trung tâm và giải thích vì sao khác nhau.  
**Giải:** Tổng `2+4+4+6+9=25`, `n=5`, `x̄=25/5=5`. Dãy đã sắp, trung vị là giá trị thứ ba `Q2=4`. Tần số lớn nhất là `2` thuộc giá trị `4` ⇒ `Mo=4`.  
**Kết luận:** Trung bình `5` khác trung vị và mốt `4`; không thay số giữa bằng số xuất hiện thường xuyên mà không kiểm tra.

### EX-B13-02 · Trung vị khi mẫu có số phần tử chẵn (D2)

**Đề:** Dữ liệu chưa sắp xếp `9, 1, 4, 2, 8, 6`. Tìm trung vị và số trung bình.  
**Giải:** Sắp xếp được `1,2,4,6,8,9`; `n=6`. `Q2=(4+6)/2=5`. Tổng `9+1+4+2+8+6=30`, `x̄=30/6=5`.  
**Kết luận:** Trong ví dụ này trung vị và trung bình cùng bằng `5`, nhưng **không phải lúc nào cũng bằng nhau**.

### EX-B13-03 · Mẫu cho dưới dạng bảng tần số (D2)

**Đề:** Một bảng thống kê thời gian (phút) có các giá trị `2` xuất hiện 1 lần, `4` xuất hiện 3 lần và `6` xuất hiện 2 lần. Tính số trung bình, trung vị, mốt.  
**Giải:** Tổng mẫu `n=1+3+2=6`. Tổng các giá trị `2·1+4·3+6·2=26`; `x̄=26/6=13/3≈4,3333` phút. Mẫu sắp là `2,4,4,4,6,6`; hai vị trí thứ 3 và 4 đều bằng `4` ⇒ `Q2=4`. Giá trị `4` có tần số lớn nhất `3` ⇒ `Mo=4`.  
**Kết luận:** Khi có bảng tần số vẫn tính theo **tổng số lần xuất hiện**, không chia cho số nhóm giá trị `3`.

### EX-B13-04 · Tứ phân vị n lẻ (D2)

**Đề:** Cho dữ liệu đã sắp `1,2,3,4,6,8,10,12,15`. Tìm `Q1,Q2,Q3` theo quy ước SGK.  
**Giải:** `n=9`, trung vị `Q2` là số thứ 5: `6`. Bỏ phần tử giữa. Nửa trái `1,2,3,4` ⇒ `Q1=(2+3)/2=2,5`. Nửa phải `8,10,12,15` ⇒ `Q3=(10+12)/2=11`.  
**Kết luận:** Bộ ba tứ phân vị là `(2,5;6;11)`, được tính trên dãy đã sắp xếp.

### EX-B13-05 · Trường hợp có giá trị lớn bất thường (D2)

**Đề:** Hai bảng ghi nhận số sản phẩm/buổi gồm `4,5,5,6,100` và `4,5,5,6,5`. Tính trung bình/trung vị của mỗi mẫu, chọn chỉ số mô tả một ngày điển hình khi mẫu đầu có giá trị lớn bất thường.  
**Giải:** Mẫu A tổng `120`, `x̄_A=24`; trung vị `5`. Mẫu B tổng `25`, `x̄_B=5`; trung vị `5`. Nếu quan tâm mức ngày thông thường của A, trung vị `5` mô tả gần hơn các ngày điển hình; trung bình `24` bị số `100` kéo lên.  
**Kết luận:** Lựa chọn chỉ số dựa trên **bối cảnh và mục đích**, không mặc định một số đo luôn tốt nhất.

## D. Kiểm soát nguồn, độ sâu và nguyên tắc đánh giá

- **D1 (8 mô-đun):** `KT-B12-01..04`, `KT-B13-01..04`. **D2 (10 ví dụ):** `EX-B12-01..05`, `EX-B13-01..05`. **Outcomes:** 10 mã ứng viên (5 B12 + 5 B13), chờ NotebookLM S1 xác minh.
- Mỗi bài có định nghĩa, điều kiện, công thức, ý nghĩa, ví dụ tự giải, ứng dụng; nguồn S2 để định hướng lập bản thảo, **không được ghi là SOURCE_RECEIPT S1**. Bộ kiểm tra nội bộ chỉ xác nhận phép tính số học mẫu, không cấp Academic PASS.
- Tứ phân vị theo quy ước **loại bỏ trung vị khi n lẻ** phải được NotebookLM kiểm tra với SGK S1, nhất là `KT-B13-03` / `EX-B13-04`. B12 cần xác minh cụ thể quy tắc độ chính xác `d` và quy tròn khi có độ chính xác d đã cho (không suy diễn từ số chữ số). Nếu khác yêu cầu S1 Core, đề nghị `HOLD` đúng ID, ghi `DELTA_C` khi cần sửa bản chất toán học.
- **Không có ngân hàng câu hỏi D3–D4 hoặc câu `SGK_CHAPTER_READINESS` trong packet này.** Readiness cuối chương phải chờ đủ B12–B14 D3–D4, dùng heldout mới; không lấy ví dụ này làm chứng cứ độc lập. Không có câu đề đánh giá riêng được phát hành.
- SGK là hành trình độc lập với Core/Luyện tập và bài kiểm tra cuối chương; Chuyên đề có đúng 3 phần Kiến thức/Luyện tập/Tự kiểm tra, không Core riêng. Shared canonical `item_id`/answer/solution/history cho bài luyện tập khi đặt nhiều chỗ, không nhân bản.
- Không thay đổi Golden R4, các dữ liệu/keys tiến độ, THCS, backend, Gemini/Firebase, không merge/deploy hoặc cập nhật Mastery.

## E. Đầu ra bắt buộc của NotebookLM

1. Trả `SOURCE_RECEIPT_G10_SGK`, `SOURCE_RECEIPT_G10_SBT` số trang in chính xác **B12, B13**, xác nhận nội dung S1 và mức Core.
2. `LESSON_B12_D1D2_VERDICT`, `LESSON_B13_D1D2_VERDICT`, `KNOWLEDGE_REGISTER=8`, `EXAMPLE_REGISTER=10`, `OUTCOME_ALIGNMENT=10`; kiểm tra cụ thể quy tắc tứ phân vị, trung bình, trung vị, mốt, quy tròn với độ chính xác d, định nghĩa sai số tương đối.
3. Trả `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G10_CHV_B12_B13_D1D2`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO` và HOLD theo đúng ID có sai khác.
4. Giữ nguyên PASS ChIV D1–D5/Readiness theo từng gói, không cấp PASS cho B14, D3–D4, Chapter V Readiness hoặc quyền phát hành.
