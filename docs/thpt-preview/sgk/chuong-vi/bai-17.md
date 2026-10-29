# Bài 17. Dấu của tam thức bậc hai

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · HỌC LIỆU ĐÃ REVIEW</p>
<p class="thpt-r4-lead"><strong>NOTEBOOKLM_CHVI_SNAPSHOT_PASS · TÍCH HỢP ĐANG QA.</strong> Học liệu Bài 17 trong batch SGK Chương VI đã được NotebookLM review PASS ngày 28/10/2026; trang hiện tại đang được đồng bộ/đối chiếu lại với snapshot đã duyệt. Core và Luyện tập lấy item đã review qua cùng ID; không ghi điểm hoặc mastery.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VI"><a href="../">Chương VI</a><a href="../bai-16/">Bài 16</a><span class="is-current" aria-current="page">Bài 17 · Dấu tam thức</span><a href="../bai-18/">Bài 18</a></nav>
</div>

## 1. Tam thức bậc hai

Tam thức bậc hai theo biến \(x\) là biểu thức

\[
f(x)=ax^2+bx+c,\quad a\ne0.
\]

Đặt \(\Delta=b^2-4ac\). Để xét dấu tam thức, cần biết dấu của hệ số \(a\) và số nghiệm thực của \(f(x)=0\). Đồ thị \(y=f(x)\) là một parabol: phía **trên trục hoành** biểu diễn \(f(x)>0\), phía **dưới** biểu diễn \(f(x)<0\).

## 2. Định lí về dấu của tam thức bậc hai

| Biệt thức | Nghiệm thực của \(f(x)=0\) | Dấu \(f(x)\) |
|---|---|---|
| \(\Delta<0\) | Không có | Luôn **cùng dấu** với \(a\) trên \(\mathbb R\) |
| \(\Delta=0\) | Nghiệm kép \(x_0=-b/(2a)\) | Bằng \(0\) tại \(x_0\); **cùng dấu** với \(a\) ở mọi nơi khác |
| \(\Delta>0\) | Hai nghiệm \(x_1<x_2\) | **Cùng dấu** \(a\) khi \(x<x_1\) hoặc \(x>x_2\); **trái dấu** \(a\) khi \(x_1<x<x_2\); bằng \(0\) tại \(x_1,x_2\) |

**Mẹo nhớ có kiểm chứng:** Khi có hai nghiệm, *ngoài cùng dấu \(a\); trong trái dấu \(a\)*. Mẹo này **không thay thế** xét riêng các trường hợp \(\Delta=0\) và \(\Delta<0\).

**Ví dụ 1.** Xét \(f(x)=-x^2+4x-3=-(x-1)(x-3)\). Ta có \(a=-1\), hai nghiệm \(1<3\). Vì vậy \(f(x)<0\) trên \((-\infty;1)\cup(3;+\infty)\), \(f(x)>0\) trên \((1;3)\) và \(f(x)=0\) tại \(x=1,3\).

**Ví dụ 2.** \(g(x)=x^2-2x+1=(x-1)^2\ge0\) với mọi \(x\). Dấu bằng chỉ xảy ra tại \(x=1\) (\(\Delta=0\)). Không được nói \(g(x)>0\) với mọi \(x\).

### Bảng xét dấu — mẫu cần biết

Trên bảng xét dấu, mỗi nghiệm của tam thức là điểm phân chia khoảng; tại nghiệm thì giá trị bằng \(0\). Với \(\Delta>0\) và \(x_1<x_2\), dấu được xác định như sau:

| Vị trí | \((-\infty;x_1)\) | \(x_1\) | \((x_1;x_2)\) | \(x_2\) | \((x_2;+\infty)\) |
|---|:---:|:---:|:---:|:---:|:---:|
| Nếu \(a>0\) | \(+\) | \(0\) | \(-\) | \(0\) | \(+\) |
| Nếu \(a<0\) | \(-\) | \(0\) | \(+\) | \(0\) | \(-\) |

Khi \(\Delta=0\), không xuất hiện khoảng đổi dấu qua nghiệm kép; khi \(\Delta<0\), tam thức không có nghiệm và giữ nguyên dấu của \(a\). Cần xét đúng biểu thức **tam thức bậc hai**, không tự áp dụng bảng này cho phân thức nếu chưa xét cả dấu mẫu số.

**Ví dụ 2b (tự soạn — nghiệm kép).** \(f(x)=-2(x+1)^2\le0\) với mọi \(x\in\mathbb R\), bằng \(0\) duy nhất tại \(x=-1\). Do đó \(f(x)<0\) có tập nghiệm \(\mathbb R\setminus\{-1\}\), còn \(f(x)\le0\) có tập nghiệm \(\mathbb R\).

**Ví dụ 2c (tự soạn — không có nghiệm).** \(g(x)=-2x^2+4x-5=-2(x-1)^2-3<0\) với mọi \(x\). Đây là ví dụ \(\Delta<0\), \(a<0\); nó cũng cho thấy định lí dấu phù hợp với dạng bình phương hoàn chỉnh.

## 3. Bất phương trình bậc hai

