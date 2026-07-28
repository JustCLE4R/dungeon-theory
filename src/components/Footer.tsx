import { ReactNode } from "react";
import altLogo from "@/assets/alt-logo.png";
import { OrnamentalDivider } from "@/components/ui/SharedComponents";

const DISCORD_URL = "https://discord.gg/wWxPTRv6eW";

interface FooterProps {
  /** Additional navigation links to show in the Navigate column */
  navLinks?: Array<{ href: string; label: string }>;
  /** Custom content for the "The Table" column */
  tableContent?: ReactNode;
  /** Whether to show the ornamental divider */
  showDivider?: boolean;
  /** Custom copyright text */
  copyrightText?: string;
}

export function Footer({
  navLinks = [
    { href: "/", label: "Home" },
    { href: "/chronicles", label: "Chronicles" },
  ],
  tableContent,
  showDivider = true,
  copyrightText = `© ${new Date().getFullYear()} Dungeon Theory · A community for Albion Online adventurers.`,
}: FooterProps) {
  return (
    <footer className="border-t border-gold/20 bg-obsidian/90 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={altLogo}
                alt="Dungeon Theory"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full ring-1 ring-gold/40"
              />
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
              An Albion Online community and guild built around knowledge, teamwork, and
              progression.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">Navigate</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">The Table</p>
            {tableContent ? (
              <div className="mt-4">{tableContent}</div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>

        {showDivider && <OrnamentalDivider className="mt-12" />}

        <p className="mt-6 text-center font-body text-xs text-muted-foreground">{copyrightText}</p>
      </div>
    </footer>
  );
}
