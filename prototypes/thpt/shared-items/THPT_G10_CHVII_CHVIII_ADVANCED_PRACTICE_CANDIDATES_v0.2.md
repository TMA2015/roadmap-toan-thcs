# Toán 10 KNTT — Chương VII/VIII · 14 bài Practice nâng độ sâu v0.2

**DRAFT_NOT_ACADEMICALLY_REVIEWED** · **CANDIDATE_ONLY** · **NO_MASTERY_CREDIT** · **NO_MERGE_DEPLOY**

**Source receipt:** `THPT_G10_CHVII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md` (SGK 29–58, SBT 27–49) và `THPT_G10_CHVIII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md` (SGK 59–79, SBT 50–59). Nguồn được kiểm tra ở mức cấu trúc chương/bài qua trang PDF gốc, **chưa có full-outcome audit**. Tất cả câu hỏi dưới đây **tự soạn**, không chép SGK/SBT. Các câu mức ADVANCED cần xác nhận thêm về độ khó và phạm vi SGK trước khi phát hành.

**Incremental delta:** thêm đúng 2 câu P05/P06 cho mỗi bài B19–B25; **không sửa hoặc tạo bản sao** của 42 Core/Practice và 7 Written đã có ở v0.1. Tổng sau bổ sung: 56 Core/Practice/Application + 7 Written = **63 nội dung ứng viên**. Hai nhãn Anchor vẫn thuộc hai trong số 7 Written, không phải 2 câu khác.

## A. Canonical register mới

| Item ID | SGK bài | Skill | Mức đề xuất | Placement ứng viên | Academic |
|---|---|---|---|---|---|
| THPT-G10-B19-P05 | B19 | LINE_PARALLEL_THROUGH_POINT | INTERMEDIATE | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B19-P06 | B19 | LINE_INTERSECTION_PERPENDICULAR | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B20-P05 | B20 | LINE_PARAMETER_PARALLEL | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B20-P06 | B20 | LINE_ANGLE_EXACT | INTERMEDIATE | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B21-P05 | B21 | CIRCLE_PARAMETER_TANGENCY | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B21-P06 | B21 | CIRCLE_CENTER_ON_AXIS | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B22-P05 | B22 | ELLIPSE_POINT_INTERSECTION | INTERMEDIATE | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B22-P06 | B22 | PARABOLA_EQUIDISTANCE | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B23-P05 | B23 | COUNT_CASES_NO_REPEAT | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B23-P06 | B23 | COUNT_MIXED_SUM_PRODUCT | INTERMEDIATE | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B24-P05 | B24 | COMBINATION_AT_LEAST_ONE | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B24-P06 | B24 | PERMUTATION_ADJACENT | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B25-P05 | B25 | BINOMIAL_COEFF_NEGATIVE | INTERMEDIATE | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |
| THPT-G10-B25-P06 | B25 | BINOMIAL_ODD_COEFF_SUM | ADVANCED | SGK_PRACTICE / TOPIC_PRACTICE if scope | NOT_REVIEWED |

## B. Đề tự biên soạn và lời giải

### THPT-G10-B19-P05 — INTERMEDIATE

**Đề:** Viết phương trình tổng quát của đường thẳng qua \(P(2;-1)\) và song song với \(d:3x+2y-7=0\).

**Đáp án chuẩn:** \(3x+2y-4=0\).

**Lời giải:** Đường cần tìm có pháp tuyến \((3;2)\), nên dạng \(3x+2y+c=0\). Thế \(P\): \(6-2+c=0\Rightarrow c=-4\). Hai đường phân biệt vì \(-4\ne-7\).

**Gợi ý:** Giữ hai hệ số pháp tuyến, tìm hằng số bằng tọa độ điểm.

### THPT-G10-B19-P06 — ADVANCED

**Đề:** Tìm phương trình đường thẳng \(\Delta\) đi qua giao điểm của \(d_1:x+y-4=0\) và \(d_2:2x-y-2=0\), đồng thời vuông góc với \(d_3:x-2y+1=0\).

**Đáp án chuẩn:** \(\Delta:2x+y-6=0\).

**Lời giải:** Giải hệ \(x+y=4,\ 2x-y=2\) được \(I(2;2)\). Đường \(d_3\) có vectơ chỉ phương \((2;1)\), là pháp tuyến của \(\Delta\). Vậy \(2(x-2)+(y-2)=0\).

**Gợi ý:** Tìm giao điểm trước; đổi vectơ chỉ phương của d3 thành pháp tuyến của đường cần tìm.

### THPT-G10-B20-P05 — ADVANCED

**Đề:** Tìm \(m\in\mathbb R\) để \(d_1:(m+1)x+2y-1=0\) song song và phân biệt với \(d_2:3x-6y+4=0\).

