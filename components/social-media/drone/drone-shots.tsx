"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, Film, Play } from "lucide-react"

type Shot = {
  id: string
  name: string
  tagline: string
  desc: string
  duration: string
  difficulty: "Standard" | "Advanced" | "Signature"
  color: string
}

const shots: Shot[] = [
  {
    id: "reveal",
    name: "Reveal Pull-Up",
    tagline: "The hero shot every listing needs",
    desc: "Camera starts tight on the front door, drone lifts and pulls back to reveal the property and surrounding neighborhood. Sells the lifestyle in 8 seconds.",
    duration: "0:08",
    difficulty: "Standard",
    color: "#0891B2",
  },
  {
    id: "orbit",
    name: "360° Orbit",
    tagline: "Every angle, locked subject",
    desc: "Drone circles the subject at constant altitude with the gimbal locked — perfect for hero properties, monuments, and feature reels.",
    duration: "0:12",
    difficulty: "Standard",
    color: "#0EA5E9",
  },
  {
    id: "topdown",
    name: "Top-Down Dolly",
    tagline: "Bird&rsquo;s-eye, moving",
    desc: "Camera straight down at 90°, drone glides over rooftops, fairways, or fields. Shows lot size, layout, and scale instantly.",
    duration: "0:10",
    difficulty: "Standard",
    color: "#06B6D4",
  },
  {
    id: "pushin",
    name: "Push-In Hero",
    tagline: "Cinematic dramatic entrance",
    desc: "Slow forward movement toward the subject — front door, podium, monument — with tight gimbal control. Builds anticipation.",
    duration: "0:06",
    difficulty: "Standard",
    color: "#0284C7",
  },
  {
    id: "flythrough",
    name: "FPV Fly-Through",
    tagline: "Through the front door, out the back",
    desc: "Single uncut shot through windows, doorways, and across the property. Built with our cinewhoop drone for tight interior sequences.",
    duration: "0:18",
    difficulty: "Signature",
    color: "#F97316",
  },
  {
    id: "parallax",
    name: "Side-Slide Parallax",
    tagline: "Depth in motion",
    desc: "Drone strafes laterally past trees or structures, gimbal stays locked on the subject — gives layered depth and that high-end feel.",
    duration: "0:09",
    difficulty: "Advanced",
    color: "#7C3AED",
  },
  {
    id: "sunset",
    name: "Golden-Hour Skyline",
    tagline: "The post that gets shared",
    desc: "Wide aerials timed to the 25-minute golden window before sunset. Highest-engagement aerial drone footage on Instagram, period.",
    duration: "0:15",
    difficulty: "Advanced",
    color: "#EA580C",
  },
  {
    id: "hyperlapse",
    name: "Aerial Hyperlapse",
    tagline: "Time-bent panorama",
    desc: "Stitched stills shot over 6&ndash;10 minutes that compress sunsets, traffic, or construction phases into a single moving frame.",
    duration: "0:08",
    difficulty: "Signature",
    color: "#DB2777",
  },
]

