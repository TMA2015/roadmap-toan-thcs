#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BASE = ROOT / "docs" / "kien-thuc"


def read(rel):
    return (ROOT / rel).read_text(encoding="utf-8")


def write(rel, text):
    (ROOT / rel).write_text(text, encoding="utf-8")


def insert_before(text, marker, block, label):
    if block.strip() in text:
        return text
    if marker not in text:
        raise SystemExit(f"Không tìm thấy marker {label}: {marker!r}")
    return text.replace(marker, block + "\n\n" + marker, 1)


def replace_once(text, old, new, label):
    if new in text:
        return text
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: cần đúng 1 đoạn đích, thực tế {count}")
    return text.replace(old, new, 1)

changed = []

# 02 — bổ sung số vô tỉ/số thực và làm tròn, vì roadmap 6–9 cần cầu nối rõ sang số thực/căn thức.
rel = "docs/kien-thuc/02-so-va-phep-tinh/index.md"
text = read(rel)
old = "- [ ] Biết ước lượng và kiểm tra tính hợp lí của kết quả."
new = "- [ ] Biết làm tròn, ước lượng và kiểm tra tính hợp lí của kết quả."
text = replace_once(text, old, new, "02 mục tiêu làm tròn")
block = r'''#### Số vô tỉ và số thực

Ngoài số hữu tỉ còn có **số vô tỉ**: các số không viết được dưới dạng `a/b` với `a, b ∈ Z`, `b ≠ 0`.

Ví dụ:

```text
√2, √3, π
```

Dạng thập phân của một số vô tỉ là **vô hạn không tuần hoàn**. Tập hợp số thực `R` gồm toàn bộ số hữu tỉ và số vô tỉ.

Trên trục số, mỗi số thực tương ứng với một điểm; vì vậy có thể dùng vị trí trên trục số để so sánh và ước lượng các số thực.

> Không được kết luận một số là vô tỉ chỉ vì phần thập phân viết ra rất dài; cần dựa vào bản chất hoặc dữ kiện đã biết của số đó.

#### Làm tròn và giá trị gần đúng

Trong đo lường và bài toán thực tế, kết quả thường cần làm tròn đến một hàng xác định.

Ví dụ:

```text
3,146 ≈ 3,15  (làm tròn đến hàng phần trăm)
7,84  ≈ 7,8   (làm tròn đến hàng phần mười)
```

Quy tắc cơ bản: nhìn chữ số ngay bên phải hàng cần làm tròn; nếu chữ số đó từ `5` trở lên thì tăng chữ số ở hàng làm tròn thêm `1`, nếu nhỏ hơn `5` thì giữ nguyên.

Khi dùng số gần đúng, cần phân biệt **giá trị chính xác** với **giá trị đã làm tròn**, và không nên làm tròn quá sớm trong một phép tính nhiều bước vì sai số có thể tích lũy.'''
text = insert_before(text, "### 3.11. Phần trăm", block, "02 bổ sung số thực")
write(rel, text); changed.append(rel)

# 03 — làm chặt điều kiện của các tính chất tỉ lệ và tránh suy luận nghịch đảo chỉ từ xu hướng tăng/giảm.
rel = "docs/kien-thuc/03-ti-le-ti-le-thuc/index.md"
text = read(rel)
old = r'''Nếu `y = kx`, thì với các cặp giá trị tương ứng:

```text
y1/x1 = y2/x2 = k
```

và:

```text
y1/y2 = x1/x2
```'''
new = r'''Nếu `y = kx`, thì với các cặp giá trị tương ứng có `x1 ≠ 0`, `x2 ≠ 0`:

```text
y1/x1 = y2/x2 = k
```

và khi các tỉ số có nghĩa:

```text
y1/y2 = x1/x2
```

Trường hợp `x = 0` vẫn thuộc quan hệ `y = kx` và khi đó `y = 0`; chỉ là không được viết tỉ số `y/x` vì mẫu bằng `0`.'''
text = replace_once(text, old, new, "03 điều kiện tỉ lệ thuận")
block = r'''Ngoài công thức cộng, có thể dùng dạng hiệu khi mẫu mới khác `0`. Chẳng hạn nếu

```text
x/a = y/b = k
```

thì, với `a - b ≠ 0`:

```text
(x - y)/(a - b) = k
```

Điểm quan trọng là các phép cộng/trừ ở tử và mẫu phải được thực hiện **tương ứng** và mẫu mới không được bằng `0`.'''
text = insert_before(text, "Ví dụ: chia 120 thành ba phần tỉ lệ `2:3:5`.", block, "03 dãy tỉ số dạng hiệu")
block2 = r'''> **Kiểm tra mô hình:** không phải cứ một đại lượng tăng còn đại lượng kia giảm thì chúng tỉ lệ nghịch. Muốn kết luận tỉ lệ nghịch, tích `xy` phải giữ nguyên bằng một hằng số khác `0` trên các cặp giá trị đang xét.'''
text = insert_before(text, "Ví dụ: cùng một quãng đường, vận tốc và thời gian tỉ lệ nghịch:", block2, "03 tiêu chuẩn tỉ lệ nghịch")
write(rel, text); changed.append(rel)

