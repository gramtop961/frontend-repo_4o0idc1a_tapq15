import { useState, useEffect } from 'react';
import { Home, Settings, User } from 'lucide-react';

export default function GlassHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[92%] md:w-[85%] ${
        scrolled ? 'backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]' : 'bg-transparent'
      } rounded-2xl`}
      aria-label="Primary"
    >
      <nav className="flex items-center justify-between px-4 md:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-[#00A9FF]/20 ring-1 ring-[#00A9FF]/50 shadow-[0_0_30px_rgba(0,169,255,0.6)]" />
          <span className="text-white/90 font-semibold tracking-tight">Haier · Smart Living Universe</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-white/70">
          <li>
            <a href="#home" className="hover:text-white transition-colors flex items-center gap-2">
              <Home size={18} /> Home
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-white transition-colors">Products</a>
          </li>
          <li>
            <a href="#technology" className="hover:text-white transition-colors flex items-center gap-2">
              <Settings size={18} /> Technology
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-2">
              <User size={18} /> About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
