import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye,
  PlayCircle,
  Radar,
  Sparkles,
} from "lucide-react"

const secondaryCtas = [
  {
    Icon: Radar,
    label: "See this week&rsquo;s trend report",
    sub: "Sample radar from a home-services niche",
    href: "#tiktok-trend-radar",
    accent: "#22D3EE",
  },
  {
    Icon: Eye,
    label: "Compare plans &amp; pricing",
    sub: "What&rsquo;s included at each tier",
    href: "/#pricing",
    accent: "#22C55E",
  },
  {
    Icon: PlayCircle,
    label: "See the FYP checklist in action",
    sub: "How we score every TikTok before posting",
    href: "#tiktok-fyp-checklist",
    accent: "#EC4899",
  },
]

const siblings = [
  { label: "Social Media Management", href: "/services/social-media/management" },
  { label: "Video Editing", href: "/services/social-media/video-editing" },
  { label: "Graphic Design", href: "/services/social-media/graphic-design" },
  { label: "Review Generation", href: "/services/social-media/review-generation" },
  { label: "YouTube Growth", href: "/services/social-media/youtube" },
  { label: "Press Releases", href: "/services/seo/press-releases" },
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Web Design", href: "/services/web-design" },
]

export function TiktokFinalCta() {
  return (
    <section
      aria-labelledby="tiktok-final-cta-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[10%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container pb-20 sm:pb-24 lg:pb-28 relative z-10">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #F4FCFF 100%)",
            border: "1px solid var(--border-color)",
            boxShadow:
              "0 1px 3px rgba(17,35,68,0.06), 0 30px 80px rgba(17,35,68,0.10)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0"
            style={{
              width: "55%",
              height: "55%",
              background:
                "radial-gradient(ellipse 80% 100% at 85% 0%, rgba(34,211,238,0.14), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0"
            style={{
              width: "55%",
              height: "55%",
              background:
                "radial-gradient(ellipse 80% 100% at 15% 100%, rgba(236,72,153,0.10), transparent 65%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #25F4EE 0%, #FE2C55 100%)",
                    boxShadow:
                      "0 10px 24px rgba(254,44,85,0.30), 0 4px 12px rgba(37,244,238,0.30)",
                  }}
                  aria-hidden
                >
                  <span
                    className="text-[28px] font-extrabold tracking-[-0.04em]"
                    style={{
                      color: "#fff",
                      textShadow:
                        "0 1px 2px rgba(0,0,0,0.25), 2px 0 0 rgba(37,244,238,0.7), -2px 0 0 rgba(254,44,85,0.7)",
                    }}
                  >
                    d
                  </span>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(34,211,238,0.10)",
                    color: "#0891B2",
                    border: "1px solid rgba(34,211,238,0.30)",
                  }}
                >
                  <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                  Free TikTok strategy call
                </span>
              </div>

              <h2
                id="tiktok-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Ready to grow on{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">TikTok</span>?
                </span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[540px]"
                style={{ color: "var(--muted)" }}
              >
                A senior strategist will scope your TikTok marketing services
                plan in 25 minutes — content pillars, posting cadence, hook
                library, and a fixed monthly fee. Real plan, zero pressure.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #25F4EE 0%, #1677FF 50%, #FE2C55 100%)",
                    color: "#fff",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.20), 0 8px 24px rgba(254,44,85,0.35)",
                  }}
                >
                  Book a strategy call
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="/services/social-media"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-colors hover:bg-[var(--accent-bg)]"
                  style={{ color: "var(--accent)" }}
                >
                  See all social services
                </a>
              </div>
            </div>

            <div
              className="lg:pl-10 lg:border-l"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
                style={{ color: "var(--muted)" }}
              >
                Or take a quick look first
              </div>
              <ul className="space-y-3">
                {secondaryCtas.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-center gap-4 px-4 py-3.5 rounded-[var(--radius-lg)] transition-all hover:translate-y-[-1px]"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-color)",
                        boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                      }}
                    >
                      <span
                        className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                        style={{
                          background: `${c.accent}1A`,
                          color: c.accent,
                          boxShadow: `inset 0 0 0 1px ${c.accent}26`,
                        }}
                      >
                        <c.Icon className="w-4 h-4" strokeWidth={2.25} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-[14.5px] font-bold leading-tight"
                          style={{ color: "var(--ink)" }}
                          dangerouslySetInnerHTML={{ __html: c.label }}
                        />
                        <div
                          className="text-[12.5px] mt-0.5 leading-tight"
                          style={{ color: "var(--muted)" }}
                          dangerouslySetInnerHTML={{ __html: c.sub }}
                        />
                      </div>
                      <ArrowRight
                        className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
                        strokeWidth={2.5}
                        style={{ color: "var(--accent)" }}
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <ul
                className="mt-7 pt-6 space-y-2.5 border-t"
                style={{ borderColor: "var(--border-color)" }}
              >
                {[
                  "Approve every TikTok before it posts",
                  "You own all footage &amp; final cuts",
                ].map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-2.5 text-[13.5px] font-medium"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(34,211,238,0.12)",
                        color: "#0891B2",
                      }}
                    >
                      <CheckCircle2
                        className="w-3 h-3"
                        strokeWidth={3}
                      />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: g }} />
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-5 border-t" style={{ borderColor: "var(--border-color)" }}>
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  Also explore
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {siblings.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold transition-colors hover:bg-[var(--accent-bg)]"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-color)",
                        color: "var(--ink)",
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
