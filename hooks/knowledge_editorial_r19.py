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
# Curated exact-skill mapping; every deep link is verified against its real Practice manifest.
METHOD_FOCUS = {}
for _row in """CT02|thu-tu-phep-tinh,thu-tu-phep-tinh,dau-hieu-chia-het,ucln,rut-gon-phan-so,phep-tinh-phan-so,phan-tram,thu-tu-phep-tinh,gia-tri-tuyet-doi,lam-tron-so
CT03|ti-le-thuc,tim-x-ti-le-thuc,chia-theo-ti-le,ti-le-thuan,ti-le-nghich,ti-so-phan-tram,ti-le-ban-do,phan-biet-thuan-nghich,mo-hinh-ti-le,mo-hinh-ti-le
CT05|binh-phuong-tong,binh-phuong-hoan-chinh,hieu-hai-binh-phuong,tong-hai-lap-phuong,tinh-nhanh-hdt,rut-gon-hdt,chung-minh-hdt,giai-phuong-trinh-hdt
CT06|nhan-tu-chung,doi-dau-nhan-tu-chung,hieu-hai-binh-phuong,binh-phuong-hoan-chinh,nhom-hang-tu,phoi-hop-phuong-phap,phoi-hop-phuong-phap,ung-dung-phan-tich,ung-dung-phan-tich,giai-pt-bang-nhan-tu
CT07|dieu-kien-xac-dinh,rut-gon-phan-thuc,doi-dau-phan-thuc,quy-dong-mau-thuc,cong-tru-phan-thuc,nhan-phan-thuc,chia-phan-thuc,bieu-thuc-nhieu-phep-tinh,tinh-gia-tri-phan-thuc,tim-gia-tri-nguyen
CT09|kiem-tra-nghiem-he,giai-he-the,giai-he-cong,bien-doi-truoc-giai,bien-doi-truoc-giai,tham-so-he,tham-so-he,lap-he-bai-toan
CT11|dkxd-can,can-dong-dang,can-dong-dang,nhan-chia-can,truc-can-mau-don,truc-can-lien-hop,can-dong-dang,can-binh-phuong,tim-x-can,tim-x-can
CT12|giai-pt-bac-hai,nham-nghiem,tham-so-so-nghiem,tong-tich-nghiem,bieu-thuc-doi-xung,bieu-thuc-doi-xung,dau-nghiem,lap-pt-tu-nghiem,lap-pt-tu-nghiem,lien-he-do-thi
CT13|goc-phu-bu,goc-doi-dinh,tia-phan-giac,tia-phan-giac,goc-so-le-trong,dau-hieu-song-song,duong-vuong-goc,goc-dong-vi,lap-luan-chung-minh-ngan,lap-luan-chung-minh-ngan
CT14|tong-goc-tam-giac,goc-ngoai,bat-dang-thuc-tam-giac,bat-dang-thuc-tam-giac,so-sanh-canh-goc,tam-giac-can,pythagore,bang-nhau-ccc,bang-nhau-cgc,nhan-biet-trung-truc
CT15|phan-biet-bon-tam,ti-so-trong-tam,tam-noi-tiep,tam-ngoai-tiep,vi-tri-truc-tam,dong-quy-bon-duong-dac-biet
CT16|tong-goc-tu-giac,hbh-dau-hieu,hcn-dau-hieu,hthoi-dau-hieu,hvuong-dau-hieu,duong-cheo-suy-luan,quan-he-bao-ham
CT17|thales-thuan,thales-dao,duong-trung-binh,dong-dang-gg,tinh-do-dai-dong-dang,he-thuc-tich,ket-hop-song-song-dong-dang
CT18|pythagore,he-thuc-duong-cao,tim-canh-luong-giac,tim-goc-luong-giac,goc-nang-ha,ket-hop-he-thuc
CT19|goc-noi-tiep,chung-minh-tiep-tuyen,hai-tiep-tuyen,tu-giac-noi-tiep,hai-day-cat-nhau,tiep-tuyen-cat-tuyen,do-dai-cung,goc-cung
CT20|hai-goc-vuong-noi-tiep,song-song-dong-dang,tiep-tuyen-chung-minh,dong-dang-he-thuc-tich,chuoi-suy-luan,nhan-dang-cong-cu,do-luong-thuc-te,bai-toan-tong-hop
CT21|thu-thap-du-lieu,bang-tan-so,tan-suat,doc-bieu-do-cot,doc-bieu-do-doan-thang,chuyen-bang-bieu-do,doc-bieu-do-cot-kep,du-lieu-ghep-nhom,nhan-xet-du-lieu
CT22|trung-binh-tho,trung-binh-tan-so,trung-vi,mot,khoang-bien-thien,so-sanh-hai-bo,chon-dai-luong
CT23|khong-gian-mau,xac-suat-co-dien,xac-suat-thuc-nghiem,bien-co-chac-chan-khong-the,dong-xu-nhieu-lan,bien-co-doi,so-do-cay,kiem-tra-xac-suat
CT24|chuyen-dong,nang-suat,phan-tram,lap-phuong-trinh,hinh-hoc-do-luong,thong-ke-thuc-te,xac-suat-thuc-te,kiem-tra-ket-luan
CT25|nhan-dien-chuyen-de,nhan-dien-chuyen-de,on-thi-bieu-thuc-can,on-thi-hinh-hoc,on-thi-thong-ke,on-thi-mo-hinh-hoa,quan-ly-thoi-gian,checklist-chua-de""".strip().splitlines():
    _topic,_skills=_row.split("|")
    METHOD_FOCUS[_topic]={i:s for i,s in enumerate(_skills.split(","),1)}
