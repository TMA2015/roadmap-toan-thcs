from pathlib import Path

p = Path('docs/kien-thuc/02-so-va-phep-tinh/index.md')
text = p.read_text(encoding='utf-8')
needle = 'Giá trị tuyệt đối của `a`, kí hiệu `|a|`, là khoảng cách từ điểm biểu diễn `a` đến 0 trên trục số.\n\n'
insert = needle + '![Trục số minh họa hai số đối −5 và 5 có cùng khoảng cách 5 đơn vị đến 0](../../assets/infographics/02/02-04-truc-so-gia-tri-tuyet-do.svg)\n\n> Trên trục số, `−5` và `5` nằm đối xứng qua `0`. Hai điểm đều cách `0` đúng `5` đơn vị, nên `|−5| = |5| = 5`.\n\n'
if '02-04-truc-so-gia-tri-tuyet-do.svg' not in text:
    if needle not in text:
        raise SystemExit('Không tìm thấy vị trí chèn hình ở mục 3.2')
    text = text.replace(needle, insert, 1)
p.write_text(text, encoding='utf-8')
