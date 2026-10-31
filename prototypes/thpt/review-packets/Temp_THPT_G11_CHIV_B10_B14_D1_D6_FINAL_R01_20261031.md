# Temp — Toán 11 KNTT Chương IV: Quan hệ song song trong không gian — trọn chương B10–B14 D1–D6 R01

**PACKET_ID:** `THPT-G11-CHIV-B10-B14-WHOLE-CHAPTER-AUTHORING-R01-20261031`  
**LEARNING_PATH:** `SGK_CHAPTER` và `SGK_CHAPTER_READINESS` riêng; không chuyển verdict sang Topic.  
**STATUS:** `AUTHOR_CANDIDATE_NOT_NOTEBOOKLM_REVIEWED`, không phát hành, không kích hoạt Mastery.  
**SOURCE S1:** SGK Toán 11 KNTT Tập 1 B10 trang in 70–77; B11 78–83; B12 84–87; B13 88–94; B14 95–101; cuối ChIV 102–103 (chỉ mục công khai đối chiếu; reviewer cần xác minh bản SGK PDF S1 gốc). **SBT Toán 11 Tập 1 B10–B14:** *chưa xác nhận trang in từ PDF S1*, yêu cầu NotebookLM xác minh trực tiếp.  
**SOURCE STANDARDS:** đúng năm Permanent Sources THPT v2.0 NotebookLM đang hiệu lực. S1 SGK/SBT luôn cao hơn tài liệu tham khảo.  
**PHẠM VI:** 5 bài đầy đủ, 22 outcome (21 bài + 1 tổng hợp), 20 ví dụ giải, 30 câu Core/Practice, 10 Written/Anchor một thư viện, 5 hình SVG có XML, 10 D6, và 22 câu RD1 nguồn kín riêng. **Nguồn kín không có trong file công khai này.**  
**CAUTION:** đây là nguồn tác giả đưa đi phản biện, không tự cấp PASS học thuật hoặc điểm Skill Mastery.

## RD0. Ma trận outcome và nguồn học liệu theo từng bài

| Outcome ID | Phạm vi yêu cầu | Bằng chứng |
|---|---|---|
| `G11-B10-INCIDENCE` | Điểm, đường thẳng, mặt phẳng: quan hệ thuộc và không thuộc | `THPT-G11-CHIV-B10-C01` |
| `G11-B10-PLANE` | Bốn phương pháp xác định một mặt phẳng | `THPT-G11-CHIV-B10-C02`, `THPT-G11-CHIV-B10-P03` |
| `G11-B10-PLANE_INTERSECTION` | Tìm giao tuyến qua hai điểm chung phân biệt | `THPT-G11-CHIV-B10-P01` |
| `G11-B10-LINE_PLANE` | Tìm giao điểm đường–mặt bằng đường phụ trợ | `THPT-G11-CHIV-B10-P02` |
| `G11-B10-SECTION` | Dựng thiết diện từ các giao tuyến chính xác | `THPT-G11-CHIV-B10-P04` |
| `G11-B11-RELATIVE` | Phân biệt cắt nhau, song song, chéo nhau, trùng nhau | `THPT-G11-CHIV-B11-C01`, `THPT-G11-CHIV-B11-P01`, `THPT-G11-CHIV-B11-P03` |
| `G11-B11-COPLANAR` | Kiểm tra hai đường thẳng đồng phẳng và quan hệ song song | `THPT-G11-CHIV-B11-C02` |
| `G11-B11-PARALLEL_PROOF` | Chứng minh song song qua hình bình hành hoặc định lý trung điểm | `THPT-G11-CHIV-B11-P02`, `THPT-G11-CHIV-B11-P04` |
| `G11-B11-INTERSECT_PLANES` | Giao tuyến hai mặt phẳng chứa những đường cùng hướng | EX-G11-B11 hoặc RD1 đánh giá độc lập |
| `G11-B12-POSITIONS` | Phân biệt đường cắt, nằm trong và song song mặt phẳng | `THPT-G11-CHIV-B12-C01`, `THPT-G11-CHIV-B12-P02` |
| `G11-B12-PARALLEL_TEST` | Dấu hiệu song song cần điều kiện đường không nằm trong mặt phẳng | `THPT-G11-CHIV-B12-C02`, `THPT-G11-CHIV-B12-P01` |
| `G11-B12-PLANE_INTERSECTION` | Tính chất giao tuyến khi một mặt phẳng chứa đường song song mặt khác | `THPT-G11-CHIV-B12-P03` |
| `G11-B12-CONSTRUCTION` | Dựng đường, thiết diện qua trung điểm và mặt phẳng song song | `THPT-G11-CHIV-B12-P04` |
| `G11-B13-PLANE_POSITIONS` | Hai mặt phẳng trùng/cắt/song song | `THPT-G11-CHIV-B13-C01` |
| `G11-B13-PLANE_TEST` | Hai đường cắt nhau trong một mặt phẳng cùng song song mặt kia | `THPT-G11-CHIV-B13-C02`, `THPT-G11-CHIV-B13-P02` |
| `G11-B13-TRANSVERSAL` | Mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai đường song song | `THPT-G11-CHIV-B13-P01` |
| `G11-B13-PRISM_RATIO` | Mặt cắt song song đáy hình chóp và tỉ số đồng dạng trên các cạnh | `THPT-G11-CHIV-B13-P03`, `THPT-G11-CHIV-B13-P04` |
| `G11-B14-PROJECTION_DEF` | Phương chiếu cắt mặt phẳng chiếu và ảnh của điểm | `THPT-G11-CHIV-B14-C01`, `THPT-G11-CHIV-B14-P01` |
| `G11-B14-DEGENERACY` | Đường thẳng theo phương chiếu có ảnh chỉ một điểm | `THPT-G11-CHIV-B14-P03` |
| `G11-B14-AFFINE_INVARIANTS` | Bảo toàn thẳng hàng, thứ tự và tỉ số trên cùng một đường | `THPT-G11-CHIV-B14-C02`, `THPT-G11-CHIV-B14-P02` |
| `G11-B14-PARALLEL_AND_SHAPES` | Bảo toàn song song có điều kiện, hình bình hành và trung điểm; không bảo toàn góc | `THPT-G11-CHIV-B14-P04` |
| `G11-CHIV-INTEGRATED` | Tích hợp quan hệ đường–mặt–hai mặt–phép chiếu | `THPT-G11-CHIV-RD1-22` (nguồn kín) |

**Phân biệt outcome và item:** một câu có thể đặt ở nhiều ngữ cảnh nhưng chỉ có một item_id, một đáp án và một lời giải canonical; Written/Anchor dùng chung thư viện. Không coi số lượng luyện tập đúng là Skill Mastery chính thức.

## B10. Đường thẳng và mặt phẳng trong không gian — D1–D6 (SGK trang 70–77)

### D1. Kiến thức tự học, giả thiết và điều kiện

**Khái niệm.** Mặt phẳng là đối tượng không giới hạn được ký hiệu $(P)$, $(ABC)$; đường thẳng $a$ được gọi là nằm trong $(P)$ khi mọi điểm của $a$ thuộc $(P)$. Nếu hai điểm phân biệt $A,B$ thuộc $(P)$ thì cả đường $AB$ nằm trong $(P)$. Ba điểm không thẳng hàng xác định duy nhất một mặt phẳng. Một mặt phẳng cũng được xác định bởi một đường thẳng và một điểm không nằm trên đường; hai đường thẳng cắt nhau; hoặc hai đường thẳng phân biệt song song.

**Các nguyên tắc giao.** Hai mặt phẳng *phân biệt* có hai điểm chung phân biệt thì giao nhau theo đường thẳng qua hai điểm đó. Đường thẳng không nằm trong mặt phẳng có nhiều nhất một điểm chung với mặt phẳng. Nếu $d\subset(P)$ và $d\subset(Q)$, $P\ne Q$, thì $d=(P)\cap(Q)$. Muốn tìm $M=a\cap(P)$: chọn mặt phẳng phụ $(Q)$ chứa $a$, dựng $d=(P)\cap(Q)$, lấy $M=a\cap d$ khi có giao điểm. Phải kiểm tra cả hai phép giao có tồn tại, không mặc định luôn giao.

**Thiết diện.** Thiết diện của hình chóp/lăng trụ với một mặt phẳng là đa giác thực sự tạo bởi các đoạn giao trong các mặt của hình; chọn điểm chung hợp lệ, nối chỉ những điểm thuộc cùng một mặt, xác định đoạn thuộc khối. Đường nét đứt trong hình phối cảnh là cạnh khuất **chứ không** tự chứng minh chéo nhau/không giao.

