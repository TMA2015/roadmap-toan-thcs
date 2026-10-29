# Bài 23. Quy tắc đếm

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VIII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Phân biệt quy tắc cộng và quy tắc nhân, đếm số trường hợp không thiếu hoặc trùng.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VIII"><a href="../">Tổng quan Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Khái niệm, điều kiện và công thức

**Quy tắc cộng.** Nếu một lựa chọn được thực hiện theo đúng một trong các trường hợp A1,...,Ak **đôi một không giao nhau**, số cách là \(m_1+\cdots+m_k\). Khi các trường hợp chồng lấn, cần loại trùng hoặc chia lại thành các trường hợp rời nhau; không cộng máy móc.

**Quy tắc nhân.** Một quy trình nhiều bước liên tiếp với m1 lựa chọn ở bước 1, m2 lựa chọn ở bước 2 cho mỗi phương án bước 1, ... thì số cách là tích \(m_1m_2\cdots m_k\) khi số cách ở mỗi bước là cố định theo lịch sử phù hợp. Nếu số khả năng ở bước sau phụ thuộc vào lựa chọn trước, chia trường hợp hoặc cộng số cách theo nhánh. Phân biệt "hoặc" loại trừ (cộng) với "và" liên tiếp (nhân).

## 2. Ví dụ, cách kiểm tra và lỗi hay gặp

**Ví dụ đã giải 1.** Một học sinh chọn đúng một môn câu lạc bộ: 4 môn nghệ thuật hoặc 3 môn thể thao, mỗi lựa chọn là một môn riêng, tổng 4+3=7 cách. Nếu chọn một môn nghệ thuật **và** một môn thể thao, có 4×3=12 cặp.

**Ví dụ đã giải 2.** Từ các chữ số 0,1,2,3,4 lập số có hai chữ số khác nhau. Chữ số hàng chục có 4 lựa chọn (không phải 0), hàng đơn vị còn 4; có 4×4=16 số. Nếu cho phép lặp chữ số, hàng đơn vị có 5 lựa chọn, được 20 số.

**Lỗi hay gặp.** Cộng các nhóm không rời nhau; nhân khi cần rẽ nhánh; cho phép hàng đầu bằng 0; quên điều kiện chữ số khác nhau; giả sử tất cả bước đều có cùng số lựa chọn.

## Khi gặp khó khăn — tự tìm lỗi và học lại

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B23-01">
<summary>Cộng hay nhân không theo cấu trúc lựa chọn</summary>
<p><strong>Dấu hiệu:</strong> Dựa máy móc vào từ «hoặc» hay «và» mà không kiểm tra có các trường hợp rời nhau hoặc các bước liên tiếp.</p>
<p><strong>Bản chất toán:</strong> Quy tắc cộng áp dụng cho các trường hợp loại trừ nhau; quy tắc nhân cho các bước lựa chọn. Khi nhóm giao nhau hoặc số cách mỗi bước tùy nhánh, cần chia trường hợp chính xác.</p>
<p><strong>Tự sửa:</strong> Ôn B23 mục 1–2: mô tả một kết quả hoàn chỉnh, vẽ các nhánh loại trừ hoặc các bước nối tiếp, kiểm tra đếm trùng.</p>
<p><strong>Kiến thức cần ôn:</strong> Tập hợp rời nhau, quy tắc nhân; B23 mục 1–2.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B23-C01" href="../luyen-tap/?item=THPT-G10-B23-C01">Luyện lại câu 23-C01</a> · <a data-thpt-formative-id="THPT-G10-B23-C02" href="../luyen-tap/?item=THPT-G10-B23-C02">Luyện lại câu 23-C02</a> · <a data-thpt-formative-id="THPT-G10-B23-P06" href="../luyen-tap/?item=THPT-G10-B23-P06">Luyện lại câu 23-P06</a> · <a data-thpt-formative-id="THPT-G10-CHVIII-W23-01" href="../../../thu-vien/tu-luan-chuong-viii/#thpt-g10-chviii-w23-01">Bài tự luận liên quan</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B23-02">
<summary>Đếm sai số có chữ số 0 và phụ thuộc nhánh</summary>
<p><strong>Dấu hiệu:</strong> Cho chữ số đầu bằng 0; nhân các lựa chọn như cố định dù có nhánh khác nhau.</p>
<p><strong>Bản chất toán:</strong> Chữ số đầu của số tự nhiên có số chữ số xác định phải khác 0. Khi số cách bước sau phụ thuộc lựa chọn trước, tách các nhánh rời nhau rồi cộng tích; ghi rõ có lặp hay không.</p>
<p><strong>Tự sửa:</strong> Ôn B23 mục 2: chọn trường hợp chữ số cuối bằng 0/khác 0 nếu có điều kiện chẵn, lập bảng số lựa chọn từng bước, kiểm không giao nhau.</p>
<p><strong>Kiến thức cần ôn:</strong> Quy tắc cộng/nhân; điều kiện chữ số đầu; B23 mục 2.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B23-P01" href="../luyen-tap/?item=THPT-G10-B23-P01">Luyện lại câu 23-P01</a> · <a data-thpt-formative-id="THPT-G10-B23-P05" href="../luyen-tap/?item=THPT-G10-B23-P05">Luyện lại câu 23-P05</a></p>
</details>

## 3. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương VIII](luyen-tap.md) · tự luyện và xem lời giải sau khi làm.
- [Thư viện Written/Anchor Chương VIII](../../thu-vien/tu-luan-chuong-viii.md) · tự giải trên giấy.
- [Tổng quan Chương VIII](../chuong-viii.md).

<small>Nguồn: SGK Toán 10 KNTT tập 2, trang 59–64; SBT 50–52. Các ví dụ do dự án biên soạn, không chép nguyên văn bài SGK.</small>
