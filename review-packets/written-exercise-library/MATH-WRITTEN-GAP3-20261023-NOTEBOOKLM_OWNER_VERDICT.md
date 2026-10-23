# Owner-submitted NotebookLM independent academic review — GAP3

**Preserved verdict:** 3/3 PASS; **review-only, no release authorization**. The original owner-uploaded report follows (unaltered), including its S1 chapter references. The Grade 6 chapter discrepancy is documented separately and does not rewrite this original.

---

```text
PACKET_ID|MATH-WRITTEN-GAP3-20261023-R0
SOURCE_BLOB|85d8301daca7819009ba47eabf63080d586e9dc9
EXPECTED|3
REVIEWED|3
ITEM|CAND-G6-AREA-01|PASS
ITEM|CAND-G7-POLY-01|PASS
ITEM|CAND-G8-MID-01|PASS
MISSING_IDS|NONE
UNEXPECTED_IDS|NONE
OVERALL|PASS
AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY
```

---

### BÁO CÁO KIỂM ĐỊNH HỌC THUẬT ĐỘC LẬP  
**Gói kiểm toán:** `MATH-WRITTEN-GAP3-20261023-R0` [i]  
**Dự án:** Self-Learning Math / Toán THCS & PTTH [i]  
**Quy chuẩn áp dụng:** Master Plan v1.2.1 [i], Review Rules v1.2 [i], Golden Template [i], Academic Audit Rules [i], Written Library Contract v1 [i] và Bộ SGK Toán Kết nối tri thức với cuộc sống (S1) [i].

---

### I. BẢNG TỔNG HỢP KIỂM ĐỊNH 3 BÀI TỰ LUẬN ỨNG VIÊN

| STT | Mã ứng viên | (1) Đúng toán học (MATH) | (2) Sư phạm & Tự học (D4/D6) | (3) Tính mới so với 84 bài hiện có | (4) Vị trí KNTT (S1 Placement) | (5) Nhu cầu hình minh họa (Diagram) | Kết luận (Item Verdict) |
| :---: | :--- | :---: | :---: | :---: | :--- | :---: | :---: |
| 1 | `CAND-G6-AREA-01` | **PASS** [i] | **PASS** [i] | **PASS** [i] | **PASS** (Toán 6 T1, Ch.III, Bài 20) [i] | Đề bài đủ để tự vẽ; khuyến nghị thêm SVG giả thiết [i] | **PASS** [i] |
| 2 | `CAND-G7-POLY-01` | **PASS** [i] | **PASS** [i] | **PASS** [i] | **PASS** (Toán 7 T2, Ch.VII, Bài 26) [i] | Không cần hình minh họa [i] | **PASS** [i] |
| 3 | `CAND-G8-MID-01` | **PASS** [i] | **PASS** [i] | **PASS** [i] | **PASS** (Toán 8 T1, Ch.III & Ch.IV) [i] | Khuyến nghị thêm SVG hình chữ nhật & 4 trung điểm [i] | **PASS** [i] |

---

### II. ĐÁNH GIÁ CHI TIẾT TỪNG BÀI TỰ LUẬN (3/3 ID)

---

