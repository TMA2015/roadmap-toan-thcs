# Golden Template – Học → Luyện → Tự kiểm tra

> **Trạng thái:** **Frozen v1.0** từ 25/09/2026 sau khi CĐ07 vượt qua curriculum/schema/deploy QA và kiểm tra luồng thực tế trên iPad.
>
> **Maintenance v1.0.1:** hardening MathJax trong `details`, touch target 44px, CTA cuối trang và JSON control-character QA; không thay đổi invariant hay schema.
>
> Các batch sau phải giữ các invariant trong `assets/data/curriculum/golden-template-v1.json`. Thay đổi phá vỡ invariant cần một phiên bản Golden Template mới, không được sửa ngầm trong từng chuyên đề.

Golden Template chuẩn hóa ba không gian học tập của mỗi chuyên đề để tránh trùng lặp và giữ learner evidence đúng ý nghĩa.

## 1. Học / Learning Workspace

**Câu hỏi:** “Em vừa học phần này – em đã hiểu ý chính chưa?”

- Nội dung Core được chia thành Learning Cards.
- Mỗi card có micro-practice ngắn (pilot: Base → Trap → Apply).
- Feedback có thể xuất hiện ngay.
- Có thể dùng hint/Tutor.
- Observed signal là formative evidence, không phải diagnosis.
- Không lặp lại một ngân hàng bài tập dài ở cuối trang Học.

Các mục “Luyện tập” và “Tự kiểm tra” trong cấu trúc bài học chỉ là **gateway** sang hai không gian riêng.

## 2. Luyện / Practice Room

**Câu hỏi:** “Em có thể thực hiện kỹ năng này ổn định chưa?”

Practice Room có hai chế độ:

### A. Luyện nhanh tương tác

- Practice Engine dùng ngân hàng lớn.
- Cho feedback ngay.
- Hỗ trợ hint, Tutor, luyện từng skill và luyện điểm yếu.
- Ghi formative evidence vào `toan-thcs-practice-v1`.

### B. Luyện tự luận & trình bày

- Học sinh tự giải trên giấy/vở.
- Gợi ý và lời giải nằm trong khối `details`, đóng mặc định.
- Core / Entrance10 / Challenge phải tách rõ.
- Không cần ép mọi biểu thức tự luận thành input tự chấm khi chưa có symbolic equivalence engine.

## 3. Tự kiểm tra / Core Readiness Check

**Câu hỏi:** “Nếu không được trợ giúp, em hiện làm độc lập được đến đâu?”

- Không hint.
- Không Tutor.
- Không feedback đúng/sai từng câu khi đang làm.
- Chỉ chấm sau **Submit**.
- Kết quả phân tích theo assessed skill.
- Assessment evidence lưu riêng trong `toan-thcs-assessment-v1`.
- Không cộng cơ học assessment score với practice accuracy.

### Soft Mastery

Readiness Check không phải hard gate.

Trạng thái v1:

- `READY`: đạt ngưỡng readiness đã khai báo.
- `REVIEW_RECOMMENDED`: nên củng cố một số kỹ năng nhưng vẫn được học tiếp.
- `MORE_EVIDENCE_NEEDED`: chưa trả lời đủ để kết luận readiness.

Không dùng một bài assessment để gắn nhãn tuyệt đối “Mastered”.

## 4. Ranh giới Core / Entrance10 / Challenge

- KNTT Core là mặc định.
- Entrance10 và Specialized-Challenge không được tính vào Core readiness.
- Challenge không bao giờ khóa Core.
- Một câu assessment Core không được yêu cầu kỹ năng ngoài scope Core.

## 5. Schema Readiness Assessment v1

Ví dụ:

```json
{
  "schema": "roadmap-readiness-assessment-v1",
  "assessment_id": "RAT07-CORE-READY-V1",
  "topic": {
    "id": "07-phan-thuc-dai-so",
    "title": "Phân thức đại số"
  },
  "layer": "KNTT-Core",
  "policy": {
    "feedback": "after_submit",
    "hints": false,
    "tutor": false,
    "hard_gate": false,
    "target_minutes": 20,
    "allow_partial_submit": true
  },
  "readiness": {
    "ready_threshold": 0.8,
    "minimum_answered_ratio": 0.8,
    "hard_gate": false
  },
  "items": []
}
```

Readiness Engine v1 hiện hỗ trợ `mcq`. Numeric/short-answer chỉ nên thêm sau khi có rule chấm đủ tin cậy; symbolic algebra cần equivalence engine riêng.

## 6. Quy tắc skill evidence

- Mỗi assessment item có một assessed `skill` chính.
- `supporting_skills` chỉ là ngữ cảnh, không tự động bị trừ điểm.
- Sai một assessment item không chứng minh supporting skill là nguyên nhân.
- Sau Submit có thể đề nghị Practice Room cho skill bị sai, nhưng causal remediation sâu hơn vẫn phải tuân theo Knowledge Graph + learner evidence policy.

## 7. Evidence stores

```text
toan-thcs-practice-v1
├─ micro-practice
├─ Practice Engine
├─ hints
└─ observed signals

toan-thcs-assessment-v1
├─ assessment attempts
├─ submitted score
├─ per-skill result
├─ readiness_state
├─ latest
└─ best
```

Tutor có thể đọc evidence cần thiết từ cả hai nguồn ở phase sau, nhưng không được trộn chúng thành một con số mastery duy nhất nếu chưa có Mastery Model đã review.

## 8. Rollout gate

Golden Template v1 đã được freeze sau khi pilot CĐ07 đạt:

1. curriculum/content QA;
2. schema/JS validation;
3. desktop browser QA;
4. iPad/mobile touch QA;
5. Practice Engine regression;
6. Readiness submit/result/retry QA;
7. Core/Extension boundary QA.

**Kết quả:** PASS. Từ đây rollout theo batch chuyên đề; không quay lại triển khai card-by-card.
