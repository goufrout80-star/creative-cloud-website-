"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Youtube, Twitter, Menu } from "lucide-react";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { TfmLogo } from "@/components/ui/tfm-logo";

// Helper to convert Dropbox share link to direct download
const getDropboxDirectLink = (shareLink: string) => {
  // Convert Dropbox share link to direct download link
  return shareLink.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('/scl/fi/', '/s/').split('?')[0];
};

const menuItems = [
  { 
    label: "Home", 
    href: "/", 
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    video: getDropboxDirectLink("https://www.dropbox.com/scl/fi/1getdwibxa4shedrh3au7/10678930-uhd_4096_2160_25fps.mp4?rlkey=z86p1scqz0v3mkgwyzhkmssmr&st=grv4jew4&dl=0")
  },
  { 
    label: "For Creators", 
    href: "/creators", 
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
    video: getDropboxDirectLink("https://www.dropbox.com/scl/fi/1h5qq2gz48zy6xlyb79jt/10678925-uhd_4096_2160_25fps.mp4?rlkey=ei5mmmj5bvt4h7rk1aen8ir0v&st=ml5c5npj&dl=0")
  },
  { 
    label: "For Brands", 
    href: "/brands", 
    image: "https://images.unsplash.com/photo-1585563934376-79173f443658?q=80&w=1000&auto=format&fit=crop",
    video: getDropboxDirectLink("https://www.dropbox.com/scl/fi/gzuxpr4nmuj5jffbgf8jt/10678927-uhd_4096_2160_25fps.mp4?rlkey=9y5eojrn3pyijk3h3seaq1tlx&st=g4be66ik&dl=0")
  },
  { 
    label: "Contact", 
    href: "/contact", 
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000&auto=format&fit=crop",
    video: getDropboxDirectLink("https://www.dropbox.com/scl/fi/8ktstu4d0v60jqxwek4jp/10678923-uhd_4096_2160_25fps.mp4?rlkey=rthpgcwew6abtri0d2q9uj5yr&st=nml0l156&dl=0")
  },
];

