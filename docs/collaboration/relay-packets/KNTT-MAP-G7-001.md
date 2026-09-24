# OFFLINE RELAY PACKET — KNTT-MAP-G7-001

> Nếu bạn là Gemini và không truy cập được URL ngoài, packet này đã chứa đủ context tối thiểu + mục lục xác minh + task.

## PROJECT CONTEXT

- Project: Roadmap Toán THCS
- Context version: 1.0.3
- Primary textbook: Kết nối tri thức
- Architecture: 25 chuyên đề cố định
- Layers:
  1. KNTT-Core
  2. Entrance10
  3. Specialized-Challenge
- Gemini role: pedagogical/academic lead for drafting and review
- ChatGPT role: repository/schema/technical integration + cross-check
- High-risk geometry/specialized problems: dual independent review

## VERTICAL SPINE — PRIMARY ARCHITECTURE

- 25 chuyên đề là mạch kiến thức dọc xuyên suốt lớp 6-9.
- Mapping lớp 7 chỉ là **overlay/index** để đồng bộ với SGK.
- Không tạo cây kiến thức lớp 7 riêng.
- Với mỗi nhóm bài, cố gắng xác định: prerequisite từ trước → skill hiện tại → downstream use.
- Học sinh phải có khả năng lần ngược lỗ hổng và nhìn thấy kiến thức sẽ dùng tiếp ở đâu.

## HARD RULES

- Không đổi 25-topic architecture.
- Không tự tạo Roadmap topic ID.
- Không trộn Challenge vào Core.
- Không coi AI draft là Source of Truth.
- Nếu không chắc: ghi UNCERTAIN/PROPOSED.

### Mục lục KNTT Toán 7 đã xác minh — dùng làm INPUT, không tự dựng lại

1. **Chương 1 – Số hữu tỉ**
   - Bài 1: Tập hợp các số hữu tỉ
   - Bài 2: Cộng, trừ, nhân, chia số hữu tỉ
   - Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ
   - Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế

2. **Chương 2 – Số thực**
   - Bài 5: Làm quen với số thập phân vô hạn tuần hoàn
   - Bài 6: Số vô tỉ. Căn bậc hai số học
   - Bài 7: Tập hợp các số thực

3. **Chương 3 – Góc và đường thẳng song song**
   - Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc
   - Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết
   - Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song
   - Bài 11: Định lí và chứng minh định lí

4. **Chương 4 – Tam giác bằng nhau**
   - Bài 12: Tổng các góc trong một tam giác
   - Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác
   - Bài 14: Trường hợp bằng nhau thứ hai và thứ ba của tam giác
   - Bài 15: Các trường hợp bằng nhau của tam giác vuông
   - Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng

5. **Chương 5 – Thu thập và biểu diễn dữ liệu**
   - Bài 17: Thu thập và phân loại dữ liệu
   - Bài 18: Biểu đồ hình quạt tròn
   - Bài 19: Biểu đồ đoạn thẳng

6. **Chương 6 – Tỉ lệ thức và đại lượng tỉ lệ**
   - Bài 20: Tỉ lệ thức
   - Bài 21: Tính chất của dãy tỉ số bằng nhau
   - Bài 22: Đại lượng tỉ lệ thuận
   - Bài 23: Đại lượng tỉ lệ nghịch

7. **Chương 7 – Biểu thức đại số và đa thức một biến**
   - Bài 24: Biểu thức đại số
   - Bài 25: Đa thức một biến
   - Bài 26: Phép cộng và phép trừ đa thức một biến
   - Bài 27: Phép nhân đa thức một biến
   - Bài 28: Phép chia đa thức một biến

8. **Chương 8 – Làm quen với biến cố và xác suất của biến cố**
   - Bài 29: Làm quen với biến cố
   - Bài 30: Làm quen với xác suất của biến cố

9. **Chương 9 – Quan hệ giữa các yếu tố trong một tam giác**
   - Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác
   - Bài 32: Quan hệ giữa đường vuông góc và đường xiên
   - Bài 33: Quan hệ giữa ba cạnh của một tam giác
   - Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác
   - Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác

10. **Chương 10 – Một số hình khối trong thực tiễn**
   - Bài 36: Hình hộp chữ nhật và hình lập phương
   - Bài 37: Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác

**Hoạt động trải nghiệm đáng chú ý:** GeoGebra; Dân số và cơ cấu dân số Việt Nam; Đại lượng tỉ lệ trong đời sống; Hộp quà và chân đế lịch để bàn.

## VALID ROADMAP TOPIC IDS

