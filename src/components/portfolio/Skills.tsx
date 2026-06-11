import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiHono,
  SiBun,
  SiPrisma,
  SiSequelize,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiTailwindcss,
  SiChakraui,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiJest,
  SiCypress,
  SiPostman,
  SiJira,
  SiFigma,
  SiFirebase,
  SiLaravel,
  SiBullmq,
  SiTypescript as SiTs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Server, GitBranch } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType; color: string };
type Group = { title: string; accent: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Languages",
    accent: "#F59E0B",
    skills: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Go", Icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    title: "Backend",
    accent: "#3B82F6",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, color: "#E5E7EB" },
      { name: "Fastify", Icon: SiFastify, color: "#E5E7EB" },
      { name: "Hono", Icon: SiHono, color: "#FF6B35" },
      { name: "Bun", Icon: SiBun, color: "#FBF0DF" },
      { name: "REST API", Icon: Server as unknown as IconType, color: "#3B82F6" },
    ],
  },
  {
    title: "Frontend",
    accent: "#10B981",
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#E5E7EB" },
      { name: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Chakra UI", Icon: SiChakraui, color: "#319795" },
    ],
  },
  {
    title: "Database",
    accent: "#8B5CF6",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Prisma", Icon: SiPrisma, color: "#A78BFA" },
      { name: "Sequelize", Icon: SiSequelize, color: "#52B0E7" },
    ],
  },
  {
    title: "DevOps & Cloud",
    accent: "#EF4444",
    skills: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "AWS", Icon: FaAws as unknown as IconType, color: "#FF9900" },
      { name: "CI/CD", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Git/GitLab", Icon: SiGitlab, color: "#FC6D26" },
    ],
  },
  {
    title: "Testing & Tools",
    accent: "#F97316",
    skills: [
      { name: "Jest", Icon: SiJest, color: "#C21325" },
      { name: "Cypress", Icon: SiCypress, color: "#69D3A7" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Jira", Icon: SiJira, color: "#2684FF" },
      { name: "Figma", Icon: SiFigma, color: "#A259FF" },
    ],
  },
];

type MTech = { name: string; Icon: IconType; color: string };
const marqueeTech: MTech[] = [
  { name: "Express.js", Icon: SiExpress, color: "#9CA3AF" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#E5E7EB" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Prisma", Icon: SiPrisma, color: "#A78BFA" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
  { name: "Sequelize", Icon: SiSequelize, color: "#52B0E7" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Fastify", Icon: SiFastify, color: "#F97316" },
  { name: "Hono", Icon: SiHono, color: "#FF6B35" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Bun", Icon: SiBun, color: "#FBF0DF" },
  { name: "BullMQ", Icon: SiBullmq, color: "#EF4444" },
  { name: "Chakra UI", Icon: SiChakraui, color: "#319795" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "AWS", Icon: FaAws as unknown as IconType, color: "#FF9900" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
  { name: "Cypress", Icon: SiCypress, color: "#69D3A7" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Firebase", Icon: SiFirebase, color: "#F59E0B" },
  { name: "Git", Icon: GitBranch as unknown as IconType, color: "#F97316" },
];

function MarqueeChip({ t }: { t: MTech }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur"
      style={{
        color: t.color,
        borderColor: `${t.color}55`,
        background: `${t.color}14`,
      }}
    >
      <t.Icon size={13} color={t.color} />
      {t.name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools & Technologies"
          description="A pragmatic stack focused on shipping reliable software."
        />

        {/* marquee */}
        <div className="relative space-y-3 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#09090B] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#09090B] to-transparent" />

          <div className="flex animate-marquee gap-3 whitespace-nowrap">
            {[...marqueeTech, ...marqueeTech].map((t, i) => (
              <MarqueeChip key={`a-${i}`} t={t} />
            ))}
          </div>
          <div
            className="flex animate-marquee gap-3 whitespace-nowrap"
            style={{ animationDirection: "reverse", animationDuration: "32s" }}
          >
            {[...marqueeTech.slice().reverse(), ...marqueeTech.slice().reverse()].map((t, i) => (
              <MarqueeChip key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* category cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="group glass relative overflow-hidden rounded-2xl p-5 transition hover:border-white/20"
              style={{ borderTop: `1px solid ${g.accent}66` }}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-60"
                style={{ background: `radial-gradient(circle, ${g.accent}, transparent 70%)` }}
              />
              <div className="relative mb-4 flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: g.accent, boxShadow: `0 0 10px ${g.accent}` }}
                />
                <h3
                  className="text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: g.accent }}
                >
                  {g.title}
                </h3>
              </div>
              <ul className="relative space-y-2">
                {g.skills.map((s) => (
                  <li key={s.name} className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                    <s.Icon size={14} color={s.color} />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}