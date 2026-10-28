# Toán 10 KNTT · Chương III — Hệ thức lượng trong tam giác
## Kiến thức D1 và ví dụ có lời giải D2 — Bài 5, Bài 6 · R0

**PACKET_ID:** `THPT-G10-CHIII-B05-B06-S1-D1D2-20261028-R0`  
**AUTHORING_STATUS:** `NEW_CANDIDATE_NOT_REVIEWED` — tài liệu để NotebookLM thẩm định độc lập, **không tự cấp PASS**.  
**Permanent Sources:** đúng bộ `01–05_THPT_PERMANENT_v2.0_ONLY` cùng SGK/SBT KNTT gốc. Quy tắc hai hành trình học `08_THPT_DUAL_COMPLETE_LEARNING_PATHS_AND_SHARED_RESOURCES_v2.0.md` và bàn giao `06`/delta `07 v1.1`.  
**SGK scope (tra cứu thứ cấp S2, CHƯA phải SOURCE_RECEIPT S1):** Toán 10 Tập 1, Chương III, Bài 5 khoảng trang in 33–37, Bài 6 khoảng 38–43, bài tập cuối chương khoảng 44–45; yêu cầu NotebookLM kiểm tra **trang in thực** trong SGK gốc.  
**SBT Toán 10 Tập 1 Chương III:** `SOURCE_RECEIPT_S1_PENDING`, **chưa điền trang in**.  
**S2 scope evidence:** mục lục SGK KNTT công khai về ChIII/B05/B06; các gợi ý phạm vi chưa thay thế bản gốc S1.

## 1. Ma trận outcome ứng viên — 12 ID chưa review

| ID outcome ứng viên | Bài | Điều học sinh tự thực hiện được | Nguồn Kiến thức | Ví dụ dẫn |
|---|---|---|---|---|
| `G10-B05-UNIT_SEMICIRCLE` | B05 | Đọc sin/cos từ tọa độ điểm trên nửa đường tròn đơn vị | KT-B05-01 | EX-B05-01 |
| `G10-B05-TRIG_SIGNS_DOMAINS` | B05 | Chỉ ra dấu và góc khiến tan/cot không xác định | KT-B05-01 | EX-B05-01,02 |
| `G10-B05-SPECIAL_ANGLES` | B05 | Tính chính xác các giá trị lượng giác góc đặc biệt | KT-B05-02 | EX-B05-01 |
| `G10-B05-SUPPLEMENTARY_ANGLES` | B05 | Dùng quan hệ giữa hai góc bù nhau | KT-B05-02 | EX-B05-03 |
| `G10-B05-COMPLEMENTARY_ANGLES` | B05 | Liên hệ sin và cos của hai góc phụ nhau ở miền xác định | KT-B05-02 | EX-B05-03 |
| `G10-B05-TRIG_IDENTITIES_CALCULATOR` | B05 | Dùng hằng đẳng thức cơ bản và máy tính đúng chế độ độ | KT-B05-03 | EX-B05-02,03 |
| `G10-B06-COSINE_RULE` | B06 | Tính cạnh/góc bằng định lí côsin | KT-B06-01 | EX-B06-01 |
| `G10-B06-SINE_RULE_CIRCUMRADIUS` | B06 | Vận dụng định lí sin và bán kính ngoại tiếp | KT-B06-02 | EX-B06-02 |
| `G10-B06-TRIANGLE_SOLVING` | B06 | Chọn dữ kiện, bổ sung góc, giải tam giác hợp lệ | KT-B06-02,04 | EX-B06-02,04 |
| `G10-B06-AREA_TWO_SIDES_ANGLE` | B06 | Tính diện tích từ hai cạnh và góc xen giữa | KT-B06-03 | EX-B06-01 |
| `G10-B06-HERON_INRADIUS_CIRCUMRADIUS` | B06 | Tính Heron, bán kính nội/ngoại tiếp đúng điều kiện tam giác | KT-B06-03 | EX-B06-03 |
| `G10-B06-REAL_WORLD_DISTANCE` | B06 | Mô hình hóa khoảng cách thực tế bằng định lí côsin | KT-B06-04 | EX-B06-04 |

