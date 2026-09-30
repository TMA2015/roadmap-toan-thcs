# NotebookLM source — CĐ03 targeted R2 after independent R1 corrections (NOT PUBLISHED)

**Packet ID:** MATH-CORE03-R2-20260930 · **base source main SHA:** `c1b461885d7da1bd3cafef34f357c04c493df3b0` · **status:** `PROPOSAL_ONLY / ACADEMIC_REVIEW_REQUIRED`.

**Source-lock:** Full lesson `docs/kien-thuc/03-ti-le-ti-le-thuc/index.md` Git blob `61df5dd2a1f352c50005d40147bb229344861ed8`; practice manifest blob `4645eb69493281702a19a36453f999d1114736f3`; exact grade maps included below with their original Git blobs. Existing 120 bank IDs `RAT03V1_001–120` are NEVER modified by this packet. The 15 `RAT03MICRO` IDs are proposed brand-new items only, NOT approved/published.

## R1 independent result and exact R2 correction scope

R1 verdict: **REVISIONS_REQUIRED**, full coverage 5/5 cards and 15/15 micro items. R1 confirmed all 15 math oracles and 0-based answer indices mathematically correct, but required one curriculum-layer correction and recommended independence fixes. This R2 source incorporates:
- `rat03-core-g6-1.skills`: remove `doi-don-vi-ti-so` from Grade-6 Core assessed skills; retain it only as `supporting_skills`.
- `rat03-core-g6-1.worked_example`: add explicit 2 m → 200 cm before ratio 200/50=4.
- `RAT03MICRO_002`: explicit `Core-Support` / `FORMATIVE_SUPPORT_ONLY` metadata; it must never grant Grade-6 Core readiness credit.
- `RAT03MICRO_003`: 15/25 → 60%.
- `RAT03MICRO_005`: x/8=3/4 → x=6, with unique options.
- `RAT03MICRO_011`: new table with k=3, correct option kept at index 2.
- `RAT03MICRO_015`: new inverse table with xy=36, correct option kept at index 2.

The other four cards and ten other micro items are intended to remain text-identical to R1. R2 must check no collateral mathematical or scope regression.

## Required academic scope and unresolved assumptions

- Distinguish Grade 6 ratio/percentage from Grade 7 proportions, direct and inverse quantities; no assumption that all 120 legacy questions are grade-specific Core.
- Grade 6 mapping lists `ti-so`, `ti-so-phan-tram`, `bai-toan-phan-tram`. Candidate `doi-don-vi-ti-so` is a **prerequisite/supporting demand** whose tier needs independent confirmation. It must not silently gain a Grade-6 Core mastery flag merely because card 1 uses it.
- Grade 7 mapping includes proportion, equal ratios, direct and inverse relations. Real-world movement/productivity, map ratios and broad modeling remain separate contextual/Support tracks unless validated as explicit grade-level Core requirements.
- Check denominator conditions in proportional identities and equal-ratio summation; `y=kx` includes `x=0`, but `y/x` is undefined there; inverse `xy=a` requires `a≠0` and `x≠0`. Decreasing behavior alone does not prove inverse proportion.
- Every new MCQ only supports **recognition/formative evidence**, not an independently written proof or full-model mastery. Reviewer should flag cloned source prompts or weak distractors and demand source-specific mathematical corrections. Do not infer exam frequency from a self-authored bank.

## Actual KNTT mapping excerpts for this topic (captured from GitHub, only matching records)

```json
[
  {
    "grade": 6,
    "path": "docs/assets/data/curriculum/kntt-grade6-map.json",
    "git_blob_sha": "6b63ca1a122b7ea2a68eefa364c0a8074235a9ba",
    "matched": [
      {
        "chapter": "Số thập phân",
        "relation": [
          {
            "topic_id": "03-ti-le-ti-le-thuc",
            "relation": "PRIMARY"
          }
        ],
        "skills": [
          "ti-so",
          "ti-so-phan-tram",
          "bai-toan-phan-tram"
        ]
      }
    ]
  },
  {
    "grade": 7,
    "path": "docs/assets/data/curriculum/kntt-grade7-map.json",
    "git_blob_sha": "de3fba60557981f665fea26d621bc7c31e448e40",
    "matched": [
      {
        "chapter": "Thu thập và biểu diễn dữ liệu",
        "relation": [
          {
            "topic_id": "03-ti-le-ti-le-thuc",
            "relation": "SECONDARY"
          }
        ],
        "skills": [
          "bieu-do-quat-tron",
          "doc-bieu-do-doan-thang",
          "chon-bieu-do",
          "chuyen-bang-bieu-do",
          "nhan-xet-du-lieu"
        ]
      },
      {
        "chapter": "Tỉ lệ thức và đại lượng tỉ lệ",
        "relation": [
          {
            "topic_id": "03-ti-le-ti-le-thuc",
            "relation": "PRIMARY"
          }
        ],
        "skills": [
          "ti-le-thuc",
          "tim-x-ti-le-thuc",
          "day-ti-so-bang-nhau",
          "chia-theo-ti-le"
        ]
      },
      {
        "chapter": "Tỉ lệ thức và đại lượng tỉ lệ",
        "relation": [
          {
            "topic_id": "03-ti-le-ti-le-thuc",
            "relation": "PRIMARY"
          }
        ],
        "skills": [
          "ti-le-thuan",
          "he-so-ti-le-thuan",
          "ti-le-nghich",
          "he-so-ti-le-nghich",
          "phan-biet-thuan-nghich",
          "mo-hinh-ti-le"
        ]
      }
    ]
  }
]
```

## Existing official practice manifest (original source, not a new proposal)

