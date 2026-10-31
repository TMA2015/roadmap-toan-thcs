# Academic Presentation QA — kiểm toán trình bày Kiến thức THPT (pilot 31/10/2026)

**Owner requirement:** GitHub issue [#655](https://github.com/TMA2015/self-learning-math/issues/655) — *gọn nhưng không nén*. Không dùng đây làm quyết định hoàn thiện học thuật/chương. **Baseline main:** `c3be715aa48f01bec927c3b9450ffa1240bf785c`. Pilot chỉ có hai trang kiến thức; **Draft PR, không merge/deploy**.

## Khung nghiệm thu Academic Presentation QA

- **AP1 Cấu trúc ý:** một vấn đề/nhóm có tiêu đề, chuyển vấn đề phải tách dòng hoặc nhóm; không ghép định nghĩa, công thức, điều kiện vào một đoạn dày.
- **AP2 Ưu tiên công thức:** công thức trọng tâm riêng dòng hoặc nhóm hợp lý; MathJax/ký hiệu đọc được, không đẩy mọi biểu thức vào một hàng.
- **AP3 Hình/đồ thị:** đúng ngữ cảnh, kích thước và nhãn, chú thích rõ; nguồn SVG canonical không biến đổi.
- **AP4 Tự học độc lập:** học sinh phân biệt được khái niệm, công thức, điều kiện, lỗi hay gặp, ví dụ; không dùng mã D1.x/NotebookLM làm nhãn chính trên trang học sinh.
- **AP5 Desktop/mobile/tablet:** không tràn công thức, không cuộn ngang khó chịu, giữ Golden R4/Adaptive Knowledge Tabs v2, không tác động THCS.

**Ghi chú phạm vi:** Đây là một cổng **trình bày** bổ sung D1–D6, không thay thế kiểm toán toán học, không gộp với P1/P2 deploy. NotebookLM PASS không tự tạo AP PASS. AP3/AP5 cần bằng chứng duyệt hình ảnh/trình duyệt, không tự coi PASS vì file Markdown hợp lệ.

## Kiểm kê bước đầu theo mã nguồn (chưa phải toàn bộ website)

| Mức ưu tiên | Trang học liệu | Nhận định từ Markdown/ảnh người dùng | Hành động |
|---|---|---|---|
| **P0 trình bày** | G11 ChI Bài 2 — `sgk/lop-11/chuong-i/bai-2.md` | AP1/AP2: 4 đoạn gộp 16 biểu thức toán, điều kiện và lỗi vào cùng các hàng; ảnh user xác nhận khó đọc | **Pilot** tách 4 nhóm thành công thức riêng, giữ chính xác 16/16 biểu thức theo thứ tự |
| **P0 trình bày** | G10 ChIV Bài 9 — `sgk/chuong-iv/bai-9.md` | AP1/AP4: D1.1–D1.4 là nhãn kiểm toán, 5 tính chất nối trong một câu; ảnh user | **Pilot** thay nhãn học sinh, tách tính chất, giữ chính xác 30/30 biểu thức theo thứ tự |
| **P1** | G11 ChI Bài 1 | AP1/AP2: đổi góc, điều kiện tan/cot và nhiều công thức góc đặc biệt trong các đoạn khá dày | Audit & phân nhóm ở batch sau |
| **P1** | G10 ChIV Bài 7 và Bài 8 | AP1/AP4: nhiều khối `D1.x` là văn xuôi dài, thiếu thứ bậc đề mục người học | Audit & áp dụng mẫu khi Owner duyệt |
| **P1** | G10 ChIV Bài 10 | D1.x còn hiện trên trang học sinh nhưng đã có công thức riêng dòng ở một số mục | Chủ yếu chuyển nhãn, chỉnh đoạn, giữ MathJax |
| **P2** | G10 ChII Bài 3 | Có nhãn Định nghĩa/Cặp nghiệm/Quy trình, nhưng một số đoạn quá dài | Tách quy trình thành bước và điều kiện |
| **Đối chứng tốt** | G10 ChIII Bài 5; G10 ChVI Bài 16; G10 ChVII Bài 19 | Có nhóm kiến thức rõ, một số công thức hiện riêng dòng, điều kiện và ví dụ tách biệt | Học theo cấu trúc, không đổi hàng loạt |
| **Theo dõi** | G10 ChIX Bài 26 | Chia thành các tiểu mục rõ, phần điều kiện được nhấn | Không mặc định lỗi; AP3/AP5 cần QA hình |

**Không suy rộng** kết quả lấy mẫu thành kiểm toán mọi chương/lớp. Các biểu đồ, SVG, bảng công thức còn cần xem ảnh thực tế sau build. Không thay đổi nội dung câu hỏi, item_id, đáp án, điều kiện, rubric.

## Phương án mẫu (pilot hai trang)

1. **G11 Bài 2:** Giữ 4 mục theo SGK; đặt từng công thức quan trọng ở khối MathJax riêng, kết nhóm theo sin/cos/tan hoặc tổng/hiệu; đưa điều kiện/lỗi thường gặp về ngay sau công thức liên quan. Các chuỗi toán gốc (16/16) được chuyển nguyên văn từ `\\(…\\)` sang `\\[…\\]` khi cần, không biến đổi biểu thức hay lời giải.
2. **G10 Bài 9:** Thay nhãn D1.1–D1.4 bằng đề mục **Định nghĩa / Tính chất / Trung điểm và trọng tâm / Ứng dụng**, các quy tắc thành danh sách; giữ 30/30 biểu thức toán và giữ nguyên ví dụ, nguồn canonical, SVG.
3. **Biên giới thay đổi:** Dự kiến `DELTA_A_UI` nếu kiểm tra parity toán và lời giải đạt; khi chuẩn hóa ký hiệu \sin/\cos hoặc phân số ở batch tiếp theo phải phân loại `DELTA_B_SOURCE_EQUIVALENT`, ghi log kiểm chứng tương đương. Không tự thay đổi câu hỏi/đáp án/rubric.
4. **Gate trước merge:** QA diff giới hạn hai file SGK Kiến thức + QA/docs, parity biểu thức gốc, strict MkDocs build, QA browser **desktop 1440 / tablet 820 / phone 390**, kiểm tra hiển thị MathJax, liên kết, SVG, ảnh hưởng THCS. Chỉ merge/deploy sau Owner xác nhận cụ thể mẫu.

## Yêu cầu cho các gói học liệu từ sau checkpoint

Mọi gói `CONTENT_READY` khi lên release cần thêm **AP1–AP5 acceptance** ngoài A1–A7, R1–R5. Release lane tự rà soát trình bày, không tự bổ sung toán học ngoài snapshot reviewer. Nếu chỉ thay layout, áp dụng `DELTA_A_UI`; nếu đổi ý nghĩa/đáp án/rubric/phạm vi, `DELTA_C_ACADEMIC_MATERIAL` và NotebookLM review đúng delta, P0/P1 học thuật chặn nghiệm thu.

**Tình trạng tại thời điểm lập:** Pilot **đã chỉnh mã trên nhánh Draft**; AP1/AP4 và biểu thức được kiểm tra từ source, **chưa có ảnh nghiệm thu, chưa AP3/AP5 PASS, chưa merge/deploy**. Bước kế tiếp: chạy CI trên exact pilot HEAD, xem screenshot 2 màn hình điển hình, điều chỉnh mức dãn dòng; chủ dự án nghiệm thu mẫu trước khi rollout batch.
