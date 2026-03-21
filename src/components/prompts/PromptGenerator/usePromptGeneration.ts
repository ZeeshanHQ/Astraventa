
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { aiPlatforms } from "./promptData";
import { requestPromptGeneration } from "@/lib/promptGeneratorService";

export const usePromptGeneration = () => {
  const [userInput, setUserInput] = useState(() => localStorage.getItem("astra-prompt-input") || "");
  const [promptType, setPromptType] = useState(() => localStorage.getItem("astra-prompt-type") || "");
  const [aiPlatform, setAiPlatform] = useState(() => localStorage.getItem("astra-prompt-platform") || "");
  const [outputFormat, setOutputFormat] = useState(() => localStorage.getItem("astra-prompt-format") || "casual");
  const [language, setLanguage] = useState(() => localStorage.getItem("astra-prompt-lang") || "english");
  const [visualReference, setVisualReference] = useState("");
  const [referenceType, setReferenceType] = useState("none");
  const [generatedPrompt, setGeneratedPrompt] = useState(() => localStorage.getItem("astra-prompt-generated") || "");
  const [originalPrompt, setOriginalPrompt] = useState(() => localStorage.getItem("astra-prompt-generated") || "");
  const [loadingStage, setLoadingStage] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [promptScore, setPromptScore] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("astra-prompt-input", userInput);
    localStorage.setItem("astra-prompt-type", promptType);
    localStorage.setItem("astra-prompt-platform", aiPlatform);
    localStorage.setItem("astra-prompt-format", outputFormat);
    localStorage.setItem("astra-prompt-lang", language);
    localStorage.setItem("astra-prompt-generated", generatedPrompt);
  }, [userInput, promptType, aiPlatform, outputFormat, language, generatedPrompt]);

  const persistVersion = (prompt: string, score: number | null) => {
    try {
      const existing = JSON.parse(localStorage.getItem("prompt-versions") || "[]") as Array<any>;
      const normalizedHistory = existing.map((entry) => ({
        ...entry,
        timestamp: entry.timestamp ?? new Date().toISOString(),
      }));

      const newVersion = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        prompt,
        platform: aiPlatforms.find((p) => p.value === aiPlatform)?.label || aiPlatform || "Universal",
        score: score ?? undefined,
        isFavorite: false,
      };

      normalizedHistory.unshift(newVersion);
      localStorage.setItem("prompt-versions", JSON.stringify(normalizedHistory.slice(0, 50)));
    } catch (error) {
      console.warn("Failed to persist prompt history", error);
    }
  };

  const simulateProgress = () => {
    const stages = [
      "Analyzing Intent...",
      "Consulting Research Agent...",
      "Synthesizing Strategy...",
      "Engineering Prompt Structure...",
      "Finalizing Output..."
    ];
    let index = 0;
    setLoadingStage(stages[0]);

    return setInterval(() => {
      index = (index + 1) % stages.length;
      setLoadingStage(stages[index]);
    }, 2500);
  };

  const generatePrompt = async () => {
    if (!userInput.trim() || !promptType || !aiPlatform || !outputFormat) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsGenerating(true);
    setPromptScore(null);
    setReasoning("");
    const intervalId = simulateProgress();

    try {
      const response = await requestPromptGeneration({
        mode: "generate",
        userInput: userInput.trim(),
        promptType,
        aiPlatform,
        outputFormat,
        language,
        visualReference: visualReference?.trim() || undefined,
        referenceType,
      });

      setGeneratedPrompt(response.prompt);
      setOriginalPrompt(response.prompt);
      setPromptScore(response.score ?? null);
      setReasoning(response.metadata?.reason || "");
      persistVersion(response.prompt, response.score ?? null);
      toast.success("Prompt generated successfully!");
      if (response.metadata?.fallback) {
        toast.message("Offline generator used", {
          description: "Start the backend server to switch back to live AI."
        });
      }
    } catch (error: any) {
      console.error("Prompt generation failed", error);
      toast.error(error.message || "Failed to generate prompt");
    } finally {
      setIsGenerating(false);
      clearInterval(intervalId);
      setLoadingStage("");
    }
  };

  const enhancePrompt = async () => {
    if (!generatedPrompt) {
      toast.message("Generate a prompt before enhancing.");
      return;
    }

    setIsGenerating(true);

    try {
      const response = await requestPromptGeneration({
        mode: "enhance",
        userInput: userInput.trim() || "Refine the existing prompt",
        promptType: promptType || "app-development",
        aiPlatform: aiPlatform || "universal",
        outputFormat,
        language,
        visualReference: visualReference?.trim() || undefined,
        referenceType,
        existingPrompt: generatedPrompt,
      });

      setGeneratedPrompt(response.prompt);
      setOriginalPrompt(response.prompt);
      setPromptScore(response.score ?? promptScore ?? null);
      persistVersion(response.prompt, response.score ?? promptScore ?? null);
      toast.success("Prompt enhanced successfully!");
      if (response.metadata?.fallback) {
        toast.message("Offline generator used", {
          description: "Start the backend server to switch back to live AI."
        });
      }
    } catch (error: any) {
      console.error("Prompt enhancement failed", error);
      toast.error(error.message || "Failed to enhance prompt");
    } finally {
      setIsGenerating(false);
    }
  };

  const restoreVersion = (prompt: string) => {
    setGeneratedPrompt(prompt);
    setOriginalPrompt(prompt);
  };

  const resetPromptEdits = () => {
    setGeneratedPrompt(originalPrompt);
  };

  const hasPromptChanges = Boolean(generatedPrompt && originalPrompt && generatedPrompt !== originalPrompt);

  const handleVisualPromptGenerated = (prompt: string) => {
    setUserInput(prompt);
  };

  return {
    userInput,
    setUserInput,
    promptType,
    setPromptType,
    aiPlatform,
    setAiPlatform,
    outputFormat,
    setOutputFormat,
    language,
    setLanguage,
    visualReference,
    setVisualReference,
    referenceType,
    setReferenceType,
    generatedPrompt,
    setGeneratedPrompt,
    isGenerating,
    promptScore,
    generatePrompt,
    enhancePrompt,
    restoreVersion,
    handleVisualPromptGenerated,
    hasPromptChanges,
    resetPromptEdits,
    loadingStage,
    reasoning,
  };
};

