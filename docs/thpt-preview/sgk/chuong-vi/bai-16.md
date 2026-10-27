# Bài 16. Hàm số bậc hai

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BÀI MẪU R4</p>
<p class="thpt-r4-lead">Bản xem thử cách học từng bài SGK KNTT. Nội dung và các bài tương tác chưa được NotebookLM THPT kiểm duyệt học thuật; không ghi điểm, không lưu lịch sử.</p>
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
y=a(x-h)^2+k,\qquad h=-\frac{b}{2a},\quad k=f(h).
\]

- Đỉnh \(I(h;k)\), trục đối xứng \(x=h\).
- Với \(a>0\): parabol mở lên, hàm giảm trên \(( -\infty;h )\), tăng trên \((h;+\infty)\), đạt **GTNN** \(k\) tại \(x=h\).
- Với \(a<0\): parabol mở xuống, hàm tăng trên \(( -\infty;h )\), giảm trên \((h;+\infty)\), đạt **GTLN** \(k\) tại \(x=h\).

## 3. Ví dụ

Xét \(f(x)=x^2-4x+3=(x-2)^2-1\). Do đó:

- Đỉnh \(I(2;-1)\), trục \(x=2\).
- Hệ số \(a=1>0\), nên hàm có giá trị nhỏ nhất \(-1\).
- Khi \(y=0\), ta được \((x-1)(x-3)=0\), vì vậy hai giao điểm với \(Ox\) có hoành độ \(1\) và \(3\).

<figure class="thpt-r4-plot" data-thpt-quadratic-plot>
<svg viewBox="0 0 640 360" role="img" aria-label="Đồ thị minh họa y bằng x bình phương trừ 4x cộng 3, có đỉnh (2, âm 1), cắt Ox tại 1 và 3">
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

Hàm số bậc hai có thể biểu diễn diện tích hình chữ nhật khi chu vi được giữ cố định. [Xem bài tự luận mỏ neo mẫu](../../thu-vien/tu-luan.md#bai-mo-neo-demo).

!!! warning "Chỉ là bài học trình diễn"
    Bản R4 chưa phải một bài đã đối chiếu đầy đủ SGK/SBT hoặc được chấp thuận phát hành. Đề mục, các dạng bài và câu hỏi sẽ được chỉnh theo biên bản NotebookLM THPT.
