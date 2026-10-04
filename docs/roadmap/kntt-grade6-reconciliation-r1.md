# KNTT Grade 6 — Reconciliation R1

**Date:** 2026-10-04  
**State:** DRAFT RECONCILIATION · NO RUNTIME / LEARNER-FACING CHANGE  
**Input:** 35 unresolved Grade-6 refs from KNTT Coverage Matrix 6–9 v1

## 1. Result

The 35 historical Grade-6 refs split into:

- **16 CANONICAL_SKILL** — map to an existing canonical skill;
- **12 CANONICAL_FAMILY** — concept is covered by an existing family, while the finer KNTT wording remains lesson-local/problem-type/representation detail;
- **5 NEEDS_REVIEW** — a plausible target exists but scope/granularity is not safe enough for automatic reconciliation;
- **2 GAP_CANDIDATE** — no suitable current skill/family exists in the locked taxonomy.

Therefore **28/35** refs can be reconciled without adding a new global skill.

The two direct gap candidates are:

- `lam-tron`
- `uoc-luong`

They are **not approved new skills**. They only enter the academic review queue.

## 2. Anti-inflation rule

This pass does not assume that every KNTT lesson phrase deserves a global assessed-skill ID.

Keep distinctions:

- canonical skill = stable mathematical competency identity;
- canonical family = stable grouping when current taxonomy intentionally uses broader granularity;
- lesson-local concept = useful KNTT teaching language that does not require a global counter;
- problem type = mathematical task structure, not automatically a skill;
- gap candidate = only a review flag until source-backed academic review clears it.

## 3. Reconciliation table

