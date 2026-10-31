# Toán 10 KNTT — Chương I (Mệnh đề và tập hợp) · Blueprint Tự kiểm tra cuối CHƯƠNG R00

**TRẠNG THÁI:** `ASSESSMENT_COVERAGE_BLUEPRINT_ONLY` · **KHÔNG CÓ ĐỀ THI / ĐÁP ÁN / RUBRIC BÍ MẬT** · **NOT_ACTIVE / NO_MASTERY**.

## 1. Vì sao tài liệu này được tạo

Học liệu D1–D6 SGK B01–B02 đã NotebookLM PASS 18/18 và tích hợp theo #628/#635; **học liệu luyện tập này chưa đủ bằng chứng `SGK_CHAPTER_READINESS`**. Tài liệu chỉ thiết kế các **chứng cứ kiến thức cần đo** và quy trình QA, không nhân bản câu public, không tự cấp Academic PASS cho một bài kiểm tra chưa tồn tại.

**SGK chương I:** Bài 1 Mệnh đề; Bài 2 Tập hợp. Nguồn: SGK Toán 10 KNTT tập 1 B01 pp.5–11, B02 pp.12–19; SBT B01 pp.5–7, B02 pp.8–11. Cần NotebookLM đối chiếu toàn chương, đặc biệt SGK bài tập cuối ChI và SBT bài tổng hợp; các dòng dưới là targets đề xuất theo D1–D6 B01/B02 R01 đã duyệt, không phải verdict cho readiness.

## 2. SGK outcome coverage cho Tự kiểm tra ChI

| Outcome ID | Học sinh phải chứng tỏ độc lập | Bằng chứng/kiểu năng lực | Phân biệt lỗi sai |
|---|---|---|---|
| `G10-B01-PROPOSITION` | Nhận diện câu là mệnh đề, phân biệt mệnh đề đúng/sai | Phân loại và giải thích | Nhầm câu hỏi/câu mệnh lệnh thành mệnh đề |
| `G10-B01-NEGATION` | Phủ định chính xác mệnh đề và giá trị chân lí | Phủ định logic | Phủ định thiếu dấu hoặc đổi sai lượng từ |
| `G10-B01-IMPLICATION` | Đọc mệnh đề kéo theo, xác định điều kiện đủ/cần | Lập luận một bước và phản ví dụ | Đảo chiều phát biểu |
| `G10-B01-EQUIVALENCE` | Xác định tương đương, đủ và cần | Kết hợp hai chiều | Nhầm kéo theo một chiều là tương đương |
| `G10-B01-QUANTIFIERS` | Hiểu và phủ định ∀/∃ đúng phạm vi | Mô hình có điều kiện biến | Bỏ miền xét hoặc không đổi lượng từ |
| `G10-B02-MEMBERSHIP_SUBSET` | Dùng ∈, ⊂, ⊆ đúng đối tượng | Phân biệt phần tử / tập con | Đánh đồng phần tử với tập hợp con |
| `G10-B02-UNION_INTERSECTION` | Tính hợp và giao của hai tập hữu hạn/khoảng | Chứng cứ thao tác tập | Sai phần tử chung, đóng/mở đầu mút |
| `G10-B02-DIFFERENCE` | Tính hiệu A\\B với đúng thứ tự | Phân biệt hiệu bất đối xứng | Viết B\\A thay A\\B |
| `G10-B02-COMPLEMENT` | Xác định phần bù trong **tập nền được nêu** | Lập luận dựa trên vũ trụ U | Bỏ U rồi lấy phần bù vô nghĩa |
| `G10-B02-INTERVALS` | Đọc và biểu diễn khoảng/đoạn/nửa khoảng | Nhiều dạng biểu diễn | Quên đầu mút, nhầm ngoặc ( ] |
| `G10-B02-VENN_MODEL` | Mô hình hóa bài toán thực tế bằng tập, kiểm nhất quán | Một chứng cứ vận dụng đa bước | Đếm trùng giao hai tập |

Đây là **11 outcome của đúng B01/B02 được review**, không thêm phạm vi Core ngoài SGK. Số câu cụ thể, dạng và mức độ phân tầng phải do ma trận reviewer + QA bảo mật chốt; **không coi mỗi dòng là một item hay một `item_id` mới**.

## 3. Đánh giá độc lập, khác luyện tập

- **SOURCE_BOUNDARY:** Tham chiếu canonical outcome/skill đã có, nhưng mỗi chứng cứ Readiness cần item **chưa từng phát công khai/đã xem** theo kiểm tra exposure; câu public B01/B02 không được xem là bằng chứng độc lập.
- **ASSESSMENT_SCOPE:** `SGK_CHAPTER_READINESS:G10:CHI`, độc lập với `TOPIC_READINESS`. Ghi kết quả theo scope/attempt cụ thể, không gom điểm từ Core/Practice/Written self-check.
- **STUDENT_FLOW:** Thí sinh được điều hướng và sửa đáp án trước Final Submit. Không hint, lời giải, AI Tutor, thông báo đúng/sai hoặc answer key trước Final Submit.
- **RUBRIC & DIFFICULTY:** S1 xét độ khó, không chỉ số lượng câu; cần chứng cứ nhận biết, hiểu/biến đổi, vận dụng, có trường hợp sai lầm phổ biến và điều kiện logic. Mỗi câu chính thức có `item_id` canonical, `content_version` và snapshot review; không copy body/answer/rubric qua nhiều vị trí.
- **CONFIDENTIALITY:** Không commit bất kỳ stem đáp án/keys/rubrics held-out nào lên GitHub public/MkDocs/JS/client data hoặc gói tài liệu tải công khai. Chỉ tạo đề thật trong quy trình lưu trữ/đánh giá được chủ dự án chấp thuận sau kiểm thử; **không tự tạo backend/hệ thống login mới**.
- **SCORING:** Bài demo phải hiển thị `NO_SCORE/NO_MASTERY`. Chỉ ghi kết quả, readiness/mastery khi evaluator đúng đáp án, integrity, final-submit và cơ chế ghi nhận đã được chứng minh tại exact commit, được chủ dự án cho phép.

## 4. Release blockers trước khi triển khai bài Tự kiểm tra ChI

- [ ] B01–B02 outcome matrix được reviewer duyệt **riêng cho Chapter Readiness** đúng phạm vi S1.
- [ ] Có ngân hàng câu held-out mới và biên bản NotebookLM theo item/outcome, **không lộ đáp án ra nhánh public**.
- [ ] Kiểm exposure tránh lặp câu đã luyện; có phân tách SGK Chapter vs Topic Readiness.
- [ ] Luồng Final Submit/khóa hint/AI/answer và bảo mật khóa chấm đúng, test browser + thiết bị thật.
- [ ] Scoring/Mastery ghi nhận chính thức chỉ sau QA và explicit owner approval.
- [ ] QA regression: Golden R4, desktop/mobile, THCS, deep links, Gemini/progress.

**Kết luận:** Đây là đóng góp thực tế đầu tiên để **lấp thiếu về hợp đồng đánh giá cuối chương** mà không vi phạm bí mật đề. Không thể cấp `CHAPTER_COMPLETE`, `ACADEMIC_PASS` hoặc điểm Mastery từ blueprint này.
