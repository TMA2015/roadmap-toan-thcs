# CORE CĐ07 – ĐỀ NGHỊ TÁI SỬ DỤNG CÂU HỎI CANONICAL (REVIEW R1)
Packet: MATH-CORE07-MICRO-COVERAGE-R1-20260929. Trạng thái: đề xuất chưa duyệt, không đăng vào website.
Nhóm nguồn: chỉ thay nguồn tạm thời khi thực hiện vòng phản biện nội dung micro; giữ nguyên hai nguồn nền tảng Toán đã chọn.

## I. Nguồn khóa
- docs/assets/data/curriculum/topic07-learning-workspace.json | Git blob: 529e28fe1ae19d529217a6eeac91052f33026d50
- docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json | Git blob: 077d3e46a345343cf9219c7f46fa6b56a38d3b42
- docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json | Git blob: 3bf6305a57286b92c9c6a2486c94eadcff0d9163
- docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json | Git blob: 2294a3f9d93b01b70036167713a3940fea367dca
- docs/assets/data/practice/07-phan-thuc-dai-so-v1.manifest.json | Git blob: 5939cac274f5133c474423b949340d136e976e5d

## II. Khoảng trống bao phủ từ dữ liệu thực tế
- pt07-core-1: bốn kỹ năng; ba câu RAT07MICRO_001/002/003 đánh giá lần lượt nhận biết phân thức, điều kiện xác định, tính giá trị phân thức. Chưa có câu riêng cho `hai-phan-thuc-bang-nhau`.
- pt07-core-2: ba kỹ năng; ba câu RAT07MICRO_004/005/006 đánh giá rút gọn, rút gọn, đổi dấu. Chưa có câu riêng cho `phan-tich-tu-mau`.
- Các supporting_skills không được tính là kỹ năng chính đã được kiểm tra; một câu có thể cần nhiều kỹ năng nhưng có một assessed skill chính.

## III. Hướng giải quyết ưu tiên: tái sử dụng ID cũ, không nhân bản bài toán
Đề nghị dẫn hai câu đã có trong ngân hàng Practice Room vào micro của Core để bổ sung bao phủ tối thiểu. Mỗi item giữ ID/đề/4 phương án/answer/explanation nguyên gốc, dùng cùng ID ở cả hai điểm vào; lần làm mới là một retake cùng item, không tạo hai 'unique question' giả. Chỉ tạo liên kết card và nhãn micro_role trong overlay theo ngữ cảnh, không thay câu gốc.
1) pt07-core-1 → RAT07V1_025. Kỹ năng chính: hai-phan-thuc-bang-nhau; giu-dieu-kien-ban-dau chỉ là supporting skill.
2) pt07-core-2 → RAT07V1_039. Kỹ năng chính: phan-tich-tu-mau.
Không vội xuất bản nếu nội dung nguồn chưa đạt chất lượng sư phạm, chưa tương thích với cách tính evidence hoặc có nguy cơ lộ đáp án từ ví dụ mẫu.

## IV. Hai câu hỏi gốc cần phản biện nguyên trạng

### 1. RAT07V1_025
Question: Chọn khẳng định đúng:
Options:
1. \(\frac{x+1}{x-2}\) và \(\frac{2x+2}{2x-4}\) bằng nhau trên miền \(x\ne2\).
2. \(\frac{x+1}{x-2}\) và \(\frac{2x+2}{2x-4}\) không bao giờ bằng nhau.
3. Hai biểu thức chỉ bằng nhau khi x=0.
4. Có thể bỏ mọi điều kiện xác định khi rút gọn.
Correct index (0-based): 0
Explanation: Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu.
Tags: {"topic":"phan-thuc-dai-so","skill":["hai-phan-thuc-bang-nhau","giu-dieu-kien-ban-dau"],"type":"hai-phan-thuc-bang-nhau"}
Difficulty: intermediate

### 2. RAT07V1_039
Question: Phân tích \(x^{2} - 9\) thành nhân tử để chuẩn bị rút gọn phân thức.
Options:
1. \(\left(x - 3\right) \left(x + 3\right)\)
2. \(x^{2} - 8\)
3. \(- \left(x - 3\right) \left(x + 3\right)\)
4. \(x + \left(x - 3\right) \left(x + 3\right)\)
Correct index (0-based): 0
Explanation: Dùng hiệu hai bình phương: \(x^{2} - 9=\left(x - 3\right) \left(x + 3\right)\). Đây là dạng tích các nhân tử, không chỉ là một biểu thức tương đương.
Tags: {"topic":"phan-thuc-dai-so","skill":["phan-tich-tu-mau"],"type":"phan-tich-tu-mau"}
Difficulty: intermediate

## V. Thông tin thẻ và ba câu micro hiện hành (chỉ để đối chiếu)

