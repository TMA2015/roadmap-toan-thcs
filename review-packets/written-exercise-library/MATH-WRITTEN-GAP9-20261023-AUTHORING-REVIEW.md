# SELF-LEARNING MATH — GAP9: 9 bài tự luận bổ sung cấu trúc (BẢN NHÁP KIỂM TOÁN)

**PACKET_ID:** MATH-WRITTEN-GAP9-20261023-R0  
**STATUS:** AUTHOR_DRAFT_ONLY / NOT_YET_NOTEBOOKLM_REVIEWED / NOT_APPROVED / NO_DEPLOY  
**EXPECTED:** 9 candidate IDs; not canonical WX IDs.  
**Source-catalog lock:** 75 exercise IDs in \`docs/assets/data/written-exercises/written-exercise-library-v1.json\`, Git blob \`5141a40bf1b8f8763257857d3b805d681a0956fa\`.  
**Starting gap audit:** \`docs/collaboration/math-written-75-vs-79-exam-reasoning-coverage-audit-20261023.md\`.  
**Source classes:** S2 = compiled/teacher-authored semester papers; S3 = entrance-labelled PDFs, authenticity not yet independently validated. **S1 exact school placement awaits textbooks**.  
**Task:** judge actual mathematical correctness, genuine structural novelty versus 75 existing records (including cross-topic comparisons), teaching support, wording, level/layer, and source boundary. Do not rubber-stamp because author called a question P1.

## Why 9 / why no published edits

The current 75 are all academically APPROVED. They are not generally being regraded. These nine ORIGINAL propositions target reasoning **not yet adequately practised as full written problems**. All have a unique construction and their own numbers; the source files below provide *structural motivation*, not approved answer keys. Questions that are only cosmetic variations of existing items must be rejected even if mathematically correct.

For this packet, provisional grade is for **review routing only**. It is NOT a reviewed KNTT grade/chapter/lesson placement. No new published exercise_id, grade filter, Readiness/Mastery credit, website route, or source overwrite is authorized.

---

## G6-01 — Ba điều kiện xếp hàng (candidate-only ID CAND-G6-01)

- **Review grade/layer:** G6 / proposed KNTT-Core, exact S1 lesson unresolved.
- **Problem family:** BCNN + dư giống nhau + kiểm tra điều kiện bổ sung và chặn miền.
- **Source inspiration (S2):** G6 HK1 đề biên soạn số 4, \`de-kiem-tra-hoc-ki-1-toan-6-de-so-4-ket-noi-tri-thuc-1669285094.pdf\`, printed page 2, Bài 3. Original parameters not reused.
- **Nearest existing:** WX02-NUM-001 uses **ƯCLN** to divide equal gifts; this candidate instead reverses row-division conditions using **BCNN and a remainder**, then checks a second divisor.

**Đề bài.** Một câu lạc bộ có số thành viên nhiều hơn 150 nhưng ít hơn 550. Khi xếp thành các hàng **12 người, 15 người hoặc 18 người**, lần nào cũng **thừa đúng 4 người**. Khi xếp thành các hàng **7 người** thì vừa đủ, không thừa. Hỏi câu lạc bộ có bao nhiêu thành viên? Giải thích vì sao số tìm được là duy nhất trong khoảng đã cho.

**Gợi ý chọn lọc (2):** (1) Nếu bớt 4 thành viên thì số còn lại chia hết đồng thời cho những số nào? (2) Tìm tất cả số trong khoảng có dạng bội chung + 4 rồi kiểm tra điều kiện hàng 7.

**Lời giải kiểm tra nội bộ.** Gọi số thành viên là N. N−4 chia hết 12, 15 và 18. BCNN(12,15,18)=180; vậy N=180k+4, k nguyên. Từ 150<N<550, ta được N∈{184,364,544}. Ba số này khi chia 7 có số dư lần lượt 2,0,5. Vậy N=364. Chỉ có một ứng viên thỏa tất cả điều kiện, nên nghiệm duy nhất.

**Vì sao cách này:** Điều kiện “cùng dư” quy về bội chung; điều kiện “vừa đủ” lọc các ứng viên, không phải chia quà đều theo ƯCLN.  
**Rubric /4:** biến đổi điều kiện dư thành BCNN (1); tìm BCNN=180 (1); lọc đúng 3 ứng viên theo khoảng (1); kiểm tra 7 và kết luận duy nhất (1).  
**Lỗi thường gặp:** dùng ƯCLN thay BCNN; quên cộng lại 4; tìm 364 đúng nhưng không chứng minh duy nhất.  
**Ôn bù:** WX02-NUM-001 cho phân biệt ƯCLN với BCNN, sau đó học BCNN và tính chia hết trong SGK G6.

---

## G6-02 — Giải ngược qua phần còn lại (CAND-G6-02)

- **Review grade/layer:** G6 / proposed KNTT-Core; exact S1 placement unresolved.
- **Source inspiration (S2):** G6 HK2 đề biên soạn số 1, \`de-kiem-tra-hoc-ki-2-toan-6-de-so-1-ket-noi-tri-thuc-1713575020.pdf\`, printed page 2, Bài 3.
- **Nearest existing:** WX02-NUM-003 tính hai lần trên cùng **số sách theo kế hoạch**. Candidate này dùng phân số thứ hai của **phần còn lại**, rồi giải lùi từ số cuối.

**Đề bài.** Kho sách của trường chuyển đi \(\frac14\) số sách ban đầu trong đợt I. Trong đợt II, kho chuyển tiếp \(\frac25\) **số sách còn lại sau đợt I**. Sau hai đợt, kho còn **90 cuốn**. Hỏi lúc đầu kho có bao nhiêu cuốn sách và mỗi đợt chuyển đi bao nhiêu cuốn?

**Gợi ý (2):** (1) 90 cuốn là bao nhiêu phần của số sách *sau đợt I*, không phải phần của số ban đầu? (2) Từ số sách sau đợt I, hãy làm tiếp phép tính ngược để tìm số ban đầu.

**Lời giải.** Sau đợt II còn \(1-\frac25=\frac35\) số sách sau đợt I, nên sau đợt I có \(90:\frac35=150\) cuốn. Đây là \(\frac34\) số sách ban đầu, nên lúc đầu có \(150:\frac34=200\) cuốn. Đợt I chuyển \(200-150=50\) cuốn; đợt II chuyển \(150-90=60\) cuốn. Kiểm tra \(50+60+90=200\), \(60=\frac25\cdot150\).

**Vì sao cách này:** Mỗi đợt có một mốc tham chiếu khác nhau; giải ngược an toàn hơn cộng \(\frac14+\frac25\).  
**Rubric /4:** nhận đúng phần còn lại đợt II (1); tìm 150 (1); tìm 200 (1); tính 50 và 60, kiểm tra mốc (1).  
**Lỗi:** lấy \(\frac25\) của ban đầu; cộng \(\frac14+\frac25\); nhầm số sách đợt II với số còn sau đợt II.  
**Ôn bù:** WX02-NUM-003, phân biệt “biết giá trị một phần để tìm toàn bộ” và “tìm một phần của toàn bộ”.

---

## G7-01 — Ba đội có khối lượng bằng nhau, biết hiệu (CAND-G7-01)

- **Review grade/layer:** G7 / proposed KNTT-Core; S1 lesson unresolved.
- **Source inspiration (S2):** G7 HK2 đề biên soạn số 1, \`de-kiem-tra-hoc-ki-2-toan-7-de-so-1-ket-noi-tri-thuc-1746416741.pdf\`, printed page 2, Bài 2. Parameters/time and known-difference pair are original.
- **Nearest existing:** WX03-RAT-002 only compares two workforce/time values given total fixed; current author concept draft elsewhere used a **total** of three teams. This asks for **three unknowns and a difference**, a different closure equation.

**Đề bài.** Ba đội A, B, C nhận ba phần việc có **khối lượng bằng nhau**. Mỗi công nhân có năng suất như nhau và không thay đổi trong quá trình làm; mỗi đội giữ nguyên số công nhân. Đội A cần **3 ngày**, đội B **5 ngày**, đội C **6 ngày** để hoàn thành. Biết đội A có **nhiều hơn đội C 10 công nhân**. Tính số công nhân từng đội và kiểm tra đáp số.

**Gợi ý (2):** (1) Tại sao số người nhân số ngày phải bằng nhau giữa ba đội? (2) Viết tỉ số số người tỉ lệ nghịch với \(3:5:6\) rồi dùng **hiệu A−C**, không dùng tổng.

**Lời giải.** Gọi a,b,c là số công nhân. Cùng năng suất và cùng công việc nên \(3a=5b=6c\), suy ra \(a:b:c=\frac13:\frac15:\frac16=10:6:5\). Đặt \(a=10k,b=6k,c=5k\), \(k>0\). Do \(a-c=10\), \(5k=10\), \(k=2\). Vậy đội A **20**, B **12**, C **10** người. Kiểm tra \(3\cdot20=5\cdot12=6\cdot10=60\) người-ngày; \(20-10=10\).

**Rubric /4:** nhận biết và giải thích nghịch đảo người–ngày (1); lập \(3a=5b=6c\) (1); chuyển đúng tỉ số \(10:6:5\) (1); áp dụng hiệu, ba đáp số và kiểm tra (1).  
**Lỗi:** dùng tỉ số thuận \(3:5:6\); dùng tổng ba đội dù đề chỉ cho hiệu; tính được số thực không kiểm tra số người nguyên dương.  
**Ôn bù:** WX03-RAT-002 trước khi giải dãy tỉ số.

---

## G7-02 — Tam giác cân: hai nhánh chứng minh liên kết (CAND-G7-02)

- **Review grade/layer:** G7 / proposed KNTT-Core, **S1 verify all invoked theorems**.
- **Source inspiration (S2):** G7 HK2 đề biên soạn số 1, \`de-kiem-tra-hoc-ki-2-toan-7-de-so-1-ket-noi-tri-thuc-1746416741.pdf\`, page 2, Bài 4 (multi-conclusion geometry); construction is original.
- **Nearest existing:** WX14-TRI-001 proves a median is altitude; WX14-TRI-002 derives one pair of equal segments. Here the learner must **carry an established angle fact** into another congruence and prove a distinct parallel line.

**Đề bài.** Cho tam giác \(ABC\) cân tại \(A\) (\(AB=AC\)), \(M\) là trung điểm của \(BC\). Lấy \(D\) nằm **giữa** A và B, lấy \(E\) nằm **giữa** A và C sao cho \(AD=AE\). Hãy vẽ hình và chứng minh:
1. \(AM\perp BC\) và \(\angle BAM=\angle MAC\).
2. \(DE\parallel BC\).
3. \(MD=ME\) và \(AM\perp DE\).

**Gợi ý (3):** (1) Để chứng minh hai góc ở A bằng nhau, xét hai tam giác nào có ba cặp cạnh bằng nhau? (2) Tam giác ADE cân và tam giác ABC cân có cùng góc ở A; so sánh góc ở đáy của chúng. (3) Muốn chứng minh \(MD=ME\), xét cặp tam giác chứa cạnh chung \(AM\).

**Lời giải.**  
1. \(BM=CM,\ AB=AC,\ AM\) chung, do đó \(\triangle ABM=\triangle ACM\) (c.c.c.). Suy ra \(\angle BAM=\angle MAC\) và \(\angle BMA=\angle AMC\). Vì B,M,C thẳng hàng nên hai góc cuối kề bù và bằng nhau, đều 90°, vậy \(AM\perp BC\).
2. \(\triangle ADE\) cân tại A vì \(AD=AE\), \(\triangle ABC\) cân tại A; cả hai có góc đỉnh \(\angle DAE=\angle BAC\). Do đó \(\angle ADE=\angle ABC\) (góc đáy bằng \((180^\circ-\angle A)/2\)). Vì A,D,B thẳng hàng và hai góc ở vị trí đồng vị theo cát tuyến AB, suy ra \(DE\parallel BC\).
3. Xét \(\triangle ADM\) và \(\triangle AEM\): \(AD=AE\), \(AM\) chung và \(\angle DAM=\angle MAE\) từ câu 1, nên bằng nhau (c.g.c.). Suy ra \(MD=ME\). Kết hợp \(AM\perp BC\) ở câu 1 với \(DE\parallel BC\) ở câu 2, suy ra \(AM\perp DE\).

**Rubric /5:** vẽ hình đúng điều kiện (0.5); chứng minh hai tam giác ABM/ACM bằng nhau và kết luận góc (1.5); suy ra đường cao AM (0.5); suy ra DE song song qua góc đáy (1); chứng minh MD=ME và AM⊥DE, nêu các căn cứ (1.5).  
**Lỗi:** dùng định lý Thalès đảo khi chưa kiểm tra lớp/học phần; suy DE∥BC chỉ do hình “trông song song”; chứng minh \(\triangle ADM\cong\triangle AEM\) mà chưa có căn cứ góc ở A.  
**Ôn bù:** WX14-TRI-001, WX14-TRI-002, WX13-LIN-001/002.

---

## G8-01 — Kế hoạch sản xuất: ngày ít hơn nhưng số lượng nhiều hơn (CAND-G8-01)

- **Review grade/layer:** G8 / proposed KNTT-Core, actual S1 placement unresolved.
- **Source inspiration (S2):** G8 HK2 đề biên soạn số 2, \`de-thi-hoc-ki-2-toan-8-de-so-2-ket-noi-tri-thuc-1715132790.pdf\`, printed page 4, Bài 2. Original chronology and parameters.
- **Nearest existing:** WX24-MOD-001 changes travel speed/time for a fixed journey, WX09-SYS-006 solves fixed productivity of two machines. Here the **planned total and actual total differ**, and daily production changes after an initial phase.

**Đề bài.** Một tổ dự định làm việc **15 ngày**, mỗi ngày sản xuất cùng một số sản phẩm. Thực tế, trong **5 ngày đầu** tổ làm đúng kế hoạch; trong **9 ngày tiếp theo**, nhờ cải tiến, số sản phẩm làm mỗi ngày **tăng 25% so với mức kế hoạch**. Tổ kết thúc sau **14 ngày**, làm được **nhiều hơn 25 sản phẩm so với toàn bộ kế hoạch 15 ngày**. Hỏi kế hoạch mỗi ngày làm bao nhiêu sản phẩm và thực tế đã làm tổng cộng bao nhiêu sản phẩm?

**Gợi ý (2):** (1) Gọi x là mức sản phẩm/ngày theo kế hoạch: kế hoạch toàn đợt là bao nhiêu? (2) Ở 9 ngày sau, số lượng mỗi ngày là x hay \(1{,}25x\)? So sánh hai tổng.

**Lời giải.** Gọi x là sản phẩm/ngày theo kế hoạch, \(x>0\). Theo kế hoạch có \(15x\) sản phẩm. Thực tế làm \(5x+9\cdot1{,}25x=16{,}25x\). Vì vượt kế hoạch 25 sản phẩm nên \(16{,}25x=15x+25\), suy ra \(1{,}25x=25\), \(x=20\). Thực tế \(5\cdot20+9\cdot25=325\) sản phẩm; kế hoạch 300, đúng vượt 25 và giảm 1 ngày.

**Rubric /4:** gọi ẩn và lập tổng kế hoạch (1); viết đúng mức tăng 25% và tổng 14 ngày (1); lập/giải phương trình (1); kiểm tra 300 so với 325, đơn vị (1).  
**Lỗi:** nhân mức tăng 25% vào cả 14 ngày; so với kế hoạch 14 thay vì 15 ngày; hiểu “vượt 25” là thêm 25 mỗi ngày.  
**Ôn bù:** WX24-MOD-001 (đặt ẩn mô hình hóa), WX03-RAT-002 (điều kiện tỉ lệ), phần phương trình bậc nhất CT08.

---

## G8-02 — Hình chóp đều: chiều cao thật khác đường cao mặt bên (CAND-G8-02)

- **Review grade/layer:** G8 / proposed KNTT-Core, exact S1 section unresolved.
- **Source inspiration (S2):** G8 HK2 đề số 2, \`...1715132790.pdf\`, printed page 4 Bài 3 (hình chóp); G8 HK2 đề số 3, \`de-thi-hoc-ki-2-toan-8-de-so-3-ket-noi-tri-thuc-1745390509.pdf\`, printed page 5 Bài 3. Original numbers and requirement combine geometric reasoning with both surface and volume.
- **Nearest existing:** WX20-GEO-001 hình hộp chữ nhật, WX20-GEO-002 hình nón. Neither chooses the **slant height of a square pyramid face** from a right triangle in a new shape.

**Đề bài.** Mô hình mái che có dạng **hình chóp tứ giác đều** \(S.ABCD\), đáy là hình vuông cạnh **10 cm**, đỉnh S nằm thẳng trên tâm O của đáy và \(SO=12\) cm. Gọi M là trung điểm AB; mái có **4 mặt bên tam giác và không có đáy**. Bỏ qua đường viền và nếp gấp.
1. Tính độ dài \(SM\), đường cao của mặt bên \(SAB\).
2. Tính diện tích vật liệu làm 4 mặt bên.
3. Nếu mô hình được đóng kín đáy, tính thể tích hình chóp bên trong.

**Gợi ý (2):** (1) Từ tâm hình vuông đến trung điểm cạnh dài bao nhiêu? Tam giác SOM thuộc loại gì? (2) Để tính diện tích **mặt bên**, phải dùng SM hay SO? Thể tích lại dùng chiều cao nào?

**Lời giải.** Trong hình vuông cạnh 10, \(OM=5\) cm. Do \(SO\perp (ABCD)\), tam giác SOM vuông tại O, nên \(SM=\sqrt{12^2+5^2}=13\) cm. Diện tích một mặt bên là \(\frac12\cdot10\cdot13=65\) cm²; 4 mặt bên là \(4\cdot65=260\) cm². Diện tích đáy \(10^2=100\) cm²; thể tích hình chóp \(V=\frac13\cdot100\cdot12=400\) cm³. Không cộng đáy vào lượng vật liệu mái.

**Rubric /4:** xác định OM và đúng tam giác vuông (1); tính SM=13 (1); diện tích 4 mặt bên 260 cm² (1); thể tích 400 cm³ với SO đúng (1).  
**Lỗi:** dùng SO=12 làm chiều cao mặt bên; tính vật liệu gồm cả đáy; tính thể tích như hình lăng trụ.  
**Ôn bù:** WX20-GEO-001/002 (phân biệt đại lượng dài, diện tích và thể tích); hình chóp đều SGK G8 (S1 cần đối chiếu).

---

## G9-01 — Tần số ghép nhóm và ngưỡng cộng nhiều nhóm (CAND-G9-01)

- **Review grade/layer:** G9 / proposed KNTT-Core or Entrance10 context depending on S1; **do not fix layer until S1**.
- **Source inspiration (labelled entrance PDF, S3 status not independently authenticated):** \`de-thi-vao-10-mon-toan-ha-noi-2026-co-dap-an-va-loi-giai-chi-tiet-1780208820.pdf\`, printed page 1 Câu I.1 (frequency table).
- **Nearest existing:** WX21-STA-001/002 use raw category/bar values, not adjacent **half-open numerical bins** and relative frequencies.

**Đề bài.** Một thư viện khảo sát **80 học sinh** về thời gian đọc sách trong tuần (giờ) và lập bảng:

| Số giờ đọc | [0;2) | [2;4) | [4;6) | [6;8) |
|---|---:|---:|---:|---:|
| Số học sinh | 12 | 20 | 28 | 20 |

1. Xác định **tần số** và **tần số tương đối** của nhóm \([4;6)\).
2. Tính tỉ lệ học sinh đọc **ít nhất 4 giờ** mỗi tuần trong bảng.
3. Giải thích tại sao bảng **không cho biết chính xác** bao nhiêu học sinh đọc đúng 5 giờ.

**Gợi ý (2):** (1) Tần số là một số đếm; tần số tương đối phải chia cho cỡ mẫu nào? (2) “Ít nhất 4 giờ” bao gồm trọn vẹn những nhóm nào?

**Lời giải.** Nhóm [4;6) có tần số 28; tần số tương đối \(28/80=35\%\). Học sinh có ít nhất 4 giờ là những nhóm [4;6), [6;8): \(28+20=48\), chiếm \(48/80=60\%\). Nhóm [4;6) gộp mọi giá trị từ 4 đến dưới 6; không biết tần số riêng của đúng 5 giờ.

**Rubric /4:** xác định 28 (1); tính 35% (1); cộng đúng hai nhóm và 60% (1); giải thích giới hạn dữ liệu ghép nhóm (1).  
**Lỗi:** lấy phần trăm chia theo số nhóm thay vì 80; cộng nhóm [2;4) vào “ít nhất 4”; cho rằng cả 28 bạn đều đọc 5 giờ.  
**Ôn bù:** WX21-STA-001/002 (đọc bảng/biểu đồ); SGK G9 phần bảng tần số ghép nhóm S1.

---

## G9-02 — Đường tròn + đường cao + đồng dạng (CAND-G9-02)

- **Review grade/layer:** G9 / proposed Entrance10 transfer; need S1 concept mapping, no grade placement until verified.
- **Source inspiration (entrance-labelled PDF; authenticity unverified independently):** \`de-thi-vao-10-mon-toan-ha-noi-2026-co-dap-an-va-loi-giai-chi-tiet-1780208820.pdf\`, printed page 2 Câu IV.2. Geometry configuration intentionally distinct.
- **Nearest existing:** WX19-CIR-002 establishes cyclicity by opposite-angle sum then computes one angle; WX19-CIR-003 computes inscribed angles. This requires a **right-angle cyclicity proof and independent transfer to triangle similarity plus length**.

**Đề bài.** Cho tam giác \(ABC\) **có ba góc nhọn**, hai đường cao \(BD\perp AC\) tại \(D\in AC\) và \(CE\perp AB\) tại \(E\in AB\). (Vẽ hình đủ rõ và dùng đúng chân đường cao.)
1. Chứng minh bốn điểm \(B,C,D,E\) cùng thuộc một đường tròn; xác định đường kính của đường tròn ấy.
2. Chứng minh \(\triangle ADE\sim\triangle ABC\), ghi rõ các cặp cạnh tương ứng. **Có thể** sử dụng góc nội tiếp hoặc các tam giác vuông để chứng minh.
3. Biết \(\angle BAC=60^\circ\) và \(BC=12\) cm. Tính \(DE\).

**Gợi ý (3):** (1) Tìm hai góc vuông cùng chắn một đoạn thẳng cố định. (2) Trong các tam giác vuông ABD và ACE, so sánh \(AD/AB\) với \(AE/AC\). (3) Sau khi đồng dạng, xem tỉ số \(DE/BC\) bằng tỉ số nào liên quan đến \(\cos\angle A\).

**Lời giải.** Vì \(BD\perp AC\) và \(D\in AC\) nên \(\angle BDC=90^\circ\); vì \(CE\perp AB\) và \(E\in AB\), \(\angle BEC=90^\circ\). Suy ra D,E cùng thuộc đường tròn đường kính BC, cùng với B,C.
Trong tam giác vuông ABD, \(AD=AB\cos\angle BAC\); trong tam giác vuông ACE, \(AE=AC\cos\angle BAC\). Vì A nhọn, \(\cos A>0\), nên \(AD/AB=AE/AC=\cos A\). Lại có \(\angle DAE=\angle BAC\), suy ra \(\triangle ADE\sim\triangle ABC\) (c.g.c.), ứng A↔A, D↔B, E↔C. Vì thế \(DE/BC=\cos A\). Với \(\angle A=60^\circ\), \(DE=12\cos60^\circ=6\) cm.

**Rubric /5:** dựng hình và hai góc vuông đúng (1); xác định đường tròn đường kính BC (1); lập đúng hai tỉ số từ tam giác vuông (1); chứng minh đồng dạng và xác định tương ứng (1); tính DE=6, đơn vị (1).  
**Lỗi:** khẳng định B,C,D,E nội tiếp chỉ vì “có bốn điểm”; dùng sai tỉ số khi đồng dạng; quên chỉ rõ hai tam giác vuông trước khi dùng cos.  
**Ôn bù:** WX19-CIR-002/003 và WX17-SIM-002, WX18-TRI-001.

**Reviewer-specific checkpoint:** confirm that \(D,E\) lie **strictly inside** AC, AB under the stated acute-triangle hypothesis and that the cyclic proof is valid without needing an unprovided diagram; recommend a canonical labeled figure if needed.

---

## G9-03 — Hình trụ, mức đầy 75%, số lượt nguyên tối thiểu (CAND-G9-03)

- **Review grade/layer:** G9 / proposed Entrance10 transfer; S1 proof required for Core grade placement.
- **Source inspiration (entrance-labelled PDF, S3 unverified independently):** \`de-thi-vao-10-mon-toan-ha-noi-2026-co-dap-an-va-loi-giai-chi-tiet-1780208820.pdf\`, printed page 2 Câu IV.1. Original dimensions, proportion and context.
- **Nearest existing:** WX20-GEO-001 computes a box's volume; WX20-GEO-002 computes a cone's volume. Neither includes **cylindrical capacity, percent fill and ceiling integer rounds**.

**Đề bài.** Một bình đựng nước có dạng **hình trụ**, bán kính đáy **10 cm**, chiều cao **30 cm**. Lấy \(\pi\approx3{,}14\), xem thành bình có độ dày không đáng kể.
1. Tính **diện tích xung quanh** của bình.
2. Mỗi lần múc, người dùng chỉ đổ lượng nước bằng **75% thể tích bình** vào một bể rỗng dung tích **100 lít**. Cần **ít nhất bao nhiêu lần múc** để đủ nước cho bể? Giả sử các lượt sau giống nhau, riêng lượt cuối có thể không cần đổ hết bình. Biết \(1\) lít \(=1000\) cm³.
3. Kiểm tra rằng số lượt ít hơn một đơn vị là không đủ.

**Gợi ý (2):** (1) Diện tích xung quanh dùng bán kính và chiều cao theo phép nhân nào? (2) Đổi thể tích hình trụ ra lít, tính 75%, rồi thử hai số nguyên liên tiếp thay vì chỉ làm tròn số thập phân.

**Lời giải.** Diện tích xung quanh \(S_{xq}=2\pi rh=2\cdot3{,}14\cdot10\cdot30=1884\) cm². Thể tích bình \(V=\pi r^2h=3{,}14\cdot100\cdot30=9420\) cm³ \(=9{,}42\) lít. Mỗi lượt chuyển \(0{,}75\cdot9{,}42=7{,}065\) lít. Cần \(100/7{,}065\approx14{,}154\) lượt, vậy số lượt nguyên tối thiểu là **15**. Kiểm tra \(14\cdot7{,}065=98{,}91<100\), còn \(15\cdot7{,}065=105{,}975\ge100\); lượt cuối chỉ cần đổ phần còn thiếu.

**Rubric /5:** đúng \(S_{xq}=1884\) cm² (1); đúng \(V=9{,}42\) lít (1); đúng mỗi lượt 7,065 lít (1); suy ra 15 lượt nguyên (1); chứng minh 14 lượt chưa đủ bằng bất đẳng thức (1).  
**Lỗi:** dùng 75% diện tích thay vì thể tích; quên 1000 cm³/lít; làm tròn **xuống** 14 lượt; lẫn mặt đáy với xung quanh.  
**Ôn bù:** WX20-GEO-001/002; công thức hình trụ và chuyển đơn vị thể tích.

---

## CROSS-ITEM REASONING NOVELTY CHECK (8+ cross-topic controls)

| Candidate | Distinct key decision not yet in nearest WX | Competing existing items checked | Cloning verdict (pre-review only) |
|---|---|---|---|
| CAND-G6-01 | multi-modulus + shared remainder + bound/extra divisor | WX02-NUM-001,002,004 | New compared with canonical |
| CAND-G6-02 | successive **remaining-base** reverse fractions | WX02-NUM-003,002 | New compared with canonical |
| CAND-G7-01 | inverse 3-team allocation with a difference | WX03-RAT-001,002, WX09-SYS-006 | New |
| CAND-G7-02 | chain of congruence / isosceles/parallel/perpendicular | WX14-TRI-001,002, WX13-LIN-001,002, WX15-CEN-001 | New integrated proof |
| CAND-G8-01 | plan actual totals **not equal**; days and rate change | WX24-MOD-001, WX09-SYS-006 | New chronology |
| CAND-G8-02 | square pyramid slant height vs vertical height | WX20-GEO-001,002 | New solid |
| CAND-G9-01 | numerical half-open grouped intervals with inferred threshold | WX21-STA-001,002 | New data structure |
| CAND-G9-02 | right-angle cyclicity + similarity + length | WX19-CIR-002/003/004, WX17-SIM-002 | New connected reasoning |
| CAND-G9-03 | cylinder fill percentage + minimum integer trips | WX20-GEO-001,002, WX24-MOD-001 | New operational decision |

**Anti-inflation condition:** the author novelty verdict is **only a candidate claim**; NotebookLM should mark REVISE/REJECT if any reasoning signature is substantively equivalent to an existing WX, not merely because the category titles differ.

## REQUEST TO NOTEBOOKLM — first independent pass, all nine in one batch

Select permanent sources **Master Plan v1.2.1** and **NotebookLM Math Review Rules v1.2**. Select this **one temporary candidate packet** and the S1 KNTT textbook materials genuinely available for matching topics. Optionally select the source classification/crosswalk material as S2/S3 provenance context, but do **not** select the author's prior audit as proof of a candidate's correctness or novelty.

Check **all nine** item statements, worked solutions, conventions, measurements, every deduction, false assumptions, well-posedness, D4 writing depth, D6 hints and rubric, and nontrivial structural difference against the 75 canonical WX items. For novelty audit, select or consult the **complete current 75-item catalog**; without it, return **INSUFFICIENT_EVIDENCE** for clone checking rather than PASS. For KNTT grade and lesson, demand S1; **do not infer class from semester-exam label**. For S3 entrance-exam label, distinguish source-labelled copy from authentication by external authority.

Return exactly nine item rows, each with MATH, PEDAGOGY, NOVELTY, S1_BOUNDARY and OVERALL item verdict, issue priority P0/P1/P2, exact text revision if any, and citations to selected sources. End with:

~~~text
PACKET_ID|MATH-WRITTEN-GAP9-20261023-R0
SOURCE_BLOB|5141a40bf1b8f8763257857d3b805d681a0956fa
EXPECTED|9
REVIEWED|<number>
ITEM|CAND-G6-01|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G6-02|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G7-01|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G7-02|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G8-01|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G8-02|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G9-01|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G9-02|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
ITEM|CAND-G9-03|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
MISSING_IDS|NONE/or list
UNEXPECTED_IDS|NONE/or list
OVERALL|PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE
AUTHORIZATION|REVIEW_ONLY_NO_DEPLOY
~~~

**Critical release gate:** No creation of canonical IDs, no app JSON edits, no site/UI changes, no Readiness or learner-history writes, and no deployment until independent review is received, checked 9/9 and separately owner-authorized.
