# Bài 24. Hoán vị, chỉnh hợp và tổ hợp

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VIII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Kiến thức, điều kiện và ví dụ theo nguồn biên soạn B24 đã nhận NotebookLM D1–D2 PASS theo snapshot. Bài Core và Luyện tập được tích hợp để tự học; không có chấm điểm hoặc Skill Mastery.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VIII"><a href="../">Tổng quan Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Khái niệm, điều kiện và công thức

**Điều kiện chung.** Có \(n\) đối tượng **phân biệt**, \(n\) nguyên không âm. Với \(0\le k\le n\):
- Hoán vị của n đối tượng: \(P_n=n!\), với \(0!=1\).
- Chỉnh hợp chập k (chọn k phần tử và **xếp thứ tự**): \(A_n^k=\dfrac{n!}{(n-k)!}\).
- Tổ hợp chập k (chọn nhóm k phần tử, **không** xét thứ tự): \(C_n^k=\dfrac{n!}{k!(n-k)!}\).
- Công thức liên hệ \(A_n^k=C_n^k\cdot k!\) vì mỗi nhóm k phần tử có k! thứ tự.

**Hướng chọn phương pháp.** Hỏi "chọn nhóm" mà không phân vai → tổ hợp; "xếp k người vào k vị trí phân biệt" → chỉnh hợp; "xếp tất cả" → hoán vị. Chọn nhóm rồi phân vai là hai bước: số nhóm nhân số phân vai **sau** khi nhóm được chọn, nếu mỗi nhóm có cùng số cách phân vai.

## 2. Ví dụ, cách kiểm tra và lỗi hay gặp

**Ví dụ đã giải 1.** Từ 7 học sinh chọn 3 bạn làm nhóm trực nhật (không phân vai): C(7,3)=35. Nếu lập nhóm 3 bạn và cử đúng một trưởng nhóm, mỗi nhóm có 3 lựa chọn, nên có 35×3=105 phương án. Không nhầm bài thứ hai với 7×6×5 vì hai bạn còn lại không được phân biệt vai trò.

**Ví dụ đã giải 2.** Xếp 4 quyển sách khác nhau lên một giá theo một hàng có 4!=24 cách. Nếu A và B phải kề nhau, gộp thành khối [AB], cùng 2 sách còn lại tạo 3 đối tượng có 3! thứ tự; khối có 2 hoán đổi bên trong, tổng 2×3!=12 cách. Việc gom khối chỉ dùng khi điều kiện kề nhau được mô tả chính xác.

**Lỗi hay gặp.** Tổ hợp và chỉnh hợp dùng lẫn nhau; gộp khối mà quên hoán vị trong khối; đếm thiếu/đếm hai lần các nhóm có ràng buộc; dùng công thức với k>n; bỏ qua việc các đối tượng có phân biệt hay không.

## 3. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương VIII](luyen-tap.md) · giữ nguyên ID canonical, chỉ luyện tập.
- [Thư viện Written/Anchor Chương VIII](../../thu-vien/tu-luan-chuong-viii.md) · tự giải trên giấy.
- [Tổng quan Chương VIII](../chuong-viii.md).

<small>Nguồn: SGK Toán 10 KNTT tập 2, trang 65–71; SBT 53–54. Các ví dụ do dự án biên soạn, không chép nguyên văn bài SGK. D1–D2 chỉ PASS theo nội dung snapshot, không cấp quyền phát hành.</small>
