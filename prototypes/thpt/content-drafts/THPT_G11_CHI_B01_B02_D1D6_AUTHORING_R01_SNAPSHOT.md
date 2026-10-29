# Temp · Toán 11 KNTT Tập 1 · Chương I · Bài 1–2 · D1–D6 học liệu mới · R01

**PACKET_ID:** `THPT-G11-CHI-B01-B02-D1D6-AUTHORING-20261029-R01`  
**STATUS:** `CANDIDATE_DELTA_C_ACADEMIC_MATERIAL / NOTEBOOKLM_NOT_REVIEWED / NO_RELEASE`  
**LEARNING_PATH:** `SGK_CHAPTER` (không chứng nhận `FULL_LEARNING_PATH`, chưa tạo chương Tự kiểm tra).  
**PERMANENT_SOURCES:** đúng 5 nguồn THPT v2.0 của NotebookLM, không dùng v1.0.  
**OWNERSHIP:** Nhánh biên soạn học liệu; không tích hợp JS, giao diện, server, Mastery hay deploy.  
**SOURCE:** Tập SGK/SBT Toán 11 KNTT trên Drive do chủ dự án cung cấp; đã xem trực tiếp bản scan PDF, không tự nhận thẩm quyền kiểm toán NotebookLM.

## 1. Biên nhận S1 và giới hạn phạm vi

**Nguồn SGK:** Toán 11 KNTT tập 1, Chương I “Hàm số lượng giác và phương trình lượng giác”, **Bài 1 tr.5–16**, **Bài 2 tr.17–21**, Bài 3 tr.22–30, Bài 4 tr.31–39, ôn cuối chương tr.40–41 (theo mục lục bản PDF). Sách lưu trên Drive mục `KNTT TOAN 11`, file `sach-giao-khoa-toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song (2).pdf`. **Nguồn SBT:** Toán 11 KNTT tập 1, Bài 1 tr.4–7; Bài 2 tr.8–10, theo mục lục SBT và đối chiếu trang chụp trực tiếp. Biên nhận trang là tác giả quan sát; yêu cầu NotebookLM kiểm tra lại phạm vi và độ chính xác từng mục bằng PDF S1.

**Phạm vi lô này:** chỉ Bài 1–2, không đụng Bài 3 (đồ thị/chu kì hàm số) hoặc Bài 4 (giải phương trình lượng giác cơ bản). Các công thức lượng giác liên quan được sử dụng để biến đổi và tính giá trị, **không** thêm dạng phương trình lượng giác tổng quát vào SGK Core B01–02. Hệ số lượng giác có điều kiện xác định. Câu hỏi đều do dự án tự biên soạn, không chép nguyên văn ví dụ SGK/SBT.

**Trạng thái câu và ID:** 16 `item_id` mới đề xuất (14 formative + 2 Written, một Anchor là nhãn của Written); 4 `HELP_ID` độc lập không phải item_id; 2 `FIG_ID` độc lập. Các ID được **đề xuất**, chưa đăng ký vào ngân hàng canonical đang phát hành và chưa qua đối chiếu trùng lặp toàn repo.

## 2. Ma trận mục tiêu và nguồn S1

| Outcome ID | Mục tiêu | Bằng chứng câu/kiến thức |
|---|---|---|
| `G11-B01-DEG_RAD` | Đổi độ–radian và đo góc có hướng | B01-C01 |
| `G11-B01-TRIG_UNIT_CIRCLE` | Giá trị sin/cos/tan/cot trên đường tròn lượng giác | B01-C02, B01-W01 |
| `G11-B01-TRIG_IDENTITIES` | Hệ thức cơ bản và dấu theo góc phần tư | B01-P01, B01-P04 |
| `G11-B01-PERIODIC_REDUCTION` | Góc cùng phương và chu kì của giá trị lượng giác | B01-P02 |
| `G11-B01-ARC_LENGTH` | Góc radian và độ dài cung | B01-P03, B01-W01 |
| `G11-B01-RELATED_ANGLES` | Góc đối, bù, phụ, hơn kém π và dấu | D1 Bài 1 / EX-G11-B01-02 |
| `G11-B02-SUM_DIFFERENCE` | Công thức cộng/trừ, điều kiện với tan | B02-C01, B02-P01,P02,P03 |
| `G11-B02-DOUBLE_ANGLE` | Góc nhân đôi và hệ quả | B02-C02, B02-P06 |
| `G11-B02-PRODUCT_TO_SUM` | Tích thành tổng | B02-P04, B02-W02 |
| `G11-B02-SUM_TO_PRODUCT` | Tổng thành tích | B02-P05 |

