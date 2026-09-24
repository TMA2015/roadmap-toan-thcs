# AI Collaboration Hub

> Trang này là **điểm giao tiếp chung** cho dự án Roadmap Toán THCS khi phối hợp giữa phụ huynh/người quản lý dự án, Gemini và ChatGPT.

## Triết lý kiến trúc

**25 chuyên đề là Vertical Spine xuyên suốt lớp 6–9.** KNTT theo lớp/chương/bài chỉ là lớp mapping để định vị cùng một skill trên mạch kiến thức. Mọi task curriculum phải giữ được khả năng truy nguyên:

`prerequisite → skill hiện tại → downstream use`

[Xem triết lý mạch kiến thức dọc](../roadmap/triet-ly-mach-kien-thuc-doc.md)

## Mục tiêu

Dự án không dùng một AI như “nguồn chân lý duy nhất”. Mỗi thành viên có một vai trò khác nhau:

- **Người quản lý dự án:** quyết định mục tiêu, ưu tiên và trải nghiệm mong muốn.
- **Gemini:** ưu tiên biên soạn, phản biện học thuật và sư phạm.
- **ChatGPT:** ưu tiên kiến trúc hệ thống, kiểm tra chéo, chuẩn hóa kỹ thuật, GitHub, QA và tích hợp.

Với nội dung có rủi ro cao như **hình học khó, bài thi chuyên, chứng minh nhiều bước**, Gemini và ChatGPT nên giải **độc lập trước**, sau đó mới so sánh.

## Hai URL nên đưa cho Gemini

1. **Hub dành cho người đọc:**  
   `https://tma2015.github.io/roadmap-toan-thcs/collaboration/`

2. **Project Context dạng JSON:**  
   `https://tma2015.github.io/roadmap-toan-thcs/assets/data/collaboration/project-context.json`

Nếu website vừa được cập nhật, GitHub Pages có thể chậm hơn repository vài phút.

## Prompt khởi động nhanh cho Gemini

Bạn có thể copy nguyên khối này vào Gemini:

```text
Bạn đang tham gia với vai trò cố vấn học thuật/sư phạm cho dự án Roadmap Toán THCS.

Trước khi trả lời, hãy đọc:
1) https://tma2015.github.io/roadmap-toan-thcs/collaboration/
2) https://tma2015.github.io/roadmap-toan-thcs/assets/data/collaboration/project-context.json

Hãy coi các tài liệu Source of Truth được liệt kê trong Project Context là chuẩn dự án hiện tại.

Vai trò ưu tiên của bạn:
- phản biện học thuật và sư phạm;
- biên soạn lý thuyết, ví dụ, bài tập, hint;
- giải độc lập bài khó để làm đối chứng;
- phát hiện lỗ hổng nội dung hoặc cách giải thích chưa phù hợp.

Không tự giả định cấu trúc repository nếu context không nói rõ.
Không trộn nội dung thi chuyên vào KNTT Core.
Nếu không chắc một chi tiết, hãy ghi UNCERTAIN thay vì đoán.

Khi trả lời một nhiệm vụ, dùng Handoff Format trên Collaboration Hub để ChatGPT có thể kiểm tra và tích hợp.
```

## Source of Truth

Khi có mâu thuẫn giữa một câu trả lời AI và repository, ưu tiên theo thứ tự:

1. **KNTT Core / quy định chương trình đã được dự án xác nhận**
2. **Blueprint 25 chuyên đề**
3. **Ma trận kiến thức**
4. **Chuẩn ngân hàng câu hỏi / quy trình biên soạn**
5. **Dữ liệu và mã nguồn hiện có trong repository**
6. Nội dung draft do Gemini hoặc ChatGPT tạo

AI draft **không tự động trở thành Source of Truth**.

## Ma trận phân công

| Loại công việc | Gemini | ChatGPT | Quy tắc |
|---|---|---|---|
| Cấu trúc sư phạm, cách giải thích | **Lead** | Review & tích hợp | Gemini đề xuất, ChatGPT kiểm tra tính nhất quán với Roadmap |
| Biên soạn lý thuyết/ví dụ | **Lead** | QA + chuẩn hóa | Đưa qua Content Staging trước khi publish |
| Sinh batch bài tập | **Lead** | Schema/answer/tag/dedupe QA | Không publish batch chưa audit |
| Bài khó, chứng minh, thi chuyên | **Giải độc lập** | **Giải độc lập** | So sánh sau khi cả hai đã có lời giải |
| Hình học khó | Giải + phản biện cấu hình | **SVG/spec/semantic QA Lead** | Lời giải và hình được kiểm tra riêng |
| Mapping KNTT | Pedagogy review | **Data/integration Lead** | Không dựa vào trí nhớ nếu có tài liệu chuẩn |
| Phân tích đề vào 10 / đề chuyên | Phân loại dạng & nhận xét học thuật | Corpus, metadata, thống kê, tích hợp | Trọng số phải dựa trên dữ liệu đề thật |
| Practice Engine / learner model | Feedback | **Lead** | ChatGPT chịu trách nhiệm code và backward compatibility |
| UI/UX học sinh | Đồng thiết kế | Đồng thiết kế + triển khai | Ưu tiên dễ dùng trên iPad/điện thoại |
| GitHub, branch, PR, deploy | Feedback khi cần | **Lead** | ChatGPT kiểm tra diff và deploy |
| Quyết định ưu tiên sản phẩm | Gợi ý | Gợi ý | **Người quản lý dự án quyết định** |

