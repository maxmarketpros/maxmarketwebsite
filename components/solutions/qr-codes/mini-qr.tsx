const PATTERN: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
]

export function MiniQR({ color = "#1677FF", size = 96, showLogo = true }: { color?: string; size?: number; showLogo?: boolean }) {
  const cells = PATTERN.length
  const cellSize = size / cells
  const logoStart = Math.floor(cells / 2) - 2
  const logoEnd = logoStart + 4

  return (
    <div
      className="p-2 rounded-[var(--radius-md)] border shrink-0"
      style={{
        width: size + 16,
        height: size + 16,
        background: "var(--surface)",
        borderColor: "var(--border-color)",
        boxShadow: "0 1px 3px rgba(17,35,68,0.05), 0 4px 12px rgba(17,35,68,0.04)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${cells} ${cells}`}
        aria-hidden
        className="block"
      >
        {PATTERN.map((row, y) =>
          row.map((cell, x) => {
            if (cell === 0) return null
            // Mask out the center logo area
            if (showLogo && y >= logoStart && y < logoEnd && x >= logoStart && x < logoEnd) return null
            // Corner eyes — render as rounded squares at (0,0), (0, cells-7), (cells-7, 0)
            return (
              <rect
                key={`${x}-${y}`}
                x={x + 0.08}
                y={y + 0.08}
                width={0.84}
                height={0.84}
                rx={0.25}
                fill={color}
              />
            )
          })
        )}
        {/* Decorative corner eyes over pattern */}
        {[
          [0, 0],
          [cells - 7, 0],
          [0, cells - 7],
        ].map(([x, y], i) => (
          <g key={`eye-${i}`}>
            <rect x={x} y={y} width={7} height={7} rx={1.5} fill="none" stroke={color} strokeWidth="1" />
            <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.6} fill={color} />
          </g>
        ))}
        {/* Logo hole */}
        {showLogo && (
          <rect
            x={logoStart}
            y={logoStart}
            width={4}
            height={4}
            rx={0.8}
            fill="#fff"
            stroke={color}
            strokeWidth="0.3"
          />
        )}
        {showLogo && (
          <circle
            cx={logoStart + 2}
            cy={logoStart + 2}
            r={1.35}
            fill={color}
          />
        )}
      </svg>
    </div>
  )
}
