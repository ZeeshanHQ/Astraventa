CREATE TABLE IF NOT EXISTS public.infrastructure_monitoring (
  id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  created_at timestamptz DEFAULT now() NOT NULL,
  analysis_date date DEFAULT CURRENT_DATE NOT NULL,
  system_health jsonb DEFAULT '{}'::jsonb,
  database_status jsonb DEFAULT '{}'::jsonb,
  activity_summary jsonb DEFAULT '{}'::jsonb,
  issues_detected jsonb DEFAULT '[]'::jsonb,
  recommendations jsonb DEFAULT '[]'::jsonb,
  warnings jsonb DEFAULT '[]'::jsonb,
  ai_analysis text,
  model_used text
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_infrastructure_monitoring_date ON public.infrastructure_monitoring(analysis_date);
CREATE INDEX IF NOT EXISTS idx_infrastructure_monitoring_created_at ON public.infrastructure_monitoring(created_at DESC);

ALTER TABLE public.infrastructure_monitoring ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can read all infrastructure monitoring"
  ON public.infrastructure_monitoring
  FOR SELECT
  USING (true);

CREATE POLICY "Admin can insert infrastructure monitoring"
  ON public.infrastructure_monitoring
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin can update infrastructure monitoring"
  ON public.infrastructure_monitoring
  FOR UPDATE
  USING (true);

CREATE POLICY "Admin can delete infrastructure monitoring"
  ON public.infrastructure_monitoring
  FOR DELETE
  USING (true);
