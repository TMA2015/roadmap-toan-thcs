# Temp · Toán 11 KNTT Chương II B05–B07 — D1–D6 COMPLETE · CHƯA REVIEW

**PACKET_ID:** `THPT-G11-CHII-B05-B07-WHOLE-CHAPTER-AUTHORING-R01-20261031`
**LEARNING_PATH:** `SGK_CHAPTER` · **S1 SGK:** Tập 1 B05 tr.42–47, B06 tr.48–51, B07 tr.52–55, cuối chương tr.56–57.
**SBT KNTT:** trang in B05–B07 và bài cuối chương cần reviewer đối chiếu trực tiếp PDF S1; dữ liệu web chỉ hỗ trợ phát hiện phạm vi, không tự cấp S1 PASS.
**AUTHORING R01:** 16 outcome, 9 ví dụ, 36 canonical Core/Practice + 6 Written/Anchor, 3 D5 SVG và 6 D6; file kín thứ hai chứa 19 RD1 với lời giải/rubric. Nội dung toán mới chưa được NotebookLM PASS. Không cho phép merge/deploy hoặc Mastery.
**Lưu ý phiên bản:** khối D1–D2 dưới đây là bản thảo giai đoạn đầu, có dòng “D3–D6 còn thiếu”; dòng ấy là nhãn lịch sử của snapshot. Các phần D3–D6 hoàn chỉnh đã được nối ngay sau đường phân cách cuối khối. Review trên TOÀN FILE này, không chỉ phần đầu.

---
# Toán 11 KNTT Chương II — Dãy số, Cấp số cộng và Cấp số nhân (SOURCE WORKING DRAFT)

**STATUS: IN_PROGRESS — NOT A WHOLE-CHAPTER REVIEW PACKET. NO NOTEBOOKLM REVIEW OR RELEASE YET.**
**PACKET_ID:** `THPT-G11-CHII-B05-B07-WHOLE-CHAPTER-AUTHORING-R01-DRAFT-20261031`

## S1 scope receipt (preliminary, verify primary PDFs before freezing)

- SGK Toán 11 KNTT Tập 1: Chương II B05 **Dãy số** trang in 42–47; B06 **Cấp số cộng** 48–51; B07 **Cấp số nhân** 52–55; Bài tập cuối Chương II 56–57. These printed page ranges are cross-checked against publicly available index, **not** asserted as directly read original PDF in this authoring turn.
- SBT KNTT 11 Tập 1: sources currently suggest B05 around pp31–35, B06 pp36–37, B07 pp38–40, but **DO NOT freeze those as S1 until checking the exact uploaded SBT PDF**. All SBT exact page references and worked solutions must be verified before academic review.
- Five Permanent NotebookLM THPT sources v2.0 remain active. No external reference can override SGK/SBT Core scope.

## RD0 author outcome matrix — 16 provisional canonical skill outcomes

| Outcome ID | Compulsory learning evidence |
|---|---|
| `G11-B05-SEQUENCE-DEFINITION` | Dãy hữu hạn/vô hạn, biến chỉ số nguyên dương, ký hiệu và số hạng đầu |
| `G11-B05-EXPLICIT-TERM` | Tìm số hạng từ công thức tổng quát, phân biệt u0/u1 |
| `G11-B05-RECURRENCE` | Hệ thức truy hồi và điều kiện khởi tạo, tính các số hạng |
| `G11-B05-MONOTONICITY` | Xét tăng/giảm bằng hiệu hoặc so sánh trên miền n hợp lệ |
| `G11-B05-BOUNDS` | Dãy bị chặn trên/chặn dưới; chứng minh theo mọi n≥1 |
| `G11-B06-AP-DEFINITION` | Hiệu hai số hạng liên tiếp không đổi, công sai d (gồm d=0 và d âm) |
| `G11-B06-AP-NTH` | u_n=u_1+(n-1)d, tìm chỉ số n nguyên dương |
| `G11-B06-AP-THREE-TERMS` | Số hạng giữa bằng trung bình cộng hai số kề |
| `G11-B06-AP-SUM` | Tổng n số hạng đầu, điều kiện n∈N* |
| `G11-B06-AP-APPLICATION` | Mô hình tăng/giảm lượng cố định, đơn vị và tính khả thi |
| `G11-B07-GP-DEFINITION` | u_{n+1}=q u_n; công bội q, tránh chia cho số hạng 0 |
| `G11-B07-GP-NTH` | u_n=u_1 q^{n-1}, dấu của q và mũ số tự nhiên |
| `G11-B07-GP-THREE-TERMS` | u_n²=u_{n-1}u_{n+1}; chiều đảo cần xét điều kiện |
| `G11-B07-GP-SUM` | S_n=u_1(1-q^n)/(1-q) với q≠1; S_n=n u_1 nếu q=1 |
| `G11-B07-GP-APPLICATION` | Lãi kép/tăng trưởng/giảm theo tỉ lệ; chỉ số thời gian rõ ràng |
| `G11-CHII-STRUCTURAL-COMPARISON` | So sánh quy luật cộng d với nhân q, phân biệt số hạng/tổng |

## D1 Bài 5 — Dãy số: theory and conditions

**Định nghĩa:** Dãy số vô hạn là hàm số xác định trên tập số nguyên dương N* (hoặc từ một chỉ số khởi đầu được nêu), giá trị ở n là u_n. Dãy hữu hạn có các chỉ số từ 1 đến N. Các số hạng không nhất thiết phân biệt nhau và không mặc định tăng.

