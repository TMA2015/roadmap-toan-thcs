# Temp · Toán 10 KNTT tập 1 · Chương IV · Bài 7–8 · D1–D6 R01

**PACKET_ID:** `THPT-G10-CHIV-B07-B08-D1D6-AUTHORING-20261029-R01`  
**STATUS:** `DELTA_C_ACADEMIC_MATERIAL / NOTEBOOKLM_NOT_REVIEWED / CONTENT_READY_NO`  
**LANE:** `AUTHORING_ONLY`; cấm release merge/deploy, không thay đổi website/engine/learner history/Firebase/Gemini/Mastery.  
**RELEASE_SCOPE_CANDIDATE:** `PUBLIC_FORMATIVE_ONLY`, chỉ **Bài 7 và Bài 8** thuộc hành trình Học theo SGK. Toàn Chương IV có 5 bài (B07–B11), không suy rộng PASS 2 bài thành toàn chương hoặc TOPIC.  
**PERMANENT_SOURCES_USED:** `01_THPT_MASTER_PLAN_v2.0.md`; `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`; `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`; `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`; `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md` (đúng 5 nguồn, không trộn v1.0).

## 1. SOURCE_RECEIPT — học liệu S1 và phạm vi

SGK Toán 10 Kết nối tri thức Tập 1, Chương IV **Vectơ**: Bài 7 *Các khái niệm mở đầu* **trang in 46–50**; Bài 8 *Tổng và hiệu của hai vectơ* **51–54**. SBT Toán 10 KNTT Tập 1: Bài 7 **trang in 45–47**; Bài 8 **48–50**. Nguồn đọc trực tiếp file PDF scan SGK/SBT gốc lưu trong thư mục KNTT TOAN 10 của chủ dự án, bao gồm bài học và bài tập trong các trang đã nêu. Không dùng sách lớp 11 để mở rộng Core. Reviewer đối chiếu từng hoạt động/dạng bài theo S1, không chỉ mục lục.

**Bài liền kề ngoài phạm vi review:** B09 SGK 55–59/SBT 51–54, B10 SGK 60–65/SBT 55–58, B11 SGK 66–70/SBT 59–65, ôn chương SGK 71–72/SBT 66–71. Không cấp Academic PASS cho các bài này trong R01.

**Chú ý quy ước S1 quan trọng:** SBT B07 trang 45 ghi rõ vectơ-không có độ dài 0 và **được quy ước cùng phương, cùng hướng với mọi vectơ**. Không thay bằng tuyên bố vectơ-không “không cùng hướng với vectơ nào”. Đây là quy ước sách và khác cách nói trực giác về mũi tên có hướng.

## 2. LESSON_ID / OUTCOME_MATRIX — 10 outcome đề xuất

| Bài | Outcome ID | Kiến thức/kĩ năng cần đạt | Nguồn S1 | Chứng cứ D2–D4 |
|---|---|---|---|---|
| B07 | `G10-B07-DEFINITION` | Kí hiệu vectơ, điểm đầu/cuối và đoạn thẳng có hướng | SGK B07 trang 47; SBT B07 trang 45 | THPT-G10-B07-C01, EX-G10-B07-01 |
| B07 | `G10-B07-LENGTH` | Độ dài vectơ, phân biệt độ dài và hướng | SGK B07 trang 47; SBT trang 45 | B07-P01, B07-P06 |
| B07 | `G10-B07-DIRECTION` | Cùng phương, cùng/ ngược hướng | SGK B07 trang 48–49; SBT trang 45–46 | B07-P05, EX-G10-B07-02 |
| B07 | `G10-B07-EQUALITY` | Bằng nhau theo cùng hướng và cùng độ dài | SGK B07 trang 48–49; SBT trang 45–46 | B07-C02, B07-P02, W07 |
| B07 | `G10-B07-ZERO` | Vectơ-không theo quy ước KNTT | SGK B07 trang 49–50; SBT trang 45 | B07-P04, EX-G10-B07-02 |
| B08 | `G10-B08-TRIANGLE` | Phép cộng và quy tắc ba điểm | SGK B08 trang 51–52; SBT B08 trang 48 | B08-C01, B08-P03 |
| B08 | `G10-B08-PARALLELOGRAM` | Quy tắc hình bình hành và hợp lực | SGK B08 trang 52–53; SBT trang 48–49 | B08-C02, B08-P06 |
| B08 | `G10-B08-OPPOSITE-SUBTRACTION` | Vectơ đối, hiệu và quy tắc trừ | SGK B08 trang 52–53; SBT trang 48–49 | B08-P01, B08-P02 |
| B08 | `G10-B08-MIDPOINT` | Hệ thức vectơ trung điểm | SGK B08 trang 53; SBT trang 48–50 | B08-P04, W08-ANCHOR |
| B08 | `G10-B08-CENTROID` | Hệ thức vectơ trọng tâm | SGK B08 trang 53; SBT trang 48–50 | B08-P05, W08-ANCHOR |

Outcome IDs là ứng viên cần đối soát với skill registry toàn hệ thống. Một item giữ một ID canonical duy nhất, placement được dùng chung khi hợp lệ; 2 Written dùng thư viện Written/Anchor chung.

## 3. D1 — Kiến thức đầy đủ theo từng Bài SGK

