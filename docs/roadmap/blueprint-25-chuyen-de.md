# Blueprint 25 chuyên đề – Roadmap Toán THCS

> **Phiên bản 1.3 – Bổ sung phân biệt quan hệ chuyên đề và tiên quyết ở cấp kỹ năng**
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
| 01 | **Bản đồ chương trình Toán THCS** | `01-ban-do-chuong-trinh` | 6–9 | Tổng hợp | — | 02 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 02 | **Số và phép tính** | `02-so-va-phep-tinh` | 6–9 | Số | 01 | 03, 04, 11 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 03 | **Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ** | `03-ti-le-ti-le-thuc` | 6–7 | Số/Đại số | 02 | 10, 24 | ⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 04 | **Biểu thức và biến đổi đại số** | `04-bieu-thuc-dai-so` | 7–8 | Đại số | 02, 03 | 05, 06, 07, 08 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 05 | **7 Hằng đẳng thức đáng nhớ** | `05-7-hang-dang-thuc` | 8 | Đại số | 04 | 06, 08 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 06 | **Phân tích đa thức thành nhân tử** | `06-phan-tich-da-thuc` | 8 | Đại số | 04, 05 | 07, 08 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 07 | **Phân thức đại số** | `07-phan-thuc-dai-so` | 8 | Đại số | 04, 06 | 08 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 08 | **Phương trình và bất phương trình** | `08-phuong-trinh-bat-phuong-trinh` | 8–9 | Đại số | 06, 07 | 09, 10, 12 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 09 | **Hệ phương trình bậc nhất hai ẩn** | `09-he-phuong-trinh` | 9 | Đại số | 08 | 10, 24 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 10 | **Hàm số và đồ thị** | `10-ham-so-do-thi` | 7–9 | Đại số | 03, 08, 09 | 12, 24 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 11 | **Căn thức và biến đổi căn thức** | `11-can-thuc` | 9 | Đại số | 02, 04 | 08, 12 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 12 | **Phương trình bậc hai & Viète – chuẩn bị THPT** | `12-phuong-trinh-bac-hai-viete` | 9 | Đại số | 08, 10, 11 | 25, THPT | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 13 | **Góc và quan hệ giữa các đường thẳng** | `13-goc-va-duong-thang` | 6–7 | Hình học | 01 | 14, 16 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 14 | **Tam giác** | `14-tam-giac` | 7 | Hình học | 13 | 15, 17, 18 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 15 | **Các đường đồng quy trong tam giác** | `15-duong-dong-quy` | 7 | Hình học | 14 | 17, 19 | ⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 16 | **Tứ giác và các hình đặc biệt** | `16-tu-giac` | 8 | Hình học | 13, 14 | 17, 20 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 17 | **Định lý Thales và tam giác đồng dạng** | `17-thales-dong-dang` | 8 | Hình học | 14, 16 | 18, 19, 20 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 18 | **Hệ thức lượng trong tam giác vuông** | `18-he-thuc-luong` | 9 | Hình học/Đo lường | 14, 17 | 19, 20, 24 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 19 | **Đường tròn** | `19-duong-tron` | 9 | Hình học | 14, 17, 18 | 20, 25 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 20 | **Hình học tổng hợp, đo lường và hình khối** | `20-hinh-hoc-tong-hop` | 6–9 | Hình học/Đo lường | 14–19 | 24, 25 | ⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 21 | **Thống kê và thu thập dữ liệu** | `21-thong-ke` | 6–9 | Thống kê | 01 | 22, 24 | ⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 22 | **Các đại lượng đặc trưng của dữ liệu** | `22-dai-luong-dac-trung` | 7–9 | Thống kê | 21 | 24, 25 | ⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 23 | **Xác suất** | `23-xac-suat` | 6–9 | Xác suất | 02, 21 | 24, 25 | ⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 24 | **Bài toán thực tế và mô hình hóa** | `24-bai-toan-thuc-te` | 6–9 | Liên môn/tổng hợp | 02–23 | 25 | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |
| 25 | **Bản đồ tổng hợp & chiến lược ôn thi vào 10** | `25-tong-hop-on-thi-10` | 9 | Tổng hợp/Thi vào 10 | 01–24 | — | ⭐⭐⭐⭐⭐ | Đã kiểm định; cấu trúc chuẩn 11 mục |

