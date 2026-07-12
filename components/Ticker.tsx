import { TICKER_ITEMS } from "@/lib/content";

/** Full-width marquee of mission numbers. */
export function Ticker({ className = "" }: { className?: string }) {
  const row = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {TICKER_ITEMS.map((item) => (
        <span key={`${hidden}-${item}`} className="flex items-center">
          <span className="label whitespace-nowrap px-7 text-dim">{item}</span>
          <span aria-hidden className="h-1 w-1 rotate-45 bg-saffron/70" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden border-y border-line bg-surface/60 py-4 ${className}`}>
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