**Đề nghị reviewer:** xác nhận 12 ID có đúng/đủ chuẩn Core S1 không; ví dụ nội dung máy tính hoặc quan hệ góc phụ/định lí trung tuyến cần phân tầng ra sao. Những ID không thuộc Core phải gắn `SUPPORT_EXTENSION_CANDIDATE`, không tự ép vào chương trình bắt buộc.

---

## 2. BÀI 5 — Giá trị lượng giác của một góc từ 0° đến 180°

### KT-B05-01 — Nửa đường tròn đơn vị, dấu và miền xác định

Trong mặt phẳng tọa độ Oxy, xét **nửa đường tròn đơn vị phía trên trục hoành**. Với mỗi góc \(\alpha\) từ 0° đến 180°, lấy điểm \(M(x,y)\) trên nửa đường tròn tương ứng với tia OM tạo góc \(\alpha\) với Ox theo chiều ngược kim đồng hồ. Ta có

\[
\cos\alpha=x,\qquad\sin\alpha=y,\qquad x^2+y^2=1,\quad y\ge0.
\]

Khi mẫu số khác 0: \(\tan\alpha=y/x\) nếu \(\cos\alpha\ne0\) (tức \(\alpha\ne90^\circ\)); \(\cot\alpha=x/y\) nếu \(\sin\alpha\ne0\) (tức \(\alpha\notin\{0^\circ,180^\circ\}\)). Đừng dùng tang ở 90°, cotang ở 0° hoặc 180°.

Trong khoảng 0°–90°, sin và cos không âm; trong khoảng 90°–180° **sin dương, cos âm**. Đặc biệt tại 90° thì cos bằng 0, sin bằng 1; tại 180° thì sin bằng 0, cos bằng −1. Tan/cot có dấu âm với góc tù khi chúng xác định.

**Câu tự nhắc:** Nếu một góc tù có \(\sin\alpha=3/5\), dấu của \(\cos\alpha\) phải là âm dù bình phương cos dương.

### KT-B05-02 — Góc đặc biệt, góc bù và góc phụ

Các giá trị đặc biệt cần biết trong bài: \(\sin 30^\circ=1/2\), \(\cos30^\circ=\sqrt3/2\), \(\sin45^\circ=\cos45^\circ=\sqrt2/2\), \(\sin60^\circ=\sqrt3/2\), \(\cos60^\circ=1/2\), cùng 0°, 90° và 180° đúng miền xác định. Các kết quả góc tù được tìm bằng quan hệ **góc bù**:

\[
\sin(180^\circ-\alpha)=\sin\alpha,\qquad
\cos(180^\circ-\alpha)=-\cos\alpha.
\]

Khi hai vế có nghĩa: \(\tan(180^\circ-\alpha)=-\tan\alpha\) và \(\cot(180^\circ-\alpha)=-\cot\alpha\). Với hai góc phụ nhau \(0^\circ\le\alpha\le90^\circ\): \(\sin(90^\circ-\alpha)=\cos\alpha\), \(\cos(90^\circ-\alpha)=\sin\alpha\). Dùng quan hệ tan/cot của góc phụ **chỉ khi cả hai giá trị xác định**.

**Ý nghĩa:** Với góc tù 150°, sin vẫn dương nhưng cos âm vì hoành độ điểm M nằm phía trái trục Oy.

### KT-B05-03 — Hệ thức cơ bản và sử dụng máy tính

Do điểm M nằm trên đường tròn đơn vị:
\[
\sin^2\alpha+\cos^2\alpha=1.
\]

Khi \(\cos\alpha\ne0\), \(\tan\alpha=\sin\alpha/\cos\alpha\). Khi \(\sin\alpha\ne0\), \(\cot\alpha=\cos\alpha/\sin\alpha\). Nếu cho một giá trị lượng giác, hãy tìm bình phương giá trị còn lại từ công thức rồi **chọn đúng dấu theo góc**; không tự coi căn bậc hai luôn dương. Khi dùng máy tính, chọn chế độ **DEG (độ)** cho đầu vào như 118°, không phải RAD (radian); ghi rõ cách làm tròn nếu lấy số thập phân.

