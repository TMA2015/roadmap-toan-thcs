# Hồ sơ rà soát học thuật độc lập — các thay đổi kiến thức 25/25 chuyên đề

**Trạng thái:** DRAFT · chưa được NotebookLM phản biện độc lập · không phải chứng nhận PASS.

**Nguồn được trích:** [Draft PR #535](https://github.com/TMA2015/roadmap-toan-thcs/pull/535), Git commit `91ea4fbbb1648edcd00589f7ee94e720a4ef0aff` (sau khi đã rút gọn ví dụ trùng lặp CĐ09). Các đoạn dưới đây được trích **nguyên văn từ diff Markdown của nhánh tích hợp**; những phần không sửa của các bài học **không được chép lại**.

**Phạm vi:** Chỉ phần **01 · Đọc & hiểu** của 25 chuyên đề. Trong 25 chuyên đề, 24 chuyên đề có đoạn Markdown bổ sung/sửa; CĐ10 sửa trực tiếp infographic SVG. Không được coi đây là kiểm thử Core, Practice, Skill, Readiness, đề thi hay toàn bộ trải nghiệm động.

## Hướng dẫn đối chiếu

Dùng 25 PDF bài học hiện có làm nguồn **ngữ cảnh của bài học cũ**, SGK/SBT KNTT làm nguồn chuẩn học thuật nếu có và tài liệu này làm bằng chứng **chính xác cho thay đổi chưa phát hành**. Lưu ý CĐ01 là bản đồ định hướng; CĐ22 có phần kết nối/chuẩn bị Toán 10. Nếu một PDF cũ không chứa đoạn mới, đó là bình thường, **không** kết luận ngay bài học hiện tại thiếu đoạn đó.

Chỉ ghi nhận vấn đề khi có bằng chứng cụ thể. Xếp riêng: **lỗi chắc chắn cần sửa** (toán học, điều kiện, suy luận, ví dụ sai) và **cải thiện có giá trị** (chiều sâu, lời dẫn, ví dụ đối chứng, cách giải thích, cách tra cứu). Tránh lặp lại kiến nghị mà bài học đã có sẵn. Không cấp phép phát hành tự động.

## CĐ10 — thay đổi infographic (không có Markdown mới)

Tệp: [10-03-ham-bac-nhat-duong-thang.svg](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/assets/infographics/10/10-03-ham-bac-nhat-duong-thang.svg)

Vấn đề: cách chọn hai giao điểm với trục tọa độ cho `y=ax+b` khi `b=0` cho hai điểm trùng nhau. Phần mới đặt trường hợp `b=0` chọn điểm `(1;a)` khác `(0;0)` (với `a≠0`). Kiểm tra cả **độ đúng nội dung** và **khả năng đọc chữ khi xem SVG**; tài liệu trích xuất không thay thế kiểm tra hình ảnh.

<details>
<summary>Trích đoạn SVG thay đổi (chỉ để kiểm tra nội dung chữ)</summary>

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1414" viewBox="0 0 1000 1414"><rect width="1000" height="1414" fill="#fff"/><style>.t{font-family:Arial,sans-serif;fill:#111}.h{font-size:36px;font-weight:700}.s{font-size:23px;font-weight:700}.b{font-size:19px}.box{fill:#fff;stroke:#333;stroke-width:2;rx:18}.m{fill:#f5f5f5}</style><text x="500" y="68" text-anchor="middle" class="t h">CHUYÊN ĐỀ 10 – HÀM SỐ VÀ ĐỒ THỊ</text><text x="500" y="106" text-anchor="middle" class="t s">Infographic 3 – Hàm số bậc nhất và đường thẳng</text><rect x="55" y="145" width="890" height="190" class="box m"/><text x="85" y="190" class="t s">1. Dạng tổng quát</text><text x="85" y="240" class="t b">y = ax + b, với a ≠ 0</text><text x="85" y="280" class="t b">a: hệ số góc • b: tung độ gốc • đồ thị: đường thẳng</text><text x="85" y="315" class="t b">Nếu b = 0 thì y = ax và đồ thị đi qua O(0;0).</text><rect x="55" y="365" width="425" height="310" class="box"/><text x="85" y="410" class="t s">2. Cách vẽ nhanh</text><text x="85" y="455" class="t b">Bước 1: lấy A(0;b).</text><text x="85" y="500" class="t b">Nếu b ≠ 0: B(−b/a;0).</text><text x="85" y="545" class="t b">Nếu b = 0: B(1;a).</text><text x="85" y="590" class="t b">Bước 2: nối hai điểm A, B.</text><text x="85" y="635" class="t b">A và B phân biệt (a ≠ 0).</text><rect x="520" y="365" width="425" height="310" class="box m"/><text x="550" y="410" class="t s">3. Ý nghĩa của a và b</text><text x="550" y="455" class="t b">a &gt; 0: đường thẳng đi lên.</text><text x="550" y="500" class="t b">a &lt; 0: đường thẳng đi xuống.</text><text x="550" y="545" class="t b">|a| lớn → đường thẳng dốc hơn.</text><text x="550" y="590" class="t b">b là tung độ khi x = 0.</text><text x="550" y="635" class="t b">Đồ thị cắt Oy tại (0;b).</text><rect x="55" y="705" width="890" height="315" class="box"/><text x="85" y="750" class="t s">4. Vị trí tương đối của hai đường thẳng</text><text x="85" y="810" class="t b">d₁: y = a₁x + b₁     d₂: y = a₂x + b₂</text><text x="100" y="865" class="t b">Cắt nhau: a₁ ≠ a₂</text><text x="100" y="910" class="t b">Song song: a₁ = a₂ và b₁ ≠ b₂</text><text x="100" y="955" class="t b">Trùng nhau: a₁ = a₂ và b₁ = b₂</text><rect x="55" y="1050" width="890" height="220" class="box m"/><text x="85" y="1095" class="t s">5. Lỗi cần tránh</text><text x="85" y="1140" class="t b">• Tính sai một trong hai điểm khi vẽ.</text><text x="85" y="1180" class="t b">• Nhầm a với b khi xét song song hoặc cắt nhau.</text><text x="85"
```

</details>

---

## CĐ01 — 01-ban-do-chuong-trinh

Nguồn nhánh tích hợp: [docs/kien-thuc/01-ban-do-chuong-trinh/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/01-ban-do-chuong-trinh/index.md)

**Nội dung bổ sung/sửa nguyên văn:**


### 3.8A. Tra cứu ngược — khi chưa hiểu, nên mở chuyên đề nào?

Không cần đọc lại toàn bộ Roadmap mỗi khi gặp khó. Hãy tìm đúng **thao tác đang vướng**, mở chuyên đề giải thích thao tác đó, rồi quay lại kiến thức nền **chỉ khi cần**.

| Khi gặp khó ở... | Trang kiến thức cần mở trước | Nếu vẫn vướng, xem lại nền |
|---|---|---|
| Rút gọn phân thức nhưng quên điều kiện hoặc không tìm được nhân tử chung | [CĐ07 – Phân thức](../07-phan-thuc-dai-so/index.md) | [CĐ06 – Phân tích đa thức](../06-phan-tich-da-thuc/index.md) |
| Giải phương trình sai ở bước chuyển vế, đổi dấu hoặc gộp hạng tử | [CĐ08 – Phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md) | [CĐ04 – Biểu thức đại số](../04-bieu-thuc-dai-so/index.md) |
| Chưa biết chọn cặp tam giác để chứng minh đồng dạng | [CĐ17 – Thales và đồng dạng](../17-thales-dong-dang/index.md) | [CĐ13 – Góc](../13-goc-va-duong-thang/index.md), [CĐ14 – Tam giác](../14-tam-giac/index.md) |
| Nhầm tâm nội tiếp với ngoại tiếp, hoặc đường cao với trung trực | [CĐ15 – Các đường đặc biệt](../15-duong-dong-quy/index.md) | [CĐ14 – Tam giác](../14-tam-giac/index.md) |
| Không biết phải liệt kê những kết quả nào để tính xác suất | [CĐ23 – Xác suất](../23-xac-suat/index.md) | [CĐ02 – Số và phép tính](../02-so-va-phep-tinh/index.md) nếu vướng cách đếm đơn giản |
| Giải được phương trình nhưng không biết nghiệm có hợp lý với bài toán thực tế | [CĐ24 – Mô hình hóa](../24-bai-toan-thuc-te/index.md) | [CĐ08 – Phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md) hoặc [CĐ09 – Hệ phương trình](../09-he-phuong-trinh/index.md) |

**Ví dụ tìm lại kiến thức theo hai bước.** Với phân thức \((x^2-4)/(x^2-2x)\), học sinh nên mở [CĐ07](../07-phan-thuc-dai-so/index.md) để xác định điều kiện \(x\ne0,2\) trước khi rút gọn. Nếu không nhớ \(x^2-4=(x-2)(x+2)\), hãy quay lại [CĐ05 – Hằng đẳng thức](../05-7-hang-dang-thuc/index.md) và [CĐ06 – Phân tích đa thức](../06-phan-tich-da-thuc/index.md). Rút gọn được \((x+2)/x\), nhưng vẫn phải **giữ điều kiện gốc** \(x\ne0,2\).

> Đây là **gợi ý tra cứu**, không phải chẩn đoán tự động hay thứ tự học bắt buộc. Một lỗi có thể do nhiều nguyên nhân; chỉ quay lại kiến thức nền mà mình thực sự chưa hiểu.


---

## CĐ02 — 02-so-va-phep-tinh

Nguồn nhánh tích hợp: [docs/kien-thuc/02-so-va-phep-tinh/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/02-so-va-phep-tinh/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.8A. Chọn ƯCLN hay BCNN — hiểu qua cùng hai số

**Câu hỏi quyết định không phải là có hai số nào, mà là đang tìm “lớn nhất để chia đều” hay “nhỏ nhất để cùng lặp lại”.**

Cùng dùng hai số \(24\) và \(36\):

| Tình huống | Vì sao dùng công cụ đó? | Kết quả |
|---|---|---|
| Có 24 bút xanh và 36 bút đỏ. Chia thành **nhiều túi giống nhau nhất**, không dư bút, mỗi túi đều có cả hai màu. | Số túi phải là **ước chung** của 24 và 36; để số túi lớn nhất, lấy **ƯCLN**. | \(\operatorname{ƯCLN}(24,36)=12\) túi; mỗi túi có 2 bút xanh và 3 bút đỏ. |
| Hai đèn nháy sau mỗi 24 giây và 36 giây, vừa nháy cùng lúc. Hỏi sau ít nhất bao nhiêu giây lại cùng nháy? | Thời điểm cùng nháy phải là **bội chung dương** của 24 và 36; để sớm nhất, lấy **BCNN**. | \(\operatorname{BCNN}(24,36)=72\) giây. |

**Tự kiểm tra bằng phân tích thừa số nguyên tố:**

- \(24=2^3\cdot3\), \(36=2^2\cdot3^2\).
- ƯCLN lấy **số mũ nhỏ nhất** của các thừa số chung: \(2^2\cdot3=12\).
- BCNN lấy **số mũ lớn nhất** của tất cả thừa số xuất hiện: \(2^3\cdot3^2=72\).
- Kiểm tra: **12 là ước chung** vì cả 24 và 36 đều chia hết cho 12; **72 là bội chung** vì 72 chia hết cho cả 24 và 36.

> **Bẫy hay gặp:** “Chia thành các nhóm” chưa tự động có nghĩa là ƯCLN. Phải xem đề hỏi **số nhóm lớn nhất**, kích thước mỗi nhóm, hay một đại lượng khác. Trước khi tính, hãy nói rõ đáp số sẽ là **số túi**, **số giây**, hay một đại lượng gì.


---

## CĐ03 — 03-ti-le-ti-le-thuc

Nguồn nhánh tích hợp: [docs/kien-thuc/03-ti-le-ti-le-thuc/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/03-ti-le-ti-le-thuc/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.4A. Dãy tỉ số bằng nhau khi đề cho tổng có hệ số (mở rộng)

Công thức dãy tỉ số ở mục 3.4 không chỉ dùng khi biết \(x+y\). Nếu

\[
\frac{x}{a}=\frac{y}{b}=k\quad (a,b\ne0),
\]

thì \(x=ak,\ y=bk\). Với các hệ số \(m,n\), ta có **\(mx+ny=(ma+nb)k\)**. Nếu \(ma+nb\ne0\), có thể tìm \(k\) từ biểu thức ghép hệ số đó.

**Ví dụ từng bước:** Cho \(x/2=y/3\) và \(2x+3y=26\). Tìm \(x,y\).

1. Đặt \(x/2=y/3=k\), suy ra \(x=2k\), \(y=3k\).
2. Thay vào điều kiện còn lại: \(2(2k)+3(3k)=26\), tức \(13k=26\).
3. Suy ra \(k=2\), nên **\(x=4,\ y=6\)**.
4. Kiểm tra: \(4/2=6/3=2\) và \(2\cdot4+3\cdot6=26\).

**Vì sao phải giữ hệ số?** Điều kiện \(2x+3y=26\) **không phải** \(x+y=26\). Không được tự đổi một tổng có hệ số thành tổng không có hệ số rồi dùng công thức dãy tỉ số.

> Đây là một cách **vận dụng đại số từ kiến thức tỉ lệ thức**, không cần ghi nhớ một quy tắc mới. Nếu hệ số trước \(k\) bằng 0, phải xét lại điều kiện thay vì chia cho 0.


---

## CĐ04 — 04-bieu-thuc-dai-so

Nguồn nhánh tích hợp: [docs/kien-thuc/04-bieu-thuc-dai-so/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/04-bieu-thuc-dai-so/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.2A. Vì sao phải thu gọn trước khi xác định bậc?

Định nghĩa bậc của đa thức ở mục 3.2 có một điều kiện rất quan trọng: **xét đa thức sau khi gộp các hạng tử đồng dạng**. Bậc cao nhất nhìn thấy lúc đầu có thể biến mất.

**Ví dụ:** Xét \(P(x)=4x^3-4x^3+3x^2-2x+1\).

1. Nhận ra hai hạng tử \(4x^3\) và \(-4x^3\) triệt tiêu.
2. Thu gọn: \(P(x)=3x^2-2x+1\).
3. Hạng tử có bậc lớn nhất lúc này là \(3x^2\), nên **bậc của \(P\) là 2, không phải 3**.

**Trường hợp đặc biệt:** \(Q(x)=(x+1)-(x+1)=0\) là **đa thức không**. Không thể kết luận \(Q\) có bậc 1 chỉ vì trước khi thu gọn có hạng tử \(x\); theo quy ước đang dùng, đa thức không **không có bậc**.

**Tự kiểm tra:** Khi đề hỏi bậc, hãy tự hỏi: “Đã mở ngoặc và thu gọn hoàn toàn chưa? Hạng tử có số mũ cao nhất có còn hệ số khác 0 không?”


---

## CĐ05 — 05-7-hang-dang-thuc

Nguồn nhánh tích hợp: [docs/kien-thuc/05-7-hang-dang-thuc/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/05-7-hang-dang-thuc/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### Dạng 2A – Nhận diện hằng đẳng thức khi có hệ số phân số (mở rộng)

Khi \(A\) hoặc \(B\) là một phân số chứa biến, **cách nhận diện không đổi**: trước hết xác định hai bình phương ở hai đầu, sau đó kiểm tra hạng tử giữa có bằng \(\pm2AB\) không.

**Ví dụ theo hai chiều:** Khai triển và phân tích trở lại \(\left(\frac{x}{2}-1\right)^2\).

1. Chọn \(A=x/2\), \(B=1\).
2. Khai triển: \((A-B)^2=A^2-2AB+B^2\).
3. Suy ra \(\left(\frac{x}{2}-1\right)^2=\frac{x^2}{4}-x+1\).
4. Đọc ngược: \(\frac{x^2}{4}=(\frac{x}{2})^2\), \(1=1^2\), hạng tử giữa \(-x=-2\cdot\frac{x}{2}\cdot1\). Vậy \(\frac{x^2}{4}-x+1=(\frac{x}{2}-1)^2\).

**Thử giá trị:** Với \(x=2\), cả hai vế đều bằng 0. Đây là cách phát hiện nhanh lỗi quên nhân 2 trong hạng tử giữa, nhưng phép thử **không thay thế chứng minh bằng hằng đẳng thức**.

> Đừng bỏ ngoặc quanh \(x/2\) khi bình phương: \((x/2)^2=x^2/4\), không phải \(x^2/2\). Ví dụ này dùng để **hiểu cấu trúc và tự kiểm tra**, không phải thêm một hằng đẳng thức thứ tám.


---

## CĐ06 — 06-phan-tich-da-thuc

Nguồn nhánh tích hợp: [docs/kien-thuc/06-phan-tich-da-thuc/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/06-phan-tich-da-thuc/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.6A. Tách hạng tử khi hệ số của \(x^2\) khác 1 (mở rộng)

Mục 3.6 đã hướng dẫn dạng \(x^2+bx+c\). Với tam thức \(ax^2+bx+c\), \(a\ne0\), nếu tìm được hai số \(p,q\) sao cho:

\[
p+q=b,\qquad pq=ac,
\]

thì có thể tách \(bx=px+qx\) rồi **nhóm để xuất hiện một nhân tử chung**. Hãy hiểu đây là cách tìm phép nhóm phù hợp, **không phải công thức tự động phân tích được mọi tam thức**.

**Ví dụ từng bước:** Phân tích \(6x^2+11x+3\) thành nhân tử.

1. Xác định \(a=6,\ b=11,\ c=3\) và \(ac=18\).
2. Tìm hai số có **tổng 11, tích 18**: chọn \(p=9,\ q=2\).
3. Tách hạng tử giữa: \(6x^2+11x+3=6x^2+9x+2x+3\).
4. Nhóm: \(3x(2x+3)+(2x+3)\).
5. Đặt nhân tử chung: **\((3x+1)(2x+3)\)**.

**Kiểm tra bằng nhân ngược:** \((3x+1)(2x+3)=6x^2+9x+2x+3=6x^2+11x+3\), đúng biểu thức ban đầu.

**Vì sao quy tắc \(pq=ac\) có ích?** Ta đang tìm cách viết \(ax^2+px+qx+c\) thành hai nhóm có **cùng nhị thức**. Nếu không tìm được \(p,q\) phù hợp, đừng thử số mãi: hãy xem có nhân tử chung hoặc hằng đẳng thức hay không và chọn phương pháp khác.

> Đây là kỹ thuật **bổ trợ/vận dụng**, không phải yêu cầu rằng mọi tam thức đều phải phân tích được thành nhân tử với hệ số nguyên.


---

## CĐ07 — 07-phan-thuc-dai-so

Nguồn nhánh tích hợp: [docs/kien-thuc/07-phan-thuc-dai-so/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/07-phan-thuc-dai-so/index.md)

**Câu thay thế (trước sửa):**

> Ngoài điều kiện các mẫu khác `0`, cần thêm điều kiện **phân thức bị chia khác `0`**.

**Nội dung bổ sung/sửa nguyên văn:**

Ngoài điều kiện các mẫu thức `B`, `D` khác `0`, **phân thức chia `C/D` cũng phải khác `0`** (nghĩa là `C ≠ 0`).

---

## CĐ08 — 08-phuong-trinh-bat-phuong-trinh

Nguồn nhánh tích hợp: [docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.5A. Vì sao không được nhân với biểu thức chưa biết dấu? (mở rộng)

Quy tắc đổi chiều bất phương trình dựa trên thứ tự số: **nhân với số âm làm đảo chiều**, còn biểu thức chứa ẩn có thể dương hoặc âm tùy giá trị của ẩn.

**Phản ví dụ:** Xét bất phương trình \(\dfrac{x}{x-1}>1\).

1. Điều kiện xác định: **\(x\ne1\)**.
2. Chuyển vế mà **không nhân với \(x-1\)**: \(\dfrac{x}{x-1}-1=\dfrac{1}{x-1}>0\).
3. Tử số 1 dương, nên phân thức dương khi **\(x-1>0\)**. Kết luận **\(x>1\)**.
4. Thử lại: với \(x=2\), \(2>1\) đúng; với \(x=0\), \(0>1\) sai.

**Sai lầm:** Nếu nhân hai vế với \(x-1\) và **luôn giữ chiều**, ta được \(x>x-1\), tưởng rằng mọi \(x\ne1\) đều là nghiệm. Nhưng ở \(x=0\), số nhân bằng \(-1\), nên phải **đổi chiều**; cách nhân đó không tương đương.

> Đây là **ví dụ mở rộng**. Ở mức cơ bản, hãy chỉ nhân/chia bất phương trình với **số đã biết dấu**. Nếu thừa số chứa ẩn chưa rõ dấu, cần xét dấu hoặc tách trường hợp.


---

## CĐ09 — 09-he-phuong-trinh

Nguồn nhánh tích hợp: [docs/kien-thuc/09-he-phuong-trinh/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/09-he-phuong-trinh/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.4A. Cùng một hệ, so sánh phương pháp thế và cộng đại số

Ở phần **Phương pháp thế** ngay phía trên, ta đã giải hệ \(x+y=5,\ 2x-y=4\) và tìm được \((x;y)=(3;2)\). Hãy **giải lại chính hệ đó bằng phương pháp cộng đại số**, rồi so sánh:

1. Hai hệ số của \(y\) là \(1\) và \(-1\), nên khi cộng **toàn bộ hai vế** của hai phương trình, ẩn \(y\) bị khử:
   \[
   (x+y)+(2x-y)=5+4\quad\Rightarrow\quad 3x=9.
   \]
2. Suy ra \(x=3\). Thế vào \(x+y=5\), được \(y=2\).
3. **Kiểm tra trên hệ ban đầu:** \(3+2=5\) và \(2\cdot3-2=4\).

| Cần so sánh | Dùng phương pháp thế (ví dụ trước) | Dùng phương pháp cộng đại số (ở đây) |
|---|---|---|
| Bước đầu tiên | Từ \(x+y=5\), rút \(y=5-x\) | Cộng hai phương trình để khử \(y\) |
| Kết quả | \((3;2)\) | \((3;2)\) |
| Khi nào thuận tiện? | Khi dễ biểu diễn một ẩn theo ẩn kia | Khi hệ số một ẩn dễ triệt tiêu |

**Điểm cần hiểu:** Hai phương pháp không phải hai loại nghiệm khác nhau; cả hai chỉ là những phép biến đổi đúng để tìm **cùng một cặp số thỏa đồng thời cả hai phương trình**. Với hệ này, cộng đại số ít bước hơn, nhưng dùng thế vẫn hoàn toàn đúng.


---

## CĐ11 — 11-can-thuc

Nguồn nhánh tích hợp: [docs/kien-thuc/11-can-thuc/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/11-can-thuc/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.3B. Nhận diện hằng đẳng thức trong căn lồng căn (mở rộng)

Đôi khi biểu thức dưới dấu căn là **bình phương một tổng**. Liên hệ trực tiếp với [CĐ05 – Hằng đẳng thức](../05-7-hang-dang-thuc/index.md):

\[
(\sqrt a+\sqrt b)^2=a+b+2\sqrt{ab}\qquad(a,b\ge0).
\]

**Ví dụ:** Rút gọn \(\sqrt{5+2\sqrt6}\).

1. Nhận thấy \(5=2+3\), \(6=2\cdot3\).
2. Dùng hằng đẳng thức: \((\sqrt2+\sqrt3)^2=2+3+2\sqrt6=5+2\sqrt6\).
3. Vì \(\sqrt2+\sqrt3>0\), suy ra:
   \[
   \sqrt{5+2\sqrt6}=|\sqrt2+\sqrt3|=\sqrt2+\sqrt3.
   \]

**Tự kiểm tra:** Bình phương kết quả phải được \(5+2\sqrt6\). Bước xét dấu không được bỏ: với số thực \(A\), quy tắc luôn đúng là **\(\sqrt{A^2}=|A|\)**.

> Đây là **ví dụ kết nối mở rộng**, không phải thuật toán áp dụng được cho mọi căn lồng căn.


---

## CĐ12 — 12-phuong-trinh-bac-hai-viete

Nguồn nhánh tích hợp: [docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### Dạng 5A – Vì sao phải có \(P\ne0\) khi lấy nghịch đảo nghiệm?

Trong công thức \(\dfrac1{x_1}+\dfrac1{x_2}=\dfrac{S}{P}\), với \(S=x_1+x_2\), \(P=x_1x_2\), **\(P\ne0\) nghĩa là cả hai nghiệm đều khác 0**. Nếu \(P=0\), ít nhất một nghiệm bằng 0 nên biểu thức nghịch đảo không có nghĩa.

**Phản ví dụ:** Phương trình \(x^2-5x=0\) có hai nghiệm \(x_1=0\), \(x_2=5\).

- Theo Viète: **\(S=5\), \(P=0\)**.
- Biểu thức \(\dfrac1{x_1}+\dfrac1{x_2}\) **không xác định**, vì \(1/x_1=1/0\).
- Viết \(S/P=5/0\) **không cho một số hợp lệ**; không thể kết luận “bằng vô cực”.

**Cách tự kiểm tra:** Khi đề yêu cầu biểu thức chứa \(1/x_i\), trước hết kiểm tra phương trình **có các nghiệm thực theo yêu cầu** và \(P\ne0\). Nếu không, phải dừng hoặc xét riêng trường hợp đó.


---

## CĐ13 — 13-goc-va-duong-thang

Nguồn nhánh tích hợp: [docs/kien-thuc/13-goc-va-duong-thang/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/13-goc-va-duong-thang/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.12A. Một mẫu chứng minh hoàn chỉnh: giả thiết, kết luận, căn cứ

**Bài toán:** Cho ba đường thẳng \(a,b,c\) với \(a\parallel b\) và \(c\perp a\). Chứng minh \(c\perp b\).

| Thành phần | Nội dung |
|---|---|
| **Giả thiết (GT)** | \(a\parallel b\), \(c\perp a\) |
| **Kết luận (KL)** | \(c\perp b\) |

**Lập luận từng bước:**

1. Vì \(c\perp a\) (**giả thiết**), góc tạo bởi \(c\) và \(a\) là \(90^\circ\) (**định nghĩa vuông góc**).
2. Vì \(a\parallel b\) (**giả thiết**), hai góc **đồng vị tương ứng** do đường thẳng \(c\) cắt \(a,b\) bằng nhau (**tính chất hai đường song song**).
3. Suy ra góc tương ứng giữa \(c\) và \(b\) cũng bằng \(90^\circ\), nên **\(c\perp b\)** (**định nghĩa vuông góc**).

**Tự kiểm tra:** Đâu là điều đề đã cho? Bước nào sử dụng tính chất đã học? Bước kết luận có thực sự suy ra từ hai bước trên, hay chỉ dựa vào việc nhìn hình thấy có vẻ vuông góc?

> Đây là **mẫu trình bày một chứng minh**, không phải tính chất mới cần học thuộc. Khi tự viết, hãy ghi đủ giả thiết, bước trung gian, căn cứ và kết luận.

---


---

## CĐ14 — 14-tam-giac

Nguồn nhánh tích hợp: [docs/kien-thuc/14-tam-giac/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/14-tam-giac/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

#### Hai trường hợp thường dùng thêm cho tam giác vuông

Xét hai tam giác `ABC`, `DEF` **vuông lần lượt tại `A` và `D`**. Ngoài trường hợp cạnh huyền – cạnh góc vuông đã học, có hai cách nhận biết thuận tiện:

| Dữ kiện tương ứng | Vì sao đủ để kết luận bằng nhau? |
|---|---|
| `BC = EF` (cạnh huyền) và `∠B = ∠E` (góc nhọn) | Hai góc vuông đã bằng nhau; thêm một góc nhọn và cạnh huyền tương ứng xác định được hai tam giác bằng nhau |
| `AB = DE` (cạnh góc vuông) và `∠B = ∠E` (góc nhọn kề cạnh ấy) | `∠A = ∠D = 90°`, `∠B = ∠E`, cạnh `AB` nằm giữa hai góc tương ứng ⇒ áp dụng `g.c.g` |

**Ví dụ chọn dấu hiệu.** Hai tam giác vuông có `BC = EF` và `∠B = ∠E` thì bằng nhau theo **cạnh huyền – góc nhọn**, không cần đo thêm cạnh góc vuông còn lại. Kết luận theo đúng đỉnh tương ứng: `ΔABC = ΔDEF`.

**Tự kiểm tra:** Có xác nhận hai góc vuông không? Cạnh và góc nhọn được ghép **đúng vị trí tương ứng** chưa? Không kết luận bằng nhau chỉ vì hình vẽ trông giống nhau.

---


---

## CĐ15 — 15-duong-dong-quy

Nguồn nhánh tích hợp: [docs/kien-thuc/15-duong-dong-quy/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/15-duong-dong-quy/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

#### Phân biệt đường cao và đường trung trực — cùng vuông góc nhưng khác điểm đi qua

| Tiêu chí | Đường cao từ `A` trong tam giác `ABC` | Đường trung trực của `BC` |
|---|---|---|
| Vuông góc với | Đường thẳng `BC` | Đường thẳng `BC` |
| Bắt buộc đi qua | **Đỉnh `A`** | **Trung điểm `M` của `BC`** |
| Có nhất thiết trùng nhau? | Không | Không; chỉ trùng nếu đường cao đi qua trung điểm của `BC` |

**Ví dụ phân biệt.** Cho `BC = 8 cm`; chân đường cao từ `A` là `H ∈ BC`, với `BH = 3 cm` và `HC = 5 cm`. Vì `AH ⟂ BC`, nên `AH` là đường cao. Nhưng `BH ≠ HC`, nên `H` **không phải trung điểm** của `BC`. Đường trung trực của `BC` phải vuông góc `BC` tại `M` với `BM = MC = 4 cm`. Vì `H ≠ M`, đường thẳng `AH` không phải đường trung trực.

**Mẹo tự kiểm tra:** Chỉ thấy vuông góc là chưa đủ. Muốn kết luận *đường cao*, hỏi “có đi qua đỉnh không?”; muốn kết luận *đường trung trực*, hỏi “có đi qua trung điểm không?”.


---

## CĐ16 — 16-tu-giac

Nguồn nhánh tích hợp: [docs/kien-thuc/16-tu-giac/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/16-tu-giac/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.6A. Trung tuyến ứng với cạnh huyền — liên kết với hình chữ nhật

Cho tam giác `ABC` vuông tại `A`, `M` là **trung điểm cạnh huyền `BC`**. Khi đó:

`AM = BM = CM = BC/2`.

**Vì sao đúng?** Lấy điểm `D` đối xứng với `A` qua `M`. Trong tứ giác `ABDC`, hai đường chéo `AD` và `BC` cắt nhau tại trung điểm mỗi đường, nên `ABDC` là hình bình hành. Vì `∠BAC = 90°`, đây là **hình chữ nhật**, nên hai đường chéo bằng nhau: `AD = BC`. Do đó `AM = AD/2 = BC/2`.

**Định lý đảo:** Nếu `M` là trung điểm `BC` và `AM = BC/2`, thì tam giác `ABC` vuông tại `A`. Có thể kiểm tra bằng cách dựng `D` như trên: hình bình hành `ABDC` có hai đường chéo bằng nhau (`AD = 2AM = BC`) nên là hình chữ nhật.

**Ví dụ nhanh:** Nếu `ABC` vuông tại `A`, `BC = 10 cm` và `M` là trung điểm `BC`, thì `AM = 5 cm`. Ngược lại, nếu tam giác `ABC` có `BM = MC = 5 cm` và `AM = 5 cm`, thì `∠A = 90°`.

> **Bẫy nhận biết hình thang cân:** Với quy ước hình thang có **ít nhất một cặp cạnh đối song song** đang dùng trong bài, hình bình hành xiên (không phải hình chữ nhật) cũng có hai cạnh bên bằng nhau nhưng **hai góc kề một đáy không bằng nhau**. Vì thế, không được kết luận hình thang cân chỉ từ “hai cạnh bên bằng nhau”; cần kiểm tra đúng dấu hiệu nhận biết.


---

## CĐ17 — 17-thales-dong-dang

Nguồn nhánh tích hợp: [docs/kien-thuc/17-thales-dong-dang/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/17-thales-dong-dang/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.3A. Tính chất đường phân giác trong tam giác

Trong tam giác `ABC`, lấy `D` **nằm trên cạnh `BC`**. Nếu `AD` là tia phân giác của góc `BAC`, thì:

`BD/DC = AB/AC`

Nói cách khác, **đường phân giác chia cạnh đối diện theo tỉ lệ hai cạnh kề**. Đây là mối liên hệ giữa kiến thức về góc (CĐ13) và tỉ lệ đoạn thẳng (CĐ17).

**Ví dụ từng bước.** Cho `AB = 6 cm`, `AC = 9 cm`, `BC = 10 cm`, `AD` là đường phân giác góc `A` với `D ∈ BC`. Tính `BD`, `DC`.

1. Vì `AD` là phân giác nên `BD/DC = AB/AC = 6/9 = 2/3`.
2. Đồng thời `BD + DC = BC = 10`.
3. Chia `BC` thành `2 + 3 = 5` phần bằng nhau: `BD = 10 × 2/5 = 4 cm`, `DC = 10 × 3/5 = 6 cm`.
4. Kiểm tra: `4/6 = 6/9` và `4 + 6 = 10`.

**Vì sao đúng?** Có thể chứng minh từ định lý Thales: qua `C` kẻ đường thẳng song song với `AD`, cắt tia `BA` tại `E` (với `A` nằm giữa `B`, `E`). Khi đó `∠ACE = ∠CAD`, `∠CEA = ∠DAB`. Vì `AD` là phân giác nên tam giác `ACE` cân tại `A`, suy ra `AE = AC`. Áp dụng Thales trong tam giác `BCE` với `AD ∥ CE`: `BD/DC = BA/AE = BA/AC`.

> **Điều kiện trước khi áp dụng:** Phải có `D` trên cạnh `BC` và `AD` là phân giác của **góc trong** tại `A`. Không lấy tỉ lệ từ hình vẽ chỉ vì đoạn thẳng trông giống đường phân giác. Phân giác ngoài là cấu hình khác, không dùng ngay công thức này.


---

## CĐ18 — 18-he-thuc-luong

Nguồn nhánh tích hợp: [docs/kien-thuc/18-he-thuc-luong/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/18-he-thuc-luong/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.2A. Hiểu và suy ra hệ thức đường cao (mở rộng)

Trong tam giác `ABC` vuông tại `A`, `AH` là đường cao xuống cạnh huyền `BC`. Ngoài các hệ thức ở mục 3.2, ta có thể **tự suy ra**:

`1/AH² = 1/AB² + 1/AC²`.

**Vì sao đúng?** Diện tích tam giác vuông có thể tính theo hai cách, vì thế:

`AB × AC / 2 = AH × BC / 2`, tức `AH = AB × AC / BC`.

Suy ra:

`1/AH² = BC²/(AB² × AC²)`.

Áp dụng Pythagore `BC² = AB² + AC²`:

`1/AH² = (AB² + AC²)/(AB² × AC²) = 1/AB² + 1/AC²`.

**Ví dụ có kiểm tra.** Nếu `AB = 6 cm`, `AC = 8 cm` thì `BC = 10 cm` và `AH = 6 × 8 / 10 = 4,8 cm`. Kiểm tra:

`1/AH² = 1/4,8² = 25/576` và `1/AB² + 1/AC² = 1/36 + 1/64 = 25/576`.

**Khi nào nên dùng?** Khi biết hai cạnh góc vuông và cần đường cao, công thức `AH = AB × AC / BC` thường thuận tiện hơn; công thức nghịch đảo giúp liên hệ ba độ dài và tự kiểm tra kết quả. Đây là **hệ quả suy ra từ kiến thức đã học**, không phải công thức bắt buộc phải học thuộc thêm.

> Điều kiện không thể bỏ: tam giác phải **vuông tại `A`** và `AH` phải là **đường cao xuống cạnh huyền**, nên các độ dài `AB`, `AC`, `AH` đều dương.


---

## CĐ19 — 19-duong-tron

Nguồn nhánh tích hợp: [docs/kien-thuc/19-duong-tron/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/19-duong-tron/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.4A. Góc có đỉnh bên trong hoặc bên ngoài đường tròn (mở rộng)

Không phải mọi góc có hai cạnh cắt đường tròn đều là **góc nội tiếp**. Trước khi áp dụng công thức, hãy xem **đỉnh góc nằm ở đâu**:

| Vị trí đỉnh góc | Cấu hình | Công thức số đo |
|---|---|---|
| **Trên đường tròn** | Góc nội tiếp | Bằng **một nửa** số đo cung bị chắn |
| **Bên trong đường tròn** | Hai dây `AB`, `CD` cắt nhau tại `I` | `∠AIC = (sđ cung AC + sđ cung BD)/2` |
| **Bên ngoài đường tròn** | Hai cát tuyến `PAB`, `PCD`, trong đó `A, C` là giao điểm gần `P` | `∠APC = (sđ cung BD − sđ cung AC)/2`, với cung xa `BD` lớn hơn cung gần `AC` |

**Ví dụ 1 — Giao điểm ở trong.** Nếu hai dây `AB`, `CD` cắt tại `I`, hai cung `AC` và `BD` bị chắn bởi góc `AIC` và góc đối đỉnh có số đo lần lượt là `100°`, `60°`, thì `∠AIC = (100° + 60°)/2 = 80°`.

**Ví dụ 2 — Giao điểm ở ngoài.** Từ `P` kẻ hai cát tuyến qua `A,B` và `C,D`, với `A,C` gần `P` hơn. Nếu cung xa `BD` bằng `140°` và cung gần `AC` bằng `40°`, thì `∠APC = (140° − 40°)/2 = 50°`.

**Tự kiểm tra:** Công thức **tổng hai cung** dành cho đỉnh *bên trong*; công thức **hiệu hai cung** dành cho đỉnh *bên ngoài*. Phải xác định đúng cung bị chắn của góc đang xét và góc đối đỉnh, không chọn cung theo cảm tính. Đây là **công cụ mở rộng** khi gặp cấu hình phù hợp, không phải yêu cầu mới của phần kiến thức nền tảng.


---

## CĐ20 — 20-hinh-hoc-tong-hop

Nguồn nhánh tích hợp: [docs/kien-thuc/20-hinh-hoc-tong-hop/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/20-hinh-hoc-tong-hop/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.5A. Từ mục tiêu chứng minh đến chuỗi căn cứ: thẳng hàng và đồng quy

Bên cạnh các chuỗi nội tiếp → đồng dạng → hệ thức tích, hãy xác định **đích cần chứng minh** trước khi chọn công cụ:

| Mục tiêu | Cách tìm căn cứ |
|---|---|
| Ba điểm thẳng hàng | Chứng minh hai đường qua cùng một điểm trùng nhau; hoặc chứng minh một góc bẹt |
| Ba đường đồng quy | Lấy giao điểm của hai đường rồi chứng minh điểm đó cũng nằm trên đường thứ ba |

**Ví dụ 1 — Chứng minh thẳng hàng bằng tính duy nhất của đường song song.** Cho `d` là một đường thẳng không đi qua `A`, ba điểm `A, B, C` phân biệt, `AB ∥ d` và `AC ∥ d`. Qua `A` chỉ có **một** đường thẳng song song với `d` (tiên đề Euclid). Vì thế `AB` và `AC` là cùng một đường thẳng, suy ra `A, B, C` thẳng hàng.

**Ví dụ 2 — Chứng minh đồng quy bằng tính chất đường trung trực.** Trong tam giác `ABC`, gọi `O` là giao điểm đường trung trực của `AB` và đường trung trực của `AC`.

1. Vì `O` thuộc trung trực `AB` nên `OA = OB`.
2. Vì `O` thuộc trung trực `AC` nên `OA = OC`.
3. Suy ra `OB = OC`, nên `O` cũng thuộc trung trực `BC`.
4. Vậy ba đường trung trực của tam giác **đồng quy tại `O`**.

**Tự kiểm tra lời chứng minh:** Căn cứ nào được cho sẵn? Kết quả trung gian nào đã chứng minh? Bước cuối có thật sự suy ra đúng điều phải chứng minh, hay chỉ là điều nhìn thấy trên hình?


---

## CĐ21 — 21-thong-ke

Nguồn nhánh tích hợp: [docs/kien-thuc/21-thong-ke/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/21-thong-ke/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.1A. Nhận diện kiểu dữ liệu trước khi lập bảng và biểu đồ

Không phải cứ nhìn thấy chữ số thì dữ liệu đã là một **đại lượng đo được**. Cần hỏi: *Giá trị này dùng để phân loại, đếm hay đo lường?*

| Kiểu dữ liệu | Ví dụ | Cách hiểu |
|---|---|---|
| **Định tính** (phân loại) | Màu áo: xanh, đỏ; mức xếp loại: tốt, khá, đạt | Mô tả **nhóm hoặc loại**; một số loại có thể sắp theo thứ tự, nhưng không cộng/trừ các nhãn |
| **Định lượng rời rạc** | Số anh chị em: `0, 1, 2, ...` | Thu được bằng **đếm**; chỉ có những giá trị phù hợp đơn vị đếm |
| **Định lượng liên tục** | Chiều cao `151,5 cm`, khối lượng `42,3 kg` | Thu được bằng **đo lường**; phép đo thực tế được ghi với độ chính xác nhất định |
| **Mã định danh** | Số áo cầu thủ, mã học sinh | Dù viết bằng chữ số, nó chỉ dùng **nhận diện**, không phải số lượng để cộng hay tính trung bình |

**Ví dụ phân biệt:** Khảo sát một lớp về **phương tiện đi học** và **thời gian đi học (phút)**. Phương tiện là dữ liệu định tính; thời gian là dữ liệu định lượng. Vì vậy, ta có thể lập bảng tần số cho *xe đạp, đi bộ, xe buýt*, nhưng **không được tính thời gian đi học trung bình từ các nhãn phương tiện**.

**Từ loại dữ liệu đến cách trình bày:**
- Với dữ liệu phân loại, thường dùng bảng tần số, biểu đồ cột hoặc quạt tròn khi các nhóm tạo thành một tổng thể.
- Với số lượng đếm được, có thể lập bảng tần số theo từng giá trị.
- Với nhiều số đo liên tục, có thể cần ghép nhóm theo **khoảng không chồng lấn**, như mục 3.6B.

> **Tự kiểm tra:** “Số” trên nhãn có thật sự mang nghĩa độ lớn không? Nếu đổi mã học sinh từ `12` thành `120` mà không thay đổi người được ghi nhận, đó không phải sự tăng gấp 10 lần một đại lượng đo.


---

## CĐ22 — 22-dai-luong-dac-trung

Nguồn nhánh tích hợp: [docs/kien-thuc/22-dai-luong-dac-trung/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/22-dai-luong-dac-trung/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.6A. Phương sai và độ lệch chuẩn — nhìn sâu hơn số trung bình (mở rộng Toán 10)

**Khoảng biến thiên** chỉ dùng hai giá trị lớn nhất và nhỏ nhất. Để xét các giá trị phân tán quanh trung bình \(\bar x\) đến đâu, ta có thể dùng **phương sai** và **độ lệch chuẩn**.

Với toàn bộ bộ dữ liệu \(x_1,\ldots,x_n\), \(n>0\), đặt:

\[
s^2=\frac{(x_1-\bar x)^2+\cdots+(x_n-\bar x)^2}{n},\qquad s=\sqrt{s^2}.
\]

- **Phương sai** là trung bình của các bình phương độ lệch so với \(\bar x\), nên không âm và có đơn vị bình phương.
- **Độ lệch chuẩn** lấy căn bậc hai của phương sai; nó có **cùng đơn vị** với dữ liệu ban đầu. Khi so sánh dữ liệu cùng thang đo, độ lệch chuẩn lớn hơn thường có nghĩa là dữ liệu phân tán hơn.

**Ví dụ — hai bộ dữ liệu có cùng số trung bình:**

| Nhóm | Bốn quan sát | Trung bình | Phương sai | Độ lệch chuẩn |
|---|---|---:|---:|---:|
| A | \(5,5,7,7\) | \(6\) | \((1+1+1+1)/4=1\) | \(1\) |
| B | \(4,4,8,8\) | \(6\) | \((4+4+4+4)/4=4\) | \(2\) |

Cả hai có **trung bình 6**, nhưng các quan sát trong nhóm B cách trung bình xa hơn. Do đó, **chỉ biết số trung bình chưa đủ** để mô tả đặc điểm phân tán của dữ liệu.

> **Phân tầng:** Đây là kiến thức **tự chọn chuẩn bị Toán 10**, không phải yêu cầu bắt buộc của phần ôn thi vào lớp 10. Công thức chia cho \(n\) dùng để mô tả **toàn bộ bộ dữ liệu đang xét**, không phải công thức ước lượng phương sai mẫu chia \(n-1\).


---

## CĐ23 — 23-xac-suat

Nguồn nhánh tích hợp: [docs/kien-thuc/23-xac-suat/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/23-xac-suat/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

#### Hiểu sâu (mở rộng): Vì sao không thể chia đều cho 11 tổng của hai xúc xắc?

Gieo **hai xúc xắc cân đối và phân biệt**. Tổng số chấm có thể nhận 11 giá trị, từ `2` đến `12`, nhưng **11 giá trị tổng này không đồng khả năng**:

- Tổng bằng `2` chỉ có một cách: `(1;1)`.
- Tổng bằng `7` có sáu cách: `(1;6)`, `(2;5)`, `(3;4)`, `(4;3)`, `(5;2)`, `(6;1)`.

Nếu coi 11 tổng là 11 kết quả đồng khả năng rồi tính `P(tổng = 2) = 1/11` thì **sai**.

Cách đếm đúng là lấy **cặp có thứ tự (mặt xúc xắc thứ nhất; mặt xúc xắc thứ hai)** làm kết quả. Có `6 × 6 = 36` cặp đồng khả năng, nên:

- `P(tổng = 2) = 1/36`.
- `P(tổng = 7) = 6/36 = 1/6`.

**Tự kiểm tra:** Trước khi dùng `n(A)/n(Ω)`, hãy hỏi: *Các kết quả mình đang đếm có thực sự đồng khả năng không?*

---


---

## CĐ24 — 24-bai-toan-thuc-te

Nguồn nhánh tích hợp: [docs/kien-thuc/24-bai-toan-thuc-te/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/24-bai-toan-thuc-te/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.10A. Ví dụ kiểm tra nghiệm theo điều kiện thực tế

**Bài toán.** Một mảnh vườn hình chữ nhật có chu vi `40 m`, diện tích `64 m²`. Tìm chiều rộng và chiều dài, biết **chiều rộng nhỏ hơn chiều dài**.

1. **Đặt ẩn và điều kiện:** Gọi `x` (m) là chiều rộng. Vì nửa chu vi bằng `20 m`, chiều dài là `20 − x`. Điều kiện `x > 0` và `x < 20 − x`, hay **`0 < x < 10`**.
2. **Lập mô hình:** Diện tích `x(20 − x) = 64`, hay `x² − 20x + 64 = 0`.
3. **Giải phương trình:** `(x − 4)(x − 16) = 0`, nên `x = 4` hoặc `x = 16`.
4. **Đối chiếu ngữ cảnh:** `x = 4` thỏa `0 < x < 10`. **`x = 16` tuy dương nhưng phải loại**, vì khi ấy cạnh gọi là “chiều rộng” lại lớn hơn cạnh còn lại.
5. **Kết luận:** Chiều rộng `4 m`, chiều dài `16 m`; kiểm tra `2(4 + 16) = 40` và `4 × 16 = 64`.

**Bài học:** Điều kiện `x > 0` đôi khi **chưa đủ**. Điều kiện đúng phải được suy ra từ *đại lượng đang gọi là ẩn và quan hệ thực tế trong đề*; không tự áp một bảng điều kiện cố định cho mọi bài toán.


---

## CĐ25 — 25-tong-hop-on-thi-10

Nguồn nhánh tích hợp: [docs/kien-thuc/25-tong-hop-on-thi-10/index.md](https://github.com/TMA2015/roadmap-toan-thcs/blob/91ea4fbbb1648edcd00589f7ee94e720a4ef0aff/docs/kien-thuc/25-tong-hop-on-thi-10/index.md)

**Nội dung bổ sung/sửa nguyên văn:**

### 3.5A. Từ bước giải sai đến đúng chuyên đề cần học lại

Khi chữa một đề tổng hợp, hãy ghi rõ **bước đầu tiên mình chưa hiểu hoặc làm sai**, thay vì ghi chung chung “sai đại số” hay “sai hình”. Bảng dưới đây chỉ là **tình huống minh họa để tra cứu**, không phải thống kê về tần suất câu hỏi trong đề thi của bất cứ địa phương nào.

| Bước giải đang sai | Tra cứu kiến thức trực tiếp | Nếu còn thiếu nền, mở thêm |
|---|---|---|
| Rút gọn phân thức làm mất điều kiện xác định | [CĐ07 – Phân thức](../07-phan-thuc-dai-so/index.md) | [CĐ05 – Hằng đẳng thức](../05-7-hang-dang-thuc/index.md), [CĐ06 – Phân tích nhân tử](../06-phan-tich-da-thuc/index.md) |
| Giải phương trình hoặc bất phương trình sai dấu | [CĐ08 – Phương trình, bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md) | [CĐ04 – Biểu thức đại số](../04-bieu-thuc-dai-so/index.md) |
| Giải hệ sai khi thế hoặc cộng đại số | [CĐ09 – Hệ phương trình](../09-he-phuong-trinh/index.md) | [CĐ08 – Phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md) |
| Dùng Viète nhưng quên điều kiện của biểu thức có nghiệm ở mẫu | [CĐ12 – Phương trình bậc hai, Viète](../12-phuong-trinh-bac-hai-viete/index.md) | [CĐ07 – Phân thức](../07-phan-thuc-dai-so/index.md) |
| Chứng minh hình học nhưng không tìm được hai tam giác đồng dạng | [CĐ17 – Thales, đồng dạng](../17-thales-dong-dang/index.md) | [CĐ13 – Góc](../13-goc-va-duong-thang/index.md), [CĐ14 – Tam giác](../14-tam-giac/index.md) |
| Dùng góc nội tiếp hoặc tiếp tuyến chưa có căn cứ | [CĐ19 – Đường tròn](../19-duong-tron/index.md) | [CĐ20 – Hình học tổng hợp](../20-hinh-hoc-tong-hop/index.md) để học chuỗi chứng minh |
| Bài toán thực tế có nghiệm đại số nhưng nghiệm không phù hợp bối cảnh | [CĐ24 – Mô hình hóa](../24-bai-toan-thuc-te/index.md) | [CĐ08 – Phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md) hoặc [CĐ09 – Hệ phương trình](../09-he-phuong-trinh/index.md) |

**Ví dụ ghi sổ lỗi sai có thể tự làm theo**

1. **Bước sai:** Vẽ đồ thị \(y=2x\) bằng hai giao điểm với trục tọa độ. Cả hai đều là \(O(0;0)\), nên học sinh kết luận “không thể vẽ”.
2. **Chuyên đề cần mở:** [CĐ10 – Hàm số và đồ thị](../10-ham-so-do-thi/index.md), phần **trường hợp đặc biệt \(y=ax\)** và cách chọn **hai điểm phân biệt**.
3. **Nguyên nhân:** Đã dùng máy móc hai giao điểm với trục khi \(b=0\), không kiểm tra hai điểm có khác nhau hay không.
4. **Cách sửa:** Giữ \(O(0;0)\), chọn thêm \(A(1;2)\); đường thẳng qua \(O,A\) chính là đồ thị \(y=2x\).
5. **Tự kiểm tra sau vài ngày:** Không nhìn lời giải, tự vẽ \(y=-3x\) bằng hai điểm khác nhau. Nếu vẫn vướng, quay lại đúng mục kiến thức trên.

**Nguyên tắc:** Một câu tổng hợp có thể sử dụng nhiều chuyên đề. Ưu tiên quay lại **kiến thức liên quan đến bước sai đầu tiên**, hiểu lý do và xem ví dụ mẫu, rồi làm lại câu; không gán tất cả lỗi cho một chuyên đề chỉ vì câu hỏi có tên dạng bài đó.



## Kết quả đầu ra mong muốn

Với mỗi vấn đề thực sự có ý nghĩa, ghi **CĐ, câu/đoạn, bằng chứng, mức P0/P1/P2, đề xuất sửa tối thiểu**. Kết luận rõ phần nào đã xem và phần nào **NOT_REVIEWED**; không chấm PASS cho cấu phần không có bằng chứng.
