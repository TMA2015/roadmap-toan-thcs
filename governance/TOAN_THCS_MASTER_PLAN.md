# TOÁN THCS — KẾ HOẠCH TỔNG THỂ VÀ QUY TẮC NGUỒN

**Loại tài liệu:** Project Charter / Master Plan — tài liệu định hướng dài hạn dùng làm nguồn Project  
**Phiên bản:** 1.1.1 — bổ sung định danh sản phẩm ngày 29/09/2026  
**Phạm vi:** Nền tảng tự học Toán từ THCS, thiết kế mở cho THPT, SAT/ACT Math và tư duy logic  
**Tính chất:** Quy tắc và định hướng bền vững; **không phải nhật ký tiến độ, biên bản lỗi hay báo cáo phiên làm việc**.
**Nguồn chuẩn trong repository:** governance/TOAN_THCS_MASTER_PLAN.md. Bản dùng trong NotebookLM hoặc Project phải ghi cùng phiên bản, không duy trì một bản Master Plan thứ hai khác nội dung.

> **Cách sử dụng:** Khi tiếp tục dự án trong cuộc trò chuyện mới, đọc tài liệu này để hiểu mục tiêu và các quyết định kiến trúc đã thống nhất. Trước mọi thay đổi, phải kiểm tra GitHub `main` và các hồ sơ công việc hiện hành để biết trạng thái thực tế. Không dùng một ghi chú tiến độ cũ để ghi đè tình trạng mã nguồn mới nhất.

---

## Định danh sản phẩm

- **Tên sản phẩm chính thức:** **Self-Learning Math**, thuộc hệ sinh thái **G Learning — Learn · Grow · Go**.
- **AI Tutor** là tính năng trợ giảng theo yêu cầu trong Self-Learning Math, không phải tên sản phẩm, cũng không thay thế mạch nội dung và quy trình tự học.
- Giữ `roadmap-toan-thcs` làm tên repository và đường dẫn GitHub Pages hiện hành để bảo toàn URL, ID, tích hợp và dữ liệu. Tên kỹ thuật cũ không quyết định tên sản phẩm mới.
- Khi tiếp nối phiên làm việc, ưu tiên tên chính thức từ nguồn này thay cho cách gọi cũ trong chat, tài liệu lưu trữ hoặc log tiến độ.

## 1. Tầm nhìn, đối tượng và kết quả cần đạt

### 1.1. Sứ mệnh

Xây dựng một nền tảng **miễn phí, có cấu trúc, dễ tự học và có thể lớn lên cùng học sinh**, không chỉ là kho công thức hoặc bộ câu hỏi. Học sinh có thể nhận biết mình đang ở đâu trong toàn bộ lộ trình, kiến thức nào phải biết trước, học thế nào, làm bài đến đâu và cần làm gì tiếp theo.

Giai đoạn đầu tập trung làm chắc chương trình **Toán THCS lớp 6–9**, dùng **Kết nối tri thức (KNTT)** làm chuẩn chương trình chính. Mục tiêu học nhanh có định hướng là hoàn thành kiến thức THCS vào cuối hè sau lớp 8 để lớp 9 ưu tiên củng cố và thi vào lớp 10; đây là lộ trình lựa chọn, không áp đặt cho mọi học sinh.

Về dài hạn, cùng nền tảng có thể bổ sung Toán THPT lớp 10–12, SAT/ACT Math và module suy luận/tư duy logic. Trước mắt, không hy sinh chất lượng THCS để chạy theo phạm vi lớn.

### 1.2. Người dùng và tiêu chuẩn tự học

- Học sinh có thể bắt đầu từ lớp 6, chưa biết cấu trúc toàn bộ chương trình; giao diện, thuật ngữ và hướng dẫn phải tự giải thích được.
- Có đường vào theo **lớp/chương/bài đang học ở trường** và đường vào theo **25 chuyên đề**; hai đường dùng lại cùng nội dung và skill.
- Học sinh muốn học trước phải được cho biết điều kiện tiên quyết, không bị đẩy tới bài vượt nền.
- Phụ huynh có thể thấy tiến trình và điểm cần hỗ trợ mà không cần hiểu cấu trúc dữ liệu kỹ thuật.
- Học sinh tự chủ: hệ thống đề nghị ôn bù, không dùng một bài kiểm tra hay điểm số để khóa cứng quyền học tiếp.

