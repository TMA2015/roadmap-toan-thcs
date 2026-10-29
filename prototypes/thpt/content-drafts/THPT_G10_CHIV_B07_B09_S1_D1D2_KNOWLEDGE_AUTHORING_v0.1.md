# Temp — SGK Toán 10 KNTT Tập 1 · Chương IV Vectơ · Bài 7–9 · Kiến thức D1 / Ví dụ D2 · R0

**PACKET_ID:** `THPT-G10-CHIV-B07_B09-S1-D1D2-20261029-R0`  
**ACADEMIC_STATUS:** `AUTHORING_CANDIDATE_NOT_REVIEWED` · Không phải verdict PASS.  
**Bộ nguồn NotebookLM:** đúng `01–05_THPT_PERMANENT_v2.0_ONLY`, SGK Toán 10 KNTT Tập 1 và SBT Toán 10 KNTT Tập 1 gốc.  
**Bối cảnh:** Theo kế hoạch ưu tiên lớp 10; ba bài đầu của Chương IV (B07–B09), cụm B10–B11 sẽ review riêng. Nội dung được viết đầy đủ cho hành trình SGK độc lập, không đòi học sinh mở Chuyên đề.

**Đối chiếu nguồn:** Mục lục và trang **tham khảo S2**, không phải SOURCE_RECEIPT S1: B07 SGK tr.46–50; B08 tr.51–54; B09 tr.55–59. **Chưa xác nhận** số trang SBT. NotebookLM phải trả trang SGK/SBT in thực tế, phạm vi Core và bài tập trong sách gốc. Không khẳng định nguồn ngoài SGK làm thay đổi yêu cầu Core.

## A. Danh mục outcome dự kiến — 12 mã ứng viên

| ID đề xuất | Kiến thức / năng lực cần chứng minh | Trang bài |
|---|---|---|
| `G10-B07-VECTOR_ORIENTED_SEGMENT` | Nhận biết vectơ, điểm đầu/cuối, độ dài, vectơ-không | B07 |
| `G10-B07-PARALLEL_AND_SAME_DIRECTION` | Phân biệt cùng phương, cùng hướng, ngược hướng cho vectơ khác không | B07 |
| `G10-B07-VECTOR_EQUALITY` | Hai vectơ bằng nhau, đặt tại các điểm khác nhau | B07 |
| `G10-B07-VECTOR_PHYSICAL_QUANTITY` | Giải thích đại lượng cần cả độ lớn và hướng, thí dụ vận tốc/lực | B07 |
| `G10-B08-TRIANGLE_PARALLELOGRAM_ADDITION` | Dựng, cộng vectơ, quy tắc ba điểm và hình bình hành | B08 |
| `G10-B08-SUBTRACTION_AND_OPPOSITE` | Vectơ đối, hiệu và quy tắc trừ hai vectơ chung gốc | B08 |
| `G10-B08-MIDPOINT_CENTROID_IDENTITIES` | Diễn tả trung điểm và trọng tâm bằng tổng vectơ | B08 |
| `G10-B08-RESULTANT_APPLICATION` | Mô hình hóa hợp lực/vận tốc bằng phép cộng vectơ | B08 |
| `G10-B09-SCALAR_DIRECTION_LENGTH` | Tích vectơ với số: dấu, hướng, độ dài và trường hợp 0 | B09 |
| `G10-B09-SCALAR_DISTRIBUTIVE_RULES` | Tính chất phân phối và kết hợp với số | B09 |
| `G10-B09-COLLINEAR_AND_DECOMPOSITION` | Hai vectơ cùng phương ↔ tỉ lệ (với vectơ khác 0), phân tích theo hai vectơ không cùng phương | B09 |
| `G10-B09-RATIO_GEOMETRY` | Trung điểm, điểm chia đoạn và biểu thức vectơ theo tỉ số | B09 |

**Điểm kiểm tra reviewer:** các ID trên chưa phải canonical outcomes được S1 duyệt; reviewer cần đề nghị tách/gộp/đổi mã nếu cần. Vui lòng xác nhận quy tắc ID canonical trước khi tích hợp ngân hàng chính thức; không nhân bản outcome dưới tên khác.

## B. Bài 7 — Các khái niệm mở đầu

### KT-B07-01 · Vectơ và độ dài (D1)

