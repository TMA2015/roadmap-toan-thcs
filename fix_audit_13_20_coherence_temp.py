#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent

def patch(path, fn):
    p = ROOT / path
    text = p.read_text(encoding='utf-8')
    new = fn(text)
    if new != text:
        p.write_text(new, encoding='utf-8')

# 16: goal reflects newly added trapezoid midline.
def p16(s):
    old = '- [ ] Vận dụng được tính chất đường chéo để tính độ dài và chứng minh.\n'
    new = '- [ ] Vận dụng được đường trung bình hình thang và tính chất đường chéo để tính độ dài, chứng minh.\n'
    if new not in s:
        assert old in s
        s = s.replace(old, new, 1)
    return s
patch('docs/kien-thuc/16-tu-giac/index.md', p16)

# 17: goal reflects similarity scale consequences.
def p17(s):
    old = '- [ ] Dùng đồng dạng để tính độ dài, chứng minh tỉ số và chứng minh hệ thức.\n'
    new = '- [ ] Dùng đồng dạng để tính độ dài, chứng minh tỉ số/hệ thức và xử lý tỉ số chu vi, diện tích.\n'
    if new not in s:
        assert old in s
        s = s.replace(old, new, 1)
    return s
patch('docs/kien-thuc/17-thales-dong-dang/index.md', p17)

# 18: goal reflects full trig set.
def p18(s):
    old = '- [ ] Dùng đúng `sin`, `cos`, `tan` để tìm cạnh hoặc góc.\n'
    new = '- [ ] Dùng đúng `sin`, `cos`, `tan`, `cot` và quan hệ hai góc phụ nhau để tìm cạnh hoặc góc.\n'
    if new not in s:
        assert old in s
        s = s.replace(old, new, 1)
    return s
patch('docs/kien-thuc/18-he-thuc-luong/index.md', p18)

# 19: move arc/sector section from visual preface to core 3.6; sync goals/types.
def p19(s):
    block = '''\n### 3.6A. Độ dài cung, diện tích hình quạt và hình vành khuyên\n\nVới đường tròn bán kính `R`, cung có số đo `n°`:\n\n`l = n/360 · 2πR = nπR/180`\n\nDiện tích hình quạt tương ứng:\n\n`S_quạt = n/360 · πR²`\n\nNếu biết độ dài cung `l` thì cũng có:\n\n`S_quạt = lR/2`\n\nVới hình vành khuyên tạo bởi hai đường tròn đồng tâm bán kính `R > r`:\n\n`S_vành = π(R² - r²)`\n\n> Cả độ dài cung và diện tích hình quạt đều tỉ lệ với số đo cung `n°`; đây là cách kiểm tra nhanh tính hợp lý của kết quả.\n'''
    # Remove the first/current misplaced copy.
    if s.count('### 3.6A. Độ dài cung, diện tích hình quạt và hình vành khuyên') == 1:
        assert block in s
        s = s.replace(block, '', 1)
    # Insert after core 3.6 if now absent.
    core = '''### 3.6. Tiếp tuyến – cát tuyến\n\nTừ điểm `P` ngoài đường tròn, tiếp tuyến `PT` và cát tuyến `PAB` cho:\n\n`PT² = PA × PB`\n'''
    if '### 3.6A. Độ dài cung, diện tích hình quạt và hình vành khuyên' not in s:
        assert core in s
        s = s.replace(core, core + block, 1)

    goal_old = '- [ ] Vận dụng được định lý góc nội tiếp bằng nửa góc ở tâm cùng chắn cung.\n'
    goal_new = '- [ ] Vận dụng được góc nội tiếp, góc tạo bởi tiếp tuyến và dây cung, cùng quan hệ với cung bị chắn.\n'
    if goal_new not in s:
        assert goal_old in s
        s = s.replace(goal_old, goal_new, 1)
    goal_old2 = '- [ ] Dùng được hệ thức hai dây cắt nhau và tiếp tuyến – cát tuyến.\n'
    goal_new2 = '- [ ] Dùng được hệ thức hai dây cắt nhau, tiếp tuyến – cát tuyến và các công thức độ dài cung, diện tích quạt/vành khuyên.\n'
    if goal_new2 not in s:
        assert goal_old2 in s
        s = s.replace(goal_old2, goal_new2, 1)

    old_types = '''### Dạng 7. Bài tổng hợp đường tròn\n\nKết hợp tiếp tuyến, nội tiếp, đồng dạng, hệ thức tích và lượng giác.\n'''
    new_types = '''### Dạng 7. Độ dài cung, diện tích quạt tròn và vành khuyên\n\nXác định đúng bán kính và số đo cung trước khi dùng `l = nπR/180`, `S_quạt = nπR²/360`; với vành khuyên dùng hiệu diện tích hai hình tròn đồng tâm.\n\n### Dạng 8. Bài tổng hợp đường tròn\n\nKết hợp tiếp tuyến, nội tiếp, đồng dạng, hệ thức tích, lượng giác và đo lường đường tròn.\n'''
    if new_types not in s:
        assert old_types in s
        s = s.replace(old_types, new_types, 1)
    return s
patch('docs/kien-thuc/19-duong-tron/index.md', p19)

print('Coherence fixes applied.')
