import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32 border-t border-white/5" id="contact">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-24 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 h-full items-center">
          <div className="space-y-12">
            <div>
              <span className="mono-text text-accent mb-4 block underline decoration-accent/30 decoration-2 underline-offset-8">05. ESTABLISH_UPLINK</span>
              <h2 className="text-7xl md:text-9xl text-white leading-none">
                LET'S <br />
                <span className="text-accent underline decoration-4 underline-offset-[16px]">BUILD.</span>
              </h2>
            </div>
            
            <div className="space-y-6 max-w-sm">
               <p className="mono-text text-dim leading-relaxed text-sm">
                 Currently accepting new development cycles for Q2 2026. Data-driven interfaces and high-performance systems preferred.
               </p>
               <div className="pt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="w-1.5 h-1.5 bg-accent" />
                     <p className="mono-text text-white">REZA.SHAHID.DEV@GMAIL.COM</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-1.5 h-1.5 bg-accent" />
                     <p className="mono-text text-white">SYNC_LOC: ASIA/KOLKATA</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-12 border border-white/10 bg-surface-raised relative z-10 space-y-8">
               <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-accent" />
               <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-accent" />
               <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l border-accent" />
               <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-accent" />

               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="mono-text text-[8px] text-dim">SENDER_NAME</label>
                     <input type="text" className="w-full bg-black border border-white/5 p-4 text-white mono-text focus:border-accent focus:outline-none transition-colors" placeholder="NAME_REQUIRED" />
                  </div>
                  <div className="space-y-2">
                     <label className="mono-text text-[8px] text-dim">EMAIL_ADDR</label>
                     <input type="email" className="w-full bg-black border border-white/5 p-4 text-white mono-text focus:border-accent focus:outline-none transition-colors" placeholder="EMAIL_REQUIRED" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="mono-text text-[8px] text-dim">DATA_PAYLOAD</label>
                  <textarea rows={4} className="w-full bg-black border border-white/5 p-4 text-white mono-text focus:border-accent focus:outline-none transition-colors" placeholder="ENTER_MESSAGE_HERE..." />
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full py-6 bg-accent text-black mono-text font-bold text-sm tracking-widest hover:shadow-[0_0_30px_rgba(190,251,44,0.4)] transition-all"
               >
                 TRANSMIT_DATA()
               </motion.button>
            </div>
            
            {/* Background elements */}
            <div className="absolute -inset-4 border border-white/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
