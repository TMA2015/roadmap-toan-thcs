# Temp · Toán 10 KNTT Tập 1 · Chương II · Bài 3–4 · D1–D6 R01

**PACKET_ID:** `THPT-G10-CHII-B03-B04-D1D6-AUTHORING-20261029-R01`  
**STATUS:** `NEW_ACADEMIC_CANDIDATE / NOTEBOOKLM_REVIEW_PENDING / CONTENT_READY=NO`  
**OWNER_LANE:** `AUTHORING_ONLY` · Không thay đổi website, không merge/deploy, không ghi Readiness hoặc Mastery.  
**LEARNING_PATH:** `SGK_CHAPTER` / đề xuất `PUBLIC_FORMATIVE_ONLY` cho hai bài SGK, không phải toàn chương hoặc Chuyên đề.  
**REVIEW_SOURCE:** File Temp này là một snapshot nguyên nội dung gồm D1–D6, đáp án, lời giải, rubric và XML 2 SVG thật. **Snapshot hash/commit** phải đối chiếu với hồ sơ GitHub sau khi khóa.  
**PERMANENT_SOURCES:** Chọn đúng 5 nguồn NotebookLM THPT v2.0 đang có hiệu lực: `01_THPT_MASTER_PLAN_v2.0.md`, `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`, `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`, `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`, `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`. Không chọn lẫn v1.0.

## 1. Source Receipt — SGK/SBT KNTT S1

**SGK Toán 10 KNTT Tập 1, Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn:**
- **Bài 3**: trang in **22–25** — mở đầu vấn đề vé rạp, khái niệm ax+by bất đẳng thức, cặp nghiệm, miền nghiệm nửa mặt phẳng, trường hợp dấu nghiêm ngặt/không nghiêm ngặt; ứng dụng vé/chi phí.
- **Bài 4**: trang in **26–30** — hệ bất phương trình, miền giao, tối ưu một biểu thức trên đa giác nghiệm, xét chi phí/lợi nhuận thực tế.
- **Bài tập cuối chương II**: trang in **31–32** — trắc nghiệm xác định miền nghiệm, tự luận biểu diễn và mô hình phân phối, tối ưu.

**SBT Toán 10 KNTT Tập 1:** Bài 3 trang in **16–18** (lý thuyết/biểu diễn/2.1–2.5), Bài 4 **19–23** (hệ, miền nghiệm, giá trị nhỏ nhất/lớn nhất, bài toán tài nguyên/kinh tế, 2.6–2.9); bài cuối Chương II **24–28**; lời giải Chương II bắt đầu **trang 88**. Đã đối chiếu ảnh trang PDF do chủ dự án lưu trên Google Drive, gồm các trang có sơ đồ nửa mặt phẳng, đa giác và các bài tối ưu. Reviewer phải đối chiếu lại từng ý với S1 trước khi quyết định Core/Practice: những ví dụ và câu mới dưới đây là *học liệu do dự án tự biên soạn*, không chép nguyên bài SGK/SBT.

### OUTCOME_MATRIX — 10 mục tiêu; yêu cầu reviewer xác nhận đủ độ sâu thật

| OUTCOME_ID | Bài | Nội dung / điều kiện phải có | Evidence |
|---|---|---|---|
| `G10-B03-LINEAR_INEQUALITY` | B03 | `ax+by ◁ c`; `(a,b)≠(0,0)`; hệ số có thể bằng 0 riêng lẻ | D1, B03-C01 |
| `G10-B03-POINT_TEST` | B03 | Thử cặp, không dùng thử O nếu trên biên | D1, B03-C02/P03 |
| `G10-B03-BOUNDARY` | B03 | Đường thẳng biên, dấu ≤/≥ lấy biên; </> không lấy | D1, B03-P01, FIG01 |
| `G10-B03-HALFPLANE` | B03 | Xác định phía nghiệm đúng với đổi dấu | D1, B03-P02/P05, FIG01 |
| `G10-B03-MODELING` | B03 | Đơn vị tiền, không âm, nguyên khi đếm, điều kiện xác định | EX03, B03-P04/P06, W03 |
| `G10-B04-SYSTEM` | B04 | Thỏa đồng thời mọi bất phương trình | D1, B04-C01 |
| `G10-B04-REGION_INTERSECTION` | B04 | Lấy giao, không lấy hợp; hình đúng/biên đúng | B04-C02/P01, FIG02 |
| `G10-B04-FEASIBILITY` | B04 | Miền rỗng, bị chặn hoặc không bị chặn; tối ưu có điều kiện | B04-P04/P05 |
| `G10-B04-LINEAR_OBJECTIVE` | B04 | Tìm tối ưu đỉnh, trường hợp cả cạnh đồng tối ưu | EX04-01, B04-P02/P03, W04 |
| `G10-B04-INTEGER_MODELS` | B04 | Bài sản phẩm nguyên, khác với nghiệm LP liên tục | EX04-03, B04-P06, W04 |

**Chỉ số coverage dự kiến:** 10 outcome / 6 ví dụ D2 / 16 formative / 2 Written / 2 D5 SVG / 4 HELP_ID. Không tính số lượng thay cho thẩm định độ sâu, đa dạng và quy tắc S1.

## 2. D1 — Lý thuyết đủ dùng để học hai bài độc lập

### BÀI 3 · Bất phương trình bậc nhất hai ẩn

