# Bài 16. Hàm số bậc hai

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BÀI MẪU R4</p>
<p class="thpt-r4-lead">Bản xem thử cách học từng bài SGK KNTT. Nội dung học thuật mẫu Bài 16 đã được NotebookLM tái thẩm định R4 Postfix và xác nhận ACADEMIC_CLEARANCE: YES (27/10/2026). Đây vẫn là bản xem thử giao diện; bài tương tác không ghi điểm hoặc lưu lịch sử.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VI">
<a href="../">Tổng quan Chương VI</a>
<a href="../bai-15/">Bài 15 · Hàm số (nháp)</a>
<span class="is-current" aria-current="page">Bài 16 · Hàm số bậc hai</span>
<a href="../bai-17/">Bài 17 · Dấu tam thức (nháp)</a>
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

**Thẻ Core SGK** củng cố hiểu khái niệm sau bài. Cùng một item ID có thể xuất hiện trong Practice cơ bản của chuyên đề dưới vai trò khác, không sao chép đáp án/hồ sơ; Core có gợi ý và không tạo tab lý thuyết thứ hai.

<div class="thpt-r4-lesson-core-entry" data-thpt-practice-hub>
<button type="button" class="thpt-r4-practice-open" data-thpt-open-quiz="b16-core" aria-label="Mở cửa sổ Core Bài 16 · Tọa độ đỉnh">🧩 Luyện Core · Tọa độ đỉnh (THPT-CORE-QF01)</button>
</div>

**Tiếp tục rèn luyện:** [Luyện tập và Vận dụng Chương VI](luyen-tap.md) · [Tự kiểm tra cuối Chương VI (demo kỹ thuật)](tu-kiem-tra-chuong.md).

## 5. Vận dụng

Hàm số bậc hai có thể biểu diễn diện tích hình chữ nhật khi chu vi được giữ cố định. [Xem bài tự luận mỏ neo mẫu](../../thu-vien/tu-luan.md).

!!! warning "Chỉ là bài học trình diễn"
    Biên bản NotebookLM R4 Postfix đã xác nhận học thuật PASS cho riêng bài mẫu này (5/5 mục tiêu, 5/5 item). Nghiệm thu giao diện trên thiết bị thực tế và phê duyệt phát hành vẫn là các bước riêng; bản mẫu không ghi nhận tiến độ.
