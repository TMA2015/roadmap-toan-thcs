# Offline Relay Packets

Một số AI/phiên làm việc có thể không truy cập được GitHub hoặc GitHub Pages.

Khi đó **không yêu cầu người dùng copy cả lịch sử chat**. Dùng Relay Packet: một gói tự chứa gồm:

- context tối thiểu;
- role;
- hard constraints;
- task;
- output format.

## Hai chế độ giao task

### Online mode

AI đọc Collaboration Hub + Project Context + Task URL.

### Offline relay mode

Người dùng copy/upload **một Relay Packet duy nhất**.

Hai chế độ phải cho cùng một task ID và cùng output contract.

## Packet hiện có

- [KNTT-MAP-G6-001](relay-packets/KNTT-MAP-G6-001.md)
- [KNTT-MAP-G7-001](relay-packets/KNTT-MAP-G7-001.md)
- [KNTT-MAP-G8-001](relay-packets/KNTT-MAP-G8-001.md)
- [KNTT-MAP-G9-001](relay-packets/KNTT-MAP-G9-001.md)

## Nguyên tắc kích thước

Relay Packet chỉ chứa context **cần cho task**, không nhúng toàn bộ repository.

Nếu task cần thêm một bảng/ma trận cụ thể, ChatGPT tạo packet mới có đúng phần dữ liệu cần thiết.

## Trên iPad

Ưu tiên theo thứ tự:

1. upload file packet nếu Gemini hỗ trợ file;
2. copy toàn bộ packet trong một lần;
3. chỉ khi hai cách trên không phù hợp mới chia thành nhiều đoạn.

Mục tiêu là người dùng không phải trở thành “message bus” thủ công giữa hai AI.