**Định nghĩa:** Bất phương trình bậc nhất hai ẩn có dạng \(ax+by<c\), \(ax+by\le c\), \(ax+by>c\) hoặc \(ax+by\ge c\), trong đó \(a,b,c\in\mathbb R\) và \((a,b)\ne(0,0)\). Ví dụ \(0x-3y>1\) vẫn hợp lệ; \(x^2+y>3\) và \(0x+0y\le2\) không phải dạng này.

**Cặp nghiệm:** Một cặp thực \((x_0,y_0)\) là nghiệm khi phép thế làm bất phương trình đúng. Đường \(d:ax+by=c\) chia mặt phẳng thành hai nửa; miền nghiệm là một nửa mặt phẳng, **có** đường biên nếu dấu \(\le/\ge\), **không** có đường biên nếu \(</>\).

**Quy trình 5 bước:** (1) Xác định đường biên \(d\), vẽ bằng hai điểm phân biệt hoặc dạng phù hợp; (2) chọn một điểm kiểm tra **không thuộc** \(d\) — có thể chọn \(O(0,0)\) khi \(c\ne0\); (3) thế và xét đúng/sai; (4) chọn phía thỏa; (5) kết luận lấy/không lấy biên. Khi giải \(-y<2-3x\) phải **đảo chiều** để được \(y>3x-2\).

**Điều kiện thực tiễn:** Với giá, thời lượng, số lượng, phải nêu miền của biến, dấu không âm, đơn vị. Nếu \(x,y\) là sản phẩm/ghế/vé, thường yêu cầu nguyên không âm. Nếu dùng trung bình phân thức, phải xác nhận mẫu dương; không thể chỉ giữ bất phương trình sau nhân mẫu rồi bỏ điều kiện ban đầu.

### BÀI 4 · Hệ bất phương trình bậc nhất hai ẩn

**Hệ và miền chung:** Cặp \((x,y)\) là nghiệm hệ khi thỏa **đồng thời từng bất phương trình**. Miền nghiệm là **giao** các nửa mặt phẳng (không phải hợp), có thể rỗng, bị chặn hoặc không bị chặn. Phần đường biên của từng ràng buộc được lấy tùy dấu của bất phương trình; các nét liền/đứt trên hình phải tương ứng chính xác.

**Giá trị lớn nhất/nhỏ nhất của hàm bậc nhất:** Với hàm \(F(x,y)=px+qy\) trên một **đa giác nghiệm không rỗng, đóng và bị chặn**, tồn tại giá trị lớn nhất, nhỏ nhất và có thể tìm chúng bằng các **đỉnh**. Trường hợp \(F\) song song một cạnh, có thể có cả cạnh cùng tối ưu. Nếu miền rỗng thì không tối ưu; nếu miền không bị chặn, vẫn có thể tồn tại *một* cực trị hữu hạn, phải xét riêng, không mặc định.

**Bài toán đếm sản phẩm:** Trước tiên có thể tối ưu trên miền liên tục để tìm chặn trên. Nếu điểm tối ưu liên tục có tọa độ nguyên thì đạt tối ưu cả bài toán nguyên; nếu tọa độ phân số thì phải tối ưu lại trên các điểm nguyên khả thi, không tự làm tròn từng tọa độ hoặc dùng giá trị phân số làm đáp án sản phẩm nguyên.

**Tự học 5 bước:** đặt biến và điều kiện → lập các ràng buộc/đơn vị → xác định miền giao → nhận diện mục tiêu và thử các đỉnh phù hợp → đối chiếu đơn vị, nghiệm nguyên, ý nghĩa thực tế và trường hợp rỗng/không bị chặn.

## 3. D2 — Sáu ví dụ giải mẫu có điều kiện và kiểm tra

**EX-G10-B03-01 — Vẽ miền có lấy đường biên.** Biểu diễn \(x+2y\le4\). Đường biên \(x+2y=4\) qua \((4,0),(0,2)\). Tại \(O\), \(0\le4\) đúng → tô nửa mặt phẳng chứa O, **kể cả biên**. Điểm \((2,1)\) thỏa dấu bằng.

**EX-G10-B03-02 — Miền nghiêm ngặt.** \(2x-y<1\iff y>2x-1\). Tô phần **phía trên** đường \(y=2x-1\), không lấy biên (nét đứt). O thỏa; \((1,1)\) nằm trên đường biên nên **không** là nghiệm.

**EX-G10-B03-03 — Pha trộn giá trung bình.** Trộn \(x\) kg hàng 140 nghìn/kg và \(y\) kg hàng 180 nghìn/kg, cần đơn giá trung bình không quá 170 nghìn/kg. Với \(x,y\ge0\) và \(x+y>0\):
\[
\frac{140x+180y}{x+y}\le170 \iff 140x+180y\le170(x+y) \iff y\le3x.
\]
\((1,3)\) cho 170, thỏa; \((1,4)\) cho 172, không thỏa. **Không xóa điều kiện \(x+y>0\).**

**EX-G10-B04-01 — Giao nửa mặt phẳng và cực trị.** Hệ \(x\ge0,y\ge0,x+y\le6,2x+y\le8\) cho các đỉnh \(O(0,0),A(4,0),B(2,4),C(0,6)\). Xét \(F=3x+2y\): giá trị \(0,12,14,12\) → cực đại \(14\) tại B, cực tiểu \(0\) tại O. Kiểm tra B: \(2+4=6, 2\cdot2+4=8\).

**EX-G10-B04-02 — Hệ vô nghiệm.** Hai điều kiện \(x+y\le1\) và \(x+y\ge3\) không thể đồng thời đúng → miền nghiệm chung rỗng. Vẽ hợp hai miền sẽ cho kết luận sai.

