# Temp — SGK Toán 10 KNTT Tập 1 · Chương IV Vectơ · Bài 10–11 · Kiến thức D1 và ví dụ D2 · R0

**PACKET_ID:** `THPT-G10-CHIV-B10_B11-S1-D1D2-20261029-R0`  
**TRẠNG THÁI:** `AUTHORING_CANDIDATE_NOT_REVIEWED` — nội dung mới, **không** được tự suy ra PASS từ Bài 7–9.  
**Nguồn thẩm quyền yêu cầu:** SGK và SBT Toán 10 KNTT **Tập 1 gốc (S1)**, 5 Permanent Sources THPT **v2.0, đúng 01–05**, không dùng bản v1.0 cùng lúc.  
**Phiên bản học liệu:** `v0.1`, ngày 29/10/2026, Chương IV B10/B11, nhánh `content/thpt-g10-chix-academic-authoring-20261028` của repository `TMA2015/self-learning-math`.  
**Nguồn in:** Trang SGK dự kiến B10 tr.60–65, B11 tr.66–70 theo đối chiếu thứ cấp và biên bản B07–B09; **chưa được NotebookLM xác nhận trực tiếp S1 cho B10–B11**. Trang SBT B10, B11 **CHƯA XÁC MINH**, không suy đoán. Bài tập cuối Chương IV SGK tr.71–72 là thông tin dẫn chiếu, **không thuộc review D1–D2 lần này**.  
**Bối cảnh đã PASS:** B07/B08/B09 D1–D2 nhận `PASS` độc lập với 9 kiến thức/11 ví dụ/12 outcome; gói này chỉ đánh giá B10/B11 mới. Học sinh theo hành trình SGK phải học độc lập đầy đủ, không cần nhảy sang Chuyên đề. **Chưa có SGK Core, Practice/Written, Readiness cuối chương hoặc hình D5 nào được duyệt cho cả Chương IV**.

## A. OUTCOME REGISTER — 11 mã ứng viên (B10: 5, B11: 6)

| Outcome ứng viên | Năng lực phải đạt | Bài | Tầng | Trạng thái |
|---|---|---|---|---|
| `G10-B10-COORDINATE_BASIS` | Xác định tọa độ vectơ theo hai vectơ đơn vị trên hệ Oxy; phân biệt tọa độ điểm và vectơ | B10 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B10-VECTOR_FROM_POINTS` | Tính tọa độ vectơ từ điểm đầu/điểm cuối | B10 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B10-COORDINATE_OPERATIONS` | Cộng/trừ/nhân số theo tọa độ; kiểm tra hai vectơ bằng nhau | B10 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B10-LENGTH_COLLINEAR` | Tính độ dài vectơ, kiểm tra cùng phương với điều kiện vectơ khác không | B10 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B10-MIDPOINT_CENTROID_COORDINATES` | Tính tọa độ trung điểm/trọng tâm, tìm tọa độ điểm từ đẳng thức vectơ | B10 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B11-ANGLE_BETWEEN_VECTORS` | Nhận biết góc giữa hai vectơ khác không và các trường hợp góc 0°, 90°, 180° | B11 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B11-DOT_PRODUCT_DEFINITION` | Hiểu tích vô hướng theo độ dài–góc, dấu của tích, điều kiện trực giao | B11 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B11-DOT_PRODUCT_COORDINATES` | Tính tích vô hướng bằng tọa độ trong Oxy | B11 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B11-DOT_PRODUCT_PROPERTIES` | Vận dụng giao hoán, phân phối, nhân vô hướng và bình phương vô hướng | B11 | SGK Core dự kiến | CHỜ REVIEW |
| `G10-B11-ANGLE_ORTHOGONALITY_APPLICATION` | Xác định góc, chứng minh vuông góc bằng tích vô hướng | B11 | SGK Core/Practice dự kiến | CHỜ REVIEW |
| `G10-B11-WORK_APPLICATION` | Mô hình hóa công của lực không đổi bằng tích vô hướng với độ dời | B11 | SGK ứng dụng dự kiến | CHỜ REVIEW |

**Đếm:** 11 outcome ứng viên, không có item ID luyện tập mới. Mỗi outcome cần đối chiếu với **SGK/SBT gốc**, không coi tên ID do tác giả đặt là chuẩn đã duyệt.

## B. Bài 10 — Vectơ trong mặt phẳng tọa độ (D1)

### KT-B10-01 — Tọa độ vectơ trong hệ Oxy (D1)

