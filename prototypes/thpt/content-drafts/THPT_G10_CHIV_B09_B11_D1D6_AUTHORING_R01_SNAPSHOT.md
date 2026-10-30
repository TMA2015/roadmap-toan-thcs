# Temp · Toán 10 KNTT tập 1 · Chương IV · Bài 9–11 · D1–D6 R01

**PACKET_ID:** `THPT-G10-CHIV-B09-B11-D1D6-AUTHORING-20261030-R01`  
**AUTHORING_BASE:** `content/thpt-g10-chiv-b09-b11-s1-d1d2-authoring-20261029` · D1–D2 draft initial commit `4c4e6c3103d41ff3efcfcb0f1baf34489a1c21bc` (previous draft, not academic review).  
**STATUS:** `NEW_DELTA_C_ACADEMIC_MATERIAL / NOTEBOOKLM_NOT_REVIEWED / CONTENT_READY_NO`  
**OWNER_LANE:** `AUTHORING_ONLY`, không thay đổi website/engine/CI/learner history/Firebase/Gemini/Mastery.  
**RELEASE_SCOPE_CANDIDATE:** `PUBLIC_FORMATIVE_ONLY`, chỉ B09–B11 thuộc trục SGK, không phải toàn chương/hành trình Chuyên đề/Readiness.  
**FIVE_PERMANENT_SOURCES:** `01_THPT_MASTER_PLAN_v2.0.md`, `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`, `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`, `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`, `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`; không trộn v1.0.

## 1. SOURCE_RECEIPT — căn cứ SGK/SBT và giới hạn Core

**S1 kiểm tra trực tiếp:** SGK và SBT Toán 10 Kết nối tri thức **Tập 1**, bản PDF scan do chủ dự án cung cấp (không có lớp văn bản máy). Đã xem trực tiếp các trang **in 55–72 SGK** và **51–71 SBT** bằng bản render của từng trang và contact sheets; kiểm tra chương/bài, ví dụ, bài tập trên thực tế. Mục lục xác nhận ChIV có B07–B11, không tạo thêm chương độc lập. Nội dung dưới đây là **câu do tác giả tự viết**, không sao chép nguyên văn bài tập S1. NotebookLM phải tự đối chiếu từng outcome và kết luận phạm vi Core.

| Bài | SGK in | SBT in | Điểm kiểm toán nguồn |
|---|---|---|---|
| B09 · Tích của một vectơ với một số | 55–59 | 51–54 | $k\vec u$, dấu/độ dài, tính chất, trung điểm/trọng tâm, lực |
| B10 · Vectơ trong mặt phẳng tọa độ | 60–65 | 55–58 | Tọa độ vectơ/điểm, phép toán, độ dài, cùng phương, trung điểm/trọng tâm |
| B11 · Tích vô hướng của hai vectơ | 66–70 | 59–65 | Góc, tích vô hướng, tọa độ, vuông góc, công lực, bài toán hình học |
| Ôn tập cuối ChIV — **ngoài phạm vi kiểm tra độc lập** | 71–72 | 66–71 | Nguồn đối chiếu độ sâu, chưa phải ngân hàng Readiness |

**Tiền đề dùng chung:** B07–B08 đã có hồ sơ review độc lập khác; packet R01 này chỉ tạo item ID mới, không nhân bản câu hỏi B07–B08. SBT KNTT đã quy ước vectơ-không cùng phương/cùng hướng với mọi vectơ; không nhầm quy ước đó với việc góc hai vectơ khác không trong B11 chỉ định nghĩa khi cả hai khác 0.

## 2. OUTCOME_MATRIX — 14 outcome ứng viên cần review riêng

| LESSON_ID | OUTCOME_ID / skill_id dự kiến | Năng lực | Chứng cứ S1 | D2–D4 chứng cứ |
|---|---|---|---|---|
| B09 | `G10-B09-SCALAR_DEFINITION` | Định nghĩa nhân vectơ với số thực, k=0, vectơ-không | SGK 55–56; SBT 51–52 | EX-G10-B09-01, B09-C02 |
| B09 | `G10-B09-LENGTH_DIRECTION` | Độ dài, dấu k và cùng/ngược hướng | SGK 55–56; SBT 51–52 | EX-G10-B09-01, B09-C01, B09-P01/P05 |
| B09 | `G10-B09-DISTRIBUTION` | Tính chất phân phối, kết hợp, nhân số | SGK 56–57; SBT 51 | B09-P02 |
| B09 | `G10-B09-COLLINEAR` | Quan hệ cùng phương và bội vô hướng khi khác không | SGK 56–58; SBT 52 | B09-P05 |
| B09 | `G10-B09-MIDPOINT_CENTROID` | Biểu thị vectơ với trung điểm, trọng tâm | SGK 57–59; SBT 52–54 | EX-G10-B09-02/03, B09-P03/P04, W09 |
| B10 | `G10-B10-VECTOR_COORDS` | Tọa độ vectơ theo điểm đầu và điểm cuối | SGK 60–61; SBT 55–56 | EX-G10-B10-01, B10-C01/P02 |
| B10 | `G10-B10-OPERATIONS` | Phép cộng, trừ, nhân số bằng tọa độ | SGK 61; SBT 56 | EX-G10-B10-02, B10-P01 |
| B10 | `G10-B10-NORM_DISTANCE` | Độ dài vectơ, khoảng cách hai điểm | SGK 62–63; SBT 56–57 | EX-G10-B10-01, B10-C02/P06 |
| B10 | `G10-B10-COLLINEAR_COORDS` | Hai vectơ cùng phương, điều kiện khác không | SGK 62–63; SBT 56–58 | B10-P05 |
| B10 | `G10-B10-MIDPOINT_CENTROID` | Trung điểm, trọng tâm trong Oxy | SGK 63–64; SBT 56–58 | EX-G10-B10-03, B10-P03/P04, W10 |
| B11 | `G10-B11-GEOMETRIC_DOT` | Góc hai vectơ khác không và định nghĩa tích vô hướng | SGK 66–67; SBT 59–60 | EX-G10-B11-01, B11-P01 |
| B11 | `G10-B11-COORDINATE_DOT` | Công thức tọa độ tích vô hướng và tính chất | SGK 68–69; SBT 60–61 | B11-C01/P02/P03/P04 |
| B11 | `G10-B11-PERPENDICULAR` | Vuông góc khi hai vectơ khác không có tích vô hướng 0 | SGK 67–69; SBT 60–61 | EX-G10-B11-02/03, B11-C02/P06 |
| B11 | `G10-B11-APPLICATION` | Hình học tọa độ và công của lực | SGK 67, 69–70; SBT 62–65 | B11-P05/P06, W11 |

**Số ID:** 14 outcome ứng viên (5 B09, 5 B10, 4 B11). Chúng không phải 14 ID của 14 câu hỏi; `item_id` dưới đây khác và duy nhất. `skill_id` đề xuất dùng chung nhiều placement, cần đối soát với skill registry toàn repo trước tích hợp. Không tạo “Core” riêng ở Chuyên đề.

## 3. D1 — kiến thức SGK theo 3 bài (định nghĩa, điều kiện, công thức, sai lầm)

### Bài 9 · Tích của một vectơ với một số

