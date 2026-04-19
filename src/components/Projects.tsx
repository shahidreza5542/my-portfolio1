import { motion } from 'motion/react';

const projects = [
  {
    id: '01',
    title: 'ZYRO AI BUILDER',
    desc: 'An AI-powered SaaS platform that generates modern websites instantly using intelligent prompts and dynamic UI rendering.',
    tech: ['React', 'AI API', 'Tailwind', 'PayPal'],
    codeName: 'CONTENT_ENGINE.SYS',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: '02',
    title: 'DEVHIVE BLOG',
    desc: 'A scalable developer-focused blogging platform with seamless content management and fast, responsive UI experience.',
    tech: ['React', 'Appwrite', 'Tailwind'],
    codeName: 'BLOG_KERNEL.AI',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: '03',
    title: 'TUBEIQ ANALYTICS',
    desc: 'An AI-powered YouTube optimization tool for generating thumbnails, descriptions, and deep performance insights.',
    tech: ['React', 'Gemini API', 'AI APIs', 'Tailwind'],
    codeName: 'ANALYTICS_V2.X',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000',
  }
];

export default function Projects() {
  return (
    <section className="bg-black py-40 px-6 md:px-24" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
        <div className="max-w-2xl">
           <span className="mono-text text-accent mb-4 block underline decoration-accent/30 decoration-2 underline-offset-8">03. REPOSITORY_ACCESS</span>
           <h2 className="text-7xl md:text-9xl text-white leading-none">
              PRODUCTION <br />
              <span className="text-neutral-800">BUILDS.</span>
           </h2>
        </div>
        <p className="mono-text text-dim max-w-xs text-right hidden md:block">
           DEPLOYED SYSTEMS AT THE INTERSECTION OF AI AND USER INTERFACE PERFORMANCE.
        </p>
      </div>

      <div className="space-y-64">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 group"
          >
            <div className="md:col-span-5 space-y-8">
               <div className="inline-flex items-center gap-4">
                  <span className="text-8xl md:text-[12rem] font-black text-neutral-900 group-hover:text-accent transition-colors duration-700 leading-none">{project.id}</span>
                  <div className="h-px w-24 bg-white/10" />
               </div>
               
               <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl text-white">{project.title}</h3>
                  <p className="text-neutral-500 font-body text-lg max-w-md">{project.desc}</p>
               </div>

               <div className="flex gap-4 flex-wrap">
                  {project.tech.map(t => (
                    <span key={t} className="mono-text border border-white/10 px-3 py-1 text-[10px] text-neutral-400">{t}</span>
                  ))}
               </div>

               <div className="flex gap-8 pt-8">
                  <button className="mono-text text-accent hover:underline underline-offset-8 decoration-accent">VIEW_CODE</button>
                  <button className="mono-text text-white hover:underline underline-offset-8 decoration-white">LIVE_DEMO</button>
               </div>
            </div>

            <div className="md:col-span-7 relative group">
               <div className="aspect-video overflow-hidden border border-white/10 bg-surface-raised relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 p-4 glass backdrop-blur-3xl border border-white/10">
                     <p className="mono-text text-[8px] text-accent">{project.codeName}</p>
                  </div>
               </div>
               {/* Decorative floating info */}
               <div className="absolute -bottom-6 -left-6 hidden md:block p-6 glass border border-white/10 translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="mono-text text-[10px] text-white">ENCRYPTION: AES_256</p>
                  <p className="mono-text text-[8px] text-dim">STATUS: PRODUCTION_STABLE</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