**EX-G10-B04-03 — Tối ưu doanh nghiệp có nghiệm nguyên.** Sản phẩm A/B mua lần lượt 20/10 triệu mỗi chiếc; vốn không quá 1200 triệu và sức chứa không quá 100 chiếc. \(x,y\in\mathbb Z_{\ge0}\), \(20x+10y\le1200, x+y\le100\). Lợi nhuận \(F=3{,}5x+2y\) triệu đồng; miền liên tục có đỉnh \((0,0),(60,0),(20,80),(0,100)\). Lợi nhuận tại đỉnh tương ứng \(0,210,230,200\). Cực đại 230 tại \((20,80)\) có tọa độ nguyên nên đạt tối ưu cả mô hình nguyên. Đơn vị và điều kiện không âm không được bỏ.

## 4. D3 — 16 câu canonical candidate có đủ đáp án và lời giải

**Quy tắc:** Mỗi `item_id` một câu gốc; không clone sang Topic. Formative được phép xem lời giải sau khi luyện tập, **không** được dùng nguyên câu này làm minh chứng Readiness độc lập. `Cxx = SGK_CORE`, `Pxx = SGK_PRACTICE`; `answer_key` là ký tự đáp án đúng. Cần NotebookLM kiểm tra mức độ và đa dạng thực chất, không dùng riêng số đếm để cấp PASS.

### THPT-G10-B03-C01

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-LINEAR_INEQUALITY` · **ROLE:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Biểu thức nào sau đây là bất phương trình bậc nhất hai ẩn?
- **Options:** A. 2x²+y≤3 | B. 0x−3y>1 | C. xy<2 | D. 0x+0y≤2
- **ANSWER_KEY:** `B`
- **Hint (formative only):** Kiểm tra bậc và yêu cầu hệ số của x,y không đồng thời bằng 0.
- **Worked solution:** 0x−3y>1 đúng dạng ax+by>c với (a,b)=(0,−3) ≠ (0,0). Các lựa chọn khác bậc cao hoặc hệ số x,y đồng thời bằng 0.

### THPT-G10-B03-C02

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-POINT_TEST` · **ROLE:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Cặp (2,−1) có là nghiệm của 2x−y≤5 hay không?
- **Options:** A. Có, vì vế trái bằng 5 | B. Không, vì vế trái bằng 5 | C. Có, vì vế trái bằng 3 | D. Không, vì y âm
- **ANSWER_KEY:** `A`
- **Hint (formative only):** Thay nguyên cặp có dấu âm vào vế trái.
- **Worked solution:** 2·2−(−1)=5, thỏa 5≤5. Dấu bằng được lấy.

### THPT-G10-B03-P01

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-BOUNDARY` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Đường biên của x+3y≥6 được xử lí thế nào?
- **Options:** A. Không lấy đường thẳng x+3y=6 | B. Lấy đường thẳng x+3y=6 | C. Chỉ lấy hai giao điểm với trục | D. Lấy toàn mặt phẳng
- **ANSWER_KEY:** `B`
- **Hint (formative only):** Dấu ≥ có nhận dấu bằng.
- **Worked solution:** Biên x+3y=6 thuộc miền nghiệm của x+3y≥6 vì các cặp trên biên làm hai vế bằng nhau.

### THPT-G10-B03-P02

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-HALFPLANE` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Miền nghiệm của 3x−y<2 nằm ở đâu so với y=3x−2?
- **Options:** A. Trên đường thẳng, không gồm biên | B. Dưới đường thẳng, không gồm biên | C. Trên đường thẳng, gồm biên | D. Dưới đường thẳng, gồm biên
- **ANSWER_KEY:** `A`
- **Hint (formative only):** Nhân với −1 khi chuyển −y sang một vế và nhớ đảo chiều.
- **Worked solution:** 3x−y<2 ⇔ −y<2−3x ⇔ y>3x−2. Nằm phía trên đường biên nét đứt, không lấy biên.

### THPT-G10-B03-P03

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-POINT_TEST` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Khi vẽ 2x+y≥0, kết luận nào đúng về điểm thử O(0,0)?
- **Options:** A. O hợp lệ để xác định phía vì thỏa bất phương trình | B. O không hợp lệ vì nằm trên đường biên | C. O không hợp lệ vì y=0 | D. Không cần đường biên
- **ANSWER_KEY:** `B`
- **Hint (formative only):** Tính 2·0+0 và so với vế phải của phương trình đường biên.
- **Worked solution:** O nằm trên đường 2x+y=0 nên không giúp chọn một phía. Có thể dùng (1,0): 2>0, phía chứa (1,0) thỏa ≥.

### THPT-G10-B03-P04

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-MODELING` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Rạp bán vé loại A 60 nghìn đồng/vé (x vé), loại B 90 nghìn đồng/vé (y vé). Để thu ít nhất 18 triệu đồng, điều kiện nào đúng?
- **Options:** A. 2x+3y≥600, x,y là số nguyên không âm | B. 2x+3y≤600, x,y là số nguyên không âm | C. 3x+2y≥600, x,y số thực bất kỳ | D. x+y≥200, không cần điều kiện nguyên
- **ANSWER_KEY:** `A`
- **Hint (formative only):** Đổi 18 triệu thành 18 000 nghìn và nhớ số vé là số nguyên.
- **Worked solution:** 60x+90y≥18 000 ⇔ 2x+3y≥600, đồng thời x,y∈Z≥0. Chỉ số tiền không quyết định tính nguyên và không âm.

