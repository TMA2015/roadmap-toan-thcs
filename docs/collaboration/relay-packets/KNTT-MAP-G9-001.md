# OFFLINE RELAY PACKET — KNTT-MAP-G9-001

Packet này chứa context, mục lục đã xác minh, topic whitelist, skill inventory và các điểm audit đặc biệt.

## PROJECT CONTEXT

- Project: Roadmap Toán THCS
- Context version: 1.0.5
- Primary architecture: 25-topic Vertical Spine
- KNTT grade mapping: overlay/index only
- Gemini: academic/pedagogical lead
- ChatGPT: repository/schema/integration/QA lead
- Mastery: soft mastery, no absolute 100% hard gate
- Grade 9 Core ≠ Entrance10

## HARD RULES

- Không đổi 25 topic.
- Không tạo topic ID mới.
- Không coi mọi skill trong inventory là Grade 9 Core.
- Không trộn Entrance10/Challenge vào Core.
- Không ép CĐ22 vào KNTT nếu mục lục không hỗ trợ.
- Mỗi nhóm bài cần upstream → current → downstream/reuse.
- Nếu không chắc: UNCERTAIN.

# TASK KNTT-MAP-G9-001

**Status:** OPEN  
**Primary:** Gemini  
**Integrator/Reviewer:** ChatGPT  
**Layer:** KNTT-Core  
**Scope:** Toán 9 – Kết nối tri thức  
**Context version:** 1.0.5

## 1. Vertical Spine

25 chuyên đề là mạch kiến thức dọc xuyên suốt lớp 6–9. Mapping lớp 9 chỉ là overlay/index cuối cùng.

Không được biến Grade 9 mapping thành:
- curriculum tree riêng;
- ôn thi vào 10;
- Challenge;
- lý do để kéo mọi skill trong một Practice Bank vào Grade 9 Core.

## Mục lục KNTT Toán 9 đã xác minh — dùng làm INPUT

1. **Chương 1 – Phương trình và hệ hai phương trình bậc nhất hai ẩn**
   - Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn
   - Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn
   - Bài 3: Giải bài toán bằng cách lập hệ phương trình

2. **Chương 2 – Phương trình và bất phương trình bậc nhất một ẩn**
   - Bài 4: Phương trình quy về phương trình bậc nhất một ẩn
   - Bài 5: Bất đẳng thức và tính chất
   - Bài 6: Bất phương trình bậc nhất một ẩn

3. **Chương 3 – Căn bậc hai và căn bậc ba**
   - Bài 7: Căn bậc hai và căn thức bậc hai
   - Bài 8: Khai căn bậc hai với phép nhân và phép chia
   - Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai
   - Bài 10: Căn bậc ba và căn thức bậc ba

4. **Chương 4 – Hệ thức lượng trong tam giác vuông**
   - Bài 11: Tỉ số lượng giác của góc nhọn
   - Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng

5. **Chương 5 – Đường tròn**
   - Bài 13: Mở đầu về đường tròn
   - Bài 14: Cung và dây của một đường tròn
   - Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên
   - Bài 16: Vị trí tương đối của đường thẳng và đường tròn
   - Bài 17: Vị trí tương đối của hai đường tròn

6. **Chương 6 – Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn**
   - Bài 18: Hàm số y = ax² (a ≠ 0)
   - Bài 19: Phương trình bậc hai một ẩn
   - Bài 20: Định lí Viète và ứng dụng
   - Bài 21: Giải bài toán bằng cách lập phương trình

7. **Chương 7 – Tần số và tần số tương đối**
   - Bài 22: Bảng tần số và biểu đồ tần số
   - Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối
   - Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ

8. **Chương 8 – Xác suất của biến cố trong một số mô hình xác suất đơn giản**
   - Bài 25: Phép thử ngẫu nhiên và không gian mẫu
   - Bài 26: Xác suất của biến cố liên quan tới phép thử

9. **Chương 9 – Đường tròn ngoại tiếp và đường tròn nội tiếp**
   - Bài 27: Góc nội tiếp
   - Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác
   - Bài 29: Tứ giác nội tiếp
   - Bài 30: Đa giác đều

10. **Chương 10 – Một số hình khối trong thực tiễn**
   - Bài 31: Hình trụ và hình nón
   - Bài 32: Hình cầu

**Hoạt động trải nghiệm đáng chú ý:** GeoGebra cho phương trình/hệ/đồ thị; GeoGebra hình học; Excel cho bảng tần số/tần số tương đối; bài toán pha chế/nồng độ.

## 2. Valid Roadmap topic IDs

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

## Relevant existing skill inventory

