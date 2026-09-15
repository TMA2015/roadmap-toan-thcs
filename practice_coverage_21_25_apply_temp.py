#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from collections import Counter

BASE = Path('docs/assets/data/practice')
REPORT = Path('docs/roadmap/audit-practice-coverage-21-25-v1.md')


def read_json(path: Path):
    return json.loads(path.read_text(encoding='utf-8'))


def write_json(path: Path, data, *, pretty=False):
    if pretty:
        text = json.dumps(data, ensure_ascii=False, indent=2) + '\n'
    else:
        text = json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n'
    path.write_text(text, encoding='utf-8')


def load_chunks(prefix: str):
    result = []
    for i in range(1, 5):
        path = BASE / f'{prefix}-{i:02d}.json'
        result.append((path, read_json(path)))
    return result


def all_questions(chunks):
    return [q for _, data in chunks for q in data['questions']]


def ids_for_skill(chunks, skill: str):
    ids = []
    for q in all_questions(chunks):
        if skill in q.get('tags', {}).get('skill', []):
            ids.append(q['id'])
    return sorted(ids)


def replace_questions(prefix: str, remove_ids: set[str], additions: list[dict]):
    chunks = load_chunks(prefix)
    before = sum(len(data['questions']) for _, data in chunks)
    for _, data in chunks:
        data['questions'] = [q for q in data['questions'] if q['id'] not in remove_ids]

    removed = before - sum(len(data['questions']) for _, data in chunks)
    if removed != len(remove_ids):
        raise RuntimeError(f'{prefix}: dự kiến bỏ {len(remove_ids)} câu nhưng thực tế bỏ {removed}')
    if len(additions) != removed:
        raise RuntimeError(f'{prefix}: số câu thêm {len(additions)} khác số câu bỏ {removed}')

    add_iter = iter(additions)
    for _, data in chunks:
        while len(data['questions']) < 30:
            try:
                data['questions'].append(next(add_iter))
            except StopIteration as exc:
                raise RuntimeError(f'{prefix}: hết câu mới trước khi lấp đủ chunk') from exc
        if len(data['questions']) != 30:
            raise RuntimeError(f'{prefix}: chunk không còn 30 câu')
    try:
        extra = next(add_iter)
        raise RuntimeError(f'{prefix}: còn câu mới chưa dùng {extra["id"]}')
    except StopIteration:
        pass

    for path, data in chunks:
        write_json(path, data)
    return remove_ids


def q(qid, topic, question, options, answer, skill, qtype, difficulty, explanation, diagram=None):
    item = {
        'id': qid,
        'question': question,
        'options': options,
        'answer': answer,
        'tags': {'topic': topic, 'skill': [skill], 'type': qtype},
        'difficulty': difficulty,
        'explanation': explanation,
    }
    if diagram:
        item['diagram'] = diagram
    return item


D_COT_KEP = {
    'src': '../../statistics/21/21-bieu-do-cot-kep.svg',
    'alt': 'Biểu đồ cột kép so sánh Kỳ 1 và Kỳ 2 của các lớp A, B, C',
    'caption': 'Đọc chú giải Kỳ 1/Kỳ 2 trước khi so sánh các cột.'
}
D_QUAT = {
    'src': '../../statistics/21/21-bieu-do-quat-tron.svg',
    'alt': 'Biểu đồ quạt tròn gồm 40%, 30%, 20% và 10%',
    'caption': 'Toàn bộ hình tròn tương ứng 100% = 360°.'
}
D_GHEP = {
    'src': '../../statistics/21/21-du-lieu-ghep-nhom.svg',
    'alt': 'Dữ liệu chiều cao ghép nhóm theo các khoảng [140;150), [150;160), [160;170), [170;180)',
    'caption': 'Các khoảng dùng quy ước đầu mút trái đóng, đầu mút phải mở.'
}

# ---------------------------------------------------------------------------
# Topic 21: từ 12 skill x 10 câu -> 12 skill cũ x 8 + 3 skill mới x 8 = 120.
# ---------------------------------------------------------------------------
prefix21 = '21-thong-ke-v1'
chunks21 = load_chunks(prefix21)
manifest21_path = BASE / f'{prefix21}.manifest.json'
manifest21 = read_json(manifest21_path)
old_skills21 = list(manifest21['skill_labels'].keys())
remove21 = set()
for skill in old_skills21:
    ids = ids_for_skill(chunks21, skill)
    if len(ids) != 10:
        raise RuntimeError(f'21: {skill} có {len(ids)} câu, dự kiến 10')
    remove21.update(ids[-2:])

