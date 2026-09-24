# Review Packet Template

Dùng khi ChatGPT muốn Gemini tập trung phản biện một phần cụ thể thay vì đọc cả repository.

```text
TASK_ID:
CONTEXT_VERSION:
TARGET_LAYER:
TOPIC/SKILLS:

REVIEW_GOAL:
- Bạn cần kiểm tra điều gì?

DO_NOT_SPEND_TIME_ON:
- Những phần kỹ thuật/GitHub không cần review.

DRAFT:
<<<
[dán nội dung]
>>>

QUESTIONS_FOR_REVIEWER:
1. ...
2. ...

EXPECTED_RESPONSE:
VERDICT: PASS / PASS-WITH-CHANGES / BLOCKED
MAJOR_ISSUES:
MINOR_ISSUES:
PROPOSED_FIXES:
INDEPENDENT_CHECK:
UNCERTAINTIES:
```

## Nguyên tắc

Review Packet nên **ngắn hơn context toàn dự án**.

Gemini đọc Collaboration Hub + Project Context để hiểu nền chung; packet chỉ chứa phần thay đổi hoặc nội dung cần phản biện.
