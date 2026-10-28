# Toán 10 KNTT — Visual evidence/asset register (D5 PASS R1)

**D5_R1_FIG01_02_03=PASS / FIG04=PASS_RETAINED_R0** · **D6_NOT_VERIFIED** · **SVG_SOURCE_ONLY** · **NO_STUDENT_ROUTE** · **NO_MERGE_DEPLOY**

Bốn hình dưới đây do dự án **tự dựng bằng SVG có thể chỉnh sửa**, không chép hình SGK/SBT. Mỗi hình có `<title>` và `<desc>` hỗ trợ accessibility, không có script, remote image, font file hay phụ thuộc JavaScript. Các file đặt trong `prototypes/thpt/visuals/`, **chỉ được gắn vào Golden UI R4** sau khi hoàn tất QA tích hợp D6; D5 chỉ PASS nội dung SVG.

| File | Bài / item tham chiếu | Dữ kiện toán học đã đối chiếu nội bộ | Mục đích |
|---|---|---|---|
| `THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg` | B19-P06 (bản sửa R1 đầy đủ) | `x+y=4`, `2x-y=2` giao tại `I(2;2)`; thêm `d3: x-2y+1=0`, `Δ: 2x+y-6=0` vuông góc | Trực quan hóa giao điểm và hệ phương trình |
| `THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg` | B21-P03 | `(x-1)²+(y+1)²=4`, tiếp tuyến `x=3` tại `H(3;-1)`, `R=2` | Khoảng cách tâm đến tiếp tuyến bằng bán kính |
| `THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg` | B22-P06 | `y²=8x`, `F(2;0)`, đường chuẩn `x=-2`, `M(2;4)`; `MF=d(M,Δ)=4` | Định nghĩa parabol theo tiêu điểm–đường chuẩn |
| `THPT_G10_B23_COUNTING_TREE_DRAFT.svg` | B23-C02 | 3 lựa chọn áo × 2 lựa chọn quần = 6 bộ | Quy tắc nhân qua cây lựa chọn |

**Kiểm tra:** các điểm/đường và kết quả được tính trực tiếp từ tọa độ và số trường hợp, không dựa trên ước lượng bằng mắt. Kích thước, màu, tương phản, nhãn và độ dễ đọc trên điện thoại cần QA giao diện khi đến giai đoạn tích hợp. Hình B19 **đã bổ sung** đường `d3` và `Δ` vuông góc tại bản sửa D5 R1; phiên bản mới **đã có NotebookLM D5 R1 PASS** cho đúng blob SHA đã review, nhưng chưa được phép dùng trong giao diện chính thức trước D6.

**Quy trình:** source SGK/SBT được xác minh về cấu trúc; việc hình tương ứng với đúng hoạt động của SGK cần đối chiếu NotebookLM/academic review. Không dùng SVG như bằng chứng đã đạt D1–D6; không tự thay thế hình gốc nếu làm sai ý sách. Có thể dùng cho SGK Knowledge và Topic Knowledge chỉ sau khi xác nhận hai nhánh có mục tiêu phù hợp, cùng một asset không cần nhân bản.


## Biên bản review D5 R0 và vòng sửa R1 (2026-10-28)

- `PACKET_ID=THPT-G10-CHVII-VIII-D5-FOUR-SVG-BATCH-20261028-R0`: reviewer đánh giá đủ 4 hình, `FIG01=HOLD`, `FIG02=HOLD`, `FIG03=HOLD`, `FIG04=PASS`, `ACADEMIC_OVERALL_D5=HOLD_REVISIONS_REQUIRED`, release NO. Lý do: glyph dấu trừ `U+2212` không hiển thị trong CairoSVG/Linux (đưa tới ô vuông) tại FIG01/02/03; FIG01 thiếu d3 và Δ so với item B19-P06.
- Bản sửa R1 đã **thay U+2212 thành dấu ASCII U+002D** trong ba SVG giữ nguyên filename; FIG01 bổ sung d3 và đường Δ, dùng cùng tỷ lệ đồ thị. Đã dựng thử CairoSVG, kiểm tra không còn ký tự ô vuông dấu trừ và XML hợp lệ. Đây **không phải kết quả QA trình duyệt/iPhone**; kết quả học thuật của bản sửa được xác nhận riêng bởi packet R1 ở mục bên dưới.
- GitHub trước sửa: FIG01 `d55f5c9dc277ea90affa04416dda2ddd637650c7`, FIG02 `2f6097cb04ca38625607fe937cc6c52393b3aabc`, FIG03 `8a5df7db0fb0d2ce849990d68d8ff0ed4eba7b86`. Sau sửa: FIG01 `8964b708aac7cf56d1848db9d469f2573ce40873`, FIG02 `08e22fbc8ed90db7ccc48d782eb270404f057226`, FIG03 `e28c6500b486ee755fad0fc164d48969fd891c55`.
- FIG04 giữ nguyên Git blob SHA `f24fcdf80d2a4ffc935a415197b30f48a54b4817`, không cần review lại từ R0 PASS; P2 đề xuất tăng font chữ chỉ là cải thiện tùy chọn, **chưa thực hiện** để tránh làm thay đổi asset đã PASS.
- Delta R1 `THPT-G10-CHVII-VIII-D5-THREE-SVG-REVISION-20261028-R1`: đã được NotebookLM thẩm định PASS cả ba SVG sửa, theo 5 Permanent Sources THPT v2.0 và một file Temp_ chứa đúng ba hình. Không có quyền phát hành, không merge/deploy, Golden UI R4 giữ nguyên.

## Kết quả D5 R1 — tất cả bốn hình PASS học thuật (28/10/2026)

- NotebookLM packet `THPT-G10-CHVII-VIII-D5-THREE-SVG-REVISION-20261028-R1`: FIG01, FIG02, FIG03 **PASS**, FIG04 **PASS_RETAINED_FROM_R0** (không review lại). Expected=3, reviewed=3, missing/duplicate=0; `ACADEMIC_OVERALL_D5=PASS`.
- SHA được review: FIG01 `8964b708aac7cf56d1848db9d469f2573ce40873`; FIG02 `08e22fbc8ed90db7ccc48d782eb270404f057226`; FIG03 `e28c6500b486ee755fad0fc164d48969fd891c55`; FIG04 `f24fcdf80d2a4ffc935a415197b30f48a54b4817`.
- Chưa có QA thiết bị thực (Chrome Mobile/Safari/iOS/Android), responsive layout và kiểm soát hiển thị đáp án; `D6_NOT_VERIFIED`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`. Không tự gắn asset vào giao diện production.
- File mapping media/placement D5 PASS: `THPT_G10_CHVII_CHVIII_VISUAL_ASSET_PLACEMENT_MANIFEST_D5_PASS_v0.1.md`; một SVG nguồn được dùng theo nhiều placement thích hợp, không sao chép mã SVG hoặc canonical item.
- **Lưu ý:** các đoạn mô tả R0/R1 ở trên là lịch sử review; không phải trạng thái HOLD hiện hành. Chính thức lấy packet R1 và blob SHA để xác định trạng thái.
