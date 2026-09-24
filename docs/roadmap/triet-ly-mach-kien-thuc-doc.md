# Triết lý mạch kiến thức dọc

> **Nguyên tắc cốt lõi:** Roadmap Toán THCS không phải là bốn chương trình lớp 6, 7, 8, 9 ghép lại. Đây là **một hệ thống kiến thức liên tục** từ nền tảng đến vận dụng, trong đó 25 chuyên đề là khung xương sống và lớp học chỉ là metadata để định vị nội dung.

## 1. Mục tiêu của Roadmap

Roadmap phải giúp học sinh:

- học kiến thức mới nhưng luôn thấy nó được xây trên nền nào;
- khi sai một skill, lần ngược được về prerequisite;
- khi đã vững nền, nhìn thấy skill đó sẽ được dùng tiếp ở đâu;
- tự học, tự kiểm tra và tự vá lỗ hổng mà không cần phụ thuộc hoàn toàn vào giáo viên;
- dùng cùng một hệ thống trong suốt THCS và khi ôn tuyển sinh vào lớp 10;
- học phần mở rộng/Challenge mà không làm biến dạng mạch Core.

## 2. 25 chuyên đề là **Vertical Spine**

25 chuyên đề là cấu trúc ổn định nhất của dự án.

Ví dụ:

```text
Số và phép tính
  ↓
Tỉ lệ
  ↓
Biểu thức đại số
  ↓
Hằng đẳng thức
  ↓
Phân tích nhân tử
  ↓
Phân thức
  ↓
Phương trình/BPT
  ↓
Hệ phương trình
  ↓
Hàm số
  ↓
Căn thức
  ↓
PT bậc hai & Viète
```

Hình học:

```text
Điểm – tia – đoạn – góc
  ↓
Quan hệ đường thẳng
  ↓
Tam giác
  ↓
Đường đặc biệt trong tam giác
  ↓
Tứ giác
  ↓
Thales – đồng dạng
  ↓
Tam giác vuông – hệ thức lượng
  ↓
Đường tròn
  ↓
Hình học tổng hợp
```

Thống kê – xác suất:

```text
Thu thập dữ liệu
  ↓
Biểu diễn dữ liệu
  ↓
Phân tích dữ liệu
  ↓
Đại lượng đặc trưng
  ↓
Xác suất
  ↓
Mô hình hóa và bài toán thực tế
```

Đây là **dòng chảy chính**. Lớp 6–9 chỉ cho biết một phần của dòng chảy thường được học ở thời điểm nào.

## 3. KNTT là lớp định vị, không phải cấu trúc thay thế

Mapping KNTT có ba nhiệm vụ:

1. xác định nội dung nào của Vertical Spine thuộc từng lớp/chương/bài;
2. đảm bảo Roadmap không thiếu Core;
3. cho phép học sinh truy cập theo SGK khi cần.

Mapping KNTT **không**:
- tạo bốn cây kiến thức tách rời;
- thay thế 25 chuyên đề;
- buộc Practice Bank phải tách cứng theo lớp;
- biến lớp hiện tại thành ranh giới ngăn học sinh xem prerequisite hoặc knowledge-next.

Ví dụ:

```text
KNTT lớp 6: phân số
        ↓
CĐ02: Số và phép tính
        ↓
skill: phép tính phân số
        ↓
prerequisite cho:
CĐ03 tỉ lệ → CĐ07 phân thức → CĐ08 phương trình
```

## 4. Mỗi skill phải có khả năng truy nguyên

Mỗi skill dần cần đủ metadata để trả lời bốn câu:

1. **Tôi đang học gì?**
2. **Tôi cần biết gì trước?**
3. **Nếu sai, tôi nên quay lại đâu?**
4. **Kỹ năng này sẽ dùng tiếp ở đâu?**

Schema hướng tới:

```json
{
  "id": "phep-tinh-phan-so",
  "topic": "02-so-va-phep-tinh",
  "curriculum": {
    "book": "KNTT",
    "grades": [6]
  },
  "prerequisites": [
    "ucln",
    "bcnn",
    "quy-dong-so-sanh-phan-so"
  ],
  "unlocks": [
    "ti-so",
    "phan-thuc-dai-so",
    "phuong-trinh-chua-an-o-mau"
  ]
}
```

