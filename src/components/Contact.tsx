import { motion } from "motion/react";
import { Send, Phone, Mail, Github, MessageSquare, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Construct mailto link for real delivery
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:usman.rauf.953@gmail.com?subject=${subject}&body=${body}`;

    // Simulate sending animation
    setTimeout(() => {
      setStatus("sent");
      // Launch mail client after a small delay to show the "sent" state
      setTimeout(() => {
        window.location.href = mailtoUrl;
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      }, 500);
    }, 1500);
  };

  const socialLinks = [
    { label: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-white" },
    { 
      label: "WhatsApp",
      icon: MessageCircle, 
      href: `https://wa.me/923286894500?text=${encodeURIComponent("Hi Usman! I saw your portfolio and I'm interested in discussing a project together.")}`, 
      color: "hover:text-green-500" 
    },
    { 
      label: "SMS",
      icon: MessageSquare, 
      href: `sms:+923286894500?body=${encodeURIComponent("Hi Usman, I saw your portfolio and wanted to connect regarding a web development project.")}`, 
      color: "hover:text-brand-blue" 
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-purple/10 rounded-full blur-[160px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden grid lg:grid-cols-2">
          
          <div className="p-12 lg:p-16 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Let's <span className="text-gradient">Talk</span></h2>
              <p className="text-gray-400 text-lg">
                Have a project in mind? Looking for a new team member? Or just want to say hi? 
                I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:usman.rauf.953@gmail.com" className="items-center gap-6 group cursor-pointer block">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-brand-purple/20 transition-all">
                  <Mail className="text-brand-purple" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-xl font-bold group-hover:text-brand-purple transition-colors">usman.rauf.953@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+923286894500" className="items-center gap-6 group cursor-pointer block">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-brand-blue/20 transition-all">
                  <Phone className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Phone</p>
                  <p className="text-xl font-bold group-hover:text-brand-blue transition-colors">+92 328 6894500</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <div key={idx} className="relative group">
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl glass flex items-center justify-center transition-all ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                    {social.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 rotate-45 border-r border-b border-white/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 lg:p-16 bg-white/2 border-l border-white/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-purple/50 focus:bg-white/5 transition-all"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-purple/50 focus:bg-white/5 transition-all"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-purple/50 focus:bg-white/5 transition-all resize-none"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all ${
                  status === "sent" ? "bg-green-500" : "bg-linear-to-r from-brand-purple to-brand-blue shadow-xl shadow-brand-purple/20"
                }`}
              >
                {status === "idle" && <><Send size={20} /> Send Message</>}
                {status === "sending" && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                {status === "sent" && "Message Sent!"}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
