import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing from .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SupabaseBlogPost {
  id: string;
  created_at: string;
  updated_at: string | null;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'Engineering' | 'AI' | 'Design' | 'Strategy';
  image: string;
  read_time: string;
  published: boolean;
}

export interface CareerPosition {
  id: string;
  created_at: string;
  title: string;
  team: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  active: boolean;
}

export interface CareerApplication {
  id: string;
  created_at: string;
  position_id: string;
  full_name: string;
  email: string;
  portfolio_url: string;
  cover_letter: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
}

export interface DemoRequest {
  id: string;
  created_at: string;
  email: string;
  case_study_id: string | null;
  status: 'pending' | 'contacted' | 'completed';
}

export interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  service: string;
  budget: string | null;
  timeline: string | null;
  message: string;
  status: 'pending' | 'contacted' | 'qualified' | 'closed';
}

export interface NewsletterSubscriber {
  id: string;
  created_at: string;
  email: string;
  name: string | null;
  status: 'pending' | 'confirmed' | 'unsubscribed';
  confirmation_token: string | null;
  confirmed_at: string | null;
  unsubscribed_at: string | null;
  preferences: Record<string, any>;
  last_newsletter_sent_at: string | null;
}

export interface AdminActivityLog {
  id: string;
  created_at: string;
  activity_type: 'login' | 'logout' | 'blog_create' | 'blog_edit' | 'blog_delete' | 'career_create' | 'career_edit' | 'career_delete' | 'contact_submit' | 'demo_submit' | 'newsletter_subscribe' | 'career_apply';
  description: string;
  details: Record<string, any>;
  ip_address: string | null;
  user_agent: string | null;
}

export const logActivity = async (activityType: AdminActivityLog['activity_type'], description: string, details: Record<string, any> = {}) => {
  try {
    await supabase.from('admin_activity_logs').insert({
      activity_type: activityType,
      description,
      details,
    });
  } catch (error) {
    console.error('Failed to log activity:', error);
  }
};
