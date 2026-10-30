# G10 Chương I · B01–B02 — Biên bản sau phát hành P1/P2 (30/10/2026)

**PACKET_ID:** `G10-SGK-CHI` · **RELEASE_SCOPE:** `PUBLIC_FORMATIVE_ONLY` (Bài 1 Mệnh đề, Bài 2 Tập hợp; không bao gồm Chapter/Topic Readiness hoặc Mastery).

## P1 — Bằng chứng deploy thực tế
- Tác giả/handoff #628 đã merge vào main tại `cb128a03099fe3ed469eaf458e6199bf79064e49`.
- PR phát hành [#635](https://github.com/TMA2015/self-learning-math/pull/635) merged 30/10/2026 tại **main `6a9003dfd51ae249a02f4239b75a093dac4e1b81`**.
- Hai workflow PR trên final release head `bafecc6b60be78b8e72a2e2f53d3fc09c78b1746` SUCCESS: [THPT Preview #40991551990](https://github.com/TMA2015/self-learning-math/actions/runs/40991551990), [Roadmap Quality #40991552118](https://github.com/TMA2015/self-learning-math/actions/runs/40991552118).
- [Deploy MkDocs #40993426353](https://github.com/TMA2015/self-learning-math/actions/runs/40993426353) SUCCESS đúng main SHA nêu trên; [Pages build #40993520517](https://github.com/TMA2015/self-learning-math/actions/runs/40993520517) SUCCESS, `gh-pages` commit `e2457bef844a9d022ea6605dd2d4b4270f651dba`.
- Kiểm tra trực tiếp nội dung đã sinh trên `gh-pages`: `thpt-preview/sgk/chuong-i/bai-1/index.html`, `bai-2/index.html`, `luyen-tap/index.html`, `tu-kiem-tra-chuong/index.html`, `thpt-preview/thu-vien/tu-luan-chuong-i/index.html`, `assets/javascripts/thpt-chi-reviewed-formative-v1.js`, và cả hai SVG `THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg` / `THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg` đều hiện diện; các HTML B1/B2/luyện tập/tự luận không thấy nhãn nội bộ NotebookLM/review.
- **P1_DEPLOY_RECEIPT=PASS** cho các đường dẫn và tài nguyên công khai kiểm tra ở trên; không được mở rộng sang full Chapter/Topic/Readiness.

## P2 — Xác nhận chủ dự án trên thiết bị thực
- **Ngày:** 30/10/2026. **Người xác nhận:** chủ dự án.
- **Nguyên văn phạm vi xác nhận:** “Đã kiểm tra trên điện thoại và desktop. đã có nội dung mới trên trang web, chưa phát hiện ra lỗi gì cả.”
- **P2_OWNER_DEVICE_OBSERVATION=NO_ISSUES_OBSERVED** trên điện thoại và desktop, học liệu mới đã xuất hiện.
- Không có thông tin cụ thể về hệ điều hành/trình duyệt, danh sách URL đã bấm, kiểm thử mọi phương án câu hỏi/khả năng lưu trạng thái hoặc Safari iPad. Không ghi “full mobile/iPad Safari functional PASS” từ xác nhận này.

## Ranh giới và tiếp nối
- Công khai chỉ có 16 formative canonical (4 Core/12 Practice), 2 Written (1 Anchor), 7 ví dụ, 2 SVG và 4 HELP_ID đúng snapshot đã duyệt. Trang Tự kiểm tra cuối chương không có đánh giá độc lập chính thức; không ghi điểm/Mastery.
- Biên bản này là chứng cứ **sau phát hành**; không thay Academic receipt hoặc phạm vi A1–A7.
- **Gói tiếp theo:** G10 Chương II B03–B04. Authoring PR [#631](https://github.com/TMA2015/self-learning-math/pull/631) `CONTENT_READY` trên nhánh Draft nhưng chưa merge; technical release PR [#636](https://github.com/TMA2015/self-learning-math/pull/636) đang Draft và SHA `f9344fa654356e4edda9267a938e5d6273252214` diverged from main `6a9003df` (5 ahead/9 behind as checked 30/10). Hai workflow success trên head cũ **không** chứng minh QA trên head mới. Chỉ sau khi hòa giải nguồn và latest main, R1–R4 exact-head PASS, giữ R5 owner-gate mới được tiếp tục merge/deploy.

**No content/runtime/learner-data changes in this receipt.**
