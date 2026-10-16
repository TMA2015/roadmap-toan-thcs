# W3A — Đối chiếu verdict và quyết định tích hợp có điều kiện (R2)

**Packet:** `MATH-CT05-07-W3A-20261016` · **Receipt:** [NOTEBOOKLM_SUBMITTED_VERDICT](MATH-CT05-07-W3A-20261016_NOTEBOOKLM_SUBMITTED_VERDICT.md) · **Ngày nhận:** 2026-10-16.
**Provenance:** Báo cáo do chủ dự án chuyển đến; bản TXT gốc có SHA-256 `ea1a72ed56e1d8ee564b4ff60b360e788c6278795de200f65dc0b55a12e5a703` (20.499 byte). File .md trong repo là bản văn được lưu từ tệp tải lên.
**Result:** `EXPECTED=12` · `REVIEWED=12` · `OVERALL|PASS_FOR_PLACEMENT_REVIEW` (không phải PASS_DEPLOY).
**Baseline:** Git `2047278c299ca616f307b191486ed9b6677bf2bd` (W3A request và sổ 40 ID). Source `bai-tap.md`, câu MCQ, WX, công cụ chấm và điểm học sinh **không sửa** ở PR này.

## 1. Đủ 12 ID, đối chiếu phân loại và thao tác kỹ thuật

| Source ID | NotebookLM verdict | Tình trạng canonical thực tế | Đề xuất triển khai tối thiểu, chưa cấp phép |
|---|---|---|---|
| `05-WR-01` | CONVERT_INTERACTIVE · PASS | **MCQ exact** `ID05V1_002` có nguyên đề và đáp án | `REUSE_EXISTING`; không tạo bản sao. Cân nhắc dạng điền 3 hệ số riêng nếu chứng minh giá trị sư phạm và engine hỗ trợ. |
| `05-WR-02` | CONVERT_INTERACTIVE · PASS | **MCQ exact** `ID05V1_019`; `WX05-IDN-001` liên quan nhưng là bài nhận dạng ngược khác đề | `REUSE_EXISTING`, giữ WX gốc; không nhân đôi vì `source_refs`. |
| `05-WR-05` | CONVERT_INTERACTIVE · PASS | **MCQ exact** `ID05V1_032`. `ID05V1_106` là bài khác, không phải cùng đề | `REUSE_EXISTING`. Chỉ phát triển biến thể điền bốn hệ số nếu được chấp thuận riêng. |
| `05-ENT-01` | KEEP_WRITTEN · PASS | Chưa có canonical WX với nguyên đề chứng minh `A=-8` | `DRAFT_NEW_WRITTEN` ở tầng Entrance10/Transfer **tạm thời**; phân giải tuyên bố hai tầng “Entrance10/KNTT-Core Vận dụng cao” trước khi ghi curriculum placement. |
| `06-WR-02` | ARCHIVE_DUPLICATE · PASS | **WX exact** `WX06-FAC-001`, đã APPROVED và có `source_refs` | `LINK_CANONICAL_WX`; không tạo ID/đề/lời giải trùng. Giữ source Git làm phả hệ. |
| `06-WR-03` | CONVERT_INTERACTIVE · PASS | **MCQ exact** `FAC06V1_025` (đề `x²−36`). NotebookLM gọi “structural” | `REUSE_EXISTING`, ưu tiên dữ kiện thực tế hơn gán nhãn “cần chuyển”. |
| `06-ENT-02` | CONVERT_INTERACTIVE · PASS | Đề nghiệm `{0,7}` có thể chấm số; chưa có canonical ID cho chính đề W3A | `HOLD_NEW_INTERACTIVE`: xác minh grade/layer Core vs Entrance10; quy định thứ tự nghiệm hoặc kiểm tra tập không phụ thuộc thứ tự trước khi viết bank item. |
| `06-CH-01` | KEEP_WRITTEN · PASS | Chưa có canonical WX với kỹ thuật `x⁴+4` | `DRAFT_NEW_WRITTEN_CHALLENGE`. Không dùng nhận định “SGK đã xác minh” để suy ra kỹ thuật Sophie Germain là bắt buộc KNTT-Core. |
| `07-WR-01` | CONVERT_INTERACTIVE · PASS | `RAT07V1_012` hỏi ĐKXĐ của `(x+1)/(x−2)`; cùng kỹ năng/đáp án `x≠2`, **không exact** | `REUSE_SKILL_COVERAGE`; giữ khác biệt ở tử số, chỉ tạo bài mới nếu cần thêm mức bao phủ được rà soát. |
| `07-WR-07` | CONVERT_INTERACTIVE · PASS | `WX07-RAT-001` đã APPROVED nhưng **khác dữ kiện**; yêu cầu biểu thức rút gọn và **tập xác định** | `HOLD_SYMBOLIC_ENGINE`: runtime `practice-rich-answer-v1.js` hiện chỉ khai báo `numeric/rational/numeric_fields`, chưa có chấm biểu thức đại số/điều kiện biểu thức an toàn. Không chuyển vội thành bài chấm sai. |
| `07-WR-10` | ARCHIVE_DUPLICATE · PASS | **WX exact** `WX07-RAT-002` đã APPROVED | `LINK_CANONICAL_WX`; source cũ đã ẩn ở trang học sinh, giữ nguyên Git và trỏ về WX. |
| `07-WR-11` | KEEP_WRITTEN · PASS | `RAT07V1_063` là MCQ **exact về phát biểu**; `WX07-RAT-001` liên quan nhưng đề khác | `DRAFT_EXPLANATION_CHECK`: nếu giữ tự luận, yêu cầu HS **giải thích** miền xác định thành lời, không thêm MCQ lặp. Có thể đặt ở Core Trap hoặc thư viện WX, cần chốt canonical owner. |

