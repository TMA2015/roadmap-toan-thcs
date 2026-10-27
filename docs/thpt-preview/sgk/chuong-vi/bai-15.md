# Bài 15. Hàm số

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BẢN NHÁP HỌC LIỆU</p>
<p class="thpt-r4-lead"><strong>DRAFT_NOT_ACADEMICALLY_REVIEWED.</strong> Nội dung gốc do dự án biên soạn để chuẩn bị batch review Chương VI. Mạch mục đã đối chiếu sơ bộ từ chỉ mục SGK trực tuyến; chưa có source receipt SGK/SBT PDF gốc và chưa được NotebookLM thẩm định. Không ghi điểm hay tiến độ.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VI">
<a href="../">Chương VI</a><span class="is-current" aria-current="page">Bài 15 · Hàm số (nháp)</span><a href="../bai-16/">Bài 16 · Hàm số bậc hai</a>
</nav></div>

## 1. Khái niệm hàm số

Cho tập hợp \(D\) gồm các giá trị của \(x\). Nếu **mỗi** \(x\in D\) xác định **duy nhất một** số thực \(y\), ta nói \(y\) là một *hàm số* của \(x\) trên \(D\). Kí hiệu \(y=f(x)\).

- \(D\): **tập xác định** của hàm số.
- \(f(x)\): **giá trị của hàm số** tại \(x\).
- \(T=\{f(x)\mid x\in D\}\): **tập giá trị** của hàm số.
- Một giá trị \(x\) không thể đồng thời ứng với hai giá trị \(y\) khác nhau nếu đó là đồ thị của một hàm số.

**Ví dụ 1.** Với \(f(x)=\sqrt{x-1}\), căn thức xác định khi \(x-1\ge0\), tức \(D=[1;+\infty)\). Đồng thời \(f(x)\ge0\) và mọi giá trị không âm đều nhận được; do đó \(T=[0;+\infty)\).

**Ví dụ 2.** Với \(g(x)=\frac{x+1}{x-2}\), mẫu số phải khác \(0\), nên \(D=\mathbb{R}\setminus\{2\}\). Viết \(g(x)=1+\frac{3}{x-2}\), suy ra giá trị \(1\) không đạt được, còn mọi giá trị khác \(1\) đều đạt được; vậy \(T=\mathbb{R}\setminus\{1\}\).

## 2. Đồ thị của hàm số

Đồ thị của hàm số \(y=f(x)\) trên \(D\) là tập hợp các điểm \(M(x;f(x))\) với \(x\in D\). Hàm số có thể được cho bằng **công thức, bảng giá trị, đồ thị** hoặc mô tả một sự phụ thuộc duy nhất.

**Cách kiểm tra một điểm:** \(A(x_0;y_0)\) thuộc đồ thị khi và chỉ khi \(x_0\in D\) và \(y_0=f(x_0)\).

**Ví dụ 3.** Với \(y=2x+1\), điểm \(A(2;5)\) thuộc đồ thị vì \(2\cdot2+1=5\); điểm \(B(2;4)\) không thuộc đồ thị. Khi vẽ đồ thị, trục hoành biểu diễn \(x\), trục tung biểu diễn \(y\).

!!! tip "Chú ý khi đọc hình"
    Khi một đường thẳng đứng \(x=x_0\) cắt hình vẽ tại nhiều hơn một điểm, hình vẽ đó **không thể** là đồ thị của hàm số \(y=f(x)\) trên miền chứa \(x_0\).

## 3. Sự đồng biến, nghịch biến của hàm số

Cho hàm số \(y=f(x)\) xác định trên khoảng \(K\). Với mọi \(x_1,x_2\in K\) thỏa \(x_1<x_2\):

| Tính chất | Điều kiện | Nhìn từ trái qua phải trên đồ thị |
|---|---|---|
| **Đồng biến** trên \(K\) | \(f(x_1)<f(x_2)\) | Đường đi lên |
| **Nghịch biến** trên \(K\) | \(f(x_1)>f(x_2)\) | Đường đi xuống |

Nếu hàm số không có cùng một chiều biến thiên trên toàn miền, cần **chia thành từng khoảng**; không kết luận chỉ từ hai giá trị đầu/cuối.

**Ví dụ 4.** Hàm số \(f(x)=x^2\) nghịch biến trên \((-\infty;0)\) và đồng biến trên \((0;+\infty)\). Điều này **không có nghĩa** \(f\) đồng biến hoặc nghịch biến trên toàn \(\mathbb{R}\).

**Ví dụ 5 (mô hình).** Độ dài đường đi của xe chuyển động đều \(s(t)=12t\) (km) với \(t\ge0\) (giờ) tăng khi thời gian tăng, nên \(s\) đồng biến trên \([0;+\infty)\).

## 4. Tự luyện trước khi chuyển bài

1. Tìm tập xác định của \(h(x)=\sqrt{5-2x}\).
2. Với \(p(x)=x^2-4\), hãy kiểm tra điểm \(A(3;5)\) có thuộc đồ thị hay không.
3. Hàm \(q(x)=-3x+7\) đồng biến hay nghịch biến trên \(\mathbb{R}\)? Giải thích theo định nghĩa.

<details><summary>Đáp án và lập luận (chỉ mở sau khi tự làm)</summary>
<ol><li>\(5-2x\ge0\iff x\le\frac52\). Vậy \(D=(-\infty;\frac52]\).</li>
<li>\(p(3)=9-4=5\), do đó \(A(3;5)\) thuộc đồ thị.</li>
<li>Nếu \(x_1<x_2\) thì \(q(x_1)-q(x_2)=-3(x_1-x_2)>0\); hàm nghịch biến trên \(\mathbb{R}\).</li></ol>
</details>

## 5. Liên kết kiến thức

- [Bài 16 — Hàm số bậc hai](../bai-16/) sử dụng các khái niệm tập xác định, đồ thị và tính đơn điệu.
- Các bài phía sau trong Chương VI kế thừa kĩ năng đọc đồ thị, phân tích điều kiện và xác định nghiệm.

!!! warning "Giới hạn nguồn và phát hành"
    Đây là **draft cho Chương VI**. Chưa đối chiếu bản SGK/SBT PDF gốc theo từng hoạt động/trang in; các ví dụ và câu hỏi tự luyện do dự án tự soạn, **không phải câu trích nguyên SGK**. Không cấp Academic PASS cho nội dung này cho tới khi có verdict NotebookLM theo batch. Không có Core/Practice/Readiness canonical cho Bài 15 ở phiên bản này.
