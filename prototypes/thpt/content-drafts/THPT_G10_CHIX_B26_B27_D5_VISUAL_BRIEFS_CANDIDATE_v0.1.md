# Toán 10 KNTT · Chương IX · D5 hình học liệu xác suất — hai bản thiết kế review v0.1

PACKET_ID: THPT-G10-CHIX-B26-B27-D5-VISUALS-R01
STATUS: CONTENT_DRAFT / NOT_REVIEWED / NOT_A_SVG_ASSET / HOLD_A5
DATE: 2026-10-29
RELEASE_SCOPE: SGK_CHAPTER / PUBLIC_FORMATIVE_ONLY
SOURCE_HEAD: PR #616 @ 1c205a9a87f5e0fc2563be14e1c1a911a14c6d76
SOURCE_READONLY: B26 lesson blob 3e677ed44d8541f75bae1c7d5b5da5821088630c; B27 lesson blob 132d40deac674aed988f1442f4cb7683faa44f70.
S1: SGK/SBT Toán 10 KNTT tập 2, B26–27; exact printed page numbering still needs S1 reviewer reconciliation.

## D5-CHIX-FIG01 — Bảng không gian mẫu của xu và xúc xắc

**Mục tiêu năng lực:** Tách `kết quả sơ cấp` khỏi `nhãn kết quả`; soát quy tắc nhân, biến cố là tập con Ω và định nghĩa cổ điển. Tương ứng outcomes `G10-B26-EXPERIMENT_SAMPLE_SPACE`, `G10-B26-EVENT_SUBSET`, `G10-B26-CLASSICAL_RATIO`.
**Không nhân bản:** không thêm câu hỏi mới; minh họa cho B26 và các item `THPT-G10-B26-C01`, `THPT-G10-B26-P02`; không dùng riêng như Readiness.

**Hình cần biên soạn:** Bảng 2 hàng × 6 cột. Hàng là N/S (ngửa/sấp) của một đồng xu cân đối; cột là 1–6 của xúc xắc cân đối; hai phép thử độc lập. Mỗi ô là một kết quả `(N,1)` … `(N,6)`, `(S,1)` … `(S,6)`. Có 12 kết quả **có thứ tự theo cấu phần** và đồng khả năng, mỗi ô xác suất 1/12.

**Minh họa A khác các bài hiện có:** A = “số chấm chia hết cho 3” (không ràng buộc mặt xu). Đánh dấu chính xác bốn ô `(N,3),(N,6),(S,3),(S,6)`; `P(A)=4/12=1/3`. Tránh dùng lại tình huống `N` và `>4` của Written `THPT-G10-CHIX-W26-01`.

**Chú thích dành cho học sinh:** “Mỗi ô là một kết quả sơ cấp, không phải mỗi tổng hay mỗi màu. Chỉ đếm ô khi có căn cứ các ô đồng khả năng.”
**QA trước triển khai SVG:** 2×6=12 ô, không lặp ô, đúng 4 ô highlight; tương phản không dựa riêng vào màu, `aria-label` mô tả; hỗ trợ màn hình nhỏ, MathJax tách ngoài hình; không lộ bất kỳ key private nào.

## D5-CHIX-FIG02 — Sơ đồ rút 2 thẻ không hoàn lại: lá có nhãn và lá gộp màu

**Mục tiêu năng lực:** Phân biệt kết quả chi tiết đồng khả năng với nhãn gộp không đồng khả năng; nhận diện xác suất thay đổi theo lịch sử rút. Outcomes `G10-B27-TREE_SEQUENCE`, `G10-B27-MULTISTEP_CONTEXT`, `G10-B27-EQUIPROBABLE_MODELLING`.
**Không nhân bản:** minh họa kiến thức B27; tham chiếu các item `THPT-G10-B27-C01`, `THPT-G10-B27-P03`, `THPT-G10-B27-P05`, không tái sử dụng làm Readiness.

**Phép thử mới:** Hộp có bốn thẻ phân biệt `R₁,R₂,B₁,B₂` (2 đỏ, 2 xanh). Rút lần lượt 2 thẻ *không hoàn lại*, mỗi lần chọn đều trong số thẻ còn lại. Phần tử Ω là cặp hai **thẻ có nhãn**, với hai thẻ khác nhau, tổng `4×3=12` kết quả. Mỗi cặp cụ thể có xác suất `(1/4)×(1/3)=1/12`. Hình phải thể hiện bốn nhánh đầu, mỗi nhánh có ba nhánh con hợp lệ; không có cặp rút lại chính thẻ cũ.

**Lớp so sánh nhãn gộp (không đồng khả năng):** `RR` gồm 2 cặp cụ thể ⇒ 2/12=1/6; `RB` gồm 4 cặp ⇒ 4/12=1/3; `BR` gồm 4 cặp ⇒ 4/12=1/3; `BB` gồm 2 cặp ⇒ 2/12=1/6. Bốn chuỗi màu **không** đồng khả năng; không dùng `1/4` cho mỗi chuỗi. Tổng `(2+4+4+2)/12=1`.

**Chú thích dành cho học sinh:** “Sơ đồ có nhiều tầng không bảo đảm các nhãn gộp cùng xác suất. Chọn cấp độ kết quả sơ cấp trước khi đếm.”
**QA trước triển khai SVG:** đủ 12 lá, đúng 4/3 branching, không nhánh hoàn lại, nhãn hiển thị đầy đủ bằng chữ, các nhóm màu 2/4/4/2, tổng bằng 1, bố cục desktop/mobile; reviewer S1 kiểm mức phù hợp Core và tránh vượt phạm vi phương pháp xác suất có điều kiện.

## Điểm chặn & reviewer yêu cầu

- Đây là **brief thiết kế học liệu D5**, chưa phải SVG đã dựng hoặc D5 academic PASS. Nếu trình bày trong NotebookLM, kiểm các kết quả sơ cấp, số trường hợp và vị trí S1 theo từng hình.
- Reviewer xác nhận liệu mô hình hai bước không hoàn lại và diễn giải xác suất từng lá phù hợp phạm vi ChIX KNTT; nếu yêu cầu loại bỏ ký hiệu xác suất theo điều kiện, có thể thay bằng đếm 12 cặp đồng khả năng (delta tiếp theo).
- Không đưa thử nghiệm của chủ dự án, QA và nội dung review ra giao diện học sinh.
- `D5 academic clearance=NOT_ISSUED`; `D6 cards academic clearance=NOT_ISSUED`; `CONTENT_READY=HOLD`, `MERGE_DEPLOY=NO`.