manifest21['skill_labels']['doc-bieu-do-cot-kep'] = 'Đọc và so sánh biểu đồ cột kép'
manifest21['skill_labels']['bieu-do-quat-tron'] = 'Biểu đồ hình quạt tròn'
manifest21['skill_labels']['du-lieu-ghep-nhom'] = 'Dữ liệu và tần số ghép nhóm'
for group in manifest21['skill_groups']:
    if group['id'] == 'to-chuc-du-lieu':
        if 'du-lieu-ghep-nhom' not in group['skills']:
            group['skills'].append('du-lieu-ghep-nhom')
    if group['id'] == 'bieu-dien-du-lieu':
        skills = group['skills']
        if 'doc-bieu-do-cot-kep' not in skills:
            skills.insert(skills.index('doc-bieu-do-doan-thang') + 1, 'doc-bieu-do-cot-kep')
        if 'bieu-do-quat-tron' not in skills:
            skills.insert(skills.index('doc-bieu-do-cot-kep') + 1, 'bieu-do-quat-tron')
write_json(manifest21_path, manifest21, pretty=True)

new21 = [
    q('STA21V1_121','21-thong-ke','Theo biểu đồ cột kép, ở Kỳ 2 lớp nào có giá trị lớn nhất?',
      ['Lớp A','Lớp B','Lớp C','Ba lớp bằng nhau'],2,'doc-bieu-do-cot-kep','doc-cot-kep','basic',
      'Ở Kỳ 2: lớp A = 7, lớp B = 5, lớp C = 8. Giá trị lớn nhất là lớp C.',D_COT_KEP),
    q('STA21V1_122','21-thong-ke','Theo biểu đồ cột kép, lớp A tăng bao nhiêu đơn vị từ Kỳ 1 sang Kỳ 2?',
      ['2','1','3','Không tăng'],1,'doc-bieu-do-cot-kep','doc-cot-kep','basic',
      'Lớp A tăng từ 6 lên 7, nên mức tăng là 7 - 6 = 1.',D_COT_KEP),
    q('STA21V1_123','21-thong-ke','Tổng giá trị Kỳ 1 của ba lớp A, B, C trên biểu đồ cột kép là bao nhiêu?',
      ['16','17','18','20'],1,'doc-bieu-do-cot-kep','doc-cot-kep','intermediate',
      'Kỳ 1 có các giá trị 6, 4, 7 nên tổng là 6 + 4 + 7 = 17.',D_COT_KEP),
    q('STA21V1_124','21-thong-ke','Tổng giá trị Kỳ 2 của ba lớp A, B, C trên biểu đồ cột kép là bao nhiêu?',
      ['19','18','20','21'],2,'doc-bieu-do-cot-kep','doc-cot-kep','intermediate',
      'Kỳ 2 có các giá trị 7, 5, 8 nên tổng là 20.',D_COT_KEP),
    q('STA21V1_125','21-thong-ke','Chênh lệch giữa Kỳ 2 và Kỳ 1 của lớp B là bao nhiêu?',
      ['1','2','3','4'],0,'doc-bieu-do-cot-kep','doc-cot-kep','basic',
      'Lớp B có Kỳ 1 = 4 và Kỳ 2 = 5, nên chênh lệch là 1.',D_COT_KEP),
    q('STA21V1_126','21-thong-ke','Giá trị Kỳ 2 của lớp C gấp bao nhiêu lần giá trị Kỳ 1 của lớp B?',
      ['1,5 lần','2 lần','2,5 lần','3 lần'],1,'doc-bieu-do-cot-kep','doc-cot-kep','advanced',
      'Kỳ 2 lớp C = 8 và Kỳ 1 lớp B = 4, do đó 8/4 = 2.',D_COT_KEP),
    q('STA21V1_127','21-thong-ke','Tổng mức tăng của cả ba lớp từ Kỳ 1 sang Kỳ 2 là bao nhiêu?',
      ['1','2','3','4'],2,'doc-bieu-do-cot-kep','doc-cot-kep','intermediate',
      'Mỗi lớp đều tăng 1 đơn vị, nên tổng mức tăng là 1 + 1 + 1 = 3.',D_COT_KEP),
    q('STA21V1_128','21-thong-ke','Vì sao phải đọc chú giải trước khi so sánh hai cột trong biểu đồ cột kép?',
      ['Để biết cột nào thuộc dãy số liệu nào','Để làm các cột cao bằng nhau','Để bỏ qua trục dọc','Để đổi cột thành biểu đồ tròn'],0,'doc-bieu-do-cot-kep','doc-cot-kep','advanced',
      'Chú giải cho biết màu/ký hiệu nào ứng với từng dãy số liệu; bỏ qua chú giải dễ dẫn đến so sánh nhầm đối tượng.',D_COT_KEP),

    q('STA21V1_129','21-thong-ke','Một phần chiếm 40% hình quạt tròn. Góc ở tâm tương ứng bằng bao nhiêu?',
      ['108°','120°','144°','160°'],2,'bieu-do-quat-tron','doi-phan-tram-goc','basic',
      '40% × 360° = 0,4 × 360° = 144°.',D_QUAT),
    q('STA21V1_130','21-thong-ke','Trên biểu đồ quạt tròn minh họa, phần “Thể thao” chiếm 30%. Góc ở tâm của phần này là:',
      ['72°','108°','120°','135°'],1,'bieu-do-quat-tron','doi-phan-tram-goc','basic',
      '30% × 360° = 108°.',D_QUAT),
    q('STA21V1_131','21-thong-ke','Một hình quạt có góc ở tâm 72°. Hình quạt đó chiếm bao nhiêu phần trăm hình tròn?',
      ['10%','15%','20%','25%'],2,'bieu-do-quat-tron','doi-goc-phan-tram','intermediate',
      '72/360 = 0,2 nên hình quạt chiếm 20%.',D_QUAT),
    q('STA21V1_132','21-thong-ke','Nếu tổng thể có 200 học sinh và nhóm “Đọc sách” chiếm 40%, có bao nhiêu học sinh thuộc nhóm này?',
      ['60','70','80','90'],2,'bieu-do-quat-tron','doc-quat-tron','intermediate',
      '40% của 200 là 0,4 × 200 = 80.',D_QUAT),
    q('STA21V1_133','21-thong-ke','Hai phần “Đọc sách” 40% và “Âm nhạc” 20% gộp lại có góc ở tâm bao nhiêu?',
      ['180°','200°','216°','240°'],2,'bieu-do-quat-tron','gop-phan-quat-tron','advanced',
      'Hai phần chiếm 60%; 60% × 360° = 216°.',D_QUAT),
    q('STA21V1_134','21-thong-ke','Điều kiện nào cần kiểm tra khi một biểu đồ quạt tròn mô tả đầy đủ các phần của cùng một tổng thể?',
      ['Tổng tỉ lệ bằng 50%','Tổng tỉ lệ bằng 100%','Mọi phần phải bằng nhau','Chỉ được có bốn phần'],1,'bieu-do-quat-tron','kiem-tra-quat-tron','basic',
      'Một hình tròn đầy đủ biểu diễn toàn bộ tổng thể, nên tổng các tỉ lệ phải bằng 100% (cho phép sai khác rất nhỏ do làm tròn).',D_QUAT),
    q('STA21V1_135','21-thong-ke','Một hình quạt có góc ở tâm 36°. Tỉ lệ tương ứng là:',
      ['5%','10%','12%','15%'],1,'bieu-do-quat-tron','doi-goc-phan-tram','intermediate',
      '36/360 = 0,1 nên tỉ lệ là 10%.',D_QUAT),
    q('STA21V1_136','21-thong-ke','Trên biểu đồ minh họa, tỉ lệ “Thể thao” 30% gấp mấy lần tỉ lệ “Khác” 10%?',
      ['2 lần','2,5 lần','3 lần','4 lần'],2,'bieu-do-quat-tron','so-sanh-quat-tron','advanced',
      '30% / 10% = 3.',D_QUAT),

    q('STA21V1_137','21-thong-ke','Theo quy ước các khoảng [140;150), [150;160), ..., giá trị 150 thuộc nhóm nào?',
      ['[140;150)','[150;160)','Cả hai nhóm','Không thuộc nhóm nào'],1,'du-lieu-ghep-nhom','diem-bien-nhom','basic',
      'Khoảng [140;150) không chứa 150, còn [150;160) có chứa 150.',D_GHEP),
    q('STA21V1_138','21-thong-ke','Trong hình minh họa dữ liệu ghép nhóm, tần số của nhóm [150;160) là bao nhiêu?',
      ['3','4','5','14'],1,'du-lieu-ghep-nhom','tan-so-nhom','basic',
      'Nhóm [150;160) gồm 150, 153, 157, 159 nên có tần số 4.',D_GHEP),
    q('STA21V1_139','21-thong-ke','Tần số tương đối của nhóm [150;160) trong bộ dữ liệu 14 giá trị là:',
      ['3/14','4/14','4/10','10/14'],1,'du-lieu-ghep-nhom','tan-so-tuong-doi-nhom','intermediate',
      'Nhóm có 4 giá trị trên tổng 14 giá trị nên tần số tương đối là 4/14.',D_GHEP),
    q('STA21V1_140','21-thong-ke','Giá trị đại diện theo trung điểm của nhóm [160;170) là:',
      ['160','165','170','330'],1,'du-lieu-ghep-nhom','gia-tri-dai-dien-nhom','intermediate',
      'Trung điểm của khoảng là (160 + 170)/2 = 165.',D_GHEP),
    q('STA21V1_141','21-thong-ke','Với các nhóm [160;170) và [170;180), giá trị 170 phải được xếp vào:',
      ['[160;170)','[170;180)','Cả hai nhóm','Không nhóm nào'],1,'du-lieu-ghep-nhom','diem-bien-nhom','basic',
      'Theo quy ước [a;b), đầu mút phải không thuộc nhóm trước; 170 thuộc [170;180).',D_GHEP),
    q('STA21V1_142','21-thong-ke','Trong dữ liệu minh họa, hai nhóm nào cùng có tần số lớn nhất bằng 4?',
      ['[140;150) và [160;170)','[150;160) và [170;180)','[140;150) và [170;180)','[150;160) và [160;170)'],1,'du-lieu-ghep-nhom','so-sanh-tan-so-nhom','advanced',
      'Các nhóm [150;160) và [170;180) đều có 4 giá trị; hai nhóm còn lại có 3.',D_GHEP),
    q('STA21V1_143','21-thong-ke','Vì sao các khoảng ghép nhóm nên được quy ước không chồng lấn?',
      ['Để mỗi giá trị chỉ được đếm vào một nhóm','Để mọi nhóm có cùng tần số','Để bỏ qua các giá trị ở biên','Để tổng tần số nhỏ hơn cỡ mẫu'],0,'du-lieu-ghep-nhom','quy-uoc-khoang','advanced',
      'Khoảng không chồng lấn và quy ước đầu mút nhất quán ngăn một giá trị biên bị đếm hai lần.',D_GHEP),
    q('STA21V1_144','21-thong-ke','Tổng tần số của bốn nhóm trong hình minh họa phải bằng bao nhiêu?',
      ['10','12','14','16'],2,'du-lieu-ghep-nhom','tong-tan-so-nhom','intermediate',
      'Có 14 quan sát ban đầu, nên tổng tần số các nhóm phải bằng 14.',D_GHEP),
]
replace_questions(prefix21, remove21, new21)

