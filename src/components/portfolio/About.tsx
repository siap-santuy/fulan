import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, GitBranch, Rocket, Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 101, suffix: "+", label: "Tasks completed", Icon: Code2 },
  { value: 11, suffix: "", label: "Agile sprints", Icon: GitBranch },
  { value: 12, suffix: "+", label: "Production releases", Icon: Rocket },
  { value: 3, suffix: "+", label: "Companies worked with", Icon: Building2 },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="About"
          title="Engineer behind the systems"
          description="Software Engineer with experience building production-grade applications, REST APIs, internal platforms, automation systems, and cloud-based solutions across startups and enterprise environments."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-8 lg:col-span-3"
          >
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
            />
            <h3 className="text-2xl font-semibold text-white">
              Building reliable software that ships.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#9CA3AF]">
              Focus on the messy middle of software: API design, data
              modeling, queues, integrations, and the kind of infrastructure that quietly
              keeps products alive. From small startups to enterprise platforms,
              I&apos;ve shipped products used by real teams in production.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "REST APIs",
                "Microservices",
                "Cloud Architecture",
                "Automation",
                "Scalable Backends",
                "Internal Platforms",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9CA3AF]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
            {stats.map(({ value, suffix, label, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group relative overflow-hidden rounded-2xl p-5"
              >
                <Icon size={18} className="text-[#3B82F6]" />
                <div className="mt-3 text-3xl font-bold text-white">
                  <Counter to={value} suffix={suffix} />
                </div>
                <div className="mt-1 text-xs text-[#9CA3AF]">{label}</div>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}