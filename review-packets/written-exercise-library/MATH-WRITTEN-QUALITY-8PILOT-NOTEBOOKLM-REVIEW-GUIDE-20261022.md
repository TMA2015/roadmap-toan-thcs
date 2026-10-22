# NotebookLM — Independent first-pass reviewer guide (8 Written exercises)

**Review packet:** `MATH-WRITTEN-QUALITY-8PILOT-20261022-R0`  
**Purpose:** 8 exact canonical exercises, independent D4 written reasoning / D6 help-and-remediation review, math correctness, curriculum evidence boundary; NOT deployment approval.  
**Current source lock:** `docs/assets/data/written-exercises/written-exercise-library-v1.json` Git blob `5141a40bf1b8f8763257857d3b805d681a0956fa`.

## Source selection before submitting one prompt

Select only:
1. **Permanent:** current Self-Learning Math Master Plan **v1.2.1**.
2. **Permanent:** NotebookLM Math Review Rules **v1.2**.
3. **Temporary:** `MATH-WRITTEN-QUALITY-8PILOT-20261022-NOTEBOOKLM.md` with full eight exercise records.
4. **If already indexed:** relevant KNTT **S1** schoolbook/workbook curriculum sources actually covering checked chapters and lessons. If not present, do not pretend placement was independently verified.

**Do NOT select** this project's author's own preliminary D4/D6 conclusions or exam-crosswalk as sources for this first independent pass: those contain prior judgments and could anchor the independent reviewer. Do not select older candidate-packet revisions or an older Master Plan. A separate second round may use the qualitative exam crosswalk to discuss enrichment after initial verdict is archived.

## Copy/paste one prompt into NotebookLM

> Hãy đóng vai **kiểm định viên độc lập Toán THCS**. Chỉ dùng các Sources đang được chọn; không dùng báo cáo PASS cũ, metadata APPROVED hay nhận định của tác giả làm kết luận thay thế.
>
> Phạm vi phải đúng 8 canonical ID từ packet `MATH-WRITTEN-QUALITY-8PILOT-20261022-R0`: `WX02-NUM-001`, `WX02-NUM-003`, `WX13-LIN-001`, `WX03-RAT-002`, `WX16-QUAD-001`, `WX07-RAT-001`, `WX09-SYS-003`, `WX19-CIR-002`. Không kiểm toán bài ngoài danh sách hoặc đề xuất sửa ID.
>
> Kiểm tra từng bài theo: (1) chính xác toán học, điều kiện, hình học, phép biến đổi, đơn vị; (2) chất lượng lập luận tự luận D4, nội dung lời giải, rubrics, lời kết; (3) mức độ hỗ trợ độc lập D6, tính không tiết lộ sớm của gợi ý, lỗi thường gặp, ôn bù; (4) phân loại KNTT-Core/vị trí lớp–chương–bài **chỉ khi có S1 xác minh**; (5) đề xuất tối thiểu, tránh thêm câu hỏi/gợi ý hàng loạt.
>
> Yêu cầu cho từng ID: trạng thái `PASS`, `REVISION_REQUIRED` hoặc `INSUFFICIENT_EVIDENCE`, lý do cụ thể, nơi sai/thiếu, mức P0/P1/P2, nội dung chỉnh sửa nguyên văn nếu có. Tách riêng kết luận 'đúng toán học' khỏi 'cần cải thiện sư phạm' và 'đủ bằng chứng vị trí KNTT'; không đánh đồng các kết luận này.
>
> Trả về một bảng 8 dòng theo đúng thứ tự ID và khối kết quả có thể đối chiếu:
>
> ```text
> PACKET_ID|MATH-WRITTEN-QUALITY-8PILOT-20261022-R0
> SOURCE_BLOB|5141a40bf1b8f8763257857d3b805d681a0956fa
> EXPECTED|8
> REVIEWED|<số bài thực sự rà soát>
> ITEM|WX02-NUM-001|<trạng thái>
> ITEM|WX02-NUM-003|<trạng thái>
> ITEM|WX13-LIN-001|<trạng thái>
> ITEM|WX03-RAT-002|<trạng thái>
> ITEM|WX16-QUAD-001|<trạng thái>
> ITEM|WX07-RAT-001|<trạng thái>
> ITEM|WX09-SYS-003|<trạng thái>
> ITEM|WX19-CIR-002|<trạng thái>
> MISSING_IDS|<liệt kê hoặc NONE>
> UNEXPECTED_IDS|<liệt kê hoặc NONE>
> OVERALL|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
> AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY
> ```
>
> Nếu bất kỳ câu nào không đủ nguồn để xác minh việc xếp lớp/chương/bài, hãy ghi `INSUFFICIENT_EVIDENCE` cho tiêu chí đó thay vì coi là PASS hoặc tự phỏng đoán. Không đề xuất can thiệp vào Readiness, dữ liệu học sinh, 75 bài đang phát hành, hoặc quy tắc một thư viện dùng chung.

## Owner return contract

Paste NotebookLM's **full 8-ID answer** back into the Math project chat (not just `OVERALL|PASS`). The project must reconcile ID and exact source blob before any content decision. Reviewer PASS permits planning a separate minimal technical QA patch, not publishing. Do not merge draft PR #568 on the basis of this guide.

**Second phase (after initial blind review only):** bring in `MATH-WRITTEN-QUALITY-8PILOT-EXAM-CROSSWALK-20261022.md` as an additional S2 evidence source to evaluate where a *new reasoning structure* may be worthwhile; keep official-exam frequency claims blocked until authentic S3 paper provenance is verified.
