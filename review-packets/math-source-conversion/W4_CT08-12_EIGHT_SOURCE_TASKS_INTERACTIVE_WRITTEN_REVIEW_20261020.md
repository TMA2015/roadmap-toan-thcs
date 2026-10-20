# W4 · Chuyển đổi 8 bài nguồn CT08–CT12 sang Luyện tập tương tác / Tự luận — yêu cầu kiểm toán

**PACKET_ID:** `MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020`
**Status:** SOURCE_LOCKED_AUTHORING_DRAFT / INDEPENDENT_NOTEBOOKLM_REVIEW_PENDING / NO_RELEASE_AUTHORIZATION
**Phạm vi:** đúng 8 bài gốc đã có trong 5 tệp Markdown; **6 bài dự thảo Written**, **2 bài định tuyến đến các câu MCQ hiện có (REUSE)**. Không phải 8 MCQ mới, không phải 8 WX được phát hành.

**Nguyên tắc:** Biến đổi nguyên nguồn, không xoá phần bài tập trên trang cũ; một bài tự luận chỉ có 1 ID canonical nếu sau này được phê duyệt, dùng placement metadata cho cả đường học theo lớp và học theo chuyên đề. Bài dạng ROUTINE được phép ngắn; không gắn Entrance10 vào Core. Dự thảo này chưa sửa 69 WX, MCQ, Core, Readiness hay lịch sử học.

## A. Baseline đã kiểm tra

- Written Library canonical: `docs/assets/data/written-exercises/written-exercise-library-v1.json` blob `eed3fa0cbae29fd4fdb9daaeac9ef36c3744b665`, **69** mục. Phân bố liên quan: CT08 2, CT09 8, CT10 2, CT11 3, CT12 2.
- Interactive: CT08 132, CT09 129, CT10 120, CT11 132, CT12 123 câu. Số lượng và problem-type có ý nghĩa kiểm tra chồng lắp, KHÔNG làm bằng chứng đủ chiều sâu.
- 6 Writing candidate nếu tất cả được duyệt và triển khai sẽ nâng Written 69→75; hiện tại **không thay đổi**. Mã ở đây là `W4-CANDIDATE`, **không được cấp ID canonical khi chưa có NotebookLM PASS**.

| Topic | Original Markdown source | Exact Git blob SHA |
|---|---|---|
| CT08 | `docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md` | `6d29234ccb111329671f432df78c09b3ecda4877` |
| CT09 | `docs/kien-thuc/09-he-phuong-trinh/bai-tap.md` | `0236497368fdb5dec9a53526065be468627405df` |
| CT10 | `docs/kien-thuc/10-ham-so-do-thi/bai-tap.md` | `b06ed2766dc9a455f62db0138f7a75f0bb13a58f` |
| CT11 | `docs/kien-thuc/11-can-thuc/bai-tap.md` | `8814674a67c9f576df49284282bd1fa16cfbba7c` |
| CT12 | `docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md` | `8199916e355e8d1a617ef8687c4f442e6c6e48d1` |

## B. Quyết định chuyển đổi đề xuất

