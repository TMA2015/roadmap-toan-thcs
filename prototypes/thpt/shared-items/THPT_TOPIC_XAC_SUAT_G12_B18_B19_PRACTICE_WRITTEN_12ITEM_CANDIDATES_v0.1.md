# THPT · Chuyên đề Xác suất — Lớp 12 B18–B19 · D3–D4 · 12 item canonical ứng viên v0.1

**PACKET_ID:** `THPT-TOPIC-PROBABILITY-G12-B18-B19-D1D4-AUTHORING-20261028-R0`  
**STATUS:** `NEW_12_CANONICAL_PRACTICE_CANDIDATES / NO_NOTEBOOKLM_VERDICT`  
**Sources:** SGK Toán 12 Tập 2 KNTT ChVI B18–B19 (G11 reviewer boundary receipt: pp.42–58); SBT Toán 12 Tập 2 **chưa có direct S1 receipt**, phải kiểm tra gốc. 5 Permanent Sources THPT v2.0 ONLY.  
**Architecture:** G12 segment belongs to independent Topic Xác suất with exactly Kiến thức/Luyện tập/Tự kiểm tra Chuyên đề; no Topic Core page. **No Topic held-out Readiness item in this bank**. Questions, worked solutions and hints here are *authoring Practice* and may become public post-review. Answer/hints may be shown in Practice only after allowed Check/Submit; never use exposed Practice as fresh Readiness.

## 1. Register — 12 unique IDs, 10 Practice + 2 Written

| Canonical item ID | Outcome chính (ứng viên) | Dạng | Level |
|---|---|---|---|
| `THPT-G12-B18-P01` | `G12-B18-CONDITIONAL_INTERPRETATION` | đọc bảng / điều kiện | Basic |
| `THPT-G12-B18-P02` | `G12-B18-CONDITIONAL_FORMULA` | tập biến cố trên xúc xắc | Basic |
| `THPT-G12-B18-P03` | `G12-B18-GENERAL_MULTIPLICATION` | rút thẻ không hoàn lại | Basic–Intermediate |
| `THPT-G12-B18-P04` | `G12-B18-INDEPENDENCE_CONNECTION` | so sánh điều kiện / độc lập | Intermediate |
| `THPT-G12-B18-P05` | `G12-B18-GENERAL_MULTIPLICATION` | giao / biến cố đối trong điều kiện | Basic–Intermediate |
| `THPT-G12-CHVI-W18-01` | `G12-B18-CONDITIONAL_FORMULA` | Written giải thích xác suất đảo | Intermediate, /6 |
| `THPT-G12-B19-P01` | `G12-B19-TOTAL_PROBABILITY` | hai nguồn sản phẩm | Basic |
| `THPT-G12-B19-P02` | `G12-B19-BAYES_REVERSE` | phân loại hộp/thẻ | Basic–Intermediate |
| `THPT-G12-B19-P03` | `G12-B19-TREE_MODEL` | xác suất đường đi / đảo chiều | Intermediate |
| `THPT-G12-B19-P04` | `G12-B19-BASE_RATE_REASONING` | kiểm tra chất lượng và tỉ lệ nền | Intermediate |
| `THPT-G12-B19-P05` | `G12-B19-TOTAL_PROBABILITY` | ba nhánh (cần reviewer phân tầng Core/Optional) | Optional candidate until S1 verified |
| `THPT-G12-CHVI-W19-ANCHOR-01` | `G12-B19-BAYES_REVERSE` | Written toàn phần/Bayes/đối | Intermediate, /8 |

**Anchor:** một nhãn cho `W19-ANCHOR-01`, không phải item thứ 13. **Outcomes:** 8 ID G12 ứng viên, không sao chép 17 outcome G10/G11 đã PASS.

## 2. Bài 18 — xác suất có điều kiện, công thức nhân tổng quát

### THPT-G12-B18-P01

**Đề:** Một nhóm 24 bạn gồm 15 bạn nữ và 9 bạn nam. Có 9 bạn nữ và 5 bạn nam thích vẽ. Chọn đều một bạn. (a) Tính xác suất bạn ấy thích vẽ **khi biết là nữ**. (b) Tính xác suất bạn ấy **là nữ khi biết thích vẽ**. Hai giá trị có bằng nhau không?

