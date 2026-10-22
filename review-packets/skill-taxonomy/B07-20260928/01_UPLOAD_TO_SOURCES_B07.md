# MATH-SKILL-TAXONOMY-B07-20260928 — CĐ24: đọc dữ kiện, đổi đơn vị, kết luận, chuyển động và năng suất

**Nguồn tạm đầy đủ B07 — PROPOSAL_ONLY.** GitHub main SHA khóa `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. Staging inventory SHA `4c059bc165b25fae61810e8eb2c4a938cfc3862b`. Chỉ chọn thêm tài liệu này cùng Master Plan Toán v1.1 và Notebook Math Permanent v1.1. B06 đã đối soát đủ 71 ID (reviewer PASS 71, ChatGPT phát hiện 2 lỗi ở nguồn CĐ24) nhưng PR sửa câu hỏi độc lập vẫn là DRAFT, không nằm trong B07 main.

## A. Phạm vi khóa và mối liên hệ B06

Gồm đúng **59 ID CĐ24 còn lại** trong năm tag `doc-de-du-kien` (13), `doi-don-vi` (13), `kiem-tra-ket-luan` (13), `chuyen-dong` (10), `nang-suat` (10), sau khi loại trừ 23 ID B06 Pha C mang `lap-phuong-trinh/lap-he`. Đây là toàn bộ **82 ID CĐ24 trong phạm vi 7 tag đã trích** chia thành B06 23 và B07 59, KHÔNG khẳng định là toàn bộ 135 câu bank CĐ24 hay toàn bộ chương trình THCS.
Pha A 26, Pha B 13, Pha C 20. Mỗi câu có source_path, blob_sha bank gốc, full question/options/answer index/explanation/tags. Chỉ đánh giá trong phase yêu cầu để không cắt phản hồi. Không tự sửa source hoặc counter.

## B. Những bẫy học thuật phải đọc độc lập

- Câu micro `MOD24MICRO_001–006` gần như/trùng từng câu với `MOD24V1__001–003` và `MOD24V1__011–013`. Pha B tương tự `MOD24MICRO_013–015` và `MOD24V1__111–113`. Phân định clone khi trùng 4 options và explanation, nhưng không gộp legacy counters.
- Các câu đổi đơn vị diện tích, thể tích, km/h↔m/s cần kiểm tra hệ số **bình phương/lập phương**, dấu phẩy thập phân, và đơn vị trên đáp án. Không coi việc chọn con số cho sẵn là tự đổi đơn vị trên bài tự luận.
- Kiểm tra **đáp án 0-based theo từng câu**, không mặc định index 0: `MOD24V1__122`, `MOD24V1__125` và `MOD24V1__126` có đáp án dự kiến index 1. Đừng đổi đáp án chỉ vì lựa chọn đầu không đúng; đối chiếu actual options.
- `MOD24V1__024` ghi “Nửa quãng đường 120 km đầu ... nửa sau ...” dễ hiểu nhầm 120 km là quãng đường cả chuyến hay nửa đầu. Answer 2,5 giờ chỉ đúng nếu **toàn bộ hành trình dài 120 km**, hai nửa 60 km. Hãy quyết định REVISION_REQUIRED nếu câu chữ không đơn nghĩa, đề xuất chỉnh rõ “Một quãng đường dài 120 km, nửa đầu...”.
- `MOD24V1__121` hai chặng đều 60 km: vận tốc trung bình 40 km/h chứ không phải trung bình cộng 45. `MOD24V1__122` hai chặng 90 km/45 và 60 km/60: tổng 150 km/3 giờ = 50 km/h, đáp án index 1.
- Pha B `MOD24V1__125` chọn phương án về mô hình năng suất thay đổi, `126` chọn giữ độ chính xác trung gian, đều ở index 1. Đây là đánh giá nhận diện kiểm tra lý luận, không đo lập mô hình định lượng đầy đủ.
- Bài toán thực tế cần kiểm tra **tính khả thi số nguyên, đơn vị, ràng buộc thời gian/vận tốc dương, điểm biên** và phương án nhiễu có thể tương đương phương án đúng. B06 đã bỏ sót câu hai đáp án đúng và bài dữ kiện không có nghiệm nguyên; B07 không được chấp nhận “100% PASS” khi chưa kiểm riêng.
- Mỗi item có thể được ghi `concept` nền, `task_demand`, `context`, `evidence_type`. Nhãn bối cảnh chuyển động/năng suất không tự động là atomic skill; tác vụ đọc đề/đổi đơn vị/kiểm tra kết luận có thể là **kỹ năng xuyên chủ đề** nếu micro-test tách lỗi được.

## C. Source manifest và expected IDs

| Original source bank | Git blob SHA | Số câu bank |
|---|---|---:|
| `docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json` | `0c11446a01aec62e32b2320f0f537dd52133906a` | 15 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json` | `2099b3e03210d58c7dca4e55fc8e2d88f0db5d06` | 30 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json` | `03535d510cd91cd52df48312325536edc5bb4423` | 30 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-03.json` | `d3054fdb6da255cfd7cf571015e0a10f2903f467` | 30 |
| `docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json` | `3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8` | 30 |