### THPT-G10-B03-P05

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-HALFPLANE` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Điểm nào chắc chắn nằm trong miền nghiệm 2x+3y>0?
- **Options:** A. (0,0) | B. (−3,2) | C. (0,1) | D. (3,−2)
- **ANSWER_KEY:** `C`
- **Hint (formative only):** Thay từng cặp vào 2x+3y; cần lớn hơn 0 thực sự.
- **Worked solution:** Tại (0,1) biểu thức bằng 3>0. Tại (0,0), (−3,2), (3,−2) bằng 0 nên đều nằm trên biên và không thỏa dấu >.

### THPT-G10-B03-P06

- **LESSON:** `G10-B03` · **OUTCOME:** `G10-B03-MODELING` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Cửa hàng mua x thùng loại A giá 35 nghìn/thùng, y thùng loại B giá 20 nghìn/thùng, ngân sách không quá 700 nghìn; x,y∈Z≥0. Cặp nào khả thi?
- **Options:** A. (10,15) | B. (15,10) | C. (20,1) | D. (0,36)
- **ANSWER_KEY:** `A`
- **Hint (formative only):** Tính 35x+20y rồi so với 700.
- **Worked solution:** (10,15): 350+300=650≤700; (15,10):725; (20,1):720; (0,36):720 đều vượt 700.

### THPT-G10-B04-C01

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-SYSTEM` · **ROLE:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Cặp nào thỏa đồng thời x≥0, y≥0 và x+y≤5?
- **Options:** A. (2,3) | B. (4,2) | C. (−1,4) | D. (3,3)
- **ANSWER_KEY:** `A`
- **Hint (formative only):** Một nghiệm hệ phải qua mọi bất phương trình, không chỉ một.
- **Worked solution:** (2,3) không âm và có tổng 5≤5; B/D tổng 6>5; C có x<0.

### THPT-G10-B04-C02

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-REGION_INTERSECTION` · **ROLE:** `SGK_CORE` · **DIFFICULTY:** `BASIC` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Miền nghiệm của hệ x≥0, y≥0, x+y≤4 là hình nào?
- **Options:** A. Tam giác kín có đỉnh (0,0),(4,0),(0,4) | B. Nửa mặt phẳng x+y≤4 | C. Mọi điểm góc phần tư thứ nhất | D. Tam giác mở không lấy ba cạnh
- **ANSWER_KEY:** `A`
- **Hint (formative only):** Lấy giao cả ba điều kiện, không chỉ một điều kiện.
- **Worked solution:** Ba điều kiện xác định tam giác kín gồm hai đoạn trên trục không âm và đoạn x+y=4, vì các dấu đều không nghiêm ngặt.

### THPT-G10-B04-P01

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-REGION_INTERSECTION` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Cho hệ x≥0, y≥0, x+y≤7, 2x+y≤10. Trong các điểm sau, điểm nào thuộc miền nghiệm?
- **Options:** A. (3,4) | B. (5,3) | C. (−1,3) | D. (6,0)
- **ANSWER_KEY:** `A`
- **Hint (formative only):** Kiểm hai ràng buộc đường chéo và x,y không âm.
- **Worked solution:** (3,4): 3+4=7≤7 và 2·3+4=10≤10. (5,3): 8>7; C âm x; (6,0): 12>10.

### THPT-G10-B04-P02

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-LINEAR_OBJECTIVE` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Trên miền x≥0, y≥0, x+y≤7, 2x+y≤10, giá trị lớn nhất của F=4x+3y là bao nhiêu?
- **Options:** A. 20 | B. 21 | C. 24 | D. 28
- **ANSWER_KEY:** `C`
- **Hint (formative only):** Xác định các đỉnh và tính F tại từng đỉnh.
- **Worked solution:** Các đỉnh (0,0),(5,0),(3,4),(0,7). F lần lượt 0,20,24,21. Cực đại 24 tại (3,4).

### THPT-G10-B04-P03

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-LINEAR_OBJECTIVE` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Cho x≥0, y≥0, x+y≤8; tối đa hóa F=x+y. Mệnh đề nào đúng?
- **Options:** A. Chỉ (8,0) tối ưu | B. Chỉ (0,8) tối ưu | C. Mọi điểm của cạnh x+y=8 trong góc phần tư I đều tối ưu | D. Không tồn tại giá trị lớn nhất
- **ANSWER_KEY:** `C`
- **Hint (formative only):** Hàm mục tiêu không đổi trên đường thẳng x+y=8.
- **Worked solution:** F≤8, đạt bằng 8 tại mọi điểm không âm trên cạnh nối (8,0) và (0,8); có vô số nghiệm tối ưu.

### THPT-G10-B04-P04

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-FEASIBILITY` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Hệ x+y≤2 và x+y≥5 có miền nghiệm như thế nào?
- **Options:** A. Miền nghiệm là giao của hai đường thẳng | B. Vô nghiệm | C. Có nghiệm (0,0) | D. Miền nghiệm là toàn mặt phẳng
- **ANSWER_KEY:** `B`
- **Hint (formative only):** Đặt t=x+y và xét đồng thời hai bất đẳng thức.
- **Worked solution:** Không có t thực vừa ≤2 vừa ≥5, do đó hệ không có điểm thỏa mãn.

### THPT-G10-B04-P05

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-FEASIBILITY` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `CORE_APPLY` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Với miền x≥0, y≥0 không bị chặn, F=−x−y có đặc điểm nào?
- **Options:** A. Không có cực đại vì miền không bị chặn | B. Cực đại bằng 0 tại (0,0), không có cực tiểu hữu hạn | C. Cực tiểu bằng 0 tại (0,0) | D. Cả cực đại và cực tiểu đều bằng 0
- **ANSWER_KEY:** `B`
- **Hint (formative only):** F≤0; cho x tăng không hạn chế để xét giá trị nhỏ nhất.
- **Worked solution:** Vì x+y≥0, F=−x−y≤0; tại (0,0), F=0 là giá trị lớn nhất. Cho x→∞, F→−∞ nên không có giá trị nhỏ nhất hữu hạn.

