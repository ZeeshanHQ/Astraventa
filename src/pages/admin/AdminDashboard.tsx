import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Edit2, 
  Eye, 
  Save, 
  X, 
  Lock, 
  Database, 
  ChevronRight,
  Zap,
  Activity,
  ShieldCheck,
  Search,
  ArrowRight,
  TrendingUp,
  Cpu,
  Globe,
  HardDrive,
  Terminal,
  Server,
  Network,
  Maximize2,
  RefreshCcw,
  Shield,
  Layers,
  Users,
  Briefcase,
  Mail,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  Brain,
  Send,
  Trash2,
  Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogService, BlogPost } from "@/lib/blog-service";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router-dom";
import { AdminLayout, AdminNotification } from "@/components/admin/AdminLayout";
import { cn } from "@/lib/utils";
import { supabase, supabaseAdmin, CareerPosition, CareerApplication, ContactSubmission, DemoRequest, NewsletterSubscriber, AdminActivityLog, logActivity } from "@/lib/supabase";

const ADMIN_KEY = "astra2024";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);
  const [positions, setPositions] = useState<CareerPosition[]>([]);
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [newsletterSubscribers, setNewsletterSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [newsletterDrafts, setNewsletterDrafts] = useState<any[]>([]);
  const [isCreatingEmail, setIsCreatingEmail] = useState(false);
  const [infrastructureData, setInfrastructureData] = useState<any[]>([]);
  const [lastAnalysis, setLastAnalysis] = useState<any>(null);
  const [deleteAnalysisId, setDeleteAnalysisId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingEmail, setEditingEmail] = useState<any>(null);
  const [isNewPosition, setIsNewPosition] = useState(false);
  const [editingPosition, setEditingPosition] = useState<Partial<CareerPosition> | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";
  const [sendBlogNotification, setSendBlogNotification] = useState(false);
  const [sendCareerNotification, setSendCareerNotification] = useState(false);
  const [notificationAudience, setNotificationAudience] = useState<'all' | 'newsletter' | 'leads' | 'applicants'>('all');
  const [activityLogs, setActivityLogs] = useState<AdminActivityLog[]>([]);

  const formatTime = (value: string) => {
    const diff = Date.now() - new Date(value).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return new Date(value).toLocaleDateString();
  };

  const notifications: AdminNotification[] = [
    ...contactSubmissions.map((item) => ({
      id: `contact-${item.id}`,
      type: "contact" as const,
      title: "New contact form",
      description: `${item.name} asked about ${item.service}`,
      time: formatTime(item.created_at),
      created_at: item.created_at,
    })),
    ...demoRequests.map((item) => ({
      id: `demo-${item.id}`,
      type: "demo" as const,
      title: "New demo request",
      description: item.case_study_id ? `${item.email} requested ${item.case_study_id}` : `${item.email} requested a demo`,
      time: formatTime(item.created_at),
      created_at: item.created_at,
    })),
    ...newsletterSubscribers.map((item) => ({
      id: `newsletter-${item.id}`,
      type: "newsletter" as const,
      title: "Newsletter signup",
      description: `${item.email} is ${item.status}`,
      time: formatTime(item.created_at),
      created_at: item.created_at,
    })),
    ...applications.map((item) => ({
      id: `career-${item.id}`,
      type: "career" as const,
      title: "New career application",
      description: `${item.full_name} applied for a role`,
      time: formatTime(item.created_at),
      created_at: item.created_at,
    })),
  ]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 20);

  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === "content" || activeTab === "overview") {
        fetchBlogPosts();
      }
      fetchCareersData();
      fetchLeadsData();
      fetchActivityLogs();
      fetchInfrastructureData();
    }
  }, [isAuthenticated, activeTab]);

  // Fetch leads data when switching to leads tab
  useEffect(() => {
    if (isAuthenticated && activeTab === "leads") {
      fetchLeadsData();
    }
  }, [activeTab, isAuthenticated]);

  const fetchBlogPosts = async () => {
    const data = await blogService.getPostsFromSupabase();
    setPosts(data);
  };

  const fetchActivityLogs = async () => {
    const { data } = await supabaseAdmin
      .from('admin_activity_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    if (data) {
      setActivityLogs(data);
    }
  };

  const sendBroadcast = async (kind: 'blog' | 'career', item: BlogPost | Partial<CareerPosition>) => {
    const { data, error } = await supabaseAdmin.functions.invoke('send-admin-broadcast', {
      body: {
        kind,
        audience: notificationAudience,
        item,
      },
    });

    if (error) throw error;
    return data;
  };

  const fetchCareersData = async () => {
    const { data: posData } = await supabaseAdmin.from('career_positions').select('*').order('created_at', { ascending: false });
    const { data: appData } = await supabaseAdmin.from('career_applications').select('*').order('created_at', { ascending: false });
    if (posData) setPositions(posData);
    if (appData) setApplications(appData);
  };

  const fetchLeadsData = async () => {
    try {
      console.log('Starting fetchLeadsData...');
      const { data: contactData, error: contactError } = await supabaseAdmin.from('contact_submissions').select('*').order('created_at', { ascending: false });
      if (contactError) {
        console.error('Error fetching contact submissions:', contactError);
        toast.error('Failed to fetch contact submissions: ' + contactError.message);
      } else {
        console.log('Contact submissions fetched:', contactData?.length, contactData);
        setContactSubmissions(contactData || []);
      }

      const { data: demoData, error: demoError } = await supabaseAdmin.from('demo_requests').select('*').order('created_at', { ascending: false });
      if (demoError) console.error('Error fetching demo requests:', demoError);
      else {
        console.log('Demo requests fetched:', demoData?.length);
        setDemoRequests(demoData || []);
      }

      const { data: newsletterData, error: newsletterError } = await supabaseAdmin.from('newsletter_subscribers').select('*').order('created_at', { ascending: false });
      if (newsletterError) console.error('Error fetching newsletter subscribers:', newsletterError);
      else {
        console.log('Newsletter subscribers fetched:', newsletterData?.length);
        setNewsletterSubscribers(newsletterData || []);
      }

      const { data: draftsData, error: draftsError } = await supabaseAdmin.from('newsletter_drafts').select('*').order('created_at', { ascending: false });
      if (draftsError) console.error('Error fetching newsletter drafts:', draftsError);
      else {
        console.log('Newsletter drafts fetched:', draftsData?.length);
        setNewsletterDrafts(draftsData || []);
      }
    } catch (error) {
      console.error('Error in fetchLeadsData:', error);
      toast.error('Failed to fetch leads data: ' + error.message);
    }
  };

  const fetchInfrastructureData = async () => {
    try {
      const { data, error } = await supabaseAdmin.from('infrastructure_monitoring').select('*').order('created_at', { ascending: false }).limit(30);
      if (error) {
        console.error('Error fetching infrastructure data:', error);
        return;
      }
      console.log('Infrastructure data fetched:', data?.length);
      setInfrastructureData(data || []);
      setLastAnalysis(data?.[0] || null);
    } catch (error) {
      console.error('Error in fetchInfrastructureData:', error);
    }
  };

  const handleRunAnalysis = async () => {
    toast.loading("Running AI infrastructure analysis...");
    try {
      const { data, error } = await supabaseAdmin.functions.invoke('analyze-infrastructure');
      if (error) throw error;
      toast.success("Infrastructure analysis completed");
      fetchInfrastructureData();
    } catch (error) {
      toast.error("Failed to run analysis: " + error.message);
    }
  };

  const handleGenerateMonthlyReport = async () => {
    toast.loading("Generating monthly report...");
    try {
      const { data, error } = await supabaseAdmin.functions.invoke('generate-monthly-report', {
        body: { month: new Date().getMonth() + 1, year: new Date().getFullYear() }
      });
      if (error) throw error;
      toast.success("Monthly report sent to admin email");
    } catch (error) {
      toast.error("Failed to generate report: " + error.message);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_KEY) {
      setIsAuthenticated(true);
      logActivity('login', 'Admin logged in to dashboard');
      toast.success("Welcome back.");
    } else {
      toast.error("Invalid admin password.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    logActivity('logout', 'Admin logged out of dashboard');
    toast.info("Signed out.");
  };

  const handleSavePosition = async () => {
    if (editingPosition) {
      const { error } = await supabaseAdmin
        .from('career_positions')
        .upsert({
          ...editingPosition,
          id: isNewPosition ? undefined : editingPosition.id,
          created_at: undefined // Let DB handle it
        });

      if (error) {
        toast.error("Could not save position: " + error.message);
      } else {
        if (isNewPosition) {
          logActivity('career_create', `Created new career role: ${editingPosition.title}`, { title: editingPosition.title, team: editingPosition.team });
        } else {
          logActivity('career_edit', `Edited career role: ${editingPosition.title}`, { title: editingPosition.title });
        }
        if (isNewPosition && sendCareerNotification) {
          await sendBroadcast('career', editingPosition);
        }
        toast.success("Position saved.");
        setEditingPosition(null);
        setIsNewPosition(false);
        fetchCareersData();
      }
    }
  };

  const renderCareers = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter font-display uppercase">Careers</h2>
          <div className="flex items-center gap-4 mt-6">
             <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] font-semibold text-blue-400 uppercase tracking-widest font-mono">
                {positions.length} POSITIONS
             </div>
             <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[10px] font-semibold text-emerald-500 uppercase tracking-widest font-mono">
                {applications.length} APPLICATIONS
             </div>
          </div>
        </div>
        <Button onClick={() => { setEditingPosition({ title: '', team: '', location: '', type: '', description: '', requirements: [], active: true }); setIsNewPosition(true); }} className="h-12 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 transition-all font-display">
          <Plus className="w-4 h-4" /> Add Position
        </Button>
      </div>

      {/* Positions */}
      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
        <div className="p-10 border-b border-white/5">
          <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-3 font-display">
            <Briefcase className="w-4 h-4 text-blue-400" /> Job Positions
          </h3>
        </div>
        {positions.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-white/30" />
            </div>
            <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-3 font-display">No positions</h3>
            <p className="text-[11px] text-white/50 max-w-md mx-auto">Job positions will appear here when you create them.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {positions.map((position) => (
              <div key={position.id} className="p-8 hover:bg-white/[0.01] transition-colors">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[14px] font-semibold text-white tracking-wider uppercase font-display">{position.title}</div>
                      <span className={cn(
                        "text-[8px] font-semibold uppercase tracking-widest px-2 py-1 rounded border font-mono",
                        position.active ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-red-500/10 border-red-500/20 text-red-500'
                      )}>
                        {position.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="text-[10px] text-white/50 font-mono uppercase tracking-widest mb-2">{position.team} • {position.location} • {position.type}</div>
                    <p className="text-[11px] text-white/60 line-clamp-2">{position.description}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-white hover:text-blue-400 transition-all" onClick={() => { setEditingPosition(position); setIsNewPosition(false); }}>
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-white hover:text-red-500 transition-all" onClick={async () => {
                      const { error } = await supabaseAdmin.from('career_positions').delete().eq('id', position.id);
                      if (error) toast.error("Failed to delete position");
                      else {
                        toast.success("Position deleted");
                        fetchCareersData();
                      }
                    }}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Applications */}
      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
        <div className="p-10 border-b border-white/5">
          <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-3 font-display">
            <Users className="w-4 h-4 text-emerald-400" /> Applications
          </h3>
        </div>
        {applications.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white/30" />
            </div>
            <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-3 font-display">No applications</h3>
            <p className="text-[11px] text-white/50 max-w-md mx-auto">Applications will appear here when candidates apply.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {applications.map((application) => (
              <div key={application.id} className="p-8 hover:bg-white/[0.01] transition-colors">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[14px] font-semibold text-white tracking-wider uppercase font-display">{application.full_name}</div>
                      <span className={cn(
                        "text-[8px] font-semibold uppercase tracking-widest px-2 py-1 rounded border font-mono",
                        application.status === 'pending' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                        application.status === 'reviewed' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                        application.status === 'shortlisted' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                        'bg-red-500/10 border-red-500/20 text-red-500'
                      )}>
                        {application.status}
                      </span>
                    </div>
                    <a href={`mailto:${application.email}`} className="text-[11px] font-semibold text-blue-400 hover:text-blue-400/80 transition-colors mb-2 inline-block">
                      {application.email}
                    </a>
                    {application.portfolio_url && (
                      <a href={application.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/50 ml-4 hover:text-white/80 transition-colors">
                        Portfolio →
                      </a>
                    )}
                    <p className="text-[11px] text-white/60 line-clamp-2 mt-2">{application.cover_letter}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderNewsletter = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter font-display uppercase">Newsletter Campaigns</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-[9px] font-semibold text-blue-400 uppercase tracking-widest font-mono">
                {newsletterDrafts.length} Drafts
             </div>
             <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] font-semibold text-emerald-500 uppercase tracking-widest font-mono">
                {newsletterSubscribers.length} Subscribers
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white font-mono text-[9px] uppercase tracking-[0.3em]">AI-powered email campaigns</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => {
            setEditingEmail({
              subject: '',
              content: '',
              status: 'draft',
              ai_generated: true,
              metadata: { system_analysis: true }
            });
            setIsCreatingEmail(true);
            toast.info("AI analyzing system data to generate newsletter...");
          }} className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] font-display border border-blue-400">
            <Sparkles className="w-5 h-5" /> AI Generate
          </Button>
          <Button onClick={() => {
            setEditingEmail({
              subject: '',
              content: '',
              status: 'draft',
              ai_generated: false
            });
            setIsCreatingEmail(true);
          }} className="h-14 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[11px] flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] font-display">
            <Plus className="w-5 h-5" /> Custom Email
          </Button>
        </div>
      </div>

      {/* AI System Analysis Card */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-[3.5rem] p-8 backdrop-blur-md">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
              <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] font-display">AI System Analysis</h3>
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed mb-6">
              AI analyzes your admin dashboard, database conditions, recent activities, and system performance to generate intelligent newsletter content tailored to your audience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Blog Posts</div>
                <div className="text-[20px] font-bold text-white">{posts.length}</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Open Jobs</div>
                <div className="text-[20px] font-bold text-white">{positions.length}</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">New Leads</div>
                <div className="text-[20px] font-bold text-white">{contactSubmissions.length + demoRequests.length}</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">System Status</div>
                <div className="text-[20px] font-bold text-emerald-400">Healthy</div>
              </div>
            </div>
          </div>
          <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-3 transition-all font-display border border-blue-400 whitespace-nowrap">
            <Zap className="w-5 h-5" /> Analyze & Generate
          </Button>
        </div>
      </div>

      {/* Newsletter Drafts */}
      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-3 font-display">
            <Mail className="w-4 h-4 text-blue-400" /> Email Drafts
          </h3>
          <div className="text-[9px] text-white font-mono">{newsletterDrafts.length} Total</div>
        </div>
        {newsletterDrafts.length === 0 ? (
          <div className="p-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white/30" />
            </div>
            <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-3 font-display">No drafts yet</h3>
            <p className="text-[11px] text-white/50 max-w-md mx-auto">Use AI to generate newsletter content or create custom emails to engage your audience.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {newsletterDrafts.map((draft) => (
              <div key={draft.id} className="p-8 hover:bg-white/[0.01] transition-colors group">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={cn(
                        "text-[8px] font-semibold uppercase tracking-widest px-2 py-1 rounded border font-mono",
                        draft.status === 'draft' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                        draft.status === 'sent' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                        'bg-blue-500/10 border-blue-500/20 text-blue-500'
                      )}>
                        {draft.status}
                      </span>
                      {draft.ai_generated && (
                        <span className="flex items-center gap-1.5 text-[8px] text-blue-400 uppercase tracking-widest font-mono">
                          <Sparkles className="w-3 h-3" /> AI Generated
                        </span>
                      )}
                    </div>
                    <h4 className="text-[13px] font-semibold text-white uppercase tracking-[0.05em] mb-2 font-display">{draft.subject}</h4>
                    <p className="text-[11px] text-white/60 line-clamp-2">{draft.content}</p>
                    <div className="flex items-center gap-4 mt-4 text-[9px] text-white/40 font-mono uppercase tracking-widest">
                      <span>{new Date(draft.created_at).toLocaleDateString()}</span>
                      {draft.scheduled_at && <span>Scheduled: {new Date(draft.scheduled_at).toLocaleString()}</span>}
                      {draft.sent_at && <span>Sent: {new Date(draft.sent_at).toLocaleString()}</span>}
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-white hover:text-blue-400 transition-all" onClick={() => { setEditingEmail(draft); setIsCreatingEmail(true); }}>
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-white hover:text-emerald-500 transition-all" onClick={async () => {
                      const { error } = await supabaseAdmin.from('newsletter_drafts').update({ status: 'sent', sent_at: new Date().toISOString() }).eq('id', draft.id);
                      if (error) toast.error("Failed to mark as sent");
                      else {
                        toast.success("Email marked as sent");
                        fetchLeadsData();
                      }
                    }}>
                      <Send className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-white hover:text-red-500 transition-all" onClick={async () => {
                      const { error } = await supabaseAdmin.from('newsletter_drafts').delete().eq('id', draft.id);
                      if (error) toast.error("Failed to delete draft");
                      else {
                        toast.success("Draft deleted");
                        fetchLeadsData();
                      }
                    }}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderInfrastructure = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter font-display uppercase">Infrastructure Monitoring</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-[9px] font-semibold text-blue-400 uppercase tracking-widest font-mono">
                {infrastructureData.length} Analyses
             </div>
             {lastAnalysis && (
               <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] font-semibold text-emerald-500 uppercase tracking-widest font-mono">
                Last: {new Date(lastAnalysis.created_at).toLocaleDateString()}
               </div>
             )}
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white font-mono text-[9px] uppercase tracking-[0.3em]">AI-powered infrastructure analysis</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button onClick={handleRunAnalysis} className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] font-display border border-blue-400">
            <Brain className="w-5 h-5" /> Run Analysis
          </Button>
          <Button onClick={handleGenerateMonthlyReport} className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] font-display border border-emerald-400">
            <Mail className="w-5 h-5" /> Monthly Report
          </Button>
        </div>
      </div>

      {/* Last Analysis Overview */}
      {lastAnalysis ? (
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-[3.5rem] p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-blue-400" />
            <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] font-display">Latest Analysis</h3>
            <span className="text-[9px] text-white/50 font-mono">{new Date(lastAnalysis.created_at).toLocaleString()}</span>
          </div>
          
          {/* System Health Score */}
          <div className={cn(
            "p-6 rounded-2xl border mb-6",
            lastAnalysis.system_health?.status === 'healthy' ? 'bg-emerald-500/10 border-emerald-500/20' :
            lastAnalysis.system_health?.status === 'warning' ? 'bg-amber-500/10 border-amber-500/20' :
            'bg-red-500/10 border-red-500/20'
          )}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white">System Health</h4>
              <span className={cn(
                "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                lastAnalysis.system_health?.status === 'healthy' ? 'bg-emerald-500/20 text-emerald-400' :
                lastAnalysis.system_health?.status === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                'bg-red-500/20 text-red-400'
              )}>
                {lastAnalysis.system_health?.status || 'Unknown'}
              </span>
            </div>
            <div className="flex items-end gap-4">
              <div className="text-[48px] font-bold leading-none text-white">{lastAnalysis.system_health?.score || 0}</div>
              <div className="text-[14px] text-white/60 pb-2">/ 100 Score</div>
            </div>
            <p className="text-[11px] text-white/60 mt-3 leading-relaxed">{lastAnalysis.system_health?.details || 'No details available'}</p>
          </div>

          {/* Issues Detected */}
          {lastAnalysis.issues_detected && lastAnalysis.issues_detected.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white mb-4">Issues Detected</h4>
              <div className="space-y-3">
                {lastAnalysis.issues_detected.map((issue: any, i: number) => (
                  <div key={i} className={cn(
                    "p-4 rounded-xl border",
                    issue.severity === 'high' ? 'bg-red-500/10 border-red-500/20' :
                    issue.severity === 'medium' ? 'bg-amber-500/10 border-amber-500/20' :
                    'bg-blue-500/10 border-blue-500/20'
                  )}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
                        issue.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                        issue.severity === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-blue-500/20 text-blue-400'
                      )}>
                        {issue.severity}
                      </span>
                      <span className="text-[10px] text-white/60 uppercase tracking-wider">{issue.category}</span>
                    </div>
                    <p className="text-[11px] text-white/80">{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {lastAnalysis.recommendations && lastAnalysis.recommendations.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white mb-4">Recommendations</h4>
              <div className="space-y-3">
                {lastAnalysis.recommendations.map((rec: any, i: number) => (
                  <div key={i} className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
                        rec.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        rec.priority === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-blue-500/20 text-blue-400'
                      )}>
                        {rec.priority} Priority
                      </span>
                    </div>
                    <p className="text-[11px] text-white/80 mb-2">{rec.action}</p>
                    <p className="text-[10px] text-white/50 italic">{rec.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Analysis Summary */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white mb-4">AI Analysis Summary</h4>
            <p className="text-[11px] text-white/70 leading-relaxed">{lastAnalysis.ai_analysis || 'No analysis available'}</p>
          </div>
        </div>
      ) : (
        <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <Cpu className="w-8 h-8 text-white/30" />
          </div>
          <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-3 font-display">No analysis yet</h3>
          <p className="text-[11px] text-white/50 max-w-md mx-auto mb-6">Run your first AI infrastructure analysis to monitor system health, detect issues, and get recommendations.</p>
          <Button onClick={handleRunAnalysis} className="h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-3 transition-all font-display border border-blue-400">
            <Brain className="w-5 h-5" /> Run First Analysis
          </Button>
        </div>
      )}

      {/* Analysis History */}
      {infrastructureData.length > 0 && (
        <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
          <div className="p-8 border-b border-white/5">
            <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-3 font-display">
              <Activity className="w-4 h-4 text-blue-400" /> Recent AI Reports
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6">
            {infrastructureData.slice(0, 6).map((analysis) => (
              <div key={analysis.id} className="p-5 rounded-2xl bg-black/30 border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className={cn(
                      "text-[8px] font-semibold uppercase tracking-widest px-2 py-1 rounded border font-mono",
                      analysis.system_health?.status === 'healthy' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                      analysis.system_health?.status === 'warning' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                      'bg-red-500/10 border-red-500/20 text-red-500'
                    )}>
                      {analysis.system_health?.status || 'Unknown'}
                    </span>
                    <div className="text-[9px] text-white/40 font-mono mt-2">{new Date(analysis.created_at).toLocaleString()}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[22px] font-bold text-white leading-none">{analysis.system_health?.score || 0}</div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 text-white hover:text-red-500 transition-all"
                      onClick={() => {
                        setDeleteAnalysisId(analysis.id);
                        setShowDeleteModal(true);
                      }}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed line-clamp-3">{analysis.ai_analysis || 'No analysis'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-black border border-white/10 rounded-[2rem] p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                <Trash2 className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-[18px] font-semibold text-white text-center uppercase tracking-[0.2em] mb-3 font-display">Delete Analysis?</h3>
              <p className="text-[12px] text-white/60 text-center mb-8 leading-relaxed">This will permanently delete this infrastructure analysis from the database. This action cannot be undone.</p>
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeleteAnalysisId(null);
                  }}
                  className="flex-1 h-12 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl uppercase tracking-[0.15em] text-[11px] border border-white/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={async () => {
                    if (deleteAnalysisId) {
                      const { error } = await supabaseAdmin.from('infrastructure_monitoring').delete().eq('id', deleteAnalysisId);
                      if (error) {
                        toast.error("Failed to delete analysis");
                      } else {
                        toast.success("Analysis deleted");
                        await fetchInfrastructureData();
                      }
                    }
                    setShowDeleteModal(false);
                    setDeleteAnalysisId(null);
                  }}
                  className="flex-1 h-12 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl uppercase tracking-[0.15em] text-[11px] border border-red-400"
                >
                  Delete
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  const handleSave = async () => {
    if (editingPost) {
      await blogService.savePostToSupabase(editingPost);
      if (isNewPost) {
        logActivity('blog_create', `Created new blog post: ${editingPost.title}`, { title: editingPost.title, category: editingPost.category });
      } else {
        logActivity('blog_edit', `Edited blog post: ${editingPost.title}`, { title: editingPost.title });
      }
      if (isNewPost && editingPost.published && sendBlogNotification) {
        await sendBroadcast('blog', editingPost);
      }
      await fetchBlogPosts();
      setEditingPost(null);
      setIsNewPost(false);
      setSendBlogNotification(false);
      toast.success("Post saved.");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const post = posts.find(p => p.id === id);
      await blogService.deletePostFromSupabase(id);
      if (post) {
        logActivity('blog_delete', `Deleted blog post: ${post.title}`, { title: post.title });
      }
      await fetchBlogPosts();
      toast.info("Post deleted.");
    }
  };

  const startNewPost = () => {
    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title: "",
      excerpt: "",
      content: "",
      author: "Admin",
      date: new Date().toISOString().split('T')[0],
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1518433278981-955039b10c02?q=80&w=1970",
      readTime: "5 min",
      published: true
    };
    setEditingPost(newPost);
    setIsNewPost(true);
    setSendBlogNotification(false);
  };

  // --- RENDERING HELPERS ---

  // --- RENDERING HELPERS ---

  const renderOverview = () => {
    const pendingContacts = contactSubmissions.filter((item) => item.status === 'pending').length;
    const pendingDemos = demoRequests.filter((item) => item.status === 'pending').length;
    const confirmedSubscribers = newsletterSubscribers.filter((item) => item.status === 'confirmed').length;
    const pendingApplications = applications.filter((item) => item.status === 'pending').length;

    return (
      <div className="space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl font-semibold text-white tracking-tight font-display">Dashboard Overview</h2>
            <p className="text-sm text-white/80 mt-3 max-w-2xl">
              Real website activity from Supabase. No sample metrics, no system noise.
            </p>
          </div>
          <Button onClick={() => { fetchLeadsData(); fetchCareersData(); }} className="h-11 px-5 rounded-xl bg-white text-black hover:bg-white/90 text-xs">
            Refresh data
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { icon: Mail, label: "Contact forms", value: contactSubmissions.length, note: `${pendingContacts} pending`, color: "text-blue-400" },
            { icon: Zap, label: "Demo requests", value: demoRequests.length, note: `${pendingDemos} pending`, color: "text-blue-400" },
            { icon: Users, label: "Newsletter", value: newsletterSubscribers.length, note: `${confirmedSubscribers} confirmed`, color: "text-emerald-500" },
            { icon: Briefcase, label: "Applications", value: applications.length, note: `${pendingApplications} pending`, color: "text-amber-500" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-8">
                <div className={cn("w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center", stat.color)}>
                  <stat.icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] text-white/80">{stat.note}</span>
              </div>
              <div className="text-4xl font-semibold text-white tracking-tight">{stat.value}</div>
              <div className="text-sm text-white mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 rounded-2xl bg-white/[0.025] border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Latest leads</h3>
                <p className="text-xs text-white/70 mt-1">Contact forms, demo requests, and newsletter signups.</p>
              </div>
              <Button variant="ghost" onClick={() => setSearchParams({ tab: "leads" })} className="h-9 px-4 rounded-lg border border-white/10 text-white hover:bg-white/10">
                View leads
              </Button>
            </div>
            <div className="divide-y divide-white/10">
              {notifications.filter((item) => item.type !== "career").slice(0, 6).map((item) => (
                <div key={item.id} className="p-5 flex items-start justify-between gap-6 hover:bg-white/[0.03] transition-colors">
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-white/75 mt-1">{item.description}</div>
                  </div>
                  <div className="text-[11px] text-white/70 whitespace-nowrap">{item.time}</div>
                </div>
              ))}
              {notifications.filter((item) => item.type !== "career").length === 0 && (
                <div className="p-10 text-center text-sm text-white/70">No lead activity yet.</div>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.025] border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-base font-semibold text-white">Career applications</h3>
              <p className="text-xs text-white/70 mt-1">Newest candidates from the careers page.</p>
            </div>
            <div className="divide-y divide-white/10">
              {applications.slice(0, 5).map((item) => (
                <div key={item.id} className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold text-white">{item.full_name}</div>
                    <span className="text-[10px] px-2 py-1 rounded-md border border-white/10 text-white">{item.status}</span>
                  </div>
                  <a href={`mailto:${item.email}`} className="text-xs text-blue-400 mt-1 inline-block">{item.email}</a>
                </div>
              ))}
              {applications.length === 0 && (
                <div className="p-10 text-center text-sm text-white/70">No applications yet.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter  font-display uppercase">Blog Posts</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-[9px] font-semibold text-blue-400 uppercase tracking-widest font-mono">
                {posts.length} posts
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white font-mono text-[9px] uppercase tracking-[0.3em]">Manage website blog content</p>
          </div>
        </div>
        <Button onClick={startNewPost} className="h-14 px-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display border border-blue-400">
          <Plus className="w-5 h-5" /> New post
        </Button>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md relative group">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono">Status</th>
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono">Post</th>
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono">Category</th>
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {posts.map((post) => (
                <tr key={post.id} className="group/row hover:bg-white/[0.02] transition-colors">
                  <td className="px-10 py-10">
                    {post.published ? (
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                         <span className="text-[10px] font-semibold font-mono text-emerald-500 uppercase tracking-widest">Published</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                         <span className="text-[10px] font-semibold font-mono text-amber-500 uppercase tracking-widest">Draft</span>
                      </div>
                    )}
                  </td>
                  <td className="px-10 py-10">
                    <div className="font-semibold text-[15px] text-white tracking-[0.05em] uppercase mb-2 group-hover/row:text-blue-400 transition-colors  font-display">{post.title}</div>
                    <div className="text-[10px] text-white font-semibold uppercase tracking-[0.2em] font-mono">{post.date} // {post.id}</div>
                  </td>
                  <td className="px-10 py-10">
                    <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-semibold text-white uppercase tracking-widest font-mono group-hover/row:border-primary/20 group-hover/row:text-blue-400/60 transition-all">{post.category}</span>
                  </td>
                  <td className="px-10 py-10 text-right space-x-3">
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white hover:text-white hover:border-white/20 transition-all shadow-none" asChild title="Preview">
                      <Link to={`/blog/${post.id}`} target="_blank">
                         <Maximize2 className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white hover:text-blue-400 hover:border-primary/40 transition-all shadow-none"
                      onClick={() => setEditingPost(post)}
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white hover:text-red-500 hover:border-red-500/40 transition-all shadow-none"
                      onClick={() => handleDelete(post.id)}
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderHealth = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter  font-display uppercase">Website Status</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] font-semibold text-emerald-500 uppercase tracking-widest font-mono">
                Website is online
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white font-mono text-[9px] uppercase tracking-[0.3em]">Basic website health information</p>
          </div>
        </div>
        <Button className="h-14 px-8 bg-white/5 border border-white/10 hover:border-white/20 text-[11px] font-semibold uppercase tracking-[0.2em] rounded-2xl transition-all font-display  shadow-none group">
           Refresh status <ArrowRight className="ml-3 w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-12 group hover:border-white/10 transition-all relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <Cpu className="w-32 h-32 text-blue-400" />
           </div>
           
           <div className="flex items-center justify-between relative z-10">
              <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-4 font-display ">
                <Cpu className="w-5 h-5 text-blue-400" /> Page health
              </h3>
              <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest font-mono bg-blue-500/10 px-3 py-1 rounded-lg">Live</span>
           </div>
           
           <div className="space-y-10 relative z-10">
              {[
                { label: "Home page", val: 100, color: "bg-blue-500" },
                { label: "Contact form", val: 100, color: "bg-blue-400" },
                { label: "Careers page", val: 100, color: "bg-emerald-500" },
                { label: "Newsletter form", val: 100, color: "bg-purple-500" },
              ].map((bar, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between text-[11px] font-semibold uppercase tracking-widest text-white font-mono">
                    <span>{bar.label}</span>
                    <span className="text-white">{bar.val}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${bar.val}%` }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                      className={cn("h-full rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]", bar.color)}
                    />
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group hover:border-white/10 transition-all">
           <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="w-40 h-40 rounded-full border-[8px] border-white/5 border-t-primary animate-spin-slow flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)]">
              <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-2xl">
                 <Zap className="w-10 h-10 text-blue-400 animate-pulse" />
              </div>
           </div>
           <div className="relative z-10">
              <div className="text-6xl font-semibold text-white tracking-tighter mb-4  font-display">99.98%</div>
              <div className="text-[11px] font-semibold text-white uppercase tracking-[0.4em] font-mono">Website uptime</div>
           </div>
           <p className="text-[11px] text-white font-mono tracking-[0.3em] max-w-[320px] uppercase leading-relaxed relative z-10">
             This section shows simple operational status for important website areas.
           </p>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter  font-display uppercase">Activity Logs</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] font-semibold text-emerald-500 uppercase tracking-widest font-mono">
                Last 24 hours
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white font-mono text-[9px] uppercase tracking-[0.3em]">Real-time audit trail</p>
          </div>
        </div>
        <div className="flex gap-4">
           <Button onClick={fetchActivityLogs} className="h-14 px-8 bg-white/5 border border-white/10 hover:border-white/20 text-[11px] font-semibold uppercase tracking-[0.2em] rounded-2xl transition-all font-display  shadow-none">
              <RefreshCcw className="w-4 h-4 mr-3" /> Refresh
           </Button>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono">Time</th>
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono">Activity</th>
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono">Description</th>
                <th className="px-10 py-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white font-mono text-right">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {activityLogs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-10 py-16 text-center text-white/70 text-sm">No activity recorded in the last 24 hours.</td>
                </tr>
              ) : activityLogs.map((log) => (
                <tr key={log.id} className="group hover:bg-white/[0.01] transition-colors">
                  <td className="px-10 py-8 text-[10px] font-mono text-white">{formatTime(log.created_at)}</td>
                  <td className="px-10 py-8 text-[11px] font-semibold text-white uppercase tracking-widest">{log.activity_type.replace('_', ' ')}</td>
                  <td className="px-10 py-8 text-[11px] text-white/90 font-medium">{log.description}</td>
                  <td className="px-10 py-8 text-right">
                    <span className={cn(
                      "text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-lg border font-mono shadow-none",
                      log.activity_type.includes('create') ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                      log.activity_type.includes('delete') ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                      log.activity_type.includes('edit') ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                      log.activity_type.includes('login') || log.activity_type.includes('logout') ? 'bg-blue-500/10 border-primary/20 text-blue-400' :
                      log.activity_type.includes('submit') || log.activity_type.includes('subscribe') || log.activity_type.includes('apply') ? 'bg-blue-500/10 border-blue-500/20 text-blue-500' :
                      'bg-white/5 border-white/10 text-white'
                    )}>
                      {log.activity_type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );


  const renderSettings = () => (
    <div className="space-y-12 max-w-5xl">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter  font-display uppercase">Core_Configuration</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-blue-500/10 border border-primary/20 rounded-md text-[9px] font-semibold text-blue-400 uppercase tracking-widest font-mono">
                NODE_01_GLOBAL
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white font-mono text-[9px] uppercase tracking-[0.3em]">System Environment Variable Control</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-8 group transition-all hover:border-white/10">
            <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-4 font-display ">Environment_Flags</h3>
            <div className="space-y-4">
               {[
                 { label: "Maintenance Mode", active: false, icon: Shield },
                 { label: "Alpha API Access", active: true, icon: Network },
                 { label: "Global Edge Caching", active: true, icon: Globe },
                 { label: "Verbose Error Logging", active: false, icon: Terminal },
               ].map((flag, i) => (
                  <label key={i} className="flex items-center justify-between p-5 bg-black border border-white/5 rounded-[2rem] cursor-pointer group/flag hover:border-primary/40 transition-all">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover/flag:text-blue-400 transition-colors">
                           <flag.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-semibold text-white uppercase tracking-widest transition-colors group-hover/flag:text-white">{flag.label}</span>
                     </div>
                     <div className={cn(
                        "w-12 h-6 rounded-full relative transition-all duration-500",
                        flag.active ? 'bg-blue-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]' : 'bg-white/10'
                     )}>
                        <div className={cn(
                           "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                           flag.active ? 'left-7' : 'left-1'
                        )} />
                     </div>
                  </label>
               ))}
            </div>
         </div>

         <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-8 group transition-all hover:border-white/10">
            <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-4 font-display ">System_Operations</h3>
            <div className="space-y-4">
               <Button className="w-full h-20 bg-black border border-white/5 rounded-[2rem] text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-white/5 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display ">
                  Purge Edge Cache <HardDrive className="w-5 h-5 text-white group-hover/btn:text-blue-400 transition-colors" />
               </Button>
               <Button className="w-full h-20 bg-black border border-white/5 rounded-[2rem] text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-white/5 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display ">
                  Force Node Sync <RefreshCcw className="w-5 h-5 text-white group-hover/btn:text-blue-400 transition-colors" />
               </Button>
               <Button className="w-full h-20 bg-blue-500/5 border border-primary/20 text-blue-400 rounded-[2rem] text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-blue-500/10 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display ">
                  Cluster_Deploy <Layers className="w-5 h-5 text-blue-400 group-hover/btn:scale-110 transition-transform" />
               </Button>
            </div>
         </div>
      </div>
    </div>
  );

  const renderLeads = () => (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl font-semibold text-white tracking-tighter font-display uppercase">Leads Manager</h2>
          <div className="flex items-center gap-4 mt-6">
             <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] font-semibold text-blue-400 uppercase tracking-widest font-mono">
                {contactSubmissions.length} CONTACT
             </div>
             <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[10px] font-semibold text-emerald-500 uppercase tracking-widest font-mono">
                {demoRequests.length} DEMO
             </div>
             <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-[10px] font-semibold text-purple-400 uppercase tracking-widest font-mono">
                {newsletterSubscribers.length} NEWSLETTER
             </div>
          </div>
        </div>
        <Button onClick={fetchLeadsData} className="h-12 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 transition-all font-display">
          <RefreshCcw className="w-4 h-4" /> Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Submissions */}
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
            <div className="p-10 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-3 font-display">
                <Mail className="w-4 h-4 text-blue-400" /> Contact Submissions
              </h3>
              <div className="text-[10px] text-white font-mono">{contactSubmissions.length} Total</div>
            </div>
            {contactSubmissions.length === 0 ? (
              <div className="p-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white/30" />
                </div>
                <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-3 font-display">No contact submissions</h3>
                <p className="text-[11px] text-white/50 max-w-md mx-auto">Contact form submissions will appear here when users submit through the website.</p>
              </div>
            ) : (
              <div className="divide-y divide-white/5">
                {contactSubmissions.map((submission) => (
                  <div key={submission.id} className="p-8 hover:bg-white/[0.01] transition-colors group">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-[14px] font-semibold text-white tracking-wider uppercase font-display">{submission.name}</div>
                          {submission.company && <div className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] text-white/70 font-mono uppercase">{submission.company}</div>}
                        </div>
                        <a href={`mailto:${submission.email}`} className="text-[11px] font-semibold text-blue-400 hover:text-blue-400/80 transition-colors mb-3 inline-block">
                          {submission.email}
                        </a>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <div className="text-[10px] text-white/50 font-mono uppercase tracking-widest">{submission.service}</div>
                          {submission.budget && (
                            <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] text-emerald-400 font-mono uppercase">
                              Budget: {submission.budget}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0">
                        <span className={cn(
                          "text-[8px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-lg border font-mono",
                          submission.status === 'pending' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                          submission.status === 'contacted' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                          submission.status === 'qualified' ? 'bg-blue-500/10 border-blue-500/20 text-blue-500' :
                          'bg-white/5 border-white/10 text-white'
                        )}>
                          {submission.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Subscribers */}
        <div className="space-y-10">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
            <div className="p-10 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-3 font-display">
                <Radio className="w-4 h-4 text-purple-400" /> Newsletter
              </h3>
              <div className="text-[10px] text-white font-mono">{newsletterSubscribers.length} Total</div>
            </div>
            {newsletterSubscribers.length === 0 ? (
              <div className="p-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <Radio className="w-8 h-8 text-white/30" />
                </div>
                <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-3 font-display">No subscribers</h3>
                <p className="text-[11px] text-white/50 max-w-md mx-auto">Newsletter signups will appear here when users subscribe.</p>
              </div>
            ) : (
              <div className="divide-y divide-white/5 max-h-[400px] overflow-y-auto custom-scrollbar">
                {newsletterSubscribers.map((subscriber) => (
                  <div key={subscriber.id} className="p-6 hover:bg-white/[0.01] transition-colors">
                    <div className="text-[11px] font-semibold text-white mb-2">{subscriber.email}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-[9px] text-white/50">{subscriber.name || 'No name'}</div>
                      <span className={cn(
                        "text-[8px] font-semibold uppercase tracking-widest px-2 py-1 rounded border font-mono",
                        subscriber.status === 'pending' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                        subscriber.status === 'confirmed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                        'bg-white/5 border-white/10 text-white'
                      )}>
                        {subscriber.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Demo Requests */}
      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
        <div className="p-10 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.3em] flex items-center gap-3 font-display">
            <Layers className="w-4 h-4 text-emerald-400" /> Demo Requests
          </h3>
          <div className="text-[10px] text-white font-mono">{demoRequests.length} Total</div>
        </div>
        {demoRequests.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Layers className="w-8 h-8 text-white/30" />
            </div>
            <h3 className="text-[14px] font-semibold text-white uppercase tracking-[0.3em] mb-3 font-display">No demo requests</h3>
            <p className="text-[11px] text-white/50 max-w-md mx-auto">Demo requests will appear here when users request a demo.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {demoRequests.map((request) => (
              <div key={request.id} className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className={cn(
                    "text-[8px] font-semibold uppercase tracking-widest px-2 py-1 rounded border font-mono",
                    request.status === 'pending' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                    request.status === 'contacted' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                    'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                  )}>
                    {request.status}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-white mb-2">{request.email}</div>
                {request.case_study_id && (
                  <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest mb-4 font-display">
                    {request.case_study_id}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[8px] font-semibold uppercase tracking-widest px-2 py-1 rounded border font-mono",
                    request.status === 'pending' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                    request.status === 'contacted' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                    'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                  )}>
                    {request.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderPlaceholder = (title: string) => (
    <div className="min-h-[500px] flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[4rem] text-center p-12 bg-white/[0.01]">
      <div className="w-24 h-24 rounded-3xl bg-black border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-20" />
        <Zap className="w-10 h-10 text-blue-400 relative z-10" />
      </div>
      <h2 className="text-2xl font-semibold text-white uppercase tracking-[0.3em] mb-4 font-display">{title}</h2>
      <p className="text-white font-mono text-[10px] uppercase tracking-[0.4em] max-w-sm leading-relaxed">System Module is currently in deep-state development or access is restricted by protocol Root_01.</p>
    </div>
  );

  // --- MAIN LOGIC ---

  if (!isAuthenticated) {
    return (
      <div className="admin-login min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-body selection:bg-blue-500/20 selection:text-white">
        <style>{`
          .admin-login {
            color: #fff;
            background: #000;
          }

          .admin-login * {
            font-family: inherit !important;
          }

          .admin-login h1 {
            font-size: clamp(34px, 5vw, 58px) !important;
            letter-spacing: 0.08em !important;
            font-weight: 650 !important;
            color: #fff !important;
            text-transform: none !important;
          }

          .admin-login p,
          .admin-login label,
          .admin-login span,
          .admin-login div {
            color: #fff;
          }

          .admin-login .admin-login-label {
            font-size: 11px !important;
            letter-spacing: 0.12em !important;
            font-weight: 600 !important;
            color: #fff !important;
            text-transform: none !important;
          }

          .admin-login input {
            height: 58px !important;
            background: #050505 !important;
            border: 1px solid rgba(255,255,255,0.22) !important;
            border-radius: 18px !important;
            color: #fff !important;
            font-size: 18px !important;
            letter-spacing: 0.28em !important;
            box-shadow: 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04) !important;
          }

          .admin-login input:focus {
            border-color: rgba(255,255,255,0.45) !important;
            background: #080808 !important;
            box-shadow: 0 0 0 4px rgba(255,255,255,0.06) !important;
          }

          .admin-login input::placeholder {
            color: rgba(255,255,255,0.26) !important;
          }

          .admin-login button {
            height: 48px !important;
            border-radius: 14px !important;
            font-size: 11px !important;
            letter-spacing: 0.08em !important;
            font-weight: 650 !important;
            text-transform: none !important;
          }
        `}</style>
        {/* Technical Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-40" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-lg p-1 rounded-[28px] bg-black border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="p-8 sm:p-10 text-center relative">
            <div className="absolute top-0 right-0 p-6 flex flex-col items-end gap-1 hidden sm:flex">
               <div className="text-[9px] font-medium tracking-[0.08em]">Gate ID: 0x82A1</div>
               <div className="text-[9px] font-medium tracking-[0.08em]">Protocol: Astra Root</div>
            </div>

            <div className="flex flex-col items-center mb-10 group">
              <div className="relative mb-8">
                <div className="absolute -inset-6 bg-blue-500/10 blur-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/15 flex items-center justify-center shadow-2xl group-hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                  <Shield className="w-7 h-7 text-blue-400 relative z-10" />
                  <div className="absolute bottom-0 inset-x-0 h-px bg-blue-500/40 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl font-semibold text-white tracking-[0.2em] uppercase mb-4 font-display ">Astra Gate</h1>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" />
                <p className="admin-login-label text-blue-400 text-[9px] uppercase tracking-[0.4em] font-semibold">System authentication required</p>
              </div>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="relative space-y-3">
                <div className="flex items-center justify-between px-2">
                  <label className="admin-login-label">Access token</label>
                  <span className="admin-login-label">Encrypted</span>
                </div>
                <div className="relative group/input">
                  <Input 
                    type="password" 
                    placeholder="••••••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-20 bg-white/[0.02] border-white/5 text-white rounded-[2rem] font-mono text-center tracking-[1.2rem] focus:border-primary/40 focus:bg-white/[0.04] transition-all text-2xl placeholder:text-white/5 border-2 shadow-inner"
                  />
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white group-focus-within/input:text-blue-400 transition-colors" />
                </div>
              </div>

              <div className="pt-1 text-[11px] font-medium text-white tracking-[0.02em] leading-relaxed mb-6 max-w-[320px] mx-auto">
                Unauthorized access attempts are traced and logged to the Astraventa admin network.
              </div>

              <Button type="submit" className="w-full h-20 bg-white hover:bg-white text-black font-semibold rounded-[2rem] uppercase tracking-[0.3em] text-[12px] shadow-2xl group/btn transition-all hover:scale-[1.01] active:scale-[0.98] font-display ">
                Initialize Session <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-10 flex items-center justify-center gap-5 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-white tracking-[0.06em] font-medium">Secure Vault</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                <span className="text-[10px] text-white tracking-[0.06em] font-medium">v1.0.0 Stable</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout} notifications={notifications}>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pb-24"
      >
        <div className="px-10 lg:px-16 pt-12">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "content" && renderContent()}
          {activeTab === "careers" && renderCareers()}
          {activeTab === "newsletter" && renderNewsletter()}
          {activeTab === "infrastructure" && renderInfrastructure()}
          {activeTab === "leads" && renderLeads()}
          {activeTab === "health" && renderHealth()}
          {activeTab === "security" && renderSecurity()}
          {activeTab === "settings" && renderSettings()}

      {/* Email Editor Modal */}
      <AnimatePresence>
        {isCreatingEmail && (
          <div className="fixed inset-0 z-[200] flex items-center justify-end bg-black/80 backdrop-blur-2xl">
             <motion.div
               initial={{ x: "100%", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: "100%", opacity: 0 }}
               transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
               className="w-full max-w-4xl h-full bg-black border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative"
             >
                <div className="px-12 py-10 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-20">
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-[2rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-2xl">
                        <Mail className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-semibold text-white font-display uppercase tracking-wider">{editingEmail ? 'Edit Email' : 'Create Newsletter'}</h2>
                        <div className="flex items-center gap-3 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                           <span className="text-[10px] font-semibold text-white uppercase tracking-[0.4em] font-mono">Draft Mode</span>
                        </div>
                      </div>
                   </div>
                   <Button variant="ghost" className="w-14 h-14 rounded-2xl text-white hover:text-white hover:bg-white/5 border border-white/5 transition-all" onClick={() => { setIsCreatingEmail(false); setEditingEmail(null); }}>
                      <X className="w-6 h-6" />
                   </Button>
                </div>

                <div className="p-12 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-[10px] text-blue-400 uppercase tracking-[0.2em] font-semibold">Subject Line</label>
                      <Input
                        value={editingEmail?.subject || ''}
                        onChange={(e) => setEditingEmail({ ...editingEmail, subject: e.target.value })}
                        placeholder="Enter email subject..."
                        className="h-12 bg-black border-white/10 text-white"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] text-blue-400 uppercase tracking-[0.2em] font-semibold">Email Content</label>
                      <Textarea
                        value={editingEmail?.content || ''}
                        onChange={(e) => setEditingEmail({ ...editingEmail, content: e.target.value })}
                        placeholder="Write your newsletter content..."
                        className="min-h-[300px] bg-black border-white/10 text-white resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editingEmail?.ai_generated || false}
                          onChange={(e) => setEditingEmail({ ...editingEmail, ai_generated: e.target.checked })}
                          className="sr-only"
                        />
                        <div className={cn(
                          "w-12 h-6 rounded-full transition-all duration-500 border border-white/10",
                          editingEmail?.ai_generated ? 'bg-blue-500' : 'bg-white/5'
                        )} />
                        <div className={cn(
                          "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                          editingEmail?.ai_generated ? 'left-7' : 'left-1'
                        )} />
                        <span className="text-[11px] font-semibold text-white uppercase tracking-[0.3em]">AI Generated</span>
                      </label>
                    </div>
                  </div>

                   <div className="flex gap-6 pt-8 border-t border-white/5">
                      <button className="h-16 px-10 rounded-2xl font-semibold uppercase tracking-[0.2em] text-[11px] text-white hover:text-white transition-all font-display" onClick={() => { setIsCreatingEmail(false); setEditingEmail(null); }}>Cancel</button>
                      <Button onClick={async () => {
                        if (editingEmail) {
                          const { error } = await supabaseAdmin.from('newsletter_drafts').upsert(editingEmail);
                          if (error) toast.error("Failed to save email");
                          else {
                            toast.success("Email saved successfully");
                            fetchLeadsData();
                            setIsCreatingEmail(false);
                            setEditingEmail(null);
                          }
                        }
                      }} className="h-16 px-14 bg-blue-500 hover:bg-blue-500/80 text-white font-semibold rounded-2xl uppercase tracking-[0.3em] text-[12px] shadow-[0_15px_40px_rgba(59,130,246,0.3)] flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display">
                         <Save className="w-5 h-5" /> Save Draft
                      </Button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
        </div>
      </motion.div>

      {/* Modern Slide-over Editor */}
      <AnimatePresence>
        {editingPost && (
          <div className="fixed inset-0 z-[200] flex items-center justify-end bg-black/80 backdrop-blur-2xl">
             <motion.div 
               initial={{ x: "100%", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: "200%", opacity: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="w-full max-w-5xl h-full bg-black border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative"
             >
                {/* Tactical Top Bar */}
                <div className="px-12 py-10 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-20">
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-[2rem] bg-blue-500/10 border border-primary/20 flex items-center justify-center text-blue-400 shadow-2xl">
                        {isNewPost ? <Plus className="w-8 h-8" /> : <Layers className="w-8 h-8" />}
                      </div>
                      <div>
                        <h2 className="text-3xl font-semibold text-white  font-display uppercase tracking-wider">{isNewPost ? "Create blog post" : "Edit blog post"}</h2>
                        <div className="flex items-center gap-3 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                           <span className="text-[10px] font-semibold text-white uppercase tracking-[0.4em] font-mono">Post ID: <span className="text-white">{editingPost.id}</span></span>
                        </div>
                      </div>
                   </div>
                   <Button variant="ghost" className="w-14 h-14 rounded-2xl text-white hover:text-white hover:bg-white/5 border border-white/5 transition-all" onClick={() => { setEditingPost(null); setIsNewPost(false); }}>
                      <X className="w-6 h-6" />
                   </Button>
                </div>

                <div className="p-12 space-y-12 flex-1 overflow-y-auto custom-scrollbar overflow-x-hidden">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Title</label>
                        <Input 
                          value={editingPost.title}
                          onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-semibold text-xl px-10 focus:border-primary transition-all shadow-none border  font-display"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Category</label>
                        <div className="relative">
                           <select 
                              value={editingPost.category}
                              onChange={(e) => setEditingPost({...editingPost, category: e.target.value as any})}
                              className="w-full h-20 bg-black border border-white/10 text-white rounded-[2rem] font-semibold uppercase tracking-[0.3em] text-[11px] px-10 appearance-none focus:border-primary transition-all font-display "
                           >
                              <option value="Engineering">Engineering</option>
                              <option value="AI">AI</option>
                              <option value="Design">Design</option>
                              <option value="Strategy">Strategy</option>
                           </select>
                           <ChevronRight className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-white rotate-90 pointer-events-none" />
                        </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Short summary</label>
                      <Textarea 
                        value={editingPost.excerpt}
                        onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                        className="min-h-[140px] bg-black border-white/10 text-white rounded-[2.5rem] p-10 focus:border-primary transition-all font-medium leading-relaxed shadow-none border "
                      />
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Blog content</label>
                      <div className="relative bg-black rounded-[3rem] border border-white/5 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                           <Terminal className="w-32 h-32" />
                        </div>
                        <Textarea 
                           value={editingPost.content}
                           onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                           className="min-h-[600px] bg-transparent border-none text-white rounded-none font-mono p-12 focus:ring-0 leading-loose text-sm shadow-none overflow-x-hidden min-w-full"
                           style={{ width: '100%' }}
                        />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Author</label>
                        <Input 
                          value={editingPost.author}
                          onChange={(e) => setEditingPost({...editingPost, author: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-semibold focus:border-primary transition-all shadow-none border  font-display text-sm tracking-widest"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Cover image URL</label>
                        <Input 
                          value={editingPost.image}
                          onChange={(e) => setEditingPost({...editingPost, image: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-mono text-xs px-10 focus:border-primary transition-all shadow-none border"
                        />
                      </div>
                   </div>
                </div>

                {/* Status bar */}
                <div className="px-12 py-10 border-t border-white/5 bg-black flex items-center justify-between sticky bottom-0 z-20">
                   <div className="flex items-center gap-10">
                      <label className="flex items-center gap-5 cursor-pointer group">
                        <div className="relative">
                          <input 
                              type="checkbox" 
                              checked={editingPost.published}
                              onChange={(e) => setEditingPost({...editingPost, published: e.target.checked})}
                              className="sr-only"
                          />
                          <div className={cn(
                             "w-12 h-6 rounded-full transition-all duration-500 border border-white/10",
                             editingPost.published ? 'bg-blue-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]' : 'bg-white/5'
                          )} />
                          <div className={cn(
                             "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                             editingPost.published ? 'left-7' : 'left-1'
                          )} />
                        </div>
                        <span className="text-[11px] font-semibold text-white group-hover:text-white uppercase tracking-[0.3em] font-display  transition-colors">Publish on website</span>
                      </label>
                      {isNewPost && (
                        <label className="flex items-center gap-5 cursor-pointer group">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={sendBlogNotification}
                              onChange={(e) => setSendBlogNotification(e.target.checked)}
                              className="sr-only"
                            />
                            <div className={cn(
                              "w-12 h-6 rounded-full transition-all duration-500 border border-white/10",
                              sendBlogNotification ? 'bg-blue-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]' : 'bg-white/5'
                            )} />
                            <div className={cn(
                              "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                              sendBlogNotification ? 'left-7' : 'left-1'
                            )} />
                          </div>
                          <span className="text-[11px] font-semibold text-white group-hover:text-white uppercase tracking-[0.3em] font-display transition-colors">Email people about this post</span>
                        </label>
                      )}
                      {isNewPost && sendBlogNotification && (
                        <select
                          value={notificationAudience}
                          onChange={(e) => setNotificationAudience(e.target.value as typeof notificationAudience)}
                          className="h-12 bg-black border border-white/10 text-white rounded-xl px-4 text-[11px] font-semibold"
                        >
                          <option value="all">All saved emails</option>
                          <option value="newsletter">Newsletter subscribers only</option>
                          <option value="leads">Contact and demo leads only</option>
                          <option value="applicants">Career applicants only</option>
                        </select>
                      )}
                   </div>
                   <div className="flex gap-6">
                      <button className="h-16 px-10 rounded-2xl font-semibold uppercase tracking-[0.2em] text-[11px] text-white hover:text-white transition-all font-display " onClick={() => { setEditingPost(null); setIsNewPost(false); }}>Cancel</button>
                      <Button onClick={handleSave} className="h-16 px-14 bg-blue-500 hover:bg-blue-500/80 text-white font-semibold rounded-2xl uppercase tracking-[0.3em] text-[12px] shadow-[0_15px_40px_rgba(var(--primary-rgb),0.3)] flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display ">
                         <Save className="w-5 h-5" /> Save post
                      </Button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
        {editingPosition && (
          <div className="fixed inset-0 z-[200] flex items-center justify-end bg-black/80 backdrop-blur-2xl">
             <motion.div 
               initial={{ x: "100%", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: "200%", opacity: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="w-full max-w-4xl h-full bg-black border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative"
             >
                <div className="px-12 py-10 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-20">
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-2xl">
                        {isNewPosition ? <Plus className="w-8 h-8" /> : <Briefcase className="w-8 h-8" />}
                      </div>
                      <div>
                        <h2 className="text-3xl font-semibold text-white  font-display uppercase tracking-wider">{isNewPosition ? "Create career role" : "Edit career role"}</h2>
                         <div className="flex items-center gap-3 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[10px] font-semibold text-white uppercase tracking-[0.4em] font-mono">Role ID: <span className="text-white">{editingPosition.id || "New role"}</span></span>
                        </div>
                      </div>
                   </div>
                   <Button variant="ghost" className="w-14 h-14 rounded-2xl text-white hover:text-white hover:bg-white/5 border border-white/5 transition-all" onClick={() => { setEditingPosition(null); setIsNewPosition(false); }}>
                      <X className="w-6 h-6" />
                   </Button>
                </div>

                <div className="p-12 space-y-10 flex-1 overflow-y-auto custom-scrollbar">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Job title</label>
                        <Input 
                          value={editingPosition.title}
                          onChange={(e) => setEditingPosition({...editingPosition, title: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-semibold text-xl px-10 focus:border-primary transition-all shadow-none border  font-display"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Team</label>
                        <Input 
                          value={editingPosition.team}
                          onChange={(e) => setEditingPosition({...editingPosition, team: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-semibold tracking-widest text-sm px-10 focus:border-primary transition-all shadow-none border font-display "
                        />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Location</label>
                        <Input 
                          value={editingPosition.location}
                          onChange={(e) => setEditingPosition({...editingPosition, location: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-semibold text-sm px-10 focus:border-primary transition-all shadow-none border  font-display"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Job type</label>
                        <Input 
                          value={editingPosition.type}
                          onChange={(e) => setEditingPosition({...editingPosition, type: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-semibold text-sm px-10 focus:border-primary transition-all shadow-none border  font-display"
                        />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Job description</label>
                      <Textarea 
                        value={editingPosition.description}
                        onChange={(e) => setEditingPosition({...editingPosition, description: e.target.value})}
                        className="min-h-[200px] bg-black border-white/10 text-white rounded-[2.5rem] p-10 focus:border-primary transition-all font-medium leading-relaxed shadow-none border "
                      />
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-semibold text-white uppercase tracking-[0.5em] font-mono ml-4 block ">Requirements (one per line)</label>
                      <Textarea
                        value={(editingPosition.requirements || []).join("\n")}
                        onChange={(e) =>
                          setEditingPosition({
                            ...editingPosition,
                            requirements: e.target.value
                              .split("\n")
                              .map((item) => item.trim())
                              .filter(Boolean),
                          })
                        }
                        className="min-h-[180px] bg-black border-white/10 text-white rounded-[2.5rem] p-10 focus:border-primary transition-all font-medium leading-relaxed shadow-none border "
                      />
                   </div>

                   <div className="space-y-6">
                      <label className="flex items-center gap-5 cursor-pointer group">
                        <div className="relative">
                          <input 
                              type="checkbox" 
                              checked={editingPosition.active}
                              onChange={(e) => setEditingPosition({...editingPosition, active: e.target.checked})}
                              className="sr-only"
                          />
                          <div className={cn(
                             "w-12 h-6 rounded-full transition-all duration-500 border border-white/10",
                             editingPosition.active ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-white/5'
                          )} />
                          <div className={cn(
                             "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                             editingPosition.active ? 'left-7' : 'left-1'
                          )} />
                        </div>
                        <span className="text-[11px] font-semibold text-white group-hover:text-white uppercase tracking-[0.3em] font-display  transition-colors">Show on careers page</span>
                      </label>
                      {isNewPosition && (
                        <label className="flex items-center gap-5 cursor-pointer group">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={sendCareerNotification}
                              onChange={(e) => setSendCareerNotification(e.target.checked)}
                              className="sr-only"
                            />
                            <div className={cn(
                              "w-12 h-6 rounded-full transition-all duration-500 border border-white/10",
                              sendCareerNotification ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-white/5'
                            )} />
                            <div className={cn(
                              "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                              sendCareerNotification ? 'left-7' : 'left-1'
                            )} />
                          </div>
                          <span className="text-[11px] font-semibold text-white group-hover:text-white uppercase tracking-[0.3em] font-display transition-colors">Email people about this role</span>
                        </label>
                      )}
                      {isNewPosition && sendCareerNotification && (
                        <select
                          value={notificationAudience}
                          onChange={(e) => setNotificationAudience(e.target.value as typeof notificationAudience)}
                          className="h-12 bg-black border border-white/10 text-white rounded-xl px-4 text-[11px] font-semibold"
                        >
                          <option value="all">All saved emails</option>
                          <option value="newsletter">Newsletter subscribers only</option>
                          <option value="leads">Contact and demo leads only</option>
                          <option value="applicants">Career applicants only</option>
                        </select>
                      )}
                   </div>
                </div>

                <div className="px-12 py-10 border-t border-white/5 bg-black flex items-center justify-end gap-6 sticky bottom-0 z-20">
                    <button className="h-16 px-10 rounded-2xl font-semibold uppercase tracking-[0.2em] text-[11px] text-white hover:text-white transition-all font-display " onClick={() => { setEditingPosition(null); setIsNewPosition(false); }}>Cancel</button>
                    <Button onClick={handleSavePosition} className="h-16 px-14 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl uppercase tracking-[0.3em] text-[12px] shadow-[0_15px_40px_rgba(16,185,129,0.2)] flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display ">
                        <Save className="w-5 h-5" /> Save role
                    </Button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AdminLayout>
  );
};

export default AdminDashboard;
