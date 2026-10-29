# Toán 10 KNTT · Chương VII–VIII — Bộ thẻ D6 hỗ trợ tự sửa sai v0.1

**PACKET_ID:** THPT-G10-CHVII-VIII-D6-REMEDIATION-R01
**STATUS:** CANDIDATE_DELTA_C_ACADEMIC_MATERIAL · NOT_REVIEWED · NO_ACADEMIC_PASS · NO_RELEASE
**LEARNING_PATH:** SGK_CHAPTER / PUBLIC_FORMATIVE_ONLY; TOPIC route riêng chưa được review.
**NGÀY:** 2026-10-29
**Đơn vị đóng gói:** 14 HELP_ID hướng dẫn (không phải 14 câu hỏi mới), bổ sung cho 7 bài; tham chiếu đúng item_id canonical hiện có, không tạo bank, đáp án hay rubric mới.
**Ranh giới:** Đây là nội dung mới thuộc D6 (Help/Remediation). Chưa ghép vào trang học sinh. Không đổi 57 stems/answers/solutions/hints, 7 Written/rubric, private Readiness hay student history. Chưa có Academic PASS; cần review phần D6 mới theo snapshot.

## A. Nguồn, snapshot, chứng cứ

- S1: SGK Toán 10 KNTT tập 2, ChVII tr.29–58 và ChVIII tr.59–79; SBT KNTT tập 2 tương ứng tr.27–49 và tr.50–59 (trang in được ghi theo receipt review hiện có). Việc đối chiếu trực tiếp từng trang cho 14 thẻ là nhiệm vụ reviewer, không tuyên bố đã đối chiếu trực tiếp S1 trong đợt này.
- 5 Permanent Sources NotebookLM THPT v2.0 đang có hiệu lực. Bài học và item nguồn từng nhận verdict D1–D5 giới hạn snapshot; việc biên soạn thẻ D6 mới KHÔNG nhận thừa PASS.
- GitHub learner snapshots: ChVII Draft PR #620 @ 51b0fc0cf1f8bb79a7d0280380ac83b1850658e1; ChVIII Draft PR #621 @ 5d14ee0b027d276a3b1824af8a0ff15f72a5acfe. Các commit này là nguồn thực khi soạn, KHÔNG phải commit chứa thẻ D6 mới.
- Canonical source JS: ChVII blob 2b191d7abba7a4f5bd79d4c122673cd53a45495b (32 item); ChVIII blob 2ae62fada28913ec336b3507684408a1e05a3232 (25 item). 57/57 có hint + solution; không vì thế suy D6 PASS.
- Shared Written: ChVII blob 89e405b3a5719a877e90ff0c85823ad5e603dca5 (4 ID), ChVIII blob e53ab99e94a0fad38f277256cb7dbe4e6b40928b (3 ID). Anchor là nhãn của Written, không là ngân hàng riêng.
- Reviewed D5 SVG và private Chapter Readiness giữ nguyên các receipt riêng. ChVII RD02 retired, không được tái dùng; Chapter VII/VIII Readiness vẫn inactive.
- D6 ở tài liệu này nghĩa là **Academic Depth D6 = help/remediation**, không phải bộ kiểm thử browser/device cũng từng mang ký hiệu D6.

## B. Mục đích sản phẩm và cách sử dụng

Mỗi thẻ tương ứng một điểm vướng có giá trị; học sinh học độc lập ngay trong nhánh SGK. Hiển thị dưới dạng phần hỗ trợ mở theo yêu cầu, không ép đọc, không sinh điểm mới. Trình tự: **Nhận ra lỗi → Hiểu điều kiện đúng → Tự sửa từng bước → Quay lại item đã có**. Phần liên kết chỉ dẫn tới bài học đã tồn tại nếu QA xác nhận đường dẫn thực tế; không tự tạo route, không tự chèn câu từ bank sang Topic.

## C. Nội dung thực 14 thẻ D6 — CANDIDATE cần NotebookLM review

### Bài 19 — Phương trình đường thẳng

#### D6-G10-B19-01 · Không phân biệt pháp tuyến với chỉ phương

