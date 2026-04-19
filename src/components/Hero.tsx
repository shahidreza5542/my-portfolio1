import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <header 
      id="home"
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <motion.div 
        style={{ y, opacity }}
        className="z-20 text-center px-6 relative"
      >
        <div className="flex flex-col items-center">
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: '100px' }}
             className="h-px bg-accent mb-8"
           />
           <span className="mono-text text-accent mb-4 tracking-[0.5em] block">
             Verified Full-Stack Engineer
           </span>
        </div>

        <h1 className="text-[15vw] md:text-[12vw] leading-none text-white tracking-tighter">
          SHAHID <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>REZA.</span>
        </h1>
        
        <div className="mt-12 flex justify-between items-center w-full max-w-lg mx-auto border-t border-white/10 pt-8">
           <div className="text-left">
              <p className="mono-text text-dim text-[8px]">Availability</p>
              <p className="mono-text text-accent text-[10px]">Active _ 2025</p>
           </div>
           <div className="text-right">
              <p className="mono-text text-dim text-[8px]">Location</p>
              <p className="mono-text text-white text-[10px]">GLOBAL_SYNC</p>
           </div>
        </div>
      </motion.div>

      {/* Glowing cursor element that follows or static accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        <span className="mono-text text-[8px] text-accent/50 animate-bounce">Scroll_to_init</span>
      </div>
    </header>
  );
}