### 1.3. Tiêu chí thành công

Một học sinh phải trả lời được năm câu hỏi: **(1) Em đang học gì? (2) Em cần biết gì trước? (3) Em học và luyện ra sao? (4) Em làm độc lập được đến đâu? (5) Em nên học/ôn gì tiếp theo?** Nếu website chỉ có nội dung và bài tập nhưng học sinh không tự xác định được hành động tiếp theo thì mục tiêu sản phẩm chưa hoàn tất.

---

## 2. Kiến trúc học thuật: một mạch kiến thức dọc

### 2.1. Vertical Spine

**25 chuyên đề là mạch kiến thức dọc ổn định**, không tổ chức thành bốn kho nội dung tách biệt cho lớp 6, 7, 8 và 9. Các cách nhìn theo lớp/sách/mục tiêu thi chỉ là lớp ánh xạ (mapping/overlay) lên cùng chuyên đề và skill.

- CĐ01: bản đồ chương trình và định hướng.
- CĐ02–12: Số và Đại số.
- CĐ13–20: Hình học và Đo lường.
- CĐ21–23: Thống kê và Xác suất; **CĐ22 là cầu nối THPT, không tự động là Core THCS**.
- CĐ24: bài toán thực tế và mô hình hóa liên chuyên đề.
- CĐ25: tổng hợp, chiến lược và ôn thi vào lớp 10.

Không coi số thứ tự chuyên đề là thứ tự bắt buộc học tuyến tính. Thứ tự cá nhân phải xét chương trình, trình độ và kiến thức tiên quyết.

### 2.2. Các tầng nội dung không được trộn lẫn

| Tầng | Mục đích | Quy tắc |
|---|---|---|
| **KNTT-Core** | Chuẩn cần học theo lớp/chương/bài KNTT | Là căn cứ cho Core Readiness. |
| **Core-Support** | Biểu diễn, kiến thức hỗ trợ, tiền đề cần làm rõ | Không tự động biến thành chuẩn đánh giá độc lập. |
| **Entrance10** | Ứng dụng, tổng hợp và chiến lược thi vào 10 | Không được trộn vào điểm hoàn thành Core. |
| **Specialized-Challenge** | Mở rộng tự chọn, thi chuyên, suy luận sâu | Không bao giờ là điều kiện khóa Core. |
| **THPT-Bridge** | Cầu nối để học sinh nhìn trước kiến thức lớp 10 | Hiển thị tách biệt, không gắn nhãn Core THCS. |

**Độ khó của câu hỏi không đồng nghĩa với tầng chương trình.** Việc một dạng hay xuất hiện trong đề thi không làm nó trở thành yêu cầu bắt buộc của SGK. Khẳng định tần suất đề thi phải dựa trên tập đề cụ thể theo địa phương/năm.

### 2.3. Mapping theo sách và lớp

Mapping KNTT 6–9 là chỉ mục để dẫn học sinh từ chương/bài trong SGK đến các thẻ kiến thức, kỹ năng và bài luyện phù hợp. Trong một chuyên đề dùng chung nhiều lớp, **không mặc định toàn bộ thẻ đều thuộc lớp đang chọn**. Khi thay đổi mapping phải kiểm tra nguồn SGK, ID và ranh giới Core/Support/Bridge.

### 2.4. Knowledge Graph

Đồ thị liên kết ở cấp **skill**, không chỉ tên chuyên đề. Phân biệt rõ:

- `PREREQUISITE`: kiến thức thực sự cần để làm kỹ năng đích;
- `SEQUENCE`: thứ tự học hữu ích, không mặc nhiên là nguyên nhân gây lỗi;
- `CROSS_LINK`: liên hệ liên ngành/chuyên đề;
- `REMEDIATION`: đường ôn bù được đề nghị;
- quan hệ ứng dụng/mở khóa/mở rộng khi phù hợp với schema.

Chỉ kích hoạt quan hệ đủ tin cậy sau kiểm định. Không kết luận "vì A học trước B nên học sinh sai B là do yếu A". Đồ thị đề nghị cách học, không quyết định cứng số phận tiến độ của học sinh.

---

## 3. Cấu trúc chuẩn của trải nghiệm tự học

### 3.1. Chu trình xuyên suốt

