# B01 – Hồ sơ tiếp nhận và chuẩn hóa trước B02

Nguồn báo cáo: NotebookLM do chủ dự án gửi ngày 28/09/2026. B01 source main SHA: 88143e6b2690edfe721f8d74d2dbcb251bc55ab3. Trạng thái chỉ PROPOSAL_ONLY.

- 10/10 câu đại diện được mô tả trong báo cáo; đồng thuận sơ bộ với primary/tag-role từ pilot; không tự triển khai mapping. 8 mã liên chuyên đề chỉ là rà soát ngữ nghĩa ban đầu.
- Kết quả JSON B01 chưa đạt invariant coverage: 10 item PASS được liệt kê, nhưng pass_count=9; 1 mã REVISION_REQUIRED và 1 mã INSUFFICIENT_EVIDENCE ngoài 10 câu, trong khi expected_count=49 không ghi danh sách expected_ids 1:1; 39 ca bối cảnh chưa được kiểm định toàn văn, không ép vào coverage cùng ID câu/chuyên đề.
- Checkpoint ghi “implemented read-only mapping” không được coi là thực tế phát hành: chưa chỉnh engine, data hay counters.
- B01 có chỗ đề nghị “gộp counter hiển thị” nhưng chính sách cấm cộng bộ đếm legacy/alias. Chỉ có thể đề xuất mapping/read-only mới, tách biệt dữ liệu cũ.
- `cach-deu-dinh` là nguy cơ xung đột hai đầu mút so với ba đỉnh; chưa kết luận cách đổi mã khi chưa đọc đủ toàn văn CĐ14/15 và hoạch định migration.
- B02 chỉ xét 39 câu CĐ04–07 có toàn văn và SHA. Không xóa / đổi tag, không gộp số liệu, không thay runtime. Nếu quyết định khác kết luận cũ phải ghi rõ bất đồng và bằng chứng.
