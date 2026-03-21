import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const GetInTouch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Page Content */}
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GetInTouch;
