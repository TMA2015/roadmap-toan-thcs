# R38 — NGUỒN NOTEBOOKLM 1: Danh mục Skill Family chính thức (Markdown)

> **Nguồn S1 kỹ thuật của dự án (đọc được cho NotebookLM)** — trích xuất nguyên tên/ID/thuộc tính từ Registry, không sáng tác Family mới.

- Phiên bản nguồn: `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json`.
- Git blob SHA-1 gốc: `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`. Tổng số: **131 Family**.
- Phạm vi: phản biện ánh xạ 40 câu R38. **Không thay đổi Registry, item, lịch sử học tập hoặc bộ đếm Skill.**
- Chú ý: `KNTT-Core` là tầng nội dung đã được chủ dự án xác nhận; **chưa phải** quyền `ASSESSED_SKILL` của từng câu.

## I. Danh sách ĐẦY ĐỦ 131 Family ID hợp lệ

| Mã Family ID tồn tại | Tên | Tầng | Chủ đề | Kỹ năng thành phần trong Registry |
|---|---|---|---|---|
| `NUM-SETS` | Tập hợp số và biểu diễn số | `KNTT-Core` | CT02 | tap-hop-so, so-huu-ti-thap-phan, lam-tron-so, so-vo-ti |
| `NUM-INTEGER-OPS` | Số nguyên và phép tính | `KNTT-Core` | CT02 | so-nguyen-phep-tinh |
| `NUM-ABS` | Giá trị tuyệt đối | `KNTT-Core` | CT02 | gia-tri-tuyet-doi |
| `NUM-ORDER` | Thứ tự thực hiện phép tính | `KNTT-Core` | CT02 | thu-tu-phep-tinh |
| `NUM-POWER` | Lũy thừa | `KNTT-Core` | CT02 | luy-thua |
| `NUM-DIV-PRIME` | Chia hết, số nguyên tố và phân tích thừa số | `KNTT-Core` | CT02 | dau-hieu-chia-het, so-nguyen-to, phan-tich-thua-so-nguyen-to |
| `NUM-GCD-LCM` | ƯCLN và BCNN | `KNTT-Core` | CT02 | ucln, bcnn |
| `NUM-FRACTION-FORM` | Rút gọn, quy đồng và so sánh phân số | `KNTT-Core` | CT02 | rut-gon-phan-so, quy-dong-so-sanh-phan-so |
| `NUM-FRACTION-OPS` | Phép tính phân số | `KNTT-Core` | CT02 | phep-tinh-phan-so, phep-tinh-so-huu-ti |
| `NUM-PERCENT` | Phần trăm | `KNTT-Core` | CT02, CT03 | phan-tram, ti-so-phan-tram |
| `RATIO-BASIC` | Tỉ số và ứng dụng tỉ số | `KNTT-Core` | CT03 | ti-so, doi-don-vi-ti-so, ti-le-ban-do |
| `RATIO-PROP` | Tỉ lệ thức và tìm số chưa biết | `KNTT-Core` | CT03 | ti-le-thuc, tim-x-ti-le-thuc |
| `RATIO-SPLIT` | Dãy tỉ số bằng nhau và chia theo tỉ lệ | `KNTT-Core` | CT03 | day-ti-so-bang-nhau, chia-theo-ti-le |
| `RATIO-DIRECT` | Đại lượng tỉ lệ thuận | `KNTT-Core` | CT03 | ti-le-thuan, he-so-ti-le-thuan |
| `RATIO-INVERSE` | Đại lượng tỉ lệ nghịch | `KNTT-Core` | CT03 | ti-le-nghich, he-so-ti-le-nghich |
| `RATIO-DISTINGUISH` | Phân biệt tỉ lệ thuận và tỉ lệ nghịch | `KNTT-Core` | CT03 | phan-biet-thuan-nghich |
| `RATIO-MODEL` | Mô hình hóa bằng tỉ lệ | `Entrance10` | CT03 | mo-hinh-ti-le |
| `ALG-STRUCTURE` | Cấu trúc đơn thức và đa thức | `KNTT-Core` | CT04 | nhan-biet-don-thuc, nhan-biet-da-thuc, he-so-bac |
| `ALG-SIMPLIFY-ADD-SUB` | Thu gọn, bỏ ngoặc và cộng trừ đa thức | `KNTT-Core` | CT04 | hang-tu-dong-dang, thu-gon-da-thuc, bo-ngoac-dau, cong-tru-da-thuc |
| `ALG-MULTIPLY` | Nhân biểu thức | `KNTT-Core` | CT04 | nhan-bieu-thuc, tinh-phan-phoi |
| `ALG-EVALUATE` | Tính giá trị biểu thức | `KNTT-Core` | CT04 | tinh-gia-tri-bieu-thuc |
| `ALG-DIV-MONOMIAL` | Chia đa thức cho đơn thức | `KNTT-Core` | CT04 | chia-da-thuc-cho-don-thuc, chia-da-thuc-mot-bien |
| `ALG-MODEL-EXPR` | Lập biểu thức từ bài toán | `Entrance10` | CT04 | lap-bieu-thuc, bai-toan-thuc-te |
| `ID-STRUCTURE` | Nhận dạng và vận dụng các hằng đẳng thức | `KNTT-Core` | CT05 | binh-phuong-tong, binh-phuong-hieu, hieu-hai-binh-phuong, lap-phuong-tong, lap-phuong-hieu, tong-hai-lap-phuong, hieu-hai-lap-phuong, nhan-dang-hdt, binh-phuong-hoan-chinh, nhan-dang-lap-phuong, phan-tich-hdt |
| `ID-APPLY` | Rút gọn và tính nhanh bằng hằng đẳng thức | `KNTT-Core` | CT05 | tinh-nhanh-hdt, rut-gon-hdt |
| `ID-PROOF` | Chứng minh đẳng thức | `Entrance10` | CT05 | chung-minh-hdt |
| `FAC-COMMON` | Phân tích bằng đặt nhân tử chung | `KNTT-Core` | CT06 | nhan-tu-chung, doi-dau-nhan-tu-chung |
| `FAC-GROUP` | Phân tích bằng nhóm hạng tử | `KNTT-Core` | CT06 | nhom-hang-tu |
| `FAC-IDENTITY` | Phân tích bằng hằng đẳng thức | `KNTT-Core` | CT06 | hieu-hai-binh-phuong, binh-phuong-hoan-chinh, tong-hieu-lap-phuong |
| `FAC-COMBINE` | Phối hợp các phương pháp phân tích đa thức | `KNTT-Core` | CT06 | phoi-hop-phuong-phap, kiem-tra-phan-tich |
| `FAC-SPLIT-MIDDLE` | Tách hạng tử giữa | `Entrance10` | CT06 | tach-hang-tu-giua |
| `EQ-ZERO-PRODUCT` | Giải phương trình bằng phân tích nhân tử | `Entrance10` | CT06 | giai-pt-bang-nhan-tu |
| `RATEX-CONCEPT` | Khái niệm và tính chất cơ bản của phân thức | `KNTT-Core` | CT07 | nhan-biet-phan-thuc, hai-phan-thuc-bang-nhau |
| `RATEX-DOMAIN` | Điều kiện xác định và bảo toàn điều kiện | `KNTT-Core` | CT04, CT07 | dieu-kien-xac-dinh, giu-dieu-kien-ban-dau |
| `RATEX-SIMPLIFY` | Phân tích và rút gọn phân thức | `KNTT-Core` | CT07 | doi-dau-phan-thuc, phan-tich-tu-mau, rut-gon-phan-thuc |
| `RATEX-ADD-SUB` | Quy đồng, cộng và trừ phân thức | `KNTT-Core` | CT07 | quy-dong-mau-thuc, cong-tru-phan-thuc |
| `RATEX-MULT-DIV` | Nhân và chia phân thức | `KNTT-Core` | CT07 | nhan-phan-thuc, chia-phan-thuc |
| `RATEX-EVALUATE` | Tính giá trị phân thức | `KNTT-Core` | CT07 | tinh-gia-tri-phan-thuc |
| `RATEX-INTEGER` | Tìm giá trị nguyên của biểu thức hữu tỉ | `Specialized-Challenge` | CT07 | tim-gia-tri-nguyen |
| `EQ-BASIC` | Giải phương trình cơ bản | `KNTT-Core` | CT08 | nghiem-phuong-trinh, pt-bac-nhat, bien-doi-pt-nhieu-buoc, pt-tich |
| `EQ-RATIONAL` | Phương trình chứa ẩn ở mẫu | `KNTT-Core` | CT08 | dkxd-phuong-trinh-mau, khu-mau-phuong-trinh, doi-chieu-nghiem |
| `INEQ-ORDER` | Bất đẳng thức và tính chất thứ tự | `KNTT-Core` | CT08 | bat-dang-thuc, tinh-chat-thu-tu-phep-cong, tinh-chat-thu-tu-phep-nhan |
| `INEQ-SOLVE` | Giải và biểu diễn bất phương trình | `KNTT-Core` | CT08 | bpt-bac-nhat, doi-chieu-bpt, bieu-dien-tap-nghiem, giao-tap-nghiem |
| `EQ-MODEL` | Lập phương trình từ bài toán | `KNTT-Core` | CT08 | lap-phuong-trinh |
| `INEQ-MODEL` | Lập bất phương trình từ bài toán | `Entrance10` | CT08 | lap-bat-phuong-trinh |
| `EQ-PARAM` | Phương trình/bất phương trình có tham số | `Specialized-Challenge` | CT08 | tham-so-co-ban |
| `SYS-CONCEPT` | Nghiệm và ý nghĩa của hệ phương trình | `KNTT-Core` | CT09 | nghiem-pt-hai-an, nghiem-he, so-nghiem-he, y-nghia-hinh-hoc |
| `SYS-SOLVE` | Giải và kiểm tra hệ phương trình | `KNTT-Core` | CT09 | giai-he-the, giai-he-cong, chon-phuong-phap, bien-doi-truoc-giai, kiem-tra-nghiem-he |
| `SYS-MODEL` | Lập hệ từ bài toán | `KNTT-Core` | CT09 | lap-he-bai-toan, bai-toan-so, chuyen-dong-he, nang-suat-he |
| `SYS-PARAM` | Hệ phương trình có tham số | `Entrance10` | CT09 | tham-so-he |
| `FUNC-BASIC` | Hàm số, giá trị và bảng giá trị | `KNTT-Core` | CT10 | khai-niem-ham-so, tinh-gia-tri-ham, bang-gia-tri |
| `GRAPH-POINT` | Tọa độ và điểm thuộc đồ thị | `KNTT-Core` | CT10 | toa-do-diem, diem-thuoc-do-thi |
| `LINEAR-FUNC` | Hàm số bậc nhất và đồ thị đường thẳng | `KNTT-Core` | CT10 | nhan-biet-ham-bac-nhat, he-so-goc, tung-do-goc, dong-nghich-bien, ve-do-thi-ham-bac-nhat |
| `GRAPH-INTERSECTION` | Vị trí và giao điểm các đồ thị | `Entrance10` | CT10 | vi-tri-hai-duong-thang, giao-diem-do-thi, lien-he-he-phuong-trinh |
| `PARABOLA-BASIC` | Parabol y=ax² | `KNTT-Core` | CT10 | ham-y-ax2, doi-xung-parabol, diem-thuoc-parabol |
| `RAD-BASIC` | Căn bậc hai và điều kiện xác định | `KNTT-Core` | CT11 | can-bac-hai-so-hoc, dkxd-can, can-binh-phuong |
| `RAD-TRANSFORM` | Biến đổi căn thức | `KNTT-Core` | CT11 | khai-phuong-tich, khai-phuong-thuong, dua-thua-so-ra, dua-thua-so-vao |
| `RAD-OPERATE` | Phép tính với căn thức | `KNTT-Core` | CT11 | can-dong-dang, nhan-chia-can |
| `RAD-RATIONALIZE` | Trục căn thức ở mẫu | `KNTT-Core` | CT11 | truc-can-mau-don, truc-can-lien-hop |
| `RAD-CUBEROOT` | Căn bậc ba | `KNTT-Core` | CT11 | can-bac-ba |
| `RAD-EQUATION` | Phương trình chứa căn | `Entrance10` | CT11 | tim-x-can |
| `RAD-COMPARE` | So sánh biểu thức căn | `Entrance10` | CT11 | so-sanh-can |
| `QUAD-STRUCTURE` | Nhận dạng phương trình bậc hai và hệ số | `KNTT-Core` | CT12 | nhan-dang-pt-bac-hai, he-so-abc |
| `QUAD-SOLVE` | Biệt thức và giải phương trình bậc hai | `KNTT-Core` | CT12 | tinh-delta, so-nghiem-delta, cong-thuc-nghiem, delta-phay, giai-pt-bac-hai, nham-nghiem |
| `VIETE-CORE` | Viète và lập phương trình từ nghiệm | `KNTT-Core` | CT12 | tong-tich-nghiem, lap-pt-tu-nghiem |
| `VIETE-APPLY` | Vận dụng Viète với biểu thức và dấu nghiệm | `Entrance10` | CT12 | bieu-thuc-doi-xung, dau-nghiem |
| `QUAD-GRAPH` | Liên hệ nghiệm với đồ thị | `Entrance10` | CT12 | lien-he-do-thi |
| `QUAD-PARAM` | Tham số và số nghiệm | `Specialized-Challenge` | CT12 | tham-so-so-nghiem |
| `GEO-LINE-FOUND` | Điểm, tia, đoạn thẳng và trung điểm | `KNTT-Core` | CT13 | diem-thuoc-duong, diem-nam-giua, tia, tia-doi, doan-thang-do-dai, trung-diem |
| `GEO-ANGLE-REL` | Góc và các quan hệ góc | `KNTT-Core` | CT13 | khai-niem-goc, do-goc, phan-loai-goc, goc-phu-bu, goc-doi-dinh, tia-phan-giac, nhan-dang-goc-dac-biet, duong-vuong-goc |
| `GEO-TRANSVERSAL` | Góc tạo bởi một đường cắt | `KNTT-Core` | CT13 | goc-so-le-trong, goc-dong-vi, goc-trong-cung-phia |
| `GEO-PARALLEL` | Song song, dấu hiệu và quan hệ vuông góc | `KNTT-Core` | CT13 | tinh-chat-song-song, dau-hieu-song-song, tien-de-euclid, vuong-goc-song-song |
| `GEO-PROOF-BASIC` | Giả thiết – kết luận và chứng minh hình học ngắn | `KNTT-Core` | CT13 | gia-thiet-ket-luan, lap-luan-chung-minh-ngan |
| `TRI-ANGLE-SIDE` | Góc, cạnh và bất đẳng thức trong tam giác | `KNTT-Core` | CT14 | tong-goc-tam-giac, goc-ngoai, so-sanh-canh-goc, bat-dang-thuc-tam-giac, duong-vuong-goc-duong-xien |
| `TRI-SPECIAL` | Nhận biết và tính chất tam giác đặc biệt | `KNTT-Core` | CT14, CT20 | phan-loai-tam-giac, tam-giac-can, tam-giac-deu, nhan-biet-tam-giac-deu |
| `TRI-PERPBISECTOR` | Đường trung trực và tính chất cách đều | `KNTT-Core` | CT14, CT15 | nhan-biet-trung-truc, cach-deu-dinh, tinh-chat-duong-trung-truc |
| `TRI-CONGRUENCE` | Các trường hợp tam giác bằng nhau và tương ứng | `KNTT-Core` | CT14 | bang-nhau-ccc, bang-nhau-cgc, bang-nhau-gcg, bang-nhau-tam-giac-vuong, viet-tuong-ung-tam-giac-bang-nhau |
| `GEO-PLANE-MEASURE` | Chu vi, diện tích và đo lường hình phẳng | `KNTT-Core` | CT14, CT20 | chu-vi-dien-tich, chu-vi-tu-giac, dien-tich-tu-giac, do-luong-thuc-te |
| `TRI-CENTROID` | Trung tuyến và trọng tâm | `KNTT-Core` | CT15 | nhan-biet-trung-tuyen, trong-tam, ti-so-trong-tam |
| `TRI-ORTHOCENTER` | Đường cao và trực tâm | `KNTT-Core` | CT15 | nhan-biet-duong-cao, truc-tam, vi-tri-truc-tam |
| `TRI-INCENTER` | Phân giác và tâm nội tiếp | `KNTT-Core` | CT15, CT19 | nhan-biet-phan-giac, tam-noi-tiep, cach-deu-canh, duong-tron-noi-tiep-tam-giac |
| `TRI-CIRCUMCENTER` | Tâm ngoại tiếp và các đường trung trực | `KNTT-Core` | CT15, CT19 | tam-ngoai-tiep, vi-tri-tam-ngoai-tiep, duong-tron-ngoai-tiep-tam-giac |
| `TRI-CENTERS` | Phân biệt bốn tâm và tính đồng quy | `KNTT-Core` | CT15 | phan-biet-bon-tam, dong-quy-bon-duong-dac-biet |
| `QUAD-TRAPEZOID` | Tứ giác, hình thang và hình thang cân | `KNTT-Core` | CT16 | tong-goc-tu-giac, hinh-thang, hinh-thang-can |
| `QUAD-PARALLELOGRAM` | Hình bình hành: tính chất và dấu hiệu | `KNTT-Core` | CT16 | hbh-tinh-chat, hbh-dau-hieu |
| `QUAD-RECTANGLE` | Hình chữ nhật: tính chất và dấu hiệu | `KNTT-Core` | CT16 | hcn-tinh-chat, hcn-dau-hieu |
| `QUAD-RHOMBUS` | Hình thoi: tính chất và dấu hiệu | `KNTT-Core` | CT16 | hthoi-tinh-chat, hthoi-dau-hieu |
| `QUAD-SQUARE-HIER` | Hình vuông, quan hệ bao hàm và suy luận đường chéo | `KNTT-Core` | CT16, CT20 | hvuong-tinh-chat, hvuong-dau-hieu, quan-he-bao-ham, duong-cheo-suy-luan, nhan-biet-hinh-vuong, nhan-biet-tu-giac-dac-biet |
| `SIM-THALES` | Thales và tỉ lệ đoạn thẳng | `KNTT-Core` | CT17 | thales-thuan, thales-dao, ti-le-doan-thang |
| `SIM-MID-BISECTOR` | Đường trung bình và tính chất đường phân giác | `KNTT-Core` | CT17 | duong-trung-binh, tinh-chat-duong-phan-giac |
| `SIM-CRITERIA` | Nhận biết và các trường hợp tam giác đồng dạng | `KNTT-Core` | CT17 | nhan-biet-dong-dang, dong-dang-gg, dong-dang-cgc, dong-dang-ccc, thu-tu-tuong-ung |
| `SIM-LENGTH` | Tính độ dài bằng đồng dạng và hình đồng dạng | `KNTT-Core` | CT17 | tinh-do-dai-dong-dang, hinh-dong-dang |
| `SIM-RATIO-EXT` | Tỉ số chu vi, diện tích và hệ thức tích từ đồng dạng | `Core-Support` | CT17 | ti-so-chu-vi, ti-so-dien-tich, he-thuc-tich |
| `SIM-CHAIN` | Kết hợp song song và đồng dạng trong chuỗi suy luận | `Entrance10` | CT17, CT20 | ket-hop-song-song-dong-dang, song-song-dong-dang |
| `RIGHT-PYTHAGORE` | Pythagore và nhận biết tam giác vuông | `KNTT-Core` | CT14, CT18 | pythagore, pythagore-dao, canh-huyen |
| `RIGHT-TRIG-RATIO` | Tỉ số lượng giác trong tam giác vuông | `KNTT-Core` | CT18 | doi-ke-huyen, sin, cos, tan, cot |
| `RIGHT-SOLVE` | Tìm cạnh và tìm góc bằng lượng giác | `KNTT-Core` | CT18 | tim-canh-luong-giac, tim-goc-luong-giac |
| `RIGHT-APPLICATION` | Góc nâng, góc hạ, chiều cao và khoảng cách | `KNTT-Core` | CT18 | goc-nang-ha, chieu-cao-khoang-cach |
| `RIGHT-ALTITUDE` | Hệ thức cạnh và đường cao trong tam giác vuông | `Entrance10` | CT18 | he-thuc-canh, he-thuc-duong-cao, dien-tich-duong-cao, ket-hop-he-thuc |
| `CIRCLE-CHORD-ARC` | Dây và cung trong đường tròn | `KNTT-Core` | CT19 | day-va-tam, cung-va-day |
| `CIRCLE-ANGLES` | Góc ở tâm, góc nội tiếp và quan hệ góc–cung | `KNTT-Core` | CT19 | goc-o-tam, goc-noi-tiep, nua-duong-tron, goc-cung |
| `CIRCLE-MEASURE` | Độ dài đường tròn, cung và diện tích phần tròn | `KNTT-Core` | CT19 | do-dai-duong-tron, do-dai-cung, dien-tich-quat-tron, dien-tich-vanh-khuyen |
| `CIRCLE-POSITION` | Vị trí tương đối với đường tròn | `KNTT-Core` | CT19 | vi-tri-tuong-doi-duong-thang-duong-tron, vi-tri-tuong-doi-hai-duong-tron |
| `CIRCLE-CYCLIC` | Tứ giác nội tiếp và dấu hiệu nội tiếp | `KNTT-Core` | CT19 | tu-giac-noi-tiep, dau-hieu-noi-tiep |
| `CIRCLE-TANGENT` | Tiếp tuyến: tính chất và chứng minh | `Entrance10` | CT19, CT20 | tiep-tuyen-ban-kinh, hai-tiep-tuyen, chung-minh-tiep-tuyen, tiep-tuyen-chung-minh |
| `CIRCLE-POWER` | Hệ thức hai dây và tiếp tuyến–cát tuyến | `Specialized-Challenge` | CT19 | hai-day-cat-nhau, tiep-tuyen-cat-tuyen |
| `GEO-REGULAR-SYMM` | Đa giác đều và đối xứng | `KNTT-Core` | CT19, CT20 | da-giac-deu, nhan-biet-luc-giac-deu, truc-doi-xung, tam-doi-xung |
| `SOLID-PRISM` | Hình hộp, lập phương và lăng trụ đứng | `KNTT-Core` | CT20 | nhan-biet-hinh-hop-lap-phuong, dien-tich-xung-quanh-hop-chu-nhat, the-tich-hop-chu-nhat, nhan-biet-lang-tru-dung, dien-tich-xung-quanh-lang-tru, the-tich-lang-tru, dien-tich-day, doi-don-vi-do-luong |
| `SOLID-PYRAMID` | Hình chóp đều | `KNTT-Core` | CT20 | nhan-biet-hinh-chop-deu, dien-tich-xung-quanh-hinh-chop, the-tich-hinh-chop |
| `SOLID-CYL-CONE` | Hình trụ và hình nón | `KNTT-Core` | CT20 | nhan-biet-hinh-tru, dien-tich-xung-quanh-hinh-tru, the-tich-hinh-tru, nhan-biet-hinh-non, dien-tich-xung-quanh-hinh-non, the-tich-hinh-non |
| `SOLID-SPHERE` | Hình cầu | `KNTT-Core` | CT20 | nhan-biet-hinh-cau, dien-tich-mat-cau, the-tich-hinh-cau |
| `GEO-SYNTHESIS` | Hình học tổng hợp nhiều bước | `Entrance10` | CT20 | hai-goc-vuong-noi-tiep, noi-tiep-dong-dang, dong-dang-he-thuc-tich, tam-giac-vuong-dong-dang, chuoi-suy-luan, bai-toan-tong-hop |
| `STAT-DATA` | Dữ liệu và thu thập dữ liệu | `KNTT-Core` | CT21 | du-lieu-phan-loai, thu-thap-du-lieu |
| `STAT-QUALITY` | Chất lượng dữ liệu và mẫu thiên lệch | `Core-Support` | CT21 | kiem-tra-chat-luong, mau-thien-lech |
| `STAT-FREQUENCY` | Bảng tần số và tần suất | `KNTT-Core` | CT21 | bang-tan-so, tan-suat |
| `STAT-CHART-READ` | Đọc và so sánh các biểu đồ | `KNTT-Core` | CT21 | doc-bieu-do-cot, doc-bieu-do-doan-thang, doc-bieu-do-cot-kep, bieu-do-quat-tron |
| `STAT-REPRESENT` | Chọn và chuyển dạng biểu diễn dữ liệu | `KNTT-Core` | CT21 | chon-bieu-do, chuyen-bang-bieu-do |
| `STAT-INFER` | Nhận xét và kết luận từ dữ liệu | `KNTT-Core` | CT21 | nhan-xet-du-lieu |
| `STAT-ADVANCED-DATA` | Dữ liệu ghép nhóm và bẫy thang đo | `KNTT-Core` | CT21 | du-lieu-ghep-nhom, don-vi-thang-do |
| `STAT-CENTER` | Các đại lượng xu thế trung tâm | `THPT-Bridge` | CT22 | trung-binh-tho, trung-binh-tan-so, trung-vi, mot, nhieu-mot |
| `STAT-SPREAD-OUTLIER` | Khoảng biến thiên và giá trị ngoại lai | `THPT-Bridge` | CT22 | khoang-bien-thien, ngoai-lai |
| `STAT-COMPARE-MEASURE` | Chọn đại lượng đại diện và so sánh dữ liệu | `THPT-Bridge` | CT22 | so-sanh-trung-binh-trung-vi, chon-dai-luong, so-sanh-hai-bo |
| `PROB-EVENT` | Phép thử và biến cố | `KNTT-Core` | CT23 | phep-thu-ngau-nhien, bien-co, bien-co-chac-chan-khong-the |
| `PROB-CLASSICAL` | Xác suất cổ điển và kiểm tra tính hợp lý | `KNTT-Core` | CT23 | xac-suat-co-dien, kiem-tra-xac-suat |
| `PROB-EXPERIMENTAL` | Xác suất thực nghiệm | `KNTT-Core` | CT23 | xac-suat-thuc-nghiem |
| `PROB-SPACE-SUPPORT` | Không gian mẫu, biến cố đối và lặp phép thử | `Core-Support` | CT23 | khong-gian-mau, bien-co-doi, dong-xu-nhieu-lan |
| `PROB-MULTISTEP` | Xác suất nhiều bước | `Entrance10` | CT23 | xuc-xac-hai-lan, so-do-cay, nhieu-buoc-doc-lap, khong-hoan-lai |
| `MODEL-SETUP` | Đọc dữ kiện và chuẩn hóa đơn vị | `Core-Support` | CT24 | doc-de-du-kien, doi-don-vi |
| `MODEL-VALIDATE` | Kiểm tra nghiệm, đơn vị và kết luận thực tế | `Core-Support` | CT24 | kiem-tra-ket-luan |
| `EXAM-STRATEGY` | Nhận diện dạng bài và quản lý thời gian | `Entrance10` | CT25 | nhan-dien-chuyen-de, quan-ly-thoi-gian |
| `EXAM-REVIEW` | Phân loại lỗi và chữa đề | `Entrance10` | CT25 | phan-loai-loi, checklist-chua-de |