**D1.1 Định nghĩa và trường hợp đặc biệt.** Cho $k\in\mathbb R$ và vectơ $\vec u$. Vectơ $k\vec u$ có độ dài $|k\vec u|=|k|\,|\vec u|$. Nếu $\vec u\ne\vec0$, với $k>0$ thì $k\vec u$ cùng hướng $\vec u$; với $k<0$ thì ngược hướng. Nếu $k=0$ hoặc $\vec u=\vec0$ thì $k\vec u=\vec0$. Với vectơ-không, SGK/SBT KNTT có quy ước riêng về phương/hướng; không suy ra vectơ-không có một mũi tên vật lí khác 0.

**D1.2 Tính chất.** $k(\vec u+\vec v)=k\vec u+k\vec v$, $(k+m)\vec u=k\vec u+m\vec u$, $k(m\vec u)=(km)\vec u$, $1\vec u=\vec u$, $(-1)\vec u=-\vec u$. Nếu $\vec u$ và $\vec v$ **đều khác không**, chúng cùng phương khi và chỉ khi tồn tại $t\ne0$ sao cho $\vec v=t\vec u$. Trường hợp vectơ không phải kiểm riêng theo quy ước, không chia cho độ dài 0.

**D1.3 Trung điểm và trọng tâm.** Nếu $M$ là trung điểm $AB$ thì $\overrightarrow{AM}=\tfrac12\overrightarrow{AB}$; ngược lại, đẳng thức này xác định trung điểm. Nếu $G$ là trọng tâm tam giác $ABC$, $M$ là trung điểm $BC$ thì
\[
\overrightarrow{AG}=\tfrac23\overrightarrow{AM}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC}),
\quad \overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0.
\]
Đây là liên hệ vận dụng từ Bài 8 (cộng vectơ) sang nhân với một số, không tạo item trùng với Bài 8.

**D1.4 Ứng dụng.** Khi các vectơ biểu diễn dịch chuyển hay lực, $k$ thay đổi độ lớn và có thể đổi chiều. Không ghi độ dài âm hoặc cộng độ dài thay cho tổng vectơ khi các hướng khác nhau.

### Bài 10 · Vectơ trong mặt phẳng tọa độ

**D1.1 Hệ tọa độ và vectơ.** Trong hệ tọa độ vuông góc $Oxy$ với hai vectơ đơn vị $\vec i=(1;0)$ và $\vec j=(0;1)$, vectơ $\vec u=(u_x;u_y)=u_x\vec i+u_y\vec j$. Nếu $A(x_A;y_A)$, $B(x_B;y_B)$, thì
\[\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A).\]
Tọa độ vectơ $\overrightarrow{AB}$ **không phải** tọa độ điểm $B$ trừ khi $A=O$.

**D1.2 Các phép toán tọa độ.** Với $\vec u=(a;b)$, $\vec v=(c;d)$, $t\in\mathbb R$:
\[\vec u+\vec v=(a+c;b+d),\quad \vec u-\vec v=(a-c;b-d),\quad t\vec u=(ta;tb).\]
$|\vec u|=\sqrt{a^2+b^2}$, $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$. Hai vectơ **khác không** cùng phương khi $ad-bc=0$; với vectơ không cần nêu quy ước KNTT riêng.

**D1.3 Tọa độ trung điểm, trọng tâm.** $M$ là trung điểm $AB$ khi
\[M\left(\frac{x_A+x_B}{2};\frac{y_A+y_B}{2}\right).\]
Trọng tâm tam giác $ABC$ là
\[G\left(\frac{x_A+x_B+x_C}{3};\frac{y_A+y_B+y_C}{3}\right).\]
Chỉ dùng công thức trọng tâm khi $ABC$ là tam giác không suy biến. Kiểm tra lại bằng $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.

**D1.4 Ứng dụng.** Định vị/chuyển động trong bản đồ Oxy phải xác định trục, đơn vị và phân biệt độ dài đường đi thực tế với khoảng cách thẳng giữa hai vị trí.

### Bài 11 · Tích vô hướng của hai vectơ

**D1.1 Góc hai vectơ.** Với $\vec u,\vec v\ne\vec0$, góc $\theta$ giữa chúng thuộc $[0^\circ,180^\circ]$. Khi $\theta$ nhọn, cos dương; khi vuông, cos bằng 0; khi tù, cos âm. **Không định nghĩa góc thông thường giữa một vectơ-không và vectơ khác không.**

**D1.2 Tích vô hướng.** Với $\vec u,\vec v\ne\vec0$:
\[\vec u\cdot\vec v=|\vec u|\,|\vec v|\cos\theta.\]
Khi một vectơ bằng $\vec0$, tích vô hướng **bằng 0 theo quy ước**, không đòi xác định $\theta$. Tính chất: $\vec u\cdot\vec v=\vec v\cdot\vec u$, $(\vec u+\vec v)\cdot\vec w=\vec u\cdot\vec w+\vec v\cdot\vec w$, $(t\vec u)\cdot\vec v=t(\vec u\cdot\vec v)$; $\vec u\cdot\vec u=|\vec u|^2$. Hệ thức $|\vec u\pm\vec v|^2=|\vec u|^2+|\vec v|^2\pm2\vec u\cdot\vec v$ là hệ quả của phân phối.

**D1.3 Biểu thức tọa độ và vuông góc.** Với $\vec u=(a;b)$, $\vec v=(c;d)$, $\vec u\cdot\vec v=ac+bd$. Nếu **cả hai khác không**, $\vec u\perp\vec v\iff\vec u\cdot\vec v=0$. Khi tích khác 0, có thể tính $\cos\theta=(ac+bd)/(\sqrt{a^2+b^2}\sqrt{c^2+d^2})$; không áp dụng phép chia nếu một độ dài bằng 0.

**D1.4 Ứng dụng công của lực.** Nếu lực $\vec F$ (newton) không đổi tác dụng trên độ dời $\vec s$ (mét), công $W=\vec F\cdot\vec s=|\vec F||\vec s|\cos\theta$ (joule). Dấu của công phản ánh lực thuận/ngược độ dời; không nhầm công vô hướng với độ lớn của lực.

## 4. D2 — 9 ví dụ giải mẫu có lời giải hoàn chỉnh

### `EX-G10-B09-01` · B09 · Độ dài và hướng của tích với hệ số âm
**Đề:** Cho $|\vec u|=5$ cm, $\vec u\ne\vec0$, đặt $\vec v=-3\vec u$.  
**Giải:** Ta có $|\vec v|=|-3|\cdot5=15$ cm và $\vec v$ ngược hướng $\vec u$ vì hệ số âm.  
**Điểm tự kiểm:** Không viết “độ dài = −15 cm”.

### `EX-G10-B09-02` · B09 · Trung điểm và vectơ đối
**Đề:** Cho $AB=12$ cm và $M$ là trung điểm $AB$. Biểu thị $\overrightarrow{AM},\overrightarrow{MB},\overrightarrow{MA}$ qua $\overrightarrow{AB}$.  
**Giải:** $\overrightarrow{AM}=\tfrac12\overrightarrow{AB}$, $\overrightarrow{MB}=\tfrac12\overrightarrow{AB}$, $\overrightarrow{MA}=-\tfrac12\overrightarrow{AB}$. Mỗi độ dài bằng 6 cm.  
**Điểm tự kiểm:** Đừng đổi nhầm MA với AM.

