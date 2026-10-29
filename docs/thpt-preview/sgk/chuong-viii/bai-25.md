# Bài 25. Nhị thức Newton

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VIII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Kiến thức, điều kiện và ví dụ theo nguồn biên soạn B25 đã nhận NotebookLM D1–D2 PASS theo snapshot. Bài Core và Luyện tập được tích hợp để tự học; không có chấm điểm hoặc Skill Mastery.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VIII"><a href="../">Tổng quan Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Khái niệm, điều kiện và công thức

**Công thức.** Với n là số nguyên không âm,
(a+b)^n = Σ_(k=0..n) C(n,k) a^(n-k) b^k.
Có n+1 số hạng trước khi thu gọn các số hạng đồng dạng. Hệ số tổ hợp C(n,k)=C(n,n-k) và C(n,k)=C(n-1,k-1)+C(n-1,k) với 1≤k≤n-1. Khi b là một biểu thức âm, dấu âm ở b^k phải được giữ: (-1)^k khác nhau cho số mũ chẵn/lẻ.

**Đọc hệ số.** Trong (a+bx)^n, hệ số của x^r là C(n,r)a^(n-r)b^r (0≤r≤n), với a,b là hằng số. Với biểu thức có các lũy thừa x khác nhau hoặc x^-1, phải viết số mũ tổng quát, giải phương trình số mũ cần tìm, và kiểm tra điều kiện xác định x≠0 nếu có.

## 2. Ví dụ, cách kiểm tra và lỗi hay gặp

**Ví dụ đã giải 1.** Hệ số x² trong (1-2x)^5 là C(5,2)×(-2)^2=10×4=40; dấu dương do mũ chẵn. Hệ số x³ là C(5,3)×(-2)^3=10×(-8)=-80.

**Ví dụ đã giải 2.** Tổng tất cả hệ số của đa thức f(x)=(2+x)^4 bằng f(1)=3^4=81. Tổng có trọng số dấu luân phiên bằng f(-1)=1. Dùng thay x=1 chỉ khi biết f(x) là đa thức hữu hạn và hiểu rõ hệ số cần cộng.

**Phạm vi SGK:** Các câu B25-P02/P05 được giữ ở mức hỗ trợ mở rộng, B25-P06 ở mức chuyên sâu tự chọn; bài B25-P07 đã được reviewer xét riêng cho luyện tập Core-level. Không dùng các câu mở rộng để bắt buộc đạt chuẩn Core.

**Lỗi hay gặp.** Nhầm k và n-k; bỏ hệ số b^k; quên dấu âm với số mũ lẻ; đọc hệ số x^r sai khi a hoặc b còn chứa x; tự áp dụng f(1) cho tổng *một số* hệ số không thích hợp.

## 3. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương VIII](luyen-tap.md) · giữ nguyên ID canonical, chỉ luyện tập.
- [Thư viện Written/Anchor Chương VIII](../../thu-vien/tu-luan-chuong-viii.md) · tự giải trên giấy.
- [Tổng quan Chương VIII](../chuong-viii.md).

<small>Nguồn: SGK Toán 10 KNTT tập 2, trang 72–77; SBT 55–56. Các ví dụ do dự án biên soạn, không chép nguyên văn bài SGK. D1–D2 chỉ PASS theo nội dung snapshot, không cấp quyền phát hành.</small>
