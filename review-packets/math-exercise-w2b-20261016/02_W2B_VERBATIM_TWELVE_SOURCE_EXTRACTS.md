# W2B — Verbatim source snapshot of 12 selected legacy problems

**Original source authority:** repository Markdown, `main` at `455cf2d42b31f54a118e49120893e982fa96dcf6` (2026-10-16), not S1 textbook. Each extracted section contains its authored problem and any existing quick solution, copied from its original topic page. **No academic review PASS is asserted.**

---

## Source `02-M3-01` from `docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md`

### 02-M3-01
36 nam và 48 nữ được chia thành nhiều nhóm nhất sao cho mỗi nhóm có số nam bằng nhau và số nữ bằng nhau. Có bao nhiêu nhóm?

---

## Source `02-M4-01` from `docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md`

### 02-M4-01
Tìm số tự nhiên nhỏ nhất lớn hơn 100, chia 12 dư 5 và chia 18 cũng dư 5.

---

## Source `02-M4-03` from `docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md`

### 02-M4-03
Tìm số tự nhiên nhỏ nhất có đúng ba thừa số nguyên tố khác nhau và chia hết cho 6.

??? example "Xem đáp án nhanh – bài bổ sung"
    - 02-M1-01: 0; 02-M1-02: \(19/12\); 02-M1-03: \(2^2\cdot3\cdot7\).
    - 02-M2-01: 2500; 02-M2-02: 42 và 252; 02-M2-03: \(-1,25<-1,2<0<0,75\).
    - 02-M3-01: 12 nhóm; 02-M3-02: \(9/20\); 02-M3-03: \(43/4\).
    - 02-M4-01: 113; 02-M4-02: 23,5%; 02-M4-03: 30.

---

??? example "Xem hướng dẫn chọn lọc – bài bổ sung"
    # Hướng dẫn chọn lọc
    
    ## 02-M3-01 – Chia thành nhiều nhóm nhất
    
    Số nhóm phải là ước chung của cả 36 và 48. Vì cần **nhiều nhóm nhất**, ta tìm:
    
    \[
    \operatorname{ƯCLN}(36,48)=12.
    \]
    
    Vậy chia được **12 nhóm**; mỗi nhóm có 3 nam và 4 nữ.
    
    **Điểm cần nhớ:** gặp cụm “chia thành nhiều nhóm nhất, mỗi nhóm như nhau” thường nghĩ tới **ƯCLN**.
    
    ## 02-M4-01 – Hai phép chia cùng số dư
    
    Nếu số cần tìm là \(n\), thì \(n-5\) chia hết cho cả 12 và 18. Do đó \(n-5\) là bội của:
    
    \[
    \operatorname{BCNN}(12,18)=36.
    \]
    
    Ta cần \(n>100\), tức \(36k+5>100\). Giá trị nhỏ nhất phù hợp là \(k=3\), nên:
    
    \[
    n=36\cdot3+5=113.
    \]
    
    **Điểm cần nhớ:** khi nhiều phép chia có **cùng số dư**, hãy trừ số dư trước rồi xét BCNN.
    
    ## 02-M4-02 – Giảm giá liên tiếp
    
    Sau khi giảm 15%, giá còn \(85\%=0,85\) giá ban đầu. Giảm tiếp 10% trên giá mới thì còn:
    
    \[
    0,85\cdot0,90=0,765.
    \]
    
    Giá cuối bằng 76,5% giá đầu, nên tổng mức giảm là:
    
    \[
    100\%-76,5\%=23,5\%.
    \]
    
    **Điểm cần nhớ:** phần trăm thay đổi liên tiếp phải **nhân các hệ số**, không cộng/trừ trực tiếp các tỉ lệ.
    
    ---

### Ranh giới Core / Entrance10 / Challenge

- **KNTT Core lớp 6:** bắt đầu từ 5 chặng lớp 6, 15 câu micro và bài tự luận Core ở phần B. Readiness riêng không lấy câu ngoài phạm vi lớp 6.
- **Entrance10 / Extension:** bài tổng hợp xuyên lớp chỉ luyện khi đã đủ nền; ngân hàng cũ chưa có phân loại theo lớp đáng tin cậy, nên không tính lượt luyện đó vào Core Readiness.
- **Challenge:** tự chọn sau khi nắm chắc Core, không phải điều kiện học tiếp và hiện chưa có bộ tuyển chọn Challenge riêng được kiểm định cho CĐ02.

