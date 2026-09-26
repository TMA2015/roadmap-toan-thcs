# Bài mỏ neo A25-010 – Năng suất và phần việc chung

> **Tầng:** Entrance10 · **Mạch:** Tỉ lệ – mô hình hóa – phương trình · **Lớp:** 9.  
> **Đề gốc:** [mục A25-010](bai-toan-kinh-dien.md#anchor-25-010) · **Đề tương ứng:** Đề luyện 03 – Bài II.

## Đề bài và giả thiết

Đội A làm một mình xong một công việc trong 20 ngày. Hai đội A và B cùng làm, năng suất mỗi đội **không đổi** và không cản trở nhau, thì hoàn thành công việc ấy trong 12 ngày.

1. Nếu chỉ có B làm, công việc hoàn thành sau bao nhiêu ngày?
2. Nếu hai đội cùng làm trong 4 ngày, họ hoàn thành được bao nhiêu phần công việc?

## Đọc đề: cái gì cộng được?

Thời gian hoàn thành **không thể cộng hoặc trừ trực tiếp**. Ta quy ước toàn bộ công việc bằng \(1\); khi cùng làm, các **phần công việc hoàn thành trong một ngày** mới cộng được.

Đặt \(r_A,r_B\) lần lượt là năng suất (công việc/ngày) của hai đội:
\[
r_A=\frac1{20},\qquad r_A+r_B=\frac1{12}.
\]

Tư duy lùi: muốn biết thời gian B làm một mình, cần biết \(r_B\). Muốn có \(r_B\), lấy năng suất chung trừ năng suất A.

## Ba mức gợi ý

<details><summary>Gợi ý 1 – Quy ước một đơn vị</summary>
Coi toàn bộ công việc là \(1\). Trong một ngày, A làm được phần nào?
</details>

<details><summary>Gợi ý 2 – Lập quan hệ đúng</summary>
Hai đội cùng làm được \(1/12\) công việc mỗi ngày, nên \(r_B=1/12-1/20\).
</details>

<details><summary>Gợi ý 3 – Kiểm tra đơn vị</summary>
Nếu \(r_B=1/30\) công việc/ngày, thời gian B làm một mình là \(1:(1/30)\) ngày.
</details>

## Lời giải chi tiết

**Bước 1 – Năng suất mỗi ngày.** Quy ước cả công việc bằng \(1\). Đội A làm được \(1/20\) công việc/ngày; cả hai đội làm được \(1/12\) công việc/ngày.

**Bước 2 – Năng suất B.**
\[
r_B=\frac1{12}-\frac1{20}
=\frac5{60}-\frac3{60}=\frac2{60}=\frac1{30}.
\]
Năng suất dương, phù hợp với thực tế: đội B có đóng góp vào tiến độ chung.

**Bước 3 – Thời gian B làm một mình.**
\[
t_B=\frac{\text{toàn bộ công việc}}{\text{năng suất B}}
=\frac1{1/30}=\boxed{30\text{ ngày}}.
\]

**Bước 4 – Khối lượng làm chung trong 4 ngày.**
\[
W_{4} =4(r_A+r_B)=4\cdot\frac1{12}=\boxed{\frac13\text{ công việc}}.
\]

**Kiểm tra chéo:** \(1/20+1/30=3/60+2/60=5/60=1/12\), đúng năng suất chung. Suy ra làm chung 12 ngày hoàn thành toàn bộ.

## Vì sao không lấy \(20-12=8\)?

\(20\) và \(12\) là **thời gian để hoàn thành toàn bộ việc trong hai tình huống khác nhau**. Trừ thời gian không cho ra năng suất B. Phải đổi về cùng đơn vị \(\text{công việc/ngày}\) rồi mới trừ. Cũng không được cộng 20 với 30 để ra thời gian chung.

## Biến thể tự luyện

1. A làm một mình 10 ngày, A+B làm chung 6 ngày. Tính thời gian B làm một mình. **Đối chiếu:** \(1/6-1/10=1/15\), vậy B làm 15 ngày.
2. Với đề gốc, sau khi hai đội cùng làm 4 ngày, đội B làm một mình phần còn lại. Cần thêm bao lâu? **Đối chiếu:** còn \(2/3\), thời gian \(=(2/3)/(1/30)=20\) ngày.
3. Với đề gốc, hai đội cùng làm 6 ngày, đội A làm phần còn lại một mình. Tổng thời gian từ khi bắt đầu là bao lâu? **Đối chiếu:** làm chung được \(1/2\), A cần thêm \(10\) ngày; tổng \(16\) ngày.

**Lỗi thường gặp:** nhầm thời gian với năng suất; quên quy ước toàn việc bằng 1; không nêu giả thiết năng suất không đổi; không kiểm tra đơn vị của kết quả.

[← Thư viện bài mỏ neo](kho-bai-mo-neo.md) · [CĐ03 Tỉ lệ](../03-ti-le-ti-le-thuc/index.md) · [CĐ24 Mô hình hóa](../24-bai-toan-thuc-te/index.md) · [Đề 03](de-luyen-03.md)
