# MATH-SKILL-TAXONOMY-B05-20260928 — KIỂM ĐỊNH ĐIỀU KIỆN VÀ ĐỐI CHIẾU NGHIỆM (51 CÂU)

**Nguồn tạm NotebookLM; PROPOSAL_ONLY. GitHub source main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. B04 đã kết thúc đối soát nội dung 41 ID; không chọn B04 trong vòng này. Chỉ chọn tài liệu này cùng hai nguồn cố định Master Plan Toán v1.1 và Notebook Math Permanent v1.1.

## A. Phạm vi chính xác và cảnh báo

Gồm **28 câu CĐ08** (27 lượt tag `dkxd-phuong-trinh-mau`, 7 lượt `doi-chieu-nghiem`, 12 lượt `khu-mau-phuong-trinh` có giao nhau) và **23 câu CĐ11** mang `dkxd-can`. Tag counts không phải số câu riêng vì một câu có nhiều tags. **51 unique item_id**. Dữ liệu bao gồm micro-practice và toàn văn 12 bank nguồn theo SHA.

Phân biệt bốn nhiệm vụ: (1) xác định mẫu khác 0 trước khi khử mẫu; (2) giải theo phép biến đổi hợp lệ trong miền đó; (3) kiểm tra/loại ứng viên không thuộc miền ban đầu; (4) miền xác định căn thức trong tử `f(x)≥0` và căn ở mẫu `f(x)>0`. Không kết luận rằng chọn đúng đáp án cuối chứng minh đã thực hiện độc lập đủ 4 bước.

**Cảnh báo phải xét từng bản ghi:**
- `EQ08V1_047–050` dùng ký hiệu `x--4`, `x--3`, `x--2`, `x--1` trong mẫu. Hãy phân biệt đáp án theo ý nghĩa toán dự kiến với lỗi cách viết/hiển thị cho học sinh; đề xuất viết thành `x+4`, v.v., sửa đồng bộ lời giải và kiểm tra MathJax. Đừng coi bản đang công bố là đã sửa.
- `EQ08V1_067–072`: kiểm tra thực sự có nghiệm bị loại hay chỉ có giá trị ngoài miền được nhắc trong phương án; ghi đúng **tập nghiệm cuối cùng**, không nhầm ứng viên sau khử mẫu với nghiệm của phương trình gốc. Đặc biệt cần xem các câu cho phương trình vô nghiệm hoặc vô số nghiệm trên miền.
- `RAD11V1_023–032`: căn ở mẫu ⇒ bất đẳng thức **nghiêm ngặt**. `RAD11V1_030–032` gần trùng nguyên văn 023–025, cần kiểm tra nhóm clone. `RAD11V1_014`, `RAD11V1_021` dùng cách viết `+0`, có thể đúng toán nhưng nên đánh giá trình bày.
- Rà trường hợp đáp án đúng theo chỉ số 0-based, tính duy nhất các lựa chọn, nhiễu sai có giá trị chẩn đoán. Không tự nâng tần suất thi hay Core toàn quốc từ tập câu hỏi tự biên soạn.
- Không đổi IDs/tags/learner counters, không gộp alias và không cấp Core Readiness bằng nội dung báo cáo. Quyết định taxonomy là đề xuất, không phải áp dụng website.

## B. Manifest khóa SHA

