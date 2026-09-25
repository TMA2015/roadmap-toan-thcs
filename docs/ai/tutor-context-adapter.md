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

## Firebase Gemini transport — staged production rollout

A separate `firebase-gemini-v1.js` adapter lazily loads **Firebase JS SDK 12.19.0** from Google's pinned CDN only after an explicit user request. It initializes App Check with a reCAPTCHA Enterprise provider **before** creating the Gemini Developer API model. The Gemini Developer API key is held by Firebase's proxy, never embedded in the web site.

The public `firebase-gemini-config.js` includes the standard non-secret Firebase Web App config. The **exact** reCAPTCHA Enterprise site key must match the registered Firebase Web app; this is a public site identifier, not a private Gemini API key. The site key was copied exactly and a learner-triggered App Check + Gemini 3.5 Flash-Lite inference was verified on the production origin (2+3=5). The integration is now enabled for normal practice. Inference remains opt-in per button click. No provider fallback silently represents mock output as Gemini output.

The transport sends the current question, skill, grade/layer and (ONLY for explicit FULL_SOLUTION) an authored reference answer. It does **not** transmit the complete learner evidence store. Any pre-answer Gemini request marks an attempt as assisted; full-solution generation marks full-solution reveal before the request. The self-check and timed-assessment protections are still checked at both the context-builder and provider boundary. This is a client-side practice aid, not a server-side examination security system.

Operational checklist before enabling:
1. Confirm project `roadmap-toan-ai` is on intended pricing tier and the Gemini Developer API (not Agent Platform) is selected.
2. Confirm Firebase App Check shows **Registered (enforced)** for the Web app.
3. Copy the reCAPTCHA Enterprise **site key exactly** from Google Cloud; never commit service-account files, Gemini API secrets or debug tokens.
4. Enable config on a private test/preview deployment under the allowed domain and perform one human-triggered live App Check + Gemini inference; QA mocks cannot prove this works.
5. Check usage/quota and that local `localhost` is not given production App Check privileges. Use a separately registered debug token only for local tests and keep it private.
6. Only then enable the button on the public site; retain the offline authored answer on network/quota errors.

Current stage: App Check registered/enforced and real one-request Flash-Lite verification succeeded; the normal practice adapter is enabled. More difficult mathematics must still be compared with authored solutions.
