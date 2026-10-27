# Bài tập cuối Chương VI — Bản nháp tổng hợp

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · DRAFT BÀI TẬP TÍCH HỢP</p>
<p class="thpt-r4-lead"><strong>DRAFT_NOT_ACADEMICALLY_REVIEWED.</strong> Các bài dưới đây đều được dự án soạn mới để kiểm thử độ phủ chương và chuẩn bị batch. Đây <strong>không phải bản chép bài tập cuối chương SGK/SBT</strong> hay thư viện Written đã được nghiệm thu; chưa có canonical IDs, chưa tính điểm, không ghi tiến độ.</p>
<a href="../">← Danh mục Chương VI</a>
</div>

## Phần A — Kiến thức cơ bản và kết nối

### A1. Tập xác định và đồ thị

Cho \(f(x)=\sqrt{7-2x}\).

1. Tìm tập xác định \(D\).
2. Giải thích vì sao \(f(x)\ge0\) trên toàn bộ \(D\).

<details><summary>Xem lời giải A1</summary>
\(7-2x\ge0\Leftrightarrow x\le\frac72\), nên \(D=(-\infty;\frac72]\). Căn bậc hai số học không âm, do đó \(f(x)\ge0\). 
</details>

### A2. Parabol và đặc trưng đồ thị

Xét \(g(x)=-x^2+6x-5\).

1. Viết thành dạng đỉnh.
2. Tìm tọa độ đỉnh, trục đối xứng và giá trị lớn nhất.
3. Tìm các giao điểm với trục hoành.

<details><summary>Xem lời giải A2</summary>
\(g(x)=-(x-3)^2+4\). Đỉnh \(I(3;4)\); trục đối xứng \(x=3\); GTLN \(4\) tại \(x=3\). Phương trình \(g(x)=0\Leftrightarrow x^2-6x+5=0\Leftrightarrow (x-1)(x-5)=0\), nên cắt \(Ox\) tại \((1;0)\) và \((5;0)\).
</details>

### A3. Xét dấu và bất phương trình

Giải cả hai bất phương trình:

1. \(x^2-7x+10<0\).
2. \(x^2-7x+10\ge0\).

<details><summary>Xem lời giải A3</summary>
Tam thức bằng \((x-2)(x-5)\) và có \(a>0\). Âm trên khoảng \((2;5)\), bằng \(0\) tại \(2,5\), dương ngoài khoảng. Vì vậy câu 1 có nghiệm \((2;5)\); câu 2 có nghiệm \((-\infty;2]\cup[5;+\infty)\).
</details>

### A4. Bất phương trình bậc hai với hệ số âm

Giải \(-2x^2+8x+10\ge0\).

<details><summary>Xem lời giải A4</summary>
Chia cho \(-2\) và **đổi chiều** dấu: \(x^2-4x-5\le0\Leftrightarrow(x-5)(x+1)\le0\). Tập nghiệm \([-1;5]\).
</details>

## Phần B — Phương trình chứa căn và ứng dụng

### B1. Phương trình căn một vế

Giải \(\sqrt{3x+1}=x+1\) và thử lại mọi nghiệm.

<details><summary>Xem lời giải B1</summary>
Điều kiện \(x+1\ge0\). Bình phương được \(3x+1=(x+1)^2\Leftrightarrow x^2-x=0\), nên \(x=0\) hoặc \(x=1\). Cả hai đều thỏa điều kiện và phương trình ban đầu: \(1=1\) và \(2=2\). Vậy \(S=\{0;1\}\).
</details>

### B2. Phương trình căn hai vế

Giải \(\sqrt{x^2-2x+5}=\sqrt{x+3}\).

<details><summary>Xem lời giải B2</summary>
Bình phương: \(x^2-2x+5=x+3\Leftrightarrow x^2-3x+2=0\), cho \(x=1,2\). Tại cả hai giá trị, \(x+3>0\) và hai biểu thức dưới căn bằng nhau, vì vậy \(S=\{1;2\}\).
</details>

### B3. Vận dụng mô hình diện tích

Một mảnh đất hình chữ nhật sát tường được rào ba mặt bằng \(40\) m lưới. Gọi \(x\) (m) là độ dài mỗi cạnh vuông góc với tường.

1. Xác định điều kiện của \(x\) và biểu thức diện tích \(S(x)\).
2. Tính diện tích lớn nhất.
3. Tìm mọi \(x\) để diện tích **không nhỏ hơn** \(192\,\mathrm{m}^2\).

<details><summary>Xem lời giải B3 và rubric tự chấm 6 điểm</summary>
<p>Điều kiện \(0<x<20\). Cạnh song song với tường dài \(40-2x\), do đó \(S=x(40-2x)=-2(x-10)^2+200\).</p>
<p>Vì \(-2(x-10)^2\le0\), GTLN là \(200\,\mathrm{m}^2\) khi \(x=10\) m. Điều kiện \(S\ge192\) tương đương \(-2(x-10)^2+200\ge192\Leftrightarrow(x-10)^2\le4\), nên \(8\le x\le12\) m; toàn bộ nghiệm thuộc miền \(0<x<20\).</p>
<table><thead><tr><th>Tiêu chí</th><th>Điểm</th></tr></thead><tbody><tr><td>Chọn ẩn và điều kiện</td><td>1</td></tr><tr><td>Lập đúng hàm diện tích</td><td>1</td></tr><tr><td>Hoàn thành bình phương và tìm GTLN</td><td>2</td></tr><tr><td>Giải bất phương trình, lọc điều kiện</td><td>1</td></tr><tr><td>Kết luận có đơn vị</td><td>1</td></tr></tbody></table>
</details>

### B4. Kiểm tra dấu với tham số (dự kiến phân tầng bổ sung)

Tìm các giá trị thực \(m\) sao cho \(x^2-2mx+4>0\) với mọi \(x\in\mathbb{R}\).

<details><summary>Xem lời giải B4</summary>
Hệ số bậc hai \(a=1>0\). Tam thức dương với mọi \(x\) khi và chỉ khi biệt thức \(\Delta=(-2m)^2-16<0\), tức \(m^2<4\Leftrightarrow -2<m<2\). Nếu \(\Delta=0\), tam thức bằng \(0\) tại một điểm nên không thỏa dấu \(>\).
</details>

## Hướng dẫn sử dụng và giới hạn học thuật

- Thứ tự học gợi ý: B15 (hàm số) → B16 (parabol) → B17 (dấu/bất phương trình) → B18 (phương trình căn) → bài tổng hợp này.
- **Tất cả 8 đề là bản nháp nguyên gốc**, chưa được chuyển thành dữ liệu canonical; không dùng lời giải trong thẻ <code>details</code> làm chứng cứ đã được NotebookLM thẩm định.
- Các kí hiệu A1–A4/B1–B4 là **số thứ tự trên trang**, không phải item IDs chuẩn.
- Khi hoàn thành source receipt và curriculum matrix từ SGK/SBT gốc, cần điều chỉnh độ phủ đề, rubric, phân tầng và chọn item phù hợp cho Written/Readiness, sau đó gửi **một batch review** theo Project Sources 06/07.

!!! warning "Chưa Academic PASS"
    Nội dung bài tập này chỉ phục vụ phát triển và QA giao diện. Chưa có ACADEMIC_CLEARANCE và chưa được phép đưa lên production.