**Đáp án:** (a) \(9/15=3/5\); (b) \(9/(9+5)=9/14\); **không bằng nhau**.

**Lời giải:** Điều kiện (a) thu không gian mẫu về 15 bạn nữ, trong đó 9 bạn thích vẽ. Điều kiện (b) thu về 14 bạn thích vẽ, trong đó 9 nữ. Đây là hai mẫu số khác nhau.

**Hint Practice sau Check:** Trước khi chia, hãy nêu chính xác nhóm người được cho là đã biết.

### THPT-G12-B18-P02

**Đề:** Gieo đều xúc xắc 6 mặt. A: “ra số chẵn”; B: “ra số chia hết cho 3”. Tính \(P(A\mid B)\) và \(P(B\mid A)\). Giải thích vì sao hai giá trị có thể khác nhau.

**Đáp án:** \(A=\{2,4,6\}\), \(B=\{3,6\}\), \(A\cap B=\{6\}\), \(P(A\mid B)=1/2\), \(P(B\mid A)=1/3\).

**Lời giải:** Biết B xảy ra nghĩa là mẫu chỉ còn \(\{3,6\}\), thuận lợi cho A chỉ có 6. Biết A xảy ra nghĩa là mẫu gồm ba số chẵn, chỉ số 6 thuộc B.

**Hint Practice:** Liệt kê tập \(A\), \(B\), rồi lấy tỉ số trên từng tập điều kiện.

### THPT-G12-B18-P03

**Đề:** Hộp có 4 thẻ xanh và 3 thẻ vàng. Rút đều lần lượt hai thẻ **không hoàn lại**. Tính xác suất cả hai lượt đều rút được thẻ xanh, trình bày công thức nhân tổng quát.

**Đáp án:** \(P(\text{xanh ở lượt 1 và 2})=(4/7)(3/6)=2/7\).

**Lời giải:** Sau khi lượt một xanh, còn 3 xanh trong 6 thẻ. Vậy xác suất rút xanh ở lượt hai với điều kiện lượt một xanh là \(3/6\); nhân với \(4/7\). Không được nhân \((4/7)^2\) vì rút không hoàn lại.

**Hint Practice:** Xác suất lượt 2 thay đổi khi đã biết lượt 1 lấy đi một thẻ xanh.

### THPT-G12-B18-P04

**Đề:** Tung một đồng xu cân đối và gieo một xúc xắc cân đối độc lập. A: “đồng xu ngửa”; B: “số chấm xúc xắc chẵn”. Tính \(P(A\mid B)\), \(P(A)\) và nhận xét tính độc lập của A, B bằng phép tính, không chỉ dựa vào tên phép thử.

**Đáp án:** \(\Omega\) gồm 12 cặp đồng khả năng, B có 6 kết quả và A∩B có 3; \(P(A\mid B)=3/6=1/2=P(A)\). A, B độc lập.

**Lời giải:** Thông tin xúc xắc chẵn thu hẹp mẫu xuống 6 cặp, nhưng vẫn có một nửa số cặp đồng xu ngửa. Xác suất A không đổi so với trước khi biết B.

**Hint Practice:** Đếm các cặp có số chấm chẵn, rồi các cặp trong nhóm đó có đồng xu ngửa.

### THPT-G12-B18-P05

**Đề:** Cho hai biến cố A, B với \(P(B)=2/5\) và \(P(A\mid B)=3/4\). Tính (a) \(P(A\cap B)\); (b) \(P(\bar A\cap B)\).

**Đáp án:** (a) \((2/5)(3/4)=3/10\); (b) \(P(B)-P(A\cap B)=2/5-3/10=1/10\).

**Lời giải:** B được chia thành hai trường hợp rời nhau \(A\cap B\) và \(\bar A\cap B\). Nhân \(P(B)\) với xác suất có điều kiện cho giao A∩B, sau đó trừ khỏi P(B).

**Hint Practice:** \(B=(A\cap B)\cup(\bar A\cap B)\) với hai phần không giao nhau.

### THPT-G12-CHVI-W18-01

