#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def read(path):
    return (ROOT / path).read_text(encoding="utf-8")


def write(path, text):
    (ROOT / path).write_text(text, encoding="utf-8")


def replace_once(path, old, new, guard=None):
    text = read(path)
    if guard and guard in text:
        return
    if old not in text:
        raise RuntimeError(f"Text not found in {path}: {old[:120]!r}")
    text = text.replace(old, new, 1)
    write(path, text)


def insert_after(path, anchor, addition, guard=None):
    text = read(path)
    if guard and guard in text:
        return
    if anchor not in text:
        raise RuntimeError(f"Anchor not found in {path}: {anchor[:120]!r}")
    text = text.replace(anchor, anchor + addition, 1)
    write(path, text)


# 21 — complete the 6–9 statistics progression.
p21 = "docs/kien-thuc/21-thong-ke/index.md"
replace_once(
    p21,
    "├── Tổ chức dữ liệu\n│   ├── bảng dữ liệu\n│   ├── bảng tần số\n│   └── bảng tần suất\n│\n├── Biểu diễn dữ liệu\n│   ├── biểu đồ cột\n│   ├── biểu đồ đoạn thẳng\n│   └── biểu đồ phù hợp theo mục tiêu\n",
    "├── Tổ chức dữ liệu\n│   ├── bảng dữ liệu\n│   ├── bảng tần số\n│   ├── bảng tần suất / tần số tương đối\n│   └── bảng tần số ghép nhóm\n│\n├── Biểu diễn dữ liệu\n│   ├── biểu đồ cột / cột kép\n│   ├── biểu đồ đoạn thẳng\n│   ├── biểu đồ hình quạt tròn\n│   └── biểu đồ cho dữ liệu ghép nhóm\n",
    guard="bảng tần số ghép nhóm",
)

insert_after(
    p21,
    "- [ ] Lập được bảng tần số và tần suất.\n",
    "- [ ] Đọc và lập được biểu đồ cột kép, biểu đồ hình quạt tròn trong tình huống phù hợp.\n- [ ] Nhận biết được dữ liệu ghép nhóm; lập được bảng tần số và tần số tương đối ghép nhóm ở mức THCS.\n",
    guard="Nhận biết được dữ liệu ghép nhóm",
)

replace_once(
    p21,
    "### 3.3. Tần suất\n\nTần suất cho biết một giá trị chiếm bao nhiêu phần trong toàn bộ dữ liệu:\n",
    "### 3.3. Tần suất (tần số tương đối)\n\nTần suất, hay **tần số tương đối**, cho biết một giá trị chiếm bao nhiêu phần trong toàn bộ dữ liệu:\n",
    guard="### 3.3. Tần suất (tần số tương đối)",
)

