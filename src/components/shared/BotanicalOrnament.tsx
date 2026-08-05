interface BotanicalOrnamentProps {
  className?: string;
  /** Mirrors the sprig horizontally — useful for pairing ornaments left/right of a title. */
  flip?: boolean;
}

/**
 * A single-line, hand-drawn-style botanical sprig used as this invitation's
 * signature visual element (echoing the pressed-leaf motif of the palette).
 * Pure SVG, no external assets, so it scales crisply at any size and can be
 * recolored via `currentColor`.
 */
export function BotanicalOrnament({ className = '', flip = false }: BotanicalOrnamentProps) {
  return (
    <svg
      viewBox="0 0 160 60"
      fill="none"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M4 30C40 10 90 10 156 30"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[20, 45, 70, 95, 120, 140].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${28 - (i % 2) * 6} q-8 -14 -18 -10 q10 8 18 10 z`}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          transform={i % 2 === 0 ? undefined : `rotate(180 ${x} 22)`}
        />
      ))}
    </svg>
  );
}
