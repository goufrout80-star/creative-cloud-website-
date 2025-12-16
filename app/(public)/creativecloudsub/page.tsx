import { Hero } from "@/components/sections/hero";
import { WhatsIncluded } from "@/components/sections/whats-included";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { CompactReviews } from "@/components/sections/compact-reviews";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { readJSON } from "@/lib/db";
import { AppData, Settings } from "@/lib/types";

export default async function CreativeCloudPage() {
  let apps: AppData[] = [];
  let settings: Settings | null = null;
  
  try {
    apps = await readJSON<AppData[]>('apps.json');
    settings = await readJSON<Settings>('settings.json');
  } catch (e) {
    console.error("Failed to load data", e);
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <WhatsIncluded initialApps={apps} />
      <Features />
      <Pricing />
      <CompactReviews />
      <FAQ />
      <Footer settings={settings} />
    </main>
  );
}