### EX-B05-01 — Tính lượng giác góc 150°

**Đề ví dụ:** Tìm \(\sin150^\circ\), \(\cos150^\circ\), \(\tan150^\circ\) và \(\cot150^\circ\).

**Lời giải:** Vì \(150^\circ=180^\circ-30^\circ\),
\[
\sin150^\circ=\frac12,\quad
\cos150^\circ=-\frac{\sqrt3}{2},\quad
\tan150^\circ=-\frac1{\sqrt3}=-\frac{\sqrt3}{3},\quad
\cot150^\circ=-\sqrt3.
\]
Kiểm tra: sin dương và cos âm, phù hợp góc tù; tan và cot đều xác định vì sin, cos đều khác 0.

### EX-B05-02 — Từ sin suy ra cos của góc tù

**Đề ví dụ:** Cho \(90^\circ<\alpha<180^\circ\) và \(\sin\alpha=3/5\). Tìm cos, tan, cot.

**Lời giải:** \(\cos^2\alpha=1-(3/5)^2=16/25\). Vì góc tù nên \(\cos\alpha=-4/5\) (không chọn +4/5). Do đó \(\tan\alpha=(3/5)/(-4/5)=-3/4\) và \(\cot\alpha=-4/3\). Đây cũng là bài kiểm tra việc **chọn dấu căn**.

### EX-B05-03 — Hệ thức góc bù/góc phụ và kiểm tra máy tính

**Đề ví dụ:** Cho \(\theta=35^\circ\). Không dùng bảng số gần đúng, diễn tả \(\sin145^\circ\), \(\cos145^\circ\), \(\sin55^\circ\) theo sin/cos của \(35^\circ\). Sau đó ước lượng \(\sin145^\circ\) bằng máy tính ở chế độ DEG.

**Lời giải:** \(145^\circ=180^\circ-35^\circ\) và \(55^\circ=90^\circ-35^\circ\), vì vậy \(\sin145^\circ=\sin35^\circ\), \(\cos145^\circ=-\cos35^\circ\), \(\sin55^\circ=\cos35^\circ\). Máy tính ở chế độ độ cho \(\sin145^\circ\approx0.5736\). Giá trị phải dương và dưới 1; nếu khác nhiều, kiểm tra chế độ DEG/RAD.

---

## 3. BÀI 6 — Hệ thức lượng trong tam giác

Dùng kí hiệu chuẩn: với tam giác ABC không suy biến, \(a=BC\), \(b=CA\), \(c=AB\) đối diện các góc \(A,B,C\); \(A+B+C=180^\circ\), các góc thuộc \((0^\circ,180^\circ)\). Kí hiệu \(S\) là diện tích, \(p=(a+b+c)/2\) là nửa chu vi, \(R\) và \(r\) lần lượt là bán kính ngoại tiếp/nội tiếp.

### KT-B06-01 — Định lí côsin và chiều suy luận

\[
a^2=b^2+c^2-2bc\cos A,
\quad b^2=c^2+a^2-2ca\cos B,
\quad c^2=a^2+b^2-2ab\cos C.
\]

Khi biết **hai cạnh và góc xen giữa**, dùng định lí côsin tìm cạnh thứ ba. Khi biết **ba cạnh** hợp lệ (tổng hai cạnh lớn hơn cạnh còn lại), có thể suy ra \(\cos A=(b^2+c^2-a^2)/(2bc)\), rồi tính góc. Với góc tù A, \(\cos A<0\), nên \(a^2>b^2+c^2\). Đừng nhầm dấu trừ trước số hạng cos với giá trị cos có thể âm.

### KT-B06-02 — Định lí sin, ngoại tiếp và giải tam giác

\[
\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R.
\]

