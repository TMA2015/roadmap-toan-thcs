"""R19 live Knowledge editorial view: source Markdown SHA intact; no learner writes."""
from pathlib import Path
import re
import json
PLANS = {}
for row in """02-so-va-phep-tinh|r9|Tập hợp số và giá trị tuyệt đối:2;Quy tắc tính và lũy thừa:5;Chia hết, số nguyên tố:7;ƯCLN, BCNN và phân số:10;Số hữu tỉ, phần trăm, căn:99|Tính toán và tính nhanh:2;Chia hết, ƯCLN và BCNN:4;Phân số và biểu thức:6;Phần trăm và tìm số:8;Giá trị tuyệt đối, ước lượng:99
03-ti-le-ti-le-thuc|r9|Tỉ số và tỉ lệ thức:3;Dãy tỉ số bằng nhau:5;Tỉ lệ thuận:7;Tỉ lệ nghịch:9;Bản đồ, phần trăm và phân biệt:99|Tỉ lệ thức, tìm số:2;Chia theo tỉ lệ:3;Thuận và nghịch:5;Phần trăm, bản đồ:7;Bảng số liệu và nhiều bước:99
04-bieu-thuc-dai-so|r10|Đơn thức và đa thức:3;Các phép biến đổi:4;Điều kiện và tính giá trị:99|
05-7-hang-dang-thuc|r3|Hai bình phương:2;Hiệu hai bình phương:3;Các hằng đẳng thức lập phương:7;Bảng 7 công thức:99|Khai triển:1;Nhận dạng bình phương:3;Phân tích hiệu và tổng lập phương:5;Tính nhanh và rút gọn:7;Chứng minh và suy luận:99
06-phan-tich-da-thuc|r9|Bản chất và chọn phương pháp:3;Nhân tử chung, hằng đẳng thức:5;Nhóm và tách hạng tử:8;Phối hợp phương pháp:99|Nhân tử chung, đổi dấu:2;Nhận dạng hằng đẳng thức:4;Nhóm hạng tử:5;Phối hợp nhiều phương pháp:7;Ứng dụng, ôn thi:99
07-phan-thuc-dai-so|r10|Khái niệm và điều kiện:2;Bằng nhau và tính chất:4;Quy tắc đổi dấu:99|Điều kiện và rút gọn:2;Quy đồng, đổi dấu và cộng trừ:5;Nhân và chia:7;Biểu thức nhiều bước:9;Giá trị nguyên:99
08-phuong-trinh-bat-phuong-trinh|r10|Phương trình bậc nhất, phương trình tích:2;Ẩn ở mẫu:3;Bất đẳng thức, bất phương trình:6;Ứng dụng và nhiều điều kiện:99|
09-he-phuong-trinh|r9|Phương trình, nghiệm và hệ:2;Ý nghĩa hình học và phép biến đổi:4;Phương pháp thế và cộng:6;Số nghiệm:99|Kiểm tra nghiệm:1;Phương pháp thế và cộng:3;Biến đổi, khử mẫu:5;Tham số và biện luận:7;Bài toán lập hệ:99
10-ham-so-do-thi|tabs-r6||
11-can-thuc|r10|Căn bậc hai và điều kiện:2;Giá trị tuyệt đối, phương trình căn:4;Khai phương tích và thương:7;Biến đổi thừa số và căn bậc ba:99|Điều kiện, rút gọn:2;Phép toán căn:4;Trục căn ở mẫu:6;Biểu thức, tính giá trị:8;Tìm x và tham số:99
12-phuong-trinh-bac-hai-viete|r11|Phương trình bậc hai:1;Biệt thức và số nghiệm:3;Công thức nghiệm, ví dụ:5;Công thức thu gọn:99|Nghiệm và nhẩm nghiệm:2;Số nghiệm và Viète:4;Biểu thức theo nghiệm:6;Dấu nghiệm và lập phương trình:9;Biến đổi nghiệm, đồ thị:99
13-goc-va-duong-thang|r11|Điểm, đường, tia và góc:2;Phân giác và góc đặc biệt:5;Vuông góc và song song:7;Tính chất và nhận biết:10;Định lí và chứng minh:99|Tính góc, phân giác:4;Góc với đường song song:5;Chứng minh song song, vuông góc:7;Chuỗi góc, tham số, tổng hợp:99
14-tam-giac|r3|Tam giác và phân loại:2;Tổng góc và góc ngoài:4;Quan hệ cạnh, góc và điều kiện:7;Tam giác đặc biệt, bằng nhau:99|Tính góc:2;Điều kiện tồn tại tam giác:4;So sánh và nhận dạng:6;Pythagore và bằng nhau:8;Chứng minh hình học:99
15-duong-dong-quy|r11|Trung tuyến và trọng tâm:1;Đường cao, trực tâm:2;Phân giác, tâm nội tiếp:3;Trung trực, tâm ngoại tiếp:4;Chọn tính chất và các định lí:99|Nhận dạng và trọng tâm:2;Tâm nội tiếp, ngoại tiếp:4;Trực tâm và bài tổng hợp:99
16-tu-giac|r11|Tứ giác và hình thang:3;Hình bình hành:4;Chữ nhật, thoi, vuông:7;Chọn tính chất:99|Tính góc và hình bình hành:2;Chứng minh hình đặc biệt:5;Đường chéo và tổng hợp:99
17-thales-dong-dang|r12|Thales thuận và đảo:2;Đường trung bình, phân giác:4;Đồng dạng và các trường hợp:6;Hệ quả và chọn công cụ:99|Thales và song song:2;Đường trung bình:3;Chứng minh, tính bằng đồng dạng:5;Hệ thức tích và tổng hợp:99
18-he-thuc-luong|r12|Pythagore:1;Hệ thức đường cao:4;Tỉ số lượng giác:7;Góc nâng, hạ và chọn công cụ:99|Pythagore và đường cao:2;Tỉ số lượng giác và tìm góc:4;Góc nâng hạ, tổng hợp:99
19-duong-tron|r12|Core đường tròn và góc:2;Dây, tiếp tuyến:5;Tứ giác nội tiếp và giao dây:8;Cát tuyến, cung và đo lường:99|Tính góc, tiếp tuyến:3;Tứ giác nội tiếp, giao dây:5;Cát tuyến, cung và tổng hợp:99
20-hinh-hoc-tong-hop|r12|Nền tảng và phương pháp:3;Cầu nối hình học:4;Nội tiếp và tiếp tuyến:6;Hệ thức và chuỗi suy luận:9;Đo lường, chọn chiến lược:99|Nội tiếp và đồng dạng:2;Tiếp tuyến, hệ thức tích:4;Song song, góc, đo lường:7;Bài hình nhiều ý:99
21-thong-ke|r3|Dữ liệu và tần số:3;Bảng tần số, tần suất:5;Biểu đồ cột, đoạn thẳng:7;Cột kép, quạt tròn, ghép nhóm:9;Chất lượng dữ liệu, chọn biểu diễn:99|Bảng dữ liệu, tần số:3;Biểu đồ cột, đoạn thẳng:5;Chuyển đổi, so sánh biểu đồ:7;Dữ liệu ghép nhóm, thực tế:99
22-dai-luong-dac-trung|r13|Trung bình và bảng tần số:2;Trung vị và mốt:4;Khoảng biến thiên và ngoại lai:6;Phương sai, độ lệch chuẩn (mở rộng):7;Chọn đại lượng:99|Tính trung bình:2;Trung vị và mốt:4;Phân tán và so sánh:6;Chọn đại lượng:99
23-xac-suat|r3|Phép thử, không gian mẫu, biến cố:3;Xác suất cổ điển, thực nghiệm:5;Biến cố đối, nhiều bước:7;Sơ đồ cây, chọn chiến lược:99|Không gian mẫu, biến cố:2;Thực nghiệm:3;Nhiều phép thử:5;Đếm đúng một, ít nhất một, thực tế:99
24-bai-toan-thuc-te|r13|Mô hình và giả định:2;Đọc đề và đặt ẩn:4;Chuyển động, năng suất:6;Phần trăm, lập phương trình:9;Hình, dữ liệu và kiểm tra:99|Chuyển động, năng suất:2;Phần trăm, quan hệ:4;Hình, dữ liệu, xác suất:7;Bài nhiều bước:99
25-tong-hop-on-thi-10|r13|Mạch kiến thức và lộ trình ôn:2;Ma trận ưu tiên, luyện đề:4;Phân loại và sửa lỗi:6;Chiến lược thời gian, tiến bộ:99|Rà soát, nhận dạng:2;Đại số, Hình học:4;Thống kê, thực tế:6;Luyện đề và chữa đề:99""".strip().splitlines():
    slug, version, kt, methods = row.split("|")
    def parse(txt):
        return [(a.rsplit(":",1)[0],int(a.rsplit(":",1)[1])) for a in txt.split(";") if a]
    PLANS[slug] = (version, parse(kt), parse(methods))