```json
{
  "packet_id": "MATH-SKILL-TAXONOMY-B07-20260928",
  "source_main_sha": "88143e6b2690edfe721f8d74d2dbcb251bc55ab3",
  "source_staging_sha": "4c059bc165b25fae61810e8eb2c4a938cfc3862b",
  "expected_total": 59,
  "source_correct_answer_index_counts": {
    "0": 56,
    "1": 3
  },
  "phases": {
    "A": {
      "name": "Đọc dữ kiện + đổi và thống nhất đơn vị",
      "expected_count": 26,
      "tags": {
        "doc-de-du-kien": 13,
        "doi-don-vi": 13
      },
      "expected_ids": [
        "MOD24MICRO_001",
        "MOD24MICRO_002",
        "MOD24MICRO_003",
        "MOD24MICRO_004",
        "MOD24MICRO_005",
        "MOD24MICRO_006",
        "MOD24V1__001",
        "MOD24V1__002",
        "MOD24V1__003",
        "MOD24V1__004",
        "MOD24V1__005",
        "MOD24V1__006",
        "MOD24V1__007",
        "MOD24V1__008",
        "MOD24V1__009",
        "MOD24V1__010",
        "MOD24V1__011",
        "MOD24V1__012",
        "MOD24V1__013",
        "MOD24V1__014",
        "MOD24V1__015",
        "MOD24V1__016",
        "MOD24V1__017",
        "MOD24V1__018",
        "MOD24V1__019",
        "MOD24V1__020"
      ]
    },
    "B": {
      "name": "Đối chiếu nghiệm, đơn vị và kết luận",
      "expected_count": 13,
      "tags": {
        "kiem-tra-ket-luan": 13
      },
      "expected_ids": [
        "MOD24MICRO_013",
        "MOD24MICRO_014",
        "MOD24MICRO_015",
        "MOD24V1__111",
        "MOD24V1__112",
        "MOD24V1__113",
        "MOD24V1__114",
        "MOD24V1__115",
        "MOD24V1__116",
        "MOD24V1__117",
        "MOD24V1__118",
        "MOD24V1__125",
        "MOD24V1__126"
      ]
    },
    "C": {
      "name": "Chuyển động + năng suất công việc",
      "expected_count": 20,
      "tags": {
        "chuyen-dong": 10,
        "nang-suat": 10
      },
      "expected_ids": [
        "MOD24V1__021",
        "MOD24V1__022",
        "MOD24V1__023",
        "MOD24V1__024",
        "MOD24V1__025",
        "MOD24V1__026",
        "MOD24V1__027",
        "MOD24V1__028",
        "MOD24V1__121",
        "MOD24V1__122",
        "MOD24V1__031",
        "MOD24V1__032",
        "MOD24V1__033",
        "MOD24V1__034",
        "MOD24V1__035",
        "MOD24V1__036",
        "MOD24V1__037",
        "MOD24V1__038",
        "MOD24V1__039",
        "MOD24V1__040"
      ]
    }
  }
}
```

## D. 59 bản ghi nguyên văn nguồn theo từng phase

### PHA A — Đọc dữ kiện + đổi và thống nhất đơn vị — 26 items