anchor21 = """### 3.6. Biểu đồ đoạn thẳng

Phù hợp khi dữ liệu thay đổi theo thời gian.

Cần quan sát:
- xu hướng tăng;
- xu hướng giảm;
- điểm cao nhất, thấp nhất;
- đoạn thay đổi mạnh.
"""
addition21 = """

### 3.6A. Biểu đồ cột kép và biểu đồ hình quạt tròn

**Biểu đồ cột kép** phù hợp khi cần so sánh **hai dãy số liệu theo cùng các nhóm**. Khi đọc phải đối chiếu đúng chú giải, vì hai cột đứng cạnh nhau nhưng biểu diễn hai đối tượng khác nhau.

**Biểu đồ hình quạt tròn** phù hợp khi cần mô tả **cơ cấu các phần trong một tổng thể**. Toàn bộ hình tròn tương ứng `100%` hay `360°`.

Nếu một nhóm chiếm `p%` thì góc ở tâm của hình quạt tương ứng là:

`góc = p/100 × 360° = 3,6p°`

> Chỉ dùng biểu đồ quạt tròn khi các phần thuộc cùng một tổng thể. Tổng các tỉ lệ phải bằng `100%` (sai khác rất nhỏ có thể xuất hiện do làm tròn).

### 3.6B. Dữ liệu ghép nhóm, tần số và tần số tương đối ghép nhóm

Khi có nhiều số liệu số và cần trình bày gọn, có thể chia dữ liệu thành các **nhóm không chồng lấn** như:

`[a₁; a₂), [a₂; a₃), ..., [aₖ; aₖ₊₁)`

Mỗi giá trị chỉ được thuộc **một** nhóm.

- **Tần số của một nhóm**: số giá trị nằm trong nhóm đó.
- **Tần số tương đối của một nhóm**: `tần số nhóm / cỡ mẫu`.

Luôn kiểm tra:

`∑ tần số nhóm = N`

và:

`∑ tần số tương đối = 1` (hoặc `100%`).

Khi cần biểu diễn dữ liệu ghép nhóm bằng biểu đồ đoạn thẳng, có thể dùng **giá trị đại diện của nhóm**, thường là trung điểm của khoảng:

`xᵢ = (aᵢ + aᵢ₊₁)/2`

> Các nhóm phải bao phủ toàn bộ dữ liệu và quy ước đầu mút phải nhất quán; nếu nhóm bị chồng lấn, một giá trị ở biên có thể bị đếm hai lần.
"""
insert_after(p21, anchor21, addition21, guard="### 3.6B. Dữ liệu ghép nhóm")

insert_after(
    p21,
    "### Dạng 6. Chuyển đổi giữa bảng và biểu đồ\n\nTừ bảng → vẽ biểu đồ, hoặc từ biểu đồ → lập lại bảng.\n",
    "\n### Dạng 6A. Biểu đồ cột kép và biểu đồ hình quạt tròn\n\nSo sánh đúng hai dãy số liệu trên cột kép; với quạt tròn, kiểm tra tổng tỉ lệ và đổi `p% ↔ 3,6p°` khi cần.\n\n### Dạng 6B. Dữ liệu ghép nhóm\n\nChọn các khoảng nhóm không chồng lấn, đếm tần số từng nhóm, tính tần số tương đối và đọc/vẽ biểu đồ tương ứng.\n",
    guard="### Dạng 6B. Dữ liệu ghép nhóm",
)

replace_once(
    p21,
    "2. Tính tần số, tần suất, phần trăm.\n3. So sánh hai nhóm dữ liệu.\n4. Nhận xét xu hướng.\n5. Kết hợp với số trung bình, trung vị ở Chuyên đề 22.\n",
    "2. Tính tần số, tần suất/tần số tương đối, phần trăm.\n3. Đọc biểu đồ cột kép, quạt tròn và dữ liệu ghép nhóm khi xuất hiện.\n4. So sánh hai nhóm dữ liệu và nhận xét xu hướng.\n5. Kết hợp với số trung bình, trung vị ở Chuyên đề 22.\n",
    guard="Đọc biểu đồ cột kép, quạt tròn và dữ liệu ghép nhóm",
)

insert_after(
    p21,
    "| Nhầm biểu đồ cột với biểu đồ theo thời gian | Xác định mục tiêu dữ liệu trước |\n",
    "| Đọc cột kép nhưng quên chú giải | Xác định rõ mỗi màu/cột thuộc dãy số liệu nào |\n| Chia nhóm bị chồng lấn hoặc bỏ hở | Dùng các khoảng liên tiếp và thống nhất quy ước đầu mút |\n| Biểu đồ quạt tròn có tổng tỉ lệ khác xa `100%` | Kiểm tra lại phần trăm trước khi vẽ/đọc |\n",
    guard="Chia nhóm bị chồng lấn hoặc bỏ hở",
)

