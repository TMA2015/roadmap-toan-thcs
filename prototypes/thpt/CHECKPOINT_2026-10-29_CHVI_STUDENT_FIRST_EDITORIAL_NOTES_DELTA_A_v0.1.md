# Chương VI — Student-first editorial notes · 2026-10-29



## Quyết định giao diện được chủ dự án yêu cầu

- Thông tin quản trị về NotebookLM, snapshot, delta, R4, QA và quyền deploy không phải kiến thức Toán; không nên xuất hiện trong bài học học sinh.

- B15–18: giữ bài học, công thức, ví dụ, đáp án và menu; thay lời dẫn bằng mục tiêu học; đưa toàn bộ ghi chú nội bộ từ trang học vào checkpoint.

- B17: giữ ranh giới SGK Core và phần tham số mở rộng bằng chi tiết gọn, mặc định thu gọn (native HTML details).

- Demo Tự kiểm tra cuối chương và cơ chế chưa tính Mastery: vẫn phải minh bạch ở khu vực tự kiểm tra / luyện tập, không giấu điều kiện chấm điểm.

- Đối với bài hoàn thiện, bỏ ghi chú quản trị khỏi giao diện. Hồ sơ review ở repository, không tự đổi Academic PASS/Readiness.

- DELTA_A_UI; no change to reviewed mathematical formulas or canonical bank items. No merge/deploy without separate explicit owner authorization.



## Metadata đã chuyển khỏi phần học sinh (nguyên văn từ main cb76365a08f042d7722cc49e2891a7c7e7240cf4)



## B15 — archived editorial header

```html
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · HỌC LIỆU ĐÃ REVIEW</p>
<p class="thpt-r4-lead"><strong>NOTEBOOKLM_CHVI_SNAPSHOT_PASS · TÍCH HỢP ĐANG QA.</strong> Gói học liệu SGK Chương VI Bài 15 đã được NotebookLM review học thuật PASS ngày 28/10/2026 (SGK trang 4–10, SBT 3–9). Trang hiển thị hiện tại còn cần so khớp chi tiết với snapshot, không tự coi là bản copy từng byte. Core/Luyện tập tham chiếu ngân hàng formative đã review; không ghi điểm/mastery.</p>
```


### B15 — Phần bổ sung SGK B15 đang chờ review học thuật

```
!!! warning "Phần bổ sung SGK B15 đang chờ review học thuật"
    **NOTEBOOKLM_BATCH_20261028_PASS_FOR_REVIEWED_SNAPSHOT** — Nguồn ý tưởng/độ phủ: SGK Toán 10 Tập 2 Bài 15, phần hoạt động, ví dụ và vận dụng về bảng/đồ thị/biểu giá trên trang in **5–7, 9**. Đã đối chiếu trực quan SGK trang 4–10 và SBT trang 3–9; **18 item Core/Practice B15/B17/B18 đã được reviewer PASS trong đúng snapshot, đang tích hợp**, không ghi mastery.
```


### B15 — Giới hạn nguồn và phát hành

```
!!! warning "Giới hạn nguồn và phát hành"
    Đây là **trang học tập đang được đối chiếu với snapshot đã review của Chương VI**. Đã đối chiếu trực tiếp các trang SGK 4–10 và SBT 3–9 theo hoạt động/dạng bài; vẫn cần kiểm toán outcome–item và review độc lập. Các ví dụ và câu hỏi tự luyện do dự án tự soạn, **không phải câu trích nguyên SGK**. NotebookLM đã PASS bản snapshot tương ứng; việc đồng bộ đủ nội dung và kiểm thử website vẫn là cổng độc lập. Core/Practice đã dùng ID canonical trong modal; 18 câu Readiness còn chưa phát hành.
```


## B16 — archived editorial header

```html
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BÀI MẪU R4</p>
<p class="thpt-r4-lead">Bản xem thử cách học từng bài SGK KNTT. Nội dung học thuật mẫu Bài 16 đã được NotebookLM tái thẩm định R4 Postfix và xác nhận ACADEMIC_CLEARANCE: YES (27/10/2026). Đây vẫn là bản xem thử giao diện; bài tương tác không ghi điểm hoặc lưu lịch sử.</p>
```


### B16 — Phần học liệu bổ sung đang chờ review delta học thuật

```
!!! warning "Phần học liệu bổ sung đang chờ review delta học thuật"
    **NOTEBOOKLM_CHVI_BATCH_20261028_DELTA_PASS — SOURCE_SCOPE_DELTA_B16.** Nội dung dưới đây được biên soạn thêm từ các chủ đề minh họa trong SGK Toán 10 KNTT tập 2 **trang in 17–18** và SBT tập 2 **trang in 15**. Những trang này nằm ngoài receipt SGK 11–16/SBT 10–14 trong biên bản NotebookLM Postfix trước đó. Hai ví dụ dưới đây do dự án **tự soạn**, không chép nguyên bài SGK/SBT; phần mở rộng đã được NotebookLM thẩm định PASS trong gói Chương VI ngày 28/10/2026. Kết quả PASS cũ cho R4 Postfix vẫn được bảo lưu theo đúng snapshot riêng. Chưa có cấp phép phát hành website.
```


