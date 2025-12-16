import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";

export default function LicensePage() {
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
        <h1 className="text-4xl font-bold tracking-tight mb-2">License Agreement</h1>
        <p className="text-muted-foreground mb-12">Last updated: November 2025</p>

        <div className="space-y-10 text-lg leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Grant of License</h2>
            <p>
              By purchasing a digital product from todayfilmmakers, you are granted a limited, non-exclusive, non-transferable, and revocable license to use the product for your personal or commercial purposes, subject to the terms set forth in this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Permitted Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may install and use the software/product on devices owned or controlled by you, as specified in the product description.</li>
              <li>You may create backup copies for your own personal archival purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Restrictions</h2>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Sell, resell, rent, lease, or sublicense the product to any third party.</li>
              <li>Reverse engineer, decompile, or disassemble the software.</li>
              <li>Share your license key or login credentials publicly or with unauthorized users.</li>
              <li>Use the product for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Ownership</h2>
            <p>
              All title, ownership rights, and intellectual property rights in and to the product remain with the original creators (e.g., Adobe Inc. for Creative Cloud) or todayfilmmakers where applicable. This license is not a sale of the original intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Termination</h2>
            <p>
              This license is effective until terminated. Your rights under this license will terminate automatically without notice if you fail to comply with any term(s) of this agreement. Upon termination, you must cease all use of the product and destroy all copies.
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have questions regarding this License Agreement, please contact support@todayfilmmakers.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