MANIFEST_VERSION={"CT02":"v4","CT03":"v4","CT04":"v6","CT21":"v2"}
_skill_bank={}
def get_focus(topic,num):
    name=METHOD_FOCUS.get(topic,{}).get(num)
    if not name:return None
    if topic not in _skill_bank:
        slug=next(s for s in PLANS if s.startswith(topic[2:]+"-"))
        v=MANIFEST_VERSION.get(topic,"v1")
        manifest=Path("docs/assets/data/practice")/(slug+"-"+v+".manifest.json")
        _skill_bank[topic]=json.loads(manifest.read_text(encoding="utf8"))["skill_labels"]
    if name not in _skill_bank[topic]:raise ValueError("Unapproved method skill focus "+topic+" "+name)
    return name

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
                focus=get_focus(topic,num_type)
                uri="bai-tap/?mode=remediation&amp;focus="+focus if focus else "bai-tap/"
                links=['<a href="'+uri+'">Luyện ngay →</a>']
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
    # CT04: the source supplies a concise eleven-row method table, not full
    # worked H3 methods. Preserve honest table structure; add an exact approved
    # skill link to each existing row, not fabricated standalone method lessons.
    if slug.startswith("04-"):
        start=re.search(r"(?m)^##\s+[^\n]*\b5\.\s+[^\n]+$",raw)
        following=re.search(r"(?m)^##\s+[^\n]*\b6\.\s+[^\n]+$",raw[start.end():]) if start else None
        if not start or not following:raise ValueError("R19 CT04 types table missing")
        end=start.end()+following.start()
        middle=raw[start.start():end].splitlines()
        skill_order=["nhan-biet-don-thuc","he-so-bac","thu-gon-da-thuc",
          "thu-gon-da-thuc","cong-tru-da-thuc","nhan-bieu-thuc",
          "nhan-bieu-thuc","tinh-gia-tri-bieu-thuc","dieu-kien-xac-dinh",
          "bien-doi-nhieu-buoc","nhan-bieu-thuc"]
        # Only the FIRST, contiguous 13-line table is the canonical
        # 11-method source table. Subsequent native explanatory tables in §5
        # must remain intact and must never receive invented skill links.
        first=next((i for i,line in enumerate(middle) if line.startswith("|")),None)
        if first is None:raise ValueError("R19 CT04 method table absent")
        stop=first
        while stop<len(middle) and middle[stop].startswith("|"):
            stop+=1
        if stop-first!=13:
            raise ValueError("R19 CT04 11-type table count changed")
        modified=[]
        for i,line in enumerate(middle):
            if first<=i<stop:
                row=i-first
                if row==0:line=line.rstrip()+" Luyện tập |"
                elif row==1:line=line.rstrip()+" --- |"
                else:
                    skill=skill_order[row-2]
                    line=line.rstrip()+f" [Luyện ngay](bai-tap/?mode=remediation&focus={skill}) |"
            modified.append(line)
        # Keep the source-backed 11-row table but put semantically adjacent
        # method families into genuine independent §5 tabs. No invented lessons.
        headers=modified[first:first+2]
        data=modified[first+2:stop]
        families=[
            ("Nhận biết và cấu trúc",data[0:2]),
            ("Thu gọn, cộng trừ và nhân",data[2:7]),
            ("Giá trị và điều kiện",data[7:9]),
            ("Vận dụng nhiều bước",data[9:11]),
        ]
        if sum(len(rows) for _,rows in families)!=11:
            raise ValueError("R30 CT04 method family coverage")
        tabs=[]
        for title,rows in families:
            tabs += ['=== "'+title+'"',""] + [
                "    "+line for line in headers+rows
            ] + [""]
        modified=modified[:first]+tabs+modified[stop:]
        raw=raw[:start.start()]+"\n".join(modified)+"\n"+raw[end:]
    # R30: Source previews CT15+ place useful geometry illustrations under
    # an unnumbered H2 immediately after §1. Make it a nested subsection of
    # §1 so the figures collapse with the Map instead of floating outside.
    map_head = re.search(r"(?m)^##[^\n]*\b1\.\s+[^\n]*$",raw)
    goals_head = re.search(r"(?m)^##[^\n]*\b2\.\s+[^\n]*$",raw)
    if map_head and goals_head and goals_head.start()>map_head.end():
        map_text=raw[map_head.end():goals_head.start()]
        visual_header=re.search(r"(?m)^##\s+Minh họa trực quan\s*$",map_text)
        if visual_header:
            pre=map_text[:visual_header.start()]
            figures=map_text[visual_header.end():]
            # Keep original captions and all SVGs, only repair heading nesting.
            figures=re.sub(r"(?m)^###\s+(?=\d+\.)","#### ",figures)
            map_text=pre+"### Minh họa trực quan"+figures
            raw=raw[:map_head.end()]+map_text+raw[goals_head.start():]
    # R30: CT08 single authored example has literal parenthesized TeX and
    # square brackets, not math delimiters. Correct the DISPLAY ONLY after
    # matching that exact sentence/inequality, preserving all quantities.
    if slug.startswith("08-"):
        old='Ví dụ, một thùng chịu tối đa (18) kg, trong thùng đã có (6) kg. Mỗi hộp hàng thêm vào nặng (1{,}5) kg. Gọi (x) là số hộp thêm vào, với (x\\in\\mathbb N). Khi đó:\n\n[\n6+1{,}5x\\le18\n]\n\nsuy ra (x\\le8).'
        new=r'Ví dụ, một thùng chịu tối đa \(18\) kg, trong thùng đã có \(6\) kg. Mỗi hộp hàng thêm vào nặng \(1{,}5\) kg. Gọi \(x\) là số hộp thêm vào, với \(x\in\mathbb{N}\). Khi đó:'+'\n\n'+r'$$6+1{,}5x\le18$$'+'\n\n'+r'suy ra \(x\le8\).'
        if raw.count(old)!=1:raise ValueError("R30 CT08 TeX phrase changed, refuse blind rewrite")
        raw=raw.replace(old,new)
    if version=="tabs-r6":
        return raw
    # CT08 already has four authored level-tabs rather than method H3 headings.
    # Preserve this genuine source taxonomy and attach one grounded skill per level.
    if slug.startswith("08-"):
        skills=("pt-bac-nhat","bien-doi-pt-nhieu-buoc","lap-phuong-trinh","tham-so-co-ban")
        chunks=re.split(r'(?m)^(=== "Mức [1-4][^\n]*")$',raw)
        if len(chunks)!=9:raise ValueError("R19 CT08 authored level count changed")
        for i in range(1,8,2):
            skill=skills[(i-1)//2]
            chunks[i+1]+='\n\n    <div class="math-knowledge-method-actions"><a href="bai-tap/?mode=remediation&amp;focus='+skill+'">Luyện ngay →</a></div>\n'
        raw=''.join(chunks)
    # Include every candidate source subsection exactly once in its semantic tab.
    raw=section(raw,5,methods,"CT"+slug[:2],"method")
    raw=section(raw,3,kt,"CT"+slug[:2],"knowledge")
    return raw