## Khi nào bắt buộc dùng “hai AI độc lập”

Nên dùng chế độ kiểm tra kép nếu có một trong các dấu hiệu:

- chứng minh hình học nhiều bước;
- bài thi chuyên / HSG;
- bài có nhiều điều kiện hoặc nghiệm ngoại lai;
- lời giải dùng một định lý không hiển nhiên;
- kết quả sẽ được dùng làm đáp án chuẩn cho nhiều câu khác;
- một AI đã từng trả lời mâu thuẫn hoặc thiếu ổn định ở dạng bài đó.

Quy trình:

`Gemini solve independently → ChatGPT solve independently → compare → resolve disagreement → publish`

Không gửi lời giải của AI thứ nhất cho AI thứ hai **trước** khi AI thứ hai giải nếu mục tiêu là kiểm tra độc lập thật sự.

## Handoff Format

Khi Gemini gửi nội dung để ChatGPT kiểm tra, nên dùng:

```text
TASK_ID:
CONTEXT_VERSION:
ROLE: author / reviewer / independent-solver
LAYER: KNTT-Core / Entrance10 / Specialized-Challenge
TOPIC:
SKILLS:
REQUEST_TYPE: lesson / example / question-bank / proof / review / diagram-spec

ASSUMPTIONS:
- ...

RESULT:
...

HINTS:
1. ...
2. ...

COMMON_MISTAKES:
- ...

INDEPENDENT_CHECK:
...

UNCERTAINTIES:
- NONE
hoặc
- ...

REFERENCES:
- ...
```

Không nhất thiết mọi trường đều có dữ liệu, nhưng `TASK_ID`, `LAYER`, `TOPIC`, `RESULT` và `UNCERTAINTIES` nên luôn có.

## Cách phản hồi khi không đồng ý

Nếu Gemini và ChatGPT bất đồng, không chọn theo “AI nào tự tin hơn”.

Ghi rõ:

1. Điểm bất đồng chính xác.
2. Giả thiết/định lý nào dẫn đến khác nhau.
3. Cách kiểm tra độc lập.
4. Kết luận sau kiểm tra.
5. Nếu vẫn chưa giải quyết: đánh dấu `BLOCKED-ACADEMIC` và chưa publish.

## Luồng làm việc trên iPad

Cách đơn giản nhất:

1. Mở Collaboration Hub cho Gemini.
2. Giao task bằng một câu ngắn + ID.
3. Yêu cầu Gemini trả theo Handoff Format.
4. Copy output sang ChatGPT.
5. ChatGPT kiểm tra, sửa và đưa qua `content-staging/`.
6. Khi đạt chuẩn, ChatGPT tạo PR và deploy.

Bạn không cần sửa Markdown, JSON hoặc GitHub thủ công.

## Tài liệu liên quan

- [Chuẩn KNTT & các tầng học](../roadmap/chuan-kntt-va-cac-tang-hoc.md)
- [Blueprint 25 chuyên đề](../roadmap/blueprint-25-chuyen-de.md)
- [Ma trận kiến thức](../roadmap/ma-tran-kien-thuc.md)
- [Quy trình biên soạn & QA](../huong-dan/quy-trinh-bien-soan-noi-dung.md)
- [Chuẩn ngân hàng câu hỏi](../huong-dan/chuan-ngan-hang-cau-hoi.md)
- [Thư viện hình & QA](../huong-dan/qa-diagram-practice.md)


## Khi Gemini không mở được URL

Đây là tình huống được hỗ trợ chính thức, không phải lỗi workflow.

Dùng **Offline Relay Packet**: một file/khối văn bản tự chứa context tối thiểu + task + output format. Người dùng chỉ cần upload hoặc copy **một packet duy nhất**.

- [Hướng dẫn Offline Relay](offline-relay.md)
- [Relay Packet KNTT-MAP-G6-001](relay-packets/KNTT-MAP-G6-001.md)

Không yêu cầu người dùng copy lại cả lịch sử trò chuyện hoặc toàn bộ Hub.

## Công cụ cộng tác

- [Handoff Protocol](handoff-protocol.md)
- [Offline Relay](offline-relay.md)
- [Capability Profile JSON](../assets/data/collaboration/capability-profile.json)
- [Capability Benchmark](capability-benchmark.md)
- [Collaboration Task Board](task-board.md)
- [Review Packet Template](review-packet.md)
- [Task KNTT-MAP-G6-001](tasks/KNTT-MAP-G6-001.md)
- [Task KNTT-MAP-G7-001](tasks/KNTT-MAP-G7-001.md)
- [Task KNTT-MAP-G8-001](tasks/KNTT-MAP-G8-001.md)
- [Task KNTT-MAP-G9-001](tasks/KNTT-MAP-G9-001.md)


## Feedback packets

- [KNTT-MAP-G7-001 feedback](feedback/KNTT-MAP-G7-001.md) — phản hồi sau hai lượt Grade 7, dùng để cải thiện task Grade 8 và các vòng sau.
