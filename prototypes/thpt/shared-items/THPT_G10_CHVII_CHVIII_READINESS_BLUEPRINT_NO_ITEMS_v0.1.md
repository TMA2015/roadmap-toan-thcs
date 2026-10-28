# Toán 10 KNTT — Readiness blueprint Chương VII & VIII (NO ITEMS, NO KEYS)

**State:** DESIGN_ONLY / NO_ASSESSMENT_DELIVERY / NO_MASTERY_CREDIT / ACADEMIC_NOT_REVIEWED.
**Purpose:** dành trước vị trí đánh giá độc lập để biên soạn sau, **không đưa câu, đáp án hoặc gợi ý** lên repository công khai. Không dùng các câu Core/Practice vừa công bố lời giải làm chứng cứ readiness lần đầu.

## SGK Chapter VII · Assessment scope `G10_CHVII`

| Blueprint slot (không phải item_id) | Lesson / coverage | Kỹ năng cần đánh giá | Khó khăn/tiêu chí |
|---|---|---|---|
| CHVII-READ-B19-01 | B19 | Chọn pháp tuyến, dựng đường qua điểm | Chứng minh phương trình đúng, không nhầm chỉ phương |
| CHVII-READ-B19-02 | B19 | Từ hai điểm dựng PT tham số/tổng quát | Kiểm chứng 2 điểm, phân biệt tỷ lệ |
| CHVII-READ-B20-01 | B20 | Phân biệt song song, trùng, cắt, vuông góc | Không kết luận trùng chỉ từ n tỉ lệ |
| CHVII-READ-B20-02 | B20 | Góc/khoảng cách và bài toán liên kết | Đúng trị tuyệt đối, đơn vị |
| CHVII-READ-B21-01 | B21 | Từ PT tổng quát ra tâm/bán kính | Bảo đảm bán kính thực/dương |
| CHVII-READ-B21-02 | B21 | Đường tròn, tiếp tuyến và vị trí đường | Tiếp điểm, điều kiện khoảng cách tâm |
| CHVII-READ-B22-01 | B22 | Elip và hypebol: (a,b,c) | Phân biệt (a^2-b^2) và (a^2+b^2) |
| CHVII-READ-B22-02 | B22 | Parabol, tiêu điểm và đường chuẩn | Đúng quy ước `y²=2px`, kiểm tra chiều mở |

**Coverage:** 8 **slot học thuật**, không phải 8 câu đã viết. Độ khó và số lượng cuối cùng phải qua NotebookLM, có thể thêm ứng dụng, hình và đa bước. **Tự kiểm tra cuối chương** không tương đương test cho chuyên đề “Hình học tọa độ” xuyên lớp.

## SGK Chapter VIII · Assessment scope `G10_CHVIII`

| Blueprint slot | Lesson / coverage | Kỹ năng cần đánh giá | Sai lầm cần tránh |
|---|---|---|---|
| CHVIII-READ-B23-01 | B23 | Quy tắc cộng trong các nhóm rời nhau | Cộng khi thực ra cần nhân |
| CHVIII-READ-B23-02 | B23 | Quy tắc nhân liên tiếp có/không lặp | Sai số lựa chọn từng bước |
| CHVIII-READ-B24-01 | B24 | Hoán vị và chỉnh hợp, phân biệt vai trò | Nhầm `A_n^k` với `C_n^k` |
| CHVIII-READ-B24-02 | B24 | Tổ hợp có điều kiện hai nhóm | Cộng thay vì nhân số cách |
| CHVIII-READ-B25-01 | B25 | Hệ số khai triển nhị thức | Sai hệ số lũy thừa hoặc dấu |
| CHVIII-READ-B25-02 | B25 | Số hạng chứa/bất biến theo x | Bỏ qua miền điều kiện hoặc mũ âm |

**Coverage:** 6 slot; không có stem/key trong file. Các câu tạo sau phải đánh giá đủ chương và không lấy lại bài đã lộ đáp án trong Practice.

## Eligibility chung

1. `canonical_item_id` là một item toán có thể đặt ở nhiều nhánh khi scope phù hợp, `placement_id` và `assessment_id` riêng.
2. Học sinh đã gặp item, hint hoặc lời giải ở bất kỳ nhánh nào thì lựa chọn câu mới hoặc đánh dấu **REEXPOSED_RETAKE**; không cấp chứng cứ mastery độc lập tự động.
3. Trong lần làm Tự kiểm tra thật: **không có hint, tutor, đúng/sai, answer key trước Final Submit**. Không nhúng answer key vào client.
4. Blueprint không được tính như item đã biên soạn. **Academic verdict = NOT_REVIEWED** cho cả hai Chương VII/VIII.
5. Golden UI R4 không thay đổi; đánh giá chuyên đề có ma trận riêng và đúng ba mục Kiến thức/Luyện tập/Tự kiểm tra.
