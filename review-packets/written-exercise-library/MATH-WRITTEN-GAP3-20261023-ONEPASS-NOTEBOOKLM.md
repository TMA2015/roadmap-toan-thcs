# SELF-LEARNING MATH — GAP3: BA BÀI TỰ LUẬN BỔ SUNG CẤU TRÚC (REVIEW PACKET)

**PACKET_ID:** MATH-WRITTEN-GAP3-20261023-R0  
**STATUS:** AUTHOR_DRAFT_ONLY | NOTEBOOKLM_REVIEW_PENDING | NO_NEW_CANONICAL_IDS | NO_DEPLOY  
**EXPECTED:** 3 candidate-only IDs: `CAND-G6-AREA-01`, `CAND-G7-POLY-01`, `CAND-G8-MID-01`.  
**Latest published canonical catalog:** `docs/assets/data/written-exercises/written-exercise-library-v1.json` on `main` — **84 items**, Git blob `85d8301daca7819009ba47eabf63080d586e9dc9`.  
**Known full-corpus audit:** `docs/collaboration/math-written-75-vs-79-exam-reasoning-coverage-audit-20261023.md`. That audit covered the then-75 items; this packet **rechecks novelty against all 84 currently published items**, including GAP9.  
**Source separation:** Exam compilations below are **S2 structural references**, NOT authenticated official test frequencies, answer keys or S1 curriculum authority. These three are newly authored questions, not copied from source PDF wording, figures or solutions. S1 exact KNTT chapter/lesson must be checked during independent review.

## Core authoring decision

The 84 published items have existing academic approvals. Do **not** re-review their correctness wholesale and do **not** retire them because of overlapping skills. A new item is useful if it changes the way the student interprets the information, chooses a model/proof chain, or handles a distinctive error. Reject a superficial numeric/textual reskin with the same reasoning steps. Each candidate below contains a complete problem, reasoning chain, non-spoiling staged hints, common error patterns, remediation, and point rubric. **This author packet is not academic approval.**

---

## 1. CAND-G6-AREA-01 — Khoét một góc sân: diện tích đổi, chu vi có đổi?

- **Proposed learner grade/layer:** lớp 6 / KNTT-Core candidate. Exact S1 lesson pending; do not auto-tag grade placement.
- **Family:** area by subtraction *or* two-rectangle decomposition; L-shaped concave perimeter with replaced boundary; cost/savings.
- **S2 inspiration:** G6 HK1 compiled paper no. 4, file `de-kiem-tra-hoc-ki-1-toan-6-de-so-4-ket-noi-tri-thuc-1669285094.pdf`, printed p.2, tự luận Bài 4. Geometry and quantities are original.
- **Nearest published:** `WX20-GEO-003` asks for the fence around **one intact rectangle** (with a gate) and its area. It does *not* require subtracting a corner, re-enumerating a concave boundary, or proving the apparent perimeter paradox.

### Đề bài

Một sân ban đầu là **hình chữ nhật dài 24 m, rộng 18 m**. Người ta **bỏ đi một hình chữ nhật 8 m × 6 m ở góc trên bên phải**, sát **cạnh trên và cạnh bên phải** của sân. Phần sân còn lại có hình chữ L. Hai cạnh mới xuất hiện tại chỗ khoét cũng thuộc **mép sân**.

1. **Vẽ phác hình** và tính diện tích sân còn lại bằng **hai cách khác nhau**: lấy diện tích lớn trừ đi diện tích bỏ đi, và chia phần còn lại thành hai hình chữ nhật.
2. Tính **chu vi dọc toàn bộ mép** của phần sân hình chữ L (bao gồm hai cạnh lõm mới). So sánh với chu vi sân lúc chưa khoét. Giải thích vì sao hai chu vi bằng hoặc khác nhau.
3. Nếu chi phí lát sân là **125 000 đồng/m²**, cần trả bao nhiêu tiền để lát phần còn lại? Tiết kiệm bao nhiêu so với lát cả sân ban đầu? Bỏ qua hao hụt.

### Gợi ý theo từng bước (3; chưa tiết lộ đáp số)

