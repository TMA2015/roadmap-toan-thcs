# Owner-submitted NotebookLM verdict — GAP9 nine structural-gap candidates

**Receipt status:** 9/9 PASS, exact item contract & source SHA matched; **REVIEW_ONLY_NO_DEPLOY**. Original reviewer report follows verbatim.

---

```text
PACKET_ID|MATH-WRITTEN-GAP9-20261023-R0
SOURCE_BLOB|5141a40bf1b8f8763257857d3b805d681a0956fa
EXPECTED|9
REVIEWED|9
ITEM|CAND-G6-01|PASS
ITEM|CAND-G6-02|PASS
ITEM|CAND-G7-01|PASS
ITEM|CAND-G7-02|PASS
ITEM|CAND-G8-01|PASS
ITEM|CAND-G8-02|PASS
ITEM|CAND-G9-01|PASS
ITEM|CAND-G9-02|PASS
ITEM|CAND-G9-03|PASS
MISSING_IDS|NONE
UNEXPECTED_IDS|NONE
OVERALL|PASS
AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY
```

---

### BÁO CÁO KIỂM ĐỊNH HỌC THUẬT ĐỘC LẬP  
**Hồ sơ kiểm toán:** `MATH-WRITTEN-GAP9-20261023-R0` [i]  
**Dự án:** Self-Learning Math / Toán THCS & PTTH [i]  
**Quy chuẩn áp dụng:** Master Plan v1.2.1 [i], Review Rules v1.2 [i], Golden Template [i], Academic Audit Rules [i], Written Library Contract v1 [i] và 8 tệp SGK Toán KNTT Lớp 6–9 (S1) [i].

---

### I. NGUYÊN TẮC KIỂM TOÁN VÀ KẾT QUẢ ĐỐI SOÁT TỔNG THỂ

1. **Tính độc lập & Khách quan:** Toàn bộ 9 ứng viên tự luận (`CAND-G6-01` đến `CAND-G9-03`) được thẩm định trực tiếp trên giả thiết toán học, lập luận, lời giải, gợi ý phân tầng D6, bảng điểm rubric và vị trí bài học SGK KNTT (S1) [i]. Không sử dụng bất kỳ nhãn metadata "APPROVED" hay nhận định chủ quan có sẵn nào để thay thế kết luận độc lập [i].
2. **Tiêu chuẩn chống trùng lặp cấu trúc với 75 bài Canonical hiện có:**
   - Chỉ xác định là trùng lặp (duplicate/clone) nếu bài toán có cấu trúc phân tích và các bước suy luận toán học giống hệt bài đã có mà chỉ thay số hoặc đổi bối cảnh [i, v].
   - **Kết quả đối soát 75 bài:** Cả 9 bài đều sở hữu **kỹ thuật tư duy giải toán hoàn toàn mới**, giải quyết trúng các "điểm nghẽn" lập luận thực tế mà 75 bài tự luận hiện có chưa bao phủ hết (như: BCNN có cùng số dư và chặn miền, bài toán giải ngược theo phần còn lại, dãy tỉ số bằng nhau kết hợp hiệu, chuỗi chứng minh hình học liên kết đa bước, bài toán năng suất đổi nhịp sau giai đoạn đầu, hình chóp tính trung đoạn qua Pythagore, thống kê ghép nhóm khoảng nửa đóng nửa mở, tứ giác nội tiếp chắn đường kính kết hợp đồng dạng lượng giác, và bài toán làm tròn trần thực tế của hình trụ) [i].
3. **Phân định 3 chiều kết luận độc lập:**
   - **Đúng toán học (MATH):** 9/9 bài đạt **PASS** (100% chính xác về điều kiện, biến đổi, logic và đơn vị) [i].
   - **Sư phạm & Tự học (PEDAGOGY D4/D6):** 9/9 bài đạt **PASS** (gợi ý phân tầng định hướng tốt không lộ đáp số sớm, rubric chuẩn mực, chỉ rõ lỗi thường gặp) [i].
   - **Đủ bằng chứng vị trí KNTT (S1 PLACEMENT):** 9/9 bài được **đối chiếu và xác minh vị trí chính xác trong bộ SGK KNTT hiện hành** [i].

