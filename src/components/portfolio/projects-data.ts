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
  images?: string[];
  details?: string;
  highlights?: string[];
  role?: string;
  year?: string;
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
    images: [koneksaImg],
    role: "Fullstack Engineer",
    year: "2025",
    details:
      "Koneksa unifies event lifecycle management — from registration and ticketing to attendee communications and payment reconciliation. Built around an event-driven queue (BullMQ + Redis) so blast campaigns scale to tens of thousands of recipients without blocking the API. WhatsApp and email channels share a templating layer; Midtrans handles payments with idempotent webhook reconciliation.",
    highlights: [
      "Designed multi-tenant data model with Prisma + PostgreSQL",
      "Background workers for WhatsApp/Email blasts via BullMQ",
      "Idempotent payment webhook + retry-safe reconciliation",
      "Dockerized deployment with Bun runtime",
    ],
    accent: "#3B82F6",
  },
  {
    name: "TARING-EIS",
    category: "Fullstack",
    description: "Gamified HRIS platform with AI-powered employee analytics.",
    tech: ["Svelte", "Hono", "Prisma", "PostgreSQL", "Groq AI", "Docker"],
    image: taringImg,
    role: "Fullstack Engineer",
    year: "2024",
    details:
      "TARING is an Employee Information System with gamification mechanics — XP, badges, and leaderboards — layered on top of a traditional HRIS. A Groq-powered analytics service summarises performance trends and surfaces coaching suggestions for managers.",
    highlights: [
      "Gamification engine: XP, levels, achievements",
      "Groq AI for performance summaries",
      "Hono on the edge with Prisma adapters",
    ],
    accent: "#10B981",
  },
  {
    name: "Kata Ustadz",
    category: "Backend",
    description: "Video learning platform providing Islamic guidance for modern life.",
    tech: ["Fastify", "Prisma", "PostgreSQL", "Midtrans", "Google OAuth"],
    image: kataustadzImg,
    role: "Backend Engineer",
    year: "2024",
    details:
      "REST API powering a paid video learning platform. Handles user accounts (Google OAuth), course catalog, subscriptions, and Midtrans-backed checkout. Built on Fastify for low-latency endpoints and Prisma for typed access.",
    highlights: [
      "Google OAuth + JWT session strategy",
      "Course/lesson access control by subscription tier",
      "Midtrans Snap integration with webhook verification",
    ],
    accent: "#8B5CF6",
  },
  {
    name: "Erice",
    category: "Fullstack",
    description: "Modern e-commerce platform for rice distribution and online sales.",
    tech: ["React", "Fastify", "Prisma", "PostgreSQL", "Midtrans"],
    image: ericeImg,
    role: "Fullstack Engineer",
    year: "2024",
    details:
      "End-to-end e-commerce stack for a rice distributor — product catalog, cart, checkout, order tracking, and an admin dashboard for inventory and fulfilment. Midtrans handles payments and webhook-driven order state transitions.",
    highlights: [
      "Cart + checkout with stock reservation",
      "Admin dashboard for orders and inventory",
      "Midtrans payment + webhook state machine",
    ],
    accent: "#F59E0B",
  },
  {
    name: "Travelynk",
    category: "Fullstack",
    description: "Airline ticket booking platform with payment gateway integration.",
    tech: ["Node.js", "Express", "PostgreSQL", "Midtrans"],
    image: travelynkImg,
    role: "Backend Engineer",
    year: "2023",
    details:
      "Capstone airline booking platform: flight search, seat selection, booking, e-ticketing, and payment via Midtrans. Built with Express + PostgreSQL on a Node.js runtime.",
    highlights: [
      "Flight search and seat selection flow",
      "PDF e-ticket generation on booking confirmation",
      "Midtrans integration with status callbacks",
    ],
    accent: "#EC4899",
  },
  {
    name: "Coffee Git",
    category: "ML / Fullstack",
    description: "Machine learning integrated coffee quality detection platform.",
    tech: ["Flask", "TensorFlow", "React", "GCP"],
    image: coffeegitImg,
    role: "ML + Fullstack",
    year: "2023",
    details:
      "Coffee Git classifies green coffee bean quality from images using a TensorFlow CNN, served behind a Flask API and deployed on Google Cloud. A React client surfaces predictions and historical scans for users.",
    highlights: [
      "CNN trained on labeled coffee bean dataset",
      "Flask inference API deployed on GCP",
      "React client with upload + scan history",
    ],
    accent: "#EF4444",
  },
];

export function ProjectCardAccent({ color }: { color: string }) {
  return null;
}