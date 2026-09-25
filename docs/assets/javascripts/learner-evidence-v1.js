(() => {
  "use strict";

  const STORAGE_KEY = "toan-thcs-practice-v1";
  const MAX_SIGNAL_EVENTS = 100;
  const MAX_SIGNAL_WEIGHT = 2;

  const normalize = (data) => ({
    questions: data?.questions && typeof data.questions === "object" ? data.questions : {},
    tags: data?.tags && typeof data.tags === "object" ? data.tags : {},
    observed_signals: Array.isArray(data?.observed_signals) ? data.observed_signals.slice(-MAX_SIGNAL_EVENTS) : []
  });

  const load = () => {
    try { return normalize(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}); }
    catch (_) { return normalize({}); }
  };

  const save = (stats) => localStorage.setItem(STORAGE_KEY, JSON.stringify(normalize(stats)));

  const questionSkills = (question) => {
    const value = question?.tags?.skill;
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  };

  const recordCounters = (record, correct, hintsUsed) => {
    record.attempted = Number(record.attempted || 0) + 1;
    if (correct) record.correct = Number(record.correct || 0) + 1;
    if (hintsUsed > 0) {
      record.hinted_attempts = Number(record.hinted_attempts || 0) + 1;
      record.hints_used = Number(record.hints_used || 0) + hintsUsed;
    }
    if (correct) {
      if (hintsUsed > 0) record.correct_with_hint = Number(record.correct_with_hint || 0) + 1;
      else record.correct_without_hint = Number(record.correct_without_hint || 0) + 1;
    }
  };

  const extractSignal = (question, selectedIndex) => {
    if (!Number.isInteger(selectedIndex)) return null;
    const raw = question?.option_evidence?.[String(selectedIndex)];
    if (!raw?.signal) return null;
    return {
      code: String(raw.signal),
      weight: Math.max(1, Math.min(MAX_SIGNAL_WEIGHT, Number(raw.signal_weight || 1))),
      feedback_hint: String(raw.feedback_hint || "").trim() || null
    };
  };

  const recordAnswer = ({ question, correct, hintsUsed = 0, selectedIndex = null, stats = null }) => {
    const data = stats ? normalize(stats) : load();
    const qRecord = data.questions[question.id] || { attempted: 0, correct: 0 };
    recordCounters(qRecord, correct, hintsUsed);
    data.questions[question.id] = qRecord;

    const skills = questionSkills(question);
    skills.forEach((skill) => {
      const skillRecord = data.tags[skill] || { attempted: 0, correct: 0 };
      recordCounters(skillRecord, correct, hintsUsed);
      data.tags[skill] = skillRecord;
    });

    const signal = correct ? null : extractSignal(question, selectedIndex);
    if (signal) {
      data.observed_signals.push({
        code: signal.code,
        signal_weight: signal.weight,
        feedback_hint: signal.feedback_hint,
        question_id: question.id,
        skill: skills[0] || null,
        observed_at: new Date().toISOString()
      });
      data.observed_signals = data.observed_signals.slice(-MAX_SIGNAL_EVENTS);
    }

    save(data);
    return { stats: data, signal };
  };

  const recentSignalsForSkill = (stats, skill, limit = 5) =>
    normalize(stats).observed_signals
      .filter((event) => event?.skill === skill)
      .slice(-Math.max(1, Number(limit || 5)));

  window.RoadmapLearnerEvidence = Object.freeze({
    storageKey: STORAGE_KEY,
    load,
    save,
    recordAnswer,
    recentSignalsForSkill
  });
})();