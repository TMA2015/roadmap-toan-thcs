# Review KNTT-MAP-G6-001

**Source:** Gemini author output  
**Reviewer:** ChatGPT  
**Final verdict:** PASS-WITH-CHANGES  
**Integrated artifact:** `docs/assets/data/curriculum/kntt-grade6-map.json`

## Điểm làm tốt

Gemini nhận diện đúng phần lớn **các cụm kiến thức** của Toán 6: số tự nhiên, chia hết, số nguyên, hình phẳng trực quan, đối xứng, phân số, số thập phân/phần trăm, hình học cơ bản, thống kê và xác suất thực nghiệm.

Các đề xuất tách skill như cộng/trừ số nguyên, ƯCLN/BCNN, phân số, biểu đồ và xác suất thực nghiệm cũng phù hợp với hướng learner model của Roadmap.

## Thay đổi bắt buộc trước khi tích hợp

### 1. Sửa cấu trúc chương KNTT

Draft đã gộp/đánh số sai nhiều chương từ phần hình học trở đi.

Cấu trúc được dùng sau review:

1. Tập hợp các số tự nhiên
2. Tính chia hết trong tập hợp các số tự nhiên
3. Số nguyên
4. Một số hình phẳng trong thực tiễn
5. Tính đối xứng của hình phẳng trong tự nhiên
6. Phân số
7. Số thập phân
8. Những hình học cơ bản
9. Dữ liệu và xác suất thực nghiệm

### 2. Thay pseudo topic ID bằng ID thật của Roadmap

Các ID như `so-tu-nhien`, `chia-het`, `phan-so`, `hinh-hoc-truc-quan` không tồn tại trong kiến trúc 25 chuyên đề.

Mapping chính dùng các ID thật như:

- `02-so-va-phep-tinh`
- `03-ti-le-ti-le-thuc`
- `13-goc-va-duong-thang`
- `20-hinh-hoc-tong-hop`
- `21-thong-ke`
- `23-xac-suat`
- `24-bai-toan-thuc-te`

### 3. Bổ sung nội dung bị bỏ sót

Draft chưa thể hiện rõ:

- Bài 15: quy tắc dấu ngoặc;
- Bài 17: phép chia hết, ước và bội của số nguyên;
- Bài 27: hai bài toán về phân số;
- Bài 30: làm tròn và ước lượng;
- phân tách Chương 4 và Chương 5;
- biểu đồ tranh và khái niệm sự kiện/kết quả có thể ở Chương 9.

### 4. Loại nội dung không nên gắn Grade 6 Core

Draft đề xuất `tia-phan-giac` cho phần góc lớp 6. Trong mapping KNTT lớp 6 được kiểm tra, Chương 8 tập trung điểm/đường/tia/đoạn/trung điểm/góc/số đo và phân loại góc; tia phân giác thuộc lớp nội dung sau của Roadmap, không gắn Grade 6 Core.

Tương tự, đề xuất “tìm số nguyên x chứa giá trị tuyệt đối hoặc chia hết” không được coi là một **gap Core** chỉ từ mô tả draft; dạng mở rộng có thể tồn tại nhưng phải tách khỏi yêu cầu KNTT Core.

## Phát hiện kiến trúc từ task này

Các Practice Bank hiện đang chứa skill của **nhiều lớp trong cùng một topic**. Vì vậy bước tiếp theo không phải tách bank ngay mà là thêm metadata curriculum theo grade/lesson.

Ví dụ:

- CĐ13: Grade 6 chỉ dùng subset điểm–tia–đoạn–góc; song song/góc đối đỉnh là lớp sau.
- CĐ23: Grade 6 chỉ cần kết quả có thể/sự kiện đơn giản/xác suất thực nghiệm; xác suất cổ điển/sơ đồ cây là lớp sau.
- CĐ21: Grade 6 dùng bảng/biểu đồ cột/cột kép; dữ liệu ghép nhóm và nhiều nội dung khác là lớp sau.

## Kết luận benchmark

Task này cho thấy Gemini có **coverage học thuật theo chủ đề khá tốt**, nhưng curriculum mapping cần một lớp kiểm tra repository + mục lục chuẩn trước khi publish.

Routing giữ nguyên:

`GEMINI_LEAD + CHATGPT_REPOSITORY/CURRICULUM_QA`

Chưa đủ sample để nâng capability này lên BENCHMARKED.
