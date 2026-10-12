# NotebookLM Source — S1 learner-facing skill-family consolidation R1

Packet ID: `MATH-SKILL-S1-FAMILY-CONSOLIDATION-R1-20261002`

Candidate JSON blob (repo provenance only): `5b162b77f9f2aa2d9a02d125a1369709bc1338e0`
Scope: CT02–CT07; legacy rows: **87**
Proposed learner-facing families: **39** = 33 Core + 6 optional.

## Design principle

Do **not** make every diagnostic tag a learner-facing mastery bar. Preserve finer diagnostic subskills internally for remediation, but show a smaller set of meaningful skill families to the learner.

A family should be broad enough to avoid clutter but narrow enough that weakness leads to a specific remediation path. Distinct misconceptions may remain diagnostic subskills even when they share one learner-facing family.

## Proposed 39 learner-facing families

- `NUM-SETS` | Tập hợp số và biểu diễn số | KNTT-Core | topics=CT02 | diagnostic_subskills=tap-hop-so,so-huu-ti-thap-phan
- `NUM-INTEGER-OPS` | Số nguyên và phép tính | KNTT-Core | topics=CT02 | diagnostic_subskills=so-nguyen-phep-tinh
- `NUM-ABS` | Giá trị tuyệt đối | KNTT-Core | topics=CT02 | diagnostic_subskills=gia-tri-tuyet-doi
- `NUM-ORDER` | Thứ tự thực hiện phép tính | KNTT-Core | topics=CT02 | diagnostic_subskills=thu-tu-phep-tinh
- `NUM-POWER` | Lũy thừa | KNTT-Core | topics=CT02 | diagnostic_subskills=luy-thua
- `NUM-DIV-PRIME` | Chia hết, số nguyên tố và phân tích thừa số | KNTT-Core | topics=CT02 | diagnostic_subskills=dau-hieu-chia-het,so-nguyen-to,phan-tich-thua-so-nguyen-to
- `NUM-GCD-LCM` | ƯCLN và BCNN | KNTT-Core | topics=CT02 | diagnostic_subskills=ucln,bcnn
- `NUM-FRACTION-FORM` | Rút gọn, quy đồng và so sánh phân số | KNTT-Core | topics=CT02 | diagnostic_subskills=rut-gon-phan-so,quy-dong-so-sanh-phan-so
- `NUM-FRACTION-OPS` | Phép tính phân số | KNTT-Core | topics=CT02 | diagnostic_subskills=phep-tinh-phan-so
- `NUM-PERCENT` | Phần trăm | KNTT-Core | topics=CT02,CT03 | diagnostic_subskills=phan-tram,ti-so-phan-tram
- `RATIO-BASIC` | Tỉ số và ứng dụng tỉ số | KNTT-Core | topics=CT03 | diagnostic_subskills=ti-so,doi-don-vi-ti-so,ti-le-ban-do
- `RATIO-PROP` | Tỉ lệ thức và tìm số chưa biết | KNTT-Core | topics=CT03 | diagnostic_subskills=ti-le-thuc,tim-x-ti-le-thuc
- `RATIO-SPLIT` | Dãy tỉ số bằng nhau và chia theo tỉ lệ | KNTT-Core | topics=CT03 | diagnostic_subskills=day-ti-so-bang-nhau,chia-theo-ti-le
- `RATIO-DIRECT` | Đại lượng tỉ lệ thuận | KNTT-Core | topics=CT03 | diagnostic_subskills=ti-le-thuan,he-so-ti-le-thuan
- `RATIO-INVERSE` | Đại lượng tỉ lệ nghịch | KNTT-Core | topics=CT03 | diagnostic_subskills=ti-le-nghich,he-so-ti-le-nghich
- `RATIO-DISTINGUISH` | Phân biệt tỉ lệ thuận và tỉ lệ nghịch | KNTT-Core | topics=CT03 | diagnostic_subskills=phan-biet-thuan-nghich
- `RATIO-MODEL` | Mô hình hóa bằng tỉ lệ | Entrance10 | topics=CT03 | diagnostic_subskills=mo-hinh-ti-le
- `ALG-STRUCTURE` | Cấu trúc đơn thức và đa thức | KNTT-Core | topics=CT04 | diagnostic_subskills=nhan-biet-don-thuc,nhan-biet-da-thuc,he-so-bac
- `ALG-SIMPLIFY-ADD-SUB` | Thu gọn, bỏ ngoặc và cộng trừ đa thức | KNTT-Core | topics=CT04 | diagnostic_subskills=hang-tu-dong-dang,thu-gon-da-thuc,bo-ngoac-dau,cong-tru-da-thuc
- `ALG-MULTIPLY` | Nhân biểu thức | KNTT-Core | topics=CT04 | diagnostic_subskills=nhan-bieu-thuc,tinh-phan-phoi
- `ALG-EVALUATE` | Tính giá trị biểu thức | KNTT-Core | topics=CT04 | diagnostic_subskills=tinh-gia-tri-bieu-thuc
- `ALG-DIV-MONOMIAL` | Chia đa thức cho đơn thức | KNTT-Core | topics=CT04 | diagnostic_subskills=chia-da-thuc-cho-don-thuc
- `ALG-MODEL-EXPR` | Lập biểu thức từ bài toán | Entrance10 | topics=CT04 | diagnostic_subskills=lap-bieu-thuc,bai-toan-thuc-te
- `ID-STRUCTURE` | Nhận dạng và vận dụng các hằng đẳng thức | KNTT-Core | topics=CT05 | diagnostic_subskills=binh-phuong-tong,binh-phuong-hieu,hieu-hai-binh-phuong,lap-phuong-tong,lap-phuong-hieu,tong-hai-lap-phuong,hieu-hai-lap-phuong,nhan-dang-hdt,binh-phuong-hoan-chinh,nhan-dang-lap-phuong,phan-tich-hdt
- `ID-APPLY` | Rút gọn và tính nhanh bằng hằng đẳng thức | KNTT-Core | topics=CT05 | diagnostic_subskills=tinh-nhanh-hdt,rut-gon-hdt
- `ID-PROOF` | Chứng minh đẳng thức | Entrance10 | topics=CT05 | diagnostic_subskills=chung-minh-hdt
- `FAC-COMMON` | Phân tích bằng đặt nhân tử chung | KNTT-Core | topics=CT06 | diagnostic_subskills=nhan-tu-chung,doi-dau-nhan-tu-chung
- `FAC-GROUP` | Phân tích bằng nhóm hạng tử | KNTT-Core | topics=CT06 | diagnostic_subskills=nhom-hang-tu
- `FAC-IDENTITY` | Phân tích bằng hằng đẳng thức | KNTT-Core | topics=CT06 | diagnostic_subskills=hieu-hai-binh-phuong,binh-phuong-hoan-chinh,tong-hieu-lap-phuong
- `FAC-COMBINE` | Phối hợp các phương pháp phân tích đa thức | KNTT-Core | topics=CT06 | diagnostic_subskills=phoi-hop-phuong-phap,kiem-tra-phan-tich
- `FAC-SPLIT-MIDDLE` | Tách hạng tử giữa | Entrance10 | topics=CT06 | diagnostic_subskills=tach-hang-tu-giua
- `EQ-ZERO-PRODUCT` | Giải phương trình bằng phân tích nhân tử | Entrance10 | topics=CT06 | diagnostic_subskills=giai-pt-bang-nhan-tu
- `RATEX-CONCEPT` | Khái niệm và tính chất cơ bản của phân thức | KNTT-Core | topics=CT07 | diagnostic_subskills=nhan-biet-phan-thuc,hai-phan-thuc-bang-nhau
- `RATEX-DOMAIN` | Điều kiện xác định và bảo toàn điều kiện | KNTT-Core | topics=CT04,CT07 | diagnostic_subskills=dieu-kien-xac-dinh,giu-dieu-kien-ban-dau
- `RATEX-SIMPLIFY` | Phân tích và rút gọn phân thức | KNTT-Core | topics=CT07 | diagnostic_subskills=doi-dau-phan-thuc,phan-tich-tu-mau,rut-gon-phan-thuc
- `RATEX-ADD-SUB` | Quy đồng, cộng và trừ phân thức | KNTT-Core | topics=CT07 | diagnostic_subskills=quy-dong-mau-thuc,cong-tru-phan-thuc
- `RATEX-MULT-DIV` | Nhân và chia phân thức | KNTT-Core | topics=CT07 | diagnostic_subskills=nhan-phan-thuc,chia-phan-thuc
- `RATEX-EVALUATE` | Tính giá trị phân thức | KNTT-Core | topics=CT07 | diagnostic_subskills=tinh-gia-tri-phan-thuc
- `RATEX-INTEGER` | Tìm giá trị nguyên của biểu thức hữu tỉ | Specialized-Challenge | topics=CT07 | diagnostic_subskills=tim-gia-tri-nguyen

