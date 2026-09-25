# Geometry Benchmark 001 – Hình chữ nhật, trung điểm và giao điểm

> Mục đích: benchmark nội bộ để kiểm tra lời giải hình học, tọa độ và tính đúng của SVG. Không mặc định là nội dung xuất bản cho học sinh.

## Đề

Cho hình chữ nhật \(ABCD\) với \(AB=16\,\text{cm}\), \(AD=10\,\text{cm}\). Gọi \(M,N\) lần lượt là trung điểm của \(AB\) và \(BC\). Các đoạn thẳng \(MC\) và \(DN\) cắt nhau tại \(E\). Tính diện tích tứ giác \(BMEN\).

## Kết quả chuẩn

\[
\boxed{S_{BMEN}=32\,\text{cm}^2}
\]

## Kiểm tra 1 – Tọa độ

Đặt:

\[
D(0,0),\quad C(16,0),\quad B(16,10),\quad A(0,10).
\]

Khi đó:

\[
M(8,10),\qquad N(16,5).
\]

Tham số hóa:

\[
MC:(x,y)=(8,10)+t(8,-10),
\]

\[
DN:(x,y)=s(16,5).
\]

Từ

\[
8+8t=16s,\qquad 10-10t=5s
\]

suy ra

\[
t=\frac35,\qquad s=\frac45.
\]

Vì vậy:

\[
E\left(\frac{64}{5},4\right).
\]

Dùng công thức shoelace cho

\[
B(16,10),\ M(8,10),\ E\left(\frac{64}{5},4\right),\ N(16,5)
\]

thu được:

\[
S_{BMEN}=32.
\]

## Kiểm tra 2 – Chia tam giác

Tứ giác \(BMEN\) nằm trong tam giác \(BMC\).

\[
S_{BMC}=\frac12\cdot BM\cdot BC
=\frac12\cdot8\cdot10=40.
\]

Tam giác \(ENC\) có:

\[
NC=5,\qquad 16-\frac{64}{5}=\frac{16}{5}
\]

là khoảng cách ngang từ \(E\) tới \(BC\). Do đó:

\[
S_{ENC}=\frac12\cdot5\cdot\frac{16}{5}=8.
\]

Suy ra:

\[
S_{BMEN}=S_{BMC}-S_{ENC}=40-8=32.
\]

Hai cách kiểm tra độc lập cho cùng kết quả.

## Diagram spec

Dữ liệu máy kiểm tra nằm tại:

`content-staging/benchmarks/geometry-001-rectangle-midpoints.json`

SVG xuất bản nội bộ:

`content-staging/benchmarks/geometry-001-rectangle-midpoints.svg`

## Semantic QA

- [x] Tỉ lệ hình chữ nhật đúng \(16:10\).
- [x] \(M\) đúng trung điểm \(AB\).
- [x] \(N\) đúng trung điểm \(BC\).
- [x] \(MC\) và \(DN\) giao đúng tại \(E\).
- [x] \(E\) không được đặt bằng mắt; tọa độ lấy từ nghiệm đại số.
- [x] Kết quả diện tích đã kiểm tra bằng hai cách độc lập.
