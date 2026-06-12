import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Exp = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  details?: string;
  highlights?: string[];
  tags: string[];
  accent: string;
};

const experiences: Exp[] = [
  {
    company: "PT. Paragon Technology and Innovation",
    role: "Software Engineer Intern",
    period: "Nov 2025 — Mey 2026",
    location: "Jakarta, Indonesia",
    type: "Internship",
    summary:
      "Fullstack engineer on PFORM, an internal dynamic form builder platform — shipping production features across 11 sprints.",
    details:
      "Owned end-to-end delivery on PFORM — Paragon's internal dynamic form builder used across HR, Legal, and Operations. Worked in a scrum cadence across 11 sprints with code review, QA, and release management. Contributed to both API (Express + Sequelize) and UI (React + Chakra) with Redis-backed caching for form templates and Jest/Cypress coverage for critical flows.",
    highlights: [
      "Built dynamic form schema engine with conditional logic",
      "Internationalisation (i18n) for ID/EN with locale-aware validation",
      "Redis caching for hot form templates",
      "Cypress E2E for submission and approval flows",
    ],
    tags: ["Express.js", "Sequelize", "React.js", "Chakra UI", "Redis", "Jest", "Cypress", "i18n"],
    accent: "#3B82F6",
  },
  {
    company: "Braincore.id",
    role: "Business Process Automation Engineer",
    period: "Jan 2024 — Jan 2025",
    location: "Remote",
    type: "Part Time",
    summary:
      "Designed and shipped AI-powered automation tools — BlogBuddy, PRD Maker, MoM Maker, and a cross-department WhatsApp reporting bot.",
    details:
      "Led internal automation tooling. Designed and shipped four production tools (BlogBuddy, PRD Maker, MoM Maker, WhatsApp Reporting Bot) on Express + Firebase, integrating LLM providers for content generation and a WhatsApp Bot for cross-department reporting workflows.",
    highlights: [
      "AI content generation pipelines (BlogBuddy, PRD/MoM Maker)",
      "WhatsApp bot orchestrating multi-department reporting",
      "Dockerized services on Firebase",
    ],
    tags: ["Express.js", "Node.js", "Firebase", "Docker", "WhatsApp Bot API", "AI Integration"],
    accent: "#10B981",
  },
  {
    company: "Binar Academy",
    role: "Backend JavaScript Student",
    period: "Sep 2024 — Jan 2025",
    location: "Jakarta, Indonesia",
    type: "Full Time",
    summary:
      "Bootcamp focused on production-grade backend engineering — REST APIs, auth, payments, and CI/CD pipelines.",
    details:
      "Intensive backend bootcamp covering REST API design, authentication (JWT/OAuth), payment integrations (Midtrans), real-time features (WebSocket), Dockerised deployments, and CI/CD with GitHub Actions. Capstone shipped a full booking platform.",
    highlights: [
      "Designed REST APIs with PostgreSQL",
      "Auth (JWT + OAuth) and payment gateway integration",
      "WebSocket-based real-time features",
      "CI/CD with GitHub Actions",
    ],
    tags: ["Node.js", "PostgreSQL", "REST API", "GitHub Actions", "WebSocket", "Docker"],
    accent: "#F59E0B",
  },
  {
    company: "PT. Surveyor Indonesia",
    role: "Software Engineer Intern",
    period: "Aug 2023 — Oct 2023",
    location: "Jakarta, Indonesia",
    type: "Internship",
    summary:
      "Built HRIS modules with gamification mechanics for employee engagement and performance tracking.",
    details:
      "Built HRIS modules with gamification (XP, badges, leaderboards) to boost engagement. Implemented attendance, performance review, and reporting flows on Laravel + MySQL.",
    highlights: [
      "Gamification mechanics for HRIS engagement",
      "Attendance and performance review modules",
      "Reporting dashboard for managers",
    ],
    tags: ["Laravel", "HRIS", "Gamification", "MySQL"],
    accent: "#8B5CF6",
  },
  {
    company: "Bangkit Academy",
    role: "Cloud Computing Cohort",
    period: "Aug 2023 — Jan 2024",
    location: "Remote",
    type: "Cohort",
    summary:
      "Trained in cloud architecture, REST APIs, and production deployments on Google Cloud Platform.",
    details:
      "Google-led tech academy. Trained on cloud architecture, distributed systems, REST API design, and production deployments on GCP. Graduated with a capstone integrating ML inference with a Node.js API on Cloud Run.",
    highlights: [
      "GCP fundamentals: Compute, Cloud Run, Cloud Storage",
      "REST API design and deployment",
      "Capstone: ML-integrated coffee quality detector",
    ],
    tags: ["GCP", "REST API", "Cloud Architecture", "Node.js"],
    accent: "#EF4444",
  },
];

