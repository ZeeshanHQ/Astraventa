-- Add notification_sent field to demo_requests
ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS notification_sent BOOLEAN DEFAULT FALSE;
ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS notification_sent_at TIMESTAMP WITH TIME ZONE;

-- Drop the trigger and function
DROP TRIGGER IF EXISTS on_demo_request_insert ON demo_requests;
DROP FUNCTION IF EXISTS notify_admin_on_demo_request();

-- Drop the demo_request_notifications table
DROP TABLE IF EXISTS demo_request_notifications;

-- Create index for querying unsent requests
CREATE INDEX IF NOT EXISTS idx_demo_requests_notification_sent ON demo_requests(notification_sent) WHERE notification_sent = FALSE;