1. Hình chữ L có thể xem là một hình chữ nhật lớn **bớt đi** một hình chữ nhật nhỏ. Em có thể tìm thêm cách **chia** hình chữ L thành hai hình chữ nhật không chồng lên nhau không?
2. Khi khoét ở góc, hai đoạn của mép ngoài bị mất có những độ dài nào? Hai đoạn mép **lõm** mới xuất hiện có tổng độ dài ra sao?
3. Chi phí lát tính theo **diện tích**, không theo chu vi. Khoản tiết kiệm liên quan phần diện tích nào?

### Lời giải chi tiết

Diện tích hình chữ nhật ban đầu là `24 × 18 = 432 m²`. Phần bỏ đi có diện tích `8 × 6 = 48 m²`. Vậy sân còn `432 − 48 = 384 m²`.

**Kiểm tra bằng cách thứ hai:** Tách sân chữ L thành hình chữ nhật bên trái `16 × 18 = 288 m²` và hình chữ nhật phía dưới bên phải `8 × 12 = 96 m²`. Tổng `288 + 96 = 384 m²`, khớp phép trừ.

Chu vi hình chữ nhật gốc là `2 × (24 + 18) = 84 m`. Đi một vòng mép sân mới theo thứ tự từ góc dưới trái: `24 + 12 + 8 + 6 + 16 + 18 = 84 m`. Chu vi **không đổi** vì hai đoạn mép ngoài bị mất (dài 8 m và 6 m) được thay bằng đúng hai đoạn mép lõm cũng dài 8 m và 6 m. Kết luận này phụ thuộc **khoét tại góc** như đề cho, không được khái quát cho mọi cách cắt hình.

Chi phí lát phần còn lại: `384 × 125 000 = 48 000 000 đồng`. Số tiền tiết kiệm so với lát nguyên sân: `48 × 125 000 = 6 000 000 đồng`. Có thể kiểm tra chi phí cả sân: `432 × 125 000 = 54 000 000 đồng`, hiệu đúng `6 000 000 đồng`.

### Vì sao khác bài hiện có?

**Reasoning signature:** đọc mô tả khoét góc → quyết định **trừ hai diện tích** hoặc **ghép hai hình** → theo dõi **biên lõm thay biên ngoài** → kiểm tra chu vi **không đổi dù diện tích giảm** → đổi diện tích thành giá tiền và tiết kiệm. `WX20-GEO-003` dạy lựa chọn chu vi/diện tích trên một sân còn nguyên và trừ cổng; không có suy luận về **bảo toàn độ dài mép** hay hai phép tách diện tích. Cùng kỹ năng đo lường nhưng khác cấu trúc, đáng giữ cả hai nếu S1/D4 đạt.

**Rubric tự chấm /6:** phác đúng hình, hai kích thước phần lõm rõ ràng (0,5); tính diện tích bằng phép trừ và đơn vị (1); kiểm tra bằng hai hình chữ nhật, không chồng phần (1); tính chu vi mới bằng cách liệt kê đủ 6 đoạn (1); giải thích phép thay thế 2 đoạn 8 m và 6 m khiến chu vi bằng chu vi cũ (1); chi phí 48 triệu và tiết kiệm 6 triệu, đơn vị đúng (1,5). **Tổng 6**.

**Lỗi thường gặp:** trừ `2(8+6)` khỏi chu vi mà không cộng hai cạnh lõm; nhân chu vi với giá tiền theo m²; cộng diện tích hai hình nhỏ có phần giao; cho rằng chu vi luôn không đổi khi bỏ bất kì phần nào.

**Ôn bù:** `WX20-GEO-003` để phân biệt diện tích/chu vi, sau đó kiểm tra chu vi đa giác bằng cách đi hết đường biên một vòng.

**Reviewer questions:** (a) Độ khó có phù hợp lớp 6 không? (b) Mô tả đủ để tự vẽ hình L không? (c) Có cần SVG không tiết lộ lời giải trước khi tích hợp? (d) S1 lớp 6 chương/bài chính xác là gì?

---

## 2. CAND-G7-POLY-01 — Hai phép kết hợp đa thức rồi tìm ẩn

