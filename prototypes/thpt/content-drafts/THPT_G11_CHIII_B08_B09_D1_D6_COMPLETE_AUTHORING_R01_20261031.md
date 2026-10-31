# Temp — HỌC LIỆU TOÀN CHƯƠNG III TOÁN 11 KNTT · D1–D6 · R01

**PACKET_ID:** `THPT-G11-CHIII-B08-B09-WHOLE-CHAPTER-AUTHORING-R01-20261031`
**ACADEMIC_STATUS:** AUTHOR_QA_CANDIDATE_ONLY, NOT_NOTEBOOKLM_PASS
**LEARNING_PATH:** SGK_CHAPTER; Chapter III B08–B09, cấm suy rộng sang TOPIC_READINESS.
**AUTHORITATIVE_SOURCE_SCOPE:** SGK Toán 11 KNTT tập 1 Bài 8 tr. 58–61, Bài 9 tr. 62–68, Bài tập cuối Chương III tr. 69; nhận diện bằng mục lục và bản PDF SGK công khai. SBT Toán 11 KNTT tập 1 các trang B08–B09/cuối chương: CHƯA KIỂM CHỨNG trực tiếp, yêu cầu NotebookLM đối chiếu nguồn S1 PDF đang có.**
**SOURCE_RULE:** 5 Permanent Sources THPT v2.0 + SGK/SBT KNTT S1. Không dùng kết quả reviewer của chương khác thay cho verdict chương này.
**ID_REGISTER:** 14 outcomes, 28 Core/Practice, 4 Written/Anchor, 3 SVG, 6 HELP, 21 RD1 kín (nằm trong file Temp thứ hai), 0 clone.

## A. Ma trận RD0 của trọn chương

| Outcome ID | Bài | Năng lực / kiến thức |
|---|---|---|
| `G11-B08-GROUPED-DEFINITION` | B08 | Bảng tần số ghép nhóm và thông tin mất đi |
| `G11-B08-CLASS-BOUNDARIES` | B08 | Đầu mút trái đóng, phải mở và dữ liệu ở biên |
| `G11-B08-GROUP-WIDTH` | B08 | Độ rộng nhóm, liên tiếp và phủ miền |
| `G11-B08-FREQUENCY-TABLE` | B08 | Ghép mẫu số liệu thô, tần số và cỡ mẫu |
| `G11-B08-INTERPRETATION` | B08 | Đọc bảng, tỉ lệ, hạn chế khi suy từ dữ liệu ghép |
| `G11-B09-REPRESENTATIVE` | B09 | Giá trị đại diện của nhóm |
| `G11-B09-GROUPED-MEAN` | B09 | Số trung bình có trọng số và ý nghĩa xấp xỉ |
| `G11-B09-CUMULATIVE` | B09 | Tần số tích lũy và nhóm chứa phân vị |
| `G11-B09-GROUPED-MEDIAN` | B09 | Trung vị với vị trí n/2 và nội suy |
| `G11-B09-GROUPED-QUARTILES` | B09 | Q1, Q2, Q3 và các vị trí n/4, 3n/4 |
| `G11-B09-GROUPED-MODE` | B09 | Nhóm tần số lớn nhất, nội suy mốt |
| `G11-B09-MODE-CONDITIONS` | B09 | Điều kiện nhóm bằng độ rộng, biên, cùng tần số |
| `G11-B09-INTERPRETATION` | B09 | Giới hạn và cách diễn giải các số ước lượng |
| `G11-CHIII-INTEGRATED` | CHIII | Từ dữ liệu thô→ghép nhóm→đặc trưng→nhận xét |

## B. D1 – Kiến thức trọn chương

### Bài 8: Mẫu số liệu ghép nhóm
**1. Định nghĩa và cách đọc.** Mẫu số liệu ghép nhóm là bảng phân phối tần số theo các nhóm; mỗi nhóm thường là khoảng nửa kín `[a_i;a_{i+1})` (đôi khi nhóm cuối đóng đầu mút phải nếu bài toán quy định rõ). Tần số `m_i` là số quan sát rơi vào nhóm; cỡ mẫu `n=Σm_i`. Không suy ra các giá trị đơn lẻ hoặc số trung bình chính xác chỉ từ bảng nhóm.
**2. Ghép số liệu thô.** Xác định phạm vi, chia thành các nhóm thích hợp, quy định cách xử lý điểm ở biên, đếm đúng từng số và đối chiếu tổng tần số bằng số quan sát. Khoảng `[10;20)` nhận 10 nhưng không nhận 20. Không đếm hai lần điểm thuộc biên chung.
**3. Độ rộng.** Nhóm `[a;b)` có độ rộng `h=b-a>0`; các khoảng có thể có độ rộng khác nhau trong dữ liệu thực tế, nhưng khi sử dụng công thức mốt nội suy của Bài 9 phải xét điều kiện độ rộng **bằng nhau**. Không buộc mọi bảng ghép nhóm đều có độ rộng bằng nhau.
**4. Tỉ lệ và ý nghĩa.** Tỉ lệ nhóm `m_i/n`; nhóm có tần số nhiều nhất chỉ là nhóm tập trung nhiều quan sát nhất. Số ở giữa nhóm được dùng làm đại diện trong một số phép ước lượng, không phải khẳng định mọi cá thể có cùng số đo.

