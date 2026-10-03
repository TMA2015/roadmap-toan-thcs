# NotebookLM source — CĐ02/CĐ23 seven missing skill opportunities R1 (NOT PUBLISHED)

**Packet ID:** `MATH-CORE02-23-GAP-R1-20260930`  
**State:** `PROPOSAL_ONLY / ACADEMIC_REVIEW_REQUIRED`  
**Purpose:** independently review exactly seven append-only formative items that close already-visible card-level skill coverage gaps. This packet does not authorize publication.

## Source locks

- CĐ02 workspace blob: `1dd253ad020b86fd5bc2558e3e5884fd8941b5bf`
- CĐ02 15-item micro bank blob: `3275ecb262fa3942ae9b98fbca2c195efcd87df1`
- CĐ23 workspace blob: `e83cb0fdf82a9a80ba5cb27e968461c9ad2135bb`
- CĐ23 15-item micro bank blob: `3f0e1249ecf104a013dab972b65eeca21b6e52f2`
- CĐ02 full lesson blob: `612a5aa39ba27d6852e7b890c22aac613de1c574`
- CĐ23 full lesson blob: `2630dd951ea50bbfc3577456624b907e2fa92af1`
- KNTT Grade 6 map blob: `6b63ca1a122b7ea2a68eefa364c0a8074235a9ba`
- KNTT Grade 7 map blob: `de3fba60557981f665fea26d621bc7c31e448e40`
- KNTT Grade 8 map blob: `7d91f1c8e15639b5da8e7da72845150424a0a104`

## Curriculum evidence relevant to the seven gaps

KNTT Grade 6 maps PRIMARY CĐ02 to:
- Bài 6: lũy thừa với số mũ tự nhiên → `luy-thua`.
- Bài 10: số nguyên tố/hợp số; phân tích ra thừa số nguyên tố → `phan-tich-thua-so-nguyen-to`.
- Bài 11–12: bội chung, BCNN và ứng dụng; Roadmap alignment includes `bcnn`.
- Bài 13: trục số, thứ tự và giá trị tuyệt đối → `gia-tri-tuyet-doi`.
- Grade-6 practice alignment explicitly includes `quy-dong-so-sanh-phan-so`.

CĐ02 lesson states: lũy thừa precedes multiplication/division in order of operations; prime factorization is used for ƯCLN/BCNN; BCNN takes prime factors with largest exponents; absolute value is distance from the represented point to 0; fractions with different denominators are compared after bringing them to a common denominator.

KNTT Grade 7 Bài 30 maps PRIMARY CĐ23 and existing skills include `xac-suat-co-dien`, `kiem-tra-xac-suat`. KNTT Grade 8 Bài 31–32 likewise includes `xac-suat-co-dien`, `kiem-tra-xac-suat`, `xac-suat-thuc-nghiem`. CĐ23 lesson states the classical formula applies only to finite equal-likelihood outcomes and every probability must lie in [0,1].

## Exact current gaps derived from immutable current micro banks

```json
{
  "topic02": [
    {
      "card": "num02-g6-core-1",
      "title": "Tập hợp số tự nhiên và thứ tự phép tính",
      "declared": [
        "tap-hop-so",
        "thu-tu-phep-tinh",
        "luy-thua"
      ],
      "assessed": [
        "tap-hop-so",
        "thu-tu-phep-tinh"
      ]
    },
    {
      "card": "num02-g6-core-2",
      "title": "Chia hết, số nguyên tố, ƯCLN và BCNN",
      "declared": [
        "dau-hieu-chia-het",
        "so-nguyen-to",
        "phan-tich-thua-so-nguyen-to",
        "ucln",
        "bcnn"
      ],
      "assessed": [
        "dau-hieu-chia-het",
        "so-nguyen-to",
        "ucln"
      ]
    },
    {
      "card": "num02-g6-core-3",
      "title": "Số nguyên, số đối và quy tắc dấu",
      "declared": [
        "so-nguyen-phep-tinh",
        "gia-tri-tuyet-doi"
      ],
      "assessed": [
        "so-nguyen-phep-tinh"
      ]
    },
    {
      "card": "num02-g6-core-4",
      "title": "Phân số và các phép tính",
      "declared": [
        "rut-gon-phan-so",
        "quy-dong-so-sanh-phan-so",
        "phep-tinh-phan-so"
      ],
      "assessed": [
        "rut-gon-phan-so",
        "phep-tinh-phan-so"
      ]
    }
  ],
  "topic23": [
    {
      "card": "prob23-core-3",
      "title": "Xác suất của biến cố đơn giản",
      "declared": [
        "xac-suat-co-dien",
        "kiem-tra-xac-suat"
      ],
      "assessed": [
        "xac-suat-co-dien"
      ]
    },
    {
      "card": "prob23-core-5",
      "title": "Xác suất theo tỉ số và đối chiếu thực nghiệm",
      "declared": [
        "xac-suat-co-dien",
        "kiem-tra-xac-suat",
        "xac-suat-thuc-nghiem"
      ],
      "assessed": [
        "kiem-tra-xac-suat",
        "xac-suat-thuc-nghiem"
      ]
    }
  ]
}
```

