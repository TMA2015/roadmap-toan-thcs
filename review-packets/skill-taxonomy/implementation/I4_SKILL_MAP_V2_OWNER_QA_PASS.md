# Skill Taxonomy v2 — I4 Skill Map v2 owner preview QA PASS

Date: 2026-10-03

## Result

**OWNER_PREVIEW_QA_PASS**

The owner reviewed the deployed Skill Map v2 internal preview and supplied production screenshots after using the same browser profile that had accumulated the I3G shadow evidence.

Observed preview totals:
- independent units: **42**
- correct independent units: **18**
- seen questions: **51**
- recent events: **51**

Observed filtered state:
- “Chỉ kỹ năng đã có bằng chứng độc lập” enabled;
- **28 / 131** families shown;
- visible KNTT-Core subset: **23 families**.

Representative family cards visibly show:
- family label and ID;
- topic;
- independent-unit count;
- correct/independent count;
- Evidence accuracy;
- recent-event count;
- assisted-event count;
- last evidence date;
- learning and practice links.

The screenshots also confirm that legacy Practice statistics are placed in a separate disclosure:
- **74 legacy tags** in the current browser profile;
- copy explicitly states that `toan-thcs-practice-v1` is not merged with Taxonomy v2 Evidence accuracy.

## Accepted I4 boundaries

The preview remains accepted as:
- read-only;
- owner/internal / opt-in;
- descriptive evidence only;
- no Mastery/Weak labels;
- no Readiness gate or score;
- no history backfill/regrade;
- no merging of legacy Practice percentages with Taxonomy v2 evidence accuracy;
- optional layers remain secondary to Core.

Automated desktop/mobile QA for the release already proved both learner stores remain byte-for-byte unchanged after preview use.

## Closure

I4 is closed PASS.

Next gate: **I5 Evidence Policy Review**. This is an academic/product policy review, not a runtime activation. It must determine how much and what kind of evidence is sufficient before any future “progress / sufficiently evidenced / mastery / readiness” interpretation is considered.
