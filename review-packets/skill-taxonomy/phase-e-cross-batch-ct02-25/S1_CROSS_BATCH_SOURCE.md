# S1 Skill Taxonomy v2 — cross-batch reconciliation Source

Packet: `MATH-SKILL-CROSS-BATCH-CT02-25-R1-20261002`

Registry source: `review-packets/skill-taxonomy/S1_FAMILY_CONSOLIDATION_RECONCILED_R1.json` @ blob `71904e9767e7f25f7e0162b916f763d68fab2031` on `review/skill-taxonomy-v2-s1-family-consolidation-r1-20261002`.

Academic closure entering this review: CT02–CT07; 39 families; 87 mappings; CT02 120/120 PASS + CT03 120/120 PASS + prior CT04–CT07 492/492 reviewed; academically closed for this cross-batch gate.

This Source is for **family-level and mapping-level cross-batch reconciliation only**. It does not reopen already-passed question-level audits unless a concrete cross-batch conflict requires a taxonomy correction. Runtime/mastery/Readiness/history activation remains false.

## Machine counts
- family definitions: **39**
- legacy mapping rows: **87**
- intentional NO_FAMILY rows: **7**
- explicit cross-batch reuse rows: **0**

## Family definitions
`family_id|label_vi|layer|topics|diagnostic_subskills`

