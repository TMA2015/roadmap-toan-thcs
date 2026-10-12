# MATH-SKILL-TAXONOMY-B01-20260928 — Gói phản biện thật: bảng kỹ năng Toán THCS

**Vai trò:** một nguồn tạm thời. **Version:** 1.0. **GitHub main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. **Trạng thái:** yêu cầu phản biện, KHÔNG phải quyết định được phê duyệt.

**Nguồn cố định cần chọn:** Master Plan Toán v1.1 + Notebook Math Permanent v1.1. Khi chạy B01, chỉ thêm file B01 này; không chọn chat cũ hoặc template rỗng.

## A. Phạm vi và điều không được kết luận

- Phản biện đúng **10 cặp tag** có câu hỏi mẫu toàn văn và số đếm đồng-gắn; sơ bộ xem **8 mã xuất hiện nhiều chuyên đề**; xem 41 graph node là đồ thị *chọn lọc*, 346 legacy tag là danh mục *lịch sử*, không phải 346 năng lực được đo độc lập.
- 39 câu CĐ04–07 nằm trong hồ sơ quyết định trước chỉ là thông tin bối cảnh. B01 KHÔNG chứa đủ toàn văn cả 39 câu; chưa được nói đã phản biện độc lập 39/39.
- Chỉ suy luận khả năng thực hiện/nhận diện điều chính câu hỏi quan sát. Một lựa chọn đúng không chứng minh học sinh tự viết được chứng minh, lập đầy đủ mô hình hay mọi bước giải.
- Không khẳng định tần suất thi nếu chưa chọn corpus đề chính thức theo năm/địa phương. Không gán Core/Challenge dứt khoát nếu chưa đối chiếu yêu cầu chương trình/SGK cụ thể.
- Không sửa câu/ID/tag/runtime/learner data. Mọi đề xuất `PROPOSAL_ONLY`; không nhập quyết định AI cũ thành chứng cứ chính thức.

## B. Bảng nguồn đã khóa bằng Git blob SHA

| Mã | Đường dẫn | SHA |
|---|---|---|
| policy | `docs/roadmap/skill-taxonomy-minimal-policy-v1.md` | `aa18eb40ac354d04e40aa645b17724a3824723ae` |
| evidence | `docs/roadmap/gemini-question-evidence-10-cases-2026-09-26.md` | `9b83bf6755099f63af22fbbef65886ce03aee9dd` |
| pair | `docs/roadmap/gemini-pair-audit-04-11-2026-09-26.md` | `693b741bb7385554f54ee27986bfbb38f14b1f84` |
| pilot | `docs/assets/data/curriculum/skill-role-pilot-04-11-v1.json` | `513b8e6a4f40ee2ac1f23147f1e52b28f5c7bc03` |
| audit | `docs/assets/data/curriculum/skill-taxonomy-audit-v1.json` | `abe671a7e685374f9e3731f3fa4f84dfcc7b3cc3` |
| graph | `docs/assets/data/curriculum/knowledge-graph-v1.json` | `64a7acf13a25aaf4a8f2501d3a63f48f7391134d` |
| reg | `docs/assets/data/curriculum/primary-skill-decision-register-39-v1.json` | `097701804f9de8966af027b72449c5f7fdda2fbe` |
| snap1 | `docs/assets/data/curriculum/review-snapshot-04-11.json` | `dc58cd013ea7070219319f2d0c2c0194020af3a1` |
| snap2 | `docs/assets/data/curriculum/review-snapshot-12-18.json` | `1ae8d846ba7ce39b6256aecfc7576c04a1b85dcf` |
| snap3 | `docs/assets/data/curriculum/review-snapshot-19-25.json` | `1c9cee5004324abd31eff4136c297b51737d8ca8` |

## C. Chính sách tinh gọn — nguyên văn tài liệu hiện hành

# Quy tắc tinh gọn Skill Taxonomy — bản định hướng 1.0

**Phạm vi:** Toán THCS, ưu tiên kiến thức nền và ứng dụng thiết thực. **Trạng thái:** quyết định định hướng; chưa duyệt từng skill, chưa thay đổi runtime/ngân hàng/Knowledge Graph. Ngày 26/09/2026.

## Đơn vị cần đo

Một `assessed_skill` là **đầu ra học sinh có thể thể hiện độc lập**, đủ rõ để nhận biết lỗi và có một hành động ôn bù cụ thể. Không bắt buộc định danh mọi công thức, bước trung gian hoặc biến thể đề. Câu kiểm tra một kết quả tổng hợp **không tự chứng minh** học sinh thành thạo mọi thao tác đã dùng.

| Vai trò | Ý nghĩa | Có cộng mastery riêng theo một câu ghép? |
|---|---|---|
| `assessed_skill` | Kỹ năng chính được câu hỏi/rubric đo | Có, nếu câu hỏi đo thích hợp |
| `supporting_skill` | Kiến thức/thao tác cần dùng nhưng câu hiện tại chưa đo tách biệt | Không |
| `method` | Cách giải, biểu diễn, thủ thuật | Không tự động |
| `context` | Tình huống: chuyển động, bài toán số, thực tế... | Không |
| `extension` | Nhánh nâng cao tùy chọn; có thể có năng lực được đo riêng trong nhánh | Không nhập vào Core Readiness |

Một mục có thể là kỹ năng chính trong câu này nhưng là kiến thức hỗ trợ trong câu khác. **Vai trò gắn với câu hỏi và mục đích đo, không áp một phân loại cố định cho mọi lần xuất hiện của một ID.** Tối đa một `assessed_skill` chính cho câu trắc nghiệm một điểm; nếu có rubric chấm từng bước thì mỗi bước có thể cung cấp bằng chứng riêng, không đếm trùng một câu.

## Quy tắc thêm/bớt

Thêm skill đo độc lập chỉ khi: (1) là yêu cầu đáng học hoặc ứng dụng hữu ích; (2) có lỗi học sinh cần ôn khác biệt; (3) có thể kiểm tra riêng; (4) cho phép đưa khuyến nghị học cụ thể. Nếu không đạt, giữ ở method/context/nhóm hiển thị, không tạo mastery. Không chạy theo tổng số node, tag, độ khó hay danh sách kỹ thuật thi chuyên.

**Ưu tiên 3 vòng:** nền theo chuẩn KNTT/Chương trình GDPT → ứng dụng thực tế & lộ trình thi vào 10 → nhánh tự chọn (Specialized-Challenge/THPT-Bridge). Mức nền tảng và tần suất thi là hai trục tách biệt. Không suy diễn tần suất từ một bộ bài tự soạn hay vài đề thi.

## Kết nối dữ liệu đang có

- Giữ nguyên `question.id`, mọi `tags.skill` hiện hành và khóa `toan-thcs-practice-v1`; đây là dữ liệu lịch sử.
- Practice Engine và Learner Evidence hiện cộng mọi tag kỹ năng khi làm một câu; **đó là thống kê tag lịch sử, không tự động là mastery tách biệt**. Không cộng các bộ đếm alias, không chia ngược điểm cũ khi thiếu nhật ký đủ chi tiết.
- Giai đoạn đầu xây **mapping chỉ đọc**, lựa chọn primary/support/context ở câu có bằng chứng. Khi thay engine sau này, lưu bằng chứng mới tách nguồn, giữ nguyên dữ liệu cũ, làm regression và chỉ chuyển sang kết quả mới khi đã xác minh.
- Knowledge Graph là bản đồ **chọn lọc** của năng lực nền/điểm nối có giá trị tự học; không phải ảnh chụp toàn bộ `tags.skill`. Chỉ thêm prerequisite có căn cứ, không khóa đường học.
- Gemini là kênh phản biện tham khảo: mọi ý kiến phải đối chiếu câu hỏi thật và nguồn chương trình, không cần cố hoàn thiện một ontology bao trùm toàn bộ toán học.

## Đợt pilot đầu tiên

Chỉ xét 10 cặp tag tại [bản đối soát câu nguồn](gemini-pair-audit-04-11-2026-09-26.md), dùng [pilot JSON](../assets/data/curriculum/skill-role-pilot-04-11-v1.json) để giữ quyết định ở lớp dữ liệu. Có thể gộp hiển thị hoặc đổi vai trò tag trước khi đụng vào ID/hồ sơ học sinh. Cần rà soát theo **toàn bộ câu gắn tag** trước khi áp dụng một rule cho mọi câu, đặc biệt khi hai tập câu chỉ giao nhau một phần.


## D. Pilot 10 cặp — là quyết định nội bộ đang chờ phản biện độc lập

