# G10 KNTT Chương V, Bài 12 · D6 `HELP-G10-B12-02` · canonical content overlay R02

**PACKET_ID:** `THPT-G10-CHV-B12-D6-HELP02-DELTA-C-20261030-R02-CANDIDATE`
**STATUS:** `R02_NOTEBOOKLM_SCOPED_PASS_OWNER_REPORTED` · `AUTHORING_ONLY` · `NO_MERGE/DEPLOY`
**SEMANTIC_VERSION:** `HELP-G10-B12-02@R02`; **canonical help identity remains** `HELP-G10-B12-02`. This is a **replacement overlay**, NOT a second independent HELP item, not a second item bank and not an active runtime alias.
**BASE R01 SOURCE:** `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md` @ Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7` (immutable historical NotebookLM R01 snapshot).
**AFFECTED:** `HELP-G10-B12-02` ↔ `G10-B12-REL_ERROR`. **UNMODIFIED LINKED PRACTICE:** `THPT-G10-B12-P06`.

## R02 · Complete five-step learner support card (replacement of R01 HELP02 only)

### `HELP-G10-B12-02` · Sai mẫu số và nhầm cận sai số tương đối
- **OUTCOME:** `G10-B12-REL_ERROR`
- **1. Nhận diện lỗi:** Dùng số đúng (chưa biết) thay cho số gần đúng khi tính sai số tương đối, hoặc nhầm cận sai số với sai số thực.
- **2. Dấu hiệu / tự chẩn đoán:** Em lấy \(\frac{\Delta_a}{|\bar{a}|}\) thay cho \(\frac{\Delta_a}{|a|}\)? Khi chỉ biết độ chính xác \(d\), em đã nhầm \(\Delta_a=d\) chưa?
- **3. Kiến thức gốc:** Với số gần đúng \(a\ne0\), \(\delta_a=\frac{\Delta_a}{|a|}\). Nếu chỉ biết \(\Delta_a\le d\) thì chỉ suy \(\delta_a\le\frac{d}{|a|}\); không khẳng định \(\delta_a=\frac{d}{|a|}\) khi chưa biết sai số thực.
- **4. Tự sửa:** Xác định lại \(a,\bar{a},\Delta_a,d\); tính cận phần trăm đúng theo \(a\) và nói rõ dấu \(\le\).
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B12-P06`.

## Phạm vi bảo toàn và hướng dẫn tích hợp

- Theo **SGK Toán 10 KNTT Tập 1 Bài 12 tr.73–77, đặc biệt tr.75** và **SBT tr.72–73**: `a` là số gần đúng, `\bar a` là số đúng, `\Delta_a=|a-\bar a|`; khi `a≠0`, mẫu số của `\delta_a` là **`|a|`**, và nếu `\Delta_a≤d` thì `\delta_a≤d/|a|`. Không đổi định nghĩa, không nhầm cận với giá trị thực.
- This scoped D6 overlay **supersedes R01 only for HELP02**. Its five steps above are transcribed from the substantive passages in the owner's pasted NotebookLM R02 verdict; they are **not asserted byte-identical to the referenced original `Temp_THPT_G10_CHV_B12_D6_HELP02_DELTA_REVIEW_20261030.md`**, because the Temp file itself was not supplied as an accessible attachment in this development conversation. Before release, compare exact text/byte hash against that original Temp if required by source-lock policy.
- In the future integration step: **replace** just the existing R01 `HELP-G10-B12-02` content at the one canonical help placement; **do not append another HELP02**. Do not edit the frozen R01 snapshot or its R01 review receipt. No questions/keys/solutions/rubric/placement or D1–D5 source changed, including `THPT-G10-B12-P06`, whose R01 candidate content remains intact.
- Academic verdict applies **only** to the revised HELP02 D6 paragraph set: `DELTA_C_ACADEMIC_MATERIAL`, `R01_HELP02_P1_SOURCE_ERROR=CONFIRMED`, `R02_HELP02_VERDICT=PASS`, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `RELEASE_AUTHORIZATION=NO`. Other ChV B12–B14 R01 academic PASS is preserved for **unaffected portions** only.