Expected missing opportunities:
- CĐ02: `luy-thua`; `phan-tich-thua-so-nguyen-to`; `bcnn`; `gia-tri-tuyet-doi`; `quy-dong-so-sanh-phan-so`.
- CĐ23 card 3: `kiem-tra-xac-suat`.
- CĐ23 card 5: `xac-suat-co-dien`.

## Existing 30 micro questions — anti-duplication reference

```json
[
  {
    "id": "NUM02MICRO_001",
    "card": "num02-g6-core-1",
    "skill": "tap-hop-so",
    "question": "Trong các số sau, số nào là số tự nhiên?"
  },
  {
    "id": "NUM02MICRO_002",
    "card": "num02-g6-core-1",
    "skill": "thu-tu-phep-tinh",
    "question": "Tính 6 + 2 × 3²."
  },
  {
    "id": "NUM02MICRO_003",
    "card": "num02-g6-core-1",
    "skill": "thu-tu-phep-tinh",
    "question": "Tính 2³ + 4 × (9 − 6)."
  },
  {
    "id": "NUM02MICRO_004",
    "card": "num02-g6-core-2",
    "skill": "dau-hieu-chia-het",
    "question": "Số nào sau đây chia hết cho 9?"
  },
  {
    "id": "NUM02MICRO_005",
    "card": "num02-g6-core-2",
    "skill": "so-nguyen-to",
    "question": "Số nào là số nguyên tố?"
  },
  {
    "id": "NUM02MICRO_006",
    "card": "num02-g6-core-2",
    "skill": "ucln",
    "question": "Có 24 bút và 36 quyển vở. Chia được nhiều nhất bao nhiêu phần quà giống nhau, dùng hết cả hai loại?"
  },
  {
    "id": "NUM02MICRO_007",
    "card": "num02-g6-core-3",
    "skill": "so-nguyen-phep-tinh",
    "question": "Tính −8 + 13."
  },
  {
    "id": "NUM02MICRO_008",
    "card": "num02-g6-core-3",
    "skill": "so-nguyen-phep-tinh",
    "question": "Tính (−3) × (−4)."
  },
  {
    "id": "NUM02MICRO_009",
    "card": "num02-g6-core-3",
    "skill": "so-nguyen-phep-tinh",
    "question": "Nhiệt độ đang là −2 °C, sau đó tăng 5 °C. Nhiệt độ mới là bao nhiêu?"
  },
  {
    "id": "NUM02MICRO_010",
    "card": "num02-g6-core-4",
    "skill": "rut-gon-phan-so",
    "question": "Rút gọn phân số 18/24 đến tối giản."
  },
  {
    "id": "NUM02MICRO_011",
    "card": "num02-g6-core-4",
    "skill": "phep-tinh-phan-so",
    "question": "Tính 3/4 − 1/2."
  },
  {
    "id": "NUM02MICRO_012",
    "card": "num02-g6-core-4",
    "skill": "phep-tinh-phan-so",
    "question": "Tính 1/2 + 1/3."
  },
  {
    "id": "NUM02MICRO_013",
    "card": "num02-g6-core-5",
    "skill": "so-huu-ti-thap-phan",
    "question": "Tính 0,6 + 0,25."
  },
  {
    "id": "NUM02MICRO_014",
    "card": "num02-g6-core-5",
    "skill": "phan-tram",
    "question": "25% của 200 bằng bao nhiêu?"
  },
  {
    "id": "NUM02MICRO_015",
    "card": "num02-g6-core-5",
    "skill": "phan-tram",
    "question": "Áo giá 120 000 đồng giảm 10% so với giá ban đầu. Giá phải trả là bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_001",
    "card": "prob23-core-1",
    "skill": "xac-suat-thuc-nghiem",
    "question": "Trong 48 lần quay một vòng quay, kim chỉ ô đỏ 18 lần. Xác suất thực nghiệm của ô đỏ bằng bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_002",
    "card": "prob23-core-1",
    "skill": "xac-suat-thuc-nghiem",
    "question": "Vòng quay chỉ có hai loại ô A và B. Sau 40 lần quay, kim chỉ ô A 18 lần, còn lại chỉ ô B. Xác suất thực nghiệm của B bằng bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_003",
    "card": "prob23-core-1",
    "skill": "xac-suat-thuc-nghiem",
    "question": "Một hộp có một số viên bi. Mai lấy ngẫu nhiên một viên bi ra xem màu rồi trả lại vào hộp. Sau 50 lần thực hiện, Mai ghi nhận được 15 lần lấy được bi xanh, 20 lần bi đỏ và 15 lần bi vàng. Xác suất thực nghiệm của sự kiện \"Mai không lấy được bi xanh\" là bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_004",
    "card": "prob23-core-2",
    "skill": "bien-co",
    "question": "Phép thử: Rút ngẫu nhiên một thẻ từ hộp gồm 5 thẻ giống hệt nhau được đánh số 1, 2, 3, 4, 5. Biến cố \"Rút được thẻ ghi số chẵn\" gồm tập hợp các kết quả thuận lợi nào sau đây?"
  },
  {
    "id": "PRO23MICRO_005",
    "card": "prob23-core-2",
    "skill": "bien-co-chac-chan-khong-the",
    "question": "Một vòng quay có bốn ô ghi các số 2, 3, 5, 7. Biến cố “dừng ở ô ghi số chia hết cho 4” thuộc loại nào?"
  },
  {
    "id": "PRO23MICRO_006",
    "card": "prob23-core-2",
    "skill": "bien-co-chac-chan-khong-the",
    "question": "Hộp chỉ có 2 viên bi đỏ và 3 viên bi xanh. Lấy một viên bi. Biến cố “lấy bi đỏ hoặc bi xanh” thuộc loại nào?"
  },
  {
    "id": "PRO23MICRO_007",
    "card": "prob23-core-3",
    "skill": "xac-suat-co-dien",
    "question": "Vòng quay gồm sáu ô bằng nhau ghi các số 2, 4, 6, 8, 10, 12. Mỗi ô đồng khả năng. Xác suất dừng ở ô ghi số lớn hơn 8 là bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_008",
    "card": "prob23-core-3",
    "skill": "xac-suat-co-dien",
    "question": "Vòng quay chia thành sáu ô bằng nhau, ghi lần lượt 1, 1, 2, 3, 3, 3. Mỗi ô đồng khả năng. Xác suất dừng ở ô ghi số 3 là bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_009",
    "card": "prob23-core-3",
    "skill": "xac-suat-co-dien",
    "question": "Có 12 thẻ cùng kích thước và khối lượng: 4 thẻ ghi “vuông”, 5 thẻ ghi “tam giác”, 3 thẻ ghi “tròn”. Trộn đều, rút ngẫu nhiên một thẻ; mỗi thẻ đồng khả năng. Xác suất rút thẻ “vuông” hoặc “tròn” là bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_010",
    "card": "prob23-core-4",
    "skill": "phep-thu-ngau-nhien",
    "question": "Thao tác nào sau đây là một phép thử ngẫu nhiên?"
  },
  {
    "id": "PRO23MICRO_011",
    "card": "prob23-core-4",
    "skill": "bien-co",
    "question": "Có tám thẻ ghi các số từ 1 đến 8. Chọn ngẫu nhiên một thẻ. Biến cố A: “số ghi trên thẻ lớn hơn 4 và là số chẵn”. Kết quả thuận lợi gồm những số nào?"
  },
  {
    "id": "PRO23MICRO_012",
    "card": "prob23-core-4",
    "skill": "bien-co",
    "question": "Vòng quay có 12 ô ghi các số từ 1 đến 12. Biến cố A: “số ghi ở ô dừng chia hết cho 3 nhưng không chia hết cho 2”. A có bao nhiêu kết quả thuận lợi?"
  },
  {
    "id": "PRO23MICRO_013",
    "card": "prob23-core-5",
    "skill": "kiem-tra-xac-suat",
    "question": "Vòng quay có bốn ô bằng nhau: một ô ghi A, ba ô ghi B. Mỗi ô đồng khả năng. Sau 20 lần quay, ô A xuất hiện 7 lần. Nhận xét nào đúng?"
  },
  {
    "id": "PRO23MICRO_014",
    "card": "prob23-core-5",
    "skill": "xac-suat-thuc-nghiem",
    "question": "Vòng quay có năm ô bằng nhau: hai ô ghi A và ba ô ghi B. Sau 30 lần quay, kim dừng ở A 18 lần. Xác suất thực nghiệm của B bằng bao nhiêu?"
  },
  {
    "id": "PRO23MICRO_015",
    "card": "prob23-core-5",
    "skill": "kiem-tra-xac-suat",
    "question": "Tung một đồng xu cân đối trong hai đợt. Đợt 1: 20 lần có 8 lần ngửa; đợt 2: 30 lần có 21 lần ngửa. Nhận xét nào đúng về xác suất thực nghiệm chung của mặt ngửa?"
  }
]
```

