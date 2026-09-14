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

# 08 — trực quan hóa bất phương trình và giao tập nghiệm.
rel = "docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md"
text = read(rel)
block = '''#### Trực quan – biểu diễn tập nghiệm trên trục số

![Minh họa bất phương trình trên trục số: điểm rỗng, điểm đặc và hướng của tập nghiệm](../../assets/infographics/08/08-05-truc-so-bat-phuong-trinh.svg)

Hình trên giúp phân biệt nhanh:

- dấu `<`, `>` → **không lấy mốc** nên dùng điểm rỗng;
- dấu `≤`, `≥` → **có lấy mốc** nên dùng điểm đặc;
- phần tô về phía nào cho biết các giá trị được nhận về phía đó.

> Khi biểu diễn trên trục số, cần kiểm tra đồng thời **mốc biên** và **hướng của tập nghiệm**; chỉ đúng một trong hai vẫn là sai.'''
marker = '> Nếu nhân hoặc chia hai vế cho một **biểu thức chứa ẩn hoặc tham số** mà chưa biết dấu, không được tự động giữ hay đổi chiều. Trước hết phải xác định dấu của biểu thức đó hoặc chia bài toán thành các trường hợp. Ở mức cốt lõi, chỉ nên nhân/chia bất phương trình với số đã biết dấu.'
text = insert_after(text, marker, block, "08 trục số")
block2 = '''#### Trực quan – giao các tập nghiệm

![Minh họa giao của hai tập nghiệm trên trục số](../../assets/infographics/08/08-06-giao-tap-nghiem.svg)

Nếu bài toán yêu cầu nhiều điều kiện phải đúng **đồng thời**, ta chỉ giữ phần nằm trong **tất cả** các tập nghiệm. Ví dụ trên:

`x > -2` và `x ≤ 3`  →  `-2 < x ≤ 3`.

Đây chính là ý nghĩa trực quan của phép **giao** các tập nghiệm.'''
marker2 = '> Phần này dùng để rèn tư duy về giao tập nghiệm và hỗ trợ bài toán có nhiều điều kiện; không xem là trọng tâm cốt lõi ngang với phương trình và bất phương trình bậc nhất một ẩn.'
text = insert_after(text, marker2, block2, "08 giao nghiệm")
write(rel, text); changed.append(rel)

# 09 — ba trường hợp số nghiệm của hệ bằng đồ thị.
rel = "docs/kien-thuc/09-he-phuong-trinh/index.md"
text = read(rel)
block = '''#### Trực quan – số nghiệm của hệ

![Ba trường hợp hình học của hệ phương trình: cắt nhau, song song và trùng nhau](../../assets/infographics/09/09-04-y-nghia-hinh-hoc-he.svg)

Có thể đọc hình theo một quy tắc duy nhất:

**số nghiệm của hệ = số điểm chung của hai đường thẳng**.

- cắt nhau tại một điểm → một nghiệm;
- không có điểm chung → vô nghiệm;
- trùng nhau → mọi điểm trên đường thẳng đều là điểm chung, nên có vô số nghiệm.

> Đây không phải một quy tắc mới tách biệt với đại số: nó là cách nhìn hình học của chính điều kiện “một cặp `(x; y)` phải thỏa đồng thời cả hai phương trình”.'''
marker = '- Hai đường thẳng trùng nhau → hệ có **vô số nghiệm**.'
text = insert_after(text, marker, block, "09 hình học hệ")
write(rel, text); changed.append(rel)

# 10 — bổ sung chuỗi đồ thị trực quan từ tọa độ → a,b → giao điểm → parabol → đường thẳng–parabol.
rel = "docs/kien-thuc/10-ham-so-do-thi/index.md"
text = read(rel)
block = '''#### Trực quan – điểm thuộc và không thuộc đồ thị

![Mặt phẳng tọa độ và ví dụ điểm thuộc, không thuộc đường thẳng](../../assets/infographics/10/10-05-mat-phang-toa-do-diem.svg)

Điểm nằm “gần” đường thẳng chưa đủ. Muốn kết luận một điểm thuộc đồ thị, tọa độ của nó phải thỏa **đúng phương trình** của đồ thị.'''
marker = 'Điểm `B(2; 4)` không thuộc đồ thị vì:\n\n`2·2 + 1 ≠ 4`'
text = insert_after(text, marker, block, "10 điểm thuộc đồ thị")

