# R33 — Phụ lục kiểm tra trực tiếp trang SGK KNTT trên cổng NXB Giáo dục Việt Nam

**Gói:** `MATH-R27-NEW-MCQ-40-20261018`  
**Ngày:** 2026-10-18  
**Giá trị bằng chứng:** đã trực tiếp quan sát 5 trang SGK điện tử chính thống cho 9/24 ID; **KHÔNG phải biên bản phê duyệt học thuật 9/24 PASS**.

## 1. Nguồn S1 thực sự đã đọc trực tiếp

Nguồn gốc: `taphuan.nxbgd.vn`, cổng Nhà xuất bản Giáo dục Việt Nam, bộ Kết nối tri thức. Ảnh trang được hệ thống phát từ `cdn3.olm.vn`. Chỉ lưu **đường dẫn**, không sao chép hoặc phát hành ảnh sách trong repository.

| Sách | Trang in trên sách | Nội dung thật sự nhìn thấy | Liên kết ảnh trên hệ thống nhà xuất bản |
|---|---:|---|---|
| Toán 7, tập một | 36 | Bài 7, khái niệm giá trị tuyệt đối; Luyện tập 4 tính giá trị tuyệt đối, Bài 2.16, Bài 2.18: tìm mọi `x` thỏa `\|x\|=2,5` | [Trang 36](https://cdn3.olm.vn/upload/taphuan/2026/0413/4714106181-page-37-1776051685659.png) |
| Toán 7, tập hai | 41 | Ví dụ chia đa thức, kiểm tra `A=B·Q` và Luyện tập 2b chia `(9x²−4):(3x+2)` | [Trang 41](https://cdn3.olm.vn/upload/taphuan/4700015846-page-42-1775788577960.png) |
| Toán 7, tập hai | 42 | Trường hợp chia có dư và hệ thức `A=B·Q+R` | [Trang 42](https://cdn3.olm.vn/upload/taphuan/4700015846-page-43-1775788578266.png) |
| Toán 7, tập hai | 43 | Bài 7.32: a) `(6x³−2x²−9x+3):(3x−1)`, b) `(4x⁴+14x³−21x−9):(2x²−3)` | [Trang 43](https://cdn3.olm.vn/upload/taphuan/4700015846-page-44-1775788578536.png) |
| Toán 7, tập hai | 45 | Bài 7.39a có biểu thức `(x³−8):(x−2)` | [Trang 45](https://cdn3.olm.vn/upload/taphuan/4700015846-page-46-1775788579132.png) |

**Chú ý:** tên file ảnh của trang trên CDN có thể lệch 1 so với **số trang in thực tế**, do có trang bìa và chỉ số kỹ thuật. Định vị S1 phải lấy số trang **nhìn thấy ở chân trang**, không suy từ tên file ảnh.

## 2. Kết quả đối chiếu theo ID

| ID | Bằng chứng S1 đọc được | Kết luận sơ bộ cần đối soát |
|---|---|---|
| `NUM02V1_145` | Luyện tập 4 p36 có tính `\|−11\|`; R27 tính `\|−12\|`. | Có cơ sở cùng cấu trúc tính GTTĐ nhưng không phải EXACT_MATCH |
| `NUM02V1_146` | Bài 2.18 p36 tìm **tất cả** nghiệm `\|x\|=2,5`; R27 hỏi chọn **một số** có `\|x\|=7`. | Cùng kiến thức GTTĐ; cần phân biệt CONCEPT_BASE và STRUCTURAL_CLONE |
| `NUM02V1_147` | Bài 2.18 p36 ghi `\|x\|=2,5`; R27 ghi `\|x\|=4` dạng MCQ. | Khẳng định EXACT_MATCH R32 là sai; đề xuất STRUCTURAL_CLONE |
| `ALG04V2_133` | P41 chia hết và p43 bài tập chia đa thức bằng đặt tính. | Cần phân loại tương đồng phương pháp, không tự khẳng định trùng nguyên dạng |
| `ALG04V2_134` | Luyện tập 2b p41 có cấu trúc hiệu hai bình phương, phù hợp ý tưởng giải của R27. | Có cơ sở STRUCTURAL_CLONE ở mức thao tác đại số |
| `ALG04V2_135` | Ví dụ p41, Bài 7.32 p43. | Lỗi trích trang R32 cần tách: phương pháp 41, bài 7.32 ở 43 |
| `ALG04V2_136` | Bài 7.39a p45 ghi đúng biểu thức `(x³−8):(x−2)`. | Trùng biểu thức, không trùng nguyên văn toàn bộ đề MCQ/đáp án; ghi rõ dạng chuyển thể |
| `ALG04V2_137` | P43 Bài 7.32b là phép chia bậc 4 cho bậc 2; R27 là bậc 3 cho bậc 1. | Bằng chứng chung phương pháp; không coi STRUCTURAL_CLONE mặc nhiên |
| `ALG04V2_138` | P41 có `A=B·Q` khi chia hết; p42 nêu quy tắc thương/dư `A=B·Q+R`. | Có bằng chứng lý thuyết phù hợp CONCEPT_BASE |

## 3. Phạm vi chưa xác minh trực tiếp

**15 ID còn lại:** `NUM02V1_121–132` (12) và `QUA12V1_121–123` (3). Bộ máy xem sách của nhà xuất bản có dẫn đến các trang Toán 6 tập 2 và Toán 9 tập 2, nhưng ở lần kiểm tra này tải trực tiếp ảnh trang đều trả lỗi. Chưa dùng các trích dẫn từ website giải toán để thay thế S1.

- [Xem sách chính thức Toán 6, tập 2](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-6-tap-hai.4699864675)
- [Xem sách chính thức Toán 9, tập 2](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-9-tap-hai.4714699696)

## 4. Hệ quả thực thi và QA

Chỉ thêm bản ghi quan sát và kiểm tra mã nguồn. **Không áp dụng thay đổi metadata trong ngân hàng hoặc trên giao diện**. Đối chiếu các câu sử dụng cùng một biểu thức với bài SGK phải có nhãn nguồn riêng thay vì suy là trùng toàn đề. Các mô tả nguồn/loại chứng cứ ở trên là **đề xuất biên tập**, không ghi `academic_verdict=PASS`.

Bộ kiểm tra mới:
`node scripts/test-math-v2-r33-s1-proof-matrix.js`

Kết quả mong đợi: nguồn R27 40 câu bất biến; R31 24 ID; 16 cảnh báo thứ cấp và 8 ID còn lại; 9 ID có cơ sở từ đúng 5 trang của nhà xuất bản; 15 chưa có ảnh S1; **0 Academic PASS được cấp**, không chỉnh kỹ năng, quyền điểm, dữ liệu học sinh hay quyền phát hành.

## 5. Điều kiện đóng R33

Chỉ được gọi `ACADEMIC_S1_RECONCILED` sau khi kiểm tra đủ **24 ID**, có minh chứng chính xác theo trang/hoạt động, đối soát SHA và có quyết định học thuật của chủ dự án. Trường hợp `QUA12V1_121–123` cần kết luận riêng về Core vs Entrance10; không lấy sự xuất hiện trong mục GeoGebra làm bằng chứng duy nhất. Không ép toàn bộ 24 phải PASS nếu bằng chứng thiếu.