**Đề tự luận /6:** Một câu lạc bộ có 50 người gồm 32 nữ và 18 nam. Có 12 nữ và 6 nam đi xe đạp. Chọn đều một người. Đặt A="người đó đi xe đạp", B="người đó là nữ". (a) Tính \(P(A\cap B)\). (b) Tính \(P(A\mid B)\). (c) Tính \(P(B\mid A)\) và nêu lý do không được tráo hai xác suất có điều kiện.

**Đáp án:** (a) \(12/50=6/25\); (b) \(12/32=3/8\); (c) \(12/(12+6)=12/18=2/3\).

**Lời giải:** Trong 50 người, 12 người vừa nữ vừa đi xe đạp nên giao có xác suất \(12/50\). Biết B xảy ra, mẫu chỉ là 32 nữ nên xác suất đi xe đạp là \(12/32\). Biết A xảy ra, mẫu chỉ là 18 người đi xe đạp nên xác suất là nữ bằng \(12/18\). Hai tập điều kiện có kích thước khác nhau.

**Rubric /6:** 2đ xác định đúng giao và tính \(6/25\); 2đ viết/tính \(P(A\mid B)=3/8\) đúng mẫu số; 2đ viết/tính \(P(B\mid A)=2/3\) và giải thích không đổi điều kiện tùy tiện. Chấp nhận phân số chưa rút gọn và lời giải tương đương; xét điểm phương pháp nếu có lỗi kéo theo.

**Hint Practice sau Check:** Mỗi điều kiện tạo ra một nhóm mẫu riêng.

## 3. Bài 19 — toàn phần, Bayes và mô hình nhiều nhánh

### THPT-G12-B19-P01

**Đề:** Một xưởng lấy 70% sản phẩm từ dây chuyền A, 30% từ dây chuyền B. Xác suất một sản phẩm bị lỗi khi đến từ A là 2%, khi từ B là 6%. Tính xác suất một sản phẩm chọn đều ngẫu nhiên bị lỗi.

**Đáp án:** \(P(L)=0{,}7\cdot0{,}02+0{,}3\cdot0{,}06=0{,}032=4/125\).

**Lời giải:** Hai nguồn A/B tạo thành phân hoạch. Lỗi có thể đến từ A với xác suất \(0{,}014\) hoặc từ B với xác suất \(0{,}018\); cộng các trường hợp rời nhau được \(0{,}032\).

**Hint Practice:** Mỗi đường tới “lỗi” có xác suất bằng xác suất nguồn nhân tỉ lệ lỗi theo nguồn.

### THPT-G12-B19-P02

**Đề:** Chọn hộp X với xác suất \(2/5\), hộp Y với xác suất \(3/5\). Nếu chọn X, xác suất rút thẻ đỏ là \(1/2\); nếu chọn Y, xác suất thẻ đỏ là \(1/3\). Sau khi thấy thẻ đỏ, tính xác suất hộp đã chọn là Y.

**Đáp án:** \(P(R)=(2/5)(1/2)+(3/5)(1/3)=1/5+1/5=2/5\); \(P(Y\mid R)=[(3/5)(1/3)]/(2/5)=1/2\).

**Lời giải:** Biết R xảy ra, các trường hợp phù hợp gồm “chọn X rồi đỏ” và “chọn Y rồi đỏ”, mỗi trường hợp có xác suất \(1/5\). Vì vậy Y chiếm một nửa trong các lượt quan sát thấy thẻ đỏ.

**Hint Practice:** Mẫu số Bayes phải cộng mọi đường dẫn đến sự kiện R.

### THPT-G12-B19-P03

**Đề:** Xác suất ngày mai có mưa là \(1/4\). Khi có mưa, xác suất một chuyến xe đến muộn là \(2/5\); khi không mưa, xác suất đến muộn là \(1/10\). (a) Tính xác suất xe đến muộn. (b) Nếu xe đến muộn, tính xác suất đã có mưa.

**Đáp án:** (a) \(P(D)=(1/4)(2/5)+(3/4)(1/10)=1/10+3/40=7/40\). (b) \(P(R\mid D)=(1/10)/(7/40)=4/7\).

**Lời giải:** Tách hai nhánh mưa/không mưa, nhân xác suất dọc mỗi nhánh rồi cộng để có xác suất muộn. Sau đó đảo điều kiện qua Bayes, lấy giao “mưa và muộn” chia P(muộn).

