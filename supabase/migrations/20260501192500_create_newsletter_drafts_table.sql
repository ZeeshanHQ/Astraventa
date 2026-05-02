CREATE TABLE IF NOT EXISTS public.newsletter_drafts (
  id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  created_at timestamptz DEFAULT now() NOT NULL,
  subject text NOT NULL,
  content text NOT NULL,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'scheduled')),
  scheduled_at timestamptz,
  sent_at timestamptz,
  ai_generated boolean DEFAULT false,
  metadata jsonb DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_newsletter_drafts_created_at ON public.newsletter_drafts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_drafts_status ON public.newsletter_drafts(status);

ALTER TABLE public.newsletter_drafts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can read all newsletter drafts"
  ON public.newsletter_drafts
  FOR SELECT
  USING (true);

CREATE POLICY "Admin can insert newsletter drafts"
  ON public.newsletter_drafts
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin can update newsletter drafts"
  ON public.newsletter_drafts
  FOR UPDATE
  USING (true);

CREATE POLICY "Admin can delete newsletter drafts"
  ON public.newsletter_drafts
  FOR DELETE
  USING (true);