| Bank source | Git blob SHA | Tổng câu mỗi bank |
|---|---|---:|
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json` | `6b226a417d0bb2d6498b74d9206b85c942499a54` | 15 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-01.json` | `fcc302b520bdedd1bddc7194d195fda5b9893b0a` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json` | `717e6988da610c382e744118fe4aca0c20d40244` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json` | `ad5ad4937bc971d3a85a894a838cd559671df4da` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json` | `06ee1a503f03de3495db198594a5d560ec366813` | 30 |
| `docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-05.json` | `29a6b1d992b8e28bb352b07ca56dbd9d537406b5` | 12 |
| `docs/assets/data/practice/11-can-thuc-micro-v1.json` | `daa537d24635cb525f04b3b809022f40e2821dc9` | 15 |
| `docs/assets/data/practice/11-can-thuc-v1-01.json` | `0aebcf174f74d19e18d9786ee850ae563cf40afc` | 30 |
| `docs/assets/data/practice/11-can-thuc-v1-02.json` | `40052528c00448beb8ddcc409902f7e0d54be1e1` | 30 |
| `docs/assets/data/practice/11-can-thuc-v1-03.json` | `aa342ef2b67b0b4eb0f649dd4c6ab0f02c4c2dbe` | 30 |
| `docs/assets/data/practice/11-can-thuc-v1-04.json` | `6e5b07c720c8ef3b372a31a0ff734eb16f8286ba` | 30 |
| `docs/assets/data/practice/11-can-thuc-v1-05.json` | `ba23bbf99d5c4d831a32b646454b2dfd76096289` | 12 |

Staging source CĐ08: `d1ce35da7d0bccc794772175851197f69078b04e`; CĐ11: `43b32f98e73a8c69348a009105431b1e6ff2378f`. Các record mục D vẫn mang đường dẫn + blob SHA bank gốc.

## C. Inventory và kết quả bắt buộc

```json
{
  "packet_id": "MATH-SKILL-TAXONOMY-B05-20260928",
  "source_sha": "88143e6b2690edfe721f8d74d2dbcb251bc55ab3",
  "expected_count": 51,
  "by_topic": {
    "08-phuong-trinh-bat-phuong-trinh": 28,
    "11-can-thuc": 23
  },
  "tag_occurrences": {
    "dkxd-phuong-trinh-mau": 27,
    "doi-chieu-nghiem": 7,
    "khu-mau-phuong-trinh": 12,
    "dkxd-can": 23
  },
  "phase_A_ids": [
    "EQ08MICRO_005",
    "EQ08MICRO_006",
    "EQ08V1_047",
    "EQ08V1_048",
    "EQ08V1_049",
    "EQ08V1_050",
    "EQ08V1_051",
    "EQ08V1_052",
    "EQ08V1_053",
    "EQ08V1_054",
    "EQ08V1_055",
    "EQ08V1_056",
    "EQ08V1_057",
    "EQ08V1_058",
    "EQ08V1_059",
    "EQ08V1_060",
    "EQ08V1_061",
    "EQ08V1_062",
    "EQ08V1_063",
    "EQ08V1_064",
    "EQ08V1_065",
    "EQ08V1_066",
    "EQ08V1_067",
    "EQ08V1_068",
    "EQ08V1_069",
    "EQ08V1_070",
    "EQ08V1_071",
    "EQ08V1_072"
  ],
  "phase_B_ids": [
    "RAD11MICRO_002",
    "RAD11V1_011",
    "RAD11V1_012",
    "RAD11V1_013",
    "RAD11V1_014",
    "RAD11V1_015",
    "RAD11V1_016",
    "RAD11V1_017",
    "RAD11V1_018",
    "RAD11V1_019",
    "RAD11V1_020",
    "RAD11V1_021",
    "RAD11V1_022",
    "RAD11V1_023",
    "RAD11V1_024",
    "RAD11V1_025",
    "RAD11V1_026",
    "RAD11V1_027",
    "RAD11V1_028",
    "RAD11V1_029",
    "RAD11V1_030",
    "RAD11V1_031",
    "RAD11V1_032"
  ]
}
```

## D. Toàn văn 51 câu nguồn, giữ nguyên đáp án và metadata

```json
[
  {
    "id": "EQ08MICRO_005",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
    "source_sha": "6b226a417d0bb2d6498b74d9206b85c942499a54",
    "record": {
      "id": "EQ08MICRO_005",
      "card_id": "eq08-core-2",
      "micro_role": "trap",
      "question": "Điều kiện xác định của \\(\\frac1{x-2}=\\frac3x\\) là:",
      "options": [
        "\\(x\\ne2,\\ x\\ne0\\)",
        "\\(x\\ne2\\)",
        "\\(x\\ne0\\)",
        "\\(x\\ne3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-phuong-trinh-mau",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "intermediate",
      "explanation": "Cả hai mẫu x-2 và x phải khác 0.",
      "hints": [
        "Xét từng mẫu riêng.",
        "Loại các giá trị làm ít nhất một mẫu bằng 0."
      ],
      "option_evidence": {
        "1": {
          "signal": "dkxd-thieu-mau",
          "signal_weight": 2,
          "feedback_hint": "Phương trình có hai mẫu, cần kiểm tra cả hai."
        },
        "2": {
          "signal": "dkxd-thieu-mau",
          "signal_weight": 2,
          "feedback_hint": "Phương trình có hai mẫu, cần kiểm tra cả hai."
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
    "id": "EQ08MICRO_006",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-micro-v1.json",
    "source_sha": "6b226a417d0bb2d6498b74d9206b85c942499a54",
    "record": {
      "id": "EQ08MICRO_006",
      "card_id": "eq08-core-2",
      "micro_role": "apply",
      "question": "Giải phương trình \\(\\frac{x+1}{x-1}=0\\), \\(x\\ne1\\). Kết luận đúng là:",
      "options": [
        "\\(x=-1\\)",
        "\\(x=1\\)",
        "Vô nghiệm",
        "\\(x=0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "doi-chieu-nghiem"
        ],
        "type": "doi-chieu-nghiem",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức bằng 0 khi tử bằng 0 và mẫu khác 0. x=-1 thỏa điều kiện.",
      "hints": [
        "Cho tử x+1 bằng 0.",
        "Sau khi tìm nghiệm, đối chiếu x≠1."
      ],
      "supporting_skills": [
        "dkxd-phuong-trinh-mau"
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
    "id": "EQ08V1_047",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_047",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x--4}=2\\) là:",
      "options": [
        "\\(x\\ne -4\\)",
        "\\(x=-4\\)",
        "\\(x\\ne 4\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x--4\\) phải khác 0, nên \\(x\\ne -4\\)."
    }
  },
  {
    "id": "EQ08V1_048",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_048",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x--3}=2\\) là:",
      "options": [
        "\\(x\\ne -3\\)",
        "\\(x=-3\\)",
        "\\(x\\ne 3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x--3\\) phải khác 0, nên \\(x\\ne -3\\)."
    }
  },
  {
    "id": "EQ08V1_049",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_049",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x--2}=2\\) là:",
      "options": [
        "\\(x\\ne -2\\)",
        "\\(x=-2\\)",
        "\\(x\\ne 2\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x--2\\) phải khác 0, nên \\(x\\ne -2\\)."
    }
  },
  {
    "id": "EQ08V1_050",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_050",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x--1}=2\\) là:",
      "options": [
        "\\(x\\ne -1\\)",
        "\\(x=-1\\)",
        "\\(x\\ne 1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x--1\\) phải khác 0, nên \\(x\\ne -1\\)."
    }
  },
  {
    "id": "EQ08V1_051",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_051",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x-1}=2\\) là:",
      "options": [
        "\\(x\\ne 1\\)",
        "\\(x=1\\)",
        "\\(x\\ne -1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x-1\\) phải khác 0, nên \\(x\\ne 1\\)."
    }
  },
  {
    "id": "EQ08V1_052",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_052",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x-2}=2\\) là:",
      "options": [
        "\\(x\\ne 2\\)",
        "\\(x=2\\)",
        "\\(x\\ne -2\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x-2\\) phải khác 0, nên \\(x\\ne 2\\)."
    }
  },
  {
    "id": "EQ08V1_053",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_053",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x-3}=2\\) là:",
      "options": [
        "\\(x\\ne 3\\)",
        "\\(x=3\\)",
        "\\(x\\ne -3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x-3\\) phải khác 0, nên \\(x\\ne 3\\)."
    }
  },
  {
    "id": "EQ08V1_054",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_054",
      "question": "Điều kiện xác định của phương trình \\(\\frac{x+1}{x-4}=2\\) là:",
      "options": [
        "\\(x\\ne 4\\)",
        "\\(x=4\\)",
        "\\(x\\ne -4\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "dkxd-phuong-trinh-mau"
        ],
        "type": "dkxd-pt-mau"
      },
      "difficulty": "basic",
      "explanation": "Mẫu \\(x-4\\) phải khác 0, nên \\(x\\ne 4\\)."
    }
  },
  {
    "id": "EQ08V1_055",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_055",
      "question": "Giải phương trình \\(\\frac1{x-1}=3\\).",
      "options": [
        "\\(x=\\frac{4}{3}\\)",
        "\\(x=\\frac{2}{3}\\)",
        "\\(x=4\\)",
        "\\(x=1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 1\\). Nhân hai vế với \\(x-1\\): \\(1=3(x-1)\\), rồi giải và đối chiếu."
    }
  },
  {
    "id": "EQ08V1_056",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_056",
      "question": "Giải phương trình \\(\\frac1{x-2}=3\\).",
      "options": [
        "\\(x=\\frac{7}{3}\\)",
        "\\(x=\\frac{5}{3}\\)",
        "\\(x=5\\)",
        "\\(x=2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 2\\). Nhân hai vế với \\(x-2\\): \\(1=3(x-2)\\), rồi giải và đối chiếu."
    }
  },
  {
    "id": "EQ08V1_057",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_057",
      "question": "Giải phương trình \\(\\frac1{x-3}=2\\).",
      "options": [
        "\\(x=\\frac{7}{2}\\)",
        "\\(x=\\frac{5}{2}\\)",
        "\\(x=5\\)",
        "\\(x=3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 3\\). Nhân hai vế với \\(x-3\\): \\(1=2(x-3)\\), rồi giải và đối chiếu."
    }
  },
  {
    "id": "EQ08V1_058",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_058",
      "question": "Giải phương trình \\(\\frac1{x-4}=2\\).",
      "options": [
        "\\(x=\\frac{9}{2}\\)",
        "\\(x=\\frac{7}{2}\\)",
        "\\(x=6\\)",
        "\\(x=4\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 4\\). Nhân hai vế với \\(x-4\\): \\(1=2(x-4)\\), rồi giải và đối chiếu."
    }
  },
  {
    "id": "EQ08V1_059",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_059",
      "question": "Giải phương trình \\(\\frac1{x-5}=3\\).",
      "options": [
        "\\(x=\\frac{16}{3}\\)",
        "\\(x=\\frac{14}{3}\\)",
        "\\(x=8\\)",
        "\\(x=5\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 5\\). Nhân hai vế với \\(x-5\\): \\(1=3(x-5)\\), rồi giải và đối chiếu."
    }
  },
  {
    "id": "EQ08V1_060",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-02.json",
    "source_sha": "717e6988da610c382e744118fe4aca0c20d40244",
    "record": {
      "id": "EQ08V1_060",
      "question": "Giải phương trình \\(\\frac1{x-6}=3\\).",
      "options": [
        "\\(x=\\frac{19}{3}\\)",
        "\\(x=\\frac{17}{3}\\)",
        "\\(x=9\\)",
        "\\(x=6\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 6\\). Nhân hai vế với \\(x-6\\): \\(1=3(x-6)\\), rồi giải và đối chiếu."
    }
  },
  {
    "id": "EQ08V1_061",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_061",
      "question": "Giải phương trình \\(\\frac{x+3}{x-1}=4\\).",
      "options": [
        "\\(x=\\frac{7}{3}\\)",
        "\\(x=- \\frac{7}{3}\\)",
        "\\(x=1\\)",
        "\\(x=7\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 1\\). Khử mẫu được \\(x+3=4(x-1)\\), giải phương trình rồi đối chiếu điều kiện."
    }
  },
  {
    "id": "EQ08V1_062",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_062",
      "question": "Giải phương trình \\(\\frac{x+3}{x-2}=4\\).",
      "options": [
        "\\(x=\\frac{11}{3}\\)",
        "\\(x=- \\frac{11}{3}\\)",
        "\\(x=2\\)",
        "\\(x=11\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 2\\). Khử mẫu được \\(x+3=4(x-2)\\), giải phương trình rồi đối chiếu điều kiện."
    }
  },
  {
    "id": "EQ08V1_063",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_063",
      "question": "Giải phương trình \\(\\frac{x+1}{x-3}=3\\).",
      "options": [
        "\\(x=5\\)",
        "\\(x=-5\\)",
        "\\(x=3\\)",
        "\\(x=10\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 3\\). Khử mẫu được \\(x+1=3(x-3)\\), giải phương trình rồi đối chiếu điều kiện."
    }
  },
  {
    "id": "EQ08V1_064",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_064",
      "question": "Giải phương trình \\(\\frac{x+4}{x-4}=4\\).",
      "options": [
        "\\(x=\\frac{20}{3}\\)",
        "\\(x=- \\frac{20}{3}\\)",
        "\\(x=4\\)",
        "\\(x=20\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 4\\). Khử mẫu được \\(x+4=4(x-4)\\), giải phương trình rồi đối chiếu điều kiện."
    }
  },
  {
    "id": "EQ08V1_065",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_065",
      "question": "Giải phương trình \\(\\frac{x+1}{x-5}=2\\).",
      "options": [
        "\\(x=11\\)",
        "\\(x=-11\\)",
        "\\(x=5\\)",
        "Không thể phân tích thêm"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 5\\). Khử mẫu được \\(x+1=2(x-5)\\), giải phương trình rồi đối chiếu điều kiện."
    }
  },
  {
    "id": "EQ08V1_066",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_066",
      "question": "Giải phương trình \\(\\frac{x+4}{x-6}=3\\).",
      "options": [
        "\\(x=11\\)",
        "\\(x=-11\\)",
        "\\(x=6\\)",
        "\\(x=22\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "khu-mau-phuong-trinh",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "pt-chua-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Điều kiện \\(x\\ne 6\\). Khử mẫu được \\(x+4=3(x-6)\\), giải phương trình rồi đối chiếu điều kiện."
    }
  },
  {
    "id": "EQ08V1_067",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_067",
      "question": "Trong quá trình giải \\(\\frac{x^2-4}{x-2}=0\\), nhận xét nào đúng?",
      "options": [
        "\\(x=2\\) bị loại vì làm mẫu bằng 0.",
        "\\(x=2\\) luôn được nhận vì thỏa biểu thức sau rút gọn.",
        "Không cần kiểm tra điều kiện xác định.",
        "Mọi số thực đều là nghiệm."
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "doi-chieu-nghiem",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "doi-chieu-nghiem"
      },
      "difficulty": "intermediate",
      "explanation": "Nghiệm tìm được sau biến đổi phải được đối chiếu với điều kiện xác định của phương trình ban đầu."
    }
  },
  {
    "id": "EQ08V1_068",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_068",
      "question": "Trong quá trình giải \\(\\frac{x-3}{x-3}=1\\), nhận xét nào đúng?",
      "options": [
        "\\(x=3\\) bị loại vì biểu thức ban đầu không xác định.",
        "\\(x=3\\) luôn được nhận vì thỏa biểu thức sau rút gọn.",
        "Không cần kiểm tra điều kiện xác định.",
        "Mọi số thực đều là nghiệm."
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "doi-chieu-nghiem",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "doi-chieu-nghiem"
      },
      "difficulty": "intermediate",
      "explanation": "Nghiệm tìm được sau biến đổi phải được đối chiếu với điều kiện xác định của phương trình ban đầu."
    }
  },
  {
    "id": "EQ08V1_069",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_069",
      "question": "Trong quá trình giải \\(\\frac{x+1}{x+1}=1\\), nhận xét nào đúng?",
      "options": [
        "\\(x=-1\\) bị loại vì mẫu bằng 0.",
        "\\(x=-1\\) luôn được nhận vì thỏa biểu thức sau rút gọn.",
        "Không cần kiểm tra điều kiện xác định.",
        "Mọi số thực đều là nghiệm."
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "doi-chieu-nghiem",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "doi-chieu-nghiem"
      },
      "difficulty": "intermediate",
      "explanation": "Nghiệm tìm được sau biến đổi phải được đối chiếu với điều kiện xác định của phương trình ban đầu."
    }
  },
  {
    "id": "EQ08V1_070",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_070",
      "question": "Trong quá trình giải \\(\\frac{x^2-9}{x-3}=6\\), nhận xét nào đúng?",
      "options": [
        "\\(x=3\\) bị loại dù biểu thức rút gọn cho x+3=6.",
        "\\(x=3\\) luôn được nhận vì thỏa biểu thức sau rút gọn.",
        "Không cần kiểm tra điều kiện xác định.",
        "Mọi số thực đều là nghiệm."
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "doi-chieu-nghiem",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "doi-chieu-nghiem"
      },
      "difficulty": "intermediate",
      "explanation": "Nghiệm tìm được sau biến đổi phải được đối chiếu với điều kiện xác định của phương trình ban đầu."
    }
  },
  {
    "id": "EQ08V1_071",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_071",
      "question": "Trong quá trình giải \\(\\frac{x(x-2)}{x}=0\\), nhận xét nào đúng?",
      "options": [
        "\\(x=0\\) bị loại vì mẫu x bằng 0.",
        "\\(x=0\\) luôn được nhận vì thỏa biểu thức sau rút gọn.",
        "Không cần kiểm tra điều kiện xác định.",
        "Mọi số thực đều là nghiệm."
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "doi-chieu-nghiem",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "doi-chieu-nghiem"
      },
      "difficulty": "intermediate",
      "explanation": "Nghiệm tìm được sau biến đổi phải được đối chiếu với điều kiện xác định của phương trình ban đầu."
    }
  },
  {
    "id": "EQ08V1_072",
    "source_path": "docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-03.json",
    "source_sha": "ad5ad4937bc971d3a85a894a838cd559671df4da",
    "record": {
      "id": "EQ08V1_072",
      "question": "Trong quá trình giải \\(\\frac{(x-5)(x+1)}{x-5}=6\\), nhận xét nào đúng?",
      "options": [
        "\\(x=5\\) bị loại vì mẫu ban đầu bằng 0.",
        "\\(x=5\\) luôn được nhận vì thỏa biểu thức sau rút gọn.",
        "Không cần kiểm tra điều kiện xác định.",
        "Mọi số thực đều là nghiệm."
      ],
      "answer": 0,
      "tags": {
        "topic": "phuong-trinh-bat-phuong-trinh",
        "skill": [
          "doi-chieu-nghiem",
          "dkxd-phuong-trinh-mau"
        ],
        "type": "doi-chieu-nghiem"
      },
      "difficulty": "intermediate",
      "explanation": "Nghiệm tìm được sau biến đổi phải được đối chiếu với điều kiện xác định của phương trình ban đầu."
    }
  },
  {
    "id": "RAD11MICRO_002",
    "source_path": "docs/assets/data/practice/11-can-thuc-micro-v1.json",
    "source_sha": "daa537d24635cb525f04b3b809022f40e2821dc9",
    "record": {
      "id": "RAD11MICRO_002",
      "card_id": "rad11-core-1",
      "micro_role": "trap",
      "question": "Điều kiện để \\(\\sqrt{2x-6}\\) có nghĩa là:",
      "options": [
        "\\(x\\ge3\\)",
        "\\(x>3\\)",
        "\\(x\\le3\\)",
        "Mọi \\(x\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can",
        "layer": "KNTT-Core",
        "grade": 9
      },
      "difficulty": "intermediate",
      "explanation": "Cần \\(2x-6\\ge0\\), nên \\(x\\ge3\\).",
      "hints": [
        "Biểu thức dưới căn bậc hai phải không âm.",
        "Giải \\(2x-6\\ge0\\)."
      ],
      "option_evidence": {
        "1": {
          "signal": "nham-dk-can-nghiem-ngat",
          "signal_weight": 2,
          "feedback_hint": "Căn bậc hai cho phép biểu thức dưới căn bằng 0."
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
    "id": "RAD11V1_011",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_011",
      "question": "Điều kiện xác định của \\(\\sqrt{x+3}\\) là:",
      "options": [
        "\\(x\\ge -3\\)",
        "\\(x>-3\\)",
        "\\(x\\le -3\\)",
        "\\(x<-3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "basic",
      "explanation": "Cần \\(x+3\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge -3\\)."
    }
  },
  {
    "id": "RAD11V1_012",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_012",
      "question": "Điều kiện xác định của \\(\\sqrt{2x+4}\\) là:",
      "options": [
        "\\(x\\ge -2\\)",
        "\\(x>-2\\)",
        "\\(x\\le -2\\)",
        "\\(x<-2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "basic",
      "explanation": "Cần \\(2x+4\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge -2\\)."
    }
  },
  {
    "id": "RAD11V1_013",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_013",
      "question": "Điều kiện xác định của \\(\\sqrt{3x+3}\\) là:",
      "options": [
        "\\(x\\ge -1\\)",
        "\\(x>-1\\)",
        "\\(x\\le -1\\)",
        "\\(x<-1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "basic",
      "explanation": "Cần \\(3x+3\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge -1\\)."
    }
  },
  {
    "id": "RAD11V1_014",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_014",
      "question": "Điều kiện xác định của \\(\\sqrt{4x+0}\\) là:",
      "options": [
        "\\(x\\ge 0\\)",
        "\\(x>0\\)",
        "\\(x\\le 0\\)",
        "\\(x<0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "basic",
      "explanation": "Cần \\(4x+0\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge 0\\)."
    }
  },
  {
    "id": "RAD11V1_015",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_015",
      "question": "Điều kiện xác định của \\(\\sqrt{x-1}\\) là:",
      "options": [
        "\\(x\\ge 1\\)",
        "\\(x>1\\)",
        "\\(x\\le 1\\)",
        "\\(x<1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "basic",
      "explanation": "Cần \\(x-1\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge 1\\)."
    }
  },
  {
    "id": "RAD11V1_016",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_016",
      "question": "Điều kiện xác định của \\(\\sqrt{2x-4}\\) là:",
      "options": [
        "\\(x\\ge 2\\)",
        "\\(x>2\\)",
        "\\(x\\le 2\\)",
        "\\(x<2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "basic",
      "explanation": "Cần \\(2x-4\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge 2\\)."
    }
  },
  {
    "id": "RAD11V1_017",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_017",
      "question": "Điều kiện xác định của \\(\\sqrt{3x-9}\\) là:",
      "options": [
        "\\(x\\ge 3\\)",
        "\\(x>3\\)",
        "\\(x\\le 3\\)",
        "\\(x<3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "intermediate",
      "explanation": "Cần \\(3x-9\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge 3\\)."
    }
  },
  {
    "id": "RAD11V1_018",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_018",
      "question": "Điều kiện xác định của \\(\\sqrt{4x+12}\\) là:",
      "options": [
        "\\(x\\ge -3\\)",
        "\\(x>-3\\)",
        "\\(x\\le -3\\)",
        "\\(x<-3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "intermediate",
      "explanation": "Cần \\(4x+12\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge -3\\)."
    }
  },
  {
    "id": "RAD11V1_019",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_019",
      "question": "Điều kiện xác định của \\(\\sqrt{x+2}\\) là:",
      "options": [
        "\\(x\\ge -2\\)",
        "\\(x>-2\\)",
        "\\(x\\le -2\\)",
        "\\(x<-2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "intermediate",
      "explanation": "Cần \\(x+2\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge -2\\)."
    }
  },
  {
    "id": "RAD11V1_020",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_020",
      "question": "Điều kiện xác định của \\(\\sqrt{2x+2}\\) là:",
      "options": [
        "\\(x\\ge -1\\)",
        "\\(x>-1\\)",
        "\\(x\\le -1\\)",
        "\\(x<-1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "intermediate",
      "explanation": "Cần \\(2x+2\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge -1\\)."
    }
  },
  {
    "id": "RAD11V1_021",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_021",
      "question": "Điều kiện xác định của \\(\\sqrt{3x+0}\\) là:",
      "options": [
        "\\(x\\ge 0\\)",
        "\\(x>0\\)",
        "\\(x\\le 0\\)",
        "\\(x<0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "intermediate",
      "explanation": "Cần \\(3x+0\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge 0\\)."
    }
  },
  {
    "id": "RAD11V1_022",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_022",
      "question": "Điều kiện xác định của \\(\\sqrt{4x-4}\\) là:",
      "options": [
        "\\(x\\ge 1\\)",
        "\\(x>1\\)",
        "\\(x\\le 1\\)",
        "\\(x<1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dieu-kien-xac-dinh"
      },
      "difficulty": "intermediate",
      "explanation": "Cần \\(4x-4\\ge0\\). Vì hệ số của \\(x\\) dương, suy ra \\(x\\ge 1\\)."
    }
  },
  {
    "id": "RAD11V1_023",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_023",
      "question": "Điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x+2}}\\) là:",
      "options": [
        "\\(x>-2\\)",
        "\\(x\\ge -2\\)",
        "\\(x<-2\\)",
        "\\(x\\le -2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x+2>0\\), do đó \\(x>-2\\)."
    }
  },
  {
    "id": "RAD11V1_024",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_024",
      "question": "Điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x+1}}\\) là:",
      "options": [
        "\\(x>-1\\)",
        "\\(x\\ge -1\\)",
        "\\(x<-1\\)",
        "\\(x\\le -1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x+1>0\\), do đó \\(x>-1\\)."
    }
  },
  {
    "id": "RAD11V1_025",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_025",
      "question": "Điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x}}\\) là:",
      "options": [
        "\\(x>0\\)",
        "\\(x\\ge 0\\)",
        "\\(x<0\\)",
        "\\(x\\le 0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x>0\\), do đó \\(x>0\\)."
    }
  },
  {
    "id": "RAD11V1_026",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_026",
      "question": "Điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x-1}}\\) là:",
      "options": [
        "\\(x>1\\)",
        "\\(x\\ge 1\\)",
        "\\(x<1\\)",
        "\\(x\\le 1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x-1>0\\), do đó \\(x>1\\)."
    }
  },
  {
    "id": "RAD11V1_027",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_027",
      "question": "Điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x-2}}\\) là:",
      "options": [
        "\\(x>2\\)",
        "\\(x\\ge 2\\)",
        "\\(x<2\\)",
        "\\(x\\le 2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x-2>0\\), do đó \\(x>2\\)."
    }
  },
  {
    "id": "RAD11V1_028",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_028",
      "question": "Điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x-3}}\\) là:",
      "options": [
        "\\(x>3\\)",
        "\\(x\\ge 3\\)",
        "\\(x<3\\)",
        "\\(x\\le 3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x-3>0\\), do đó \\(x>3\\)."
    }
  },
  {
    "id": "RAD11V1_029",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_029",
      "question": "Điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x-4}}\\) là:",
      "options": [
        "\\(x>4\\)",
        "\\(x\\ge 4\\)",
        "\\(x<4\\)",
        "\\(x\\le 4\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x-4>0\\), do đó \\(x>4\\)."
    }
  },
  {
    "id": "RAD11V1_030",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-01.json",
    "source_sha": "0aebcf174f74d19e18d9786ee850ae563cf40afc",
    "record": {
      "id": "RAD11V1_030",
      "question": "Dựa vào kiến thức cốt lõi, điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x+2}}\\) là:",
      "options": [
        "\\(x>-2\\)",
        "\\(x\\ge -2\\)",
        "\\(x<-2\\)",
        "\\(x\\le -2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x+2>0\\), do đó \\(x>-2\\)."
    }
  },
  {
    "id": "RAD11V1_031",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-02.json",
    "source_sha": "40052528c00448beb8ddcc409902f7e0d54be1e1",
    "record": {
      "id": "RAD11V1_031",
      "question": "Dựa vào kiến thức cốt lõi, điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x+1}}\\) là:",
      "options": [
        "\\(x>-1\\)",
        "\\(x\\ge -1\\)",
        "\\(x<-1\\)",
        "\\(x\\le -1\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x+1>0\\), do đó \\(x>-1\\)."
    }
  },
  {
    "id": "RAD11V1_032",
    "source_path": "docs/assets/data/practice/11-can-thuc-v1-02.json",
    "source_sha": "40052528c00448beb8ddcc409902f7e0d54be1e1",
    "record": {
      "id": "RAD11V1_032",
      "question": "Dựa vào kiến thức cốt lõi, điều kiện xác định của \\(\\dfrac{1}{\\sqrt{x}}\\) là:",
      "options": [
        "\\(x>0\\)",
        "\\(x\\ge 0\\)",
        "\\(x<0\\)",
        "\\(x\\le 0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "can-thuc",
        "skill": [
          "dkxd-can"
        ],
        "type": "dkxd-can-o-mau"
      },
      "difficulty": "intermediate",
      "explanation": "Vì căn ở mẫu nên cần \\(x>0\\), do đó \\(x>0\\)."
    }
  }
]
```

## E. Quy trình hai pha, tránh cắt câu trả lời và lãng phí quota

**Pha A:** Chỉ 28 ID CĐ08. Bảng duy nhất 28 dòng, `id | toán+đáp án | tác vụ đo | mã lỗi/clone | hành động`. Sau bảng nêu tối đa 7 phát hiện quan trọng, và 1–2 bài chẩn đoán mới cần học sinh tự lập ĐKXĐ và giải/loại nghiệm. Ghi phase_A_done_ids; JSON cuối chỉ summary, không viết lại 28 object.

**Pha B:** Chỉ 23 ID CĐ11. Bảng duy nhất 23 dòng; xem ranh giới `≥` và `>`, độ lặp, nhầm căn ở tử/mẫu; nêu 1–2 bài chẩn đoán kết hợp căn và mẫu. Sau đó tóm tắt mạch thống nhất B04+B05 (tìm miền gốc → bảo toàn miền → biến đổi → đối chiếu kết quả), phân biệt canonical concept và task-demand, không đổi mã nguồn.

Mỗi pha xuất `packet_id,source_sha,phase,expected_ids,reviewed_ids,missing_ids,duplicate_ids,unexpected_ids,status_counts,status=PROPOSAL_ONLY`; số trạng thái cộng 28 ở pha A và 23 ở pha B. Khi B đủ, có thể đưa tổng 51/51 bằng phép gộp đã kiểm kê, không tự tạo PASS cho mục không được phản biện.

Nếu phản hồi bị cắt, ghi ID cuối hoàn thành; yêu cầu lệnh tiếp tục, không tái in các dòng cũ. Không đưa lại nguyên văn toàn bộ đề vào câu trả lời.
