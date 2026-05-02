import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Filter, Newspaper, Clock, User, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogService, BlogPost } from "@/lib/blog-service";

const categories = ["All", "Engineering", "AI", "Design", "Strategy"];

const BlogListing = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    blogService.getPublishedPostsFromSupabase().then(setPosts);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = filter === "All" || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/10 transition-colors duration-700">
      <Header />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 max-w-[1280px] mx-auto">
        {/* ─── HEADER ──────────────────────────────────────────────────────────── */}
        <section className="mb-20 text-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"
          />
          
          <div className="relative z-10">
            <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100 bg-white text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.2em] text-blue-600 mb-6 sm:mb-8 shadow-sm">
              <Newspaper className="w-4 h-4" /> Editorial & Insights
            </motion.div>
            <motion.h1 
              {...fadeUp} transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none"
            >
              The <span className="text-blue-600">Astra</span> Log.
            </motion.h1>
            <motion.p 
              {...fadeUp} transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-2xl mx-auto font-medium"
            >
              Deep technical narratives, engineering principles, and the future of autonomous intelligence.
            </motion.p>
          </div>
        </section>

        {/* ─── SEARCH & FILTER ────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm relative z-20">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10" 
                  : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
            <Input 
              placeholder="Search the logs..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 pl-12 pr-6 bg-slate-50 border-none rounded-full font-medium text-slate-600 placeholder:text-slate-300 focus-visible:ring-1 focus-visible:ring-blue-500/50"
            />
          </div>
        </div>

        {/* ─── BLOG GRID ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={`/blog/${post.id}`} className="group block h-full">
                  <div className="h-full bg-white border border-slate-100 rounded-[3rem] p-6 hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4">
                        <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-mono font-black uppercase tracking-widest text-slate-900 shadow-sm">
                          {post.category}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col px-4">
                      <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <User className="w-4 h-4 text-slate-400" />
                          </div>
                          <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest font-mono">{post.author}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center"
          >
            <Sparkles className="w-12 h-12 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">No logs found.</h3>
            <p className="text-slate-500 font-medium">Try broadening your search or selecting 'All' categories.</p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogListing;
