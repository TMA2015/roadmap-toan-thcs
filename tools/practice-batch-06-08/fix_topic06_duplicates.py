#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PRACTICE = ROOT / "docs" / "assets" / "data" / "practice"
MANIFEST = PRACTICE / "06-phan-tich-da-thuc-v1.manifest.json"

REPLACEMENTS = {
    "FAC06V1_016": {
        "question": r"Phân tích \(5x(x-2)+4(2-x)\) thành nhân tử.",
        "options": [r"\((x-2)(5x-4)\)", r"\((x-2)(5x+4)\)", r"\((x+2)(5x-4)\)", r"\((x-2)(5-4x)\)"],
        "answer": 0,
        "explanation": r"Vì \(2-x=-(x-2)\), ta có \(5x(x-2)-4(x-2)=(x-2)(5x-4)\).",
    },
    "FAC06V1_024": {
        "question": r"Phân tích \(9x^2-16\) thành nhân tử.",
        "options": [r"\((3x-4)(3x+4)\)", r"\((3x-4)^2\)", r"\((9x-4)(x+4)\)", r"\((3x+4)^2\)"],
        "answer": 0,
        "explanation": r"\(9x^2-16=(3x)^2-4^2=(3x-4)(3x+4)\).",
    },
    "FAC06V1_025": {
        "question": r"Phân tích \(x^2-36\) thành nhân tử.",
        "options": [r"\((x-6)(x+6)\)", r"\((x-6)^2\)", r"\((x-18)(x+2)\)", r"\((x+6)^2\)"],
        "answer": 0,
        "explanation": r"\(x^2-36=x^2-6^2=(x-6)(x+6)\).",
    },
    "FAC06V1_029": {
        "question": r"Phân tích \(25x^2-4\) thành nhân tử.",
        "options": [r"\((5x-2)(5x+2)\)", r"\((5x-2)^2\)", r"\((25x-2)(x+2)\)", r"\((5x+2)^2\)"],
        "answer": 0,
        "explanation": r"\(25x^2-4=(5x)^2-2^2=(5x-2)(5x+2)\).",
    },
    "FAC06V1_037": {
        "question": r"Phân tích \(x^2+14x+49\) thành nhân tử.",
        "options": [r"\((x+7)^2\)", r"\((x-7)^2\)", r"\((x-7)(x+7)\)", r"\(x(x+14)+49\)"],
        "answer": 0,
        "explanation": r"\(x^2+14x+49=x^2+2\cdot x\cdot7+7^2=(x+7)^2\).",
    },
    "FAC06V1_039": {
        "question": r"Phân tích \(9x^2-24x+16\) thành nhân tử.",
        "options": [r"\((3x-4)^2\)", r"\((3x+4)^2\)", r"\((3x-4)(3x+4)\)", r"\((9x-4)(x-4)\)"],
        "answer": 0,
        "explanation": r"\(9x^2-24x+16=(3x)^2-2\cdot3x\cdot4+4^2=(3x-4)^2\).",
    },
    "FAC06V1_045": {
        "question": r"Phân tích \(x^3-27\) thành nhân tử.",
        "options": [r"\((x-3)(x^2+3x+9)\)", r"\((x-3)(x^2-3x+9)\)", r"\((x+3)(x^2-3x+9)\)", r"\((x-3)^3\)"],
        "answer": 0,
        "explanation": r"Dùng \(A^3-B^3=(A-B)(A^2+AB+B^2)\) với \(A=x, B=3\).",
    },
    "FAC06V1_049": {
        "question": r"Phân tích \(8x^3+27\) thành nhân tử.",
        "options": [r"\((2x+3)(4x^2-6x+9)\)", r"\((2x+3)(4x^2+6x+9)\)", r"\((2x-3)(4x^2+6x+9)\)", r"\((2x+3)^3\)"],
        "answer": 0,
        "explanation": r"\(8x^3+27=(2x)^3+3^3=(2x+3)(4x^2-6x+9)\).",
    },
    "FAC06V1_050": {
        "question": r"Phân tích \(64x^3-125\) thành nhân tử.",
        "options": [r"\((4x-5)(16x^2+20x+25)\)", r"\((4x-5)(16x^2-20x+25)\)", r"\((4x+5)(16x^2-20x+25)\)", r"\((4x-5)^3\)"],
        "answer": 0,
        "explanation": r"\(64x^3-125=(4x)^3-5^3=(4x-5)(16x^2+20x+25)\).",
    },
    "FAC06V1_063": {
        "question": r"Phân tích \(3x^2+6x+2x+4\) bằng phương pháp nhóm hạng tử.",
        "options": [r"\((3x+2)(x+2)\)", r"\((3x-2)(x+2)\)", r"\((3x+2)(x-2)\)", r"\(x(3x+8)+4\)"],
        "answer": 0,
        "explanation": r"Nhóm \((3x^2+6x)+(2x+4)=3x(x+2)+2(x+2)=(3x+2)(x+2)\).",
    },
    "FAC06V1_087": {
        "question": r"Phân tích hoàn toàn \(x^3+2x^2-9x-18\) thành nhân tử.",
        "options": [r"\((x+2)(x-3)(x+3)\)", r"\((x-2)(x-3)(x+3)\)", r"\((x+2)(x-3)^2\)", r"\((x+2)(x^2+9)\)"],
        "answer": 0,
        "explanation": r"Nhóm được \((x+2)(x^2-9)\), rồi dùng hiệu hai bình phương: \((x+2)(x-3)(x+3)\).",
    },
    "FAC06V1_092": {
        "question": r"Phân tích hoàn toàn \(x^3+4x^2+3x\) thành nhân tử.",
        "options": [r"\(x(x+1)(x+3)\)", r"\(x(x-1)(x+3)\)", r"\((x+1)(x+3)\)", r"\(x(x+4)\)"],
        "answer": 0,
        "explanation": r"Đặt \(x\) chung: \(x(x^2+4x+3)=x(x+1)(x+3)\).",
    },
    "FAC06V1_114": {
        "question": r"Với mọi số nguyên \(n\), vì sao \(n^2-n\) luôn chia hết cho 2?",
        "options": [r"\(n^2-n=n(n-1)\), tích hai số nguyên liên tiếp luôn chẵn.", r"\(n^2-n=(n-1)^2\).", r"\(n^2-n=n^2(1-n)\).", "Vì mọi số nguyên đều chia hết cho 2."],
        "answer": 0,
        "explanation": r"\(n^2-n=n(n-1)\). Hai số \(n\) và \(n-1\) liên tiếp nên một trong hai là số chẵn.",
    },
    "FAC06V1_115": {
        "question": r"Với mọi số nguyên \(n\), vì sao \(n^3-n\) luôn chia hết cho 6?",
        "options": [r"\(n^3-n=n(n-1)(n+1)\), tích ba số nguyên liên tiếp chia hết cho 6.", r"\(n^3-n=(n-1)^3\).", r"\(n^3-n=n^2(n-1)\) nên luôn chia hết cho 6.", "Vì mọi số nguyên đều chia hết cho 6."],
        "answer": 0,
        "explanation": r"\(n^3-n=n(n-1)(n+1)\). Trong ba số nguyên liên tiếp có một số chia hết cho 3 và ít nhất một số chẵn, nên tích chia hết cho 6.",
    },
    "FAC06V1_116": {
        "question": r"Với mọi số nguyên \(n\), vì sao \(n^2+3n+2\) luôn chia hết cho 2?",
        "options": [r"\(n^2+3n+2=(n+1)(n+2)\), tích hai số nguyên liên tiếp luôn chẵn.", r"\(n^2+3n+2=(n+1)^2\).", r"\(n^2+3n+2=n(n+3)+2\) nên hiển nhiên chẵn.", "Vì \(n\) luôn là số chẵn."],
        "answer": 0,
        "explanation": r"\(n^2+3n+2=(n+1)(n+2)\). Hai nhân tử là hai số nguyên liên tiếp nên tích luôn chẵn.",
    },
}


def main() -> None:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    found: set[str] = set()
    for source in manifest["sources"]:
        path = PRACTICE / source
        chunk = json.loads(path.read_text(encoding="utf-8"))
        changed = False
        for question in chunk["questions"]:
            replacement = REPLACEMENTS.get(question.get("id"))
            if not replacement:
                continue
            question.update(replacement)
            found.add(question["id"])
            changed = True
        if changed:
            path.write_text(json.dumps(chunk, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")

    missing = sorted(set(REPLACEMENTS) - found)
    if missing:
        raise SystemExit(f"Không tìm thấy ID cần sửa: {missing}")
    print(f"Đã thay {len(found)} câu trùng ở Chuyên đề 06.")


if __name__ == "__main__":
    main()
