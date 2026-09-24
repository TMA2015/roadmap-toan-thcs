# TASK KNTT-MAP-G6-001

**Status:** OPEN  
**Primary:** Gemini  
**Integrator/Reviewer:** ChatGPT  
**Layer:** KNTT Core  
**Scope:** Toán 6 – Kết nối tri thức

## 1. Mục tiêu

Rà soát **Toán 6 – Kết nối tri thức** và lập mapping vào **25 chuyên đề hiện có của Roadmap Toán THCS**.

Đây là task **mapping/audit**, không phải task thiết kế lại Roadmap.

### Không được làm

- Không giảm/tăng số lượng 25 chuyên đề.
- Không đổi ID hoặc URL chuyên đề.
- Không gộp thi chuyên vào KNTT Core.
- Không tự thêm nội dung ngoài KNTT rồi gọi đó là Core.
- Không giả định cấu trúc repository ngoài những gì Collaboration Hub/Project Context cung cấp.

## 2. Nếu không mở được URL

Dùng packet tự chứa:

`docs/collaboration/relay-packets/KNTT-MAP-G6-001.md`

Bản public sau deploy:

https://tma2015.github.io/roadmap-toan-thcs/collaboration/relay-packets/KNTT-MAP-G6-001/

Packet đã chứa context tối thiểu + toàn bộ task, nên không cần yêu cầu người dùng copy thêm Hub.

## 3. Đọc trước khi làm

1. Collaboration Hub:  
   https://tma2015.github.io/roadmap-toan-thcs/collaboration/

2. Project Context JSON:  
   https://tma2015.github.io/roadmap-toan-thcs/assets/data/collaboration/project-context.json

3. Blueprint 25 chuyên đề:  
   https://tma2015.github.io/roadmap-toan-thcs/roadmap/blueprint-25-chuyen-de/

4. Ma trận kiến thức:  
   https://tma2015.github.io/roadmap-toan-thcs/roadmap/ma-tran-kien-thuc/

## 4. Nhiệm vụ cụ thể

Với **Toán 6 Kết nối tri thức**, hãy lập bảng gồm:

- chương/chủ đề SGK;
- bài hoặc nhóm bài;
- kiến thức/yêu cầu cốt lõi;
- chuyên đề Roadmap phù hợp;
- skill đề xuất;
- mức quan hệ:
  - `PRIMARY` – chuyên đề chính;
  - `SECONDARY` – liên hệ phụ;
  - `PREREQUISITE` – nền cho chuyên đề sau;
- ghi chú nếu Roadmap hiện tại có nguy cơ:
  - thiếu nội dung Core;
  - diễn đạt quá rộng;
  - đặt nội dung ở chuyên đề chưa tối ưu;
  - cần liên kết chéo.

## 5. Yêu cầu học thuật

- Bám **Kết nối tri thức**, không dựa vào mục lục của bộ sách khác.
- Nếu tên chương/bài hoặc phạm vi có điểm bạn không chắc, ghi `UNCERTAIN`.
- Phân biệt:
  - nội dung học chính thức;
  - ví dụ/ứng dụng;
  - phần mở rộng.
- Không đưa kỹ thuật thi chuyên vào mapping Core.

## 6. Yêu cầu skill

Skill phải đủ nhỏ để Practice Engine có giá trị chẩn đoán.

Ví dụ tốt:

- `so-nguyen-to`
- `phan-tich-thua-so-nguyen-to`
- `ucln-bcnn`
- `cong-tru-so-nguyen`

Không dùng skill quá rộng như:

- `so-hoc`
- `lop-6`

Nếu skill đã có trong Roadmap, ưu tiên tái sử dụng tên/khái niệm hiện có khi biết chắc.

## 7. Output format

Trả lời theo format:

```text
TASK_ID: KNTT-MAP-G6-001
CONTEXT_VERSION: 1.0.1
ROLE: author/reviewer
LAYER: KNTT-Core
TOPIC: Grade 6 mapping

VERDICT:
PASS / PASS-WITH-CHANGES / BLOCKED

A. COVERAGE TABLE
| KNTT chapter/topic | Lesson/group | Core knowledge | Roadmap topic ID | Relation | Proposed skills | Notes |

B. POSSIBLE GAPS
1. ...
2. ...

C. POSSIBLE OVERREACH IN CURRENT ROADMAP
1. ...
2. ...

D. CROSS-LINKS TO ADD
1. ...
2. ...

E. UNCERTAINTIES
- NONE
hoặc
- ...

F. RECOMMENDED NEXT STEP
...
```

## 8. Tiêu chí hoàn thành

Task đạt yêu cầu khi:

- mapping phủ toàn bộ phần Core Toán 6;
- không thay đổi 25-topic architecture;
- skill đủ cụ thể;
- mọi điểm không chắc được đánh dấu rõ;
- có chỉ ra gap/overreach nếu thấy;
- không biến nhận xét thi cử thành nội dung Core.

## 9. Sau khi Gemini trả lời

Người dùng copy output sang ChatGPT.

ChatGPT sẽ:

1. kiểm tra chéo;
2. đối chiếu repository;
3. sửa naming/tag;
4. đưa bản đạt chuẩn vào Content Staging;
5. chỉ sau đó mới cập nhật mapping chính thức.
