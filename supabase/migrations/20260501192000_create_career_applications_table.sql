CREATE TABLE IF NOT EXISTS public.career_applications (
  id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  created_at timestamptz DEFAULT now() NOT NULL,
  position_id text NOT NULL REFERENCES public.career_positions(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  portfolio_url text,
  cover_letter text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'shortlisted', 'rejected')),
  resume_url text
);

CREATE INDEX IF NOT EXISTS idx_career_applications_position_id ON public.career_applications(position_id);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON public.career_applications(created_at DESC);

ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read career applications"
  ON public.career_applications
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert career applications"
  ON public.career_applications
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin can update career applications"
  ON public.career_applications
  FOR UPDATE
  USING (true);

-- Add trigger for logging career applications
DROP TRIGGER IF EXISTS on_career_application_insert ON public.career_applications;
CREATE TRIGGER on_career_application_insert
  AFTER INSERT ON public.career_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.log_career_application();
