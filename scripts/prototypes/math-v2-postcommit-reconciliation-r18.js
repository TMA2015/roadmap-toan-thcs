/* Math Phase 4 R18 — read-only post-commit review, QA scopes ONLY.
 * R16 is the sole authority for journaled evidence. R18 must NEVER replay a
 * stored v2 event into legacy v1/localStorage: separate stores cannot provide
 * exactly-once dual-write semantics after interruption.
 *
 * This module is injected by disposable QA only, never registered in MkDocs.
 */
(() => {
  "use strict";
  const PREFIX = "QA_R16_R17_R18_";
  const validScope = s => typeof s === "string" &&
    s.startsWith(PREFIX) && /^[A-Za-z0-9_-]{20,128}$/.test(s);
  const validKey = s => typeof s === "string" &&
    /^[A-Za-z0-9_-]{6,128}$/.test(s);
  const validId = s => typeof s === "string" &&
    /^R16_[a-f0-9]{32}$/.test(s);
  const frozen = value => Object.freeze(value);

  async function create({enabled = false, learner_scope} = {}) {
    if (!enabled) return frozen({enabled:false});
    if (!validScope(learner_scope)) throw Error("R18_QA_SCOPE_ONLY");
    if (typeof window.MathV2UnifiedLedgerR16?.create !== "function")
      throw Error("R18_R16_REQUIRED");
    const ledger = await window.MathV2UnifiedLedgerR16.create({
      enabled:true, learner_scope
    });

    const inspect = async submission_key => {
      if (!validKey(submission_key)) throw Error("R18_BAD_SUBMISSION_KEY");
      // R16 read() snapshots intent/event/outbox in ONE readonly transaction.
      const rows = await ledger.read();
      const i = rows.intents.find(x => x.submission_key === submission_key);
      if (!i) return frozen({
        status:"NOT_FOUND", legacy_replay_allowed:false,
        automatic_v1_credit_allowed:false
      });
      const e = rows.events.filter(x => x.event_id === i.event_id);
      const o = rows.outbox.filter(x => x.event_id === i.event_id);
      const common = {
        submission_key:i.submission_key, event_id:i.event_id,
        item_id:i.item_id, legacy_replay_allowed:false,
        automatic_v1_credit_allowed:false
      };
      const fail = reason => frozen({
        ...common, status:"INCONSISTENT_FAIL_CLOSED", reason
      });
      if (i.learner_scope !== learner_scope || !validId(i.event_id))
        return fail("INTENT_ID_OR_SCOPE");
      if (i.kind !== "answer_attempt")
        return frozen({...common, status:"NOT_PRACTICE_EVIDENCE"});
      if (i.state === "STAGED") {
        if (e.length || o.length) return fail("STAGED_HAS_COMMIT_RECORD");
        return frozen({
          ...common, status:"UNCOMMITTED_RETRY_SAME_TOKEN",
          v2_formative_credit:0, correct:i.correct
        });
      }
      if (i.state !== "SAVED") return fail("UNKNOWN_INTENT_STATE");
      if (e.length !== 1 || o.length !== 1)
        return fail("MISSING_OR_DUPLICATE_COMMIT_RECEIPT");
      const ev=e[0], receipt=o[0];
      if (ev.event_id !== i.event_id ||
          ev.learner_scope !== learner_scope ||
          ev.item_id !== i.item_id ||
          ev.kind !== "answer_attempt" ||
          ev.evidence_class !== "FORMATIVE" ||
          ev.correct !== i.correct ||
          ev.occurred_at !== i.occurred_at ||
          receipt.learner_scope !== learner_scope ||
          receipt.event_id !== i.event_id ||
          receipt.state !== "PENDING")
        return fail("COMMIT_CONTENT_MISMATCH");
      return frozen({
        ...common, status:"COMMITTED_UI_UNCERTAIN",
        v2_formative_credit:1, correct:i.correct,
        safe_next_step:"SHOW_JOURNAL_EVIDENCE_WITHOUT_V1_REPLAY"
      });
    };

    const project = async () => {
      const rows = await ledger.read();
      const seen = new Set();
      const totals = {
        evidence_source:"R16_COMMITTED_EVENT_JOURNAL",
        formative_attempts:0, formative_correct:0,
        readiness_submissions:0, written_self_checks:0,
        automatic_written_readiness_credit:0,
        legacy_writes:0, duplicate_event_ids:0
      };
      for (const e of rows.events) {
        if (e.learner_scope !== learner_scope || !validId(e.event_id))
          throw Error("R18_INVALID_EVENT_SCOPE_OR_ID");
        if (seen.has(e.event_id)) {
          totals.duplicate_event_ids += 1;
          continue;
        }
        seen.add(e.event_id);
        if (e.kind === "answer_attempt") {
          if (typeof e.correct !== "boolean" ||
              e.evidence_class !== "FORMATIVE")
            throw Error("R18_INVALID_FORMATIVE_EVENT");
          totals.formative_attempts += 1;
          if (e.correct) totals.formative_correct += 1;
        } else if (e.kind === "readiness_submission") {
          if (e.evidence_class !== "INDEPENDENT_ASSESSMENT")
            throw Error("R18_INVALID_ASSESSMENT_EVENT");
          totals.readiness_submissions += 1;
        } else if (e.kind === "written_self_check") {
          if (e.evidence_class !== "SELF_REPORTED")
            throw Error("R18_INVALID_WRITTEN_EVENT");
          totals.written_self_checks += 1;
        } else throw Error("R18_UNKNOWN_EVIDENCE_KIND");
      }
      // Not even a signed/hashed backup proves the old v1 UI was shown.
      return frozen(totals);
    };

    return frozen({enabled:true, inspect, project});
  }

  window.MathV2PostcommitReviewR18 = frozen({create});
})();
