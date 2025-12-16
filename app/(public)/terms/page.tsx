import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: November 2025</p>

        <div className="space-y-10 text-lg leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>
              Welcome to <strong>todayfilmmakers</strong>. By accessing our website and purchasing our digital products, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Digital Products & Services</h2>
            <p>
              We provide access to digital software subscriptions and creative tools. We are a reseller/partner and do not own the intellectual property of the underlying software (e.g., Adobe Creative Cloud), which remains the property of its respective creators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. User Obligations</h2>
            <p>
              You agree to use our products for lawful purposes only. You may not use our service to transmit any content that is harassing, defamatory, or violates the rights of others. You are responsible for maintaining the confidentiality of any access codes or credentials provided to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Payment & Pricing</h2>
            <p>
              All prices are listed in US Dollars. We reserve the right to change prices at any time without notice. Payments are processed securely, and we do not store your full credit card information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
            <p>
              The content on this website (text, design, layout) is owned by todayfilmmakers. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall todayfilmmakers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any significant changes by updating the date at the top of this page.
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@todayfilmmakers.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
