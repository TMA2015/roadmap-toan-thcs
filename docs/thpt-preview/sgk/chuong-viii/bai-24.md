# Bài 24. Hoán vị, chỉnh hợp và tổ hợp

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VIII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Phân biệt hoán vị, chỉnh hợp và tổ hợp, chọn công thức phù hợp với tình huống.</p>
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

## Khi gặp khó khăn — tự tìm lỗi và học lại

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B24-01">
<summary>Nhầm nhóm với phân vai</summary>
<p><strong>Dấu hiệu:</strong> Đổi thứ tự các thành viên của một nhóm không phân vai nhưng lại coi là kết quả mới.</p>
<p><strong>Bản chất toán:</strong> Tổ hợp không xét thứ tự; chỉnh hợp gán k vai trò phân biệt. Với 0≤k≤n, A(n,k)=C(n,k)·k!.</p>
<p><strong>Tự sửa:</strong> Ôn B24 mục 2 (chỉnh hợp) và mục 3 (tổ hợp): hỏi đổi chỗ hai người có tạo phương án mới không để chọn A hay C. Nếu xếp toàn bộ k người đã chọn vào k vị trí phân biệt, dùng \(A_n^k=C_n^k\cdot k!\); nếu chỉ phân một số vai trò, đếm đúng số cách giao vai tương ứng.</p>
<p><strong>Kiến thức cần ôn:</strong> B23 quy tắc nhân, giai thừa; B24 mục 1.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B24-C02" href="../luyen-tap/?item=THPT-G10-B24-C02">Luyện lại câu 24-C02</a> · <a data-thpt-formative-id="THPT-G10-B24-P01" href="../luyen-tap/?item=THPT-G10-B24-P01">Luyện lại câu 24-P01</a> · <a data-thpt-formative-id="THPT-G10-B24-P02" href="../luyen-tap/?item=THPT-G10-B24-P02">Luyện lại câu 24-P02</a> · <a data-thpt-formative-id="THPT-G10-CHVIII-W24-ANCHOR-01" href="../../../thu-vien/tu-luan-chuong-viii/#thpt-g10-chviii-w24-anchor-01">Bài tự luận liên quan</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B24-02">
<summary>Gộp khối và đếm ràng buộc thiếu hoặc trùng</summary>
<p><strong>Dấu hiệu:</strong> Gộp hai người kề nhau thành khối nhưng quên hoán vị trong khối, hoặc các nhánh không loại trừ.</p>
<p><strong>Bản chất toán:</strong> Với hai người phân biệt A, B phải kề nhau, số thứ tự của nhóm sau khi gộp khối nhân thêm 2! cách đổi chỗ trong khối. «Ít nhất một» có thể đếm bằng phần bù khi tập tất cả xác định.</p>
<p><strong>Tự sửa:</strong> Ôn B24 mục 1 (hoán vị) và mục 2 (chỉnh hợp): nếu A, B phải đứng cạnh nhau, gộp thành một khối, đếm thứ tự các khối và nhân thêm \(2!\) thứ tự nội bộ; khi dùng phần bù, nêu rõ tập tất cả và tập bị loại, kiểm mỗi trường hợp được đếm đúng một lần.</p>
<p><strong>Kiến thức cần ôn:</strong> B23 chia trường hợp; B24 hoán vị/tổ hợp.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B24-P04" href="../luyen-tap/?item=THPT-G10-B24-P04">Luyện lại câu 24-P04</a> · <a data-thpt-formative-id="THPT-G10-B24-P05" href="../luyen-tap/?item=THPT-G10-B24-P05">Luyện lại câu 24-P05</a> · <a data-thpt-formative-id="THPT-G10-B24-P06" href="../luyen-tap/?item=THPT-G10-B24-P06">Luyện lại câu 24-P06</a></p>
</details>

## 3. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương VIII](luyen-tap.md) · tự luyện và xem lời giải sau khi làm.
- [Thư viện Written/Anchor Chương VIII](../../thu-vien/tu-luan-chuong-viii.md) · tự giải trên giấy.
- [Tổng quan Chương VIII](../chuong-viii.md).

<small>Nguồn: SGK Toán 10 KNTT tập 2, trang 66–71; SBT 54–55. Các ví dụ do dự án biên soạn, không chép nguyên văn bài SGK.</small>
