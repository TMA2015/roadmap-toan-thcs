# TEMP W6 · CT18–20 geometry and mensuration mathematical validity/duplicate triage

**PACKET_ID:** `MATH-W6-CT18-20-EIGHT-SOURCE-CORRECTNESS-R0-20261021`  
**State:** TEMP_SOURCE_REVIEW_ONLY / INDEPENDENT_NOTEBOOKLM_NOT_REVIEWED / NO_LIVE_RELEASE  
**Pinned main commit:** `1f0f2ccb1ca40f62b78b8ccafefe2a64368a6214`  
**Scope:** eight *historical* Markdown exercise sources, three topics (18, 19, 20); do not manufacture eight new Written items.  
**Long-term sources to select separately:** permanent Master Plan v1.2.1 and NotebookLM Rules v1.2 (NOT copied/duplicated into this TEMP file).

## Academic review questions

For **each of 8 IDs**, evaluate mathematical statement, conditions/units, consistency of all numerical givens, worked-answer correctness, grade and tier using actual S1 material if available, overlap with active Practice and canonical Written, and whether a distinct paper solution is valuable. D1–D6 and source hierarchy rules remain binding. Outcomes may be `REUSE_EXISTING_INTERACTIVE`, `REUSE_EXISTING_WRITTEN`, `RETAIN_SOURCE_ONLY`, `REVISE_SOURCE_FIRST`, `NEW_WRITTEN_CANDIDATE`, `HOLD_INSUFFICIENT_EVIDENCE`. Never interpret PASS as release consent.

**Priority mathematical checks:**
- `20-WR-06`: **do not conflate `p` (half perimeter) with capital `P` (full perimeter)**. If `p` means half perimeter, `S_xq=p d` is correct. But (d=5) slant apothem and (h=8) vertical height cannot coexist in any nondegenerate regular pyramid. Check whether S_base=36 is possible with the given p under each meaning. Address remedy without silently changing original statement.
- `19-WR-06`: for concentric same-radius circles (R=r>0,d=0), the circles coincide; not a one-point internal tangency. Does the original condition require distinct circles?
- `19-WR-08`: reviewer must distinguish a convex nondegenerate quadrilateral from a crossed/degenerate point configuration.
- `19-CH-01`: source is a thematic note without actual numeric/constructive task; avoid invented new questions.
- `18-WR-09` vs `GEO18V1_029`: exact same values, answer; anti-clone is especially important.

## Original source inventory (Git blob SHA)

| Topic | Pinned Markdown | Git blob SHA |
|---|---|---|
| CT18 | `docs/kien-thuc/18-he-thuc-luong/bai-tap.md` | `91ed070cca1312663048df86fc68c04050e157cb` |
| CT19 | `docs/kien-thuc/19-duong-tron/bai-tap.md` | `8beca6002685639a092eafcd8a65d31b1e37ef1f` |
| CT20 | `docs/kien-thuc/20-hinh-hoc-tong-hop/bai-tap.md` | `003a0aa9d733c8fb44eb2db795600bb60e499f40` |

## Published Written baseline — 74 globally, 10 in CT18–20

**Canonical library Git blob:** `a8f19cea7f0f8b181e3cc1385ddbff13b75c252d`

| Canonical ID | Topic | Title and actual mathematical structure |
|---|---|---|
| `WX19-CIR-001` | CT19 | Cùng một cung, hai đại lượng khác đơn vị / Độ dài cung và diện tích quạt tròn |
| `WX19-CIR-002` | CT19 | Nhận ra nội tiếp rồi khai thác cặp góc đối / Dấu hiệu tứ giác nội tiếp và góc đối |
| `WX18-TRI-001` | CT18 | Chọn đúng cạnh đối – kề – huyền trước khi tính / Tìm cạnh bằng sin và cos |
| `WX18-TRI-002` | CT18 | Tách chênh cao khỏi chiều cao toàn vật / Góc nâng và chiều cao có tầm mắt |
| `WX20-GEO-001` | CT20 | Phân biệt chu vi đáy, diện tích đáy và chiều cao / Hình hộp chữ nhật: diện tích xung quanh và thể tích |
| `WX20-GEO-002` | CT20 | Cùng một hình nón, hai công thức dùng hai độ dài khác nhau / Hình nón: phân biệt chiều cao và đường sinh |
| `WX20-GEO-003` | CT20 | Rào quanh sân hay phủ kín mặt sân: đừng dùng nhầm công thức / Phân biệt chu vi và diện tích trong bài toán đo lường thực tế |
| `WX18-TRI-003` | CT18 | Kiểm tra bình phương ba cạnh trước khi kết luận góc vuông / Dùng định lí Pythagore đảo để nhận biết tam giác vuông |
| `WX19-CIR-003` | CT19 | Phân biệt cung nhỏ và cung lớn trước khi tính góc nội tiếp / Góc ở tâm và hai góc nội tiếp chắn hai cung bù nhau |
| `WX19-CIR-004` | CT19 | Từ khoảng cách tâm–dây đến nửa dây rồi so sánh cung / Đường vuông góc từ tâm đến dây và quan hệ dây–cung |

