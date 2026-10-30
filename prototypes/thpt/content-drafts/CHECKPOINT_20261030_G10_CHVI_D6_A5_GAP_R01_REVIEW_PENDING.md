# Checkpoint G10 ChVI B15–B18 D6 A5 gap · 30/10/2026

**Workstream:** authoring-only educational remediation for *public formative*, new DELTA_C; existing main is unchanged. **NotebookLM 8/8 D6 PASS AFTER ORIGINAL CHECKPOINT** (see update below). Do not claim A5 PASS/Chapter Completion/Readiness activation.

## Source-locked candidate
- Review `PACKET_ID=THPT-G10-CHVI-B15-B18-D6-A5-GAP-20261030-R01`.
- Actual file `Temp_THPT_G10_CHVI_D6_REMEDIATION_A5_GAP_R01.md`, 16,723 bytes, SHA256 `a9535d51870ae5d345a40d7991336fba360faf84df63a725c5bff70413ec3cb0`; exact Git mirror `prototypes/thpt/content-drafts/THPT_G10_CHVI_B15_B18_D6_A5_GAP_R01_EXACT_SNAPSHOT.md`, Git blob `396585c59f902f6b4078b4b494adf53d1793f252`.
- Source basis: original S1 Toán 10 KNTT tập 2 SGK B15 pp.4–10, B16 pp.11–18, B17 pp.19–24, B18 pp.25–27, SBT B15 pp.3–9, B16 pp.10–15, B17 pp.16–18, B18 pp.19–21; page receipt through prior repository S1 visual audits. New NotebookLM should confirm those pages independently.
- 8 new HELP_ID = 2 per lesson, 5 self-repair steps each. **0 new canonical items, 0 modified public canonical items, 0 new SVG**. Maps across existing 19 B15–B18 reviewed outcome IDs.
- Author QA verified 8 unique HELP IDs, 5 stages each, no held-out Readiness keys or new scoring, proper math conditions and corrected routes to public bank. Existing public IDs from `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js` crosschecked: B15-P01 covers domain; B15-P03 covers monotonicity; B18-C02 and P03 concern two radicals; B18-P02 sqrt=expression.
- Existing ChVI independent reviewer 54/54 PASS applies **only** to previous source batch, not these 8 D6 additions. Public integration exists (#612) but main manifest ChVI `A5_D1_D6_SCOPE` unchecked. No change to that manifest in this PR.

## Reviewer receipt update (2026-10-30, after original checkpoint)

- Owner pasted NotebookLM independent R01 verdict for exactly 8 D6 cards: `ACADEMIC_D6_OVERALL=PASS`, 8/8 HELP_ID, 4/4 lessons PASS; P0=0, P1=0, P2=1, `MINIMAL_DELTA=0`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA=YES`.
- Reviewed exact original Temp/locked Git mirror blob `396585c59f902f6b4078b4b494adf53d1793f252` remains unchanged. No new or modified canonical items among previously reviewed 54.
- Structured transcription of owner report archived in `THPT_G10_CHVI_D6_R01_NOTEBOOKLM_OWNER_VERDICT_RECEIPT_20261030.md`. This is a chat transcription, not an original file's byte-exact checksum.
- P2 technical acceptance contract in `../release-queue/CHVI_D6_R01_REVIEW_PASS_RELEASE_P2_QA_CONTRACT_20261030.md`: resolve shared original practice `item_id`, modal/back-navigation state and iOS/Android responsive QA. Current generic practice hint/lesson link is not proof eight HELP_IDs are already mounted.
- **No ChVI A5 PASS**: `inventory/G10-SGK-CHVI.md` on main remains A5 HOLD; D1–D6 whole-public-path check, QA on integrated commit, assessment safety and owner release decision separate.
- **Status now:** `D6_ACADEMIC_PASS_R01=YES`; `D6_INTEGRATED=NO`; `P2_OPEN=YES`; `CHVI_A5=HOLD`; `MERGE_DEPLOY=NO`.

## Gates and next actions
- Author file exists and snapshot locked: **YES**.
- Reviewer verdict for 8 cards: **RECEIVED/PASS** (see reviewer update above); P0/P1=0, P2=1, MINIMAL_DELTA=0. Technical source-to-UI and real-device QA still pending.
- No changes to Golden R4 UI, MkDocs, canonical bank, scores, Gemini/Firebase, THCS or learner history.
- After owner's NotebookLM verdict: delta reconciliation per 07 v1.1, then separate source→UI/desktop-mobile QA on a release lane; if math and D1–D6 true depth support verified, re-adjudicate A5 without self-PASS.
- Chapter VI secure end-of-chapter Readiness remains NOT_ACTIVE, independently reviewed earlier candidate IDs are not active scoring/mastery.
