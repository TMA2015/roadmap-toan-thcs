#!/usr/bin/env python3
from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Callable

ROOT = Path(__file__).resolve().parents[2]
PRACTICE = ROOT / "docs/assets/data/practice"
DIAGRAMS = ROOT / "docs/assets/diagrams/practice"


def mj(value: object) -> str:
    return f"\\({value}\\)"


def q(qid: str, question: str, options: list[str], skill: str, qtype: str,
      difficulty: str, explanation: str, topic: str, diagram: dict | None = None) -> dict:
    if len(options) != 4 or len(set(options)) != 4:
        raise ValueError(f"Options invalid for {qid}: {options}")
    item = {
        "id": qid,
        "question": question,
        "options": options,
        "answer": 0,
        "tags": {"topic": topic, "skill": [skill], "type": qtype},
        "difficulty": difficulty,
        "explanation": explanation,
    }
    if diagram:
        item["diagram"] = diagram
    return item


def svg_wrap(body: str, width: int = 440, height: int = 280) -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img">
<style>
  .g{{fill:none;stroke:#222;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}}
  .thin{{fill:none;stroke:#555;stroke-width:1.6;stroke-linecap:round}}
  .dash{{fill:none;stroke:#666;stroke-width:1.6;stroke-dasharray:6 5}}
  .pt{{fill:#222}}
  .txt{{font:16px system-ui,sans-serif;fill:#222}}
  .small{{font:14px system-ui,sans-serif;fill:#444}}
</style>{body}</svg>'''


def thales_svg(labels: dict[str, str] | None = None) -> str:
    labels = labels or {}
    return svg_wrap(f'''
<path class="g" d="M220 28 L55 242 L385 242 Z"/>
<path class="g" d="M145 125 L295 125"/>
<circle class="pt" cx="220" cy="28" r="4"/><circle class="pt" cx="55" cy="242" r="4"/><circle class="pt" cx="385" cy="242" r="4"/>
<circle class="pt" cx="145" cy="125" r="4"/><circle class="pt" cx="295" cy="125" r="4"/>
<text class="txt" x="226" y="25">A</text><text class="txt" x="35" y="260">B</text><text class="txt" x="392" y="260">C</text>
<text class="txt" x="125" y="121">D</text><text class="txt" x="304" y="121">E</text>
<text class="small" x="185" y="115">DE ∥ BC</text>
<text class="small" x="122" y="72">{labels.get('AD','')}</text><text class="small" x="78" y="185">{labels.get('DB','')}</text>
<text class="small" x="292" y="72">{labels.get('AE','')}</text><text class="small" x="335" y="185">{labels.get('EC','')}</text>''')


def similar_svg() -> str:
    return svg_wrap('''
<path class="g" d="M45 220 L150 45 L235 220 Z"/><path class="g" d="M275 220 L345 105 L405 220 Z"/>
<text class="txt" x="145" y="36">A</text><text class="txt" x="28" y="240">B</text><text class="txt" x="235" y="240">C</text>
<text class="txt" x="340" y="96">D</text><text class="txt" x="260" y="240">E</text><text class="txt" x="405" y="240">F</text>
<text class="small" x="151" y="266">hai tam giác có các yếu tố tương ứng</text>''')


def right_altitude_svg(labels: dict[str, str] | None = None) -> str:
    labels = labels or {}
    return svg_wrap(f'''
<path class="g" d="M80 225 L80 45 L385 225 Z"/><path class="g" d="M80 45 L176 225"/>
<path class="thin" d="M80 207 L98 207 L98 225"/><path class="thin" d="M159 225 L163 205 L183 209"/>
<text class="txt" x="60" y="38">A</text><text class="txt" x="55" y="247">B</text><text class="txt" x="390" y="247">C</text><text class="txt" x="174" y="247">H</text>
<text class="small" x="107" y="239">{labels.get('BH','')}</text><text class="small" x="275" y="239">{labels.get('CH','')}</text>
<text class="small" x="95" y="130">{labels.get('AB','')}</text><text class="small" x="258" y="126">{labels.get('AC','')}</text>''')


def trig_svg(angle: str = "α") -> str:
    return svg_wrap(f'''
<path class="g" d="M75 225 L75 55 L380 225 Z"/><path class="thin" d="M75 207 L93 207 L93 225"/>
<path class="thin" d="M337 225 A43 43 0 0 0 346 199"/>
<text class="txt" x="55" y="48">A</text><text class="txt" x="54" y="248">B</text><text class="txt" x="386" y="248">C</text>
<text class="txt" x="330" y="205">{angle}</text><text class="small" x="93" y="135">đối</text><text class="small" x="205" y="244">kề</text><text class="small" x="235" y="125">huyền</text>''')


def elevation_svg() -> str:
    return svg_wrap('''
<path class="g" d="M70 225 L370 225 L370 55"/><path class="g" d="M70 225 L370 55"/>
<path class="thin" d="M70 225 L115 225"/><path class="thin" d="M112 225 A42 42 0 0 0 105 202"/>
<text class="txt" x="102" y="207">α</text><text class="small" x="205" y="247">khoảng cách ngang d</text><text class="small" x="376" y="145">h</text>''')


def circle_angle_svg() -> str:
    return svg_wrap('''
<circle class="g" cx="220" cy="140" r="105"/><circle class="pt" cx="220" cy="140" r="4"/>
<circle class="pt" cx="120" cy="172" r="4"/><circle class="pt" cx="320" cy="172" r="4"/><circle class="pt" cx="220" cy="35" r="4"/>
<path class="g" d="M120 172 L220 140 L320 172 M120 172 L220 35 L320 172"/>
<text class="txt" x="208" y="158">O</text><text class="txt" x="104" y="190">A</text><text class="txt" x="326" y="190">B</text><text class="txt" x="224" y="28">C</text>''')


def tangent_svg() -> str:
    return svg_wrap('''
<circle class="g" cx="170" cy="140" r="88"/><circle class="pt" cx="170" cy="140" r="4"/>
<circle class="pt" cx="250" cy="102" r="4"/><circle class="pt" cx="390" cy="102" r="4"/>
<path class="g" d="M170 140 L250 102 L390 102"/><path class="thin" d="M241 106 L249 123 L266 115"/>
<text class="txt" x="151" y="160">O</text><text class="txt" x="238" y="93">T</text><text class="txt" x="397" y="107">P</text><text class="small" x="270" y="91">tiếp tuyến</text>''')


def chords_svg() -> str:
    return svg_wrap('''
<circle class="g" cx="220" cy="140" r="108"/>
<path class="g" d="M115 105 L330 190 M135 215 L310 65"/>
<circle class="pt" cx="218" cy="146" r="4"/>
<text class="txt" x="96" y="100">A</text><text class="txt" x="335" y="200">B</text><text class="txt" x="121" y="232">C</text><text class="txt" x="315" y="61">D</text><text class="txt" x="224" y="143">I</text>''')


def cyclic_svg() -> str:
    return svg_wrap('''
<circle class="g" cx="220" cy="140" r="108"/>
<path class="g" d="M135 65 L315 88 L300 205 L120 195 Z"/>
<text class="txt" x="120" y="60">A</text><text class="txt" x="321" y="88">B</text><text class="txt" x="306" y="220">C</text><text class="txt" x="102" y="207">D</text>''')


def parallelogram_svg() -> str:
    return svg_wrap('''
<path class="g" d="M105 65 L340 65 L285 220 L50 220 Z"/><path class="g" d="M105 65 L285 220 M340 65 L50 220"/>
<circle class="pt" cx="195" cy="142.5" r="4"/>
<text class="txt" x="92" y="57">A</text><text class="txt" x="345" y="60">B</text><text class="txt" x="289" y="238">C</text><text class="txt" x="30" y="238">D</text><text class="txt" x="202" y="140">O</text>''')


def median_svg() -> str:
    return svg_wrap('''
<path class="g" d="M220 35 L60 225 L380 225 Z"/><path class="g" d="M220 35 L220 225"/>
<circle class="pt" cx="220" cy="162" r="4"/><circle class="pt" cx="220" cy="225" r="4"/>
<text class="txt" x="226" y="31">A</text><text class="txt" x="44" y="244">B</text><text class="txt" x="385" y="244">C</text><text class="txt" x="228" y="166">G</text><text class="txt" x="228" y="244">M</text>
<text class="small" x="238" y="105">AG = 2GM</text>''')


def right_triangle_svg() -> str:
    return svg_wrap('''
<path class="g" d="M80 225 L80 55 L370 225 Z"/><path class="thin" d="M80 207 L98 207 L98 225"/>
<text class="txt" x="60" y="48">A</text><text class="txt" x="58" y="248">B</text><text class="txt" x="377" y="248">C</text>''')


def cuboid_svg() -> str:
    return svg_wrap('''
<path class="g" d="M100 95 L300 95 L360 55 L160 55 Z M100 95 L100 220 L300 220 L300 95 M300 220 L360 180 L360 55 M100 220 L160 180 L360 180 M160 55 L160 180"/>
<text class="small" x="185" y="242">dài</text><text class="small" x="318" y="212">rộng</text><text class="small" x="70" y="160">cao</text>''')


def diagram_obj(topic: int, qid: str, alt: str, caption: str = "Hình minh họa, không nhất thiết theo tỉ lệ.") -> dict:
    return {
        "src": f"../../diagrams/practice/{topic}/{qid}.svg",
        "alt": alt,
        "caption": caption,
    }


def write_diagram(topic: int, qid: str, content: str) -> None:
    path = DIAGRAMS / str(topic) / f"{qid}.svg"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def add(bank: list[dict], topic: int, prefix: str, skill: str, maker: Callable[[int, str], tuple[dict, str | None]], occurrence: int) -> None:
    qid = f"GEO{topic}V1_{len(bank) + 1:03d}"
    item, svg = maker(occurrence, qid)
    bank.append(item)
    if svg:
        write_diagram(topic, qid, svg)


def num_opts(correct: int | float, *wrong: int | float, unit: str = "") -> list[str]:
    vals = [correct, *wrong]
    out = []
    for value in vals:
        if isinstance(value, float) and value.is_integer():
            value = int(value)
        out.append(f"{value}{unit}")
    if len(set(out)) != 4:
        raise ValueError(f"Duplicate numeric options: {out}")
    return out


def generate17() -> tuple[dict, list[dict]]:
    topic = "17-thales-dong-dang"
    skills = [
        ("thales-thuan", "Thales thuận"), ("thales-dao", "Thales đảo"),
        ("ti-le-doan-thang", "Tỉ lệ các đoạn thẳng"), ("duong-trung-binh", "Đường trung bình tam giác"),
        ("nhan-biet-dong-dang", "Nhận biết tam giác đồng dạng"), ("dong-dang-gg", "Đồng dạng g-g"),
        ("dong-dang-cgc", "Đồng dạng c-g-c"), ("dong-dang-ccc", "Đồng dạng c-c-c"),
        ("thu-tu-tuong-ung", "Thứ tự đỉnh tương ứng"), ("tinh-do-dai-dong-dang", "Tính độ dài bằng đồng dạng"),
        ("ti-so-chu-vi", "Tỉ số chu vi"), ("ti-so-dien-tich", "Tỉ số diện tích"),
        ("he-thuc-tich", "Hệ thức tích từ đồng dạng"), ("ket-hop-song-song-dong-dang", "Kết hợp song song – đồng dạng"),
    ]
    makers: dict[str, Callable] = {}

    def thales(k, qid):
        r = 2 + k % 3; s = r + 2; t = 3 + k % 4
        ae = r * t; ac = s * t
        d = diagram_obj(17, qid, "Tam giác ABC có D trên AB, E trên AC và DE song song BC") if k % 2 == 0 else None
        item = q(qid, f"Trong tam giác ABC, D thuộc AB, E thuộc AC và DE ∥ BC. Biết AD={r}, AB={s}, AC={ac}. Tính AE.",
                 num_opts(ae, ae+t, ac-ae, t), "thales-thuan", "tinh-do-dai", "intermediate",
                 f"Theo Thales: AD/AB = AE/AC, nên AE={r}·{ac}/{s}={ae}.", topic, d)
        return item, thales_svg({"AD": str(r), "AE": "?"}) if d else None
    makers["thales-thuan"] = thales

    def thales_dao(k, qid):
        ad = 2 + k % 4; db = 3 + (k * 2) % 5; m = 2 + k % 3
        d = diagram_obj(17, qid, "Tam giác ABC có D trên AB và E trên AC") if k % 2 == 0 else None
        item = q(qid, f"Trong tam giác ABC, D∈AB, E∈AC. Biết AD={ad}, DB={db}, AE={ad*m}, EC={db*m}. Kết luận đúng là:",
                 ["DE ∥ BC", "DE ⟂ BC", "D và E là trung điểm", "Không đủ dữ kiện"], "thales-dao", "chung-minh-song-song", "intermediate",
                 f"AD/DB={ad}/{db}=AE/EC={ad*m}/{db*m}; theo Thales đảo, DE ∥ BC.", topic, d)
        return item, thales_svg({"AD": str(ad), "DB": str(db), "AE": str(ad*m), "EC": str(db*m)}) if d else None
    makers["thales-dao"] = thales_dao

    def ratio_seg(k, qid):
        ad = 2 + k % 5; db = 3 + k % 4; ae = ad * 2; ec = db * 2
        item = q(qid, f"DE ∥ BC trong tam giác ABC. Nếu AD={ad}, DB={db}, AE={ae}, thì EC bằng bao nhiêu?",
                 num_opts(ec, ec+2, db, ae+db), "ti-le-doan-thang", "ti-le-doan", "intermediate",
                 f"AD/DB=AE/EC ⇒ {ad}/{db}={ae}/EC ⇒ EC={ec}.", topic)
        return item, None
    makers["ti-le-doan-thang"] = ratio_seg

    def midline(k, qid):
        bc = 12 + 2*(k % 8); mn = bc // 2
        d = diagram_obj(17, qid, "Tam giác ABC có M và N là trung điểm của AB và AC") if k % 2 == 0 else None
        item = q(qid, f"M, N lần lượt là trung điểm của AB, AC trong tam giác ABC. Nếu BC={bc} cm thì MN bằng:",
                 num_opts(mn, bc, mn+2, max(1, mn-2), unit=" cm"), "duong-trung-binh", "tinh-duong-trung-binh", "basic",
                 f"Đường trung bình bằng một nửa cạnh thứ ba: MN=BC/2={mn} cm.", topic, d)
        return item, thales_svg() if d else None
    makers["duong-trung-binh"] = midline

    def recognize(k, qid):
        a = 35 + 5*(k % 7); b = 180-a-60
        return q(qid, f"Hai tam giác có một cặp góc bằng {a}° và một cặp góc bằng {b}°. Có thể kết luận đồng dạng theo trường hợp nào?",
                 ["g-g", "c-g-c", "c-c-c", "Chưa đủ điều kiện"], "nhan-biet-dong-dang", "nhan-biet", "basic",
                 "Có hai cặp góc tương ứng bằng nhau nên hai tam giác đồng dạng theo g-g.", topic), None
    makers["nhan-biet-dong-dang"] = recognize

    def gg(k, qid):
        a = 40 + 5*(k % 6); b = 70 - 5*(k % 4)
        d = diagram_obj(17, qid, "Hai tam giác minh họa các góc tương ứng") if k % 3 == 0 else None
        return q(qid, f"ΔABC và ΔDEF có ∠A=∠D={a}°, ∠B=∠E={b}°. Kết luận nào đúng?",
                 ["ΔABC ∼ ΔDEF theo g-g", "Hai tam giác bằng nhau", "Chỉ suy ra AB=DE", "Không thể kết luận"], "dong-dang-gg", "gg", "basic",
                 "Hai cặp góc tương ứng bằng nhau là đủ để kết luận đồng dạng theo g-g.", topic, d), similar_svg() if d else None
    makers["dong-dang-gg"] = gg

    def cgc(k, qid):
        r = 2 + k % 3; s = r + 2
        return q(qid, f"Biết AB/DE = AC/DF = {r}/{s} và ∠A = ∠D. Trường hợp đồng dạng phù hợp là:",
                 ["c-g-c", "g-g", "c-c-c", "Không đủ vì góc không xen giữa"], "dong-dang-cgc", "cgc", "basic",
                 "Hai cặp cạnh kề góc A,D tỉ lệ và góc xen giữa bằng nhau nên dùng c-g-c.", topic), None
    makers["dong-dang-cgc"] = cgc

    def ccc(k, qid):
        base = [(3,4,5),(4,5,6),(5,7,8),(6,8,10)][k % 4]; m = 2 + k % 3
        scaled = tuple(x*m for x in base)
        return q(qid, f"Hai tam giác có ba cạnh lần lượt {base[0]}, {base[1]}, {base[2]} và {scaled[0]}, {scaled[1]}, {scaled[2]}. Kết luận đúng:",
                 ["Hai tam giác đồng dạng theo c-c-c", "Hai tam giác bằng nhau", "Đồng dạng theo g-g", "Không đồng dạng"], "dong-dang-ccc", "ccc", "basic",
                 f"Ba cặp cạnh tương ứng cùng tỉ lệ 1/{m}, nên hai tam giác đồng dạng theo c-c-c.", topic), None
    makers["dong-dang-ccc"] = ccc

    def correspondence(k, qid):
        targets = [("AB", "DE"),("BC", "EF"),("AC", "DF"),("∠B", "∠E")]
        ask, ans = targets[k % len(targets)]
        distract = {"DE":["DF","EF","ED"],"EF":["DE","DF","FE"],"DF":["DE","EF","FD"],"∠E":["∠D","∠F","∠A"]}[ans]
        return q(qid, f"Cho ΔABC ∼ ΔDEF theo đúng thứ tự. Yếu tố tương ứng với {ask} là:",
                 [ans, *distract], "thu-tu-tuong-ung", "tuong-ung", "basic",
                 "Thứ tự A↔D, B↔E, C↔F quyết định các cạnh và góc tương ứng.", topic), None
    makers["thu-tu-tuong-ung"] = correspondence

    def length_sim(k, qid):
        small = 4 + 2*(k % 5); factor = 2 + k % 3; large = small*factor
        return q(qid, f"Hai tam giác đồng dạng có tỉ số cạnh lớn : cạnh nhỏ = {factor}:1. Cạnh tương ứng ở tam giác nhỏ dài {small}. Cạnh ở tam giác lớn dài:",
                 num_opts(large, small+factor, large-factor, small*factor+2), "tinh-do-dai-dong-dang", "tinh-canh", "intermediate",
                 f"Cạnh tương ứng được nhân với hệ số đồng dạng {factor}: {small}·{factor}={large}.", topic), None
    makers["tinh-do-dai-dong-dang"] = length_sim

    def perimeter(k, qid):
        r = 2 + k % 4; p = 18 + 3*(k % 5); big = p*r
        return q(qid, f"Hai tam giác đồng dạng có tỉ số đồng dạng lớn : nhỏ = {r}:1. Chu vi tam giác nhỏ là {p}. Chu vi tam giác lớn là:",
                 num_opts(big, p+r, p*r*r, big-r), "ti-so-chu-vi", "chu-vi", "intermediate",
                 f"Tỉ số chu vi bằng tỉ số đồng dạng, nên P_lớn={r}·{p}={big}.", topic), None
    makers["ti-so-chu-vi"] = perimeter

    def area(k, qid):
        r = 2 + k % 3; s = 10 + 2*(k % 6); big = s*r*r
        return q(qid, f"Hai tam giác đồng dạng có tỉ số cạnh lớn : nhỏ = {r}:1. Diện tích tam giác nhỏ là {s}. Diện tích tam giác lớn là:",
                 num_opts(big, s*r, s+r*r, big-r), "ti-so-dien-tich", "dien-tich", "advanced",
                 f"Tỉ số diện tích bằng bình phương tỉ số đồng dạng: {r}²={r*r}; S_lớn={s}·{r*r}={big}.", topic), None
    makers["ti-so-dien-tich"] = area

    def product(k, qid):
        return q(qid, "Từ tỉ lệ AB/DE = AC/DF của hai tam giác đồng dạng, hệ thức tích đúng là:",
                 ["AB·DF = AC·DE", "AB·AC = DE·DF", "AB·DE = AC·DF", "AB+DF = AC+DE"], "he-thuc-tich", "nhan-cheo", "intermediate",
                 "Nhân chéo AB/DE = AC/DF cho AB·DF = AC·DE.", topic), None
    makers["he-thuc-tich"] = product

    def combine(k, qid):
        d = diagram_obj(17, qid, "Tam giác ABC có DE song song với BC") if k % 2 == 0 else None
        return q(qid, "Trong tam giác ABC, D∈AB, E∈AC và DE ∥ BC. Cặp tam giác nào đồng dạng trực tiếp từ các góc tương ứng?",
                 ["ΔADE ∼ ΔABC", "ΔADB ∼ ΔAEC", "ΔABC ∼ ΔDEB", "ΔABD ∼ ΔACE"], "ket-hop-song-song-dong-dang", "song-song-dong-dang", "intermediate",
                 "DE ∥ BC tạo các góc tương ứng bằng nhau; ΔADE ∼ ΔABC theo g-g.", topic, d), thales_svg() if d else None
    makers["ket-hop-song-song-dong-dang"] = combine

    questions = []
    occ = {s:0 for s,_ in skills}
    for i in range(120):
        skill = skills[i % len(skills)][0]
        add(questions, 17, "GEO17V1", skill, makers[skill], occ[skill]); occ[skill] += 1

    labels = dict(skills)
    groups = [
        {"id":"thales","label":"A. Thales và đường trung bình","skills":["thales-thuan","thales-dao","ti-le-doan-thang","duong-trung-binh"]},
        {"id":"dong-dang","label":"B. Nhận biết tam giác đồng dạng","skills":["nhan-biet-dong-dang","dong-dang-gg","dong-dang-cgc","dong-dang-ccc","thu-tu-tuong-ung"]},
        {"id":"van-dung","label":"C. Vận dụng đồng dạng","skills":["tinh-do-dai-dong-dang","ti-so-chu-vi","ti-so-dien-tich","he-thuc-tich","ket-hop-song-song-dong-dang"]},
    ]
    return manifest(17, "SIM17-V1", "Định lý Thales và tam giác đồng dạng", labels, groups), questions


def generate18() -> tuple[dict, list[dict]]:
    topic = "18-he-thuc-luong"
    skills = [
        ("pythagore","Định lý Pythagore"),("pythagore-dao","Pythagore đảo"),("canh-huyen","Cạnh huyền – cạnh góc vuông"),
        ("he-thuc-canh","Hệ thức cạnh góc vuông"),("he-thuc-duong-cao","Hệ thức đường cao"),("dien-tich-duong-cao","Diện tích và đường cao"),
        ("doi-ke-huyen","Nhận biết cạnh đối – kề – huyền"),("sin","Tỉ số sin"),("cos","Tỉ số cos"),("tan","Tỉ số tan"),
        ("tim-canh-luong-giac","Tìm cạnh bằng lượng giác"),("tim-goc-luong-giac","Tìm góc bằng lượng giác"),
        ("goc-nang-ha","Góc nâng – góc hạ"),("chieu-cao-khoang-cach","Chiều cao – khoảng cách"),("ket-hop-he-thuc","Kết hợp hệ thức lượng"),
    ]
    triples = [(3,4,5),(5,12,13),(6,8,10),(8,15,17),(7,24,25),(9,12,15)]
    makers = {}

    def pyth(k,qid):
        a,b,c=triples[k%len(triples)]
        return q(qid,f"Tam giác vuông có hai cạnh góc vuông dài {a} và {b}. Cạnh huyền bằng:",num_opts(c,c+1,max(a,b),a+b),"pythagore","tinh-canh-huyen","basic",f"Theo Pythagore: c=√({a}²+{b}²)={c}.",topic),None
    makers["pythagore"]=pyth

    def pyth_inv(k,qid):
        a,b,c=triples[k%len(triples)]
        return q(qid,f"Tam giác có ba cạnh {a}, {b}, {c}. Kết luận đúng là:",["Tam giác vuông","Tam giác đều","Tam giác cân nhưng không vuông","Không thể là tam giác"],"pythagore-dao","nhan-biet-vuong","basic",f"{a}²+{b}²={c}² nên theo Pythagore đảo, tam giác vuông.",topic),None
    makers["pythagore-dao"]=pyth_inv

    def hyp(k,qid):
        d=diagram_obj(18,qid,"Tam giác ABC vuông tại A") if k%3==0 else None
        return q(qid,"Trong tam giác ABC vuông tại A, cạnh huyền là:",["BC","AB","AC","AH"],"canh-huyen","nhan-biet-canh","basic","Cạnh đối diện góc vuông A là BC, nên BC là cạnh huyền.",topic,d),right_triangle_svg() if d else None
    makers["canh-huyen"]=hyp

    def leg_rel(k,qid):
        m=1+k%4; bh=9*m; ch=16*m; bc=25*m; ab=15*m
        d=diagram_obj(18,qid,"Tam giác ABC vuông tại A, AH vuông góc BC") if k%2==0 else None
        return q(qid,f"ΔABC vuông tại A, AH⊥BC, BH={bh}, CH={ch}. Tính AB.",num_opts(ab,12*m,20*m,25*m),"he-thuc-canh","hinh-chieu","intermediate",f"BC={bc}; AB²=BH·BC={bh}·{bc}=({ab})², nên AB={ab}.",topic,d),right_altitude_svg({"BH":str(bh),"CH":str(ch)}) if d else None
    makers["he-thuc-canh"]=leg_rel

    def alt_rel(k,qid):
        m=1+k%4; bh=9*m; ch=16*m; ah=12*m
        d=diagram_obj(18,qid,"Tam giác vuông có đường cao AH xuống cạnh huyền BC") if k%2==0 else None
        return q(qid,f"ΔABC vuông tại A, AH⊥BC, BH={bh}, CH={ch}. Tính AH.",num_opts(ah,15*m,20*m,25*m),"he-thuc-duong-cao","duong-cao","intermediate",f"AH²=BH·CH={bh}·{ch}=({ah})² nên AH={ah}.",topic,d),right_altitude_svg({"BH":str(bh),"CH":str(ch)}) if d else None
    makers["he-thuc-duong-cao"]=alt_rel

    def area_alt(k,qid):
        m=1+k%4; ab=15*m; ac=20*m; bc=25*m; ah=12*m
        return q(qid,f"Tam giác ABC vuông tại A có AB={ab}, AC={ac}, BC={bc}. Đường cao AH xuống BC bằng:",num_opts(ah,15*m,16*m,20*m),"dien-tich-duong-cao","dien-tich","intermediate",f"½AB·AC=½AH·BC ⇒ AH={ab}·{ac}/{bc}={ah}.",topic),None
    makers["dien-tich-duong-cao"]=area_alt

    def sides(k,qid):
        angle="C" if k%2==0 else "B"
        d=diagram_obj(18,qid,f"Tam giác ABC vuông tại A, xét góc {angle}") if k%2==0 else None
        if angle=="C": opts=["Đối: AB; kề: AC; huyền: BC","Đối: AC; kề: AB; huyền: BC","Đối: BC; kề: AC; huyền: AB","Đối: AB; kề: BC; huyền: AC"]
        else: opts=["Đối: AC; kề: AB; huyền: BC","Đối: AB; kề: AC; huyền: BC","Đối: BC; kề: AB; huyền: AC","Đối: AC; kề: BC; huyền: AB"]
        return q(qid,f"Trong ΔABC vuông tại A, xét góc {angle}. Cách gọi cạnh đúng là:",opts,"doi-ke-huyen","nhan-biet-canh","basic","Cạnh huyền luôn là BC; cạnh đối và kề được xác định theo góc đang xét.",topic,d),trig_svg(angle) if d else None
    makers["doi-ke-huyen"]=sides

    def sinq(k,qid):
        d=diagram_obj(18,qid,"Tam giác ABC vuông tại A, xét góc B") if k%3==0 else None
        return q(qid,"Trong ΔABC vuông tại A với AB=3k, AC=4k, BC=5k. Giá trị sin B là:",["4/5","3/5","4/3","3/4"],"sin","tinh-sin","basic","Với góc B, cạnh đối là AC và cạnh huyền là BC nên sin B=AC/BC=4/5.",topic,d),trig_svg("B") if d else None
    makers["sin"]=sinq

    def cosq(k,qid):
        return q(qid,"Trong ΔABC vuông tại A với AB=3k, AC=4k, BC=5k. Giá trị cos B là:",["3/5","4/5","3/4","4/3"],"cos","tinh-cos","basic","Với góc B, cạnh kề là AB và cạnh huyền là BC nên cos B=3/5.",topic),None
    makers["cos"]=cosq

    def tanq(k,qid):
        return q(qid,"Trong ΔABC vuông tại A với AB=3k, AC=4k, BC=5k. Giá trị tan B là:",["4/3","3/4","4/5","3/5"],"tan","tinh-tan","basic","tan B=đối/kề=AC/AB=4/3.",topic),None
    makers["tan"]=tanq

    def find_side(k,qid):
        adjacent=8+4*(k%5); opposite=adjacent*3//4
        d=diagram_obj(18,qid,"Tam giác vuông với góc α, cạnh kề đã biết và cạnh đối cần tìm") if k%2==0 else None
        return q(qid,f"Trong tam giác vuông, tan α=3/4 và cạnh kề góc α dài {adjacent}. Cạnh đối dài:",num_opts(opposite,adjacent,opposite+4,max(1,opposite-4)),"tim-canh-luong-giac","tim-canh","intermediate",f"tan α=đối/kề=3/4 ⇒ đối={adjacent}·3/4={opposite}.",topic,d),trig_svg() if d else None
    makers["tim-canh-luong-giac"]=find_side

    def find_angle(k,qid):
        data=[("tan α = 1","45°"),("sin α = 1/2","30°"),("cos α = 1/2","60°")][k%3]
        opts=[data[1],"30°" if data[1]!="30°" else "45°","60°" if data[1]!="60°" else "45°","90°"]
        return q(qid,f"Với α là góc nhọn, biết {data[0]}. Góc α bằng:",opts,"tim-goc-luong-giac","tim-goc","intermediate","Dùng các giá trị lượng giác đặc biệt của 30°, 45°, 60°.",topic),None
    makers["tim-goc-luong-giac"]=find_angle

    def elev(k,qid):
        d=diagram_obj(18,qid,"Tia nhìn tạo góc nâng α với phương ngang") if k%2==0 else None
        return q(qid,"Góc tạo bởi tia nhìn hướng lên đỉnh vật và phương ngang qua mắt người quan sát được gọi là:",["Góc nâng","Góc hạ","Góc ở tâm","Góc nội tiếp"],"goc-nang-ha","nhan-biet-goc","basic","Tia nhìn hướng lên so với phương ngang tạo góc nâng.",topic,d),elevation_svg() if d else None
    makers["goc-nang-ha"]=elev

    def height(k,qid):
        dist=10*(2+k%5); eye=1.5+(k%3)*0.1; h=dist+eye
        d=diagram_obj(18,qid,"Bài toán chiều cao dùng góc nâng 45 độ và khoảng cách ngang") if k%2==0 else None
        return q(qid,f"Người quan sát đứng cách chân cột {dist} m, góc nâng tới đỉnh là 45°, mắt cao {eye:.1f} m. Chiều cao cột là:",[f"{h:.1f} m",f"{dist:.1f} m",f"{dist-eye:.1f} m",f"{h+1:.1f} m"],"chieu-cao-khoang-cach","bai-toan-thuc-te","advanced",f"Phần cao hơn mắt bằng {dist}·tan45°={dist} m; cộng chiều cao mắt được {h:.1f} m.",topic,d),elevation_svg() if d else None
    makers["chieu-cao-khoang-cach"]=height

    def combine(k,qid):
        m=1+k%4; ab=15*m; ac=20*m; bc=25*m; ah=12*m
        d=diagram_obj(18,qid,"Tam giác vuông ABC có đường cao AH xuống cạnh huyền") if k%2==0 else None
        return q(qid,f"ΔABC vuông tại A có AB={ab}, AC={ac}. Tính đồng thời BC và AH.",[f"BC={bc}, AH={ah}",f"BC={bc}, AH={15*m}",f"BC={20*m}, AH={ah}",f"BC={25*m+1}, AH={12*m}"],"ket-hop-he-thuc","tong-hop","advanced",f"Pythagore cho BC={bc}; từ diện tích AH=AB·AC/BC={ah}.",topic,d),right_altitude_svg({"AB":str(ab),"AC":str(ac)}) if d else None
    makers["ket-hop-he-thuc"]=combine

    questions=[]; occ={s:0 for s,_ in skills}
    for i in range(120):
        skill=skills[i%len(skills)][0]; add(questions,18,"GEO18V1",skill,makers[skill],occ[skill]); occ[skill]+=1
    labels=dict(skills)
    groups=[
        {"id":"vuong","label":"A. Tam giác vuông và Pythagore","skills":["pythagore","pythagore-dao","canh-huyen"]},
        {"id":"duong-cao","label":"B. Hệ thức đường cao xuống cạnh huyền","skills":["he-thuc-canh","he-thuc-duong-cao","dien-tich-duong-cao"]},
        {"id":"luong-giac","label":"C. Tỉ số lượng giác","skills":["doi-ke-huyen","sin","cos","tan","tim-canh-luong-giac","tim-goc-luong-giac"]},
        {"id":"thuc-te","label":"D. Ứng dụng và bài toán thực tế","skills":["goc-nang-ha","chieu-cao-khoang-cach","ket-hop-he-thuc"]},
    ]
    return manifest(18,"TRIG18-V1","Hệ thức lượng trong tam giác vuông",labels,groups),questions


def generate19() -> tuple[dict,list[dict]]:
    topic="19-duong-tron"
    skills=[
        ("goc-o-tam","Góc ở tâm"),("goc-noi-tiep","Góc nội tiếp"),("nua-duong-tron","Góc chắn nửa đường tròn"),
        ("day-va-tam","Dây và khoảng cách đến tâm"),("tiep-tuyen-ban-kinh","Tiếp tuyến và bán kính"),("hai-tiep-tuyen","Hai tiếp tuyến từ một điểm"),
        ("tu-giac-noi-tiep","Tứ giác nội tiếp"),("dau-hieu-noi-tiep","Dấu hiệu nội tiếp"),
        ("hai-day-cat-nhau","Hai dây cắt nhau"),("tiep-tuyen-cat-tuyen","Tiếp tuyến – cát tuyến"),
        ("chung-minh-tiep-tuyen","Chứng minh tiếp tuyến"),("goc-cung","Góc và cung tổng hợp"),("do-dai-duong-tron","Hệ thức độ dài trong đường tròn"),
    ]
    makers={}

    def center(k,qid):
        ins=25+5*(k%10); cen=2*ins
        d=diagram_obj(19,qid,"Góc ở tâm và góc nội tiếp cùng chắn cung AB") if k%2==0 else None
        return q(qid,f"Góc nội tiếp cùng chắn cung AB bằng {ins}°. Góc ở tâm chắn cung AB bằng:",num_opts(cen,ins,180-ins,cen+10,unit="°"),"goc-o-tam","tinh-goc-o-tam","basic",f"Góc ở tâm bằng hai lần góc nội tiếp cùng chắn cung: 2·{ins}°={cen}°.",topic,d),circle_angle_svg() if d else None
    makers["goc-o-tam"]=center

    def inscribed(k,qid):
        cen=80+10*(k%8); ins=cen//2
        d=diagram_obj(19,qid,"Góc ở tâm và góc nội tiếp cùng chắn một cung") if k%2==0 else None
        return q(qid,f"Góc ở tâm chắn cung MN bằng {cen}°. Góc nội tiếp cùng chắn cung MN bằng:",num_opts(ins,cen,180-ins,ins+10,unit="°"),"goc-noi-tiep","tinh-goc-noi-tiep","basic",f"Góc nội tiếp bằng nửa góc ở tâm: {cen}°/2={ins}°.",topic,d),circle_angle_svg() if d else None
    makers["goc-noi-tiep"]=inscribed

    def semicircle(k,qid):
        return q(qid,"Một góc nội tiếp chắn đường kính của đường tròn có số đo:",["90°","45°","180°","60°"],"nua-duong-tron","nhan-biet","basic","Góc nội tiếp chắn nửa đường tròn luôn bằng 90°.",topic),None
    makers["nua-duong-tron"]=semicircle

    def chord(k,qid):
        return q(qid,"Trong một đường tròn, đường kính vuông góc với dây AB. Kết luận đúng là:",["Đường kính đi qua trung điểm của AB","AB là đường kính","AB tiếp xúc đường tròn","Tâm nằm trên AB"],"day-va-tam","day-tam","basic","Đường kính vuông góc một dây thì đi qua trung điểm của dây đó.",topic),None
    makers["day-va-tam"]=chord

    def tangent(k,qid):
        d=diagram_obj(19,qid,"Bán kính OT vuông góc tiếp tuyến PT tại T") if k%2==0 else None
        return q(qid,"PT là tiếp tuyến của đường tròn tâm O tại T. Quan hệ đúng là:",["OT ⟂ PT","OT ∥ PT","OP ⟂ PT","OT = PT"],"tiep-tuyen-ban-kinh","tiep-tuyen","basic","Bán kính đi qua tiếp điểm vuông góc với tiếp tuyến tại tiếp điểm.",topic,d),tangent_svg() if d else None
    makers["tiep-tuyen-ban-kinh"]=tangent

    def two_tangents(k,qid):
        length=6+k
        return q(qid,f"Từ P ngoài đường tròn kẻ hai tiếp tuyến PA, PB. Nếu PA={length} cm thì PB bằng:",num_opts(length,length+1,max(1,length-1),2*length,unit=" cm"),"hai-tiep-tuyen","do-dai-tiep-tuyen","basic",f"Hai tiếp tuyến xuất phát từ cùng một điểm ngoài bằng nhau, nên PB={length} cm.",topic),None
    makers["hai-tiep-tuyen"]=two_tangents

    def cyclic(k,qid):
        a=80+5*(k%9); c=180-a
        d=diagram_obj(19,qid,"Tứ giác ABCD nội tiếp đường tròn") if k%2==0 else None
        return q(qid,f"Tứ giác ABCD nội tiếp có ∠A={a}°. Góc đối ∠C bằng:",num_opts(c,a,180-c,c+10,unit="°"),"tu-giac-noi-tiep","goc-doi","intermediate",f"Hai góc đối của tứ giác nội tiếp bù nhau: ∠C=180°-{a}°={c}°.",topic,d),cyclic_svg() if d else None
    makers["tu-giac-noi-tiep"]=cyclic

    def cyclic_test(k,qid):
        return q(qid,"Dấu hiệu nào sau đây đủ để chứng minh một tứ giác lồi nội tiếp?",["Tổng một cặp góc đối bằng 180°","Hai cạnh đối bằng nhau","Hai đường chéo bằng nhau","Có một góc vuông"],"dau-hieu-noi-tiep","dau-hieu","intermediate","Với tứ giác lồi, một cặp góc đối bù nhau là dấu hiệu nội tiếp.",topic),None
    makers["dau-hieu-noi-tiep"]=cyclic_test

    def chords(k,qid):
        a=2+k%5; b=6+2*(k%4); c=3+k%3; prod=a*b
        if prod%c!=0:
            c=2
        dval=prod//c
        d=diagram_obj(19,qid,"Hai dây AB và CD cắt nhau tại I trong đường tròn") if k%2==0 else None
        return q(qid,f"Hai dây AB, CD cắt nhau tại I. Biết IA={a}, IB={b}, IC={c}. Tính ID.",num_opts(dval,dval+2,max(1,dval-2),prod),"hai-day-cat-nhau","tich-doan","intermediate",f"IA·IB=IC·ID ⇒ ID={a}·{b}/{c}={dval}.",topic,d),chords_svg() if d else None
    makers["hai-day-cat-nhau"]=chords

    def secant(k,qid):
        pa=4+k%5; pb=pa*(4 if k%2==0 else 9); pt=int(math.isqrt(pa*pb))
        d=diagram_obj(19,qid,"Từ P ngoài đường tròn có tiếp tuyến PT và cát tuyến PAB") if k%2==0 else None
        return q(qid,f"Từ P ngoài đường tròn, PT là tiếp tuyến và PAB là cát tuyến. PA={pa}, PB={pb}. Tính PT.",num_opts(pt,pa,pb,pt+2),"tiep-tuyen-cat-tuyen","do-dai","intermediate",f"PT²=PA·PB={pa}·{pb}={pt*pt}, nên PT={pt}.",topic,d),tangent_svg() if d else None
    makers["tiep-tuyen-cat-tuyen"]=secant

    def prove_tangent(k,qid):
        d=diagram_obj(19,qid,"Điểm A thuộc đường tròn tâm O, đường thẳng d đi qua A và vuông góc OA") if k%2==0 else None
        return q(qid,"A thuộc đường tròn tâm O. Đường thẳng d đi qua A và d ⟂ OA. Kết luận đúng:",["d là tiếp tuyến tại A","d là đường kính","d là dây cung","d đi qua tâm O"],"chung-minh-tiep-tuyen","dau-hieu-tiep-tuyen","intermediate","Đường thẳng qua điểm thuộc đường tròn và vuông góc bán kính tại điểm đó là tiếp tuyến.",topic,d),tangent_svg() if d else None
    makers["chung-minh-tiep-tuyen"]=prove_tangent

    def arc(k,qid):
        angle=30+5*(k%10)
        return q(qid,f"Hai góc nội tiếp ∠ACB và ∠ADB cùng chắn cung AB. Nếu ∠ACB={angle}° thì ∠ADB bằng:",num_opts(angle,2*angle,180-angle,angle+10,unit="°"),"goc-cung","cung-chung","intermediate","Hai góc nội tiếp cùng chắn một cung thì bằng nhau.",topic),None
    makers["goc-cung"]=arc

    def circle_length(k,qid):
        a=3+k%4; b=4+k%5; c=2; dval=a*b//c if (a*b)%2==0 else a*b
        if (a*b)%2:
            c=1
        return q(qid,f"Trong cấu hình hai dây cắt nhau, IA={a}, IB={b}, IC={c}. Giá trị ID thỏa hệ thức tích là:",num_opts(dval,dval+1,max(1,dval-1),a*b),"do-dai-duong-tron","he-thuc-tich","advanced",f"Dùng IA·IB=IC·ID ⇒ ID={a*b}/{c}={dval}.",topic),None
    makers["do-dai-duong-tron"]=circle_length

    questions=[];occ={s:0 for s,_ in skills}
    for i in range(120):
        skill=skills[i%len(skills)][0];add(questions,19,"GEO19V1",skill,makers[skill],occ[skill]);occ[skill]+=1
    labels=dict(skills)
    groups=[
        {"id":"goc-cung","label":"A. Góc, cung và dây","skills":["goc-o-tam","goc-noi-tiep","nua-duong-tron","day-va-tam","goc-cung"]},
        {"id":"tiep-tuyen","label":"B. Tiếp tuyến","skills":["tiep-tuyen-ban-kinh","hai-tiep-tuyen","chung-minh-tiep-tuyen"]},
        {"id":"noi-tiep","label":"C. Tứ giác nội tiếp","skills":["tu-giac-noi-tiep","dau-hieu-noi-tiep"]},
        {"id":"he-thuc","label":"D. Hệ thức độ dài","skills":["hai-day-cat-nhau","tiep-tuyen-cat-tuyen","do-dai-duong-tron"]},
    ]
    return manifest(19,"CIR19-V1","Đường tròn",labels,groups),questions


def generate20() -> tuple[dict,list[dict]]:
    topic="20-hinh-hoc-tong-hop"
    skills=[
        ("nhan-dang-cong-cu","Nhận dạng công cụ"),("song-song-dong-dang","Song song → đồng dạng"),
        ("hai-goc-vuong-noi-tiep","Hai góc vuông → nội tiếp"),("noi-tiep-dong-dang","Nội tiếp → đồng dạng"),
        ("dong-dang-he-thuc-tich","Đồng dạng → hệ thức tích"),("tam-giac-vuong-dong-dang","Đồng dạng trong tam giác vuông"),
        ("tiep-tuyen-chung-minh","Chứng minh tiếp tuyến"),("chuoi-suy-luan","Chuỗi suy luận hình học"),
        ("the-tich-hop-chu-nhat","Thể tích hình hộp chữ nhật"),("the-tich-lang-tru","Thể tích lăng trụ đứng"),
        ("dien-tich-day","Diện tích đáy"),("doi-don-vi-do-luong","Đổi đơn vị đo lường"),("bai-toan-tong-hop","Bài toán tổng hợp"),
    ]
    makers={}

    def identify(k,qid):
        cases=[("Có hai góc vuông cùng nhìn đoạn AB","Tứ giác nội tiếp"),("Có DE ∥ BC trong tam giác ABC","Thales hoặc đồng dạng"),("Cần chứng minh tích hai đoạn bằng tích hai đoạn","Tìm tỉ số từ tam giác đồng dạng"),("Đường thẳng qua A trên đường tròn và vuông góc OA","Tiếp tuyến")]
        prompt,ans=cases[k%len(cases)]; wrong=[x for x in ["Pythagore","Tứ giác nội tiếp","Thales hoặc đồng dạng","Tìm tỉ số từ tam giác đồng dạng","Tiếp tuyến"] if x!=ans][:3]
        return q(qid,f"Dấu hiệu: {prompt}. Công cụ ưu tiên là:",[ans,*wrong],"nhan-dang-cong-cu","chon-cong-cu","basic","Nhận dạng cấu hình trước khi tính toán giúp chọn đúng định lý và tránh suy luận lan man.",topic),None
    makers["nhan-dang-cong-cu"]=identify

    def parallel_sim(k,qid):
        d=diagram_obj(20,qid,"Tam giác ABC có đoạn DE song song với BC") if k%2==0 else None
        return q(qid,"Trong ΔABC, D∈AB, E∈AC và DE ∥ BC. Chuỗi suy luận hợp lý nhất là:",["Góc tương ứng bằng nhau → ΔADE ∼ ΔABC","Pythagore → tứ giác nội tiếp","Hai dây cắt nhau → tiếp tuyến","Trung trực → đường cao"],"song-song-dong-dang","chuoi-song-song","intermediate","DE ∥ BC tạo hai cặp góc tương ứng bằng nhau, từ đó suy ra đồng dạng theo g-g.",topic,d),thales_svg() if d else None
    makers["song-song-dong-dang"]=parallel_sim

    def two_right(k,qid):
        d=diagram_obj(20,qid,"Hai điểm E và F tạo góc AEB và AFB đều bằng 90 độ") if k%2==0 else None
        return q(qid,"Nếu ∠AEB = ∠AFB = 90°, kết luận tự nhiên nhất là:",["A,E,B,F cùng thuộc đường tròn đường kính AB","AE ∥ BF","AB = EF","E và F là trung điểm"],"hai-goc-vuong-noi-tiep","noi-tiep-duong-kinh","intermediate","E và F đều nhìn AB dưới góc 90°, nên cùng nằm trên đường tròn đường kính AB.",topic,d),cyclic_svg() if d else None
    makers["hai-goc-vuong-noi-tiep"]=two_right

    def cyclic_sim(k,qid):
        d=diagram_obj(20,qid,"Tứ giác nội tiếp dùng các góc cùng chắn cung để tạo hai tam giác đồng dạng") if k%2==0 else None
        return q(qid,"Sau khi chứng minh A,B,C,D nội tiếp, muốn tạo hai tam giác đồng dạng nên ưu tiên khai thác:",["Các góc nội tiếp cùng chắn một cung","Hai cạnh đối bằng nhau","Hai đường chéo vuông góc","Diện tích bằng nhau"],"noi-tiep-dong-dang","noi-tiep-goc","advanced","Tứ giác nội tiếp cho nhiều cặp góc nội tiếp bằng nhau; đây thường là cầu nối đến đồng dạng.",topic,d),cyclic_svg() if d else None
    makers["noi-tiep-dong-dang"]=cyclic_sim

    def sim_product(k,qid):
        return q(qid,"Từ AB/DE = AC/DF, hệ thức tích tương ứng là:",["AB·DF = AC·DE","AB·DE = AC·DF","AB·AC = DE·DF","AB+DF = AC+DE"],"dong-dang-he-thuc-tich","he-thuc-tich","intermediate","Nhân chéo tỉ lệ cho AB·DF = AC·DE.",topic),None
    makers["dong-dang-he-thuc-tich"]=sim_product

    def right_sim(k,qid):
        d=diagram_obj(20,qid,"Tam giác ABC vuông tại A với đường cao AH xuống BC") if k%2==0 else None
        return q(qid,"Trong ΔABC vuông tại A, AH⊥BC. Cặp đồng dạng dùng để suy ra AB²=BH·BC là:",["ΔABH ∼ ΔCBA","ΔABH ∼ ΔACH","ΔABC ∼ ΔBHC","ΔAHC ∼ ΔABC"],"tam-giac-vuong-dong-dang","dong-dang-duong-cao","advanced","ΔABH và ΔCBA có một góc vuông và góc B chung; từ tỉ lệ AB/BC = BH/AB suy ra AB²=BH·BC.",topic,d),right_altitude_svg() if d else None
    makers["tam-giac-vuong-dong-dang"]=right_sim

    def tangent_proof(k,qid):
        d=diagram_obj(20,qid,"Bán kính OA vuông góc đường thẳng d tại điểm A thuộc đường tròn") if k%2==0 else None
        return q(qid,"A thuộc đường tròn tâm O, d đi qua A. Nếu OA ⟂ d thì kết luận:",["d là tiếp tuyến tại A","d là đường kính","d là dây","d song song với tiếp tuyến"],"tiep-tuyen-chung-minh","tiep-tuyen","intermediate","Đường thẳng qua điểm thuộc đường tròn và vuông góc bán kính tại đó là tiếp tuyến.",topic,d),tangent_svg() if d else None
    makers["tiep-tuyen-chung-minh"]=tangent_proof

    def chain(k,qid):
        return q(qid,"Chuỗi nào phù hợp với một bài hình tổng hợp có song song, sau đó cần chứng minh hệ thức tích?",["Song song → góc bằng nhau → đồng dạng → tỉ lệ → nhân chéo","Song song → Pythagore → chu vi → tiếp tuyến","Song song → trung trực → diện tích → nội tiếp","Song song → dây cung → lượng giác → trung điểm"],"chuoi-suy-luan","chien-luoc","advanced","Một chuỗi tốt tạo kết quả trung gian đúng mục tiêu: song song sinh góc, góc sinh đồng dạng, đồng dạng sinh tỉ lệ và hệ thức tích.",topic),None
    makers["chuoi-suy-luan"]=chain

    def cuboid(k,qid):
        a=3+k%6;b=4+(k*2)%5;c=2+k%4;v=a*b*c
        d=diagram_obj(20,qid,"Hình hộp chữ nhật có ba kích thước dài, rộng, cao") if k%3==0 else None
        return q(qid,f"Hình hộp chữ nhật có kích thước {a} cm × {b} cm × {c} cm. Thể tích bằng:",num_opts(v,a*b,a+b+c,v+c,unit=" cm³"),"the-tich-hop-chu-nhat","the-tich","basic",f"V=a·b·c={a}·{b}·{c}={v} cm³.",topic,d),cuboid_svg() if d else None
    makers["the-tich-hop-chu-nhat"]=cuboid

    def prism(k,qid):
        base=12+3*(k%7);h=5+k%6;v=base*h
        return q(qid,f"Lăng trụ đứng có diện tích đáy {base} cm² và chiều cao {h} cm. Thể tích là:",num_opts(v,base+h,base*h+h,base,unit=" cm³"),"the-tich-lang-tru","the-tich","basic",f"V=Sđáy·h={base}·{h}={v} cm³.",topic),None
    makers["the-tich-lang-tru"]=prism

    def base_area(k,qid):
        v=120+30*(k%6);h=5+k%5;base=v//h if v%h==0 else 24
        v=base*h
        return q(qid,f"Lăng trụ đứng có thể tích {v} cm³ và chiều cao {h} cm. Diện tích đáy bằng:",num_opts(base,v-h,base+h,h,unit=" cm²"),"dien-tich-day","tim-dien-tich-day","intermediate",f"Sđáy=V/h={v}/{h}={base} cm².",topic),None
    makers["dien-tich-day"]=base_area

    def units(k,qid):
        cm=5+k%15;mm=cm*10
        return q(qid,f"Đổi {cm} cm sang milimét:",num_opts(mm,cm,cm*100,mm+10,unit=" mm"),"doi-don-vi-do-luong","doi-don-vi","basic",f"1 cm=10 mm nên {cm} cm={mm} mm.",topic),None
    makers["doi-don-vi-do-luong"]=units

    def composite(k,qid):
        d=diagram_obj(20,qid,"Cấu hình tổng hợp gồm đường tròn, tứ giác nội tiếp và các tam giác") if k%2==0 else None
        return q(qid,"Trong bài hình tổng hợp đã có một tứ giác nội tiếp và mục tiêu cuối là chứng minh tích hai đoạn bằng nhau. Bước trung gian đáng ưu tiên là:",["Tìm hai tam giác đồng dạng để tạo tỉ lệ","Tính chu vi toàn hình","Đổi đơn vị độ dài","Chứng minh mọi cạnh bằng nhau"],"bai-toan-tong-hop","chien-luoc-tong-hop","advanced","Hệ thức tích thường xuất hiện sau khi nhân chéo một tỉ lệ từ hai tam giác đồng dạng.",topic,d),cyclic_svg() if d else None
    makers["bai-toan-tong-hop"]=composite

    questions=[];occ={s:0 for s,_ in skills}
    for i in range(120):
        skill=skills[i%len(skills)][0];add(questions,20,"GEO20V1",skill,makers[skill],occ[skill]);occ[skill]+=1
    labels=dict(skills)
    groups=[
        {"id":"nhan-dang","label":"A. Nhận dạng cấu hình và công cụ","skills":["nhan-dang-cong-cu","song-song-dong-dang","hai-goc-vuong-noi-tiep"]},
        {"id":"cau-noi","label":"B. Các cầu nối suy luận","skills":["noi-tiep-dong-dang","dong-dang-he-thuc-tich","tam-giac-vuong-dong-dang","tiep-tuyen-chung-minh"]},
        {"id":"chien-luoc","label":"C. Chuỗi suy luận tổng hợp","skills":["chuoi-suy-luan","bai-toan-tong-hop"]},
        {"id":"do-luong","label":"D. Đo lường và hình khối","skills":["the-tich-hop-chu-nhat","the-tich-lang-tru","dien-tich-day","doi-don-vi-do-luong"]},
    ]
    return manifest(20,"SYN20-V1","Hình học tổng hợp, đo lường và hình khối",labels,groups),questions


def manifest(topic_no: int, bank_id: str, title: str, labels: dict, groups: list[dict]) -> dict:
    slug={17:"17-thales-dong-dang",18:"18-he-thuc-luong",19:"19-duong-tron",20:"20-hinh-hoc-tong-hop"}[topic_no]
    prefix={17:"17-thales-dong-dang-v1",18:"18-he-thuc-luong-v1",19:"19-duong-tron-v1",20:"20-hinh-hoc-tong-hop-v1"}[topic_no]
    return {
        "version":2,"schema":"practice-bank-manifest-v1","bank_id":bank_id,
        "topic":{"id":slug,"title":title},"session_size":10,"question_count":120,
        "skill_labels":labels,"skill_groups":groups,
        "sources":[f"{prefix}-{i:02d}.json" for i in range(1,5)],
    }


def write_bank(topic_no: int, man: dict, questions: list[dict]) -> None:
    prefix={17:"17-thales-dong-dang-v1",18:"18-he-thuc-luong-v1",19:"19-duong-tron-v1",20:"20-hinh-hoc-tong-hop-v1"}[topic_no]
    PRACTICE.mkdir(parents=True,exist_ok=True)
    (PRACTICE/f"{prefix}.manifest.json").write_text(json.dumps(man,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    for i in range(4):
        part=questions[i*30:(i+1)*30]
        chunk={"version":2,"schema":"practice-question-chunk-v1","bank_id":f"{man['bank_id']}-{i+1:02d}","topic":man["topic"],"questions":part}
        (PRACTICE/f"{prefix}-{i+1:02d}.json").write_text(json.dumps(chunk,ensure_ascii=False,separators=(",",":"))+"\n",encoding="utf-8")


def patch_existing_diagrams() -> None:
    patches=[
        (13,"goc-so-le-trong", "GEO13-DIAGRAM", "Hai đường thẳng song song bị cắt bởi một đường thẳng", svg_wrap('''<path class="g" d="M55 85 L385 85 M55 205 L385 205 M125 30 L310 260"/><text class="small" x="65" y="75">a</text><text class="small" x="65" y="195">b</text><text class="small" x="130" y="45">c</text><text class="small" x="185" y="72">a ∥ b</text>''')),
        (14,"pythagore", "GEO14-DIAGRAM", "Tam giác ABC vuông tại A", right_triangle_svg()),
        (15,"ti-so-trong-tam", "GEO15-DIAGRAM", "Tam giác ABC có trung tuyến AM và trọng tâm G", median_svg()),
        (16,"duong-cheo-suy-luan", "GEO16-DIAGRAM", "Hình bình hành ABCD có hai đường chéo cắt nhau tại O", parallelogram_svg()),
    ]
    prefixes={13:"13-goc-va-duong-thang-v1",14:"14-tam-giac-v1",15:"15-duong-dong-quy-v1",16:"16-tu-giac-v1"}
    for topic_no, skill, _, alt, svg in patches:
        found=False
        for chunk_path in sorted(PRACTICE.glob(prefixes[topic_no]+"-*.json")):
            data=json.loads(chunk_path.read_text(encoding="utf-8"))
            for item in data.get("questions",[]):
                if skill in item.get("tags",{}).get("skill",[]) and "diagram" not in item:
                    qid=item["id"]
                    item["diagram"]=diagram_obj(topic_no,qid,alt)
                    write_diagram(topic_no,qid,svg)
                    chunk_path.write_text(json.dumps(data,ensure_ascii=False,separators=(",",":"))+"\n",encoding="utf-8")
                    found=True
                    break
            if found: break
        if not found:
            raise RuntimeError(f"Không tìm được câu để gắn diagram topic {topic_no}, skill {skill}")


def main() -> None:
    DIAGRAMS.mkdir(parents=True,exist_ok=True)
    for topic_no, generator in [(17,generate17),(18,generate18),(19,generate19),(20,generate20)]:
        man, questions=generator()
        if len(questions)!=120:
            raise RuntimeError(f"Topic {topic_no}: expected 120, got {len(questions)}")
        write_bank(topic_no,man,questions)
        print(f"Topic {topic_no}: wrote 120 questions")
    patch_existing_diagrams()
    print("Patched one representative diagram into each Topic 13–16.")


if __name__ == "__main__":
    main()