### `EX-G10-B09-03` · B09 · Trọng tâm qua tổng vectơ
**Đề:** Gọi $G$ là trọng tâm $ABC$, $M$ là trung điểm $BC$. Hãy biểu thị $\overrightarrow{AG}$ theo $\overrightarrow{AB},\overrightarrow{AC}$.  
**Giải:** $\overrightarrow{AG}=\tfrac23\overrightarrow{AM}$ và $2\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{AC}$, suy ra $\overrightarrow{AG}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC})$.  
**Điểm tự kiểm:** AG:GM=2:1, nhưng AG:AM=2:3.

### `EX-G10-B10-01` · B10 · Tọa độ vectơ từ hai điểm
**Đề:** Cho $A(-1;2)$, $B(3;5)$. Tìm $\overrightarrow{AB}$ và $AB$.  
**Giải:** $\overrightarrow{AB}=(3-(-1);5-2)=(4;3)$, do đó $AB=\sqrt{4^2+3^2}=5$.  
**Điểm tự kiểm:** $\overrightarrow{BA}=(-4;-3)$, không phải $(4;3)$.

### `EX-G10-B10-02` · B10 · Tính tọa độ biểu thức vectơ
**Đề:** Cho $\vec u=(2;-1)$, $\vec v=(-3;4)$. Tính $2\vec u-\vec v$.  
**Giải:** $2\vec u=(4;-2)$, vậy $2\vec u-\vec v=(4-(-3);-2-4)=(7;-6)$.  
**Điểm tự kiểm:** Nhân hệ số lên cả hai thành phần.

### `EX-G10-B10-03` · B10 · Tọa độ trung điểm và trọng tâm
**Đề:** Cho $A(1;3)$, $B(5;-1)$, $C(-2;4)$. Tìm trung điểm $M$ của $AB$ và trọng tâm $G$ của tam giác.  
**Giải:** $M=(3;1)$; $G=((1+5-2)/3;(3-1+4)/3)=(4/3;2)$.  
**Điểm tự kiểm:** Trọng tâm chia cho 3, không phải 2.

### `EX-G10-B11-01` · B11 · Dấu tích vô hướng ở góc tù
**Đề:** Cho $|\vec u|=4$, $|\vec v|=3$ và góc giữa chúng là $120^\circ$. Tính $\vec u\cdot\vec v$.  
**Giải:** $\vec u\cdot\vec v=4\cdot3\cos120^\circ=12(-1/2)=-6$.  
**Điểm tự kiểm:** Góc tù có cos âm.

### `EX-G10-B11-02` · B11 · Hai vectơ vuông góc trong tọa độ
**Đề:** Cho $\vec u=(2;-1)$, $\vec v=(1;2)$. Kiểm tra vuông góc.  
**Giải:** $\vec u\cdot\vec v=2\cdot1+(-1)\cdot2=0$. Hai vectơ đều khác $\vec0$, suy ra vuông góc.  
**Điểm tự kiểm:** Phải kiểm hai vectơ khác không.

### `EX-G10-B11-03` · B11 · Tam giác vuông bằng tích vô hướng
**Đề:** Cho $A(1;1)$, $B(4;1)$, $C(1;5)$. Xác định góc A và diện tích tam giác.  
**Giải:** $\overrightarrow{AB}=(3;0)$, $\overrightarrow{AC}=(0;4)$, tích bằng 0, nên $\angle A=90^\circ$ và $S=\tfrac12\cdot3\cdot4=6$.  
**Điểm tự kiểm:** Chọn hai vectơ cùng gốc A để xét góc A.

## 5. D3 — 24 canonical formative candidate items, full stem/key/hint/solution

**Placement:** 2 `SGK_CORE` và 6 `SGK_PRACTICE` mỗi bài, **mỗi nội dung chỉ có một item_id**. `content_version=1` trên R01; không chấm Readiness, không trộn lịch sử Mastery với luyện tập. Hint/keys sau Final Submit chỉ dành cho bài luyện tập, không phải bài tự kiểm tra độc lập.

### `THPT-G10-B09-C01` — B09 | `SGK_CORE` | `G10-B09-LENGTH_DIRECTION` | `MCQ` | `BASIC` | `content_version=1`
**Câu hỏi:** Cho $\vec u\ne\vec0$, $|\vec u|=4$ cm, $\vec v=-2\vec u$. Phát biểu nào đúng?
**Lựa chọn:** A. $|\vec v|=-8$ cm; B. $|\vec v|=8$ cm và ngược hướng $\vec u$; C. $|\vec v|=2$ cm; D. $\vec v$ cùng hướng $\vec u$.
**Đáp án:** B  
**Hint chỉ dùng sau/ngoài kiểm tra:** Dùng giá trị tuyệt đối của hệ số khi tính độ dài.  
**Lời giải:** $|\vec v|=|-2|\cdot4=8$ cm. Hệ số âm và $\vec u\ne\vec0$ nên $\vec v$ ngược hướng $\vec u$.

### `THPT-G10-B09-C02` — B09 | `SGK_CORE` | `G10-B09-SCALAR_DEFINITION` | `MCQ` | `BASIC` | `content_version=1`
**Câu hỏi:** Với mọi vectơ $\vec a$, $0\vec a$ bằng gì?
**Lựa chọn:** A. $\vec a$; B. Vectơ có độ dài 1; C. $\vec0$; D. Không xác định.
**Đáp án:** C  
**Hint chỉ dùng sau/ngoài kiểm tra:** Nhân với số 0 làm độ dài còn bao nhiêu?  
**Lời giải:** Theo định nghĩa, $0\vec a=\vec0$ kể cả khi $\vec a\ne\vec0$.

### `THPT-G10-B09-P01` — B09 | `SGK_PRACTICE` | `G10-B09-LENGTH_DIRECTION` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Nếu $|\vec a|=6$ m, tính $|3\vec a|$.
**Đáp án:** 18 m  
**Hint chỉ dùng sau/ngoài kiểm tra:** Độ dài của tích $k\vec a$ bằng $|k|\,|\vec a|$.  
**Lời giải:** $|3\vec a|=3\cdot6=18$ m.

### `THPT-G10-B09-P02` — B09 | `SGK_PRACTICE` | `G10-B09-DISTRIBUTION` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Rút gọn $3(\vec a+\vec b)-2\vec a$.
**Đáp án:** $\vec a+3\vec b$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Phân phối hệ số 3 lên cả hai vectơ.  
**Lời giải:** $3\vec a+3\vec b-2\vec a=(3-2)\vec a+3\vec b=\vec a+3\vec b$.

### `THPT-G10-B09-P03` — B09 | `SGK_PRACTICE` | `G10-B09-MIDPOINT_CENTROID` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** M nằm trên đoạn AB và $AM=\frac35 AB$. Biểu thị $\overrightarrow{MA}$ qua $\overrightarrow{AB}$.
**Đáp án:** $-\frac35\overrightarrow{AB}$  
**Hint chỉ dùng sau/ngoài kiểm tra:** MA ngược hướng AM.  
**Lời giải:** $\overrightarrow{AM}=\tfrac35\overrightarrow{AB}$ và $\overrightarrow{MA}=-\overrightarrow{AM}$ nên kết quả $-\tfrac35\overrightarrow{AB}$.