function ExpCard({ e, side, onClick }: { e: Exp; side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group cursor-pointer glass relative w-full overflow-hidden rounded-2xl p-6 text-left transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      style={{ borderTop: `1px solid ${e.accent}55` }}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-50"
        style={{ background: `radial-gradient(circle, ${e.accent}, transparent 70%)` }}
      />
      <div className={`flex flex-wrap items-center gap-2 ${side === "right" ? "md:justify-end" : ""}`}>
        <span
          className="rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
          style={{ color: e.accent, borderColor: `${e.accent}55`, background: `${e.accent}1A` }}
        >
          {e.type}
        </span>
        <span className="text-[11px] text-[#9CA3AF]">{e.period.includes("Present") ? "Ongoing" : ""}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white">{e.role}</h3>
      <p className="text-sm font-medium" style={{ color: e.accent }}>
        {e.company}
      </p>
      <div className={`mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#9CA3AF] ${side === "right" ? "md:justify-end" : ""}`}>
        <span className="inline-flex items-center gap-1">
          <Calendar size={11} /> {e.period}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={11} /> {e.location}
        </span>
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#9CA3AF]">{e.summary}</p>
      <div className={`mt-4 flex flex-wrap gap-1.5 ${side === "right" ? "md:justify-end" : ""}`}>
        {e.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border px-2 py-0.5 text-[11px]"
            style={{ color: e.accent, borderColor: `${e.accent}33`, background: `${e.accent}0D` }}
          >
            {t}
          </span>
        ))}
      </div>
      <span
        className={`mt-4 inline-flex items-center gap-1 text-[11px] font-medium opacity-0 transition-opacity group-hover:opacity-100 ${side === "right" ? "md:ml-auto md:flex md:justify-end" : ""
          }`}
        style={{ color: e.accent }}
      >
        Read details →
      </span>
    </button>
  );
}

function Row({ e, i, onOpen }: { e: Exp; i: number; onOpen: (e: Exp) => void }) {
  const right = i % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.05 * i }}
      className="relative grid grid-cols-[40px_1fr] gap-4 md:grid-cols-[1fr_40px_1fr] md:gap-0"
    >
      {/* dot — left rail on mobile, center on md */}
      <div className="row-span-1 flex items-start justify-center pt-6 md:col-start-2">
        <div
          className="grid h-4 w-4 place-items-center rounded-full shadow-[0_0_20px_-2px]"
          style={{ background: e.accent, boxShadow: `0 0 20px ${e.accent}` }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>

      {/* card */}
      <div
        className={
          "col-start-2 md:col-start-auto " +
          (right ? "md:col-start-3 md:pl-8" : "md:col-start-1 md:row-start-1 md:pr-8")
        }
      >
        <ExpCard e={e} side={right ? "right" : "left"} onClick={() => onOpen(e)} />
      </div>

      {/* empty side */}
      <div className={"hidden md:block " + (right ? "md:col-start-1 md:row-start-1" : "md:col-start-3")} />
    </motion.div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<Exp | null>(null);
  const visible = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of shipped work"
          description="From internships to production-grade platforms — here's the path so far."
        />

        <div className="relative mx-auto max-w-5xl">
          {/* timeline line: left on mobile, center on md */}
          <div className="pointer-events-none absolute bottom-2 top-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent left-[20px] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            <AnimatePresence initial={false}>
              {visible.map((e, i) => (
                <Row key={e.company} e={e} i={i} onOpen={setActive} />
              ))}
            </AnimatePresence>
          </div>

          {experiences.length > 3 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                <Briefcase size={14} />
                {showAll ? "Show less" : `Show ${experiences.length - 3} more`}
                <ChevronDown
                  size={16}
                  className={"transition-transform " + (showAll ? "rotate-180" : "")}
                />
              </button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl border-white/10 bg-[#0B0B0F] p-6 text-[#F9FAFB] sm:rounded-2xl">
          {active && (
            <>
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-3xl"
                style={{ background: `radial-gradient(circle, ${active.accent}, transparent 70%)` }}
              />
              <div className="relative">
                <span
                  className="rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                  style={{
                    color: active.accent,
                    borderColor: `${active.accent}55`,
                    background: `${active.accent}1A`,
                  }}
                >
                  {active.type}
                </span>
                <DialogTitle className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {active.role}
                </DialogTitle>
                <p className="text-sm font-medium" style={{ color: active.accent }}>
                  {active.company}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#9CA3AF]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={11} /> {active.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={11} /> {active.location}
                  </span>
                </div>
                <DialogDescription className="mt-4 text-sm leading-relaxed text-[#C7CAD1]">
                  {active.details ?? active.summary}
                </DialogDescription>
                {active.highlights && active.highlights.length > 0 && (
                  <div className="mt-5">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#9CA3AF]">
                      Highlights
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {active.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-[#C7CAD1]">
                          <span
                            className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: active.accent }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2 py-0.5 text-[11px]"
                      style={{
                        color: active.accent,
                        borderColor: `${active.accent}33`,
                        background: `${active.accent}0D`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}