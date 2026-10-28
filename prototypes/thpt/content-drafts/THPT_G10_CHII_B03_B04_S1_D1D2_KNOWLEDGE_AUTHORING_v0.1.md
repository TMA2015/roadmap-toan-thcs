# TOÁN 10 KNTT · CHƯƠNG II — BẤT PHƯƠNG TRÌNH VÀ HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
## Gói thẩm định D1–D2: Kiến thức độc lập Bài 3–4, 11 outcome ứng viên, 6 ví dụ có lời giải

**PACKET_ID:** `THPT-G10-CHII-B03-B04-S1-D1D2-KNOWLEDGE-20261028-R0`  
**Bản:** `AUTHORING_v0.1` · **Trạng thái:** `NEW_CANDIDATES_NOT_NOTEBOOKLM_REVIEWED` · `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`  
**Chương trình:** SGK Toán 10 Tập 1 *Kết nối tri thức với cuộc sống* (KNTT), Chương II.  
**Permanent source:** Chính xác bộ 5 file `01–05_THPT_PERMANENT_v2.0_ONLY`, phối hợp nguyên tắc Dual Complete Paths file 08 v2.0; quy trình giao file 06, delta review 07 v1.1.  
**S1:** Người biên soạn **chưa tự xác nhận được bản SGK/SBT gốc Tập 1 trong lần này**. NotebookLM phải đối chiếu SGK và SBT gốc để xác lập page receipt, mảng kiến thức, mức độ và hoạt động bắt buộc. Không suy luận PASS hay tự điền trang SBT.  
**Dấu mốc mục lục tham khảo từ S2, CHƯA là S1:** Trang SGK thường được các trang tra cứu gắn Bài 3 khoảng 22–25; Bài 4 khoảng 26–30; bài cuối chương khoảng 31–32. Đây chỉ là hướng dẫn tìm trang trong sách gốc, **không phải SOURCE_RECEIPT**. Nguồn S2: https://montoan.com.vn/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-20309 ; nguồn mục lục của NXB: https://sachdientu.nxbgd.vn/thu-vien-so/doc-sach/shs-toan-tap-1.4491362330 .

**Ranh giới review:** Chỉ D1 (kiến thức) và D2 (ví dụ hướng dẫn) của B03, B04. Chưa có câu `SGK_CORE`, `SGK_PRACTICE`, `SGK_WRITTEN` và **chưa có đề `SGK_CHAPTER_READINESS`** của Chương II. Sơ đồ miền nghiệm D5 mới có đặc tả ý tưởng, chưa có SVG chính thức và chưa PASS. Chỉ dùng những kết quả Chương I đã PASS như tiền đề toán, không yêu cầu học sinh mở Chuyên đề.

---

## I. Bảng 11 outcome ứng viên (chờ NotebookLM xác nhận chuẩn gốc S1)

