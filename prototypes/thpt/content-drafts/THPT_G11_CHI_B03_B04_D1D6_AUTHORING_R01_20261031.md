# G11 KNTT Chương I — B03–B04 D1–D6 trọn gói, ứng viên R01

**PACKET_ID:** THPT-G11-CHI-B03-B04-D1D6-AUTHORING-R01-20261031
**LEARNING_PATH:** SGK_CHAPTER · **AUTHORING_STATUS:** DRAFT_QA_ONLY, NOT_NOTEBOOKLM_PASS
**SOURCE:** SGK Toán 11 KNTT Tập 1 Bài 3 trang in 22–30, Bài 4 trang in 31–39, Bài tập cuối Chương I trang 40–41. SBT KNTT Tập 1 B03–04 và cuối chương: **cần NotebookLM xác minh trang in trực tiếp từ S1**, không tự suy đoán. Năm Permanent Sources THPT v2.0. B01–B02 đã có snapshot R01 độc lập PASS: blob `f0e737f2d07a27f233615345b60070319d5bd00f`; không sửa nguồn đã duyệt.

## RD0 — 16 outcomes B03–B04

| Outcome | Kiến thức bắt buộc | Bằng chứng |
|---|---|---|
| G11-B03-DOMAIN_RANGE | TXĐ/TGT sin, cos, tan, cot | EX03-01, B03-C01, P01, P02 |
| G11-B03-PARITY | sin/tan/cot lẻ; cos chẵn, trên miền đối xứng | EX03-02, B03-C02 |
| G11-B03-PERIOD | Chu kỳ cơ bản sin/cos 2π, tan/cot π; hệ số đối số | EX03-03, B03-C03, P03 |
| G11-B03-SIN_GRAPH | Sin: điểm mốc, miền giá trị, chiều biến thiên | FIG03-01, B03-C04, P04 |
| G11-B03-COS_GRAPH | Cos: điểm mốc, miền giá trị, chiều biến thiên | FIG03-02, B03-P05 |
| G11-B03-TAN_GRAPH | Tan: TXĐ, tiệm cận đứng, đồng biến từng nhánh | FIG03-03, B03-P06 |
| G11-B03-COT_GRAPH | Cot: TXĐ, tiệm cận đứng, nghịch biến từng nhánh | FIG03-04, B03-P07 |
| G11-B03-MODELING | Biên độ, đường trung bình, chu kỳ mô hình tuần hoàn | EX03-05, B03-P08, W03 |
| G11-B04-SIN_EQ | Sin x = m, điều kiện | B04-C01, P01, P06 |
| G11-B04-COS_EQ | Cos x = m, nghiệm ± theo 2π | B04-C02, P02 |
| G11-B04-TAN_EQ | Tan x = m, chu kỳ π và điều kiện | B04-C03, P03 |
| G11-B04-COT_EQ | Cot x = m, chu kỳ π và điều kiện | B04-C04, P04 |
| G11-B04-TRANSFORM | Đặt t=ax+b; kết hợp công thức lượng giác đã học | EX04-03, B04-P01..P05 |
| G11-B04-INTERVAL | Lọc nghiệm trên đoạn/khoảng, loại nghiệm ranh giới | EX04-04, B04-P06, P07 |
| G11-B04-EXTRANEOUS | Phép biến đổi tương đương, điều kiện mẫu và nghiệm ngoại lai | EX04-05, B04-P08 |
| G11-B04-APPLICATION | Chu kỳ trong bài toán thời gian thực tế | EX04-06, B04-P09, W04 |

## D1 — Bài 3. Hàm số lượng giác