# ---------------------------------------------------------------------------
# Topic 23: bổ sung 10 câu xác suất thực nghiệm với ID mới.
# ---------------------------------------------------------------------------
prefix23 = '23-xac-suat-v1'
chunks23 = load_chunks(prefix23)
manifest23_path = BASE / f'{prefix23}.manifest.json'
manifest23 = read_json(manifest23_path)
remove23 = set()
reduce_skills23 = [
    'phep-thu-ngau-nhien','khong-gian-mau','bien-co','bien-co-chac-chan-khong-the',
    'bien-co-doi','dong-xu-nhieu-lan','xuc-xac-hai-lan','so-do-cay',
    'nhieu-buoc-doc-lap','kiem-tra-xac-suat'
]
for skill in reduce_skills23:
    ids = ids_for_skill(chunks23, skill)
    if len(ids) != 10:
        raise RuntimeError(f'23: {skill} có {len(ids)} câu, dự kiến 10')
    remove23.add(ids[-1])
manifest23['skill_labels']['xac-suat-thuc-nghiem'] = 'Xác suất thực nghiệm và tần số tương đối'
for group in manifest23['skill_groups']:
    if group['id'] == 'xac-suat-co-dien' and 'xac-suat-thuc-nghiem' not in group['skills']:
        group['skills'].insert(1, 'xac-suat-thuc-nghiem')
