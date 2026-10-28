# D6 Gate Preflight · Toán 10 KNTT ChVII–VIII · Golden UI R4 / SVG / secure assessment / device QA v0.1

**Date:** 2026-10-28. **Document status:** `D6_TEST_PLAN_NOT_EXECUTED` · `NOT_STUDENT_QA_PASS` · `NO_MERGE_DEPLOY`. This is a read-only **evidence matrix and test guide**, not a change to Golden UI or application runtime.

**Prior academic evidence:** D1–D2 B19–B25 snapshot PASS, D3–D4 63 reviewed with tier corrections plus P07 delta PASS (64 total), 35 outcome source receipts, 14/14 SGK Chapter Readiness candidate slots academically reviewed but 0 active, D5 4/4 SVG academic PASS. **Overall release clearance NO.**

## 0. Actual repository preflight

- Current GitHub `docs/thpt-preview/sgk/` directory has ChVI and `core/` pilot routes; `docs/thpt-preview/chuyen-de/` has `ham-so/` pilot routes. **No completed ChVII/ChVIII learner routes were verified.** Their actual integrated D6 student workflow **cannot be marked PASS** just from source drafts.
- The original four SVG sources live once each under `prototypes/thpt/visuals/`. Source math, SVG XML, labels and CairoSVG contact sheet have reviewed D5 PASS, but the live website has **not** been shown to render these references in SGK B19/B21/B22/B23 or Topic Practice.
- Golden UI R4 owner design PASS is **design acceptance**, not a complete ChVII/VIII device QA or a release approval. Do not modify prototype ChVI or Golden UI shell in this authoring branch.
- GitHub public source includes worked answers for **Practice/Core** draft items, deliberately not secure held-out items. Never copy protected Chapter/Topic Readiness answers into browser bundles, static HTML/JS/Markdown, or public GitHub.

## 1. D6 test matrix (no simulated PASS)

| ID | Exact test / expected evidence | Current result |
|---|---|---|
| D6-01 | Match all four rendered SVG blobs to D5-reviewed SHAs, preserving single shared asset path | **SOURCE_SHA_VERIFIED** (not device QA) |
| D6-02 | SVG syntax, `title`, `desc`, no scripts/remote references, no U+2212 unsupported glyph in revised three | **STATIC_PREFLIGHT_VERIFIED** (not browser) |
| D6-03 | Learner routes G10 ChVII B19–B22 and ChVIII B23–B25 in actual R4 shell; links, Previous/Next, chapter launchers correct | **BLOCKED: LEARNER ROUTES NOT YET INTEGRATED** |
| D6-04 | D5 FIG-01 B19-P06 displays d1/d2/d3/Delta correctly, readable colors/ticks/labels at desktop, 320/375/390px mobile, 200% zoom | **PENDING LIVE_RENDER** |
| D6-05 | FIG-02 B21-P03, FIG-03 B22-P06 font/minus/coordinates and SVG alt/title readable on Safari/Chrome/iPhone/iPad | **PENDING LIVE_DEVICE** |
| D6-06 | FIG-04 B23-C02 full tree/6 distinct leaves readable and does not reveal unanswered SGK Core exercise | **PENDING LIVE_RENDER/EXPOSURE** |
| D6-07 | Each figure is referenced by the original canonical item only; images reused by references, not copied across SGK/Topic routes | **METADATA_PLAN_ONLY** |
| D6-08 | SGK lesson independent Knowledge → Core → Practice/Application, and SGK **chapter-end** Readiness; cumulative chapter exercises remain within Practice | **PENDING ROUTE_UAT** |
| D6-09 | Topic independent Knowledge → Practice → Topic Readiness **exactly three sections**, no Topic Core; Knowledge content tabs 1 or 2 levels, not 3 | **PENDING ROUTE_UAT** |
| D6-10 | R4 typography, navigation, launcher, responsive tab state, active/focus/keyboard controls unchanged | **PENDING REGRESSION** |
| D6-11 | One `canonical_item_id` and one key/history for SGK Core and Topic basic Practice when same item is reused; placement/entry context tracked | **PENDING DATA_TEST** |
| D6-12 | Practice hint/solution/answer-bearing FIG-01/02/03 visible only after allowed Practice check/feedback; FIG04 in Knowledge example or after Core check | **PENDING EVENT_TEST** |
| D6-13 | Chapter Readiness and Topic Readiness: no hint, solution-bearing SVG, Tutor key, correctness, scoring signal or plaintext answer before **Final Submit** | **BLOCKED: NO VERIFIED SECURE ASSESSMENT RUNTIME** |
| D6-14 | Held-out Readiness key/rubric stored/evaluated on protected server; no secret in network responses, HTML/JS/static bundles/localStorage | **BLOCKED: BACKEND SECURITY NOT VERIFIED** |
| D6-15 | Prior exposure (SGK, Topic, hint, solution, earlier submit) invalidates naive Readiness mastery evidence for exact previously seen canonical item | **PENDING EXPOSURE_TEST** |
| D6-16 | Student can revise earlier answers using Previous/Next; no per-question reveal, and score/feedback appears only after Final Submit; retake distinct from new assessment | **PENDING FLOW_TEST** |
| D6-17 | Written/Anchor uses 7 canonical Written items with 2 Anchor tags, no extra bank/histories or auto-credit from self-rubric | **PENDING SCORING_TEST** |
| D6-18 | Core/optional layer separation for B22-C01, B25-P02/P05/P06; B25-P07 core SGK Practice in outcome CONSTANT_TERM | **PENDING LEARNER_CONTENT_TEST** |
| D6-19 | Real Chrome desktop, Chrome Android, Safari iOS, iPad Safari with dark/light, landscape/portrait, touch target, focus, 200% zoom and slow network | **NOT_TESTED_ON_PHYSICAL_DEVICE** |
| D6-20 | All learning attempts, mastery and totals remain non-credit if demo/unchecked. No automation should issue owner's Academic PASS or launch deployment | **POLICY_ONLY, NOT FUNCTIONAL_QA** |

