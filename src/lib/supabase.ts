import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing from .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