Vectơ là **đoạn thẳng có hướng**: ta chọn rõ điểm đầu và điểm cuối. Kí hiệu \(\overrightarrow{AB}\) chỉ vectơ có điểm đầu \(A\), điểm cuối \(B\). Độ dài \(|\overrightarrow{AB}|=AB\geq 0\), không mang dấu âm. Đảo điểm đầu/cuối đổi hướng dù độ dài không đổi; khi \(A\ne B\), \(\overrightarrow{AB}\) và \(\overrightarrow{BA}\) không bằng nhau. Khi hai đầu mút trùng nhau, \(\overrightarrow{AA}=\vec 0\), \(|\vec 0|=0\). Vectơ-không được quy ước cùng phương, cùng hướng với mọi vectơ; không dùng nó để xác định một đường thẳng giá duy nhất.

**Bản chất:** đoạn thẳng thông thường chỉ có chiều dài; vectơ còn có chiều. Ví dụ di chuyển 2 km về Đông khác di chuyển 2 km về Tây dù độ dài bằng nhau.

### KT-B07-02 · Cùng phương, cùng hướng, ngược hướng (D1)

Với hai vectơ **khác \(\vec 0\)**, giá của chúng là đường thẳng qua hai đầu mút. Chúng **cùng phương** nếu hai giá song song hoặc trùng nhau. Cùng phương có thể **cùng hướng** hoặc **ngược hướng**. Hai vectơ không cùng phương thì không thể gọi là ngược hướng. Nếu \(A,B,C\) phân biệt, thẳng hàng theo thứ tự \(A-B-C\), \(\overrightarrow{AB}\) và \(\overrightarrow{AC}\) cùng hướng; \(\overrightarrow{BA}\) và \(\overrightarrow{AC}\) ngược hướng. Vectơ-không xử lí theo quy ước, không dựa vào suy đoán chiều từ một hình mũi tên dài 0.

### KT-B07-03 · Hai vectơ bằng nhau, mô hình vận tốc/lực (D1)

Hai vectơ bằng nhau khi **cùng hướng và cùng độ dài**, không bắt buộc trùng vị trí điểm đặt trên hình. Trong hình bình hành \(ABCD\) theo thứ tự đỉnh, \(\overrightarrow{AB}=\overrightarrow{DC}\) và \(\overrightarrow{AD}=\overrightarrow{BC}\); không nhầm \(\overrightarrow{AB}=\overrightarrow{CD}\). Vectơ mô tả hợp lí vận tốc, lực và các đại lượng có cả hướng và độ lớn; còn khối lượng/nhiệt độ là ví dụ đại lượng vô hướng. Bài 7 chỉ cần nhận biết vectơ, chưa sử dụng công thức tọa độ hai thành phần của Bài 10.

### EX-B07-01 · Hình vuông và vectơ bằng nhau (D2)

**Đề:** Hình vuông \(ABCD\) có cạnh 4 cm, các đỉnh theo thứ tự quanh hình. Chỉ ra một vectơ bằng \(\overrightarrow{AB}\), một vectơ ngược hướng cùng độ dài với nó, và tính \(|\overrightarrow{AC}|\).

**Giải:** Vì \(ABCD\) là hình bình hành, \(\overrightarrow{DC}=\overrightarrow{AB}\) (cùng hướng, độ dài 4 cm). \(\overrightarrow{BA}\) ngược hướng \(\overrightarrow{AB}\), cùng độ dài 4 cm nên không bằng \(\overrightarrow{AB}\). Đường chéo \(AC=\sqrt{4^2+4^2}=4\sqrt2\) cm, do đó \(|\overrightarrow{AC}|=4\sqrt2\) cm. Không ghi độ dài âm khi đảo chiều.

### EX-B07-02 · Ba điểm thẳng hàng (D2)

**Đề:** \(A,B,C\) thẳng hàng theo thứ tự \(A-B-C\), \(AB=3\), \(BC=2\) (cùng đơn vị). Phân loại cặp \(\overrightarrow{AB},\overrightarrow{AC}\) và \(\overrightarrow{BA},\overrightarrow{BC}\), tính \(|\overrightarrow{AC}|\).

**Giải:** \(\overrightarrow{AB}\) và \(\overrightarrow{AC}\) cùng phương, cùng hướng (cùng đi từ A về phía C). \(\overrightarrow{BA}\) hướng về A còn \(\overrightarrow{BC}\) hướng về C nên hai vectơ ngược hướng. \(AC=AB+BC=5\); vậy \(|\overrightarrow{AC}|=5\). Cùng phương **không tự động** bằng nhau vì còn độ dài, hướng.

### EX-B07-03 · Mô tả hướng và độ lớn (D2)

**Đề:** Hai luồng gió có tốc độ 6 m/s, một hướng Đông và một hướng Tây. Có thể dùng cùng một vectơ biểu diễn cả hai không? Một thông số nhiệt độ 27°C có cần mũi tên hướng không?

