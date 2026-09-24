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
