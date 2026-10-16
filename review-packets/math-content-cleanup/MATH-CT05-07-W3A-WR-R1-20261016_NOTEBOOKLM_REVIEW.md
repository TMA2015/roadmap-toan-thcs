# Independent NotebookLM Academic Authoring Review — MATH-CT05-07-W3A-WR-R1-20261016

**packet_id:** `MATH-CT05-07-W3A-WR-R1-20261016`  
**scope:** exactly **3 candidate written exercises**: `05-ENT-01`, `06-CH-01`, `07-WR-11`.  
**status:** `CANDIDATE_REVIEW` — **NOT PASSED, NOT PUBLISHED, NO DEPLOY AUTHORIZATION**.  
**approved source placement context:** `MATH-CT05-07-W3A-20261016` passed *placement review* for 12 old items. It did **not** approve the new hints/rubrics below, nor a production change.

## 1. Source selection

Keep selected permanent NotebookLM sources: current Math Master Plan v1.2.1; NotebookLM Math Review Rules v1.2; any current permanent Golden Architecture, Academic Source & Depth Audit Rules, Written Library Contract. Use this file as the **sole temporary review packet**; deselect/remove the previous W3A temporary packet and older batch packets. Select the authoritative SGK KNTT Toán 8 Tập 1/Tập 2 (S1) if available. If not, mark curriculum placement **INSUFFICIENT_EVIDENCE**, rather than inferring S1 from the earlier NotebookLM verdict alone.

## 2. Requirements

Review each draft 1:1: **mathematical validity; degree of multi-step reasoning; hint scaffolding without answer leakage; solution; rubric totaling the stated score; age/grade and KNTT Core vs Entrance10 vs Specialized-Challenge separation; canonical ownership and whether existing WX already covers the same learning intent.**

The only student-facing written answer mode is **solve on paper → check explanation/rubric**; this does not generate automatic mastery/Readiness. A Challenge exercise must not be promoted to KNTT Core because it uses Grade 8 prerequisites. Do not create a cloned WX when the current library already owns the item. Do not imply formal exam frequency without S3 corpus evidence.

## 3. Exact-source historical exercise text

### Original source: 05-ENT-01

Path: `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`.

#### 05-ENT-01 · Biểu thức không phụ thuộc biến

Chứng minh
\[
A=(x-1)^3-(x+1)^3+6(x-1)(x+1)
\]
không phụ thuộc vào \(x\).

??? tip "Gợi ý"
    Khai triển ba hằng đẳng thức rồi thu gọn.

??? example "Xem lời giải"
    \[
    (x-1)^3-(x+1)^3=-6x^2-2,
    \]
    \[
    6(x-1)(x+1)=6x^2-6.
    \]
    Do đó \(A=-8\).

---

### Original source: 06-CH-01

