# THPT · Chuyên đề trục dọc Xác suất — Kiến thức nền lớp 11 (G11 Foundations) · v0.1

**PACKET_ID:** `THPT-TOPIC-PROBABILITY-G11-B28-B30-D1D4-AUTHORING-20261028-R0`  
**STATUS:** `NEW_AUTHORING_CANDIDATE / DIRECT_S1_NOT_YET_REVIEWED / NO_MERGE_DEPLOY`  
**CONTEXT:** G10 Foundation already independently reviewed PASS under `THPT-TOPIC-PROBABILITY-G10-FOUNDATION-D1D4-20261028-R0`; this **does not** establish any G11 or G12 PASS. Source SGK/SBT G11 **must be checked in NotebookLM** before claiming academic completeness or Core equivalence.  
**Framework:** five Permanent THPT v2.0 sources only. Topic always exactly **Knowledge / Practice / Topic Readiness** with no Topic Core page, and must remain independently teachable without visiting SGK route.

## A. Source-scope audit before reviewing the authoring draft

**S2 (public table of contents only, not verified original S1):** KNTT Toán 11 Tập 2 **Chương VIII — Các quy tắc tính xác suất**, B28 *Biến cố hợp, biến cố giao, biến cố độc lập*; B29 *Công thức cộng xác suất*; B30 *Công thức nhân xác suất cho hai biến cố độc lập*; bài tập cuối chương. Public index `https://sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/toan-tap-2-1193.html`.

**Scope correction:** Reviewer G10 P1-01 spoke broadly of G11 "conditional probability". Formal **xác suất có điều kiện** belongs to Toán 12 KNTT Tập 2 **B18**, while total probability / Bayes belongs to **B19** (S2 public TOC: `https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/toan-12-tap-hai-3520.html`). Ask NotebookLM to check original S1; do **not** teach `P(A|B)` as a mandatory G11 formula in this candidate.

**SOURCE_RECEIPT_G11_SGK = PENDING_ORIGINAL**, `SOURCE_RECEIPT_G11_SBT = PENDING_ORIGINAL`, and S1 printed page ranges are **not guessed**. G12 official scope and exact page numbers also pending. Check original B28/B29/B30 section headings, SBT task depth, distinctions between mutually exclusive vs independent and any first-use notation.

## B. Outcome candidate matrix — 7 unique skills, not yet academically passed

| Canonical candidate outcome ID | Lesson anchor | What an independent Topic learner must understand | D1–D2 anchor | D3–D4 candidate practice |
|---|---|---|---|---|
| `G11-B28-EVENT_UNION_INTERSECTION` | B28 | Interpret `A∪B`, `A∩B` and original outcome sets | KT-G11-01, EX-G11-28-01 | B28-P01, P03 |
| `G11-B28-DISJOINT_EVENTS` | B28/B29 (review placement with S1) | Distinguish mutually exclusive from complementary and independent | KT-G11-01 | B28-P03, B29-P02 |
| `G11-B28-INDEPENDENT_EVENTS` | B28 | Recognize/verify independence by an appropriate probability model | KT-G11-02, EX-G11-28-01 | B28-P01, P02 |
| `G11-B29-ADDITION_DISJOINT` | B29 | Use sum rule without overlap for disjoint events | KT-G11-03 | B29-P02 |
| `G11-B29-ADDITION_GENERAL` | B29 | Correct for intersection when computing union | KT-G11-03, EX-G11-29-01 | B29-P01, P03 |
| `G11-B30-MULTIPLICATION_INDEPENDENT` | B30 | Use `P(A∩B)=P(A)P(B)` **only for independent events** | KT-G11-04, EX-G11-30-01 | B30-P01, P02 |
| `G11-B30-COMBINED_RULES` | B30 | Combine multiplication, addition and complement safely | KT-G11-04, EX-G11-30-01 | B30-P03, W30-ANCHOR-01 |

These **seven are candidate G11 outcome IDs**, distinct from the ten already reviewed G10 IDs. Do not add them to production canonical outcome registries before NotebookLM S1 reconciliation. The topic is NOT complete without independently sourced G12 modules and a separate held-out Topic Readiness.

## C. KIẾN THỨC — four self-contained learning modules

### KT-G11-01 · Biến cố hợp, giao, xung khắc

A and B denote subsets of the same sample space \(\Omega\). The **union** \(A\cup B\) is the event that at least one happens, including when both occur. The **intersection** \(A\cap B\) is the event that both happen. If \(A\cap B=\varnothing\), they are **mutually exclusive** (xung khắc). The complement \(\bar A=\Omega\setminus A\) was explained in G10 foundation; repeat its meaning so direct Topic learners need no SGK detour.

**Illustration:** Select a number uniformly from \(\{1,\ldots,9\}\). Let A be “even” and B be “divisible by 3”. Then \(A=\{2,4,6,8\}\), \(B=\{3,6,9\}\), \(A\cap B=\{6\}\) and \(A\cup B=\{2,3,4,6,8,9\}\). A and B are **not** disjoint.

**Misconception:** “A or B” in a probability question is inclusive unless explicitly excluding simultaneous occurrence. Two mutually exclusive events generally cannot be independent if each has strictly positive probability.

### KT-G11-02 · Biến cố độc lập

