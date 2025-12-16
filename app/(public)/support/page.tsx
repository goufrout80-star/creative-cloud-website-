"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare, Clock, Send, HelpCircle, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/footer";

export default function SupportPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-muted/30 text-foreground font-sans">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How can we help?</h1>
          <p className="text-xl text-muted-foreground">Our team is here to assist you with any questions or issues.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email Support</h3>
            <p className="text-muted-foreground mb-4 text-sm">Direct assistance via email.</p>
            <a href="mailto:support@todayfilmmakers.com" className="font-medium text-primary hover:underline">support@todayfilmmakers.com</a>
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Response Time</h3>
            <p className="text-muted-foreground mb-4 text-sm">We typically reply fast.</p>
            <span className="font-medium text-foreground">Within 24-48 Hours</span>
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">FAQ</h3>
            <p className="text-muted-foreground mb-4 text-sm">Instant answers to common questions.</p>
            <Link href="/#faq" className="font-medium text-primary hover:underline">Visit Help Center</Link>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-background rounded-3xl shadow-lg border border-border overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-muted-foreground" />
              Send us a message
            </h2>

            {formState === 'success' ? (
              <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700 mb-6">Thank you for contacting us. We've received your message and will get back to you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-green-700 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-accent/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-accent/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-foreground">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 bg-accent/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Refund Request</option>
                    <option>Technical Issue</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help you today?"
                    className="w-full px-4 py-3 bg-accent/50 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? (
                    "Sending..."
                  ) : (
                    <>Send Message <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
