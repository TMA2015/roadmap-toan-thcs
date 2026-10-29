# Temp · THPT G10 Chương IX B26–B27 · NotebookLM D5+D6 review R01

**PACKET_ID:** THPT-G10-CHIX-B26-B27-D5D6-ACADEMIC-R01  
**REVIEW_SNAPSHOT:** This Markdown file in full (not a GitHub working draft). Academic status NOT_REVIEWED.  
**LEARNING_PATH:** SGK_CHAPTER / PUBLIC_FORMATIVE_ONLY; no independent readiness or new canonical items.  
**MASTER_PLAN_VERSION:** THPT-v2.0; 5 Permanent THPT Sources v2.0 only.  
**SOURCE_HEAD:** Draft PR #616, `1c205a9a87f5e0fc2563be14e1c1a911a14c6d76`.  
**D1–D4 RECEIPT:** 16/16 public canonical IDs reviewed, source blob `05c3dd40a094b4b34c28b48cc72d1752c21190fe`.  
**SOURCE FORMATIVE JS BLOB:** `caf4ca6f8866a2cb3377dfdfa73d723c0e5bd5f0` (14 unique formative).  
**SOURCE WRITTEN BLOB:** `51c5f78e41d569fff11070e0f48f3ab25f58b587` (two Written, one Anchor label).  
**AUTHORING D6 SOURCE:** `THPT_G10_CHIX_B26_B27_D6_HELP_REMEDIATION_CANDIDATE_v0.1.md` blob `79de21d2538b5dffe6483e58a4b11c06644a57b5`.  
**SOURCE FIG01 SVG BLOB:** `e03d92262abb4aa99e88da565f07b7054adc803e`.  
**SOURCE FIG02 SVG BLOB:** `877abd0e755950e6112f1c2aaa33f281027ad33f`.  
**DELTA_CLASS:** DELTA_C_ACADEMIC_MATERIAL; no existing stem, key, rubric or hint modified.  
**SOURCE_S1:** SGK/SBT KNTT Toán 10 Tập 2, B26–B27. Older ChIX receipts quote SGK B26 pp.77–82, B27 pp.83–87 and SBT pp.60–69; other project source ranges overlap, so reviewer MUST verify actual printed page numbering from S1 PDF. Do not accept page claims silently.  
**BOUNDARY:** Existing six private ChIX SGK Readiness candidates previously reviewed are **0 active**, keys/stems not in this packet. Topic Readiness not reviewed. No Mastery scoring.  

## A. Phạm vi cần kiểm toán

- D5: **2 source-locked SVG figures** below, including full original XML, mathematical model and caption. They are new teaching images, not answer keys for independent assessment. Reviewer should check math and SGK S1 applicability. Visual font/browser/device QA is separately required; not automatically NotebookLM PASS.
- D6: **4 new remediation HELP_ID** (B26 x2, B27 x2), not `item_id`; exact 16 existing canonical IDs mapped in the table. Check mistake diagnosis → mathematical correction → self-fix steps → prerequisites → reuse linked items.
- D1/D2/D3/D4 remain bound to earlier independent reviewer snapshots; do not regrade previously reviewed questions merely because they are mentioned here, and do not infer any new chapter-level PASS.

## B. Canonical ID reconciliation (metadata only)

| Bài | 7 existing formative IDs | Existing Written ID |
|---|---|---|
| B26 | `THPT-G10-B26-C01`, `THPT-G10-B26-C02`, `THPT-G10-B26-P01`, `THPT-G10-B26-P02`, `THPT-G10-B26-P03`, `THPT-G10-B26-P04`, `THPT-G10-B26-P05` | `THPT-G10-CHIX-W26-01` |
| B27 | `THPT-G10-B27-C01`, `THPT-G10-B27-C02`, `THPT-G10-B27-P01`, `THPT-G10-B27-P02`, `THPT-G10-B27-P03`, `THPT-G10-B27-P04`, `THPT-G10-B27-P05` | `THPT-G10-CHIX-W27-ANCHOR-01` |