write_json(manifest23_path, manifest23, pretty=True)

new23 = [
    q('PRO23V1__121','23-xac-suat','Tung một đồng xu 50 lần thấy 27 lần ngửa. Xác suất thực nghiệm của biến cố “ngửa” là:',
      ['0,46','0,50','0,54','0,57'],2,'xac-suat-thuc-nghiem','tinh-xac-suat-thuc-nghiem','basic',
      'Xác suất thực nghiệm bằng số lần biến cố xảy ra chia số lần thử: 27/50 = 0,54.'),
    q('PRO23V1__122','23-xac-suat','Gieo một xúc xắc 80 lần, mặt 6 xuất hiện 14 lần. Tần số tương đối của mặt 6 là:',
      ['0,125','0,175','0,20','0,60'],1,'xac-suat-thuc-nghiem','tinh-xac-suat-thuc-nghiem','basic',
      '14/80 = 0,175.'),
    q('PRO23V1__123','23-xac-suat','Trong 100 lần thử, biến cố A xảy ra 36 lần. Xác suất thực nghiệm của A trong loạt thử này bằng:',
      ['0,36','0,64','36','1/36'],0,'xac-suat-thuc-nghiem','tinh-xac-suat-thuc-nghiem','basic',
      '36/100 = 0,36.'),
    q('PRO23V1__124','23-xac-suat','Phát biểu nào phân biệt đúng xác suất thực nghiệm với xác suất cổ điển?',
      ['Cả hai luôn bằng nhau sau mọi số lần thử','Xác suất thực nghiệm lấy từ kết quả quan sát; xác suất cổ điển dựa trên mô hình các kết quả đồng khả năng','Xác suất thực nghiệm chỉ dùng khi biến cố chắc chắn','Xác suất cổ điển là số lần biến cố đã xảy ra chia số lần thử'],1,'xac-suat-thuc-nghiem','phan-biet-thuc-nghiem-ly-thuyet','intermediate',
      'Xác suất thực nghiệm được tính từ dữ liệu quan sát m/n; xác suất cổ điển n(A)/n(Ω) cần mô hình hữu hạn với các kết quả đồng khả năng.'),
    q('PRO23V1__125','23-xac-suat','Một đồng xu cân đối có xác suất lý thuyết ra ngửa là 0,5. Sau 100 lần tung có 56 lần ngửa. Độ lệch giữa tần số tương đối quan sát và 0,5 là:',
      ['0,04','0,05','0,06','0,56'],2,'xac-suat-thuc-nghiem','so-sanh-thuc-nghiem-ly-thuyet','intermediate',
      'Tần số tương đối là 56/100 = 0,56; độ lệch so với 0,5 là 0,06.'),
    q('PRO23V1__126','23-xac-suat','Một biến cố không xảy ra lần nào trong 20 lần thử. Kết luận nào đúng nhất?',
      ['Biến cố chắc chắn không thể xảy ra','Xác suất thực nghiệm trong 20 lần thử bằng 0, nhưng chưa đủ để kết luận xác suất thật bằng 0','Xác suất thật chắc chắn bằng 1/20','Phải loại bỏ toàn bộ thí nghiệm'],1,'xac-suat-thuc-nghiem','dien-giai-xac-suat-thuc-nghiem','advanced',
      'm/n = 0/20 = 0 chỉ mô tả loạt thử đã thực hiện; một mẫu hữu hạn không chứng minh biến cố là không thể.'),
    q('PRO23V1__127','23-xac-suat','Khi lặp lại ổn định cùng một phép thử ngày càng nhiều lần, điều thường được quan sát là:',
      ['Tần số tương đối có xu hướng ổn định quanh xác suất của biến cố','Tần số tương đối bắt buộc bằng xác suất sau đúng 10 lần','Mọi biến cố đều có tần số tương đối 1/2','Số lần thử càng nhiều thì xác suất của mô hình càng thay đổi'],0,'xac-suat-thuc-nghiem','on-dinh-tan-so-tuong-doi','intermediate',
      'Khi số lần thử tăng, tần số tương đối thường ổn định quanh xác suất của biến cố, nhưng không bắt buộc trùng khít ở một mẫu hữu hạn.'),
    q('PRO23V1__128','23-xac-suat','Một cầu thủ thực hiện 200 quả phạt và ghi điểm 64 lần. Tần số tương đối ghi điểm là:',
      ['0,28','0,30','0,32','0,36'],2,'xac-suat-thuc-nghiem','tinh-xac-suat-thuc-nghiem','intermediate',
      '64/200 = 0,32.'),
    q('PRO23V1__129','23-xac-suat','Hai loạt thử cho cùng một biến cố: loạt I có 30/50 lần xảy ra, loạt II có 126/200 lần xảy ra. Loạt nào dựa trên nhiều lần thử hơn?',
      ['Loạt I','Loạt II','Hai loạt bằng nhau','Không thể biết'],1,'xac-suat-thuc-nghiem','so-sanh-co-mau','basic',
      'Loạt II có 200 lần thử, nhiều hơn 50 lần thử của loạt I; khi các điều kiện ổn định, mẫu lớn hơn thường cho ước lượng ổn định hơn.'),
    q('PRO23V1__130','23-xac-suat','Trong 30 lần thử, một biến cố xảy ra 18 lần. Nếu chỉ hỏi xác suất thực nghiệm của loạt thử đã thực hiện, đáp án là:',
      ['0,4','0,5','0,6','0,8'],2,'xac-suat-thuc-nghiem','tinh-xac-suat-thuc-nghiem','advanced',
      'Xác suất thực nghiệm là 18/30 = 0,6. Đây là kết quả của loạt thử, không phải khẳng định xác suất lý thuyết luôn bằng 0,6.'),
]
replace_questions(prefix23, remove23, new23)

