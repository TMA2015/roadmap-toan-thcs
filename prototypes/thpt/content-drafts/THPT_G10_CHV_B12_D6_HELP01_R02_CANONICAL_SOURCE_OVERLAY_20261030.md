# B12 D6 · HELP-G10-B12-01@R02 · canonical replacement overlay (Academic Delta PASS, 30/10/2026)

**CANONICAL_HELP_ID:** `HELP-G10-B12-01` (one ID and one replacement, NO DUPLICATE HELP CARD)
**OUTCOME_ID:** `G10-B12-ABS_ERROR`
**LINKED_PUBLIC_CANONICAL_ITEM_ID:** `THPT-G10-B12-C02` (source, stem/options/answer/hint/solution/content_version/role all UNCHANGED)
**ACADEMIC_PACKET_ID:** `THPT-G10-CHV-B12-D6-HELP01-DELTA-C-R02-20261030-CANDIDATE`
**SOURCE_OF_APPROVAL:** Owner provided NotebookLM scoped review verdict; `ACADEMIC_DELTA_VERDICT=PASS`, five steps PASS, P0/P1/P2 outstanding = 0/0/0
**EXACT_REVIEWED_TEMP:** `Temp_THPT_G10_CHV_B12_HELP01_D6_DELTA_C_REVIEW_R02_20261030.md`; 6,706 UTF-8 bytes; SHA256 `926fa47af4f43637c375cf4169457784df2d225a0529b6266ecc3202e564651f`
**REVIEW_CANDIDATE_MIRROR:** `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_D6_HELP01_R02_NOTEBOOKLM_REVIEW_CANDIDATE_20261030.md` [blob `43ef063e150c647e0b5025e131b6b0f14d092576`]
**R01_IMMUTABLE_SOURCE:** `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md` [blob `49502fe39cf0a67f6a3e973a77f94164150637a7`]
**S1:** SGK Toán 10 KNTT Tập 1 Bài 12, pp.74–75; SBT Tập 1 pp.72–73.

## Exact five-step HELP01 R02 content from reviewed Temp, unchanged

### `HELP-G10-B12-01` · Nhầm độ chính xác d với sai số tuyệt đối thực tế

- **OUTCOME:** `G10-B12-ABS_ERROR`.
- **1. Nhận diện lỗi:** Coi độ chính xác \(d\) là sai số tuyệt đối thực tế \(\Delta_a\), dù không biết số đúng.
- **2. Dấu hiệu / tự chẩn đoán:** Em đã viết \(\Delta_a=d\) chỉ vì đề cho độ chính xác \(d\)? Đề đã cho số đúng \(\bar a\), hay mới chỉ cho số gần đúng \(a\) và cận sai số \(d\)?
- **3. Kiến thức gốc:** \(a\) là số gần đúng, \(\bar a\) là số đúng; \(\Delta_a=|a-\bar a|\). Nếu chỉ biết \(\Delta_a\le d\) thì không thể kết luận \(\Delta_a=d\); ta chỉ biết \(a-d\le\bar a\le a+d\).
- **4. Tự sửa:** Với số gần đúng \(a\) và độ chính xác \(d\), hãy lập đúng khoảng \([a-d;a+d]\) chứa **số đúng** \(\bar a\), rồi phát biểu rõ “sai số tuyệt đối **không quá** \(d\)”, không ghi bằng \(d\) khi chưa biết sai số thực. Ví dụ liên hệ câu Core C02: \(a=12{,}3\,\mathrm{cm}\), \(d=0{,}2\,\mathrm{cm}\) thì \(\bar a\in[12{,}1;12{,}5]\,\mathrm{cm}\), chứ chưa biết \(\Delta_a=0{,}2\).
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B12-C02` (không sao chép câu, không đổi đáp án hay lời giải).

## Integration contract and academic/release boundary

- This card is **one replacement overlay** of R01 `HELP-G10-B12-01` at the same canonical identity. Do **not** register a seventh HELP_ID; total ChV D6 = exactly six HELP_IDs, combining 4 unaffected R01 + HELP01@R02 + independently reviewed HELP02@R02.
- R01 HELP01 was found to invert the roles of `a` (approximate, known) and `\bar a` (true, generally unknown), and to direct an incorrect interval calculation. R01 flaw P1; `DELTA_C_ACADEMIC_MATERIAL` reviewed R02 **PASS** for this card only.
- `THPT-G10-B12-C02` remains the single canonical public practice item. Do not clone its stem, options, key, rubric, solution, or learning evidence here. `HELP-G10-B12-02@R02` is separate previous independent scoped academic PASS, untouched.
- This is **authoring source** only. No runtime or website integration, no Readiness/held-out assessment bank review, no scoring or Mastery, no owner merge/deploy authorization. In the release R1 lane, integrate exactly one R02 help card per HELP_ID, verify canonical links and actual device build/QA on final commit, and check exact Temp lineage for HELP02 R02 separately.
