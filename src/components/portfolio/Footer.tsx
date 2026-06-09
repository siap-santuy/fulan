import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
          <div className="grid h-7 w-7 place-items-center rounded-lg gradient-brand text-[10px] font-bold text-white">
            FA
          </div>
          <span>© {new Date().getFullYear()} Fajri Arvandi. Crafted in Jakarta.</span>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: "mailto:fajri@example.com", Icon: Mail, label: "Email" },
            { href: "https://github.com", Icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-[#9CA3AF] transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}