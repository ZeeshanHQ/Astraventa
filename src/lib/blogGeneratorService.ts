import { callOpenRouter } from "@/lib/openRouterService";

const BLOG_SYSTEM_PROMPT = `You are AstraBlog AI, a world-class long-form SEO content strategist and writer for Astraventa — a high-velocity engineering and AI automation company.

Your articles are authoritative, insightful, and deeply technical. They are written for CTOs, VPs of Engineering, and senior tech decision-makers.

ALWAYS structure your output as clean, well-formatted Markdown with:
- A powerful H1 title that includes the target keyword
- An engaging executive introduction (2-3 sentences)
- 3-5 H2 sections with detailed content under each
- At least one H3 subsection per H2
- Real-world examples, data points, and actionable insights
- A concise conclusion

Output ONLY the raw Markdown article. No meta-commentary. No preambles.`;

export const requestBlogGeneration = async (keyword) => {
  const topic = keyword.trim() || "AI Automation";

  return callOpenRouter(
    [
      { role: "system", content: BLOG_SYSTEM_PROMPT },
      {
        role: "user",
        content: `Write a comprehensive, SEO-optimized long-form article about: "${topic}".\n\nThe article must:\n- Rank for the keyword "${topic}" in search engines\n- Be at least 800 words\n- Include actionable insights that enterprise teams can implement immediately\n- Feel like a thought-leadership piece from a top-tier engineering consultancy`,
      },
    ],
    { temperature: 0.75, maxTokens: 3000 }
  );
};
