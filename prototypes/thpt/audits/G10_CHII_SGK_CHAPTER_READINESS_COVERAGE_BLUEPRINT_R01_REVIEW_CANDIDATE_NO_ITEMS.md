# G10 SGK Chương II · RD0 R01 candidate — evidence-depth blueprint (no items)

**DATE:** 2026-10-30. **AUTHORING LANE:** `AUDIT_ONLY`. **PACKET_ID:** `THPT-G10-CHII-SGK-CHAPTER-READINESS-RD0-R01-20261030`. **SCOPED ONLY TO:** `SGK_CHAPTER_READINESS:G10:CHII`. **STATUS:** `PENDING_INDEPENDENT_NOTEBOOKLM_REVIEW` / `NOT_ACTIVE` / `NO_SCORE/NO_MASTERY` / `NO_ITEM_BANK` / `NO_MERGE_DEPLOY`.

## 1. S1 and stable provenance

- **SGK lessons:** B03–B04; SGK Toán 10 KNTT tập 1 B03 tr.22–25, B04 tr.26–30, cuối ChII tr.31–32; SBT B03 tr.16–18, B04 tr.19–23, cuối ChII tr.24–28 (theo R00 và public D1–D6; reviewer cần đối chiếu SGK/SBT S1).
- **PUBLIC D1–D6 REVIEW SNAPSHOT (not Chapter Readiness):** `prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_D1D6_AUTHORING_R01_SNAPSHOT.md`, blob `acea9776d1c7534a4cd0cd28e98db26dedf0c122`. **Review evidence:** `prototypes/thpt/release-queue/REGISTER.md`. Do not equate public formative PASS with RD0 source PASS.
- **R00 source unchanged:** `prototypes/thpt/audits/G10_CHII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md`, Git blob `3542eaf9147af867eebd8bce64b66d3392a94c7b`; **10/10 existing canonical outcome IDs**, no additions or renaming. R01 expands **assessment design evidence** only, without actual questions/stems/keys, private rubrics or new `item_id`.
- **Scope labels below are preliminary review prompts, not judgments:** `S1_SCOPE_HOLD` explicitly means the reviewer must decide whether a target is Core, Support or Optional under SGK/SBT. Do not adopt these flags into production enums.

## 2. Candidate depth & misconception audit — 10 IDs

