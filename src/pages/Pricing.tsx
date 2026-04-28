import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing as PricingComponent } from "@/components/Pricing";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/10">
      <Header />
      <PricingComponent />
      <Footer />
    </div>
  );
};

export default Pricing;
