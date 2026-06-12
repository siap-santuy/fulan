import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Hash } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Cert = {
  badge: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId: string;
  accent: string;
  url: string;
};

const certs: Cert[] = [
  {
    badge: "JS",
    title: "IT Specialist in JavaScript",
    issuer: "Certiport",
    issued: "Apr 2025",
    expires: "Apr 2028",
    credentialId: "wynLK-48eK",
    accent: "#F59E0B",
    url: "https://drive.google.com/file/d/1iXIapLYXhcjSVx9EarqE3gWjuq94ikpV/view"
  },
  {
    badge: "BE",
    title: "Backend JavaScript Specialist",
    issuer: "Binar Academy",
    issued: "Jan 2025",
    credentialId: "10059589",
    accent: "#3B82F6",
    url: "https://drive.google.com/file/d/1OLRS8ZogarIq5aA-rlAauduSEsVzAFtN/view"
  },
  {
    badge: "GCP",
    title: "Cloud Computing Specialization",
    issuer: "Bangkit Academy (Google)",
    issued: "Jan 2024",
    credentialId: "BA23/GRAD/XXIV-01/C614BSY3787",
    accent: "#EF4444",
    url: "https://drive.google.com/file/d/1-f1lf-EqrCGw1Zkz28Dg1v1N0-BwDUCD/view"
  },
  {
    badge: "IT",
    title: "IT Support Specialization",
    issuer: "Coursera",
    issued: "Jan 2024",
    credentialId: "7Y3WU44QG78D",
    accent: "#10B981",
    url: "https://www.coursera.org/account/accomplishments/specialization/7Y3WU44QG78D"
  },
  {
    badge: "WEB",
    title: "Junior Web Developer",
    issuer: "BNSP (National Certification)",
    issued: "Apr 2023",
    expires: "Apr 2026",
    credentialId: "620192513224422023",
    accent: "#8B5CF6",
    url: "https://drive.google.com/file/d/1FVb9bzxabRtP_-_lAQ-l-nEXTe3fyyov/view?trk=public_profile_see-credential"
  },
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:border-white/20"
              style={{ borderTop: `1px solid ${c.accent}66` }}
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-60"
                style={{ background: `radial-gradient(circle, ${c.accent}, transparent 70%)` }}
              />
              <div
                className="relative grid h-12 w-12 place-items-center rounded-lg border text-[11px] font-bold tracking-wider"
                style={{
                  color: c.accent,
                  borderColor: `${c.accent}55`,
                  background: `${c.accent}1A`,
                }}
              >
                {c.badge}
              </div>
              <a href={c.url} target="_blank" className="flex mt-5">
                <h3 className="relative text-base font-semibold text-white">
                  {c.title} 
                </h3>
                <ArrowUpRight
                  size={14}
                  className="text-[#9CA3AF] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 mt-1 ml-1"
                  style={{ color: undefined }}
                />
              </a>
              <p className="relative mt-1 text-sm font-medium" style={{ color: c.accent }}>
                {c.issuer}
              </p>
              <div className="relative mt-4 space-y-1.5 border-t border-white/5 pt-3 text-[11px] text-[#9CA3AF]">
                <p className="inline-flex items-center gap-1.5">
                  <CalendarDays size={11} /> Issued {c.issued}
                  {c.expires && <> · Exp {c.expires}</>}
                </p>
                <p className="inline-flex items-center gap-1.5 font-mono">
                  <Hash size={11} /> {c.credentialId}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}