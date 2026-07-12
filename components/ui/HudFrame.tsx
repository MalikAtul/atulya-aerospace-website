import type { ReactNode } from "react";

/**
 * Wraps content in four HUD-style corner brackets —
 * the recurring instrument-panel motif of the site.
 */
export function HudFrame({
  children,
  className = "",
  accent = "rgba(237,239,242,0.4)",
  size = 14,
}: {
  children: ReactNode;
  className?: string;
  accent?: string;
  size?: number;
}) {
  const corner = (pos: string, borders: string) => (
    <span
      aria-hidden
      className={`pointer-events-none absolute ${pos} ${borders}`}
      style={{ width: size, height: size, borderColor: accent }}
    />
  );
  return (
    <div className={`relative ${className}`}>
      {corner("left-0 top-0", "border-l border-t")}
      {corner("right-0 top-0", "border-r border-t")}
      {corner("bottom-0 left-0", "border-b border-l")}
      {corner("bottom-0 right-0", "border-b border-r")}
      {children}
    </div>
  );
}
