# NotebookLM Toán THPT — R4 Pilot Bài 16 · Tái thẩm định sau sửa P1/P2

**Packet ID:** THPT-G10-B16-R4-POSTFIX-REVIEW-20261027  
**Previous:** THPT-G10-B16-R4-MKDOCS-SOURCE-LOCK-20261027  
**Status:** REVISION_CANDIDATE / ACADEMIC_CLEARANCE_NO / PREVIEW_ONLY  
**Scope:** Toán 10 KNTT, Chương VI, Bài 16: Hàm số bậc hai; NOT a complete 10–12 topic.  
**Repository:** TMA2015/roadmap-toan-thcs, Draft PR #612.  

## Chọn Sources khi review

- 5 **Permanent Sources THPT v1.0** (bộ quy tắc, không phải nguồn chứng minh nội dung toán).
- SGK Toán 10 KNTT tập 2 (Bài 16, trang in 11–16 theo receipt NotebookLM đợt trước) và SBT Toán 10 KNTT tập 2 (bài liên quan, trang in 10–14 theo receipt).
- **File này là Batch Source mới** chứa snapshot ứng viên sau chỉnh sửa. Không tự đánh dấu PASS do có sửa code.
- Nếu kiểm tra kiến thức tiền đề/tiếp nối, chỉ chọn SGK lớp liên quan thực sự có trong notebook.

## A. Biên bản trước và mục tiêu sửa

Trước sửa: ACADEMIC_OVERALL=REVISIONS_REQUIRED; ACADEMIC_CLEARANCE=NO; P0=0; B16_OUT_01,02,05 FULL; B16_OUT_03 (quy trình 4 bước vẽ) PARTIAL; B16_OUT_04 (bảng tập giá trị tổng quát) PARTIAL.

- P1-01: B16 bổ sung bốn bước chuẩn, điều kiện giao Ox có thể không tồn tại.
- P1-02: B16 bổ sung k=-Delta/(4a), bảng biến thiên, cực trị và tập giá trị khi a>0, a<0.
- P1-03: READINESS-THPT-DEMO-01 bổ sung YAML demo_scope=TECHNICAL_DEMO_ONLY; mastery_credit=false, và thuộc tính HTML tương ứng; mã JS chỉ khởi tạo demo khi metadata hợp lệ. Không có lưu điểm/tiến độ.
- P2-01: SVG parabol y=x²-4x+3 dựng từ phương trình; có trục đối xứng nét đứt x=2 với nhãn, đỉnh I(2;−1), hai giao Ox (1;0),(3;0) và giao Oy (0;3).
- Kiến thức chuyên đề trục dọc ghi rõ PILOT_PARTIAL_G10. Chuyên đề lớp 10–12 vẫn chưa hoàn chỉnh.

## B. Snapshot thật — trang SGK B16 sau sửa

**Repository path:** `docs/thpt-preview/sgk/chuong-vi/bai-16.md`

