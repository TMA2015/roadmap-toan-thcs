# NotebookLM Review Packet — Grade 9 Repair Wave 1 R1

**packet_id:** `MATH-KNTT-G9-REPAIR-W1-R1-20261009`  
**authorization:** `G9_GAP_PRIORITY_R1_REVIEW_COMPLETE`  
**scope:** Candidate content review for Grade-9 first repair wave: Chapter 7 Statistics + Chapter 8 Probability  
**candidate counts:** 4 Learn cards + 16 Micro items; 0 Practice; 0 Written; 0 Readiness; 0 new canonical skills

## 1. Select exactly 5 Sources

Use exactly:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 9, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 9, tập hai — Kết nối tri thức với cuộc sống**
5. **00_NOTEBOOKLM_PACKET_R1.md — NotebookLM Review Packet — Grade 9 Repair Wave 1 R1**

Do not add older review packets separately. The scope clearance and full candidate are embedded below.

## 2. Authorized scope

Independent scope review already PASSed:

- CH7 → P0 → **LEARN + MICRO**
- CH8 → P0 → **LEARN + MICRO**
- first repair wave → **CH7;CH8**
- max groups → **2**
- Practice → **NO_QUOTA_EXPANSION**
- Written → **NO_QUOTA_EXPANSION**
- Readiness → **NO_QUOTA_EXPANSION**
- new canonical skills → **NONE**

CH8 model refs explicitly approved as `CORE_LEARN_MICRO`:

- `dong-xu-nhieu-lan`
- `xuc-xac-hai-lan`
- `so-do-cay`
- `nhieu-buoc-doc-lap`
- `khong-hoan-lai`

Do not review or authorize CH6 content in this packet. CH6 is outside Wave 1.

## 3. Candidate Learn cards — full text

