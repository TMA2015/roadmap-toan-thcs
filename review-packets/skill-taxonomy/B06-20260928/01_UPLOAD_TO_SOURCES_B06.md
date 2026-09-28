# MATH-SKILL-TAXONOMY-B06-20260928 — PHẢN BIỆN KỸ NĂNG MÔ HÌNH HÓA CĐ08 / CĐ09 / CĐ24

**Một nguồn tạm của B06 — REVIEW_REQUEST / PROPOSAL_ONLY.** GitHub main SHA khóa `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. 71 bản ghi toàn văn được trích trực tiếp từ ngân hàng gốc, gồm cả micro-practice; không thay câu hỏi/ID/đáp án/tag hoặc dữ liệu người học. Chọn cùng Master Plan Toán v1.1 + Notebook Math Permanent v1.1, bỏ chọn B05 và các nguồn tạm cũ.

## A. Ranh giới học thuật

B06 đo **đích đo thực sự** của câu hỏi liên quan đến `lap-phuong-trinh`, `lap-bat-phuong-trinh`, `lap-he-bai-toan`, `lap-he` và context `bai-toan-so`, `chuyen-dong-he`, `nang-suat-he` đang đồng gắn. Gồm **13 CĐ08, 35 CĐ09, 23 CĐ24**. Đây không phải audit toàn bộ kỹ năng/đề bài thực tế CĐ24; nguồn riêng B07 sẽ xem `doc-de-du-kien`, `doi-don-vi`, `kiem-tra-ket-luan`, `chuyen-dong`, `nang-suat` ngoài tập đang chọn.
Không tự gộp hai skill chỉ vì nhãn gần nhau; cũng không tạo skill mới chỉ vì một bối cảnh chuyện kể. Phân biệt quy trình: (1) xác định đại lượng/ẩn và đơn vị, điều kiện; (2) dựng quan hệ; (3) lập một phương trình/bất phương trình, lập một phương trình của hệ, hoặc lập **đầy đủ hệ**; (4) giải, đối chiếu điều kiện thực tế, kết luận.
Một MCQ chọn đáp án số cuối KHÔNG chứng minh tự lập mô hình. Một MCQ chọn đúng một phương trình KHÔNG chứng minh tự lập đủ hai phương trình của hệ, giải hoặc kiểm tra. Tag context chuyen-dong/nang-suat không tự là prerequisite atomic nếu lỗi toán có thể chẩn đoán theo quan hệ/đơn vị.

## B. Dấu hiệu cần phản biện, KHÔNG phải kết luận có sẵn

- `MOD24MICRO_011` và `MOD24MICRO_012` đều có tag `lap-he` nhưng mỗi câu chỉ hỏi **một phương trình** (tổng vé hoặc doanh thu) của hệ. Xác định assessed component hẹp so với full-system modeling.
- `SYS09MICRO_015` hỏi một quan hệ `2x+2y=220` trong bài chuyển động, không cho đủ chứng cứ đã dựng đầy đủ một hệ.
- Một số `SYS09V1_11x` dùng tag `nang-suat-he` trong bối cảnh số sản phẩm bán, giá và doanh thu. Phải đọc thực tế từng đề để phân loại là năng suất hay mua bán/doanh thu, không tự thay tag lúc review.
- `MOD24MICRO_010` và `MOD24V1__051` gần trùng nguyên văn, cần xem clone. Các ID `MOD24V1__...` có **hai dấu gạch dưới** trong nguồn gốc; giữ nguyên ID, không tự "sửa đẹp" ID trong báo cáo.
- Khi bài chỉ hỏi lời giải hoặc đáp số từ câu chuyện, có thể ghi `result_recognition` chứ không khẳng định `model_construction`.
- B06 không có corpus đề thi chính thức theo năm/địa phương, do đó exam_frequency = UNVERIFIED, không xếp hạng Core/Challenge từ số câu tự biên.

## C. Khóa nguồn và xác nhận phạm vi

| Original bank path | Git blob SHA | Số câu bank |
|---|---|---:|
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json` | `6b226a417d0bb2d6498b74d9206b85c942499a54` | 15 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-01.json` | `fcc302b520bdedd1bddc7194d195fda5b9893b0a` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json` | `717e6988da610c382e744118fe4aca0c20d40244` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json` | `ad5ad4937bc971d3a85a894a838cd559671df4da` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json` | `06ee1a503f03de3495db198594a5d560ec366813` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-05.json` | `29a6b1d992b8e28bb352b07ca56dbd9d537406b5` | 12 |
| `docs/assets/data/practice/09-he-phuong-trinh-micro-v1.json` | `39b7154b7da71b818a367fdfe1d869caaa1bbfbd` | 15 |
| `docs/assets/data/practice/09-he-phuong-trinh-v1-01.json` | `f74f701f23c2c2fa03e7e6f2162954d52ec0586f` | 30 |
| `docs/assets/data/practice/09-he-phuong-trinh-v1-02.json` | `ea101b62695d37174dfc257e6d49e5b09a45893e` | 30 |
| `docs/assets/data/practice/09-he-phuong-trinh-v1-03.json` | `18e4f5e4d00956e3f6a0a979cf5d59f5afb506e3` | 30 |
| `docs/assets/data/practice/09-he-phuong-trinh-v1-04.json` | `09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f` | 30 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json` | `0c11446a01aec62e32b2320f0f537dd52133906a` | 15 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json` | `2099b3e03210d58c7dca4e55fc8e2d88f0db5d06` | 30 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json` | `03535d510cd91cd52df48312325536edc5bb4423` | 30 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json` | `d3054fdb6da255cfd7cf571015e0a10f2903f467` | 30 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json` | `3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8` | 30 |

Staging blobs CĐ08 `bd5c742b08f05602a3d1a02e5ead0ad70c00ef0d`, CĐ09 `b65389c9f63c2137a0872321d4170a84ab9f8e86`, CĐ24 `4c059bc165b25fae61810e8eb2c4a938cfc3862b`. Bảng SHA phản ánh `main` trước PR sửa ký hiệu B05, không đọc nhầm nhánh review.

