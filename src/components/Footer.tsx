export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-black font-display tracking-tight mb-6">
          USMAN<span className="text-brand-purple">.</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-500 font-medium">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          © {currentYear} ALL RIGHTS RESERVED. DESIGNED & BUILT BY MUHAMMAD USMAN.
        </p>
      </div>
    </footer>
  );
}