### pt07-core-1
Title: Khái niệm & điều kiện xác định
Declared skills: nhan-biet-phan-thuc, dieu-kien-xac-dinh, hai-phan-thuc-bang-nhau, tinh-gia-tri-phan-thuc
Current micro IDs: RAT07MICRO_001, RAT07MICRO_002, RAT07MICRO_003
Approved teaching copy:
{
  "key_idea": "Phân thức đại số có dạng \\(\\frac{A}{B}\\), trong đó \\(A,B\\) là đa thức và \\(B\\) không phải đa thức \\(0\\); \\(A\\) là tử thức, \\(B\\) là mẫu thức. Mỗi đa thức cũng được coi là phân thức có mẫu bằng \\(1\\). Điều kiện xác định là \\(B\\ne0\\): phải tìm trước khi thay số hoặc biến đổi. Tại các giá trị biến thỏa \\(B\\ne0\\) và \\(D\\ne0\\), hai phân thức \\(\\frac{A}{B}\\) và \\(\\frac{C}{D}\\) bằng nhau khi và chỉ khi \\(A\\cdot D=B\\cdot C\\).",
  "worked_example": {
    "problem": "Cho \\(P=\\frac{x+2}{(x-1)(x+3)}\\). Tìm điều kiện xác định và tính \\(P\\) tại \\(x=0\\).",
    "solution": "Bước 1: \\((x-1)(x+3)\\ne0\\) nên \\(x\\ne1\\), \\(x\\ne-3\\).\nBước 2: \\(x=0\\) thỏa điều kiện. Khi đó \\(P(0)=\\frac2{(-1)\\cdot3}=-\\frac23\\).\nBước 3: Kiểm tra lại cả hai giá trị bị loại ở mẫu ban đầu."
  },
  "misconception": "Tìm điều kiện từ tử thức, hoặc thay một giá trị khiến mẫu bằng 0 rồi vẫn tính kết quả.",
  "summary": "Luôn tìm điều kiện mẫu khác 0 trước khi thay số; không được tự lấy lại giá trị đã bị loại.",
  "source_reference": "docs/kien-thuc/07-phan-thuc-dai-so/index.md",
  "source_sections": [
    "3.1",
    "3.2",
    "3.3",
    "Dạng 1"
  ],
  "source_question_ids": [
    "RAT07MICRO_001",
    "RAT07MICRO_002",
    "RAT07MICRO_003"
  ],
  "review_status": "APPROVED",
  "review_round": "MATH-CORE07-TEACH-R2-20260929",
  "academic_review_ref": "content-staging/reviews/MATH-CORE07-TEACH-R2-REVIEW-RESULT-20260929.md",
  "review_source_packet": "MATH-CORE07-TEACH-R2-20260929-NOTEBOOKLM.txt",
  "review_source_blob_sha": "446f984a1e38f260fec3e8568712c8fda4bbfa23"
}

### pt07-core-2
Title: Tính chất cơ bản & rút gọn
Declared skills: doi-dau-phan-thuc, phan-tich-tu-mau, rut-gon-phan-thuc
Current micro IDs: RAT07MICRO_004, RAT07MICRO_005, RAT07MICRO_006
Approved teaching copy:
{
  "key_idea": "Rút gọn phân thức bằng cách phân tích tử, mẫu thành nhân tử rồi chia nhân tử chung khác \\(0\\). Đẳng thức sau rút gọn chỉ đúng trên miền xác định ban đầu. Quy tắc đổi dấu: \\(\\frac{A}{B}=\\frac{-A}{-B}\\) và \\(\\frac{A}{-B}=\\frac{-A}{B}=-\\frac{A}{B}\\), với các mẫu khác \\(0\\).",
  "worked_example": {
    "problem": "Rút gọn \\(Q=\\frac{x^2-16}{x^2-4x}\\) và nêu điều kiện xác định.",
    "solution": "Bước 1: \\(x^2-4x=x(x-4)\\ne0\\), nên \\(x\\ne0\\), \\(x\\ne4\\).\nBước 2: \\(x^2-16=(x-4)(x+4)\\).\nBước 3: Với điều kiện trên, \\(Q=\\frac{(x-4)(x+4)}{x(x-4)}=\\frac{x+4}{x}\\).\nBước 4: Giữ nguyên cả \\(x\\ne0\\), \\(x\\ne4\\), dù mẫu sau rút gọn chỉ còn \\(x\\)."
  },
  "misconception": "Gạch bỏ các hạng tử qua dấu cộng/trừ; chỉ rút gọn nhân tử. Hoặc quên giữ điều kiện của mẫu ban đầu.",
  "summary": "Phân tích → rút gọn nhân tử → ghi lại điều kiện gốc.",
  "source_reference": "docs/kien-thuc/07-phan-thuc-dai-so/index.md",
  "source_sections": [
    "3.4",
    "3.5",
    "Dạng 2",
    "Dạng 3"
  ],
  "source_question_ids": [
    "RAT07MICRO_004",
    "RAT07MICRO_005",
    "RAT07MICRO_006"
  ],
  "review_status": "APPROVED",
  "review_round": "MATH-CORE07-TEACH-R2-20260929",
  "academic_review_ref": "content-staging/reviews/MATH-CORE07-TEACH-R2-REVIEW-RESULT-20260929.md",
  "review_source_packet": "MATH-CORE07-TEACH-R2-20260929-NOTEBOOKLM.txt",
  "review_source_blob_sha": "446f984a1e38f260fec3e8568712c8fda4bbfa23"
}

