# Self-Learning Math — kiểm toán độ bao phủ tư duy của 75 bài tự luận so với bộ 79 tài liệu

**Ngày:** 2026-10-23 · **Trạng thái:** `COVERAGE_GAP_ANALYSIS | NOT_CONTENT_APPROVAL | NO_DEPLOY`
**Nguồn nội dung hiện hành:** `main`, `docs/assets/data/written-exercises/written-exercise-library-v1.json`, Git blob `5141a40bf1b8f8763257857d3b805d681a0956fa`.

## 1. Quy tắc đánh giá đã thống nhất với chủ dự án

- **Không làm lại vòng kiểm toán tính đúng toán học đại trà:** 75/75 bản ghi có `academic_review.status=APPROVED`; 8 bài mẫu đã qua vòng NotebookLM gần nhất, trong đó 3 P2 đã được bổ sung gợi ý qua lớp overlay tách biệt. Trạng thái review cũ là bằng chứng quy trình, **không tự động chứng minh đã đủ mọi dạng toán**.
- Đo **khác biệt tư duy**, không dùng số lượng bài/ID loại bài làm đại diện chất lượng. Hai bài dùng cùng skill vẫn nên cùng tồn tại nếu đòi hỏi lựa chọn mô hình, giả thiết, phân tích, cách chứng minh, đối chiếu điều kiện hoặc chuyển phương pháp thực sự khác nhau.
- Trùng không có giá trị khi **chỉ đổi số/tên/ngữ cảnh** mà vẫn giữ nguyên dữ kiện được dùng, mô hình và các bước giải. Không xóa/sửa bản ghi lịch sử đã khóa để xử lý trùng; đánh dấu để tránh mở rộng lặp lại, cân nhắc chuyển thành cùng đường dẫn gợi ý sau quyết định của chủ dự án.
- S1 (SGK/KNTT) xác định lớp–chương–bài; S2 (đề biên soạn tham khảo) cho ví dụ cấu trúc, S3 chỉ khi kiểm chứng được đề thi thực tế. **Không suy tần suất chính thức từ file biên soạn**; không sao chép đề hay lời giải.

## 2. Kết quả rà soát 75 bản ghi hiện hành

- **75 bài, 75 ID, 75 metadata APPROVED**, trải trên **22 chuyên đề có bài tự luận**; 62 KNTT-Core, 2 Core-Support, 8 Entrance10, 3 Specialized-Challenge.
- **75 chuỗi `problem_type_id` khác nhau** (đây chỉ là nhãn tác giả, **không phải** xác nhận 75 cấu trúc toán khác nhau). 27 bản ghi có `kntt_placements` (28 dòng placement vì một bài có hai ánh xạ lớp 6); 48 bài hiện mới định tuyến theo chuyên đề. **Độ hiển thị theo lớp ≠ độ phủ kiến thức**; không thêm placements nếu chưa có S1.
- Không phát hiện cặp thuần **đổi số** rõ ràng trong cùng chuyên đề qua các phát biểu đã xem; có **một cặp trùng khung gần như trực tiếp ở hai chuyên đề** cần chú ý, như phân tích dưới đây. Chưa làm kiểm toán toàn bộ nguồn gốc từng bài/đồ hình, vì đó là một tiêu chí khác.

### Ma trận thư viện theo chuyên đề