export function CreativeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<typeof menuItems[0] | null>(null);

  // Lock scroll when menu is open and preload videos
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Preload menu videos when menu opens
      menuItems.forEach((item) => {
        if (item.video) {
          const video = document.createElement('video');
          video.src = item.video;
          video.preload = 'metadata';
        }
      });
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Scroll detection for logo transformation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Custom Stepped Clip Path for 24px corner steps
  const stairClip = `polygon(
    0% 24px, 
    24px 24px, 
    24px 0%, 
    calc(100% - 24px) 0%, 
    calc(100% - 24px) 24px, 
    100% 24px, 
    100% calc(100% - 24px), 
    calc(100% - 24px) calc(100% - 24px), 
    calc(100% - 24px) 100%, 
    24px 100%, 
    24px calc(100% - 24px), 
    0% calc(100% - 24px)
  )`;

  return (
    <>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-[60] py-8 px-6 md:px-12 text-white pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          {/* Animated Logo / Close Trigger */}
          <div 
            className="relative z-50 overflow-hidden group cursor-pointer"
            onClick={() => {
              if (isOpen) setIsOpen(false);
            }}
          >
             {isOpen ? (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -40 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="relative"
                >
                  <div className="h-10 flex items-center text-xl md:text-2xl font-bold tracking-tighter uppercase">
                    Today<span className="text-[#f5c900]">Filmmakers</span>
                  </div>
                  <div className="h-10 flex items-center text-xl md:text-2xl font-bold tracking-tighter uppercase absolute top-full left-0 text-[#f5c900]">
                    Close<span className="text-white">Menu</span>
                  </div>
                </motion.div>
             ) : (
                <Link href="/" className="block">
                  <div className="h-10 flex items-center">
                    <AnimatePresence mode="wait">
                      {!isScrolled ? (
                        <motion.div
                          key="text-logo"
                          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ 
                            opacity: 0, 
                            y: -20, 
                            filter: "blur(10px)",
                            transition: { duration: 0.3 }
                          }}
                          className="text-xl md:text-2xl font-bold tracking-tighter uppercase whitespace-nowrap"
                        >
                           Today<span className="text-[#f5c900]">Filmmakers</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="icon-logo"
                          initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={{ 
                            opacity: 0, 
                            scale: 0.5, 
                            filter: "blur(10px)",
                            transition: { duration: 0.3 }
                          }}
                        >
                          <TfmLogo className="h-8 w-auto" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
             )}
          </div>

          {/* Animated Menu Trigger */}
          <button 
            onClick={toggleMenu}
            className="group flex items-center gap-4 z-50 focus:outline-none mix-blend-difference"
          >
            <div className="hidden md:block overflow-hidden h-5">
              <motion.div
                initial={false}
                animate={{ y: isOpen ? -20 : 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="text-sm font-bold uppercase tracking-widest"
              >
                <div className="h-5 flex items-center">Menu</div>
                <div className="h-5 flex items-center text-[#f5c900]">Close</div>
              </motion.div>
            </div>
            
            <div className="relative w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-[#f5c900] group-hover:border-[#f5c900] group-hover:text-black transition-all duration-300"
                 style={{
                   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" // Keeping button simple square for sharp contrast or use mini-stair if preferred
                 }}
            >
               {/* Pixel Stair Corners for Button */}
               <div className="absolute top-0 left-0 w-2 h-2 border-r border-b border-current opacity-50" />
               <div className="absolute bottom-0 right-0 w-2 h-2 border-l border-t border-current opacity-50" />

               <motion.div
                 animate={{ rotate: isOpen ? 45 : 0 }}
                 className="absolute w-6 h-[2px] bg-current"
                 style={{ y: isOpen ? 0 : -4 }}
               />
               <motion.div
                 animate={{ rotate: isOpen ? -45 : 0 }}
                 className="absolute w-6 h-[2px] bg-current"
                 style={{ y: isOpen ? 0 : 4 }}
               />
            </div>
          </button>
        </div>
      </header>

      {/* Dropdown Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[55]"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ y: "-110%", opacity: 0 }}
              animate={{ 
                y: "0%", 
                opacity: 1,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
              }}
              exit={{ 
                y: "-110%", 
                opacity: 0,
                transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
              }}
              className="fixed top-4 left-4 right-4 bottom-4 md:top-8 md:left-8 md:right-8 md:bottom-8 z-[58] bg-[#0f0f0f] shadow-2xl shadow-black/50 overflow-hidden"
              style={{ clipPath: stairClip }}
            >
              <div className="absolute inset-0 border-[1px] border-white/10 pointer-events-none" style={{ clipPath: stairClip }} />
              <GrainOverlay />
              
              {/* Decorative Stair Accents inside modal */}
              <div className="absolute top-6 left-6 w-8 h-8 border-r-2 border-b-2 border-[#f5c900]/20" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-l-2 border-t-2 border-[#f5c900]/20" />

              <div className="absolute inset-0 flex flex-col md:flex-row h-full">
                 {/* Left: Navigation */}
                 <div className="w-full md:w-5/12 h-full flex flex-col justify-between p-12 md:p-20 relative z-20">
                   <div className="mt-12 md:mt-16">
                     <nav className="flex flex-col gap-6">
                       {menuItems.map((item, index) => (
                         <motion.div
                           key={item.label}
                           initial={{ opacity: 0, x: -30 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                           onMouseEnter={() => setHoveredItem(item)}
                           onMouseLeave={() => setHoveredItem(null)}
                           className="group"
                         >
                           <Link 
                             href={item.href} 
                             onClick={() => setIsOpen(false)}
                             className="flex items-center gap-6 text-4xl md:text-6xl font-bold uppercase tracking-tighter hover:text-[#f5c900] transition-colors duration-300"
                           >
                             <div className="w-2 h-2 bg-[#f5c900] opacity-0 group-hover:opacity-100 transition-opacity" />
                             {item.label}
                           </Link>
                         </motion.div>
                       ))}
                     </nav>
                   </div>

                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.8 }}
                     className="flex gap-8 text-gray-400 text-sm font-bold uppercase tracking-widest"
                   >
                     <a href="https://instagram.com/todayfilmmakers" target="_blank" className="hover:text-[#f5c900] transition-colors">Instagram</a>
                     <a href="#" className="hover:text-[#f5c900] transition-colors">YouTube</a>
                     <a href="#" className="hover:text-[#f5c900] transition-colors">Twitter</a>
                   </motion.div>
                 </div>

                 {/* Right: Visual Reveal & Info */}
                 <div className="hidden md:block w-7/12 h-full relative bg-[#0a0a0a] border-l border-white/5">
                   <div className="w-full h-full relative">
                     {/* Default State - Always visible when no hover */}
                     {!hoveredItem && (
                       <div className="absolute inset-0 flex flex-col justify-end p-20 bg-[#131313]">
                         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                         <h3 className="text-5xl font-bold text-white mb-6 relative z-10 leading-none">
                           We Shape <br /><span className="text-[#f5c900]">Stories.</span>
                         </h3>
                         <p className="text-gray-400 max-w-md relative z-10 text-lg leading-relaxed">
                           Explore our curated resources for filmmakers, by filmmakers. Join the movement.
                         </p>
                       </div>
                     )}
                     
                     {/* Hovered Item Preview */}
                     <AnimatePresence mode="wait">
                       {hoveredItem && (
                         <motion.div
                           key={hoveredItem.label}
                           initial={{ opacity: 0, scale: 1.1 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.5 }}
                           className="absolute inset-0"
                         >
                           {/* Try video first, fallback to image */}
                           <div className="relative w-full h-full menu-video-container">
                             <video
                               className="w-full h-full object-cover"
                               autoPlay
                               muted
                               loop
                               playsInline
                               preload="metadata"
                               onError={(e) => {
                                 // Video failed, show image instead
                                 const video = e.currentTarget;
                                 const container = video.parentElement;
                                 if (container) {
                                   const img = container.querySelector('img');
                                   if (img) {
                                     video.style.display = 'none';
                                     img.style.display = 'block';
                                   }
                                 }
                               }}
                             >
                               <source src={hoveredItem.video} type="video/mp4" />
                             </video>
                             <img 
                               src={hoveredItem.image} 
                             alt="Menu Preview" 
                               className="w-full h-full object-cover hidden"
                           />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
