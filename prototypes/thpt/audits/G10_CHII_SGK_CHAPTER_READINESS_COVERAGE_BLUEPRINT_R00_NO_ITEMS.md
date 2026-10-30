# Toán 10 KNTT — Chương II, Readiness outcome coverage blueprint R00 (NO ITEMS)

**STATE:** `SGK_CHAPTER_READINESS_BLUEPRINT_ONLY` · `NOT_REVIEWED_FOR_ASSESSMENT` · `NOT_ACTIVE` · `NO_SCORE/NO_MASTERY`.
**SOURCE:** SGK T1 ChII B03 pp.22–25, B04 pp.26–30, bài tập cuối ChII pp.31–32; SBT T1 B03 pp.16–18, B04 pp.19–23, bài tập cuối pp.24–28. **Owner-provided S1**, exact pagination from previously reviewed public D1–D6 source.
**PUBLIC_ACADEMIC_SOURCE:** `prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_D1D6_AUTHORING_R01_SNAPSHOT.md` (Draft authoring #631, Git blob `acea9776d1c7534a4cd0cd28e98db26dedf0c122`, scoped public formative Academic PASS). Technical release Draft #636 remains separately pending.
**LIMIT:** This planning table derives *outcome IDs* from the reviewed public D1–D6 snapshot. It contains **no real held-out assessment question, solution, distractor, key, rubric or `item_id`** and cannot establish a Readiness academic PASS.

## Proposed coverage without publishing protected item bodies

| Existing OUTCOME_ID | Evidence target (not an item) | Common misconception to detect |
|---|---|---|
| `G10-B03-LINEAR_INEQUALITY` | Nhận diện bất phương trình bậc nhất hai ẩn, yêu cầu (a,b) khác (0,0) | Nhầm biểu thức bậc hai hoặc hệ số cả hai bằng 0 |
| `G10-B03-POINT_TEST` | Thế cặp (x,y) để kết luận nghiệm và chọn điểm kiểm tra ngoài biên | Thử điểm O khi nằm trên đường biên |
| `G10-B03-BOUNDARY` | Vẽ đường biên và chọn loại nét theo dấu nghiêm ngặt/không nghiêm ngặt | Nhận đường biên vào nghiệm với dấu < hoặc > |
| `G10-B03-HALFPLANE` | Xác định nửa mặt phẳng nghiệm bằng phép thử điểm hợp lệ | Đảo sai phía nửa mặt phẳng khi biến đổi dấu |
| `G10-B03-MODELING` | Thiết lập biến/đơn vị/miền từ bài toán thực tế | Bỏ ràng buộc không âm và nguyên khi đếm vật |
| `G10-B04-SYSTEM` | Kiểm đồng thời mọi bất phương trình trong hệ | Chỉ kiểm một bất phương trình |
| `G10-B04-REGION_INTERSECTION` | Đọc và mô tả miền giao các nửa mặt phẳng | Lấy hợp thay vì lấy giao |
| `G10-B04-FEASIBILITY` | Phân biệt miền rỗng/bị chặn/không bị chặn và phạm vi tối ưu | Kết luận tồn tại cực trị khi miền không phù hợp |
| `G10-B04-LINEAR_OBJECTIVE` | Biết cách tìm/tư duy nghiệm tối ưu tại các đỉnh và trường hợp tối ưu cả cạnh | Bỏ trường hợp đạt cùng giá trị trên cạnh |
| `G10-B04-INTEGER_MODELS` | Đối chiếu nghiệm tối ưu liên tục với điều kiện nguyên/rời rạc | Tự động làm tròn nghiệm liên tục thành tối ưu nguyên |

## Readiness gate (same for all SGK chapters)

- [ ] Independently map all ten B03–B04 outcomes to true S1 scope, end-ChII exercise skills and assessment difficulty; obtain NotebookLM verdict specifically **for SGK_CHAPTER_READINESS**.
- [ ] Store each genuinely held-out question/key/solution/rubric outside publicly accessible Markdown/JS/GitHub Pages; maintain one canonical `item_id` with content_version/provenance. No backend/account creation without an owner-approved privacy and QA plan.
- [ ] Test exposure controls. An exact Core/Practice item already shown to a learner, even if academically PASS, is not new independent readiness evidence; use fresh protected material.
- [ ] In readiness mode do not show hints, D6, AI Tutor, solution, correctness indicators or answer key until **Final Submit**. Allow navigation/revision before submit.
- [ ] Validate real assessment scoring/attempt integrity before enabling official scoring or Skill Mastery; demo state stays `NO_SCORE/NO_MASTERY`.
- [ ] Check SGK Chapter vs Topic Readiness separation, no leakage across paths; Golden R4/THCS/browser/mobile QA on exact integration commit; explicit owner merge/deploy decision required.

**NEXT:** following Chapter I blueprint, this Chapter II outcome-only plan is safe for design work but the next actual held-out questions require a privacy-preserving delivery/review scheme. Until then `CHII_COMPLETE=NO`, `RD_ACTIVE=NO`, `MASTERY=OFF`.