### D2. Ví dụ giải thích bản chất

**EX-G11-B10-EX01: Xác định mặt phẳng.** Với $A,B,C$ không thẳng hàng, chỉ có một $(ABC)$. Nếu $D$ thuộc $AB$, thì $(ABD)$ **không xác định duy nhất** theo ba điểm vì $A,B,D$ thẳng hàng; thay $D$ bằng $C$ để được mặt phẳng.

**EX-G11-B10-EX02: Hai mặt phẳng giao nhau.** Trong tứ diện $S.ABC$, hai mặt phẳng $(SAB)$ và $(SAC)$ có $S,A$ chung và phân biệt (vì $B,C$ không cùng mặt $(SA)$), do đó giao tuyến là $SA$.

**EX-G11-B10-EX03: Giao điểm đường mặt.** Trong tứ diện $S.ABC$, $M$ thuộc đoạn $SB$, $M\ne S,B$. Giao điểm của $CM$ với $(SAB)$ là $M$ vì $M\in SB\subset(SAB)$, $CM$ đi qua $M$, và $C\notin(SAB)$.

**EX-G11-B10-EX04: Thiết diện qua ba điểm trên ba cạnh.** Trong tứ diện $S.ABC$, $M\in SA$, $N\in SB$, $K\in SC$ đều nằm bên trong các cạnh. Mặt $(MNK)$ cắt ba mặt bên theo $MN,NK,KM$, nên thiết diện với tứ diện là tam giác $MNK$.

### D3. SGK Core và Practice/Application — ứng viên canonical

#### THPT-G11-CHIV-B10-C01 · SGK_CORE · `skill_id=G11-B10-INCIDENCE`

**Đề:** Hai điểm phân biệt A,B thuộc (P). Có chắc AB nằm trong (P) không?

**Đáp án:** Có, AB⊂(P).

**Lời giải:** Theo tiên đề: nếu hai điểm phân biệt của một đường thuộc mặt phẳng thì đường đó nằm trong mặt phẳng.

#### THPT-G11-CHIV-B10-C02 · SGK_CORE · `skill_id=G11-B10-PLANE`

**Đề:** Ba điểm A,B,C thẳng hàng có xác định duy nhất một mặt phẳng không?

**Đáp án:** Không.

**Lời giải:** Vô số mặt phẳng chứa đường AB; cần ba điểm không thẳng hàng.

#### THPT-G11-CHIV-B10-P01 · SGK_PRACTICE · `skill_id=G11-B10-PLANE_INTERSECTION`

**Đề:** Trong tứ diện S.ABC, giao tuyến (SAB) và (SAC) là đường nào?

**Đáp án:** SA.

**Lời giải:** Hai mặt phẳng phân biệt cùng có S,A; giao tuyến là SA.

#### THPT-G11-CHIV-B10-P02 · SGK_PRACTICE · `skill_id=G11-B10-LINE_PLANE`

**Đề:** Trong tứ diện S.ABC, M nằm trong cạnh SB. Giao của CM với (SAB) là gì?

**Đáp án:** M.

**Lời giải:** Vì M∈SB⊂(SAB) và C không nằm trong (SAB), đường CM gặp mặt tại M.

#### THPT-G11-CHIV-B10-P03 · SGK_PRACTICE · `skill_id=G11-B10-PLANE`

**Đề:** Cho đường a và A∉a. Có bao nhiêu mặt phẳng chứa a và A?

**Đáp án:** Đúng một.

**Lời giải:** Đường thẳng và một điểm ngoài nó xác định duy nhất một mặt phẳng.

#### THPT-G11-CHIV-B10-P04 · SGK_PRACTICE · `skill_id=G11-B10-SECTION`

**Đề:** Trong tứ diện S.ABC, M,N,K là điểm bên trong SA,SB,SC. Thiết diện bởi (MNK) là đa giác nào?

**Đáp án:** Tam giác MNK.

**Lời giải:** (MNK) cắt từng mặt bên theo MN,NK,KM; các điểm thuộc các cạnh tam giác đầu trên.

### D4. Written/Anchor dùng chung — đáp án và rubric /4

#### THPT-G11-CHIV-B10-W01 · WRITTEN

**Đề:** Trong tứ diện S.ABC, M∈SA, N∈SB, K∈SC là ba điểm trong cạnh. Tìm giao tuyến của (SMN) và (SBC); rồi cho biết thiết diện (MNK) của tứ diện.

**Đáp án và lời giải:** Do M∈SA,N∈SB nên (SMN)=(SAB); giao (SAB)∩(SBC)=SB. Thiết diện (MNK) là tam giác MNK; giao với (SAB),(SBC),(SAC) lần lượt MN,NK,KM.

**Rubric 4 điểm:**
1. Xác định (SMN)=(SAB) — 1 điểm.
2. Tìm hai điểm chung S,B và giao tuyến SB — 1 điểm.
3. Liệt kê đúng ba đoạn giao trên các mặt — 1 điểm.
4. Kết luận tam giác và điều kiện điểm trong cạnh — 1 điểm.

#### THPT-G11-CHIV-B10-W02-ANCHOR · WRITTEN (ANCHOR TAG)

**Đề:** Cho tứ diện S.ABC và P∈AB (khác A,B). Mặt phẳng (SCP) cắt tứ diện theo thiết diện nào? Giải thích từng cạnh của thiết diện.

**Đáp án và lời giải:** Mặt (SCP) qua S,C,P; nó cắt mặt đáy (ABC) theo CP, cắt (SAB) theo SP và chứa SC; do P trong AB, thiết diện tam giác SCP.

**Rubric 4 điểm:**
1. Xác định C,P cùng đáy nên giao đáy CP — 1 điểm.
2. Xác định S,P thuộc (SAB) nên giao SP — 1 điểm.
3. Xác định S,C thuộc mặt bên nên giao SC — 1 điểm.
4. Kết luận đúng tam giác SCP — 1 điểm.

### D5. Hình chính xác theo bản vẽ nguồn — `FIG-G11-B10-01`

**Mô tả khi không tải hình:** Tứ diện S.ABC, ba đỉnh A B C ở đáy, S trên cao; các mặt (SAB) và (SAC) cùng chứa đường SA. Nét đứt chỉ cạnh khuất trong hình biểu diễn.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B10-01: Tứ diện và giao tuyến mặt phẳng</title>
<desc id="desc">Tứ diện S.ABC, ba đỉnh A B C ở đáy, S trên cao; các mặt (SAB) và (SAC) cùng chứa đường SA. Nét đứt chỉ cạnh khuất trong hình biểu diễn.</desc>
<rect x="0" y="0" width="800" height="450" rx="18" fill="#f8fafc" />
<text x="400" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#0f172a">Tứ diện và giao tuyến mặt phẳng</text>
<polygon points="160,320 520,330 450,170" fill="#e0f2fe" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><line x1="275" y1="90" x2="160" y2="320" stroke="#334155" stroke-width="2.8" /><line x1="275" y1="90" x2="520" y2="330" stroke="#334155" stroke-width="2.8" /><line x1="275" y1="90" x2="450" y2="170" stroke="#334155" stroke-width="2.8" /><line x1="160" y1="320" x2="520" y2="330" stroke="#334155" stroke-width="2.8" /><line x1="520" y1="330" x2="450" y2="170" stroke="#334155" stroke-width="2.8" /><line x1="450" y1="170" x2="160" y2="320" stroke="#334155" stroke-width="2.8" stroke-dasharray="8 7"/><circle cx="275" cy="90" r="4.5" fill="#0f172a"/><text x="283" y="81" font-family="Arial" font-size="16" fill="#0f172a">S</text><circle cx="160" cy="320" r="4.5" fill="#0f172a"/><text x="168" y="311" font-family="Arial" font-size="16" fill="#0f172a">A</text><circle cx="520" cy="330" r="4.5" fill="#0f172a"/><text x="528" y="321" font-family="Arial" font-size="16" fill="#0f172a">B</text><circle cx="450" cy="170" r="4.5" fill="#0f172a"/><text x="458" y="161" font-family="Arial" font-size="16" fill="#0f172a">C</text><text x="565" y="130" font-size="16" fill="#0f172a">(SAB) ∩ (SAC) = SA</text>
<text x="400" y="427" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#475569">Hình biểu diễn theo phép chiếu song song — không suy ra độ dài/góc thật từ hình vẽ</text>
</svg>
```

### D6. Thẻ khắc phục lỗi — 5 bước

#### HELP-G11-B10-01 · `G11-B10-INCIDENCE` · return `THPT-G11-CHIV-B10-C01`

1. **Nhận diện:** Nhầm điểm nằm trên hình vẽ với điểm thuộc mặt phẳng.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Hai điểm thuộc mặt xác định toàn bộ đường.
4. **Tự thử:** Giả sử A,B∈(P), A≠B. Hỏi điểm C∈AB có nằm (P) không? **Tự đối chiếu:** Có, vì AB⊂(P).
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B10-C01` và tự nêu lí do mỗi giả thiết cần thiết.