**Công thức tổng quát:** u_n=f(n) với mỗi n được phép. Ví dụ u_n=2n−1, n≥1 thì 1,3,5,7,...; phải thay đúng n=1 để tìm số hạng đầu, không nhầm u_0.

**Hệ thức truy hồi:** Cho số hạng đầu và quy tắc tính số hạng sau từ số trước, ví dụ u_1=3, u_{n+1}=2u_n thì 3,6,12,24,...; thiếu u_1 thì quy tắc chưa xác định một dãy duy nhất.

**Đơn điệu:** Dãy tăng khi u_{n+1}>u_n với mọi n liên quan, giảm khi u_{n+1}<u_n. Nếu chỉ chứng minh ≥ hoặc ≤ thì gọi không giảm hoặc không tăng; dãy hằng không tăng nghiêm ngặt cũng không giảm nghiêm ngặt. Có thể xét u_{n+1}−u_n, không dùng tỉ số nếu mẫu có thể bằng 0.

**Bị chặn:** Bị chặn trên nếu tồn tại M sao cho u_n≤M mọi n; chặn dưới nếu tồn tại m sao cho u_n≥m mọi n; bị chặn nếu có cả hai. Chỉ thử vài n đầu không chứng minh được một cận cho toàn bộ dãy.

### VD-G11-B05-01 — Tính số hạng và xác định chỉ số

Cho u_n=3n−2 (n≥1): u_1=1, u_2=4, u_5=13. Nếu u_n=28 thì 3n−2=28, n=10, hợp lệ nguyên dương. Không dùng n âm hoặc phân số làm chỉ số.

### VD-G11-B05-02 — Truy hồi

u_1=2, u_{n+1}=u_n+3. Từ u_1=2 suy ra u_2=5,u_3=8,u_4=11; quy luật này là cấp số cộng có d=3, nhưng ở B05 chỉ cần hiểu cách tạo số hạng theo truy hồi.

### VD-G11-B05-03 — Đơn điệu và bị chặn

u_n=1/n (n≥1) có u_{n+1}−u_n=−1/[n(n+1)]<0, nên giảm nghiêm ngặt, đồng thời 0<u_n≤1 nên vừa bị chặn trên bởi 1, vừa bị chặn dưới bởi 0. Không kết luận dãy có số hạng bằng 0.

## D1 Bài 6 — Cấp số cộng

**Định nghĩa:** (u_n) là cấp số cộng (CSC) nếu tồn tại d cố định với u_{n+1}=u_n+d. Dãy hằng cũng là CSC (d=0); CSC có thể giảm khi d<0. Điều kiện nhận biết là hiệu u_{n+1}−u_n **không đổi**.

**Số hạng tổng quát:** u_n=u_1+(n−1)d, n≥1. Nếu biết u_p và u_q ở hai vị trí p≠q thì d=(u_q−u_p)/(q−p); từ đó tìm u_1. Khi giải bài toán tìm n, phải xét n nguyên dương.

**Tính chất ba số hạng:** 2u_n=u_{n−1}+u_{n+1}, n≥2. Đây là quan hệ trung bình cộng; không phải trung bình nhân.

**Tổng:** S_n=u_1+...+u_n = n(u_1+u_n)/2 = n[2u_1+(n−1)d]/2, n≥1. Không dùng công thức cấp số nhân cho CSC.

### VD-G11-B06-01 — Xác định cấp số cộng

Dãy u_n=7−2n có u_{n+1}−u_n=−2 nên là CSC với u_1=5, d=−2. Dãy u_n=n² có hiệu 2n+1 phụ thuộc n, nên không phải CSC.

### VD-G11-B06-02 — Suy ngược từ hai số hạng

Cho u_4=7 và u_9=22; 5d=15, d=3, u_1=7−3·3=−2; u_{20}=−2+19·3=55.

### VD-G11-B06-03 — Tổng hữu hạn

CSC 2,5,8,... có d=3, u_{20}=59. S_{20}=20(2+59)/2=610. Thử bằng n[2u1+(n−1)d]/2=10(4+57)=610.

## D1 Bài 7 — Cấp số nhân

**Định nghĩa:** (u_n) là cấp số nhân (CSN) nếu tồn tại công bội q cố định để u_{n+1}=q u_n. Công bội có thể âm hoặc bằng 0; khi q<0 và u1≠0 dấu các số hạng luân phiên, không mặc định dãy tăng. Nếu u_n=0, không dùng phép chia u_{n+1}/u_n để xác định q.

**Số hạng tổng quát:** u_n=u_1 q^{n−1}, n≥1. Trường hợp q=0 được hiểu u_1 riêng và u_n=0 với n≥2; tránh gán 0^0 nếu cách biểu diễn không quy ước rõ.

**Tính chất ba số hạng:** u_n²=u_{n−1}u_{n+1} với n≥2. Riêng chiều suy từ phương trình ba số hạng sang một CSN toàn dãy cần xét dấu và giả thiết, không suy bừa chỉ từ một bộ ba.

**Tổng:** Nếu q≠1, S_n=u_1(1−q^n)/(1−q) = u_1(q^n−1)/(q−1). Nếu q=1, S_n=n u_1. Nếu q=0 và n≥1 thì S_n=u_1; cách này tương thích với công thức q≠1.

**Ứng dụng:** Khi tăng r% mỗi kỳ, q=1+r/100; khi giảm r% mỗi kỳ, q=1−r/100 (0≤r≤100 theo bài toán thông thường). Phân biệt vốn đầu kỳ V_0 với u_1, và số kỳ n. Lãi kép không suy ra từ dãy cộng số tiền lãi cố định.

### VD-G11-B07-01 — Công bội âm