replace_once(
    p21,
    "- [ ] Đọc chính xác biểu đồ cột và đoạn thẳng.\n- [ ] Chọn đúng dạng biểu diễn dữ liệu.\n",
    "- [ ] Đọc chính xác biểu đồ cột, cột kép, đoạn thẳng và hình quạt tròn.\n- [ ] Lập được bảng tần số/tần số tương đối ghép nhóm cơ bản.\n- [ ] Chọn đúng dạng biểu diễn dữ liệu.\n",
    guard="Lập được bảng tần số/tần số tương đối ghép nhóm cơ bản",
)

# 23 — restore empirical probability and make multi-step dependence safer.
p23 = "docs/kien-thuc/23-xac-suat/index.md"
replace_once(
    p23,
    "├── Xác suất cổ điển\n│   └── P(A) = n(A) / n(Ω)\n│\n└── Thí nghiệm nhiều bước\n",
    "├── Xác suất thực nghiệm\n│   └── số lần A xảy ra / số lần thử\n│\n├── Xác suất cổ điển\n│   └── P(A) = n(A) / n(Ω) khi đồng khả năng\n│\n└── Thí nghiệm nhiều bước\n",
    guard="├── Xác suất thực nghiệm",
)

insert_after(
    p23,
    "- [ ] Tính được xác suất cổ điển khi các kết quả đồng khả năng.\n",
    "- [ ] Tính và diễn giải được xác suất thực nghiệm từ một thí nghiệm lặp lại.\n- [ ] Phân biệt được xác suất thực nghiệm với xác suất theo mô hình đồng khả năng.\n",
    guard="Phân biệt được xác suất thực nghiệm",
)

anchor23 = """Luôn có:

`0 ≤ P(A) ≤ 1`
"""
addition23 = """

### 3.4A. Xác suất thực nghiệm

Thực hiện cùng một phép thử `n` lần. Nếu biến cố `A` xảy ra `m` lần thì **xác suất thực nghiệm** của `A` trong loạt thử đó là:

`P_thực nghiệm(A) = m/n`

Ví dụ, gieo một đồng xu `50` lần và quan sát được `27` lần ngửa thì:

`P_thực nghiệm(Ngửa) = 27/50 = 0,54`

Cần phân biệt:

- `m/n` được tính từ **kết quả quan sát thực tế**;
- `n(A)/n(Ω)` là xác suất theo **mô hình có các kết quả đồng khả năng**.

Khi một thí nghiệm ổn định được lặp lại nhiều lần, tần số tương đối của biến cố thường có xu hướng ổn định quanh xác suất của biến cố trong mô hình. Tuy nhiên, với một số lần thử hữu hạn, hai giá trị **không bắt buộc bằng nhau**.
"""
insert_after(p23, anchor23, addition23, guard="### 3.4A. Xác suất thực nghiệm")

insert_after(
    p23,
    "- Nếu bước sau **phụ thuộc** vào kết quả trước, xác suất ở bước sau phải là xác suất ứng với điều kiện đã xảy ra.\n",
    "\n> Ví dụ khi rút vật **không hoàn lại**, thành phần còn lại trong hộp đã thay đổi. Vì vậy không được tự động dùng lại xác suất ban đầu ở bước sau; phải cập nhật số trường hợp còn lại trên từng nhánh.\n",
    guard="rút vật **không hoàn lại**",
)

insert_after(
    p23,
    "| Các kết quả đồng khả năng | Dùng `P(A)=n(A)/n(Ω)` |\n",
    "| Có số liệu từ nhiều lần thử thực tế | Dùng `P_thực nghiệm(A)=m/n` |\n",
    guard="P_thực nghiệm(A)=m/n",
)

insert_after(
    p23,
    "### Dạng 2. Tính xác suất một biến cố đơn giản\n\nDùng:\n\n`P(A) = n(A)/n(Ω)`\n\nkhi các kết quả đồng khả năng.\n",
    "\n### Dạng 2A. Xác suất thực nghiệm\n\nTừ số lần biến cố xảy ra trong `n` lần thử, tính `m/n` và diễn giải kết quả theo đúng loạt thí nghiệm đã thực hiện.\n",
    guard="### Dạng 2A. Xác suất thực nghiệm",
)