## 2. Kết quả đếm và ranh giới

- **NotebookLM:** 7 `CONVERT_INTERACTIVE` + 2 `ARCHIVE_DUPLICATE` + 3 `KEEP_WRITTEN` = 12 PASS học thuật.
- **Triển khai đề xuất (khác với đếm verdict):** 4 câu MCQ exact **đã có** (`05-WR-01/02/05`, `06-WR-03`); 1 bài **cùng kỹ năng** (`07-WR-01`); 2 chuyển tương tác **cần quyết định kỹ thuật/học thuật** (`06-ENT-02`, `07-WR-07`); 2 pointer WX exact (`06-WR-02`, `07-WR-10`); 3 đầu bài tự luận/chứng minh cần **đề xuất canonical placement** (`05-ENT-01`, `06-CH-01`, `07-WR-11`).
- Sổ nguồn R1 có 40 ID; **chỉ 12** ID của W3A đã PASS về học thuật, **28 ID còn lại NOT_REVIEWED**. Không đổi sổ nguồn R1 lịch sử; tài liệu R2 này là lớp quyết định kế tiếp.
- Mọi khẳng định trang/chương SGK S1 nêu trong receipt là **kết quả NotebookLM báo cáo**. Ở lượt này chưa đọc trực tiếp bản scan SGK; đặc biệt không hợp nhất `KNTT-Core / Entrance10` thành một nhãn chấm điểm.
- Bài tự luận giấy không tự tạo Mastery/Core Readiness. Phần mã chấm điểm, evidence ledger, backup, học liệu canonical, trang đang học, lịch sử và dữ liệu học sinh không bị thay đổi.

## 3. Cổng kiểm định kế tiếp

**A.** Chuẩn bị 3 đề xuất tự luận thành bản thảo có lời giải/hint/rubric theo [Written Exercise Library Contract v1](../../../docs/collaboration/current-handoff.md) và nguồn W3A; xác định canonical owner/placement; **bắt buộc kiểm định học thuật bản thảo mới** trước khi đưa vào JSON library.

**B.** Chỉ chọn tạo tương tác mới cho `06-ENT-02`, `07-WR-07` sau khi thông qua answer contract và test trường hợp khó (đổi thứ tự nghiệm, điều kiện xác định, biểu thức tương đương, giá trị loại).

**C.** Với các bài đã exact, không thêm ID, không nhân đôi lời giải/rubric. Tránh mở nhánh tiếp theo khi thiếu verdict cho các bài W3B/W3C.

**D.** Chỉ sau **owner acceptance** mới triển khai content delta vào trang học sinh. `PASS_FOR_PLACEMENT_REVIEW` không phải phép phát hành.
