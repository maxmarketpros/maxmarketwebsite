import { Clock, Rocket, Compass } from "lucide-react"

const timeline = [
  {
    Icon: Clock,
    badge: "Mar 19, 2020 · 12:01 AM",
    title: "California stay-at-home order",
    body: "Small business doors close statewide. Millions of futures suddenly uncertain.",
  },
  {
    Icon: Rocket,
    badge: "Mar 19, 2020 · Day one",
    title: "Max Market Pros opens for business",
    body: "The same day. The same hour. Our first official day on the clock.",
    accent: true,
  },
  {
    Icon: Compass,
    badge: "Today",
    title: "Five+ years serving businesses nationwide",
    body: "Still here, still independent, still picking up the phone.",
  },
]

export function OurStoryBeginning() {
  return (
    <section
      aria-labelledby="our-story-beginning-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container relative z-10 section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <p
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--accent)" }}
            >
              Chapter 01 &middot; The beginning
            </p>
            <h2
              id="our-story-beginning-heading"
              className="mt-3 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              How Max Market Pros began.
            </h2>
            <div
              className="mt-6 space-y-5 text-[16.5px] sm:text-[17.5px] leading-[1.7]"
              style={{ color: "var(--muted)" }}
            >
              <p>
                On March 19th, California was ordered to close the doors of
                small businesses, stay home, and limit any in-person contact
                with one another. That very same day &mdash;{" "}
                <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                  March 19th, 2020
                </span>{" "}
                &mdash; was our very first official day in business.
              </p>
              <p>
                We found ourselves, along with millions of others, uncertain of
                what would come next.
              </p>
            </div>
          </div>

          <div
            className="relative rounded-[var(--radius-xl)] p-6 sm:p-8"
            style={{
              background: "#fff",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.06), 0 8px 32px rgba(17,35,68,0.08)",
              animation: "fadeInUp 0.9s ease-out 0.1s both",
            }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.14em] mb-5"
              style={{ color: "var(--muted)" }}
            >
              That week, in three frames
            </p>

            <ol className="relative space-y-6">
              <span
                aria-hidden
                className="absolute left-[19px] top-3 bottom-3 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(22,119,255,0.35) 0%, rgba(116,211,255,0.20) 100%)",
                }}
              />
              {timeline.map((t) => (
                <li key={t.title} className="relative flex gap-4">
                  <span
                    className="relative z-10 shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: t.accent
                        ? "linear-gradient(135deg, #74D3FF 0%, #1677FF 60%, #0D5FD9 100%)"
                        : "#fff",
                      border: t.accent
                        ? "1px solid rgba(22,119,255,0.35)"
                        : "1px solid var(--border-color)",
                      boxShadow: t.accent
                        ? "0 4px 12px rgba(22,119,255,0.35)"
                        : "0 1px 3px rgba(17,35,68,0.06)",
                      color: t.accent ? "#fff" : "var(--accent)",
                    }}
                  >
                    <t.Icon className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                  <div className="pt-1">
                    <p
                      className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        color: t.accent ? "var(--accent)" : "var(--muted)",
                      }}
                    >
                      {t.badge}
                    </p>
                    <p
                      className="mt-1 text-[15.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {t.title}
                    </p>
                    <p
                      className="mt-1.5 text-[14px] leading-[1.6]"
                      style={{ color: "var(--muted)" }}
                    >
                      {t.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