#### HELP-G11-B10-02 · `G11-B10-SECTION` · return `THPT-G11-CHIV-B10-P04`

1. **Nhận diện:** Nối tùy ý các điểm không cùng mặt của hình khối.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Xác định từng giao tuyến của mặt cắt với từng mặt.
4. **Tự thử:** Tứ diện S.ABC, P∈AB. Vì sao SP là đoạn giao trên mặt SAB của thiết diện qua S,C,P? **Tự đối chiếu:** Vì S,P đều thuộc (SAB) và thuộc mặt cắt.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B10-P04` và tự nêu lí do mỗi giả thiết cần thiết.

## B11. Hai đường thẳng song song — D1–D6 (SGK trang 78–83)

### D1. Kiến thức tự học, giả thiết và điều kiện

Hai đường thẳng trong không gian có thể **trùng, cắt nhau, song song (phân biệt và cùng nằm một mặt phẳng), chéo nhau (không đồng phẳng)**. Không giao nhau **chưa đủ** để nói song song: hai đường chéo nhau cũng không cắt. Nếu $a\parallel b$ và $b\parallel c$ (từng cặp là đường thẳng phân biệt), $a,c$ có cùng phương; nếu $a\ne c$ thì $a\parallel c$, còn nếu $a=c$ là trùng nhau. Không gọi hai đường thẳng trùng nhau là song song khi định nghĩa cần phân biệt.

Qua điểm $M$ ngoài đường $a$ có duy nhất một đường qua $M$ song song với $a$. Nếu $M,N$ lần lượt là trung điểm của hai cạnh $SA,SB$ của tam giác $SAB$ thì $MN\parallel AB$ (định lý đường trung bình trong **mặt phẳng** $(SAB)$). Trong một hình bình hành $ABCD$, $AB\parallel CD$ và $AD\parallel BC$.

**Giao tuyến cùng phương.** Nếu hai mặt phẳng phân biệt $(P),(Q)$ cắt theo $d$, đồng thời mỗi mặt phẳng chứa một đường thẳng song song với cùng hướng $a$ và hai đường đó khác $d$, thì giao tuyến $d$ có hướng song song $a$. Không suy giao tuyến chỉ từ một đường không kiểm tra mặt phẳng.

### D2. Ví dụ giải thích bản chất

**EX-G11-B11-EX01: Song song và chéo nhau.** Trong tứ diện $S.ABC$, hai đường $SA$ và $BC$ là **chéo nhau**: nếu đồng phẳng, mặt đó chứa $S,A,B,C$, trái tứ diện; do đó dù không cắt cũng không được gọi là song song.

**EX-G11-B11-EX02: Định lý trung bình tam giác.** Trong hình chóp $S.ABC$, $M,N$ là trung điểm $SA,SB$ thì $MN\parallel AB$ vì cùng thuộc mặt $(SAB)$ và là đường trung bình tam giác $SAB$.

**EX-G11-B11-EX03: Hình bình hành không gian.** Trong hình chóp $S.ABCD$ với đáy $ABCD$ hình bình hành, $AB\parallel CD$. Tuy nhiên $SA$ và $CD$ nhìn trên hình có thể không cắt, nhưng hai đường đó **chéo nhau**, không phải song song.

**EX-G11-B11-EX04: Cùng phương, cần phân biệt.** Nếu $a\parallel b$ và $c\parallel b$ thì $a,c$ cùng hướng; nếu $a\ne c$ là song song, nếu $a=c$ là trùng nhau. Kết luận “$a\parallel c$” không đúng khi $a=c$ theo định nghĩa đường song song phân biệt.

### D3. SGK Core và Practice/Application — ứng viên canonical

#### THPT-G11-CHIV-B11-C01 · SGK_CORE · `skill_id=G11-B11-RELATIVE`

**Đề:** Hai đường thẳng khác nhau không cắt nhau trong không gian chắc chắn song song?

**Đáp án:** Không.

**Lời giải:** Chúng có thể chéo nhau nếu không cùng nằm trong một mặt phẳng.

#### THPT-G11-CHIV-B11-C02 · SGK_CORE · `skill_id=G11-B11-COPLANAR`

**Đề:** Trong hình bình hành ABCD, AB và CD có quan hệ nào?

**Đáp án:** Song song.

**Lời giải:** Hai cạnh đối phân biệt, đồng phẳng, không giao nhau.

#### THPT-G11-CHIV-B11-P01 · SGK_PRACTICE · `skill_id=G11-B11-RELATIVE`

**Đề:** Trong tứ diện S.ABC, SA và BC có quan hệ nào?

**Đáp án:** Chéo nhau.

**Lời giải:** Nếu cùng mặt phẳng thì bốn đỉnh đồng phẳng, trái tứ diện; chúng không cắt nhau.

#### THPT-G11-CHIV-B11-P02 · SGK_PRACTICE · `skill_id=G11-B11-PARALLEL_PROOF`

**Đề:** Trong tam giác SAB, M,N lần lượt trung điểm SA,SB. Chứng minh MN và AB có quan hệ nào.

**Đáp án:** MN∥AB.

**Lời giải:** Định lý đường trung bình trong tam giác SAB; M,N,AB thuộc cùng (SAB).

#### THPT-G11-CHIV-B11-P03 · SGK_PRACTICE · `skill_id=G11-B11-RELATIVE`

**Đề:** Trong hình chóp S.ABCD đáy ABCD hình bình hành, SA và CD song song hay chéo nhau?

**Đáp án:** Chéo nhau.

**Lời giải:** SA không thuộc mặt đáy, CD nằm đáy; chúng không cắt và không đồng phẳng vì mặt qua SA và CD sẽ chứa S,A,C,D khiến S nằm đáy.

#### THPT-G11-CHIV-B11-P04 · SGK_PRACTICE · `skill_id=G11-B11-PARALLEL_PROOF`

**Đề:** Nếu a∥b và b∥c, có thể kết luận a∥c ngay khi chưa biết a≠c không?

**Đáp án:** Chưa.

**Lời giải:** a và c cùng phương; nếu trùng nhau thì không gọi hai đường phân biệt song song. Nêu thêm a≠c.

### D4. Written/Anchor dùng chung — đáp án và rubric /4

#### THPT-G11-CHIV-B11-W01 · WRITTEN

**Đề:** Trong tứ diện S.ABC, M,N lần lượt là trung điểm SA và SB. (a) Chứng minh MN∥AB. (b) SA và BC song song hay chéo nhau?

**Đáp án và lời giải:** (a) M,N ở tam giác SAB nên MN là đường trung bình, MN∥AB. (b) SA và BC là hai cạnh đối tứ diện, không đồng phẳng, do đó chéo nhau.

**Rubric 4 điểm:**
1. Xác định tam giác SAB chứa M,N — 1 điểm.
2. Áp dụng đường trung bình và kết luận song song — 1 điểm.
3. Nêu SA,BC không giao trong tứ diện — 1 điểm.
4. Chứng minh không đồng phẳng để kết luận chéo — 1 điểm.

#### THPT-G11-CHIV-B11-W02-ANCHOR · WRITTEN (ANCHOR TAG)

**Đề:** Hình chóp S.ABCD có đáy là hình bình hành. Lấy M,N là trung điểm SA,SD. (a) Chứng minh MN∥AD. (b) Suy ra MN∥BC.

**Đáp án và lời giải:** Trong ΔSAD, MN là trung bình nên MN∥AD; trong hình bình hành đáy, AD∥BC; vì MN và BC là hai đường phân biệt cùng phương nên MN∥BC.

**Rubric 4 điểm:**
1. Xác định trung điểm M,N trong ΔSAD — 1 điểm.
2. Chứng minh MN∥AD — 1 điểm.
3. Nêu AD∥BC từ hình bình hành — 1 điểm.
4. Lập luận MN≠BC để kết luận — 1 điểm.

### D5. Hình chính xác theo bản vẽ nguồn — `FIG-G11-B11-01`

**Mô tả khi không tải hình:** Lăng trụ tam giác ABC.A phẩy B phẩy C phẩy. AB song song A phẩy B phẩy; AA phẩy và BC chéo nhau dù hình biểu diễn có thể gây nhầm.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B11-01: Song song và chéo nhau</title>
<desc id="desc">Lăng trụ tam giác ABC.A phẩy B phẩy C phẩy. AB song song A phẩy B phẩy; AA phẩy và BC chéo nhau dù hình biểu diễn có thể gây nhầm.</desc>
<rect x="0" y="0" width="800" height="450" rx="18" fill="#f8fafc" />
<text x="400" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#0f172a">Song song và chéo nhau</text>
<polygon points="160,320 440,320 310,245" fill="#fee2e2" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><polygon points="245,165 525,165 395,90" fill="#dbeafe" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><line x1="160" y1="320" x2="245" y2="165" stroke="#334155" stroke-width="2.8" /><line x1="440" y1="320" x2="525" y2="165" stroke="#334155" stroke-width="2.8" /><line x1="310" y1="245" x2="395" y2="90" stroke="#334155" stroke-width="2.8" /><line x1="160" y1="320" x2="440" y2="320" stroke="#334155" stroke-width="2.8" /><line x1="440" y1="320" x2="310" y2="245" stroke="#334155" stroke-width="2.8" /><line x1="310" y1="245" x2="160" y2="320" stroke="#334155" stroke-width="2.8" stroke-dasharray="8 7"/><line x1="245" y1="165" x2="525" y2="165" stroke="#334155" stroke-width="2.8" /><line x1="525" y1="165" x2="395" y2="90" stroke="#334155" stroke-width="2.8" /><line x1="395" y1="90" x2="245" y2="165" stroke="#334155" stroke-width="2.8" /><circle cx="160" cy="320" r="4.5" fill="#0f172a"/><text x="168" y="311" font-family="Arial" font-size="16" fill="#0f172a">A</text><circle cx="440" cy="320" r="4.5" fill="#0f172a"/><text x="448" y="311" font-family="Arial" font-size="16" fill="#0f172a">B</text><circle cx="310" cy="245" r="4.5" fill="#0f172a"/><text x="318" y="236" font-family="Arial" font-size="16" fill="#0f172a">C</text><circle cx="245" cy="165" r="4.5" fill="#0f172a"/><text x="253" y="156" font-family="Arial" font-size="16" fill="#0f172a">A′</text><circle cx="525" cy="165" r="4.5" fill="#0f172a"/><text x="533" y="156" font-family="Arial" font-size="16" fill="#0f172a">B′</text><circle cx="395" cy="90" r="4.5" fill="#0f172a"/><text x="403" y="81" font-family="Arial" font-size="16" fill="#0f172a">C′</text><text x="570" y="165" font-size="16" fill="#0f172a">AB ∥ A′B′</text><text x="570" y="198" font-size="16" fill="#0f172a">AA′ và BC chéo nhau</text>
<text x="400" y="427" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#475569">Hình biểu diễn theo phép chiếu song song — không suy ra độ dài/góc thật từ hình vẽ</text>
</svg>
```

