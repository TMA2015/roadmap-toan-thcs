# MATH-SKILL-TAXONOMY-B02-20260928 — 39 CÂU NGUỒN TOÀN VĂN, PHẢN BIỆN ĐỘC LẬP

**Loại:** nguồn tạm thời cho NotebookLM, không phải Master Plan. **Status:** REVIEW_REQUEST / PROPOSAL_ONLY. **GitHub source main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. **Ngày:** 28/09/2026.

Chỉ cần chọn nguồn này cùng Master Plan Toán v1.1 và Notebook Math Permanent v1.1. Không tải lại template; không chọn B01 hoặc chat Gemini cũ khi kiểm định B02.

## A. Phạm vi, bằng chứng và các giới hạn

- Phải đánh giá **đúng 39 câu** theo toàn văn đề–lựa chọn–đáp án–giải thích–tag lấy trực tiếp từ 5 tệp ngân hàng nguồn, không chỉ dựa vào nhận xét trước. Đợt này có 2 câu CĐ04, 5 câu CĐ05, 24 câu CĐ06, 8 câu CĐ07.
- Từng bản ghi gồm nguyên văn `source_bank_record`, ứng viên đề xuất `queue_proposals` và kết luận phân luồng nội bộ `previous_internal_triage`. Hai nhóm đề xuất KHÔNG PHẢI đáp án phản biện; phải phản biện độc lập.
- Kiểm tra tính đúng đắn toán học, tính duy nhất đáp án, giải thích có đủ điều kiện và lập luận hay không, chất lượng nhiễu, mức độ tương đồng giữa các câu và đích đo thực sự. Với bài nhiều bước, lựa chọn kết quả cuối chỉ chứng minh nhận diện đầu ra, không tự chứng minh thao tác trung gian.
- Không suy ra năng lực viết chứng minh từ câu trắc nghiệm chọn đẳng thức; không suy ra đã giải đầy đủ khi câu chỉ hỏi bước đầu. Phân biệt `assessed_skill`, `supporting_skill`, `method`, `context`, `category`, `extension`.
- Chưa đánh giá tần suất thi, Core toàn quốc hay tầng học chính thức của hai câu nguyên–phân thức khi chưa có chuẩn chương trình/SGK và tập đề chính thức được chọn. Ghi NEEDS_CURRICULUM_SOURCE nếu chưa đủ bằng chứng.
- Không đổi bất kỳ câu/ID/tag, không gộp hoặc chuyển các bộ đếm `localStorage`, không ghi đè runtime, không cộng mastery mới. Chỉ trả lại đề xuất có căn cứ.

## B. Danh sách nguồn đã khóa bằng Git blob SHA

| Đường dẫn nguồn | SHA |
|---|---|
| `docs/assets/data/curriculum/primary-skill-review-queue-04-05-v1.json` | `289e6f6c643a308ae6a0d255ce80fc7680a97846` |
| `docs/assets/data/curriculum/primary-skill-review-queue-06-07-v1.json` | `73d3bd84fcec987e40827cfe9dc228ab643b8441` |
| `docs/assets/data/curriculum/primary-skill-decision-register-39-v1.json` | `097701804f9de8966af027b72449c5f7fdda2fbe` |
| `docs/roadmap/skill-taxonomy-minimal-policy-v1.md` | `aa18eb40ac354d04e40aa645b17724a3824723ae` |
| `docs/assets/data/curriculum/review-snapshot-04-11.json` | `dc58cd013ea7070219319f2d0c2c0194020af3a1` |
| `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` | `216a464a1935bd5d1d00147e9386eb2ee224f27b` |
| `docs/assets/data/practice/05-7-hang-dang-thuc-v1-04.json` | `c1edbbe7eba0d144a32d54cb384eb1ec09f156c8` |
| `docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json` | `ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457` |
| `docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json` | `281e90b8c791d3047c4c0413a2fea58958bd2323` |
| `docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json` | `b1ba2cc3664cfc2cda13fdafe4655f744130c833` |

**Đã đối chiếu bằng chương trình trước khi đóng gói:** 39/39 ID duy nhất; từng bản ghi đúng nguyên văn bank về đề, thứ tự lựa chọn, đáp án (index), giải thích và tag; SHA nguồn khớp register.

## C. Danh sách ID bắt buộc và số lượng

```json
{
  "packet_id": "MATH-SKILL-TAXONOMY-B02-20260928",
  "source_sha": "88143e6b2690edfe721f8d74d2dbcb251bc55ab3",
  "expected_item_ids": [
    "ALG04V2_009",
    "ALG04V2_010",
    "ID05V1_116",
    "ID05V1_117",
    "ID05V1_118",
    "ID05V1_119",
    "ID05V1_120",
    "FAC06V1_077",
    "FAC06V1_078",
    "FAC06V1_079",
    "FAC06V1_080",
    "FAC06V1_081",
    "FAC06V1_082",
    "FAC06V1_083",
    "FAC06V1_084",
    "FAC06V1_085",
    "FAC06V1_086",
    "FAC06V1_087",
    "FAC06V1_088",
    "FAC06V1_089",
    "FAC06V1_090",
    "FAC06V1_091",
    "FAC06V1_092",
    "FAC06V1_113",
    "FAC06V1_114",
    "FAC06V1_115",
    "FAC06V1_116",
    "FAC06V1_117",
    "FAC06V1_118",
    "FAC06V1_119",
    "FAC06V1_120",
    "RAT07V1_109",
    "RAT07V1_110",
    "RAT07V1_111",
    "RAT07V1_112",
    "RAT07V1_113",
    "RAT07V1_114",
    "RAT07V1_119",
    "RAT07V1_120"
  ],
  "expected_count": 39,
  "by_topic": {
    "04-bieu-thuc-dai-so": 2,
    "05-7-hang-dang-thuc": 5,
    "06-phan-tich-da-thuc": 24,
    "07-phan-thuc-dai-so": 8
  },
  "prior_triage_summary": {
    "total": 39,
    "scoped_primary_candidate": 19,
    "formative_only_requires_new_evidence": 18,
    "extension_only_pending_layer_check": 2,
    "selected_candidate": 19,
    "runtime_enabled": 0,
    "core_readiness_credit": 0
  }
}
```

## D. Nguyên tắc phân loại tối thiểu đã có trong repository

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


## E. Nhãn/nhóm kỹ năng từ manifest CĐ04–07 (chỉ metadata, không là bằng chứng toán học từng câu)

