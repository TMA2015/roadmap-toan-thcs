# Mẫu manifest — sao chép vào inventory/ rồi đổi PACKET_ID

PACKET_ID: G10-SGK-NEW
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PUBLIC_FORMATIVE_ONLY
STATE: INVENTORY
SOURCE_COMMIT: 0000000000000000000000000000000000000000
REVIEW_RECEIPT: CHUA_CO
CURRENT_PR: CHUA_CO

## A — biên soạn/review
- [ ] A1_SOURCE_SNAPSHOT — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A2_SGK_SBT_SCOPE — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A3_NOTEBOOKLM_VERDICT — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A4_ITEM_OUTCOME_IDS — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A5_D1_D6_SCOPE — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A6_DELTA_RESOLVED — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A7_PUBLIC_PRIVATE_BOUNDARY — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng

## R — phát hành
- [ ] R1_INTEGRATED_CURRENT_MAIN — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R2_EXACT_HEAD_CI — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R3_CLEAN_STUDENT_UI — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R4_ASSESSMENT_SAFETY — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R5_OWNER_APPROVAL — chứng cứ QA exact commit, UI, assessment và quyền owner

## AP — Academic Presentation QA (bắt buộc cho gói tạo mới sau 31/10/2026)

- [ ] AP1_IDEA_HIERARCHY — Một khối = một vấn đề toán học; chuyển ý tách rõ, không nén nhiều định nghĩa/công thức vào cùng đoạn.
- [ ] AP2_FORMULA_VISIBILITY — Công thức/điều kiện/định lý nổi bật, MathJax và ký hiệu rõ, công thức dài không tràn; chứng cứ từ trang tích hợp.
- [ ] AP3_FIGURE_READABILITY — SVG, đồ thị, bảng có nhãn và giải thích; đúng vị trí liên quan, đủ lớn để tự học.
- [ ] AP4_SELF_STUDY_CLARITY — Học sinh phân biệt được nội dung chính, điều kiện, ví dụ, lỗi cần tránh; không hiển thị mã kiểm toán D1.x thay tiêu đề.
- [ ] AP5_RESPONSIVE_VISUAL — QA ảnh/viewport desktop–iPhone–iPad trên đúng HEAD; không mất nhãn, cuộn ngang hoặc đè chữ.

**Cổng bổ sung AP1–AP5** được release lane kiểm chứng bằng nguồn Markdown, QA HTML/MathJax, ảnh chụp hoặc trình duyệt tương ứng. Không thay D1–D6, A1–A7, R1–R5 hay P1/P2. Không tự cấp AP PASS dựa vào NotebookLM Academic PASS hoặc số câu hỏi. Với packet lịch sử chưa có AP mục này, áp dụng bổ sung khi thực hiện audit/batch, không tự đổi trạng thái phát hành.

## P — hậu phát hành
- [ ] P1_DEPLOY_RECEIPT — chứng cứ deploy và UAT
- [ ] P2_DEVICE_UAT — chứng cứ deploy và UAT