### D6. Thẻ khắc phục lỗi — 5 bước

#### HELP-G11-B11-01 · `G11-B11-RELATIVE` · return `THPT-G11-CHIV-B11-C01`

1. **Nhận diện:** Coi hai đường không cắt là song song.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Muốn song song phải kiểm tra đồng phẳng và phân biệt.
4. **Tự thử:** Hai cạnh đối SA và BC trong tứ diện: có đồng phẳng không? **Tự đối chiếu:** Không; đó là hai cạnh chéo nhau.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B11-C01` và tự nêu lí do mỗi giả thiết cần thiết.

#### HELP-G11-B11-02 · `G11-B11-PARALLEL_PROOF` · return `THPT-G11-CHIV-B11-P02`

1. **Nhận diện:** Quên xác định mặt phẳng chứa hai đường.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Dùng tam giác chung hoặc đáy hình bình hành.
4. **Tự thử:** M,N trung điểm SA,SB: đường MN thuộc mặt nào trước khi kết luận song song? **Tự đối chiếu:** Cùng mặt (SAB); dùng đường trung bình tam giác SAB.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B11-P02` và tự nêu lí do mỗi giả thiết cần thiết.

## B12. Đường thẳng và mặt phẳng song song — D1–D6 (SGK trang 84–87)

### D1. Kiến thức tự học, giả thiết và điều kiện

Có đúng ba vị trí của đường $d$ so với mặt $(P)$: (i) $d\subset(P)$; (ii) $d$ cắt $(P)$ tại một điểm; (iii) $d\parallel(P)$, nghĩa là **không có điểm chung**. Do đó ký hiệu $d\parallel(P)$ không bao hàm trường hợp $d\subset(P)$.

**Dấu hiệu.** Cho $b\subset(P)$ và $a\parallel b$. Nếu **thêm $a\not\subset(P)$** thì $a\parallel(P)$. Nếu bỏ điều kiện cuối, $a$ có thể nằm ngay trong $(P)$ (ví dụ hai cạnh đối của hình bình hành cùng nằm trong mặt phẳng). Với $a\parallel(P)$ và $(Q)$ chứa $a$, nếu $(Q)\cap(P)=b$ thì $a\parallel b$; phải có giả thiết giao tuyến tồn tại.

**Dựng trong hình chóp.** Trong $S.ABCD$ có $ABCD$ là hình bình hành, lấy $M,N$ là trung điểm $SA,SB$. Trong tam giác $SAB$, $MN\parallel AB$, $AB\subset(ABCD)$, $MN$ không nằm trong mặt đáy nên $MN\parallel(ABCD)$. Không nói $MN\subset(ABCD)$ hoặc $MN\cap(ABCD)$ là một điểm.

### D2. Ví dụ giải thích bản chất

**EX-G11-B12-EX01: Ba vị trí đường–mặt.** Trong tứ diện $S.ABC$, $AB\subset(ABC)$, $SA$ cắt $(ABC)$ tại $A$. Chọn $M,N$ là trung điểm $SA,SB$ thì $MN\parallel(ABC)$.

**EX-G11-B12-EX02: Điều kiện không thuộc mặt.** Trong hình bình hành $ABCD$, $AB\parallel CD$ và $CD\subset(ABCD)$, nhưng $AB\subset(ABCD)$, nên KHÔNG suy được $AB\parallel(ABCD)$.

**EX-G11-B12-EX03: Giao tuyến chứa đường song song.** Nếu $d\parallel(P)$, $d\subset(Q)$ và $(P)\cap(Q)=e$, thì $d\parallel e$. Chẳng hạn trong chóp $S.ABC$ với $M,N$ là trung điểm $SA,SB$, mặt $(SAB)$ chứa $MN$ và giao với mặt đáy $(ABC)$ theo $AB$; do $MN\parallel(ABC)$, giao tuyến $AB\parallel MN$.

**EX-G11-B12-EX04: Thiết diện hình chóp.** Hình chóp $S.ABCD$ đáy hình bình hành. $M\in SA,N\in SB$ có $SM/SA=SN/SB=1/2$. Đường $MN\parallel AB\subset(ABCD)$; do $MN$ nằm trên mặt bên phía trên đáy, $MN\parallel(ABCD)$.

### D3. SGK Core và Practice/Application — ứng viên canonical

#### THPT-G11-CHIV-B12-C01 · SGK_CORE · `skill_id=G11-B12-POSITIONS`

**Đề:** Một đường a nằm trong (P) có được gọi là a∥(P) theo định nghĩa không?

**Đáp án:** Không.

**Lời giải:** a có vô số điểm chung với (P); a∥(P) yêu cầu không có điểm chung.

#### THPT-G11-CHIV-B12-C02 · SGK_CORE · `skill_id=G11-B12-PARALLEL_TEST`

**Đề:** Điều kiện còn thiếu: a∥b, b⊂(P) suy ra a∥(P) khi ...?

**Đáp án:** a không nằm trong (P).

**Lời giải:** Nếu a⊂(P), kết luận sai; cần a⊄(P).

#### THPT-G11-CHIV-B12-P01 · SGK_PRACTICE · `skill_id=G11-B12-PARALLEL_TEST`

**Đề:** Trong hình chóp S.ABC, M,N là trung điểm SA,SB. Chứng minh MN∥(ABC).

**Đáp án:** MN∥(ABC).

**Lời giải:** MN∥AB theo đường trung bình, AB⊂(ABC), MN không thuộc đáy.

