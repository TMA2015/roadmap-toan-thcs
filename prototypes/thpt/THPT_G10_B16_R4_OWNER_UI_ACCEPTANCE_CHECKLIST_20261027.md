# Toán THPT R4 · Owner UI Acceptance Checklist — Bài 16

**Ngày:** 27/10/2026  
**Phase:** Academic Pilot PASS → Owner visual/interaction QA pending  
**Reviewed content:** `THPT-G10-B16-R4-POSTFIX-REVIEW-20261027`  
**Academic result:** PASS / CLEARANCE YES (theo kết quả NotebookLM được chuyển giao)  
**Prototype:** Một mẫu lớp 10, Bài 16; chuyên đề `PILOT_PARTIAL_G10`; Draft PR #612, không phải sản phẩm đã triển khai.

## 1. Cách mở preview khi thử nghiệm cục bộ

Từ repository checkout tại work branch `feature/thpt-g10-b16-knowledge-pilot-r1-20261026`:

```powershell
python -m pip install mkdocs-material
python -m mkdocs serve -f mkdocs.thpt-preview.yml
```

Mở địa chỉ do MkDocs in ra (mặc định thường là `http://127.0.0.1:8000/thpt-preview/`); **đây là địa chỉ local, không phải link website công khai**. Nếu máy đã có MkDocs Material, không cần cài lại.

## 2. Mốc thao tác owner cần nghiệm thu

| Mã | Kiểm thử | Kết quả |
|---|---|---|
| UI-01 | Trang chủ THPT dễ hiểu, dẫn đúng SGK / Chuyên đề / Thư viện / Tiến độ | PENDING |
| UI-02 | Header/nav/sidebar/tìm kiếm, sáng/tối và responsive dễ đọc | PENDING |
| UI-03 | Lối tắt `5 + 1 mẫu`: 5 nhóm đúng thứ tự + 1 topic demo; không gắn nhãn như đã phát hành | PENDING |
| UI-04 | SGK Lớp→Chương→Bài: mở trực tiếp Bài 16, back/forward đúng, đọc độc lập không phải chuyển sang chuyên đề | PENDING |
| UI-05 | Bài 16: bốn bước vẽ, bảng tổng quát, MathJax và SVG parabol hiển thị rõ khi xoay dọc/ngang | PENDING |
| UI-06 | SVG có trục nét đứt `x=2`; đỉnh `I(2;−1)`; giao `Ox` `(1;0), (3;0)`; giao `Oy` `(0;3)` | PENDING |
| UI-07 | Core cùng canonical ID từ bài SGK, thư viện Core, chuyên đề; gợi ý chỉ khi mở và đáp án sau kiểm tra | PENDING |
| UI-08 | Practice: chọn đáp án → Check mới hiện phản hồi; có gợi ý tùy chọn | PENDING |
| UI-09 | Readiness 2 câu: Previous/Next, sửa đáp án trước nộp; **không hint, không biết đúng/sai trước Final Submit**; nhãn TECHNICAL_DEMO_ONLY rõ | PENDING |
| UI-10 | Written: bài thường và bài Anchor đúng trong một thư viện, lọc/tìm kiếm, tự chấm rubric, không tự động chấm bài trên giấy | PENDING |
| UI-11 | Phạm vi `PILOT_PARTIAL_G10` rõ; không tạo hiểu nhầm đã có toàn bộ chương trình 10–12 | PENDING |
| UI-12 | Không có nhấp nháy, tràn ngang, chữ/công thức bị cắt trên desktop/iPhone/iPad thực | PENDING |

## 3. Thiết bị và phép thử

- **Desktop:** trình duyệt người dùng thực tế, thử bật/tắt chế độ tối, phóng to/thu nhỏ, tìm kiếm, đọc đủ bốn điểm đến.
- **iPhone:** cuộn trang SGK đến bảng và đồ thị, kiểm tra công thức không tràn màn hình; thử đổi câu và nộp trong Readiness.
- **iPad:** sidebar, bảng tab Kiến thức/Dạng bài, các liên kết và vùng bấm.
- Kiểm thử trình duyệt Chromium giả lập trên CI đã PASS tại reviewed commit và sẽ được re-run trên head mới; **không thay thế nghiệm thu thiết bị thực tế**.

## 4. Biểu mẫu verdict ngắn cho owner

```text
THPT_R4_OWNER_UI_QA|PASS / REVISIONS_REQUIRED
DEVICE_DESKTOP|PASS / ISSUE / NOT_TESTED
DEVICE_IPHONE|PASS / ISSUE / NOT_TESTED
DEVICE_IPAD|PASS / ISSUE / NOT_TESTED
UI_ISSUES|[Mã UI-xx, mô tả ngắn, screenshot nếu có]
RELEASE_AUTHORIZATION|NOT_GRANTED (mặc định)
```

**Lưu ý:** Nghiệm thu giao diện mẫu không tự động phê duyệt phát hành website hay mở rộng nội dung lớp 10–12. Các thay đổi toán học ngoài snapshot đã Academic PASS cần xem lại cổng review tương ứng.