1. **Hàm sin và cos:** `y=sin x`, `y=cos x` xác định với mọi `x∈ℝ`, giá trị trong `[-1,1]`. `sin(-x)=-sin x` (lẻ), `cos(-x)=cos x` (chẵn). Chu kỳ dương nhỏ nhất `2π`.
2. **Đồ thị sin:** qua `(0,0)`, `(π/2,1)`, `(π,0)`, `(3π/2,-1)`, `(2π,0)`; tăng trên `[-π/2+2kπ,π/2+2kπ]`, giảm trên `[π/2+2kπ,3π/2+2kπ]`. Không nói sin tăng trên toàn ℝ.
3. **Đồ thị cos:** qua `(0,1)`, `(π/2,0)`, `(π,-1)`, `(3π/2,0)`, `(2π,1)`; giảm trên `[2kπ,(2k+1)π]`, tăng trên `[(2k-1)π,2kπ]` với `k∈ℤ`.
4. **Hàm tan:** `tan x=sin x/cos x`; TXĐ `ℝ\{π/2+kπ:k∈ℤ}`, TGT ℝ, hàm lẻ, chu kỳ cơ bản π, đồng biến trên mỗi khoảng `(-π/2+kπ,π/2+kπ)`. Tiệm cận đứng tại `x=π/2+kπ`. Không nối đồ thị qua tiệm cận.
5. **Hàm cot:** `cot x=cos x/sin x`; TXĐ `ℝ\{kπ:k∈ℤ}`, TGT ℝ, hàm lẻ, chu kỳ π, nghịch biến trên mỗi `(kπ,(k+1)π)`, tiệm cận đứng tại `x=kπ`. Không tính `cot 0`.
6. **Hàm biến đổi và mô hình:** `f(x)=A sin(ωx+φ)+c` (`Aω≠0`) có biên độ `|A|`, TGT `[c-|A|,c+|A|]`, chu kỳ `2π/|ω|` (nếu miền thời gian đủ để thể hiện chu kỳ); với tan/cot `tan(ωx+φ)` có chu kỳ `π/|ω|`. `y=A sin(ωx+φ)+c` khi `A=0` là hằng, không được tuyên bố có chu kỳ *cơ bản*.
7. **Sử dụng đồ thị:** Hoành độ là radian; xét miền xác định trước, đọc điểm, cực trị và tiệm cận từ hình. Cần phân biệt tập giá trị và tập xác định, chu kỳ biểu thức và thời gian thực tế; trả lời số chu kỳ trong một phút phải đổi đơn vị nhất quán.

## D2 — Ví dụ giải thích bản chất B03

- **EX-G11-B03-01 (TXĐ/TGT).** `f(x)=tan(2x)` yêu cầu `cos(2x)≠0`, nên `x≠π/4+kπ/2` với `k∈ℤ`; giá trị vẫn là ℝ. Không viết x≠π/2+kπ vì quên hệ số 2.
- **EX-G11-B03-02 (chẵn/lẻ).** `f(x)=sin x+cos x` không chẵn, không lẻ vì `f(-x)=-sin x+cos x` khác cả `f(x)` lẫn `-f(x)`; trái lại `sin x` lẻ và `cos x` chẵn.
- **EX-G11-B03-03 (chu kỳ).** `y=2 sin(3x-π/4)` có chu kỳ cơ bản `T=2π/3`, TGT `[-2,2]`; `3x` khiến chu kỳ *ngắn hơn*, không dài hơn 3 lần.
- **EX-G11-B03-04 (đọc đồ thị).** `y=cos x` trên `[0,2π]` cắt Ox tại `π/2` và `3π/2`; vì vậy không kết luận đồ thị luôn dương.
- **EX-G11-B03-05 (ứng dụng).** Nhiệt độ `T(t)=24+3cos(πt/6)` (t tính giờ) có đường trung bình 24°C, biên độ 3°C, chu kỳ 12 giờ; T lớn nhất 27°C tại `t=12k`, nhỏ nhất 21°C tại `t=6+12k`.

## D1 — Bài 4. Phương trình lượng giác cơ bản

