# S2 Skill Taxonomy v2 — cross-batch reconciliation Source

Packet: `MATH-SKILL-CROSS-BATCH-CT02-25-R1-20261002`

Registry source: `review-packets/skill-taxonomy/S2_FINAL_ACADEMIC_REGISTRY_R1.json` @ blob `2f2f862c5e571dd4dcf1a095cc799ab5a24139f5` on `review/skill-taxonomy-v2-s2-family-provisional-r1-20261002`.

Academic closure entering this review: CT08–CT12; 29 families; 75 mappings; full-bank 624/624 PASS; 0 revisions; academically closed.

This Source is for **family-level and mapping-level cross-batch reconciliation only**. It does not reopen already-passed question-level audits unless a concrete cross-batch conflict requires a taxonomy correction. Runtime/mastery/Readiness/history activation remains false.

## Machine counts
- family definitions: **29**
- legacy mapping rows: **75**
- intentional NO_FAMILY rows: **0**
- explicit cross-batch reuse rows: **0**

## Family definitions
`family_id|label_vi|layer|topics|diagnostic_subskills`

```text
EQ-BASIC|Giải phương trình cơ bản|KNTT-Core|CT08|nghiem-phuong-trinh,pt-bac-nhat,bien-doi-pt-nhieu-buoc,pt-tich
EQ-RATIONAL|Phương trình chứa ẩn ở mẫu|KNTT-Core|CT08|dkxd-phuong-trinh-mau,khu-mau-phuong-trinh,doi-chieu-nghiem
INEQ-ORDER|Bất đẳng thức và tính chất thứ tự|KNTT-Core|CT08|bat-dang-thuc,tinh-chat-thu-tu-phep-cong,tinh-chat-thu-tu-phep-nhan
INEQ-SOLVE|Giải và biểu diễn bất phương trình|KNTT-Core|CT08|bpt-bac-nhat,doi-chieu-bpt,bieu-dien-tap-nghiem,giao-tap-nghiem
EQ-MODEL|Lập phương trình từ bài toán|KNTT-Core|CT08|lap-phuong-trinh
INEQ-MODEL|Lập bất phương trình từ bài toán|Entrance10|CT08|lap-bat-phuong-trinh
EQ-PARAM|Phương trình/bất phương trình có tham số|Specialized-Challenge|CT08|tham-so-co-ban
SYS-CONCEPT|Nghiệm và ý nghĩa của hệ phương trình|KNTT-Core|CT09|nghiem-pt-hai-an,nghiem-he,so-nghiem-he,y-nghia-hinh-hoc
SYS-SOLVE|Giải và kiểm tra hệ phương trình|KNTT-Core|CT09|giai-he-the,giai-he-cong,chon-phuong-phap,bien-doi-truoc-giai,kiem-tra-nghiem-he
SYS-MODEL|Lập hệ từ bài toán|KNTT-Core|CT09|lap-he-bai-toan,bai-toan-so,chuyen-dong-he,nang-suat-he
SYS-PARAM|Hệ phương trình có tham số|Entrance10|CT09|tham-so-he
FUNC-BASIC|Hàm số, giá trị và bảng giá trị|KNTT-Core|CT10|khai-niem-ham-so,tinh-gia-tri-ham,bang-gia-tri
GRAPH-POINT|Tọa độ và điểm thuộc đồ thị|KNTT-Core|CT10|toa-do-diem,diem-thuoc-do-thi
LINEAR-FUNC|Hàm số bậc nhất và đồ thị đường thẳng|KNTT-Core|CT10|nhan-biet-ham-bac-nhat,he-so-goc,tung-do-goc,dong-nghich-bien,ve-do-thi-ham-bac-nhat
GRAPH-INTERSECTION|Vị trí và giao điểm các đồ thị|Entrance10|CT10|vi-tri-hai-duong-thang,giao-diem-do-thi,lien-he-he-phuong-trinh
PARABOLA-BASIC|Parabol y=ax²|KNTT-Core|CT10|ham-y-ax2,doi-xung-parabol,diem-thuoc-parabol
RAD-BASIC|Căn bậc hai và điều kiện xác định|KNTT-Core|CT11|can-bac-hai-so-hoc,dkxd-can,can-binh-phuong
RAD-TRANSFORM|Biến đổi căn thức|KNTT-Core|CT11|khai-phuong-tich,khai-phuong-thuong,dua-thua-so-ra,dua-thua-so-vao
RAD-OPERATE|Phép tính với căn thức|KNTT-Core|CT11|can-dong-dang,nhan-chia-can
RAD-RATIONALIZE|Trục căn thức ở mẫu|KNTT-Core|CT11|truc-can-mau-don,truc-can-lien-hop
RAD-CUBEROOT|Căn bậc ba|KNTT-Core|CT11|can-bac-ba
RAD-EQUATION|Phương trình chứa căn|Entrance10|CT11|tim-x-can
RAD-COMPARE|So sánh biểu thức căn|Entrance10|CT11|so-sanh-can
QUAD-STRUCTURE|Nhận dạng phương trình bậc hai và hệ số|KNTT-Core|CT12|nhan-dang-pt-bac-hai,he-so-abc
QUAD-SOLVE|Biệt thức và giải phương trình bậc hai|KNTT-Core|CT12|tinh-delta,so-nghiem-delta,cong-thuc-nghiem,delta-phay,giai-pt-bac-hai,nham-nghiem
VIETE-CORE|Viète và lập phương trình từ nghiệm|KNTT-Core|CT12|tong-tich-nghiem,lap-pt-tu-nghiem
VIETE-APPLY|Vận dụng Viète với biểu thức và dấu nghiệm|Entrance10|CT12|bieu-thuc-doi-xung,dau-nghiem
QUAD-GRAPH|Liên hệ nghiệm với đồ thị|Entrance10|CT12|lien-he-do-thi
QUAD-PARAM|Tham số và số nghiệm|Specialized-Challenge|CT12|tham-so-so-nghiem
``

## Legacy mappings
`topic|legacy_id|family_id|role|layer|source|note`

```text
CT08|nghiem-phuong-trinh|EQ-BASIC|ASSESSED_SKILL|||
CT08|pt-bac-nhat|EQ-BASIC|ASSESSED_SKILL|||
CT08|bien-doi-pt-nhieu-buoc|EQ-BASIC|SUPPORTING_SKILL|||
CT08|pt-tich|EQ-BASIC|ASSESSED_SKILL|||
CT08|dkxd-phuong-trinh-mau|EQ-RATIONAL|ASSESSED_SKILL|||
CT08|khu-mau-phuong-trinh|EQ-RATIONAL|ASSESSED_SKILL|||
CT08|doi-chieu-nghiem|EQ-RATIONAL|SUPPORTING_SKILL|||
CT08|bpt-bac-nhat|INEQ-SOLVE|ASSESSED_SKILL|||
CT08|doi-chieu-bpt|INEQ-SOLVE|SUPPORTING_SKILL|||
CT08|bieu-dien-tap-nghiem|INEQ-SOLVE|ASSESSED_SKILL|||
CT08|giao-tap-nghiem|INEQ-SOLVE|ASSESSED_SKILL|||
CT08|lap-phuong-trinh|EQ-MODEL|ASSESSED_SKILL|||
CT08|lap-bat-phuong-trinh|INEQ-MODEL|ASSESSED_SKILL|||
CT08|tham-so-co-ban|EQ-PARAM|ASSESSED_SKILL|||
CT08|bat-dang-thuc|INEQ-ORDER|ASSESSED_SKILL|||
CT08|tinh-chat-thu-tu-phep-cong|INEQ-ORDER|SUPPORTING_SKILL|||
CT08|tinh-chat-thu-tu-phep-nhan|INEQ-ORDER|SUPPORTING_SKILL|||
CT09|nghiem-pt-hai-an|SYS-CONCEPT|ASSESSED_SKILL|||
CT09|nghiem-he|SYS-CONCEPT|ASSESSED_SKILL|||
CT09|so-nghiem-he|SYS-CONCEPT|ASSESSED_SKILL|||
CT09|y-nghia-hinh-hoc|SYS-CONCEPT|ASSESSED_SKILL|||
CT09|giai-he-the|SYS-SOLVE|ASSESSED_SKILL|||
CT09|giai-he-cong|SYS-SOLVE|ASSESSED_SKILL|||
CT09|chon-phuong-phap|SYS-SOLVE|METHOD|||
CT09|bien-doi-truoc-giai|SYS-SOLVE|SUPPORTING_SKILL|||
CT09|kiem-tra-nghiem-he|SYS-SOLVE|SUPPORTING_SKILL|||
CT09|tham-so-he|SYS-PARAM|ASSESSED_SKILL|||
CT09|lap-he-bai-toan|SYS-MODEL|ASSESSED_SKILL|||
CT09|bai-toan-so|SYS-MODEL|CONTEXT|||
CT09|chuyen-dong-he|SYS-MODEL|CONTEXT|||
CT09|nang-suat-he|SYS-MODEL|CONTEXT|||
CT10|khai-niem-ham-so|FUNC-BASIC|ASSESSED_SKILL|||
CT10|tinh-gia-tri-ham|FUNC-BASIC|ASSESSED_SKILL|||
CT10|bang-gia-tri|FUNC-BASIC|REPRESENTATION|||
CT10|toa-do-diem|GRAPH-POINT|SUPPORTING_SKILL|||
CT10|diem-thuoc-do-thi|GRAPH-POINT|ASSESSED_SKILL|||
CT10|nhan-biet-ham-bac-nhat|LINEAR-FUNC|ASSESSED_SKILL|||
CT10|he-so-goc|LINEAR-FUNC|ASSESSED_SKILL|||
CT10|tung-do-goc|LINEAR-FUNC|ASSESSED_SKILL|||
CT10|dong-nghich-bien|LINEAR-FUNC|ASSESSED_SKILL|||
CT10|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|ASSESSED_SKILL|||
CT10|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|ASSESSED_SKILL|||
CT10|giao-diem-do-thi|GRAPH-INTERSECTION|ASSESSED_SKILL|||
CT10|lien-he-he-phuong-trinh|GRAPH-INTERSECTION|CROSS_TOPIC_LINK|||
CT10|ham-y-ax2|PARABOLA-BASIC|ASSESSED_SKILL|||
CT10|doi-xung-parabol|PARABOLA-BASIC|ASSESSED_SKILL|||
CT10|diem-thuoc-parabol|PARABOLA-BASIC|ASSESSED_SKILL|||
CT11|can-bac-hai-so-hoc|RAD-BASIC|ASSESSED_SKILL|||
CT11|dkxd-can|RAD-BASIC|ASSESSED_SKILL|||
CT11|can-binh-phuong|RAD-BASIC|ASSESSED_SKILL|||
CT11|khai-phuong-tich|RAD-TRANSFORM|ASSESSED_SKILL|||
CT11|khai-phuong-thuong|RAD-TRANSFORM|ASSESSED_SKILL|||
CT11|dua-thua-so-ra|RAD-TRANSFORM|METHOD|||
CT11|dua-thua-so-vao|RAD-TRANSFORM|METHOD|||
CT11|can-dong-dang|RAD-OPERATE|ASSESSED_SKILL|||
CT11|nhan-chia-can|RAD-OPERATE|ASSESSED_SKILL|||
CT11|truc-can-mau-don|RAD-RATIONALIZE|METHOD|||
CT11|truc-can-lien-hop|RAD-RATIONALIZE|METHOD|||
CT11|tim-x-can|RAD-EQUATION|ASSESSED_SKILL|||
CT11|so-sanh-can|RAD-COMPARE|ASSESSED_SKILL|||
CT11|can-bac-ba|RAD-CUBEROOT|ASSESSED_SKILL|||
CT12|nhan-dang-pt-bac-hai|QUAD-STRUCTURE|ASSESSED_SKILL|||
CT12|he-so-abc|QUAD-STRUCTURE|ASSESSED_SKILL|||
CT12|tinh-delta|QUAD-SOLVE|ASSESSED_SKILL|||
CT12|so-nghiem-delta|QUAD-SOLVE|ASSESSED_SKILL|||
CT12|cong-thuc-nghiem|QUAD-SOLVE|METHOD|||
CT12|delta-phay|QUAD-SOLVE|METHOD|||
CT12|giai-pt-bac-hai|QUAD-SOLVE|ASSESSED_SKILL|||
CT12|nham-nghiem|QUAD-SOLVE|METHOD|||
CT12|tham-so-so-nghiem|QUAD-PARAM|ASSESSED_SKILL|||
CT12|tong-tich-nghiem|VIETE-CORE|ASSESSED_SKILL|||
CT12|bieu-thuc-doi-xung|VIETE-APPLY|ASSESSED_SKILL|||
CT12|lap-pt-tu-nghiem|VIETE-CORE|ASSESSED_SKILL|||
CT12|dau-nghiem|VIETE-APPLY|ASSESSED_SKILL|||
CT12|lien-he-do-thi|QUAD-GRAPH|ASSESSED_SKILL|||
``

