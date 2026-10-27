# Bài 17. Dấu của tam thức bậc hai

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BẢN NHÁP HỌC LIỆU</p>
<p class="thpt-r4-lead"><strong>DRAFT_NOT_ACADEMICALLY_REVIEWED.</strong> Bài soạn nguyên gốc theo mạch hàm số bậc hai → xét dấu → bất phương trình bậc hai; còn chờ source receipt SGK/SBT và NotebookLM review theo chương. Không ghi điểm hay tiến độ.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VI"><a href="../">Chương VI</a><a href="../bai-16/">Bài 16</a><span class="is-current" aria-current="page">Bài 17 · Dấu tam thức (nháp)</span><a href="../bai-18/">Bài 18</a></nav>
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

## 4. Tự luyện

1. Xét dấu \(h(x)=2x^2+3x+5\) trên \(\mathbb R\).
2. Giải \(x^2-5x+6<0\).
3. Giải \(-(x-2)^2\le0\).

<details><summary>Đáp án và giải thích (chỉ mở sau khi tự làm)</summary>
<ol>
<li>\(\Delta=9-40=-31<0\), \(a=2>0\) nên \(h(x)>0\) với mọi \(x\in\mathbb R\).</li>
<li>\((x-2)(x-3)<0\iff 2<x<3\).</li>
<li>\(-(x-2)^2\le0\) với mọi số thực \(x\), nên tập nghiệm là \(\mathbb R\); dấu bằng tại \(x=2\).</li>
</ol>
</details>

## 5. Lỗi sai cần tránh

- Quên xét dấu \(a\) khi điền dấu vào các khoảng nghiệm.
- Bỏ quên nghiệm kép hoặc thêm nghiệm ở bất phương trình dấu \(<\) / \(>\).
- Không kết hợp tập nghiệm bất phương trình với **miền xác định** từ bài toán thực tế.

!!! warning "Giới hạn"
    Bản nháp này dùng ví dụ nguyên gốc và định lí phổ thông, **chưa chốt source receipt PDF của Bài 17**; chưa có canonical exercise register/Readiness chính thức. Không coi là bài học Academic PASS hoặc đã phát hành.