---

# Theo dõi tiến độ

- [ ] Mức 1: tôi thực hiện đúng phép tính và quy tắc cơ bản.
- [ ] Mức 2: tôi biết chọn ƯCLN/BCNN và so sánh số đúng cách.
- [ ] Mức 3: tôi chuyển được bài toán thực tế về phép tính phù hợp.
- [ ] Mức 4: tôi giải thích được vì sao chọn phương pháp, không chỉ ghi kết quả.
- [ ] Tôi đã làm lại các bài sai mà không nhìn đáp án.
- [ ] Tôi biết lỗi của mình thuộc nhóm: phép tính / dấu / phân số / ước–bội / phần trăm.

---

## Liên kết Roadmap

- **← Chuyên đề trước:** [01 – Bản đồ chương trình Toán THCS](../01-ban-do-chuong-trinh/index.md)
- **← Học kiến thức:** [Chuyên đề 02 – Số và phép tính](index.md)
- **→ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 02](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [03 – Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ](../03-ti-le-ti-le-thuc/index.md)

---

## Source `03-M2-02` from `docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md`

### 03-M2-02
Nếu 6 quyển vở giá 54.000đ, 10 quyển cùng loại giá bao nhiêu?

---

## Source `03-M3-02` from `docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md`

### 03-M3-02
Một công thức dùng bột và đường theo tỉ lệ 5:2. Có 750 g bột thì cần bao nhiêu gam đường?

---

## Source `03-M3-03` from `docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md`

### 03-M3-03
12 máy làm 1 lô hàng trong 8 giờ. Với cùng năng suất, 16 máy cần bao lâu?

# Mức 4 – Tổng hợp

---

## Source `04-WR-08` from `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md`

#### 04-WR-08 · Chia rồi tính giá trị

Cho \(A=(x^3-2x^2):x^2\), \(x\ne0\). Tính \(A\) tại \(x=5\).

??? tip "Gợi ý"
    Rút gọn trước rồi mới thay số.

??? example "Xem lời giải"
    \[
    A=x-2.
    \]
    Tại \(x=5\), \(A=3\).

---

## Source `04-WR-09` from `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md`

#### 04-WR-09 · Bậc sau khi thu gọn

Xác định bậc của \(P=5x^4-5x^4+2x^3-3x+1\).

??? tip "Gợi ý"
    Không xác định bậc trước khi thu gọn.

??? example "Xem lời giải"
    Hai hạng tử bậc \(4\) triệt tiêu. Còn \(2x^3-3x+1\), nên bậc là \(3\).

---

## Source `04-WR-10` from `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md`

#### 04-WR-10 · Biến đổi rồi thay số

Rút gọn \(M=(x+1)(x-2)-x(x-1)\), rồi tính tại \(x=4\).

??? tip "Gợi ý"
    Khai triển hai tích rồi thu gọn trước.

??? example "Xem lời giải"
    \[
    M=(x^2-x-2)-(x^2-x)=-2.
    \]
    Vì vậy tại \(x=4\), \(M=-2\).

### Entrance10 / Extension

---

## Source `21-M2-08` from `docs/kien-thuc/21-thong-ke/bai-tap.md`

### 21-M2-08
Một bảng ghi chiều cao dùng lẫn cm và m. Nêu lỗi và cách sửa.

# Mức 3 – Vận dụng

---

## Source `21-M3-06` from `docs/kien-thuc/21-thong-ke/bai-tap.md`

### 21-M3-06
Một biểu đồ cột có trục dọc bắt đầu từ 90 thay vì 0, khiến chênh lệch trông rất lớn. Nêu rủi ro khi diễn giải.

---

## Source `21-M4-04` from `docs/kien-thuc/21-thong-ke/bai-tap.md`

### 21-M4-04
Một nhóm muốn khảo sát thời gian dùng điện thoại của toàn trường nhưng chỉ hỏi một lớp chuyên Tin. Hãy đánh giá tính đại diện và đề xuất cách chọn mẫu hợp lý hơn.

