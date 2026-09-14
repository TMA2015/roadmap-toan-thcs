#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def read(rel):
    return (ROOT / rel).read_text(encoding="utf-8")


def write(rel, text):
    (ROOT / rel).write_text(text, encoding="utf-8")


def insert_after(text, marker, block, label):
    if block.strip() in text:
        return text
    if marker not in text:
        raise SystemExit(f"Không tìm thấy marker {label}: {marker!r}")
    return text.replace(marker, marker + "\n\n" + block, 1)


def insert_before(text, marker, block, label):
    if block.strip() in text:
        return text
    if marker not in text:
        raise SystemExit(f"Không tìm thấy marker {label}: {marker!r}")
    return text.replace(marker, block + "\n\n" + marker, 1)

changed = []

# 08 — biện luận đầy đủ phương trình bậc nhất có tham số; làm chặt khử mẫu và BPT.
rel = "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md"
text = read(rel)
marker = "> Nếu xuất hiện tham số làm hệ số của $x$ có thể bằng `0`, phải xét riêng trường hợp đó; không được chia ngay cho một biểu thức chưa biết có khác `0` hay không."
block = r'''#### Khi hệ số của ẩn có thể bằng 0

Trong bài có tham số, sau khi thu gọn thường xuất hiện dạng:

```text
A x + B = 0
```

trong đó `A`, `B` có thể phụ thuộc tham số. Phải xét đủ ba trường hợp:

- `A ≠ 0` → có đúng một nghiệm `x = -B/A`;
- `A = 0` và `B = 0` → phương trình trở thành `0 = 0`, có vô số nghiệm;
- `A = 0` và `B ≠ 0` → phương trình trở thành một mệnh đề sai như `0 = 3`, nên vô nghiệm.

> Đây là nguyên tắc nền khi biện luận phương trình có tham số; không được dùng công thức `x = -B/A` trước khi biết `A ≠ 0`.'''
text = insert_after(text, marker, block, "08 biện luận bậc nhất")
marker2 = "5. Kết luận."
block2 = r'''!!! warning "Khử mẫu chỉ tương đương trên miền xác định"
    Khi nhân hai vế với mẫu chung, phép biến đổi chỉ được hiểu trên các giá trị đã thỏa **điều kiện xác định**. Vì vậy giá trị bị loại từ đầu không được lấy lại dù sau khi khử mẫu biểu thức mới có nghĩa tại giá trị đó.'''
text = insert_after(text, marker2, block2, "08 khử mẫu")
marker3 = "$$-2x>6\\Rightarrow x<-3.$$"
block3 = r'''> Nếu nhân hoặc chia hai vế cho một **biểu thức chứa ẩn hoặc tham số** mà chưa biết dấu, không được tự động giữ hay đổi chiều. Trước hết phải xác định dấu của biểu thức đó hoặc chia bài toán thành các trường hợp. Ở mức cốt lõi, chỉ nên nhân/chia bất phương trình với số đã biết dấu.'''
text = insert_after(text, marker3, block3, "08 dấu biểu thức")
write(rel, text); changed.append(rel)

# 09 — giải thích các phép biến đổi tương đương của hệ + tiêu chuẩn kiểm tra số nghiệm không cần chia hệ số.
rel = "docs/kien-thuc/09-he-phuong-trinh/index.md"
text = read(rel)
marker = "### 3.4. Hai phương pháp giải cơ bản"
block = r'''### 3.3A. Các phép biến đổi tương đương của hệ

Những thao tác sau giữ nguyên tập nghiệm của hệ:

1. đổi thứ tự hai phương trình;
2. nhân **cả hai vế của một phương trình** với cùng một số khác `0`;
3. thay một phương trình bằng tổng của chính phương trình đó với một bội của phương trình còn lại.

Phương pháp cộng đại số dựa trực tiếp vào thao tác thứ ba. Ví dụ, nếu cộng hai phương trình để khử `y`, ta không tạo ra nghiệm mới và cũng không làm mất nghiệm cũ, miễn là các phép biến đổi được thực hiện trên toàn bộ hai vế.

> Không được chỉ cộng/trừ riêng các hạng tử thuận mắt hoặc nhân một vế mà quên vế còn lại.'''
text = insert_before(text, marker, block, "09 phép biến đổi hệ")
marker2 = "Vì vậy hai phương trình tương đương và hệ có vô số nghiệm."
block2 = r'''#### Mở rộng – kiểm tra nhanh số nghiệm mà không cần chia hệ số

Với hệ

```text
a1 x + b1 y = c1
a2 x + b2 y = c2
```

trong đó mỗi phương trình thực sự là phương trình bậc nhất hai ẩn, đặt:

```text
D = a1*b2 - a2*b1
```

- `D ≠ 0` → hai đường thẳng cắt nhau, hệ có đúng một nghiệm;
- `D = 0`, đồng thời `a1*c2 - a2*c1 = 0` và `b1*c2 - b2*c1 = 0` → hai phương trình biểu diễn cùng một đường thẳng, hệ có vô số nghiệm;
- `D = 0` nhưng ít nhất một trong hai biểu thức còn lại khác `0` → hai đường thẳng song song phân biệt, hệ vô nghiệm.

Cách viết này đặc biệt hữu ích khi một số hệ số bằng `0`, vì tránh việc chia cho một hệ số có thể bằng `0`. Đây là **công cụ kiểm tra/mở rộng**, không bắt buộc phải dùng thay cho thế hoặc cộng đại số.'''
text = insert_after(text, marker2, block2, "09 tiêu chuẩn số nghiệm")
write(rel, text); changed.append(rel)

