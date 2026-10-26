# THPT — Hai lối học đầy đủ, một hệ thống Core thống nhất (R2 — định hướng chủ dự án, 26/10/2026)

**Trạng thái:** OWNER-DIRECTION-RECORDED / ARCHITECTURE-CONTRACT-CANDIDATE / NO DEPLOY / ACADEMIC REVIEW PENDING.  
**Nguồn xác minh cấu trúc:** Bộ SGK/SBT KNTT THPT đã định vị trên Google Drive. Trong Toán 10 tập 2, **Bài 16: Hàm số bậc hai** trình bày mạch **1. Khái niệm hàm số bậc hai**, **2. Đồ thị của hàm số bậc hai**, kèm luyện tập và vận dụng. Chứng cứ mục lục/tên đề mục tham khảo: https://www.sachgiaokhoa.online/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vi-ham-so-do-thi-va-ung-dung-3132/bai-16-ham-so-bac-hai-11335.html . Đối chiếu nguồn chính S1 và số trang trong NotebookLM THPT trước khi phê duyệt nội dung, không tự nhận đã học thuật PASS.

## 1. Một dự án, hai hệ thống kiến thức hoàn chỉnh

Toán THPT vẫn nằm trong **cùng website/repository Self-Learning Math**. Hai trục đều phải là **đường đọc kiến thức đầy đủ, không phụ thuộc đường kia**:

| Trục | Học sinh nhìn thấy | Kiến thức | Luyện tập |
|---|---|---|---|
| **Theo SGK KNTT (ngang)** | Lớp → Chương → Bài → trang bài học | **Một bài lý thuyết hoàn chỉnh**, ngắn, chuẩn, đúng SGK, kiến thức/công thức/điều kiện/ví dụ; không buộc mở trang chuyên đề để hiểu | Các **thẻ Core luyện tập** ngay dưới bài; liên kết tới dạng bài/tự luận liên quan |
| **Theo chuyên đề (dọc)** | Cây chuyên đề xuyên lớp 10–12, có tiền đề THCS | **Một trang kiến thức chuyên đề hoàn chỉnh**, nhiều tầng theo độ sâu, tổng hợp kiến thức xuyên bài/chương/lớp và nối kiến thức | Danh mục **chính những thẻ Core có liên quan**, guided Practice, Readiness tách biệt và Written canonical |

**Cho phép trùng ý kiến thức thiết yếu** giữa hai lối đọc vì hai văn cảnh có mục tiêu khác nhau; không ép học sinh chuyển sang trục còn lại để học phần thiếu. Nhưng **không nhân bản ngân hàng câu hỏi/đáp án/attempt**, và không tạo hai bản dữ kiện học thuật mâu thuẫn.

## 2. SGK KNTT: Lớp → Chương → Bài

- Mỗi **Chương** có trang tổng quan thật gọn: tên chuẩn SGK, mục tiêu/chủ điểm, danh sách bài, kết nối kiến thức nền; hiển thị các bài dưới dạng **tab theo tên bài** khi vừa số lượng và hợp bố cục. Nếu nhiều bài, tab dài hoặc điện thoại nhỏ, dùng **tab cuộn/nút chọn bài**/danh sách không chật chội. **Không bắt buộc mọi chương đều phải là tab giao diện.**
- Mỗi bài giữ **URL độc lập có thể bookmark**, ví dụ `/thpt/kntt/lop-10/chuong-vi/bai-16/`, với tiêu đề `Bài 16. Hàm số bậc hai`. Tab chương chỉ là điều hướng tới những URL bài tương ứng; Back/Forward và deep links phải chính xác.
- Nội dung bài gọn, đi vào trọng tâm, nhưng **đủ** mục tiêu S1, kiến thức mới, định nghĩa/điều kiện, hình vẽ nếu cần, ví dụ và luyện tập. Không sao chép nguyên SGK và không cắt ý quan trọng để giảm chữ.
- Dưới phần lý thuyết: **Thẻ Core của bài** (mục tiêu skill, câu hỏi mẫu, luyện ngay/gợi ý/phản hồi). **Bỏ tab Kiến thức trong Core THPT** vì phần này đã hiện ở cấp bài. Cho phép liên kết ngắn “Ôn khái niệm” quay về chính đoạn kiến thức bài (không phải một bản copy).
- Không bắt buộc học sinh hoàn thành bài khác mới đọc được lý thuyết; tối đa dùng gợi ý tiền đề, không hard mastery lock.