- **Dấu hiệu cần hỗ trợ:** Từ ax+by+c=0, lấy (a;b) làm vectơ chỉ phương hoặc dùng (0;0).
- **Bản chất / kiểm tra toán học:** (a;b) là pháp tuyến khác vectơ không; một chỉ phương có thể lấy (-b;a). Kiểm tra tích vô hướng bằng 0 và cả hai vectơ phải khác (0;0).
- **Tự sửa theo từng bước:** Đọc lại ý nghĩa vuông góc/song song ở B19 §1; đặt n=(a;b), u=(-b;a), tự xác minh n·u=0 trước khi lập phương trình.
- **Cần biết trước:** Vectơ tọa độ; tích vô hướng; B19 §1
- **Quay lại đúng item canonical:** THPT-G10-B19-C01, THPT-G10-B19-P05
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).

#### D6-G10-B19-02 · Viết đường qua hai điểm nhưng thiếu điều kiện

- **Dấu hiệu cần hỗ trợ:** Tự đặt vectơ AB làm pháp tuyến; bỏ qua trường hợp A=B; viết x,y không thỏa hai điểm.
- **Bản chất / kiểm tra toán học:** Chỉ khi A≠B, AB mới là vectơ chỉ phương khác 0. Với u=(u1;u2), có thể dùng n=(-u2;u1), rồi thế cả A và B vào phương trình để kiểm tra.
- **Tự sửa theo từng bước:** Ôn B19 §2–3; tự nêu A≠B, tìm AB, xoay vectơ 90°, viết n·(XM−XA)=0, thử lại hai đầu mút.
- **Cần biết trước:** Tọa độ hiệu hai điểm; điều kiện vectơ khác 0; B19 §2–3
- **Quay lại đúng item canonical:** THPT-G10-B19-P02, THPT-G10-B19-P06, THPT-G10-CHVII-W19-01
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).


### Bài 20 — Vị trí, góc và khoảng cách

#### D6-G10-B20-01 · Nhầm song song với trùng đường

- **Dấu hiệu cần hỗ trợ:** Định thức a1b2−a2b1=0 rồi kết luận hai đường chắc chắn trùng nhau.
- **Bản chất / kiểm tra toán học:** Định thức bằng 0 chỉ nói các pháp tuyến cùng phương. Muốn trùng nhau phải tồn tại λ≠0 để (a2,b2,c2)=λ(a1,b1,c1); nếu không, chúng song song phân biệt.
- **Tự sửa theo từng bước:** Quay lại B19 §2 (phương trình tổng quát) và B20 §1; so sánh cặp (a,b) trước, sau đó kiểm đủ hằng số c; không chia hệ số bằng 0.
- **Cần biết trước:** B19 §2; tỉ lệ bộ ba hệ số; B20 §1
- **Quay lại đúng item canonical:** THPT-G10-B20-C01, THPT-G10-B20-P05
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).

#### D6-G10-B20-02 · Góc và khoảng cách âm hoặc thiếu chuẩn hóa

- **Dấu hiệu cần hỗ trợ:** Bỏ trị tuyệt đối trong công thức khoảng cách/góc nhỏ hoặc quên căn a²+b².
- **Bản chất / kiểm tra toán học:** Khoảng cách dùng |axM+byM+c|/√(a²+b²)≥0. Góc nhỏ giữa hai đường dùng |n1·n2|/(||n1||||n2||), nên cosφ∈[0,1] khi 0°≤φ≤90°.
- **Tự sửa theo từng bước:** Ôn B20 §2; xác nhận (a,b)≠(0,0), xác định tử là khoảng cách có dấu rồi lấy giá trị tuyệt đối; kiểm miền của kết quả.
- **Cần biết trước:** Tích vô hướng, chuẩn vectơ; B20 §2
- **Quay lại đúng item canonical:** THPT-G10-B20-P02, THPT-G10-B20-P03, THPT-G10-B20-P06, THPT-G10-CHVII-W20-01
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).


### Bài 21 — Đường tròn

#### D6-G10-B21-01 · R² không dương nhưng vẫn gọi là đường tròn

