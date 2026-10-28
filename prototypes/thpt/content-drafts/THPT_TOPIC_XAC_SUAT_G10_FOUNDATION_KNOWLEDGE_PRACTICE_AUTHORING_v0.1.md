# THPT · Chuyên đề trục dọc Xác suất — phần nền tảng lớp 10 (G10 Foundation) · v0.1

**PACKET_ID:** `THPT-TOPIC-PROBABILITY-G10-FOUNDATION-D1D4-20261028-R0`  
**AUTHORING STATUS:** `NEW_TOPIC_CONTENT_CANDIDATE / NOTEBOOKLM_NOT_REVIEWED`  
**Scope:** Học liệu *Chuyên đề Xác suất* — **chỉ phần nền tảng lớp 10**, lấy từ SGK KNTT B26–B27 và các nguồn đã review. **CHƯA phải toàn bộ Chuyên đề Xác suất trục dọc 10–12.**  
**Learning menu (bất biến):** **Kiến thức / Luyện tập / Tự kiểm tra Chuyên đề**. Không có trang Core riêng.  
**Original source receipt từ NotebookLM:** SGK Toán 10 KNTT Tập 2 B26 pp.77–82, B27 pp.83–87, bài cuối ChIX pp.88–89; SBT B26 pp.60–64, B27 pp.65–69, cuối chương pp.70–74.  
**Permanent Sources:** `01–05_THPT_PERMANENT_v2.0_ONLY`.  
**Source academic receipts:** SGK B26–B27 D1–D4 R0 PASS (10 outcomes, 5 examples, 16 canonical items); SGK Chapter IX Readiness R0 PASS (6 **private** candidates), nhưng **không chuyển quyền PASS sang Topic Readiness**.

## 1. Mục tiêu và kiến trúc Chuyên đề

Một người học mở trực tiếp vào **Chuyên đề Xác suất**, chưa học nhánh SGK B26/B27, vẫn cần đọc hiểu được đầy đủ nội dung nền tảng lớp 10 trên chính trang Kiến thức này và làm bài Luyện tập phù hợp. Khi dùng ví dụ/đề đã có trong SGK, hệ thống chỉ **tham chiếu nguồn học liệu dùng chung**, không copy item, đáp án hoặc lịch sử.

Dự kiến mô-đun nền tảng này dùng **một tầng tab** nếu giao diện chỉ triển khai lớp 10; khi Chuyên đề phát triển thêm lớp 11–12, có thể dùng **hai tầng** (nhóm kiến thức → tab nội dung) theo Golden UI R4. Quyết định phân tầng UX do luồng phát hành thực hiện, không sửa UI trong nhánh học thuật này.

**Lộ trình học tự đủ của phần lớp 10:**
1. Phép thử, tập kết quả và biến cố.
2. Mô hình đồng khả năng và định nghĩa cổ điển.
3. Biến cố đối và cách hiểu xác suất rất nhỏ.
4. Đếm kết quả bằng quy tắc nhân, tổ hợp và sơ đồ cây.
5. Tự chọn mô hình, kiểm tra kết quả và luyện tập tổng hợp.

Các mô-đun trên dự kiến liên kết 10 outcome canonical G10 từ B26/B27. Phần mở rộng sang lớp 11–12, kỹ năng và nội dung S1 tương ứng hiện **`UNVERIFIED_SOURCE / NOT_AUTHORED`**; không coi các bài lớp 10 là đủ bao phủ toàn Chuyên đề.

## 2. KIẾN THỨC — 5 mô-đun tự học G10

### KT-G10-01. Phép thử ngẫu nhiên, không gian mẫu và biến cố

Một phép thử ngẫu nhiên có nhiều kết quả có thể xuất hiện, nhưng không biết chắc kết quả của một lần thực hiện. Tập tất cả kết quả sơ cấp là **không gian mẫu** \(\Omega\). Mỗi kết quả ghi nhận phải được mô tả rõ: số nào được chọn, thứ tự các lượt có quan trọng hay không, thẻ có được trả lại hay không.