## 3. Một Core — ba lối vào, không ba bản sao

1. Sau bài KNTT: nhóm Core được bài này giới thiệu hoặc dùng trực tiếp.
2. **Thư viện Core KNTT**: lọc theo lớp/chương/bài, kỹ năng, trạng thái; dẫn về **cùng Core ID**.
3. Trên chuyên đề: nhóm các Core liên quan, có thể đến từ nhiều bài KNTT hoặc nhiều lớp; dẫn về **cùng Core ID**.

**Hợp đồng định danh/ánh xạ đề nghị:**

```text
THPT Lesson (stable ID) ── many-to-many ── Topic (stable ID)
           │                                      │
           └──── links to shared Core skill IDs ─┘
                            │
                   one canonical item bank
                   one review/key/version
                   one attempt namespace per learner
                   entry_context identifies navigation origin
```

- Một Core có thể liên quan nhiều bài và nhiều chuyên đề, nhưng phải có **vị trí SGK chính** hoặc vai trò `introduced/reinforced`, tránh đặt đi đặt lại vô lý; đồng bộ sửa đáp án tại nguồn duy nhất.
- Dùng `entry_context` để có nút quay lại đúng bài, thư viện hay chuyên đề đã mở. Không xem một câu làm từ ba đường vào là ba lần hoàn thành khác nhau.
- Readiness độc lập **không gợi ý/tiết lộ đáp án sớm**; Practice formative có gợi ý; Written chấm qua rubric/tự kiểm, không giả vờ AI chấm được nét chữ trên giấy.
- Giữ ID THCS, tiến độ, localStorage/Firebase, dữ liệu học sinh và API tách namespace khỏi THPT; hạ tầng website/CSS/MkDocs/QA có thể tái sử dụng.

## 4. Form cố định cho bài học lý thuyết — ngôn ngữ gần SGK

**Khung tiêu đề cấp một bài (không biến mỗi bài thành một bộ tên mục sáng tạo):**

- **[Tên chính thức của bài]** — ví dụ `Bài 16. Hàm số bậc hai`.
- **Mục tiêu** (rất ngắn, đầu bài, có thể là vùng không đánh số).
- **1. Khái niệm / Định nghĩa** *khi bài có khái niệm mới*.
- **2. Tính chất / Định lí / Quy tắc / Công thức / Đồ thị** — chỉ dùng các mục phù hợp, có thể dùng **đúng tên nội dung SGK của bài** làm tiêu đề cấp 2, thay vì ép mọi bài có “Công thức”.
- **Ví dụ** — ví dụ chuẩn có các bước giải; ví dụ đặt ngay sau lý thuyết liên quan nếu tốt hơn một chương riêng.
- **Luyện tập** — 1–3 câu Micro thực tế và các thẻ Core ngay dưới bài, không làm bản sao Practice Bank.
- **Vận dụng** — có khi đúng yêu cầu cần đạt, tối thiểu một liên hệ/ví dụ gắn với nội dung; không nhồi thêm nếu không tạo giá trị.
- **Lưu ý / Lỗi thường gặp** (tùy chọn) và **Ôn tập / Học tiếp** (ngắn, cuối bài).

**Quan trọng:** Chuẩn hóa **loại nhãn** (`Khái niệm`, `Định nghĩa`, `Tính chất`, `Đồ thị`, `Ví dụ`, `Luyện tập`, `Vận dụng`), nhưng không ép mọi bài có đúng các mục theo thứ tự cứng hoặc số mục giống nhau. `Nhận ra parabol` hay `Hiểu qua một ví dụ` **không dùng làm tiêu đề chuẩn**; nếu cần thì chỉ xuất hiện trong lời giải thích, không thay hệ thống tiêu đề. Tên bài/mục toán học cụ thể bên dưới luôn cần ngữ nghĩa: `Đồ thị của hàm số bậc hai`, `Đỉnh và trục đối xứng`, v.v.

**Định dạng một đoạn kiến thức:** phát biểu ngắn → điều kiện/ý nghĩa → công thức MathJax → 1 ví dụ đúng nếu cần → lưu ý. Ưu tiên chữ dễ đọc (PC và iPad/iPhone), không đưa mục tiêu sang 8 infographic đầu bài.

## 5. Trục chuyên đề — kế thừa cấu trúc THCS đã nghiệm thu