## 87 legacy-tag mappings

Format: `topic|legacy_id|family_id|role|canonical_candidate|layer`

```text
CT02|tap-hop-so|NUM-SETS|ASSESSED_SKILL|tap-hop-so|KNTT-Core
CT02|so-nguyen-phep-tinh|NUM-INTEGER-OPS|ASSESSED_SKILL|so-nguyen-phep-tinh|KNTT-Core
CT02|gia-tri-tuyet-doi|NUM-ABS|ASSESSED_SKILL|gia-tri-tuyet-doi|KNTT-Core
CT02|thu-tu-phep-tinh|NUM-ORDER|ASSESSED_SKILL|thu-tu-phep-tinh|KNTT-Core
CT02|luy-thua|NUM-POWER|ASSESSED_SKILL|luy-thua|KNTT-Core
CT02|dau-hieu-chia-het|NUM-DIV-PRIME|ASSESSED_SKILL|dau-hieu-chia-het|KNTT-Core
CT02|so-nguyen-to|NUM-DIV-PRIME|ASSESSED_SKILL|so-nguyen-to|KNTT-Core
CT02|phan-tich-thua-so-nguyen-to|NUM-DIV-PRIME|ASSESSED_SKILL|phan-tich-thua-so-nguyen-to|KNTT-Core
CT02|ucln|NUM-GCD-LCM|ASSESSED_SKILL|ucln|KNTT-Core
CT02|bcnn|NUM-GCD-LCM|ASSESSED_SKILL|bcnn|KNTT-Core
CT02|rut-gon-phan-so|NUM-FRACTION-FORM|ASSESSED_SKILL|rut-gon-phan-so|KNTT-Core
CT02|quy-dong-so-sanh-phan-so|NUM-FRACTION-FORM|ASSESSED_SKILL|quy-dong-so-sanh-phan-so|KNTT-Core
CT02|phep-tinh-phan-so|NUM-FRACTION-OPS|ASSESSED_SKILL|phep-tinh-phan-so|KNTT-Core
CT02|so-huu-ti-thap-phan|NUM-SETS|REVIEW_REQUIRED||KNTT-Core
CT02|phan-tram|NUM-PERCENT|ASSESSED_SKILL|phan-tram|KNTT-Core
CT02|can-bac-hai|NO_FAMILY|SUPPORTING_SKILL|can-bac-hai-so-hoc|Core-Support
CT03|ti-so|RATIO-BASIC|ASSESSED_SKILL|ti-so|KNTT-Core
CT03|doi-don-vi-ti-so|RATIO-BASIC|SUPPORTING_SKILL|ti-so|KNTT-Core
CT03|ti-le-thuc|RATIO-PROP|ASSESSED_SKILL|ti-le-thuc|KNTT-Core
CT03|tim-x-ti-le-thuc|RATIO-PROP|ASSESSED_SKILL|tim-x-ti-le-thuc|KNTT-Core
CT03|day-ti-so-bang-nhau|RATIO-SPLIT|ASSESSED_SKILL|day-ti-so-bang-nhau|KNTT-Core
CT03|chia-theo-ti-le|RATIO-SPLIT|ASSESSED_SKILL|chia-theo-ti-le|KNTT-Core
CT03|ti-le-thuan|RATIO-DIRECT|ASSESSED_SKILL|ti-le-thuan|KNTT-Core
CT03|he-so-ti-le-thuan|RATIO-DIRECT|SUPPORTING_SKILL|ti-le-thuan|KNTT-Core
CT03|ti-le-nghich|RATIO-INVERSE|ASSESSED_SKILL|ti-le-nghich|KNTT-Core
CT03|he-so-ti-le-nghich|RATIO-INVERSE|SUPPORTING_SKILL|ti-le-nghich|KNTT-Core
CT03|phan-biet-thuan-nghich|RATIO-DISTINGUISH|ASSESSED_SKILL|phan-biet-thuan-nghich|KNTT-Core
CT03|ti-le-ban-do|RATIO-BASIC|CONTEXT|ti-so|KNTT-Core
CT03|ti-so-phan-tram|NUM-PERCENT|ASSESSED_SKILL|phan-tram|KNTT-Core
CT03|chuyen-dong-ti-le|NO_FAMILY|CONTEXT||KNTT-Core
CT03|nang-suat-ti-le|NO_FAMILY|CONTEXT||KNTT-Core
CT03|mo-hinh-ti-le|RATIO-MODEL|ASSESSED_SKILL|mo-hinh-ti-le|Entrance10
CT04|nhan-biet-don-thuc|ALG-STRUCTURE|ASSESSED_SKILL|nhan-biet-don-thuc|KNTT-Core
CT04|nhan-biet-da-thuc|ALG-STRUCTURE|ASSESSED_SKILL|nhan-biet-da-thuc|KNTT-Core
CT04|he-so-bac|ALG-STRUCTURE|ASSESSED_SKILL|he-so-bac|KNTT-Core
CT04|hang-tu-dong-dang|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|hang-tu-dong-dang|KNTT-Core
CT04|thu-gon-da-thuc|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|thu-gon-da-thuc|KNTT-Core
CT04|cong-tru-da-thuc|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|cong-tru-da-thuc|KNTT-Core
CT04|bo-ngoac-dau|ALG-SIMPLIFY-ADD-SUB|ASSESSED_SKILL|bo-ngoac-dau|KNTT-Core
CT04|nhan-bieu-thuc|ALG-MULTIPLY|ASSESSED_SKILL|nhan-bieu-thuc|KNTT-Core
CT04|tinh-phan-phoi|ALG-MULTIPLY|METHOD|nhan-bieu-thuc|KNTT-Core
CT04|tinh-gia-tri-bieu-thuc|ALG-EVALUATE|ASSESSED_SKILL|tinh-gia-tri-bieu-thuc|KNTT-Core
CT04|dieu-kien-xac-dinh|RATEX-DOMAIN|ASSESSED_SKILL|dieu-kien-xac-dinh|Core-Support
CT04|bien-doi-nhieu-buoc|NO_FAMILY|COMPOSITE_TASK||Entrance10
CT04|lap-bieu-thuc|ALG-MODEL-EXPR|ASSESSED_SKILL|lap-bieu-thuc|Entrance10
CT04|bai-toan-thuc-te|ALG-MODEL-EXPR|CONTEXT||Entrance10
CT04|chia-da-thuc-cho-don-thuc|ALG-DIV-MONOMIAL|ASSESSED_SKILL|chia-da-thuc-cho-don-thuc|KNTT-Core
CT05|binh-phuong-tong|ID-STRUCTURE|ASSESSED_SKILL|binh-phuong-tong-hieu|KNTT-Core
CT05|binh-phuong-hieu|ID-STRUCTURE|ASSESSED_SKILL|binh-phuong-tong-hieu|KNTT-Core
CT05|hieu-hai-binh-phuong|ID-STRUCTURE|ASSESSED_SKILL|hieu-hai-binh-phuong|KNTT-Core
CT05|lap-phuong-tong|ID-STRUCTURE|ASSESSED_SKILL|lap-phuong-tong-hieu|KNTT-Core
CT05|lap-phuong-hieu|ID-STRUCTURE|ASSESSED_SKILL|lap-phuong-tong-hieu|KNTT-Core
CT05|tong-hai-lap-phuong|ID-STRUCTURE|ASSESSED_SKILL|tong-hieu-hai-lap-phuong|KNTT-Core
CT05|hieu-hai-lap-phuong|ID-STRUCTURE|ASSESSED_SKILL|tong-hieu-hai-lap-phuong|KNTT-Core
CT05|nhan-dang-hdt|ID-STRUCTURE|CATEGORY||KNTT-Core
CT05|binh-phuong-hoan-chinh|ID-STRUCTURE|ASSESSED_SKILL|binh-phuong-hoan-chinh|KNTT-Core
CT05|nhan-dang-lap-phuong|ID-STRUCTURE|CATEGORY|lap-phuong-tong-hieu|KNTT-Core
CT05|phan-tich-hdt|ID-STRUCTURE|CATEGORY||KNTT-Core
CT05|tinh-nhanh-hdt|ID-APPLY|METHOD||KNTT-Core
CT05|rut-gon-hdt|ID-APPLY|ASSESSED_SKILL|rut-gon-hdt|KNTT-Core
CT05|chung-minh-hdt|ID-PROOF|EXTENSION_SKILL|chung-minh-dang-thuc|Entrance10
CT05|giai-phuong-trinh-hdt|NO_FAMILY|METHOD|pt-bac-nhat|Entrance10
CT06|nhan-tu-chung|FAC-COMMON|ASSESSED_SKILL|nhan-tu-chung|KNTT-Core
CT06|doi-dau-nhan-tu-chung|FAC-COMMON|ASSESSED_SKILL|doi-dau-nhan-tu-chung|KNTT-Core
CT06|hieu-hai-binh-phuong|FAC-IDENTITY|ASSESSED_SKILL|hieu-hai-binh-phuong|KNTT-Core
CT06|binh-phuong-hoan-chinh|FAC-IDENTITY|ASSESSED_SKILL|binh-phuong-hoan-chinh|KNTT-Core
CT06|tong-hieu-lap-phuong|FAC-IDENTITY|ASSESSED_SKILL|tong-hieu-hai-lap-phuong|KNTT-Core
CT06|nhom-hang-tu|FAC-GROUP|ASSESSED_SKILL|nhom-hang-tu|KNTT-Core
CT06|tach-hang-tu-giua|FAC-SPLIT-MIDDLE|EXTENSION_SKILL|tach-hang-tu-giua|Entrance10
CT06|phoi-hop-phuong-phap|FAC-COMBINE|COMPOSITE_TASK|phan-tich-da-thuc-hoan-toan|KNTT-Core
CT06|kiem-tra-phan-tich|FAC-COMBINE|ASSESSED_SKILL|kiem-tra-phan-tich|KNTT-Core
CT06|giai-pt-bang-nhan-tu|EQ-ZERO-PRODUCT|EXTENSION_SKILL|pt-tich|Entrance10
CT06|ung-dung-phan-tich|NO_FAMILY|CONTEXT||Core-Support
CT07|nhan-biet-phan-thuc|RATEX-CONCEPT|ASSESSED_SKILL|nhan-biet-phan-thuc|KNTT-Core
CT07|dieu-kien-xac-dinh|RATEX-DOMAIN|ASSESSED_SKILL|dieu-kien-xac-dinh|KNTT-Core
CT07|hai-phan-thuc-bang-nhau|RATEX-CONCEPT|ASSESSED_SKILL|hai-phan-thuc-bang-nhau|KNTT-Core
CT07|doi-dau-phan-thuc|RATEX-SIMPLIFY|METHOD|rut-gon-phan-thuc|KNTT-Core
CT07|phan-tich-tu-mau|RATEX-SIMPLIFY|ASSESSED_SKILL|phan-tich-tu-mau|KNTT-Core
CT07|rut-gon-phan-thuc|RATEX-SIMPLIFY|ASSESSED_SKILL|rut-gon-phan-thuc|KNTT-Core
CT07|giu-dieu-kien-ban-dau|RATEX-DOMAIN|ASSESSED_SKILL|giu-dieu-kien-ban-dau|KNTT-Core
CT07|quy-dong-mau-thuc|RATEX-ADD-SUB|ASSESSED_SKILL|quy-dong-mau-thuc|KNTT-Core
CT07|cong-tru-phan-thuc|RATEX-ADD-SUB|ASSESSED_SKILL|cong-tru-phan-thuc|KNTT-Core
CT07|nhan-phan-thuc|RATEX-MULT-DIV|ASSESSED_SKILL|nhan-phan-thuc|KNTT-Core
CT07|chia-phan-thuc|RATEX-MULT-DIV|ASSESSED_SKILL|chia-phan-thuc|KNTT-Core
CT07|bieu-thuc-nhieu-phep-tinh|NO_FAMILY|COMPOSITE_TASK||Entrance10
CT07|tinh-gia-tri-phan-thuc|RATEX-EVALUATE|ASSESSED_SKILL|tinh-gia-tri-phan-thuc|KNTT-Core
CT07|tim-gia-tri-nguyen|RATEX-INTEGER|EXTENSION_SKILL|tim-gia-tri-nguyen|Specialized-Challenge
```

