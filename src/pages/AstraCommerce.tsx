import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Image as ImageIcon, Sparkles, Loader2, ArrowRight } from "lucide-react";

export default function AstraCommerce() {
 const [file, setFile] = useState<File | null>(null);
 const [analyzing, setAnalyzing] = useState(false);
 const [result, setResult] = useState<any>(null);
 const fileInputRef = useRef<HTMLInputElement>(null);

 const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
 if (e.target.files && e.target.files[0]) {
 setFile(e.target.files[0]);
 }
 };

 const processImage = () => {
 setAnalyzing(true);
 setTimeout(() => {
 setResult({
 title: "Handcrafted Ceramic Matcha Bowl - Forest Green",
 price: "$45.00",
 seoKeywords: ["matcha bowl", "ceramic teacup", "japanese tea ceremony", "handmade pottery", "green aesthetic kitchen"],
 description: "Elevate your morning ritual with our handcrafted ceramic Matcha Bowl. Featuring a deep forest green glaze with subtle earthy undertones, this bowl is designed for the perfect whisking experience. Its wide base and slightly curved lip ensure a smooth, frothy matcha every time. Microwave and dishwasher safe, though hand-washing is recommended to preserve the unique glaze."
 });
 setAnalyzing(false);
 }, 2500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-pink-600/10 flex items-center justify-center text-pink-600">
 <ShoppingCart className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraCommerce AI</h1>
 <p className="text-slate-500 font-medium">Physical to Digital — 1-Click Store Listing</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
 <h3 className="font-bold text-slate-900 mb-4">1. Snap & Upload Product Photo</h3>
 <div 
 onClick={() => fileInputRef.current?.click()}
 className="w-full h-64 border-2 border-dashed border-pink-200 rounded-2xl flex flex-col items-center justify-center text-pink-600 bg-pink-50/50 cursor-pointer hover:bg-pink-50 transition-colors mb-6 overflow-hidden relative"
 >
 {file ? (
 <img src={URL.createObjectURL(file)} alt="Product" className="object-cover w-full h-full opacity-50" />
 ) : (
 <>
 <ImageIcon className="w-12 h-12 mb-4 opacity-80" />
 <span className="font-bold">Upload Product Image</span>
 <span className="text-xs text-pink-600/60 mt-2">JPG, PNG (Max 5MB)</span>
 </>
 )}
 {file && <div className="absolute inset-0 flex items-center justify-center bg-black/40"><span className="text-white font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">Ready to Scan</span></div>}
 <input type="file" ref={fileInputRef} className="hidden" onChange={handleUpload} accept="image/*" />
 </div>
 
 <Button onClick={processImage} disabled={!file || analyzing} className="w-full bg-slate-900 hover:bg-pink-600 text-white h-14 rounded-xl font-bold transition-all shadow-lg">
 {analyzing ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Sparkles className="w-5 h-5 mr-2" />}
 {analyzing ? "Vision AI Processing..." : "Generate Shopify Listing"}
 </Button>
 </div>

 <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative">
 <h3 className="font-bold text-white mb-6 flex items-center gap-2"><Sparkles className="w-4 h-4 text-pink-500"/> AI Generated Store Data</h3>
 
 {analyzing ? (
 <div className="flex flex-col items-center justify-center h-64 text-pink-500">
 <Loader2 className="w-10 h-10 animate-spin mb-4" />
 <p className="text-sm font-bold uppercase tracking-widest animate-pulse">Running Multimodal Analysis...</p>
 </div>
 ) : result ? (
 <div className="space-y-6 animate-in fade-in zoom-in duration-500 text-slate-300">
 <div>
 <label className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-1">Optimized Title</label>
 <div className="text-white font-bold text-lg bg-slate-800/50 p-3 rounded-xl border border-slate-700">{result.title}</div>
 </div>
 <div>
 <label className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-1">Suggested Price</label>
 <div className="text-pink-400 font-black text-2xl">{result.price}</div>
 </div>
 <div>
 <label className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-1">SEO Description</label>
 <div className="text-sm leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700">{result.description}</div>
 </div>
 <div>
 <label className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Auto-Tags</label>
 <div className="flex flex-wrap gap-2">
 {result.seoKeywords.map((kw: string, i: number) => (
 <span key={i} className="bg-pink-500/20 text-pink-300 border border-pink-500/30 px-3 py-1 text-xs font-bold rounded-full">{kw}</span>
 ))}
 </div>
 </div>
 <Button className="w-full mt-2 bg-pink-600 hover:bg-pink-500 text-white font-bold h-12"><ArrowRight className="w-4 h-4 mr-2"/> Push to Store</Button>
 </div>
 ) : (
 <div className="h-64 border border-dashed border-slate-700 rounded-2xl flex items-center justify-center text-slate-500 text-sm font-medium">
 Awaiting product photo...
 </div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
