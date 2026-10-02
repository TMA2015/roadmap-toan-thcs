# S3 Skill Taxonomy v2 — cross-batch reconciliation Source

Packet: `MATH-SKILL-CROSS-BATCH-CT02-25-R1-20261002`

Registry source: `review-packets/skill-taxonomy/S3_FINAL_ACADEMIC_REGISTRY_R1.json` @ blob `ab6d45fe385a56387336556ba146c4b7c500626e` on `review/skill-taxonomy-v2-s3-geometry-family-r1-20261002`.

Academic closure entering this review: CT13–CT20; 44 families; 162 mappings; full-bank 1,146/1,146 PASS; 165/165 clone candidates PASS; 0 revisions; academically closed.

This Source is for **family-level and mapping-level cross-batch reconciliation only**. It does not reopen already-passed question-level audits unless a concrete cross-batch conflict requires a taxonomy correction. Runtime/mastery/Readiness/history activation remains false.

## Machine counts
- family definitions: **44**
- legacy mapping rows: **162**
- intentional NO_FAMILY rows: **1**
- explicit cross-batch reuse rows: **0**

## Family definitions
`family_id|label_vi|layer|topics|diagnostic_subskills`

```text
GEO-LINE-FOUND|Điểm, tia, đoạn thẳng và trung điểm|KNTT-Core|CT13|diem-thuoc-duong,diem-nam-giua,tia,tia-doi,doan-thang-do-dai,trung-diem
GEO-ANGLE-REL|Góc và các quan hệ góc|KNTT-Core|CT13|khai-niem-goc,do-goc,phan-loai-goc,goc-phu-bu,goc-doi-dinh,tia-phan-giac,nhan-dang-goc-dac-biet,duong-vuong-goc
GEO-TRANSVERSAL|Góc tạo bởi một đường cắt|KNTT-Core|CT13|goc-so-le-trong,goc-dong-vi,goc-trong-cung-phia
GEO-PARALLEL|Song song, dấu hiệu và quan hệ vuông góc|KNTT-Core|CT13|tinh-chat-song-song,dau-hieu-song-song,tien-de-euclid,vuong-goc-song-song
GEO-PROOF-BASIC|Giả thiết – kết luận và chứng minh hình học ngắn|KNTT-Core|CT13|gia-thiet-ket-luan,lap-luan-chung-minh-ngan
TRI-ANGLE-SIDE|Góc, cạnh và bất đẳng thức trong tam giác|KNTT-Core|CT14|tong-goc-tam-giac,goc-ngoai,so-sanh-canh-goc,bat-dang-thuc-tam-giac,duong-vuong-goc-duong-xien
TRI-SPECIAL|Nhận biết và tính chất tam giác đặc biệt|KNTT-Core|CT14,CT20|phan-loai-tam-giac,tam-giac-can,tam-giac-deu,nhan-biet-tam-giac-deu
TRI-PERPBISECTOR|Đường trung trực và tính chất cách đều|KNTT-Core|CT14,CT15|nhan-biet-trung-truc,cach-deu-dinh,tinh-chat-duong-trung-truc
TRI-CONGRUENCE|Các trường hợp tam giác bằng nhau và tương ứng|KNTT-Core|CT14|bang-nhau-ccc,bang-nhau-cgc,bang-nhau-gcg,bang-nhau-tam-giac-vuong,viet-tuong-ung-tam-giac-bang-nhau
GEO-PLANE-MEASURE|Chu vi, diện tích và đo lường hình phẳng|KNTT-Core|CT14,CT20|chu-vi-dien-tich,chu-vi-tu-giac,dien-tich-tu-giac,do-luong-thuc-te
TRI-CENTROID|Trung tuyến và trọng tâm|KNTT-Core|CT15|nhan-biet-trung-tuyen,trong-tam,ti-so-trong-tam
TRI-ORTHOCENTER|Đường cao và trực tâm|KNTT-Core|CT15|nhan-biet-duong-cao,truc-tam,vi-tri-truc-tam
TRI-INCENTER|Phân giác và tâm nội tiếp|KNTT-Core|CT15,CT19|nhan-biet-phan-giac,tam-noi-tiep,cach-deu-canh,duong-tron-noi-tiep-tam-giac
TRI-CIRCUMCENTER|Tâm ngoại tiếp và các đường trung trực|KNTT-Core|CT15,CT19|tam-ngoai-tiep,vi-tri-tam-ngoai-tiep,duong-tron-ngoai-tiep-tam-giac
TRI-CENTERS|Phân biệt bốn tâm và tính đồng quy|KNTT-Core|CT15|phan-biet-bon-tam,dong-quy-bon-duong-dac-biet
QUAD-TRAPEZOID|Tứ giác, hình thang và hình thang cân|KNTT-Core|CT16|tong-goc-tu-giac,hinh-thang,hinh-thang-can
QUAD-PARALLELOGRAM|Hình bình hành: tính chất và dấu hiệu|KNTT-Core|CT16|hbh-tinh-chat,hbh-dau-hieu
QUAD-RECTANGLE|Hình chữ nhật: tính chất và dấu hiệu|KNTT-Core|CT16|hcn-tinh-chat,hcn-dau-hieu
QUAD-RHOMBUS|Hình thoi: tính chất và dấu hiệu|KNTT-Core|CT16|hthoi-tinh-chat,hthoi-dau-hieu
QUAD-SQUARE-HIER|Hình vuông, quan hệ bao hàm và suy luận đường chéo|KNTT-Core|CT16,CT20|hvuong-tinh-chat,hvuong-dau-hieu,quan-he-bao-ham,duong-cheo-suy-luan,nhan-biet-hinh-vuong,nhan-biet-tu-giac-dac-biet
SIM-THALES|Thales và tỉ lệ đoạn thẳng|KNTT-Core|CT17|thales-thuan,thales-dao,ti-le-doan-thang
SIM-MID-BISECTOR|Đường trung bình và tính chất đường phân giác|KNTT-Core|CT17|duong-trung-binh,tinh-chat-duong-phan-giac
SIM-CRITERIA|Nhận biết và các trường hợp tam giác đồng dạng|KNTT-Core|CT17|nhan-biet-dong-dang,dong-dang-gg,dong-dang-cgc,dong-dang-ccc,thu-tu-tuong-ung
SIM-LENGTH|Tính độ dài bằng đồng dạng và hình đồng dạng|KNTT-Core|CT17|tinh-do-dai-dong-dang,hinh-dong-dang
SIM-RATIO-EXT|Tỉ số chu vi, diện tích và hệ thức tích từ đồng dạng|Core-Support|CT17|ti-so-chu-vi,ti-so-dien-tich,he-thuc-tich
SIM-CHAIN|Kết hợp song song và đồng dạng trong chuỗi suy luận|Entrance10|CT17,CT20|ket-hop-song-song-dong-dang,song-song-dong-dang
RIGHT-PYTHAGORE|Pythagore và nhận biết tam giác vuông|KNTT-Core|CT14,CT18|pythagore,pythagore-dao,canh-huyen
RIGHT-TRIG-RATIO|Tỉ số lượng giác trong tam giác vuông|KNTT-Core|CT18|doi-ke-huyen,sin,cos,tan,cot
RIGHT-SOLVE|Tìm cạnh và tìm góc bằng lượng giác|KNTT-Core|CT18|tim-canh-luong-giac,tim-goc-luong-giac
RIGHT-APPLICATION|Góc nâng, góc hạ, chiều cao và khoảng cách|KNTT-Core|CT18|goc-nang-ha,chieu-cao-khoang-cach
RIGHT-ALTITUDE|Hệ thức cạnh và đường cao trong tam giác vuông|Entrance10|CT18|he-thuc-canh,he-thuc-duong-cao,dien-tich-duong-cao,ket-hop-he-thuc
CIRCLE-CHORD-ARC|Dây và cung trong đường tròn|KNTT-Core|CT19|day-va-tam,cung-va-day
CIRCLE-ANGLES|Góc ở tâm, góc nội tiếp và quan hệ góc–cung|KNTT-Core|CT19|goc-o-tam,goc-noi-tiep,nua-duong-tron,goc-cung
CIRCLE-MEASURE|Độ dài đường tròn, cung và diện tích phần tròn|KNTT-Core|CT19|do-dai-duong-tron,do-dai-cung,dien-tich-quat-tron,dien-tich-vanh-khuyen
CIRCLE-POSITION|Vị trí tương đối với đường tròn|KNTT-Core|CT19|vi-tri-tuong-doi-duong-thang-duong-tron,vi-tri-tuong-doi-hai-duong-tron
CIRCLE-CYCLIC|Tứ giác nội tiếp và dấu hiệu nội tiếp|KNTT-Core|CT19|tu-giac-noi-tiep,dau-hieu-noi-tiep
CIRCLE-TANGENT|Tiếp tuyến: tính chất và chứng minh|Entrance10|CT19,CT20|tiep-tuyen-ban-kinh,hai-tiep-tuyen,chung-minh-tiep-tuyen,tiep-tuyen-chung-minh
CIRCLE-POWER|Hệ thức hai dây và tiếp tuyến–cát tuyến|Specialized-Challenge|CT19|hai-day-cat-nhau,tiep-tuyen-cat-tuyen
GEO-REGULAR-SYMM|Đa giác đều và đối xứng|KNTT-Core|CT19,CT20|da-giac-deu,nhan-biet-luc-giac-deu,truc-doi-xung,tam-doi-xung
SOLID-PRISM|Hình hộp, lập phương và lăng trụ đứng|KNTT-Core|CT20|nhan-biet-hinh-hop-lap-phuong,dien-tich-xung-quanh-hop-chu-nhat,the-tich-hop-chu-nhat,nhan-biet-lang-tru-dung,dien-tich-xung-quanh-lang-tru,the-tich-lang-tru,dien-tich-day,doi-don-vi-do-luong
SOLID-PYRAMID|Hình chóp đều|KNTT-Core|CT20|nhan-biet-hinh-chop-deu,dien-tich-xung-quanh-hinh-chop,the-tich-hinh-chop
SOLID-CYL-CONE|Hình trụ và hình nón|KNTT-Core|CT20|nhan-biet-hinh-tru,dien-tich-xung-quanh-hinh-tru,the-tich-hinh-tru,nhan-biet-hinh-non,dien-tich-xung-quanh-hinh-non,the-tich-hinh-non
SOLID-SPHERE|Hình cầu|KNTT-Core|CT20|nhan-biet-hinh-cau,dien-tich-mat-cau,the-tich-hinh-cau
GEO-SYNTHESIS|Hình học tổng hợp nhiều bước|Entrance10|CT20|hai-goc-vuong-noi-tiep,noi-tiep-dong-dang,dong-dang-he-thuc-tich,tam-giac-vuong-dong-dang,chuoi-suy-luan,bai-toan-tong-hop
``

## Legacy mappings
`topic|legacy_id|family_id|role|layer|source|note`

```text
CT13|diem-thuoc-duong|GEO-LINE-FOUND|ASSESSED_SKILL|||
CT13|tia-doi|GEO-LINE-FOUND|ASSESSED_SKILL|||
CT13|trung-diem|GEO-LINE-FOUND|ASSESSED_SKILL|||
CT13|phan-loai-goc|GEO-ANGLE-REL|ASSESSED_SKILL|||
CT13|goc-phu-bu|GEO-ANGLE-REL|ASSESSED_SKILL|||
CT13|tia-phan-giac|GEO-ANGLE-REL|ASSESSED_SKILL|||
CT13|goc-doi-dinh|GEO-ANGLE-REL|ASSESSED_SKILL|||
CT13|duong-vuong-goc|GEO-ANGLE-REL|SUPPORTING_SKILL|||
CT13|goc-so-le-trong|GEO-TRANSVERSAL|ASSESSED_SKILL|||
CT13|goc-dong-vi|GEO-TRANSVERSAL|ASSESSED_SKILL|||
CT13|goc-trong-cung-phia|GEO-TRANSVERSAL|ASSESSED_SKILL|||
CT13|tinh-chat-song-song|GEO-PARALLEL|ASSESSED_SKILL|||
CT13|dau-hieu-song-song|GEO-PARALLEL|ASSESSED_SKILL|||
CT13|vuong-goc-song-song|GEO-PARALLEL|SUPPORTING_SKILL|||
CT13|diem-nam-giua|GEO-LINE-FOUND|ASSESSED_SKILL|||
CT13|tia|GEO-LINE-FOUND|ASSESSED_SKILL|||
CT13|doan-thang-do-dai|GEO-LINE-FOUND|ASSESSED_SKILL|||
CT13|khai-niem-goc|GEO-ANGLE-REL|ASSESSED_SKILL|||
CT13|do-goc|GEO-ANGLE-REL|ASSESSED_SKILL|||
CT13|nhan-dang-goc-dac-biet|GEO-ANGLE-REL|ASSESSED_SKILL|||
CT13|tien-de-euclid|GEO-PARALLEL|ASSESSED_SKILL|||
CT13|gia-thiet-ket-luan|GEO-PROOF-BASIC|ASSESSED_SKILL|||
CT13|lap-luan-chung-minh-ngan|GEO-PROOF-BASIC|ASSESSED_SKILL|||
CT14|phan-loai-tam-giac|TRI-SPECIAL|SUPPORTING_SKILL|||
CT14|chu-vi-dien-tich|GEO-PLANE-MEASURE|SUPPORTING_SKILL|||
CT14|tong-goc-tam-giac|TRI-ANGLE-SIDE|ASSESSED_SKILL|||
CT14|goc-ngoai|TRI-ANGLE-SIDE|SUPPORTING_SKILL|||
CT14|so-sanh-canh-goc|TRI-ANGLE-SIDE|ASSESSED_SKILL|||
CT14|bat-dang-thuc-tam-giac|TRI-ANGLE-SIDE|ASSESSED_SKILL|||
CT14|tam-giac-can|TRI-SPECIAL|ASSESSED_SKILL|||
CT14|tam-giac-deu|TRI-SPECIAL|SUPPORTING_SKILL|||
CT14|pythagore|RIGHT-PYTHAGORE|CROSS_TOPIC_REUSE|||
CT14|pythagore-dao|RIGHT-PYTHAGORE|CROSS_TOPIC_REUSE|||
CT14|bang-nhau-ccc|TRI-CONGRUENCE|ASSESSED_SKILL|||
CT14|bang-nhau-cgc|TRI-CONGRUENCE|ASSESSED_SKILL|||
CT14|bang-nhau-gcg|TRI-CONGRUENCE|ASSESSED_SKILL|||
CT14|bang-nhau-tam-giac-vuong|TRI-CONGRUENCE|ASSESSED_SKILL|||
CT14|viet-tuong-ung-tam-giac-bang-nhau|TRI-CONGRUENCE|ASSESSED_SKILL|||
CT14|nhan-biet-trung-truc|TRI-PERPBISECTOR|ASSESSED_SKILL|||
CT14|cach-deu-dinh|TRI-PERPBISECTOR|ASSESSED_SKILL|||
CT14|tinh-chat-duong-trung-truc|TRI-PERPBISECTOR|ASSESSED_SKILL|||
CT14|duong-vuong-goc-duong-xien|TRI-ANGLE-SIDE|ASSESSED_SKILL|||
CT15|nhan-biet-trung-tuyen|TRI-CENTROID|ASSESSED_SKILL|||
CT15|trong-tam|TRI-CENTROID|ASSESSED_SKILL|||
CT15|ti-so-trong-tam|TRI-CENTROID|ASSESSED_SKILL|||
CT15|nhan-biet-duong-cao|TRI-ORTHOCENTER|ASSESSED_SKILL|||
CT15|truc-tam|TRI-ORTHOCENTER|ASSESSED_SKILL|||
CT15|vi-tri-truc-tam|TRI-ORTHOCENTER|SUPPORTING_SKILL|||
CT15|nhan-biet-phan-giac|TRI-INCENTER|ASSESSED_SKILL|||
CT15|tam-noi-tiep|TRI-INCENTER|ASSESSED_SKILL|||
CT15|cach-deu-canh|TRI-INCENTER|SUPPORTING_SKILL|||
CT15|nhan-biet-trung-truc|TRI-PERPBISECTOR|CROSS_TOPIC_REUSE|||
CT15|tam-ngoai-tiep|TRI-CIRCUMCENTER|ASSESSED_SKILL|||
CT15|cach-deu-dinh|TRI-PERPBISECTOR|CROSS_TOPIC_REUSE|||
CT15|vi-tri-tam-ngoai-tiep|TRI-CIRCUMCENTER|SUPPORTING_SKILL|||
CT15|phan-biet-bon-tam|TRI-CENTERS|ASSESSED_SKILL|||
CT15|dong-quy-bon-duong-dac-biet|TRI-CENTERS|ASSESSED_SKILL|||
CT16|tong-goc-tu-giac|QUAD-TRAPEZOID|ASSESSED_SKILL|||
CT16|hinh-thang|QUAD-TRAPEZOID|ASSESSED_SKILL|||
CT16|hinh-thang-can|QUAD-TRAPEZOID|ASSESSED_SKILL|||
CT16|hbh-tinh-chat|QUAD-PARALLELOGRAM|ASSESSED_SKILL|||
CT16|hbh-dau-hieu|QUAD-PARALLELOGRAM|ASSESSED_SKILL|||
CT16|hcn-tinh-chat|QUAD-RECTANGLE|ASSESSED_SKILL|||
CT16|hcn-dau-hieu|QUAD-RECTANGLE|ASSESSED_SKILL|||
CT16|hthoi-tinh-chat|QUAD-RHOMBUS|ASSESSED_SKILL|||
CT16|hthoi-dau-hieu|QUAD-RHOMBUS|ASSESSED_SKILL|||
CT16|hvuong-tinh-chat|QUAD-SQUARE-HIER|ASSESSED_SKILL|||
CT16|hvuong-dau-hieu|QUAD-SQUARE-HIER|ASSESSED_SKILL|||
CT16|quan-he-bao-ham|QUAD-SQUARE-HIER|ASSESSED_SKILL|||
CT16|duong-cheo-suy-luan|QUAD-SQUARE-HIER|ASSESSED_SKILL|||
CT17|thales-thuan|SIM-THALES|ASSESSED_SKILL|||
CT17|thales-dao|SIM-THALES|ASSESSED_SKILL|||
CT17|ti-le-doan-thang|SIM-THALES|ASSESSED_SKILL|||
CT17|duong-trung-binh|SIM-MID-BISECTOR|ASSESSED_SKILL|||
CT17|nhan-biet-dong-dang|SIM-CRITERIA|ASSESSED_SKILL|||
CT17|dong-dang-gg|SIM-CRITERIA|ASSESSED_SKILL|||
CT17|dong-dang-cgc|SIM-CRITERIA|ASSESSED_SKILL|||
CT17|dong-dang-ccc|SIM-CRITERIA|ASSESSED_SKILL|||
CT17|thu-tu-tuong-ung|SIM-CRITERIA|ASSESSED_SKILL|||
CT17|tinh-do-dai-dong-dang|SIM-LENGTH|ASSESSED_SKILL|||
CT17|ti-so-chu-vi|SIM-RATIO-EXT|SUPPORTING_SKILL|||
CT17|ti-so-dien-tich|SIM-RATIO-EXT|SUPPORTING_SKILL|||
CT17|he-thuc-tich|SIM-RATIO-EXT|SUPPORTING_SKILL|||
CT17|ket-hop-song-song-dong-dang|SIM-CHAIN|COMPOSITE_TASK|||
CT17|tinh-chat-duong-phan-giac|SIM-MID-BISECTOR|ASSESSED_SKILL|||
CT17|hinh-dong-dang|SIM-LENGTH|ASSESSED_SKILL|||
CT18|pythagore|RIGHT-PYTHAGORE|ASSESSED_SKILL|||
CT18|pythagore-dao|RIGHT-PYTHAGORE|ASSESSED_SKILL|||
CT18|canh-huyen|RIGHT-PYTHAGORE|SUPPORTING_SKILL|||
CT18|he-thuc-canh|RIGHT-ALTITUDE|ASSESSED_SKILL|||
CT18|he-thuc-duong-cao|RIGHT-ALTITUDE|ASSESSED_SKILL|||
CT18|dien-tich-duong-cao|RIGHT-ALTITUDE|ASSESSED_SKILL|||
CT18|doi-ke-huyen|RIGHT-TRIG-RATIO|SUPPORTING_SKILL|||
CT18|sin|RIGHT-TRIG-RATIO|ASSESSED_SKILL|||
CT18|cos|RIGHT-TRIG-RATIO|ASSESSED_SKILL|||
CT18|tan|RIGHT-TRIG-RATIO|ASSESSED_SKILL|||
CT18|tim-canh-luong-giac|RIGHT-SOLVE|ASSESSED_SKILL|||
CT18|tim-goc-luong-giac|RIGHT-SOLVE|ASSESSED_SKILL|||
CT18|goc-nang-ha|RIGHT-APPLICATION|ASSESSED_SKILL|||
CT18|chieu-cao-khoang-cach|RIGHT-APPLICATION|ASSESSED_SKILL|||
CT18|ket-hop-he-thuc|RIGHT-ALTITUDE|COMPOSITE_TASK|||
CT18|cot|RIGHT-TRIG-RATIO|ASSESSED_SKILL|||
CT19|goc-o-tam|CIRCLE-ANGLES|SUPPORTING_SKILL|||
CT19|goc-noi-tiep|CIRCLE-ANGLES|ASSESSED_SKILL|||
CT19|nua-duong-tron|CIRCLE-ANGLES|SUPPORTING_SKILL|||
CT19|day-va-tam|CIRCLE-CHORD-ARC|ASSESSED_SKILL|||
CT19|tiep-tuyen-ban-kinh|CIRCLE-TANGENT|SUPPORTING_SKILL|||
CT19|hai-tiep-tuyen|CIRCLE-TANGENT|SUPPORTING_SKILL|||
CT19|tu-giac-noi-tiep|CIRCLE-CYCLIC|ASSESSED_SKILL|||
CT19|dau-hieu-noi-tiep|CIRCLE-CYCLIC|ASSESSED_SKILL|||
CT19|hai-day-cat-nhau|CIRCLE-POWER|ASSESSED_SKILL|||
CT19|tiep-tuyen-cat-tuyen|CIRCLE-POWER|ASSESSED_SKILL|||
CT19|chung-minh-tiep-tuyen|CIRCLE-TANGENT|ASSESSED_SKILL|||
CT19|goc-cung|CIRCLE-ANGLES|ASSESSED_SKILL|||
CT19|do-dai-duong-tron|CIRCLE-MEASURE|ASSESSED_SKILL|||
CT19|cung-va-day|CIRCLE-CHORD-ARC|ASSESSED_SKILL|||
CT19|do-dai-cung|CIRCLE-MEASURE|ASSESSED_SKILL|||
CT19|dien-tich-quat-tron|CIRCLE-MEASURE|ASSESSED_SKILL|||
CT19|dien-tich-vanh-khuyen|CIRCLE-MEASURE|ASSESSED_SKILL|||
CT19|vi-tri-tuong-doi-duong-thang-duong-tron|CIRCLE-POSITION|ASSESSED_SKILL|||
CT19|vi-tri-tuong-doi-hai-duong-tron|CIRCLE-POSITION|ASSESSED_SKILL|||
CT19|duong-tron-ngoai-tiep-tam-giac|TRI-CIRCUMCENTER|CROSS_TOPIC_REUSE|||
CT19|duong-tron-noi-tiep-tam-giac|TRI-INCENTER|CROSS_TOPIC_REUSE|||
CT19|da-giac-deu|GEO-REGULAR-SYMM|ASSESSED_SKILL|||
CT20|nhan-dang-cong-cu|NO_FAMILY|METHOD|||
CT20|song-song-dong-dang|SIM-CHAIN|COMPOSITE_TASK|||
CT20|hai-goc-vuong-noi-tiep|GEO-SYNTHESIS|COMPOSITE_TASK|||
CT20|noi-tiep-dong-dang|GEO-SYNTHESIS|COMPOSITE_TASK|||
CT20|dong-dang-he-thuc-tich|GEO-SYNTHESIS|COMPOSITE_TASK|||
CT20|tam-giac-vuong-dong-dang|GEO-SYNTHESIS|COMPOSITE_TASK|||
CT20|tiep-tuyen-chung-minh|CIRCLE-TANGENT|COMPOSITE_TASK|||
CT20|chuoi-suy-luan|GEO-SYNTHESIS|COMPOSITE_TASK|||
CT20|the-tich-hop-chu-nhat|SOLID-PRISM|ASSESSED_SKILL|||
CT20|the-tich-lang-tru|SOLID-PRISM|ASSESSED_SKILL|||
CT20|dien-tich-day|SOLID-PRISM|SUPPORTING_SKILL|||
CT20|doi-don-vi-do-luong|SOLID-PRISM|SUPPORTING_SKILL|||
CT20|bai-toan-tong-hop|GEO-SYNTHESIS|COMPOSITE_TASK|||
CT20|nhan-biet-tam-giac-deu|TRI-SPECIAL|CROSS_TOPIC_REUSE|||
CT20|nhan-biet-hinh-vuong|QUAD-SQUARE-HIER|CROSS_TOPIC_REUSE|||
CT20|nhan-biet-luc-giac-deu|GEO-REGULAR-SYMM|ASSESSED_SKILL|||
CT20|nhan-biet-tu-giac-dac-biet|QUAD-SQUARE-HIER|CROSS_TOPIC_REUSE|||
CT20|chu-vi-tu-giac|GEO-PLANE-MEASURE|ASSESSED_SKILL|||
CT20|dien-tich-tu-giac|GEO-PLANE-MEASURE|ASSESSED_SKILL|||
CT20|do-luong-thuc-te|GEO-PLANE-MEASURE|ASSESSED_SKILL|||
CT20|truc-doi-xung|GEO-REGULAR-SYMM|ASSESSED_SKILL|||
CT20|tam-doi-xung|GEO-REGULAR-SYMM|ASSESSED_SKILL|||
CT20|nhan-biet-hinh-hop-lap-phuong|SOLID-PRISM|ASSESSED_SKILL|||
CT20|dien-tich-xung-quanh-hop-chu-nhat|SOLID-PRISM|ASSESSED_SKILL|||
CT20|nhan-biet-lang-tru-dung|SOLID-PRISM|ASSESSED_SKILL|||
CT20|dien-tich-xung-quanh-lang-tru|SOLID-PRISM|ASSESSED_SKILL|||
CT20|nhan-biet-hinh-chop-deu|SOLID-PYRAMID|ASSESSED_SKILL|||
CT20|dien-tich-xung-quanh-hinh-chop|SOLID-PYRAMID|ASSESSED_SKILL|||
CT20|the-tich-hinh-chop|SOLID-PYRAMID|ASSESSED_SKILL|||
CT20|nhan-biet-hinh-tru|SOLID-CYL-CONE|ASSESSED_SKILL|||
CT20|dien-tich-xung-quanh-hinh-tru|SOLID-CYL-CONE|ASSESSED_SKILL|||
CT20|the-tich-hinh-tru|SOLID-CYL-CONE|ASSESSED_SKILL|||
CT20|nhan-biet-hinh-non|SOLID-CYL-CONE|ASSESSED_SKILL|||
CT20|dien-tich-xung-quanh-hinh-non|SOLID-CYL-CONE|ASSESSED_SKILL|||
CT20|the-tich-hinh-non|SOLID-CYL-CONE|ASSESSED_SKILL|||
CT20|nhan-biet-hinh-cau|SOLID-SPHERE|ASSESSED_SKILL|||
CT20|dien-tich-mat-cau|SOLID-SPHERE|ASSESSED_SKILL|||
CT20|the-tich-hinh-cau|SOLID-SPHERE|ASSESSED_SKILL|||
``

