/**
 * The Atulya mark — a forward-pointing chevron of three parallel
 * diagonal stripes, stacked at an angle like a velocity vector:
 * red (Defense) over blue (Deliver) over green (MedFly).
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 46 30" fill="none" aria-hidden className={className}>
      <path d="M10 0 L34 0 L28 7.5 L4 7.5 Z" fill="#C8102E" />
      <path d="M18 10.5 L42 10.5 L36 18 L12 18 Z" fill="#1E6FD9" />
      <path d="M10 21 L34 21 L28 28.5 L4 28.5 Z" fill="#00843D" />
    </svg>
  );
}

/**
 * Full lockup: mark + "ATULYA" (Archivo ExtraBold Italic) with
 * "AEROSPACE" in spaced caps beneath. Sovereign blue on light
 * surfaces; the wordmark goes white on dark surfaces.
 */
export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const ink = dark ? "text-white" : "text-sovereign";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-6 w-auto shrink-0" />
      <span className="flex flex-col">
        <span className={`display text-[1.1rem] leading-none transition-colors duration-300 ${ink}`}>
          ATULYA
        </span>
        <span
          className={`mt-[3px] text-[0.53rem] font-semibold uppercase leading-none tracking-[0.33em] transition-colors duration-300 ${ink}`}
        >
          AEROSPACE
        </span>
      </span>
    </span>
  );
}