```json
{
  "version": 2,
  "schema": "practice-bank-manifest-v1",
  "bank_id": "RAT03-V1",
  "topic": {
    "id": "03-ti-le-ti-le-thuc",
    "title": "Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ"
  },
  "session_size": 10,
  "question_count": 120,
  "skill_labels": {
    "ti-so": "Tỉ số",
    "doi-don-vi-ti-so": "Đổi đơn vị khi lập tỉ số",
    "ti-le-thuc": "Tỉ lệ thức",
    "tim-x-ti-le-thuc": "Tìm số chưa biết trong tỉ lệ thức",
    "day-ti-so-bang-nhau": "Dãy tỉ số bằng nhau",
    "chia-theo-ti-le": "Chia theo tỉ lệ",
    "ti-le-thuan": "Đại lượng tỉ lệ thuận",
    "he-so-ti-le-thuan": "Hệ số tỉ lệ thuận",
    "ti-le-nghich": "Đại lượng tỉ lệ nghịch",
    "he-so-ti-le-nghich": "Hệ số tỉ lệ nghịch",
    "phan-biet-thuan-nghich": "Phân biệt tỉ lệ thuận – nghịch",
    "ti-le-ban-do": "Tỉ lệ bản đồ",
    "ti-so-phan-tram": "Tỉ số phần trăm",
    "chuyen-dong-ti-le": "Tỉ lệ trong bài toán chuyển động",
    "nang-suat-ti-le": "Tỉ lệ trong bài toán năng suất",
    "mo-hinh-ti-le": "Mô hình hóa bằng tỉ lệ"
  },
  "skill_groups": [
    {
      "id": "A",
      "label": "A. Tỉ số và tỉ lệ thức",
      "skills": ["ti-so", "doi-don-vi-ti-so", "ti-le-thuc", "tim-x-ti-le-thuc"]
    },
    {
      "id": "B",
      "label": "B. Dãy tỉ số và chia theo tỉ lệ",
      "skills": ["day-ti-so-bang-nhau", "chia-theo-ti-le"]
    },
    {
      "id": "C",
      "label": "C. Đại lượng tỉ lệ",
      "skills": ["ti-le-thuan", "he-so-ti-le-thuan", "ti-le-nghich", "he-so-ti-le-nghich", "phan-biet-thuan-nghich"]
    },
    {
      "id": "D",
      "label": "D. Ứng dụng và mô hình hóa",
      "skills": ["ti-le-ban-do", "ti-so-phan-tram", "chuyen-dong-ti-le", "nang-suat-ti-le", "mo-hinh-ti-le"]
    }
  ],
  "sources": [
    "03-ti-le-ti-le-thuc-v1-01.json",
    "03-ti-le-ti-le-thuc-v1-02.json",
    "03-ti-le-ti-le-thuc-v1-03.json",
    "03-ti-le-ti-le-thuc-v1-04.json"
  ]
}

```

## Five proposed cards / teaching copies (UNREVIEWED)