| Historical source ID | Vai trò đề xuất | Tầng học | Giá trị khác biệt / phương án chống trùng |
|---|---|---|---|
| `08-WR-03` | WRITTEN_CANDIDATE | CT08 KNTT-Core / ROUTINE_PRACTICE | Đã có 12 MCQ dạng pt-tich, nhưng hai bài Written CT08 hiện không yêu cầu trình bày đủ các nhánh nghiệm và kiểm tra lại. |
| `08-WR-10` | REUSE_INTERACTIVE_NO_NEW_MCQ | CT08 KNTT-Core / existing interactive Practice | MCQ được tái sử dụng có chung năng lực lập phương trình từ thao tác nối tiếp, nhưng KHÔNG phải cùng nguyên văn hoặc cùng số liệu bài nguồn. |
| `09-WR-02` | REUSE_INTERACTIVE_NO_NEW_MCQ | CT09 KNTT-Core / existing interactive Practice | MCQ đã có biểu thức (x+y=2,,2x+2y=5) minh họa trực tiếp hệ hai đường thẳng song song phân biệt. Không cần phát sinh thêm một câu trùng. |
| `09-WR-05` | WRITTEN_CANDIDATE | CT09 KNTT-Core / DEEP_ANCHOR | 8 WX09 đã có giải hệ và mô hình hóa, nhưng không có anchor chuyên biệt yêu cầu khử mẫu, chọn thế, rồi kiểm nghiệm cặp phân số ở hai phương trình ban đầu. |
| `10-ENT-02` | WRITTEN_CANDIDATE | CT10 Entrance10 / TRANSFER | WX10 hiện có một anchor về hệ số góc/giao trục và một anchor về parabol; chưa có Written trình bày cả hoành/tung độ giao điểm hai đường và ý nghĩa nghiệm hệ. |
| `11-WR-10` | WRITTEN_CANDIDATE | CT11 KNTT-Core / ROUTINE_PRACTICE | 12 MCQ về căn bậc ba và 3 WX11 về căn bậc hai; chưa có Written riêng yêu cầu giải thích (sqrt[3]{x^3}=x) với (xinmathbb R). Độ khó thấp; cho phép NotebookLM kết luận REUSE thay vì thêm WX. |
| `11-ENT-01` | WRITTEN_CANDIDATE | CT11 Entrance10 / DEEP_ANCHOR | 3 MCQ tìm x từ căn có mức thao tác nhanh, nhưng không có Written CT11 chuyên biệt yêu cầu miền (xge1), bình phương tương đương có điều kiện, kiểm tra nghiệm ngoại lai. |
| `12-ENT-02` | WRITTEN_CANDIDATE | CT12 Entrance10 / TRANSFER | 6 MCQ dấu nghiệm và 2 WX12 giải phương trình/lập phương trình Viète; chưa có Written yêu cầu kết luận dấu nghiệm mà **không giải riêng nghiệm** và giải thích điều kiện tồn tại hai nghiệm thực. |

## C. Nguyên văn 8 bài nguồn và gói học tự kiểm tra được đề xuất

### 1/8 · `08-WR-03` — Giải phương trình tích — không bỏ sót nhánh

**Canonical original task (exact Markdown, source blob `6d29234ccb111329671f432df78c09b3ecda4877`):**

~~~markdown
#### 08-WR-03 · Phương trình tích
Giải \((x-4)(2x+1)=0\).

??? tip "Gợi ý"
    Một tích bằng 0 khi ít nhất một nhân tử bằng 0.

??? example "Xem lời giải"
    \[
    x=4\qquad\text{hoặc}\qquad x=-\frac12.
    \]
~~~

**Dispostion:** `WRITTEN_CANDIDATE` · CT08 KNTT-Core / ROUTINE_PRACTICE · `equation-zero-product-two-branches`.

**Why this task, not a numerical clone:** Đã có 12 MCQ dạng pt-tich, nhưng hai bài Written CT08 hiện không yêu cầu trình bày đủ các nhánh nghiệm và kiểm tra lại.

**Written role proposal:** `ROUTINE_PRACTICE`, Grade 8, legacy-source lineage `docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md#08-WR-03`; same canonical item for two navigation paths; no automatic mastery/readiness. Proposed type `equation-zero-product-two-branches`.

**Progressive hints (release only after answer attempt):**
1. Tìm các nhân tử của tích bằng 0.
2. Cho lần lượt từng nhân tử bằng 0; không chọn chỉ một nhánh.
3. Thay các nghiệm vào biểu thức tích ban đầu để kiểm tra.

**Worked solution / source-faithful candidate:** Tích \((x-4)(2x+1)=0\) khi \(x-4=0\) hoặc \(2x+1=0\). Vậy \(x=4\) hoặc \(x=-\frac12\). Thay vào tích cho kết quả \(0\) ở mỗi trường hợp; tập nghiệm \(S=\{4,-\frac12\}\).

**Self-marking rubric (4 points, exactly 1 each):**
- Vận dụng đúng tính chất tích bằng 0.
- Giải đúng nhánh (x-4=0).
- Giải đúng nhánh (2x+1=0).
- Kết luận và kiểm tra đủ hai nghiệm.

**Likely error:** Chỉ giải nhánh thứ nhất, hoặc viết (x=+rac12) khi (2x+1=0).