#### THPT-G11-CHIV-B12-P02 · SGK_PRACTICE · `skill_id=G11-B12-POSITIONS`

**Đề:** Trong tứ diện S.ABC, đường SA và mặt (ABC) có vị trí tương đối nào?

**Đáp án:** Cắt nhau tại A.

**Lời giải:** S không thuộc đáy, A thuộc đáy, nên giao duy nhất A.

#### THPT-G11-CHIV-B12-P03 · SGK_PRACTICE · `skill_id=G11-B12-PLANE_INTERSECTION`

**Đề:** Cho d∥(P), d⊂(Q), (Q)∩(P)=e. Quan hệ d,e?

**Đáp án:** d∥e.

**Lời giải:** Cùng thuộc (Q) và không giao: nếu d giao e thì d gặp (P), mâu thuẫn.

#### THPT-G11-CHIV-B12-P04 · SGK_PRACTICE · `skill_id=G11-B12-CONSTRUCTION`

**Đề:** Hình chóp S.ABCD đáy hình bình hành. M,N trung điểm SA,SB. MN∥(ABCD) nhưng MN có nằm trong (ABCD) không?

**Đáp án:** Không.

**Lời giải:** M,N thuộc các cạnh bên phía trên đáy; MN∥AB⊂đáy và không nằm đáy.

### D4. Written/Anchor dùng chung — đáp án và rubric /4

#### THPT-G11-CHIV-B12-W01 · WRITTEN

**Đề:** Cho hình chóp S.ABC; M,N trung điểm SA,SB. (a) Chứng minh MN∥(ABC). (b) Giao tuyến của (SAB) và (ABC)?

**Đáp án và lời giải:** (a) MN∥AB trong tam giác SAB, AB⊂(ABC); MN nằm trên mặt bên và không thuộc đáy, nên MN∥(ABC). (b) Giao tuyến AB (các điểm A,B thuộc cả hai).

**Rubric 4 điểm:**
1. Chứng minh MN∥AB — 1 điểm.
2. Kiểm tra AB nằm trong mặt đáy — 1 điểm.
3. Kiểm tra MN không nằm trong mặt đáy để suy song song — 1 điểm.
4. Tìm giao tuyến AB bằng hai điểm chung — 1 điểm.

#### THPT-G11-CHIV-B12-W02-ANCHOR · WRITTEN (ANCHOR TAG)

**Đề:** Hình chóp S.ABCD đáy hình bình hành, M,N trung điểm SA,SB. Một học sinh nói “MN∥AB và AB nằm trong đáy, nên MN nằm trong đáy”. Phản biện và kết luận chính xác.

**Đáp án và lời giải:** MN∥AB vì đường trung bình ΔSAB. M,N khác A,B và nằm trên cạnh bên nên MN không thuộc mặt đáy; theo dấu hiệu đúng MN∥(ABCD), không phải MN⊂(ABCD).

**Rubric 4 điểm:**
1. Chứng minh MN∥AB — 1 điểm.
2. Nêu MN không nằm trong đáy — 1 điểm.
3. Viết điều kiện dấu hiệu đường song song mặt — 1 điểm.
4. Kết luận MN∥đáy và bác bỏ phát biểu — 1 điểm.

### D5. Hình chính xác theo bản vẽ nguồn — `FIG-G11-B12-01`

**Mô tả khi không tải hình:** Hình chóp S.ABCD với đáy ABCD là hình bình hành; M N là trung điểm SA SB; MN màu đỏ nằm phía trên mặt đáy tô xanh và song song AB trong đáy.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B12-01: Đường thẳng song song mặt phẳng</title>
<desc id="desc">Hình chóp S.ABCD với đáy ABCD là hình bình hành; M N là trung điểm SA SB; MN màu đỏ nằm phía trên mặt đáy tô xanh và song song AB trong đáy.</desc>
<rect x="0" y="0" width="800" height="450" rx="18" fill="#f8fafc" />
<text x="400" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#0f172a">Đường thẳng song song mặt phẳng</text>
<polygon points="150,330 500,340 610,260 260,250" fill="#dcfce7" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><line x1="275" y1="70" x2="150" y2="330" stroke="#334155" stroke-width="2.8" /><line x1="275" y1="70" x2="500" y2="340" stroke="#334155" stroke-width="2.8" /><line x1="275" y1="70" x2="610" y2="260" stroke="#334155" stroke-width="2.8" /><line x1="275" y1="70" x2="260" y2="250" stroke="#334155" stroke-width="2.8" stroke-dasharray="8 7"/><line x1="150" y1="330" x2="500" y2="340" stroke="#334155" stroke-width="2.8" /><line x1="500" y1="340" x2="610" y2="260" stroke="#334155" stroke-width="2.8" /><line x1="610" y1="260" x2="260" y2="250" stroke="#334155" stroke-width="2.8" /><line x1="260" y1="250" x2="150" y2="330" stroke="#334155" stroke-width="2.8" stroke-dasharray="8 7"/><line x1="212.5" y1="200.0" x2="387.5" y2="205.0" stroke="#dc2626" stroke-width="4" /><circle cx="275" cy="70" r="4.5" fill="#0f172a"/><text x="283" y="61" font-family="Arial" font-size="16" fill="#0f172a">S</text><circle cx="150" cy="330" r="4.5" fill="#0f172a"/><text x="158" y="321" font-family="Arial" font-size="16" fill="#0f172a">A</text><circle cx="500" cy="340" r="4.5" fill="#0f172a"/><text x="508" y="331" font-family="Arial" font-size="16" fill="#0f172a">B</text><circle cx="610" cy="260" r="4.5" fill="#0f172a"/><text x="618" y="251" font-family="Arial" font-size="16" fill="#0f172a">C</text><circle cx="260" cy="250" r="4.5" fill="#0f172a"/><text x="268" y="241" font-family="Arial" font-size="16" fill="#0f172a">D</text><circle cx="212.5" cy="200.0" r="4.5" fill="#b91c1c"/><text x="220.5" y="191.0" font-family="Arial" font-size="16" fill="#b91c1c">M</text><circle cx="387.5" cy="205.0" r="4.5" fill="#b91c1c"/><text x="395.5" y="196.0" font-family="Arial" font-size="16" fill="#b91c1c">N</text><text x="550" y="115" font-size="16" fill="#0f172a">MN ∥ AB</text><text x="550" y="145" font-size="16" fill="#0f172a">MN ∥ (ABCD)</text>
<text x="400" y="427" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#475569">Hình biểu diễn theo phép chiếu song song — không suy ra độ dài/góc thật từ hình vẽ</text>
</svg>
```

### D6. Thẻ khắc phục lỗi — 5 bước

#### HELP-G11-B12-01 · `G11-B12-POSITIONS` · return `THPT-G11-CHIV-B12-C01`

1. **Nhận diện:** Đồng nhất đường nằm trong mặt với song song mặt.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Song song theo định nghĩa SGK là không có điểm chung.
4. **Tự thử:** Nếu AB⊂(ABCD), AB có song song chính mặt (ABCD) không? **Tự đối chiếu:** Không; AB nằm trong mặt, có vô số điểm chung.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B12-C01` và tự nêu lí do mỗi giả thiết cần thiết.

#### HELP-G11-B12-02 · `G11-B12-PARALLEL_TEST` · return `THPT-G11-CHIV-B12-P01`

