# B06 Pha A — Biên bản tiếp nhận và đối soát nguồn (28/09/2026)

**Packet:** `MATH-SKILL-TAXONOMY-B06-20260928` · **phase:** A (CĐ08, modeling) · **locked main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3` · **scope:** 13 full-text item IDs · **status:** `CONTENT_MATH_REVIEWED_WITH_TAXONOMY_LIMITS`, `PROPOSAL_ONLY`.

## Kiểm kê độc lập với nguồn GitHub

- Báo cáo NotebookLM liệt kê 13/13 IDs một lần, status_counts = 13 PASS, 0 REVISION_REQUIRED, 0 INSUFFICIENT_EVIDENCE, 0 NOT_REVIEWED. Chỉ số trong báo cáo áp dụng cho math/answer, **không** tương đương việc các `lap-phuong-trinh`/`lap-bat-phuong-trinh` tags đã đánh giá đúng năng lực tự lập mô hình.
- Bản ghi source `EQ08MICRO_013–015` có blob SHA `6b226a417d0bb2d6498b74d9206b85c942499a54`; `EQ08V1_107–116` có blob SHA `06ee1a503f03de3495db198594a5d560ec366813`; staging `bd5c742b08f05602a3d1a02e5ead0ad70c00ef0d`. Đề/options/answer/explanation/tags đã đối chiếu với cùng bản nguồn.
- 13/13 câu có đáp án gốc index 0 theo source; điều đó **không** chứng minh lựa chọn đầu luôn được hiển thị trên website vì engine có xáo trộn. Không chỉnh answer index.

## Phân loại bằng chứng sử dụng được

- `EQ08MICRO_013`, `EQ08MICRO_015`: chọn **phương trình đã viết sẵn** ⇒ `equation_model_recognition`; chưa phải `independent_model_construction`. `EQ08MICRO_014`: chọn thành phần biểu thức `x+3` ⇒ `component_expression_recognition`.
- `EQ08V1_107–112`: chọn đáp số số học cuối ⇒ `result_recognition` (có thể yêu cầu suy luận phép tính, nhưng không trực tiếp quan sát việc tự viết phương trình).
- `EQ08V1_113–116`: chọn chặn số nguyên cuối ⇒ `inequality_bound_result_recognition`; không trực tiếp quan sát tự lập BPT và biện luận điều kiện thực tế.
- `EQ08V1_108` và `109` đúng là cùng options `[7,8,6,14]` và đáp án 7, cùng kiểu đơn giản ⇒ clone/repetition. Không coi một cụm bản sao là kỹ năng độc lập.

## Ngoại lệ ở ví dụ micro-test mới của reviewer

- Đề xe tải tải trọng 1200 kg, đã có 450 kg và thêm mỗi bao 50 kg: `450+50n≤1200`, `n_max = 15` đúng.
- Nếu `n` là số bao **có thể** chất thêm, điều kiện tự nhiên là số nguyên không âm (`n = 0, 1, 2, ...`), không nên áp `n∈N*` như một giả thiết mặc định vì xe có thể không chất thêm bao nào. `n∈N*` có thể sử dụng nếu đề ghi rõ có thêm ít nhất 1 bao. Kết luận cực đại 15 không đổi.
- Rubric micro-test cần tách việc chọn biến + đơn vị, thiết lập bất phương trình, chọn giá trị nguyên, và diễn giải tải trọng. Câu nhận diện số tối đa không tự chứng minh các bước này.

## Trạng thái hệ thống

Báo cáo là `PROPOSAL_ONLY`, chưa có mapping engine, không gộp hay ước tính lại counter lịch sử, không cấp Core Readiness. Không sửa source bank/question ID/tag. Pha B chỉ đánh giá 35 CĐ09 IDs trong cùng B06 packet, không lặp Pha A.
