CREATE TABLE IF NOT EXISTS public.admin_activity_logs (
  id text PRIMARY KEY DEFAULT gen_random_uuid()::text,
  created_at timestamptz DEFAULT now() NOT NULL,
  activity_type text NOT NULL CHECK (activity_type IN ('login', 'logout', 'blog_create', 'blog_edit', 'blog_delete', 'career_create', 'career_edit', 'career_delete', 'contact_submit', 'demo_submit', 'newsletter_subscribe', 'career_apply')),
  description text NOT NULL,
  details jsonb DEFAULT '{}'::jsonb,
  ip_address text,
  user_agent text
);

CREATE INDEX IF NOT EXISTS idx_admin_activity_logs_created_at ON public.admin_activity_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_activity_logs_activity_type ON public.admin_activity_logs(activity_type);

ALTER TABLE public.admin_activity_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can read all activity logs"
  ON public.admin_activity_logs
  FOR SELECT
  USING (true);

CREATE POLICY "System can insert activity logs"
  ON public.admin_activity_logs
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "No one can delete activity logs"
  ON public.admin_activity_logs
  FOR DELETE
  USING (false);

CREATE POLICY "No one can update activity logs"
  ON public.admin_activity_logs
  FOR UPDATE
  USING (false);

CREATE OR REPLACE FUNCTION public.cleanup_old_logs()
RETURNS void AS $$
BEGIN
  DELETE FROM public.admin_activity_logs
  WHERE created_at < now() - interval '24 hours';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers for automatic logging of user submissions
CREATE OR REPLACE FUNCTION public.log_contact_submission()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.admin_activity_logs (activity_type, description, details)
  VALUES (
    'contact_submit',
    'New contact form submitted by ' || NEW.name,
    jsonb_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'service', NEW.service,
      'company', NEW.company
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.log_demo_request()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.admin_activity_logs (activity_type, description, details)
  VALUES (
    'demo_submit',
    'New demo request from ' || NEW.email,
    jsonb_build_object(
      'email', NEW.email,
      'case_study_id', NEW.case_study_id
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.log_newsletter_subscription()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.admin_activity_logs (activity_type, description, details)
  VALUES (
    'newsletter_subscribe',
    'New newsletter signup: ' || NEW.email,
    jsonb_build_object(
      'email', NEW.email,
      'name', NEW.name
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.log_career_application()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.admin_activity_logs (activity_type, description, details)
  VALUES (
    'career_apply',
    'New career application from ' || NEW.full_name,
    jsonb_build_object(
      'name', NEW.full_name,
      'email', NEW.email,
      'position_id', NEW.position_id
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_contact_submission_insert ON public.contact_submissions;
CREATE TRIGGER on_contact_submission_insert
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.log_contact_submission();

DROP TRIGGER IF EXISTS on_demo_request_insert ON public.demo_requests;
CREATE TRIGGER on_demo_request_insert
  AFTER INSERT ON public.demo_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.log_demo_request();

DROP TRIGGER IF EXISTS on_newsletter_subscriber_insert ON public.newsletter_subscribers;
CREATE TRIGGER on_newsletter_subscriber_insert
  AFTER INSERT ON public.newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION public.log_newsletter_subscription();

DO $$
BEGIN
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'career_applications') THEN
    DROP TRIGGER IF EXISTS on_career_application_insert ON public.career_applications;
    CREATE TRIGGER on_career_application_insert
      AFTER INSERT ON public.career_applications
      FOR EACH ROW
      EXECUTE FUNCTION public.log_career_application();
  END IF;
END $$;

-- Schedule cleanup to run every hour (requires cron extension)
-- SELECT cron.schedule('cleanup-activity-logs', '0 * * * *', 'SELECT public.cleanup_old_logs()');
