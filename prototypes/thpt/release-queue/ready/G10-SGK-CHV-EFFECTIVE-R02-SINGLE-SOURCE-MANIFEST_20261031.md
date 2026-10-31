# G10 ChV B12–B14 — ONE effective source manifest (reviewed R01 + scoped R02 corrections)

**This is the single academic-source resolver for authoring→release**, not a duplicate canonical question bank, NotebookLM new full-ChV PASS, or production deployment. Updated on 31/10/2026 after owner delivered FIG01 R02 academic verdict. Original R01 full source is immutable history.

## A. Effective scope and frozen source

- `PACKET_ID=THPT-G10-CHV-B12-B14-D1D6-AUTHORING-20261030-R01` with **three scoped DELTA_C corrections** carried on their own exact reviewed source snapshots (two D6 HELP overlays and one D5 SVG).
- `LEARNING_PATH=SGK_CHAPTER`, `RELEASE_SCOPE=PUBLIC_FORMATIVE_ONLY` B12/B13/B14. Chapter Readiness/private 18 RD1 candidates were independently reviewed in a different scope; **not** part of this public source.
- Frozen academic R01 full lesson content: `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md` immutable blob `49502fe39cf0a67f6a3e973a77f94164150637a7`; original Temp SHA256 `77a189bb1aa199f3b81b8915903f85bae6659729849251ad92fa092761fd850c`.
- Original 14 outcomes, 27 canonical items (**6 Core + 18 Practice + 3 Written**, Anchor only a Written tag), 9 worked examples, 3 D5 SVG, 6 D6 HELP_IDs, all uniquely identified in `prototypes/thpt/shared-items/THPT_G10_CHV_B12_B14_CANONICAL_ID_REGISTER_R01.md`. Do not duplicate any item_id, SVG figure ID or HELP_ID when replacing.

## B. Effective content resolver — exactly ONE source per resource

| Resource | Current authoritative source | Reviewer evidence | Notes |
|---|---|---|---|
| D1 theory, D2 9 examples, 27 canonical Core/Practice/Written, 14 outcomes | **Frozen R01** full snapshot blob `49502fe39cf0a67f6a3e973a77f94164150637a7` | ChV R01 reviewer 27/27, 14/14 PASS | No stem/key/rubric changed |
| FIG-G10-B12-01 | **R02 corrected SVG** `prototypes/thpt/content-drafts/THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg`, blob `fede1bb23334ff7bd66a6f5a6adc39cf856c5d52`, SHA256 `d714f63073428b9f6efe17095eb9ee4ab374fdbe0043133f000c9a6bdf0384bc` | Owner NotebookLM `ACADEMIC_CLEARANCE_FOR_THIS_FIGURE=YES`, P0/P1/P2=0, DELTA_C | Replace R01 SVG body; same figure ID, 3 text changes only |
| FIG-G10-B13-01 and FIG-G10-B14-01 | **Frozen R01 SVG bodies** | Existing original ChV R01 | Do not re-render/edit mathematical data |
| HELP-G10-B12-01 | **R02** `THPT_G10_CHV_B12_D6_HELP01_R02_CANONICAL_SOURCE_OVERLAY_20261030.md` blob `2cecaba020881a560bc33251c38d55cc10a05516` | Independent scoped R02 PASS | Linked original `THPT-G10-B12-C02` |
| HELP-G10-B12-02 | **R02** `THPT_G10_CHV_B12_D6_HELP02_R02_CANONICAL_SOURCE_OVERLAY_20261030.md` blob `913400d6aff63befac95a8a47a00870663dd0096` | Scoped R02 PASS, independent R03 source-equivalence PASS, recovered original candidate Temp | Linked original `THPT-G10-B12-P06` |
| HELP-G10-B13-01/02 and HELP-G10-B14-01/02 | **Frozen R01** HELP bodies | ChV R01 scoped PASS | Exactly 4 unchanged HELP_IDs |

**Source precedence:** R02 for exactly B12 FIG01, HELP01 and HELP02 **overrides those three resource bodies only**. All other content stays R01. Do NOT append new HELP_ID or create parallel question bank from the old R01 snapshot.

## C. Chapter completeness academic reconciliation (one handoff)

```text
G10_CHV_B12_B14_ACADEMIC_SOURCE|EFFECTIVE_R01_PLUS_THREE_SCOPED_R02_CORRECTIONS
D1_TO_D6_PUBLIC_FORMATIVE|REVIEWED_FOR_SOURCE_SCOPES
EXPECTED_LESSONS|3
EXPECTED_OUTCOMES|14
EXPECTED_CANONICAL_ITEM_IDS|27
EXPECTED_D2_EXAMPLES|9
EXPECTED_FIGURE_IDS|3
EXPECTED_D6_HELP_IDS|6
FIG01_R02_ACADEMIC_CLEARANCE|YES
HELP01_R02_ACADEMIC_CLEARANCE|YES
HELP02_R02_ACADEMIC_CLEARANCE|YES
UNCHANGED_R01_QUESTIONS|NO_REREVIEW
CHV_FULL_SGK_WEBSITE_COMPLETENESS|NO
CHV_INDEPENDENT_READINESS_ACTIVATION|NO
MASTERY_ACTIVATION|NO
RELEASE_AUTHORIZATION|NO
```

## D. What the release lane must actually complete

1. Release Draft PR #671 currently limits website to B13+B14; **B12 is NOT included**. Now the B12 FIG source academic correction is cleared, release may integrate B12 **only** from this resolver + original 8 B12 formative and W12 + two reviewed R02 HELP cards, preserving the same 9 B12 canonical public IDs and one corrected FIG01.
2. R1 exact-source/ID matching against current release HEAD; test no old R01 FIG01/HELP01/HELP02 leaked and no duplicate canonical ID across main.
3. R2 browser/physical Safari+Android SVG, full Chapter V lesson/quiz/links/THCS regression, Golden UI and current-main conflict checks; R3–R4 honest readiness demo/no scoring; R5 owner explicit merge/deploy.
4. Independent chapter end-of-term Readiness candidate bank remains separate and cannot be counted as a live self-check until its official Final Submit pathway is tested and owner-authorized.

**Authoring checkpoint:** `ACADEMIC_SOURCE_RESOLVER_COMPLETE=YES_FOR_CHV_PUBLIC_FORMATIVE`; `DELTA_C_FIG01_SOURCE=LOCKED`, `FULL_CHV_WEBSITE=NOT_RELEASED`.