Giải bất phương trình \(ax^2+bx+c\ >,\ge,<,\le\ 0\) bằng quy trình:

1. Xác định \(a\) và \(\Delta\), tìm các nghiệm thực của tam thức (nếu có).
2. Lập các khoảng và xét dấu theo định lí.
3. Chọn các khoảng đúng theo kí hiệu bất phương trình; **chỉ lấy các nghiệm của tam thức** nếu có dấu bằng (\(\ge,\le\)).
4. Kiểm tra điều kiện của biến nếu bài có tình huống thực tế.

**Ví dụ 3.** Giải \(-x^2+4x-3\ge0\). Từ Ví dụ 1, tam thức dương trên \((1;3)\), bằng 0 tại \(1,3\); vậy nghiệm là \(\boxed{[1;3]}\).

**Ví dụ 4 (thực tế do dự án tự soạn).** Dùng \(18\) m lưới rào ba cạnh một hình chữ nhật sát bức tường. Gọi \(x\) (m) là chiều rộng vuông góc tường, \(0<x<9\); chiều còn lại là \(18-2x\). Diện tích \(S(x)=x(18-2x)\). Muốn \(S(x)\ge36\), ta giải

\[
-2x^2+18x-36\ge0
\iff x^2-9x+18\le0
\iff (x-3)(x-6)\le0.
\]

Suy ra \(\boxed{3\le x\le6}\) (m); các nghiệm thỏa \(0<x<9\).

### Bất phương trình có tham số: khi nào đúng với mọi số thực?

Đối với một tam thức \(f(x)=ax^2+bx+c\) có \(a>0\), điều kiện để \(f(x)>0\) với **mọi** \(x\in\mathbb R\) là \(\Delta<0\). Nếu chỉ yêu cầu \(f(x)\ge0\) với mọi \(x\), điều kiện là \(\Delta\le0\). Khi \(a<0\), các mệnh đề tương tự áp dụng cho dấu \(<0\) hoặc \(\le0\).

**Ví dụ 5 (tự soạn).** Tìm \(m\) để

\[
x^2-2(m+1)x+m^2+3>0
\]

đúng với mọi \(x\in\mathbb R\). Vì \(a=1>0\), ta cần

\[
\Delta=[-2(m+1)]^2-4(m^2+3)=8(m-1)<0.
\]

Suy ra \(\boxed{m<1}\). Nếu \(m=1\), tam thức có nghiệm kép và bằng \(0\) tại một điểm nên **không** thỏa dấu \(>\).

!!! note "Ranh giới học thuật"
    Phần tham số là **mở rộng luyện tập** được định hướng bởi SBT Bài 17 trang in 17–18 (bài toán nghiệm, dấu bất phương trình với tham số), không tự coi là Core bắt buộc của SGK. Ví dụ và lời giải do dự án tự biên soạn, đã được NotebookLM thẩm định trong snapshot Chương VI ngày 28/10/2026; website còn QA riêng.

[Mở khu vực **Core và Luyện tập/Vận dụng của Chương VI**](luyen-tap.md) — hai thẻ Bài 17 hiện mở **6 item canonical đã review** theo Core/Luyện tập/Vận dụng, có gợi ý/lời giải tự mở; không ghi điểm hay lịch sử học sinh.

## 4. Tự luyện

1. Xét dấu \(h(x)=2x^2+3x+5\) trên \(\mathbb R\).
2. Giải \(x^2-5x+6<0\).
3. Giải \(-(x-2)^2\le0\).

<details><summary>Đáp án và giải thích (chỉ mở sau khi tự làm)</summary>
<ol>
<li><span class="arithmatex">\(\Delta=9-40=-31<0\)</span>, <span class="arithmatex">\(a=2>0\)</span> nên <span class="arithmatex">\(h(x)>0\)</span> với mọi <span class="arithmatex">\(x\in\mathbb R\)</span>.</li>
<li><span class="arithmatex">\((x-2)(x-3)<0\iff 2<x<3\)</span>.</li>
<li><span class="arithmatex">\(-(x-2)^2\le0\)</span> với mọi số thực <span class="arithmatex">\(x\)</span>, nên tập nghiệm là <span class="arithmatex">\(\mathbb R\)</span>; dấu bằng tại <span class="arithmatex">\(x=2\)</span>.</li>
</ol>
</details>

## 5. Lỗi sai cần tránh

- Quên xét dấu \(a\) khi điền dấu vào các khoảng nghiệm.
- Bỏ quên nghiệm kép hoặc thêm nghiệm ở bất phương trình dấu \(<\) / \(>\).
- Không kết hợp tập nghiệm bất phương trình với **miền xác định** từ bài toán thực tế.

!!! warning "Giới hạn"
    Trang học này dùng ví dụ nguyên gốc và định lí phổ thông, **đã đối chiếu hình trang SGK 19–24 và SBT 16–18**; snapshot B17 đã nhận NotebookLM Academic PASS. Trang hiện tại chưa hoàn thành xác nhận tương đương byte/semantics và Tự kiểm tra chính thức hiện chưa kích hoạt; không coi là production đã phát hành.
