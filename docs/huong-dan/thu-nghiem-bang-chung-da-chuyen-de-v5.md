# Thử nghiệm theo dõi kỹ năng đa chuyên đề — Beta v5

> **Self-Learning Math · Phase F · opt-in Beta:** 15 câu đã qua review độc lập từ CĐ04–CĐ07 dùng để thử cách theo dõi **cùng một kỹ năng qua nhiều chuyên đề** và **nhiều loại bằng chứng**. Kết quả chỉ dùng để theo dõi quá trình học, **không kết luận thành thạo**, không thay Practice Room và không thay Core Readiness.

Beta v5 mở rộng đúng phạm vi Phase F đã PASS:

- **15 câu mới**
- **5 canonical skills trong batch**
- tối đa **9 mẫu bài được kiểm tra độc lập mới**
- có bốn loại kiểm tra: **Nhận biết · Chọn cách làm · Kết quả cuối · Đáp án cuối**
- lịch sử canonical đã thu thập thật từ Beta v4 được giữ nguyên và có thể xem cùng Beta v5
- không chuyển đổi lịch sử cũ từ Practice, Readiness hoặc Beta v3

<div class="skill-assessment-pilot" data-canonical-evidence-pilot-v2 data-pilot-base="../../assets/" aria-live="polite">Đang tải Beta v5…</div>

!!! info "Cách đọc kết quả"
    - Cùng một kỹ năng có thể xuất hiện ở nhiều chuyên đề. Mỗi lượt vẫn giữ rõ **chuyên đề** và **loại kiểm tra**.
    - Hai câu rất giống nhau trong cùng clone family chỉ tạo tối đa một lần kiểm tra độc lập.
    - Các loại kiểm tra khác nhau không được quy đổi trọng số hay cộng thành điểm mastery.
    - Một câu đúng hoặc sai ở lần đầu trên mẫu bài mới đều là thông tin theo dõi.
    - Tổng kết theo kỹ năng luôn cho phép xem breakdown theo **loại kiểm tra** và **chuyên đề**.

!!! warning "Ranh giới an toàn"
    Beta v5 dùng tiếp store canonical đã được chấp nhận: `toan-thcs-canonical-evidence-v1`. Không migrate, backfill, regrade hoặc dual-write lịch sử Practice, Core Readiness hay Beta v3. Không có Mastery %, Mastered/Not mastered hoặc hard readiness gate.

??? note "Thông tin kỹ thuật dành cho phụ huynh / QA"
    - Beta v4 vẫn là control đã owner-QA PASS và không bị thay đổi bởi Phase F.
    - Phase F chỉ append canonical events mới prospectively.
    - Canonical primary lấy từ overlay Phase D đã review, không lấy từ thứ tự legacy tags.
    - `ID05V1_120` là case kiểm đặc biệt: canonical primary phải là `hieu-hai-binh-phuong` dù legacy tag đầu tiên là `phan-tich-hdt`.

**Dấu hiệu phiên bản:** dòng giới thiệu bắt đầu bằng “Beta v5”. Trên mỗi câu, chuyên đề và loại kiểm tra phải thay đổi đúng theo item; không được hard-code CĐ07.
