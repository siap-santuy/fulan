import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "./projects-data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      {/* accent top border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />
      {/* accent glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
        style={{ background: `radial-gradient(circle, ${project.accent}, transparent 70%)` }}
      />

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
          <span
            className="rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur"
            style={{
              color: project.accent,
              borderColor: `${project.accent}55`,
              background: `${project.accent}1A`,
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <ArrowUpRight
            size={18}
            className="text-[#9CA3AF] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: undefined }}
          />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-md border px-2 py-0.5 text-[11px]"
              style={{
                color: project.accent,
                borderColor: `${project.accent}33`,
                background: `${project.accent}0D`,
              }}
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
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition hover:scale-[1.04]"
            style={{
              background: `linear-gradient(135deg, ${project.accent}, ${project.accent}99)`,
              boxShadow: `0 10px 30px -10px ${project.accent}99`,
            }}
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