- **Proposed learner grade/layer:** lớp 7 / KNTT-Core candidate; **S1 exact lesson mandatory**. Nếu chương trình không cho phép dạng nghiệm cuối này ở vị trí đề xuất, hãy đánh dấu `S1_REVISE`; không tự chuyển lên lớp 8.
- **Family:** combine sum and difference of polynomials, exploit cancellation of \(x^2\), then reverse from a **condition**.
- **S2 inspiration:** G7 HK2 compiled paper no. 1, file `de-kiem-tra-hoc-ki-2-toan-7-de-so-1-ket-noi-tri-thuc-1746416741.pdf`, printed p.2, Bài 3. All polynomials are newly authored.
- **Nearest published:** `WX04-ALG-001` ends after one subtraction; `WX04-ALG-003` expands two products and substitutes a **given x**. Here the student must combine **sum and difference**, recognize cancellation, and **solve for x from the resulting expression**.

### Đề bài

Cho hai đa thức một biến:

\[
A(x)=2x^2-x+3,\qquad B(x)=x^2+2x-4.
\]

1. Tính và thu gọn `S(x)=A(x)+B(x)` và `D(x)=A(x)-B(x)`. Khi trừ, hãy viết bước bỏ ngoặc.
2. Đặt `T(x)=S(x)-3D(x)`. Thu gọn `T(x)` và cho biết vì sao các hạng tử chứa \(x^2\) **triệt tiêu**.
3. Tìm giá trị \(x\) để `T(x)=8`, rồi **thay ngược vào biểu thức gốc** kiểm tra.

### Gợi ý (3; chưa tiết lộ kết quả)

1. Hãy viết rõ dấu trừ trước **toàn bộ** đa thức \(B\) khi tính \(D\).
2. Thực hiện \(S-3D\) từng bước, chú ý hệ số của các hạng tử cùng bậc.
3. Sau khi biểu thức chỉ còn bậc nhất, điều kiện \(T=8\) trở thành phương trình nào? Dùng \(A,B\) gốc để kiểm tra.

### Lời giải chi tiết

\[
\begin{aligned}
S(x)&=(2x^2-x+3)+(x^2+2x-4)\\
&=3x^2+x-1.
\end{aligned}
\]

Với hiệu hai đa thức, dấu trừ phải đổi dấu tất cả hạng tử của \(B\):

\[
\begin{aligned}
D(x)&=(2x^2-x+3)-(x^2+2x-4)\\
&=2x^2-x+3-x^2-2x+4\\
&=x^2-3x+7.
\end{aligned}
\]

\[
\begin{aligned}
T(x)&=(3x^2+x-1)-3(x^2-3x+7)\\
&=3x^2+x-1-3x^2+9x-21\\
&=10x-22.
\end{aligned}
\]

Hai hạng tử \(3x^2\) và \(-3x^2\) đối nhau nên triệt tiêu. Từ \(T(x)=8\):

\[
10x-22=8\Longrightarrow 10x=30\Longrightarrow \boxed{x=3}.
\]

Kiểm tra độc lập tại \(x=3\): \(A(3)=18\), \(B(3)=11\); do đó \(S(3)=29\), \(D(3)=7\), \(S(3)-3D(3)=29-21=8\), thỏa điều kiện.

**Cách nhìn thứ hai (chỉ sau khi học sinh tự giải):** \(S-3D=(A+B)-3(A-B)=-2A+4B\). Thế trực tiếp \(A,B\) vào sẽ triệt tiêu hệ số bậc hai tương tự, giúp tự kiểm tra nhưng **không thay thế** yêu cầu trình bày \(S,D\) ở câu 1.

### Vì sao khác bài hiện có?

**Reasoning signature:** trừ hai đa thức với dấu ngoặc → tạo **hai trung gian** \(S,D\) → kết hợp theo trọng số khiến hạng tử bậc hai triệt tiêu → **điều kiện đầu ra** xác định ẩn → thế lại dữ kiện gốc. `WX04-ALG-001` chỉ trừ; `WX04-ALG-003` thu gọn rồi **tính tại x cho sẵn**. Cần khẳng định S1 trước khi định tuyến cho lớp 7, kể cả khi kỹ thuật cuối dễ.