| ID đề xuất | Bài | Yêu cầu năng lực có thể kiểm chứng | Mô-đun | Ví dụ |
|---|---|---|---|---|
| `G10-B03-LINEAR_TWO_VAR_FORM` | B03 | Nhận dạng `ax+by ☐ c`, `a,b` không đồng thời bằng 0 | KT-B03-01 | EX-B03-01 |
| `G10-B03-ORDERED_PAIR_CHECK` | B03 | Kiểm tra một cặp `(x,y)` có là nghiệm hay không | KT-B03-01 | EX-B03-01 |
| `G10-B03-BOUNDARY_LINE` | B03 | Dựng đường thẳng bờ `ax+by=c` từ hai điểm | KT-B03-02 | EX-B03-02 |
| `G10-B03-HALFPLANE_TEST` | B03 | Dùng điểm thử xác định nửa mặt phẳng nghiệm | KT-B03-02 | EX-B03-02 |
| `G10-B03-STRICT_INCLUSION` | B03 | Phân biệt bờ được lấy với không được lấy (`≤,≥` vs `<,>`) | KT-B03-02 | EX-B03-03 |
| `G10-B03-CONTEXT_MODEL` | B03 | Viết ràng buộc một bất phương trình từ tình huống thực tế | KT-B03-03 | EX-B03-01 |
| `G10-B04-SYSTEM_FEASIBILITY` | B04 | Kiểm tra cặp `(x,y)` thỏa mọi bất phương trình trong hệ | KT-B04-01 | EX-B04-01 |
| `G10-B04-REGION_INTERSECTION` | B04 | Lấy giao các miền nghiệm thành miền nghiệm chung | KT-B04-01 | EX-B04-01 |
| `G10-B04-VERTEX_IDENTIFICATION` | B04 | Xác định các đỉnh miền đa giác bằng giao đường thẳng bờ | KT-B04-02 | EX-B04-02 |
| `G10-B04-LINEAR_OBJECTIVE_OPT` | B04 | Tìm max/min của `F=ax+by` trên miền đa giác kín, bị chặn | KT-B04-02 | EX-B04-02 |
| `G10-B04-APPLICATION_MODEL` | B04 | Lập hệ điều kiện tài nguyên và tối ưu phương án phù hợp | KT-B04-03 | EX-B04-03 |

**Review cần kiểm tra:** S1 có yêu cầu tách riêng các outcome này, có mảng nào bị thiếu hay đặt quá mức Core không? Đặc biệt phải xét `APPLICATION_MODEL` với biến nguyên không âm, giới hạn việc áp dụng quy tắc xét các đỉnh cho **miền đa giác đóng và bị chặn**, và hình ảnh biểu diễn nửa mặt phẳng.

## II. BÀI 3 — Bất phương trình bậc nhất hai ẩn

### KT-B03-01 · Hình thức và nghiệm của bất phương trình bậc nhất hai ẩn

Một bất phương trình bậc nhất hai ẩn `x, y` có dạng `ax+by<c`, `ax+by≤c`, `ax+by>c` hoặc `ax+by≥c`, trong đó `a,b,c` là các số thực đã cho; **ít nhất một trong `a,b` khác 0**. Cặp số có thứ tự `(x₀,y₀)` là **nghiệm** nếu thay `x=x₀`, `y=y₀` vào làm bất phương trình đúng. Thứ tự x và y là quan trọng, không được hoán đổi các tọa độ tùy tiện.

**Tự học theo SGK:** Đây là điều kiện trên **hai đại lượng** cùng lúc, thường có vô số nghiệm. Bài toán 'chi phí hai loại đồ dùng không vượt quá ngân sách' có thể mô hình bằng `a x + b y ≤ c` với `x,y≥0` nếu đề yêu cầu số lượng không âm. Lưu ý `x,y≥0` là hai điều kiện **bổ sung**, không tự có từ định nghĩa bất phương trình bậc nhất hai ẩn.

**Dấu hiệu lỗi:** `2x-3y≤6` là bất phương trình bậc nhất hai ẩn; `x²+y≤5` không phải; `0x+0y<5` không phải vì hai hệ số của ẩn đều bằng 0.

### KT-B03-02 · Biểu diễn miền nghiệm trên mặt phẳng tọa độ

Bước 1: vẽ đường thẳng bờ `d: ax+by=c` bằng hai điểm phân biệt trên d. Nếu đường bờ đi qua gốc O, **không chọn O làm điểm thử**.

Bước 2: chọn một điểm thử `M(x₀,y₀)` không nằm trên d (thường chọn `O(0,0)` nếu hợp lệ), rồi thay vào bất phương trình. Nếu M thỏa bất phương trình, nửa mặt phẳng chứa M thỏa; nếu không, lấy nửa mặt phẳng phía bên kia.

