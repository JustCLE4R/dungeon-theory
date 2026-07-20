import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import ParticleCanvas from "../components/ParticleCanvas";
import mainLogo from "../assets/main-logo.png";
import altLogo from "../assets/alt-logo.png";

const DISCORD_URL = "https://discord.gg/wWxPTRv6eW";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <WhatIs />
      <Philosophy />
      <CommunityVsGuild />
      <Theorybound />
      <Expect />
      <Journey />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#community", label: "Community" },
    { href: "#guild", label: "Guild" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/20 bg-obsidian/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={altLogo}
            alt="Dungeon Theory"
            className="h-10 w-10 shrink-0 rounded-full ring-1 ring-gold/40"
            width={40}
            height={40}
          />
          <span className="hidden font-display text-sm font-bold uppercase tracking-[0.25em] text-parchment sm:inline">
            Dungeon <span className="text-gold">Theory</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-widest sm:inline-flex"
          >
            Join Discord
          </a>
          <button
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-gold/30 text-gold md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-obsidian/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-body text-sm uppercase tracking-widest text-parchment hover:bg-arcane/10 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 rounded-md px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest"
            >
              Join Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-32">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
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

      {/* particles */}
      <ParticleCanvas className="-z-10" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <div className="rune-ring animate-fade-up">
          <img
            src={mainLogo}
            alt="Dungeon Theory logo"
            width={420}
            height={420}
            className="animate-float-slow relative z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80"
            style={{ filter: "drop-shadow(0 0 40px oklch(0.55 0.22 300 / 0.55))" }}
          />
        </div>

        <p className="mt-10 font-body text-[0.7rem] uppercase tracking-[0.5em] text-gold sm:text-xs">
          — An Albion Online Community & Guild —
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-wider text-parchment sm:text-6xl md:text-7xl">
          Understand the Run.<br />
          <span className="gradient-gold-text">Master the Dungeon.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          A guild hall for adventurers who study every corridor, learn from every fall,
          and rise together through the ancient art of dungeon theory.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full rounded-md px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.2em] sm:w-auto"
          >
            Join the Community
          </a>
          <a
            href="#philosophy"
            className="btn-arcane w-full rounded-md px-8 py-3.5 font-display text-sm uppercase tracking-[0.2em] sm:w-auto"
          >
            Explore the Theory
          </a>
        </div>
      </div>

      <OrnamentalDivider className="mt-20" />
    </section>
  );
}

