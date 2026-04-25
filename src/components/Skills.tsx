import { motion } from "motion/react";
import { 
  Code2, 
  Layers, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Layout, 
  Server,
  Wrench
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-brand-blue" />,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Backend Development",
    icon: <Server className="text-brand-purple" />,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose", "JWT Auth"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="text-orange-500" />,
    skills: ["GitHub", "VS Code", "Vercel", "Netlify", "Railway", "Postman"],
    color: "from-orange-500/20 to-red-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/2">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">My <span className="text-gradient">Tech Stack</span></h2>
          <p className="text-gray-500 text-lg">The tools and technologies I use to bring ideas to life</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all`}
          >
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${category.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit">
              {category.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-6">{category.title}</h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-white/3 border border-white/5 text-sm text-gray-400 font-medium group-hover:text-white group-hover:border-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