## II. Các Family liên quan trực tiếp đến 40 câu R38

| Mã tồn tại | Nội dung Registry | Tầng | Dùng để đối chiếu, **không mặc nhiên phê duyệt** |
|---|---|---|---|
| `NUM-SETS` | Tập hợp số và biểu diễn số; thành phần: tap-hop-so, so-huu-ti-thap-phan, lam-tron-so, so-vo-ti | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `NUM-ABS` | Giá trị tuyệt đối; thành phần: gia-tri-tuyet-doi | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `NUM-ORDER` | Thứ tự thực hiện phép tính; thành phần: thu-tu-phep-tinh | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `NUM-POWER` | Lũy thừa; thành phần: luy-thua | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `NUM-FRACTION-OPS` | Phép tính phân số; thành phần: phep-tinh-phan-so, phep-tinh-so-huu-ti | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `RATIO-BASIC` | Tỉ số và ứng dụng tỉ số; thành phần: ti-so, doi-don-vi-ti-so, ti-le-ban-do | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `RATIO-DIRECT` | Đại lượng tỉ lệ thuận; thành phần: ti-le-thuan, he-so-ti-le-thuan | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `RATIO-MODEL` | Mô hình hóa bằng tỉ lệ; thành phần: mo-hinh-ti-le | `Entrance10` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `ALG-DIV-MONOMIAL` | Chia đa thức cho đơn thức; thành phần: chia-da-thuc-cho-don-thuc, chia-da-thuc-mot-bien | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `RAD-BASIC` | Căn bậc hai và điều kiện xác định; thành phần: can-bac-hai-so-hoc, dkxd-can, can-binh-phuong | `KNTT-Core` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |
| `QUAD-GRAPH` | Liên hệ nghiệm với đồ thị; thành phần: lien-he-do-thi | `Entrance10` | Kiểm tra đúng bản chất toán học của từng câu, sau đó chọn vai trò phù hợp |