**Định vị → Nền tảng → Học → Luyện → Tự kiểm tra → Phân tích lỗi → Ôn bù/Ôn giãn cách → Học tiếp.** Hệ thống cần hiển thị đường đi này bằng ngôn ngữ học sinh hiểu được, thay vì chỉ cung cấp liên kết rời rạc.

### 3.2. Golden Template: ba không gian rõ ràng

1. **Học / Learning Workspace:** thẻ kiến thức ngắn, giải thích vì sao, khi nào áp dụng, ví dụ trực quan, lỗi thường gặp; mỗi thẻ có micro-practice kiểu `Base → Trap → Apply`, phản hồi ngay. Có thể xin gợi ý hoặc Tutor. Mục luyện tập/tự kiểm tra trên trang kiến thức chỉ dẫn sang không gian riêng, không nhân bản ngân hàng bài tập dài.
2. **Luyện / Practice Room:** ngân hàng câu hỏi tương tác theo skill, bài luyện điểm yếu, phản hồi và gợi ý từng mức; song song giữ bài tự luận để học sinh trình bày trên giấy/vở, lời giải mở khi chủ động xem. Hiển thị Core/Entrance10/Challenge rõ ràng.
3. **Tự kiểm tra / Core Readiness:** làm độc lập, không hint/Tutor, không hiện đúng sai từng câu, phản hồi **sau khi nộp**; tính theo kỹ năng được đánh giá, dữ liệu tách khỏi dữ liệu luyện tập. Trạng thái gợi ý như `READY`, `REVIEW_RECOMMENDED`, `MORE_EVIDENCE_NEEDED` không được diễn đạt thành chứng chỉ nắm vững tuyệt đối hoặc khóa quyền học.

Bất cứ thay đổi phá vỡ Golden Template đã đóng băng phải tạo phiên bản quy chuẩn mới và kiểm định tương thích, không sửa ngầm riêng từng chuyên đề.

### 3.3. Nội dung mỗi thẻ/bài

Nội dung học nên trả lời: **khái niệm là gì; vì sao đúng; dấu hiệu dùng; điều kiện áp dụng; ví dụ; lỗi phổ biến; ứng dụng kế tiếp**. Đối với bài toán: nêu dữ kiện, yêu cầu, tư duy phân tích, cách lựa chọn công cụ, các bước và kiểm tra kết quả. Giải thích quá dài cần chia lớp thông tin; đừng giấu giả thiết quan trọng.

Duy trì infographic bản đồ kiến thức, ví dụ điển hình, trang tóm tắt để học sinh tự ghi chép (kể cả chỗ trống vẽ hình), mạch trước/sau và dấu hiệu cho thấy nên quay lại phần nền. Không tô vẽ "độ quan trọng/tần suất thi" thiếu nguồn.

**Hai chức năng infographic phải phân biệt:** (1) bản đồ/công thức/quy trình giúp hệ thống hóa và nhớ lại; (2) hình diễn giải bản chất, ví dụ biến đổi từng bước và phản ví dụ giúp hình thành hiểu biết. Hình loại (1) không mặc nhiên dạy được một khái niệm mới. Rà soát cả nội dung SVG thực tế và lời giải thích, không chỉ đếm số lượng hình hoặc xem phong cách.

### 3.4. Điểm vào theo lớp và người học nhỏ tuổi

Từ trang chủ, học sinh chọn lớp/chương/bài, thấy **phạm vi đúng của lớp đó**, mở bài, luyện và tự kiểm tra; sau đó có CTA "Ôn nền", "Luyện thêm" hoặc "Học tiếp". Tránh yêu cầu trẻ hiểu các thuật ngữ `metadata`, `schema`, `assessed_skill` trong giao diện. Đường học trước cần chỉ rõ nội dung tiền đề và phần mở rộng tự chọn.

### 3.5. Cầu nối giữa kỹ năng riêng lẻ và bài tổng hợp

Dẫn học sinh từ **nhận diện công cụ → quyết định và giải thích lý do → ghép các bước → tự hoàn chỉnh → chuyển giao sang bài thay đổi cấu trúc**. Ví dụ giải mẫu cần nêu vì sao chọn cách; sau đó giảm dần gợi ý. Cầu nối này áp dụng từ các chuyên đề nền tảng, không chờ đến CĐ25.

