import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Download,
  ArrowRight,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import {
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiPrisma,
} from "react-icons/si";

const roles = ["Backend Engineer", "Software Engineer", "Fullstack Developer", "Business Process Automation"];

function useRotating(words: string[], interval = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);
  return words[i];
}

function Particles() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 10) * 0.4;
        const size = 1 + (i % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, delay }}
          />
        );
      })}
    </div>
  );
}

const floatingIcons = [
  { Icon: SiTypescript, color: "#3178C6", x: "8%", y: "20%", d: 0 },
  { Icon: SiNodedotjs, color: "#5FA04E", x: "85%", y: "18%", d: 0.4 },
  { Icon: SiReact, color: "#61DAFB", x: "12%", y: "70%", d: 0.8 },
  { Icon: SiPostgresql, color: "#4169E1", x: "88%", y: "72%", d: 1.2 },
  { Icon: SiDocker, color: "#2496ED", x: "78%", y: "45%", d: 1.6 },
  { Icon: SiPrisma, color: "#2D3748", x: "18%", y: "45%", d: 2.0 },
];

export default function Hero() {
  const role = useRotating(roles);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* background */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_40%,black,transparent)]"
        aria-hidden
      >
        <Particles />
      </div>
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 60%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 right-1/4 h-[400px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 60%)" }}
        aria-hidden
      />

      {/* floating tech icons */}
      {floatingIcons.map(({ Icon, color, x, y, d }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: d },
            scale: { duration: 0.8, delay: d },
            y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: d },
          }}
        >
          <div className="glass grid h-14 w-14 place-items-center rounded-2xl">
            <Icon size={28} color={color} />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-[#9CA3AF]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </div>

          <h1 className="whitespace-nowrap text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="gradient-text">Fajri</span>{" "}
            <span className="gradient-text-brand">Arvandi</span>
          </h1>

          <div className="mt-6 h-7 text-base text-[#9CA3AF] sm:text-lg">
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2"
            >
              <Sparkles size={16} className="text-[#3B82F6]" />
              <span className="font-medium text-white">{role}</span>
            </motion.span>
          </div>

          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            Build production-grade APIs, scalable backends, modern fullstack applications and 
            intelligent automation systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://drive.google.com/file/d/1qRzJDDw3hFaycAxUXBEQh1U3mte3RUwN/view?usp=drive_link"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition hover:scale-[1.03]"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#9CA3AF]">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> Jakarta, Indonesia
            </span>
            <a
              href="mailto:fajri42vandi@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail size={14} /> Gmail
            </a>
            <a
              href="https://id.linkedin.com/in/fajri-arvandi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href="https://github.com/fajrCode"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}