Trong mặt phẳng với hệ trục vuông góc `Oxy`, gọi `\vec i,\vec j` là hai vectơ đơn vị lần lượt theo chiều dương trục `Ox, Oy`. Mọi vectơ `\vec a` viết được duy nhất dưới dạng

\[\vec a=x\vec i+y\vec j.\]

Khi đó cặp `(x;y)` gọi là **tọa độ vectơ** `\vec a`, ký hiệu `\vec a=(x;y)`. Hai vectơ bằng nhau khi và chỉ khi cả hai tọa độ tương ứng bằng nhau. Đặc biệt `\vec i=(1;0)`, `\vec j=(0;1)`, và **vectơ-không** `\vec 0=(0;0)`; không nhầm `\vec 0` với số thực `0`. Với điểm `M(x_M;y_M)`, vectơ vị trí `\overrightarrow{OM}=(x_M;y_M)`.

**Bản chất:** một cặp tọa độ mô tả *độ dời có hướng*, không mang theo thông tin điểm đặt. Hai mũi tên ở hai vị trí khác nhau có thể cùng một vectơ. `\vec a=(x;y)` là vectơ, còn `M(x;y)` là một điểm; ngữ nghĩa khác nhau.

**Điều kiện:** Cặp tọa độ trên được xác định khi đã chọn hệ Oxy và cơ sở đơn vị `\vec i,\vec j`; việc đổi hệ trục có thể đổi tọa độ dù vectơ hình học giữ nguyên.

### KT-B10-02 — Từ tọa độ hai điểm đến tọa độ vectơ (D1)

Với `A(x_A;y_A)`, `B(x_B;y_B)`, ta có

\[\overrightarrow{AB}=(x_B-x_A\,;\ y_B-y_A).\]

Do đó `\overrightarrow{BA}=-\overrightarrow{AB}` và `\overrightarrow{AA}=\vec 0`. Nếu biết `A` và vectơ `\overrightarrow{AB}=(u;v)` thì `B=(x_A+u;\,y_A+v)`. Đẳng thức `\overrightarrow{AB}=\overrightarrow{CD}` tương đương hai phương trình thành phần tương ứng.

**Cách tự kiểm tra:** đi từ `A` sang `B` phải cộng tọa độ độ dời với tọa độ điểm A để thu được B. Trừ ngược chiều là lỗi thường gặp.

### KT-B10-03 — Phép toán, độ dài và điều kiện cùng phương (D1)

Với `\vec a=(a_1;a_2)`, `\vec b=(b_1;b_2)`, `k\in\mathbb R`:

\[\vec a+\vec b=(a_1+b_1\,;\ a_2+b_2),\quad\vec a-\vec b=(a_1-b_1\,;\ a_2-b_2),\]
\[k\vec a=(ka_1\,;\ ka_2),\qquad |\vec a|=\sqrt{a_1^2+a_2^2}.\]

Suy ra `AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}`. Với `\vec a\ne\vec0`, vectơ `\vec b` **cùng phương** với `\vec a` khi và chỉ khi tồn tại số thực `t` sao cho `\vec b=t\vec a`. Điều kiện `a_1b_2-a_2b_1=0` là một phép kiểm tra tọa độ thuận tiện cho cặp vectơ trên mặt phẳng; với vectơ-không phải kiểm tra khái niệm cùng hướng/đường giá theo đúng quy ước SGK, không gán cho nó một hướng hình học độc lập.

**Điều kiện quan trọng:** Không chia tọa độ vectơ này cho tọa độ tương ứng của vectơ kia khi mẫu bằng `0`. Trong chứng minh cùng phương bằng hệ số `t`, cần cố định vectơ cơ sở khác không.

### KT-B10-04 — Trung điểm, trọng tâm và tìm điểm bằng đẳng thức vectơ (D1)

Với `A(x_A;y_A)`, `B(x_B;y_B)`, trung điểm `I` của `AB` có

\[I\left(\frac{x_A+x_B}{2}\,;\ \frac{y_A+y_B}{2}\right).\]

Với tam giác `ABC`, trọng tâm `G` có

\[G\left(\frac{x_A+x_B+x_C}{3}\,;\ \frac{y_A+y_B+y_C}{3}\right).\]

Hai công thức là hệ quả của các **đẳng thức vectơ** đã học ở Bài 8–9: `\overrightarrow{OA}+\overrightarrow{OB}=2\overrightarrow{OI}` và `\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}=3\overrightarrow{OG}`. Cách học hiệu quả là hiểu vì sao lấy trung bình tọa độ, không chỉ ghi nhớ máy móc. Dùng tọa độ để tìm điểm thỏa mãn `\overrightarrow{MN}=k\overrightarrow{AB}` bằng từng thành phần.

