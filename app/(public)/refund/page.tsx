import Link from "next/link";
import { ArrowLeft, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { Footer } from "@/components/sections/footer";

export default function RefundPage() {
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
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Refund Policy</h1>
          <p className="text-muted-foreground">Fair policies for digital products.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="bg-accent p-6 rounded-2xl border border-border">
            <ShieldCheck className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">100% Guarantee</h3>
            <p className="text-sm text-muted-foreground">We ensure all products work as described or your money back.</p>
          </div>
          <div className="bg-accent p-6 rounded-2xl border border-border">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">48h Window</h3>
            <p className="text-sm text-muted-foreground">Report issues within 48 hours for a priority resolution.</p>
          </div>
          <div className="bg-accent p-6 rounded-2xl border border-border">
            <MessageCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Fast Support</h3>
            <p className="text-sm text-muted-foreground">Our team typically responds to refund requests in 24 hours.</p>
          </div>
        </div>

        <div className="space-y-10 text-lg leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">General Policy</h2>
            <p>
              Due to the nature of digital products (software licenses, downloadables), all sales are generally considered final once the product has been delivered and accessed. However, we stand behind the quality of our service and offer refunds in specific situations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Eligible Refund Situations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The product license key is invalid or does not work.</li>
              <li>The product is materially different from the description.</li>
              <li>You were charged multiple times for the same order due to a technical error.</li>
              <li>We are unable to fulfill your order within a reasonable timeframe (24 hours).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Non-Refundable Situations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You simply changed your mind after receiving the working product.</li>
              <li>You purchased the wrong product by mistake and have already accessed/redeemed it.</li>
              <li>Issues caused by your own hardware/software incompatibility (please check requirements first).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">How to Request a Refund</h2>
            <p className="mb-4">
              To initiate a refund, please contact our support team with your order number and a description of the issue.
            </p>
            <Link href="/support" className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-bold rounded-lg hover:bg-foreground/80 transition-colors">
              Contact Support for Refund
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