**Giải:** Hai vectơ vận tốc có cùng độ dài 6 m/s, cùng phương Đông–Tây nhưng ngược hướng nên **không bằng nhau**. Nhiệt độ là đại lượng chỉ có độ lớn/giá trị số trong mô hình ở đây, không cần vectơ hướng. Thí dụ này chỉ dùng phân biệt loại đại lượng, chưa yêu cầu cộng vận tốc.

## C. Bài 8 — Tổng và hiệu của hai vectơ

### KT-B08-01 · Phép cộng, quy tắc ba điểm và hình bình hành (D1)

Đặt hai vectơ \(\vec a,\vec b\) nối tiếp đuôi–đầu; vectơ từ điểm đầu của \(\vec a\) đến điểm cuối của bản sao tịnh tiến \(\vec b\) là \(\vec a+\vec b\). Với ba điểm bất kì \(A,B,C\):
\[\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}.\]
Nếu \(ABCD\) là hình bình hành, hai vectơ xuất phát từ \(A\) cho đường chéo:
\[\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}.\]
Phép cộng giao hoán, kết hợp: \(\vec a+\vec b=\vec b+\vec a\); \((\vec a+\vec b)+\vec c=\vec a+(\vec b+\vec c)\); \(\vec a+\vec0=\vec a\). Học sinh phải nhìn thấy mũi tên **cùng hướng** khi chuyển đặt, không cộng sai \(\overrightarrow{AB}+\overrightarrow{CB}\) bằng \(\overrightarrow{AC}\).

### KT-B08-02 · Vectơ đối và phép trừ (D1)

Vectơ \(-\vec a\) có cùng độ dài nhưng ngược hướng \(\vec a\); \(\vec a+(-\vec a)=\vec0\). Vectơ-không là đối của chính nó. Hiệu \(\vec a-\vec b=\vec a+(-\vec b)\). Với gốc chung \(O\):
\[\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}.\]
Đặc biệt \(\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}\), **không phải** \(\overrightarrow{BC}\). Có thể chứng minh bằng \(\overrightarrow{AB}=\overrightarrow{AO}+\overrightarrow{OB}\) và dùng quy tắc ba điểm.

### KT-B08-03 · Trung điểm, trọng tâm và ứng dụng tổng hợp (D1)

Nếu \(I\) là trung điểm \(AB\), \(\overrightarrow{IA}+\overrightarrow{IB}=\vec0\). Với mọi \(O\):
\[\overrightarrow{OA}+\overrightarrow{OB}=2\overrightarrow{OI}.\]
Nếu \(G\) là trọng tâm \(\triangle ABC\), \(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0\); với mọi \(O\):
\[\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}=3\overrightarrow{OG}.\]
Hai lực hoặc hai vận tốc trong **cùng hệ quy chiếu/đơn vị**, phù hợp điều kiện mô hình vật lí, có thể tổng hợp bằng phép cộng vectơ. Độ lớn của hợp lực **không phải** lúc nào cũng bằng tổng độ lớn hai lực; điều đó chỉ đúng khi cùng hướng.

### EX-B08-01 · Rút gọn quy tắc ba điểm (D2)

**Đề:** Với bốn điểm \(A,B,C,D\) bất kì, rút gọn \(\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}+\overrightarrow{DA}\).

**Giải:** \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\), cộng \(\overrightarrow{CD}\) được \(\overrightarrow{AD}\), cộng \(\overrightarrow{DA}\) được \(\overrightarrow{AA}=\vec0\). Tổng là \(\vec0\), không phải số 0 vô hướng.

### EX-B08-02 · Tổng hình bình hành, trừ chung gốc (D2)

**Đề:** \(PQRS\) là hình bình hành, theo thứ tự \(P,Q,R,S\). Viết \(\overrightarrow{PR}\) theo \(\overrightarrow{PQ},\overrightarrow{PS}\), và rút gọn \(\overrightarrow{PR}-\overrightarrow{PS}\).

**Giải:** Theo quy tắc hình bình hành \(\overrightarrow{PR}=\overrightarrow{PQ}+\overrightarrow{PS}\). Suy ra \(\overrightarrow{PR}-\overrightarrow{PS}=\overrightarrow{PQ}\). Cũng có thể dùng quy tắc trừ chung gốc \(\overrightarrow{PR}-\overrightarrow{PS}=\overrightarrow{SR}\) và \(\overrightarrow{SR}=\overrightarrow{PQ}\).

### EX-B08-03 · Trung điểm và trọng tâm (D2)