## 2.1. Cách đọc cột Trước/Sau (quan trọng)

Cột **Trước/Sau** trong bảng là **liên hệ định hướng ở cấp chuyên đề**, không phải danh sách điều kiện bắt buộc để mở khóa toàn bộ chuyên đề. Không suy diễn rằng phải hoàn thành mọi chuyên đề được liệt kê trước khi học bất kỳ bài nào của chuyên đề hiện tại.

- **Prerequisite (cứng về mặt học thuật):** chỉ xác lập ở cấp *skill/bài học* khi kỹ năng đích không thể thực hiện đúng nếu thiếu kỹ năng nguồn. Học sinh vẫn được mở bài và được đề nghị ôn bù, không bị khóa.
- **Related (liên hệ):** kiến thức bổ trợ hoặc cùng mạch, không phải điều kiện bắt buộc.
- **Next (hướng học tiếp):** gợi ý đường phát triển, không mặc định là điều kiện tiên quyết theo chiều ngược.
- **Core / Extension / Entrance10 / THPT:** không lấy Challenge/Extension làm điều kiện để học Core. Các cầu nối THPT và SAT/ACT về sau phải dùng ID kỹ năng và lớp nội dung riêng, không đổi URL 25 chuyên đề.

**Các mục dễ bị hiểu sai trong bản bảng cũ:**

| Chuyên đề | Cách hiểu đúng |
|---|---|
| 01 – Bản đồ | Trang định hướng, không phải tiên quyết học thuật của 02, 13 hay 21. |
| 04 – Biểu thức | Kiến thức tỉ lệ ở 03 là liên hệ hữu ích, không bắt buộc cho mọi bài đại số ở 04. |
| 08 – Phương trình/BPT | Phương trình bậc nhất không cần học xong toàn bộ 06 và 07; riêng phương trình tích hoặc chứa ẩn ở mẫu mới có các prerequisite tương ứng. |
| 10 – Hàm số | Quan hệ tỉ lệ và tọa độ mở đường cho phần cơ bản; không cần hoàn thành toàn bộ 09 trước khi học hàm số. |
| 17 – Thales/đồng dạng | Không yêu cầu hoàn thành toàn bộ tứ giác 16 trước khi bắt đầu định lý Thales. |
| 20 – Đo lường/hình khối | Các bài cơ bản lớp 6 có thể học độc lập; chỉ phần tổng hợp nâng cao mới cần các định lý 14–19 phù hợp. |
| 23 – Xác suất | Các phép thử đơn giản không yêu cầu hoàn thành toàn bộ Thống kê 21. |
| 24 – Mô hình hóa | Là mạch xuyên suốt 6–9: mỗi bài chỉ cần các kỹ năng toán cụ thể được sử dụng, không phải toàn bộ 02–23. |
| 25 – Ôn thi | Là điểm tổng hợp và điều hướng ôn bù, không bắt học sinh đạt 100% ở 01–24 mới được luyện đề. |

Dữ liệu điều khiển gợi ý ôn bù nằm ở `assets/data/curriculum/knowledge-graph-v1.json`, không lấy trực tiếp cột Trước/Sau làm quy tắc máy. Mọi cạnh mới phải được kiểm tra đúng phạm vi kỹ năng, lớp và tầng nội dung trước khi kích hoạt.

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
- 25/25 chuyên đề đã hoàn tất vòng **kiểm định nội dung học thuật**: rà soát độ chính xác kiến thức, điều kiện áp dụng, mức độ phù hợp THCS và cách diễn đạt về ôn thi vào lớp 10.
- Metadata chính gồm **trạng thái, lớp trọng tâm, mạch kiến thức và mức ưu tiên** đã được chuẩn hóa.
- Liên kết Roadmap tuần tự giữa các chuyên đề đã được tổng kiểm; Audit V3 đạt **25/25 PASS, 0 vấn đề**.
- `mkdocs build --strict` và `git diff --check` đã vượt qua kiểm tra sau vòng tổng kiểm.
- Giai đoạn tiếp theo là **hoàn thiện trải nghiệm học tập và hệ thống luyện tập** trên nền nội dung đã được kiểm định.

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
