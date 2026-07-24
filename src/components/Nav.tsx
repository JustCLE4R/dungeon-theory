import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import altLogo from "../assets/alt-logo.png";

const DISCORD_URL = "https://discord.gg/wWxPTRv6eW";

interface NavProps {
  isChroniclesPage?: boolean;
}

export function Nav({ isChroniclesPage = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Static navigation links - anchor links always point to root with hash
  // so they work correctly from any page
  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#philosophy", label: "Philosophy" },
    { href: "/#community", label: "Community" },
    { href: "/#guild", label: "Guild" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isChroniclesPage
          ? "border-b border-gold/20 bg-obsidian/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
        >
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
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/chronicles"
            className="font-body text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-gold"
          >
            Chronicles
          </Link>
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
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-body text-sm uppercase tracking-widest text-parchment hover:bg-arcane/10 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/chronicles"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-body text-sm uppercase tracking-widest text-parchment hover:bg-arcane/10 hover:text-gold"
            >
              Chronicles
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
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