export function DroneShots() {
  const [active, setActive] = useState(shots[0].id)
  const current = shots.find((s) => s.id === active) ?? shots[0]

  return (
    <section
      id="drone-shots"
      aria-labelledby="drone-shots-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] right-[-5%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Drone shot library"
          heading={
            <span id="drone-shots-heading">
              Eight signature{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">aerial shots</span>
              </span>{" "}
              every package can pull from.
            </span>
          }
          paragraph="Every drone videography shoot starts from the same vetted shot library — the angles that consistently outperform on MLS, Reels, Shorts, and YouTube. Pick a thumbnail to see what each looks like."
        />

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: shot grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
            {shots.map((shot) => {
              const isActive = active === shot.id
              return (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() => setActive(shot.id)}
                  className="group relative overflow-hidden text-left transition-all"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    border: isActive
                      ? `2px solid ${shot.color}`
                      : "1px solid var(--border-color)",
                    background: "var(--surface)",
                    boxShadow: isActive
                      ? `0 4px 20px ${shot.color}40`
                      : "0 1px 3px var(--shadow-color)",
                    transform: isActive ? "translateY(-2px)" : "none",
                  }}
                  aria-pressed={isActive}
                >
                  {/* Thumb */}
                  <div
                    className="relative aspect-[4/3]"
                    style={{
                      background: `linear-gradient(135deg, ${shot.color} 0%, ${shot.color}80 100%)`,
                    }}
                  >
                    <ShotThumb id={shot.id} />
                    {/* Overlays */}
                    <span
                      className="absolute top-1.5 left-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.08em]"
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        color: "#fff",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {shot.duration}
                    </span>
                    <span
                      className="absolute top-1.5 right-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.08em]"
                      style={{
                        background:
                          shot.difficulty === "Signature"
                            ? "rgba(249,115,22,0.85)"
                            : shot.difficulty === "Advanced"
                              ? "rgba(124,58,237,0.85)"
                              : "rgba(255,255,255,0.85)",
                        color:
                          shot.difficulty === "Standard" ? "#0F172A" : "#fff",
                      }}
                    >
                      {shot.difficulty}
                    </span>
                    {/* Play */}
                    <span
                      className="absolute inset-0 flex items-center justify-center transition-opacity"
                      style={{ opacity: isActive ? 1 : 0.65 }}
                    >
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          background: "rgba(255,255,255,0.92)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                        }}
                      >
                        <Play
                          className="w-4 h-4 ml-0.5"
                          strokeWidth={2.5}
                          fill={shot.color}
                          style={{ color: shot.color }}
                        />
                      </span>
                    </span>
                  </div>
                  <div className="px-2.5 py-2">
                    <div
                      className="text-[12.5px] font-bold leading-tight truncate"
                      style={{ color: "var(--ink)" }}
                    >
                      {shot.name}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: detail panel */}
          <aside
            className="lg:sticky lg:top-24 self-start card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-lg)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 8px 24px var(--shadow-color)",
            }}
          >
            {/* Big hero of selected shot */}
            <div
              className="relative aspect-[16/10]"
              style={{
                background: `linear-gradient(135deg, ${current.color} 0%, ${current.color}90 50%, #0F172A 100%)`,
              }}
            >
              <ShotThumb id={current.id} large />
              <span
                className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: "rgba(0,0,0,0.55)",
                  color: "#fff",
                  backdropFilter: "blur(6px)",
                }}
              >
                <Film className="w-3 h-3" strokeWidth={2.5} />
                Shot · {current.duration}
              </span>
              <span
                className="absolute top-3 right-3 inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background:
                    current.difficulty === "Signature"
                      ? "rgba(249,115,22,0.92)"
                      : current.difficulty === "Advanced"
                        ? "rgba(124,58,237,0.92)"
                        : "rgba(255,255,255,0.92)",
                  color:
                    current.difficulty === "Standard" ? "#0F172A" : "#fff",
                }}
              >
                {current.difficulty}
              </span>
            </div>
            <div className="px-5 sm:px-6 py-5">
              <h3
                className="text-[20px] sm:text-[22px] font-bold tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {current.name}
              </h3>
              <p
                className="mt-1 text-[13.5px] font-semibold uppercase tracking-[0.06em]"
                style={{ color: current.color }}
                dangerouslySetInnerHTML={{ __html: current.tagline }}
              />
              <p
                className="mt-3 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--muted)" }}
                dangerouslySetInnerHTML={{ __html: current.desc }}
              />

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
                style={{ color: current.color }}
              >
                Add this shot to my package
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ShotThumb({ id, large = false }: { id: string; large?: boolean }) {
  const stroke = large ? 1.4 : 0.9
  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 75"
      preserveAspectRatio="none"
    >
      {/* common ground */}
      <path
        d="M0,55 Q30,50 50,52 Q75,55 100,50 L100,75 L0,75 Z"
        fill="rgba(255,255,255,0.18)"
      />
      {id === "reveal" && (
        <g>
          {/* House */}
          <rect x="40" y="46" width="20" height="9" fill="rgba(255,255,255,0.95)" />
          <polygon points="38,46 50,38 62,46" fill="rgba(0,0,0,0.45)" />
          {/* Pull-up arrow path */}
          <path
            d="M50,42 C50,30 60,20 78,12"
            stroke="#fff"
            strokeWidth={stroke + 0.6}
            fill="none"
            strokeDasharray="3 2"
          />
          <circle cx="78" cy="12" r="2.4" fill="#fff" />
          <circle cx="50" cy="42" r="1.4" fill="#fff" />
        </g>
      )}
      {id === "orbit" && (
        <g>
          <rect x="44" y="46" width="12" height="9" fill="rgba(255,255,255,0.95)" />
          <polygon points="42,46 50,40 58,46" fill="rgba(0,0,0,0.45)" />
          <ellipse
            cx="50"
            cy="48"
            rx="32"
            ry="14"
            stroke="#fff"
            strokeWidth={stroke + 0.4}
            fill="none"
            strokeDasharray="3 2"
          />
          <circle cx="82" cy="48" r="2.4" fill="#fff" />
        </g>
      )}
      {id === "topdown" && (
        <g>
          {/* aerial top-down rooftops */}
          <rect x="24" y="34" width="20" height="14" fill="rgba(255,255,255,0.85)" />
          <rect x="50" y="44" width="22" height="14" fill="rgba(255,255,255,0.85)" />
          <rect x="20" y="56" width="14" height="10" fill="rgba(255,255,255,0.85)" />
          {/* dolly arrow */}
          <path
            d="M14,20 L86,20"
            stroke="#fff"
            strokeWidth={stroke + 0.6}
            fill="none"
            strokeDasharray="4 2"
          />
          <polygon points="86,20 80,17 80,23" fill="#fff" />
          <circle cx="14" cy="20" r="2.4" fill="#fff" />
        </g>
      )}
      {id === "pushin" && (
        <g>
          {/* Door */}
          <rect x="44" y="36" width="12" height="22" fill="rgba(255,255,255,0.95)" />
          <rect x="48" y="44" width="4" height="10" fill="rgba(0,0,0,0.45)" />
          {/* arrow forward */}
          <path
            d="M14,12 L46,40"
            stroke="#fff"
            strokeWidth={stroke + 0.6}
            fill="none"
            strokeDasharray="3 2"
          />
          <polygon points="46,40 41,36 39,40" fill="#fff" />
          <circle cx="14" cy="12" r="2.4" fill="#fff" />
        </g>
      )}
      {id === "flythrough" && (
        <g>
          {/* Doorway frames */}
          <rect x="22" y="22" width="14" height="36" stroke="#fff" strokeWidth={stroke + 0.2} fill="none" />
          <rect x="44" y="20" width="14" height="40" stroke="#fff" strokeWidth={stroke + 0.2} fill="none" />
          <rect x="66" y="22" width="14" height="36" stroke="#fff" strokeWidth={stroke + 0.2} fill="none" />
          {/* path */}
          <path
            d="M8,40 Q29,40 35,40 Q44,40 51,40 Q58,40 65,40 Q72,40 92,40"
            stroke="#fff"
            strokeWidth={stroke + 0.7}
            fill="none"
            strokeDasharray="2 2"
          />
          <polygon points="92,40 86,37 86,43" fill="#fff" />
        </g>
      )}
      {id === "parallax" && (
        <g>
          {/* Trees foreground */}
          <circle cx="20" cy="50" r="6" fill="rgba(255,255,255,0.45)" />
          <circle cx="36" cy="48" r="5" fill="rgba(255,255,255,0.55)" />
          <circle cx="80" cy="50" r="6" fill="rgba(255,255,255,0.4)" />
          {/* Subject */}
          <rect x="48" y="38" width="14" height="18" fill="rgba(255,255,255,0.95)" />
          {/* lateral path */}
          <path d="M8,28 L92,28" stroke="#fff" strokeWidth={stroke + 0.6} strokeDasharray="3 2" fill="none" />
          <polygon points="92,28 86,25 86,31" fill="#fff" />
          <line x1="50" y1="28" x2="55" y2="40" stroke="#fff" strokeWidth={stroke + 0.2} strokeDasharray="2 2" />
        </g>
      )}
      {id === "sunset" && (
        <g>
          {/* Sun */}
          <circle cx="78" cy="32" r="10" fill="rgba(255,255,255,0.95)" />
          {/* rays */}
          {[-30, -15, 0, 15, 30].map((a) => (
            <line
              key={a}
              x1="78"
              y1="32"
              x2={78 + Math.cos((a * Math.PI) / 180) * 22}
              y2={32 + Math.sin((a * Math.PI) / 180) * 22}
              stroke="rgba(255,255,255,0.5)"
              strokeWidth={stroke}
            />
          ))}
          {/* Skyline */}
          <path
            d="M10,55 L18,42 L26,55 L34,38 L42,55 L52,46 L60,55 L70,40 L80,55"
            stroke="rgba(0,0,0,0.55)"
            strokeWidth={stroke + 0.5}
            fill="rgba(0,0,0,0.55)"
          />
        </g>
      )}
      {id === "hyperlapse" && (
        <g>
          {/* Multiple overlapping frames */}
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={20 + i * 4}
              y={18 + i * 3}
              width={50}
              height={32}
              stroke="rgba(255,255,255,0.55)"
              strokeWidth={stroke}
              fill="rgba(255,255,255,0.06)"
            />
          ))}
          <line x1="14" y1="60" x2="86" y2="60" stroke="rgba(255,255,255,0.6)" strokeWidth={stroke} strokeDasharray="2 2" />
          <text x="50" y="70" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="700" letterSpacing="1">
            t →
          </text>
        </g>
      )}
    </svg>
  )
}
