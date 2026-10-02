# S4 Skill Taxonomy v2 — cross-batch reconciliation Source

Packet: `MATH-SKILL-CROSS-BATCH-CT02-25-R1-20261002`

Registry source: `review-packets/skill-taxonomy/S4_FINAL_ACADEMIC_REGISTRY_R1.json` @ blob `fedac0a5c1598ea2f18f62e892f80fe77439c143` on `review/skill-taxonomy-v2-s4-ct21-25-combined-r1-20261002`.

Academic closure entering this review: CT21–CT25; 19 new families; 62 mappings; full-bank 612/612 PASS; 66/66 clone candidates PASS; 0 revisions; academically closed.

This Source is for **family-level and mapping-level cross-batch reconciliation only**. It does not reopen already-passed question-level audits unless a concrete cross-batch conflict requires a taxonomy correction. Runtime/mastery/Readiness/history activation remains false.

## Machine counts
- family definitions: **19**
- legacy mapping rows: **62**
- intentional NO_FAMILY rows: **12**
- explicit cross-batch reuse rows: **5**

## Family definitions
`family_id|label_vi|layer|topics|diagnostic_subskills`

```text
STAT-DATA|Dữ liệu và thu thập dữ liệu|KNTT-Core|CT21|du-lieu-phan-loai,thu-thap-du-lieu
STAT-QUALITY|Chất lượng dữ liệu và mẫu thiên lệch|Core-Support|CT21|kiem-tra-chat-luong,mau-thien-lech
STAT-FREQUENCY|Bảng tần số và tần suất|Core-Support|CT21|bang-tan-so,tan-suat
STAT-CHART-READ|Đọc và so sánh các biểu đồ|KNTT-Core|CT21|doc-bieu-do-cot,doc-bieu-do-doan-thang,doc-bieu-do-cot-kep,bieu-do-quat-tron
STAT-REPRESENT|Chọn và chuyển dạng biểu diễn dữ liệu|KNTT-Core|CT21|chon-bieu-do,chuyen-bang-bieu-do
STAT-INFER|Nhận xét và kết luận từ dữ liệu|KNTT-Core|CT21|nhan-xet-du-lieu
STAT-ADVANCED-DATA|Dữ liệu ghép nhóm và bẫy thang đo|Entrance10|CT21|du-lieu-ghep-nhom,don-vi-thang-do
STAT-CENTER|Các đại lượng xu thế trung tâm|THPT-Bridge|CT22|trung-binh-tho,trung-binh-tan-so,trung-vi,mot,nhieu-mot
STAT-SPREAD-OUTLIER|Khoảng biến thiên và giá trị ngoại lai|THPT-Bridge|CT22|khoang-bien-thien,ngoai-lai
STAT-COMPARE-MEASURE|Chọn đại lượng đại diện và so sánh dữ liệu|THPT-Bridge|CT22|so-sanh-trung-binh-trung-vi,chon-dai-luong,so-sanh-hai-bo
PROB-EVENT|Phép thử và biến cố|KNTT-Core|CT23|phep-thu-ngau-nhien,bien-co,bien-co-chac-chan-khong-the
PROB-CLASSICAL|Xác suất cổ điển và kiểm tra tính hợp lý|KNTT-Core|CT23|xac-suat-co-dien,kiem-tra-xac-suat
PROB-EXPERIMENTAL|Xác suất thực nghiệm|KNTT-Core|CT23|xac-suat-thuc-nghiem
PROB-SPACE-SUPPORT|Không gian mẫu, biến cố đối và lặp phép thử|Core-Support|CT23|khong-gian-mau,bien-co-doi,dong-xu-nhieu-lan
PROB-MULTISTEP|Xác suất nhiều bước|Entrance10|CT23|xuc-xac-hai-lan,so-do-cay,nhieu-buoc-doc-lap,khong-hoan-lai
MODEL-SETUP|Đọc dữ kiện và chuẩn hóa đơn vị|Core-Support|CT24|doc-de-du-kien,doi-don-vi
MODEL-VALIDATE|Kiểm tra nghiệm, đơn vị và kết luận thực tế|Core-Support|CT24|kiem-tra-ket-luan
EXAM-STRATEGY|Nhận diện dạng bài và quản lý thời gian|Entrance10|CT25|nhan-dien-chuyen-de,quan-ly-thoi-gian
EXAM-REVIEW|Phân loại lỗi và chữa đề|Entrance10|CT25|phan-loai-loi,checklist-chua-de
``

## Legacy mappings
`topic|legacy_id|family_id|role|layer|source|note`

```text
CT21|du-lieu-phan-loai|STAT-DATA|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|thu-thap-du-lieu|STAT-DATA|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|kiem-tra-chat-luong|STAT-QUALITY|SUPPORTING_SKILL|Core-Support|S4_NEW_FAMILY|
CT21|mau-thien-lech|STAT-QUALITY|SUPPORTING_SKILL|Core-Support|S4_NEW_FAMILY|
CT21|bang-tan-so|STAT-FREQUENCY|ASSESSED_SKILL|Core-Support|S4_NEW_FAMILY|
CT21|tan-suat|STAT-FREQUENCY|ASSESSED_SKILL|Core-Support|S4_NEW_FAMILY|
CT21|doc-bieu-do-cot|STAT-CHART-READ|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|doc-bieu-do-doan-thang|STAT-CHART-READ|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|chon-bieu-do|STAT-REPRESENT|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|chuyen-bang-bieu-do|STAT-REPRESENT|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|nhan-xet-du-lieu|STAT-INFER|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|don-vi-thang-do|STAT-ADVANCED-DATA|SUPPORTING_SKILL|Entrance10|S4_NEW_FAMILY|
CT21|doc-bieu-do-cot-kep|STAT-CHART-READ|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|bieu-do-quat-tron|STAT-CHART-READ|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT21|du-lieu-ghep-nhom|STAT-ADVANCED-DATA|ASSESSED_SKILL|Entrance10|S4_NEW_FAMILY|
CT22|trung-binh-tho|STAT-CENTER|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|trung-binh-tan-so|STAT-CENTER|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|trung-vi|STAT-CENTER|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|mot|STAT-CENTER|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|nhieu-mot|STAT-CENTER|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|khoang-bien-thien|STAT-SPREAD-OUTLIER|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|ngoai-lai|STAT-SPREAD-OUTLIER|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|so-sanh-trung-binh-trung-vi|STAT-COMPARE-MEASURE|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|chon-dai-luong|STAT-COMPARE-MEASURE|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT22|so-sanh-hai-bo|STAT-COMPARE-MEASURE|ASSESSED_SKILL|THPT-Bridge|S4_NEW_FAMILY|
CT23|phep-thu-ngau-nhien|PROB-EVENT|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT23|khong-gian-mau|PROB-SPACE-SUPPORT|ASSESSED_SKILL|Core-Support|S4_NEW_FAMILY|
CT23|bien-co|PROB-EVENT|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT23|bien-co-chac-chan-khong-the|PROB-EVENT|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT23|xac-suat-co-dien|PROB-CLASSICAL|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT23|bien-co-doi|PROB-SPACE-SUPPORT|ASSESSED_SKILL|Core-Support|S4_NEW_FAMILY|
CT23|dong-xu-nhieu-lan|PROB-SPACE-SUPPORT|CONTEXT|Core-Support|S4_NEW_FAMILY|
CT23|xuc-xac-hai-lan|PROB-MULTISTEP|CONTEXT|Entrance10|S4_NEW_FAMILY|
CT23|so-do-cay|PROB-MULTISTEP|METHOD|Entrance10|S4_NEW_FAMILY|
CT23|nhieu-buoc-doc-lap|PROB-MULTISTEP|ASSESSED_SKILL|Entrance10|S4_NEW_FAMILY|
CT23|khong-hoan-lai|PROB-MULTISTEP|ASSESSED_SKILL|Entrance10|S4_NEW_FAMILY|
CT23|kiem-tra-xac-suat|PROB-CLASSICAL|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT23|xac-suat-thuc-nghiem|PROB-EXPERIMENTAL|ASSESSED_SKILL|KNTT-Core|S4_NEW_FAMILY|
CT24|doc-de-du-kien|MODEL-SETUP|ASSESSED_SKILL|Core-Support|S4_NEW_FAMILY|
CT24|doi-don-vi|MODEL-SETUP|SUPPORTING_SKILL|Core-Support|S4_NEW_FAMILY|
CT24|chuyen-dong|NO_FAMILY|CONTEXT|Core-Support|NO_NEW_FAMILY|
CT24|nang-suat|NO_FAMILY|CONTEXT|Core-Support|NO_NEW_FAMILY|
CT24|phan-tram|NUM-PERCENT|CROSS_TOPIC_REUSE|KNTT-Core|REUSE_EXISTING_FAMILY|
CT24|lap-phuong-trinh|EQ-MODEL|CROSS_TOPIC_REUSE|KNTT-Core|REUSE_EXISTING_FAMILY|
CT24|lap-he|SYS-MODEL|CROSS_TOPIC_REUSE|KNTT-Core|REUSE_EXISTING_FAMILY|
CT24|hinh-hoc-do-luong|NO_FAMILY|CONTEXT|Core-Support|NO_NEW_FAMILY|
CT24|luong-giac-thuc-te|RIGHT-APPLICATION|CROSS_TOPIC_REUSE|KNTT-Core|REUSE_EXISTING_FAMILY|
CT24|thong-ke-thuc-te|NO_FAMILY|CONTEXT|Core-Support|NO_NEW_FAMILY|
CT24|xac-suat-thuc-te|PROB-EXPERIMENTAL|CROSS_TOPIC_REUSE|KNTT-Core|REUSE_EXISTING_FAMILY|
CT24|kiem-tra-ket-luan|MODEL-VALIDATE|ASSESSED_SKILL|Core-Support|S4_NEW_FAMILY|
CT25|nhan-dien-chuyen-de|EXAM-STRATEGY|METHOD|Entrance10|S4_NEW_FAMILY|
CT25|on-thi-bieu-thuc-can|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|on-thi-phuong-trinh|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|on-thi-he|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|on-thi-ham-so|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|on-thi-hinh-hoc|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|on-thi-thong-ke|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|on-thi-xac-suat|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|on-thi-mo-hinh-hoa|NO_FAMILY|CATEGORY|Entrance10|NO_NEW_FAMILY|
CT25|quan-ly-thoi-gian|EXAM-STRATEGY|EXAM_SKILL|Entrance10|S4_NEW_FAMILY|
CT25|phan-loai-loi|EXAM-REVIEW|EXAM_SKILL|Entrance10|S4_NEW_FAMILY|
CT25|checklist-chua-de|EXAM-REVIEW|EXAM_SKILL|Entrance10|S4_NEW_FAMILY|
``

