#!/usr/bin/env python3
"""Read-only SHA/source-parity preflight; pass PRIVATE files via arguments, never print item bodies."""
import argparse, hashlib, json, re, sys, zipfile
from pathlib import Path

def sha(data):
    return hashlib.sha256(data).hexdigest()

def blocks(content):
    matches = list(re.finditer(r'^### (THPT-G10-B1[5-8]-R0[1-5])[^\n]*$', content, re.M))
    found = {}
    for ix, match in enumerate(matches):
        stop = matches[ix+1].start() if ix+1 < len(matches) else len(content)
        body = content[match.start():stop].strip()
        if ix+1 == len(matches):
            body = re.split(r'\n(?:---\n\n## Cổng QA|## Required reviewer verdict)', body, maxsplit=1)[0].strip()
        if match.group(1) in found:
            raise AssertionError('duplicate item heading')
        found[match.group(1)] = body
    return found

def main(args):
    manifest=json.loads(args.manifest.read_text(encoding='utf8'))
    assert manifest['release_authorization']=='NO' and not manifest['mastery_activation']
    assert manifest['archive_status']=='RESTORE_PASS'
    assert sha(args.zip.read_bytes())==manifest['source_zip_sha256']
    with zipfile.ZipFile(args.zip) as z:
        assert z.testzip() is None
        original=z.read('Temp_03_THPT_G10_CHVI_CHAPTER_READINESS_HELDOUT.md')
    assert sha(original)==manifest['source_temp03_sha256']
    raw=blocks(original.decode('utf8'))
    b0=blocks(args.base.read_text(encoding='utf8'))
    b1=blocks(args.r1.read_text(encoding='utf8'))
    review=blocks(args.review.read_text(encoding='utf8'))
    ids=manifest['item_ids']
    assert len(ids)==len(set(ids))==18
    assert list(raw)==list(b0)==list(b1)==list(review)==ids
    checks=0
    for item in ids:
        text=raw[item]
        assert b0[item]==text; checks+=1
        assert sha(text.encode('utf8'))==manifest['original_block_sha256'][item];checks+=1
        assert b1[item].startswith(text+'\n\n**Rubric bổ sung R1 — CHƯA REVIEW (/4):**\n');checks+=1
        assert b1[item]==review[item];checks+=1
        rubric=b1[item][len(text):]
        assert rubric.count(' (1đ)')==4;checks+=1
        assert rubric.count('\n- ')==4;checks+=1
    for file in (args.base,args.r1,args.review):
        key=manifest['files'][file.name]
        assert sha(file.read_bytes())==key['sha256'] and file.stat().st_size==key['bytes'];checks+=1
    body=args.review.read_text(encoding='utf8')
    assert 'MASTERY_ACTIVATION: NO' in body;checks+=1
    assert 'NEW_R1_RUBRICS|18' in body;checks+=1
    assert 'previously NotebookLM PASS' in body;checks+=1
    assert '20 later CHVI-RD1-01..20 alternative candidates remain quarantined' in body;checks+=1
    print(f'QA_PASS: {checks}/{checks} checks; 18 original items and 18 rubric deltas; private source not logged.')

if __name__=='__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('zip',type=Path,help='private exact original five-Temp ZIP')
    parser.add_argument('base',type=Path,help='private R0 canonical')
    parser.add_argument('r1',type=Path,help='private R1 rubric candidate')
    parser.add_argument('review',type=Path,help='private reviewer Temp source')
    parser.add_argument('manifest',type=Path,help='private SHA/ID manifest')
    try:
        main(parser.parse_args())
    except Exception as exc:
        print('QA_FAIL: '+str(exc),file=sys.stderr)
        sys.exit(1)
