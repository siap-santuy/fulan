import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiHono,
  SiBun,
  SiPrisma,
  SiSequelize,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiChakraui,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiAmazonec2,
  SiGooglecloud,
  SiDigitalocean,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { GitBranchPlus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType | typeof GitBranchPlus; color: string };
type Group = { title: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "Fastify", Icon: SiFastify, color: "#FFFFFF" },
      { name: "Hono", Icon: SiHono, color: "#FF6B35" },
      { name: "Bun", Icon: SiBun, color: "#FBF0DF" },
      { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
      { name: "Sequelize", Icon: SiSequelize, color: "#52B0E7" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Chakra UI", Icon: SiChakraui, color: "#319795" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", Icon: SiAmazonec2, color: "#FF9900" },
      { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "DigitalOcean", Icon: SiDigitalocean, color: "#0080FF" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "CI/CD", Icon: GitBranchPlus, color: "#A78BFA" },
    ],
  },
];

const marqueeTech = [
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Redis",
  "Prisma",
  "Next.js",
  "Fastify",
  "Hono",
  "GCP",
  "AWS",
  "BullMQ",
  "React",
  "Svelte",
  "TailwindCSS",
  "Bun",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I reach for"
          description="A pragmatic stack focused on shipping reliable software."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-6 rounded-full gradient-brand" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {g.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ y: -2 }}
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <s.Icon size={16} color={s.color} />
                    <span>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* marquee */}
        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#09090B] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#09090B] to-transparent" />
          <div className="flex animate-marquee gap-3 whitespace-nowrap">
            {[...marqueeTech, ...marqueeTech].map((t, i) => (
              <span
                key={i}
                className="glass rounded-full px-4 py-2 text-xs text-[#9CA3AF]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}