1. **Nguyên tắc:** phương trình là tìm toàn bộ `x` sao cho hai vế xác định và bằng nhau. Mỗi nhánh nghiệm phải có `k∈ℤ`; nghiệm tổng quát và nghiệm trên đoạn là hai yêu cầu khác nhau.
2. **`sin x=m`:** nếu `|m|>1` vô nghiệm; khi `|m|≤1`, đặt `α=arcsin m` (giá trị chính trong `[-π/2,π/2]`), hai họ `x=α+2kπ` hoặc `x=π-α+2kπ`, `k∈ℤ`. Hai họ có thể trùng khi `m=±1`; khi đó đếm nghiệm theo *tập hợp*, không cộng trùng.
3. **`cos x=m`:** nếu `|m|>1` vô nghiệm; nếu `|m|≤1`, đặt `α=arccos m∈[0,π]`, `x=±α+2kπ`. Với `m=±1`, hai họ có thể trùng.
4. **`tan x=m`:** với mọi `m∈ℝ`, `x=arctan m+kπ`; chỉ nhận các x thuộc miền `cos x≠0`, tự động được thỏa khi theo họ nghiệm đúng.
5. **`cot x=m`:** với mọi `m∈ℝ`, chọn `α∈(0,π)` sao cho `cot α=m`, `x=α+kπ`. Có thể chuyển về `tan x=1/m` **chỉ khi `m≠0` và còn điều kiện TXĐ**; với `cot x=0`, nghiệm `x=π/2+kπ`, không chia cho 0.
6. **Đặt đối số:** với `sin(ax+b)=m`, giải cho `t=ax+b` rồi biến đổi *cả* hai họ nghiệm; cùng cách cho cos/tan/cot. Không quên chia `a` và ghi `k∈ℤ` (nếu `a≠0`); khi hệ số bằng 0 phải xét phương trình hằng riêng.
7. **Phương trình quy về cơ bản:** biến đổi bằng công thức lượng giác hoặc đặt `u=sin x`... trong đúng miền. Khi chia cho `sin x`, `cos x` có thể mất nghiệm; tốt hơn phân tích nhân tử và xét các trường hợp. Bình phương có thể sinh nghiệm ngoại lai: luôn thử lại phương trình ban đầu.
8. **Nghiệm trên đoạn:** tìm các k nguyên phù hợp cận và xét dấu `[a,b]` so với `(a,b)`. Đối chiếu đồ thị để tự kiểm nghiệm nhưng không thay thế phép thế nghiệm vào đề.

## D2 — Ví dụ giải thích bản chất B04

- **EX-G11-B04-01 (sin).** `sin x=√2/2` cho `x=π/4+2kπ` hoặc `3π/4+2kπ`, k∈ℤ. Không ghi duy nhất π/4 vì bỏ nghiệm góc phần tư II.
- **EX-G11-B04-02 (tan/cot).** `tan x=-√3` cho `x=-π/3+kπ`. `cot x=0` cho `x=π/2+kπ`. Không biến cot=0 thành tan x vô hạn rồi kết luận vô nghiệm.
- **EX-G11-B04-03 (đối số).** `sin(2x)=1/2` cho `x=π/12+kπ` hoặc `5π/12+kπ`. Mọi nghiệm phải có `k∈ℤ`; không dùng π/6,5π/6 trực tiếp làm nghiệm x.
- **EX-G11-B04-04 (đoạn).** `cos x=-1/2` trên `[0,2π)` chỉ có `2π/3,4π/3`. Hai biên 0 và 2π không đều thuộc đoạn.
- **EX-G11-B04-05 (ngoại lai).** `sin x=cos x` cho `tan x=1` **chỉ sau khi kiểm `cos x≠0`**; tại `cos x=0`, `sin x=±1` nên không là nghiệm. Do đó `x=π/4+kπ`, không mất nghiệm.
- **EX-G11-B04-06 (ứng dụng).** `H(t)=10+2sin(πt/6)` (t giờ) bằng 11 khi `sin(πt/6)=1/2`. Trên `0≤t<12`, có `t=1` và `t=5` giờ, nhờ chọn đúng hai họ và lọc miền thời gian.

## D3 — SGK Core, Practice, Application: 26 canonical candidate items (NEW, NOT REVIEWED)

**Quy ước:** tất cả câu sau là câu tự biên soạn *mới*; formative có thể có gợi ý/lời giải nhưng **không ghi Mastery**, không dùng chính nguyên câu đã luyện làm chứng cứ RD1. Không chuyển câu mới lên website khi chưa có NotebookLM verdict.

### THPT-G11-B03-C01 — SGK_CORE · G11-B03-DOMAIN_RANGE · BASIC

**Đề:** TXĐ của y=tan x là gì?

**Đáp án:** ℝ \ {π/2+kπ:k∈ℤ}.

**Lời giải:** tan x chỉ xác định khi cos x≠0; cos x=0 tại π/2+kπ.

### THPT-G11-B03-C02 — SGK_CORE · G11-B03-PARITY · BASIC

**Đề:** Cho bốn hàm sin x, cos x, tan x, cot x. Hàm nào chẵn, hàm nào lẻ trên TXĐ?

