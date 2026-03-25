"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800); 
  };

  return (
    <section id="contact" className="relative z-20 w-full min-h-screen bg-[#050505] flex items-center justify-center py-20 px-4 mt-[-1px]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black/40 p-8 md:p-14 rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md">
        
        {/* Contact Info */}
        <div className="space-y-8 flex flex-col justify-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F59E0B]">Get In Touch</h2>
            <p className="mt-4 text-white/80 text-lg">We welcome partnerships, inquiries, and future endeavors. Connect with our dedicated team today.</p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-wider mb-1">Corporate Office</span>
              <span className="text-white text-lg">A-6, Connaught Place, New Delhi-110001, India</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-wider mb-1">Email Us</span>
              <a href="mailto:info@siddhomalgroup.com" className="text-white text-lg hover:text-[#2563EB] transition-colors">info@siddhomalgroup.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-wider mb-1">Call Us</span>
              <a href="tel:+911123324245" className="text-white text-lg hover:text-[#2563EB] transition-colors">+91-11-23324245 / +91-11-23324773</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#0a1128]/60 p-8 md:p-10 rounded-3xl border border-[#2563EB]/20 shadow-xl relative overflow-hidden">
          {submitted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[#050505]/90 backdrop-blur-lg">
              <CheckCircle className="w-16 h-16 text-[#F59E0B] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
              <p className="text-white/70">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-2 border border-[#F59E0B]/50 rounded-full text-white hover:bg-[#F59E0B]/20 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-white/60 uppercase">Full Name</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F59E0B] transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-white/60 uppercase">Email Address</label>
                <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F59E0B] transition-colors" placeholder="email@company.com" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-white/60 uppercase">Message</label>
                <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F59E0B] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 rounded-lg transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