H3 = re.compile(r"(?m)^###\s+([^\n]+)$")
WRITTEN_LINKS = {
 "CT02":{4:"WX02-NUM-001",7:"WX02-NUM-002"},
 "CT03":{3:"WX03-RAT-001",5:"WX03-RAT-002"},
 "CT05":{2:"WX05-IDN-001",3:"WX05-IDN-002",7:"WX05-ENT-001",8:"WX05-ENT-002"},
 "CT06":{2:"WX06-FAC-001",6:"WX06-FAC-002"},
 "CT07":{1:"WX07-RAT-001",4:"WX07-RAT-002",10:"WX07-ENT-001"},
 "CT09":{3:"WX09-SYS-001",5:"WX09-SYS-009",8:"WX09-SYS-002"},
 "CT11":{1:"WX11-RAD-001",6:"WX11-RAD-002",7:"WX11-RAD-003"},
 "CT12":{1:"WX12-QUA-001",4:"WX12-QUA-002",7:"WX12-QUA-003"},
 "CT13":{5:"WX13-LIN-001",6:"WX13-LIN-002"},
 "CT14":{3:"WX14-TRI-003",5:"WX14-TRI-003",8:"WX14-TRI-002"},
 "CT15":{2:"WX15-CEN-001",3:"WX15-CEN-002"},
 "CT16":{2:"WX16-QUAD-001",3:"WX16-QUAD-001",5:"WX16-QUAD-002"},
 "CT17":{1:"WX17-SIM-001",4:"WX17-SIM-002"},
 "CT18":{1:"WX18-TRI-003",3:"WX18-TRI-001",5:"WX18-TRI-002"},
 "CT19":{1:"WX19-CIR-001",4:"WX19-CIR-002"},
 "CT20":{7:"WX20-GEO-004"},
 "CT21":{2:"WX21-STA-001",6:"WX21-STA-001",7:"WX21-STA-002",8:"WX21-STA-003"},
 "CT23":{2:"WX23-PRO-002",3:"WX23-PRO-001"},
 "CT24":{1:"WX24-MOD-001",2:"WX24-MOD-003",4:"WX24-MOD-002"}
}
BANK = None
def approved(id, topic):
    global BANK
    if BANK is None:
        BANK = {r["exercise_id"]:r for r in json.loads(Path("docs/assets/data/written-exercises/written-exercise-library-v1.json").read_text(encoding="utf8"))["exercises"]}
    e = BANK.get(id)
    if not e or e["topic_id"]!=topic or e.get("academic_review",{}).get("status")!="APPROVED":
        raise ValueError("R19: noncanonical Written mapping "+str((topic,id)))
    return True

