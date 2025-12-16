import { cn } from "@/lib/utils";
import { PixelCard } from "@/components/ui/pixel-card";

interface GearCaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export function GearCase({ children, className, highlight, ...props }: GearCaseProps) {
  return (
    <div className={cn("relative group", className)} {...props}>
      {/* Outer Shell - Rugged Case Look */}
      <PixelCard 
        className={cn(
          "h-full relative overflow-hidden transition-all duration-300",
          highlight ? "bg-[#1a1a1a]" : "bg-[#0f0f0f]"
        )}
      >
        {/* HUD Overlay */}
        <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-none z-20">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          <span className="text-[10px] font-mono text-red-500 tracking-widest font-bold">REC</span>
        </div>

        {/* Focus Peaking Effect (Hover Border Glow) */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f5c900]/50 transition-colors duration-300 z-10 pointer-events-none" 
             style={{ clipPath: "polygon(0% 12px, 12px 12px, 12px 0%, calc(100% - 12px) 0%, calc(100% - 12px) 12px, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 12px calc(100% - 12px), 0% calc(100% - 12px))" }}
        />

        {/* Technical Grid/Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
        
        {/* Corner Reinforcements */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/10 group-hover:border-[#f5c900] transition-colors" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-[#f5c900] transition-colors" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-[#f5c900] transition-colors" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-[#f5c900] transition-colors" />

        {/* Content */}
        <div className="relative z-20 h-full">
          {children}
        </div>
      </PixelCard>
    </div>
  );
}