```json
[
  {
    "topic": "04-bieu-thuc-dai-so",
    "manifest_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2.manifest.json",
    "manifest_sha": "bd0ebbfa60402d321d06f7ca6195e56d67f589bb",
    "skill_labels": {
      "nhan-biet-don-thuc": "Nhận biết đơn thức",
      "nhan-biet-da-thuc": "Nhận biết đa thức",
      "he-so-bac": "Hệ số và bậc",
      "hang-tu-dong-dang": "Hạng tử đồng dạng",
      "thu-gon-da-thuc": "Thu gọn đa thức",
      "cong-tru-da-thuc": "Cộng – trừ đa thức",
      "bo-ngoac-dau": "Bỏ ngoặc và dấu",
      "nhan-bieu-thuc": "Nhân biểu thức",
      "tinh-phan-phoi": "Tính phân phối",
      "tinh-gia-tri-bieu-thuc": "Tính giá trị biểu thức",
      "dieu-kien-xac-dinh": "Điều kiện xác định",
      "bien-doi-nhieu-buoc": "Biến đổi nhiều bước",
      "lap-bieu-thuc": "Lập biểu thức",
      "bai-toan-thuc-te": "Bài toán thực tế",
      "chia-da-thuc-cho-don-thuc": "Chia đa thức cho đơn thức"
    },
    "skill_groups": [
      {
        "id": "nhan-biet-cau-truc",
        "label": "A. Nhận biết cấu trúc",
        "skills": [
          "nhan-biet-don-thuc",
          "nhan-biet-da-thuc",
          "he-so-bac",
          "hang-tu-dong-dang"
        ]
      },
      {
        "id": "bien-doi-co-ban",
        "label": "B. Biến đổi cơ bản",
        "skills": [
          "thu-gon-da-thuc",
          "cong-tru-da-thuc",
          "bo-ngoac-dau"
        ]
      },
      {
        "id": "nhan-phan-phoi",
        "label": "C. Nhân, phân phối và chia cho đơn thức",
        "skills": [
          "nhan-bieu-thuc",
          "tinh-phan-phoi",
          "chia-da-thuc-cho-don-thuc"
        ]
      },
      {
        "id": "gia-tri-dieu-kien",
        "label": "D. Giá trị và điều kiện",
        "skills": [
          "tinh-gia-tri-bieu-thuc",
          "dieu-kien-xac-dinh"
        ]
      },
      {
        "id": "tong-hop-ung-dung",
        "label": "E. Tổng hợp và ứng dụng",
        "skills": [
          "bien-doi-nhieu-buoc",
          "lap-bieu-thuc",
          "bai-toan-thuc-te"
        ]
      }
    ]
  },
  {
    "topic": "05-7-hang-dang-thuc",
    "manifest_path": "docs/assets/data/practice/05-7-hang-dang-thuc-v1.manifest.json",
    "manifest_sha": "f77d823b03395452aa8f722c9a0f2fd919e47c99",
    "skill_labels": {
      "binh-phuong-tong": "Bình phương của một tổng",
      "binh-phuong-hieu": "Bình phương của một hiệu",
      "hieu-hai-binh-phuong": "Hiệu hai bình phương",
      "lap-phuong-tong": "Lập phương của một tổng",
      "lap-phuong-hieu": "Lập phương của một hiệu",
      "tong-hai-lap-phuong": "Tổng hai lập phương",
      "hieu-hai-lap-phuong": "Hiệu hai lập phương",
      "nhan-dang-hdt": "Nhận dạng cấu trúc hằng đẳng thức",
      "binh-phuong-hoan-chinh": "Nhận dạng bình phương hoàn chỉnh",
      "nhan-dang-lap-phuong": "Nhận dạng cấu trúc lập phương",
      "phan-tich-hdt": "Phân tích biểu thức bằng hằng đẳng thức",
      "tinh-nhanh-hdt": "Tính nhanh bằng hằng đẳng thức",
      "rut-gon-hdt": "Rút gọn bằng hằng đẳng thức",
      "chung-minh-hdt": "Chứng minh đẳng thức",
      "giai-phuong-trinh-hdt": "Giải phương trình bằng hằng đẳng thức"
    },
    "skill_groups": [
      {
        "id": "nhom-binh-phuong",
        "label": "A. Nhóm bình phương",
        "skills": [
          "binh-phuong-tong",
          "binh-phuong-hieu",
          "hieu-hai-binh-phuong"
        ]
      },
      {
        "id": "nhom-lap-phuong",
        "label": "B. Nhóm lập phương",
        "skills": [
          "lap-phuong-tong",
          "lap-phuong-hieu",
          "tong-hai-lap-phuong",
          "hieu-hai-lap-phuong"
        ]
      },
      {
        "id": "nhan-dang-hai-chieu",
        "label": "C. Nhận dạng hai chiều",
        "skills": [
          "nhan-dang-hdt",
          "binh-phuong-hoan-chinh",
          "nhan-dang-lap-phuong",
          "phan-tich-hdt"
        ]
      },
      {
        "id": "van-dung-hdt",
        "label": "D. Vận dụng hằng đẳng thức",
        "skills": [
          "tinh-nhanh-hdt",
          "rut-gon-hdt",
          "chung-minh-hdt",
          "giai-phuong-trinh-hdt"
        ]
      }
    ]
  },
  {
    "topic": "06-phan-tich-da-thuc",
    "manifest_path": "docs/assets/data/practice/06-phan-tich-da-thuc-v1.manifest.json",
    "manifest_sha": "2a4cb1d6492a3c1f66f7111035fab989a9a7f055",
    "skill_labels": {
      "nhan-tu-chung": "Đặt nhân tử chung",
      "doi-dau-nhan-tu-chung": "Đổi dấu để tạo nhân tử chung",
      "hieu-hai-binh-phuong": "Hiệu hai bình phương",
      "binh-phuong-hoan-chinh": "Bình phương hoàn chỉnh",
      "tong-hieu-lap-phuong": "Tổng – hiệu hai lập phương",
      "nhom-hang-tu": "Nhóm hạng tử",
      "tach-hang-tu-giua": "Tách hạng tử giữa",
      "phoi-hop-phuong-phap": "Phối hợp nhiều phương pháp",
      "kiem-tra-phan-tich": "Kiểm tra kết quả phân tích",
      "giai-pt-bang-nhan-tu": "Giải phương trình bằng nhân tử",
      "ung-dung-phan-tich": "Vận dụng phân tích nhân tử"
    },
    "skill_groups": [
      {
        "id": "A",
        "label": "A. Đặt nhân tử chung",
        "skills": [
          "nhan-tu-chung",
          "doi-dau-nhan-tu-chung"
        ]
      },
      {
        "id": "B",
        "label": "B. Dùng hằng đẳng thức",
        "skills": [
          "hieu-hai-binh-phuong",
          "binh-phuong-hoan-chinh",
          "tong-hieu-lap-phuong"
        ]
      },
      {
        "id": "C",
        "label": "C. Nhóm và tách hạng tử",
        "skills": [
          "nhom-hang-tu",
          "tach-hang-tu-giua"
        ]
      },
      {
        "id": "D",
        "label": "D. Phối hợp và vận dụng",
        "skills": [
          "phoi-hop-phuong-phap",
          "kiem-tra-phan-tich",
          "giai-pt-bang-nhan-tu",
          "ung-dung-phan-tich"
        ]
      }
    ]
  },
  {
    "topic": "07-phan-thuc-dai-so",
    "manifest_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1.manifest.json",
    "manifest_sha": "5939cac274f5133c474423b949340d136e976e5d",
    "skill_labels": {
      "nhan-biet-phan-thuc": "Nhận biết phân thức",
      "dieu-kien-xac-dinh": "Điều kiện xác định",
      "hai-phan-thuc-bang-nhau": "Hai phân thức bằng nhau",
      "doi-dau-phan-thuc": "Đổi dấu phân thức",
      "phan-tich-tu-mau": "Phân tích tử và mẫu",
      "rut-gon-phan-thuc": "Rút gọn phân thức",
      "giu-dieu-kien-ban-dau": "Giữ điều kiện xác định ban đầu",
      "quy-dong-mau-thuc": "Quy đồng mẫu thức",
      "cong-tru-phan-thuc": "Cộng – trừ phân thức",
      "nhan-phan-thuc": "Nhân phân thức",
      "chia-phan-thuc": "Chia phân thức",
      "bieu-thuc-nhieu-phep-tinh": "Biểu thức hữu tỉ nhiều phép tính",
      "tinh-gia-tri-phan-thuc": "Tính giá trị phân thức",
      "tim-gia-tri-nguyen": "Tìm giá trị nguyên"
    },
    "skill_groups": [
      {
        "id": "A",
        "label": "A. Khái niệm và điều kiện xác định",
        "skills": [
          "nhan-biet-phan-thuc",
          "dieu-kien-xac-dinh",
          "hai-phan-thuc-bang-nhau",
          "doi-dau-phan-thuc"
        ]
      },
      {
        "id": "B",
        "label": "B. Rút gọn phân thức",
        "skills": [
          "phan-tich-tu-mau",
          "rut-gon-phan-thuc",
          "giu-dieu-kien-ban-dau"
        ]
      },
      {
        "id": "C",
        "label": "C. Quy đồng và phép tính",
        "skills": [
          "quy-dong-mau-thuc",
          "cong-tru-phan-thuc",
          "nhan-phan-thuc",
          "chia-phan-thuc"
        ]
      },
      {
        "id": "D",
        "label": "D. Biểu thức hữu tỉ và vận dụng",
        "skills": [
          "bieu-thuc-nhieu-phep-tinh",
          "tinh-gia-tri-phan-thuc",
          "tim-gia-tri-nguyen"
        ]
      }
    ]
  }
]
```