Dãy 5,−10,20,−40,... có q=−2, u_n=5(−2)^{n−1}; dấu luân phiên và |u_n| tăng, nhưng dãy không đơn điệu theo nghĩa thông thường.

### VD-G11-B07-02 — Số hạng và tổng

Cho u_1=3,q=2. Khi đó u_7=3·2⁶=192, S_7=3(2⁷−1)/(2−1)=381.

### VD-G11-B07-03 — Mô hình lãi kép

Vốn V_0=100 triệu đồng, lãi kép 2% mỗi kỳ và không nạp/rút: sau 5 kỳ V_5=100·(1,02)^5 triệu đồng. Nếu đánh số theo u1 là vốn ban đầu thì u_6=V_5; không nhầm chỉ số kỳ.

## D3–D6 / Chapter Readiness — remaining authoring required BEFORE one NotebookLM review

- D3: complete canonical Core, stratified Practice, Applications for B05/06/07, with worked keys/solutions, ID mapping and no duplicated item_id. Not yet authored in this draft.
- D4: one common Written/Anchor library and per-question detailed rubric; not yet authored.
- D5: source SVG discrete term plots / AP regular increments / GP growth with textual fallback, numeric/axis QA; not yet authored.
- D6: five-step targeted misconceptions and return-to-practice HELP_IDs for every lesson, not yet authored.
- RD0: review 16 provisional outcomes against original SGK/SBT; adjust labels if full S1 audit shows scope gaps.
- RD1: create **new independent** hidden Chapter II items, each unique stem, answer, solution and 4-point scoring rubric, exposure comparator versus public Core/Practice/Written; not yet authored.
- Perform author math QA, full-chapter S1 scope pages, ID parity, SVG rendering, cross-device consideration, package Temp+manifest. Only then ask NotebookLM for **ONE whole ChII review**. No premature Academic PASS or release.

## Hard gates

`ACADEMIC_CHII=NOT_REVIEWED`; `A1–A7_WHOLE_CHAPTER=IN_PROGRESS`; `RELEASE_AUTHORIZATION=NO`; `MASTERY_ACTIVATION=NO`; `TOPIC_AUTHORING=HOLD_UNTIL_SGK_10_11_12_COMPLETE`.


---

## D3 · SGK Core / Practice / Application — 36 câu canonical R01 (MỚI, CHƯA NOTEBOOKLM PASS)

## B05 · 4 Core + 8 Practice

### THPT-G11-B05-C01 · SGK_CORE · G11-B05-SEQUENCE-DEFINITION · BASIC

**Đề:** Dãy hữu hạn gồm 5 số chính phương dương đầu tiên là gì?

**Đáp án:** 1; 4; 9; 16; 25.

**Lời giải:** Số hạng thứ n là n², n=1,2,3,4,5. Dãy có đúng năm số hạng.

### THPT-G11-B05-C02 · SGK_CORE · G11-B05-EXPLICIT-TERM · BASIC

**Đề:** Cho u_n=4n−3 (n≥1). Tìm u_1 và u_6.

**Đáp án:** u_1=1; u_6=21.

**Lời giải:** Thế n=1 và n=6, tương ứng 4·1−3=1, 4·6−3=21.

### THPT-G11-B05-C03 · SGK_CORE · G11-B05-RECURRENCE · BASIC

**Đề:** u_1=2, u_{n+1}=u_n+5. Viết 4 số hạng đầu.

**Đáp án:** 2; 7; 12; 17.

**Lời giải:** Bắt đầu tại u_1=2, mỗi lần tăng 5.

### THPT-G11-B05-C04 · SGK_CORE · G11-B05-MONOTONICITY · BASIC

**Đề:** Dãy u_n=5−2n (n≥1) tăng hay giảm?

**Đáp án:** Giảm nghiêm ngặt.

**Lời giải:** u_{n+1}−u_n=−2<0 với mọi n≥1.

### THPT-G11-B05-P01 · SGK_PRACTICE · G11-B05-EXPLICIT-TERM · CORE_APPLY

**Đề:** Dãy u_n=5n+2 (n≥1). Có số hạng nào bằng 87 không? Nếu có là số hạng thứ mấy?

**Đáp án:** Có, n=17.

**Lời giải:** 5n+2=87 ⇒ n=17 là số nguyên dương.

### THPT-G11-B05-P02 · SGK_PRACTICE · G11-B05-RECURRENCE · CORE_APPLY

**Đề:** u_1=1,u_{n+1}=2u_n+1. Tìm u_4.

**Đáp án:** u_4=15.

**Lời giải:** u_2=3,u_3=7,u_4=15; không nhầm 2u_n+1 với 2(u_n+1).

### THPT-G11-B05-P03 · SGK_PRACTICE · G11-B05-MONOTONICITY · CORE_APPLY

**Đề:** Chứng minh u_n=3/(n+2) giảm với mọi n≥1.

**Đáp án:** Giảm nghiêm ngặt.

**Lời giải:** u_{n+1}−u_n=3/(n+3)−3/(n+2)=−3/[(n+2)(n+3)]<0.

### THPT-G11-B05-P04 · SGK_PRACTICE · G11-B05-BOUNDS · CORE_APPLY

**Đề:** Xác định một cận trên và một cận dưới của u_n=2−1/n (n≥1).

**Đáp án:** 1≤u_n<2; cận dưới 1, cận trên 2.

**Lời giải:** Vì 0<1/n≤1 nên 1≤2−1/n<2.

### THPT-G11-B05-P05 · SGK_PRACTICE · G11-B05-SEQUENCE-DEFINITION · CORE_APPLY

