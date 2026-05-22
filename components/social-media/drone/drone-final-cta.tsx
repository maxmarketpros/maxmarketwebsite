import {
  ArrowRight,
  CheckCircle2,
  Plane,
  Film,
  PlayCircle,
  Calendar,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

const secondaryCtas = [
  {
    Icon: Film,
    label: "Watch a sample reel",
    sub: "Real estate · construction · resort",
    href: "#drone-shots",
    accent: "#0891B2",
  },
  {
    Icon: Calendar,
    label: "See the 5-day pipeline",
    sub: "Booked → delivered, day by day",
    href: "#drone-process",
    accent: "#F97316",
  },
  {
    Icon: PlayCircle,
    label: "Industries we fly for",
    sub: "Real estate, weddings, brand films",
    href: "#drone-industries",
    accent: "#16A34A",
  },
]

const siblings = [
  { label: "Social Media Management", href: "/services/social-media/management" },
  { label: "Video Editing", href: "/services/social-media/video-editing" },
  { label: "Graphic Design", href: "/services/social-media/graphic-design" },
  { label: "TikTok Marketing", href: "/services/social-media/tiktok" },
  { label: "YouTube Growth", href: "/services/social-media/youtube" },
  { label: "Review Generation", href: "/services/social-media/review-generation" },
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Web Design", href: "/services/web-design" },
]

export function DroneFinalCta() {
  return (
    <section
      aria-labelledby="drone-final-cta-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[10%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container pb-20 sm:pb-24 lg:pb-28 relative z-10">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #ECFEFF 100%)",
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
                "radial-gradient(ellipse 80% 100% at 85% 0%, rgba(8,145,178,0.14), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0"
            style={{
              width: "55%",
              height: "55%",
              background:
                "radial-gradient(ellipse 80% 100% at 15% 100%, rgba(249,115,22,0.08), transparent 65%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy + availability widget */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #06B6D4 0%, #0891B2 100%)",
                    color: "#fff",
                    boxShadow:
                      "0 10px 24px rgba(8,145,178,0.40)",
                  }}
                >
                  <Plane className="w-8 h-8" strokeWidth={2.25} />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(8,145,178,0.10)",
                    color: "#0E7490",
                    border: "1px solid rgba(8,145,178,0.30)",
                  }}
                >
                  <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                  Free 15-min scoping call
                </span>
              </div>

              <h2
                id="drone-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Get your{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">drone shoot</span>
                </span>{" "}
                on the calendar this week.
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[540px]"
                style={{ color: "var(--muted)" }}
              >
                A senior pilot will scope your drone videography project in 15
                minutes — shot list, airspace, weather window, and a fixed flat
                rate. Quoted in 24 hours, on the calendar within 72.
              </p>

              {/* Best-window callout — replaces fake calendar */}
              <div
                className="mt-7 flex flex-wrap items-center gap-3 px-4 py-3 rounded-[var(--radius-sm)]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(8,145,178,0.08) 0%, rgba(249,115,22,0.08) 100%)",
                  border: "1px solid rgba(8,145,178,0.25)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #FB923C 0%, #F97316 100%)",
                    color: "#fff",
                    boxShadow: "0 2px 8px rgba(249,115,22,0.35)",
                  }}
                >
                  <Calendar className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <span
                  className="text-[13.5px] sm:text-[14.5px] font-semibold leading-snug"
                  style={{ color: "var(--ink)" }}
                >
                  Tell us your address &amp; preferred window — we&rsquo;ll come back with a quote and the next 2 golden-hour slots in your area within 24 hours.
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #06B6D4 0%, #0891B2 100%)",
                    color: "#fff",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.20), 0 8px 24px rgba(8,145,178,0.45)",
                  }}
                >
                  Book a free scoping call
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
                <a
                  href="/services/social-media"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] transition-colors hover:bg-[rgba(8,145,178,0.08)]"
                  style={{ color: "#0E7490" }}
                >
                  See all social services
                </a>
              </div>
            </div>

            {/* Right: secondary CTAs + sibling chips */}
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
                        >
                          {c.label}
                        </div>
                        <div
                          className="text-[12.5px] mt-0.5 leading-tight"
                          style={{ color: "var(--muted)" }}
                        >
                          {c.sub}
                        </div>
                      </div>
                      <ArrowRight
                        className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
                        strokeWidth={2.5}
                        style={{ color: "#0E7490" }}
                      />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Guarantees */}
              <ul
                className="mt-7 pt-6 space-y-2.5 border-t"
                style={{ borderColor: "var(--border-color)" }}
              >
                {[
                  "FAA Part 107 pilot on every shoot",
                  "$2M aviation liability insured",
                  "48-hour edited delivery (rush available)",
                  "Raw 5.1K footage included — you own it",
                ].map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-2.5 text-[13.5px] font-medium"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(8,145,178,0.10)",
                        color: "#0E7490",
                      }}
                    >
                      <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>

              {/* Trust line */}
              <div
                className="mt-6 flex items-center gap-2 text-[12px] font-semibold"
                style={{ color: "var(--muted)" }}
              >
                <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "#0E7490" }} />
                Certificate of insurance available on request.
              </div>

              {/* Sibling links */}
              <div
                className="mt-6 pt-5 border-t"
                style={{ borderColor: "var(--border-color)" }}
              >
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
                      className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold transition-colors hover:bg-[rgba(8,145,178,0.08)]"
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
