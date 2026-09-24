# Handoff Protocol – Gemini ↔ ChatGPT

## 1. Mục tiêu

Giảm thất thoát thông tin khi nội dung được chuyển qua iPad giữa Gemini và ChatGPT, đồng thời giúp mọi output có thể đưa thẳng vào Content Staging.

## 2. ID nhiệm vụ

Dùng dạng:

`<MẠCH>-<CHUYÊNĐỀ>-<LOẠI>-<SỐ>`

Ví dụ:

- `ALG04-LESSON-001`
- `GEO17-PROOF-003`
- `EXAM10-ALG-012`
- `SPEC-GEO-005`

ID không cần hoàn hảo; quan trọng là một task giữ cùng ID qua các vòng phản hồi.

## 3. Ba chế độ cộng tác

### AUTHOR

Gemini hoặc ChatGPT tạo draft mới.

### REVIEWER

AI đọc draft đã có và chỉ ra:
- lỗi;
- phần thiếu;
- điểm chưa chắc;
- đề nghị sửa.

Reviewer không nên viết lại toàn bộ nếu chỉ cần sửa vài điểm, vì sẽ khó theo dõi thay đổi.

### INDEPENDENT-SOLVER

Dùng cho bài khó.

AI nhận **đề bài**, nhưng không nhận lời giải của AI còn lại trước khi hoàn thành lời giải riêng.

## 4. Phản hồi chuẩn

```text
TASK_ID:
CONTEXT_VERSION:
ROLE:
LAYER:
TOPIC:
SKILLS:
REQUEST_TYPE:

VERDICT:
PASS / PASS-WITH-CHANGES / BLOCKED

ISSUES:
1. ...
2. ...

PROPOSED_CHANGES:
1. ...
2. ...

RESULT:
...

INDEPENDENT_CHECK:
...

UNCERTAINTIES:
- NONE
```

## 5. Khi Gemini gửi một batch lớn

Không cần copy phần trò chuyện giải thích dài.

Ưu tiên output theo từng ITEM với:
- ID;
- layer;
- topic/skill;
- question/content;
- answer/solution;
- hints;
- common mistakes;
- independent check;
- uncertainty.

ChatGPT sẽ chuyển batch đạt chuẩn sang schema repository.

## 6. Khi ChatGPT cần Gemini phản biện

ChatGPT sẽ tạo một **Review Packet** ngắn gồm:
- mục tiêu;
- draft cần review;
- các điểm đang nghi ngờ;
- những gì không cần Gemini kiểm tra;
- format phản hồi mong muốn.

Nhờ vậy Gemini tập trung vào học thuật/sư phạm thay vì phải đọc toàn bộ repository.

## 7. Xử lý bất đồng

Nếu hai AI khác đáp án:

- không hợp nhất hai lời giải;
- không chọn câu trả lời viết đẹp hơn;
- tạo `DISAGREEMENT` trong task;
- kiểm tra bằng phương pháp thứ ba;
- chỉ publish sau khi resolve.

Nếu chưa resolve được: `BLOCKED-ACADEMIC`.
