# Toán THPT — Chương VI · Knowledge source-to-website parity receipt v1

**Ngày:** 28/10/2026 · **Phạm vi:** SGK KNTT B15–18 · **Repo:** Draft PR #612, preview-only.  
**Nguồn học thuật đối chiếu:** đúng `Temp_01_THPT_G10_CHVI_KIEN_THUC_15_18_REVIEW.md` trong ZIP gói `THPT-G10-CHVI-KNTT-BATCH-CANDIDATE-20261028`, SHA256 `352ffa3decb62ca9e2d1b524837b88e8c3faec33bb799e4362b6f19c3e42e87b`; outcome register trong `Temp_05` (19/19 FULL theo biên bản NotebookLM chủ dự án gửi).  
**Kết luận reviewer:** `ACADEMIC_OVERALL=PASS`, `ACADEMIC_CLEARANCE=YES` **cho snapshot**. Đây là **biên bản mapping kỹ thuật**, **không cấp Academic PASS mới** cho bản HTML/GitHub. Không phát hành hoặc merge.

## 1. Đối chiếu 19 outcomes tới trang học SGK hiện hành

| Outcome | Kiến thức tương ứng trong snapshot được duyệt | Website preview source | Structural mapping | QA riêng |
|---|---|---|---|---|
| B15_OUT_01 | §15.1 Hàm số, tính đơn trị và bảng | `sgk/chuong-vi/bai-15.md` §1 | Có, bổ sung bảng đầu vào lặp cùng/khác đầu ra | Nội dung ví dụ, không dùng làm Readiness |
| B15_OUT_02 | §15.1 tập xác định/tập giá trị căn và mẫu | B15 §1 | Có | Đúng điều kiện căn/mẫu và tập giá trị |
| B15_OUT_03 | §15.2 điểm thuộc đồ thị; bảng/đồ thị | B15 §2 | Có | Trục/điểm, không ngoại suy từ bảng |
| B15_OUT_04 | §15.3 đồng/nghịch biến theo từng khoảng | B15 §3 | Có | Kiểm miền x, x1<x2 |
| B15_OUT_05 | §15.2 mô hình phí từng đoạn | B15 §2 (bảng C(x)) | Có | Hai miền, điểm biên x=2, đơn vị |
| B16_OUT_01 | §16.1 `a≠0`, định nghĩa và domain | `sgk/chuong-vi/bai-16.md` §1 | Có | Không biến thành tuyến tính |
| B16_OUT_02 | §16.1 dạng đỉnh/trục | B16 §2–3 | Có | Tọa độ đỉnh và dấu hệ số |
| B16_OUT_03 | §16.2 bốn bước vẽ & giao Ox/Oy | B16 §2–3 + parabol SVG | Có | QA trình duyệt SVG, dấu nét đứt |
| B16_OUT_04 | §16.1 biến thiên và tập giá trị | B16 §2–3 | Có | Hai trường hợp dấu a |
| B16_OUT_05 | §16.3 mô hình chuyển động/doanh thu | B16 §5 | Có | Miền thực tế, đơn vị & cực trị |
| B17_OUT_01 | §17.1 tam thức, Δ, nghiệm và dấu a | `sgk/chuong-vi/bai-17.md` §1–2 | Có | Phải nêu a khác 0 |
| B17_OUT_02 | §17.1 ba trường hợp Δ; bảng dấu | B17 §2 | Có | Δ=0 không đổi dấu tại nghiệm kép |
| B17_OUT_03 | §17.2 bất phương trình và đầu mút | B17 §3 | Có | Dấu bằng lấy nghiệm đầu mút |
| B17_OUT_04 | §17.3 tham số ở Practice vận dụng | B17 §3 (tiểu mục tham số) | Có | Δ<0 cho dấu >0 mọi x khi a>0 |
| B17_OUT_05 | §17.2 mô hình rào vườn | B17 §3 | Có | Miền hình học và đổi chiều khi chia số âm |
| B18_OUT_01 | §18.1–18.2 căn=căn và miền căn | `sgk/chuong-vi/bai-18.md` §2 | Có | Kiểm hai radicand trên tập số thực |
| B18_OUT_02 | §18.1–18.3 căn=biểu thức và dấu | B18 §3 | Có | `B(x)≥0` và `A(x)=B(x)^2` |
| B18_OUT_03 | §18.2–18.3 ngoại lai & thử lại | B18 §2–4 | Có, bổ sung `√(u²)=|u|` | Không lấy nghiệm ngoài miền xác định |
| B18_OUT_04 | §18.3 mô hình tam giác vuông | B18 §3 | Có | Đơn vị, điều kiện x>0, nghiệm thật |

