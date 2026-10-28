"""Synthetic-only SQLite/D1-compatible atomic assessment data QA. No real keys."""
import json
import sqlite3
from pathlib import Path

root = Path(__file__).resolve().parents[1]
conn = sqlite3.connect(":memory:")
conn.executescript((root / "services/thpt-readiness/schema.sql").read_text(encoding="utf-8"))
conn.row_factory = sqlite3.Row

assert conn.execute("SELECT COUNT(*) FROM thpt_banks").fetchone()[0] == 0
assert conn.execute("SELECT COUNT(*) FROM thpt_bank_items").fetchone()[0] == 0
conn.executemany(
    "INSERT INTO thpt_banks(id,scope,version,required_count) VALUES (?,?,?,?)",
    [("B-SGK", "SGK_CHAPTER", "v1", 2), ("B-TOPIC", "TOPIC_READINESS", "v1", 2)],
)
assert conn.execute("SELECT SUM(active) FROM thpt_banks").fetchone()[0] == 0
for bank, ids in [
    ("B-SGK", ["QA-ONE", "QA-SHARED"]),
    ("B-TOPIC", ["QA-SHARED", "QA-THREE"]),
]:
    for idx, item_id in enumerate(ids):
        conn.execute(
            """INSERT INTO thpt_bank_items(
              bank_id,item_id,position,prompt,choices_json,key_index,
              explanation,heldout,blocked
            ) VALUES(?,?,?,?,?,?,?,?,?)""",
            (bank,item_id,idx,"QA placeholder",json.dumps(["wrong","right"]),
             1,"synthetic only",1,0),
        )
conn.execute("UPDATE thpt_banks SET active=1")

def claim(uid, bank, ids, attempt):
    placeholders = ",".join("?" for _ in ids)
    statement = (
        "INSERT INTO thpt_attempts (id,uid,bank_id,bank_version,item_ids_json) "
        "SELECT ?,?,?,?,? WHERE NOT EXISTS "
        "(SELECT 1 FROM thpt_exposures WHERE uid=? AND item_id IN ("
        + placeholders + ")) "
        "AND NOT EXISTS (SELECT 1 FROM thpt_public_item_registry WHERE item_id IN ("
        + placeholders + ")) "
        "ON CONFLICT(uid,bank_id,bank_version) DO NOTHING"
    )
    with conn:
        result = conn.execute(statement,
          [attempt, uid, bank, "v1", json.dumps(ids), uid, *ids, *ids])
        for item_id in ids:
            conn.execute(
                """INSERT OR IGNORE INTO thpt_exposures(uid,item_id,source_scope)
                SELECT ?,?,? WHERE EXISTS
                (SELECT 1 FROM thpt_attempts WHERE id=? AND uid=?)""",
                (uid,item_id,bank,attempt,uid),
            )
    return result.rowcount

assert claim("learnerA","B-SGK",["QA-ONE","QA-SHARED"],"a-1") == 1
assert conn.execute(
  "SELECT COUNT(*) FROM thpt_exposures WHERE uid=?",("learnerA",)
).fetchone()[0] == 2
assert claim("learnerA","B-SGK",["QA-ONE","QA-SHARED"],"a-2") == 0
assert claim("learnerA","B-TOPIC",["QA-SHARED","QA-THREE"],"a-3") == 0
assert conn.execute(
  "SELECT COUNT(*) FROM thpt_exposures WHERE uid=?",("learnerA",)
).fetchone()[0] == 2
assert conn.execute(
  "SELECT COUNT(*) FROM thpt_attempts WHERE uid=?",("learnerA",)
).fetchone()[0] == 1
assert claim("learnerB","B-TOPIC",["QA-SHARED","QA-THREE"],"b-1") == 1
assert conn.execute("SELECT COUNT(*) FROM thpt_attempts").fetchone()[0] == 2

# One registered public question can NEVER become protected held-out, even
# when public availability is later set to inactive.
conn.execute("INSERT INTO thpt_public_item_registry (item_id,allowed_scopes_json,active) VALUES (?,?,1)",
    ("QA-THREE",json.dumps(["SGK_CORE","SGK_PRACTICE"])))
assert claim("learnerC","B-TOPIC",["QA-SHARED","QA-THREE"],"c-1") == 0
conn.execute("UPDATE thpt_public_item_registry SET active=0 WHERE item_id='QA-THREE'")
assert claim("learnerD","B-TOPIC",["QA-SHARED","QA-THREE"],"d-1") == 0
assert conn.execute("SELECT COUNT(*) FROM thpt_attempts WHERE uid IN ('learnerC','learnerD')").fetchone()[0] == 0
conn.execute("UPDATE thpt_public_item_registry SET active=1 WHERE item_id='QA-THREE'")
with conn:
    conn.execute(
        """INSERT OR IGNORE INTO thpt_exposures (uid,item_id,source_scope)
           SELECT ?,?,? WHERE EXISTS
           (SELECT 1 FROM thpt_public_item_registry WHERE item_id=? AND active=1)""",
        ("learnerE","QA-THREE","SGK_CORE","QA-THREE"),
    )
    conn.execute(
        """INSERT OR IGNORE INTO thpt_exposure_events (uid,item_id,source_scope,event_kind)
           SELECT ?,?,?,? WHERE EXISTS
           (SELECT 1 FROM thpt_public_item_registry WHERE item_id=? AND active=1)""",
        ("learnerE","QA-THREE","SGK_CORE","QUESTION_SHOWN","QA-THREE"),
    )
for _ in range(2):
    conn.execute(
        """INSERT OR IGNORE INTO thpt_exposure_events
           (uid,item_id,source_scope,event_kind) VALUES (?,?,?,?)""",
        ("learnerE","QA-THREE","SGK_CORE","HINT_OPENED"),
    )
assert conn.execute("SELECT COUNT(*) FROM thpt_exposure_events WHERE uid='learnerE'").fetchone()[0] == 2
assert claim("learnerE","B-TOPIC",["QA-SHARED","QA-THREE"],"e-1") == 0

result = json.dumps({"completed":True,"score":1,"total":2,"mastery_credit":False})
answers = json.dumps({"QA-ONE":1,"QA-SHARED":0})
assert conn.execute(
  """UPDATE thpt_attempts
     SET result_json=?,responses_json=?,submitted_at=CURRENT_TIMESTAMP
     WHERE id=? AND uid=? AND submitted_at IS NULL""",
  (result,answers,"a-1","learnerA")
).rowcount == 1
assert conn.execute(
  """UPDATE thpt_attempts
     SET result_json=?,responses_json=?,submitted_at=CURRENT_TIMESTAMP
     WHERE id=? AND uid=? AND submitted_at IS NULL""",
  ("changed","changed","a-1","learnerA")
).rowcount == 0
record = conn.execute(
  "SELECT result_json,responses_json FROM thpt_attempts WHERE id=?",("a-1",)
).fetchone()
assert record["result_json"] == result
assert record["responses_json"] == answers
print("PASS THPT SQLite/D1 schema: disabled empty banks, authenticated public-event ledger, permanent public-item ban, atomic claim/exposure, cross-route collision, learner isolation, immutable Final Submit.")