## F. 04-bieu-thuc-dai-so — 2 câu toàn văn và hồ sơ quyết định trước

```json
[
  {
    "question_id": "ALG04V2_009",
    "topic": "04-bieu-thuc-dai-so",
    "question_source": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json",
    "source_blob_sha": "216a464a1935bd5d1d00147e9386eb2ee224f27b",
    "source_bank_record": {
      "id": "ALG04V2_009",
      "question": "Hạng tử tự do của \\(5x^2-4x+11\\) là gì?",
      "options": [
        "11",
        "5",
        "-4",
        "0"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "nhan-biet-da-thuc"
        ],
        "type": "nhan-biet-da-thuc"
      },
      "difficulty": "basic",
      "explanation": "Hạng tử tự do là hạng tử không chứa biến, ở đây là \\(11\\)."
    },
    "queue_proposals": {
      "proposed_assessed_skill": "nhan-biet-da-thuc",
      "flags": [
        "broad_label_free_term"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "nhan-biet-da-thuc",
      "learner_facing_scope_label": "Nhận biết cấu trúc đa thức (hạng tử tự do)",
      "observable_answer_evidence": "Chọn đúng hạng tử không chứa biến trong một đa thức đã cho.",
      "does_not_establish": [
        "Nhận biết đầy đủ mọi thành phần đa thức",
        "Thành thạo thu gọn đa thức"
      ],
      "review_next_action": "Thêm 2 dạng hạng tử tự do khác trước khi kết luận vững; không tạo skill độc lập chỉ cho hạng tử tự do.",
      "learner_remediation": "Phân biệt hạng tử chứa biến và hạng tử tự do.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "ALG04V2_010",
    "topic": "04-bieu-thuc-dai-so",
    "question_source": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json",
    "source_blob_sha": "216a464a1935bd5d1d00147e9386eb2ee224f27b",
    "source_bank_record": {
      "id": "ALG04V2_010",
      "question": "Phần biến của đơn thức \\(-8a^2b^5\\) là gì?",
      "options": [
        "\\(a^2b^5\\)",
        "\\(-8\\)",
        "\\(-8a^2\\)",
        "\\(a^7b\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "nhan-biet-don-thuc",
          "he-so-bac"
        ],
        "type": "nhan-biet-don-thuc"
      },
      "difficulty": "basic",
      "explanation": "Phần biến là \\(a^2b^5\\); \\(-8\\) là hệ số."
    },
    "queue_proposals": {
      "proposed_assessed_skill": "nhan-biet-don-thuc",
      "flags": [
        "tag_he_so_bac_not_actual_target"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "nhan-biet-don-thuc",
      "learner_facing_scope_label": "Nhận biết cấu trúc đơn thức (phần biến)",
      "observable_answer_evidence": "Chọn đúng phần biến của đơn thức có hệ số âm.",
      "does_not_establish": [
        "Xác định hệ số và bậc của đơn thức",
        "Thành thạo mọi dạng đơn thức"
      ],
      "review_next_action": "Không cộng bất cứ mastery nào cho he-so-bac; bổ sung ví dụ phần biến khác nếu đo ổn định.",
      "learner_remediation": "Tách hệ số -8 ra khỏi a²b⁵; luyện riêng hệ số/bậc.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  }
]
```

## G. 05-7-hang-dang-thuc — 5 câu toàn văn và hồ sơ quyết định trước

