# NOTEBOOKLM REVIEW WORKFLOW — DURABLE OPERATING RULES

**Project:** Self-Learning Math  
**Version:** 1.0  
**Date:** 2026-10-10  
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

## 4. ZIP rule

When a review requires more than one **new batch source**, create **one ZIP** containing all new batch-source files needed for that review.

The ZIP must:
- contain only files the owner actually needs to add/replace for that review;
- not duplicate unchanged permanent sources;
- not duplicate SGK/PDF sources already present in NotebookLM;
- avoid unrelated helper files that could be mistaken for review Sources.

If there is only one new batch source, a direct file link is acceptable.

## 5. Prompt rule

The NotebookLM prompt must always be sent **directly in the ChatGPT message**, not only stored in a file.

Prompts must be concise.

Default target:
- roughly 5–10 short lines;
- normally no more than about 1,200 characters;
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
- filenames in the prompt/packet match the delivered filenames.

## 9. Durable default

These rules are the default for all future Self-Learning Math NotebookLM reviews until the owner explicitly changes them.
