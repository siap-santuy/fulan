import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const EMAIL = "fajri42vandi@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project in mind, a role to discuss, or just want to say hi?"
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass relative overflow-hidden rounded-3xl p-8 lg:col-span-2"
          >
            <div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }}
            />
            <h3 className="text-xl font-semibold text-white">Get in touch</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              I usually reply within a day. The fastest way is email.
            </p>

            <div className="mt-6 space-y-3">
              <button
                onClick={copyEmail}
                className="group flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-white">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-[#9CA3AF]">Email</div>
                    <div className="text-sm font-medium text-white">{EMAIL}</div>
                  </div>
                </div>
                <span className="rounded-md border border-white/10 bg-white/5 p-1.5 text-[#9CA3AF] group-hover:text-white">
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </span>
              </button>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#0A66C2]/20 text-[#0A66C2]">
                  <Linkedin size={16} />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF]">LinkedIn</div>
                  <div className="text-sm font-medium text-white">/in/fajri-arvandi</div>
                </div>
              </a>

              <a
                href="https://github.com/fajrCode"
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white">
                  <Github size={16} />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF]">GitHub</div>
                  <div className="text-sm font-medium text-white">@fajrCode</div>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF]">Location</div>
                  <div className="text-sm font-medium text-white">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="gmail" required />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="Let's collaborate" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-[#6B7280] outline-none transition focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/20"
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-xs text-[#9CA3AF]">I respect your inbox. Replies within 24h.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition hover:scale-[1.03]"
              >
                {sent ? <Check size={16} /> : <Send size={16} />}
                {sent ? "Sent" : "Send message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-[#6B7280] outline-none transition focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/20"
      />
    </div>
  );
}