```json
[
  {
    "id": "sta21-core-g9-6",
    "order": 6,
    "title": "Tần số và tần số tương đối",
    "kntt_lessons": [
      "Lớp 9: Bài 22–23"
    ],
    "layer": "KNTT-Core",
    "skills": [
      "bang-tan-so",
      "tan-suat"
    ],
    "prerequisites": [
      "du-lieu-phan-loai"
    ],
    "micro_practice": [
      "STA21MICRO_025",
      "STA21MICRO_026",
      "STA21MICRO_027",
      "STA21MICRO_028"
    ],
    "teaching_copy": {
      "key_idea": "Tần số của một giá trị là số lần giá trị đó xuất hiện. Tần số tương đối bằng tần số chia cho tổng số quan sát; có thể viết dưới dạng phân số, số thập phân hoặc phần trăm. Tổng các tần số phải bằng tổng số quan sát, còn tổng các tần số tương đối bằng 1 (hay 100%). Bảng và biểu đồ tần số/tần số tương đối giúp so sánh mức độ xuất hiện giữa các giá trị.",
      "worked_example": {
        "problem": "Điểm kiểm tra của 10 bạn là 6, 7, 7, 8, 8, 8, 8, 9, 9, 10. Hãy tìm tần số và tần số tương đối của điểm 8.",
        "solution": "Điểm 8 xuất hiện 4 lần nên tần số là 4. Có 10 quan sát nên tần số tương đối là 4/10 = 0,4 = 40%."
      },
      "misconception": "Nhầm tần số (một số đếm) với tần số tương đối (một tỉ số/phần trăm), hoặc quên kiểm tra tổng tần số bằng tổng số quan sát.",
      "summary": "Đếm số lần xuất hiện để có tần số; chia cho tổng số quan sát để có tần số tương đối; kiểm tra tổng trước khi kết luận."
    },
    "lesson_local_representations": [
      {
        "id": "bang-tan-so-tuong-doi",
        "label": "Bảng tần số tương đối",
        "family_id": "STAT-FREQUENCY",
        "role": "LESSON_LOCAL_REPRESENTATION",
        "grade": 9,
        "lesson": "Bài 23"
      },
      {
        "id": "bieu-do-tan-so",
        "label": "Biểu đồ tần số",
        "family_id": "STAT-REPRESENT",
        "role": "LESSON_LOCAL_REPRESENTATION",
        "grade": 9,
        "lesson": "Bài 22"
      },
      {
        "id": "bieu-do-tan-so-tuong-doi",
        "label": "Biểu đồ tần số tương đối",
        "family_id": "STAT-REPRESENT",
        "role": "LESSON_LOCAL_REPRESENTATION",
        "grade": 9,
        "lesson": "Bài 23"
      }
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "sta21-core-g9-7",
    "order": 7,
    "title": "Tần số ghép nhóm và biểu diễn dữ liệu ghép nhóm",
    "kntt_lessons": [
      "Lớp 9: Bài 24"
    ],
    "layer": "KNTT-Core",
    "skills": [
      "du-lieu-ghep-nhom",
      "tan-suat"
    ],
    "prerequisites": [
      "bang-tan-so"
    ],
    "micro_practice": [
      "STA21MICRO_029",
      "STA21MICRO_030",
      "STA21MICRO_031",
      "STA21MICRO_032"
    ],
    "teaching_copy": {
      "key_idea": "Khi dữ liệu số có nhiều giá trị, có thể chia thành các khoảng (nhóm) không chồng lấn rồi đếm số quan sát trong từng nhóm. Tần số nhóm là số quan sát thuộc nhóm; tần số tương đối nhóm bằng tần số nhóm chia cho tổng số quan sát. Các nhóm phải bao phủ dữ liệu mà không đếm trùng.",
      "worked_example": {
        "problem": "Một bảng ghép nhóm có ba khoảng [0;10), [10;20), [20;30) với tần số lần lượt 6, 9, 5. Tìm tần số tương đối của nhóm [10;20).",
        "solution": "Tổng số quan sát là 6 + 9 + 5 = 20. Tần số tương đối của nhóm [10;20) là 9/20 = 0,45 = 45%."
      },
      "misconception": "Đếm một giá trị biên vào hai nhóm hoặc dùng sai tổng số quan sát khi tính tần số tương đối.",
      "summary": "Xác định đúng khoảng chứa mỗi quan sát, đếm tần số từng nhóm, kiểm tra tổng rồi tính tần số tương đối."
    },
    "lesson_local_representations": [
      {
        "id": "bang-tan-so-ghep-nhom",
        "label": "Bảng tần số ghép nhóm",
        "family_id": "STAT-ADVANCED-DATA",
        "role": "LESSON_LOCAL_REPRESENTATION",
        "grade": 9,
        "lesson": "Bài 24"
      },
      {
        "id": "bieu-do-tan-so-ghep-nhom",
        "label": "Biểu đồ tần số ghép nhóm",
        "family_id": "STAT-REPRESENT",
        "role": "LESSON_LOCAL_REPRESENTATION",
        "grade": 9,
        "lesson": "Bài 24"
      }
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "prob23-core-g9-6",
    "order": 6,
    "title": "Không gian mẫu nhiều bước và sơ đồ cây",
    "kntt_lessons": [
      "Lớp 9: Bài 25"
    ],
    "layer": "KNTT-Core",
    "skills": [
      "phep-thu-ngau-nhien",
      "khong-gian-mau",
      "bien-co",
      "xac-suat-co-dien"
    ],
    "prerequisites": [
      "bien-co"
    ],
    "micro_practice": [
      "PRO23MICRO_021",
      "PRO23MICRO_022",
      "PRO23MICRO_023",
      "PRO23MICRO_024"
    ],
    "teaching_copy": {
      "key_idea": "Với phép thử nhiều bước, không gian mẫu gồm mọi kết quả có thể của toàn bộ chuỗi bước. Có thể dùng bảng hoặc sơ đồ cây để liệt kê có hệ thống, tránh bỏ sót hay đếm trùng. Khi các bước độc lập và mỗi bước có số kết quả xác định, số kết quả toàn bộ có thể tính bằng quy tắc nhân.",
      "worked_example": {
        "problem": "Tung một đồng xu cân đối hai lần. Hãy lập không gian mẫu.",
        "solution": "Mỗi lần có hai kết quả N (ngửa) hoặc S (sấp). Không gian mẫu là {NN, NS, SN, SS}; có 4 kết quả. Sơ đồ cây có hai nhánh ở lần đầu và từ mỗi nhánh lại tách thành hai nhánh ở lần hai."
      },
      "misconception": "Chỉ liệt kê kết quả của từng bước riêng lẻ thay vì kết quả của cả chuỗi, hoặc coi (1;2) và (2;1) là một khi thứ tự hai lần/bộ xúc xắc tạo ra kết quả khác nhau.",
      "summary": "Mô tả từng bước, liệt kê toàn bộ đường đi bằng bảng/sơ đồ cây, rồi xác định biến cố trong không gian mẫu đầy đủ."
    },
    "lesson_local_problem_types": [
      {
        "id": "dong-xu-nhieu-lan",
        "label": "Tung đồng xu nhiều lần",
        "role": "LESSON_LOCAL_PROBLEM_TYPE",
        "grade": 9,
        "lesson": "Bài 25"
      },
      {
        "id": "xuc-xac-hai-lan",
        "label": "Gieo hai xúc xắc / gieo xúc xắc hai bước",
        "role": "LESSON_LOCAL_PROBLEM_TYPE",
        "grade": 9,
        "lesson": "Bài 25"
      },
      {
        "id": "so-do-cay",
        "label": "Sơ đồ cây",
        "role": "LESSON_LOCAL_PROBLEM_TYPE",
        "grade": 9,
        "lesson": "Bài 25"
      },
      {
        "id": "nhieu-buoc-doc-lap",
        "label": "Phép thử nhiều bước độc lập",
        "role": "LESSON_LOCAL_PROBLEM_TYPE",
        "grade": 9,
        "lesson": "Bài 25"
      }
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "prob23-core-g9-7",
    "order": 7,
    "title": "Xác suất trong mô hình nhiều bước và không hoàn lại",
    "kntt_lessons": [
      "Lớp 9: Bài 26"
    ],
    "layer": "KNTT-Core",
    "skills": [
      "khong-gian-mau",
      "xac-suat-co-dien",
      "kiem-tra-xac-suat"
    ],
    "prerequisites": [
      "bien-co"
    ],
    "micro_practice": [
      "PRO23MICRO_025",
      "PRO23MICRO_026",
      "PRO23MICRO_027",
      "PRO23MICRO_028"
    ],
    "teaching_copy": {
      "key_idea": "Sau khi lập đúng không gian mẫu, xác suất cổ điển được tính bằng số kết quả thuận lợi chia cho tổng số kết quả đồng khả năng. Với phép thử không hoàn lại, thành phần còn lại thay đổi sau mỗi lần rút nên xác suất ở bước sau phải cập nhật theo điều kiện đã xảy ra trước đó.",
      "worked_example": {
        "problem": "Hộp có 3 thẻ đỏ và 2 thẻ xanh. Rút liên tiếp 2 thẻ không hoàn lại. Xác suất cả hai thẻ đều đỏ bằng bao nhiêu?",
        "solution": "Lần đầu rút đỏ có xác suất 3/5. Khi đã rút một thẻ đỏ, còn 2 thẻ đỏ trong 4 thẻ nên xác suất lần hai đỏ là 2/4. Vì vậy xác suất cả hai đỏ là (3/5)×(2/4)=3/10."
      },
      "misconception": "Dùng lại xác suất của lần rút đầu cho lần rút sau trong mô hình không hoàn lại, hoặc áp dụng công thức n(A)/n(Ω) khi các kết quả đang xét không đồng khả năng.",
      "summary": "Với mô hình nhiều bước: lập không gian mẫu/nhánh đúng, cập nhật điều kiện sau mỗi bước, rồi tính và kiểm tra xác suất trong [0;1]."
    },
    "lesson_local_problem_types": [
      {
        "id": "khong-hoan-lai",
        "label": "Lấy mẫu không hoàn lại",
        "role": "LESSON_LOCAL_PROBLEM_TYPE",
        "grade": 9,
        "lesson": "Bài 26"
      },
      {
        "id": "nhieu-buoc-doc-lap",
        "label": "Phép thử nhiều bước độc lập",
        "role": "LESSON_LOCAL_PROBLEM_TYPE",
        "grade": 9,
        "lesson": "Bài 26"
      }
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  }
]
```