## 3. D1–D2 · Kiến thức và ví dụ tự học

### Bài 1. Giá trị lượng giác của góc lượng giác

**D1.1 Góc lượng giác và số đo.** Một góc lượng giác ghi lại cả tia đầu, tia cuối và chiều quay: ngược chiều kim đồng hồ lấy dương, cùng chiều lấy âm. Hai góc cùng tia đầu/tia cuối có thể chênh nhau một số nguyên lần `360°` hoặc `2π` rad. `180° = π rad`, nên `α rad = α·180°/π`, `x° = xπ/180 rad`. Khi chỉ xét vị trí cuối trên đường tròn lượng giác có thể quy về một đại diện trong `[0,2π)`, nhưng **không được xóa ý nghĩa số vòng quay** nếu bài toán hỏi quãng đường chuyển động.

**D1.2 Radian, độ dài cung.** Với bán kính `R>0`, góc ở tâm có độ lớn `|α|` rad chắn cung có độ dài `s=R|α|` (cung đi theo số lần quay được mô tả). Không dùng trực tiếp độ cho công thức này; góc 180° chắn cung nửa đường tròn dài `πR`.

**D1.3 Đường tròn lượng giác.** Gắn O với gốc tọa độ, bán kính đơn vị, điểm cuối `M=(cos α,sin α)` trên đường tròn khi quay từ trục Ox dương. Do đó `sin²α+cos²α=1` với mọi α. Dấu của sin/cos phụ thuộc góc phần tư, không phụ thuộc việc chỉ nhớ số dương của góc tham chiếu.

**D1.4 Các giá trị và điều kiện.** `tan α=sin α/cos α` **chỉ khi cos α ≠ 0**; `cot α=cos α/sin α` **chỉ khi sin α ≠ 0**. Từ đẳng thức cơ bản có `1+tan²α=1/cos²α` trên miền `cos α ≠ 0` và `1+cot²α=1/sin²α` trên miền `sin α ≠ 0`. Sin/cos chu kì 2π; tan/cot chu kì π khi xác định.

**D1.5 Góc liên quan đặc biệt.** `sin(−α)=−sinα`, `cos(−α)=cosα`, `sin(π−α)=sinα`, `cos(π−α)=−cosα`, `sin(π+α)=−sinα`, `cos(π+α)=−cosα`. Với góc phụ: `sin(π/2−α)=cosα`, `cos(π/2−α)=sinα`. Mọi hệ thức tan/cot cần kiểm điều kiện mẫu khác 0. Bảng giá trị `0,π/6,π/4,π/3,π/2` là tiền đề cần học sinh tự tái dựng trên đường tròn, không chỉ học thuộc.

**D2 · EX-G11-B01-01 — đổi góc có hướng.** Đổi `−150°` sang radian: `−150°×π/180°=−5π/6`; một đại diện đồng tia cuối trong `[0,2π)` là `7π/6`. Cần phân biệt “góc lượng giác −5π/6” (thể hiện chiều quay âm) với “vị trí cuối 7π/6” (chỉ xác định tia cuối).

**D2 · EX-G11-B01-02 — góc liên quan.** Tại `α=5π/6`, sin dương, cos âm vì góc phần tư II; `sin(5π/6)=sin(π−π/6)=1/2`, `cos(5π/6)=−cos(π/6)=−√3/2`. Từ đây tan là tỉ số âm và xác định, không lấy dấu từ góc tham chiếu một cách máy móc. FIG01 diễn tả vị trí M trên đường tròn.

**D2 · EX-G11-B01-03 — độ dài cung.** Bánh xe bán kính `30 cm` quay góc `−2π/3 rad`; độ dài cung quét trên vành là `30×|−2π/3|=20π cm`. Dấu trừ chỉ chiều quay, không làm độ dài âm. Nếu xe quay qua hơn một vòng, tổng quãng đường phải dùng độ lớn góc quay **thực tế**, không chỉ góc quy về `[0,2π)`.

### Bài 2. Công thức lượng giác