**Count:** 14 formative + 2 Written = 16 unique canonical items, 4 unique HELP_ID; zero new `item_id` and zero changes to old math/answers. Anchor is a Written label only.

## C. Four D6 remediation cards — new content requiring review

### D6-G10-B26-01 · Đồng nhất nhãn kết quả với kết quả sơ cấp

**Bài / outcome:** B26 — không gian mẫu, biến cố, điều kiện đồng khả năng

**Dấu hiệu sai:** Liệt kê kết quả bằng tên màu hoặc tổng chấm nhưng giả định các tên/tổng có xác suất bằng nhau; cũng có thể quên thứ tự của hai lần tung.

**Bản chất toán và điều kiện:** Định nghĩa cổ điển P(A)=n(A)/n(Ω) chỉ áp dụng khi Ω hữu hạn, n(Ω)>0 và mọi kết quả sơ cấp được chọn có khả năng như nhau. Nhãn gộp nhiều kết quả sơ cấp có thể không đồng khả năng.

**Tự sửa theo bước:** (1) Mô tả phép thử thật sự và một kết quả đầy đủ (ô vật lí, cặp có thứ tự nếu có hai bước). (2) Liệt kê/sơ đồ cây các kết quả sơ cấp. (3) Giải thích vì sao chúng đồng khả năng, không suy từ chữ “ngẫu nhiên”. (4) Xác định A⊆Ω rồi mới đếm. (5) Tự kiểm 0≤P(A)≤1.

**Kiến thức cần ôn:** B26 §26.1–26.2, 26.4; quy tắc nhân B23.

**Câu canonical đã có để quay lại:** `THPT-G10-B26-C01`, `THPT-G10-B26-C02`, `THPT-G10-B26-P02`, `THPT-G10-B26-P05`, `THPT-G10-CHIX-W26-01`

**Placement:** Public formative help only; no evidence for SGK_CHAPTER_READINESS or TOPIC_READINESS.

### D6-G10-B26-02 · Nhầm “hoặc”, biến cố đối và xác suất nhỏ

**Bài / outcome:** B26 — biến cố đối, tập hợp biến cố, nguyên lí xác suất bé

**Dấu hiệu sai:** Cộng hai số trường hợp có giao nhau mà không trừ phần giao; mô tả “A không xảy ra” bằng một tập thiếu kết quả; coi xác suất rất nhỏ là 0 hoặc số lần xuất hiện chắc chắn đúng bằng nP(A).

**Bản chất toán và điều kiện:** A và biến cố đối Ā phân hoạch Ω: Ā=Ω\A, P(A)+P(Ā)=1. Với các biến cố chồng lấn, n(A∪B)=n(A)+n(B)−n(A∩B) trong mô hình hữu hạn; P(A)>0 dù nhỏ không đồng nghĩa A bất khả.

**Tự sửa theo bước:** (1) Viết rõ Ω và các tập A, B bằng kết quả sơ cấp. (2) Tô/vẽ phần giao nếu có chữ “hoặc”. (3) Viết Ā bằng câu chữ và Ω\A, kiểm A∩Ā=∅. (4) Đếm không lặp, tính xác suất khi có đồng khả năng. (5) Nếu phát biểu về xác suất bé, chỉ kết luận “khó xảy ra”, không kết luận “không thể” hay bảo đảm tần suất.

**Kiến thức cần ôn:** B26 §26.2–26.5; tập hợp và phép giao/hợp cơ bản.

**Câu canonical đã có để quay lại:** `THPT-G10-B26-P01`, `THPT-G10-B26-P03`, `THPT-G10-B26-P04`, `THPT-G10-CHIX-W26-01`

**Placement:** Public formative help only; no evidence for SGK_CHAPTER_READINESS or TOPIC_READINESS.

