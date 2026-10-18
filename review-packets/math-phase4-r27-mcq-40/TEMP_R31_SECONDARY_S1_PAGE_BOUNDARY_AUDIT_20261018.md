# TEMP R31 — Đối chiếu số trang S1 sau bản đính chính NotebookLM

**Ngày:** 2026-10-18 · **Packet:** `MATH-R27-NEW-MCQ-40-20261018` · **Mục đích:** xác định lỗi số trang thật sự cần bằng chứng SGK gốc.

**Nguồn nhận:** `TEMP_R30_NOTEBOOKLM_S1_ERRATUM_ORIGINAL_20261018.md` là bản đính chính nguyên văn của NotebookLM, `OVERALL_ERRATUM_VERDICT=REVISIONS_REQUIRED` với 24 dòng sửa metadata dẫn chứng. R29 gốc giữ 40/40 PASS *claim* và đáp án chính xác 40/40 theo key ngân hàng; không được coi nguồn sao chép này là bằng chứng toán học toàn diện.

## Phân vùng 24 ID ở độ chính xác theo từng dòng

| Nhóm | Số dòng | Đề xuất sửa từ NotebookLM | Đối chiếu vị trí trang công khai | Đánh giá QA sơ bộ |
|---|---:|---|---|---|
| CT02 — làm tròn | 12 | Toán 6 KNTT T2 Bài 30, các trang 35–38 | Bài 30 chủ yếu trang 35–37; Bài 31 bắt đầu trang 38 | **11** dòng có phạm vi trang nằm trong bài, **1** dòng `NUM02V1_132` dẫn đến trang 38 cần sửa/kiểm tra |
| CT02 — giá trị tuyệt đối | 3 | Toán 7 KNTT T1 Bài 7, các trang 36–38 | Phần giá trị tuyệt đối của Bài 7 nằm ở trang 35–36 | **3** dòng `NUM02V1_145–147` có phạm vi trang vượt khỏi phần kiến thức được dẫn |
| CT04 — chia đa thức | 6 | Toán 7 KNTT T2 Bài 28, trang 39–43 | Bài 28 trang 39–43 | **6** dòng có phạm vi phù hợp với bài, nhưng chưa chốt trang/hoạt động của từng ý |
| CT12 — hàm số/parabol | 3 | Toán 9 KNTT T2 Bài 18–19, trang 11–22 | Bài 18 khoảng trang 4–9; Bài 19 trang 10–17; Luyện tập chung bắt đầu trang 18 | **3** dòng `QUA12V1_121–123` trích phạm vi ngoài Bài 18–19, đồng thời không dẫn vào trang đồ thị Bài 18 |

**Tổng:** 7/24 **cảnh báo xung đột phạm vi trang** đối với đúng các ID `NUM02V1_132`, `NUM02V1_145`, `NUM02V1_146`, `NUM02V1_147`, `QUA12V1_121`, `QUA12V1_122`, `QUA12V1_123`; 17/24 có phạm vi hợp lý ở mức bài học **nhưng không đồng nghĩa có S1 trích dẫn từng câu**.

### Tài liệu đối chiếu công khai (S2 hỗ trợ kiểm toán, không thay thế S1)

- Toán 6 KNTT Bài 30, 35–37: https://www.vietjack.com/toan-6-ket-noi/bai-30-lam-tron-va-uoc-luong.jsp
- Toán 6 KNTT Bài 31 bắt đầu 38: https://vietjack.com/toan-6-ket-noi/bai-31-mot-so-bai-toan-ve-ti-so-va-ti-so-phan-tram.jsp
- Toán 7 KNTT Bài 7, phần giá trị tuyệt đối 35–36: https://www.vietjack.com/toan-7-kn/bai-7-tap-hop-cac-so-thuc.jsp
- Toán 7 KNTT Bài 7 phân đoạn 35–36: https://fqa.vn/giai-bai-tap-sgk/bai-tap/bai-7-tap-hop-cac-so-thuc-e8113/1.html
- Toán 7 KNTT Bài 28, 39–43: https://www.vietjack.com/toan-7-kn/bai-28-phep-chia-da-thuc-mot-bien.jsp
- Toán 7 KNTT Bài 28 trang 40–43: https://vndoc.com/toan-7-bai-28-phep-chia-da-thuc-mot-bien-285847
- Toán 9 KNTT Bài 18, sách trình bày trang 4–9: https://www.sachgiaokhoa247.com/sach-giao-khoa/lop-9-12/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vi-ham-so-yax2-a0-phuong-trinh-bac-hai-mot-an-2187/bai-18-ham-so-yax2-a0-7421.html
- Toán 9 KNTT Bài 18,19 và các phần luyện tập: https://loigiai.com.vn/sgk-toan-9-ket-noi-tri-thuc

**Ranh giới bằng chứng:** Những trang/lesson do các website giáo dục công khai cung cấp không phải biên bản NotebookLM đối chiếu nguyên bản SGK KNTT S1 đã được kiểm tra. Những bài MCQ mới không nhất thiết có câu hỏi nguyên văn trong SGK; S1 cần làm rõ *kiến thức làm cơ sở* và lớp/bài/hoạt động liên quan. Không khẳng định 17 câu đã PASS chỉ vì khoảng trang có vẻ hợp lý.

## Công cụ và kết quả QA

`scripts/prototypes/math-v2-r31-s1-page-boundary-audit.js` nhận 24 hàng từ receipt R30 **khóa Git blob SHA**, gắn lại ID và 40 nguồn R27 có SHA-256, đánh giá theo phạm vi trang công khai, trả 7 `SECONDARY_CROSSCHECK_PAGE_SPAN_CONFLICT_HOLD` và 17 `SECONDARY_CROSSCHECK_PLAUSIBLE_SPAN_NEEDS_PRIMARY_S1`. Bộ test `scripts/test-math-v2-r31-s1-page-boundary-audit.js` kiểm tra đúng bảy mã bị cảnh báo. Những lần sửa câu hỏi, source receipt, hoặc phân vùng phải được phân tích lại, không có cơ chế nâng kết luận PASS tự động.

## Bước xác minh học thuật cần thiết

Ưu tiên **7 mã có xung đột phạm vi trang**. Cần đối chiếu trực tiếp SGK/SBT KNTT gốc đã đưa vào NotebookLM theo trang/hoạt động và phân lớp S1. Rà thêm 17 dòng phạm vi tương thích, ít nhất xác nhận các trích dẫn thực sự dẫn đến phần kiến thức cần đánh giá. Mọi chấp nhận học thuật phải có review receipt riêng và chính sách dữ liệu độc lập.

**Cấm:** sửa ngân hàng câu hỏi vì lỗi số trang; nâng 40/40 thành academic PASS; cập nhật Taxonomy v2, Mastery, Readiness; hồi tố hoặc trộn localStorage giữa máy tính và iPad.

**Trạng thái R31:** S2 crosscheck technical QA — **chưa duyệt học thuật S1, chưa bật Skill**.
