/**
 * The Atulya mark — a delta-wing planform that reads as an "A".
 */
export function Mark({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
    >
      <path d="M16 2 L30 30 L16 23 L2 30 Z" fill="var(--color-saffron)" />
      <path d="M16 10 L23.5 26 L16 22.2 L8.5 26 Z" fill="var(--color-void)" />
    </svg>
  );
}