1. **Nhận diện:** Quên điều kiện đường không thuộc mặt.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Bổ sung giả thiết a không nằm trong (P).
4. **Tự thử:** MN∥AB với AB⊂đáy; cần kiểm thêm gì trước khi suy MN∥đáy? **Tự đối chiếu:** Chứng minh MN không nằm trong mặt đáy.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B12-P01` và tự nêu lí do mỗi giả thiết cần thiết.

## B13. Hai mặt phẳng song song — D1–D6 (SGK trang 88–94)

### D1. Kiến thức tự học, giả thiết và điều kiện

Hai mặt phẳng **phân biệt** song song nếu chúng không có điểm chung. Hai mặt phẳng phân biệt không song song cắt nhau theo một đường thẳng; hai mặt phẳng còn có thể trùng nhau (không gọi song song nếu yêu cầu phân biệt).

**Dấu hiệu song song hai mặt phẳng.** Nếu $(P)$ chứa hai đường thẳng *cắt nhau* $a,b$ và $a\parallel(Q), b\parallel(Q)$ thì $(P)\parallel(Q)$. Không thể thay hai đường *cắt nhau* bằng một đường đơn lẻ hoặc bằng hai đường song song trong $(P)$. Nếu $(P)\parallel(Q)$, mọi mặt phẳng $(R)$ giao với cả hai theo hai đường $d,e$ thì $d\parallel e$.

**Ứng dụng trong hình chóp.** Trong $S.ABC$, lấy $M\in SA$, $N\in SB$, $K\in SC$ sao cho $SM/SA=SN/SB=SK/SC=t$, với $0<t<1$. Khi đó $MN\parallel AB$, $MK\parallel AC$ trong các tam giác $SAB$ và $SAC$, nên $(MNK)\parallel(ABC)$; thiết diện là tam giác $MNK$ đồng dạng tam giác $ABC$ tỉ số $t$. Nếu chỉ biết $SM/SA=SN/SB$, chưa thể khẳng định toàn bộ mặt $(MNK)$ song song đáy khi $K$ không thỏa tỉ số.

### D2. Ví dụ giải thích bản chất

**EX-G11-B13-EX01: Hình lăng trụ.** Với lăng trụ tam giác $ABC.A'B'C'$, hai mặt đáy $(ABC)$ và $(A'B'C')$ song song. Các cạnh bên $AA',BB',CC'$ song song nhau.

**EX-G11-B13-EX02: Dấu hiệu hai đường cắt nhau.** Trong hình hộp $ABCD.A'B'C'D'$, $A'B'\parallel(ABCD)$ và $A'D'\parallel(ABCD)$. Hai đường cắt tại $A'$, suy ra $(A'B'C'D')\parallel(ABCD)$.

**EX-G11-B13-EX03: Mặt cắt trung điểm.** Trong tứ diện $S.ABC$, $M,N,K$ là trung điểm $SA,SB,SC$. $MN\parallel AB$, $MK\parallel AC$ (hai đường cắt nhau tại $M$), nên $(MNK)\parallel(ABC)$. Tỉ số chu vi thiết diện/đáy là $1/2$.

**EX-G11-B13-EX04: Chứng minh bằng tỉ số.** Trong tứ diện $S.ABC$, nếu $SM/SA=SN/SB=SK/SC=2/3$, thiết diện $MNK\parallel ABC$ và $[MNK]/[ABC]=(2/3)^2=4/9$ vì tam giác đồng dạng; không nhầm tỉ số diện tích với tỉ số cạnh.

### D3. SGK Core và Practice/Application — ứng viên canonical

#### THPT-G11-CHIV-B13-C01 · SGK_CORE · `skill_id=G11-B13-PLANE_POSITIONS`

**Đề:** Hai mặt phẳng phân biệt không có điểm chung gọi là gì?

**Đáp án:** Hai mặt phẳng song song.

**Lời giải:** Định nghĩa song song giữa hai mặt phẳng phân biệt.

#### THPT-G11-CHIV-B13-C02 · SGK_CORE · `skill_id=G11-B13-PLANE_TEST`

**Đề:** Trong (P), a và b cắt nhau, cả a,b song song (Q). Có thể suy ra gì?

**Đáp án:** (P)∥(Q).

**Lời giải:** Dấu hiệu hai mặt phẳng song song qua hai đường cắt nhau trong cùng (P).

#### THPT-G11-CHIV-B13-P01 · SGK_PRACTICE · `skill_id=G11-B13-TRANSVERSAL`

**Đề:** (P)∥(Q), (R) cắt cả hai theo d,e. Quan hệ d,e?

**Đáp án:** d∥e.

**Lời giải:** Hai giao tuyến cùng nằm trong (R), phân biệt, không giao nhau do (P),(Q) không giao.

#### THPT-G11-CHIV-B13-P02 · SGK_PRACTICE · `skill_id=G11-B13-PLANE_TEST`

**Đề:** Trong (P) chỉ có một đường a∥(Q). Có đủ khẳng định (P)∥(Q) không?

**Đáp án:** Không.

**Lời giải:** Hai mặt phẳng cắt nhau vẫn có thể chứa đường a song song giao tuyến và không gặp (Q). Cần hai đường cắt nhau.

#### THPT-G11-CHIV-B13-P03 · SGK_PRACTICE · `skill_id=G11-B13-PRISM_RATIO`

**Đề:** Trong chóp S.ABC, M,N,K cùng tỉ số SM/SA=SN/SB=SK/SC=1/3. Có (MNK)∥(ABC) không?

**Đáp án:** Có.

**Lời giải:** Theo các đường trung bình tổng quát MN∥AB, MK∥AC; cả hai cắt nhau trong (MNK), suy hai mặt song song.

#### THPT-G11-CHIV-B13-P04 · SGK_PRACTICE · `skill_id=G11-B13-PRISM_RATIO`

**Đề:** Trong cùng chóp, mặt cắt song song đáy có tỉ số cạnh 2/3. Tỉ số diện tích thiết diện/đáy?

**Đáp án:** 4/9.

**Lời giải:** Hai tam giác đồng dạng nên tỉ số diện tích bằng bình phương 2/3.

### D4. Written/Anchor dùng chung — đáp án và rubric /4

#### THPT-G11-CHIV-B13-W01 · WRITTEN

**Đề:** Trong tứ diện S.ABC, M,N,K lần lượt nằm trên SA,SB,SC và SM/SA=SN/SB=SK/SC=t với 0<t<1. Chứng minh (MNK)∥(ABC).

**Đáp án và lời giải:** Thales trong ΔSAB cho MN∥AB, trong ΔSAC cho MK∥AC. MN,MK cắt tại M; AB,AC cắt tại A; dấu hiệu hai đường cắt nhau song song mặt đối diện suy (MNK)∥(ABC).

**Rubric 4 điểm:**
1. Dùng tỉ số dựng MN∥AB — 1 điểm.
2. Dùng tỉ số dựng MK∥AC — 1 điểm.
3. Nêu MN,MK cắt nhau trong (MNK) — 1 điểm.
4. Áp dụng đúng dấu hiệu hai mặt phẳng song song — 1 điểm.

#### THPT-G11-CHIV-B13-W02-ANCHOR · WRITTEN (ANCHOR TAG)

**Đề:** Trong tứ diện S.ABC có mặt (MNK)∥(ABC) cắt các cạnh SA,SB,SC; biết SM/SA=2/5 và diện tích ABC là 50 cm². Tính diện tích MNK, giải thích công thức.

**Đáp án và lời giải:** Do hai mặt song song, các tam giác MNK và ABC đồng dạng theo tỉ số SM/SA=2/5. Diện tích bằng (2/5)²·50=8 cm².

**Rubric 4 điểm:**
1. Nêu hai tam giác đồng dạng — 1 điểm.
2. Tìm đúng tỉ số cạnh 2/5 — 1 điểm.
3. Bình phương tỉ số để tính diện tích — 1 điểm.
4. Kết luận 8 cm² cùng đơn vị — 1 điểm.

### D5. Hình chính xác theo bản vẽ nguồn — `FIG-G11-B13-01`

**Mô tả khi không tải hình:** Hình hộp có hai mặt đáy ABCD và A phẩy B phẩy C phẩy D phẩy song song, tô xanh lá và xanh lam; các cạnh bên nối tương ứng.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B13-01: Hai mặt phẳng song song</title>
<desc id="desc">Hình hộp có hai mặt đáy ABCD và A phẩy B phẩy C phẩy D phẩy song song, tô xanh lá và xanh lam; các cạnh bên nối tương ứng.</desc>
<rect x="0" y="0" width="800" height="450" rx="18" fill="#f8fafc" />
<text x="400" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#0f172a">Hai mặt phẳng song song</text>
<polygon points="120,315 435,335 585,250 270,230" fill="#dcfce7" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><polygon points="120,190 435,210 585,125 270,105" fill="#dbeafe" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><line x1="120" y1="315" x2="120" y2="190" stroke="#334155" stroke-width="2.8" /><line x1="435" y1="335" x2="435" y2="210" stroke="#334155" stroke-width="2.8" /><line x1="585" y1="250" x2="585" y2="125" stroke="#334155" stroke-width="2.8" /><line x1="270" y1="230" x2="270" y2="105" stroke="#334155" stroke-width="2.8" stroke-dasharray="8 7"/><circle cx="120" cy="315" r="4.5" fill="#0f172a"/><text x="128" y="306" font-family="Arial" font-size="16" fill="#0f172a">A</text><circle cx="435" cy="335" r="4.5" fill="#0f172a"/><text x="443" y="326" font-family="Arial" font-size="16" fill="#0f172a">B</text><circle cx="585" cy="250" r="4.5" fill="#0f172a"/><text x="593" y="241" font-family="Arial" font-size="16" fill="#0f172a">C</text><circle cx="270" cy="230" r="4.5" fill="#0f172a"/><text x="278" y="221" font-family="Arial" font-size="16" fill="#0f172a">D</text><circle cx="120" cy="190" r="4.5" fill="#0f172a"/><text x="128" y="181" font-family="Arial" font-size="16" fill="#0f172a">A′</text><circle cx="435" cy="210" r="4.5" fill="#0f172a"/><text x="443" y="201" font-family="Arial" font-size="16" fill="#0f172a">B′</text><circle cx="585" cy="125" r="4.5" fill="#0f172a"/><text x="593" y="116" font-family="Arial" font-size="16" fill="#0f172a">C′</text><circle cx="270" cy="105" r="4.5" fill="#0f172a"/><text x="278" y="96" font-family="Arial" font-size="16" fill="#0f172a">D′</text><text x="616" y="176" font-size="15" fill="#0f172a">(A′B′C′D′)</text><text x="616" y="297" font-size="15" fill="#0f172a">(ABCD)</text>
<text x="400" y="427" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#475569">Hình biểu diễn theo phép chiếu song song — không suy ra độ dài/góc thật từ hình vẽ</text>
</svg>
```

