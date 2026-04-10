import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromptGenerator } from "@/components/prompts/PromptGenerator";
import { useNavigate } from "react-router-dom";

export default function AstraPrompt() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 relative flex flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PromptGenerator onBack={() => navigate("/tools")} />
      </main>
      <Footer />
    </div>
  );
}