**Đáp án:** cos x chẵn; sin x, tan x, cot x lẻ.

**Lời giải:** Dùng sin(-x)=-sinx, cos(-x)=cosx, tan(-x)=-tanx, cot(-x)=-cotx; các TXĐ đối xứng qua 0.

### THPT-G11-B03-C03 — SGK_CORE · G11-B03-PERIOD · BASIC

**Đề:** Chu kỳ cơ bản của y=sin x và y=tan x là bao nhiêu?

**Đáp án:** sin: 2π; tan: π.

**Lời giải:** sin(x+2π)=sinx; tan(x+π)=tanx và hai số lần lượt là chu kỳ dương nhỏ nhất.

### THPT-G11-B03-C04 — SGK_CORE · G11-B03-SIN_GRAPH · BASIC

**Đề:** Tìm tập giá trị và các điểm cực đại của y=sin x.

**Đáp án:** TGT [-1,1]; max 1 tại x=π/2+2kπ, k∈ℤ.

**Lời giải:** Đọc đồ thị sin và tính tuần hoàn: sin x≤1, bằng 1 tại π/2+2kπ.

### THPT-G11-B03-P01 — SGK_PRACTICE · G11-B03-DOMAIN_RANGE · CORE_APPLY

**Đề:** Tìm TXĐ của y=cot(2x).

**Đáp án:** ℝ \ {kπ/2:k∈ℤ}.

**Lời giải:** cot(2x) chỉ xác định nếu sin(2x)≠0, nên 2x≠kπ.

### THPT-G11-B03-P02 — SGK_PRACTICE · G11-B03-SIN_GRAPH · CORE_APPLY

**Đề:** Tìm tập giá trị của f(x)=1+2sin x.

**Đáp án:** [-1,3].

**Lời giải:** -1≤sinx≤1; nhân 2 cộng 1 cho -1≤f≤3. Hai cận đều đạt.

### THPT-G11-B03-P03 — SGK_PRACTICE · G11-B03-PERIOD · CORE_APPLY

**Đề:** Tìm chu kỳ cơ bản của f(x)=3cos(4x-π/3).

**Đáp án:** π/2.

**Lời giải:** Hàm cos theo đối số có chu kỳ 2π; 4T=2π nên T=π/2.

### THPT-G11-B03-P04 — SGK_PRACTICE · G11-B03-SIN_GRAPH · CORE_APPLY

**Đề:** y=sinx đồng biến trên đoạn nào: [-π/2,π/2] hay [0,π]?

**Đáp án:** [-π/2,π/2].

**Lời giải:** sin tăng trên [-π/2,π/2]; trên [0,π] tăng rồi giảm.

### THPT-G11-B03-P05 — SGK_PRACTICE · G11-B03-COS_GRAPH · CORE_APPLY

**Đề:** Trên [0,2π], nghiệm cos x=0 gồm những hoành độ nào?

**Đáp án:** π/2 và 3π/2.

**Lời giải:** Đồ thị cos cắt trục Ox tại π/2+kπ; chỉ giữ k=0,1.

### THPT-G11-B03-P06 — SGK_PRACTICE · G11-B03-TAN_GRAPH · CORE_APPLY

**Đề:** Nêu hai tiệm cận đứng của y=tanx kề trục tung.

**Đáp án:** x=-π/2 và x=π/2.

**Lời giải:** Tại cosx=0, tan không xác định và giá trị một phía không bị chặn.

### THPT-G11-B03-P07 — SGK_PRACTICE · G11-B03-COT_GRAPH · CORE_APPLY

**Đề:** Trên (0,π), y=cot x đồng biến hay nghịch biến?

**Đáp án:** Nghịch biến.

**Lời giải:** Trên (0,π), đồ thị cot đi liên tục từ +∞ xuống -∞; tương tự trên (kπ,(k+1)π). Không cần dùng đạo hàm (học ở chương sau).

### THPT-G11-B03-P08 — SGK_PRACTICE · G11-B03-MODELING · APPLICATION

**Đề:** T(t)=24+3cos(πt/6) (°C, t giờ). Chu kỳ, cao nhất và thấp nhất?

**Đáp án:** T=12 giờ; max 27°C; min 21°C.

**Lời giải:** ω=π/6 nên T=2π/(π/6)=12; vì cos∈[-1,1], T(t)∈[21,27].

