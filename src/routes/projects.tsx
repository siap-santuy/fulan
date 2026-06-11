import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import MouseGlow from "@/components/portfolio/MouseGlow";
import { projects } from "@/components/portfolio/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Fajri Arvandi" },
      {
        name: "description",
        content: "All projects by Fajri Arvandi — fullstack platforms, backend services, and ML integrations.",
      },
      { property: "og:title", content: "Projects — Fajri Arvandi" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const PAGE_SIZE = 6;

function ProjectsPage() {
  const [page, setPage] = useState(1);
  const total = projects.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const items = projects.slice(start, start + PAGE_SIZE);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#09090B] text-[#F9FAFB]">
      <MouseGlow />
      <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#9CA3AF] backdrop-blur transition hover:text-white"
        >
          <ArrowLeft size={14} /> Back home
        </Link>

        <header className="mt-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#3B82F6]">All projects</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">The complete</span>{" "}
            <span className="gradient-text-brand">project archive</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#9CA3AF]">
            Every shipped product, internal tool, and side project — production stacks across fullstack,
            backend, and ML.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {pages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex h-9 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 text-xs text-white transition hover:bg-white/10 disabled:opacity-40"
            >
              <ChevronLeft size={14} /> Prev
            </button>
            {Array.from({ length: pages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={
                    "grid h-9 w-9 place-items-center rounded-lg text-xs transition " +
                    (active
                      ? "gradient-brand text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)]"
                      : "border border-white/10 bg-white/5 text-[#9CA3AF] hover:text-white")
                  }
                >
                  {n}
                </button>
              );
            })}
            <button
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              disabled={page === pages}
              className="inline-flex h-9 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 text-xs text-white transition hover:bg-white/10 disabled:opacity-40"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}