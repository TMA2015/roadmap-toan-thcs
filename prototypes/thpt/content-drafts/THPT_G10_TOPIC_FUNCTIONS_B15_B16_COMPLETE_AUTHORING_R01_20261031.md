# Toán 10 KNTT · Chuyên đề Hàm số và đồ thị — giai đoạn lớp 10, bản tác giả R01

PACKET_ID: THPT-G10-TOPIC-FUNCTIONS-B15-B16-SELF-CONTAINED-R01-20261031
LEARNING_PATH: TOPIC
ACADEMIC_STATUS: AUTHOR_QA_CANDIDATE_NOT_NOTEBOOKLM_REVIEWED
SOURCE_AUTHORITY: SGK KNTT Toán 10 Tập 2, B15 trang in 4–10, B16 trang in 11–18; SBT Tập 2, B15 trang in 3–9, B16 trang in 10–15.
ARCHITECTURE: Dual Complete Learning Paths v2.0; ba phần học sinh: Kiến thức / Luyện tập / Tự kiểm tra; không tạo Core riêng.
SCOPE: Nền tảng Hàm số và đồ thị lớp 10 B15–B16 (tập xác định, giá trị, tính đơn trị, biểu diễn, biến thiên, parabol và mô hình). Chưa tuyên bố bao trùm hàm số lớp 11–12, B17 dấu tam thức hay B18 phương trình căn.

## I. Đối chiếu outcome chuẩn và nguồn có thể tái sử dụng

| Topic outcome | Bản chất cần tự học/đánh giá | SGK gốc | Shared outcome (KHÔNG sinh item mới) |
|---|---|---|---|
| TOP-G10-FUNC-O01 | Hàm số: mỗi x đúng một y; nhận biết bảng/quan hệ/đồ thị | B15 §1–2 | B15_OUT_01 |
| TOP-G10-FUNC-O02 | Tập xác định và tập giá trị, điều kiện căn/mẫu | B15 §1 | B15_OUT_02 |
| TOP-G10-FUNC-O03 | Điểm trên đồ thị, đọc đồ thị/bảng, không ngoại suy thiếu dữ liệu | B15 §2 | B15_OUT_03 |
| TOP-G10-FUNC-O04 | Phân tích đồng biến/nghịch biến trên đúng khoảng | B15 §3 | B15_OUT_04 |
| TOP-G10-FUNC-O05 | Hàm từng đoạn/mô hình, miền ngữ cảnh/đơn vị và điểm ghép | B15 §2–3 | B15_OUT_05 |
| TOP-G10-FUNC-O06 | Nhận biết hàm số bậc hai, hệ số a ≠ 0 và miền xác định | B16 §1 | B16_OUT_01 |
| TOP-G10-FUNC-O07 | Dạng đỉnh, tọa độ đỉnh, trục đối xứng | B16 §2 | B16_OUT_02 |
| TOP-G10-FUNC-O08 | Hình dạng parabol, giao trục, điểm đối xứng, Δ | B16 §2–3 | B16_OUT_03 |
| TOP-G10-FUNC-O09 | Chiều biến thiên, cực trị/tập giá trị (cả miền hạn chế) | B16 §2 | B16_OUT_04 |
| TOP-G10-FUNC-O10 | Chọn biến/miền/đơn vị, tối ưu mô hình bậc hai | B16 §3–5 | B16_OUT_05 |

**Nguyên tắc nguồn:** liên kết SGK là hỗ trợ, không thay thế lý thuyết ở Chuyên đề. Một item canonical có nhiều placement (SGK Core, SGK Practice, Topic Practice) nhưng KHÔNG nhân bản ID/stem/key/rubric. Tự kiểm tra Topic sử dụng bộ đề riêng chưa tiếp xúc, không tái dùng đề SGK Readiness R0/R1 hoặc ví dụ đã thấy.

## II. D1 — Kiến thức độc lập

### Mảng A. Hàm số, đầu vào và đầu ra