## Written-gap family links

- `S1-WR-CT02-BCNN-001` → `NUM-GCD-LCM`
- `S1-WR-CT03-DIRECT-001` → `RATIO-DIRECT`
- `S1-WR-CT03-MODEL-001` → `RATIO-MODEL`
- `S1-WR-CT04-MODEL-001` → `ALG-MODEL-EXPR`
- `S1-WR-CT05-PROOF-001` → `ID-PROOF`
- `S1-WR-CT06-EQ-001` → `EQ-ZERO-PRODUCT`
- `S1-WR-CT06-MIDTERM-001` → `FAC-SPLIT-MIDDLE`
- `S1-WR-CT07-INTEGER-001` → `RATEX-INTEGER`

## Questions that need independent judgment

- Is NUM-DIV-PRIME too broad for one learner-facing family, or should divisibility and prime-factorization be two families?
- Is NUM-GCD-LCM best as one learner-facing family while retaining UCLN and BCNN as diagnostic subskills?
- Is RATIO-PROP best as one learner-facing family while retaining ti-le-thuc and tim-x as diagnostics?
- Is ID-STRUCTURE appropriately one learner-facing family for the seven identities while retaining identity-specific diagnostics?
- Should FAC-IDENTITY remain a separate learner-facing factorization family even though it reuses CT05 identity diagnostics?
- Should RATEX-ADD-SUB and RATEX-MULT-DIV remain separate learner-facing families?
- Are any current diagnostic subskills important enough to remain visible as independent learner skills?
- Are any families still too narrow or too broad for actionable remediation?