```json
[
  {
    "id": "MOD24MICRO_001",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_001",
      "question": "Một xe đi từ A đến B dài 180 km với vận tốc 60 km/h. Đề hỏi thời gian. Đại lượng cần tìm là:",
      "options": [
        "thời gian",
        "quãng đường",
        "vận tốc",
        "giá tiền"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Đề đã cho quãng đường và vận tốc, yêu cầu thời gian.",
      "source_question_id": "MOD24V1__001",
      "card_id": "topic24-journey-1",
      "micro_role": "base",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_002",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_002",
      "question": "Một sản phẩm giá niêm yết 1.200.000đ được giảm 15%. Đề hỏi số tiền phải trả. Giá trị gốc để tính 15% là:",
      "options": [
        "1.200.000đ",
        "15đ",
        "180.000đ",
        "1.020.000đ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Phần trăm giảm được tính trên giá niêm yết ban đầu.",
      "source_question_id": "MOD24V1__002",
      "card_id": "topic24-journey-1",
      "micro_role": "trap",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_003",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_003",
      "question": "Hai loại vé A và B bán tổng 200 vé, doanh thu 18 triệu đồng. Muốn tìm số vé mỗi loại, hai ẩn tự nhiên là:",
      "options": [
        "số vé A và số vé B",
        "giá vé A và giá vé B",
        "doanh thu và thời gian",
        "chiều dài và chiều rộng"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Hai đại lượng chưa biết trực tiếp là số lượng của hai loại vé.",
      "source_question_id": "MOD24V1__003",
      "card_id": "topic24-journey-1",
      "micro_role": "apply",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_004",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_004",
      "question": "Đổi 90 phút ra giờ.",
      "options": [
        "1,5 giờ",
        "0,9 giờ",
        "1 giờ 30 giây",
        "90 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "90/60=1,5 giờ.",
      "source_question_id": "MOD24V1__011",
      "card_id": "topic24-journey-2",
      "micro_role": "base",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_005",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_005",
      "question": "Đổi 2,5 giờ ra phút.",
      "options": [
        "150 phút",
        "25 phút",
        "120 phút",
        "250 phút"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "2,5×60=150 phút.",
      "source_question_id": "MOD24V1__012",
      "card_id": "topic24-journey-2",
      "micro_role": "trap",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_006",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_006",
      "question": "Đổi 72 km/h ra m/s.",
      "options": [
        "20 m/s",
        "72 m/s",
        "25 m/s",
        "2 m/s"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Chia cho 3,6: 72/3,6=20 m/s.",
      "source_question_id": "MOD24V1__013",
      "card_id": "topic24-journey-2",
      "micro_role": "apply",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24V1__001",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__001",
      "question": "Một xe đi từ A đến B dài 180 km với vận tốc 60 km/h. Đề hỏi thời gian. Đại lượng cần tìm là:",
      "options": [
        "thời gian",
        "quãng đường",
        "vận tốc",
        "giá tiền"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "basic",
      "explanation": "Đề đã cho quãng đường và vận tốc, yêu cầu thời gian."
    }
  },
  {
    "id": "MOD24V1__002",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__002",
      "question": "Một sản phẩm giá niêm yết 1.200.000đ được giảm 15%. Đề hỏi số tiền phải trả. Giá trị gốc để tính 15% là:",
      "options": [
        "1.200.000đ",
        "15đ",
        "180.000đ",
        "1.020.000đ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "basic",
      "explanation": "Phần trăm giảm được tính trên giá niêm yết ban đầu."
    }
  },
  {
    "id": "MOD24V1__003",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__003",
      "question": "Hai loại vé A và B bán tổng 200 vé, doanh thu 18 triệu đồng. Muốn tìm số vé mỗi loại, hai ẩn tự nhiên là:",
      "options": [
        "số vé A và số vé B",
        "giá vé A và giá vé B",
        "doanh thu và thời gian",
        "chiều dài và chiều rộng"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "basic",
      "explanation": "Hai đại lượng chưa biết trực tiếp là số lượng của hai loại vé."
    }
  },
  {
    "id": "MOD24V1__004",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__004",
      "question": "Một tòa nhà được nhìn từ điểm cách chân nhà 40 m với góc nâng 35°. Đề hỏi chiều cao. Hai dữ kiện hình học chính là:",
      "options": [
        "khoảng cách ngang 40 m và góc nâng 35°",
        "giá tiền và phần trăm",
        "vận tốc và thời gian",
        "tần số và tần suất"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "basic",
      "explanation": "Bài chiều cao dùng khoảng cách ngang và góc nâng."
    }
  },
  {
    "id": "MOD24V1__005",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__005",
      "question": "Một người làm một mình xong việc trong 6 giờ, người khác trong 4 giờ. Đề hỏi thời gian cùng làm. Đại lượng trung gian cần nghĩ tới là:",
      "options": [
        "năng suất mỗi giờ",
        "chu vi",
        "tần số",
        "xác suất đối"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "intermediate",
      "explanation": "Bài toán công việc thường chuyển thời gian hoàn thành thành năng suất."
    }
  },
  {
    "id": "MOD24V1__006",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__006",
      "question": "Một bể hình hộp chữ nhật dài 2 m, rộng 1,5 m, cao 1 m. Đề hỏi dung tích. Công thức phù hợp là:",
      "options": [
        "V = dài × rộng × cao",
        "S = v×t",
        "P(A)=n(A)/n(Ω)",
        "giá mới = giá cũ + 100%"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "intermediate",
      "explanation": "Dung tích của bể hình hộp được tính bằng thể tích."
    }
  },
  {
    "id": "MOD24V1__007",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__007",
      "question": "Một bảng cho số sản phẩm bán trong 4 quý và hỏi quý bán nhiều nhất. Dữ liệu cần so sánh trực tiếp là:",
      "options": [
        "số sản phẩm của từng quý",
        "số năm học",
        "góc nâng",
        "vận tốc xe"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "intermediate",
      "explanation": "Cần đọc đúng đại lượng trên bảng trước khi kết luận."
    }
  },
  {
    "id": "MOD24V1__008",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__008",
      "question": "Một hộp có 3 bi đỏ và 7 bi xanh, rút 1 bi ngẫu nhiên. Đề hỏi xác suất đỏ. Số kết quả thuận lợi theo cách đếm viên bi là:",
      "options": [
        "3",
        "7",
        "10",
        "1"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "intermediate",
      "explanation": "Có 3 viên đỏ trong 10 viên."
    }
  },
  {
    "id": "MOD24V1__009",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__009",
      "question": "Một sân hình chữ nhật có chiều dài hơn chiều rộng 5 m và diện tích 84 m². Nếu đặt chiều rộng là x, chiều dài nên biểu diễn là:",
      "options": [
        "x + 5",
        "5x",
        "x - 5",
        "84/x + 5 ngay từ đầu"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "intermediate",
      "explanation": "Dài hơn rộng 5 m nên dài = x+5."
    }
  },
  {
    "id": "MOD24V1__010",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__010",
      "question": "Một bài cho nghiệm toán học x=-3 và x=12, trong đó x là số học sinh. Trước khi kết luận cần kiểm tra:",
      "options": [
        "điều kiện thực tế x là số không âm và phù hợp ngữ cảnh",
        "chỉ màu mực",
        "chỉ thứ tự câu hỏi",
        "không cần kiểm tra"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doc-de-du-kien"
        ],
        "type": "doc-de-xac-dinh-dai-luong"
      },
      "difficulty": "intermediate",
      "explanation": "Số học sinh không thể âm; nghiệm toán học phải được lọc theo bối cảnh."
    }
  },
  {
    "id": "MOD24V1__011",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__011",
      "question": "Đổi 90 phút ra giờ.",
      "options": [
        "1,5 giờ",
        "0,9 giờ",
        "1 giờ 30 giây",
        "90 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "basic",
      "explanation": "90/60=1,5 giờ."
    }
  },
  {
    "id": "MOD24V1__012",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__012",
      "question": "Đổi 2,5 giờ ra phút.",
      "options": [
        "150 phút",
        "25 phút",
        "120 phút",
        "250 phút"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "basic",
      "explanation": "2,5×60=150 phút."
    }
  },
  {
    "id": "MOD24V1__013",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__013",
      "question": "Đổi 72 km/h ra m/s.",
      "options": [
        "20 m/s",
        "72 m/s",
        "25 m/s",
        "2 m/s"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "basic",
      "explanation": "Chia cho 3,6: 72/3,6=20 m/s."
    }
  },
  {
    "id": "MOD24V1__014",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__014",
      "question": "Đổi 15 m/s ra km/h.",
      "options": [
        "54 km/h",
        "15 km/h",
        "41,7 km/h",
        "5,4 km/h"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "basic",
      "explanation": "Nhân 3,6: 15×3,6=54 km/h."
    }
  },
  {
    "id": "MOD24V1__015",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__015",
      "question": "Đổi 3,2 km ra mét.",
      "options": [
        "3200 m",
        "320 m",
        "32.000 m",
        "3,2 m"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "basic",
      "explanation": "1 km=1000 m."
    }
  },
  {
    "id": "MOD24V1__016",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__016",
      "question": "Đổi 4500 cm² ra m².",
      "options": [
        "0,45 m²",
        "45 m²",
        "4,5 m²",
        "0,045 m²"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "intermediate",
      "explanation": "1 m²=10.000 cm² nên 4500 cm²=0,45 m²."
    }
  },
  {
    "id": "MOD24V1__017",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__017",
      "question": "Đổi 2,4 m³ ra lít.",
      "options": [
        "2400 lít",
        "240 lít",
        "24 lít",
        "24.000 lít"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "intermediate",
      "explanation": "1 m³=1000 lít."
    }
  },
  {
    "id": "MOD24V1__018",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__018",
      "question": "Một quãng đường 750 m cần dùng cùng đơn vị km với vận tốc km/h. 750 m bằng:",
      "options": [
        "0,75 km",
        "7,5 km",
        "75 km",
        "0,075 km"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "intermediate",
      "explanation": "750/1000=0,75 km."
    }
  },
  {
    "id": "MOD24V1__019",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__019",
      "question": "Một thời gian 45 giây cần đổi sang phút. Kết quả là:",
      "options": [
        "0,75 phút",
        "4,5 phút",
        "0,45 phút",
        "1,25 phút"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "intermediate",
      "explanation": "45/60=0,75 phút."
    }
  },
  {
    "id": "MOD24V1__020",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__020",
      "question": "Một diện tích 1,8 ha bằng bao nhiêu m²?",
      "options": [
        "18.000 m²",
        "1.800 m²",
        "180.000 m²",
        "18 m²"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "doi-don-vi"
        ],
        "type": "doi-don-vi"
      },
      "difficulty": "intermediate",
      "explanation": "1 ha=10.000 m² nên 1,8 ha=18.000 m²."
    }
  }
]
```