**Rubric tự chấm /5:** tính \(S\) đúng (1); bỏ ngoặc và tính \(D\) đúng (1); phân phối hệ số \(-3\) và thu gọn \(T\) đúng (1); nêu rõ nguyên nhân triệt tiêu \(x^2\) và giải \(x=3\) (1); thay vào \(A,B\) gốc để kiểm tra \(T=8\) (1). **Tổng 5**.

**Lỗi thường gặp:** chỉ đổi dấu một hạng tử của \(B\); khi nhân \(-3D\) không nhân đủ 3 hạng tử; thay \(x=8\) do nhầm \(T=8\); chỉ thử nghiệm ở biểu thức đã biến đổi mà không kiểm tra dữ kiện gốc.

**Ôn bù:** `WX04-ALG-001` (bỏ ngoặc và đổi dấu), `WX04-ALG-003` (kiểm tra lại giá trị biểu thức). Nếu S1 xác định vị trí lớp 7, gắn đúng bài SGK tương ứng; **không** dựa vào tên file đề thi để suy chương.

**Reviewer questions:** (a) Toàn bộ phép biến đổi và phương trình ở kết thúc có hợp lớp 7 KNTT không? (b) Có bài hiện hành nào thuộc **topic khác** thực sự giải cùng chuỗi ẩn-trung gian như bài này không? (c) Rubric có tách rõ sai dấu và sai suy luận không?

---

## 3. CAND-G8-MID-01 — Từ bốn trung điểm đến hình thoi, diện tích và bất đẳng thức

- **Proposed learner grade/layer:** lớp 8 / KNTT-Core candidate. **S1 check both đường trung bình của tam giác and tứ giác/hình thoi**; không gán bài học trước khi xác nhận các tiền đề đã học.
- **Family:** derive a quadrilateral classification **from four side midpoints**, use equal rectangle diagonals, transfer to area and strict perimeter inequality.
- **S2 inspiration:** G8 HK1 compiled paper no. 1, file `de-kiem-tra-hoc-ki-1-toan-8-de-so-1-ket-noi-tri-thuc-1735005901.pdf`, printed p.4, Bài 4. Original midpoint configuration and tasks.
- **Nearest published:** `WX16-QUAD-001/002/003` begin with direct **hypotheses on existing sides or diagonals** to classify a quadrilateral; `WX14-TRI-004` is a Grade-7 proof involving triangle congruence. This candidate instead **constructs a new quadrilateral**, proves it a parallelogram by two midsegment links, upgrades to rhombus, and derives area/perimeter consequences.

### Đề bài

Cho **hình chữ nhật \(ABCD\)** có \(AB=12\text{ cm}\), \(BC=8\text{ cm}\). Gọi \(E,F,G,H\) lần lượt là **trung điểm** của các cạnh \(AB,BC,CD,DA\). Nối \(E,F,G,H\) theo thứ tự và vẽ hai đường chéo \(AC,BD\).

1. Chứng minh \(EFGH\) là **hình bình hành**, ghi rõ các tam giác dùng định lí đường trung bình.
2. Chứng minh \(EFGH\) là **hình thoi**. Không được chỉ căn cứ hình vẽ hoặc giả định trước \(EF=FG\).
3. Tính **diện tích** hình thoi \(EFGH\) bằng cách lấy diện tích hình chữ nhật trừ đi bốn tam giác ở các góc.
4. Chứng minh **chu vi hình thoi nhỏ hơn chu vi hình chữ nhật**, **không dùng** số gần đúng cho đường chéo.

### Gợi ý (3; chưa tiết lộ kết luận)

1. Trong các tam giác \(ABC\) và \(ADC\), những đoạn nối hai trung điểm nào **song song với cùng một đường chéo**?
2. Khi đã có hình bình hành, em cần so sánh **hai cạnh kề**. Trong một hình chữ nhật, hai đường chéo có quan hệ gì?
3. Sau khi đã biết độ dài một cạnh \(EF\) liên hệ với \(AC\), hãy so sánh \(AC\) với \(AB+BC\) bằng một bất đẳng thức trong **tam giác \(ABC\)**.

