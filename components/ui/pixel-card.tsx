import { cn } from "@/lib/utils";

interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "filled";
  accentColor?: string;
}

export function PixelCard({ 
  children, 
  className, 
  variant = "outline", 
  accentColor = "#f5c900",
  ...props 
}: PixelCardProps) {
  // 12px steps
  const stairClip = `polygon(
    0% 12px, 
    12px 12px, 
    12px 0%, 
    calc(100% - 12px) 0%, 
    calc(100% - 12px) 12px, 
    100% 12px, 
    100% calc(100% - 12px), 
    calc(100% - 12px) calc(100% - 12px), 
    calc(100% - 12px) 100%, 
    12px 100%, 
    12px calc(100% - 12px), 
    0% calc(100% - 12px)
  )`;

  return (
    <div 
      className={cn("relative group", className)} 
      {...props}
    >
      {/* Background/Border shape */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-300",
          variant === "outline" ? "bg-white/10 group-hover:bg-white/20" : "bg-[#131313]"
        )}
        style={{ clipPath: stairClip }}
      />
      
      {/* Border Outline (Simulated via smaller inner div or pseudo) */}
      {/* Since clip-path cuts off borders, we simulate border by having a slightly larger background div behind if needed, 
          but for single-layer simplicity we rely on bg color contrast. 
          To do a true border, we'd need nested clipped divs. Let's stick to the 'cut corner' filled look or semi-transparent look. */}

      {/* Content Container */}
      <div className="relative z-10 p-8 h-full">
        {children}
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-r border-b border-white/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-l border-b border-white/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-r border-t border-white/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-l border-t border-white/20 pointer-events-none" />
    </div>
  );
}

