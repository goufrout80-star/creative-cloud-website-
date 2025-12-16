import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: November 2025</p>

        <div className="space-y-10 text-lg leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, such as when you make a purchase or contact customer support. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address).</li>
              <li>Payment information (processed securely by third-party providers).</li>
              <li>Communications and support history.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, offers, and events.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our site. This aids your experience when you browse our website and allows us to improve our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Data Storage & Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. We retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You may also object to the processing of your personal data or request restrictions on such processing. To exercise these rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
            <p>
              We may share your data with trusted third-party service providers (e.g., payment processors, email services) solely for the purpose of providing our services to you. We do not sell your personal data to advertisers.
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Contact Us</h2>
            <p>
              For any privacy-related questions or to request data deletion, please contact us at privacy@todayfilmmakers.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
