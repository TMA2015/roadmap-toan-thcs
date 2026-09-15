#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def insert_after(path, marker, addition, guard):
    p = ROOT / path
    text = p.read_text(encoding="utf-8")
    if guard in text:
        return False
    if marker not in text:
        raise RuntimeError(f"Marker not found in {path}: {marker[:80]!r}")
    text = text.replace(marker, marker + addition, 1)
    p.write_text(text, encoding="utf-8")
    return True


def replace_once(path, old, new, guard=None):
    p = ROOT / path
    text = p.read_text(encoding="utf-8")
    if guard and guard in text:
        return False
    if old not in text:
        raise RuntimeError(f"Text not found in {path}: {old[:80]!r}")
    text = text.replace(old, new, 1)
    p.write_text(text, encoding="utf-8")
    return True

# 15 – make converse/equidistance characterizations explicit.
insert_after(
    "docs/kien-thuc/15-duong-dong-quy/index.md",
    "Do đó `I` là tâm đường tròn nội tiếp tam giác.\n",
    "\n#### Dấu hiệu qua khoảng cách đến hai cạnh của một góc\n\nNếu một điểm nằm **bên trong một góc** và cách đều hai cạnh của góc thì điểm đó nằm trên tia phân giác của góc. Ngược lại, mọi điểm nằm trên tia phân giác và ở bên trong góc đều cách đều hai cạnh.\n\n> Khi dùng khoảng cách từ điểm đến cạnh của góc, khoảng cách được hiểu là độ dài đoạn vuông góc từ điểm đến **đường thẳng chứa cạnh**.\n",
    "#### Dấu hiệu qua khoảng cách đến hai cạnh của một góc",
)
insert_after(
    "docs/kien-thuc/15-duong-dong-quy/index.md",
    "Do đó `O` là tâm đường tròn ngoại tiếp tam giác `ABC`.\n",
    "\n#### Dấu hiệu qua khoảng cách đến hai đầu đoạn thẳng\n\nMột điểm nằm trên đường trung trực của đoạn `AB` thì cách đều `A`, `B`. Ngược lại, nếu `MA = MB` thì `M` nằm trên đường trung trực của `AB`.\n\nDấu hiệu đảo này thường giúp chuyển một đẳng thức độ dài thành kết luận về vị trí của điểm.\n",
    "#### Dấu hiệu qua khoảng cách đến hai đầu đoạn thẳng",
)

# 16 – standardize inclusive trapezoid definition and add trapezoid midline.
replace_once(
    "docs/kien-thuc/16-tu-giac/index.md",
    "Hình thang là tứ giác có một cặp cạnh đối song song.\n\nNếu `AB ∥ CD`, thì `ABCD` là hình thang.",
    "Hình thang là tứ giác có **ít nhất một cặp cạnh đối song song**.\n\nNếu `AB ∥ CD`, thì `ABCD` là hình thang.",
    guard="### 3.2A. Đường trung bình của hình thang",
)
insert_after(
    "docs/kien-thuc/16-tu-giac/index.md",
    "Tính chất quan trọng của hình thang cân:\n- hai cạnh bên bằng nhau;\n- hai đường chéo bằng nhau.\n",
    "\n### 3.2A. Đường trung bình của hình thang\n\nCho hình thang `ABCD` với `AB ∥ CD`. Nếu `M`, `N` lần lượt là trung điểm của hai cạnh bên `AD`, `BC` thì `MN` là đường trung bình của hình thang và:\n\n`MN ∥ AB ∥ CD`\n\n`MN = (AB + CD)/2`\n\nHệ quả này đặc biệt hữu ích khi đề cho trung điểm hai cạnh bên hoặc cần tính tổng hai đáy.\n\n> Không nhầm với đường trung bình của tam giác: trong tam giác độ dài bằng **một nửa cạnh thứ ba**, còn trong hình thang bằng **nửa tổng hai đáy**.\n",
    "### 3.2A. Đường trung bình của hình thang",
)

