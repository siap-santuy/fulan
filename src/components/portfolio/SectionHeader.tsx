import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
        <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-[15px] text-[#9CA3AF]">{description}</p>
      )}
    </motion.div>
  );
}