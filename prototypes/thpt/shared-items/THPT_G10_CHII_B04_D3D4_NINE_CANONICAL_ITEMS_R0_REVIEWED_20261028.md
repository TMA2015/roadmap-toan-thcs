# Toán 10 KNTT · Chương II — Bài 4: Hệ bất phương trình bậc nhất hai ẩn
## Gói thẩm định độc lập D3–D4: 9 item canonical mới, Core / Luyện tập / Tự luận

**PACKET_ID:** `THPT-G10-CHII-B03-B04-D3D4-18ITEMS-20261028-R0` (File B / 2, B04)  
**STATUS:** `NEW_D3D4_CANDIDATES_NOT_REVIEWED` · `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`  
**S1 reviewer receipt:** SGK Toán 10 KNTT Tập 1 B03 trang in 22–25, B04 trang 26–30, cuối ChII trang 31–32; SBT B03 trang 16–19, B04 trang 19–22, cuối ChII trang 22–24.  
**Permanent review sources:** Chỉ `01-05_THPT_PERMANENT_v2.0_ONLY` + SGK/SBT KNTT gốc. Dual Complete Learning Paths file 08 v2.0; handoff 06 và delta 07 v1.1.  
**Nội dung đã PASS:** D1–D2 B03/B04, 6 mô-đun kiến thức, 6 ví dụ có lời giải, 11/11 outcome theo `THPT-G10-CHII-B03-B04-S1-D1D2-KNOWLEDGE-20261028-R0`. Không yêu cầu review lại D1–D2 nếu không thay nội dung.  
**Nguồn biên soạn tham chiếu duy nhất:** `prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_S1_D1D2_KNOWLEDGE_AUTHORING_v0.1.md` Git blob `1854c3ca7cee4ae78d560ced510714c2e82a3fc7`. Các bài tập mới phải có stem khác với ví dụ `EX-B04-01..03`.  
**Ranh giới:** 9 item B04 mới (3 Core, 5 Practice/Application, 1 Written). Không phải đề Tự kiểm tra. Nội dung đáp án/rubric ở đây dành cho tác giả và reviewer trong ngân hàng luyện tập, không mang vào ngân hàng `SGK_CHAPTER_READINESS` riêng.

## 1. Item register B04 (9 IDs độc lập)

| Canonical item ID | Vai trò SGK đề xuất | Outcome chính | Độ sâu dự kiến |
|---|---|---|---|
| `THPT-G10-B04-C01` | `SGK_CORE` | `G10-B04-SYSTEM_FEASIBILITY`; `G10-B04-REGION_INTERSECTION` | Basic |
| `THPT-G10-B04-C02` | `SGK_CORE` | `G10-B04-LINEAR_OBJECTIVE_OPT` | Basic |
| `THPT-G10-B04-C03` | `SGK_CORE` | `G10-B04-VERTEX_IDENTIFICATION`; `G10-B04-LINEAR_OBJECTIVE_OPT` | Basic–Intermediate; reviewer xác minh mức Core |
| `THPT-G10-B04-P01` | `SGK_PRACTICE` | `G10-B04-SYSTEM_FEASIBILITY`; `G10-B04-REGION_INTERSECTION` | Basic–Intermediate |
| `THPT-G10-B04-P02` | `SGK_PRACTICE` | `G10-B04-VERTEX_IDENTIFICATION`; `G10-B04-LINEAR_OBJECTIVE_OPT` | Intermediate |
| `THPT-G10-B04-P03` | `SGK_PRACTICE` | `G10-B04-REGION_INTERSECTION`; `G10-B04-LINEAR_OBJECTIVE_OPT` | Intermediate |
| `THPT-G10-B04-P04` | `SGK_PRACTICE_EXTENSION_CANDIDATE` | `G10-B04-APPLICATION_MODEL` | Extension candidate, reviewer phân tầng S1 |
| `THPT-G10-B04-P05` | `SGK_PRACTICE` | `G10-B04-LINEAR_OBJECTIVE_OPT` | Intermediate |
| `THPT-G10-CHII-W04` | `SGK_WRITTEN` | `G10-B04-APPLICATION_MODEL`; `G10-B04-VERTEX_IDENTIFICATION`; `G10-B04-LINEAR_OBJECTIVE_OPT` | Intermediate, rubric /8 |

