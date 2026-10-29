# Toán 10 KNTT · Chương IX B26–B27 · D6 hỗ trợ tự sửa sai — Candidate v0.1

**PACKET_ID:** `THPT-G10-CHIX-B26-B27-D6-REMEDIATION-R01`
**STATUS:** `ACADEMIC_DRAFT / NOT_REVIEWED / HOLD_A5 / NO_RELEASE`
**REVIEW_SCOPE:** 4 HELP_ID D6 mới, bám 2 bài và 16 canonical IDs đã được review D1–D4; không phải 4 câu trắc nghiệm mới.
**LEARNING_PATH:** SGK_CHAPTER public formative ONLY; TOPIC/Readiness khác phạm vi.
**DATE:** 2026-10-29

## 1. Khóa nguồn và giới hạn chứng cứ

- S1: SGK Toán 10 KNTT tập 2 B26–27; SBT KNTT tập 2 tương ứng. Theo receipt NotebookLM ChIX hiện hành: SGK B26 tr.77–82, B27 tr.83–87; SBT B26 tr.60–64, B27 tr.65–69. **Cần reviewer xác nhận lại trang in với PDF S1**, vì các receipt khác trong dự án có dải trang khác nhau.
- Nguồn item/lesson: `feature/thpt-g10-chix-reviewed-sgk-stage3-20261029` PR #616 @ `1c205a9a87f5e0fc2563be14e1c1a911a14c6d76`; source JS blob `caf4ca6f8866a2cb3377dfdfa73d723c0e5bd5f0` (14 IDs); Written blob `51c5f78e41d569fff11070e0f48f3ab25f58b587` (2 IDs).
- Existing independent academic receipt: D1–D4 PASS snapshot `THPT_G10_CHIX_B26_B27_NOTEBOOKLM_D1D4_R0_PASS_RECEIPT_20261028.md`, blob `05c3dd40a094b4b34c28b48cc72d1752c21190fe`; 16 existing public canonical IDs; 10/10 outcomes. Không được suy PASS sang 4 D6 mới.
- Private Readiness six RD01–RD06: academic PASS theo snapshot riêng, **0 hoạt động**; không có stem, key, rubric, hint private trong tài liệu này; không chấm, không cộng Mastery.
- Phạm vi nghiên cứu: Academic Depth D6 (Help/Remediation), **không phải kiểm thử bảo mật/browser**. Không đề xuất thêm backend hoặc thay đổi learner data.

## 2. Bộ 4 thẻ D6 — nội dung mới cần review

### D6-G10-B26-01 · Đồng nhất nhãn kết quả với kết quả sơ cấp

**Bài và outcome:** B26 · không gian mẫu, biến cố, điều kiện đồng khả năng

**Dấu hiệu học sinh đang vướng:** Liệt kê kết quả bằng tên màu hoặc tổng chấm nhưng giả định các tên/tổng có xác suất bằng nhau; cũng có thể quên thứ tự của hai lần tung.

**Vì sao sai / điều kiện đúng:** Định nghĩa cổ điển P(A)=n(A)/n(Ω) chỉ áp dụng khi Ω hữu hạn, n(Ω)>0 và mọi kết quả sơ cấp được chọn có khả năng như nhau. Nhãn gộp nhiều kết quả sơ cấp có thể không đồng khả năng.

**Tự sửa từng bước:** (1) Mô tả phép thử thật sự và một kết quả đầy đủ (ô vật lí, cặp có thứ tự nếu có hai bước). (2) Liệt kê/sơ đồ cây các kết quả sơ cấp. (3) Giải thích vì sao chúng đồng khả năng, không suy từ chữ 'ngẫu nhiên'. (4) Xác định A⊆Ω rồi mới đếm. (5) Tự kiểm 0≤P(A)≤1.

**Kiến thức tiền đề cần ôn:** B26 §26.1–26.2, 26.4; quy tắc nhân B23.

**Quay lại item đã có, không nhân bản câu hỏi:** `THPT-G10-B26-C01`, `THPT-G10-B26-C02`, `THPT-G10-B26-P02`, `THPT-G10-B26-P05`, `THPT-G10-CHIX-W26-01`.