block2 = '''#### Trực quan – vai trò của `a` và `b`

![So sánh ảnh hưởng của hệ số a và b trong hàm số y=ax+b](../../assets/infographics/10/10-06-he-so-a-b.svg)

Đọc hình theo hai câu hỏi:

1. **Giữ `b` cố định, đổi `a`:** các đường thẳng vẫn đi qua cùng điểm trên `Oy`, nhưng độ dốc và chiều tăng/giảm thay đổi.
2. **Giữ `a` cố định, đổi `b`:** các đường thẳng song song với nhau và chỉ dịch lên/xuống.

Cách nhìn này giúp tránh học thuộc rời rạc “`a` là hệ số góc, `b` là tung độ gốc”.'''
marker2 = 'Ví dụ:\n\n`y = 2x - 5`\n\ncắt `Oy` tại `(0; -5)`.'
text = insert_after(text, marker2, block2, "10 hệ số a b")

block3 = '''#### Trực quan – nghiệm hệ là giao điểm đồ thị

![Hai đường thẳng y=2x+1 và y=-x+4 cắt nhau tại I(1;3)](../../assets/infographics/10/10-07-giao-diem-hai-duong-thang.svg)

Hình cho thấy cùng một kết quả theo hai ngôn ngữ:

- **đại số:** giải `2x + 1 = -x + 4` được `x = 1`, rồi `y = 3`;
- **hình học:** hai đường thẳng gặp nhau tại `I(1; 3)`.

Vì vậy, giải hệ và tìm giao điểm thực chất là hai cách mô tả cùng một bài toán.'''
marker3 = '> Đây là cầu nối trực tiếp với [Chuyên đề 09 – Hệ phương trình bậc nhất hai ẩn](../09-he-phuong-trinh/index.md).'
text = insert_after(text, marker3, block3, "10 giao điểm đường thẳng")

block4 = '''#### Trực quan – dấu và độ lớn của `a`

![So sánh các parabol y=ax² khi thay đổi dấu và độ lớn của a](../../assets/infographics/10/10-08-parabol-y-ax2.svg)

Với dạng đặc biệt `y = ax²`:

- dấu của `a` quyết định parabol mở **lên** hay **xuống**;
- với cùng dấu, `|a|` lớn hơn làm parabol **hẹp hơn**;
- mọi đồ thị dạng này đều đi qua `O(0;0)` và đối xứng qua `Oy`.'''
marker4 = '- nếu `a < 0`, parabol mở xuống.'
text = insert_after(text, marker4, block4, "10 parabol ax2")

block5 = '''#### Trực quan – đường thẳng và parabol

![Đường thẳng y=x+2 cắt parabol y=x² tại hai điểm](../../assets/infographics/10/10-09-duong-thang-parabol.svg)

Ở ví dụ trên, hai giao điểm xuất hiện đúng tại hai nghiệm của:

`x² = x + 2`.

Do đó, số nghiệm thực của phương trình thu được sau khi cho hai biểu thức bằng nhau chính là số giao điểm của hai đồ thị. Đây là cầu nối quan trọng sang Chuyên đề 12.'''
marker5 = 'Đây là cầu nối trực tiếp giữa **đồ thị** và **phương trình bậc hai**, không phải một kỹ thuật tách rời.'
text = insert_after(text, marker5, block5, "10 đường thẳng parabol")
write(rel, text); changed.append(rel)

# 12 — làm rõ ý nghĩa hình học của Delta.
rel = "docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md"
text = read(rel)
block = '''### Trực quan – vì sao dấu của `Δ` quyết định số nghiệm?

![Ba trường hợp Δ dương, bằng 0 và âm qua số giao điểm của parabol với trục Ox](../../assets/infographics/12/12-05-delta-va-giao-ox.svg)

Nếu đặt `y = ax² + bx + c`, thì nghiệm của phương trình

`ax² + bx + c = 0`

chính là **hoành độ các giao điểm của parabol với trục `Ox`**. Vì thế:

- `Δ > 0` → cắt `Ox` tại hai điểm → hai nghiệm phân biệt;
- `Δ = 0` → tiếp xúc `Ox` tại một điểm → nghiệm kép;
- `Δ < 0` → không cắt `Ox` → không có nghiệm thực.

> Đây là cách nhìn hình học của cùng một kết luận đại số, không phải một quy tắc khác cần học thuộc thêm.'''
marker = '| `Δ < 0` | Vô nghiệm trong tập số thực |'
text = insert_after(text, marker, block, "12 delta đồ thị")
write(rel, text); changed.append(rel)

print("Đã cập nhật:")
for rel in changed:
    print(" -", rel)
