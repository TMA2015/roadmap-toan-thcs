# Audit hình hiện có — CĐ18 (pilot SVG nội bộ)

**Ngày:** 2026-09-25. **Phạm vi đã kiểm:** `docs/kien-thuc/18-he-thuc-luong/{index,bai-tap,tu-kiem-tra}.md`, bộ micro/readiness, workspace, cây asset trong repo. Đây là audit tĩnh: không nhận là đã kiểm tra hiển thị của SVG mới trên thiết bị.

## I. Tham chiếu hiện tại trong bài

| Mục trong `index.md` | Asset thực tế | Nhận xét | Quyết định |
|---|---|---|---|
| Minh họa trực quan → 1. Đường cao trong tam giác vuông | `docs/assets/geometry/18/18-duong-cao-canh-huyen.svg` | SVG nguồn ngoài kiểu cũ: mô tả tiếng Anh/ghi tên CMG Lee, font 40, nền trắng, công thức cỡ lớn; nhãn p,q,r,s,h chưa gắn với A,B,C,H của lời văn | **THAY TRƯỚC** bằng hình có A,B,C,H; không coi hình cũ là nguồn sự thật |
| Minh họa trực quan → 2. Tỉ số lượng giác | `docs/assets/geometry/18/18-ti-so-luong-giac.svg` | FreeHEP Graphics2D SVG xuất năm 2008, kích thước gốc 164×116, văn bản chuyển thành nhiều vector path, không dễ chỉnh nhãn/đồng bộ | **THAY TRƯỚC** bằng SVG nội bộ |
| Minh họa trực quan → 3. Góc nâng và góc hạ | `docs/assets/geometry/18/18-goc-nang-goc-ha.svg` | SVG xuất Adobe Illustrator, 960×640, nhiều nhãn tiếng Anh cỡ 12px, màu thuần xanh/đỏ/lục/vàng | **THAY TRƯỚC**, thống nhất tiếng Việt và giản lược |
| Bản đồ kiến thức | `docs/assets/infographics/18/18-01-tong-quan.svg` | Infographic A4 1000×1414 nội bộ | **GIỮ** theo chuẩn infographic |
| 3.2. Hệ thức đường cao | `docs/assets/infographics/18/18-02-he-thuc-duong-cao.svg` | Infographic A4 nội bộ | **GIỮ**, đối chiếu công thức/hình khi tạo SVG mới |
| 3.4A. Tỉ số lượng giác | `docs/assets/infographics/18/18-03-ti-so-luong-giac.svg` | Infographic A4 nội bộ | **GIỮ** |
| 5. Các dạng bài | `docs/assets/infographics/18/18-04-bai-toan-thuc-te-loi-sai.svg` | Infographic A4 nội bộ | **GIỮ** |

Không tìm thấy tham chiếu `diagram`/SVG riêng trong `topic18-learning-workspace.json`, `18-he-thuc-luong-micro-v1.json` và `18-he-thuc-luong-core-v1.json`. Các file `bai-tap.md`, `tu-kiem-tra.md` không nhúng hình riêng ở thời điểm audit. Không gọi mọi asset nằm trong repo là ảnh Internet: 3 SVG hình minh họa có dấu vết nguồn/công cụ xuất cũ; 4 infographic là nhóm khác.

## II. Danh mục tám hình pilot (tên đề xuất, CHƯA tạo)

| # | SVG mới trong `docs/assets/geometry/18/` | Nội dung và nơi dùng | Độ ưu tiên |
|---:|---|---|---|
| 1 | `18-tam-giac-vuong-doi-ke-huyen-v1.svg` | Tam giác ABC vuông tại A, góc B = α, chú thích cạnh đối/kề/huyền ở mục Minh họa 2; dùng lại cho 3.3 | P1 |
| 2 | `18-duong-cao-canh-huyen-v1.svg` | ABC vuông tại A, H thuộc BC, AH ⟂ BC, ghi BH=p, HC=q; mục Minh họa 1 và 3.2 | P1 |
| 3 | `18-ti-so-sin-cos-v1.svg` | Tô rõ cặp đối/huyền và kề/huyền theo cùng α; mục 3.3 | P2 |
| 4 | `18-ti-so-tan-cot-v1.svg` | Làm nổi bật đối/kề và kề/đối, không lẫn huyền; mục 3.3–3.4 | P2 |
| 5 | `18-he-thuc-canh-hinh-chieu-v1.svg` | Cùng cấu hình A,B,C,H, ghi AB²=BH·BC và AC²=CH·BC ở chú thích; mục 3.2 | P2 |
| 6 | `18-he-thuc-duong-cao-pq-v1.svg` | Cùng cấu hình, nhấn AH²=BH·CH; mục 3.2 và minh họa 1 | P1 |
| 7 | `18-goc-nang-v1.svg` | Phương ngang, tia nhìn lên, góc α, khoảng cách ngang d và độ cao h; mục Minh họa 3, 3.5 | P1 |
| 8 | `18-goc-ha-v1.svg` | Phương ngang và tia nhìn xuống từ điểm quan sát, góc hạ; mục Minh họa 3, 3.5 | P2 |

**Lượt sản xuất đầu chỉ 3–4 hình:** #1, #2, #6, #7. Không tạo cả 8 và thay ngay trong cùng một commit.

## III. Quy tắc tích hợp và QA

- Giữ 3 file legacy chưa sửa để có đường lùi; SVG mới có tên hậu tố `-v1.svg`, thay đường dẫn trong `index.md` theo từng nhóm sau QA.
- Tránh nhầm tầng kiến thức: hệ thức đường cao thuộc mục tham khảo/Core-Support hoặc Entrance10 trong rollout hiện tại; hình minh họa không làm skill tự động trở thành Core Readiness.
- Với #2/#5/#6: ví dụ tọa độ phải thật sự có `AH ⟂ BC` và H nằm trên **đoạn** BC; kiểm tra hình vuông góc tại A lẫn H. Công thức phải khớp các đoạn được gắn nhãn.
- Với #1/#3/#4: phía đối/kề được xác định tương đối theo góc α, không gắn nhãn tùy tiện theo hướng trên màn hình.
- Với #7/#8: góc đo với đường **ngang** tại điểm quan sát; nếu có chiều cao mắt, ghi rõ tham chiếu.
- SVG semantic/accessibility QA và mobile/iPad trước thay thế; pipeline `mkdocs build --strict`, kiểm tra URL ảnh xuất bản và không mất infographic.
- Các hình mới được thiết kế từ cấu hình xác minh, không trace/copy ảnh nguồn ngoài.

**Liên quan:** `docs/huong-dan/geometry-visual-standard-v1.md`; nhánh kỹ thuật dựng hình tự động `GEO-LIB-001` sẽ được làm riêng.
