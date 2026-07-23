import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  // Mobile me disable
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer:fine)").matches;

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

      setParticles((prev) => [
        ...prev.slice(-8),
        {
          id: crypto.randomUUID(),
          x: e.clientX,
          y: e.clientY,
        },
      ]);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Lines */}
      <svg
        className="fixed inset-0 z-[9997] pointer-events-none"
      >
        {particles.map((p, index) => {
          if (index === 0) return null;

          return (
            <line
              key={p.id}
              x1={particles[index - 1].x}
              y1={particles[index - 1].y}
              x2={p.x}
              y2={p.y}
              stroke="rgba(34,211,238,0.25)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            left: p.x,
            top: p.y,
          }}
          className="
            fixed
            z-[9998]
            pointer-events-none
            h-2
            w-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400
            shadow-[0_0_20px_#22d3ee]
          "
        />
      ))}

      {/* Cursor */}
      <motion.div
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
        className="
          fixed
          z-[9999]
          pointer-events-none
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400
          bg-cyan-400/20
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(34,211,238,.8)]
        "
      />
    </>
  );
};

export default CursorGlow;