# 04 — bản đồ có nêu phép chia nhưng phần core trước đây chưa dạy; bổ sung đúng phạm vi chia hết.
rel = "docs/kien-thuc/04-bieu-thuc-dai-so/index.md"
text = read(rel)
block = r'''#### Chia đơn thức và đa thức trong trường hợp chia hết

Với đơn thức, phép chia thực hiện được trong phạm vi đa thức khi phần biến của số bị chia chứa đủ các lũy thừa của phần biến ở số chia.

Ví dụ:

```text
12x^5y^3 : 3x^2y = 4x^3y^2
```

Với đa thức chia cho đơn thức, nếu **mỗi hạng tử** đều chia hết cho đơn thức đó thì chia từng hạng tử rồi cộng các thương:

```text
(6x^3 - 9x^2 + 3x) : 3x
= 2x^2 - 3x + 1
```

Ở đây `3x` được hiểu là một đơn thức khác đa thức `0`. Nếu biểu thức được viết dưới dạng phân thức và thay một giá trị cụ thể cho `x`, vẫn phải giữ điều kiện mẫu khác `0`.

> Không được “chia/rút gọn” xuyên qua dấu cộng hoặc trừ. Chẳng hạn `(x + 2)/x` không thể rút `x` với riêng hạng tử `x` ở tử. Đây là cầu nối quan trọng sang Chuyên đề 07.'''
text = insert_before(text, "### 3.4. Điều kiện xác định và giá trị biểu thức", block, "04 phép chia")
write(rel, text); changed.append(rel)

# 06 — bài tập hiện có tam thức x^2-5x+6, x^2-x-6; cần dạy tách hạng tử trước khi yêu cầu học sinh làm.
rel = "docs/kien-thuc/06-phan-tich-da-thuc/index.md"
text = read(rel)
old = "- [ ] Biết nhóm hạng tử để tạo nhân tử chung hoặc hằng đẳng thức."
new = "- [ ] Biết nhóm hạng tử để tạo nhân tử chung hoặc hằng đẳng thức; ở mức vận dụng, biết tách một hạng tử phù hợp để tạo nhóm."
text = replace_once(text, old, new, "06 mục tiêu tách hạng tử")
old_heading = "### 3.6. Phương pháp 4 – Phối hợp nhiều phương pháp"
new_heading = "### 3.7. Phương pháp 4 – Phối hợp nhiều phương pháp"
text = replace_once(text, old_heading, new_heading, "06 đổi số mục phối hợp")
block = r'''### 3.6. Mở rộng – Tách hạng tử để tạo nhóm

Đây là kỹ thuật **vận dụng**, hữu ích với một số tam thức bậc hai chưa xuất hiện nhân tử chung hay hằng đẳng thức ngay lập tức.

Với biểu thức dạng:

```text
x^2 + bx + c
```

nếu tìm được hai số `p`, `q` sao cho:

```text
p + q = b
pq = c
```

thì có thể tách:

```text
bx = px + qx
```

rồi nhóm hạng tử.

Ví dụ:

```text
x^2 - 5x + 6
= x^2 - 2x - 3x + 6
= x(x - 2) - 3(x - 2)
= (x - 2)(x - 3)
```

vì `-2 + (-3) = -5` và `(-2)(-3) = 6`.

> Không nên thử cặp số một cách máy móc trong mọi bài. Kỹ thuật này chỉ nên dùng khi cặp `p, q` dễ nhận ra; sau khi phân tích phải nhân trở lại để kiểm tra.'''
text = insert_before(text, new_heading, block, "06 tách hạng tử")
write(rel, text); changed.append(rel)

# 07 — làm rõ khái niệm bằng nhau và miền xác định khi nhân/rút gọn phân thức.
rel = "docs/kien-thuc/07-phan-thuc-dai-so/index.md"
text = read(rel)
old = r'''Với `B ≠ 0`, `D ≠ 0`:

`A/B = C/D`

khi và chỉ khi:

`A·D = B·C`.'''
new = r'''Với `B`, `D` là các đa thức khác đa thức `0`, hai phân thức

`A/B` và `C/D`

bằng nhau khi:

`A·D = B·C`

như một đẳng thức đa thức. Khi thay biến bằng giá trị cụ thể, chỉ được so sánh trên **miền xác định chung**, tức là các giá trị làm cả `B` và `D` khác `0`.'''
text = replace_once(text, old, new, "07 hai phân thức bằng nhau")
block = r'''!!! warning "Miền xác định không tự mở rộng"
    Khi nhân cả tử và mẫu với một đa thức `M`, biểu thức mới có thể thêm các giá trị bị loại tại nghiệm của `M`. Ngược lại, khi rút gọn một nhân tử chung, không được lấy lại các giá trị đã bị loại ở phân thức ban đầu. Vì vậy mọi đẳng thức biến đổi phân thức phải được hiểu trên **miền xác định chung** của các biểu thức đang so sánh.'''
text = insert_before(text, "### 3.5. Quy tắc đổi dấu", block, "07 miền xác định")
write(rel, text); changed.append(rel)