```json
[
  {
    "question_id": "ID05V1_116",
    "topic": "05-7-hang-dang-thuc",
    "question_source": "docs/assets/data/practice/05-7-hang-dang-thuc-v1-04.json",
    "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
    "source_bank_record": {
      "id": "ID05V1_116",
      "question": "Sau khi khai triển, đẳng thức nào đúng với mọi \\(a,b\\)?",
      "options": [
        "\\((a+b)^2+(a-b)^2=2(a^2+b^2)\\)",
        "\\((a+b)^2+(a-b)^2=2(a^2-b^2)\\)",
        "\\((a+b)^2+(a-b)^2=a^2+b^2\\)",
        "\\((a+b)^2+(a-b)^2=4ab\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "7-hang-dang-thuc",
        "skill": [
          "chung-minh-hdt"
        ],
        "type": "chung-minh-phan-tich"
      },
      "difficulty": "advanced",
      "explanation": "Khai triển: \\((a+b)^2+(a-b)^2=a^2+2ab+b^2+a^2-2ab+b^2=2a^2+2b^2=2(a^2+b^2)\\). Chọn đẳng thức đúng là bước nhận biết; để đánh giá kỹ năng trình bày chứng minh cần bài yêu cầu viết các bước."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "recognition_or_method_question_not_a_full_proof",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Nhận diện đẳng thức đúng sau khai triển",
      "observable_answer_evidence": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "review_next_action": "Giữ câu làm câu hỏi học tập; muốn đánh giá chứng minh cần bài viết từng bước với rubric, không dùng tag chung-minh-hdt làm mastery từ đáp án MCQ.",
      "learner_remediation": "Tự khai triển từng vế, thu gọn và trình bày vì sao đẳng thức đúng với mọi biến.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "ID05V1_117",
    "topic": "05-7-hang-dang-thuc",
    "question_source": "docs/assets/data/practice/05-7-hang-dang-thuc-v1-04.json",
    "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
    "source_bank_record": {
      "id": "ID05V1_117",
      "question": "Sau khi khai triển, đẳng thức nào đúng với mọi \\(x,y\\)?",
      "options": [
        "\\((x+y)^2-(x-y)^2=4xy\\)",
        "\\((x+y)^2-(x-y)^2=2xy\\)",
        "\\((x+y)^2-(x-y)^2=2x^2+2y^2\\)",
        "\\((x+y)^2-(x-y)^2=x^2-y^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "7-hang-dang-thuc",
        "skill": [
          "chung-minh-hdt"
        ],
        "type": "chung-minh-phan-tich"
      },
      "difficulty": "advanced",
      "explanation": "\\((x+y)^2-(x-y)^2=(x^2+2xy+y^2)-(x^2-2xy+y^2)=4xy\\). Chỉ chọn đáp án đúng chưa chứng tỏ học sinh tự viết được toàn bộ phép chứng minh."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "recognition_or_method_question_not_a_full_proof",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Nhận diện đẳng thức đúng sau khai triển",
      "observable_answer_evidence": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "review_next_action": "Giữ câu làm câu hỏi học tập; muốn đánh giá chứng minh cần bài viết từng bước với rubric, không dùng tag chung-minh-hdt làm mastery từ đáp án MCQ.",
      "learner_remediation": "Tự khai triển từng vế, thu gọn và trình bày vì sao đẳng thức đúng với mọi biến.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "ID05V1_118",
    "topic": "05-7-hang-dang-thuc",
    "question_source": "docs/assets/data/practice/05-7-hang-dang-thuc-v1-04.json",
    "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
    "source_bank_record": {
      "id": "ID05V1_118",
      "question": "Sau khi khai triển, đẳng thức nào đúng với mọi \\(x,y\\)?",
      "options": [
        "\\((x+y)^3+(x-y)^3=2x(x^2+3y^2)\\)",
        "\\((x+y)^3+(x-y)^3=2x(x^2+y^2)\\)",
        "\\((x+y)^3+(x-y)^3=2x^3+2y^3\\)",
        "\\((x+y)^3+(x-y)^3=2y(3x^2+y^2)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "7-hang-dang-thuc",
        "skill": [
          "chung-minh-hdt"
        ],
        "type": "chung-minh-phan-tich"
      },
      "difficulty": "advanced",
      "explanation": "\\((x+y)^3+(x-y)^3=(x^3+3x^2y+3xy^2+y^3)+(x^3-3x^2y+3xy^2-y^3)=2x^3+6xy^2=2x(x^2+3y^2)\\)."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "recognition_or_method_question_not_a_full_proof",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Nhận diện đẳng thức đúng sau khai triển",
      "observable_answer_evidence": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "review_next_action": "Giữ câu làm câu hỏi học tập; muốn đánh giá chứng minh cần bài viết từng bước với rubric, không dùng tag chung-minh-hdt làm mastery từ đáp án MCQ.",
      "learner_remediation": "Tự khai triển từng vế, thu gọn và trình bày vì sao đẳng thức đúng với mọi biến.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "ID05V1_119",
    "topic": "05-7-hang-dang-thuc",
    "question_source": "docs/assets/data/practice/05-7-hang-dang-thuc-v1-04.json",
    "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
    "source_bank_record": {
      "id": "ID05V1_119",
      "question": "Để chứng minh \\((a+b)^2-(a-b)^2=4ab\\), bước phù hợp nhất là:",
      "options": [
        "Khai triển hai bình phương rồi thu gọn",
        "Chia cả hai vế cho \\(a-b\\)",
        "Cho \\(a=b=1\\) rồi kết luận",
        "Lấy căn hai vế"
      ],
      "answer": 0,
      "tags": {
        "topic": "7-hang-dang-thuc",
        "skill": [
          "chung-minh-hdt"
        ],
        "type": "chung-minh-phan-tich"
      },
      "difficulty": "intermediate",
      "explanation": "Khai triển: \\((a+b)^2-(a-b)^2=(a^2+2ab+b^2)-(a^2-2ab+b^2)=4ab\\). Thử một cặp số không chứng minh đúng với mọi số; chia cho \\(a-b\\) không hợp lệ khi \\(a=b\\). Câu này kiểm tra chọn phương pháp, chưa đo khả năng tự trình bày chứng minh."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "recognition_or_method_question_not_a_full_proof",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Chọn phương pháp bắt đầu chứng minh",
      "observable_answer_evidence": "Chọn thao tác khai triển hai bình phương và thu gọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "review_next_action": "Giữ câu làm câu hỏi học tập; muốn đánh giá chứng minh cần bài viết từng bước với rubric, không dùng tag chung-minh-hdt làm mastery từ đáp án MCQ.",
      "learner_remediation": "Tự khai triển từng vế, thu gọn và trình bày vì sao đẳng thức đúng với mọi biến.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "ID05V1_120",
    "topic": "05-7-hang-dang-thuc",
    "question_source": "docs/assets/data/practice/05-7-hang-dang-thuc-v1-04.json",
    "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
    "source_bank_record": {
      "id": "ID05V1_120",
      "question": "Bước ĐẦU TIÊN thích hợp khi phân tích \\(x^4-16\\) thành nhân tử là:",
      "options": [
        "Hiệu hai bình phương: \\((x^2-4)(x^2+4)\\)",
        "Tổng hai bình phương",
        "Bình phương của một tổng",
        "Lập phương của một hiệu"
      ],
      "answer": 0,
      "tags": {
        "topic": "7-hang-dang-thuc",
        "skill": [
          "phan-tich-hdt",
          "hieu-hai-binh-phuong"
        ],
        "type": "chung-minh-phan-tich"
      },
      "difficulty": "intermediate",
      "explanation": "Trước hết nhận dạng \\(x^4-16=(x^2)^2-4^2=(x^2-4)(x^2+4)\\) (hiệu hai bình phương). Nếu yêu cầu phân tích hoàn toàn thì còn \\(x^2-4=(x-2)(x+2)\\), nên kết quả cuối là \\((x-2)(x+2)(x^2+4)\\). Câu trắc nghiệm hiện chỉ đo bước đầu."
    },
    "queue_proposals": {
      "proposed_assessed_skill": "hieu-hai-binh-phuong",
      "flags": [
        "factorization_first_step_not_full_factorization"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "learner_facing_scope_label": "Nhận dạng và áp dụng hiệu hai bình phương (bước đầu)",
      "observable_answer_evidence": "Chọn bước đầu đúng để tách x⁴−16 thành tích.",
      "does_not_establish": [
        "Phân tích hoàn toàn đa thức bậc bốn",
        "Thành thạo mọi HĐT"
      ],
      "review_next_action": "Giữ nhãn phan-tich-hdt ở vai trò nhóm cha; không chấm kỹ năng phân tích hoàn toàn từ câu này.",
      "learner_remediation": "Sau (x²−4)(x²+4), kiểm tra x²−4 còn phân tích được.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  }
]
```

## H. 06-phan-tich-da-thuc — 24 câu toàn văn và hồ sơ quyết định trước