### RAT07MICRO_001
Question: Khẳng định nào đúng về \(\frac{x+2}{x^2+1}\)?
Options: Là phân thức đại số vì tử và mẫu đều là đa thức, mẫu không phải đa thức 0. | Không phải phân thức vì mẫu có chứa biến. | Chỉ là phân thức khi \(x=0\). | Là một phương trình.
Answer index: 0
Primary: nhan-biet-phan-thuc
Explanation: Đây là phân thức đại số vì \(x+2\) và \(x^2+1\) đều là đa thức, còn mẫu không phải đa thức 0.

### RAT07MICRO_002
Question: Tìm điều kiện xác định của \(P=\frac{x+1}{x(x-2)}\).
Options: \(x\ne0\) và \(x\ne2\) | \(x\ne2\) | \(x\ne-1\) | \(x\ne0\)
Answer index: 0
Primary: dieu-kien-xac-dinh
Explanation: Mẫu \(x(x-2)\ne0\), nên đồng thời \(x\ne0\) và \(x\ne2\).

### RAT07MICRO_003
Question: Cho \(P=\frac{x+1}{x-3}\). Giá trị của \(P\) tại \(x=3\) là:
Options: Không xác định | 0 | 4 | 1
Answer index: 0
Primary: tinh-gia-tri-phan-thuc
Explanation: Tại \(x=3\), mẫu \(x-3=0\), nên phân thức không xác định và không được thay số để tính giá trị.

### RAT07MICRO_004
Question: Rút gọn \(\frac{4x^2}{2x}\) với \(x\ne0\).
Options: \(2x\) | \(2x^2\) | \(2\) | \(x\)
Answer index: 0
Primary: rut-gon-phan-thuc
Explanation: Chia hệ số \(4:2=2\) và \(x^2:x=x\), được \(2x\).

### RAT07MICRO_005
Question: Rút gọn \(\frac{x^2-9}{x+3}\) với \(x\ne-3\).
Options: \(x-3\) | \(x^2-3\) | \(x-9\) | \(x+3\)
Answer index: 0
Primary: rut-gon-phan-thuc
Explanation: \(x^2-9=(x-3)(x+3)\). Rút nhân tử chung \(x+3\) được \(x-3\), vẫn giữ \(x\ne-3\).

### RAT07MICRO_006
Question: Với \(x\ne y\), rút gọn \(\frac{x-y}{y-x}\).
Options: \(-1\) | \(1\) | \(\frac{x}{y}\) | \(\frac{y}{x}\)
Answer index: 0
Primary: doi-dau-phan-thuc
Explanation: Vì \(y-x=-(x-y)\), nên \(\frac{x-y}{y-x}=-1\).

## VI. Điểm cần phê duyệt
1. RAT07V1_025 có chính xác trên miền x khác 2 và đủ phân biệt khái niệm hai phân thức bằng nhau không? Nhiễu có quá dễ/khác trình độ so với micro Core?
2. RAT07V1_039 có thực sự đánh giá thao tác phân tích tử/mẫu (thay vì chỉ nhớ hằng đẳng thức tách rời) không? Nếu chưa đạt, yêu cầu sửa/đề mới, không chấp nhận lấp số lượng.
3. Xác nhận reuse ID giữ nguyên evidence giữa Practice Room và micro có phù hợp chính sách không; cách đặt supporting_skills cho RAT07V1_025; grade/layer contextual overlay không được đổi semantic của item.
4. Kiểm tra ví dụ đã duyệt có tiết lộ nguyên đáp án hai câu đang đề nghị thêm không.
5. Đây chỉ là một câu trên một kỹ năng để tăng bao phủ tối thiểu, KHÔNG đủ kết luận mastery hoặc tự kiểm tra độc lập; số lượng bổ sung thực tế cần dựa trên kỹ năng và mức độ khó, không bị khóa theo 3 câu.

## VII. Định dạng trả lời
Báo cáo Markdown: verdict tổng PASS hoặc REVISIONS_REQUIRED; riêng từng ID PASS/REVISE với dẫn chứng; đưa nguyên văn sửa nếu cần. Xác nhận có/không thể tái sử dụng canonical ID; phân biệt đáp án nguồn và học liệu bổ sung; đừng tự đánh dấu đã phát hành.