import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "MERN Stack Developer | React & Node Specialist";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          key="hero-bg-video"
          src="/images/backgroundvid.mp4"
          className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        />
        {/* Gradients to blend and enhance readability */}
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="absolute inset-0 bg-linear-to-b from-dark-bg/80 via-transparent to-dark-bg" />
      </div>

      {/* Background Blobs for depth */}
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-widest uppercase mb-8 inline-block"
          >
            Available for New Projects
          </motion.span>
          
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter sm:tracking-tight wrap-break-words">
            Muhammad <br className="lg:hidden" /> <span className="text-gradient tracking-tight">Usman</span>
          </h1>
          
          <div className="h-10 md:h-12 mb-8 px-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-medium">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 h-6 md:h-8 bg-brand-purple ml-1 align-middle"
              />
            </p>
          </div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            I build scalable, modern web applications with clean UI and powerful backend systems. 
            Focused on performance, accessibility and user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold transition-all shadow-xl shadow-white/10"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="/images/cv.pdf"
              download="Muhammad_Usman_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full glass font-bold text-white hover:bg-white/10 transition-all"
            >
              Download CV <Download size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll Down</span>
        <div className="w-px h-12 bg-linear-to-b from-brand-purple to-transparent" />
      </motion.div>
    </section>
  );
}
