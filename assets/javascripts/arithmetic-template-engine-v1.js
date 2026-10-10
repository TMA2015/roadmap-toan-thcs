/* Deterministic authored math templates: NO AI, NO remote calls, NO learner storage. */
(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SelfLearningArithmeticTemplates = api;
})(typeof window === "undefined" ? null : window, () => {
  "use strict";
  const BUILD = "arithmetic-template-engine-v1-20260927";
  const SCHEMA = "arithmetic-template-catalog-v1";
  const TEMPLATE_IDS = Object.freeze(["INT_MIXED_ADD", "FRACTION_UNLIKE_ADD", "NUMERIC_DIFFERENCE_SQUARES"]);
  const math = expression => "\\(" + expression + "\\)";
  const int = value => {
    if (!Number.isSafeInteger(value)) throw new Error("Value must be a safe integer.");
    return value;
  };
  const gcd = (a, b) => {
    a = Math.abs(int(a)); b = Math.abs(int(b));
    while (b !== 0) { const old = b; b = a % b; a = old; }
    return a;
  };
  const rational = (numerator, denominator = 1) => {
    int(numerator); int(denominator);
    if (denominator === 0) throw new Error("Zero denominator.");
    if (numerator === 0) return { n: 0, d: 1 };
    if (denominator < 0) { numerator = -numerator; denominator = -denominator; }
    const div = gcd(numerator, denominator);
    return { n: numerator / div, d: denominator / div };
  };
  const valueKey = value => rational(value.n, value.d).n + "/" + rational(value.n, value.d).d;
  const renderValue = value => {
    const normalized = rational(value.n, value.d);
    return math(normalized.d === 1 ? String(normalized.n) :
      "\\frac{" + normalized.n + "}{" + normalized.d + "}");
  };
  // Stable, reproducible pseudo-random parameters. Randomness is not a security property here.
  const seedValue = seed => {
    if (!Number.isSafeInteger(seed) || seed < 1 || seed > 4294967295) throw new Error("Seed out of bounds.");
    return seed >>> 0;
  };
  const prng = seed => {
    let state = seedValue(seed);
    return () => {
      state = (state + 0x6D2B79F5) >>> 0;
      let z = state;
      z = Math.imul(z ^ (z >>> 15), z | 1);
      z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
      return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
    };
  };
  const draw = (rand, min, max) => {
    int(min); int(max);
    if (min > max || max - min > 1000) throw new Error("Unsafe parameter range.");
    return min + Math.floor(rand() * (max - min + 1));
  };
  const catalogValid = catalog => {
    if (!catalog || catalog.schema !== SCHEMA || catalog.version !== 1 ||
        catalog.status !== "opt_in_formative_unscored" ||
        !catalog.policy || catalog.policy.independent_credit !== false ||
        catalog.policy.write_to_learner_storage !== false ||
        !Array.isArray(catalog.templates) || catalog.templates.length !== 3 ||
        catalog.templates.map(t => t.id).join("|") !== TEMPLATE_IDS.join("|")) return false;
    const generators = ["signed_integer_addition", "fraction_addition", "integer_difference_of_squares"];
    return catalog.templates.every((t, i) => t.version === 1 &&
      t.generator === generators[i] && typeof t.display_name === "string" &&
      t.display_name.length > 0 && typeof t.topic === "string" &&
      typeof t.assessed_skill_candidate === "string" && !!t.params);
  };
  const choicesFor = (correct, wrongs) => {
    const right = rational(correct.n, correct.d);
    const seen = new Set([valueKey(right)]);
    const options = [{
      text: renderValue(right), value: right, error_code: null,
      reason: "Đúng kết quả theo các bước giải.", correct: true
    }];
    for (const candidate of wrongs) {
      const value = rational(candidate.value.n, candidate.value.d);
      const key = valueKey(value);
      if (seen.has(key)) continue;
      seen.add(key);
      options.push({
        text: renderValue(value), value, error_code: candidate.code,
        reason: candidate.reason, correct: false
      });
      if (options.length === 4) break;
    }
    // Safe, visibly arithmetic fallbacks if two misconceptions happen to coincide.
    for (let offset = 1; options.length < 4 && offset <= 20; offset++) {
      for (const delta of [offset, -offset]) {
        const value = rational(right.n + delta, right.d);
        const key = valueKey(value);
        if (!seen.has(key)) {
          seen.add(key);
          options.push({
            text: renderValue(value), value, error_code: "arithmetic_slip",
            reason: "Kết quả lệch khi thực hiện phép tính; hãy kiểm tra lại từng bước.", correct: false
          });
          if (options.length === 4) break;
        }
      }
    }
    if (options.length !== 4 || new Set(options.map(x => valueKey(x.value))).size !== 4)
      throw new Error("Failed to create four distinct mathematical choices.");
    return options;
  };
  const generatedId = (template, seed, params) =>
    "GEN_" + template.id + "_V" + template.version + "_S" + seed + "_" +
    Object.values(params).join("_");
  const build = (template, seed) => {
    const mixedSeed = (seedValue(seed) ^ (template.id.length * 9973)) >>> 0;
    const rand = prng(mixedSeed || 1);
    let params, question, correct, wrongs, explanation;
    if (template.id === "INT_MIXED_ADD") {
      const { a_min, a_max, b_min, b_max } = template.params;
      if (a_min < -30 || a_max > -1 || a_min > a_max || b_min < 1 || b_max > 30 || b_min > b_max)
        throw new Error("Unsafe signed-integer template parameters.");
      const a = draw(rand, a_min, a_max), b = draw(rand, b_min, b_max);
      params = { a, b };
      const sum = a + b, absA = Math.abs(a);
      correct = rational(sum);
      question = "Tính " + math(a + "+(+" + b + ")") + ".";
      const comparison = absA === b ? "Hai giá trị tuyệt đối bằng nhau, nên tổng bằng 0." :
        absA > b ? "Vì " + absA + " > " + b + ", kết quả mang dấu âm." :
          "Vì " + b + " > " + absA + ", kết quả mang dấu dương.";
      explanation = "Hai số trái dấu: so sánh giá trị tuyệt đối " + math("|" + a + "|=" + absA) +
        " và " + math("|" + b + "|=" + b) + ". " + comparison + " Lấy hiệu hai giá trị tuyệt đối: " +
        math(a + "+(+" + b + ")=" + sum) + ".";
      wrongs = [
        { value: rational(a - b), code: "subtract_instead_of_add",
          reason: "Em đã chuyển phép cộng thành trừ: " + math(a + "-" + b + "=" + (a-b)) + "." },
        { value: rational(absA + b), code: "added_absolute_values",
          reason: "Em đã cộng hai giá trị tuyệt đối. Hai số trái dấu cần lấy hiệu hai giá trị tuyệt đối." },
        { value: rational(-sum), code: "reversed_sum_sign",
          reason: "Em đã đảo dấu kết quả. Hãy so sánh " + absA + " và " + b + " trước khi chọn dấu." }
      ];
    } else if (template.id === "FRACTION_UNLIKE_ADD") {
      const pset = template.params;
      if (pset.numerator_min < 1 || pset.numerator_max > 8 || pset.denominator_min < 2 ||
          pset.denominator_max > 12 || pset.denominator_max <= pset.denominator_min ||
          !pset.proper || !pset.distinct_denominators) throw new Error("Unsafe fraction template parameters.");
      const q = draw(rand, pset.denominator_min, pset.denominator_max);
      let s = draw(rand, pset.denominator_min, pset.denominator_max - 1);
      if (s >= q) s++;
      const p = draw(rand, pset.numerator_min, Math.min(pset.numerator_max, q - 1));
      const r = draw(rand, pset.numerator_min, Math.min(pset.numerator_max, s - 1));
      params = { p, q, r, s };
      const n = p * s + r * q, d = q * s, g = gcd(n, d);
      correct = rational(n, d);
      question = "Tính và rút gọn " + math("\\frac{" + p + "}{" + q + "}+\\frac{" + r + "}{" + s + "}") + ".";
      const first = "\\frac{" + p + "\\cdot" + s + "+" + r + "\\cdot" + q + "}{" + q + "\\cdot" + s + "}";
      const raw = "\\frac{" + n + "}{" + d + "}";
      const final = correct.d === 1 ? String(correct.n) : "\\frac{" + correct.n + "}{" + correct.d + "}";
      explanation = "Quy đồng bằng cách nhân chéo tử số: " +
        math("\\frac{" + p + "}{" + q + "}+\\frac{" + r + "}{" + s + "}=" +
          first + "=" + raw + (g > 1 ? "=" + final : "")) +
        ". " + (g > 1 ? "Chia cả tử và mẫu cho " + g + " để được phân số tối giản." :
          "Tử và mẫu không còn ước chung lớn hơn 1.");
      wrongs = [
        { value: rational(p+r, q+s), code: "added_denominators",
          reason: "Em đã cộng cả hai mẫu. Khi cộng phân số khác mẫu phải quy đồng trước, không cộng mẫu số." },
        { value: rational(p+r, q*s), code: "forgot_cross_multiplication",
          reason: "Em đã thay mẫu bằng tích nhưng chưa nhân chéo hai tử tương ứng." },
        { value: rational(p*s-r*q, q*s), code: "subtracted_numerators",
          reason: "Em đã trừ hai tử đã quy đồng, trong khi đề yêu cầu cộng." },
        { value: rational(p*s+r*q, q+s), code: "wrong_common_denominator",
          reason: "Tử được quy đồng nhưng mẫu chưa đúng: mẫu tích phải là " + (q*s) + "." }
      ];
    } else if (template.id === "NUMERIC_DIFFERENCE_SQUARES") {
      const pset = template.params;
      if (pset.a_min < 3 || pset.a_max > 40 || pset.b_min < 1 || pset.b_max > 20 ||
          pset.gap_min < 1 || pset.a_min > pset.a_max || pset.b_min > pset.b_max)
        throw new Error("Unsafe difference-of-squares template parameters.");
      const a = draw(rand, pset.a_min, pset.a_max);
      const b = draw(rand, pset.b_min, Math.min(pset.b_max, a-pset.gap_min));
      params = { a, b };
      correct = rational(a*a-b*b);
      question = "Tính nhanh " + math(a + "^2-" + b + "^2") + ".";
      explanation = "Dùng hiệu hai bình phương: " +
        math(a + "^2-" + b + "^2=(" + a + "-" + b + ")(" + a + "+" + b +
          ")=" + (a-b) + "\\cdot" + (a+b) + "=" + (a*a-b*b)) +
        ". Không cần tính riêng hai bình phương lớn.";
      wrongs = [
        { value: rational(a*a+b*b), code: "added_squares",
          reason: "Em đã cộng hai bình phương thay vì lấy hiệu." },
        { value: rational((a-b)*(a-b)), code: "squared_difference",
          reason: "Em đã dùng " + math("(a-b)^2") + " thay cho " + math("(a-b)(a+b)") + "." },
        { value: rational((a+b)*(a+b)), code: "squared_sum",
          reason: "Em đã bình phương một tổng. Hiệu hai bình phương bằng tích của tổng và hiệu." }
      ];
    } else throw new Error("Unapproved template: " + template.id);

    const choiceData = choicesFor(correct, wrongs);
    const signature = template.id + ":" + Object.values(params).join(",");
    return {
      id: generatedId(template, seed, params), template_id: template.id, template_version: template.version,
      seed, params, signature, question, options: choiceData.map(c => c.text), answer: 0,
      diagnostics: choiceData.map(c => ({ code: c.error_code, reason: c.reason })),
      explanation, correct_value: correct,
      topic: template.topic, assessed_skill_candidate: template.assessed_skill_candidate,
      source_kind: "deterministic_authored_template", independent_credit: false,
      source_template_version: template.id + "@v" + template.version
    };
  };
  const generate = (catalog, id, seed) => {
    if (!catalogValid(catalog)) throw new Error("Template catalog fails policy validation.");
    const template = catalog.templates.find(t => t.id === id);
    if (!template) throw new Error("Unapproved template: " + id);
    return build(template, seed);
  };
  const generateDistinct = (catalog, id, startSeed, usedSignatures = new Set()) => {
    if (!(usedSignatures instanceof Set)) throw new Error("Expected set of previous variants.");
    const first = seedValue(startSeed);
    for (let offset = 0; offset < 256; offset++) {
      const seed = (first + offset) >>> 0 || 1;
      const item = generate(catalog, id, seed);
      if (usedSignatures.has(item.signature)) continue;
      return { item, nextSeed: (seed + 1) >>> 0 || 1 };
    }
    throw new Error("Could not find a distinct, validated variant.");
  };
  return Object.freeze({
    BUILD, TEMPLATE_IDS, math, gcd, rational, valueKey, renderValue,
    catalogValid, generate, generateDistinct
  });
});