```json
{
  "schema": "roadmap-skill-role-pilot-v1",
  "as_of": "2026-09-26",
  "status": "reviewed_recommendations_read_only_not_used_by_runtime",
  "method": "10 full-text representative questions inspected, all relevant source-bank co-tag counts audited, independent Gemini review considered; decisions apply to the representative examples only pending bank-wide validation",
  "policy_ref": "docs/roadmap/skill-taxonomy-minimal-policy-v1.md",
  "evidence_ref": "docs/roadmap/gemini-question-evidence-10-cases-2026-09-26.md",
  "role_values": [
    "assessed_skill",
    "supporting_skill",
    "method",
    "context",
    "category",
    "representation",
    "extension"
  ],
  "safeguards": {
    "no_hard_lock": true,
    "legacy_question_tags_unchanged": true,
    "legacy_counters_unchanged": true,
    "do_not_multiply_mastery_from_one_item": true,
    "graph_nodes_not_automatically_expanded": true,
    "no_historical_counter_aggregation": true,
    "no_retroactive_primary_assignment": true,
    "display_parent_groups_not_equivalent_to_prerequisites": true
  },
  "pairs": [
    {
      "topic": "04-bieu-thuc-dai-so",
      "a": "cong-tru-da-thuc",
      "b": "bo-ngoac-dau",
      "primary": "cong-tru-da-thuc",
      "secondary_role": "supporting_skill",
      "secondary_remains_assessable": true,
      "reason": "Bỏ ngoặc và cộng/trừ đa thức có lỗi khác nhau nhưng 12 câu mang bo-ngoac-dau ngoài cặp này vẫn là các bài rút gọn nhiều bước, không phải phép đo riêng sạch. Cần micro-test chỉ hỏi ngay sau bước bỏ ngoặc.",
      "recommendation": "KEEP_DIAGNOSTIC_TARGET_WITH_NEW_SIGN_MICRO_TEST",
      "labels": {
        "a": "Cộng – trừ đa thức",
        "b": "Bỏ ngoặc và dấu"
      },
      "assessed_target_on_representative": "cong-tru-da-thuc",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "ALG04V2_037",
      "question_tag_counts": {
        "a": 14,
        "b": 26,
        "intersection": 14
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only",
      "independent_micro_test_required": true
    },
    {
      "topic": "04-bieu-thuc-dai-so",
      "a": "nhan-bieu-thuc",
      "b": "tinh-phan-phoi",
      "primary": "nhan-bieu-thuc",
      "secondary_role": "method",
      "secondary_remains_assessable": false,
      "reason": "Tập câu hiện tại trùng hoàn toàn; phân phối là quy tắc dùng để nhân biểu thức. Nếu muốn đo nhận biết quy tắc riêng phải có bài độc lập.",
      "recommendation": "ONE_TARGET_AND_METHOD_TAG_CANDIDATE",
      "labels": {
        "a": "Nhân biểu thức",
        "b": "Tính phân phối"
      },
      "assessed_target_on_representative": "nhan-bieu-thuc",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "ALG04V2_051",
      "question_tag_counts": {
        "a": 26,
        "b": 26,
        "intersection": 26
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only"
    },
    {
      "topic": "04-bieu-thuc-dai-so",
      "a": "lap-bieu-thuc",
      "b": "bai-toan-thuc-te",
      "primary": "lap-bieu-thuc",
      "secondary_role": "context",
      "secondary_remains_assessable": false,
      "reason": "Bài toán thực tế là tình huống, đích câu là lập biểu thức chu vi.",
      "recommendation": "ONE_TARGET_AND_CONTEXT_TAG_CANDIDATE",
      "labels": {
        "a": "Lập biểu thức",
        "b": "Bài toán thực tế"
      },
      "assessed_target_on_representative": "lap-bieu-thuc",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "ALG04V2_111",
      "question_tag_counts": {
        "a": 10,
        "b": 10,
        "intersection": 10
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only"
    },
    {
      "topic": "05-7-hang-dang-thuc",
      "a": "nhan-dang-hdt",
      "b": "binh-phuong-hoan-chinh",
      "primary": "binh-phuong-hoan-chinh",
      "secondary_role": "category",
      "secondary_remains_assessable": true,
      "reason": "Câu mẫu nhận dạng bình phương hoàn chỉnh; nhận dạng HĐT là nhóm kiến thức chung. Không tự động chấm nhóm và mẫu như hai đầu ra riêng; các câu chỉ gắn nhóm phải rà soát theo đề.",
      "recommendation": "SPECIFIC_ASSESSED_TARGET_GENERAL_CATEGORY_ON_SAMPLE",
      "labels": {
        "a": "Nhận dạng cấu trúc hằng đẳng thức",
        "b": "Nhận dạng bình phương hoàn chỉnh"
      },
      "assessed_target_on_representative": "binh-phuong-hoan-chinh",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "ID05V1_061",
      "question_tag_counts": {
        "a": 21,
        "b": 16,
        "intersection": 14
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only"
    },
    {
      "topic": "05-7-hang-dang-thuc",
      "a": "phan-tich-hdt",
      "b": "hieu-hai-binh-phuong",
      "primary": "hieu-hai-binh-phuong",
      "secondary_role": "category",
      "secondary_remains_assessable": true,
      "reason": "Câu hỏi cụ thể x²−16 đòi hỏi nhận dạng và áp dụng hiệu hai bình phương. Phân tích bằng HĐT là nhóm rộng; không tự chứng minh mastery của nhóm từ một câu con. Các câu còn lại có tag chung cần phân loại theo yêu cầu thực tế.",
      "recommendation": "SPECIFIC_ASSESSED_TARGET_GENERAL_CATEGORY_ON_SAMPLE",
      "labels": {
        "a": "Phân tích biểu thức bằng hằng đẳng thức",
        "b": "Hiệu hai bình phương"
      },
      "assessed_target_on_representative": "hieu-hai-binh-phuong",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "ID05V1_021",
      "question_tag_counts": {
        "a": 30,
        "b": 19,
        "intersection": 12
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only"
    },
    {
      "topic": "07-phan-thuc-dai-so",
      "a": "hai-phan-thuc-bang-nhau",
      "b": "giu-dieu-kien-ban-dau",
      "primary": "hai-phan-thuc-bang-nhau",
      "secondary_role": "supporting_skill",
      "secondary_remains_assessable": true,
      "reason": "Câu mẫu kiểm tra hai phân thức bằng nhau TRÊN MIỀN x≠2. Giữ miền xác định sau rút gọn là thao tác riêng; micro-test thích hợp so sánh miền trước/sau khi triệt nhân tử, không thay bằng câu loại nghiệm ngoại lai của phương trình. Hiện đã có 8 câu chỉ gắn giu-dieu-kien-ban-dau, ví dụ RAT07V1_063; chưa cần tạo thêm bài trừ khi QA chứng minh thiếu.",
      "recommendation": "KEEP_DISTINCT_WITH_DOMAIN_PRESERVATION_MICRO_TEST",
      "labels": {
        "a": "Hai phân thức bằng nhau",
        "b": "Giữ điều kiện xác định ban đầu"
      },
      "assessed_target_on_representative": "hai-phan-thuc-bang-nhau",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "RAT07V1_025",
      "question_tag_counts": {
        "a": 6,
        "b": 14,
        "intersection": 6
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only",
      "independent_micro_test_required": false,
      "separate_existing_question_evidence": [
        "RAT07V1_063",
        "RAT07V1_064"
      ]
    },
    {
      "topic": "09-he-phuong-trinh",
      "a": "so-nghiem-he",
      "b": "y-nghia-hinh-hoc",
      "primary": "so-nghiem-he",
      "secondary_role": "representation",
      "secondary_remains_assessable": true,
      "reason": "Câu này hỏi số nghiệm qua hệ số đường thẳng; ý nghĩa hình học là cách biểu diễn/giải thích. Nếu muốn chẩn đoán đọc đồ thị, thêm câu có đồ thị riêng. Không tự mở thanh mastery từ câu ghép.",
      "recommendation": "ONE_PRIMARY_NOW_SEPARATE_MICRO_TEST_IF_NEEDED",
      "labels": {
        "a": "Số nghiệm của hệ",
        "b": "Ý nghĩa hình học của hệ"
      },
      "assessed_target_on_representative": "so-nghiem-he",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "SYS09V1_029",
      "question_tag_counts": {
        "a": 12,
        "b": 12,
        "intersection": 12
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only",
      "independent_micro_test_required": true
    },
    {
      "topic": "09-he-phuong-trinh",
      "a": "lap-he-bai-toan",
      "b": "bai-toan-so",
      "primary": "lap-he-bai-toan",
      "secondary_role": "context",
      "secondary_remains_assessable": false,
      "reason": "Bài toán số là bối cảnh ứng dụng; kỹ năng đo là chuyển lời văn thành hệ.",
      "recommendation": "ONE_TARGET_AND_CONTEXT_TAG_CANDIDATE",
      "labels": {
        "a": "Lập hệ từ bài toán",
        "b": "Bài toán về số"
      },
      "assessed_target_on_representative": "lap-he-bai-toan",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "SYS09V1_089",
      "question_tag_counts": {
        "a": 32,
        "b": 12,
        "intersection": 12
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only"
    },
    {
      "topic": "10-ham-so-do-thi",
      "a": "giao-diem-do-thi",
      "b": "lien-he-he-phuong-trinh",
      "primary": "giao-diem-do-thi",
      "secondary_role": "method",
      "secondary_remains_assessable": false,
      "reason": "Câu mẫu yêu cầu điểm giao, còn giải hệ là cách tính. Nếu muốn đo quan hệ hệ–đồ thị cần câu riêng.",
      "recommendation": "ONE_TARGET_AND_METHOD_TAG_CANDIDATE",
      "labels": {
        "a": "Giao điểm hai đồ thị",
        "b": "Liên hệ với hệ phương trình"
      },
      "assessed_target_on_representative": "giao-diem-do-thi",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "FUN10V1_103",
      "question_tag_counts": {
        "a": 8,
        "b": 8,
        "intersection": 8
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only"
    },
    {
      "topic": "11-can-thuc",
      "a": "khai-phuong-tich",
      "b": "dua-thua-so-ra",
      "primary": "dua-thua-so-ra",
      "secondary_role": "supporting_skill",
      "secondary_remains_assessable": true,
      "reason": "Câu đo đưa thừa số ra ngoài căn bằng √8=2√2; khai phương một tích là kiến thức nền. Có thể kiểm tra riêng điều kiện áp dụng √(AB)=√A√B, tránh tạo hai thanh mastery từ một câu.",
      "recommendation": "KEEP_KNOWLEDGE_WITH_TARGETED_MICRO_PRACTICE",
      "labels": {
        "a": "Khai phương một tích",
        "b": "Đưa thừa số ra ngoài dấu căn"
      },
      "assessed_target_on_representative": "dua-thua-so-ra",
      "review_status": "reviewed_on_representative_item_pending_full_bank_semantic_QA",
      "scope": "representative_item_only_not_auto_rule_for_all_questions",
      "stored_tag_ids_unchanged": true,
      "question_id": "RAD11V1_043",
      "question_tag_counts": {
        "a": 12,
        "b": 12,
        "intersection": 12
      },
      "confidence": "moderate_for_representative_item_only",
      "primary_counter_mode": "future_primary_only_legacy_unchanged",
      "assessment_grouping": "do_not_auto_roll_up_parent_category_or_supporting_tags",
      "secondary_role_scope": "on_representative_question_only",
      "independent_micro_test_required": true
    }
  ],
  "review": {
    "reviewer": "Gemini independent academic review",
    "integrated_on": "2026-09-26",
    "verdict": "General approach aligned; accepted specific-primary correction for ID05V1_021, category-role refinements for ID05V1_061 and ID05V1_021, and representation/microtest refinement for SYS09V1_029. Other proposals remain provisional pending full-bank QA; no migration or production approval.",
    "coverage": {
      "representative_questions_reviewed": 10,
      "full_source_bank_semantic_review": false
    },
    "principle": "minimal diagnostic skills, no automatic double-counting from one answer"
  }
}
```

## E. Mười câu nguồn toàn văn và đáp án/giải thích — bằng chứng chính

# Gói bằng chứng đầy đủ — 10 câu Gemini yêu cầu (CĐ04–11)

Dữ liệu sao từ các tệp câu hỏi thực tế trong repository, ngày 26/09/2026. Không phải kết luận đã phê duyệt về taxonomy. Đáp án tính theo chỉ số 0-based ở JSON; dưới đây ghi thêm chữ cái A–D cho dễ đọc. Cặp tag đồng xuất hiện không đồng nghĩa với hai năng lực được đánh giá độc lập.

## ALG04V2_037

Nguồn: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-02.json`

**Đề:** Rút gọn \((5x + 2) - (-x + 2)\).

**Đáp án lựa chọn:**
- A. \(6 x\)
- B. \(4 x + 4\)
- C. \(6 x + 4\)
- D. \(4 x\)

**Đúng:** A (index 0). **Giải thích:** Bỏ ngoặc đúng dấu rồi gộp hạng tử đồng dạng. Kết quả là \(6 x\).

**Tag gốc:** `cong-tru-da-thuc`, `bo-ngoac-dau`. **Type:** `cong-tru`. **Độ khó khai báo:** `basic`.

## ALG04V2_051

Nguồn: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-02.json`

**Đề:** Khai triển \(4x(x + 3)\).