```json
{
  "packet_id": "MATH-SKILL-TAXONOMY-B06-20260928",
  "source_main_sha": "88143e6b2690edfe721f8d74d2dbcb251bc55ab3",
  "expected_total": 71,
  "phases": {
    "A": {
      "topic": "B06-CĐ08-modeling",
      "count": 13,
      "tag_occurrences": {
        "lap-phuong-trinh": 9,
        "lap-bat-phuong-trinh": 4
      },
      "ids": [
        "EQ08MICRO_013",
        "EQ08MICRO_014",
        "EQ08MICRO_015",
        "EQ08V1_107",
        "EQ08V1_108",
        "EQ08V1_109",
        "EQ08V1_110",
        "EQ08V1_111",
        "EQ08V1_112",
        "EQ08V1_113",
        "EQ08V1_114",
        "EQ08V1_115",
        "EQ08V1_116"
      ]
    },
    "B": {
      "topic": "B06-CĐ09-modeling",
      "count": 35,
      "tag_occurrences": {
        "lap-he-bai-toan": 33,
        "bai-toan-so": 13,
        "chuyen-dong-he": 11,
        "nang-suat-he": 10
      },
      "ids": [
        "SYS09MICRO_013",
        "SYS09MICRO_014",
        "SYS09MICRO_015",
        "SYS09V1_089",
        "SYS09V1_090",
        "SYS09V1_091",
        "SYS09V1_092",
        "SYS09V1_093",
        "SYS09V1_094",
        "SYS09V1_095",
        "SYS09V1_096",
        "SYS09V1_097",
        "SYS09V1_098",
        "SYS09V1_099",
        "SYS09V1_100",
        "SYS09V1_101",
        "SYS09V1_102",
        "SYS09V1_103",
        "SYS09V1_104",
        "SYS09V1_105",
        "SYS09V1_106",
        "SYS09V1_107",
        "SYS09V1_108",
        "SYS09V1_109",
        "SYS09V1_110",
        "SYS09V1_111",
        "SYS09V1_112",
        "SYS09V1_113",
        "SYS09V1_114",
        "SYS09V1_115",
        "SYS09V1_116",
        "SYS09V1_117",
        "SYS09V1_118",
        "SYS09V1_119",
        "SYS09V1_120"
      ]
    },
    "C": {
      "topic": "B06-CĐ24-modeling",
      "count": 23,
      "tag_occurrences": {
        "lap-phuong-trinh": 11,
        "lap-he": 12
      },
      "ids": [
        "MOD24MICRO_010",
        "MOD24MICRO_011",
        "MOD24MICRO_012",
        "MOD24V1__051",
        "MOD24V1__052",
        "MOD24V1__053",
        "MOD24V1__054",
        "MOD24V1__055",
        "MOD24V1__056",
        "MOD24V1__057",
        "MOD24V1__058",
        "MOD24V1__059",
        "MOD24V1__060",
        "MOD24V1__061",
        "MOD24V1__062",
        "MOD24V1__063",
        "MOD24V1__064",
        "MOD24V1__065",
        "MOD24V1__066",
        "MOD24V1__067",
        "MOD24V1__068",
        "MOD24V1__069",
        "MOD24V1__070"
      ]
    }
  }
}
```

## D. Toàn văn câu hỏi theo phase (giữ question/options/answer/explanation/tags)

### PHASE A — 13 câu B06-CĐ08-modeling

