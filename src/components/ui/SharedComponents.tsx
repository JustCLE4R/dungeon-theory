import { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-xs uppercase tracking-[0.4em] text-gold">
      {children}
    </p>
  );
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex max-w-5xl items-center justify-center gap-4 ${className}`}>
      <div className="divider-gold flex-1" />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="text-gold"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" opacity="0.9" />
      </svg>
      <div className="divider-gold flex-1" />
    </div>
  );
}