### Bài 7 — Các khái niệm mở đầu

**D1.1 Vectơ và độ dài.** Vectơ là đoạn thẳng có hướng. Kí hiệu $\overrightarrow{AB}$ gồm điểm đầu **A**, điểm cuối **B**; độ dài $|\overrightarrow{AB}|=AB\ge0$. Hai vectơ đặt tại vị trí khác nhau có thể bằng nhau. Đường thẳng qua A,B là **giá** của vectơ khác không; vectơ có điểm đầu trùng điểm cuối là vectơ-không $\vec0$. Mũi tên biểu diễn hướng di chuyển từ A sang B, nhưng quãng đường đã đi không luôn bằng độ dài độ dời.

**D1.2 Phương, hướng.** Với hai vectơ khác không, chúng **cùng phương** nếu hai giá song song hoặc trùng nhau; cùng phương có thể **cùng hướng** hoặc **ngược hướng**. Cùng phương không suy ra cùng hướng; cùng hướng không suy ra cùng độ dài.

**D1.3 Bằng nhau và ngược hướng.** $\vec u=\vec v$ khi cùng hướng, cùng độ dài. Trong hình bình hành ABCD: $\overrightarrow{AB}=\overrightarrow{DC}$; còn $\overrightarrow{AB}$ và $\overrightarrow{CD}$ cùng độ dài nhưng **ngược hướng**. Tên gọi vectơ đối cùng kí hiệu âm của vectơ được giải thích ở Bài 8.

**D1.4 Vectơ-không theo SGK/SBT.** $\overrightarrow{AA}=\vec0$ với mọi điểm A và $|\vec0|=0$. **Theo quy ước SBT KNTT lớp 10 Bài 7**, vectơ-không được xem là cùng phương và cùng hướng với mọi vectơ. Điều này là quy ước toán học cho trường hợp đặc biệt, không mô tả một đoạn có chiều vật lí khác 0.

**D1.5 Ứng dụng.** Lực, vận tốc, độ dời có thể dùng vectơ vì đồng thời chứa độ lớn và hướng; quãng đường đi theo hai chặng có thể lớn hơn độ dài vectơ độ dời từ đầu đến cuối. Luôn ghi đơn vị thích hợp.

### Bài 8 — Tổng và hiệu hai vectơ

**D1.1 Quy tắc ba điểm/ tam giác.** Với A,B,C tùy ý: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$. Lưu ý điểm cuối của vectơ thứ nhất B là điểm đầu của vectơ thứ hai; đảo BC thành CB có thể làm đổi kết quả.

**D1.2 Quy tắc hình bình hành.** Với hình bình hành ABCD, $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$. Hai cạnh được chọn phải cùng xuất phát từ **A**, đường chéo kết quả từ A đến C. Phép cộng vectơ có giao hoán, kết hợp, phần tử không.

**D1.3 Vectơ đối và hiệu.** $-\overrightarrow{AB}=\overrightarrow{BA}$ và $\vec u-\vec v=\vec u+(-\vec v)$. Quy tắc ba điểm suy ra $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$; phép trừ vectơ nói chung **không giao hoán**. $\vec a+\vec0=\vec a$, $\vec a+(-\vec a)=\vec0$.

**D1.4 Trung điểm và trọng tâm.** M là trung điểm AB khi và chỉ khi $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$. G là trọng tâm tam giác ABC thì $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$. Đối với M trung điểm BC và E bất kì: $\overrightarrow{EB}+\overrightarrow{EC}=\overrightarrow{EM}+\overrightarrow{EM}$. Chú ý đây là quan hệ cộng vectơ đã có trong bài, không xây thêm phần Core riêng.

**D1.5 Ứng dụng hợp lực.** Nếu hai lực có cùng điểm đặt, hợp lực là đường chéo hình bình hành tạo bởi hai vectơ lực. Độ lớn hợp lực không bằng tổng các độ lớn nếu hai lực không cùng hướng. Bài toán hai lực vuông góc có thể dùng định lí Pitago.

## 4. D2 — Sáu ví dụ giải mẫu có phân tích lỗi sai

### `EX-G10-B07-01` · B07 · Bằng nhau và ngược hướng trong hình bình hành
**Đề:** Cho hình bình hành ABCD. Hãy so sánh AB với DC, và AB với CD theo nghĩa vectơ.
**Giải:** $\overrightarrow{AB}=\overrightarrow{DC}$ vì hai cạnh đối cùng hướng và cùng độ dài. Mặt khác, $\overrightarrow{CD}$ cùng độ dài nhưng ngược hướng $\overrightarrow{AB}$.
**Điểm cần tự kiểm:** Sai thường gặp: xem cả AB và CD là bằng nhau chỉ vì độ dài cạnh đối bằng nhau.

### `EX-G10-B07-02` · B07 · Trường hợp vectơ-không
**Đề:** Cho A bất kì và B khác A, hãy so sánh $\overrightarrow{AA}$ với $\overrightarrow{BB}$ và nêu độ dài.
**Giải:** $\overrightarrow{AA}=\overrightarrow{BB}=\vec0$ và đều có độ dài 0. Theo quy ước SBT Bài 7, vectơ-không được xem là cùng phương và cùng hướng với mọi vectơ.
**Điểm cần tự kiểm:** Không nên lấy sự không quan sát thấy chiều mũi tên làm lí do phủ nhận quy ước của sách.