- `01-ban-do-chuong-trinh`
- `02-so-va-phep-tinh`
- `03-ti-le-ti-le-thuc`
- `04-bieu-thuc-dai-so`
- `05-7-hang-dang-thuc`
- `06-phan-tich-da-thuc`
- `07-phan-thuc-dai-so`
- `08-phuong-trinh-bat-phuong-trinh`
- `09-he-phuong-trinh`
- `10-ham-so-do-thi`
- `11-can-thuc`
- `12-phuong-trinh-bac-hai-viete`
- `13-goc-va-duong-thang`
- `14-tam-giac`
- `15-duong-dong-quy`
- `16-tu-giac`
- `17-thales-dong-dang`
- `18-he-thuc-luong`
- `19-duong-tron`
- `20-hinh-hoc-tong-hop`
- `21-thong-ke`
- `22-dai-luong-dac-trung`
- `23-xac-suat`
- `24-bai-toan-thuc-te`
- `25-tong-hop-on-thi-10`

---

# TASK KNTT-MAP-G7-001

**Status:** OPEN  
**Primary:** Gemini  
**Integrator/Reviewer:** ChatGPT  
**Layer:** KNTT-Core  
**Scope:** Toán 7 – Kết nối tri thức  
**Context version:** 1.0.3

## 1. Mục tiêu

Rà soát **Toán 7 – Kết nối tri thức** và lập mapping vào **25 chuyên đề hiện có của Roadmap Toán THCS**.

Đây là task **mapping/audit**, không phải task thiết kế lại Roadmap.

## 2. Nguyên tắc Vertical Spine

Task này chỉ tạo **mapping/index cho lớp 7 trên cùng mạch kiến thức dọc 25 chuyên đề**.

Không được:
- tạo một cây kiến thức lớp 7 độc lập;
- coi ranh giới lớp 7 là ranh giới của một chuyên đề;
- làm mất liên kết prerequisite từ lớp trước hoặc knowledge-next sang lớp sau.

Với mỗi nhóm bài, ngoài mapping theo lớp, hãy cố gắng chỉ ra:
- kiến thức nền đã có từ lớp trước;
- skill được mở rộng ở đây;
- skill/chuyên đề nào sẽ dùng tiếp sau này.

## 3. Bài học từ task lớp 6

Ở task lớp 6, coverage theo nhóm kiến thức khá tốt nhưng có hai lỗi hệ thống:
- nhớ sai số/tên chương;
- dùng pseudo topic ID không tồn tại trong repository.

Task lớp 7 loại bỏ hai nguồn lỗi đó bằng cách:
1. cung cấp mục lục KNTT đã xác minh sẵn;
2. chỉ cho phép dùng topic ID trong danh sách hợp lệ bên dưới.

### Mục lục KNTT Toán 7 đã xác minh — dùng làm INPUT, không tự dựng lại

1. **Chương 1 – Số hữu tỉ**
   - Bài 1: Tập hợp các số hữu tỉ
   - Bài 2: Cộng, trừ, nhân, chia số hữu tỉ
   - Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ
   - Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế

2. **Chương 2 – Số thực**
   - Bài 5: Làm quen với số thập phân vô hạn tuần hoàn
   - Bài 6: Số vô tỉ. Căn bậc hai số học
   - Bài 7: Tập hợp các số thực

3. **Chương 3 – Góc và đường thẳng song song**
   - Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc
   - Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết
   - Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song
   - Bài 11: Định lí và chứng minh định lí

4. **Chương 4 – Tam giác bằng nhau**
   - Bài 12: Tổng các góc trong một tam giác
   - Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác
   - Bài 14: Trường hợp bằng nhau thứ hai và thứ ba của tam giác
   - Bài 15: Các trường hợp bằng nhau của tam giác vuông
   - Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng

5. **Chương 5 – Thu thập và biểu diễn dữ liệu**
   - Bài 17: Thu thập và phân loại dữ liệu
   - Bài 18: Biểu đồ hình quạt tròn
   - Bài 19: Biểu đồ đoạn thẳng

6. **Chương 6 – Tỉ lệ thức và đại lượng tỉ lệ**
   - Bài 20: Tỉ lệ thức
   - Bài 21: Tính chất của dãy tỉ số bằng nhau
   - Bài 22: Đại lượng tỉ lệ thuận
   - Bài 23: Đại lượng tỉ lệ nghịch

7. **Chương 7 – Biểu thức đại số và đa thức một biến**
   - Bài 24: Biểu thức đại số
   - Bài 25: Đa thức một biến
   - Bài 26: Phép cộng và phép trừ đa thức một biến
   - Bài 27: Phép nhân đa thức một biến
   - Bài 28: Phép chia đa thức một biến

8. **Chương 8 – Làm quen với biến cố và xác suất của biến cố**
   - Bài 29: Làm quen với biến cố
   - Bài 30: Làm quen với xác suất của biến cố