## Review constraints

- Preserve all legacy IDs and learner history.
- No runtime/mastery migration is authorized.
- CT02 and CT03 full-bank audits both passed 120/120 with 0 revisions.
- CT04–CT07 already have prior full-bank Phase D review.
- Methods, contexts, categories, composite-task tags and Core-Support content should not become learner-facing mastery families merely to increase coverage.
- Do not target a predetermined family count. Recommend MERGE or SPLIT only when remediation value supports it.
- Optional Entrance10/Challenge families must not gate Core progress.
- Written evidence remains required where MCQ cannot certify proof/modeling/multistep reasoning.

## Required output

Review all 39 families. Return one line each:
`FAMILY|<family_id>|PASS`
or `FAMILY|<family_id>|REVISE|MERGE|<target_family_id>|<reason>`
or `FAMILY|<family_id>|REVISE|SPLIT|<new family proposal>|<reason>`
or `FAMILY|<family_id>|REVISE|RELABEL|<better label>|<reason>`

For legacy mappings, return only incorrect mappings:
`MAP_FIX|<topic>|<legacy_id>|<correct family or NO_FAMILY>|<correct role>|<reason>`
If none: `MAP_FIX_COUNT|0`

For each written-gap link:
`WRITTEN_FAMILY|S1-WR-CT02-BCNN-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT02-BCNN-001|REVISE|<correct family>|<reason>`
`WRITTEN_FAMILY|S1-WR-CT03-DIRECT-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT03-DIRECT-001|REVISE|<correct family>|<reason>`
`WRITTEN_FAMILY|S1-WR-CT03-MODEL-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT03-MODEL-001|REVISE|<correct family>|<reason>`
`WRITTEN_FAMILY|S1-WR-CT04-MODEL-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT04-MODEL-001|REVISE|<correct family>|<reason>`
`WRITTEN_FAMILY|S1-WR-CT05-PROOF-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT05-PROOF-001|REVISE|<correct family>|<reason>`
`WRITTEN_FAMILY|S1-WR-CT06-EQ-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT06-EQ-001|REVISE|<correct family>|<reason>`
`WRITTEN_FAMILY|S1-WR-CT06-MIDTERM-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT06-MIDTERM-001|REVISE|<correct family>|<reason>`
`WRITTEN_FAMILY|S1-WR-CT07-INTEGER-001|PASS` or `WRITTEN_FAMILY|S1-WR-CT07-INTEGER-001|REVISE|<correct family>|<reason>`

