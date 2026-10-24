# MẪU TRÌNH BÀY KIẾN THỨC — SO SÁNH, QUY TRÌNH, CÔNG THỨC (ỨNG VIÊN R6)

> **Chỉ dùng trong các bản thử/nhánh thiết kế được nghiệm thu.** Học thuật nằm trong nội dung gốc có nguồn và trong các danh tính khái niệm/kỹ năng; những khối dưới đây chỉ quyết định cách **hiển thị**. Đừng thay đổi lời giải toán bằng máy móc vì muốn giảm chiều cao trang.

Cần liên kết CSS `docs/assets/stylesheets/math-knowledge-composition-v1.css` bằng đường dẫn phù hợp trang dùng thử.

## Trường hợp A — Hai kiến thức/chiến lược thực sự **cần so sánh**

```html
<div class="math-composition">
  <div class="math-compare">
    <article>
      <h4>Trường hợp 1 — [điều kiện]</h4>
      <p>[công thức/ý nghĩa đúng theo SGK]</p>
    </article>
    <article>
      <h4>Trường hợp 2 — [điều kiện]</h4>
      <p>[công thức/ý nghĩa đúng theo SGK]</p>
    </article>
  </div>
</div>
```

- Chỉ dùng khi hai nội dung thực sự song song có ích để nhìn cạnh nhau; không dùng cho lời giải mà bước sau phụ thuộc kết quả bước trước.
- Nếu ba trường hợp cùng vai trò, thêm `is-three` vào `math-compare`; trên iPad/điện thoại, tự xuống cột, không thu nhỏ chữ.

## Trường hợp B — Các **bước liên tiếp** của cùng một phương pháp

```html
<div class="math-composition">
  <div class="math-process" aria-label="Các bước giải theo đúng trình tự">
    <div class="math-process-step">
      <h4>Bước 1 — [động từ]</h4>
      <p>[ý nghĩa, phép tính và kết quả trung gian]</p>
    </div>
    <span class="math-process-arrow" aria-hidden="true">→</span>
    <div class="math-process-step">
      <h4>Bước 2 — [động từ]</h4>
      <p>[phép tính đầy đủ, không được bỏ phép biến đổi cần thiết]</p>
    </div>
  </div>
  <div class="math-outcome"><strong>Kết luận:</strong> [kết quả cuối + điều kiện/đơn vị nếu có]</div>
</div>
```

- **Bước** là một chuỗi cần làm; **Cách** là hai phương pháp thay thế. Không đổi nhầm hai loại.
- Ví dụ CĐ10: khi `b ≠ 0`, Bước1 `x=0 → A(0;b)`, Bước2 `y=0 → ax+b=0 → x=-b/a → B(-b/a;0)`; nối hai điểm.
- Trường hợp `b=0`: hai giao điểm trục trở thành cùng điểm O, phải chọn một điểm khác (như `x=1 → (1;a)`) trước khi vẽ. Ghi rõ điều kiện trong bài, không giấu dưới hình.

## Trường hợp C — Một công thức/kết luận cần nhớ

```html
<div class="math-composition">
  <div class="math-principle">
    \(\text{công thức toán đúng theo bài giảng}\)
  </div>
</div>
```

- Ưu tiên MathJax/LaTeX đúng nguồn, căn giữa công thức đơn, kèm điều kiện và giải thích ở đoạn văn căn trái. Không cần một khối trang trí cho mọi phép tính đơn giản.
- Quy trình suy luận, phản chứng, dựng hình nhiều phụ thuộc vẫn nên đặt thành từng dòng logic/align; không gò vào bảng so sánh.

## Trường hợp D — Vài công thức ngắn có cùng vai trò

```html
<div class="math-composition">
  <div class="math-compact-equations">
    <span>\(\text{biểu thức 1}\)</span>
    <span>\(\text{biểu thức 2}\)</span>
  </div>
</div>
```

- Dùng có lựa chọn; toán dài phải dùng bố cục tiêu chuẩn và cuộn công thức riêng nếu cần. Không biến toàn trang thành ô vuông.

## Vai trò với các bộ phận site

- Học theo chuyên đề §3: khái niệm + điều kiện + ví dụ + so sánh/bước khi có lợi. Các tab ngang là công cụ *điều hướng tiểu mục*, **không** được làm mất dấu 3.1...3.x.
- §5 Các dạng bài: giữ nhãn dạng/phương pháp chính xác, dẫn tới một kỹ năng Practice có thật hoặc một ID Written chuẩn khi có; không dẫn tới ví dụ giấy cũ đã bị hook ẩn.
- Core SGK: dùng cùng ngôn ngữ hình ảnh và công thức, nhưng giữ bài ngắn, không nhân đôi nội dung dài/chuyên đề.
- Readiness độc lập: không gợi ý, không dùng Tutor/chèn bài học ngay trong đề, không thay điểm.
- Thư viện Tự luận: không bị sửa đề/hướng dẫn/đáp án/rubric chỉ vì đổi định dạng.
- Infographic: dùng hình toán có giá trị trực quan, không lặp định nghĩa toàn văn, và không đếm **số tab** như **số dạng bài**.

## Checklist QA bắt buộc cho từng chuyên đề

- [ ] Chương/bài/nội dung, công thức và điều kiện gốc còn nguyên; cấp Core/Extension đúng.
- [ ] Các bước trung gian và kết quả cuối xuất hiện đầy đủ, không làm mất `x=2` hay điều kiện `b=0`.
- [ ] Cỡ PC, iPad thực tế, điện thoại; font >=16px; bảng/hình không tràn hoặc co méo.
- [ ] Mọi infographic có vai trò rõ, không lặp chữ không cần thiết hoặc mâu thuẫn ví dụ trên web.
- [ ] Liên kết bài tương tác dùng nhãn **Luyện ngay**; bài giấy dùng nhãn **Làm tự luận**, có thể kèm mã WX; nút chỉ đến điểm đích thực.
- [ ] In ra đủ toàn bộ các tab, MathJax hiển thị đúng trong tab ẩn/hiện.
- [ ] Đầy đủ đầu mục, neo nguồn, link SGK/Core/Practice/Readiness/Written; không ảnh hưởng kết quả của học sinh.
- [ ] Bản xem thử được phụ huynh duyệt, GitHub CI PASS đúng SHA và independent source QA nếu thay toán/học liệu.

**Nguyên tắc:** Tiết kiệm thao tác và chiều cao nhờ trình bày tốt hơn — không phải bằng cách bỏ những thông tin cần để học sinh tự hiểu.
