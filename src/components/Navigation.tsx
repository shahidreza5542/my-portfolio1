import { motion } from 'motion/react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 h-20 flex justify-between items-center mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-black tracking-tighter text-white"
      >
        SHAHID<span className="text-accent underline decoration-2 underline-offset-4">.</span>
      </motion.div>

      <div className="hidden md:flex gap-10 items-center">
        {[
          { id: '01', name: 'HOME', href: '#home' },
          { id: '02', name: 'INFO', href: '#story' },
          { id: '03', name: 'WORK', href: '#projects' },
          { id: '04', name: 'STACK', href: '#lab' },
          { id: '05', name: 'CALL', href: '#contact' },
        ].map((item, idx) => (
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

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-2 h-2 rounded-full bg-accent animate-pulse"
      />
    </nav>
  );
}