### `EX-G10-B07-03` · B07 · Vectơ độ dời và quãng đường
**Đề:** Một tàu rời A đi Đông 6 km rồi Bắc 8 km tới B. Hỏi quãng đường đi và độ dài vectơ AB.
**Giải:** Quãng đường: $6+8=14$ km. Vì hai chặng vuông góc, $|\overrightarrow{AB}|=\sqrt{6^2+8^2}=10$ km.
**Điểm cần tự kiểm:** Không cộng 6 + 8 để tìm độ dài độ dời, cũng không dùng 10 km làm quãng đường hai chặng.

### `EX-G10-B08-01` · B08 · Rút gọn theo ba điểm
**Đề:** Rút gọn $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}$.
**Giải:** Ghép $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ rồi cộng $\overrightarrow{CD}$ được $\overrightarrow{AD}$.
**Điểm cần tự kiểm:** Điểm giữa phải nối đúng B rồi C; phép cộng không đổi khi thêm ngoặc hợp lí.

### `EX-G10-B08-02` · B08 · Quy tắc hình bình hành và hiệu
**Đề:** Trong hình bình hành ABCD, rút gọn $\overrightarrow{AB}+\overrightarrow{AD}$ và $\overrightarrow{AC}-\overrightarrow{AB}$.
**Giải:** Tổng là $\overrightarrow{AC}$. Vì $\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}$ nên hiệu $\overrightarrow{AC}-\overrightarrow{AB}=\overrightarrow{BC}=\overrightarrow{AD}$.
**Điểm cần tự kiểm:** Không nhầm kết quả với CA hoặc CB khi đổi hướng.

### `EX-G10-B08-03` · B08 · Trung điểm và trọng tâm
**Đề:** M là trung điểm BC của tam giác ABC, G là trọng tâm. Nêu hai hệ thức đặc trưng.
**Giải:** Vì M trung điểm BC: $\overrightarrow{MB}+\overrightarrow{MC}=\vec0$. Vì G trọng tâm tam giác ABC: $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.
**Điểm cần tự kiểm:** Tổng ba vectơ phải đều xuất phát từ G; không thay tùy ý thành AB + BC + CA khi viện dẫn tính chất trọng tâm.

## 5. D3 — 16 canonical formative candidate items (8/Bài), đầy đủ đáp án và lời giải

**Bảo toàn item:** 1 `item_id` trên một nội dung gốc, `role/placement` dùng để chia SGK Core/Practice; không tạo một câu khác chỉ vì cùng được sử dụng ở Chuyên đề. Hints/keys dưới đây chỉ cho Luyện tập, không dành cho bài Tự kiểm tra độc lập.

### `THPT-G10-B07-C01` — B07 | `SGK_CORE` | `G10-B07-DEFINITION` | `MCQ` | `BASIC`
**Câu hỏi:** Theo định nghĩa, vectơ $\overrightarrow{AB}$ có điểm đầu và điểm cuối là gì?
**Lựa chọn:** A. Đầu B, cuối A ; B. Đầu A, cuối B ; C. Cả hai đầu tại A ; D. Chỉ có độ dài mà không có hướng
**Đáp án:** B
**Gợi ý chỉ dành cho Luyện tập:** Đọc kí hiệu từ chữ thứ nhất sang chữ thứ hai.
**Lời giải:** Vectơ có điểm đầu A và điểm cuối B; đổi thứ tự thành $\overrightarrow{BA}$ sẽ đổi hướng.

### `THPT-G10-B07-C02` — B07 | `SGK_CORE` | `G10-B07-EQUALITY` | `MCQ` | `BASIC`
**Câu hỏi:** Hai vectơ khác không bằng nhau khi nào?
**Lựa chọn:** A. Chỉ cần cùng giá ; B. Chỉ cần cùng độ dài ; C. Cùng hướng và cùng độ dài ; D. Có chung điểm đầu
**Đáp án:** C
**Gợi ý chỉ dành cho Luyện tập:** Phân biệt cùng phương với cùng hướng.
**Lời giải:** Hai vectơ bằng nhau khi cùng hướng và có cùng độ dài; không nhất thiết chung điểm đầu.

### `THPT-G10-B07-P01` — B07 | `SGK_PRACTICE` | `G10-B07-LENGTH` | `SHORT` | `CORE_APPLY`
**Câu hỏi:** Cho $AB=7\,\mathrm{cm}$. Tính độ dài của $\overrightarrow{BA}$.
**Đáp án:** 7 cm
**Gợi ý chỉ dành cho Luyện tập:** Độ dài vectơ là khoảng cách giữa hai đầu mút.
**Lời giải:** $|\overrightarrow{BA}|=BA=AB=7\,\mathrm{cm}$; độ dài không phụ thuộc chiều mũi tên.

### `THPT-G10-B07-P02` — B07 | `SGK_PRACTICE` | `G10-B07-EQUALITY` | `MCQ` | `CORE_APPLY`
**Câu hỏi:** Cho hình bình hành $ABCD$ theo thứ tự. Vectơ nào luôn bằng $\overrightarrow{AB}$?
**Lựa chọn:** A. $\overrightarrow{DC}$ ; B. $\overrightarrow{CD}$ ; C. $\overrightarrow{BA}$ ; D. $\overrightarrow{AD}$
**Đáp án:** A
**Gợi ý chỉ dành cho Luyện tập:** Xét cạnh đối song song, bằng nhau và chọn chiều mũi tên.
**Lời giải:** Trong hình bình hành $\overrightarrow{AB}=\overrightarrow{DC}$; $\overrightarrow{CD}$ có chiều ngược.