Một **biến cố** \(A\) là tập con \(A\subseteq\Omega\): chỉ gồm những kết quả khiến câu phát biểu của \(A\) đúng. \(A=\varnothing\) là biến cố không thể, \(A=\Omega\) là biến cố chắc chắn.

**Ví dụ hướng dẫn (không có ID câu hỏi chấm điểm):** Rút đều một thẻ trong bảy thẻ mang số \(1,2,\ldots,7\). Khi đó \(\Omega=\{1,2,3,4,5,6,7\}\). Biến cố “lấy được số nguyên tố” có tập kết quả \(\{2,3,5,7\}\); biến cố đối là \(\{1,4,6\}\). Không được gọi “số nguyên tố” là một kết quả sơ cấp duy nhất.

**Tự chốt kiến thức:** Hãy luôn viết \(\Omega\) trước khi đếm; một cặp có thứ tự \((a,b)\) khác cặp không thứ tự \(\{a,b\}\).

**Có thể chèn ví dụ dùng chung đã PASS:** `EX-G10-B26-01` (vòng quay, phân biệt vị trí vật lí và kí hiệu); chỉ tham chiếu ví dụ **một lần**, không lưu thêm bản sao.

### KT-G10-02. Định nghĩa cổ điển và điều kiện đồng khả năng

Đối với không gian mẫu hữu hạn với **mọi kết quả sơ cấp đồng khả năng**, xác suất của \(A\) là
\[
P(A)=\frac{n(A)}{n(\Omega)},\qquad n(\Omega)>0.
\]
Nếu đề chỉ nói có ba “loại kết quả”, chưa thể kết luận mỗi loại có xác suất \(1/3\). Phải xác định các kết quả sơ cấp thực sự có cơ hội như nhau, rồi mới đếm.

**Ví dụ hướng dẫn:** Một hộp có 8 phiếu khác nhau, mang nhãn \(A,A,B,B,B,C,C,C\), chọn ngẫu nhiên đều một phiếu. Không gian mẫu là 8 **phiếu vật lí**. Biến cố “nhãn B” có xác suất \(3/8\); ba nhãn A, B, C **không** có xác suất \(1/3\). Mô hình này dùng để *dạy kiến thức*, không lấy làm câu Tự kiểm tra độc lập.

**Kiểm tra trước khi tính:** Có đang đếm nhóm không thứ tự trong khi mẫu gốc là chuỗi có thứ tự không? Các kết quả được đếm có thực sự đồng khả năng không? Nếu không, không được dùng công thức cổ điển theo tỉ số đơn giản.

**Ví dụ dùng chung đã PASS:** `EX-G10-B26-01` cũng có thể hiển thị tại đây bằng chính tham chiếu nguồn, không nhân bản nguồn của ví dụ.

### KT-G10-03. Biến cố đối, xác suất bé và phản biện

Với biến cố \(A\) trong \(\Omega\), biến cố đối \(\bar A=\Omega\setminus A\) gồm tất cả kết quả **không** làm \(A\) xảy ra. Hai tập không giao nhau và hợp bằng \(\Omega\), nên
\[
P(\bar A)=1-P(A).
\]
Cách tính biến cố đối hữu ích khi đếm trực tiếp các trường hợp “ít nhất một” khó hơn đếm trường hợp “không có”.

**Ví dụ hướng dẫn:** Có 20 phiếu khác nhau được chọn đều, trong đó 2 phiếu thưởng. Biến cố \(A\) là “không trúng thưởng”. Khi đó \(P(A)=18/20=9/10\); biến cố đối “trúng một trong hai phiếu thưởng” có xác suất \(1/10\).

