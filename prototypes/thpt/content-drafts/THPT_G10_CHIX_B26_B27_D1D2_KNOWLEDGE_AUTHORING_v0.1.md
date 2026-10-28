# Toán 10 KNTT · Chương IX — B26–B27 · D1/D2 Knowledge & Worked Examples · v0.1

**PACKET_ID:** `THPT-G10-CHIX-B26-B27-D1D2-D3D4-AUTHORING-20261028-R0`
**Trạng thái:** `NEW_AUTHORING_CANDIDATE / ACADEMIC_NOT_REVIEWED / NO_MERGE_DEPLOY`.
**Phạm vi:** SGK Chương IX: *Tính xác suất theo định nghĩa cổ điển*, Bài 26 *Biến cố và định nghĩa cổ điển của xác suất*, Bài 27 *Thực hành tính xác suất theo định nghĩa cổ điển*.
**Nguồn bắt buộc reviewer:** SGK/SBT Toán 10 KNTT tập 2 bản gốc và 5 Permanent Sources THPT v2.0; KHÔNG dùng các Permanent v1.0 đồng thời. Chỉ mục công khai thứ cấp tạm đối chiếu B26 khoảng trang in 77–82, B27 83–87, bài cuối chương 88–89; trang SBT B26/27 cần reviewer xác nhận từ S1 gốc. **Chưa có PDF SGK/SBT gốc của Chương IX được kiểm tra trực tiếp ở phiên này; các mốc trang dưới đây KHÔNG phải SOURCE_RECEIPT S1 xác nhận.**
Nguồn mục lục tham khảo (S2, không thay SGK gốc): https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-ix-tinh-xac-suat-theo-dinh-nghia-co-dien-3255/bai-26-bien-co-va-dinh-nghia-co-dien-cua-xac-suat-12097.html ; https://sachgiaokhoa.aistudybuddy.net/sach-online/lop-10/toan-10-tap-2/.
**Nguồn biên soạn:** Tự viết mới, không sao chép bài SGK; khái niệm phải được thẩm định chặt về phạm vi Core, điều kiện đồng khả năng và các ví dụ gần giống S1.

## A. Ma trận kết quả học tập (10 outcome dự thảo; chưa Academic PASS)

| ID outcome | Bài | Học sinh cần làm được | D1/D2 minh chứng | D3/D4 minh chứng từ file số 2 |
|---|---|---|---|---|
| G10-B26-EXPERIMENT_SAMPLE_SPACE | B26 | Phân biệt phép thử, kết quả, không gian mẫu | §B26.1, EX26-01 | B26-C01, B26-W01 |
| G10-B26-EVENT_SUBSET | B26 | Biểu diễn biến cố là tập con của Ω | §B26.2, EX26-01 | B26-C01, B26-P02, B26-W01 |
| G10-B26-COMPLEMENT | B26 | Xác định biến cố đối và tính P(Ā) | §B26.3, EX26-02 | B26-C02, B26-P01, B26-W01 |
| G10-B26-CLASSICAL_RATIO | B26 | Tính n(A)/n(Ω) khi đồng khả năng | §B26.4, EX26-01 | B26-C02, B26-P01, B26-P03 |
| G10-B26-SCOPE_SMALL_PROBABILITY | B26 | Nói đúng giới hạn của đồng khả năng và ý nghĩa xác suất bé | §B26.4–5, EX26-02 | B26-P04, B26-P05 |
| G10-B27-COUNTING_OUTCOMES | B27 | Đếm kết quả thuận lợi/không gian mẫu bằng tổ hợp | §B27.1, EX27-01 | B27-C02, B27-P01, B27-W01 |
| G10-B27-TREE_SEQUENCE | B27 | Dùng sơ đồ cây/phép nhân theo bước | §B27.2, EX27-02 | B27-C01, B27-P03, B27-P04 |
| G10-B27-COMPLEMENT_PROBABILITY | B27 | Dùng biến cố đối để giải “ít nhất một” | §B27.3, EX27-03 | B27-P02, B27-W01 |
| G10-B27-EQUIPROBABLE_MODELLING | B27 | Kiểm tra mô hình đồng khả năng trước khi đếm | §B27.4, EX27-01 | B27-P05, B26-P05 |
| G10-B27-MULTISTEP_CONTEXT | B27 | Giải thích rõ mô hình và nhiều bước tính | §B27.2–4, EX27-03 | B27-P03, B27-P04, B27-W01 |

### Bài 26 · D1. Kiến thức tự học

#### B26.1. Phép thử ngẫu nhiên và không gian mẫu

Một **phép thử ngẫu nhiên** là hành động có thể biết trước các kết quả có thể xảy ra nhưng không chắc kết quả cụ thể của lần thử. Kí hiệu **Ω** là *không gian mẫu*: tập tất cả kết quả của phép thử. Khi gieo một con xúc xắc sáu mặt cân đối, Ω={1,2,3,4,5,6}. Nêu rõ một kết quả là một số chấm, không phải xác suất.

