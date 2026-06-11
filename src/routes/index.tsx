import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fajri Arvandi" },
      {
        name: "description",
        content:
          "Portfolio of Fajri Arvandi — Software Engineer from Jakarta, Indonesia. Building APIs, fullstack apps, and cloud-native platforms.",
      },
      { property: "og:title", content: "Fajri Arvandi" },
      {
        property: "og:description",
        content:
          "Portfolio of Fajri Arvandi — Software Engineer from Jakarta, Indonesia. Building APIs, fullstack apps, and cloud-native platforms.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}