**Placement:** `PUBLIC_FORMATIVE_D6_HELP`; mở khi học sinh cần, không dùng làm độc lập đánh giá.

### D6-G10-B26-02 · Nhầm 'hoặc', biến cố đối và xác suất nhỏ

**Bài và outcome:** B26 · biến cố đối, tập hợp biến cố, nguyên lí xác suất bé

**Dấu hiệu học sinh đang vướng:** Cộng hai số trường hợp có giao nhau mà không trừ phần giao; mô tả 'A không xảy ra' bằng một tập thiếu kết quả; coi xác suất rất nhỏ là 0 hoặc số lần xuất hiện chắc chắn đúng bằng nP(A).

**Vì sao sai / điều kiện đúng:** A và biến cố đối Ā phân hoạch Ω: Ā=Ω\A, P(A)+P(Ā)=1. Với các biến cố chồng lấn, n(A∪B)=n(A)+n(B)−n(A∩B) trong mô hình hữu hạn; P(A)>0 dù nhỏ không đồng nghĩa A bất khả.

**Tự sửa từng bước:** (1) Viết rõ Ω và các tập A, B bằng kết quả sơ cấp. (2) Tô/vẽ phần giao nếu có chữ 'hoặc'. (3) Viết Ā bằng cả câu chữ lẫn Ω\A và kiểm A∩Ā=∅. (4) Đếm không lặp, tính xác suất khi có đồng khả năng. (5) Nếu phát biểu về xác suất bé, chỉ kết luận 'khó xảy ra', không kết luận 'không thể' hay bảo đảm tần suất.

**Kiến thức tiền đề cần ôn:** B26 §26.2–26.5; tập hợp và phép giao/hợp cơ bản.

**Quay lại item đã có, không nhân bản câu hỏi:** `THPT-G10-B26-P01`, `THPT-G10-B26-P03`, `THPT-G10-B26-P04`, `THPT-G10-CHIX-W26-01`.

**Placement:** `PUBLIC_FORMATIVE_D6_HELP`; mở khi học sinh cần, không dùng làm độc lập đánh giá.

### D6-G10-B27-01 · Đếm lá sơ đồ cây không đồng khả năng

**Bài và outcome:** B27 · phép thử nhiều bước, có/không hoàn lại

**Dấu hiệu học sinh đang vướng:** Thấy sơ đồ cây có nhiều lá rồi chia số lá thuận lợi cho tổng lá mà không kiểm điều kiện chọn từng bước; hoặc quên rằng xác suất nhánh sau có thể thay đổi khi không hoàn lại.

**Vì sao sai / điều kiện đúng:** Đếm lá theo định nghĩa cổ điển chỉ đúng khi mọi lá của Ω đã chọn là đồng khả năng. Rút không hoàn lại làm thay đổi số phần tử còn lại và các xác suất có điều kiện. Nếu mô hình không bảo đảm đồng khả năng, không dùng số lá thuần túy làm mẫu số; cần chuyển sang mô hình đủ chi tiết phù hợp hoặc nêu thiếu dữ kiện.

**Tự sửa từng bước:** (1) Xác định thứ tự các bước và có hoàn lại hay không. (2) Tạo đúng một nhánh cho mỗi lựa chọn có thể xảy ra ở mỗi trạng thái. (3) Kiểm tra tính đồng khả năng của từng kết quả hoàn chỉnh/lá trước khi đếm. (4) Gom các lá thỏa biến cố, bảo đảm không đếm trùng. (5) Soát kết quả trong [0,1] và có thể đối chiếu bằng cách đếm cặp kết quả.

**Kiến thức tiền đề cần ôn:** B23 quy tắc nhân; B26 §26.4; B27 §27.2.

**Quay lại item đã có, không nhân bản câu hỏi:** `THPT-G10-B27-C01`, `THPT-G10-B27-C02`, `THPT-G10-B27-P03`, `THPT-G10-B27-P04`, `THPT-G10-B27-P05`.

**Placement:** `PUBLIC_FORMATIVE_D6_HELP`; mở khi học sinh cần, không dùng làm độc lập đánh giá.

### D6-G10-B27-02 · Lẫn mẫu có thứ tự, tổ hợp và biến cố ít nhất một