### Bài 9: Các số đặc trưng đo xu thế trung tâm
**5. Giá trị đại diện và trung bình.** Nhóm có hai đầu mút hữu hạn `a_i,a_{i+1}` có giá trị đại diện `x_i=(a_i+a_{i+1})/2`. Số trung bình ghép nhóm `x̄ = (Σ m_i x_i)/n`. Nếu chỉ biết nhóm mở một phía thì không tự động tính trung điểm. Các số trên là **ước lượng**, không nhất thiết bằng giá trị gốc.
**6. Tần số tích lũy.** Đặt `C_0=0`, `C_i=Σ_{j≤i}m_j`. Nhóm chứa vị trí `t` được xác định bởi tích lũy trước `<t` và tích lũy đến nhóm `≥t`. Khi vị trí đúng ở biên hai nhóm, nội suy cho cùng một đầu mút nếu áp dụng nhất quán.
**7. Trung vị (nội suy).** Nhóm `[L;U)` có tần số `m>0`, độ rộng `h=U-L`, tích lũy trước nhóm `C`. Chọn nhóm chứa vị trí `n/2`; `Me = L + ((n/2-C)/m)h`. Đừng thay bằng giá trị đại diện của nhóm nếu chưa có căn cứ.
**8. Tứ phân vị.** Tương tự, vị trí `n/4, n/2, 3n/4`; `Q_r=L+((rn/4-C)/m)h`, `r∈{1,2,3}`, trên đúng nhóm. `Q_2=Me`; các phân vị là xấp xỉ cho mẫu gốc. Không áp máy móc quy tắc chia đôi mẫu thô lớp 10 vào bảng nhóm.
**9. Mốt (nội suy, điều kiện SGK).** Chỉ áp dụng trực tiếp công thức SGK khi các nhóm có độ rộng chung `h` và xác định được nhóm có tần số lớn nhất `m_j` với hai tần số kề `m_{j-1},m_{j+1}` (đầu biên quy ước tần số ngoài bằng 0). `Mo = L + [(m_j-m_{j-1})/((m_j-m_{j-1})+(m_j-m_{j+1}))]h`. Nếu mọi tần số bằng nhau, SGK quy ước **không có mốt**. Với nhóm rộng khác nhau, không dùng công thức này bừa bãi.
**10. Kiểm tra ngữ cảnh.** Ghi đơn vị, nêu gần đúng và mức độ hợp lý của kết quả. Cùng bảng ghép nhóm có thể ứng với nhiều bộ số liệu gốc, nên không khẳng định các đặc trưng vừa tính bằng đặc trưng gốc chính xác.

## C. D2 – Ví dụ có lời giải

### `VD-G11-B08-01` — Đếm biên
Dữ liệu 9,10,10,19,20 với nhóm [0;10),[10;20),[20;30) cho tần số [1,3,1]; số 10 ở nhóm 2, số 20 ở nhóm 3.

### `VD-G11-B08-02` — Bảng nhóm
Mẫu 2,4,5,7,9,11,14,15 ghép [0;5),[5;10),[10;15),[15;20) cho [2,3,2,1], n=8.

### `VD-G11-B08-03` — Đọc tỉ lệ
Bảng có tần số [6,9,5], n=20: nhóm thứ hai chiếm 45%, không thể kết luận mỗi cá thể có giá trị bằng trung điểm nhóm.

### `VD-G11-B08-04` — Nhóm rộng không đều
[0;5),[5;20),[20;30) đều là các nhóm hợp lệ khi đề bài quy định, với các độ rộng 5,15,10; không tự áp công thức mốt nhóm cùng độ rộng.

### `VD-G11-B09-01` — Trung bình
Mẫu A: [0;10)→4 | [10;20)→8 | [20;30)→6 | [30;40)→2. Trung điểm 5,15,25,35, n=20; x̄=18.

### `VD-G11-B09-02` — Trung vị
Mẫu A tích lũy [4,12,18,20], n/2=10 thuộc [10;20), Me=10+(10−4)×10/8=17,5.

### `VD-G11-B09-03` — Tứ phân vị
Mẫu A, Q1=11,25 tại [10;20), Q3=25 tại [20;30); phân vị nhóm là ước lượng.

### `VD-G11-B09-04` — Mốt
Mẫu A: nhóm tần số 8 là [10;20), m trước 4, sau 6; Mo=10+4/(4+2)×10≈16,67.

### `VD-G11-B09-05` — Giới hạn
Hai mẫu gốc có thể có cùng bảng nhóm nhưng trung bình gốc khác nhau; giá trị đại diện không phải phép đo chính xác.

### `VD-G11-B09-06` — Biên phân vị
Mẫu C tích lũy [2,7,15,20], Q3 tại vị trí 15 bằng 70 là biên chung; không thêm bớt tùy tiện một đơn vị.

