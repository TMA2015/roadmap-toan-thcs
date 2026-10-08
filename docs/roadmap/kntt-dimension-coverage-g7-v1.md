# KNTT Dimension Coverage Audit — Grade 7 v1

**Date:** 2026-10-08  
**State:** BASELINE / EVIDENCE AUDIT PENDING · NO CONTENT MUTATION  
**Architecture:** One Knowledge Graph · Two Learning Paths

## 1. Purpose

Scale the Grade-6 six-dimension audit method to the **21 semantically reconciled Grade-7 KNTT rows**. This baseline deliberately separates semantic mapping from learner evidence: a skill/family match does not by itself prove Learn, Micro, Practice, Written or Readiness coverage.

Grade-7 semantic reconciliation is already independently reviewed and closed at `RECONCILED_REVIEWED_R2`, clearance `G7_R2_RECONCILIATION_REVIEW_COMPLETE`.

## 2. Current baseline

| Dimension | Current baseline |
|---|---|
| SKILL_MAP | 21/21 rows loaded from the reconciled Grade-7 matrix |
| LEARN_CONTENT | 21 `AUDIT_PENDING` |
| MICRO_PRACTICE | 21 `AUDIT_PENDING` |
| PRACTICE_BANK | 21 `AUDIT_PENDING` |
| WRITTEN_LIBRARY | 21 `AUDIT_PENDING` |
| READINESS | 21 `AUDIT_PENDING` |

No content is authored or promoted in this baseline.

## 3. Audit rules

- Reuse the reviewed Grade-7 semantic reconciliation; do not reopen taxonomy decisions without new evidence.
- Treat canonical-family and lesson-local mappings as valid curriculum semantics, not missing skills.
- Topic-level Practice evidence must not be promoted automatically to exact lesson coverage.
- Written coverage requires a true `kntt_placement`, not prerequisite/skill overlap.
- `NOT_VERIFIED_STRUCTURED` Readiness is an evidence state, not a mandate to create a test for every lesson.
- Repair only real high-value gaps after evidence classification; do not expand by quota.

## 4. Grade-7 row baseline