Bước 3: quyết định lấy hay bỏ đường bờ: dấu `≤` và `≥` **có lấy** đường thẳng d, vì mọi điểm trên d làm `ax+by=c`; dấu `<` và `>` **không lấy** đường bờ. Khi vẽ, đường liền nét thường biểu thị bờ được lấy, đường đứt nét biểu thị bờ không được lấy.

**Chú ý:** Nếu bất phương trình có hệ số của một ẩn bằng 0, đường bờ có thể là thẳng đứng hoặc nằm ngang; phương pháp điểm thử vẫn đúng. Không thể chỉ 'chọn bên trái' hay 'chọn phía trên' nếu chưa xét phương trình và dấu.

### KT-B03-03 · Diễn đạt một điều kiện thực tế

Ví dụ một quầy hàng bán hai loại hộp, loại A nặng 2 kg và loại B nặng 3 kg, khả năng chuyên chở tối đa 24 kg. Gọi x,y là số hộp A và B, ta có điều kiện khối lượng `2x+3y≤24`, kèm `x≥0`, `y≥0` và x,y nguyên nếu đếm hộp nguyên vẹn. Việc biểu diễn `2x+3y≤24` giúp thấy các phương án đủ điều kiện tải trọng; các điều kiện nguyên không được tự coi là toàn bộ nửa mặt phẳng liên tục.

**Bài mẫu duy nhất:** EX-B03-01..03 dưới đây chỉ dùng làm D2 Kiến thức. Chưa cấp item_id Core/Practice cho chúng và không dùng lại làm Readiness.

## III. BÀI 3 — ba ví dụ hướng dẫn có lời giải D2

### EX-B03-01 · Nhận dạng và kiểm tra nghiệm

**Đề:** Xét `2x-3y≤6`. (a) Giải thích đây là bất phương trình bậc nhất hai ẩn. (b) Kiểm tra các cặp `(0,0)`, `(3,0)`, `(0,-3)` có là nghiệm không. (c) Một xe chở hai loại hộp A và B nặng 2 kg và 3 kg mỗi hộp, tối đa 24 kg: đặt x,y là số hộp tương ứng, viết điều kiện tổng khối lượng.

**Giải:** (a) Có dạng `ax+by≤c` với `a=2`, `b=-3`, `c=6`, không đồng thời `a=b=0`. (b) Thay `(0,0)` được `0≤6` nên là nghiệm; thay `(3,0)` được `6≤6` nên **là nghiệm nằm trên đường bờ**; thay `(0,-3)` được `9≤6` sai nên **không** là nghiệm. Đó là cách xét cụ thể từng cặp tọa độ. (c) Với x,y là số hộp không âm, điều kiện khối lượng là `2x+3y≤24`. Vì đếm số hộp, x,y phải là **số nguyên không âm**; điều kiện số lượng không tự suy ra từ bất phương trình khối lượng.

**Gắn outcome:** B03-LINEAR_TWO_VAR_FORM, B03-ORDERED_PAIR_CHECK, B03-CONTEXT_MODEL.

### EX-B03-02 · Dựng nửa mặt phẳng với dấu không nghiêm ngặt

**Đề:** Biểu diễn miền nghiệm của `2x+y≤6` trên mặt phẳng `Oxy`, cho biết đường bờ có được tính hay không.

**Giải:** Đường bờ `2x+y=6` đi qua `A(3,0)` và `B(0,6)`. Gốc `O(0,0)` không nằm trên d, và `2·0+0=0≤6`, nên lấy nửa mặt phẳng **chứa gốc O**. Đường bờ cũng thuộc miền nghiệm do có dấu `≤`. Điểm `(4,0)` không thuộc miền nghiệm vì `8>6`. Khi vẽ, giữ đường bờ liền nét và gạch bỏ nửa mặt phẳng không thỏa.

**Gắn outcome:** B03-BOUNDARY_LINE, B03-HALFPLANE_TEST, B03-STRICT_INCLUSION.

### EX-B03-03 · Dựng nửa mặt phẳng với dấu nghiêm ngặt

