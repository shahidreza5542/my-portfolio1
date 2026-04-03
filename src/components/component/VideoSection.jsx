import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const VideoSection = ({ logo }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className="relative w-full flex justify-center items-center"
    >

      
      <div className="absolute w-[92%] h-[92%] border border-white/30 rounded-xl z-0"></div>

     
      <div
        className="relative bg-[#2A2A2A] p-4 z-10 w-full max-w-125 h-120 rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
      >
        <video
          className="w-full h-full object-cover rounded-lg"
          src={logo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

    </motion.div>
  );
};

export default VideoSection;