```json
[
  {
    "id": "EQ08MICRO_013",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
    "source_sha": "6b226a417d0bb2d6498b74d9206b85c942499a54",
    "record": {
      "id": "EQ08MICRO_013",
      "card_id": "eq08-core-5",
      "micro_role": "base",
      "question": "Một số tăng thêm 5 thì bằng 17. Gọi số đó là x. Phương trình đúng là:",
      "options": [
        "\\(x+5=17\\)",
        "\\(x-5=17\\)",
        "\\(5x=17\\)",
        "\\(x+17=5\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "basic",
      "explanation": "“Tăng thêm 5” nghĩa là x+5.",
      "hints": [
        "Dịch câu chữ thành phép toán.",
        "Số ban đầu là x."
      ],
      "curriculum": {
        "book": "KNTT",
        "grades": [
          8,
          9
        ],
        "level": "core"
      },
      "exam": {
        "entrance10": "foundation",
        "specialized": "none"
      }
    }
  },
  {
    "id": "EQ08MICRO_014",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
    "source_sha": "6b226a417d0bb2d6498b74d9206b85c942499a54",
    "record": {
      "id": "EQ08MICRO_014",
      "card_id": "eq08-core-5",
      "micro_role": "trap",
      "question": "Một hình chữ nhật có chiều dài hơn chiều rộng 3 cm. Gọi chiều rộng là x, chiều dài là:",
      "options": [
        "\\(x+3\\)",
        "\\(x-3\\)",
        "\\(3x\\)",
        "\\(x/3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "intermediate",
      "explanation": "Chiều dài lớn hơn chiều rộng 3 nên bằng x+3.",
      "hints": [
        "“Hơn 3” là cộng 3.",
        "Biến x đang đại diện cho chiều rộng."
      ],
      "option_evidence": {
        "1": {
          "signal": "lap-phuong-trinh-dao-quan-he",
          "signal_weight": 2,
          "feedback_hint": "Chiều dài lớn hơn chiều rộng, nên phải cộng 3 chứ không trừ 3."
        }
      },
      "curriculum": {
        "book": "KNTT",
        "grades": [
          8,
          9
        ],
        "level": "core"
      },
      "exam": {
        "entrance10": "foundation",
        "specialized": "none"
      }
    }
  },
  {
    "id": "EQ08MICRO_015",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
    "source_sha": "6b226a417d0bb2d6498b74d9206b85c942499a54",
    "record": {
      "id": "EQ08MICRO_015",
      "card_id": "eq08-core-5",
      "micro_role": "apply",
      "question": "Tổng hai số liên tiếp là 41. Gọi số bé là x. Phương trình đúng là:",
      "options": [
        "\\(x+(x+1)=41\\)",
        "\\(x+(x-1)=41\\)",
        "\\(2x+1=40\\)",
        "\\(x(x+1)=41\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "intermediate",
      "explanation": "Hai số liên tiếp là x và x+1; tổng bằng 41.",
      "hints": [
        "Viết số lớn theo x.",
        "Số lớn hơn số bé 1 đơn vị."
      ],
      "curriculum": {
        "book": "KNTT",
        "grades": [
          8,
          9
        ],
        "level": "core"
      },
      "exam": {
        "entrance10": "foundation",
        "specialized": "none"
      }
    }
  },
  {
    "id": "EQ08V1_107",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_107",
      "question": "Tổng của một số và 7 bằng 19. Số đó là:",
      "options": [
        "12",
        "13",
        "11",
        "24"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "Lập phương trình x+7=19."
    }
  },
  {
    "id": "EQ08V1_108",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_108",
      "question": "Một số gấp 3 lần rồi bớt 5 được 16. Số đó là:",
      "options": [
        "7",
        "8",
        "6",
        "14"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "Lập phương trình 3x-5=16."
    }
  },
  {
    "id": "EQ08V1_109",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_109",
      "question": "Hai lần một số cộng 4 bằng 18. Số đó là:",
      "options": [
        "7",
        "8",
        "6",
        "14"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "Lập phương trình 2x+4=18."
    }
  },
  {
    "id": "EQ08V1_110",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_110",
      "question": "Mẹ hơn con 24 tuổi và tổng tuổi hai mẹ con là 50. Tuổi con là:",
      "options": [
        "13",
        "14",
        "12",
        "26"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "Gọi tuổi con là x, tuổi mẹ x+24; x+(x+24)=50."
    }
  },
  {
    "id": "EQ08V1_111",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_111",
      "question": "Chu vi hình chữ nhật là 30 cm, chiều dài hơn chiều rộng 3 cm. Chiều rộng là:",
      "options": [
        "6",
        "7",
        "5",
        "12"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "Gọi rộng x, dài x+3; 2[x+(x+3)]=30."
    }
  },
  {
    "id": "EQ08V1_112",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_112",
      "question": "Một số khi chia cho 4 rồi cộng 3 được 8. Số đó là:",
      "options": [
        "20",
        "21",
        "19",
        "40"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "Lập phương trình x/4+3=8."
    }
  },
  {
    "id": "EQ08V1_113",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_113",
      "question": "Bạn có 200.000 đồng, đã dùng 60.000 đồng. Mỗi vé giá 35.000 đồng. Số vé tối đa có thể mua là:",
      "options": [
        "4",
        "5",
        "3",
        "2"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-bat-phuong-trinh"
        ],
        "type": "lap-bat-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "Lập 35000n≤140000, nên n≤4 và n là số nguyên không âm."
    }
  },
  {
    "id": "EQ08V1_114",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_114",
      "question": "Một thang máy chịu tối đa 600 kg. Đã có 3 người tổng 210 kg; mỗi kiện hàng 65 kg. Số kiện tối đa là:",
      "options": [
        "6",
        "7",
        "5",
        "4"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-bat-phuong-trinh"
        ],
        "type": "lap-bat-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "210+65n≤600, suy ra n≤6."
    }
  },
  {
    "id": "EQ08V1_115",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_115",
      "question": "Bạn cần ít nhất 120 điểm, đã có 78 điểm. Mỗi bài đúng thêm 7 điểm. Cần đúng ít nhất bao nhiêu bài nữa?",
      "options": [
        "6",
        "7",
        "5",
        "4"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-bat-phuong-trinh"
        ],
        "type": "lap-bat-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "78+7n≥120, suy ra n≥6."
    }
  },
  {
    "id": "EQ08V1_116",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json",
    "source_sha": "06ee1a503f03de3495db198594a5d560ec366813",
    "record": {
      "id": "EQ08V1_116",
      "question": "Một xe chở tối đa 1000 kg, hàng hiện có 640 kg. Mỗi thùng 45 kg. Chở thêm tối đa bao nhiêu thùng?",
      "options": [
        "8",
        "9",
        "7",
        "6"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "lap-bat-phuong-trinh"
        ],
        "type": "lap-bat-phuong-trinh"
      },
      "difficulty": "intermediate",
      "explanation": "640+45n≤1000, suy ra n≤8."
    }
  }
]
```

### PHASE B — 35 câu B06-CĐ09-modeling

