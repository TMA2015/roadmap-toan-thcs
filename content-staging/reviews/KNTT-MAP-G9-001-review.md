# Review KNTT-MAP-G9-001

**Gemini verdict:** PASS  
**Final review:** PASS-WITH-CHANGES

## Kết quả

G9 tiếp tục xác nhận task design mới hoạt động tốt: coverage đủ, reuse skill tốt, gap detection chính xác ở CĐ19/CĐ20, và Vertical-Spine audit hữu ích.

## Chỉnh sửa bắt buộc

1. **CĐ09 không loại toàn bộ `so-nghiem-he` và `y-nghia-hinh-hoc`.** KNTT lớp 9 nêu nghiệm của phương trình hai ẩn dưới dạng đường thẳng và nghiệm hệ là giao điểm; bài giải hệ cũng có trường hợp vô nghiệm/vô số nghiệm.

2. **Viète không bị thu hẹp thành chỉ “nhẩm nghiệm + tổng/tích đơn giản”.** `tham-so_so_nghiem` rõ ràng là Entrance10/extension, nhưng `lap-pt-tu-nghiem` và một phần ứng dụng biểu thức nghiệm cần review ở mức item trước khi loại khỏi Core.

3. **CĐ18 thiếu `cot`.** KNTT dùng tang và côtang trong Bài 12, vì vậy thêm proposed skill `cot`.

4. **CĐ08 thiếu lớp skill cho Bài 5 – Bất đẳng thức và tính chất.** Thêm `bat-dang-thuc`, `tinh-chat-thu-tu-phep-cong`, `tinh-chat-thu-tu-phep-nhan`.

5. **CĐ22:** chấp nhận rằng không thuộc overlay lớp 9, nhưng chưa chấp nhận kết luận “ngoài toàn bộ KNTT THCS” chỉ từ mục lục lớp 9. Phải cross-grade audit trước khi relayer toàn topic.

## Gap được chấp nhận

- Căn bậc ba.
- Định lượng/vị trí tương đối đường tròn.
- Đường tròn nội/ngoại tiếp, đa giác đều.
- Tần số tương đối.
- Hình trụ/nón/cầu.
- `cot` và tính chất bất đẳng thức.

## Mastery

Giữ soft mastery. Không hard gate 100%.

## Benchmark

Sau G6–G9, Gemini đã đủ bằng chứng OBSERVED để tiếp tục làm curriculum/pedagogy lead khi packet có:
- verified TOC;
- topic whitelist;
- existing skill inventory;
- Core/extension constraints.

Bước tiếp theo không phải thêm grade tree, mà là hợp nhất bốn overlay thành knowledge graph.
