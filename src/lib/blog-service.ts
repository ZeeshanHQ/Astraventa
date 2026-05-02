import { supabase, SupabaseBlogPost } from "@/lib/supabase";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: "Engineering" | "AI" | "Design" | "Strategy";
  image: string;
  readTime: string;
  published: boolean;
}

const INITIAL_POSTS: BlogPost[] = [
  {
    id: "sub-second-web-delivery",
    title: "Engineering Sub-Second Web Delivery with Edge Infrastructure",
    excerpt: "How we optimized our core engine to achieve sub-100ms LCP scores across 42 global regions using hybrid edge-compute patterns.",
    content: `# Engineering Sub-Second Web Delivery

In the high-velocity engineering world, latency is the enemy of conversion. At Astraventa, we've moved beyond traditional SSR patterns to a hybrid edge-compute model.

## The Problem with Traditional CDNs
Standard CDNs are great for static assets, but dynamic content often suffers from "cold starts" and long round-trips to the origin server.

## The Astraventa Solution
By leveraging Vercel Edge Functions and distributed KV stores, we bring the logic to the user. 
- **Deterministic Routing**: We predict user navigation patterns to pre-warm edge nodes.
- **Zero-Byte Hydration**: Our components are designed to be interactive without heavy JS payloads.

### Key Metrics
- **P99 API Latency**: 4.2ms
- **Lighthouse Performance**: 100/100
- **Total Bundle Size**: < 45kB

Stay tuned for our deep dive into deterministic layout shifts next week.`,
    author: "Zeeshan Jay",
    date: "2024-03-12",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1518433278981-955039b10c02?q=80&w=1970",
    readTime: "6 min",
    published: true
  },
  {
    id: "autonomous-agents-enterprise",
    title: "The Rise of Deterministic Autonomous Agents in Enterprise Workflows",
    excerpt: "Moving beyond simple chatbots to high-fidelity agents that execute complex business logic with zero human intervention.",
    content: `# The Rise of Deterministic Autonomous Agents

Enterprise AI is moving past the "chat" phase. We are now entering the era of Action-Oriented Intelligence.

## Why Determinism Matters
If an agent is managing your supply chain, "hallucination" isn't just a bug—it's a liability. We build agents that follow strict logical guardrails.

### The Agentic Loop
1. **Perception**: Capturing intent via multi-modal ingestion.
2. **Planning**: Breaking down complex tasks into sub-routines.
3. **Execution**: Interacting with real-world APIs and databases.
4. **Verification**: Confirming the output against the original intent.

Our latest deployment for a global logistics firm reduced operational overhead by 40% in just six weeks.`,
    author: "Principal AI Architect",
    date: "2024-03-10",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    readTime: "8 min",
    published: true
  },
  {
    id: "designing-for-intelligent-systems",
    title: "Experience Architecture: Designing for Intelligent Systems",
    excerpt: "UX patterns that empower users to collaborate with AI agents instead of just commanding them.",
    content: `# Experience Architecture

Designing for AI requires a shift in mindset. We are no longer designing static interfaces; we are designing interfaces for dynamic intelligence.

## Collaboration over Command
Instead of "Run Project", we use "Collaborate on Synthesis". This subtle shifts changes how users perceive the output of autonomous systems.

### UX Principles for AI
- **Anticipatory Feedback**: Showing the agent's 'thinking' process in real-time.
- **Graceful Failure**: Elegant fallbacks when context is ambiguous.
- **Recursive Refinement**: Allowing users to tweak agent logic mid-flow.

Premium design is about making the invisible complexity of engineering feel like magic.`,
    author: "Lead Designer",
    date: "2024-03-08",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964",
    readTime: "5 min",
    published: true
  }
];

const STORAGE_KEY = "astraventa_blog_posts";

const fromSupabasePost = (post: SupabaseBlogPost): BlogPost => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  content: post.content,
  author: post.author,
  date: post.date,
  category: post.category,
  image: post.image,
  readTime: post.read_time,
  published: post.published,
});

const toSupabasePost = (post: BlogPost) => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  content: post.content,
  author: post.author,
  date: post.date,
  category: post.category,
  image: post.image,
  read_time: post.readTime,
  published: post.published,
});

export const blogService = {
  getPosts: (): BlogPost[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const localPosts = stored ? JSON.parse(stored) : [];
    
    // Merge initial posts with local ones, prioritizing local updates if IDs match
    const allPosts = [...INITIAL_POSTS];
    localPosts.forEach((lp: BlogPost) => {
      const idx = allPosts.findIndex(p => p.id === lp.id);
      if (idx > -1) {
        allPosts[idx] = lp;
      } else {
        allPosts.push(lp);
      }
    });

    return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },

  getPostById: (id: string): BlogPost | undefined => {
    return blogService.getPosts().find(p => p.id === id);
  },

  getPostsFromSupabase: async (): Promise<BlogPost[]> => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Could not load Supabase blog posts:', error.message);
      return blogService.getPosts();
    }

    const supabasePosts = (data || []).map(fromSupabasePost);
    const merged = [...supabasePosts];

    INITIAL_POSTS.forEach((post) => {
      if (!merged.some((item) => item.id === post.id)) {
        merged.push(post);
      }
    });

    return merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },

  getPublishedPostsFromSupabase: async (): Promise<BlogPost[]> => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('date', { ascending: false });

    if (error) {
      console.error('Could not load published Supabase blog posts:', error.message);
      return blogService.getPosts().filter((post) => post.published);
    }

    const supabasePosts = (data || []).map(fromSupabasePost);
    const merged = [...supabasePosts];

    INITIAL_POSTS.filter((post) => post.published).forEach((post) => {
      if (!merged.some((item) => item.id === post.id)) {
        merged.push(post);
      }
    });

    return merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },

  getPostByIdFromSupabase: async (id: string): Promise<BlogPost | undefined> => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (!error && data) {
      return fromSupabasePost(data);
    }

    return blogService.getPostById(id);
  },

  savePostToSupabase: async (post: BlogPost) => {
    const { error } = await supabase
      .from('blog_posts')
      .upsert(toSupabasePost(post));

    if (error) throw error;
  },

  savePost: (post: BlogPost) => {
    const posts = blogService.getPosts();
    const isInitial = INITIAL_POSTS.some(p => p.id === post.id);
    
    // We only save to localStorage. If it's an initial post, we'll store the override.
    const stored = localStorage.getItem(STORAGE_KEY);
    let localPosts = stored ? JSON.parse(stored) : [];
    
    const idx = localPosts.findIndex((p: BlogPost) => p.id === post.id);
    if (idx > -1) {
      localPosts[idx] = post;
    } else {
      localPosts.push(post);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(localPosts));
  },

  deletePost: (id: string) => {
    // Note: Can't really delete INITIAL_POSTS from source code, 
    // but we can mark them as unpublished or hide them in local state if needed.
    // For this implementation, we just manage localStorage.
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      let localPosts = JSON.parse(stored);
      localPosts = localPosts.filter((p: BlogPost) => p.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(localPosts));
    }
  },

  deletePostFromSupabase: async (id: string) => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};
