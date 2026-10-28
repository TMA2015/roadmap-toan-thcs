# Toán 10 KNTT · Chương IX · D3/D4 — 16 canonical candidates · v0.1

**PACKET_ID:** `THPT-G10-CHIX-B26-B27-D1D2-D3D4-AUTHORING-20261028-R0` (chung file D1/D2 cùng đợt).
**Trạng thái:** `16_NEW_CANONICAL_CANDIDATES_NOT_REVIEWED` · `NO_LIVE_ASSESSMENT` · `NO_MASTERY` · `NO_MERGE_DEPLOY`.
**Nguồn cần reviewer:** SGK/SBT Toán 10 KNTT tập 2 Chương IX B26–B27 bản gốc; Permanent THPT v2.0 01–05. Chỉ mục web gợi ý SGK B26 77–82, B27 83–87; số trang cần xác minh từ S1 gốc, không coi chỉ mục thứ cấp là receipt chính thức.
**Lưu ý bảo mật:** Đây chỉ là Core/Practice/Written có thể hiển thị lời giải sau kiểm tra; không có câu held-out Readiness hay khóa bí mật. Không lấy nguyên đề đã thấy để chứng minh Readiness độc lập.

## 1. Canonical register — đếm mỗi item đúng một lần

| ID | Bài | Role dự thảo | Outcome chính | Dạng và level | Review |
|---|---|---|---|---|---|
| THPT-G10-B26-C01 | B26 | SGK_CORE / TOPIC_PRACTICE cơ bản nếu khớp scope | G10-B26-EXPERIMENT_SAMPLE_SPACE | Không gian mẫu, Basic | PENDING |
| THPT-G10-B26-C02 | B26 | SGK_CORE / TOPIC_PRACTICE cơ bản nếu khớp scope | G10-B26-CLASSICAL_RATIO | Xác suất đồng khả năng, Basic | PENDING |
| THPT-G10-B26-P01 | B26 | SGK_PRACTICE | G10-B26-COMPLEMENT | Đối của biến cố, Basic | PENDING |
| THPT-G10-B26-P02 | B26 | SGK_PRACTICE | G10-B26-EVENT_SUBSET | Mô tả tập biến cố, Basic | PENDING |
| THPT-G10-B26-P03 | B26 | SGK_PRACTICE | G10-B26-CLASSICAL_RATIO | Gộp hai điều kiện, Inter | PENDING |
| THPT-G10-B26-P04 | B26 | SGK_CHAPTER_APPLICATION | G10-B26-SCOPE_SMALL_PROBABILITY | Nguyên lí xác suất bé, Inter | PENDING |
| THPT-G10-B26-P05 | B26 | SGK_PRACTICE | G10-B26-SCOPE_SMALL_PROBABILITY | Phản ví dụ đồng khả năng, Inter | PENDING |
| THPT-G10-CHIX-W26-01 | B26 | SGK_WRITTEN (không phải Anchor) | G10-B26-EXPERIMENT_SAMPLE_SPACE | Tự luận mô tả Ω, biến cố đối, /6 | PENDING |
| THPT-G10-B27-C01 | B27 | SGK_CORE / TOPIC_PRACTICE cơ bản nếu khớp scope | G10-B27-TREE_SEQUENCE | Cây 2 bước, Basic | PENDING |
| THPT-G10-B27-C02 | B27 | SGK_CORE / TOPIC_PRACTICE cơ bản nếu khớp scope | G10-B27-COUNTING_OUTCOMES | Chọn trang phục, Basic | PENDING |
| THPT-G10-B27-P01 | B27 | SGK_PRACTICE | G10-B27-COUNTING_OUTCOMES | Tổ hợp chọn nhóm, Inter | PENDING |
| THPT-G10-B27-P02 | B27 | SGK_PRACTICE | G10-B27-COMPLEMENT_PROBABILITY | Ít nhất một, Inter | PENDING |
| THPT-G10-B27-P03 | B27 | SGK_PRACTICE | G10-B27-MULTISTEP_CONTEXT | Không hoàn lại, Inter | PENDING |
| THPT-G10-B27-P04 | B27 | SGK_CHAPTER_APPLICATION | G10-B27-TREE_SEQUENCE | Hai đồng xu và xúc xắc, Inter | PENDING |
| THPT-G10-B27-P05 | B27 | SGK_PRACTICE | G10-B27-EQUIPROBABLE_MODELLING | Phát hiện đếm sai, Inter | PENDING |
| THPT-G10-CHIX-W27-ANCHOR-01 | B27 | SGK_WRITTEN; `anchor_tag=true` | G10-B27-MULTISTEP_CONTEXT | Tự luận hai biến cố, /8 | PENDING |