### PHA B — Đối chiếu nghiệm, đơn vị và kết luận — 13 items

```json
[
  {
    "id": "MOD24MICRO_013",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_013",
      "question": "Bài toán số sản phẩm cho nghiệm x=-5 và x=12. Kết luận đúng là:",
      "options": [
        "loại -5, nhận 12 sản phẩm",
        "nhận cả hai nghiệm",
        "nhận -5 vì nhỏ hơn",
        "không cần kiểm tra"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Số sản phẩm không thể âm.",
      "source_question_id": "MOD24V1__111",
      "card_id": "topic24-journey-5",
      "micro_role": "base",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_014",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_014",
      "question": "Tính thời gian đi đường được -2 giờ. Bước đúng là:",
      "options": [
        "kiểm tra lại mô hình hoặc phép tính vì thời gian không thể âm",
        "kết luận đi -2 giờ",
        "lấy trị tuyệt đối mà không giải thích",
        "đổi sang phút âm"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Kết quả phải phù hợp ý nghĩa thực tế.",
      "source_question_id": "MOD24V1__112",
      "card_id": "topic24-journey-5",
      "micro_role": "trap",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24MICRO_015",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-micro-v1.json",
    "source_sha": "0c11446a01aec62e32b2320f0f537dd52133906a",
    "record": {
      "id": "MOD24MICRO_015",
      "question": "Bài hỏi chiều dài theo mét nhưng kết quả trung gian là 350 cm. Trước khi kết luận nên:",
      "options": [
        "đổi thành 3,5 m",
        "ghi 350 m",
        "bỏ đơn vị",
        "giữ 350 cm dù đề yêu cầu mét"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan",
        "layer": "Core-Support"
      },
      "difficulty": "basic",
      "explanation": "Cần trả lời đúng đơn vị đề yêu cầu.",
      "source_question_id": "MOD24V1__113",
      "card_id": "topic24-journey-5",
      "micro_role": "apply",
      "hints": [
        "Đọc kỹ điều kiện và đại lượng bài hỏi.",
        "Kiểm tra đại lượng, phép tính và đơn vị trước khi chọn đáp án."
      ]
    }
  },
  {
    "id": "MOD24V1__111",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__111",
      "question": "Bài toán số sản phẩm cho nghiệm x=-5 và x=12. Kết luận đúng là:",
      "options": [
        "loại -5, nhận 12 sản phẩm",
        "nhận cả hai nghiệm",
        "nhận -5 vì nhỏ hơn",
        "không cần kiểm tra"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "basic",
      "explanation": "Số sản phẩm không thể âm."
    }
  },
  {
    "id": "MOD24V1__112",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__112",
      "question": "Tính thời gian đi đường được -2 giờ. Bước đúng là:",
      "options": [
        "kiểm tra lại mô hình hoặc phép tính vì thời gian không thể âm",
        "kết luận đi -2 giờ",
        "lấy trị tuyệt đối mà không giải thích",
        "đổi sang phút âm"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "basic",
      "explanation": "Kết quả phải phù hợp ý nghĩa thực tế."
    }
  },
  {
    "id": "MOD24V1__113",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__113",
      "question": "Bài hỏi chiều dài theo mét nhưng kết quả trung gian là 350 cm. Trước khi kết luận nên:",
      "options": [
        "đổi thành 3,5 m",
        "ghi 350 m",
        "bỏ đơn vị",
        "giữ 350 cm dù đề yêu cầu mét"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "basic",
      "explanation": "Cần trả lời đúng đơn vị đề yêu cầu."
    }
  },
  {
    "id": "MOD24V1__114",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__114",
      "question": "Giải bài chuyển động ra vận tốc x=0 km/h trong khi xe phải đi 120 km trong thời gian hữu hạn. Kết luận:",
      "options": [
        "loại x=0 vì không phù hợp điều kiện",
        "nhận x=0",
        "đổi thành 1",
        "không cần kết luận"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "basic",
      "explanation": "Vận tốc phải dương."
    }
  },
  {
    "id": "MOD24V1__115",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__115",
      "question": "Một bài tiền tệ cho kết quả 123456,789 đồng và đề yêu cầu làm tròn đến nghìn đồng. Kết quả nên là:",
      "options": [
        "123.000 đồng",
        "123.456 đồng",
        "123.457 đồng",
        "124.000 đồng"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "intermediate",
      "explanation": "123456,789 gần 123000 hơn 124000 khi làm tròn đến nghìn."
    }
  },
  {
    "id": "MOD24V1__116",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__116",
      "question": "Tính xác suất thực tế được 1,08. Cần:",
      "options": [
        "kiểm tra lại vì xác suất phải thuộc [0,1]",
        "kết luận 108%",
        "giữ nguyên",
        "lấy 0,08"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "intermediate",
      "explanation": "Xác suất lớn hơn 1 là không hợp lệ."
    }
  },
  {
    "id": "MOD24V1__117",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__117",
      "question": "Một phương trình thực tế có hai nghiệm 4 và 7 nhưng điều kiện x>5. Nghiệm nhận là:",
      "options": [
        "7",
        "4",
        "cả 4 và 7",
        "không nghiệm"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "intermediate",
      "explanation": "Chỉ 7 thỏa điều kiện x>5."
    }
  },
  {
    "id": "MOD24V1__118",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__118",
      "question": "Bài toán tuổi cho nghiệm 12, nhưng x được đặt là tuổi cách đây 15 năm của một người hiện 20 tuổi. Nếu mô hình dẫn tới x=12 thì cần:",
      "options": [
        "đối chiếu lại cách đặt ẩn và mốc thời gian trước khi kết luận",
        "luôn nhận 12",
        "bỏ đơn vị",
        "đổi 12 thành -12"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-ket-luan"
      },
      "difficulty": "advanced",
      "explanation": "Bài tuổi dễ nhầm mốc thời gian; cần kiểm tra lại ý nghĩa ẩn."
    }
  },
  {
    "id": "MOD24V1__125",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__125",
      "question": "Mô hình “công việc = năng suất × thời gian” dùng một năng suất n không đổi. Nếu năng suất thay đổi rõ rệt giữa các giai đoạn, cách xử lý hợp lý là:",
      "options": [
        "Vẫn dùng một n bất kỳ cho toàn bộ quá trình",
        "Chia thành các giai đoạn hoặc xây dựng mô hình phản ánh năng suất thay đổi",
        "Bỏ đơn vị thời gian",
        "Luôn làm tròn n thành số nguyên"
      ],
      "answer": 1,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "kiem-tra-gia-dinh-mo-hinh"
      },
      "difficulty": "advanced",
      "explanation": "Công thức với một n duy nhất ngầm giả định năng suất không đổi. Khi giả định không phù hợp cần chia giai đoạn hoặc điều chỉnh mô hình."
    }
  },
  {
    "id": "MOD24V1__126",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-04.json",
    "source_sha": "3c3fbe1af4a978b95bd4d7f20bcdea132fd63df8",
    "record": {
      "id": "MOD24V1__126",
      "question": "Khi một bài toán thực tế yêu cầu đáp số đến 0,1 đơn vị, cách làm nào hạn chế sai số tích lũy tốt nhất?",
      "options": [
        "Làm tròn mọi bước trung gian đến 0,1",
        "Giữ đủ chữ số ở các bước trung gian và làm tròn ở kết quả cuối",
        "Bỏ qua đơn vị rồi làm tròn",
        "Luôn làm tròn xuống"
      ],
      "answer": 1,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "kiem-tra-ket-luan"
        ],
        "type": "lam-tron-ket-qua"
      },
      "difficulty": "intermediate",
      "explanation": "Làm tròn quá sớm có thể làm sai số tích lũy; nên giữ đủ chữ số rồi làm tròn ở đáp số cuối theo yêu cầu."
    }
  }
]
```

