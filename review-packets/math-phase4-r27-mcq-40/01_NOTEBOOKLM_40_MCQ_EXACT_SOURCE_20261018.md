# R27 — 40 câu trắc nghiệm: nguồn kiểm duyệt học thuật độc lập

**Packet ID:** `MATH-R27-NEW-MCQ-40-20261018`
**Trạng thái:** `PREPARED_FOR_INDEPENDENT_REVIEW_NOT_APPROVED`
**Phạm vi:** 40 câu ngoài 3.114 ID chính sách Skill lịch sử.

## Hướng dẫn cho NotebookLM

- Chỉ định S1 SGK/SBT KNTT và chương trình chính thức để xác minh Core, lớp, bài; không suy ra S1 chỉ từ nhãn nguồn.
- Đánh giá từng mã: đúng toán, điều kiện/miền xác định, một đáp án đúng duy nhất, đáp án nhiễu, lời giải, loại kỹ năng và cấu trúc trùng lặp.
- Phân biệt KNTT-Core, Core-Support, Entrance10, Specialized-Challenge và THPT-Bridge.
- Nếu thiếu nguồn S1 hoặc chưa có bằng chứng quyết định, kết luận INSUFFICIENT_EVIDENCE. Không tự cấp PASS.
- Mỗi câu phải nhận PASS, REVISE hoặc INSUFFICIENT_EVIDENCE; trả đầy đủ 40/40 ID với lý do và đề xuất sửa cụ thể.
- Đừng coi nhãn tags.skill là Family/Skill đã duyệt; không bật bộ đếm, Readiness, Mastery, hồi tố hay đổi ID.

## Danh mục file nguồn (Git blob SHA)

- `02-so-va-phep-tinh-v1-05.json`: `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`
- `02-so-va-phep-tinh-v1-06.json`: `c39c177609cd5440de98b81461896c80f7166121`
- `02-so-va-phep-tinh-v1-07.json`: `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e`
- `03-ti-le-ti-le-thuc-v1-05.json`: `759fd83900fa5b64d5db7f6deb2197c343c46732`
- `04-bieu-thuc-dai-so-v2-06.json`: `34e52b7900f77815e0bff79ba82fdb491d6794b3`
- `12-phuong-trinh-bac-hai-viete-v1-05.json`: `22c73f3d24020a7db1ead9b8b90c6488c8379ce0`

## Nội dung nguyên văn từ ngân hàng hiện tại