Hàm số f trên D là quy tắc gán cho mỗi x thuộc D **duy nhất một** số thực f(x). Các đầu vào khác nhau được phép cùng một đầu ra; đây không phải điều kiện *đơn ánh*. Tập xác định D là tập đầu vào hợp lệ; tập giá trị T={f(x) | x thuộc D} gồm các giá trị đầu ra thực sự nhận được. Một quan hệ có hai giá trị y khác nhau ứng với cùng x không phải đồ thị hàm số. Đồ thị là tập điểm (x;f(x)), và điểm (u;v) thuộc đồ thị khi u thuộc D, v=f(u).

Hàm có thể được cho qua bảng, công thức, hình vẽ hoặc mô tả theo miền. Chỉ suy được những giá trị mà nguồn đã cung cấp; không tự nội suy số liệu đo chưa có mô hình. Nếu có biểu thức căn √A(x), yêu cầu A(x)≥0; nếu có mẫu B(x), yêu cầu B(x)≠0; hàm mô hình thực tế còn bị giới hạn bởi điều kiện đại lượng (thời gian, khoảng cách, số lượng). Tập xác định là **giao** mọi điều kiện.

### Mảng B. Tính biến thiên và hàm từng đoạn

Hàm f đồng biến trên khoảng K nếu với mọi x1<x2 thuộc K ta có f(x1)<f(x2); nghịch biến nếu f(x1)>f(x2). Không kết luận một hàm tăng trên toàn D chỉ từ hai điểm đo, hoặc ghép hai khoảng rời nhau thành một kết luận không kiểm chứng. Với hàm từng đoạn, chọn công thức theo điều kiện của x; chú ý các dấu <, ≤ tại điểm nối. Với mô hình phải ghi rõ đơn vị x, f(x) và miền thực tế; các kết quả bên ngoài miền đó không có nghĩa thực tế.

### Mảng C. Hàm số bậc hai và hình học đồ thị

Hàm số bậc hai: f(x)=ax²+bx+c, a,b,c thực, **a≠0**; tập xác định toán học là ℝ. Đặt h=−b/(2a), Δ=b²−4ac, k=f(h)=−Δ/(4a). Viết f(x)=a(x−h)²+k. Parabol có đỉnh I(h;k), trục x=h, hướng mở lên nếu a>0, xuống nếu a<0. Điểm cắt Oy luôn là (0;c). Các giao Ox là các nghiệm thực của ax²+bx+c=0: Δ<0 thì không giao; Δ=0 thì tiếp xúc; Δ>0 thì hai giao điểm phân biệt.

Khi a>0: f nghịch biến trên (−∞;h), đồng biến trên (h;+∞), có GTNN k và T=[k;+∞). Khi a<0: f đồng biến trên (−∞;h), nghịch biến trên (h;+∞), có GTLN k và T=(−∞;k]. Khi hàm được xét trên đoạn [u;v], cực trị trong miền đó phải xét các đầu mút và đỉnh nếu h∈[u;v], **không tự lấy k nếu đỉnh ở ngoài miền**. Đồ thị dựng bằng đỉnh, trục, cặp điểm đối xứng và giao trục (nếu có); một mô hình có thể dùng chỉ một phần parabol.

### Mảng D. Mô hình ứng dụng

Đặt biến và đơn vị trước khi biến đổi. Viết biểu thức từ dữ kiện, xác định miền chấp nhận (đặc biệt số lượng nguyên, thời gian ≥0, chiều dài >0), tìm GTLN/GTNN trên **miền hợp lệ**, kiểm kết quả và giải thích theo ngữ cảnh. Kết luận cần kèm đơn vị; không kéo dài đồ thị bậc hai ra miền phi thực tế chỉ để lấy cực trị.

## III. D2 — Ví dụ có lời giải đầy đủ (8 ví dụ)

**VD01 – Quan hệ bảng có x lặp.** Dữ liệu (0;2),(1;4),(1;4),(3;9) vẫn là hàm số: mọi đầu vào có cùng một đầu ra dù cặp (1;4) lặp. D={0,1,3}, T={2,4,9}. Nếu thay cặp cuối bằng (1;8), quan hệ không còn đơn trị.