# ---------------------------------------------------------------------------
# Topic 24: giữ nguyên manifest/skill count; thay 6 câu chung bằng 6 câu nhắm đúng ý mới.
# ---------------------------------------------------------------------------
prefix24 = '24-bai-toan-thuc-te-v1'
chunks24 = load_chunks(prefix24)
remove24 = set()
for skill in ['chuyen-dong','phan-tram','kiem-tra-ket-luan']:
    ids = ids_for_skill(chunks24, skill)
    if len(ids) != 10:
        raise RuntimeError(f'24: {skill} có {len(ids)} câu, dự kiến 10')
    remove24.update(ids[-2:])
new24 = [
    q('MOD24V1__121','24-bai-toan-thuc-te','Một xe đi 60 km với vận tốc 30 km/h rồi đi tiếp 60 km với vận tốc 60 km/h. Vận tốc trung bình trên cả hành trình là:',
      ['40 km/h','45 km/h','50 km/h','60 km/h'],0,'chuyen-dong','van-toc-trung-binh','intermediate',
      'Tổng quãng đường là 120 km. Tổng thời gian là 60/30 + 60/60 = 3 giờ. Vận tốc trung bình = 120/3 = 40 km/h, không phải trung bình cộng 45.'),
    q('MOD24V1__122','24-bai-toan-thuc-te','Một xe đi 90 km với vận tốc 45 km/h, sau đó đi 60 km với vận tốc 60 km/h. Vận tốc trung bình của cả hai chặng là:',
      ['48 km/h','50 km/h','52,5 km/h','55 km/h'],1,'chuyen-dong','van-toc-trung-binh','advanced',
      'Thời gian hai chặng là 2 giờ và 1 giờ; tổng quãng đường 150 km nên v_tb = 150/3 = 50 km/h.'),
    q('MOD24V1__123','24-bai-toan-thuc-te','Một món hàng tăng giá 20% rồi giảm 20% trên mức giá mới. So với giá ban đầu, giá cuối cùng:',
      ['Không đổi','Giảm 4%','Tăng 4%','Giảm 20%'],1,'phan-tram','phan-tram-lien-tiep','intermediate',
      'Hệ số thay đổi là 1,20 × 0,80 = 0,96, nên giá cuối bằng 96% giá ban đầu, tức giảm 4%.'),
    q('MOD24V1__124','24-bai-toan-thuc-te','Một sản phẩm giảm 25% rồi tăng 20% trên giá đã giảm. Giá cuối bằng bao nhiêu phần trăm giá ban đầu?',
      ['90%','95%','100%','105%'],0,'phan-tram','phan-tram-lien-tiep','advanced',
      'Hệ số là 0,75 × 1,20 = 0,90, nên giá cuối bằng 90% giá ban đầu.'),
    q('MOD24V1__125','24-bai-toan-thuc-te','Mô hình “công việc = năng suất × thời gian” dùng một năng suất n không đổi. Nếu năng suất thay đổi rõ rệt giữa các giai đoạn, cách xử lý hợp lý là:',
      ['Vẫn dùng một n bất kỳ cho toàn bộ quá trình','Chia thành các giai đoạn hoặc xây dựng mô hình phản ánh năng suất thay đổi','Bỏ đơn vị thời gian','Luôn làm tròn n thành số nguyên'],1,'kiem-tra-ket-luan','kiem-tra-gia-dinh-mo-hinh','advanced',
      'Công thức với một n duy nhất ngầm giả định năng suất không đổi. Khi giả định không phù hợp cần chia giai đoạn hoặc điều chỉnh mô hình.'),
    q('MOD24V1__126','24-bai-toan-thuc-te','Khi một bài toán thực tế yêu cầu đáp số đến 0,1 đơn vị, cách làm nào hạn chế sai số tích lũy tốt nhất?',
      ['Làm tròn mọi bước trung gian đến 0,1','Giữ đủ chữ số ở các bước trung gian và làm tròn ở kết quả cuối','Bỏ qua đơn vị rồi làm tròn','Luôn làm tròn xuống'],1,'kiem-tra-ket-luan','lam-tron-ket-qua','intermediate',
      'Làm tròn quá sớm có thể làm sai số tích lũy; nên giữ đủ chữ số rồi làm tròn ở đáp số cuối theo yêu cầu.'),
]
replace_questions(prefix24, remove24, new24)