### PHA C — Chuyển động + năng suất công việc — 20 items

```json
[
  {
    "id": "MOD24V1__021",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__021",
      "question": "Một xe đi 150 km với vận tốc không đổi 50 km/h. Thời gian đi là:",
      "options": [
        "3 giờ",
        "2 giờ",
        "2,5 giờ",
        "7,5 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "basic",
      "explanation": "t=S/v=150/50=3 giờ."
    }
  },
  {
    "id": "MOD24V1__022",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__022",
      "question": "Một người đi 2,5 giờ với vận tốc 40 km/h. Quãng đường đi được là:",
      "options": [
        "100 km",
        "16 km",
        "42,5 km",
        "80 km"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "basic",
      "explanation": "S=v×t=40×2,5=100 km."
    }
  },
  {
    "id": "MOD24V1__023",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__023",
      "question": "Một xe đi 180 km trong 3 giờ. Vận tốc trung bình theo mô hình S/t là:",
      "options": [
        "60 km/h",
        "45 km/h",
        "90 km/h",
        "540 km/h"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "basic",
      "explanation": "v=180/3=60 km/h."
    }
  },
  {
    "id": "MOD24V1__024",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__024",
      "question": "Nửa quãng đường 120 km đầu đi 40 km/h, nửa sau 60 km/h. Tổng thời gian là:",
      "options": [
        "2,5 giờ",
        "2 giờ",
        "2,4 giờ",
        "3 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "intermediate",
      "explanation": "Mỗi nửa là 60 km: thời gian 1,5 h và 1 h, tổng 2,5 h."
    }
  },
  {
    "id": "MOD24V1__025",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__025",
      "question": "Một xe dự định đi 120 km với vận tốc 40 km/h. Nếu tăng lên 60 km/h, thời gian giảm:",
      "options": [
        "1 giờ",
        "0,5 giờ",
        "1,5 giờ",
        "2 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "intermediate",
      "explanation": "Thời gian cũ 3 h, mới 2 h, giảm 1 h."
    }
  },
  {
    "id": "MOD24V1__026",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__026",
      "question": "Hai xe xuất phát cùng lúc từ hai điểm cách 210 km và đi ngược chiều nhau với 50 km/h và 55 km/h. Thời gian gặp nhau là:",
      "options": [
        "2 giờ",
        "1 giờ",
        "2,5 giờ",
        "4 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "advanced",
      "explanation": "Vận tốc rút ngắn khoảng cách là 105 km/h; 210/105=2 h."
    }
  },
  {
    "id": "MOD24V1__027",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__027",
      "question": "Một người đi 30 phút với vận tốc 12 km/h. Quãng đường là:",
      "options": [
        "6 km",
        "12 km",
        "3 km",
        "24 km"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "intermediate",
      "explanation": "30 phút=0,5 giờ; S=12×0,5=6 km."
    }
  },
  {
    "id": "MOD24V1__028",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__028",
      "question": "Xe A đi 100 km trong 2 giờ, xe B đi 150 km trong 3 giờ. So sánh vận tốc trung bình:",
      "options": [
        "hai xe bằng nhau, đều 50 km/h",
        "A nhanh hơn",
        "B nhanh hơn",
        "không đủ dữ kiện"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "bai-toan-chuyen-dong"
      },
      "difficulty": "intermediate",
      "explanation": "100/2=50 và 150/3=50."
    }
  },
  {
    "id": "MOD24V1__121",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__121",
      "question": "Một xe đi 60 km với vận tốc 30 km/h rồi đi tiếp 60 km với vận tốc 60 km/h. Vận tốc trung bình trên cả hành trình là:",
      "options": [
        "40 km/h",
        "45 km/h",
        "50 km/h",
        "60 km/h"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "van-toc-trung-binh"
      },
      "difficulty": "intermediate",
      "explanation": "Tổng quãng đường là 120 km. Tổng thời gian là 60/30 + 60/60 = 3 giờ. Vận tốc trung bình = 120/3 = 40 km/h, không phải trung bình cộng 45."
    }
  },
  {
    "id": "MOD24V1__122",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-01.json",
    "source_sha": "2099b3e03210d58c7dca4e55fc8e2d88f0db5d06",
    "record": {
      "id": "MOD24V1__122",
      "question": "Một xe đi 90 km với vận tốc 45 km/h, sau đó đi 60 km với vận tốc 60 km/h. Vận tốc trung bình của cả hai chặng là:",
      "options": [
        "48 km/h",
        "50 km/h",
        "52,5 km/h",
        "55 km/h"
      ],
      "answer": 1,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "chuyen-dong"
        ],
        "type": "van-toc-trung-binh"
      },
      "difficulty": "advanced",
      "explanation": "Thời gian hai chặng là 2 giờ và 1 giờ; tổng quãng đường 150 km nên v_tb = 150/3 = 50 km/h."
    }
  },
  {
    "id": "MOD24V1__031",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__031",
      "question": "Một người làm một mình xong công việc trong 5 giờ. Năng suất mỗi giờ là:",
      "options": [
        "1/5 công việc",
        "5 công việc",
        "1/10 công việc",
        "4/5 công việc"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "basic",
      "explanation": "Nếu toàn bộ công việc là 1 thì mỗi giờ làm 1/5."
    }
  },
  {
    "id": "MOD24V1__032",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__032",
      "question": "A làm một mình 6 giờ, B làm một mình 3 giờ. Năng suất chung mỗi giờ là:",
      "options": [
        "1/2 công việc",
        "1/9",
        "1/3",
        "2/3"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "basic",
      "explanation": "1/6+1/3=1/2."
    }
  },
  {
    "id": "MOD24V1__033",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__033",
      "question": "A làm một mình 6 giờ, B làm một mình 3 giờ. Cùng làm thì hoàn thành trong:",
      "options": [
        "2 giờ",
        "3 giờ",
        "4 giờ",
        "9 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "basic",
      "explanation": "Năng suất chung 1/2 công việc/giờ nên cần 2 giờ."
    }
  },
  {
    "id": "MOD24V1__034",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__034",
      "question": "Một vòi đầy bể trong 4 giờ. Sau 1,5 giờ, phần bể đã đầy là:",
      "options": [
        "3/8",
        "1/4",
        "1/2",
        "5/8"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "intermediate",
      "explanation": "Năng suất 1/4 bể/giờ; 1,5×1/4=3/8."
    }
  },
  {
    "id": "MOD24V1__035",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__035",
      "question": "Hai vòi đầy bể lần lượt trong 6 giờ và 9 giờ. Năng suất chung là:",
      "options": [
        "5/18 bể/giờ",
        "1/15",
        "1/3",
        "5/54"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "intermediate",
      "explanation": "1/6+1/9=3/18+2/18=5/18."
    }
  },
  {
    "id": "MOD24V1__036",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__036",
      "question": "Hai vòi có năng suất chung 5/18 bể/giờ. Thời gian để đầy bể khi mở cùng lúc là:",
      "options": [
        "18/5 giờ",
        "5/18 giờ",
        "3 giờ",
        "5 giờ"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "intermediate",
      "explanation": "Thời gian = 1/(5/18)=18/5 giờ."
    }
  },
  {
    "id": "MOD24V1__037",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__037",
      "question": "A hoàn thành việc trong 8 giờ, B trong 12 giờ. Sau 3 giờ cùng làm, phần công việc đã hoàn thành là:",
      "options": [
        "5/8",
        "3/8",
        "1/2",
        "7/8"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "advanced",
      "explanation": "Năng suất chung 1/8+1/12=5/24; trong 3 giờ làm 15/24=5/8."
    }
  },
  {
    "id": "MOD24V1__038",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__038",
      "question": "Một đội dự kiến làm 120 sản phẩm trong 6 giờ với năng suất không đổi. Năng suất là:",
      "options": [
        "20 sản phẩm/giờ",
        "720",
        "114",
        "126"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "intermediate",
      "explanation": "120/6=20 sản phẩm mỗi giờ."
    }
  },
  {
    "id": "MOD24V1__039",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__039",
      "question": "Máy A làm 30 chi tiết/giờ, máy B làm 20 chi tiết/giờ. Cùng chạy 4 giờ làm được:",
      "options": [
        "200 chi tiết",
        "50",
        "120",
        "240"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "intermediate",
      "explanation": "(30+20)×4=200."
    }
  },
  {
    "id": "MOD24V1__040",
    "source_path": "docs/assets/data/practice/24-bai-toan-thuc-te-v1-02.json",
    "source_sha": "03535d510cd91cd52df48312325536edc5bb4423",
    "record": {
      "id": "MOD24V1__040",
      "question": "Một công việc, A làm một mình hết x giờ. Nếu x>0, sau 2 giờ A làm được phần công việc là:",
      "options": [
        "2/x",
        "x/2",
        "2x",
        "1/(2x)"
      ],
      "answer": 0,
      "tags": {
        "topic": "24-bai-toan-thuc-te",
        "skill": [
          "nang-suat"
        ],
        "type": "bai-toan-nang-suat"
      },
      "difficulty": "advanced",
      "explanation": "Năng suất là 1/x công việc mỗi giờ, nên 2 giờ làm 2/x."
    }
  }
]
```