## Seven proposed append-only coverage items

```json
[
  {
    "id": "NUM02MICRO_016",
    "card_id": "num02-g6-core-1",
    "micro_role": "coverage",
    "assessed_skill": "luy-thua",
    "grade": 6,
    "layer": "KNTT-Core",
    "question": "Viết tích 5·5·5·5 dưới dạng lũy thừa.",
    "options": [
      "5³",
      "4⁵",
      "5⁴",
      "20"
    ],
    "answer_index": 2,
    "hints": [
      "Cơ số là thừa số được lặp lại.",
      "Số mũ bằng số lần thừa số 5 xuất hiện."
    ],
    "explanation": "Tích có bốn thừa số 5 nên bằng 5⁴."
  },
  {
    "id": "NUM02MICRO_017",
    "card_id": "num02-g6-core-2",
    "micro_role": "coverage",
    "assessed_skill": "phan-tich-thua-so-nguyen-to",
    "grade": 6,
    "layer": "KNTT-Core",
    "question": "Phân tích 90 ra thừa số nguyên tố được kết quả nào?",
    "options": [
      "2·3²·5",
      "2²·3·5",
      "2·3·5²",
      "9·10"
    ],
    "answer_index": 0,
    "hints": [
      "Chia 90 lần lượt cho các số nguyên tố nhỏ.",
      "90=9·10, rồi tiếp tục phân tích 9 và 10 ra số nguyên tố."
    ],
    "explanation": "90=9·10=3²·2·5=2·3²·5."
  },
  {
    "id": "NUM02MICRO_018",
    "card_id": "num02-g6-core-2",
    "micro_role": "coverage",
    "assessed_skill": "bcnn",
    "grade": 6,
    "layer": "KNTT-Core",
    "question": "BCNN(12,18) bằng bao nhiêu?",
    "options": [
      "6",
      "18",
      "36",
      "216"
    ],
    "answer_index": 2,
    "hints": [
      "Phân tích 12 và 18 ra thừa số nguyên tố rồi lấy mỗi thừa số với số mũ lớn nhất.",
      "12=2²·3 và 18=2·3²."
    ],
    "explanation": "BCNN(12,18)=2²·3²=36."
  },
  {
    "id": "NUM02MICRO_019",
    "card_id": "num02-g6-core-3",
    "micro_role": "coverage",
    "assessed_skill": "gia-tri-tuyet-doi",
    "grade": 6,
    "layer": "KNTT-Core",
    "question": "Trên trục số, điểm biểu diễn −9 cách 0 bao nhiêu đơn vị?",
    "options": [
      "−9",
      "0",
      "9",
      "18"
    ],
    "answer_index": 2,
    "hints": [
      "Khoảng cách trên trục số luôn không âm.",
      "Khoảng cách từ số a đến 0 chính là |a|."
    ],
    "explanation": "|−9|=9, nên điểm −9 cách 0 đúng 9 đơn vị."
  },
  {
    "id": "NUM02MICRO_020",
    "card_id": "num02-g6-core-4",
    "micro_role": "coverage",
    "assessed_skill": "quy-dong-so-sanh-phan-so",
    "grade": 6,
    "layer": "KNTT-Core",
    "question": "So sánh 5/6 và 7/9. Khẳng định nào đúng?",
    "options": [
      "5/6 < 7/9",
      "5/6 > 7/9",
      "5/6 = 7/9",
      "Không thể so sánh"
    ],
    "answer_index": 1,
    "hints": [
      "Quy đồng hai phân số về mẫu chung 18.",
      "5/6=15/18 và 7/9=14/18."
    ],
    "explanation": "Vì 15/18>14/18 nên 5/6>7/9."
  },
  {
    "id": "PRO23MICRO_016",
    "card_id": "prob23-core-3",
    "micro_role": "coverage",
    "assessed_skill": "kiem-tra-xac-suat",
    "grade": 7,
    "layer": "KNTT-Core",
    "question": "Một bạn tính xác suất của một biến cố trong mô hình đơn giản được 7/5. Nhận xét nào đúng?",
    "options": [
      "Kết quả hợp lý vì 7 lớn hơn 5",
      "Kết quả không hợp lý vì xác suất phải nằm trong khoảng từ 0 đến 1",
      "Biến cố đó chắc chắn xảy ra",
      "Biến cố đó không thể xảy ra"
    ],
    "answer_index": 1,
    "hints": [
      "Nhớ miền giá trị của xác suất.",
      "Mọi xác suất đều thỏa 0≤P≤1."
    ],
    "explanation": "7/5=1,4>1 nên không thể là một xác suất; cần kiểm tra lại phép đếm hoặc phép tính."
  },
  {
    "id": "PRO23MICRO_017",
    "card_id": "prob23-core-5",
    "micro_role": "coverage",
    "assessed_skill": "xac-suat-co-dien",
    "grade": 8,
    "layer": "KNTT-Core",
    "question": "Một hộp có 10 thẻ cùng kích thước và khối lượng: 4 thẻ đỏ và 6 thẻ xanh. Rút ngẫu nhiên một thẻ, mỗi thẻ đồng khả năng. Xác suất rút được thẻ đỏ là:",
    "options": [
      "2/5",
      "3/5",
      "4",
      "1/4"
    ],
    "answer_index": 0,
    "hints": [
      "Đếm số kết quả thuận lợi và tổng số kết quả đồng khả năng.",
      "Có 4 thẻ đỏ trong tổng số 10 thẻ."
    ],
    "explanation": "P(đỏ)=4/10=2/5."
  }
]
```