### THPT-G11-B04-C01 — SGK_CORE · G11-B04-SIN_EQ · BASIC

**Đề:** Giải sin x=-1/2 trên ℝ.

**Đáp án:** x=-π/6+2kπ hoặc x=7π/6+2kπ, k∈ℤ.

**Lời giải:** sin(-π/6)=-1/2, sin(7π/6)=-1/2; đó là hai nhánh trong một vòng.

### THPT-G11-B04-C02 — SGK_CORE · G11-B04-COS_EQ · BASIC

**Đề:** Giải cos x=1/2 trên ℝ.

**Đáp án:** x=±π/3+2kπ, k∈ℤ.

**Lời giải:** cos(±π/3)=1/2, chu kỳ 2π.

### THPT-G11-B04-C03 — SGK_CORE · G11-B04-TAN_EQ · BASIC

**Đề:** Giải tan x=-1 trên ℝ.

**Đáp án:** x=-π/4+kπ, k∈ℤ.

**Lời giải:** tan(-π/4)=-1; tan có chu kỳ π, mọi nghiệm hợp lệ.

### THPT-G11-B04-C04 — SGK_CORE · G11-B04-COT_EQ · BASIC

**Đề:** Giải cot x=1 trên ℝ.

**Đáp án:** x=π/4+kπ, k∈ℤ.

**Lời giải:** cot(π/4)=1; chu kỳ π và sin khác 0 tại các nghiệm.

### THPT-G11-B04-P01 — SGK_PRACTICE · G11-B04-TRANSFORM · CORE_APPLY

**Đề:** Giải sin(2x)=1/2 trên ℝ.

**Đáp án:** x=π/12+kπ hoặc x=5π/12+kπ, k∈ℤ.

**Lời giải:** Đặt t=2x: t=π/6+2kπ hoặc 5π/6+2kπ. Chia cả hai họ cho 2.

### THPT-G11-B04-P02 — SGK_PRACTICE · G11-B04-TRANSFORM · CORE_APPLY

**Đề:** Giải 2cos(x-π/6)=√3 trên ℝ.

**Đáp án:** x=2kπ hoặc x=π/3+2kπ, k∈ℤ.

**Lời giải:** cos(x-π/6)=√3/2 nên x-π/6=±π/6+2kπ.

### THPT-G11-B04-P03 — SGK_PRACTICE · G11-B04-TRANSFORM · CORE_APPLY

**Đề:** Giải tan(3x)=√3 trên ℝ.

**Đáp án:** x=π/9+kπ/3, k∈ℤ.

**Lời giải:** 3x=π/3+kπ, sau đó chia 3.

### THPT-G11-B04-P04 — SGK_PRACTICE · G11-B04-TRANSFORM · APPLICATION

**Đề:** Giải cos(2x)=cosx trên ℝ.

**Đáp án:** x=2kπ/3, k∈ℤ.

**Lời giải:** 2cos²x-cosx-1=(2cosx+1)(cosx-1)=0; x=2kπ hoặc ±2π/3+2kπ; hợp hai tập bằng 2kπ/3.


### THPT-G11-B04-P05 — SGK_PRACTICE · G11-B04-TRANSFORM · APPLICATION

**Đề:** Giải sinx=sin(3x) trên ℝ.

**Đáp án:** x=kπ hoặc x=π/4+kπ/2, k∈ℤ.

**Lời giải:** sin A=sin B khi A=B+2kπ hoặc A=π-B+2kπ. Nhánh x=3x+2kπ cho x=-kπ, tức mọi kπ. Nhánh x=π-3x+2kπ cho 4x=π+2kπ, tức x=π/4+kπ/2. Không chia hai vế cho sinx.

### THPT-G11-B04-P06 — SGK_PRACTICE · G11-B04-INTERVAL · CORE_APPLY

**Đề:** Giải sinx=1/2 trên [0,2π).

**Đáp án:** {π/6,5π/6}.

**Lời giải:** Nghiệm tổng quát π/6+2kπ hoặc 5π/6+2kπ; chỉ k=0 cho nghiệm thuộc khoảng yêu cầu, 2π bị loại.

### THPT-G11-B04-P07 — SGK_PRACTICE · G11-B04-INTERVAL · CORE_APPLY

**Đề:** Giải cos(2x)=0 trên [0,π].

