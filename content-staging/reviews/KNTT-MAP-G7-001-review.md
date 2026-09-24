# Review KNTT-MAP-G7-001

**Source:** Gemini author output  
**Reviewer:** ChatGPT  
**Final verdict:** PASS-WITH-CHANGES  
**Integrated artifact:** `docs/assets/data/curriculum/kntt-grade7-map.json`

## Điểm làm tốt

So với vòng lớp 6, Gemini cải thiện rõ:

- phủ đủ 10 chương;
- chỉ dùng topic ID có thật;
- phân chia Chương 9 hợp lý giữa CĐ14 và CĐ15;
- nhận ra đúng vai trò bản lề của lớp 7: số học → đại số ký hiệu và hình học trực quan → chứng minh;
- chỉ ra đúng hai rủi ro overreach: CĐ15 không kéo Ceva/Menelaus vào Core lớp 7 và CĐ04 không trộn phân tích nhân tử nâng cao vào đa thức lớp 7.

## Thay đổi bắt buộc

### 1. Chương 10 phải map PRIMARY vào CĐ20, không phải CĐ24

Hình hộp chữ nhật, hình lập phương và lăng trụ đứng là **kiến thức hình học/đo lường cốt lõi**.

Mapping đúng:

- `20-hinh-hoc-tong-hop`: PRIMARY
- `24-bai-toan-thuc-te`: SECONDARY khi bài có bối cảnh thực tế

Practice Bank CĐ20 hiện đã có:
- `the-tich-hop-chu-nhat`
- `the-tich-lang-tru`
- `dien-tich-day`
- `doi-don-vi-do-luong`

### 2. Nhiều skill Gemini đánh dấu Proposed thực ra đã tồn tại

Ví dụ:

- CĐ03: `ti-le-thuc`, `day-ti-so-bang-nhau`, `ti-le-thuan`, `ti-le-nghich`
- CĐ13: `tia-phan-giac`, `goc-doi-dinh`, `goc-so-le-trong`, `dau-hieu-song-song`
- CĐ14: `tong-goc-tam-giac`, `bang-nhau-ccc`, `bang-nhau-cgc`, `bang-nhau-gcg`, `tam-giac-can`
- CĐ15: các skill trung tuyến/trọng tâm, phân giác, trung trực, đường cao
- CĐ21: `bieu-do-quat-tron`, `doc-bieu-do-doan-thang`
- CĐ23: `bien-co`, `bien-co-chac-chan-khong-the`, `xac-suat-co-dien`

Đây chủ yếu là hạn chế của packet: nó cung cấp topic whitelist nhưng chưa cung cấp skill inventory.

### 3. Bổ sung Vertical Spine continuity

Gemini trả theo format 1.0.2 nên không có hai trường mới:

- Upstream prerequisites
- Downstream use

Bản reviewed đã bổ sung hai trường cho từng nhóm bài.

### 4. Mapping tinh hơn ở một số chương

- Quy tắc chuyển vế: CĐ02 PRIMARY ở bối cảnh số hữu tỉ, đồng thời là PREREQUISITE cho CĐ08.
- Căn bậc hai số học lớp 7: CĐ02 PRIMARY, CĐ11 là downstream/prerequisite link chứ không cho học sinh lớp 7 vào toàn bộ bank căn thức lớp 9.
- Đường trung trực ở Bài 16: CĐ14 PRIMARY trong mạch tam giác, đồng thời nối sang CĐ15.
- Biểu đồ quạt tròn: CĐ21 PRIMARY, cross-link CĐ03 vì cần tỉ số phần trăm.

## Kết luận benchmark

Vòng thứ hai cho thấy Gemini mạnh ở:
- coverage theo chương;
- nhận diện ranh giới Core/overreach;
- nhận xét sư phạm về chuyển tiếp tư duy.

Điểm cần hỗ trợ bằng input/repository QA:
- skill nào đã tồn tại;
- mapping vào topic tích hợp như CĐ20/CĐ24;
- Vertical Spine prerequisite/unlock.

Routing giữ:
`GEMINI_LEAD + CHATGPT_REPOSITORY/CURRICULUM_QA`

Evidence cho curriculum mapping vẫn là **OBSERVED**, chưa đủ mẫu để BENCHMARKED.
