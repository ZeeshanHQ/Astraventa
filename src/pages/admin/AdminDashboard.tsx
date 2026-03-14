import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  Save, 
  X, 
  Lock, 
  LayoutDashboard, 
  Settings, 
  ExternalLink,
  ChevronRight,
  Database,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogService, BlogPost } from "@/lib/blog-service";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const ADMIN_KEY = "astra2024";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setPosts(blogService.getPosts());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_KEY) {
      setIsAuthenticated(true);
      toast.success("Identity Verified. Welcome Back.");
    } else {
      toast.error("Invalid Authentication Key.");
    }
  };

  const handleSave = () => {
    if (editingPost) {
      blogService.savePost(editingPost);
      setPosts(blogService.getPosts());
      setEditingPost(null);
      setIsNewPost(false);
      toast.success("Blog log synchronized successfully.");
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to purge this log entry?")) {
      blogService.deletePost(id);
      setPosts(blogService.getPosts());
      toast.info("Log entry purged.");
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white/5 border border-white/10 rounded-[2.5rem] p-12 backdrop-blur-xl"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
              <Lock className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-white text-center mb-2 tracking-tight">Admin Terminal</h1>
          <p className="text-slate-500 text-center mb-8 font-mono text-[11px] uppercase tracking-[0.2em]">Restricted Access Control</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <Input 
              type="password" 
              placeholder="Enter Private Key" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 bg-white/5 border-white/10 text-white rounded-2xl font-mono text-center tracking-widest focus:border-blue-500 transition-all placeholder:text-slate-700"
            />
            <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest text-xs">
              Verify Identity
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-72 space-y-4 sticky top-32">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-slate-900 uppercase tracking-widest font-mono">Control Center</div>
                  <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.1em] font-mono flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Authorized
                  </div>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 text-blue-600 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all">
                  <Database className="w-4 h-4" /> Content Manager
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all">
                  <Settings className="w-4 h-4" /> Core Config
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 w-full space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Blog Logs</h1>
                <p className="text-slate-500 font-medium font-mono text-[10px] uppercase tracking-widest mt-2">{posts.length} Active Entries</p>
              </div>
              <Button onClick={startNewPost} className="h-12 px-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-full uppercase tracking-widest text-[10px] shadow-lg shadow-blue-500/20 flex items-center gap-2">
                <Plus className="w-4 h-4" /> New Log Entry
              </Button>
            </div>

            {/* Posts Table */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-50 bg-slate-50/50">
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">Status</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">Title</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">Category</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {posts.map((post) => (
                    <tr key={post.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        {post.published ? (
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-black font-mono text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                             Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-black font-mono text-amber-500 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                             Draft
                          </span>
                        )}
                      </td>
                      <td className="px-8 py-6 max-w-md">
                        <div className="font-bold text-slate-900 truncate">{post.title}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-1">{post.date} • {post.author}</div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-widest px-2 py-0.5 border border-slate-100 rounded-md bg-white">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right space-x-2">
                        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all" asChild>
                          <Link to={`/blog/${post.id}`} target="_blank">
                             <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-9 h-9 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all"
                          onClick={() => setEditingPost(post)}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-9 h-9 rounded-full hover:bg-red-50 hover:text-red-600 transition-all"
                          onClick={() => handleDelete(post.id)}
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
      </main>

      {/* Edit Overlay */}
      <AnimatePresence>
        {editingPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/40 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-12 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center border border-blue-500/20">
                    {isNewPost ? <Plus className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">{isNewPost ? "Initialize Log" : "Modify Execution Log"}</h2>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Entry ID: {editingPost.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="rounded-full w-10 h-10" onClick={() => setEditingPost(null)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-12 space-y-8 scrollbar-thin scrollbar-thumb-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono ml-1">Log Title</label>
                     <Input 
                       value={editingPost.title}
                       onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                       className="h-14 bg-slate-50 border-none rounded-2xl font-bold text-slate-900 placeholder:text-slate-300 focus-visible:ring-1 focus-visible:ring-blue-500/50"
                     />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono ml-1">Category Pool</label>
                     <select 
                       value={editingPost.category}
                       onChange={(e) => setEditingPost({...editingPost, category: e.target.value as any})}
                       className="w-full h-14 bg-slate-50 border-none rounded-2xl font-black uppercase tracking-widest text-[11px] px-6 appearance-none focus:ring-1 focus:ring-blue-500/50"
                     >
                       <option value="Engineering">Engineering</option>
                       <option value="AI">AI</option>
                       <option value="Design">Design</option>
                       <option value="Strategy">Strategy</option>
                     </select>
                   </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono ml-1">Excerpt (Meta Description)</label>
                  <Textarea 
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                    className="min-h-[100px] bg-slate-50 border-none rounded-2xl font-medium text-slate-600 p-6 focus-visible:ring-1 focus-visible:ring-blue-500/50"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono ml-1">Raw Content (Astra-Markdown)</label>
                  <Textarea 
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                    className="min-h-[400px] bg-slate-50 border-none rounded-2xl font-mono text-slate-600 p-6 focus-visible:ring-1 focus-visible:ring-blue-500/50 leading-relaxed text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono ml-1">Author Identity</label>
                    <Input 
                      value={editingPost.author}
                      onChange={(e) => setEditingPost({...editingPost, author: e.target.value})}
                      className="h-14 bg-slate-50 border-none rounded-2xl font-bold focus-visible:ring-1 focus-visible:ring-blue-500/50"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono ml-1">Target Read Time</label>
                    <Input 
                      value={editingPost.readTime}
                      onChange={(e) => setEditingPost({...editingPost, readTime: e.target.value})}
                      className="h-14 bg-slate-50 border-none rounded-2xl font-bold focus-visible:ring-1 focus-visible:ring-blue-500/50"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono ml-1">Hero Asset URL</label>
                    <Input 
                      value={editingPost.image}
                      onChange={(e) => setEditingPost({...editingPost, image: e.target.value})}
                      className="h-14 bg-slate-50 border-none rounded-2xl font-mono text-[11px] focus-visible:ring-1 focus-visible:ring-blue-500/50"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-12 py-8 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded-md border-slate-200 text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
                      checked={editingPost.published}
                      onChange={(e) => setEditingPost({...editingPost, published: e.target.checked})}
                    />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">Visible in public log</span>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" className="h-12 px-6 rounded-full font-black uppercase tracking-widest text-[10px] text-slate-400 hover:text-slate-900" onClick={() => setEditingPost(null)}>
                    Abort Changes
                  </Button>
                  <Button onClick={handleSave} className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-full uppercase tracking-widest text-[10px] shadow-lg shadow-blue-500/20 flex items-center gap-2">
                    <Save className="w-4 h-4" /> Synchronize Log
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
