(() => {
  "use strict";

  const TUTOR_POLICY_VERSION = "1.0";
  const CONTEXT_SCHEMA = "roadmap-tutor-context-v1";
  const MAX_REMEDIATION_EVENTS = 5;
  const MAX_OBSERVED_SIGNALS = 5;

  const clampEvidence = (record, skill) => ({
    skill,
    attempted: Number(record?.attempted || 0),
    correct: Number(record?.correct || 0),
    accuracy: record?.attempted ? Number(record.correct || 0) / Number(record.attempted) : null,
    hinted_attempts: Number(record?.hinted_attempts || 0),
    hints_used: Number(record?.hints_used || 0)
  });

  const reviewedPrerequisites = (graph, skill) =>
    (graph?.edges || [])
      .filter((edge) => edge.to === skill && edge.type === "PREREQUISITE" && edge.confidence === "high")
      .map((edge) => edge.from);

  const remediationCandidates = (graph, skill) => {
    const rule = (graph?.remediation_rules || []).find((item) => item?.when?.skill === skill);
    return [...new Set(rule?.recommend || [])];
  };

  const sequenceLinks = (graph, skill) =>
    (graph?.edges || [])
      .filter((edge) => edge.to === skill && edge.type === "SEQUENCE")
      .map((edge) => ({ from: edge.from, causal: false }));

  const buildTutorContext = ({
    projectContextVersion,
    layer = "KNTT-Core",
    gradeOverlay = null,
    skill,
    question = null,
    learnerAnswer = null,
    hintLevel = 0,
    learnerRequest = "",
    stats = { tags: {} },
    graph = null,
    recovery = { events: [] }
  }) => {
    if (!skill) throw new Error("Tutor Context requires a current skill.");

    const prereqs = reviewedPrerequisites(graph, skill);
    const relevantSkills = [...new Set([...prereqs, ...remediationCandidates(graph, skill)])];
    const relevantEvents = (recovery?.events || [])
      .filter((event) => event.source_skill === skill || relevantSkills.includes(event.remediation_skill))
      .slice(-MAX_REMEDIATION_EVENTS);
    const relevantSignals = window.RoadmapLearnerEvidence?.recentSignalsForSkill
      ? window.RoadmapLearnerEvidence.recentSignalsForSkill(stats, skill, MAX_OBSERVED_SIGNALS)
      : (stats?.observed_signals || []).filter((event) => event?.skill === skill).slice(-MAX_OBSERVED_SIGNALS);

    return {
      schema: CONTEXT_SCHEMA,
      context_version: projectContextVersion || "unknown",
      policy_version: TUTOR_POLICY_VERSION,
      current_layer: layer,
      grade_overlay: gradeOverlay,
      current_task: {
        skill,
        question_id: question?.id || null,
        question_text: question?.question || null,
        learner_answer: learnerAnswer,
        hint_level: Number(hintLevel || 0)
      },
      learner_evidence: {
        target: clampEvidence(stats?.tags?.[skill], skill),
        prerequisites: relevantSkills.map((item) => clampEvidence(stats?.tags?.[item], item)),
        observed_signals: relevantSignals,
        remediation_history: relevantEvents
      },
      graph_context: {
        reviewed_prerequisites: prereqs,
        remediation_candidates: remediationCandidates(graph, skill),
        sequence_links: sequenceLinks(graph, skill)
      },
      learner_request: learnerRequest || "",
      privacy: {
        minimized: true,
        excluded: ["full_localStorage", "unrelated_skill_history", "provider_memory"]
      }
    };
  };

  const validateTutorResponse = (response) => {
    const allowedActions = new Set(["HINT", "EXPLAIN", "REMEDIATE", "RETRY", "CONTINUE", "ASK_FOR_WORK"]);
    const allowedConfidence = new Set(["evidenced", "pedagogical_suggestion", "insufficient_evidence"]);
    if (!response || typeof response.message !== "string") throw new Error("Tutor response missing message.");
    if (!allowedActions.has(response.action_type)) throw new Error("Tutor response has invalid action_type.");
    if (!allowedConfidence.has(response.confidence)) throw new Error("Tutor response has invalid confidence.");
    return response;
  };

  const mockAdapter = async ({ context }) => {
    const target = context.learner_evidence.target;
    const weakPrereq = context.learner_evidence.prerequisites
      .filter((item) => item.attempted >= 3 && item.accuracy !== null && item.accuracy < 0.75)
      .sort((a, b) => a.accuracy - b.accuracy)[0];

    if (weakPrereq) {
      return validateTutorResponse({
        message: `Dữ liệu hiện tại gợi ý nên ôn ngắn kỹ năng ${weakPrereq.skill} trước. Bạn vẫn có thể tiếp tục bài hiện tại nếu muốn.`,
        action_type: "REMEDIATE",
        target_skill: weakPrereq.skill,
        confidence: "evidenced",
        evidence_basis: { attempted: weakPrereq.attempted, accuracy: weakPrereq.accuracy }
      });
    }

    const latestSignal = context.learner_evidence.observed_signals?.slice(-1)[0];
    if (latestSignal) {
      return validateTutorResponse({
        message: `${latestSignal.feedback_hint || "Lựa chọn gần đây khớp với một bẫy sai thường gặp."} Đây mới là một tín hiệu quan sát, chưa đủ để kết luận em yếu một kỹ năng nền cụ thể.`,
        action_type: "HINT",
        target_skill: context.current_task.skill,
        confidence: "pedagogical_suggestion",
        evidence_basis: { signal: latestSignal.code, signal_weight: latestSignal.signal_weight || 1 }
      });
    }

    return validateTutorResponse({
      message: "Chưa có đủ bằng chứng để quy lỗi cho một kiến thức nền cụ thể. Hãy thử thêm một bước hoặc dùng một gợi ý nhỏ.",
      action_type: "HINT",
      target_skill: context.current_task.skill,
      confidence: "insufficient_evidence",
      evidence_basis: null
    });
  };

  const adapters = {
    mock: mockAdapter,
    "openai-compatible": async () => { throw new Error("OpenAI-compatible transport is not configured. Runtime credentials are required."); },
    gemini: async () => { throw new Error("Gemini transport is not configured. Runtime credentials are required."); }
  };

  const runTutor = async ({ provider = "mock", context, policy }) => {
    const adapter = adapters[provider];
    if (!adapter) throw new Error(`Unknown tutor provider: ${provider}`);
    return adapter({ context, policy });
  };

  window.RoadmapTutor = Object.freeze({
    buildContext: buildTutorContext,
    run: runTutor,
    validateResponse: validateTutorResponse,
    policyVersion: TUTOR_POLICY_VERSION
  });
})();
