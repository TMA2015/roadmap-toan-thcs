# Bài mỏ neo A25-006 – Căn thức và tính nguyên

> **Tầng:** Entrance10 · **Mạch:** Căn thức, điều kiện xác định và phép chia hết · **Lớp:** 9.  
> **Đề tương ứng:** Đề luyện 02 – Bài I. Bài này là bản giải sâu của [mục A25-006 trong kho gốc](bai-toan-kinh-dien.md#anchor-25-006); ID gốc được giữ nguyên.

## Đề bài và điều kiện

Với \(x=n^2\), \(n\) là số nguyên không âm và \(n\ne1\), xét
\[
P=\frac{\sqrt{x}+1}{\sqrt{x}-1}.
\]
Tìm tất cả \(n\) để \(P\) là số nguyên.

Điều kiện \(x\ge0,\ x\ne1\) xuất phát từ căn thức và mẫu khác \(0\). Khi \(x=n^2,\ n\ge0\), điều kiện tương ứng là \(n\ne1\).

## Đọc đề và suy luận lùi

Vì \(n\ge0\), \(\sqrt{n^2}=n\), **không phải** \(\pm n\). Muốn \(P\) nguyên, hãy viết \(P\) thành phần nguyên cộng một phân số. Khi đó mẫu phải là một ước nguyên của tử số.

\[
n\ge0,\ n\ne1
\ \longrightarrow\ 
P=1+\frac2{n-1}
\ \longrightarrow\
n-1\mid 2
\ \longrightarrow\
\text{lọc ước theo điều kiện}.
\]

## Gợi ý từng mức

<details><summary>Gợi ý 1 – Đổi biến</summary>
Thay \(\sqrt{x}\) bằng \(n\) và ghi lại điều kiện \(n\ge0,\ n\ne1\).
</details>

<details><summary>Gợi ý 2 – Tách phân thức</summary>
Viết \(n+1=(n-1)+2\) để có \(P=1+2/(n-1)\).
</details>

<details><summary>Gợi ý 3 – Liệt kê cả ước âm</summary>
\(n-1\) là ước khác \(0\) của \(2\), đồng thời \(n-1\ge-1\).
</details>

## Lời giải chi tiết theo bước

**Bước 1 – Điều kiện.** \(x=n^2\) với \(n\in\mathbb Z_{\ge0}\), nên \(\sqrt{x}=n\). Mẫu khác \(0\) đòi hỏi \(n\ne1\).

**Bước 2 – Đưa về điều kiện chia hết.**
\[
P=\frac{n+1}{n-1}=\frac{(n-1)+2}{n-1}
=1+\frac2{n-1}.
\]
Vì \(n-1\) là số nguyên khác \(0\), \(P\) nguyên khi và chỉ khi \(n-1\mid2\).

**Bước 3 – Lọc ước theo miền của \(n\).** Các ước nguyên của \(2\) là \(-2,-1,1,2\). Nhưng \(n\ge0\Rightarrow n-1\ge-1\), nên loại \(-2\). Ta có
\[
n-1\in\{-1,1,2\}\iff n\in\{0,2,3\}.
\]

**Bước 4 – Thử lại.** Với \(n=0,2,3\), giá trị \(P\) lần lượt là \(-1,3,2\), đều nguyên và mẫu khác \(0\). Vậy
\[
\boxed{n\in\{0,2,3\}}.
\]

## Tư duy và lỗi thường gặp

### Vì sao không dùng cách thử nhiều giá trị?

Thử \(n=0,1,2,3,\dots\) có thể đoán ra đáp án nhưng không chứng minh không còn giá trị lớn hơn. Phép chia hết giới hạn toàn bộ khả năng, rồi điều kiện \(n\ge0\) loại các ứng viên không hợp lệ.

**Lỗi thường gặp:** quên \(n=0\) vì chỉ liệt kê ước dương; nhận \(n=1\) dù mẫu bằng \(0\); viết \(\sqrt{n^2}=\pm n\); bỏ bước thử lại.

## Biến thể tự luyện

1. Với \(n=4\), \(x=n^2\), tính \(P\). **Đối chiếu:** \(P=5/3\), không nguyên.
2. Giữ điều kiện cũ và thay biểu thức bởi \(Q=(\sqrt{x}+3)/(\sqrt{x}-1)\). Tìm \(n\) để \(Q\) nguyên. **Gợi ý:** \(Q=1+4/(n-1)\). **Đối chiếu:** \(n\in\{0,2,3,5\}\).
3. Giải thích vì sao không được sử dụng \(-2\) như giá trị \(n-1\) ở đề gốc. **Đối chiếu:** khi đó \(n=-1\), trái \(n\ge0\).

[← Thư viện bài mỏ neo](kho-bai-mo-neo.md) · [CĐ11 Căn thức](../11-can-thuc/index.md) · [Đề 02](de-luyen-02.md) · [Đáp án đề 02](de-luyen-02-dap-an.md)
