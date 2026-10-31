# G10 SGK · Ranh giới Luyện tập công khai và Tự kiểm tra độc lập (quy tắc biên soạn 30/10/2026)

**AUTHORING DOCUMENT ONLY.** Áp dụng cho lớp 10 đang biên soạn, có thể tái sử dụng nguyên tắc cho 11–12 nhưng không tuyên bố các chương đã hoàn chỉnh. `GITHUB_PAGES_PUBLIC_CLIENT=TRUE`; `NO_BACKEND_CHANGE`; `NO_ACCOUNT_CHANGE`; `NO_SCORE/NO_MASTERY`; `NO_MERGE_DEPLOY`.

## 1. Hai luồng, hai mục đích

| Hạng mục | Học theo SGK / Core & Practice | `SGK_CHAPTER_READINESS` (đánh giá độc lập) |
|---|---|---|
| Câu hỏi | Canonical `item_id` công khai theo `placement/role`, có thể chung với `TOPIC_PRACTICE` khi đúng phạm vi | Câu khác đã kiểm độ tiếp xúc; một `item_id` canonical và `content_version` được kiểm chứng |
| Hỗ trợ | Gợi ý, sửa lỗi, xem giải sau thao tác của học sinh | Không gợi ý, AI Tutor, đáp án hoặc báo đúng/sai trước `Final Submit` |
| Lời giải/rubric | Được cung cấp phù hợp với mục tiêu tự học, trong thư viện Written/Anchor dùng chung | Nếu thật sự cần *held-out*, không đưa stem/key/rubric dùng để chấm vào JS công khai |
| Bằng chứng | Phản hồi tức thời hỗ trợ tự học, **không tự đổi Skill Mastery** | Chỉ kết quả từ cơ chế đánh giá chính thức có integrity/QA và owner release permission mới có thể cập nhật Mastery |
| Scope | SGK Theory/Core/Practice và luyện tập theo chuyên đề | **Chỉ Tự kiểm tra cuối một CHƯƠNG SGK**; không đồng nhất `TOPIC_READINESS` |

## 2. Mức triển khai không cần backend mới

**Hiện nay có thể tiếp tục ngay:** biên soạn SGK theory/examples/Practice/Written/SVG/D6, outcome coverage blueprint R00/R01, thiết kế flow Final Submit và QA demo. Có thể có **bài tự đánh giá minh họa (DEMO_ONLY)** nếu hiển thị rõ chưa có điểm chính thức và không ghi Skill Mastery; các câu công khai/đã xem chỉ là **tự học**, không coi là evidence độc lập.

**Không tuyên bố có thể bảo vệ thực sự đề kín chỉ bằng HTML/JavaScript:** GitHub Pages gửi toàn bộ JS/client data tới trình duyệt. Nếu cài đáp án/khóa chấm ở client thì người học có thể đọc qua DevTools, truy cập trực tiếp asset hoặc xem bản bundle; ẩn bằng CSS, xáo thứ tự, obfuscate hay khóa hiển thị đến Final Submit chỉ bảo vệ **trải nghiệm**, không bảo vệ **bí mật key** khỏi người có kỹ năng kỹ thuật. Browser localStorage không phải cơ chế anti-tamper đáng tin cho điểm chính thức.

**Đánh giá có giá trị Mastery:** Nếu sau này owner quyết định triển khai, cần xác định nguồn đề chưa bị lộ, phương thức cấp câu/khóa chấm không lộ client trước submit, kiểm exposure/attempt, phiên bản item/rubric, chống replay/đọc trước key, kiểm thử đánh giá độc lập và bảo vệ riêng tiến độ học sinh. Thiết kế đó là **RD1 decision riêng**, không tự sinh backend, Firebase rules, tài khoản hoặc bản mới của storage.

## 3. Cấm trộn phạm vi và trùng lặp câu

- `R00/R01` là coverage metadata công khai nên được phép ở repo; **chưa có item kín**. Academic RD0 PASS cho đúng outcome snapshot không chứng minh số câu hay cơ chế chấm.
- Public original `item_id` có thể dùng cho `SGK_CORE`, `SGK_PRACTICE`, `TOPIC_PRACTICE` nếu đúng đối tượng; không nhân bản câu hỏi, đáp án hoặc rubric theo nhánh.
- Nếu candidate Readiness bị lộ trên GitHub, trong NotebookLM packet hoặc qua lời giải công khai, xem là **EXPOSED**, không dùng lại làm held-out evidence ngay cả khi giải toán đúng. `THPT-G10-CHVII-RD02` có trạng thái `RETIRED_EXPOSED_CANDIDATE` vĩnh viễn.
- Tách biệt `SGK_CHAPTER_READINESS` và `TOPIC_READINESS`; không tuyên bố Academic PASS/Skill Mastery nhờ số câu học sinh luyện đúng hoặc tự đối chiếu Written.

## 4. Working order / QA

1. **RD0 biên soạn:** khóa chuẩn SGK/SBT từng chương, id/outcome, Core/Support/Optional và mức độ; review theo batch NotebookLM (5 Permanent Sources v2.0 + SGK/SBT S1), lưu kết quả đúng snapshot.
2. **D1–D6 public:** tiếp tục biên soạn và review theo từng bài/chương, kiểm reuse canonical và tránh sửa lại tài liệu đã Academic PASS nếu không có delta cần thiết.
3. **RD1/RD2/RD3:** chỉ xét khi owner chốt cơ chế protected delivery/scoring và có item bank riêng được reviewer kiểm; UI Golden R4, Final Submit, bảo toàn THCS/Firebase/Gemini/progress và QA trên đúng commit.
4. **RD4:** không merge/deploy cho tính năng Readiness hoặc Mastery khi chưa được owner cho phép rõ ràng.

**Decision for current B3:** **tiếp tục biên soạn SGK lớp 10 và review RD0 các chương còn lại**, không buộc lựa chọn kiến trúc đề kín trước khi hoàn thành học liệu công khai.