Một đáp án cuối đúng của bài tổng hợp không chứng minh học sinh làm độc lập được từng kỹ năng hỗ trợ. Muốn đánh giá bước nào yếu, cần yêu cầu chính bước đó hoặc lời giải thích của học sinh; supporting skill không tự nhận điểm mastery từ một câu ghép.

### 3.6. Kiểm thử học sinh hiểu bản chất

Sau khi học khái niệm nền mà không mở lời giải, quan sát học sinh: **(1) giải thích bằng lời của mình; (2) phát hiện và giải thích ví dụ sai/phản ví dụ; (3) vận dụng vào tình huống chưa gặp**. Ghi lại chỗ vướng, mức hỗ trợ và điều chỉnh nội dung. CI xanh, infographic đẹp, tỷ lệ trắc nghiệm đúng hoặc việc học sinh nhận ra công thức không đủ để kết luận đã hiểu sâu. Đây là kế hoạch kiểm thử thực tế; không khẳng định toàn bộ 25 chuyên đề đã vượt qua.

---

## 4. Ngân hàng bài tập, đánh giá và learner evidence

### 4.1. Định danh và dữ liệu

Mỗi item có ID ổn định, phiên bản, chuyên đề, skill được đánh giá chính, tag/dạng bài, tầng chương trình, đáp án/lời giải/gợi ý và nguồn/QA thích hợp. Không tự ý đổi ID cũ hoặc xóa bằng chứng học tập khi sửa câu hỏi; nếu thay nội dung ảnh hưởng nghĩa đáp án cần migration hoặc phiên bản mới có truy vết.

### 4.2. Hai nguồn bằng chứng khác nhau

- **Formative evidence:** micro-practice và Practice Room, số lần thử/đúng theo tag, mức gợi ý đã dùng, kiểu lỗi và lịch sử luyện.
- **Assessment evidence:** Readiness sau Submit, số câu đã trả lời, kết quả theo assessed skill, trạng thái sẵn sàng.

Không cộng cơ học hai nguồn thành một điểm mastery. Mỗi câu chấm có **một assessed skill chính**; `supporting_skills` chỉ bổ trợ, không tự động bị cộng/trừ điểm khi một câu đúng/sai.

### 4.3. Từ điểm số tới khuyến nghị học

Tỷ lệ đúng là thông tin mô tả, **không đủ để khẳng định đã hiểu sâu**. Tách đúng không gợi ý, đúng sau gợi ý, sai kéo dài, tốc độ, lỗi lặp lại và kết quả ở lần kiểm tra sau. Dữ liệu ít phải nói "chưa đủ bằng chứng", không chẩn đoán chắc chắn. Khi gợi ý ôn bù, ưu tiên một kỹ năng nền cụ thể, giải thích được quan hệ với bài đích và có bài kiểm tra lại sau ôn.

Đánh giá tự luận: ưu tiên rubric theo bước và đối chiếu có trách nhiệm; không tuyên bố tự chấm tương đương đại số/hình học nếu chưa có công cụ đáng tin cậy. Bài thi tự biên soạn phải phân biệt với đề chính thức.

### 4.4. Quyền lựa chọn và dữ liệu dài hạn

Học sinh có thể xem đề nghị và quyết định học tiếp; không đặt mốc 100% cứng. Ôn giãn cách, hồ sơ dài hạn và đồng bộ đa thiết bị là phần phát triển theo giai đoạn. Không tự nhận hiện đã có các năng lực chưa triển khai. Bảo toàn dữ liệu học sinh khi thay schema, backup/migrate/test trước thay đổi lưu trữ.

### 4.5. Bài tự luận trên giấy và phạm vi chấm điểm

Phân biệt bài luyện có hệ thống chấm, bài kiểm tra độc lập có hệ thống chấm và bài tự luận **do học sinh tự đối chiếu rubric trên giấy**. Không gộp điểm học sinh tự chấm vào Core Readiness hay kết luận hệ thống đã xác minh được bài làm. Mặc định đề tự luận gồm đề riêng, lời giải đầy đủ, rubric theo bước và đường quay lại ôn lỗi. Không bắt học sinh gõ lời giải dài, nộp ảnh, tạo kho lưu trữ hoặc hứa AI chấm chữ viết tay khi chưa có năng lực đáng tin cậy và nhu cầu thực chất.