**Đáp án lựa chọn:**
- A. \(4 x^{2} + 12 x\)
- B. \(4 x + 12\)
- C. \(4 x^{2} + 3\)
- D. \(4 x^{2} - 12 x\)

**Đúng:** A (index 0). **Giải thích:** Nhân \(4x\) với từng hạng tử trong ngoặc rồi thu gọn. Kết quả là \(4 x^{2} + 12 x\).

**Tag gốc:** `nhan-bieu-thuc`, `tinh-phan-phoi`. **Type:** `nhan-don-thuc-da-thuc`. **Độ khó khai báo:** `basic`.

## ALG04V2_111

Nguồn: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json`

**Đề:** Một hình chữ nhật có chiều dài \(2x+3\), chiều rộng \(x-1\). Chu vi là biểu thức nào?

**Đáp án lựa chọn:**
- A. \(6x+4\)
- B. \(3x+2\)
- C. \(6x+2\)
- D. \(2x^2+x-3\)

**Đúng:** A (index 0). **Giải thích:** Chu vi bằng \(2[(2x+3)+(x-1)]=2(3x+2)=6x+4\).

**Tag gốc:** `bai-toan-thuc-te`, `lap-bieu-thuc`. **Type:** `ung-dung`. **Độ khó khai báo:** `intermediate`.

## ID05V1_061

Nguồn: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-03.json`

**Đề:** Viết \(x^{2} + 4 x + 4\) dưới dạng bình phương của một tổng hoặc hiệu.

**Đáp án lựa chọn:**
- A. \((x + 2)^2\)
- B. \((x - 2)^2\)
- C. \((x + 3)^2\)
- D. \(x^{2} + 4\)

**Đúng:** A (index 0). **Giải thích:** Nhận \(A^2\), \(B^2\) và kiểm tra hạng tử giữa bằng \(\pm2AB\).

**Tag gốc:** `binh-phuong-hoan-chinh`, `nhan-dang-hdt`. **Type:** `nhan-dang-binh-phuong-hoan-chinh`. **Độ khó khai báo:** `basic`.

## ID05V1_021

Nguồn: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json`

**Đề:** Phân tích \(x^{2} - 16\) thành nhân tử.

**Đáp án lựa chọn:**
- A. \((x - 4)(x + 4)\)
- B. \((x - 4)^2\)
- C. \((x + 4)^2\)
- D. \((x - 4)(x - 4)\)

**Đúng:** A (index 0). **Giải thích:** Nhận dạng \(A^2-B^2=(A-B)(A+B)\) với \(A=x,\ B=4\).

**Tag gốc:** `hieu-hai-binh-phuong`, `phan-tich-hdt`. **Type:** `phan-tich-hieu-hai-binh-phuong`. **Độ khó khai báo:** `basic`.

## RAT07V1_025

Nguồn: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json`

**Đề:** Chọn khẳng định đúng:

**Đáp án lựa chọn:**
- A. \(\frac{x+1}{x-2}\) và \(\frac{2x+2}{2x-4}\) bằng nhau trên miền \(x\ne2\).
- B. \(\frac{x+1}{x-2}\) và \(\frac{2x+2}{2x-4}\) không bao giờ bằng nhau.
- C. Hai biểu thức chỉ bằng nhau khi x=0.
- D. Có thể bỏ mọi điều kiện xác định khi rút gọn.

**Đúng:** A (index 0). **Giải thích:** Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu.

**Tag gốc:** `hai-phan-thuc-bang-nhau`, `giu-dieu-kien-ban-dau`. **Type:** `hai-phan-thuc-bang-nhau`. **Độ khó khai báo:** `intermediate`.

## SYS09V1_029

Nguồn: `docs/assets/data/practice/09-he-phuong-trinh-v1-01.json`

**Đề:** Hệ \(\begin{cases}1x+1y=3\\1x-1y=2\end{cases}\) có bao nhiêu nghiệm?

**Đáp án lựa chọn:**
- A. Hệ có đúng một nghiệm
- B. Hệ vô nghiệm
- C. Hệ có vô số nghiệm
- D. Không đủ dữ kiện

**Đúng:** A (index 0). **Giải thích:** Hai phương trình biểu diễn hai đường thẳng có hệ số không tỉ lệ nên cắt nhau tại một điểm.

**Tag gốc:** `so-nghiem-he`, `y-nghia-hinh-hoc`. **Type:** `so-nghiem-he`. **Độ khó khai báo:** `intermediate`.

## SYS09V1_089

Nguồn: `docs/assets/data/practice/09-he-phuong-trinh-v1-03.json`

**Đề:** Tổng của hai số là 14 và hiệu của số lớn với số bé là 6. Nếu gọi số lớn là \(x\), số bé là \(y\), hệ nào mô tả bài toán?

**Đáp án lựa chọn:**
- A. \(\begin{cases}x+y=14\\x-y=6\end{cases}\)
- B. \(\begin{cases}x+y=6\\x-y=14\end{cases}\)
- C. \(\begin{cases}x-y=14\\x+y=-6\end{cases}\)
- D. \(\begin{cases}xy=14\\x-y=6\end{cases}\)

**Đúng:** A (index 0). **Giải thích:** Tổng cho phương trình \(x+y\), còn hiệu số lớn trừ số bé cho phương trình \(x-y\).

**Tag gốc:** `lap-he-bai-toan`, `bai-toan-so`. **Type:** `lap-he-bai-toan`. **Độ khó khai báo:** `basic`.

## FUN10V1_103

Nguồn: `docs/assets/data/practice/10-ham-so-do-thi-v1-04.json`

**Đề:** Giao điểm của \(d_1:y=x+3\) và \(d_2:y=-x+1\) là điểm nào?

**Đáp án lựa chọn:**
- A. \((-1;2)\)
- B. \((0;2)\)
- C. \((-1;3)\)
- D. \((2;-1)\)

**Đúng:** A (index 0). **Giải thích:** Tại giao điểm, hai biểu thức của \(y\) bằng nhau. Giải phương trình theo \(x\) rồi thế lại tìm \(y\).

**Tag gốc:** `giao-diem-do-thi`, `lien-he-he-phuong-trinh`. **Type:** `giao-diem-do-thi`. **Độ khó khai báo:** `intermediate`.

## RAD11V1_043

Nguồn: `docs/assets/data/practice/11-can-thuc-v1-02.json`

**Đề:** Rút gọn \(\sqrt{8}\).

**Đáp án lựa chọn:**
- A. \(2\sqrt{2}\)
- B. \(3\sqrt{2}\)
- C. \(2\sqrt{3}\)
- D. \(\sqrt{4}\)

**Đúng:** A (index 0). **Giải thích:** Ta có \(8=2^2\cdot 2\), nên \(\sqrt{8}=2\sqrt{2}\).

**Tag gốc:** `khai-phuong-tich`, `dua-thua-so-ra`. **Type:** `rut-gon-can-so`. **Độ khó khai báo:** `basic`.



## F. Thống kê đồng-gắn tag của 10 cặp (không đồng nghĩa cùng năng lực)

# CĐ04–11 — đối soát 10 cặp tag với toàn bộ câu hỏi nguồn

Ngày 26/09/2026. Phản hồi cho Gemini, **chưa phải quyết định migration**. Toàn văn 10 câu có đề, phương án, đáp án và giải thích: [gói câu hỏi thực tế](gemini-question-evidence-10-cases-2026-09-26.md).

## Quan niệm thiết kế chốt cho đợt review

Mục tiêu là bộ kỹ năng **tối thiểu nhưng đủ chẩn đoán**: những năng lực nền, làm bài độc lập và ứng dụng thiết thực. Không biến mọi công thức, biểu diễn, thuật toán con, nhóm dạng bài, ví dụ thực tế hoặc kỹ thuật chuyên thành một skill mastery riêng. Một câu hỏi có thể có một **assessed skill chính** và nhiều **supporting/context/method tags**. Nếu bài đo được hai năng lực độc lập cần câu phụ, rubric hoặc bài khác để tách bằng chứng. Không tự trừ/cộng cả hai mastery chỉ từ một câu trả lời.

## Đếm tập câu đầy đủ, không chỉ 3 ID ví dụ

| Cặp | Số câu tag A | Số câu tag B | Đồng xuất hiện | Nhận định sơ bộ |
|---|---:|---:|---:|---|
| CĐ04 `cong-tru-da-thuc` / `bo-ngoac-dau` | 14 | 26 | 14 | Giữ khả năng đo phép cộng/trừ và dấu ngoặc riêng khi có bài riêng; câu ghép không cho hai bằng chứng độc lập. |
| CĐ04 `nhan-bieu-thuc` / `tinh-phan-phoi` | 26 | 26 | 26 | Ứng viên chuẩn hóa thành một assessed skill; phân phối là quy tắc/phương pháp hỗ trợ. |
| CĐ04 `lap-bieu-thuc` / `bai-toan-thuc-te` | 10 | 10 | 10 | Lập biểu thức là năng lực; thực tế là bối cảnh ứng dụng, không tự tạo mastery riêng. |
| CĐ05 `nhan-dang-hdt` / `binh-phuong-hoan-chinh` | 21 | 16 | 14 | **Không trùng hoàn toàn**; xem kỹ năng chung–riêng, tránh đánh giá hai lần. |
| CĐ05 `phan-tich-hdt` / `hieu-hai-binh-phuong` | 30 | 19 | 12 | **Không trùng hoàn toàn**; phương pháp tổng quát và hằng đẳng thức cụ thể. |
| CĐ07 `hai-phan-thuc-bang-nhau` / `giu-dieu-kien-ban-dau` | 6 | 14 | 6 | Kết luận bằng nhau khác với bảo toàn miền xác định, nên cần hai tín hiệu chẩn đoán khi có bằng chứng riêng. |
| CĐ09 `so-nghiem-he` / `y-nghia-hinh-hoc` | 12 | 12 | 12 | Hai cách nhìn của cùng bài trong tập hiện tại; cân nhắc một assessed skill và phương diện hình học là hỗ trợ. |
| CĐ09 `lap-he-bai-toan` / `bai-toan-so` | 32 | 12 | 12 | Năng lực lập hệ vs bối cảnh bài toán số. |
| CĐ10 `giao-diem-do-thi` / `lien-he-he-phuong-trinh` | 8 | 8 | 8 | Tìm giao điểm là đích; giải hệ là phương pháp/liên hệ, không tự nhận có hai mastery độc lập. |
| CĐ11 `khai-phuong-tich` / `dua-thua-so-ra` | 12 | 12 | 12 | Khai phương tích là cơ sở; thao tác đo trực tiếp ở câu mẫu là đưa thừa số ra ngoài căn. |

Tổng cộng **5 cặp có tập câu trùng hoàn toàn, 5 cặp chỉ giao nhau một phần**. Nhận định Gemini rằng cả 10 cặp chia sẻ 100% câu nguồn không đúng: mỗi catalogue chỉ cho tối đa 3 ID ví dụ/tag. Số liệu ở đây được đếm trên toàn bộ file nguồn của 6 chuyên đề liên quan.