**Đáp án:** {π/4,3π/4}.

**Lời giải:** 2x=π/2+kπ, nên x=π/4+kπ/2; k=0,1 thỏa đoạn đóng [0,π].

### THPT-G11-B04-P08 — SGK_PRACTICE · G11-B04-EXTRANEOUS · APPLICATION

**Đề:** Giải tanx=tan(2x) trên ℝ, ghi rõ TXĐ.

**Đáp án:** x=kπ, k∈ℤ.

**Lời giải:** Phải có cosx≠0 và cos2x≠0. Khi đó tanA=tanB ⇔ A=B+kπ; x=2x+kπ ⇔ x=-kπ. Các x=kπ đều thuộc TXĐ và thế lại hai vế cùng bằng 0.

### THPT-G11-B04-P09 — SGK_PRACTICE · G11-B04-APPLICATION · APPLICATION

**Đề:** Mực nước H(t)=10+2sin(πt/6), với 0≤t<12 (giờ), bằng 11 lúc mấy giờ?

**Đáp án:** t=1 và t=5 (giờ).

**Lời giải:** sin(πt/6)=1/2; đối số trong [0,2π). Hai nghiệm πt/6=π/6 hoặc 5π/6, nên t=1 hoặc 5.

### THPT-G11-B04-P10 — SGK_PRACTICE · G11-B04-SIN_EQ · CORE_APPLY

**Đề:** Với m∈ℝ, điều kiện nào để sinx=m có nghiệm thực?

**Đáp án:** -1≤m≤1.

**Lời giải:** Giá trị sinx thuộc [-1,1] nên điều kiện cần |m|≤1; ngược lại mọi m trong đoạn đều đạt được trên đường tròn lượng giác.

## D4 — 4 Written/Anchor candidates dùng chung trong Thư viện (NEW, NOT REVIEWED)

### THPT-G11-CHI-W03 — WRITTEN · G11-B03-MODELING · Rubric /7

**Đề:** Với y=2sin(3x+π/6)-1, xác định chu kỳ cơ bản, tập giá trị, mọi điểm đạt cực đại và cực tiểu trên ℝ.

**Đáp án/lời giải:** Biên độ 2, đường trung bình -1. Chu kỳ T=2π/3, giá trị từ -3 đến 1. Cực đại y=1 khi 3x+π/6=π/2+2kπ, tức x=π/9+2kπ/3; cực tiểu y=-3 khi 3x+π/6=3π/2+2kπ, tức x=4π/9+2kπ/3; k∈ℤ.

**Rubric /7:** đúng chu kỳ (1đ); biên độ/đường trung bình (1đ); tập giá trị (1đ); đặt phương trình cho cực đại (1đ); nghiệm cực đại đủ họ (1đ); đặt phương trình cực tiểu (1đ); nghiệm cực tiểu đủ họ (1đ).

### THPT-G11-CHI-W04-ANCHOR — WRITTEN/ANCHOR · G11-B04-TRANSFORM · Rubric /7

**Đề:** Giải cos(2x)=sin x trên đoạn [0,2π) bằng công thức cos(2x) và kiểm tra tất cả nghiệm.

**Đáp án/lời giải:** Đặt s=sin x. 1-2s²=s ⇔ 2s²+s-1=0 ⇔ s=1/2 hoặc s=-1. Với s=1/2 được x=π/6,5π/6; với s=-1 được x=3π/2, tất cả trong [0,2π) và đều thỏa phương trình ban đầu.

**Rubric /7:** biến đổi cos2x đúng (1đ), lập phương trình theo s (1đ), phân tích & tìm s=1/2 (1đ), tìm s=-1 (1đ), hai nghiệm sinx=1/2 trên đoạn (1đ), nghiệm sinx=-1 (1đ), thử lại & kết luận tập ba nghiệm (1đ). Anchor chỉ là nhãn của Written này, không tạo ngân hàng Anchor riêng.

## D5 — Đồ thị, hình minh họa canonical