### `THPT-G10-B07-P03` — B07 | `SGK_PRACTICE` | `G10-B07-DIRECTION` | `SHORT` | `CORE_APPLY`
**Câu hỏi:** Trong hình bình hành $ABCD$, hãy chỉ ra vectơ có cùng độ dài nhưng ngược hướng với $\overrightarrow{AB}$, dùng hai đỉnh C,D.
**Đáp án:** $\overrightarrow{CD}$
**Gợi ý chỉ dành cho Luyện tập:** Đừng nhầm $\overrightarrow{DC}$ với $\overrightarrow{CD}$.
**Lời giải:** $\overrightarrow{CD}$ cùng độ dài với $\overrightarrow{AB}$ nhưng ngược hướng; vì vậy $\overrightarrow{CD}=-\overrightarrow{AB}$.

### `THPT-G10-B07-P04` — B07 | `SGK_PRACTICE` | `G10-B07-ZERO` | `MCQ` | `CORE_APPLY`
**Câu hỏi:** Theo quy ước SGK/SBT KNTT, phát biểu nào đúng về vectơ-không $\vec0$?
**Lựa chọn:** A. Có độ dài 1 ; B. Có điểm đầu và cuối khác nhau ; C. Không có bất kỳ quy ước nào về cùng phương ; D. Độ dài 0, được quy ước cùng hướng với mọi vectơ
**Đáp án:** D
**Gợi ý chỉ dành cho Luyện tập:** Kiểm tra riêng trường hợp điểm đầu trùng điểm cuối và quy ước của SGK.
**Lời giải:** $\overrightarrow{AA}=\vec0$ với mọi A, có độ dài bằng 0; SGK/SBT quy ước $\vec0$ cùng phương, cùng hướng với mọi vectơ. Đây là quy ước, không suy ra nó có giá hoặc chiều hình học thông thường.

### `THPT-G10-B07-P05` — B07 | `SGK_PRACTICE` | `G10-B07-DIRECTION` | `MCQ` | `CORE_APPLY`
**Câu hỏi:** Ba điểm phân biệt A, C, B thẳng hàng **theo thứ tự đó**, $AC=3\,\mathrm{cm}$, $CB=2\,\mathrm{cm}$. So sánh $\overrightarrow{AC}$ và $\overrightarrow{CB}$.
**Lựa chọn:** A. Bằng nhau ; B. Cùng hướng nhưng không bằng nhau ; C. Ngược hướng ; D. Cả hai đều là vectơ-không
**Đáp án:** B
**Gợi ý chỉ dành cho Luyện tập:** Cùng hướng chưa đủ để hai vectơ bằng nhau.
**Lời giải:** Hai vectơ cùng giá và đều hướng từ A về phía B, nên cùng hướng. Chúng có độ dài khác nhau (3 cm và 2 cm) nên không bằng nhau.

### `THPT-G10-B07-P06` — B07 | `SGK_PRACTICE` | `G10-B07-LENGTH` | `SHORT` | `APPLICATION`
**Câu hỏi:** Một tàu đi từ A theo hướng Đông 4 km rồi hướng Bắc 3 km đến B. Độ dài vectơ độ dời $\overrightarrow{AB}$ bằng bao nhiêu?
**Đáp án:** 5 km
**Gợi ý chỉ dành cho Luyện tập:** Phân biệt độ dài quãng đường thực đi với đoạn thẳng AB.
**Lời giải:** Hai chặng vuông góc tạo tam giác vuông với hai cạnh góc vuông 4 và 3, do đó $AB=\sqrt{4^2+3^2}=5\,\mathrm{km}$. Quãng đường đã đi là 7 km, **khác** độ dài vectơ độ dời.

### `THPT-G10-B08-C01` — B08 | `SGK_CORE` | `G10-B08-TRIANGLE` | `MCQ` | `BASIC`
**Câu hỏi:** Với ba điểm A, B, C bất kì, $\overrightarrow{AB}+\overrightarrow{BC}$ bằng vectơ nào?
**Lựa chọn:** A. $\overrightarrow{AC}$ ; B. $\overrightarrow{CA}$ ; C. $\overrightarrow{CB}$ ; D. $\vec0$ (luôn đúng)
**Đáp án:** A
**Gợi ý chỉ dành cho Luyện tập:** Điểm cuối của vectơ thứ nhất phải nối với điểm đầu vectơ thứ hai.
**Lời giải:** Theo quy tắc ba điểm: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.

### `THPT-G10-B08-C02` — B08 | `SGK_CORE` | `G10-B08-PARALLELOGRAM` | `MCQ` | `BASIC`
**Câu hỏi:** Trong hình bình hành $ABCD$, $\overrightarrow{AB}+\overrightarrow{AD}$ bằng vectơ nào?
**Lựa chọn:** A. $\overrightarrow{BD}$ ; B. $\overrightarrow{AC}$ ; C. $\overrightarrow{CA}$ ; D. $\overrightarrow{CD}$
**Đáp án:** B
**Gợi ý chỉ dành cho Luyện tập:** Quy tắc hình bình hành dùng hai vectơ chung điểm đầu.
**Lời giải:** Hai cạnh cùng xuất phát từ A có tổng bằng đường chéo từ A: $\overrightarrow{AC}$.