**Nguyên lí xác suất bé:** Một biến cố có \(0<P(A)\ll 1\) vẫn có thể xảy ra. Không suy ra biến cố không thể và không khẳng định số lần xảy ra trong một số lượt thử bằng chính xác “số lượt × xác suất”.

**Có thể dùng chung ví dụ đã PASS:** `EX-G10-B26-02` và `EX-G10-B27-03` cho hai cách vận dụng, nhưng mọi học sinh đã thấy ví dụ phải được đánh dấu là **đã tiếp xúc nội dung** khi xét bài Tự kiểm tra.

### KT-G10-04. Đếm trường hợp bằng tổ hợp và sơ đồ cây

Có hai kiểu phép thử cần phân biệt:

- **Chọn đồng thời không xét thứ tự:** chọn \(k\) trong \(n\) vật khác nhau và mọi nhóm đồng khả năng, tổng số kết quả là \(\binom nk\). Số trường hợp thuận lợi phải được đếm cùng kiểu “nhóm” này.
- **Thực hiện tuần tự:** dùng quy tắc nhân theo số lựa chọn từng bước hoặc sơ đồ cây. Nếu không hoàn lại, số lựa chọn ở bước sau thay đổi; nếu có hoàn lại, số lựa chọn có thể giữ nguyên. **Không được tự động coi mọi lá cây là đồng khả năng**, trừ khi đã kiểm chứng cách chọn ở mỗi giai đoạn.

**Ví dụ hướng dẫn (tổ hợp):** Có 8 lá phiếu khác nhau đánh số từ 1 đến 8, bốc đồng thời 3 phiếu và mọi bộ 3 đồng khả năng. Số nhóm là \(\binom83=56\). Có 4 phiếu mang số chẵn; biến cố “cả ba số đều chẵn” có \(\binom43=4\) nhóm thuận lợi, do đó \(P=4/56=1/14\).

**Ví dụ hướng dẫn (đếm theo bước):** Có 4 chiếc thẻ khác nhau; rút liên tiếp 2 thẻ không hoàn lại. Mỗi kết quả là một **cặp có thứ tự**, với \(4\cdot3=12\) khả năng đồng đều nếu rút đều mỗi bước. Nếu bốc đồng thời 2 thẻ không xét thứ tự thì mô hình lại có \(\binom42=6\) nhóm, không thể trộn hai mẫu khi lập tỉ số.

**Ví dụ dùng chung đã PASS:** `EX-G10-B27-01`, `EX-G10-B27-02`; trình bày nội dung đầy đủ qua thành phần dùng chung, không sao chép dữ liệu câu hỏi mới.

### KT-G10-05. Chọn mô hình và kiểm tra kết quả

Trước khi giải một bài xác suất, học sinh cần tự trả lời: (1) Kết quả sơ cấp là gì? (2) Đồng khả năng đã được xác nhận chưa? (3) Thứ tự có quan trọng không? (4) Có hoàn lại không? (5) Biến cố thuận lợi là tập nào? (6) Có thể dùng biến cố đối, đếm theo nhóm hoặc sơ đồ cây nào để tránh đếm sót hay đếm trùng?

**Bài mẫu phân tích sai lầm (không chấm điểm):** Khi gieo hai xúc xắc phân biệt, 11 tổng số chấm từ 2 đến 12 không đồng khả năng; chẳng hạn tổng 2 chỉ do một cặp, trong khi tổng 7 do sáu cặp. Nếu tính xác suất biến cố theo số “loại tổng” thay vì 36 cặp có thứ tự đồng khả năng thì mô hình sai dù phép chia đúng số học.

**Tự đánh giá sau phần Kiến thức:** Một xác suất hợp lệ luôn ở \([0,1]\), nhưng điều đó **chưa đủ** chứng minh phương pháp đếm là đúng. Trình bày bằng lời vì sao các kết quả đang đếm có khả năng như nhau.

## 3. LUYỆN TẬP — tái sử dụng một ngân hàng canonical duy nhất