### THPT-G10-B04-P06

- **LESSON:** `G10-B04` · **OUTCOME:** `G10-B04-INTEGER_MODELS` · **ROLE:** `SGK_PRACTICE` · **DIFFICULTY:** `APPLICATION` · **VERSION:** `R01` · **TYPE:** `MCQ`.
- **Stem:** Với x,y là số nguyên không âm, x+2y≤5, 2x+y≤5, giá trị lớn nhất của 3x+2y là bao nhiêu?
- **Options:** A. 7 | B. 8 | C. 25/3 | D. 9
- **ANSWER_KEY:** `B`
- **Hint (formative only):** Đỉnh tối ưu của bài toán liên tục có thể có tọa độ phân số. Xét x nguyên 0,1,2 và chọn y nguyên phù hợp.
- **Worked solution:** Từ 2x+y≤5 suy ra x=0,1,2. Nếu x=0 thì y≤2, F≤4; x=1 thì y≤2, F≤7; x=2 thì y≤1, F≤8, đạt tại (2,1). Bài toán liên tục tại giao x=y=5/3 cho F=25/3>8 nhưng không nguyên.

## 5. D4 — 2 Written (shared Written/Anchor library, không tạo bank khác)

**Quy tắc:** Written có cùng stem, lời giải và rubric bất kể placement; nhãn `ANCHOR` là tag của Written. Học sinh tự so sánh với rubric chỉ là luyện tập, không tự cộng Skill Mastery. Không dùng lời giải Written dưới đây làm Readiness held-out.

### THPT-G10-CHII-W03

- **LESSON:** `G10-B03` · **ROLE:** `WRITTEN` · **ANCHOR_TAG:** `false` · **OUTCOME:** `G10-B03-MODELING` · **VERSION:** `R01`.
- **Đề bài:** Một nhóm gây quỹ bán x phần ăn A giá 40 nghìn đồng và y phần ăn B giá 65 nghìn đồng; tổng bán không quá 55 phần, mục tiêu thu ít nhất 2 600 nghìn đồng. (a) Lập các điều kiện toán học nếu x,y là số phần ăn bán được. (b) Kiểm tra hai phương án (30,25) và (40,10). (c) Giải thích vì sao (0,0) không đáp ứng mục tiêu.
- **Hướng dẫn tự làm:** Đổi và giữ cùng đơn vị nghìn đồng; phân biệt ít nhất và không quá.
- **Lời giải mẫu:** x,y∈Z≥0; x+y≤55; 40x+65y≥2600. (30,25): 30+25=55, thu 1200+1625=2825≥2600 nên khả thi. (40,10): 50 phần, thu 1600+650=2250<2600 nên không khả thi. (0,0) thu 0<2600.
- **Rubric chấm tự đối chiếu:** 7 điểm: (1) không âm+nguyên 1đ; (2) số phần ≤55 1đ; (3) mục tiêu doanh thu đúng đơn vị 2đ; (4) phương án (30,25) 1đ; (5) phương án (40,10) 1đ; (6) giải thích (0,0) 1đ.

### THPT-G10-CHII-W04-ANCHOR

- **LESSON:** `G10-B04` · **ROLE:** `WRITTEN` · **ANCHOR_TAG:** `true` · **OUTCOME:** `G10-B04-LINEAR_OBJECTIVE` · **VERSION:** `R01`.
- **Đề bài:** Một xưởng làm x món A và y món B, x,y là số nguyên không âm; các ràng buộc x+2y≤10, 3x+y≤15. Lợi nhuận tính theo đơn vị quy ước là P=5x+4y. (a) Lập miền nghiệm liên tục và tìm các đỉnh. (b) Tìm lợi nhuận lớn nhất, giải thích việc áp dụng đáp án vào mô hình số nguyên. (c) Nếu cả một cạnh cho cùng lợi nhuận tối ưu, cần lưu ý điều gì?
- **Hướng dẫn tự làm:** Dựng miền liên tục trước rồi kiểm tra tính nguyên của nghiệm tối ưu.
- **Lời giải mẫu:** Các đường biên cắt trục: x+2y=10 có (10,0),(0,5); 3x+y=15 có (5,0),(0,15). Giao hai đường thẳng là (4,3). Miền chung trong góc phần tư I là tứ giác có đỉnh (0,0),(5,0),(4,3),(0,5). P tương ứng 0,25,32,20; cực đại liên tục 32 tại (4,3). Vì (4,3) nguyên, đây cũng là cực đại mô hình sản phẩm nguyên. Nếu F hằng trên cả một cạnh, tối ưu có thể không duy nhất; phải xét nghiệm phù hợp thêm điều kiện thực tế.
- **Rubric chấm tự đối chiếu:** 7 điểm: (1) điều kiện không âm/nguyên 1đ; (2) biểu diễn chính xác từng biên và miền giao 1đ; (3) bốn đỉnh đúng 2đ; (4) giá trị P tại từng đỉnh 1đ; (5) cực đại 32 ở (4,3) và tính nguyên 1đ; (6) giải thích trường hợp cả cạnh tối ưu 1đ.