```json
[
  {
    "id": "rat03-core-g6-1",
    "order": 1,
    "title": "Tỉ số, cùng đơn vị và phần trăm",
    "grades": [
      6
    ],
    "skills": [
      "ti-so",
      "ti-so-phan-tram"
    ],
    "supporting_skills": [
      "doi-don-vi-ti-so"
    ],
    "source_sections": [
      "3.1",
      "3.10"
    ],
    "teaching_copy": {
      "key_idea": "Tỉ số a/b chỉ có nghĩa khi b ≠ 0. Khi so sánh hai đại lượng cùng loại, phải đổi về cùng đơn vị; tỉ số phần trăm là phần chia cho tổng rồi nhân 100%.",
      "worked_example": {
        "problem": "a) Lớp có 18 học sinh nữ và 12 học sinh nam. Tìm tỉ số nữ so với cả lớp và tỉ số phần trăm. b) So sánh 2 m với 50 cm bằng tỉ số.",
        "solution": "a) Cả lớp có 18+12=30 học sinh. Tỉ số nữ/cả lớp =18/30=3/5, nên tỉ số phần trăm là 60%. b) Đổi 2 m=200 cm, rồi lập tỉ số 200/50=4."
      },
      "misconception": "Nhầm nữ/cả lớp với nữ/nam; so sánh 2 m với 50 cm khi chưa đổi 2 m thành 200 cm.",
      "summary": "Nêu rõ đại lượng so sánh và mẫu số; cùng đơn vị trước khi chia."
    }
  },
  {
    "id": "rat03-core-g7-2",
    "order": 2,
    "title": "Tỉ lệ thức và tìm số chưa biết",
    "grades": [
      7
    ],
    "skills": [
      "ti-le-thuc",
      "tim-x-ti-le-thuc"
    ],
    "source_sections": [
      "3.2",
      "3.3"
    ],
    "teaching_copy": {
      "key_idea": "Với b và d khác 0, a/b=c/d tương đương ad=bc. Kiểm tra điều kiện mẫu trước khi nhân chéo.",
      "worked_example": {
        "problem": "Giải x/6=5/9.",
        "solution": "6 và 9 đều khác 0. Nhân chéo: 9x=6×5=30 nên x=10/3. Thay lại: (10/3)/6=5/9."
      },
      "misconception": "Nhân chéo sai cặp tích hoặc quên điều kiện các mẫu khác 0.",
      "summary": "Kiểm mẫu → nhân chéo → giải và đối chiếu."
    }
  },
  {
    "id": "rat03-core-g7-3",
    "order": 3,
    "title": "Dãy tỉ số bằng nhau và chia theo tỉ lệ",
    "grades": [
      7
    ],
    "skills": [
      "day-ti-so-bang-nhau",
      "chia-theo-ti-le"
    ],
    "source_sections": [
      "3.4"
    ],
    "teaching_copy": {
      "key_idea": "Đặt các tỉ số bằng k: x/a=y/b=z/c=k, suy ra x=ak,y=bk,z=ck. Chỉ dùng tỉ số tổng khi a+b+c khác 0.",
      "worked_example": {
        "problem": "Chia 120 thành ba phần theo tỉ lệ 2:3:5.",
        "solution": "Đặt x=2k, y=3k, z=5k. Tổng 10k=120 nên k=12. Ba phần là 24,36,60."
      },
      "misconception": "Cộng sai tổng số phần hoặc dùng biểu thức tổng có mẫu bằng 0; không phân biệt tổng với từng phần.",
      "summary": "Đặt k chung, tính tổng phần, suy ra từng đại lượng."
    }
  },
  {
    "id": "rat03-core-g7-4",
    "order": 4,
    "title": "Đại lượng tỉ lệ thuận và hệ số tỉ lệ",
    "grades": [
      7
    ],
    "skills": [
      "ti-le-thuan",
      "he-so-ti-le-thuan"
    ],
    "source_sections": [
      "3.5",
      "3.6"
    ],
    "teaching_copy": {
      "key_idea": "Hai đại lượng tỉ lệ thuận theo y=kx với k khác 0. Khi x=0 vẫn có y=0; biểu thức y/x chỉ dùng khi x khác 0.",
      "worked_example": {
        "problem": "Bảng x lần lượt 2,3,5; y lần lượt 8,12,20. Tìm k và công thức.",
        "solution": "Tại từng cặp có x khác 0, y/x=4. Do đó k=4 và y=4x. Nếu x=0 thì y=0."
      },
      "misconception": "Lấy x/y thay cho y/x khi cần k của y theo x; loại sai trường hợp x=0 khỏi quan hệ y=kx.",
      "summary": "Kiểm tra cùng tỉ số y/x trên các cặp x khác 0; viết y=kx."
    }
  },
  {
    "id": "rat03-core-g7-5",
    "order": 5,
    "title": "Đại lượng tỉ lệ nghịch và phân biệt thuận/nghịch",
    "grades": [
      7
    ],
    "skills": [
      "ti-le-nghich",
      "he-so-ti-le-nghich",
      "phan-biet-thuan-nghich"
    ],
    "source_sections": [
      "3.7",
      "3.8",
      "3.11"
    ],
    "teaching_copy": {
      "key_idea": "Tỉ lệ nghịch có xy=a với a khác 0, nên x khác 0 và y=a/x. Một đại lượng tăng còn đại lượng kia giảm chưa đủ; phải kiểm tra tích xy giữ nguyên.",
      "worked_example": {
        "problem": "Bảng x: 2,4,8; y: 12,6,3. Hai đại lượng có tỉ lệ nghịch không?",
        "solution": "Tích xy lần lượt là 24,24,24, nên chúng tỉ lệ nghịch với hệ số a=24; công thức y=24/x."
      },
      "misconception": "Kết luận nghịch chỉ vì bảng có y giảm, hoặc nhầm tỉ số y/x giữ nguyên với tích xy giữ nguyên.",
      "summary": "Thuận: tỉ số y/x không đổi (x≠0). Nghịch: tích xy không đổi và khác 0."
    }
  }
]
```

## Fifteen candidate formative questions, correct-index distribution A/B/C/D = 4/4/4/3 (UNREVIEWED)

