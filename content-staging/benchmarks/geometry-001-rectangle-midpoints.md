# Geometry Benchmark 001 – Hình chữ nhật, trung điểm và giao điểm

> Mục đích: benchmark nội bộ để kiểm tra lời giải hình học, tọa độ và tính đúng của SVG. Không mặc định là nội dung xuất bản cho học sinh.

## Đề

Cho hình chữ nhật (ABCD) với (AB=16,cm), (AD=10,cm). Gọi (M,N) lần lượt là trung điểm của (AB) và (BC). Các đoạn thẳng (MC) và (ND) cắt nhau tại (E). Tính diện tích tứ giác (BMEN).

## Kết quả chuẩn

[
oxed{S_{BMEN}=32,cm^2}
]

## Kiểm tra 1 – Tọa độ

Đặt:

[
D(0,0),quad C(16,0),quad B(16,10),quad A(0,10).
]

Khi đó:

[
M(8,10),qquad N(16,5).
]

Tham số hóa:

[
MC: (x,y)=(8,10)+t(8,-10),
]

[
DN: (x,y)=s(16,5).
]

Từ

[
8+8t=16s,qquad 10-10t=5s
]

suy ra

[
t=rac35,qquad s=rac45.
]

Vì vậy:

[
Eleft(rac{64}{5},4ight).
]

Dùng công thức shoelace cho

[
B(16,10), M(8,10), Eleft(rac{64}{5},4ight), N(16,5)
]

thu được:

[
S_{BMEN}=32.
]

## Kiểm tra 2 – Chia tam giác

Tứ giác (BMEN) nằm trong tam giác (BMC).

[
S_{BMC}=rac12cdot BMcdot BC
=rac12cdot 8cdot10=40.
]

Tam giác (ENC) có:

[
NC=5,qquad 16-rac{64}{5}=rac{16}{5}
]

là khoảng cách ngang từ (E) tới (BC). Do đó:

[
S_{ENC}=rac12cdot5cdotrac{16}{5}=8.
]

Suy ra:

[
S_{BMEN}=S_{BMC}-S_{ENC}=40-8=32.
]

Hai cách kiểm tra độc lập cho cùng kết quả.

## Diagram spec

Theo hệ tọa độ hình vẽ SVG:

- (A=(80,80))
- (B=(560,80))
- (C=(560,380))
- (D=(80,380))
- (M=(320,80))
- (N=(560,230))
- (E=(464,260))

Các quan hệ bắt buộc:

- (ABparallel DC)
- (ADparallel BC)
- (ABperp AD)
- (M) là trung điểm (AB)
- (N) là trung điểm (BC)
- (Ein MC)
- (Ein DN)

## Semantic QA

- [x] Tỉ lệ hình chữ nhật đúng (16:10).
- [x] M đúng trung điểm AB.
- [x] N đúng trung điểm BC.
- [x] MC và DN giao đúng tại E.
- [x] E không được đặt bằng mắt; tọa độ lấy từ nghiệm đại số.
- [x] Kết quả diện tích đã kiểm tra bằng hai cách độc lập.