```markdown
# Bài 16. Hàm số bậc hai

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BÀI MẪU R4</p>
<p class="thpt-r4-lead">Bản xem thử cách học từng bài SGK KNTT. NotebookLM THPT đã thẩm định đợt R4 và yêu cầu bổ sung nội dung; bản chỉnh sửa này chờ tái kiểm duyệt. Bài tương tác chỉ dùng thử, không ghi điểm hay lưu lịch sử.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VI">
<a href="../">Tổng quan Chương VI</a>
<span class="is-current" aria-current="page">Bài 16 · Hàm số bậc hai</span>
<span aria-disabled="true">Bài khác · Chưa có bản mẫu</span>
</nav>
</div>

## 1. Khái niệm

Một **hàm số bậc hai** có dạng

\[
y=ax^2+bx+c,\qquad a,b,c\in\mathbb{R},\ a\ne 0.
\]

Tập xác định là \(\mathbb{R}\). Điều kiện \(a\ne 0\) là bắt buộc; nếu \(a=0\) thì biểu thức không còn là hàm bậc hai.

## 2. Đồ thị và tính chất

Đồ thị là một **parabol**. Ta viết dưới dạng đỉnh:

\[
y=a(x-h)^2+k,\qquad h=-\frac{b}{2a},\quad k=f(h)=-\frac{\Delta}{4a},\qquad \Delta=b^2-4ac.
\]

- Đỉnh \(I(h;k)\), trục đối xứng \(x=h\).
- Với \(a>0\): parabol mở lên, hàm giảm trên \(( -\infty;h )\), tăng trên \((h;+\infty)\), đạt **GTNN** \(k\) tại \(x=h\).
- Với \(a<0\): parabol mở xuống, hàm tăng trên \(( -\infty;h )\), giảm trên \((h;+\infty)\), đạt **GTLN** \(k\) tại \(x=h\).

**Bảng biến thiên và tập giá trị tổng quát** (đặt \(h=-\frac{b}{2a}\), \(k=-\frac{\Delta}{4a}\)):

| Điều kiện | Nghịch biến | Đồng biến | Cực trị tại \(x=h\) | Tập giá trị \(T\) |
|---|---|---|---|---|
| \(a>0\) | \((-\infty;h)\) | \((h;+\infty)\) | GTNN \(k\) | \(\left[-\frac{\Delta}{4a};+\infty\right)\) |
| \(a<0\) | \((h;+\infty)\) | \((-\infty;h)\) | GTLN \(k\) | \(\left(-\infty;-\frac{\Delta}{4a}\right]\) |

### Bốn bước vẽ đồ thị parabol

1. **Xác định đỉnh** \(I\left(-\frac{b}{2a};-\frac{\Delta}{4a}\right)\).
2. **Vẽ trục đối xứng** \(x=-\frac{b}{2a}\) và nhận biết chiều mở qua dấu \(a\).
3. **Xác định các điểm đặc trưng**: giao với \(Oy\) là \((0;c)\); giải \(ax^2+bx+c=0\) để tìm giao với \(Ox\) **nếu có**; có thể lấy thêm một cặp điểm đối xứng qua trục, nhất là khi không có đủ giao điểm.
4. **Vẽ parabol** đi qua các điểm đã xác định, có đỉnh và trục đối xứng đúng; hai nhánh đối xứng qua trục.

*Lưu ý:* Nếu \(\Delta<0\), parabol không cắt \(Ox\); nếu \(\Delta=0\), parabol tiếp xúc \(Ox\) tại đỉnh. Không được tự giả định luôn có hai giao điểm.

## 3. Ví dụ

Xét \(f(x)=x^2-4x+3=(x-2)^2-1\). Do đó:

- Đỉnh \(I(2;-1)\), trục \(x=2\).
- Hệ số \(a=1>0\), nên hàm có giá trị nhỏ nhất \(-1\).
- Khi \(y=0\), ta được \((x-1)(x-3)=0\), vì vậy đồ thị cắt \(Ox\) tại \((1;0)\), \((3;0)\).
- Khi \(x=0\), ta có \(y=3\), nên đồ thị cắt \(Oy\) tại \((0;3)\).
- Hàm số nghịch biến trên \((-\infty;2)\), đồng biến trên \((2;+\infty)\) và có tập giá trị \(T=[-1;+\infty)\).

Áp dụng **bốn bước vẽ**: xác định \(I(2;-1)\) → kẻ trục \(x=2\) → chấm \((1;0)\), \((3;0)\), \((0;3)\) cùng điểm đối xứng \((4;3)\) → nối thành parabol mở lên.

<figure class="thpt-r4-plot" data-thpt-quadratic-plot>
<svg viewBox="0 0 640 360" role="img" aria-label="Đồ thị y bằng x bình phương trừ 4x cộng 3, đỉnh I(2;−1), trục nét đứt x=2, cắt Ox ở (1;0) và (3;0), cắt Oy ở (0;3)">
<title>Parabol y = x² − 4x + 3</title>
<text x="20" y="28">y = x² − 4x + 3 · Đỉnh I(2;−1), nghiệm 1 và 3</text>
</svg>
<figcaption>Đồ thị được dựng từ chính hàm số của ví dụ, không phải ảnh trang trí hoặc hình chép từ SGK.</figcaption>
</figure>

## 4. Luyện tập

**Thẻ Core chung** dùng một nội dung/mã canonical minh họa, truy cập từ bài SGK, thư viện Core và chuyên đề. Core có gợi ý; không có tab Kiến thức thứ hai vì lý thuyết nằm ngay trên trang bài học.

<div class="math-library-entry-grid" data-thpt-r4>
<a class="math-library-entry" href="../../../chuyen-de/ham-so/core/"><strong>🧩 Core · Tọa độ đỉnh (bản mẫu)</strong><span>Mở một thẻ Core dùng chung — không tạo ba bộ câu hỏi trùng nhau.</span></a>
</div>

## 5. Vận dụng

Hàm số bậc hai có thể biểu diễn diện tích hình chữ nhật khi chu vi được giữ cố định. [Xem bài tự luận mỏ neo mẫu](../../thu-vien/tu-luan.md).

!!! warning "Chỉ là bài học trình diễn"
    Đã cập nhật theo biên bản NotebookLM R4 có kết luận REVISIONS_REQUIRED. Những sửa đổi này chưa được NotebookLM tái kiểm duyệt; ACADEMIC_CLEARANCE vẫn là NO, không chấm tiến độ và không phát hành.

```

