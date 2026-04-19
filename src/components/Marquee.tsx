export default function Marquee() {
  return (
    <div className="bg-accent py-4 overflow-hidden border-y border-black relative z-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-black font-black text-2xl px-8 mono-text">FRONTEND_ENGINEER</span>
            <span className="text-black text-[10px] px-8 mono-text opacity-50">STATUS: ACTIVE_SYNC</span>
            <span className="text-black font-black text-2xl px-8 mono-text">SHAHID_REZA</span>
            <span className="text-black text-[10px] px-8 mono-text opacity-50">LOC: DEV_WORKSPACE_01</span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
