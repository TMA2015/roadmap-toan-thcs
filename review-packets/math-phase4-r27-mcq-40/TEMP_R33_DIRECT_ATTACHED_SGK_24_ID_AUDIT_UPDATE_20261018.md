# R33 — Xác minh trực tiếp 15 ID còn thiếu bằng SGK gốc do Project Owner cung cấp

**Packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**Ngày:** 2026-10-18  
**Status:** `SOURCE_ACCESS_RESOLVED_24_OF_24__ACADEMIC_CITATION_DECISION_PENDING`  
**Phạm vi:** Chỉ 12 ID `NUM02V1_121–132` và 3 ID `QUA12V1_121–123`. 9 ID Toán 7 trước đó được giữ trong phụ lục quan sát của nhà xuất bản; 16 ID ngoài phạm vi R30 không thay đổi.

## 1. Hai file PDF SGK gốc đã mở trong phiên làm việc

| File do người dùng gửi | Dung lượng | SHA-256 của **file PDF thật** | Số trang PDF |
|---|---:|---|---:|
| `sach-giao-khoa-toan-6-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf` | 22,110,049 B | `774c04c28d425cc2ece06915db655e2b74e6d922ffa9546af2fe300813acde6c` | 113 |
| `sach-giao-khoa-toan-9-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf` | 23,432,709 B | `eda1f0014afff53915190cf893345221b1a5bfa35407d58cec67b527655b597c` | 135 |

Đây là **bản SGK KNTT thực tế đã đọc bằng mắt**, không dùng VietJack làm nguồn thay thế. PDF được giữ trong tệp đính kèm cuộc trò chuyện, **không** sao chép nguyên ảnh/nội dung sách vào GitHub. CI trên GitHub chỉ xác minh được bản ghi và **chuỗi SHA-256 được khai báo**, không thể xác minh bytes của các PDF đính kèm nếu chúng không có trong runner. File JSON đồng hành được khóa bằng Git blob SHA.

**Quy tắc trang PDF:** Trang in Toán 6 +1 = số trang PDF; trang in Toán 9 +2 = số trang PDF. Ví dụ Toán 6 p37 = PDF p38; Toán 9 p114 = PDF p116. Luôn ưu tiên **số trang in đọc được dưới chân trang**, không suy từ tên file render.

## 2. SGK Toán 6 tập 2 — Bài 30, trang 35–37

- **Trang 35:** quy tắc làm tròn số thập phân dương, trường hợp tăng/giữ chữ số; minh họa 6,2→6 và 4,8→5.
- **Trang 36:** Ví dụ 1 làm tròn 24,037 đến hàng phần mười; 2 156,8 đến hàng chục; Vận dụng 1 làm tròn 479 633 đến hàng nghìn.
- **Trang 37:** Ví dụ 2 ước lượng chi phí `65 000 × 3` từ 2,8 kg; Bài 7.12 làm tròn **thuận** số 387,0094; 7.13 chọn kết quả ước lượng của **tổng ba số**; 7.14 chia 6,32 m thành bốn đoạn rồi làm tròn; 7.16 ước lượng tổng chi phí nhiều món.
- **Trang 38:** Bài 31 — *Một số bài toán về tỉ số và tỉ số phần trăm*, **không** thuộc Bài 30.

### Đối chiếu 12 ID

