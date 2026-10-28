# Toán 10 KNTT · Chương VII — S1 Source Receipt (draft authoring)

**Date:** 28/10/2026 · **Scope:** *Phương pháp tọa độ trong mặt phẳng* · **Academic:** NOT_REVIEWED · **Release:** NO

Nguồn trực tiếp: ảnh quét PDF **SGK Toán 10 tập 2 Kết nối tri thức** và **SBT Toán 10 tập 2 Kết nối tri thức** đã có trong dự án. Hai file PDF là bản quét, không có text layer; đối chiếu bằng **hình trang gốc**, không suy luận từ tìm kiếm web hay OCR. Số trang dưới đây là **số in trên sách**, không phải chỉ số PDF. Nguồn giáo khoa không được chép vào repo.

| Đơn vị | SGK trang in (đã xác minh hình trang) | SBT trang in (đã xác minh hình trang) | Chủ điểm trực tiếp nhìn thấy |
|---|---|---|---|
| Chương VII | 29–60 | 27–49 | Phương pháp tọa độ trong mặt phẳng |
| Bài 19 · Phương trình đường thẳng | 30–34 | 27–31 (phần B19 trước đầu B20 trên tr.31) | Vector pháp tuyến/chỉ phương, phương trình tổng quát/tham số, dựng đường thẳng qua điểm |
| Bài 20 · Vị trí tương đối của hai đường thẳng. Góc và khoảng cách | 35–41 | 31–38 (phần B20 trước đầu B21 trên tr.38) | Vị trí tương đối, góc, công thức khoảng cách điểm–đường thẳng, ứng dụng |
| Bài 21 · Đường tròn trong mặt phẳng tọa độ | 42–46 | 38–41 (phần B21 trước đầu B22 trên tr.41) | Phương trình đường tròn, tâm/bán kính, tiếp tuyến, xác định đường tròn |
| Bài 22 · Ba đường conic | 47–58 | 41–46 (p46 có phần đầu bài cuối chương) | Elip, hypebol, parabol, tiêu điểm, các tham số, phương trình chính tắc, ứng dụng |
| Bài tập cuối Chương VII | 59–60 | 46–49 | Bài tổng hợp tọa độ, đường thẳng, tròn, conic |

**Kỹ thuật xác minh:** kiểm tra ảnh overview các trang in SGK 29–60 / SBT 27–49; kiểm tra rõ trang mở đầu B19 (SGK 30, SBT 27), B20 (SGK 35, SBT 31), B21 (SGK 42, SBT 38), B22 (SGK 47, SBT 41), bài tập cuối (SGK 59, SBT 46). Một số trang chuyển bài giữa trang nên phạm vi in có chồng lấp có chủ ý.

**Độ sâu kiểm kê:** SOURCE_STRUCTURE_VISUALLY_VERIFIED. Chưa khẳng định từng câu SGK/SBT hay hình có outcome riêng đã được truy vết đến từng item. Không gọi đây là academic complete audit. Ngân hàng câu dưới đây là **bài tự soạn** theo khái niệm và dạng toán đã quan sát, không sao chép bài trong SGK/SBT. Từng outcome/đáp án vẫn cần QA và NotebookLM thẩm định về sau.

## Kế hoạch ngân hàng dùng chung

- **B19:** phương trình tổng quát/tham số, vector chỉ phương/pháp tuyến, dựng đường thẳng, điều kiện điểm thuộc đường.
- **B20:** song song/trùng/cắt/vuông góc, giao điểm, góc giữa hai đường, khoảng cách điểm–đường.
- **B21:** tâm/bán kính từ dạng chính tắc/tổng quát, đường tròn qua các điểm, tiếp tuyến và tiếp xúc.
- **B22:** elip/hypebol/parabol, tiêu điểm, tiêu cự, trục, tiệm cận, đường chuẩn và mô hình hình học.

**Canonical bank rule:** một `item_id` ứng viên với `answer_key`/solution nội bộ cho mỗi bài toán; nhiều placements SGK Core/Practice, Topic Practice và Written phù hợp; không nhân bản theo nhánh. Không đưa các câu có thể được dùng cho **SGK_CHAPTER_READINESS / TOPIC_READINESS** lên giao diện học sinh hoặc máy khách trước Final Submit. Từ một câu học sinh đã gặp không được tính thêm mastery độc lập khi chuyển nhánh.

**UI:** Không tạo trang mới trong Golden UI R4 hoặc thay menu; đây chỉ là **gói phát triển nội bộ** trước NotebookLM. Không phát hành Chapter VII/Chuyên đề dọc và không tự Academic PASS.

Gates: `S1_CHVII_STRUCTURE=VISUAL_VERIFIED`; `CHVII_BANK=INTERNAL_CANDIDATES`; `CHVII_FULL_OUTCOME_AUDIT=PENDING`; `CHVII_NOTEBOOKLM=NOT_SENT`; `MERGE_DEPLOY=NO`.
