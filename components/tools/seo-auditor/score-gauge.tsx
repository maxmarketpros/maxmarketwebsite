interface ScoreGaugeProps {
  score: number
  size?: "sm" | "md" | "lg"
  label?: string
}

function scoreColor(score: number): string {
  if (score >= 90) return "#16A34A" // green
  if (score >= 50) return "#F59E0B" // amber
  return "#E53E3E" // red
}

export function ScoreGauge({ score, size = "md", label }: ScoreGaugeProps) {
  const dims = size === "lg" ? 168 : size === "md" ? 96 : 64
  const stroke = size === "lg" ? 12 : size === "md" ? 8 : 6
  const radius = (dims - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.max(0, Math.min(100, score))
  const dash = (clamped / 100) * circumference
  const color = scoreColor(clamped)
  const fontSize = size === "lg" ? 44 : size === "md" ? 26 : 18

  return (
    <div className="inline-flex flex-col items-center justify-center gap-2">
      <div className="relative" style={{ width: dims, height: dims }}>
        <svg width={dims} height={dims} className="-rotate-90">
          <circle
            cx={dims / 2}
            cy={dims / 2}
            r={radius}
            fill="none"
            stroke="var(--border-color)"
            strokeWidth={stroke}
          />
          <circle
            cx={dims / 2}
            cy={dims / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${circumference}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.8s ease-out" }}
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center font-bold tracking-tight"
          style={{ color, fontSize }}
        >
          {clamped}
        </div>
      </div>
      {label && (
        <div
          className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.06em]"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
