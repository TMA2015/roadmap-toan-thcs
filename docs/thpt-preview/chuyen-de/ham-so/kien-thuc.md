---
hide:
  - toc
pilot_scope: PILOT_PARTIAL_G10
---

<div data-thpt-r4 class="thpt-r4-screen"><p class="thpt-r4-eyebrow">CHUYÊN ĐỀ · KIẾN THỨC</p><p class="thpt-r4-lead">Hàm số và đồ thị · Hàm số bậc hai lớp 10.</p>
<nav class="thpt-r4-topic-steps" aria-label="Ba phần học của chuyên đề">
<a href="../kien-thuc/" aria-current="page">01 · Kiến thức</a>
<a href="../luyen-tap/">02 · Luyện tập</a>
<a href="../tu-kiem-tra/">03 · Tự kiểm tra</a>
</nav>
<nav class="thpt-r4-section-links" aria-label="Di chuyển nhanh trong bài"><a href="#ban-do-kien-thuc">Bản đồ</a><a href="#kien-thuc">Kiến thức</a><a href="#kien-thuc-lien-quan">Liên quan</a><a href="#dang-bai">Dạng bài</a><a href="#loi-sai-thuong-gap">Lỗi sai</a></nav></div>

# Kiến thức — Hàm số và đồ thị

## Bản đồ kiến thức

<div class="thpt-r4-flow" aria-label="Các mạch kiến thức liên quan"><span>THCS: Hàm số, phương trình bậc hai</span><b>→</b><span>Lớp 10: Hàm số bậc hai, đồ thị</span><b>→</b><span>Lớp 11–12: Biến thiên, đạo hàm, khảo sát</span></div>

Các nội dung liên quan giúp em kết nối kiến thức giữa các lớp.

## Kiến thức

=== "Khái niệm"

    Hàm số bậc hai có dạng \(y=ax^2+bx+c\) với \(a\neq0\), tập xác định \(\mathbb{R}\).

    Đưa về dạng đỉnh:

    \[
    y=a(x-h)^2+k,\qquad h=-\frac{b}{2a},\quad k=f(h).
    \]

=== "Đồ thị và tính chất"

    Đồ thị là parabol, trục đối xứng \(x=h\), đỉnh \(I(h;k)\). Khi \(a>0\) đồ thị mở lên và có GTNN \(k\); khi \(a<0\) đồ thị mở xuống và có GTLN \(k\).

    Chiều biến thiên đổi tại hoành độ đỉnh \(h\). Khi \(a>0\), hàm giảm rồi tăng với tập giá trị \(T=[k;+\infty)\); khi \(a<0\), tăng rồi giảm với \(T=(-\infty;k]\). Ở đây \(k=-\frac{\Delta}{4a}\), \(\Delta=b^2-4ac\).

=== "Ví dụ"

    Với \(y=x^2-4x+3=(x-2)^2-1\), đỉnh \(I(2;-1)\), trục \(x=2\), giao điểm với \(Ox\) có hoành độ \(1\) và \(3\).

## Kiến thức liên quan

- **Kiến thức nền THCS:** phương trình bậc hai và hàm số đơn giản.
- **Theo SGK KNTT:** [Lớp 10 · Chương VI · Bài 16](../../sgk/chuong-vi/bai-16.md).
- **Mở rộng sau này:** tính đơn điệu và các ứng dụng đạo hàm; chưa liên kết vì chưa biên soạn.

## Dạng bài

=== "Tìm đỉnh và trục"

    **Nhận diện:** biểu thức bậc hai cho theo hệ số \(a,b,c\) hoặc dạng đỉnh.

    **Phương pháp:** tính \(h=-b/(2a)\), rồi \(k=f(h)\).

    **Luyện ngay:** [Practice chuyên đề](luyen-tap.md). Câu Core của SGK cũng có thể tham chiếu ở Practice cơ bản bằng cùng ID, không phải mục Core chuyên đề.

=== "Vẽ đồ thị và giao trục"

    **Nhận diện:** yêu cầu xác định chiều mở, đỉnh, trục và các giao điểm.

    **Phương pháp 4 bước:** (1) Tìm đỉnh \(I\); (2) vẽ trục đối xứng, xác định chiều mở theo dấu \(a\); (3) tìm giao với \(Oy\), giao với \(Ox\) nếu có và một cặp điểm đối xứng; (4) vẽ parabol qua các điểm đặc trưng. Không mặc định có hai giao điểm với \(Ox\).

    **Luyện ngay:** [Luyện tập chuyên đề](luyen-tap.md).

=== "Thi tốt nghiệp THPT"

    Đây là **bộ lọc của các dạng bài phía trên**, không tạo thêm một kho dạng bài khác. Chỉ gắn nhãn đề thi theo **năm và nguồn xác minh**; chỉ bổ sung đề thi khi xác minh được nguồn.

    [Mở thư viện tự luận và bài mỏ neo](../../thu-vien/tu-luan.md).

## Lỗi sai thường gặp

- Nhầm dấu hoành độ đỉnh trong \(a(x-h)^2+k\).
- Kết luận luôn có hai nghiệm thực khi cắt trục hoành; thực tế có thể không có, có một nghiệm kép hoặc có hai nghiệm.
- Quên điều kiện \(a\neq0\) khi gọi hàm bậc hai.