**Đề:** \(I\) là trung điểm \(AB\), \(G\) là trọng tâm tam giác \(ABC\). Chứng minh \(\overrightarrow{IA}+\overrightarrow{IB}=\vec0\), và rút gọn \(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}\).

**Giải:** Hai vectơ \(\overrightarrow{IA},\overrightarrow{IB}\) cùng độ dài, ngược hướng nên tổng bằng \(\vec0\). Theo tính chất trọng tâm, \(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0\). Không hoán vị \(\overrightarrow{GA}\) thành \(\overrightarrow{AG}\) mà giữ nguyên kết luận.

### EX-B08-04 · Hai vận tốc vuông góc (D2)

**Đề:** Một vật có vectơ vận tốc 4 m/s hướng Đông và vectơ vận tốc tác động bổ sung 3 m/s hướng Bắc (cùng mô hình hệ quy chiếu). Tính độ lớn vận tốc tổng hợp và mô tả hướng.

**Giải:** Hai vectơ vuông góc, nên vectơ tổng hợp là đường chéo hình chữ nhật có cạnh 4 và 3. Độ lớn \(v=\sqrt{4^2+3^2}=5\) m/s; hướng Đông Bắc và tạo với hướng Đông một góc \(\arctan(3/4)\), xấp xỉ 36,87°. Cộng **vectơ**, không cộng hai tốc độ ra 7 m/s.

## D. Bài 9 — Tích của một vectơ với một số

### KT-B09-01 · Dấu, độ lớn, hướng của tích (D1)

Với số thực \(k\) và \(\vec a\), tích \(k\vec a\) có độ dài \(|k\vec a|=|k|\,|\vec a|\). Nếu \(k>0\), \(k\vec a\) cùng hướng \(\vec a\) (khi \(\vec a\ne\vec0\)); nếu \(k<0\) thì ngược hướng; nếu \(k=0\) hoặc \(\vec a=\vec0\) thì tích bằng \(\vec0\). Vectơ đối chính là \(-1\vec a\). Phân biệt số âm \(k\) (đảo hướng) với độ dài không âm \(|k\vec a|\).

### KT-B09-02 · Tính chất phép nhân vectơ với số (D1)

Với \(k,l\in\mathbb R\), hai vectơ \(\vec a,\vec b\):
\[
(k+l)\vec a=k\vec a+l\vec a,\qquad
k(\vec a+\vec b)=k\vec a+k\vec b,\qquad
k(l\vec a)=(kl)\vec a.
\]
Có \(1\vec a=\vec a\), \(0\vec a=\vec0\), \(k\vec0=\vec0\). Khi rút gọn biểu thức vectơ, hệ số có thể là số âm nhưng bản thân vectơ không phải số. Không thay phép cộng vectơ bằng cộng độ dài.

### KT-B09-03 · Cùng phương và phân tích theo hai vectơ (D1)

Với \(\vec a\ne\vec0\), một vectơ \(\vec b\) cùng phương với \(\vec a\) khi và chỉ khi tồn tại **một số thực** \(k\) sao cho \(\vec b=k\vec a\). \(k>0\) cùng hướng; \(k<0\) ngược hướng; \(k=0\) là vectơ-không (xét theo quy ước). Khi \(\vec a,\vec b\) **không cùng phương** trên mặt phẳng, mỗi vectơ \(\vec u\) đều có một cách biểu diễn duy nhất \(\vec u=x\vec a+y\vec b\) với \(x,y\) thực. Đây là phân tích hình học; **chưa cần** công thức tọa độ \((x;y)\) của Bài 10 trong SGK Core Bài 9.

### EX-B09-01 · Nhân với số âm và số dương (D2)

**Đề:** Cho vectơ \(\vec a\ne\vec0\) dài 3 cm, hướng Đông. Mô tả hướng, độ dài của \(-2\vec a\) và \(\tfrac12\vec a\).

**Giải:** \(|-2\vec a|=|-2|\cdot3=6\) cm và hướng Tây; \(|\frac12\vec a|=\frac12\cdot3=1.5\) cm và hướng Đông. Không có độ dài \(-6\) cm.

### EX-B09-02 · Phân phối và rút gọn (D2)

**Đề:** Với hai vectơ \(\vec a,\vec b\), rút gọn \(2(\vec a-\vec b)-3(\vec a+\vec b)+\vec a\).

**Giải:** Dùng tính phân phối:
\[2\vec a-2\vec b-3\vec a-3\vec b+\vec a=(2-3+1)\vec a+(-2-3)\vec b=-5\vec b.\]
Đây là vectơ \(-5\vec b\), không là số \(-5\).