| # | Existing canonical OUTCOME_ID | Original R00 evidence target | Depth/mode candidate | What student must demonstrate / misconception to check | S1 verification flag |
|---:|---|---|---|---|---|
| 1 | `G10-B03-LINEAR_INEQUALITY` | Nhận diện bất phương trình bậc nhất hai ẩn, yêu cầu (a,b) khác (0,0) | nhận biết → thông hiểu | Hình thức ax+by≤c, (a,b)≠(0,0); phân biệt biên tuyến tính với miền nghiệm. | `B03 Core S1` |
| 2 | `G10-B03-POINT_TEST` | Thế cặp (x,y) để kết luận nghiệm và chọn điểm kiểm tra ngoài biên | thao tác có lý giải | Chọn điểm thử không thuộc đường biên; thế đúng dấu và giải thích phía được tô. | `B03 Core S1` |
| 3 | `G10-B03-BOUNDARY` | Vẽ đường biên và chọn loại nét theo dấu nghiêm ngặt/không nghiêm ngặt | trực quan → thao tác | Nét liền/đứt với ≥/≤ và >/ <; kiểm trường hợp biên nằm qua gốc. | `B03 Core S1` |
| 4 | `G10-B03-HALFPLANE` | Xác định nửa mặt phẳng nghiệm bằng phép thử điểm hợp lệ | nhận biết → suy luận | Miền nghiệm nửa mặt phẳng và phép nhân số âm đổi chiều bất đẳng thức. | `B03 Core S1` |
| 5 | `G10-B03-MODELING` | Thiết lập biến/đơn vị/miền từ bài toán thực tế | vận dụng thực tiễn | Lập biến, đơn vị, bất phương trình theo tình huống; số nguyên/không âm chỉ khi nguồn nêu hoặc bài toán yêu cầu. | `B03 S1 MODEL; phân tầng` |
| 6 | `G10-B04-SYSTEM` | Kiểm đồng thời mọi bất phương trình trong hệ | thao tác → thông hiểu | Nghiệm chung thoả tất cả bất phương trình; không coi nghiệm từng điều kiện là nghiệm chung. | `B04 Core S1` |
| 7 | `G10-B04-REGION_INTERSECTION` | Đọc và mô tả miền giao các nửa mặt phẳng | biểu diễn → suy luận | Phần giao nhiều miền nghiệm, kể các đường biên và giao điểm, đọc từ hình vẽ. | `B04 Core S1` |
| 8 | `G10-B04-FEASIBILITY` | Phân biệt miền rỗng/bị chặn/không bị chặn và phạm vi tối ưu | suy luận về miền | Phân biệt tập nghiệm rỗng và không rỗng; yêu cầu bị chặn/không bị chặn và tối ưu tổng quát phải kiểm phạm vi S1 trước khi bắt buộc. | `S1_SCOPE_HOLD: breadth/optimization` |
| 9 | `G10-B04-LINEAR_OBJECTIVE` | Biết cách tìm/tư duy nghiệm tối ưu tại các đỉnh và trường hợp tối ưu cả cạnh | vận dụng nâng cao? | Tối ưu biểu thức tuyến tính trên miền đa giác; yêu cầu trường hợp tối ưu cả cạnh là candidate phải được reviewer kiểm đúng SGK/SBT. | `S1_SCOPE_HOLD: edge optima` |
| 10 | `G10-B04-INTEGER_MODELS` | Đối chiếu nghiệm tối ưu liên tục với điều kiện nguyên/rời rạc | vận dụng thực tế/nâng cao? | Xét nghiệm nguyên/rời rạc, tránh làm tròn tối ưu liên tục; quyết định CORE/SUPPORT/OPTIONAL theo bài tập cuối chương S1. | `S1_SCOPE_HOLD: integer optima` |

## 3. Independent review requests (RD0 only)

1. Verify exact chapter-end SGK/SBT exercise coverage, notation, conditions, difficulty and source page numbers for B03/B04; compare theory/examples, public Core/Practice and Written without assuming public PASS covers Chapter Readiness.
2. Return reviewer verdict **for each exact OUTCOME_ID** `CORE_KEEP|SUPPORT_ONLY|OPTIONAL|MERGE|ADD|HOLD`; identify missing Core subskills, overreach and a feasible evidence structure that allows multiple skills per task without rigid 1-ID-to-1-question matching.
3. Validate D1–D6 coverage signals, level recognition → understanding → application and conceptual misconceptions. Distinguish `SGK_CHAPTER_READINESS` from `TOPIC_READINESS`, the latter not reviewed in this packet.
4. Require `SOURCE_RECEIPT`, `ID_RECONCILIATION`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_RD0_R01_OVERALL` and `ACADEMIC_CLEARANCE_FOR_RD0_SCOPE`. If S1 cannot be verified, return `HOLD`, not guessed PASS.

## 4. Integrity & release separation

- Each real held-out assessment item/key, solution, scoring rubric, content version and exposure control is **NOT PRESENT** in this packet. Nothing here requests an assessment item-level verdict or authorizes creation of a new backend, accounts, or public source containing private keys.
- `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`; no hints/Tutor or correct/incorrect before Final Submit if genuine assessment is later implemented; public practice may show solutions independently, but cannot earn Skill Mastery by self-check. `OWNER_RELEASE_AUTHORIZATION=NO`.

**GATE:** `RD0_SCOPE_PASS=PENDING`; `RD1_PROTECTED_DELIVERY=HOLD`; `RD2_ITEM_VERDICT=HOLD`; `RD3_ENGINE_AND_UAT=HOLD`; `RD4_RELEASE=HOLD`. One site/repository only, preserve THCS Golden UI/THPT Golden R4, browser progress and Firebase/Gemini.
