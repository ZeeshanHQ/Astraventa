import React, { useState, useRef, useEffect } from "react";
import { requestBlogGeneration } from "@/lib/blogGeneratorService";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollText, Globe, Loader2, CheckCircle2, Copy, Download } from "lucide-react";
import { toast } from "sonner";

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return React.createElement("strong", { key: i, className: "font-bold text-slate-900" }, part.slice(2, -2));
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return React.createElement("em", { key: i, className: "italic" }, part.slice(1, -1));
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return React.createElement("code", { key: i, className: "bg-slate-100 text-teal-700 px-1.5 py-0.5 rounded text-[13px] font-mono" }, part.slice(1, -1));
    }
    return part;
  });
}

function renderMarkdown(text) {
  const lines = text.split("\n");
  return React.createElement(React.Fragment, null, ...lines.map((line, i) => {
    if (line.startsWith("# ")) return React.createElement("h1", { key: i, className: "text-2xl font-black text-slate-900 mt-6 mb-3 leading-tight" }, renderInline(line.slice(2)));
    if (line.startsWith("## ")) return React.createElement("h2", { key: i, className: "text-xl font-bold text-slate-800 mt-6 mb-2 border-b border-slate-200 pb-1" }, renderInline(line.slice(3)));
    if (line.startsWith("### ")) return React.createElement("h3", { key: i, className: "text-base font-bold text-slate-700 mt-4 mb-1" }, renderInline(line.slice(4)));
    if (/^(\d+)\.\s/.test(line)) return React.createElement("li", { key: i, className: "ml-5 list-decimal text-slate-700 text-[15px] my-0.5" }, renderInline(line.replace(/^\d+\.\s/, "")));
    if (line.startsWith("- ") || line.startsWith("* ")) return React.createElement("li", { key: i, className: "ml-5 list-disc text-slate-700 text-[15px] my-0.5" }, renderInline(line.slice(2)));
    if (line.trim() === "") return React.createElement("div", { key: i, className: "h-2" });
    return React.createElement("p", { key: i, className: "text-slate-700 text-[15px] leading-relaxed my-1" }, renderInline(line));
  }));
}

const LOADING_MESSAGES = [
  "Analyzing top SERP competitors...",
  "Drafting article outline...",
  "Writing section content...",
  "Applying SEO optimization...",
  "Finalizing draft...",
];