### `THPT-G10-B09-P04` — B09 | `SGK_PRACTICE` | `G10-B09-MIDPOINT_CENTROID` | `MCQ` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** G là trọng tâm tam giác ABC. Công thức nào đúng?
**Lựa chọn:** A. $\overrightarrow{AG}=\overrightarrow{AB}+\overrightarrow{AC}$; B. $\overrightarrow{AG}=\frac12(\overrightarrow{AB}+\overrightarrow{AC})$; C. $\overrightarrow{AG}=\frac13(\overrightarrow{AB}+\overrightarrow{AC})$; D. $\overrightarrow{AG}=3(\overrightarrow{AB}+\overrightarrow{AC})$.
**Đáp án:** C  
**Hint chỉ dùng sau/ngoài kiểm tra:** G nằm trên trung tuyến và AG bằng 2/3 trung tuyến.  
**Lời giải:** Nếu M là trung điểm BC, $\overrightarrow{AM}=\frac12(\overrightarrow{AB}+\overrightarrow{AC})$, $\overrightarrow{AG}=\frac23\overrightarrow{AM}$, nên hệ số là 1/3.

### `THPT-G10-B09-P05` — B09 | `SGK_PRACTICE` | `G10-B09-COLLINEAR` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Hai vectơ khác không thỏa $\vec v=-\frac52\vec u$. So sánh hướng và tỉ số độ dài $|\vec v|/|\vec u|$.
**Đáp án:** Ngược hướng; tỉ số $\frac52$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Xét dấu và giá trị tuyệt đối của hệ số.  
**Lời giải:** Vì $-\frac52<0$, hai vectơ ngược hướng; $|\vec v|/|\vec u|=|-\frac52|=\frac52$. Chúng cùng phương vì có quan hệ bội vô hướng.

### `THPT-G10-B09-P06` — B09 | `SGK_PRACTICE` | `G10-B09-DISTRIBUTION` | `SHORT` | `APPLICATION` | `content_version=1`
**Câu hỏi:** Vectơ $\vec u$ biểu diễn độ dời 3 km về phía Đông. Sau hai chặng có độ dời $\vec u$ rồi $-2\vec u$, độ dời tổng là bao nhiêu và theo hướng nào?
**Đáp án:** 3 km về Tây  
**Hint chỉ dùng sau/ngoài kiểm tra:** Cộng hai vectơ trước khi tìm độ dài.  
**Lời giải:** $\vec u+(-2\vec u)=-\vec u$, nên vectơ tổng có độ dài 3 km và hướng Tây. Tổng quãng đường nếu đi đúng hai chặng là 9 km, không phải 3 km.

### `THPT-G10-B10-C01` — B10 | `SGK_CORE` | `G10-B10-VECTOR_COORDS` | `MCQ` | `BASIC` | `content_version=1`
**Câu hỏi:** Cho $A(-2;3),B(4;1)$. Tọa độ $\overrightarrow{AB}$ là?
**Lựa chọn:** A. $(2;4)$; B. $(6;-2)$; C. $(-6;2)$; D. $(4;1)$.
**Đáp án:** B  
**Hint chỉ dùng sau/ngoài kiểm tra:** Tọa độ vectơ AB = tọa độ điểm cuối trừ điểm đầu.  
**Lời giải:** Tính $(4-(-2);1-3)=(6;-2)$. Không lấy nguyên tọa độ điểm B.

### `THPT-G10-B10-C02` — B10 | `SGK_CORE` | `G10-B10-NORM_DISTANCE` | `SHORT` | `BASIC` | `content_version=1`
**Câu hỏi:** Tính độ dài vectơ $\vec u=(5;12)$.
**Đáp án:** 13  
**Hint chỉ dùng sau/ngoài kiểm tra:** Bình phương hai tọa độ rồi lấy căn.  
**Lời giải:** $|\vec u|=\sqrt{5^2+12^2}=\sqrt{169}=13$.

### `THPT-G10-B10-P01` — B10 | `SGK_PRACTICE` | `G10-B10-OPERATIONS` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $\vec u=(1;-2),\vec v=(-3;4)$. Tính $2\vec u-\vec v$.
**Đáp án:** $(5;-8)$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Làm phép toán theo từng thành phần.  
**Lời giải:** $2\vec u=(2;-4)$, trừ $(-3;4)$ được $(2+3;-4-4)=(5;-8)$.

### `THPT-G10-B10-P02` — B10 | `SGK_PRACTICE` | `G10-B10-VECTOR_COORDS` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $A(2;-1)$ và $\overrightarrow{AB}=(4;3)$. Tìm tọa độ B.
**Đáp án:** $B(6;2)$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Cộng tọa độ A với vectơ AB.  
**Lời giải:** $B=(2+4;-1+3)=(6;2)$.

### `THPT-G10-B10-P03` — B10 | `SGK_PRACTICE` | `G10-B10-MIDPOINT_CENTROID` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Tìm trung điểm M của $A(-2;5)$ và $B(4;-1)$.
**Đáp án:** $M(1;2)$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Lấy trung bình mỗi tọa độ.  
**Lời giải:** $M=((-2+4)/2;(5-1)/2)=(1;2)$.

### `THPT-G10-B10-P04` — B10 | `SGK_PRACTICE` | `G10-B10-MIDPOINT_CENTROID` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho tam giác $A(0;0),B(6;0),C(0;3)$. Tìm trọng tâm G.
**Đáp án:** $G(2;1)$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Cộng ba hoành độ, ba tung độ rồi chia 3.  
**Lời giải:** $G=((0+6+0)/3;(0+0+3)/3)=(2;1)$.

### `THPT-G10-B10-P05` — B10 | `SGK_PRACTICE` | `G10-B10-COLLINEAR_COORDS` | `MCQ` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Với $\vec u=(2;-3)$, $\vec v=(-4;6)$, chọn phát biểu đúng.
**Lựa chọn:** A. Không cùng phương; B. Cùng phương và ngược hướng; C. Cùng hướng và bằng nhau; D. Vuông góc.
**Đáp án:** B  
**Hint chỉ dùng sau/ngoài kiểm tra:** Tìm k sao cho v=ku.  
**Lời giải:** $\vec v=-2\vec u$ với $\vec u\ne\vec0$, vậy cùng phương và ngược hướng.

### `THPT-G10-B10-P06` — B10 | `SGK_PRACTICE` | `G10-B10-NORM_DISTANCE` | `SHORT` | `APPLICATION` | `content_version=1`
**Câu hỏi:** Trên bản đồ Oxy, mỗi đơn vị ứng với 1 km. Hai điểm $A(-1;2)$ và $B(5;-6)$. Tính khoảng cách thẳng AB.
**Đáp án:** 10 km  
**Hint chỉ dùng sau/ngoài kiểm tra:** Lấy hiệu tọa độ rồi dùng định lí Pitago.  
**Lời giải:** $\overrightarrow{AB}=(6;-8)$, $AB=\sqrt{6^2+(-8)^2}=10$ km. Đây là khoảng cách thẳng, chưa phải quãng đường đi trên các tuyến đường.

### `THPT-G10-B11-C01` — B11 | `SGK_CORE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `BASIC` | `content_version=1`
**Câu hỏi:** Cho $\vec u=(3;-2),\vec v=(1;4)$. Tính $\vec u\cdot\vec v$.
**Đáp án:** -5  
**Hint chỉ dùng sau/ngoài kiểm tra:** $\vec u\cdot\vec v=u_xv_x+u_yv_y$.  
**Lời giải:** $3\cdot1+(-2)\cdot4=3-8=-5$.

