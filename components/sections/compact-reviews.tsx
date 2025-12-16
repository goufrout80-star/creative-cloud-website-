"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import { compactReviews } from "@/lib/data/compact-reviews";

export function CompactReviews() {
  const [isPaused, setIsPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate reviews for seamless infinite loop
  const allReviews = [...compactReviews, ...compactReviews, ...compactReviews];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled through one full set
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section 
      id="reviews"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      aria-label="Customer reviews carousel"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9/5 from 10,000+ reviews</span>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Reviews */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl p-6 shadow-md border border-gray-100 cursor-pointer"
                tabIndex={0}
                role="article"
                aria-label={`Review by ${review.name}`}
              >
                {/* Header with Avatar and Info */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                    <Image 
                      src={review.avatar} 
                      alt={review.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 text-sm truncate">
                        {review.name}
                      </h3>
                      {review.verified && (
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" aria-label="Verified purchase" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-base">{review.flag}</span>
                      <span>{review.country}</span>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{review.message}"
                </p>

                {/* Timestamp */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{review.timestamp}</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full font-medium">
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Read all reviews
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Optional: Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Modal for All Reviews */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6">All Customer Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {compactReviews.map((review) => (
                  <div key={review.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Image 
                        src={review.avatar} 
                        alt={review.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold text-sm">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.flag} {review.country}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{review.message}"</p>
                    <p className="text-xs text-gray-400">{review.timestamp}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
