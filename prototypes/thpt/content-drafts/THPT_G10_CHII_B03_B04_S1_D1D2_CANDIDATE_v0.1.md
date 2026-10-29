# Toán 10 KNTT · Chương II · Bài 3–4 · S1 Preflight + Knowledge D1 / Worked D2 v0.1

**LANE:** Academic authoring only · `STATUS=ACADEMIC_DRAFT_NOT_REVIEWED`.
**Purpose:** Resume G10 after ChI B01/B02 source academic PASS; scope is complete **two SGK lessons**, no protected Readiness or Topic review.
**Source receipts (owner's PDFs, directly visually read):**
- SGK Toán 10 KNTT tập 1, ChII “Bất phương trình và hệ bất phương trình bậc nhất hai ẩn”: **Bài 3 pp.22–25**, **Bài 4 pp.26–30**, end-of-chapter exercises **pp.31–32**.
- SBT cùng tập, **Bài 3 pp.16–18**, **Bài 4 pp.19–23**, end exercises **pp.24–28**, answer guide ChII begins **p.88**.
- Read source (not just table of contents): SGK pp.22, 26 and SBT pp.16, 19; remaining pages require task-by-task source audit before R01 review. **No independent academic PASS.**

## Preliminary 10 distinct outcome candidates — pending full S1 audit

| Outcome ID | Core skill | Evidence needed in D3/D4 |
|---|---|---|
| `G10-B03-LINEAR_INEQUALITY` | Recognize `ax+by\square c`; `(a,b)\ne(0,0)` | Check positive/negative and strict/non-strict |
| `G10-B03-POINT_TEST` | Substitute a point into inequality | Distinguish test point ON/OFF boundary |
| `G10-B03-BOUNDARY` | Plot `ax+by=c` and decide boundary included | Solid vs dashed with exact geometry |
| `G10-B03-HALFPLANE` | Choose solution half-plane from valid test point | Correct side incl equality conditions |
| `G10-B03-MODELING` | Convert two-quantity story to linear inequality | Domain restrictions `x,y\ge 0`, integers when counting units |
| `G10-B04-SYSTEM` | Recognize a system of linear inequalities | Simultaneous satisfaction of ALL |
| `G10-B04-REGION_INTERSECTION` | Plot common feasible region | Intersection, not union, of half-planes |
| `G10-B04-FEASIBILITY` | Recognize empty/bounded/unbounded possibilities | Avoid assuming every system has a bounded polygon |
| `G10-B04-LINEAR_OBJECTIVE` | Optimize `F=ax+by` over **bounded polygon** | Check every feasible vertex and edge tie |
| `G10-B04-INTEGER_MODELS` | Build and interpret practical restrictions | If units indivisible, integer feasibility after geometric solution |

IDs above are **candidate skill/outcome IDs**, not registered item IDs or already-reviewed outcomes.

## Bài 3 — Bất phương trình bậc nhất hai ẩn

### D1 — definitions, conditions, methods

A linear inequality in two real unknowns has one of the forms
\[
ax+by<c,\quad ax+by\le c,\quad ax+by>c,\quad ax+by\ge c,
\qquad (a,b)\ne(0,0).
\]
A pair \((x_0,y_0)\) is a solution only when substitution makes the inequality true. The boundary line is \(d: ax+by=c\); the solution set in the plane is one of the two half-planes.

**Method for a half-plane:** (1) Draw the correct boundary line. (2) Choose a test point not on \(d\) — frequently \((0,0)\), **only when \(c\ne0\)**. (3) Substitute. (4) Select the satisfying side. (5) Include boundary when the sign is \(\le\) or \(\ge\), exclude it when \(<\) or \(>\). For graphing, use a solid boundary only in non-strict cases; dashed is an illustrative convention for strict cases.

**Real-world domains:** when \(x,y\) represent goods, impose non-negativity; when counting discrete objects, restrict to nonnegative integers. The algebraic half-plane does not itself impose these restrictions.

### D2 · EX-G10-B03-01 — a non-strict half-plane

Plot \(x+2y\le4\). The boundary intersects the axes at \((4,0)\) and \((0,2)\). Check \((0,0)\): \(0\le4\) is true. Shade the side containing the origin **including** the boundary. The pair \((2,1)\) is on the boundary since \(2+2=4\).

### D2 · EX-G10-B03-02 — a strict half-plane

Plot \(2x-y<1\), equivalent to \(y>2x-1\). The line \(y=2x-1\) is **excluded**; the solution set is strictly above the line. The origin satisfies \(0<1\). A point on the line, e.g. \((1,1)\), is NOT a solution.

### D2 · EX-G10-B03-03 — ratio model and denominators

Mix \(x\) kg of one product priced 140 thousand/kg and \(y\) kg priced 180 thousand/kg. Require blended unit price at most 170 thousand/kg. For \(x,y\ge0\) and **\(x+y>0\)**:
\[
\frac{140x+180y}{x+y}\le170
\iff 140x+180y\le170(x+y)
\iff y\le3x.
\]
At \((1,3)\) the average is 170; \((1,4)\) violates it (172). Do not drop the \(x+y>0\) condition.

## Bài 4 — Hệ bất phương trình bậc nhất hai ẩn

### D1 — feasible intersection and linear optimization

A solution of a system must satisfy **all** inequalities simultaneously; its plane solution region is the **intersection** of individual regions. Graph each line and appropriate half-plane, retain only the common region. It may be empty, bounded, or unbounded.

For a linear objective \(F(x,y)=px+qy\), if the feasible region is a **nonempty bounded polygon**, at least one maximum and minimum is attained at a vertex. There can be multiple maximizing points along an edge when \(F\) is constant there; do not claim unique vertex unless checked. For an **unbounded** region, existence of a finite optimum must be justified separately. With integer production units, the chosen solution must have integer coordinates.

### D2 · EX-G10-B04-01 — four-vertex region

Given
\[
x\ge0,\ y\ge0,\ x+y\le6,\ 2x+y\le8.
\]
The feasible polygon vertices are \((0,0),(4,0),(2,4),(0,6)\), found from intercepts and the intersection \((x+y=6,2x+y=8)\). For \(F(x,y)=3x+2y\), values are \(0,12,14,12\); maximum is \(14\) at \((2,4)\).

### D2 · EX-G10-B04-02 — an empty feasible region

The system \(x+y\le1\) and \(x+y\ge3\) has no solutions. There is no common half-plane region and no point to optimize over. This prevents mistakenly drawing the union of the two non-overlapping regions.

### D2 · EX-G10-B04-03 — inventory and profit (integer feasible)

A shop considers \(x\) products of type A and \(y\) of type B, requiring \(x,y\in\mathbb Z_{\ge0}\), unit purchase costs 20 and 10 million VND. Its 1,200-million budget and capacity 100 units give
\[
20x+10y\le1200,\quad x+y\le100.
\]
Profit in million VND is \(F(x,y)=3.5x+2y\). The continuous feasible polygon has vertices \((0,0),(60,0),(20,80),(0,100)\). Evaluate profits \(0,210,230,200\) respectively. Thus \((20,80)\) yields maximum 230 million, **and this candidate is integer-feasible**. Restricting an optimization to integer points cannot produce a larger value than the continuous maximum; this point achieves the bound.

## D3–D6 work left before NotebookLM packet

- **D3:** create original canonical Core/Practice/Application question bodies, answer keys, solution steps, hints and roles, then check against SGK/SBT S1 subskills; do not generate repetitive variants just to meet a quota.
- **D4:** two or more original Written with shared library rubric; Anchor is a tag, not a second bank.
- **D5:** SVG source figures: strict/non-strict half-planes and bounded polygon with valid vertex labels, responsive with textual descriptions.
- **D6:** misconception cards for wrong test point, boundary exclusion, intersection-vs-union, and maximizing over an incorrect/integer domain.
- **Source citation audit:** inspect full printed SGK pp.22–32 and SBT pp.16–28 activity-by-activity, especially applications/extension boundaries. A1–A7 not complete, no NotebookLM verdict yet.
- **Assessment boundary:** SGK_CHAPTER_READINESS and TOPIC_READINESS not in this public draft; do not add private keys to repository, activate scoring or Mastery.

**STATUS:** `D1_D2_DRAFT_ONLY` · `D3_D6=PENDING` · `NOTEBOOKLM=NOT_REVIEWED` · `CONTENT_READY=NO` · `MERGE_DEPLOY=NO`.
