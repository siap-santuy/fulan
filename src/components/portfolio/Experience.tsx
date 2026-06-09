import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Paragon Technology and Innovation",
    role: "Software Engineer Intern",
    period: "2024 — Present",
    summary: "Fullstack engineer on PFORM, an internal dynamic form builder platform.",
    tags: [
      "Express.js",
      "Sequelize",
      "React.js",
      "Chakra UI",
      "Redis Rate Limiting",
      "Jest",
      "Cypress",
      "i18n",
      "Dynamic Form Builder",
    ],
  },
  {
    company: "Braincore.id",
    role: "BPA Engineer",
    period: "2024",
    summary: "Designed and shipped AI-powered automation tools for content & productivity.",
    tags: ["WhatsApp Bot", "BlogBuddy", "PRD Maker", "MoM Maker", "AI Automation"],
  },
  {
    company: "PT Surveyor Indonesia",
    role: "Software Engineer Intern",
    period: "2023",
    summary: "Built HRIS modules with gamification mechanics for employee engagement.",
    tags: ["Laravel", "HRIS", "Gamification", "MySQL"],
  },
  {
    company: "Bangkit Academy",
    role: "Cloud Computing Cohort",
    period: "2023",
    summary: "Trained in cloud architecture, REST APIs, and production GCP deployments.",
    tags: ["GCP", "REST API", "Cloud Architecture", "Node.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of shipped work"
          description="From internships to production-grade platforms — here's the path so far."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((e, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={e.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className={`relative grid grid-cols-[40px_1fr] gap-4 md:grid-cols-2 md:gap-10 ${
                    right ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-4 top-3 -translate-x-1/2 md:left-1/2">
                    <div className="grid h-4 w-4 place-items-center rounded-full gradient-brand shadow-[0_0_20px_-2px_rgba(59,130,246,0.8)]">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className={`hidden md:block ${right ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                    <div className="text-xs uppercase tracking-wider text-[#9CA3AF]">
                      {e.period}
                    </div>
                  </div>

                  <div className={`col-start-2 md:col-auto ${right ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <div className="glass rounded-2xl p-6 transition hover:border-white/20">
                      <div className="flex items-center gap-2 text-xs text-[#9CA3AF] md:hidden">
                        <Briefcase size={12} /> {e.period}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {e.role}
                      </h3>
                      <p className="text-sm font-medium text-[#3B82F6]">{e.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
                        {e.summary}
                      </p>
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${right ? "md:justify-end" : ""}`}>
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-[#9CA3AF]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}