**Cách hiểu “Có”:** trang hiện có **vị trí trình bày và nội dung toán tương ứng** với outcome của `Temp_01`. Đây **không** là khẳng định bản Markdown GitHub từng byte giống snapshot; trang học có bố cục HTML/SVG riêng và thêm minh họa hợp phạm vi. Các ví dụ mới đã được reviewer chấp thuận về **chủ đề** trong snapshot; với câu chữ/đáp án sửa thực chất về sau phải áp delta policy 07.

## 2. Các bước đồng bộ và giữ tài nguyên dùng chung

- **B15:** Làm rõ một đầu vào lặp cùng đầu ra vẫn mô tả hàm số; không dùng sai tiêu chí song ánh. Hàm từng đoạn, ví dụ bảng đã khớp miền và số học `Temp_01`.
- **B16:** Giữ hình SVG động trong R4, nguồn Core chuẩn và hai mô hình Delta C đã qua NotebookLM trong batch. Không nhân bản nội dung vào chuyên đề.
- **B17:** Ba trường hợp Δ, bảng hai dấu a, nghiệm kép, tham số và bài toán rào vườn tương thích `Temp_01`.
- **B18:** Cả hai dạng căn, kiểm dấu vế phải, nghiệm ngoại lai và ví dụ tam giác. Bổ sung nguyên tắc `√(u²)=|u|` có sẵn ở nguồn đã duyệt.
- **Luyện tập/Vận dụng:** 18 formative canonical mới (B15/B17/B18), 2 item gốc B16, 8 bài tổng hợp A1–B4, 8 Written/Anchor. Mapping nhiều placement cho một item; topic placements chỉ `PENDING_TOPIC_OUTCOME_REVIEW`.
- **Tự kiểm tra cuối Chương VI:** 18 item đã được review **vẫn chỉ là HELD_OUT**; tuyệt đối không commit đề/đáp án vào public repo hoặc tải trước trong JS. Demo bốn câu hiện hành tiếp tục `TECHNICAL_DEMO_ONLY` và không mastery.

## 3. Cổng hoàn tất trước phát hành website THPT

1. CI R4 source-parity structural assertions + browser UI tests; bổ sung QA nội dung trên máy thực, toán học/bố cục từng lesson.
2. Bảo vệ assessment: kho đề/đáp án kiểm tra được bảo vệ bên máy chủ, quyền truy cập, Final Submit và ledger exposure/attempt theo người học và hai nhánh; kiểm chống ghi trùng.
3. Kiểm chứng nội dung chính thức với học liệu đã review; phân tách academic snapshot PASS và production implementation PASS.
4. Phê duyệt owner độc lập trước merge, build hosting, deploy hoặc ghi kết quả thật.

**Việc đặt đường dẫn:** THPT là một **site section/learning app độc lập ở cấp giao diện**, có thể ở route `/thpt/` trên cùng hạ tầng G Learning; không có cam kết tên miền hoặc Firebase app chính thức nào được tạo trong PR này. Chưa thay đổi THCS hoặc `mkdocs.yml` production.

```text
SGK_CHVI_KNOWLEDGE_SOURCE|REVIEWED_19_OF_19_OUTCOMES
SGK_CHVI_WEBSITE_PARITY|MAPPED_19_OF_19_STRUCTURAL_PENDING_FINAL_UAT
CHVI_PUBLIC_FORMATIVE_WRITTEN|36_CANONICAL_ITEMS
CHVI_HELDOUT_READINESS|18_REVIEWED_BODIES_NOT_IN_PUBLIC_CODE
THPT_RELEASE_ROUTE|PLANNED_NOT_DEPLOYED
MERGE_DEPLOY|NO
```
