# Blueprint 25 chuyên đề – Roadmap Toán THCS

> **Phiên bản 1.1 – Kiến trúc nội dung chuẩn và trạng thái triển khai website**
>
> Tài liệu này là bản thiết kế thống nhất cho 25 chuyên đề. Mục tiêu là bảo đảm học sinh có thể đi theo một mạch: **tổng quan → kiến thức cốt lõi → hiểu sâu → dạng bài → luyện tập → tự kiểm tra → liên hệ chuyên đề → ôn thi vào 10**.

## 1. Quy tắc kiến trúc

Mỗi chuyên đề có một URL chuẩn dạng:

`/kien-thuc/<so>-<slug>/`

Mỗi chuyên đề phải tuân thủ cấu trúc chuẩn đã quy định trong `docs/huong-dan/cau-truc-chuyen-de.md`:

1. Bản đồ kiến thức
2. Mục tiêu cần đạt
3. Kiến thức cốt lõi
4. Kiến thức liên quan
5. Các dạng bài cần nắm vững
6. Dạng bài thi vào lớp 10
7. Lỗi sai thường gặp
8. Luyện tập
9. Tự kiểm tra
10. Liên kết Roadmap
11. Điều kiện hoàn thành

## 2. Blueprint 25 chuyên đề

| # | Tên chuyên đề | URL chuẩn | Lớp trọng tâm | Mạch | Trước | Sau | Ưu tiên | Trạng thái |
|---:|---|---|---|---|---|---|:---:|---|
| 01 | **Bản đồ chương trình Toán THCS** | `01-ban-do-chuong-trinh` | 6–9 | Tổng hợp | — | 02 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 02 | **Số và phép tính** | `02-so-va-phep-tinh` | 6–9 | Số | 01 | 03, 04, 11 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 03 | **Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ** | `03-ti-le-ti-le-thuc` | 6–7 | Số/Đại số | 02 | 10, 24 | ⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 04 | **Biểu thức và biến đổi đại số** | `04-bieu-thuc-dai-so` | 7–8 | Đại số | 02, 03 | 05, 06, 07, 08 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 05 | **7 Hằng đẳng thức đáng nhớ** | `05-7-hang-dang-thuc` | 8 | Đại số | 04 | 06, 08 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 06 | **Phân tích đa thức thành nhân tử** | `06-phan-tich-da-thuc` | 8 | Đại số | 04, 05 | 07, 08 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 07 | **Phân thức đại số** | `07-phan-thuc-dai-so` | 8 | Đại số | 04, 06 | 08 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 08 | **Phương trình và bất phương trình** | `08-phuong-trinh-bat-phuong-trinh` | 8–9 | Đại số | 06, 07 | 09, 10, 12 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 09 | **Hệ phương trình bậc nhất hai ẩn** | `09-he-phuong-trinh` | 9 | Đại số | 08 | 10, 24 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 10 | **Hàm số và đồ thị** | `10-ham-so-do-thi` | 7–9 | Đại số | 03, 08, 09 | 12, 24 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 11 | **Căn thức và biến đổi căn thức** | `11-can-thuc` | 9 | Đại số | 02, 04 | 08, 12 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 12 | **Phương trình bậc hai & Viète – chuẩn bị THPT** | `12-phuong-trinh-bac-hai-viete` | 9 | Đại số | 08, 10, 11 | 25, THPT | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 13 | **Góc và quan hệ giữa các đường thẳng** | `13-goc-va-duong-thang` | 6–7 | Hình học | 01 | 14, 16 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 14 | **Tam giác** | `14-tam-giac` | 7 | Hình học | 13 | 15, 17, 18 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 15 | **Các đường đồng quy trong tam giác** | `15-duong-dong-quy` | 7 | Hình học | 14 | 17, 19 | ⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 16 | **Tứ giác và các hình đặc biệt** | `16-tu-giac` | 8 | Hình học | 13, 14 | 17, 20 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 17 | **Định lý Thales và tam giác đồng dạng** | `17-thales-dong-dang` | 8 | Hình học | 14, 16 | 18, 19, 20 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 18 | **Hệ thức lượng trong tam giác vuông** | `18-he-thuc-luong` | 9 | Hình học/Đo lường | 14, 17 | 19, 20, 24 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 19 | **Đường tròn** | `19-duong-tron` | 9 | Hình học | 14, 17, 18 | 20, 25 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 20 | **Hình học tổng hợp, đo lường và hình khối** | `20-hinh-hoc-tong-hop` | 6–9 | Hình học/Đo lường | 14–19 | 24, 25 | ⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 21 | **Thống kê và thu thập dữ liệu** | `21-thong-ke` | 6–9 | Thống kê | 01 | 22, 24 | ⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 22 | **Các đại lượng đặc trưng của dữ liệu** | `22-dai-luong-dac-trung` | 7–9 | Thống kê | 21 | 24, 25 | ⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 23 | **Xác suất** | `23-xac-suat` | 6–9 | Xác suất | 02, 21 | 24, 25 | ⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 24 | **Bài toán thực tế và mô hình hóa** | `24-bai-toan-thuc-te` | 6–9 | Liên môn/tổng hợp | 02–23 | 25 | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |
| 25 | **Bản đồ tổng hợp & chiến lược ôn thi vào 10** | `25-tong-hop-on-thi-10` | 9 | Tổng hợp/Thi vào 10 | 01–24 | — | ⭐⭐⭐⭐⭐ | Đã có trang; cấu trúc chuẩn 11 mục |

