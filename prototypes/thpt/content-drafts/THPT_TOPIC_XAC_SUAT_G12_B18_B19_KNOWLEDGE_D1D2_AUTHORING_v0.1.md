# THPT · Chuyên đề trục dọc Xác suất — Phân đoạn lớp 12 (B18–B19) · D1–D2 · v0.1

**PACKET_ID:** `THPT-TOPIC-PROBABILITY-G12-B18-B19-D1D4-AUTHORING-20261028-R0`  
**STATUS:** `NEW_G12_AUTHORING_CANDIDATE / NOTEBOOKLM_NOT_REVIEWED / NO_MERGE_DEPLOY`  
**Kiến trúc:** Chuyên đề độc lập có đúng **Kiến thức / Luyện tập / Tự kiểm tra Chuyên đề**; KHÔNG có trang Topic Core.  
**Nguồn hiện đã có receipt từ review G11:** SGK Toán 12 Tập 2 KNTT **Chương VI, B18–B19, trang in 42–58** (chỉ receipt kiểm tra ranh giới chương trình, chưa có thẩm định G12 D1–D4).  
**SOURCE_RECEIPT_SBT_G12:** `PENDING_ORIGINAL_S1`. Chưa xác nhận trang in SBT hoặc trang riêng từng bài; NotebookLM phải đọc bản gốc và trả receipt, không suy đoán.  
**Permanent Sources:** `01-05_THPT_PERMANENT_v2.0_ONLY`.  
**Bảo lưu:** G10 Foundation PASS (5 module/10 outcome/16 item placement), G11 B28–B30 PASS (4 module/3 ví dụ/7 outcome/10 item). Không chuyển PASS hai lớp trước thành PASS G12.

## A. Outcome ứng viên lớp 12 — 8 ID, chờ đối chiếu SGK/SBT gốc

| Outcome ID ứng viên | Bài | Điều học sinh cần nắm được | Kiến thức | Ví dụ hỗ trợ |
|---|---|---|---|---|
| `G12-B18-CONDITIONAL_INTERPRETATION` | B18 | Hiểu "biết B xảy ra" làm thu hẹp không gian xét | KT-G12-01 | EX-G12-B18-01 |
| `G12-B18-CONDITIONAL_FORMULA` | B18 | Tính `P(A\|B)` đúng điều kiện `P(B)>0` | KT-G12-01 | EX-G12-B18-01 |
| `G12-B18-GENERAL_MULTIPLICATION` | B18 | Áp dụng quy tắc nhân tổng quát, phân biệt với độc lập | KT-G12-02 | EX-G12-B18-02 |
| `G12-B18-INDEPENDENCE_CONNECTION` | B18 | So sánh điều kiện độc lập với xác suất có điều kiện | KT-G12-02 | EX-G12-B18-02 |
| `G12-B19-TOTAL_PROBABILITY` | B19 | Tính xác suất qua các nhánh/phân hoạch hợp lệ | KT-G12-03 | EX-G12-B19-01 |
| `G12-B19-BAYES_REVERSE` | B19 | Suy xác suất nguyên nhân khi biết kết quả | KT-G12-04 | EX-G12-B19-02 |
| `G12-B19-TREE_MODEL` | B19 | Phân biệt xác suất có điều kiện, xác suất đồng thời và xác suất đảo | KT-G12-03/04 | EX-G12-B19-01/02 |
| `G12-B19-BASE_RATE_REASONING` | B19 | Không nhầm xác suất đảo và xác suất thuận; xử lý tỉ lệ nền | KT-G12-04 | EX-G12-B19-02 |

**Review scope:** Tất cả ID là đề xuất mới cho riêng G12, không nhầm với 10 outcome G10 và 7 outcome G11 đã PASS. Nếu "phân hoạch từ ba nhóm" hoặc xác suất căn bản ở ví dụ lệch mức Core S1, reviewer phân tầng thay vì mặc định FULL.

