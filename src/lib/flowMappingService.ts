import { callOpenRouter } from "@/lib/openRouterService";

const SYSTEM_PROMPT = `You are AstraFlow, an autonomous orchestration engine.
Your sole purpose is to parse unstructured human text and map it directly into the provided strict JSON schema.

RULES:
1. You must output ONLY valid, raw JSON.
2. NO markdown wrapping, NO backticks, NO explanations, NO intro/outro text.
3. If an expected field is not mentioned in the human text, omit it or leave it as an empty string.
4. Try to infer values if they logically map to standard options (e.g. "Low", "Medium", "High", "Critical").

SCHEMA TO MAP AGAINST:
[TARGET_SCHEMA]
`;

export async function requestSchemaMapping(
  userInput: string,
  schemaDefinition: any[],
  schemaType: string
): Promise<{ success: boolean; data?: Record<string, string>; error?: string }> {
  // Convert the schema definition into a clean textual list to feed the AI
  const schemaStr = schemaDefinition
    .map(
      (field) =>
        `- "${field.id}": (${field.type}) ${field.label}. ${
          field.options ? `Valid options: [${field.options.join(", ")}]` : ""
        }`
    )
    .join("\n");

  const prompt = SYSTEM_PROMPT.replace("[TARGET_SCHEMA]", schemaStr);

  try {
    const rawOutput = await callOpenRouter(
      [
        { role: "system", content: prompt },
        { role: "user", content: userInput },
      ],
      { temperature: 0.1, maxTokens: 1024 } // Low temp for more deterministic JSON
    );

    // Robust JSON extraction (in case a model leaks backticks anyway)
    const jsonMatch = rawOutput.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON structure found in output");
    }

    const parsedData = JSON.parse(jsonMatch[0]);
    
    // Ensure the keys returning are strictly strings mapping to strings
    const safeData: Record<string, string> = {};
    for (const key of Object.keys(parsedData)) {
      if (parsedData[key] !== null && parsedData[key] !== undefined && parsedData[key] !== "") {
        safeData[key] = String(parsedData[key]);
      }
    }

    return {
      success: true,
      data: safeData,
    };
  } catch (error: any) {
    console.warn("[AstraFlow] Mapping failed:", error);
    return {
      success: false,
      error: error.message || "Failed to orchestrate logic.",
    };
  }
}