# 10 — tránh hiểu nhầm mọi parabol có đỉnh O; bổ sung cầu nối đường thẳng–parabol.
rel = "docs/kien-thuc/10-ham-so-do-thi/index.md"
text = read(rel)
marker = "> Phần này là bước chuẩn bị trực tiếp cho [Chuyên đề 12 – Phương trình bậc hai & Viète](../12-phuong-trinh-bac-hai-viete/index.md)."
block = r'''> **Phạm vi:** các tính chất “đỉnh tại `O`” và “trục đối xứng là `Oy`” ở trên chỉ áp dụng cho dạng đặc biệt `y = ax²`. Không được suy rộng chúng cho mọi hàm bậc hai `y = ax² + bx + c`; dạng tổng quát được dùng như nội dung kết nối ở Chuyên đề 12 và sẽ học sâu hơn ở THPT.'''
text = insert_after(text, marker, block, "10 phạm vi parabol")
marker2 = "## 🚀 6. Dạng bài thi vào lớp 10"
block2 = r'''### Dạng 11 – Mở rộng: giao điểm đường thẳng và parabol `y = ax²`

> Nên quay lại dạng này sau khi đã học Chuyên đề 12 về phương trình bậc hai.

Giả sử cần tìm giao điểm của:

```text
(P): y = ax²      (a ≠ 0)
(d): y = mx + n
```

Tại giao điểm, hai giá trị `y` bằng nhau nên:

```text
ax² = mx + n
```

hay:

```text
ax² - mx - n = 0
```

Vì vậy:

- mỗi nghiệm thực `x` cho một giao điểm;
- phương trình có hai nghiệm phân biệt → đường thẳng cắt parabol tại hai điểm;
- có nghiệm kép → đường thẳng tiếp xúc parabol tại một điểm;
- vô nghiệm thực → hai đồ thị không có điểm chung.

Ví dụ với `y = x²` và `y = x + 2`:

```text
x² = x + 2
⇔ x² - x - 2 = 0
⇔ (x - 2)(x + 1) = 0
```

nên có hai giao điểm ứng với `x = 2` và `x = -1`.

Đây là cầu nối trực tiếp giữa **đồ thị** và **phương trình bậc hai**, không phải một kỹ thuật tách rời.'''
text = insert_before(text, marker2, block2, "10 đường thẳng parabol")
write(rel, text); changed.append(rel)

# 11 — điều kiện khi bình phương hai vế và hai căn bằng nhau.
rel = "docs/kien-thuc/11-can-thuc/index.md"
text = read(rel)
marker = "Nếu biết thêm `x ≥ 3` thì mới kết luận `|x - 3| = x - 3`."
block = r'''### 3.3A. Bình phương hai vế và phương trình chứa căn

Bình phương hai vế **không phải lúc nào cũng là phép biến đổi tương đương**. Từ `U = V` có thể suy ra `U² = V²`, nhưng chiều ngược lại còn có khả năng `U = -V`.

Với dạng quan trọng:

```text
√A = B
```

trên tập số thực, có thể dùng tương đương:

```text
√A = B  ⇔  B ≥ 0 và A = B²
```

(với các biểu thức ban đầu có nghĩa). Nếu `B < 0` thì phương trình không thể có nghiệm vì căn bậc hai số học luôn không âm.

Tương tự:

```text
√A = √B  ⇔  A = B
```

nhưng phải kèm điều kiện `A ≥ 0`, `B ≥ 0`.

> Khi giải bằng cách bình phương, cách an toàn nhất vẫn là ghi điều kiện, biến đổi, rồi **thay nghiệm trở lại phương trình ban đầu** để loại nghiệm ngoại lai.'''
text = insert_after(text, marker, block, "11 bình phương hai vế")
write(rel, text); changed.append(rel)