**Đáp án chuẩn:** \(m=-2\).

**Lời giải:** Hai pháp tuyến cùng phương khi \((m+1,2)=\lambda(3,-6)\). Từ \(2=-6\lambda\) có \(\lambda=-1/3\), suy ra \(m+1=-1\), \(m=-2\). Khi đó \(d_1:-x+2y-1=0\); nhân với \(-3\) được \(3x-6y+3=0\ne d_2\), nên hai đường song song phân biệt.

**Gợi ý:** Sau khi tìm m, kiểm tra cả hằng số để loại trường hợp trùng.

### THPT-G10-B20-P06 — INTERMEDIATE

**Đề:** Tính cosin của góc nhọn giữa \(d_1:x+2y=0\) và \(d_2:2x+y=0\).

**Đáp án chuẩn:** \(\cos\varphi=\frac45\), nên \(\varphi=\arccos\frac45\approx36{,}87^\circ\).

**Lời giải:** Pháp tuyến là \(\vec n_1=(1;2)\), \(\vec n_2=(2;1)\). \(\cos\varphi=\frac{|\vec n_1\cdot\vec n_2|}{\|\vec n_1\|\|\vec n_2\|}=\frac{|2+2|}{\sqrt5\sqrt5}=\frac45\).

**Gợi ý:** Dùng trị tuyệt đối để lấy góc nhọn giữa hai đường.

### THPT-G10-B21-P05 — ADVANCED

**Đề:** Tìm \(k\in\mathbb R\) để \(x^2+y^2-6x+2y+k=0\) là đường tròn tiếp xúc với đường thẳng \(x=0\). Nêu tiếp điểm.

**Đáp án chuẩn:** \(k=1\), tiếp điểm \(H(0;-1)\).

**Lời giải:** Hoàn thành bình phương: \((x-3)^2+(y+1)^2=10-k\). Tâm \(I(3;-1)\), khoảng cách tới \(x=0\) bằng 3. Tiếp xúc khi \(R=3\), tức \(10-k=9\Rightarrow k=1\). Hình chiếu của I lên \(x=0\) là \(H(0;-1)\).

**Gợi ý:** Điều kiện tiếp xúc: khoảng cách tâm đến đường bằng bán kính dương.

### THPT-G10-B21-P06 — ADVANCED

**Đề:** Tìm phương trình đường tròn đi qua \(A(1;2)\), \(B(5;4)\), biết tâm nằm trên trục \(Ox\).

**Đáp án chuẩn:** \((x-\frac92)^2+y^2=\frac{65}{4}\).

**Lời giải:** Đặt tâm \(I(h;0)\). Từ \(IA^2=IB^2\): \((h-1)^2+4=(h-5)^2+16\Rightarrow 8h=36\Rightarrow h=9/2\). Khi đó \(R^2=(9/2-1)^2+2^2=49/4+16/4=65/4>0\).

**Gợi ý:** Dùng tính chất hai bán kính IA và IB bằng nhau.

### THPT-G10-B22-P05 — INTERMEDIATE

**Đề:** Tìm các giao điểm của elip \(E:\frac{x^2}{16}+\frac{y^2}{9}=1\) với đường thẳng \(y=\frac32\).

**Đáp án chuẩn:** \((2\sqrt3;\frac32)\) và \((-2\sqrt3;\frac32)\).

**Lời giải:** Thế \(y=3/2\): \(x^2/16+(9/4)/9=1\Rightarrow x^2/16=3/4\Rightarrow x^2=12\), nên \(x=\pm2\sqrt3\).

**Gợi ý:** Thay y trước, giải phương trình một ẩn x.

### THPT-G10-B22-P06 — ADVANCED

**Đề:** Cho parabol \(P:y^2=8x\). Chứng minh điểm \(M(2;4)\) thuộc \(P\) và có khoảng cách tới tiêu điểm bằng khoảng cách tới đường chuẩn.

**Đáp án chuẩn:** \(M\in P\), \(MF=d(M,\Delta)=4\).

**Lời giải:** Vì \(4^2=8\cdot2=16\), \(M\in P\). Với \(y^2=2px\), \(p=4\), nên tiêu điểm \(F(2;0)\), đường chuẩn \(\Delta:x=-2\). Khi đó \(MF=\sqrt{(2-2)^2+(4-0)^2}=4\), và \(d(M,\Delta)=|2-(-2)|=4\).

**Gợi ý:** Xác định p từ 2p=8, rồi kiểm tra hai khoảng cách.

### THPT-G10-B23-P05 — ADVANCED

