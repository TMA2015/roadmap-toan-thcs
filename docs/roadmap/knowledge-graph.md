# Knowledge Graph v1 — Vertical Spine

> **Trạng thái:** Foundation reviewed · chỉ kích hoạt dependency có độ tin cậy cao.

Knowledge Graph không thay thế 25 chuyên đề và cũng không tạo thêm cây lớp 6/7/8/9. Nó nối **skill với skill** để hệ thống hiểu kiến thức nền, kiến thức được mở khóa và đường ôn bù.

## Ba nguyên tắc

1. **Prerequisite phải thật sự cần thiết.** Học trước không đồng nghĩa với prerequisite.
2. **Soft mastery.** Hệ thống đề nghị ôn bù nhưng không khóa học sinh vì chưa đạt 100%.
3. **Challenge không bao giờ là prerequisite của Core.**

## Ví dụ chuỗi Đại số

```text
nhan-tu-chung / hieu-hai-binh-phuong
        ↓
phan-tich-tu-mau
        ↓
rut-gon-phan-thuc + quy-dong-mau-thuc
        ↓
khu-mau-phuong-trinh
        ↓
doi-chieu-nghiem
```

Nếu học sinh liên tục sai `khu-mau-phuong-trinh`, hệ thống có thể đề nghị quay về `quy-dong-mau-thuc`, `rut-gon-phan-thuc` và `phan-tich-tu-mau` thay vì chỉ gắn nhãn “yếu phương trình”.

## V1

V1 cố ý nhỏ: tập trung vào các chuỗi dependency có giá trị remediation cao ở Đại số, Hàm số, Hình học, Lượng giác và Xác suất. Quan hệ chưa chắc chắn nằm trong `review_queue`, không được dùng để điều khiển học tập.

Dữ liệu máy đọc: `assets/data/curriculum/knowledge-graph-v1.json`.

## Quy tắc đối chiếu Blueprint v1.3

- Bảng `Trước/Sau` của Blueprint là **điều hướng chuyên đề**, không được tự động chuyển thành cạnh prerequisite trong JSON.
- Chỉ kích hoạt cạnh `skill A → skill B` khi có mô tả rõ B sử dụng thao tác hoặc định lý của A, phạm vi lớp/tầng tương thích và ví dụ kiểm chứng.
- Phân biệt `prerequisite`, `related` và `next`; các quan hệ chưa xác thực giữ trong `review_queue`.
- Không khóa bài học vì chưa đạt mastery; dùng lỗi theo tag để đề nghị học lại kỹ năng nguồn cụ thể.
- Mạch mô hình hóa, đo lường và ôn thi là các **điểm hội tụ theo từng bài**, không có prerequisite tổng quát “hoàn thành toàn bộ 02–23”.
- Khi mở rộng THPT/SAT/ACT, thêm namespace/metadata kỹ năng và cạnh được kiểm định; không dùng nhãn chương trình mới làm điều kiện cho Core THCS.
