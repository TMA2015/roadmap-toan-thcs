# Toán 10 KNTT · Chương II — Bài 3: Bất phương trình bậc nhất hai ẩn
## Gói thẩm định độc lập D3–D4: 9 item canonical mới, Core / Luyện tập / Tự luận

**PACKET_ID:** `THPT-G10-CHII-B03-B04-D3D4-18ITEMS-20261028-R0` (File A / 2, B03)  
**STATUS:** `NEW_D3D4_CANDIDATES_NOT_REVIEWED` · `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`  
**S1 reviewer receipt:** SGK Toán 10 KNTT Tập 1 B03 trang in 22–25, B04 trang 26–30, cuối ChII trang 31–32; SBT B03 trang 16–19, B04 trang 19–22, cuối ChII trang 22–24.  
**Permanent review sources:** Chỉ `01-05_THPT_PERMANENT_v2.0_ONLY` + SGK/SBT KNTT gốc. Dual Complete Learning Paths file 08 v2.0; handoff 06 và delta 07 v1.1.  
**Nội dung đã PASS:** D1–D2 B03/B04, 6 mô-đun kiến thức, 6 ví dụ có lời giải, 11/11 outcome theo `THPT-G10-CHII-B03-B04-S1-D1D2-KNOWLEDGE-20261028-R0`. Không yêu cầu review lại D1–D2 nếu không thay nội dung.  
**Nguồn biên soạn tham chiếu duy nhất:** `prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_S1_D1D2_KNOWLEDGE_AUTHORING_v0.1.md` Git blob `1854c3ca7cee4ae78d560ced510714c2e82a3fc7`. Bài tập mới không lặp lại stem/số liệu của ví dụ `EX-B03-01..03`.  
**Ranh giới:** 9 item B03 mới (3 Core, 5 Practice/Application, 1 Written), không phải đề Tự kiểm tra. Nội dung khóa/lời giải/hint ở đây dành cho tác giả và reviewer; khi dùng Practice chỉ hiển thị lời giải theo luồng Check/Submit, tuyệt đối không đem nội dung này vào Readiness giữ kín.

## 1. Item register B03 (9 IDs độc lập)

| Canonical item ID | Vai trò SGK đề xuất | Outcome chính | Độ sâu dự kiến |
|---|---|---|---|
| `THPT-G10-B03-C01` | `SGK_CORE` | `G10-B03-LINEAR_TWO_VAR_FORM`; `G10-B03-ORDERED_PAIR_CHECK` | Basic |
| `THPT-G10-B03-C02` | `SGK_CORE` | `G10-B03-BOUNDARY_LINE`; `G10-B03-HALFPLANE_TEST`; `G10-B03-STRICT_INCLUSION` | Basic |
| `THPT-G10-B03-C03` | `SGK_CORE` | `G10-B03-CONTEXT_MODEL`; `G10-B03-ORDERED_PAIR_CHECK` | Basic |
| `THPT-G10-B03-P01` | `SGK_PRACTICE` | `G10-B03-ORDERED_PAIR_CHECK` | Basic |
| `THPT-G10-B03-P02` | `SGK_PRACTICE` | `G10-B03-BOUNDARY_LINE`; `G10-B03-HALFPLANE_TEST` | Basic–Intermediate |
| `THPT-G10-B03-P03` | `SGK_PRACTICE` | `G10-B03-HALFPLANE_TEST`; `G10-B03-STRICT_INCLUSION` | Intermediate |
| `THPT-G10-B03-P04` | `SGK_PRACTICE_APPLICATION` | `G10-B03-CONTEXT_MODEL` | Intermediate |
| `THPT-G10-B03-P05` | `SGK_PRACTICE` | `G10-B03-BOUNDARY_LINE`; `G10-B03-STRICT_INCLUSION` | Intermediate |
| `THPT-G10-CHII-W03` | `SGK_WRITTEN` | `G10-B03-HALFPLANE_TEST`; `G10-B03-STRICT_INCLUSION`; `G10-B03-ORDERED_PAIR_CHECK` | Intermediate, rubric /6 |

## 2. Đề, khóa, lời giải và gợi ý của từng item

### THPT-G10-B03-C01

**Đề:** Xét ba biểu thức (a) `3x−2y≥4`, (b) `x²+y≥4`, (c) `0x+0y≤2`. Biểu thức nào là bất phương trình bậc nhất hai ẩn? Với biểu thức hợp lệ, kiểm tra `(2,1)` và `(0,0)` có là nghiệm không.

**Đáp án:** Chỉ (a) hợp lệ. Đối với (a): `(2,1)` là nghiệm vì `3·2−2·1=4≥4`; `(0,0)` không là nghiệm vì `0<4`.