## 4. Candidate Micro items — full text

```json
[
  {
    "id": "STA21MICRO_025",
    "card_id": "sta21-core-g9-6",
    "micro_role": "base",
    "question": "Dãy số liệu 6, 7, 7, 8, 8, 8, 9, 9 có tần số của giá trị 8 bằng bao nhiêu?",
    "options": [
      "3",
      "2",
      "8",
      "24"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "bang-tan-so"
      ],
      "type": "g9-bang-tan-so",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "basic",
    "explanation": "Giá trị 8 xuất hiện đúng 3 lần nên tần số của 8 là 3.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 22"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "bang-tan-so",
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "STA21MICRO_026",
    "card_id": "sta21-core-g9-6",
    "micro_role": "trap",
    "question": "Trong 40 quan sát, một giá trị xuất hiện 10 lần. Tần số tương đối của giá trị đó bằng:",
    "options": [
      "25%",
      "10%",
      "4%",
      "40%"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "tan-suat"
      ],
      "type": "g9-tan-suat",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "intermediate",
    "explanation": "Tần số tương đối là 10/40 = 1/4 = 25%.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 23"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "tan-suat",
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "STA21MICRO_027",
    "card_id": "sta21-core-g9-6",
    "micro_role": "apply",
    "question": "Bảng tần số của ba giá trị A, B, C lần lượt là 2, 3, 5. Tần số tương đối của C bằng:",
    "options": [
      "50%",
      "20%",
      "30%",
      "5%"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "tan-suat"
      ],
      "type": "g9-tan-suat",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Tổng số quan sát là 2+3+5=10; C có 5 quan sát nên tần số tương đối là 5/10=50%.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 23"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "tan-suat",
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "STA21MICRO_028",
    "card_id": "sta21-core-g9-6",
    "micro_role": "coverage",
    "question": "Bảng tần số cho A, B, C lần lượt là 4, 7, 5. Biểu đồ tần số đúng phải có chiều cao ba cột A, B, C lần lượt là:",
    "options": [
      "4, 7, 5",
      "4, 5, 7",
      "7, 4, 5",
      "16, 16, 16"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "bang-tan-so"
      ],
      "type": "g9-bang-tan-so",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Biểu đồ tần số giữ nguyên tần số của từng giá trị, nên các chiều cao lần lượt là 4, 7, 5.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 22"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "bang-tan-so",
    "lesson_local_targets": [
      "bieu-do-tan-so"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "STA21MICRO_029",
    "card_id": "sta21-core-g9-7",
    "micro_role": "base",
    "question": "Bảng ghép nhóm có các khoảng [0;5), [5;10), [10;15) với tần số lần lượt 3, 7, 5. Tần số của nhóm [5;10) là:",
    "options": [
      "7",
      "3",
      "5",
      "15"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "du-lieu-ghep-nhom"
      ],
      "type": "g9-du-lieu-ghep-nhom",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "basic",
    "explanation": "Nhóm [5;10) có tần số được ghi trực tiếp là 7.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 24"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "du-lieu-ghep-nhom",
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "STA21MICRO_030",
    "card_id": "sta21-core-g9-7",
    "micro_role": "trap",
    "question": "Một bảng ghép nhóm có tần số 4, 6, 10. Tổng số quan sát của bảng là:",
    "options": [
      "20",
      "10",
      "6",
      "24"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "du-lieu-ghep-nhom"
      ],
      "type": "g9-du-lieu-ghep-nhom",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "intermediate",
    "explanation": "Tổng số quan sát bằng tổng các tần số: 4+6+10=20.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 24"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "du-lieu-ghep-nhom",
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "STA21MICRO_031",
    "card_id": "sta21-core-g9-7",
    "micro_role": "apply",
    "question": "Một nhóm có tần số 8 trong tổng 40 quan sát. Tần số tương đối của nhóm đó bằng:",
    "options": [
      "20%",
      "8%",
      "32%",
      "5%"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "tan-suat"
      ],
      "type": "g9-tan-suat",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Tần số tương đối là 8/40 = 0,2 = 20%.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 24"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "tan-suat",
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "STA21MICRO_032",
    "card_id": "sta21-core-g9-7",
    "micro_role": "coverage",
    "question": "Bảng ghép nhóm có các khoảng [0;10), [10;20), [20;30) với tần số 6, 10, 4. Cách biểu diễn nào giữ đúng thông tin tần số nhóm?",
    "options": [
      "Ba cột theo ba khoảng có chiều cao 6, 10, 4",
      "Ba cột có chiều cao 10, 6, 4",
      "Một cột duy nhất có chiều cao 20",
      "Ba cột đều có chiều cao 20"
    ],
    "answer": 0,
    "tags": {
      "topic": "21-thong-ke",
      "skill": [
        "du-lieu-ghep-nhom"
      ],
      "type": "g9-du-lieu-ghep-nhom",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Mỗi nhóm phải được biểu diễn bằng đúng tần số của nhóm đó: 6, 10, 4.",
    "hints": [
      "Xác định đúng đại lượng cần tính hoặc đọc từ bảng.",
      "Kiểm tra tổng số quan sát trước khi kết luận."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 24"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "du-lieu-ghep-nhom",
    "lesson_local_targets": [
      "bieu-do-tan-so-ghep-nhom"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_021",
    "card_id": "prob23-core-g9-6",
    "micro_role": "base",
    "question": "Tung một đồng xu cân đối 3 lần. Không gian mẫu có bao nhiêu kết quả?",
    "options": [
      "8",
      "6",
      "3",
      "9"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "khong-gian-mau"
      ],
      "type": "g9-khong-gian-mau",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "basic",
    "explanation": "Mỗi lần có 2 kết quả; ba lần tạo 2×2×2=8 kết quả.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 25"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "khong-gian-mau",
    "lesson_local_targets": [
      "dong-xu-nhieu-lan"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_022",
    "card_id": "prob23-core-g9-6",
    "micro_role": "trap",
    "question": "Gieo hai xúc xắc phân biệt một lần. Không gian mẫu gồm bao nhiêu cặp kết quả có thứ tự?",
    "options": [
      "36",
      "12",
      "6",
      "18"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "khong-gian-mau"
      ],
      "type": "g9-khong-gian-mau",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "intermediate",
    "explanation": "Mỗi xúc xắc có 6 kết quả; cặp có thứ tự tạo 6×6=36 kết quả.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 25"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "khong-gian-mau",
    "lesson_local_targets": [
      "xuc-xac-hai-lan"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_023",
    "card_id": "prob23-core-g9-6",
    "micro_role": "apply",
    "question": "Tung một đồng xu rồi gieo một xúc xắc sáu mặt. Sơ đồ cây đầy đủ có bao nhiêu kết quả ở các lá?",
    "options": [
      "12",
      "8",
      "6",
      "2"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "khong-gian-mau"
      ],
      "type": "g9-khong-gian-mau",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Có 2 lựa chọn ở bước đồng xu và 6 lựa chọn ở bước xúc xắc, nên có 2×6=12 kết quả.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 25"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "khong-gian-mau",
    "lesson_local_targets": [
      "so-do-cay",
      "nhieu-buoc-doc-lap"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_024",
    "card_id": "prob23-core-g9-6",
    "micro_role": "coverage",
    "question": "Tung một đồng xu cân đối hai lần. Xác suất xuất hiện đúng một mặt ngửa là:",
    "options": [
      "1/2",
      "1/4",
      "3/4",
      "1"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "xac-suat-co-dien"
      ],
      "type": "g9-xac-suat-co-dien",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Không gian mẫu {NN, NS, SN, SS}; đúng một ngửa có NS, SN nên xác suất là 2/4=1/2.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 25"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "xac-suat-co-dien",
    "lesson_local_targets": [
      "dong-xu-nhieu-lan",
      "nhieu-buoc-doc-lap"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_025",
    "card_id": "prob23-core-g9-7",
    "micro_role": "base",
    "question": "Hộp có 3 thẻ đỏ và 2 thẻ xanh. Rút liên tiếp 2 thẻ không hoàn lại. Xác suất cả hai thẻ đều đỏ là:",
    "options": [
      "3/10",
      "9/25",
      "1/5",
      "3/5"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "xac-suat-co-dien"
      ],
      "type": "g9-xac-suat-co-dien",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "basic",
    "explanation": "P(đỏ lần 1)=3/5; sau đó còn 2 thẻ đỏ trong 4 thẻ nên P(đỏ lần 2|đỏ lần 1)=2/4. Tích là 3/10.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 26"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "xac-suat-co-dien",
    "lesson_local_targets": [
      "khong-hoan-lai"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_026",
    "card_id": "prob23-core-g9-7",
    "micro_role": "trap",
    "question": "Hộp có 3 thẻ đỏ và 2 thẻ xanh. Biết lần đầu đã rút được một thẻ đỏ và không hoàn lại. Xác suất lần hai tiếp tục rút đỏ là:",
    "options": [
      "1/2",
      "3/5",
      "2/5",
      "3/4"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "kiem-tra-xac-suat"
      ],
      "type": "g9-kiem-tra-xac-suat",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "intermediate",
    "explanation": "Sau lần đầu còn 2 thẻ đỏ trong tổng 4 thẻ, nên xác suất là 2/4=1/2; không được giữ nguyên 3/5.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 26"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "kiem-tra-xac-suat",
    "lesson_local_targets": [
      "khong-hoan-lai"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_027",
    "card_id": "prob23-core-g9-7",
    "micro_role": "apply",
    "question": "Hộp có 2 thẻ trắng và 1 thẻ đen. Rút 2 thẻ liên tiếp không hoàn lại. Xác suất hai thẻ khác màu là:",
    "options": [
      "2/3",
      "1/3",
      "1/2",
      "1"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "xac-suat-co-dien"
      ],
      "type": "g9-xac-suat-co-dien",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Trắng rồi đen: (2/3)(1/2)=1/3. Đen rồi trắng: (1/3)(2/2)=1/3. Tổng là 2/3.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 26"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "xac-suat-co-dien",
    "lesson_local_targets": [
      "khong-hoan-lai",
      "so-do-cay"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  },
  {
    "id": "PRO23MICRO_028",
    "card_id": "prob23-core-g9-7",
    "micro_role": "coverage",
    "question": "Trong một mô hình nhiều bước, một bạn tính được xác suất của biến cố bằng 13/12. Kết luận nào đúng?",
    "options": [
      "Kết quả sai vì xác suất không thể lớn hơn 1",
      "Kết quả đúng vì 13 lớn hơn 12",
      "Biến cố chắc chắn xảy ra",
      "Cần đổi 13/12 thành 12/13 mà không cần kiểm tra mô hình"
    ],
    "answer": 0,
    "tags": {
      "topic": "23-xac-suat",
      "skill": [
        "kiem-tra-xac-suat"
      ],
      "type": "g9-kiem-tra-xac-suat",
      "layer": "KNTT-Core",
      "grade": 9
    },
    "difficulty": "advanced",
    "explanation": "Mọi xác suất phải nằm trong [0;1]. Giá trị 13/12>1 cho thấy phép đếm hoặc mô hình đã sai.",
    "hints": [
      "Mô tả đầy đủ các bước và kết quả có thể.",
      "Kiểm tra điều kiện đồng khả năng hoặc sự thay đổi sau bước trước."
    ],
    "curriculum": {
      "book": "KNTT",
      "grades": [
        9
      ],
      "level": "core",
      "lesson": "Bài 26"
    },
    "exam": {
      "entrance10": "foundation",
      "specialized": "none"
    },
    "target": "kiem-tra-xac-suat",
    "lesson_local_targets": [
      "nhieu-buoc-doc-lap"
    ],
    "authoring_review": {
      "packet_id": "MATH-KNTT-G9-REPAIR-W1-R1-20261009",
      "status": "PENDING",
      "method": "INDEPENDENT_NOTEBOOKLM_CONTENT_REVIEW"
    }
  }
]
```

