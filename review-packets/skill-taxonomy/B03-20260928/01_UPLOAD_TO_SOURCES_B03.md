# B03 — Phản biện 26 câu kỹ năng hình học CĐ14–15

Packet: MATH-SKILL-TAXONOMY-B03-20260928. Source main SHA: 88143e6b2690edfe721f8d74d2dbcb251bc55ab3. Locked original-data blob: f7d2472f95e2615144aa8723f870014cf53bfed9. REVIEW_REQUEST; PROPOSAL_ONLY, not approved for release.

## Phạm vi
26 câu nguyên văn: 12 câu cach-deu-dinh (4 CĐ14, 8 CĐ15), 14 câu nhan-biet-trung-truc (5 CĐ14, 9 CĐ15). Có cả micro-practice. Mỗi bản ghi giữ question, options, answer index 0-based, explanation, all tags, source path và blob SHA. Không thay ID/tag/runtime/localStorage hoặc tự cộng Core readiness.

## Nghi vấn học thuật
- CĐ14 dùng cach-deu-dinh cho hai đầu mút; CĐ15 dùng cùng mã cho tâm ngoại tiếp cách đều ba đỉnh. TRI14V1_132 sử dụng OA=OB=OC để suy ra O nằm trên trung trực từng cặp, không mặc định là sai toán.
- CTR15V1_079–086 chủ yếu đổi tên đoạn/vị trí đáp án, CTR15V1_097–104 chủ yếu thay độ dài bán kính. Không xem các biến thể là bằng chứng năng lực độc lập.
- Phân biệt canonical concept, assessed_skill theo nhiệm vụ, supporting_skill, context và các mức vận dụng. Không kết luận tần suất thi/chuẩn Core chính thức khi chưa có corpus SGK/đề thi khóa nguồn.

## Expected item IDs
- `GEO14MICRO_005`
- `TRI14V1_125`
- `TRI14V1_126`
- `TRI14V1_127`
- `TRI14V1_128`
- `TRI14V1_129`
- `TRI14V1_130`
- `TRI14V1_131`
- `TRI14V1_132`
- `GEO15MICRO_010`
- `CTR15V1_079`
- `CTR15V1_080`
- `CTR15V1_081`
- `CTR15V1_082`
- `CTR15V1_083`
- `CTR15V1_084`
- `CTR15V1_085`
- `CTR15V1_086`
- `CTR15V1_097`
- `CTR15V1_098`
- `CTR15V1_099`
- `CTR15V1_100`
- `CTR15V1_101`
- `CTR15V1_102`
- `CTR15V1_103`
- `CTR15V1_104`

## Dữ liệu nguồn (giữ nguyên toàn văn JSON)