## Bằng chứng từ 10 câu

- `ALG04V2_037`: rút gọn `(5x+2)-(-x+2)`, cần bỏ ngoặc rồi cộng/trừ.
- `ALG04V2_051`: khai triển `4x(x+3)`, nhân biểu thức bằng quy tắc phân phối.
- `ALG04V2_111`: mô hình chu vi chữ nhật `2x+3` và `x-1`; assessed là lập biểu thức, bối cảnh là hình học thực tế.
- `ID05V1_061`: viết `x²+4x+4` thành `(x+2)²` (nhận dạng mẫu cụ thể).
- `ID05V1_021`: phân tích `x²-16` thành tích (phương pháp và mẫu công thức).
- `RAT07V1_025`: hai phân thức bằng nhau trên miền `x != 2`; đáp án gắn cả hai ý, không đủ để chấm độc lập cả hai.
- `SYS09V1_029`: xác định số nghiệm qua vị trí hình học của hai đường thẳng.
- `SYS09V1_089`: từ tổng/hiệu hai số, chọn hệ tương ứng; `bai-toan-so` là ngữ cảnh.
- `FUN10V1_103`: tìm giao điểm hai đường thẳng bằng giải phương trình hoành độ.
- `RAD11V1_043`: rút gọn căn `√8=2√2`, sử dụng phép khai căn tích để đưa thừa số ra ngoài.

## Yêu cầu Gemini ở lượt tới

Không cần tranh luận giữ/gộp toàn bộ 116 tag nữa. Chỉ đánh giá các cặp theo **assessed skill / supporting concept-method / context / specialized optional** và đề xuất số kỹ năng đo độc lập tối thiểu đủ chẩn đoán. Dùng nguyên ID; đề xuất gộp phải ghi `canonical_id` và `legacy_ids` *ở lớp mapping*, không đổi ID ngân hàng hoặc cộng lại số liệu học sinh ngay. Nêu kỹ năng nào thiếu bài đo độc lập, nên bổ sung 1–3 câu micro-practice hay không. Chưa đánh giá tần suất thi hoặc mở rộng 346 node vào đồ thị.

## Ghi chú kỹ thuật

Mã Practice Engine hiện duyệt mọi `question.tags.skill` khi ghi thống kê, vì vậy cùng một lần trả lời có thể làm tăng cả hai bộ đếm. Điều này phù hợp với tag mô tả nhưng **không chứng minh người học đã làm độc lập được từng kỹ năng**. Khi chuẩn hóa, phải bảo toàn số liệu cũ và phân biệt thống kê tag lịch sử với bằng chứng đánh giá kỹ năng chính từ những lượt làm mới. Chưa sửa runtime trong đợt này.


## G. Kiểm kê các nghi vấn còn treo

```json
{
  "schema": "roadmap-skill-taxonomy-audit-v1",
  "status": "preliminary_not_approved",
  "as_of": "2026-09-26",
  "method": "22 manifest snapshots and complete question-level tag integrity audit across 99 source JSON files; semantic correctness and exam representativeness remain pending",
  "totals": {
    "manifests": 22,
    "declared_questions": 2874,
    "topic_skill_occurrences": 354,
    "unique_skill_codes": 346,
    "graph_node_count": 41,
    "graph_topics": 13
  },
  "same_code_multiple_topics": [
    {
      "id": "dieu-kien-xac-dinh",
      "occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "label": "Điều kiện xác định"
        },
        {
          "topic": "07-phan-thuc-dai-so",
          "label": "Điều kiện xác định"
        }
      ],
      "status": "requires_review",
      "decision": null
    },
    {
      "id": "hieu-hai-binh-phuong",
      "occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "label": "Hiệu hai bình phương"
        },
        {
          "topic": "06-phan-tich-da-thuc",
          "label": "Hiệu hai bình phương"
        }
      ],
      "status": "requires_review",
      "decision": null
    },
    {
      "id": "binh-phuong-hoan-chinh",
      "occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "label": "Nhận dạng bình phương hoàn chỉnh"
        },
        {
          "topic": "06-phan-tich-da-thuc",
          "label": "Bình phương hoàn chỉnh"
        }
      ],
      "status": "requires_review",
      "decision": null
    },
    {
      "id": "lap-phuong-trinh",
      "occurrences": [
        {
          "topic": "08-phuong-trinh-bat-phuong-trinh",
          "label": "Lập phương trình từ bài toán"
        },
        {
          "topic": "24-bai-toan-thuc-te",
          "label": "Lập phương trình thực tế"
        }
      ],
      "status": "requires_review",
      "decision": null
    },
    {
      "id": "pythagore",
      "occurrences": [
        {
          "topic": "14-tam-giac",
          "label": "Định lý Pythagore"
        },
        {
          "topic": "18-he-thuc-luong",
          "label": "Định lý Pythagore"
        }
      ],
      "status": "requires_review",
      "decision": null
    },
    {
      "id": "pythagore-dao",
      "occurrences": [
        {
          "topic": "14-tam-giac",
          "label": "Định lý Pythagore đảo"
        },
        {
          "topic": "18-he-thuc-luong",
          "label": "Pythagore đảo"
        }
      ],
      "status": "requires_review",
      "decision": null
    },
    {
      "id": "nhan-biet-trung-truc",
      "occurrences": [
        {
          "topic": "14-tam-giac",
          "label": "Nhận biết đường trung trực"
        },
        {
          "topic": "15-duong-dong-quy",
          "label": "Nhận biết đường trung trực"
        }
      ],
      "status": "requires_review",
      "decision": null
    },
    {
      "id": "cach-deu-dinh",
      "occurrences": [
        {
          "topic": "14-tam-giac",
          "label": "Điểm cách đều hai đầu mút"
        },
        {
          "topic": "15-duong-dong-quy",
          "label": "Tính chất cách đều ba đỉnh"
        }
      ],
      "status": "requires_review",
      "decision": null
    }
  ],
  "graph_not_in_loaded_manifests": [
    "ti-le-thuc"
  ],
  "group_membership_errors": [],
  "priority_review_cases": [
    {
      "ids": [
        "cach-deu-dinh"
      ],
      "risk": "semantic collision: two endpoints vs three vertices; TRI14V1_132 mixes three-vertex context",
      "evidence": [
        {
          "topic": "14-tam-giac",
          "question_ids": [
            "TRI14V1_129",
            "TRI14V1_130",
            "TRI14V1_131",
            "TRI14V1_132"
          ]
        },
        {
          "topic": "15-duong-dong-quy",
          "question_ids": [
            "CTR15V1_097",
            "CTR15V1_098",
            "CTR15V1_099",
            "CTR15V1_100"
          ]
        }
      ],
      "rule": "Do not auto remap old localStorage counters; audit every tagged question first."
    },
    {
      "ids": [
        "dieu-kien-xac-dinh",
        "dkxd-phuong-trinh-mau",
        "dkxd-can",
        "giu-dieu-kien-ban-dau",
        "doi-chieu-nghiem"
      ],
      "risk": "related but distinct diagnostic behaviors; avoid broad merge"
    },
    {
      "ids": [
        "lap-he-bai-toan",
        "lap-he",
        "lap-phuong-trinh",
        "chuyen-dong",
        "chuyen-dong-he"
      ],
      "risk": "same technique across topic/context; decide core skill vs application dimensions"
    },
    {
      "ids": [
        "nhan-dien-chuyen-de",
        "on-thi-hinh-hoc",
        "on-thi-he",
        "on-thi-thong-ke",
        "checklist-chua-de"
      ],
      "risk": "composite exam prep and metacognitive tags, not atomic prerequisite skills"
    },
    {
      "ids": [
        "binh-phuong-hoan-chinh",
        "hieu-hai-binh-phuong",
        "pythagore",
        "pythagore-dao"
      ],
      "risk": "same IDs in multiple topics; verify task demands and maintain shared identity when appropriate"
    }
  ],
  "priority_axes": {
    "curriculum": "Required by official grade-specific curriculum; needs cited expected outcome",
    "foundation": "Dependency for future concepts; separate from exam frequency",
    "exam_non_specialist": "Observed in dated official non-specialist exam corpus only",
    "exam_specialist": "Observed in separate dated specialist exam corpus only",
    "frequency": "unverified until exam corpus and counting method are recorded"
  },
  "safety": {
    "existing_tag_ids": "immutable_pending_review",
    "learner_history": "preserve",
    "graph_edges": "no_unreviewed_auto_prerequisites",
    "website_runtime": "unchanged"
  },
  "question_level_verification": {
    "status": "complete_for_declared_sources",
    "audits": [
      "docs/assets/data/curriculum/review-question-audit-04-05.json",
      "docs/assets/data/curriculum/review-question-audit-06-07.json",
      "docs/assets/data/curriculum/review-question-audit-08-09.json",
      "docs/assets/data/curriculum/review-question-audit-10-11.json",
      "docs/assets/data/curriculum/review-question-audit-12-13.json",
      "docs/assets/data/curriculum/review-question-audit-14-15.json",
      "docs/assets/data/curriculum/review-question-audit-16-17.json",
      "docs/assets/data/curriculum/review-question-audit-18.json",
      "docs/assets/data/curriculum/review-question-audit-19-20.json",
      "docs/assets/data/curriculum/review-question-audit-21-22.json",
      "docs/assets/data/curriculum/review-question-audit-23-24.json",
      "docs/assets/data/curriculum/review-question-audit-25.json"
    ],
    "source_file_count": 99,
    "actual_question_count": 2874,
    "declared_question_count": 2874,
    "skill_question_assignments": 3414,
    "unique_tag_ids_observed": 346,
    "unknown_question_skill_tags": 0,
    "declared_but_unused_skills": 0,
    "questions_missing_skill_tag": 0,
    "duplicate_question_ids_within_topic": 0,
    "question_count_mismatches": 0,
    "scope_limit": "Syntactic/inventory checks only; do not infer mathematical correctness, distinctness, exam frequency or global question ID uniqueness."
  }
}
```

## H. Danh mục mã và nhãn từ 22 manifest CĐ04–25 (không chứa toàn văn 2.874 câu)

### 04-bieu-thuc-dai-so — 132 câu khai báo · manifest `bd0ebbfa60402d321d06f7ca6195e56d67f589bb`
`nhan-biet-don-thuc`: Nhận biết đơn thức; `nhan-biet-da-thuc`: Nhận biết đa thức; `he-so-bac`: Hệ số và bậc; `hang-tu-dong-dang`: Hạng tử đồng dạng; `thu-gon-da-thuc`: Thu gọn đa thức; `cong-tru-da-thuc`: Cộng – trừ đa thức; `bo-ngoac-dau`: Bỏ ngoặc và dấu; `nhan-bieu-thuc`: Nhân biểu thức; `tinh-phan-phoi`: Tính phân phối; `tinh-gia-tri-bieu-thuc`: Tính giá trị biểu thức; `dieu-kien-xac-dinh`: Điều kiện xác định; `bien-doi-nhieu-buoc`: Biến đổi nhiều bước; `lap-bieu-thuc`: Lập biểu thức; `bai-toan-thuc-te`: Bài toán thực tế; `chia-da-thuc-cho-don-thuc`: Chia đa thức cho đơn thức

