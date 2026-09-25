# Tutor Context Builder & Provider Adapter v1

AI Tutor được chia thành bốn lớp độc lập:

```text
Curriculum + Knowledge Graph + Learner Evidence
                    ↓
             Context Builder
                    ↓
            AI Tutor Contract
                    ↓
             Provider Adapter
          ↙          ↓          ↘
       Mock      Gemini       GPT/compatible
```

## Quyền hạn

**Context Builder** chọn dữ liệu tối thiểu cần cho lượt hội thoại hiện tại. Nó chỉ đưa vào prerequisite đã review confidence cao, remediation candidate liên quan, evidence của các skill liên quan và tối đa 5 recovery events.

**Tutor Contract** quyết định nguyên tắc sư phạm. Provider không được thay đổi Soft Mastery, Core/Challenge boundary hay tự tạo learner evidence.

**Provider Adapter** chỉ chuyển context/policy sang API tương ứng và chuẩn hóa output. Đổi provider không làm thay đổi curriculum hoặc learner state.

## Secrets

API key không được commit vào GitHub, JSON curriculum, local learner evidence hoặc prompt. Adapter thật chỉ được bật khi runtime có credential phù hợp.

## Mock adapter

`mock` là provider mặc định để QA không tốn phí và không cần Internet/API. Nó không phải AI; nó dùng deterministic evidence rules để kiểm tra toàn bộ đường ống.

## Output chuẩn

Mọi provider phải trả về:
- `message`
- `action_type`: HINT / EXPLAIN / REMEDIATE / RETRY / CONTINUE / ASK_FOR_WORK
- `target_skill`
- `confidence`: evidenced / pedagogical_suggestion / insufficient_evidence
- `evidence_basis`

Output sai schema phải bị adapter từ chối thay vì đưa thẳng cho học sinh.

## Tutoring depth and provider boundaries (v1.1)

`help_mode` is one of `HINT`, `STEP_BY_STEP`, `FULL_SOLUTION`, `TEACH_FROM_START`; `activity` is `learning`, `practice`, `self_check`, or `timed_assessment`. `submitted` is the submission state of an assessment, not a normal practice answer. The context builder includes the correct answer / authored reference explanation only when FULL_SOLUTION is explicitly requested in a permitted activity. The runtime independently refuses a pre-submission assessment solution.

`mock` is not Gemini and must not invent a worked solution. On the static site, show only the authored bank explanation or teaching card and label a short explanation honestly. Gemini and GPT transports are not yet configured. Never embed a private provider API key in a GitHub Pages JavaScript bundle; a real live adapter needs an appropriate secure credential path.

Use the existing `toan-thcs-practice-v1` learner evidence store, not a duplicate stats store. Record `full_solution_views` on attempts after a full solution was disclosed; any such correct attempt is assisted (`correct_with_hint` and `correct_after_full_solution`), never `correct_without_hint`. Reading the explanation **after** submission does not change that attempt's counters.