## Required review

For each of the seven IDs, verify:
1. grade/scope/layer/card assignment against the source evidence;
2. mathematical oracle and 0-based answer index;
3. four options are unique and only one is correct;
4. hint/explanation do not introduce a false rule;
5. the item actually assesses the declared missing skill rather than a neighboring skill;
6. it is sufficiently distinct from the 30 existing questions and from another proposed item;
7. difficulty is suitable for short formative Core practice, not Specialized-Challenge.

Also verify these boundaries:
- Existing 30 items, IDs, options, answer keys and learner history are immutable.
- New items must be append-only with `micro_role=coverage`.
- Coverage opportunity is not mastery and must not retroactively change past learner results.
- Do not widen CĐ23 into excluded Grade-8 topics such as multi-step tree diagrams, non-replacement or other advanced extensions.
- Do not claim browser/render/deploy validation; this is academic review only.

Return:
- packet ID + verdict `PASS`, `REVISIONS_REQUIRED` or `INSUFFICIENT_EVIDENCE`;
- a 7-row table: ID | PASS/FAIL | scope/skill | oracle + correct option/index | duplication/pedagogy | correction;
- exact count reviewed: 7/7 or list missing;
- explicit confirmation whether all seven gaps are valid Core opportunities and whether any candidate should be Support/Extension instead.