Path: `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

#### 06-CH-01 · Thêm bớt để phân tích

Phân tích \(x^4+4\).

??? tip "Gợi ý"
    Thêm và bớt \(4x^2\).

??? example "Xem lời giải"
    \[
    x^4+4=x^4+4x^2+4-4x^2
    =(x^2+2)^2-(2x)^2
    \]
    \[
    =(x^2-2x+2)(x^2+2x+2).
    \]

---

### Original source: 07-WR-11

Path: `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md` · Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-11 · Vì sao phải giữ điều kiện cũ?

Giải thích vì sao khi rút gọn

\[
\frac{x^2-4}{x-2}=x+2
\]

vẫn phải giữ điều kiện \(x\ne2\).

??? tip "Gợi ý"
    Hãy so sánh miền xác định của biểu thức ban đầu và biểu thức sau khi rút gọn.

??? example "Xem lời giải"
    Phân thức ban đầu không xác định tại \(x=2\) vì mẫu bằng 0. Việc rút gọn nhân tử \(x-2\) không thể làm xuất hiện lại một giá trị vốn đã bị loại khỏi miền xác định ban đầu. Vì vậy đẳng thức chỉ đúng trên miền \(x\ne2\).

## 4. Proposed learner-facing written exercises (NEW DRAFTS — not yet approved)

# W3A — Ba bản thảo tự luận nguồn-được-duyệt, CHƯA đưa vào thư viện (R0)

**Tình trạng:** ACADEMIC_DRAFT / AWAITING_SUBSTANTIVE_AUTHORING_REVIEW / NOT_PUBLISHED. Đề & lời giải cốt lõi được phục hồi từ 3 file `bai-tap.md` đã khóa trong packet W3A; gợi ý phân tầng, rubric mới và nội dung mở rộng bên dưới là **biên soạn mới** nên cần review độc lập trước khi phát hành.

**Cấm nhập nguyên văn các bản thảo này vào** `written-exercise-library-v1.json` **trước khi phê duyệt**. Mã `PROPOSED-...` chỉ là khóa bản thảo, KHÔNG PHẢI canonical `exercise_id`.

## PROPOSED-WX05-ENT-001 — Chứng minh biểu thức là hằng số

- `source_id`: `05-ENT-01`
- `topic_id`: `CT05`
- `written_role`: **TRANSFER** hoặc **ENTRANCE10** (tạm thời; phải xác nhận tầng bằng S1 và quy tắc lớp học)
- `kntt_placements`: **PENDING**, không ghi Core Readiness từ nhãn `ENT`.
- `topic_placements`: CT05, sử dụng bình phương/lập phương và thu gọn nhiều hạng tử
- `prerequisite_skills`: hằng đẳng thức lập phương, hiệu hai bình phương, trừ đa thức
- `canonical_owner`: bản WX mới **nếu** không trùng bài đã phát hành và được duyệt.

**Đề bài:** Chứng minh biểu thức
\[
A=(x-1)^3-(x+1)^3+6(x-1)(x+1)
\]
không phụ thuộc vào giá trị của `x`. *Trình bày các bước biến đổi và kết luận.*

**Gợi ý phân tầng (draft):**
1. Khai triển riêng hai lập phương. Khi trừ `(x+1)^3`, cẩn thận đổi dấu **toàn bộ** các hạng tử.
2. Áp dụng hiệu hai bình phương cho `(x-1)(x+1)`.
3. Gộp hệ số `x²` rồi kết luận dựa trên kết quả còn lại.

**Lời giải (source-verified math):**
\[
(x-1)^3=x^3-3x^2+3x-1,\quad
(x+1)^3=x^3+3x^2+3x+1.
\]
Do đó
\[
(x-1)^3-(x+1)^3=-6x^2-2.
\]
Mặt khác,
\[
6(x-1)(x+1)=6(x^2-1)=6x^2-6.
\]
Suy ra `A=(-6x²-2)+(6x²-6)=-8` với mọi số `x`; vậy `A` không phụ thuộc vào `x`.

**Rubric bản thảo 4 điểm:** Khai triển và trừ hai lập phương đúng (1,5); biến đổi `6(x-1)(x+1)` đúng (1); thu gọn và kết luận rõ tính độc lập với `x` (1,5).

**Lỗi thường gặp:** bỏ sót đổi dấu khi trừ lập phương; viết sai dấu `6x²-6`; chỉ cho ra `-8` mà không kết luận tính độc lập.

## PROPOSED-WX06-CH-001 — Thêm bớt tạo hiệu hai bình phương

- `source_id`: `06-CH-01`
- `topic_id`: `CT06`
- `written_role`: **CHALLENGE**, KHÔNG `KNTT-Core`
- `kntt_placements`: **PENDING/NO CORE CLAIM**; lớp 8 chỉ là mức kiến thức nền, không khẳng định SGK bắt buộc kỹ thuật chuyên đề
- `topic_placements`: CT06 · Challenge, phép biến đổi thêm bớt
- `prerequisite_skills`: bình phương một tổng, hiệu hai bình phương, phân tích đa thức
- `canonical_owner`: WX Challenge mới nếu kiểm định và chủ dự án chấp thuận.

**Đề bài:** Phân tích biểu thức `x⁴+4` thành nhân tử với hệ số nguyên. *Giải thích vì sao chọn thêm và bớt cùng một hạng tử.*

**Gợi ý phân tầng (draft):**
1. Cố gắng đưa `x⁴+4` về một bình phương hoàn chỉnh.
2. Thêm và bớt `4x²` để có `(x²+2)²-(2x)²`.
3. Dùng hiệu hai bình phương để tạo hai nhân tử.

**Lời giải (source-verified math):**
\[
x^4+4=x^4+4x^2+4-4x^2=(x^2+2)^2-(2x)^2
\]
nên
\[
x^4+4=(x^2-2x+2)(x^2+2x+2).
\]
Hai vế bằng nhau theo hằng đẳng thức; có thể nhân ngược để kiểm tra.

**Rubric bản thảo 4 điểm:** tạo bình phương hoàn chỉnh bằng thêm/bớt `4x²` (2); áp dụng hiệu hai bình phương, sắp xếp đúng hai nhân tử (2).

**Lỗi thường gặp:** thêm mà quên bớt `4x²`; dừng ở hiệu hai bình phương chưa thành tích; nhầm `(x²+2)²=x⁴+4`.

## PROPOSED-WX07-CONCEPT-001 — Điều kiện xác định sau rút gọn

- `source_id`: `07-WR-11`
- `topic_id`: `CT07`
- `written_role`: **ROUTINE_PRACTICE / DEEP_ANCHOR** cần chọn sau khi đối chiếu; ưu tiên Core Trap nếu đủ chỗ, KHÔNG sao chép lời giải `WX07-RAT-001`
- `kntt_placements`: lớp 8 Bài 22 theo báo cáo NotebookLM; xác minh placement S1 trước khi thêm metadata
- `topic_placements`: CT07 · điều kiện xác định ban đầu
- `related_canonical`: `WX07-RAT-001` (khác đề), `RAT07V1_063` (đã có MCQ về cùng ý tưởng)
- `canonical_owner`: CHƯA CHỐT. Có thể chỉ bổ sung vào Core mục “vì sao” và **không** thêm WX nếu không có lợi ích độc lập.

**Đề bài:** Vì sao khi biến đổi
\[
\frac{x^2-4}{x-2}=x+2
\]
ta vẫn phải ghi điều kiện `x≠2`, dù biểu thức `x+2` xác định với mọi `x`? *Hãy giải thích bằng lời.*

**Gợi ý phân tầng (draft):**
1. Tại `x=2`, mẫu số của biểu thức ban đầu bằng bao nhiêu?
2. Phân tích tử số thành `(x-2)(x+2)` và hỏi khi nào được rút gọn.
3. Phân biệt “biểu thức mới có nghĩa” với “đẳng thức biến đổi đúng trên miền xác định ban đầu”.

**Lời giải (source-verified math):** Phân thức `(x²-4)/(x-2)` **không xác định tại `x=2`**. Chỉ với `x≠2` mới có `(x²-4)/(x-2)=((x-2)(x+2))/(x-2)=x+2`. Việc thu gọn không thể bổ sung lại một giá trị đã bị loại khỏi tập xác định gốc.

**Rubric bản thảo 2 điểm:** chỉ rõ `x=2` bị loại vì mẫu bằng 0 (1); giải thích phép rút gọn chỉ bảo toàn đẳng thức trên miền `x≠2` (1).

**Lỗi thường gặp:** coi `x+2` xác định với mọi `x` là lý do để bỏ điều kiện; chỉ viết “mẫu khác 0” mà không nêu rõ giá trị bị loại hoặc lập luận miền xác định.

## Yêu cầu thẩm định cho vòng kế tiếp

NotebookLM cần đánh giá **từng bản thảo 3/3** về: (a) phép toán và lời giải, (b) chất lượng hint và rubric mới, (c) giá trị khác biệt so với 6 WX canonical của CĐ05–07, (d) tầng S1, (e) lỗi học thuật/lộ đáp án không chủ đích, (f) quyết định `APPROVE_NEW_WX` / `PLACE_CORE_ONLY` / `REUSE_EXISTING_WX` / `REVISE`. Không biến những quyết định này thành hành động triển khai tự động.

**Ranh giới:** không có câu mới nào ở Practice; không ghi điểm tự động từ tự luận giấy; không thay đổi lịch sử học sinh, Core Readiness hoặc data migration.


## 5. Existing approved canonical written examples for comparison (NO DUPLICATION)

### WX07-RAT-001 — Rút gọn nhưng không làm mất điều kiện ban đầu

Role/layer: `KNTT-Core` · academic review status: `APPROVED`. Source refs: docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-07; docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-11.

**Problem:** Cho

$$A=\frac{x^2-9}{x^2-3x}.$$

1. Tìm điều kiện xác định của $A$.
2. Rút gọn $A$.
3. Viết kết quả cuối cùng kèm điều kiện của $x$.

**Solution steps:**
- Điều kiện xác định: Mẫu số là $x^2-3x=x(x-3)$. Vì mẫu phải khác $0$ nên

$$x\ne0,\qquad x\ne3.$$
- Phân tích tử và mẫu: Dùng hiệu hai bình phương:

$$x^2-9=(x-3)(x+3),$$

và

$$x^2-3x=x(x-3).$$
- Rút gọn: Trên miền xác định đã nêu,

$$A=\frac{(x-3)(x+3)}{x(x-3)}=\frac{x+3}{x}.$$
- Kết luận: Vậy

$$A=\frac{x+3}{x},\qquad x\ne0,3.$$

Điều kiện $x\ne3$ vẫn phải giữ dù nhân tử $x-3$ đã được rút gọn.

**Rubric:**
- {"criterion":"Xác định đúng mẫu và điều kiện $x\\ne0,3$.","points":1}
- {"criterion":"Phân tích đúng $x^2-9$ và $x^2-3x$ thành nhân tử.","points":1}
- {"criterion":"Rút gọn đúng về $\\frac{x+3}{x}$.","points":1}
- {"criterion":"Kết luận giữ đủ điều kiện ban đầu $x\\ne0,3$.","points":1}

### WX07-RAT-002 — Quy đồng hợp lý và giữ điều kiện xuyên suốt

Role/layer: `KNTT-Core` · academic review status: `APPROVED`. Source refs: docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-10.

**Problem:** Rút gọn biểu thức

$$A=\frac{x}{x-1}-\frac1{x+1}-\frac2{x^2-1}.$$

Yêu cầu: ghi điều kiện xác định trước khi biến đổi và nêu kết quả cuối cùng.

**Solution steps:**
- Điều kiện xác định: Vì $x^2-1=(x-1)(x+1)$ nên các mẫu khác $0$ khi

$$x\ne1,\qquad x\ne-1.$$
- Chọn mẫu thức chung: Mẫu thức chung thuận tiện là $(x-1)(x+1)=x^2-1$.
- Quy đồng: Ta có

$$A=\frac{x(x+1)}{(x-1)(x+1)}-\frac{x-1}{(x-1)(x+1)}-\frac2{(x-1)(x+1)}.$$
- Thu gọn tử: Tử số là

$$x(x+1)-(x-1)-2=x^2+x-x+1-2=x^2-1.$$
- Kết luận: Do đó

$$A=\frac{x^2-1}{x^2-1}=1,\qquad x\ne\pm1.$$

**Rubric:**
- {"criterion":"Ghi đúng điều kiện $x\\ne\\pm1$.","points":1}
- {"criterion":"Chọn đúng mẫu thức chung $(x-1)(x+1)$.","points":1}
- {"criterion":"Quy đồng đúng ba phân thức.","points":1}
- {"criterion":"Thu gọn tử số đúng về $x^2-1$.","points":1}
- {"criterion":"Kết luận $A=1$ và giữ điều kiện $x\\ne\\pm1$.","points":1}

### WX05-IDN-001 — Kiểm tra đủ hai bình phương và hạng tử giữa

Role/layer: `KNTT-Core` · academic review status: `APPROVED`. Source refs: docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-02; docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-03; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-1; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5.

**Problem:** Viết đa thức

$$x^2-10x+25$$

dưới dạng bình phương của một hiệu. Hãy chỉ rõ ba thành phần dùng để nhận dạng và khai triển ngược để kiểm tra.

**Solution steps:**
- Nhận hai bình phương: Ta có

$$x^2=(x)^2,\qquad 25=5^2.$$
- Kiểm tra hạng tử giữa: Hạng tử giữa là

$$-10x=-2\cdot x\cdot5,$$

đúng với mẫu $A^2-2AB+B^2$.
- Viết bình phương hoàn chỉnh: Vì vậy

$$x^2-10x+25=(x-5)^2.$$
- Khai triển ngược để kiểm tra: Ta có

$$(x-5)^2=x^2-10x+25,$$

trùng với đa thức ban đầu.

**Rubric:**
- {"criterion":"Nhận đúng $x^2$ và $25$ là hai bình phương.","points":1}
- {"criterion":"Kiểm tra đúng $-10x=-2\\cdot x\\cdot5$.","points":1}
- {"criterion":"Viết đúng $(x-5)^2$.","points":1}
- {"criterion":"Khai triển ngược đúng để kiểm tra.","points":1}

### WX06-FAC-001 — Nhìn hai ngoặc đối nhau trước khi đặt nhân tử

Role/layer: `KNTT-Core` · academic review status: `APPROVED`. Source refs: docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-01; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-02; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-1.

**Problem:** Phân tích hoàn toàn thành nhân tử:

$$P=2x(x-y)+4(y-x).$$

Hãy chỉ rõ bước đổi dấu của ngoặc trước khi đặt nhân tử chung.

**Solution steps:**
- Nhận hai ngoặc đối nhau: Ta có

$$y-x=-(x-y).$$
- Đổi về cùng một ngoặc: Do đó

$$P=2x(x-y)-4(x-y).$$
- Đặt nhân tử chung: Đặt $2(x-y)$ làm nhân tử chung:

$$P=2(x-y)(x-2).$$
- Kiểm tra nhanh: Nhân ngược:

$$2(x-y)(x-2)=2x(x-y)-4(x-y)=2x(x-y)+4(y-x),$$

đúng với biểu thức ban đầu.

**Rubric:**
- {"criterion":"Dùng đúng $y-x=-(x-y)$.","points":1}
- {"criterion":"Đổi biểu thức về $2x(x-y)-4(x-y)$.","points":1}
- {"criterion":"Đặt đúng nhân tử chung để được $2(x-y)(x-2)$.","points":1}
- {"criterion":"Kiểm tra ngược hợp lệ.","points":1}

### WX06-FAC-002 — Không dừng khi nhân tử vẫn còn phân tích được

Role/layer: `KNTT-Core` · academic review status: `APPROVED`. Source refs: docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-06; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-08; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-10; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-3; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-4; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-5.

**Problem:** Phân tích **hoàn toàn** thành nhân tử:

$$Q=x^3+2x^2-9x-18.$$

Sau khi phân tích, hãy nhân ngược hoặc kiểm tra cấu trúc để xác nhận kết quả.

**Solution steps:**
- Nhóm có mục đích: Nhóm hai hạng tử đầu và hai hạng tử sau:

$$Q=(x^3+2x^2)+(-9x-18).$$
- Đặt nhân tử từng nhóm: Ta được

$$Q=x^2(x+2)-9(x+2)=(x+2)(x^2-9).$$
- Tiếp tục phân tích: Vì

$$x^2-9=x^2-3^2=(x-3)(x+3),$$

nên

$$Q=(x+2)(x-3)(x+3).$$
- Kiểm tra đã phân tích hoàn toàn: Ba nhân tử bậc nhất không còn phân tích tiếp bằng các phương pháp Core đã học. Nhân $(x-3)(x+3)=x^2-9$ rồi nhân với $(x+2)$ sẽ thu lại $x^3+2x^2-9x-18$.

**Rubric:**
- {"criterion":"Nhóm đúng để xuất hiện chung $(x+2)$.","points":1}
- {"criterion":"Đặt nhân tử đúng và được $(x+2)(x^2-9)$.","points":1}
- {"criterion":"Tiếp tục dùng hiệu hai bình phương để được $(x+2)(x-3)(x+3)$.","points":1}
- {"criterion":"Kiểm tra được kết quả và không dừng sớm.","points":1}

## 6. Review output schema / gate

Return precisely one row per `05-ENT-01`, `06-CH-01`, `07-WR-11`; none missing, repeated or out of scope.

```text
PACKET_ID|MATH-CT05-07-W3A-WR-R1-20261016
EXPECTED=3
REVIEWED=3
SOURCE_ID | MATH | HINTS | SOLUTION | RUBRIC | GRADE_AND_LAYER_S1 | DISTINCT_FROM_CANONICAL_WX | PROPOSED_ROLE | PRECISE_REVISION | ITEM_VERDICT
OVERALL|PASS_FOR_AUTHORING_REVIEW / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE
```

Accepted proposed roles: `APPROVE_NEW_WX`, `PLACE_CORE_ONLY`, `REUSE_EXISTING_WX`, `REVISE`, `INSUFFICIENT_EVIDENCE`. Explain every required correction with exact text and indicate if rubric/hints need revision. Report any unjustified S1 placement or assertion of exam frequency.

**Release authorization:** even `PASS_FOR_AUTHORING_REVIEW` does NOT deploy. Implementation requires owner approval, a new canonical-library delta with no duplicate, local test + public Math PR CI, and post-deploy acceptance.