# 17 – similarity scale factor and perimeter/area consequences.
insert_after(
    "docs/kien-thuc/17-thales-dong-dang/index.md",
    "**Cạnh – cạnh – cạnh (`c-c-c`)**\n\nBa cặp cạnh tương ứng tỉ lệ.\n",
    "\n### 3.5A. Tỉ số đồng dạng và các hệ quả đo lường\n\nNếu `△ABC ∼ △DEF` và:\n\n`AB/DE = BC/EF = CA/FD = k`\n\nthì `k` gọi là **tỉ số đồng dạng** của tam giác `ABC` đối với tam giác `DEF`. Khi đó:\n\n- tỉ số chu vi bằng `k`;\n- tỉ số các đường cao tương ứng bằng `k`;\n- tỉ số các trung tuyến tương ứng bằng `k`;\n- tỉ số các đường phân giác tương ứng bằng `k`;\n- tỉ số diện tích bằng `k²`.\n\nĐặc biệt:\n\n`S_ABC / S_DEF = k²`\n\n> Lỗi hay gặp: hai tam giác có tỉ số cạnh bằng `k` **không** có tỉ số diện tích bằng `k`; diện tích thay đổi theo bình phương tỉ số đồng dạng.\n",
    "### 3.5A. Tỉ số đồng dạng và các hệ quả đo lường",
)

# 18 – add cotangent, complementary relations and standard special angles.
replace_once(
    "docs/kien-thuc/18-he-thuc-luong/index.md",
    "│   ├── tan = đối / kề\n",
    "│   ├── tan = đối / kề\n│   └── cot = kề / đối\n",
    guard="cot = kề / đối",
)
replace_once(
    "docs/kien-thuc/18-he-thuc-luong/index.md",
    "| Tan | `tan α = cạnh đối / cạnh kề` |\n",
    "| Tan | `tan α = cạnh đối / cạnh kề` |\n| Cot | `cot α = cạnh kề / cạnh đối` |\n",
    guard="| Cot | `cot α",
)
replace_once(
    "docs/kien-thuc/18-he-thuc-luong/index.md",
    "- `tan` → đối / kề.\n",
    "- `tan` → đối / kề;\n- `cot` → kề / đối.\n",
    guard="- `cot` → kề / đối.",
)
replace_once(
    "docs/kien-thuc/18-he-thuc-luong/index.md",
    "`tan α = cạnh đối / cạnh kề`\n\nTừ đó có thể:",
    "`tan α = cạnh đối / cạnh kề`\n\n`cot α = cạnh kề / cạnh đối`\n\nTừ đó có thể:",
    guard="`cot α = cạnh kề / cạnh đối`",
)
replace_once(
    "docs/kien-thuc/18-he-thuc-luong/index.md",
    "`tan α = sin α / cos α`\n",
    "`tan α = sin α / cos α`\n\n`cot α = cos α / sin α`\n\n`tan α · cot α = 1`\n\nNếu `α + β = 90°` thì:\n\n- `sin α = cos β`, `cos α = sin β`;\n- `tan α = cot β`, `cot α = tan β`.\n\n### 3.4A. Giá trị lượng giác của các góc đặc biệt\n\n| Góc | `sin` | `cos` | `tan` | `cot` |\n|---:|---:|---:|---:|---:|\n| `30°` | `1/2` | `√3/2` | `√3/3` | `√3` |\n| `45°` | `√2/2` | `√2/2` | `1` | `1` |\n| `60°` | `√3/2` | `1/2` | `√3` | `√3/3` |\n\nKhông nhất thiết học bảng như bốn dòng công thức rời rạc: dùng quan hệ hai góc phụ nhau để kiểm tra chéo `sin ↔ cos` và `tan ↔ cot`.\n",
    guard="### 3.4A. Giá trị lượng giác của các góc đặc biệt",
)