---

## 5. AI Tutor: trợ giảng, không thay chương trình

- AI được kích hoạt theo yêu cầu của học sinh; hỗ trợ **giải thích từ đầu**, hỏi đáp trong trang kiến thức, gợi ý nhỏ đến sâu, phân tích bước đang mắc và luyện bù cụ thể.
- Khi trẻ đang làm bài, ưu tiên gợi ý kế tiếp thay vì lộ lời giải ngay; khi trẻ chủ động yêu cầu giảng từ đầu, phải có lối giải thích đầy đủ từ nền tảng.
- AI nhận ngữ cảnh có chọn lọc: trang/skill/câu hỏi, tầng chương trình, dữ kiện học tập tối thiểu có liên quan; không gửi toàn bộ lịch sử hoặc kho localStorage.
- AI không tạo ra "sự thật" về số câu đã làm, điểm yếu, tần suất thi hay quan hệ tiên quyết nếu không có dữ liệu.
- Curriculum đã kiểm định, đáp án chuẩn, đồ thị đã review và learner evidence đáng tin cậy luôn có quyền ưu tiên hơn suy đoán của AI.
- Ranh giới kiểm tra phải bảo vệ: không cung cấp gợi ý, lời giải hay Tutor ngay trong Readiness, đề luyện làm độc lập và trang đáp án. Ở bài kiến thức, bài mỏ neo và bài kinh điển, AI theo yêu cầu có thể giải thích thêm, gợi ý hoặc tạo biến thể; không tự nhận có chức năng tải/chấm ảnh bài viết tay.
- Độc lập nhà cung cấp ở cấp hợp đồng API/chính sách; không thiết kế toàn hệ thống phụ thuộc ký ức riêng của một mô hình.
- Bảo vệ khóa, cấu hình sản xuất và dữ liệu học sinh; không đưa secret vào repo/client. Công cụ chống lạm dụng không được coi là thay thế hoàn toàn thiết kế bảo mật.

---

## 6. Chuẩn biên soạn và kiểm định học thuật

### 6.1. Nguồn và phản biện

Biên soạn bám yêu cầu chương trình/KNTT; đối chiếu độc lập các đề/lời giải có rủi ro. Tài liệu do AI sinh chỉ là **bản nháp** tới khi được review và tích hợp. Khi cần sửa, chỉ ra file + ID câu / mục + trích nguyên câu hiện hành + vấn đề + cách sửa. Không áp dụng phản biện từ bản nội dung cũ vào ID giống tên nhưng nội dung đã thay.

### 6.2. Toán học và lời giải

Kiểm tra điều kiện xác định, biến đổi tương đương, nghiệm ngoại lai, đơn vị/ngữ cảnh, giả thiết định lý, chiều đảo, điểm rơi và trường hợp suy biến. Đáp án trắc nghiệm phải có một lựa chọn đúng theo yêu cầu đề; nhiễu hợp lý, không đánh đố bằng mơ hồ ngôn ngữ. Đáp án canonical dùng nhiều nơi cần kiểm tra độc lập.

### 6.3. Hình học

**Hình vẽ không phải chứng minh.** Phân biệt giả thiết, dựng thêm, đích chứng minh và quan hệ suy ra. Định lý dùng đúng điều kiện, thứ tự đỉnh tương ứng đúng. SVG ưu tiên tạo từ đặc tả hình có thể kiểm tra; tránh hình "nhìn có vẻ đúng" nhưng biểu đạt quan hệ sai. Bài chứng minh nhiều bước, đường tròn, dựng phụ và Challenge cần phản biện độc lập khi khả thi. Giữ khả năng zoom, nhãn rõ, hiển thị tốt trên điện thoại và bản in.

### 6.4. Lời văn và hình ảnh

Câu hỏi dùng tiếng Việt trực tiếp, nêu đơn vị và tập đối tượng rõ, không suy đoán dữ kiện thiếu từ hình/bảng. Tránh trộn thuật ngữ nội bộ vào giao diện trẻ em. Infographic và minh họa dùng thư viện phong cách thống nhất; giảm phụ thuộc ảnh Internet không đồng nhất. Khi chỉnh sửa asset đã duyệt, phải bảo toàn nhân vật, kích cỡ, vị trí, nền và trạng thái theo đúng brief; không thay hình khác rồi gọi là cùng yêu cầu.