**Hint Practice:** Xác suất muộn không đồng nghĩa với xác suất mưa khi đã muộn.

### THPT-G12-B19-P04

**Đề:** Trong một lô sản phẩm, 1% sản phẩm thực sự có lỗi. Máy kiểm tra báo “lỗi” cho 90% sản phẩm thực sự lỗi, đồng thời báo nhầm “lỗi” cho 8% sản phẩm tốt. Chọn đều một sản phẩm và biết máy báo “lỗi”. Tính xác suất sản phẩm **thực sự** bị lỗi.

**Đáp án:** \(P(D\mid+)=\dfrac{(1/100)(9/10)}{(1/100)(9/10)+(99/100)(8/100)}=\dfrac{9/1000}{441/5000}=\dfrac5{49}\).

**Lời giải:** Nhánh “có lỗi & báo lỗi” có xác suất \(0{,}01\cdot0{,}9=0{,}009\). Nhánh “tốt & báo nhầm” có xác suất \(0{,}99\cdot0{,}08=0{,}0792\). Tổng xác suất máy báo lỗi là \(0{,}0882\); xác suất thực sự lỗi trong số các sản phẩm bị báo lỗi là \(0{,}009/0{,}0882=5/49\), không phải 90%.

**Hint Practice:** Đừng bỏ qua tỉ lệ 99% hàng tốt khi lập mẫu số.

### THPT-G12-B19-P05

**Đề mở rộng — reviewer cần xác định lớp học:** Mỗi đơn hàng được phân ngẫu nhiên vào đúng một trong ba tuyến A, B, C (ba lựa chọn xung khắc và đầy đủ), với xác suất lần lượt là \(1/2,1/3,1/6\). Xác suất chậm **khi biết tuyến** lần lượt là \(1/10,1/5,3/10\). (a) Tính xác suất một đơn hàng giao chậm. (b) Nếu đơn hàng chậm, xác suất nó đi tuyến C là bao nhiêu?

**Đáp án:** (a) \(P(D)=\frac12\cdot\frac1{10}+\frac13\cdot\frac15+\frac16\cdot\frac3{10}=\frac1{20}+\frac1{15}+\frac1{20}=\frac16\). (b) \(P(C\mid D)=\frac{(1/6)(3/10)}{1/6}=\frac3{10}\).

**Lời giải:** Ba tuyến là ba nhánh xung khắc và đầy đủ. Nhân xác suất từng tuyến với xác suất chậm có điều kiện, cộng ba phần. Để đảo sang tuyến C khi biết đã chậm, lấy xác suất đồng thời "C & chậm" chia tổng xác suất chậm.

**Hint Practice:** Vẽ cây ba nhánh trước khi tính; nhãn \(1/2,1/3,1/6\) là xác suất chọn tuyến, không phải xác suất chậm.