**VD02 – Miền xác định nhiều điều kiện.** f(x)=√(x+2)/(x−1). Điều kiện x≥−2 và x≠1; D=[−2;+∞)\{1}. Không quên x=−2 được phép vì căn bằng 0.

**VD03 – Đọc điểm trên đồ thị.** Với f(x)=|x−3|+2, A(1;4) thuộc vì f(1)=4; B(4;4) không thuộc vì f(4)=3. Tập giá trị [2;+∞) trên ℝ.

**VD04 – Hàm từng đoạn.** P(x)=5x khi 0≤x≤3, và P(x)=15+4(x−3) khi x>3 (nghìn đồng). P(3)=15 dùng nhánh đầu, P(5)=23 dùng nhánh sau. Miền x≥0; tại x=3 không được dùng dấu x>3.

**VD05 – Đưa về dạng đỉnh.** f(x)=2x²−8x+3=2(x−2)²−5; I(2;−5), trục x=2, GTNN −5, tập giá trị [−5;+∞), nghịch biến trước x=2, đồng biến sau x=2.

**VD06 – Không giao Ox.** f(x)=x²−6x+11=(x−3)²+2; đỉnh (3;2), mở lên. Δ=36−44=−8<0 nên không cắt Ox; đồ thị đi qua (0;11), (6;11) đối xứng qua x=3.

**VD07 – Cực trị trên đoạn không chứa đỉnh.** f(x)=−(x−5)²+20 trên D=[0;3]. Đỉnh tại x=5 nằm ngoài D. Hàm đồng biến trên [0;3], nên min f(0)=−5, max f(3)=16; không lấy 20 làm GTLN trong mô hình.

**VD08 – Tối ưu với số lượng nguyên.** Một mô hình lợi nhuận P(q)=−(q−4)²+25 (triệu đồng), q nguyên trong {0,1,…,8}. Đỉnh q=4 là giá trị nguyên khả thi nên lãi lớn nhất 25 triệu đồng tại q=4. Nếu miền hợp lệ đổi thành {0,1,2,3}, phải xét lại biên q=3: P(3)=24 triệu đồng, không thể áp dụng máy móc giá trị đỉnh q=4.

## IV. D3/D4 — Luyện tập theo kỹ năng và cấp độ (canonical reuse)

**Mức CƠ BẢN (B15):** `THPT-G10-B15-C01` (FUNCTION_MAPPING), `THPT-G10-B15-C02` (FUNCTION_DOMAIN), `THPT-G10-B15-P01` (FUNCTION_DOMAIN). Học sinh làm lại chính câu SGK với role TOPIC_PRACTICE, không cấp ID khác.

**Mức HIỂU/CỦNG CỐ:** `THPT-G10-B15-P03` (FUNCTION_MONOTONICITY), `THPT-G10-B15-P02` (FUNCTION_PIECEWISE, ghi chú câu này đã xuất hiện trong Knowledge), `THPT-CORE-QF01` (B16 đỉnh, SGK R4 pilot), `PRACTICE-THPT-DEMO-01` (B16 giao Ox, R4 demo). Đánh dấu hai thẻ B16 là demo trình bày, **không dùng làm evidence Mastery**.

**Mức VẬN DỤNG:** `THPT-G10-B15-P04` (FUNCTION_MODELING), ứng dụng parabol trong B16 và bài tự luận dưới đây. Không công bố số câu đạt Mastery từ các câu đã từng hiển thị lời giải.

**Written/Anchor – một thư viện nguồn duy nhất:** `HPT-G10-CHVI-WRI-15-01` (bảng, đồ thị), `HPT-G10-CHVI-WRI-15-02` (mô hình từng khoảng, Anchor), `HPT-WRI-DEMO-01` (đỉnh/trục), `HPT-WRI-DEMO-ANCHOR-01` (hình chữ nhật, Anchor). Không sửa lời giải/rubric gốc. Khi học, học sinh tự làm giấy, mở rubric để tự đối chiếu; kết quả không tự cộng Skill Mastery.

