import React from "react";

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
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 w-full h-full opacity-80",
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

      {/* Static Grid */}
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* Static Squares */}
      {squares &&
        squares.map(([sx, sy], index) => (
          <rect
            key={`${sx}-${sy}-${index}`}
            x={sx * width}
            y={sy * height}
            width={width}
            height={height}
            rx={4}
            fill="rgba(255,255,255,0.05)"
          />
        ))}
    </svg>
  );
}

export default GridPattern;