**Giới hạn phạm vi:** Các khái niệm phương trình đường thẳng, khoảng cách điểm–đường thẳng, phép quay hoặc tích có hướng không được tự đưa vào Core của B10 chỉ vì có dùng tọa độ.

## C. Bài 10 — D2: 5 ví dụ giải mẫu

### EX-B10-01 — Đọc tọa độ và vectơ từ hai điểm (D2)

**Đề:** Trong Oxy, cho `A(-2;3)`, `B(4;-1)`. Tính `\overrightarrow{OA}`, `\overrightarrow{AB}`, và biểu diễn `\overrightarrow{AB}` theo `\vec i,\vec j`.

**Lời giải:** `\overrightarrow{OA}=(-2;3)`. Theo quy tắc lấy cuối trừ đầu:
\[\overrightarrow{AB}=(4-(-2)\,;\ -1-3)=(6;-4)=6\vec i-4\vec j.\]
Kiểm tra `A+\overrightarrow{AB}=(-2+6;3-4)=(4;-1)=B`.

**Outcome:** `G10-B10-COORDINATE_BASIS`, `G10-B10-VECTOR_FROM_POINTS`.

### EX-B10-02 — Cộng, trừ và nhân số theo tọa độ (D2)

**Đề:** Cho `\vec u=(2;-3)`, `\vec v=(-1;4)`. Tìm `\vec u+\vec v`, `2\vec u-3\vec v`.

**Lời giải:**
\[\vec u+\vec v=(2+(-1)\,;\ -3+4)=(1;1).\]
\[2\vec u-3\vec v=(4;-6)-(-3;12)=(7;-18).\]
Kết quả là **tọa độ vectơ**, không phải một số thực.

**Outcome:** `G10-B10-COORDINATE_OPERATIONS`.

### EX-B10-03 — Độ dài và cùng phương (D2)

**Đề:** Cho `\vec a=(3;-2)`, `\vec b=(-6;4)`. Tính độ dài hai vectơ và xác định quan hệ cùng phương, cùng hướng hay ngược hướng.

**Lời giải:** `\vec b=-2\vec a`; do `\vec a\ne\vec0`, hai vectơ cùng phương và **ngược hướng**. `|\vec a|=\sqrt{3^2+(-2)^2}=\sqrt{13}`, `|\vec b|=2\sqrt{13}`. Hệ số âm thể hiện đảo hướng, không khiến độ dài âm.

**Outcome:** `G10-B10-LENGTH_COLLINEAR`.

### EX-B10-04 — Trung điểm và trọng tâm (D2)

**Đề:** Cho tam giác `A(2;1)`, `B(8;5)`, `C(2;8)`. Tính trung điểm `I` của `AB` và trọng tâm `G` của tam giác.

**Lời giải:**
\[I=\left(\frac{2+8}{2}\,;\frac{1+5}{2}\right)=(5;3).\]
\[G=\left(\frac{2+8+2}{3}\,;\frac{1+5+8}{3}\right)=\left(4;\frac{14}{3}\right).\]
Đây là ứng dụng của đẳng thức vectơ trung điểm/trọng tâm, không phải một quy tắc riêng không liên hệ với vectơ.

**Outcome:** `G10-B10-MIDPOINT_CENTROID_COORDINATES`.

### EX-B10-05 — Tìm điểm từ phép tịnh tiến vectơ (D2)

**Đề:** Cho `A(-1;2)`, `B(2;6)`, `M(4;1)`. Tìm `N` sao cho `\overrightarrow{MN}=\overrightarrow{AB}`.

**Lời giải:** `\overrightarrow{AB}=(3;4)`. Gọi `N(x;y)` thì `\overrightarrow{MN}=(x-4;y-1)`. Do đó `x-4=3` và `y-1=4`, suy ra `N(7;5)`. Kiểm tra `\overrightarrow{MN}=(7-4;5-1)=(3;4)=\overrightarrow{AB}`.

**Outcome:** `G10-B10-VECTOR_FROM_POINTS`, `G10-B10-COORDINATE_OPERATIONS`.

## D. Bài 11 — Tích vô hướng của hai vectơ (D1)

### KT-B11-01 — Góc giữa hai vectơ khác không (D1)

