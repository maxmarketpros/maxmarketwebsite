import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Sparkles,
  Check,
  ShieldCheck,
  CalendarClock,
  LayoutGrid,
  FileBarChart,
} from "lucide-react"

const guarantees = [
  { Icon: ShieldCheck, label: "Real audit included" },
  { Icon: CalendarClock, label: "30-day fix plan" },
  { Icon: LayoutGrid, label: "Cross-engine coverage" },
  { Icon: FileBarChart, label: "Reporting on every citation" },
]

const siblings = [
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "On-Page SEO", href: "/services/seo/on-page" },
  { label: "Technical SEO", href: "/services/seo/technical" },
  { label: "Backlinks", href: "/services/seo/backlinks" },
  { label: "Press Releases", href: "/services/seo/press-releases" },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const engineFooter = [
  { domain: "chatgpt.com", outlet: "ChatGPT" },
  { domain: "gemini.google.com", outlet: "Gemini" },
  { domain: "perplexity.ai", outlet: "Perplexity" },
  { domain: "copilot.microsoft.com", outlet: "Copilot" },
  { domain: "claude.ai", outlet: "Claude" },
  { domain: "google.com", outlet: "AI Overviews" },
]

export function AiSearchFinalCta() {
  return (
    <section
      aria-labelledby="ai-search-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #0B132B 0%, #1E1B4B 50%, #0B132B 100%)",
            boxShadow:
              "0 10px 30px rgba(11,19,43,0.22), 0 30px 80px rgba(11,19,43,0.18)",
          }}
        >
          {/* Cyan glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] right-[-10%] w-[640px] h-[640px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.42) 0%, transparent 60%)",
            }}
          />
          {/* Violet glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-10%] w-[560px] h-[560px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.36) 0%, transparent 60%)",
            }}
          />
          {/* Grid pattern */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.06]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="ai-cta-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ai-cta-grid)" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    filter:
                      "drop-shadow(0 10px 24px rgba(116,211,255,0.40))",
                  }}
                >
                  <img
                    src={icons8Url("unXm4ixWAr6H", 256)}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-[48px] h-[48px] object-contain"
                  />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(116,211,255,0.22) 0%, rgba(139,92,246,0.22) 100%)",
                    color: "#7DD3FC",
                  }}
                >
                  <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                  Free AI strategy call
                </span>
              </div>

              <h2
                id="ai-search-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Be the answer customers{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #74D3FF 0%, #C4B5FD 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  see in AI.
                </span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[560px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                A senior strategist will run your free AI visibility audit —
                25 buyer queries, all 6 engines, one prioritized fix list.
                Real plan, real citations, zero pressure.
              </p>

              {/* Engine logo strip */}
              <div className="mt-6 flex items-center gap-2.5 flex-wrap">
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Optimized for
                </span>
                {engineFooter.map((e) => (
                  <span
                    key={e.domain}
                    title={e.outlet}
                    className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(255,255,255,0.22)",
                      boxShadow: "0 2px 6px rgba(11,19,43,0.4)",
                    }}
                  >
                    <img
                      src={favicon(e.domain, 64)}
                      alt={e.outlet}
                      width={16}
                      height={16}
                      loading="lazy"
                      decoding="async"
                      className="w-[16px] h-[16px] object-contain"
                    />
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)",
                    color: "#0B132B",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.2), 0 8px 24px rgba(116,211,255,0.45)",
                  }}
                >
                  Start my free AI audit
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white hover:bg-white/10 transition-colors"
                >
                  Talk to a strategist
                </a>
              </div>
            </div>

            {/* Right: guarantees */}
            <div
              className="lg:pl-10 lg:border-l"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                What&rsquo;s promised
              </div>
              <ul className="space-y-3.5">
                {guarantees.map((g) => (
                  <li key={g.label} className="flex items-start gap-3">
                    <span
                      className="mt-[2px] w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)",
                        color: "#0B132B",
                        boxShadow: "0 2px 6px rgba(116,211,255,0.35)",
                      }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3.5} />
                    </span>
                    <div className="flex items-center gap-2">
                      <g.Icon
                        className="w-4 h-4 shrink-0"
                        strokeWidth={2.25}
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      />
                      <span
                        className="text-[15px] leading-[1.5]"
                        style={{ color: "rgba(255,255,255,0.92)" }}
                      >
                        {g.label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-8 pt-6 border-t text-[12.5px]"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  See also
                </span>
                <span className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {siblings.map((s, i) => (
                    <span key={s.href}>
                      <a
                        href={s.href}
                        className="font-semibold hover:text-white transition-colors"
                        style={{ color: "#7DD3FC" }}
                      >
                        {s.label}
                      </a>
                      {i < siblings.length - 1 && (
                        <span
                          className="ml-3"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
