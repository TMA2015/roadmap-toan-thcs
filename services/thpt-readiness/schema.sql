-- THPT secure assessment D1 migration; NO private exam item, key or answer here.
-- Never execute in production before auth, privacy, source receipt and D6 sign-off.
PRAGMA foreign_keys=ON;

CREATE TABLE IF NOT EXISTS thpt_banks (
  id TEXT PRIMARY KEY,
  scope TEXT NOT NULL CHECK(scope IN ('SGK_CHAPTER','TOPIC_READINESS')),
  version TEXT NOT NULL,
  required_count INTEGER NOT NULL CHECK(required_count BETWEEN 1 AND 60),
  active INTEGER NOT NULL DEFAULT 0 CHECK(active IN (0,1))
);
CREATE TABLE IF NOT EXISTS thpt_bank_items (
  bank_id TEXT NOT NULL REFERENCES thpt_banks(id),
  item_id TEXT NOT NULL,
  position INTEGER NOT NULL,
  prompt TEXT NOT NULL,
  choices_json TEXT NOT NULL,
  key_index INTEGER NOT NULL,
  explanation TEXT NOT NULL,
  heldout INTEGER NOT NULL DEFAULT 0 CHECK(heldout IN (0,1)),
  blocked INTEGER NOT NULL DEFAULT 1 CHECK(blocked IN (0,1)),
  PRIMARY KEY(bank_id,item_id),
  UNIQUE(bank_id,position)
);
CREATE INDEX IF NOT EXISTS idx_thpt_items_canonical
  ON thpt_bank_items(item_id);
CREATE TABLE IF NOT EXISTS thpt_attempts (
  id TEXT PRIMARY KEY,
  uid TEXT NOT NULL,
  bank_id TEXT NOT NULL REFERENCES thpt_banks(id),
  bank_version TEXT NOT NULL,
  item_ids_json TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  submitted_at TEXT,
  result_json TEXT,
  UNIQUE(uid,bank_id,bank_version)
);
CREATE INDEX IF NOT EXISTS idx_thpt_attempts_uid
  ON thpt_attempts(uid,bank_id);
CREATE TABLE IF NOT EXISTS thpt_exposures (
  uid TEXT NOT NULL,
  item_id TEXT NOT NULL,
  source_scope TEXT NOT NULL,
  first_seen_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(uid,item_id)
);
CREATE INDEX IF NOT EXISTS idx_thpt_exposures_user
  ON thpt_exposures(uid);

-- Default state deliberately has NO BANKS and NO QUESTIONS.
-- A separate private approved importer must validate snapshot SHA, exact item IDs,
-- reviewer eligibility, exposure/public history, and issue a protected release gate.
-- Never import from public GitHub or embed answer/rubric in browser/client assets.