### D6. Thẻ khắc phục lỗi — 5 bước

#### HELP-G11-B13-01 · `G11-B13-PLANE_TEST` · return `THPT-G11-CHIV-B13-C02`

1. **Nhận diện:** Lấy một cặp đường song song để kết luận hai mặt song song.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Cần hai đường cắt nhau trong một mặt cùng song song mặt kia.
4. **Tự thử:** Một đường a⊂(P) song song (Q) đã chứng minh (P)∥(Q) chưa? **Tự đối chiếu:** Chưa; cần thêm b⊂(P) cắt a và b∥(Q).
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B13-C02` và tự nêu lí do mỗi giả thiết cần thiết.

#### HELP-G11-B13-02 · `G11-B13-PRISM_RATIO` · return `THPT-G11-CHIV-B13-P04`

1. **Nhận diện:** Nhầm tỉ số diện tích với tỉ số cạnh.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Tỉ số diện tích là bình phương tỉ số đồng dạng.
4. **Tự thử:** Nếu cạnh thiết diện/đáy = 2/5 thì diện tích thiết diện/đáy bằng bao nhiêu? **Tự đối chiếu:** (2/5)²=4/25.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B13-P04` và tự nêu lí do mỗi giả thiết cần thiết.

## B14. Phép chiếu song song — D1–D6 (SGK trang 95–101)

### D1. Kiến thức tự học, giả thiết và điều kiện

Cho mặt chiếu $(P)$ và một **phương** $\Delta$ không song song mặt chiếu (đường chỉ phương cắt $(P)$). Ảnh của $M$ là giao điểm duy nhất của $(P)$ với đường qua $M$ song song $\Delta$ (hoặc chính $\Delta$ khi $M$ nằm trên đường đó). Điểm nằm sẵn trên $(P)$ bất biến.

**Tính chất trong trường hợp không suy biến.** Một đường thẳng không song song phương chiếu cho ảnh là đường thẳng; đường thẳng song song phương chiếu cho ảnh **là một điểm**, không phải đường. Ba điểm thẳng hàng cho ba ảnh thẳng hàng và giữ thứ tự khi ảnh đường không suy biến. Hai đường song song không theo phương chiếu có ảnh là hai đường song song **hoặc trùng nhau**; tỉ số hai đoạn thuộc cùng đường hoặc hai đường song song được giữ khi đoạn ảnh không co lại thành điểm. Từ đó trung điểm, trọng tâm tam giác, đường trung bình được bảo toàn khi hình tam giác không bị suy biến.

**Không bảo toàn tổng quát:** số đo độ dài, góc, vuông góc, đường tròn thành đường tròn. Hình vuông có thể được biểu diễn bằng hình bình hành; đường tròn trong mặt phẳng xiên có thể biểu diễn thành elip. Khi vẽ hình chiếu song song cần phân biệt hình biểu diễn và hình thật, đánh dấu đúng đường khuất. Phép chiếu trong chùm tia hội tụ (phối cảnh) không phải phép chiếu song song.

### D2. Ví dụ giải thích bản chất

**EX-G11-B14-EX01: Chiếu hình lăng trụ.** Trong lăng trụ tam giác ABC.A′B′C′, chiếu song song lên (ABC) theo phương AA′. Khi đó A′,B′,C′ lần lượt có ảnh A,B,C vì AA′∥BB′∥CC′, còn các điểm A,B,C của mặt đáy bất biến.

**EX-G11-B14-EX02: Ảnh trung điểm.** Lấy M′ trung điểm A′B′ ở mặt trên lăng trụ. Hình chiếu theo phương AA′ lên (ABC) là M trung điểm AB. Lí do: ảnh A′B′ là AB không suy biến và bảo toàn tỉ số A′M′/M′B′=1.

**EX-G11-B14-EX03: Ảnh suy biến một mặt.** Chiếu hình lăng trụ lên (ABC) theo phương AA′. Cạnh AA′ có ảnh là duy nhất A; toàn bộ mặt bên (ABB′A′) có ảnh là đoạn AB chứ không phải một mặt hai chiều.

**EX-G11-B14-EX04: Giới hạn của hình biểu diễn.** Hình vuông trong không gian có thể được biểu diễn thành hình bình hành có góc không vuông. Phép chiếu song song bảo toàn các cặp cạnh song song khi không suy biến nhưng nói chung không bảo toàn góc hoặc độ dài.

### D3. SGK Core và Practice/Application — ứng viên canonical

#### THPT-G11-CHIV-B14-C01 · SGK_CORE · `skill_id=G11-B14-PROJECTION_DEF`

**Đề:** Phương chiếu Δ có thể song song mặt phẳng chiếu (P) không?

**Đáp án:** Không.

**Lời giải:** Nếu song song, đường qua M cùng hướng có thể không gặp (P), ảnh M không xác định với mọi M.

#### THPT-G11-CHIV-B14-C02 · SGK_CORE · `skill_id=G11-B14-AFFINE_INVARIANTS`

**Đề:** Phép chiếu song song có giữ mọi số đo góc không?

**Đáp án:** Không.

**Lời giải:** Phép chiếu affine tổng quát bảo toàn tỉ số trên đường và quan hệ song song đủ điều kiện, không bảo toàn góc.

#### THPT-G11-CHIV-B14-P01 · SGK_PRACTICE · `skill_id=G11-B14-PROJECTION_DEF`

**Đề:** Trong lăng trụ ABC.A′B′C′, chiếu lên (ABC) theo phương AA′. Ảnh của B′ là điểm nào?

**Đáp án:** B.

**Lời giải:** BB′∥AA′ và B∈(ABC), nên đường chiếu qua B′ gặp (ABC) đúng tại B.

#### THPT-G11-CHIV-B14-P02 · SGK_PRACTICE · `skill_id=G11-B14-AFFINE_INVARIANTS`

**Đề:** M′ là trung điểm B′C′ của lăng trụ tam giác ABC.A′B′C′. Chiếu theo AA′ lên (ABC). Ảnh M′ là điểm nào?

**Đáp án:** Trung điểm M của BC.

**Lời giải:** Ảnh B′C′ là BC không suy biến; phép chiếu giữ tỉ số 1 nên ảnh trung điểm là trung điểm.

#### THPT-G11-CHIV-B14-P03 · SGK_PRACTICE · `skill_id=G11-B14-DEGENERACY`

**Đề:** Một đường a song song phương chiếu Δ có ảnh là đường hay điểm?

**Đáp án:** Một điểm.

**Lời giải:** Mọi đường qua các điểm a theo Δ chính là a, nên cùng giao với (P) tại một điểm.

#### THPT-G11-CHIV-B14-P04 · SGK_PRACTICE · `skill_id=G11-B14-PARALLEL_AND_SHAPES`

**Đề:** Một hình bình hành không suy biến chiếu song song thành hình gì?

**Đáp án:** Hình bình hành.

**Lời giải:** Hai cặp cạnh đối của ảnh vẫn song song hoặc trùng; giả thiết ảnh không suy biến loại trường hợp cùng đường.

### D4. Written/Anchor dùng chung — đáp án và rubric /4

#### THPT-G11-CHIV-B14-W01 · WRITTEN

