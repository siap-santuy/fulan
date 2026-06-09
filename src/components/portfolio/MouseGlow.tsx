import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.10), transparent 60%)`,
        transition: "background 0.1s ease",
      }}
      aria-hidden
    />
  );
}