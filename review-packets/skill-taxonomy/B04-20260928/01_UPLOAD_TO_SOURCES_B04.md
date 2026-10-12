# MATH-SKILL-TAXONOMY-B04-20260928: Điều kiện xác định và giữ điều kiện ban đầu (CĐ04 + CĐ07)

**Nguồn tạm B04 — PROPOSAL_ONLY. GitHub main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. B03 đã tiếp nhận với ngoại lệ JSON; không yêu cầu lặp lại B03. Chỉ chọn nguồn này cùng Master Plan Toán v1.1 và Math Permanent v1.1.

## A. Phạm vi / câu hỏi học thuật

- Kiểm định **41 câu** có tag `dieu-kien-xac-dinh` hoặc `giu-dieu-kien-ban-dau`: 10 CĐ04 và 31 CĐ07 (gồm micro). `dieu-kien-xac-dinh` xuất hiện trong cả CĐ04 và CĐ07: cần quyết định đó là **một kỹ năng chung theo cùng quy tắc mẫu khác 0**, hay cần task-demand riêng theo độ phức tạp; không tách chỉ vì hai chuyên đề.
- `giu-dieu-kien-ban-dau` nói đến **giữ miền xác định sau phép rút gọn/đẳng thức hai phân thức**. Đây có thể là nhiệm vụ khác với chỉ tìm mẫu khác 0 ban đầu: kiểm tra bằng đề/đáp án và câu cần tự viết điều kiện sau rút gọn.
- 10 câu CĐ04 thường thay hệ số mẫu bậc nhất; nhiều câu CĐ07 cũng thay số; đánh giá clone cluster, mức độ phụ thuộc vào nhận diện phương án. **Một số đếm đúng cao không đồng nghĩa hiểu/ghi đúng điều kiện trong bài tự luận.**
- B04 không kiểm định phương trình chứa mẫu, căn thức hoặc đối chiếu nghiệm: chúng đã được khóa dữ liệu cho B05 riêng, không phát biểu đã giải quyết trọn chuỗi điều kiện–loại nghiệm.
- Phân biệt `assessed_skill`, `supporting_skill`, `method`, `representation`, `context`; không gộp/đổi ID cũ, không cộng hoặc phân tách counter lịch sử. Không suy ra tần suất thi, cấp lớp/Core chính thức từ packet không có corpus.
- Quy trình đầu ra nhằm tiết kiệm quota: **CHỈ MỘT bảng 41 ID** dạng ngắn, không lặp cả bảng rồi lại viết 41 object JSON. Sau bảng trình bày tối đa 8 nhận xét quan trọng, hai micro-test và JSON **chỉ tóm tắt coverage**. Nếu cần, gửi 2 phần liên tục có đánh dấu ID cuối; không bắt đầu lại toàn báo cáo.

## B. Source manifest và khóa SHA

| Source bank | Git blob SHA | Số câu trong bank |
|---|---|---:|
| `docs/assets/data/practice/04-bieu-thuc-dai-so-micro-v1.json` | `356e048b57389c828fa06ddbf0eb80fc8fc47226` | 15 |
| `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` | `216a464a1935bd5d1d00147e9386eb2ee224f27b` | 30 |
| `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-02.json` | `8a84956d7c1bfa718e1b38943619395113068fb6` | 30 |
| `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-03.json` | `42d57ec1c5a65cf331eb07d7b681b479dc203775` | 30 |
| `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` | `92f879459581ac21a0bf80ddb369efbbcb07088f` | 30 |
| `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-05.json` | `df7ea6d85961dc264696a0a1400820e5078d5ce5` | 12 |
| `docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json` | `077d3e46a345343cf9219c7f46fa6b56a38d3b42` | 15 |
| `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` | `3bf6305a57286b92c9c6a2486c94eadcff0d9163` | 30 |
| `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` | `2294a3f9d93b01b70036167713a3940fea367dca` | 30 |
| `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` | `9297d644a65c09b8c8ca8cc4b3f81cc194764360` | 30 |
| `docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json` | `b1ba2cc3664cfc2cda13fdafe4655f744130c833` | 30 |

Staging blob CĐ04: `e95236235af6290bf8990efa3cbd9bc31e911849`; CĐ07: `33bc12b02000046974ea8cf22f53b2e6b7b32ba8`. Trong từng câu bên dưới vẫn có `source_path` và `source_sha`.

## C. Danh sách dự kiến, bắt buộc 1:1