## D. D3 – Core, Practice, Vận dụng (một item_id canonical cho mỗi câu)

Quy tắc: mỗi mục là một câu học liệu tự biên soạn (không chép bài SGK), có đáp án/lời giải dùng chung mọi placement; các câu luyện tập xem đáp án không dùng làm RD1 độc lập.

### `THPT-G11-B08-C01` · SGK_CORE · `G11-B08-GROUPED-DEFINITION` · CORE_APPLY
**Đề:** Trong bảng các khoảng [0;5), [5;10), [10;15) với tần số 3,7,5, n là bao nhiêu?
**Đáp án:** n=15.
**Lời giải:** Cộng tần số: 3+7+5=15. Đây là cỡ mẫu, không phải số nhóm.

### `THPT-G11-B08-C02` · SGK_CORE · `G11-B08-CLASS-BOUNDARIES` · CORE_APPLY
**Đề:** Trong cách chia [0;10),[10;20), số liệu đúng bằng 10 thuộc nhóm nào?
**Đáp án:** [10;20).
**Lời giải:** Khoảng trái đóng nhận 10, khoảng trước mở tại 10 nên không nhận.

### `THPT-G11-B08-C03` · SGK_CORE · `G11-B08-GROUP-WIDTH` · CORE_APPLY
**Đề:** Độ dài nhóm [12;18) là bao nhiêu?
**Đáp án:** 6.
**Lời giải:** Lấy đầu mút phải trừ đầu mút trái: 18-12=6.

### `THPT-G11-B08-C04` · SGK_CORE · `G11-B08-FREQUENCY-TABLE` · CORE_APPLY
**Đề:** Các tần số 2,4,5,3 ứng với 4 nhóm. Tần số nhóm thứ ba là gì, cỡ mẫu?
**Đáp án:** 5; n=14.
**Lời giải:** Tần số đọc tại cột thứ ba; n=2+4+5+3=14.

### `THPT-G11-B08-C05` · SGK_CORE · `G11-B08-INTERPRETATION` · CORE_APPLY
**Đề:** Từ bảng ghép nhóm [0;10),[10;20) có tần số 4 và 6, có biết chính xác 10 giá trị ban đầu không?
**Đáp án:** Không.
**Lời giải:** Bảng chỉ lưu khoảng và số lượng trong khoảng, không cho biết vị trí chính xác của từng giá trị.

### `THPT-G11-B08-P01` · SGK_PRACTICE · `G11-B08-CLASS-BOUNDARIES` · CORE_APPLY
**Đề:** Ghép các số 5,10,10,19,20,29 vào [0;10),[10;20),[20;30). Lập bảng tần số.
**Đáp án:** [1,3,2].
**Lời giải:** 5 ở nhóm 1; 10,10,19 nhóm 2; 20,29 nhóm 3; tổng 6.

### `THPT-G11-B08-P02` · SGK_PRACTICE · `G11-B08-GROUP-WIDTH` · CORE_APPLY
**Đề:** Với 4 nhóm [7;11),[11;15),[15;19),[19;23), có cùng độ rộng? Có chồng lấn?
**Đáp án:** Đều rộng 4, liền nhau và không chồng lấn.
**Lời giải:** Mỗi nhóm rộng 11-7=4; hai nhóm kề nhau cùng biên nhưng một bên mở, một bên đóng.

### `THPT-G11-B08-P03` · SGK_PRACTICE · `G11-B08-FREQUENCY-TABLE` · CORE_APPLY
**Đề:** Điểm [1,2,3,4,5,6,7,8,9,10] chia [1;4),[4;7),[7;11). Bảng tần số?
**Đáp án:** [3,3,4].
**Lời giải:** Nhóm 1 gồm 1,2,3; nhóm 2 gồm 4,5,6; nhóm 3 gồm 7,8,9,10.

### `THPT-G11-B08-P04` · SGK_PRACTICE · `G11-B08-INTERPRETATION` · CORE_APPLY
**Đề:** Tần số các khoảng điểm [0;4),[4;8),[8;12) là 6,9,5. Tỉ lệ lớp [4;8) bằng?
**Đáp án:** 9/20=45%.
**Lời giải:** n=6+9+5=20, chia 9 cho 20. Tỉ lệ chỉ phản ánh số liệu trong khoảng.

### `THPT-G11-B08-P05` · SGK_PRACTICE · `G11-B08-FREQUENCY-TABLE` · CORE_APPLY
**Đề:** Cho 20 quan sát và các nhóm có tần số [4,8,6,?]. Điền tần số cuối.
**Đáp án:** 2.
**Lời giải:** 20-(4+8+6)=2, kiểm n=20.

### `THPT-G11-B08-P06` · SGK_PRACTICE · `G11-B08-INTERPRETATION` · CORE_APPLY
**Đề:** Hai bộ dữ liệu 2,3,4 và 2,2,4 cùng thuộc các nhóm [0;3),[3;6). Có thể có bảng ghép giống nhau?
**Đáp án:** Không: bộ thứ nhất [1,2], bộ thứ hai [2,1].
**Lời giải:** Đếm phần tử dưới 3 và từ 3 đến dưới 6 cho từng bộ; không giả định các bộ có cùng bảng chỉ vì cùng miền.