- Chuyên đề có bản đồ/điều kiện tiền đề, hệ thống kiến thức **độc lập và đầy đủ** từ nền đến vận dụng, các dạng bài gộp nhiều bài/lớp, ví dụ mẫu, lỗi điển hình, kết nối trước/sau và Practice/Written.
- CĐ có thể trỏ đến bài SGK để hiểu cùng một ý trong ngữ cảnh lớp/chương, **nhưng liên kết không thay thế giải thích bắt buộc** trên chuyên đề.
- Duy trì bố cục semantic §3/§5 theo thực tế nội dung, tab chỉ khi đọc dễ hơn, không hai trang khác nhau cho một chuyên đề.
- Không xóa kiến thức chuyên đề chỉ vì đã có ở SGK; chỉnh hai kênh khi cùng một khái niệm được cập nhật sau review bằng `concept_id`/nguồn xác minh.

## 6. Infographic/hình học

**Mặc định bài HTML + công thức + bảng ngắn.** Chỉ thêm SVG/đồ thị/hình học/timeline khi làm rõ **quan hệ không gian, hàm số, biến thiên, phân bố/xác suất hoặc thao tác trực quan**. Không biến công thức/định nghĩa đã có thành poster to lặp. Không quota infographic; SVG phải chính xác toán học, alt/caption và kiểm thử trên thiết bị thật.

## 7. Điều kiện chấp nhận R2

1. Sửa `prototypes/thpt/g10-b16-knowledge-pilot-r1.html` theo R2, **không merge R1 còn dùng hệ tiêu đề chưa thống nhất**.
2. Làm prototype **một trang Chương VI với tab/nút Bài 15, 16, 17, 18** (đúng số/tên trong SGK sau source check) và trang bài B16 với hệ tiêu đề chuẩn, **lý thuyết + Core dưới bài (chưa cần tạo ngân hàng câu hỏi thật)**; xây **một trang chuyên đề Hàm số** độc lập dùng chung ID Core mẫu, plus library Core route (có thể mock, không ghi dữ liệu).
3. Đo thử: mở từ cả ba lối vào cùng Core, Back/Forward trở lại đúng ngữ cảnh; hai kiến thức đọc **đều đầy đủ độc lập**; không đồng nhất attempt theo số bản sao; responsive desktop/touch/phone, MathJax, không overflow hoặc kép UI.
4. Kiểm duyệt học thuật bằng notebook THPT có SGK/SBT đã cung cấp và owner signoff trước khi phát hành; chưa tuyên bố bài 16 đạt S1 khi thiếu receipt. THCS Issue #578 vẫn đóng, không sửa site live vì thay đổi này.

**Phân loại quyết định:** Hai trục kiến thức đều độc lập đầy đủ; Core là một nguồn, ba lối; trục SGK dùng Lớp→Chương→Bài với lý thuyết chuẩn gần SGK; topic THCS-style; infographic tối giản là **owner product direction confirmed**. Chi tiết URL/ID và phương án tab responsive là **implementation proposal requiring QA**, không phải đã nghiệm thu UI R2.


## 8. Quyết định bổ sung của chủ dự án — hoàn thiện hệ luyện tập (26/10/2026)

**Trạng thái: OWNER CONFIRMED.** Sơ đồ R2 trước đó thiếu Practice, Readiness và Thư viện tự luận/mỏ neo ở trục chuyên đề. Phục hồi **đầy đủ**, giống hợp đồng học tập Toán THCS đã nghiệm thu. Tách rạch ròi phần tương tác máy chấm với việc học sinh viết ra giấy. Cả hai trục kiến thức đều vẫn độc lập và đầy đủ; **bốn hoạt động khác nhau không được gom thành một “bài tập” chung**.