- **Dấu hiệu cần hỗ trợ:** Sau khi hoàn thành bình phương, kết luận có đường tròn cho mọi giá trị R².
- **Bản chất / kiểm tra toán học:** R²>0 mới cho đường tròn thực có bán kính dương; R²=0 chỉ một điểm, R²<0 không có điểm thực.
- **Tự sửa theo từng bước:** Ôn B21 §1; đưa về (x−a)²+(y−b)²=R², kiểm dấu R² trước khi khai căn và phát biểu tâm/bán kính.
- **Cần biết trước:** Hằng đẳng thức bình phương; bất đẳng thức bình phương không âm; B21 §1
- **Quay lại đúng item canonical:** THPT-G10-B21-C02, THPT-G10-B21-P05
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).

#### D6-G10-B21-02 · Lập tiếp tuyến khi chưa kiểm tra tiếp điểm

- **Dấu hiệu cần hỗ trợ:** Dùng ngay IM làm pháp tuyến dù M không thuộc đường tròn; hoặc nhầm đường cắt với tiếp xúc.
- **Bản chất / kiểm tra toán học:** Tiếp tuyến tại M chỉ xác định theo công thức này khi M∈(C), nghĩa là IM²=R². Với đường d bất kỳ, tiếp xúc khi d(I,d)=R>0; có thể tìm tiếp điểm qua đường vuông góc từ tâm.
- **Tự sửa theo từng bước:** Ôn B21 §2 và B20 §2; xác minh M∈(C), tính IM, dùng IM·(XM)=0 và kiểm ngược d(I,d)=R.
- **Cần biết trước:** B19 pháp tuyến; B20 khoảng cách điểm–đường; B21 §2
- **Quay lại đúng item canonical:** THPT-G10-B21-P02, THPT-G10-B21-P03, THPT-G10-CHVII-W21-ANCHOR-01
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).


### Bài 22 — Ba đường conic

#### D6-G10-B22-01 · Dùng nhầm c² của elip và hypebol

- **Dấu hiệu cần hỗ trợ:** Lấy c²=a²+b² cho elip hoặc a²−b² cho hypebol, hay đặt trục sai khi đọc dạng chuẩn.
- **Bản chất / kiểm tra toán học:** Trong đúng hai dạng chính tắc đang học (trục chính Ox): elip x²/a²+y²/b²=1 có a>b>0 và c²=a²−b²; hypebol x²/a²−y²/b²=1 có a,b>0 và c²=a²+b².
- **Tự sửa theo từng bước:** Ôn B22 §1–2; nhận dạng dấu trước y², chỉ sau đó lấy a²,b² và tính c²; đối chiếu điều kiện c<a của elip, c>a của hypebol.
- **Cần biết trước:** Phương trình chính tắc; phân số dương; B22 §1–2
- **Quay lại đúng item canonical:** THPT-G10-B22-C02, THPT-G10-B22-P01, THPT-G10-B22-P02, THPT-G10-CHVII-W22-01
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).

#### D6-G10-B22-02 · Nhầm tham số p với tọa độ tiêu điểm parabol

- **Dấu hiệu cần hỗ trợ:** Với y²=2px, ghi F(p;0) thay vì F(p/2;0) hoặc lấy đường chuẩn x=−p.
- **Bản chất / kiểm tra toán học:** Theo đúng quy ước B22 §3: p>0, F(p/2;0), đường chuẩn x=−p/2. Khi so hệ số y²=Kx, phải đặt 2p=K, không đặt p=K.
- **Tự sửa theo từng bước:** Ôn B22 §3; viết 2p trước khi tính p, xác minh khoảng cách từ một điểm trên parabol đến F bằng khoảng cách tới đường chuẩn.
- **Cần biết trước:** Khoảng cách điểm–đường (B20); căn bậc hai; B22 §3
- **Quay lại đúng item canonical:** THPT-G10-B22-P03, THPT-G10-B22-P04, THPT-G10-B22-P06
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).


### Bài 23 — Quy tắc đếm

#### D6-G10-B23-01 · Nhầm quy tắc cộng với nhân

