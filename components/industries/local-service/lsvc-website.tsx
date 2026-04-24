import Link from "next/link"
import { ArrowRight, Check, Zap, Gauge, Smartphone, Code2 } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Spec = { label: string; value: string; score: number; color: string }

const specs: Spec[] = [
  { label: "Lighthouse performance", value: "99",  score: 99, color: "#22C55E" },
  { label: "SEO score",              value: "100", score: 100, color: "#1677FF" },
  { label: "Accessibility",          value: "98",  score: 98, color: "#14B8A6" },
  { label: "Best practices",         value: "100", score: 100, color: "#F59E0B" },
]

const variants = [
  {
    id: "professional",
    label: "Professional",
    caption: "Attorneys, CPAs, notaries",
    swatch: ["#0B132B", "#1677FF", "#F7FAFC"],
  },
  {
    id: "editorial",
    label: "Editorial",
    caption: "Salons, studios, photographers",
    swatch: ["#1A0E0E", "#D4A574", "#FFF6ED"],
  },
  {
    id: "bold",
    label: "Bold",
    caption: "Trainers, event pros, DJs",
    swatch: ["#111827", "#EC4899", "#FCE7F3"],
  },
]

export function LsvcWebsite() {
  return (
    <section id="lsvc-website" aria-labelledby="lsvc-website-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Custom website"
          heading={
            <>
              A site built to convert,{" "}
              <span className="whitespace-nowrap">
                not just <span className="accent-underline">look pretty</span>.
              </span>
            </>
          }
          paragraph={"Hand-coded on Next.js. Sub-2-second loads. Sticky click-to-call. Booking widget embedded on every service page. And SEO schema so Google actually knows what you sell."}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Browser mockup (left, spans 7 cols) */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 3px var(--shadow-color), 0 20px 40px -16px var(--shadow-color), 0 40px 80px -32px var(--shadow-color)",
              }}
            >
              {/* Chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "#F3F5F9", borderBottom: "1px solid var(--border-color)" }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#28C840" }} />
                </span>
                <div
                  className="flex-1 mx-2 flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: "#fff", border: "1px solid var(--border-color)" }}
                >
                  <span className="text-[11.5px] font-medium" style={{ color: "#64748B" }}>
                    clarashair.com
                  </span>
                </div>
              </div>

              {/* Website content mock */}
              <div className="relative p-5 sm:p-8">
                {/* Mini "nav" */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1677FF 0%, #74D3FF 100%)" }}>
                      <span className="text-[10px] font-bold text-white">C</span>
                    </div>
                    <span className="text-[13px] font-bold" style={{ color: "var(--ink)" }}>Clara&rsquo;s Hair Studio</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium" style={{ color: "var(--muted)" }}>
                    <span>Services</span>
                    <span>Team</span>
                    <span>Reviews</span>
                    <span
                      className="px-3 py-1 rounded-full text-white"
                      style={{ background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)" }}
                    >
                      Book now
                    </span>
                  </div>
                </div>

                {/* Hero block */}
                <div
                  className="relative p-5 sm:p-6 rounded-[16px] overflow-hidden mb-4"
                  style={{ background: "linear-gradient(135deg, #F7FAFC 0%, #EBF4FF 100%)" }}
                >
                  <div
                    aria-hidden
                    className="absolute -top-10 -right-10 w-[160px] h-[160px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(22,119,255,0.22) 0%, transparent 65%)" }}
                  />
                  <div className="relative">
                    <div className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full" style={{ background: "#fff", color: "var(--accent)", border: "1px solid #BFDBFE" }}>
                      <span className="w-1 h-1 rounded-full" style={{ background: "#22C55E" }} />
                      Booking open
                    </div>
                    <h4 className="mt-2 text-[18px] sm:text-[22px] font-bold leading-[1.15]" style={{ color: "var(--ink)" }}>
                      Fresh cuts. Flawless color. Book in 60 seconds.
                    </h4>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[11px] font-semibold px-3 py-1.5 rounded-[10px] text-white" style={{ background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)" }}>
                        Book now
                      </span>
                      <span className="text-[11px] font-semibold px-3 py-1.5 rounded-[10px]" style={{ color: "var(--accent)" }}>
                        Call us →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Services strip */}
                <div className="grid grid-cols-3 gap-2">
                  {["Cut", "Color", "Blowout"].map((s, i) => {
                    const colors = ["#F59E0B", "#EC4899", "#14B8A6"]
                    return (
                      <div
                        key={s}
                        className="rounded-[10px] p-2.5 text-center"
                        style={{
                          background: "#fff",
                          border: "1px solid var(--border-color)",
                          boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                        }}
                      >
                        <div
                          className="w-6 h-6 mx-auto rounded-full mb-1.5"
                          style={{ background: `${colors[i]}1A`, boxShadow: `inset 0 0 0 1px ${colors[i]}33` }}
                        />
                        <div className="text-[11px] font-semibold" style={{ color: "var(--ink)" }}>
                          {s}
                        </div>
                        <div className="text-[9.5px]" style={{ color: "var(--muted)" }}>
                          from $45
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Reviews strip */}
                <div
                  className="mt-3 rounded-[10px] px-3 py-2 flex items-center justify-between"
                  style={{ background: "#FFF8EB", border: "1px solid #FDE68A" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: "#F59E0B" }}>★★★★★</span>
                    <span className="text-[11px] font-bold" style={{ color: "var(--ink)" }}>4.9</span>
                    <span className="text-[10px]" style={{ color: "var(--muted)" }}>(428 Google reviews)</span>
                  </div>
                  <span className="text-[10px] font-semibold" style={{ color: "#B45309" }}>Verified</span>
                </div>
              </div>
            </div>

            {/* Mobile mini-preview pinned to bottom-right */}
            <div
              className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-8 w-[110px] sm:w-[150px] hidden md:block"
              style={{ transform: "rotate(-4deg)" }}
            >
              <div
                className="relative overflow-hidden p-1.5"
                style={{
                  borderRadius: "22px",
                  background: "#0B132B",
                  boxShadow: "0 10px 30px rgba(11,19,43,0.28)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="h-1 w-12 mx-auto mb-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
                <div
                  className="rounded-[16px] p-2"
                  style={{ background: "linear-gradient(135deg, #F7FAFC 0%, #EBF4FF 100%)" }}
                >
                  <div className="text-[7.5px] font-bold" style={{ color: "var(--ink)" }}>Clara&rsquo;s</div>
                  <div className="mt-1 text-[6.5px] leading-[1.2]" style={{ color: "var(--ink)" }}>Fresh cuts. Book in 60s.</div>
                  <div
                    className="mt-1.5 text-[6.5px] font-semibold text-center py-1 rounded text-white"
                    style={{ background: "#1677FF" }}
                  >
                    Book now
                  </div>
                  <div className="mt-1.5 flex items-center gap-0.5 text-[6px]">
                    <span style={{ color: "#F59E0B" }}>★★★★★</span>
                    <span className="font-bold" style={{ color: "var(--ink)" }}>4.9</span>
                  </div>
                </div>
              </div>
              <div className="mt-1.5 text-center text-[9px] font-semibold flex items-center justify-center gap-1" style={{ color: "var(--muted)" }}>
                <Smartphone className="w-2.5 h-2.5" strokeWidth={2.5} />
                Mobile-first
              </div>
            </div>
          </div>

          {/* Spec panel (right, spans 5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div
              className="rounded-[var(--radius-lg)] p-6 sm:p-7"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px var(--shadow-color), 0 10px 30px -10px var(--shadow-color)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                  style={{ background: "#EBF4FF", color: "var(--accent)" }}
                >
                  <Gauge className="w-5 h-5" strokeWidth={2.2} />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                    Lighthouse readout
                  </div>
                  <div className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>Real numbers, every build.</div>
                </div>
              </div>

              <ul className="space-y-3">
                {specs.map(({ label, value, score, color }) => (
                  <li key={label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] font-medium" style={{ color: "var(--ink)" }}>
                        {label}
                      </span>
                      <span className="text-[14px] font-bold tabular-nums" style={{ color }}>
                        {value}
                      </span>
                    </div>
                    <div className="h-[6px] rounded-full overflow-hidden" style={{ background: "#F0F4F8" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${score}%`,
                          background: `linear-gradient(90deg, ${color} 0%, ${color}CC 100%)`,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 pt-4 space-y-2" style={{ borderTop: "1px solid var(--border-color)" }}>
                {[
                  { Icon: Zap,        text: "Sub-2s LCP · Core Web Vitals: Good" },
                  { Icon: Code2,      text: "Next.js + Postgres — you own the source" },
                  { Icon: Smartphone, text: "Mobile-first · sticky click-to-call" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-2 text-[13.5px]" style={{ color: "var(--ink)" }}>
                    <span
                      className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                    >
                      <Icon className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/web-design/custom-coded"
                className="group mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold"
                style={{ color: "var(--accent)" }}
              >
                See our custom-coded builds
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Style variants */}
            <div
              className="rounded-[var(--radius-lg)] p-5 sm:p-6"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px var(--shadow-color)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                  Brand directions
                </span>
                <Link href="/services/web-design" className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>
                  All platforms →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {variants.map((v) => (
                  <div
                    key={v.id}
                    className="group rounded-[12px] p-2.5 transition-all hover:-translate-y-0.5"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                    }}
                  >
                    <div className="flex gap-0.5 rounded-md overflow-hidden h-8 mb-2">
                      {v.swatch.map((c, i) => (
                        <div key={i} className="flex-1" style={{ background: c }} />
                      ))}
                    </div>
                    <div className="text-[12px] font-semibold leading-tight" style={{ color: "var(--ink)" }}>
                      {v.label}
                    </div>
                    <div className="text-[10px] leading-tight mt-0.5" style={{ color: "var(--muted)" }}>
                      {v.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
