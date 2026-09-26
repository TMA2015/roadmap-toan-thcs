# Bài mỏ neo A25-007 – Tham số, biệt thức và Viète

> **Tầng:** Entrance10 · **Mạch:** Phương trình bậc hai, biệt thức, biểu thức đối xứng · **Lớp:** 9.  
> **Đề gốc:** [mục A25-007](bai-toan-kinh-dien.md#anchor-25-007). Bản giải sâu này không đổi ID và không thay nội dung đề gốc.

## Đề bài

Cho phương trình
\[
x^2-2(m+1)x+2m=0,\qquad m\in\mathbb R.
\]
Tìm \(m\) để phương trình có hai nghiệm phân biệt \(x_1,x_2\) thỏa \(x_1^2+x_2^2=12\).

## Phân tích từ mục tiêu

Có **hai yêu cầu khác nhau**: (1) hai nghiệm thực phân biệt; (2) biểu thức theo nghiệm bằng \(12\). Phải kiểm tra biệt thức rồi mới dùng Viète. Vì đích là tổng bình phương, không cần giải từng nghiệm:
\[
x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2.
\]

## Ba tầng gợi ý

<details><summary>Gợi ý 1</summary>
Tính \(\Delta'=(m+1)^2-2m\) và xét dấu với mọi \(m\).
</details>

<details><summary>Gợi ý 2</summary>
Viète cho \(x_1+x_2=2(m+1)\), \(x_1x_2=2m\). Thế vào hằng đẳng thức tổng bình phương.
</details>

<details><summary>Gợi ý 3</summary>
Rút gọn thành \(4(m^2+m+1)=12\), rồi giải phương trình theo \(m\).
</details>

## Lời giải chi tiết

**Bước 1 – Điều kiện hai nghiệm phân biệt.** Hệ số \(a=1\ne0\). Biệt thức thu gọn:
\[
\Delta'=(m+1)^2-1\cdot2m=m^2+1>0
\]
với mọi \(m\in\mathbb R\). Vì thế phương trình luôn có hai nghiệm thực phân biệt; không phát sinh điều kiện bổ sung cho \(m\).

**Bước 2 – Dùng Viète đúng dấu.**
\[
x_1+x_2=2(m+1),\qquad x_1x_2=2m.
\]
Do đó
\[
x_1^2+x_2^2=[2(m+1)]^2-2(2m)
=4(m+1)^2-4m=4(m^2+m+1).
\]

**Bước 3 – Áp điều kiện đề bài.**
\[
4(m^2+m+1)=12
\iff m^2+m-2=0
\iff(m+2)(m-1)=0.
\]
Vậy \(m=-2\) hoặc \(m=1\).

**Bước 4 – Đối chiếu ngược.** Với hai giá trị tìm được, \(\Delta'=m^2+1>0\); phương trình đều có hai nghiệm phân biệt và tổng bình phương đúng bằng \(12\). Kết luận:
\[
\boxed{m\in\{-2,1\}}.
\]

## Kiểm tra bằng cách giải trực tiếp (không phải cách tối ưu)

Nếu \(m=1\), phương trình \(x^2-4x+2=0\) có hai nghiệm \(2\pm\sqrt2\); tổng bình phương \(=12\). Nếu \(m=-2\), phương trình \(x^2+2x-4=0\) có hai nghiệm \(-1\pm\sqrt5\); tổng bình phương cũng \(=12\).

## Tư duy và lỗi thường gặp

- Chứng minh \(\Delta'>0\) trước khi nói đến hai nghiệm thực phân biệt.
- Nhớ \(x_1x_2=c/a=2m\), không đổi dấu theo hệ số của \(x\).
- \(x_1^2+x_2^2\) khác \((x_1+x_2)^2\): phải **trừ \(2x_1x_2\)**.
- Không suy ra điều kiện vô nghĩa cho \(m\) khi \(m^2+1\) vốn dương với mọi số thực.

## Biến thể tự luyện

1. Tìm \(m\) để tổng hai nghiệm bằng \(4\). **Đối chiếu:** \(2(m+1)=4\Rightarrow m=1\).
2. Thay yêu cầu bằng \(x_1^2+x_2^2=4\). **Đối chiếu:** \(m^2+m=0\), nên \(m=0\) hoặc \(-1\); cả hai đều thỏa \(\Delta'>0\).
3. Cho trước \(T=x_1^2+x_2^2\). Xác định giá trị nhỏ nhất có thể của \(T\). **Gợi ý:** \(m^2+m+1=(m+1/2)^2+3/4\). **Đối chiếu:** \(T_{\min}=3\) khi \(m=-1/2\).

[← Thư viện bài mỏ neo](kho-bai-mo-neo.md) · [CĐ12 Phương trình bậc hai và Viète](../12-phuong-trinh-bac-hai-viete/index.md) · [Đề 03](de-luyen-03.md)
