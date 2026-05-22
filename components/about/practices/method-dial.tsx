import { icons8Url } from "@/lib/icons8"
import {
  PRACTICE_BLUE,
  PRACTICE_CYAN,
  PRACTICE_VIOLET,
  PRACTICE_GREEN,
} from "@/lib/practices-data"

const QUADRANTS = [
  { label: "Audit",    accent: PRACTICE_BLUE,   iconId: "kDqO6kPb3xLj", angle: -45  },
  { label: "Strategy", accent: PRACTICE_CYAN,   iconId: "XiOTegRsskoN", angle: 45   },
  { label: "Execute",  accent: PRACTICE_VIOLET, iconId: "JizgObtyfWS2", angle: 135  },
  { label: "Optimize", accent: PRACTICE_GREEN,  iconId: "1ya3H57M8iU6", angle: -135 },
] as const

const SIZE = 360
const CENTER = SIZE / 2
const OUTER_R = 168
const INNER_R = 70
const ICON_R = 122

// Returns an SVG arc path string for a quadrant slice between two angles (degrees).
function arcPath(startAngle: number, endAngle: number) {
  const toXY = (a: number, r: number) => {
    const rad = (a * Math.PI) / 180
    return [CENTER + r * Math.cos(rad), CENTER + r * Math.sin(rad)]
  }
  const [x1, y1] = toXY(startAngle, OUTER_R)
  const [x2, y2] = toXY(endAngle, OUTER_R)
  const [x3, y3] = toXY(endAngle, INNER_R)
  const [x4, y4] = toXY(startAngle, INNER_R)
  return [
    `M ${x1} ${y1}`,
    `A ${OUTER_R} ${OUTER_R} 0 0 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${INNER_R} ${INNER_R} 0 0 0 ${x4} ${y4}`,
    "Z",
  ].join(" ")
}

export function MethodDial() {
  const slices = [
    { ...QUADRANTS[0], start: 180, end: 270 }, // top-left
    { ...QUADRANTS[1], start: 270, end: 360 }, // top-right
    { ...QUADRANTS[2], start: 0,   end: 90  }, // bottom-right
    { ...QUADRANTS[3], start: 90,  end: 180 }, // bottom-left
  ]

  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-square">
      {/* Soft outer glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(116,211,255,0.30) 0%, rgba(22,119,255,0.12) 40%, transparent 70%)",
          transform: "scale(1.15)",
        }}
      />

      {/* Rotating conic gradient ring */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full method-dial-ring"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(22,119,255,0) 0deg, rgba(22,119,255,0.55) 70deg, rgba(116,211,255,0.65) 140deg, rgba(139,92,246,0.55) 220deg, rgba(34,197,94,0.55) 300deg, rgba(22,119,255,0) 360deg)",
          padding: 4,
          mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
        }}
      />

      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="relative w-full h-full"
        aria-label="The Max Market Pros method dial — Audit, Strategy, Execute, Optimize"
        role="img"
      >
        {/* Slice backgrounds */}
        {slices.map((s) => (
          <g key={s.label}>
            <defs>
              <linearGradient
                id={`grad-${s.label}`}
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor={s.accent} stopOpacity={0.22} />
                <stop offset="100%" stopColor={s.accent} stopOpacity={0.06} />
              </linearGradient>
            </defs>
            <path
              d={arcPath(s.start, s.end)}
              fill={`url(#grad-${s.label})`}
              stroke="#fff"
              strokeWidth={3}
            />
          </g>
        ))}

        {/* Inner hub circle */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={INNER_R - 4}
          fill="#fff"
          stroke="rgba(22,119,255,0.16)"
          strokeWidth={1.5}
        />
        <text
          x={CENTER}
          y={CENTER - 8}
          textAnchor="middle"
          style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", fill: "#4A5A75" }}
        >
          MAX MARKET
        </text>
        <text
          x={CENTER}
          y={CENTER + 8}
          textAnchor="middle"
          style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em", fill: "#0B132B" }}
        >
          PROS
        </text>
        <text
          x={CENTER}
          y={CENTER + 26}
          textAnchor="middle"
          style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", fill: "#1677FF" }}
        >
          THE LOOP
        </text>
      </svg>

      {/* Quadrant icon + label cards positioned via absolute % */}
      {QUADRANTS.map((q) => {
        const rad = (q.angle * Math.PI) / 180
        // Convert to top-left % anchored at the dial center
        const x = 50 + (ICON_R / SIZE) * 100 * Math.cos(rad)
        const y = 50 + (ICON_R / SIZE) * 100 * Math.sin(rad)
        return (
          <div
            key={q.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className="w-12 h-12 rounded-full inline-flex items-center justify-center"
              style={{
                background: "#fff",
                border: `2px solid ${q.accent}33`,
                boxShadow: `0 4px 14px ${q.accent}33`,
              }}
            >
              <img
                src={icons8Url(q.iconId, 96)}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span
              className="text-[10.5px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full"
              style={{
                background: "#fff",
                color: q.accent,
                border: `1px solid ${q.accent}33`,
              }}
            >
              {q.label}
            </span>
          </div>
        )
      })}

      <style>{`
        @keyframes method-dial-spin {
          to { transform: rotate(360deg); }
        }
        .method-dial-ring {
          animation: method-dial-spin 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .method-dial-ring { animation: none; }
        }
      `}</style>
    </div>
  )
}