### Lời giải chi tiết

Trong tam giác \(ABC\), vì \(E\) là trung điểm \(AB\) và \(F\) là trung điểm \(BC\), theo định lí đường trung bình:

\[
EF\parallel AC,\qquad EF=\tfrac12 AC.
\]

Trong tam giác \(ADC\), \(H\) là trung điểm \(AD\), \(G\) là trung điểm \(DC\), nên:

\[
HG\parallel AC,\qquad HG=\tfrac12 AC.
\]

Suy ra \(EF\parallel HG\) và \(EF=HG\). Tứ giác \(EFGH\) có một cặp cạnh đối vừa song song vừa bằng nhau, **nên \(EFGH\) là hình bình hành**.

Trong tam giác \(BCD\), \(F,G\) là trung điểm của \(BC,CD\), nên \(FG=\tfrac12 BD\). Vì \(ABCD\) là hình chữ nhật, \(AC=BD\). Từ \(EF=\tfrac12 AC\) suy ra \(EF=FG\). Một hình bình hành có **hai cạnh kề bằng nhau** là hình thoi. Vậy \(EFGH\) là hình thoi. Lưu ý: đề **không** yêu cầu hay cho phép suy ra hình vuông.

Diện tích hình chữ nhật \(ABCD\) là \(12\times 8=96\text{ cm}^2\). Bốn tam giác vuông \(AEH,BEF,CFG,DGH\) đều có hai cạnh góc vuông bằng \(6\) cm và \(4\) cm; mỗi tam giác có diện tích \(\frac12\times6\times4=12\text{ cm}^2\). Vậy

\[
S_{EFGH}=96-4\times12=\boxed{48\text{ cm}^2}.
\]

Chu vi hình thoi \(P_{EFGH}=4EF=2AC\). Theo bất đẳng thức tam giác trong tam giác \(ABC\), \(AC<AB+BC\) (tam giác không suy biến). Do đó:

\[
P_{EFGH}=2AC<2(AB+BC)=P_{ABCD}=\boxed{40\text{ cm}}.
\]

Nếu muốn kiểm tra bằng số, \(AC=\sqrt{12^2+8^2}=4\sqrt{13}\), nên \(P_{EFGH}=8\sqrt{13}\text{ cm}<40\text{ cm}\). Phép tính gần đúng **không** phải cơ sở của chứng minh.

### Vì sao khác bài hiện có?

**Reasoning signature:** dựng tứ giác **mới** từ bốn trung điểm → chọn **hai tam giác khác nhau** để chứng minh một cặp cạnh đối song song, bằng nhau → **thêm** quan hệ đường trung bình qua đường chéo thứ hai và tính chất hình chữ nhật để nhận hình thoi → bỏ bốn tam giác góc để tính diện tích → bất đẳng thức tam giác để so sánh **hai chu vi**. Không phải thay số trong `WX16-QUAD-002/003` (đó là dấu hiệu từ **chính đường chéo của tứ giác gốc**). So sánh cũng với `WX14-TRI-004`: cả hai có nhiều kết luận nhưng không cùng mô hình định lí.

**Rubric tự chấm /6:** vẽ các trung điểm và hình \(EFGH\) đúng (0,5); chỉ rõ \(EF,HG\) và hai quan hệ đường trung bình, từ đó suy hình bình hành (1,5); so sánh \(FG\) với \(EF\) nhờ \(AC=BD\) và suy hình thoi (1,5); trừ đúng 4 diện tích tam giác để được \(48\text{ cm}^2\) (1); chứng minh \(2AC<2(AB+BC)\) bằng bất đẳng thức tam giác, nêu rõ chu vi (1,5). **Tổng 6**.

**Lỗi thường gặp:** nhầm \(EFGH\) là hình vuông vì nhìn hình đối xứng; suy \(EF=FG\) chỉ bằng trực giác; đặt sai cặp tam giác khi dùng đường trung bình; chỉ trừ hai thay vì bốn tam giác góc; sử dụng số gần đúng để “chứng minh” bất đẳng thức.