### `THPT-G11-B08-P07` · SGK_PRACTICE · `G11-B08-INTERPRETATION` · CORE_APPLY
**Đề:** Bảng chiều dài [150;155),[155;160),[160;165) có tần số 6,10,4. Có thể kết luận đúng 10 người cao 157,5 cm không?
**Đáp án:** Không.
**Lời giải:** 157,5 là trung điểm đại diện, không phải chiều cao thực tế của từng người trong nhóm.

### `THPT-G11-B08-P08` · SGK_PRACTICE · `G11-B08-GROUPED-DEFINITION` · APPLICATION
**Đề:** Giải thích vì sao nhóm “dưới 15 tuổi” là nhóm ghép, nhưng không có trung điểm hữu hạn khi thiếu đầu mút trái.
**Đáp án:** Đó là nhóm ghép có tần số; không đủ đầu mút hữu hạn để tính trung điểm theo công thức.
**Lời giải:** Ghép nhóm không nhất thiết khoảng đóng cả hai phía. Các phép tính dựa trên trung điểm cần có nhóm được lượng hóa thích hợp.

### `THPT-G11-B09-C01` · SGK_CORE · `G11-B09-REPRESENTATIVE` · CORE_APPLY
**Đề:** Nhóm [20;30) có giá trị đại diện bằng?
**Đáp án:** 25.
**Lời giải:** Trung điểm (20+30)/2=25.

### `THPT-G11-B09-C02` · SGK_CORE · `G11-B09-GROUPED-MEAN` · CORE_APPLY
**Đề:** Bảng [0;10),[10;20) có tần số 2,6. Số trung bình ghép nhóm?
**Đáp án:** 12,5.
**Lời giải:** Giá trị đại diện 5,15; (2·5+6·15)/8=100/8=12,5.

### `THPT-G11-B09-C03` · SGK_CORE · `G11-B09-CUMULATIVE` · CORE_APPLY
**Đề:** Tần số [3,5,2,4] có các tần số tích lũy nào?
**Đáp án:** [3,8,10,14].
**Lời giải:** Cộng dồn từ trái sang phải: 3, 3+5, 3+5+2, 3+5+2+4.

### `THPT-G11-B09-C04` · SGK_CORE · `G11-B09-GROUPED-MEDIAN` · CORE_APPLY
**Đề:** Với A: các nhóm [0;10),[10;20),[20;30),[30;40), tần số [4,8,6,2], trung vị nằm trong nhóm nào?
**Đáp án:** [10;20).
**Lời giải:** n=20, n/2=10; tích lũy 4,12,18,20, nên nhóm 2 chứa vị trí 10.

### `THPT-G11-B09-C05` · SGK_CORE · `G11-B09-MODE-CONDITIONS` · CORE_APPLY
**Đề:** Các nhóm không cùng độ rộng, có được áp dụng trực tiếp công thức mốt của SGK Toán 11 không?
**Đáp án:** Không.
**Lời giải:** Công thức mốt với các hiệu tần số được SGK đưa ra cho nhóm bằng độ rộng. Không áp dụng máy móc cho độ rộng khác nhau.

### `THPT-G11-B09-P01` · SGK_PRACTICE · `G11-B09-GROUPED-MEAN` · CORE_APPLY
**Đề:** Mẫu A: [0;10)→4 | [10;20)→8 | [20;30)→6 | [30;40)→2. Tìm số trung bình ghép nhóm.
**Đáp án:** 18.
**Lời giải:** Midpoint 5,15,25,35; (4·5+8·15+6·25+2·35)/20=360/20=18.

### `THPT-G11-B09-P02` · SGK_PRACTICE · `G11-B09-GROUPED-MEDIAN` · CORE_APPLY
**Đề:** Mẫu A: [0;10)→4 | [10;20)→8 | [20;30)→6 | [30;40)→2. Ước lượng trung vị bằng nội suy.
**Đáp án:** 17,5.
**Lời giải:** n=20; nhóm [10;20) chứa vị trí n/2=10; Me=10+(10-4)·10/8=17,5.

### `THPT-G11-B09-P03` · SGK_PRACTICE · `G11-B09-GROUPED-QUARTILES` · CORE_APPLY
**Đề:** Mẫu A: [0;10)→4 | [10;20)→8 | [20;30)→6 | [30;40)→2. Tính Q1, Q3 theo nội suy SGK.
**Đáp án:** Q1=11,25; Q3=25.
**Lời giải:** Vị trí 5: Q1=10+(5-4)/8·10=11,25. Vị trí 15: Q3=20+(15-12)/6·10=25.

