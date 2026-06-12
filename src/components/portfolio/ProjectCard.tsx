/* eslint-disable prettier/prettier */
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, X, Calendar, Briefcase } from "lucide-react";
import type { Project } from "./projects-data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useTransform(ry, [-50, 50], [6, -6]);
  const rotateY = useTransform(rx, [-50, 50], [-6, 6]);
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const stop = (e: React.MouseEvent) => e.stopPropagation();

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
    <>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => setOpen(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(true);
        }
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group glass relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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

      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <ArrowUpRight
            size={18}
            className="text-[#9CA3AF] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: undefined }}
          />
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#9CA3AF]">
          {project.description}
        </p>

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

        <div className="mt-auto flex items-center gap-2 pt-5">
          <a
            href={project.demo ?? "#"}
            onClick={stop}
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
            onClick={stop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
          >
            <Github size={12} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>

    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl border-white/10 bg-[#0B0B0F] p-0 text-[#F9FAFB] sm:rounded-2xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
          <img
            src={images[slide]}
            alt={`${project.name} screenshot ${slide + 1}`}
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 40%, #0B0B0F), radial-gradient(circle at top right, ${project.accent}33, transparent 60%)`,
            }}
          />
          {images.length > 1 && (
            <>
              <button
                onClick={() => setSlide((s) => (s - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur hover:bg-black/60"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setSlide((s) => (s + 1) % images.length)}
                className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur hover:bg-black/60"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={
                      "h-1.5 rounded-full transition-all " +
                      (i === slide ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70")
                    }
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
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

        <div className="px-6 pb-6 pt-2">
          <DialogTitle className="text-2xl font-semibold tracking-tight text-white">
            {project.name}
          </DialogTitle>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#9CA3AF]">
            {project.role && (
              <span className="inline-flex items-center gap-1">
                <Briefcase size={11} /> {project.role}
              </span>
            )}
            {project.year && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={11} /> {project.year}
              </span>
            )}
          </div>

          <DialogDescription className="mt-4 text-sm leading-relaxed text-[#C7CAD1]">
            {project.details ?? project.description}
          </DialogDescription>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#9CA3AF]">
                Highlights
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-[#C7CAD1]">
                    <span
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: project.accent }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-[#9CA3AF]">
              Tech Stack
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
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
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a
              href={project.demo ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-white transition hover:scale-[1.04]"
              style={{
                background: `linear-gradient(135deg, ${project.accent}, ${project.accent}99)`,
                boxShadow: `0 10px 30px -10px ${project.accent}99`,
              }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
            <a
              href={project.github ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10"
            >
              <Github size={12} /> GitHub
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}