## E. Chuẩn báo cáo Pha A/B/C

Mỗi pha chỉ xuất **một bảng** đúng expected_count hàng: `ID | toán/đáp án/status | target/task_demand | clone/context | issue/action`. Đối chiếu question, tất cả options (không tự gán A đúng), answer index, explanation và source_sha. `PASS` chỉ xác nhận nội dung phù hợp, không tự cấp mastery độc lập. `REVISION_REQUIRED` khi sai toán, đáp án không duy nhất, dữ kiện không khả thi hoặc câu chữ mơ hồ làm đổi kết quả. `INSUFFICIENT_EVIDENCE` khi thiếu nguồn. Nêu 5–7 phát hiện có ID cụ thể, tối đa hai micro-tests có đáp án/rubric, trong đó ít nhất một tự luận không gợi đáp án.
JSON summary cho pha chỉ gồm `packet_id,source_main_sha,phase,expected_ids,reviewed_ids,missing_ids,duplicate_ids,unexpected_ids,status_counts,priority_findings,status=PROPOSAL_ONLY`. Status sum = 26/13/20. Không in lại toàn văn câu hỏi hay bảng nhiều lần. Nếu bị cắt ghi ID cuối, chỉ tiếp tục phần sau.
Không tạo mapping runtime, không gộp localStorage counts, không suy ra tần suất đề thi nếu không có corpus.

## F. Quyết định kết thúc gói

Phân định rõ kỹ năng xuyên chuyên đề: nhận diện đại lượng–đơn vị/đọc dữ kiện, phép đổi đơn vị cụ thể, lập mô hình, kiểm nghiệm và kết luận, vận dụng quy tắc chuyển động/năng suất. Đề xuất chỗ nào là assessed atomic skill vs supporting/method/context; chỉ tạo assessed skill nếu có lỗi chẩn đoán đặc thù và bài đo độc lập. Dùng các bài MCQ hiện có cho formative khi clone nhiều; không thổi phồng Core Readiness/độ phủ exam.