def section(markdown, num, groups, topic, kind):
    start=re.search(r"(?m)^##\s+[^\n]*?\b"+str(num)+r"\.\s+[^\n]+$",markdown)
    following=re.search(r"(?m)^##\s+[^\n]*?\b"+str(num+1)+r"\.\s+[^\n]+$",markdown[start.end():]) if start else None
    if not start or not following: raise ValueError("R19 section missing: "+topic+" "+str(num))
    end=start.end()+following.start()
    content=markdown[start.start():end]
    hits=list(H3.finditer(content))
    if not hits or not groups:
        # CT04 table and CT08 existing level-tabs are real source layouts, do not invent headings.
        return markdown
    before=content[:hits[0].start()]
    parts=[content[h.start():hits[i+1].start() if i+1<len(hits) else len(content)] for i,h in enumerate(hits)]
    result=[before.rstrip(),""]
    index=0
    for label,last in groups:
        stop=min(last,len(parts))
        if stop<=index:continue
        units=[]
        for i in range(index,stop):
            chunk=parts[i].rstrip()
            name=hits[i].group(1)
            n=re.match(r"Dạng\s+(\d+)(?!\d)",name,re.I) if kind=="method" else None
            if n and "math-related-practice" not in chunk and "math-topic-links" not in chunk:
                num_type=int(n.group(1))
                links=['<a href="bai-tap/">Luyện ngay →</a>']
                written=WRITTEN_LINKS.get(topic,{}).get(num_type)
                if written:
                    approved(written,topic)
                    links.append(f'<a href="../../luyen-tap/tu-luan/?topic={topic}#{written.lower()}">Tự luận {written} →</a>')
                chunk+='\n\n<div class="math-knowledge-method-actions">'+" ".join(links)+"</div>"
            units.append(chunk)
        result.extend(['=== "'+label.replace('"','')+'"',''])
        for line in '\n\n'.join(units).split('\n'):
            result.append('    '+line if line else '')
        result.append("")
        index=stop
    if index != len(parts):
        raise ValueError("R19 orphan subsection "+topic+" "+kind)
    rendered='\n'.join(result).rstrip()+'\n\n'
    return markdown[:start.start()]+rendered+markdown[end:]

