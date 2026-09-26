# Bài mỏ neo A25-011 – Tương giao parabol và đường thẳng

> **Tầng:** Entrance10 · **Trạng thái:** Bài bổ sung trong thư viện mở rộng, **không tự động thay một trong 10 bài tiêu biểu**.  
> **Mạch:** Hàm số, phương trình bậc hai, biệt thức, Viète. **Liên hệ:** Đề 02 – Bài III.

## Đề mẫu

Cho \((P):y=x^2\) và \((d):y=2x+3\).

1. Chứng minh chúng có hai giao điểm phân biệt.
2. Tìm tọa độ hai giao điểm.
3. Không lấy kết quả từng nghiệm để thay trực tiếp, tính \(x_1^2+x_2^2\) bằng Viète với \(x_1,x_2\) là hai hoành độ giao điểm.

## Phân tích đề – tư duy trước khi tính

Tìm giao điểm của **hai đồ thị** nghĩa là tìm cặp \((x,y)\) cùng thỏa cả hai phương trình. Vì chúng cùng biểu diễn \(y\), hãy đặt hai biểu thức bằng nhau. Số nghiệm thực của phương trình hoành độ chính là số giao điểm (khi mỗi nghiệm xác định một tung độ).

Mục tiêu “hai giao điểm” gợi ý **biệt thức**; mục tiêu biểu thức đối xứng theo nghiệm gợi ý **Viète**. Không giải nghiệm ngay nếu chỉ cần tổng/tích.

## Gợi ý theo ba tầng

<details><summary>Gợi ý 1</summary>Viết \(x^2=2x+3\).</details>
<details><summary>Gợi ý 2</summary>Chuyển về \(x^2-2x-3=0\) và tính \(\Delta\).</details>
<details><summary>Gợi ý 3</summary>Viète cho \(x_1+x_2=2,\ x_1x_2=-3\).</details>

## Lời giải chi tiết

Hoành độ giao điểm thỏa
\[
x^2=2x+3\iff x^2-2x-3=0.
\]
Biệt thức \(\Delta=(-2)^2-4\cdot1\cdot(-3)=16>0\), nên có **hai hoành độ thực phân biệt**, tức hai giao điểm phân biệt.

Phân tích \(x^2-2x-3=(x-3)(x+1)\), suy ra \(x=3\) hoặc \(x=-1\). Thế vào \(y=x^2\), hai giao điểm là \((3;9)\), \((-1;1)\).

Theo Viète cho phương trình hoành độ:
\[
x_1+x_2=2,\qquad x_1x_2=-3.
\]
Do đó
\[
x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=4+6=\boxed{10}.
\]

## Khái quát và tư duy kiểm tra

Với \((d_k):y=2x+k\), phương trình hoành độ là \(x^2-2x-k=0\), có \(\Delta=4+4k\). Vậy:
\[
k>-1:\ 2\ \text{giao điểm};\quad k=-1:\ 1\ \text{giao điểm (tiếp xúc)};\quad k<-1:\ 0\ \text{giao điểm}.
\]
Trường hợp \(k=-1\) cho \(x=1\) và điểm tiếp xúc \((1;1)\). Viète vẫn cung cấp tổng/tích nghiệm khi có hai nghiệm kể cả trùng, nhưng yêu cầu “hai giao điểm phân biệt” buộc \(\Delta>0\).

## Tự luyện

1. Thay \(y=x+2\). **Đối chiếu:** \((2;4),(-1;1)\).
2. Tìm \(k\) để \((P)\) và \(y=2x+k\) tiếp xúc. **Đối chiếu:** \(k=-1\).
3. Với \(k>-1\), tính \(x_1^2+x_2^2\) theo \(k\) mà không giải nghiệm. **Đối chiếu:** \(4+2k\).

[Thư viện bài mỏ neo](kho-bai-mo-neo.md) · [CĐ10 Hàm số](../10-ham-so-do-thi/index.md) · [CĐ12 Viète](../12-phuong-trinh-bac-hai-viete/index.md) · [Đề 02](de-luyen-02.md)