```text
NUM-SETS|Tập hợp số và biểu diễn số|KNTT-Core|CT02|tap-hop-so,so-huu-ti-thap-phan
NUM-INTEGER-OPS|Số nguyên và phép tính|KNTT-Core|CT02|so-nguyen-phep-tinh
NUM-ABS|Giá trị tuyệt đối|KNTT-Core|CT02|gia-tri-tuyet-doi
NUM-ORDER|Thứ tự thực hiện phép tính|KNTT-Core|CT02|thu-tu-phep-tinh
NUM-POWER|Lũy thừa|KNTT-Core|CT02|luy-thua
NUM-DIV-PRIME|Chia hết, số nguyên tố và phân tích thừa số|KNTT-Core|CT02|dau-hieu-chia-het,so-nguyen-to,phan-tich-thua-so-nguyen-to
NUM-GCD-LCM|ƯCLN và BCNN|KNTT-Core|CT02|ucln,bcnn
NUM-FRACTION-FORM|Rút gọn, quy đồng và so sánh phân số|KNTT-Core|CT02|rut-gon-phan-so,quy-dong-so-sanh-phan-so
NUM-FRACTION-OPS|Phép tính phân số|KNTT-Core|CT02|phep-tinh-phan-so
NUM-PERCENT|Phần trăm|KNTT-Core|CT02,CT03|phan-tram,ti-so-phan-tram
RATIO-BASIC|Tỉ số và ứng dụng tỉ số|KNTT-Core|CT03|ti-so,doi-don-vi-ti-so,ti-le-ban-do
RATIO-PROP|Tỉ lệ thức và tìm số chưa biết|KNTT-Core|CT03|ti-le-thuc,tim-x-ti-le-thuc
RATIO-SPLIT|Dãy tỉ số bằng nhau và chia theo tỉ lệ|KNTT-Core|CT03|day-ti-so-bang-nhau,chia-theo-ti-le
RATIO-DIRECT|Đại lượng tỉ lệ thuận|KNTT-Core|CT03|ti-le-thuan,he-so-ti-le-thuan
RATIO-INVERSE|Đại lượng tỉ lệ nghịch|KNTT-Core|CT03|ti-le-nghich,he-so-ti-le-nghich
RATIO-DISTINGUISH|Phân biệt tỉ lệ thuận và tỉ lệ nghịch|KNTT-Core|CT03|phan-biet-thuan-nghich
RATIO-MODEL|Mô hình hóa bằng tỉ lệ|Entrance10|CT03|mo-hinh-ti-le
ALG-STRUCTURE|Cấu trúc đơn thức và đa thức|KNTT-Core|CT04|nhan-biet-don-thuc,nhan-biet-da-thuc,he-so-bac
ALG-SIMPLIFY-ADD-SUB|Thu gọn, bỏ ngoặc và cộng trừ đa thức|KNTT-Core|CT04|hang-tu-dong-dang,thu-gon-da-thuc,bo-ngoac-dau,cong-tru-da-thuc
ALG-MULTIPLY|Nhân biểu thức|KNTT-Core|CT04|nhan-bieu-thuc,tinh-phan-phoi
ALG-EVALUATE|Tính giá trị biểu thức|KNTT-Core|CT04|tinh-gia-tri-bieu-thuc
ALG-DIV-MONOMIAL|Chia đa thức cho đơn thức|KNTT-Core|CT04|chia-da-thuc-cho-don-thuc
ALG-MODEL-EXPR|Lập biểu thức từ bài toán|Entrance10|CT04|lap-bieu-thuc,bai-toan-thuc-te
ID-STRUCTURE|Nhận dạng và vận dụng các hằng đẳng thức|KNTT-Core|CT05|binh-phuong-tong,binh-phuong-hieu,hieu-hai-binh-phuong,lap-phuong-tong,lap-phuong-hieu,tong-hai-lap-phuong,hieu-hai-lap-phuong,nhan-dang-hdt,binh-phuong-hoan-chinh,nhan-dang-lap-phuong,phan-tich-hdt
ID-APPLY|Rút gọn và tính nhanh bằng hằng đẳng thức|KNTT-Core|CT05|tinh-nhanh-hdt,rut-gon-hdt
ID-PROOF|Chứng minh đẳng thức|Entrance10|CT05|chung-minh-hdt
FAC-COMMON|Phân tích bằng đặt nhân tử chung|KNTT-Core|CT06|nhan-tu-chung,doi-dau-nhan-tu-chung
FAC-GROUP|Phân tích bằng nhóm hạng tử|KNTT-Core|CT06|nhom-hang-tu
FAC-IDENTITY|Phân tích bằng hằng đẳng thức|KNTT-Core|CT06|hieu-hai-binh-phuong,binh-phuong-hoan-chinh,tong-hieu-lap-phuong
FAC-COMBINE|Phối hợp các phương pháp phân tích đa thức|KNTT-Core|CT06|phoi-hop-phuong-phap,kiem-tra-phan-tich
FAC-SPLIT-MIDDLE|Tách hạng tử giữa|Entrance10|CT06|tach-hang-tu-giua
EQ-ZERO-PRODUCT|Giải phương trình bằng phân tích nhân tử|Entrance10|CT06|giai-pt-bang-nhan-tu
RATEX-CONCEPT|Khái niệm và tính chất cơ bản của phân thức|KNTT-Core|CT07|nhan-biet-phan-thuc,hai-phan-thuc-bang-nhau
RATEX-DOMAIN|Điều kiện xác định và bảo toàn điều kiện|KNTT-Core|CT04,CT07|dieu-kien-xac-dinh,giu-dieu-kien-ban-dau
RATEX-SIMPLIFY|Phân tích và rút gọn phân thức|KNTT-Core|CT07|doi-dau-phan-thuc,phan-tich-tu-mau,rut-gon-phan-thuc
RATEX-ADD-SUB|Quy đồng, cộng và trừ phân thức|KNTT-Core|CT07|quy-dong-mau-thuc,cong-tru-phan-thuc
RATEX-MULT-DIV|Nhân và chia phân thức|KNTT-Core|CT07|nhan-phan-thuc,chia-phan-thuc
RATEX-EVALUATE|Tính giá trị phân thức|KNTT-Core|CT07|tinh-gia-tri-phan-thuc
RATEX-INTEGER|Tìm giá trị nguyên của biểu thức hữu tỉ|Specialized-Challenge|CT07|tim-gia-tri-nguyen
``

## Legacy mappings
`topic|legacy_id|family_id|role|layer|source|note`

```text
CT02|tap-hop-so|NUM-SETS|ASSESSED_SKILL|KNTT-Core||
CT02|so-nguyen-phep-tinh|NUM-INTEGER-OPS|ASSESSED_SKILL|KNTT-Core||
CT02|gia-tri-tuyet-doi|NUM-ABS|ASSESSED_SKILL|KNTT-Core||
CT02|thu-tu-phep-tinh|NUM-ORDER|ASSESSED_SKILL|KNTT-Core||
CT02|luy-thua|NUM-POWER|ASSESSED_SKILL|KNTT-Core||
CT02|dau-hieu-chia-het|NUM-DIV-PRIME|ASSESSED_SKILL|KNTT-Core||
CT02|so-nguyen-to|NUM-DIV-PRIME|ASSESSED_SKILL|KNTT-Core||
CT02|phan-tich-thua-so-nguyen-to|NUM-DIV-PRIME|ASSESSED_SKILL|KNTT-Core||
CT02|ucln|NUM-GCD-LCM|ASSESSED_SKILL|KNTT-Core||
CT02|bcnn|NUM-GCD-LCM|ASSESSED_SKILL|KNTT-Core||
CT02|rut-gon-phan-so|NUM-FRACTION-FORM|ASSESSED_SKILL|KNTT-Core||
CT02|quy-dong-so-sanh-phan-so|NUM-FRACTION-FORM|ASSESSED_SKILL|KNTT-Core||
CT02|phep-tinh-phan-so|NUM-FRACTION-OPS|ASSESSED_SKILL|KNTT-Core||
CT02|so-huu-ti-thap-phan|NUM-SETS|REVIEW_REQUIRED|KNTT-Core||
CT02|phan-tram|NUM-PERCENT|ASSESSED_SKILL|KNTT-Core||
CT02|can-bac-hai|NO_FAMILY|SUPPORTING_SKILL|Core-Support||Core-Support square-root content; excluded from normal S1 learner-facing skill families.
CT03|ti-so|RATIO-BASIC|ASSESSED_SKILL|KNTT-Core||
CT03|doi-don-vi-ti-so|RATIO-BASIC|SUPPORTING_SKILL|KNTT-Core||
CT03|ti-le-thuc|RATIO-PROP|ASSESSED_SKILL|KNTT-Core||
CT03|tim-x-ti-le-thuc|RATIO-PROP|ASSESSED_SKILL|KNTT-Core||
CT03|day-ti-so-bang-nhau|RATIO-SPLIT|ASSESSED_SKILL|KNTT-Core||
CT03|chia-theo-ti-le|RATIO-SPLIT|ASSESSED_SKILL|KNTT-Core||
CT03|ti-le-thuan|RATIO-DIRECT|ASSESSED_SKILL|KNTT-Core||
CT03|he-so-ti-le-thuan|RATIO-DIRECT|SUPPORTING_SKILL|KNTT-Core||
CT03|ti-le-nghich|RATIO-INVERSE|ASSESSED_SKILL|KNTT-Core||
CT03|he-so-ti-le-nghich|RATIO-INVERSE|SUPPORTING_SKILL|KNTT-Core||
CT03|phan-biet-thuan-nghich|RATIO-DISTINGUISH|ASSESSED_SKILL|KNTT-Core||
CT03|ti-le-ban-do|RATIO-BASIC|CONTEXT|KNTT-Core||
CT03|ti-so-phan-tram|NUM-PERCENT|ASSESSED_SKILL|KNTT-Core||
CT03|chuyen-dong-ti-le|NO_FAMILY|CONTEXT|KNTT-Core||Motion context only.
CT03|nang-suat-ti-le|NO_FAMILY|CONTEXT|KNTT-Core||Productivity context only.
CT03|mo-hinh-ti-le|RATIO-MODEL|ASSESSED_SKILL|Entrance10||
CT04|nhan-biet-don-thuc|ALG-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT04|nhan-biet-da-thuc|ALG-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT04|he-so-bac|ALG-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT04|hang-tu-dong-dang|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|KNTT-Core||
CT04|thu-gon-da-thuc|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|KNTT-Core||
CT04|cong-tru-da-thuc|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|KNTT-Core||
CT04|bo-ngoac-dau|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|KNTT-Core||
CT04|nhan-bieu-thuc|ALG-MULTIPLY|ASSESSED_SKILL|KNTT-Core||
CT04|tinh-phan-phoi|ALG-MULTIPLY|METHOD|KNTT-Core||
CT04|tinh-gia-tri-bieu-thuc|ALG-EVALUATE|ASSESSED_SKILL|KNTT-Core||
CT04|dieu-kien-xac-dinh|RATEX-DOMAIN|ASSESSED_SKILL|Core-Support||
CT04|bien-doi-nhieu-buoc|NO_FAMILY|COMPOSITE_TASK|Entrance10||Composite task demand, not a standalone family.
CT04|lap-bieu-thuc|ALG-MODEL-EXPR|ASSESSED_SKILL|Entrance10||
CT04|bai-toan-thuc-te|ALG-MODEL-EXPR|CONTEXT|Entrance10||
CT04|chia-da-thuc-cho-don-thuc|ALG-DIV-MONOMIAL|ASSESSED_SKILL|KNTT-Core||
CT05|binh-phuong-tong|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|binh-phuong-hieu|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|hieu-hai-binh-phuong|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|lap-phuong-tong|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|lap-phuong-hieu|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|tong-hai-lap-phuong|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|hieu-hai-lap-phuong|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|nhan-dang-hdt|ID-STRUCTURE|CATEGORY|KNTT-Core||
CT05|binh-phuong-hoan-chinh|ID-STRUCTURE|ASSESSED_SKILL|KNTT-Core||
CT05|nhan-dang-lap-phuong|ID-STRUCTURE|CATEGORY|KNTT-Core||
CT05|phan-tich-hdt|ID-STRUCTURE|CATEGORY|KNTT-Core||
CT05|tinh-nhanh-hdt|ID-APPLY|METHOD|KNTT-Core||
CT05|rut-gon-hdt|ID-APPLY|ASSESSED_SKILL|KNTT-Core||
CT05|chung-minh-hdt|ID-PROOF|EXTENSION_SKILL|Entrance10||
CT05|giai-phuong-trinh-hdt|NO_FAMILY|METHOD|Entrance10||Identity use inside equation solving; no separate family.
CT06|nhan-tu-chung|FAC-COMMON|ASSESSED_SKILL|KNTT-Core||
CT06|doi-dau-nhan-tu-chung|FAC-COMMON|ASSESSED_SKILL|KNTT-Core||
CT06|hieu-hai-binh-phuong|FAC-IDENTITY|ASSESSED_SKILL|KNTT-Core||
CT06|binh-phuong-hoan-chinh|FAC-IDENTITY|ASSESSED_SKILL|KNTT-Core||
CT06|tong-hieu-lap-phuong|FAC-IDENTITY|ASSESSED_SKILL|KNTT-Core||
CT06|nhom-hang-tu|FAC-GROUP|ASSESSED_SKILL|KNTT-Core||
CT06|tach-hang-tu-giua|FAC-SPLIT-MIDDLE|EXTENSION_SKILL|Entrance10||
CT06|phoi-hop-phuong-phap|FAC-COMBINE|COMPOSITE_TASK|KNTT-Core||
CT06|kiem-tra-phan-tich|FAC-COMBINE|ASSESSED_SKILL|KNTT-Core||
CT06|giai-pt-bang-nhan-tu|EQ-ZERO-PRODUCT|EXTENSION_SKILL|Entrance10||
CT06|ung-dung-phan-tich|NO_FAMILY|CONTEXT|Core-Support||Broad application label, not a standalone family.
CT07|nhan-biet-phan-thuc|RATEX-CONCEPT|ASSESSED_SKILL|KNTT-Core||
CT07|dieu-kien-xac-dinh|RATEX-DOMAIN|ASSESSED_SKILL|KNTT-Core||
CT07|hai-phan-thuc-bang-nhau|RATEX-CONCEPT|ASSESSED_SKILL|KNTT-Core||
CT07|doi-dau-phan-thuc|RATEX-SIMPLIFY|METHOD|KNTT-Core||
CT07|phan-tich-tu-mau|RATEX-SIMPLIFY|ASSESSED_SKILL|KNTT-Core||
CT07|rut-gon-phan-thuc|RATEX-SIMPLIFY|ASSESSED_SKILL|KNTT-Core||
CT07|giu-dieu-kien-ban-dau|RATEX-DOMAIN|ASSESSED_SKILL|KNTT-Core||
CT07|quy-dong-mau-thuc|RATEX-ADD-SUB|ASSESSED_SKILL|KNTT-Core||
CT07|cong-tru-phan-thuc|RATEX-ADD-SUB|ASSESSED_SKILL|KNTT-Core||
CT07|nhan-phan-thuc|RATEX-MULT-DIV|ASSESSED_SKILL|KNTT-Core||
CT07|chia-phan-thuc|RATEX-MULT-DIV|ASSESSED_SKILL|KNTT-Core||
CT07|bieu-thuc-nhieu-phep-tinh|NO_FAMILY|COMPOSITE_TASK|Entrance10||Composite rational-expression task, not a standalone family.
CT07|tinh-gia-tri-phan-thuc|RATEX-EVALUATE|ASSESSED_SKILL|KNTT-Core||
CT07|tim-gia-tri-nguyen|RATEX-INTEGER|EXTENSION_SKILL|Specialized-Challenge||
``

## Written-evidence / gap records retained from the closed batch

```json
{
  "S1-WR-CT02-BCNN-001": "NUM-GCD-LCM",
  "S1-WR-CT03-DIRECT-001": "RATIO-DIRECT",
  "S1-WR-CT03-MODEL-001": "RATIO-MODEL",
  "S1-WR-CT04-MODEL-001": "ALG-MODEL-EXPR",
  "S1-WR-CT05-PROOF-001": "ID-PROOF",
  "S1-WR-CT06-EQ-001": "EQ-ZERO-PRODUCT",
  "S1-WR-CT06-MIDTERM-001": "FAC-SPLIT-MIDDLE",
  "S1-WR-CT07-INTEGER-001": "RATEX-INTEGER"
}
```

## Review boundary
Preserve the closed batch unless an exact cross-batch duplicate, conflict, wrong reuse target, inconsistent layer, or missing canonical reuse is demonstrated. Do not infer real-exam frequency from authored-bank frequency. Do not authorize runtime changes.
