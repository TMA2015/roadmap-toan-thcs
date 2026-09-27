# Thử nghiệm sinh câu tương tự theo mẫu — Beta số học

> **Self-Learning Math · Mẫu toán có tham số, không dùng AI tạo đáp án.** Đây là khu thử nghiệm tự chọn, không lưu tiến độ hoặc chấm Core Readiness. [Bài học số học](../kien-thuc/02-so-va-phep-tinh/index.md) · [Beta CĐ06 với câu tương tự từ ngân hàng gốc](thu-nghiem-phan-tich-hoan-toan-v2.md).

Trang thử nghiệm có **6 câu đầu** thuộc ba dạng: cộng hai số nguyên trái dấu, cộng hai phân số khác mẫu, và tính nhanh hiệu hai bình phương. Các số được rút từ phạm vi đã kiểm định. Đáp án đúng, ba phương án nhiễu, lời giải từng bước và giải thích lỗi thường gặp đều được module tính lại cùng lúc khi thay số.

<div class="skill-assessment-pilot" data-arithmetic-template-preview data-assets-base="../../assets/" aria-live="polite">Đang tải bộ mẫu số học…</div>

!!! info "Làm lại và luyện câu tương tự"
    - **Ôn lại câu cũ:** giữ nguyên các tham số, câu hỏi và ID đã xem đáp án; không được tính là bằng chứng độc lập mới.
    - **Tạo câu tương tự với số mới:** dùng đúng mẫu lỗi của lượt đầu, nhưng có tham số và ID biến thể khác, đáp án/phương án nhiễu/lời giải được tính mới bằng công thức; làm ngay sau lời giải vẫn là luyện tập **có hỗ trợ**.
    - **Điểm lượt đầu giữ riêng**, không được sửa khi luyện lại đúng. Chỉ có thể xem câu đã nộp, không sửa để tăng điểm.
    - Trang thử nghiệm này không lưu dữ liệu lên thiết bị hay tài khoản. Tải lại trang sẽ tạo một lượt mới; số ngẫu nhiên chỉ được dùng để chọn tham số, không quyết định tính đúng của phép toán.

## Những gì module được và không được làm

Module dùng [catalog ba mẫu có điều kiện](../assets/data/curriculum/arithmetic-template-catalog-v1.json) và mã nguồn tính toán xác định. Phân số dùng phép tính chính xác và rút gọn bằng ƯCLN; phương án trùng giá trị toán học bị loại; đề và lời giải được sinh đồng bộ. Không gửi câu hỏi tới Gemini để lấy đáp án. Nếu cần, học sinh có thể hỏi AI Tutor để nghe **giải thích thêm**, nhưng đáp án chuẩn không bị AI thay đổi.

**Hình học:** không tự thay số rồi giữ nguyên hình. Chỉ dùng cặp đề–hình–lời giải đã được kiểm định. Mẫu mới phải có quy tắc dựng hình, ràng buộc hình học và QA riêng trước khi sử dụng.

**Giới hạn đánh giá:** đúng một câu trắc nghiệm chỉ thể hiện đã chọn được đáp án cho trường hợp đó, không chứng minh đã tự trình bày mọi bước. Những mã kỹ năng trong catalog là nhãn đề xuất để điều hướng, **chưa được kích hoạt mastery**. [Quyết định 39 trường hợp](../roadmap/primary-skill-decisions-39-v1.md).

Nếu thấy lỗi toán hoặc diễn đạt, ghi lại **tên mẫu, mã biến thể và các số trên màn hình** để tái hiện chính xác.