/* ---------------- Section header ---------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-xs uppercase tracking-[0.4em] text-gold">— {children} —</p>
  );
}

function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex max-w-3xl items-center gap-4 px-6 ${className}`}>
      <div className="divider-gold flex-1" />
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-gold" fill="currentColor">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" opacity="0.9" />
      </svg>
      <div className="divider-gold flex-1" />
    </div>
  );
}

/* ---------------- WHAT IS ---------------- */
function WhatIs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionEyebrow>Chapter I</SectionEyebrow>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wider text-parchment sm:text-5xl">
          More Than a <span className="gradient-gold-text">Dungeon</span>
        </h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
        <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          Dungeon Theory is an Albion Online community and guild built around a simple idea:
          <span className="mt-4 block font-display text-2xl italic text-parchment">
            "Every run has something to teach."
          </span>
        </p>
        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
          We gather new players hungry to learn, veterans willing to teach, and anyone who
          finds joy in mastering group content together. Beginners are not just welcome —
          they are the reason we are here.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { k: "New Players", v: "Welcome" },
            { k: "Veterans", v: "Teaching" },
            { k: "Every Run", v: "A Lesson" },
          ].map((s) => (
            <div key={s.k} className="card-arcane rounded-lg px-4 py-6">
              <p className="font-display text-lg font-bold text-gold sm:text-xl">{s.v}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">{s.k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PHILOSOPHY ---------------- */
function Philosophy() {
  const pillars = [
    { icon: "📚", title: "Learn", text: "Understand the mechanics. Study the dungeon before you enter it." },
    { icon: "⚔️", title: "Practice", text: "Put knowledge into action. The theory only matters in the field." },
    { icon: "🤝", title: "Coordinate", text: "Improve through teamwork. A party is greater than its parts." },
    { icon: "🏆", title: "Progress", text: "Grow together, one run at a time. Every fall becomes footing." },
  ];
  return (
    <section id="philosophy" className="relative border-y border-gold/10 bg-obsidian/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The Doctrine</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wider text-parchment sm:text-5xl">
            The <span className="gradient-gold-text">Theory</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
          <div className="mt-10 space-y-3 font-display text-xl italic leading-relaxed text-parchment sm:text-2xl">
            <p>"A failed run is <span className="text-arcane">data</span>."</p>
            <p>"A successful run is <span className="text-gold">proof</span>."</p>
            <p>"Every experience contributes to the theory."</p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="card-arcane card-arcane-hover group relative overflow-hidden rounded-xl p-6"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-arcane/10 blur-2xl transition-opacity group-hover:opacity-70" />
              <div className="mb-4 flex items-center justify-between">
                <span className="text-3xl" aria-hidden>{p.icon}</span>
                <span className="font-display text-xs tracking-widest text-gold/60">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-parchment">
                {p.title}
              </h3>
              <div className="my-3 h-px w-10 bg-gold/40" />
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMMUNITY VS GUILD ---------------- */
function CommunityVsGuild() {
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Two Paths</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wider text-parchment sm:text-5xl">
            Community <span className="text-gold">&</span> Guild
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
          <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
            Everyone is welcome to study the theory. The Theorybound take it into the field.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Community */}
          <div className="card-arcane card-arcane-hover relative overflow-hidden rounded-xl p-8 sm:p-10">
            <div className="absolute right-6 top-6 font-display text-xs uppercase tracking-[0.3em] text-arcane">
              Open Hall
            </div>
            <span className="text-4xl" aria-hidden>🕯️</span>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-wider text-parchment">
              Community
            </h3>
            <p className="mt-2 font-display italic text-arcane-bright">
              "Everyone is welcome at the table."
            </p>
            <div className="my-6 h-px w-full bg-gold/20" />
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              {["Find players and form parties",
                "Learn dungeon mechanics",
                "Ask questions freely",
                "Share knowledge & strategies",
                "Join casual group activities",
                "Meet fellow Albion adventurers",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rotate-45 bg-arcane-bright" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guild */}
          <div id="guild" className="card-arcane card-arcane-hover relative overflow-hidden rounded-xl p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-arcane/10" />
            <div className="absolute right-6 top-6 font-display text-xs uppercase tracking-[0.3em] text-gold">
              Sworn Order
            </div>
            <span className="text-4xl" aria-hidden>🛡️</span>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-wider gradient-gold-text">
              The Guild
            </h3>
            <p className="mt-2 font-display italic text-parchment">
              "Some study the theory. Others become bound to it."
            </p>
            <div className="my-6 h-px w-full bg-gold/30" />
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              {["Play consistently with a dedicated party",
                "Improve together as a team",
                "Guild-exclusive activities & content",
                "Long-term progression path",
                "A shared identity: Theorybound",
                "Deeper commitment, deeper reward",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- THEORYBOUND ---------------- */
function Theorybound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-obsidian/60 to-transparent" />
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 300 / 0.4), transparent 60%)" }}
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionEyebrow>The Bound</SectionEyebrow>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-obsidian/80 px-5 py-2 backdrop-blur">
          <span aria-hidden>📚</span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Theorybound
          </span>
        </div>
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight tracking-wider text-parchment sm:text-5xl">
          Knowledge is only <br className="hidden sm:block" />
          <span className="gradient-gold-text">the beginning.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-parchment sm:text-2xl">
          "To be Theorybound is to take what you learn and bring it into the dungeon."
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-5">
          {["Commitment", "Learning", "Practice", "Teamwork", "Growth"].map((w) => (
            <div key={w} className="rounded-md border border-gold/20 bg-obsidian/60 px-4 py-3 font-display text-xs uppercase tracking-[0.25em] text-parchment">
              {w}
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-2 font-display text-lg tracking-widest text-muted-foreground sm:text-xl">
          <p>Study the theory.</p>
          <p>Enter the dungeon.</p>
          <p className="gradient-gold-text text-xl font-bold sm:text-2xl">Become Theorybound.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPECT ---------------- */
function Expect() {
  const items = [
    { icon: "📖", title: "Learn", text: "Guides, mechanics, and knowledge shared by the community." },
    { icon: "⚔️", title: "Group Content", text: "Find players and run dungeons together, at any time." },
    { icon: "🧠", title: "Analyze", text: "Learn from mistakes and refine every future run." },
    { icon: "🤝", title: "Find Your Party", text: "Connect with players who love the content you love." },
    { icon: "🏰", title: "Guild Progression", text: "Grow together as part of the Dungeon Theory guild." },
    { icon: "🎉", title: "Community Events", text: "Milestones, gatherings, and activities throughout the year." },
  ];
  return (
    <section className="relative border-y border-gold/10 bg-obsidian/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Enter the Hall</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wider text-parchment sm:text-5xl">
            What <span className="gradient-gold-text">Awaits You</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="card-arcane card-arcane-hover group relative overflow-hidden rounded-xl p-6"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg border border-gold/30 bg-obsidian/80 text-2xl">
                {it.icon}
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-parchment">
                {it.title}
              </h3>
              <div className="my-2 h-px w-10 bg-gold/30" />
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY ---------------- */
function Journey() {
  const chapters = [
    { title: "Foundation", text: "The community begins. First adventurers gather at the table." },
    { title: "The First Hundred", text: "The archive grows. Guides are written. Parties form." },
    { title: "Theorybound", text: "The community becomes a guild. The Sworn Order takes shape." },
    { title: "The Next Chapter", text: "Still being written — by every adventurer who joins us." },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The Chronicle</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wider text-parchment sm:text-5xl">
            The Journey Has <span className="gradient-gold-text">Just Begun</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
        </div>

        <ol className="relative mt-16 space-y-8 border-l border-gold/20 pl-8 sm:pl-12">
          {chapters.map((c, i) => (
            <li key={c.title} className="relative">
              <span className="absolute -left-[41px] top-1 grid h-8 w-8 place-items-center rounded-full border border-gold/60 bg-obsidian font-display text-xs font-bold text-gold sm:-left-[57px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="card-arcane rounded-lg p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-parchment">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.32 0.16 300 / 0.55), transparent 60%), linear-gradient(180deg, oklch(0.10 0.015 275), oklch(0.14 0.02 275))",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.72 0.13 80) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <img
          src={altLogo}
          alt=""
          width={96}
          height={96}
          className="mx-auto h-20 w-20 rounded-full ring-1 ring-gold/40 animate-glow-pulse"
          style={{ filter: "drop-shadow(0 0 30px oklch(0.55 0.22 300 / 0.6))" }}
        />
        <OrnamentalDivider className="mt-8" />

        <h2 className="mt-8 font-display text-5xl font-bold uppercase leading-tight tracking-wider text-parchment sm:text-6xl md:text-7xl">
          The Dungeon <span className="gradient-gold-text">Awaits.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          Whether you are here to learn, to teach, to improve, or simply to find your
          next party — there is a place for you in Dungeon Theory.
        </p>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-10 inline-flex items-center gap-3 rounded-md px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.3em]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.075.075 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 5.93 4.369a.07.07 0 0 0-.032.027C2.533 9.045 1.6 13.579 2.058 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.105c.36.699.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.334.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.334.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
          </svg>
          Join the Discord
        </a>

        <div className="mt-12 space-y-1 font-display text-sm uppercase tracking-[0.4em] text-muted-foreground">
          <p>Learn together.</p>
          <p>Grow together.</p>
          <p className="text-gold">Conquer together.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-obsidian/90 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={altLogo} alt="Dungeon Theory" width={44} height={44} className="h-11 w-11 rounded-full ring-1 ring-gold/40" />
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
              {[
                { href: "#home", label: "Home" },
                { href: "#philosophy", label: "Philosophy" },
                { href: "#community", label: "Community" },
                { href: "#guild", label: "Guild" },
              ].map((l) => (
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
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 inline-flex rounded-md px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.25em]"
            >
              Join the Community
            </a>
          </div>
        </div>

        <OrnamentalDivider className="mt-12" />

        <p className="mt-6 text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dungeon Theory · A community for Albion Online adventurers.
        </p>
      </div>
    </footer>
  );
}
