import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-4/5 sm:aspect-square md:aspect-4/5 rounded-3xl overflow-hidden glass p-3 border-2 border-brand-purple/20">
              <img
                src="/images/pic.png"
                alt="Muhammad Usman"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple rounded-full blur-[80px] -z-10 opacity-50" />
            <div className="absolute top-1/2 -left-10 w-24 h-24 bg-brand-blue rounded-full blur-[60px] -z-10 opacity-30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight text-center md:text-left">
              Crafting Digital <br />
              <span className="text-gradient">Experiences</span> With Purpose
            </h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed text-center md:text-left">
              <p>
                My journey began with a simple curiosity about how things work on the web. 
                What started as a handful of HTML tags soon transformed into a passion for 
                engineering robust, scalable systems that solve real-world problems.
              </p>
              <p>
                Since then, I've dedicated myself to mastering the MERN stack—MongoDB, Express, 
                React, and Node.js. My focus is on writing clean, maintainable code and 
                designing intuitive user interfaces that leave a lasting impression.
              </p>
              <p>
                Whether it's a high-performance e-commerce platform or a collaborative 
                SaaS dashboard, I approach every project with a relentless commitment 
                to quality and innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 justify-items-center md:justify-items-start">
              <div>
                <h3 className="text-3xl font-black text-white">6+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Months Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">10+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
