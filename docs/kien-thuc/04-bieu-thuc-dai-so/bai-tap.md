# Bài tập – Chuyên đề 04: Biểu thức đại số

<link rel="stylesheet" href="../../../assets/stylesheets/practice-engine.css">
<script src="../../../assets/javascripts/practice-engine-v2.js" defer></script>

> **Mục tiêu:** rút gọn, thay giá trị, biến đổi và nhận dạng cấu trúc biểu thức.
> **Quy ước:** `04-Mx-yy`.

## 🎯 Luyện tập tương tác

Mỗi lượt hệ thống chọn **10 câu** từ ngân hàng **120 câu**. Ngân hàng bao phủ các kỹ năng chính của chuyên đề từ nhận biết đơn thức – đa thức, hạng tử đồng dạng, thu gọn, cộng – trừ, bỏ ngoặc, nhân biểu thức, thay số, điều kiện xác định, biến đổi nhiều bước đến bài toán thực tế.

Sau mỗi câu, học sinh nhận phản hồi ngay; nếu trả lời sai sẽ có lời giải ngắn và nút **Làm câu tương tự**. Bảng **Tiến độ theo kỹ năng** được sắp cố định theo lộ trình học; học sinh có thể bấm trực tiếp vào một kỹ năng để luyện riêng. Chế độ **Luyện điểm yếu** ưu tiên tối đa hai kỹ năng đủ dữ liệu nhưng có độ chính xác thấp nhất.

<div data-practice-bank-v2="../../../assets/data/practice/04-bieu-thuc-dai-so-v2.manifest.json" data-session-size="10"></div>

> **Lưu ý:** tiến độ hiện được lưu bằng `localStorage`, vì vậy dữ liệu chưa tự đồng bộ giữa các thiết bị hoặc trình duyệt khác nhau.

---

## Bài tập tự luận bổ sung

Các bài dưới đây được chọn lọc để luyện trình bày biến đổi đại số, kiểm soát dấu ngoặc và mô hình hóa bằng biểu thức.

# Mức 1 – Nhận biết
### 04-M1-01
Thu gọn \(3x+5x-2\).
### 04-M1-02
Tính \(2x^2-3x+1\) tại \(x=2\).
### 04-M1-03
Xác định hệ số của \(x^2\) trong \(5x^2-3x+7\).

# Mức 2 – Thông hiểu
### 04-M2-01
Rút gọn \(2(x-3)+3(x+1)\).
### 04-M2-02
Rút gọn \(4a-2b-(a-5b)\).
### 04-M2-03
Cho \(A=2x+3\), \(B=x-5\). Tính \(A-2B\).

# Mức 3 – Vận dụng
### 04-M3-01
Rút gọn rồi tính \(A=3x(x-2)-x(3x-5)\) tại \(x=4\).
### 04-M3-02
Chứng minh \((x+2)+(2x-1)-(3x+1)=0\).
### 04-M3-03
Viết biểu thức biểu diễn chu vi hình chữ nhật có chiều dài \(2x+3\), chiều rộng \(x-1\).

# Mức 4 – Tổng hợp
### 04-M4-01
Tìm \(x\) để \(2(x-1)+3(x+2)=19\).
### 04-M4-02
Rút gọn \(A=(x+1)(x+2)-x(x+3)\). Nhận xét về giá trị của A.
### 04-M4-03
Một số có hai chữ số, chữ số hàng chục là \(a\), hàng đơn vị là \(b\). Viết biểu thức cho số đó và số đảo chữ số; tính hiệu hai số.

# Đáp án nhanh
- 04-M1-01: \(8x-2\); 04-M1-02: 3; 04-M1-03: 5.
- 04-M2-01: \(5x-3\); 04-M2-02: \(3a+3b\); 04-M2-03: 13.
- 04-M3-01: \(-4\); 04-M3-02: 0; 04-M3-03: \(6x+4\).
- 04-M4-01: 3; 04-M4-02: 2; 04-M4-03: \(10a+b\), \(10b+a\), hiệu \(9(a-b)\).

---

# Hướng dẫn chọn lọc

## 04-M2-02 – Bỏ ngoặc có dấu trừ

\[
4a-2b-(a-5b)=4a-2b-a+5b=3a+3b.
\]

**Điểm cần nhớ:** dấu “−” trước ngoặc làm **đổi dấu mọi hạng tử** trong ngoặc.

## 04-M3-01 – Rút gọn trước, thay số sau

\[
A=3x^2-6x-3x^2+5x=-x.
\]

Sau đó mới thay \(x=4\), được \(A=-4\).

**Điểm cần nhớ:** rút gọn biểu thức trước thường giảm đáng kể số phép tính và nguy cơ sai.

## 04-M4-03 – Biểu diễn số bằng chữ số

Số có hàng chục là \(a\), hàng đơn vị là \(b\) được viết:

\[
10a+b.
\]

Số đảo chữ số là \(10b+a\). Hiệu là:

\[
(10a+b)-(10b+a)=9(a-b).
\]

**Điểm cần nhớ:** chữ số ở hàng chục có giá trị gấp 10 lần chữ số đó.

---

# Theo dõi tiến độ

- [ ] Tôi nhận biết đúng hạng tử đồng dạng, hệ số và bậc.
- [ ] Tôi bỏ ngoặc đúng dấu và thu gọn chính xác.
- [ ] Tôi biết rút gọn trước khi thay giá trị khi có lợi.
- [ ] Tôi lập được biểu thức từ bài toán bằng lời.
- [ ] Tôi đã làm lại các bài sai mà không nhìn đáp án.
- [ ] Tôi biết mình thường sai ở dấu, phép nhân hay bước mô hình hóa.

---

# Liên kết Roadmap

- **← Học kiến thức:** [Chuyên đề 04 – Biểu thức và biến đổi đại số](index.md)
- **← Chuyên đề trước:** [03 – Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ](../03-ti-le-ti-le-thuc/index.md)
- **→ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 04](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [05 – 7 Hằng đẳng thức đáng nhớ](../05-7-hang-dang-thuc/index.md)