### `THPT-G10-B11-C02` — B11 | `SGK_CORE` | `G10-B11-PERPENDICULAR` | `MCQ` | `BASIC` | `content_version=1`
**Câu hỏi:** Chọn cặp vectơ **khác không** vuông góc.
**Lựa chọn:** A. $(1;2)$ và $(2;-1)$; B. $(1;1)$ và $(1;1)$; C. $(2;0)$ và $(1;0)$; D. $(1;-1)$ và $(2;-2)$.
**Đáp án:** A  
**Hint chỉ dùng sau/ngoài kiểm tra:** Hai vectơ khác không vuông góc nếu tích vô hướng bằng 0.  
**Lời giải:** A: $1\cdot2+2\cdot(-1)=0$. Các cặp B,C,D có tích khác 0 nên không vuông góc.

### `THPT-G10-B11-P01` — B11 | `SGK_PRACTICE` | `G10-B11-GEOMETRIC_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $|\vec u|=5$, $|\vec v|=4$ và góc giữa chúng $60^\circ$. Tính $\vec u\cdot\vec v$.
**Đáp án:** 10  
**Hint chỉ dùng sau/ngoài kiểm tra:** Nhớ $\cos60^\circ=1/2$.  
**Lời giải:** $5\cdot4\cos60^\circ=20/2=10$.

### `THPT-G10-B11-P02` — B11 | `SGK_PRACTICE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Với $\vec u=(k;2)$, $\vec v=(3;-6)$, tìm $k$ để $\vec u\perp\vec v$.
**Đáp án:** $k=4$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Giải phương trình tích vô hướng bằng 0.  
**Lời giải:** $\vec v\ne\vec0$, $\vec u$ không thể là vectơ-không vì tung độ bằng 2. $3k+2(-6)=0\implies 3k=12\implies k=4$.

### `THPT-G10-B11-P03` — B11 | `SGK_PRACTICE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $\vec u=(1;3),\vec v=(-1;1)$. Tính $\cos\theta$ với $\theta$ là góc giữa hai vectơ.
**Đáp án:** $1/\sqrt5$  
**Hint chỉ dùng sau/ngoài kiểm tra:** Cos bằng tích vô hướng chia cho tích độ dài (khác 0).  
**Lời giải:** $\vec u\cdot\vec v=-1+3=2$, $|\vec u|=\sqrt{10}$, $|\vec v|=\sqrt2$. Vậy $\cos\theta=2/\sqrt{20}=1/\sqrt5$.

### `THPT-G10-B11-P04` — B11 | `SGK_PRACTICE` | `G10-B11-COORDINATE_DOT` | `SHORT` | `CORE_APPLY` | `content_version=1`
**Câu hỏi:** Cho $A(0;0),B(4;1),C(2;3)$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$.
**Đáp án:** 11  
**Hint chỉ dùng sau/ngoài kiểm tra:** Hai vectơ cùng xuất phát từ A.  
**Lời giải:** $\overrightarrow{AB}=(4;1)$, $\overrightarrow{AC}=(2;3)$, tích bằng $4\cdot2+1\cdot3=11$.

### `THPT-G10-B11-P05` — B11 | `SGK_PRACTICE` | `G10-B11-APPLICATION` | `SHORT` | `APPLICATION` | `content_version=1`
**Câu hỏi:** Một lực không đổi $\vec F=(10;0)$ N tác dụng lên vật dịch chuyển $\vec s=(3;4)$ m. Tính công $W=\vec F\cdot\vec s$.
**Đáp án:** 30 J  
**Hint chỉ dùng sau/ngoài kiểm tra:** Tích vô hướng có đơn vị N·m = J.  
**Lời giải:** $W=10\cdot3+0\cdot4=30$ J. Không dùng $|F|\,|s|=50$ vì lực không cùng hướng với độ dời.

### `THPT-G10-B11-P06` — B11 | `SGK_PRACTICE` | `G10-B11-PERPENDICULAR` | `SHORT` | `APPLICATION` | `content_version=1`
**Câu hỏi:** Cho $A(0;0),B(3;1),C(-1;3)$. Chứng minh tam giác ABC vuông ở A và tính diện tích.
**Đáp án:** Vuông ở A; diện tích 5 (đv²)  
**Hint chỉ dùng sau/ngoài kiểm tra:** Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$ và độ dài hai cạnh.  
**Lời giải:** $\overrightarrow{AB}=(3;1),\overrightarrow{AC}=(-1;3)$, tích $-3+3=0$, hai vectơ khác không. $AB=AC=\sqrt{10}$, nên diện tích $S=\tfrac12\cdot\sqrt{10}\cdot\sqrt{10}=5$.

## 6. D4 — 3 Written canonical, Anchor chỉ là nhãn Written

**Tách biệt hệ quả đánh giá:** Written là tài nguyên tự luận chung có lời giải, rubric một bản; tự đối chiếu không ghi Skill Mastery. Một item `-ANCHOR` là nhãn kiểm tra sâu, không sinh bank hoặc item thứ hai. Ba tự luận dưới đây chưa phải nội dung Readiness giữ kín.

### `THPT-G10-CHIV-W09` · B09 | `WRITTEN` | `G10-B09-MIDPOINT_CENTROID` | `APPLICATION` | `content_version=1`
**Đề:** Cho đoạn thẳng $AB=12$ cm và điểm $M$ nằm giữa $A,B$ sao cho $AM:MB=1:2$. a) Tính $AM,MB$. b) Biểu thị $\overrightarrow{AM},\overrightarrow{BM}$ theo $\overrightarrow{AB}$. c) Chứng minh $\overrightarrow{AM}+\overrightarrow{BM}=\vec0$ là **sai**, rồi viết đúng biểu thức bằng $\vec0$ trong trường hợp $M$ ở trung điểm (không phải điểm đang cho).  
**Đáp án/kết quả cần đạt:** a) AM=4 cm, MB=8 cm. b) $\overrightarrow{AM}=\tfrac13\overrightarrow{AB}$; $\overrightarrow{BM}=-\tfrac23\overrightarrow{AB}$. c) Tổng đang xét $=-\tfrac13\overrightarrow{AB}\ne\vec0$ vì AB>0; chỉ khi M là trung điểm thì $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$.  
**Gợi ý tự học:** Tỉ số 1:2 chia AB thành 3 phần; hướng BM ngược AB.  
**Lời giải/luận chứng:** Bản chất là nhân vectơ với số và điều kiện trung điểm; không suy tổng vectơ bằng 0 khi M không là trung điểm.
**Rubric 7 điểm (chấm theo lập luận, không chỉ kết quả):**
- 2 điểm — Tính đúng $AM=4$, $MB=8$ và nêu $M$ nằm trên AB.
- 2 điểm — Lập đúng $\overrightarrow{AM}=\frac13\overrightarrow{AB}$. 
- 1 điểm — Lập đúng $\overrightarrow{BM}=-\frac23\overrightarrow{AB}$.
- 1 điểm — Chỉ ra tổng khác $\vec0$, vì $AB>0$.
- 1 điểm — Nêu đúng công thức trung điểm với hai vectơ xuất phát từ M.
**Tự kiểm:** Bài tự luận là formative public; không ghi điểm chính thức hoặc bằng chứng thành thạo khi học sinh tự chấm.