## Active Practice inventory, provenance not an endorsement

**All 15 active Practice shards were opened/parsed and their live contents counted: 132+147+195=474.** Matching skill labels or shared numbers are not automatically identical pedagogical tasks; check exact stems and worked answers.

| Topic | Manifest SHA | Active questions | Five shard blob SHAs in manifest order |
|---|---|---:|---|
| CT18 | `3a38cd8de28b455796326c8af30186742aba700a` | 132 | `203fc7d715895f5af1b7ca2e4f4e152f37c1fcc2`, `c14810bcb5f5e07d04d03fe8aec85d2ae7b7a787`, `95a9dcaea330f944f1d083cd3755e94ce3c59412`, `687a8687c277ee2373c8f27cddc16314019dc36d`, `71f774c79ca38cb84183ce8b4d9ba6b9a87776b3` |
| CT19 | `4529bf3a748257eed515cf4e7781e4cfc6c13db4` | 147 | `05c1458422a637cd0ed569d87075910d8912f316`, `1f39495a3fffd59325563c17da4e1e06ad3e7b0c`, `d16b8a64f63778aecd27b9f5b4418a621375bc31`, `022259644215f1bbec66afaa47dbca0e5564ff59`, `1b26d60d55da2cf14dcf6db9958154ffcc4ae710` |
| CT20 | `7fc4157bd2e56fa243b428ef0949583c589a3eb9` | 195 | `744bac663fac24bb02cd0625fb4213a1b451cdb7`, `150802b5f6be5dc24ec3efce046c2144f2f75501`, `b1f7043de9c4045a8ca8118cc8d73d14a85fff7f`, `dd4c8ef16a290bbc7d37c5093ce0f9e956066a8f`, `5b124db0c1f4d6a4c7ff6e08b9f1a6cbf0ba2a5d` |

**Exact related MCQs found (not a claim of complete semantic duplicate mapping):** `GEO18V1_029` (30m,45°,eye1.6m→31.6m), `CIR19V1_136–138` (circle position with R=5,r=3,d=8/4/2), `GEO19V1_008` (explicit convex cyclic-quad converse), `SYN20V1_163` (explicit semiperimeter p), `SYN20V1_164` (explicit full perimeter P), `SYN20V1_181` (cone r3,l5→15π), `GEO20V1_012` etc (simple cm-to-mm, not an established match to the composite volume task). Existing Written examples are tabulated above. Targeted anti-clone analysis is provisional.

## Exact verbatim original Markdown snippets — 8/8

The following content is copied verbatim from the cited original source. If a math statement is incomplete or inconsistent, **flag it rather than silently substituting a corrected problem**.

### `18-WR-09` — source 18-he-thuc-luong

**Triage risk (assistant preflight, NOT independent verdict):** Height modelling with eye level. Active GEO18V1_029 uses same 30m / 45° / 1.6m and answer 31.6m; WX18-TRI-002 has similar eye-height modelling. Distinctness risk.

~~~~markdown
#### 18-WR-09 · Chiều cao có mắt
Cách 30 m, góc nâng 45°, mắt cao 1,6 m. Tính chiều cao vật.

??? example "Xem lời giải"
    31,6 m.
~~~~

### `18-WR-10` — source 18-he-thuc-luong

**Triage risk (assistant preflight, NOT independent verdict):** Conceptual modelling: tan(alpha)=h/d requires horizontal adjacent length, not slant distance. Original source only asks why, not a distinct numeric Written.

~~~~markdown
#### 18-WR-10 · Mô hình
Vì sao không dùng khoảng cách nghiêng làm d trong tan α=h/d?

??? example "Xem lời giải"
    Tan dùng cạnh đối/kề; d phải là khoảng cách ngang.
~~~~

### `19-WR-06` — source 19-duong-tron

**Triage risk (assistant preflight, NOT independent verdict):** Potential edge case: internal tangency d=|R-r| assumes two distinct circles; for R=r and d=0 circles coincide rather than tangent at exactly one point. State radii and distance definitions clearly.

~~~~markdown
#### 19-WR-06 · Hai đường tròn
Nêu điều kiện tiếp xúc ngoài và tiếp xúc trong theo R,r,d.

??? example "Xem lời giải"
    Tiếp xúc ngoài: \(d=R+r\). Tiếp xúc trong: \(d=|R-r|\).
~~~~

### `19-WR-08` — source 19-duong-tron