## C. Snapshot thật — trang chuyên đề (chỉ nhánh hàm số bậc hai)

**Repository path:** `docs/thpt-preview/chuyen-de/ham-so/kien-thuc.md`

```markdown
---
hide:
  - toc
pilot_scope: PILOT_PARTIAL_G10
---

<div data-thpt-r4 class="thpt-r4-screen"><p class="thpt-r4-eyebrow">CHUYÊN ĐỀ · BẢN MẪU THPT</p><p class="thpt-r4-lead">Hàm số và đồ thị · PILOT_PARTIAL_G10 · Minh họa nhánh hàm số bậc hai của lớp 10; chưa phải chuyên đề 10–12 hoàn chỉnh.</p>
<nav class="thpt-r4-topic-steps" aria-label="Các phần học của chuyên đề">
<a href="../core/" >01 · Thẻ Core</a>
<a href="../kien-thuc/" aria-current="page">02 · Kiến thức</a>
<a href="../luyen-tap/" >03 · Luyện tập</a>
<a href="../tu-kiem-tra/" >04 · Tự kiểm tra</a>
</nav>
<nav class="thpt-r4-section-links" aria-label="Di chuyển nhanh trong bài"><a href="#ban-do-kien-thuc">Bản đồ</a><a href="#kien-thuc">Kiến thức</a><a href="#kien-thuc-lien-quan">Liên quan</a><a href="#dang-bai">Dạng bài</a><a href="#loi-sai-thuong-gap">Lỗi sai</a></nav></div>

# Kiến thức — Hàm số và đồ thị

## Bản đồ kiến thức

<div class="thpt-r4-flow" aria-label="Các mạch kiến thức liên quan"><span>THCS: Hàm số, phương trình bậc hai</span><b>→</b><span>Lớp 10: Hàm số bậc hai, đồ thị</span><b>→</b><span>Lớp 11–12: Biến thiên, đạo hàm, khảo sát</span></div>

**Lưu ý:** Các liên kết tiền đề/tiếp nối cần kiểm tra toàn chương trình; sơ đồ này chỉ minh họa đúng phần đã xét.

## Kiến thức

=== "Khái niệm"

    Hàm số bậc hai có dạng \(y=ax^2+bx+c\) với \(a\neq0\), tập xác định \(\mathbb{R}\).

    Đưa về dạng đỉnh:

    \[
    y=a(x-h)^2+k,\qquad h=-\frac{b}{2a},\quad k=f(h).
    \]

=== "Đồ thị và tính chất"

    Đồ thị là parabol, trục đối xứng \(x=h\), đỉnh \(I(h;k)\). Khi \(a>0\) đồ thị mở lên và có GTNN \(k\); khi \(a<0\) đồ thị mở xuống và có GTLN \(k\).

    Chiều biến thiên đổi tại hoành độ đỉnh \(h\). Khi \(a>0\), hàm giảm rồi tăng với tập giá trị \(T=[k;+\infty)\); khi \(a<0\), tăng rồi giảm với \(T=(-\infty;k]\). Ở đây \(k=-\frac{\Delta}{4a}\), \(\Delta=b^2-4ac\).

=== "Ví dụ"

    Với \(y=x^2-4x+3=(x-2)^2-1\), đỉnh \(I(2;-1)\), trục \(x=2\), giao điểm với \(Ox\) có hoành độ \(1\) và \(3\).

## Kiến thức liên quan

- **Kiến thức nền THCS:** phương trình bậc hai và hàm số đơn giản.
- **Theo SGK KNTT:** [Lớp 10 · Chương VI · Bài 16](../../sgk/chuong-vi.md).
- **Mở rộng sau này:** tính đơn điệu và các ứng dụng đạo hàm; chưa liên kết vì chưa biên soạn.

## Dạng bài

=== "Tìm đỉnh và trục"

    **Nhận diện:** biểu thức bậc hai cho theo hệ số \(a,b,c\) hoặc dạng đỉnh.

    **Phương pháp:** tính \(h=-b/(2a)\), rồi \(k=f(h)\).

    **Luyện ngay:** [Core chung](core.md) hoặc [Practice theo chuyên đề](luyen-tap.md).

=== "Vẽ đồ thị và giao trục"

    **Nhận diện:** yêu cầu xác định chiều mở, đỉnh, trục và các giao điểm.

    **Phương pháp 4 bước:** (1) Tìm đỉnh \(I\); (2) vẽ trục đối xứng, xác định chiều mở theo dấu \(a\); (3) tìm giao với \(Oy\), giao với \(Ox\) nếu có và một cặp điểm đối xứng; (4) vẽ parabol qua các điểm đặc trưng. Không mặc định có hai giao điểm với \(Ox\).

    **Luyện ngay:** [Luyện tập chuyên đề](luyen-tap.md).

=== "Thi tốt nghiệp THPT"

    Đây là **bộ lọc của các dạng bài phía trên**, không tạo thêm một kho dạng bài khác. Chỉ gắn nhãn đề thi theo **năm và nguồn xác minh**; bản mẫu hiện **chưa gắn bất kỳ đề thi thực tế nào**.

    [Mở thư viện tự luận và bài mỏ neo](../../thu-vien/tu-luan.md).

## Lỗi sai thường gặp

- Nhầm dấu hoành độ đỉnh trong \(a(x-h)^2+k\).
- Kết luận luôn có hai nghiệm thực khi cắt trục hoành; thực tế có thể không có, có một nghiệm kép hoặc có hai nghiệm.
- Quên điều kiện \(a\neq0\) khi gọi hàm bậc hai.

> **Bản mẫu chưa nghiệm thu học thuật.** Trang kiến thức được rút gọn; hướng dẫn luyện tập và đánh giá chỉ nằm ở các mục chuyên trách. Cột mục lục phải của trang này được ẩn, thanh di chuyển nhanh nằm ngay phía trên.
```

