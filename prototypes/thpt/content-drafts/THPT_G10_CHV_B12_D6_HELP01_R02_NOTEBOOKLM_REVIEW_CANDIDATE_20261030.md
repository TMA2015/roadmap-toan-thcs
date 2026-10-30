# Temp · NotebookLM THPT Toán 10 KNTT · B12 D6 HELP01 · Delta C R02 review candidate

**PACKET_ID:** `THPT-G10-CHV-B12-D6-HELP01-DELTA-C-R02-20261030-CANDIDATE`  
**MASTER_PLAN_VERSION:** THPT-v2.0 — SGK_CHAPTER, PUBLIC_FORMATIVE_ONLY, Bài 12; kiến trúc Dual Complete Learning Paths.  
**STATE:** `REVIEW_CANDIDATE / NOT_ACADEMICALLY_APPROVED`; không phải nội dung phát hành.  
**REVIEW_BASE:** Gói học liệu R01 ChV B12–B14, reviewer đã báo PASS trong phạm vi lúc review; kiểm toán tiếp phát hiện một điểm bất nhất trong chính thẻ HELP01.  
**BASE_SOURCE_COMMIT:** nguồn R01 Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7`, file `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md` (PR #639).  
**INDEPENDENT_REVIEW:** NotebookLM, dùng **đúng 5 Permanent Sources THPT v2.0**: (1) `01_THPT_MASTER_PLAN_v2.0.md`, (2) `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`, (3) `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`, (4) `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`, (5) `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`.

## 1. Phạm vi duy nhất và S1

- **EXPECTED_HELP_ID:** `HELP-G10-B12-01` (chỉ 1, không thêm ID mới). **OUTCOME_ID:** `G10-B12-ABS_ERROR`.
- **LINKED_CANONICAL_ITEM_ID (NO CHANGE):** `THPT-G10-B12-C02`; nội dung câu, đáp án, gợi ý, lời giải, role và content version R01 đều giữ nguyên.
- **SGK Toán 10 KNTT Tập 1, Bài 12:** trang in **74–75**, mục số đúng/số gần đúng và sai số tuyệt đối; đối chiếu nguyên bản scan do chủ dự án lưu trên Drive. **SBT Toán 10 KNTT Tập 1 trang in 72–73**, phần A Kiến thức cần nhớ và Ví dụ/Bài tập 5.1–5.2. Các trang S1 được kiểm tra bằng ảnh trang của PDF gốc; không đính kèm hình hoặc sao chép nguyên trang SGK/SBT.
- Trong ký hiệu KNTT: **a là số gần đúng**, **\(\bar a\) là số đúng**. Sai số tuyệt đối **\(\Delta_a=|a-\bar a|\)**. Biết độ chính xác \(d\) thường cho **\(\Delta_a\le d\)**, suy ra **\(a-d\le\bar a\le a+d\)**; không suy \(\Delta_a=d\) nếu không có đủ dữ liệu. Tránh đảo vai trò số đúng và số gần đúng.
- **Tách biệt:** `HELP-G10-B12-02` đã được chủ dự án trả verdict NotebookLM R02 **PASS** riêng; gói này **không** xem xét lại HELP02, D1–D5, B13/B14, hay câu đánh giá độc lập/Readiness.

## 2. Bản R01 đang lưu (đoạn gốc cần kiểm tra, không chỉnh bản lưu lịch sử)

`HELP-G10-B12-01` — Nhầm sai số thực với độ chính xác.

1. **Nhận diện lỗi:** Nhầm sai số thực với độ chính xác.
2. **Dấu hiệu / tự chẩn đoán:** “Nói Δ=d dù không biết số đúng. Em đã biết chính xác a chưa?”
3. **Kiến thức gốc:** “Nếu chỉ biết |a−ā|≤d thì Δ chưa xác định, chỉ có giới hạn.”
4. **Tự sửa:** “Giải lại khoảng có thể của a từ ā±d và phát biểu điều không suy ra.”
5. **Luyện lại:** `THPT-G10-B12-C02`.

**Điểm nghi vấn:** Bước 2 hỏi “đã biết chính xác a chưa?” dễ khiến học sinh hiểu a là số đúng, trong khi a chính là giá trị gần đúng đã cho. Bước 4 yêu cầu tìm khoảng cho **a** từ **\(\bar a\pm d\)** trong tình huống a đã biết nhưng \(\bar a\) chưa biết; cần xác định khoảng của **số đúng \(\bar a\)** từ **\(a\pm d\)**. Điều kiện tổng quát \(|a-\bar a|\le d\) bản thân là đúng nhưng hướng dẫn tự sửa không đúng ngữ cảnh. **Đề nghị reviewer xác định P0/P1/P2 và đánh giá DELTA_C**, không tự kết luận PASS hay mức severity trước review.

## 3. Đề xuất R02 — một thẻ D6 đủ năm bước, cùng HELP_ID

### `HELP-G10-B12-01` · Nhầm độ chính xác d với sai số tuyệt đối thực tế

- **OUTCOME:** `G10-B12-ABS_ERROR`.
- **1. Nhận diện lỗi:** Coi độ chính xác \(d\) là sai số tuyệt đối thực tế \(\Delta_a\), dù không biết số đúng.
- **2. Dấu hiệu / tự chẩn đoán:** Em đã viết \(\Delta_a=d\) chỉ vì đề cho độ chính xác \(d\)? Đề đã cho số đúng \(\bar a\), hay mới chỉ cho số gần đúng \(a\) và cận sai số \(d\)?
- **3. Kiến thức gốc:** \(a\) là số gần đúng, \(\bar a\) là số đúng; \(\Delta_a=|a-\bar a|\). Nếu chỉ biết \(\Delta_a\le d\) thì không thể kết luận \(\Delta_a=d\); ta chỉ biết \(a-d\le\bar a\le a+d\).
- **4. Tự sửa:** Với số gần đúng \(a\) và độ chính xác \(d\), hãy lập đúng khoảng \([a-d;a+d]\) chứa **số đúng** \(\bar a\), rồi phát biểu rõ “sai số tuyệt đối **không quá** \(d\)”, không ghi bằng \(d\) khi chưa biết sai số thực. Ví dụ liên hệ câu Core C02: \(a=12{,}3\,\mathrm{cm}\), \(d=0{,}2\,\mathrm{cm}\) thì \(\bar a\in[12{,}1;12{,}5]\,\mathrm{cm}\), chứ chưa biết \(\Delta_a=0{,}2\).
- **5. Luyện lại bằng ID sẵn có:** `THPT-G10-B12-C02` (không sao chép câu, không đổi đáp án hay lời giải).

## 4. Kiểm tra tác động / bảo toàn

- **AFFECTED:** chỉ `HELP-G10-B12-01`; cùng outcome `G10-B12-ABS_ERROR`; một liên kết Core `THPT-G10-B12-C02` được giữ nguyên.
- **UNCHANGED:** toàn bộ D1–D5 B12, D6 `HELP-G10-B12-02@R02`, B13–B14, 27 canonical candidate item IDs, đáp án, rubric, SVG, năng lực, trạng thái Readiness và mọi học liệu trên main.
- **DELTA_CLASS_CANDIDATE:** `DELTA_C_ACADEMIC_MATERIAL` do thay nội dung chẩn đoán/hướng dẫn sửa lỗi. Reviewer quyết định lỗi P0/P1/P2, verdict riêng từng bước, cần thêm/bớt phần nào hay không. Nội dung R01 trước đó giữ nguyên snapshot và receipt để truy vết.
- **RELEASE_AUTHORIZATION:** `NO`; `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`; `SGK_CHAPTER_READINESS_ACTIVE=NO`; `NO_SCORE/NO_MASTERY`; không merge/deploy.

## 5. Định dạng verdict yêu cầu NotebookLM

Trả: `PACKET_ID`, `SOURCE_RECEIPT` (5/5 Permanent Sources và trang SGK/SBT chính xác), `EXPECTED_HELP_IDS=1`, `REVIEWED_HELP_IDS`, `AFFECTED_OUTCOME_ID`, `LINKED_ITEM_ID_UNCHANGED`, `R01_DEFECT_VERDICT` và P0/P1/P2, `R02_FIVE_STEP_VERDICTS`, `CORRECT_SYMBOL_AND_INTERVAL_VERDICT`, `MINIMAL_DELTA`, `ACADEMIC_DELTA_VERDICT=PASS/HOLD`, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `RELEASE_AUTHORIZATION=NO`. Không mở rộng sang nội dung đã review khác; nếu có blocker toán học thực sự phụ thuộc thẻ khác, nêu rõ bằng chứng thay vì tự mở rộng.