| Chapter | Lesson | Curriculum summary | Direct skills | Family/local semantic notes |
|---:|---|---|---|---|
| 1 | Bài 1-3 | Tập hợp số hữu tỉ; cộng, trừ, nhân, chia số hữu tỉ; lũy thừa với số mũ tự nhiên của số hữu tỉ. | so-huu-ti-thap-phan, luy-thua, phep-tinh-so-huu-ti | — |
| 1 | Bài 4 | Thứ tự thực hiện phép tính; quy tắc chuyển vế trong các bài toán tìm số hữu tỉ chưa biết. | thu-tu-phep-tinh | local: quy-tac-chuyen-ve |
| 2 | Bài 5-7 | Số thập phân vô hạn tuần hoàn; số vô tỉ; căn bậc hai số học; tập hợp số thực. | so-huu-ti-thap-phan, so-vo-ti | family: NUM-SETS |
| 3 | Bài 8 | Góc ở vị trí đặc biệt và tia phân giác của một góc. | goc-phu-bu, goc-doi-dinh, tia-phan-giac, nhan-dang-goc-dac-biet | — |
| 3 | Bài 9-10 | Dấu hiệu nhận biết hai đường thẳng song song; tiên đề Euclid; tính chất của hai đường thẳng song song. | goc-so-le-trong, goc-dong-vi, goc-trong-cung-phia, tinh-chat-song-song, dau-hieu-song-song, tien-de-euclid | — |
| 3 | Bài 11 | Khái niệm định lí; giả thiết, kết luận; bước đầu chứng minh định lí. | gia-thiet-ket-luan, lap-luan-chung-minh-ngan | — |
| 4 | Bài 12 | Tổng các góc trong một tam giác. | tong-goc-tam-giac | — |
| 4 | Bài 13-15 | Hai tam giác bằng nhau; các trường hợp c-c-c, c-g-c, g-c-g và các trường hợp bằng nhau của tam giác vuông. | bang-nhau-ccc, bang-nhau-cgc, bang-nhau-gcg, bang-nhau-tam-giac-vuong, viet-tuong-ung-tam-giac-bang-nhau | — |
| 4 | Bài 16 | Tam giác cân; đường trung trực của đoạn thẳng và tính chất cách đều hai đầu mút. | tam-giac-can, nhan-biet-trung-truc, cach-deu-dinh, tinh-chat-duong-trung-truc | — |
| 5 | Bài 17 | Thu thập và phân loại dữ liệu. | du-lieu-phan-loai, thu-thap-du-lieu | — |
| 5 | Bài 18-19 | Biểu đồ hình quạt tròn và biểu đồ đoạn thẳng; đọc, biểu diễn và nhận xét dữ liệu. | bieu-do-quat-tron, doc-bieu-do-doan-thang, chon-bieu-do, chuyen-bang-bieu-do, nhan-xet-du-lieu | family: STAT-REPRESENT |
| 6 | Bài 20-21 | Tỉ lệ thức; tính chất dãy tỉ số bằng nhau. | ti-le-thuc, tim-x-ti-le-thuc, day-ti-so-bang-nhau, chia-theo-ti-le | — |
| 6 | Bài 22-23 | Đại lượng tỉ lệ thuận, tỉ lệ nghịch và các bài toán ứng dụng. | ti-le-thuan, he-so-ti-le-thuan, ti-le-nghich, he-so-ti-le-nghich, phan-biet-thuan-nghich, mo-hinh-ti-le | — |
| 7 | Bài 24-25 | Biểu thức đại số; giá trị biểu thức; đa thức một biến, hệ số và bậc. | nhan-biet-don-thuc, nhan-biet-da-thuc, he-so-bac, tinh-gia-tri-bieu-thuc | family: ALG-STRUCTURE |
| 7 | Bài 26-28 | Cộng, trừ, nhân và chia đa thức một biến. | hang-tu-dong-dang, thu-gon-da-thuc, cong-tru-da-thuc, nhan-bieu-thuc, tinh-phan-phoi, chia-da-thuc-mot-bien | — |
| 8 | Bài 29 | Làm quen với biến cố; biến cố chắc chắn, không thể và ngẫu nhiên trong các tình huống đơn giản. | bien-co, bien-co-chac-chan-khong-the | — |
| 8 | Bài 30 | Làm quen với xác suất của biến cố trong các mô hình đơn giản. | xac-suat-co-dien, kiem-tra-xac-suat | — |
| 9 | Bài 31-33 | Quan hệ góc–cạnh đối diện; đường vuông góc và đường xiên; bất đẳng thức tam giác. | so-sanh-canh-goc, bat-dang-thuc-tam-giac, duong-vuong-goc-duong-xien | — |
| 9 | Bài 34-35 | Sự đồng quy và tính chất cơ bản của trung tuyến, phân giác, trung trực, đường cao. | nhan-biet-trung-tuyen, trong-tam, ti-so-trong-tam, nhan-biet-phan-giac, nhan-biet-trung-truc, nhan-biet-duong-cao, truc-tam, tam-noi-tiep, tam-ngoai-tiep, phan-biet-bon-tam, dong-quy-bon-duong-dac-biet | — |
| 10 | Bài 36 | Hình hộp chữ nhật và hình lập phương; yếu tố hình, diện tích xung quanh/toàn phần và thể tích. | the-tich-hop-chu-nhat, dien-tich-day, doi-don-vi-do-luong, nhan-biet-hinh-hop-lap-phuong, dien-tich-xung-quanh-hop-chu-nhat | — |
| 10 | Bài 37 | Hình lăng trụ đứng tam giác, tứ giác; yếu tố hình, diện tích xung quanh và thể tích; vận dụng thực tế. | the-tich-lang-tru, dien-tich-day, doi-don-vi-do-luong, nhan-biet-lang-tru-dung, dien-tich-xung-quanh-lang-tru | — |

## 5. Next phase

Inventory existing learner evidence topic by topic and classify the six dimensions without authoring. Only after the 21 rows are classified should any repair packet be created.
