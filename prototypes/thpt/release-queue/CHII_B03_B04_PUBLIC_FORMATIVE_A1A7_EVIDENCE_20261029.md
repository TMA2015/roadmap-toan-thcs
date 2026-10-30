# G10 Chương II · Bài 3–4 · Authoring A1–A7 (2026-10-29)

**PACKET_ID:** `G10-SGK-CHII` · **LEARNING_PATH:** `SGK_CHAPTER` · **RELEASE_SCOPE:** `PUBLIC_FORMATIVE_ONLY`. Không cấp PASS cho Tự kiểm tra cuối chương hoặc TOPIC.

## 1. Source snapshot và reviewer receipt

- Snapshot đã được NotebookLM review: `Temp_THPT_G10_CHII_B03_B04_D1D6_AUTHORING_R01.md`; local original SHA256 `c411c850d7112b73884b685c503966034236a88f8c9cda671569695d8b014a90`; bản giữ nguyên byte trong repo `prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `acea9776d1c7534a4cd0cd28e98db26dedf0c122`.
- NotebookLM verdict do chủ dự án gửi, đã lưu nguyên văn với LF-normalization (chỉ chuẩn hóa CRLF thành LF, giữ nguyên ký hiệu/nội dung): `prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md`, Git blob `47eab8185d431045ab202d58fe4f2fbc3e99628b`.
- Reviewer xác nhận đúng 5 Permanent Sources THPT v2.0, S1 SGK Toán 10 KNTT tập 1 B03 pp.22–25 / B04 pp.26–30 / bài tập cuối ChII pp.31–32; SBT B03 pp.16–18 / B04 pp.19–23 / cuối chương pp.24–28 (hướng dẫn giải từ p.88).

## 2. Đối soát phạm vi thực tế

| Cấu phần | B03 | B04 | Tổng | Verdict |
|---|---:|---:|---:|---|
| D1 — Kiến thức | Đầy đủ B03 | Đầy đủ B04 | 2 bài | PASS |
| D2 — Ví dụ | 3 | 3 | 6 | PASS |
| D3 — Formative | 8 (C01–C02; P01–P06) | 8 (C01–C02; P01–P06) | 16 | PASS |
| D4 — Written | `THPT-G10-CHII-W03` | `THPT-G10-CHII-W04-ANCHOR` | 2 | PASS về nội dung |
| D5 — SVG | FIG-G10-B03-01 | FIG-G10-B04-01 | 2 | PASS |
| D6 — Helpers | HELP-G10-B03-01/02 | HELP-G10-B04-01/02 | 4 | PASS |
| Outcomes | 5 | 5 | 10 | FULL theo B03/B04 |

**Hình SVG source-locked:** `prototypes/thpt/visuals/THPT_G10_B03_HALFPLANES_D5_R01.svg` blob `a69e5ffabce6c77787ba3829471be7da97e21578`; `prototypes/thpt/visuals/THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg` blob `64b0ca1142f9cbcb1edebbb220e5bb7a0752ec61`. XML SVG chính xác là hai block nguyên trong source snapshot, không được tự cải biên sau review.

**Canonical reference register:** `prototypes/thpt/shared-items/THPT_G10_CHII_B03_B04_CANONICAL_ID_REGISTER_R01.md` blob `c96aa6aa5471983e37e8e678002fdb037e747119`. Danh mục tham chiếu 18 item ID + 10 outcome + 4 helper; KHÔNG sao chép thân câu/đáp án/rubric tạo ngân hàng khác.

## 3. Delta reconciliation (receipt-only, không đổi nội dung toán)

**D-REC-01 — Sai khác ID trong bảng report:** Reviewer ghi `THPT-G10-CHI-W03`, còn *chính snapshot đã review* có `THPT-G10-CHII-W03` (Chương II) cho bài tự luận B03. Nội dung và rubric W03 mà reviewer mô tả khớp bài gốc, 17 ID còn lại trùng nguyên văn. Khóa đúng **18 item ID trong source snapshot**, không tạo alias W03 khác, không sửa đề. Phân loại `DELTA_B_SOURCE_EQUIVALENT` (sai sót chép ID trong biên bản reviewer, không phải thay đổi đề toán); giữ nguyên báo cáo gốc.

**D-REC-02 — Diễn đạt ví dụ quy hoạch nguyên:** Phần mô tả D2 của reviewer có lời nhận xét “đỉnh liên tục không nguyên” nhưng chính ví dụ tác giả tối ưu ở `(20,80)`, là điểm nguyên; người review tính đúng max 230. Sự khác nhau với cực đại liên tục `25/3` được minh họa ở câu `B04-P06`, không phải EX-B04-03. Đây là lỗi mô tả receipt-only; không thay đổi thân câu hoặc đáp án.

**Reviewer:** `PACKET_VERDICT=PASS`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA=YES`, `P0=0`, `P1=0`, `P2=1` (đăng ký item ID vào canonical runtime + mobile SVG QA), `MINIMAL_DELTA=0`. Academic clearance áp dụng duy nhất B03/B04 D1–D6 theo snapshot, không suy rộng Chapter Readiness hay TOPIC.

