# G10 SGK Chương I — ONE whole-chapter source reconciliation: B01–B02 + Chapter Readiness

**Owner order:** first chapter in G10→G11→G12 SGK-first progression. This is a **legacy component-review consolidation**, not a new blanket NotebookLM PASS and NOT formal release of the protected Chapter Readiness. Target `G10-SGK-CHI`.

## 1. Complete authoring-source components (exact existing reviewed material)

| Learning function | Exact source/reviewer reference | Scope evidence |
|---|---|---|
| B01–B02 D1–D6 SGK Theory/Core/Practice/Written/FIG/HELP | Frozen source `prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `95a554e31a613b8e215679fe6790738473d598df`; reviewer receipt `THPT_G10_CHI_B01_B02_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md` blob `fece80dcb4b0e17d369e2ecbe12e8d13b672281a` | 11/11 outcomes; 7 worked examples; 16 formative (4 Core+12 Practice); 2 Written/Anchor; 2 SVG; 4 HELP; independent PASS for public formative D1–D6 |
| Current real public canonical JS | `docs/assets/javascripts/thpt-chi-reviewed-formative-v1.js` Git blob `bfc61f3d0b51f5b58fb663e5e8bb391918e77d4c` | Current main: 16/16 unique item IDs, 4 Core, 12 Practice, no private RD1 in this bank |
| Written/Anchor | `docs/thpt-preview/thu-vien/tu-luan-chuong-i.md` Git blob `1e9d93509213bffd3a8437ee209bd55383abec7e` | Current main: two distinct canonical Written IDs `THPT-G10-CHI-W01`, `THPT-G10-CHI-W02-ANCHOR` |
| Chapter RD0 and RD1 independent assessment SOURCE | `prototypes/thpt/content-drafts/THPT_G10_CHI_CHAPTER_READINESS_RD0_RD1_R02_NOTEBOOKLM_ACADEMIC_PASS_RECEIPT_20261031.md` on Draft #669, exact private `Temp_G10_CHI_SGK_CHAPTER_READINESS_RD0_RD1_R02_20261031.md`, SHA256 `2fca5da0279db961b12d4b553dd6a38258bd04ca30e5ad4106a636753f78d98f` | independent NotebookLM R02: RD0 11/11 including 1 non-double-counted SET_EQUALITY merge; RD1 `THPT-G10-CHI-RD1-01`..`14` 14/14 PASS; P0/P1/P2=0 |
| Permanent private RD1 canonical source | `_INTERNAL_THPT_G10_CHI_RD1_R02_CANONICAL_REVIEWED_20261031.md`, SHA256 `a3c3410555b86b2186bcfe342f3cb084475a37c4777d2fb9b1c8562433d40d32` in private ChatGPT Library | 14/14 unchanged reviewed item candidates; private source restored and manifest PASS under prior nine-chapter custody audit |

## 2. Evidence of the learner path on main (31/10 check)

- Public lesson pages `docs/thpt-preview/sgk/chuong-i/bai-1.md` and `bai-2.md` exist and link to Chapter practice. Public `luyen-tap.md` has links for B1 Core/Practice and B2 Core/Practice; `data-thpt-open-quiz` links: `b1-core`, `b1-practice`, `b2-core`, `b2-practice`.
- Current `docs/assets/javascripts/thpt-chi-reviewed-formative-v1.js`: exact 16 distinct IDs (4 Core + 12 Practice), 0 held-out Chapter RD1; current Written library two canonical IDs. These are public formative and self-checked Written with no official Skill Mastery.
- **Crucial non-completion:** `docs/thpt-preview/sgk/chuong-i/tu-kiem-tra-chuong.md` explicitly states `Bài Tự kiểm tra cuối chương chưa mở`, contains **no 14-item Chapter Readiness content**, no scoring and no Mastery updates. This is safe but **not a functioning end-of-chapter learning path yet**.
- PR #635 was merged for public B01–B02 formative scope only. Do not represent that partial publication as the whole chapter's official complete release.

## 3. Authoring verdict and one-release handoff

- `D1_D6_PUBLIC_FORMATIVE=ACADEMIC_PASS_R01`, `SGK_CHAPTER_RD0_RD1=ACADEMIC_PASS_R02`, both unchanged and separately source-locked. **Do not re-review these unchanged component snapshots.**
- `AUTHORING_FULL_CHAPTER_SOURCE_COMPOSITION=COMPLETE_FROM_PRIOR_APPROVED_COMPONENTS` subject to **exact source-ID parity** on later release integration. This records the existing legacy mosaicked review history; it is not a claim a single new whole-chapter NotebookLM batch was run.
- The package is logically ready for **one complete learner-path integration by release lane**, not a second authoring pass. Release lane must link/implement Chapter-end Final Submit without pre-submit hint/correctness/solution and without enabling official Mastery unless owner specifically authorizes independently validated assessment. Keep private canonical bank outside public JS until the approved release architecture is explicit.
- `RELEASE_R1_R5_FOR_CHAPTER_READINESS=HOLD`: actual main Chapter Readiness is inactive. Exact-head browser/mobile/THCS regression, links, source parity, learner state and owner permission still required. `G10_CHI_WHOLE_CHAPTER_PUBLISHED=NO`.
- Post-authoring chapter academic source is frozen. A later critical defect goes through incident/Delta_C, not random late content-review rounds.

**Next chapter order after authoring source handoff:** G10 Chapter II (B03–B04), then III→IX; do not switch to Topic. Release integration of pending Chapter I may proceed concurrently only in release lane.