### `THPT-G10-CHIV-W10` · B10 | `WRITTEN` | `G10-B10-MIDPOINT_CENTROID` | `APPLICATION` | `content_version=1`
**Đề:** Cho tam giác $A(-2;1), B(4;5), C(1;-3)$. a) Tính $\overrightarrow{AB}$ và $AB$. b) Tìm trung điểm M của AB. c) Tìm trọng tâm G và kiểm tra bằng tổng các vectơ $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}$.  
**Đáp án/kết quả cần đạt:** a) $\overrightarrow{AB}=(6;4)$, $AB=\sqrt{52}=2\sqrt{13}$. b) $M(1;3)$. c) $G(1;1)$ và ba vectơ GA=(-3;0), GB=(3;4), GC=(0;-4) có tổng bằng (0;0).  
**Gợi ý tự học:** Dùng B−A, trung bình 2 tọa độ và trung bình 3 tọa độ.  
**Lời giải/luận chứng:** Các phép tính nhất quán giữa hình học và đại số; mỗi hạng mục kiểm bằng tọa độ.
**Rubric 7 điểm (chấm theo lập luận, không chỉ kết quả):**
- 2 điểm — Tính đúng vectơ AB=(6;4) và độ dài $2\sqrt{13}$.
- 2 điểm — Tính đúng trung điểm M(1;3) và công thức.
- 2 điểm — Tính đúng trọng tâm G(1;1).
- 1 điểm — Kiểm đúng tổng GA+GB+GC bằng vectơ không.
**Tự kiểm:** Bài tự luận là formative public; không ghi điểm chính thức hoặc bằng chứng thành thạo khi học sinh tự chấm.

### `THPT-G10-CHIV-W11-ANCHOR` · B11 | `WRITTEN_ANCHOR` | `G10-B11-APPLICATION` | `APPLICATION` | `content_version=1`
**Đề:** Một lực không đổi trên mặt phẳng có thành phần $\vec F=(8;6)$ N. Vật dịch chuyển $\vec s=(3;4)$ m. a) Tính độ lớn lực và độ dời. b) Tính công $W$. c) Tính $\cos\theta$ giữa lực và độ dời, giải thích dấu của công.  
**Đáp án/kết quả cần đạt:** a) $|F|=10$ N và $|s|=5$ m. b) $W=8\cdot3+6\cdot4=48$ J. c) $\cos\theta=48/(10\cdot5)=24/25>0$, $\theta$ nhọn nên công dương.  
**Gợi ý tự học:** Nhớ $W=F\cdot s$ là tích vô hướng, không phải lúc nào là tích hai độ lớn.  
**Lời giải/luận chứng:** Lực và độ dời đều không bằng vectơ không, nên được phép tính cos từ tích vô hướng.
**Rubric 7 điểm (chấm theo lập luận, không chỉ kết quả):**
- 2 điểm — Tính đúng $|F|=10$ N và $|s|=5$ m.
- 2 điểm — Tính công đúng 48 J, đầy đủ đơn vị.
- 2 điểm — Tính $\cos\theta=24/25$ với điều kiện độ dài khác 0.
- 1 điểm — Giải thích công dương và góc nhọn.
**Tự kiểm:** Bài tự luận là formative public; không ghi điểm chính thức hoặc bằng chứng thành thạo khi học sinh tự chấm.

## 7. D5 — 3 hình SVG nguồn thực, có tọa độ toán và mô tả accessibility

**Hướng QA:** Reviewer kiểm cả mã XML, kí hiệu, hình học/tỉ lệ và nguồn học thuật; hình ảnh raster chỉ là bản xem trước, không thay SVG gốc. Hai trục Oxy cho tọa độ có tỉ lệ như mô tả; SVG không chứa lời giải cho Tự kiểm tra độc lập.

### `FIG-G10-B09-01` — `THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg`
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1050" height="420" viewBox="0 0 1050 420" role="img" aria-labelledby="title desc">
<title id="title">Nhân một vectơ với số: cùng hướng, ngược hướng và vectơ không</title>
<desc id="desc">Từ gốc O, vectơ u nằm về bên phải độ dài 140 đơn vị hình; 2u cùng hướng dài 280; âm một phẩy năm u ngược hướng sang trái dài 210; 0u là vectơ không.</desc>
<defs><marker id="blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker><marker id="green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#0f766e"/></marker><marker id="red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#be123c"/></marker></defs>
<rect width="1050" height="420" rx="16" fill="#f8fafc"/><text x="32" y="48" font-size="26" font-family="Arial,sans-serif" font-weight="bold" fill="#0f172a">Nhân vectơ với một số thực</text>
<text x="32" y="95" font-size="20" font-family="Arial,sans-serif" fill="#334155">Cùng một vectơ gốc u; chiều đổi khi k âm, độ dài nhân |k|.</text>
<line x1="380" y1="110" x2="380" y2="352" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
<circle cx="380" cy="150" r="6" fill="#0f172a"/><circle cx="380" cy="230" r="6" fill="#0f172a"/><circle cx="380" cy="312" r="6" fill="#0f172a"/>
<line x1="380" y1="150" x2="520" y2="150" stroke="#2563eb" stroke-width="6" marker-end="url(#blue)"/>
<line x1="380" y1="230" x2="660" y2="230" stroke="#0f766e" stroke-width="6" marker-end="url(#green)"/>
<line x1="380" y1="312" x2="170" y2="312" stroke="#be123c" stroke-width="6" marker-end="url(#red)"/>
<text x="680" y="156" font-family="Arial,sans-serif" font-size="23" fill="#1e40af">u: 1 lần, sang phải</text><text x="680" y="236" font-family="Arial,sans-serif" font-size="23" fill="#0f766e">2u: dài gấp đôi</text>
<text x="680" y="319" font-family="Arial,sans-serif" font-size="23" fill="#be123c">−1,5u: ngược chiều</text>
<text x="35" y="389" font-family="Arial,sans-serif" font-size="20" fill="#334155">Nếu k = 0 hoặc u là vectơ-không thì ku là vectơ-không.</text>
</svg>
```

### `FIG-G10-B10-01` — `THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg`
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="480" viewBox="0 0 960 480" role="img" aria-labelledby="title desc">
<title id="title">Tọa độ vectơ AB là tọa độ điểm B trừ tọa độ điểm A</title><desc id="desc">Trong hệ Oxy, điểm A âm hai, một; điểm B ba, bốn. Vectơ từ A đến B có hoành độ 5 và tung độ 3. Hai nét đứt tạo bước chuyển 5 đơn vị ngang và 3 đơn vị lên.</desc>
<defs><marker id="arr" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#2563eb"/></marker><marker id="axis" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#475569"/></marker></defs>
<rect width="960" height="480" fill="#f8fafc" rx="16"/><text x="32" y="42" font-family="Arial,sans-serif" font-weight="bold" font-size="25" fill="#0f172a">Tọa độ vectơ từ hai điểm</text>
<line x1="100" y1="320" x2="650" y2="320" stroke="#475569" stroke-width="2" marker-end="url(#axis)"/><line x1="350" y1="430" x2="350" y2="60" stroke="#475569" stroke-width="2" marker-end="url(#axis)"/>
<g stroke="#cbd5e1" stroke-width="1" opacity=".65"><path d="M260 75 V430 M305 75 V430 M395 75 V430 M440 75 V430 M485 75 V430 M530 75 V430 M125 140 H650 M125 185 H650 M125 230 H650 M125 275 H650 M125 365 H650"/></g>
<text x="655" y="327" font-family="Arial,sans-serif" font-size="18">x</text><text x="359" y="60" font-family="Arial,sans-serif" font-size="18">y</text><text x="354" y="340" font-family="Arial,sans-serif" font-size="17">O</text>
<line x1="260" y1="275" x2="485" y2="275" stroke="#0f766e" stroke-width="3" stroke-dasharray="10 7"/><line x1="485" y1="275" x2="485" y2="140" stroke="#0f766e" stroke-width="3" stroke-dasharray="10 7"/>
<line x1="260" y1="275" x2="485" y2="140" stroke="#2563eb" stroke-width="6" marker-end="url(#arr)"/>
<circle cx="260" cy="275" r="6" fill="#be123c"/><circle cx="485" cy="140" r="6" fill="#be123c"/>
<text x="173" y="263" font-family="Arial,sans-serif" font-size="21" fill="#be123c">A(−2;1)</text><text x="501" y="132" font-family="Arial,sans-serif" font-size="21" fill="#be123c">B(3;4)</text>
<text x="339" y="303" font-family="Arial,sans-serif" font-size="20" fill="#0f766e">Δx = 5</text><text x="495" y="232" font-family="Arial,sans-serif" font-size="20" fill="#0f766e">Δy = 3</text>
<text x="685" y="190" font-family="Arial,sans-serif" font-size="24" fill="#0f172a">AB = B − A</text><text x="685" y="236" font-family="Arial,sans-serif" font-size="23" fill="#1d4ed8">= (5;3)</text>
<text x="685" y="286" font-family="Arial,sans-serif" font-size="18" fill="#334155">|AB| = √34</text>
<text x="45" y="454" font-family="Arial,sans-serif" font-size="19" fill="#334155">Đổi thứ tự: BA = (−5;−3). Hình thể hiện tọa độ, không phải vị trí vectơ cố định.</text>
</svg>
```