```json
[
  {
    "id": "RAT03MICRO_001",
    "proposed_card_id": "rat03-core-g6-1",
    "assessed_skill_candidate": "ti-so",
    "question": "Tỉ số của 12 và 18 ở dạng tối giản là gì?",
    "options": [
      "2/3",
      "3/2",
      "2/5",
      "5/3"
    ],
    "answer_index": 0,
    "hints": [
      "Rút gọn phân số 12/18 bằng cách chia tử và mẫu cho 6.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "12/18 = 2/3.",
    "source": "CĐ03 lesson sections 3.1,3.10"
  },
  {
    "id": "RAT03MICRO_002",
    "proposed_card_id": "rat03-core-g6-1",
    "assessed_skill_candidate": "doi-don-vi-ti-so",
    "layer_candidate": "Core-Support",
    "evidence_role_candidate": "FORMATIVE_SUPPORT_ONLY",
    "question": "Tỉ số 2 m so với 50 cm bằng bao nhiêu?",
    "options": [
      "1/25",
      "4",
      "40",
      "0,04"
    ],
    "answer_index": 1,
    "hints": [
      "Đưa cả hai đại lượng về centimet.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "2 m = 200 cm nên 200/50=4.",
    "source": "CĐ03 lesson sections 3.1,3.10"
  },
  {
    "id": "RAT03MICRO_003",
    "proposed_card_id": "rat03-core-g6-1",
    "assessed_skill_candidate": "ti-so-phan-tram",
    "question": "Lớp có 15 học sinh nữ trên tổng số 25 học sinh. Tỉ số phần trăm của số nữ so với cả lớp là:",
    "options": [
      "40%",
      "30%",
      "60%",
      "18%"
    ],
    "answer_index": 2,
    "hints": [
      "Lấy số nữ chia cho tổng số học sinh, không chia cho số nam.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "15/25×100%=60%.",
    "source": "CĐ03 lesson sections 3.1,3.10"
  },
  {
    "id": "RAT03MICRO_004",
    "proposed_card_id": "rat03-core-g7-2",
    "assessed_skill_candidate": "ti-le-thuc",
    "question": "Để kiểm tra 3/5 = 12/20, đẳng thức tích nào cần đúng?",
    "options": [
      "3+20=5+12",
      "3×12=5×20",
      "3/20=5/12",
      "3×20=5×12"
    ],
    "answer_index": 3,
    "hints": [
      "Hai tích chéo là tử bên trái nhân mẫu bên phải và mẫu bên trái nhân tử bên phải.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "3×20=60 và 5×12=60.",
    "source": "CĐ03 lesson sections 3.2,3.3"
  },
  {
    "id": "RAT03MICRO_005",
    "proposed_card_id": "rat03-core-g7-2",
    "assessed_skill_candidate": "tim-x-ti-le-thuc",
    "question": "Giải tỉ lệ thức x/8 = 3/4. Giá trị x là:",
    "options": [
      "6",
      "3/2",
      "32/3",
      "24"
    ],
    "answer_index": 0,
    "hints": [
      "Nhân chéo: 4x=8×3.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "4x=24 nên x=6.",
    "source": "CĐ03 lesson sections 3.2,3.3"
  },
  {
    "id": "RAT03MICRO_006",
    "proposed_card_id": "rat03-core-g7-2",
    "assessed_skill_candidate": "ti-le-thuc",
    "question": "Với b≠0 và d≠0, từ a/b=c/d suy ra:",
    "options": [
      "ac=bd",
      "ad=bc",
      "a+b=c+d",
      "ab=cd"
    ],
    "answer_index": 1,
    "hints": [
      "Nhân chéo hai vế của tỉ lệ thức.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "ad=bc, với các mẫu đã khác 0.",
    "source": "CĐ03 lesson sections 3.2,3.3"
  },
  {
    "id": "RAT03MICRO_007",
    "proposed_card_id": "rat03-core-g7-3",
    "assessed_skill_candidate": "day-ti-so-bang-nhau",
    "question": "Biết x/2=y/3=z/5 và x+y+z=120. Giá trị y là:",
    "options": [
      "24",
      "60",
      "36",
      "12"
    ],
    "answer_index": 2,
    "hints": [
      "Đặt x=2k, y=3k, z=5k rồi cộng.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "10k=120 nên k=12, do đó y=36.",
    "source": "CĐ03 lesson sections 3.4"
  },
  {
    "id": "RAT03MICRO_008",
    "proposed_card_id": "rat03-core-g7-3",
    "assessed_skill_candidate": "chia-theo-ti-le",
    "question": "Chia 96 thành hai phần theo tỉ lệ 3:5. Hai phần lần lượt là:",
    "options": [
      "32 và 64",
      "40 và 56",
      "48 và 48",
      "36 và 60"
    ],
    "answer_index": 3,
    "hints": [
      "Tổng số phần bằng nhau là 3+5=8.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "Mỗi phần đơn vị bằng 96/8=12; hai số là 3×12=36 và 5×12=60.",
    "source": "CĐ03 lesson sections 3.4"
  },
  {
    "id": "RAT03MICRO_009",
    "proposed_card_id": "rat03-core-g7-3",
    "assessed_skill_candidate": "day-ti-so-bang-nhau",
    "question": "Biết x/2=y/3 và x+y=25. Giá trị x là:",
    "options": [
      "10",
      "15",
      "5",
      "20"
    ],
    "answer_index": 0,
    "hints": [
      "Đặt x=2k,y=3k.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "5k=25 nên k=5 và x=10.",
    "source": "CĐ03 lesson sections 3.4"
  },
  {
    "id": "RAT03MICRO_010",
    "proposed_card_id": "rat03-core-g7-4",
    "assessed_skill_candidate": "ti-le-thuan",
    "question": "Nếu y=4x và x=3, y bằng:",
    "options": [
      "7",
      "12",
      "4/3",
      "1"
    ],
    "answer_index": 1,
    "hints": [
      "Thay x=3 vào y=4x.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "y=4×3=12.",
    "source": "CĐ03 lesson sections 3.5,3.6"
  },
  {
    "id": "RAT03MICRO_011",
    "proposed_card_id": "rat03-core-g7-4",
    "assessed_skill_candidate": "he-so-ti-le-thuan",
    "question": "Bảng có x: 2, 4, 5 và y tương ứng: 6, 12, 15. Hệ số tỉ lệ k trong y=kx là:",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answer_index": 2,
    "hints": [
      "Tính y/x tại một cặp có x khác 0, sau đó kiểm tra cặp còn lại.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "6/2=12/4=15/5=3.",
    "source": "CĐ03 lesson sections 3.5,3.6"
  },
  {
    "id": "RAT03MICRO_012",
    "proposed_card_id": "rat03-core-g7-4",
    "assessed_skill_candidate": "ti-le-thuan",
    "question": "Nếu y=4x thì tại x=0, phát biểu nào đúng?",
    "options": [
      "y/x=4 tại x=0",
      "y=4",
      "x không được bằng 0 trong quan hệ y=4x",
      "y=0 nhưng y/x không xác định"
    ],
    "answer_index": 3,
    "hints": [
      "Thay x=0 vào công thức nhưng không chia cho 0.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "Từ y=4×0=0, quan hệ vẫn đúng; tỉ số y/x không xác định tại x=0.",
    "source": "CĐ03 lesson sections 3.5,3.6"
  },
  {
    "id": "RAT03MICRO_013",
    "proposed_card_id": "rat03-core-g7-5",
    "assessed_skill_candidate": "ti-le-nghich",
    "question": "Nếu xy=24 và x=3 thì y bằng:",
    "options": [
      "8",
      "21",
      "72",
      "3/24"
    ],
    "answer_index": 0,
    "hints": [
      "Từ xy=24 suy ra y=24/x.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "y=24/3=8.",
    "source": "CĐ03 lesson sections 3.7,3.8,3.11"
  },
  {
    "id": "RAT03MICRO_014",
    "proposed_card_id": "rat03-core-g7-5",
    "assessed_skill_candidate": "he-so-ti-le-nghich",
    "question": "Với y=12/x (x≠0), hệ số tỉ lệ nghịch là:",
    "options": [
      "1/12",
      "12",
      "x",
      "0"
    ],
    "answer_index": 1,
    "hints": [
      "Đưa công thức về tích xy=a.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "xy=12, nên hệ số a=12.",
    "source": "CĐ03 lesson sections 3.7,3.8,3.11"
  },
  {
    "id": "RAT03MICRO_015",
    "proposed_card_id": "rat03-core-g7-5",
    "assessed_skill_candidate": "phan-biet-thuan-nghich",
    "question": "Bảng x: 2, 3, 6 và y: 18, 12, 6 thể hiện quan hệ nào?",
    "options": [
      "Tỉ lệ thuận với hệ số 6",
      "Không tỉ lệ vì y giảm",
      "Tỉ lệ nghịch vì xy=36",
      "Tỉ lệ thuận vì xy=36"
    ],
    "answer_index": 2,
    "hints": [
      "Kiểm tra tích của từng cặp x,y, không chỉ nhìn xu hướng.",
      "Dùng định nghĩa/công thức của chặng rồi kiểm tra điều kiện áp dụng."
    ],
    "explanation": "Các tích 2×18=3×12=6×6=36, do đó tỉ lệ nghịch.",
    "source": "CĐ03 lesson sections 3.7,3.8,3.11"
  }
]
```