## 6. D5 — Hai hình SVG nguồn THẬT, nội dung XML để review trực tiếp

- **FIG-G10-B03-01:** Hai miền nghiệm dấu ≤ và dấu <; kiểm chứng đường biên, tọa độ, gốc, màu và ký hiệu nét đứt. Nguồn authoring `prototypes/thpt/visuals/THPT_G10_B03_HALFPLANES_D5_R01.svg`. Cần kiểm thử thiết bị sau tích hợp, không đồng nghĩa lỗi toán.
- **FIG-G10-B04-01:** Miền nghiệm đa giác với bốn đỉnh và cực đại F=14 tại B; nguồn `prototypes/thpt/visuals/THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg`.

### FIG-G10-B03-01 — nguyên XML

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1320" height="740" viewBox="0 0 1320 740" role="img" aria-labelledby="title desc">
<title id="title">Hai miền nghiệm: dấu không nghiêm ngặt có biên và dấu nghiêm ngặt không có biên</title>
<desc id="desc">Bên trái x+2y nhỏ hơn hoặc bằng 4, miền nghiệm phía dưới đường thẳng nét liền qua (0,2) và (4,0); gốc tọa độ thuộc miền. Bên phải 2x-y nhỏ hơn 1, tương đương y lớn hơn 2x-1, miền nghiệm nằm trên đường biên nét đứt; điểm (1,1) trên biên không thuộc miền.</desc>
<rect width="1320" height="740" rx="24" fill="#f8fafc"/>
<text x="42" y="54" fill="#0f172a" font-size="30" font-family="Arial,sans-serif" font-weight="bold">Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn</text>
<!-- Left panel, coordinate origin (180,530), 58 px/unit; x in [-1,6], y in [-2,5]. -->
<rect x="42" y="98" width="600" height="570" rx="20" fill="white" stroke="#cbd5e1" stroke-width="2"/>
<text x="64" y="140" fill="#1e40af" font-family="Arial,sans-serif" font-size="25" font-weight="bold">x + 2y ≤ 4 — lấy đường biên</text>
<defs><clipPath id="L"><rect x="95" y="169" width="435" height="421"/></clipPath><clipPath id="R"><rect x="790" y="169" width="420" height="421"/></clipPath></defs>
<g clip-path="url(#L)"><polygon points="95,675 530,675 530,588 95,370" fill="#bfdbfe" fill-opacity="0.80"/>
<path d="M95 370 L530 588" stroke="#1d4ed8" stroke-width="5" fill="none"/></g>
<path d="M95 530 H551 M180 615 V155" stroke="#475569" stroke-width="2.5" fill="none"/>
<path d="M551 530 l-12 -6 v12 z M180 155 l-6 12 h12 z" fill="#475569"/>
<text x="556" y="536" font-size="21" fill="#334155">x</text><text x="170" y="152" font-size="21" fill="#334155">y</text>
<circle cx="180" cy="530" r="6" fill="#0f172a"/><text x="151" y="558" font-size="19" fill="#334155">O</text>
<circle cx="180" cy="414" r="7" fill="#1d4ed8"/><text x="193" y="411" font-size="19" fill="#1e40af">(0,2)</text>
<circle cx="412" cy="530" r="7" fill="#1d4ed8"/><text x="421" y="556" font-size="19" fill="#1e40af">(4,0)</text>
<text x="66" y="641" font-size="19" fill="#1e40af" font-family="Arial,sans-serif">Nửa mặt phẳng chứa O, kể cả biên</text>
<!-- Right panel: origin(860,500), scale 66; y=2x-1, graph [-0.5,3] x [-2,5] -->
<rect x="678" y="98" width="600" height="570" rx="20" fill="white" stroke="#cbd5e1" stroke-width="2"/>
<text x="704" y="140" fill="#047857" font-family="Arial,sans-serif" font-size="25" font-weight="bold">2x − y &lt; 1 — không lấy đường biên</text>
<g clip-path="url(#R)"><polygon points="827,632 827,170 1058,170" fill="#bbf7d0" fill-opacity="0.78"/>
<path d="M827 632 L1058 170" stroke="#047857" stroke-width="5" stroke-dasharray="13 12" fill="none"/></g>
<path d="M790 500 H1220 M860 626 V150" stroke="#475569" stroke-width="2.5" fill="none"/>
<path d="M1220 500 l-12 -6 v12 z M860 150 l-6 12 h12 z" fill="#475569"/>
<text x="1228" y="506" font-size="21" fill="#334155">x</text><text x="848" y="148" font-size="21" fill="#334155">y</text>
<circle cx="860" cy="500" r="6" fill="#0f172a"/><text x="835" y="523" font-size="19" fill="#334155">O</text>
<circle cx="926" cy="434" r="7" fill="white" stroke="#047857" stroke-width="3"/><text x="940" y="427" font-size="18" fill="#047857">(1,1) trên biên, không thuộc miền</text>
<text x="705" y="641" font-size="19" fill="#047857" font-family="Arial,sans-serif">Phía trên y = 2x − 1, không kể biên</text>
<text x="42" y="712" fill="#475569" font-size="18" font-family="Arial,sans-serif">Điểm thử phải nằm ngoài đường biên. Màu tô chỉ hỗ trợ, dấu ≤ và &lt; cùng nét liền/đứt mới xác định miền nghiệm.</text>
</svg>
```

### FIG-G10-B04-01 — nguyên XML

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1160" height="760" viewBox="0 0 1160 760" role="img" aria-labelledby="title desc" font-family="DejaVu Sans,Arial,sans-serif">
<title id="title">Miền nghiệm đa giác và cực trị F bằng 3x cộng 2y</title>
<desc id="desc">Hệ x lớn hơn hoặc bằng 0, y lớn hơn hoặc bằng 0, x+y nhỏ hơn hoặc bằng 6, 2x+y nhỏ hơn hoặc bằng 8 tạo tứ giác có các đỉnh O(0,0), A(4,0), B(2,4), C(0,6). Giá trị F=3x+2y lần lượt 0,12,14,12; lớn nhất 14 tại B. Đường kẻ biên liền và tọa độ được ghi rõ.</desc>
<rect width="1160" height="760" fill="#f8fafc" rx="24"/>
<text x="50" y="54" fill="#0f172a" font-family="Arial,sans-serif" font-size="30" font-weight="bold">Miền nghiệm chung và tối ưu hàm bậc nhất</text>
<rect x="47" y="91" width="656" height="618" fill="white" stroke="#cbd5e1" stroke-width="2" rx="20"/>
<!-- origin(135,630), 77 px/unit -->
<path d="M135 648 V128 M107 630 H680" stroke="#64748b" stroke-width="2.5" fill="none"/>
<path d="M135 128 l-6 13 h12 z M680 630 l-13 -6 v12 z" fill="#64748b"/>
<text x="690" y="633" fill="#475569" font-size="22">x</text><text x="123" y="119" fill="#475569" font-size="22">y</text>
<!-- x+y=6 runs (0,6)=(135,168) through (6,0)=(597,630); 2x+y=8 runs (1,6)=(212,168) through (4,0)=(443,630). -->
<path d="M135 168 L597 630" stroke="#7c3aed" stroke-width="3.5" fill="none"/>
<path d="M212 168 L443 630" stroke="#b45309" stroke-width="3.5" fill="none"/>
<polygon points="135,630 443,630 289,322 135,168" fill="#bbf7d0" fill-opacity="0.78" stroke="#047857" stroke-width="5"/>
<circle cx="135" cy="630" r="6" fill="#0f172a"/><text x="102" y="657" font-size="19">O</text>
<circle cx="443" cy="630" r="7" fill="#0f172a"/><text x="459" y="651" font-size="18">A(4,0)</text>
<circle cx="289" cy="322" r="10" fill="#047857" stroke="white" stroke-width="3"/><text x="305" y="310" font-size="21" fill="#047857" font-weight="bold">B(2,4)</text>
<circle cx="135" cy="168" r="7" fill="#0f172a"/><text x="148" y="157" font-size="19">C(0,6)</text>
<text x="489" y="319" fill="#7c3aed" font-size="21" transform="rotate(44 489 319)">x + y = 6</text>
<text x="203" y="178" fill="#b45309" font-size="20">2x + y = 8</text>
<text x="65" y="694" font-size="18" fill="#047857">Tô phần giao của BỐN nửa mặt phẳng; lấy các đường biên.</text>
<rect x="725" y="91" width="397" height="618" rx="20" fill="white" stroke="#cbd5e1" stroke-width="2"/>
<text x="750" y="145" fill="#0f172a" font-family="Arial,sans-serif" font-size="24" font-weight="bold">Các điều kiện</text>
<text x="751" y="192" font-size="21">x ≥ 0; y ≥ 0</text><text x="751" y="232" font-size="21">x + y ≤ 6</text><text x="751" y="272" font-size="21">2x + y ≤ 8</text>
<path d="M749 304 H1099" stroke="#cbd5e1" stroke-width="2"/>
<text x="749" y="350" font-size="24" font-weight="bold">F(x,y) = 3x + 2y</text>
<text x="754" y="402" font-size="21">O(0,0):  0</text><text x="754" y="451" font-size="21">A(4,0): 12</text>
<rect x="739" y="464" width="353" height="66" rx="14" fill="#dcfce7" stroke="#047857" stroke-width="2"/>
<text x="754" y="505" font-size="24" fill="#065f46" font-weight="bold">B(2,4): 14  MAX</text>
<text x="754" y="573" font-size="21">C(0,6): 12</text>
<text x="754" y="636" font-size="23" font-weight="bold" fill="#065f46">Giá trị lớn nhất = 14</text>
<text x="50" y="736" fill="#475569" font-family="Arial,sans-serif" font-size="18">Kiểm tất cả các đỉnh. Kết quả này chỉ áp dụng trực tiếp khi miền khả thi là đa giác không rỗng, bị chặn.</text>
</svg>
```