### `FIG-G10-B11-01` — `THPT_G10_B11_DOT_PRODUCT_OBTUSE_D5_R01.svg`
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="485" viewBox="0 0 1000 485" role="img" aria-labelledby="title desc">
<title id="title">Tích vô hướng âm khi góc giữa hai vectơ là 120 độ</title><desc id="desc">Hai vectơ khác không cùng xuất phát từ O, u hướng sang phải, v hướng lên trái tạo góc 120 độ; độ dài mỗi vectơ bằng 4 đơn vị. Tích vô hướng bằng 4 nhân 4 nhân cos 120 độ, bằng âm 8.</desc>
<defs><marker id="m1" markerWidth="9" markerHeight="9" refX="9" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb"/></marker><marker id="m2" markerWidth="9" markerHeight="9" refX="9" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 Z" fill="#be123c"/></marker></defs>
<rect width="1000" height="485" fill="#f8fafc" rx="18"/><text x="35" y="50" font-family="Arial,sans-serif" font-size="27" font-weight="bold" fill="#0f172a">Tích vô hướng và dấu của góc tù</text>
<line x1="95" y1="350" x2="600" y2="350" stroke="#cbd5e1" stroke-width="2"/><line x1="310" y1="390" x2="310" y2="95" stroke="#cbd5e1" stroke-width="2"/>
<line x1="310" y1="350" x2="550" y2="350" stroke="#2563eb" stroke-width="6" marker-end="url(#m1)"/>
<line x1="310" y1="350" x2="190" y2="142.15" stroke="#be123c" stroke-width="6" marker-end="url(#m2)"/>
<path d="M382 350 A72 72 0 0 0 274 287.65" fill="none" stroke="#0f766e" stroke-width="4"/><text x="315" y="278" font-family="Arial,sans-serif" font-size="21" fill="#0f766e">120°</text>
<text x="561" y="352" font-family="Arial,sans-serif" font-size="21" fill="#1d4ed8">u = (4;0)</text><text x="60" y="127" font-family="Arial,sans-serif" font-size="21" fill="#be123c">v = (−2;2√3)</text>
<text x="288" y="375" font-family="Arial,sans-serif" font-size="20">O</text><text x="620" y="176" font-family="Arial,sans-serif" font-size="22" fill="#334155">|u| = |v| = 4</text>
<text x="620" y="229" font-family="Arial,sans-serif" font-size="23" fill="#334155">u · v = 4 × 4 × cos 120°</text>
<text x="620" y="275" font-family="Arial,sans-serif" font-size="30" font-weight="bold" fill="#be123c">= −8</text>
<text x="45" y="443" font-family="Arial,sans-serif" font-size="19" fill="#334155">Cách tính tọa độ: (4;0) · (−2;2√3) = 4·(−2) + 0·(2√3) = −8.</text>
</svg>
```

## 8. D6 — 6 thẻ khắc phục lỗ hổng (HELP_ID), không tạo item_id mới

### `HELP-G10-B09-01` · B09 · Độ dài âm khi k âm hoặc nhầm quy tắc hướng
- **Điểm nghẽn:** Nhầm $|k\vec u|$ với $k|\vec u|$.
- **Bản chất cần sửa:** Phân biệt hệ số (có dấu) với độ dài (không âm).
- **Quy trình 5 bước:** 1. Viết $|k|$. 2. Tính độ dài. 3. Xét dấu k khi $\vec u\ne\vec0$. 4. Kiểm k=0 riêng. 5. Làm lại B09-C01 rồi P05.
- **Liên kết item có sẵn:** B09-C01, B09-P01, B09-P05. Không clone câu hoặc giải vào HELP_ID.
- **Assessment safety:** hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.

### `HELP-G10-B09-02` · B09 · Nhầm tỉ số trung điểm/trọng tâm với tỉ số vectơ
- **Điểm nghẽn:** Viết sai chiều MA/AM hoặc hệ số AG/AM.
- **Bản chất cần sửa:** Đọc điểm đầu-cuối; lấy đúng 2/3 trung tuyến, 1/3 tổng AB+AC.
- **Quy trình 5 bước:** 1. Vẽ ABC và M trung điểm BC. 2. Xác định chiều từng vectơ. 3. Dùng AM=(AB+AC)/2. 4. Suy AG=2AM/3. 5. Tự thử B09-P04.
- **Liên kết item có sẵn:** B09-P03, B09-P04, W09. Không clone câu hoặc giải vào HELP_ID.
- **Assessment safety:** hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.

### `HELP-G10-B10-01` · B10 · Lấy nhầm tọa độ B làm tọa độ AB
- **Điểm nghẽn:** Quên lấy tọa độ cuối trừ đầu.
- **Bản chất cần sửa:** Tọa độ AB = B−A, không phải B.
- **Quy trình 5 bước:** 1. Gạch điểm đầu A/cuối B. 2. Trừ hoành độ, tung độ. 3. Đảo chiều để tự kiểm BA=−AB. 4. Kiểm bằng độ dài. 5. Làm B10-P02.
- **Liên kết item có sẵn:** B10-C01, B10-P02. Không clone câu hoặc giải vào HELP_ID.
- **Assessment safety:** hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.

### `HELP-G10-B10-02` · B10 · Nhầm công thức trung điểm/trọng tâm và kiểm cùng phương
- **Điểm nghẽn:** Chia 2 khi có ba đỉnh hoặc bỏ điều kiện vectơ khác không.
- **Bản chất cần sửa:** Trung điểm lấy trung bình 2 điểm, trọng tâm 3 đỉnh.
- **Quy trình 5 bước:** 1. Đếm số điểm. 2. Viết công thức hoành/tung. 3. Kiểm tổng GA+GB+GC. 4. Xét vectơ không riêng. 5. Luyện B10-P04/P05.
- **Liên kết item có sẵn:** B10-P03, B10-P04, B10-P05. Không clone câu hoặc giải vào HELP_ID.
- **Assessment safety:** hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.

### `HELP-G10-B11-01` · B11 · Nhầm tích vô hướng với tích độ dài; bỏ điều kiện khác 0
- **Điểm nghẽn:** Dùng công thức cos/điều kiện vuông góc khi một vectơ không.
- **Bản chất cần sửa:** Dot là số; tọa độ dot = ac+bd; góc/cos chỉ định nghĩa khi hai độ dài dương.
- **Quy trình 5 bước:** 1. Kiểm hai vectơ khác 0. 2. Tính dot. 3. Tính độ dài. 4. Chỉ chia khi mẫu >0. 5. Luyện B11-P03.
- **Liên kết item có sẵn:** B11-C02, B11-P02, B11-P03. Không clone câu hoặc giải vào HELP_ID.
- **Assessment safety:** hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.

### `HELP-G10-B11-02` · B11 · Dấu cos góc tù hoặc sai công của lực
- **Điểm nghẽn:** Quên cos/góc hoặc đơn vị W (J).
- **Bản chất cần sửa:** Định nghĩa $W=\vec F\cdot\vec s$, đơn vị N·m; dấu W theo cos góc lực-độ dời.
- **Quy trình 5 bước:** 1. Ghi rõ góc hai vectơ. 2. Đối chiếu dấu cos. 3. Tính dot. 4. Ghi đơn vị J. 5. Tự luyện B11-P05.
- **Liên kết item có sẵn:** B11-P01, B11-P05, W11-ANCHOR. Không clone câu hoặc giải vào HELP_ID.
- **Assessment safety:** hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.

## 9. Expected ID reconciliation / S1 coverage / phát hành

| Thành phần | Expected độc nhất | Ghi chú |
|---|---:|---|
| LESSON_ID | 3 | B09, B10, B11 |
| OUTCOME_ID | 14 | 5/5/4 |
| D2 example ID | 9 | 3/bài |
| D3 formative item_id | 24 | 8/bài, 6 Core + 18 Practice |
| D4 Written item_id | 3 | W09, W10, W11-ANCHOR: Anchor không tính thêm item |
| **Canonical total item_id** | **27** | Không trùng trong packet, chưa đăng ký production |
| D5 SVG FIG_ID | 3 | B09/B10/B11, XML và hình thật |
| D6 HELP_ID | 6 | 2/bài, không tính item |

**EXPECTED_CANONICAL_ID_LIST:**
- `THPT-G10-B09-C01`
- `THPT-G10-B09-C02`
- `THPT-G10-B09-P01`
- `THPT-G10-B09-P02`
- `THPT-G10-B09-P03`
- `THPT-G10-B09-P04`
- `THPT-G10-B09-P05`
- `THPT-G10-B09-P06`
- `THPT-G10-B10-C01`
- `THPT-G10-B10-C02`
- `THPT-G10-B10-P01`
- `THPT-G10-B10-P02`
- `THPT-G10-B10-P03`
- `THPT-G10-B10-P04`
- `THPT-G10-B10-P05`
- `THPT-G10-B10-P06`
- `THPT-G10-B11-C01`
- `THPT-G10-B11-C02`
- `THPT-G10-B11-P01`
- `THPT-G10-B11-P02`
- `THPT-G10-B11-P03`
- `THPT-G10-B11-P04`
- `THPT-G10-B11-P05`
- `THPT-G10-B11-P06`
- `THPT-G10-CHIV-W09`
- `THPT-G10-CHIV-W10`
- `THPT-G10-CHIV-W11-ANCHOR`

**EXPECTED_OUTCOME_ID_LIST:** `G10-B09-SCALAR_DEFINITION`, `G10-B09-LENGTH_DIRECTION`, `G10-B09-DISTRIBUTION`, `G10-B09-COLLINEAR`, `G10-B09-MIDPOINT_CENTROID`, `G10-B10-VECTOR_COORDS`, `G10-B10-OPERATIONS`, `G10-B10-NORM_DISTANCE`, `G10-B10-COLLINEAR_COORDS`, `G10-B10-MIDPOINT_CENTROID`, `G10-B11-GEOMETRIC_DOT`, `G10-B11-COORDINATE_DOT`, `G10-B11-PERPENDICULAR`, `G10-B11-APPLICATION`
**EXPECTED_FIGURE_ID_LIST:** `FIG-G10-B09-01`, `FIG-G10-B10-01`, `FIG-G10-B11-01`
**EXPECTED_HELP_ID_LIST:** `HELP-G10-B09-01`, `HELP-G10-B09-02`, `HELP-G10-B10-01`, `HELP-G10-B10-02`, `HELP-G10-B11-01`, `HELP-G10-B11-02`

## 10. NotebookLM independent review request (v2.0 sources only)

1. Trả `SOURCE_RECEIPT`: xác nhận chính xác SGK/SBT 10 KNTT tập 1 B09 pp.55–59 / SBT pp.51–54, B10 pp.60–65 / SBT pp.55–58, B11 pp.66–70 / SBT pp.59–65 và phạm vi SGK Core; chỉ đánh dấu phần đã tự đối chiếu nguồn.
2. Kiểm toán D1–D6 **theo từng Bài và từng Outcome**; lưu ý vectơ-không, trường hợp k=0, dấu/hướng và độ dài, hệ số trung điểm/trọng tâm, công thức tọa độ, điều kiện vuông góc với vectơ khác không, dấu cos góc tù và đơn vị công (J).
3. `ITEM_REGISTER`: so sánh 27/27 expected canonical item IDs, mỗi đề/lựa chọn/đáp án/lời giải/hint/rubric và phân tầng Core/Practice/Written; kiểm sự đa dạng thực chất. Kiểm các trường hợp và tiền đề, không chỉ khớp số lượng.
4. Kiểm 9 ví dụ D2, 3 SVG thực (tọa độ/biểu diễn/văn bản accessibility) và 6 HELP_ID theo 5 bước; đối chiếu D5 hình/kí hiệu với lời giải, tránh ghi nhận hình chỉ vì XML hợp lệ.
5. Trả verdict chi tiết `LESSON_VERDICTS`, `OUTCOME_MATRIX`, `ITEM_VERDICTS`, `D1–D6_OVERALL`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA`; nếu một mục không đủ nguồn phải báo HOLD, không suy PASS.
6. Không suy rộng PASS từ B09–B11 sang B07–B08, toàn Chương IV Readiness hay TOPIC; không tự cấp quyền tích hợp, merge/deploy hoặc đánh giá Mastery. Mọi sửa toán sau R01 là `DELTA_C_ACADEMIC_MATERIAL`, cần review phần chịu ảnh hưởng.

**FINAL_STATE:** `NEW_ACADEMIC_MATERIAL_DELTA_C / ACADEMIC_REVIEW_PENDING / CONTENT_READY_NO / RELEASE_NO`.