**Lời giải:** (a) có hai hệ số `3,−2` không đồng thời bằng 0 và hai biến ở bậc nhất. (b) chứa `x²`. (c) cả hai hệ số bằng 0 nên không thỏa định nghĩa. Thay đúng thứ tự `(x,y)` vào (a) như trên.

**Hint (Practice sau Check, không dùng cho Readiness):** Trước hết xét bậc của x,y và cặp hệ số, sau đó thay từng cặp `(x,y)`.

### THPT-G10-B03-C02

**Đề:** Biểu diễn miền nghiệm của `2x−y<3`. Viết phương trình đường bờ, tìm hai điểm trên đường bờ, xét gốc O và cho biết đường bờ có thuộc miền nghiệm không.

**Đáp án:** Bờ `d:2x−y=3` qua `(0,−3)` và `(2,1)`; `O(0,0)` thỏa `0<3`; lấy nửa mặt phẳng chứa O, **không lấy bờ** (nét đứt).

**Lời giải:** Tại x=0, y=−3; tại x=2, y=1. Gốc O không thuộc d và cho vế trái bằng 0 nhỏ hơn 3, nên chọn phía chứa O. Dấu `<` loại mọi điểm trên đường bờ.

**Hint:** Vẽ đường bờ trước, rồi chọn một điểm thử không nằm trên bờ.

### THPT-G10-B03-C03

**Đề:** Một cửa hàng bán hai loại vé A và B giá lần lượt 40 nghìn và 25 nghìn đồng; khách có nhiều nhất 300 nghìn đồng. Đặt x,y là số vé A,B. (a) Viết bất phương trình ngân sách và điều kiện số lượng. (b) Khách có thể mua `(5,4)` vé theo thứ tự A,B không? (c) Còn `(5,5)`?

**Đáp án:** `40x+25y≤300`, `x,y` nguyên không âm. `(5,4)` hợp lệ vì `200+100=300`; `(5,5)` không hợp lệ vì `200+125=325>300`.

**Lời giải:** Dấu `≤` tương ứng “nhiều nhất”. Với `(5,4)`, tổng tiền là 300 nên hợp lệ; `(5,5)` là 325, vượt ngân sách nên không hợp lệ. Hai điều kiện không âm và nguyên đến từ số lượng vé, không phải từ bản thân bất phương trình.

**Hint:** Trên đường bờ ngân sách cũng được chấp nhận vì dấu `≤`.

### THPT-G10-B03-P01

**Đề:** Với `3x+4y≤12`, hãy phân loại các cặp `(0,0)`, `(4,0)`, `(2,2)`, `(0,4)` thành nghiệm và không là nghiệm. Cặp nào nằm đúng trên đường bờ?

**Đáp án:** `(0,0)` nghiệm; `(4,0)` nghiệm **trên bờ**; `(2,2)` không nghiệm; `(0,4)` không nghiệm.

**Lời giải:** Giá trị vế trái lần lượt `0,12,14,16`. Chỉ 0 và 12 không vượt quá 12; bằng 12 thì thuộc bờ.

**Hint:** Thay từng cặp rồi so sánh với 12, chú ý trường hợp bằng.

### THPT-G10-B03-P02

**Đề:** Xác định đường bờ và nửa mặt phẳng nghiệm của `−x+2y≥4`. Đường bờ có qua `(-4,0)` và `(0,2)` không? Kiểm tra `(2,3)` có thuộc miền nghiệm không.

**Đáp án:** `d:−x+2y=4`; cả `(-4,0)` và `(0,2)` thuộc d; gốc O không thỏa `0≥4`; miền nghiệm là phía **không chứa O**, **có bờ**; `(2,3)` thỏa do `−2+6=4`.

**Lời giải:** Hai điểm cho vế trái bằng 4. Điểm O nằm ngoài d, không là nghiệm nên chọn nửa mặt phẳng đối diện O. Dấu `≥` giữ đường bờ. Điểm `(2,3)` nằm trên bờ nên vẫn là nghiệm.

**Hint:** Chọn O làm điểm thử, sau đó kiểm tra riêng điều kiện lấy/bỏ bờ.

### THPT-G10-B03-P03

**Đề:** Cho bất phương trình `x+2y>0`. Đường bờ có đi qua O không? Khi biểu diễn miền nghiệm, có được dùng O làm điểm thử không? Hãy chọn một điểm thử khác, rồi xác định miền nghiệm và cách vẽ bờ.

**Đáp án:** Bờ `x+2y=0` đi qua O nên **không** dùng O làm điểm thử; dùng `(0,1)` thỏa `2>0`, lấy phía chứa `(0,1)` và **bỏ bờ** (nét đứt).

**Lời giải:** O nằm trên bờ. Điểm `(0,1)` không trên bờ và thỏa bất phương trình, nên nửa mặt phẳng cùng phía với điểm này là miền nghiệm. Do `>` nên không lấy đường bờ.