**D1.1 Công thức cộng và trừ.** `cos(u±v)=cosu cosv ∓ sinu sinv`; `sin(u±v)=sinu cosv ± cosu sinv`. Các biểu thức sin,cos luôn xác định với u,v thực. Không thay `sin(u+v)` bằng `sin u+sin v`. Khi dùng `tan(u±v)=(tan u±tan v)/(1∓tan u tan v)`, cần **tan u, tan v đều xác định** và mẫu số khác 0; nếu không, nên dùng sin/cos trực tiếp.

**D1.2 Công thức nhân đôi.** `sin2u=2sin u cos u`; `cos2u=cos²u−sin²u=2cos²u−1=1−2sin²u`; `tan2u=2tan u/(1−tan²u)` chỉ khi mọi giá trị tan trong biểu thức xác định và `1−tan²u≠0`.

**D1.3 Tích thành tổng.** `2sin u sin v=cos(u−v)−cos(u+v)`, `2cosu cosv=cos(u−v)+cos(u+v)`, `2sin u cos v=sin(u+v)+sin(u−v)`. Quy tắc dấu không tự hoán đổi giữa sin·sin và cos·cos.

**D1.4 Tổng thành tích.** `sin u+sin v=2sin((u+v)/2)cos((u−v)/2)`; `sin u−sin v=2cos((u+v)/2)sin((u−v)/2)`; `cos u+cos v=2cos((u+v)/2)cos((u−v)/2)`; `cos u−cos v=−2sin((u+v)/2)sin((u−v)/2)`. Phải dùng **nửa tổng / nửa hiệu**, không phải tổng / hiệu đơn thuần.

**D2 · EX-G11-B02-01 — lỗi cộng từng sin.** Tính `sin(π/3+π/6)=sinπ/2=1`. Theo công thức cộng: `(√3/2)(√3/2)+(1/2)(1/2)=1`. Trong khi `sinπ/3+sinπ/6=(√3+1)/2`, khác 1: đây là hai biểu thức khác nhau. FIG02 mô tả ba tia tại 30°, 60°, 90°.

**D2 · EX-G11-B02-02 — nhân đôi.** Nếu `cos u=3/5`, `sin u=4/5`, thì `cos2u=9/25−16/25=−7/25`, `sin2u=24/25`. Dấu phụ thuộc vị trí của 2u, không chỉ của u; tự kiểm `(−7/25)²+(24/25)²=1`.

**D2 · EX-G11-B02-03 — tích thành tổng.** `2cos75° cos15°=cos90°+cos60°=1/2`. Không được lấy sin75°·sin15° và cho cùng công thức cộng dấu “+”.

**D2 · EX-G11-B02-04 — tổng thành tích.** `cos75°+cos15°=2cos45°cos30°=√6/2`. Với các góc cho bằng độ, toàn bộ biểu thức phải dùng độ; tránh lẫn `π` rad với số đo độ trong cùng phép tính không đổi đơn vị.

## 4. D3 · Formative Core/Practice và lời giải chuẩn — 14 canonical candidates

**Quy tắc:** luyện tập có thể mở hint và xem lời giải sau khi tự làm; không ghi Skill Mastery tự động. Không được lấy nguyên câu đã xem lời giải để làm chứng cứ độc lập `SGK_CHAPTER_READINESS` hoặc `TOPIC_READINESS`.

### THPT-G11-B01-C01 — SGK_CORE · G11-B01-DEG_RAD · BASIC

**Đề:** Đổi góc 135° sang radian và xác định góc nằm ở góc phần tư nào trong [0,2π).

**Đáp án:** 3π/4 rad; góc phần tư II.

**Gợi ý:** Lấy 135×π/180, rồi so với π/2 và π.

**Lời giải:** 135°×π/180°=3π/4. Vì π/2<3π/4<π nên góc ở góc phần tư II.

### THPT-G11-B01-C02 — SGK_CORE · G11-B01-TRIG_UNIT_CIRCLE · BASIC

**Đề:** Tính sin(5π/6), cos(5π/6), tan(5π/6) và cot(5π/6).

**Đáp án:** 1/2; −√3/2; −√3/3; −√3.

**Gợi ý:** 5π/6 nằm ở góc phần tư II; góc tham chiếu π/6.

**Lời giải:** sin(5π/6)=1/2, cos(5π/6)=−√3/2. Vì cos và sin đều khác 0, tan=(1/2)/(−√3/2)=−√3/3; cot=−√3.

### THPT-G11-B01-P01 — SGK_PRACTICE · G11-B01-TRIG_IDENTITIES · CORE_APPLY