export default function AstraBlog() {
  const [keyword, setKeyword] = useState(() => localStorage.getItem("astra-blog-keyword") || "");
  const [article, setArticle] = useState(() => localStorage.getItem("astra-blog-article") || "");
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);
  const loadingInterval = useRef(null);

  useEffect(() => {
    localStorage.setItem("astra-blog-keyword", keyword);
    localStorage.setItem("astra-blog-article", article);
  }, [keyword, article]);

  useEffect(() => {
    return () => { if (loadingInterval.current) clearInterval(loadingInterval.current); };
  }, []);

  const handleGenerate = async () => {
    if (!keyword.trim()) return;
    setIsGenerating(true);
    setArticle("");
    let idx = 0;
    setLoadingMsg(LOADING_MESSAGES[0]);
    loadingInterval.current = setInterval(() => {
      idx = (idx + 1) % LOADING_MESSAGES.length;
      setLoadingMsg(LOADING_MESSAGES[idx]);
    }, 2200);

    try {
      const generatedArticle = await requestBlogGeneration(keyword);
      setArticle(generatedArticle);
      toast.success("Article generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to generate article. Please try again.");
    } finally {
      if (loadingInterval.current) clearInterval(loadingInterval.current);
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(article);
    toast.success("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([article], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = keyword.replace(/\s+/g, "-").toLowerCase() + ".md";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Article downloaded!");
  };

  return (
    React.createElement("div", { className: "min-h-screen bg-slate-50" },
      React.createElement(Header, null),
      React.createElement("main", { className: "pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]" },
        React.createElement("div", { className: "flex items-center gap-3 mb-8" },
          React.createElement("div", { className: "w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500" },
            React.createElement(ScrollText, { className: "w-6 h-6" })
          ),
          React.createElement("div", null,
            React.createElement("h1", { className: "text-3xl font-black text-slate-900" }, "AstraBlog AI"),
            React.createElement("p", { className: "text-slate-500 font-medium" }, "Long-form SEO Writer powered by Astra Engine")
          )
        ),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
          React.createElement("div", { className: "col-span-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg" },
            React.createElement("label", { className: "text-sm font-bold text-slate-700 mb-2 block" }, "Target Keyword / Topic"),
            React.createElement("textarea", {
              value: keyword,
              onChange: (e) => setKeyword(e.target.value),
              onKeyDown: (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleGenerate(); } },
              rows: 4,
              className: "w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500/20 mb-6 font-medium text-slate-800 outline-none resize-none text-[14px] leading-relaxed",
              placeholder: "e.g. How to use AI agents to automate enterprise workflows..."
            }),
            React.createElement("div", { className: "p-4 bg-teal-50 rounded-xl mb-6 border border-teal-100" },
              React.createElement("h4", { className: "text-xs font-bold text-teal-800 uppercase tracking-wider mb-2 flex items-center gap-1.5" },
                React.createElement(Globe, { className: "w-3.5 h-3.5" }), " Engine Status"
              ),
              React.createElement("div", { className: "text-sm font-medium text-teal-700 flex items-center gap-2" },
                React.createElement(CheckCircle2, { className: "w-4 h-4 text-emerald-500" }), " Astra Engine Connected"
              ),
              React.createElement("div", { className: "text-sm font-medium text-teal-700 flex items-center gap-2 mt-1" },
                React.createElement(CheckCircle2, { className: "w-4 h-4 text-emerald-500" }), " SEO Optimizer Active"
              )
            ),
            React.createElement(Button, { onClick: handleGenerate, disabled: !keyword.trim() || isGenerating, className: "w-full bg-teal-600 hover:bg-teal-700 text-white h-12 rounded-xl font-bold" },
              isGenerating ? React.createElement(Loader2, { className: "w-5 h-5 animate-spin" }) : "Write Article"
            ),
            article && React.createElement("div", { className: "flex gap-2 mt-3" },
              React.createElement(Button, { onClick: handleCopy, variant: "outline", className: "flex-1 h-10 rounded-xl text-xs font-bold gap-1.5" },
                React.createElement(Copy, { className: "w-3.5 h-3.5" }), " Copy"
              ),
              React.createElement(Button, { onClick: handleDownload, variant: "outline", className: "flex-1 h-10 rounded-xl text-xs font-bold gap-1.5" },
                React.createElement(Download, { className: "w-3.5 h-3.5" }), " Download .md"
              )
            )
          ),
          React.createElement("div", { className: "col-span-2 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col" },
            React.createElement("div", { className: "p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-2" },
              React.createElement("div", { className: "flex gap-1.5" },
                React.createElement("div", { className: "w-3 h-3 rounded-full bg-rose-500" }),
                React.createElement("div", { className: "w-3 h-3 rounded-full bg-amber-500" }),
                React.createElement("div", { className: "w-3 h-3 rounded-full bg-emerald-500" })
              ),
              React.createElement("div", { className: "mx-auto text-xs font-mono text-slate-400" }, "output.md")
            ),
            React.createElement("div", { className: "p-8 flex-1 bg-slate-50/50 overflow-y-auto max-h-[72vh]" },
              isGenerating
                ? React.createElement("div", { className: "h-full flex flex-col items-center justify-center text-teal-600 gap-3" },
                    React.createElement(Loader2, { className: "w-8 h-8 animate-spin" }),
                    React.createElement("p", { className: "font-bold animate-pulse text-sm" }, loadingMsg)
                  )
                : article
                  ? React.createElement("div", { className: "prose-sm" }, renderMarkdown(article))
                  : React.createElement("div", { className: "h-full flex items-center justify-center text-slate-400 text-sm font-medium" }, "Article draft will generate here automatically")
            )
          )
        )
      ),
      React.createElement(Footer, null)
    )
  );
}
