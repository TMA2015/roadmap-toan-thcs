# Toán 10 · Chương VI — Authoring Register v0.1

**Ngày:** 27/10/2026  
**Phase:** GOLDEN_UI_DESIGN_PASS → LESSON_DRAFTS_IN_GITHUB → S1_RECEIPT_PENDING  
**Branch:** `feature/thpt-g10-b16-knowledge-pilot-r1-20261026`, Draft PR #612  
**Quy tắc:** Project Sources 06 (bàn giao NotebookLM), 07 (review cụm/chương và delta risk).  
**Đối tượng:** SGK Toán 10 KNTT tập 2, Chương VI *Hàm số, đồ thị và ứng dụng*.

## 1. Sổ trạng thái từng đơn vị nội dung

| Lesson/key (planning only) | Tệp trên nhánh | Mức hoàn thiện | S1 receipt | Academic verdict |
|---|---|---|---|---|
| G10-CHVI-B15 | `docs/thpt-preview/sgk/chuong-vi/bai-15.md` | Draft lý thuyết + ví dụ + tự luyện | PENDING (chưa đọc PDF gốc) | NOT_REVIEWED |
| G10-CHVI-B16 | `docs/thpt-preview/sgk/chuong-vi/bai-16.md` | Golden Pilot R4 đã thẩm định | SGK in 11–16, SBT 10–14 theo reviewer receipt | **PASS, clearance YES** đúng snapshot đã duyệt |
| G10-CHVI-B17 | `docs/thpt-preview/sgk/chuong-vi/bai-17.md` | Draft định lí, xét dấu, bất phương trình, ví dụ, tự luyện | PENDING | NOT_REVIEWED |
| G10-CHVI-B18 | `docs/thpt-preview/sgk/chuong-vi/bai-18.md` | Draft 2 dạng phương trình chứa căn, kiểm nghiệm, ví dụ, tự luyện | PENDING | NOT_REVIEWED |
| G10-CHVI-END | `docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md` | Draft 8 bài tổng hợp nguyên gốc với lời giải; chưa có canonical IDs | PENDING | NOT_REVIEWED |

Tất cả các lesson key `G10-CHVI-...` là **nhãn kế hoạch**, chưa chốt canonical ID cho hệ thống học tập. **Không dùng** ba bài tự luyện nháp thành Core/Readiness chính thức hay mastery evidence.

## 2. Mạch chương đã được kiểm tra sơ bộ

Nguồn mục lục công khai để định hướng (secondary web evidence, **không thay thế SGK/SBT gốc**):

- https://toanmath.com/2022/01/sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.html
- https://toan10.edu.vn/sgk-toan-10-ket-noi-tri-thuc

| Lesson | Các mảng dự kiến phải xác minh qua S1 | Trang in ghi trên chỉ mục web, **không phải S1 receipt** |
|---|---|---|
| B15 | Khái niệm hàm số, đồ thị, đồng/nghịch biến | 5–9 theo chỉ mục câu hỏi và bài tập |
| B16 | Khái niệm, parabol, đỉnh, tính chất, mô hình thực tế | 11–16 theo receipt NotebookLM |
| B17 | Tam thức bậc hai, định lí dấu, bất phương trình, vận dụng | 19–24 theo chỉ mục web |
| B18 | `sqrt(A)=sqrt(B)`; `sqrt(A)=B`; thử lại | 25–26 theo chỉ mục web; phải xác minh trang bài tập |
| Cuối chương | bài tập tổng hợp và yêu cầu vận dụng | cần xác minh từ bản in |

Các bản nháp B15/17/18 dùng **ví dụ do dự án viết** và tự kiểm đại số, chưa chứng minh hoàn thành 100% phạm vi SGK.

## 3. Ma trận chuẩn bị (DRAFT, NOT VERIFIED OUTCOMES)

| Nhãn outcome dự kiến | Kiến thức / điều kiện | Bản nháp hiện tại | Nguồn cần soát |
|---|---|---|---|
| B15-P01 | định nghĩa hàm số và tập xác định/tập giá trị | Có | định nghĩa + ví dụ gốc S1 |
| B15-P02 | công thức/bảng/đồ thị, tiêu chí thuộc đồ thị | Có | HĐ/BT SGK |
| B15-P03 | đồng biến, nghịch biến trên khoảng | Có | ghi đúng phạm vi đề bài SGK |
| B17-P01 | định nghĩa (ax^2+bx+c), (a\ne0), biệt thức | Có | định nghĩa, chú ý trong SGK |
| B17-P02 | định lí dấu khi (Delta<0,=0,>0) | Có | chứng minh đồ thị và từng trường hợp |
| B17-P03 | bất phương trình bậc hai và ứng dụng | Có ví dụ | nguồn hoạt động thực tế / SBT |
| B18-P01 | phương trình (sqrt{A}=sqrt{B}) | Có | đề mục/điều kiện từ SGK |
| B18-P02 | phương trình (sqrt{A}=B) | Có | đề mục/điều kiện từ SGK |
| B18-P03 | lọc nghiệm ngoại lai, thử nghiệm | Có | ví dụ, mức độ SBT |
| CHVI-END | tổng hợp và liên bài | Chưa | chương tổng hợp và BT cuối chương |

Những nhãn `P01`... trên chỉ là **working labels**, không công nhận outcome SGK chuẩn. Chuyển sang outcome register chính thức **sau** khi đối chiếu PDF thật.

## 4. Kiểm tra toán học nội bộ cho ví dụ mới

Đã đối chiếu bằng biến đổi đại số, phép thế và kiểm tra biên:

- B15: ((x+1)/(x-2)=1+3/(x-2)) với (x\ne2) ⇒ tập giá trị (mathbb R\setminus\{1\}).
- B17: (x(18-2x)\ge36\) với (0<x<9) ⇔ (x\in[3;6]\). (2x^2+3x+5) có (Delta=-31) nên luôn dương.
- B18: (x^2-4x+2=0) cho (2\pm\sqrt2) (cả hai phù hợp điều kiện (sqrt{x+2})); (sqrt{2x+3}=x-1) cho nghiệm duy nhất (2+\sqrt6), nghiệm (2-\sqrt6) ngoại lai; (sqrt{x+2}=x) cho nghiệm duy nhất (2).
- **Đây là self-QA**; không thay thế review học thuật độc lập hoặc nguồn S1.

## 5. Việc kế tiếp có thể tự làm

1. Hoàn tất source receipt SGK/SBT PDF gốc cho B15/B17/B18/cuối chương. Google Drive connector hiện trả lỗi nội bộ; chưa có bản PDF gốc trong tệp gắn chat để đối chiếu trực tiếp.
2. Sau khi nhận S1, hiệu chỉnh phạm vi và chiều sâu D1–D6; bổ sung ví dụ và câu luyện tập đầy đủ.
3. Đăng ký canonical Core/Practice/Readiness/Written/Anchor và key/rubric theo Project Source 05; không nhân bản Core hoặc dùng Readiness 2 câu demo để ghi thành thạo.
4. Soạn Bài tập cuối Chương VI và cross-lesson outcome matrix.
5. Chỉ lúc đầy đủ, xuất bộ Batch Source `Temp_*.md`/ZIP kèm **prompt ngắn** theo Source 06 để NotebookLM review cụm/chương. Không review lại B16 nếu nội dung đã PASS không đổi.

**Release gate:** all new lesson pages remain `DRAFT_NOT_ACADEMICALLY_REVIEWED`. PR vẫn Draft, không deploy.
