# Bài 23. Quy tắc đếm

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VIII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Kiến thức, điều kiện và ví dụ theo nguồn biên soạn B23 đã nhận NotebookLM D1–D2 PASS theo snapshot. Bài Core và Luyện tập được tích hợp để tự học; không có chấm điểm hoặc Skill Mastery.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VIII"><a href="../">Tổng quan Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Khái niệm, điều kiện và công thức

**Quy tắc cộng.** Nếu một lựa chọn được thực hiện theo đúng một trong các trường hợp A1,...,Ak **đôi một không giao nhau**, số cách là \(m_1+\cdots+m_k\). Khi các trường hợp chồng lấn, cần loại trùng hoặc chia lại thành các trường hợp rời nhau; không cộng máy móc.

**Quy tắc nhân.** Một quy trình nhiều bước liên tiếp với m1 lựa chọn ở bước 1, m2 lựa chọn ở bước 2 cho mỗi phương án bước 1, ... thì số cách là tích \(m_1m_2\cdots m_k\) khi số cách ở mỗi bước là cố định theo lịch sử phù hợp. Nếu số khả năng ở bước sau phụ thuộc vào lựa chọn trước, chia trường hợp hoặc cộng số cách theo nhánh. Phân biệt "hoặc" loại trừ (cộng) với "và" liên tiếp (nhân).

## 2. Ví dụ, cách kiểm tra và lỗi hay gặp

**Ví dụ đã giải 1.** Một học sinh chọn đúng một môn câu lạc bộ: 4 môn nghệ thuật hoặc 3 môn thể thao, mỗi lựa chọn là một môn riêng, tổng 4+3=7 cách. Nếu chọn một môn nghệ thuật **và** một môn thể thao, có 4×3=12 cặp.

**Ví dụ đã giải 2.** Từ các chữ số 0,1,2,3,4 lập số có hai chữ số khác nhau. Chữ số hàng chục có 4 lựa chọn (không phải 0), hàng đơn vị còn 4; có 4×4=16 số. Nếu cho phép lặp chữ số, hàng đơn vị có 5 lựa chọn, được 20 số.

**Lỗi hay gặp.** Cộng các nhóm không rời nhau; nhân khi cần rẽ nhánh; cho phép hàng đầu bằng 0; quên điều kiện chữ số khác nhau; giả sử tất cả bước đều có cùng số lựa chọn.

## 3. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương VIII](luyen-tap.md) · giữ nguyên ID canonical, chỉ luyện tập.
- [Thư viện Written/Anchor Chương VIII](../../thu-vien/tu-luan-chuong-viii.md) · tự giải trên giấy.
- [Tổng quan Chương VIII](../chuong-viii.md).

<small>Nguồn: SGK Toán 10 KNTT tập 2, trang 59–64; SBT 50–52. Các ví dụ do dự án biên soạn, không chép nguyên văn bài SGK. D1–D2 chỉ PASS theo nội dung snapshot, không cấp quyền phát hành.</small>
