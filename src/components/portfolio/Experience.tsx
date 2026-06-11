import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Exp = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  tags: string[];
  accent: string;
};

const experiences: Exp[] = [
  {
    company: "Paragon Technology and Innovation",
    role: "Software Engineer Intern",
    period: "Aug 2024 — Present",
    location: "Jakarta, Indonesia",
    type: "Internship",
    summary:
      "Fullstack engineer on PFORM, an internal dynamic form builder platform — shipping production features across 11 sprints.",
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
    tags: ["Node.js", "PostgreSQL", "REST API", "GitHub Actions", "WebSocket", "Docker"],
    accent: "#F59E0B",
  },
  {
    company: "PT Surveyor Indonesia",
    role: "Software Engineer Intern",
    period: "Jul 2023 — Sep 2023",
    location: "Jakarta, Indonesia",
    type: "Internship",
    summary:
      "Built HRIS modules with gamification mechanics for employee engagement and performance tracking.",
    tags: ["Laravel", "HRIS", "Gamification", "MySQL"],
    accent: "#8B5CF6",
  },
  {
    company: "Bangkit Academy",
    role: "Cloud Computing Cohort",
    period: "Feb 2023 — Jul 2023",
    location: "Remote",
    type: "Cohort",
    summary:
      "Trained in cloud architecture, REST APIs, and production deployments on Google Cloud Platform.",
    tags: ["GCP", "REST API", "Cloud Architecture", "Node.js"],
    accent: "#EF4444",
  },
];

function ExpCard({ e, side }: { e: Exp; side: "left" | "right" }) {
  return (
    <div
      className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:border-white/20"
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
      <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">{e.summary}</p>
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
    </div>
  );
}

function Row({ e, i }: { e: Exp; i: number }) {
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
        <ExpCard e={e} side={right ? "right" : "left"} />
      </div>

      {/* empty side */}
      <div className={"hidden md:block " + (right ? "md:col-start-1 md:row-start-1" : "md:col-start-3")} />
    </motion.div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
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
                <Row key={e.company} e={e} i={i} />
              ))}
            </AnimatePresence>
          </div>

          {experiences.length > 3 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
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
    </section>
  );
}