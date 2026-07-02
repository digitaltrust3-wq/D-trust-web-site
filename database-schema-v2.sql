-- ============================================================
-- DIGITAL TRUST SOLUTIONS - DATABASE SCHEMA V2 (CLEAN START)
-- ============================================================

-- ============================================================
-- TABLE: contact_requests
-- Purpose: Store all contact form submissions
-- ============================================================
CREATE TABLE IF NOT EXISTS contact_requests (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  session_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  budget TEXT,
  message TEXT,
  notification_ok BOOLEAN DEFAULT FALSE,
  welcome_ok BOOLEAN DEFAULT FALSE,
  metadata JSONB DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- TABLE: leads
-- Purpose: Store lead information from forms and chat
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  session_id TEXT NOT NULL,
  source TEXT NOT NULL, -- 'contact_form', 'chatbot', etc
  status TEXT DEFAULT 'new', -- 'new', 'contacted', 'converted', etc
  name TEXT,
  email TEXT,
  phone TEXT,
  service TEXT,
  budget TEXT,
  urgency TEXT DEFAULT 'Normal',
  message TEXT,
  transcript TEXT,
  metadata JSONB DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- TABLE: chat_sessions
-- Purpose: Track individual chat sessions
-- ============================================================
CREATE TABLE IF NOT EXISTS chat_sessions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  session_id TEXT NOT NULL UNIQUE,
  page TEXT,
  language TEXT DEFAULT 'es',
  user_agent TEXT,
  metadata JSONB DEFAULT NULL,
  last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- TABLE: chat_messages
-- Purpose: Store individual chat messages
-- ============================================================
CREATE TABLE IF NOT EXISTS chat_messages (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  session_id TEXT NOT NULL,
  sender TEXT NOT NULL, -- 'cliente', 'bot', 'admin'
  message TEXT NOT NULL,
  page TEXT,
  language TEXT DEFAULT 'es',
  metadata JSONB DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- TABLE: interaction_events
-- Purpose: Track all user interactions (form submissions, chat messages, etc)
-- ============================================================
CREATE TABLE IF NOT EXISTS interaction_events (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL, -- 'contact_form', 'chat_message', 'chat_lead_confirmed', etc
  page TEXT,
  user_agent TEXT,
  language TEXT DEFAULT 'es',
  payload JSONB DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- INDEXES for performance
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_contact_requests_session_id ON contact_requests(session_id);
CREATE INDEX IF NOT EXISTS idx_contact_requests_email ON contact_requests(email);
CREATE INDEX IF NOT EXISTS idx_leads_session_id ON leads(session_id);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_session_id ON chat_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_interaction_events_session_id ON interaction_events(session_id);
CREATE INDEX IF NOT EXISTS idx_interaction_events_type ON interaction_events(event_type);

-- ============================================================
-- ENABLE ROW LEVEL SECURITY (for now: DISABLE for testing)
-- ============================================================
ALTER TABLE contact_requests DISABLE ROW LEVEL SECURITY;
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE interaction_events DISABLE ROW LEVEL SECURITY;

-- ============================================================
-- GRANT PERMISSIONS to anon user (public access for forms)
-- ============================================================
GRANT SELECT, INSERT, UPDATE ON contact_requests TO anon;
GRANT SELECT, INSERT, UPDATE ON leads TO anon;
GRANT SELECT, INSERT, UPDATE ON chat_sessions TO anon;
GRANT SELECT, INSERT ON chat_messages TO anon;
GRANT SELECT, INSERT ON interaction_events TO anon;