### NUM02V1_121 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_121",
  "question": "Làm tròn 5,83 đến hàng phần mười.",
  "options": [
    "5,8",
    "5,9",
    "5,83",
    "6,0"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-phan-muoi"
  },
  "difficulty": "basic",
  "explanation": "Chữ số hàng phần trăm là 3 < 5 nên giữ nguyên hàng phần mười: 5,83 ≈ 5,8.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_122 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_122",
  "question": "Làm tròn 12,349 đến hàng phần trăm.",
  "options": [
    "12,34",
    "12,35",
    "12,3",
    "12,349"
  ],
  "answer": 1,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-phan-tram"
  },
  "difficulty": "basic",
  "explanation": "Chữ số hàng phần nghìn là 9 ≥ 5 nên tăng hàng phần trăm từ 4 lên 5: 12,349 ≈ 12,35.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_123 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_123",
  "question": "Làm tròn 4,265 đến hàng phần trăm.",
  "options": [
    "4,26",
    "4,27",
    "4,3",
    "4,265"
  ],
  "answer": 1,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-moc-5"
  },
  "difficulty": "intermediate",
  "explanation": "Chữ số hàng phần nghìn là 5 nên tăng hàng phần trăm từ 6 lên 7: 4,265 ≈ 4,27.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_124 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_124",
  "question": "Làm tròn 0,996 đến hàng phần trăm.",
  "options": [
    "0,99",
    "1,00",
    "0,996",
    "1,06"
  ],
  "answer": 1,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-nho-nho"
  },
  "difficulty": "intermediate",
  "explanation": "Hàng phần nghìn là 6 nên 0,99 được làm tròn tăng lên thành 1,00.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_125 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_125",
  "question": "Làm tròn 73,486 đến hàng đơn vị.",
  "options": [
    "73",
    "74",
    "73,5",
    "74,5"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-don-vi"
  },
  "difficulty": "basic",
  "explanation": "Chữ số hàng phần mười là 4 < 5 nên giữ nguyên hàng đơn vị: 73,486 ≈ 73.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_126 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_126",
  "question": "Làm tròn 73,586 đến hàng đơn vị.",
  "options": [
    "73",
    "74",
    "73,6",
    "74,6"
  ],
  "answer": 1,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-don-vi"
  },
  "difficulty": "basic",
  "explanation": "Chữ số hàng phần mười là 5 nên tăng hàng đơn vị từ 3 lên 4: 73,586 ≈ 74.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_127 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_127",
  "question": "Một đoạn dây dài 2,746 m. Làm tròn độ dài đến hàng phần trăm mét.",
  "options": [
    "2,74 m",
    "2,75 m",
    "2,7 m",
    "2,746 m"
  ],
  "answer": 1,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-do-luong"
  },
  "difficulty": "intermediate",
  "explanation": "Chữ số hàng phần nghìn là 6 ≥ 5 nên 2,746 m ≈ 2,75 m.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_128 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_128",
  "question": "Một món hàng có giá 48.650 đồng. Làm tròn giá đến nghìn đồng gần nhất.",
  "options": [
    "48.000 đồng",
    "49.000 đồng",
    "48.650 đồng",
    "50.000 đồng"
  ],
  "answer": 1,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "lam-tron-thuc-te"
  },
  "difficulty": "intermediate",
  "explanation": "Khi làm tròn đến nghìn đồng, nhìn hàng trăm: 6 ≥ 5 nên 48.650 đồng ≈ 49.000 đồng.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_129 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_129",
  "question": "Ước lượng 19,8 + 30,3 bằng cách làm tròn mỗi số đến số nguyên gần nhất.",
  "options": [
    "40",
    "49",
    "50",
    "51"
  ],
  "answer": 2,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "uoc-luong-tong"
  },
  "difficulty": "intermediate",
  "explanation": "19,8 ≈ 20 và 30,3 ≈ 30, nên tổng được ước lượng là 20 + 30 = 50.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_130 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_130",
  "question": "Ước lượng 4,98 × 20,1 bằng cách làm tròn mỗi thừa số đến số nguyên gần nhất.",
  "options": [
    "80",
    "90",
    "100",
    "110"
  ],
  "answer": 2,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "uoc-luong-tich"
  },
  "difficulty": "intermediate",
  "explanation": "4,98 ≈ 5 và 20,1 ≈ 20, nên tích được ước lượng là 5 × 20 = 100.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_131 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_131",
  "question": "Vì sao 6,241 làm tròn đến hàng phần trăm bằng 6,24?",
  "options": [
    "Vì chữ số hàng phần nghìn là 1 < 5 nên giữ nguyên hàng phần trăm.",
    "Vì luôn bỏ tất cả chữ số sau hàng phần trăm.",
    "Vì chữ số hàng phần mười là 2 < 5.",
    "Vì 6,241 nhỏ hơn 6,25."
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "giai-thich-quy-tac"
  },
  "difficulty": "intermediate",
  "explanation": "Muốn làm tròn đến hàng phần trăm, phải nhìn chữ số ngay bên phải là hàng phần nghìn. Ở đây chữ số đó là 1 < 5.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_132 — CT02

**File:** `02-so-va-phep-tinh-v1-05.json`  
**Source SHA:** `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Nhãn nguồn chưa duyệt:** `lam-tron-so`

```json
{
  "id": "NUM02V1_132",
  "question": "Số nào sau đây khi làm tròn đến hàng phần mười thì được 6,4?",
  "options": [
    "6,34",
    "6,36",
    "6,45",
    "6,52"
  ],
  "answer": 1,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "lam-tron-so"
    ],
    "type": "dao-nguoc-lam-tron"
  },
  "difficulty": "advanced",
  "explanation": "6,36 có chữ số hàng phần trăm là 6 nên làm tròn đến hàng phần mười được 6,4. Các lựa chọn còn lại lần lượt cho 6,3; 6,5; 6,5.",
  "authoring_review": {
    "packet": "MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004",
    "verdict": "PASS"
  }
}
```

### NUM02V1_133 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `phep-tinh-so-huu-ti`

```json
{
  "id": "NUM02V1_133",
  "question": "Tính \\(-\\frac25+\\frac3{10}\\).",
  "options": [
    "\\(-\\frac1{10}\\)",
    "\\(\\frac1{10}\\)",
    "\\(-\\frac7{10}\\)",
    "\\(\\frac7{10}\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "phep-tinh-so-huu-ti"
    ],
    "type": "phep-tinh-so-huu-ti"
  },
  "difficulty": "basic",
  "explanation": "Quy đồng: \\(-2/5=-4/10\\), nên tổng bằng \\(-1/10\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_134 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `phep-tinh-so-huu-ti`