### 2/8 · `08-WR-10` — Giữ đúng thứ tự phép tính trong bài toán bằng lời

**Canonical original task (exact Markdown, source blob `6d29234ccb111329671f432df78c09b3ecda4877`):**

~~~markdown
#### 08-WR-10 · Lập phương trình
Một số cộng 7 rồi nhân 2 được 30. Tìm số đó.

??? tip "Gợi ý"
    Gọi số cần tìm là \(x\), lập phương trình \(2(x+7)=30\).

??? example "Xem lời giải"
    \[
    x+7=15\Rightarrow x=8.
    \]
~~~

**Dispostion:** `REUSE_INTERACTIVE_NO_NEW_MCQ` · CT08 KNTT-Core / existing interactive Practice · `word-to-equation-order`.

**Why this task, not a numerical clone:** MCQ được tái sử dụng có chung năng lực lập phương trình từ thao tác nối tiếp, nhưng KHÔNG phải cùng nguyên văn hoặc cùng số liệu bài nguồn.

**Existing interactive task to REUSE (analogue, not original-stem equivalence):** `EQ08V1_108`, file `08-phuong-trinh-bat-phuong-trinh-v1-04.json`, blob `06ee1a503f03de3495db198594a5d560ec366813`.

> Một số gấp 3 lần rồi bớt 5 được 16. Số đó là:

- Option A **correct**: 7
- Option B : 8
- Option C : 6
- Option D : 14

The existing explanation: Lập phương trình 3x-5=16.. **No new MCQ, no new ID or answer option order change.** Historical source remains available in the original Markdown. Do not pretend a learner answering the analogous MCQ completed the old written source.

**Progressive hints (release only after answer attempt):**
1. Gọi số cần tìm là (x).
2. ‘Cộng 7 rồi nhân 2’ được viết là (2(x+7)), khác (2x+7).

**Worked solution / source-faithful candidate:** Đặt \(x\) là số cần tìm. Ta có \(2(x+7)=30\), nên \(x+7=15\) và \(x=8\). Kiểm tra: \((8+7)\cdot2=30\).

**Likely error:** Hiểu nhầm thành (2x+7=30); sai thứ tự thao tác.

### 3/8 · `09-WR-02` — Vô nghiệm vì hai đường thẳng song song phân biệt

**Canonical original task (exact Markdown, source blob `0236497368fdb5dec9a53526065be468627405df`):**

~~~markdown
#### 09-WR-02 · Ý nghĩa hình học
Một hệ biểu diễn hai đường thẳng song song phân biệt. Hệ có bao nhiêu nghiệm?

??? tip "Gợi ý"
    Nghiệm hệ là giao điểm chung.

??? example "Xem lời giải"
    Hai đường song song phân biệt không có giao điểm, nên hệ vô nghiệm.
~~~

**Dispostion:** `REUSE_INTERACTIVE_NO_NEW_MCQ` · CT09 KNTT-Core / existing interactive Practice · `parallel-distinct-system-interpretation`.

**Why this task, not a numerical clone:** MCQ đã có biểu thức (x+y=2,,2x+2y=5) minh họa trực tiếp hệ hai đường thẳng song song phân biệt. Không cần phát sinh thêm một câu trùng.

**Existing interactive task to REUSE (analogue, not original-stem equivalence):** `SYS09V1_033`, file `09-he-phuong-trinh-v1-02.json`, blob `b6dc363399cc9f030256b93251e5e9faf449df87`.

> Hệ \(\begin{cases}1x+1y=2\\2x+2y=5\end{cases}\) có bao nhiêu nghiệm?

- Option A **correct**: Hệ vô nghiệm
- Option B : Hệ có đúng một nghiệm
- Option C : Hệ có vô số nghiệm
- Option D : Không đủ dữ kiện

The existing explanation: Hai vế trái tỉ lệ nhưng hằng số không cùng tỉ lệ, nên hai đường thẳng song song phân biệt.. **No new MCQ, no new ID or answer option order change.** Historical source remains available in the original Markdown. Do not pretend a learner answering the analogous MCQ completed the old written source.