```json
[
  {
    "question_id": "FAC06V1_077",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_077",
      "question": "Phân tích hoàn toàn \\(3 x^{3} - 48 x\\) thành nhân tử.",
      "options": [
        "\\(3x(x-4)(x+4)\\)",
        "\\(3x(x^2-16)\\)",
        "\\(3x(x-4)^2\\)",
        "\\(3(x-4)(x+4)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(3x^3-48x=3x(x^2-16)=3x(x-4)(x+4)\\). Đặt nhân tử chung trước, sau đó dùng hiệu hai bình phương. \\(3x(x^2-16)\\) mới là bước trung gian, chưa phân tích hoàn toàn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_078",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_078",
      "question": "Phân tích hoàn toàn \\(2 x^{3} + 12 x^{2} + 18 x\\) thành nhân tử.",
      "options": [
        "\\(2x(x+3)^2\\)",
        "\\(2x(x^2+9)\\)",
        "\\(2(x+3)^2\\)",
        "\\(2x(x-3)^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(2x^3+12x^2+18x=2x(x^2+6x+9)=2x(x+3)^2\\). Sau khi đặt \\(2x\\), nhận dạng bình phương hoàn chỉnh."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_079",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_079",
      "question": "Phân tích hoàn toàn \\(x^{3} + 3 x^{2} - 4 x - 12\\) thành nhân tử.",
      "options": [
        "\\((x+3)(x-2)(x+2)\\)",
        "\\((x+3)(x^2-4)\\)",
        "\\((x-3)(x-2)(x+2)\\)",
        "\\((x+3)(x-2)^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "Nhóm \\(x^3+3x^2-4x-12=(x+3)(x^2-4)=(x+3)(x-2)(x+2)\\). Dừng ở \\((x+3)(x^2-4)\\) là chưa phân tích hoàn toàn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_080",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_080",
      "question": "Phân tích hoàn toàn \\(x^{3} + 8 x^{2} + 12 x\\) thành nhân tử.",
      "options": [
        "\\(x(x+2)(x+6)\\)",
        "\\(x(x-2)(x+6)\\)",
        "\\((x+2)(x+6)\\)",
        "\\(x(x+8)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(x^3+8x^2+12x=x(x^2+8x+12)=x(x+2)(x+6)\\). Đặt \\(x\\) trước; tìm hai số có tổng 8, tích 12."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_081",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_081",
      "question": "Phân tích hoàn toàn \\(2 x^{3} - 18 x\\) thành nhân tử.",
      "options": [
        "\\(2x(x-3)(x+3)\\)",
        "\\(2x(x^2-9)\\)",
        "\\(2x(x-3)^2\\)",
        "\\(2(x-3)(x+3)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(2x^3-18x=2x(x^2-9)=2x(x-3)(x+3)\\). Đặt \\(2x\\) rồi tiếp tục tách hiệu hai bình phương. Bước \\(2x(x^2-9)\\) vẫn chưa là kết quả phân tích hoàn toàn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_082",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_082",
      "question": "Phân tích hoàn toàn \\(3 x^{3} + 18 x^{2} + 27 x\\) thành nhân tử.",
      "options": [
        "\\(3x(x+3)^2\\)",
        "\\(3x(x^2+9)\\)",
        "\\(3(x+3)^2\\)",
        "\\(3x(x-3)^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(3x^3+18x^2+27x=3x(x^2+6x+9)=3x(x+3)^2\\). Nhân tử chung \\(3x\\), phần còn lại là bình phương hoàn chỉnh."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_083",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_083",
      "question": "Phân tích hoàn toàn \\(x^{3} + 3 x^{2} - x - 3\\) thành nhân tử.",
      "options": [
        "\\((x+3)(x-1)(x+1)\\)",
        "\\((x+3)(x^2-1)\\)",
        "\\((x-3)(x-1)(x+1)\\)",
        "\\((x+3)(x-1)^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(x^3+3x^2-x-3=(x+3)(x^2-1)=(x+3)(x-1)(x+1)\\). Nhóm hạng tử rồi phân tích tiếp hiệu hai bình phương."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_084",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_084",
      "question": "Phân tích hoàn toàn \\(x^{3} + 6 x^{2} + 5 x\\) thành nhân tử.",
      "options": [
        "\\(x(x+1)(x+5)\\)",
        "\\(x(x-1)(x+5)\\)",
        "\\((x+1)(x+5)\\)",
        "\\(x(x+6)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(x^3+6x^2+5x=x(x^2+6x+5)=x(x+1)(x+5)\\). Đặt \\(x\\), sau đó tách hạng tử giữa."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_085",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_085",
      "question": "Phân tích hoàn toàn \\(4 x^{3} - 36 x\\) thành nhân tử.",
      "options": [
        "\\(4x(x-3)(x+3)\\)",
        "\\(4x(x^2-9)\\)",
        "\\(4x(x-3)^2\\)",
        "\\(4(x-3)(x+3)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(4x^3-36x=4x(x^2-9)=4x(x-3)(x+3)\\). Cần tiếp tục phân tích \\(x^2-9\\), không dừng ở bước đặt nhân tử chung."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_086",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_086",
      "question": "Phân tích hoàn toàn \\(3 x^{3} + 6 x^{2} + 3 x\\) thành nhân tử.",
      "options": [
        "\\(3x(x+1)^2\\)",
        "\\(3x(x^2+1)\\)",
        "\\(3(x+1)^2\\)",
        "\\(3x(x-1)^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(3x^3+6x^2+3x=3x(x^2+2x+1)=3x(x+1)^2\\). Nhận ra bình phương hoàn chỉnh sau khi đặt \\(3x\\)."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_087",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_087",
      "question": "Phân tích hoàn toàn \\(x^3+2x^2-9x-18\\) thành nhân tử.",
      "options": [
        "\\((x+2)(x-3)(x+3)\\)",
        "\\((x-2)(x-3)(x+3)\\)",
        "\\((x+2)(x-3)^2\\)",
        "\\((x+2)(x^2+9)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(x^3+2x^2-9x-18=(x+2)(x^2-9)=(x+2)(x-3)(x+3)\\). Nhóm hạng tử và dùng hiệu hai bình phương cho bước cuối."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_088",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_088",
      "question": "Phân tích hoàn toàn \\(x^{3} + 9 x^{2} + 18 x\\) thành nhân tử.",
      "options": [
        "\\(x(x+3)(x+6)\\)",
        "\\(x(x-3)(x+6)\\)",
        "\\((x+3)(x+6)\\)",
        "\\(x(x+9)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "intermediate",
      "explanation": "\\(x^3+9x^2+18x=x(x^2+9x+18)=x(x+3)(x+6)\\). Đặt nhân tử chung rồi phân tích tam thức."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_089",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_089",
      "question": "Phân tích hoàn toàn \\(3 x^{3} - 3 x\\) thành nhân tử.",
      "options": [
        "\\(3x(x-1)(x+1)\\)",
        "\\(3x(x^2-1)\\)",
        "\\(3x(x-1)^2\\)",
        "\\(3(x-1)(x+1)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "advanced",
      "explanation": "\\(3x^3-3x=3x(x^2-1)=3x(x-1)(x+1)\\). Sau khi đặt \\(3x\\), tiếp tục phân tích hiệu hai bình phương."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_090",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-03.json",
    "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
    "source_bank_record": {
      "id": "FAC06V1_090",
      "question": "Phân tích hoàn toàn \\(2 x^{3} + 8 x^{2} + 8 x\\) thành nhân tử.",
      "options": [
        "\\(2x(x+2)^2\\)",
        "\\(2x(x^2+4)\\)",
        "\\(2(x+2)^2\\)",
        "\\(2x(x-2)^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "advanced",
      "explanation": "\\(2x^3+8x^2+8x=2x(x^2+4x+4)=2x(x+2)^2\\). Đặt \\(2x\\), nhận dạng bình phương hoàn chỉnh."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_091",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_091",
      "question": "Phân tích hoàn toàn \\(x^{3} + x^{2} - 4 x - 4\\) thành nhân tử.",
      "options": [
        "\\((x+1)(x-2)(x+2)\\)",
        "\\((x+1)(x^2-4)\\)",
        "\\((x-1)(x-2)(x+2)\\)",
        "\\((x+1)(x-2)^2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "advanced",
      "explanation": "\\(x^3+x^2-4x-4=(x+1)(x^2-4)=(x+1)(x-2)(x+2)\\). Bước tách hiệu hai bình phương cuối là bắt buộc khi đề yêu cầu phân tích hoàn toàn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_092",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_092",
      "question": "Phân tích hoàn toàn \\(x^3+4x^2+3x\\) thành nhân tử.",
      "options": [
        "\\(x(x+1)(x+3)\\)",
        "\\(x(x-1)(x+3)\\)",
        "\\((x+1)(x+3)\\)",
        "\\(x(x+4)\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "phoi-hop-phuong-phap"
        ],
        "type": "phoi-hop"
      },
      "difficulty": "advanced",
      "explanation": "\\(x^3+4x^2+3x=x(x^2+4x+3)=x(x+1)(x+3)\\). Đặt nhân tử chung và tách hạng tử giữa."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "broad_multistep_skill_needs_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "scoped_primary_candidate",
      "selected_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "review_next_action": "Đề xuất duy nhất một năng lực đầu ra gọn cho cả 16 câu; đăng ký mã mới trong lớp assessment trước khi dùng, không đổi tag gốc phoi-hop-phuong-phap; chỉ dùng evidence tập luyện không xét Core Readiness ngay.",
      "learner_remediation": "Đặt nhân tử chung, nhận dạng HĐT/nhóm hạng tử rồi kiểm tra mỗi nhân tử còn phân tích được không.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_113",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_113",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2+n\\) luôn chia hết cho 2?",
      "options": [
        "\\(n^2+n=n(n+1)\\), tích hai số nguyên liên tiếp luôn chẵn.",
        "\\(n^2+n=(n+1)^2\\).",
        "\\(n^2+n=n^2(1+n)\\).",
        "Vì mọi số nguyên đều chia hết cho 2."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích n²+n=n(n+1). Hai số nguyên liên tiếp luôn có một số chẵn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "review_next_action": "Dùng làm câu hỏi kiểm tra hiểu; nếu đo năng lực lập luận, cần câu yêu cầu điền nguyên nhân hoặc tự viết giải thích.",
      "learner_remediation": "Viết dạng tích rồi nêu lý do trong các số liên tiếp có thừa số chia hết cho 2 hoặc 3.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_114",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_114",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2-n\\) luôn chia hết cho 2?",
      "options": [
        "\\(n^2-n=n(n-1)\\), tích hai số nguyên liên tiếp luôn chẵn.",
        "\\(n^2-n=(n-1)^2\\).",
        "\\(n^2-n=n^2(1-n)\\).",
        "Vì mọi số nguyên đều chia hết cho 2."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "intermediate",
      "explanation": "\\(n^2-n=n(n-1)\\). Hai số \\(n\\) và \\(n-1\\) liên tiếp nên một trong hai là số chẵn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "review_next_action": "Dùng làm câu hỏi kiểm tra hiểu; nếu đo năng lực lập luận, cần câu yêu cầu điền nguyên nhân hoặc tự viết giải thích.",
      "learner_remediation": "Viết dạng tích rồi nêu lý do trong các số liên tiếp có thừa số chia hết cho 2 hoặc 3.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_115",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_115",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^3-n\\) luôn chia hết cho 6?",
      "options": [
        "\\(n^3-n=n(n-1)(n+1)\\), tích ba số nguyên liên tiếp chia hết cho 6.",
        "\\(n^3-n=(n-1)^3\\).",
        "\\(n^3-n=n^2(n-1)\\) nên luôn chia hết cho 6.",
        "Vì mọi số nguyên đều chia hết cho 6."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "intermediate",
      "explanation": "\\(n^3-n=n(n-1)(n+1)\\). Trong ba số nguyên liên tiếp có một số chia hết cho 3 và ít nhất một số chẵn, nên tích chia hết cho 6."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "review_next_action": "Dùng làm câu hỏi kiểm tra hiểu; nếu đo năng lực lập luận, cần câu yêu cầu điền nguyên nhân hoặc tự viết giải thích.",
      "learner_remediation": "Viết dạng tích rồi nêu lý do trong các số liên tiếp có thừa số chia hết cho 2 hoặc 3.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_116",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_116",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2+3n+2\\) luôn chia hết cho 2?",
      "options": [
        "\\(n^2+3n+2=(n+1)(n+2)\\), tích hai số nguyên liên tiếp luôn chẵn.",
        "\\(n^2+3n+2=(n+1)^2\\).",
        "\\(n^2+3n+2=n(n+2)+2\\), nên biểu thức luôn chẵn.",
        "Vì \\(n\\) luôn là số chẵn."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "intermediate",
      "explanation": "\\(n^2+3n+2=(n+1)(n+2)\\). Hai số nguyên liên tiếp có một số chẵn nên tích chia hết cho 2. Lưu ý phương án \\(n(n+2)+2\\) không bằng đa thức đã cho."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "review_next_action": "Dùng làm câu hỏi kiểm tra hiểu; nếu đo năng lực lập luận, cần câu yêu cầu điền nguyên nhân hoặc tự viết giải thích.",
      "learner_remediation": "Viết dạng tích rồi nêu lý do trong các số liên tiếp có thừa số chia hết cho 2 hoặc 3.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_117",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_117",
      "question": "Tính nhanh \\(105^2-95^2\\) bằng phân tích nhân tử.",
      "options": [
        "\\(2000\\)",
        "\\(2020\\)",
        "\\(1980\\)",
        "\\(10\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "advanced",
      "explanation": "Dùng hiệu hai bình phương: \\((100+5)^2-(100-5)^2=[2\\cdot 5]\\cdot 200=2000\\)."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "review_next_action": "Muốn đo cách làm, thêm bài hỏi biểu thức tích trung gian trước khi nhận kết quả cuối; không sinh mastery của phương pháp từ một đáp số.",
      "learner_remediation": "Viết a²−b²=(a−b)(a+b), thay hai số rồi mới tính.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_118",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_118",
      "question": "Tính nhanh \\(106^2-94^2\\) bằng phân tích nhân tử.",
      "options": [
        "\\(2400\\)",
        "\\(2424\\)",
        "\\(2376\\)",
        "\\(12\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "advanced",
      "explanation": "Dùng hiệu hai bình phương: \\((100+6)^2-(100-6)^2=[2\\cdot 6]\\cdot 200=2400\\)."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "review_next_action": "Muốn đo cách làm, thêm bài hỏi biểu thức tích trung gian trước khi nhận kết quả cuối; không sinh mastery của phương pháp từ một đáp số.",
      "learner_remediation": "Viết a²−b²=(a−b)(a+b), thay hai số rồi mới tính.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_119",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_119",
      "question": "Tính nhanh \\(107^2-93^2\\) bằng phân tích nhân tử.",
      "options": [
        "\\(2800\\)",
        "\\(2828\\)",
        "\\(2772\\)",
        "\\(14\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "advanced",
      "explanation": "Dùng hiệu hai bình phương: \\((100+7)^2-(100-7)^2=[2\\cdot 7]\\cdot 200=2800\\)."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "review_next_action": "Muốn đo cách làm, thêm bài hỏi biểu thức tích trung gian trước khi nhận kết quả cuối; không sinh mastery của phương pháp từ một đáp số.",
      "learner_remediation": "Viết a²−b²=(a−b)(a+b), thay hai số rồi mới tính.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "FAC06V1_120",
    "topic": "06-phan-tich-da-thuc",
    "question_source": "docs/assets/data/practice/06-phan-tich-da-thuc-v1-04.json",
    "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
    "source_bank_record": {
      "id": "FAC06V1_120",
      "question": "Tính nhanh \\(108^2-92^2\\) bằng phân tích nhân tử.",
      "options": [
        "\\(3200\\)",
        "\\(3232\\)",
        "\\(3168\\)",
        "\\(16\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-tich-da-thuc",
        "skill": [
          "ung-dung-phan-tich"
        ],
        "type": "ung-dung"
      },
      "difficulty": "advanced",
      "explanation": "Dùng hiệu hai bình phương: \\((100+8)^2-(100-8)^2=[2\\cdot 8]\\cdot 200=3200\\)."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "application_tag_not_atomic_divisibility_target",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "review_next_action": "Muốn đo cách làm, thêm bài hỏi biểu thức tích trung gian trước khi nhận kết quả cuối; không sinh mastery của phương pháp từ một đáp số.",
      "learner_remediation": "Viết a²−b²=(a−b)(a+b), thay hai số rồi mới tính.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  }
]
```