### `THPT-G10-B08-P01` — B08 | `SGK_PRACTICE` | `G10-B08-OPPOSITE-SUBTRACTION` | `SHORT` | `CORE_APPLY`
**Câu hỏi:** Rút gọn $\overrightarrow{AB}+\overrightarrow{BA}$.
**Đáp án:** $\vec0$
**Gợi ý chỉ dành cho Luyện tập:** Đổi hướng hai chữ trong kí hiệu làm gì với vectơ?
**Lời giải:** $\overrightarrow{BA}=-\overrightarrow{AB}$ nên tổng là vectơ-không.

### `THPT-G10-B08-P02` — B08 | `SGK_PRACTICE` | `G10-B08-OPPOSITE-SUBTRACTION` | `SHORT` | `CORE_APPLY`
**Câu hỏi:** Rút gọn $\overrightarrow{AB}-\overrightarrow{AC}$.
**Đáp án:** $\overrightarrow{CB}$
**Gợi ý chỉ dành cho Luyện tập:** Trừ một vectơ tức cộng với vectơ đối; thử đảo thứ tự phép cộng.
**Lời giải:** $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{CA}=\overrightarrow{CB}$ theo quy tắc ba điểm (CA + AB = CB).

### `THPT-G10-B08-P03` — B08 | `SGK_PRACTICE` | `G10-B08-TRIANGLE` | `SHORT` | `CORE_APPLY`
**Câu hỏi:** Với bốn điểm A, B, C, D, rút gọn $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}+\overrightarrow{DA}$.
**Đáp án:** $\vec0$
**Gợi ý chỉ dành cho Luyện tập:** Ghép các vectơ thành đường gấp khúc kín.
**Lời giải:** $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$, tiếp tục $\overrightarrow{AC}+\overrightarrow{CD}=\overrightarrow{AD}$, cuối cùng $\overrightarrow{AD}+\overrightarrow{DA}=\vec0$.

### `THPT-G10-B08-P04` — B08 | `SGK_PRACTICE` | `G10-B08-MIDPOINT` | `MCQ` | `CORE_APPLY`
**Câu hỏi:** Cho M là trung điểm đoạn AB. Chọn hệ thức vectơ đúng.
**Lựa chọn:** A. $\overrightarrow{MA}=\overrightarrow{MB}$ ; B. $\overrightarrow{AM}+\overrightarrow{MB}=\vec0$ ; C. $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$ ; D. $\overrightarrow{MA}+\overrightarrow{MB}=\overrightarrow{AB}$
**Đáp án:** C
**Gợi ý chỉ dành cho Luyện tập:** Hai vectơ xuất phát từ M có cùng độ dài và ngược hướng.
**Lời giải:** Vì M là trung điểm nên $\overrightarrow{MA}$ và $\overrightarrow{MB}$ đối nhau: $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$.

### `THPT-G10-B08-P05` — B08 | `SGK_PRACTICE` | `G10-B08-CENTROID` | `SHORT` | `CORE_APPLY`
**Câu hỏi:** Cho G là trọng tâm tam giác ABC. Rút gọn $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}$.
**Đáp án:** $\vec0$
**Gợi ý chỉ dành cho Luyện tập:** Dùng tính chất vectơ của trọng tâm, không đoán vì ba điểm là đỉnh tam giác.
**Lời giải:** Tính chất trọng tâm: $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$. Cần phân biệt với tổng các vectơ xuất phát từ A.

### `THPT-G10-B08-P06` — B08 | `SGK_PRACTICE` | `G10-B08-PARALLELOGRAM` | `SHORT` | `APPLICATION`
**Câu hỏi:** Hai lực có độ lớn 3 N và 4 N tác dụng tại cùng điểm, **vuông góc nhau**. Độ lớn của hợp lực bằng bao nhiêu N?
**Đáp án:** 5 N
**Gợi ý chỉ dành cho Luyện tập:** Quy tắc hình bình hành cho tổng vectơ; tính độ dài bằng hình học vuông.
**Lời giải:** Theo quy tắc hình bình hành, đường chéo là vectơ hợp lực. Với góc vuông, độ dài đường chéo là $\sqrt{3^2+4^2}=5\,\mathrm N$. Không cộng độ lớn thành 7 N vì hai lực không cùng hướng.

## 6. D4 — Written dùng chung; Anchor chỉ là nhãn