## 2. Đề, khóa, lời giải và gợi ý của từng item

### THPT-G10-B04-C01

**Đề:** Xét hệ `x≥0`, `y≥0`, `x+2y≤8`. (a) Kiểm tra `(2,2)` và `(6,2)` có là nghiệm của hệ không. (b) Xác định ba đỉnh miền nghiệm và cho biết các cạnh biên có được lấy không.

**Đáp án:** `(2,2)` thỏa vì `2+4=6≤8`; `(6,2)` không thỏa vì `6+4=10>8`. Miền nghiệm là tam giác kín với đỉnh `(0,0)`, `(8,0)`, `(0,4)`; cả ba cạnh được lấy.

**Lời giải:** Hệ là giao của góc phần tư thứ nhất (có hai trục) với nửa mặt phẳng ở dưới đường `x+2y=8` (có bờ). Hai giao trục của đường xiên lần lượt là `(8,0)` và `(0,4)`, cùng O lập thành tam giác. Kiểm tra từng cặp vào **cả ba** điều kiện.

**Hint (Practice sau Check):** Với hệ, một cặp phải thỏa tất cả các bất phương trình.

### THPT-G10-B04-C02

**Đề:** Miền nghiệm được mô tả bởi hệ `0≤x≤3`, `0≤y≤2`. Tìm giá trị lớn nhất, nhỏ nhất của `F(x,y)=2x+3y` và nêu điểm đạt được mỗi giá trị.

**Đáp án:** Miền là hình chữ nhật kín với bốn đỉnh `(0,0)`, `(3,0)`, `(3,2)`, `(0,2)`. `Fmin=0` tại `(0,0)`, `Fmax=12` tại `(3,2)`.

**Lời giải:** Hình chữ nhật đóng và bị chặn; tính F ở bốn đỉnh nhận được `0,6,12,6`. So sánh các giá trị; điều kiện áp dụng quy tắc đỉnh được đáp ứng.

**Hint:** Viết bốn đỉnh trước khi thay vào hàm tuyến tính.

### THPT-G10-B04-C03

**Đề:** Xét hệ `x≥0`, `y≥0`, `2x+y≤6`, `x+y≤4`. (a) Tìm các đỉnh miền nghiệm chung. (b) Tính giá trị lớn nhất của `G(x,y)=x+3y` trên miền đó.

**Đáp án:** Các đỉnh `(0,0)`, `(3,0)`, `(2,2)`, `(0,4)`. Giá trị G tại các đỉnh là `0,3,8,12`, nên `Gmax=12` tại `(0,4)`.

**Lời giải:** Hai đường xiên cắt nhau khi `2x+y=6`, `x+y=4`, giải được `(2,2)`, thỏa cả hệ. Giao với trục x giới hạn bởi `x≤3`; với trục y giới hạn bởi `y≤4`. Miền là tứ giác kín, bị chặn, nên so sánh G ở bốn đỉnh như trên.

**Hint:** Chỉ giữ giao điểm thỏa mọi bất phương trình; kiểm tra bốn đỉnh.

### THPT-G10-B04-P01

**Đề:** Cho hệ `x≥0`, `y≥0`, `x+y<5`. (a) Xét `(2,3)`, `(1,2)`, `(0,0)` có là nghiệm không. (b) Đường `x+y=5` có thuộc miền nghiệm không? Hai trục tọa độ có được lấy ở phần trong miền nghiệm không?

**Đáp án:** `(2,3)` **không** nghiệm vì `5<5` sai; `(1,2)` nghiệm vì `3<5`; `(0,0)` nghiệm. Đường xiên `x+y=5` **không được lấy**; các phần trục thỏa `x+y<5` **được lấy** vì x,y có dấu `≥`.

**Lời giải:** Dấu nghiêm ngặt chỉ loại biên của điều kiện đó. Ba bất phương trình giao nhau; điểm thuộc hai đường trục có thể thỏa bất phương trình nghiêm ngặt nên vẫn thuộc miền chung.

**Hint:** Không phải tất cả đường bờ của một hệ đều cùng được lấy hoặc cùng bị bỏ.

### THPT-G10-B04-P02

