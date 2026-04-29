import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Eye,
  PlayCircle,
  Sparkles,
} from "lucide-react"

const availabilitySlots = [
  { day: "Wed", date: "Apr 30", time: "10:00 AM", taken: false },
  { day: "Thu", date: "May 1", time: "2:30 PM", taken: false },
  { day: "Fri", date: "May 2", time: "11:00 AM", taken: true },
  { day: "Mon", date: "May 5", time: "9:00 AM", taken: false },
]

const secondaryCtas = [
  {
    Icon: Calendar,
    label: "See sample content calendar",
    sub: "Real week from a home-services account",
    href: "#management-cadence",
    accent: "#1677FF",
  },
  {
    Icon: Eye,
    label: "Compare plans & pricing",
    sub: "What&rsquo;s included at each tier",
    href: "/#pricing",
    accent: "#22C55E",
  },
  {
    Icon: PlayCircle,
    label: "Browse client case studies",
    sub: "12-month dashboards by industry",
    href: "#management-results",
    accent: "#EC4899",
  },
]

const siblings = [
  { label: "TikTok Marketing", href: "/services/social-media/tiktok" },
  { label: "YouTube Growth", href: "/services/social-media/youtube" },
  { label: "Video Editing", href: "/services/social-media/video-editing" },
  { label: "Graphic Design", href: "/services/social-media/graphic-design" },
  { label: "Drone Videography", href: "/services/social-media/drone" },
  { label: "Review Generation", href: "/services/social-media/review-generation" },
  { label: "Local SEO", href: "/services/seo/local" },
  { label: "Web Design", href: "/services/web-design" },
]

export function ManagementFinalCta() {
  return (
    <section
      aria-labelledby="management-final-cta-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[10%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container pb-20 sm:pb-24 lg:pb-28 relative z-10">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)",
            border: "1px solid var(--border-color)",
            boxShadow:
              "0 1px 3px rgba(17,35,68,0.06), 0 30px 80px rgba(17,35,68,0.10)",
          }}
        >
          {/* Soft corner aura */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0"
            style={{
              width: "55%",
              height: "55%",
              background:
                "radial-gradient(ellipse 80% 100% at 85% 0%, rgba(22,119,255,0.10), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0"
            style={{
              width: "55%",
              height: "55%",
              background:
                "radial-gradient(ellipse 80% 100% at 15% 100%, rgba(236,72,153,0.06), transparent 65%)",
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
                      "linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)",
                    border: "1px solid rgba(22,119,255,0.25)",
                    filter:
                      "drop-shadow(0 10px 24px rgba(22,119,255,0.20))",
                  }}
                >
                  <img
                    src={icons8Url("CNwCliesWEeX", 256)}
                    alt=""
                    width={54}
                    height={54}
                    loading="lazy"
                    decoding="async"
                    className="w-[54px] h-[54px] object-contain"
                  />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                    border: "1px solid rgba(22,119,255,0.25)",
                  }}
                >
                  <Sparkles className="w-3 h-3" strokeWidth={2.5} />
                  Free strategy call
                </span>
              </div>

              <h2
                id="management-final-cta-heading"
                className="mt-6 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Hand off your social{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">today</span>.
                </span>
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[540px]"
                style={{ color: "var(--muted)" }}
              >
                A senior strategist will scope your social media management
                plan in 25 minutes — content pillars, posting cadence, team
                allocation, and a fixed monthly fee. Real plan, zero pressure.
              </p>

              {/* Availability widget */}
              <div
                className="mt-7 p-4 sm:p-5 rounded-[var(--radius-lg)]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  boxShadow:
                    "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    <Clock className="w-3 h-3" strokeWidth={2.5} />
                    This week&rsquo;s availability
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: "rgba(34,197,94,0.12)",
                      color: "#15803D",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#22C55E" }}
                    />
                    3 spots open
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availabilitySlots.map((s, i) => (
                    <a
                      key={i}
                      href="#contact"
                      aria-disabled={s.taken}
                      className={`relative px-2.5 py-2.5 rounded-[var(--radius-sm)] text-center transition-all ${
                        s.taken
                          ? "opacity-40 pointer-events-none"
                          : "hover:translate-y-[-1px] hover:shadow-[0_4px_14px_rgba(22,119,255,0.18)]"
                      }`}
                      style={{
                        background: s.taken ? "var(--bg)" : "var(--surface)",
                        border: s.taken
                          ? "1px solid var(--border-color)"
                          : "1px solid rgba(22,119,255,0.30)",
                      }}
                    >
                      <div
                        className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                        style={{
                          color: s.taken ? "var(--muted)" : "var(--accent)",
                        }}
                      >
                        {s.day} · {s.date}
                      </div>
                      <div
                        className="text-[13.5px] font-bold mt-0.5"
                        style={{ color: "var(--ink)" }}
                      >
                        {s.time}
                      </div>
                      {s.taken && (
                        <span
                          className="absolute top-1 right-1 text-[9px] font-bold uppercase"
                          style={{ color: "var(--muted)" }}
                        >
                          Booked
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-sm)] font-semibold text-[17px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                    color: "#fff",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.20), 0 8px 24px rgba(22,119,255,0.45)",
                  }}
                >
                  Book a free strategy call
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
                        <c.Icon className="w-4.5 h-4.5" strokeWidth={2.25} />
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

              {/* Guarantees */}
              <ul
                className="mt-7 pt-6 space-y-2.5 border-t"
                style={{ borderColor: "var(--border-color)" }}
              >
                {[
                  "Month-to-month after 90 days",
                  "Approve every post before it goes live",
                  "You own all content & raw footage",
                ].map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-2.5 text-[13.5px] font-medium"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      <CheckCircle2
                        className="w-3 h-3"
                        strokeWidth={3}
                      />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>

              {/* Sibling links */}
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
