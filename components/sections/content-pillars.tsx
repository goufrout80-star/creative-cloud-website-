"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation, animate } from "framer-motion";
import { Film, Camera, Layers, Palette, Workflow } from "lucide-react";
import { TimelineRuler, Playhead } from "@/components/ui/timeline-components";

const pillars = [
  {
    title: "Cinematic Scene Breakdowns",
    description: "Deep dives into lighting, composition, and blocking.",
    icon: Film,
    color: "from-blue-900 to-black",
    duration: "00:04:12"
  },
  {
    title: "Camera Movement & Rigs",
    description: "Dynamic tracking shots and stabilizer setups.",
    icon: Camera,
    color: "from-purple-900 to-black",
    duration: "00:08:45"
  },
  {
    title: "Transition Micro-Edits",
    description: "Seamless cuts that keep the audience hooked.",
    icon: Layers,
    color: "from-red-900 to-black",
    duration: "00:02:30"
  },
  {
    title: "Color Grading & Looks",
    description: "Creating mood and atmosphere with color.",
    icon: Palette,
    color: "from-amber-900 to-black",
    duration: "00:12:15"
  },
  {
    title: "On-Set Workflows",
    description: "Professional problem solving and efficiency.",
    icon: Workflow,
    color: "from-emerald-900 to-black",
    duration: "00:06:50"
  },
];

// Video URL for all clips (demo/testing)
const DEMO_VIDEO_URL = "https://www.dropbox.com/scl/fi/ww7j327ihtdvm61weblqo/4813007-hd_1280_720_25fps-online-video-cutter.com-1.mp4?rlkey=aqfjbsj9measp4arl3x06s7oe&e=1&st=jku9ac9b&dl=1";

