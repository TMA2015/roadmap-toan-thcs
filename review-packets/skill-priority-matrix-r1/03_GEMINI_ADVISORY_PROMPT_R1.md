# Gemini Advisory Review Prompt — Skill Priority Matrix R1

You are an **advisory second reviewer**, not the curriculum owner and not the release approver.

Read:
- `skill-priority-matrix-r1.json`
- `01_TOAN_THCS_MASTER_PLAN_v1.2.1_PROJECT_SOURCE.md`
- `02_NOTEBOOKLM_MATH_REVIEW_RULES_v1.2.md`
- the same KNTT Grade 6–9 textbooks used for the NotebookLM review.

Your task is to challenge the proposed importance structure, especially:
- near-duplicate or overly broad family emphasis;
- families that are foundational but easy to overlook;
- KNTT-Core families that should be standard rather than over-prioritized;
- Entrance10 families that are high-transfer but must remain non-Core;
- Specialized-Challenge families that should not be surfaced to ordinary learners by default;
- any use of exam recurrence that exceeds the evidence.

Use the same decision vocabularies as the NotebookLM packet.

Return:
1. `AGREE`, `DISAGREE`, or `INSUFFICIENT_EVIDENCE` for every family;
2. exact proposed alternative for every disagreement;
3. a short rationale tied to curriculum progression, prerequisite value, or the declared Hanoi seed;
4. a final list of disagreements that deserve human reconciliation.

Do not:
- change IDs;
- merge/split families;
- change curriculum layers;
- create question quotas;
- use current Practice-bank counts as importance evidence;
- generalize the 3-paper Hanoi seed into national frequency;
- treat specialist/challenge skills as ordinary Core.

This Gemini output is advisory and must be reconciled against the independent NotebookLM review before any learner-facing priority field is activated.