### `THPT-G11-B09-P04` · SGK_PRACTICE · `G11-B09-GROUPED-MODE` · CORE_APPLY
**Đề:** Mẫu A: [0;10)→4 | [10;20)→8 | [20;30)→6 | [30;40)→2. Tìm mốt ước lượng.
**Đáp án:** 50/3≈16,67.
**Lời giải:** Nhóm mốt [10;20) m=8, trước 4, sau 6. Mo=10+[(8-4)/((8-4)+(8-6))]·10=50/3.

### `THPT-G11-B09-P05` · SGK_PRACTICE · `G11-B09-GROUPED-MEAN` · CORE_APPLY
**Đề:** Mẫu B: [10;15)→3 | [15;20)→6 | [20;25)→9 | [25;30)→2. Tính số trung bình ghép nhóm.
**Đáp án:** 20.
**Lời giải:** Trung điểm 12,5;17,5;22,5;27,5. Tổng trọng số 400; n=20, x̄=20.

### `THPT-G11-B09-P06` · SGK_PRACTICE · `G11-B09-CUMULATIVE` · CORE_APPLY
**Đề:** Mẫu B: [10;15)→3 | [15;20)→6 | [20;25)→9 | [25;30)→2. Lập bảng tần số tích lũy, nhóm chứa Q3.
**Đáp án:** [3,9,18,20]; nhóm [20;25).
**Lời giải:** n=20; 3n/4=15; tích lũy lần đầu ≥15 tại nhóm thứ 3.

### `THPT-G11-B09-P07` · SGK_PRACTICE · `G11-B09-GROUPED-MEDIAN` · CORE_APPLY
**Đề:** Mẫu B: [10;15)→3 | [15;20)→6 | [20;25)→9 | [25;30)→2. Tính trung vị.
**Đáp án:** 185/9≈20,56.
**Lời giải:** n/2=10; trước nhóm 3 tích lũy 9, tần số nhóm 9 và h=5: Me=20+(10-9)·5/9=185/9.

### `THPT-G11-B09-P08` · SGK_PRACTICE · `G11-B09-GROUPED-QUARTILES` · CORE_APPLY
**Đề:** Mẫu C: [40;50)→2 | [50;60)→5 | [60;70)→8 | [70;80)→5. Tìm Q1 và Q3.
**Đáp án:** Q1=56; Q3=70.
**Lời giải:** n=20; tích lũy [2,7,15,20]. Q1=50+(5-2)·10/5=56. Q3=60+(15-7)·10/8=70 (biên chung của hai nhóm).

### `THPT-G11-B09-P09` · SGK_PRACTICE · `G11-B09-MODE-CONDITIONS` · CORE_APPLY
**Đề:** Bốn nhóm [0;2),[2;4),[4;6),[6;8) đều có tần số 7. Có mốt theo quy ước SGK không?
**Đáp án:** Không.
**Lời giải:** Khi tần số các nhóm bằng nhau, SGK quy ước mẫu ghép nhóm không có mốt.

### `THPT-G11-B09-P10` · SGK_PRACTICE · `G11-B09-INTERPRETATION` · APPLICATION
**Đề:** Hai bộ số liệu gốc khác nhau nhưng cho cùng bảng ghép nhóm. Số trung bình thực chính xác có bắt buộc giống nhau?
**Đáp án:** Không.
**Lời giải:** Các giá trị bên trong mỗi nhóm có thể khác nhau, nên trung bình gốc khác; trung bình nhóm chỉ là ước lượng.

## E. D4 – Thư viện Written/Anchor dùng chung (Anchor là nhãn Written, không phải bank mới)

### `THPT-G11-CHIII-W08-01` · WRITTEN · `G11-B08-FREQUENCY-TABLE`
**Đề:** Dữ liệu quãng đường (km): 1,2,2,3,3,4,5,5,6,7,8,9. Lập bảng tần số ghép nhóm [0;3),[3;6),[6;9),[9;12), kiểm cỡ mẫu.
**Đáp án:** [3,5,3,1]; n=12.
**Lời giải:** [0;3) nhận 1,2,2; [3;6) nhận 3,3,4,5,5; [6;9) nhận 6,7,8; [9;12) nhận 9. Tổng 12.
**Rubric /4:** (1) Xác định bốn nhóm đúng — 1đ; (2) Đếm đúng hai nhóm đầu — 1đ; (3) Đếm đúng hai nhóm cuối — 1đ; (4) Cộng tổng và giải thích biên — 1đ

### `THPT-G11-CHIII-W08-02-ANCHOR` · WRITTEN/ANCHOR · `G11-B08-INTERPRETATION`
**Đề:** Bảng khoảng thời gian [0;15),[15;30),[30;45) có tần số 8,12,4. (a) Tỉ lệ từ 15 tới dưới 30 phút? (b) Có thể nói mọi người nhóm 2 mất đúng 22,5 phút không?
**Đáp án:** 50%; không.
**Lời giải:** Tổng 24; 12/24=50%. 22,5 là giá trị đại diện theo trung điểm, không xác định từng thời gian thực.
**Rubric /4:** (1) Tính cỡ mẫu — 1đ; (2) Tỉ lệ phân số — 1đ; (3) Quy đổi phần trăm — 1đ; (4) Nhận xét mất thông tin/không gán mọi cá thể — 1đ

