"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { reviews } from "@/lib/data/reviews";

export function Reviews() {
  const [visibleCount, setVisibleCount] = useState(16);
  const highlightedReviews = reviews.slice(0, 10);
  const gridReviews = reviews.slice(10);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, gridReviews.length));
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
          Trusted by 10,000+ Creators
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-lg font-medium text-gray-600">4.9/5 Average Rating</span>
        </div>
      </div>

      {/* Horizontal Marquee */}
      <div className="relative w-full mb-20 mask-linear-fade">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
        >
          {[...highlightedReviews, ...highlightedReviews].map((review, i) => (
            <div 
              key={`${review.id}-marquee-${i}`}
              className="w-[350px] flex-shrink-0 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-gray-200">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-2">
                    {review.name} <span className="text-lg">{review.flag}</span>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    Verified Purchase <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{review.text}"</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reviews Grid */}
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative bg-gray-100">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900 flex items-center gap-1">
                      {review.name} {review.flag}
                    </div>
                    <div className="text-[10px] text-gray-400">{review.country}</div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>

        {visibleCount < gridReviews.length && (
          <div className="mt-16 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Load More Reviews <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