| ID | Địa chỉ S1 từ bản PDF | Loại bằng chứng **đề xuất**, chưa phê duyệt | Rủi ro/điều chỉnh dẫn chứng |
|---|---|---|---|
| `NUM02V1_121` | p35–36 Mục 1 / Ví dụ 1 | `STRUCTURAL_CLONE` | Cùng thao tác làm tròn đến phần mười; số khác |
| `NUM02V1_122` | p35–36 quy tắc | `CONCEPT_BASE` | Quy tắc bao quát phần trăm; Ví dụ 1 minh họa phần mười |
| `NUM02V1_123` | p35 quy tắc, p36 Ví dụ 1 | `CONCEPT_BASE` | Trường hợp chữ số sau bằng 5 được quy tắc khẳng định; không tìm thấy cùng dữ liệu |
| `NUM02V1_124` | p35 quy tắc | `CONCEPT_BASE` | Trường hợp nhớ hàng `0,996→1,00` là vận dụng quy tắc, không trùng bài SGK |
| `NUM02V1_125` | p35 hình làm tròn khối lượng | `STRUCTURAL_CLONE` | Cùng làm tròn xuống hàng đơn vị |
| `NUM02V1_126` | p35 hình làm tròn khối lượng | `STRUCTURAL_CLONE` | Cùng làm tròn lên hàng đơn vị |
| `NUM02V1_127` | p35–36 quy tắc; p37 Bài 7.14 để so sánh | `CONCEPT_BASE` | 7.14 phải chia chiều dài trước khi làm tròn; khác câu đo độ dài một bước |
| `NUM02V1_128` | p36 Vận dụng 1 | `STRUCTURAL_CLONE` | Vận dụng 1 làm tròn số nguyên đến hàng nghìn; không nên lấy Bài 7.16 (ngân sách nhiều món) làm clone |
| `NUM02V1_129` | p36 Mục 2; p37 Bài 7.13 | `CONCEPT_BASE` | Cùng ước lượng tổng nhưng 7.13 có ba số và dạng chọn kết quả, khác R27 hai số |
| `NUM02V1_130` | p37 Ví dụ 2 | `CONCEPT_BASE` | Có ước lượng **phép nhân** nhưng chỉ làm tròn khối lượng, R27 làm tròn cả hai thừa số; Bài 7.13 là phép cộng |
| `NUM02V1_131` | p35 khung quy tắc | `CONCEPT_BASE` | Câu kiểm tra lý do áp dụng quy tắc |
| `NUM02V1_132` | p35–37 quy tắc + Bài 7.12 | `CONCEPT_BASE` | Bài 7.12 làm tròn thuận, R27 đảo ngược nhận diện số; **bỏ trang 38**, không gọi `STRUCTURAL_CLONE` của 7.12 |

Các đề xuất ở trên sửa **độ chính xác của trích dẫn**, không thay nội dung toán hoặc phương án trả lời.

## 3. SGK Toán 9 tập 2 — Bài 18–19 và Thực hành GeoGebra

- **Bài 18, trang in 4–9:** hàm số `y=ax²` và đồ thị parabol (chưa có bài mẫu lập phương trình hoành độ giao điểm với đường thẳng ở các trang này).
- **Bài 19, trang in 10–17:** giải phương trình bậc hai một ẩn; **trang 14, Ví dụ 6** mô tả trường hợp `Δ=0` và nghiệm kép.
- **Trang in 113:** dùng GeoGebra vẽ đồ thị `y=ax²` cùng đường thẳng `y=ax+b`, sử dụng lệnh `Intersect` để tìm tọa độ giao điểm.
- **Trang in 114:** *Thực hành 3*, đường thẳng `y=2x+√3` và parabol `y=x²`; yêu cầu vẽ trên cùng mặt phẳng và tìm tọa độ giao điểm bằng phần mềm.
- **Không đồng nhất hai kết luận:** SGK có bài tìm giao điểm bằng GeoGebra, nhưng đó không phải ví dụ SGK trực tiếp dạy tìm giao điểm **bằng cách tự lập/giải phương trình**; ví dụ nghiệm kép của phương trình bậc hai cũng chưa phải bài chứng minh trực tiếp **đường thẳng tiếp xúc parabol**.

### Đối chiếu ba ID

