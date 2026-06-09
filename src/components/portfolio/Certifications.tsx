import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certs = [
  { title: "JavaScript Specialist", issuer: "Certiprof", year: "2024" },
  { title: "Backend JavaScript Specialist", issuer: "Certiprof", year: "2024" },
  { title: "Bangkit Cloud Computing", issuer: "Google · Bangkit Academy", year: "2023" },
  { title: "IT Support Specialization", issuer: "Google · Coursera", year: "2023" },
  { title: "Junior Web Developer", issuer: "BNSP", year: "2023" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials & recognition"
          description="Continuous learning across cloud, backend, and modern web."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:border-white/20"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
              />
              <div className="relative flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)]">
                  <Award size={18} />
                </div>
                <BadgeCheck size={18} className="text-[#3B82F6]" />
              </div>
              <h3 className="relative mt-5 text-base font-semibold text-white">
                {c.title}
              </h3>
              <p className="relative mt-1 text-xs text-[#9CA3AF]">
                {c.issuer} · {c.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}