### 6.5. Chuẩn bài mỏ neo

Phân biệt **bài tuyển chọn**, **bài mỏ neo giải sâu** và **bài đã được kiểm định độc lập**. Không mặc định mọi bài trong danh mục có cùng mức hoàn thiện. Một bài mỏ neo giải sâu cần: đọc đề và điều kiện; dấu hiệu nhận dạng; tư duy lùi từ đích; lý do chọn phương pháp; ba mức gợi ý; lời giải đủ lập luận; kiểm tra kết quả/điều kiện; một biến thể gần và một biến thể thay đổi cấu trúc. Với hình học, các bước suy luận phải có căn cứ, hình vẽ không thay chứng minh. Kho mỏ neo là thư viện tư duy mẫu chọn lọc; ngân hàng trắc nghiệm phục vụ luyện số lượng lớn.

### 6.6. Chuẩn đề luyện

Nêu mục tiêu, mức độ, đối tượng, nguồn và phạm vi. Phân biệt đề tự biên soạn nền tảng với đề mô phỏng đối chiếu tập đề chính thức có địa phương/năm rõ ràng. Không suy ra tần suất hay độ phân hóa từ đề tự biên soạn; đề mới phải bổ sung kiểu suy luận có giá trị, không chỉ thay số. Lời giải có điều kiện, lý do biến đổi, trường hợp loại, đơn vị và kết luận. Rubric theo từng ý, tổng điểm khớp, không cộng trùng và chấp nhận cách giải khác đúng. Kiểm định toán học, độ khó và phạm vi thi tách khỏi QA kỹ thuật/build.

### 6.7. NotebookLM và phản biện AI có truy nguyên nguồn

Mỗi môn giữ một file quy tắc cố định và những nguồn tham chiếu thực sự cần. Mỗi đợt chỉ chọn gói REVIEW_PACKET tạm thời, thay nguồn cũ khi đổi Batch; lưu nguồn/hồ sơ đã đóng tại GitHub, không chất nhiều Batch cũ vào Notebook. Gói phải ghi packet_id, batch_id, content_version hoặc source_sha, expected_ids, phạm vi và nguồn được phép. Kiểm kê danh sách ID trước khi đánh giá từng item; kết quả bao phủ 1:1, phân biệt PASS, REVISION_REQUIRED, INSUFFICIENT_EVIDENCE và NOT_REVIEWED. Không coi mục không được nhắc đến là PASS. Mỗi issue cần chứng cứ theo đúng file/ID/phiên bản. Chat AI cũ là tham khảo, không ngang quyền với SGK và đề chính thức. Phản biện không tự phê duyệt; tích hợp chỉ sau kiểm tra chéo và quyết định của chủ dự án.

---

## 7. Kỹ thuật, giao diện và khả năng bảo trì

- Dùng kiến trúc tách nội dung (Markdown/JSON/SVG), engine JS, schema/metadata và giao diện. Giữ ID/URL ổn định hoặc cung cấp redirect/migration khi buộc đổi.
- Mọi tính năng phải dùng được trên desktop, iPad và mobile; menu phải có lối về trang chủ/điều hướng chính dễ tìm kể cả ở trang con sâu.
- Chữ, công thức, bảng và hình không tràn khung; thao tác cảm ứng đủ lớn, tương phản và hiển thị bản in hợp lý; hỗ trợ bàn phím khi có thể.
- Trạng thái loading/error phải dễ hiểu; không được báo "đã lưu", "đã chấm" hoặc "đã triển khai" khi chưa có xác nhận thực tế.
- Thử nghiệm có thể bổ sung nhưng không phá workflow học hiện tại hoặc dữ liệu học sinh; thay đổi schema cần tương thích ngược hoặc migration rõ ràng.
- Không phát triển framework mới chỉ vì có thể; làm đủ mức giúp học sinh sử dụng và hệ thống bảo trì được. Ưu tiên hoàn thiện học thuật trước khi mở rộng hệ thống chấm tự luận, tải ảnh và lưu trữ.

---

## 8. Quy trình triển khai với GitHub và hợp tác AI

### 8.1. Trước khi thực hiện

