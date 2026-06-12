import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects-data";

export default function Projects() {
  const featured = projects.slice(0, 3);
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Show all projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}