**Đề:** Với hệ `x≥0`, `y≥0`, `x+3y≤9`, `2x+y≤8`, (a) tìm bốn đỉnh miền nghiệm, (b) tìm giá trị lớn nhất của `F(x,y)=3x+5y`.

**Đáp án:** Các đỉnh `(0,0)`, `(4,0)`, `(3,2)`, `(0,3)`. `F` tại các đỉnh bằng `0,12,19,15`, do đó `Fmax=19` tại `(3,2)`.

**Lời giải:** Giao hai bờ `x+3y=9`, `2x+y=8` cho `(3,2)`. Khi y=0, x≤4; khi x=0, y≤3. Miền kín và bị chặn, nên so sánh F theo bốn đỉnh cho kết quả trên.

**Hint:** Giải hệ hai phương trình đường bờ để tìm đỉnh không nằm trên trục.

### THPT-G10-B04-P03

**Đề:** Xét miền nghiệm kín `x≥1`, `y≥1`, `5≤x+y≤8`. (a) Tìm các đỉnh của miền nghiệm. (b) Tìm giá trị nhỏ nhất và lớn nhất của `H(x,y)=2x+y`.

**Đáp án:** Bốn đỉnh `(1,4)`, `(4,1)`, `(7,1)`, `(1,7)`. Giá trị H lần lượt `6,9,15,9`; `Hmin=6` tại `(1,4)` và `Hmax=15` tại `(7,1)`.

**Lời giải:** Đường x+y=5 gặp x=1 ở `(1,4)`, gặp y=1 ở `(4,1)`; đường x+y=8 gặp y=1 ở `(7,1)`, gặp x=1 ở `(1,7)`. Bốn giao điểm tạo thành miền tứ giác kín và bị chặn. Đánh giá H tại các đỉnh là đủ.

**Hint:** Hai đường `x+y=5` và `x+y=8` tạo hai biên song song.

### THPT-G10-B04-P04

**Đề mở rộng — cần phân tầng S1:** Một tổ chia thời lượng cho hai công việc A, B, với số **ca nguyên không âm** x,y. Điều kiện tài nguyên `2x+y≤7`, `x+2y≤7`. Lợi ích `L=5x+4y` (đơn vị). (a) Tìm điểm tối ưu nếu cho x,y là số thực không âm. (b) Tìm phương án nguyên tốt nhất và giải thích vì sao không được làm tròn riêng từng tọa độ đỉnh thực.

**Đáp án:** (a) Miền thực có các đỉnh `(0,0)`, `(7/2,0)`, `(7/3,7/3)`, `(0,7/2)`. L ở các đỉnh là `0`, `35/2`, `21`, `14`, lớn nhất **21 tại `(7/3,7/3)`** (không nguyên). (b) Trên tập nguyên, phương án tốt nhất là `(3,1)` với `L=19`.

**Lời giải:** Giải `2x+y=7`, `x+2y=7` cho x=y=7/3. Giá trị L trên miền thực lớn nhất tại đỉnh này, bằng `(5+4)·7/3=21`. Với x,y nguyên, liệt kê x có thể là 0,1,2,3; tại mỗi x, vì hệ số y trong L dương, chọn y lớn nhất thỏa `y≤7−2x` và `y≤(7−x)/2`. Khi x=0→y=3,L=12; x=1→y=3,L=17; x=2→y=2,L=18; x=3→y=1,L=19. Không thể làm tròn độc lập `(7/3,7/3)` thành `(2,2)` rồi coi tối ưu; `(2,2)` cho 18, thấp hơn 19.

**Hint:** Tối ưu trên đa giác thực không tự chứng minh phương án nguyên; liệt kê các x nguyên khả thi.

**Tier flag:** `SUPPORT_EXTENSION_CANDIDATE`, không tính là SGK Core bắt buộc nếu NotebookLM không xác nhận S1. Không dùng làm Readiness chuẩn Core trước khi phân tầng.

### THPT-G10-B04-P05

**Đề:** Với miền nghiệm kín `x≥0`, `y≥0`, `x+y≤5`, tìm `Fmax,Fmin` của `F(x,y)=2x+2y`. Giá trị lớn nhất có chỉ đạt tại một đỉnh không?

