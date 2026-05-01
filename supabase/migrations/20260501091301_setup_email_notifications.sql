-- Create a function to handle new demo request notifications
CREATE OR REPLACE FUNCTION notify_admin_on_demo_request()
RETURNS TRIGGER AS $$
BEGIN
  -- Log the notification (can be extended to call Edge Function)
  -- For now, we'll create a notification record that can be processed
  INSERT INTO demo_request_notifications (email, case_study_id, notification_status)
  VALUES (NEW.email, NEW.case_study_id, 'pending')
  ON CONFLICT DO NOTHING;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create demo_request_notifications table if it doesn't exist
CREATE TABLE IF NOT EXISTS demo_request_notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT NOT NULL,
  case_study_id TEXT,
  notification_status TEXT DEFAULT 'pending' CHECK (notification_status IN ('pending', 'sent', 'failed')),
  sent_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT
);

-- Enable RLS on notifications table
ALTER TABLE demo_request_notifications ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to manage notifications
CREATE POLICY "Authenticated can manage notifications" 
ON demo_request_notifications FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Create trigger on demo_requests
DROP TRIGGER IF EXISTS on_demo_request_insert ON demo_requests;
CREATE TRIGGER on_demo_request_insert
AFTER INSERT ON demo_requests
FOR EACH ROW
EXECUTE FUNCTION notify_admin_on_demo_request();

-- Create index for notifications
CREATE INDEX IF NOT EXISTS idx_demo_request_notifications_status ON demo_request_notifications(notification_status);
CREATE INDEX IF NOT EXISTS idx_demo_request_notifications_created_at ON demo_request_notifications(created_at DESC);
