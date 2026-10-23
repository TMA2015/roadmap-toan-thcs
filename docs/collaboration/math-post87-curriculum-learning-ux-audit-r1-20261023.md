# Self-Learning Math — Kiểm toán tổng thể sau khi phát hành 87 bài tự luận

**Audit ID:** MATH-POST87-CURRICULUM-LEARNER-JOURNEY-R1-20261023  
**Ngày:** 2026-10-23  
**Trạng thái:** SOURCE / QA EVIDENCE AUDIT COMPLETE · HUMAN A2 PENDING · NO SITE CHANGE  
**Đối tượng:** Website Toán THCS KNTT 6–9 phục vụ gia đình; hai đường học trên một tập kỹ năng dùng chung  
**Đã khóa:** `main` commit `6bfafa522a13de0cd6925c076c2e68262f6bdef6`; Written library blob `52da473e93101830ecbdb7ee6bb57c876586130f`.

## 1. Quy tắc và phạm vi bằng chứng

Dựa trên **Master Plan v1.2.1**, **Golden Learning Architecture**, và D1–D6 Academic Source & Depth Audit Rules. Đối chiếu dữ liệu phát hành `main` với các báo cáo lịch sử, không dùng con số ở ảnh chụp cũ làm thực trạng hiện tại. Hai lớp bằng chứng phải tách:

- **Đã có trong nguồn / có CI kỹ thuật:** dữ liệu và luồng UI có thật; chạy thành công trên trình duyệt mô phỏng trong GitHub Actions theo báo cáo phát hành. KHÔNG suy từ đó rằng trẻ tự hiểu bài, mọi lời giải trong ngân hàng đều đúng, hoặc Safari iPad thực đã được thử.
- **Được quan sát từ người học:** học sinh có tự tìm được thẻ đúng lớp, hiểu giải thích sau khi làm sai và tìm đúng bước tiếp theo. Đây là **HUMAN A2 OPEN** cho đến khi phụ huynh gửi kết quả quan sát; không tạo biên bản giả.

Không phát hành học liệu, viết lại câu cũ, thay đổi Readiness/Mastery, tự chấm tự luận vào điểm độc lập, hoặc động chạm dữ liệu học sinh trong đợt audit.

## 2. Độ bao phủ học thuật — kết luận đúng phạm vi

| Chiều | Tình trạng nguồn đã kiểm tra | Điều không được suy diễn |
|---|---|---|
| Kiến trúc & KNTT | 25 thư mục chuyên đề hiện hữu; ma trận KNTT có **39 chương** và **78 nhóm bài** (L6: 31; L7: 21; L8: 16; L9: 10); 78/78 hàng đã đối soát ánh xạ ngữ nghĩa theo ma trận 04/10 | Đây là **ma trận định danh/chương trình**, không phải 78/78 bài SGK đã được kiểm tra đủ D1–D6 trên bản hiện tại |
| D1/D2 lý thuyết/ví dụ | Có Core/Learning Workspace, các trang kiến thức chuyên đề, ví dụ/giải thích; đã có các đợt tăng cường nội dung và QA; biên bản học thuật riêng theo từng đợt | Không thể tuyên bố toàn bộ chiều sâu 25 chuyên đề đã được NotebookLM PASS chỉ từ việc đủ thư mục và trang web |
| D3 Micro/Practice | Báo cáo đóng phạm vi 10/10 ghi **131/131** họ kỹ năng có Practice; **100/100** họ KNTT-Core có Micro/Practice, với khoảng **3.163** câu Practice tại **snapshot 10/10** | Số lượng 3.163 là baseline được báo cáo ngày 10/10, **không** xác nhận số câu của mọi manifest ngày 23/10, cũng không chứng minh đa dạng mọi cấu trúc toán |
| Readiness | Baseline đóng 10/10: **100/100** họ KNTT-Core có bằng chứng Readiness chính và **237** item thuộc 21 file; 12 họ một item được rà KEEP_AS_IS, không có quota tự động | Không có nghĩa mỗi nhóm bài SGK có đánh giá độc lập riêng; không khẳng định trẻ “thành thạo” từ việc hệ thống đủ item |
| D4 tự luận | **87/87** item `academic_review.status=APPROVED`, 22/25 mã chuyên đề có ít nhất một item WX. Trong 87 item, **38 item có `kntt_placements`** (tổng 39 placements: G6 12, G7 9, G8 9, G9 8); 49 item còn lại là topic-first/hoặc các tầng hỗ trợ, chuyển tiếp, ôn thi, thử thách | Không bắt buộc 1 bài tự luận/1 bài SGK hoặc 1 bài/1 skill; `grade_overlay` không thay cho vị trí S1 được kiểm toán. 49 topic-first không đồng nghĩa 49 bài bị thiếu |
| D5 đề thi | 79 tài liệu nguồn đã được đối chiếu hình thức/cấu trúc ở audit 22–23/10; 12 câu bổ sung đã NotebookLM PASS và owner phát hành (9+3) | Không tuyên bố tất cả file là đề chính thức hay thống kê tần suất thi từ kho hỗn hợp |
| D6 gợi ý/ôn bù | 34 bài có `hint_steps` lưu trực tiếp trong canonical; **ba bài P2 khác** nhận gợi ý từ overlay giữ nguyên, với source SHA khớp thư viện 87. Luồng Core/Practice có phản hồi và ôn lại, Readiness chỉ trả lời sau Submit | Không có gợi ý không tự động là lỗi: nhiều bài ngắn không cần hint; bản ghi kỹ thuật của gợi ý không chứng minh trẻ hiểu phần giải thích |

