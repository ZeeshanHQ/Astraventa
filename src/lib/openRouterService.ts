/**
 * Centralized OpenRouter API client for Astraventa Tools.
 */

const OPENROUTER_API_KEY = "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";
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1/chat/completions";

// Confirmed extremely reliable free model on OpenRouter
const DEFAULT_MODEL = "openrouter/free";

export interface OpenRouterMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface OpenRouterOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export async function callOpenRouter(
  messages: OpenRouterMessage[],
  options: OpenRouterOptions = {}
): Promise<string> {
  const { model = DEFAULT_MODEL, temperature = 0.7, maxTokens = 4096 } = options;

  const response = await fetch(OPENROUTER_BASE_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://astraventa.com",
      "X-Title": "Astraventa Tools",
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      (errorData as any)?.error?.message || `OpenRouter API error: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  const content = (data as any)?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("No content returned from OpenRouter API");
  }

  return (content as string).trim();
}