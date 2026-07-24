import { Sparkles } from "lucide-react";
import { useState } from "react";
import chroniclesDataRaw from "@/data/chronicles.json";
import { ChronicleEntry } from "./ChronicleEntry";

const chroniclesData = chroniclesDataRaw.data as typeof chroniclesDataRaw.data;

function groupEventsByYear(events: typeof chroniclesData): Record<string, typeof chroniclesData> {
  const grouped: Record<string, typeof chroniclesData> = {};
  events.forEach((event) => {
    const year = event.date.substring(0, 4);
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(event);
  });
  return grouped;
}

export function ChronicleTimeline() {
  const events = [...chroniclesData].sort((a, b) => a.date.localeCompare(b.date));
  const groupedByYear = groupEventsByYear(events);
  const years = Object.keys(groupedByYear).sort();

  // Track open state for each event by ID
  // Use array for SSR compatibility (Sets don't serialize well)
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleEvent = (eventId: string) => {
    setOpenIds((prev) => {
      if (prev.includes(eventId)) {
        return prev.filter((id) => id !== eventId);
      }
      // Close all others, open only this one
      return [eventId];
    });
  };

  return (
    <ol className="relative space-y-12" role="list" aria-label="Chronicles timeline">
      {years.map((year, yearIndex) => {
        const yearEvents = groupedByYear[year];
        return (
          <li key={year} className="relative">
            <div className="relative grid grid-cols-[2rem_1fr] items-start gap-x-5 sm:gap-x-6">
              <div className="relative z-10 flex flex-col items-center">
                <span className="relative z-10 grid h-10 w-10 place-items-center justify-self-center rounded-full border-2 bg-obsidian text-gold font-display text-xs font-bold">
                  {year}
                </span>
                {yearIndex < years.length - 1 && (
                  <div
                    className="absolute left-1/2 top-10 w-px h-full -translate-x-1/2"
                    style={{ background: "linear-gradient(180deg, oklch(0.72 0.13 80) / 20%, transparent)" }}
                    aria-hidden="true"
                  />
                )}
              </div>

              <ul className="space-y-6" role="list" aria-label={`${year} events`}>
                {yearEvents.map((event, eventIndex) => (
                  <ChronicleEntry
                    key={event.id}
                    event={event}
                                      isOpen={openIds.includes(event.id)}
                    onToggle={() => toggleEvent(event.id)}
                    isLast={eventIndex === yearEvents.length - 1 && yearIndex === years.length - 1}
                  />
                ))}
              </ul>
            </div>
          </li>
        );
      })}

      <li className="relative">
        <div className="relative grid grid-cols-[2rem_1fr] items-start gap-x-5 sm:gap-x-6">
          <div className="relative z-10 flex flex-col items-center pt-2">
            <span className="relative z-10 grid h-10 w-10 place-items-center justify-self-center rounded-full border-2 border-gold/50 bg-obsidian text-gold/50 font-display text-[0.65rem] font-bold">
              ∞
            </span>
          </div>

          <div className="relative">
            <div className="card-arcane card-arcane-hover relative overflow-hidden rounded-xl p-8 text-center animate-fade-up" style={{ borderColor: "oklch(0.72 0.13 80 / 0.3)" }}>
              <div className="relative z-10">
                <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-obsidian/80">
                  <Sparkles className="h-8 w-8 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider gradient-gold-text">
                  The Next Chapter
                </h3>
                <div className="mx-auto my-4 h-px w-16 bg-gold/40" />
                <p className="font-display italic text-lg leading-relaxed text-parchment">
                  Still being written.
                </p>
                <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground max-w-md mx-auto">
                  Every adventurer who joins adds a page. Every run teaches a new lesson.
                  The chronicle continues with those who believe that understanding
                  the dungeon is the path to mastering it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
}