**Đề:** Dãy u_n=(-1)^n (n≥1) có tăng, giảm hay bị chặn không?

**Đáp án:** Không tăng hoặc giảm; bị chặn bởi -1 và 1.

**Lời giải:** Các giá trị luân phiên −1,1,−1,1...; −1≤u_n≤1.

### THPT-G11-B05-P06 · SGK_PRACTICE · G11-B05-EXPLICIT-TERM · APPLICATION

**Đề:** Một khán phòng có hàng ghế thứ n gồm 10+2(n−1) ghế; có 12 hàng. Hỏi hàng cuối có bao nhiêu ghế?

**Đáp án:** 32 ghế.

**Lời giải:** Thế n=12: 10+2·11=32; không tính tổng khi chỉ hỏi một hàng.

### THPT-G11-B05-P07 · SGK_PRACTICE · G11-B05-RECURRENCE · ADVANCED

**Đề:** Với u_1=4, u_{n+1}=3u_n−2, tính u_3.

**Đáp án:** u_3=28.

**Lời giải:** u_2=3·4−2=10, u_3=3·10−2=28.

### THPT-G11-B05-P08 · SGK_PRACTICE · G11-B05-BOUNDS · ADVANCED

**Đề:** Chứng minh u_n=n/(n+1) (n≥1) bị chặn và tìm một khoảng chứa mọi u_n.

**Đáp án:** 1/2≤u_n<1.

**Lời giải:** u_n=1−1/(n+1); n≥1 ⇒ 0<1/(n+1)≤1/2; suy ra 1/2≤u_n<1.

## B06 · 4 Core + 8 Practice

### THPT-G11-B06-C01 · SGK_CORE · G11-B06-AP-DEFINITION · BASIC

**Đề:** Dãy 11,7,3,−1,... có phải cấp số cộng không? Tìm d.

**Đáp án:** Có, d=−4.

**Lời giải:** Các hiệu liên tiếp đều bằng −4.

### THPT-G11-B06-C02 · SGK_CORE · G11-B06-AP-NTH · BASIC

**Đề:** CSC có u_1=6,d=3. Tìm u_9.

**Đáp án:** u_9=30.

**Lời giải:** u_9=6+(9−1)·3=30.

### THPT-G11-B06-C03 · SGK_CORE · G11-B06-AP-SUM · BASIC

**Đề:** CSC có u_1=2,d=2. Tính S_5.

**Đáp án:** S_5=30.

**Lời giải:** Năm số hạng đầu 2,4,6,8,10 nên tổng 30, hoặc 5(2+10)/2=30.

### THPT-G11-B06-C04 · SGK_CORE · G11-B06-AP-THREE-TERMS · BASIC

**Đề:** Tìm x để 6,x,14 theo thứ tự là ba số hạng liên tiếp của CSC.

**Đáp án:** x=10.

**Lời giải:** 2x=6+14 ⇒ x=10.

### THPT-G11-B06-P01 · SGK_PRACTICE · G11-B06-AP-NTH · CORE_APPLY

**Đề:** CSC u_3=10,u_8=30. Tìm công sai và u_1.

**Đáp án:** d=4,u_1=2.

**Lời giải:** u_8−u_3=5d=20 ⇒ d=4; u_1=u_3−2d=2.

### THPT-G11-B06-P02 · SGK_PRACTICE · G11-B06-AP-DEFINITION · CORE_APPLY

**Đề:** Dãy u_n=3n²+1 (n≥1) có phải CSC không?

**Đáp án:** Không.

**Lời giải:** u_{n+1}−u_n=6n+3 phụ thuộc n.

### THPT-G11-B06-P03 · SGK_PRACTICE · G11-B06-AP-SUM · CORE_APPLY

**Đề:** CSC có u_1=9,d=−2. Tính S_8.

**Đáp án:** S_8=16.

**Lời giải:** u_8=9−14=−5, S_8=8(9−5)/2=16.

### THPT-G11-B06-P04 · SGK_PRACTICE · G11-B06-AP-NTH · CORE_APPLY

**Đề:** CSC u_1=−5,d=4 có số hạng nào bằng 39?

**Đáp án:** Có, n=12.

**Lời giải:** −5+4(n−1)=39 ⇒ n−1=11 ⇒ n=12 nguyên dương.

### THPT-G11-B06-P05 · SGK_PRACTICE · G11-B06-AP-THREE-TERMS · CORE_APPLY

**Đề:** Ba số 2x−1, x+5, 3x+1 là ba số hạng liên tiếp của CSC. Tìm x.

**Đáp án:** x=10/3.

**Lời giải:** 2(x+5)=(2x−1)+(3x+1)=5x ⇒ 2x+10=5x ⇒ x=10/3.

### THPT-G11-B06-P06 · SGK_PRACTICE · G11-B06-AP-APPLICATION · APPLICATION

**Đề:** Tiền thưởng tháng đầu 1,2 triệu; mỗi tháng sau tăng 0,1 triệu. Tổng thưởng 10 tháng?

**Đáp án:** 16,5 triệu đồng.

**Lời giải:** u_1=1,2;d=0,1;u_10=2,1;S_10=10(1,2+2,1)/2=16,5.

### THPT-G11-B06-P07 · SGK_PRACTICE · G11-B06-AP-SUM · ADVANCED

**Đề:** CSC d=−3,u_5=13. Tính S_12.

**Đáp án:** S_12=102.

**Lời giải:** u_1=u_5−4d=25;u_12=25−33=−8;S_12=12(25−8)/2=102.

### THPT-G11-B06-P08 · SGK_PRACTICE · G11-B06-AP-APPLICATION · APPLICATION

