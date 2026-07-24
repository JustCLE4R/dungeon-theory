import { ChevronDown, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChronicleEvent } from "@/data/chronicles";

interface ChronicleEntryProps {
  event: ChronicleEvent;
  isOpen: boolean;
  onToggle: () => void;
  isLast?: boolean;
}

export function ChronicleEntry({ event, isOpen, onToggle, isLast }: ChronicleEntryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(/ /g, " ").toUpperCase();
  };

  const categoryLabels: Record<string, string> = {
    foundation: "FOUNDATION",
    community: "COMMUNITY",
    milestone: "MILESTONE",
    guild: "GUILD",
    website: "ARCHIVE",
    achievement: "ACHIEVEMENT",
  };

  return (
    <li className="relative group" style={{ "--gold": "oklch(0.72 0.13 80)" }}>
      {!isLast && (
        <div
          className="absolute left-[1rem] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, var(--gold) / 20%, transparent)" }}
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        onClick={onToggle}
        className="w-full relative rounded-xl border border-gold/20 bg-obsidian/60 p-5 sm:p-6 transition-all duration-300 hover:border-gold/40 hover:bg-obsidian/80 group"
        aria-expanded={isOpen}
        aria-controls={`chronicle-content-${event.id}`}
        id={`chronicle-trigger-${event.id}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <time className="font-body text-xs uppercase tracking-[0.2em] text-gold/70 whitespace-nowrap" dateTime={event.date}>
                {formatDate(event.date)}
              </time>
              <span className="px-2 py-0.5 rounded text-[0.65rem] font-display uppercase tracking-[0.15em] text-gold/60 border border-gold/20 bg-obsidian/50">
                {categoryLabels[event.category] || event.category.toUpperCase()}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-parchment transition-colors group-hover:gradient-gold-text">
              {event.title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {event.summary}
            </p>
          </div>

          <div
            className={cn(
              "flex-shrink-0 grid h-8 w-8 place-items-center rounded-lg border border-gold/30 bg-obsidian/80 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4 text-gold" />
          </div>
        </div>
      </button>

      <div
        id={`chronicle-content-${event.id}`}
        role="region"
        aria-labelledby={`chronicle-trigger-${event.id}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 max-h-96 mt-4" : "opacity-0 max-h-0 mt-0"
        )}
      >
        <div className="card-arcane relative rounded-xl border border-gold/20 bg-obsidian/60 p-6 sm:p-8 animate-fade-up">
          <div className="mb-4 flex items-center gap-3">
            <time className="font-body text-xs uppercase tracking-[0.2em] text-gold/70" dateTime={event.date}>
              {formatDate(event.date)}
            </time>
            <span className="px-2 py-0.5 rounded text-[0.65rem] font-display uppercase tracking-[0.15em] text-gold/60 border border-gold/20 bg-obsidian/50">
              {categoryLabels[event.category] || event.category.toUpperCase()}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold uppercase tracking-wider text-parchment mb-4">
            {event.title}
          </h3>
          <div className="my-3 h-px w-16 bg-gold/40" aria-hidden="true" />
          <div className="prose prose-invert prose-sm max-w-none font-body text-sm leading-relaxed text-muted-foreground">
            {event.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex} className="block">
                    {line}
                    {lineIndex < paragraph.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
          {event.image && (
            <div className="mt-6 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt=""
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}