```json
{
  "packet_id": "MATH-SKILL-TAXONOMY-B03-20260928",
  "source_sha": "88143e6b2690edfe721f8d74d2dbcb251bc55ab3",
  "expected_count": 26,
  "items": [
    {
      "id": "GEO14MICRO_005",
      "source_path": "docs/assets/data/practice/14-tam-giac-micro-v1.json",
      "source_sha": "130a12a631f676c43010ecc8817c01f6dde2e455",
      "topic": "14-tam-giac",
      "record": {
        "id": "GEO14MICRO_005",
        "card_id": "geo14-core-2",
        "micro_role": "trap",
        "geometry_role": "conceptual",
        "givens": [],
        "target": "nhan-biet-trung-truc",
        "question": "Đường trung trực AB phải:",
        "options": [
          "Vuông góc AB tại trung điểm AB",
          "Chỉ đi qua trung điểm AB",
          "Chỉ vuông góc AB",
          "Đi qua A"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "intermediate",
        "explanation": "Cần đồng thời vuông góc và qua trung điểm.",
        "hints": [
          "Có hai điều kiện.",
          "Vuông góc thôi chưa đủ."
        ],
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_125",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_125",
        "question": "Đường trung trực của đoạn AB là đường thẳng:",
        "options": [
          "Vuông góc AB tại trung điểm của AB",
          "Đi qua A và B",
          "Qua trung điểm nhưng không cần vuông góc",
          "Vuông góc AB tại A"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "basic",
        "explanation": "Định nghĩa đường trung trực: vuông góc với đoạn tại trung điểm.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_126",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_126",
        "question": "Muốn chứng minh d là trung trực AB, cần chứng minh:",
        "options": [
          "d vuông góc AB và đi qua trung điểm AB",
          "d đi qua A",
          "d song song AB",
          "d chỉ đi qua trung điểm AB"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "basic",
        "explanation": "Cần cả tính vuông góc và đi qua trung điểm.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_127",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_127",
        "question": "M là trung điểm AB và d đi qua M, d⊥AB. Khi đó:",
        "options": [
          "d là trung trực AB",
          "d là trung tuyến",
          "d song song AB",
          "d là phân giác AB"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "basic",
        "explanation": "Hai điều kiện đúng theo định nghĩa đường trung trực.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_128",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_128",
        "question": "Một đường thẳng vuông góc AB nhưng không đi qua trung điểm AB thì:",
        "options": [
          "Chưa phải trung trực AB",
          "Luôn là trung trực AB",
          "Luôn song song AB",
          "Luôn đi qua trung điểm"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "intermediate",
        "explanation": "Vuông góc thôi chưa đủ.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_129",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_129",
        "question": "P nằm trên trung trực AB. Khi đó:",
        "options": [
          "PA=PB",
          "PA>PB",
          "PA<PB",
          "Không thể so sánh"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "cach-deu-dinh"
          ],
          "type": "cach-deu-dinh",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "basic",
        "explanation": "Mọi điểm trên trung trực của đoạn thẳng cách đều hai đầu mút.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_130",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_130",
        "question": "Nếu PA=PB thì P nằm trên:",
        "options": [
          "Đường trung trực AB",
          "Đường thẳng AB bắt buộc",
          "Tia AB",
          "Đường song song AB bất kỳ"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "cach-deu-dinh"
          ],
          "type": "cach-deu-dinh",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "basic",
        "explanation": "Tập hợp các điểm cách đều A và B là đường trung trực AB.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_131",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_131",
        "question": "P cách đều A và B nghĩa là:",
        "options": [
          "PA=PB",
          "P là trung điểm AB",
          "P nằm giữa A,B",
          "PA+PB=AB"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "cach-deu-dinh"
          ],
          "type": "cach-deu-dinh",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "basic",
        "explanation": "Cách đều hai điểm chỉ có nghĩa hai khoảng cách bằng nhau.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "TRI14V1_132",
      "source_path": "docs/assets/data/practice/14-tam-giac-v1-05.json",
      "source_sha": "2f22700b3403f9f40e3de29fb772418caece5bca",
      "topic": "14-tam-giac",
      "record": {
        "id": "TRI14V1_132",
        "question": "Nếu OA=OB=OC thì O nằm trên:",
        "options": [
          "Các đường trung trực của AB, BC, CA",
          "Ba đường cao",
          "Ba trung tuyến",
          "Ba phân giác trong"
        ],
        "answer": 0,
        "tags": {
          "topic": "tam-giac",
          "skill": [
            "cach-deu-dinh"
          ],
          "type": "cach-deu-dinh",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "intermediate",
        "explanation": "Từ OA=OB suy ra O trên trung trực AB; tương tự cho các cặp còn lại.",
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "GEO15MICRO_010",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-micro-v1.json",
      "source_sha": "9e36e342ede18aa3317bb3d7e00f365fd1217b87",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "GEO15MICRO_010",
        "card_id": "geo15-core-4",
        "micro_role": "base",
        "geometry_role": "conceptual",
        "givens": [],
        "target": "nhan-biet-trung-truc",
        "question": "Đường trung trực của AB:",
        "options": [
          "Vuông góc AB tại trung điểm",
          "Đi từ một đỉnh tam giác",
          "Chia một góc thành hai",
          "Chỉ vuông góc AB"
        ],
        "answer": 0,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc",
          "layer": "KNTT-Core",
          "grade": 7
        },
        "difficulty": "basic",
        "explanation": "Đúng theo định nghĩa.",
        "hints": [
          "Cần trung điểm.",
          "Cần vuông góc."
        ],
        "curriculum": {
          "book": "KNTT",
          "grades": [
            7
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
      "id": "CTR15V1_079",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_079",
        "question": "Đường thẳng vuông góc với đoạn \\(AB\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường phân giác",
          "đường trung trực",
          "đường cao",
          "đường trung tuyến"
        ],
        "answer": 1,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "basic",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_080",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_080",
        "question": "Đường thẳng vuông góc với đoạn \\(BC\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường phân giác",
          "đường trung trực",
          "đường cao",
          "đường trung tuyến"
        ],
        "answer": 1,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "basic",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_081",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_081",
        "question": "Đường thẳng vuông góc với đoạn \\(CA\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường trung tuyến",
          "đường cao",
          "đường trung trực",
          "đường phân giác"
        ],
        "answer": 2,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "basic",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_082",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_082",
        "question": "Đường thẳng vuông góc với đoạn \\(MN\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường trung trực",
          "đường trung tuyến",
          "đường cao",
          "đường phân giác"
        ],
        "answer": 0,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "basic",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_083",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_083",
        "question": "Đường thẳng vuông góc với đoạn \\(PQ\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường trung tuyến",
          "đường cao",
          "đường trung trực",
          "đường phân giác"
        ],
        "answer": 2,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "basic",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_084",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_084",
        "question": "Đường thẳng vuông góc với đoạn \\(RS\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường trung trực",
          "đường cao",
          "đường trung tuyến",
          "đường phân giác"
        ],
        "answer": 0,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "intermediate",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_085",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_085",
        "question": "Đường thẳng vuông góc với đoạn \\(XY\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường trung tuyến",
          "đường cao",
          "đường phân giác",
          "đường trung trực"
        ],
        "answer": 3,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "intermediate",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_086",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-03.json",
      "source_sha": "15d3ee970d6de97ef7675debe8401dcfeb0692c1",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_086",
        "question": "Đường thẳng vuông góc với đoạn \\(UV\\) tại trung điểm của đoạn đó được gọi là gì?",
        "options": [
          "đường trung tuyến",
          "đường trung trực",
          "đường phân giác",
          "đường cao"
        ],
        "answer": 1,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "nhan-biet-trung-truc"
          ],
          "type": "nhan-biet-trung-truc"
        },
        "difficulty": "intermediate",
        "explanation": "Đường trung trực vuông góc với đoạn thẳng tại trung điểm của đoạn đó."
      }
    },
    {
      "id": "CTR15V1_097",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_097",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=3\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(5\\text{ cm}\\)",
          "\\(2\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)",
          "\\(4\\text{ cm}\\)"
        ],
        "answer": 2,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "basic",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    },
    {
      "id": "CTR15V1_098",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_098",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=4\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(4\\text{ cm}\\)",
          "\\(5\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)"
        ],
        "answer": 0,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "basic",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    },
    {
      "id": "CTR15V1_099",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_099",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=5\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(4\\text{ cm}\\)",
          "\\(7\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(5\\text{ cm}\\)"
        ],
        "answer": 3,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "basic",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    },
    {
      "id": "CTR15V1_100",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_100",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=6\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(8\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(5\\text{ cm}\\)",
          "\\(7\\text{ cm}\\)"
        ],
        "answer": 1,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "intermediate",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    },
    {
      "id": "CTR15V1_101",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_101",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=7\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(6\\text{ cm}\\)",
          "\\(9\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)",
          "\\(7\\text{ cm}\\)"
        ],
        "answer": 3,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "intermediate",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    },
    {
      "id": "CTR15V1_102",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_102",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=8\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(8\\text{ cm}\\)",
          "\\(9\\text{ cm}\\)",
          "\\(7\\text{ cm}\\)",
          "\\(10\\text{ cm}\\)"
        ],
        "answer": 0,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "intermediate",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    },
    {
      "id": "CTR15V1_103",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_103",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=9\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(10\\text{ cm}\\)",
          "\\(11\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)",
          "\\(9\\text{ cm}\\)"
        ],
        "answer": 3,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "intermediate",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    },
    {
      "id": "CTR15V1_104",
      "source_path": "docs/assets/data/practice/15-duong-dong-quy-v1-04.json",
      "source_sha": "c8fd5367d1d3ff716faa5c5eedf04315f2f11a68",
      "topic": "15-duong-dong-quy",
      "record": {
        "id": "CTR15V1_104",
        "question": "\\(O\\) là tâm ngoại tiếp tam giác \\(ABC\\) và \\(OA=10\\) cm. Giá trị \\(OB\\) bằng bao nhiêu?",
        "options": [
          "\\(12\\text{ cm}\\)",
          "\\(10\\text{ cm}\\)",
          "\\(9\\text{ cm}\\)",
          "\\(11\\text{ cm}\\)"
        ],
        "answer": 1,
        "tags": {
          "topic": "duong-dong-quy",
          "skill": [
            "cach-deu-dinh",
            "tam-ngoai-tiep"
          ],
          "type": "cach-deu-ba-dinh"
        },
        "difficulty": "advanced",
        "explanation": "Tâm ngoại tiếp cách đều ba đỉnh: OA=OB=OC."
      }
    }
  ]
}
```

## Hợp đồng kết quả
Kiểm kê 26/26 ID. Cho từng ID: math_status, correct answer and distractors, target_candidate, roles of existing tags, evidence_limit, recommended_action. Đề xuất một canonical concept hoặc tách assessed_skill chỉ khi đích đo/lỗi chẩn đoán thực sự khác nhau. Cung cấp hai micro-test: hai đầu mút chiều thuận/đảo và ba đỉnh/tâm ngoại tiếp, có ít nhất một câu yêu cầu giải thích không có sẵn đáp án. Xuất bảng 26/26 và JSON: packet_id, source_sha, expected_ids, reviewed_ids, items, status_counts tổng=26, missing_ids, duplicate_ids, unexpected_ids, PROPOSAL_ONLY. Nếu ngắt giữa chừng nêu ID cuối, không PASS cho mục chưa xem.