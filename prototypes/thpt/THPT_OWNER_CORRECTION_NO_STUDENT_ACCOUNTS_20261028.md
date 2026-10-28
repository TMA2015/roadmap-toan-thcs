# Toán THPT — OWNER CORRECTION: NO STUDENT ACCOUNTS / NO NEW BACKEND

**Ngày:** 28/10/2026 · **Áp dụng cho:** Draft PR #612 và kế hoạch phát hành Toán THPT.
**Nguồn:** Chủ dự án trực tiếp chỉnh lại kiến trúc tại cuộc trò chuyện tích hợp/QA ngày 28/10/2026.
**Trạng thái:** Quyết định chủ dự án hiện hành, ưu tiên hơn mọi suy diễn kỹ thuật cũ mâu thuẫn.

## 1. Ràng buộc đã xác nhận

- Một website **Self-Learning Math** chung THCS + THPT, quản lý mã nguồn và preview/QA qua **GitHub**. Giữ Golden UI R4, hai hành trình SGK và Chuyên đề v2.0.
- AI dùng **Gemini** để hỗ trợ học Toán. ChatGPT và NotebookLM là công cụ phát triển/đánh giá độc lập ngoài luồng học sinh; không biến thành hạ tầng tài khoản.
- **KHÔNG triển khai tài khoản học sinh, Firebase Auth, learner allowlist, login/registration, Cloudflare Worker, D1 hoặc máy chủ ngân hàng đề**. Không thêm backend/cơ sở dữ liệu chỉ vì các giả định về bảo vệ Readiness.
- Tách biệt hoàn toàn kiến trúc vận hành dự án Self-Learning English; không tự mang Firebase Auth/hosting của dự án English sang Math.
- Chỉ có chủ dự án mới phê duyệt thay đổi hạ tầng ngoài phạm vi trên.

## 2. Phân biệt quan trọng phát hiện khi đối chiếu mã

Hiện repo Toán có **mã tích hợp Gemini thông qua Firebase AI SDK + App Check** trong `docs/assets/javascripts/firebase-gemini-config.js` và `firebase-gemini-v1.js`. Đây là **transport gọi Gemini**, KHÔNG phải Firebase Auth hay cơ sở dữ liệu học sinh. Không xóa/sửa transport Gemini khi chưa có phương án giữ AI Tutor hoạt động. Chủ dự án không phê duyệt việc tạo tài khoản học sinh thông qua Firebase.

## 3. Xử lý các thành phần đã thêm không đúng phạm vi

Những file `services/thpt-readiness/{worker.mjs,assessment-service.mjs,schema.sql}`, `docs/assets/javascripts/thpt-{protected-readiness,formative-exposure}-v1.js`, các bài test tương ứng và `thpt_allowed_learners` đã được tạo dưới **giả định không đúng** rằng cần hệ thống auth/Worker/D1.

**Quyết định:** Đưa toàn bộ đường triển khai này ra khỏi **phạm vi phát hành**, không kích hoạt, không triển khai, không đòi cấu hình Firebase login/Worker/D1. Có thể giữ lịch sử ở Draft PR để truy vết đến khi dọn mã an toàn; việc còn file lưu trữ KHÔNG tạo thành quyết định sử dụng nó. Không cấp quyền/mastery/score từ engine này. Không tự động áp dụng điều kiện release trước đây về learner JWT và D1.

## 4. Tự kiểm tra trong website tĩnh — ranh giới cần tôn trọng

- Hành vi học sinh vẫn: **Previous / Next / thay đổi đáp án / Final Submit**; không gợi ý, không chấm hoặc hiện đáp án trước Final Submit.
- Có thể làm bài kiểm tra tự đánh giá trên web tĩnh; có thể tái sử dụng cơ chế local progress của website **nếu bảo toàn lịch sử hiện hữu**. Không dùng danh tính người học, tài khoản hoặc điểm mastery được xác minh qua backend.
- **GIỚI HẠN PHẢI NÓI RÕ:** Mã JavaScript chạy phía trình duyệt không bảo mật được đáp án khỏi người kiểm tra mã nguồn. Local storage cũng không xác minh độc lập việc đã xem câu hay chưa. Không tuyên bố đây là bài thi chống gian lận, bí mật đề tuyệt đối hoặc chứng cứ mastery có xác thực.
- 18 câu SGK ChVI đã được NotebookLM PASS chỉ ở snapshot học thuật; **không được tự đưa nguyên đề/khóa đáp án đã giữ kín vào public GitHub** trước khi thống nhất lại mô hình self-check và điều kiện phát hành theo kiến trúc tĩnh. Bản demo hiện tại tiếp tục `TECHNICAL_DEMO_ONLY`.
- Tách **cổng thẩm định học thuật** khỏi **cổng QA website/thiết bị** và **cổng owner release**. Không đổi đánh giá NotebookLM của ChVI thành giấy phép deploy.

## 5. Cổng phát hành được sửa

BẮT BUỘC: content-to-page parity; canonical IDs và no-duplicate; Final Submit UI and no pre-submit answer reveal through ordinary UI; browser/mobile/real-device QA; GitHub build/navigation; URL/hosting/rollback; chủ dự án nghiệm thu.
**KHÔNG BẮT BUỘC:** Firebase learner login, private Worker/D1 staging, D1 import, online user allowlist, learner-bound exposure API hoặc backend manual rubric service.

**Cổng còn chưa chốt:** Thiết kế kiểm tra tĩnh với 18 item review và mức độ đảm bảo hợp lý, không giả vờ rằng browser có khả năng bảo mật ngân hàng đề. Cần một bản candidate mới được owner xem và chấp thuận theo kiến trúc không tài khoản.

`OWNER_ARCHITECTURE=GITHUB_STATIC_NO_ACCOUNTS` · `GEMINI_PROVIDER=KEEP_EXISTING_FUNCTIONAL_TRANSPORT` · `WORKER_D1_RELEASE_PATH=REJECTED` · `READINESS_PRODUCTION_SCOPE=REPLAN` · `MERGE_DEPLOY=NO`.