# ---------------------------------------------------------------------------
# Topic 25: cập nhật câu tổng hợp thống kê, xác suất thực nghiệm và ưu tiên dựa bằng chứng.
# ---------------------------------------------------------------------------
prefix25 = '25-tong-hop-on-thi-10-v1'
chunks25 = load_chunks(prefix25)
stat_ids = ids_for_skill(chunks25, 'on-thi-thong-ke')
prob_ids = ids_for_skill(chunks25, 'on-thi-xac-suat')
plan_ids = ids_for_skill(chunks25, 'checklist-chua-de')
if not (len(stat_ids) == len(prob_ids) == len(plan_ids) == 10):
    raise RuntimeError('25: số câu các skill mục tiêu không phải 10')
remove25 = set(stat_ids[-4:] + prob_ids[:3] + plan_ids[-3:])
new25 = [
    q('REV25V1_121','25-tong-hop-on-thi-10','Một biểu đồ quạt tròn cho một nhóm chiếm 25% tổng thể. Góc ở tâm của phần đó là:',
      ['72°','90°','100°','120°'],1,'on-thi-thong-ke','on-thi-quat-tron','basic',
      '25% × 360° = 90°.',D_QUAT),
    q('REV25V1_122','25-tong-hop-on-thi-10','Khi ghép nhóm theo [150;160), [160;170), giá trị 160 được xếp vào nhóm nào?',
      ['[150;160)','[160;170)','Cả hai','Không nhóm nào'],1,'on-thi-thong-ke','on-thi-ghep-nhom','intermediate',
      'Khoảng [150;160) không chứa đầu mút phải 160; 160 thuộc [160;170).',D_GHEP),
    q('REV25V1_123','25-tong-hop-on-thi-10','Theo biểu đồ cột kép, lớp C tăng bao nhiêu đơn vị từ Kỳ 1 sang Kỳ 2?',
      ['1','2','3','4'],0,'on-thi-thong-ke','on-thi-cot-kep','basic',
      'Lớp C tăng từ 7 lên 8, nên tăng 1 đơn vị.',D_COT_KEP),
    q('REV25V1_124','25-tong-hop-on-thi-10','Giá trị đại diện theo trung điểm của nhóm [170;180) là:',
      ['170','172,5','175','180'],2,'on-thi-thong-ke','on-thi-ghep-nhom','intermediate',
      '(170 + 180)/2 = 175.',D_GHEP),
    q('REV25V1_125','25-tong-hop-on-thi-10','Một biến cố xảy ra 22 lần trong 80 lần thử. Xác suất thực nghiệm là:',
      ['0,225','0,25','0,275','0,36'],2,'on-thi-xac-suat','on-thi-xac-suat-thuc-nghiem','basic',
      '22/80 = 0,275.'),
    q('REV25V1_126','25-tong-hop-on-thi-10','Trong ôn xác suất, phát biểu nào đúng?',
      ['Xác suất thực nghiệm m/n luôn bằng xác suất lý thuyết','Xác suất thực nghiệm dựa trên số liệu quan sát; xác suất cổ điển n(A)/n(Ω) cần các kết quả đồng khả năng','Nếu m = 0 thì biến cố chắc chắn không thể','Chỉ xác suất thực nghiệm mới nằm trong [0;1]'],1,'on-thi-xac-suat','on-thi-phan-biet-xac-suat','intermediate',
      'Hai khái niệm có nguồn gốc khác nhau; mẫu hữu hạn không bắt buộc cho tần số tương đối đúng bằng xác suất lý thuyết.'),
    q('REV25V1_127','25-tong-hop-on-thi-10','Tung đồng xu cân đối 200 lần được 104 lần ngửa. Nhận xét phù hợp nhất là:',
      ['Xác suất thực nghiệm là 0,52; kết quả này không mâu thuẫn với xác suất lý thuyết 0,5','Xác suất lý thuyết đã đổi thành 0,52','Đồng xu chắc chắn không cân đối','Xác suất thực nghiệm phải đúng 0,5'],0,'on-thi-xac-suat','on-thi-dien-giai-thuc-nghiem','advanced',
      '104/200 = 0,52. Tần số tương đối của một mẫu hữu hạn có thể lệch nhẹ so với 0,5.'),
    q('REV25V1_128','25-tong-hop-on-thi-10','Một chuyên đề có trọng số cao trong đề địa phương và học sinh chỉ đúng 45% câu ở 5 bài gần nhất. Trong ma trận ưu tiên A–B–C–D, nên xếp chuyên đề này vào:',
      ['Nhóm A – ưu tiên cao nhất','Nhóm B – chỉ duy trì','Nhóm C – ưu tiên thấp hơn','Nhóm D – chỉ rà soát'],0,'checklist-chua-de','uu-tien-dua-tren-bang-chung','intermediate',
      'Trọng số cao và kết quả gần đây còn yếu là hai bằng chứng để xếp vào nhóm A.'),
    q('REV25V1_129','25-tong-hop-on-thi-10','Sau vài tuần, tỉ lệ đúng của một chuyên đề tăng rõ rệt và lỗi lặp lại giảm mạnh. Cách điều chỉnh kế hoạch hợp lý là:',
      ['Giữ nguyên ưu tiên mãi mãi','Đánh giá lại bằng kết quả gần nhất và có thể giảm thời lượng nếu chuyên đề đã ổn định','Ngừng chữa lỗi','Chỉ dựa vào cảm giác dễ/khó'],1,'checklist-chua-de','dieu-chinh-uu-tien','advanced',
      'Ma trận ưu tiên là công cụ động; nên cập nhật theo bằng chứng học tập gần nhất thay vì cố định suốt quá trình.'),
    q('REV25V1_130','25-tong-hop-on-thi-10','Bộ dữ liệu nào hữu ích nhất để quyết định chuyên đề cần ưu tiên ôn trong tuần tới?',
      ['Cảm giác “mình không thích chương này”','Điểm 3–5 bài gần nhất, tỉ lệ câu đúng, thời gian làm và các lỗi lặp lại','Tên chuyên đề dài hay ngắn','Số trang của sách giáo khoa'],1,'checklist-chua-de','uu-tien-dua-tren-bang-chung','basic',
      'Các chỉ số gần đây về độ chính xác, thời gian và lỗi lặp lại cung cấp bằng chứng trực tiếp cho việc phân bổ thời gian ôn.'),
]
replace_questions(prefix25, remove25, new25)