- **Dấu hiệu cần hỗ trợ:** Thấy chữ 'hoặc' là cộng, chữ 'và' là nhân mà không kiểm tra cấu trúc lựa chọn.
- **Bản chất / kiểm tra toán học:** Cộng khi đếm các trường hợp loại trừ nhau; nhân khi mỗi phương án gồm các bước liên tiếp và số lựa chọn theo bước là phù hợp. Nếu các nhóm giao nhau, cần loại trùng; nếu nhánh khác số lựa chọn, tính từng nhánh rồi cộng.
- **Tự sửa theo từng bước:** Ôn B23 §1–2; vẽ sơ đồ một kết quả hoàn chỉnh, hỏi 'một kết quả chọn một nhánh hay đi qua nhiều bước?'; kiểm các nhánh có đếm trùng không.
- **Cần biết trước:** Tập hợp rời nhau; nguyên lý nhân qua các bước; B23 §1
- **Quay lại đúng item canonical:** THPT-G10-B23-C01, THPT-G10-B23-C02, THPT-G10-B23-P06, THPT-G10-CHVIII-W23-01
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).

#### D6-G10-B23-02 · Đếm sai khi có chữ số 0 hoặc phụ thuộc điều kiện

- **Dấu hiệu cần hỗ trợ:** Cho chữ số đầu bằng 0; hoặc nhân số lựa chọn cố định khi số cách ở bước sau phụ thuộc bước trước.
- **Bản chất / kiểm tra toán học:** Với số tự nhiên có số chữ số xác định, chữ số đầu khác 0. Nếu nhánh đầu làm thay đổi số cách sau, phải tách trường hợp rời nhau rồi cộng các tích; ghi rõ có/không lặp.
- **Tự sửa theo từng bước:** Ôn ví dụ đếm chữ số trong B23 §2; chọn biến tách trường hợp (ví dụ chữ số cuối bằng 0 hay khác 0), lập bảng số lựa chọn từng vị trí, soát hai nhánh không giao nhau.
- **Cần biết trước:** Điều kiện chữ số đầu; quy tắc nhân và cộng; B23 §2
- **Quay lại đúng item canonical:** THPT-G10-B23-P01, THPT-G10-B23-P05
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).


### Bài 24 — Hoán vị, chỉnh hợp, tổ hợp

#### D6-G10-B24-01 · Chọn nhóm không phân vai nhưng dùng chỉnh hợp

- **Dấu hiệu cần hỗ trợ:** Đổi thứ tự các thành viên một nhóm rồi đếm như nhóm mới, hoặc bỏ vai trò phân biệt trong phân công.
- **Bản chất / kiểm tra toán học:** Tổ hợp chọn nhóm không xét thứ tự, chỉnh hợp chọn và gán k vị trí phân biệt; với n đối tượng phân biệt và 0≤k≤n có A(n,k)=C(n,k)·k!.
- **Tự sửa theo từng bước:** Ôn B24 §1; xét đổi chỗ hai người có tạo kết quả mới không, rồi quyết định C hay A; nếu chọn nhóm rồi giao vai, đếm giao vai theo đúng số chức danh.
- **Cần biết trước:** B23 quy tắc nhân; giai thừa; B24 §1
- **Quay lại đúng item canonical:** THPT-G10-B24-C02, THPT-G10-B24-P01, THPT-G10-B24-P02, THPT-G10-CHVIII-W24-ANCHOR-01
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).

#### D6-G10-B24-02 · Điều kiện kề nhau và ràng buộc nhóm

- **Dấu hiệu cần hỗ trợ:** Gộp A,B thành một khối nhưng quên thứ tự trong khối; hoặc dùng phép cộng cho các nhóm giao nhau.
- **Bản chất / kiểm tra toán học:** Khi A,B phải cạnh nhau, xem hai người là một khối để sắp xếp cùng các đối tượng khác, rồi nhân 2! thứ tự bên trong khối; điều kiện ít nhất một có thể đếm bằng phần bù nếu vũ trụ phù hợp.
- **Tự sửa theo từng bước:** Ôn B24 §2; kiểm xem mỗi hoán vị thỏa điều kiện được đếm đúng một lần, nếu đếm phần bù hãy mô tả rõ tập tất cả và tập bị loại.
- **Cần biết trước:** B23 chia trường hợp; hoán vị/tổ hợp B24 §1–2
- **Quay lại đúng item canonical:** THPT-G10-B24-P04, THPT-G10-B24-P05, THPT-G10-B24-P06
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).