**Không tạo câu hỏi hoặc đáp án mới bằng cách copy:** 16 item D3–D4 đã reviewer PASS ở nhánh SGK được dùng lại dưới `TOPIC_PRACTICE` nếu mục tiêu và mức phù hợp, qua **cùng canonical ID / content_version / answer key / attempt history**, chỉ thêm vị trí/ngữ cảnh học.

| Nhóm nội dung | Mức bắt đầu | Mapping item canonical có sẵn |
|---|---|---|
| Phép thử, \(\Omega\), tập biến cố | Cơ bản | `THPT-G10-B26-C01`; `THPT-G10-B26-P02` |
| Xác suất đồng khả năng, biến cố đối | Cơ bản | `THPT-G10-B26-C02`; `THPT-G10-B26-P01`; `THPT-G10-B26-P03` |
| Phản biện đồng khả năng và xác suất bé | Hiểu–Vận dụng | `THPT-G10-B26-P04`; `THPT-G10-B26-P05`; `THPT-G10-B27-P05` |
| Đếm tổ hợp và rút không hoàn lại | Cơ bản–Vận dụng | `THPT-G10-B27-C01`; `THPT-G10-B27-P01`; `THPT-G10-B27-P02`; `THPT-G10-B27-P03` |
| Quy tắc nhân, chuỗi nhiều bước | Cơ bản–Vận dụng | `THPT-G10-B27-C02`; `THPT-G10-B27-P04` |
| Giải thích tự luận và nhận diện cách tính | Vận dụng–Tổng hợp | `THPT-G10-CHIX-W26-01`; `THPT-G10-CHIX-W27-ANCHOR-01` |

**Đếm:** 16 item ID độc nhất = 4 Core + 10 Practice/Application + 2 Written (Anchor chỉ là tag của một Written). Không có item mới, không nhân đôi key. Core từ SGK có thể xuất hiện như Practice cơ bản tại đây, **không xuất hiện trang Topic Core**. Sự phù hợp của những placement trên là **đề xuất học thuật chờ reviewer Topic**; chưa cập nhật runtime.

**Gợi ý Practice:** Có thể giải thích cách tiếp cận theo luồng Luyện tập, nhưng không hiển thị đáp án/lời giải trước khi học sinh chọn Check/Submit theo thiết kế chủ dự án. Không chuyển ngay kết quả Practice đã thấy thành chứng cứ Readiness.

## 4. TỰ KIỂM TRA CHUYÊN ĐỀ — phạm vi độc lập, CHƯA có đề

`TOPIC_READINESS` có đối tượng đánh giá là **toàn Chuyên đề Xác suất khi đã xác minh phạm vi 10–12**, không phải chỉ Chương IX SGK. Vì vậy, sáu câu `THPT-G10-CHIX-RD01`–`RD06` đã PASS là **SGK_CHAPTER_READINESS_PRIVATE_ONLY**, không được gắn vào trang này theo mặc định. **Không có slot/item/khóa Topic Readiness hợp lệ trong packet này.**

Sau khi nguồn lớp 11–12 được kiểm chứng, phải xây dựng **outcome matrix chuyên đề độc lập**, định nghĩa blueprint theo từng tầng và biên soạn câu đánh giá giữ kín. Dù cùng kỹ năng, không dùng câu luyện tập đã thấy làm chứng cứ độc lập; không lộ hint, Tutor, kết quả đúng/sai hoặc đáp án trước **Final Submit**. Không có kết quả học tập/mastery nào được ghi từ bản nháp này.

## 5. Những phần chưa có nguồn và giới hạn PASS