## D. Snapshot thật — trang Readiness, kể cả metadata

**Repository path:** `docs/thpt-preview/chuyen-de/ham-so/tu-kiem-tra.md`

```markdown
---
readiness_item_id: READINESS-THPT-DEMO-01
demo_scope: TECHNICAL_DEMO_ONLY
mastery_credit: false
---

<div class="thpt-r4-screen" data-thpt-r4><nav class="thpt-r4-topic-steps" aria-label="Các phần học của chuyên đề">
<a href="../core/" >01 · Thẻ Core</a>
<a href="../kien-thuc/" >02 · Kiến thức</a>
<a href="../luyen-tap/" >03 · Luyện tập</a>
<a href="../tu-kiem-tra/" aria-current="page">04 · Tự kiểm tra</a>
</nav></div>

# Tự kiểm tra — Hàm số và đồ thị

**Chỉ kiểm thử thao tác (TECHNICAL_DEMO_ONLY). Không dùng để kết luận mức độ thành thạo.**

**Readiness độc lập:** không gợi ý, không biết đúng/sai trong lúc làm. Học sinh có thể chuyển câu, quay lại sửa đáp án; chỉ sau **Final Submit** mới được xem kết quả và lời giải.

<div class="thpt-r4-exercise" data-thpt-readiness data-demo-scope="TECHNICAL_DEMO_ONLY" data-mastery-credit="false">
<p class="thpt-r4-eyebrow">READINESS-THPT-DEMO-01 · KHÔNG GỢI Ý · 2 CÂU DEMO</p>
<p data-thpt-progress aria-live="polite">Câu 1/2</p>
<form><div data-thpt-question></div>
<div class="thpt-r4-buttons"><button class="thpt-r4-action" type="button" data-thpt-previous>Previous</button><button class="thpt-r4-action" type="button" data-thpt-next>Next</button><button class="thpt-r4-action" type="submit" data-thpt-final>Final Submit</button></div>
<p data-thpt-feedback role="status" aria-live="polite"></p></form>
<div data-thpt-solution hidden></div></div>

## Tiêu chí cần đạt

Khi đánh giá thực tế, học sinh cần thể hiện năng lực đọc dạng hàm bậc hai, xác định đỉnh/trục, nhận xét chiều mở và vận dụng giải dạng bài. **Hai câu Demo này không đủ làm chuẩn kết luận thành thạo một chuyên đề**; bộ Readiness chính thức phải được kiểm duyệt SGK/SBT và thiết kế đủ các kỹ năng.

[Ôn lại Kiến thức](kien-thuc.md) · [Luyện tập có gợi ý](luyen-tap.md).
```

