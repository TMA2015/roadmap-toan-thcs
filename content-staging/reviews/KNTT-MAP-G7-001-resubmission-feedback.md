# Feedback on KNTT-MAP-G7-001 — Resubmission Context 1.0.3

**Source:** Gemini revised submission  
**Purpose:** collaboration feedback + capability benchmark  
**Integration status:** no new curriculum merge required; reviewed Grade 7 artifact already contains the accepted corrections.

## What improved

1. **Context compliance improved**
   - Response now uses `CONTEXT_VERSION: 1.0.3`.
   - Coverage table includes both `Upstream prerequisites` and `Downstream use`.

2. **Vertical Spine thinking improved**
   - Chương 1 correctly links Grade 6 fractions/integers → rational numbers → later algebra.
   - Chương 3 correctly links Grade 6 geometry → formal proof → triangles/quadrilaterals.
   - Chương 6 correctly links ratio/proportion → function/application work.
   - Chương 7 correctly links arithmetic → symbolic algebra → identities/factorization.
   - Chương 9 correctly separates Topic 14 and Topic 15.

3. **Pedagogical diagnosis remains useful**
   - Grade 7 is correctly identified as a transition year from arithmetic to symbolic algebra and from visual geometry to formal proof.
   - Proposed gap around proof-writing skills remains valid and is already reflected in the reviewed mapping.

## Persistent issues

### 1. Chapter 10 still maps PRIMARY to Topic 24

The response repeats:

`24-bai-toan-thuc-te | PRIMARY`

for rectangular prisms/cubes/right prisms.

This remains incorrect for the project architecture.

Correct routing:

- `20-hinh-hoc-tong-hop`: **PRIMARY**
- `24-bai-toan-thuc-te`: **SECONDARY / APPLICATION**

Reason: the mathematical object and mastery target are geometry/measurement; real-life context is an application layer.

### 2. Existing skills are still marked Proposed

Examples already present in Practice Bank:

- `ti-le-thuc`
- `day-ti-so-bang-nhau`
- `tia-phan-giac`
- `goc-doi-dinh`
- `tong-goc-tam-giac`
- `tam-giac-can`
- `bieu-do-quat-tron`
- `doc-bieu-do-doan-thang`
- `bien-co`
- `bien-co-chac-chan-khong-the`
- `xac-suat-co-dien`

This is expected because the G7 packet did not contain repository skill inventory. The G8 task corrects this by embedding relevant existing skills.

### 3. Some continuity fields are topic-level rather than skill-level

Example:

`Hình học trực quan lớp 6 (13-goc-va-duong-thang)`

is directionally useful, but the long-term knowledge graph needs more precise edges such as:

`phan-loai-goc → goc-doi-dinh → goc-so-le-trong → tong-goc-tam-giac`

Future tasks should prefer actual skill IDs when the inventory is supplied.

## Benchmark interpretation

This resubmission is useful because it shows **format/context adaptation works**, but a domain-routing error can persist when the input does not explicitly expose the repository's conceptual boundary.

Observed pattern after G6 + G7 + G7-resubmission:

### Stronger signals
- curriculum coverage;
- pedagogical transition analysis;
- gap/overreach detection;
- continuity narrative.

### Persistent support needs
- exact repository skill reuse;
- boundary between mathematical Core topic and application hub;
- machine-precise prerequisite/unlock edges.

## Routing decision

Keep:

`GEMINI_LEAD + CHATGPT_REPOSITORY/CURRICULUM_QA`

Do not promote curriculum mapping to `BENCHMARKED` yet.

## Next task design consequence

KNTT-MAP-G8-001 now includes:

- verified TOC;
- valid topic ID whitelist;
- existing skill inventory;
- Vertical Spine upstream/downstream requirement;
- explicit rule that geometry/measurement Core does not become Topic 24 merely because the exercise uses a real-life context.