**Đề:** Một sân vận động có 15 hàng ghế, hàng đầu 20 ghế, mỗi hàng sau nhiều hơn 2 ghế. Tổng số ghế?

**Đáp án:** 510 ghế.

**Lời giải:** u_15=20+14·2=48, S_15=15(20+48)/2=510.

## B07 · 4 Core + 8 Practice

### THPT-G11-B07-C01 · SGK_CORE · G11-B07-GP-DEFINITION · BASIC

**Đề:** Dãy 5,15,45,135,... có phải CSN không? Tìm q.

**Đáp án:** Có, q=3.

**Lời giải:** Mỗi số hạng sau gấp 3 lần số hạng trước.

### THPT-G11-B07-C02 · SGK_CORE · G11-B07-GP-NTH · BASIC

**Đề:** CSN u_1=4,q=2. Tìm u_6.

**Đáp án:** u_6=128.

**Lời giải:** u_6=4·2^(6−1)=128.

### THPT-G11-B07-C03 · SGK_CORE · G11-B07-GP-SUM · BASIC

**Đề:** CSN u_1=3,q=2. Tính S_4.

**Đáp án:** 45.

**Lời giải:** 3+6+12+24=45, hoặc 3(1−2⁴)/(1−2)=45.

### THPT-G11-B07-C04 · SGK_CORE · G11-B07-GP-THREE-TERMS · BASIC

**Đề:** Một CSN có ba số hạng dương liên tiếp 2, x, 18. Tìm x.

**Đáp án:** x=6.

**Lời giải:** x²=2·18=36; do các số hạng đều dương nên x=6.

### THPT-G11-B07-P01 · SGK_PRACTICE · G11-B07-GP-DEFINITION · CORE_APPLY

**Đề:** Dãy u_n=7(−2)^(n−1) là CSN? Tìm q và u_4.

**Đáp án:** q=−2,u_4=−56.

**Lời giải:** u_{n+1}=−2u_n; u_4=7(−2)^3=−56.

### THPT-G11-B07-P02 · SGK_PRACTICE · G11-B07-GP-NTH · CORE_APPLY

**Đề:** CSN u_2=6,u_5=162, các số hạng đầu khác 0. Tìm q và u_1.

**Đáp án:** q=3,u_1=2.

**Lời giải:** u_5/u_2=q³=27 ⇒ q=3 (nghiệm thực duy nhất);u_1=u_2/q=2.

### THPT-G11-B07-P03 · SGK_PRACTICE · G11-B07-GP-SUM · CORE_APPLY

**Đề:** CSN u_1=2,q=−2. Tính S_5.

**Đáp án:** S_5=22.

**Lời giải:** S_5=2(1−(−2)^5)/(1−(−2))=2·33/3=22.

### THPT-G11-B07-P04 · SGK_PRACTICE · G11-B07-GP-SUM · CORE_APPLY

**Đề:** CSN u_1=8,q=1. Tính S_9.

**Đáp án:** 72.

**Lời giải:** Dãy hằng bằng 8, S_9=9·8=72; không chia cho 1−q=0.

### THPT-G11-B07-P05 · SGK_PRACTICE · G11-B07-GP-THREE-TERMS · CORE_APPLY

**Đề:** Ba số 9, x, 1 theo thứ tự là CSN, tất cả dương. Tìm x.

**Đáp án:** x=3.

**Lời giải:** x²=9·1=9 và x>0 ⇒ x=3.

### THPT-G11-B07-P06 · SGK_PRACTICE · G11-B07-GP-APPLICATION · APPLICATION

**Đề:** Một nguồn vi khuẩn ban đầu 200 cá thể, mỗi giờ gấp đôi. Sau 5 giờ có bao nhiêu?

**Đáp án:** 6400 cá thể.

**Lời giải:** N_5=200·2⁵=6400; ban đầu tính là thời điểm t=0.

### THPT-G11-B07-P07 · SGK_PRACTICE · G11-B07-GP-DEFINITION · CORE_APPLY

**Đề:** Dãy 3,0,0,0,... có phải CSN không?

**Đáp án:** Có, công bội q=0.

**Lời giải:** u_{n+1}=0·u_n cho mọi n≥1; không dùng u_3/u_2=0/0.

### THPT-G11-B07-P08 · SGK_PRACTICE · G11-B07-GP-APPLICATION · APPLICATION

**Đề:** Gửi 50 triệu đồng với lãi kép 4% mỗi năm, không nạp/rút. Số tiền sau 3 năm?

**Đáp án:** 50·1,04³ = 56,2432 triệu đồng.

**Lời giải:** V_3=50(1+0,04)^3=56,2432; phân biệt t=0 và t=3.


## D4 · Thư viện Written/Anchor một ngân hàng (6 câu, rubric 6 điểm/câu)

### THPT-G11-CHII-W05-01 · WRITTEN · G11-B05-MONOTONICITY

**Đề:** Cho u_n=(2n+1)/(n+2), n≥1. Tính u_1,u_2, chứng minh dãy tăng và bị chặn.

**Lời giải:** u_1=1,u_2=5/4. u_n=2−3/(n+2), u_{n+1}−u_n=3/[(n+2)(n+3)]>0. Vì 0<3/(n+2)≤1 nên 1≤u_n<2.

**Rubric /6:**
- u_1,u_2 đúng (1 điểm).
- biến đổi 2−3/(n+2) (1 điểm).
- tính hiệu dương (1 điểm).
- kết luận tăng (1 điểm).
- chứng minh hai cận (1 điểm).
- giải thích không đạt 2 (1 điểm).