## E. Mã tính và gắn nhãn đồ thị SVG

**Repository path:** `docs/assets/javascripts/thpt-r4-preview.js`; phần dưới chỉ là hàm vẽ đồ thị, KHÔNG đại diện toàn bộ JS runtime.

```javascript
 function initQuadraticPlot(){
  document.querySelectorAll("[data-thpt-quadratic-plot] svg").forEach(svg=>{
   if(svg.dataset.r4Plotted==="1")return;
   svg.dataset.r4Plotted="1";
   const ns="http://www.w3.org/2000/svg";
   const xmin=-0.3,xmax=4.3,ymin=-1.5,ymax=5.2;
   const sx=x=>55+(x-xmin)/(xmax-xmin)*535;
   const sy=y=>315-(y-ymin)/(ymax-ymin)*270;
   function elt(tag,attrs,text){
    const node=document.createElementNS(ns,tag);
    Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,String(v)));
    if(text!==undefined)node.textContent=text;
    svg.append(node);return node;
   }
   for(let x=0;x<=4;x++){
    elt("line",{x1:sx(x),y1:45,x2:sx(x),y2:315,stroke:"#d1d9e8","stroke-width":.8});
    elt("text",{x:sx(x),y:332,"text-anchor":"middle",fill:"#5a6a81","font-size":13},String(x));
   }
   for(let y=-1;y<=5;y++){
    elt("line",{x1:55,y1:sy(y),x2:590,y2:sy(y),stroke:"#d1d9e8","stroke-width":.8});
    elt("text",{x:47,y:sy(y)+4,"text-anchor":"end",fill:"#5a6a81","font-size":12},String(y));
   }
   elt("line",{x1:55,y1:sy(0),x2:596,y2:sy(0),stroke:"#50627d","stroke-width":1.6});
   elt("line",{x1:sx(0),y1:43,x2:sx(0),y2:317,stroke:"#50627d","stroke-width":1.6});
   elt("line",{x1:sx(2),y1:45,x2:sx(2),y2:315,stroke:"#8e9ab0","stroke-dasharray":"5 5","data-thpt-symmetry-axis":"x=2"});
   elt("text",{x:sx(2)+8,y:58,fill:"#465576","font-size":13},"x = 2");
   let d="";
   for(let i=0;i<=180;i++){
    const x=xmin+(xmax-xmin)*i/180,y=x*x-4*x+3;
    d+=(i?"L":"M")+sx(x).toFixed(2)+" "+sy(y).toFixed(2)+" ";
   }
   elt("path",{d,fill:"none",stroke:"#354fc6","stroke-width":3,"stroke-linecap":"round"});
   for(const [x,y,name]of [[1,0,"(1;0)"],[3,0,"(3;0)"],[2,-1,"I(2;−1)"],[0,3,"(0;3)"]]){
    elt("circle",{cx:sx(x),cy:sy(y),r:5,fill:"#22796f",stroke:"#ffffff","stroke-width":1.5});
    const dx=x===1?-48:12;
    const dy=y===0?-12:4;
    elt("text",{x:sx(x)+dx,y:sy(y)+dy,fill:"#164c45","font-size":13,"font-weight":"bold"},name);
   }
  });
 }

```