| Chuyên đề | Số bài | Đánh giá đa dạng tư duy nội bộ (không phải PASS học thuật mới) |
|---|---:|---|
| CT02 Số và phép tính | 4 | Có ƯCLN, %, phân số phần–tổng, trục số; thiếu BCNN có dư và % của **phần còn lại** |
| CT03 Tỉ lệ | 2 | Chia theo tỉ số hai số và người-ngày hai nhóm; thiếu tỉ lệ ba nhóm với điều kiện hiệu/tổng |
| CT04 Đa thức | 3 | Có trừ đa thức, chia đơn thức, khai triển; thiếu bài tổng hợp thu gọn → phép toán đa thức → tìm nghiệm |
| CT05 Hằng đẳng thức | 5 | Base, transfer tuyển sinh và challenge đã khác cách suy luận; ưu tiên giữ |
| CT06 Phân tích nhân tử | 3 | Nhân tử chung có đổi dấu, nhóm + hằng đẳng thức, thêm bớt chuyên sâu; ưu tiên giữ |
| CT07 Phân thức | 4 | ĐKXĐ, quy đồng nhiều phép toán, tìm giá trị nguyên, tự thiết kế chiến lược; có độ mở tốt |
| CT08 Phương trình/BPT | 3 | Nghiệm loại bởi mẫu, bất phương trình đổi chiều, phương trình tích; còn mỏng ở bài lời văn theo giai đoạn |
| CT09 Hệ phương trình | 9 | Khá mạnh: hệ trực tiếp, giá, tổng vé, giảm giá, hỗn hợp, năng suất, hệ có căn/tham số/khử mẫu |
| CT10 Hàm số | 3 | Hàm tuyến tính, parabol bảng, giao điểm; có thể bổ sung bài ngược xác định tham số từ dữ kiện đồ thị |
| CT11 Căn thức | 4 | Điều kiện + trị tuyệt đối, liên hợp, gom căn, phương trình căn; đa dạng |
| CT12 Bậc hai/Viète | 3 | Công thức nghiệm, lập ngược, xét dấu nghiệm; thêm bài chuyển hoá biểu thức nghiệm khi thực sự cần |
| CT13 Góc/đoạn thẳng | 3 | Song song, vuông góc suy diễn, dựng đoạn/góc; chứng minh vị trí điểm từ tia đối còn là nhánh khác |
| CT14 Tam giác | 3 | Hai bài bằng nhau với đích khác và bất đẳng thức; thiếu **chuỗi chứng minh 3–4 kết luận liên đới** |
| CT15 Tâm/đường đồng quy | 2 | Trọng tâm tỉ số, phân biệt nội tâm/ngoại tâm; cần cầu nối từ tam giác bằng nhau đến trung tuyến/đồng quy |
| CT16 Tứ giác | 4 | Dấu hiệu HCN, hình vuông, hình thoi, thang cân; thiếu bài dựng phụ/đường trung bình và suy luận nhiều nhánh |
| CT17 Thalès/đồng dạng | 3 | Đảo, đồng dạng tính độ dài, phân giác; thiếu kết hợp 2+ tam giác đồng dạng để suy ra tích/quan hệ |
| CT18 Tam giác vuông/lượng giác | 3 | Sin-cos, góc nâng, Pythagore đảo; có hai mức bối cảnh |
| CT19 Đường tròn | 4 | Cung/quạt, nội tiếp từ góc đối, góc tâm/nội tiếp, khoảng cách tâm–dây; thiếu cấu hình vòng tròn nhiều bước/tiếp tuyến |
| CT20 Hình học/đo lường | 3 | Hộp chữ nhật, hình nón, sân hình chữ nhật; thiếu **hình chóp đều** và **hình trụ** ứng dụng, diện tích hình ghép |
| CT21 Thống kê | 2 | Vẽ cột và cột kép; thiếu **bảng tần số ghép nhóm + tần số tương đối** |
| CT23 Xác suất | 3 | Thực nghiệm, cổ điển-vs-thực nghiệm, không gian mẫu; có nhiều cách diễn giải khác nhau |
| CT24 Mô hình hóa | 2 | Chuyển động một ẩn và hệ đếm–giá vé; bối cảnh hai loại vé **rất gần** CT09 |

**Cặp đáng kiểm tra lại về giá trị bổ trợ:** `WX09-SYS-003` (40 vé hai giá, hệ `x+y=N`, `ax+by=S`) và `WX24-MOD-002` (120 vé hai giá, cùng khung hệ). Chúng cùng bối cảnh và sơ đồ giải; điểm khác là **bài mỏ neo** hướng dẫn khử ẩn chi tiết so với **bài thường** dùng thế và kiểm tra. Vì thế nhãn là `NEAR_DUPLICATE_BUT_DIFFERENT_SCAFFOLD`, **không tự xóa**, không tạo thêm một bản vé thứ ba. Cũng có các cặp cùng skill nhưng khác bản chất, nên **giữ**: `WX09-SYS-002` hóa đơn với hai tổ hợp hàng và `WX09-SYS-004` hai giá gốc/khuyến mại; `WX07-RAT-002` quy đồng có đáp số cố định và `WX07-CH-001` học sinh tự thiết kế biểu thức/chiến lược.

## 3. Đối chiếu bằng chứng từ bộ đề

