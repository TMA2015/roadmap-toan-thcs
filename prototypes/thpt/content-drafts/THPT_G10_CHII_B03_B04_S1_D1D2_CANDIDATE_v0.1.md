# Toán 10 KNTT — Chương II — Bài 3–4 — Kiến thức D1 và ví dụ D2 v0.1

**Trạng thái:** Chỉ biên soạn; NOT_REVIEWED, không phải CONTENT_READY.

## Phạm vi sách nguồn S1

Đã xem trực tiếp mục lục và trang mở đầu của Bài 3, Bài 4 từ PDF do chủ dự án lưu trên Google Drive:
- SGK Toán 10 KNTT tập 1: Bài 3, trang in 22–25; Bài 4, trang in 26–30; bài tập cuối Chương II, trang 31–32.
- SBT Toán 10 KNTT tập 1: Bài 3, trang in 16–18; Bài 4, trang in 19–23; bài tập cuối chương, trang 24–28; phần lời giải Chương II bắt đầu trang 88.
- Chưa rà từng hoạt động của toàn bộ các trang này nên không tuyên bố đã bao phủ hết Core hoặc SBT.

## Mười outcome cần phát triển và kiểm toán tiếp

Bài 3: nhận diện bất phương trình bậc nhất hai ẩn; thử điểm; đường biên; biểu diễn nửa mặt phẳng và dấu nghiêm/ngặt; lập mô hình thực tế.

Bài 4: nhận biết hệ; giao các miền nghiệm; tính khả thi; tối ưu hàm mục tiêu bậc nhất; điều kiện nguyên/không âm trong bài toán thực tế.

Những outcome này là ứng viên để xây ma trận, chưa có item_id chính thức.

## Bài 3 — Bất phương trình bậc nhất hai ẩn

### D1. Khái niệm

Bất phương trình bậc nhất hai ẩn có dạng \(ax+by<c\), \(ax+by\le c\), \(ax+by>c\) hoặc \(ax+by\ge c\), trong đó \(a,b,c\) là các số thực và **\(a,b\) không đồng thời bằng 0**.

Một cặp \((x_0,y_0)\) là nghiệm khi thay tọa độ vào làm bất phương trình đúng. Đường thẳng \(ax+by=c\) là đường biên. Với dấu \(\le\) hoặc \(\ge\), lấy cả đường biên; với dấu \(<\) hoặc \(>\), không lấy đường biên.

**Quy trình:** vẽ đường thẳng biên; chọn điểm thử không thuộc đường thẳng (thường dùng \(O(0,0)\) chỉ khi \(c\ne0\)); thay tọa độ; chọn phía thỏa mãn; ghi rõ có lấy biên hay không. Nếu biến là số lượng sản phẩm hoặc tiền hàng, nêu điều kiện miền giá trị phù hợp.

### D2. Ví dụ EX-G10-B03-01 — Không nghiêm ngặt

Giải bằng hình học \(x+2y\le4\). Đường biên đi qua \((4,0)\) và \((0,2)\). Tại \(O(0,0)\), vế trái là 0, thỏa mãn \(0\le4\), nên lấy nửa mặt phẳng chứa O, kể cả đường biên. Điểm \((2,1)\) cũng là nghiệm vì \(2+2=4\).

### D2. Ví dụ EX-G10-B03-02 — Nghiêm ngặt

Giải \(2x-y<1\), tương đương \(y>2x-1\). Lấy nửa mặt phẳng nằm trên đường thẳng \(y=2x-1\), không kể đường thẳng. \(O(0,0)\) thỏa; \((1,1)\) nằm trên đường biên, nên không thỏa.

### D2. Ví dụ EX-G10-B03-03 — Bài toán mô hình

Trộn \(x\) kg mặt hàng giá 140 nghìn đồng/kg với \(y\) kg mặt hàng giá 180 nghìn đồng/kg, sao cho đơn giá trung bình không quá 170 nghìn đồng/kg. Với \(x,y\ge0\) và **\(x+y>0\)**:
\[
\frac{140x+180y}{x+y}\le170
\iff y\le3x.
\]
Cặp \((1,3)\) cho đơn giá trung bình 170, thỏa; \((1,4)\) cho 172, không thỏa. Không được nhân với mẫu khi chưa xác định \(x+y>0\).