```json
{
  "id": "NUM02V1_134",
  "question": "Tính \\(\\frac79-\\left(-\\frac29\\right)\\).",
  "options": [
    "\\(1\\)",
    "\\(\\frac59\\)",
    "\\(-1\\)",
    "\\(\\frac19\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "phep-tinh-so-huu-ti"
    ],
    "type": "phep-tinh-so-huu-ti"
  },
  "difficulty": "basic",
  "explanation": "Trừ số âm là cộng số đối: \\(7/9+2/9=1\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_135 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `phep-tinh-so-huu-ti`

```json
{
  "id": "NUM02V1_135",
  "question": "Tính \\((-\\frac56)\\cdot\\frac9{10}\\).",
  "options": [
    "\\(-\\frac34\\)",
    "\\(\\frac34\\)",
    "\\(-\\frac{45}{16}\\)",
    "\\(-\\frac12\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "phep-tinh-so-huu-ti"
    ],
    "type": "phep-tinh-so-huu-ti"
  },
  "difficulty": "basic",
  "explanation": "Rút gọn trước hoặc sau khi nhân: \\((-5/6)(9/10)=-45/60=-3/4\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_136 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `phep-tinh-so-huu-ti`

```json
{
  "id": "NUM02V1_136",
  "question": "Tính \\(\\frac38:\\left(-\\frac9{16}\\right)\\).",
  "options": [
    "\\(-\\frac23\\)",
    "\\(\\frac23\\)",
    "\\(-\\frac{27}{128}\\)",
    "\\(-\\frac32\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "phep-tinh-so-huu-ti"
    ],
    "type": "phep-tinh-so-huu-ti"
  },
  "difficulty": "basic",
  "explanation": "Nhân với nghịch đảo: \\((3/8)(-16/9)=-2/3\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_137 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `phep-tinh-so-huu-ti`

```json
{
  "id": "NUM02V1_137",
  "question": "Tính \\(1-\\frac23\\cdot\\left(-\\frac34\\right)\\).",
  "options": [
    "\\(\\frac32\\)",
    "\\(\\frac12\\)",
    "\\(-\\frac32\\)",
    "\\(0\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "phep-tinh-so-huu-ti"
    ],
    "type": "phep-tinh-so-huu-ti"
  },
  "difficulty": "intermediate",
  "explanation": "Tích bằng \\(-1/2\\), nên \\(1-(-1/2)=3/2\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_138 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `phep-tinh-so-huu-ti`

```json
{
  "id": "NUM02V1_138",
  "question": "Giá trị của \\(\\left(-\\frac12\\right)^3\\) là:",
  "options": [
    "\\(-\\frac18\\)",
    "\\(\\frac18\\)",
    "\\(-\\frac16\\)",
    "\\(\\frac16\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "phep-tinh-so-huu-ti"
    ],
    "type": "phep-tinh-so-huu-ti"
  },
  "difficulty": "basic",
  "explanation": "Lũy thừa bậc lẻ giữ dấu âm: \\((-1/2)^3=-1/8\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_139 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `so-vo-ti`

```json
{
  "id": "NUM02V1_139",
  "question": "Số nào là số vô tỉ?",
  "options": [
    "\\(\\sqrt3\\)",
    "\\(0,75\\)",
    "\\(-2\\)",
    "\\(0,(6)\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "so-vo-ti"
    ],
    "type": "so-vo-ti"
  },
  "difficulty": "basic",
  "explanation": "\\(\\sqrt3\\) là số vô tỉ; các số còn lại là hữu tỉ.",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_140 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `so-vo-ti`