Nếu biết một cạnh đối diện một góc và thêm góc khác, tính góc thứ ba bằng tổng 180°, sau đó áp định lí sin tìm cạnh còn lại và \(R\). Trong tam giác, \(\sin A,\sin B,\sin C>0\). **Cẩn trọng:** nếu chỉ biết hai cạnh và một góc *không xen giữa*, có thể tồn tại nhiều cấu hình tam giác; không tự chấp nhận một nghiệm từ phép nghịch đảo sin nếu chưa xét điều kiện.

### KT-B06-03 — Diện tích, Hê-rông, bán kính nội/ngoại tiếp

\[
S=\tfrac12bc\sin A=\tfrac12ca\sin B=\tfrac12ab\sin C.
\]

Với ba cạnh hợp lệ và \(p=(a+b+c)/2\), công thức Hê-rông là
\[
S=\sqrt{p(p-a)(p-b)(p-c)}.
\]

Từ công thức diện tích và đường tròn: \(S=pr=abc/(4R)\). Vì thế \(r=S/p\), \(R=abc/(4S)\); công thức chỉ dành cho tam giác không suy biến với \(S,p>0\). Không nhầm **p là nửa chu vi** với chu vi \(a+b+c\). Khi biết thêm đường cao \(h_a\): \(S=\tfrac12 ah_a\). Nếu SGK/SBT B06 yêu cầu chứng minh hoặc sử dụng công thức trung tuyến, reviewer phải xác nhận phạm vi và phân tầng, không tự ép vào Core từ bản thảo này.

### KT-B06-04 — Lựa chọn công thức và bài toán thực tế

Đọc dữ kiện và quyết định: (i) **SAS** — hai cạnh cùng góc xen giữa → côsin; (ii) **ASA/AAS** — hai góc và một cạnh → tổng góc và sin; (iii) **SSS** — ba cạnh → kiểm tra bất đẳng thức tam giác, Heron hoặc côsin; (iv) đo khoảng cách từ một điểm tới hai mục tiêu và góc quan sát giữa hai hướng → côsin. Sau khi tính, kiểm tra đơn vị (m, km, m²), độ dài dương, góc nằm trong \((0^\circ,180^\circ)\), và cách làm tròn.

### EX-B06-01 — Tìm cạnh, diện tích khi biết góc xen giữa

**Đề ví dụ:** Tam giác ABC có \(b=7\), \(c=9\), \(A=60^\circ\). Tính \(a\) và \(S\).

**Lời giải:**
\[
a^2=7^2+9^2-2\cdot7\cdot9\cos60^\circ=49+81-63=67.
\]
Vậy \(a=\sqrt{67}\). Diện tích \(S=\tfrac12bc\sin A=\frac{63\sqrt3}{4}\). Hai độ dài b,c đối diện B,C nên góc A đúng là góc **xen giữa b và c**; không sử dụng nhầm góc đối diện a trong công thức diện tích.

### EX-B06-02 — Hai góc, một cạnh và bán kính ngoại tiếp

**Đề ví dụ:** Tam giác ABC có \(B=45^\circ\), \(C=60^\circ\), \(b=6\sqrt2\). Tính A, R, c, a.

**Lời giải:** \(A=180^\circ-45^\circ-60^\circ=75^\circ\). Từ \(2R=b/\sin B=6\sqrt2/(\sqrt2/2)=12\), suy ra \(R=6\). Vì \(c=2R\sin60^\circ\), được \(c=6\sqrt3\). Tương tự \(a=12\sin75^\circ=3(\sqrt6+\sqrt2)\). Kết quả 3 cạnh dương, không nhầm \(2R\) với \(R\).

### EX-B06-03 — Hê-rông, r, R và góc tù

**Đề ví dụ:** Tam giác có ba cạnh \(a=9\), \(b=10\), \(c=17\). Tính S, r, R; kết luận góc đối diện cạnh c là góc nhọn hay tù.

**Lời giải:** \(9+10>17\) nên tam giác tồn tại. \(p=(9+10+17)/2=18\). Từ Hê-rông:
\[
S=\sqrt{18(18-9)(18-10)(18-17)}=\sqrt{18\cdot9\cdot8\cdot1}=36.
\]
Vì vậy \(r=S/p=2\), và \(R=abc/(4S)=9\cdot10\cdot17/(4\cdot36)=85/8\). Hơn nữa \(\cos C=(9^2+10^2-17^2)/(2\cdot9\cdot10)=-3/5<0\), nên \(C\) tù. Không nhầm r và R.

