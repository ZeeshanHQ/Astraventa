import { callOpenRouter } from "@/lib/openRouterService";

const SYSTEM_PROMPT = `You are AstraMarket AI, a world-class Product Marketing Manager and Competitive Intelligence Agent.
The user relies on you to monitor complex business landscapes, analyze competitors, track pricing changes, and provide executive briefings.

Currently, the user's dashboard is tracking the following competitor domains:
[TARGET_DOMAINS]

When the user asks you a question, requests a briefing, or asks for feature analysis:
1. Base your response strongly on the context of the tracked domains. If they ask a general question about the market, analyze it through the lens of these competitors.
2. Provide highly strategic, insightful, and professional analysis using modern SaaS and business terminology.
3. Structure your response clearly using beautiful Markdown with headers (##, ###), bullet points, and bold text for emphasis.
4. If they ask for a 'weekly brief' or 'update', synthesize plausible but highly realistic strategic moves those competitors might be making based on your vast global dataset.
5. If no domains are tracked, gently remind the user to add some URLs to their Market Radar.
`;

export async function requestMarketIntelligence(
  userInput: string,
  trackedTargets: Array<{ url: string; status: string; changes: number }>
): Promise<string> {
  const domainList = trackedTargets.length > 0
    ? trackedTargets.map(t => `- ${t.url} (Detected Changes: ${t.changes})`).join("\n")
    : "No domains are currently being tracked.";

  const prompt = SYSTEM_PROMPT.replace("[TARGET_DOMAINS]", domainList);

  try {
    const rawOutput = await callOpenRouter(
      [
        { role: "system", content: prompt },
        { role: "user", content: userInput },
      ],
      { temperature: 0.7, maxTokens: 1500 }
    );

    return rawOutput;
  } catch (error: any) {
    console.error("[AstraMarket] Intelligence query failed:", error);
    throw new Error("Failed to consult the intelligence network. Please ensure your connection is stable.");
  }
}