| ID | Địa chỉ S1 gốc | Bằng chứng có thật | Cần quyết định học thuật |
|---|---|---|---|
| `QUA12V1_121` | Bài 18 pp4–9; Bài 19 pp10–17; GeoGebra pp113–114 | Có hàm `y=x²`, khái niệm phương trình bậc hai và bài tìm giao điểm bằng phần mềm; câu R27 yêu cầu **lập phương trình hoành độ** | `CONCEPT_BASE` kết hợp, chưa chốt `Entrance10` |
| `QUA12V1_122` | Bài 18/19 + GeoGebra pp113–114 | Có giao điểm hai đồ thị, có kỹ năng giải phương trình riêng lẻ; R27 giải giao điểm bằng đại số thủ công | Không coi là `STRUCTURAL_CLONE` trực tiếp theo **cùng phương pháp** |
| `QUA12V1_123` | Bài 19 p14 Ví dụ 6; GeoGebra pp113–114 | SGK dạy nghiệm kép, giao điểm đồ thị; chưa thấy phát biểu trực tiếp nối nghiệm kép với tiếp xúc giữa parabol và đường thẳng tại đây | `COMPOSITE_CONCEPT_BASE` là đề xuất, kiểm toán Core/Entrance10 cần phê duyệt riêng |

**Lưu ý về logic bằng chứng:** Không thấy một dạng bài ở các trang đã kiểm tra **không chứng minh nó vắng mặt trên mọi phần sách**. Không tự kết luận `Entrance10` từ một nhận xét về tính phổ biến ôn thi. R32 đề nghị đổi 3 ID thành `Entrance10` nhưng vẫn phải có chứng cứ phù hợp với Master Plan và chủ dự án phê duyệt.

## 4. Tình trạng 24/24 ID sau khi nhận lại nguồn SGK

| Hạng mục | Trước khi người dùng gửi PDF | Sau khi xem PDF |
|---|---:|---:|
| Có trang S1 trực tiếp làm cơ sở đối chiếu cho câu (Toán 7 cũ + hai PDF mới) | 9 | **24** |
| Toán 9 có bằng chứng kiến thức nền đơn lẻ trước đó | 3 | Đã đọc thêm pp113–114, Bài 18–19 và so sánh từng dạng |
| Toán 6 chưa thể đọc trang SGK | 12 | **0** |
| Academic PASS đã phê duyệt | 0 | **0** |
| Thay đổi câu hỏi, đáp án, Skill, lịch sử, Mastery, Readiness | 0 | **0** |

**Quan trọng:** `S1 page observed for all 24` có nghĩa **đã có nguồn để kiểm tra và đối chiếu**, không có nghĩa `24/24 PASS`, `24/24 Core`, hay toàn bộ bằng chứng `EXACT_MATCH`.

Dữ liệu dạng máy kèm theo: `TEMP_R33_USER_ATTACHED_PRIMARY_S1_15_ID_OBSERVATIONS_20261018.json` (15 ID, đối chiếu nguồn tới trang in & số trang PDF, exact PDF SHA-256). Bản gốc PDF vẫn nằm trong tệp hội thoại, không upload lên GitHub.

## 5. Cổng nghiệm thu kế tiếp

1. Đánh giá đề xuất metadata/chứng cứ từ nguồn S1, tránh nhầm **CONCEPT_BASE** thành **STRUCTURAL_CLONE/EXACT_MATCH**.
2. Riêng CT12, quyết định tầng chính theo chuẩn học thuật/kiến trúc. **Chưa** tự động chuyển ba câu thành `Entrance10`.
3. Ghép SHA-256 câu R27 và source Git blob SHA theo bộ kiểm tra R33; đối chiếu bằng chứng sơ bộ Toán 7 đã có.
4. Chủ dự án duyệt metadata cuối, độc lập với máy CI. Chỉ sau khi duyệt mới quyết định sửa metadata có tác động tới ứng dụng.
5. Không tự kích hoạt đánh giá Skill/Readiness/Mastery; không backfill dữ liệu học sinh.

**Trạng thái QA-only:** `SOURCE_S1_REVIEW_SCOPE_COVERED_24_OF_24`, `ACADEMIC_PASS_AUTHORIZED_FALSE`, `PRODUCTION_SKILL_COUNTER_AUTHORIZED_FALSE`.
