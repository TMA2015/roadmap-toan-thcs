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

### Cổng lưu nguồn review bất biến và thay thế chứng cứ nguồn (31/10/2026)

**Tham chiếu quy trình nhánh học liệu:** `prototypes/thpt/THPT_NOTEBOOKLM_SOURCE_ARCHIVE_AND_PROVENANCE_SOP_v1.0_20261031.md` (hiện trên PR biên soạn #639, cần đối chiếu commit thực tế trước khi áp dụng); hợp đồng 06/07 và kiến trúc 08 vẫn có ưu tiên cao hơn.

1. **Trước khi giao NotebookLM:** lưu **file Temp thực tế** tại nơi có thể truy xuất bền vững, giữ đúng phiên bản gốc; lưu `PACKET_ID/Rxx`, tên file, dung lượng, SHA-256 byte thực, Git blob và commit nếu nguồn public, đường dẫn archive, danh sách LESSON/OUTCOME/ITEM/HELP, loại delta. Xác minh `list/read` và phục hồi kiểm tra checksum trước khi cấp link review. Không dựa duy nhất vào file `/mnt/data`, Library không có chỉ mục chắc chắn hay tên ghi trong chat. Nguồn private Readiness, đáp án/keys/rubric **không** đưa vào GitHub công khai.
2. **Sau khi nhận verdict:** lưu receipt theo đúng snapshot và outcome/item; phân biệt `BYTE_VERIFIED` với `SOURCE_EQUIVALENT`, `NOT_VERIFIED`. Mọi sửa đổi học thuật dùng policy 07; không tự suy rộng PASS hoặc kích hoạt Readiness/Mastery.
3. **Nhận gói R1:** kiểm tra nguồn hiệu lực có Git blob/hash bất biến + review độc lập đúng nội dung/điều kiện + ánh xạ canonical không trùng. Nếu Temp lịch sử thất lạc, chỉ được `ACCEPTED_BY_EVIDENCE` khi toàn bộ nội dung hiệu lực đã review, `SOURCE_EQUIVALENCE=PASS`, không P0/P1, không delta học thuật chưa được kiểm chứng; ghi `HISTORICAL_TEMP_BYTE_PARITY=NOT_VERIFIED` trung thực. **Không** giả vờ xác minh trùng byte và **không** yêu cầu chủ dự án chọn thay nhóm phản biện.
4. **Fail closed khi không đủ chứng cứ:** nếu nguồn hiệu lực không đầy đủ, đáp án/điều kiện/rubric thay đổi, reviewer mâu thuẫn hoặc ID trùng, HOLD đúng phần liên quan, review lại theo `DELTA_C/D` và ghi lý do. Chỉ chuyển sang R2 khi R1 đối chiếu được blob đang tích hợp, ngân hàng canonical và nguồn review hiệu lực.
5. **Độc lập về phát hành:** chứng cứ học thuật đủ **không phải** là cấp phép merge. Giữ CI đúng HEAD, Golden/AP/D1–D6, QA thiết bị thật, THCS hồi quy, Final Submit và NO_MASTERY. Chỉ merge/deploy theo điều kiện và quyền phát hành của chủ dự án.

**Áp dụng ChV B12 HELP02 R02:** file lịch sử `Temp_THPT_G10_CHV_B12_D6_HELP02_DELTA_REVIEW_20261030.md` chưa được khôi phục; bản hiệu lực Git blob `913400d6aff63befac95a8a47a00870663dd0096`, NotebookLM R03 `SOURCE_EQUIVALENCE=PASS` và scope `HELP-G10-B12-02@R02` đã được nhánh học liệu ghi `ACCEPTED_BY_EVIDENCE`. Khi phát hành, đối chiếu lại trực tiếp blob/receipt trên PR #639 cuối cùng, không phát hành gói ChV cho đến khi R1–R5 và các cổng khác đạt. Không coi tên Temp chỉ dẫn là bằng chứng file còn tồn tại.

**Địa chỉ sử dụng:** REGISTER.md là danh sách duy nhất; inventory/ là hồ sơ chưa A-PASS toàn bộ và lịch sử phát hành scoped; ready/ là kho thực sự giao cho nhánh phát hành; PACKET_TEMPLATE.md là mẫu. Script scripts/test-thpt-release-queue.cjs giữ danh mục và checklist nhất quán nhưng không tự cấp Academic PASS hoặc deploy.