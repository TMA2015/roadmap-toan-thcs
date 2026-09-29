# BÁO CÁO PHẢN BIỆN HỌC THUẬT: CĐ20 — PART B CONTENT
**Mã gói kiểm định:** `MATH-CORE19-20-R1-20260929`  
**Chuyên đề:** CĐ20 — Hình học không gian / Hình khối trong thực tiễn  
**Phạm vi kiểm định:** Part B Content — 5 bản giảng ứng viên mới [F] và 14 câu hỏi trắc nghiệm ứng viên mới [G] (`GEO20MICRO_016`–`029`)  
**Trạng thái công bố:** `PROPOSAL_ONLY / NOT DEPLOYED`  
**Tài liệu căn cứ:**  
1. `01_TOAN_THCS_MASTER_PLAN_v1.1.md` (Master Plan v1.1)  
2. `00_NOTEBOOK_MATH_PERMANENT_v1.1.md` (Quy tắc phản biện NotebookLM v1.1)  
3. `02_SOURCE_CD20_R1_NOTEBOOKLM.txt` (Main SHA `8a13c6c2f076fe360ada6bbaf51d09997e538a4c`)

---

### I. ĐÁNH GIÁ 5 BẢN GIẢNG ỨNG VIÊN MỚI [F] (`geo20-core-1a` đến `geo20-core-4a`)

| Card ID | Tính chính xác của Tiền đề / Định lý | Kiểm định Phép tính & Ví dụ mẫu (Worked Example) | Mạch Sư phạm & Khắc phục Sai lầm (Misconception) | Trạng thái (Status) |
| :---: | :--- | :--- | :--- | :---: |
| `geo20-core-1a` | Nhận biết tứ giác đặc biệt và quan hệ bao hàm (Hình vuông vừa là hình chữ nhật vừa là hình thoi). Lục giác đều có 6 cạnh bằng nhau và 6 góc bằng nhau. Chuẩn xác theo KNTT Lớp 6 & CĐ16. | **Bài toán:** Hình thoi \\(ABCD\\) có 1 góc vuông. <br>**Lời giải:** Hình thoi có 1 góc vuông \\(\implies\\) 4 góc vuông và 4 cạnh bằng nhau \\(\implies ABCD\\) là hình vuông (đồng thời là hình chữ nhật và hình thoi). Phép suy luận chính xác 100%. | Nhắc nhở rõ ràng: Hai đường chéo bằng nhau của một tứ giác tùy ý chưa đủ kết luận là hình vuông. Mạch sư phạm phân định điều kiện đủ rất mạch lạc. | **PASS** |
| `geo20-core-1b` | Chu vi là tổng độ dài đường biên; tâm đối xứng là điểm để phép quay \\(180^\circ\\) biến hình thành chính nó. Phân biệt rõ ràng giữa trục đối xứng và tâm đối xứng. | **Bài toán:** Hình thoi cạnh \\(5\text{ cm}\\). Tính chu vi và tìm tâm đối xứng. <br>**Lời giải:** \\(P = 4 \times 5 = 20\text{ cm}\\). Giao điểm hai đường chéo là tâm đối xứng. Phép tính chuẩn xác. | Khắc phục sai lầm nhầm chu vi với nửa chu vi, hoặc nhầm một đỉnh là tâm đối xứng. Nhấn mạnh việc đổi về cùng đơn vị độ dài. | **PASS** |
| `geo20-core-2a` | Công thức diện tích đáy \\(S_{\text{đáy}} = a \times b\\), thể tích hình hộp chữ nhật \\(V = a \times b \times h\\). Nhấn mạnh quy tắc bắt buộc đổi về cùng đơn vị độ dài trước khi thực hiện phép nhân. | **Bài toán:** Hộp chữ nhật đáy \\(40\text{ cm} \times 0{,}5\text{ m}\\), cao \\(30\text{ cm}\\). Tính diện tích đáy (\\(\text{m}^2\\)) và dung tích (\\(\text{lít}\\)). <br>**Lời giải:** \\(40\text{ cm} = 0{,}4\text{ m}; 30\text{ cm} = 0{,}3\text{ m}\\). \\(S_{\text{đáy}} = 0{,}4 \times 0{,}5 = 0{,}2\text{ m}^2\\). \\(V = 0{,}2 \times 0{,}3 = 0{,}06\text{ m}^3 = 60\text{ lít}\\). Phép tính chuẩn xác 100% (\\(0{,}06 \times 1000 = 60\\)). | Cảnh báo sai lầm dùng hệ số đổi chiều dài cho diện tích (\\(\text{m}^2\\)) hoặc thể tích (\\(\text{m}^3\\)). Phân định rõ đơn vị \\(1\text{ m}^3 = 1000\text{ lít}\\). | **PASS** |
| `geo20-core-2b` | Định nghĩa lăng trụ đứng có các cạnh bên vuông góc với mặt đáy; hai đáy song song và bằng nhau. Công thức thể tích \\(V = S_{\text{đáy}} \times h\\) (\\(h\\) là chiều cao vuông góc giữa hai đáy). | **Bài toán:** Lăng trụ đứng đáy tam giác vuông có 2 cạnh góc vuông \\(3\text{ cm}, 4\text{ cm}\\), chiều cao \\(10\text{ cm}\\). <br>**Lời giải:** \\(S_{\text{đáy}} = \frac{3 \times 4}{2} = 6\text{ cm}^2\\); \\(V = 6 \times 10 = 60\text{ cm}^3\\). Phép tính chuẩn xác. | Nhắc nhở trọng tâm: Không lấy chu vi đáy nhân chiều cao để tính thể tích (đó là công thức \\(S_{xq} = P_{\text{đáy}} \times h\\)). | **PASS** |
| `geo20-core-4a` | Công thức diện tích xung quanh hình trụ \\(S_{xq} = 2\pi rh\\). Hình nón có 1 đáy tròn, 1 đỉnh, diện tích xung quanh \\(S_{xq} = \pi rl\\) (\\(l\\) là đường sinh), thể tích \\(V = \frac{1}{3}\pi r^2 h\\) (\\(h\\) là chiều cao vuông góc). | **Bài toán:** Hình nón \\(r = 3\text{ cm}, h = 4\text{ cm}\\), đường sinh \\(l = 5\text{ cm}\\). <br>**Lời giải:** \\(S_{xq} = \pi \times 3 \times 5 = 15\pi\text{ cm}^2\\); \\(V = \frac{1}{3}\pi \times 3^2 \times 4 = 12\pi\text{ cm}^3\\). Phép tính chuẩn xác. | Nhấn mạnh khắc phục sai lầm: Không thay nhầm đường sinh \\(l\\) vào công thức thể tích \\(V\\), và không dùng công thức \\(S_{xq}\\) của hình trụ cho hình nón. | **PASS** |

