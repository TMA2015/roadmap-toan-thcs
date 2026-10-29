# Bài 27. Thực hành tính xác suất theo định nghĩa cổ điển

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG IX · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Kiến thức, điều kiện đồng khả năng và ví dụ đã được NotebookLM review D1–D2 theo đúng snapshot B27. Core/Luyện tập là hình thức tự đối chiếu, chưa chấm điểm hoặc ghi Mastery.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Học và luyện Chương IX"><a href="../">Tổng quan Chương IX</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Kiến thức SGK — khái niệm và điều kiện

### 27.1. Dùng quy tắc đếm / tổ hợp

Khi chọn đều k vật trong n vật **khác nhau** và không quan tâm thứ tự, số kết quả sơ cấp là C(n,k). Với biến cố A, liệt kê các trường hợp thuận lợi rồi dùng P(A)=n(A)/C(n,k), *nếu mọi nhóm k phần tử có khả năng như nhau*. Nếu quan tâm thứ tự, dùng chỉnh hợp hoặc liệt kê theo bước; không trộn mẫu có thứ tự với mẫu không thứ tự khi lấy tỉ số.

### 27.2. Sơ đồ cây và xác suất theo nhiều bước

Với phép thử theo giai đoạn, sơ đồ cây giúp liệt kê mọi đường đi từ gốc đến lá, phân biệt “có hoàn lại” và “không hoàn lại”. Trong mô hình hữu hạn đồng khả năng, có thể đếm lá thuận lợi / tổng lá **chỉ khi các lá có cùng xác suất**. Nếu không đồng khả năng, cần tính xác suất cho từng nhánh theo điều kiện (nếu ngoài phạm vi SGK Core, reviewer yêu cầu phân tầng).

### 27.3. Xác suất của biến cố đối

Để tính “ít nhất một”, hãy xét biến cố đối “không có lần nào” khi đó thuận tiện hơn; P(A)=1−P(Ā). Cẩn thận nhận diện tập bổ sung theo **đúng không gian mẫu**. Không được lấy tổng xác suất các trường hợp giao nhau nếu chưa xử lí phần giao.

### 27.4. Lựa chọn mô hình & tự kiểm

Trước khi tính, học sinh tự hỏi: (1) Các kết quả sơ cấp là gì? (2) Có đồng khả năng không? (3) Có hoàn lại không? (4) Thứ tự có quan trọng không? (5) Biến cố thuận lợi là những trường hợp nào? (6) Kết quả cuối cùng có nằm trong [0,1] và có thể kiểm tra bằng cách khác không?

## 2. Ví dụ đã giải và tự kiểm tra lập luận

**Ví dụ đã giải 1 (EX-G10-B27-01) — Chọn nhóm không phân biệt thứ tự.** Có 3 phiếu đánh số 1,2,3 và 2 phiếu đánh số 4,5. Chọn đều 2 phiếu khác nhau cùng lúc. Tổng số nhóm C(5,2)=10. Biến cố “cả hai phiếu có số không vượt 3” có C(3,2)=3 nhóm, vậy xác suất 3/10. Không nhân thêm 2! vì nhóm không xét thứ tự.

**Ví dụ đã giải 2 (EX-G10-B27-02) — Sơ đồ cây ba phép thử.** Tung ba đồng xu cân đối độc lập, ghi kết quả từng lần (N = ngửa, S = sấp). Có 2³=8 bộ kết quả đồng khả năng: NNN, NNS, NSN, SNN, NSS, SNS, SSN, SSS. Biến cố đúng hai mặt ngửa là {NNS, NSN, SNN}, xác suất 3/8. Có thể minh họa bằng cây ba tầng; mỗi lá đúng một chuỗi.

**Ví dụ đã giải 3 (EX-G10-B27-03) — Tính biến cố đối.** Gieo một xúc xắc cân đối hai lần độc lập. A: “Có ít nhất một lần ra mặt 6”. Ā: “Cả hai lần đều khác 6” có 5·5=25 bộ, Ω có 36 bộ, nên P(A)=1−25/36=11/36. Không cộng 1/6+1/6=1/3 vì trường hợp cả hai lần cùng ra 6 sẽ bị tính hai lần.

## 3. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương IX](luyen-tap.md) · cùng ID canonical đã được review.
- [Thư viện Written/Anchor Chương IX](../../thu-vien/tu-luan-chuong-ix.md) · giải trên giấy trước khi mở rubric.
- [Tổng quan Chương IX](../chuong-ix.md).

<small>Nguồn S1 đã được reviewer xác nhận: SGK Toán 10 KNTT tập 2 tr.83–87, SBT tr.65–69. Nội dung biên soạn của dự án, NotebookLM PASS theo snapshot D1–D2; D5 hình chuyên biệt và D6 nghiệm thu website vẫn chưa hoàn tất.</small>
