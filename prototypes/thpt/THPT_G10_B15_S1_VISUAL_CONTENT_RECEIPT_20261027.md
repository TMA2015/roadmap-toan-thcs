# Bài 15 · Hàm số — direct SGK visual content receipt

**Status:** `DIRECT_SGK_VISUAL_REVIEW` / `SBT_FULL_AUDIT_PENDING` / `CONTENT_DRAFT_NOT_ACADEMICALLY_REVIEWED`.  
**SGK source:** Toán 10 KNTT tập 2, Chương VI, Bài 15, printed **p4–10**; directly rendered and inspected scanned pages (PDF pages p5–11, offset +1). No OCR or unverified page inference used.

## SGK outcomes and evidence actually observed

| Printed page | Observed element | Implication for learner lesson |
|---|---|---|
| p4 | Chapter VI title; Bài 15 opening and intended terminology (tập xác định, tập giá trị, đồ thị, đồng/nghịch biến) | Establish expected topic sequence |
| p5 | HĐ1 uses air-quality table; HĐ2 uses a time-series graph; HĐ3 uses household electricity tariff | Show dependency through table, graph and a realistic tariff relation |
| p6 | Definition: each x in D corresponds to **one and only one** y; D domain, set of attained y is range; examples of measured table, linear motion, square-root/rational domains; Luyện tập 1; formula/table/graph/description representations | Lesson theory and examples require explicit domain/range and multiple data representations |
| p7 | Definition of graph as points (x,f(x)); activity and example on reading parabolic and linear graph; electricity tariff by **piecewise expressions on x intervals** | Add graph membership and explain piecewise function, interval boundaries and legitimate physical domain |
| p8 | Formal increasing/decreasing definitions quantified over x1<x2 on one interval; visual examples with y=−x² and y=x² | Keep inequalities, interval-specific monotonicity and figure/graph explanation |
| p9 | Luyện tập 3; taxi-fare model; exercises 6.1–6.6; a short function/modeling introduction | Reconcile core/practice and real-world model types with page scope |
| p10 | “Em có biết?” discussion of modeling workflow and use of functions | Optional depth/context, should not falsely be a separate mandatory outcome |

**Do not treat this as a complete lesson/SBT academic audit:** exact exercise/rubric matrices and SBT pages 3–9 remain pending before review. Source-derived topic structure has now been checked directly; examples added in SGK B15 draft are **original**, not copied textbook text.

## Authoring changes verified against scope

Updated `docs/thpt-preview/sgk/chuong-vi/bai-15.md`: added original temperature table with explicit finite domain/range and an illustrative piecewise shipping fee with boundary and continuity checks:
- `D={6,12,18}`, `T(D)={19,21,25}`; cannot infer unseen `T(9)` from three readings;
- `C(x)=8x` on `0≤x≤2`; `C(x)=16+6(x−2)` for `x>2`; `C(1)=8`, `C(2)=16`, `C(3)=22`, both branches join at (2,16), prices in thousand dong.

**Delta classification:** `DELTA_C_ACADEMIC_MATERIAL` for this new explanation/representation material; must be included in coherent Chương VI NotebookLM review after all lesson content and bank items are ready. **No academic PASS granted by this document.** Retain Golden UI v7 and no merge/deploy.