### D6-G10-B27-01 · Đếm lá sơ đồ cây không đồng khả năng

**Bài / outcome:** B27 — phép thử nhiều bước, có/không hoàn lại

**Dấu hiệu sai:** Thấy sơ đồ cây có nhiều lá rồi chia số lá thuận lợi cho tổng lá mà không kiểm điều kiện chọn từng bước; hoặc quên rằng xác suất nhánh sau có thể thay đổi khi không hoàn lại.

**Bản chất toán và điều kiện:** Đếm lá theo định nghĩa cổ điển chỉ đúng khi mọi lá của Ω đã chọn là đồng khả năng. Rút không hoàn lại làm thay đổi số phần tử còn lại và các xác suất có điều kiện. Nếu mô hình không bảo đảm đồng khả năng, không dùng số lá thuần túy làm mẫu số; cần chuyển sang mô hình đủ chi tiết hoặc nêu thiếu dữ kiện.

**Tự sửa theo bước:** (1) Xác định thứ tự các bước và có hoàn lại hay không. (2) Tạo đúng một nhánh cho mỗi lựa chọn có thể xảy ra ở mỗi trạng thái. (3) Kiểm tính đồng khả năng của từng kết quả hoàn chỉnh/lá trước khi đếm. (4) Gom các lá thỏa biến cố, bảo đảm không đếm trùng. (5) Soát kết quả trong [0,1], đối chiếu bằng cách đếm cặp.

**Kiến thức cần ôn:** B23 quy tắc nhân; B26 §26.4; B27 §27.2.

**Câu canonical đã có để quay lại:** `THPT-G10-B27-C01`, `THPT-G10-B27-C02`, `THPT-G10-B27-P03`, `THPT-G10-B27-P04`, `THPT-G10-B27-P05`

**Placement:** Public formative help only; no evidence for SGK_CHAPTER_READINESS or TOPIC_READINESS.

### D6-G10-B27-02 · Lẫn mẫu có thứ tự, tổ hợp và biến cố ít nhất một

**Bài / outcome:** B27 — lựa chọn mô hình tổ hợp, biến cố đối

**Dấu hiệu sai:** Đếm mẫu bằng tổ hợp nhưng đếm trường hợp thuận lợi theo chuỗi có thứ tự; hoặc đếm “ít nhất một” bằng cộng các trường hợp giao nhau; cho rằng mọi cặp không thứ tự khi gieo hai xúc xắc phân biệt đều đồng khả năng.

**Bản chất toán và điều kiện:** Tử và mẫu phải đếm theo cùng loại kết quả sơ cấp và cùng giả thiết đồng khả năng. Với chọn đồng thời k đối tượng phân biệt thành một nhóm đồng khả năng, dùng C(n,k) nhất quán. “Ít nhất một” có thể chuyển sang biến cố đối “không có”, nhưng phải mô tả chính xác phần bù trong Ω.

**Tự sửa theo bước:** (1) Hỏi có xét thứ tự hay không và ghi vào định nghĩa Ω. (2) Với nhóm chọn đồng thời có khả năng như nhau, dùng tổ hợp cho cả tử và mẫu; với chuỗi nhiều bước, dùng kết quả có thứ tự nhất quán. (3) Kiểm các trường hợp thuận lợi rời nhau. (4) Thử biến cố đối để tránh đếm giao nhau. (5) Xác nhận 0≤P≤1; tự đối chiếu bằng cách khác.

**Kiến thức cần ôn:** B24 hoán vị/chỉnh hợp/tổ hợp; B26 biến cố đối; B27 §27.1, 27.3–27.4.

**Câu canonical đã có để quay lại:** `THPT-G10-B27-P01`, `THPT-G10-B27-P02`, `THPT-G10-B27-P05`, `THPT-G10-CHIX-W27-ANCHOR-01`

**Placement:** Public formative help only; no evidence for SGK_CHAPTER_READINESS or TOPIC_READINESS.