Cho hai vectơ **khác vectơ-không** `\vec a,\vec b`. Dời (tịnh tiến) về chung gốc sao cho `\overrightarrow{OA}=\vec a`, `\overrightarrow{OB}=\vec b`. Số đo góc `\angle AOB\in[0^\circ,180^\circ]` gọi là **góc giữa hai vectơ**, ký hiệu `(\vec a,\vec b)`. Cùng hướng tương ứng `0^\circ`, ngược hướng tương ứng `180^\circ`, vuông góc tương ứng `90^\circ`.

**Điều kiện:** Không áp dụng biểu thức tính góc từ tích vô hướng bằng cách chia cho `|\vec a||\vec b|` khi có một vectơ bằng `\vec0`. Nếu SGK quy ước riêng góc có vectơ-không, Reviewer cần chốt chính xác ngôn ngữ và phạm vi đó, tránh suy diễn từ công thức chia.

### KT-B11-02 — Định nghĩa tích vô hướng và ý nghĩa hình học (D1)

Với `\vec a,\vec b\ne\vec0`, đặt

\[\vec a\cdot\vec b=|\vec a||\vec b|\cos(\vec a,\vec b).\]

Đây là **một số thực (vô hướng)**, khác với phép cộng vectơ hay phép nhân số với vectơ. Quy ước `\vec0\cdot\vec b=0` cho mọi `\vec b` (kết quả là số `0`). Nếu hai vectơ khác không có góc nhọn thì tích dương, góc tù thì tích âm, góc vuông thì tích bằng `0`. Đặc biệt `\vec a\cdot\vec a=|\vec a|^2`.

**Chứng cứ vuông góc:** Với hai vectơ **đều khác không**, `\vec a\perp\vec b\iff\vec a\cdot\vec b=0`. Nếu cho phép vectơ-không trong định nghĩa ký hiệu vuông góc theo quy ước SGK, phải diễn giải rõ rằng đây là một **quy ước**, không tự kết luận một góc hình học độc lập đối với vectơ-không.

### KT-B11-03 — Tích vô hướng theo tọa độ và các tính chất (D1)

Với `\vec a=(a_1;a_2)`, `\vec b=(b_1;b_2)` trong hệ Oxy vuông góc:

\[\vec a\cdot\vec b=a_1b_1+a_2b_2.\]

Tích vô hướng có tính **giao hoán** `\vec a\cdot\vec b=\vec b\cdot\vec a`, **phân phối** `\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c`, và ` (k\vec a)\cdot\vec b=k(\vec a\cdot\vec b)` với mọi `k\in\mathbb R`. Bình phương vô hướng `\vec a\cdot\vec a=a_1^2+a_2^2=|\vec a|^2`.

Với `\vec a,\vec b\ne\vec0`:
\[\cos(\vec a,\vec b)=\frac{a_1b_1+a_2b_2}{\sqrt{a_1^2+a_2^2}\sqrt{b_1^2+b_2^2}}.\]

**Kiểm tra điều kiện:** Không dùng công thức cos có mẫu `0` khi một vectơ bằng vectơ-không. Không nhầm `a_1b_1+a_2b_2` với `a_1b_2-a_2b_1` (biểu thức sau có thể dùng kiểm tra cùng phương, không phải tích vô hướng).

### KT-B11-04 — Ứng dụng: vuông góc, góc, độ dài và công của lực (D1)

Từ tọa độ tích vô hướng, có thể kiểm tra vuông góc bằng `a_1b_1+a_2b_2=0` cho các vectơ khác không, tìm góc bằng `\arccos` với máy tính ở **chế độ DEG**, hoặc dùng các đẳng thức

\[|\vec a\pm\vec b|^2=|\vec a|^2\pm 2\vec a\cdot\vec b+|\vec b|^2.\]

Tích vô hướng còn diễn tả **công của lực không đổi**: khi lực `\vec F` tác dụng và vật có độ dời `\vec s`, công `W=\vec F\cdot\vec s=|\vec F||\vec s|\cos\theta`. Nếu độ lớn lực là newton (N) và độ dời là mét (m), công đo bằng joule (J); lực vuông góc với độ dời thì công bằng `0`, lực tạo góc tù có thể sinh **công âm**.

**Ranh giới:** Không biến biểu thức công thành nội dung vật lý động lực học nâng cao hay đưa phương trình đường tròn/đường thẳng nâng cao thành Core của B11 nếu chưa được SGK S1 xác nhận. Khi dùng kết quả góc từ máy tính, ghi đơn vị độ và làm tròn theo yêu cầu đề.