**Chú ý dữ liệu nguồn cũ:** Các file `kntt-dimension-coverage-g7/g8/g9-v1.json` chụp ngày 08/10 có trường Written bằng 0 và các trạng thái Learn/Micro chưa sửa; **KHÔNG được dùng số đó để tuyên bố thiếu Written hoặc thiếu Core hiện nay**. Đối chiếu các lớp sửa độc lập: G7 Wave1/Wave2, G8 density Wave1 trạng thái CLOSED_DEPLOYED, G9 post-repair 09/10 `remaining_p0=p1=p2=0` **trong phạm vi G9 Learn/Micro**. Khi cần quyết định phát triển tiếp, phải dựng ma trận hiện hành từ các file `main`/manifest + receipt; giữ nguyên ma trận 04/10 để truy vết.

## 3. Luồng tự học — đã triển khai và phần chưa được chứng minh

Định hướng đúng là **Orient → Foundation → Learn → Practise → Self-check → Analyse errors → Remediate → Continue**. Người dùng có hai lối vào từ trang chủ: `Học theo lớp` và `25 chuyên đề`; cả hai dùng chung Core/Practice/Written; không nhân bản bộ kiến thức.

- **Findability theo lớp (P1):** `docs/hoc-theo-lop/index.md` có chương và bài KNTT, nhưng các link Core theo chương thường dẫn đến **Core dùng chung nhiều lớp**. Trang đã cảnh báo chọn đúng thẻ nhãn lớp. Không phải lỗi link; rủi ro còn phải xác nhận bằng quan sát học sinh *tự chọn được thẻ đúng* sau khi đi từ lớp/chương. CTA đầu trang chủ nhấn `Khám phá 25 chuyên đề`, còn `Học theo lớp` ở phần chọn lối vào bên dưới: chưa có A2 evidence cho trẻ nhỏ.
- **Hiểu lỗi và phục hồi (P1):** Micro/Practice có đánh giá sai đúng, giải thích được soạn sẵn và link luyện/ôn lại; Readiness không tiết lộ đáp án hay trợ giúp trong phiên làm, chỉ phản hồi sau nộp. CI và smoke cho **tính khả dụng kỹ thuật**; chưa có chứng cứ trẻ tự nói được *mình sai ở bước/điều kiện nào* và tự chọn ôn bù. Kiểm tra **chỉ các item học sinh gặp vướng**, không rà lại đại trà 3.000+ câu.
- **Bước tiếp theo sau bài (P1/P2):** Trong topic, Practice có mô hình luyện kỹ năng yếu với ngưỡng thận trọng (tối thiểu 3 lần, độ chính xác quan sát dưới 75%). Dashboard `Tiếp tục học` chủ yếu trỏ về các **đường học tĩnh**, chưa phải chỉ dẫn *bài SGK chính xác nên học tiếp* dựa trên bằng chứng đủ tin cậy. Chỉ phát triển một next-action gắn với item/skill có chứng cứ nếu thử A2 cho thấy trẻ bị kẹt; **không** tạo điểm mastery hay thuật toán suy đoán từ 1–2 lỗi.
- **Độc lập và bảo mật dữ liệu (P2):** Dashboard tách số lượt luyện và số bài Readiness đã nộp, không quảng cáo điểm tự luận tự chấm là mastery. Lịch sử theo **trình duyệt/thiết bị**; chuyển máy dùng sao lưu/khôi phục JSON thủ công, không đồng bộ Google/Firebase ngầm. Cần xác nhận thực tế iPad Safari/khôi phục với hồ sơ thử, không động vào dữ liệu học thật.
- **AI tùy chọn (P2):** Bộ QA đã có thử nghiệm Chrome mô phỏng transport AI bị chặn cho G6/G8. Đây là kiểm thử đường thoát **khi AI không dùng được**, không phải chứng nhận toàn website offline hoặc iPad Safari ngoài thực tế.

## 4. Các ưu tiên nên thực hiện, không kéo dài vô hạn