replace_once(
    p23,
    "3. Dùng xác suất cổ điển đúng điều kiện.\n4. Dùng sơ đồ cây cho nhiều bước.\n5. Xử lý các câu “ít nhất một”, “đúng một”.\n6. Viết kết luận phù hợp ngữ cảnh.\n",
    "3. Phân biệt xác suất thực nghiệm với xác suất theo mô hình đồng khả năng.\n4. Dùng xác suất cổ điển đúng điều kiện.\n5. Dùng sơ đồ cây cho nhiều bước và cập nhật đúng khi bước sau phụ thuộc bước trước.\n6. Xử lý các câu “ít nhất một”, “đúng một”.\n7. Viết kết luận phù hợp ngữ cảnh.\n",
    guard="Phân biệt xác suất thực nghiệm với xác suất theo mô hình đồng khả năng.",
)

insert_after(
    p23,
    "| Dùng `n(A)/n(Ω)` khi kết quả không đồng khả năng | Kiểm tra điều kiện trước |\n",
    "| Nhầm xác suất thực nghiệm với xác suất lý thuyết | Xác định giá trị đang đến từ dữ liệu quan sát hay từ mô hình |\n| Rút không hoàn lại nhưng vẫn dùng xác suất ban đầu ở bước sau | Cập nhật số phần tử còn lại trên từng nhánh |\n",
    guard="Nhầm xác suất thực nghiệm với xác suất lý thuyết",
)

replace_once(
    p23,
    "8. Với câu “ít nhất một”, chiến lược nào thường ngắn hơn?\n\n**Tiêu chí đạt:** đúng ít nhất `7/8` câu và giải được một bài xác suất nhiều bước.\n",
    "8. Với câu “ít nhất một”, chiến lược nào thường ngắn hơn?\n9. Xác suất thực nghiệm được tính như thế nào và vì sao không nhất thiết bằng đúng xác suất của mô hình sau một số hữu hạn lần thử?\n\n**Tiêu chí đạt:** đúng ít nhất `8/9` câu và giải được một bài xác suất nhiều bước.\n",
    guard="9. Xác suất thực nghiệm được tính như thế nào",
)

insert_after(
    p23,
    "- [ ] Dùng đúng công thức xác suất cổ điển.\n",
    "- [ ] Tính và phân biệt được xác suất thực nghiệm.\n",
    guard="Tính và phân biệt được xác suất thực nghiệm",
)

# 24 — make modelling assumptions and repeated percentage changes explicit.
p24 = "docs/kien-thuc/24-bai-toan-thuc-te/index.md"
insert_after(
    p24,
    "- [ ] Lập và giải được mô hình toán học.\n",
    "- [ ] Nêu được các giả định quan trọng của mô hình và nhận biết khi kết quả chỉ là xấp xỉ.\n",
    guard="Nêu được các giả định quan trọng của mô hình",
)

anchor24 = """Một lời giải đầy đủ thường có 4 lớp:

1. **Tình huống thực tế**
2. **Mô hình toán học**
3. **Giải mô hình**
4. **Diễn giải kết quả**
"""
addition24 = """

### 3.1A. Giả định và giới hạn của mô hình

Mô hình toán học thường **đơn giản hóa thực tế**. Trước khi lập công thức hoặc phương trình, nên xác định các giả định đang dùng, chẳng hạn:

- vận tốc được coi là không đổi trên một chặng;
- năng suất được coi là không đổi;
- vật thể được coi là hình khối lý tưởng;
- tỉ lệ, giá hoặc lãi suất được coi là không đổi trong khoảng đang xét.

Nếu giả định thay đổi thì kết quả có thể thay đổi. Vì vậy cần phân biệt:

- **kết quả chính xác trong mô hình**;
- **giá trị xấp xỉ trong thực tế** sau đo đạc, làm tròn hoặc đơn giản hóa.

> Không nên làm tròn quá sớm ở các bước trung gian; giữ đủ chữ số rồi làm tròn ở kết quả cuối theo yêu cầu của đề.
"""
insert_after(p24, anchor24, addition24, guard="### 3.1A. Giả định và giới hạn của mô hình")

