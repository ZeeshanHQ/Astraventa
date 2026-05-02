CREATE TABLE IF NOT EXISTS public.blog_posts (
  id text PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Astraventa Team',
  date date NOT NULL DEFAULT current_date,
  category text NOT NULL DEFAULT 'Engineering' CHECK (category IN ('Engineering', 'AI', 'Design', 'Strategy')),
  image text NOT NULL DEFAULT '',
  read_time text NOT NULL DEFAULT '5 min',
  published boolean NOT NULL DEFAULT false
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Anon can manage blog posts for admin dashboard"
  ON public.blog_posts
  FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.set_blog_posts_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER set_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.set_blog_posts_updated_at();