#### 1. `CAND-G6-AREA-01` — Khoét một góc sân: diện tích đổi, chu vi có đổi?
- **(1) Tính chính xác toán học (MATH):** **PASS** [i].
  - Sân chữ nhật ban đầu kích thước \\(24\text{ m} \times 18\text{ m}\\). Phần khoét ở góc kích thước \\(8\text{ m} \times 6\text{ m}\\) sát mép trên và mép phải [i].
  - *Diện tích Cách 1 (Phép trừ):* \\(S = 24 \times 18 - 8 \times 6 = 432 - 48 = 384\text{ m}^2\\) [i].
  - *Diện tích Cách 2 (Chia thành hai hình chữ nhật):* Chia dọc thành hình bên trái \\((24 - 8) \times 18 = 16 \times 18 = 288\text{ m}^2\\) và hình bên phải phía dưới \\(8 \times (18 - 6) = 8 \times 12 = 96\text{ m}^2\\). Tổng \\(S = 288 + 96 = 384\text{ m}^2\\) [i]. Hai cách cho kết quả khớp nhau tuyệt đối [i].
  - *Chu vi mép sân mới:* Gồm 6 đoạn biên: cạnh đáy \\(24\text{ m}\\), cạnh phải dưới \\(12\text{ m}\\), cạnh ngang lõm \\(8\text{ m}\\), cạnh đứng lõm \\(6\text{ m}\\), cạnh trên bên trái \\(16\text{ m}\\), cạnh trái \\(18\text{ m}\\) [i]. Tổng chu vi \\(P = 24 + 12 + 8 + 6 + 16 + 18 = 84\text{ m}\\) [i].
  - *So sánh và giải thích:* Chu vi ban đầu \\(2 \times (24 + 18) = 84\text{ m}\\) [i]. Chu vi **không đổi** vì hai đoạn mép ngoài bị cắt mất (\\(8\text{ m}\\) và \\(6\text{ m}\\)) được thay thế bằng đúng hai đoạn mép lõm mới xuất hiện có cùng độ dài (\\(8\text{ m}\\) và \\(6\text{ m}\\)) [i].
  - *Chi phí & Tiết kiệm:* Chi phí lát \\(384 \times 125\,000 = 48\,000\,000\\) đồng [i]. Tiết kiệm \\(48 \times 125\,000 = 6\,000\,000\\) đồng [i]. Phép tính và đơn vị chính xác [i].
- **(2) Đối chiếu trùng lặp với 84 bài hiện có:** **PASS** [i].
  - Bài tương đồng gần nhất là `WX20-GEO-003` chỉ tính diện tích sân nguyên vẹn và chu vi có trừ cổng ra vào [i].
  - `CAND-G6-AREA-01` mang cấu trúc tư duy hoàn toàn mới: khoét góc tạo hình chữ L, đối chiếu 2 cách tính diện tích (bù trừ vs phân rã), và chứng minh hiện tượng bảo toàn chu vi khi khoét góc [i].
- **(3) Độ khó & Giá trị rèn luyện tự luận (D4/D6):** **PASS** [i].
  - 3 gợi ý phân tầng dẫn dắt từ trực quan diện tích đến quan sát hai đoạn mép thay thế, không lộ đáp số [i]. Rubric 6.0 điểm phân định rạch ròi giữa vẽ hình, tính diện tích, liệt kê chu vi và giải thích nghịch lý [i].
- **(4) Vị trí KNTT (S1 Placement):** **PASS** [i].
  - **SGK Toán 6 Tập 1, Chương III (Hình học trực quan), Bài 20: Chu vi và diện tích của một số tứ giác đã học** (tr. 88–93, phần tính chu vi và diện tích hình thực tế bằng chia nhỏ hoặc bù trừ hình) [i].
- **(5) Nhu cầu hình minh họa (Diagram):** Đề bài mô tả vị trí khoét ("ở góc trên bên phải, sát cạnh trên và cạnh bên phải") rất tường minh, học sinh tự phác thảo hình được [i]. Khi đưa lên giao diện sản phẩm, khuyến nghị đính kèm 1 tệp SVG chỉ vẽ đường bao hình chữ L kèm kích thước giả thiết (không ghi lời giải) để tăng trải nghiệm học tập [i].

---

#### 2. `CAND-G7-POLY-01` — Hai phép kết hợp đa thức rồi tìm ẩn
- **(1) Tính chính xác toán học (MATH):** **PASS** [i].
  - Cho \\(A(x) = 2x^2 - x + 3\\) và \\(B(x) = x^2 + 2x - 4\\) [i].
  - Câu 1:
    \\[S(x) = A(x) + B(x) = (2x^2 - x + 3) + (x^2 + 2x - 4) = 3x^2 + x - 1\\] [i]
    \\[D(x) = A(x) - B(x) = (2x^2 - x + 3) - (x^2 + 2x - 4) = 2x^2 - x + 3 - x^2 - 2x + 4 = x^2 - 3x + 7\\] [i]
    Quy tắc đổi dấu ngoặc khi trừ đa thức được thực hiện chuẩn xác [i].
  - Câu 2:
    \\[T(x) = S(x) - 3D(x) = (3x^2 + x - 1) - 3(x^2 - 3x + 7) = 3x^2 + x - 1 - 3x^2 + 9x - 21 = 10x - 22\\] [i]
    Giải thích: Hạng tử \\(3x^2\\) và \\(-3x^2\\) đối nhau nên triệt tiêu bậc hai [i].
  - Câu 3:
    \\[T(x) = 8 \iff 10x - 22 = 8 \iff 10x = 30 \iff x = 3\\] [i]
    Thử lại vào biểu thức gốc: \\(A(3) = 2(9) - 3 + 3 = 18\\); \\(B(3) = 9 + 6 - 4 = 11\\) [i].
    \\(S(3) = 29\\), \\(D(3) = 7 \implies T(3) = 29 - 3(7) = 29 - 21 = 8\\) (thỏa mãn) [i]. Toán học chính xác 100% [i].