**Chốt điều kiện:** Khi gieo đồng thời hai xúc xắc phân biệt, mỗi kết quả của phép thử là một *cặp có thứ tự* (i,j), i,j∈{1,…,6}. Có 36 cặp có khả năng như nhau; nếu chỉ liệt kê các tổng từ 2 đến 12, những tổng đó **không** đồng khả năng.

#### B26.2. Biến cố là tập con của Ω

Một **biến cố A** được biểu diễn bằng tập những kết quả làm A xảy ra, nên A⊆Ω. Ví dụ với Ω={1,2,3,4,5,6}, biến cố “xuất hiện số lớn hơn 4” là A={5,6}; biến cố không thể là ∅, biến cố chắc chắn là Ω. Học sinh phải phân biệt phát biểu bằng lời với tập kết quả thuận lợi và tránh đếm trùng.

#### B26.3. Biến cố đối

Biến cố đối của A, kí hiệu Ā, là biến cố “A không xảy ra”; xét trong **cùng một không gian mẫu Ω**: Ā=Ω\A. Hai biến cố này không thể xảy ra đồng thời và phủ hết Ω. Do đó P(Ā)=1−P(A). Tránh nhầm “không xảy ra A” với một biến cố khác được viết thiếu trường hợp.

#### B26.4. Định nghĩa cổ điển và tính chất cơ bản

**Chỉ khi Ω hữu hạn và mọi kết quả sơ cấp đồng khả năng**, xác suất theo định nghĩa cổ điển được tính bằng P(A)=n(A)/n(Ω), với n(Ω)>0. Vì 0≤n(A)≤n(Ω) nên 0≤P(A)≤1, P(∅)=0 và P(Ω)=1. Nếu các kết quả không đồng khả năng, không được lấy số phần tử chia cho tổng phần tử một cách máy móc. Nếu sử dụng hai kết quả không phân biệt về nhãn, phải kiểm tra chúng có cùng xác suất hay không.

#### B26.5. Nguyên lí xác suất bé

Biến cố có xác suất rất nhỏ **khó xảy ra trong một phép thử**, nhưng **không phải không thể xảy ra**; ngược lại, xác suất gần 1 không bảo đảm chắc chắn. Trong tình huống thực tế, cần tách điều SGK trình bày với một quy tắc dự báo số lần xuất hiện (chỉ ước lượng, không bảo đảm số lần đúng bằng n·P(A)). Reviewer kiểm tra phát biểu có đúng ranh giới Core S1 B26 hay cần giản lược.

### Bài 26 · D2. Ví dụ giải mẫu (không dùng nguyên xi làm Readiness)

**EX-G10-B26-01 — Biểu diễn biến cố và công thức cổ điển.** Một vòng quay chia thành sáu ô bằng nhau mang kí hiệu A,A,B,C,C,C; giả sử mũi tên dừng đều nhau trên từng ô vật lí. Gọi các vị trí là A₁,A₂,B,C₁,C₂,C₃, tức n(Ω)=6. Biến cố “ra kí hiệu C” có 3 vị trí thuận lợi nên P(C)=3/6=1/2, trong khi P(A)=2/6=1/3. **Tại sao không dùng Ω={A,B,C} với 3 kết quả đồng khả năng?** Vì ba kí hiệu xuất hiện trên số ô khác nhau. Trình bày hai tầng “kết quả vật lí/nhãn đọc được” để chống nhầm.

**EX-G10-B26-02 — Biến cố đối và xác suất rất bé.** Một phiếu được chọn đều từ 500 phiếu khác nhau, có đúng một phiếu đặc biệt. Nếu A là “trúng phiếu đặc biệt”, P(A)=1/500; P(Ā)=499/500. Xác suất nhỏ không đồng nghĩa A không thể xảy ra, và không thể kết luận sau 500 lần thử chắc chắn sẽ trúng nếu không quy định chính xác cách chọn phiếu qua từng lần.

### Bài 27 · D1. Kiến thức tự học

#### B27.1. Dùng quy tắc đếm / tổ hợp

Khi chọn đều k vật trong n vật **khác nhau** và không quan tâm thứ tự, số kết quả sơ cấp là C(n,k). Với biến cố A, liệt kê các trường hợp thuận lợi rồi dùng P(A)=n(A)/C(n,k), *nếu mọi nhóm k phần tử có khả năng như nhau*. Nếu quan tâm thứ tự, dùng chỉnh hợp hoặc liệt kê theo bước; không trộn mẫu có thứ tự với mẫu không thứ tự khi lấy tỉ số.

#### B27.2. Sơ đồ cây và xác suất theo nhiều bước

Với phép thử theo giai đoạn, sơ đồ cây giúp liệt kê mọi đường đi từ gốc đến lá, phân biệt “có hoàn lại” và “không hoàn lại”. Trong mô hình hữu hạn đồng khả năng, có thể đếm lá thuận lợi / tổng lá **chỉ khi các lá có cùng xác suất**. Nếu không đồng khả năng, cần tính xác suất cho từng nhánh theo điều kiện (nếu ngoài phạm vi SGK Core, reviewer yêu cầu phân tầng).

#### B27.3. Xác suất của biến cố đối