```json
[
  {
    "id": "SYS09MICRO_013",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-micro-v1.json",
    "source_sha": "39b7154b7da71b818a367fdfe1d869caaa1bbfbd",
    "record": {
      "id": "SYS09MICRO_013",
      "card_id": "sys09-core-5",
      "micro_role": "base",
      "question": "Tổng hai số là 20 và hiệu số lớn trừ số bé là 4. Gọi số lớn x, số bé y. Hệ đúng là:",
      "options": [
        "\\(x+y=20,\\ x-y=4\\)",
        "\\(x+y=4,\\ x-y=20\\)",
        "\\(x-y=20,\\ y-x=4\\)",
        "\\(xy=20,\\ x+y=4\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan"
        ],
        "type": "lap-he-bai-toan",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "basic",
      "explanation": "Dịch trực tiếp hai quan hệ tổng và hiệu.",
      "hints": [
        "Quan hệ thứ nhất là tổng.",
        "Quan hệ thứ hai là hiệu số lớn-số bé."
      ],
      "curriculum": {
        "book": "KNTT",
        "grades": [
          9
        ],
        "level": "core"
      },
      "exam": {
        "entrance10": "foundation",
        "specialized": "none"
      }
    }
  },
  {
    "id": "SYS09MICRO_014",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-micro-v1.json",
    "source_sha": "39b7154b7da71b818a367fdfe1d869caaa1bbfbd",
    "record": {
      "id": "SYS09MICRO_014",
      "card_id": "sys09-core-5",
      "micro_role": "trap",
      "question": "Số có hai chữ số với hàng chục x và hàng đơn vị y được viết là:",
      "options": [
        "\\(10x+y\\)",
        "\\(x+10y\\)",
        "\\(xy\\)",
        "\\(x+y\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "bai-toan-so"
        ],
        "type": "bai-toan-so",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "intermediate",
      "explanation": "Giá trị hàng chục là 10x, hàng đơn vị là y.",
      "hints": [
        "Hàng chục có giá trị gấp 10.",
        "Cộng giá trị hai hàng."
      ],
      "option_evidence": {
        "1": {
          "signal": "bieu-dien-so-hai-chu-so-dao-hang",
          "signal_weight": 2,
          "feedback_hint": "x là hàng chục nên phải nhân 10; y là hàng đơn vị."
        }
      },
      "curriculum": {
        "book": "KNTT",
        "grades": [
          9
        ],
        "level": "core"
      },
      "exam": {
        "entrance10": "foundation",
        "specialized": "none"
      }
    }
  },
  {
    "id": "SYS09MICRO_015",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-micro-v1.json",
    "source_sha": "39b7154b7da71b818a367fdfe1d869caaa1bbfbd",
    "record": {
      "id": "SYS09MICRO_015",
      "card_id": "sys09-core-5",
      "micro_role": "apply",
      "question": "Hai xe đi ngược chiều, vận tốc lần lượt x và y km/h. Sau 2 giờ tổng quãng đường là 220 km. Phương trình đúng là:",
      "options": [
        "\\(2x+2y=220\\)",
        "\\(x+y=220\\)",
        "\\(2x-y=220\\)",
        "\\(xy=110\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "intermediate",
      "explanation": "Mỗi xe đi 2 giờ nên quãng đường là 2x và 2y; tổng bằng 220.",
      "hints": [
        "Quãng đường = vận tốc × thời gian.",
        "Cộng quãng đường hai xe."
      ],
      "curriculum": {
        "book": "KNTT",
        "grades": [
          9
        ],
        "level": "core"
      },
      "exam": {
        "entrance10": "foundation",
        "specialized": "none"
      }
    }
  },
  {
    "id": "SYS09V1_089",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-03.json",
    "source_sha": "18e4f5e4d00956e3f6a0a979cf5d59f5afb506e3",
    "record": {
      "id": "SYS09V1_089",
      "question": "Tổng của hai số là 14 và hiệu của số lớn với số bé là 6. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=14\\\\x-y=6\\end{cases}\\)",
        "\\(\\begin{cases}x+y=6\\\\x-y=14\\end{cases}\\)",
        "\\(\\begin{cases}x-y=14\\\\x+y=-6\\end{cases}\\)",
        "\\(\\begin{cases}xy=14\\\\x-y=6\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "basic",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_090",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-03.json",
    "source_sha": "18e4f5e4d00956e3f6a0a979cf5d59f5afb506e3",
    "record": {
      "id": "SYS09V1_090",
      "question": "Tổng của hai số là 16 và hiệu của số lớn với số bé là 6. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=16\\\\x-y=6\\end{cases}\\)",
        "\\(\\begin{cases}x+y=6\\\\x-y=16\\end{cases}\\)",
        "\\(\\begin{cases}x-y=16\\\\x+y=-6\\end{cases}\\)",
        "\\(\\begin{cases}xy=16\\\\x-y=6\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "basic",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_091",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_091",
      "question": "Tổng của hai số là 18 và hiệu của số lớn với số bé là 6. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=18\\\\x-y=6\\end{cases}\\)",
        "\\(\\begin{cases}x+y=6\\\\x-y=18\\end{cases}\\)",
        "\\(\\begin{cases}x-y=18\\\\x+y=-6\\end{cases}\\)",
        "\\(\\begin{cases}xy=18\\\\x-y=6\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "basic",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_092",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_092",
      "question": "Tổng của hai số là 20 và hiệu của số lớn với số bé là 6. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=20\\\\x-y=6\\end{cases}\\)",
        "\\(\\begin{cases}x+y=6\\\\x-y=20\\end{cases}\\)",
        "\\(\\begin{cases}x-y=20\\\\x+y=-6\\end{cases}\\)",
        "\\(\\begin{cases}xy=20\\\\x-y=6\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "basic",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_093",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_093",
      "question": "Tổng của hai số là 22 và hiệu của số lớn với số bé là 6. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=22\\\\x-y=6\\end{cases}\\)",
        "\\(\\begin{cases}x+y=6\\\\x-y=22\\end{cases}\\)",
        "\\(\\begin{cases}x-y=22\\\\x+y=-6\\end{cases}\\)",
        "\\(\\begin{cases}xy=22\\\\x-y=6\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "basic",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_094",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_094",
      "question": "Tổng của hai số là 19 và hiệu của số lớn với số bé là 11. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=19\\\\x-y=11\\end{cases}\\)",
        "\\(\\begin{cases}x+y=11\\\\x-y=19\\end{cases}\\)",
        "\\(\\begin{cases}x-y=19\\\\x+y=-11\\end{cases}\\)",
        "\\(\\begin{cases}xy=19\\\\x-y=11\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_095",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_095",
      "question": "Tổng của hai số là 15 và hiệu của số lớn với số bé là 5. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=15\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}x+y=5\\\\x-y=15\\end{cases}\\)",
        "\\(\\begin{cases}x-y=15\\\\x+y=-5\\end{cases}\\)",
        "\\(\\begin{cases}xy=15\\\\x-y=5\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_096",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_096",
      "question": "Tổng của hai số là 17 và hiệu của số lớn với số bé là 5. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=17\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}x+y=5\\\\x-y=17\\end{cases}\\)",
        "\\(\\begin{cases}x-y=17\\\\x+y=-5\\end{cases}\\)",
        "\\(\\begin{cases}xy=17\\\\x-y=5\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_097",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_097",
      "question": "Tổng của hai số là 19 và hiệu của số lớn với số bé là 5. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=19\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}x+y=5\\\\x-y=19\\end{cases}\\)",
        "\\(\\begin{cases}x-y=19\\\\x+y=-5\\end{cases}\\)",
        "\\(\\begin{cases}xy=19\\\\x-y=5\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_098",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_098",
      "question": "Tổng của hai số là 21 và hiệu của số lớn với số bé là 5. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=21\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}x+y=5\\\\x-y=21\\end{cases}\\)",
        "\\(\\begin{cases}x-y=21\\\\x+y=-5\\end{cases}\\)",
        "\\(\\begin{cases}xy=21\\\\x-y=5\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_099",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_099",
      "question": "Tổng của hai số là 18 và hiệu của số lớn với số bé là 10. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=18\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}x+y=10\\\\x-y=18\\end{cases}\\)",
        "\\(\\begin{cases}x-y=18\\\\x+y=-10\\end{cases}\\)",
        "\\(\\begin{cases}xy=18\\\\x-y=10\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_100",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_100",
      "question": "Tổng của hai số là 20 và hiệu của số lớn với số bé là 10. Nếu gọi số lớn là \\(x\\), số bé là \\(y\\), hệ nào mô tả bài toán?",
      "options": [
        "\\(\\begin{cases}x+y=20\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}x+y=10\\\\x-y=20\\end{cases}\\)",
        "\\(\\begin{cases}x-y=20\\\\x+y=-10\\end{cases}\\)",
        "\\(\\begin{cases}xy=20\\\\x-y=10\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "bai-toan-so"
        ],
        "type": "lap-he-bai-toan"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng cho phương trình \\(x+y\\), còn hiệu số lớn trừ số bé cho phương trình \\(x-y\\)."
    }
  },
  {
    "id": "SYS09V1_101",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_101",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 2 giờ và đi được tổng quãng đường 100 km. Biết \\(x-y=10\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}2x+2y=100\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}x+y=100\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}2x-2y=100\\\\x+y=10\\end{cases}\\)",
        "\\(\\begin{cases}xy=100\\\\x-y=10\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_102",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_102",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 3 giờ và đi được tổng quãng đường 180 km. Biết \\(x-y=10\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}3x+3y=180\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}x+y=180\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}3x-3y=180\\\\x+y=10\\end{cases}\\)",
        "\\(\\begin{cases}xy=180\\\\x-y=10\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_103",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_103",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 4 giờ và đi được tổng quãng đường 280 km. Biết \\(x-y=10\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}4x+4y=280\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}x+y=280\\\\x-y=10\\end{cases}\\)",
        "\\(\\begin{cases}4x-4y=280\\\\x+y=10\\end{cases}\\)",
        "\\(\\begin{cases}xy=280\\\\x-y=10\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_104",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_104",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 2 giờ và đi được tổng quãng đường 130 km. Biết \\(x-y=25\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}2x+2y=130\\\\x-y=25\\end{cases}\\)",
        "\\(\\begin{cases}x+y=130\\\\x-y=25\\end{cases}\\)",
        "\\(\\begin{cases}2x-2y=130\\\\x+y=25\\end{cases}\\)",
        "\\(\\begin{cases}xy=130\\\\x-y=25\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_105",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_105",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 3 giờ và đi được tổng quãng đường 165 km. Biết \\(x-y=5\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}3x+3y=165\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}x+y=165\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}3x-3y=165\\\\x+y=5\\end{cases}\\)",
        "\\(\\begin{cases}xy=165\\\\x-y=5\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_106",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_106",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 4 giờ và đi được tổng quãng đường 260 km. Biết \\(x-y=5\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}4x+4y=260\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}x+y=260\\\\x-y=5\\end{cases}\\)",
        "\\(\\begin{cases}4x-4y=260\\\\x+y=5\\end{cases}\\)",
        "\\(\\begin{cases}xy=260\\\\x-y=5\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_107",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_107",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 2 giờ và đi được tổng quãng đường 120 km. Biết \\(x-y=20\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}2x+2y=120\\\\x-y=20\\end{cases}\\)",
        "\\(\\begin{cases}x+y=120\\\\x-y=20\\end{cases}\\)",
        "\\(\\begin{cases}2x-2y=120\\\\x+y=20\\end{cases}\\)",
        "\\(\\begin{cases}xy=120\\\\x-y=20\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_108",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_108",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 3 giờ và đi được tổng quãng đường 210 km. Biết \\(x-y=20\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}3x+3y=210\\\\x-y=20\\end{cases}\\)",
        "\\(\\begin{cases}x+y=210\\\\x-y=20\\end{cases}\\)",
        "\\(\\begin{cases}3x-3y=210\\\\x+y=20\\end{cases}\\)",
        "\\(\\begin{cases}xy=210\\\\x-y=20\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_109",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_109",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 4 giờ và đi được tổng quãng đường 240 km. Biết \\(x-y=0\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}4x+4y=240\\\\x-y=0\\end{cases}\\)",
        "\\(\\begin{cases}x+y=240\\\\x-y=0\\end{cases}\\)",
        "\\(\\begin{cases}4x-4y=240\\\\x+y=0\\end{cases}\\)",
        "\\(\\begin{cases}xy=240\\\\x-y=0\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_110",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_110",
      "question": "Hai xe đi ngược chiều với vận tốc \\(x,y\\) km/h trong 2 giờ và đi được tổng quãng đường 110 km. Biết \\(x-y=15\\). Hệ nào phù hợp?",
      "options": [
        "\\(\\begin{cases}2x+2y=110\\\\x-y=15\\end{cases}\\)",
        "\\(\\begin{cases}x+y=110\\\\x-y=15\\end{cases}\\)",
        "\\(\\begin{cases}2x-2y=110\\\\x+y=15\\end{cases}\\)",
        "\\(\\begin{cases}xy=110\\\\x-y=15\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "chuyen-dong-he"
        ],
        "type": "chuyen-dong-he"
      },
      "difficulty": "intermediate",
      "explanation": "Quãng đường bằng vận tốc nhân thời gian; tổng quãng đường là \\(t(x+y)\\)."
    }
  },
  {
    "id": "SYS09V1_111",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_111",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 2 đơn vị và \\(y\\) sản phẩm loại B giá 3 đơn vị. Tổng số sản phẩm là 16, doanh thu 38. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=16\\\\2x+3y=38\\end{cases}\\)",
        "\\(\\begin{cases}x-y=16\\\\2x+3y=38\\end{cases}\\)",
        "\\(\\begin{cases}x+y=38\\\\2x+3y=16\\end{cases}\\)",
        "\\(\\begin{cases}xy=16\\\\2x+3y=38\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_112",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_112",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 3 đơn vị và \\(y\\) sản phẩm loại B giá 4 đơn vị. Tổng số sản phẩm là 18, doanh thu 61. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=18\\\\3x+4y=61\\end{cases}\\)",
        "\\(\\begin{cases}x-y=18\\\\3x+4y=61\\end{cases}\\)",
        "\\(\\begin{cases}x+y=61\\\\3x+4y=18\\end{cases}\\)",
        "\\(\\begin{cases}xy=18\\\\3x+4y=61\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_113",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_113",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 4 đơn vị và \\(y\\) sản phẩm loại B giá 5 đơn vị. Tổng số sản phẩm là 20, doanh thu 88. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=20\\\\4x+5y=88\\end{cases}\\)",
        "\\(\\begin{cases}x-y=20\\\\4x+5y=88\\end{cases}\\)",
        "\\(\\begin{cases}x+y=88\\\\4x+5y=20\\end{cases}\\)",
        "\\(\\begin{cases}xy=20\\\\4x+5y=88\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_114",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_114",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 2 đơn vị và \\(y\\) sản phẩm loại B giá 6 đơn vị. Tổng số sản phẩm là 22, doanh thu 80. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=22\\\\2x+6y=80\\end{cases}\\)",
        "\\(\\begin{cases}x-y=22\\\\2x+6y=80\\end{cases}\\)",
        "\\(\\begin{cases}x+y=80\\\\2x+6y=22\\end{cases}\\)",
        "\\(\\begin{cases}xy=22\\\\2x+6y=80\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_115",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_115",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 3 đơn vị và \\(y\\) sản phẩm loại B giá 3 đơn vị. Tổng số sản phẩm là 24, doanh thu 72. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=24\\\\3x+3y=72\\end{cases}\\)",
        "\\(\\begin{cases}x-y=24\\\\3x+3y=72\\end{cases}\\)",
        "\\(\\begin{cases}x+y=72\\\\3x+3y=24\\end{cases}\\)",
        "\\(\\begin{cases}xy=24\\\\3x+3y=72\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_116",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_116",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 4 đơn vị và \\(y\\) sản phẩm loại B giá 4 đơn vị. Tổng số sản phẩm là 21, doanh thu 84. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=21\\\\4x+4y=84\\end{cases}\\)",
        "\\(\\begin{cases}x-y=21\\\\4x+4y=84\\end{cases}\\)",
        "\\(\\begin{cases}x+y=84\\\\4x+4y=21\\end{cases}\\)",
        "\\(\\begin{cases}xy=21\\\\4x+4y=84\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_117",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_117",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 2 đơn vị và \\(y\\) sản phẩm loại B giá 5 đơn vị. Tổng số sản phẩm là 23, doanh thu 67. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=23\\\\2x+5y=67\\end{cases}\\)",
        "\\(\\begin{cases}x-y=23\\\\2x+5y=67\\end{cases}\\)",
        "\\(\\begin{cases}x+y=67\\\\2x+5y=23\\end{cases}\\)",
        "\\(\\begin{cases}xy=23\\\\2x+5y=67\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_118",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_118",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 3 đơn vị và \\(y\\) sản phẩm loại B giá 6 đơn vị. Tổng số sản phẩm là 25, doanh thu 99. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=25\\\\3x+6y=99\\end{cases}\\)",
        "\\(\\begin{cases}x-y=25\\\\3x+6y=99\\end{cases}\\)",
        "\\(\\begin{cases}x+y=99\\\\3x+6y=25\\end{cases}\\)",
        "\\(\\begin{cases}xy=25\\\\3x+6y=99\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "advanced",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_119",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_119",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 4 đơn vị và \\(y\\) sản phẩm loại B giá 3 đơn vị. Tổng số sản phẩm là 27, doanh thu 99. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=27\\\\4x+3y=99\\end{cases}\\)",
        "\\(\\begin{cases}x-y=27\\\\4x+3y=99\\end{cases}\\)",
        "\\(\\begin{cases}x+y=99\\\\4x+3y=27\\end{cases}\\)",
        "\\(\\begin{cases}xy=27\\\\4x+3y=99\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "advanced",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  },
  {
    "id": "SYS09V1_120",
    "source_path": "docs/assets/data/practice/09-he-phuong-trinh-v1-04.json",
    "source_sha": "09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f",
    "record": {
      "id": "SYS09V1_120",
      "question": "Một cửa hàng bán \\(x\\) sản phẩm loại A giá 2 đơn vị và \\(y\\) sản phẩm loại B giá 4 đơn vị. Tổng số sản phẩm là 29, doanh thu 78. Hệ nào đúng?",
      "options": [
        "\\(\\begin{cases}x+y=29\\\\2x+4y=78\\end{cases}\\)",
        "\\(\\begin{cases}x-y=29\\\\2x+4y=78\\end{cases}\\)",
        "\\(\\begin{cases}x+y=78\\\\2x+4y=29\\end{cases}\\)",
        "\\(\\begin{cases}xy=29\\\\2x+4y=78\\end{cases}\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "he-phuong-trinh",
        "skill": [
          "lap-he-bai-toan",
          "nang-suat-he"
        ],
        "type": "bai-toan-thuc-te"
      },
      "difficulty": "advanced",
      "explanation": "Tổng số lượng cho \\(x+y\\); tổng giá trị bằng đơn giá nhân số lượng từng loại rồi cộng lại."
    }
  }
]
```

