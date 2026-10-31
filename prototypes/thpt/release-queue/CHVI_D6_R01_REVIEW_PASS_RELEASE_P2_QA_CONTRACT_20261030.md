# Toán 10 Chương VI B15–B18 — D6 Academic PASS R01 / P2 technical QA handoff

**REVIEW_PACKET:** `THPT-G10-CHVI-B15-B18-D6-A5-GAP-20261030-R01`.
**SOURCE_BLOB:** `396585c59f902f6b4078b4b494adf53d1793f252`.
**OWNER_NOTEBOOKLM_REVIEW_RECEIPT:** `prototypes/thpt/content-drafts/THPT_G10_CHVI_D6_R01_NOTEBOOKLM_OWNER_VERDICT_RECEIPT_20261030.md`.
**ACADEMIC_STATUS:** D6 **8/8 PASS**, source-scoped, P0=0/P1=0/P2=1, MINIMAL_DELTA=0, 0 newly-created/modified canonical item IDs.
**CHVI_A5:** **HOLD / NOT CLOSED** until runtime learner support meets depth and owner release requirements; independent Chapter Readiness not active.

## Concrete technical baseline checked on GitHub main

- Public authored formative canonical bank lives at `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js`; all explicitly referenced B15/B17/B18 `THPT-G10-Bxx-Cyy/Pyy` exist. This does **not** constitute browser/mobile linking QA.
- The current R4 modal runner `docs/assets/javascripts/thpt-r4-preview.js` has `initChapterPracticeCards()` / `showReviewed()` with question navigation, opt-in hints and solutions, and lesson-back link. Current learner-facing generic "Ôn lại kiến thức" link is **not** the newly reviewed eight D6 cards. Do not claim them integrated just because links exist.
- B16 Core/Practice follows existing shared R4 pages; reference the existing canonical item/markup, do not copy `item_id`, stem, key, answer or rubric.
- Public formative answers may be revealed on request, never in independent Readiness before Final Submit. No score/Mastery or "seen" guarantees can be inferred solely from a browser link.

## Reviewed HELP_ID ⇒ public return target

| Help ID | Page/skill entry | Target for P2 |
|---|---|---|
| `HELP-G10-B15-01` | B15 function mapping/graph | `THPT-G10-B15-C01` or lesson B15 graph |
| `HELP-G10-B15-02` | B15 domain/monotonicity | `B15-C02`, `B15-P01`, `B15-P03`, `B15-P02/P04` by skill |
| `HELP-G10-B16-01` | B16 vertex and sign of a | Existing B16 original SGK Core/Practice R4 |
| `HELP-G10-B16-02` | B16 parabola/model | Existing B16 reviewed graph/model placement |
| `HELP-G10-B17-01` | B17 discriminant/sign table | `THPT-G10-B17-C01/C02` |
| `HELP-G10-B17-02` | B17 quadratic inequality/parameter/model | `THPT-G10-B17-P02/P03/P04` |
| `HELP-G10-B18-01` | B18 radicals, extraneous roots | `THPT-G10-B18-C01/C02/P01/P03` |
| `HELP-G10-B18-02` | B18 radical equals expression/real model | `THPT-G10-B18-P02/P04` |

These are references to existing canonical items, not a new placement with duplicate data or answer keys.

## P2 acceptance checklist — must run on release integration exact head

- [ ] **Help mount:** Each of 8 `HELP_ID` is visibly available only in its matching B15–B18 Knowledge/SGK Practice, not independent Chapter or Topic Readiness.
- [ ] **Five-step content parity:** UI shows correct **TRIỆU CHỨNG / XÁC ĐỊNH LỖI / KIẾN THỨC CHỐT / TỰ SỬA / LUYỆN LẠI**, source-locked math unchanged after reviewer; no missing steps, MathJax errors or copy of canonical solutions.
- [ ] **One canonical target:** "Luyện lại" resolves the existing item by `item_id` and role, including B16 legacy R4 routes; no cloned body/answer/rubric or second bank.
- [ ] **Navigation and state preservation:** Open modal/help from middle item, scroll, navigate back to practice; preserve current question/selection or explicitly warn of unsaved changes. A direct page navigation that silently resets work is **not PASS**. Test Prev/Next/modal close and back/forward.
- [ ] **Mobile responsive/accessibility:** Physical iPhone Safari and Android Chromium plus desktop; no overflow/hidden formula/button, long D6 text legible, keyboard and screen reader labels, focus restored on modal close.
- [ ] **No scoring exposure leak:** D6 never appears pre-Final Submit in private `SGK_CHAPTER_READINESS` or `TOPIC_READINESS`; public formative may show hint/solutions on deliberate request; demo continues `NO_SCORE/NO_MASTERY`.
- [ ] **Regression on exact head:** Golden THPT R4, THCS pages, Gemini integration, progress storage keys, deep links and CI. No new account/backend/Firebase changes.
- [ ] **Academic A5 re-evaluation:** Only after evidence of all D1–D6 in the public learner path at reviewed scope and owner acceptance may the ChVI A5 manifest be reconsidered. Do not conflate this with activating Chapter Readiness.

**R1/R2/R3/R4/R5:** Not performed by this academic packet; the owner controls any merge/deploy. **Reviewer P2 stays OPEN** until on-device and integration receipts are recorded.