- **(2) Đối chiếu trùng lặp với 84 bài hiện có:** **PASS** [i].
  - `WX04-ALG-001` chỉ dừng ở phép trừ một biến đơn giản [i]; `WX04-ALG-003` nhân đa thức rồi thay giá trị \\(x\\) đã cho [i].
  - `CAND-G7-POLY-01` tạo ra hai biểu thức trung gian \\(S, D\\), kết hợp theo hệ số triệt tiêu bậc hai để giải phương trình bậc nhất tìm ngược \\(x\\), sau đó thử lại vào hàm số gốc [i]. Cấu trúc tư duy hoàn toàn mới [i].
- **(3) Độ khó & Giá trị rèn luyện tự luận (D4/D6):** **PASS** [i].
  - 3 gợi ý định hướng kiểm soát dấu ngoặc và giải phương trình [i]; rubric 5.0 điểm chặt chẽ; chỉ rõ bẫy sai lầm chỉ đổi dấu một hạng tử khi bỏ ngoặc [i].
- **(4) Vị trí KNTT (S1 Placement):** **PASS** [i].
  - **SGK Toán 7 Tập 2, Chương VII (Biểu thức đại số và đa thức một biến), Bài 26: Phép cộng và phép trừ đa thức một biến** (tr. 31–36) [i].
- **(5) Nhu cầu hình minh họa (Diagram):** Bài toán đại số thuần túy, **không cần hình minh họa** [i].

---

#### 3. `CAND-G8-MID-01` — Từ bốn trung điểm đến hình thoi, diện tích và bất đẳng thức
- **(1) Tính chính xác toán học (MATH):** **PASS** [i].
  - Cho hình chữ nhật \\(ABCD\\) (\\(AB = 12\text{ cm}, BC = 8\text{ cm}\\)), \\(E, F, G, H\\) lần lượt là trung điểm \\(AB, BC, CD, DA\\) [i].
  - Câu 1: Trong \\(\triangle ABC\\), \\(EF\\) là đường trung bình \\(\implies EF \parallel AC, EF = \frac{1}{2}AC\\) [i].
    Trong \\(\triangle ADC\\), \\(HG\\) là đường trung bình \\(\implies HG \parallel AC, HG = \frac{1}{2}AC\\) [i].
    Suy ra \\(EF \parallel HG\\) và \\(EF = HG \implies EFGH\\) là hình bình hành [i].
  - Câu 2: Trong \\(\triangle BCD\\), \\(FG\\) là đường trung bình \\(\implies FG = \frac{1}{2}BD\\) [i].
    Do \\(ABCD\\) là hình chữ nhật nên hai đường chéo bằng nhau: \\(AC = BD\\) [i].
    Suy ra \\(EF = FG\\). Hình bình hành \\(EFGH\\) có hai cạnh kề bằng nhau nên là hình thoi [i].
  - Câu 3: Diện tích hình chữ nhật \\(S_{ABCD} = 12 \times 8 = 96\text{ cm}^2\\) [i].
    Bốn tam giác vuông ở góc \\(\triangle AEH, \triangle BEF, \triangle CFG, \triangle DGH\\) đều có hai cạnh góc vuông dài \\(6\text{ cm}\\) và \\(4\text{ cm}\\) [i].
    Diện tích mỗi tam giác góc: \\(\frac{1}{2} \times 6 \times 4 = 12\text{ cm}^2\\) [i].
    Diện tích hình thoi: \\(S_{EFGH} = 96 - 4 \times 12 = 48\text{ cm}^2\\) [i]. (Khớp với công thức \\(\frac{1}{2} \cdot HF \cdot EG = \frac{1}{2} \cdot 12 \cdot 8 = 48\text{ cm}^2\\)) [i].
  - Câu 4: Chu vi hình thoi \\(P_{EFGH} = 4EF = 4 \cdot (\frac{1}{2}AC) = 2AC\\) [i].
    Trong \\(\triangle ABC\\) không suy biến, theo bất đẳng thức tam giác: \\(AC < AB + BC\\) [i].
    Nhân 2 hai vế: \\(2AC < 2(AB + BC) \implies P_{EFGH} < P_{ABCD} = 2(12 + 8) = 40\text{ cm}\\) [i]. Lời giải chứng minh giải tích chính xác tuyệt đối mà không cần tính xấp xỉ số đo căn thức [i].