### `THPT-G10-CHIV-W07` — B07 | `WRITTEN` | `G10-B07-EQUALITY` | `APPLICATION`
**Đề:** Cho hình bình hành $ABCD$ không suy biến, hai đường chéo $AC$ và $BD$ cắt nhau tại O, biết $AB=6$ cm và $AD=4$ cm. (a) Chứng minh $\overrightarrow{AB}=\overrightarrow{DC}$. (b) Nêu vectơ đối của $\overrightarrow{AB}$ theo hai đỉnh C,D. (c) Chứng minh $\overrightarrow{AO}=\overrightarrow{OC}$ và $\overrightarrow{BO}=\overrightarrow{OD}$. (d) Tính $|\overrightarrow{CD}|$ và $|\overrightarrow{AD}|$.
**Đáp án/đầu ra:** (a) AB = DC theo nghĩa vectơ; (b) CD; (c) AO = OC, BO = OD theo nghĩa vectơ; (d) 6 cm, 4 cm.
**Lời giải:** (a) Cạnh đối của hình bình hành song song, bằng nhau, $\overrightarrow{AB}$ và $\overrightarrow{DC}$ cùng chiều nên bằng nhau. (b) $\overrightarrow{CD}$ có cùng độ dài và ngược chiều $\overrightarrow{AB}$. (c) Hai đường chéo của hình bình hành cắt nhau tại trung điểm O; dọc AC, AO và OC cùng chiều cùng độ dài, tương tự BO và OD dọc BD. (d) $|\overrightarrow{CD}|=CD=AB=6$ cm, $|\overrightarrow{AD}|=AD=4$ cm.
**Rubric tự đối chiếu (7,0 điểm; KHÔNG cập nhật Mastery):**
- 1,5 điểm: (a) lập luận đúng cạnh đối và chiều để chứng minh vectơ bằng nhau
- 1,0 điểm: (b) xác định đúng vectơ đối và giải thích
- 2,0 điểm: (c) sử dụng tính chất trung điểm của hai đường chéo và hướng của AO/OC, BO/OD
- 1,5 điểm: (d) xác định hai độ dài và đơn vị
- 1,0 điểm: trình bày rõ khác biệt vectơ bằng nhau với đoạn thẳng bằng nhau; tổng 7,0 điểm

### `THPT-G10-CHIV-W08-ANCHOR` — B08 | `WRITTEN/ANCHOR_LABEL` | `G10-B08-MIDPOINT` | `APPLICATION`
**Đề:** Cho tam giác ABC, M là trung điểm BC và E là điểm bất kì. (a) Chứng minh $\overrightarrow{EB}+\overrightarrow{EC}=\overrightarrow{EM}+\overrightarrow{EM}$. (b) Rút gọn $\overrightarrow{AB}+\overrightarrow{AC}-\overrightarrow{AM}-\overrightarrow{AM}$. (c) Cho G là trọng tâm tam giác ABC, chứng minh $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$ bằng cách dùng (a) với E=G và tính chất trọng tâm.
**Đáp án/đầu ra:** (a) hai lần EM; (b) vectơ-không; (c) tổng ba vectơ từ G tới ba đỉnh là vectơ-không.
**Lời giải:** (a) Theo ba điểm $\overrightarrow{EB}=\overrightarrow{EM}+\overrightarrow{MB}$, $\overrightarrow{EC}=\overrightarrow{EM}+\overrightarrow{MC}$. Vì M trung điểm BC, $\overrightarrow{MB}+\overrightarrow{MC}=\vec0$; cộng vế được $\overrightarrow{EB}+\overrightarrow{EC}=\overrightarrow{EM}+\overrightarrow{EM}$. (b) Đặt E=A vào (a), suy ra tổng bằng vectơ-không. (c) Đặt E=G vào (a): $\overrightarrow{GB}+\overrightarrow{GC}=\overrightarrow{GM}+\overrightarrow{GM}$. Trọng tâm G thuộc AM và $GA=2GM$ về độ dài nhưng $\overrightarrow{GA}$ ngược hướng $\overrightarrow{GM}$, nên $\overrightarrow{GA}+\overrightarrow{GM}+\overrightarrow{GM}=\vec0$. Do đó $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.
**Rubric tự đối chiếu (7,0 điểm; KHÔNG cập nhật Mastery):**
- 2,0 điểm: biểu diễn EB, EC theo EM và MB, MC bằng quy tắc ba điểm
- 1,0 điểm: khai thác MB + MC = 0, kết luận (a)
- 1,0 điểm: rút gọn (b) theo (a) với E=A
- 2,0 điểm: dùng G là trọng tâm, quan hệ hướng và độ dài GA, GM, suy ra GA + GM + GM = 0
- 1,0 điểm: kết hợp (a) tại E=G, kết luận và trình bày (7,0 điểm)

## 7. D5 — Hai SVG gốc, chính xác cùng XML khi tích hợp