1. Đọc tài liệu nguồn này để biết nguyên tắc; kiểm tra `main` để biết thực trạng, cùng Project Context/Task Registry để biết công việc mở.
2. Kiểm tra quyền kết nối GitHub/công cụ thực tế **trước khi khẳng định không thao tác được**. Thiết bị PC/iPad của người dùng không tự quyết định quyền connector.
3. Xác định phạm vi nhỏ, tiêu chí hoàn thành và những vùng không được đụng tới. Tránh làm lại phần đã merge và không trộn công việc hình ảnh/menu/nội dung khi người dùng yêu cầu làm lần lượt.
4. Với sửa đổi ảnh, kiểm tra ảnh đích thực sự và phiên bản được duyệt; dùng đúng asset được chọn, không tự đổi bố cục.

### 8.2. Trong quá trình thực hiện

- Ưu tiên sửa trực tiếp trên repository qua quy trình branch → PR → QA → merge → deploy; giữ backup/rollback nếu thay đổi ảnh hưởng nội dung hoặc dữ liệu.
- Phân vai phản biện: mô hình biên soạn và mô hình kiểm tra độc lập khi cần, nhưng quyết định phê duyệt dựa trên chứng cứ; không cho AI tự chứng nhận các bài khó.
- Không sửa ngoài phạm vi; không tự động merge PR cũ chưa kiểm tra xem đã lỗi thời/chồng chéo hay chưa.
- Chạy validation schema, kiểm thử engine/hồi quy, QA nội dung, hình học, giao diện và `mkdocs build --strict`; kiểm tra hoạt động trên thiết bị thực tế khi thay đổi UX quan trọng.

### 8.3. Báo cáo kết quả

Phân biệt chính xác: **đã chuẩn bị → đã commit/PR → QA đạt → đã merge → deploy thành công → đã được người dùng chấp nhận trên thiết bị**. Không báo deploy khi mới có file/PR, không nói "đã kiểm định học thuật" vì CI chỉ kiểm tra mã và liên kết. Gửi link PR/commit/workflow và nêu các kiểm định chưa hoàn thành; không đẩy các bước kỹ thuật có thể tự làm sang người dùng.

### 8.4. Định nghĩa hoàn tất (Definition of Done)

Đối với mỗi batch: phạm vi được đáp ứng; nội dung/đáp án/ranh giới tầng hợp lệ; link/asset/schema đúng; unit/integration/browser QA liên quan đạt; strict build đạt; đã merge và deploy nếu yêu cầu triển khai; trạng thái registry cập nhật; không làm mất tiến độ học sinh; báo cáo rõ việc còn chờ kiểm định độc lập/chấp nhận thiết bị.

---

## 9. Lộ trình mở rộng theo giai đoạn — không gắn mốc tiến độ cứng

**Giai đoạn A — Chất lượng nền THCS:** kiểm định học thuật các phần rủi ro; hoàn thiện minh họa bản chất, cầu nối kỹ năng, bài mỏ neo, đề–lời giải–rubric và kiểm thử với học sinh. Khép kín luồng tự học cơ bản, hoàn thiện chuyên đề nền chưa đồng nhất Golden Template, bảo đảm hình và câu chữ đúng chuẩn.

**Giai đoạn B — Hành trình tự học cá nhân:** từ lớp/chương đến bài hiện tại, prerequisite, bằng chứng học tập, gợi ý ôn bù và bước tiếp theo; đánh giá đầu vào và ôn giãn cách đơn giản, minh bạch.

**Giai đoạn C — Theo dõi dài hạn:** hiệu chuẩn readiness/mastery trên nhiều lần làm, đồng bộ đa thiết bị, minh bạch quyền riêng tư và sao lưu dữ liệu.

**Giai đoạn D — THPT:** thêm module chương trình/skill/assessment riêng gắn vào graph chung. Ưu tiên cầu nối từ các kỹ năng THCS; không đổi ý nghĩa Core của 25 chuyên đề đã có.

**Giai đoạn E — SAT/ACT và tư duy logic:** thêm blueprint, mapping, dạng bài và tiêu chuẩn đánh giá chuyên biệt; tái sử dụng kỹ năng toán chung, không đồng nhất yêu cầu của các kỳ thi hoặc áp dụng thang điểm này sang thang điểm khác.

Không tự xem các giai đoạn tương lai là tính năng đã triển khai.