### EX-B06-04 — Tính khoảng cách đo đạc không đi thẳng

**Đề ví dụ:** Từ vị trí P, hai địa điểm A và B cách P lần lượt 300 m và 400 m, góc \(APB=60^\circ\). Tính khoảng cách AB theo đường thẳng (làm tròn mét).

**Lời giải:** Tam giác APB có PA=300, PB=400, góc xen giữa tại P bằng 60°. Định lí côsin:
\[
AB^2=300^2+400^2-2\cdot300\cdot400\cos60^\circ
=90\,000+160\,000-120\,000=130\,000.
\]
Vậy \(AB=100\sqrt{13}\;\mathrm m\approx361\;\mathrm m\) (làm tròn mét). Đây là khoảng cách đường thẳng trên mô hình, không tự đồng nhất với quãng đường thực đi lại.

---

## 4. Liên kết hai hành trình và phần CHƯA biên soạn

- **SGK ChIII độc lập:** Bài 5/6 đều phải có Kiến thức + ví dụ chuẩn, Core sau từng bài, Practice/Application/Written và **SGK_CHAPTER_READINESS** cuối Chương III. Gói này mới xin review D1–D2; chưa có D3–D4 item, chưa có đề Readiness, chưa có D5 minh họa nửa đường tròn/góc tam giác thật.
- **Chuyên đề:** đúng 3 phần Kiến thức/Luyện tập/Tự kiểm tra chuyên đề, **không có trang Core riêng**. Có thể dùng chung ví dụ, hình, item canonical qua mapping nếu thật sự phù hợp và sau review; tuyệt đối không nhân bản item/đáp án/lịch sử.
- **Tự kiểm tra giữ kín:** không lấy ví dụ hoặc Practice đã nhìn thấy làm chứng cứ độc lập cho Readiness; không hint, Tutor, đúng/sai, lời giải hoặc đáp án trước Final Submit.
- **Không tự triển khai website:** Golden UI R4 giữ nguyên, không merge, deploy, ghi mastery hay cấp Academic PASS.

## 5. Yêu cầu reviewer NotebookLM — S1/D1/D2

1. Mở **SGK/SBT Toán 10 KNTT Tập 1 gốc** và trả số trang in chính xác cho B05, B06, cuối ChIII; xác nhận SBT B05/B06 và toàn chương, không dùng S2 như S1. Đồng thời kiểm tra sơ đồ nội dung B05/B06 có phần nào bị thiếu hoặc đưa quá sâu.
2. Kiểm tra **7 mô-đun KT** (B05 3, B06 4), **7 ví dụ EX** (B05 3, B06 4), **12 outcome ID** (B05 6, B06 6); báo FULL/PARTIAL/HOLD/EXTRA theo từng ID.
3. Kiểm tra tên góc, kí hiệu cạnh đối diện, dấu cos góc tù, miền xác định tan/cot, hệ thức góc phụ/bù, định lí sin/côsin, Heron, r/R, độ dài/diện tích và các phép tính của 7 ví dụ. Xác định trung tuyến hoặc SSA ambiguous cases thuộc chuẩn hay chỉ là cảnh báo/mở rộng.
4. Trả **SOURCE_RECEIPT_SGK/SBT**, LESSON_REGISTER, KNOWLEDGE_REGISTER 7/7, EXAMPLE_REGISTER 7/7, OUTCOME_ALIGNMENT 12/12, P0/P1/P2, MINIMAL_DELTA và `ACADEMIC_OVERALL_G10_CHIII_D1D2`; nếu nguồn không đủ, HOLD đúng phạm vi.
5. Bảo lưu các verdict PASS trước đó của SGK G10 ChI/ChII và ChVI–IX, không cấp PASS cho D3–D4, Readiness hay D5 của ChIII và **không cấp quyền phát hành**.