## F. Năm item cần tái đối chiếu — giữ nguyên canonical ID

| Item ID | Role | Đề và đáp án kỳ vọng | Kết luận trước |
|---|---|---|---|
| THPT-CORE-QF01 | CORE | y=(x+3)²−5: hoành độ đỉnh = −3 | PASS |
| PRACTICE-THPT-DEMO-01 | TOPIC_PRACTICE | y=x²−4x+3: nghiệm x=1 và x=3 | PASS |
| READINESS-THPT-DEMO-01 | TOPIC_READINESS kỹ thuật | y=(x−4)²+2: tung độ đỉnh 2; y=−(x−1)²+5: GTLN 5 | REVISE (demo scope) |
| HPT-WRI-DEMO-01 | WRITTEN | y=x²−6x+7=(x−3)²−2; I(3;−2), GTNN −2 | PASS |
| HPT-WRI-DEMO-ANCHOR-01 | WRITTEN_ANCHOR | Chu vi 24 m: x(12−x)=−(x−6)²+36; tối ưu 6×6 m, diện tích 36 m² | PASS |

Bài Readiness 2 câu không có đủ độ phủ để nhận xét thành thạo chuyên đề; không nâng cấp kết luận chỉ nhờ 2 câu mẫu.

## G. Đầu ra cần NotebookLM trả lại

1. SOURCE_RECEIPT: SGK/SBT gốc, trang in, phần thực đọc, trích dẫn có chứng cứ.
2. B16_OUTCOME_MATRIX: cả 5 outcomes FULL/PARTIAL/MISSING/INCORRECT; đặc biệt kiểm nghiệm 4 bước vẽ parabol, các trường hợp Delta < 0 / = 0, công thức tập giá trị, từng khoảng biến thiên.
3. MATH_AND_GRAPH_CHECK: đối chiếu phương trình, tọa độ, nội dung nhãn SVG, tính nhất quán ví dụ; nếu mã vẽ khó kiểm chứng trong NotebookLM thì nói rõ hạn chế này.
4. EXERCISE_REGISTER: đúng 5 ID, trạng thái sau sửa PASS/REVISE/NOT_REVIEWED; phân biệt nội dung toán đúng và giới hạn Readiness kỹ thuật.
5. P0_P1_P2_FINDINGS: còn lỗi nào, sửa tối thiểu, trích dẫn; gắn phạm vi chuyên đề PILOT_PARTIAL_G10.
6. ACADEMIC_OVERALL: PASS / REVISIONS_REQUIRED / BLOCKED_SOURCE và ACADEMIC_CLEARANCE: YES / NO; YES chỉ nói về học thuật pilot đã chứng minh, không cấp phép phát hành.

**Không lấy lời mô tả sửa đổi làm bằng chứng, hãy đọc snapshot đầy đủ và đối chiếu S1 thực sự.**