## Written-evidence / gap records retained from the closed batch

```json
[
  {
    "id": "S4-WR-CT21-BIAS-001",
    "topic_id": "CT21",
    "family_id": "STAT-QUALITY",
    "layer": "Core-Support",
    "problem_type": "Đánh giá cách thu thập dữ liệu và nhận diện thiên lệch",
    "need": "WRITTEN_RECOMMENDED"
  },
  {
    "id": "S4-WR-CT22-COMPARE-001",
    "topic_id": "CT22",
    "family_id": "STAT-COMPARE-MEASURE",
    "layer": "THPT-Bridge",
    "problem_type": "So sánh hai bộ dữ liệu và chọn đại lượng đại diện phù hợp",
    "need": "WRITTEN_RECOMMENDED_NON_GATING"
  },
  {
    "id": "S4-WR-CT23-TREE-001",
    "topic_id": "CT23",
    "family_id": "PROB-MULTISTEP",
    "layer": "Entrance10",
    "problem_type": "Lập sơ đồ cây và tính xác suất nhiều bước",
    "need": "WRITTEN_REQUIRED_FOR_MULTI_STEP"
  },
  {
    "id": "S4-WR-CT24-VALIDATE-001",
    "topic_id": "CT24",
    "family_id": "MODEL-VALIDATE",
    "layer": "Core-Support",
    "problem_type": "Mô hình hóa nhiều bước có kiểm tra điều kiện, đơn vị và kết luận",
    "need": "WRITTEN_REQUIRED_FOR_FULL_MODELING"
  }
]
```

## Explicit batch boundaries

```json
[
  "CT22 is THPT-Bridge, non-gating for THCS Core.",
  "CT24 is cross-topic Core-Support; reuse existing mathematics families instead of duplicating them.",
  "CT25 academic review tags are CATEGORY labels, not new mastery families.",
  "CT25 exam strategy/review skills are optional Entrance10 skills and never gate Core.",
  "Real-exam frequency remains PENDING_OFFICIAL_CORPUS."
]
```

## Review boundary
Preserve the closed batch unless an exact cross-batch duplicate, conflict, wrong reuse target, inconsistent layer, or missing canonical reuse is demonstrated. Do not infer real-exam frequency from authored-bank frequency. Do not authorize runtime changes.