**Progressive hints (release only after answer attempt):**
1. Nghiệm của hệ là tọa độ giao điểm hai đường thẳng.
2. Nếu hai đường thẳng song song phân biệt, chúng có điểm chung không?

**Worked solution / source-faithful candidate:** Hai đường thẳng song song phân biệt không có giao điểm. Do đó hệ **vô nghiệm**. Với MCQ \(\{x+y=2,\ 2x+2y=5\}\), nhân phương trình đầu với \(2\) cho \(2x+2y=4\), mâu thuẫn \(2x+2y=5\).

**Likely error:** Nhầm hai đường thẳng song song với trùng nhau, dẫn đến trả lời vô số nghiệm.

### 4/8 · `09-WR-05` — Khử mẫu rồi chọn cách giải hệ

**Canonical original task (exact Markdown, source blob `0236497368fdb5dec9a53526065be468627405df`):**

~~~markdown
#### 09-WR-05 · Biến đổi trước khi giải
Giải hệ \(\frac{x}{2}+\frac{y}{3}=2,\ x-y=1\).

??? tip "Gợi ý"
    Nhân phương trình đầu với 6.

??? example "Xem lời giải"
    \[
    3x+2y=12,\qquad x-y=1.
    \]
    Từ \(x=y+1\):
    \[
    3(y+1)+2y=12\Rightarrow5y=9\Rightarrow y=\frac95,\qquad x=\frac{14}{5}.
    \]
~~~

**Dispostion:** `WRITTEN_CANDIDATE` · CT09 KNTT-Core / DEEP_ANCHOR · `system-clear-denominator-substitute-verify`.

**Why this task, not a numerical clone:** 8 WX09 đã có giải hệ và mô hình hóa, nhưng không có anchor chuyên biệt yêu cầu khử mẫu, chọn thế, rồi kiểm nghiệm cặp phân số ở hai phương trình ban đầu.

**Written role proposal:** `DEEP_ANCHOR`, Grade 9, legacy-source lineage `docs/kien-thuc/09-he-phuong-trinh/bai-tap.md#09-WR-05`; same canonical item for two navigation paths; no automatic mastery/readiness. Proposed type `system-clear-denominator-substitute-verify`.

**Progressive hints (release only after answer attempt):**
1. Nhân phương trình chứa mẫu lần lượt với bội chung (6).
2. Từ phương trình (x-y=1) suy ra (x=y+1).
3. Thế vào phương trình đã khử mẫu và kiểm tra ngược trong hệ gốc.

**Worked solution / source-faithful candidate:** Hệ ban đầu \(\frac{x}{2}+\frac{y}{3}=2,\ x-y=1\). Nhân phương trình đầu với \(6\): \(3x+2y=12\). Từ \(x=y+1\) suy ra \(3(y+1)+2y=12\), tức \(5y=9\), \(y=\frac95\), \(x=\frac{14}{5}\). Kiểm tra \(\frac{14/5}{2}+\frac{9/5}{3}=\frac75+\frac35=2\) và \(\frac{14}{5}-\frac95=1\). Vậy nghiệm duy nhất \((x,y)=(\frac{14}{5},\frac95)\).

**Self-marking rubric (4 points, exactly 1 each):**
- Khử mẫu thành phương trình tương đương.
- Chọn phép thế đúng.
- Giải chính xác (x=14/5, y=9/5).
- Kiểm tra cả hai phương trình ban đầu.

**Likely error:** Nhân 6 vào không đủ cả hai hạng tử hoặc chỉ kiểm tra một phương trình.

### 5/8 · `10-ENT-02` — Từ giao điểm của đồ thị đến nghiệm hệ

**Canonical original task (exact Markdown, source blob `b06ed2766dc9a455f62db0138f7a75f0bb13a58f`):**

~~~markdown
#### 10-ENT-02 · Giao điểm và hệ phương trình
Tìm giao điểm \(y=x+2\) và \(y=-x+4\).

??? tip "Gợi ý"
    Tại giao điểm hai giá trị \(y\) bằng nhau.

??? example "Xem lời giải"
    \[
    x+2=-x+4\Rightarrow x=1,\qquad y=3.
    \]
    Giao điểm là \(I(1;3)\).
~~~

