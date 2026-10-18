# Math Phase 4 R27 — khóa nguồn và chuẩn bị học thuật cho 40 câu MCQ mới

**Ngày:** 2026-10-18 · **Mục đích:** nối nguồn câu hỏi với bộ đếm Skill chung một cách đáng tin cậy; **không bật bộ đếm mới**.

## Trạng thái kế thừa được kiểm tra lại

R26 PR #512 merged; GitHub full CI, MkDocs và GitHub Pages đều SUCCESS. R26 tách chính xác 59 câu ngoài chính sách Skill lịch sử (3.114 dòng): 9 CT09 đã có hồ sơ review riêng; 10 câu rich có nguồn và receipt W1/W2A/W2B; **40 MCQ không được R26 nối với biên bản duyệt theo từng mã**. Điều này **không chứng minh 40 câu này chưa bao giờ được duyệt ở nơi khác**.

R27 duy trì riêng các mức bằng chứng:
- Đã có câu trong ngân hàng và kiểm tra được cấu trúc đáp án: **kiểm tra kỹ thuật**.
- Có nhãn `tags.skill` trong ngân hàng: **nhãn nguồn**, chưa là Family/Skill canonical được duyệt.
- Có S1 KNTT và NotebookLM PASS theo từng ID: **bằng chứng học thuật**, hiện R27 chưa nhận verdict mới.
- Được phép ghi tiến độ Skill/Mastery: **quyết định triển khai riêng, chưa được cấp**.

## Phạm vi chính xác: 40 câu / 8 nhãn nguồn / 6 file

| Chuyên đề | Nhãn nguồn | ID | Số |
|---|---|---|---:|
| CT02 | `lam-tron-so` | NUM02V1_121–132 | 12 |
| CT02 | `phep-tinh-so-huu-ti` | NUM02V1_133–138 | 6 |
| CT02 | `so-vo-ti` | NUM02V1_139–141 | 3 |
| CT02 | `can-bac-hai-so-hoc` | NUM02V1_142–144 | 3 |
| CT02 | `gia-tri-tuyet-doi` | NUM02V1_145–147 | 3 |
| CT03 | `mo-hinh-ti-le` | RAT03V1_121–124 | 4 |
| CT04 | `chia-da-thuc-mot-bien` | ALG04V2_133–138 | 6 |
| CT12 | `lien-he-do-thi` | QUA12V1_121–123 | 3 |
| **Tổng** | 8 nhãn nguồn | | **40** |

Hồ sơ đầy đủ để kiểm duyệt học thuật:
`review-packets/math-phase4-r27-mcq-40/01_NOTEBOOKLM_40_MCQ_EXACT_SOURCE_20261018.md`.

Bên trong là từng câu nguyên văn theo file Practice hiện tại: ID, đề, 4 phương án, index đáp án, explanation, tags, độ khó. Sáu file nguồn được cố định bằng **Git blob SHA**. Không được thay nội dung câu để “làm đẹp” kết quả.

## Công cụ kiểm toán tự động

- `scripts/prototypes/math-v2-r27-mcq-source-review.js` rà lại R26, xác minh tất cả 40 ID thuộc đúng sáu file SHA khóa, kiểm tra key index hợp lệ, bốn lựa chọn khác nhau, explanation không trống và đúng tám nhãn nguồn.
- `node scripts/prototypes/math-v2-r27-mcq-source-review.js --packet` dựng hồ sơ nguyên văn từ source được khóa.
- `scripts/test-math-v2-r27-mcq-source-review.js` **so sánh byte-for-byte** hồ sơ Markdown đang lưu với hồ sơ dựng lại; test đột biến file nguồn và đáp án phải fail-closed. Kiểm tra không đọc/ghi dữ liệu học sinh, không đăng ký vào trang Practice, không tạo điểm Readiness/Mastery.
- Full public Math CI chạy test này trước các bài trình duyệt tổng hợp; merge chỉ khi exact-head CI PASS.

## Bước review bắt buộc trước khi xét Skill mapping cho 40 câu

NotebookLM phải dùng Permanent Sources gồm NotebookLM Rules v1.2 và Master Plan v1.2.1, và chọn các S1 SGK/SBT KNTT 6–9 phù hợp (8 tập). Batch Source là **R27 exact-40 packet** với sáu SHA hiện tại. Phải trả verdict **40/40 mã**: PASS / REVISE / INSUFFICIENT_EVIDENCE, bài/lớp S1 hoặc chưa xác minh, đúng/sai toán học và key, điều kiện, phương án nhiễu, trùng cấu trúc, lớp bằng chứng (Core/Support/Entrance10/Challenge/Bridge), đề xuất sửa cụ thể.

**Đặc biệt cần phân biệt phép chia đa thức với việc rút gọn phân thức** ở CT04 nếu điều kiện mẫu xuất hiện; NotebookLM không được suy đoán khả năng chấm điểm từ một đáp án cuối. Với CT02/03/12 cần xem vị trí bài/lớp thật sự từ S1 thay vì dựa vào tên chuyên đề.

Khi chưa có review verdict: giữ `NOT_LINKED_BY_R26`; không tạo family mapping, không dùng các nhãn nguồn tự cộng Skill; không bật canonical option/action identity; không chuyển lịch sử Practice cũ sang mới.

**Không cần thay Checkpoint Project Sources cho R27.** Mọi mã kiểm tra và hồ sơ review nằm trên GitHub.
