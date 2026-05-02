CREATE TABLE IF NOT EXISTS public.career_positions (
  id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  created_at timestamptz DEFAULT now() NOT NULL,
  title text NOT NULL,
  team text NOT NULL,
  location text NOT NULL,
  type text NOT NULL,
  description text NOT NULL,
  requirements text[] DEFAULT '{}',
  active boolean DEFAULT true
);

CREATE INDEX IF NOT EXISTS idx_career_positions_active ON public.career_positions(active);
CREATE INDEX IF NOT EXISTS idx_career_positions_created_at ON public.career_positions(created_at DESC);

ALTER TABLE public.career_positions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read career positions"
  ON public.career_positions
  FOR SELECT
  USING (true);

CREATE POLICY "Admin can insert career positions"
  ON public.career_positions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin can update career positions"
  ON public.career_positions
  FOR UPDATE
  USING (true);

CREATE POLICY "Admin can delete career positions"
  ON public.career_positions
  FOR DELETE
  USING (true);