### `FIG-G10-B07-01` — `THPT_G10_B07_PARALLELOGRAM_EQUAL_OPPOSITE_D5_R01.svg`
SVG tự chứa, có viewBox, title, desc, marker mũi tên và màu phân biệt; dùng trong lý thuyết/ví dụ để học sinh phân biệt hướng. Reviewer cần kiểm tra toán học và tính đúng của các kí hiệu, không chỉ hình đẹp.
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 510" role="img" aria-labelledby="b07title b07desc">
<title id="b07title">Hình bình hành ABCD: hai vectơ bằng nhau và đối nhau</title>
<desc id="b07desc">Bốn đỉnh theo thứ tự A trái dưới, B phải dưới, C phải trên, D trái trên. Vectơ AB hướng sang phải và bằng DC; vectơ CD hướng sang trái nên ngược hướng với AB. Hai đường chéo cắt nhau tại O; AO bằng OC.</desc>
<defs><marker id="arrow7b" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#2563eb"/></marker><marker id="arrow7r" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#db2777"/></marker></defs>
<rect width="920" height="510" rx="20" fill="#f8fafc"/>
<text x="40" y="53" font-size="27" fill="#0f172a" font-weight="bold">Bài 7: vectơ bằng nhau và ngược hướng</text>
<polygon points="140,365 440,365 580,155 280,155" fill="#dbeafe" fill-opacity=".55" stroke="#64748b" stroke-width="3"/>
<path d="M140 365 L440 365" stroke="#2563eb" stroke-width="6" marker-end="url(#arrow7b)"/>
<path d="M280 155 L580 155" stroke="#2563eb" stroke-width="6" marker-end="url(#arrow7b)"/>
<path d="M580 155 L280 155" stroke="#db2777" stroke-width="4" stroke-dasharray="10 6" marker-end="url(#arrow7r)"/>
<line x1="140" y1="365" x2="580" y2="155" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="440" y1="365" x2="280" y2="155" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"/>
<circle cx="360" cy="260" r="5" fill="#111827"/>
<g font-size="23" fill="#0f172a" font-family="Arial, sans-serif"><text x="110" y="400">A</text><text x="440" y="401">B</text><text x="585" y="142">C</text><text x="251" y="143">D</text><text x="371" y="252">O</text></g>
<rect x="625" y="126" width="257" height="259" rx="14" fill="#fff" stroke="#cbd5e1"/>
<text x="650" y="168" font-size="22" font-weight="bold" fill="#2563eb">AB = DC</text>
<text x="650" y="213" font-size="19" fill="#334155">Cùng chiều, cùng độ dài</text>
<text x="650" y="266" font-size="22" font-weight="bold" fill="#be185d">AB và CD ngược hướng</text>
<text x="650" y="311" font-size="19" fill="#334155">Cùng độ dài, chiều trái nhau</text>
<text x="650" y="359" font-size="20" fill="#334155">AO = OC (cùng vectơ)</text>
<text x="44" y="465" font-size="19" fill="#475569">Mỗi kí hiệu AB, DC, CD, AO, OC trong hình chỉ một vectơ có mũi tên.</text>
</svg>
```

### `FIG-G10-B08-01` — `THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg`
SVG tự chứa, có viewBox, title, desc, marker mũi tên và màu phân biệt; dùng trong lý thuyết/ví dụ để học sinh phân biệt hướng. Reviewer cần kiểm tra toán học và tính đúng của các kí hiệu, không chỉ hình đẹp.
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 550" role="img" aria-labelledby="b08title b08desc">
<title id="b08title">Quy tắc ba điểm và hình bình hành để cộng hai vectơ</title>
<desc id="b08desc">A dưới trái, B dưới phải, D trên trái, C trên phải là bốn đỉnh của hình bình hành. Mũi tên từ A đến B, từ B đến C, từ A đến C và từ A đến D cho biết AB cộng BC bằng AC và AB cộng AD bằng AC.</desc>
<defs><marker id="arr8blue" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#2563eb"/></marker><marker id="arr8teal" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#0d9488"/></marker><marker id="arr8pink" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#be185d"/></marker></defs>
<rect width="940" height="550" rx="18" fill="#f8fafc"/>
<text x="35" y="54" font-size="27" font-weight="bold" fill="#0f172a">Bài 8: hai cách tìm tổng hai vectơ</text>
<polygon points="122,392 410,392 560,172 272,172" fill="#e0f2fe" stroke="#94a3b8" stroke-width="2"/>
<path d="M122 392 L410 392" stroke="#2563eb" stroke-width="6" marker-end="url(#arr8blue)"/>
<path d="M410 392 L560 172" stroke="#0d9488" stroke-width="6" marker-end="url(#arr8teal)"/>
<path d="M122 392 L272 172" stroke="#0d9488" stroke-width="4" stroke-dasharray="12 6" marker-end="url(#arr8teal)"/>
<path d="M122 392 L560 172" stroke="#be185d" stroke-width="6" marker-end="url(#arr8pink)"/>
<g font-size="24" font-family="Arial, sans-serif" fill="#0f172a"><text x="93" y="418">A</text><text x="410" y="424">B</text><text x="565" y="166">C</text><text x="244" y="162">D</text></g>
<rect x="614" y="135" width="289" height="267" rx="13" fill="#fff" stroke="#cbd5e1"/>
<text x="635" y="183" font-size="21" fill="#2563eb" font-weight="bold">Quy tắc ba điểm:</text>
<text x="635" y="222" font-size="22" fill="#334155">AB + BC = AC</text>
<text x="635" y="283" font-size="21" fill="#0d9488" font-weight="bold">Hình bình hành:</text>
<text x="635" y="322" font-size="22" fill="#334155">AB + AD = AC</text>
<text x="635" y="370" font-size="18" fill="#64748b">Chú ý điểm đầu/điểm cuối</text>
<text x="40" y="484" font-size="20" fill="#475569">Vectơ AC (màu hồng) là kết quả; đổi BC thành CB sẽ đảo hướng.</text>
<text x="40" y="515" font-size="17" fill="#64748b">Chữ AB, BC, AC, AD trong hình đều biểu diễn kí hiệu vectơ có mũi tên.</text>
</svg>
```