## 7. D6 — 4 thẻ phát hiện lỗi → nguyên lí → tự sửa → luyện lại

### HELP-G10-B03-01 — Thử điểm trên đường biên
- **Trigger:** B03-P03, B03-C02. **Sai lầm:** chọn O(0,0) để tìm phía nghiệm khi c=0, rồi kết luận phía nào cũng được.
- **Nguyên lí:** Điểm thử phải nằm ngoài đường thẳng ax+by=c. Nếu O nằm trên đường thì đổi sang (1,0) hoặc (0,1) nếu điểm đó không nằm trên biên.
- **Tự sửa:** Với 2x+y≥0, chọn (1,0): 2≥0 đúng, xác định phía chứa điểm thử; dấu ≥ lấy cả biên. Soát lại bằng một điểm ở phía ngược (−1,0) sai.
- **Tiền đề:** phương trình đường thẳng; thay tọa độ; đọc dấu bất đẳng thức.
- **Luyện lại:** `THPT-G10-B03-P03` → `THPT-G10-B03-P01`; không cập nhật Mastery từ xem lời giải.

### HELP-G10-B03-02 — Nhầm đổi dấu và đường biên
- **Trigger:** B03-P01, B03-P02, B03-P05. **Sai lầm:** chuyển −y sang vế còn lại mà không đổi chiều, hoặc tô cả đường biên khi có <, >.
- **Nguyên lí:** Nhân/chia với số âm làm đảo chiều bất đẳng thức; ≤/≥ nhận dấu bằng, </> không nhận.
- **Tự sửa:** 3x−y<2 ⇔ y>3x−2; chọn một điểm phía trên đường, thử lại; vẽ đường biên nét đứt hoặc có nhãn loại biên.
- **Tiền đề:** bất phương trình một ẩn, đường thẳng.
- **Luyện lại:** `THPT-G10-B03-P02` → `THPT-G10-B03-P05`.

