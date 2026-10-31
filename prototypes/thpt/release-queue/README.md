# THPT — Quy trình hai nhánh, một checklist

**Repository duy nhất:** TMA2015/self-learning-math. Đây là kho MANIFEST và bằng chứng; không phải kho nhân bản câu hỏi, không có backend, không có held-out Readiness keys.

## Hiệu lực và tự tiếp nối cuộc trò chuyện

**Nguồn vận hành chính thức sau khi merge PR #622:** Có hiệu lực cho mọi lần mở chat/nhánh mới của dự án THPT. Trước khi thực hiện, kiểm tra trạng thái GitHub thực tế, đọc `REGISTER.md`, manifest liên quan, checkpoint hiện hành, sau đó chọn đúng vai trò biên soạn hoặc phát hành. Các nguồn 08 (kiến trúc), 06 (file/prompt NotebookLM), 07 (delta) và SGK/SBT S1 giữ nguyên thẩm quyền, không bị quy trình này thay thế.

Danh mục là **con trỏ** đến học liệu và biên bản, không phải nơi copy nội dung câu hỏi. Không dùng trạng thái ghi trong tài liệu này thay cho kết quả live CI hoặc sự cho phép của chủ dự án.

## Quy trình

1. **Nhánh biên soạn/review** khóa SGK/SBT S1, snapshot và danh mục LESSON/OUTCOME/ITEM; bàn giao Temp_ Markdown/TXT + prompt 3–6 câu theo file 06; nhận NotebookLM verdict độc lập; sửa delta theo file 07 v1.1. Điền các ô **A1–A7** và bằng chứng chính xác.
2. Khi **mọi A đều [x]**, chuyển CHÍNH FILE MANIFEST từ inventory/ sang ready/ bằng PR, đổi trạng thái thành CONTENT_READY và cập nhật REGISTER. Đây là gói học thuật hoàn chỉnh **theo RELEASE_SCOPE đã ghi**, không tự suy ra cả chương/chuyên đề hoàn chỉnh.
3. **Nhánh phát hành** chỉ nhận gói ở ready/, trỏ tới nội dung canonical theo commit; không copy câu hỏi hoặc lời giải. Tích hợp website hiện hành và QA exact-head THCS/THPT, desktop/mobile, MathJax, exposure/readiness, giao diện học sinh sạch. Điền **R1–R5**; R5 là phép merge/deploy rõ ràng của chủ dự án.
4. Chỉ sau A1–A7 và R1–R5 PASS mới đặt RELEASE_READY và merge/deploy đúng phạm vi được duyệt. Ghi **P1/P2** sau phát hành; P2 không được suy từ trình duyệt giả lập.

### Cổng trình bày học thuật AP1–AP5 (áp dụng từ 31/10/2026)

Theo [Issue #655](https://github.com/TMA2015/self-learning-math/issues/655), mọi gói học liệu **mới chuẩn bị phát hành** cần xác nhận thêm Academic Presentation QA bên cạnh D1–D6 và A/R/P. **Gọn nhưng không nén**: công thức, điều kiện, định nghĩa, ví dụ và lỗi thường gặp phải phân nhóm hợp lý; hình/đồ thị/SVG đủ rõ để học sinh tự đọc trên desktop, iPhone, iPad. Có thể dùng Adaptive Knowledge Tabs v2 để giảm chiều dọc, nhưng không ghép nhiều ý khác nhau lên một hàng. Các mã D1.x/NotebookLM/PR chỉ dùng trong nguồn/QA, không làm nhãn học sinh.

AP1 cấu trúc ý; AP2 công thức/MathJax; AP3 hình, biểu đồ, SVG; AP4 tự học độc lập; AP5 responsive. Bằng chứng AP cần đủ ngay trên snapshot release HEAD và được ghi trong manifest mới theo `PACKET_TEMPLATE.md`. Không coi Academic PASS hay browser build thành AP3/AP5 PASS tự động. `DELTA_A_UI` được tự QA/log khi không đổi toán; `DELTA_B_SOURCE_EQUIVALENT` cần kiểm chứng tương đương nguồn; `DELTA_C_ACADEMIC_MATERIAL` cần review đúng phần bị tác động; `DELTA_D_BLOCKER` chặn release. Các packet lịch sử được audit theo batch, không tự đổi trạng thái trước khi có bằng chứng.

**HOLD** khi thiếu chứng cứ, D1–D6 chưa đủ theo phạm vi, delta C/D chưa review, hoặc QA lỗi. Review PASS thành phần ≠ CONTENT_READY; CONTENT_READY ≠ merge permission. Một gói đã phát hành phạm vi hữu hạn vẫn có thể chưa đạt FULL_LEARNING_PATH.

**Hai hành trình độc lập:** SGK_CHAPTER (Tự kiểm tra cuối chương); TOPIC (chỉ Kiến thức/Luyện tập/Tự kiểm tra). SGK PASS không suy rộng TOPIC PASS. Dùng chung một canonical item_id/Written/Anchor/skill/ảnh theo placement; tách bằng chứng SGK_CHAPTER_READINESS và TOPIC_READINESS.

**Nguồn và riêng tư:** 5 Permanent NotebookLM THPT v2.0; SGK/SBT KNTT S1; giao NotebookLM bằng file Temp_ thật và prompt, không JSON. Không đưa câu, key hoặc rubric held-out vào public GitHub. Không bật mastery trước QA engine. Ghi chú NotebookLM/QA chỉ nằm trong hồ sơ, không có trong UI học sinh.

**Ưu tiên phát hành:** lọc CONTENT_READY trước; trong tập đó xếp theo tiền đề kiến thức, phụ thuộc PR, mức ảnh hưởng và ngày review; **không random và không FIFO tuyệt đối**. Phát hành đúng những phần được duyệt, không gắn nhãn 'chương hoàn chỉnh' nếu thiếu D1–D6 hoặc đánh giá.

**Khóa chứng cứ:** SOURCE_COMMIT là commit của ứng viên tích hợp để QA. REVIEW_RECEIPT ghi đường dẫn và Git blob SHA của biên bản NotebookLM bất biến; reviewer PASS chỉ áp dụng đúng snapshot gốc và delta được chứng minh. Nếu có file thay đổi học thuật, cập nhật receipt/delta trước khi đánh dấu A1/A3/A6 PASS.

**Địa chỉ sử dụng:** REGISTER.md là danh sách duy nhất; inventory/ là hồ sơ chưa A-PASS toàn bộ và lịch sử phát hành scoped; ready/ là kho thực sự giao cho nhánh phát hành; PACKET_TEMPLATE.md là mẫu. Script scripts/test-thpt-release-queue.cjs giữ danh mục và checklist nhất quán nhưng không tự cấp Academic PASS hoặc deploy.