replace_once(
    p24,
    "### 3.4. Bài toán chuyển động\n\nBa công thức cơ bản:\n",
    "### 3.4. Bài toán chuyển động\n\nTrong **chuyển động đều**, hoặc khi `v` là vận tốc trung bình phù hợp trên toàn quãng đường đang xét, dùng:\n",
    guard="vận tốc trung bình phù hợp",
)

insert_after(
    p24,
    "`t = S/v`\n\nLuôn đổi đơn vị trước khi lập phương trình.\n",
    "\n> Không lấy trung bình cộng các vận tốc một cách máy móc. Nếu đi các chặng với vận tốc khác nhau, hãy tính **tổng quãng đường / tổng thời gian** để tìm vận tốc trung bình, trừ khi đề có điều kiện đặc biệt cho phép cách khác.\n",
    guard="Không lấy trung bình cộng các vận tốc",
)

anchor246 = """Cần đặc biệt chú ý **giá trị gốc** mà phần trăm được tính trên đó.
"""
addition246 = """

### 3.6A. Thay đổi phần trăm liên tiếp

Khi một đại lượng thay đổi nhiều lần, phải nhân các **hệ số thay đổi** theo thứ tự, không cộng/trừ các phần trăm một cách máy móc.

Ví dụ tăng `10%` rồi giảm `10%`:

`giá cuối = giá đầu × 1,10 × 0,90 = 0,99 × giá đầu`

Vì vậy giá cuối thấp hơn giá đầu `1%`, không trở lại đúng giá ban đầu.
"""
insert_after(p24, anchor246, addition246, guard="### 3.6A. Thay đổi phần trăm liên tiếp")

replace_once(
    p24,
    "### Dạng 3. Phần trăm – tăng giảm giá\n\nXác định đúng giá trị gốc rồi áp dụng tỉ lệ phần trăm.\n",
    "### Dạng 3. Phần trăm – tăng giảm giá\n\nXác định đúng giá trị gốc rồi áp dụng tỉ lệ phần trăm. Với nhiều lần tăng/giảm liên tiếp, nhân các hệ số `(1 ± p%)` theo đúng thứ tự.\n",
    guard="nhân các hệ số `(1 ± p%)`",
)

# 25 — synchronize the final roadmap with the completed statistics/probability coverage.
p25 = "docs/kien-thuc/25-tong-hop-on-thi-10/index.md"
replace_once(
    p25,
    "├── Thống kê & xác suất\n│   ├── bảng – biểu đồ\n│   ├── đại lượng đặc trưng\n│   └── xác suất\n",
    "├── Thống kê & xác suất\n│   ├── bảng – biểu đồ – dữ liệu ghép nhóm\n│   ├── đại lượng đặc trưng\n│   └── xác suất thực nghiệm & xác suất theo mô hình\n",
    guard="dữ liệu ghép nhóm",
)

replace_once(
    p25,
    "**Thống kê – xác suất**\n\nTập trung vào:\n- bảng và biểu đồ;\n- trung bình, trung vị, mốt;\n- xác suất đơn giản và nhiều bước.\n",
    "**Thống kê – xác suất**\n\nTập trung vào:\n- bảng tần số, tần số tương đối, biểu đồ và dữ liệu ghép nhóm;\n- trung bình, trung vị, mốt và khoảng biến thiên;\n- xác suất thực nghiệm, xác suất theo mô hình đồng khả năng và bài nhiều bước.\n",
    guard="xác suất thực nghiệm, xác suất theo mô hình đồng khả năng",
)