**Đối soát:** 16 canonical ID duy nhất = 7 B26 Core/Practice/Application + 1 Written; 7 B27 Core/Practice/Application + 1 Written. **Anchor chỉ là tag** trên 1 trong 2 Written, không sinh thêm item. Không gán bất cứ item nào vào `SGK_CHAPTER_READINESS` hoặc `TOPIC_READINESS` ở bản này.

## 2. Bài 26 — bảy Core/Practice và một Written

### THPT-G10-B26-C01 — SGK_CORE
**Đề:** Tung đồng thời một đồng xu cân đối (N: ngửa, S: sấp) và một xúc xắc 6 mặt cân đối; ghi cả hai kết quả. Hãy viết dạng chung của các phần tử không gian mẫu Ω và xác định số phần tử của Ω.
**Đáp án:** Ω={(N,k),(S,k) | k∈{1,2,3,4,5,6}}; n(Ω)=12.
**Lời giải:** Mỗi kết quả gồm một mặt đồng xu và một số chấm; hai lựa chọn cho đồng xu nhân sáu lựa chọn xúc xắc = 12 cặp phân biệt. Đếm (N,3) khác (S,3).
**Hint chỉ Core sau yêu cầu thử:** Một kết quả cần đủ *hai* thành phần, không chỉ một số chấm.
**Review:** Cần xác nhận cách đặt kí hiệu và sự độc lập/đồng khả năng được nêu đúng.

### THPT-G10-B26-C02 — SGK_CORE
**Đề:** Một vòng quay có 8 ô bằng nhau, các ô được chọn đều nhau. Có 3 ô vàng, 2 ô xanh và 3 ô hồng. Tính xác suất dừng ở ô vàng; xác suất **không** dừng ở ô vàng.
**Đáp án:** P(vàng)=3/8; P(không vàng)=5/8.
**Lời giải:** Ω gồm 8 ô vật lí đồng khả năng, không phải 3 tên màu. Biến cố vàng gồm 3 ô; biến cố đối gồm 5 ô còn lại.
**Hint sau check:** Đếm ô, đừng coi mỗi tên màu là một kết quả đồng khả năng.

### THPT-G10-B26-P01 — SGK_PRACTICE
**Đề:** Hộp chứa 3 thẻ đỏ, 4 thẻ xanh lá, 2 thẻ xanh dương, mỗi thẻ phân biệt được khi đánh số. Lấy đều ngẫu nhiên một thẻ. Tìm xác suất **không phải thẻ xanh dương**.
**Đáp án:** 7/9.
**Lời giải:** 9 thẻ sơ cấp đồng khả năng, có 2 thẻ xanh dương. P(không xanh dương)=1−2/9=7/9.
**Hint sau check:** Tính biến cố đối sẽ ngắn hơn.

### THPT-G10-B26-P02 — SGK_PRACTICE
**Đề:** Tung một đồng xu cân đối 2 lần độc lập, theo thứ tự lần 1 rồi lần 2. Hãy viết Ω và biến cố A “đúng một lần xuất hiện mặt sấp”. Tính P(A).
**Đáp án:** Ω={NN,NS,SN,SS}; A={NS,SN}; P(A)=1/2.
**Lời giải:** Có 2²=4 chuỗi đồng khả năng; hai chuỗi NS và SN là những trường hợp đúng một lần sấp.
**Hint sau check:** NS và SN là hai kết quả khác nhau vì có thứ tự thử.

### THPT-G10-B26-P03 — SGK_PRACTICE
**Đề:** Chọn đều một số nguyên từ 1 đến 10. Tính xác suất số được chọn **chia hết cho 2 hoặc chia hết cho 5**.
**Đáp án:** 3/5.
**Lời giải:** Có 10 số đồng khả năng. Các số thỏa mãn là {2,4,5,6,8,10} (số 10 chỉ đếm một lần), nên P=6/10=3/5.
**Hint sau check:** “Hoặc” cho phép cả hai điều kiện đồng thời; tránh đếm 10 hai lần.

### THPT-G10-B26-P04 — SGK_CHAPTER_APPLICATION
**Đề:** Trong 1.000 phiếu đánh số phân biệt và có đúng 1 phiếu may mắn, một người rút đều ngẫu nhiên 1 phiếu. Hãy tính P(trúng) và đánh giá đúng/sai phát biểu: “Vì xác suất rất nhỏ nên không thể trúng.”
**Đáp án:** 1/1000 = 0,001; phát biểu sai.
**Lời giải:** Chỉ 1/1000 kết quả thuận lợi. Xác suất dương dù rất nhỏ nên vẫn có khả năng trúng; không được đánh đồng sự kiện khó với sự kiện không thể.
**Hint sau check:** So sánh xác suất của biến cố không thể với một biến cố hiếm có xác suất dương.
**Review:** Chú ý tránh diễn giải nguyên lí xác suất bé thành dự báo chắc chắn qua nhiều lần.