**Đáp án:** `Fmin=0` tại `(0,0)`. `Fmax=10` tại **mọi điểm trên đoạn** `x+y=5`, `x,y≥0` (đoạn từ `(5,0)` đến `(0,5)`), nên không chỉ tại một đỉnh.

**Lời giải:** Vì F=2(x+y), toàn bộ miền có `0≤x+y≤5`. Do đó F trong `[0,10]`. Khi x+y=5, F=10 và có vô số cặp trên cạnh tương ứng. Quy tắc so sánh đỉnh vẫn tìm được **giá trị** cực trị, nhưng không khẳng định cực trị chỉ xuất hiện tại đỉnh.

**Hint:** Hai đỉnh có cùng giá trị lớn nhất có thể khiến cả cạnh nối chúng đều tối ưu.

### THPT-G10-CHII-W04

**Đề tự luận /8:** Một cơ sở sử dụng x giờ vận hành máy A và y giờ vận hành máy B, cho phép chia giờ thành phân số, với x,y là số thực không âm. Tài nguyên 1 tiêu tốn x+2y đơn vị và có tối đa 10 đơn vị; tài nguyên 2 tiêu tốn 3x+y đơn vị và có tối đa 12 đơn vị. Lợi ích `P=4x+3y` (đơn vị) theo x,y. (a) Lập hệ điều kiện. (b) Tìm các đỉnh miền nghiệm. (c) Tìm lợi ích cao nhất và nêu phương án theo giờ.

**Đáp án:** (a) `x≥0,y≥0,x+2y≤10,3x+y≤12`. (b) Các đỉnh `(0,0)`, `(4,0)`, `(14/5,18/5)`, `(0,5)`. (c) P tại các đỉnh bằng `0,16,22,15`, nên `Pmax=22` tại `(14/5,18/5)`, tức 2,8 giờ A và 3,6 giờ B.

**Lời giải:** Giao hai bờ `x+2y=10`, `3x+y=12` cho `(14/5,18/5)` (thỏa mọi điều kiện). Trên trục x, ràng buộc `3x≤12` chặt hơn `x≤10`, cho `(4,0)`; trên trục y, `2y≤10` chặt hơn `y≤12`, cho `(0,5)`. Miền tứ giác kín bị chặn; giá trị P theo các đỉnh như khóa trên. Kiểm tra tại điểm tối ưu: x+2y=14/5+36/5=10; 3x+y=42/5+18/5=12. Hai số giờ phân số được cho phép nên nghiệm thực này phù hợp ngữ cảnh.

**Rubric /8:** 2đ nêu x,y không âm và viết đủ hai ràng buộc; 2đ tìm đúng hai đỉnh trục và gốc; 2đ tìm đúng giao hai đường bờ, xác nhận tính khả thi; 1đ so sánh P tại bốn đỉnh và chọn 22; 1đ kết luận đúng 2,8 giờ/3,6 giờ, có đơn vị. Chấp nhận phân số hoặc số thập phân tương đương; cho điểm phương pháp hợp lệ nếu sai số tính kéo theo.

**Hint (Practice sau Check):** Tọa độ giao đường bờ có thể là phân số vì đơn vị đo là giờ, không buộc nguyên.

## 3. Đề nghị reviewer trả kết quả theo ID

Đối chiếu B04 với SGK/SBT KNTT Tập 1 trang đã ghi ở SOURCE_RECEIPT; thẩm định **9/9 ID** theo từng stem, khóa, lời giải, hint, role Core/Practice/Written, mức độ và 5 outcome B04. Kiểm tra các điều kiện miền **đa giác kín, bị chặn**, đỉnh khả thi, phân biệt biến thực/nguyên, cực trị trên cả cạnh và tính mới của đề so với `EX-B04-01..03`. **Đặc biệt phân tầng** `THPT-G10-B04-P04`: nếu bài tối ưu nguyên này vượt mức Core S1, ghi rõ `SUPPORT_EXTENSION` và không cho làm chứng cứ bắt buộc. Trả verdict per ID, P0/P1/P2, MINIMAL_DELTA, `OUTCOME_ALIGNMENT_B04=5`, `ACADEMIC_OVERALL_B04_D3D4`; không tự coi 18 câu này là `SGK_CHAPTER_READINESS`, không cấp quyền phát hành hoặc merge/deploy.