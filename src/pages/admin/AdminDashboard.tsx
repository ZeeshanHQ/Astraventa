import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Edit2, 
  Trash2, 
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
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogService, BlogPost } from "@/lib/blog-service";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { cn } from "@/lib/utils";
import { supabase, CareerPosition, CareerApplication } from "@/lib/supabase";

const ADMIN_KEY = "astra2024";
const CAREER_EXTERNAL_FORM_LINK_KEY = "career_external_form_url";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);
  const [positions, setPositions] = useState<CareerPosition[]>([]);
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [isNewPosition, setIsNewPosition] = useState(false);
  const [editingPosition, setEditingPosition] = useState<Partial<CareerPosition> | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";
  const [careerExternalFormUrl, setCareerExternalFormUrl] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === "content" || activeTab === "overview") {
        setPosts(blogService.getPosts());
      }
      if (activeTab === "careers") {
        fetchCareersData();
      }
    }
  }, [isAuthenticated, activeTab]);

  useEffect(() => {
    const savedFormUrl = window.localStorage.getItem(CAREER_EXTERNAL_FORM_LINK_KEY) || "";
    setCareerExternalFormUrl(savedFormUrl);
  }, []);

  const fetchCareersData = async () => {
    const { data: posData } = await supabase.from('career_positions').select('*').order('created_at', { ascending: false });
    const { data: appData } = await supabase.from('career_applications').select('*').order('created_at', { ascending: false });
    if (posData) setPositions(posData);
    if (appData) setApplications(appData);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_KEY) {
      setIsAuthenticated(true);
      toast.success("Identity Verified. Welcome Back, Root.");
    } else {
      toast.error("Invalid Authentication Key.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    toast.info("Session Terminated.");
  };

  const handleSavePosition = async () => {
    if (editingPosition) {
      const { error } = await supabase
        .from('career_positions')
        .upsert({
          ...editingPosition,
          id: isNewPosition ? undefined : editingPosition.id,
          created_at: undefined // Let DB handle it
        });

      if (error) {
        toast.error("Protocol failure: " + error.message);
      } else {
        toast.success("Position data synchronized.");
        setEditingPosition(null);
        setIsNewPosition(false);
        fetchCareersData();
      }
    }
  };

  const handleSaveCareerFormLink = () => {
    window.localStorage.setItem(CAREER_EXTERNAL_FORM_LINK_KEY, careerExternalFormUrl.trim());
    toast.success("Career form link saved.");
  };

  const handleSave = () => {
    if (editingPost) {
      blogService.savePost(editingPost);
      setPosts(blogService.getPosts());
      setEditingPost(null);
      setIsNewPost(false);
      toast.success("Log synchronized successfully.");
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to purge this record?")) {
      blogService.deletePost(id);
      setPosts(blogService.getPosts());
      toast.info("Record purged.");
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
  };

  // --- RENDERING HELPERS ---

  // --- RENDERING HELPERS ---

  const renderOverview = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {[
          { icon: Zap, label: "Neural Load", value: "12.4%", trend: "+0.2%", color: "text-primary" },
          { icon: Globe, label: "Active Nodes", value: "14/15", trend: "Stable", color: "text-blue-400" },
          { icon: ShieldCheck, label: "Threat Level", value: "Minimal", trend: "Secured", color: "text-emerald-500" },
          { icon: Activity, label: "Throughput", value: "840 Mbps", trend: "+12.5%", color: "text-amber-500" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon className="w-16 h-16" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className={cn("w-10 h-10 rounded-xl bg-black border border-white/5 flex items-center justify-center", stat.color)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">{stat.label}</div>
            </div>
            <div className="flex items-end justify-between gap-2">
              <div className="text-3xl font-black text-white tracking-tighter italic font-display">{stat.value}</div>
              <div className={cn("text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg bg-white/5", stat.color)}>
                {stat.trend}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <TrendingUp className="w-32 h-32 text-primary" />
            </div>
            
            <div className="flex items-center justify-between mb-12 relative z-10">
              <div>
                <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-4 italic font-display">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Neural_Throughput_Index
                </h3>
                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] mt-2 ml-6">Real-time spectral analysis of core pipelines</p>
              </div>
              <div className="flex gap-3 bg-black/40 p-1.5 rounded-2xl border border-white/5">
                {['1H', '12H', '24H', '7D'].map((t) => (
                  <button key={t} className={cn(
                    "px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all",
                    t === '24H' ? "bg-primary text-white shadow-xl" : "text-white/20 hover:text-white hover:bg-white/5"
                  )}>{t}</button>
                ))}
              </div>
            </div>

            <div className="h-72 flex items-end gap-3 px-4 relative z-10">
              {[45, 75, 52, 95, 68, 85, 55, 90, 48, 80, 65, 98, 72, 88, 60].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${h}%`, opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 group/bar relative"
                >
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-primary/5 rounded-t-xl group-hover/bar:bg-primary/20 transition-colors" />
                  <motion.div 
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/40 to-primary rounded-t-xl"
                    style={{ height: '30%' }}
                    animate={{ height: ['20%', '40%', '20%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-primary/40 text-primary text-[9px] font-black px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all translate-y-2 group-hover/bar:translate-y-0 shadow-2xl whitespace-nowrap z-20">
                    LVL_{h}%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Node Manager Section */}
          <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-4 italic font-display">
                  <Layers className="w-5 h-5 text-blue-400" />
                  Ecosystem_Node_Manager
                </h3>
                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] mt-2 ml-9">Governance protocol for active product deployments</p>
              </div>
              <Button variant="ghost" className="h-10 px-6 rounded-xl bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono">
                SYNC_ALL_NODES
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "LaunchPact AI", status: "LIVE", tag: "ACTIVE", traffic: "64k/m" },
                { name: "Shorts Cavexa", status: "LIVE", tag: "ACTIVE", traffic: "128k/m" },
                { name: "ComplyMail", status: "LIVE", tag: "ACTIVE", traffic: "42k/m" },
                { name: "Vectrax", status: "STABLE", tag: "ACTIVE", traffic: "12k/m" },
                { name: "AstraBlog", status: "NEW", tag: "NEW", traffic: "24k/m" },
                { name: "AstraPrompt", status: "STABLE", tag: "ACTIVE", traffic: "89k/m" },
              ].map((node, i) => (
                <div key={i} className="p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-white/20 transition-all group/node relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]" />
                      <span className="text-[11px] font-black text-white uppercase tracking-widest">{node.name}</span>
                    </div>
                    <span className="text-[8px] font-black font-mono text-white/20">{node.traffic}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-[8px] font-black text-primary uppercase tracking-widest">{node.status}</span>
                      <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[8px] font-black text-white/40 uppercase tracking-widest">{node.tag}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover/node:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-white/40 hover:text-primary transition-colors">
                        <RefreshCcw className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex flex-col relative overflow-hidden group h-full">
           <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] mb-12 flex items-center gap-4 italic font-display">
            <ShieldCheck className="w-5 h-5 text-emerald-500" /> Tactical_Feed
          </h3>
          <div className="space-y-8 flex-1">
            {[
              { type: "AUTH", status: "GRANTED", time: "42s ago", id: "ROOT_01", color: "text-emerald-500" },
              { type: "DATA", status: "NODE_SYNC", time: "5m ago", id: "PIPE_H2", color: "text-primary" },
              { type: "CORE", status: "STABLE", time: "12m ago", id: "SYS_KRNL", color: "text-blue-400" },
              { type: "WARN", status: "EDGE_LAT", time: "1h ago", id: "NODE_SEA", color: "text-amber-500" },
              { type: "LOG", status: "NODE_INIT", time: "2h ago", id: "AUTH_PROX", color: "text-slate-400" },
              { type: "SYS", status: "MEM_OPT", time: "4h ago", id: "KRNL_X", color: "text-emerald-400" },
            ].map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-5 group/item cursor-default"
              >
                <div className={cn("w-10 h-10 rounded-xl bg-black border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-white/20 transition-colors", log.color)}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shadow-[0_0_8px_currentColor]" />
                </div>
                <div className="flex-1 border-b border-white/5 pb-5 group-hover/item:border-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-black text-white uppercase tracking-widest">{log.type} // {log.status}</span>
                    <span className="text-[9px] text-white/20 font-mono tracking-tighter">{log.time}</span>
                  </div>
                  <div className="text-[9px] text-white/10 uppercase tracking-[0.2em] font-display italic">Triggered_By: <span className="text-white/40">{log.id}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white hover:bg-white/10 transition-all font-display italic shadow-none">
            Access_Full_Audit_Log
          </Button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Node_Repository</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[9px] font-black text-primary uppercase tracking-widest font-mono">
                {posts.length} ACTIVE_RECORDS
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Directory Source: /root/astra/vault/*</p>
          </div>
        </div>
        <Button onClick={startNewPost} className="h-14 px-10 bg-slate-50 hover:bg-white text-black font-black rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display italic">
          <Plus className="w-5 h-5" /> Initialize_New_Record
        </Button>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md relative group">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">State_Control</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Record_Identifier</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Class_Logic</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono text-right">Ops_Matrix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {posts.map((post) => (
                <tr key={post.id} className="group/row hover:bg-white/[0.02] transition-colors">
                  <td className="px-10 py-10">
                    {post.published ? (
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                         <span className="text-[10px] font-black font-mono text-emerald-500 uppercase tracking-widest">PROPAGATED</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                         <span className="text-[10px] font-black font-mono text-amber-500 uppercase tracking-widest">LOCAL_CACHE</span>
                      </div>
                    )}
                  </td>
                  <td className="px-10 py-10">
                    <div className="font-black text-[15px] text-white tracking-[0.05em] uppercase mb-2 group-hover/row:text-primary transition-colors italic font-display">{post.title}</div>
                    <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] font-mono">{post.date} // {post.id}</div>
                  </td>
                  <td className="px-10 py-10">
                    <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-white/40 uppercase tracking-widest font-mono group-hover/row:border-primary/20 group-hover/row:text-primary/60 transition-all">{post.category}</span>
                  </td>
                  <td className="px-10 py-10 text-right space-x-3">
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all shadow-none" asChild title="Preview">
                      <Link to={`/blog/${post.id}`} target="_blank">
                         <Maximize2 className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-primary hover:border-primary/40 transition-all shadow-none"
                      onClick={() => setEditingPost(post)}
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-red-500 hover:border-red-500/40 transition-all shadow-none"
                      onClick={() => handleDelete(post.id)}
                      title="Purge"
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
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Cluster_Vitals</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] font-black text-emerald-500 uppercase tracking-widest font-mono">
                STATUS: ALL_SYSTEMS_OPTIMAL
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Hardware Abstraction Layer Access: GRANTED</p>
          </div>
        </div>
        <Button className="h-14 px-8 bg-white/5 border border-white/10 hover:border-white/20 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all font-display italic shadow-none group">
           Restart_Instance_01 <ArrowRight className="ml-3 w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-12 group hover:border-white/10 transition-all relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <Cpu className="w-32 h-32 text-primary" />
           </div>
           
           <div className="flex items-center justify-between relative z-10">
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-4 font-display italic">
                <Cpu className="w-5 h-5 text-primary" /> Compute_Matrix
              </h3>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest font-mono bg-primary/10 px-3 py-1 rounded-lg">LOAD // 12.4%</span>
           </div>
           
           <div className="space-y-10 relative z-10">
              {[
                { label: "Neural Processing Core", val: 34, color: "bg-primary" },
                { label: "Ingestion Thread Mesh", val: 56, color: "bg-blue-400" },
                { label: "Data Redundancy Pool", val: 12, color: "bg-emerald-500" },
                { label: "IOPS Cache Cluster", val: 82, color: "bg-purple-500" },
              ].map((bar, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40 font-mono">
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
           <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="w-40 h-40 rounded-full border-[8px] border-white/5 border-t-primary animate-spin-slow flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)]">
              <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-2xl">
                 <Zap className="w-10 h-10 text-primary animate-pulse" />
              </div>
           </div>
           <div className="relative z-10">
              <div className="text-6xl font-black text-white tracking-tighter mb-4 italic font-display">99.98%</div>
              <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">Uptime_Metric // NODE_GLOBAL</div>
           </div>
           <p className="text-[11px] text-white/20 font-mono tracking-[0.3em] max-w-[320px] uppercase leading-relaxed relative z-10">
             Astra Core implements hot-swappable redundancy in <span className="text-primary italic">Autonomous_State</span>.
           </p>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Security_Mesh</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-md text-[9px] font-black text-red-500 uppercase tracking-widest font-mono">
                THREAT_LEVEL: 01_MINIMAL
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Encrypted Handshake Protocol: AES-256-GCM</p>
          </div>
        </div>
        <div className="flex gap-4">
           <Button className="h-14 px-8 bg-red-500/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-red-500/20 transition-all group font-display italic shadow-none">
              <Shield className="w-4 h-4 mr-3 group-hover:animate-pulse" /> Emergency_Lockdown
           </Button>
           <Button className="h-14 px-8 bg-white/5 border border-white/10 hover:border-white/20 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all font-display italic shadow-none">
              Export_Audit_Logs
           </Button>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Timestamp</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Handshake_ID</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Action_Protocol</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono text-right">Verif_Hash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { time: "2026-03-21 14:24:55", id: "IPV6 // 2001:0db8:85a3", action: "GATE_AUTH_GRANTED", status: "VERIFIED" },
                { time: "2026-03-21 14:12:01", id: "GEO // SINGAPORE_04", action: "CONTENT_SYNC_START", status: "VERIFIED" },
                { time: "2026-03-21 13:55:33", id: "SYS // CORE_OPTIMIZE", action: "CACHE_PURGE_ALL", status: "MANUAL" },
                { time: "2026-03-21 13:22:12", id: "BOT // SCANNER_01", action: "THREAT_SWEEP_DONE", status: "VERIFIED" },
                { time: "2026-03-21 12:45:10", id: "SYS // ROOT_RELOAD", action: "GATE_INITIALIZATION", status: "VERIFIED" },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                  <td className="px-10 py-8 text-[10px] font-mono text-white/40">{row.time}</td>
                  <td className="px-10 py-8 text-[11px] font-black text-white uppercase tracking-widest">{row.id}</td>
                  <td className="px-10 py-8 text-[11px] font-black text-white/20 uppercase tracking-widest font-display italic group-hover:text-primary transition-colors">{row.action}</td>
                  <td className="px-10 py-8 text-right">
                    <span className={cn(
                      "text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border font-mono shadow-none",
                      row.status === 'VERIFIED' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-primary/10 border-primary/20 text-primary'
                    )}>
                      {row.status}
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
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Core_Configuration</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[9px] font-black text-primary uppercase tracking-widest font-mono">
                NODE_01_GLOBAL
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">System Environment Variable Control</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-8 group transition-all hover:border-white/10">
            <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] mb-4 font-display italic">Environment_Flags</h3>
            <div className="space-y-4">
               {[
                 { label: "Maintenance Mode", active: false, icon: Shield },
                 { label: "Alpha API Access", active: true, icon: Network },
                 { label: "Global Edge Caching", active: true, icon: Globe },
                 { label: "Verbose Error Logging", active: false, icon: Terminal },
               ].map((flag, i) => (
                  <label key={i} className="flex items-center justify-between p-5 bg-black border border-white/5 rounded-[2rem] cursor-pointer group/flag hover:border-primary/40 transition-all">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover/flag:text-primary transition-colors">
                           <flag.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-black text-white/40 uppercase tracking-widest transition-colors group-hover/flag:text-white">{flag.label}</span>
                     </div>
                     <div className={cn(
                        "w-12 h-6 rounded-full relative transition-all duration-500",
                        flag.active ? 'bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]' : 'bg-white/10'
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
            <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] mb-4 font-display italic">System_Operations</h3>
            <div className="space-y-4">
               <Button className="w-full h-20 bg-black border border-white/5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white/5 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display italic">
                  Purge Edge Cache <HardDrive className="w-5 h-5 text-white/10 group-hover/btn:text-primary transition-colors" />
               </Button>
               <Button className="w-full h-20 bg-black border border-white/5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white/5 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display italic">
                  Force Node Sync <RefreshCcw className="w-5 h-5 text-white/10 group-hover/btn:text-primary transition-colors" />
               </Button>
               <Button className="w-full h-20 bg-primary/5 border border-primary/20 text-primary rounded-[2rem] text-[11px] font-black uppercase tracking-[0.25em] hover:bg-primary/10 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display italic">
                  Cluster_Deploy <Layers className="w-5 h-5 text-primary group-hover/btn:scale-110 transition-transform" />
               </Button>
            </div>
         </div>
      </div>
    </div>
  );

  const renderCareers = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Careers Manager</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[9px] font-black text-primary uppercase tracking-widest font-mono">
                {positions.length} OPEN JOBS
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">{applications.length} APPLICATIONS</p>
          </div>
        </div>
        <Button 
          onClick={() => {
            setEditingPosition({
              title: "",
              team: "",
              location: "Remote",
              type: "Full-time",
              description: "",
              requirements: [],
              active: true
            });
            setIsNewPosition(true);
          }} 
          className="h-14 px-10 bg-slate-50 hover:bg-white text-black font-black rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-2xl flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display italic"
        >
          <Plus className="w-5 h-5" /> Add New Job
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="xl:col-span-2 space-y-8">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-md">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-[12px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-3 italic font-display">
                <Briefcase className="w-4 h-4 text-primary" /> Job Listings
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/[0.01] border-b border-white/5">
                    <th className="px-8 py-6 text-[9px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Status</th>
                    <th className="px-8 py-6 text-[9px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Position</th>
                    <th className="px-8 py-6 text-[9px] font-black uppercase tracking-[0.4em] text-white/20 font-mono text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {positions.map((pos) => (
                    <tr key={pos.id} className="group/row hover:bg-white/[0.01] transition-colors">
                      <td className="px-8 py-6">
                        <div className={cn("inline-flex items-center gap-2 px-2 py-1 rounded bg-black border text-[8px] font-black uppercase tracking-widest", 
                          pos.active ? "border-emerald-500/20 text-emerald-500" : "border-white/10 text-white/20")}>
                          <div className={cn("w-1 h-1 rounded-full", pos.active ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-white/10")} />
                          {pos.active ? "ACTIVE" : "INACTIVE"}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-[13px] font-black text-white tracking-widest uppercase mb-1">{pos.title}</div>
                        <div className="text-[9px] text-white/20 font-black uppercase tracking-widest font-mono">{pos.team} // {pos.location}</div>
                      </td>
                      <td className="px-8 py-6 text-right space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-primary transition-all"
                          onClick={() => {
                            setEditingPosition(pos);
                            setIsNewPosition(false);
                          }}
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-red-500 transition-all"
                          onClick={async () => {
                            if (confirm("Delete this job?")) {
                              await supabase.from('career_positions').delete().eq('id', pos.id);
                              fetchCareersData();
                              toast.info("Job deleted.");
                            }
                          }}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-4">External Application Form</h3>
            <p className="text-white/40 text-xs mb-4">
              Add your Tally/Google Form link. Careers page will show this as "Apply via Form".
            </p>
            <Input
              value={careerExternalFormUrl}
              onChange={(e) => setCareerExternalFormUrl(e.target.value)}
              placeholder="https://tally.so/r/your-form-id"
              className="h-11 bg-black border-white/10 text-white/80 mb-3"
            />
            <Button onClick={handleSaveCareerFormLink} className="w-full h-10 rounded-xl bg-primary hover:bg-primary/90 text-white">
              Save Form Link
            </Button>
          </div>
           <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <h3 className="text-[12px] font-black text-white uppercase tracking-[0.3em] mb-10 flex items-center gap-3 italic font-display">
              <Users className="w-4 h-4 text-emerald-500" /> Recent Applications
            </h3>
            <div className="space-y-6">
              {applications.length === 0 ? (
                <div className="text-[10px] text-white/10 uppercase tracking-widest text-center py-10 font-mono italic">No applications yet</div>
              ) : (
                applications.map((app) => (
                  <div key={app.id} className="p-6 rounded-2xl bg-black border border-white/5 hover:border-white/10 transition-all group/app">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black text-white uppercase tracking-widest">{app.full_name}</span>
                      <span className="text-[8px] font-mono text-white/20 uppercase">{new Date(app.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="text-[10px] text-primary font-black uppercase tracking-widest mb-4 italic font-display">
                      {positions.find(p => p.id === app.position_id)?.title || "Unknown Job"}
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={`mailto:${app.email}`} className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white transition-colors">
                        <Mail className="w-3 h-3" />
                      </a>
                      {app.portfolio_url && (
                        <a href={app.portfolio_url} target="_blank" className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <div className="flex-1" />
                      <div className="flex gap-2 opacity-0 group-hover/app:opacity-100 transition-opacity">
                         <button 
                          className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20 transition-all"
                          onClick={() => toast.success("Marked as reviewed.")}
                         >
                            <CheckCircle2 className="w-3 h-3" />
                         </button>
                         <button className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-red-500 transition-all">
                            <X className="w-3 h-3" />
                         </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title: string) => (
    <div className="min-h-[500px] flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[4rem] text-center p-12 bg-white/[0.01]">
      <div className="w-24 h-24 rounded-3xl bg-black border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-20" />
        <Zap className="w-10 h-10 text-primary relative z-10" />
      </div>
      <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-4 italic font-display">{title}</h2>
      <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em] max-w-sm leading-relaxed">System Module is currently in deep-state development or access is restricted by protocol Root_01.</p>
    </div>
  );

  // --- MAIN LOGIC ---

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-primary/20 selection:text-white">
        {/* Technical Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-40" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-xl p-1.5 rounded-[3.5rem] bg-black border border-white/5 shadow-2xl overflow-hidden"
        >
          <div className="p-12 text-center relative">
            <div className="absolute top-0 right-0 p-8 flex flex-col items-end gap-1 opacity-20 hidden sm:flex">
               <div className="text-[9px] font-black font-mono tracking-widest">GATE_ID: 0x82A1</div>
               <div className="text-[9px] font-black font-mono tracking-widest">PROTO: ASTRA_ROOT</div>
            </div>

            <div className="flex flex-col items-center mb-12 group">
              <div className="relative mb-10">
                <div className="absolute -inset-8 bg-primary/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative w-24 h-24 rounded-[2.5rem] bg-black border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                  <Shield className="w-10 h-10 text-primary relative z-10" />
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-primary/40 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl font-black text-white tracking-[0.2em] uppercase mb-4 font-display italic">ASTRA_GATE</h1>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" />
                <p className="text-primary font-['Anonymous_Pro'] text-[9px] uppercase tracking-[0.4em] font-black">System_Authentication_Required</p>
              </div>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative space-y-4">
                <div className="flex items-center justify-between px-6">
                  <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">Access_Token_Handshake</label>
                  <span className="text-[9px] font-black text-primary/40 uppercase tracking-[0.4em] font-mono">ENCRYPTED_AES256</span>
                </div>
                <div className="relative group/input">
                  <Input 
                    type="password" 
                    placeholder="••••••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-20 bg-white/[0.02] border-white/5 text-white rounded-[2rem] font-mono text-center tracking-[1.2rem] focus:border-primary/40 focus:bg-white/[0.04] transition-all text-2xl placeholder:text-white/5 border-2 shadow-inner"
                  />
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/10 group-focus-within/input:text-primary transition-colors" />
                </div>
              </div>

              <div className="pt-2 text-[9px] font-black text-white/10 uppercase tracking-[0.3em] font-mono leading-relaxed mb-8 max-w-[280px] mx-auto">
                Warning: Unauthorized access attempts are traced and logged to ASTRA_ROOT network.
              </div>

              <Button type="submit" className="w-full h-20 bg-slate-50 hover:bg-white text-black font-black rounded-[2rem] uppercase tracking-[0.3em] text-[12px] shadow-2xl group/btn transition-all hover:scale-[1.01] active:scale-[0.98] font-display italic">
                Initialize_Session <ArrowRight className="ml-4 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </Button>
            </form>

            <div className="mt-16 flex items-center justify-center gap-6 border-t border-white/5 pt-10">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">Secure_Vault</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">v1.0.0_Stable</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
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
          {activeTab === "health" && renderHealth()}
          {activeTab === "security" && renderSecurity()}
          {activeTab === "careers" && renderCareers()}
          {activeTab === "settings" && renderSettings()}
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
               className="w-full max-w-5xl h-full bg-[#050505] border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative"
             >
                {/* Tactical Top Bar */}
                <div className="px-12 py-10 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-20">
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-2xl">
                        {isNewPost ? <Plus className="w-8 h-8" /> : <Layers className="w-8 h-8" />}
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-white italic font-display uppercase tracking-wider">{isNewPost ? "Initialize_Node" : "Modify_Core_Log"}</h2>
                        <div className="flex items-center gap-3 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">NODE_UID: <span className="text-white/40">{editingPost.id}</span></span>
                        </div>
                      </div>
                   </div>
                   <Button variant="ghost" className="w-14 h-14 rounded-2xl text-white/20 hover:text-white hover:bg-white/5 border border-white/5 transition-all" onClick={() => { setEditingPost(null); setIsNewPost(false); }}>
                      <X className="w-6 h-6" />
                   </Button>
                </div>

                <div className="p-12 space-y-12 flex-1 overflow-y-auto custom-scrollbar overflow-x-hidden">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Node_Title</label>
                        <Input 
                          value={editingPost.title}
                          onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black text-xl px-10 focus:border-primary focus:ring-0 transition-all shadow-none border italic font-display"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Category_Logic</label>
                        <div className="relative">
                           <select 
                              value={editingPost.category}
                              onChange={(e) => setEditingPost({...editingPost, category: e.target.value as any})}
                              className="w-full h-20 bg-black border border-white/10 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-[11px] px-10 appearance-none focus:border-primary transition-all font-display italic"
                           >
                              <option value="Engineering">Engineering</option>
                              <option value="AI">AI</option>
                              <option value="Design">Design</option>
                              <option value="Strategy">Strategy</option>
                           </select>
                           <ChevronRight className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Meta_Spectral_Excerpt</label>
                      <Textarea 
                        value={editingPost.excerpt}
                        onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                        className="min-h-[140px] bg-black border-white/10 text-white/80 rounded-[2.5rem] p-10 focus:border-primary transition-all font-medium leading-relaxed shadow-none border italic"
                      />
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Binary_Content_Blob (Markdown)</label>
                      <div className="relative bg-black rounded-[3rem] border border-white/5 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                           <Terminal className="w-32 h-32" />
                        </div>
                        <Textarea 
                           value={editingPost.content}
                           onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                           className="min-h-[600px] bg-transparent border-none text-white/60 rounded-none font-mono p-12 focus:ring-0 leading-loose text-sm shadow-none overflow-x-hidden min-w-full"
                           style={{ width: '100%' }}
                        />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Author_Signature</label>
                        <Input 
                          value={editingPost.author}
                          onChange={(e) => setEditingPost({...editingPost, author: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black focus:border-primary transition-all shadow-none border italic font-display text-sm tracking-widest"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Visual_Asset_Pointer</label>
                        <Input 
                          value={editingPost.image}
                          onChange={(e) => setEditingPost({...editingPost, image: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white/40 rounded-[2rem] font-mono text-xs px-10 focus:border-primary transition-all shadow-none border"
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
                             editingPost.published ? 'bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]' : 'bg-white/5'
                          )} />
                          <div className={cn(
                             "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                             editingPost.published ? 'left-7' : 'left-1'
                          )} />
                        </div>
                        <span className="text-[11px] font-black text-white/20 group-hover:text-white uppercase tracking-[0.3em] font-display italic transition-colors">Propagate_To_Production</span>
                      </label>
                   </div>
                   <div className="flex gap-6">
                      <button className="h-16 px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] text-white/20 hover:text-white transition-all font-display italic" onClick={() => { setEditingPost(null); setIsNewPost(false); }}>Abort_Mission</button>
                      <Button onClick={handleSave} className="h-16 px-14 bg-primary hover:bg-primary/80 text-white font-black rounded-2xl uppercase tracking-[0.3em] text-[12px] shadow-[0_15px_40px_rgba(var(--primary-rgb),0.3)] flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display italic">
                         <Save className="w-5 h-5" /> Synchronize_Node
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
               className="w-full max-w-4xl h-full bg-[#050505] border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative"
             >
                <div className="px-12 py-10 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-20">
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-2xl">
                        {isNewPosition ? <Plus className="w-8 h-8" /> : <Briefcase className="w-8 h-8" />}
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-white italic font-display uppercase tracking-wider">{isNewPosition ? "Initialize_Position" : "Modify_Position_Record"}</h2>
                         <div className="flex items-center gap-3 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">POSITION_ID: <span className="text-white/40">{editingPosition.id || "NEW_NODE"}</span></span>
                        </div>
                      </div>
                   </div>
                   <Button variant="ghost" className="w-14 h-14 rounded-2xl text-white/20 hover:text-white hover:bg-white/5 border border-white/5 transition-all" onClick={() => { setEditingPosition(null); setIsNewPosition(false); }}>
                      <X className="w-6 h-6" />
                   </Button>
                </div>

                <div className="p-12 space-y-10 flex-1 overflow-y-auto custom-scrollbar">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Position_Title</label>
                        <Input 
                          value={editingPosition.title}
                          onChange={(e) => setEditingPosition({...editingPosition, title: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black text-xl px-10 focus:border-primary transition-all shadow-none border italic font-display"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Team_Allocation</label>
                        <Input 
                          value={editingPosition.team}
                          onChange={(e) => setEditingPosition({...editingPosition, team: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black tracking-widest text-sm px-10 focus:border-primary transition-all shadow-none border font-display italic"
                        />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Deployment_Location</label>
                        <Input 
                          value={editingPosition.location}
                          onChange={(e) => setEditingPosition({...editingPosition, location: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black text-sm px-10 focus:border-primary transition-all shadow-none border italic font-display"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Contract_Class</label>
                        <Input 
                          value={editingPosition.type}
                          onChange={(e) => setEditingPosition({...editingPosition, type: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black text-sm px-10 focus:border-primary transition-all shadow-none border italic font-display"
                        />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Role_Mission_Briefing</label>
                      <Textarea 
                        value={editingPosition.description}
                        onChange={(e) => setEditingPosition({...editingPosition, description: e.target.value})}
                        className="min-h-[200px] bg-black border-white/10 text-white/80 rounded-[2.5rem] p-10 focus:border-primary transition-all font-medium leading-relaxed shadow-none border italic"
                      />
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Job_Requirements (one per line)</label>
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
                        className="min-h-[180px] bg-black border-white/10 text-white/80 rounded-[2.5rem] p-10 focus:border-primary transition-all font-medium leading-relaxed shadow-none border italic"
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
                        <span className="text-[11px] font-black text-white/20 group-hover:text-white uppercase tracking-[0.3em] font-display italic transition-colors">Position_Live_In_Public_Index</span>
                      </label>
                   </div>
                </div>

                <div className="px-12 py-10 border-t border-white/5 bg-black flex items-center justify-end gap-6 sticky bottom-0 z-20">
                    <button className="h-16 px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] text-white/20 hover:text-white transition-all font-display italic" onClick={() => { setEditingPosition(null); setIsNewPosition(false); }}>Abort_Mission</button>
                    <Button onClick={handleSavePosition} className="h-16 px-14 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl uppercase tracking-[0.3em] text-[12px] shadow-[0_15px_40px_rgba(16,185,129,0.2)] flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display italic">
                        <Save className="w-5 h-5" /> Commit_Changes
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
