# CT10 S2 Full-Bank Overlay — NotebookLM Source

Source JSON blob (repo provenance only): `db90584b67110c8417a17b61c91acbd19fc480b5`
Questions: **120** | mapped primary: **120** | formative-only: **0** | clone families: **12**

## Rules
- `one_primary_max_per_mcq`: true
- `representation_subskills_not_extra_family`: true
- `graph_drawing_mcq_partial_only`: true
- `runtime_enabled`: false
- `no_history_backfill`: true

## Primary counts
- `tinh-gia-tri-ham`: 12
- `khai-niem-ham-so`: 8
- `bang-gia-tri`: 10
- `toa-do-diem`: 10
- `diem-thuoc-do-thi`: 10
- `nhan-biet-ham-bac-nhat`: 10
- `he-so-goc`: 6
- `tung-do-goc`: 6
- `dong-nghich-bien`: 10
- `ve-do-thi-ham-bac-nhat`: 10
- `vi-tri-hai-duong-thang`: 10
- `giao-diem-do-thi`: 8
- `diem-thuoc-parabol`: 5
- `doi-xung-parabol`: 5

## Family counts
- `FUNC-BASIC`: 30
- `GRAPH-POINT`: 20
- `LINEAR-FUNC`: 42
- `GRAPH-INTERSECTION`: 18
- `PARABOLA-BASIC`: 10

## Clone families
- `FUN10-VALUE-001-006` → FUN10V1_001, FUN10V1_002, FUN10V1_003, FUN10V1_004, FUN10V1_005, FUN10V1_006
- `FUN10-VALUE-007-012` → FUN10V1_007, FUN10V1_008, FUN10V1_009, FUN10V1_010, FUN10V1_011, FUN10V1_012
- `FUN10-CONCEPT-013-016` → FUN10V1_013, FUN10V1_014, FUN10V1_015, FUN10V1_016
- `FUN10-CONCEPT-017-020` → FUN10V1_017, FUN10V1_018, FUN10V1_019, FUN10V1_020
- `FUN10-TABLE-021-030` → FUN10V1_021, FUN10V1_022, FUN10V1_023, FUN10V1_024, FUN10V1_025, FUN10V1_026, FUN10V1_027, FUN10V1_028, FUN10V1_029, FUN10V1_030
- `FUN10-LINEAR-RECOG-051-055` → FUN10V1_051, FUN10V1_052, FUN10V1_053, FUN10V1_054, FUN10V1_055
- `FUN10-LINEAR-RECOG-056-060` → FUN10V1_056, FUN10V1_057, FUN10V1_058, FUN10V1_059, FUN10V1_060
- `FUN10-COEFFICIENTS-061-066` → FUN10V1_061, FUN10V1_062, FUN10V1_063, FUN10V1_064, FUN10V1_065, FUN10V1_066
- `FUN10-COEFFICIENTS-067-072` → FUN10V1_067, FUN10V1_068, FUN10V1_069, FUN10V1_070, FUN10V1_071, FUN10V1_072
- `FUN10-DRAW-083-087` → FUN10V1_083, FUN10V1_084, FUN10V1_085, FUN10V1_086, FUN10V1_087
- `FUN10-DRAW-088-092` → FUN10V1_088, FUN10V1_089, FUN10V1_090, FUN10V1_091, FUN10V1_092
- `FUN10-INTERSECTION-103-110` → FUN10V1_103, FUN10V1_104, FUN10V1_105, FUN10V1_106, FUN10V1_107, FUN10V1_108, FUN10V1_109, FUN10V1_110

## Item mappings

Format: `ID|legacy_tags|primary|family|supporting|context|evidence|clone|question|correct_answer|note`

