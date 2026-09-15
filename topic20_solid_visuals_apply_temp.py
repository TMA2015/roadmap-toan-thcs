#!/usr/bin/env python3
from pathlib import Path

path = Path("docs/kien-thuc/20-hinh-hoc-tong-hop/index.md")
text = path.read_text(encoding="utf-8")


def replace_once(old: str, new: str, guard: str) -> None:
    global text
    if guard in text:
        return
    if old not in text:
        raise RuntimeError(f"Không tìm thấy marker: {old[:100]!r}")
    text = text.replace(old, new, 1)


replace_once(
    "#### Lăng trụ đứng\n\nVới chu vi đáy `P_đáy`, diện tích đáy `S_đáy`, chiều cao `h`:\n\n`S_xq = P_đáy × h`\n\n`V = S_đáy × h`\n\nHình hộp chữ nhật là một trường hợp quen thuộc; nếu kích thước là `a, b, c` thì `V = abc`.\n",
    "#### Hình hộp chữ nhật\n\n<p align=\"center\">\n  <img src=\"../../assets/geometry/20/20-hinh-hop-chu-nhat.svg\"\n       alt=\"Hình hộp chữ nhật với ba kích thước a, b, c\"\n       width=\"520\">\n</p>\n\nNếu ba kích thước của hình hộp chữ nhật là `a`, `b`, `c` thì:\n\n`V = a × b × c`\n\n> Ba kích thước phải được đổi về **cùng đơn vị độ dài** trước khi tính thể tích.\n\n#### Lăng trụ đứng\n\n<p align=\"center\">\n  <img src=\"../../assets/geometry/20/20-lang-tru-dung.svg\"\n       alt=\"Lăng trụ đứng với chu vi đáy P_đáy, diện tích đáy S_đáy và chiều cao h\"\n       width=\"520\">\n</p>\n\nVới chu vi đáy `P_đáy`, diện tích đáy `S_đáy`, chiều cao `h`:\n\n`S_xq = P_đáy × h`\n\n`V = S_đáy × h`\n\n> Hình hộp chữ nhật là một trường hợp của lăng trụ đứng; công thức `V = S_đáy × h` vẫn áp dụng.\n",
    "20-hinh-hop-chu-nhat.svg",
)

replace_once(
    "#### Hình chóp tam giác đều và hình chóp tứ giác đều\n\nVới `p` là **nửa chu vi đáy**, `d` là trung đoạn của hình chóp đều, `h` là chiều cao:\n",
    "#### Hình chóp tam giác đều và hình chóp tứ giác đều\n\n<p align=\"center\">\n  <img src=\"../../assets/geometry/20/20-hinh-chop-deu.svg\"\n       alt=\"Hình chóp đều với nửa chu vi đáy p, diện tích đáy S_đáy, chiều cao h và trung đoạn d\"\n       width=\"520\">\n</p>\n\nVới `p` là **nửa chu vi đáy**, `d` là trung đoạn của hình chóp đều, `h` là chiều cao:\n",
    "20-hinh-chop-deu.svg",
)

replace_once(
    "#### Hình trụ\n\nVới bán kính đáy `r`, chiều cao `h`:\n",
    "#### Hình trụ\n\n<p align=\"center\">\n  <img src=\"../../assets/geometry/20/20-hinh-tru.svg\"\n       alt=\"Hình trụ với bán kính đáy r và chiều cao h\"\n       width=\"500\">\n</p>\n\nVới bán kính đáy `r`, chiều cao `h`:\n",
    "20-hinh-tru.svg",
)

replace_once(
    "#### Hình nón\n\nVới bán kính đáy `r`, chiều cao `h`, đường sinh `l`:\n",
    "#### Hình nón\n\n<p align=\"center\">\n  <img src=\"../../assets/geometry/20/20-hinh-non.svg\"\n       alt=\"Hình nón với bán kính đáy r, chiều cao h và đường sinh l\"\n       width=\"500\">\n</p>\n\nVới bán kính đáy `r`, chiều cao `h`, đường sinh `l`:\n",
    "20-hinh-non.svg",
)

replace_once(
    "#### Hình cầu\n\nVới bán kính `r`:\n",
    "#### Hình cầu\n\n<p align=\"center\">\n  <img src=\"../../assets/geometry/20/20-hinh-cau.svg\"\n       alt=\"Hình cầu tâm O với bán kính r\"\n       width=\"480\">\n</p>\n\nVới bán kính `r`:\n",
    "20-hinh-cau.svg",
)

path.write_text(text, encoding="utf-8")
print("Đã gắn 6 hình minh họa hình khối vào Chuyên đề 20.")