```json
{
  "id": "NUM02V1_140",
  "question": "Khẳng định nào đúng?",
  "options": [
    "Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn.",
    "Mọi số thập phân vô hạn đều vô tỉ.",
    "Mọi căn bậc hai đều vô tỉ.",
    "Số vô tỉ không thuộc tập số thực."
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "so-vo-ti"
    ],
    "type": "so-vo-ti"
  },
  "difficulty": "intermediate",
  "explanation": "Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn và vẫn thuộc tập số thực.",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_141 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `so-vo-ti`

```json
{
  "id": "NUM02V1_141",
  "question": "Trong các số \\(\\sqrt2,\\sqrt9,\\frac53,0,(12)\\), có bao nhiêu số vô tỉ?",
  "options": [
    "1",
    "2",
    "3",
    "4"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "so-vo-ti"
    ],
    "type": "so-vo-ti"
  },
  "difficulty": "intermediate",
  "explanation": "Chỉ \\(\\sqrt2\\) là vô tỉ; \\(\\sqrt9=3\\), \\(5/3\\) và 0,(12) đều hữu tỉ.",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_142 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `can-bac-hai-so-hoc`

```json
{
  "id": "NUM02V1_142",
  "question": "Tính \\(\\sqrt{121}\\).",
  "options": [
    "11",
    "-11",
    "±11",
    "121"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "can-bac-hai-so-hoc"
    ],
    "type": "can-bac-hai-so-hoc"
  },
  "difficulty": "basic",
  "explanation": "Vì \\(11^2=121\\) và căn bậc hai số học không âm nên kết quả là 11.",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_143 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `can-bac-hai-so-hoc`

```json
{
  "id": "NUM02V1_143",
  "question": "Tính \\(\\sqrt{\\frac{25}{49}}\\).",
  "options": [
    "\\(\\frac57\\)",
    "\\(-\\frac57\\)",
    "\\(\\frac{25}{7}\\)",
    "\\(\\frac5{49}\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "can-bac-hai-so-hoc"
    ],
    "type": "can-bac-hai-so-hoc"
  },
  "difficulty": "basic",
  "explanation": "\\((5/7)^2=25/49\\), nên căn bậc hai số học bằng 5/7.",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_144 — CT02

**File:** `02-so-va-phep-tinh-v1-06.json`  
**Source SHA:** `c39c177609cd5440de98b81461896c80f7166121`  
**Nhãn nguồn chưa duyệt:** `can-bac-hai-so-hoc`

```json
{
  "id": "NUM02V1_144",
  "question": "Số nào thỏa \\(x=\\sqrt{16}\\)?",
  "options": [
    "4",
    "-4",
    "±4",
    "8"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "can-bac-hai-so-hoc"
    ],
    "type": "can-bac-hai-so-hoc"
  },
  "difficulty": "basic",
  "explanation": "Kí hiệu \\(\\sqrt{16}\\) chỉ căn bậc hai số học, nên bằng 4.",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### NUM02V1_145 — CT02

**File:** `02-so-va-phep-tinh-v1-07.json`  
**Source SHA:** `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e`  
**Nhãn nguồn chưa duyệt:** `gia-tri-tuyet-doi`

```json
{
  "id": "NUM02V1_145",
  "question": "Tính |−12|.",
  "options": [
    "12",
    "−12",
    "0",
    "24"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "gia-tri-tuyet-doi"
    ],
    "type": "gia-tri-tuyet-doi"
  },
  "difficulty": "basic",
  "explanation": "Giá trị tuyệt đối là khoảng cách tới 0 nên |−12|=12.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### NUM02V1_146 — CT02

**File:** `02-so-va-phep-tinh-v1-07.json`  
**Source SHA:** `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e`  
**Nhãn nguồn chưa duyệt:** `gia-tri-tuyet-doi`