### Bài 25 — Nhị thức Newton

#### D6-G10-B25-01 · Sai dấu hoặc vị trí hệ số trong nhị thức

- **Dấu hiệu cần hỗ trợ:** Đọc hệ số x^r mà thiếu C(n,r), nhầm k với n−k, hoặc bỏ dấu âm từ (−bx)^k.
- **Bản chất / kiểm tra toán học:** Với (a+bx)^n, a,b hằng số và n nguyên không âm, hệ số x^r (0≤r≤n) là C(n,r)a^(n−r)b^r. Nếu b âm, dấu phụ thuộc tính chẵn lẻ của r.
- **Tự sửa theo từng bước:** Ôn B25 §1; xác định phần có x và hệ số b, viết số hạng tổng quát rồi mới thế r; tự kiểm dấu bằng b^r.
- **Cần biết trước:** Tổ hợp B24; quy tắc lũy thừa; B25 §1
- **Quay lại đúng item canonical:** THPT-G10-B25-C01, THPT-G10-B25-C02, THPT-G10-B25-P01, THPT-G10-B25-P03, THPT-G10-B25-P04, THPT-G10-CHVIII-W25-01
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).

#### D6-G10-B25-02 · Nhầm số hạng tự do Core với bài lũy thừa âm mở rộng

- **Dấu hiệu cần hỗ trợ:** Để tìm số hạng không chứa x trong (a+bx)^n lại khai triển toàn bộ; hoặc đưa bài chứa x^−1 vào Core không kiểm nguồn.
- **Bản chất / kiểm tra toán học:** Với (a+bx)^n trong đó a,b hằng số, số hạng tự do ứng với chọn 0 thừa số bx, bằng a^n. Với biểu thức chứa x^−1, phải cộng số mũ rồi giải điều kiện số mũ 0 và kiểm x≠0; dạng này ở bank hiện là hỗ trợ mở rộng.
- **Tự sửa theo từng bước:** Ôn B25 §1–2 và bài THPT-G10-B25-P07 (Core Practice); chỉ chuyển sang P02/P05/P06 nếu chủ động học mở rộng, không dùng chúng để đánh giá Core bắt buộc.
- **Cần biết trước:** Số hạng tổng quát; điều kiện x≠0 cho lũy thừa âm; B25 §1–2
- **Quay lại đúng item canonical:** THPT-G10-B25-P07; optional only: THPT-G10-B25-P02, THPT-G10-B25-P05, THPT-G10-B25-P06
- **Vai trò:** Formative help (không là đề Readiness; không cấp mastery).


## D. Danh sách ID hiện có để reviewer đối chiếu (không nhân bản nội dung)

