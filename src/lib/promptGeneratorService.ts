import { callOpenRouter } from "@/lib/openRouterService";
import { synthesizeLocalPrompt } from "@/lib/localPromptSynthesis";
import type { PromptPayload, PromptResponse } from "@/lib/promptGeneratorTypes";

const PROMPT_GENERATOR_SYSTEM = `You are AstraPrompt, a world-class AI prompt engineering expert.
Your sole purpose is to craft extraordinarily effective, production-ready prompts for AI systems based on user requirements.

Output ONLY the raw prompt itself — NOT an explanation, NOT meta-commentary.
Do NOT say "Here is the prompt" or add any wrapper text. Just output the prompt directly.`;

export async function requestPromptGeneration(payload: PromptPayload): Promise<PromptResponse> {
  const { userInput, promptType, aiPlatform, outputFormat, language, visualReference, referenceType, mode, existingPrompt } = payload as any;

  const userMessage = mode === "enhance" && existingPrompt
    ? `ENHANCEMENT MODE: Improve this existing prompt significantly — make it more specific, effective, and well-structured:\n\n""" \n${existingPrompt}\n"""`
    : `Generate a ${outputFormat} format prompt for the ${aiPlatform} AI platform.\nTask type: ${promptType}\nTarget language: ${language}\nUser's goal: ${userInput}\n${visualReference ? `Reference material (${referenceType}): ${visualReference}` : ""}`;

  try {
    const generatedPrompt = await callOpenRouter(
      [
        { role: "system", content: PROMPT_GENERATOR_SYSTEM },
        { role: "user", content: userMessage },
      ],
      { temperature: 0.7, maxTokens: 2048 }
    );

    const lengthScore = Math.min(40, Math.floor(generatedPrompt.length / 50));
    const structureBonus = (generatedPrompt.match(/##|###|\*\*|\d\./g) || []).length * 2;
    const score = Math.max(75, Math.min(99, 60 + lengthScore + structureBonus));

    return {
      success: true,
      prompt: generatedPrompt,
      score,
      metadata: {
        provider: "openrouter",
        model: "openrouter/free",
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