```json
{
  "id": "NUM02V1_146",
  "question": "Số nào có giá trị tuyệt đối bằng 7?",
  "options": [
    "−7",
    "8",
    "0",
    "14"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "gia-tri-tuyet-doi"
    ],
    "type": "gia-tri-tuyet-doi"
  },
  "difficulty": "basic",
  "explanation": "|−7|=7. Các số 8, 0 và 14 có giá trị tuyệt đối lần lượt là 8, 0 và 14.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### NUM02V1_147 — CT02

**File:** `02-so-va-phep-tinh-v1-07.json`  
**Source SHA:** `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e`  
**Nhãn nguồn chưa duyệt:** `gia-tri-tuyet-doi`

```json
{
  "id": "NUM02V1_147",
  "question": "Khẳng định nào đúng về phương trình |x|=4?",
  "options": [
    "x=4 hoặc x=−4",
    "Chỉ x=4",
    "Chỉ x=−4",
    "Không có nghiệm"
  ],
  "answer": 0,
  "tags": {
    "topic": "so-va-phep-tinh",
    "skill": [
      "gia-tri-tuyet-doi"
    ],
    "type": "gia-tri-tuyet-doi"
  },
  "difficulty": "intermediate",
  "explanation": "Hai số 4 và −4 đều cách 0 một khoảng 4, nên |x|=4 có hai nghiệm x=4 và x=−4.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### RAT03V1_121 — CT03

**File:** `03-ti-le-ti-le-thuc-v1-05.json`  
**Source SHA:** `759fd83900fa5b64d5db7f6deb2197c343c46732`  
**Nhãn nguồn chưa duyệt:** `mo-hinh-ti-le`

```json
{
  "id": "RAT03V1_121",
  "question": "Một công thức cho 4 người cần 300 g bột. Giữ nguyên tỉ lệ, để làm cho 10 người cần bao nhiêu gam bột?",
  "options": [
    "750 g",
    "600 g",
    "900 g",
    "1200 g"
  ],
  "answer": 0,
  "tags": {
    "topic": "ti-le-ti-le-thuc",
    "skill": [
      "mo-hinh-ti-le"
    ],
    "type": "mo-hinh-ti-le"
  },
  "difficulty": "basic",
  "explanation": "Lượng bột tỉ lệ thuận với số người: 300×10/4=750 g.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### RAT03V1_122 — CT03

**File:** `03-ti-le-ti-le-thuc-v1-05.json`  
**Source SHA:** `759fd83900fa5b64d5db7f6deb2197c343c46732`  
**Nhãn nguồn chưa duyệt:** `mo-hinh-ti-le`

```json
{
  "id": "RAT03V1_122",
  "question": "Trên bản đồ tỉ lệ 1:50 000, đoạn đường AB dài 3 cm. Độ dài thực tế của AB là:",
  "options": [
    "1,5 km",
    "150 km",
    "15 km",
    "0,15 km"
  ],
  "answer": 0,
  "tags": {
    "topic": "ti-le-ti-le-thuc",
    "skill": [
      "mo-hinh-ti-le"
    ],
    "type": "mo-hinh-ti-le"
  },
  "difficulty": "intermediate",
  "explanation": "3 cm trên bản đồ ứng với 3×50 000=150 000 cm=1,5 km.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### RAT03V1_123 — CT03

**File:** `03-ti-le-ti-le-thuc-v1-05.json`  
**Source SHA:** `759fd83900fa5b64d5db7f6deb2197c343c46732`  
**Nhãn nguồn chưa duyệt:** `mo-hinh-ti-le`

```json
{
  "id": "RAT03V1_123",
  "question": "5 quyển vở cùng loại có giá 60 nghìn đồng. Nếu đơn giá không đổi, 8 quyển vở có giá:",
  "options": [
    "96 nghìn đồng",
    "72 nghìn đồng",
    "100 nghìn đồng",
    "120 nghìn đồng"
  ],
  "answer": 0,
  "tags": {
    "topic": "ti-le-ti-le-thuc",
    "skill": [
      "mo-hinh-ti-le"
    ],
    "type": "mo-hinh-ti-le"
  },
  "difficulty": "basic",
  "explanation": "Một quyển giá 60:5=12 nghìn đồng; 8 quyển giá 8×12=96 nghìn đồng.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### RAT03V1_124 — CT03

**File:** `03-ti-le-ti-le-thuc-v1-05.json`  
**Source SHA:** `759fd83900fa5b64d5db7f6deb2197c343c46732`  
**Nhãn nguồn chưa duyệt:** `mo-hinh-ti-le`

```json
{
  "id": "RAT03V1_124",
  "question": "Một mô hình dài 12 cm biểu diễn vật thật dài 3 m. Tỉ lệ mô hình:vật thật là:",
  "options": [
    "1:25",
    "1:4",
    "4:1",
    "1:250"
  ],
  "answer": 0,
  "tags": {
    "topic": "ti-le-ti-le-thuc",
    "skill": [
      "mo-hinh-ti-le"
    ],
    "type": "mo-hinh-ti-le"
  },
  "difficulty": "intermediate",
  "explanation": "Đổi 3 m=300 cm. Tỉ lệ là 12:300=1:25.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### ALG04V2_133 — CT04

**File:** `04-bieu-thuc-dai-so-v2-06.json`  
**Source SHA:** `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Nhãn nguồn chưa duyệt:** `chia-da-thuc-mot-bien`

```json
{
  "id": "ALG04V2_133",
  "question": "Tính \\((x^2+3x+2):(x+1)\\).",
  "options": [
    "\\(x+2\\)",
    "\\(x+1\\)",
    "\\(x-2\\)",
    "\\(x^2+2\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "bieu-thuc-dai-so",
    "skill": [
      "chia-da-thuc-mot-bien"
    ],
    "type": "chia-da-thuc-mot-bien"
  },
  "difficulty": "basic",
  "explanation": "\\((x+1)(x+2)=x^2+3x+2\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### ALG04V2_134 — CT04

**File:** `04-bieu-thuc-dai-so-v2-06.json`  
**Source SHA:** `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Nhãn nguồn chưa duyệt:** `chia-da-thuc-mot-bien`

```json
{
  "id": "ALG04V2_134",
  "question": "Tính \\((x^2-4):(x-2)\\).",
  "options": [
    "\\(x+2\\)",
    "\\(x-2\\)",
    "\\(x^2+2\\)",
    "\\(1\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "bieu-thuc-dai-so",
    "skill": [
      "chia-da-thuc-mot-bien"
    ],
    "type": "chia-da-thuc-mot-bien"
  },
  "difficulty": "basic",
  "explanation": "Hiệu hai bình phương: \\(x^2-4=(x-2)(x+2)\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### ALG04V2_135 — CT04

**File:** `04-bieu-thuc-dai-so-v2-06.json`  
**Source SHA:** `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Nhãn nguồn chưa duyệt:** `chia-da-thuc-mot-bien`

```json
{
  "id": "ALG04V2_135",
  "question": "Tính \\((2x^2+5x+2):(2x+1)\\).",
  "options": [
    "\\(x+2\\)",
    "\\(2x+2\\)",
    "\\(x+1\\)",
    "\\(x-2\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "bieu-thuc-dai-so",
    "skill": [
      "chia-da-thuc-mot-bien"
    ],
    "type": "chia-da-thuc-mot-bien"
  },
  "difficulty": "basic",
  "explanation": "\\((2x+1)(x+2)=2x^2+5x+2\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### ALG04V2_136 — CT04

**File:** `04-bieu-thuc-dai-so-v2-06.json`  
**Source SHA:** `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Nhãn nguồn chưa duyệt:** `chia-da-thuc-mot-bien`

```json
{
  "id": "ALG04V2_136",
  "question": "Tính \\((x^3-8):(x-2)\\).",
  "options": [
    "\\(x^2+2x+4\\)",
    "\\(x^2-2x+4\\)",
    "\\(x^2+4\\)",
    "\\(x^2+2\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "bieu-thuc-dai-so",
    "skill": [
      "chia-da-thuc-mot-bien"
    ],
    "type": "chia-da-thuc-mot-bien"
  },
  "difficulty": "intermediate",
  "explanation": "\\(x^3-8=(x-2)(x^2+2x+4)\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### ALG04V2_137 — CT04

**File:** `04-bieu-thuc-dai-so-v2-06.json`  
**Source SHA:** `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Nhãn nguồn chưa duyệt:** `chia-da-thuc-mot-bien`

```json
{
  "id": "ALG04V2_137",
  "question": "Tính \\((x^3+x^2-x-1):(x+1)\\).",
  "options": [
    "\\(x^2-1\\)",
    "\\(x^2+1\\)",
    "\\(x^2-x-1\\)",
    "\\(x^2+x-1\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "bieu-thuc-dai-so",
    "skill": [
      "chia-da-thuc-mot-bien"
    ],
    "type": "chia-da-thuc-mot-bien"
  },
  "difficulty": "intermediate",
  "explanation": "Nhóm hạng tử: \\(x^2(x+1)-1(x+1)=(x+1)(x^2-1)\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### ALG04V2_138 — CT04

**File:** `04-bieu-thuc-dai-so-v2-06.json`  
**Source SHA:** `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Nhãn nguồn chưa duyệt:** `chia-da-thuc-mot-bien`

```json
{
  "id": "ALG04V2_138",
  "question": "Nếu \\(P(x)=(x-3)(x^2+2x+1)\\), thì \\(P(x):(x-3)\\) bằng:",
  "options": [
    "\\(x^2+2x+1\\)",
    "\\(x^2-2x+1\\)",
    "\\(x-3\\)",
    "\\(x^3-x^2-5x-3\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "bieu-thuc-dai-so",
    "skill": [
      "chia-da-thuc-mot-bien"
    ],
    "type": "chia-da-thuc-mot-bien"
  },
  "difficulty": "basic",
  "explanation": "Vì \\(P(x)\\) đã được viết dưới dạng tích của đa thức chia và thương, nên thương là \\(x^2+2x+1\\).",
  "authoring_review": {
    "status": "PASS",
    "method": "NOTEBOOKLM_WAVE1_R1",
    "packet_id": "MATH-KNTT-G7-REPAIR-W1-R1-20261008"
  }
}
```

### QUA12V1_121 — CT12

**File:** `12-phuong-trinh-bac-hai-viete-v1-05.json`  
**Source SHA:** `22c73f3d24020a7db1ead9b8b90c6488c8379ce0`  
**Nhãn nguồn chưa duyệt:** `lien-he-do-thi`

```json
{
  "id": "QUA12V1_121",
  "question": "Số giao điểm của parabol y=x² và đường thẳng y=3x+4 bằng số nghiệm thực của phương trình nào?",
  "options": [
    "x²−3x−4=0",
    "x²+3x+4=0",
    "x²−3x+4=0",
    "x²+3x−4=0"
  ],
  "answer": 0,
  "tags": {
    "topic": "phuong-trinh-bac-hai-viete",
    "skill": [
      "lien-he-do-thi"
    ],
    "type": "lien-he-do-thi"
  },
  "difficulty": "basic",
  "explanation": "Tại giao điểm ta có x²=3x+4, tương đương x²−3x−4=0.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### QUA12V1_122 — CT12

**File:** `12-phuong-trinh-bac-hai-viete-v1-05.json`  
**Source SHA:** `22c73f3d24020a7db1ead9b8b90c6488c8379ce0`  
**Nhãn nguồn chưa duyệt:** `lien-he-do-thi`

```json
{
  "id": "QUA12V1_122",
  "question": "Parabol y=x² và đường thẳng y=x+2 cắt nhau tại hai điểm. Hoành độ hai giao điểm là:",
  "options": [
    "−1 và 2",
    "1 và 2",
    "−2 và 1",
    "−1 và −2"
  ],
  "answer": 0,
  "tags": {
    "topic": "phuong-trinh-bac-hai-viete",
    "skill": [
      "lien-he-do-thi"
    ],
    "type": "lien-he-do-thi"
  },
  "difficulty": "intermediate",
  "explanation": "Giải x²=x+2 được x²−x−2=0=(x−2)(x+1), nên x=2 hoặc x=−1.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

### QUA12V1_123 — CT12

**File:** `12-phuong-trinh-bac-hai-viete-v1-05.json`  
**Source SHA:** `22c73f3d24020a7db1ead9b8b90c6488c8379ce0`  
**Nhãn nguồn chưa duyệt:** `lien-he-do-thi`

```json
{
  "id": "QUA12V1_123",
  "question": "Đường thẳng y=2x−1 tiếp xúc với parabol y=x² vì phương trình hoành độ giao điểm:",
  "options": [
    "(x−1)²=0 có nghiệm kép",
    "x²+2x−1=0 có hai nghiệm",
    "x²−2x−1=0 vô nghiệm",
    "x²−1=0 có hai nghiệm"
  ],
  "answer": 0,
  "tags": {
    "topic": "phuong-trinh-bac-hai-viete",
    "skill": [
      "lien-he-do-thi"
    ],
    "type": "lien-he-do-thi"
  },
  "difficulty": "intermediate",
  "explanation": "Từ x²=2x−1 suy ra x²−2x+1=(x−1)²=0. Phương trình có nghiệm kép nên đường thẳng tiếp xúc parabol.",
  "authoring_review": {
    "status": "PASS",
    "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW",
    "packet_id": "MATH-PRACTICE-IMPLEMENTATION-W1-R1-20261009",
    "clearance": "PRACTICE_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE",
    "review_date": "2026-10-09",
    "receipt": "review-packets/practice-implementation-wave1-r1/03_NOTEBOOKLM_RESULT_R1.md"
  }
}
```