**Hint:** Một điểm thử nằm trên bờ không phân biệt được hai nửa mặt phẳng.

### THPT-G10-B03-P04

**Đề:** Một xe có tải trọng không vượt 180 kg. Mỗi bao gạo nặng 15 kg, mỗi thùng nước nặng 20 kg. Đặt x là số bao gạo và y là số thùng nước. (a) Viết bất phương trình và các điều kiện số lượng. (b) Xe chở 8 bao và 3 thùng có hợp lệ không? (c) Xe chở 5 bao và 6 thùng có hợp lệ không?

**Đáp án:** `15x+20y≤180`, `x,y` nguyên không âm. `(8,3)` hợp lệ vì `120+60=180`; `(5,6)` không hợp lệ vì `75+120=195>180`.

**Lời giải:** Tổng tải trọng là khối lượng mỗi loại nhân số lượng, lấy tổng không vượt 180. Phương án `(8,3)` nằm **trên đường bờ** nên được chấp nhận; `(5,6)` vượt tải trọng nên bị loại. Nếu đề yêu cầu phương án nhẹ hơn mức tải, phải thay bằng dấu `<`, nhưng ở đây là “không vượt”.

**Hint:** “Không vượt” bao gồm cả trường hợp bằng tải trọng tối đa.

### THPT-G10-B03-P05

**Đề:** (a) Biểu diễn miền nghiệm của `x≤−1` và chỉ rõ loại đường bờ. (b) Biểu diễn riêng miền nghiệm của `y>−2`, phân biệt với câu (a). Cả hai có phải bất phương trình bậc nhất hai ẩn không?

**Đáp án:** (a) bờ thẳng đứng `x=−1`, chọn phía trái kể cả bờ (nét liền); (b) bờ ngang `y=−2`, chọn phía trên bỏ bờ (nét đứt); **cả hai** đều là bất phương trình bậc nhất hai ẩn (hệ số của một ẩn có thể bằng 0).

**Lời giải:** `x≤−1` có dạng `1·x+0·y≤−1`; `y>−2` có dạng `0·x+1·y>−2`. Điều kiện duy nhất về hệ số là không đồng thời bằng 0. Dấu và ý nghĩa hình học như trên.

**Hint:** Không bắt buộc cả hệ số a và b đều khác 0.

### THPT-G10-CHII-W03

**Đề tự luận /6:** Xét `x−2y≤4`. (a) Dựng đường bờ bằng hai giao điểm với trục tọa độ. (b) Dùng O để xác định miền nghiệm; bờ có lấy không? (c) Kiểm tra `(6,0)`, `(2,−1)`, `(0,2)` và nêu cặp nào trên bờ.

**Đáp án:** (a) `d:x−2y=4` qua `(4,0)`, `(0,−2)`. (b) O thỏa `0≤4`, lấy nửa mặt phẳng chứa O kể cả bờ. (c) `(6,0)` không nghiệm (6>4); `(2,−1)` nghiệm **trên bờ** (4≤4); `(0,2)` nghiệm **ở trong miền** (−4≤4).

**Lời giải:** Xác định hai điểm phân biệt bằng cách lần lượt cho y=0 và x=0. Điểm O không thuộc bờ và thỏa, nên xác định đúng phía. Phân biệt dấu `≤` với `<` cho bờ. Thay lần lượt ba cặp như khóa trên.

**Rubric /6:** 2 điểm cho phương trình bờ và hai giao điểm đúng; 2 điểm cho phép thử O, nửa mặt phẳng chọn đúng và quyết định giữ bờ; 2 điểm cho phân loại đúng ba cặp, có chỉ ra `(2,−1)` nằm trên bờ. Chấp nhận đồ thị/phương pháp đại số tương đương; có thể cho điểm thành phần nếu bước sau bị lỗi kéo theo.

**Hint (Practice sau Check):** Giao với trục x đặt y=0; giao với trục y đặt x=0.

## 3. Đề nghị reviewer trả kết quả theo ID

Đối chiếu B03 với SGK/SBT KNTT Tập 1 trang đã ghi ở SOURCE_RECEIPT; thẩm định **9/9 ID** theo từng stem, khóa, lời giải, hint, role Core/Practice/Written, mức độ và các outcome B03. Kiểm tra không trùng quá gần các ví dụ `EX-B03-01..03` đã PASS; đặc biệt phân biệt điểm thuộc bờ, điểm thử trên bờ, dấu `<`/`≤`, và điều kiện số nguyên trong mô hình. Trả verdict per ID, P0/P1/P2, MINIMAL_DELTA, `OUTCOME_ALIGNMENT_B03=6`, `ACADEMIC_OVERALL_B03_D3D4` và xác nhận **không có Chapter Readiness trong gói này**. Không cấp Academic Clearance for Release, không sửa bản D1–D2 đã PASS, không merge/deploy.