## 5. Review requirements

Audit all 4 Learn cards and all 16 Micro items for:

- mathematical correctness;
- exact Grade-9 KNTT scope;
- fidelity to the reviewed CH7/CH8 semantics;
- correct use of canonical skills versus lesson-local representations/problem types;
- answer keys;
- distractors;
- explanations and hints;
- sufficient diagnostic diversity without content inflation;
- no duplicate or near-duplicate item that adds no diagnostic value;
- no accidental promotion of lesson-local model refs to canonical taxonomy;
- no Practice/Written/Readiness expansion.

### Chapter 7 specific checks

Verify that the candidate adequately distinguishes:

- frequency vs relative frequency;
- total frequency vs number of observations;
- Grade-9 grouped data;
- frequency/relative-frequency representation;
- interval grouping without double counting.

### Chapter 8 specific checks

Verify that the candidate adequately covers:

- multi-step sample spaces;
- multiple coin tosses;
- two-dice / two-step dice outcome counting;
- tree diagrams;
- independent multi-stage experiments;
- without-replacement dependence;
- classical probability only when the relevant outcomes are equally likely;
- probability sanity check `0 ≤ P ≤ 1`.

Pay special attention to whether the CH8 wording stays within Grade-9 KNTT and does not import later conditional-probability formalism.