**Dispostion:** `WRITTEN_CANDIDATE` · CT10 Entrance10 / TRANSFER · `line-intersection-by-equating-functions`.

**Why this task, not a numerical clone:** WX10 hiện có một anchor về hệ số góc/giao trục và một anchor về parabol; chưa có Written trình bày cả hoành/tung độ giao điểm hai đường và ý nghĩa nghiệm hệ.

**Written role proposal:** `ENTRANCE10`, Grade 9, legacy-source lineage `docs/kien-thuc/10-ham-so-do-thi/bai-tap.md#10-ENT-02`; same canonical item for two navigation paths; no automatic mastery/readiness. Proposed type `line-intersection-by-equating-functions`.

**Progressive hints (release only after answer attempt):**
1. Tại giao điểm, hai biểu thức (y) bằng nhau.
2. Giải phương trình hoành độ (x+2=-x+4).
3. Thay (x) tìm được vào *cả hai* hàm để kiểm tra.

**Worked solution / source-faithful candidate:** Tại giao điểm \(x+2=-x+4\), nên \(2x=2\) và \(x=1\). Thay vào \(y=x+2\) được \(y=3\); phương trình còn lại cũng cho \(y=3\). Giao điểm \(I(1;3)\), đồng thời là nghiệm của hệ hai phương trình đường thẳng.

**Self-marking rubric (4 points, exactly 1 each):**
- Lập phương trình bằng nhau của hai tung độ.
- Tìm đúng hoành độ (x=1).
- Tìm đúng tung độ (y=3).
- Kiểm tra cả hai và kết luận tọa độ giao điểm.

**Likely error:** Chỉ ghi (x=1) mà không tìm tung độ; nhầm giao điểm với giao trục.

### 6/8 · `11-WR-10` — Căn bậc ba của số âm và biểu thức có biến

**Canonical original task (exact Markdown, source blob `8814674a67c9f576df49284282bd1fa16cfbba7c`):**

~~~markdown
#### 11-WR-10 · Căn bậc ba
Tính \(\sqrt[3]{-216}\) và rút gọn \(\sqrt[3]{8x^3}\) với \(x\in\mathbb R\).

??? tip "Gợi ý"
    Căn bậc ba của số âm vẫn xác định; \(\sqrt[3]{x^3}=x\).

??? example "Xem lời giải"
    \[
    \sqrt[3]{-216}=-6,\qquad \sqrt[3]{8x^3}=2x.
    \]
~~~

**Dispostion:** `WRITTEN_CANDIDATE` · CT11 KNTT-Core / ROUTINE_PRACTICE · `real-cube-root-negative-variable`.

**Why this task, not a numerical clone:** 12 MCQ về căn bậc ba và 3 WX11 về căn bậc hai; chưa có Written riêng yêu cầu giải thích (sqrt[3]{x^3}=x) với (xinmathbb R). Độ khó thấp; cho phép NotebookLM kết luận REUSE thay vì thêm WX.

**Written role proposal:** `ROUTINE_PRACTICE`, Grade 9, legacy-source lineage `docs/kien-thuc/11-can-thuc/bai-tap.md#11-WR-10`; same canonical item for two navigation paths; no automatic mastery/readiness. Proposed type `real-cube-root-negative-variable`.

**Progressive hints (release only after answer attempt):**
1. Tìm số có lập phương bằng (-216).
2. Tách (8x^3=(2x)^3).
3. Không thêm giá trị tuyệt đối như căn bậc hai.

**Worked solution / source-faithful candidate:** Vì \((-6)^3=-216\), \(\sqrt[3]{-216}=-6\). Với mọi \(x\in\mathbb R\), \(8x^3=(2x)^3\), nên \(\sqrt[3]{8x^3}=2x\) (không phải \(2|x|\)).

**Self-marking rubric (4 points, exactly 1 each):**
- Tính đúng căn bậc ba của số âm.
- Nhận diện (8x^3=(2x)^3).
- Kết luận (2x) cho mọi số thực.
- Giải thích vì sao không xuất hiện (|x|).

**Likely error:** Lấy căn bậc ba số âm thành số dương; nhầm quy tắc trị tuyệt đối của căn bậc hai.

### 7/8 · `11-ENT-01` — Giải phương trình chứa căn và loại nghiệm ngoại lai