**Đề:** Trong lăng trụ ABC.A′B′C′, M′∈A′B′ có A′M′:M′B′=2:3. Chiếu theo phương AA′ xuống mặt (ABC), M là ảnh M′. Biết AB=25 cm. Tính AM, MB và chứng minh tỉ số được bảo toàn.

**Đáp án và lời giải:** Chiếu A′↦A, B′↦B, đường A′B′ có ảnh AB không suy biến. Tỉ số AM:MB=2:3. Tổng AB gồm 5 phần, mỗi phần 5 cm, nên AM=10 cm, MB=15 cm.

**Rubric 4 điểm:**
1. Xác định ảnh A′=A, B′=B — 1 điểm.
2. Nêu ảnh A′B′=AB không suy biến — 1 điểm.
3. Dùng tỉ số bảo toàn AM:MB=2:3 — 1 điểm.
4. Tính AM=10 cm, MB=15 cm — 1 điểm.

#### THPT-G11-CHIV-B14-W02-ANCHOR · WRITTEN (ANCHOR TAG)

**Đề:** Cho ΔABC, D là trung điểm BC. Một phép chiếu song song không làm tam giác suy biến biến A,B,C,D thành A′,B′,C′,D′. Chứng minh A′D′ là trung tuyến, và nêu một đại lượng của tam giác không nhất thiết bảo toàn.

**Đáp án và lời giải:** D thuộc BC, BD/DC=1 nên B′,D′,C′ thẳng hàng và B′D′/D′C′=1; D′ trung điểm B′C′. A′D′ là trung tuyến. Góc, ví dụ ∠ABC, không nhất thiết bằng ∠A′B′C′.

**Rubric 4 điểm:**
1. Chứng minh ba ảnh B′,D′,C′ thẳng hàng — 1 điểm.
2. Bảo toàn tỉ số BD/DC=1 — 1 điểm.
3. Kết luận D′ trung điểm và A′D′ trung tuyến — 1 điểm.
4. Nêu góc/độ dài không bảo toàn nói chung — 1 điểm.

### D5. Hình chính xác theo bản vẽ nguồn — `FIG-G11-B14-01`

**Mô tả khi không tải hình:** Hai hình bình hành ABCD và A phẩy B phẩy C phẩy D phẩy ở hai mặt phẳng, các đường chiếu AA phẩy BB phẩy CC phẩy DD phẩy có cùng phương xiên; hình chiếu giữ song song, không nhất thiết giữ góc và độ dài.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B14-01: Phép chiếu song song</title>
<desc id="desc">Hai hình bình hành ABCD và A phẩy B phẩy C phẩy D phẩy ở hai mặt phẳng, các đường chiếu AA phẩy BB phẩy CC phẩy DD phẩy có cùng phương xiên; hình chiếu giữ song song, không nhất thiết giữ góc và độ dài.</desc>
<rect x="0" y="0" width="800" height="450" rx="18" fill="#f8fafc" />
<text x="400" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#0f172a">Phép chiếu song song</text>
<polygon points="225,300 430,315 510,265 305,250" fill="#dcfce7" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><polygon points="150,110 355,125 435,75 230,60" fill="#dbeafe" fill-opacity="0.64" stroke="#64748b" stroke-width="2"/><line x1="150" y1="110" x2="225" y2="300" stroke="#b45309" stroke-width="2.3" /><line x1="355" y1="125" x2="430" y2="315" stroke="#b45309" stroke-width="2.3" /><line x1="435" y1="75" x2="510" y2="265" stroke="#b45309" stroke-width="2.3" /><line x1="230" y1="60" x2="305" y2="250" stroke="#b45309" stroke-width="2.3" stroke-dasharray="8 7"/><circle cx="150" cy="110" r="4.5" fill="#0f172a"/><text x="158" y="101" font-family="Arial" font-size="16" fill="#0f172a">A</text><circle cx="355" cy="125" r="4.5" fill="#0f172a"/><text x="363" y="116" font-family="Arial" font-size="16" fill="#0f172a">B</text><circle cx="435" cy="75" r="4.5" fill="#0f172a"/><text x="443" y="66" font-family="Arial" font-size="16" fill="#0f172a">C</text><circle cx="230" cy="60" r="4.5" fill="#0f172a"/><text x="238" y="51" font-family="Arial" font-size="16" fill="#0f172a">D</text><circle cx="225" cy="300" r="4.5" fill="#065f46"/><text x="233" y="291" font-family="Arial" font-size="16" fill="#065f46">A′</text><circle cx="430" cy="315" r="4.5" fill="#065f46"/><text x="438" y="306" font-family="Arial" font-size="16" fill="#065f46">B′</text><circle cx="510" cy="265" r="4.5" fill="#065f46"/><text x="518" y="256" font-family="Arial" font-size="16" fill="#065f46">C′</text><circle cx="305" cy="250" r="4.5" fill="#065f46"/><text x="313" y="241" font-family="Arial" font-size="16" fill="#065f46">D′</text><text x="557" y="162" font-size="15" fill="#92400e">AA′ ∥ BB′ ∥ CC′ ∥ DD′</text><text x="557" y="198" font-size="15" fill="#065f46">Trung điểm, tỉ số được giữ</text>
<text x="400" y="427" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#475569">Hình biểu diễn theo phép chiếu song song — không suy ra độ dài/góc thật từ hình vẽ</text>
</svg>
```

### D6. Thẻ khắc phục lỗi — 5 bước

#### HELP-G11-B14-01 · `G11-B14-DEGENERACY` · return `THPT-G11-CHIV-B14-P03`

1. **Nhận diện:** Quên đường theo hướng chiếu có ảnh một điểm.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Tách trường hợp suy biến trước khi dùng định lý ảnh đường.
4. **Tự thử:** Chiếu lăng trụ theo AA′ lên đáy: ảnh của đoạn AA′ là gì? **Tự đối chiếu:** Một điểm A, vì AA′ theo phương chiếu.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B14-P03` và tự nêu lí do mỗi giả thiết cần thiết.

#### HELP-G11-B14-02 · `G11-B14-AFFINE_INVARIANTS` · return `THPT-G11-CHIV-B14-P02`

1. **Nhận diện:** Cho rằng phép chiếu giữ độ dài và góc.
2. **Nhắc đúng điều kiện:** kiểm tra giả thiết về quan hệ đường–mặt và điểm đang xét.
3. **Sửa sai:** Chỉ kết luận các bất biến affine đủ điều kiện.
4. **Tự thử:** Ảnh một đoạn có độ dài 2 cm; có suy ra đoạn gốc cũng 2 cm không? **Tự đối chiếu:** Không; phép chiếu song song không bảo toàn độ dài tổng quát.
5. **Quay lại câu gốc:** giải lại `THPT-G11-CHIV-B14-P02` và tự nêu lí do mỗi giả thiết cần thiết.

## Cross-chapter D6: từ đọc hình đến chứng minh độc lập

- Khi gặp hai đường không giao: hỏi **có đồng phẳng không?** trước khi gọi song song.
- Khi gặp đường cùng hướng với một đường thuộc mặt: hỏi **đường thứ nhất có thuộc mặt không?**
- Khi gặp hai mặt phẳng: hỏi **đã có hai đường cắt nhau** trong một mặt cùng song song mặt kia chưa?
- Khi gặp phép chiếu: hỏi **hướng chiếu có cắt mặt chiếu không? ảnh có suy biến không?** trước khi bảo toàn tỉ số/góc.
- Mọi suy luận trên hình không gian phải dựa vào giả thiết/định lý, không dựa vào hai nét vẽ nhìn có vẻ song song.

## Kho tư liệu canonical và bảo vệ đánh giá

- Tổng **30 câu SGK Core/Practice** (2 Core + 4 Practice cho mỗi bài), **10 Written/Anchor** (hai per bài). Anchor chỉ là nhãn Written; không nhân bản item, đáp án, rubric.
- **22 RD1 đề kín độc lập** sẽ nằm trong nguồn Temp thứ hai, gồm RD0 và item_id, lời giải, rubric. Không đưa câu kín và đáp án vào website công khai; không chấm tự động/Mastery cho bản demo.
- Khi dùng Final Submit trong tương lai: không hint, AI Tutor, đáp án, đúng/sai trước thao tác nộp cuối. Không dùng lại nguyên câu đã luyện để tạo đánh giá độc lập.
- Yêu cầu reviewer trực tiếp kiểm chứng *toàn bộ* điều kiện: hai đường phân biệt, đường không thuộc mặt, hai đường cắt nhau trong một mặt, phương chiếu hợp lệ và hình không suy biến. Không coi QA tác giả là Academic PASS.
