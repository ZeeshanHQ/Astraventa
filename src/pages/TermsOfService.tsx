import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";

export const TermsOfService = () => {
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
          <h1 className="text-5xl font-bold mb-8 gradient-text">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Astraventa's AI automation services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Astraventa provides AI-powered automation solutions including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>AI Chatbots and conversational interfaces</li>
                <li>Web automation and process optimization</li>
                <li>AI integrations and custom development</li>
                <li>Smart analytics and data processing</li>
                <li>Technical support and consulting services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Not attempt to reverse engineer or compromise our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms for our services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>All payments are non-refundable unless otherwise specified</li>
                <li>Late payments may result in service suspension</li>
                <li>Price changes will be communicated 30 days in advance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services are owned by Astraventa and are protected by 
                international copyright, trademark, patent, trade secret, and other intellectual property laws. 
                You may not use our intellectual property without our written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Astraventa be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your use of the services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">7. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to maintain high service availability, we do not guarantee uninterrupted access to our 
                services. We may perform maintenance, updates, or modifications that temporarily affect service availability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate this agreement at any time. Upon termination, your right to use the services 
                will cease immediately. We may terminate or suspend your account if you violate these terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 glass-card rounded-xl">
                <p className="text-foreground font-medium">Astraventa AI Solutions</p>
                <p className="text-muted-foreground">Email: legal@astraventa.com</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