Không bắt buộc mọi edge phải hoàn thiện ngay; nhưng mọi lần bổ sung content phải tôn trọng nguyên tắc này.

## 5. Một chuyên đề là một “câu chuyện 4 năm”

Trang chuyên đề không nên chia thành bốn bài độc lập theo lớp.

Thay vào đó, nên cho thấy:

- **Nền móng:** các ý tưởng đầu tiên;
- **Phát triển:** skill được mở rộng;
- **Kết nối:** skill kết hợp với chuyên đề khác;
- **Vận dụng:** bài thực tế/tổng hợp;
- **Tuyển sinh vào 10:** cách skill được dùng trong bài thi;
- **Challenge:** mở rộng tự chọn.

Ví dụ CĐ13 không phải “phần lớp 6 + phần lớp 7”, mà là câu chuyện:

```text
điểm/tia/đoạn/góc
→ đo và phân loại góc
→ góc đặc biệt
→ vuông góc/song song
→ định lí/chứng minh
→ nền cho tam giác và hình học suy luận
```

## 6. Practice Engine phải phục vụ truy nguyên

Practice Engine không chỉ hỏi “đúng hay sai”.

Mục tiêu dài hạn:

```text
Sai câu
  ↓
xác định skill
  ↓
kiểm tra pattern lỗi
  ↓
xem prerequisite
  ↓
gợi ý ôn skill nền
  ↓
luyện lại
  ↓
quay về skill ban đầu
```

Hint usage, accuracy và learner history là dữ liệu để quyết định học sinh **đang thiếu skill hiện tại hay thiếu nền phía dưới**.

## 7. Mastery là chỉ dẫn, không phải cánh cổng tuyệt đối

Roadmap không dùng quy tắc kiểu **“chưa đạt 100% thì khóa chương sau”**.

Thay vào đó:

- cảnh báo khi prerequisite yếu;
- ưu tiên bài luyện bù lỗ hổng;
- phân biệt đúng độc lập với đúng sau khi xem hint;
- cho phép học sinh tiếp tục học và quay lại remediation;
- dùng lịch sử nhiều lần làm để đánh giá ổn định hơn một bài test duy nhất.

Mục tiêu là **truy nguyên và sửa lỗ hổng**, không phải gắn nhãn “mất gốc” hay chặn tiến độ.

## 8. Thi vào 10 là đích sử dụng, không phải một chương trình tách biệt

Ôn thi vào 10 không tạo một “roadmap thứ hai”.

Đề thi dùng lại các skill trong Vertical Spine nhưng yêu cầu:
- phối hợp nhiều skill;
- nhận dạng nhanh;
- ít lỗi kỹ thuật;
- chịu được bài nhiều bước;
- mô hình hóa thực tế.

Vì vậy metadata thi cử nên gắn **trên skill/topic hiện hữu**.

## 9. Challenge/Thi chuyên là nhánh mở rộng

Challenge có thể mở ra từ một node Core:

```text
Core skill
   ├── dùng tiếp trong Roadmap chính
   └── Challenge extension
```

Challenge không được chèn vào giữa một prerequisite chain bắt buộc của Core.

## 10. Hai cách học, một nguồn dữ liệu

### Học theo Roadmap
Dùng khi:
- tự học dài hạn;
- vá lỗ hổng;
- học trước;
- ôn tổng hợp.

### Học theo KNTT/lớp
Dùng khi:
- đồng bộ với bài đang học ở trường;
- tìm đúng nội dung SGK;
- chuẩn bị kiểm tra theo tiến độ lớp.

Cả hai phải trỏ đến **cùng skill/content/practice data**.

## 11. Tiêu chí cho mọi thay đổi sau này

Một thay đổi chỉ phù hợp triết lý Roadmap nếu không làm mất:

- continuity;
- prerequisite traceability;
- next-skill traceability;
- khả năng học theo lớp;
- khả năng học xuyên lớp;
- khả năng tái sử dụng cùng content cho practice/ôn thi.

Nếu một thiết kế khiến kiến thức bị “xé lại theo lớp” thì cần xem lại, kể cả khi nó bám SGK rất sát.
