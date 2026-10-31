# G10 SGK Chương I · RD0 R01 candidate — evidence-depth blueprint (no items)

**DATE:** 2026-10-30. **AUTHORING LANE:** `AUDIT_ONLY`. **PACKET_ID:** `THPT-G10-CHI-SGK-CHAPTER-READINESS-RD0-R01-20261030`. **SCOPED ONLY TO:** `SGK_CHAPTER_READINESS:G10:CHI`. **STATUS:** `PENDING_INDEPENDENT_NOTEBOOKLM_REVIEW` / `NOT_ACTIVE` / `NO_SCORE/NO_MASTERY` / `NO_ITEM_BANK` / `NO_MERGE_DEPLOY`.

## 1. S1 and stable provenance

- **SGK lessons:** B01–B02; SGK Toán 10 KNTT tập 1 B01 tr.5–11, B02 tr.12–19; SBT B01 tr.5–7, B02 tr.8–11 (theo source-approved D1–D6 receipt; kiểm tra nguồn gốc trước kết luận RD0).
- **PUBLIC D1–D6 REVIEW SNAPSHOT (not Chapter Readiness):** `prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md`, blob `95a554e31a613b8e215679fe6790738473d598df`. **Review evidence:** `prototypes/thpt/release-queue/CHI_B01_B02_A1A7_SCOPED_EVIDENCE_20261029.md`. Do not equate public formative PASS with RD0 source PASS.
- **R00 source unchanged:** `prototypes/thpt/audits/G10_CHI_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md`, Git blob `9d329c69483151a254f47f689338bee9a75f2a84`; **11/11 existing canonical outcome IDs**, no additions or renaming. R01 expands **assessment design evidence** only, without actual questions/stems/keys, private rubrics or new `item_id`.
- **Scope labels below are preliminary review prompts, not judgments:** `S1_SCOPE_HOLD` explicitly means the reviewer must decide whether a target is Core, Support or Optional under SGK/SBT. Do not adopt these flags into production enums.

## 2. Candidate depth & misconception audit — 11 IDs