Bốn ZIP gồm 79 file (78 PDF, 1 DOC): 45 PDF đề học kỳ biên soạn, 4 ôn tập học kỳ, 9 tài liệu chuyên đề, 16 tài liệu tuyển sinh mô phỏng/tham khảo, 5 đề được gắn nhãn tuyển sinh. Đã đọc phần mở đầu/đề bài từ 78 PDF để phân loại, tập trung **phần tự luận** của 45 PDF học kỳ và những câu có thể xác định trong nhóm 5 PDF tuyển sinh. Không coi văn bản trích xuất sai font hoặc hình bị thiếu là bằng chứng kết quả toán học. Đề học kỳ lớp 7 HK1 và lớp 9 HK1/HK2 **không có** trong bộ này. 1 DOC không được kiểm tra nội dung ở vòng này.

| Ưu tiên | Cấu trúc còn thiếu/thiếu độ sâu trong **thư viện 75 bài**, không phải toàn website | Bài gần nhất | Bằng chứng nguồn đã xem | Vì sao không phải bài đổi số |
|---|---|---|---|---|
| **P1 G6** | BCNN xếp nhóm có dư và khoảng giới hạn | `WX02-NUM-001` (ƯCLN chia đều) | G6 HK1 đề #4, tự luận Bài 3 (`...1669285094.pdf`) | Chọn mô hình đồng dư/bội chung, lọc theo biên; khác ƯCLN |
| **P1 G6** | Phân số và phần trăm tính theo **phần còn lại** qua hai giai đoạn | `WX02-NUM-003` (phần kế hoạch ban đầu) | G6 HK2 đề #1, Bài 3 (`...1713575020.pdf`) | Phải cập nhật mốc tham chiếu sau mỗi giai đoạn, không thay số ở mốc gốc |
| **P1 G7** | Ba đội tỉ lệ nghịch, biết **hiệu số người** | `WX03-RAT-002` (hai nhóm người-ngày) | G7 HK2 đề #1, Bài 2 (`...1746416741.pdf`) | Ba ẩn/dãy tỉ số nghịch và điều kiện hiệu; khác hoàn toàn bài 2 nhóm |
| **P1 G7** | Tam giác: bằng nhau → trung điểm/đường song song → thẳng hàng hoặc bất đẳng thức | `WX14-TRI-001/002`, `WX15-CEN-001` | G7 HK2 đề #1, Bài 4 (`...1746416741.pdf`) | Cần quyết định chứng minh theo chuỗi 3–4 ý, không chỉ một hệ quả từ hai tam giác |
| **P1 G8** | Bài toán năng suất có kế hoạch–thực hiện, **tăng phần trăm + thay số ngày + vượt sản lượng** | `WX24-MOD-001` (vận tốc đổi và sớm hơn) | G8 HK2 đề #2, Bài 2 (`...1715132790.pdf`) | Đặt ẩn/mô hình hóa 3 dữ kiện phụ thuộc, không thể giải theo mẫu đổi vận tốc |
| **P1 G8** | Hình chóp đều: từ cấu trúc đáy/cạnh/đường cao mặt bên đến diện tích hay thể tích thực tế | `WX20-GEO-001/002` (hộp chữ nhật/hình nón) | G8 HK2 đề #2, Bài 3; đề #3, Bài 3 (`...1715132790.pdf`, `...1745390509.pdf`) | Công thức + nhận loại chiều cao + mô hình mặt bên khác hình nón |
| **P1 G9** | Bảng **tần số ghép nhóm / tần số tương đối** | `WX21-STA-001/002` (biểu đồ cột) | File đề vào 10 Hà Nội gắn nhãn 2025 Câu I.1, 2026 Câu I.1 | Nhận nhóm lớp, mẫu số/tần số; không thể thay số trong bài biểu đồ cột |
| **P1 G9** | Hình học đường tròn **nhiều kết luận**: nhận nội tiếp theo cấu hình vuông góc → hệ thức độ dài/quan hệ vuông góc | `WX19-CIR-002/003/004` | File đề vào 10 Hà Nội gắn nhãn 2026 Câu IV.2(a–c), 2025 Câu IV.2 | Khác dấu hiệu góc đối bù cơ bản; cần thêm dựng phụ và kết nối nhiều định lý |
| **P1 G9** | Hình trụ: diện tích/thể tích → đơn vị lít → tỉ lệ múc, **làm tròn lên số lần** | `WX20-GEO-001/002` | File đề vào 10 Hà Nội gắn nhãn 2026 Câu IV.1 | Hình trụ, đổi đơn vị + tính số lượt nguyên tối thiểu, khác công thức lẻ |
| **P2 G6** | Diện tích **hình ghép / phần bị trừ**, dùng hình minh họa và chi phí phủ mặt | `WX20-GEO-003` (chu vi/dt sân chữ nhật, cổng) | G6 HK1 đề #4 Bài 4 (`...1669285094.pdf`) | Quyết định cộng/trừ diện tích các miền khác nhau |
| **P2 G7** | Thu gọn hai đa thức → tính tổng/hiệu → tìm nghiệm biểu thức tổng | `WX04-ALG-001/003` | G7 HK2 đề #1, Bài 3 (`...1746416741.pdf`) | Cần kết nối biến đổi đại số với bài toán nghiệm, không chỉ một phép trừ đơn |
| **P2 G8** | Hình chữ nhật, trung điểm, vuông góc → chứng minh hình bình hành và bất đẳng thức nhiều chặng | `WX16-QUAD-001/002` | G8 HK1 đề #1, Bài 4 (`...1735005901.pdf`) | Có xây dựng hình phụ và suy luận từ các kết luận trung gian |

