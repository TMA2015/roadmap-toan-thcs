(() => {
"use strict";

const TOPICS={
 "02-so-va-phep-tinh":{
   number:"02",
   data:"assets/data/curriculum/topic02-learning-workspace.json",
   description:"Nền số học lớp 6: số tự nhiên, chia hết, số nguyên, phân số, số thập phân và phần trăm. CĐ02 đầy đủ còn có nội dung lớp sau.",
   chips:["KNTT Core · phần lớp 6","Số học","5 chặng học","Nội dung lớp 7 học tiếp"],
   progressSkills:["tap-hop-so","thu-tu-phep-tinh","luy-thua","dau-hieu-chia-het","so-nguyen-to","ucln","bcnn","so-nguyen-phep-tinh","rut-gon-phan-so","phep-tinh-phan-so","so-huu-ti-thap-phan","phan-tram"]
 },
 "03-ti-le-ti-le-thuc":{
    number:"03",
    data:"assets/data/curriculum/topic03-learning-workspace.json",
    description:"Từ tỉ số và phần trăm lớp 6 đến tỉ lệ thức, tỉ lệ thuận và tỉ lệ nghịch lớp 7.",
    chips:["KNTT Core","Lớp 6–7","Số / Đại số","⭐⭐⭐⭐"],
    progressSkills:["ti-so","ti-so-phan-tram","ti-le-thuc","tim-x-ti-le-thuc","day-ti-so-bang-nhau","chia-theo-ti-le","ti-le-thuan","he-so-ti-le-thuan","ti-le-nghich","he-so-ti-le-nghich","phan-biet-thuan-nghich"]
  },
  "04-bieu-thuc-dai-so":{
   number:"04",
   data:"assets/data/curriculum/topic04-learning-workspace.json",
   description:"Nền móng của biến đổi đại số: từ đơn thức, đa thức đến phép toán và tính giá trị.",
   chips:["KNTT Core","Lớp 7–8","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["nhan-biet-don-thuc","nhan-biet-da-thuc","he-so-bac","hang-tu-dong-dang","thu-gon-da-thuc","cong-tru-da-thuc","bo-ngoac-dau","nhan-bieu-thuc","tinh-phan-phoi","chia-da-thuc-cho-don-thuc","tinh-gia-tri-bieu-thuc"]
 },
 "05-7-hang-dang-thuc":{
   number:"05",
   data:"assets/data/curriculum/topic05-learning-workspace.json",
   description:"Bộ công cụ nhận dạng và biến đổi nhanh, nối phép nhân đa thức với phân tích nhân tử.",
   chips:["KNTT Core","Lớp 8","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["binh-phuong-tong","binh-phuong-hieu","hieu-hai-binh-phuong","lap-phuong-tong","lap-phuong-hieu","tong-hai-lap-phuong","hieu-hai-lap-phuong","nhan-dang-hdt","binh-phuong-hoan-chinh","nhan-dang-lap-phuong","tinh-nhanh-hdt","rut-gon-hdt"]
 },
 "06-phan-tich-da-thuc":{
   number:"06",
   data:"assets/data/curriculum/topic06-learning-workspace.json",
   description:"Biến đa thức thành tích để rút gọn, nhận dạng cấu trúc và chuẩn bị trực tiếp cho phân thức.",
   chips:["KNTT Core","Lớp 8","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["nhan-tu-chung","doi-dau-nhan-tu-chung","hieu-hai-binh-phuong","binh-phuong-hoan-chinh","tong-hieu-lap-phuong","nhom-hang-tu","phoi-hop-phuong-phap","kiem-tra-phan-tich"]
 },
 "07-phan-thuc-dai-so":{
   number:"07",
   data:"assets/data/curriculum/topic07-learning-workspace.json",
   description:"Cầu nối từ phân tích đa thức đến phương trình chứa ẩn ở mẫu.",
   chips:["KNTT Core","Lớp 8","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["nhan-biet-phan-thuc","dieu-kien-xac-dinh","rut-gon-phan-thuc","quy-dong-mau-thuc","cong-tru-phan-thuc","nhan-phan-thuc","chia-phan-thuc"]
 } ,
 "08-phuong-trinh-bat-phuong-trinh":{
   number:"08",
   data:"assets/data/curriculum/topic08-learning-workspace.json",
   description:"Từ phương trình bậc nhất đến phương trình tích, chứa mẫu và bất phương trình theo mạch lớp 8–9.",
   chips:["KNTT Core","Lớp 8–9","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["nghiem-phuong-trinh","pt-bac-nhat","bien-doi-pt-nhieu-buoc","pt-tich","dkxd-phuong-trinh-mau","khu-mau-phuong-trinh","doi-chieu-nghiem","bat-dang-thuc","tinh-chat-thu-tu-phep-cong","tinh-chat-thu-tu-phep-nhan","bpt-bac-nhat","doi-chieu-bpt","bieu-dien-tap-nghiem","lap-phuong-trinh"]
 },
 "09-he-phuong-trinh":{
   number:"09",
   data:"assets/data/curriculum/topic09-learning-workspace.json",
   description:"Từ phương trình hai ẩn đến nghiệm hệ, phương pháp thế/cộng đại số và mô hình hóa bài toán.",
   chips:["KNTT Core","Lớp 9","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["nghiem-pt-hai-an","nghiem-he","so-nghiem-he","y-nghia-hinh-hoc","giai-he-the","giai-he-cong","chon-phuong-phap","bien-doi-truoc-giai","kiem-tra-nghiem-he","lap-he-bai-toan","bai-toan-so","chuyen-dong-he","nang-suat-he"]
 },
 "10-ham-so-do-thi":{
   number:"10",
   data:"assets/data/curriculum/topic10-learning-workspace.json",
   description:"Kết nối công thức, bảng giá trị, tọa độ, đường thẳng và parabol y=ax².",
   chips:["KNTT Core","Lớp 8–9","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["khai-niem-ham-so","tinh-gia-tri-ham","bang-gia-tri","toa-do-diem","diem-thuoc-do-thi","nhan-biet-ham-bac-nhat","he-so-goc","tung-do-goc","dong-nghich-bien","ve-do-thi-ham-bac-nhat","ham-y-ax2","doi-xung-parabol","diem-thuoc-parabol"]
 },
 "11-can-thuc":{
   number:"11",
   data:"assets/data/curriculum/topic11-learning-workspace.json",
   description:"Từ căn bậc hai, biến đổi căn thức đến căn bậc ba theo mạch KNTT lớp 9.",
   chips:["KNTT Core","Lớp 9","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["can-bac-hai-so-hoc","dkxd-can","can-binh-phuong","khai-phuong-tich","khai-phuong-thuong","dua-thua-so-ra","dua-thua-so-vao","can-dong-dang","nhan-chia-can","truc-can-mau-don","truc-can-lien-hop","can-bac-ba"]
 },
 "12-phuong-trinh-bac-hai-viete":{
   number:"12",
   data:"assets/data/curriculum/topic12-learning-workspace.json",
   description:"Phương trình bậc hai, biệt thức, công thức nghiệm và Viète theo KNTT lớp 9.",
   chips:["KNTT Core","Lớp 9","Đại số","⭐⭐⭐⭐⭐"],
   progressSkills:["nhan-dang-pt-bac-hai","he-so-abc","tinh-delta","so-nghiem-delta","cong-thuc-nghiem","delta-phay","giai-pt-bac-hai","nham-nghiem","tong-tich-nghiem","lap-pt-tu-nghiem"]
 },
 "13-goc-va-duong-thang":{
   number:"13",
   data:"assets/data/curriculum/topic13-learning-workspace.json",
   description:"Nền tảng Hình học THCS: điểm–tia–đoạn–góc, song song và bước đầu chứng minh.",
   chips:["KNTT Core","Lớp 6–7","Hình học","⭐⭐⭐⭐⭐"],
   progressSkills:["diem-thuoc-duong","diem-nam-giua","tia","tia-doi","doan-thang-do-dai","trung-diem","khai-niem-goc","do-goc","phan-loai-goc","goc-phu-bu","goc-doi-dinh","tia-phan-giac","nhan-dang-goc-dac-biet","goc-so-le-trong","goc-dong-vi","goc-trong-cung-phia","tinh-chat-song-song","dau-hieu-song-song","tien-de-euclid","gia-thiet-ket-luan","lap-luan-chung-minh-ngan"]
 },
 "14-tam-giac":{
   number:"14",
   data:"assets/data/curriculum/topic14-learning-workspace.json",
   description:"Góc–cạnh, đường trung trực và các trường hợp hai tam giác bằng nhau.",
   chips:["KNTT Core","Lớp 7","Hình học","⭐⭐⭐⭐⭐"],
   progressSkills:["tong-goc-tam-giac","bang-nhau-ccc","bang-nhau-cgc","bang-nhau-gcg","bang-nhau-tam-giac-vuong","viet-tuong-ung-tam-giac-bang-nhau","tam-giac-can","nhan-biet-trung-truc","cach-deu-dinh","tinh-chat-duong-trung-truc","so-sanh-canh-goc","bat-dang-thuc-tam-giac","duong-vuong-goc-duong-xien"]
 },
 "15-duong-dong-quy":{
   number:"15",
   data:"assets/data/curriculum/topic15-learning-workspace.json",
   description:"Bốn họ đường đặc biệt, bốn tâm G–H–I–O và các định lí đồng quy.",
   chips:["KNTT Core","Lớp 7","Hình học","⭐⭐⭐⭐"],
   progressSkills:["nhan-biet-trung-tuyen","trong-tam","ti-so-trong-tam","nhan-biet-phan-giac","nhan-biet-trung-truc","nhan-biet-duong-cao","truc-tam","tam-noi-tiep","tam-ngoai-tiep","phan-biet-bon-tam","dong-quy-bon-duong-dac-biet"]
 },
 "16-tu-giac":{number:"16",data:"assets/data/curriculum/topic16-learning-workspace.json",description:"Tứ giác, các hình đặc biệt và suy luận bằng tính chất/dấu hiệu đường chéo.",chips:["KNTT Core","Lớp 8","Hình học","⭐⭐⭐⭐⭐"],progressSkills:["tong-goc-tu-giac","hinh-thang","hinh-thang-can","hbh-tinh-chat","hbh-dau-hieu","hcn-tinh-chat","hcn-dau-hieu","hthoi-tinh-chat","hthoi-dau-hieu","hvuong-tinh-chat","hvuong-dau-hieu","quan-he-bao-ham","duong-cheo-suy-luan"]},
 "17-thales-dong-dang":{number:"17",data:"assets/data/curriculum/topic17-learning-workspace.json",description:"Thales, đường phân giác, đồng dạng và ghép đúng đại lượng tương ứng.",chips:["KNTT Core","Lớp 8","Hình học","⭐⭐⭐⭐⭐"],progressSkills:["thales-thuan","thales-dao","ti-le-doan-thang","duong-trung-binh","tinh-chat-duong-phan-giac","nhan-biet-dong-dang","thu-tu-tuong-ung","dong-dang-gg","dong-dang-cgc","dong-dang-ccc","tinh-do-dai-dong-dang","hinh-dong-dang"]},
 "18-he-thuc-luong":{number:"18",data:"assets/data/curriculum/topic18-learning-workspace.json",description:"Pythagore, sin–cos–tan–cot và mô hình hóa chiều cao, khoảng cách.",chips:["KNTT Core","Lớp 8–9","Hình học","⭐⭐⭐⭐⭐"],progressSkills:["pythagore","pythagore-dao","canh-huyen","sin","cos","tan","cot","tim-canh-luong-giac","tim-goc-luong-giac","goc-nang-ha","chieu-cao-khoang-cach"]},
 "19-duong-tron":{number:"19",data:"assets/data/curriculum/topic19-learning-workspace.json",description:"Cung–dây, vị trí tương đối, góc nội tiếp, nội/ngoại tiếp và đo lường đường tròn.",chips:["KNTT Core","Lớp 9","Hình học","⭐⭐⭐⭐⭐"],progressSkills:["day-va-tam","cung-va-day","do-dai-duong-tron","do-dai-cung","vi-tri-tuong-doi-duong-thang-duong-tron","vi-tri-tuong-doi-hai-duong-tron","goc-noi-tiep","tu-giac-noi-tiep","dau-hieu-noi-tiep","duong-tron-ngoai-tiep-tam-giac","duong-tron-noi-tiep-tam-giac","da-giac-deu","dien-tich-quat-tron","dien-tich-vanh-khuyen"]},
 "20-hinh-hoc-tong-hop":{number:"20",data:"assets/data/curriculum/topic20-learning-workspace.json",coreViewData:"assets/data/curriculum/topic20-core-display-v2.json",description:"Hình phẳng, đối xứng, đo lường và các hình khối xuyên suốt lớp 6–9.",chips:["KNTT Core","Lớp 6–9","Hình học","⭐⭐⭐⭐⭐"],progressSkills:["nhan-biet-tam-giac-deu","nhan-biet-hinh-vuong","nhan-biet-luc-giac-deu","nhan-biet-tu-giac-dac-biet","chu-vi-tu-giac","dien-tich-tu-giac","do-luong-thuc-te","truc-doi-xung","tam-doi-xung","the-tich-hop-chu-nhat","dien-tich-day","doi-don-vi-do-luong","nhan-biet-hinh-hop-lap-phuong","dien-tich-xung-quanh-hop-chu-nhat","the-tich-lang-tru","nhan-biet-lang-tru-dung","dien-tich-xung-quanh-lang-tru","nhan-biet-hinh-chop-deu","dien-tich-xung-quanh-hinh-chop","the-tich-hinh-chop","nhan-biet-hinh-tru","dien-tich-xung-quanh-hinh-tru","the-tich-hinh-tru","nhan-biet-hinh-non","dien-tich-xung-quanh-hinh-non","the-tich-hinh-non","nhan-biet-hinh-cau","dien-tich-mat-cau","the-tich-hinh-cau"]},
 "21-thong-ke":{number:"21",data:"assets/data/curriculum/topic21-learning-workspace.json",description:"Từ thu thập và phân loại đến biểu đồ, chọn cách biểu diễn và kết luận có căn cứ.",chips:["KNTT Core","Lớp 6–8","Thống kê","⭐⭐⭐⭐"],progressSkills:["du-lieu-phan-loai","thu-thap-du-lieu","doc-bieu-do-cot","doc-bieu-do-cot-kep","doc-bieu-do-doan-thang","bieu-do-quat-tron","chon-bieu-do","chuyen-bang-bieu-do","nhan-xet-du-lieu"]},
 "22-dai-luong-dac-trung":{
   number:"22",
   bridgeOnly:true,
   description:"Nhánh tự chọn chuẩn bị Toán 10: trung bình, trung vị, mốt, khoảng biến thiên và cách chọn đại lượng đại diện.",
   chips:["THPT-Bridge","Tự chọn","Thống kê","Chuẩn bị Toán 10"],
   progressSkills:["trung-binh-tho","trung-binh-tan-so","trung-vi","mot","nhieu-mot","khoang-bien-thien","ngoai-lai","so-sanh-trung-binh-trung-vi","chon-dai-luong","so-sanh-hai-bo"]
 },
 "24-bai-toan-thuc-te":{number:"24",data:"assets/data/curriculum/topic24-learning-workspace.json",description:"Đọc dữ kiện, chọn mô hình, tính toán rồi kiểm tra đáp án trong thực tế.",chips:["Ứng dụng xuyên lớp","Lớp 6–9","Mô hình hóa","⭐⭐⭐⭐⭐"],progressSkills:["doc-de-du-kien","doi-don-vi","phan-tram","lap-phuong-trinh","lap-he","kiem-tra-ket-luan"]},
 "25-tong-hop-on-thi-10":{number:"25",data:"assets/data/curriculum/topic25-learning-workspace.json",description:"Nhận dạng dạng bài, ôn liên mạch và xây chu trình làm đề – chữa lỗi.",chips:["Entrance10","Ôn tập lớp 9","Tổng hợp","⭐⭐⭐⭐⭐"],progressSkills:["nhan-dien-chuyen-de","on-thi-bieu-thuc-can","on-thi-phuong-trinh","on-thi-he","on-thi-ham-so","on-thi-hinh-hoc","on-thi-thong-ke","on-thi-xac-suat","phan-loai-loi","checklist-chua-de"]},
 "23-xac-suat":{number:"23",data:"assets/data/curriculum/topic23-learning-workspace.json",description:"Từ phép thử, biến cố đến xác suất đơn giản và xác suất thực nghiệm theo lớp 6–8.",chips:["KNTT Core","Lớp 6–8","Xác suất","⭐⭐⭐⭐"],progressSkills:["xac-suat-thuc-nghiem","bien-co","bien-co-chac-chan-khong-the","xac-suat-co-dien","kiem-tra-xac-suat","phep-thu-ngau-nhien"]}
};

const STORAGE="toan-thcs-practice-v1";
const KG_DATA="assets/data/curriculum/knowledge-graph-v1.json";
const siteRoot=()=>{const marker="/kien-thuc/";const p=window.location.pathname;return p.includes(marker)?(p.split(marker)[0]||""):""};
const siteAsset=rel=>`${siteRoot()}/${String(rel||"").replace(/^\/+/, "")}`;

const SKILL_LABELS={
 "ti-so":"Tỉ số",
 "doi-don-vi-ti-so":"Đổi đơn vị khi lập tỉ số",
 "ti-so-phan-tram":"Tỉ số phần trăm",
 "ti-le-thuc":"Tỉ lệ thức",
 "tim-x-ti-le-thuc":"Tìm số chưa biết trong tỉ lệ thức",
 "day-ti-so-bang-nhau":"Dãy tỉ số bằng nhau",
 "chia-theo-ti-le":"Chia theo tỉ lệ",
 "ti-le-thuan":"Đại lượng tỉ lệ thuận",
 "he-so-ti-le-thuan":"Hệ số tỉ lệ thuận",
 "ti-le-nghich":"Đại lượng tỉ lệ nghịch",
 "he-so-ti-le-nghich":"Hệ số tỉ lệ nghịch",
 "phan-biet-thuan-nghich":"Phân biệt tỉ lệ thuận – nghịch",
 "nhan-tu-chung":"nhân tử chung",
 "hieu-hai-binh-phuong":"hiệu hai bình phương",
 "phan-tich-tu-mau":"phân tích tử/mẫu",
 "quy-dong-mau-thuc":"quy đồng mẫu",
 "bo-ngoac-dau":"bỏ ngoặc",
 "cong-tru-da-thuc":"cộng/trừ đa thức",
 "rut-gon-phan-thuc":"rút gọn phân thức",
 "hang-tu-dong-dang":"hạng tử đồng dạng",
 "thu-gon-da-thuc":"thu gọn đa thức",
 "nhan-bieu-thuc":"nhân biểu thức",
 "tinh-phan-phoi":"tính phân phối",
 "binh-phuong-tong":"bình phương tổng",
 "binh-phuong-hieu":"bình phương hiệu",
 "lap-phuong-tong":"lập phương tổng",
 "lap-phuong-hieu":"lập phương hiệu",
 "nhom-hang-tu":"nhóm hạng tử",
 "phoi-hop-phuong-phap":"phối hợp phương pháp",
  "mat-phang-toa-do":"mặt phẳng tọa độ",
  "bieu-thuc-dai-so":"biểu thức đại số",
  "phep-tinh-so-huu-ti":"phép tính số hữu tỉ",
  "phan-thuc-dai-so":"phân thức đại số",
  "phan-tich-da-thuc":"phân tích đa thức",
  "nhan-biet-phan-thuc":"Nhận biết phân thức",
  "dieu-kien-xac-dinh":"Điều kiện xác định",
  "hai-phan-thuc-bang-nhau":"Hai phân thức bằng nhau",
  "tinh-gia-tri-phan-thuc":"Tính giá trị phân thức",
  "doi-dau-phan-thuc":"Đổi dấu phân thức",
  "phan-tich-tu-mau":"Phân tích tử và mẫu",
  "rut-gon-phan-thuc":"Rút gọn phân thức",
  "quy-dong-mau-thuc":"Quy đồng mẫu thức",
  "cong-tru-phan-thuc":"Cộng – trừ phân thức",
  "nhan-phan-thuc":"Nhân phân thức",
  "chia-phan-thuc":"Chia phân thức",
  "giu-dieu-kien-ban-dau":"Giữ điều kiện xác định ban đầu",
  "bieu-thuc-nhieu-phep-tinh":"Biểu thức hữu tỉ nhiều phép tính",
  "tim-gia-tri-nguyen":"Tìm giá trị nguyên",
  "nhan-biet-don-thuc":"Nhận biết đơn thức",
  "nhan-biet-da-thuc":"Nhận biết đa thức",
  "he-so-bac":"Hệ số và bậc",
  "chia-da-thuc-cho-don-thuc":"Chia đa thức cho đơn thức",
  "tinh-gia-tri-bieu-thuc":"Tính giá trị biểu thức",
  "binh-phuong-hoan-chinh":"Nhận dạng bình phương hoàn chỉnh",
  "nhan-dang-lap-phuong":"Nhận dạng cấu trúc lập phương",
  "tong-hai-lap-phuong":"Tổng hai lập phương",
  "hieu-hai-lap-phuong":"Hiệu hai lập phương",
  "nhan-dang-hdt":"Nhận dạng hằng đẳng thức",
  "tinh-nhanh-hdt":"Tính nhanh bằng hằng đẳng thức",
  "rut-gon-hdt":"Rút gọn bằng hằng đẳng thức",
  "doi-dau-nhan-tu-chung":"Đổi dấu để tạo nhân tử chung",
  "tong-hieu-lap-phuong":"Tổng – hiệu hai lập phương",
  "kiem-tra-phan-tich":"Kiểm tra kết quả phân tích",
  "bo-ngoac-dau":"Bỏ ngoặc và dấu",
  "cong-tru-da-thuc":"Cộng – trừ đa thức",
  "tinh-phan-phoi":"Tính phân phối",
  "nhan-bieu-thuc":"Nhân biểu thức",
  "hieu-hai-binh-phuong":"Hiệu hai bình phương",
  "phan-tich-tu-mau":"Phân tích tử và mẫu",
  "nghiem-phuong-trinh":"Khái niệm nghiệm phương trình",
  "pt-bac-nhat":"Phương trình bậc nhất",
  "bien-doi-pt-nhieu-buoc":"Biến đổi phương trình nhiều bước",
  "pt-tich":"Phương trình tích",
  "dkxd-phuong-trinh-mau":"Điều kiện xác định phương trình chứa mẫu",
  "khu-mau-phuong-trinh":"Khử mẫu và giải phương trình",
  "doi-chieu-nghiem":"Đối chiếu nghiệm với điều kiện",
  "bpt-bac-nhat":"Bất phương trình bậc nhất",
  "doi-chieu-bpt":"Đổi chiều bất phương trình",
  "bieu-dien-tap-nghiem":"Biểu diễn tập nghiệm",
  "giao-tap-nghiem":"Giao các tập nghiệm",
  "lap-phuong-trinh":"Lập phương trình từ bài toán",
  "lap-bat-phuong-trinh":"Lập bất phương trình từ bài toán",
  "tham-so-co-ban":"Biện luận tham số cơ bản",
  "bat-dang-thuc":"Khái niệm bất đẳng thức",
  "tinh-chat-thu-tu-phep-cong":"Tính chất thứ tự với phép cộng",
  "tinh-chat-thu-tu-phep-nhan":"Tính chất thứ tự với phép nhân",
  "nghiem-pt-hai-an":"Nghiệm của phương trình bậc nhất hai ẩn",
  "nghiem-he":"Nghiệm của hệ phương trình",
  "so-nghiem-he":"Số nghiệm của hệ",
  "y-nghia-hinh-hoc":"Ý nghĩa hình học của hệ",
  "giai-he-the":"Giải hệ bằng phương pháp thế",
  "giai-he-cong":"Giải hệ bằng cộng đại số",
  "chon-phuong-phap":"Chọn phương pháp giải phù hợp",
  "bien-doi-truoc-giai":"Biến đổi hệ trước khi giải",
  "kiem-tra-nghiem-he":"Kiểm tra nghiệm của hệ",
  "tham-so-he":"Hệ phương trình có tham số",
  "lap-he-bai-toan":"Lập hệ từ bài toán",
  "bai-toan-so":"Bài toán về số",
  "chuyen-dong-he":"Bài toán chuyển động",
  "nang-suat-he":"Bài toán năng suất – giá trị",
  "khai-niem-ham-so":"Khái niệm hàm số",
  "tinh-gia-tri-ham":"Tính giá trị hàm số",
  "bang-gia-tri":"Bảng giá trị",
  "toa-do-diem":"Tọa độ điểm",
  "diem-thuoc-do-thi":"Điểm thuộc đồ thị",
  "nhan-biet-ham-bac-nhat":"Nhận biết hàm số bậc nhất",
  "he-so-goc":"Hệ số góc",
  "tung-do-goc":"Tung độ gốc",
  "dong-nghich-bien":"Đồng biến – nghịch biến",
  "ve-do-thi-ham-bac-nhat":"Vẽ đồ thị hàm số bậc nhất",
  "vi-tri-hai-duong-thang":"Vị trí tương đối hai đường thẳng",
  "giao-diem-do-thi":"Giao điểm hai đồ thị",
  "lien-he-he-phuong-trinh":"Liên hệ với hệ phương trình",
  "ham-y-ax2":"Hàm số y = ax²",
  "doi-xung-parabol":"Tính đối xứng và hướng mở parabol",
  "diem-thuoc-parabol":"Điểm thuộc parabol",
  "can-bac-hai-so-hoc":"Căn bậc hai số học",
  "dkxd-can":"Điều kiện xác định của căn thức",
  "can-binh-phuong":"Căn của bình phương và giá trị tuyệt đối",
  "khai-phuong-tich":"Khai phương một tích",
  "khai-phuong-thuong":"Khai phương một thương",
  "dua-thua-so-ra":"Đưa thừa số ra ngoài dấu căn",
  "dua-thua-so-vao":"Đưa thừa số vào trong dấu căn",
  "can-dong-dang":"Cộng trừ căn đồng dạng",
  "nhan-chia-can":"Nhân chia căn thức",
  "truc-can-mau-don":"Trục căn thức ở mẫu dạng đơn",
  "truc-can-lien-hop":"Trục căn thức bằng liên hợp",
  "tim-x-can":"Tìm x trong phương trình chứa căn",
  "so-sanh-can":"So sánh biểu thức căn",
  "can-bac-ba":"Căn bậc ba",
  "nhan-dang-pt-bac-hai":"Nhận dạng phương trình bậc hai",
  "he-so-abc":"Xác định hệ số a, b, c",
  "tinh-delta":"Tính biệt thức Δ",
  "so-nghiem-delta":"Số nghiệm theo Δ",
  "cong-thuc-nghiem":"Công thức nghiệm",
  "delta-phay":"Công thức nghiệm thu gọn Δ'",
  "giai-pt-bac-hai":"Giải phương trình bậc hai",
  "nham-nghiem":"Nhẩm nghiệm",
  "tham-so-so-nghiem":"Tham số và số nghiệm",
  "tong-tich-nghiem":"Tổng – tích nghiệm theo Viète",
  "bieu-thuc-doi-xung":"Biểu thức đối xứng theo nghiệm",
  "lap-pt-tu-nghiem":"Lập phương trình từ nghiệm",
  "dau-nghiem":"Xét dấu hai nghiệm",
  "lien-he-do-thi":"Liên hệ nghiệm với đồ thị"
,
  "diem-thuoc-duong":"Điểm thuộc / không thuộc đường thẳng",
  "tia-doi":"Hai tia đối nhau",
  "trung-diem":"Trung điểm đoạn thẳng",
  "phan-loai-goc":"Phân loại góc",
  "goc-phu-bu":"Góc phụ nhau – bù nhau",
  "tia-phan-giac":"Tia phân giác",
  "goc-doi-dinh":"Góc đối đỉnh",
  "duong-vuong-goc":"Hai đường thẳng vuông góc",
  "goc-so-le-trong":"Góc so le trong",
  "goc-dong-vi":"Góc đồng vị",
  "goc-trong-cung-phia":"Góc trong cùng phía",
  "tinh-chat-song-song":"Tính chất hai đường thẳng song song",
  "dau-hieu-song-song":"Dấu hiệu nhận biết song song",
  "vuong-goc-song-song":"Quan hệ vuông góc – song song",
  "diem-nam-giua":"Điểm nằm giữa hai điểm",
  "tia":"Khái niệm tia",
  "doan-thang-do-dai":"Đoạn thẳng và độ dài",
  "khai-niem-goc":"Khái niệm góc",
  "do-goc":"Số đo góc",
  "nhan-dang-goc-dac-biet":"Nhận dạng góc ở vị trí đặc biệt",
  "tien-de-euclid":"Tiên đề Euclid",
  "gia-thiet-ket-luan":"Giả thiết – kết luận",
  "lap-luan-chung-minh-ngan":"Lập luận chứng minh ngắn",
  "phan-loai-tam-giac":"Phân loại tam giác",
  "chu-vi-dien-tich":"Chu vi – diện tích tam giác",
  "tong-goc-tam-giac":"Tổng ba góc trong tam giác",
  "goc-ngoai":"Góc ngoài của tam giác",
  "so-sanh-canh-goc":"Quan hệ cạnh – góc đối diện",
  "bat-dang-thuc-tam-giac":"Bất đẳng thức tam giác",
  "tam-giac-can":"Tam giác cân",
  "tam-giac-deu":"Tam giác đều",
  "pythagore":"Định lý Pythagore",
  "pythagore-dao":"Định lý Pythagore đảo",
  "bang-nhau-ccc":"Hai tam giác bằng nhau c.c.c",
  "bang-nhau-cgc":"Hai tam giác bằng nhau c.g.c",
  "bang-nhau-gcg":"Hai tam giác bằng nhau g.c.g",
  "bang-nhau-tam-giac-vuong":"Bằng nhau của hai tam giác vuông",
  "viet-tuong-ung-tam-giac-bang-nhau":"Viết đúng thứ tự tương ứng của hai tam giác bằng nhau",
  "nhan-biet-trung-truc":"Nhận biết đường trung trực",
  "cach-deu-dinh":"Tính chất cách đều ba đỉnh",
  "tinh-chat-duong-trung-truc":"Tính chất và dấu hiệu đường trung trực",
  "duong-vuong-goc-duong-xien":"Đường vuông góc và đường xiên",
  "nhan-biet-trung-tuyen":"Nhận biết đường trung tuyến",
  "trong-tam":"Trọng tâm",
  "ti-so-trong-tam":"Tỉ số trọng tâm 2 : 1",
  "nhan-biet-duong-cao":"Nhận biết đường cao",
  "truc-tam":"Trực tâm",
  "vi-tri-truc-tam":"Vị trí trực tâm",
  "nhan-biet-phan-giac":"Nhận biết đường phân giác",
  "tam-noi-tiep":"Tâm nội tiếp",
  "cach-deu-canh":"Tính chất cách đều ba cạnh",
  "tam-ngoai-tiep":"Tâm ngoại tiếp",
  "vi-tri-tam-ngoai-tiep":"Vị trí tâm ngoại tiếp",
  "phan-biet-bon-tam":"Phân biệt G – H – I – O",
  "dong-quy-bon-duong-dac-biet":"Tính đồng quy của bốn họ đường đặc biệt"
,
  "tong-goc-tu-giac":"Tổng các góc trong tứ giác",
  "hinh-thang":"Hình thang",
  "hinh-thang-can":"Hình thang cân",
  "hbh-tinh-chat":"Tính chất hình bình hành",
  "hbh-dau-hieu":"Dấu hiệu hình bình hành",
  "hcn-tinh-chat":"Tính chất hình chữ nhật",
  "hcn-dau-hieu":"Dấu hiệu hình chữ nhật",
  "hthoi-tinh-chat":"Tính chất hình thoi",
  "hthoi-dau-hieu":"Dấu hiệu hình thoi",
  "hvuong-tinh-chat":"Tính chất hình vuông",
  "hvuong-dau-hieu":"Dấu hiệu hình vuông",
  "quan-he-bao-ham":"Quan hệ bao hàm giữa các tứ giác đặc biệt",
  "duong-cheo-suy-luan":"Suy luận từ tính chất đường chéo",
  "thales-thuan":"Thales thuận",
  "thales-dao":"Thales đảo",
  "ti-le-doan-thang":"Tỉ lệ các đoạn thẳng",
  "duong-trung-binh":"Đường trung bình tam giác",
  "nhan-biet-dong-dang":"Nhận biết tam giác đồng dạng",
  "dong-dang-gg":"Đồng dạng g-g",
  "dong-dang-cgc":"Đồng dạng c-g-c",
  "dong-dang-ccc":"Đồng dạng c-c-c",
  "thu-tu-tuong-ung":"Thứ tự đỉnh tương ứng",
  "tinh-do-dai-dong-dang":"Tính độ dài bằng đồng dạng",
  "ti-so-chu-vi":"Tỉ số chu vi",
  "ti-so-dien-tich":"Tỉ số diện tích",
  "he-thuc-tich":"Hệ thức tích từ đồng dạng",
  "ket-hop-song-song-dong-dang":"Kết hợp song song – đồng dạng",
  "tinh-chat-duong-phan-giac":"Tính chất đường phân giác trong tam giác",
  "hinh-dong-dang":"Hình đồng dạng",
  "canh-huyen":"Cạnh huyền – cạnh góc vuông",
  "he-thuc-canh":"Hệ thức cạnh góc vuông",
  "he-thuc-duong-cao":"Hệ thức đường cao",
  "dien-tich-duong-cao":"Diện tích và đường cao",
  "doi-ke-huyen":"Nhận biết cạnh đối – kề – huyền",
  "sin":"Tỉ số sin",
  "cos":"Tỉ số cos",
  "tan":"Tỉ số tan",
  "tim-canh-luong-giac":"Tìm cạnh bằng lượng giác",
  "tim-goc-luong-giac":"Tìm góc bằng lượng giác",
  "goc-nang-ha":"Góc nâng – góc hạ",
  "chieu-cao-khoang-cach":"Chiều cao – khoảng cách",
  "ket-hop-he-thuc":"Kết hợp hệ thức lượng",
  "cot":"Tỉ số cot"
};
const skillLabel=id=>SKILL_LABELS[id]||String(id||"").replaceAll("-"," ");
const primarySkill=q=>{
 // Only the assessed skill counts as covered. Supporting tags are context.
 const raw=q?.assessed_skill||q?.primary_skill||q?.tags?.skill;
 return Array.isArray(raw)?raw[0]||null:typeof raw==="string"?raw:null;
};
const coverageFor=(card,questions)=>{
 const declared=[...new Set(card.skills||[])];
 const assessed=new Set(questions.map(primarySkill).filter(Boolean));
 return {declared,assessed,covered:declared.filter(id=>assessed.has(id)),missing:declared.filter(id=>!assessed.has(id))};
};
const skillOverview=(card,questions,asTeaching=false)=>{
 const coverage=coverageFor(card,questions);
 const wrap=document.createElement("details");wrap.className="topic-core-skill-overview";
 const summary=document.createElement("summary");summary.className="topic-core-skill-summary";
 summary.textContent=asTeaching?"Xem kỹ năng của bài":"Xem kỹ năng đang luyện";
 const body=document.createElement("div");body.className="topic-core-skill-body";
 const count=document.createElement("span");count.className="topic-core-coverage-count";
 count.textContent=coverage.covered.length+"/"+coverage.declared.length+" kỹ năng có câu luyện riêng";
 const list=document.createElement("div");list.className="topic-core-skill-list";
 for(const id of coverage.declared){
  const chip=document.createElement("span");chip.className="topic-core-skill-chip";chip.dataset.skillId=id;
  const covered=coverage.assessed.has(id);chip.dataset.covered=covered?"yes":"no";
  chip.textContent=skillLabel(id)+(covered?" · có câu luyện":" · chưa có câu luyện riêng");
  list.appendChild(chip);
 }
 body.append(count,list);
 if(coverage.missing.length){
  const note=document.createElement("p");note.className="topic-core-coverage-gap";
  note.textContent="Một số kỹ năng chưa có câu riêng trong chặng này. Em vẫn có thể học nội dung trước và luyện thêm ở phần Luyện tập.";
  body.appendChild(note);
 }
 wrap.append(summary,body);
 return wrap;
};


const sections=[
 ["map","🗺️ Bản đồ","1. Bản đồ kiến thức"],["goals","🎯 Mục tiêu","2. Mục tiêu cần đạt"],["core","📖 Cốt lõi","3. Kiến thức cốt lõi"],["links","🔗 Liên quan","4. Kiến thức liên quan"],["types","🧩 Dạng bài","5. Các dạng bài cần nắm vững"],["exam","🚀 Thi vào 10","6. Liên hệ với thi vào lớp 10"],["errors","⚠️ Lỗi sai","7. Lỗi sai thường gặp"],["practice","📝 Luyện tập","8. Luyện tập"],["check","✅ Tự kiểm tra","9. Tự kiểm tra"],["roadmap","🔄 Roadmap","10. Liên kết Roadmap"],["finish","🏁 Hoàn thành","11. Điều kiện hoàn thành"]
];

const normalize=s=>(s||"").replace(/\s+/g," ").trim();
const findHeading=(label,ordinal)=>{
 const headings=[...document.querySelectorAll(".md-content h2")];
 const byNumber=headings.find(h=>new RegExp("(?:^|\\s)"+ordinal+"\\.\\s").test(normalize(h.textContent)));
 return byNumber||headings.find(h=>normalize(h.textContent).includes(label));
};
const typeset=el=>window.MathJax?.typesetPromise?.([el]).catch(()=>{});
const loadStats=()=>window.RoadmapLearnerEvidence?.load?.()||(()=>{try{return JSON.parse(localStorage.getItem(STORAGE))||{tags:{}}}catch(_){return{tags:{}}}})();
const progress=skills=>{
 const d=loadStats();
 return Math.round(skills.reduce((sum,s)=>{const rec=d.tags?.[s];return sum+(rec?.attempted?(rec.correct/rec.attempted):0)},0)/Math.max(1,skills.length)*100);
};

const wrapSection=(heading,id,index)=>{
 const sourceAnchor=heading.id||"";
 const details=document.createElement("details");details.className="topic-learning-card";details.id=id;if(index<3)details.open=true;
 const summary=document.createElement("summary");
 if(sourceAnchor){summary.id=sourceAnchor;details.dataset.sourceAnchor=sourceAnchor}
 summary.innerHTML=`${heading.textContent}<span class="topic-section-badge">${index<3?"mở sẵn":"chạm để mở"}</span>`;
 const body=document.createElement("div");body.className="topic-learning-card-body";heading.parentNode.insertBefore(details,heading);details.append(summary,body);
 let node=heading.nextSibling;heading.remove();while(node&&!(node.nodeType===1&&node.tagName==="H2")){const next=node.nextSibling;body.appendChild(node);node=next}
};

const questionGrade=question=>{
 const grades=question?.curriculum?.grades;
 if(Array.isArray(grades)&&grades.length)return Number(grades[0]);
 const g=question?.tags?.grade;
 if(Array.isArray(g)&&g.length)return Number(g[0]);
 if(g!==undefined&&g!==null)return Number(g);
 return null;
};

const renderTutor=async(panel,question,selectedText,graph)=>{
 panel.hidden=false;panel.innerHTML="<strong>🤖 Gia sư đang xem evidence…</strong>";
 try{
  const skill=(question.tags?.skill||[])[0];const stats=loadStats();
  const context=window.RoadmapTutor.buildContext({projectContextVersion:"1.0.26",layer:question.tags?.layer||"KNTT-Core",gradeOverlay:questionGrade(question),skill,question,learnerAnswer:selectedText,hintLevel:0,stats,graph,recovery:{events:[]}});
  const response=await window.RoadmapTutor.run({provider:"mock",context});
  panel.innerHTML=`<strong>🤖 Gia sư · QA local</strong><div>${response.message}</div><div class="topic-micro-note">${response.confidence==="evidenced"?"Dựa trên learner evidence đủ ngưỡng.":"Tín hiệu sai chỉ là gợi ý, chưa phải kết luận điểm yếu."}</div>`;
  if(response.action_type==="REMEDIATE"&&response.target_skill){const topic=graph?.nodes?.[response.target_skill]?.topic;if(topic){const a=document.createElement("a");a.className="md-button";a.textContent=`Ôn ngay: ${skillLabel(response.target_skill)}`;a.href=`${siteRoot()}/kien-thuc/${topic}/bai-tap/?focus=${encodeURIComponent(response.target_skill)}&mode=remediation`;panel.appendChild(a)}}
 }catch(_){panel.innerHTML="<strong>🤖 Gia sư</strong><div>Chưa thể mở trợ giúp lúc này.</div>"}
};

const showMicroLearning=(panel,card,q,showAnswer=false,submitted=false)=>{
 panel.innerHTML="";panel.hidden=false;
 const title=document.createElement("strong");title.textContent=showAnswer?"📖 Lời giải hiện có":"🎓 Giảng lại kiến thức và ví dụ";panel.appendChild(title);
 const row=(label,value)=>{if(!value)return;const wrap=document.createElement("div");wrap.className="topic-micro-learn-row";const heading=document.createElement("strong");heading.textContent=label;const body=document.createElement("p");body.textContent=value;wrap.append(heading,body);panel.appendChild(wrap)};
 const copy=card.teaching_copy;
 if(copy){row("Kiến thức cốt lõi",copy.key_idea);row("Ví dụ mẫu",copy.worked_example?.problem);row("Vì sao giải như vậy?",copy.worked_example?.solution);row("Lỗi dễ mắc",copy.misconception);row("Ghi nhớ",copy.summary)}
 else {
  row("Gợi ý học","Thẻ này chưa có ví dụ mẫu riêng. Em có thể đọc phần kiến thức cốt lõi trong bài giảng đầy đủ.");
  const link=document.createElement("a");link.className="practice-btn practice-btn-secondary";
  link.href=location.pathname.includes("/core/")?"../#core":"#core";link.textContent="Mở kiến thức cốt lõi của chuyên đề ↗";
  panel.appendChild(link);
 }
 if(showAnswer){
  row("Đáp án trong ngân hàng",Array.isArray(q.options)?q.options[q.answer]:null);
  const steps=Array.isArray(q.solution_steps)?q.solution_steps.filter(v=>typeof v==="string"&&v.trim()):[];
  if(steps.length){const list=document.createElement("ol");list.className="practice-help-steps";steps.forEach(step=>{const li=document.createElement("li");li.textContent=step;list.appendChild(li)});panel.appendChild(list)}
  else{row("Giải thích câu hỏi hiện có",q.explanation||"Chưa có lời giải được biên soạn.");row("Giới hạn hiện tại","Chưa có lời giải từng bước được kiểm duyệt cho câu này; đây không phải lời giải do Gemini tạo.")}
  row("Ghi nhận",submitted?"Xem sau khi trả lời không thay đổi kết quả đã lưu.":"Đã mở đáp án trước khi trả lời; lần làm này sẽ được ghi là có trợ giúp.");
 }
 typeset(panel);
};

const mountMicro=(host,card,questions,graph)=>{
 host.replaceChildren();host.className="topic-micro-panel";
 const records=questions.map(()=>({selected:null,hintsUsed:0,hintsCollapsed:false,fullSolutionViewed:false,signal:null}));
 let index=0;
 const make=(text,cls="",action)=>{
  const b=document.createElement("button");b.type="button";b.className="practice-btn "+cls;b.textContent=text;
  if(action)b.addEventListener("click",action);return b;
 };
 const answered=()=>records.filter(r=>r.selected!==null).length;
 const render=()=>{
  host.replaceChildren();
  if(!questions.length){host.textContent="Chặng học này chưa có câu thực hành. Em có thể đọc phần bài giảng đầy đủ.";return}
  if(index===questions.length){
   const box=document.createElement("div");box.className="topic-micro-summary";
   const strong=document.createElement("strong");strong.textContent="Đã làm "+answered()+"/"+questions.length+" câu · Đúng "+records.filter((r,i)=>r.selected===questions[i].answer).length+"/"+answered();
   const note=document.createElement("p");note.textContent="Chỉ các câu đã trả lời được ghi nhận. Đây là luyện tập có trợ giúp, không phải bài tự kiểm tra độc lập.";
   box.append(strong,note,skillOverview(card,questions),make("← Xem lại các câu","",()=>{index=0;render()}));host.appendChild(box);return;
  }
  const q=questions[index],st=records[index],correct=st.selected===q.answer;
  const assessed=primarySkill(q);
  const skill=document.createElement("details");skill.className="topic-micro-skill-details";
  const skillSummary=document.createElement("summary");skillSummary.textContent="Xem kỹ năng đang luyện";
  const skillText=document.createElement("div");skillText.className="topic-micro-assessed-skill";
  skillText.dataset.primarySkill=assessed||"unmapped";
  skillText.textContent=assessed?skillLabel(assessed):"Kỹ năng đang được hệ thống ghi nhận";
  skill.append(skillSummary,skillText);
  const meta=document.createElement("div");meta.className="topic-micro-meta";
  meta.textContent="Câu "+(index+1)+"/"+questions.length+" · "+(q.micro_role==="base"?"Nền tảng":q.micro_role==="trap"?"Bẫy sai điển hình":q.micro_role==="coverage"?"Bổ sung kỹ năng":"Vận dụng");
  const pager=document.createElement("nav");pager.className="topic-micro-pager";pager.setAttribute("aria-label","Chọn câu hỏi");
  records.forEach((record,i)=>{
   const b=make("Câu "+(i+1)+(record.selected===null?"":" ✓"),"topic-micro-page",()=>{index=i;render()});
   if(i===index){b.classList.add("is-current");b.setAttribute("aria-current","step")}
   pager.appendChild(b);
  });
  const prompt=document.createElement("div");prompt.className="topic-micro-question";prompt.textContent=q.question;
  const opts=document.createElement("div");opts.className="topic-micro-options";opts.setAttribute("role","group");opts.setAttribute("aria-label","Các phương án trả lời");
  const feedback=document.createElement("div");feedback.className="topic-micro-feedback";feedback.hidden=st.selected===null;feedback.setAttribute("aria-live","polite");
  const tutor=document.createElement("div");tutor.className="topic-micro-tutor";tutor.hidden=true;
  const tools=document.createElement("div");tools.className="topic-micro-tools";
  const controls=document.createElement("div");controls.className="topic-micro-navigation";
  const clearExpanded=()=>host.querySelectorAll('[aria-expanded]').forEach(b=>b.setAttribute("aria-expanded","false"));
  const toggle=(mode,button,submitted)=>{
   if(!tutor.hidden&&tutor.dataset.mode===mode){tutor.hidden=true;tutor.dataset.mode="";button.setAttribute("aria-expanded","false");return}
   clearExpanded();tutor.dataset.mode=mode;button.setAttribute("aria-expanded","true");
   showMicroLearning(tutor,card,q,mode==="answer",submitted);
  };
  q.options.forEach((value,i)=>{
   const b=make(value,"topic-micro-option",()=>{
    if(st.selected!==null)return;
    st.selected=i;
    const result=window.RoadmapLearnerEvidence?.recordAnswer?.({question:q,correct:i===q.answer,selectedIndex:i,hintsUsed:st.hintsUsed,fullSolutionViewed:st.fullSolutionViewed})||{signal:null};
    st.signal=result.signal||null;render();
   });
   if(st.selected!==null){
    b.disabled=true;if(i===q.answer)b.classList.add("is-correct");
    if(i===st.selected&&i!==q.answer)b.classList.add("is-wrong");
    if(i===st.selected)b.setAttribute("aria-pressed","true");
   }
   opts.appendChild(b);
  });
  if(st.hintsUsed&&!st.hintsCollapsed){
   const hints=document.createElement("div");hints.className="topic-micro-hints";
   (q.hints||[]).slice(0,st.hintsUsed).forEach((value,i)=>{
    const hint=document.createElement("div");hint.className="practice-hint";hint.textContent="Gợi ý "+(i+1)+": "+value;hints.appendChild(hint);
   });tools.appendChild(hints);
  }
  const hintCount=(q.hints||[]).length;
  const hintLabel=!hintCount?"💡 Gợi ý":
   st.hintsUsed<hintCount?(st.hintsUsed?("💡 Gợi ý tiếp ("+(st.hintsUsed+1)+"/"+hintCount+")"):"💡 Gợi ý"):
   st.hintsCollapsed?("💡 Xem lại gợi ý ("+st.hintsUsed+"/"+hintCount+")"):"▴ Thu gọn gợi ý";
  const hint=make(hintLabel,"topic-micro-hint",()=>{
   if(!hintCount)return;
   if(st.hintsUsed<hintCount){st.hintsUsed++;st.hintsCollapsed=false;render();return}
   st.hintsCollapsed=!st.hintsCollapsed;render();
  });
  hint.setAttribute("aria-expanded",String(st.hintsUsed>0&&!st.hintsCollapsed));
  if(!hintCount)hint.disabled=true;
  const teach=make("🎓 Giảng lại / Xem ví dụ mẫu","topic-micro-teach",()=>toggle("teach",teach,st.selected!==null));teach.setAttribute("aria-expanded","false");
  const reveal=make("📖 Xem lời giải câu này","topic-micro-reveal",()=>{
   if(!tutor.hidden&&tutor.dataset.mode==="answer"){tutor.hidden=true;tutor.dataset.mode="";reveal.setAttribute("aria-expanded","false");return}
   clearExpanded();tutor.replaceChildren();tutor.hidden=false;tutor.dataset.mode="answer";reveal.setAttribute("aria-expanded","true");
   if(st.selected!==null||st.fullSolutionViewed){showMicroLearning(tutor,card,q,true,st.selected!==null);return}
   const notice=document.createElement("p");notice.className="practice-help-confirm";notice.textContent="Nếu mở đáp án trước khi trả lời, lần làm này được ghi là có trợ giúp.";
   const confirm=make("Tôi muốn xem lời giải ngay","practice-btn-primary",()=>{st.fullSolutionViewed=true;st.hintsUsed=Math.max(1,st.hintsUsed);st.hintsCollapsed=false;showMicroLearning(tutor,card,q,true,false)});
   tutor.append(notice,confirm);
  });reveal.setAttribute("aria-expanded","false");
  tools.append(hint,teach,reveal);
  if(st.selected!==null){
   feedback.classList.add(correct?"is-correct":"is-wrong");
   const heading=document.createElement("strong");heading.textContent=correct?"✓ Chính xác":"✗ Chưa đúng";
   const explanation=document.createElement("div");explanation.className="topic-micro-explanation";explanation.textContent=q.explanation||"";
   feedback.append(heading,explanation);
   if(st.signal?.feedback_hint){const signal=document.createElement("div");signal.className="topic-micro-signal";signal.textContent="🔎 "+st.signal.feedback_hint;feedback.appendChild(signal)}
   if(st.fullSolutionViewed){const note=document.createElement("div");note.className="practice-help-assisted";note.textContent="Đã xem lời giải trước khi trả lời · có trợ giúp, không phải tự làm độc lập.";feedback.appendChild(note)}
   const review=make("📖 Xem kiến thức & lời giải","topic-micro-review",()=>toggle("answer",review,true));review.setAttribute("aria-expanded","false");feedback.appendChild(review);
   if(!correct&&window.RoadmapTutor&&q.tags?.layer==="KNTT-Core")feedback.appendChild(make("🧭 Gợi ý theo tiến độ · QA offline","",()=>renderTutor(tutor,q,q.options[st.selected],graph)));
  }
  const prev=make("← Câu trước","",()=>{index--;render()});prev.disabled=index===0;
  const next=make(index===questions.length-1?"Xem kết quả":"Câu tiếp theo →","practice-btn-primary",()=>{
   if(index<questions.length-1)index++;
   else{const missing=records.findIndex(r=>r.selected===null);index=missing>=0?missing:questions.length}
   render();
  });
  controls.append(prev,next);
  if(index===questions.length-1&&answered()<questions.length){
   const note=document.createElement("small");note.textContent="Chưa trả lời "+(questions.length-answered())+" câu. Bỏ qua không bị tính sai.";controls.appendChild(note);
  }
  host.append(meta,skillOverview(card,questions),pager,skill,prompt,opts,tools,feedback,tutor,controls);typeset(host);
 };
 render();
};
const cardGradeBand=card=>{
 const explicit=(card.grades||[]).map(Number).filter(g=>g>=6&&g<=9);
 const parsed=[];
 for(const label of card.kntt_lessons||[]){
  const m=String(label).match(/Lớp\s*(6|7|8|9)(?:\s*[–-]\s*(6|7|8|9))?/i);
  if(!m)continue;
  const a=Number(m[1]),b=Number(m[2]||m[1]),lo=Math.min(a,b),hi=Math.max(a,b);
  for(let g=lo;g<=hi;g++)if(g>=6&&g<=9)parsed.push(g);
 }
 const grades=[...new Set(explicit.length?explicit:parsed)].sort((a,b)=>a-b);
 return grades.length?{grades,start:grades[0],end:grades[grades.length-1],count:grades.length}:null;
};

const renderCoreCards=async(hero,config)=>{
 try{
  const cardRes=await fetch(siteAsset(config.data));if(!cardRes.ok)return;let data=await cardRes.json();
  if(config.coreViewData){
   // The v1 source remains the historical five-card mapping; v2 changes display only.
   const viewRes=await fetch(siteAsset(config.coreViewData));if(!viewRes.ok)throw Error("Core v2 overlay missing");
   const view=await viewRes.json();
   const originalIds=(data.cards||[]).map(c=>c.id);
   if(view.schema!=="roadmap-topic-core-display-overlay-v2"||view.version!==2||view.topic!==data.topic||
      view.history_policy?.migration!=="none"||view.history_policy?.storage_key!=="toan-thcs-practice-v1"||
      view.legacy_cards_read_only?.length!==originalIds.length||
      !originalIds.every((id,i)=>view.legacy_cards_read_only[i].id===id&&
        view.legacy_cards_read_only[i].original_skill_denominator===data.cards[i].skills.length&&
        JSON.stringify(view.legacy_cards_read_only[i].original_micro_practice)===JSON.stringify(data.cards[i].micro_practice))||
      view.cards?.length!==10||new Set(view.cards.map(c=>c.id)).size!==10)throw Error("Core v2 legacy compatibility check failed");
   data={...data,cards:view.cards,learning_layer_label:"KNTT Core · nhóm học v2"};
  }
  const [microRes,graphRes]=await Promise.all([fetch(siteAsset(data.micro_practice_bank)),fetch(siteAsset(KG_DATA))]);
  const micro=microRes.ok?await microRes.json():{questions:[]};const graph=graphRes.ok?await graphRes.json():null;const byId=new Map((micro.questions||[]).map(q=>[q.id,q]));
  const host=document.createElement("section");host.className="topic-core-journey";host.id="core-journey";
  const totalQuestions=(data.cards||[]).reduce((sum,c)=>sum+(c.micro_practice||[]).length,0);
  host.innerHTML='<div class="topic-core-journey-head"><div><span class="topic-workspace-kicker">'+(data.learning_layer_label||"KNTT Core")+' · '+data.cards.length+' chặng học</span><h2>Học theo chặng · Thực hành ngắn</h2></div><span class="topic-chip">'+totalQuestions+' câu thực hành</span></div>';
  const grid=document.createElement("div");grid.className="topic-core-card-grid";
  const dialog=document.createElement("dialog");dialog.className="topic-core-dialog";
  dialog.setAttribute("aria-labelledby","topic-core-dialog-title");
  const head=document.createElement("div");head.className="topic-core-dialog__head";
  const title=document.createElement("h2");title.id="topic-core-dialog-title";
  const close=document.createElement("button");close.type="button";close.className="practice-btn topic-core-dialog__close";
  close.textContent="Đóng ✕";close.setAttribute("aria-label","Đóng cửa sổ Core");
  close.addEventListener("click",()=>dialog.close());
  head.append(title,close);
  const body=document.createElement("div");body.className="topic-core-dialog__body";
  dialog.append(head,body);host.appendChild(dialog);
  dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
  let returnFocus=null;
  dialog.addEventListener("close",()=>{if(returnFocus?.isConnected)returnFocus.focus();returnFocus=null});
  const sessions=new Map();
  const questionsFor=card=>(card.micro_practice||[]).map(id=>byId.get(id)).filter(Boolean);
  const teachingPanel=(card,qs)=>{
   const panel=document.createElement("section");panel.className="topic-core-teaching-modal";
   panel.appendChild(skillOverview(card,qs,true));
   const copy=card.teaching_copy;
   const row=(label,value)=>{
    if(!value)return;
    const part=document.createElement("section");part.className="topic-core-teaching-row";
    const h=document.createElement("h3");h.textContent=label;
    const p=document.createElement("p");p.textContent=value;part.append(h,p);panel.appendChild(part);
   };
   if(copy){
    row("Kiến thức cốt lõi",copy.key_idea);
    row("Ví dụ mẫu",copy.worked_example?.problem);
    row("Các bước giải",copy.worked_example?.solution);
    row("Lỗi dễ mắc",copy.misconception);
    row("Ghi nhớ nhanh",copy.summary);
   }else{
    row("Bài giảng đang hoàn thiện","Chặng này chưa có ví dụ mẫu riêng đã kiểm định. Em có thể đọc bài giảng đầy đủ của chuyên đề trước khi luyện.");
    const link=document.createElement("a");link.className="md-button";
    link.href=location.pathname.includes("/core/")?"../#core":"#core";
    link.textContent="Mở kiến thức cốt lõi trong bài giảng đầy đủ ↗";panel.appendChild(link);
   }
   return panel;
  };
  const openCard=(card,mode,button)=>{
   const qs=questionsFor(card);
   if(!dialog.open)returnFocus=button;
   const tabs=document.createElement("nav");tabs.className="topic-core-modal-modes";
   tabs.setAttribute("aria-label","Chọn bài giảng hoặc luyện tập trong chặng");
   for(const choice of ["teach","practice"]){
    const tab=document.createElement("button");tab.type="button";tab.className="practice-btn topic-core-modal-mode";
    tab.dataset.mode=choice;tab.textContent=choice==="teach"?"📘 Bài giảng":"✏️ Luyện tập";
    tab.setAttribute("aria-pressed",String(choice===mode));
    tab.addEventListener("click",()=>{if(choice!==dialog.dataset.mode)openCard(card,choice,null)});
    tabs.appendChild(tab);
   }
   title.textContent=(mode==="teach"?"Bài giảng":"Luyện tập")+" · "+card.title;
   dialog.dataset.mode=mode;dialog.dataset.cardId=card.id;
   if(mode==="practice"){
    if(!sessions.has(card.id)){
     const panel=document.createElement("div");mountMicro(panel,card,qs,graph);sessions.set(card.id,panel);
    }
    body.replaceChildren(tabs,sessions.get(card.id));
   }else{
    const panel=teachingPanel(card,qs);
    const next=document.createElement("button");next.type="button";next.className="practice-btn practice-btn-primary topic-core-to-practice";
    next.textContent="✏️ Bắt đầu luyện tập →";next.addEventListener("click",()=>openCard(card,"practice",null));
    panel.appendChild(next);body.replaceChildren(tabs,panel);typeset(panel);
   }
   body.scrollTop=0;
   if(!dialog.open)dialog.showModal();
   close.focus();
  };
  data.cards.forEach((card,i)=>{
   const el=document.createElement("article");el.className="topic-core-card";el.dataset.cardId=card.id;
   const gradeBand=cardGradeBand(card);if(gradeBand){el.dataset.gradeStart=String(gradeBand.start);el.dataset.gradeEnd=String(gradeBand.end);el.dataset.gradeCount=String(gradeBand.count);el.dataset.gradeBand=gradeBand.grades.join("-");el.setAttribute("aria-label","Core "+gradeBand.grades.map(g=>"lớp "+g).join(" đến ")+": "+card.title)}
   const prereqNames=(card.prerequisites||[]).map(skillLabel);
   const pre=prereqNames.length?
    '<div class="topic-core-prereq topic-core-prereq-full">Nền tảng: '+prereqNames.join(" · ")+'</div><div class="topic-core-prereq topic-core-prereq-compact">Nền tảng: '+prereqNames.length+' kỹ năng</div>':
    '<div class="topic-core-prereq topic-core-prereq-empty">Nền tảng: —</div>';
   const qs=questionsFor(card),coverage=coverageFor(card,qs);
   el.dataset.coveredSkills=String(coverage.covered.length);el.dataset.totalSkills=String(coverage.declared.length);
   const warning=coverage.missing.length?'<div class="topic-core-card-gap">Chưa có câu riêng: '+coverage.missing.map(skillLabel).join(", ")+'</div>':"";
   el.innerHTML='<div class="topic-core-card-main"><div class="topic-core-card-header"><div class="topic-core-card-top"><span class="topic-core-card-number">'+(i+1)+'</span><span class="topic-core-card-lesson">'+(card.kntt_lessons||[]).join(" · ")+'</span></div><h3>'+card.title+'</h3></div><div class="topic-core-card-content">'+pre+'<div class="topic-core-card-meta"><span>'+card.skills.length+' kỹ năng</span><span>'+qs.length+' câu thực hành</span><span class="topic-core-card-coverage">'+coverage.covered.length+'/'+coverage.declared.length+' có câu riêng</span></div>'+warning+'<div class="topic-core-card-actions"><button type="button" class="practice-btn topic-core-teach-start">📘 Bài giảng</button><button type="button" class="practice-btn topic-micro-start topic-core-practice-start">✏️ Luyện tập</button></div></div></div>';
   if(card.teaching_copy)el.dataset.hasTeachingCopy="1";
   el.querySelector(".topic-core-teach-start").addEventListener("click",event=>openCard(card,"teach",event.currentTarget));
   el.querySelector(".topic-micro-start").addEventListener("click",event=>openCard(card,"practice",event.currentTarget));
   grid.appendChild(el);
  });
  host.appendChild(grid);
  if((data.extensions||[]).length){
   const extensions=data.extensions||[];
   const hasReviewedSupport=extensions.some(x=>x.layer==="KNTT-Core"||x.layer==="Core-Support");
   const ext=document.createElement("details");ext.className="topic-extension-zone";
   const summary=hasReviewedSupport
    ? '🧩 Ứng dụng / Củng cố / Mở rộng <span>không tự động thay đổi Core Readiness</span>'
    : '🚀 Entrance10 / Challenge <span>không tính vào hoàn thành KNTT Core</span>';
   ext.innerHTML='<summary>'+summary+'</summary><div class="topic-extension-list">'+extensions.map(x=>`<span class="topic-chip">${x.learner_label||x.layer}: ${x.title}</span>`).join("")+"</div>";
   host.appendChild(ext);
  }
  const staticJourneyAnchor=document.getElementById("core-journey");
  if(staticJourneyAnchor)staticJourneyAnchor.remove();
  hero.after(host);
  host.dataset.coreReady="1";
  if(location.hash==="#core-journey")requestAnimationFrame(()=>host.scrollIntoView({block:"start",behavior:"auto"}));
 }catch(_){}
};

const activeConfig=()=>{
 const marker="/kien-thuc/";const pathname=window.location.pathname;if(!pathname.includes(marker))return null;
 const after=pathname.split(marker)[1]||"";const slug=after.split("/")[0];
 return TOPICS[slug]?{slug,...TOPICS[slug]}:null;
};

const mountCoreGateway=(hero,config)=>{
 const oldAnchor=document.getElementById("core-journey");
 if(oldAnchor)oldAnchor.removeAttribute("id"); // Avoid duplicate ID from legacy lesson anchors.
 const section=document.createElement("section");section.id="core-journey";section.className="topic-core-gateway";
 section.setAttribute("aria-label","Lối vào học Core theo chặng");
 const heading=document.createElement("strong");heading.textContent="🧩 "+(window.RoadmapTopicRoutes?.get(config.slug)?.stepLabel||"Core theo chặng")+" · "+config.number;
 const description=document.createElement("p");
 description.textContent="Phần học theo chặng đã chuyển sang trang riêng. Bài giảng, ví dụ và thực hành dùng cùng một luồng học; kết quả cũ vẫn được giữ nguyên.";
 const link=document.createElement("a");link.className="md-button md-button--primary";link.href="core/";link.textContent="Mở trang "+(window.RoadmapTopicRoutes?.get(config.slug)?.stepLabel||"Core theo chặng")+" →";
 section.append(heading,description,link);hero.after(section);
};

const init=()=>{
 const config=activeConfig();if(!config)return;
 const topicRoot="/kien-thuc/"+config.slug+"/";
 const standaloneRoute=window.RoadmapTopicRoutes?.get(config.slug)||null;
 const hasStandaloneCore=Boolean(standaloneRoute);
 const coreRoute=hasStandaloneCore&&(location.pathname.endsWith(topicRoot+"core/")||location.pathname.endsWith(topicRoot+"core/index.html"));
 if(coreRoute){
  const entry=document.querySelector("[data-topic-core-entry]");
  if(entry&&!entry.dataset.coreMounted){entry.dataset.coreMounted="1";renderCoreCards(entry,config)}
  return;
 }
 if(!location.pathname.endsWith(topicRoot) && !location.pathname.endsWith(topicRoot+"index.html"))return;
 const content=document.querySelector(".md-content__inner");if(!content)return;const h1=content.querySelector("h1");if(!h1)return;
 const pct=progress(config.progressSkills);
 const observed=config.progressSkills.some(s=>{const rec=loadStats().tags?.[s];return Boolean(rec?.attempted);});
 const hero=document.createElement("section");hero.className="topic-workspace-hero";
 const primaryLearningHref=config.bridgeOnly?"#core":(hasStandaloneCore?"core/":"#core-journey");
 const primaryLearningLabel=config.bridgeOnly?"📖 Kiến thức chuyển tiếp":"🧩 Các chặng học";
 hero.innerHTML=`<div class="topic-workspace-kicker">Roadmap 25 · Chuyên đề ${config.number}</div><h1>${h1.textContent.trim()}</h1><div>${config.description}</div><div class="topic-workspace-meta">${config.chips.map(x=>`<span class="topic-chip">${x}</span>`).join("")}</div><div class="topic-progress-wrap"><span>${observed?"Tỉ lệ đúng đã ghi nhận (kể cả lượt có trợ giúp)":"Chưa có kết quả luyện tập được ghi nhận"}</span><strong>${observed?pct+"%":"—"}</strong><progress max="100" value="${pct}" aria-label="Mức độ ghi nhận theo kỹ năng" ></progress></div><div class="topic-workspace-actions"><a href="${primaryLearningHref}">${primaryLearningLabel}</a><a href="bai-tap/">🎯 Luyện tập tương tác</a><a href="#map">🗺️ Bản đồ</a><a href="#errors">⚠️ Lỗi thường gặp</a></div>`;
 h1.replaceWith(hero);
 const isCapstone=config.number==="25";
 let nav=null;
 if(!isCapstone){
  nav=document.createElement("nav");nav.className="topic-workspace-nav";
  nav.innerHTML='<div class="topic-workspace-nav-title">Đi nhanh trong chuyên đề</div><div class="topic-workspace-nav-list">'+sections.map(([id,label])=>`<a href="#${id}">${label}</a>`).join("")+"</div>";
  hero.after(nav);
 }
 if(config.bridgeOnly){
   // CĐ22 is an optional THPT bridge. Keep the shared reading/navigation shell,
   // but do not invent a KNTT-Core journey for content that is intentionally non-Core.
 }else if(hasStandaloneCore)mountCoreGateway(hero,config);
 else renderCoreCards(hero,config);
 sections.forEach(([id,,label],i)=>{const h=findHeading(label,i+1);if(h)wrapSection(h,id,i)});

 const revealAnchor=id=>{
  if(!id)return null;
  const target=document.getElementById(id);
  if(!target)return null;
  const card=target.matches?.("details.topic-learning-card")?target:target.closest?.("details.topic-learning-card");
  if(card)card.open=true;
  return target;
 };
 const expandTarget=event=>{
  const a=event.target.closest?.('a[href^="#"]');
  if(!a)return;
  revealAnchor(decodeURIComponent(a.getAttribute("href").slice(1)));
 };
 if(!document.documentElement.dataset.topicAnchorReveal){
  document.documentElement.dataset.topicAnchorReveal="1";
  document.addEventListener("click",expandTarget);
  window.addEventListener("hashchange",()=>revealAnchor(decodeURIComponent(location.hash.slice(1))));
 }
 requestAnimationFrame(()=>revealAnchor(decodeURIComponent(location.hash.slice(1))));

 const enhanceSecondaryToc=()=>{
  const root=document.querySelector(".md-sidebar--secondary nav.md-nav--secondary > ul.md-nav__list");
  if(!root||root.dataset.topicCollapsible==="1")return;
  root.dataset.topicCollapsible="1";
  const enhanceList=list=>{
   [...list.children].forEach(li=>{
    if(!(li instanceof HTMLElement))return;
    const nestedNav=[...li.children].find(el=>el.tagName==="NAV"&&el.classList.contains("md-nav"));
    const link=[...li.children].find(el=>el.tagName==="A"&&el.classList.contains("md-nav__link"));
    if(nestedNav&&link){
     nestedNav.classList.add("topic-toc-children");nestedNav.hidden=true;
     li.classList.add("topic-toc-collapsible");
     const toggle=document.createElement("button");toggle.type="button";toggle.className="topic-toc-toggle";
     toggle.textContent="+";toggle.setAttribute("aria-expanded","false");
     const label=normalize(link.textContent)||"mục con";
     toggle.setAttribute("aria-label","Mở các mục con của "+label);
     toggle.addEventListener("click",event=>{
      event.preventDefault();event.stopPropagation();
      const open=nestedNav.hidden;
      nestedNav.hidden=!open;toggle.textContent=open?"−":"+";
      toggle.setAttribute("aria-expanded",open?"true":"false");
      toggle.setAttribute("aria-label",(open?"Đóng":"Mở")+" các mục con của "+label);
     });
     link.insertAdjacentElement("afterend",toggle);
     const childList=nestedNav.querySelector(":scope > ul.md-nav__list");
     if(childList)enhanceList(childList);
    }
   });
  };
  enhanceList(root);
 };
 enhanceSecondaryToc();

 if(nav){
  const links=[...nav.querySelectorAll("a")];nav.addEventListener("click",expandTarget);
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-25% 0px -65% 0px"});
  sections.forEach(([id])=>{const el=document.getElementById(id);if(el)obs.observe(el)});
 }
};

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();