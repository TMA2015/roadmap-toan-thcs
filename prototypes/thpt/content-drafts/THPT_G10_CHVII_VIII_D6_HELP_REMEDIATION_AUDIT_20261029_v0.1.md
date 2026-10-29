# G10 ChVII–VIII · Academic D6 Help/Remediation source-locked preflight v0.1

**Ngày:** 2026-10-29 · **Trạng thái:** AUTHORING_AUDIT_DRAFT; NOT_NOTEBOOKLM_REVIEWED; NO_NEW_ACADEMIC_PASS; NO_MERGE_DEPLOY.
**Phạm vi:** SGK B19–B25, 57 public formative (32+25) và 7 Written (4+3) đã có ID canonical/review từng snapshot; **không sửa hoặc tạo item mới**. 14 held-out SGK Readiness candidates chỉ được nhắc metadata, không trích stem/key.

## 1. Nguồn snapshot thực tế từ GitHub

- ChVII PR #620, head `51b0fc0cf1f8bb79a7d0280380ac83b1850658e1`, B19–B22:
  - B19 `docs/thpt-preview/sgk/chuong-vii/bai-19.md` blob `5d30b5c3fb34cd7ca24dc9e256c15cd85f1f0206`;
  - B20 `bai-20.md` blob `635bd2f1c181612a9e3d0093b6b2dfbe1734b220`;
  - B21 `bai-21.md` blob `e144c4a2a175ae49a4d58a5b698ceb8dd6d592c3`;
  - B22 `bai-22.md` blob `2faa6f3cc5dfa85114120e010dbbdc2797f29d46`;
  - `docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js` blob `2b191d7abba7a4f5bd79d4c122673cd53a45495b`: **32/32** item có `hint`, `solution`;
  - `docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md` blob `89e405b3a5719a877e90ff0c85823ad5e603dca5`: **4 Written/1 Anchor**, lời giải/rubric mở theo yêu cầu.
- ChVIII PR #621, head `5d14ee0b027d276a3b1824af8a0ff15f72a5acfe`, B23–B25:
  - B23 `docs/thpt-preview/sgk/chuong-viii/bai-23.md` blob `677eeb0a580a1f40b728c9b00f84f144f53cc74e`;
  - B24 `bai-24.md` blob `046c2bb2e9da0982d918c8e5eb7f608081ae8d24`;
  - B25 `bai-25.md` blob `d6ed0c9197655f3e5ba72cc8619ce64ece826bbf`;
  - `docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js` blob `2ae62fada28913ec336b3507684408a1e05a3232`: **25/25** item có `hint`, `solution`;
  - `docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md` blob `e53ab99e94a0fad38f277256cb7dbe4e6b40928b`: **3 Written/1 Anchor**, lời giải/rubric mở theo yêu cầu.
- S1 reviewer-reported sources: SGK KNTT Toán 10 tập 2 ChVII tr.29–58, SBT tr.27–49; ChVIII SGK tr.59–79, SBT tr.50–59. 5 Permanent THPT v2.0 là bộ nguồn NotebookLM hợp lệ.
- Các blob và số lượng ở trên là kiểm kê hiện trạng. Reviewer D1/D2/D3/D4/D5 PASS đúng snapshot **không đồng nghĩa Academic D6 PASS** trên learner UI mới.

## 2. D6 evidence và gap ban đầu (không tự cấp verdict)