**Đề:** Biết sin α=3/5 và π/2<α<π. Tính cos α và tan α.

**Đáp án:** cos α=−4/5; tan α=−3/4.

**Gợi ý:** cos²α=1−sin²α; dấu cos âm ở góc phần tư II.

**Lời giải:** cos²α=1−9/25=16/25. α ở góc phần tư II nên cos α=−4/5. tan α=sin α/cos α=−3/4.

### THPT-G11-B01-P02 — SGK_PRACTICE · G11-B01-PERIODIC_REDUCTION · CORE_APPLY

**Đề:** Rút gọn góc 765° về góc cùng phương trong [0°,360°), rồi tính sin 765°.

**Đáp án:** 45°; sin 765°=√2/2.

**Gợi ý:** Trừ các bội nguyên của 360°, sau đó tính tại góc cơ bản.

**Lời giải:** 765°−2×360°=45°. sin(765°)=sin(45°)=√2/2 do chu kì 360°.

### THPT-G11-B01-P03 — SGK_PRACTICE · G11-B01-ARC_LENGTH · CORE_APPLY

**Đề:** Một cung của đường tròn có bán kính 12 cm chắn góc ở tâm 5π/6 rad. Tính độ dài cung.

**Đáp án:** 10π cm.

**Gợi ý:** Độ dài cung s=R|α| nếu α tính bằng radian và xét độ dài không âm.

**Lời giải:** s=12×5π/6=10π cm. Góc theo radian nên không cần nhân thêm π/180.

### THPT-G11-B01-P04 — SGK_PRACTICE · G11-B01-TRIG_IDENTITIES · APPLICATION

**Đề:** Biết tan α=−2 và cos α>0. Tính sin α, cos α và cot α.

**Đáp án:** sin α=−2√5/5; cos α=√5/5; cot α=−1/2.

**Gợi ý:** cos²α=1/(1+tan²α). Dấu cos dương và tan âm nên sin âm.

**Lời giải:** 1+tan²α=5 ⇒ cos²α=1/5. cos α=1/√5, sin α=tan α·cos α=−2/√5, cot α=1/tan α=−1/2.

### THPT-G11-B02-C01 — SGK_CORE · G11-B02-SUM_DIFFERENCE · BASIC

**Đề:** Dùng công thức hiệu để tính sin(π/3−π/6).

**Đáp án:** 1/2.

**Gợi ý:** sin(u−v)=sin u cos v−cos u sin v.

**Lời giải:** sin(π/3−π/6)= (√3/2)(√3/2)−(1/2)(1/2)=3/4−1/4=1/2.

### THPT-G11-B02-C02 — SGK_CORE · G11-B02-DOUBLE_ANGLE · BASIC

**Đề:** Dùng công thức góc nhân đôi để tính cos(2π/3) từ cos(π/3).

**Đáp án:** −1/2.

**Gợi ý:** cos(2u)=2cos²u−1.

**Lời giải:** cos(2π/3)=2(1/2)²−1=−1/2.

### THPT-G11-B02-P01 — SGK_PRACTICE · G11-B02-SUM_DIFFERENCE · CORE_APPLY

**Đề:** Tính chính xác sin 75° mà không dùng máy tính.

**Đáp án:** (√6+√2)/4.

**Gợi ý:** Tách 75°=45°+30°.

**Lời giải:** sin75°=sin45°cos30°+cos45°sin30°=√2/2·√3/2+√2/2·1/2=(√6+√2)/4.

### THPT-G11-B02-P02 — SGK_PRACTICE · G11-B02-SUM_DIFFERENCE · CORE_APPLY

**Đề:** Tính chính xác cos 75° bằng công thức cộng.

**Đáp án:** (√6−√2)/4.

**Gợi ý:** cos(45°+30°)=cos45°cos30°−sin45°sin30°.

**Lời giải:** cos75°=√2/2·√3/2−√2/2·1/2=(√6−√2)/4.

### THPT-G11-B02-P03 — SGK_PRACTICE · G11-B02-SUM_DIFFERENCE · CORE_APPLY

**Đề:** Không tính riêng các góc, rút gọn E=sin20°cos40°+cos20°sin40°.

**Đáp án:** √3/2.

**Gợi ý:** Nhận dạng sin(u+v).

**Lời giải:** E=sin(20°+40°)=sin60°=√3/2.

