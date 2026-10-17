#!/usr/bin/env python3
"""R20 QA-only: exact option/action, skills, one atomic journal, backup/reload.
Disposable 1365px/390px Chromium contexts; never authentic learner data.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium required"
JS="\n".join(Path(p).read_text(encoding="utf8") for p in (
    "scripts/prototypes/math-v2-exact-action-identity-r19.js",
    "scripts/prototypes/math-v2-exact-ledger-r20.js",
))
BASE="http://127.0.0.1:8765/"
def context(browser,width):
    c=browser.new_context(viewport={"width":width,"height":844})
    c.add_init_script(script=JS)
    return c
def page(c):
    p=c.new_page()
    r=p.goto(BASE,wait_until="domcontentloaded")
    assert r and r.status==200
    return p
def data(scope,**kw):
    x=dict(learner_scope=scope,session_id="QA_SESSION_A",
        presentation_id="QA_PRESENT_A",action_id="QA_ACTION_A",
        item_id="FAC06V1_025",source_sha256="a"*64,option_id="WRONG_A",
        correct=False,skill_ids=["SKILL_FRACTIONS","SKILL_NUMBERS"])
    x.update(kw)
    return x
CREATE="""async s=>await MathV2ExactLedgerR20.create({enabled:true,learner_scope:s})"""
STAGE="""async x=>{
 const a=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:x.learner_scope});
 try{return await a.stage(x);}finally{a.close();}
}"""
ROWS="""async s=>{
 const a=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:s});
 try{return {rows:await a.read(),counts:await a.project()};}finally{a.close();}
}"""
COMMIT="""async x=>{
 const a=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:x.scope});
 try{return await a.commit(x.key,x.options||{});}finally{a.close();}
}"""
EXPORT="""async s=>{
 const a=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:s});
 try{return await a.exportBackup();}finally{a.close();}
}"""
RESTORE="""async x=>{
 const a=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:x.scope});
 try{return await a.restore(x.backup,x.options||{});}finally{a.close();}
}"""
def result_or_error(p,script,arg):
    try: return p.evaluate(script,arg)
    except Exception as e:
        return str(e)
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        scope=f"QA_R16_R19_R20_{width}"
        source=context(browser,width)
        p=page(source)
        errors=[]
        p.on("pageerror",lambda e:errors.append(str(e)))
        assert p.evaluate("typeof MathV2ExactLedgerR20")=="object"
        assert p.evaluate("localStorage.getItem('toan-thcs-practice-v1')") is None
        p.evaluate("localStorage.setItem('r20-sentinel','unchanged')")
        x=data(scope)
        # Two distinct connections race on exactly one rendered question.
        pair=p.evaluate("""async x=>{
          const a=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:x.learner_scope});
          const b=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:x.learner_scope});
          try{return await Promise.all([a.stage(x),b.stage(x)]);}
          finally{a.close();b.close();}
        }""",x)
        assert sorted(row["reused"] for row in pair)==[False,True]
        assert pair[0]["event_id"]==pair[1]["event_id"]
        key=pair[0]["submission_key"]
        event_id=pair[0]["event_id"]
        assert len(p.evaluate(ROWS,scope)["rows"]["intents"])==1
        assert p.evaluate(ROWS,scope)["counts"]["total_unique_attempts"]==0

        # Same wrong boolean, DIFFERENT canonical wrong option: fail closed.
        wrong=result_or_error(p,STAGE,{**x,"option_id":"WRONG_B"})
        assert "R20_EXACT_ACTION_CONFLICT" in wrong
        changed_action=result_or_error(p,STAGE,{**x,"action_id":"QA_ACTION_B"})
        assert "R20_EXACT_ACTION_CONFLICT" in changed_action
        failed=result_or_error(p,COMMIT,{"scope":scope,"key":key,
                                        "options":{"simulateAbort":True}})
        assert "R20_SIMULATED_ABORT" in failed
        rows=p.evaluate(ROWS,scope)["rows"]
        assert len(rows["intents"])==1 and rows["intents"][0]["state"]=="STAGED"
        assert rows["events"]==[] and rows["outbox"]==[]
        p.reload(wait_until="domcontentloaded")
        rows=p.evaluate(ROWS,scope)["rows"]
        assert rows["intents"][0]["event_id"]==event_id
        assert rows["intents"][0]["option_id"]=="WRONG_A"
        assert rows["intents"][0]["action_id"]=="QA_ACTION_A"

        # Concurrent identical commit cannot create more than one event.
        commits=p.evaluate("""async x=>{
          const a=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:x.scope});
          const b=await MathV2ExactLedgerR20.create({enabled:true,learner_scope:x.scope});
          try{return await Promise.all([a.commit(x.key),b.commit(x.key)]);}
          finally{a.close();b.close();}
        }""",{"scope":scope,"key":key})
        assert sorted(r["duplicate"] for r in commits)==[False,True]
        assert all(r["event_id"]==event_id for r in commits)
        done=p.evaluate(ROWS,scope)
        assert len(done["rows"]["events"])==len(done["rows"]["outbox"])==1
        event=done["rows"]["events"][0]
        assert event["option_id"]=="WRONG_A" and event["source_sha256"]=="a"*64
        assert event["action_id"]=="QA_ACTION_A"
        assert event["skill_ids"]==["SKILL_FRACTIONS","SKILL_NUMBERS"]
        assert done["counts"]["total_unique_attempts"]==1
        assert done["counts"]["total_correct"]==0
        assert done["counts"]["per_skill"]["SKILL_FRACTIONS"]["attempted"]==1
        assert done["counts"]["per_skill"]["SKILL_NUMBERS"]["attempted"]==1

        # A different presentation of the same item is a new valid attempt.
        second=data(scope,session_id="QA_SESSION_B",
            presentation_id="QA_PRESENT_B",action_id="QA_ACTION_B",
            option_id="CORRECT_C",correct=True,skill_ids=["SKILL_NUMBERS"])
        staged=p.evaluate(STAGE,second)
        assert staged["event_id"]!=event_id
        assert staged["submission_key"]!=key
        backup=p.evaluate(EXPORT,scope)
        assert len(backup["intents"])==2 and len(backup["events"])==1
        assert len(backup["sha256"])==64
        bad=result_or_error(p,RESTORE,{"scope":scope,
            "backup":{**backup,"sha256":"0"*64}})
        assert "R20_HASH_MISMATCH" in bad
        assert p.evaluate("localStorage.getItem('r20-sentinel')")=="unchanged"
        assert p.evaluate("localStorage.getItem('toan-thcs-practice-v1')") is None

        # Restore SAVED plus STAGED into independent browser/device context.
        destination=context(browser,width)
        other=page(destination)
        assert other.evaluate(RESTORE,{"scope":scope,"backup":backup})=={
            "intents":2,"events":1,"outbox":1}
        assert "R20_REPLACE_CONSENT_REQUIRED" in result_or_error(
            other,RESTORE,{"scope":scope,"backup":backup})
        assert other.evaluate(ROWS,scope)["counts"]["total_unique_attempts"]==1
        assert other.evaluate(COMMIT,{"scope":scope,
            "key":staged["submission_key"]})["saved"]
        report=other.evaluate(ROWS,scope)["counts"]
        assert report["total_unique_attempts"]==2
        assert report["total_correct"]==1
        assert report["per_skill"]["SKILL_NUMBERS"]["attempted"]==2
        assert report["per_skill"]["SKILL_FRACTIONS"]["attempted"]==1
        assert sum(v["attempted"] for v in report["per_skill"].values())==3
        assert report["no_automatic_readiness_credit"]
        assert report["legacy_v1_writes"]==0
        assert other.evaluate("localStorage.getItem('toan-thcs-practice-v1')") is None
        assert not errors,errors
        destination.close()
        source.close()
        print("PASS R20",width,
              "atomic exact option/action, fail-closed wrong option, multi-tab dedup,"
              " rollback/reload, skill attribution, verified backup/restore, no v1 writes")
    browser.close()
