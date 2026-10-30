# Toán 10 KNTT · Chương VII — SGK Chapter Readiness RD0 R01 (sau verdict REVISE)

**STATE:** `ASSESSMENT_BLUEPRINT_REVISION_CANDIDATE` · `NOT_ACADEMICALLY_CLEARED_RD0` · `NOT_ACTIVE` · `NO_SCORE/NO_MASTERY` · `NO_PRIVATE_ITEMS`.
**SCOPE:** `SGK_CHAPTER_READINESS:G10:CHVII`. R00 snapshot trước verdict giữ tại `prototypes/thpt/audits/G10_CHVII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md` Git blob `69e64ebcbc532c84c4956db1215415e131d8a9a6`; **không sửa bản R00 lịch sử**.

**PACKET:** `THPT-G10-CHVII-CHVIII-SGK-CHAPTER-READINESS-RD0-20261030-R01`; **verdict owner-supplied NotebookLM:** `ACADEMIC_RD0_OVERALL=REVISE`, `P0=0`, `P1=4`, `P2=3`, `EXPECTED=REVIEWED=35`, 0 missing/extra/duplicate; `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `RELEASE_AUTHORIZATION=NO`.

**SOURCE:** reviewed public outcome/placement v0.4 Git blob `a145b898e13ef88dbc5d37e879b243a1e6e880a3`, public A1–A7 evidence main blob `f9997fc36bc511cc73d96f1a5f4141d7a5b43358`; reviewer RD0 verified S1 per reported sources, **not independently reproduced from original PDF in this update**. Reviewer supplied different SGK page ranges than repository's 28/10 direct visual S1 receipt. Treat the page offsets as `S1_PAGINATION_CONFLICT_HOLD`; preserve prior page citations until source images are reconciled, do not silently replace them.

**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for mandatory assessment scope/classification changes, `RD0_REVIEWER_REVISE_IMPLEMENTED_AS_CANDIDATE`; no author-awarded `ACADEMIC_RD0_PASS` or activation. Reviewer has not assessed actual private item bank under this version.

## Ma trận mục tiêu sau phân loại reviewer (đề xuất R01)

| Outcome ID (unchanged) | Reviewer RD0 disposition | Năng lực cần đánh giá (R00 unchanged) | R01 scope/delta cần giữ |
|---|---|---|---|
| `G10-B19-NORMAL_DIRECTION` | `CORE_KEEP` | Pháp tuyến/chỉ phương | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B19-GENERAL_POINT` | `CORE_KEEP` | Tổng quát qua điểm và song song | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B19-PARAMETRIC` | `CORE_KEEP` | Phương trình tham số | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B19-TWO_POINTS` | `CORE_KEEP` | Đường thẳng qua hai điểm | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B19-MEMBERSHIP` | `CORE_KEEP` | Điểm thuộc đường | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B19-MULTISTEP` | `CORE_KEEP` | Giao điểm và vuông góc tích hợp | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B19-LINEAR_MODEL` | `SUPPORT_ONLY` | Mô hình tuyến tính | Public S1 vận dụng mô hình tuyến tính; không bắt buộc là mục chứng cứ riêng của Core. |
| `G10-B20-RELATIVE_POSITION` | `CORE_KEEP` | Song song/trùng/cắt và tham số | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B20-PERPENDICULAR` | `CORE_KEEP` | Vuông góc và đường qua điểm | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B20-INTERSECTION` | `CORE_KEEP` | Giao điểm hai đường | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B20-DISTANCE` | `CORE_KEEP` | Khoảng cách điểm–đường | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B20-ANGLE` | `CORE_KEEP` | Góc giữa hai đường | Góc giữa hai đường thẳng lấy góc nhỏ (0°–90°), công thức trị tuyệt đối; nhận đúng điều kiện hai VTPT khác không. |
| `G10-B21-CIRCLE_STANDARD` | `CORE_KEEP` | Phương trình chính tắc, tâm, bán kính | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B21-CIRCLE_GENERAL` | `CORE_KEEP` | Hoàn thành bình phương, điều kiện bán kính | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B21-CIRCLE_TANGENT` | `CORE_KEEP` | Tiếp tuyến, tiếp xúc | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B21-CIRCLE_THROUGH_POINTS` | `CORE_KEEP` | Qua hai/ba điểm và tâm có điều kiện | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B21-LINE_CIRCLE_POSITION` | `MERGE_COVERAGE_WITH_TANGENT_DISTANCE` | Vị trí đường và đường tròn | Gộp mục tiêu đo với CIRCLE_TANGENT và DISTANCE; **giữ nguyên canonical outcome ID**, không xoá kỹ năng/đề gốc. |
| `G10-B22-ELLIPSE_PARAMETERS` | `CORE_KEEP` | Elip, tiêu điểm, trục, tham số | Core: elip chính tắc, a,b,c, tiêu điểm, trục, a²−b²=c²; **loại tâm sai e=c/a khỏi yêu cầu Core Readiness**. Public B22-C01 vẫn optional, Core theo B22-P01 / W22-01. |
| `G10-B22-HYPERBOLA_PARAMETERS` | `CORE_KEEP` | Hypebol, tiêu điểm, đỉnh | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B22-HYPERBOLA_ASYMPTOTES` | `OPTIONAL` | Tiệm cận hypebol | Reviewer đánh dấu OPTIONAL trong RD0, không lấy làm cổng bắt buộc; kiểm tra khác biệt nội dung công khai nếu có. |
| `G10-B22-PARABOLA_FOCUS` | `CORE_KEEP` | Parabol, tiêu điểm, đường chuẩn | Giữ mục tiêu hiện có; reviewer RD0 không yêu cầu sửa nội dung toán. |
| `G10-B22-CONIC_INTERSECTION` | `SUPPORT_ONLY` | Điểm trên conic và giao tuyến | SGK vận dụng bổ trợ; không áp làm kỹ năng Core bắt buộc riêng. |
| `G10-B22-CONIC_MODEL` | `SUPPORT_ONLY` | Ứng dụng hình học conic | Bài vận dụng mô hình conic, không buộc hiện diện như câu Core độc lập. |

