import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookiePolicy } from "./pages/CookiePolicy";
import { RefundPolicy } from "./pages/RefundPolicy";
import GetInTouch from "./pages/GetInTouch";
import AstraTools from "./pages/AstraTools";
import AstraReach from "./pages/AstraReach";
import AstraScrape from "./pages/AstraScrape";
import AstraFlow from "./pages/AstraFlow";
import AstraDoc from "./pages/AstraDoc";
import AstraTranslate from "./pages/AstraTranslate";
import AstraMarket from "./pages/AstraMarket";

// Content & Creative Tools
import AstraHook from "./pages/AstraHook";
import AstraScript from "./pages/AstraScript";
import AstraVibe from "./pages/AstraVibe";
import AstraBlog from "./pages/AstraBlog";
import AstraPrompt from "./pages/AstraPrompt";

// Lead Gen & Sales Tools
import AstraLead from "./pages/AstraLead";
import AstraPitch from "./pages/AstraPitch";
import AstraReview from "./pages/AstraReview";
import AstraEvent from "./pages/AstraEvent";
import AstraSQL from "./pages/AstraSQL";

// Productivity & Enterprise Tools
import AstraTask from "./pages/AstraTask";
import AstraMail from "./pages/AstraMail";
import AstraRecruit from "./pages/AstraRecruit";
import AstraLegal from "./pages/AstraLegal";
import AstraBrand from "./pages/AstraBrand";
import AstraFinance from "./pages/AstraFinance";

// Advanced Tools
import AstraCommerce from "./pages/AstraCommerce";
import AstraAgent from "./pages/AstraAgent";
import AstraPulse from "./pages/AstraPulse";
import AstraVerify from "./pages/AstraVerify";

// Frontier & Specialist Tools
import AstraGrit from "./pages/AstraGrit";
import AstraRelay from "./pages/AstraRelay";
import AstraTrace from "./pages/AstraTrace";
import AstraGrid from "./pages/AstraGrid";
import AstraAd from "./pages/AstraAd";
import AstraMatch from "./pages/AstraMatch";
import AstraDraft from "./pages/AstraDraft";
import AstraDocs from "./pages/AstraDocs";

// Enterprise Solutions
import CloudMigrations from "./pages/solutions/CloudMigrations";
import ProductCatalog from "./pages/ProductCatalog";

import AIService from "./pages/services/AIService";
import ServicesHub from "./pages/ServicesHub";
import AutomationService from "./pages/services/AutomationService";
import SecurityService from "./pages/services/SecurityService";
import UIUXService from "./pages/services/UIUXService";
import BrandingService from "./pages/services/BrandingService";
import WebEngineering from "./pages/services/WebEngineering";
import MobileEngineering from "./pages/services/MobileEngineering";
import BackendEngineering from "./pages/services/BackendEngineering";
import { AIChatbots } from "./pages/services/AIChatbots";
import GenericPage from "./pages/GenericPage";
import GenericToolPage from "./pages/GenericToolPage";
import ToolWaitlist from "./pages/ToolWaitlist";
import About from "./pages/About";
import BrandHighlightDetail from "./pages/BrandHighlightDetail";

// Blog & Admin System
import BlogListing from "./pages/blog/BlogListing";
import BlogPostView from "./pages/blog/BlogPostView";
import AdminDashboard from "./pages/admin/AdminDashboard";

// New Corporate & Resource Pages
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import TrustSecurity from "./pages/TrustSecurity";
import SystemStatus from "./pages/SystemStatus";
import ComingSoon from "./pages/ComingSoon";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/products" element={<ProductCatalog />} />

          <Route path="/products/astra-tools" element={<AstraTools />} />
          <Route path="/docs" element={<AstraDocs />} />
          <Route path="/docs/:toolId" element={<AstraDocs />} />
          <Route path="/solutions/cloud" element={<CloudMigrations />} />

          {/* Generic Tool Page - Primary Landing Page */}
          <Route path="/tools/:toolId" element={<GenericToolPage />} />
          
          {/* Active Tools Sandbox - Specific implementations */}
          <Route path="/tools/astra-prompt/sandbox" element={<AstraPrompt />} />
          <Route path="/tools/astra-blog/sandbox" element={<AstraBlog />} />
          <Route path="/tools/astra-translate/sandbox" element={<AstraTranslate />} />
          <Route path="/tools/astra-scrape/sandbox" element={<AstraScrape />} />
          <Route path="/tools/astra-doc/sandbox" element={<AstraDoc />} />
          <Route path="/tools/astra-market/sandbox" element={<AstraMarket />} />
          <Route path="/tools/astra-reach/sandbox" element={<AstraReach />} />
          <Route path="/tools/astra-flow/sandbox" element={<AstraFlow />} />

          <Route path="/services/ai" element={<AIService />} />
          <Route path="/services/automation" element={<AutomationService />} />
          <Route path="/services/security" element={<SecurityService />} />
          <Route path="/services/ui-ux" element={<UIUXService />} />
          <Route path="/services/branding" element={<BrandingService />} />
          <Route path="/services/web" element={<WebEngineering />} />
          <Route path="/services/mobile" element={<MobileEngineering />} />
          <Route path="/services/backend" element={<BackendEngineering />} />
          <Route path="/services/chatbots" element={<AIChatbots />} />
          <Route path="/services/:id" element={<ServiceDetail />} />

          <Route path="/status" element={<SystemStatus />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:id" element={<BlogPostView />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/changelog" element={<GenericPage id="changelog" />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/lab" element={<GenericPage id="lab" />} />
          <Route path="/support" element={<GenericPage id="support" />} />
          <Route path="/security" element={<TrustSecurity />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/portfolio" element={<GenericPage id="portfolio" />} />

          <Route path="/coming-soon" element={<ComingSoon />} />

          {/* Tool Waitlist Page */}
          <Route path="/tools/:toolId/waitlist" element={<ToolWaitlist />} />

          <Route path="/why-astraventa/:slug" element={<BrandHighlightDetail />} />

          {/* Legacy & Utilities */}
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
