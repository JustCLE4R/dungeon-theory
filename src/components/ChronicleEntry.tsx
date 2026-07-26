import { ChevronDown, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { ChronicleEvent } from "@/data/chronicles";
import { Lightbox } from "./Lightbox";
import { useState } from "react";

interface ChronicleEntryProps {
  event: ChronicleEvent;
  isOpen: boolean;
  onToggle: () => void;
  isLast?: boolean;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).replace(/ /g, " ").toUpperCase();
}

const categoryLabels: Record<string, string> = {
  foundation: "FOUNDATION",
  community: "COMMUNITY",
  milestone: "MILESTONE",
  guild: "GUILD",
  website: "ARCHIVE",
  achievement: "ACHIEVEMENT",
};

// Parse content into paragraphs, preserving line breaks
function parseContent(content: string): string[][] {
  return content.split("\n\n").map((paragraph) =>
    paragraph.split("\n").filter((line) => line.trim().length > 0)
  );
}

// Get all images for this chronicle entry
function getImages(event: ChronicleEvent): string[] {
  return event.images || [];
}

export function ChronicleEntry({ event, isOpen, onToggle, isLast }: ChronicleEntryProps) {
  const eventImages = getImages(event);
  const hasImages = eventImages.length > 0;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <li className="relative group min-w-0" style={{ "--gold": "oklch(0.72 0.13 80)" } as CSSProperties}>
      {!isLast && (
        <div
              className="absolute left-[12px] top-0 bottom-0 w-px sm:left-[14px] xl:left-[1.25rem]"
          style={{ background: "linear-gradient(180deg, var(--gold) / 20%, transparent)" }}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          "relative rounded-xl border border-gold/20 bg-obsidian/60 transition-all duration-500 ease-in-out",
          "hover:border-gold/40 hover:bg-obsidian/80",
          isOpen && "ring-1 ring-gold/20"
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          className="w-full p-3 sm:p-4 lg:p-5 xl:p-6 text-left min-w-0"
          aria-expanded={isOpen}
          aria-controls={`chronicle-content-${event.id}`}
          id={`chronicle-trigger-${event.id}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <time className="font-body text-xs uppercase tracking-[0.2em] text-gold/70 whitespace-nowrap sm:text-sm" dateTime={event.date}>
                  {formatDate(event.date)}
                </time>
                              <span className="px-1.5 py-0.5 rounded text-[0.55rem] font-display uppercase tracking-[0.15em] text-gold/60 border border-gold/20 bg-obsidian/50 sm:px-2 sm:text-[0.65rem]">
                  {categoryLabels[event.category] || event.category.toUpperCase()}
                </span>
              </div>
              <h3 className="font-display text-base font-bold uppercase tracking-wider text-parchment transition-colors group-hover:gradient-gold-text sm:text-lg">
                {event.title}
              </h3>
                          <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground line-clamp-2 sm:text-sm">
                {event.summary}
              </p>
            </div>

            <div
              className={cn(
                          "flex-shrink-0 grid h-6 w-6 place-items-center rounded-lg border border-gold/30 bg-obsidian/80 transition-transform duration-300 sm:h-8 sm:w-8",
                isOpen && "rotate-180"
              )}
              aria-hidden="true"
            >
                          <ChevronDown className="h-3 w-3 text-gold sm:h-4 sm:w-4" />
            </div>
          </div>
        </button>

        <div
          id={`chronicle-content-${event.id}`}
          role="region"
          aria-labelledby={`chronicle-trigger-${event.id}`}
          className={cn(
            "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen ? "opacity-100 max-h-[100vh] pb-4 sm:pb-6" : "opacity-0 max-h-0 pb-0"
          )}
        >
          <div className="relative pt-4">
            {/* Subtle divider */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

            <div className="relative z-10 space-y-5 animate-fade-up">
              {/* Full content */}
                      <div className="prose prose-invert prose-sm max-w-none font-body text-sm leading-relaxed text-muted-foreground px-3 sm:px-4 lg:px-5 xl:px-6">
                {parseContent(event.content).map((paragraphLines, pIndex) => (
                  <p key={pIndex} className="my-3">
                    {paragraphLines.map((line, lineIndex) => (
                      <span key={lineIndex} className="block">
                        {line}
                        {lineIndex < paragraphLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>

              {/* Image Gallery - Restricted and balanced layout */}
              {hasImages && (
                <div className="mt-4 space-y-3 animate-fade-up" style={{ animationDelay: "100ms" }}>
                  {eventImages.length === 1 ? (
                    // Single image - constrained preview
                    <div className="relative rounded-lg overflow-hidden border border-gold/20 bg-obsidian/50 max-w-xl mx-auto">
                      <img
                        src={eventImages[0]}
                        alt={`Illustration for ${event.title}`}
                        className="w-full h-auto object-contain max-h-64 sm:max-h-72 cursor-zoom-in"
                        loading="lazy"
                        onClick={() => openLightbox(0)}
                      />
                    </div>
                  ) : eventImages.length === 2 ? (
                    // Two images - side by side on desktop, stacked on mobile
                    <div className="grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto">
                      {eventImages.map((img, idx) => (
                        <div key={idx} className="relative rounded-lg overflow-hidden border border-gold/20 bg-obsidian/50">
                          <img
                          src={img}
                          alt={`Illustration ${idx + 1} for ${event.title}`}
                          className="w-full h-auto object-contain max-h-48 sm:max-h-56 cursor-zoom-in"
                          loading="lazy"
                          onClick={() => openLightbox(idx)}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Three or more images - responsive grid with constrained height
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
                      {eventImages.map((img, idx) => (
                        <div key={idx} className="relative rounded-lg overflow-hidden border border-gold/20 bg-obsidian/50 aspect-[4/3]">
                          <img
                          src={img}
                          alt={`Illustration ${idx + 1} for ${event.title}`}
                          className="w-full h-full object-contain max-h-40 sm:max-h-48 cursor-zoom-in"
                          loading="lazy"
                          onClick={() => openLightbox(idx)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Lightbox */}
              <Lightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                images={eventImages}
                initialIndex={lightboxIndex}
                title={event.title}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}