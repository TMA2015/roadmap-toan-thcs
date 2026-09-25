---
id: GEO-CONTENT-XXX-001
status: draft
author_source: ""
topic: "XX-slug-chuyen-de"
layer: KNTT-Core
assessed_skill: ""
supporting_skills: []
curriculum:
  book: KNTT
  grades: []
exam:
  entrance10: none
  specialized: none
content_type: geometry
geometry_role: proof
proof_risk: medium
diagram_role: essential
diagram_spec_path: ""
target_path: ""
---

# Bài hình học

## 0. Source & layer evidence

- Curriculum source:
- Vì sao skill này là Core / Support / Entrance10 / Challenge:
- Existing item/skill có thể tái sử dụng:
- Điểm còn chưa chắc:

> Không nâng một skill thành KNTT Core chỉ vì nó thường gặp trong đề thi hoặc đã có trong Practice Bank.

## 1. Đề bài chuẩn hóa

### Giả thiết

- …

### Dựng thêm (nếu có)

- …

### Yêu cầu / kết luận cần chứng minh

- …

> Hình vẽ không được dùng để bổ sung giả thiết còn thiếu.

## 2. Cấu hình hình học bắt buộc

### Điểm
- A:
- B:
- C:

### Quan hệ đã cho
- thẳng hàng:
- thứ tự / nằm giữa:
- song song:
- vuông góc:
- trung điểm:
- bằng nhau:
- điểm thuộc đường tròn:
- tiếp tuyến:
- giao điểm:
- nội tiếp / đồng quy:

### Quan hệ chỉ được suy ra sau khi chứng minh
- …

> Chỉ quan hệ thuộc **giả thiết/dựng hình** mới được thể hiện như dữ kiện ban đầu. Marker của quan hệ cần chứng minh chỉ được xuất hiện sau bước chứng minh tương ứng hoặc không hiển thị.

## 3. Phân tích trước khi giải

- Assessed skill:
- Supporting skills:
- Kiến thức nền:
- Mục tiêu trung gian:
- Định lý / định nghĩa dự kiến:
- Converse nào có thể cần:
- Điều kiện phải kiểm tra trước khi dùng converse:
- Cách kiểm tra độc lập:

## 4. Proof chain – claim + reason

| Bước | Claim | Reason | Phụ thuộc |
|---|---|---|---|
| P1 | … | Giả thiết / định nghĩa / định lý | — |
| P2 | … | … | P1 |

> Không chấp nhận lý do “theo hình vẽ”, “nhìn hình thấy”, hoặc suy ra quan hệ do hình có vẻ đúng tỉ lệ.

## 5. Lời giải 1 – phương pháp chính

…

## 6. Kiểm tra độc lập

Với bài rủi ro medium/high, chọn ít nhất một; với multi-step proof/circle proof/challenge, ưu tiên **hai kiểm tra độc lập**:

- lời giải thứ hai;
- tọa độ/đại số hóa một cấu hình hợp lệ;
- tính số với cấu hình hợp lệ;
- kiểm tra điều kiện định lý và converse;
- đối chiếu đáp án chính thức nếu có.

Ghi kết quả kiểm tra tại đây.

## 7. Diagram spec

Tạo file JSON theo:

`docs/assets/data/curriculum/geometry-diagram-spec-v1.schema.json`

### Quy tắc
- SVG-first;
- tọa độ từ spec / construction, không đặt bằng mắt;
- alt mô tả cấu hình toán học;
- caption nói rõ “không theo tỉ lệ” nếu hình chỉ có vai trò topology;
- không gắn marker cho một quan hệ chưa được cho/chứng minh;
- tiếp tuyến phải tiếp xúc thật, giao điểm phải giao thật, trung điểm phải là trung điểm thật.

### Semantic QA
- [ ] Mọi điểm nằm đúng đối tượng.
- [ ] Thứ tự điểm đúng.
- [ ] Song song/vuông góc đúng về tọa độ khi spec yêu cầu.
- [ ] Giao điểm thật sự là giao điểm.
- [ ] Tiếp tuyến thật sự tiếp xúc đúng.
- [ ] Các điểm nội tiếp thật sự cùng thuộc một đường tròn.
- [ ] Không vô tình tiết lộ quan hệ cần chứng minh.
- [ ] Nhãn đọc được trên màn hình nhỏ.

## 8. Distractor / misconception QA

- Distractor 1 bắt lỗi:
- Distractor 2 bắt lỗi:
- Distractor 3 bắt lỗi:
- Có phương án nào đúng chỉ vì đọc hình theo tỉ lệ không? **Phải là Không.**
- Có hai phương án tương đương toán học không? **Phải là Không.**

## 9. Lời giải xuất bản

Chỉ điền sau khi Academic QA PASS.