| # | Historical ref | Resolution | Current target / review candidate | Rationale |
|---:|---|---|---|---|
| 1 | `tap-hop` | CANONICAL_SKILL | `tap-hop-so` | Tên lịch sử ngắn hơn; skill hiện hành `tap-hop-so` là định danh phù hợp. |
| 2 | `ghi-so-tu-nhien` | CANONICAL_FAMILY | `NUM-SETS` | Thuộc biểu diễn số trong family `Tập hợp số và biểu diễn số`; không cần tách thêm global skill chỉ để giữ tên bài KNTT. |
| 3 | `thu-tu-so-tu-nhien` | CANONICAL_FAMILY | `NUM-SETS` | Thuộc biểu diễn/thứ tự số tự nhiên trong family NUM-SETS; giữ chi tiết ở lesson-local. |
| 4 | `cong-tru-so-tu-nhien` | NEEDS_REVIEW | `so-nguyen-phep-tinh`, `NUM-INTEGER-OPS` | Có ứng viên `NUM-INTEGER-OPS` / `so-nguyen-phep-tinh`, nhưng family hiện hành được đóng khung ở số nguyên và Learning Workspace dùng nó cho Bài 13–17; không ép map Bài 4–5 khi chưa review scope. |
| 5 | `nhan-chia-so-tu-nhien` | NEEDS_REVIEW | `so-nguyen-phep-tinh`, `NUM-INTEGER-OPS` | Tương tự cộng/trừ số tự nhiên: phép toán có liên hệ với `NUM-INTEGER-OPS`, nhưng domain/scope hiện hành chưa đủ rõ để coi là canonical match. |
| 6 | `quan-he-chia-het` | CANONICAL_FAMILY | `NUM-DIV-PRIME` | Khái niệm quan hệ chia hết nằm trong family `Chia hết, số nguyên tố và phân tích thừa số`; taxonomy không cần một counter riêng cho tên bài này. |
| 7 | `tinh-chat-chia-het` | CANONICAL_FAMILY | `NUM-DIV-PRIME` | Tính chất chia hết là lesson-local concept trong cùng family NUM-DIV-PRIME. |
| 8 | `so-nguyen-to-hop-so` | CANONICAL_SKILL | `so-nguyen-to` | Canonical `so-nguyen-to` đã có nhãn `Số nguyên tố – hợp số`. |
| 9 | `uoc-chung-ucln` | CANONICAL_SKILL | `ucln` | Tên KNTT gộp khái niệm ước chung với kỹ năng đích ƯCLN; canonical skill hiện hành là `ucln`. |
| 10 | `boi-chung-bcnn` | CANONICAL_SKILL | `bcnn` | Tên KNTT gộp bội chung với kỹ năng đích BCNN; canonical skill hiện hành là `bcnn`. |
| 11 | `bai-toan-ucln-bcnn` | CANONICAL_FAMILY | `NUM-GCD-LCM` | Đây là nhóm bài chọn/ứng dụng ƯCLN–BCNN, phù hợp giữ như problem type dưới family thay vì skill độc lập. |
| 12 | `so-nguyen-truc-so` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | Learning Workspace hiện dùng `so-nguyen-phep-tinh` cho toàn Bài 13–17, gồm số nguyên/số đối/trục số/quy tắc dấu. |
| 13 | `so-sanh-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | Được gom vào canonical skill rộng `so-nguyen-phep-tinh` theo Grade-6 Core card hiện hành. |
| 14 | `cong-tru-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | Phép cộng/trừ số nguyên là phần trực tiếp của canonical `so-nguyen-phep-tinh`. |
| 15 | `quy-tac-dau-ngoac` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | Quy tắc dấu ngoặc trong block số nguyên hiện được gom vào `so-nguyen-phep-tinh`. |
| 16 | `nhan-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | Phép nhân số nguyên là phần trực tiếp của canonical `so-nguyen-phep-tinh`. |
| 17 | `chia-het-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | Bài 17 đang nằm trong Grade-6 Core card dùng `so-nguyen-phep-tinh`; giữ chi tiết chia hết ở lesson-local. |
| 18 | `uoc-boi-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | Ước/bội trong miền số nguyên đang được bao bởi Grade-6 integer card; không tạo counter riêng ở R1. |
| 19 | `phan-so-bang-nhau` | CANONICAL_FAMILY | `NUM-FRACTION-FORM` | Phân số bằng nhau là nền của rút gọn/quy đồng; phù hợp family `NUM-FRACTION-FORM` hơn là thêm skill mới. |
| 20 | `so-sanh-phan-so` | CANONICAL_SKILL | `quy-dong-so-sanh-phan-so` | Canonical skill đã gộp quy đồng và so sánh phân số. |
| 21 | `hon-so-duong` | NEEDS_REVIEW | `NUM-FRACTION-FORM` | KNTT Core có hỗn số dương nhưng taxonomy hiện không có skill/family label rõ ràng cho mixed-number representation; `NUM-FRACTION-FORM` là ứng viên gần nhất nhưng chưa đủ để auto-map. |
| 22 | `cong-tru-phan-so` | CANONICAL_SKILL | `phep-tinh-phan-so` | Canonical `phep-tinh-phan-so` bao phép cộng/trừ phân số. |
| 23 | `nhan-chia-phan-so` | CANONICAL_SKILL | `phep-tinh-phan-so` | Canonical `phep-tinh-phan-so` bao phép nhân/chia phân số. |
| 24 | `tim-gia-tri-phan-so-cua-so` | CANONICAL_FAMILY | `NUM-FRACTION-OPS` | Một dạng bài ứng dụng phân số; giữ problem type ở KNTT/Practice thay vì tạo assessed skill độc lập. |
| 25 | `tim-so-khi-biet-gia-tri-phan-so` | CANONICAL_FAMILY | `NUM-FRACTION-OPS` | Dạng bài đảo của ứng dụng phân số; thuộc family, không tự động thành global skill. |
| 26 | `so-thap-phan` | CANONICAL_SKILL | `so-huu-ti-thap-phan` | Grade-6 decimal block hiện dùng `so-huu-ti-thap-phan`; đây là target phù hợp cho khái niệm số thập phân. |
| 27 | `phep-tinh-so-thap-phan` | NEEDS_REVIEW | `so-huu-ti-thap-phan`, `NUM-SETS` | Learning Workspace có dạy tính số thập phân nhưng registry chỉ có `so-huu-ti-thap-phan` dưới NUM-SETS và mapping của chính code đó từng được đánh REVIEW_REQUIRED; cần review trước khi coi phép tính là cùng skill. |
| 28 | `lam-tron` | GAP_CANDIDATE | — | KNTT Bài 30 và tiêu đề Grade-6 Core card đều có làm tròn, nhưng taxonomy hiện không có skill/family chứa `lam-tron`/`xap-xi` tương ứng. |
| 29 | `uoc-luong` | GAP_CANDIDATE | — | KNTT Bài 30 có ước lượng; taxonomy hiện không có canonical skill/family trực tiếp. Chỉ ghi gap candidate, chưa tạo skill. |
| 30 | `bai-toan-phan-tram` | CANONICAL_SKILL | `phan-tram` | Current Grade-6 Core card dùng `phan-tram` và ví dụ giảm giá; bài toán phần trăm là problem type áp dụng cùng canonical skill. |
| 31 | `du-lieu` | CANONICAL_FAMILY | `STAT-DATA` | Tên lịch sử quá rộng; family `STAT-DATA` bao dữ liệu/phân loại và thu thập, phù hợp hơn một skill mới tên `du-lieu`. |
| 32 | `bang-thong-ke` | NEEDS_REVIEW | `STAT-REPRESENT`, `STAT-CHART-READ` | Learning Workspace hiện có card `Đọc bảng dữ liệu...` nhưng taxonomy không có skill đọc bảng riêng; cần quyết định giữ lesson-local dưới STAT-REPRESENT/STAT-CHART-READ hay bổ sung identity. |
| 33 | `bieu-do-tranh` | CANONICAL_FAMILY | `STAT-CHART-READ` | Biểu đồ tranh là một dạng biểu diễn lớp 6; map family đọc biểu đồ, không tạo global skill chỉ vì khác loại hình. |
| 34 | `ket-qua-co-the` | CANONICAL_FAMILY | `PROB-EVENT` | Khái niệm kết quả có thể là vocabulary nền của phép thử/biến cố; giữ Grade-6 wording ở lesson-local dưới family PROB-EVENT. |
| 35 | `su-kien-don-gian` | CANONICAL_FAMILY | `PROB-EVENT` | `Sự kiện` lớp 6 là tiền thân ngôn ngữ của biến cố; map family thay vì ép trực tiếp sang `bien-co` và làm mờ ranh giới lớp. |

## 4. Review queue

### Natural-number operations
`cong-tru-so-tu-nhien` and `nhan-chia-so-tu-nhien` are mathematically close to `NUM-INTEGER-OPS / so-nguyen-phep-tinh`, but the current Grade-6 Learning Workspace uses that identity for Bài 13–17 (integer block), not Bài 4–5. R1 therefore does not silently widen its scope.

### Mixed number
`hon-so-duong` is Core in the Grade-6 map, but current NUM-FRACTION-FORM metadata does not explicitly name mixed-number representation.

### Decimal operations
`phep-tinh-so-thap-phan` is taught in the current Grade-6 decimal card, but current taxonomy identity is `so-huu-ti-thap-phan` under NUM-SETS. This needs a granularity decision rather than an assumed merge.

### Statistical table
`bang-thong-ke` appears in the Grade-6 lesson and learner-facing statistics card, but current taxonomy has no exact table-reading skill. Review whether it stays lesson-local under an existing representation/chart family.

## 5. Gap candidates

### `lam-tron`
KNTT Bài 30 and the current Grade-6 Core-card title include rounding, while the locked taxonomy has no rounding/approximation skill or family.

### `uoc-luong`
KNTT Bài 30 includes estimation, and no suitable canonical identity exists in the locked taxonomy.

These two should be checked against S1 curriculum evidence before any registry change. A review may decide to:
- add one or two canonical skills/family entries;
- keep one concept lesson-local;
- or map to an existing family if stronger evidence supports it.

## 6. What this does not prove

Identity reconciliation does **not** mean learner-facing coverage is complete.

After Grade-6 identity review is closed, the matrix should separately audit:
- SKILL_MAP;
- LEARN_CONTENT;
- MICRO_PRACTICE;
- PRACTICE_BANK;
- WRITTEN_LIBRARY;
- READINESS where authorized.

## 7. Next gate

Before changing Taxonomy v2 or declaring Grade 6 fully reconciled:

1. independently review the **5 NEEDS_REVIEW + 2 GAP_CANDIDATE** cases;
2. use current NotebookLM permanent sources: Review Rules v1.2 + Master Plan v1.2.1;
3. use this R1 artifact and exact source-locked snapshots as the temporary batch packet;
4. reconcile the review result back into the matrix;
5. do not activate runtime, migrate history, or create mastery/readiness effects in this task.
