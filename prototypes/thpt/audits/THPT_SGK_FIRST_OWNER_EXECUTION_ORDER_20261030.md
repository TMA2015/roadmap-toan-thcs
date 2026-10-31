# THPT KNTT — Owner-approved SGK-first order, 30/10/2026

**OWNER_DECISION:** Ưu tiên hoàn chỉnh trọn hành trình học **SGK lớp 10 → lớp 11 → lớp 12**, từng lớp theo thứ tự **đầu SGK tới cuối SGK**, trước khi biên soạn học liệu **nhánh Chuyên đề**.

## Quy tắc bất biến

- Một repo, một website `TMA2015/self-learning-math`; duy trì Golden R4 THPT và Golden UI THCS. Không lập repo/backend/account mới.
- Trục SGK cho từng bài đủ D1–D6: đầy đủ lí thuyết/điều kiện/hình/ví dụ, Core, Practice, Written/Anchor chung; Tự kiểm tra **cuối mỗi chương** và không dùng practice làm bằng chứng độc lập.
- Tự kiểm tra: source S1 + NotebookLM độc lập, no-hint/no-Tutor/no-answer/no-correctness trước Final Submit, track exposure, không bật scoring/Mastery cho demo; không công bố answer keys held-out trên repo public.
- Học liệu canonical được phép **tái sử dụng** với Chuyên đề bằng cùng `item_id`, `skill_id`, `problem_type_id`, `placement`/role, SVG và Written/Anchor shared; không nhân bản.
- NotebookLM dùng đúng năm Permanent Sources THPT v2.0, nguồn SGK/SBT S1 và file 06/07; PASS giới hạn đúng bản review. UI/engine/QA/merge/deploy chỉ thực hiện với owner approval trên release lane.
- **Chuyên đề về sau**: trước hết kiểm kê tất cả shared sources từ SGK 10/11/12, đối chiếu độ sâu và lỗ hổng, rồi lập programme và NotebookLM batches; mỗi chuyên đề có đúng **Kiến thức / Luyện tập / Tự kiểm tra** độc lập.

## Kế hoạch có cổng chặn

| Thứ tự | Gói triển khai | Trạng thái nhận bàn giao |
|---|---|---|
| 1 | **Lớp 10**: 9 chương, B01–B27. D1–D6 gói nguồn đã review từng snapshot; ChII #631/#636 đã merge, còn hậu kiểm P1; ChIII nguồn #633 đã merge nhưng phát hành #644 Draft; tiếp tục ChIII–V, ChVI A5 và QA; **9/9 Readiness R00 scope blueprints đã viết, 133 targets**, nhưng không phải đề kín hay Readiness PASS. | Chưa đủ `CHAPTER_COMPLETE`, xem audit và index R00 |
| 2 | **Lớp 11**: bắt đầu ChI B01 → B02 → B03 → B04, rồi tuần tự những chương/bài tiếp theo SGK T1 và T2. | **B01–B02 đã authoring Academic PASS Draft #627**, cần kế thừa nguồn, không biên soạn lại; bài kế tiếp thực sự B03 |
| 3 | **Lớp 12**: bắt đầu từ B01 SGK tập 1, tiếp tục SGK tập 2 tới hết; không nhảy trước sang ChVI vì có bản hồi tố lịch sử. | SGK12 tập 1+2 đã tìm trong thư mục Drive. **SBT12 cần định vị/kiểm chứng** trước authoring S1; các gói ChVI cũ trong retro-audit #623 còn HOLD |
| 4 | **Chuyên đề**: crosswalk canonical sau khi SGK 10–12 hoàn chỉnh, rà dùng chung; triển khai ba mục Kiến thức/Luyện tập/Tự kiểm tra. | Chưa khởi động content mới; **không** suy PASS từ SGK |

## Source availability verified on Drive

- `KNTT TOAN 10`: SGK/SBT tập 1 + tập 2 (đã liệt kê bốn PDF).
- `KNTT TOAN 11`: SGK/SBT tập 1 + tập 2 (đã liệt kê bốn PDF).
- `KNTT TOAN 12`: đã liệt kê **SGK tập 1, SGK tập 2**, chưa thấy SBT trong folder hiện tại. Không khẳng định hai SBT12 hoàn toàn không tồn tại ở nơi khác.
- Lớp 11 SGK tập 1 bảng mục lục nguồn scan: Chương I *Hàm số lượng giác và phương trình lượng giác* gồm B01 Giá trị lượng giác, B02 Công thức lượng giác, B03 Hàm số lượng giác, B04 Phương trình lượng giác cơ bản. Draft #627 chỉ đúng B01/B02.

## Điểm vào công việc tiếp theo

**Ngay bây giờ:** theo `G10_SGK_27_LESSONS_NINE_CHAPTERS_COVERAGE_AUDIT_20261030.md`, giải các khoảng trống thật. Đã tạo đủ **9 blueprint outcome-only** ChI–ChIX, 133 coverage rows, không public stem/key; index: `G10_SGK_NINE_CHAPTER_READINESS_BLUEPRINT_INDEX_R00_20261030.md`. ChVII–VIII có 35/35 public outcome S1-reviewed ở matrix v0.4, **chưa được duyệt riêng cho Readiness**; ChII authoring #631 và release #636 đã merge trên GitHub, chưa audit P1 ở đây. Chuẩn bị D6 ChVI theo delta học thuật riêng (8 HELP_ID mới, không item mới). Sau đó release lane bàn giao các nguồn tác giả đã PASS theo đúng owner approval.

**Khi chuyển 11:** xác nhận GitHub hiện tại, kế thừa #627 và khóa B03/B04 theo SGK/SBT mới, không làm lại B01/B02. **Không bắt đầu Topic content** trước khi kết thúc ba lớp SGK.

**STATE:** OWNER_SCOPE_DECISION_RECORDED / G10_AUDIT_IN_PROGRESS / NO_MERGE_DEPLOY.
