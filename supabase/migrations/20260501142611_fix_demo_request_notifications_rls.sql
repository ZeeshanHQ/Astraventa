-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_demo_request_insert ON demo_requests;
DROP FUNCTION IF EXISTS notify_admin_on_demo_request();

-- Recreate function with SECURITY DEFINER to bypass RLS
CREATE OR REPLACE FUNCTION notify_admin_on_demo_request()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  -- Log the notification
  INSERT INTO demo_request_notifications (email, case_study_id, notification_status)
  VALUES (NEW.email, NEW.case_study_id, 'pending')
  ON CONFLICT DO NOTHING;
  
  RETURN NEW;
END;
$$;

-- Recreate trigger
CREATE TRIGGER on_demo_request_insert
AFTER INSERT ON demo_requests
FOR EACH ROW
EXECUTE FUNCTION notify_admin_on_demo_request();

-- Update RLS policy to allow service role to insert
DROP POLICY IF EXISTS "Authenticated can manage notifications" ON demo_request_notifications;

CREATE POLICY "Service role can manage notifications" 
ON demo_request_notifications FOR ALL 
TO service_role 
USING (true)
WITH CHECK (true);

-- Also allow authenticated users to read
CREATE POLICY "Authenticated can read notifications" 
ON demo_request_notifications FOR SELECT 
TO authenticated 
USING (true);
