import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [40, -90]);

  

  return (
    <section 
      ref={containerRef}
      className="relative bg-black py-20 md:py-48 overflow-hidden border-b border-white/5" 
      id="story"
    >
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-400 mx-auto px-6 md:px-16">
        {/* Editorial Header */}
<div className="flex flex-col gap-4 md:gap-6 mb-20 md:mb-32 relative">

  {/* Top Meta */}
  <div className="flex items-center gap-4 md:gap-6">
    <span className="text-white/60 text-[10px] md:text-xs tracking-[0.3em] font-semibold">
      02 // DESIGN_ENGINEER_MANIFESTO
    </span>
    <div className="h-px flex-1 bg-white/10" />
    <span className="text-white/20 text-[10px] hidden sm:block">
      VER_SH.03
    </span>
  </div>

  {/* Line 1 */}
  <div className="overflow-hidden">
    <motion.h2
      style={{ x: xLeft }}
      className="
        font-black uppercase tracking-tight
        leading-[0.9]

        text-[12vw] 
        sm:text-[10vw] 
        md:text-[8vw] 
        lg:text-[6vw] 
        xl:text-[5rem]

        break-words
      "
    >
      DIGITAL{" "}
      <span className="text-white/20">SYSTEMS</span>
    </motion.h2>
  </div>

  {/* Line 2 */}
  <div className="overflow-hidden">
    <motion.h2
      style={{ x: xRight }}
      className="
        font-black uppercase tracking-tight
        leading-[0.9]
        text-right

        text-[12vw] 
        sm:text-[10vw] 
        md:text-[8vw] 
        lg:text-[6vw] 
        xl:text-[5rem]

        break-words
      "
    >
      LOGIC{" "}
      <span className="text-white">DRIVEN</span>
    </motion.h2>
  </div>

</div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Left: The Philosophy */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-12">
            <div className="relative">
              <span className="absolute -left-8 top-2 text-accent text-lg font-black font-mono hidden md:block">"</span>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.05] tracking-tight">
                Crafting <span className="text-accent italic">visceral</span> digital experiences. I specialize in building responsive, interactive user interfaces that blend engineering precision with modern web aesthetics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-white/10">
               <div className="flex-1 space-y-4">
                  <h4 className="mono-text text-white text-[10px] tracking-widest uppercase opacity-40">FRONTEND_FOUNDATION</h4>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    Freelance developer specializing in React and Framer Motion. Expert at transforming complex wireframes into pixel-perfect, interactive digital products.
                  </p>
               </div>
               <div className="flex-1 space-y-4">
                  <h4 className="mono-text text-white text-[10px] tracking-widest uppercase opacity-40">UI_UX_ETHOS</h4>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    Focused on high-impact visual storytelling. Prioritizing performance, usability, and original non-AI craftsmanship to build strong client relationships.
                  </p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 relative group">
            <div className="aspect-4/5 bg-neutral-900 overflow-hidden relative border border-white/5 rounded-sm">
               <motion.img 
                  initial={{ scale: 1.2, filter: 'grayscale(100%)' }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
                  alt="Deep Tech"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000"
               />
               <div className="absolute inset-x-8 bottom-8 p-6 glass backdrop-blur-3xl border border-white/10 group-hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-end">
                     <div className="space-y-1">
                        <p className="mono-text text-[10px] text-accent">DATA_SOURCE: GLOBAL_NETWORK</p>
                        <p className="text-xl font-bold text-white uppercase tracking-tighter">Neural_Architecture</p>
                     </div>
                     <span className="mono-text text-[10px] text-white/30">SH_02.9</span>
                  </div>
               </div>
            </div>
            
            {/* Floating Accents */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-accent opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-accent opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

        </div>

        {/* Global Stats bar */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12">
            {[
              { label: 'EXPERIENCE', value: '06+', unit: 'MONTHS' },
              { label: 'DEPLOYS', value: '12+', unit: 'STABLE' },
              { label: 'STACK', value: 'FULL', unit: 'CLOUD' },
              { label: 'CLIENTS', value: '08+', unit: 'GLOBAL' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2 text-center md:text-left">
                <p className="mono-text text-[8px] text-dim tracking-widest uppercase">{stat.label}</p>
                <h5 className="text-4xl md:text-5xl font-black text-white leading-none">
                  {stat.value}<span className="text-accent text-xs ml-1">{stat.unit}</span>
                </h5>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
