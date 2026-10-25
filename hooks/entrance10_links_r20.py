"""R20: verified Entrance10 and transfer-to-Grade10 links on the ONE canonical Knowledge page.

Do not alter reviewed academic Markdown or create any exercise. Source §6 rows are
annotated in a build-time view, only after exact Practice manifest / Written
library validation. Explicitly mark missing exact matches, never fake IDs.
"""
from __future__ import annotations

from functools import lru_cache
from html import escape
from pathlib import Path
import json
import re

# Each semicolon corresponds EXACTLY to the authored §6 row/H3/bullet, in source order.
# skill codes without prefix belong to this topic; CTxx:skill is an explicit cross-topic link.
# WXxx IDs must exist in the reviewed canonical Written library.
# "-" means NO verified representative at present; it is not a fake link.
_ROWS = r"""
CT02|h3|thu-tu-phep-tinh;phep-tinh-phan-so,phan-tram;gia-tri-tuyet-doi,can-bac-hai;dau-hieu-chia-het,ucln,WX02-NUM-001
CT03|h3|chuyen-dong-ti-le,nang-suat-ti-le;ti-le-thuan;CT17:thales-thuan;mo-hinh-ti-le,WX03-RAT-001
CT04|h3|bien-doi-nhieu-buoc,WX04-ALG-003;-;CT06:nhan-tu-chung
CT05|table|rut-gon-hdt;hieu-hai-binh-phuong,WX05-IDN-002;binh-phuong-hoan-chinh,WX05-IDN-001;tong-hai-lap-phuong,hieu-hai-lap-phuong;rut-gon-hdt;tinh-nhanh-hdt;chung-minh-hdt,WX05-ENT-001
CT06|table|nhan-tu-chung,WX06-FAC-001;hieu-hai-binh-phuong,tong-hieu-lap-phuong;nhom-hang-tu;phoi-hop-phuong-phap,WX06-FAC-002;ung-dung-phan-tich;giai-pt-bang-nhan-tu;-
CT07|table|dieu-kien-xac-dinh,WX07-RAT-001;phan-tich-tu-mau;rut-gon-phan-thuc,WX07-RAT-001;quy-dong-mau-thuc,cong-tru-phan-thuc,WX07-RAT-002;nhan-phan-thuc,chia-phan-thuc;tinh-gia-tri-phan-thuc;bieu-thuc-nhieu-phep-tinh;tim-gia-tri-nguyen,WX07-ENT-001;CT08:dkxd-phuong-trinh-mau
CT08|table|pt-bac-nhat,pt-tich,dkxd-phuong-trinh-mau;bpt-bac-nhat,WX08-EQI-002;lap-phuong-trinh;lap-bat-phuong-trinh;giao-tap-nghiem;tham-so-co-ban
CT09|h3|giai-he-the,giai-he-cong,WX09-SYS-001;lap-he-bai-toan,WX09-SYS-002;bien-doi-truoc-giai,WX09-SYS-007;tham-so-he,WX09-SYS-008;y-nghia-hinh-hoc
CT11|table|dkxd-can,WX11-RAD-001;can-dong-dang,WX11-RAD-003;can-dong-dang;truc-can-mau-don,truc-can-lien-hop,WX11-RAD-002;tim-x-can,WX11-RAD-004;so-sanh-can;-;-
CT12|table|giai-pt-bac-hai,WX12-QUA-001;tham-so-so-nghiem;bieu-thuc-doi-xung;tong-tich-nghiem;dau-nghiem,WX12-QUA-003;lap-pt-tu-nghiem,WX12-QUA-002;-;lien-he-do-thi
CT13|table|goc-phu-bu;goc-so-le-trong,WX13-LIN-001;duong-vuong-goc,WX13-LIN-002;tia-phan-giac;lap-luan-chung-minh-ngan,WX13-LIN-002;-
CT14|table|tong-goc-tam-giac;tam-giac-can,tam-giac-deu,WX14-TRI-001;bang-nhau-ccc,bang-nhau-cgc,WX14-TRI-002;bang-nhau-ccc,WX14-TRI-002;bang-nhau-cgc,WX14-TRI-002;pythagore;-;CT17:dong-dang-gg
CT15|list|ti-so-trong-tam,WX15-CEN-001;truc-tam;tam-noi-tiep,tam-ngoai-tiep,WX15-CEN-002;tam-ngoai-tiep;CT17:dong-dang-gg
CT16|list|hbh-dau-hieu,WX16-QUAD-001;hcn-dau-hieu,hthoi-dau-hieu,WX16-QUAD-002;duong-cheo-suy-luan;CT17:thales-thuan
CT17|list|dong-dang-gg,WX17-SIM-002;tinh-do-dai-dong-dang;he-thuc-tich;thales-dao,WX17-SIM-001;-
CT18|list|pythagore,WX18-TRI-003;he-thuc-duong-cao;tim-canh-luong-giac,tim-goc-luong-giac,WX18-TRI-001;goc-nang-ha,WX18-TRI-002;-
CT19|list|tu-giac-noi-tiep,WX19-CIR-002;chung-minh-tiep-tuyen;CT17:dong-dang-gg,WX19-CIR-005;hai-day-cat-nhau;goc-noi-tiep,do-dai-cung,WX19-CIR-001;CT20:bai-toan-tong-hop,WX19-CIR-005
CT20|list|hai-goc-vuong-noi-tiep;song-song-dong-dang;tiep-tuyen-chung-minh;dong-dang-he-thuc-tich;do-luong-thuc-te;bai-toan-tong-hop
CT21|list|doc-bieu-do-cot;tan-suat,WX21-STA-003;doc-bieu-do-cot-kep,WX21-STA-002;nhan-xet-du-lieu;CT22:trung-binh-tho
CT22|list|trung-binh-tho;trung-vi;mot;so-sanh-hai-bo;khoang-bien-thien;chon-dai-luong
CT23|list|khong-gian-mau,WX23-PRO-002;xac-suat-co-dien,WX23-PRO-002;xac-suat-thuc-nghiem,WX23-PRO-001;xac-suat-co-dien;so-do-cay;-;kiem-tra-xac-suat
CT24|list|-;lap-phuong-trinh,WX24-MOD-001;CT09:lap-he-bai-toan,WX24-MOD-002;hinh-hoc-do-luong;phan-tram;kiem-tra-ket-luan
CT25|list|on-thi-phuong-trinh,on-thi-he;on-thi-ham-so;on-thi-mo-hinh-hoa,WX24-MOD-001;on-thi-hinh-hoc;on-thi-thong-ke,on-thi-xac-suat
""".strip()