## E. Bài 11 — D2: 5 ví dụ giải mẫu

### EX-B11-01 — Tích vô hướng khi biết độ dài và góc (D2)

**Đề:** Hai vectơ khác không có độ dài `|\vec a|=6`, `|\vec b|=4`, góc giữa chúng `120^\circ`. Tính `\vec a\cdot\vec b`. Điều gì xảy ra nếu góc là `90^\circ`?

**Lời giải:**
\[\vec a\cdot\vec b=6\cdot4\cos120^\circ=24\cdot\left(-\frac12\right)=-12.\]
Nếu góc `90^\circ`, tích bằng `6\cdot4\cos90^\circ=0`. Tích âm ở góc tù, kết quả `-12` là **số thực**, không phải vectơ.

**Outcome:** `G10-B11-ANGLE_BETWEEN_VECTORS`, `G10-B11-DOT_PRODUCT_DEFINITION`.

### EX-B11-02 — Tích vô hướng và cos góc theo tọa độ (D2)

**Đề:** Cho `\vec a=(2;-1)`, `\vec b=(3;4)`. Tính tích vô hướng, độ dài và cos của góc giữa hai vectơ.

**Lời giải:**
\[\vec a\cdot\vec b=2\cdot3+(-1)\cdot4=2.\]
`|\vec a|=\sqrt5`, `|\vec b|=5`, suy ra
\[\cos(\vec a,\vec b)=\frac2{5\sqrt5}.\]
Giá trị dương và nhỏ hơn 1 nên góc nhọn. Chỉ dùng công thức chia vì cả hai vectơ đều khác `\vec0`.

**Outcome:** `G10-B11-DOT_PRODUCT_COORDINATES`, `G10-B11-ANGLE_ORTHOGONALITY_APPLICATION`.

### EX-B11-03 — Tìm tham số để hai vectơ vuông góc (D2)

**Đề:** Tìm `t\in\mathbb R` sao cho `\vec u=(t;3)` vuông góc với `\vec v=(2;-4)`.

**Lời giải:** Vì `\vec v\ne\vec0` và `\vec u=(t;3)\ne\vec0` với mọi t, điều kiện vuông góc tương đương
\[\vec u\cdot\vec v=2t+3(-4)=2t-12=0.\]
Vậy `t=6`. Kiểm tra `\vec u=(6;3)` cho `6\cdot2+3(-4)=0`.

**Outcome:** `G10-B11-ANGLE_ORTHOGONALITY_APPLICATION`, `G10-B11-DOT_PRODUCT_COORDINATES`.

### EX-B11-04 — Tính chất phân phối và bình phương độ dài (D2)

**Đề:** Cho `\vec a=(1;2)`, `\vec b=(3;-1)`. Tính `(\vec a+\vec b)\cdot(\vec a-\vec b)` theo hai cách.

**Lời giải — cách tọa độ:** `\vec a+\vec b=(4;1)`, `\vec a-\vec b=(-2;3)`, nên tích bằng `4(-2)+1\cdot3=-5`.

**Lời giải — cách tính chất:**
\[(\vec a+\vec b)\cdot(\vec a-\vec b)=|\vec a|^2-|\vec b|^2=(1^2+2^2)-(3^2+(-1)^2)=5-10=-5.\]
Hai cách trùng kết quả, làm rõ tác dụng của tính phân phối.

**Outcome:** `G10-B11-DOT_PRODUCT_PROPERTIES`.

### EX-B11-05 — Công của lực có hướng (D2)

**Đề:** Một lực không đổi có độ lớn `50 N` tác dụng lên vật, độ dời `6 m` tạo với hướng lực góc `60^\circ`. Tính công của lực. Nếu hướng tạo góc `120^\circ`, công bằng bao nhiêu?

**Lời giải:**
\[W_{60}=50\cdot6\cos60^\circ=300\cdot\frac12=150\,\mathrm{J}.\]
\[W_{120}=50\cdot6\cos120^\circ=300\cdot\left(-\frac12\right)=-150\,\mathrm{J}.\]
Công âm khi thành phần lực theo hướng độ dời ngược chiều; không thể cộng hai độ lớn để tính công.

**Outcome:** `G10-B11-WORK_APPLICATION`, `G10-B11-DOT_PRODUCT_DEFINITION`.

## F. Tổng kiểm soát học thuật và các giới hạn hiện tại

