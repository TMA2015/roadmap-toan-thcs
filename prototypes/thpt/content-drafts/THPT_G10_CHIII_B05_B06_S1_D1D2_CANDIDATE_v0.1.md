# Toán 10 KNTT tập 1 — Chương III — Hệ thức lượng trong tam giác
## Source-first D1–D2 bản thảo v0.1 — CHƯA REVIEW

**AUTHORING_ONLY** · \`PACKET_DRAFT=G10-SGK-CHIII\` · \`NOTEBOOKLM_NOT_REVIEWED\` · \`CONTENT_READY_NO\`.

### 1. Source S1 scope

Đã mở trực tiếp bản SGK/SBT KNTT Toán 10 tập 1 do chủ dự án cung cấp, xem mục lục và nội dung trang của Chương III (không dùng kiến thức Toán 11 để mở rộng Core):

| Bài | SGK trang in | SBT trang in |
|---|---|---|
| Bài 5 — Giá trị lượng giác của một góc từ 0° đến 180° | 33–37 | 29–33 |
| Bài 6 — Hệ thức lượng trong tam giác | 38–43 | 34–39 |
| Bài tập cuối Chương III | 44–45 | 40–44 |

Đã kiểm trực tiếp SGK Bài 5 (đường nửa tròn, GTLG, góc bù) và Bài 6 (định lí côsin, định lí sin, diện tích, Heron, ứng dụng); SBT Bài 5 được xem từ trang 29–33. Chưa đối chiếu từng bài SBT Bài 6 và cuối chương: giữ \`A2_PARTIAL\` cho đến khi soát đủ.

### 2. Outcome dự kiến (chưa đăng ký)

| Outcome ID ứng viên | Bằng chứng học thuật cần có |
|---|---|
| \`G10-B05-UNIT_SEMICIRCLE\` | Giá trị lượng giác góc 0°–180° bằng nửa đường tròn đơn vị |
| \`G10-B05-SPECIAL_ANGLES\` | Bảng góc đặc biệt 0°, 30°, 45°, 60°, 90°, 120°, 135°, 150°, 180° và góc liên quan |
| \`G10-B05-SIGN_DOMAIN\` | Dấu sin/cos/tan/cot, miền xác định và trường hợp giá trị không tồn tại |
| \`G10-B05-SUPPLEMENTARY\` | Quan hệ sin/cos/tan/cot của hai góc bù nhau |
| \`G10-B05_IDENTITIES\` | Các hệ thức cơ bản và suy giá trị lượng giác |
| \`G10-B06_COSINE_RULE\` | Định lí côsin và định lí Pitago là trường hợp đặc biệt |
| \`G10-B06_SINE_RULE\` | Định lí sin, đường kính/ bán kính ngoại tiếp; góc còn lại hợp lệ |
| \`G10-B06_AREA_SIN\` | Công thức diện tích qua hai cạnh và góc xen giữa |
| \`G10-B06_HERON\` | Công thức Heron, bán kính nội tiếp/ngoại tiếp và điều kiện tam giác |
| \`G10-B06_APPLICATION\` | Giải tam giác và ứng dụng đo khoảng cách/góc; đơn vị và chọn nghiệm hình học |

ID outcome chỉ là đề xuất cho ma trận D1–D6, cần rà contract ID chung trước khi sử dụng.

### 3. Bài 5 — Giá trị lượng giác từ 0° đến 180° (D1)

Với góc \(\alpha\) thỏa \(0^\circ\le\alpha\le180^\circ\), lấy điểm \(M(x,y)\) trên nửa đường tròn đơn vị, có \(\cos\alpha=x,\ \sin\alpha=y\). Do \(y\ge0\), \(\sin\alpha\ge0\). Cosin có thể dương (góc nhọn), bằng 0 (90°) hoặc âm (góc tù).

\[
\sin^2\alpha+\cos^2\alpha=1;\quad
\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\text{ khi }\cos\alpha\ne0;\quad
\cot\alpha=\frac{\cos\alpha}{\sin\alpha}\text{ khi }\sin\alpha\ne0.
\]
Ví dụ tan không xác định tại 90°, cot không xác định tại 0° và 180°. Không viết công thức chia khi mẫu bằng 0.

Với hai góc bù nhau \(\alpha\) và \(180^\circ-\alpha\):
\[
\sin(180^\circ-\alpha)=\sin\alpha,\quad
\cos(180^\circ-\alpha)=-\cos\alpha,
\]
\[
\tan(180^\circ-\alpha)=-\tan\alpha,\quad
\cot(180^\circ-\alpha)=-\cot\alpha
\]
khi mỗi biểu thức xác định. Không dùng sai dấu cosin hoặc ngầm khẳng định tan tại 90° là có giá trị.

#### EX-G10-B05-01 — Tính góc tù

Tính sin, cos, tan, cot tại \(\alpha=120^\circ\).

Do \(120^\circ=180^\circ-60^\circ\), suy ra \(\sin120^\circ=\sqrt3/2\), \(\cos120^\circ=-1/2\), \(\tan120^\circ=-\sqrt3\), \(\cot120^\circ=-\sqrt3/3\). Cả tan/cot xác định vì sin và cos khác 0.

#### EX-G10-B05-02 — Biết sin, xét dấu cos

Cho góc tù \(\alpha\) và \(\sin\alpha=3/5\), tính cos và tan.

Từ \(\cos^2\alpha=1-9/25=16/25\), góc tù có cos âm nên \(\cos\alpha=-4/5\). Khi đó \(\tan\alpha=(3/5)/(-4/5)=-3/4\). Nếu chọn cos dương là bỏ mất điều kiện góc tù.

#### EX-G10-B05-03 — Liên hệ góc bù và giá trị đặc biệt

Tính \(T=\sin150^\circ+\cos150^\circ\).

Do \(150^\circ=180^\circ-30^\circ\), \(\sin150^\circ=1/2\), \(\cos150^\circ=-\sqrt3/2\), nên \(T=(1-\sqrt3)/2\). Không suy \(\cos150^\circ=\cos30^\circ\).

### 4. Bài 6 — Hệ thức lượng trong tam giác (D1)

Với tam giác \(ABC\), đặt \(a=BC,\ b=CA,\ c=AB\), các góc đối diện lần lượt \(A,B,C\).

**Định lí côsin:**
\[
a^2=b^2+c^2-2bc\cos A,\quad
b^2=a^2+c^2-2ac\cos B,\quad
c^2=a^2+b^2-2ab\cos C.
\]
Khi \(A=90^\circ\), ta có \(a^2=b^2+c^2\). Từ độ dài ba cạnh có thể suy \(\cos A=(b^2+c^2-a^2)/(2bc)\) với \(b,c>0\).

**Định lí sin:** Với \(R>0\) là bán kính đường tròn ngoại tiếp,
\[
\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R.
\]
Áp dụng trong tam giác không suy biến (các góc nằm giữa 0° và 180°), không tự chọn góc trong bài toán có hai khả năng (SSA) nếu thiếu thông tin.

**Diện tích tam giác:** Với \(S=S_{ABC}>0\), nửa chu vi \(p=(a+b+c)/2\),
\[
S=\tfrac12 bc\sin A=\tfrac12 ca\sin B=\tfrac12 ab\sin C,\quad
S=\sqrt{p(p-a)(p-b)(p-c)},\quad S=pr,\quad S=\frac{abc}{4R}.
\]
Dùng Heron khi \(a,b,c>0\) thỏa bất đẳng thức tam giác nghiêm ngặt. Đơn vị diện tích là đơn vị độ dài bình phương.

#### EX-G10-B06-01 — Định lí côsin

Trong tam giác có \(b=6,\ c=8,\ A=60^\circ\), tìm cạnh \(a\).
\[
a^2=6^2+8^2-2\cdot6\cdot8\cdot\cos60^\circ=100-48=52.
\]
Suy ra \(a=2\sqrt{13}>0\). Chú ý góc \(A\) nằm xen giữa hai cạnh \(b,c\).

#### EX-G10-B06-02 — Định lí sin

Trong tam giác \(ABC\), \(A=30^\circ,\ B=45^\circ,\ a=5\). Khi đó \(C=180^\circ-30^\circ-45^\circ=105^\circ\). Theo định lí sin,
\[
b=\frac{a\sin B}{\sin A}
=\frac{5(\sqrt2/2)}{1/2}=5\sqrt2.
\]
Nếu cần \(R\), ta có \(2R=a/\sin A=10\), vậy \(R=5\).

#### EX-G10-B06-03 — Heron và bán kính

Tam giác có ba cạnh \(13,14,15\). Nửa chu vi \(p=21\), từ đó
\[
S=\sqrt{21(21-13)(21-14)(21-15)}
=\sqrt{21\cdot8\cdot7\cdot6}=84.
\]
Bán kính nội tiếp \(r=S/p=84/21=4\), bán kính ngoại tiếp \(R=abc/(4S)=13\cdot14\cdot15/(4\cdot84)=65/8\). Hai bán kính khác nhau; không đảo \(S=pr\) với \(S=abc/(4R)\).

### 5. Hạn mức và việc còn phải làm

- D1/D2 mới là **bản thảo nguồn**, 2 bài, 10 outcome ứng viên, 6 ví dụ; **chưa được NotebookLM review**, chưa phải bài học/chương hoàn thiện.
- Cần đối chiếu đầy đủ S1 trang SGK 33–45, SBT 29–44 và rubric Written; xác định rõ phạm vi Core và các bài ứng dụng.
- D3: biên soạn câu Core/Practice/Application đúng độ sâu, không nhân bản item. D4: Written/Anchor cùng thư viện, rubric. D5: tạo 2 SVG thực về nửa đường tròn lượng giác và tam giác/định lí sin-côsin/diện tích; kiểm XML-to-math. D6: ít nhất 4 thẻ cho dấu góc tù, điều kiện tan/cot, quy tắc góc xen giữa, nhầm sin/cos rule.
- Không công bố key Readiness, không tự động ghi Mastery, không làm trang Core riêng trên Topic, không triển khai website. Chỉ khi D1–D6 đủ và freeze Temp chính thức mới gửi NotebookLM; không suy PASS mới từ PASS ChII.

**CHECKPOINT:** \`D1_D2_DRAFT\`, \`A1_A7_HOLD\`, \`NOTEBOOKLM_NOT_REVIEWED\`, \`NO_CONTENT_READY\`, \`NO_RELEASE\`.