report = r'''# Audit học thuật thủ công – Chuyên đề 02–07 (V1)

> Phạm vi: đọc thủ công phần kiến thức cốt lõi, ví dụ, dạng bài và đối chiếu với bài luyện/tự kiểm tra hiện có. Báo cáo này bổ sung cho audit cấu trúc tự động; nó không thay thế việc tiếp tục kiểm tra từng câu Practice Bank.

## Kết luận nhanh

| Chuyên đề | Đánh giá sau audit | Điều chỉnh chính |
|---:|---|---|
| 02 | PASS sau bổ sung | Làm rõ số vô tỉ/số thực; bổ sung làm tròn và giá trị gần đúng |
| 03 | PASS sau bổ sung | Chặt điều kiện của tỉ số trong tỉ lệ thuận; bổ sung dạng hiệu của dãy tỉ số; tiêu chuẩn nhận biết tỉ lệ nghịch |
| 04 | PASS sau bổ sung | Bổ sung phép chia đơn thức/đa thức trong trường hợp chia hết để khớp với bản đồ kiến thức |
| 05 | PASS | 7 hằng đẳng thức, hai chiều sử dụng, ví dụ và lỗi sai đã đủ cân đối; chưa thấy khoảng trống cốt lõi cần sửa ở vòng này |
| 06 | PASS sau bổ sung | Bổ sung kỹ thuật tách hạng tử để tạo nhóm, vì bài tập hiện có yêu cầu phân tích các tam thức như `x²-5x+6` |
| 07 | PASS sau bổ sung | Làm rõ khái niệm hai phân thức bằng nhau và nguyên tắc miền xác định chung khi nhân/rút gọn |

## Các phát hiện đáng chú ý

### 02 – Số và phép tính

Trang đã mạnh ở số nguyên, phân số, lũy thừa, chia hết, ƯCLN–BCNN và phần trăm. Khoảng trống là mạch **hữu tỉ → vô tỉ → số thực** và **làm tròn/giá trị gần đúng** chưa được trình bày đủ rõ so với vai trò chuyên đề 6–9. Đã bổ sung mà không làm nặng phần căn thức lớp 9.

### 03 – Tỉ lệ

Nội dung đúng và thực tế, nhưng công thức `y1/x1 = y2/x2` trước đây chưa ghi điều kiện `x1, x2 ≠ 0`; điều này dễ tạo thói quen viết tỉ số có mẫu 0. Đã sửa. Đồng thời bổ sung dạng hiệu của dãy tỉ số bằng nhau và nhấn mạnh rằng “một tăng, một giảm” chưa đủ để kết luận tỉ lệ nghịch; phải kiểm tra tích không đổi.

### 04 – Biểu thức đại số

Bản đồ kiến thức có nêu phép chia đơn thức/đa thức nhưng phần kiến thức cốt lõi chưa giải thích. Đã bổ sung phép chia trong **trường hợp chia hết**, kèm cảnh báo không rút gọn xuyên qua dấu cộng/trừ. Phần này cũng tạo cầu nối tốt hơn sang phân thức.

### 05 – Hằng đẳng thức

Không phát hiện lỗi học thuật đáng kể trong vòng đọc thủ công này. Bảy công thức, dấu, nhận dạng hai chiều và ví dụ đều nhất quán. Giữ nguyên để tránh thêm nội dung không cần thiết.

### 06 – Phân tích đa thức thành nhân tử

Đây là khoảng trống sư phạm rõ nhất: bài tập/tự kiểm tra đã có các tam thức như `x²-5x+6`, nhưng bài học chưa dạy thao tác **tách hạng tử giữa để nhóm**. Đã bổ sung ở mức “mở rộng/vận dụng”, tránh biến nó thành mẹo bắt buộc cho mọi bài.

### 07 – Phân thức đại số

Nội dung điều kiện xác định nhìn chung tốt. Đã làm chặt thêm sự khác nhau giữa **đẳng thức của phân thức** và **giá trị sau khi thay biến**, đồng thời nhấn mạnh mọi phép nhân/rút gọn chỉ bảo toàn giá trị trên miền xác định chung; rút gọn không được “lấy lại” giá trị bị loại của biểu thức ban đầu.

## Nguyên tắc cho vòng tiếp theo

1. Giữ mô hình: core ngắn gọn nhưng không bỏ điều kiện quan trọng.
2. Nếu bài tập yêu cầu một kỹ thuật, kỹ thuật đó phải xuất hiện trước trong bài học hoặc được đánh dấu rõ là vận dụng/mở rộng.
3. Không thêm mẹo chỉ để tăng số lượng nội dung.
4. Vòng tiếp theo audit 08–12 nên ưu tiên điều kiện nghiệm, bất phương trình, tham số, căn thức và phạm vi kiến thức chuẩn bị THPT.
'''
report_path = ROOT / "docs" / "roadmap" / "audit-hoc-thuat-02-07-v1.md"
report_path.write_text(report, encoding="utf-8")
changed.append(str(report_path.relative_to(ROOT)))

print(f"Applied manual academic audit changes: {len(changed)} files")
for p in changed:
    print(p)
