# Temp · Toán 10 KNTT Tập 2 · Chương VI B15–B18 · D6 Remediation A5 Gap R01

**PACKET_ID:** `THPT-G10-CHVI-B15-B18-D6-A5-GAP-20261030-R01`  
**REVIEW_STATE:** `ACADEMIC_CANDIDATE_NOTEBOOKLM_PENDING`  
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` — thêm học liệu hỗ trợ D6 cho bốn bài; **không sửa D1–D5, không sửa stem/answer/rubric canonical**.  
**RELEASE_SCOPE:** `SGK_CHAPTER / PUBLIC_FORMATIVE_SUPPORT_ONLY` · **NOT** independent Chapter Readiness.  
**CURRENT_DEPLOYMENT:** Chương VI public formative hiện đã có website; manifest `inventory/G10-SGK-CHVI.md` trên main giữ **A5_D1_D6_SCOPE chưa đánh dấu**. Gói này không tự nâng A5 hay sửa website.  
**SOURCE_BASE:** Main GitHub `TMA2015/self-learning-math` commit `6a9003dfd51ae249a02f4239b75a093dac4e1b81`; bản xem xét này là học liệu mới, không phải một phần của verdict cũ.

## 1. Tài liệu nguồn và giới hạn review

- S1: **SGK Toán 10 Kết nối tri thức, tập 2**, Chương VI, B15 *Hàm số* trang in 4–10; B16 *Hàm số bậc hai* 11–18; B17 *Dấu của tam thức bậc hai* 19–24; B18 *Phương trình quy về phương trình bậc hai* 25–27; bài tập cuối chương 28–29.
- S1: **SBT Toán 10 KNTT, tập 2**, B15 trang 3–9, B16 10–15, B17 16–18, B18 19–21; bài tập cuối chương 22–27.
- Trang được ghi theo biên bản nguồn ở repo `prototypes/thpt/THPT_G10_CHVI_OUTCOME_AND_SHARED_ITEM_PREFLIGHT_v0.1.md` và bộ biên bản trực quan B15–B18, cùng SGK/SBT gốc trong thư mục `KNTT TOAN 10` trên Drive. Những trang này là **citation targets để NotebookLM đối chiếu độc lập**, không tuyên bố lượt soát trực tiếp PDF thứ hai mới hoàn thành trong đợt này.
- Nguồn học thuật đã duyệt: `prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md` (snapshot 54/54, bao gồm 36 public + 18 held-out candidates; **không áp verdict đó cho 8 thẻ D6 mới**); `prototypes/thpt/THPT_G10_CHVI_APPROVED_KNOWLEDGE_PARITY_S1_20261028.md` (19 SGK outcomes).
- D3 public exact-source bank hiện có: `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js` đối với B15/B17/B18; B16 giữ Core/Practice bản canonical R4. B15, B17, B18 đều có các ID C01/C02 và P01–P04. Không thêm/copy câu mới; mọi đường dẫn chỉ tới câu công khai có sẵn.
- **5 Permanent Sources NotebookLM THPT v2.0:** `01_THPT_MASTER_PLAN_v2.0.md`; `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`; `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`; `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`; `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`. Đối chiếu cả nguồn 08 Dual Complete v2.0, handoff 06 và delta 07 trong ChatGPT Project.

## 2. Sổ theo dõi expected IDs và phạm vi

**EXPECTED_HELP_ID=8; EXPECTED_CANONICAL_NEW_ITEM_ID=0; EXPECTED_MODIFIED_ITEM_ID=0; EXPECTED_NEW_FIGURE_ID=0; EXPECTED_OUTCOME_IDS=19 existing (unchanged).** D6 là học liệu hỗ trợ, **không phải item thi / item luyện tập mới**.

| HELP_ID | Bài | Outcome cũ cần hỗ trợ | Public practice nơi kiểm chứng hiểu bài |
|---|---|---|---|
| `HELP-G10-B15-01` | B15 | `B15_OUT_01`, `B15_OUT_03` | `THPT-G10-B15-C01` + SGK B15 đọc đồ thị (D1/D2) |
| `HELP-G10-B15-02` | B15 | `B15_OUT_02`, `B15_OUT_04`, `B15_OUT_05` | `THPT-G10-B15-C02`, `THPT-G10-B15-P01`–`P04` theo skill |
| `HELP-G10-B16-01` | B16 | `B16_OUT_01`, `B16_OUT_02`, `B16_OUT_04` | B16 SGK Core R4 / B16 Practice hiện có, **không nhân bản ID** |
| `HELP-G10-B16-02` | B16 | `B16_OUT_03`, `B16_OUT_05` | B16 SGK Practice/ví dụ mô hình đã review, **không cấp ID khác** |
| `HELP-G10-B17-01` | B17 | `B17_OUT_01`, `B17_OUT_02` | `THPT-G10-B17-C01`, `THPT-G10-B17-C02` |
| `HELP-G10-B17-02` | B17 | `B17_OUT_03`, `B17_OUT_04`, `B17_OUT_05` | `THPT-G10-B17-P02`, `THPT-G10-B17-P03`, `THPT-G10-B17-P04` |
| `HELP-G10-B18-01` | B18 | `B18_OUT_01`, `B18_OUT_03` | `THPT-G10-B18-C02`, `THPT-G10-B18-P03` + C01/P01 về dấu vế phải |
| `HELP-G10-B18-02` | B18 | `B18_OUT_02`, `B18_OUT_04` | `THPT-G10-B18-P02`, `THPT-G10-B18-P04` |

**Cách dùng:** D6 chỉ mở từ bài giảng/Luyện tập công khai; không hiện ở Tự kiểm tra trước Final Submit. Mỗi thẻ có 5 bước: TRIỆU CHỨNG → XÁC ĐỊNH LỖI → KIẾN THỨC CHỐT → TỰ SỬA → LUYỆN LẠI. Không tự chấm hay cập nhật Skill Mastery.

---

## 3. Nội dung mới cần NotebookLM phản biện (8 thẻ)

### `HELP-G10-B15-01` · Một đầu vào có đúng một đầu ra

**Outcome:** `B15_OUT_01`, `B15_OUT_03`; **placement:** SGK_KNOWLEDGE_HELP / SGK_PRACTICE_HELP.

1. **TRIỆU CHỨNG:** Em cho rằng một bảng *không phải hàm số* vì có hai dòng cùng giá trị đầu vào, hoặc kết luận đó là hàm số dù cùng một đầu vào có hai kết quả khác nhau.
2. **XÁC ĐỊNH LỖI:** Với từng giá trị đầu vào \(x\) nằm trong tập xác định, em hãy liệt kê tất cả giá trị \(y\) đi kèm. Việc \(x\) xuất hiện nhiều lần **không tự động** làm sai điều kiện hàm số; vấn đề là nó có gắn với **hai đầu ra khác nhau hay không**.
3. **KIẾN THỨC CHỐT:** Hàm số gán cho **mỗi** \(x\) thuộc tập xác định **đúng một** \(y=f(x)\). Nhiều đầu vào có thể cho cùng một đầu ra; không yêu cầu ánh xạ một-một. Điểm \((x;y)\) nằm trên đồ thị khi \(y=f(x)\) và \(x\) thuộc tập xác định.
4. **TỰ SỬA:** Chọn một \(x\) bất kỳ, so các cặp có cùng hoành độ. Nếu có hai tung độ khác nhau, chỉ ra *chính cặp mâu thuẫn*; nếu không có mâu thuẫn, kiểm lại mọi \(x\) được liệt kê trước khi kết luận.
5. **LUYỆN LẠI:** Mở lại `THPT-G10-B15-C01`, rồi tự đọc một đồ thị ở Bài 15 để kiểm tra tiêu chí điểm thuộc đồ thị; làm lại trước khi tự chọn xem gợi ý/lời giải, không dùng kết quả này làm bài thi Readiness.

### `HELP-G10-B15-02` · Tập xác định trước bảng biến thiên và mô hình

**Outcome:** `B15_OUT_02`, `B15_OUT_04`, `B15_OUT_05`.

1. **TRIỆU CHỨNG:** Em xét đồng biến trên cả trục số dù hàm không xác định ở một số điểm, hoặc chấp nhận biểu thức có căn âm/mẫu bằng 0.
2. **XÁC ĐỊNH LỖI:** Viết riêng mọi điều kiện cần thiết: \(A(x)\ge0\) khi có \(\sqrt{A(x)}\), \(B(x)\ne0\) khi có mẫu \(B(x)\), và miền giá trị thực tế khi \(x\) là thời gian/chiều dài/số lượng.
3. **KIẾN THỨC CHỐT:** Tập xác định là **giao** của các điều kiện; khi nói hàm tăng/giảm phải chỉ rõ **khoảng thuộc tập xác định** và so hai đầu vào \(x_1<x_2\) theo đúng miền. Với hàm từng đoạn, chọn công thức theo điều kiện của nhánh, chú ý dấu \(<,\le\) tại điểm ghép.
4. **TỰ SỬA:** Lập bảng có ba cột: điều kiện toán, miền thực tế, kết luận tập xác định. Sau đó mới chọn những cặp \(x_1,x_2\) trong cùng khoảng xét biến thiên; không so giá trị qua khoảng trống không xác định.
5. **LUYỆN LẠI:** `THPT-G10-B15-C02` và `THPT-G10-B15-P01` (tập xác định), `B15-P03` (biến thiên), `B15-P02`/`P04` (hàm từng đoạn, mô hình); thực hiện theo thứ tự miền → công thức → kết luận.

### `HELP-G10-B16-01` · Hàm bậc hai: đỉnh, trục và chiều biến thiên

**Outcome:** `B16_OUT_01`, `B16_OUT_02`, `B16_OUT_04`.

1. **TRIỆU CHỨNG:** Em tính đỉnh bằng \(-b/a\), hoặc cứ thấy \(a<0\) lại nói hàm nghịch biến trên toàn trục số.
2. **XÁC ĐỊNH LỖI:** Xác nhận hàm có dạng \(f(x)=ax^2+bx+c\), **\(a\ne0\)**. Đặt \(x_0=-b/(2a)\) rồi mới tính \(y_0=f(x_0)\).
3. **KIẾN THỨC CHỐT:** Trục đối xứng \(x=x_0\). Với \(a>0\), hàm giảm trên \(( -\infty,x_0 )\), tăng trên \((x_0,+\infty)\), có giá trị nhỏ nhất \(f(x_0)\). Với \(a<0\), chiều biến thiên đổi lại và \(f(x_0)\) là giá trị lớn nhất.
4. **TỰ SỬA:** Viết đủ ba dòng: \(a\) và dấu, \(x_0\), bảng chiều biến thiên hai bên \(x_0\); thử hai giá trị ở hai bên đỉnh để tự kiểm hướng biến thiên.
5. **LUYỆN LẠI:** Quay về Bài 16 SGK Core R4 và phần Practice liên quan; làm lại câu gốc với cùng ID canonical của trang đang mở, **không tạo bản sao**.

### `HELP-G10-B16-02` · Vẽ parabol và chọn miền ứng dụng

**Outcome:** `B16_OUT_03`, `B16_OUT_05`.

1. **TRIỆU CHỨNG:** Em vẽ parabol thiếu trục đối xứng, chọn hai điểm không đối xứng qua trục, hoặc lấy nghiệm \(x\) âm cho thời gian thực tế \(t\ge0\).
2. **XÁC ĐỊNH LỖI:** Kiểm \(a\ne0\), tọa độ đỉnh \((x_0,f(x_0))\), giao trục tung \((0,c)\), giao trục hoành **chỉ khi phương trình \(f(x)=0\) có nghiệm thực**.
3. **KIẾN THỨC CHỐT:** Dấu \(a\) quyết định hướng mở; trục \(x=x_0\) quyết định cặp điểm đối xứng. Một mô hình thực tế có **miền hợp lí riêng**, có thể chỉ là một đoạn của đồ thị toán học; giá trị cực trị trong miền hạn chế phải xét cả đỉnh (nếu thuộc miền) và các biên thích hợp.
4. **TỰ SỬA:** Vẽ trục, đỉnh, một cặp điểm đối xứng, rồi giới hạn lại phần đồ thị phù hợp ngữ cảnh; ghi đơn vị trên trục và nêu tại sao loại một giá trị ngoài miền.
5. **LUYỆN LẠI:** Trang Bài 16 SGK mục vẽ đồ thị và bài toán mô hình; đối chiếu hình SVG gốc; tự giải trước khi mở gợi ý luyện tập.

### `HELP-G10-B17-01` · Bảng dấu tam thức và trường hợp nghiệm kép

**Outcome:** `B17_OUT_01`, `B17_OUT_02`.

1. **TRIỆU CHỨNG:** Em cho rằng \(f(x)\) đổi dấu khi đi qua nghiệm kép, hoặc cho dấu của \(f(x)\) bằng dấu \(\Delta\).
2. **XÁC ĐỊNH LỖI:** Trước hết xác định \(a\ne0\), \(\Delta=b^2-4ac\), số nghiệm thực và dấu của \(a\).
3. **KIẾN THỨC CHỐT:** Nếu \(\Delta<0\), tam thức mang dấu của \(a\) trên toàn \(\mathbb R\). Nếu \(\Delta=0\), có nghiệm kép \(x_0\) và \(f(x)=a(x-x_0)^2\): bằng 0 tại \(x_0\), mang dấu của \(a\) ở hai bên **không đổi dấu**. Nếu \(\Delta>0\), dấu theo \(a\) ngoài hai nghiệm, ngược dấu \(a\) giữa hai nghiệm.
4. **TỰ SỬA:** Kẻ trục theo nghiệm thực từ nhỏ tới lớn; thử dấu của \(a\) ở ngoài, rồi ghi dấu khoảng giữa theo trường hợp \(\Delta\); đánh dấu vị trí bằng 0 tách khỏi khoảng âm/dương.
5. **LUYỆN LẠI:** `THPT-G10-B17-C01`, `THPT-G10-B17-C02` — tập trung \(\Delta=0\) và quy tắc dấu.

### `HELP-G10-B17-02` · Bất phương trình và miền hợp lí

**Outcome:** `B17_OUT_03`, `B17_OUT_04`, `B17_OUT_05`.

1. **TRIỆU CHỨNG:** Em viết nghiệm của \(f(x)>0\) nhưng vẫn lấy hai điểm \(f(x)=0\), hoặc bỏ điều kiện chiều dài dương của bài toán rào vườn.
2. **XÁC ĐỊNH LỖI:** Phân biệt rõ dấu \(>,\ge,<,\le\) rồi lập bảng dấu theo \(a\), \(\Delta\) và nghiệm. Đọc riêng ràng buộc \(x>0\), các cạnh khác \(>0\) trong bài toán thực tế.
3. **KIẾN THỨC CHỐT:** Bất phương trình **nghiêm ngặt** loại nghiệm tại \(f(x)=0\); loại \(\ge,\le\) nhận các nghiệm bằng 0 nếu thuộc miền. Trường hợp tham số muốn \(ax^2+bx+c>0\) với mọi \(x\) phải kiểm điều kiện phù hợp: điển hình \(a>0\) và \(\Delta<0\), không nhầm với \(\Delta\le0\) khi dấu nghiêm ngặt.
4. **TỰ SỬA:** Ghi ba dòng: miền xác định/ngữ cảnh, bảng xét dấu, giao với điều kiện; thay nghiệm biên vào biểu thức để quyết định lấy hay bỏ.
5. **LUYỆN LẠI:** `THPT-G10-B17-P02`, `THPT-G10-B17-P03`, `THPT-G10-B17-P04`; kiểm tra kết luận bằng cách thay giá trị đại diện.

### `HELP-G10-B18-01` · Điều kiện và nghiệm ngoại lai của phương trình chứa căn

**Outcome:** `B18_OUT_01`, `B18_OUT_03`.

1. **TRIỆU CHỨNG:** Em bình phương hai vế ngay khi chưa xét căn xác định, rồi nhận mọi nghiệm của phương trình bình phương thành nghiệm ban đầu.
2. **XÁC ĐỊNH LỖI:** Liệt kê từng biểu thức \(\sqrt{A(x)}\): cần \(A(x)\ge0\). Nếu hai vế đều là căn, **cả hai** biểu thức dưới căn đều phải không âm.
3. **KIẾN THỨC CHỐT:** Phép bình phương có thể sinh nghiệm ngoại lai nếu không kiểm điều kiện/dấu. Với \(\sqrt{A(x)}=\sqrt{B(x)}\) trên số thực: cần \(A(x)\ge0, B(x)\ge0\), sau đó \(A(x)=B(x)\), cuối cùng thử lại. \(\sqrt{u^2}=|u|\), không phải luôn bằng \(u\).
4. **TỰ SỬA:** Viết tập điều kiện đầu, tìm nghiệm phương trình suy ra, **giao** nghiệm với tập điều kiện và thay từng giá trị vào phương trình gốc để loại ngoại lai.
5. **LUYỆN LẠI:** `THPT-G10-B18-C02`, `THPT-G10-B18-P03` (căn=căn) cùng `B18-C01`/`P01` (kiểm dấu khi căn=biểu thức); không dùng đáp án demo như bằng chứng độc lập.

### `HELP-G10-B18-02` · Căn bằng biểu thức, điều kiện dấu và mô hình

**Outcome:** `B18_OUT_02`, `B18_OUT_04`.

1. **TRIỆU CHỨNG:** Em giải \(\sqrt{A(x)}=B(x)\) bằng \(A(x)=B(x)^2\) nhưng không yêu cầu \(B(x)\ge0\), hoặc lấy nghiệm khiến chiều dài thực tế không dương.
2. **XÁC ĐỊNH LỖI:** Ghi đồng thời \(A(x)\ge0\), \(B(x)\ge0\) (trên số thực), cùng miền các đại lượng thực tế như \(x>0\), trước khi giải.
3. **KIẾN THỨC CHỐT:** Trong số thực, \(\sqrt{A(x)}=B(x)\) **tương đương** với \(B(x)\ge0\) và \(A(x)=B(x)^2\) (điều kiện \(A(x)\ge0\) khi đó tự theo sau, nhưng nên ghi ban đầu để hiểu căn). Khi quay lại bài toán đo đạc, nghiệm phải thỏa cả ý nghĩa hình học và đơn vị đo.
4. **TỰ SỬA:** Tách bước toán và bước kiểm ngữ cảnh: (i) giải phương trình sau khi bình phương, (ii) kiểm dấu vế phải, (iii) thay lại phương trình gốc, (iv) kiểm chiều dài/thời gian thuộc miền thực tế.
5. **LUYỆN LẠI:** `THPT-G10-B18-P02`, `THPT-G10-B18-P04`; kiểm từng điều kiện trước khi kết luận.

---

## 4. Kiểm toán ranh giới, kỹ thuật và yêu cầu verdict

1. **Không thêm item canonical.** `HELP_ID` là mã thẻ hỗ trợ, **không** phải `item_id` mới. Mọi câu practice nêu trong bảng đã có một bản chính trong nội dung công khai; tuyệt đối không sao chép stem, key hay lời giải vào thẻ.
2. **Không thay verdict 2026-10-28.** Reviewer cũ PASS nội dung B15–18 và 54 IDs của nguồn cũ, không review các phát biểu/hướng dẫn D6 ở đây. Thêm D6 là `DELTA_C_ACADEMIC_MATERIAL` cần thẩm định **8 thẻ này** theo 5 Permanent Sources THPT v2.0 và S1 tập 2. Không yêu cầu review lại 54 item không đổi chỉ vì bổ sung D6.
3. **Không bật Readiness/Mastery.** `SGK_CHAPTER_READINESS` hiện demo (đánh giá chính thức chưa hoạt động), không có hint/đáp án/Tutor trước Final Submit. D6 chỉ dành cho hỗ trợ luyện tập công khai và học kiến thức.
4. **A5 chỉ đóng sau:** NotebookLM PASS 8/8 HELP_ID đúng snapshot, đối chiếu 19 outcomes, QA source→website D6, thiết bị thực tế và các điều kiện scope. Nếu một thẻ sai điều kiện toán học, trả `MINIMAL_DELTA` theo HELP_ID, giữ các thẻ còn lại khi không ảnh hưởng.
5. **REVIEWER RESPONSE REQUEST:** SOURCE_RECEIPT theo SGK/SBT và source snapshot; `HELP_RECONCILIATION` expected=8, reviewed=8, missing/duplicate/unexpected; verdict riêng từng B15–B18 và HELP_ID, impacted OUTCOME_ID; D6_OVERALL, P0/P1/P2, MINIMAL_DELTA, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA`. Ghi `ITEM_REVIEW=NOT_APPLICABLE_NEW_ITEMS_ZERO`, `RELEASE/MASTERY_NOT_AUTHORIZED`.

**Cần xuất phạm vi trước khi tuyên bố:** không gắn `ACADEMIC_PASS`, `CONTENT_READY`, `A5_PASS`, `CHAPTER_COMPLETE` cho nguồn R01 này trước khi nhận reviewer và QA riêng.