## 2. Suggested test order, evidence and decision

1. **Pre-integration (now):** Freeze D5 blob SHA/metadata, review new outcome matrix v0.4 and content roles; do not copy held-out keys or SVG answers into assessment components.
2. **When ChVII–VIII learning pages exist (separate approved implementation workstream):** run desktop R4 route/content/visual regression, record actual URLs/commit/screenshots and per-case observed outcomes. This authoring branch is **not** that workstream.
3. **Before student release:** run keyboard/reader/phone/iPad device matrix; verify normal/large fonts, minus signs, B19 4-line visibility, image answer-exposure timing and Topic three-section menu.
4. **Before any Readiness activation:** inspect build output, network payload, protected answer storage, content_version/attempt_id, historical exposure and both SGK Chapter/Topic scope; test submitting wrong/correct/changed answers, reload, multiple sessions and duplicate Final Submit. No verified server -> **hard HOLD**, even if D5 academic PASS.
5. Owner must verify actual implementation and device/browser evidence; NotebookLM D5/R1 **cannot** replace this D6 acceptance. Do not infer production release clearance from 4/4 SVG PASS.

## 3. Evidence ledger and owner sign-off (leave unapproved)

```text
B19_B25_LEARNER_ROUTES|NOT_INTEGRATED_OR_NOT_VERIFIED
D5_SVG_ACADEMIC|4_OF_4_PASS
D6_STATIC_ASSET_SOURCE_CHECK|PASS_SOURCE_ONLY
D6_BROWSER_MOBILE|NOT_TESTED
D6_GOLDEN_UI_R4_REGRESSION|NOT_TESTED_FOR_CHVII_CHVIII
D6_PROTECTED_READINESS|BLOCKED_UNVERIFIED_BACKEND
D6_FULL_END_TO_END|NOT_PASSED
OWNER_D6_UAT|NOT_GRANTED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```

**References:** `THPT_G10_CHVII_VIII_NOTEBOOKLM_D5_R1_PASS_RECEIPT_20261028.md`; `prototypes/thpt/visuals/THPT_G10_CHVII_CHVIII_VISUAL_ASSET_PLACEMENT_MANIFEST_D5_PASS_v0.1.md`; `prototypes/thpt/THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md`; `prototypes/thpt/THPT_R4_GOLDEN_UI_OWNER_DESIGN_LOCK_20261027.md`. All remain draft/metadata until a separately authorized code/integration PR exists.