- **(2) Đối chiếu trùng lặp với 84 bài hiện có:** **PASS** [i].
  - Các bài tứ giác hiện có (`WX16-QUAD-001` đến `_004`) chỉ chứng minh nâng cấp hình từ tứ giác ban đầu [i].
  - `CAND-G8-MID-01` là bài toán tứ giác trung điểm (Varignon) đầu tiên trong thư viện, liên kết đường trung bình tam giác, tính chất hai đường chéo hình chữ nhật, dấu hiệu hình thoi, phương pháp bù trừ diện tích và bất đẳng thức tam giác để so sánh chu vi [i]. Giá trị rèn luyện lập luận rất cao [i].
- **(3) Độ khó & Giá trị rèn luyện tự luận (D4/D6):** **PASS** [i].
  - 3 gợi ý dẫn dắt mạch lạc không lộ kết luận [i]; rubric 6.0 điểm bao quát đủ 4 câu hỏi [i]; chỉ rõ sai lầm suy đoán trực giác hình vuông hoặc dùng số gần đúng [i].
- **(4) Vị trí KNTT (S1 Placement):** **PASS** [i].
  - **SGK Toán 8 Tập 1, Chương III (Tứ giác), Bài 13: Hình chữ nhật** (tr. 64–66) & **Bài 14: Hình thoi** (tr. 67–70) kết hợp **Chương IV, Bài 16: Đường trung bình của tam giác** (tr. 81–84) [i].
- **(5) Nhu cầu hình minh họa (Diagram):** Đề bài đã yêu cầu học sinh tự dựng hình theo các bước rõ ràng (có 0.5 điểm vẽ hình trong rubric) [i]. Tuy nhiên, để tối ưu hiển thị, **khuyến nghị bổ sung 1 tệp hình phẳng SVG** thể hiện hình chữ nhật \\(ABCD\\), các trung điểm \\(E, F, G, H\\) và hai đường chéo \\(AC, BD\\) ở trạng thái giả thiết trước khi xuất bản [i].

---

### III. KẾT LUẬN VÀ BẢO VỆ RANH GIỚI HỆ THỐNG

1. **Kết luận kiểm định chung:** Cả 3/3 bài tự luận trong gói `MATH-WRITTEN-GAP3-20261023-R0` đều đạt chuẩn chất lượng học thuật cao nhất (**`ACADEMIC_OVERALL|PASS`**), không trùng lặp cấu trúc với 84 bài canonical hiện có và hoàn toàn phù hợp với chương trình SGK KNTT [i].
2. **Tuân thủ rào chắn an toàn (System Boundaries):**
   - Kết luận kiểm định này **KHÔNG PHẢI LÀ LỆNH PHÁT HÀNH (`AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY`)** [i].
   - Không tự động cấp mã canonical ID mới, không chỉnh sửa tệp dữ liệu live `written-exercise-library-v1.json`, không sửa đổi 84 bài đang phát hành, không cấp điểm Mastery/Readiness và không can thiệp vào tiến trình của học sinh [i].
   - Việc chuyển đổi 3 ứng viên này vào thư viện chính thức (từ 84 lên 87 bài) phải do Project Owner phê duyệt qua quy trình PR kiểm thử riêng biệt [i].