```json
{
  "packet_id": "MATH-SKILL-TAXONOMY-B04-20260928",
  "main_sha": "88143e6b2690edfe721f8d74d2dbcb251bc55ab3",
  "expected_count": 41,
  "by_topic": {
    "04-bieu-thuc-dai-so": 10,
    "07-phan-thuc-dai-so": 31
  },
  "by_primary_tag": {
    "dieu-kien-xac-dinh": 27,
    "giu-dieu-kien-ban-dau": 14
  },
  "expected_ids": [
    "ALG04V2_089",
    "ALG04V2_090",
    "ALG04V2_091",
    "ALG04V2_092",
    "ALG04V2_093",
    "ALG04V2_094",
    "ALG04V2_095",
    "ALG04V2_096",
    "ALG04V2_097",
    "ALG04V2_098",
    "RAT07MICRO_002",
    "RAT07V1_009",
    "RAT07V1_010",
    "RAT07V1_011",
    "RAT07V1_012",
    "RAT07V1_013",
    "RAT07V1_014",
    "RAT07V1_015",
    "RAT07V1_016",
    "RAT07V1_017",
    "RAT07V1_018",
    "RAT07V1_019",
    "RAT07V1_020",
    "RAT07V1_021",
    "RAT07V1_022",
    "RAT07V1_023",
    "RAT07V1_024",
    "RAT07V1_025",
    "RAT07V1_026",
    "RAT07V1_027",
    "RAT07V1_028",
    "RAT07V1_029",
    "RAT07V1_030",
    "RAT07V1_063",
    "RAT07V1_064",
    "RAT07V1_065",
    "RAT07V1_066",
    "RAT07V1_067",
    "RAT07V1_068",
    "RAT07V1_069",
    "RAT07V1_070"
  ]
}
```

## D. 41 bản ghi nguyên văn ngân hàng