## Full current source lesson (verbatim; do not treat its old paper test as an interactive readiness engine)

<SOURCE_LESSON_BEGIN sha="61df5dd2a1f352c50005d40147bb229344861ed8">
# Chuyên đề 03 – Tỉ lệ – Tỉ lệ thức – Đại lượng tỉ lệ


> **Trạng thái:** Đã kiểm định nội dung học thuật; cấu trúc Roadmap chuẩn 11 mục.
>
> **Lớp trọng tâm:** 6–7
> **Mạch kiến thức:** Số / Đại số
> **Mức ưu tiên:** ⭐⭐⭐⭐

> **Vai trò trong Roadmap:** cầu nối từ số học sang đại số và bài toán thực tế; là nền cho hàm số, mô hình hóa, phần trăm, chuyển động và các bài toán năng suất.
>
> **Phạm vi học:** kiến thức cốt lõi tập trung ở lớp 6–7; các ví dụ chuyển động, năng suất, đồng dạng và mô hình hóa được dùng để kết nối với những chuyên đề học sau.

---

## 🧭 1. Bản đồ kiến thức

![Infographic tổng quan Chuyên đề 03](../../assets/infographics/03/03-01-tong-quan.svg)

> **Xem nhanh:** infographic trên giúp xác định các nhánh chính và phân biệt sớm tỉ lệ thuận với tỉ lệ nghịch. Phần bên dưới giữ vai trò bản đồ chữ chi tiết để tra cứu.

```text
TỈ LỆ – TỈ LỆ THỨC – ĐẠI LƯỢNG TỈ LỆ
│
├── 1. Tỉ số
│   ├── So sánh hai đại lượng
│   ├── Tỉ số phần trăm
│   └── Tỉ lệ bản đồ / thực tế
│
├── 2. Tỉ lệ thức
│   ├── a/b = c/d
│   ├── ad = bc
│   ├── Tìm số chưa biết
│   └── Dãy tỉ số bằng nhau
│
├── 3. Đại lượng tỉ lệ thuận
│   ├── y = kx
│   ├── Hệ số tỉ lệ
│   └── Bảng giá trị
│
├── 4. Đại lượng tỉ lệ nghịch
│   ├── xy = a
│   ├── y = a/x
│   └── Bảng giá trị
│
└── 5. Bài toán thực tế
    ├── Năng suất
    ├── Chuyển động
    ├── Chia theo tỉ lệ
    ├── Bản đồ – kích thước
    └── Mô hình hóa
```

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần có thể:

- [ ] Hiểu tỉ số của hai số; khi dùng tỉ số để so sánh hai đại lượng cùng loại thì biết đưa về cùng đơn vị trước khi tính.
- [ ] Lập và biến đổi đúng tỉ lệ thức.
- [ ] Sử dụng tính chất `ad = bc` để tìm số chưa biết.
- [ ] Vận dụng dãy tỉ số bằng nhau để giải bài toán chia theo tỉ lệ.
- [ ] Nhận biết được đại lượng tỉ lệ thuận và tỉ lệ nghịch.
- [ ] Xác định hệ số tỉ lệ từ bảng hoặc dữ kiện.
- [ ] Lập công thức giữa hai đại lượng.
- [ ] Giải được các bài toán thực tế bằng tỉ lệ và mô hình hóa đơn giản.

---

## 📖 3. Kiến thức cốt lõi

![Infographic kiến thức cốt lõi Chuyên đề 03](../../assets/infographics/03/03-02-kien-thuc-cot-loi.svg)

> Dùng infographic này để ôn nhanh công thức và dấu hiệu nhận biết. Khi chưa hiểu bản chất, đọc tiếp từng mục 3.1–3.11 bên dưới.

### 3.1. Tỉ số

Tỉ số của hai số `a` và `b` (`b ≠ 0`) là thương:

```text
a/b
```

Ví dụ: lớp có 12 học sinh nam và 18 học sinh nữ.

Tỉ số số học sinh nam so với nữ là:

```text
12/18 = 2/3
```

Tỉ số nữ so với tổng số học sinh là:

```text
18/30 = 3/5 = 60%
```

> Khi so sánh hai đại lượng có đơn vị, cần đưa về **cùng đơn vị** trước khi lập tỉ số.

Ví dụ:

```text
2 m : 50 cm = 200 cm : 50 cm = 4
```

không phải `2:50`.

### 3.2. Tỉ lệ thức

Tỉ lệ thức là đẳng thức của hai tỉ số:

```text
a/b = c/d
```

với `b ≠ 0`, `d ≠ 0`.

Tính chất cơ bản:

```text
a/b = c/d  ⇔  ad = bc
```

Ví dụ:

```text
3/5 = 12/20
```

vì:

```text
3·20 = 5·12 = 60
```