### `THPT-G11-CHIII-W09-01` · WRITTEN · `G11-B09-GROUPED-MEDIAN`
**Đề:** Với mẫu D [2;4)→4 | [4;6)→6 | [6;8)→8 | [8;10)→2, tính số trung bình, trung vị và giải thích đây là các ước lượng.
**Đáp án:** x̄=5,8; Me=6.
**Lời giải:** n=20; trung điểm 3,5,7,9; tổng 4·3+6·5+8·7+2·9=116, x̄=116/20=5,8. Tích lũy [4,10,18,20]; n/2=10 thuộc nhóm [4;6); Me=4+(10-4)·2/6=6. Đây là hai ước lượng khi chỉ biết bảng ghép nhóm, không phải giá trị gốc chính xác.
**Rubric /4:** (1) Giá trị đại diện — 1đ; (2) Tổng trọng số và n — 1đ; (3) Nội suy Me đúng — 1đ; (4) Nêu tính xấp xỉ — 1đ

### `THPT-G11-CHIII-W09-02-ANCHOR` · WRITTEN/ANCHOR · `G11-B09-GROUPED-MODE`
**Đề:** Với mẫu E [100;110)→5 | [110;120)→10 | [120;130)→3 | [130;140)→2, tìm Q1,Q3,Mo và ý nghĩa.
**Đáp án:** Q1=110; Q3=120; Mo=685/6≈114,17.
**Lời giải:** n=20; tích lũy [5,15,18,20]. Q1=100+(5-0)·10/5=110; Q3=110+(15-5)·10/10=120 (không phải 117,5). Mốt nhóm [110;120), m=10, trước 5, sau 3: Mo=110+[5/(5+7)]·10=685/6≈114,17. Cả Q1, Q3 và Mo chỉ ước lượng vị trí trung tâm của mẫu gốc, không xác định giá trị gốc chính xác.
**Rubric /4:** (1) Chọn đúng nhóm Q1 — 1đ; (2) Nội suy Q1 — 1đ; (3) Chọn nhóm Q3 và Q3 — 1đ; (4) Mốt và giải thích xấp xỉ — 1đ

## F. D5 – Hình và dữ liệu hỗ trợ

SVG có `<title>`/`<desc>`, vùng biểu đồ và văn bản fallback. Tất cả số ở hình dựa trên Mẫu A; phải review toán học đồ thị như một phần gói này (3 SVG tự biên soạn mới).

### FIG-G11-B08-01 — Bảng tần số ghép nhóm minh họa — Mẫu A
**Text fallback:** Bốn nhóm [0;10), [10;20), [20;30), [30;40) có các tần số lần lượt 4,8,6,2. Cột liên tiếp, đầu mút trái được nhận và đầu mút phải bị loại.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 350" width="840" height="350" role="img" aria-labelledby="title desc"><title id="title">Bảng tần số ghép nhóm minh họa — Mẫu A</title><desc id="desc">Bốn nhóm [0;10), [10;20), [20;30), [30;40) có các tần số lần lượt 4,8,6,2. Cột liên tiếp, đầu mút trái được nhận và đầu mút phải bị loại.</desc><rect width="840" height="350" fill="#ffffff"/><text x="420" y="26" font-family="DejaVu Sans,sans-serif" text-anchor="middle" font-size="17" fill="#152238" font-weight="600">Bảng tần số ghép nhóm minh họa — Mẫu A</text><path d="M80 295 H770" stroke="#333" stroke-width="1.5"/><path d="M80 295 V60" stroke="#333" stroke-width="1.5"/><rect x="90" y="207" width="156" height="88" fill="#7cb7d6" stroke="#1a567d"/><text x="168" y="200" font-size="15" fill="#27364a" text-anchor="middle">4</text><text x="168" y="319" font-size="13" fill="#27364a" text-anchor="middle">[0;10)</text><rect x="246" y="119" width="156" height="176" fill="#7cb7d6" stroke="#1a567d"/><text x="324" y="112" font-size="15" fill="#27364a" text-anchor="middle">8</text><text x="324" y="319" font-size="13" fill="#27364a" text-anchor="middle">[10;20)</text><rect x="402" y="163" width="156" height="132" fill="#7cb7d6" stroke="#1a567d"/><text x="480" y="156" font-size="15" fill="#27364a" text-anchor="middle">6</text><text x="480" y="319" font-size="13" fill="#27364a" text-anchor="middle">[20;30)</text><rect x="558" y="251" width="156" height="44" fill="#7cb7d6" stroke="#1a567d"/><text x="636" y="244" font-size="15" fill="#27364a" text-anchor="middle">2</text><text x="636" y="319" font-size="13" fill="#27364a" text-anchor="middle">[30;40)</text><text x="26" y="65" font-size="14" fill="#27364a">Tần số</text><text x="660" y="340" font-size="14" fill="#27364a">Khoảng giá trị</text></svg>
```

### FIG-G11-B09-01 — Tần số tích lũy theo biên nhóm — Mẫu A
**Text fallback:** Tần số tích lũy tại các biên phải 10,20,30,40 tương ứng 4,12,18,20; đồ thị dùng các điểm cho bảng tích lũy, không biểu thị dữ liệu cá nhân liên tục.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 350" width="840" height="350" role="img" aria-labelledby="title desc"><title id="title">Tần số tích lũy theo biên nhóm — Mẫu A</title><desc id="desc">Tần số tích lũy tại các biên phải 10,20,30,40 tương ứng 4,12,18,20; đồ thị dùng các điểm cho bảng tích lũy, không biểu thị dữ liệu cá nhân liên tục.</desc><rect width="840" height="350" fill="#ffffff"/><text x="420" y="26" font-family="DejaVu Sans,sans-serif" text-anchor="middle" font-size="17" fill="#152238" font-weight="600">Tần số tích lũy theo biên nhóm — Mẫu A</text><path d="M85 295 H770 M85 295 V48" fill="none" stroke="#333" stroke-width="1.6"/><circle cx="240" cy="259" r="6" fill="#2563eb"/><text x="240" y="247" font-size="14" text-anchor="middle" fill="#1e293b">4</text><text x="240" y="317" font-size="13" text-anchor="middle">10</text><circle cx="390" cy="187" r="6" fill="#2563eb"/><text x="390" y="175" font-size="14" text-anchor="middle" fill="#1e293b">12</text><text x="390" y="317" font-size="13" text-anchor="middle">20</text><circle cx="540" cy="133" r="6" fill="#2563eb"/><text x="540" y="121" font-size="14" text-anchor="middle" fill="#1e293b">18</text><text x="540" y="317" font-size="13" text-anchor="middle">30</text><circle cx="690" cy="115" r="6" fill="#2563eb"/><text x="690" y="103" font-size="14" text-anchor="middle" fill="#1e293b">20</text><text x="690" y="317" font-size="13" text-anchor="middle">40</text><text x="22" y="68" font-size="14">Tích lũy</text><text x="665" y="338" font-size="14">Biên phải</text></svg>
```