```json
[
  {
    "id": "ALG04V2_089",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-03.json",
    "source_sha": "42d57ec1c5a65cf331eb07d7b681b479dc203775",
    "record": {
      "id": "ALG04V2_089",
      "question": "Biểu thức \\(\\dfrac{x+1}{x - 2}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne 2\\)",
        "\\(x=2\\)",
        "\\(x\\ne -2\\)",
        "\\(x>2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0: \\(x - 2\\ne0\\). Suy ra \\(x\\ne 2\\)."
    }
  },
  {
    "id": "ALG04V2_090",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-03.json",
    "source_sha": "42d57ec1c5a65cf331eb07d7b681b479dc203775",
    "record": {
      "id": "ALG04V2_090",
      "question": "Biểu thức \\(\\dfrac{x+1}{2x + 6}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne -3\\)",
        "\\(x=-3\\)",
        "\\(x\\ne 3\\)",
        "\\(x>-3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0: \\(2x + 6\\ne0\\). Suy ra \\(x\\ne -3\\)."
    }
  },
  {
    "id": "ALG04V2_091",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_091",
      "question": "Biểu thức \\(\\dfrac{x+1}{3x - 9}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne 3\\)",
        "\\(x=3\\)",
        "\\(x\\ne -3\\)",
        "\\(x>3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0: \\(3x - 9\\ne0\\). Suy ra \\(x\\ne 3\\)."
    }
  },
  {
    "id": "ALG04V2_092",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_092",
      "question": "Biểu thức \\(\\dfrac{x+1}{4x + 8}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne -2\\)",
        "\\(x=-2\\)",
        "\\(x\\ne 2\\)",
        "\\(x>-2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0: \\(4x + 8\\ne0\\). Suy ra \\(x\\ne -2\\)."
    }
  },
  {
    "id": "ALG04V2_093",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_093",
      "question": "Biểu thức \\(\\dfrac{x+1}{5x - 10}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne 2\\)",
        "\\(x=2\\)",
        "\\(x\\ne -2\\)",
        "\\(x>2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0: \\(5x - 10\\ne0\\). Suy ra \\(x\\ne 2\\)."
    }
  },
  {
    "id": "ALG04V2_094",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_094",
      "question": "Biểu thức \\(\\dfrac{x+1}{2x - 4}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne 2\\)",
        "\\(x=2\\)",
        "\\(x\\ne -2\\)",
        "\\(x>2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0: \\(2x - 4\\ne0\\). Suy ra \\(x\\ne 2\\)."
    }
  },
  {
    "id": "ALG04V2_095",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_095",
      "question": "Biểu thức \\(\\dfrac{x+1}{3x + 6}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne -2\\)",
        "\\(x=-2\\)",
        "\\(x\\ne 2\\)",
        "\\(x>-2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Mẫu phải khác 0: \\(3x + 6\\ne0\\). Suy ra \\(x\\ne -2\\)."
    }
  },
  {
    "id": "ALG04V2_096",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_096",
      "question": "Biểu thức \\(\\dfrac{x+1}{6x - 18}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne 3\\)",
        "\\(x=3\\)",
        "\\(x\\ne -3\\)",
        "\\(x>3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Mẫu phải khác 0: \\(6x - 18\\ne0\\). Suy ra \\(x\\ne 3\\)."
    }
  },
  {
    "id": "ALG04V2_097",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_097",
      "question": "Biểu thức \\(\\dfrac{x+1}{7x + 14}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne -2\\)",
        "\\(x=-2\\)",
        "\\(x\\ne 2\\)",
        "\\(x>-2\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Mẫu phải khác 0: \\(7x + 14\\ne0\\). Suy ra \\(x\\ne -2\\)."
    }
  },
  {
    "id": "ALG04V2_098",
    "source_path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json",
    "source_sha": "92f879459581ac21a0bf80ddb369efbbcb07088f",
    "record": {
      "id": "ALG04V2_098",
      "question": "Biểu thức \\(\\dfrac{x+1}{4x - 12}\\) xác định khi nào?",
      "options": [
        "\\(x\\ne 3\\)",
        "\\(x=3\\)",
        "\\(x\\ne -3\\)",
        "\\(x>3\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "bieu-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Mẫu phải khác 0: \\(4x - 12\\ne0\\). Suy ra \\(x\\ne 3\\)."
    }
  },
  {
    "id": "RAT07MICRO_002",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json",
    "source_sha": "077d3e46a345343cf9219c7f46fa6b56a38d3b42",
    "record": {
      "id": "RAT07MICRO_002",
      "card_id": "pt07-core-1",
      "micro_role": "trap",
      "question": "Tìm điều kiện xác định của \\(P=\\frac{x+1}{x(x-2)}\\).",
      "options": [
        "\\(x\\ne0\\) và \\(x\\ne2\\)",
        "\\(x\\ne2\\)",
        "\\(x\\ne-1\\)",
        "\\(x\\ne0\\)"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-tich-nhan-tu",
        "layer": "KNTT-Core",
        "grade": 8
      },
      "difficulty": "intermediate",
      "explanation": "Mẫu \\(x(x-2)\\ne0\\), nên đồng thời \\(x\\ne0\\) và \\(x\\ne2\\).",
      "hints": [
        "Chỉ xét các giá trị làm mẫu bằng 0.",
        "Một tích khác 0 khi từng nhân tử đều khác 0."
      ],
      "option_evidence": {
        "1": {
          "signal": "dkxd-thieu-nhan-tu",
          "signal_weight": 2,
          "feedback_hint": "Em đã loại một nghiệm của mẫu nhưng còn bỏ sót nhân tử x."
        },
        "2": {
          "signal": "dkxd-nham-tu-so",
          "signal_weight": 2,
          "feedback_hint": "ĐKXĐ được tìm từ mẫu thức, không phải từ nghiệm của tử thức."
        },
        "3": {
          "signal": "dkxd-thieu-nhan-tu",
          "signal_weight": 2,
          "feedback_hint": "Em đã loại một nghiệm của mẫu nhưng còn bỏ sót nhân tử x-2."
        }
      },
      "curriculum": {
        "book": "KNTT",
        "grades": [
          8
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
    "id": "RAT07V1_009",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_009",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-5}\\).",
      "options": [
        "\\(x\\ne 5\\)",
        "\\(x=5\\)",
        "\\(x\\ne -5\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=5."
    }
  },
  {
    "id": "RAT07V1_010",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_010",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-4}\\).",
      "options": [
        "\\(x\\ne 4\\)",
        "\\(x=4\\)",
        "\\(x\\ne -4\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=4."
    }
  },
  {
    "id": "RAT07V1_011",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_011",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-3}\\).",
      "options": [
        "\\(x\\ne 3\\)",
        "\\(x=3\\)",
        "\\(x\\ne -3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=3."
    }
  },
  {
    "id": "RAT07V1_012",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_012",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-2}\\).",
      "options": [
        "\\(x\\ne 2\\)",
        "\\(x=2\\)",
        "\\(x\\ne -2\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=2."
    }
  },
  {
    "id": "RAT07V1_013",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_013",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-1}\\).",
      "options": [
        "\\(x\\ne 1\\)",
        "\\(x=1\\)",
        "\\(x\\ne -1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=1."
    }
  },
  {
    "id": "RAT07V1_014",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_014",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x+1}\\).",
      "options": [
        "\\(x\\ne -1\\)",
        "\\(x=-1\\)",
        "\\(x\\ne 1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=-1."
    }
  },
  {
    "id": "RAT07V1_015",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_015",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x+2}\\).",
      "options": [
        "\\(x\\ne -2\\)",
        "\\(x=-2\\)",
        "\\(x\\ne 2\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=-2."
    }
  },
  {
    "id": "RAT07V1_016",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_016",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x+3}\\).",
      "options": [
        "\\(x\\ne -3\\)",
        "\\(x=-3\\)",
        "\\(x\\ne 3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh"
        ],
        "type": "dkxd-bac-nhat"
      },
      "difficulty": "basic",
      "explanation": "Mẫu phải khác 0, nên loại x=-3."
    }
  },
  {
    "id": "RAT07V1_017",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_017",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + x - 6}\\).",
      "options": [
        "\\(x\\ne -3,\\;x\\ne 2\\)",
        "\\(x=-3\\;\\text{hoặc}\\;x=2\\)",
        "\\(x\\ne -1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+3)(x-2)\\). Mẫu khác 0 khi \\(x\\ne -3\\) và \\(x\\ne 2\\)."
    }
  },
  {
    "id": "RAT07V1_018",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_018",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - x - 6}\\).",
      "options": [
        "\\(x\\ne -2,\\;x\\ne 3\\)",
        "\\(x=-2\\;\\text{hoặc}\\;x=3\\)",
        "\\(x\\ne 1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+2)(x-3)\\). Mẫu khác 0 khi \\(x\\ne -2\\) và \\(x\\ne 3\\)."
    }
  },
  {
    "id": "RAT07V1_019",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_019",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + 3 x - 4}\\).",
      "options": [
        "\\(x\\ne -4,\\;x\\ne 1\\)",
        "\\(x=-4\\;\\text{hoặc}\\;x=1\\)",
        "\\(x\\ne -3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+4)(x-1)\\). Mẫu khác 0 khi \\(x\\ne -4\\) và \\(x\\ne 1\\)."
    }
  },
  {
    "id": "RAT07V1_020",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_020",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - 3 x - 4}\\).",
      "options": [
        "\\(x\\ne -1,\\;x\\ne 4\\)",
        "\\(x=-1\\;\\text{hoặc}\\;x=4\\)",
        "\\(x\\ne 3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+1)(x-4)\\). Mẫu khác 0 khi \\(x\\ne -1\\) và \\(x\\ne 4\\)."
    }
  },
  {
    "id": "RAT07V1_021",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_021",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + 3 x - 10}\\).",
      "options": [
        "\\(x\\ne -5,\\;x\\ne 2\\)",
        "\\(x=-5\\;\\text{hoặc}\\;x=2\\)",
        "\\(x\\ne -3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+5)(x-2)\\). Mẫu khác 0 khi \\(x\\ne -5\\) và \\(x\\ne 2\\)."
    }
  },
  {
    "id": "RAT07V1_022",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_022",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - 3 x - 10}\\).",
      "options": [
        "\\(x\\ne -2,\\;x\\ne 5\\)",
        "\\(x=-2\\;\\text{hoặc}\\;x=5\\)",
        "\\(x\\ne 3\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+2)(x-5)\\). Mẫu khác 0 khi \\(x\\ne -2\\) và \\(x\\ne 5\\)."
    }
  },
  {
    "id": "RAT07V1_023",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_023",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + x - 12}\\).",
      "options": [
        "\\(x\\ne -4,\\;x\\ne 3\\)",
        "\\(x=-4\\;\\text{hoặc}\\;x=3\\)",
        "\\(x\\ne -1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+4)(x-3)\\). Mẫu khác 0 khi \\(x\\ne -4\\) và \\(x\\ne 3\\)."
    }
  },
  {
    "id": "RAT07V1_024",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_024",
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - x - 12}\\).",
      "options": [
        "\\(x\\ne -3,\\;x\\ne 4\\)",
        "\\(x=-3\\;\\text{hoặc}\\;x=4\\)",
        "\\(x\\ne 1\\)",
        "Mọi x"
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "dieu-kien-xac-dinh",
          "phan-tich-tu-mau"
        ],
        "type": "dkxd-bac-hai"
      },
      "difficulty": "intermediate",
      "explanation": "Phân tích mẫu thành \\((x+3)(x-4)\\). Mẫu khác 0 khi \\(x\\ne -3\\) và \\(x\\ne 4\\)."
    }
  },
  {
    "id": "RAT07V1_025",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_025",
      "question": "Chọn khẳng định đúng:",
      "options": [
        "\\(\\frac{x+1}{x-2}\\) và \\(\\frac{2x+2}{2x-4}\\) bằng nhau trên miền \\(x\\ne2\\).",
        "\\(\\frac{x+1}{x-2}\\) và \\(\\frac{2x+2}{2x-4}\\) không bao giờ bằng nhau.",
        "Hai biểu thức chỉ bằng nhau khi x=0.",
        "Có thể bỏ mọi điều kiện xác định khi rút gọn."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "hai-phan-thuc-bang-nhau",
          "giu-dieu-kien-ban-dau"
        ],
        "type": "hai-phan-thuc-bang-nhau"
      },
      "difficulty": "intermediate",
      "explanation": "Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu."
    }
  },
  {
    "id": "RAT07V1_026",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_026",
      "question": "Chọn khẳng định đúng:",
      "options": [
        "\\(\\frac{x-3}{x+1}\\) và \\(\\frac{3x-9}{3x+3}\\) bằng nhau trên miền \\(x\\ne-1\\).",
        "\\(\\frac{x-3}{x+1}\\) và \\(\\frac{3x-9}{3x+3}\\) không bao giờ bằng nhau.",
        "Hai biểu thức chỉ bằng nhau khi x=0.",
        "Có thể bỏ mọi điều kiện xác định khi rút gọn."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "hai-phan-thuc-bang-nhau",
          "giu-dieu-kien-ban-dau"
        ],
        "type": "hai-phan-thuc-bang-nhau"
      },
      "difficulty": "intermediate",
      "explanation": "Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu."
    }
  },
  {
    "id": "RAT07V1_027",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_027",
      "question": "Chọn khẳng định đúng:",
      "options": [
        "\\(\\frac{2x}{x+4}\\) và \\(\\frac{6x}{3x+12}\\) bằng nhau trên miền \\(x\\ne-4\\).",
        "\\(\\frac{2x}{x+4}\\) và \\(\\frac{6x}{3x+12}\\) không bao giờ bằng nhau.",
        "Hai biểu thức chỉ bằng nhau khi x=0.",
        "Có thể bỏ mọi điều kiện xác định khi rút gọn."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "hai-phan-thuc-bang-nhau",
          "giu-dieu-kien-ban-dau"
        ],
        "type": "hai-phan-thuc-bang-nhau"
      },
      "difficulty": "intermediate",
      "explanation": "Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu."
    }
  },
  {
    "id": "RAT07V1_028",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_028",
      "question": "Chọn khẳng định đúng:",
      "options": [
        "\\(\\frac{x+2}{2x-1}\\) và \\(\\frac{4x+8}{8x-4}\\) bằng nhau trên miền \\(x\\ne\\frac12\\).",
        "\\(\\frac{x+2}{2x-1}\\) và \\(\\frac{4x+8}{8x-4}\\) không bao giờ bằng nhau.",
        "Hai biểu thức chỉ bằng nhau khi x=0.",
        "Có thể bỏ mọi điều kiện xác định khi rút gọn."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "hai-phan-thuc-bang-nhau",
          "giu-dieu-kien-ban-dau"
        ],
        "type": "hai-phan-thuc-bang-nhau"
      },
      "difficulty": "intermediate",
      "explanation": "Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu."
    }
  },
  {
    "id": "RAT07V1_029",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_029",
      "question": "Chọn khẳng định đúng:",
      "options": [
        "\\(\\frac{3-x}{x+5}\\) và \\(\\frac{6-2x}{2x+10}\\) bằng nhau trên miền \\(x\\ne-5\\).",
        "\\(\\frac{3-x}{x+5}\\) và \\(\\frac{6-2x}{2x+10}\\) không bao giờ bằng nhau.",
        "Hai biểu thức chỉ bằng nhau khi x=0.",
        "Có thể bỏ mọi điều kiện xác định khi rút gọn."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "hai-phan-thuc-bang-nhau",
          "giu-dieu-kien-ban-dau"
        ],
        "type": "hai-phan-thuc-bang-nhau"
      },
      "difficulty": "intermediate",
      "explanation": "Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu."
    }
  },
  {
    "id": "RAT07V1_030",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json",
    "source_sha": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "record": {
      "id": "RAT07V1_030",
      "question": "Chọn khẳng định đúng:",
      "options": [
        "\\(\\frac{x^2-1}{x-1}\\) và \\(x+1\\) bằng nhau trên miền \\(x\\ne1\\).",
        "\\(\\frac{x^2-1}{x-1}\\) và \\(x+1\\) không bao giờ bằng nhau.",
        "Hai biểu thức chỉ bằng nhau khi x=0.",
        "Có thể bỏ mọi điều kiện xác định khi rút gọn."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "hai-phan-thuc-bang-nhau",
          "giu-dieu-kien-ban-dau"
        ],
        "type": "hai-phan-thuc-bang-nhau"
      },
      "difficulty": "intermediate",
      "explanation": "Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu."
    }
  },
  {
    "id": "RAT07V1_063",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_063",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-4}{x-2}=x+2\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne2\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne2\\); không được nhận lại giá trị đã bị loại."
    }
  },
  {
    "id": "RAT07V1_064",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_064",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-9}{x-3}=x+3\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne3\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne3\\); không được nhận lại giá trị đã bị loại."
    }
  },
  {
    "id": "RAT07V1_065",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_065",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-1}{x-1}=x+1\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne1\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne1\\); không được nhận lại giá trị đã bị loại."
    }
  },
  {
    "id": "RAT07V1_066",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_066",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2+2x}{x}=x+2\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne0\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne0\\); không được nhận lại giá trị đã bị loại."
    }
  },
  {
    "id": "RAT07V1_067",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_067",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-5x}{x}=x-5\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne0\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne0\\); không được nhận lại giá trị đã bị loại."
    }
  },
  {
    "id": "RAT07V1_068",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_068",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{(x-4)(x+1)}{x-4}=x+1\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne4\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne4\\); không được nhận lại giá trị đã bị loại."
    }
  },
  {
    "id": "RAT07V1_069",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_069",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{(x+3)(x-2)}{x+3}=x-2\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne-3\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne-3\\); không được nhận lại giá trị đã bị loại."
    }
  },
  {
    "id": "RAT07V1_070",
    "source_path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json",
    "source_sha": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
    "record": {
      "id": "RAT07V1_070",
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x(x-7)}{x}=x-7\\) là:",
      "options": [
        "Đúng khi giữ điều kiện ban đầu \\(x\\ne0\\).",
        "Đúng với mọi x vì đã rút gọn mẫu.",
        "Sai vì không bao giờ được rút gọn phân thức.",
        "Chỉ đúng khi x=0."
      ],
      "answer": 0,
      "tags": {
        "topic": "phan-thuc-dai-so",
        "skill": [
          "giu-dieu-kien-ban-dau"
        ],
        "type": "giu-dieu-kien"
      },
      "difficulty": "intermediate",
      "explanation": "Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \\(x\\ne0\\); không được nhận lại giá trị đã bị loại."
    }
  }
]
```

