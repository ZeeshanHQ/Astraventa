import { writeFileSync } from 'fs';

// blogGeneratorService.ts
const blogService = `import { callOpenRouter } from "@/lib/openRouterService";

const BLOG_SYSTEM_PROMPT = \`You are AstraBlog AI, a world-class long-form SEO content strategist and writer for Astraventa — a high-velocity engineering and AI automation company.

Your articles are authoritative, insightful, and deeply technical. They are written for CTOs, VPs of Engineering, and senior tech decision-makers.

ALWAYS structure your output as clean, well-formatted Markdown with:
- A powerful H1 title that includes the target keyword
- An engaging executive introduction (2-3 sentences)
- 3-5 H2 sections with detailed content under each
- At least one H3 subsection per H2
- Real-world examples, data points, and actionable insights
- A concise conclusion

Output ONLY the raw Markdown article. No meta-commentary. No preambles.\`;

export const requestBlogGeneration = async (keyword) => {
  const topic = keyword.trim() || "AI Automation";

  return callOpenRouter(
    [
      { role: "system", content: BLOG_SYSTEM_PROMPT },
      {
        role: "user",
        content: \`Write a comprehensive, SEO-optimized long-form article about: "\${topic}".\\n\\nThe article must:\\n- Rank for the keyword "\${topic}" in search engines\\n- Be at least 800 words\\n- Include actionable insights that enterprise teams can implement immediately\\n- Feel like a thought-leadership piece from a top-tier engineering consultancy\`,
      },
    ],
    { temperature: 0.75, maxTokens: 3000 }
  );
};
`;

// promptGeneratorService.ts
const promptService = `import { callOpenRouter } from "@/lib/openRouterService";
import { synthesizeLocalPrompt } from "@/lib/localPromptSynthesis";

const PROMPT_GENERATOR_SYSTEM = \`You are AstraPrompt, a world-class AI prompt engineering expert.
Your sole purpose is to craft extraordinarily effective, production-ready prompts for AI systems based on user requirements.

Output ONLY the raw prompt itself — NOT an explanation, NOT meta-commentary.
Do NOT say "Here is the prompt" or add any wrapper text. Just output the prompt directly.\`;

export async function requestPromptGeneration(payload) {
  const { userInput, promptType, aiPlatform, outputFormat, language, visualReference, referenceType, mode, existingPrompt } = payload;

  const userMessage = mode === "enhance" && existingPrompt
    ? \`ENHANCEMENT MODE: Improve this existing prompt significantly — make it more specific, effective, and well-structured:\\n\\n""" \\n\${existingPrompt}\\n"""\`
    : \`Generate a \${outputFormat} format prompt for the \${aiPlatform} AI platform.\\nTask type: \${promptType}\\nTarget language: \${language}\\nUser's goal: \${userInput}\\n\${visualReference ? \`Reference material (\${referenceType}): \${visualReference}\` : ""}\`;

  try {
    const generatedPrompt = await callOpenRouter(
      [
        { role: "system", content: PROMPT_GENERATOR_SYSTEM },
        { role: "user", content: userMessage },
      ],
      { temperature: 0.7, maxTokens: 2048 }
    );

    const lengthScore = Math.min(40, Math.floor(generatedPrompt.length / 50));
    const structureBonus = (generatedPrompt.match(/##|###|\\*\\*|\\d\\./g) || []).length * 2;
    const score = Math.max(75, Math.min(99, 60 + lengthScore + structureBonus));

    return {
      success: true,
      prompt: generatedPrompt,
      score,
      metadata: {
        provider: "openrouter",
        model: "google/gemma-3-27b-it:free",
        mode,
        fallback: false,
      },
    };
  } catch (error) {
    console.warn("[AstraPrompt] OpenRouter failed, using local fallback:", error);
    return synthesizeLocalPrompt(payload, error instanceof Error ? error : undefined);
  }
}

export { requestPromptGeneration as default };
`;

writeFileSync('src/lib/blogGeneratorService.ts', blogService, 'utf8');
console.log('blogGeneratorService.ts written');

writeFileSync('src/lib/promptGeneratorService.ts', promptService, 'utf8');
console.log('promptGeneratorService.ts written');

console.log('All service files created successfully.');