insert_after(
    p25,
    "Ma trận trên chỉ là khung. Cần điều chỉnh theo cấu trúc đề chính thức của địa phương.\n",
    "\nKhi xếp chuyên đề vào A–B–C–D, nên dựa trên **bằng chứng học tập** như kết quả 3–5 bài gần nhất, tỉ lệ câu đúng theo kỹ năng, thời gian làm và lỗi lặp lại; không nên chỉ dựa vào cảm giác “mình mạnh/yếu”.\n",
    guard="bằng chứng học tập",
)

replace_once(
    p25,
    "### Dạng 5. Thống kê – xác suất\n\nĐọc bảng/biểu đồ, tính đại lượng đặc trưng hoặc xác suất.\n",
    "### Dạng 5. Thống kê – xác suất\n\nĐọc bảng/biểu đồ và dữ liệu ghép nhóm; tính đại lượng đặc trưng; phân biệt xác suất thực nghiệm với xác suất theo mô hình và giải các bài xác suất phù hợp.\n",
    guard="phân biệt xác suất thực nghiệm với xác suất theo mô hình",
)

# Audit report.
report = ROOT / "docs/roadmap/audit-hoc-thuat-21-25-v1.md"
report.write_text("""# Audit học thuật thủ công 21–25 – V1

## Phạm vi

Rà soát nội dung học thuật của Chuyên đề 21–25 sau khi hoàn tất audit 02–20. Mục tiêu là bổ sung các khoảng trống thật sự cần thiết, không tăng nội dung cơ học.

## Kết quả theo chuyên đề

### 21 – Thống kê và thu thập dữ liệu

Bổ sung các mảnh còn thiếu trong mạch 6–9:

- biểu đồ cột kép;
- biểu đồ hình quạt tròn và quan hệ `p% ↔ 3,6p°`;
- cách dùng thuật ngữ **tần suất / tần số tương đối**;
- dữ liệu ghép nhóm, bảng tần số và tần số tương đối ghép nhóm;
- quy ước nhóm không chồng lấn, kiểm tra tổng tần số/tần số tương đối;
- giá trị đại diện của nhóm khi cần biểu diễn dạng đoạn thẳng.

### 22 – Các đại lượng đặc trưng của dữ liệu

Đã rà soát và **giữ nguyên**. Trung bình, trung vị, mốt, khoảng biến thiên và ảnh hưởng của ngoại lai hiện cân đối với mục tiêu THCS của Roadmap. Không đưa công thức trung vị/tứ phân vị của mẫu ghép nhóm ở THPT xuống chuyên đề này.

### 23 – Xác suất

Bổ sung:

- xác suất thực nghiệm `m/n`;
- phân biệt xác suất thực nghiệm với xác suất theo mô hình đồng khả năng;
- lưu ý kết quả thực nghiệm hữu hạn không bắt buộc bằng đúng xác suất mô hình;
- xử lý an toàn thí nghiệm nhiều bước phụ thuộc, đặc biệt rút không hoàn lại.

### 24 – Bài toán thực tế và mô hình hóa

Bổ sung:

- giả định và giới hạn của mô hình;
- phân biệt kết quả chính xác trong mô hình với giá trị xấp xỉ thực tế;
- không làm tròn quá sớm;
- vận tốc trung bình phải dựa trên `tổng quãng đường / tổng thời gian`;
- thay đổi phần trăm liên tiếp bằng tích các hệ số thay đổi.

### 25 – Tổng hợp ôn thi vào 10

Không thêm một mảng kiến thức mới. Chỉ đồng bộ bản đồ tổng hợp với dữ liệu ghép nhóm, xác suất thực nghiệm và nhấn mạnh dùng bằng chứng học tập để xếp ma trận ưu tiên A–B–C–D.

## Nguyên tắc

- Không thay đổi Practice Bank trong vòng này.
- Không mở rộng sang nội dung thống kê bậc THPT.
- Sau khi nội dung được duyệt, cần kiểm tra riêng độ phủ của Practice Bank 21–25 đối với các kỹ năng vừa bổ sung.
""", encoding="utf-8")

print("Applied manual academic audit 21–25.")