### 08-phuong-trinh-bat-phuong-trinh
- nghiem-phuong-trinh
- pt-bac-nhat
- bien-doi-pt-nhieu-buoc
- pt-tich
- dkxd-phuong-trinh-mau
- khu-mau-phuong-trinh
- doi-chieu-nghiem
- bpt-bac-nhat
- doi-chieu-bpt
- bieu-dien-tap-nghiem
- giao-tap-nghiem
- lap-phuong-trinh
- lap-bat-phuong-trinh
- tham-so-co-ban

### 09-he-phuong-trinh
- nghiem-pt-hai-an
- nghiem-he
- so-nghiem-he
- y-nghia-hinh-hoc
- giai-he-the
- giai-he-cong
- chon-phuong-phap
- bien-doi-truoc-giai
- kiem-tra-nghiem-he
- tham-so-he
- lap-he-bai-toan
- bai-toan-so
- chuyen-dong-he
- nang-suat-he

### 10-ham-so-do-thi
- khai-niem-ham-so
- tinh-gia-tri-ham
- bang-gia-tri
- toa-do-diem
- diem-thuoc-do-thi
- nhan-biet-ham-bac-nhat
- he-so-goc
- tung-do-goc
- dong-nghich-bien
- ve-do-thi-ham-bac-nhat
- vi-tri-hai-duong-thang
- giao-diem-do-thi
- lien-he-he-phuong-trinh
- ham-y-ax2
- doi-xung-parabol
- diem-thuoc-parabol

### 11-can-thuc
- can-bac-hai-so-hoc
- dkxd-can
- can-binh-phuong
- khai-phuong-tich
- khai-phuong-thuong
- dua-thua-so-ra
- dua-thua-so-vao
- can-dong-dang
- nhan-chia-can
- truc-can-mau-don
- truc-can-lien-hop
- tim-x-can
- so-sanh-can

### 12-phuong-trinh-bac-hai-viete
- nhan-dang-pt-bac-hai
- he-so-abc
- tinh-delta
- so-nghiem-delta
- cong-thuc-nghiem
- delta-phay
- giai-pt-bac-hai
- nham-nghiem
- tham-so-so-nghiem
- tong-tich-nghiem
- bieu-thuc-doi-xung
- lap-pt-tu-nghiem
- dau-nghiem
- lien-he-do-thi

### 18-he-thuc-luong
- pythagore
- pythagore-dao
- canh-huyen
- he-thuc-canh
- he-thuc-duong-cao
- dien-tich-duong-cao
- doi-ke-huyen
- sin
- cos
- tan
- tim-canh-luong-giac
- tim-goc-luong-giac
- goc-nang-ha
- chieu-cao-khoang-cach
- ket-hop-he-thuc

### 19-duong-tron
- goc-o-tam
- goc-noi-tiep
- nua-duong-tron
- day-va-tam
- tiep-tuyen-ban-kinh
- hai-tiep-tuyen
- tu-giac-noi-tiep
- dau-hieu-noi-tiep
- hai-day-cat-nhau
- tiep-tuyen-cat-tuyen
- chung-minh-tiep-tuyen
- goc-cung
- do-dai-duong-tron

### 20-hinh-hoc-tong-hop
- nhan-dang-cong-cu
- song-song-dong-dang
- hai-goc-vuong-noi-tiep
- noi-tiep-dong-dang
- dong-dang-he-thuc-tich
- tam-giac-vuong-dong-dang
- tiep-tuyen-chung-minh
- chuoi-suy-luan
- the-tich-hop-chu-nhat
- the-tich-lang-tru
- dien-tich-day
- doi-don-vi-do-luong
- bai-toan-tong-hop

### 21-thong-ke
- du-lieu-phan-loai
- thu-thap-du-lieu
- kiem-tra-chat-luong
- mau-thien-lech
- bang-tan-so
- tan-suat
- doc-bieu-do-cot
- doc-bieu-do-doan-thang
- chon-bieu-do
- chuyen-bang-bieu-do
- nhan-xet-du-lieu
- don-vi-thang-do
- doc-bieu-do-cot-kep
- bieu-do-quat-tron
- du-lieu-ghep-nhom

### 22-dai-luong-dac-trung
- trung-binh-tho
- trung-binh-tan-so
- trung-vi
- mot
- nhieu-mot
- khoang-bien-thien
- ngoai-lai
- so-sanh-trung-binh-trung-vi
- chon-dai-luong
- so-sanh-hai-bo