### 05-7-hang-dang-thuc — 120 câu khai báo · manifest `f77d823b03395452aa8f722c9a0f2fd919e47c99`
`binh-phuong-tong`: Bình phương của một tổng; `binh-phuong-hieu`: Bình phương của một hiệu; `hieu-hai-binh-phuong`: Hiệu hai bình phương; `lap-phuong-tong`: Lập phương của một tổng; `lap-phuong-hieu`: Lập phương của một hiệu; `tong-hai-lap-phuong`: Tổng hai lập phương; `hieu-hai-lap-phuong`: Hiệu hai lập phương; `nhan-dang-hdt`: Nhận dạng cấu trúc hằng đẳng thức; `binh-phuong-hoan-chinh`: Nhận dạng bình phương hoàn chỉnh; `nhan-dang-lap-phuong`: Nhận dạng cấu trúc lập phương; `phan-tich-hdt`: Phân tích biểu thức bằng hằng đẳng thức; `tinh-nhanh-hdt`: Tính nhanh bằng hằng đẳng thức; `rut-gon-hdt`: Rút gọn bằng hằng đẳng thức; `chung-minh-hdt`: Chứng minh đẳng thức; `giai-phuong-trinh-hdt`: Giải phương trình bằng hằng đẳng thức

### 06-phan-tich-da-thuc — 120 câu khai báo · manifest `2a4cb1d6492a3c1f66f7111035fab989a9a7f055`
`nhan-tu-chung`: Đặt nhân tử chung; `doi-dau-nhan-tu-chung`: Đổi dấu để tạo nhân tử chung; `hieu-hai-binh-phuong`: Hiệu hai bình phương; `binh-phuong-hoan-chinh`: Bình phương hoàn chỉnh; `tong-hieu-lap-phuong`: Tổng – hiệu hai lập phương; `nhom-hang-tu`: Nhóm hạng tử; `tach-hang-tu-giua`: Tách hạng tử giữa; `phoi-hop-phuong-phap`: Phối hợp nhiều phương pháp; `kiem-tra-phan-tich`: Kiểm tra kết quả phân tích; `giai-pt-bang-nhan-tu`: Giải phương trình bằng nhân tử; `ung-dung-phan-tich`: Vận dụng phân tích nhân tử

### 07-phan-thuc-dai-so — 120 câu khai báo · manifest `5939cac274f5133c474423b949340d136e976e5d`
`nhan-biet-phan-thuc`: Nhận biết phân thức; `dieu-kien-xac-dinh`: Điều kiện xác định; `hai-phan-thuc-bang-nhau`: Hai phân thức bằng nhau; `doi-dau-phan-thuc`: Đổi dấu phân thức; `phan-tich-tu-mau`: Phân tích tử và mẫu; `rut-gon-phan-thuc`: Rút gọn phân thức; `giu-dieu-kien-ban-dau`: Giữ điều kiện xác định ban đầu; `quy-dong-mau-thuc`: Quy đồng mẫu thức; `cong-tru-phan-thuc`: Cộng – trừ phân thức; `nhan-phan-thuc`: Nhân phân thức; `chia-phan-thuc`: Chia phân thức; `bieu-thuc-nhieu-phep-tinh`: Biểu thức hữu tỉ nhiều phép tính; `tinh-gia-tri-phan-thuc`: Tính giá trị phân thức; `tim-gia-tri-nguyen`: Tìm giá trị nguyên

### 08-phuong-trinh-bat-phuong-trinh — 132 câu khai báo · manifest `2c6da84472485b3f13805785cd3ff9f039dace13`
`nghiem-phuong-trinh`: Khái niệm nghiệm phương trình; `pt-bac-nhat`: Phương trình bậc nhất; `bien-doi-pt-nhieu-buoc`: Biến đổi phương trình nhiều bước; `pt-tich`: Phương trình tích; `dkxd-phuong-trinh-mau`: Điều kiện xác định phương trình chứa mẫu; `khu-mau-phuong-trinh`: Khử mẫu và giải phương trình; `doi-chieu-nghiem`: Đối chiếu nghiệm với điều kiện; `bpt-bac-nhat`: Bất phương trình bậc nhất; `doi-chieu-bpt`: Đổi chiều bất phương trình; `bieu-dien-tap-nghiem`: Biểu diễn tập nghiệm; `giao-tap-nghiem`: Giao các tập nghiệm; `lap-phuong-trinh`: Lập phương trình từ bài toán; `lap-bat-phuong-trinh`: Lập bất phương trình từ bài toán; `tham-so-co-ban`: Biện luận tham số cơ bản; `bat-dang-thuc`: Khái niệm bất đẳng thức; `tinh-chat-thu-tu-phep-cong`: Tính chất thứ tự với phép cộng; `tinh-chat-thu-tu-phep-nhan`: Tính chất thứ tự với phép nhân

### 09-he-phuong-trinh — 120 câu khai báo · manifest `55d912926602a532120e13f7ef7cb38e720103fd`
`nghiem-pt-hai-an`: Nghiệm của phương trình bậc nhất hai ẩn; `nghiem-he`: Nghiệm của hệ phương trình; `so-nghiem-he`: Số nghiệm của hệ; `y-nghia-hinh-hoc`: Ý nghĩa hình học của hệ; `giai-he-the`: Giải hệ bằng phương pháp thế; `giai-he-cong`: Giải hệ bằng cộng đại số; `chon-phuong-phap`: Chọn phương pháp giải phù hợp; `bien-doi-truoc-giai`: Biến đổi hệ trước khi giải; `kiem-tra-nghiem-he`: Kiểm tra nghiệm của hệ; `tham-so-he`: Hệ phương trình có tham số; `lap-he-bai-toan`: Lập hệ từ bài toán; `bai-toan-so`: Bài toán về số; `chuyen-dong-he`: Bài toán chuyển động; `nang-suat-he`: Bài toán năng suất – giá trị

### 10-ham-so-do-thi — 120 câu khai báo · manifest `15f7acaa8eb46c2775bb495f1d8dd03e4957dd7c`
`khai-niem-ham-so`: Khái niệm hàm số; `tinh-gia-tri-ham`: Tính giá trị hàm số; `bang-gia-tri`: Bảng giá trị; `toa-do-diem`: Tọa độ điểm; `diem-thuoc-do-thi`: Điểm thuộc đồ thị; `nhan-biet-ham-bac-nhat`: Nhận biết hàm số bậc nhất; `he-so-goc`: Hệ số góc; `tung-do-goc`: Tung độ gốc; `dong-nghich-bien`: Đồng biến – nghịch biến; `ve-do-thi-ham-bac-nhat`: Vẽ đồ thị hàm số bậc nhất; `vi-tri-hai-duong-thang`: Vị trí tương đối hai đường thẳng; `giao-diem-do-thi`: Giao điểm hai đồ thị; `lien-he-he-phuong-trinh`: Liên hệ với hệ phương trình; `ham-y-ax2`: Hàm số y = ax²; `doi-xung-parabol`: Tính đối xứng và hướng mở parabol; `diem-thuoc-parabol`: Điểm thuộc parabol

### 11-can-thuc — 132 câu khai báo · manifest `8cac7a5ce97010089c30d5bea25f3f3030c6a043`
`can-bac-hai-so-hoc`: Căn bậc hai số học; `dkxd-can`: Điều kiện xác định của căn thức; `can-binh-phuong`: Căn của bình phương và giá trị tuyệt đối; `khai-phuong-tich`: Khai phương một tích; `khai-phuong-thuong`: Khai phương một thương; `dua-thua-so-ra`: Đưa thừa số ra ngoài dấu căn; `dua-thua-so-vao`: Đưa thừa số vào trong dấu căn; `can-dong-dang`: Cộng trừ căn đồng dạng; `nhan-chia-can`: Nhân chia căn thức; `truc-can-mau-don`: Trục căn thức ở mẫu dạng đơn; `truc-can-lien-hop`: Trục căn thức bằng liên hợp; `tim-x-can`: Tìm x trong phương trình chứa căn; `so-sanh-can`: So sánh biểu thức căn; `can-bac-ba`: Căn bậc ba

### 12-phuong-trinh-bac-hai-viete — 120 câu khai báo · manifest `e0c0fa4ae80b2b5d88a44e6505f090c1d7843aa3`
`nhan-dang-pt-bac-hai`: Nhận dạng phương trình bậc hai; `he-so-abc`: Xác định hệ số a, b, c; `tinh-delta`: Tính biệt thức Δ; `so-nghiem-delta`: Số nghiệm theo Δ; `cong-thuc-nghiem`: Công thức nghiệm; `delta-phay`: Công thức nghiệm thu gọn Δ'; `giai-pt-bac-hai`: Giải phương trình bậc hai; `nham-nghiem`: Nhẩm nghiệm; `tham-so-so-nghiem`: Tham số và số nghiệm; `tong-tich-nghiem`: Tổng – tích nghiệm theo Viète; `bieu-thuc-doi-xung`: Biểu thức đối xứng theo nghiệm; `lap-pt-tu-nghiem`: Lập phương trình từ nghiệm; `dau-nghiem`: Xét dấu hai nghiệm; `lien-he-do-thi`: Liên hệ nghiệm với đồ thị

### 13-goc-va-duong-thang — 156 câu khai báo · manifest `4b6a44701d6fe413e333349a799aaa7911390b70`
`diem-thuoc-duong`: Điểm thuộc / không thuộc đường thẳng; `tia-doi`: Hai tia đối nhau; `trung-diem`: Trung điểm đoạn thẳng; `phan-loai-goc`: Phân loại góc; `goc-phu-bu`: Góc phụ nhau – bù nhau; `tia-phan-giac`: Tia phân giác; `goc-doi-dinh`: Góc đối đỉnh; `duong-vuong-goc`: Hai đường thẳng vuông góc; `goc-so-le-trong`: Góc so le trong; `goc-dong-vi`: Góc đồng vị; `goc-trong-cung-phia`: Góc trong cùng phía; `tinh-chat-song-song`: Tính chất hai đường thẳng song song; `dau-hieu-song-song`: Dấu hiệu nhận biết song song; `vuong-goc-song-song`: Quan hệ vuông góc – song song; `diem-nam-giua`: Điểm nằm giữa hai điểm; `tia`: Khái niệm tia; `doan-thang-do-dai`: Đoạn thẳng và độ dài; `khai-niem-goc`: Khái niệm góc; `do-goc`: Số đo góc; `nhan-dang-goc-dac-biet`: Nhận dạng góc ở vị trí đặc biệt; `tien-de-euclid`: Tiên đề Euclid; `gia-thiet-ket-luan`: Giả thiết – kết luận; `lap-luan-chung-minh-ngan`: Lập luận chứng minh ngắn

