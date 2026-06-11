import koneksaImg from "@/assets/project-koneksa.jpg";
import taringImg from "@/assets/project-taring.jpg";
import kataustadzImg from "@/assets/project-kataustadz.jpg";
import ericeImg from "@/assets/project-erice.jpg";
import travelynkImg from "@/assets/project-travelynk.jpg";
import coffeegitImg from "@/assets/project-coffeegit.jpg";

export type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  accent: string;
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Koneksa",
    category: "Fullstack",
    description:
      "Centralized event and campaign management platform integrated with WhatsApp, Email Marketing, and Payment Systems.",
    tech: ["Next.js", "TypeScript", "Bun", "Redis", "BullMQ", "Docker", "PostgreSQL", "Prisma"],
    image: koneksaImg,
    accent: "#3B82F6",
  },
  {
    name: "TARING-EIS",
    category: "Fullstack",
    description: "Gamified HRIS platform with AI-powered employee analytics.",
    tech: ["Svelte", "Hono", "Prisma", "PostgreSQL", "Groq AI", "Docker"],
    image: taringImg,
    accent: "#10B981",
  },
  {
    name: "Kata Ustadz",
    category: "Backend",
    description: "Video learning platform providing Islamic guidance for modern life.",
    tech: ["Fastify", "Prisma", "PostgreSQL", "Midtrans", "Google OAuth"],
    image: kataustadzImg,
    accent: "#8B5CF6",
  },
  {
    name: "Erice",
    category: "Fullstack",
    description: "Modern e-commerce platform for rice distribution and online sales.",
    tech: ["React", "Fastify", "Prisma", "PostgreSQL", "Midtrans"],
    image: ericeImg,
    accent: "#F59E0B",
  },
  {
    name: "Travelynk",
    category: "Fullstack",
    description: "Airline ticket booking platform with payment gateway integration.",
    tech: ["Node.js", "Express", "PostgreSQL", "Midtrans"],
    image: travelynkImg,
    accent: "#EC4899",
  },
  {
    name: "Coffee Git",
    category: "ML / Fullstack",
    description: "Machine learning integrated coffee quality detection platform.",
    tech: ["Flask", "TensorFlow", "React", "GCP"],
    image: coffeegitImg,
    accent: "#EF4444",
  },
];

export function ProjectCardAccent({ color }: { color: string }) {
  return null;
}