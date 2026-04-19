import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    id: '01',
    title: 'E-COMMERCE INTERFACE',
    desc: 'A full-featured e-commerce platform with dynamic product displays and smooth navigation. Optimized for seamless shopping experiences across all devices.',
    tech: ['React', 'JavaScript', 'Tailwind', 'Responsive Design'],
    codeName: 'ECOM_ORVIX.PROD',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000',
    link: 'https://ecom-orvix.vercel.app',
  },
  {
    id: '02',
    title: 'DIGITAL AGENCY',
    desc: 'High-impact agency landing page built for visual storytelling. Features advanced Framer Motion animations and clean UI structures.',
    tech: ['React', 'Framer Motion', 'Modern Typography'],
    codeName: 'ORVIX_ONE.GEN',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    link: 'https://orvix-one.vercel.app',
  }
];

interface ProjectItemProps {
  key?: string;
  project: {
    id: string;
    title: string;
    desc: string;
    tech: string[];
    codeName: string;
    image: string;
    link: string;
  };
}

function ProjectItem({ project }: ProjectItemProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const numY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-50px' }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group"
    >
      <div className="md:col-span-12 lg:col-span-5 space-y-6 md:space-y-8">
         <div className="inline-flex items-center gap-4">
            <motion.span 
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? numY : 0 }}
              className="text-6xl sm:text-8xl md:text-[12rem] font-black text-neutral-900 group-hover:text-accent transition-colors duration-700 leading-none"
            >
              {project.id}
            </motion.span>
            <div className="h-px w-24 bg-white/10" />
         </div>
         
         <div className="space-y-6">
            <h3 className="text-4xl md:text-6xl text-white">{project.title}</h3>
            <p className="text-neutral-500 font-body text-lg max-w-md">{project.desc}</p>
         </div>

         <div className="flex gap-4 flex-wrap">
            {project.tech.map((t: string) => (
              <span key={t} className="mono-text border border-white/10 px-3 py-1 text-[10px] text-neutral-400">{t}</span>
            ))}
         </div>

         <div className="flex gap-8 pt-8">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mono-text text-accent hover:underline underline-offset-8 decoration-accent">LIVE_DEMO</a>
            <button className="mono-text text-white hover:underline underline-offset-8 decoration-white">CASE_STUDY</button>
         </div>
      </div>

      <div className="md:col-span-12 lg:col-span-7 relative group overflow-hidden">
         <div className="aspect-video overflow-hidden border border-white/10 bg-surface-raised relative">
            <motion.img 
              style={{ y: imgY, scale: 1.2 }}
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
  );
}

export default function Projects() {
  return (
    <section className="bg-black py-20 md:py-40 px-4 md:px-24" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-6 md:gap-12">
        <div className="max-w-full md:max-w-2xl">
           <span className="mono-text text-accent mb-4 block underline decoration-accent/30 decoration-2 underline-offset-8 text-[10px] md:text-sm">03. REPOSITORY_ACCESS</span>
           <h2 className="text-4xl sm:text-6xl md:text-9xl text-white leading-[0.85] tracking-tighter">
              PRODUCTION <br />
              <span className="text-neutral-800">BUILDS.</span>
           </h2>
        </div>
        <p className="mono-text text-dim max-w-xs text-left md:text-right hidden sm:block text-[10px] md:text-xs">
           DEPLOYED SYSTEMS AT THE INTERSECTION OF AI AND USER INTERFACE PERFORMANCE.
        </p>
      </div>

      <div className="space-y-32 md:space-y-64">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
