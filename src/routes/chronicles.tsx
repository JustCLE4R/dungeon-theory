import { createFileRoute } from "@tanstack/react-router";
import { ChronicleTimeline } from "@/components/ChronicleTimeline";
import ParticleCanvas from "@/components/ParticleCanvas";
import { Nav } from "@/components/Nav";
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
      <Nav isChroniclesPage />
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

      <ChroniclesFooter />
    </div>
  );
}

function ChroniclesFooter() {
  return (
    <footer className="border-t border-gold/20 bg-obsidian/90 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="h-11 w-11 rounded-full ring-1 ring-gold/40" aria-hidden="true">
                <rect width="44" height="44" rx="22" fill="currentColor" style={{ fill: "oklch(0.72 0.13 80)" }} />
                <path d="M22 11L11 22l5.5 5.5 11-11 11 11 5.5-5.5-11-11z" fill="oklch(0.14 0.02 275)" />
              </svg>
              <div>
                <p className="font-display text-base font-bold uppercase tracking-[0.25em] text-parchment">
                  Dungeon <span className="text-gold">Theory</span>
                </p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Understand the Run. Master the Dungeon.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
              An Albion Online community and guild built around knowledge, teamwork, and progression.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">Navigate</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-muted-foreground">
              {[ { href: "/", label: "Home" }, { href: "/chronicles", label: "Chronicles" } ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">The Table</p>
            <p className="mt-4 max-w-xs font-body text-sm text-muted-foreground">
              A seat is always open. Bring your questions, your parties, and your theory.
            </p>
            <a href="https://discord.gg/wWxPTRv6eW" target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 inline-flex rounded-md px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.25em]">Join the Community</a>
          </div>
        </div>

        <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 mt-12">
          <div className="divider-gold flex-1" />
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-gold" fill="currentColor" aria-hidden="true">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" opacity="0.9" />
          </svg>
          <div className="divider-gold flex-1" />
        </div>

        <p className="mt-6 text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dungeon Theory · A community for Albion Online adventurers.
        </p>
      </div>
    </footer>
  );
}