### THPT-G10-B26-P05 — SGK_PRACTICE
**Đề:** Một vòng quay được chia thành ba vùng đỏ, vàng, xanh **có diện tích khác nhau**; đề bài chỉ nói kim quay ngẫu nhiên, không cho thêm mô hình xác suất hoặc tần suất thực nghiệm. Có đủ căn cứ để khẳng định P(đỏ)=1/3 không? Giải thích.
**Đáp án:** Không đủ căn cứ.
**Lời giải:** Định nghĩa cổ điển P(A)=n(A)/n(Ω) chỉ áp dụng khi các kết quả sơ cấp đồng khả năng. Ba nhãn màu không chứng minh đồng khả năng; không thể mặc nhiên dùng 1/3. Ngay cả việc diện tích khác nhau cũng chưa đủ để tính xác suất nếu không biết cách kim dừng.
**Hint sau check:** Phân biệt “ngẫu nhiên” với “đều nhau trên các kết quả sơ cấp”.

### THPT-G10-CHIX-W26-01 — SGK_WRITTEN · rubric /6
**Đề:** Gieo một con xúc xắc 6 mặt cân đối và tung một đồng xu cân đối, ghi cặp kết quả (mặt đồng xu, số chấm). (a) Mô tả Ω và n(Ω). (b) Gọi A là biến cố “xuất hiện mặt ngửa và số chấm lớn hơn 4”, hãy liệt kê A và tính P(A). (c) Nêu biến cố đối Ā và tính P(Ā).
**Đáp án:** Ω={(N,k),(S,k):k=1,…,6}, n(Ω)=12; A={(N,5),(N,6)}, P(A)=2/12=1/6; Ā gồm 10 cặp còn lại, P(Ā)=5/6.
**Lời giải:** Dùng quy tắc nhân 2×6; kết quả A có đúng hai cặp, trong đó cả hai yêu cầu cùng được thỏa; biến cố đối là “sấp **hoặc** số chấm không quá 4”. Đếm 10 kết quả hoặc lấy 1−1/6.
**Rubric /6:** (1đ) đúng định dạng Ω; (1đ) n(Ω)=12 và lí do; (1đ) liệt kê đúng A; (1đ) tính P(A)=1/6; (1đ) diễn đạt biến cố đối đủ trường hợp; (1đ) P(Ā)=5/6. Có xử lí lỗi kéo theo, tránh trừ cùng một lỗi hai lần.
**Hint khi luyện tự luận:** Vẽ bảng 2 hàng, 6 cột để thấy cả A và phần bù.

## 3. Bài 27 — bảy Core/Practice và một Written Anchor

### THPT-G10-B27-C01 — SGK_CORE
**Đề:** Một túi có 3 thẻ phân biệt: hai thẻ đỏ R₁, R₂ và một thẻ xanh B. Rút lần lượt 2 thẻ **không hoàn lại**, mỗi thẻ còn trong túi có cùng khả năng được rút. Dùng sơ đồ cây hai tầng để tính xác suất hai thẻ rút ra **khác màu**.
**Đáp án:** 2/3.
**Lời giải:** Sáu chuỗi thẻ có thứ tự đồng khả năng: (R₁,R₂), (R₁,B), (R₂,R₁), (R₂,B), (B,R₁), (B,R₂). Bốn chuỗi khác màu là (R₁,B), (R₂,B), (B,R₁), (B,R₂), nên P=4/6=2/3. Cây phải có ba nhánh lần đầu và hai nhánh tiếp nối mỗi nhánh đầu.
**Hint sau check:** Khi đã rút một thẻ, chỉ còn hai thẻ; đếm hai thứ tự đỏ–xanh và xanh–đỏ.
**Review:** Đây là cây không hoàn lại và biến cố “khác màu” theo **hai thứ tự**; cần so với B27-P03, tránh clone khi biến đổi thành đề Readiness.

### THPT-G10-B27-C02 — SGK_CORE
**Đề:** Một học sinh chọn ngẫu nhiên đều một bộ gồm 1 trong 2 áo khác nhau và 1 trong 3 chiếc mũ khác nhau. Tính xác suất bộ được chọn có áo A₁ và một trong hai mũ M₁, M₂.
**Đáp án:** 1/3.
**Lời giải:** Có 2×3=6 bộ đồng khả năng; hai bộ thuận lợi (A₁,M₁), (A₁,M₂); P=2/6=1/3.
**Hint sau check:** Liệt kê đủ cặp áo–mũ, mỗi cặp xuất hiện đúng một lần.