**Canonical original task (exact Markdown, source blob `8814674a67c9f576df49284282bd1fa16cfbba7c`):**

~~~markdown
#### 11-ENT-01 · Phương trình chứa căn
Giải \(\sqrt{x+1}=x-1\).

??? tip "Gợi ý"
    Vế phải phải không âm trước khi bình phương.

??? example "Xem lời giải"
    Điều kiện \(x\ge1\). Bình phương:
    \[
    x+1=(x-1)^2\Rightarrow x(x-3)=0.
    \]
    Chỉ \(x=3\) thỏa.
~~~

**Dispostion:** `WRITTEN_CANDIDATE` · CT11 Entrance10 / DEEP_ANCHOR · `radical-equation-square-and-check`.

**Why this task, not a numerical clone:** 3 MCQ tìm x từ căn có mức thao tác nhanh, nhưng không có Written CT11 chuyên biệt yêu cầu miền (xge1), bình phương tương đương có điều kiện, kiểm tra nghiệm ngoại lai.

**Written role proposal:** `ENTRANCE10`, Grade 9, legacy-source lineage `docs/kien-thuc/11-can-thuc/bai-tap.md#11-ENT-01`; same canonical item for two navigation paths; no automatic mastery/readiness. Proposed type `radical-equation-square-and-check`.

**Progressive hints (release only after answer attempt):**
1. Biểu thức dưới căn và vế phải phải phù hợp: (x-1ge0).
2. Sau đó bình phương (x+1=(x-1)^2).
3. Đừng nhận mọi nghiệm của phương trình sau bình phương; kiểm tra vào phương trình ban đầu.

**Worked solution / source-faithful candidate:** Vì \(\sqrt{x+1}\ge0\), yêu cầu \(x-1\ge0\), tức \(x\ge1\). Bình phương: \(x+1=(x-1)^2=x^2-2x+1\) nên \(x(x-3)=0\). Hai ứng viên \(0,3\), nhưng \(0\not\ge1\); còn \(x=3\) cho \(\sqrt4=2=3-1\). Do đó \(S=\{3\}\).

**Self-marking rubric (4 points, exactly 1 each):**
- Ghi điều kiện (xge1).
- Bình phương và biến đổi đúng về (x(x-3)=0).
- Xử lý đúng hai nghiệm ứng viên, loại (x=0).
- Thử lại và kết luận (S={3}).

**Likely error:** Quên yêu cầu (x-1ge0) rồi nhận (x=0); bình phương mà không kiểm tra.

### 8/8 · `12-ENT-02` — Xét dấu hai nghiệm bằng tích Viète

**Canonical original task (exact Markdown, source blob `8199916e355e8d1a617ef8687c4f442e6c6e48d1`):**

~~~markdown
#### 12-ENT-02 · Dấu nghiệm
Cho \(x^2+x-6=0\) có hai nghiệm thực. Xét dấu hai nghiệm bằng Viète.

??? tip "Gợi ý"
    Xét dấu của tích P.

??? example "Xem lời giải"
    \[
    P=-6<0,
    \]
    nên hai nghiệm trái dấu.
~~~

**Dispostion:** `WRITTEN_CANDIDATE` · CT12 Entrance10 / TRANSFER · `viete-root-sign-without-solving`.

**Why this task, not a numerical clone:** 6 MCQ dấu nghiệm và 2 WX12 giải phương trình/lập phương trình Viète; chưa có Written yêu cầu kết luận dấu nghiệm mà **không giải riêng nghiệm** và giải thích điều kiện tồn tại hai nghiệm thực.

**Written role proposal:** `ENTRANCE10`, Grade 9, legacy-source lineage `docs/kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md#12-ENT-02`; same canonical item for two navigation paths; no automatic mastery/readiness. Proposed type `viete-root-sign-without-solving`.

**Progressive hints (release only after answer attempt):**
1. Đề cho phương trình có hai nghiệm thực; xem (Delta) nếu cần tự kiểm tra.
2. Dùng (P=x_1x_2=c/a).
3. Tích âm cho biết hai nghiệm trái dấu.