| Phạm vi | Tình trạng |
|---|---|
| Phần Kiến thức + Luyện tập trục dọc gắn lớp 10 | Đã biên soạn bản nháp nội dung thực và mapping 16 ID, **chưa review cho vai trò Topic** |
| 10 outcome từ B26/B27 | Có source receipt cho SGK, chưa có verdict cho toàn Topic |
| Nguồn SGK/SBT lớp 11 | `UNVERIFIED_SOURCE_NOT_AUTHORED` |
| Nguồn SGK/SBT lớp 12 | `UNVERIFIED_SOURCE_NOT_AUTHORED` |
| Topic Readiness toàn chuyên đề | `NOT_AUTHORED / NO_PRIVATE_KEYS / NO_SCORING` |
| D5 minh họa cho Chuyên đề | `NOT_REVIEWED_FOR_TOPIC` |
| D6 website / triển khai | `OUT_OF_SCOPE_OTHER_CONVERSATION` |

## 6. Ma trận outcome G10 — 10/10 ID đã có nguồn SGK, placement Chuyên đề vẫn chờ review

| Canonical outcome | Mô-đun kiến thức Chuyên đề | Nhóm luyện tập chứng cứ | Trạng thái |
|---|---|---|---|
| `G10-B26-EXPERIMENT_SAMPLE_SPACE` | KT-G10-01 | B26-C01; W26-01 | Topic mapping dự thảo |
| `G10-B26-EVENT_SUBSET` | KT-G10-01 | B26-P02; W26-01 | Topic mapping dự thảo |
| `G10-B26-COMPLEMENT` | KT-G10-03 | B26-C02; B26-P01 | Topic mapping dự thảo |
| `G10-B26-CLASSICAL_RATIO` | KT-G10-02 | B26-C02; B26-P03 | Topic mapping dự thảo |
| `G10-B26-SCOPE_SMALL_PROBABILITY` | KT-G10-03 | B26-P04; B26-P05 | Topic mapping dự thảo |
| `G10-B27-COUNTING_OUTCOMES` | KT-G10-04 | B27-P01; W27-ANCHOR-01 | Topic mapping dự thảo |
| `G10-B27-TREE_SEQUENCE` | KT-G10-04 | B27-C01; B27-P03 | Topic mapping dự thảo |
| `G10-B27-COMPLEMENT_PROBABILITY` | KT-G10-03 | B27-P02; W27-ANCHOR-01 | Topic mapping dự thảo |
| `G10-B27-EQUIPROBABLE_MODELLING` | KT-G10-02; KT-G10-05 | B27-P05; B26-P05 | Topic mapping dự thảo |
| `G10-B27-MULTISTEP_CONTEXT` | KT-G10-05 | B27-P04; B27-P03 | Topic mapping dự thảo |

Lưu ý: Các ID item trong cột nhóm luyện tập là **viết tắt để đọc nhanh**, tương ứng với ID nguyên vẹn `THPT-G10-...` ở bảng Luyện tập. Đây không phải 10 item mới và không thay thế ma trận nguồn SGK gốc. **Chưa có Topic Readiness hay review học thuật riêng ở cấp Chuyên đề.**

## 7. Yêu cầu review NotebookLM cụ thể

Trả `SOURCE_RECEIPT`, `TOPIC_MODULE_REGISTER` cho 5 mô-đun Kiến thức lớp 10, `OUTCOME_ALIGNMENT` 10/10 ở phạm vi G10, `PLACEMENT_REGISTER` 16/16 cùng canonical ID (không nhân bản), phát hiện bài/ví dụ gần trùng hoặc gây lộ đề SGK Readiness, mức Core/Practice/Advanced, `P0/P1/P2` và `MINIMAL_DELTA`. Kiểm tra đủ độ sâu để **một học sinh mở trực tiếp vào Topic vẫn học được phần nền tảng G10**, và xác nhận có bắt buộc thêm nội dung nào từ S1 trước khi coi segment G10 hoàn chỉnh. **Không cấp PASS toàn Chuyên đề 10–12** khi S1 lớp 11/12 và Topic Readiness còn thiếu; không tự merge/deploy hay cấp mastery.
