# OFFLINE RELAY PACKET — KNTT-MAP-G6-001

> Dùng packet này khi Gemini không truy cập được GitHub/GitHub Pages. Người dùng chỉ cần copy toàn bộ nội dung packet hoặc upload file này cho Gemini.

## PROJECT CONTEXT — MINIMUM REQUIRED

**Project:** Roadmap Toán THCS  
**Context version:** 1.0.1  
**Primary textbook:** Kết nối tri thức  
**Architecture:** 25 chuyên đề cố định  
**Practice:** Practice Engine v2, skill tags, weak-skill practice, localStorage, multi-level hints, hint-usage tracking  
**Content pipeline:** draft/content-staging → academic QA → technical QA → visual QA → approved → published  
**Geometry policy:** SVG-first từ diagram spec đã kiểm định; quan hệ hình học cốt lõi phải semantic-QA

### Three learning layers

1. **KNTT-Core** — kiến thức/kỹ năng cốt lõi, bắt buộc.
2. **Entrance10** — ôn thi vào 10 dựa trên Core và dữ liệu đề thật.
3. **Specialized-Challenge** — mở rộng cho học sinh khá giỏi/thi chuyên; không được dùng để khóa Core.

### Source of Truth order

1. KNTT Core / chuẩn chương trình dự án đã xác nhận.
2. Blueprint 25 chuyên đề.
3. Ma trận kiến thức.
4. Chuẩn ngân hàng câu hỏi / quy trình biên soạn.
5. Repository hiện hành.
6. Draft do AI tạo.

**AI draft không tự động là Source of Truth.**

## COLLABORATION ROLES

### Gemini — current working hypothesis

Ưu tiên:
- phản biện học thuật và sư phạm;
- sư phạm hóa/đóng gói kiến thức;
- biên soạn lý thuyết, ví dụ, bài tập;
- thiết kế nội dung cô đọng/print-friendly;
- tạo hệ bài tập theo mô-đun;
- giải độc lập bài khó để làm đối chứng.

Lưu ý: đây là **working hypothesis/self-reported strengths**, chưa phải benchmark final.

### ChatGPT

Ưu tiên:
- repository architecture;
- GitHub/branch/PR/deploy;
- schema/metadata;
- Practice Engine;
- technical QA;
- SVG từ diagram spec;
- semantic QA;
- kiểm tra chéo học thuật và tích hợp nội dung đạt chuẩn.

### Dual independent required

Dùng hai lời giải độc lập cho:
- hình học nhiều bước;
- bài thi chuyên/HSG;
- định lý không hiển nhiên;
- đáp án chuẩn sẽ tái sử dụng;
- nhóm bài từng có câu trả lời AI thiếu ổn định.

---

# TASK

**TASK_ID:** KNTT-MAP-G6-001  
**Primary:** Gemini  
**Integrator/Reviewer:** ChatGPT  
**Layer:** KNTT-Core  
**Scope:** Toán 6 — Kết nối tri thức

## Objective

Rà soát **Toán 6 – Kết nối tri thức** và lập mapping vào **25 chuyên đề hiện có của Roadmap Toán THCS**.

Đây là task **mapping/audit**, KHÔNG phải task thiết kế lại Roadmap.

## Hard constraints

- Không giảm/tăng 25 chuyên đề.
- Không đổi ID/URL chuyên đề.
- Không gộp thi chuyên vào KNTT-Core.
- Không tự thêm nội dung ngoài KNTT rồi gọi đó là Core.
- Nếu không chắc tên chương/bài/phạm vi: ghi **UNCERTAIN**.
- Không suy đoán repository ngoài context trong packet này.

## What to produce

Với Toán 6 KNTT, lập bảng gồm:

- chương/chủ đề SGK;
- bài hoặc nhóm bài;
- kiến thức/yêu cầu cốt lõi;
- chuyên đề Roadmap phù hợp;
- skill đề xuất;
- quan hệ:
  - `PRIMARY` — chuyên đề chính;
  - `SECONDARY` — liên hệ phụ;
  - `PREREQUISITE` — nền cho chuyên đề sau;
- ghi chú nếu Roadmap có nguy cơ:
  - thiếu Core;
  - diễn đạt quá rộng;
  - đặt nội dung chưa tối ưu;
  - thiếu liên kết chéo.

## Skill rule

Skill phải đủ nhỏ để Practice Engine chẩn đoán được.

Tốt:
- `so-nguyen-to`
- `phan-tich-thua-so-nguyen-to`
- `ucln-bcnn`
- `cong-tru-so-nguyen`

Không tốt:
- `so-hoc`
- `lop-6`

## Required output format

TASK_ID: KNTT-MAP-G6-001  
CONTEXT_VERSION: 1.0.1  
ROLE: author/reviewer  
LAYER: KNTT-Core  
TOPIC: Grade 6 mapping

VERDICT:  
PASS / PASS-WITH-CHANGES / BLOCKED

### A. COVERAGE TABLE

| KNTT chapter/topic | Lesson/group | Core knowledge | Roadmap topic ID | Relation | Proposed skills | Notes |

### B. POSSIBLE GAPS

1. ...
2. ...

### C. POSSIBLE OVERREACH IN CURRENT ROADMAP

1. ...
2. ...

### D. CROSS-LINKS TO ADD

1. ...
2. ...

### E. UNCERTAINTIES

- NONE

hoặc:

- ...

### F. RECOMMENDED NEXT STEP

...

## Completion criteria

- phủ toàn bộ Core Toán 6;
- không đổi kiến trúc 25 chuyên đề;
- skill đủ cụ thể;
- mọi điểm không chắc đánh dấu rõ;
- chỉ ra gap/overreach nếu có;
- không biến nhận xét thi cử thành Core.

## Important final instruction

Hãy làm task dựa trên packet này. Không cần yêu cầu người dùng cung cấp thêm URL của Collaboration Hub trừ khi có thông tin bắt buộc thực sự thiếu.
