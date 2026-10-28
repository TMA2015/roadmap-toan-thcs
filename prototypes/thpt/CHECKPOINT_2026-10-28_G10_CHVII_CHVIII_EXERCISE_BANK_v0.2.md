# CHECKPOINT 2026-10-28 · G10 Chương VII–VIII — Exercise Bank v0.2

**Owner mandate:** tiếp tục phát triển chương khác trong Draft PR #612, **không chờ** người dùng tải ChVI NotebookLM batch. **Không gửi thông báo nếu không có quyết định chủ dự án**. Không merge/deploy, không Academic PASS, không sửa Golden UI R4/THCS.

## 1. Delta so với checkpoint v0.1

| Thành phần | v0.1 | Delta v0.2 | Tổng hiện tại |
|---|---:|---:|---:|
| ChVII B19–22 Core/Practice/Application | 24 | +8 Practice P05/P06 | **32** |
| ChVIII B23–25 Core/Practice/Application | 18 | +6 Practice P05/P06 | **24** |
| Written (2 nhãn Anchor thuộc Written) | 7 | 0 | **7** |
| **Item có đề + lời giải** | **49** | **+14** | **63** |
| Readiness coverage blueprint, không có stem/key | 14 slots | 0 | **14 slots, chưa có item** |
| Outcome / skill candidates có mapping | bản tóm tắt | ma trận 35 outcome | **35 DRAFT** |
| Hình SVG tự dựng | 0 | +4 | **4 DRAFT** |

**Mới:** `shared-items/THPT_G10_CHVII_CHVIII_ADVANCED_PRACTICE_CANDIDATES_v0.2.md` (14 bài P05/P06, có đề, đáp án, giải, gợi ý, phân tầng); `THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.2.md` (35 outcome ứng viên map đủ 63 ID, placement hai nhánh); `visuals/` (4 SVG B19 giao điểm, B21 tiếp tuyến, B22 tiêu điểm/đường chuẩn, B23 cây quy tắc nhân) + README.

**Giữ nguyên:** 42 câu C/P v0.1, 7 Written v0.1, 14 slots readiness chỉ là blueprint. Không nhân bản item, không chuyển bài đã công bố đáp án thành held-out assessment. Chuyên đề chỉ Kiến thức / Luyện tập / Tự kiểm tra, không có Core tab; SGK có Core theo bài và Readiness cuối **chương**. Topic Readiness chưa biên soạn.

## 2. S1 source boundary correction — đã đối chiếu lại ảnh quét có nhãn trang in

| Phần | SGK Toán 10 KNTT tập 2 — **trang in đúng** | SBT tập 2 — trang in |
|---|---|---|
| ChVII toàn chương | **29–58** | 27–49 |
| B19 | **29–34** | 27–31 |
| B20 | 35–41 | 31–38 |
| B21 | 42–46 | 38–41 |
| B22 | **47–56** | **41–45** |
| Bài tập cuối ChVII | **57–58** | 46–49 |
| ChVIII toàn chương | **59–79** | 50–59 |
| B23 | **59–64** | 50–52 |
| B24 | 65–71 | 53–54 |
| B25 | 72–77 | 55–56 |
| Bài tập cuối ChVIII | 78–79 | 57–59 |

**Bằng chứng hình trang gốc:** ảnh có nhãn SGK **printed p29** hiển thị đồng thời mở ChVII và B19; **printed p57** có tiêu đề *Bài tập cuối Chương VII*; **printed p59** mở ChVIII và B23. SBT **printed p50** mở ChVIII và B23, **p53** mở B24, **p55** mở B25, **p57** mở bài tập cuối. Các phạm vi p29–60/p60–79 từ checkpoint cũ là **off-by-one/scope drift**, đã sửa trong receipts và ngân hàng. **Chưa** kiểm toán từng hoạt động/hình/câu SGK/SBT nên S1 chỉ `SOURCE_STRUCTURE_VISUALLY_VERIFIED`.

## 3. QA có bằng chứng

- **14/14** bài Practice mới được tính lại độc lập bằng SymPy, phép đếm vét cạn và công thức tổ hợp: PASS (các bài B19-P05/P06 ... B25-P05/P06). Đây là *internal mathematical checks*, không phải NotebookLM academic verdict.
- Kiểm tra cross-file trực tiếp trên GitHub: **24 + 18 + 14 + 7 = 63 ID duy nhất**, đủ trường đề/đáp án/giải/hint cho 14 bài mới; **35 outcome** map đầy đủ 63 item; **14 readiness slots** không chứa đề/đáp án: PASS.
- `scripts/test-thpt-g10-chvii-chviii-draft-bank.cjs` đã mở rộng kiểm tra 14 câu mới, mapping 35 outcome, 4 SVG accessible/không script, trang in SGK đúng, không lộ item vào preview. **CI kết luận phải xem run mới nhất**; không tự ghi PASS khi run còn pending/cancelled.
- Bốn SVG là **source có thể chỉnh sửa**, có title/desc; không có HTML nghiệm thu mới và không có route mới.

## 4. Rủi ro / backlog không đòi owner quyết định ngay

1. **S1 deep audit còn thiếu:** đối chiếu từng activity/figure/SBT outcome, nhất là B22 hình conic, B24 điều kiện tổ hợp, B25 mở rộng hệ số lẻ; chưa gọi là đủ SGK.
2. **Academic scope flags:** B22-C01 dùng khái niệm tâm sai `e=c/a` (cần xác nhận đúng phạm vi SGK); B25-P02 số hạng không chứa x với lũy thừa âm và B25-P06 tổng hệ số bậc lẻ (có thể là mở rộng). Giữ ứng viên ADVANCED/REVIEW_SCOPE, không gán Core/mastery chính thức.
3. **Readiness:** 14 slots là ma trận chưa có câu, không có khóa bí mật hoặc storage/exposure gate. Chưa thể phát hành đánh giá độc lập.
4. **Knowledge:** chưa dựng đầy đủ các trang Kiến thức SGK/Topic, chưa có đối chiếu NotebookLM cho VII/VIII; chỉ có bank và SVG internal.
5. **Source VI:** gói `Temp_THPT_G10_CHVI_NOTEBOOKLM_REVIEW_BATCH_20261028.zip` vẫn do owner giữ để tự gửi khi thuận tiện; không lặp review hay đòi upload. Không chuyển verdict VI sang VII/VIII.

## 5. Hướng tiếp theo khi tự động tiếp tục

- Ưu tiên **deep source audit** B19–25 và nâng độ phủ kiến thức, hình/đồ thị, bài cuối chương, không thêm câu trùng ID.
- Sau khi xác minh đủ scope và có bộ review thật, chuẩn bị `Temp_` Markdown/TXT hoặc ZIP 3+ file kèm prompt 3–6 câu theo Project Sources 06/07. **Không tự gửi NotebookLM** và không yêu cầu owner upload khi đang không dùng máy tính.
- Duy trì shared canonical ID, role placements theo Project Source 08 v2.0, exposure-safe held-out Readiness. Không merge/deploy.

**Gates:** `CHVII_VIII_ITEMS=63_DRAFT_NOT_ACADEMICALLY_REVIEWED`; `OUTCOMES=35_PROVISIONAL`; `VISUALS=4_INTERNAL_DRAFT`; `READINESS=14_BLUEPRINT_ONLY`; `S1=STRUCTURE_VERIFIED_NOT_DEEP_AUDIT`; `CHVI_NOTEBOOKLM_VERDICT=USER_PENDING`; `ACADEMIC_PASS=NO`; `MERGE_DEPLOY=NO`.
