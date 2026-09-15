from pathlib import Path

p = Path('docs/kien-thuc/03-ti-le-ti-le-thuc/index.md')
text = p.read_text(encoding='utf-8')
needle = '### 3.11. Phân biệt tỉ lệ thuận và tỉ lệ nghịch\n\n'
insert = needle + '![So sánh trực quan tỉ lệ thuận y = 2x và tỉ lệ nghịch xy = 8](../../assets/infographics/03/03-04-ti-le-thuan-nghich.svg)\n\n> Nhìn nhanh: nếu `x` gấp đôi mà `y` cũng gấp đôi thì nghĩ đến **tỉ lệ thuận**; nếu `x` gấp đôi mà `y` còn một nửa thì nghĩ đến **tỉ lệ nghịch**. Sau đó vẫn phải kiểm tra đại lượng bất biến: `y/x` hoặc `xy`.\n\n'
if '03-04-ti-le-thuan-nghich.svg' not in text:
    if needle not in text:
        raise SystemExit('Không tìm thấy mục 3.11 để chèn hình')
    text = text.replace(needle, insert, 1)
p.write_text(text, encoding='utf-8')