**Kỹ năng chưa đủ độ sâu bằng câu public hiện có:** phản biện diễn giải hình parabol không giao Ox và tối ưu trên đoạn không chứa đỉnh. VD06–VD08 cung cấp bản mẫu đầy đủ trong Kiến thức; trước phát hành chuyên đề cần QA tính đủ độ sâu D3 mà không lấy số lượng câu làm thay thế. Không nhân bản các VD thành item mới chỉ để tăng đếm.


### D3 bổ sung — 6 item canonical **mới**, chưa NotebookLM review

Đây là 6 câu **Topic Practice mới thực sự** cho các kỹ năng còn thiếu chiều sâu; mỗi câu chỉ có **một** `item_id` mới, không phải bản sao câu SGK. Có thể hiện gợi ý khi học sinh chọn xem trong Luyện tập, tuyệt đối không dùng các câu này làm chứng cứ đánh giá độc lập. Toàn bộ 6 câu đi cùng gói review chuyên đề R01, không tách vòng riêng.

- **`THPT-G10-TOP-FUNC-P01` · TOP-O03 · Cơ bản — kiểm tra điểm.** Cho `f(x)=3−|x−1|` trên ℝ. Hãy tính `f(4)` và kiểm tra `A(4;0)` có thuộc đồ thị không. **Gợi ý:** thay x vào biểu thức trị tuyệt đối. **Lời giải:** `f(4)=3−3=0`; vậy `A(4;0)` thuộc đồ thị.
- **`THPT-G10-TOP-FUNC-P02` · TOP-O06 · Cơ bản — nhận diện bậc hai.** `f_m(x)=(m−2)x²+(m+1)x+5` là hàm bậc hai với điều kiện nào? **Gợi ý:** hệ số a của x². **Lời giải:** `a=m−2`, cần `m≠2`.
- **`THPT-G10-TOP-FUNC-P03` · TOP-O07 · Thông hiểu — dạng đỉnh.** `f(x)=3x²+12x+7`. Tìm đỉnh, trục đối xứng và GTNN. **Gợi ý:** hoàn thành bình phương. **Lời giải:** `f(x)=3(x+2)²−5`, đỉnh `I(−2;−5)`, trục `x=−2`, GTNN `−5`.
- **`THPT-G10-TOP-FUNC-P04` · TOP-O08 · Thông hiểu — giao trục.** `f(x)=−x²+6x−5`. Xác định đỉnh, giao Ox/Oy và chiều mở. **Gợi ý:** đưa về dạng đỉnh và giải f(x)=0. **Lời giải:** `f(x)=−(x−3)²+4`; đỉnh `(3;4)` mở xuống, giao Ox `(1;0),(5;0)`, giao Oy `(0;−5)`.
- **`THPT-G10-TOP-FUNC-P05` · TOP-O09 · Vận dụng — miền hạn chế.** `f(x)=(x+2)²−4` chỉ xét trên `D=[−1;2]`. Tìm GTLN, GTNN và tập giá trị. **Gợi ý:** hoành độ đỉnh là −2, ngoài D. **Lời giải:** f tăng trên D, GTNN=f(−1)=−3, GTLN=f(2)=12, tập giá trị `[−3;12]`.
- **`THPT-G10-TOP-FUNC-P06` · TOP-O10 · Vận dụng — mô hình.** Nhiệt độ theo mô hình `T(t)=(t−2)²+18` (°C), chỉ khảo sát `0≤t≤4` giờ. Hãy tìm nhiệt độ cao nhất/thấp nhất và thời điểm tương ứng. **Gợi ý:** xét đỉnh và hai đầu mút. **Lời giải:** GTNN `18°C` tại t=2; GTLN `22°C` tại t=0 hoặc t=4. Đây chỉ là mô hình giả định, không ngoại suy ngoài miền đã cho.

**D3 nguồn chốt cho gói R01:** 6 B15 item đã review dùng chung; 2 B16 R4 nguồn cũ (demo UI, không tạo Mastery); **6 Topic Practice mới** cần NotebookLM xem xét cùng toàn gói; 4 Written/Anchor dùng chung, không chép riêng.

## V. D5 — Hình/đồ thị và chứng cứ