PLANS = {}
for row in _ROWS.splitlines():
    topic, kind, payload = row.split("|", 2)
    if topic in PLANS or kind not in ("table", "h3", "list"):
        raise ValueError("R20 invalid/duplicate entrance topic plan: " + topic)
    PLANS[topic] = (kind, [tuple(token.strip() for token in e.split(",")) for e in payload.split(";")])

VERSIONS = {"CT02": "v4", "CT03": "v4", "CT04": "v6", "CT21": "v2"}
_HEAD6 = re.compile(r"(?m)^##[ \t]+[^\n]*\b6\.[ \t]+[^\n]+$")
_HEAD7 = re.compile(r"(?m)^##[ \t]+[^\n]*\b7\.[ \t]+[^\n]+$")
_H3 = re.compile(r"(?m)^### [^\n]+$")
_BULLET = re.compile(r"(?m)^(\d+)\.[ \t]+([^\n]+)$")

@lru_cache(maxsize=None)
def _slug(topic):
    choices = [p.name for p in Path("docs/kien-thuc").glob(topic[2:] + "-*") if p.is_dir()]
    if len(choices) != 1:
        raise ValueError("R20 ambiguous/missing topic folder: " + topic)
    return choices[0]

@lru_cache(maxsize=None)
def _skill_labels(topic):
    name = _slug(topic) + "-" + VERSIONS.get(topic, "v1") + ".manifest.json"
    document = json.loads((Path("docs/assets/data/practice") / name).read_text(encoding="utf8"))
    return document["skill_labels"]

@lru_cache(maxsize=1)
def _written_bank():
    bank = json.loads(Path("docs/assets/data/written-exercises/written-exercise-library-v1.json").read_text(encoding="utf8"))
    return {e["exercise_id"]: e for e in bank["exercises"]}

