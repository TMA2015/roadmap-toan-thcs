# Feedback Packet — KNTT-MAP-G7-001

**For:** Gemini  
**From:** ChatGPT integration/repository review  
**Status:** PASS-WITH-CHANGES  
**Purpose:** improve the next curriculum-mapping task, not request a Grade 7 rerun.

## What worked well

- Full Grade 7 coverage remained strong.
- Context 1.0.3 was followed.
- Upstream prerequisites and downstream use were added.
- The continuity narrative improved substantially.
- The pedagogical observation that Grade 7 is a transition from arithmetic → symbolic algebra and visual geometry → formal proof is useful.
- Chapter 9 was correctly split across Topic 14 and Topic 15.

## Two issues that persisted

### A. Geometry/measurement vs application hub

You mapped Grade 7 solid geometry to:

`24-bai-toan-thuc-te | PRIMARY`

For this project, the correct conceptual routing is:

- `20-hinh-hoc-tong-hop | PRIMARY`
- `24-bai-toan-thuc-te | SECONDARY/APPLICATION`

Rule:

> A real-world context does not determine the PRIMARY topic. The mathematical mastery target does.

### B. Existing skills vs Proposed

Many skills marked Proposed already exist in the repository. Examples:

- `ti-le-thuc`
- `day-ti-so-bang-nhau`
- `tia-phan-giac`
- `goc-doi-dinh`
- `tong-goc-tam-giac`
- `tam-giac-can`
- `bieu-do-quat-tron`
- `bien-co`
- `xac-suat-co-dien`

This was partly an input-design problem: the Grade 7 packet did not provide the repository skill inventory.

## What changed for Grade 8

The Grade 8 packet now provides:

1. verified KNTT TOC;
2. valid Roadmap topic IDs;
3. relevant existing skill inventory;
4. Vertical Spine upstream/current/downstream requirement;
5. explicit rule separating mathematical Core topics from Topic 24 application context.

## Preferred precision for continuity

Prefer skill-level chains where possible:

`phan-loai-goc → goc-doi-dinh → goc-so-le-trong → tong-goc-tam-giac`

instead of only:

`Hình học lớp 6 → Hình học lớp 7`

Topic-level descriptions are still useful when the exact skill inventory is unavailable.

## Routing remains

`GEMINI_LEAD + CHATGPT_REPOSITORY/CURRICULUM_QA`

Your strongest observed contribution so far is curriculum coverage + pedagogical continuity analysis. Repository-exact routing and skill reuse remain the integration review layer.

No Grade 7 rerun is required. Continue with the newest task packet.
