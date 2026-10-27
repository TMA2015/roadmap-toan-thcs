# Bài 16. Hàm số bậc hai

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BÀI MẪU R4</p>
<p class="thpt-r4-lead">Bản xem thử cách học từng bài SGK KNTT. NotebookLM THPT đã thẩm định đợt R4 và yêu cầu bổ sung nội dung; bản chỉnh sửa này chờ tái kiểm duyệt. Bài tương tác chỉ dùng thử, không ghi điểm hay lưu lịch sử.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VI">
<a href="../">Tổng quan Chương VI</a>
<span class="is-current" aria-current="page">Bài 16 · Hàm số bậc hai</span>
<span aria-disabled="true">Bài khác · Chưa có bản mẫu</span>
</nav>
</div>

## 1. Khái niệm

Một **hàm số bậc hai** có dạng

\[
y=ax^2+bx+c,\qquad a,b,c\in\mathbb{R},\ a\ne 0.
\]

Tập xác định là \(\mathbb{R}\). Điều kiện \(a\ne 0\) là bắt buộc; nếu \(a=0\) thì biểu thức không còn là hàm bậc hai.

## 2. Đồ thị và tính chất

Đồ thị là một **parabol**. Ta viết dưới dạng đỉnh:

\[
y=a(x-h)^2+k,\qquad h=-\frac{b}{2a},\quad k=f(h)=-\frac{\Delta}{4a},\qquad \Delta=b^2-4ac.
\]

- Đỉnh \(I(h;k)\), trục đối xứng \(x=h\).
- Với \(a>0\): parabol mở lên, hàm giảm trên \(( -\infty;h )\), tăng trên \((h;+\infty)\), đạt **GTNN** \(k\) tại \(x=h\).
- Với \(a<0\): parabol mở xuống, hàm tăng trên \(( -\infty;h )\), giảm trên \((h;+\infty)\), đạt **GTLN** \(k\) tại \(x=h\).

**Bảng biến thiên và tập giá trị tổng quát** (đặt \(h=-\frac{b}{2a}\), \(k=-\frac{\Delta}{4a}\)):

| Điều kiện | Nghịch biến | Đồng biến | Cực trị tại \(x=h\) | Tập giá trị \(T\) |
|---|---|---|---|---|
| \(a>0\) | \((-\infty;h)\) | \((h;+\infty)\) | GTNN \(k\) | \(\left[-\frac{\Delta}{4a};+\infty\right)\) |
| \(a<0\) | \((h;+\infty)\) | \((-\infty;h)\) | GTLN \(k\) | \(\left(-\infty;-\frac{\Delta}{4a}\right]\) |

### Bốn bước vẽ đồ thị parabol

1. **Xác định đỉnh** \(I\left(-\frac{b}{2a};-\frac{\Delta}{4a}\right)\).
2. **Vẽ trục đối xứng** \(x=-\frac{b}{2a}\) và nhận biết chiều mở qua dấu \(a\).
3. **Xác định các điểm đặc trưng**: giao với \(Oy\) là \((0;c)\); giải \(ax^2+bx+c=0\) để tìm giao với \(Ox\) **nếu có**; có thể lấy thêm một cặp điểm đối xứng qua trục, nhất là khi không có đủ giao điểm.
4. **Vẽ parabol** đi qua các điểm đã xác định, có đỉnh và trục đối xứng đúng; hai nhánh đối xứng qua trục.

*Lưu ý:* Nếu \(\Delta<0\), parabol không cắt \(Ox\); nếu \(\Delta=0\), parabol tiếp xúc \(Ox\) tại đỉnh. Không được tự giả định luôn có hai giao điểm.

## 3. Ví dụ

Xét \(f(x)=x^2-4x+3=(x-2)^2-1\). Do đó:

- Đỉnh \(I(2;-1)\), trục \(x=2\).
- Hệ số \(a=1>0\), nên hàm có giá trị nhỏ nhất \(-1\).
- Khi \(y=0\), ta được \((x-1)(x-3)=0\), vì vậy đồ thị cắt \(Ox\) tại \((1;0)\), \((3;0)\).
- Khi \(x=0\), ta có \(y=3\), nên đồ thị cắt \(Oy\) tại \((0;3)\).
- Hàm số nghịch biến trên \((-\infty;2)\), đồng biến trên \((2;+\infty)\) và có tập giá trị \(T=[-1;+\infty)\).

Áp dụng **bốn bước vẽ**: xác định \(I(2;-1)\) → kẻ trục \(x=2\) → chấm \((1;0)\), \((3;0)\), \((0;3)\) cùng điểm đối xứng \((4;3)\) → nối thành parabol mở lên.

<figure class="thpt-r4-plot" data-thpt-quadratic-plot>
<svg viewBox="0 0 640 360" role="img" aria-label="Đồ thị y bằng x bình phương trừ 4x cộng 3, đỉnh I(2;−1), trục nét đứt x=2, cắt Ox ở (1;0) và (3;0), cắt Oy ở (0;3)">
<title>Parabol y = x² − 4x + 3</title>
<text x="20" y="28">y = x² − 4x + 3 · Đỉnh I(2;−1), nghiệm 1 và 3</text>
</svg>
<figcaption>Đồ thị được dựng từ chính hàm số của ví dụ, không phải ảnh trang trí hoặc hình chép từ SGK.</figcaption>
</figure>

## 4. Luyện tập

**Thẻ Core chung** dùng một nội dung/mã canonical minh họa, truy cập từ bài SGK, thư viện Core và chuyên đề. Core có gợi ý; không có tab Kiến thức thứ hai vì lý thuyết nằm ngay trên trang bài học.

<div class="math-library-entry-grid" data-thpt-r4>
<a class="math-library-entry" href="../../../chuyen-de/ham-so/core/"><strong>🧩 Core · Tọa độ đỉnh (bản mẫu)</strong><span>Mở một thẻ Core dùng chung — không tạo ba bộ câu hỏi trùng nhau.</span></a>
</div>

## 5. Vận dụng

Hàm số bậc hai có thể biểu diễn diện tích hình chữ nhật khi chu vi được giữ cố định. [Xem bài tự luận mỏ neo mẫu](../../thu-vien/tu-luan.md).

!!! warning "Chỉ là bài học trình diễn"
    Đã cập nhật theo biên bản NotebookLM R4 có kết luận REVISIONS_REQUIRED. Những sửa đổi này chưa được NotebookLM tái kiểm duyệt; ACADEMIC_CLEARANCE vẫn là NO, không chấm tiến độ và không phát hành.
