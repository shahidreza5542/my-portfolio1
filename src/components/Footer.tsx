export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
           <h4 className="text-2xl font-black text-white">SHAHID<span className="text-accent">.</span></h4>
           <p className="mono-text text-[8px] text-dim tracking-widest text-center md:text-left">
             ARCHITECTING DIGITAL SYSTEMS _ SINCE 2025
           </p>
        </div>

        <div className="flex gap-12 text-center md:text-left">
          {['GITHUB', 'LINKEDIN', 'TWITTER', 'INSTAGRAM'].map(link => (
            <a key={link} href="#" className="mono-text text-[10px] text-dim hover:text-accent transition-colors">{link}</a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-right">
           <p className="mono-text text-[10px] text-white">© 2025_SHAHID_REZA</p>
           <p className="mono-text text-[8px] text-dim text-right">VER. 2.0.0_PRODUCTION</p>
        </div>
      </div>
    </footer>
  );
}