**Worked solution / source-faithful candidate:** Với \(a=1,c=-6\), theo Viète \(x_1x_2=\frac ca=-6<0\). Do đó hai nghiệm thực **trái dấu** (một âm, một dương). Có thể kiểm tra điều kiện hai nghiệm: \(\Delta=1-4(-6)=25>0\). Không cần tìm nghiệm riêng từng số.

**Self-marking rubric (4 points, exactly 1 each):**
- Xác định đúng hệ số (a,c).
- Áp dụng Viète và tính (P=-6).
- Nêu lý do tích âm suy ra hai nghiệm trái dấu.
- Không dùng việc giải nghiệm riêng để thay thế yêu cầu phương pháp.

**Likely error:** Nhầm tổng âm suy ra cả hai nghiệm âm; bỏ qua vai trò của dấu tích.

## D. Review evidence & veto criteria

**NotebookLM must independently review all eight source placements, and the **six Written authoring drafts**. For 2 REUSE cases, verify that the existing active MCQ assesses the same **skill structure**, not necessarily the same literal question. If too weak, respond `REVISE_MAPPING` or `NO_CHANGE`; do not silently author a substitute new MCQ.

For each of six WX proposals verify exact algebra, domain, extraneous roots, difficulty/layer (S1 KNTT vs Entrance10), non-duplicate original structure relative to existing 69 Written and 636 CT08–12 active MCQs, hint sequencing, four-item self-check rubric, learner self-study usefulness and challenge of copying numbers. Full S1 page authority is **not included** as scanned pages in this packet; independently use real S1 sources or mark `INSUFFICIENT_S1` rather than inventing locators.

**Selected risk gates:**
- `08-WR-03`: 12 similar existing `pt-tich` MCQs; accept WX only if written full-branch checking merits it.
- `09-WR-05`: 8 existing WX09, so only accept if removing rational coefficients + verifying both equations is actually different from published solution strategies.
- `11-WR-10`: simple two-step cube root, 12 existing cube-root MCQs; reject as redundant if no distinct full-process reasoning is gained.
- `11-ENT-01`: extraneous `x=0` root must be rejected and `x=3` checked; no Core credit.
- `12-ENT-02`: Viète roots opposite signs; must not require solving individual roots; optional Entrance10 remains outside Core.
- `08-WR-10` and `09-WR-02`: reuse only with explicit rationale for analogue and no fake exact completion.

**Possible outputs:** `PUBLISH_WX_AFTER_OWNER_APPROVAL` / `REUSE_EXISTING_INTERACTIVE` / `PLACE_CORE_ONLY` / `REVISE` / `NO_CHANGE` / `INSUFFICIENT_SOURCE`. Accept fewer than six WX if pedagogically prudent; six is only a candidate count. Do not inflate by assigning new IDs to structurally redundant prompts.

```text
PACKET_ID|MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020
EXPECTED_SOURCE_ITEMS=8
REVIEWED_SOURCE_ITEMS=8
EXPECTED_WRITTEN_CANDIDATES=6
EXPECTED_INTERACTIVE_REUSE=2
08-WR-03 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
08-WR-10 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
09-WR-02 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
09-WR-05 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
10-ENT-02 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
11-WR-10 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
11-ENT-01 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
12-ENT-02 | MATH:... | S1_LAYER:... | DISTINCTNESS:... | DISPOSITION:...
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|PASS_FOR_PLACEMENT_AND_AUTHORING / REVISION_REQUIRED / INSUFFICIENT_SOURCE
AUTHORIZATION|NO_LIVE_RELEASE
```

## E. Safety and owner decision

No automatic content merge or release. **Zero** new canonical Written IDs, **zero** new MCQ IDs, unchanged original source Markdown, `written-exercise-library-v1.json`, practice manifests, answer keys, Skill/Families/Readiness, learner records, existing scores and UI. `PASS_FOR_PLACEMENT_AND_AUTHORING` only allows a separate implementation PR subject to PR QA/browser display, student device check and explicit Owner approval. A future successful release must never silently change past attempts.

**Source pack for NotebookLM:** permanent Master Plan v1.2.1, NotebookLM Review Rules v1.2, Golden and Source/Depth audit plus this **single temporary MD**; deselect prior W3/R38 temporary sources.