### THPT-G11-B02-P04 — SGK_PRACTICE · G11-B02-PRODUCT_TO_SUM · CORE_APPLY

**Đề:** Dùng công thức biến đổi tích thành tổng để tính 2sin75°sin15°.

**Đáp án:** 1/2.

**Gợi ý:** 2sin u sin v=cos(u−v)−cos(u+v).

**Lời giải:** 2sin75°sin15°=cos60°−cos90°=1/2−0=1/2.

### THPT-G11-B02-P05 — SGK_PRACTICE · G11-B02-SUM_TO_PRODUCT · CORE_APPLY

**Đề:** Dùng công thức biến đổi tổng thành tích để tính sin75°+sin15°.

**Đáp án:** √6/2.

**Gợi ý:** sin u+sin v=2sin((u+v)/2)cos((u−v)/2).

**Lời giải:** sin75°+sin15°=2sin45°cos30°=2·√2/2·√3/2=√6/2.

### THPT-G11-B02-P06 — SGK_PRACTICE · G11-B02-DOUBLE_ANGLE · APPLICATION

**Đề:** Cho góc α có sin α=3/5 và cos α=4/5. Tính sin2α và cos2α.

**Đáp án:** sin2α=24/25; cos2α=7/25.

**Gợi ý:** sin2α=2sinαcosα; cos2α=cos²α−sin²α.

**Lời giải:** sin2α=2·3/5·4/5=24/25; cos2α=16/25−9/25=7/25.

## 5. D4 · Written/Anchor — 2 canonical candidates, không tự chấm Mastery

**Hướng dẫn:** học sinh giải trên giấy, chủ động xem gợi ý, lời giải/rubric sau. Anchor chỉ là nhãn Written, không phải ngân hàng riêng.

### THPT-G11-CHI-W01 — Bài 1 · Written

**Đề tự luận:** Một điểm M xuất phát tại A=(20;0) trên đường tròn tâm O bán kính 20 cm, chuyển động ngược chiều kim đồng hồ một góc 5π/3 rad. (a) Tính độ dài cung đã đi. (b) Tìm tọa độ M và giải thích dấu tung độ. (c) Tính khoảng cách thẳng AM để so sánh với độ dài đường đi.

**Đáp án:** s=100π/3 cm; M=(10;−10√3) cm; AM=20 cm.

**Gợi ý không giải hộ:** Tọa độ trên đường tròn R: (Rcos α,Rsin α); AM là dây, không phải độ dài cung.

**Lời giải từng bước:** s=Rα=20·5π/3=100π/3 cm. cos5π/3=1/2; sin5π/3=−√3/2 nên M=(10;−10√3). AM=√[(10−20)²+(−10√3)²]=20 cm. Độ dài cung lớn hơn dây.

**Rubric tự đối chiếu:** 7 điểm: góc và đơn vị rad 1; công thức cung 1; tính s đúng 1; hoành độ 1; tung độ và dấu 1; AM=20 đúng 1; giải thích cung vs dây 1.

### THPT-G11-CHI-W02-ANCHOR — Bài 2 · Written/Anchor label

**Đề tự luận:** Với các góc u,v bất kỳ, chứng minh sin(u+v)sin(u−v)=sin²u−sin²v. Sau đó áp dụng u=π/4, v=π/12 để tính sin(π/3)sin(π/6) bằng hai cách và giải thích vì sao hai cách trùng nhau.

**Đáp án:** Đẳng thức đúng; sin(π/3)sin(π/6)=√3/4.

**Gợi ý không giải hộ:** Áp dụng công thức sinA sinB=[cos(A−B)−cos(A+B)]/2; hoặc khai triển sin(u±v).

**Lời giải từng bước:** Theo biến đổi tích thành tổng: sin(u+v)sin(u−v)=[cos(2v)−cos(2u)]/2=(1−2sin²v−1+2sin²u)/2=sin²u−sin²v. Với u=π/4, v=π/12, vế trái=sinπ/3·sinπ/6=√3/4. Vế phải=sin²π/4−sin²π/12=1/2−(2−√3)/4=√3/4. Hai cách bằng nhau do đẳng thức tổng quát.

**Rubric tự đối chiếu:** 7 điểm: đổi A=u+v B=u−v đúng 1; áp dụng công thức đúng 2; rút gọn đẳng thức 1; tính trực tiếp √3/4 1; tính sin²π/12 đúng 1; giải thích nhất quán 1.

