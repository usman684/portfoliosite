import { motion } from "motion/react";
import { Code, Globe, ShieldAlert, Laptop, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive, and performance-oriented websites using the latest MERN stack technologies.",
    icon: <Code className="text-brand-purple" />,
  },
  {
    title: "API Development",
    description: "Designing robust and secure RESTful APIs that power your frontend applications with seamless data flow.",
    icon: <Globe className="text-brand-blue" />,
  },
  {
    title: "Bug Fixing",
    description: "Identifying and resolving complex technical issues to ensure your application runs smoothly without interruptions.",
    icon: <ShieldAlert className="text-red-500" />,
  },
  {
    title: "Figma to React",
    description: "Transforming high-fidelity UI/UX designs from Figma into pixel-perfect, interactive React components.",
    icon: <Laptop className="text-orange-500" />,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">What I <span className="text-gradient">Offer</span></h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Specialized services tailored to meet your business needs and digital aspirations.
            </p>
          </div>
          <a href="#contact" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-purple">
            Get a Quote <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group glass p-8 rounded-3xl hover:bg-white/6 transition-all cursor-default"
          >
            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-400 transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