### FIG-G11-B09-02 — Ba phân vị nội suy trên trục khoảng — Mẫu A
**Text fallback:** Mẫu A có Q1 xấp xỉ 11,25, trung vị 17,5 và Q3 là 25. Các điểm biểu thị giá trị ước lượng từ bảng ghép nhóm, không phải quantile gốc chính xác.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 350" width="840" height="350" role="img" aria-labelledby="title desc"><title id="title">Ba phân vị nội suy trên trục khoảng — Mẫu A</title><desc id="desc">Mẫu A có Q1 xấp xỉ 11,25, trung vị 17,5 và Q3 là 25. Các điểm biểu thị giá trị ước lượng từ bảng ghép nhóm, không phải quantile gốc chính xác.</desc><rect width="840" height="350" fill="#ffffff"/><text x="420" y="26" font-family="DejaVu Sans,sans-serif" text-anchor="middle" font-size="17" fill="#152238" font-weight="600">Ba phân vị nội suy trên trục khoảng — Mẫu A</text><path d="M80 218 H770 M80 218 V73" stroke="#333" fill="none" stroke-width="1.5"/><path d="M85 211 V225" stroke="#333"/><text x="85" y="248" font-size="15" text-anchor="middle">0</text><path d="M245 211 V225" stroke="#333"/><text x="245" y="248" font-size="15" text-anchor="middle">10</text><path d="M405 211 V225" stroke="#333"/><text x="405" y="248" font-size="15" text-anchor="middle">20</text><path d="M565 211 V225" stroke="#333"/><text x="565" y="248" font-size="15" text-anchor="middle">30</text><path d="M725 211 V225" stroke="#333"/><text x="725" y="248" font-size="15" text-anchor="middle">40</text><line x1="265.0" y1="108" x2="265.0" y2="218" stroke="#ca4f35" stroke-dasharray="6 4" stroke-width="2"/><text x="265.0" y="96" text-anchor="middle" font-size="14" fill="#ca4f35">Q1=11,25</text><line x1="365.0" y1="108" x2="365.0" y2="218" stroke="#1d4ed8" stroke-dasharray="6 4" stroke-width="2"/><text x="365.0" y="96" text-anchor="middle" font-size="14" fill="#1d4ed8">Me=17,5</text><line x1="485.0" y1="108" x2="485.0" y2="218" stroke="#047857" stroke-dasharray="6 4" stroke-width="2"/><text x="485.0" y="96" text-anchor="middle" font-size="14" fill="#047857">Q3=25</text><text x="85" y="282" font-size="14">Nội suy phân vị trong khoảng, không xác định chính xác phân vị của dữ liệu gốc.</text></svg>
```

## G. D6 – Thẻ khắc phục theo kĩ năng (6 HELP_ID)

### HELP-G11-B08-01 · G11-B08-CLASS-BOUNDARIES
**Lỗi nhận diện:** Nhầm đầu mút chung.
**5 bước khắc phục:** (1) Viết lại hai khoảng kề nhau [0;10) và [10;20).; (2) Nhắc quy ước a≤x<b cho [a;b).; (3) Thử x=10: không thuộc khoảng trước, thuộc khoảng sau.; (4) Đếm lại 5,10,10,19,20,29 được [1,3,2].; (5) Làm lại Core B08-C02, rồi Practice B08-P01.
**Trở về luyện tập:** B08-C02/P01. Không hiện HELP trong Tự kiểm tra trước Final Submit.

### HELP-G11-B08-02 · G11-B08-FREQUENCY-TABLE
**Lỗi nhận diện:** Cộng sai tần số.
**5 bước khắc phục:** (1) Đếm số phần tử của bảng gốc và ghi n.; (2) Gạch dấu từng phần tử vào đúng một nhóm.; (3) Cộng lại tổng tần số và so với n.; (4) Nếu n=20 và ba nhóm đã có 4,8,6 thì nhóm cuối phải là 2.; (5) Làm lại B08-C01, B08-P05 rồi kiểm tổng lần nữa.
**Trở về luyện tập:** B08-C01/P05. Không hiện HELP trong Tự kiểm tra trước Final Submit.

### HELP-G11-B08-03 · G11-B08-INTERPRETATION
**Lỗi nhận diện:** Giá trị đại diện bị coi là số thật.
**5 bước khắc phục:** (1) Nêu rõ bảng chỉ cho khoảng và số lượng.; (2) Giá trị đại diện là trung điểm dùng để ước lượng.; (3) Tạo hai giá trị khác nhau cùng thuộc [155;160).; (4) Nhận xét chúng có cùng nhóm mà số đo gốc khác nhau.; (5) Làm lại B08-C05, B08-P07 và giải thích bằng lời.
**Trở về luyện tập:** B08-C05/P07. Không hiện HELP trong Tự kiểm tra trước Final Submit.

### HELP-G11-B09-01 · G11-B09-GROUPED-MEAN
**Lỗi nhận diện:** Quên trọng số.
**5 bước khắc phục:** (1) Viết giá trị đại diện x_i cho từng nhóm.; (2) Nhân từng x_i với tần số m_i tương ứng.; (3) Lấy tổng các tích chia n=Σm_i, không chia số nhóm.; (4) Kiểm bảng [0;10):2,[10;20):6 có x̄=12,5.; (5) Làm lại B09-C02, B09-P01 và ghi đơn vị.
**Trở về luyện tập:** B09-C02/P01. Không hiện HELP trong Tự kiểm tra trước Final Submit.

### HELP-G11-B09-02 · G11-B09-GROUPED-MEDIAN
**Lỗi nhận diện:** Nhầm nhóm chứa Me/Q1/Q3.
**5 bước khắc phục:** (1) Cộng tích lũy từ nhóm trái sang nhóm phải.; (2) Xác định vị trí mục tiêu n/4, n/2 hoặc 3n/4.; (3) Chọn nhóm có tích lũy lần đầu đạt/vượt vị trí.; (4) Thay L,C,m,h vào L+[(vị trí-C)/m]h, kiểm kết quả thuộc nhóm.; (5) Làm lại B09-C04, B09-P02 và kiểm khi vị trí trùng biên.
**Trở về luyện tập:** B09-C04/P02. Không hiện HELP trong Tự kiểm tra trước Final Submit.

### HELP-G11-B09-03 · G11-B09-GROUPED-MODE
**Lỗi nhận diện:** Lạm dụng công thức Mo.
**5 bước khắc phục:** (1) Kiểm tất cả độ rộng nhóm có giống nhau không.; (2) Nếu không đều, dừng: không áp công thức mốt SGK.; (3) Nếu đều, chọn nhóm có tần số lớn nhất, ghi hai tần số kề.; (4) Dùng Mo=L+[(m_j-m_trước)/(2m_j-m_trước-m_sau)]h; khi tất cả bằng nhau, theo SGK không có mốt.; (5) Làm lại B09-C05, B09-P04 và diễn giải đây là ước lượng.
**Trở về luyện tập:** B09-C05/P04. Không hiện HELP trong Tự kiểm tra trước Final Submit.

## H. Ranh giới Readiness và phạm vi phản biện một lượt
Nguồn Temp thứ hai chứa ma trận RD0 + 21 câu RD1 kín có lời giải và rubric bốn tiêu chí (mỗi tiêu chí 1 điểm), cùng comparator ID của 32 câu công khai. Reviewer phải đối chiếu tính độc lập, điều kiện, phạm vi S1, số trang SBT chính xác, dữ liệu hình, các trường hợp n/4 đúng biên và mẫu không có mốt.
**ACADEMIC_CLEARANCE=NOT_GRANTED**, **RELEASE_AUTHORIZATION=NO**, **MASTERY_ACTIVATION=NO**, **SYSTEM_HOLD=YES**. Không đưa câu/đáp án RD1 lên GitHub công khai hoặc JS người học.