# 12 — chuẩn hóa điều kiện dấu nghiệm, nghiệm phân biệt và P=0.
rel = "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md"
text = read(rel)
old = r'''Giả sử phương trình có hai nghiệm thực.

Theo Viète:

- `P < 0` → hai nghiệm trái dấu.
- `P > 0` và `S > 0` → hai nghiệm cùng dương.
- `P > 0` và `S < 0` → hai nghiệm cùng âm.

> Điều kiện về dấu chỉ có ý nghĩa sau khi bảo đảm phương trình có nghiệm thực phù hợp.'''
new = r'''Với phương trình bậc hai thực sự (`a ≠ 0`), đặt `S = x₁ + x₂`, `P = x₁x₂`.

Các điều kiện thường dùng:

| Yêu cầu về nghiệm | Điều kiện |
|---|---|
| Hai nghiệm thực cùng dương | `Δ ≥ 0`, `P > 0`, `S > 0` |
| Hai nghiệm thực cùng âm | `Δ ≥ 0`, `P > 0`, `S < 0` |
| Hai nghiệm trái dấu | `P < 0` (khi đó tự động có hai nghiệm thực phân biệt) |
| Có một nghiệm bằng `0` | `P = 0` |

Nếu đề yêu cầu **hai nghiệm phân biệt**, phải thay `Δ ≥ 0` bằng `Δ > 0` ở các trường hợp cùng dấu.

Khi `P = 0`, không được xếp vào “hai nghiệm dương” hoặc “hai nghiệm âm”: một nghiệm bằng `0`, nghiệm còn lại bằng `S` (có thể cũng bằng `0` nếu là nghiệm kép).

> Đây là bộ điều kiện đầy đủ hơn cho bài tham số. Không nên chỉ nhìn `P` rồi kết luận dấu của từng nghiệm.'''
if new not in text:
    if old not in text:
        raise SystemExit("Không tìm thấy đoạn Dạng 7 của Chuyên đề 12")
    text = text.replace(old, new, 1)
write(rel, text); changed.append(rel)

report = r'''# Audit học thuật thủ công – Chuyên đề 08–12 (V1)

> Phạm vi: đọc thủ công phần kiến thức cốt lõi, dạng bài, lỗi sai và các cầu nối giữa chuyên đề. Vòng này không thay đổi Practice Engine và không viết lại các phần đã đúng/đủ.

## Kết luận nhanh

| Chuyên đề | Đánh giá sau audit | Điều chỉnh chính |
|---:|---|---|
| 08 | PASS sau bổ sung | Ba trường hợp của `Ax+B=0` khi có tham số; khử mẫu trên miền xác định; cảnh báo khi nhân/chia bất phương trình với biểu thức chưa biết dấu |
| 09 | PASS sau bổ sung | Giải thích phép biến đổi tương đương của hệ; thêm tiêu chuẩn kiểm tra số nghiệm bằng tích chéo, tránh chia cho hệ số bằng 0 |
| 10 | PASS sau bổ sung | Làm rõ `y=ax²` chỉ là parabol đặc biệt; bổ sung cầu nối giao điểm đường thẳng–parabol với phương trình bậc hai |
| 11 | PASS sau bổ sung | Chuẩn hóa điều kiện khi bình phương hai vế và dạng `√A=B`, `√A=√B` để tránh nghiệm ngoại lai |
| 12 | PASS sau bổ sung | Chuẩn hóa điều kiện hai nghiệm dương/âm/trái dấu, yêu cầu nghiệm phân biệt và trường hợp `P=0` |

## Nguyên tắc sử dụng

- Các phần bổ sung mang tính **làm chặt điều kiện toán học** và **lấp cầu nối nội dung**, không tăng khối lượng bài tập cơ học.
- Dạng mở rộng được gắn nhãn rõ để học sinh không nhầm với yêu cầu cốt lõi.
- Với tham số, luôn kiểm tra điều kiện để phương trình/hệ còn đúng loại trước khi dùng công thức.
- Với phép biến đổi có thể làm thay đổi tập nghiệm (khử mẫu, bình phương), phải giữ điều kiện và đối chiếu nghiệm.

## QA bắt buộc trước merge

- `python audit_content_structure.py --write`
- `python validate_practice_bank.py`
- `python check_roadmap_dependencies.py`
- `python audit_practice_quality.py`
- `mkdocs build --strict`
'''
report_rel = "docs/roadmap/audit-hoc-thuat-08-12-v1.md"
write(report_rel, report)
changed.append(report_rel)

print(f"Updated {len(changed)} files")
for item in changed:
    print(item)