| Bài | Formative canonical IDs trong nguồn snapshot | Written canonical IDs |
|---|---|---|
| B19 | THPT-G10-B19-C01, THPT-G10-B19-C02, THPT-G10-B19-P01, THPT-G10-B19-P02, THPT-G10-B19-P03, THPT-G10-B19-P04, THPT-G10-B19-P05, THPT-G10-B19-P06 | THPT-G10-CHVII-W19-01 |
| B20 | THPT-G10-B20-C01, THPT-G10-B20-C02, THPT-G10-B20-P01, THPT-G10-B20-P02, THPT-G10-B20-P03, THPT-G10-B20-P04, THPT-G10-B20-P05, THPT-G10-B20-P06 | THPT-G10-CHVII-W20-01 |
| B21 | THPT-G10-B21-C01, THPT-G10-B21-C02, THPT-G10-B21-P01, THPT-G10-B21-P02, THPT-G10-B21-P03, THPT-G10-B21-P04, THPT-G10-B21-P05, THPT-G10-B21-P06 | THPT-G10-CHVII-W21-ANCHOR-01 |
| B22 | THPT-G10-B22-C01, THPT-G10-B22-C02, THPT-G10-B22-P01, THPT-G10-B22-P02, THPT-G10-B22-P03, THPT-G10-B22-P04, THPT-G10-B22-P05, THPT-G10-B22-P06 | THPT-G10-CHVII-W22-01 |
| B23 | THPT-G10-B23-C01, THPT-G10-B23-C02, THPT-G10-B23-P01, THPT-G10-B23-P02, THPT-G10-B23-P03, THPT-G10-B23-P04, THPT-G10-B23-P05, THPT-G10-B23-P06 | THPT-G10-CHVIII-W23-01 |
| B24 | THPT-G10-B24-C01, THPT-G10-B24-C02, THPT-G10-B24-P01, THPT-G10-B24-P02, THPT-G10-B24-P03, THPT-G10-B24-P04, THPT-G10-B24-P05, THPT-G10-B24-P06 | THPT-G10-CHVIII-W24-ANCHOR-01 |
| B25 | THPT-G10-B25-C01, THPT-G10-B25-C02, THPT-G10-B25-P01, THPT-G10-B25-P02, THPT-G10-B25-P03, THPT-G10-B25-P04, THPT-G10-B25-P05, THPT-G10-B25-P06, THPT-G10-B25-P07 | THPT-G10-CHVIII-W25-01 |

**Kiểm kê:** 57 unique formative IDs + 7 unique Written IDs = 64 public canonical IDs đã tồn tại. 14 thẻ HELP_ID mới không phải item_id; không tăng số câu học liệu. Nếu reviewer chỉ ra ID/role lệch ở bảng, trả ERROR_ID_MAP, không tự thay canonical ID.

## E. Expected review / biên giới triển khai

1. Đối chiếu 14 HELP_ID đúng đủ: D6-G10-B19-01/02, B20-01/02, B21-01/02, B22-01/02, B23-01/02, B24-01/02, B25-01/02. Trả PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE/NOT_REVIEWED cho từng HELP_ID và B19–B25.
2. Kiểm tính đúng điều kiện toán (vectơ, góc, đường tròn, conic, quy tắc đếm, chỉnh hợp/tổ hợp, Newton), hướng xử lý lỗi hữu ích, không tiết lộ đáp án đánh giá; kiểm SGK/SBT S1 về CORE vs optional cho B22-C01, B25-P02/P05/P06/P07.
3. Kiểm mỗi thẻ có thực sự bổ sung hỗ trợ D6, không lặp lại vô ích với hint đã review, không gắn sai item IDs/lesson; đề xuất minimal delta theo HELP_ID.
4. Đánh giá tính độc lập của SGK path; không suy rộng verdict sang Topic. Không đánh giá lại toàn bộ D1–D5 nếu không phát hiện delta thực chất; vẫn ghi clearly D1–D5 SOURCE-LOCKED_ONLY.
5. Yêu cầu output: SOURCE_RECEIPT, HELP_ID_REGISTER 14/14, LESSON_VERDICTS 7/7, P0/P1/P2, ACADEMIC_D6_OVERALL, MINIMAL_DELTA, ACADEMIC_CLEARANCE_FOR_THIS_DELTA; nếu thiếu trang S1/ảnh hoặc snapshot ghi INSUFFICIENT_EVIDENCE. NotebookLM không cấp quyền merge/deploy, CONTENT_READY, kích hoạt Readiness hoặc Mastery.

## F. Delta và trạng thái phát hành

DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL (bổ sung hướng dẫn có phát biểu toán học mới, dù không thay câu hỏi cũ).
REVIEW_REQUIRED: YES, scoped to 14 HELP_ID.
MERGE_DEPLOY: NO.
ACADEMIC_PASS: NOT_ASSUMED.
CONTENT_READY: HOLD_A5 (đủ thẻ D6 thôi cũng chưa tự chứng minh đủ D1–D6 toàn chương).
PUBLIC_HELD_OUT_ANSWERS: NONE.