Tái sử dụng **hình parabol SGK B16** trong `docs/thpt-preview/sgk/chuong-vi/bai-16.md` (`data-thpt-quadratic-plot`), cùng source điểm I(2;−1), trục x=2, giao Ox x=1,3, Oy y=3; không tạo SVG nhái, không sao chép JS. Trong kiến thức Topic độc lập, định nghĩa đầy đủ các điểm và hướng mở ngay tại trang kiến thức, hình chỉ minh họa thêm.

Bảng B15 cho ví dụ dữ liệu đầu vào và bảng biến thiên B16 dùng biểu diễn Markdown có thể đọc độc lập khi hình vẽ không tải. Kiểm tra sau tích hợp: alt/aria, nhãn trục, responsive desktop/mobile, MathJax, không đổi Golden R4 hoặc THCS. D5 source reviewed của B16 không tự biến thành Academic PASS cho diễn giải mới của Topic.

## VI. D6 — Hỗ trợ khắc phục lỗ hổng (reused, original 5-step texts not cloned)

- `HELP-G10-B15-01` → TOP-O01/O03 → lỗi nhầm đơn ánh với tiêu chí hàm số; quay lại `THPT-G10-B15-C01`.
- `HELP-G10-B15-02` → TOP-O02/O04/O05 → lỗi miền xác định, nhánh, khoảng biến thiên; B15-C02/P01/P02/P03/P04.
- `HELP-G10-B16-01` → TOP-O06/O07/O09 → lỗi trục đỉnh, dấu a, chiều biến thiên; dùng B16 Core/Practice R4.
- `HELP-G10-B16-02` → TOP-O08/O10 → lỗi vẽ parabol và chọn sai miền thực tế; dùng hình SVG và ví dụ B16 đã review.

Chỉ tham chiếu **đúng 4 thẻ D6 đã được NotebookLM PASS** trên source `THPT_G10_CHVI_B15_B18_D6_A5_GAP_R01_EXACT_SNAPSHOT.md` (branch authoring #642); không biên soạn 4 bản thứ hai. D6 xuất hiện trong Knowledge/Practice khi học sinh yêu cầu, **không hiện trong Topic Readiness trước Final Submit**.

## VII. Cổng Topic Readiness — blueprint học thuật R01

- Đánh giá **riêng TOPIC_READINESS_G10_FUNCTIONS**, không cộng sang `SGK_CHAPTER_READINESS` của ChVI.
- 10 outcome từ TOP-O01..10, **12 câu held-out mới** (12 canonical ID) được lưu trong kho riêng, không public lên GitHub; không dùng lại các stem/đáp án từ các câu luyện tập/SGK RD1 đã thấy.
- 12 câu có giải thích và rubric (có câu tích hợp nhiều kỹ năng) (mức độ phải được NotebookLM kiểm tra, không tự tuyên bố cấu trúc độc lập tuyệt đối).
- Không gợi ý, lời giải, đáp án hay đúng/sai trước Final Submit. Chỉ có phản hồi sau khi chốt; Demo không được ghi điểm hay Mastery. Cơ chế chấm và bảo vệ đề do nhánh phát hành thiết kế/QA riêng, không có trạng thái production từ tài liệu này.

## VIII. Cổng học thuật/handoff cuối gói

- **QA tác giả hiện hành:** D1–D6 và 10 outcome được biên soạn cho phạm vi B15–B16, 8 ví dụ minh họa, 8 Core/Practice items reused + 6 new Topic Practice candidates, 4 Written reused và 4 D6 reused; 12 Topic held-out candidates trong **private** review packet. Không tuyên bố đây là vertical Topic hoàn chỉnh xuyên 10–12.
- **NotebookLM:** một gói R01 duy nhất review **toàn bộ Topic grade-10 slice** D1–D6 + RD0 + 12 RD1, trả verdict theo outcome và item; không review lặp lại SGK gốc. Chỉ sau PASS đúng snapshot mới được chuyển `ACADEMIC_SOURCE_READY`.
- **Phát hành:** KHÔNG merge/deploy, KHÔNG sửa web/tiến độ học sinh, KHÔNG kích hoạt Topic Readiness/Mastery. Topic menu vẫn chính xác 3 phần: Kiến thức / Luyện tập / Tự kiểm tra.