### 3.3. Tìm số chưa biết trong tỉ lệ thức

Ví dụ:

```text
x/6 = 5/9
```

Suy ra:

```text
9x = 30
x = 10/3
```

Quy tắc quan trọng: luôn kiểm tra mẫu khác 0 trước khi nhân chéo.

### 3.4. Dãy tỉ số bằng nhau

Với `a, b, c ≠ 0`, nếu:

```text
x/a = y/b = z/c = k
```

thì:

```text
x = ak
y = bk
z = ck
```

Và khi `a + b + c ≠ 0`:

```text
x/a = y/b = z/c = (x+y+z)/(a+b+c)
```

Ngoài công thức cộng, có thể dùng dạng hiệu khi mẫu mới khác `0`. Chẳng hạn nếu

```text
x/a = y/b = k
```

thì, với `a - b ≠ 0`:

```text
(x - y)/(a - b) = k
```

Điểm quan trọng là các phép cộng/trừ ở tử và mẫu phải được thực hiện **tương ứng** và mẫu mới không được bằng `0`.

Ví dụ: chia 120 thành ba phần tỉ lệ `2:3:5`.

Đặt:

```text
x/2 = y/3 = z/5 = k
```

Khi đó:

```text
x+y+z = 10k = 120
k = 12
```

nên:

```text
x = 24, y = 36, z = 60
```

### 3.5. Đại lượng tỉ lệ thuận

Hai đại lượng `x` và `y` tỉ lệ thuận nếu:

```text
y = kx
```

với `k ≠ 0` là hệ số tỉ lệ.

Khi `x` tăng gấp `m` lần thì `y` cũng tăng gấp `m` lần.

Ví dụ: giá 1 kg táo là 40 000 đồng.

```text
Tiền = 40000 · khối lượng
```

Khối lượng tăng gấp đôi thì số tiền cũng tăng gấp đôi.

### 3.6. Tính chất tỉ lệ thuận

Nếu `y = kx`, thì với các cặp giá trị tương ứng có `x1 ≠ 0`, `x2 ≠ 0`:

```text
y1/x1 = y2/x2 = k
```

và khi các tỉ số có nghĩa:

```text
y1/y2 = x1/x2
```

Trường hợp `x = 0` vẫn thuộc quan hệ `y = kx` và khi đó `y = 0`; chỉ là không được viết tỉ số `y/x` vì mẫu bằng `0`.

Ví dụ:

```text
x:  2   3   5
y:  8  12  20
```

Ta có:

```text
y/x = 4
```

nên `y = 4x`.

### 3.7. Đại lượng tỉ lệ nghịch

Hai đại lượng `x` và `y` tỉ lệ nghịch nếu:

```text
xy = a
```

với `a ≠ 0`. Khi `x ≠ 0`, có thể viết tương đương:

```text
y = a/x
```

Khi `x` tăng gấp `m` lần thì `y` giảm `m` lần.

> **Kiểm tra mô hình:** không phải cứ một đại lượng tăng còn đại lượng kia giảm thì chúng tỉ lệ nghịch. Muốn kết luận tỉ lệ nghịch, tích `xy` phải giữ nguyên bằng một hằng số khác `0` trên các cặp giá trị đang xét.

Ví dụ: cùng một quãng đường, vận tốc và thời gian tỉ lệ nghịch:

```text
s = vt
```

Nếu `s` cố định:

```text
v·t = s
```

### 3.8. Tính chất tỉ lệ nghịch

Nếu `x` và `y` tỉ lệ nghịch:

```text
x1y1 = x2y2 = a
```

và:

```text
y1/y2 = x2/x1
```

Ví dụ: một công việc cần 12 người làm trong 10 ngày, năng suất mỗi người như nhau.

Nếu có 15 người thì:

```text
12·10 = 15·t
```

suy ra:

```text
t = 8 ngày
```

### 3.9. Tỉ lệ bản đồ

Tỉ lệ `1:n` nghĩa là 1 đơn vị độ dài trên bản đồ ứng với `n` đơn vị cùng loại ngoài thực tế.

Ví dụ: bản đồ tỉ lệ `1:100000`.

1 cm trên bản đồ ứng với:

```text
100000 cm = 1 km
```

### 3.10. Tỉ số phần trăm

Tỉ số phần trăm của `A` so với `B` (`B ≠ 0`) là:

```text
A/B · 100%
```

Ví dụ: 18 học sinh đạt loại tốt trong 30 học sinh:

```text
18/30 · 100% = 60%
```

### 3.11. Phân biệt tỉ lệ thuận và tỉ lệ nghịch

![So sánh trực quan tỉ lệ thuận y = 2x và tỉ lệ nghịch xy = 8](../../assets/infographics/03/03-04-ti-le-thuan-nghich.svg)

> Nhìn nhanh: nếu `x` gấp đôi mà `y` cũng gấp đôi thì nghĩ đến **tỉ lệ thuận**; nếu `x` gấp đôi mà `y` còn một nửa thì nghĩ đến **tỉ lệ nghịch**. Sau đó vẫn phải kiểm tra đại lượng bất biến: `y/x` hoặc `xy`.

| Dấu hiệu | Tỉ lệ thuận | Tỉ lệ nghịch |
|---|---|---|
| Công thức | `y = kx` | `xy = a` |
| Khi `x` gấp đôi | `y` gấp đôi | `y` còn một nửa |
| Đại lượng bất biến | `y/x` | `xy` |
| Ví dụ | tiền và số lượng | vận tốc và thời gian khi quãng đường cố định |

---

## 🔗 4. Kiến thức liên quan