| Nhóm | Đã quan sát trong snapshot | Câu hỏi/hạng mục còn mở |
|---|---|---|
| 57 formative | 57 hint + 57 lời giải, không tạo item mới | Hints ở điểm khó đã đủ từng bước/chỉ phương pháp hay mới nêu hướng? Không suy từ 57/57 sang D6_PASS |
| B19–B22 | Có giải thích/ví dụ/lưu ý điều kiện; B20 đã có link ngược về B19 | Chưa có phần được gắn nhãn rõ 'Nếu đang yếu, ôn lại' hoặc map lỗi → tiền đề cho từng outcome |
| B23–B25 | Ví dụ chọn quy tắc, lỗi hay gặp, link Practice + Written | Thiếu tuyến trợ giúp cụ thể khi nhầm cộng/nhân, chỉnh hợp/tổ hợp, dấu Newton; cần đánh giá trên đúng lesson/snapshot |
| 7 Written | 7 rubric tự đối chiếu, lời giải ẩn mặc định | Cần review tính hữu ích của hint từng bước, vì sao dùng phương pháp và nhánh ôn lại; không xem rubric tự chấm là mastery |
| Topic cross-grade | Chỉ có Topic Hàm số pilot, không phải Topic ChVII/VIII đầy đủ | Chưa có D6 độc lập cho tuyến TOPIC; không dựa vào SGK PASS |
| Readiness | 14 slot ứng viên đã review; 0 active, không nhúng key vào client | Không dùng hint/lời giải của Practice làm đánh giá độc lập; không đưa protected item vào review packet công khai |

**Lưu ý đặc biệt:** 57/57 hints là kiểm tra sự tồn tại trường dữ liệu, không phải thẩm định chất lượng toán học hoặc tiến trình remediation. Không tìm thấy trường `prerequisite`/`remediation` riêng trong hai JS formative; chưa khẳng định toàn site thiếu tuyến hỗ trợ chỉ dựa vào hai JS này.

## 3. Minimal delta candidate, CHƯA TRIỂN KHAI

1. Tận dụng 7 trang và 64 canonical IDs đã review; **không biên soạn lại 57 câu formative, 7 Written, không cấp item_id mới**.
2. Nếu QA xác nhận chỉ thiếu **đường dẫn** tới kiến thức đã có, bổ sung điều hướng 'Ôn lại nếu đang yếu' theo nguồn sẵn:
   - B20 → B19 (pháp tuyến/chỉ phương); B21 → B19/B20 (đường thẳng/khoảng cách);
   - B24 → B23 (quy tắc cộng/nhân); B25 → B24 (tổ hợp trong nhị thức).
   Các đường nối chỉ là **đề xuất preflight**, cần kiểm tra tuyến thực tế, source equivalence, mobile navigation trước khi cập nhật. Không được biến link tùy chọn thành yêu cầu chuyển nhánh để học đủ kiến thức.
3. Nếu thiếu hỗ trợ có tính chất toán học (chuỗi gợi ý, xử lý nhầm điều kiện, bảng phân biệt phương pháp, rubric), lập đúng **AFFECTED_LESSON_IDS + AFFECTED_ITEM_IDS** và gói **DELTA_C_ACADEMIC_MATERIAL**; review lại phần bị ảnh hưởng theo file 07 v1.1. Chỉnh nhãn/link thuần UI chỉ có thể DELTA_A_UI sau khi QA chứng minh không đổi toán.
4. Riêng ChIX vẫn thuộc gói khác, không nhân bản item sang VII/VIII hoặc trộn review với VI.

## 4. Gate log / công việc tiếp

```text
AFFECTED_LESSONS|B19,B20,B21,B22,B23,B24,B25
REVIEWED_UNIQUE_PUBLIC_ITEM_IDS|64
FORMATIVE_HINT_SOLUTION_FIELDS|57_OF_57
WRITTEN_RUBRIC_FILES|7_ITEMS
ACADEMIC_D6_REMEDIATION_DEPTH|AUDIT_IN_PROGRESS_NOT_PASS
NOTEBOOKLM_REREVIEW|ONLY_IF_MATERIAL_ACADEMIC_DELTA_OR_TARGETED_D6_AUDIT_PACK_REQUESTED
CONTENT_READY_CHVII|HOLD_A5
CONTENT_READY_CHVIII|HOLD_A5
NO_ACADEMIC_CONTENT_MODIFICATION|TRUE
NO_REPUBLISHED_PRIVATE_READINESS|TRUE
```

**Bước kế tiếp:** đối chiếu từng outcome với D6 thực tế; chọn các câu thiếu trợ giúp có giá trị cao để sửa tối thiểu, lập batch Temp_ Markdown snapshot và prompt NotebookLM khi có delta học thuật cần review. Đừng yêu cầu reviewer review lại trọn D1–D5 chỉ vì link trình bày.
