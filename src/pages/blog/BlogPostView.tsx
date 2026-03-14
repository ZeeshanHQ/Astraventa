import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, User, Share2, Bookmark, CheckCircle2, ArrowRight, Twitter, Linkedin, Link2, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogService, BlogPost } from "@/lib/blog-service";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";

// A very basic markdown to simple JSX renderer
const MarkdownRenderer = ({ content }: { content: string }) => {
  const lines = content.split("\n");
  
  return (
    <div className="prose prose-slate lg:prose-xl max-w-none">
      {lines.map((line, i) => {
        if (line.startsWith("# ")) {
          return <h1 key={i} className="text-4xl font-black text-slate-900 mt-12 mb-6 tracking-tight">{line.replace("# ", "")}</h1>;
        }
        if (line.startsWith("## ")) {
          return <h2 key={i} className="text-2xl font-black text-slate-800 mt-10 mb-4 tracking-tight">{line.replace("## ", "")}</h2>;
        }
        if (line.startsWith("### ")) {
          return <h3 key={i} className="text-xl font-bold text-slate-800 mt-8 mb-3 tracking-tight">{line.replace("### ", "")}</h3>;
        }
        if (line.startsWith("- ")) {
          return (
            <div key={i} className="flex gap-3 mb-2 items-start">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <span className="text-slate-600 font-medium">{line.replace("- ", "")}</span>
            </div>
          );
        }
        if (line.trim() === "") return <br key={i} />;
        return <p key={i} className="text-lg text-slate-600 font-medium leading-relaxed mb-6">{line}</p>;
      })}
    </div>
  );
};

const BlogPostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (id) {
      const p = blogService.getPostById(id);
      if (p) {
        setPost(p);
        setRelatedPosts(blogService.getPosts().filter(item => item.id !== id).slice(0, 2));
      } else {
        navigate("/blog");
      }
    }
  }, [id, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-24">
        {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
        <section className="px-6 max-w-[1400px] mx-auto mb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-widest text-[10px] mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to logs
          </Link>

          <div className="max-w-[1000px]">
            <div className="flex items-center gap-4 text-[10px] font-mono text-blue-600 uppercase tracking-widest mb-6 font-black">
              <span className="px-3 py-1 bg-blue-50 rounded-full">{post.category}</span>
              <span className="text-slate-200">/</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-8 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-slate-900 uppercase tracking-widest font-mono">{post.author}</div>
                  <div className="text-[11px] text-slate-400 font-mono uppercase tracking-[0.1em]">{post.readTime} reading</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-slate-100 hover:border-blue-500 hover:text-blue-600 transition-all">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-slate-100 hover:border-blue-500 hover:text-blue-600 transition-all">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-slate-100 hover:border-blue-500 hover:text-blue-600 transition-all">
                  <Link2 className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="icon" className="ml-2 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURE IMAGE ──────────────────────────────────────────────────── */}
        <section className="px-6 max-w-[1400px] mx-auto mb-20">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/5">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </section>

        {/* ─── CONTENT ────────────────────────────────────────────────────────── */}
        <section className="px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <MarkdownRenderer content={post.content} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Related */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 font-mono">Related Logs</h4>
              <div className="space-y-8">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.id}`} className="group block">
                    <div className="text-[10px] font-mono text-blue-600 uppercase tracking-widest mb-2 font-black">{rp.category}</div>
                    <h5 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-tight mb-3">
                      {rp.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5" /> {rp.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
               <div className="relative z-10">
                 <h4 className="text-xl font-black mb-4 tracking-tight leading-tight">Sync your frequency.</h4>
                 <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
                   Join 15,000+ engineers receiving our weekly architectural deep-dives.
                 </p>
                 <div className="flex flex-col gap-3">
                   <input 
                     type="email" 
                     placeholder="your@email.com" 
                     className="bg-white/5 border border-white/10 rounded-full h-12 px-6 text-sm font-medium focus:outline-none focus:border-blue-500 transition-colors"
                   />
                   <Button className="rounded-full h-12 font-black uppercase tracking-widest text-[10px] bg-blue-600 hover:bg-blue-500 w-full">
                     Initialize Sync
                   </Button>
                 </div>
               </div>
            </div>
          </aside>
        </section>

        {/* ─── ECOSYSTEM SYNC ────────────────────────────────────────────────────────── */}
        <section className="pt-32 px-6">
          <div className="max-w-[1400px] mx-auto border-t border-slate-100 pt-20">
            <AstraEcosystemSync 
              tools={[
                { title: "AstraBlog AI", tagline: "Autonomous Core Log Generator", icon: Newspaper, color: "text-blue-600", bg: "bg-blue-600/10", href: "/tools/astra-blog" },
                { title: "AstraPrompt AI", tagline: "Engineering Design Prompts", icon: Share2, color: "text-indigo-500", bg: "bg-indigo-500/10", href: "/tools/astra-prompt" },
                { title: "AstraAgent AI", tagline: "The Browser Worker Agent", icon: User, color: "text-slate-950", bg: "bg-slate-950/10", href: "/tools/astra-agent" }
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostView;