**Đề:** Từ các chữ số \(0,1,2,3,4\), lập số tự nhiên có **ba chữ số khác nhau** và là số chẵn. Có bao nhiêu số?

**Đáp án chuẩn:** \(30\) số.

**Lời giải:** Chia hai trường hợp rời nhau. (i) Hàng đơn vị bằng 0: hàng trăm có 4 lựa chọn, hàng chục còn 3, được \(4\cdot3=12\). (ii) Hàng đơn vị là 2 hoặc 4: có 2 lựa chọn; hàng trăm chọn trong ba chữ số khác 0 và khác chữ số đơn vị; hàng chục còn 3 lựa chọn (có thể là 0). Được \(2\cdot3\cdot3=18\). Tổng \(12+18=30\).

**Gợi ý:** Tách trường hợp chữ số hàng đơn vị bằng 0 và khác 0.

### THPT-G10-B23-P06 — INTERMEDIATE

**Đề:** Một khách có thể chọn **đúng một** cách đi lại: 3 tuyến xe đạp khác nhau hoặc 2 tuyến xe buýt khác nhau. Nếu đi xe buýt, mỗi tuyến có 2 loại vé. Nếu đi xe đạp thì không chọn vé. Có bao nhiêu phương án hoàn chỉnh?

**Đáp án chuẩn:** \(7\) phương án.

**Lời giải:** Phương án xe đạp: 3. Phương án xe buýt: \(2\) tuyến nhân \(2\) loại vé bằng \(4\). Hai nhóm lựa chọn loại trừ nhau, tổng \(3+4=7\).

**Gợi ý:** Nhân trong từng nhánh nhiều bước, cộng giữa các nhánh loại trừ nhau.

### THPT-G10-B24-P05 — ADVANCED

**Đề:** Chọn nhóm 3 người từ 6 người khác nhau, trong đó có hai người được chỉ định A và B. Có bao nhiêu nhóm chứa **ít nhất một** trong hai người A, B?

**Đáp án chuẩn:** \(16\) nhóm.

**Lời giải:** Tổng số nhóm \(\binom63=20\). Nhóm không có A lẫn B chỉ chọn 3 trong 4 người còn lại: \(\binom43=4\). Vậy \(20-4=16\).

**Gợi ý:** Dùng biến cố đối: tất cả nhóm trừ nhóm không chứa cả A lẫn B.

### THPT-G10-B24-P06 — ADVANCED

**Đề:** Xếp 5 học sinh khác nhau thành một hàng, biết hai bạn A và B phải đứng cạnh nhau. Có bao nhiêu cách?

**Đáp án chuẩn:** \(48\) cách.

**Lời giải:** Gộp A và B thành một khối, cùng 3 học sinh còn lại là 4 đối tượng phân biệt, có \(4!=24\) cách. Trong khối A/B có 2 thứ tự, tổng \(24\cdot2=48\).

**Gợi ý:** Gộp cặp phải đứng cạnh nhau thành một khối, rồi tính thứ tự trong khối.

### THPT-G10-B25-P05 — INTERMEDIATE

**Đề:** Tìm hệ số của \(x^3\) trong \((2-x)^6\).

**Đáp án chuẩn:** \(-160\).

**Lời giải:** Chọn 3 thừa số \((-x)\) và 3 thừa số \(2\): hệ số \(\binom63(-1)^3 2^3=20\cdot(-1)\cdot8=-160\).

**Gợi ý:** Dấu của ((-x)^3) là âm.

### THPT-G10-B25-P06 — ADVANCED

**Đề:** Tính tổng các hệ số của những số hạng có **số mũ lẻ** của \(x\) trong khai triển \((1+x)^7\).

**Đáp án chuẩn:** \(64\).

**Lời giải:** Đặt \(f(x)=(1+x)^7\). Tổng hệ số bậc chẵn trừ tổng hệ số bậc lẻ là \(f(-1)=0\); tổng tất cả hệ số là \(f(1)=2^7=128\). Vậy tổng hệ số bậc lẻ bằng \((128-0)/2=64\).

**Gợi ý:** Thử thay x=1 và x=-1 để tách hệ số bậc chẵn/lẻ.


## C. Kiểm soát phát hành và trùng lặp

- Tất cả câu ở file này thuộc **Practice**, có gợi ý và đáp án. Không được coi là bộ Tự kiểm tra độc lập đã giữ kín, kể cả khi đổi số hoặc chuyển nhánh.
- Một `canonical_item_id` có thể có nhiều `placement_id` theo outcome đã xác nhận. Không nhân bản answer key, attempt, exposure hoặc mastery.
- Không sửa Golden UI R4; không có route học sinh mới, không có cấp Academic PASS. Ma trận chi tiết ở `THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.2.md`.