### 14-tam-giac — 140 câu khai báo · manifest `ee2c1dae38314e8dd220a20a106ba227f26aa9c2`
`phan-loai-tam-giac`: Phân loại tam giác; `chu-vi-dien-tich`: Chu vi – diện tích tam giác; `tong-goc-tam-giac`: Tổng ba góc trong tam giác; `goc-ngoai`: Góc ngoài của tam giác; `so-sanh-canh-goc`: Quan hệ cạnh – góc đối diện; `bat-dang-thuc-tam-giac`: Bất đẳng thức tam giác; `tam-giac-can`: Tam giác cân; `tam-giac-deu`: Tam giác đều; `pythagore`: Định lý Pythagore; `pythagore-dao`: Định lý Pythagore đảo; `bang-nhau-ccc`: Hai tam giác bằng nhau c.c.c; `bang-nhau-cgc`: Hai tam giác bằng nhau c.g.c; `bang-nhau-gcg`: Hai tam giác bằng nhau g.c.g; `bang-nhau-tam-giac-vuong`: Bằng nhau của hai tam giác vuông; `viet-tuong-ung-tam-giac-bang-nhau`: Viết đúng thứ tự tương ứng của hai tam giác bằng nhau; `nhan-biet-trung-truc`: Nhận biết đường trung trực; `cach-deu-dinh`: Điểm cách đều hai đầu mút; `tinh-chat-duong-trung-truc`: Tính chất và dấu hiệu đường trung trực; `duong-vuong-goc-duong-xien`: Đường vuông góc và đường xiên

### 15-duong-dong-quy — 124 câu khai báo · manifest `37fc0edeed7de731a34fc0ccacccfc735d29f985`
`nhan-biet-trung-tuyen`: Nhận biết đường trung tuyến; `trong-tam`: Trọng tâm; `ti-so-trong-tam`: Tỉ số trọng tâm 2 : 1; `nhan-biet-duong-cao`: Nhận biết đường cao; `truc-tam`: Trực tâm; `vi-tri-truc-tam`: Vị trí trực tâm; `nhan-biet-phan-giac`: Nhận biết đường phân giác; `tam-noi-tiep`: Tâm nội tiếp; `cach-deu-canh`: Tính chất cách đều ba cạnh; `nhan-biet-trung-truc`: Nhận biết đường trung trực; `tam-ngoai-tiep`: Tâm ngoại tiếp; `cach-deu-dinh`: Tính chất cách đều ba đỉnh; `vi-tri-tam-ngoai-tiep`: Vị trí tâm ngoại tiếp; `phan-biet-bon-tam`: Phân biệt G – H – I – O; `dong-quy-bon-duong-dac-biet`: Tính đồng quy của bốn họ đường đặc biệt

### 16-tu-giac — 120 câu khai báo · manifest `e63b621e30628616f559a3fd7518f0c90a3e5ed6`
`tong-goc-tu-giac`: Tổng các góc trong tứ giác; `hinh-thang`: Hình thang; `hinh-thang-can`: Hình thang cân; `hbh-tinh-chat`: Tính chất hình bình hành; `hbh-dau-hieu`: Dấu hiệu hình bình hành; `hcn-tinh-chat`: Tính chất hình chữ nhật; `hcn-dau-hieu`: Dấu hiệu hình chữ nhật; `hthoi-tinh-chat`: Tính chất hình thoi; `hthoi-dau-hieu`: Dấu hiệu hình thoi; `hvuong-tinh-chat`: Tính chất hình vuông; `hvuong-dau-hieu`: Dấu hiệu hình vuông; `quan-he-bao-ham`: Quan hệ bao hàm giữa các tứ giác đặc biệt; `duong-cheo-suy-luan`: Suy luận từ tính chất đường chéo

### 17-thales-dong-dang — 132 câu khai báo · manifest `3295479db8646dd050ddd7854f116dd9cc7c3b1b`
`thales-thuan`: Thales thuận; `thales-dao`: Thales đảo; `ti-le-doan-thang`: Tỉ lệ các đoạn thẳng; `duong-trung-binh`: Đường trung bình tam giác; `nhan-biet-dong-dang`: Nhận biết tam giác đồng dạng; `dong-dang-gg`: Đồng dạng g-g; `dong-dang-cgc`: Đồng dạng c-g-c; `dong-dang-ccc`: Đồng dạng c-c-c; `thu-tu-tuong-ung`: Thứ tự đỉnh tương ứng; `tinh-do-dai-dong-dang`: Tính độ dài bằng đồng dạng; `ti-so-chu-vi`: Tỉ số chu vi; `ti-so-dien-tich`: Tỉ số diện tích; `he-thuc-tich`: Hệ thức tích từ đồng dạng; `ket-hop-song-song-dong-dang`: Kết hợp song song – đồng dạng; `tinh-chat-duong-phan-giac`: Tính chất đường phân giác trong tam giác; `hinh-dong-dang`: Hình đồng dạng

### 18-he-thuc-luong — 132 câu khai báo · manifest `3a38cd8de28b455796326c8af30186742aba700a`
`pythagore`: Định lý Pythagore; `pythagore-dao`: Pythagore đảo; `canh-huyen`: Cạnh huyền – cạnh góc vuông; `he-thuc-canh`: Hệ thức cạnh góc vuông; `he-thuc-duong-cao`: Hệ thức đường cao; `dien-tich-duong-cao`: Diện tích và đường cao; `doi-ke-huyen`: Nhận biết cạnh đối – kề – huyền; `sin`: Tỉ số sin; `cos`: Tỉ số cos; `tan`: Tỉ số tan; `tim-canh-luong-giac`: Tìm cạnh bằng lượng giác; `tim-goc-luong-giac`: Tìm góc bằng lượng giác; `goc-nang-ha`: Góc nâng – góc hạ; `chieu-cao-khoang-cach`: Chiều cao – khoảng cách; `ket-hop-he-thuc`: Kết hợp hệ thức lượng; `cot`: Tỉ số cot

### 19-duong-tron — 147 câu khai báo · manifest `4529bf3a748257eed515cf4e7781e4cfc6c13db4`
`goc-o-tam`: Góc ở tâm; `goc-noi-tiep`: Góc nội tiếp; `nua-duong-tron`: Góc chắn nửa đường tròn; `day-va-tam`: Dây và khoảng cách đến tâm; `tiep-tuyen-ban-kinh`: Tiếp tuyến và bán kính; `hai-tiep-tuyen`: Hai tiếp tuyến từ một điểm; `tu-giac-noi-tiep`: Tứ giác nội tiếp; `dau-hieu-noi-tiep`: Dấu hiệu nội tiếp; `hai-day-cat-nhau`: Hai dây cắt nhau; `tiep-tuyen-cat-tuyen`: Tiếp tuyến – cát tuyến; `chung-minh-tiep-tuyen`: Chứng minh tiếp tuyến; `goc-cung`: Góc và cung tổng hợp; `do-dai-duong-tron`: Hệ thức độ dài trong đường tròn; `cung-va-day`: Quan hệ cung và dây; `do-dai-cung`: Độ dài cung; `dien-tich-quat-tron`: Diện tích quạt tròn; `dien-tich-vanh-khuyen`: Diện tích vành khuyên; `vi-tri-tuong-doi-duong-thang-duong-tron`: Vị trí tương đối đường thẳng – đường tròn; `vi-tri-tuong-doi-hai-duong-tron`: Vị trí tương đối hai đường tròn; `duong-tron-ngoai-tiep-tam-giac`: Đường tròn ngoại tiếp tam giác; `duong-tron-noi-tiep-tam-giac`: Đường tròn nội tiếp tam giác; `da-giac-deu`: Đa giác đều

### 20-hinh-hoc-tong-hop — 195 câu khai báo · manifest `7fc4157bd2e56fa243b428ef0949583c589a3eb9`
`nhan-dang-cong-cu`: Nhận dạng công cụ; `song-song-dong-dang`: Song song → đồng dạng; `hai-goc-vuong-noi-tiep`: Hai góc vuông → nội tiếp; `noi-tiep-dong-dang`: Nội tiếp → đồng dạng; `dong-dang-he-thuc-tich`: Đồng dạng → hệ thức tích; `tam-giac-vuong-dong-dang`: Đồng dạng trong tam giác vuông; `tiep-tuyen-chung-minh`: Chứng minh tiếp tuyến; `chuoi-suy-luan`: Chuỗi suy luận hình học; `the-tich-hop-chu-nhat`: Thể tích hình hộp chữ nhật; `the-tich-lang-tru`: Thể tích lăng trụ đứng; `dien-tich-day`: Diện tích đáy; `doi-don-vi-do-luong`: Đổi đơn vị đo lường; `bai-toan-tong-hop`: Bài toán tổng hợp; `nhan-biet-tam-giac-deu`: Nhận biết tam giác đều; `nhan-biet-hinh-vuong`: Nhận biết hình vuông; `nhan-biet-luc-giac-deu`: Nhận biết lục giác đều; `nhan-biet-tu-giac-dac-biet`: Nhận biết tứ giác đặc biệt; `chu-vi-tu-giac`: Chu vi tứ giác; `dien-tich-tu-giac`: Diện tích tứ giác; `do-luong-thuc-te`: Đo lường thực tế; `truc-doi-xung`: Trục đối xứng; `tam-doi-xung`: Tâm đối xứng; `nhan-biet-hinh-hop-lap-phuong`: Nhận biết hình hộp chữ nhật và lập phương; `dien-tich-xung-quanh-hop-chu-nhat`: Diện tích xung quanh hình hộp chữ nhật; `nhan-biet-lang-tru-dung`: Nhận biết lăng trụ đứng; `dien-tich-xung-quanh-lang-tru`: Diện tích xung quanh lăng trụ đứng; `nhan-biet-hinh-chop-deu`: Nhận biết hình chóp đều; `dien-tich-xung-quanh-hinh-chop`: Diện tích xung quanh hình chóp đều; `the-tich-hinh-chop`: Thể tích hình chóp; `nhan-biet-hinh-tru`: Nhận biết hình trụ; `dien-tich-xung-quanh-hinh-tru`: Diện tích xung quanh hình trụ; `the-tich-hinh-tru`: Thể tích hình trụ; `nhan-biet-hinh-non`: Nhận biết hình nón; `dien-tich-xung-quanh-hinh-non`: Diện tích xung quanh hình nón; `the-tich-hinh-non`: Thể tích hình nón; `nhan-biet-hinh-cau`: Nhận biết hình cầu; `dien-tich-mat-cau`: Diện tích mặt cầu; `the-tich-hinh-cau`: Thể tích hình cầu