# 19 – tangent-chord angle + arc/sector/annulus measurement.
insert_after(
    "docs/kien-thuc/19-duong-tron/index.md",
    "Ngoài ra, `OP` là đường trung trực của `AB` và là phân giác của `∠APB`. Đây là các tính chất rất hữu ích khi khai thác cấu hình hai tiếp tuyến.\n",
    "\n### 3.3A. Góc tạo bởi tiếp tuyến và dây cung\n\nGóc tạo bởi tiếp tuyến tại `A` và dây `AB` có số đo bằng **một nửa số đo cung bị chắn `AB`**. Vì vậy nó bằng góc nội tiếp cùng chắn cung `AB`.\n\nĐây là cầu nối rất quan trọng:\n\n`tiếp tuyến + dây cung → góc bằng góc nội tiếp → đồng dạng / nội tiếp`\n\n> Khi áp dụng phải xác định đúng cung nằm trong góc đang xét; không chỉ nhìn hai đầu mút của dây rồi chọn tùy ý cung lớn hay cung nhỏ.\n",
    "### 3.3A. Góc tạo bởi tiếp tuyến và dây cung",
)
insert_after(
    "docs/kien-thuc/19-duong-tron/index.md",
    "`PT² = PA × PB`\n",
    "\n### 3.6A. Độ dài cung, diện tích hình quạt và hình vành khuyên\n\nVới đường tròn bán kính `R`, cung có số đo `n°`:\n\n`l = n/360 · 2πR = nπR/180`\n\nDiện tích hình quạt tương ứng:\n\n`S_quạt = n/360 · πR²`\n\nNếu biết độ dài cung `l` thì cũng có:\n\n`S_quạt = lR/2`\n\nVới hình vành khuyên tạo bởi hai đường tròn đồng tâm bán kính `R > r`:\n\n`S_vành = π(R² - r²)`\n\n> Cả độ dài cung và diện tích hình quạt đều tỉ lệ với số đo cung `n°`; đây là cách kiểm tra nhanh tính hợp lý của kết quả.\n",
    "### 3.6A. Độ dài cung, diện tích hình quạt và hình vành khuyên",
)

# 20 – expand measurement/solid geometry to cover current THCS solids.
replace_once(
    "docs/kien-thuc/20-hinh-hoc-tong-hop/index.md",
    "- [ ] Giải được bài đo lường và hình khối cơ bản.\n",
    "- [ ] Giải được bài đo lường và hình khối cơ bản, gồm lăng trụ đứng, hình chóp đều, hình trụ, hình nón và hình cầu.\n",
    guard="gồm lăng trụ đứng, hình chóp đều, hình trụ, hình nón và hình cầu",
)
old_measure = """### 3.6. Đo lường và hình khối\n\nMột số công thức cần nhớ:\n\n**Hình chữ nhật**\n\n`S = a × b`\n\n**Tam giác**\n\n`S = 1/2 × a × h`\n\n**Hình tròn**\n\n`S = πr²`\n\n`C = 2πr`\n\n**Lăng trụ đứng**\n\n`V = S_đáy × h`\n\n**Hình hộp chữ nhật**\n\n`V = a × b × c`\n\nKhi giải bài thực tế, luôn ghi đơn vị diện tích hoặc thể tích.\n"""
new_measure = """### 3.6. Đo lường và hình khối\n\nPhần hình khối cần được học như một mạch xuyên suốt lớp 6–9, không chỉ là một công thức thể tích.\n\n**Hình chữ nhật**\n\n`S = a × b`\n\n**Tam giác**\n\n`S = 1/2 × a × h`\n\n**Hình tròn**\n\n`S = πr²`\n\n`C = 2πr`\n\n#### Lăng trụ đứng\n\nVới chu vi đáy `P_đáy`, diện tích đáy `S_đáy`, chiều cao `h`:\n\n`S_xq = P_đáy × h`\n\n`V = S_đáy × h`\n\nHình hộp chữ nhật là một trường hợp quen thuộc; nếu kích thước là `a, b, c` thì `V = abc`.\n\n#### Hình chóp tam giác đều và hình chóp tứ giác đều\n\nVới `p` là **nửa chu vi đáy**, `d` là trung đoạn của hình chóp đều, `h` là chiều cao:\n\n`S_xq = p × d`\n\n`V = 1/3 × S_đáy × h`\n\n> Không nhầm `d` (trung đoạn nằm trên mặt bên) với `h` (đường cao vuông góc với mặt đáy).\n\n#### Hình trụ\n\nVới bán kính đáy `r`, chiều cao `h`:\n\n`S_xq = 2πrh`\n\n`S_tp = 2πrh + 2πr² = 2πr(h + r)`\n\n`V = πr²h`\n\n#### Hình nón\n\nVới bán kính đáy `r`, chiều cao `h`, đường sinh `l`:\n\n`S_xq = πrl`\n\n`S_tp = πrl + πr² = πr(l + r)`\n\n`V = 1/3 πr²h`\n\nTrong hình nón tròn xoay vuông, `l² = r² + h²`.\n\n#### Hình cầu\n\nVới bán kính `r`:\n\n`S_mặt cầu = 4πr²`\n\n`V_hình cầu = 4/3 πr³`\n\n#### Kiểm tra đơn vị\n\n- độ dài: `cm`, `m`, ...;\n- diện tích: `cm²`, `m²`, ...;\n- thể tích: `cm³`, `m³`, ... .\n\nKhi bài cho nhiều đơn vị khác nhau, phải đổi về cùng một đơn vị **trước khi** thay vào công thức.\n"""
replace_once(
    "docs/kien-thuc/20-hinh-hoc-tong-hop/index.md",
    old_measure,
    new_measure,
    guard="#### Hình trụ",
)
replace_once(
    "docs/kien-thuc/20-hinh-hoc-tong-hop/index.md",
    "### Dạng 7. Đo lường và hình khối\n\nTính diện tích, chu vi, thể tích và đổi đơn vị.\n",
    "### Dạng 7. Đo lường và hình khối\n\nTính diện tích xung quanh, diện tích toàn phần, thể tích và đổi đơn vị cho lăng trụ đứng, hình chóp đều, hình trụ, hình nón và hình cầu. Với hình ghép, tách vật thể thành các khối quen thuộc rồi cộng/trừ thể tích hoặc diện tích phù hợp.\n",
    guard="Với hình ghép, tách vật thể",
)

