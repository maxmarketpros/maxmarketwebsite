import { Pill } from "@/components/ui/pill"
import {
  ArrowRight,
  Search,
  Layers,
  Tags,
  ListOrdered,
  Link2,
  ChevronRight,
} from "lucide-react"

type Step = {
  Icon: typeof Search
  step: string
  title: string
  desc: string
  example: string
  color: string
}

const steps: Step[] = [
  {
    Icon: Search,
    step: "01",
    title: "Search demand",
    desc: "Pull real YouTube + Google search volume for every topic before scripting.",
    example: '"roof inspection cost" — 18.1K mo. searches',
    color: "#FF0000",
  },
  {
    Icon: Layers,
    step: "02",
    title: "Keyword cluster",
    desc: "Group long-tail variants so one video ranks for 8–12 related queries.",
    example: "+11 sibling phrases mapped to 1 video",
    color: "#F59E0B",
  },
  {
    Icon: Tags,
    step: "03",
    title: "Title · description · tags",
    desc: "Front-load the primary keyword in the title, mirror it in the first 25 words.",
    example: "Primary KW in 1st 25 words",
    color: "#1677FF",
  },
  {
    Icon: ListOrdered,
    step: "04",
    title: "Chapters & timestamps",
    desc: "Auto-split the video into 4–6 chapters tied to long-tail keyword variants.",
    example: "0:00 Hook · 1:42 Cost · 4:15 Red flags",
    color: "#A855F7",
  },
  {
    Icon: Link2,
    step: "05",
    title: "Cards · end screens · playlists",
    desc: "Wire every video into 2–3 playlists and end-screen the next video to lift session time.",
    example: "+22% session-watch · +9% subs",
    color: "#22C55E",
  },
]

export function YoutubeSeoBlueprint() {
  return (
    <section
      id="youtube-seo-blueprint"
      aria-labelledby="youtube-seo-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[8%] left-[-6%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="flex justify-center mb-5">
            <Pill>YouTube SEO blueprint</Pill>
          </div>
          <h2
            id="youtube-seo-heading"
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            <span className="accent-underline">YouTube SEO services</span>{" "}
            engineered for search, not just suggested.
          </h2>
          <p
            className="mt-5 text-[17px] sm:text-[18.5px] leading-[1.65] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            YouTube is the world&rsquo;s second-biggest search engine. Our
            YouTube marketing services run a full keyword + metadata blueprint
            on every upload — so a video posted in March still pulls leads in
            September. Pair this with{" "}
            <a
              href="/services/seo"
              style={{ color: "var(--accent)", fontWeight: 600 }}
            >
              SEO services
            </a>{" "}
            so the same keyword cluster ranks on Google, YouTube, and your site.
          </p>
        </div>

        {/* Horizontal flow on desktop, vertical on mobile */}
        <div
          className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 relative"
          style={{ animation: "fadeInUp 0.7s ease-out 0.05s both" }}
        >
          {/* Connecting rail (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-[44px] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,0,0,0.4) 0%, rgba(245,158,11,0.4) 25%, rgba(22,119,255,0.4) 50%, rgba(168,85,247,0.4) 75%, rgba(34,197,94,0.4) 100%)",
            }}
          />

          {steps.map((s, i) => (
            <article
              key={s.step}
              className="card-surface card-surface-hover relative"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.6s ease-out ${0.05 * i}s both`,
              }}
            >
              <div className="px-5 py-5 relative">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative"
                    style={{
                      background: `${s.color}1A`,
                      color: s.color,
                      boxShadow: `inset 0 0 0 1px ${s.color}33, 0 0 0 6px var(--surface)`,
                    }}
                  >
                    <s.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: s.color }}
                  >
                    Step {s.step}
                  </span>
                </div>
                <h3
                  className="mt-4 text-[16.5px] font-bold leading-[1.25] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-1.5 text-[13.5px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  {s.desc}
                </p>
                <div
                  className="mt-3 px-3 py-2 rounded-[10px] text-[12px] font-semibold"
                  style={{
                    background: `${s.color}10`,
                    color: "var(--ink)",
                    border: `1px dashed ${s.color}55`,
                  }}
                >
                  {s.example}
                </div>
              </div>
              {/* Mobile arrow connector */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-3 z-20 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${s.color}55`,
                    color: s.color,
                  }}
                >
                  <ChevronRight
                    className="w-3.5 h-3.5"
                    strokeWidth={3}
                    style={{ transform: "rotate(90deg)" }}
                  />
                </span>
              )}
            </article>
          ))}
        </div>

        {/* Inline CTA + sibling link */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-[var(--radius-lg)]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,0,0,0.08) 0%, rgba(22,119,255,0.10) 100%)",
            border: "1px solid rgba(22,119,255,0.20)",
          }}
        >
          <span
            className="text-[14.5px] font-semibold text-center sm:text-left"
            style={{ color: "var(--ink)" }}
          >
            Want the same keyword cluster ranking on Google too?{" "}
            <a
              href="/services/seo"
              style={{ color: "var(--accent)", fontWeight: 700 }}
            >
              See SEO services
            </a>
            .
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
            style={{ color: "var(--accent)" }}
          >
            Get a YouTube SEO audit
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