- [02. Số và phép tính](../02-so-va-phep-tinh/index.md)
- [04. Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- [24. Bài toán thực tế và mô hình hóa](../24-bai-toan-thuc-te/index.md)

Tư duy tỉ lệ cũng xuất hiện trong:

- chuyển động;
- năng suất;
- phần trăm;
- hình học đồng dạng;
- xác suất và thống kê;
- biểu đồ và dữ liệu.

---

## 🧩 5. Các dạng bài cần nắm vững

![Infographic dạng bài trọng tâm Chuyên đề 03](../../assets/infographics/03/03-03-dang-bai-trong-tam.svg)

> Trước khi tính, hãy xác định bài thuộc **tỉ lệ thức**, **chia theo tỉ lệ**, **tỉ lệ thuận** hay **tỉ lệ nghịch**. Nhận đúng mô hình thường quan trọng hơn thao tác tính toán.

### Dạng 1 – Lập và kiểm tra tỉ lệ thức

Ví dụ: kiểm tra `6/9 = 10/15`.

```text
6·15 = 90
9·10 = 90
```

nên tỉ lệ thức đúng.

### Dạng 2 – Tìm số chưa biết

Ví dụ:

```text
4/x = 6/15
```

Suy ra:

```text
6x = 60
x = 10
```

### Dạng 3 – Chia một số theo tỉ lệ

Ví dụ: chia 180 theo tỉ lệ `2:3:4`.

Tổng phần:

```text
2 + 3 + 4 = 9
```

Mỗi phần:

```text
180:9 = 20
```

Ba số là:

```text
40, 60, 80
```

### Dạng 4 – Đại lượng tỉ lệ thuận

Ví dụ: 3 m vải giá 240 000 đồng. Hỏi 5 m cùng loại giá bao nhiêu?

Giá 1 m:

```text
240000:3 = 80000
```

5 m:

```text
80000·5 = 400000 đồng
```

### Dạng 5 – Đại lượng tỉ lệ nghịch

> Chỉ mô hình hóa tỉ lệ nghịch khi **khối lượng công việc không đổi** và các máy có **cùng năng suất**.

Ví dụ: 6 máy làm xong cùng một công việc trong 15 giờ. Nếu 10 máy cùng năng suất thì cần bao lâu?

```text
6·15 = 10·t
```

suy ra:

```text
t = 9 giờ
```

### Dạng 6 – Bài toán phần trăm

Ví dụ: lớp có 40 học sinh, 14 học sinh tham gia câu lạc bộ.

Tỉ lệ:

```text
14/40·100% = 35%
```

### Dạng 7 – Tỉ lệ bản đồ

Bản đồ tỉ lệ `1:50000`, hai điểm cách nhau 6 cm.

Khoảng cách thực tế:

```text
6·50000 = 300000 cm = 3 km
```

### Dạng 8 – Nhận dạng từ bảng số liệu

Cho:

```text
x: 1   2   4   5
y: 6  12  24  30
```

Vì `y/x = 6` không đổi nên `y` tỉ lệ thuận với `x` theo hệ số 6.

### Dạng 9 – Tìm công thức liên hệ

Nếu `y` tỉ lệ thuận với `x` và `y = 15` khi `x = 3`:

```text
15 = 3k
k = 5
```

nên:

```text
y = 5x
```

### Dạng 10 – Bài toán nhiều bước

Ví dụ: một ô tô đi 180 km trong 3 giờ với vận tốc không đổi. Nếu tăng vận tốc 20% thì thời gian đi cùng quãng đường bằng bao nhiêu?

Vận tốc ban đầu:

```text
180:3 = 60 km/h
```

Vận tốc mới:

```text
60·1,2 = 72 km/h
```

Thời gian mới:

```text
180:72 = 2,5 giờ
```

---

## 🚀 6. Dạng bài thi vào lớp 10

### Trọng tâm 1 – Bài toán thực tế ⭐⭐⭐⭐⭐

Tư duy tỉ lệ là công cụ thường dùng trong các bài:

- chuyển động;
- năng suất;
- phần trăm;
- pha trộn;
- tăng giảm;
- chi phí và sản lượng.

### Trọng tâm 2 – Hàm số ⭐⭐⭐⭐⭐

Tỉ lệ thuận là nền trực tiếp của hàm số dạng:

```text
y = ax
```

và giúp học sinh chuyển từ bảng số liệu sang công thức.

### Trọng tâm 3 – Hình học đồng dạng ⭐⭐⭐⭐

Các bài tam giác đồng dạng và Thales sử dụng tỉ số các đoạn thẳng liên tục.

### Trọng tâm 4 – Mô hình hóa ⭐⭐⭐⭐

Nhiều bài không cho sẵn công thức; học sinh phải nhận ra quan hệ tỉ lệ từ ngữ cảnh.

---

## ⚠️ 7. Lỗi sai thường gặp

### ❌ Lỗi 1: Chưa đổi về cùng đơn vị

Sai:

```text
2 m : 50 cm = 2/50
```

Đúng:

```text
200 cm : 50 cm = 4
```

### ❌ Lỗi 2: Nhân chéo sai vị trí

Từ:

```text
a/b = c/d
```

phải suy ra:

```text
ad = bc
```

### ❌ Lỗi 3: Nhầm tỉ lệ thuận với tỉ lệ nghịch

Nếu số người tăng mà thời gian hoàn thành cùng một công việc giảm, đó thường là tỉ lệ nghịch, không phải tỉ lệ thuận.

### ❌ Lỗi 4: Chia theo tỉ lệ nhưng quên cộng tổng số phần

Chia 120 theo `2:3:5` không phải lấy `120:2`, `120:3`, `120:5`.

Phải dùng tổng:

```text
2+3+5 = 10
```

### ❌ Lỗi 5: Dùng quy tắc tam suất máy móc

Trước khi nhân chéo cần xác định quan hệ là thuận hay nghịch.

### ❌ Lỗi 6: Nhầm phần trăm tăng và giá trị mới

Tăng 15% không có nghĩa giá trị mới bằng 15% giá trị cũ.

Giá trị mới bằng:

```text
115% giá trị cũ
```

### ❌ Lỗi 7: Không kiểm tra kết quả bằng trực giác

Nếu số công nhân tăng mà kết quả lại cho thời gian tăng trong một bài cùng khối lượng công việc, cần kiểm tra lại mô hình.

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Rút gọn tỉ số `18:24`.
2. Kiểm tra `4/7 = 12/21` có phải tỉ lệ thức không.
3. Tìm `x`: `x/8 = 3/4`.
4. Cho `y = 5x`. Tính `y` khi `x = 7`.
5. Cho `xy = 36`. Tính `y` khi `x = 9`.

### Mức 2 – Thông hiểu

1. Chia 150 theo tỉ lệ `2:3`.
2. Ba số tỉ lệ `2:3:5` và có tổng 200. Tìm ba số.
3. 4 kg gạo giá 96 000 đồng. Tính giá 7 kg cùng loại.
4. 8 người làm xong một việc trong 12 ngày. Tính thời gian nếu có 6 người, giả sử năng suất như nhau.
5. Bản đồ tỉ lệ `1:200000`, hai điểm cách nhau 3,5 cm. Tính khoảng cách thực tế.

### Mức 3 – Vận dụng

1. Một xe đi 240 km trong 4 giờ. Nếu vận tốc tăng 25%, tính thời gian đi cùng quãng đường.
2. 12 máy sản xuất 3600 sản phẩm trong 5 giờ. Với cùng năng suất, 15 máy trong 8 giờ sản xuất bao nhiêu sản phẩm?
3. Một số tăng từ 80 lên 92. Tính tỉ lệ phần trăm tăng.
4. Tìm `x, y` biết `x:y = 3:5` và `2x + y = 88`.
5. Cho `y` tỉ lệ nghịch với `x`. Biết `x = 4` thì `y = 15`. Tính `y` khi `x = 10`.

### Mức 4 – Nâng cao / tổng hợp

1. Ba đội có số công nhân tỉ lệ `2:3:4`. Tổng số công nhân là 108. Sau khi chuyển 6 người từ đội 3 sang đội 1, tính tỉ lệ mới.
2. Một công việc theo kế hoạch cần 18 người làm 20 ngày. Sau 5 ngày, bổ sung thêm 6 người có cùng năng suất. Hỏi công việc hoàn thành sau tổng cộng bao nhiêu ngày?
3. Một cửa hàng tăng giá 10% rồi giảm giá 10%. So sánh giá cuối với giá ban đầu.
4. Hai đại lượng `x, y` tỉ lệ thuận. Khi `x` tăng 20% thì `y` thay đổi thế nào? Nếu chúng tỉ lệ nghịch thì sao?
5. Từ một bảng số liệu, xác định đại lượng là tỉ lệ thuận, tỉ lệ nghịch hay không thuộc hai loại trên và giải thích.

---

## ✅ 9. Tự kiểm tra

### Mini quiz

1. `12:18` rút gọn thành tỉ số nào?
2. Nếu `x/6 = 4/9`, tính `x`.
3. Chia 100 theo tỉ lệ `2:3`, phần lớn hơn bằng bao nhiêu?
4. Nếu `y = 4x`, `x = 6` thì `y = ?`
5. Nếu `xy = 30`, `x = 5` thì `y = ?`
6. 5 kg hàng giá 150 000 đồng, 8 kg giá bao nhiêu nếu giá/kg không đổi?
7. 10 người làm việc trong 6 ngày; 12 người cùng năng suất cần bao nhiêu ngày?
8. 15 trên 60 bằng bao nhiêu phần trăm?
9. Bản đồ `1:100000`, 2 cm ứng với bao nhiêu km?
10. Khi `x` tăng gấp đôi và `y` giảm một nửa, quan hệ thường là tỉ lệ gì?

### Đáp án

1. `2:3`
2. `8/3`
3. `60`
4. `24`
5. `6`
6. `240 000 đồng`
7. `5 ngày`
8. `25%`
9. `2 km`
10. Tỉ lệ nghịch

### Tự đánh giá

- **9–10 câu đúng:** nắm chắc tư duy tỉ lệ.
- **7–8 câu đúng:** đạt yêu cầu, nên luyện thêm bài thực tế.
- **5–6 câu đúng:** cần phân biệt lại tỉ lệ thuận và nghịch.
- **Dưới 5 câu:** nên ôn lại kiến thức cốt lõi trước khi học hàm số và mô hình hóa.

---

## 🔄 10. Liên kết Roadmap

```text
02. SỐ VÀ PHÉP TÍNH
          ↓
03. TỈ LỆ – TỈ LỆ THỨC
     ┌────┼───────────┐
     ↓    ↓           ↓
    04    10          24
 Biểu thức Hàm số  Bài toán thực tế
```

- **← Trước:** [02. Số và phép tính](../02-so-va-phep-tinh/index.md)
- **→ Đại số:** [04. Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- **→ Hàm số:** [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- **→ Ứng dụng:** [24. Bài toán thực tế và mô hình hóa](../24-bai-toan-thuc-te/index.md)

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Lập và biến đổi đúng tỉ lệ thức.
- [ ] Tìm được số chưa biết bằng tính chất nhân chéo.
- [ ] Giải được bài chia theo tỉ lệ và dãy tỉ số bằng nhau.
- [ ] Phân biệt chắc tỉ lệ thuận và tỉ lệ nghịch.
- [ ] Lập được công thức liên hệ giữa hai đại lượng từ dữ kiện.
- [ ] Giải được bài thực tế về giá tiền, chuyển động, năng suất và bản đồ.
- [ ] Đạt ít nhất **8/10** ở phần tự kiểm tra.
<SOURCE_LESSON_END>
