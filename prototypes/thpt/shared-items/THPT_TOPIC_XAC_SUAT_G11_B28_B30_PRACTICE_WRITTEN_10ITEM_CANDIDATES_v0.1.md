# THPT · Chuyên đề Xác suất · G11 B28–B30 · D3/D4 ten canonical Practice/Written candidates v0.1

**PACKET_ID:** \`THPT-TOPIC-PROBABILITY-G11-B28-B30-D1D4-AUTHORING-20261028-R0\`.  
**Academic status:** \`NEW_CANDIDATES_NOT_REVIEWED\`; G11 original SGK/SBT S1 \`NOT_YET_REVIEWED\`.  
**Use:** \`TOPIC_PRACTICE\` (including basic items), \`TOPIC_WRITTEN\` as contextual placement only; **no dedicated Topic Core**. A later valid SGK Core/Practice placement may reuse the exact **same canonical ID, one key, one attempt history**; do not copy/clone. **This is a public Practice candidate bank, NOT held-out Topic Readiness.** Practice hints/solutions only at the approved Check/Submit stage; any previously seen exercise cannot count as fresh independent Readiness evidence.

## 1. ID register and outcome alignment

| Item ID | Lesson S2 | Outcome primary | Kind | Level / points |
|---|---|---|---|---|
| \`THPT-G11-B28-P01\` | B28 | \`G11-B28-EVENT_UNION_INTERSECTION\` | Practice | Basic |
| \`THPT-G11-B28-P02\` | B28 | \`G11-B28-INDEPENDENT_EVENTS\` | Practice | Basic |
| \`THPT-G11-B28-P03\` | B28 | \`G11-B28-DISJOINT_EVENTS\` | Practice | Basic |
| \`THPT-G11-B29-P01\` | B29 | \`G11-B29-ADDITION_GENERAL\` | Practice | Basic–Intermediate |
| \`THPT-G11-B29-P02\` | B29 | \`G11-B29-ADDITION_DISJOINT\` | Practice | Basic |
| \`THPT-G11-B29-P03\` | B29 | \`G11-B29-ADDITION_GENERAL\` | Practice | Intermediate |
| \`THPT-G11-B30-P01\` | B30 | \`G11-B30-MULTIPLICATION_INDEPENDENT\` | Practice | Basic |
| \`THPT-G11-B30-P02\` | B30 | \`G11-B30-MULTIPLICATION_INDEPENDENT\` | Practice | Intermediate |
| \`THPT-G11-B30-P03\` | B30 | \`G11-B30-COMBINED_RULES\` | Application | Intermediate |
| \`THPT-G11-CHVIII-W30-ANCHOR-01\` | B30 | \`G11-B30-COMBINED_RULES\` | Written + Anchor tag | /8, Intermediate |

**Expected:** 10 unique canonical item IDs, 9 short practice/application + **1 Written** (Anchor is a label of that Written, NOT an 11th item). New G11 candidate outcome IDs count **7**, separate from the already reviewed 10 G10 Foundation outcomes. All numbers/problems below are original authoring proposals, pending S1 overlap and pedagogy review.

## 2. Actual canonical content (question / answer / worked explanation / Practice hint)

### THPT-G11-B28-P01

**Đề:** Chọn ngẫu nhiên đều một số từ 1 đến 8. Gọi A là biến cố “số được chọn là số nguyên tố”, B là biến cố “số được chọn là số chẵn”. Xác định \(A\cup B\), \(A\cap B\), tính xác suất mỗi biến cố, rồi nhận xét A, B có độc lập không.

**Đáp án:** \(A=\{2,3,5,7\}\), \(B=\{2,4,6,8\}\). \(A\cup B=\{2,3,4,5,6,7,8\}\), \(P(A\cup B)=7/8\). \(A\cap B=\{2\}\), \(P(A\cap B)=1/8\). \(P(A)P(B)=(4/8)(4/8)=1/4\ne1/8\), nên không độc lập.

**Lời giải:** Có 8 số đồng khả năng. Đếm hợp (không lặp số 2) được 7 và giao được 1. Vì xác suất giao khác tích các xác suất riêng, A và B không độc lập.

**Hint Practice (sau Check):** Số 2 vừa nguyên tố vừa chẵn; không được đếm hai lần trong hợp.

### THPT-G11-B28-P02

**Đề:** Tung hai đồng xu cân đối một cách độc lập, ghi kết quả theo thứ tự. Gọi A là “lần thứ nhất ngửa”, B là “lần thứ hai ngửa”. Liệt kê \(\Omega\), tính \(P(A)\), \(P(B)\), \(P(A\cap B)\) và kiểm tra độc lập.

**Đáp án:** \(\Omega=\{NN,NS,SN,SS\}\); \(P(A)=1/2\), \(P(B)=1/2\), \(P(A\cap B)=1/4\). Có \(1/4=(1/2)(1/2)\), nên độc lập.

**Lời giải:** Mỗi cặp kết quả có xác suất \(1/4\). Hai biến cố xảy ra ở các vị trí khác nhau của chuỗi. Sự kiện cả hai cùng ngửa ứng với NN duy nhất.

**Hint Practice:** A có hai chuỗi, B cũng hai chuỗi, nhưng A∩B chỉ có một chuỗi.

### THPT-G11-B28-P03

**Đề:** Gieo đều xúc xắc 6 mặt. A: “số chấm không quá 3”; B: “số chấm ít nhất 4”. Xét A∩B, A∪B và cho biết hai biến cố xung khắc hay độc lập; giải thích.

**Đáp án:** \(A=\{1,2,3\}\), \(B=\{4,5,6\}\), \(A\cap B=\varnothing\), \(A\cup B=\Omega\). Hai biến cố xung khắc, là biến cố đối nhau, **không độc lập** do \(P(A\cap B)=0\ne P(A)P(B)=1/4\).

**Lời giải:** Không kết quả nào vừa \(\le3\) vừa \(\ge4\). Vì A và B đều có xác suất \(1/2>0\), không thể độc lập với giao rỗng.

**Hint Practice:** Xung khắc nghĩa là không thể cùng xảy ra; độc lập là một điều kiện xác suất khác.

### THPT-G11-B29-P01

**Đề:** Chọn ngẫu nhiên một trong 40 học sinh, trong đó 22 học sinh thích môn A, 18 học sinh thích môn B và 9 học sinh thích cả hai. Tính xác suất học sinh được chọn thích **ít nhất một** trong hai môn.

**Đáp án:** \(P(A\cup B)=(22+18-9)/40=31/40\).

**Lời giải:** 9 học sinh thích cả hai được tính hai lần khi cộng 22 và 18. Trừ đi 9 một lần để có 31 học sinh thỏa điều kiện.

**Hint Practice:** Sử dụng công thức cộng có phần giao.

### THPT-G11-B29-P02

**Đề:** Một hộp chứa 12 phiếu khác nhau, gồm 4 phiếu đỏ, 3 phiếu xanh và 5 phiếu vàng. Chọn ngẫu nhiên đều một phiếu. A là “phiếu đỏ”, B là “phiếu vàng”. Tính \(P(A\cup B)\) và giải thích có cần trừ xác suất giao không.

**Đáp án:** \(P(A\cup B)=(4+5)/12=9/12=3/4\). Không trừ vì \(A\cap B=\varnothing\).

**Lời giải:** Một phiếu không thể đồng thời vừa đỏ vừa vàng theo giả thiết mỗi phiếu có một màu, nên A và B xung khắc.

**Hint Practice:** Kiểm tra xem có một phiếu nằm trong cả A và B không.

### THPT-G11-B29-P03

**Đề:** Chọn ngẫu nhiên đều một số nguyên từ 1 đến 20. A: “chia hết cho 4”; B: “chia hết cho 5”. Tính xác suất số được chọn chia hết cho 4 **hoặc** chia hết cho 5.

**Đáp án:** \(n(A)=5\), \(n(B)=4\), \(A\cap B=\{20\}\), \(n(A\cup B)=5+4-1=8\), xác suất \(8/20=2/5\).

**Lời giải:** Chỉ số 20 chia hết cho cả 4 lẫn 5 trong đoạn 1..20; nếu cộng 5+4 mà không trừ 1 sẽ đếm trùng.

**Hint Practice:** Dùng bội chung nhỏ nhất để nhận diện phần giao.

### THPT-G11-B30-P01

**Đề:** Hai thiết bị thực hiện hai nhiệm vụ độc lập, xác suất hoàn thành nhiệm vụ lần lượt là \(0,8\) và \(0,75\). Tính xác suất **cả hai** đều hoàn thành.

**Đáp án:** \(0,8\times 0,75=0,6=3/5\).

**Lời giải:** Hai biến cố được đề cho là độc lập, nên xác suất giao bằng tích xác suất riêng.

**Hint Practice:** Chỉ nhân vì giả thiết đã nêu rõ độc lập.

### THPT-G11-B30-P02

**Đề:** Gieo hai xúc xắc cân đối phân biệt và độc lập. A: “xúc xắc thứ nhất có số chấm ít nhất 5”; B: “xúc xắc thứ hai có số chấm lẻ”. Tính xác suất đồng thời A và B; sau đó tính xác suất A hoặc B.

**Đáp án:** \(P(A)=2/6=1/3\), \(P(B)=3/6=1/2\), \(P(A\cap B)=1/6\), \(P(A\cup B)=1/3+1/2-1/6=2/3\).

**Lời giải:** A phụ thuộc xúc xắc thứ nhất và B phụ thuộc xúc xắc thứ hai độc lập. Nhân để ra giao, rồi dùng công thức cộng tổng quát để ra hợp.

**Hint Practice:** A có hai mặt thỏa mãn, B có ba mặt; sau khi tính giao mới tính hợp.

### THPT-G11-B30-P03

**Đề:** Một sản phẩm trải qua hai phép kiểm tra **độc lập**. Xác suất thất bại ở mỗi phép kiểm tra đều là \(1/10\). Tính xác suất sản phẩm **thất bại ít nhất một lần**.

**Đáp án:** \(1-(9/10)^2=19/100\).

**Lời giải:** Biến cố đối của “thất bại ít nhất một lần” là “đạt ở cả hai phép kiểm tra”, có xác suất \((9/10)(9/10)=81/100\). Do đó xác suất cần tìm bằng \(19/100\).

**Hint Practice:** Đếm trường hợp thuận lợi bằng biến cố đối sẽ gọn hơn cộng trực tiếp các trường hợp giao nhau.

### THPT-G11-CHVIII-W30-ANCHOR-01

**Đề tự luận /8:** Hai biến cố A và B độc lập, với \(P(A)=2/5\), \(P(B)=3/4\).  
(a) Tính \(P(A\cap B)\).  
(b) Tính \(P(A\cup B)\).  
(c) Tính xác suất **không biến cố nào xảy ra**.  
(d) Tính xác suất **đúng một trong hai biến cố xảy ra**. Giải thích tại sao kết quả phù hợp với (a)–(c).

**Đáp án:** (a) \(3/10\). (b) \(17/20\). (c) \((3/5)(1/4)=3/20\). (d) \((2/5)(1/4)+(3/5)(3/4)=11/20\).

**Lời giải:** Sử dụng độc lập cho giao và cả hai biến cố đối. (a) \(2/5\times3/4=3/10\). (b) \(2/5+3/4-3/10=17/20\). (c) \(1-P(A\cup B)=3/20\), cũng bằng tích hai xác suất không xảy ra. (d) A xảy ra còn B không: \(2/5\times1/4=1/10\); B xảy ra còn A không: \(3/4\times3/5=9/20\). Tổng \(11/20\). Kiểm tra ba trường hợp “cả hai” \(6/20\), “đúng một” \(11/20\), “không cái nào” \(3/20\) cộng lại đúng 1.

**Rubric /8:** 2đ lập và tính đúng giao; 2đ lập công thức cộng và kết luận đúng hợp; 2đ lập biến cố đối/không cái nào và tính đúng; 2đ phân loại đúng hai trường hợp rời nhau, tổng chính xác và lý giải đối chiếu. Cho điểm quá trình hợp lý với lỗi kéo theo, không nhân đôi trừng phạt lỗi đơn lẻ. **Anchor tag belongs only to this single Written canonical ID.**

**Hint Practice (sau Check):** Phân chia không gian mẫu thành bốn trường hợp rời nhau: cả hai, chỉ A, chỉ B, không biến cố nào.

## 3. NotebookLM gates, no automatic PASS

- Reviewer original SGK/SBT G11 KNTT **S1 direct receipt required**. Public TOC gives chapter VIII lessons B28–B30 but is not sufficient for page-level Academic PASS.
- Judge item arithmetic, assumptions, answer equivalence, independent vs disjoint modelling, formula depth and Clone risk relative to source SGK, five G10 taught Topic examples and 16 G10 shared items. The B28-P02 fair-coin example is a standard model but may be too near taught G10 examples; if so mark HOLD with minimal change rather than claim uniqueness.
- Reconcile \`EXPECTED=10, UNIQUE=10\` with exactly 1 Written Anchor and 9 Practice/Application. Return \`ITEM_REGISTER\` per ID, \`OUTCOME_ALIGNMENT=7_OF_7_OR_GAPS\`, \`P0/P1/P2\`, \`MINIMAL_DELTA\`, \`ACADEMIC_OVERALL_G11_D3D4\`, \`ACADEMIC_CLEARANCE_FOR_RELEASE=NO\`.
- Don't copy or expose six G10 SGK Chapter IX held-out readiness questions, or create/claim any Topic heldout key. All content here **may be shown to learners as Practice after review**; no answer or hint before approved Check/Submit, and none can be treated as new independent Topic Readiness evidence after exposure.
