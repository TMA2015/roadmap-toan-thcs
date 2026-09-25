# Chuẩn biên tập đề Toán – ngắn, rõ, đúng bản chất (v1)

> Áp dụng cho ChatGPT, Gemini và reviewer khi viết câu hỏi, ví dụ, lời giải, hint, câu chữ trên giao diện của toàn bộ Roadmap Toán THCS và các tầng học mở rộng về sau. **Giữ chuẩn toán học, không sao chép cách diễn đạt rườm rà của nguồn tham khảo.** Golden Template/schema hiện hành vẫn là nguồn chuẩn kỹ thuật.

## 12 quy tắc bắt buộc

1. **Hỏi trực tiếp điều cần tìm.** Một câu hỏi nên có cấu trúc: dữ kiện → câu hỏi. Bỏ các cụm vô ích như “Hãy cho biết rằng”, “đúng đắn và chính xác nhất” nếu chỉ có một đáp án đúng.
2. **Nói rõ đại lượng và đơn vị.** Viết “10 chiếc tivi” thay vì “doanh số tăng 10 chiếc”; doanh số là số tiền, số lượng là số món.
3. **Chỉ rõ đối tượng đếm.** Phân biệt người khác nhau, lượt đạt kết quả, số bài, số sản phẩm, số lần xuất hiện; không cộng chồng số người từ các nhóm có thể giao nhau.
4. **Nói rõ mẫu số và tính loại trừ khi tính phần trăm.** Ví dụ: “40 học sinh, mỗi em chọn đúng một môn”. Nếu được chọn nhiều mục, nêu rõ như vậy.
5. **Không đòi đọc hình chưa hiển thị.** Khi không nhúng hình, ghi “dữ liệu chép từ biểu đồ” và cho đầy đủ nhãn, số đo, đơn vị, thang đo cần dùng.
6. **Dữ liệu giả định phải được gọi là giả định.** Không gán số liệu tưởng tượng cho điều tra thật, công bố chính thức hoặc một năm/địa phương như thể đã kiểm chứng.
7. **Phân biệt đo định kỳ và liên tục.** Đo mỗi giờ là “theo giờ/định kỳ”, không gọi là ghi liên tục.
8. **Đặt tất cả điều kiện cần thiết ngay trong đề.** Với hình học, không suy vuông góc/bằng nhau từ hình nhìn giống; với đại số, không bỏ điều kiện xác định; với xác suất, ghi rõ không gian mẫu khi cần.
9. **Một câu trắc nghiệm có đúng một đáp án.** Bốn phương án khác nhau, cùng kiểu đơn vị; phương án sai phải sai vì một nhầm lẫn có thể giải thích, không tự mâu thuẫn.
10. **Mỗi item chỉ chấm một assessed skill.** Dùng skill ID có thật, đúng cấp lớp, KNTT-Core/Support/Entrance10/Challenge; supporting skill không tự nhận credit/trừ điểm.
11. **Lời giải nêu phép tính, đơn vị và vì sao phương án đúng.** Hint 1 gợi ý cách nghĩ, hint 2 hướng dẫn bước cụ thể nhưng không đưa thẳng kết quả cuối; phản hồi sai không gán nguyên nhân chắc chắn khi evidence còn thiếu.
12. **Rút gọn mà không đánh mất thông tin.** Đọc thành tiếng đề, thử một cách hiểu khác, kiểm nghiệm đáp án/điều kiện. Nếu có hai cách hiểu hợp lý cho ra kết quả khác nhau, sửa đề trước khi publish.

## Ví dụ trước / sau

| Tránh | Viết rõ |
|---|---|
| “Tổng số học sinh giỏi hai môn” | “Tổng số **lượt đạt Giỏi** ở hai môn (một em có thể được tính hai lần)”, hoặc ghi rõ “số học sinh khác nhau” và cung cấp phần giao. |
| “Doanh số tháng 2 tăng 10 chiếc” | “Tháng 2 bán nhiều hơn tháng 1 **10 chiếc**.” |
| “Theo dõi liên tục bằng cách đo lúc 8 giờ mỗi ngày” | “Đo **định kỳ lúc 8 giờ mỗi ngày**.” |
| “Nhìn biểu đồ sau...” khi không có hình | “Dữ liệu từ biểu đồ được chép lại: tổ 1 – 12 bài; tổ 2 – 15 bài; ...” |
| “Khẳng định nào đúng đắn và chính xác nhất?” | “Nhận xét nào đúng theo số liệu?” |
| “40% học sinh tham gia bóng đá” khi nhiều CLB có thể giao nhau | “Mỗi học sinh chọn **đúng một CLB**. Bóng đá chiếm 40% tổng 300 em.” |

## Kiểm tra xuất bản

- [ ] Tự giải từ đề hiện tại, không nhìn đáp án biên soạn.
- [ ] Thử từng lựa chọn; chỉ đúng một lựa chọn và chỉ một assessed skill.
- [ ] Các phép tính, nhãn, đơn vị và kết quả trong lời giải khớp đề.
- [ ] Nhãn “số lượt” / “số người” / “doanh thu” / “số chiếc” không nhập nhằng.
- [ ] Mọi bảng, biểu đồ hoặc hình cần thiết thực sự được nhúng **hoặc** dữ liệu đã chép đầy đủ.
- [ ] Ngôn từ vừa sức lớp học, không thêm câu phụ trang trí, không suy diễn từ mẫu sang toàn bộ đối tượng.
- [ ] Tầng học, mapping KNTT và nguồn dữ liệu được đối chiếu; không tự nâng Extension lên Core.
- [ ] Reviewer ghi rõ lỗi theo item ID; chỉ sửa đúng chỗ rồi chạy lại math/schema/CI.

**Sử dụng khi giao Gemini:** đính kèm đường dẫn tài liệu này trong packet `source_lock` và nhắc dùng như quy chuẩn bắt buộc trước khi trả JSON. Đây là quy tắc biên tập, không tự thay đổi schema hoặc Golden Template frozen.