## Bài 4 — Hệ bất phương trình bậc nhất hai ẩn

### D1. Miền nghiệm và bài toán tối ưu

Nghiệm của hệ phải làm đúng **tất cả** bất phương trình. Miền nghiệm chung là giao của các nửa mặt phẳng, không phải hợp. Miền có thể rỗng, bị chặn hoặc không bị chặn.

Khi miền nghiệm là **đa giác lồi không rỗng và bị chặn**, hàm mục tiêu \(F(x,y)=px+qy\) đạt giá trị lớn nhất và nhỏ nhất tại ít nhất một đỉnh. Nếu cả một cạnh cùng tối ưu thì không được khẳng định nghiệm duy nhất. Với miền không bị chặn phải xét riêng sự tồn tại cực trị. Nếu sản phẩm không thể chia lẻ, kiểm tra điều kiện \(x,y\) nguyên.

### D2. Ví dụ EX-G10-B04-01 — Cực trị trên đa giác

Với \(x,y\ge0\), \(x+y\le6\), \(2x+y\le8\), miền nghiệm có bốn đỉnh \((0,0),(4,0),(2,4),(0,6)\). Tính \(F=3x+2y\) lần lượt được \(0,12,14,12\). Giá trị lớn nhất **14**, đạt tại \((2,4)\); nhỏ nhất 0 tại \((0,0)\).

### D2. Ví dụ EX-G10-B04-02 — Hệ vô nghiệm

Hệ \(x+y\le1\) và \(x+y\ge3\) vô nghiệm vì không có số thực vừa không quá 1 vừa ít nhất bằng 3. Đây là ví dụ cảnh báo về nhầm giao miền nghiệm thành hợp.

### D2. Ví dụ EX-G10-B04-03 — Bài toán tối ưu số nguyên

Một cửa hàng mua \(x\) sản phẩm A giá 20 triệu đồng/chiếc và \(y\) sản phẩm B giá 10 triệu đồng/chiếc, vốn tối đa 1.200 triệu đồng, tổng số không quá 100 sản phẩm. Lợi nhuận tương ứng 3,5 và 2 triệu đồng/chiếc.

Mô hình: \(x,y\in\mathbb Z_{\ge0}\), \(20x+10y\le1200\), \(x+y\le100\), tối đa hóa \(F=3{,}5x+2y\) (triệu đồng). Miền nghiệm liên tục có các đỉnh \((0,0),(60,0),(20,80),(0,100)\). Giá trị F lần lượt \(0,210,230,200\). Cực đại liên tục là **230 triệu** tại \((20,80)\), và vì điểm đó có tọa độ nguyên, nó cũng tối ưu cho bài toán thực tế.

## Chưa hoàn tất — không cấp Academic PASS

- D3: soạn câu hỏi canonical Core/Practice, đáp án, gợi ý và lời giải, theo outcome và SGK/SBT thực tế.
- D4: tự luận Written/Anchor dùng chung một thư viện, rubric và lời giải.
- D5: dựng hai SVG miền nghiệm và vùng đa giác tối ưu, chứng thực tọa độ từng nét.
- D6: hỗ trợ lỗi thử điểm trên đường biên, chọn sai phía, nhầm giao/hợp, bỏ điều kiện nguyên.
- S1: kiểm toán hoạt động và ví dụ ở mọi trang in SGK 22–32, SBT 16–28.
- Bài Tự kiểm tra cuối Chương II và nhánh Chuyên đề đánh giá riêng; tuyệt đối không công khai held-out keys trong Github.

**STATUS:** D1_D2_DRAFT; D3_D6_PENDING; NOTEBOOKLM_NOT_REVIEWED; CONTENT_READY_NO; MERGE_DEPLOY_NO.
