import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer (Personal Projects)",
    company: "Remote / Self-Directed",
    period: "2025 - Present",
    description: "Building full-stack web applications using MERN stack including e-commerce demos, dashboards, and automation tools as part of self-practice and portfolio development",
    location: "Global"
  },
  {
    role: "MERN Stack Training",
    company: "Nexskill",
    period: "2025 - 2026",
    description: "In-depth training on React, Node.js, Express, and MongoDB. Completed multiple full-stack industry-standard projects.",
    location: "Lahore, Pakistan"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Training & <span className="text-gradient">Experience</span></h2>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-brand-purple via-brand-blue to-transparent -translate-x-1/2 hidden md:block" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot on line */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-brand-purple border-4 border-dark-bg -translate-x-1/2 top-0 hidden md:block" />
              
              <div className="md:w-1/2">
                <div className="glass p-8 rounded-3xl hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-2 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
                    <Calendar size={14} /> {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-purple transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-1"><Briefcase size={14} /> {exp.company}</div>
                    <div className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</div>
                  </div>
                  <p className="text-gray-400 leading-relaxed italic border-l-2 border-brand-purple/20 pl-4">
                    “{exp.description}”
                  </p>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