## 4. QA bổ sung trên đúng snapshot

- So sánh byte blob gốc `acea9776...`; 18 câu (4 Core, 12 Practice, 2 Written) có ID duy nhất, không xuất hiện 19th `THPT-G10-CHI-W03`.
- Hai XML SVG parse hợp lệ, đã kiểm khớp byte với 2 block review.
- QA tính lại nghiệm nguyên cho hệ `x+2y≤5`, `2x+y≤5`, max `3x+2y=8` tại `(2,1)`, nghiệm liên tục có max `25/3`. Tính lại F tại 4 đỉnh vùng `(0,0),(4,0),(2,4),(0,6)` cho dãy `0,12,14,12`; mô hình cửa hàng có max 230 tại `(20,80)`.
- QA học thuật độc lập là verdict NotebookLM; kiểm toán tác giả hỗ trợ đối chiếu, không thay thế verdict.

## 5. Gate A1–A7 — PUBLIC_FORMATIVE_ONLY

| Gate | Kết quả | Căn cứ |
|---|---|---|
| A1 SOURCE_SNAPSHOT | PASS | Bản Temp byte-exact SHA256 và Git blob trên |
| A2 SGK_SBT_SCOPE | PASS | NotebookLM S1 receipt, phạm vi trang B03/B04 |
| A3 NOTEBOOKLM_VERDICT | PASS | 18/18, D1–D6, 10/10 outcomes, 0 P0/P1 |
| A4 ITEM_OUTCOME_IDS | PASS (authoring) | 18 ID nguồn không trùng; 10 outcome; giải thích lỗi chép W03; chưa đăng ký runtime |
| A5 D1_D6_SCOPE | PASS | Hai bài học độc lập, 6 D2, 16 D3, 2 D4, 2 D5, 4 D6 |
| A6 DELTA_RESOLVED | PASS | 0 đổi toán sau review; receipt typo ghi DELTA_B, giữ report gốc |
| A7 PUBLIC_PRIVATE_BOUNDARY | PASS | Chỉ câu formative công khai; không có held-out keys hoặc ghi Mastery |

**Handoff:** R1–R5 hoàn toàn do nhánh phát hành. P2: đăng ký 18 item ID canonical dựa trên latest main và kiểm trùng; QA hiển thị hai SVG trên màn hình điện thoại, sau đó QA exact head, deep links, THCS regression và assessment safety. Không tự merge/deploy, không bật Mastery.

**Kết luận:** `CONTENT_READY=YES` cho `G10-SGK-CHII / B03–B04 / PUBLIC_FORMATIVE_ONLY` trên nhánh học liệu; `RELEASE_READY=NO`; `FULL_LEARNING_PATH=NO`.