## I. 07-phan-thuc-dai-so — 8 câu toàn văn và hồ sơ quyết định trước

```json
[
  {
    "question_id": "RAT07V1_109",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_109",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-1}+\\frac1{x+1}\\right)\\cdot\\frac{x^2-1}{2x}\\) (với \\(x\\ne0,\\;x\\ne1,\\;x\\ne-1\\)).",
      "options": [
        "\\(1\\)",
        "\\(2\\)",
        "\\(x\\)",
        "\\(0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "bieu-thuc-nhieu-phep-tinh",
          "cong-tru-phan-thuc",
          "nhan-phan-thuc"
        ],
        "type": "nhieu-phep-tinh"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện xác định ban đầu: \\(x\\ne0,\\;x\\ne1,\\;x\\ne-1\\). Quy đồng: \\(\\frac1{x-1}+\\frac1{x+1}=\\frac{2x}{x^2-1}\\). Do đó \\(A=\\frac{2x}{x^2-1}\\cdot\\frac{x^2-1}{2x}=1\\) chỉ trên miền này. Không tự bỏ các điều kiện sau rút gọn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "composite_item_needs_step_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "review_next_action": "Sáu câu cùng công thức cho đáp án 1; giữ formative, thay đổi cấu trúc/đáp án và thêm câu hỏi điều kiện xác định trước khi dùng như evidence đáng tin cậy.",
      "learner_remediation": "Viết miền xác định, quy đồng trong ngoặc, nhân và chỉ rút gọn trên miền gốc.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "RAT07V1_110",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_110",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-2}+\\frac1{x+2}\\right)\\cdot\\frac{x^2-4}{2x}\\) (với \\(x\\ne0,\\;x\\ne2,\\;x\\ne-2\\)).",
      "options": [
        "\\(1\\)",
        "\\(2\\)",
        "\\(x\\)",
        "\\(0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "bieu-thuc-nhieu-phep-tinh",
          "cong-tru-phan-thuc",
          "nhan-phan-thuc"
        ],
        "type": "nhieu-phep-tinh"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện xác định ban đầu: \\(x\\ne0,\\;x\\ne2,\\;x\\ne-2\\). Quy đồng: \\(\\frac1{x-2}+\\frac1{x+2}=\\frac{2x}{x^2-4}\\). Do đó \\(A=\\frac{2x}{x^2-4}\\cdot\\frac{x^2-4}{2x}=1\\) chỉ trên miền này. Không tự bỏ các điều kiện sau rút gọn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "composite_item_needs_step_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "review_next_action": "Sáu câu cùng công thức cho đáp án 1; giữ formative, thay đổi cấu trúc/đáp án và thêm câu hỏi điều kiện xác định trước khi dùng như evidence đáng tin cậy.",
      "learner_remediation": "Viết miền xác định, quy đồng trong ngoặc, nhân và chỉ rút gọn trên miền gốc.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "RAT07V1_111",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_111",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-3}+\\frac1{x+3}\\right)\\cdot\\frac{x^2-9}{2x}\\) (với \\(x\\ne0,\\;x\\ne3,\\;x\\ne-3\\)).",
      "options": [
        "\\(1\\)",
        "\\(2\\)",
        "\\(x\\)",
        "\\(0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "bieu-thuc-nhieu-phep-tinh",
          "cong-tru-phan-thuc",
          "nhan-phan-thuc"
        ],
        "type": "nhieu-phep-tinh"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện xác định ban đầu: \\(x\\ne0,\\;x\\ne3,\\;x\\ne-3\\). Quy đồng: \\(\\frac1{x-3}+\\frac1{x+3}=\\frac{2x}{x^2-9}\\). Do đó \\(A=\\frac{2x}{x^2-9}\\cdot\\frac{x^2-9}{2x}=1\\) chỉ trên miền này. Không tự bỏ các điều kiện sau rút gọn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "composite_item_needs_step_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "review_next_action": "Sáu câu cùng công thức cho đáp án 1; giữ formative, thay đổi cấu trúc/đáp án và thêm câu hỏi điều kiện xác định trước khi dùng như evidence đáng tin cậy.",
      "learner_remediation": "Viết miền xác định, quy đồng trong ngoặc, nhân và chỉ rút gọn trên miền gốc.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "RAT07V1_112",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_112",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-4}+\\frac1{x+4}\\right)\\cdot\\frac{x^2-16}{2x}\\) (với \\(x\\ne0,\\;x\\ne4,\\;x\\ne-4\\)).",
      "options": [
        "\\(1\\)",
        "\\(2\\)",
        "\\(x\\)",
        "\\(0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "bieu-thuc-nhieu-phep-tinh",
          "cong-tru-phan-thuc",
          "nhan-phan-thuc"
        ],
        "type": "nhieu-phep-tinh"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện xác định ban đầu: \\(x\\ne0,\\;x\\ne4,\\;x\\ne-4\\). Quy đồng: \\(\\frac1{x-4}+\\frac1{x+4}=\\frac{2x}{x^2-16}\\). Do đó \\(A=\\frac{2x}{x^2-16}\\cdot\\frac{x^2-16}{2x}=1\\) chỉ trên miền này. Không tự bỏ các điều kiện sau rút gọn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "composite_item_needs_step_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "review_next_action": "Sáu câu cùng công thức cho đáp án 1; giữ formative, thay đổi cấu trúc/đáp án và thêm câu hỏi điều kiện xác định trước khi dùng như evidence đáng tin cậy.",
      "learner_remediation": "Viết miền xác định, quy đồng trong ngoặc, nhân và chỉ rút gọn trên miền gốc.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "RAT07V1_113",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_113",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-5}+\\frac1{x+5}\\right)\\cdot\\frac{x^2-25}{2x}\\) (với \\(x\\ne0,\\;x\\ne5,\\;x\\ne-5\\)).",
      "options": [
        "\\(1\\)",
        "\\(2\\)",
        "\\(x\\)",
        "\\(0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "bieu-thuc-nhieu-phep-tinh",
          "cong-tru-phan-thuc",
          "nhan-phan-thuc"
        ],
        "type": "nhieu-phep-tinh"
      },
      "difficulty": "advanced",
      "explanation": "Điều kiện xác định ban đầu: \\(x\\ne0,\\;x\\ne5,\\;x\\ne-5\\). Quy đồng: \\(\\frac1{x-5}+\\frac1{x+5}=\\frac{2x}{x^2-25}\\). Do đó \\(A=\\frac{2x}{x^2-25}\\cdot\\frac{x^2-25}{2x}=1\\) chỉ trên miền này. Không tự bỏ các điều kiện sau rút gọn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "composite_item_needs_step_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "review_next_action": "Sáu câu cùng công thức cho đáp án 1; giữ formative, thay đổi cấu trúc/đáp án và thêm câu hỏi điều kiện xác định trước khi dùng như evidence đáng tin cậy.",
      "learner_remediation": "Viết miền xác định, quy đồng trong ngoặc, nhân và chỉ rút gọn trên miền gốc.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "RAT07V1_114",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_114",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-6}+\\frac1{x+6}\\right)\\cdot\\frac{x^2-36}{2x}\\) (với \\(x\\ne0,\\;x\\ne6,\\;x\\ne-6\\)).",
      "options": [
        "\\(1\\)",
        "\\(2\\)",
        "\\(x\\)",
        "\\(0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "bieu-thuc-nhieu-phep-tinh",
          "cong-tru-phan-thuc",
          "nhan-phan-thuc"
        ],
        "type": "nhieu-phep-tinh"
      },
      "difficulty": "advanced",
      "explanation": "Điều kiện xác định ban đầu: \\(x\\ne0,\\;x\\ne6,\\;x\\ne-6\\). Quy đồng: \\(\\frac1{x-6}+\\frac1{x+6}=\\frac{2x}{x^2-36}\\). Do đó \\(A=\\frac{2x}{x^2-36}\\cdot\\frac{x^2-36}{2x}=1\\) chỉ trên miền này. Không tự bỏ các điều kiện sau rút gọn."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "composite_item_needs_step_rubric",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "formative_only_requires_new_evidence",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "review_next_action": "Sáu câu cùng công thức cho đáp án 1; giữ formative, thay đổi cấu trúc/đáp án và thêm câu hỏi điều kiện xác định trước khi dùng như evidence đáng tin cậy.",
      "learner_remediation": "Viết miền xác định, quy đồng trong ngoặc, nhân và chỉ rút gọn trên miền gốc.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "RAT07V1_119",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_119",
      "question": "Với x nguyên, tìm các giá trị để \\(\\frac{x+1}{x-2}\\) là số nguyên.",
      "options": [
        "\\(x\\in\\{-1,1,3,5\\}\\)",
        "\\(x\\in\\{0,2,4\\}\\)",
        "\\(x=2\\)",
        "Mọi số nguyên \\(x\\ne2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "tim-gia-tri-nguyen"
        ],
        "type": "tim-gia-tri-nguyen"
      },
      "difficulty": "advanced",
      "explanation": "Điều kiện \\(x\\ne2\\). Ta có \\(\\frac{x+1}{x-2}=1+\\frac3{x-2}\\). Để phân thức là số nguyên, \\(x-2\\) phải là ước của 3: \\(\\pm1,\\pm3\\). Vì vậy \\(x\\in\\{-1,1,3,5\\}\\). Đây là bài vận dụng tính chia hết, chưa tự đưa vào mastery Core."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "check_curriculum_layer_not_core_by_default",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "extension_only_pending_layer_check",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Tìm giá trị nguyên của phân thức",
      "observable_answer_evidence": "Chọn tập x nguyên bằng cách xét ước của một số nguyên.",
      "does_not_establish": [
        "Đáp ứng Core Readiness chung",
        "Thành thạo mọi bài toán phân thức có tham số nguyên"
      ],
      "review_next_action": "Giữ bài ở luyện tập tự chọn/chờ đối chiếu lớp yêu cầu cần đạt KNTT; không gắn Core hay tạo một skill mới dựa trên hai câu.",
      "learner_remediation": "Biến đổi thành số nguyên + hằng số/(x−a), liệt kê đủ ước và loại giá trị làm mẫu bằng 0.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  },
  {
    "question_id": "RAT07V1_120",
    "topic": "07-phan-thuc-dai-so",
    "question_source": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json",
    "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
    "source_bank_record": {
      "id": "RAT07V1_120",
      "question": "Với x nguyên, tìm các giá trị để \\(\\frac{x+2}{x-3}\\) là số nguyên.",
      "options": [
        "\\(x\\in\\{-2,2,4,8\\}\\)",
        "\\(x\\in\\{-5,-1,1,5\\}\\)",
        "\\(x=3\\)",
        "Mọi số nguyên \\(x\\ne3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "tim-gia-tri-nguyen"
        ],
        "type": "tim-gia-tri-nguyen"
      },
      "difficulty": "advanced",
      "explanation": "Điều kiện \\(x\\ne3\\). Ta có \\(\\frac{x+2}{x-3}=1+\\frac5{x-3}\\). Để phân thức là số nguyên, \\(x-3\\) phải là ước của 5: \\(\\pm1,\\pm5\\). Vì vậy \\(x\\in\\{-2,2,4,8\\}\\). Đây là bài vận dụng tính chia hết, chưa tự đưa vào mastery Core."
    },
    "queue_proposals": {
      "proposed_assessed_skill": null,
      "flags": [
        "check_curriculum_layer_not_core_by_default",
        "no_production_primary_selected"
      ],
      "review_status": "requires_human_academic_decision"
    },
    "previous_internal_triage": {
      "decision_status": "extension_only_pending_layer_check",
      "selected_assessed_skill_candidate": null,
      "learner_facing_scope_label": "Tìm giá trị nguyên của phân thức",
      "observable_answer_evidence": "Chọn tập x nguyên bằng cách xét ước của một số nguyên.",
      "does_not_establish": [
        "Đáp ứng Core Readiness chung",
        "Thành thạo mọi bài toán phân thức có tham số nguyên"
      ],
      "review_next_action": "Giữ bài ở luyện tập tự chọn/chờ đối chiếu lớp yêu cầu cần đạt KNTT; không gắn Core hay tạo một skill mới dựa trên hai câu.",
      "learner_remediation": "Biến đổi thành số nguyên + hằng số/(x−a), liệt kê đủ ước và loại giá trị làm mẫu bằng 0.",
      "maturity": "internal_question_level_review_not_approved_production_mastery",
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  }
]
```