## 6. D5 · Hai SVG học liệu gốc để NotebookLM review nội dung và tọa độ

- `FIG-G11-B01-01`: đường tròn đơn vị, α=5π/6, cos âm, sin dương. Dùng trong phần kiến thức EX-G11-B01-02. Hình độc lập minh họa, không gắn như đáp án đánh giá.
- `FIG-G11-B02-01`: ba tia 30°, 60°, 90° cho tổng α+β; phân biệt sin(α+β) và sinα+sinβ. Dùng cho EX-G11-B02-01.

**SVG01 nguồn đầy đủ, kiểm XML và hình học:**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 660" role="img" aria-labelledby="title desc">
<title id="title">Đường tròn lượng giác — góc 5π/6</title>
<desc id="desc">Đường tròn đơn vị có trục x và y. Tia tạo góc 150 độ, tức 5 pi trên 6, tới điểm M ở góc phần tư hai. Hoành độ âm bằng âm căn ba chia hai, tung độ dương bằng một phần hai.</desc>
<rect width="900" height="660" fill="#f8fafc" rx="18"/>
<text x="48" y="50" font-family="Arial,sans-serif" font-size="28" fill="#0f172a" font-weight="bold">Bài 1 · Giá trị lượng giác trên đường tròn đơn vị</text>
<circle cx="350" cy="318" r="226" fill="white" stroke="#334155" stroke-width="3"/>
<line x1="90" y1="318" x2="642" y2="318" stroke="#64748b" stroke-width="2"/>
<line x1="350" y1="64" x2="350" y2="585" stroke="#64748b" stroke-width="2"/>
<circle cx="350" cy="318" r="5" fill="#0f172a"/>
<line x1="350" y1="318" x2="154.3" y2="205.0" stroke="#b45309" stroke-width="5"/>
<line x1="154.3" y1="205.0" x2="154.3" y2="318" stroke="#059669" stroke-width="2" stroke-dasharray="7 6"/>
<circle cx="154.3" cy="205.0" r="7" fill="#b45309"/>
<path d="M438 318 A88 88 0 0 0 273.8 274.0" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="321" y="255" font-family="Arial,sans-serif" font-size="21" fill="#2563eb">5π/6</text>
<text x="638" y="309" font-family="Arial,sans-serif" font-size="19" fill="#0f172a">x</text>
<text x="362" y="76" font-family="Arial,sans-serif" font-size="19" fill="#0f172a">y</text>
<text x="362" y="340" font-family="Arial,sans-serif" font-size="18" fill="#475569">O</text>
<text x="112.3" y="188.0" font-family="Arial,sans-serif" font-size="21" fill="#92400e">M</text>
<rect x="650" y="185" width="220" height="198" rx="14" fill="#e2e8f0"/>
<text x="665" y="224" font-family="Arial,sans-serif" font-size="20" fill="#0f172a">α = 5π/6</text>
<text x="665" y="264" font-family="Arial,sans-serif" font-size="20" fill="#0f172a">cos α = −√3/2</text>
<text x="665" y="304" font-family="Arial,sans-serif" font-size="20" fill="#0f172a">sin α = 1/2</text>
<text x="665" y="344" font-family="Arial,sans-serif" font-size="18" fill="#0f172a">Góc phần tư II</text>
<text x="48" y="622" font-family="Arial,sans-serif" font-size="18" fill="#475569">Chốt: cos là hoành độ; sin là tung độ. Dấu phụ thuộc góc phần tư.</text></svg>
```

**SVG02 nguồn đầy đủ, kiểm XML và hình học:**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 890 690" role="img" aria-labelledby="title desc">
<title id="title">Cộng góc 60 độ và 30 độ trên đường tròn đơn vị</title>
<desc id="desc">Các tia 30 độ, 60 độ và 90 độ được đặt cùng gốc O trên đường tròn đơn vị. Tổng 60 độ cộng 30 độ bằng 90 độ nên sin của tổng bằng 1, cos của tổng bằng 0. Không cộng riêng các giá trị sin.</desc>
<rect width="890" height="690" rx="18" fill="#f8fafc"/>
<text x="48" y="53" font-size="29" font-weight="bold" font-family="Arial,sans-serif" fill="#0f172a">Bài 2 · Cộng góc trước, tính hàm sau</text>
<circle cx="335" cy="364" r="224" fill="white" stroke="#94a3b8" stroke-width="2"/>
<line x1="82" y1="364" x2="595" y2="364" stroke="#64748b" stroke-width="2"/>
<line x1="335" y1="110" x2="335" y2="615" stroke="#64748b" stroke-width="2"/>
<line x1="335" y1="364" x2="528.99" y2="252.00" stroke="#059669" stroke-width="4"/>
<line x1="335" y1="364" x2="447.00" y2="170.01" stroke="#2563eb" stroke-width="4"/>
<line x1="335" y1="364" x2="335.00" y2="140.00" stroke="#b45309" stroke-width="4"/>
<circle cx="335" cy="364" r="4" fill="#0f172a"/>
<text x="539.0" y="252.0" font-size="20" font-family="Arial,sans-serif" fill="#047857">30°</text>
<text x="451.0" y="155.0" font-size="20" font-family="Arial,sans-serif" fill="#1d4ed8">60°</text>
<text x="348.0" y="134.0" font-size="20" font-family="Arial,sans-serif" fill="#92400e">90°</text>
<rect x="618" y="190" width="240" height="235" rx="16" fill="#e2e8f0"/>
<text x="634" y="231" font-size="22" font-family="Arial,sans-serif" fill="#0f172a">α = 60°</text>
<text x="634" y="268" font-size="22" font-family="Arial,sans-serif" fill="#0f172a">β = 30°</text>
<text x="634" y="311" font-size="21" font-family="Arial,sans-serif" fill="#0f172a">α + β = 90°</text>
<text x="634" y="351" font-size="19" font-family="Arial,sans-serif" fill="#0f172a">sin(α+β) = 1</text>
<text x="634" y="390" font-size="19" font-family="Arial,sans-serif" fill="#0f172a">cos(α+β) = 0</text>
<text x="48" y="654" font-size="19" font-family="Arial,sans-serif" fill="#475569">Không thay sin(α+β) bằng sin α + sin β. Dùng công thức cộng.</text></svg>
```

