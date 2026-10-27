# Bài 18. Phương trình quy về phương trình bậc hai

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BẢN NHÁP HỌC LIỆU</p>
<p class="thpt-r4-lead"><strong>DRAFT_NOT_ACADEMICALLY_REVIEWED.</strong> Bài soạn nguyên gốc minh họa quy trình giải phương trình chứa căn thức quy về phương trình bậc hai. Đã quan sát SGK Bài 18 trang in 25–27 và SBT trang 19–21; chưa có Academic PASS độc lập. Không ghi điểm hoặc tiến độ.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VI"><a href="../">Chương VI</a><a href="../bai-17/">Bài 17</a><span class="is-current" aria-current="page">Bài 18 · Phương trình chứa căn (nháp)</span></nav></div>

## 1. Vì sao phải kiểm tra nghiệm?

Bình phương hai vế phương trình là phép biến đổi **không luôn tương đương** nếu không kiểm soát dấu. Ví dụ từ \(x=1\) suy ra \(x^2=1\), nhưng chiều ngược lại không đúng vì \(x=-1\) cũng thỏa \(x^2=1\).

Để giải phương trình chứa căn, phải đặt điều kiện, biến đổi và **thử lại nghiệm trong phương trình ban đầu**.

## 2. Phương trình dạng \(\sqrt{A(x)}=\sqrt{B(x)}\)

Phương trình tương đương với hệ điều kiện
\[
A(x)=B(x),\qquad A(x)\ge0,\quad B(x)\ge0.
\]

**Quy trình:** giải \(A(x)=B(x)\), giữ lại các nghiệm làm hai biểu thức dưới căn không âm, rồi kiểm tra trong phương trình ban đầu.

**Ví dụ 1.**
\[
\sqrt{x^2-3x+4}=\sqrt{x+2}.
\]
Bình phương được \(x^2-3x+4=x+2\), suy ra \(x^2-4x+2=0\). Hai nghiệm ứng viên \(x=2\pm\sqrt2\). Vì cả hai đều lớn hơn \(-2\), biểu thức \(x+2\ge0\); thay trở lại cho thấy hai vế căn bằng nhau. Vậy \(\boxed{x=2-\sqrt2\text{ hoặc }x=2+\sqrt2}\).

## 3. Phương trình dạng \(\sqrt{A(x)}=B(x)\)

Vì vế trái không âm, phương trình tương đương với
\[
\begin{cases}
A(x)=B(x)^2,\\
B(x)\ge0.
\end{cases}
\]
Khi hai điều kiện này thỏa, \(A(x)=B(x)^2\ge0\) cũng bảo đảm căn có nghĩa.

**Quy trình 4 bước:** (1) đặt điều kiện \(B(x)\ge0\) và miền xác định nếu cần; (2) bình phương đưa về phương trình bậc hai (hoặc bậc nhất); (3) giải tìm nghiệm ứng viên; (4) **loại nghiệm không thỏa điều kiện và thử lại**.

**Ví dụ 2.**
\[
\sqrt{2x+3}=x-1.
\]
Điều kiện \(x\ge1\). Bình phương: \(2x+3=(x-1)^2\), hay \(x^2-4x-2=0\). Nghiệm ứng viên \(x=2\pm\sqrt6\). Vì \(2-\sqrt6<1\), loại nghiệm này; \(2+\sqrt6\ge1\) thỏa phương trình gốc. Vậy \(\boxed{x=2+\sqrt6}\).

### Ví dụ 3 — Hai căn thức và nghiệm ngoại lai (tự soạn)

Xét
\[
\sqrt{x^2+7x+11}=\sqrt{x+3}.
\]
Bình phương hai vế và rút gọn:
\[
x^2+7x+11=x+3 \iff x^2+6x+8=0
\iff(x+2)(x+4)=0.
\]

Hai nghiệm ứng viên là \(x=-2\), \(x=-4\). Tuy nhiên, \(x=-4\) làm \(x+3=-1<0\), **không thuộc miền xác định**; còn \(x=-2\) cho cả hai vế bằng \(1\). Vì vậy \(\boxed{S=\{-2\}}\).

*Bài học:* Không phải cứ bình phương rồi giải phương trình đại số là thu được các nghiệm của phương trình chứa căn.

### Ví dụ 4 — Ứng dụng độ dài trong hình học (tự soạn)

Một tam giác vuông có hai cạnh góc vuông dài \(x\) m và \(4\) m, với \(x>0\). Tìm \(x\) nếu cạnh huyền dài \(2x-1\) m.

Theo định lí Pythagore:
\[
\sqrt{x^2+16}=2x-1.
\]

Điều kiện cần là \(2x-1\ge0\), tức \(x\ge\frac12\). Bình phương được
\[
x^2+16=(2x-1)^2
\iff 3x^2-4x-15=0
\iff(3x+5)(x-3)=0.
\]
Hai nghiệm ứng viên là \(x=3\) và \(x=-\frac53\). Chỉ \(x=3\) đạt điều kiện. Thử lại: \(\sqrt{3^2+4^2}=5=2\cdot3-1\). Vậy cạnh góc vuông cần tìm dài \(\boxed{3\text{ m}}\).

**Liên hệ S1:** SGK Bài 18, trang in **26–27**, có vận dụng hình học/quãng đường với biểu thức căn; SBT trang **19–21** bổ sung bài điều kiện có nghiệm và một tình huống hình học. Hai ví dụ trên là nội dung **tự biên soạn, chưa review**, dùng để rèn điều kiện căn thức và thử nghiệm ứng viên.

## 4. Những sai lầm thường gặp

- **Nhận hết nghiệm sau khi bình phương:** nghiệm ngoại lai có thể được sinh ra.
- **Quên dấu của vế không chứa căn:** trong \(\sqrt{A(x)}=B(x)\) phải có \(B(x)\ge0\).
- **Quên điều kiện của biến và việc thử lại:** nghiệm đại số có thể làm căn vô nghĩa.

[Mở khu vực **Core và Luyện tập/Vận dụng của Chương VI**](luyen-tap.md) — modal hiện tại phục vụ kiểm thử kỹ thuật; bộ ứng viên bài B18 riêng đang chờ đối chiếu và review học thuật, chưa ghi điểm tiến độ.

## 5. Tự luyện

1. Giải \(\sqrt{x+2}=x\).
2. Giải \(\sqrt{x+5}=\sqrt{2x+1}\).
3. Cho \(\sqrt{x^2+2x+5}=x+1\). Phương trình có nghiệm thực hay không? Giải thích.

<details><summary>Đáp án và kiểm tra nghiệm (chỉ mở sau khi tự làm)</summary>
<ol>
<li>\(x\ge0\). Bình phương \(x+2=x^2\iff (x-2)(x+1)=0\); chỉ \(x=2\) đạt điều kiện.</li>
<li>\(x+5=2x+1\iff x=4\). Thay vào hai căn cho cùng \(\sqrt9=3\), vậy \(x=4\).</li>
<li>\(x+1\ge0\). Bình phương được \(x^2+2x+5=(x+1)^2=x^2+2x+1\), mâu thuẫn \(5=1\). Do đó vô nghiệm.</li>
</ol></details>

!!! warning "Giới hạn"
    Đây là draft kiến thức do dự án tự soạn, **đã đối chiếu trực tiếp SGK trang 25–27 và SBT trang 19–21 nhưng chưa được NotebookLM thẩm định** và chưa đăng ký Core/Readiness/Written chính thức. Chỉ dùng cho phát triển nội bộ, chưa Academic PASS.
