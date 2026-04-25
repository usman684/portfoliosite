import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "MERN Chat Application",
    description:
      "A full-stack real-time chat application with Socket.io, featuring group chats, message persistence, and profile management.",
    image: "/images/chatapp.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/usman684/chat-client",
    live: "https://chat-client-kappa-mocha.vercel.app/",
  },
  {
    title: "MERN URL Shortener",
    description:
      "High-performance URL shortening service with detailed analytics, custom aliases, and QR code generation.",
    image: "/images/tinyurl.png",
    tags: ["Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/usman684/tinyurl",
    live: "https://tinyurl-jade-eight.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather data with dynamic backgrounds. Developed a weather app using external API integration. Displayed real-time weather data with user-friendly interface",
    image: "/images/weatherapp.png",
    tags: ["Next.js", "Stripe", "Firebase", "Redux"],
    github: "https://github.com/usman684/weather-react-app",
    live: "https://weather-theta-one-80.vercel.app/",
  },
  {
    title: "Ecommerce App",
    description:
      "Feature-rich e-commerce platform with Stripe integration, complex state management, and cloud functions. Where we can Add, Del, Update and Read the Products",
    image: "/images/ecmrc.png",
    tags: ["Next.js", "Stripe", "Firebase", "Redux"],
    github: "https://github.com/usman684/CRUD-Operation-F",
    live: "https://productapi-coral.vercel.app/",
  },
];

const otherProjects = [
  {
    title: "Netflix Clone",
    description: "Responsive UI with TMDB API integration.",
    tags: ["React", "Tailwind"],
    image: "/images/netflixclone.png",
    github: "https://github.com/usman684/netflix-clone-react",
    live: "https://luxury-stroopwafel-3f630d.netlify.app/",
  },
  {
    title: "Amazon Clone",
    description: "Feature-rich e-commerce platform with Stripe integration, complex state management, and cloud functions.",
    tags: ["React", "OpenWeather"],
    image: "/images/amazonclone.png",
    github: "https://github.com/usman684/amazon-clone-react",
    live: "https://joyful-cajeta-0d980b.netlify.app/",
  },
  {
    title: "Meal Search App",
    description: "Finding recipes with filtering capabilities.",
    tags: ["JavaScript", "TheMealDB"],
    image: "/images/mealsearch.png",
    github: "https://github.com/usman684/meal-search",
    live: "https://meal-pi-sable.vercel.app/",
  },
  {
    title: "Simple Calculator",
    description: "Financial tool for quick interest calculations.",
    tags: ["HTML", "CSS", "JS"],
    image: "/images/interstcal.png",
    github: "https://github.com/usman684/simple-interest-calculator-react",
    live: "https://simple-interest-cal-ten.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <p className="text-gray-500 text-lg">My personal favorites and most complex builds.</p>
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto px-6 grid gap-16 md:gap-32 mb-32">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            <div className="flex-1 w-full relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-purple to-brand-blue rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-video rounded-3xl overflow-hidden glass p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover Icons for Featured Projects */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                   <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-brand-purple transition-all hover:scale-110">
                     <Github size={32} />
                   </a>
                   <a href={project.live} target="_blank" rel="noreferrer" className="text-white hover:text-brand-blue transition-all hover:scale-110">
                     <ExternalLink size={32} />
                   </a>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-brand-purple py-1 px-3 rounded-full bg-brand-purple/10 border border-brand-purple/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
              <div className="flex gap-6 pt-4">
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white font-bold hover:text-brand-purple transition-colors">
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white font-bold hover:text-brand-blue transition-colors">
                  <Github size={20} /> GitHub Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <div className="container mx-auto px-6">
        <div className="h-[1px] w-full bg-white/10 mb-20" />
        <h2 className="text-3xl font-black mb-12">Other <span className="text-gray-500 italic">Creations</span></h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-3xl overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-brand-purple transition-colors">
                     <Github size={20} />
                   </a>
                   <a href={project.live} target="_blank" rel="noreferrer" className="text-white hover:text-brand-blue transition-colors">
                     <ExternalLink size={20} />
                   </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-gray-400">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
