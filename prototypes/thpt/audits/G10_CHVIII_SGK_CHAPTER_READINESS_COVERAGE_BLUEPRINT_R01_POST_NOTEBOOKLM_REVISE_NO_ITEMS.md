# Toán 10 KNTT · Chương VIII — SGK Chapter Readiness RD0 R01 (sau verdict REVISE)

**STATE:** `ASSESSMENT_BLUEPRINT_REVISION_CANDIDATE` · `NOT_ACADEMICALLY_CLEARED_RD0` · `NOT_ACTIVE` · `NO_SCORE/NO_MASTERY` · `NO_PRIVATE_ITEMS`.
**SCOPE:** `SGK_CHAPTER_READINESS:G10:CHVIII`. R00 snapshot trước verdict giữ tại `prototypes/thpt/audits/G10_CHVIII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md` Git blob `118d7654a3d7b346d1f9f0236c1927e801f39c2e`; **không sửa bản R00 lịch sử**.

**PACKET:** `THPT-G10-CHVII-CHVIII-SGK-CHAPTER-READINESS-RD0-20261030-R01`; **verdict owner-supplied NotebookLM:** `ACADEMIC_RD0_OVERALL=REVISE`, `P0=0`, `P1=4`, `P2=3`, `EXPECTED=REVIEWED=35`, 0 missing/extra/duplicate; `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `RELEASE_AUTHORIZATION=NO`.

**SOURCE:** reviewed public outcome/placement v0.4 Git blob `a145b898e13ef88dbc5d37e879b243a1e6e880a3`, public A1–A7 evidence main blob `f9997fc36bc511cc73d96f1a5f4141d7a5b43358`; reviewer RD0 verified S1 per reported sources, **not independently reproduced from original PDF in this update**. Reviewer supplied different SGK page ranges than repository's 28/10 direct visual S1 receipt. Treat the page offsets as `S1_PAGINATION_CONFLICT_HOLD`; preserve prior page citations until source images are reconciled, do not silently replace them.

**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for mandatory assessment scope/classification changes, `RD0_REVIEWER_REVISE_IMPLEMENTED_AS_CANDIDATE`; no author-awarded `ACADEMIC_RD0_PASS` or activation. Reviewer has not assessed actual private item bank under this version.

## Ma trận mục tiêu sau phân loại reviewer (đề xuất R01)

| Outcome ID (unchanged) | Reviewer RD0 disposition | Năng lực cần đánh giá (R00 unchanged) | R01 scope/delta cần giữ |
|---|---|---|---|
| `G10-B23-ADDITION` | `CORE_KEEP` | Quy tắc cộng trong các nhóm rời nhau | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B23-MULTIPLICATION` | `CORE_KEEP` | Quy tắc nhân các bước và mô hình | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B23-DIGIT_COUNT` | `CORE_KEEP` | Đếm chữ số có/không lặp | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B23-CASE_SPLIT` | `CORE_KEEP` | Chia trường hợp không trùng | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B24-PERMUTATION` | `CORE_KEEP` | Hoán vị, giai thừa, xếp kề nhau | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B24-ARRANGEMENT` | `CORE_KEEP` | Chỉnh hợp, chọn chức danh | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B24-COMBINATION` | `CORE_KEEP` | Tổ hợp chọn nhóm | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B24-CONSTRAINTS` | `CORE_KEEP` | Chọn nhóm có điều kiện và phân vai | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B25-NEWTON_EXPANSION` | `CORE_KEEP` | Hệ số Newton và khai triển | SGK Core theo reviewer chỉ ở khai triển n≤5 (đặc biệt n=4,5). **Không giao n≥6** như chuẩn bắt buộc trước khi S1 xác minh; không thay nội dung public đã review. |
| `G10-B25-COEFFICIENT_SIGN` | `CORE_KEEP` | Hệ số bậc k có dấu | Xử lý dấu đúng từng số hạng trong khai triển mức n≤5; không tự coi bài n=6,7 là bắt buộc. |
| `G10-B25-CONSTANT_TERM` | `CORE_KEEP` | Số hạng không chứa x | Core: số hạng không chứa x ở dạng lũy thừa không âm n≤5. Public `B25-P07` đã PASS D3 ở n=5; `B25-P02/P05` hỗ trợ mở rộng, không yêu cầu x⁻¹ trong Core. Cần ra câu độc lập có giá trị phân biệt, không chép P07. |
| `G10-B25-COEFFICIENT_SUM` | `OPTIONAL` | Tổng hệ số, tổng bậc lẻ | Tổng hệ số/tổng hệ số bậc lẻ được reviewer RD0 đánh dấu OPTIONAL, không làm Core Readiness gate. Không xóa canonical ID hoặc nội dung public. |

### Rủi ro và nguyên tắc bảo toàn

- Hai candidate cũ `THPT-G10-CHVIII-RD05/RD06` chứa n=6/7, dù từng được review tính đúng toán học vẫn `HOLD_CORE_SCOPE` do phân tầng tranh chấp; chưa có câu/khoá/engine được phát hành.
- `CORE_KEEP` chỉ là **target coverage**, không bắt buộc một câu độc lập cho từng dòng. `SUPPORT_ONLY` và `OPTIONAL` vẫn giữ ID canonical để phục vụ học tập/phân tầng, **không** xóa dữ liệu học viên, không chỉnh runtime schema.
- `MERGE_COVERAGE` là gộp chứng cứ kiểm tra, **không** đổi ID hoặc gộp 2 nội dung toán thành một item canonical.
- Không chứa bất kỳ stem/key/rubric/đề kín; không dùng nguyên câu public làm chứng cứ độc lập; Readiness cuối chương tách Topic Readiness, không hint/Tutor/đúng-sai trước Final Submit, demo `NO_SCORE/NO_MASTERY`.

### Gate để chốt

- [x]  12/12 expected canonical outcome IDs đối chiếu với R00, 0 duplicate; metadata-only, 0 item.
- [x] 4 P1 + 3 P2 NotebookLM phân loại, áp dụng phần phù hợp ở lớp **coverage thiết kế**; canonical item bank/readiness untouched.
- [ ] Reviewer chấp thuận bản phân tầng **R01** sau thay đổi `DELTA_C`, đặc biệt n=4/5, optional vs Core, và việc gộp outcome; cổng `ACADEMIC_RD0_PASS` vẫn HOLD.
- [ ] Đối chiếu lại trích dẫn trang in gốc SGK/SBT do reviewer RD0 và trực quan repo không trùng, không tự thay.
- [ ] Owner-approved secure storage/exposure/scoring; real held-out items reviewed exact content_version; Final Submit QA, physical UAT, permission to release. Không nhập private stem/key/rubric vào GitHub/public bundle.

**VERDICT SNAPSHOT:** `ACADEMIC_RD0_OVERALL=REVISE` / `ASSESSMENT_ITEM_BANK=NOT_REVIEWED` / `RELEASE_AUTHORIZATION=NO`.
