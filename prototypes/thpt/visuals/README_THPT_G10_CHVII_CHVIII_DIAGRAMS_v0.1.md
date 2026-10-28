# Toán 10 KNTT — Visual evidence/asset register (DRAFT)

**DRAFT_NOT_ACADEMICALLY_REVIEWED** · **SVG_SOURCE_ONLY** · **NO_STUDENT_ROUTE** · **NO_MERGE_DEPLOY**

Bốn hình dưới đây do dự án **tự dựng bằng SVG có thể chỉnh sửa**, không chép hình SGK/SBT. Mỗi hình có `<title>` và `<desc>` hỗ trợ accessibility, không có script, remote image, font file hay phụ thuộc JavaScript. Các file đặt trong `prototypes/thpt/visuals/`, **không được gắn vào Golden UI R4** trước khi review.

| File | Bài / item tham chiếu | Dữ kiện toán học đã đối chiếu nội bộ | Mục đích |
|---|---|---|---|
| `THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg` | B19-P06 (một phần) | `x+y=4`, `2x-y=2` giao tại `I(2;2)` | Trực quan hóa giao điểm và hệ phương trình |
| `THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg` | B21-P03 | `(x−1)²+(y+1)²=4`, tiếp tuyến `x=3` tại `H(3;−1)`, `R=2` | Khoảng cách tâm đến tiếp tuyến bằng bán kính |
| `THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg` | B22-P06 | `y²=8x`, `F(2;0)`, đường chuẩn `x=−2`, `M(2;4)`; `MF=d(M,Δ)=4` | Định nghĩa parabol theo tiêu điểm–đường chuẩn |
| `THPT_G10_B23_COUNTING_TREE_DRAFT.svg` | B23-C02 | 3 lựa chọn áo × 2 lựa chọn quần = 6 bộ | Quy tắc nhân qua cây lựa chọn |

**Kiểm tra:** các điểm/đường và kết quả được tính trực tiếp từ tọa độ và số trường hợp, không dựa trên ước lượng bằng mắt. Kích thước, màu, tương phản, nhãn và độ dễ đọc trên điện thoại cần QA giao diện khi đến giai đoạn tích hợp. Hình B19 chỉ mô tả hai đường d1/d2, **chưa minh họa đường vuông góc d3** trong P06, không được dùng như lời giải đầy đủ.

**Quy trình:** source SGK/SBT được xác minh về cấu trúc; việc hình tương ứng với đúng hoạt động của SGK cần đối chiếu NotebookLM/academic review. Không dùng SVG như bằng chứng đã đạt D1–D6; không tự thay thế hình gốc nếu làm sai ý sách. Có thể dùng cho SGK Knowledge và Topic Knowledge chỉ sau khi xác nhận hai nhánh có mục tiêu phù hợp, cùng một asset không cần nhân bản.