`ARCH_1|PASS`
`ARCH_2|PASS`
`ARCH_3|PASS`
`ARCH_4|PASS`
`ARCH_5|PASS`
`ARCH_6|PASS`
`ARCH_7|PASS`
`ARCH_8|PASS`
`ARCH_9|PASS`
`ARCH_10|PASS`

Architecture meanings:
1. learner-facing families are fewer than diagnostic subskills and not quota-driven
2. every family supports actionable remediation
3. no important diagnostic distinction is lost by over-merging
4. methods/contexts/categories/composites do not become mastery families
5. shared cross-topic capabilities are reused instead of duplicated
6. Core / Entrance10 / Challenge separation is coherent
7. written-evidence requirements remain attached where MCQ is insufficient
8. legacy IDs/history are preserved
9. no runtime/mastery activation is implied
10. family count is academically justified, not optimized toward a preset number

Finally:
`OVERALL|PASS` or `OVERALL|REVISIONS_REQUIRED`
`COVERAGE|39|<pass_count>|<revise_count>|<missing_count>`
`AUTHORIZATION|CLEARED_FOR_S1_FAMILY_RECONCILIATION` or `AUTHORIZATION|BLOCKED_PENDING_REVISIONS`
No prose or markdown tables outside these machine-checkable lines.
