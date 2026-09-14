# Bài tập – Chuyên đề 02: Số và phép tính

<link rel="stylesheet" href="../../../assets/stylesheets/practice-engine.css">
<script src="../../../assets/javascripts/practice-engine-v2.js" defer></script>

> **Mục tiêu:** củng cố số nguyên, phân số, lũy thừa, ước–bội, tỉ số phần trăm.
> **Quy ước:** `02-Mx-yy`.

## 🎯 Luyện tập tương tác

Mỗi lượt hệ thống chọn **10 câu** từ ngân hàng **120 câu**. Sau mỗi câu, học sinh nhận phản hồi ngay; nếu trả lời sai sẽ có lời giải ngắn và nút **Làm câu tương tự**.

Bảng **Tiến độ theo kỹ năng** được sắp cố định theo lộ trình kiến thức nền → kiến thức sau. Học sinh có thể bấm trực tiếp vào một kỹ năng để luyện riêng; chế độ **Luyện điểm yếu** sẽ ưu tiên tối đa hai kỹ năng đủ dữ liệu nhưng có độ chính xác thấp nhất.

<div data-practice-bank-v2="../../../assets/data/practice/02-so-va-phep-tinh-v1.manifest.json" data-session-size="10"></div>

> **Lưu ý:** tiến độ hiện được lưu bằng `localStorage`, vì vậy dữ liệu chưa tự đồng bộ giữa các thiết bị hoặc trình duyệt khác nhau.

---

## Bài tập tự luận bổ sung

Các bài dưới đây được **chọn lọc** để học sinh luyện cách trình bày và suy luận sau phần trắc nghiệm tương tác. Không cần làm lặp nhiều bài cùng dạng nếu đã đạt tốt trong Practice Bank.

# Mức 1 – Nhận biết
### 02-M1-01
Tính \(48-73+25\).
### 02-M1-02
Tính \(\frac34+\frac56\).
### 02-M1-03
Phân tích 84 ra thừa số nguyên tố.

# Mức 2 – Thông hiểu
### 02-M2-01
Tính hợp lý \(37\cdot25+63\cdot25\).
### 02-M2-02
Tìm ƯCLN và BCNN của 84 và 126.
### 02-M2-03
Sắp xếp tăng dần: \(-1,25;-\frac65;0;\frac34\).

# Mức 3 – Vận dụng
### 02-M3-01
36 nam và 48 nữ được chia thành nhiều nhóm nhất sao cho mỗi nhóm có số nam bằng nhau và số nữ bằng nhau. Có bao nhiêu nhóm?
### 02-M3-02
Bể có \(\frac35\) dung tích nước, dùng đi \(\frac14\) lượng đang có. Còn bao nhiêu phần dung tích bể?
### 02-M3-03
Tính \(A=2^3-3(\frac12-\frac56)+\frac74\).

# Mức 4 – Tổng hợp
### 02-M4-01
Tìm số tự nhiên nhỏ nhất lớn hơn 100, chia 12 dư 5 và chia 18 cũng dư 5.
### 02-M4-02
Một món hàng giảm 15% rồi giảm tiếp 10% trên giá mới. Tổng mức giảm là bao nhiêu phần trăm?
### 02-M4-03
Tìm số tự nhiên nhỏ nhất có đúng ba thừa số nguyên tố khác nhau và chia hết cho 6.

# Đáp án nhanh
- 02-M1-01: 0; 02-M1-02: \(19/12\); 02-M1-03: \(2^2\cdot3\cdot7\).
- 02-M2-01: 2500; 02-M2-02: 42 và 252; 02-M2-03: \(-1,25<-1,2<0<0,75\).
- 02-M3-01: 12 nhóm; 02-M3-02: \(9/20\); 02-M3-03: \(43/4\).
- 02-M4-01: 113; 02-M4-02: 23,5%; 02-M4-03: 30.

---

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

# Theo dõi tiến độ

- [ ] Mức 1: tôi thực hiện đúng phép tính và quy tắc cơ bản.
- [ ] Mức 2: tôi biết chọn ƯCLN/BCNN và so sánh số đúng cách.
- [ ] Mức 3: tôi chuyển được bài toán thực tế về phép tính phù hợp.
- [ ] Mức 4: tôi giải thích được vì sao chọn phương pháp, không chỉ ghi kết quả.
- [ ] Tôi đã làm lại các bài sai mà không nhìn đáp án.
- [ ] Tôi biết lỗi của mình thuộc nhóm: phép tính / dấu / phân số / ước–bội / phần trăm.

---

# Liên kết Roadmap

- **← Học kiến thức:** [Chuyên đề 02 – Số và phép tính](index.md)
- **← Chuyên đề trước:** [01 – Bản đồ chương trình Toán THCS](../01-ban-do-chuong-trinh/index.md)
- **→ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 02](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [03 – Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ](../03-ti-le-ti-le-thuc/index.md)