```text
FUN10V1_001|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-001-006|Cho \(f(x)=2x+3\). Giá trị \(f(-2)\) bằng bao nhiêu?|\(-1\)|
FUN10V1_002|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-001-006|Cho \(f(x)=3x-1\). Giá trị \(f(0)\) bằng bao nhiêu?|\(-1\)|
FUN10V1_003|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-001-006|Cho \(f(x)=-2x+4\). Giá trị \(f(2)\) bằng bao nhiêu?|\(0\)|
FUN10V1_004|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-001-006|Cho \(f(x)=x-5\). Giá trị \(f(-2)\) bằng bao nhiêu?|\(-7\)|
FUN10V1_005|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-001-006|Cho \(f(x)=-3x+2\). Giá trị \(f(0)\) bằng bao nhiêu?|\(2\)|
FUN10V1_006|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-001-006|Cho \(f(x)=4x\). Giá trị \(f(2)\) bằng bao nhiêu?|\(8\)|
FUN10V1_007|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-007-012|Dựa vào kiến thức cốt lõi, cho \(f(x)=2x+3\). Giá trị \(f(-2)\) bằng bao nhiêu?|\(-1\)|
FUN10V1_008|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-007-012|Dựa vào kiến thức cốt lõi, cho \(f(x)=3x-1\). Giá trị \(f(0)\) bằng bao nhiêu?|\(-1\)|
FUN10V1_009|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-007-012|Dựa vào kiến thức cốt lõi, cho \(f(x)=-2x+4\). Giá trị \(f(2)\) bằng bao nhiêu?|\(0\)|
FUN10V1_010|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-007-012|Dựa vào kiến thức cốt lõi, cho \(f(x)=x-5\). Giá trị \(f(-2)\) bằng bao nhiêu?|\(-7\)|
FUN10V1_011|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-007-012|Dựa vào kiến thức cốt lõi, cho \(f(x)=-3x+2\). Giá trị \(f(0)\) bằng bao nhiêu?|\(2\)|
FUN10V1_012|tinh-gia-tri-ham|tinh-gia-tri-ham|FUNC-BASIC|||MCQ_FINAL_ANSWER_ONLY|FUN10-VALUE-007-012|Dựa vào kiến thức cốt lõi, cho \(f(x)=4x\). Giá trị \(f(2)\) bằng bao nhiêu?|\(8\)|
FUN10V1_013|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-013-016|Khẳng định sau đúng hay sai: Mỗi giá trị \(x\) xác định đúng một giá trị \(y\).|Đúng|
FUN10V1_014|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-013-016|Khẳng định sau đúng hay sai: Một giá trị \(x\) có thể tương ứng với hai giá trị \(y\) khác nhau mà vẫn là hàm số.|Sai|
FUN10V1_015|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-013-016|Khẳng định sau đúng hay sai: Bảng có hai dòng \(x,y\) có thể biểu diễn một hàm số nếu mỗi \(x\) chỉ có một \(y\).|Đúng|
FUN10V1_016|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-013-016|Khẳng định sau đúng hay sai: Trong \(y=2x+1\), \(y\) phụ thuộc vào \(x\).|Đúng|
FUN10V1_017|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-017-020|Dựa vào kiến thức cốt lõi, khẳng định sau đúng hay sai: Mỗi giá trị \(x\) xác định đúng một giá trị \(y\).|Đúng|
FUN10V1_018|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-017-020|Dựa vào kiến thức cốt lõi, khẳng định sau đúng hay sai: Một giá trị \(x\) có thể tương ứng với hai giá trị \(y\) khác nhau mà vẫn là hàm số.|Sai|
FUN10V1_019|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-017-020|Dựa vào kiến thức cốt lõi, khẳng định sau đúng hay sai: Bảng có hai dòng \(x,y\) có thể biểu diễn một hàm số nếu mỗi \(x\) chỉ có một \(y\).|Đúng|
FUN10V1_020|khai-niem-ham-so|khai-niem-ham-so|FUNC-BASIC|||MCQ_RECOGNITION_ONLY|FUN10-CONCEPT-017-020|Dựa vào kiến thức cốt lõi, khẳng định sau đúng hay sai: Trong \(y=2x+1\), \(y\) phụ thuộc vào \(x\).|Đúng|
FUN10V1_021|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=x-2\), ô còn thiếu trong bảng tại \(x=-2\) là giá trị nào?|\(y=-4\)|
FUN10V1_022|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=2x-1\), ô còn thiếu trong bảng tại \(x=-1\) là giá trị nào?|\(y=-3\)|
FUN10V1_023|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=3x\), ô còn thiếu trong bảng tại \(x=0\) là giá trị nào?|\(y=0\)|
FUN10V1_024|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=4x+1\), ô còn thiếu trong bảng tại \(x=1\) là giá trị nào?|\(y=5\)|
FUN10V1_025|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=x+2\), ô còn thiếu trong bảng tại \(x=2\) là giá trị nào?|\(y=4\)|
FUN10V1_026|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=2x-2\), ô còn thiếu trong bảng tại \(x=-2\) là giá trị nào?|\(y=-6\)|
FUN10V1_027|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=3x-1\), ô còn thiếu trong bảng tại \(x=-1\) là giá trị nào?|\(y=-4\)|
FUN10V1_028|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=4x\), ô còn thiếu trong bảng tại \(x=0\) là giá trị nào?|\(y=0\)|
FUN10V1_029|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=x+1\), ô còn thiếu trong bảng tại \(x=1\) là giá trị nào?|\(y=2\)|
FUN10V1_030|bang-gia-tri,tinh-gia-tri-ham|bang-gia-tri|FUNC-BASIC|tinh-gia-tri-ham||MCQ_FINAL_ANSWER_ONLY|FUN10-TABLE-021-030|Với hàm số \(y=2x+2\), ô còn thiếu trong bảng tại \(x=2\) là giá trị nào?|\(y=6\)|
FUN10V1_031|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(2;3)\) nằm ở đâu?|góc phần tư I|
FUN10V1_032|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(-2;3)\) nằm ở đâu?|góc phần tư II|
FUN10V1_033|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(-3;-1)\) nằm ở đâu?|góc phần tư III|
FUN10V1_034|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(4;-2)\) nằm ở đâu?|góc phần tư IV|
FUN10V1_035|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(3;3)\) nằm ở đâu?|góc phần tư I|
FUN10V1_036|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(-1;3)\) nằm ở đâu?|góc phần tư II|
FUN10V1_037|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(-2;-1)\) nằm ở đâu?|góc phần tư III|
FUN10V1_038|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(5;-2)\) nằm ở đâu?|góc phần tư IV|
FUN10V1_039|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(4;3)\) nằm ở đâu?|góc phần tư I|
FUN10V1_040|toa-do-diem|toa-do-diem|GRAPH-POINT|||MCQ_RECOGNITION_ONLY||Điểm \(M(1;3)\) nằm ở đâu?|góc phần tư II|
FUN10V1_041|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=x\)?|\((-2;-2)\)|
FUN10V1_042|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=2x+1\)?|\((-1;-1)\)|
FUN10V1_043|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=-x+2\)?|\((0;2)\)|
FUN10V1_044|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=-2x-3\)?|\((1;-5)\)|
FUN10V1_045|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=3x+4\)?|\((2;10)\)|
FUN10V1_046|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=x\)?|\((3;3)\)|
FUN10V1_047|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=2x+1\)?|\((-2;-3)\)|
FUN10V1_048|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=-x+2\)?|\((-1;3)\)|
FUN10V1_049|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=-2x-3\)?|\((0;-3)\)|
FUN10V1_050|diem-thuoc-do-thi|diem-thuoc-do-thi|GRAPH-POINT|||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc đồ thị \(y=3x+4\)?|\((1;7)\)|
FUN10V1_051|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-051-055|Xét \(y=2x+3\). Kết luận nào đúng?|Là hàm số bậc nhất|
FUN10V1_052|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-051-055|Xét \(y=-x+4\). Kết luận nào đúng?|Là hàm số bậc nhất|
FUN10V1_053|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-051-055|Xét \(y=5\). Kết luận nào đúng?|Không phải hàm số bậc nhất|
FUN10V1_054|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-051-055|Xét \(y=x^2+1\). Kết luận nào đúng?|Không phải hàm số bậc nhất|
FUN10V1_055|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-051-055|Xét \(y=3x\). Kết luận nào đúng?|Là hàm số bậc nhất|
FUN10V1_056|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-056-060|Dựa vào kiến thức cốt lõi, xét \(y=2x+3\). Kết luận nào đúng?|Là hàm số bậc nhất|
FUN10V1_057|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-056-060|Dựa vào kiến thức cốt lõi, xét \(y=-x+4\). Kết luận nào đúng?|Là hàm số bậc nhất|
FUN10V1_058|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-056-060|Dựa vào kiến thức cốt lõi, xét \(y=5\). Kết luận nào đúng?|Không phải hàm số bậc nhất|
FUN10V1_059|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-056-060|Dựa vào kiến thức cốt lõi, xét \(y=x^2+1\). Kết luận nào đúng?|Không phải hàm số bậc nhất|
FUN10V1_060|nhan-biet-ham-bac-nhat|nhan-biet-ham-bac-nhat|LINEAR-FUNC|||MCQ_RECOGNITION_ONLY|FUN10-LINEAR-RECOG-056-060|Dựa vào kiến thức cốt lõi, xét \(y=3x\). Kết luận nào đúng?|Là hàm số bậc nhất|
FUN10V1_061|he-so-goc|he-so-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-061-066|Trong \(y=2x+3\), hệ số góc là bao nhiêu?|\(2\)|
FUN10V1_062|tung-do-goc|tung-do-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-061-066|Đường thẳng \(y=-3x+2\) cắt trục \(Oy\) tại điểm nào?|\((0;2)\)|
FUN10V1_063|he-so-goc|he-so-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-061-066|Trong \(y=x-4\), hệ số góc là bao nhiêu?|\(1\)|
FUN10V1_064|tung-do-goc|tung-do-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-061-066|Đường thẳng \(y=-x+5\) cắt trục \(Oy\) tại điểm nào?|\((0;5)\)|
FUN10V1_065|he-so-goc|he-so-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-061-066|Trong \(y=4x\), hệ số góc là bao nhiêu?|\(4\)|
FUN10V1_066|tung-do-goc|tung-do-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-061-066|Đường thẳng \(y=-2x-1\) cắt trục \(Oy\) tại điểm nào?|\((0;-1)\)|
FUN10V1_067|he-so-goc|he-so-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-067-072|Dựa vào kiến thức cốt lõi, trong \(y=2x+3\), hệ số góc là bao nhiêu?|\(2\)|
FUN10V1_068|tung-do-goc|tung-do-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-067-072|Dựa vào kiến thức cốt lõi, đường thẳng \(y=-3x+2\) cắt trục \(Oy\) tại điểm nào?|\((0;2)\)|
FUN10V1_069|he-so-goc|he-so-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-067-072|Dựa vào kiến thức cốt lõi, trong \(y=x-4\), hệ số góc là bao nhiêu?|\(1\)|
FUN10V1_070|tung-do-goc|tung-do-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-067-072|Dựa vào kiến thức cốt lõi, đường thẳng \(y=-x+5\) cắt trục \(Oy\) tại điểm nào?|\((0;5)\)|
FUN10V1_071|he-so-goc|he-so-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-067-072|Dựa vào kiến thức cốt lõi, trong \(y=4x\), hệ số góc là bao nhiêu?|\(4\)|
FUN10V1_072|tung-do-goc|tung-do-goc|LINEAR-FUNC|||MCQ_FINAL_ANSWER_ONLY|FUN10-COEFFICIENTS-067-072|Dựa vào kiến thức cốt lõi, đường thẳng \(y=-2x-1\) cắt trục \(Oy\) tại điểm nào?|\((0;-1)\)|
FUN10V1_073|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=x-2\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Đồng biến|
FUN10V1_074|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=2x-1\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Đồng biến|
FUN10V1_075|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=4x\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Đồng biến|
FUN10V1_076|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=-x+1\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Nghịch biến|
FUN10V1_077|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=-3x-2\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Nghịch biến|
FUN10V1_078|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=x-1\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Đồng biến|
FUN10V1_079|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=2x\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Đồng biến|
FUN10V1_080|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=4x+1\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Đồng biến|
FUN10V1_081|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=-x-2\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Nghịch biến|
FUN10V1_082|dong-nghich-bien,he-so-goc|dong-nghich-bien|LINEAR-FUNC|he-so-goc||MCQ_RECOGNITION_ONLY||Hàm số \(y=-3x-1\) đồng biến hay nghịch biến trên \(\mathbb{R}\)?|Nghịch biến|
FUN10V1_083|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-083-087|Cặp hai điểm nào đều thuộc đường thẳng \(y=x+2\), nên có thể dùng để vẽ đồ thị?|\((0;2)\) và \((1;3)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_084|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-083-087|Cặp hai điểm nào đều thuộc đường thẳng \(y=2x-4\), nên có thể dùng để vẽ đồ thị?|\((0;-4)\) và \((1;-2)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_085|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-083-087|Cặp hai điểm nào đều thuộc đường thẳng \(y=-x+3\), nên có thể dùng để vẽ đồ thị?|\((0;3)\) và \((1;2)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_086|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-083-087|Cặp hai điểm nào đều thuộc đường thẳng \(y=-2x+4\), nên có thể dùng để vẽ đồ thị?|\((0;4)\) và \((1;2)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_087|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-083-087|Cặp hai điểm nào đều thuộc đường thẳng \(y=3x-3\), nên có thể dùng để vẽ đồ thị?|\((0;-3)\) và \((1;0)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_088|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-088-092|Dựa vào kiến thức cốt lõi, cặp hai điểm nào đều thuộc đường thẳng \(y=x+2\), nên có thể dùng để vẽ đồ thị?|\((0;2)\) và \((1;3)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_089|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-088-092|Dựa vào kiến thức cốt lõi, cặp hai điểm nào đều thuộc đường thẳng \(y=2x-4\), nên có thể dùng để vẽ đồ thị?|\((0;-4)\) và \((1;-2)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_090|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-088-092|Dựa vào kiến thức cốt lõi, cặp hai điểm nào đều thuộc đường thẳng \(y=-x+3\), nên có thể dùng để vẽ đồ thị?|\((0;3)\) và \((1;2)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_091|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-088-092|Dựa vào kiến thức cốt lõi, cặp hai điểm nào đều thuộc đường thẳng \(y=-2x+4\), nên có thể dùng để vẽ đồ thị?|\((0;4)\) và \((1;2)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_092|ve-do-thi-ham-bac-nhat,diem-thuoc-do-thi|ve-do-thi-ham-bac-nhat|LINEAR-FUNC|diem-thuoc-do-thi||MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION|FUN10-DRAW-088-092|Dựa vào kiến thức cốt lõi, cặp hai điểm nào đều thuộc đường thẳng \(y=3x-3\), nên có thể dùng để vẽ đồ thị?|\((0;-3)\) và \((1;0)\)|Selecting two valid points is partial graphing evidence; current written exercise can provide full drawing evidence.
FUN10V1_093|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=x\) và \(d_2:y=2x+2\). Vị trí tương đối của hai đường thẳng là:|Cắt nhau|
FUN10V1_094|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=2x+1\) và \(d_2:y=2x+3\). Vị trí tương đối của hai đường thẳng là:|Song song|
FUN10V1_095|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=-x+2\) và \(d_2:y=-x+2\). Vị trí tương đối của hai đường thẳng là:|Trùng nhau|
FUN10V1_096|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=3x+3\) và \(d_2:y=4x+5\). Vị trí tương đối của hai đường thẳng là:|Cắt nhau|
FUN10V1_097|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=-2x\) và \(d_2:y=-2x+2\). Vị trí tương đối của hai đường thẳng là:|Song song|
FUN10V1_098|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=x+1\) và \(d_2:y=x+1\). Vị trí tương đối của hai đường thẳng là:|Trùng nhau|
FUN10V1_099|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=2x+2\) và \(d_2:y=3x+4\). Vị trí tương đối của hai đường thẳng là:|Cắt nhau|
FUN10V1_100|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=-x+3\) và \(d_2:y=-x+5\). Vị trí tương đối của hai đường thẳng là:|Song song|
FUN10V1_101|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=3x\) và \(d_2:y=3x\). Vị trí tương đối của hai đường thẳng là:|Trùng nhau|
FUN10V1_102|vi-tri-hai-duong-thang|vi-tri-hai-duong-thang|GRAPH-INTERSECTION|||MCQ_RECOGNITION_ONLY||Xét \(d_1:y=-2x+1\) và \(d_2:y=-x+3\). Vị trí tương đối của hai đường thẳng là:|Cắt nhau|
FUN10V1_103|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=x+3\) và \(d_2:y=-x+1\) là điểm nào?|\((-1;2)\)|
FUN10V1_104|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=2x+3\) và \(d_2:y=-2x+3\) là điểm nào?|\((0;3)\)|
FUN10V1_105|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=3x+1\) và \(d_2:y=-x+5\) là điểm nào?|\((1;4)\)|
FUN10V1_106|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=x+3\) và \(d_2:y=-2x+9\) là điểm nào?|\((2;5)\)|
FUN10V1_107|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=2x-4\) và \(d_2:y=-x+5\) là điểm nào?|\((3;2)\)|
FUN10V1_108|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=3x+6\) và \(d_2:y=-2x+1\) là điểm nào?|\((-1;3)\)|
FUN10V1_109|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=x+4\) và \(d_2:y=-x+4\) là điểm nào?|\((0;4)\)|
FUN10V1_110|giao-diem-do-thi,lien-he-he-phuong-trinh|giao-diem-do-thi|GRAPH-INTERSECTION|lien-he-he-phuong-trinh||MCQ_FINAL_ANSWER_ONLY|FUN10-INTERSECTION-103-110|Giao điểm của \(d_1:y=2x+3\) và \(d_2:y=-2x+7\) là điểm nào?|\((1;5)\)|
FUN10V1_111|ham-y-ax2,diem-thuoc-parabol|diem-thuoc-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc parabol \(y=1x^2\)?|\((-2;4)\)|
FUN10V1_112|ham-y-ax2,doi-xung-parabol|doi-xung-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_RECOGNITION_ONLY||Parabol \(y=2x^2\) có hướng mở như thế nào?|Mở lên|
FUN10V1_113|ham-y-ax2,diem-thuoc-parabol|diem-thuoc-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc parabol \(y=-1x^2\)?|\((0;0)\)|
FUN10V1_114|ham-y-ax2,doi-xung-parabol|doi-xung-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_RECOGNITION_ONLY||Parabol \(y=-2x^2\) có hướng mở như thế nào?|Mở xuống|
FUN10V1_115|ham-y-ax2,diem-thuoc-parabol|diem-thuoc-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc parabol \(y=1x^2\)?|\((2;4)\)|
FUN10V1_116|ham-y-ax2,doi-xung-parabol|doi-xung-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_RECOGNITION_ONLY||Dựa vào kiến thức cốt lõi, parabol \(y=2x^2\) có hướng mở như thế nào?|Mở lên|
FUN10V1_117|ham-y-ax2,diem-thuoc-parabol|diem-thuoc-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc parabol \(y=-1x^2\)?|\((-1;-1)\)|
FUN10V1_118|ham-y-ax2,doi-xung-parabol|doi-xung-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_RECOGNITION_ONLY||Dựa vào kiến thức cốt lõi, parabol \(y=-2x^2\) có hướng mở như thế nào?|Mở xuống|
FUN10V1_119|ham-y-ax2,diem-thuoc-parabol|diem-thuoc-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_FINAL_ANSWER_ONLY||Điểm nào thuộc parabol \(y=1x^2\)?|\((1;1)\)|
FUN10V1_120|ham-y-ax2,doi-xung-parabol|doi-xung-parabol|PARABOLA-BASIC|ham-y-ax2||MCQ_RECOGNITION_ONLY||Không cần biến đổi dài, parabol \(y=2x^2\) có hướng mở như thế nào?|Mở lên|
```

Immutable boundary: legacy question IDs/wording/answers/tags remain unchanged; no runtime/Readiness/mastery/history migration is enabled.