## Written-evidence / gap records retained from the closed batch

```json
[
  {
    "id": "S2-WR-CT08-MODEL-001",
    "topic_id": "CT08",
    "family_id": "EQ-MODEL",
    "layer": "KNTT-Core",
    "problem_type": "Lập phương trình từ bài toán thực tế nhiều bước",
    "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
  },
  {
    "id": "S2-WR-CT08-INEQMODEL-001",
    "topic_id": "CT08",
    "family_id": "INEQ-MODEL",
    "layer": "Entrance10",
    "problem_type": "Lập bất phương trình từ ràng buộc thực tế",
    "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
  },
  {
    "id": "S2-WR-CT09-SUB-001",
    "topic_id": "CT09",
    "family_id": "SYS-SOLVE",
    "layer": "KNTT-Core",
    "problem_type": "Giải hệ bằng phương pháp thế với trình bày đầy đủ",
    "need": "WRITTEN_RECOMMENDED"
  },
  {
    "id": "S2-WR-CT09-RATE-001",
    "topic_id": "CT09",
    "family_id": "SYS-MODEL",
    "layer": "KNTT-Core",
    "problem_type": "Lập hệ cho bài toán chuyển động hoặc năng suất",
    "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
  },
  {
    "id": "S2-WR-CT10-INTERSECT-001",
    "topic_id": "CT10",
    "family_id": "GRAPH-INTERSECTION",
    "layer": "Entrance10",
    "problem_type": "Tìm giao điểm hai đồ thị và liên hệ nghiệm hệ",
    "need": "WRITTEN_RECOMMENDED"
  },
  {
    "id": "S2-WR-CT11-TRANSFORM-001",
    "topic_id": "CT11",
    "family_id": "RAD-TRANSFORM",
    "layer": "KNTT-Core",
    "problem_type": "Biến đổi/rút gọn căn thức nhiều bước bằng nhiều quy tắc",
    "need": "WRITTEN_RECOMMENDED"
  },
  {
    "id": "S2-WR-CT11-EQ-001",
    "topic_id": "CT11",
    "family_id": "RAD-EQUATION",
    "layer": "Entrance10",
    "problem_type": "Giải phương trình chứa căn và kiểm tra điều kiện/nghiệm",
    "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
  },
  {
    "id": "S2-WR-CT12-VIETE-001",
    "topic_id": "CT12",
    "family_id": "VIETE-APPLY",
    "layer": "Entrance10",
    "problem_type": "Tính biểu thức đối xứng theo nghiệm bằng Viète",
    "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
  },
  {
    "id": "S2-WR-CT12-PARAM-001",
    "topic_id": "CT12",
    "family_id": "QUAD-PARAM",
    "layer": "Specialized-Challenge",
    "problem_type": "Biện luận tham số theo số nghiệm/điều kiện nghiệm",
    "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
  }
]
```

## Review boundary
Preserve the closed batch unless an exact cross-batch duplicate, conflict, wrong reuse target, inconsistent layer, or missing canonical reuse is demonstrated. Do not infer real-exam frequency from authored-bank frequency. Do not authorize runtime changes.
