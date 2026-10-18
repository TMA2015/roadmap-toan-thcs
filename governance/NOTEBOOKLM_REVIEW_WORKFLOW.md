# NOTEBOOKLM REVIEW WORKFLOW — DURABLE OPERATING RULES

**Project:** Self-Learning Math  
**Version:** 1.1  
**Date:** 2026-10-18  
**Status:** Owner-approved durable workflow

## 1. Reviewer policy

For the Math project, **NotebookLM is the independent academic reviewer**.

Do not use Gemini or another model as a second academic reviewer unless the owner explicitly changes this policy in a later decision.

ChatGPT may:
- prepare review packets;
- convert repository data into NotebookLM-compatible sources;
- reconcile NotebookLM results;
- implement approved corrections;
- run repository QA.

ChatGPT must not fabricate an independent-review PASS.

## 2. Permanent NotebookLM sources

The following are permanent NotebookLM sources and normally remain selected across review rounds:

1. `01_TOAN_THCS_MASTER_PLAN_v1.2.1_PROJECT_SOURCE.md`
2. `02_NOTEBOOKLM_MATH_REVIEW_RULES_v1.2.md`

Do **not** resend, repackage, or ask the owner to upload these files again when their versions are unchanged.

If one of these permanent sources changes:
- send only the changed permanent source;
- explicitly say which old version must be replaced;
- do not include unchanged permanent sources merely for convenience.

## 3. Batch-source delivery

NotebookLM batch sources must be in NotebookLM-friendly human-readable formats.

Preferred:
- Markdown (`.md`)
- TXT
- PDF when the source is naturally a PDF
- CSV only when a table genuinely benefits from CSV

**Never ask the owner to upload project JSON directly into NotebookLM.**

When the repository source is JSON:
- keep JSON as the machine/repository source of truth;
- generate a source-locked Markdown/TXT review snapshot containing only the fields needed for the audit;
- preserve IDs, counts, provenance, boundaries, and other review-critical information;
- do not silently change the meaning during conversion.

### Mandatory TEMP_ naming for batch files (Owner confirmation, 2026-10-18)

**Every temporary source prepared for NotebookLM must have a filename starting with `TEMP_` (uppercase, at the beginning of the basename).** Example: `TEMP_NOTEBOOKLM_R38_SOURCE_A_REGISTRY_131_FAMILIES_20261018.md`.

Permanent project sources (Master Plan, Review Rules, approved source frameworks) **must not** be renamed with `TEMP_`. This visible naming boundary prevents confusion between permanent and disposable batch sources. Any batch artifact created under an older filename must be renamed before delivery. For multiple sources, name the handoff ZIP `TEMP_<PACKET_ID>_NOTEBOOKLM_SOURCES.zip` and keep each member filename beginning with `TEMP_`.

## 4. ZIP rule

When a review requires more than one **new batch source**, create **one ZIP** containing all new batch-source files needed for that review.

The ZIP must:
- contain only files the owner actually needs to add/replace for that review;
- not duplicate unchanged permanent sources;
- not duplicate SGK/PDF sources already present in NotebookLM;
- avoid unrelated helper files that could be mistaken for review Sources.

**Delivery is mandatory and depends on the number of new batch sources:**

- **Exactly one new source:** send the owner **one direct download link** to the `TEMP_*.md` file, plus the brief NotebookLM prompt. **No ZIP needed**.
- **Two or more new sources:** create **one downloadable ZIP**, and send its single download link plus the brief NotebookLM prompt. **Do not send the owner a set of separate source-file links as a substitute for the ZIP**.
- The ZIP contains only the required `TEMP_*.md` (or another genuinely appropriate NotebookLM-friendly non-JSON source format), without unrelated JSON/JS, fixed sources, old packets, or extra metadata.
- If a ZIP cannot be created or its contents verified, say so plainly; do not present a list of links as though the requested ZIP were supplied.

In either case, provide the actual ready-to-download artifact; a prompt alone is **not** an acceptable handoff.

## 5. Prompt rule

The NotebookLM prompt must always be sent **directly in the ChatGPT message**, not only stored in a file.

Prompts must be concise.

Default target:
- **3–5 short lines**, usually **300–600 characters** in Vietnamese;
- avoid long prompts that NotebookLM's chat input may reject; put full rubric in the `TEMP_*.md` packet, not in the prompt;
- reference the packet for detailed rules instead of repeating the packet.

A prompt should normally contain only:
- packet ID;
- exact task;
- exact selected-source count when useful;
- 2–4 critical boundaries;
- required output instruction / clearance.

Do not paste the full rubric, full source list, or long governance text into the chat prompt when those details already exist in the packet.

## 6. Source-selection communication

For every NotebookLM round, tell the owner separately:
- which permanent sources stay selected;
- which existing SGK/reference sources stay selected;
- which **new files** must be added from the current ZIP;
- which obsolete batch sources must be deselected.

Do not make the owner re-upload unchanged permanent sources or unchanged SGK files.

## 7. Review packet principle

Long instructions belong in the review packet, not in the NotebookLM chat prompt.

The packet should contain:
- scope;
- expected IDs/counts;
- decision vocabulary;
- protected boundaries;
- machine-readable output contract;
- clearance rule.

The chat prompt should point NotebookLM to that packet and request execution.

## 8. No source-format mismatch

Before handing files to the owner, verify:
- no JSON is being requested as a NotebookLM Source;
- source files are readable in NotebookLM-compatible formats;
- the ZIP contains the exact new files required;
- **each temporary source basename begins with `TEMP_`**; unchanged permanent sources do not;
- **one new source means a direct file download link; two or more means one verified ZIP**;
- the prompt is brief and is included in the same ChatGPT response as the actual download;
- filenames in the prompt/packet match the delivered filenames.

## 9. Durable default

These rules are the default for all future Self-Learning Math NotebookLM reviews until the owner explicitly changes them.