### THPT-G11-CHII-W05-02-ANCHOR · WRITTEN/ANCHOR · G11-B05-RECURRENCE

**Đề:** Dãy u_1=1 và u_{n+1}=2u_n+1. Tính 5 số hạng đầu và chứng minh công thức u_n=2^n−1.

**Lời giải:** u_1=1,u_2=3,u_3=7,u_4=15,u_5=31. Quy nạp: n=1 đúng; nếu u_n=2^n−1 thì u_{n+1}=2(2^n−1)+1=2^(n+1)−1.

**Rubric /6:**
- 5 số hạng đầu đúng (1 điểm).
- giả thuyết công thức (1 điểm).
- bước cơ sở (1 điểm).
- giả thiết quy nạp (1 điểm).
- bước chuyển n→n+1 (1 điểm).
- kết luận n≥1 (1 điểm).

### THPT-G11-CHII-W06-01 · WRITTEN · G11-B06-AP-SUM

**Đề:** Một CSC có u_4=11,u_9=26. Tìm u_1,d,u_{15} và S_{15}.

**Lời giải:** 5d=15⇒d=3;u_1=11−9=2;u_15=2+14·3=44;S_15=15(2+44)/2=345.

**Rubric /6:**
- thiết lập hiệu hai số hạng (1 điểm).
- tìm d=3 (1 điểm).
- tìm u1=2 (1 điểm).
- tìm u15=44 (1 điểm).
- công thức tổng đúng (1 điểm).
- S15=345 và đơn vị nếu có (1 điểm).

### THPT-G11-CHII-W06-02-ANCHOR · WRITTEN/ANCHOR · G11-B06-AP-APPLICATION

**Đề:** Một rạp chiếu có 18 hàng ghế: hàng đầu 12 chỗ, mỗi hàng sau tăng 3 chỗ. Tính hàng cuối, tổng ghế, và số ghế của 5 hàng cuối.

**Lời giải:** u_18=12+17·3=63. S_18=18(12+63)/2=675. Năm hàng cuối (14–18) có u_14=51; tổng 5(51+63)/2=285.

**Rubric /6:**
- xác định CSC (1 điểm).
- u18=63 (1 điểm).
- S18 công thức (1 điểm).
- S18=675 (1 điểm).
- đúng u14=51 (1 điểm).
- tổng năm hàng cuối 285 (1 điểm).

### THPT-G11-CHII-W07-01 · WRITTEN · G11-B07-GP-SUM

**Đề:** CSN có u_1=5,q=−2. Tính u_6, S_6, và chứng minh bằng cộng từng số hạng.

**Lời giải:** u_6=5(−2)^5=−160. Sáu số hạng 5,−10,20,−40,80,−160, tổng −105. Công thức S6=5[1−(−2)^6]/[1−(−2)]=5(1−64)/3=−105.

**Rubric /6:**
- công thức un (1 điểm).
- u6=−160 (1 điểm).
- liệt kê sáu số hạng (1 điểm).
- cộng trực tiếp −105 (1 điểm).
- áp công thức q≠1 (1 điểm).
- hai cách thống nhất (1 điểm).

### THPT-G11-CHII-W07-02-ANCHOR · WRITTEN/ANCHOR · G11-B07-GP-APPLICATION

**Đề:** Một khoản tiền 80 triệu đồng tăng trưởng 5%/năm theo lãi kép. Tìm công thức vốn sau n năm; tính sau 4 năm và năm nguyên nhỏ nhất để vốn vượt 100 triệu.

**Lời giải:** V_n=80·1,05^n (triệu), n≥0. V_4=97,2405. Vì V_4<100 và V_5=102,102525>100, năm nguyên đầu tiên là 5.

**Rubric /6:**
- nêu V0, q=1,05 (1 điểm).
- đúng Vn (1 điểm).
- V4=97,2405 (1 điểm).
- chứng minh V4 chưa vượt 100 (1 điểm).
- V5=102,102525 (1 điểm).
- kết luận năm 5, làm rõ mốc thời gian (1 điểm).

## D5 · Nguồn đồ thị SVG (ba nguồn canonical, không tạo ID trùng)

- `FIG-G11-B05-01`: sơ đồ các điểm (n,u_n) rời rạc của dãy, **không nối thành đồ thị liên tục**; mô tả bằng bảng và chú thích.
- `FIG-G11-B06-01`: cấp số cộng 3,6,9,12,15 (các điểm rời rạc tăng đều); điểm số hạng cuối x=5, y=15.
- `FIG-G11-B07-01`: cấp số nhân 2,4,8,16,32; các điểm rời rạc tăng theo tỷ lệ 2; không tuyên bố đồ thị là hàm mũ liên tục.
- Mỗi SVG có `<title>` và `<desc>`, bảng thay thế trong phần văn bản. QA kiểm tra trục, đơn vị, số liệu trước khi review. **Không dùng đồ thị chưa được NotebookLM duyệt để cập nhật web**.

## D6 · 6 thẻ khắc phục lỗ hổng (mỗi thẻ 5 bước, không can thiệp bài đánh giá)

### HELP-G11-B05-01 · skill_id=G11-B05-RECURRENCE · RETURN=THPT-G11-B05-C03;THPT-G11-B05-P02

1. Nhận lỗi: nhầm hệ thức u_(n+1) với công thức u_n.
2. Đọc đúng số hạng đầu u_1 và quy tắc truy hồi.
3. Tính từng n, không thay cả n và u_n vào cùng vị trí.
4. Thử u_1=1, u_(n+1)=2u_n+1 cho u_2=3,u_3=7.
5. Trở về C03 rồi luyện P02; không dùng xem lời giải làm bằng chứng Mastery.