## B. KIẾN THỨC — 4 mô-đun tự học, không đòi mở nhánh SGK

### KT-G12-01 — Xác suất có điều kiện và không gian mẫu thu hẹp

Khi đã biết biến cố \(B\) xảy ra, ta chỉ xét những kết quả nằm trong \(B\). Xác suất có điều kiện của \(A\) khi biết \(B\) được viết \(P(A\mid B)\) và được định nghĩa bởi
\[
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(B)>0.
\]
Nếu các kết quả sơ cấp ban đầu đồng khả năng, có thể hình dung việc đếm chỉ trên nhóm \(B\): \(P(A\mid B)=n(A\cap B)/n(B)\), **khi các kết quả bên trong B cũng đồng khả năng**. Không được đổi \(P(A\mid B)\) thành \(P(B\mid A)\); hai đại lượng có ý nghĩa khác nhau.

**Giải thích dễ hiểu:** Trong một lớp, xác suất "đi xe đạp trong số học sinh nữ" có mẫu số là số học sinh nữ, không phải cả lớp; xác suất "là nữ trong số học sinh đi xe đạp" lại dùng mẫu số là số học sinh đi xe đạp.

**Điều kiện bắt buộc:** Nếu \(P(B)=0\), công thức trên không xác định. Không suy ra xác suất có điều kiện của một biến cố không thể bằng 0.

### KT-G12-02 — Công thức nhân tổng quát và quan hệ với độc lập

Từ định nghĩa có điều kiện,
\[
P(A\cap B)=P(B)P(A\mid B)\quad\text{khi }P(B)>0.
\]
Tương đương \(P(A\cap B)=P(A)P(B\mid A)\) khi \(P(A)>0\). Với **hai biến cố độc lập** và điều kiện tương ứng để xác suất có điều kiện được xác định, \(P(A\mid B)=P(A)\), nên công thức nhân rút về \(P(A\cap B)=P(A)P(B)\) đã học ở lớp 11.

**Ví dụ bằng lời:** Rút lần lượt không hoàn lại sẽ làm số lượng vật ở lượt sau thay đổi. Không được nhân hai xác suất riêng như thể hai lượt độc lập. Muốn tính xác suất "lượt 1 màu đỏ và lượt 2 màu xanh", dùng xác suất đỏ ở lượt 1 nhân xác suất xanh ở lượt 2 **khi đã biết lượt 1 đỏ**.

**Chống nhầm lẫn:** Hai biến cố xung khắc có xác suất dương thì không độc lập. Sự độc lập không được kết luận chỉ vì hai biến cố được phát biểu bằng hai câu khác nhau.

### KT-G12-03 — Công thức xác suất toàn phần

Giả sử \(B\) và \(\bar B\) tạo thành hai nhánh đầy đủ, không giao nhau, với \(0<P(B)<1\). Với biến cố \(A\),
\[
P(A)=P(B)P(A\mid B)+P(\bar B)P(A\mid\bar B).
\]
Ta cộng các **xác suất đồng thời trên các nhánh**, chứ không cộng trực tiếp \(P(A\mid B)\) và \(P(A\mid\bar B)\).

**Cách làm bài:** (1) xác định đúng các nhánh \(B,\bar B\); (2) đọc xác suất chọn nhánh; (3) đọc xác suất A khi biết từng nhánh; (4) nhân trên mỗi nhánh; (5) cộng các nhánh rời nhau.

**Mở rộng cần phân tầng theo nguồn:** Với nhiều nhánh \(B_1,\ldots,B_n\) tạo thành phân hoạch của \(\Omega\) và các nhánh có xác suất dương, \(P(A)=\sum_i P(B_i)P(A\mid B_i)\). Nếu SGK/SBT chỉ yêu cầu hai nhánh ở Core, để mô hình nhiều nhánh ở phần luyện tập nâng cao, không tự gắn bắt buộc.