| Mức | Quyết định | Bằng chứng / giới hạn / Tiêu chí kết thúc |
|---|---|---|
| **P1-A** | **Nghiệm thu A2 bằng một lượt quan sát nhỏ** thay vì tiếp tục viết bài hàng loạt | Dùng `release-readiness-a2-learner-qa-r1.md`: A2-6 và A2-8 là hai mẫu chính; A2-7/A2-9 là cross-check khi phù hợp. Phụ huynh chỉ giao mục tiêu, để trẻ tự tìm và ghi 3 điều: **tự chọn đúng bài? giải thích được lỗi? tự tìm ôn lại?** Ghi thiết bị và số lần phải trợ giúp. Không đưa trẻ làm toàn 87 bài |
| **P1-B** | **Làm mới bản coverage D1–D6 cho hiện trạng 23/10** | Dựng ma trận 78 nhóm từ bản đồ KNTT hiện tại, chọn nguồn **Core, Micro, Practice, Written placements, Readiness**, phân biệt lesson-local / shared-topic / family-only / not validated. So sánh có chứng cứ với các đợt sửa đã merge. KHÔNG coi 38 item placement là tổng số bài học đủ/thiếu |
| **P1-C (chỉ nếu A2 ghi nhận vướng)** | **Sửa nhỏ hành trình** | Nếu chọn sai thẻ lớp: làm nổi đúng thẻ hoặc link “Bắt đầu từ bài này” **reuse card ID**; nếu trẻ không biết làm gì sau lỗi: nối “Ôn bước vừa sai” dựa trên `item_id` và skill đã kiểm chứng. Không tự động tạo curriculum thứ hai hay đánh giá kỹ năng sai từ một đáp án |
| **P2** | **Dọn trạng thái tài liệu và evidence governance** | Top `docs/collaboration/current-handoff.md` ngày 23/10 vẫn ghi GAP3 “staged/no deploy” dù PR #571 đã merge và `gh-pages` xuất bản 87. Cần ghi một checkpoint mới ở đầu, không xoá lịch sử. R27 40 câu MCQ còn là **queue về quyền gắn Skill**, không phải bằng chứng Practice thiếu câu hoặc cần bật bộ đếm thử nghiệm |

### Gói quan sát A2 ngắn, có thể gửi học sinh dùng ngay

**A2-6 / PC hoặc iPad:** “Con hãy tìm bài Toán 6 về số và phép tính trong đường Học theo lớp, đọc một thẻ đúng lớp, làm một câu, nếu sai thì đọc lời giải và tìm cách ôn lại.” Không chỉ chỗ bấm.

**A2-8 / PC hoặc iPad:** “Con hãy vào Toán 8 phần phân thức, tìm bài về điều kiện của mẫu khác 0. Làm một câu; nếu sai thì tự tìm lý do và một bài luyện lại.” Có thể mở thử tự kiểm tra nhưng không ép nộp khi chưa học.

**Ghi 3 kết quả ngắn cho mỗi hành trình:** `TÌM ĐÚNG BÀI: PASS/BLOCKED/UNCLEAR`; `HIỂU LỖI: PASS/BLOCKED/UNCLEAR`; `TÌM ÔN LẠI: PASS/BLOCKED/UNCLEAR`. Kèm thiết bị và số lần cần người lớn gợi ý. Không nhập thông tin cá nhân học sinh vào biên bản.

## 5. Phê duyệt và quyết định phát triển

**Hiện tại không có P0 mới được chứng minh bằng đọc nguồn/CI.** Hướng đúng là kết thúc vòng **coverage-source audit** bằng snapshot hiện hành + có **A2 thực học sinh**, rồi sửa đúng điểm nghẽn quan sát được. Đừng mở wave thêm bài chỉ vì số lượng D4 hay Readiness có vẻ không đều. Nếu A2 thực sự không có lỗi, ưu tiên ổn định gia đình dùng và giữ nguyên sản phẩm.

**Các nguồn trực tiếp quan trọng**
- `docs/assets/data/curriculum/kntt-coverage-matrix-6-9-v1.json` (04/10; cấu trúc 78 nhóm, 39 chương; identity-only).
- `docs/assets/data/curriculum/kntt-dimension-coverage-g6/g7/g8/g9-v1.json` (08/10; ảnh chụp cũ, không được lấy trạng thái thiếu làm hiện tại).
- `docs/assets/data/curriculum/kntt-g9-post-repair-closure-r1.json` và `kntt-g8-density-wave1-r1.json`.
- `docs/assets/data/curriculum/practice-post-wave1-closure-r1.json` và `readiness-coverage-post-wave1-r1.json` (10/10 snapshots).
- `docs/assets/data/written-exercises/written-exercise-library-v1.json` (87 approved live).
- `docs/collaboration/math-v1-pedagogical-readiness-audit-r2-20261013.md`, `math-learner-ux-evidence-standard-r1-20261014.md`, `release-readiness-a2-learner-qa-r1.md`, `math-v1-a2-feedback-noai-technical-smoke-r1.md`.
- `docs/assets/javascripts/class-learning-v1.js`, `practice-engine-v2.js`, `assessment-engine-v1.js`, `math-progress-dashboard-v1.js`.
- GitHub Actions PR #571: QA run `39923690153` SUCCESS (80/80 steps); đây là **technical PASS**, không phải HUMAN A2.

**No runtime/data/files outside this documentary audit modified.**
