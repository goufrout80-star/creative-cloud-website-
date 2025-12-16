"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I receive my subscription?",
    answer: "Immediately after purchase, you will receive an email with your redemption code and simple instructions to activate your Creative Cloud subscription on your own Adobe account."
  },
  {
    question: "Is the payment safe?",
    answer: "Yes, we use Stripe for secure payment processing. We never store your credit card details."
  },
  {
    question: "Do I get full Creative Cloud All Apps?",
    answer: "Yes, you get access to the complete suite of 20+ desktop and mobile apps including Photoshop, Illustrator, Premiere Pro, After Effects, and more."
  },
  {
    question: "Does Firefly image generation come included?",
    answer: "Absolutely! You'll have full access to Adobe Firefly's generative AI features for image creation, text effects, and more."
  },
  {
    question: "When does the offer expire?",
    answer: "This is a limited-time Black Friday offer. The price of $0.50 is available only while supplies last."
  },
  {
    question: "Is there a refund policy?",
    answer: "Due to the digital nature of the product and the extremely low promotional price, all sales are final. However, if you have any issues with activation, our support team is here to help."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden transition-all border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