### 21-thong-ke — 132 câu khai báo · manifest `3d88c1ce48ac1129648980de3f0544e6024251b9`
`du-lieu-phan-loai`: Dữ liệu và phân loại dữ liệu; `thu-thap-du-lieu`: Thu thập dữ liệu; `kiem-tra-chat-luong`: Kiểm tra chất lượng dữ liệu; `mau-thien-lech`: Nhận biết mẫu thiên lệch; `bang-tan-so`: Bảng tần số; `tan-suat`: Tần suất và phần trăm; `doc-bieu-do-cot`: Đọc biểu đồ cột; `doc-bieu-do-doan-thang`: Đọc biểu đồ đoạn thẳng; `chon-bieu-do`: Chọn dạng biểu diễn; `chuyen-bang-bieu-do`: Chuyển đổi bảng – biểu đồ; `nhan-xet-du-lieu`: Nhận xét và kết luận từ dữ liệu; `don-vi-thang-do`: Đơn vị và thang đo; `doc-bieu-do-cot-kep`: Đọc và so sánh biểu đồ cột kép; `bieu-do-quat-tron`: Biểu đồ hình quạt tròn; `du-lieu-ghep-nhom`: Dữ liệu và tần số ghép nhóm

### 22-dai-luong-dac-trung — 120 câu khai báo · manifest `bb7c8f353100ae8b1a55b56cd103e8ec820d0d6c`
`trung-binh-tho`: Số trung bình từ dữ liệu thô; `trung-binh-tan-so`: Số trung bình từ bảng tần số; `trung-vi`: Trung vị; `mot`: Mốt; `nhieu-mot`: Nhiều mốt và không có mốt nổi bật; `khoang-bien-thien`: Khoảng biến thiên; `ngoai-lai`: Ảnh hưởng của giá trị ngoại lai; `so-sanh-trung-binh-trung-vi`: So sánh trung bình và trung vị; `chon-dai-luong`: Chọn đại lượng đại diện; `so-sanh-hai-bo`: So sánh hai bộ dữ liệu

### 23-xac-suat — 120 câu khai báo · manifest `7b936f2e5a01ce0937fc2cfd6ae391d4cbf741fb`
`phep-thu-ngau-nhien`: Phép thử ngẫu nhiên; `khong-gian-mau`: Không gian mẫu; `bien-co`: Biến cố; `bien-co-chac-chan-khong-the`: Biến cố chắc chắn và không thể; `xac-suat-co-dien`: Xác suất cổ điển; `bien-co-doi`: Biến cố đối; `dong-xu-nhieu-lan`: Đồng xu nhiều lần; `xuc-xac-hai-lan`: Hai xúc xắc; `so-do-cay`: Sơ đồ cây; `nhieu-buoc-doc-lap`: Thí nghiệm nhiều bước độc lập; `khong-hoan-lai`: Rút không hoàn lại; `kiem-tra-xac-suat`: Kiểm tra tính hợp lý của xác suất; `xac-suat-thuc-nghiem`: Xác suất thực nghiệm và tần số tương đối

### 24-bai-toan-thuc-te — 120 câu khai báo · manifest `52eb0407dd2ee8876e59ef77959fcac64d00379b`
`doc-de-du-kien`: Đọc đề và xác định đại lượng; `doi-don-vi`: Đổi và thống nhất đơn vị; `chuyen-dong`: Bài toán chuyển động; `nang-suat`: Bài toán năng suất; `phan-tram`: Bài toán phần trăm; `lap-phuong-trinh`: Lập phương trình thực tế; `lap-he`: Lập hệ phương trình thực tế; `hinh-hoc-do-luong`: Hình học và đo lường thực tế; `luong-giac-thuc-te`: Lượng giác trong thực tế; `thong-ke-thuc-te`: Thống kê trong tình huống thực tế; `xac-suat-thuc-te`: Xác suất trong tình huống thực tế; `kiem-tra-ket-luan`: Kiểm tra nghiệm, đơn vị và kết luận

### 25-tong-hop-on-thi-10 — 120 câu khai báo · manifest `b3e698e3cb3cffc6e42b2f180f70e4a458e070cf`
`nhan-dien-chuyen-de`: Nhận diện chuyên đề và công cụ; `on-thi-bieu-thuc-can`: Ôn biểu thức và căn thức; `on-thi-phuong-trinh`: Ôn phương trình và bất phương trình; `on-thi-he`: Ôn hệ phương trình; `on-thi-ham-so`: Ôn hàm số và đồ thị; `on-thi-hinh-hoc`: Ôn hình học trọng tâm; `on-thi-thong-ke`: Ôn thống kê; `on-thi-xac-suat`: Ôn xác suất; `on-thi-mo-hinh-hoa`: Ôn bài toán thực tế; `quan-ly-thoi-gian`: Quản lý thời gian làm bài; `phan-loai-loi`: Phân loại và sửa lỗi; `checklist-chua-de`: Checklist chữa đề và kế hoạch ôn

## I. Knowledge Graph chọn lọc 41 node; không phải danh mục kỹ năng cuối cùng

```json
{
  "version": 1.2,
  "status": "independently-reviewed",
  "purpose": "Skill-level prerequisite/unlock graph across the 25-topic Vertical Spine. Grade mappings are overlays; remediation is advisory.",
  "policies": {
    "prerequisite": "A prerequisite is knowledge materially required to execute the target skill, not merely a related earlier topic.",
    "cross_link": "Pedagogically useful associations that are not required dependencies stay outside prerequisite edges.",
    "mastery": "soft",
    "remediation": "recommend-only; never hard-lock progression",
    "challenge": "Specialized-Challenge nodes must never be Core prerequisites.",
    "confidence": "Only high-confidence edges are active in v1; uncertain edges require review.",
    "topic_links": "Blueprint topic Before/After links are navigation only; never auto-convert to skill prerequisites.",
    "alternative_methods": "Alternative solving methods and conditional techniques must not each become unconditional prerequisites."
  },
  "nodes": {
    "nhan-tu-chung": {
      "topic": "06-phan-tich-da-thuc",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "hieu-hai-binh-phuong": {
      "topic": "06-phan-tich-da-thuc",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "phan-tich-tu-mau": {
      "topic": "07-phan-thuc-dai-so",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "rut-gon-phan-thuc": {
      "topic": "07-phan-thuc-dai-so",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "quy-dong-mau-thuc": {
      "topic": "07-phan-thuc-dai-so",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "dkxd-phuong-trinh-mau": {
      "topic": "08-phuong-trinh-bat-phuong-trinh",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "khu-mau-phuong-trinh": {
      "topic": "08-phuong-trinh-bat-phuong-trinh",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "doi-chieu-nghiem": {
      "topic": "08-phuong-trinh-bat-phuong-trinh",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "pt-bac-nhat": {
      "topic": "08-phuong-trinh-bat-phuong-trinh",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "bien-doi-pt-nhieu-buoc": {
      "topic": "08-phuong-trinh-bat-phuong-trinh",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "nghiem-pt-hai-an": {
      "topic": "09-he-phuong-trinh",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "giai-he-the": {
      "topic": "09-he-phuong-trinh",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "giai-he-cong": {
      "topic": "09-he-phuong-trinh",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "lap-he-bai-toan": {
      "topic": "09-he-phuong-trinh",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "khai-niem-ham-so": {
      "topic": "10-ham-so-do-thi",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "ve-do-thi-ham-bac-nhat": {
      "topic": "10-ham-so-do-thi",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "ham-y-ax2": {
      "topic": "10-ham-so-do-thi",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "can-bac-hai-so-hoc": {
      "topic": "11-can-thuc",
      "grades": [
        7,
        9
      ],
      "layer": "KNTT-Core"
    },
    "dkxd-can": {
      "topic": "11-can-thuc",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "tinh-delta": {
      "topic": "12-phuong-trinh-bac-hai-viete",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "cong-thuc-nghiem": {
      "topic": "12-phuong-trinh-bac-hai-viete",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "tong-tich-nghiem": {
      "topic": "12-phuong-trinh-bac-hai-viete",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "thales-thuan": {
      "topic": "17-thales-dong-dang",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "dong-dang-gg": {
      "topic": "17-thales-dong-dang",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "tinh-do-dai-dong-dang": {
      "topic": "17-thales-dong-dang",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "pythagore": {
      "topic": "18-he-thuc-luong",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    },
    "sin": {
      "topic": "18-he-thuc-luong",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "cos": {
      "topic": "18-he-thuc-luong",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "tan": {
      "topic": "18-he-thuc-luong",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "tim-canh-luong-giac": {
      "topic": "18-he-thuc-luong",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "goc-noi-tiep": {
      "topic": "19-duong-tron",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "tu-giac-noi-tiep": {
      "topic": "19-duong-tron",
      "grades": [
        9
      ],
      "layer": "KNTT-Core"
    },
    "xac-suat-thuc-nghiem": {
      "topic": "23-xac-suat",
      "grades": [
        6,
        8
      ],
      "layer": "KNTT-Core"
    },
    "bien-co": {
      "topic": "23-xac-suat",
      "grades": [
        8,
        9
      ],
      "layer": "KNTT-Core"
    },
    "xac-suat-co-dien": {
      "topic": "23-xac-suat",
      "grades": [
        8,
        9
      ],
      "layer": "KNTT-Core"
    },
    "ti-le-thuc": {
      "topic": "03-ti-le-ti-le-thuc",
      "grades": [
        7
      ],
      "layer": "KNTT-Core"
    },
    "hang-tu-dong-dang": {
      "topic": "04-bieu-thuc-dai-so",
      "grades": [
        7,
        8
      ],
      "layer": "KNTT-Core"
    },
    "thu-gon-da-thuc": {
      "topic": "04-bieu-thuc-dai-so",
      "grades": [
        7,
        8
      ],
      "layer": "KNTT-Core"
    },
    "bo-ngoac-dau": {
      "topic": "04-bieu-thuc-dai-so",
      "grades": [
        7,
        8
      ],
      "layer": "KNTT-Core"
    },
    "cong-tru-da-thuc": {
      "topic": "04-bieu-thuc-dai-so",
      "grades": [
        7,
        8
      ],
      "layer": "KNTT-Core"
    },
    "cong-tru-phan-thuc": {
      "topic": "07-phan-thuc-dai-so",
      "grades": [
        8
      ],
      "layer": "KNTT-Core"
    }
  },
  "edges": [
    {
      "from": "nhan-tu-chung",
      "to": "phan-tich-tu-mau",
      "type": "PREREQUISITE",
      "confidence": "high",
      "reason": "Factoring numerator/denominator requires recognizing common factors."
    },
    {
      "from": "hieu-hai-binh-phuong",
      "to": "phan-tich-tu-mau",
      "type": "PREREQUISITE",
      "confidence": "high",
      "reason": "Difference-of-squares is a core factorization pattern used in rational expressions."
    },
    {
      "from": "phan-tich-tu-mau",
      "to": "rut-gon-phan-thuc",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "phan-tich-tu-mau",
      "to": "quy-dong-mau-thuc",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "rut-gon-phan-thuc",
      "to": "khu-mau-phuong-trinh",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "quy-dong-mau-thuc",
      "to": "khu-mau-phuong-trinh",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "dkxd-phuong-trinh-mau",
      "to": "khu-mau-phuong-trinh",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "khu-mau-phuong-trinh",
      "to": "doi-chieu-nghiem",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "pt-bac-nhat",
      "to": "bien-doi-pt-nhieu-buoc",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "pt-bac-nhat",
      "to": "giai-he-the",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "pt-bac-nhat",
      "to": "giai-he-cong",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "nghiem-pt-hai-an",
      "to": "giai-he-the",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "nghiem-pt-hai-an",
      "to": "giai-he-cong",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "giai-he-the",
      "to": "lap-he-bai-toan",
      "type": "REMEDIATION",
      "confidence": "high",
      "reason": "Substitution is one possible solving method; it is not individually mandatory for constructing a system."
    },
    {
      "from": "giai-he-cong",
      "to": "lap-he-bai-toan",
      "type": "REMEDIATION",
      "confidence": "high",
      "reason": "Elimination is an alternative solving method; it is not individually mandatory for constructing a system."
    },
    {
      "from": "khai-niem-ham-so",
      "to": "ve-do-thi-ham-bac-nhat",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "khai-niem-ham-so",
      "to": "ham-y-ax2",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "can-bac-hai-so-hoc",
      "to": "dkxd-can",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "tinh-delta",
      "to": "cong-thuc-nghiem",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "cong-thuc-nghiem",
      "to": "tong-tich-nghiem",
      "type": "SEQUENCE",
      "confidence": "high",
      "reason": "Viète follows quadratic equations in the learning sequence, but does not require using the quadratic formula."
    },
    {
      "from": "dong-dang-gg",
      "to": "tinh-do-dai-dong-dang",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "pythagore",
      "to": "tim-canh-luong-giac",
      "type": "REMEDIATION",
      "confidence": "high",
      "reason": "Pythagoras is useful for missing-side cases, not every trigonometric side calculation."
    },
    {
      "from": "sin",
      "to": "tim-canh-luong-giac",
      "type": "REMEDIATION",
      "confidence": "high",
      "reason": "Use sine only when the chosen side-angle relation requires it; not all three ratios are mandatory."
    },
    {
      "from": "cos",
      "to": "tim-canh-luong-giac",
      "type": "REMEDIATION",
      "confidence": "high",
      "reason": "Use cosine only when the chosen side-angle relation requires it."
    },
    {
      "from": "tan",
      "to": "tim-canh-luong-giac",
      "type": "REMEDIATION",
      "confidence": "high",
      "reason": "Use tangent only when the chosen side-angle relation requires it."
    },
    {
      "from": "goc-noi-tiep",
      "to": "tu-giac-noi-tiep",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "bien-co",
      "to": "xac-suat-co-dien",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "xac-suat-thuc-nghiem",
      "to": "xac-suat-co-dien",
      "type": "REMEDIATION",
      "confidence": "high",
      "reason": "Useful conceptual bridge; not a logical prerequisite."
    },
    {
      "from": "can-bac-hai-so-hoc",
      "to": "cong-thuc-nghiem",
      "type": "PREREQUISITE",
      "confidence": "high",
      "reason": "Using the real quadratic formula requires evaluating sqrt(Delta); computing Delta itself does not."
    },
    {
      "from": "thales-thuan",
      "to": "dong-dang-gg",
      "type": "SEQUENCE",
      "confidence": "high",
      "reason": "Useful KNTT learning sequence, but Thales is not a logical prerequisite for executing angle-angle similarity."
    },
    {
      "from": "hang-tu-dong-dang",
      "to": "thu-gon-da-thuc",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "bo-ngoac-dau",
      "to": "cong-tru-da-thuc",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "quy-dong-mau-thuc",
      "to": "cong-tru-phan-thuc",
      "type": "PREREQUISITE",
      "confidence": "high"
    },
    {
      "from": "ti-le-thuc",
      "to": "thales-thuan",
      "type": "PREREQUISITE",
      "confidence": "high",
      "reason": "Using Thales numerically requires proportional relationships."
    },
    {
      "from": "ti-le-thuc",
      "to": "tinh-do-dai-dong-dang",
      "type": "PREREQUISITE",
      "confidence": "high",
      "reason": "Computing corresponding lengths in similar triangles uses proportions."
    }
  ]
}
```