### PHASE C — 23 câu B06-CĐ24-modeling

```json
[
  {
    "id": "MOD24MICRO_010",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_010",
      "question": "Một số cộng 7 bằng 25. Nếu gọi số đó là x, phương trình đúng là:",
      "options": [
        "x + 7 = 25",
        "7x=25",
        "x-7=25",
        "x/7=25"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Dịch trực tiếp quan hệ 'cộng 7 bằng 25'.",
      "source_question_id": "MOD24V1__051",
      "card_id": "topic24-journey-4",
      "micro_role": "base",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_011",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_011",
      "question": "Có 120 vé gồm người lớn x vé và trẻ em y vé. Tổng số vé cho phương trình:",
      "options": [
        "x+y=120",
        "x-y=120",
        "120x+y=0",
        "xy=120"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Tổng hai loại vé bằng tổng số vé.",
      "source_question_id": "MOD24V1__061",
      "card_id": "topic24-journey-4",
      "micro_role": "trap",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_012",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_012",
      "question": "120 vé: người lớn 80.000đ, trẻ em 50.000đ, doanh thu 8.100.000đ. Với x,y là số vé, phương trình doanh thu là:",
      "options": [
        "80000x+50000y=8100000",
        "80x+50y=120",
        "x+y=8100000",
        "50000x+80000y=120"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Doanh thu bằng giá từng loại nhân số lượng rồi cộng.",
      "source_question_id": "MOD24V1__062",
      "card_id": "topic24-journey-4",
      "micro_role": "apply",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24V1__051",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__051",
      "question": "Một số cộng 7 bằng 25. Nếu gọi số đó là x, phương trình đúng là:",
      "options": [
        "x + 7 = 25",
        "7x=25",
        "x-7=25",
        "x/7=25"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "basic",
      "explanation": "Dịch trực tiếp quan hệ 'cộng 7 bằng 25'."
    }
  },
  {
    "id": "MOD24V1__052",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__052",
      "question": "Chiều dài hình chữ nhật hơn chiều rộng 4 m, chu vi 28 m. Gọi chiều rộng x. Phương trình phù hợp là:",
      "options": [
        "2[x+(x+4)] = 28",
        "x(x+4)=28",
        "x+x+4=28",
        "2x+4=28"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "basic",
      "explanation": "Dài=x+4, chu vi=2(dài+rộng)."
    }
  },
  {
    "id": "MOD24V1__053",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__053",
      "question": "Một xe đi 180 km. Tăng vận tốc thêm 15 km/h thì thời gian giảm 1 giờ. Gọi vận tốc ban đầu x>0. Phương trình là:",
      "options": [
        "180/x - 180/(x+15) = 1",
        "180/x + 180/(x+15)=1",
        "x/180-(x+15)/180=1",
        "180(x+15)-180x=1"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "advanced",
      "explanation": "Thời gian cũ trừ thời gian mới bằng 1 giờ."
    }
  },
  {
    "id": "MOD24V1__054",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__054",
      "question": "Một số có bình phương bằng 49. Phương trình mô hình là:",
      "options": [
        "x² = 49",
        "2x=49",
        "x+2=49",
        "x=49²"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Bình phương của số x bằng 49."
    }
  },
  {
    "id": "MOD24V1__055",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__055",
      "question": "Một sân có chiều rộng x, dài x+8 và diện tích 240 m². Phương trình đúng là:",
      "options": [
        "x(x+8)=240",
        "2x+8=240",
        "x+x+8=240",
        "8x=240"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Diện tích hình chữ nhật = rộng×dài."
    }
  },
  {
    "id": "MOD24V1__056",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__056",
      "question": "Một sản phẩm sau giảm 20% còn 960.000đ. Gọi giá gốc x. Phương trình là:",
      "options": [
        "0,8x = 960.000",
        "1,2x=960.000",
        "0,2x=960.000",
        "x-20=960.000"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Sau giảm 20% còn 80% giá gốc."
    }
  },
  {
    "id": "MOD24V1__057",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__057",
      "question": "A làm một mình x giờ, trong 3 giờ làm được 1/2 công việc. Phương trình là:",
      "options": [
        "3/x = 1/2",
        "x/3=1/2",
        "3x=1/2",
        "1/(3x)=1/2"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Năng suất 1/x; trong 3 giờ làm 3/x."
    }
  },
  {
    "id": "MOD24V1__058",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__058",
      "question": "Tuổi mẹ gấp 3 lần tuổi con. Sau 4 năm, tổng tuổi là 56. Gọi tuổi con hiện nay x. Phương trình là:",
      "options": [
        "(x+4) + (3x+4) = 56",
        "x+3x=56",
        "3(x+4)=56",
        "x+4+3x=52"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Sau 4 năm: con x+4, mẹ 3x+4."
    }
  },
  {
    "id": "MOD24V1__059",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__059",
      "question": "Một số khi tăng 15% trở thành 230. Gọi số ban đầu x. Phương trình là:",
      "options": [
        "1,15x = 230",
        "0,85x=230",
        "x+15=230",
        "15x=230"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tăng 15% nghĩa là nhân 1,15."
    }
  },
  {
    "id": "MOD24V1__060",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__060",
      "question": "Một người đi 120 km với vận tốc x rồi về cùng quãng đường với vận tốc x+20; tổng thời gian 5 giờ. Phương trình là:",
      "options": [
        "120/x + 120/(x+20) = 5",
        "240/(2x+20)=5",
        "120/x-120/(x+20)=5",
        "x+(x+20)=5"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-phuong-trinh"
        ],
        "type": "lap-phuong-trinh-thuc-te"
      },
      "difficulty": "advanced",
      "explanation": "Tổng thời gian hai chặng bằng 5 giờ."
    }
  },
  {
    "id": "MOD24V1__061",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__061",
      "question": "Có 120 vé gồm người lớn x vé và trẻ em y vé. Tổng số vé cho phương trình:",
      "options": [
        "x+y=120",
        "x-y=120",
        "120x+y=0",
        "xy=120"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "basic",
      "explanation": "Tổng hai loại vé bằng tổng số vé."
    }
  },
  {
    "id": "MOD24V1__062",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__062",
      "question": "120 vé: người lớn 80.000đ, trẻ em 50.000đ, doanh thu 8.100.000đ. Với x,y là số vé, phương trình doanh thu là:",
      "options": [
        "80000x+50000y=8100000",
        "80x+50y=120",
        "x+y=8100000",
        "50000x+80000y=120"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "basic",
      "explanation": "Doanh thu bằng giá từng loại nhân số lượng rồi cộng."
    }
  },
  {
    "id": "MOD24V1__063",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__063",
      "question": "Tổng hai số x,y bằng 45 và hiệu x-y=9. Hệ phù hợp là:",
      "options": [
        "{x+y=45; x-y=9}",
        "{x+y=9; x-y=45}",
        "{xy=45; x+y=9}",
        "{x-y=36; x+y=9}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "basic",
      "explanation": "Hai câu mô tả cho đúng hai phương trình."
    }
  },
  {
    "id": "MOD24V1__064",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__064",
      "question": "Một trang trại có gà x con, thỏ y con; tổng 35 con và 94 chân. Hệ là:",
      "options": [
        "{x+y=35; 2x+4y=94}",
        "{x+y=94; 2x+4y=35}",
        "{2x+4y=35; x-y=94}",
        "{x+y=35; x+2y=94}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Gà 2 chân, thỏ 4 chân."
    }
  },
  {
    "id": "MOD24V1__065",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__065",
      "question": "Hai loại sản phẩm x,y tổng 80 món, giá 30 nghìn và 50 nghìn, doanh thu 3.200 nghìn. Hệ là:",
      "options": [
        "{x+y=80; 30x+50y=3200}",
        "{x+y=3200; 30x+50y=80}",
        "{30x+50y=80; x-y=3200}",
        "{x+y=80; 50x+30y=80}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Một phương trình số lượng, một phương trình giá trị."
    }
  },
  {
    "id": "MOD24V1__066",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__066",
      "question": "Chu vi hình chữ nhật 50 m, dài x, rộng y và dài hơn rộng 5 m. Hệ đúng là:",
      "options": [
        "{x+y=25; x-y=5}",
        "{x+y=50; x-y=5}",
        "{2x+y=50; x+y=5}",
        "{xy=50; x-y=5}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Chu vi 2(x+y)=50 nên x+y=25; chênh lệch 5."
    }
  },
  {
    "id": "MOD24V1__067",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__067",
      "question": "Hai xe đi ngược chiều, vận tốc x,y; tổng vận tốc 105 km/h và xe A nhanh hơn B 5 km/h. Hệ là:",
      "options": [
        "{x+y=105; x-y=5}",
        "{x-y=105; x+y=5}",
        "{xy=105; x-y=5}",
        "{2x+y=105; x+y=5}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Một quan hệ tổng và một quan hệ hiệu."
    }
  },
  {
    "id": "MOD24V1__068",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__068",
      "question": "Pha x lít dung dịch 20% với y lít dung dịch 50% để được 10 lít dung dịch 32%. Hệ là:",
      "options": [
        "{x+y=10; 0,2x+0,5y=3,2}",
        "{x+y=32; 20x+50y=10}",
        "{x+y=10; 0,32x+0,32y=3,2}",
        "{x-y=10; 0,2x+0,5y=32}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "advanced",
      "explanation": "Tổng thể tích 10; lượng chất tan là 32%×10=3,2 lít."
    }
  },
  {
    "id": "MOD24V1__069",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__069",
      "question": "Một lớp mua bút 5.000đ/cây và vở 12.000đ/quyển, tổng 40 món hết 300.000đ. Gọi x bút, y vở. Hệ là:",
      "options": [
        "{x+y=40; 5000x+12000y=300000}",
        "{x+y=300000; 5000x+12000y=40}",
        "{x-y=40; 5000x+12000y=300000}",
        "{x+y=40; 12000x+5000y=40}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "advanced",
      "explanation": "Dùng tổng số món và tổng chi phí."
    }
  },
  {
    "id": "MOD24V1__070",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json",
    "source_sha": "d3054fdb6da255cfd7cf571015e0a10f2903f467",
    "record": {
      "id": "MOD24V1__070",
      "question": "Tổng tuổi hai anh em là 30, anh hơn em 6 tuổi. Gọi x tuổi anh, y tuổi em. Hệ là:",
      "options": [
        "{x+y=30; x-y=6}",
        "{x+y=6; x-y=30}",
        "{xy=30; x-y=6}",
        "{x+y=30; y-x=6}"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "lap-he"
        ],
        "type": "lap-he-thuc-te"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng 30 và anh-em=6."
    }
  }
]
```