**Curriculum boundary:** Ba nhánh chỉ được xếp **bắt buộc SGK Core** nếu reviewer xác nhận thuộc SGK/SBT S1 B19. Nếu không, gắn \`SUPPORT_EXTENSION_CANDIDATE\` ở tầng Practice, không dùng làm nguồn bằng chứng năng lực Core bắt buộc.

### THPT-G12-CHVI-W19-ANCHOR-01

**Đề tự luận /8:** Một đơn vị chuyển phát chọn dịch vụ A với xác suất \(2/5\), dịch vụ B với xác suất \(3/5\). Tỉ lệ giao đúng hạn tương ứng là \(3/4\) và \(2/3\). (a) Tính xác suất ngẫu nhiên một gói hàng giao đúng hạn. (b) Nếu biết gói giao đúng hạn, tính xác suất nó được gửi qua A. (c) Nếu gói **giao trễ**, tính xác suất nó được gửi qua B. (d) Giải thích vì sao không thể trực tiếp lấy \(P(\text{đúng hạn}\mid A)\) làm đáp án câu (b).

**Đáp án:** (a) \(P(T)=(2/5)(3/4)+(3/5)(2/3)=3/10+2/5=7/10\). (b) \(P(A\mid T)=(3/10)/(7/10)=3/7\). (c) \(P(B\mid \bar T)=[(3/5)(1/3)]/(3/10)=2/3\). (d) Hai điều kiện đảo chiều, mẫu số khác nhau.

**Lời giải:** Tách hai dịch vụ A/B. Xác suất gói đúng hạn trên nhánh A là 3/10, trên nhánh B là 2/5. Tổng 7/10. Sau khi biết đúng hạn, xác suất gói từ A bằng tỉ số của nhánh “A và đúng hạn” trên tất cả gói đúng hạn là 3/7. Với gói trễ, tỉ lệ trễ của B bằng \(1/3\), nên xác suất gói “B và trễ” bằng \(1/5\); tổng trễ bằng \(3/10\); xác suất thuộc B khi đã trễ bằng \(2/3\). Câu (d): \(P(T\mid A)\) sử dụng mẫu số A, còn \(P(A\mid T)\) sử dụng mẫu số T.

**Rubric /8:** 2đ biểu diễn đúng hai nhánh và xác suất toàn phần \(7/10\); 2đ viết đúng tỉ số Bayes và tính \(3/7\); 2đ xác định nhánh trễ B, tổng xác suất trễ và tính \(2/3\); 2đ giải thích rõ chiều xác suất có điều kiện, các nhóm mẫu khác nhau. Cho điểm từng bước hợp lý, tránh nhân đôi lỗi kéo theo.

**Hint Practice sau Check:** Mỗi yêu cầu đảo chiều phải làm rõ: "đã biết điều gì xảy ra?".

**Anchor semantics:** Một canonical Written ID chứa \`anchor_tag=true\`, không tạo bản copy riêng theo SGK/Topic.

## 4. Review reconciliation, academic and security gates

- **ID reconciliation:** đúng 12 item ID khác nhau; 5 B18 short Practice + 1 Written B18; 5 B19 short Practice + 1 Written Anchor B19. 12 **chưa** thẩm định độc lập, không kế thừa PASS G10/G11.
- **Math check:** nguồn tác giả kiểm tra bằng số học phân số chính xác; các kết quả trên là đề xuất **NOT_ACADEMIC_PASS**.
- **Near-clone/high-risk review:** B18-P01 và W18-01 cùng dạng bảng giới tính nhưng khác số liệu và bối cảnh, có nguy cơ gần giống EX-G12-B18-01; B18-P03 tương tự kiểu rút không hoàn lại của EX-G12-B18-02. B19-P01 cùng cấu trúc hai nguồn lỗi với EX-G12-B19-01, B19-P02 gần EX-G12-B19-02 mô hình hai hộp, B19-P03 và W19-ANCHOR-01 cũng dùng cây hai nhánh. Reviewer phải đánh giá **độ đa dạng tư duy thật**, không chỉ chấp nhận thay số; nếu cần yêu cầu HOLD từng ID và DELTA_C cho đề mới.
- **B19-P05:** mô hình 3 nhánh có thể vượt Core nếu SGK chỉ cung cấp 2 nhánh. Yêu cầu xác nhận S1 và phân tầng chặt trước khi dùng làm bằng chứng Core.
- **SGK/Topic role:** chưa có verdict chính thức \`SGK_CORE\` cho bất cứ item này; khi một câu phù hợp Core SGK, chỉ gắn role/placement bên cạnh \`TOPIC_PRACTICE\` theo **cùng canonical ID/answer/history**, không duplicate.
- **Final Submit:** Không dùng bất kỳ 12 câu luyện tập có nguồn công khai này làm Topic Readiness giữ kín. Topic Readiness 10–12 là một assessment **khác** và chưa được biên soạn. Không gợi ý, Tutor, kết quả, khóa trước Final Submit trong assessment; Practice có lời giải/gợi ý sau Check theo luồng quy định.

**Review fields required:** SOURCE_RECEIPT G12 SGK/SBT chính xác, \`OUTCOME_REGISTER=8\`, \`ITEM_REGISTER=12\`, \`WRITTEN=2\`, \`ANCHOR_TAG=1\`, per-ID Math/Key/Scope/Clone/Rubric, P0/P1/P2, MINIMAL_DELTA, \`ACADEMIC_OVERALL_G12_D3D4\`, \`ACADEMIC_CLEARANCE_FOR_RELEASE=NO\`.