## J. Hồ sơ 39 câu CĐ04–07: bối cảnh, KHÔNG audit toàn văn trong vòng B01

```json
{
  "summary": {
    "total": 39,
    "scoped_primary_candidate": 19,
    "formative_only_requires_new_evidence": 18,
    "extension_only_pending_layer_check": 2,
    "selected_candidate": 19,
    "runtime_enabled": 0,
    "core_readiness_credit": 0
  },
  "limits": [
    "19 scoped candidates are only eligible for a separately tested formative pilot, not mastery approval; answer correctness does not prove all intermediate methods.",
    "The 16 CĐ06 outputs propose one NEW focused assessment code phan-tich-da-thuc-hoan-toan. Its existing legacy tag phoi-hop-phuong-phap is not silently renamed; canonical ID and display label require explicit registry/review.",
    "4 CĐ05 proof MCQs, 8 CĐ06 application MCQs, and 6 CĐ07 repeated composite MCQs remain formative only. 2 CĐ07 integer-value questions await curricular tier review.",
    "No changes to legacy IDs, tags, Question Bank, learner localStorage or mastery evidence."
  ],
  "items": [
    {
      "question_id": "ALG04V2_009",
      "topic": "04-bieu-thuc-dai-so",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "source_blob_sha": "216a464a1935bd5d1d00147e9386eb2ee224f27b",
      "legacy_tags": [
        "nhan-biet-da-thuc"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "nhan-biet-da-thuc",
      "observable": "Chọn đúng hạng tử không chứa biến trong một đa thức đã cho.",
      "does_not_establish": [
        "Nhận biết đầy đủ mọi thành phần đa thức",
        "Thành thạo thu gọn đa thức"
      ]
    },
    {
      "question_id": "ALG04V2_010",
      "topic": "04-bieu-thuc-dai-so",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "source_blob_sha": "216a464a1935bd5d1d00147e9386eb2ee224f27b",
      "legacy_tags": [
        "nhan-biet-don-thuc",
        "he-so-bac"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "nhan-biet-don-thuc",
      "observable": "Chọn đúng phần biến của đơn thức có hệ số âm.",
      "does_not_establish": [
        "Xác định hệ số và bậc của đơn thức",
        "Thành thạo mọi dạng đơn thức"
      ]
    },
    {
      "question_id": "ID05V1_116",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "legacy_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ]
    },
    {
      "question_id": "ID05V1_117",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "legacy_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ]
    },
    {
      "question_id": "ID05V1_118",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "legacy_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ]
    },
    {
      "question_id": "ID05V1_119",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "legacy_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn thao tác khai triển hai bình phương và thu gọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ]
    },
    {
      "question_id": "ID05V1_120",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "legacy_tags": [
        "phan-tich-hdt",
        "hieu-hai-binh-phuong"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "hieu-hai-binh-phuong",
      "observable": "Chọn bước đầu đúng để tách x⁴−16 thành tích.",
      "does_not_establish": [
        "Phân tích hoàn toàn đa thức bậc bốn",
        "Thành thạo mọi HĐT"
      ]
    },
    {
      "question_id": "FAC06V1_077",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_078",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_079",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_080",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_081",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_082",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_083",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_084",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_085",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_086",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_087",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_088",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_089",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_090",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_091",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_092",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "candidate": "phan-tich-da-thuc-hoan-toan",
      "observable": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ]
    },
    {
      "question_id": "FAC06V1_113",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ]
    },
    {
      "question_id": "FAC06V1_114",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ]
    },
    {
      "question_id": "FAC06V1_115",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ]
    },
    {
      "question_id": "FAC06V1_116",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ]
    },
    {
      "question_id": "FAC06V1_117",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ]
    },
    {
      "question_id": "FAC06V1_118",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ]
    },
    {
      "question_id": "FAC06V1_119",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ]
    },
    {
      "question_id": "FAC06V1_120",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "legacy_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ]
    },
    {
      "question_id": "RAT07V1_109",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ]
    },
    {
      "question_id": "RAT07V1_110",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ]
    },
    {
      "question_id": "RAT07V1_111",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ]
    },
    {
      "question_id": "RAT07V1_112",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ]
    },
    {
      "question_id": "RAT07V1_113",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ]
    },
    {
      "question_id": "RAT07V1_114",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "candidate": null,
      "observable": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ]
    },
    {
      "question_id": "RAT07V1_119",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "tim-gia-tri-nguyen"
      ],
      "decision_status": "extension_only_pending_layer_check",
      "candidate": null,
      "observable": "Chọn tập x nguyên bằng cách xét ước của một số nguyên.",
      "does_not_establish": [
        "Đáp ứng Core Readiness chung",
        "Thành thạo mọi bài toán phân thức có tham số nguyên"
      ]
    },
    {
      "question_id": "RAT07V1_120",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "legacy_tags": [
        "tim-gia-tri-nguyen"
      ],
      "decision_status": "extension_only_pending_layer_check",
      "candidate": null,
      "observable": "Chọn tập x nguyên bằng cách xét ước của một số nguyên.",
      "does_not_establish": [
        "Đáp ứng Core Readiness chung",
        "Thành thạo mọi bài toán phân thức có tham số nguyên"
      ]
    }
  ]
}
```

## K. Yêu cầu kiểm định và output

1. Kiểm kê B01: 10 ID mẫu không trùng, 10 cặp, 8 mã đa chuyên đề, 41 node, 39 ca bối cảnh. Nếu thiếu, dừng và báo.
2. **10/10 cặp:** so sánh từng câu mẫu, phương án, giải thích, dữ liệu đồng-gắn và đề xuất pilot. Với mỗi cặp, xác định mục tiêu đo, assessed/support/method/context, có cần micro-test độc lập không, có bất đồng pilot không, giới hạn bằng chứng.
3. **8/8 mã đa chuyên đề:** xác định rủi ro mã trùng nghĩa/khác nghĩa, chỉ ra câu cần mở thêm. Không đủ toàn văn thì INSUFFICIENT_EVIDENCE, không tự gộp.
4. Graph: chỉ ra phụ thuộc sai hoặc thiếu quan trọng nếu có đủ căn cứ, Challenge không làm prerequisite Core; không yêu cầu tạo thêm node cho đủ 346.
5. Đề xuất tối đa năm thay đổi có lợi cho việc tự học thực sự; mô tả lộ trình QA trước khi đưa vào hệ thống, giữ dữ liệu cũ.
6. Output gồm bảng và JSON ngắn có `packet_id`, `source_sha`, `status: PROPOSAL_ONLY`, `reviewed_question_ids`, `pair_findings`, `collision_findings`, `missing_evidence`, `disagreements`; dùng PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE/NOT_REVIEWED theo đúng nghĩa.
7. Không cần xuất 346 dòng quyết định khi chỉ có nhãn; phải ghi rõ giới hạn. Nếu quá dài, chia phản hồi B01-A và B01-B mà không bỏ ID.

## L. Handoff cho Batch tiếp theo

B02 sẽ cung cấp full text 39 câu nguồn CĐ04–07 và các câu khác cần mở thêm; vòng chương trình/đề thi lấy đúng SGK hoặc corpus chính thức liên quan. Xong B01, xóa source B01 khỏi Notebook và nạp source mới, không giữ nhiều Batch cũ.