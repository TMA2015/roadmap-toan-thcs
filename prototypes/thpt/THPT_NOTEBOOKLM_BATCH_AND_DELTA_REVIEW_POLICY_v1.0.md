# Toán THPT · Quy tắc review theo lô và xử lý sửa đổi nhỏ v1.0

**Ngày:** 27/10/2026  
**Phạm vi:** Toán THPT 10–12 · chương trình KNTT · kiến trúc R4.  
**Nguồn quyết định:** Định hướng của chủ dự án trong hội thoại ngày 27/10/2026.  
**Trạng thái:** Quy tắc vận hành cho các giai đoạn tiếp theo; nếu có chỉ đạo mới từ chủ dự án thì cập nhật và ghi phiên bản.  
**Không phải:** văn bản SGK/SBT hay kết luận học thuật cho bất kỳ chương nào.

## 1. Đơn vị review theo giai đoạn

| Giai đoạn | Đơn vị review ưu tiên | Mục đích |
|---|---|---|
| GOLDEN_PILOT / đang thử giao diện | **Một bài SGK hoặc một chuyên đề mẫu** | Chốt cấu trúc nội dung, đồ thị, điều hướng, tương tác và từng hình thức Core / Practice / Readiness / Written |
| TEMPLATE_LOCKED / đã nghiệm thu UI mẫu | **Một cụm bài, hoặc cả chương nếu đủ gọn** | Kiểm tra đồng thời độ phủ chương, tính liên tục giữa các bài và tính nhất quán kiến thức |
| TOPIC_VERTICAL / chuyên đề xuyên lớp | **Một nhóm nội dung chuyên đề có phạm vi tự đủ và item register đầy đủ** | Kiểm tra kiến thức trục dọc, nối lớp, tránh sao chép Core / không suy rộng bài mẫu thành cả chuyên đề |

**Không ấn định số bài cứng.** Mặc định thử lập một batch trong cùng chương; ưu tiên 3–5 bài liên quan khi chương dài. Review cả chương khi source receipt, outcome matrix, toàn bộ item IDs, lời giải và thảo luận ngữ nghĩa vẫn đọc/đối chiếu trọn vẹn. Chia nhỏ nếu số lượng câu hoặc độ khó làm reviewer không thể kiểm 100% từng ID. Không dùng việc "review theo chương" làm lý do bỏ qua từng bài.

**Tiêu chí chia lô:** cùng SGK/chương/mục tiêu liên quan; snapshot ổn định; bài và đáp án được liệt kê; đủ evidence để reviewer trả verdict cho từng bài và từng item; có register để phát hiện ID thiếu/lặp; nội dung dễ đọc trong NotebookLM.

## 2. Mỗi batch cần có gì?

- `BATCH_ID`, chương/lớp, lesson IDs và item IDs dự kiến, source version/commit, S1 SGK + SBT cụ thể và trang in khi thực sự đã xác minh.
- Snapshot đầy đủ theo từng bài: kiến thức, công thức/điều kiện, hình/đồ thị cần đánh giá, ví dụ, thẻ Core, Practice, Readiness, Written/Anchor, đáp án, lời giải, rubric, phân tầng.
- Ma trận coverage `LESSON_ID → SOURCE_SECTION → OUTCOME_ID → CONTENT_BLOCK`; bảng `ITEM_ID → ROLE → LESSON/TOPIC → KEY → REVIEW_STATUS`.
- Kiểm tra thêm tính nhất quán giữa bài, liên kết SGK ↔ chuyên đề, cùng canonical Core ID và ranh giới Readiness.
- Verdict **theo từng bài/item và toàn batch**; `NOT_REVIEWED` hoặc thiếu chứng cứ không tự trở thành PASS. Batch `PASS` chỉ khi không còn P0/P1 bắt buộc và từng hàng thuộc phạm vi đã được xác nhận.

## 3. Quy tắc sửa sau review: không vòng lặp máy móc

NotebookLM là reviewer độc lập, không phải người phê duyệt mọi chữ sửa. Sau khi nhận biên bản:

| Nhóm sửa | Ví dụ | Thẩm quyền và hành động | Có phải gửi lại NotebookLM? |
|---|---|---|---|
| `DELTA_A_UI` — nhỏ, không thay nghĩa toán | Chính tả, ngắt dòng, căn bảng, kích thước phông, nhãn điều hướng, alt text, lỗi tràn/đồ thị chỉ về trình bày mà không đổi biểu diễn toán | ChatGPT chủ động sửa, chạy lint/build/browser QA thích hợp, ghi `DELTA_LOG` | **Không** |
| `DELTA_B_SOURCE_EQUIVALENT` — điều chỉnh nhỏ theo finding rõ ràng | Diễn đạt lại cùng một mệnh đề, bổ sung chú thích đúng theo chứng cứ SGK/reviewer đã dẫn, sửa nhãn/metadata demo-only, đổi thứ tự ví dụ mà giữ nguyên mục tiêu và đáp án | ChatGPT được tự xử lý **nếu** có nguồn rõ, kiểm được tương đương ý nghĩa và không thay điều kiện/đáp án/độ khó/mức đánh giá; ghi `DELTA_LOG` và test liên quan | **Không bắt buộc**; chuyển sang C nếu không chắc |
| `DELTA_C_ACADEMIC_MATERIAL` — thay đổi học thuật đáng kể | Thêm/bỏ yêu cầu cần đạt, đổi công thức/điều kiện quan trọng, đổi khóa đáp án/rubric, đổi độ khó/phân loại Core–Practice–Readiness, thêm nhiều item, thay mẫu đánh giá hoặc mở rộng phạm vi chuyên đề | Sửa với căn cứ, **review phần ảnh hưởng**; chỉ cần gói delta có snapshot đầy đủ phần thay đổi + ngữ cảnh và register phù hợp, không bắt buộc kiểm lại nguyên chương | **Có** |
| `DELTA_D_BLOCKER` — sai toán/nguồn mơ hồ, rủi ro chấm sai, không thể xác nhận từ S1 | Lời giải mâu thuẫn, nguồn không đọc được, sai đáp án có thể ảnh hưởng cả bank | Tạm chặn PASS/phát hành phạm vi ảnh hưởng; kiểm tra nguồn và tái thẩm định đến khi rõ | **Có**, hoặc `BLOCKED_SOURCE` |