## D. D5 SVG FIG01 — B26 xu × xúc xắc, bảng 2×6

**Objective:** kết quả sơ cấp đồng khả năng; một kết quả là `(mặt xu, số chấm)`, n(Ω)=12. Event A: số chấm chia hết cho 3. Exactly 4 highlighted cells, P(A)=4/12=1/3. This example is distinct from the existing Written prompt. Viewer labels, color-independent asterisks and XML `title`/`desc` are included.

**Exact source:** `prototypes/thpt/visuals/THPT_G10_B26_COIN_DIE_SAMPLE_SPACE_CANDIDATE.svg`; Git blob `e03d92262abb4aa99e88da565f07b7054adc803e`.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="680" viewBox="0 0 1120 680" role="img" aria-labelledby="title desc">
<title id="title">Bảng 12 kết quả đồng khả năng của đồng xu và xúc xắc</title><desc id="desc">Bảng có hai hàng N, S của đồng xu và sáu cột số chấm 1 đến 6. Các ô thuộc biến cố số chấm chia hết cho 3 được đánh dấu bằng viền đậm và dấu sao: (N,3), (N,6), (S,3), (S,6). Tổng 12 kết quả đồng khả năng, bốn thuận lợi.</desc>
<rect width="1120" height="680" rx="20" fill="#f8fafc"/><text x="54" y="58" font-size="31" font-weight="700" font-family="Arial,sans-serif" fill="#0f172a">Không gian mẫu: 1 đồng xu × 1 xúc xắc</text><text x="54" y="92" font-size="19" font-family="Arial,sans-serif" fill="#475569">N = ngửa · S = sấp · mỗi ô là một cặp kết quả có khả năng như nhau</text>
<text x="28" y="165" font-size="18" font-family="Arial,sans-serif" fill="#475569">Xu</text>
<text x="201" y="165" text-anchor="middle" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">1</text>
<text x="346" y="165" text-anchor="middle" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">2</text>
<text x="491" y="165" text-anchor="middle" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">3</text>
<text x="636" y="165" text-anchor="middle" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">4</text>
<text x="781" y="165" text-anchor="middle" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">5</text>
<text x="926" y="165" text-anchor="middle" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">6</text>
<text x="75" y="258" font-size="27" font-weight="700" font-family="Arial,sans-serif" fill="#0f172a">N</text>
<rect x="128" y="185" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="197" y="258" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(N,1)</text>
<rect x="273" y="185" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="342" y="258" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(N,2)</text>
<rect x="418" y="185" width="139" height="128" rx="13" fill="#ecfdf5" stroke="#047857" stroke-width="4"/>
<text x="487" y="258" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">(N,3)</text>
<text x="536" y="211" font-size="22" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" fill="#047857">*</text>
<rect x="563" y="185" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="632" y="258" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(N,4)</text>
<rect x="708" y="185" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="777" y="258" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(N,5)</text>
<rect x="853" y="185" width="139" height="128" rx="13" fill="#ecfdf5" stroke="#047857" stroke-width="4"/>
<text x="922" y="258" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">(N,6)</text>
<text x="971" y="211" font-size="22" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" fill="#047857">*</text>
<text x="75" y="397" font-size="27" font-weight="700" font-family="Arial,sans-serif" fill="#0f172a">S</text>
<rect x="128" y="324" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="197" y="397" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(S,1)</text>
<rect x="273" y="324" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="342" y="397" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(S,2)</text>
<rect x="418" y="324" width="139" height="128" rx="13" fill="#ecfdf5" stroke="#047857" stroke-width="4"/>
<text x="487" y="397" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">(S,3)</text>
<text x="536" y="350" font-size="22" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" fill="#047857">*</text>
<rect x="563" y="324" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="632" y="397" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(S,4)</text>
<rect x="708" y="324" width="139" height="128" rx="13" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
<text x="777" y="397" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" fill="#0f172a">(S,5)</text>
<rect x="853" y="324" width="139" height="128" rx="13" fill="#ecfdf5" stroke="#047857" stroke-width="4"/>
<text x="922" y="397" font-size="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" fill="#0f172a">(S,6)</text>
<text x="971" y="350" font-size="22" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" fill="#047857">*</text>
<rect x="50" y="500" width="1020" height="118" rx="14" fill="#e2e8f0"/>
<text x="72" y="538" font-size="22" font-weight="700" font-family="Arial,sans-serif" fill="#0f172a">A: Số chấm chia hết cho 3</text>
<text x="72" y="576" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">4 ô dấu *: (N,3), (N,6), (S,3), (S,6). P(A) = 4/12 = 1/3.</text>
<text x="54" y="648" font-size="17" font-family="Arial,sans-serif" fill="#475569">Điều kiện: đồng xu, xúc xắc cân đối và độc lập. Không suy đồng khả năng chỉ từ nhãn màu/tổng.</text></svg>
```

## E. D5 SVG FIG02 — B27 bốn thẻ, rút hai lần không hoàn lại

**Objective:** 4 named cards R₁,R₂,B₁,B₂, choose uniformly each time without replacement, n(Ω)=4×3=12 equiprobable ordered pairs, each 1/12. Aggregated colors RR=2, RB=4, BR=4, BB=2 (not equiprobable). Tree never reuses the same named card in a branch. Review S1 Core scope carefully: do not expand into formal conditional-probability machinery beyond SGK B27.

**Exact source:** `prototypes/thpt/visuals/THPT_G10_B27_WITHOUT_REPLACEMENT_TREE_CANDIDATE.svg`; Git blob `877abd0e755950e6112f1c2aaa33f281027ad33f`.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1160" viewBox="0 0 1600 1160" role="img" aria-labelledby="title desc">
<title id="title">Rút hai thẻ khác nhau không hoàn lại</title><desc id="desc">Bốn thẻ phân biệt R1 R2 B1 B2, mỗi lần rút đều từ số thẻ còn lại. 4 nhân 3 bằng 12 cặp có thứ tự, mỗi cặp xác suất 1 trên 12. Chuỗi màu RR có 2, RB có 4, BR có 4, BB có 2 kết quả.</desc>
<rect x="0" y="0" width="1600" height="1160" rx="20" fill="#f8fafc"/>
<text x="40" y="62" font-family="Arial" font-weight="bold" font-size="31" fill="#0f172a">Rút hai thẻ KHÔNG hoàn lại: 4 × 3 = 12 cặp</text>
<text x="40" y="105" font-family="Arial" font-size="20" fill="#475569">R₁, R₂ (đỏ) và B₁, B₂ (xanh), bốn thẻ phân biệt</text>
<text x="70" y="155" font-family="Arial" font-size="22" fill="#0f172a">Lượt 1</text>
<text x="430" y="155" font-family="Arial" font-size="22" fill="#0f172a">Lượt 2</text>
<text x="940" y="155" font-family="Arial" font-size="22" fill="#0f172a">Kết quả có thứ tự</text>
<path d="M150 675 L310 275" fill="none" stroke="#64748b" stroke-width="2"/>
<rect x="310" y="248" width="120" height="54" rx="10" fill="#fff" stroke="#b91c1c" stroke-width="2"/><text x="370" y="284" text-anchor="middle" font-family="Arial" font-size="26" fill="#b91c1c">R₁</text>
<path d="M430 275 L582 217" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="195" width="118" height="44" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<text x="641" y="225" text-anchor="middle" font-family="Arial" font-size="22" fill="#b91c1c">R₂</text>
<path d="M700 217 L925 217" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="225" font-family="Arial" font-size="22" fill="#0f172a">(R₁, R₂)</text>
<path d="M430 275 L582 275" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="253" width="118" height="44" rx="8" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
<text x="641" y="283" text-anchor="middle" font-family="Arial" font-size="22" fill="#1d4ed8">B₁</text>
<path d="M700 275 L925 275" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="283" font-family="Arial" font-size="22" fill="#0f172a">(R₁, B₁)</text>
<path d="M430 275 L582 333" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="311" width="118" height="44" rx="8" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
<text x="641" y="341" text-anchor="middle" font-family="Arial" font-size="22" fill="#1d4ed8">B₂</text>
<path d="M700 333 L925 333" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="341" font-family="Arial" font-size="22" fill="#0f172a">(R₁, B₂)</text>
<path d="M150 675 L310 495" fill="none" stroke="#64748b" stroke-width="2"/>
<rect x="310" y="468" width="120" height="54" rx="10" fill="#fff" stroke="#b91c1c" stroke-width="2"/><text x="370" y="504" text-anchor="middle" font-family="Arial" font-size="26" fill="#b91c1c">R₂</text>
<path d="M430 495 L582 437" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="415" width="118" height="44" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<text x="641" y="445" text-anchor="middle" font-family="Arial" font-size="22" fill="#b91c1c">R₁</text>
<path d="M700 437 L925 437" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="445" font-family="Arial" font-size="22" fill="#0f172a">(R₂, R₁)</text>
<path d="M430 495 L582 495" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="473" width="118" height="44" rx="8" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
<text x="641" y="503" text-anchor="middle" font-family="Arial" font-size="22" fill="#1d4ed8">B₁</text>
<path d="M700 495 L925 495" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="503" font-family="Arial" font-size="22" fill="#0f172a">(R₂, B₁)</text>
<path d="M430 495 L582 553" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="531" width="118" height="44" rx="8" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
<text x="641" y="561" text-anchor="middle" font-family="Arial" font-size="22" fill="#1d4ed8">B₂</text>
<path d="M700 553 L925 553" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="561" font-family="Arial" font-size="22" fill="#0f172a">(R₂, B₂)</text>
<path d="M150 675 L310 715" fill="none" stroke="#64748b" stroke-width="2"/>
<rect x="310" y="688" width="120" height="54" rx="10" fill="#fff" stroke="#1d4ed8" stroke-width="2"/><text x="370" y="724" text-anchor="middle" font-family="Arial" font-size="26" fill="#1d4ed8">B₁</text>
<path d="M430 715 L582 657" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="635" width="118" height="44" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<text x="641" y="665" text-anchor="middle" font-family="Arial" font-size="22" fill="#b91c1c">R₁</text>
<path d="M700 657 L925 657" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="665" font-family="Arial" font-size="22" fill="#0f172a">(B₁, R₁)</text>
<path d="M430 715 L582 715" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="693" width="118" height="44" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<text x="641" y="723" text-anchor="middle" font-family="Arial" font-size="22" fill="#b91c1c">R₂</text>
<path d="M700 715 L925 715" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="723" font-family="Arial" font-size="22" fill="#0f172a">(B₁, R₂)</text>
<path d="M430 715 L582 773" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="751" width="118" height="44" rx="8" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
<text x="641" y="781" text-anchor="middle" font-family="Arial" font-size="22" fill="#1d4ed8">B₂</text>
<path d="M700 773 L925 773" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="781" font-family="Arial" font-size="22" fill="#0f172a">(B₁, B₂)</text>
<path d="M150 675 L310 935" fill="none" stroke="#64748b" stroke-width="2"/>
<rect x="310" y="908" width="120" height="54" rx="10" fill="#fff" stroke="#1d4ed8" stroke-width="2"/><text x="370" y="944" text-anchor="middle" font-family="Arial" font-size="26" fill="#1d4ed8">B₂</text>
<path d="M430 935 L582 877" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="855" width="118" height="44" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<text x="641" y="885" text-anchor="middle" font-family="Arial" font-size="22" fill="#b91c1c">R₁</text>
<path d="M700 877 L925 877" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="885" font-family="Arial" font-size="22" fill="#0f172a">(B₂, R₁)</text>
<path d="M430 935 L582 935" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="913" width="118" height="44" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
<text x="641" y="943" text-anchor="middle" font-family="Arial" font-size="22" fill="#b91c1c">R₂</text>
<path d="M700 935 L925 935" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="943" font-family="Arial" font-size="22" fill="#0f172a">(B₂, R₂)</text>
<path d="M430 935 L582 993" fill="none" stroke="#94a3b8" stroke-width="2"/>
<rect x="582" y="971" width="118" height="44" rx="8" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
<text x="641" y="1001" text-anchor="middle" font-family="Arial" font-size="22" fill="#1d4ed8">B₁</text>
<path d="M700 993 L925 993" fill="none" stroke="#cbd5e1" stroke-width="2"/><text x="937" y="1001" font-family="Arial" font-size="22" fill="#0f172a">(B₂, B₁)</text>
<rect x="60" y="650" width="120" height="50" rx="10" fill="#e2e8f0" stroke="#64748b"/><text x="120" y="683" text-anchor="middle" font-family="Arial" font-size="21" fill="#0f172a">Bắt đầu</text>
<rect x="1220" y="240" width="326" height="317" rx="17" fill="#e2e8f0"/><text x="1240" y="282" font-family="Arial" font-size="24" font-weight="bold" fill="#0f172a">Nhãn gộp màu</text>
<text x="1240" y="327" font-family="Arial" font-size="23" fill="#0f172a">RR: 2/12</text>
<text x="1240" y="379" font-family="Arial" font-size="23" fill="#0f172a">RB: 4/12</text>
<text x="1240" y="431" font-family="Arial" font-size="23" fill="#0f172a">BR: 4/12</text>
<text x="1240" y="483" font-family="Arial" font-size="23" fill="#0f172a">BB: 2/12</text>
<text x="1240" y="540" font-family="Arial" font-size="20" fill="#0f172a">Tổng: 12/12 = 1</text>
<text x="40" y="1110" font-family="Arial" font-size="19" fill="#475569">Mỗi cặp thẻ cụ thể: 1/12. Bốn nhãn màu RR, RB, BR, BB KHÔNG đồng khả năng.</text></svg>
```

