# Checkpoint · Toán 11 KNTT Chương I · Bài 1–2 · 2026-10-29

**Làn:** AUTHORING_ONLY; chỉ D1–D6, kiểm toán học thuật, NotebookLM, đóng gói. Không có code website, manifest READY, PR phát hành, scoring, Firebase/Gemini, Mastery, merge/deploy.

## Kiểm kê nguồn được đọc

- SGK 11 KNTT tập 1, Chương I: Bài 1 **trang in 5–16**, Bài 2 **17–21**, Bài 3 22–30, Bài 4 31–39, ôn chương 40–41. Đã trực tiếp xem PDF SGK lưu trong thư mục Drive KNTT TOAN 11.
- SBT 11 KNTT tập 1: Bài 1 **trang in 4–7**, Bài 2 **8–10**. Đã xem PDF/mục lục cùng các trang ví dụ/bài tập. Nguồn S1 chính thức; reviewer NotebookLM phải xác nhận đối chiếu trang/mức Core.

## Tài sản mới — source-locked

**Packet:** `THPT-G11-CHI-B01-B02-D1D6-AUTHORING-20261029-R01`. **Temp Reviewer File:** `Temp_THPT_G11_CHI_B01_B02_D1D6_AUTHORING_R01.md`, 28,190 bytes, SHA256 `66954cf4bbb307737ae595851e59f3f080a2c5b862f11d8ca16967b7fe579ce0`.

- **Git mirror byte-identical:** `prototypes/thpt/content-drafts/THPT_G11_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `f0e737f2d07a27f233615345b60070319d5bd00f`. Nội dung học thuật cần NotebookLM review nằm nguyên văn trong gói này.
- **D1/D2:** đủ 2 bài trong phạm vi đã công bố, 7 ví dụ đã giải; 10 outcome dự kiến có bảng gắn chứng cứ.
- **D3:** 16 câu mới đề xuất: 4 Core + 12 Practice/Application (Bài 1: 7, Bài 2: 9). Chưa kiểm dedupe across all branches.
- **D4:** 2 Written (B01 W01, B02 W02-ANCHOR), Anchor chỉ là nhãn.
- **D5:** hai SVG nguồn thật, nguyên XML có trong Temp. `prototypes/thpt/visuals/THPT_G11_B01_UNIT_CIRCLE_5PI6_D5_R01.svg`, blob `a75d70c2dbbedce6934f0f4521c159dd9045844e`; `prototypes/thpt/visuals/THPT_G11_B02_ANGLE_SUM_60_30_D5_R01.svg`, blob `b6cb63f72bbd7d93231c457baf19c4942114957b`. Render thử bằng CairoSVG, XML parse PASS; **chưa review học thuật, mobile QA không thuộc làn này**.
- **D6:** 4 thẻ HELP-G11-B01-01/02 và HELP-G11-B02-01/02; không tạo item_id.
- **QA tự kiểm:** 18/18 candidate IDs duy nhất trong gói, 10 outcome IDs, 7 ví dụ, 4 HELP_ID, 2 SVG; **21 phép kiểm đại số lượng giác symbolic SymPy PASS**; cấm suy đây là Academic PASS.

## Trạng thái và cổng bàn giao

- `NOTEBOOKLM_VERDICT=PENDING`; `ACADEMIC_CLEARANCE=NOT_ISSUED`; `CONTENT_READY=NO`; `RELEASE=NO`.
- Không lập manifest READY khi chưa đủ D1–D6 review, dedupe canonical, S1 source receipt và cổng A1–A7. Bài 3–4 và Chapter Readiness/TOPIC chưa thuộc đợt này.
- Mọi sửa đổi toán học sau snapshot này là `DELTA_C_ACADEMIC_MATERIAL` cần review phạm vi ảnh hưởng. Reviewer phải trả verdict theo Bài / outcome / item / figure / HELP_ID, P0/P1/P2.
- **Việc tiếp:** Nhận verdict NotebookLM cho Bài 1–2, sửa delta đến khi đạt, đối chiếu lần cuối và chuyển sang Bài 3–4 để hoàn thiện Chương I. Nhánh phát hành chỉ nhận packet khi đủ các gate, không được hiểu bản thảo này là tài sản sẵn sàng xuất bản.
