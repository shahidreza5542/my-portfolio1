import { motion } from 'motion/react';

const skillGroups = [
  {
    title: 'ENGINEERING_CORE',
    skills: [
      { name: 'HTML5', percent: 95 },
      { name: 'CSS3_SCSS', percent: 90 },
      { name: 'JavaScript_ES6', percent: 98 },
    ]
  },
  {
    title: 'ARCHITECTURE',
    skills: [
      { name: 'React.js', percent: 75 },
      { name: 'Next.js_14', percent: 60 },
      { name: 'Tailwind_CSS', percent: 90 },
    ]
  },
  {
    title: 'INTERACTION_FX',
    skills: [
      { name: 'Framer_Motion', percent: 85 },
      { name: 'GSAP_Animation', percent: 70 },
      { name: 'UX_Logics', percent: 80 },
    ]
  },
  {
    title: 'OPERATIONS',
    skills: [
      { name: 'Git_Workflow', percent: 90 },
      { name: 'Deployment_CI', percent: 85 },
      { name: 'Figma_DevMode', percent: 50 },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-40 bg-black px-6 md:px-24" id="lab">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xl">
            <span className="mono-text text-accent mb-4 block underline decoration-accent/30 decoration-2 underline-offset-8">04. TECH_STACK_MATRIX</span>
            <h2 className="text-7xl md:text-9xl text-white leading-none">
              THE <br />
              <span className="text-neutral-800">ENGINE.</span>
            </h2>
          </div>
          <div className="glass p-8 border border-white/10 max-w-sm">
             <p className="mono-text text-[10px] text-accent mb-4 block">TERMINAL_OUTPUT</p>
             <p className="font-body text-neutral-500 text-sm leading-relaxed">
                Scan complete. Multi-disciplinary capabilities verified. Optimized for high-performance frontend architecture.
             </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="border border-white/10 bg-surface-raised p-8 space-y-12 hover:border-accent transition-colors duration-500 group">
              <h3 className="mono-text text-white text-xs border-b border-white/5 pb-4 group-hover:text-accent transition-colors">{group.title}</h3>
              <div className="space-y-8">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="mono-text text-[10px] text-dim">{skill.name}</span>
                      <span className="mono-text text-[10px] text-accent">{skill.percent}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                        className="absolute h-full bg-accent shadow-[0_0_10px_rgba(190,251,44,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative background accent */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-wrap gap-12 justify-center opacity-30">
           {['TYPESCRIPT', 'NODE_JS', 'FIREBASE', 'MONGODB', 'EXPRESS', 'POSTGRES'].map(t => (
             <span key={t} className="mono-text text-[10px] text-neutral-500 hover:text-white transition-colors cursor-default">{t}</span>
           ))}
        </div>
      </div>
    </section>
  );
}