# ---------------------------------------------------------------------------
# Báo cáo và kiểm tra nội bộ.
# ---------------------------------------------------------------------------
report = '''# Audit độ phủ Practice Bank 21–25 – v1

## Mục tiêu

Đồng bộ Practice Bank 21–25 với vòng audit học thuật mới nhất, giữ **120 câu/chuyên đề** và không tăng tổng số câu. Các câu bị thay về bản chất được **nghỉ sử dụng ID cũ và cấp ID mới**, đúng nguyên tắc ổn định ID của Practice Bank.

## Kết quả audit trước khi sửa

- **21 – Thống kê:** 120 câu cũ không có câu nào về biểu đồ cột kép, biểu đồ hình quạt tròn hoặc dữ liệu ghép nhóm.
- **22 – Đại lượng đặc trưng:** độ phủ cân đối; giữ nguyên toàn bộ 120 câu.
- **23 – Xác suất:** rút không hoàn lại đã có độ phủ tốt, nhưng xác suất thực nghiệm gần như chưa được luyện có hệ thống.
- **24 – Bài toán thực tế:** vận tốc trung bình và giả định mô hình đã xuất hiện rải rác; phần trăm liên tiếp và nguyên tắc làm tròn cuối còn mỏng.
- **25 – Tổng hợp:** chưa có câu tổng hợp về thống kê mới và xác suất thực nghiệm; chiến lược ưu tiên dựa trên bằng chứng còn ít.
- Trong 600 prompt có 3 nhóm trùng giữa Topic 21/23 và Topic 25.

## Điều chỉnh

### Topic 21

Giữ 120 câu nhưng tái cân bằng thành:

- 12 skill cũ × 8 câu = 96 câu;
- `doc-bieu-do-cot-kep` = 8 câu;
- `bieu-do-quat-tron` = 8 câu;
- `du-lieu-ghep-nhom` = 8 câu.

Các câu mới tận dụng chính SVG minh họa đã được duyệt ở Chuyên đề 21 để luyện đọc biểu đồ trực quan.

### Topic 22

Không thay đổi.

### Topic 23

Thêm skill `xac-suat-thuc-nghiem` với 10 câu: tính `m/n`, phân biệt thực nghiệm – lý thuyết, diễn giải mẫu hữu hạn và xu hướng ổn định của tần số tương đối. Giữ nguyên 10 câu xác suất cổ điển và 10 câu rút không hoàn lại; giảm nhẹ 1 câu ở 10 skill khác để tổng vẫn là 120.

### Topic 24

Không thêm skill mới; thay 6 câu tổng quát bằng 6 câu nhắm đúng:

- 2 câu vận tốc trung bình = tổng quãng đường / tổng thời gian;
- 2 câu phần trăm liên tiếp bằng tích hệ số thay đổi;
- 1 câu kiểm tra giả định năng suất không đổi;
- 1 câu tránh làm tròn sớm.

### Topic 25

Thay 10 câu trong đúng các skill tổng hợp hiện có:

- 4 câu thống kê: quạt tròn, cột kép, dữ liệu ghép nhóm;
- 3 câu xác suất thực nghiệm;
- 3 câu lập ưu tiên ôn tập dựa trên kết quả 3–5 bài gần nhất, tỉ lệ đúng, thời gian và lỗi lặp lại.

Ba prompt trùng trước đây nằm trong các câu Topic 25 được nghỉ sử dụng, nên sau batch này mục tiêu QA là **600/600 prompt duy nhất**.

## Nguyên tắc giữ ổn định

- Tổng câu: 5 × 120 = 600.
- Topic 22 không bị thay đổi.
- Không tái sử dụng ID cũ cho câu hỏi có bản chất mới.
- Không thay đổi schema Practice Engine.
- Hình dùng trong câu thống kê là asset local SVG đã qua kiểm tra integrity.
'''
REPORT.write_text(report, encoding='utf-8')

# Kiểm tra tổng số và prompt duy nhất trước QA chính thức.
import unicodedata

def norm_prompt(s):
    s = unicodedata.normalize('NFD', s.lower())
    return ''.join(c for c in s if unicodedata.category(c) != 'Mn').strip()

all_q = []
for prefix in ['21-thong-ke-v1','22-dai-luong-dac-trung-v1','23-xac-suat-v1','24-bai-toan-thuc-te-v1','25-tong-hop-on-thi-10-v1']:
    chunks = load_chunks(prefix)
    qs = all_questions(chunks)
    if len(qs) != 120:
        raise RuntimeError(f'{prefix}: {len(qs)} câu, dự kiến 120')
    all_q.extend(qs)

prompts = [norm_prompt(x['question']) for x in all_q]
dup = [p for p, c in Counter(prompts).items() if c > 1]
if dup:
    raise RuntimeError(f'Còn {len(dup)} prompt trùng sau cập nhật')
if len(all_q) != 600:
    raise RuntimeError(f'Tổng {len(all_q)} câu, dự kiến 600')

print('PASS: cập nhật Practice Bank 21–25; 600 câu và 600 prompt duy nhất.')
