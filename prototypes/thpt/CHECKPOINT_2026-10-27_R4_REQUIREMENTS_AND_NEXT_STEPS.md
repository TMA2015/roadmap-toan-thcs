> **CHECKPOINT KIẾN TRÚC MỚI 27/10/2026:** Tài liệu này là lịch sử trước quyết định Owner Dual Complete Paths v2.0. Hiện SGK và Chuyên đề là hai lối học hoàn chỉnh; SGK có Core/Practice/Tự kiểm tra **cuối chương**, Chuyên đề có **chỉ 3 phần Kiến thức/Luyện tập/Tự kiểm tra**, shared item ID nhiều placement/role. Kiểm tra trạng thái trong `THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md` và Project Sources v2, không khôi phục Topic Core tab theo checkpoint này.

# CHECKPOINT — Self-Learning Math THPT, 27/10/2026
**Tiếp tục dự kiến:** 28/10/2026 (người dùng sẽ chủ động quay lại)  
**Owner request:** TẠM DỪNG, lưu yêu cầu và checkpoint; KHÔNG tiếp tục phát triển, merge hoặc deploy hôm nay.  
**Repository duy nhất:** `TMA2015/roadmap-toan-thcs` — THCS và THPT **cùng một dự án**.  
**Work branch:** `feature/thpt-g10-b16-knowledge-pilot-r1-20261026`  
**PR:** [#612](https://github.com/TMA2015/roadmap-toan-thcs/pull/612) — **OPEN / DRAFT / NOT MERGED**.  
**Tracking:** [Issue #611](https://github.com/TMA2015/roadmap-toan-thcs/issues/611) — **OPEN**.  
**THCS acceptance:** [Issue #578](https://github.com/TMA2015/roadmap-toan-thcs/issues/578) — **COMPLETED / CLOSED**.  

## A. Quy tắc bắt buộc: KHÔNG đụng Toán THCS

1. **Toán THCS đã nghiệm thu, phải giữ nguyên tất cả**: header, nav, sidebar, trang chủ, bài học, đồ thị/ảnh, routes, search, CSS/JS, tài liệu, ngân hàng câu hỏi/đáp án, tiến độ và dữ liệu người học. Mọi ý tưởng chỉnh sửa THCS sẽ để thành **công việc riêng trong tương lai**, không thực hiện trong THPT.
2. **Lối tắt THCS hiện tại `7 + 25` giữ nguyên**. Câu nói cũ “THCS còn 5 + 25” là **hiểu nhầm và đã rút lại**. Tuyệt đối không chỉnh `docs/assets/javascripts/sticky-nav-v1.js` để làm nhỏ lối tắt THCS.
3. THPT chỉ **kế thừa kiểu trình bày của MkDocs Material/THCS**, không thay/chuyển cả website THCS hoặc tạo một giao diện micro-app mới. R1/R2 standalone HTML là **bản tham khảo hành vi đã bị loại về mặt thiết kế giao diện**; R3/R4 là nguồn quyết định mới.
4. Vẫn sử dụng **chung repo và website**, nhưng học liệu, Core IDs, question banks, mastery, Readiness, Written, lưu trữ/attempts và tiến độ **THPT tách namespace** khỏi THCS; không đăng nhập bắt buộc và không dùng API trả phí.

## B. Điều hướng ở cấp website

- Chỉ **thêm một trang bìa chọn chương trình** theo ảnh #5 chủ dự án gửi: **Toán THCS** (giữ nguyên hệ đã chốt), **Toán THPT** (trang mới), **SAT/ACT** (chưa phát hành; khi phát triển mới gắn liên kết tại thẻ này). Đây là một trang điều hướng nhỏ, không phải trang giải thích học tập. **Chưa được thay root `docs/index.md` hoặc đổi deep link THCS** trước kế hoạch/QA chuyển đường dẫn riêng.
- **Trang chủ THPT giản lược**, chỉ có các lối vào SGK KNTT, chuyên đề, thư viện bài tập, tiến độ (Hướng dẫn có thể nằm nav chính); **không** cây kiến thức, roadmap, hero giải thích dài.
- Giữ nguyên **nav chính navy phía trên**, branding, tìm kiếm, sáng/tối, sidebar trái và hệ thẻ giao diện đã nghiệm thu THCS.
- THPT có **nút lối tắt RIÊNG `5 + N`**, không ảnh hưởng nút THCS. Chính xác năm mục đầu, theo thứ tự:
  1. **Trang chủ** (THPT)
  2. **Học theo SGK**
  3. **Chuyên đề**
  4. **Thư viện bài tập**
  5. **Tiến độ học tập**
- `N` = **số chuyên đề THPT thực tế thuộc danh mục đã kiểm duyệt/phát hành**. **KHÔNG** mặc định 25. Trong bản mẫu có thể ghi `1 chuyên đề mẫu` rõ ràng; không nhận một mẫu là danh mục thực tế. Không đưa Hướng dẫn, Bản đồ học tập, AI hoặc trang bìa vào năm nhóm lối tắt này. Nav chính vẫn còn.
- Chỉ thêm code/route **scoped `/thpt/` hoặc `/thpt-preview/`**, không sửa hành vi shortcuts trên THCS.

## C. Hai hệ thống kiến thức THPT độc lập và đủ nội dung

**1. Học theo SGK KNTT (trục ngang):**
- `Lớp → Chương → Bài`. Trang tổng quan SGK **giống thư viện chuyên đề THCS** theo ảnh #6: tìm kiếm lớp/chương/bài, accordion/cửa sổ theo **Lớp 10/11/12**, chương trong lớp. Sidebar trái: Lớp → Chương → Bài; **Thư viện Core ở cuối**.
- Chương có tab hoặc bộ chọn bài khi hiệu quả trên desktop/mobile; **mỗi bài có URL duy nhất/deep link**.
- **Mỗi bài SGK có lý thuyết đầy đủ trong phạm vi SGK bài đó** nhưng ngắn, đúng trọng tâm, công thức, điều kiện, ý nghĩa, ví dụ. Tiêu đề gần SGK như **Khái niệm / Định nghĩa, Tính chất / Công thức / Đồ thị, Ví dụ, Luyện tập, Vận dụng**; chọn mục phù hợp từng bài, **không ép bài nào cũng đủ mọi mục**; không đặt tiêu đề lạ kiểu “Nhận ra parabol”.
- **Core bên dưới mỗi bài**, tập trung tương tác luyện tập và gợi ý; **không có tab Kiến thức trong Core THPT** (vì lý thuyết đã ở bài học).
- Một **Thư viện Core KNTT** riêng để duyệt/lọc thẻ Core theo lớp/chương/bài/kỹ năng, nhưng cùng ID/keys/attempts.

**2. Học theo chuyên đề (trục dọc):**
- Trang **Tổng quan chuyên đề THPT** theo đúng ảnh #3/#6 THCS: nhóm chuyên đề, tìm kiếm, các thẻ trong accordion; sidebar trái truy cập nhanh từng chuyên đề. **Không tạo CĐ01 chỉ để giới thiệu/bản đồ chung**; chuyên đề đầu tiên là chủ đề toán thực.
- Mỗi chuyên đề có **bốn điểm đến chính** như THCS: **Thẻ Core / Kiến thức / Luyện tập / Tự kiểm tra**.
- Kiến thức chuyên đề **hoàn chỉnh trong phạm vi chuyên đề**, xuyên lớp, có thể lặp một ít phần lý thuyết SGK để tự học độc lập.
- **Trang Kiến thức rút gọn**, sử dụng các tab hợp lý:
  - **Bản đồ kiến thức**, nếu đem lại định hướng thực sự.
  - **Kiến thức** (tab theo nhóm khái niệm / công thức / định lý có giá trị; số tab tùy từng chuyên đề).
  - **Kiến thức liên quan**, nối ngang (SGK), dọc (chuyên đề), nguồn/tiền đề/truy nguyên.
  - **Dạng bài** (mục rất quan trọng, nhiều tab/dạng), nhận diện, phương pháp, ví dụ và link sang Practice và Written.
  - **Thi tốt nghiệp THPT**: tab/bộ lọc **nằm bên trong Dạng bài**, không tách mục/nhân bản ngân hàng dạng bài. Các bài thi khác (nếu có) cần nguồn riêng. Gợi ý tương tự “thi vào 10” THCS chỉ là ý tưởng cải tiến **tương lai**, không sửa THCS hiện tại.
  - **Lỗi sai thường gặp** chỉ giữ nếu thực sự bổ ích.
- **Bỏ khỏi trang Kiến thức THPT**: “Luyện tập tiếp theo”, “Tự kiểm tra mức độ sẵn sàng”, “Liên kết Roadmap”, “Điều kiện hoàn thành”, các đoạn mục tiêu/điều hướng lặp thừa. Có thể giữ giới thiệu ngắn đầu bài; **tiêu chí đạt chuyên đề đặt ở tab Tự kiểm tra**.
- **Bỏ TOC/menu bên phải CHỈ cho trang Kiến thức chuyên đề THPT**, vì đã có menu chuyên đề trái và thanh di chuyển nhanh trong nội dung. **Không** bỏ TOC phải ở các trang THCS/trang khác một cách toàn cục.

## D. Hoạt động luyện tập — giữ nguyên mô hình THCS

| Thành phần | Hành vi bắt buộc |
|---|---|
| **Core** | Tương tác theo kỹ năng, **có gợi ý**, chấm/phản hồi sau kiểm tra, **1 Core canonical ID** truy cập từ 3 nơi: (1) bài SGK, (2) Thư viện Core KNTT, (3) chuyên đề. Không nhân ba dữ liệu/attempt. |
| **Luyện tập chuyên đề (Practice)** | Tương tác theo dạng/kiến thức tổng hợp, **có gợi ý** và chữa lỗi, câu hỏi/chấm lưu riêng Core. |
| **Tự kiểm tra (Readiness)** | Tương tác độc lập, **không gợi ý**, chuyển Previous/Next, có thể sửa đáp án trước Final Submit, **không chấm/không tiết lộ lời giải cho đến sau Final Submit**. Có tiêu chí đánh giá. |
| **Tự luận (Written)** | Đọc đề, **làm trên giấy**, có gợi ý tùy chọn, chủ động mở lời giải và **rubric** tự chấm; không giả vờ có AI chấm giấy hoặc tự cộng vào Readiness. |
| **Bài mỏ neo** | Là bài tiêu biểu **trong cùng thư viện Written**, có thể thuộc mục “Bài mẫu tiêu biểu”; gợi ý cách phân tích, chọn phương pháp và trình bày, không tạo ngân hàng/engine độc lập. |

- **Thư viện bài tập THPT giữ y hệt tổ chức thư viện THCS theo ảnh mới nhất**: Giới thiệu thư viện → Bài tập tự luận → Bài mẫu tiêu biểu → **Bản đồ kỹ năng**. Hai ô lớn: “Làm bài tự luận” và “Học bài mẫu tiêu biểu”. Giữ tìm/lọc, gợi ý, lời giải, rubric.
- **Bản đồ kỹ năng trong thư viện vẫn giữ**; **khác hoàn toàn** “Bản đồ học tập” trong nhóm lối tắt (THPT không có lối tắt Bản đồ học tập).
- Liên kết từ Dạng bài → Practice và Thư viện tự luận/Anchor **đúng canonical ID**, không nhân bản học liệu.
- **Infographic**: không quota; nội dung HTML/MathJax là chính, giữ/tạo sơ đồ hình học, đồ thị, bảng biến thiên, xác suất... **chỉ khi thực sự có giá trị toán học**.

## E. Nguồn học thuật và kiểm duyệt

- Chủ dự án **đã gửi ZIP SGK/SBT** trong các lần trao đổi trước và **đã có bộ SGK KNTT trên Google Drive**, không yêu cầu gửi lại khi chưa kiểm tra nguồn. Thư mục Drive đã xác nhận: [FULL BỘ SGK TOÁN KNTT LỚP 6–12](https://drive.google.com/drive/folders/1hTruV5EbqaHt6r2XqcNSdIHcnckyZPAU). Lớp 10 có SGK 1+2, SBT 1+2; lớp 11 có SGK 1+2, SBT 1+2; thư mục lớp 12 từng liệt kê SGK 1+2. Không suy đoán các file SBT lớp 12 chưa xác minh.
- Chủ dự án đã **tạo notebook NotebookLM Toán THPT** và đưa SGK + SBT vào đó, dùng để **review học thuật**. Assistant chưa kết nối trực tiếp NotebookLM; gửi **1 gói Markdown** cho review, nhận verdict/evidence rồi sửa, **không tuyên bố academic PASS trước khi có biên bản**.
- Bắt đầu **Toán 10, Chương VI, Bài 16: Hàm số bậc hai** làm golden pilot; kiểm tra đầy đủ chuẩn kiến thức, đồ thị/giá trị min-max và các bài mẫu từ SGK/SBT trước khi mở rộng.
- Mục tiêu tổng quan **79 bài / 24 chương** hiện là **khung SGK sơ bộ**, không phải danh sách 79 bài đã kiểm duyệt hoặc 79 lesson đã biên soạn.
- SAT/ACT là chương trình tương lai, chỉ một thẻ bìa “Chưa phát hành”, không phát triển trong wave hiện tại.

## F. Trạng thái kỹ thuật đã tạo tính tới lúc tạm dừng

- **PR #612 là Draft, chưa merge, chưa phát hành.** Tại lúc bắt đầu checkpoint: head `005836c8c5e29c9f956c5c8db4966d02ff5e6d3b` (sẽ đổi bởi commit checkpoint này), baseline main `ea0974da52417b0107ef6270eca1923d7d89ce9b`.
- Trên nhánh đã tạo **25 tệp thay đổi** trước checkpoint; tất cả ở **`docs/thpt-preview/**`**, **`prototypes/thpt/**`**, **`review-packets/thpt-*`** và các tệp JS/CSS **`thpt-r4-preview`**. **Không có file THCS, `mkdocs.yml` hay `docs/index.md` bị sửa trong PR.**
- Giao diện mẫu đã có **trang bìa 3 chương trình, home THPT, tổng quan SGK, Chương VI/Bài 16, Thư viện Core, tổng quan chuyên đề, chuyên đề Hàm số 4 điểm đến, Thư viện bài tập, Written/Anchor, Bản đồ kỹ năng, Tiến độ và Hướng dẫn**. Nội dung/demo **chưa đủ để coi là bản sản phẩm**.
- **R1/R2 standalone HTML bị thay thế về layout** nhưng có thể tham khảo ý tưởng tương tác. R3/R4 ghi các quyết định UI shell và navigation.
- **CẢNH BÁO CHO LẦN TIẾP TỤC:** Hiện các trang `docs/thpt-preview/**` và asset `thpt-r4-preview.{js,css}` có trên nhánh **NHƯNG CHƯA ĐƯỢC GẮN CẤU HÌNH `mkdocs.yml`/preview shell** nên chưa thể khẳng định chúng hoạt động như bản xem thử hoàn chỉnh (menu sidebar/nav, search, shortcut, JS/CSS loading). **Chưa có bằng chứng exact-head CI/Playwright PASS/SGK review/parent sign-off cho bản R4 cuối.** Cần rà soát các liên kết tương đối, tab/chương, hạ tầng MkDocs, dark mode, desktop/iPhone/iPad và đúng toán học. Không dùng link preview như đã deploy nếu chưa xác minh.
- **Nút lối tắt THPT `5 + N` MỚI ĐƯỢC CHỐT TRONG ĐẶC TẢ, CHƯA IMPLEMENT UI.** Tuyệt đối không làm biến đổi nút THCS `7 + 25`.
- **Cấm** merge PR Draft hoặc thay `main`, root trang chủ THCS và GitHub Pages theo các thay đổi chưa phê duyệt.

## G. Hướng tiếp tục ngày 28/10/2026

1. **Mở file checkpoint này và kiểm tra PR #612, Issue #611, head SHA và diff**. Không khởi động lại dự án, không nhân bản repo hoặc xóa các phiên bản cũ.
2. Tiếp tục từ **R4** (không làm lại R1/R2): gắn **preview MkDocs Material thực** với nav/sidebar tương tự THCS và CSS/JS riêng THPT, chỉ trong nhánh và **không xâm phạm trang chủ/prod THCS**.
3. Hoàn thiện **nút lối tắt THPT chính xác `5 + N`** (Trang chủ, SGK, Chuyên đề, Thư viện bài tập, Tiến độ). Giữ THCS `7 + 25` bất biến. Chạy test route-scoped logic.
4. Kiểm tra **trang tổng quan SGK/Chuyên đề** dạng accordion/tìm kiếm, sidebar trái; 4 mục chuyên đề; tab Kiến thức/Dạng bài; bỏ TOC phải scoped trang Kiến thức THPT; đối chiếu Thư viện bài tập thật của THCS.
5. Chạy QA xây dựng và trình duyệt, sửa các liên kết; rõ ràng phân biệt **demo học liệu** với nội dung đã kiểm duyệt.
6. Chuyển gói [NotebookLM THPT R2](../../review-packets/thpt-g10-b16-r2/01_NOTEBOOKLM_B16_DUAL_ROUTE_AND_EXERCISES_R2.md) cho reviewer, chỉ áp dụng chỉnh sửa có chứng cứ.
7. Sau **owner UI approval, academic PASS và CI exact-head**, mới bàn merge/deploy THPT và trang bìa root. Không bắt đầu SAT/ACT hoặc sửa THCS trong wave này.

**Ghi nhận cuối ngày:** DỪNG tại trạng thái **R4 requirements recorded / THPT draft pages created / THPT scoped shortcut not implemented / MkDocs preview not wired / NotebookLM academic review outstanding / PR Draft / THCS untouched**. Không có nhiệm vụ tự động chạy qua đêm. Chủ dự án tiếp tục vào ngày 28/10 bằng thông điệp “Tiếp tục Toán THPT từ checkpoint”.