### KT-G12-04 — Bayes, xác suất đảo và tỉ lệ nền

Từ công thức nhân và xác suất toàn phần, với \(P(A)>0\):
\[
P(B\mid A)=
\frac{P(B)P(A\mid B)}
     {P(B)P(A\mid B)+P(\bar B)P(A\mid\bar B)}.
\]
Đây là **cách đảo chiều câu hỏi**: đã thấy kết quả \(A\), muốn biết khả năng nguyên nhân \(B\). Không được khẳng định \(P(B\mid A)=P(A\mid B)\).

**Tỉ lệ nền:** Một nhánh có tỉ lệ xuất hiện ban đầu rất nhỏ thì, dù kết quả A khá hay gặp trong nhánh đó, xác suất "thuộc nhánh đó khi đã thấy A" vẫn phụ thuộc xác suất của tất cả nhánh khác. Khi tính Bayes, phải tính **mẫu số toàn bộ các đường đi đến A**.

**Tự kiểm tra lý luận:** Các nhánh thực sự phủ hết trường hợp chưa? Xác suất có điều kiện nào cần mẫu số dương? Nếu câu hỏi đổi từ \(P(A\mid B)\) sang \(P(B\mid A)\), đã nhân đúng tỉ lệ nền chưa? Kết quả có thuộc \([0,1]\) và có ý nghĩa theo tình huống không?

## C. D2 — Bốn ví dụ giải mẫu nguyên bản, chưa thẩm định độc lập

### EX-G12-B18-01 — Hai xác suất có điều kiện không đối xứng

Một nhóm 30 học sinh có 18 nữ và 12 nam; trong nhóm có 10 nữ và 3 nam đi xe buýt. Gọi A="đi xe buýt", B="là nữ". Tính \(P(A\mid B)\) và \(P(B\mid A)\).

**Giải:** \(P(A\mid B)=10/18=5/9\). Tổng số học sinh đi xe buýt là \(10+3=13\), nên \(P(B\mid A)=10/13\). Hai xác suất khác nhau vì khi đổi điều kiện, mẫu số thay đổi. Ghi rõ mẫu số của từng câu.

### EX-G12-B18-02 — Rút không hoàn lại và công thức nhân tổng quát

Hộp có 3 thẻ đỏ và 2 thẻ xanh, rút hai thẻ **liên tiếp không hoàn lại**, mỗi lượt chọn đều. A: "lượt 1 đỏ"; B: "lượt 2 xanh". Tính \(P(A\cap B)\).

**Giải:** \(P(A)=3/5\), \(P(B\mid A)=2/4=1/2\). Vậy \(P(A\cap B)=P(A)P(B\mid A)=(3/5)(1/2)=3/10\). Dù xác suất xanh ở lượt đầu là \(2/5\), không được tự nhân \(3/5\cdot2/5\) như hai lượt độc lập.

### EX-G12-B19-01 — Xác suất toàn phần theo hai nhóm

Một dây chuyền lấy 60% sản phẩm từ nhóm A, 40% từ nhóm B. Tỉ lệ lỗi tương ứng là 5% và 10%. Tính xác suất sản phẩm chọn ngẫu nhiên bị lỗi.

**Giải:** Gọi L="bị lỗi", \(P(A)=3/5\), \(P(B)=2/5\), \(P(L\mid A)=1/20\), \(P(L\mid B)=1/10\). Khi đó \(P(L)=(3/5)(1/20)+(2/5)(1/10)=3/100+4/100=7/100\). Sự kiện L có thể xảy ra từ hai nhóm, phải cộng **hai giao**.

### EX-G12-B19-02 — Bayes bằng cách đảo kết quả quan sát

Chọn hộp X với xác suất \(1/3\), hộp Y với xác suất \(2/3\). Hộp X có 2 thẻ đỏ và 3 thẻ xanh, hộp Y có 3 thẻ đỏ và 1 thẻ xanh. Rút một thẻ từ hộp đã chọn, biết thẻ đỏ. Tính xác suất hộp ban đầu là Y.

