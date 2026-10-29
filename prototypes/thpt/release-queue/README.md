# THPT — Quy trình hai nhánh, một checklist

**Repository duy nhất:** TMA2015/self-learning-math. Đây là kho MANIFEST và bằng chứng; không phải kho nhân bản câu hỏi, không có backend, không có held-out Readiness keys.

## Quy trình

1. **Nhánh biên soạn/review** khóa SGK/SBT S1, snapshot và danh mục LESSON/OUTCOME/ITEM; bàn giao Temp_ Markdown/TXT + prompt 3–6 câu theo file 06; nhận NotebookLM verdict độc lập; sửa delta theo file 07 v1.1. Điền các ô **A1–A7** và bằng chứng chính xác.
2. Khi **mọi A đều [x]**, chuyển CHÍNH FILE MANIFEST từ inventory/ sang ready/ bằng PR, đổi trạng thái thành CONTENT_READY và cập nhật REGISTER. Đây là gói học thuật hoàn chỉnh **theo RELEASE_SCOPE đã ghi**, không tự suy ra cả chương/chuyên đề hoàn chỉnh.
3. **Nhánh phát hành** chỉ nhận gói ở ready/, trỏ tới nội dung canonical theo commit; không copy câu hỏi hoặc lời giải. Tích hợp website hiện hành và QA exact-head THCS/THPT, desktop/mobile, MathJax, exposure/readiness, giao diện học sinh sạch. Điền **R1–R5**; R5 là phép merge/deploy rõ ràng của chủ dự án.
4. Chỉ sau A1–A7 và R1–R5 PASS mới đặt RELEASE_READY và merge/deploy đúng phạm vi được duyệt. Ghi **P1/P2** sau phát hành; P2 không được suy từ trình duyệt giả lập.

**HOLD** khi thiếu chứng cứ, D1–D6 chưa đủ theo phạm vi, delta C/D chưa review, hoặc QA lỗi. Review PASS thành phần ≠ CONTENT_READY; CONTENT_READY ≠ merge permission. Một gói đã phát hành phạm vi hữu hạn vẫn có thể chưa đạt FULL_LEARNING_PATH.

**Hai hành trình độc lập:** SGK_CHAPTER (Tự kiểm tra cuối chương); TOPIC (chỉ Kiến thức/Luyện tập/Tự kiểm tra). SGK PASS không suy rộng TOPIC PASS. Dùng chung một canonical item_id/Written/Anchor/skill/ảnh theo placement; tách bằng chứng SGK_CHAPTER_READINESS và TOPIC_READINESS.

**Nguồn và riêng tư:** 5 Permanent NotebookLM THPT v2.0; SGK/SBT KNTT S1; giao NotebookLM bằng file Temp_ thật và prompt, không JSON. Không đưa câu, key hoặc rubric held-out vào public GitHub. Không bật mastery trước QA engine. Ghi chú NotebookLM/QA chỉ nằm trong hồ sơ, không có trong UI học sinh.

**Ưu tiên phát hành:** lọc CONTENT_READY trước; trong tập đó xếp theo tiền đề kiến thức, phụ thuộc PR, mức ảnh hưởng và ngày review; **không random và không FIFO tuyệt đối**. Phát hành đúng những phần được duyệt, không gắn nhãn 'chương hoàn chỉnh' nếu thiếu D1–D6 hoặc đánh giá.

**Địa chỉ sử dụng:** REGISTER.md là danh sách duy nhất; inventory/ là hồ sơ chưa A-PASS toàn bộ và lịch sử phát hành scoped; ready/ là kho thực sự giao cho nhánh phát hành; PACKET_TEMPLATE.md là mẫu. Script scripts/test-thpt-release-queue.cjs giữ danh mục và checklist nhất quán nhưng không tự cấp Academic PASS hoặc deploy.