## III. Legacy mapping nguyên trạng — các nhãn thực sự có liên quan

| Topic | Legacy tag | Family ID trong Registry | Vai trò lịch sử | Tầng | Ghi chú gốc |
|---|---|---|---|---|---|
| `CT02` | `gia-tri-tuyet-doi` | `NUM-ABS` | `ASSESSED_SKILL` | `KNTT-Core` |  |
| `CT02` | `can-bac-hai` | **Không có** | `SUPPORTING_SKILL` | `Core-Support` | Core-Support square-root content; excluded from normal S1 learner-facing skill families. |
| `CT03` | `mo-hinh-ti-le` | `RATIO-MODEL` | `ASSESSED_SKILL` | `Entrance10` |  |
| `CT11` | `can-bac-hai-so-hoc` | `RAD-BASIC` | `ASSESSED_SKILL` | `KNTT-Core` | — |
| `CT12` | `lien-he-do-thi` | `QUAD-GRAPH` | `ASSESSED_SKILL` | `Entrance10` | — |

## IV. Những mã NotebookLM từng đề xuất nhưng KHÔNG tồn tại

| Mã không có trong Registry | Số câu ở báo cáo R38 trước | Cách xử lý đúng |
|---|---:|---|
| `NUM-ROUNDING` | 12 PASS | Phản biện ứng viên Registry có thật, ví dụ `NUM-SETS`, hoặc đề xuất `NEW_FAMILY_PROPOSAL` với căn cứ |
| `NUM-RATIONAL-OPS` | 6 PASS | Xem `NUM-FRACTION-OPS`, đồng thời phân biệt câu thứ tự phép tính/lũy thừa |
| `NUM-IRRATIONAL` | 3 PASS | Xem `NUM-SETS` |
| `ALG-DIV-POLYNOMIAL` | 6 PASS | Xem `ALG-DIV-MONOMIAL` nhưng kiểm tra tương thích ngữ nghĩa |
| `NUM-SQUARE-ROOT-INTRO` | 3 REVISE | Có thể cần Family mới; `NUM-REAL-SETS` cũng KHÔNG tồn tại |
| `RATIO-SCALE` | 2 REVISE | Xem Family đã có `RATIO-BASIC` |

**Bắt buộc:** Nếu không chứng minh được Family hiện có phù hợp về ngữ nghĩa, ghi `NEW_FAMILY_PROPOSAL` hoặc `HOLD`, **không tự đặt mã mới như thể đã tồn tại**.

## V. Ranh giới và nguồn

- Bảng là bản diễn giải Markdown được lập từ Registry chính thức, có SHA nguồn. File JSON gốc chỉ phục vụ kiểm chứng kỹ thuật phía dự án, **không phải đầu vào bạn cần tải vào NotebookLM**.
- Chủ dự án chưa chấp thuận bất kỳ ánh xạ `ASSESSED_SKILL` mới nào cho bộ 40 câu; tất cả đề xuất chỉ là ứng viên.