---

### II. ĐÁNH GIÁ 14 CÂU HỎI TRẮC NGHIỆM ỨNG VIÊN MỚI [G] (`GEO20MICRO_016` đến `GEO20MICRO_029`)

| Question ID | Kỹ năng Đích đo (Target Skill) | Kiểm định Toán học & Đáp án Chuẩn (0-based) | Chất lượng Phương án Nhiễu (Distractors) & Đơn vị đo | Trạng thái (Status) |
| :---: | :--- | :--- | :--- | :---: |
| `GEO20MICRO_016` | `nhan-biet-hinh-vuong` | **Đề:** Tứ giác có 4 cạnh bằng nhau và 1 góc vuông là: <br>**Đáp án đúng:** `0 (A): Hình vuông`. <br>**Giải thích:** 4 cạnh bằng nhau \\(\implies\\) hình thoi; hình thoi có 1 góc vuông \\(\implies\\) hình vuông. `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Các phương án nhiễu B, C, D gài bẫy chính xác các khái niệm sai lầm về hình thoi không góc vuông hoặc hình chữ nhật/hình bình hành có 2 cạnh kề khác nhau. | **PASS** |
| `GEO20MICRO_017` | `nhan-biet-luc-giac-deu` | **Đề:** Điều kiện nào mô tả đúng một lục giác đều? <br>**Đáp án đúng:** `0 (A): Sáu cạnh bằng nhau và sáu góc bằng nhau`. <br>**Giải thích:** Đa giác đều bắt buộc phải đồng thời đều cạnh và đều góc. `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B, C bẫy trực tiếp sai lầm cho rằng chỉ cần 6 cạnh bằng nhau hoặc chỉ cần 6 góc bằng nhau là đủ. | **PASS** |
| `GEO20MICRO_018` | `nhan-biet-tu-giac-dac-biet` | **Đề:** Mọi hình vuông luôn thuộc đồng thời hai loại nào? <br>**Đáp án đúng:** `0 (A): Hình chữ nhật và hình thoi`. <br>**Giải thích:** Hình vuông có 4 góc vuông (hình chữ nhật) và 4 cạnh bằng nhau (hình thoi). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B, C, D phủ định loại trừ sai lệch quan hệ bao hàm giữa hình vuông, hình chữ nhật và hình thoi. | **PASS** |
| `GEO20MICRO_019` | `chu-vi-tu-giac` | **Đề:** Tứ giác có 4 cạnh \\(3\text{ cm}, 5\text{ cm}, 4\text{ cm}, 6\text{ cm}\\). Chu vi bằng: <br>**Đáp án đúng:** `0 (A): 18 cm`. <br>**Giải thích:** \\(P = 3 + 5 + 4 + 6 = 18\text{ cm}\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B, C, D tính sai tổng hoặc nhân các kích thước với nhau (\\(90\\)). Đơn vị \\(\text{cm}\\) nhất quán. | **PASS** |
| `GEO20MICRO_020` | `do-luong-thuc-te` | **Đề:** Nền hình chữ nhật dài \\(2{,}5\text{ m}\\), rộng \\(120\text{ cm}\\). Diện tích nền là: <br>**Đáp án đúng:** `0 (A): 3 m²`. <br>**Giải thích:** \\(120\text{ cm} = 1{,}2\text{ m} \implies S = 2{,}5 \times 1{,}2 = 3\text{ m}^2\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B (\\(300\text{ m}^2\\)) bẫy lỗi không đổi đơn vị (\\(2{,}5 \times 120\\)). Nhiễu D (\\(3\text{ m}\\)) bẫy nhầm đơn vị độ dài. | **PASS** |
| `GEO20MICRO_021` | `tam-doi-xung` | **Đề:** Tâm đối xứng của một lục giác đều là: <br>**Đáp án đúng:** `0 (A): Tâm của lục giác đều`. <br>**Giải thích:** Phép quay \\(180^\circ\\) quanh tâm biến lục giác đều thành chính nó. `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B, C bẫy nhầm sang trung điểm một cạnh hoặc một đỉnh. Nhiễu D phủ định sự tồn tại của tâm đối xứng. | **PASS** |
| `GEO20MICRO_022` | `the-tich-hop-chu-nhat` | **Đề:** Hình hộp chữ nhật dài \\(4\text{ cm}\\), rộng \\(3\text{ cm}\\), cao \\(2\text{ cm}\\). Thể tích là: <br>**Đáp án đúng:** `0 (A): 24 cm³`. <br>**Giải thích:** \\(V = 4 \times 3 \times 2 = 24\text{ cm}^3\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B (\\(24\text{ cm}^2\\)) bẫy sai đơn vị diện tích. Nhiễu C (\\(12\\)) bẫy lấy \\(4 \times 3\\) rồi bỏ qua \\(h\\). | **PASS** |
| `GEO20MICRO_023` | `dien-tich-day` | **Đề:** Hình hộp chữ nhật có đáy \\(6\text{ cm} \times 4\text{ cm}\\), cao \\(3\text{ cm}\\). Diện tích một đáy là: <br>**Đáp án đúng:** `0 (A): 24 cm²`. <br>**Giải thích:** \\(S_{\text{đáy}} = 6 \times 4 = 24\text{ cm}^2\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B (\\(72\text{ cm}^3\\)) bẫy nhầm sang tính toàn bộ thể tích \\(V\\). Nhiễu C (\\(24\text{ cm}^3\\)) bẫy nhầm đơn vị \\(\text{cm}^3\\). | **PASS** |
| `GEO20MICRO_024` | `doi-don-vi-do-luong` | **Đề:** Đổi \\(2{,}5\text{ m}^3\\) ra lít được: <br>**Đáp án đúng:** `0 (A): 2500 lít`. <br>**Giải thích:** \\(1\text{ m}^3 = 1000\text{ lít} \implies 2{,}5\text{ m}^3 = 2500\text{ lít}\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B (\\(250\\)), C (\\(25000\\)) bẫy nhầm hệ số \\(100\\) hoặc \\(10000\\). | **PASS** |
| `GEO20MICRO_025` | `the-tich-lang-tru` | **Đề:** Lăng trụ đứng có diện tích đáy \\(9\text{ cm}^2\\), cao \\(7\text{ cm}\\). Thể tích là: <br>**Đáp án đúng:** `0 (A): 63 cm³`. <br>**Giải thích:** \\(V = S_{\text{đáy}} \times h = 9 \times 7 = 63\text{ cm}^3\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B (\\(63\text{ cm}^2\\)) bẫy đơn vị diện tích. Nhiễu D (\\(126\\)) bẫy nhân thêm hệ số \\(2\\). | **PASS** |
| `GEO20MICRO_026` | `nhan-biet-lang-tru-dung` | **Đề:** Phát biểu đúng về cạnh bên lăng trụ đứng là: <br>**Đáp án đúng:** `0 (A): Vuông góc mặt phẳng đáy`. <br>**Giải thích:** Cạnh bên của lăng trụ đứng luôn vuông góc với hai mặt đáy. `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B, C, D bẫy các phát biểu sai về vị trí cạnh bên, độ dài hoặc dạng mặt đáy. | **PASS** |
| `GEO20MICRO_027` | `dien-tich-xung-quanh-hinh-tru` | **Đề:** Hình trụ tròn xoay có \\(r = 3\text{ cm}, h = 5\text{ cm}\\). Diện tích xung quanh là: <br>**Đáp án đúng:** `0 (A): 30π cm²`. <br>**Giải thích:** \\(S_{xq} = 2\pi rh = 2\pi \cdot 3 \cdot 5 = 30\pi\text{ cm}^2\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B (\\(15\pi\\)) bẫy quên hệ số \\(2\\) (\\(\pi rh\\)). Nhiễu D (\\(30\pi\text{ cm}^3\\)) bẫy nhầm đơn vị thể tích. | **PASS** |
| `GEO20MICRO_028` | `nhan-biet-hinh-non` | **Đề:** Hình nón tròn xoay có cấu tạo nào? <br>**Đáp án đúng:** `0 (A): Một đáy hình tròn và một đỉnh`. <br>**Giải thích:** Hình nón gồm 1 đáy tròn và 1 đỉnh phân biệt với hình trụ có 2 đáy tròn song song. `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B mô tả hình trụ; Nhiễu C mô tả lăng trụ tam giác; Nhiễu D mô tả hình lập phương. | **PASS** |
| `GEO20MICRO_029` | `the-tich-hinh-non` | **Đề:** Hình nón tròn xoay có \\(r = 3\text{ cm}, h = 8\text{ cm}\\). Thể tích là: <br>**Đáp án đúng:** `0 (A): 24π cm³`. <br>**Giải thích:** \\(V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \cdot 3^2 \cdot 8 = 24\pi\text{ cm}^3\\). `PROPOSED_ANSWER_INDEX=0` chuẩn xác. | Nhiễu B (\\(72\pi\\)) bẫy quên chia \\(3\\) (\\(\pi r^2 h\\)). Nhiễu C (\\(24\pi\text{ cm}^2\\)) bẫy nhầm đơn vị diện tích. | **PASS** |

---

### III. TỔNG HỢP KIỂM ĐỊNH VÀ LƯU Ý KỸ THUẬT (AUDIT NOTES)

1. **Số lượng ID đã rà soát:**
   * **5 bản giảng ứng viên mới [F]:** `geo20-core-1a`, `geo20-core-1b`, `geo20-core-2a`, `geo20-core-2b`, `geo20-core-4a` (Đủ 5/5 bản giảng).
   * **14 câu hỏi trắc nghiệm ứng viên mới [G]:** `GEO20MICRO_016` đến `GEO20MICRO_029` (Đủ 14/14 câu hỏi).
   * **Tổng cộng Part B Content:** 19/19 đề xuất đạt trạng thái **PASS**.

2. **Miễn trừ Đánh giá Hình vẽ SVG (Diagram Render QA Disclaimer):**
   * Báo cáo này kiểm định tính chính xác về mặt toán học, logic tiền đề, công thức, phép tính số học, đơn vị đo và chỉ số đáp án trắc nghiệm trong văn bản TXT nguồn.
   * **Không tự chứng nhận chất lượng hiển thị trực quan (rendered SVG QA)** của các hình minh họa. Việc QA hiển thị hình vẽ thực tế trên trình duyệt desktop/mobile sẽ do quy trình UI/UX QA thực hiện riêng biệt.

3. **Bảo toàn Dữ liệu Lịch sử & Quy tắc chưa công bố (Deployment Safety):**
   * Toàn bộ 19 đề xuất mới trong Part B giữ nguyên trạng thái **`PROPOSAL_ONLY / NOT DEPLOYED`**.
   * Không tự động đưa 14 câu hỏi mới vào ngân hàng luyện tập chính thức (`Practice Room`) hoặc bộ đếm đánh giá năng lực độc lập (`Core Readiness`).
   * Giữ nguyên 100% 15 câu hỏi gốc (`GEO20MICRO_001`–`015`), `question.card_id` cũ và lịch sử điểm số của người học.