**Giải:** \(P(R\mid X)=2/5\), \(P(R\mid Y)=3/4\). Xác suất rút thẻ đỏ:
\[
P(R)=\frac13\cdot\frac25+\frac23\cdot\frac34
=\frac{2}{15}+\frac12=\frac{19}{30}.
\]
Từ Bayes, \(P(Y\mid R)=(\frac23\cdot\frac34)/(\frac{19}{30})=(1/2)/(19/30)=15/19\). Không trả nhầm \(3/4\), đó là xác suất đỏ khi đã biết Y, không phải Y khi đã thấy đỏ.

## D. Cấu trúc học Chuyên đề 10–12

- **Nền G10 đã PASS:** phép thử, không gian mẫu, định nghĩa cổ điển, tổ hợp và biến cố đối — 5 mô-đun.
- **Tầng G11 đã PASS:** hợp/giao, xung khắc và độc lập; quy tắc cộng; nhân cho biến cố độc lập — 4 mô-đun, 3 ví dụ.
- **Tầng G12 đang xin review:** điều kiện; nhân tổng quát; toàn phần; Bayes — 4 mô-đun, 4 ví dụ, 8 outcome ứng viên.
- Trang Kiến thức phải đủ nội dung để một học sinh bắt đầu trực tiếp từ Chuyên đề vẫn hiểu được tiền đề, không phải sang SGK. Giữ Golden UI R4 với tab Kiến thức tối đa 2 tầng, riêng cấu trúc UI do cuộc trò chuyện phát hành phụ trách.
- **Luyện tập:** ngân hàng 12 candidate item G12 tách riêng được gửi ở file thứ hai, không nhân bản các item G10/G11. Vai trò SGK Core và Topic Practice cơ bản chỉ có thể dùng chung **cùng ID** qua mapping.
- **Tự kiểm tra Chuyên đề:** CHƯA tạo. Không lấy 6 item `THPT-G10-CHIX-RD01..RD06` của SGK làm Topic Readiness, không lấy câu Practice đã nhìn thấy để kiểm tra độc lập. Đáp án bảo vệ ngoài public repository, không hint/đúng-sai/đáp án trước Final Submit.
- Không phát hành, không ghi mastery, không chỉnh sửa giao diện, không tự cấp PASS toàn Chuyên đề từ bản nháp này.

## E. Reviewer questions and expected fields

1. Xác minh trực tiếp **SGK/SBT Toán 12 Tập 2 KNTT B18–B19**, nhất là **SBT các trang in chính xác** và phân tầng hai-nhánh / nhiều-nhánh, định nghĩa xác suất có điều kiện, công thức nhân tổng quát, toàn phần, Bayes.
2. Kiểm tra bốn KT-G12-01..04 và bốn EX-G12-B18-01/02, EX-G12-B19-01/02 về chính xác, độ sâu tự học độc lập và clone so với SGK/SBT.
3. Xác định 8 outcome có đủ/đúng phạm vi Core G12 và liệu phải thêm/bớt/đổi ranh giới skill ở từng bài. Đối chiếu với 12 item trong file thứ hai.
4. Trả `SOURCE_RECEIPT_G12_SGK`, `SOURCE_RECEIPT_G12_SBT`, `GRADE_SCOPE_RECONCILIATION`, `KNOWLEDGE_REGISTER=4`, `EXAMPLE_REGISTER=4`, `OUTCOME_ALIGNMENT=8`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G12_D1D4` và `ACADEMIC_CLEARANCE_FOR_RELEASE=NO` khi chưa có phê duyệt.
5. Giữ nguyên hai verdict G10/G11; không suy ra Topic Readiness PASS từ những lời giải/Practice đang công khai trong bộ Temp hoặc GitHub.