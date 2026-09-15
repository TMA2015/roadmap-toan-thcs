#!/usr/bin/env python3
from pathlib import Path

# 1) Thêm gallery vào menu Hướng dẫn.
mk = Path('mkdocs.yml')
text = mk.read_text(encoding='utf-8')
needle = '      - Chuẩn ngân hàng câu hỏi: huong-dan/chuan-ngan-hang-cau-hoi.md\n'
insert = needle + '      - Thư viện hình & QA: huong-dan/qa-diagram-practice.md\n'
if 'Thư viện hình & QA:' not in text:
    if needle not in text:
        raise SystemExit('Không tìm thấy vị trí chèn menu gallery')
    text = text.replace(needle, insert, 1)
mk.write_text(text, encoding='utf-8')

# 2) Mở rộng gallery Practice 13–25 và làm rõ phạm vi.
qa = Path('docs/huong-dan/qa-diagram-practice.md')
text = qa.read_text(encoding='utf-8')
text = text.replace('# QA hình minh họa Practice', '# Thư viện hình & QA Practice', 1)
old = '> Trang này phục vụ **kiểm tra chất lượng nội bộ** cho hình minh họa trong Practice Bank. Đây không phải nội dung bài học dành cho học sinh.'
new = '> Trang này là **thư viện QA nội bộ** cho hình minh họa trong Practice Bank. Đây không phải nội dung bài học dành cho học sinh. Ở giai đoạn hiện tại gallery tập trung vào diagram của Practice; hình trong các trang bài học sẽ được mở rộng vào gallery ở giai đoạn sau.'
if old in text:
    text = text.replace(old, new, 1)
text = text.replace('Tất cả 13–20', 'Tất cả 13–25', 1)
old_manifest = "    '20-hinh-hoc-tong-hop-v1.manifest.json'\n"
new_manifest = "    '20-hinh-hoc-tong-hop-v1.manifest.json',\n    '21-thong-ke-v1.manifest.json',\n    '22-dai-luong-dac-trung-v1.manifest.json',\n    '23-xac-suat-v1.manifest.json',\n    '24-bai-toan-thuc-te-v1.manifest.json',\n    '25-tong-hop-on-thi-10-v1.manifest.json'\n"
if "'21-thong-ke-v1.manifest.json'" not in text:
    if old_manifest not in text:
        raise SystemExit('Không tìm thấy danh sách manifest gallery')
    text = text.replace(old_manifest, new_manifest, 1)
qa.write_text(text, encoding='utf-8')
