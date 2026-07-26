import { createFileRoute } from "@tanstack/react-router";
import { ChronicleTimeline } from "@/components/ChronicleTimeline";
import ParticleCanvas from "@/components/ParticleCanvas";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionEyebrow, OrnamentalDivider } from "@/components/ui/SharedComponents";

export const Route = createFileRoute("/chronicles")({
  head: () => ({
    meta: [
      { title: "The Chronicles | Dungeon Theory" },
      { name: "description", content: "The story of Dungeon Theory — an Albion Online community and guild built around learning, teamwork, and progression." },
      { property: "og:title", content: "The Chronicles | Dungeon Theory" },
      { property: "og:description", content: "The story of Dungeon Theory — an Albion Online community and guild built around learning, teamwork, and progression." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "The Chronicles | Dungeon Theory" },
      { name: "twitter:description", content: "The story of Dungeon Theory — an Albion Online community and guild built around learning, teamwork, and progression." },
    ],
    links: [
      { rel: "canonical", href: "/chronicles" },
    ],
  }),
  component: ChroniclesPage,
});

function ChroniclesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 -z-10 gradient-hero" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.05]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.72 0.13 80) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.13 80) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          }}
        />
        <ParticleCanvas className="-z-10" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <SectionEyebrow>The Archive</SectionEyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-wider text-parchment sm:text-5xl md:text-6xl">
              THE CHRONICLES
            </h1>
            <OrnamentalDivider />
            <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The story of Dungeon Theory, from its first theory to the journey still being written.
            </p>
          </div>

          <div className="mt-16 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <ChronicleTimeline />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}