## J. Những rủi ro đặc biệt phải kiểm tra

1. `ALG04V2_009` và `ALG04V2_010`: câu có đích hỏi hẹp hơn nhãn tag, không thưởng kỹ năng rộng quá mức.
2. `ID05V1_116–119`: nhận diện đẳng thức hay chọn phép biến đổi không đồng nghĩa tự trình bày chứng minh; `ID05V1_120` chỉ hỏi **bước đầu**, không chứng minh phân tích hoàn toàn.
3. `FAC06V1_077–092`: 16 câu cần xác minh phân tích **hoàn toàn**, kiểm tra phương án trung gian so với kết quả cuối, xác định đích đo đầu ra; một ứng viên mã `phan-tich-da-thuc-hoan-toan` là ĐỀ XUẤT, chưa được đăng ký runtime.
4. `FAC06V1_113–120`: tám câu ứng dụng/biến thể, không tự coi MCQ là bài chứng minh viết; kiểm tra nhãn/formative.
5. `RAT07V1_109–114`: sáu câu cùng kiểu kết quả trước đây bị nghi trùng, cần kiểm tra từng đề/đáp án, điều kiện gốc, khả năng ghi nhớ cấu trúc, và đề xuất biến thể thực chất.
6. `RAT07V1_119–120`: bài tìm giá trị nguyên cần đánh giá math/đáp án nhưng tầng Core/Challenge chờ nguồn chương trình.
7. Trong dữ liệu nguồn 39 đáp án lưu `answer=0`; Practice Engine hiện xáo trộn phương án hiển thị và dùng originalIndex, nên KHÔNG tuyên bố website luôn có đáp án A. Vẫn kiểm tra nhiễu và mức độ giống nhau.

