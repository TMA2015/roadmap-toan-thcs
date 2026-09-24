# Review KNTT-MAP-G8-001

**Source:** Gemini author output  
**Reviewer:** ChatGPT  
**Gemini verdict:** PASS  
**Final review verdict:** PASS-WITH-CHANGES  
**Integrated artifact:** `docs/assets/data/curriculum/kntt-grade8-map.json`

## Mức cải thiện so với G6–G7

Đây là vòng mapping tốt nhất cho tới hiện tại.

Việc cung cấp **existing skill inventory** đã có tác dụng rõ:
- Gemini tái sử dụng đúng hầu hết skill đã có;
- chỉ đề xuất skill mới ở các gap có thật;
- sửa đúng boundary CĐ20/CĐ24 cho hình khối;
- continuity upstream/downstream rõ hơn.

## Các proposed skill được chấp nhận hoặc tinh chỉnh

### CĐ04
Chấp nhận:
- `chia-da-thuc-cho-don-thuc`

### CĐ17
Chấp nhận:
- `tinh-chat-duong-phan-giac`

### CĐ20
Ý tưởng Gemini đúng nhưng tách thành ba skill để chẩn đoán tốt hơn:
- `nhan-biet-hinh-chop-deu`
- `dien-tich-xung-quanh-hinh-chop`
- `the-tich-hinh-chop`

### CĐ23
Bổ sung theo đúng ngôn ngữ KNTT:
- `ket-qua-co-the`
- `ket-qua-thuan-loi`

## Các chỉnh sửa học thuật bắt buộc

### 1. `tach-hang-tu-giua` không phải KNTT Grade 8 Core

Bài 9 KNTT lớp 8 tập trung:
- đặt nhân tử chung;
- nhóm hạng tử;
- dùng hằng đẳng thức;
- phối hợp các cách trên.

Kỹ thuật tách hạng tử giữa/tam thức bậc hai được giữ trong bank như mở rộng nhưng bị loại khỏi Grade 8 Core filter.

### 2. Scope của CĐ08 lớp 8

Grade 8 Core dùng:
- nghiệm phương trình;
- phương trình bậc nhất;
- biến đổi phương trình nhiều bước ở mức đưa về ax+b=0;
- lập phương trình.

Không đưa vào Grade 8 Core:
- phương trình tích;
- phương trình chứa ẩn ở mẫu;
- bất phương trình bậc nhất;
- tham số.

Các phần này tiếp tục tồn tại trong Vertical Spine và được mở ở lớp sau.

### 3. Xác suất dùng đúng ngôn ngữ lớp 8

KNTT Bài 30 dùng trực tiếp:
- kết quả có thể;
- kết quả thuận lợi.

Vì vậy không nên bắt Grade 8 Core phải đi qua terminology `khong-gian-mau` nếu bài học hiện tại chưa dùng nó như thuật ngữ chính.

### 4. Pythagore là node độc lập trong continuity

Đồng dạng có thể cung cấp một cách chứng minh Pythagore, nhưng không coi `dong-dang-gg` là prerequisite bắt buộc của Pythagore.

Upstream chính:
- bình phương;
- căn bậc hai số học;
- tam giác vuông.

Downstream:
- hệ thức lượng;
- lượng giác;
- đo chiều cao/khoảng cách.

## Điều không chấp nhận trong ghi chú sư phạm

### “Hard Gate mastery tuyệt đối”

Không áp dụng.

Roadmap dùng **soft mastery**:
- cảnh báo prerequisite yếu;
- ưu tiên luyện điểm yếu;
- cho phép xem/học tiếp;
- dùng accuracy + hint usage + lịch sử để gợi ý remediation.

Không khóa một học sinh ở một chương chỉ vì chưa đạt 100%.

### “Mất gốc vĩnh viễn”

Không dùng ngôn ngữ này trong nội dung học sinh.

Triết lý Roadmap chính là mọi lỗ hổng đều phải **truy nguyên và vá lại được**.

## Kết luận benchmark

G8 cho thấy khi input được chuẩn hóa tốt, chất lượng curriculum mapping của Gemini tăng mạnh.

Điểm mạnh quan sát được:
- coverage;
- pedagogy;
- reuse skill khi có inventory;
- continuity;
- gap detection.

QA vẫn cần ở:
- ranh giới chính xác Core/extension;
- dependency toán học có thật vs liên hệ sư phạm;
- mastery policy.

Routing giữ:
`GEMINI_LEAD + CHATGPT_REPOSITORY/CURRICULUM_QA`

Capability vẫn là **OBSERVED** cho đến khi hoàn tất ít nhất G9 và có một vòng kiểm tra corpus độc lập.