**Khi tích hợp sau này:** cần giữ nguyên một SVG canonical/source mỗi hình; kiểm aria/title/desc, MathJax riêng, mobile render; không ghi `DRAFT` hay thông tin reviewer trên giao diện học sinh. Đây chưa phải QA thiết bị.

## 7. D6 · Remediation Cards — 4 HELP_ID, không tạo item_id mới

### HELP-G11-B01-01 · Nhầm góc cùng tia cuối với cùng số vòng quay

**Dấu hiệu:** Rút `765°` thành `45°` rồi dùng góc 45° để tính quãng đường xe quay 765°.  
**Bản chất:** Hai góc chênh bội của 360° có cùng tia cuối / cùng sin cos, nhưng tổng độ dài cung di chuyển còn phụ thuộc số vòng quay thực tế.  
**Tự sửa:** ghi rõ đại lượng cần hỏi; với giá trị lượng giác quy góc modulo 2π, với quãng đường dùng độ lớn tổng góc quay ban đầu ở radian; kiểm đơn vị và dấu.  
**Ôn:** SGK Bài 1 góc lượng giác, radian, cung tròn.  
**Quay lại item:** `THPT-G11-B01-P02`, `THPT-G11-B01-P03`, `THPT-G11-CHI-W01`.

### HELP-G11-B01-02 · Quên điều kiện tan/cot và dấu góc phần tư

**Dấu hiệu:** Kết luận tan(π/2) có giá trị hữu hạn hoặc chọn dấu cos dương trong góc phần tư II.  
**Bản chất:** tan α chỉ xác định nếu cos α≠0; cot α chỉ nếu sin α≠0. Hệ thức sin²+cos²=1 chỉ cho độ lớn; góc phần tư quyết định dấu.  
**Tự sửa:** khoanh miền xác định trước; xác định góc phần tư, lấy căn đúng dấu; thử ngược bằng tan=sin/cos và sin²+cos²=1.  
**Ôn:** SGK Bài 1 giá trị lượng giác, dấu và hệ thức cơ bản.  
**Quay lại item:** `THPT-G11-B01-C02`, `THPT-G11-B01-P01`, `THPT-G11-B01-P04`.

### HELP-G11-B02-01 · Biến sin(u+v) thành sin u+sin v