Two events A and B are **independent** when knowing whether A happens does not change the probability of B. In the finite examples taught here, use the rigorous check
\[
P(A\cap B)=P(A)P(B).
\]
This equality is **not true for arbitrary A,B**; and “xung khắc” does not mean “độc lập.” Give an intuitive explanation in plain language before using the equality.

**Illustration:** Toss two fair coins independently. Let A be “first toss is heads” and B be “second toss is heads”. Among the four equal ordered results, the event A∩B has one, hence \(P(A\cap B)=1/4=(1/2)(1/2)\). The two events are independent. If instead A is “both tosses heads” and B is “first toss tails”, their intersection is empty, but their probabilities are positive, so they are **not independent**.

**Depth gate:** S1 reviewer must confirm whether formal testing of independence by this equality and event notation should be taught in B28 or B30, and tier as appropriate without omitting foundation.

### KT-G11-03 · Quy tắc cộng xác suất

For arbitrary events within one probability model,
\[
P(A\cup B)=P(A)+P(B)-P(A\cap B).
\]
The subtraction prevents counting the overlap twice. For disjoint events, \(P(A\cap B)=0\), so \(P(A\cup B)=P(A)+P(B)\). Do **not** casually add when the events can coincide.

**Illustration:** Pick a number uniformly from 1 to 20. A means “divisible by 4” (5 numbers); B means “divisible by 5” (4 numbers). The overlap is \(\{20\}\) (1 number). Thus \(P(A\cup B)=5/20+4/20-1/20=8/20=2/5\).

**Self-check:** a computed union probability must be at least \(P(A)\) and \(P(B)\), at most 1, and may be smaller than \(P(A)+P(B)\).

### KT-G11-04 · Quy tắc nhân cho biến cố độc lập và vận dụng

For independent A and B only,
\[
P(A\cap B)=P(A)P(B).
\]
This is a special rule, not an unconditional rule. To find “at least one”, take the complement: \(P(A\cup B)=1-P(\bar A\cap\bar B)\); independence carries over to the two complementary events. When events are not independent, do not multiply their marginal probabilities; G12 conditional probability will later extend the rule after direct SGK review.

**Illustration:** Two independent devices pass separate checks with probabilities \(3/4\) and \(4/5\). Both pass: \((3/4)(4/5)=3/5\). Both fail: \((1/4)(1/5)=1/20\). At least one passes: \(1-1/20=19/20\). Explicitly state the independence assumption.

**Misconception:** Independence is not the same as equal probability, and is not the same as mutual exclusivity. The event model and original conditions determine whether multiplication is justified.

## D. D2 WORKED EXAMPLES — three solved, distinct models

### EX-G11-B28-01 · Kiểm tra độc lập thay vì đoán

Pick a number uniformly from \(\{1,2,\ldots,10\}\). A: “even”; B: “divisible by 3.” \(A=\{2,4,6,8,10\}\), \(B=\{3,6,9\}\), \(A\cap B=\{6\}\).
Therefore \(P(A)=5/10=1/2\), \(P(B)=3/10\), \(P(A\cap B)=1/10\), while \(P(A)P(B)=3/20\). Since \(1/10\ne3/20\), **A,B are not independent**. Having an overlap is not enough to imply independence.

### EX-G11-B29-01 · Công thức cộng có phần giao

Among 50 people chosen with equal probability, 30 like activity A, 25 like activity B, and 10 like both. Probability of liking **at least one** is \((30+25-10)/50=45/50=9/10\). The “10 both” is subtracted **once** to avoid double-counting. This does not require A,B independent.

### EX-G11-B30-01 · Nhân hai biến cố độc lập và biến cố đối

Two independent systems work with probabilities \(4/5\) and \(2/3\). \(P(\text{both work})=(4/5)(2/3)=8/15\). \(P(\text{neither works})=(1/5)(1/3)=1/15\). \(P(\text{at least one works})=1-1/15=14/15\). This result relies on **independence**; no general conditional-probability formula is assumed at G11.

## E. Three-section Topic architecture and review boundaries

- **Knowledge:** the four modules and three worked examples above augment the previously reviewed five G10 Foundation modules. They are self-contained; they do not force the learner to open SGK.
- **Practice:** use a new **single canonical** G11 bank under the planned `TOPIC_PRACTICE` placements (companion D3/D4 review file), which may later be reused for SGK Core/Practice through mapping if source scope is confirmed. No `TOPIC_CORE` page exists.
- **Topic Readiness:** `NOT_AUTHORED`; future independent held-out 10–12 blueprint, not six G10 SGK Chapter Readiness questions, and not current seen Practice items. No hint/solution/answer before **Final Submit**. Exposure across SGK/Topic must be logged.
- The Topic also requires G12 B18/B19 foundational content and independent review, then new Topic held-out candidates. Do not award whole-Topic PASS from a G11 segment or G10 PASS.

## F. NotebookLM review request

Consult **original** SGK/SBT KNTT G11 printed B28–B30 and exercises, 5 Permanent Sources THPT v2.0, and the paired G11 item file. Return `SOURCE_RECEIPT_G11` exact pages, `GRADE_SCOPE_RECONCILIATION` (G11 vs G12 conditional), verdict for four modules `KT-G11-01..04`, three examples `EX-G11-B28/29/30-01`, seven outcomes, mathematical correctness and pedagogic depth, Core/Optional flags, clones against G10 and primary S1, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G11`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`. Do not assume a S1 receipt from an S2 index.