## K. B01 handoff đã tiếp nhận — không phải kết quả kiểm định B02

B01 phản biện 10 cặp đại diện và nêu xung đột tiềm tàng `cach-deu-dinh` CĐ14/15. Nhưng B01 không chứa toàn văn 39 câu. Cũng có lỗi thống kê nội bộ: phần JSON ghi pass_count=9 nhưng liệt kê 10 item PASS; expected_count=49 trộn đơn vị item/collision và 39 ca bối cảnh; checkpoint viết “implemented read-only mapping” dù chỉ có đề xuất. **Không nhập các số tổng hợp đó thành kết quả duyệt B02.** Chưa tự gộp counter dù báo cáo B01 có chỗ dùng từ “gộp”. Xử lý `cach-deu-dinh` ở vòng riêng với câu nguồn CĐ14/15, không tuyên bố B02 đã đóng xung đột đó.

## L. Hợp đồng trả kết quả bắt buộc

- **Đúng 39 `item_id`**, mỗi ID đúng một lần, xuất theo thứ tự mục C. Với mỗi câu: `item_id, status, answer_math_check, distractor_check, target_assessed_skill, other_tags_roles, supports_independent_mastery, issues[], recommended_action, source_blob_sha, limitations[]`.
- `status`: PASS / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE / NOT_REVIEWED. PASS là câu và cách gán bằng chứng đã được kiểm tra phù hợp với đích hẹp, KHÔNG có nghĩa đủ bằng chứng kết luận mastery lâu dài.
- `coverage.expected_count=39`, `status_counts` cộng lại bằng 39, `missing_ids`, `duplicate_ids` và `unexpected_ids` phải liệt kê chính xác; `reviewed_count` bằng số mục không NOT_REVIEWED. Không gộp 39 ID với mã taxonomy/đề xuất mới khi tính số.
- Mỗi lỗi nêu cụ thể đề/mệnh đề/phương án nào sai, dẫn item_id+SHA, đề xuất sửa và lý do kiểm tra lại. Nếu cách hiểu còn tranh luận, ghi bất đồng và nguồn cần thêm. Nếu NotebookLM không xuất được file, trả JSON trong chat; người dùng chỉ cần Copy nguyên văn cho ChatGPT.
- **Tổng kết:** tình trạng 19 ứng viên / 18 chỉ luyện / 2 chờ tầng theo hồ sơ cũ có được xác nhận hay cần sửa, các ca ưu tiên kiểm định tiếp; không tự bật mapping runtime.
- Giữ output gọn: bảng 39 ID + giải thích chi tiết chỉ đối với REVISION_REQUIRED/INSUFFICIENT_EVIDENCE hoặc khác đề xuất cũ; không nhắc lại toàn văn 39 đề trong câu trả lời.
- Nếu bị cắt vì độ dài, dừng ở ID cuối cùng đã trả; người dùng sẽ gửi prompt tiếp tục được chuẩn bị ở file đi kèm, không gán NOT_REVIEWED thành PASS.