## 6. Protected boundaries

The candidate must remain exactly:

- Learn cards = 4
- Micro items = 16
- Practice additions = 0
- Written additions = 0
- Readiness additions = 0
- new canonical skills = 0
- new canonical families = 0

If a candidate item is wrong, request a bounded correction by card/item ID. Do not expand another dimension as compensation.

## 7. Required machine-checkable output

Return this block **first**:

```text
PACKET|MATH-KNTT-G9-REPAIR-W1-R1-20261009
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
SCOPE_CLEARANCE|G9_GAP_PRIORITY_R1_REVIEW_COMPLETE|PASS|REVISE
EXPECTED_GROUPS|2
REVIEWED_GROUPS|2
GROUP|CH7|PASS|REVISE|<SHORT_REASON>
LEARN|CH7|2|PASS|REVISE|<SHORT_REASON>
MICRO|CH7|8|PASS|REVISE|<SHORT_REASON>
GROUP|CH8|PASS|REVISE|<SHORT_REASON>
LEARN|CH8|2|PASS|REVISE|<SHORT_REASON>
MICRO|CH8|8|PASS|REVISE|<SHORT_REASON>
MODEL_REF|CH8|dong-xu-nhieu-lan|PASS|REVISE|<SHORT_REASON>
MODEL_REF|CH8|xuc-xac-hai-lan|PASS|REVISE|<SHORT_REASON>
MODEL_REF|CH8|so-do-cay|PASS|REVISE|<SHORT_REASON>
MODEL_REF|CH8|nhieu-buoc-doc-lap|PASS|REVISE|<SHORT_REASON>
MODEL_REF|CH8|khong-hoan-lai|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_PRACTICE|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_WRITTEN|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_READINESS|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_NEW_CANONICAL_SKILL|PASS|REVISE|<SHORT_REASON>
CONTENT_COUNTS|LEARN=4|MICRO=16|PRACTICE=0
MISSING_GROUPS|NONE|<GROUPS>
MISSING_DECISIONS|NONE|<ROWS>
CLEARANCE|G9_REPAIR_W1_R1_CONTENT_REVIEW_COMPLETE
```

Then provide concise reasoning and exact corrections by card/item ID if needed.

Issue `G9_REPAIR_W1_R1_CONTENT_REVIEW_COMPLETE` only if the full candidate materially PASSes.

## 8. What a PASS means

A PASS clears academic content only. Repository QA, browser/visual QA, merge and deploy remain separate release gates.