### THPT-G10-B27-P01 — SGK_PRACTICE
**Đề:** Trong nhóm 6 học sinh gồm 4 nữ và 2 nam, chọn đều ngẫu nhiên 2 học sinh không xét thứ tự. Tính xác suất nhóm chọn có đúng 1 nữ, 1 nam.
**Đáp án:** 8/15.
**Lời giải:** Tổng số nhóm C(6,2)=15. Thuận lợi C(4,1)×C(2,1)=4×2=8. Vậy P=8/15.
**Hint sau check:** Tử số phân biệt chọn một từ mỗi nhóm, mẫu số chọn hai từ tất cả học sinh.

### THPT-G10-B27-P02 — SGK_PRACTICE
**Đề:** Có 7 thẻ phân biệt: 5 đỏ và 2 xanh, rút đồng thời đều ngẫu nhiên 3 thẻ. Tính xác suất trong 3 thẻ có **ít nhất 1 thẻ xanh**.
**Đáp án:** 5/7.
**Lời giải:** Mọi bộ 3 thẻ có xác suất như nhau: n(Ω)=C(7,3)=35. Biến cố đối “cả 3 thẻ đều đỏ” có C(5,3)=10 bộ. Vậy P=1−10/35=25/35=5/7.
**Hint sau check:** Biến cố đối chỉ có một trường hợp: cả ba màu đỏ.

### THPT-G10-B27-P03 — SGK_PRACTICE
**Đề:** Một hộp có 3 thẻ đỏ và 2 thẻ xanh, các thẻ phân biệt. Rút hai thẻ lần lượt **không hoàn lại**; mọi chuỗi hai thẻ cụ thể có khả năng như nhau. Tính xác suất thẻ thứ nhất đỏ, thứ hai xanh.
**Đáp án:** 3/10.
**Lời giải:** Mẫu gồm 5×4=20 cặp thẻ có thứ tự. Thuận lợi có 3×2=6 cặp (đỏ trước, xanh sau), P=6/20=3/10. Cũng có thể viết (3/5)×(2/4)=3/10 nếu xem theo giai đoạn.
**Hint sau check:** Sau lần rút đầu, thẻ không được bỏ lại vào hộp.

### THPT-G10-B27-P04 — SGK_CHAPTER_APPLICATION
**Đề:** Tung hai đồng xu cân đối độc lập, đồng thời gieo một xúc xắc 6 mặt cân đối; ba phép thử độc lập. Tính xác suất có **đúng một mặt ngửa** trong hai đồng xu **và** xúc xắc ra số chẵn.
**Đáp án:** 1/4.
**Lời giải:** Không gian mẫu có 2×2×6=24 bộ đồng khả năng. Có 2 cách sắp xếp một mặt ngửa trong hai đồng xu và 3 số chẵn {2,4,6}, nên 2×3=6 kết quả thuận lợi. P=6/24=1/4.
**Hint sau check:** Đếm từng nhóm điều kiện độc lập, rồi nhân số kết quả thuận lợi.

### THPT-G10-B27-P05 — SGK_PRACTICE
**Đề:** Gieo hai xúc xắc 6 mặt cân đối **phân biệt**. Một bạn đếm 21 cặp **không có thứ tự** {i,j} với 1≤i≤j≤6 và kết luận P(tổng bằng 3)=1/21. Hỏi cách tính đó có đúng không? Tính xác suất chính xác.
**Đáp án:** Cách tính sai; xác suất đúng 1/18.
**Lời giải:** Các cặp không thứ tự {i,j} không có cùng xác suất: {1,2} ứng với hai cặp có thứ tự (1,2),(2,1), nhưng {1,1} chỉ ứng với (1,1). Cần dùng Ω là 36 cặp có thứ tự đồng khả năng. Tổng bằng 3 chỉ có (1,2),(2,1); P=2/36=1/18.
**Hint sau check:** Kiểm tra xem {1,1} và {1,2} có cùng số cách xuất hiện hay không.