### Rủi ro và nguyên tắc bảo toàn

- `THPT-G10-CHVII-RD02` đã lộ nghiệm/từng bị kết luận RETIRED, tuyệt đối không được dùng làm held-out item. Hình học B22-C01 tâm sai đã phân tầng ELECTIVE_SPECIALIZED trong public source; không tạo skill ID thay thế.
- `CORE_KEEP` chỉ là **target coverage**, không bắt buộc một câu độc lập cho từng dòng. `SUPPORT_ONLY` và `OPTIONAL` vẫn giữ ID canonical để phục vụ học tập/phân tầng, **không** xóa dữ liệu học viên, không chỉnh runtime schema.
- `MERGE_COVERAGE` là gộp chứng cứ kiểm tra, **không** đổi ID hoặc gộp 2 nội dung toán thành một item canonical.
- Không chứa bất kỳ stem/key/rubric/đề kín; không dùng nguyên câu public làm chứng cứ độc lập; Readiness cuối chương tách Topic Readiness, không hint/Tutor/đúng-sai trước Final Submit, demo `NO_SCORE/NO_MASTERY`.

### Gate để chốt

- [x]  23/23 expected canonical outcome IDs đối chiếu với R00, 0 duplicate; metadata-only, 0 item.
- [x] 4 P1 + 3 P2 NotebookLM phân loại, áp dụng phần phù hợp ở lớp **coverage thiết kế**; canonical item bank/readiness untouched.
- [ ] Reviewer chấp thuận bản phân tầng **R01** sau thay đổi `DELTA_C`, đặc biệt n=4/5, optional vs Core, và việc gộp outcome; cổng `ACADEMIC_RD0_PASS` vẫn HOLD.
- [ ] Đối chiếu lại trích dẫn trang in gốc SGK/SBT do reviewer RD0 và trực quan repo không trùng, không tự thay.
- [ ] Owner-approved secure storage/exposure/scoring; real held-out items reviewed exact content_version; Final Submit QA, physical UAT, permission to release. Không nhập private stem/key/rubric vào GitHub/public bundle.

**VERDICT SNAPSHOT:** `ACADEMIC_RD0_OVERALL=REVISE` / `ASSESSMENT_ITEM_BANK=NOT_REVIEWED` / `RELEASE_AUTHORIZATION=NO`.