## 3. Cấu trúc trang của từng chuyên đề

Mỗi thư mục chuyên đề sẽ có tối thiểu:

```text
<so>-<slug>/
└── index.md
```

Khi hệ thống bài tập được mở rộng, có thể bổ sung:

```text
<so>-<slug>/
├── index.md
├── bai-tap.md
├── tu-kiem-tra.md
└── ...
```

Không tạo thư mục con chỉ để chứa nội dung khi chưa có nhu cầu. Ưu tiên cấu trúc đơn giản để học sinh dễ điều hướng.

## 4. Chuẩn liên kết giữa các chuyên đề

Mỗi `index.md` phải có ba nhóm liên kết:

### 4.1. Mạch chính

- **← Chuyên đề trước:** kiến thức trực tiếp cần ôn lại.
- **→ Chuyên đề sau:** kiến thức sẽ sử dụng tiếp.

### 4.2. Liên hệ chéo

Các chuyên đề không liền kề nhưng có quan hệ mạnh được đưa vào mục **Kiến thức liên quan**.

Ví dụ Chuyên đề 08 liên hệ mạnh với 04, 06, 07, 09, 10 và 24.

### 4.3. Liên kết thi vào 10

Các chuyên đề có ưu tiên ⭐⭐⭐⭐⭐ phải có đường dẫn tới nhóm dạng bài/ôn thi tương ứng khi khu vực `on-thi-vao-10/` được xây dựng.

## 5. Chuẩn mức độ

- ⭐: biết và hiểu, ưu tiên thấp
- ⭐⭐: cần nắm trong quá trình học
- ⭐⭐⭐: thường cần cho kiểm tra/ôn tập
- ⭐⭐⭐⭐: trọng tâm, cần luyện chắc
- ⭐⭐⭐⭐⭐: kiến thức nền tảng/trọng tâm, phải thành thạo

Mức sao là **mức ưu tiên của Roadmap**, không phải cam kết về tần suất xuất hiện trong mọi đề thi của mọi địa phương.

## 6. Trạng thái xây dựng

Trạng thái hiện tại của Roadmap:

- 25/25 chuyên đề đã có trang kiến thức `index.md` trong `docs/kien-thuc/`.
- 25/25 chuyên đề đã được chuẩn hóa theo cấu trúc 11 mục của Roadmap.
- Metadata chính gồm **trạng thái, lớp trọng tâm, mạch kiến thức và mức ưu tiên** đã được chuẩn hóa.
- Các liên kết nội bộ chính đã được rà soát và `mkdocs build --strict` đã vượt qua kiểm tra.
- Giai đoạn tiếp theo là **kiểm định nội dung học thuật**: độ chính xác kiến thức, mức độ phù hợp lớp 6–9, tính liên kết giữa chuyên đề và mức độ sát yêu cầu thi vào lớp 10.

## 7. Nguyên tắc xây dựng tiếp theo

1. Không tạo lại những nội dung đã có.
2. Không đổi URL chuẩn sau khi bắt đầu có liên kết chéo nếu không cần thiết.
3. Xây từng chuyên đề theo cùng một template.
4. Sau mỗi nhóm chuyên đề, chạy `mkdocs build` để phát hiện link sai.
5. Chỉ bật `mkdocs build --strict` khi các trang và liên kết của nhóm đó đã hoàn chỉnh.
6. Ưu tiên xây các chuyên đề nền tảng trước để các liên kết của chuyên đề 08 và các chuyên đề sau trở thành liên kết thật.

## 8. Thứ tự triển khai đề xuất

### Giai đoạn A – hoàn thiện mạch Đại số

`04 → 05 → 06 → 07 → 08 → 09 → 10 → 11 → 12`

### Giai đoạn B – hoàn thiện mạch Số và nền tảng

`02 → 03`

### Giai đoạn C – hoàn thiện mạch Hình học

`13 → 14 → 15 → 16 → 17 → 18 → 19 → 20`

### Giai đoạn D – Thống kê, xác suất và mô hình hóa

`21 → 22 → 23 → 24`

### Giai đoạn E – Tổng hợp và thi vào 10

`01 → 25`

> Thứ tự triển khai kỹ thuật có thể khác thứ tự học của học sinh. Blueprint giữ **số chuyên đề cố định**, còn thứ tự xây dựng ưu tiên những chuyên đề giúp giải quyết nhiều liên kết đang bị thiếu nhất.