| Hạng mục | Expected | Trạng thái tác giả | Yêu cầu reviewer |
|---|---:|---|---|
| Mô-đun kiến thức D1 B10 | 4 | Đã viết, chưa review | 4/4 verdict theo mô-đun |
| Ví dụ D2 B10 | 5 | Có đề và lời giải, chưa review | 5/5 verdict theo ID |
| Outcome B10 | 5 | Ứng viên, không PASS | 5/5 đối chiếu SGK S1 |
| Mô-đun kiến thức D1 B11 | 4 | Đã viết, chưa review | 4/4 verdict theo mô-đun |
| Ví dụ D2 B11 | 5 | Có đề và lời giải, chưa review | 5/5 verdict theo ID |
| Outcome B11 | 6 | Ứng viên, không PASS | 6/6 đối chiếu SGK S1 |
| SGK Core/Practice/Application/Written B07–B11 | 0 trong gói | Chưa biên soạn/review | **KHÔNG PASS** |
| SGK Chapter IV Readiness bảo mật cuối chương | 0 trong gói | Chưa biên soạn/review | **KHÔNG PASS** |
| D5 đồ họa vectơ ChIV | 0 trong gói | Chưa biên soạn/review | **KHÔNG PASS** |

**Tự kiểm tính toán của người biên soạn (không phải Academic PASS):** Các phép tính tọa độ `AB=(6;-4)`, `2u-3v=(7;-18)`, trung điểm `(5;3)`, trọng tâm `(4;14/3)`, `N(7;5)`, tích vô hướng `-12, 2, 0, -5`, công `150/-150 J` được tính độc lập và kiểm tra điều kiện khác vectơ-không.

**Kịch bản nguồn cần chốt:** (a) Chương IV B10/B11 SGK và SBT từng trang in, (b) Core bắt buộc so với mở rộng — đặc biệt biểu thức cùng phương, hệ tọa độ trung điểm/trọng tâm và công Vật lí, (c) chính xác quy ước SGK về góc giữa vectơ-không và vectơ bất kỳ, phân biệt vectơ-không với số 0, (d) công thức góc, trực giao và số liệu của cả 10 ví dụ. Không mặc định những điểm dựa trên tài liệu tham khảo đã là S1.

**Kiến trúc bắt buộc:** hành trình SGK có lý thuyết đầy đủ, Core ở mỗi bài, Practice/Written và **SGK_CHAPTER_READINESS cuối Chương IV** sau đủ B07–B11. Hành trình Chuyên đề chỉ **Kiến thức/Luyện tập/Tự kiểm tra** (ba phần, không Core riêng); item dùng chung bằng `placement`/`role` và **một `item_id` canonical**, không sao chép. Đề Readiness dùng bộ độc lập, không dùng nguyên câu Practice đã xem và không cung cấp đáp án, lời giải, Tutor hoặc đúng/sai trước **Final Submit**. Học liệu B10/B11 mới có trạng thái chờ review; **không chấm Mastery, không merge, không deploy**.

## G. Yêu cầu phản biện NotebookLM (R0)

1. Đối chiếu trực tiếp **SGK/SBT KNTT gốc** cho B10, B11; trả `SOURCE_RECEIPT_G10_SGK` và `SOURCE_RECEIPT_G10_SBT` gồm trang in từng bài, đánh dấu phần chưa có nguồn.
2. Đánh giá 8/8 mô-đun Knowledge (`KT-B10-01..04`, `KT-B11-01..04`), 10/10 Worked Examples (`EX-B10-01..05`, `EX-B11-01..05`) và 11/11 outcome ứng viên, trả `FULL/PARTIAL/EXTRA` theo từng lesson/outcome; không bỏ qua điều kiện `\vec a\ne\vec0`.
3. Kiểm tra từng phép tính, ký hiệu, phân tầng SGK Core/Practice và tính tự đủ của hai bài; rà quy ước vectơ-không, góc, trực giao, công Vật lí; nếu lệch SGK phải chỉ rõ `DELTA_C` theo ID bị ảnh hưởng.
4. Trả `LESSON_REGISTER`, `KNOWLEDGE_REGISTER`, `EXAMPLE_REGISTER`, `OUTCOME_ALIGNMENT`, `P0_ERRORS`, `P1_WARNINGS`, `P2_NOTICES`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G10_CHIV_B10_B11_D1D2`, và `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
5. **Bảo lưu** PASS D1–D2 B07–B09 từ snapshot đã review nhưng **không cấp PASS toàn Chương IV**, không PASS D3/D4, Readiness hoặc D5, và không cho phép merge/deploy.