## 8. D6 — Bốn thẻ hỗ trợ tự khắc phục lỗi

### `HELP-G10-B07-01` · Nhầm điểm đầu/cuối và chiều của vectơ
1. **Tín hiệu:** Học sinh trả lời sai trong B07-C01, B07-P03.
2. **Nguyên nhân:** Nhầm các định nghĩa hoặc quy tắc vectơ đã học, không phải thiếu thêm công thức mới.
3. **Nguyên lí:** Vẽ mũi tên từ chữ đứng trước sang chữ đứng sau; thử đảo AB thành BA.
4. **Tự sửa:** Học sinh phải tự vẽ một sơ đồ mũi tên nhỏ, xác định điểm đầu/cuối và nêu ít nhất một lí do toán học, rồi thử lại câu cũ.
5. **Điểm quay lại:** Làm lại B07-P03 rồi đối chiếu B07-C02.

### `HELP-G10-B07-02` · Nhầm cùng phương, cùng hướng, bằng nhau; quên quy ước vectơ-không
1. **Tín hiệu:** Học sinh trả lời sai trong B07-P04, B07-P05.
2. **Nguyên nhân:** Nhầm các định nghĩa hoặc quy tắc vectơ đã học, không phải thiếu thêm công thức mới.
3. **Nguyên lí:** So lần lượt phương, chiều, độ dài; dùng đúng quy ước KNTT về vectơ-không.
4. **Tự sửa:** Học sinh phải tự vẽ một sơ đồ mũi tên nhỏ, xác định điểm đầu/cuối và nêu ít nhất một lí do toán học, rồi thử lại câu cũ.
5. **Điểm quay lại:** Làm B07-P05 rồi B07-P04.

### `HELP-G10-B08-01` · Nhầm hướng và thứ tự khi áp dụng quy tắc ba điểm/hiệu
1. **Tín hiệu:** Học sinh trả lời sai trong B08-C01, B08-P02.
2. **Nguyên nhân:** Nhầm các định nghĩa hoặc quy tắc vectơ đã học, không phải thiếu thêm công thức mới.
3. **Nguyên lí:** Dùng đường gấp khúc đầu-cuối: AB + BC = AC; phép trừ đổi vectơ bị trừ thành vectơ đối.
4. **Tự sửa:** Học sinh phải tự vẽ một sơ đồ mũi tên nhỏ, xác định điểm đầu/cuối và nêu ít nhất một lí do toán học, rồi thử lại câu cũ.
5. **Điểm quay lại:** Làm B08-P02 và B08-P03.

### `HELP-G10-B08-02` · Quên giao điểm trung điểm/trọng tâm, suy luận sai phép cộng và hợp lực
1. **Tín hiệu:** Học sinh trả lời sai trong B08-P04, B08-P05, B08-P06.
2. **Nguyên nhân:** Nhầm các định nghĩa hoặc quy tắc vectơ đã học, không phải thiếu thêm công thức mới.
3. **Nguyên lí:** Phân biệt tính chất M trung điểm với G trọng tâm; cộng lực theo hình bình hành, không cộng độ lớn nếu lệch hướng.
4. **Tự sửa:** Học sinh phải tự vẽ một sơ đồ mũi tên nhỏ, xác định điểm đầu/cuối và nêu ít nhất một lí do toán học, rồi thử lại câu cũ.
5. **Điểm quay lại:** Làm B08-P04, B08-P05 và B08-P06.

## 9. Self-QA tác giả, release boundary và yêu cầu NotebookLM verdict

**Tự QA:** 18/18 unique item IDs trong chính gói, gồm 16 formative (4 Core, 12 Practice) và 2 Written; 10 distinct proposed outcomes, 6 worked examples, 2 XML SVG parse/render, 4 HELP_ID, mỗi item formative có nội dung, đáp án, gợi ý, lời giải và role. Các phép kiểm quan hệ vectơ với tọa độ thử nghiệm/ hình học (cộng-trừ hình bình hành, trung điểm, trọng tâm, độ dời vuông góc) và rubric 7 điểm được tái kiểm bằng script. Đây **không** phải reviewer Academic PASS; không suy diễn kiểm trùng toàn bank qua mã nội bộ.

**Ranh giới:** Không có câu/đáp án Tự kiểm tra SGK_CHAPTER_READINESS hoặc TOPIC_READINESS giữ kín trong file công khai. Không có engine đánh giá, đăng ký chính thức canonical, Mastery, website, PR release, merge/deploy. Reviewer PASS (nếu có) chỉ áp dụng đúng snapshot B07/B08, không cho B09–11, Chương IV đầy đủ hay Chuyên đề.

**NotebookLM cần trả:** SOURCE_RECEIPT (SGK/SBT, 5 Permanent v2.0); ID reconciliation 18/18, 10 outcome, 6 D2, 2 FIG, 4 HELP; per-LESSON/per-OUTCOME/per-ITEM verdict, D1–D6 depth, Core vs Practice và ranh giới quy ước vectơ-không; P0/P1/P2, MINIMAL_DELTA, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA=YES/NO` đúng phạm vi R01. Nếu chặn, nêu item và MINIMAL_DELTA cụ thể.

**FINAL_STATE:** `NOT_REVIEWED / A3_A5_A6_HOLD / NO_CONTENT_READY / NO_RELEASE`.
