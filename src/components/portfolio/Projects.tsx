import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

import koneksaImg from "@/assets/project-koneksa.jpg";
import taringImg from "@/assets/project-taring.jpg";
import kataustadzImg from "@/assets/project-kataustadz.jpg";
import ericeImg from "@/assets/project-erice.jpg";
import travelynkImg from "@/assets/project-travelynk.jpg";
import coffeegitImg from "@/assets/project-coffeegit.jpg";

type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    name: "Koneksa",
    category: "Fullstack",
    description:
      "Centralized event and campaign management platform integrated with WhatsApp, Email Marketing, and Payment Systems.",
    tech: ["Next.js", "TypeScript", "Bun", "Redis", "BullMQ", "Docker", "PostgreSQL", "Prisma"],
    image: koneksaImg,
  },
  {
    name: "TARING-EIS",
    category: "Fullstack",
    description: "Gamified HRIS platform with AI-powered employee analytics.",
    tech: ["Svelte", "Hono", "Prisma", "PostgreSQL", "Groq AI", "Docker"],
    image: taringImg,
  },
  {
    name: "Kata Ustadz",
    category: "Backend",
    description: "Video learning platform providing Islamic guidance for modern life.",
    tech: ["Fastify", "Prisma", "PostgreSQL", "Midtrans", "Google OAuth"],
    image: kataustadzImg,
  },
  {
    name: "Erice",
    category: "Fullstack",
    description: "Modern e-commerce platform for rice distribution and online sales.",
    tech: ["React", "Fastify", "Prisma", "PostgreSQL", "Midtrans"],
    image: ericeImg,
  },
  {
    name: "Travelynk",
    category: "Fullstack",
    description: "Airline ticket booking platform with payment gateway integration.",
    tech: ["Node.js", "Express", "PostgreSQL", "Midtrans"],
    image: travelynkImg,
  },
  {
    name: "Coffee Git",
    category: "ML / Fullstack",
    description: "Machine learning integrated coffee quality detection platform.",
    tech: ["Flask", "TensorFlow", "React", "GCP"],
    image: coffeegitImg,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useTransform(ry, [-50, 50], [6, -6]);
  const rotateY = useTransform(rx, [-50, 50], [-6, 6]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rx.set(e.clientX - rect.left - rect.width / 2);
    ry.set(e.clientY - rect.top - rect.height / 2);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group glass relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/50 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="glass-strong rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <ArrowUpRight
            size={18}
            className="text-[#9CA3AF] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-[#9CA3AF]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-[#9CA3AF]">
              +{project.tech.length - 6}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <a
            href={project.demo ?? "#"}
            className="inline-flex items-center gap-1.5 rounded-lg gradient-brand px-3 py-1.5 text-xs font-medium text-white transition hover:scale-[1.04]"
          >
            <ExternalLink size={12} /> Live Demo
          </a>
          <a
            href={project.github ?? "#"}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
          >
            <Github size={12} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div
        className="absolute inset-x-0 top-0 mx-auto h-[400px] w-[800px] max-w-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.5), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Production-grade platforms, internal tools, and side projects — built with modern stacks."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}