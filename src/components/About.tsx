import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="relative min-h-screen bg-black border-y border-white/10 overflow-hidden py-32" id="story">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border border-white/10 group">
          {/* Header Bar */}
          <div className="col-span-12 border-b border-white/10 p-6 flex justify-between items-center bg-white/5">
             <div className="flex gap-4 items-center">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="mono-text text-accent text-[10px]">SYSTEM_MANIFESTO_V1.0</span>
             </div>
             <div className="flex gap-2">
                <div className="w-8 h-px bg-white/20" />
                <div className="w-8 h-px bg-white/20" />
             </div>
          </div>

          {/* Identity Column */}
          <div className="md:col-span-5 p-12 flex flex-col justify-between border-r border-white/10">
             <div>
                <span className="mono-text text-dim mb-4 block underline">02. CORE_LOGIC</span>
                <h2 className="text-6xl md:text-8xl text-white mb-8">
                   MODERN <br />
                   <span className="text-accent">STACK.</span>
                </h2>
             </div>
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               className="aspect-video bg-surface-raised border border-white/5 relative overflow-hidden mt-12"
             >
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000" 
                  alt="Dev Context"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-20 hover:opacity-50 transition-opacity duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-black/80 backdrop-blur-md border-t border-white/10">
                   <p className="mono-text text-[8px] text-accent">LOC: GLOBAL_WORKSPACE_ALPHA</p>
                </div>
             </motion.div>
          </div>

          {/* Narrative Column */}
          <div className="md:col-span-7 p-12 space-y-12">
             <div className="space-y-6">
                <h3 className="mono-text text-white text-sm tracking-widest bg-accent text-black px-2 py-1 inline-block">THE_JOURNEY</h3>
                <p className="text-2xl md:text-3xl text-white leading-tight font-medium">
                  Started my odyssey in early 2025, specializing in high-performance digital systems that blend technical rigor with futuristic aesthetics.
                </p>
             </div>

             <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                <div className="space-y-4">
                   <span className="mono-text text-dim">01_ENGINEERING</span>
                   <p className="text-sm text-dim leading-relaxed">
                      Architecting scalable React & Next.js applications with a focus on type-safety and performance.
                   </p>
                </div>
                <div className="space-y-4">
                   <span className="mono-text text-dim">02_EXPERIENCE</span>
                   <p className="text-sm text-dim leading-relaxed">
                      6 months of professional freelancing, pivoting from standard designs to high-impact engineering solutions.
                   </p>
                </div>
             </div>

             <div className="pt-12">
                <motion.button 
                  whileHover={{ backgroundColor: '#befb2c', color: '#000' }}
                  className="border border-accent text-accent px-10 py-5 mono-text transition-colors"
                >
                  DOWNLOAD_CONFIG.PDF
                </motion.button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