## E. Hợp đồng phản biện

- Đọc/đối chiếu đề, options, answer index, explanation, tags từng ID. Toán đúng, chất lượng phương án nhiễu và giá trị chẩn đoán là ba mặt khác nhau.
- Bảng duy nhất 41 dòng: `ID | math/answer PASS-or-REVISION | target/task_demand | clone_group (nếu có) | issue_code/next_action`. Mỗi ID đúng 1 lần. Nếu có lỗi toán/đáp án cần trích rõ nguồn và đề xuất sửa; nếu thiếu chứng cứ thì INSUFFICIENT_EVIDENCE.
- Quyết định ưu tiên: dùng chung `dieu-kien-xac-dinh` hai chuyên đề khi đúng cùng định luật hay tách theo nhiệm vụ đo; `giu-dieu-kien-ban-dau` là task-demand độc lập hay chỉ supporting? Phải chỉ ra micro-test phân biệt.
- Đề xuất 2 micro-test ngắn: (1) tự tìm và giải thích DKXD, kể cả mẫu phân tích nhân tử 2 nghiệm loại; (2) rút gọn biểu thức có nhân tử triệt tiêu, giữ miền ban đầu và phản ví dụ tại giá trị bị loại; có lời giải chuẩn.
- JSON kết thúc chỉ gồm `packet_id,main_sha,expected_count,reviewed_ids,missing_ids,duplicate_ids,unexpected_ids,status_counts,priority_issues,PROPOSAL_ONLY`. Không sao chép lại 41 record gốc vào JSON. Tổng counts đúng 41. Với mục chưa đọc không tự PASS.
