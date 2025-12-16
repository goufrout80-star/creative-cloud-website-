"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Wand2, Cloud, Layers, Users, CreditCard } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Professional Tools",
    description: "Industry-standard software for filmmakers, designers, and photographers."
  },
  {
    icon: Wand2,
    title: "AI-Assisted Workflows",
    description: "Boost your creativity with Adobe Firefly generative AI features built-in."
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Sync your files across devices and access your work from anywhere."
  },
  {
    icon: Layers,
    title: "Cross-Platform",
    description: "Works seamlessly on macOS, Windows, iPad, and mobile devices."
  },
  {
    icon: Users,
    title: "Team & Personal",
    description: "Perfect for individual creators or collaborative teams."
  },
  {
    icon: CreditCard,
    title: "One-Time Payment",
    description: "No monthly fees. One tiny payment of $0.50 for a full year of access."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose Creative Cloud?</h2>
           <p className="text-xl text-gray-500">Everything you need to create anything you can imagine.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