---

## 10. Nguồn nào có quyền quyết định điều gì?

| Nguồn | Dùng để xác nhận |
|---|---|
| **Master Plan phiên bản trên GitHub** | Sứ mệnh, nguyên tắc dài hạn và quy tắc vận hành được người dùng thống nhất. |
| **NotebookLM + review packet theo SHA** | Phản biện đúng nguồn/phiên bản/ID, không tự xác nhận tính năng đã triển khai. |
| **GitHub `main` + deploy hiện hành** | Mã nguồn, nội dung, tài nguyên, tính năng thực sự tồn tại và trạng thái xuất bản. |
| **Project Context / Task Registry** | Hồ sơ nhiệm vụ, version, trạng thái review, các việc đang mở; phải đối chiếu với repo nếu lệch. |
| **Nguồn chương trình / học thuật** | Chuẩn kiến thức, đáp án toán học và ranh giới chương trình đã xác minh. |
| **Chat cũ / snapshot tiến độ** | Lịch sử quyết định và giải thích bối cảnh, **không tự động là lệnh hiện hành**. |

**Quy tắc xung đột:** Tài liệu này không chứng minh một tính năng đã được làm; GitHub không tự thay đổi mục tiêu sản phẩm; tài liệu tiến độ có ngày không được ghi đè trạng thái mới; quyết định mới của chủ dự án có thể điều chỉnh quy tắc nhưng phải cập nhật tài liệu nguồn một cách có chủ đích. Không mặc định ý kiến AI hay bản nháp trong chat cũ là quyết định đã chốt.

## 11. Các điều không đánh đổi

1. **Đúng toán trước đẹp giao diện**; CI không thay phản biện học thuật.
2. **Trẻ tự học được** trước khi bổ sung nhiều tính năng.
3. **Core đúng chuẩn, Extension tách biệt**; không tạo cổng khóa cứng 100%.
4. **Dữ liệu có nguồn và bằng chứng rõ**, AI không bịa chẩn đoán.
5. **Bảo toàn ID, URL và tiến độ học sinh** khi nâng cấp.
6. **Giữ thống nhất tài sản trực quan được duyệt**, không tự đổi yêu cầu.
7. **Minh bạch trạng thái công việc thực tế**, kiểm tra connector/repo trước khi nói không thể làm.
8. **THCS là ưu tiên hiện tại, THPT/SAT/ACT là kiến trúc mở**, không kéo phạm vi quá sớm.
9. **Hiểu bản chất và vận dụng độc lập quan trọng hơn nhớ công thức và điểm MCQ**; cần kiểm thử với học sinh.
10. **Đề tự luận giấy và điểm tự đối chiếu không phải bằng chứng hệ thống tự chấm**.
11. **NotebookLM phản biện theo ID/SHA và nguồn chọn lọc**, không phải người phê duyệt cuối.

---

### Quy tắc bảo trì tài liệu nguồn

Tài liệu này chỉ cập nhật khi có **thay đổi quyết định thiết kế hoặc nguyên tắc dài hạn** được người dùng chấp thuận. Không thêm bug log, ảnh chụp màn hình, số câu hỏi hiện hành, % tiến độ, tên PR, commit hoặc trạng thái từng Sprint. Những thông tin đó thuộc bản tổng kết tiến độ riêng và Project Context/Task Registry. Khi cập nhật, ghi số phiên bản và nêu ngắn gọn điều gì thay đổi, nhưng không nhập nguyên cuộc trò chuyện vào đây.
### Lịch sử phiên bản

- **v1.0:** Kiến trúc 25 chuyên đề, quy tắc nguồn, phân tầng học tập và QA nền.
- **v1.1 — 28/09/2026:** Bổ sung hai loại infographic, thử nghiệm hiểu bản chất, cây cầu kỹ năng–bài tổng hợp, chuẩn bài mỏ neo, bộ đề tự luận giấy/rubric và quy trình NotebookLM. Không đổi cấu trúc 25 chuyên đề, ID câu hỏi hoặc dữ liệu học sinh.
- **v1.1.1 — 29/09/2026:** Chuẩn hóa tên Self-Learning Math / G Learning; xác định AI Tutor là tính năng, giữ nguyên repo và URL kỹ thuật. Không đổi nội dung học thuật hay dữ liệu.