**Triage risk (assistant preflight, NOT independent verdict):** Converse cyclic quadrilateral criterion. Original omits explicit convex/simple nondegenerate configuration. Active GEO19V1_008 states 'tứ giác lồi'. Verify assumptions and overlap.

~~~~markdown
#### 19-WR-08 · Tứ giác nội tiếp
Tứ giác ABCD có ∠A+∠C=180°. Nêu kết luận và dấu hiệu.

??? example "Xem lời giải"
    ABCD nội tiếp được một đường tròn vì hai góc đối bù nhau.
~~~~

### `19-CH-01` — source 19-duong-tron

**Triage risk (assistant preflight, NOT independent verdict):** Original is a topical note about intersecting-chord and tangent-secant products, NOT a fully specified solvable task; don't invent its missing givens or infer publication.

~~~~markdown
#### 19-CH-01 · Hệ thức tích
Hai dây cắt nhau và tiếp tuyến–cát tuyến là mở rộng mạnh, nhưng không gate KNTT Core.
~~~~

### `20-WR-06` — source 20-hinh-hoc-tong-hop

**Triage risk (assistant preflight, NOT independent verdict):** HIGH PRIORITY: source calls figure a regular pyramid but gives p=12cm undefined as perimeter vs semiperimeter; d=5cm slant apothem and h=8cm vertical height impossible together (d>=h). For p = semiperimeter formula Sxq=p*d is correct, not necessarily error. Volume arithmetic 96 uses inconsistent geometry. Active SYN20V1_163/164 explicitly distinguish half-perimeter from full perimeter. Do not silently replace p meaning or reuse inconsistent dimensions.

~~~~markdown
#### 20-WR-06 · Hình chóp đều
Chóp có p=12 cm,trung đoạn d=5 cm,Sđáy=36 cm²,h=8 cm. Tính Sxq,V.

??? example "Xem lời giải"
    \(S_{xq}=p\cdot d=60\) cm²; \(V=\frac13\cdot36\cdot8=96\) cm³.
~~~~

### `20-WR-08` — source 20-hinh-hoc-tong-hop

**Triage risk (assistant preflight, NOT independent verdict):** Cone side area and volume r=3,h=4,l=5. Active SYN20V1_181 repeats r=3,l=5→15π and WX20-GEO-002 covers slant vs vertical distinction; compare value of full paired-solution.

~~~~markdown
#### 20-WR-08 · Hình nón
Nón r=3 cm,h=4 cm,l=5 cm. Tính Sxq,V.

??? example "Xem lời giải"
    \(S_{xq}=\pi rl=15\pi\) cm²; \(V=\frac13\pi r^2h=12\pi\) cm³.
~~~~

### `20-WR-10` — source 20-hinh-hoc-tong-hop

**Triage risk (assistant preflight, NOT independent verdict):** Mixed units (2 m, 50 cm, 40 cm)→0.4m³; current targeted MCQs include easy cm→mm conversions, but not proof of an exact dimensional composite match. Verify deeper overlap.

~~~~markdown
#### 20-WR-10 · Đơn vị
Một khối hộp có kích thước 2 m,50 cm,40 cm. Tính thể tích theo m³.

??? example "Xem lời giải"
    Đổi 50 cm=0,5 m; 40 cm=0,4 m. \(V=2\cdot0,5\cdot0,4=0,4\) m³.
~~~~

## Requested independent reviewer machine verdict

Complete exactly 8 IDs, with a brief rationale and exact corrected mathematical statement when any `REVISE_SOURCE_FIRST` is required. S1 page/grade provenance is `INSUFFICIENT_S1` if absent; do not invent page citations. Reviewer may recommend **zero** new Written, even for several valid original tasks.

```text
PACKET_ID|MATH-W6-CT18-20-EIGHT-SOURCE-CORRECTNESS-R0-20261021
EXPECTED_SOURCE_ITEMS=8
REVIEWED_SOURCE_ITEMS=8
18-WR-09|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
18-WR-10|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
19-WR-06|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
19-WR-08|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
19-CH-01|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
20-WR-06|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
20-WR-08|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
20-WR-10|MATH:...|S1_LAYER:...|DISTINCTNESS:...|DISPOSITION:...
MISSING_IDS|none/...
DUPLICATE_IDS|none/...
UNEXPECTED_IDS|none/...
OVERALL|PASS_FOR_TRIAGE / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE
AUTHORIZATION|NO_LIVE_RELEASE
```

**Hard protections:** no live source, question banks, 74 canonical Written, original IDs, KNTT grades, Practice/Skill evidence, Core Readiness, Mastery, progress/history, CI, deploy or site changes from this review packet. NotebookLM cannot authorize release. If issues are confirmed, create separately bounded fixes and obtain Owner signoff after tests.
