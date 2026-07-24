import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Brain,
  Castle,
  Flame,
  Handshake,
  Shield,
  Sparkles,
  Swords,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import ParticleCanvas from "../components/ParticleCanvas";
import mainLogo from "../assets/main-logo.png";
import altLogo from "../assets/alt-logo.png";
import { Nav } from "../components/Nav";
import { SectionEyebrow, OrnamentalDivider } from "../components/ui/SharedComponents";

const DISCORD_URL = "https://discord.gg/wWxPTRv6eW";

// Teaser milestones for the landing page
const TEASER_MILESTONES = [
  { title: "The Foundation", text: "Where the theory begins.", date: "2026-05-15" },
  { title: "The Guild Is Born", text: "The theory enters the field.", date: "2026-07-01" },
  { title: "The Archive Opens", text: "Dungeon Theory establishes its presence beyond Discord.", date: "2026-07-23" },
];

function JourneyTeaser() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(/ /g, " ").toUpperCase();
  };

  return (
    <section id="chronicles" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The Chronicle</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wider text-parchment sm:text-5xl">
            The Journey <span className="gradient-gold-text">So Far</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/50" />
          <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
            Dungeon Theory began with a simple idea: every run has something to teach.
            Since then, the community has grown, the guild has formed, and the archive
            has opened its doors. The story is still being written.
          </p>
        </div>

        <ol className="relative mt-16 space-y-6 before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-gold/20 sm:before:left-4" role="list" aria-label="Journey milestones">
          {TEASER_MILESTONES.map((m, i) => (
            <li key={m.title} className="relative grid grid-cols-[2rem_1fr] items-center gap-x-5 sm:gap-x-6">
              <span className="relative z-10 grid h-8 w-8 place-items-center justify-self-center rounded-full border border-gold/40 bg-obsidian font-display text-xs font-bold text-gold/70 transition-all hover:border-gold hover:text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="card-arcane card-arcane-hover group relative overflow-hidden rounded-xl p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <time className="font-body text-xs uppercase tracking-widest text-gold/80" dateTime={m.date}>
                      {formatDate(m.date)}
                    </time>
                    <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-wider text-parchment group-hover:gradient-gold-text transition-colors">
                      {m.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {m.text}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link
            to="/chronicles"
            className="btn-arcane inline-flex items-center gap-3 rounded-md px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.2em]"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Read the Full Chronicle
          </Link>
        </div>
      </div>
    </section>
  );
}

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
      <JourneyTeaser />
      <FinalCTA />
      <Footer />
    </div>
  );
}

type LandingIcon = LucideIcon;

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

        <h1 className="mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-wider text-parchment sm:text-4xl md:text-5xl">
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

/* ---------------- WHAT IS ---------------- */
function WhatIs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionEyebrow>The Foundation</SectionEyebrow>
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
  const pillars: Array<{ icon: LandingIcon; title: string; text: string }> = [
    { icon: BookOpen, title: "Learn", text: "Understand the mechanics. Study the dungeon before you enter it." },
    { icon: Swords, title: "Practice", text: "Put knowledge into action. The theory only matters in the field." },
    { icon: Users, title: "Coordinate", text: "Improve through teamwork. A party is greater than its parts." },
    { icon: Trophy, title: "Progress", text: "Grow together, one run at a time. Every fall becomes footing." },
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
                <p.icon className="h-8 w-8 text-gold/90" aria-hidden />
                {/* <span className="font-display text-xs tracking-widest text-gold/60">0{i + 1}</span> */}
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
            <div className="grid h-12 w-12 place-items-center rounded-lg border border-arcane/30 bg-obsidian/80">
              <Flame className="h-7 w-7 text-arcane-bright" aria-hidden />
            </div>
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
            <div className="grid h-12 w-12 place-items-center rounded-lg border border-gold/30 bg-obsidian/80">
              <Shield className="h-7 w-7 text-gold" aria-hidden />
            </div>
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
          <BookOpen className="h-4 w-4 text-gold" aria-hidden />
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
  const items: Array<{ icon: LandingIcon; title: string; text: string }> = [
    { icon: BookOpen, title: "Learn", text: "Guides, mechanics, and knowledge shared by the community." },
    { icon: Swords, title: "Group Content", text: "Find players and run dungeons together, at any time." },
    { icon: Brain, title: "Analyze", text: "Learn from mistakes and refine every future run." },
    { icon: Handshake, title: "Find Your Party", text: "Connect with players who love the content you love." },
    { icon: Castle, title: "Guild Progression", text: "Grow together as part of the Dungeon Theory guild." },
    { icon: Sparkles, title: "Community Events", text: "Milestones, gatherings, and activities throughout the year." },
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
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg border border-gold/30 bg-obsidian/80">
                <it.icon className="h-7 w-7 text-gold/90" aria-hidden />
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
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
