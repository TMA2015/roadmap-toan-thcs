# Practice Room – Chuyên đề 06: Phân tích đa thức thành nhân tử

> **Mục tiêu:** chọn đúng phương pháp, phân tích đến dạng tích phù hợp và biết tự kiểm tra bằng cách nhân ngược.
>
> **Core mặc định:** **tách hạng tử giữa** và **giải phương trình bằng nhân tử** nằm ở Entrance10 / Extension, không tính Core readiness.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 06-WR-01 · Đặt nhân tử chung

Phân tích \(6x^2+9x\) bằng nhân tử chung lớn nhất.

??? tip "Gợi ý"
    Tìm ƯCLN của 6 và 9, rồi phần biến chung lớn nhất.

??? example "Xem lời giải"
    \[
    6x^2+9x=3x(2x+3).
    \]

#### 06-WR-02 · Đổi dấu để tạo nhân tử chung

Phân tích \(2x(x-y)+4(y-x)\).

??? tip "Gợi ý"
    \(y-x=-(x-y)\).

??? example "Xem lời giải"
    \[
    2x(x-y)-4(x-y)=2(x-y)(x-2).
    \]

#### 06-WR-03 · Hiệu hai bình phương

Phân tích \(x^2-36\).

??? tip "Gợi ý"
    \(36=6^2\).

??? example "Xem lời giải"
    \[
    x^2-36=(x-6)(x+6).
    \]

#### 06-WR-04 · Bình phương hoàn chỉnh rồi hiệu hai bình phương

Phân tích \(x^2+6x+9-y^2\).

??? tip "Gợi ý"
    Ba hạng tử đầu là \((x+3)^2\).

??? example "Xem lời giải"
    \[
    (x+3)^2-y^2=(x+3-y)(x+3+y).
    \]

#### 06-WR-05 · Hiệu hai lập phương

Phân tích \(1-8x^3\).

??? tip "Gợi ý"
    \(8x^3=(2x)^3\).

??? example "Xem lời giải"
    \[
    1-8x^3=(1-2x)(1+2x+4x^2).
    \]

#### 06-WR-06 · Nhóm hạng tử

Phân tích \(xy+3x+y+3\).

??? tip "Gợi ý"
    Nhóm theo \(x\) và phần còn lại để tạo \(y+3\).

??? example "Xem lời giải"
    \[
    x(y+3)+(y+3)=(x+1)(y+3).
    \]

#### 06-WR-07 · Nhóm với nhân tử âm

Phân tích \(x^2-xy-2x+2y\).

??? tip "Gợi ý"
    Nhóm \(x(x-y)\) và đặt \(-2\) ở nhóm sau.

??? example "Xem lời giải"
    \[
    x(x-y)-2(x-y)=(x-2)(x-y).
    \]

#### 06-WR-08 · Phối hợp nhân tử chung và HĐT

Phân tích hoàn toàn \(2x^3-8x\).

??? tip "Gợi ý"
    Đặt \(2x\) trước rồi tiếp tục với \(x^2-4\).

??? example "Xem lời giải"
    \[
    2x(x^2-4)=2x(x-2)(x+2).
    \]

#### 06-WR-09 · Phối hợp nhân tử chung và bình phương hoàn chỉnh

Phân tích \(x^3-2x^2+x\).

??? tip "Gợi ý"
    Đặt \(x\), rồi nhìn \(x^2-2x+1\).

??? example "Xem lời giải"
    \[
    x(x^2-2x+1)=x(x-1)^2.
    \]

#### 06-WR-10 · Kiểm tra bằng nhân ngược

Kiểm tra xem \((x-4)(x+2)\) có phải là phân tích của \(x^2-2x-8\) không.

??? tip "Gợi ý"
    Nhân hai nhân tử trở lại.

??? example "Xem lời giải"
    \[
    (x-4)(x+2)=x^2+2x-4x-8=x^2-2x-8.
    \]
    Vậy phân tích đúng.

### Entrance10 / Extension

#### 06-ENT-01 · Tách hạng tử giữa

Phân tích \(x^2+5x+6\).

??? tip "Gợi ý"
    Tìm hai số có tổng 5 và tích 6.

??? example "Xem lời giải"
    \[
    x^2+5x+6=x^2+2x+3x+6=(x+2)(x+3).
    \]

#### 06-ENT-02 · Giải phương trình bằng nhân tử

Giải \(x^2-7x=0\).

??? tip "Gợi ý"
    Đưa về dạng tích bằng 0.

??? example "Xem lời giải"
    \[
    x(x-7)=0\Rightarrow x=0\text{ hoặc }x=7.
    \]

### Challenge

#### 06-CH-01 · Thêm bớt để phân tích

Phân tích \(x^4+4\).

??? tip "Gợi ý"
    Thêm và bớt \(4x^2\).

??? example "Xem lời giải"
    \[
    x^4+4=x^4+4x^2+4-4x^2
    =(x^2+2)^2-(2x)^2
    \]
    \[
    =(x^2-2x+2)(x^2+2x+2).
    \]

---

## Theo dõi sau khi luyện

- [ ] Tôi luôn kiểm tra nhân tử chung trước.
- [ ] Tôi nhận ra HĐT phù hợp trước khi nhóm tùy ý.
- [ ] Tôi đã làm một lượt Practice Engine không dùng hint.
- [ ] Tôi đã tự giải ít nhất 3 bài Core trước khi mở lời giải.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap

- **← Học:** [Chuyên đề 06](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Tiếp theo:** [07 – Phân thức đại số](../07-phan-thuc-dai-so/index.md)