Để tính “ít nhất một”, hãy xét biến cố đối “không có lần nào” khi đó thuận tiện hơn; P(A)=1−P(Ā). Cẩn thận nhận diện tập bổ sung theo **đúng không gian mẫu**. Không được lấy tổng xác suất các trường hợp giao nhau nếu chưa xử lí phần giao.

#### B27.4. Lựa chọn mô hình & tự kiểm

Trước khi tính, học sinh tự hỏi: (1) Các kết quả sơ cấp là gì? (2) Có đồng khả năng không? (3) Có hoàn lại không? (4) Thứ tự có quan trọng không? (5) Biến cố thuận lợi là những trường hợp nào? (6) Kết quả cuối cùng có nằm trong [0,1] và có thể kiểm tra bằng cách khác không?

### Bài 27 · D2. Ví dụ giải mẫu (các kiểu suy luận khác nhau)

**EX-G10-B27-01 — Chọn nhóm không phân biệt thứ tự.** Có 3 phiếu đánh số 1,2,3 và 2 phiếu đánh số 4,5. Chọn đều 2 phiếu khác nhau cùng lúc. Tổng số nhóm C(5,2)=10. Biến cố “cả hai phiếu có số không vượt 3” có C(3,2)=3 nhóm, vậy xác suất 3/10. Không nhân thêm 2! vì nhóm không xét thứ tự.

**EX-G10-B27-02 — Sơ đồ cây ba phép thử.** Tung ba đồng xu cân đối độc lập, ghi kết quả từng lần (N = ngửa, S = sấp). Có 2³=8 bộ kết quả đồng khả năng: NNN, NNS, NSN, SNN, NSS, SNS, SSN, SSS. Biến cố đúng hai mặt ngửa là {NNS, NSN, SNN}, xác suất 3/8. Có thể minh họa bằng cây ba tầng; mỗi lá đúng một chuỗi.

**EX-G10-B27-03 — Tính biến cố đối.** Gieo một xúc xắc cân đối hai lần độc lập. A: “Có ít nhất một lần ra mặt 6”. Ā: “Cả hai lần đều khác 6” có 5·5=25 bộ, Ω có 36 bộ, nên P(A)=1−25/36=11/36. Không cộng 1/6+1/6=1/3 vì trường hợp cả hai lần cùng ra 6 sẽ bị tính hai lần.

## C. Kiến trúc hành trình học và phân tầng

- **SGK đầy đủ độc lập:** Kiến thức B26/B27 → các Core theo bài → luyện tập, vận dụng và câu tích lũy cuối chương đặt trong Practice → **một Tự kiểm tra CUỐI CHƯƠNG IX độc lập**. Chưa thiết kế/live Tự kiểm tra: chỉ blueprint, không có held-out key trong tài liệu công khai.
- **Chuyên đề trục dọc đầy đủ độc lập:** chỉ **Kiến thức / Luyện tập / Tự kiểm tra Chuyên đề**, không có Core riêng. Một item B26-C01 nếu phù hợp có thể đặt thêm `TOPIC_PRACTICE` qua mapping và **cùng canonical ID**; không nhân bản item, đáp án, rubric hoặc lịch sử. Toàn topic trục dọc 10–12 **chưa** được tác giả xác nhận đủ nội dung.
- Ví dụ D2 **được hiển thị** cho học sinh, không được dùng nguyên làm bằng chứng độc lập Readiness. Hình minh họa (cây, biểu đồ) chỉ thêm khi có nhiệm vụ toán học rõ ràng, qua D5 sau.
- Đáp án/hint luyện tập chỉ hiện sau đúng luồng kiểm tra Practice; đối với Readiness, tuyệt đối không gửi key, hint, đúng/sai trước **Final Submit**, và không ghi mastery khi backend kiểm tra an toàn chưa được xác minh.

## D. Câu hỏi thẩm định NotebookLM (không tự PASS)

1. Trả `SOURCE_RECEIPT` trang SGK/SBT **gốc** chính xác, đặc biệt nếu số trang của bản tra cứu khác bản quét S1. Reviewer phải đánh dấu `INSUFFICIENT_SOURCE` thay vì suy đoán nếu không đối chiếu được.
2. Với 10 outcome, đối chiếu `FULL/PARTIAL/OUT_OF_SCOPE` và mức Core, nhất là **nguyên lí xác suất bé**, điều kiện đồng khả năng, sơ đồ cây và xác suất nhiều bước.
3. Kiểm tra 5 ví dụ D2 về toán học, độ đa dạng suy luận và nguy cơ trùng chính hoạt động/ví dụ SGK; nêu lỗi có ID cụ thể.
4. Đánh giá xem 16 item ở file review thứ 2 đã bao phủ D3/D4, hai bài đều độc lập, có thiếu dạng bài quan trọng, trùng SGK hay Readiness không.
5. Trả `LESSON_REGISTER` B26, B27, `OUTCOME_MATRIX` 10/10, `EXAMPLE_REGISTER` 5/5, P0/P1/P2, MINIMAL_DELTA, ACADEMIC_OVERALL và `ACADEMIC_CLEARANCE_FOR_RELEASE=NO` trừ khi chủ dự án phê duyệt.