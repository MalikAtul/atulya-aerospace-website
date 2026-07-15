/**
 * The official Atulya mark — three round-capped strokes converging on a
 * forward point, like a velocity vector: Defense red over Deliver blue
 * over MedFly green. Geometry traced from the brand icon
 * (Logos/Atulya Aerospace Icon Mark). On dark surfaces the brand's
 * reversed variant applies: the mark renders single-colour white.
 */
export function LogoMark({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const red = dark ? "#FFFFFF" : "#C8102E";
  const blue = dark ? "#FFFFFF" : "#1E6FD9";
  const green = dark ? "#FFFFFF" : "#00843D";
  return (
    <svg viewBox="0 0 660 660" fill="none" aria-hidden className={className}>
      <path d="M26 26 L618 310" stroke={red} strokeWidth="46" strokeLinecap="round" />
      <path d="M26 328 L606 328" stroke={blue} strokeWidth="46" strokeLinecap="round" />
      <path d="M26 634 L636 324" stroke={green} strokeWidth="46" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Primary lockup (brand: website header): mark + "ATULYA" in sovereign
 * Archivo ExtraBold Italic with "AEROSPACE" in gray spaced caps beneath.
 * On dark surfaces the reversed lockup applies — white mark, white text.
 */
export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const ink = dark ? "text-white" : "text-sovereign";
  const sub = dark ? "text-white" : "text-[#6B7280]";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark dark={dark} className="h-7 w-auto shrink-0" />
      <span className="flex flex-col">
        <span className={`display text-[1.1rem] leading-none transition-colors duration-300 ${ink}`}>
          ATULYA
        </span>
        <span
          className={`mt-[3px] text-[0.53rem] font-semibold uppercase leading-none tracking-[0.33em] transition-colors duration-300 ${sub}`}
        >
          AEROSPACE
        </span>
      </span>
    </span>
  );
}