**Ôn bù:** `WX16-QUAD-001/003` (điều kiện hình bình hành/hình thoi), `WX14-TRI-003` (bất đẳng thức tam giác) và phần định lí đường trung bình theo S1 sau khi kiểm toán.

**Reviewer questions:** (a) KNTT S1 lớp 8 đã giới thiệu định lí đường trung bình và dấu hiệu hình thoi ở đúng thứ tự phù hợp chưa? (b) Suy luận mỗi cạnh và mỗi diện tích có hợp lệ mà không phụ thuộc hình chưa được vẽ không? (c) Trước khi xuất bản, có bắt buộc thêm hình SVG chỉ đánh dấu giả thiết, không đánh dấu kết luận không?

---

## CROSSWALK — NOVELTY AGAINST 84 CANONICAL ITEMS

| Candidate | Nearest existing canonical item(s) | Difference in reasoning, beyond a new value/context | Author tentative verdict |
|---|---|---|---|
| CAND-G6-AREA-01 | `WX20-GEO-003` | rectangle with gate vs **corner cut, two independent area decompositions, inward perimeter conservation** | Structurally new; subject to review |
| CAND-G7-POLY-01 | `WX04-ALG-001`, `WX04-ALG-003` | one polynomial difference/at-known-x vs **two dependent polynomials + cancellation + solve x from output** | Structurally new; S1 boundary check |
| CAND-G8-MID-01 | `WX16-QUAD-001/002/003`, `WX14-TRI-004` | classify given quadrilateral from stated diagonals vs **construct midpoint quadrilateral, prove using linked midsegments, area and strict perimeter inequality** | Structurally new; S1 and figure check |

Do **not** judge novelty from title or `problem_type_id` alone. Explicitly compare **full problem and full solution chains** in the provided 84-item canonical catalog, including across topics. Do not infer that the three are “missing from the entire website”; these are proposed **Written Library D4/D5 improvements**. Reject a genuine reasoning clone even if it uses different words/numbers. A pair using same skill set but different conceptual starting point, proof plan or error pattern may legitimately coexist.

## REQUEST TO NOTEBOOKLM — ONE INDEPENDENT REVIEW, 3/3

Use this entire packet, the **84-item live canonical library** (Git blob above), permanent **Master Plan v1.2.1**, **NotebookLM Math Review Rules v1.2**, and the **S1 KNTT textbook chapters** pertinent to the three topics. Exam references are S2 only; never derive official examination frequency from them.

For **each of 3 exact temporary IDs**, independently check:
1. **MATH:** correctness of every condition, proof, equality/inequality, units, uniqueness and each solution step;
2. **PEDAGOGY:** D4/D6 self-study depth, genuinely non-spoiling 2–3 progressive hints, rubric sum and diagnostic usefulness;
3. **NOVELTY:** compared against **all 84 canonical written exercises**, not only the nearest listed;
4. **S1_BOUNDARY:** supported KNTT grade/chapter/lesson; if direct S1 evidence missing, return `INSUFFICIENT_EVIDENCE`, no inferred placement;
5. **DIAGRAM:** wording and figure requirements; especially G6 notched corner and G8 midpoint quadrilateral.

Cite selected sources. For any concern label P0/P1/P2, specify the **exact proposed replacement text**. If some sources are unavailable, do not silently replace them from general knowledge. Overall PASS only if 3/3 complete and materially sound; do not promote editorial source-derived claims into school-exam facts.

End the report with this **machine-readable exact verdict contract**:

```text
PACKET_ID|MATH-WRITTEN-GAP3-20261023-R0
SOURCE_BLOB|85d8301daca7819009ba47eabf63080d586e9dc9
EXPECTED|3
REVIEWED|<number>
ITEM|CAND-G6-AREA-01|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G7-POLY-01|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G8-MID-01|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
MISSING_IDS|NONE/or list
UNEXPECTED_IDS|NONE/or list
OVERALL|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY
```

**Release boundary:** This is one review-only MD file. No new canonical WX IDs, no edits to the 84-item JSON, no learner storage, no Core Readiness/Mastery evidence, and **no deployment** until a complete independent review and **separate explicit owner authorization**.