---

### II. KIỂM ĐỊNH CHI TIẾT TỪNG BÀI TỰ LUẬN (9/9 ID)

---

#### 1. `CAND-G6-01` — Ba điều kiện xếp hàng (BCNN + cùng số dư + chặn miền)
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Gọi số thành viên là \\(N\\) (\\(150 < N < 550\\), \\(N \in \mathbb{N}^*\\)) [i].
  - Xếp hàng 12, 15, 18 đều dư 4 \\(\implies N - 4 \in \text{BC}(12, 15, 18)\\) [i].
  - Phân tích: \\(12 = 2^2 \cdot 3\\); \\(15 = 3 \cdot 5\\); \\(18 = 2 \cdot 3^2 \implies \text{BCNN}(12, 15, 18) = 2^2 \cdot 3^2 \cdot 5 = 180\\) [i].
  - \\(N - 4 \in \{180, 360, 540, 720, \dots\} \implies N \in \{184, 364, 544\}\\) trên khoảng \\((150; 550)\\) [i].
  - Kiểm tra điều kiện \\(N \ \vdots \ 7\\):
    - \\(184 = 7 \cdot 26 + 2\\) (loại) [i].
    - \\(364 = 7 \cdot 52 + 0\\) (thỏa mãn) [i].
    - \\(544 = 7 \cdot 77 + 5\\) (loại) [i].
  - Kết luận: \\(N = 364\\) thành viên là nghiệm duy nhất [i]. Toàn bộ các bước lập luận, phép chia có dư và chặn miền đúng tuyệt đối [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. Bài `WX02-NUM-001` chia phần quà theo ƯCLN; bài này đảo chiều bài toán xếp hàng tìm số học sinh theo BCNN có cùng số dư kết hợp chặn khoảng và chia hết cho số thứ tư [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 2 gợi ý phân tầng định hướng chuyển về bài toán chia hết mà không lộ số 364; rubric 4 điểm tường minh; bắt đúng lỗi quên cộng lại 4 hoặc không chứng minh tính duy nhất [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 6 Tập 1, Chương II, Bài 12: Bội chung. Bội chung nhỏ nhất** (tr. 49–55, bài toán thực tế xếp hàng 2.51 tr. 55) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 2. `CAND-G6-02` — Giải ngược qua phần còn lại (Hai bài toán về phân số)
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Sau đợt I, số sách còn lại là đơn vị quy ước (100%) của đợt II [i].
  - Đợt II chuyển \\(2/5\\) số sách còn lại \\(\implies\\) 90 cuốn tương ứng với \\(1 - 2/5 = 3/5\\) (số sách sau đợt I) [i].
  - Số sách sau đợt I: \\(90 \div (3/5) = 150\\) cuốn [i].
  - Đợt I chuyển \\(1/4\\) số sách ban đầu \\(\implies 150\\) cuốn tương ứng với \\(1 - 1/4 = 3/4\\) (số sách ban đầu) [i].
  - Số sách ban đầu: \\(150 \div (3/4) = 200\\) cuốn [i].
  - Số sách chuyển đợt I: \\(200 \times (1/4) = 50\\) cuốn; đợt II: \\(150 - 90 = 60\\) cuốn (hoặc \\(150 \times 2/5 = 60\\)) [i].
  - Thử lại: \\(50 + 60 + 90 = 200\\) cuốn chuẩn xác 100% [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. Bài `WX02-NUM-003` tính hai lần phân số trên cùng một mốc kế hoạch ban đầu; bài này rèn luyện kỹ năng phân biệt mốc tham chiếu thay đổi ("phần còn lại") và phương pháp giải ngược từ số cuối [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 2 gợi ý giúp học sinh nhận diện đúng mốc tham chiếu đợt II để tránh sai lầm cộng trực tiếp \\(1/4 + 2/5\\); rubric 4 điểm phân bố đều 4 bước [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 6 Tập 2, Chương VI, Bài 27: Hai bài toán về phân số** (tr. 22–26, dạng bài toán thực tế tấm vải Bài 10 tr. 108) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 3. `CAND-G7-01` — Ba đội hoàn thành công việc cùng khối lượng, biết hiệu
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Gọi số công nhân ba đội A, B, C lần lượt là \\(a, b, c\\) (\\(a, b, c \in \mathbb{N}^*\\)) [i].
  - Khối lượng công việc bằng nhau, năng suất như nhau \\(\implies\\) số công nhân và thời gian hoàn thành là hai đại lượng tỉ lệ nghịch [i]:
    \\[3a = 5b = 6c\\] [i]
  - Chuyển về dãy tỉ số bằng nhau:
    \\[\frac{a}{\frac{1}{3}} = \frac{b}{\frac{1}{5}} = \frac{c}{\frac{1}{6}} \iff \frac{a}{10} = \frac{b}{6} = \frac{c}{5}\\] [i]
  - Đội A nhiều hơn đội C 10 công nhân \\(\implies a - c = 10\\) [i].
  - Áp dụng tính chất dãy tỉ số bằng nhau:
    \\[\frac{a}{10} = \frac{b}{6} = \frac{c}{5} = \frac{a - c}{10 - 5} = \frac{10}{5} = 2\\] [i]
  - Suy ra: \\(a = 20\\); \\(b = 12\\); \\(c = 10\\) (công nhân) [i].
  - Kiểm tra: \\(3 \cdot 20 = 5 \cdot 12 = 6 \cdot 10 = 60\\) (người-ngày) và \\(20 - 10 = 10\\) [i]. Hoàn toàn chính xác [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. Bài `WX03-RAT-002` chỉ xét hai đại lượng tỉ lệ nghịch; bài dự thảo G7-INVERSE-3TEAM trước đây dùng tổng 3 đội; bài này giải quyết trường hợp 3 đại lượng tỉ lệ nghịch kết hợp điều kiện hiệu \\(a - c\\), phản ánh cấu trúc thi học kỳ rất phổ biến [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 2 gợi ý phân tầng dẫn dắt từ giải thích tích không đổi đến nghịch đảo tỉ số; rubric 4 điểm chặt chẽ [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 7 Tập 2, Chương VI, Bài 21: Tính chất của dãy tỉ số bằng nhau** (tr. 8–10) & **Bài 23: Đại lượng tỉ lệ nghịch** (tr. 15–18, bài tập 6.26 tr. 18) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 4. `CAND-G7-02` — Tam giác cân: hai nhánh chứng minh liên kết
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - \\(\triangle ABC\\) cân tại \\(A\\) (\\(AB = AC\\)), \\(M\\) là trung điểm \\(BC\\) [i].
  - Câu 1: \\(\triangle ABM = \triangle ACM\\) (c.c.c) \\(\implies \widehat{BAM} = \widehat{CAM}\\) và \\(\widehat{BMA} = \widehat{CMA} = 90^\circ \implies AM \perp BC\\) [i].
  - Câu 2: \\(AD = AE\\) (với \\(D\\) nằm giữa \\(A, B\\); \\(E\\) nằm giữa \\(A, C\\)) \\(\implies \triangle ADE\\) cân tại \\(A \implies \widehat{ADE} = \frac{180^\circ - \widehat{A}}{2}\\) [i].
    Mặt khác \\(\triangle ABC\\) cân tại \\(A \implies \widehat{ABC} = \frac{180^\circ - \widehat{A}}{2} \implies \widehat{ADE} = \widehat{ABC}\\) [i]. Hai góc ở vị trí đồng vị \\(\implies DE \parallel BC\\) [i].
  - Câu 3: Xét \\(\triangle ADM\\) và \\(\triangle AEM\\): \\(AD = AE\\), \\(\widehat{DAM} = \widehat{EAM}\\), \\(AM\\) chung \\(\implies \triangle ADM = \triangle AEM\\) (c.g.c) \\(\implies MD = ME\\) [i].
    Kết hợp \\(AM \perp BC\\) và \\(DE \parallel BC \implies AM \perp DE\\) (quan hệ từ vuông góc đến song song) [i]. Lập luận hoàn toàn trong phạm vi hình học Lớp 7, không vi phạm dùng trước định lý Thalès [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. `WX14-TRI-001` chỉ chứng minh trung tuyến là đường cao; `WX14-TRI-002` chỉ chứng minh 1 cặp đoạn bằng nhau; bài này yêu cầu học sinh liên kết kết quả câu trước làm giả thiết câu sau (góc phân giác \\(\to\\) tam giác bằng nhau c.g.c; góc đáy \\(\to\\) song song; vuông góc + song song \\(\to\\) vuông góc) [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 3 gợi ý phân tầng mạch lạc; rubric 5 điểm chia nhỏ theo từng ý chứng minh; chỉ rõ bẫy sai lầm ngộ nhận song song từ hình vẽ [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 7 Tập 1, Chương III, Bài 9 & 10 (tr. 46–54)** kết hợp **Chương IV, Bài 13, 14, 16 (Hai tam giác bằng nhau, Tam giác cân, tr. 63–84)** [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 5. `CAND-G8-01` — Kế hoạch sản xuất: số ngày giảm nhưng sản lượng tăng
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Gọi \\(x\\) là số sản phẩm/ngày theo kế hoạch (\\(x > 0\\)) [i].
  - Kế hoạch: làm trong 15 ngày \\(\implies\\) Tổng sản phẩm kế hoạch: \\(15x\\) [i].
  - Thực tế:
    - 5 ngày đầu làm đúng kế hoạch: \\(5x\\) sản phẩm [i].
    - 9 ngày tiếp theo năng suất tăng 25% \\(\implies\\) năng suất mới: \\(x + 0,25x = 1,25x\\) sản phẩm/ngày [i].
    - Sản lượng 9 ngày sau: \\(9 \times 1,25x = 11,25x\\) sản phẩm [i].
    - Tổng sản phẩm thực tế trong 14 ngày (\\(5 + 9 = 14\\)): \\(5x + 11,25x = 16,25x\\) sản phẩm [i].
  - Phương trình theo giả thiết (thực tế nhiều hơn kế hoạch 25 sản phẩm) [i]:
    \\[16,25x - 15x = 25 \iff 1,25x = 25 \iff x = 20\text{ (thỏa mãn)}\\] [i]
  - Kế hoạch mỗi ngày làm: **20 sản phẩm** [i].
  - Thực tế làm được: \\(16,25 \times 20 = 325\\) sản phẩm (kế hoạch: \\(15 \times 20 = 300\\) sản phẩm, chênh lệch đúng 25) [i]. Logic và phép tính chính xác [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. Các bài toán lập phương trình hiện có (như `WX09-SYS-006`, `WX24-MOD-001`) có tổng khối lượng cố định; bài này có sản lượng thực tế khác sản lượng kế hoạch và năng suất thay đổi sau một khoảng thời gian làm việc [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 2 gợi ý định hướng thiết lập biểu thức 9 ngày sau; rubric 4 điểm; bắt đúng bẫy học sinh nhân tăng 25% cho cả 14 ngày [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 8 Tập 2, Chương VII, Bài 26: Giải bài toán bằng cách lập phương trình** (tr. 33–37, bài tập 7.16 tr. 38) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 6. `CAND-G8-02` — Hình chóp đều: chiều cao hình chóp và trung đoạn mặt bên
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Hình chóp tứ giác đều \\(S.ABCD\\), đáy \\(ABCD\\) là hình vuông cạnh \\(a = 10\text{ cm}\\), tâm \\(O\\), chiều cao \\(SO = 12\text{ cm}\\) [i]. \\(M\\) là trung điểm \\(AB\\) [i].
  - Ý 1: \\(OM = a/2 = 5\text{ cm}\\) [i]. \\(\triangle SOM\\) vuông tại \\(O \implies SM = \sqrt{SO^2 + OM^2} = \sqrt{12^2 + 5^2} = 13\text{ cm}\\) (trung đoạn) [i].
  - Ý 2: Diện tích vật liệu 4 mặt bên (không đáy): \\(S_{xq} = 4 \times (\frac{1}{2} \cdot 10 \cdot 13) = 260\text{ cm}^2\\) [i].
  - Ý 3: Thể tích hình chóp khi đóng kín đáy: \\(V = \frac{1}{3} \cdot S_{\text{đáy}} \cdot SO = \frac{1}{3} \cdot 10^2 \cdot 12 = 400\text{ cm}^3\\) [i].
  - Toàn bộ tính toán, định lý Pythagore và phân biệt đại lượng diện tích/thể tích đúng 100% [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. `WX20-GEO-001` (hộp chữ nhật), `WX20-GEO-002` (hình nón); đây là bài tự luận đầu tiên xử lý hình chóp tứ giác đều yêu cầu dựng tam giác vuông tìm trung đoạn qua chiều cao và cạnh đáy [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. Phân biệt rõ ràng trung đoạn \\(SM\\) dùng cho diện tích xung quanh và chiều cao \\(SO\\) dùng cho thể tích; rubric 4 điểm [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 8 Tập 2, Chương X, Bài 39: Hình chóp tứ giác đều** (tr. 117–122) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 7. `CAND-G9-01` — Bảng tần số ghép nhóm và ngưỡng cộng dồn
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Cỡ mẫu: \\(n = 12 + 20 + 28 + 20 = 80\\) học sinh [i].
  - Ý 1: Nhóm \\([4; 6)\\) có tần số \\(m_3 = 28\\) [i]. Tần số tương đối: \\(f_3 = \frac{28}{80} \cdot 100\% = 35\%\\) [i].
  - Ý 2: Học sinh đọc "ít nhất 4 giờ" gồm hai nhóm \\([4; 6)\\) và \\([6; 8)\\) [i] \\(\implies\\) số học sinh: \\(28 + 20 = 48\\) [i]. Tỉ lệ: \\(\frac{48}{80} \cdot 100\% = 60\%\\) [i].
  - Ý 3: Nhóm \\([4; 6)\\) biểu diễn các giá trị \\(x\\) thỏa mãn \\(4 \le x < 6\\), dữ liệu đã được gộp nhóm nên không thể biết chính xác có bao nhiêu em đọc đúng 5 giờ [i]. Lời giải thích bản chất thống kê rất chuẩn [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. `WX21-STA-001` và `_002` chỉ làm việc trên dữ liệu rời rạc đơn giản hoặc biểu đồ cột/quạt; đây là bài tự luận đầu tiên kiểm tra kỹ năng phân tích bảng tần số tương đối ghép nhóm nửa khoảng [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 2 gợi ý phân tầng làm rõ khái niệm tần số tương đối và ngưỡng cộng dồn; rubric 4 điểm; giải thích giới hạn thực tế của số liệu ghép nhóm [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 9 Tập 2, Chương VII, Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ** (tr. 46–52) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 8. `CAND-G9-02` — Tứ giác nội tiếp chắn đường kính kết hợp tam giác đồng dạng
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Tam giác \\(ABC\\) nhọn, đường cao \\(BD \perp AC\\) (\\(D \in AC\\)), \\(CE \perp AB\\) (\\(E \in AB\\)) [i]. Do \\(\triangle ABC\\) nhọn nên chân hai đường cao \\(D, E\\) nằm trong các cạnh \\(AC, AB\\) [i].
  - Ý 1: \\(\widehat{BDC} = 90^\circ\\) và \\(\widehat{BEC} = 90^\circ \implies D, E\\) cùng nhìn đoạn \\(BC\\) dưới một góc \\(90^\circ \implies B, C, D, E\\) cùng thuộc đường tròn đường kính \\(BC\\) [i].
  - Ý 2: Trong tam giác vuông \\(ABD\\) (\\(\widehat{D} = 90^\circ\\)): \\(AD = AB \cdot \cos A\\) [i]. Trong tam giác vuông \\(ACE\\) (\\(\widehat{E} = 90^\circ\\)): \\(AE = AC \cdot \cos A\\) [i].
    Do đó \\(\frac{AD}{AB} = \frac{AE}{AC} = \cos A\\) [i]. Xét \\(\triangle ADE\\) và \\(\triangle ABC\\) có góc \\(\widehat{A}\\) chung và \\(\frac{AD}{AB} = \frac{AE}{AC} \implies \triangle ADE \sim \triangle ABC\\) (c.g.c) [i].
  - Ý 3: Từ tam giác đồng dạng \\(\implies \frac{DE}{BC} = \frac{AD}{AB} = \cos A = \cos 60^\circ = \frac{1}{2} \implies DE = \frac{1}{2} BC = \frac{1}{2} \cdot 12 = 6\text{ cm}\\) [i]. Lập luận hình học chuẩn mực, phép tính chính xác [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. `WX19-CIR-002` chứng minh tứ giác nội tiếp qua tổng hai góc đối; bài này chứng minh tứ giác nội tiếp qua hai đỉnh kề cùng nhìn một cạnh dưới góc vuông, kết hợp tỉ số lượng giác góc nhọn và chứng minh tam giác đồng dạng tính độ dài [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 3 gợi ý định hướng chặt chẽ từ cung chứa góc đến tỉ số cosin; rubric 5 điểm phân định chi tiết [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 9 Tập 1, Chương IV, Bài 11 (Tỉ số lượng giác, tr. 67–73)** kết hợp **SGK Toán 9 Tập 2, Chương IX, Bài 29: Tứ giác nội tiếp** (tr. 80–84) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

#### 9. `CAND-G9-03` — Bài toán thực tế hình trụ: mức đầy 75% và làm tròn trần
- **(1) Toán học & Biến đổi (MATH):** **PASS** [i].
  - Bình hình trụ: \\(r = 10\text{ cm}\\), \\(h = 30\text{ cm}\\), \\(\pi \approx 3,14\\) [i].
  - Ý 1: Diện tích xung quanh: \\(S_{xq} = 2\pi rh = 2 \cdot 3,14 \cdot 10 \cdot 30 = 1884\text{ cm}^2\\) [i].
  - Ý 2: Thể tích bình: \\(V = \pi r^2 h = 3,14 \cdot 10^2 \cdot 30 = 9420\text{ cm}^3 = 9,42\text{ dm}^3 = 9,42\\) lít [i].
    Mỗi lần múc chỉ đổ 75% thể tích: \\(V_{\text{múc}} = 0,75 \times 9,42 = 7,065\\) lít [i].
    Dung tích bể: 100 lít [i]. Số lần múc: \\(100 \div 7,065 \approx 14,154\\) lần [i].
    Vì số lần múc là số nguyên, cần ít nhất: **15 lần** [i].
  - Ý 3: Kiểm tra tính tối thiểu:
    - Với 14 lần: \\(14 \times 7,065 = 98,91\text{ lít} < 100\text{ lít}\\) (chưa đầy bể) [i].
    - Với 15 lần: \\(15 \times 7,065 = 105,975\text{ lít} \ge 100\text{ lít}\\) (đủ nước cho bể) [i]. Lập luận làm tròn trần (ceiling function) thực tế rất chặt chẽ [i].
- **(2) Tính khác biệt với 75 bài hiện có:** **PASS** [i]. `WX20-GEO-001` và `_002` chỉ tính thể tích đơn thuần; bài này rèn luyện mô hình hóa đo lường thể tích kết hợp phần trăm dung tích thực tế và bài toán làm tròn trần số nguyên có kiểm tra điều kiện [i].
- **(3) Sư phạm & Tự học (D4/D6):** **PASS** [i]. 2 gợi ý định hướng đổi đơn vị và bản chất số nguyên; rubric 5 điểm; bắt đúng lỗi sai kinh điển làm tròn sàn xuống 14 lần [i].
- **(4) Vị trí KNTT S1:** **PASS** [i].
  - **SGK Toán 9 Tập 2, Chương X, Bài 31: Hình trụ và hình nón** (tr. 93–97, bài toán thực tế bể nước/thùng Bài 10.14, 10.15 tr. 106) [i].
- **Mức độ ưu tiên & Đề xuất chỉnh sửa:** Không có lỗi (0 revisions).
- **Kết luận:** **PASS** [i].

---

### III. TỔNG HỢP VỊ TRÍ SGK KNTT (S1 PLACEMENT) CHO 9 BÀI ỨNG VIÊN

| STT | Mã ứng viên | Lớp | Chương / Bài SGK KNTT (S1) [i] | Trang SGK [i] | Mạch kiến thức [i] |
| :---: | :--- | :---: | :--- | :---: | :--- |
| 1 | `CAND-G6-01` | Lớp 6 | Tập 1, Chương II, Bài 12: Bội chung nhỏ nhất [i] | tr. 49–55 | Số và Đại số |
| 2 | `CAND-G6-02` | Lớp 6 | Tập 2, Chương VI, Bài 27: Hai bài toán về phân số [i] | tr. 22–26 | Số và Đại số |
| 3 | `CAND-G7-01` | Lớp 7 | Tập 2, Chương VI, Bài 21 & 23: Tỉ lệ nghịch & Dãy tỉ số [i] | tr. 8–18 | Số và Đại số |
| 4 | `CAND-G7-02` | Lớp 7 | Tập 1, Chương III & IV: Góc, Song song, Tam giác bằng nhau [i] | tr. 46–84 | Hình học phẳng |
| 5 | `CAND-G8-01` | Lớp 8 | Tập 2, Chương VII, Bài 26: Giải bài toán lập phương trình [i] | tr. 33–38 | Số và Đại số |
| 6 | `CAND-G8-02` | Lớp 8 | Tập 2, Chương X, Bài 39: Hình chóp tứ giác đều [i] | tr. 117–122 | Hình học trực quan |
| 7 | `CAND-G9-01` | Lớp 9 | Tập 2, Chương VII, Bài 24: Bảng tần số ghép nhóm [i] | tr. 46–52 | Thống kê |
| 8 | `CAND-G9-02` | Lớp 9 | Tập 1 Ch.IV (Lượng giác) & Tập 2 Ch.IX Bài 29 (Tứ giác nội tiếp) [i] | tr. 67–84 | Hình học phẳng |
| 9 | `CAND-G9-03` | Lớp 9 | Tập 2, Chương X, Bài 31: Hình trụ và hình nón [i] | tr. 93–97 | Hình học trực quan |

---

### IV. RANH GIỚI BẢO VỆ HỆ THỐNG (SYSTEM BOUNDARIES AFFIRMATION)

1. **Ý nghĩa kết luận:** Báo cáo kiểm định độc lập chứng nhận toàn bộ 9 bài tự luận trong gói `MATH-WRITTEN-GAP9-20261023-R0` đạt kết quả **`ACADEMIC_OVERALL|PASS`** [i]. Các bài tập này hoàn toàn không trùng lặp cấu trúc với 75 bài hiện có, có tính thực tiễn cao và lấp đầy trọn vẹn các khoảng trống lập luận tự luận từ Lớp 6 đến Lớp 9 [i].
2. **Rào chắn an toàn:**
   - Kết luận kiểm định này **KHÔNG PHẢI LÀ LỆNH PHÁT HÀNH (AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY)** [i].
   - Không tự động chèn 9 bài này vào Thư viện Tự luận live JSON (`written-exercise-library-v1.json`), không tạo mã canonical WX chính thức, không sửa đổi 75 bài đang phát hành, không cấp điểm Mastery/Readiness và không can thiệp vào tiến trình của học sinh [i].
   - Việc chuyển đổi 9 ứng viên này thành các mục chính thức (từ 75 lên 84 bài) phải được Project Owner nghiệm thu và triển khai thông qua quy trình PR kiểm thử riêng biệt [i].