9. **Chương 9 – Quan hệ giữa các yếu tố trong một tam giác**
   - Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác
   - Bài 32: Quan hệ giữa đường vuông góc và đường xiên
   - Bài 33: Quan hệ giữa ba cạnh của một tam giác
   - Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác
   - Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác

10. **Chương 10 – Một số hình khối trong thực tiễn**
   - Bài 36: Hình hộp chữ nhật và hình lập phương
   - Bài 37: Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác

**Hoạt động trải nghiệm đáng chú ý:** GeoGebra; Dân số và cơ cấu dân số Việt Nam; Đại lượng tỉ lệ trong đời sống; Hộp quà và chân đế lịch để bàn.

## 4. Topic ID hợp lệ

Chỉ dùng một hoặc nhiều ID sau. **Không tự tạo ID mới**:

```text
01-ban-do-chuong-trinh
02-so-va-phep-tinh
03-ti-le-ti-le-thuc
04-bieu-thuc-dai-so
05-7-hang-dang-thuc
06-phan-tich-da-thuc
07-phan-thuc-dai-so
08-phuong-trinh-bat-phuong-trinh
09-he-phuong-trinh
10-ham-so-do-thi
11-can-thuc
12-phuong-trinh-bac-hai-viete
13-goc-va-duong-thang
14-tam-giac
15-duong-dong-quy
16-tu-giac
17-thales-dong-dang
18-he-thuc-luong
19-duong-tron
20-hinh-hoc-tong-hop
21-thong-ke
22-dai-luong-dac-trung
23-xac-suat
24-bai-toan-thuc-te
25-tong-hop-on-thi-10
```

## 5. Nhiệm vụ

Với từng bài/nhóm bài trong mục lục đã cho, hãy xác định:

- kiến thức/yêu cầu cốt lõi;
- Roadmap topic ID phù hợp;
- relation:
  - `PRIMARY`
  - `SECONDARY`
  - `PREREQUISITE`
- skill đề xuất;
- skill nào nên tái sử dụng từ hệ hiện có nếu biết chắc;
- gap nếu Roadmap/Practice Bank chưa thể hiện đủ Grade 7 Core;
- overreach nếu một bank có nội dung lớp sau nhưng dễ bị hiểu nhầm là Grade 7 Core;
- cross-link cần thêm.

## 6. Quy tắc học thuật

- Mục lục ở trên là **input đã xác minh**, không sửa số chương/tên bài trừ khi phát hiện mâu thuẫn và ghi rõ bằng chứng.
- Không trộn thi chuyên vào Core.
- Không biến difficulty thành curriculum layer.
- Nếu không chắc một skill đã tồn tại trong repo, ghi `PROPOSED` thay vì khẳng định.
- Với xác suất, dùng đúng mức khái niệm của lớp 7; không tự kéo nội dung lớp sau vào.
- Với hình học, phân biệt kiến thức định nghĩa/tính chất với kỹ năng chứng minh.

## 7. Output format

```text
TASK_ID: KNTT-MAP-G7-001
CONTEXT_VERSION: 1.0.3
ROLE: author
LAYER: KNTT-Core
TOPIC: Grade 7 mapping

VERDICT:
PASS / PASS-WITH-CHANGES / BLOCKED

A. COVERAGE TABLE
| KNTT chapter | Lesson/group | Core knowledge | Roadmap topic ID(s) | Relation | Proposed skills | Existing/proposed | Upstream prerequisites | Downstream use | Notes |

B. POSSIBLE GAPS
1. ...

C. POSSIBLE OVERREACH IN CURRENT ROADMAP/PRACTICE
1. ...

D. CROSS-LINKS TO ADD
1. ...

E. PEDAGOGICAL NOTES
1. ...

F. UNCERTAINTIES
- NONE
hoặc
- ...

G. RECOMMENDED NEXT STEP
...
```

## 8. Tiêu chí hoàn thành

- phủ đủ 10 chương;
- chỉ dùng topic ID hợp lệ;
- không tự thay đổi mục lục;
- skill đủ nhỏ để chẩn đoán;
- phân biệt existing/proposed;
- nêu gap/overreach/cross-link;
- mọi điểm không chắc phải ghi rõ.

## 9. Sau khi Gemini trả lời

ChatGPT sẽ:
1. đối chiếu repository;
2. kiểm tra lại curriculum;
3. chuẩn hóa skill;
4. tạo Grade 7 curriculum metadata;
5. cập nhật capability evidence;
6. chỉ sau đó mới publish mapping.


## FINAL INSTRUCTION

Hãy thực hiện ngay task này dựa trên packet. Không yêu cầu người dùng cung cấp URL khác nếu thông tin bắt buộc đã có trong packet.