| Lớp học / Nơi xuất hiện | Hình thức | Gợi ý | Chấm và công bố kết quả | Ý nghĩa chứng cứ |
|:--|:--|:--|:--|:--|
| **Core** (dưới bài SGK, thư viện Core KNTT, nhóm Core chuyên đề) | Tương tác theo kỹ năng; **chỉ một canonical Core ID** | **Có**, người học chủ động mở | Phản hồi sau nộp theo hoạt động | **Formative**, không tự phong Readiness |
| **Luyện tập chuyên đề (Practice)** | Tương tác các dạng bài theo chuyên đề; độc lập với tập Core | **Có** | Giải thích, chữa lỗi; phản hồi theo hoạt động | **Formative**, riêng bộ item/attempt với Core |
| **Tự kiểm tra (Readiness)** | Tương tác độc lập, đi tới/lùi, được sửa đáp án đến khi nộp cuối | **Không có**, không hé đúng/sai hoặc lời giải trước nộp | Chỉ hiện điểm, lỗi và giải thích **sau Final Submit**; không Tutor giải bài trong phiên | Bằng chứng kiểm tra độc lập, tách Practice; trạng thái và phiên bản rõ ràng |
| **Thư viện bài tự luận (Written)** | Đọc đề, **làm trên giấy**, so đáp án với lời giải và **rubric** | **Có** theo yêu cầu; gợi ý từng bước tùy người học | Người học tự đối chiếu, **không giả vờ máy chấm bài trên giấy** | Không tự tăng mastery/Readiness từ thao tác xem rubric |
| **Bài mỏ neo (Anchor Written)** | **Tiểu loại/nhãn** bài trong **cùng thư viện tự luận canonical**, không phải ngân hàng thứ hai | **Có** theo nhu cầu | Rubric giải thích chiến lược chọn phương pháp, tính logic, trình bày, kiểm tra nghiệm | Đại diện một **dạng bài quan trọng**, có thể nối nhiều kỹ năng |

**Bố cục trang chuyên đề THPT đầy đủ:**

```text
Chuyên đề (trục dọc, lý thuyết tự đủ)
  ├─ Kiến thức: định nghĩa, công thức/điều kiện, ví dụ, liên hệ, lỗi điển hình
  ├─ Core theo chuyên đề: cùng các thẻ Core canonical được bài SGK và thư viện Core dùng
  ├─ Luyện tập chuyên đề: bài tương tác có gợi ý và phản hồi
  ├─ Tự kiểm tra: bài tương tác không gợi ý, kết quả/lời giải sau Final Submit
  └─ Thư viện tự luận (liên kết cùng kho canonical): thường + [Mỏ neo], gợi ý/rubric
```

**Bố cục trục SGK:** `Lớp → Chương → Bài` có phần lý thuyết gọn đủ và các **Core tương tác ngay bên dưới bài**, không còn tab Kiến thức trong Core THPT. Cùng Core mở được ở (1) bài học, (2) thư viện Core SGK, (3) chuyên đề. Một item/ID/đáp án/cơ chế chấm, không tự sinh bản sao vì ba điểm vào. Các liên kết tới Practice/Readiness/Written từ trục SGK nếu có chỉ là **điểm dẫn tới đúng hoạt động canonical**, không nhân bản ngân hàng.

**Cấu trúc tự luận canonical:** `WRI-THPT-...` là một đề có `source_refs`, `topic_ids`, `lesson_ids`, `problem_type`, `is_anchor`, `hint_steps`, `rubric_criteria`, `worked_solution` và `revision`. **Mỏ neo là cờ phân loại**, không một ngân hàng hay luồng chấm trùng lặp. Phân biệt nhãn `Có gợi ý` và `Không gợi ý` bằng chữ, không chỉ màu.

**Giao diện và tiêu đề:** Đồng ý chuẩn hóa nhóm tên mục gần SGK (Khái niệm/Định nghĩa, Công thức/Tính chất/Đồ thị, Ví dụ, Luyện tập, Vận dụng), **nhưng không bắt buộc mỗi bài có cùng tập hợp/chuỗi tiêu đề**. Hình/infographic chỉ thêm khi đem lại thông tin toán học thực sự chưa được trình bày rõ bằng HTML/MathJax.

### R2 demo acceptance (functional, NOT academic)

- Cùng một Core `core_id` vào từ ba vị trí và cùng trạng thái tương tác trong một phiên demo; nhấn Back về đúng ngữ cảnh.
- Practice có gợi ý và chữa lỗi, item/ID riêng với Core.
- Readiness có Previous/Next, sửa được trước Final Submit, **không có gợi ý hoặc chấm sớm**; giải thích chỉ sau submit.
- Written có nút tự mở gợi ý và rubric; Anchor được đánh nhãn rõ, **không tạo một hệ thống bài tập thứ năm**.
- Hai tuyến lý thuyết đọc độc lập, đồ thị chuẩn, không hình poster lặp lại; responsive desktop/điện thoại/tablet, bàn phím và đủ điều kiện học thuật trước phát hành.
- **Mọi số liệu câu hỏi/bản vẽ trong prototype R2 là demo để thử tương tác, chưa là học liệu S1 hoặc bộ ngân hàng được phê duyệt.**