**Cần kiểm tra thêm trước khi viết:** các họ bài G9 biểu thức căn + phân thức + điều kiện tham số (đề vào 10 gắn nhãn 2026 Câu II) có thể bổ trợ `WX07-ENT-001` và `WX11-RAD-004`; bài cực trị chi phí công nhân (2026 Câu V) thuộc nhóm **Entrance10/Challenge**, **không** đưa vào KNTT-Core nếu không có bằng chứng S1. Đề tuyển sinh trường chuyên phải giữ riêng tầng S4, không dùng làm chuẩn Core.

**Độ tin cậy nguồn:** Đây là đối chiếu *có dẫn chứng định tính*, **không** tính tần suất cấu trúc trong đề thi chính thức. Các file nguồn HK chủ yếu là Loigiaihay biên soạn (S2); đề mang nhãn tuyển sinh cần xác minh nguồn chính thức riêng (S3 chưa hoàn tất). Đã phát hiện **một lỗi đáp án** ở G6 HK2 đề #1 câu trắc nghiệm xác suất (nguồn nói B, dữ liệu đúng D = 23/50); không chép đáp án nguồn khi biên soạn mới.

## 4. Quyết định nội dung đề xuất

1. **Giữ 75 bản ghi và lịch sử review.** Không sửa chỉ để đồng bộ hình thức; không bỏ những bài có cùng skill nhưng khác mô hình/phương pháp. Cặp vé `WX09-SYS-003` / `WX24-MOD-002`: tạm giữ hai vai trò, **không sinh thêm** bài trùng khung.
2. **Ưu tiên thiết kế tối đa 9 bài khác cấu trúc** từ 9 chủ đề P1 ở bảng trên (không ấn định mỗi chủ đề chỉ một bài vĩnh viễn). Với mỗi đề xuất, trước khi tạo chính thức phải viết `reasoning_signature` gồm: dữ kiện → quyết định mô hình/định lý → các bước → lỗi nhận diện → vì sao chưa có bài tương đương. Chỉ nhận nếu qua so sánh với **cả 75 bản ghi**, kể cả các chuyên đề khác.
3. **Nhóm P2** làm sau khi P1 và đánh giá có ích thực sự. Mỗi dạng có thể thêm nhiều bài nếu **cách đọc đề hoặc chuỗi suy luận khác nhau**; không nhân bản cùng lời giải bằng thay số.
4. Nội dung mới giữ ID mới, tự luận tự chấm không cấp Readiness/Mastery, source provenance/đáp án độc lập, chống tiết lộ gợi ý; chọn KNTT `kntt_placements` chỉ sau S1 và NotebookLM item review. Không có phát hành hay thay đổi learner-data từ tài liệu này.

## 5. Phạm vi và giới hạn

Đây là **kiểm toán bổ trợ độ bao phủ D4/D5** dựa trên 75 bài đã APPROVED và mẫu nguồn có định danh; **không phải** thẩm định lại đầy đủ từng công thức, từng hình hoặc xác nhận thư viện đã đạt chuẩn cuối cùng cho mọi bài thi. Chênh lệch về tài liệu đầu vào giữa các lớp làm kết luận **thiếu cấu trúc** đáng tin hơn kết luận **đã đủ hoàn toàn**. Để chứng nhận bao phủ KNTT theo lớp cần so tiếp S1 và các dạng trong toàn bộ hệ thống (D2/D3), không dựa riêng bộ tự luận.