**Đề:** Biểu diễn miền nghiệm của `x-2y>4`. Xét gốc `O(0,0)`, kiểm tra một nghiệm và quyết định có lấy đường bờ không.

**Giải:** Vẽ `d: x-2y=4` qua `A(4,0)` và `B(0,-2)`. Ở gốc O ta có `0>4` sai, nên lấy nửa mặt phẳng **không chứa O**. Điểm `(6,0)` thỏa `6>4`, xác nhận đúng phía. Mọi điểm trên d cho giá trị đúng bằng 4 và **không** thỏa dấu `>`, nên đường bờ bị loại, thể hiện bằng nét đứt.

**Gắn outcome:** B03-HALFPLANE_TEST, B03-STRICT_INCLUSION.

---

## IV. BÀI 4 — Hệ bất phương trình bậc nhất hai ẩn

### KT-B04-01 · Hệ bất phương trình và miền nghiệm chung

Hệ bất phương trình bậc nhất hai ẩn là một tập gồm từ hai bất phương trình bậc nhất hai ẩn trở lên. Cặp `(x₀,y₀)` là nghiệm của **hệ** khi nó đồng thời thỏa **tất cả** bất phương trình thành phần. Trên mặt phẳng tọa độ, miền nghiệm hệ bằng **giao** các miền nghiệm; không phải hợp.

**Hình dung:** Điều kiện `x≥0`, `y≥0` cho góc phần tư thứ nhất **kể cả hai trục**; thêm `x+y≤4` cắt góc phần tư đó thành tam giác có các đỉnh `(0,0)`, `(4,0)`, `(0,4)` và ba cạnh đều được lấy. Nếu thay `≤` bằng `<` ở một điều kiện, một phần biên sẽ không được lấy. Miền nghiệm của hệ cũng có thể rỗng hoặc không bị chặn; không mặc định luôn là đa giác kín.

### KT-B04-02 · Đỉnh của miền nghiệm và giá trị lớn nhất, nhỏ nhất

Khi miền nghiệm là một **đa giác kín, bị chặn** (kể cả đường biên), muốn tìm giá trị lớn nhất/nhỏ nhất của biểu thức tuyến tính `F(x,y)=p x+q y`, có thể tính `F` tại từng **đỉnh** của đa giác rồi lấy giá trị lớn nhất/nhỏ nhất. Các đỉnh được tìm bằng giao của các đường thẳng bờ, sau đó phải kiểm tra nằm trong **toàn bộ hệ**. Một giao điểm của hai đường thẳng nhưng không thỏa hệ thì không phải đỉnh miền nghiệm.

**Không áp dụng máy móc:** Nếu miền nghiệm không bị chặn, một cực trị có thể không tồn tại; nếu bờ không được lấy, một giá trị có thể chỉ được tiến sát đến chứ không đạt. Nếu x, y buộc là số nguyên, phải đối chiếu các phương án nguyên hợp lệ, không mặc nhiên kết luận một nghiệm thực tối ưu là phương án nguyên nếu tọa độ không nguyên.

### KT-B04-03 · Mô hình hóa ràng buộc thực tiễn

Các điều kiện về ngân sách, nhân lực, thời gian hoặc khối lượng đều có thể chuyển thành bất phương trình theo hai biến. Trình tự: **(1)** nêu ý nghĩa, đơn vị và miền giá trị của x,y; **(2)** lập **mọi** bất phương trình ràng buộc; **(3)** tìm miền nghiệm chung; **(4)** nếu có yêu cầu tối ưu, lập hàm mục tiêu rồi so sánh giá trị tại các đỉnh hợp lệ; **(5)** giải thích đáp án theo đơn vị thực tiễn và điều kiện nguyên nếu có.

**Lỗi thường gặp:** Viết đúng hàm mục tiêu mà quên điều kiện `x≥0`, `y≥0`; dùng giao điểm của các đường bờ chưa kiểm tra; tối ưu trên cả nửa mặt phẳng thay vì miền chung; dùng công thức đỉnh khi miền không đóng và bị chặn.