**Bài và outcome:** B27 · lựa chọn mô hình tổ hợp, biến cố đối

**Dấu hiệu học sinh đang vướng:** Đếm mẫu bằng tổ hợp nhưng đếm trường hợp thuận lợi theo chuỗi có thứ tự; hoặc đếm 'ít nhất một' bằng cộng các trường hợp giao nhau; cho rằng mọi cặp không thứ tự khi gieo hai xúc xắc phân biệt đều đồng khả năng.

**Vì sao sai / điều kiện đúng:** Tử và mẫu phải đếm theo cùng loại kết quả sơ cấp và cùng giả thiết đồng khả năng. Với chọn đồng thời k đối tượng phân biệt thành một nhóm đồng khả năng, dùng C(n,k) nhất quán. 'Ít nhất một' có thể chuyển sang biến cố đối 'không có', nhưng phải mô tả chính xác phần bù trong Ω.

**Tự sửa từng bước:** (1) Hỏi có xét thứ tự hay không và ghi vào định nghĩa Ω. (2) Với nhóm chọn đồng thời có khả năng như nhau, dùng tổ hợp cho cả tử và mẫu; với chuỗi nhiều bước, dùng kết quả có thứ tự nhất quán. (3) Kiểm tra các trường hợp thuận lợi rời nhau. (4) Thử biến cố đối để tránh đếm giao nhau. (5) Xác nhận 0≤P≤1; tự đối chiếu bằng một cách đếm khác nếu thuận tiện.

**Kiến thức tiền đề cần ôn:** B24 hoán vị/chỉnh hợp/tổ hợp; B26 biến cố đối; B27 §27.1, 27.3–27.4.

**Quay lại item đã có, không nhân bản câu hỏi:** `THPT-G10-B27-P01`, `THPT-G10-B27-P02`, `THPT-G10-B27-P05`, `THPT-G10-CHIX-W27-ANCHOR-01`.

**Placement:** `PUBLIC_FORMATIVE_D6_HELP`; mở khi học sinh cần, không dùng làm độc lập đánh giá.

## 3. Kiểm kê ID và an toàn

- HELP_ID mới: `D6-G10-B26-01`, `D6-G10-B26-02`, `D6-G10-B27-01`, `D6-G10-B27-02` = **4 unique**, không là `item_id`.
- 16 canonical IDs tham chiếu = 14 Formative (7 B26 + 7 B27) và 2 Written (1 Anchor là Written). Không thay stems/answers/solutions/rubrics/hints hoặc vai trò các item.
- Không lấy các câu đã xem giải làm Tự kiểm tra độc lập; không lộ held-out Readiness, không đẩy nội dung review/QA vào student UI.
- Đây là lời giải thích học thuật mới: `DELTA_C_ACADEMIC_MATERIAL`, cần NotebookLM review. Bài học/JS/PR #616 hiện tại không thay đổi bởi file này.

## 4. Yêu cầu NotebookLM

1. Theo 5 Permanent Sources THPT v2.0 và PDF SGK/SBT S1, kiểm `SOURCE_RECEIPT`, vị trí mục/trang đúng và phạm vi bắt buộc Core cho 4 HELP_ID.
2. Trả verdict theo từng HELP_ID, theo B26/B27, và kiểm mapping chính xác tới 16 canonical IDs mà không nhân bản.
3. Kiểm điều kiện đồng khả năng, định nghĩa Ω, kết quả có/không thứ tự, hoàn lại, giao/hợp/biến cố đối, xác suất rất bé; phân loại P0/P1/P2 và minimal delta.
4. Đối chiếu 4 thẻ với hint và D2 examples đã review: thẻ phải giúp sửa lỗi thực chất, không tiết lộ đáp án đánh giá, không bắt buộc AI Tutor.
5. Trả `D6_OVERALL`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA`, nêu `INSUFFICIENT_EVIDENCE` nếu thiếu S1 hoặc nguồn bank. Không suy rộng sang D5, Topic, Readiness, phát hành hoặc Mastery.

**FINAL STATE:** `NOT_REVIEWED`; `CONTENT_READY=HOLD`; `MERGE_DEPLOY=NO`.