## Written-evidence / gap records retained from the closed batch

```json
[
  {
    "id": "S3-WR-CT14-PERPBISECTOR-001",
    "topic_id": "CT14",
    "family_id": "TRI-PERPBISECTOR",
    "layer": "KNTT-Core",
    "problem_type": "Chứng minh cách đều / suy ra thuộc đường trung trực",
    "need": "WRITTEN_REQUIRED_FOR_PROOF"
  },
  {
    "id": "S3-WR-CT15-CENTER-001",
    "topic_id": "CT15",
    "family_id": "TRI-ORTHOCENTER",
    "layer": "KNTT-Core",
    "problem_type": "Xác định/chứng minh trực tâm hoặc giao điểm các đường cao",
    "need": "WRITTEN_RECOMMENDED"
  },
  {
    "id": "S3-WR-CT17-BISECTOR-001",
    "topic_id": "CT17",
    "family_id": "SIM-MID-BISECTOR",
    "layer": "KNTT-Core",
    "problem_type": "Vận dụng tính chất đường phân giác để lập tỉ lệ và tính độ dài",
    "need": "WRITTEN_REQUIRED_FOR_MULTI_STEP"
  },
  {
    "id": "S3-WR-CT18-ALTITUDE-001",
    "topic_id": "CT18",
    "family_id": "RIGHT-ALTITUDE",
    "layer": "Entrance10",
    "problem_type": "Hệ thức cạnh/đường cao trong tam giác vuông nhiều bước",
    "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
  },
  {
    "id": "S3-WR-CT19-TANGENT-001",
    "topic_id": "CT19",
    "family_id": "CIRCLE-TANGENT",
    "layer": "Entrance10",
    "problem_type": "Chứng minh một đường thẳng là tiếp tuyến",
    "need": "WRITTEN_REQUIRED_FOR_PROOF"
  },
  {
    "id": "S3-WR-CT19-POWER-001",
    "topic_id": "CT19",
    "family_id": "CIRCLE-POWER",
    "layer": "Specialized-Challenge",
    "problem_type": "Hệ thức hai dây hoặc tiếp tuyến–cát tuyến",
    "need": "WRITTEN_REQUIRED_FOR_MULTI_STEP"
  },
  {
    "id": "S3-WR-CT20-CYLINDER-001",
    "topic_id": "CT20",
    "family_id": "SOLID-CYL-CONE",
    "layer": "KNTT-Core",
    "problem_type": "Hình trụ: diện tích xung quanh và thể tích trong bài toán đo lường",
    "need": "WRITTEN_RECOMMENDED"
  },
  {
    "id": "S3-WR-CT20-SPHERE-001",
    "topic_id": "CT20",
    "family_id": "SOLID-SPHERE",
    "layer": "KNTT-Core",
    "problem_type": "Hình cầu: diện tích mặt cầu và thể tích",
    "need": "WRITTEN_RECOMMENDED"
  },
  {
    "id": "S3-WR-CT20-SYNTH-001",
    "topic_id": "CT20",
    "family_id": "GEO-SYNTHESIS",
    "layer": "Entrance10",
    "problem_type": "Chuỗi chứng minh nội tiếp → đồng dạng → hệ thức → tiếp tuyến",
    "need": "WRITTEN_REQUIRED_FOR_PROOF"
  }
]
```

## Review boundary
Preserve the closed batch unless an exact cross-batch duplicate, conflict, wrong reuse target, inconsistent layer, or missing canonical reuse is demonstrated. Do not infer real-exam frequency from authored-bank frequency. Do not authorize runtime changes.