## V. BÀI 4 — ba ví dụ hướng dẫn có lời giải D2

### EX-B04-01 · Tìm miền nghiệm của một hệ đơn giản

**Đề:** Hãy tìm miền nghiệm và ba đỉnh của hệ `x≥0`, `y≥0`, `x+y≤4`. Kiểm tra `(1,2)` và `(3,2)`.

**Giải:** Hai điều kiện đầu yêu cầu góc phần tư thứ nhất kể cả trục, điều kiện cuối yêu cầu các điểm nằm trên hoặc phía dưới đường `x+y=4` trong góc phần tư đó. Miền chung là tam giác kín có ba đỉnh `O(0,0)`, `A(4,0)`, `B(0,4)`. Điểm `(1,2)` thỏa `1+2=3≤4`; điểm `(3,2)` vi phạm `3+2=5>4`, nên không thuộc miền nghiệm. Không có nghiệm nào phía ngoài tam giác thỏa đủ ba điều kiện.

**Gắn outcome:** B04-SYSTEM_FEASIBILITY, B04-REGION_INTERSECTION.

### EX-B04-02 · Đỉnh của đa giác và tối ưu hàm tuyến tính

**Đề:** Trên miền nghiệm của hệ `x≥0`, `y≥0`, `x+y≤6`, `2x+y≤8`, tìm các đỉnh và giá trị lớn nhất, nhỏ nhất của `F(x,y)=3x+2y`.

**Giải:** Hai đường bờ xiên cắt nhau tại điểm nghiệm của `x+y=6`, `2x+y=8`, tức `(2,4)`; điểm này thỏa cả hệ. Trên hai trục, điều kiện chặt hơn cho `x≤4` và `y≤6`. Miền nghiệm là đa giác kín có bốn đỉnh `O(0,0)`, `A(4,0)`, `B(2,4)`, `C(0,6)`. Tính bảng:

| Đỉnh | `(0,0)` | `(4,0)` | `(2,4)` | `(0,6)` |
|---|---:|---:|---:|---:|
| `F=3x+2y` | 0 | 12 | 14 | 12 |

Vì miền nghiệm là đa giác kín bị chặn, **giá trị lớn nhất bằng 14** tại `(2,4)`, **giá trị nhỏ nhất bằng 0** tại `(0,0)`.

**Gắn outcome:** B04-VERTEX_IDENTIFICATION, B04-LINEAR_OBJECTIVE_OPT.

### EX-B04-03 · Mô hình kinh tế và giải thích đáp án

**Đề:** Một tổ sản xuất làm hai sản phẩm A và B, với số lượng tương ứng x,y là số nguyên không âm. Số đơn vị vật liệu loại 1 cần cho mỗi A/B lần lượt là 1/1 và kho có tối đa 8 đơn vị; loại 2 cần cho mỗi A/B lần lượt là 2/1 và kho có tối đa 10 đơn vị. Lợi nhuận mỗi sản phẩm A là 3 đơn vị tiền, mỗi sản phẩm B là 2 đơn vị tiền. Hãy lập hệ ràng buộc và tìm phương án cho lợi nhuận cao nhất.

**Giải:** `x≥0`, `y≥0`, `x+y≤8`, `2x+y≤10`, x,y nguyên; mục tiêu `P=3x+2y`. Miền nghiệm thực là tứ giác kín có đỉnh `(0,0)`, `(5,0)`, `(2,6)`, `(0,8)`. Tại các đỉnh, P lần lượt là `0`, `15`, `18`, `16`; lớn nhất là `18` tại `(2,6)`. Vì `(2,6)` là cặp số nguyên không âm hợp lệ, đây cũng là phương án tối ưu trong tập phương án nguyên của bài toán. **Kết luận:** sản xuất 2 sản phẩm A và 6 sản phẩm B, lợi nhuận 18 đơn vị tiền, dùng hết cả hai loại vật liệu (`2+6=8` và `2·2+6=10`).