- `FIG-G11-B03-01`: đồ thị y=sinx, các mốc -π/2,0,π/2,π,3π/2,2π; đường liên tục, TGT [-1,1].
- `FIG-G11-B03-02`: y=cosx, các mốc 0,π/2,π,3π/2,2π; đồ thị liên tục, TGT [-1,1].
- `FIG-G11-B03-03`: y=tanx với hai tiệm cận x=±π/2, các nhánh **tách nhau**, tăng trên mỗi khoảng.
- `FIG-G11-B03-04`: y=cotx với hai tiệm cận x=0,π, mỗi nhánh giảm.
- B04 áp dụng cùng đồ thị đường tròn lượng giác SGK B01 đã được review và đồ thị B03 cho kiểm tra số họ nghiệm. Các SVG mới **chỉ dùng như nguồn ứng viên**, phải QA font/trục/mốc/a11y cả desktop/mobile, không dùng như chứng cứ Academic PASS trước NotebookLM.
- **Text fallback bắt buộc:** ngay cả khi hình không tải, phần D1 và mô tả trên đã ghi rõ toàn bộ điểm mốc, miền, tính đơn điệu, giá trị và tiệm cận.

## D6 — 4 thẻ hỗ trợ khắc phục (NEW, NOT REVIEWED)

### HELP-G11-B03-01 · G11-B03-DOMAIN_RANGE · trở về B03-C01/P01
1. Nhận diện lỗi: cố tính tan ở nơi cos=0 hoặc cot nơi sin=0.
2. Kiểm tra đầu vào: xác định đối số u(x) của tan/cot.
3. Sửa nguyên tắc: tan u cần cosu≠0; cot u cần sinu≠0.
4. Tự giải ví dụ nhỏ: tan(2x) loại x=π/4+kπ/2; cot(2x) loại x=kπ/2.
5. Học lại: làm lại câu Core xác định miền, rồi Practice với hệ số trong đối số.

### HELP-G11-B03-02 · G11-B03-PERIOD · trở về B03-C03/P03
1. Nhận diện lỗi: nhân chu kỳ với hệ số của x.
2. Gợi nhớ: sin/cos có chu kỳ 2π theo đối số, tan/cot có chu kỳ π.
3. Sửa: đặt ωT bằng chu kỳ đối số, T=2π/|ω| hoặc π/|ω|, ω≠0.
4. Thử ngay: cos(4x-π/3) có T=π/2.
5. Trở về luyện tập: B03-P03, phân biệt chu kỳ cơ bản và chu kỳ bất kỳ.

### HELP-G11-B04-01 · G11-B04-SIN_EQ · trở về B04-C01/P01
1. Nhận diện lỗi: bỏ họ nghiệm thứ hai của sin hoặc bỏ k.
2. Kiểm tra |m|≤1 và lấy α=arcsin m.
3. Viết đủ hai họ x=α+2kπ và x=π-α+2kπ.
4. Với sin(2x)=1/2, chia đúng cả hai họ cho 2.
5. Trở về B04-C01 và P01; đối chiếu một vòng trên đường tròn.

### HELP-G11-B04-02 · G11-B04-INTERVAL · trở về B04-C02/W04
1. Nhận diện lỗi: đếm hai lần điểm biên hoặc quên loại nghiệm ngoài miền.
2. Viết họ nghiệm tổng quát, ghi k∈ℤ.
3. Giải bất đẳng thức trên k theo cận [a,b] hoặc [a,b).
4. Với cosx=-1/2 trên [0,2π), chỉ có 2π/3 và 4π/3.
5. Trở về bài tự luận kiểm tra nghiệm bằng thế vào phương trình ban đầu.

## A1–A7 nguồn học liệu, ranh giới bảo vệ

- 26 item public B03–B04 = 8 Core + 18 Practice, và 2 Written; cùng 16 formative +2 Written B01–B02 đã được PASS trước đó, thành **46 public candidates toàn Chương I** (B01/02=18; B03/04=28).
- Tất cả 28 mục B03/B04 **chưa NotebookLM PASS**; 16+2 cũ B01/B02 giữ nguyên bản R01 đã duyệt. Core/Practice placement dùng một canonical ID; Written/Anchor có một rubric chung.
- RD0/RD1 kín cuối chương phải độc lập và **không lộ đáp án/gợi ý trước Final Submit**. Trước khi được release xác minh, không ghi điểm chính thức hay Mastery.
- Không thêm menu Chuyên đề, không sửa UI Golden, Firebase, THCS hoặc learner localStorage. Gói review mới sẽ gồm **toàn bộ Chương I**, không các delta lẻ.