### EX-B09-03 · Biểu thức đường trung tuyến (D2)

**Đề:** Tam giác \(ABC\), \(M\) là trung điểm \(BC\). Chứng minh \(\overrightarrow{AM}=\tfrac12(\overrightarrow{AB}+\overrightarrow{AC})\).

**Giải:** Theo quy tắc ba điểm, \(\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{BM}\). Vì \(M\) là trung điểm, \(\overrightarrow{BM}=\tfrac12\overrightarrow{BC}\); và \(\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}\). Do đó
\[\overrightarrow{AM}=\overrightarrow{AB}+\tfrac12(\overrightarrow{AC}-\overrightarrow{AB})=\tfrac12(\overrightarrow{AB}+\overrightarrow{AC}).\]

### EX-B09-04 · Điểm chia đoạn theo tỉ số (D2)

**Đề:** \(M\) nằm giữa \(A,B\), \(AM:MB=2:3\). Biểu diễn \(\overrightarrow{AM}\) và \(\overrightarrow{MB}\) qua \(\overrightarrow{AB}\).

**Giải:** \(AB=AM+MB\) và hai vectơ đều cùng hướng với \(\overrightarrow{AB}\). Theo tỉ số \(AM=\frac25 AB\), \(MB=\frac35 AB\), suy ra \(\overrightarrow{AM}=\frac25\overrightarrow{AB}\), \(\overrightarrow{MB}=\frac35\overrightarrow{AB}\). Hai hệ số cộng bằng 1, khớp \(\overrightarrow{AM}+\overrightarrow{MB}=\overrightarrow{AB}\).

## E. Tự kiểm toán D1–D2 và phần chưa làm

**Nội bộ tác giả:** 9 mô-đun Kiến thức (3 mỗi bài) và 11 ví dụ đầy đủ (3 B07 + 4 B08 + 4 B09); 12 outcome ứng viên. Dùng 3 ví dụ dạng nhận biết ở B07, 4 ví dụ B08, 4 ví dụ B09; SGK học theo bài độc lập. Các ví dụ vừa sử dụng nguyên lí vectơ/vận tốc vừa có chứng minh, không chỉ thay số. Đây là preflight nội bộ **không được ghi Academic PASS**.

**Chưa bao gồm:** D3–D4 Core/Practice/Written, bộ `SGK_CHAPTER_READINESS` riêng ở cuối **toàn Chương IV**, D5 các hình vectơ, B10–B11. Các outcome B07–B09 còn phải được soát lại với SGK/SBT gốc và quy tắc canonical; nội dung không được thay thế bằng link Chuyên đề. Không tạo câu Tự kiểm tra Chương IV chỉ từ ba bài đầu vì còn thiếu B10/B11.

**Ranh giới:** Đề/đáp án private Readiness sau này chỉ chuyển NotebookLM trong gói `Temp_` riêng, không commit công khai; không hint/Tutor/đúng-sai trước Final Submit; một canonical item/key/history dùng chung qua role-placement SGK Core / Topic Practice. Topic đúng 3 mục Kiến thức/Luyện tập/Tự kiểm tra, không Core riêng. Golden UI R4 không thay đổi.

## F. Yêu cầu thẩm định NotebookLM R0

1. Xác nhận `SOURCE_RECEIPT_G10_SGK` và `SOURCE_RECEIPT_G10_SBT` với **số trang in** và nội dung thực của B07/B08/B09. Kiểm tra môn học Core ở lớp 10, không lấy tài liệu tham khảo làm nguồn đổi phạm vi S1.
2. Kiểm tra **9/9 mô-đun D1**, **11/11 ví dụ D2** từng ID, **12 outcome ứng viên** và tính tự đủ của SGK khi chỉ học ba bài này; đánh giá kí hiệu vectơ-không, trừ chung gốc, trung điểm/trọng tâm, tổng hợp vận tốc, phân tích theo hai vectơ không cùng phương.
3. Rà soát liệu phân tích vectơ và chia đoạn ở B09 đúng Core hay chỉ Practice/Extension; đề xuất đúng mức tier. Xác nhận chuẩn ID outcome và điều kiện toán học của từng bài.
4. Trả `SOURCE_RECEIPT`, `LESSON_REGISTER=B07..B09`, `KNOWLEDGE_REGISTER=9`, `EXAMPLE_REGISTER=11`, `OUTCOME_ALIGNMENT=12`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL_G10_CHIV_B07_B09_D1D2`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
5. Không cấp PASS toàn Chương IV vì B10–B11, Core/Practice, Readiness cuối chương và D5 chưa được viết/review. Không cấp quyền merge/deploy.