**Dấu hiệu:** Nhầm tên hàm bên ngoài phép cộng với phép cộng hai giá trị lượng giác.  
**Bản chất:** `sin(u+v)=sin u cos v+cos u sin v` chứ không phải `sin u+sin v`; tương tự cos(u+v) có dấu trừ ở tích sin.  
**Tự sửa:** thử phản ví dụ u=60°, v=30°; lập bảng hai vế, viết công thức chuẩn, kiểm tính đúng bằng tính trực tiếp góc 90°.  
**Ôn:** SGK Bài 2 công thức cộng; bảng sin/cos của góc đặc biệt.  
**Quay lại item:** `THPT-G11-B02-C01`, `THPT-G11-B02-P01`, `THPT-G11-B02-P03`.

### HELP-G11-B02-02 · Đảo dấu tích thành tổng, quên nửa tổng/nửa hiệu

**Dấu hiệu:** Viết `2sin u sin v=cos(u+v)-cos(u-v)` hoặc `sin u+sin v=2sin(u+v)cos(u-v)`.  
**Bản chất:** Với tích sin·sin, cos hiệu trừ cos tổng; với tổng thành tích phải lấy `(u±v)/2`.  
**Tự sửa:** nhận dạng đầu vào là tích hay tổng; ghi đúng công thức, thử u=75°,v=15°, so sánh kết quả số; dùng biểu thức đối xứng để tránh lẫn dấu.  
**Ôn:** SGK Bài 2 mục công thức biến đổi.  
**Quay lại item:** `THPT-G11-B02-P04`, `THPT-G11-B02-P05`, `THPT-G11-CHI-W02-ANCHOR`.

## 8. Cổng kiểm toán, danh sách ID và yêu cầu verdict

**EXPECTED_FORMATIVE_ITEM_ID = 14**; **EXPECTED_WRITTEN_ITEM_ID = 2**; **EXPECTED_CANONICAL_TOTAL = 16**; **EXPECTED_HELP_ID=4**; **EXPECTED_FIGURE_ID=2**; **EXPECTED_D2_EXAMPLE=7**; **OUTCOME_REGISTER=10**. ID chỉ là candidate; chỉ được cấp chính thức sau khi đối chiếu kho hiện hành, chính sách một câu–một canonical và verdict.

**Academic checklist bắt buộc:**
1. Khóa SGK/SBT trang B01/B02 theo PDF (lưu ý phiên bản sách và trang in), đối chiếu mọi mục tiêu trong ma trận 10 outcome: `COVERED/PARTIAL/NOT_CORE` và nguồn trang/mục.
2. Chấm học thuật từng D1/D2/ví dụ, xác nhận điều kiện định nghĩa tan/cot, công thức lượng giác, chiều quay, radian/độ và số vòng quay. Cần phân biệt bài Core và nội dung có thể chuyển hỗ trợ hoặc chuyên sâu.
3. Chấm 16 item theo từng `item_id` gồm stem, đáp án, lời giải, hint, độ khó, trùng lặp **thực chất**, phân tầng; kiểm Written rubric và Anchor chỉ là nhãn. Đề nghị so với ngân hàng khác trên NotebookLM; nếu không có nguồn bank, ghi rõ `DEDUPE_NOT_VERIFIED`.
4. Chấm D5 theo từng SVG XML: tọa độ hình, tia, cung, dấu, nhãn, accessibility và phạm vi SGK. Render mobile là QA kỹ thuật riêng, không tự suy học thuật PASS.
5. Chấm D6 theo 4 HELP_ID: chẩn đoán đúng lỗi → bản chất → bước tự sửa → tiền đề → ID trở lại. Không làm lộ đáp án đề đánh giá độc lập. Chia P0/P1/P2 với `MINIMAL_DELTA` chuẩn nếu sửa.
6. Trả `SOURCE_RECEIPT`, `LESSON_B01/B02_VERDICT`, `D1–D6_OVERALL`, `ITEM_RECONCILIATION`, `OUTCOME_MATRIX`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA`. **Academic PASS không tự cấp CONTENT_READY, không cấp quyền merge/deploy**, không suy rộng sang Bài 3/4, chương I đầy đủ hoặc Topic Readiness.

**Cổng còn HOLD:** mọi học liệu mới trong file này là `DELTA_C_ACADEMIC_MATERIAL` chưa review; chưa có private Chapter Readiness; D1–D6 CHƯƠNG I không thể được khẳng định hoàn chỉnh vì B3/B4 chưa biên soạn; Topic vertical độc lập chưa review; toàn bộ code website, chứng cứ học sinh, Firebase/Gemini và Mastery không đổi.