def _render_actions(spec, home):
    if spec == ("-",):
        return '<span class="math-topic-exam-pending">Chưa có bài đúng dạng</span>'
    html = []
    skills = [token for token in spec if not token.startswith("WX")]
    for token in spec:
        if token.startswith("WX"):
            item = _written_bank().get(token)
            if not item or item.get("academic_review", {}).get("status") != "APPROVED":
                raise ValueError("R20 nonexistent/unapproved Written item: " + token)
            topic = item["topic_id"]
            label = "Tự luận · " + token
            href = "../../luyen-tap/tu-luan/?topic=" + topic + "#" + token.lower()
            html.append('<a class="math-topic-exam-link written" href="' + escape(href, quote=True)
                        + '" aria-label="' + escape(label, quote=True) + '">' + escape(label) + ' →</a>')
            continue
        topic, code = token.split(":", 1) if ":" in token else (home, token)
        label = _skill_labels(topic).get(code)
        if not label:
            raise ValueError("R20 noncanonical skill: " + topic + "/" + code)
        href = ("bai-tap/" if topic == home else "../" + _slug(topic) + "/bai-tap/")
        href += "?mode=remediation&focus=" + code
        display = "Luyện ngay" if len(skills) == 1 else "Luyện " + label
        html.append('<a class="math-topic-exam-link practice" href="' + escape(href, quote=True)
                    + '" title="' + escape(label, quote=True) + '">' + escape(display) + ' →</a>')
    if not html:
        raise ValueError("R20 empty practice row on " + home)
    return '<span class="math-knowledge-exam-actions">' + " ".join(html) + "</span>"

def _with_table(block, plan, topic):
    lines = block.splitlines(keepends=True)
    tables = [i for i, ln in enumerate(lines) if ln.lstrip().startswith("|")]
    if len(tables) != len(plan) + 2 or any(b != a + 1 for a, b in zip(tables, tables[1:])):
        raise ValueError("R20 §6 exam table changed: " + topic)
    for n, index in enumerate(tables):
        line = lines[index].rstrip("\n")
        if n == 0:
            lines[index] = line + " Thực hành đúng dạng |\n"
        elif n == 1:
            lines[index] = line + " :--- |\n"
        else:
            lines[index] = line + " " + _render_actions(plan[n - 2], topic) + " |\n"
    return "".join(lines)

def _with_h3(block, plan, topic):
    hits = list(_H3.finditer(block))
    if len(hits) != len(plan):
        raise ValueError("R20 §6 H3 exam count changed: " + topic + " " + str(len(hits)))
    for index in range(len(hits)-1, -1, -1):
        h = hits[index]
        block = block[:h.end()] + "\n\n" + _render_actions(plan[index], topic) + "\n" + block[h.end():]
    return block

def _with_bullets(block, plan, topic):
    """Build the CT10-style readable exam table, not an inline sentence chain.

    Keep each authored item exactly once and every verified link beside its
    matching row. The original overall priority remains below the table; do
    not fabricate distinct per-row priority evidence.
    """
    hits = list(_BULLET.finditer(block))
    if len(hits) != len(plan) or [int(x.group(1)) for x in hits] != list(range(1, len(plan) + 1)):
        raise ValueError("R30 §6 numbered exam list changed: " + topic)
    # This authored form is exactly one contiguous numbered list. Refuse to
    # restructure other formats accidentally.
    for i in range(len(hits) - 1):
        if block[hits[i].end():hits[i + 1].start()].strip():
            raise ValueError("R30 §6 unexpected material between list rows: " + topic)
    before, after = block[:hits[0].start()], block[hits[-1].end():]
    lines = [
        "| Dạng bài | Trọng tâm cần chắc | Mức ưu tiên | Mở bài |",
        "|:---|:---|:---:|:---|",
    ]
    for i, hit in enumerate(hits):
        label = hit.group(2).strip().replace("|", r"\|")
        actions = _render_actions(plan[i], topic)
        # These stars were defined for the *whole topic*, never per item.
        lines.append("| **Dạng " + str(i + 1) + "** | " + label +
                     " | Theo chuyên đề | " + actions + " |")
    return before.rstrip() + "\n\n" + "\n".join(lines) + "\n\n" + after.lstrip()


def augment_exam_links(markdown, topic):
    """Return only a §6 annotated view; reject changed/missing row counts."""
    if topic == "CT10":  # R4 already has six true, verified Entrance10 actions and four honest pending rows.
        return markdown
    if topic not in PLANS:
        raise ValueError("R20 missing exam/transfer plan: " + topic)
    a = _HEAD6.search(markdown)
    if not a:
        raise ValueError("R20 §6 heading missing: " + topic)
    b = _HEAD7.search(markdown, a.end())
    if not b:
        raise ValueError("R20 §7 boundary missing: " + topic)
    block = markdown[a.start():b.start()]
    kind, plan = PLANS[topic]
    transform = {"table": _with_table, "h3": _with_h3, "list": _with_bullets}[kind]
    changed = transform(block, plan, topic)
    if changed == block:
        raise ValueError("R20 §6 annotation had no effect: " + topic)
    return markdown[:a.start()] + changed + markdown[b.start():]
