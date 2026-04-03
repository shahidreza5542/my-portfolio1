import React from "react";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function GridPattern({
  width = 40,
  height = 40,
  x = 0,
  y = 0,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}) {
  const id = React.useId();

  return (
    <motion.svg
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
      className={cn(
        "pointer-events-none absolute inset-0 w-full h-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      {/* Base Grid */}
      <motion.rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Animated Glow Squares */}
      {squares &&
        squares.map(([sx, sy], index) => (
          <motion.rect
            key={`${sx}-${sy}-${index}`}
            x={sx * width}
            y={sy * height}
            width={width}
            height={height}
            rx={4}
            fill="rgba(255,255,255,0.05)"
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </motion.svg>
  );
}

export default GridPattern;