### HELP-G11-B05-02 · skill_id=G11-B05-BOUNDS · RETURN=THPT-G11-B05-P04;THPT-G11-B05-P08

1. Nhận lỗi: thấy vài số hạng rồi kết luận bị chặn.
2. Chọn bất đẳng thức đúng với mọi n≥1.
3. Đổi u_n=1−1/(n+1) để nhận ra 1/2≤u_n<1.
4. Nhớ cận trên không nhất thiết là số hạng đạt được.
5. Trở về P04/P08, tự chứng minh với mọi n.

### HELP-G11-B06-01 · skill_id=G11-B06-AP-NTH · RETURN=THPT-G11-B06-C02;THPT-G11-B06-P01

1. Nhận lỗi: dùng n thay n−1 trong công thức CSC.
2. Viết lại u_n=u_1+(n−1)d.
3. Từ hai chỉ số p,q tính d=(u_q−u_p)/(q−p).
4. Thử u1=6,d=3 được u9=30.
5. Trở về C02/P01, kiểm tra n nguyên dương.

### HELP-G11-B06-02 · skill_id=G11-B06-AP-SUM · RETURN=THPT-G11-B06-C03;THPT-G11-B06-P03

1. Nhận lỗi: thiếu hệ số n/2 hoặc nhầm tổng CSC với CSN.
2. Xác định u1,u_n và số hạng n của đoạn.
3. Dùng S_n=n(u1+u_n)/2, kể cả d âm.
4. Kiểm tra trực tiếp tổng 2+4+6+8+10=30.
5. Làm C03/P03 và đối chiếu hai cách tính.

### HELP-G11-B07-01 · skill_id=G11-B07-GP-NTH · RETURN=THPT-G11-B07-C02;THPT-G11-B07-P01

1. Nhận lỗi: dùng q^n thay q^(n−1).
2. Viết u_n=u_1 q^(n−1) với n≥1.
3. Nếu q âm, xác định dấu theo chẵn/lẻ của n−1.
4. Thử u1=4,q=2 cho u6=128.
5. Làm C02/P01, không suy công bội bằng cách chia cho 0.

### HELP-G11-B07-02 · skill_id=G11-B07-GP-SUM · RETURN=THPT-G11-B07-C03;THPT-G11-B07-P04

1. Nhận lỗi: áp S_n=u1(1−q^n)/(1−q) khi q=1.
2. Phân nhánh: q≠1 dùng công thức hữu hạn; q=1 dùng n·u1.
3. Chú ý dấu nếu q<0 và số mũ n.
4. Thử dãy 8,8,... có S9=72.
5. Trở về C03/P04; tự cộng ba số hạng để kiểm tra.

## A1–A7 kiểm toán nguồn, độc lập và ranh giới triển khai

- **Một câu — một canonical ID:** tổng 36 câu Core/Practice và 6 Written, không nhân bản theo placement; Anchor là nhãn của Written. Thư viện lời giải, rubric được tham chiếu chung.
- **RD0:** 16 outcome do tác giả đề xuất (gồm 15 outcome bài B05–B07 và outcome so sánh liên bài); D3/D4/D5/D6 phải có bằng chứng thực chất thay vì chỉ đếm câu.
- **RD1:** ngân hàng đánh giá kín riêng trọn Chương II, 18 câu khác dữ kiện và cấu trúc với các câu luyện đã xem. Không tiết lộ đề/đáp án/rubric trên GitHub công khai; không lấy formative correct làm Skill Mastery.
- **S1:** SGK Toán 11 KNTT Tập 1 B05 42–47, B06 48–51, B07 52–55, cuối chương 56–57 (mục lục công khai đối chiếu). SBT KNTT B05–B07 chính xác về trang in cần NotebookLM đối chiếu trực tiếp nguồn S1; không suy đoán PASS dựa trên web tham khảo.
- **Golden UI:** không thay đổi menu, Javascript, tiến độ, Firebase/Gemini hay THCS. Đây là nguồn **ứng viên học thuật R01**, chưa QA frontend, chưa được phát hành hoặc cho phép ghi điểm.

---

## PART D5 EXACT SVG XML FOR NOTEBOOKLM (three canonical graph sources)

These exact source SVG XML blocks are academically unreviewed candidates. Reviewer: validate all displayed numbers, point coordinates, index/axis labeling, discrete-only points, missing line segments, accessible text and pedagogical accuracy; compare with SGK/SBT. Source IDs FIG-G11-B05-01, FIG-G11-B06-01 and FIG-G11-B07-01 are NOT new student assessment items.

### FIG-G11-B05-01 · source Git blob 154e10059899d635dec5aacc78616e3d53b9ad17