def transform(markdown, src_path):
    if not re.fullmatch(r"kien-thuc/\d\d-[^/]+/index\.md", src_path):return markdown
    slug=src_path.split("/")[1]
    if slug not in PLANS:return markdown
    version,kt,methods=PLANS[slug]
    filename="preview-tabs-r6.md" if version=="tabs-r6" else "preview-composition-"+version+".md"
    source=Path("docs")/"kien-thuc"/slug/filename
    raw=source.read_text(encoding="utf8")
    # Preview URLs are one directory deeper than canonical /kien-thuc/<slug>/ .
    raw=(raw.replace("../../../luyen-tap/","../../luyen-tap/")
            .replace("../../../assets/","../../assets/")
            .replace("../bai-tap/","bai-tap/")
            .replace("../tu-kiem-tra/","tu-kiem-tra/"))
    raw=re.sub(r"(?m)^> \*\*BẢN THỬ[^\n]*\n","",raw)
    # R16 candidate's last learner CTA is in an HTML block unsupported by
    # native Markdown. Unwrap only that exact block; preserve all Markdown links.
    raw=re.sub(r'(?s)<div class="topic-workspace-actions" markdown>\s*(.*?)\s*</div>',
               lambda m: "\n\n"+m.group(1).strip()+"\n",raw)
    if version=="tabs-r6":
        return raw
    # Include every candidate source subsection exactly once in its semantic tab.
    raw=section(raw,5,methods,"CT"+slug[:2],"method")
    raw=section(raw,3,kt,"CT"+slug[:2],"knowledge")
    return raw