### THPT-G10-CHIX-W27-ANCHOR-01 — SGK_WRITTEN · `anchor_tag=true` · rubric /8
**Đề:** Một hộp có 4 thẻ đỏ và 3 thẻ xanh, cả bảy thẻ đều phân biệt. Rút đồng thời đều ngẫu nhiên 2 thẻ, không xét thứ tự. (a) Tính n(Ω). (b) Tính xác suất hai thẻ cùng màu. (c) Tính xác suất có ít nhất 1 thẻ xanh. (d) Giải thích vì sao có thể dùng tổ hợp thay vì chỉnh hợp trong bài toán.
**Đáp án:** n(Ω)=C(7,2)=21. Cùng màu: [C(4,2)+C(3,2)]/21=(6+3)/21=3/7. Ít nhất một xanh: 1−C(4,2)/C(7,2)=1−6/21=5/7. Không xét thứ tự vì rút đồng thời và các nhóm hai thẻ đồng khả năng.
**Lời giải:** Tổng bộ 2 thẻ là C(7,2). Cùng màu chia đúng hai trường hợp rời nhau, cùng đỏ hoặc cùng xanh. Biến cố đối của “ít nhất 1 xanh” là “cả hai đỏ”. Đếm số nhóm thay vì số chuỗi, nhất quán mẫu và tử.
**Rubric /8:** (1đ) n(Ω)=C(7,2); (1đ) giá trị 21; (1đ) tính C(4,2)=6; (1đ) tính C(3,2)=3 và cộng đúng trường hợp; (1đ) P(cùng màu)=3/7; (1đ) nhận ra biến cố đối là hai đỏ; (1đ) tính P(ít nhất 1 xanh)=5/7; (1đ) giải thích đúng không xét thứ tự. Không chấm lặp cùng một lỗi tính toán ở nhiều phần.
**Hint khi luyện tự luận:** Trình bày hai nhóm biến cố rời nhau ở (b) và biến cố đối ở (c).

## 4. Blueprint Readiness cuối CHƯƠNG IX (không phải item, không có khóa)

**Không tạo câu giữ kín bằng file public.** Sau khi B26/B27 D1–D4 được kiểm chứng và xác nhận outcome core, xây dựng **6 slot có đề hoàn toàn khác các item đã xem**, bảo vệ khóa phía server:

| Slot | Kĩ năng đánh giá | Độ khó dự kiến | Trạng thái |
|---|---|---|---|
| CHIX-READ-01 | Mô tả Ω và tập biến cố | Basic | BLUEPRINT_ONLY |
| CHIX-READ-02 | Đồng khả năng và công thức cổ điển | Basic | BLUEPRINT_ONLY |
| CHIX-READ-03 | Biến cố đối, xác suất | Basic | BLUEPRINT_ONLY |
| CHIX-READ-04 | Chọn nhóm bằng tổ hợp | Intermediate | BLUEPRINT_ONLY |
| CHIX-READ-05 | Sơ đồ cây và ràng buộc nhiều bước | Intermediate | BLUEPRINT_ONLY |
| CHIX-READ-06 | Phản biện mô hình xác suất | Intermediate | BLUEPRINT_ONLY |

Readiness chỉ đánh giá tại **cuối SGK Chương IX**, không dùng chính những ví dụ/Practice đã xem; điều kiện Final Submit không hint/correctness/answer leak, prior-exposure logging và anti-duplicate attempt; Topic Readiness sau này có scope độc lập. **Chưa có thuật toán, answer key hoặc student mastery cho blueprint**.

## 5. Câu hỏi reviewer và expected reconciliation

1. `ITEM_REGISTER`: kiểm tra chính xác **16 item ID**, 8 B26 + 8 B27; 2 Written trong đó **1 Anchor tag**, không nhân đôi và không tính 6 blueprint slot thành item.
2. Kiểm tra đáp án/giải thích, điều kiện đồng khả năng, có/không hoàn lại, trường hợp không giao nhau và tên không gian mẫu, đặc biệt sai sót ở B27-P05.
3. Phân loại D3/D4 Core-Support/Optional, clone theo phương pháp, độ rộng các dạng bài, hàm ý xác suất điều kiện có vượt chuẩn SGK B27 không. **Cờ chủ động:** `B27-C01` đã thay phép thử so với `B26-P02` và dùng rút thẻ không hoàn lại, nhưng cần đối chiếu mức gần với `B27-P03` (cây hai bước).
4. Xác nhận 10 outcome từ file thứ nhất liên kết item thực và đủ Core, xem câu nào cần thêm Written/Anchor hoặc đổi loại bài. Không dùng số lượng 16 để khẳng định đủ độ sâu.
5. Trả `SOURCE_RECEIPT`, `ITEM_REGISTER(16/16)`, `OUTCOME_MATRIX(10/10)`, `P0/P1/P2`, `MINIMAL_DELTA`, verdict theo B26/B27 và `ACADEMIC_CLEARANCE_FOR_RELEASE=NO` nếu chưa được Chủ dự án phê duyệt.