```xml
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" viewBox="0 0 750 330" width="750" height="330">
<title id="title">Dãy u_n=(-1)^n, n=1..6</title>
<desc id="desc">Giá trị luân phiên dấu -1 và 1; chỉ có sáu điểm rời rạc, không nối thành một đường thẳng. Các giá trị chỉ tồn tại trên chỉ số nguyên dương, không nối các điểm.</desc>
<rect width="750" height="330" fill="#fff"/>
<text x="375" y="29" fill="#0f172a" font-size="18" text-anchor="middle" font-weight="600">Dãy u_n=(-1)^n, n=1..6</text>
<path d="M85 163.5 H720 M85 52 V275" stroke="#475569" stroke-width="1.8" fill="none"/>
<circle cx="85.0" cy="249.3" r="6" fill="#2563eb"/>
<text x="85.0" y="235.3" fill="#1d4ed8" text-anchor="middle" font-size="14">u1=-1</text>
<text x="85.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">1</text>
<circle cx="212.0" cy="77.7" r="6" fill="#2563eb"/>
<text x="212.0" y="63.7" fill="#1d4ed8" text-anchor="middle" font-size="14">u2=1</text>
<text x="212.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">2</text>
<circle cx="339.0" cy="249.3" r="6" fill="#2563eb"/>
<text x="339.0" y="235.3" fill="#1d4ed8" text-anchor="middle" font-size="14">u3=-1</text>
<text x="339.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">3</text>
<circle cx="466.0" cy="77.7" r="6" fill="#2563eb"/>
<text x="466.0" y="63.7" fill="#1d4ed8" text-anchor="middle" font-size="14">u4=1</text>
<text x="466.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">4</text>
<circle cx="593.0" cy="249.3" r="6" fill="#2563eb"/>
<text x="593.0" y="235.3" fill="#1d4ed8" text-anchor="middle" font-size="14">u5=-1</text>
<text x="593.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">5</text>
<circle cx="720.0" cy="77.7" r="6" fill="#2563eb"/>
<text x="720.0" y="63.7" fill="#1d4ed8" text-anchor="middle" font-size="14">u6=1</text>
<text x="720.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">6</text>
<text x="720" y="303" font-size="15" fill="#334155">n</text></svg>
```

### FIG-G11-B06-01 · source Git blob 7b26242cad828b6b4b6c27b87f3359273b03bf2a

```xml
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" viewBox="0 0 750 330" width="750" height="330">
<title id="title">Cấp số cộng u_n=3n, n=1..5</title>
<desc id="desc">Năm điểm của cấp số cộng là (1,3), (2,6), (3,9), (4,12), (5,15), hiệu các số hạng d=3. Các giá trị chỉ tồn tại trên chỉ số nguyên dương, không nối các điểm.</desc>
<rect width="750" height="330" fill="#fff"/>
<text x="375" y="29" fill="#0f172a" font-size="18" text-anchor="middle" font-weight="600">Cấp số cộng u_n=3n, n=1..5</text>
<path d="M85 249.3 H720 M85 52 V275" stroke="#475569" stroke-width="1.8" fill="none"/>
<circle cx="85.0" cy="215.0" r="6" fill="#2563eb"/>
<text x="85.0" y="201.0" fill="#1d4ed8" text-anchor="middle" font-size="14">u1=3</text>
<text x="85.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">1</text>
<circle cx="212.0" cy="180.7" r="6" fill="#2563eb"/>
<text x="212.0" y="166.7" fill="#1d4ed8" text-anchor="middle" font-size="14">u2=6</text>
<text x="212.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">2</text>
<circle cx="339.0" cy="146.3" r="6" fill="#2563eb"/>
<text x="339.0" y="132.3" fill="#1d4ed8" text-anchor="middle" font-size="14">u3=9</text>
<text x="339.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">3</text>
<circle cx="466.0" cy="112.0" r="6" fill="#2563eb"/>
<text x="466.0" y="98.0" fill="#1d4ed8" text-anchor="middle" font-size="14">u4=12</text>
<text x="466.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">4</text>
<circle cx="593.0" cy="77.7" r="6" fill="#2563eb"/>
<text x="593.0" y="63.7" fill="#1d4ed8" text-anchor="middle" font-size="14">u5=15</text>
<text x="593.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">5</text>
<text x="720" y="303" font-size="15" fill="#334155">n</text></svg>
```

### FIG-G11-B07-01 · source Git blob 3aa50318e6bbe1666d27bd82b5034101f1c100d9

```xml
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" viewBox="0 0 750 330" width="750" height="330">
<title id="title">Cấp số nhân u_n=2^n, n=1..5</title>
<desc id="desc">Năm điểm của cấp số nhân là (1,2), (2,4), (3,8), (4,16), (5,32), công bội q=2. Các giá trị chỉ tồn tại trên chỉ số nguyên dương, không nối các điểm.</desc>
<rect width="750" height="330" fill="#fff"/>
<text x="375" y="29" fill="#0f172a" font-size="18" text-anchor="middle" font-weight="600">Cấp số nhân u_n=2^n, n=1..5</text>
<path d="M85 249.3 H720 M85 52 V275" stroke="#475569" stroke-width="1.8" fill="none"/>
<circle cx="85.0" cy="238.5" r="6" fill="#2563eb"/>
<text x="85.0" y="224.5" fill="#1d4ed8" text-anchor="middle" font-size="14">u1=2</text>
<text x="85.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">1</text>
<circle cx="212.0" cy="227.8" r="6" fill="#2563eb"/>
<text x="212.0" y="213.8" fill="#1d4ed8" text-anchor="middle" font-size="14">u2=4</text>
<text x="212.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">2</text>
<circle cx="339.0" cy="206.4" r="6" fill="#2563eb"/>
<text x="339.0" y="192.4" fill="#1d4ed8" text-anchor="middle" font-size="14">u3=8</text>
<text x="339.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">3</text>
<circle cx="466.0" cy="163.5" r="6" fill="#2563eb"/>
<text x="466.0" y="149.5" fill="#1d4ed8" text-anchor="middle" font-size="14">u4=16</text>
<text x="466.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">4</text>
<circle cx="593.0" cy="77.7" r="6" fill="#2563eb"/>
<text x="593.0" y="63.7" fill="#1d4ed8" text-anchor="middle" font-size="14">u5=32</text>
<text x="593.0" y="296.0" fill="#334155" text-anchor="middle" font-size="12">5</text>
<text x="720" y="303" font-size="15" fill="#334155">n</text></svg>
```

