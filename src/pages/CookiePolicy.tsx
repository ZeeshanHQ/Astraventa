import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";

export const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-card border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <AstraventaLogo size="md" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8 gradient-text">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us 
                provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">2. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Essential Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation, access to secure areas, and remembering your preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. This helps us improve our website's performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Functional Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies enable enhanced functionality and personalization, such as remembering your language 
                    preferences and providing improved features.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">3. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website performance and functionality</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">4. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>Cookie preferences: Use our cookie preference center to manage your choices</li>
                <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                <li>Third-party controls: Manage cookies from specific third-party services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies on our website are set by third-party services that appear on our pages. These may include 
                social media platforms, analytics providers, and advertising networks. We do not control these cookies, 
                and you should check the respective third-party websites for more information about their cookie practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 p-4 glass-card rounded-xl">
                <p className="text-foreground font-medium">Astraventa AI Solutions</p>
                <p className="text-muted-foreground">Email: privacy@astraventa.com</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