## E. Hợp đồng phản biện và quy tắc output tiết kiệm quota

**Chỉ kiểm đúng phase được yêu cầu ở ô Chat.** Phải đối chiếu `id`, câu hỏi, lựa chọn, đáp án 0-based, giải thích, tag theo blob SHA từng item. Trả **một bảng duy nhất** theo các cột `ID | toán+đáp án | đích đo thật | role của tag / clone | đề nghị`; không chép lại đề nguyên văn hay lặp bảng vào JSON.
Dùng status `PASS`, `REVISION_REQUIRED`, `INSUFFICIENT_EVIDENCE`, `NOT_REVIEWED` đúng theo từng ID; tổng status = số ID phase. `PASS` nội dung câu hỏi không phải xác nhận mastery. Nêu **ít nhất 2 trường hợp bất đồng** với nhãn hiện tại nếu có chứng cứ (hoặc nói không có), và đề xuất 1–2 micro-tests tạo mô hình độc lập cho mỗi phase, kèm lời giải/rubric ngắn. Chỉ báo JSON summary `packet_id,source_main_sha,phase,expected_ids,reviewed_ids,missing_ids,duplicate_ids,unexpected_ids,status_counts,priority_findings,status:PROPOSAL_ONLY`, không thêm toàn văn từng record. Nếu response bị cắt, báo ID cuối đã làm và chờ lệnh tiếp tục. Không tự PASS phần chưa đọc.

## F. Câu hỏi quyết định cuối B06

So sánh ba vai trò: (i) `canonical modeling skill` đọc và dịch quan hệ, (ii) `task_demand` một phương trình / bất phương trình / một thành phần hệ / hai thành phần hệ / đối chiếu thực tế, (iii) `context` số, chuyển động, năng suất, mua bán. Chỉ đề xuất skill độc lập nếu có kết quả chẩn đoán lỗi riêng và test được riêng. Định nghĩa evidence_type `recognition`, `guided`, `independent_written_model`, `full_solution_with_conclusion`; không gộp counter lịch sử, không bật Readiness từ đề xuất.

## G. Liên hệ B05 — thông tin ranh giới

B05 đã được ghi biên bản theo 51/51 (45 PASS, 6 sửa ký hiệu), reviewer A có lỗi toán ở EQ08V1_067 đã đính chính S={−2}. PR riêng đề nghị chỉnh sáu ký hiệu đang Draft và KHÔNG có trong source main B06. Không xét lại các câu B05 trong B06.