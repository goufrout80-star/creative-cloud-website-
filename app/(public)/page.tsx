import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { StatsTicker } from "@/components/sections/stats-ticker";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { ContentPillars } from "@/components/sections/content-pillars";
import { PackagesGrid } from "@/components/sections/packages-grid";
import { CinematicFooter } from "@/components/sections/cinematic-footer";
import { CreativeHeader } from "@/components/sections/creative-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f5c900] selection:text-black">
      <CreativeHeader />
      <HeroCinematic />
      <StatsTicker />
      <BrandMarquee />
      <ContentPillars />
      <PackagesGrid />
      <CinematicFooter />
    </main>
  );
}