**Quy tắc quyết định:** mức độ rủi ro dựa trên **nội dung bị thay đổi**, không phải số dòng diff hay nhãn lỗi P1/P2. Một lỗi chính tả làm đảo nghĩa bất đẳng thức, điều kiện hoặc đáp án **không được xếp nhóm A/B**. Khi nghi ngờ, xếp nhóm C.

**Không bắt buộc NotebookLM review lại những điểm chính reviewer đã cho chỉ dẫn sửa rõ, đơn trị và có bằng chứng S1**, nếu hiệu chỉnh giữ nguyên ý nghĩa/độ khó/cách chấm và QA nội bộ chứng minh đầy đủ; nhưng không dùng ngoại lệ này để miễn review bất kỳ outcome/item mới hay điều kiện toán bị thay đổi.

## 4. Delta log: gọn nhưng truy vết được

Mỗi đợt sửa sau review lưu vào ghi chú PR/checkpoint (không tạo hàng chục tài liệu chỉ cho chỉnh CSS):

```text
BASE_ACADEMIC_RECEIPT: <PACKET_ID + verdict>
CHANGESET_SHA: <commit>
AFFECTED_LESSONS: <IDs>
AFFECTED_ITEMS: <IDs or NONE>
DELTA_CLASS: DELTA_A_UI | DELTA_B_SOURCE_EQUIVALENT | DELTA_C_ACADEMIC_MATERIAL | DELTA_D_BLOCKER
CHANGE_SUMMARY: <đã đổi gì, dựa trên finding/source nào>
MATH_SEMANTICS_CHANGED: YES | NO
ANSWER_RUBRIC_CHANGED: YES | NO
OUTCOME_SCOPE_CHANGED: YES | NO
QA_RECEIPT: <link/commit>
NOTEBOOKLM_REREVIEW: NOT_REQUIRED_WITH_REASON | REQUIRED | PASS_WITH_PACKET_ID
RELEASE_APPROVAL: SEPARATE_OWNER_GATE
```

Nếu batch PASS trước đó nhưng xuất hiện thay đổi nhóm C/D, **chỉ đóng băng clearance của phần bị ảnh hưởng**, không tự động hủy tất cả bài khác đã PASS. Gói review delta có thể gộp cùng đợt review chương tiếp theo nếu giữ rõ ràng IDs và nguồn.

## 5. Hợp đồng bàn giao NotebookLM không thay đổi

**Mọi lần thực sự yêu cầu NotebookLM review** bắt buộc làm theo Project Source `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md`:

- Cùng câu trả lời gửi **file thật + prompt 3–6 câu**, không gửi prompt trơ hoặc chỉ link GitHub.
- File review tự chứa snapshot, chuyển JSON nếu có sang Markdown; ưu tiên `.md`, không giao `.json`.
- Tên mọi file tạm đều `Temp_...`; 1–2 file thì có từng link tải trực tiếp, ≥3 file thì đóng **`Temp_....zip`** và các file trong ZIP cũng bắt đầu `Temp_`.
- Kiểm tra sự tồn tại của file trước khi cung cấp link. ZIP chỉ dùng vận chuyển, người dùng giải nén và tải từng file lên NotebookLM.
- Review không đồng nghĩa phê duyệt phát hành; Academic PASS và owner UI/release gates độc lập.

## 6. Áp dụng hiện tại và bước kế tiếp

- Pilot Bài 16 R4 Postfix: `ACADEMIC_OVERALL=PASS`, `ACADEMIC_CLEARANCE=YES` theo biên bản NotebookLM được chuyển từ chủ dự án; 5/5 outcomes và 5/5 item PASS.
- Bài Readiness hai câu tiếp tục `TECHNICAL_DEMO_ONLY`/không mastery. Toàn chuyên đề Hàm số lớp 10–12 vẫn `PILOT_PARTIAL_G10`.
- Sau khi owner nghiệm thu **UI golden pilot**, khóa bản golden template (không khóa vĩnh viễn việc cải thiện UX), chọn **cụm bài cùng Chương VI** hoặc cả chương nếu quản lý được đầy đủ outcome/ID; chuẩn bị batch review đầu tiên.
- Không mở rộng clearance của B16 sang Bài 15/17/18 hay cả chương bằng suy diễn. Mỗi bài/item mới cần bằng chứng và verdict theo phạm vi.
