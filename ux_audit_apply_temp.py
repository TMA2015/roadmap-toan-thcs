from pathlib import Path

# 1) Gọn menu: không tự bung toàn bộ cây navigation và gom công cụ nội bộ.
mkdocs = Path('mkdocs.yml')
text = mkdocs.read_text(encoding='utf-8')
text = text.replace('    - navigation.expand\n', '', 1)
old = '''      - Cấu trúc chuyên đề: huong-dan/cau-truc-chuyen-de.md\n      - Chuẩn ngân hàng câu hỏi: huong-dan/chuan-ngan-hang-cau-hoi.md\n      - Thư viện hình & QA: huong-dan/qa-diagram-practice.md\n'''
new = '''      - Cấu trúc chuyên đề: huong-dan/cau-truc-chuyen-de.md\n      - Công cụ nội bộ:\n          - Chuẩn ngân hàng câu hỏi: huong-dan/chuan-ngan-hang-cau-hoi.md\n          - Thư viện hình & QA: huong-dan/qa-diagram-practice.md\n'''
if '      - Công cụ nội bộ:\n' not in text:
    if old not in text:
        raise SystemExit('Không tìm thấy block Hướng dẫn cần đổi')
    text = text.replace(old, new, 1)
mkdocs.write_text(text, encoding='utf-8')

# 2) Đổi phần mang góc nhìn biên soạn thành lộ trình học cho học sinh.
index = Path('docs/kien-thuc/index.md')
text = index.read_text(encoding='utf-8')
old = '''## Thứ tự biên soạn ưu tiên\n\n1. **Đại số:** 04 → 05 → 06 → 07 → 08 → 09 → 10 → 11 → 12\n2. **Số và nền tảng:** 02 → 03\n3. **Hình học:** 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20\n4. **Thống kê – Xác suất – Mô hình hóa:** 21 → 22 → 23 → 24\n5. **Tổng hợp:** 01 → 25\n\n'''
new = '''## Lộ trình học gợi ý\n\nKhông nhất thiết phải học cả 25 chuyên đề theo một đường thẳng. Hãy dùng [01. Bản đồ chương trình Toán THCS](01-ban-do-chuong-trinh/index.md) để xác định vị trí hiện tại, rồi đi theo mạch phù hợp:\n\n1. **Nền tảng số và tỉ lệ:** 02 → 03.\n2. **Đại số:** 04 → 05 → 06 → 07 → 08 → 09 → 10 → 11 → 12.\n3. **Hình học:** 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20.\n4. **Thống kê – Xác suất – Mô hình hóa:** 21 → 22 → 23 → 24.\n5. **Tổng hợp:** dùng 25 sau khi đã có đủ kiến thức nền cần thiết để luyện liên chuyên đề và chuẩn bị thi vào lớp 10.\n\nNếu đang học theo chương trình trên lớp, ưu tiên chuyên đề đang học và dùng phần **Kiến thức liên quan** / **Liên kết Roadmap** trong từng bài để quay lại đúng lỗ hổng trước đó.\n\n'''
if '## Lộ trình học gợi ý\n' not in text:
    if old not in text:
        raise SystemExit('Không tìm thấy phần Thứ tự biên soạn ưu tiên')
    text = text.replace(old, new, 1)
index.write_text(text, encoding='utf-8')
