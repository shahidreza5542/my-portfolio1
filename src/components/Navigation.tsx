import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: '01', name: 'HOME', href: '#home' },
    { id: '02', name: 'INFO', href: '#story' },
    { id: '03', name: 'WORK', href: '#projects' },
    { id: '04', name: 'STACK', href: '#lab' },
    { id: '05', name: 'CALL', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-100 px-6 md:px-12 h-20 flex justify-between items-center transition-all duration-500 ${scrolled || isOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-black tracking-tighter text-white z-120"
        >
          SHAHID<span className="text-accent underline decoration-2 underline-offset-4">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="mono-text flex items-center gap-2 group transition-all duration-300"
            >
              <span className="text-[7px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">[{item.id}]</span>
              <span className="text-[10px] text-white/50 group-hover:text-white transition-colors">{item.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-end gap-1.5 z-[110] p-2"
        >
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0, width: isOpen ? '32px' : '24px' }}
            className="h-0.5 bg-white origin-center" 
          />
          <motion.div 
            animate={{ opacity: isOpen ? 0 : 1, width: '32px' }}
            className="h-0.5 bg-accent" 
          />
          <motion.div 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0, width: isOpen ? '32px' : '16px' }}
            className="h-0.5 bg-white origin-center" 
          />
        </button>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden md:block w-2 h-2 rounded-full bg-accent animate-pulse"
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, type: 'spring', damping: 20 }}
                  className="group flex flex-col items-center"
                >
                  <span className="mono-text text-[10px] text-accent mb-2">[{item.id}]</span>
                  <span className="text-5xl sm:text-7xl font-black text-white group-hover:text-accent transition-colors duration-300 tracking-tighter uppercase leading-none">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-12 flex flex-col items-center gap-6">
              <div className="h-px w-24 bg-white/10" />
              <div className="flex gap-10">
                {['GH', 'IN', 'TW'].map(s => (
                  <span key={s} className="mono-text text-[9px] text-white/40 hover:text-white transition-colors cursor-pointer">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
