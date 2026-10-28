# Toán 10 KNTT Chương VII — Written / Anchor ứng viên v0.1

**DRAFT_NOT_ACADEMICALLY_REVIEWED** · **NO_MASTERY_CREDIT** · Nội dung tự soạn, chưa publish. **Anchor là vai trò/nhãn của Written**, không tạo ngân hàng thứ hai hay bản sao câu. Phạm vi dựa trên bản gốc SGK 29–58, SBT 27–49 đã đối chiếu theo trang.

## THPT-G10-CHVII-W19-01 — Written · Bài 19 (6 điểm)

**Đề.** Trong mặt phẳng tọa độ, cho \(A(2;-1)\), \(B(5;5)\).
(a) Viết phương trình tổng quát đường thẳng \(AB\).
(b) Viết một phương trình tham số.
(c) Tính khoảng cách từ \(O(0;0)\) đến \(AB\).

**Lời giải chuẩn.** \(\overrightarrow{AB}=(3;6)=3(1;2)\), nên vectơ chỉ phương có thể lấy \((1;2)\), pháp tuyến \((2;-1)\). Phương trình \(AB\) là \(2(x-2)-(y+1)=0\iff2x-y-5=0\). Tham số: \(x=2+t,\ y=-1+2t\), \(t\in\mathbb R\). Khoảng cách từ \(O\): \(d=\frac{|0-0-5|}{\sqrt{2^2+(-1)^2}}=\sqrt5\).

**Rubric /6:** vectơ đúng (1), tổng quát đúng (2), tham số đúng (1), khoảng cách đúng công thức & giá trị (2).
**Misconception:** nhầm pháp tuyến/chỉ phương hoặc bỏ trị tuyệt đối.

## THPT-G10-CHVII-W20-01 — Written · Bài 20 (6 điểm)

**Đề.** Cho \(d_1:(m-1)x+2y-3=0\), \(d_2:x-y+1=0\).
(a) Tìm \(m\) để hai đường vuông góc.
(b) Với \(m\) vừa tìm, tìm giao điểm của hai đường.

**Lời giải chuẩn.** Hai pháp tuyến \((m-1;2)\) và \((1;-1)\) vuông góc khi \((m-1)-2=m-3=0\), vậy \(m=3\). Khi đó \(d_1:2x+2y-3=0\), \(d_2:y=x+1\), nên \(2x+2(x+1)-3=0\iff4x=1\), suy ra \(I(\frac14;\frac54)\).

**Rubric /6:** pháp tuyến (1), điều kiện vuông góc (2), tìm \(m\) (1), giải hệ và kết luận giao điểm (2).
**Misconception:** đồng nhất song song với vuông góc, không thử điều kiện.

## THPT-G10-CHVII-W21-ANCHOR-01 — Written + Anchor · Bài 21 (8 điểm)

**Đề.** Cho tam giác \(A(0;0)\), \(B(6;0)\), \(C(0;8)\).
(a) Chứng minh tam giác vuông tại \(A\).
(b) Xác định đường tròn đi qua ba điểm, tâm và bán kính.
(c) Viết tiếp tuyến đường tròn tại \(A\).

**Lời giải chuẩn.** \(\overrightarrow{AB}=(6;0)\), \(\overrightarrow{AC}=(0;8)\) có tích vô hướng bằng \(0\), nên \(\angle A=90^\circ\). Tâm ngoại tiếp là trung điểm \(BC\): \(I(3;4)\), bán kính \(R=IA=5\). Phương trình \((x-3)^2+(y-4)^2=25\). Bán kính \(IA=(-3;-4)\) là pháp tuyến tiếp tuyến tại \(A\), nên tiếp tuyến \(3x+4y=0\).

**Rubric /8:** chứng minh vuông (1), tìm tâm (2), tìm bán kính (1), phương trình (2), tiếp tuyến & kiểm tra tại \(A\) (2).
**Anchor skills:** tọa độ vectơ → vuông góc → đường tròn qua ba điểm → tiếp tuyến, kiểm chứng kết quả. **Một item_id duy nhất**, \`anchor_tag=true\`.

## THPT-G10-CHVII-W22-01 — Written · Bài 22 (6 điểm)

**Đề.** Một elip tâm \(O\), trục lớn trùng \(Ox\), độ dài trục lớn bằng \(6\), các tiêu điểm là \((-\sqrt5;0)\), \((\sqrt5;0)\).
(a) Lập phương trình chính tắc.
(b) Tìm tọa độ hai đỉnh trên trục nhỏ và phương trình tiếp tuyến ngang tại đỉnh phía trên (giải bằng hình học, không yêu cầu công thức đạo hàm).

**Lời giải chuẩn.** \(a=3,c=\sqrt5\), nên \(b^2=a^2-c^2=9-5=4\). Phương trình \(\frac{x^2}{9}+\frac{y^2}{4}=1\). Hai đỉnh trên trục nhỏ là \((0;2)\), \((0;-2)\). Đường thẳng \(y=2\) chỉ gặp elip ở \((0;2)\), nên là tiếp tuyến ngang tại đỉnh trên.

**Rubric /6:** \(a,c,b\) (2), phương trình (2), hai đỉnh (1), tiếp tuyến và lập luận (1).
**Depth note:** kết luận về tiếp tuyến dựa vào duy nhất một giao điểm thực, không yêu cầu phép tính giải tích ngoài SGK.

## Gates

Các đề Written đều **tự luận trên giấy**, không giả vờ chấm bài tự động. Câu trong phần này có thể được đặt theo SGK hoặc Topic Written nếu đủ outcome; không nhân bản item/rubric. Các đề này không được coi là Chapter Readiness mặc định. Review toán học + mức độ học thuật trước khi phát hành.