### 23-xac-suat
- phep-thu-ngau-nhien
- khong-gian-mau
- bien-co
- bien-co-chac-chan-khong-the
- xac-suat-co-dien
- bien-co-doi
- dong-xu-nhieu-lan
- xuc-xac-hai-lan
- so-do-cay
- nhieu-buoc-doc-lap
- khong-hoan-lai
- kiem-tra-xac-suat
- xac-suat-thuc-nghiem

### 24-bai-toan-thuc-te
- doc-de-du-kien
- doi-don-vi
- chuyen-dong
- nang-suat
- phan-tram
- lap-phuong-trinh
- lap-he
- hinh-hoc-do-luong
- luong-giac-thuc-te
- thong-ke-thuc-te
- xac-suat-thuc-te
- kiem-tra-ket-luan

**Quan trọng:** inventory chỉ cho biết skill đang tồn tại. Không được suy ra mọi skill ở đây đều thuộc KNTT lớp 9 Core.

## 3. Nhiệm vụ

Với từng bài/nhóm bài:

- xác định Core knowledge;
- chọn Roadmap topic ID(s);
- PRIMARY / SECONDARY / PREREQUISITE;
- tái sử dụng skill hiện có nếu đúng phạm vi;
- ghi PROPOSED nếu thiếu;
- ghi rõ subset Core nếu bank rộng hơn KNTT;
- upstream prerequisites;
- downstream use, gồm cả "Entrance10 reuse" nếu phù hợp nhưng **không biến nó thành Core**;
- gap / overreach / cross-link;
- lưu ý sư phạm.

## 4. Những điểm cần audit đặc biệt

### CĐ22 – Đại lượng đặc trưng
Không giả định CĐ22 phải là Grade 9 Core chỉ vì nó tồn tại trong 25 chuyên đề. So mục lục KNTT thực tế. Nếu trung bình/trung vị/mốt không thuộc Grade 9 KNTT, hãy ghi rõ đây là Vertical Spine/extension/legacy mapping cần phân tầng lại.

### CĐ19 – Đường tròn
Kiểm tra skill bank hiện có đã phủ:
- cung/dây;
- độ dài cung;
- diện tích quạt/vành khuyên;
- vị trí hai đường tròn;
- đường tròn nội/ngoại tiếp;
- đa giác đều
hay chưa.

### CĐ20 – Hình khối
Kiểm tra gap cho:
- hình trụ;
- hình nón;
- hình cầu;
- diện tích/thể tích tương ứng.

### CĐ12 – PT bậc hai & Viète
Phân biệt KNTT Core với các skill tham số/biểu thức nghiệm nâng cao phục vụ Entrance10.

### CĐ08/CĐ09
Phân biệt rõ:
- phương trình tích/ẩn mẫu/bất phương trình là Grade 9 Core tới mức nào;
- tham số hệ/phương trình không tự động là Core.

## 5. Mastery policy

Không đề xuất hard gate 100%.

Nếu prerequisite yếu:
- cảnh báo;
- đề nghị remediation;
- cho phép học tiếp;
- mastery dựa trên nhiều lần làm + hint usage + lịch sử.

## 6. Output format

```text
TASK_ID: KNTT-MAP-G9-001
CONTEXT_VERSION: 1.0.5
ROLE: author
LAYER: KNTT-Core
TOPIC: Grade 9 mapping

VERDICT:
PASS / PASS-WITH-CHANGES / BLOCKED

A. COVERAGE TABLE
| KNTT chapter | Lesson/group | Core knowledge | Roadmap topic ID(s) | Relation | Skills | Existing/proposed | Core subset / excluded skills | Upstream prerequisites | Downstream / Entrance10 reuse | Notes |

B. POSSIBLE GAPS
1. ...

C. POSSIBLE OVERREACH / MISLAYERING
1. ...

D. CROSS-LINKS
1. ...

E. VERTICAL-SPINE AUDIT
1. Những topic nào có skill không thuộc KNTT 6-9 Core?
2. Những topic nào còn thiếu Core?
3. Những topic nào nên giữ nhưng cần gắn extension/Entrance10 metadata?

F. PEDAGOGICAL NOTES
1. ...

G. UNCERTAINTIES
- NONE / ...

H. RECOMMENDED NEXT STEP
...
```

## 7. Tiêu chí hoàn thành

- phủ đủ 10 chương;
- dùng đúng skill inventory;
- không ép mọi topic thành Grade 9 Core;
- tách Core khỏi Entrance10/Challenge;
- audit được CĐ22/CĐ19/CĐ20;
- continuity rõ;
- không dùng hard gate tuyệt đối.


## FINAL INSTRUCTION

Thực hiện task từ packet này. Không yêu cầu thêm URL nếu dữ liệu cần thiết đã có.
