#!/usr/bin/env python3
from __future__ import annotations

import base64
import gzip
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = Path("docs/assets/data/practice")
EXPECTED = {
    "13": (7200, "e399637e9e75ea70eca5388774bc3a58353a331142d3d88f64b63f039a444110"),
    "14": (7404, "a4d2b7ae3cccde315eb7997e20abde128a2f62d61bc8970151491d4d0a007415"),
    "15": (7404, "2bb38131bbb55ad87d30e3c9ed345db6545f28850c49c73a2a9baeed6d5986ef"),
    "16": (8108, "b9cde51cb110e06ea3544178a6c377643d9fd46e3ffe339f9ec766361725cec8"),
}


def load_bundle(topic: str) -> dict[str, str]:
    path = ROOT / f"{topic}.bundle.gz.b64"
    text = path.read_text(encoding="utf-8").strip()
    expected_len, expected_sha = EXPECTED[topic]
    if len(text) != expected_len:
        raise ValueError(f"Payload {topic}: len={len(text)}, expected={expected_len}")
    raw = gzip.decompress(base64.b64decode(text, validate=True))
    digest = hashlib.sha256(raw).hexdigest()
    if digest != expected_sha:
        raise ValueError(f"Payload {topic}: sha256={digest}, expected={expected_sha}")
    data = json.loads(raw.decode("utf-8"))
    if not isinstance(data, dict) or len(data) != 5:
        raise ValueError(f"Payload {topic}: expected 5 files")
    return data


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    written: list[Path] = []
    for topic in ("13", "14", "15", "16"):
        bundle = load_bundle(topic)
        for name, content in bundle.items():
            if not isinstance(name, str) or not isinstance(content, str):
                raise ValueError(f"Payload {topic}: invalid bundle entry")
            target = OUT / name
            target.write_text(content, encoding="utf-8")
            written.append(target)
        print(f"{topic}: payload OK, wrote {len(bundle)} files")
    print(f"Generated {len(written)} Practice Bank files for Topics 13-16.")
    for path in written:
        print(path)


if __name__ == "__main__":
    main()
