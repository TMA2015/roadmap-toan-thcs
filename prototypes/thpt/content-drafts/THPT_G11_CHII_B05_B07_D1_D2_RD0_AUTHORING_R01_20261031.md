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