### HELP-G10-B04-01 — Nhầm hợp với giao trong hệ
- **Trigger:** B04-C01, B04-C02, B04-P01, B04-P04. **Sai lầm:** chỉ cần đúng một bất phương trình nên tô hợp các miền.
- **Nguyên lí:** Nghiệm hệ phải thỏa đồng thời toàn bộ điều kiện, tức lấy giao; miền có thể rỗng.
- **Tự sửa:** Bắt đầu từ một cặp cụ thể, thế vào từng hàng; loại ngay khi một hàng sai. Vẽ từng miền, chỉ giữ phần không bị loại bởi bất cứ điều kiện nào.
- **Tiền đề:** phép giao tập hợp, biểu diễn nửa mặt phẳng.
- **Luyện lại:** `THPT-G10-B04-C01` → `THPT-G10-B04-P04`.

### HELP-G10-B04-02 — Tối ưu sai miền hoặc bỏ điều kiện nguyên
- **Trigger:** B04-P02, B04-P03, B04-P05, B04-P06, W04. **Sai lầm:** chỉ kiểm một đỉnh, giả định nghiệm tối ưu duy nhất, hoặc làm tròn đỉnh phân số để trả bài nguyên.
- **Nguyên lí:** Trên đa giác kín, bị chặn, không rỗng, so F tại **mọi** đỉnh; có thể đồng tối ưu trên cả cạnh. Với miền không bị chặn xét riêng cực trị. Sản phẩm nguyên bắt buộc nghiệm nguyên.
- **Tự sửa:** Lập bảng đỉnh → F → chọn giá trị phù hợp. Với B04-P06, đỉnh liên tục (5/3,5/3) không nguyên; duyệt x∈{0,1,2}, tìm y nguyên tối ưu: (2,1) cho F=8, không dùng 25/3 làm đáp án sản phẩm.
- **Tiền đề:** giải hệ hai phương trình; miền nghiệm; số nguyên; hàm mục tiêu.
- **Luyện lại:** `THPT-G10-B04-P06` → `THPT-G10-B04-P03` (trường hợp cả cạnh cùng tối ưu).

## 8. QA tác giả, ranh giới và yêu cầu verdict

**Kiểm QA độc lập (không phải NotebookLM PASS):** 18 ID item duy nhất (16 Formative + 2 Written), 10 unique outcome, 6 ví dụ, 4 HELP_ID, 2 SVG có `<title>`/`<desc>`, 17 phép kiểm toán học bằng SymPy/Python **PASS**. Hai file SVG đã được parse XML và thử render thành PNG, không phải QA responsive/website. Xác minh lại mô hình, điều kiện nguyên và tất cả lựa chọn nhiễu, không dựa đơn thuần vào script.

**Không có:** held-out SGK_CHAPTER_READINESS, TOPIC_READINESS, private answer key, engine chấm điểm, Mastery, JavaScript web, PR phát hành; không khẳng định hoàn chỉnh toàn Chương II hoặc TOPIC.

**Review request (NotebookLM theo đúng 5 Permanent Sources v2.0 và SGK/SBT KNTT S1):**
1. Trả `SOURCE_RECEIPT` có tên sách, tập, trang in, bài/cụm hoạt động đã đối chiếu, ghi rõ phần nào là phạm vi SGK Core và phần nào là vận dụng.
2. Trả `OUTCOME_MATRIX` **10/10** hay chỉ rõ thiếu phạm vi, đánh giá D1–D6 theo từng bài B03/B04; không nhận số câu làm chứng cứ tự đủ.
3. Trả `ITEM_RECONCILIATION`: expected 18 item ID = 16 formative + 2 Written, đủ từng ID/outcome, đánh giá key/solution/hint/rubric, kiểm tra trùng lặp thực chất và điều kiện toán học; 4 HELP_ID và 2 FIG_ID riêng (không tính item).
4. Trả `FIGURE_VERDICTS` trên nguyên XML với chú ý chính xác tọa độ/vùng tô/dấu bằng/nét liền-nét đứt; `HELP_VERDICTS` theo trigger và sửa lỗi thực chất.
5. Phân loại lỗi `P0/P1/P2`, `MINIMAL_DELTA`, verdict `LESSON_B03`, `LESSON_B04`, `D1_OVERALL...D6_OVERALL` và `ACADEMIC_CLEARANCE_FOR_THIS_DELTA` có giới hạn đúng hai bài và đúng snapshot.
6. Không cấp phép công bố/merge/deploy, không kích hoạt Readiness/Mastery hoặc suy rộng PASS SGK sang Topic.

**STATUS:** `NEW_ACADEMIC_MATERIAL_DELTA_C` / `NOTEBOOKLM_NOT_REVIEWED` / `CONTENT_READY_NO` / `RELEASE_NO`.