| # | Existing canonical OUTCOME_ID | Original R00 evidence target | Depth/mode candidate | What student must demonstrate / misconception to check | S1 verification flag |
|---:|---|---|---|---|---|
| 1 | `G10-B01-PROPOSITION` | Nhận diện câu là mệnh đề, phân biệt mệnh đề đúng/sai | nhận biết → giải thích | Bắt buộc chỉ ra mệnh đề phải có giá trị chân lí xác định; khác câu hỏi, mệnh lệnh và câu chứa biến chưa gắn điều kiện. | `B01 Core S1` |
| 2 | `G10-B01-NEGATION` | Phủ định chính xác mệnh đề và giá trị chân lí | thông hiểu → biến đổi | Phủ định phát biểu có điều kiện; kiểm dấu phủ định và miền xác định, không chỉ đổi ký hiệu. | `B01 Core S1` |
| 3 | `G10-B01-IMPLICATION` | Đọc mệnh đề kéo theo, xác định điều kiện đủ/cần | thông hiểu → phản ví dụ | Xác định chiều P⇒Q, đủ/cần; phát biểu sai có phản ví dụ, không suy Q⇒P. | `B01 Core S1` |
| 4 | `G10-B01-EQUIVALENCE` | Xác định tương đương, đủ và cần | thông hiểu → suy luận | Hai chiều cần/đủ, phát biểu tương đương khi cả hai chiều đúng; kiểm điều kiện xác định. | `B01 Core S1` |
| 5 | `G10-B01-QUANTIFIERS` | Hiểu và phủ định ∀/∃ đúng phạm vi | thông hiểu → vận dụng | Phủ định ∀/∃ đồng thời thay đổi mệnh đề bên trong, giữ đúng miền x. | `B01 Core S1; kiểm phạm vi SGK` |
| 6 | `G10-B02-MEMBERSHIP_SUBSET` | Dùng ∈, ⊂, ⊆ đúng đối tượng | nhận biết → thông hiểu | Phân biệt phần tử của tập và tập con; ngữ nghĩa ⊂/⊆ phụ thuộc quy ước ký hiệu, yêu cầu reviewer khóa S1. | `B02 S1 notation check` |
| 7 | `G10-B02-UNION_INTERSECTION` | Tính hợp và giao của hai tập hữu hạn/khoảng | thao tác → lập luận | Phép hợp/giao của tập hữu hạn và khoảng, kiểm đúng đầu mút và tập rỗng. | `B02 Core S1` |
| 8 | `G10-B02-DIFFERENCE` | Tính hiệu A\\B với đúng thứ tự | thao tác → phản ví dụ | Hiệu A\B theo đúng thứ tự; kiểm tập chứa, giao và tập rỗng. | `B02 Core S1` |
| 9 | `G10-B02-COMPLEMENT` | Xác định phần bù trong **tập nền được nêu** | thao tác có điều kiện | Phần bù phụ thuộc tập vũ trụ U rõ ràng; không mặc định ℝ khi nguồn giới hạn khác. | `B02 Core S1` |
| 10 | `G10-B02-INTERVALS` | Đọc và biểu diễn khoảng/đoạn/nửa khoảng | nhận biết → chuyển biểu diễn | Biểu diễn khoảng/đoạn/nửa khoảng trên trục và ký hiệu, điều kiện đầu mút ±∞. | `B02 Core S1` |
| 11 | `G10-B02-VENN_MODEL` | Mô hình hóa bài toán thực tế bằng tập, kiểm nhất quán | vận dụng thực tiễn | Phối hợp mô hình Venn, phép hợp/giao/hiệu và đếm không trùng; reviewer xét độ sâu và khả năng gộp chứng cứ. | `B02 S1 application` |

## 3. Independent review requests (RD0 only)

1. Verify exact chapter-end SGK/SBT exercise coverage, notation, conditions, difficulty and source page numbers for B01/B02; compare theory/examples, public Core/Practice and Written without assuming public PASS covers Chapter Readiness.
2. Return reviewer verdict **for each exact OUTCOME_ID** `CORE_KEEP|SUPPORT_ONLY|OPTIONAL|MERGE|ADD|HOLD`; identify missing Core subskills, overreach and a feasible evidence structure that allows multiple skills per task without rigid 1-ID-to-1-question matching.
3. Validate D1–D6 coverage signals, level recognition → understanding → application and conceptual misconceptions. Distinguish `SGK_CHAPTER_READINESS` from `TOPIC_READINESS`, the latter not reviewed in this packet.
4. Require `SOURCE_RECEIPT`, `ID_RECONCILIATION`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_RD0_R01_OVERALL` and `ACADEMIC_CLEARANCE_FOR_RD0_SCOPE`. If S1 cannot be verified, return `HOLD`, not guessed PASS.

## 4. Integrity & release separation

- Each real held-out assessment item/key, solution, scoring rubric, content version and exposure control is **NOT PRESENT** in this packet. Nothing here requests an assessment item-level verdict or authorizes creation of a new backend, accounts, or public source containing private keys.
- `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`; no hints/Tutor or correct/incorrect before Final Submit if genuine assessment is later implemented; public practice may show solutions independently, but cannot earn Skill Mastery by self-check. `OWNER_RELEASE_AUTHORIZATION=NO`.

**GATE:** `RD0_SCOPE_PASS=PENDING`; `RD1_PROTECTED_DELIVERY=HOLD`; `RD2_ITEM_VERDICT=HOLD`; `RD3_ENGINE_AND_UAT=HOLD`; `RD4_RELEASE=HOLD`. One site/repository only, preserve THCS Golden UI/THPT Golden R4, browser progress and Firebase/Gemini.