// Clip Card Component with lazy-loaded video
function ClipCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "100px" });
  
  // Load video when card is in view for performance
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.load();
    }
  }, [isInView]);
  
  return (
    <div
      ref={cardRef}
      className={`relative w-[400px] h-[250px] md:h-[300px] flex flex-col justify-between p-10 border border-white/10 bg-gradient-to-br ${pillar.color} overflow-hidden group hover:border-[#f5c900] transition-colors duration-300 rounded-lg`}
    >
      {/* Video Background - Lazy loaded for performance */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300 z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source 
          src={DEMO_VIDEO_URL} 
          type="video/mp4" 
        />
      </video>
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-[1]`} />
      
      {/* Clip Header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-3">
          <pillar.icon className="w-6 h-6 text-[#f5c900]" />
          <span className="text-xs font-mono text-[#f5c900]/80 bg-black/40 px-2 py-1 rounded">
            CLIP_0{index + 1}.MOV
          </span>
        </div>
        <span className="text-xs font-mono text-gray-400">{pillar.duration}</span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
          {pillar.title}
        </h3>
        <p className="text-sm text-gray-300 max-w-sm">
          {pillar.description}
        </p>
      </div>

      {/* Waveform Visualization (Abstract) */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/20 flex items-end gap-[2px] px-4 pb-2 opacity-50 z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="w-1 bg-white/30" 
            style={{ height: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ContentPillars() {
  const targetRef = useRef<HTMLDivElement>(null);
  const exportButtonRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollYRef = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header fade-out animation (fades early in scroll)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Calculate exact scroll distance: (6 cards * 400px + 5 gaps * 16px + 50vw padding) - viewport
  // For responsive: on mobile cards are smaller, but we'll use a calculated percentage
  // Assuming viewport width ~1920px: total content width = 6*400 + 5*16 = 2480px
  // Scroll needed = 2480 - 1920 = 560px = ~23% of 2480px
  // More accurately: scroll percentage = (contentWidth - viewportWidth) / contentWidth
  // We'll use -90% to ensure it ends precisely at the export button
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  // Intersection observer for auto-trigger when export button is centered
  // Using a custom intersection observer since framer-motion's useInView has different API
  const [exportButtonInView, setExportButtonInView] = useState(false);
  
  useEffect(() => {
    if (!exportButtonRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setExportButtonInView(entry.isIntersecting && entry.intersectionRatio >= 0.7);
        });
      },
      {
        threshold: 0.7,
        rootMargin: "-40% 0px",
      }
    );
    
    observer.observe(exportButtonRef.current);
    
    return () => {
      if (exportButtonRef.current) {
        observer.unobserve(exportButtonRef.current);
      }
    };
  }, []);

  // Auto-trigger export when button is centered - ONLY when scrolling DOWN
  useEffect(() => {
    if (exportButtonInView && !isExporting && isScrollingDown) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        handleExport();
      }, 300);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exportButtonInView, isExporting, isScrollingDown]);

  const handleExport = useCallback(() => {
    if (isExporting) return;
    
    setIsExporting(true);
    setExportProgress(0);

    // Animate progress from 0 to 100%
    animate(0, 100, {
      duration: 2.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setExportProgress(latest);
      },
      onComplete: () => {
        // Scroll to packages section
        const packagesSection = document.getElementById("packages");
        if (packagesSection) {
          // Try to use Lenis if available, otherwise use native scroll
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(packagesSection, {
              offset: 0,
              duration: 1.2,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            packagesSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
        
        // Reset states after a delay
        setTimeout(() => {
          setIsExporting(false);
          setExportProgress(0);
        }, 1500);
      },
    });
    }, [isExporting]);


  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a] py-24">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        
        {/* Header with fade-out */}
        <motion.div 
          style={{ opacity: headerOpacity }}
          className="absolute top-16 left-6 md:left-16 z-20 pointer-events-none"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">Creative Timeline</h2>
          <div className="h-1 w-24 bg-[#f5c900]" />
        </motion.div>

        {/* Timeline Visuals */}
        <Playhead />
        
        <div ref={scrollContainerRef} className="flex-1 flex items-center relative py-16">
          {/* Background Track Lines */}
          <div className="absolute inset-0 flex flex-col justify-center gap-32 opacity-10 pointer-events-none">
            <div className="w-full h-[1px] bg-white" />
            <div className="w-full h-[1px] bg-white" />
            <div className="w-full h-[1px] bg-white" />
          </div>

          <motion.div 
            style={{ x: xTransform }} 
            className="flex gap-6 px-[50vw] w-max items-center"
          >
            {pillars.map((pillar, index) => (
              <ClipCard key={index} pillar={pillar} index={index} />
            ))}

            {/* Export Button Card */}
            <motion.div 
              ref={exportButtonRef}
              className="w-[400px] h-[300px] flex flex-col items-center justify-center p-10 bg-black/60 border-2 border-white/20 rounded-lg relative group overflow-hidden"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {!isExporting ? (
                <motion.button
                  onClick={handleExport}
                  className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#f5c900]/20 to-[#f5c900]/5 border-2 border-[#f5c900] rounded-lg hover:bg-gradient-to-br hover:from-[#f5c900]/30 hover:to-[#f5c900]/10 transition-all duration-300"
                  style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2 font-mono tracking-tight">
                      EXPORT <span className="text-[#f5c900]">PROJECT</span>
                    </h3>
                    <p className="text-sm text-gray-400 font-mono">
                      // READY_TO_EXPORT //
                    </p>
                  </div>
                  <div className="w-16 h-16 border-2 border-[#f5c900] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#f5c900] rounded-full" />
                  </div>
                </motion.button>
              ) : (
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono tracking-tight">
                      EXPORTING...
                    </h3>
                    <p className="text-sm text-gray-400 font-mono">
                      {Math.round(exportProgress)}% COMPLETE
                    </p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full max-w-xs h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: exportProgress / 100 }}
                      style={{ transformOrigin: "left" }}
                      className="h-full bg-gradient-to-r from-[#f5c900] to-[#f5c900]/80"
                    />
                  </div>
                  
                  {/* Progress Dots */}
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-[#f5c900] rounded-full"
                        animate={{
                          scale: exportProgress > (i + 1) * 33 ? [1, 1.2, 1] : 1,
                          opacity: exportProgress > i * 33 ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Animated border during export */}
              {isExporting && (
                <motion.div
                  className="absolute inset-0 border-2 border-[#f5c900] rounded-lg"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        </div>

        <TimelineRuler />
      </div>
    </section>
  );
}