## F. NotebookLM review request / expected verdict

1. Confirm 5 Permanent Sources THPT v2.0 and actual **S1 printed chapter, B26/B27 subsection and page mapping**. If S1 pagination/source mismatch is material, return INSUFFICIENT_EVIDENCE or P1 with minimal correction.
2. Return verdict for **D6-G10-B26-01/02 and D6-G10-B27-01/02** individually, as well as B26/B27 lesson-level D6; check all conditions, role boundaries and the exact 16 canonical ID mappings.
3. Return **D5-FIG01/02** individual verdicts based on included full XML and mathematical correctness, including cell/branch counts, text labels, accessible caption, scope and non-revealing learning placement. Explicitly separate what cannot be proven without rendering on real devices.
4. Check whether two figures/examples and four help cards materially extend independent self-learning, whether any unnecessary duplication exists, whether colors/labels/tokens are confusing, and whether unapproved extension content enters SGK Core. Preserve existing D1–D4 and private Readiness snapshots.
5. Return SOURCE_RECEIPT, ID_REGISTER, FIGURE_REGISTER, LESSON_VERDICTS, P0/P1/P2, MINIMAL_DELTA, D5_OVERALL, D6_OVERALL and ACADEMIC_CLEARANCE_FOR_THIS_DELTA. Do not confer full chapter/Topic PASS, CONTENT_READY, Runtime Readiness, Mastery, release or deploy approval.

**Final state:** `NOTEBOOKLM_REVIEW_PENDING`, `CHIX_A5=HOLD`, `CHIX_A6=HOLD`, `CONTENT_READY=NO`, `RELEASE=NO`.