### B16 — Chỉ là bài học trình diễn

```
!!! warning "Chỉ là bài học trình diễn"
    Biên bản NotebookLM R4 Postfix đã xác nhận học thuật PASS cho riêng bài mẫu này (5/5 mục tiêu, 5/5 item). Nghiệm thu giao diện trên thiết bị thực tế và phê duyệt phát hành vẫn là các bước riêng; bản mẫu không ghi nhận tiến độ.
```


### B16 — archived authoring workflow paragraph

Hai ví dụ củng cố cách tìm cực trị từ dạng đỉnh. **Bộ bài vận dụng nguồn SBT 6.18–6.20** (trang in 15) bổ sung các tình huống chuyển động và doanh thu; khi biên soạn ngân hàng bài, cần tạo câu hỏi gốc/biến thể hợp pháp, mapping về đúng outcome và chưa trộn trực tiếp vào Readiness không kiểm soát tiếp xúc đáp án.


## B17 — archived editorial header

```html
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · HỌC LIỆU ĐÃ REVIEW</p>
<p class="thpt-r4-lead"><strong>NOTEBOOKLM_CHVI_SNAPSHOT_PASS · TÍCH HỢP ĐANG QA.</strong> Học liệu Bài 17 trong batch SGK Chương VI đã được NotebookLM review PASS ngày 28/10/2026; trang hiện tại đang được đồng bộ/đối chiếu lại với snapshot đã duyệt. Core và Luyện tập lấy item đã review qua cùng ID; không ghi điểm hoặc mastery.</p>
```


### B17 — Ranh giới học thuật

```
!!! note "Ranh giới học thuật"
    Phần tham số là **mở rộng luyện tập** được định hướng bởi SBT Bài 17 trang in 17–18 (bài toán nghiệm, dấu bất phương trình với tham số), không tự coi là Core bắt buộc của SGK. Ví dụ và lời giải do dự án tự biên soạn, đã được NotebookLM thẩm định trong snapshot Chương VI ngày 28/10/2026; website còn QA riêng.
```


### B17 — Giới hạn

```
!!! warning "Giới hạn"
    Trang học này dùng ví dụ nguyên gốc và định lí phổ thông, **đã đối chiếu hình trang SGK 19–24 và SBT 16–18**; snapshot B17 đã nhận NotebookLM Academic PASS. Trang hiện tại chưa hoàn thành xác nhận tương đương byte/semantics và Tự kiểm tra chính thức hiện chưa kích hoạt; không coi là production đã phát hành.
```


### B17 — archived link metadata

[Mở khu vực **Core và Luyện tập/Vận dụng của Chương VI**](luyen-tap.md) — hai thẻ Bài 17 hiện mở **6 item canonical đã review** theo Core/Luyện tập/Vận dụng, có gợi ý/lời giải tự mở; không ghi điểm hay lịch sử học sinh.


## B18 — archived editorial header

```html
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · HỌC LIỆU ĐÃ REVIEW</p>
<p class="thpt-r4-lead"><strong>NOTEBOOKLM_CHVI_SNAPSHOT_PASS · TÍCH HỢP ĐANG QA.</strong> Nội dung học thuật Bài 18 trong batch SGK Chương VI đã được NotebookLM PASS ngày 28/10/2026; trang đang đối chiếu với bản snapshot. Core/Luyện tập dùng canonical item đã review; không ghi điểm hoặc tiến độ.</p>
```


### B18 — Giới hạn

```
!!! warning "Giới hạn"
    Đây là trang kiến thức do dự án tự soạn, **đã đối chiếu trực tiếp SGK trang 25–27 và SBT trang 19–21; snapshot đã được NotebookLM thẩm định PASS**. Câu Core/Luyện tập và Written có ID canonical, nhưng Tự kiểm tra chính thức chưa kích hoạt; chưa coi bản trang GitHub là phát hành chính thức.
```


### B18 — archived source/provenance paragraph

**Liên hệ S1:** SGK Bài 18, trang in **26–27**, có vận dụng hình học/quãng đường với biểu thức căn; SBT trang **19–21** bổ sung bài điều kiện có nghiệm và một tình huống hình học. Hai ví dụ trên là nội dung **tự biên soạn, đã được NotebookLM review trong snapshot Chương VI**, dùng để rèn điều kiện căn thức và thử nghiệm ứng viên.


### B18 — archived link metadata

[Mở khu vực **Core và Luyện tập/Vận dụng của Chương VI**](luyen-tap.md) — modal Bài 18 lấy **6 item canonical Core/Luyện tập đã review**, lời giải tự mở và chưa ghi điểm/mastery.
