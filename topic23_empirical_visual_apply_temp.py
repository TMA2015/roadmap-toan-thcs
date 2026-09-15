from pathlib import Path

p = Path('docs/kien-thuc/23-xac-suat/index.md')
text = p.read_text(encoding='utf-8')
needle = 'Khi một thí nghiệm ổn định được lặp lại nhiều lần, tần số tương đối của biến cố thường có xu hướng ổn định quanh xác suất của biến cố trong mô hình. Tuy nhiên, với một số lần thử hữu hạn, hai giá trị **không bắt buộc bằng nhau**.\n\n'
insert = needle + '<p align="center">\n  <img src="../../assets/probability/23/23-xac-suat-thuc-nghiem-on-dinh.svg"\n       alt="Đồ thị tần số tương đối của mặt Ngửa dao động và dần ổn định quanh xác suất 0,5 khi số lần tung đồng xu tăng"\n       width="820">\n</p>\n\n> Hình trên nhấn mạnh một điểm quan trọng: xác suất thực nghiệm **không cần tiến về 0,5 theo một chiều**. Nó có thể lúc cao hơn, lúc thấp hơn; điều đáng chú ý là khi số lần thử lớn, mức dao động thường nhỏ hơn và giá trị có xu hướng ổn định quanh xác suất của mô hình.\n\n'
if '23-xac-suat-thuc-nghiem-on-dinh.svg' not in text:
    if needle not in text:
        raise SystemExit('Không tìm thấy vị trí chèn hình ở mục 3.4A')
    text = text.replace(needle, insert, 1)
p.write_text(text, encoding='utf-8')