**Gắn outcome:** B04-APPLICATION_MODEL, B04-VERTEX_IDENTIFICATION, B04-LINEAR_OBJECTIVE_OPT.

---

## VI. Liên hệ hai hành trình học và tài nguyên dùng chung

**SGK lớp 10, Chương II:** học sinh học đầy đủ B03/B04 tại đây, sau đó theo từng bài có Core, luyện tập/vận dụng; **bộ Tự kiểm tra CUỐI CHƯƠNG II phải mới, held-out, riêng tư và review độc lập**. Các Core/Practice và 6 ví dụ đang mô tả ở đây không thể tự dùng làm chứng cứ Readiness sau khi người học đã xem. Bản D1–D2 này **chưa tạo canonical item D3–D4**.

**Chuyên đề trục dọc (nếu được mở batch sau):** đầy đủ Kiến thức / Luyện tập / Tự kiểm tra Chuyên đề, đúng ba phần, không có Topic Core. Câu Core của SGK có thể được tham chiếu qua cùng một canonical ID trong Practice cơ bản của Chuyên đề nếu thích hợp; không sao chép lời giải, đáp án hoặc lịch sử. Hình/sơ đồ khi có thể dùng chung nhưng phải phù hợp ngữ cảnh, không bắt học sinh đổi nhánh.

**D5 cần lập:** tối thiểu một hình đường bờ và nửa mặt phẳng với dấu nghiêm ngặt/không nghiêm ngặt ở B03, một hình miền tam giác và một hình miền tứ giác cùng các đỉnh ở B04. Các hình này chưa được tạo/xác nhận học thuật; yêu cầu reviewer xác định loại hình bắt buộc và mức độ trước khi thiết kế.

## VII. Câu hỏi bắt buộc gửi NotebookLM (review độc lập)

1. Đọc **SGK và SBT Toán 10 KNTT Tập 1 gốc**, điền **SOURCE_RECEIPT_G10_CHII_SGK** và **SOURCE_RECEIPT_G10_CHII_SBT** gồm số trang in riêng B03/B04/cuối chương. Đối chiếu nội dung hoạt động/ví dụ/hình vẽ gốc, độ sâu S1, điều kiện và thuật ngữ; không dùng mục lục S2 như chứng cứ S1.
2. Kiểm tra D1 từng KT-B03-01..03 và KT-B04-01..03; nhất là phân biệt đường bờ lấy/bỏ, điểm thử thuộc bờ, miền hệ có thể rỗng/không bị chặn, phương pháp xét đỉnh chỉ khi điều kiện đủ, và biến thực/nguyên trong ứng dụng.
3. Thẩm định đúng **11 outcome ứng viên**, 6 ví dụ hướng dẫn **EX-B03-01..03/EX-B04-01..03**, tính toán, phản ví dụ và khả năng tự học chỉ theo nhánh SGK; phân tầng kiến thức Core và Extension. Nếu S1 chỉ cần ít hơn outcome, nêu `HOLD/DELTA_C` ID tương ứng, không tự gán FULL.
4. Trả một biên bản gồm `PACKET_ID`, `SOURCE_RECEIPT`, `LESSON_REGISTER`, `KNOWLEDGE_MODULE_REGISTER=6`, `EXAMPLE_REGISTER=6`, `OUTCOME_ALIGNMENT=11`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G10_CHII_D1D2`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO` và nêu rõ loại hình D5 phù hợp. Không được PASS D3–D4, Readiness hay website chỉ từ hồ sơ này.


authoring_status|PENDING_NOTEBOOKLM_S1_AND_D1D2_REVIEW
whole_chapter_academic_status|NOT_YET_PASS
protected_readiness_authored|NO
web_integration|NOT_STARTED_HERE
merge_deploy|NO