# Audit report.
report = """# Audit học thuật thủ công 13–20 – v1\n\n> Mục tiêu: rà lại mạch Hình học THCS theo độ chính xác, điều kiện áp dụng, độ phủ kiến thức và khả năng nối sang bài thi vào lớp 10.\n\n## Kết quả theo chuyên đề\n\n| Chuyên đề | Kết quả | Điều chỉnh |\n|---|---|---|\n| 13 – Góc và đường thẳng | Giữ nguyên | Nội dung cốt lõi, tính chất/dấu hiệu song song và chuỗi suy luận đã đủ chặt |\n| 14 – Tam giác | Giữ nguyên | Tổng góc, bất đẳng thức, tam giác đặc biệt, Pythagore và bằng nhau đã cân đối |\n| 15 – Đường đồng quy | Bổ sung nhẹ | Nêu rõ hai chiều của tính chất phân giác–cách đều cạnh và trung trực–cách đều hai đầu đoạn |\n| 16 – Tứ giác | Bổ sung | Chuẩn hóa định nghĩa hình thang theo quy ước Roadmap và thêm đường trung bình hình thang |\n| 17 – Thales & đồng dạng | Bổ sung | Thêm tỉ số đồng dạng và hệ quả về chu vi, đường tương ứng, diện tích `k²` |\n| 18 – Hệ thức lượng | Bổ sung đáng kể | Hoàn thiện `cot`, quan hệ góc phụ nhau và bảng góc đặc biệt 30°–45°–60° |\n| 19 – Đường tròn | Bổ sung đáng kể | Thêm góc tiếp tuyến–dây; độ dài cung, diện tích quạt tròn và vành khuyên |\n| 20 – Tổng hợp & hình khối | Bổ sung lớn | Hoàn thiện lăng trụ đứng, chóp đều, trụ, nón, cầu cùng diện tích/thể tích |\n\n## Nguyên tắc\n\n- Không viết lại 13–14 vì chưa phát hiện khoảng trống đáng sửa.\n- Nội dung mới được đặt ngay trong phần kiến thức cốt lõi thay vì tách thành phụ lục.\n- Không thay Practice Bank trong vòng này; sau khi nội dung được duyệt sẽ kiểm tra độ phủ kỹ năng của ngân hàng câu hỏi so với các mục mới.\n- Hình minh họa mới (nếu cần) nên làm ở một PR riêng sau khi nội dung học thuật được chấp thuận.\n"""
report_path = ROOT / "docs/roadmap/audit-hoc-thuat-13-20-v1.md"
report_path.write_text(report, encoding="utf-8")

print("Applied manual academic audit 13-20.")
