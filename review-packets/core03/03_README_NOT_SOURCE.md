# CĐ03 R1 — NotebookLM reviewer handoff

**Một file duy nhất upload vào Sources:** `01_UPLOAD_TO_NOTEBOOKLM_CORE03_R1.md` (source gồm bài gốc, mapping có SHA và candidates), thay cho nguồn batch tạm trước đó. **Không** upload `02_COPY_TO_NOTEBOOKLM_CHAT_R1.txt` hoặc file README; prompt này dùng để dán vào khung Chat.

Trạng thái: source-locked author candidate, chưa có độc lập review, chưa sửa website/ID/counters. Khi NotebookLM trả về, chuyển toàn bộ kết quả cho ChatGPT để đối chiếu từng 5 card/15 item và lưu R1 receipt; nếu REVISIONS_REQUIRED thì sửa ứng viên, khóa lại SHA, review targeted R2. Đừng coi NotebookLM review text là kiểm thử rendered MathJax hoặc browser.


## R1 đã nhận — chuyển targeted R2

R1 độc lập trả `REVISIONS_REQUIRED`, 5/5 cards và 15/15 items đã được kiểm. Không dùng lại file R1 làm source hoạt động.

- Lưu biên nhận: `04_NOTEBOOKLM_R1_RECEIPT.md`.
- Upload **duy nhất** `05_UPLOAD_TO_NOTEBOOKLM_CORE03_R2.md` (Git blob `a84c2740169070d6919bc8d2f274d10fb914fa32`) vào NotebookLM Sources.
- Dán `06_COPY_TO_NOTEBOOKLM_CHAT_R2.txt` vào Chat.
- Sau R2, gửi nguyên văn kết quả cho ChatGPT để reconcile trước implementation.
