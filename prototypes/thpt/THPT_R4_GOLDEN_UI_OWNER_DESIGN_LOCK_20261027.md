> **DELTA KIẾN TRÚC ĐƯỢC OWNER CHẤP THUẬN (27/10/2026):** Golden UI về typography, two-level knowledge tabs và shell vẫn đã PASS. Chuyên đề chỉ còn **3 phần**: Kiến thức / Luyện tập / Tự kiểm tra; Core chuyển về nhánh SGK. Chi tiết `THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md`; cần regression QA ba mục khi code thay đổi. Không biến biên bản v3 lịch sử thành nghiệm thu toàn bộ cấu trúc mới.

# Toán THPT R4 — Golden UI Design Lock · Owner Acceptance

**Ngày:** 2026-10-27  
**Gate:** `GOLDEN_UI_DESIGN=PASS`  
**Nguồn quyết định:** Chủ dự án xác nhận “đã check. pass” trong hội thoại ChatGPT sau khi trực tiếp kiểm tra file `Temp_THPT_R4_Golden_UI_Two_Level_Knowledge_Preview_v3.html`.  
**Trạng thái kỹ thuật:** Draft PR #612; đây là xác nhận **thiết kế/giao diện mẫu HTML**, KHÔNG phải quyết định phát hành website hay chứng nhận thiết bị thật.

## 1. Những gì owner đã nghiệm thu

- Tổng quan bố cục, điều hướng, màu sắc, kích thước chữ, cách trình bày và luồng học theo lớp → chương → bài SGK được owner đánh giá tốt ở bản preview ban đầu.
- Chuyên đề lớn: **hai cấp tab**, cấp 1 chọn mảng `3.1/3.2/3.3`, cấp 2 chọn các phần kiến thức của mảng. Tên tab nhỏ thay đổi theo nội dung thực, không khóa cứng `Khái niệm / Tính chất / Ví dụ`.
- Chuyên đề một mảng: chỉ dùng một hàng tab nội dung như mẫu Bài 16.
- Tab nội dung cấp 2 và tab trong chuyên đề một mảng phải **đồng nhất font-family, font-size, font-weight, color, line-height** cùng trạng thái. Normal text cùng font/size/color/line-height.
- Tab nhiều mảng có thể khác nhẹ ở đường viền/nhóm chứa để thể hiện cấp điều hướng; không thu nhỏ tab nội dung bên trong.
- Giữ lựa chọn tab nhỏ khi chuyển sang mảng khác rồi quay lại; hạn chế cuộn dọc, không tạo cấp tab thứ ba.
- Bốn chức năng chuyên đề giữ nguyên: Core / Kiến thức / Luyện tập / Tự kiểm tra; không đổi nội dung toán học, đáp án, rubric hoặc item ID của Bài 16.

## 2. Phạm vi QA, bằng chứng và giới hạn

| Gate | Verdict | Bằng chứng |
|---|---|---|
| B16_R4_POSTFIX_ACADEMIC | PASS / CLEARANCE YES | Biên bản NotebookLM đã được owner gửi; gói R4 Postfix |
| HTML_V3_OWNER_DESIGN_REVIEW | **PASS** | Owner xác nhận “đã check. pass” sau khi tải và mở file HTML v3 |
| GOLDEN_UI_R4_ARCHITECTURE | **DESIGN LOCKED** | `THPT_R4_ADAPTIVE_KNOWLEDGE_TABS_OWNER_CONTRACT_v2.0.md` |
| PREVIEW_CHROMIUM_MKDOCS_QA | **PASS** | GitHub run [40465903028](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/40465903028) tại commit `6be8956344ca9ffb6a73053e10560d60a0421adc` |
| PHYSICAL_DEVICE_STAGING_UAT | **NOT_ASSERTED** | Owner đã kiểm file HTML offline; chưa chứng nhận URL MkDocs trên iPhone/iPad thật |
| PRODUCTION_RELEASE | **NOT_AUTHORIZED** | Owner chưa yêu cầu merge/deploy |

Không suy diễn rằng toàn bộ **12 tiêu chí** checklist thiết bị thật đã được kiểm thủ công; có các tiêu chí browser CI đã kiểm tự động ở môi trường giả lập.

## 3. Quy tắc sau design lock

- Sau đây sử dụng **Golden UI R4 v3** làm chuẩn xây dựng học liệu THPT.
- Thay đổi kỹ thuật/UI nhỏ hoặc sửa nhãn không đổi nghĩa toán được ghi `DELTA_A_UI`, tự QA, không cần gửi lại NotebookLM.
- Bất kỳ thay đổi công thức/đáp án/rubric/độ phủ học thuật đáng kể nào được xử lý theo Project Source `07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.0.md`.
- Các batch mới ưu tiên **cụm bài/chương**; verdict vẫn theo từng outcome/item và không mượn Academic PASS của B16 sang bài khác.
- Mọi lần **thực sự gửi NotebookLM** phải thực hiện `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md`: file `Temp_*.md` hoặc `Temp_*.zip` có link tải thực, kèm prompt ngắn.
- Không merge, deploy, ghi mastery hoặc tuyên bố chuyên đề 10–12 hoàn chỉnh vì có Design PASS.

## 4. Bước kế tiếp

1. Kiểm kê danh mục Chương VI theo SGK/SBT bản gốc, lập source receipt và lesson/outcome/item manifest.
2. Soạn học liệu cho B15, B17, B18 và bài tập cuối chương dựa trên nguồn gốc thật; tái sử dụng B16 Academic PASS.
3. Review nguyên chương hoặc chia cụm nếu số lượng outcome/item/đồ thị quá lớn, theo Source 07.
4. Tiếp tục gate kỹ thuật/owner release riêng, không cần lặp lại nghiệm thu giao diện cơ sở nếu không có redesign.
