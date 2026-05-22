import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Bookmark, Repeat, ArrowRight, Anchor, Lightbulb, MousePointerClick } from "lucide-react"

interface Slide {
  index: number
  role: "hook" | "value" | "proof" | "cta"
  bg: string
  fg: string
  eyebrow: string
  title: React.ReactNode
  body?: string
  badgeColor?: string
}

const slides: Slide[] = [
  {
    index: 1,
    role: "hook",
    bg: "linear-gradient(180deg, #BE185D 0%, #0B132B 100%)",
    fg: "#fff",
    eyebrow: "01 · Hook",
    title: (
      <>
        The 3-second test that
        <br />
        <span style={{ color: "#FCD34D" }}>predicts an AC failure</span>
      </>
    ),
    body: "Save & swipe →",
    badgeColor: "#FCD34D",
  },
  {
    index: 2,
    role: "value",
    bg: "#FEF3C7",
    fg: "#0B132B",
    eyebrow: "02 · Listen",
    title: <>Stand 6 ft from the unit. Listen.</>,
    body: "If you hear a metallic click before the fan kicks on — that's a relay. Common, cheap fix.",
  },
  {
    index: 3,
    role: "value",
    bg: "#fff",
    fg: "#0B132B",
    eyebrow: "03 · Touch",
    title: <>Place a hand on the supply vent.</>,
    body: "Air should hit you in under 90 seconds. If it takes longer, your blower wheel is dirty.",
  },
  {
    index: 4,
    role: "value",
    bg: "linear-gradient(180deg, #1677FF 0%, #0B132B 100%)",
    fg: "#fff",
    eyebrow: "04 · Smell",
    title: <>Sniff the airflow.</>,
    body: "Musty = clogged drain pan. Burnt-toast = electrical. One is a $40 fix, one is urgent.",
  },
  {
    index: 5,
    role: "value",
    bg: "#FEF3C7",
    fg: "#0B132B",
    eyebrow: "05 · Look",
    title: <>Check the breaker after 10 min.</>,
    body: "If it's warm to the touch, your unit is pulling more amps than spec. Stop, then call.",
  },
  {
    index: 6,
    role: "proof",
    bg: "linear-gradient(180deg, #16A34A 0%, #064E3B 100%)",
    fg: "#fff",
    eyebrow: "06 · Proof",
    title: (
      <>
        1,200+ neighbors
        <br />
        rate us <span style={{ color: "#FCD34D" }}>4.9★</span>
      </>
    ),
    body: "Real reviews from real Tuesdays.",
  },
  {
    index: 7,
    role: "cta",
    bg: "linear-gradient(180deg, #0B132B 0%, #1677FF 100%)",
    fg: "#fff",
    eyebrow: "07 · CTA",
    title: (
      <>
        Tap the link
        <br />
        <span style={{ color: "#FCD34D" }}>book in 60 sec</span>
      </>
    ),
    body: "DM us &ldquo;TUNE&rdquo; for the spring deal.",
    badgeColor: "#FCD34D",
  },
]

const anatomy = [
  {
    Icon: Anchor,
    title: "Hook slide",
    color: "#BE185D",
    desc: "Stops the swipe. One contrarian or curiosity-led claim, sized for a 1.5-second decision.",
  },
  {
    Icon: Lightbulb,
    title: "Value slides",
    color: "#1677FF",
    desc: "4 to 5 slides of step-by-step takeaway. Designed for saves and shares, not vanity reach.",
  },
  {
    Icon: MousePointerClick,
    title: "CTA slide",
    color: "#16A34A",
    desc: "One ask, one action. DM keyword, link in bio, or tap to call — never more than one path.",
  },
]

export function GraphicDesignCarousel() {
  return (
    <section
      aria-labelledby="graphic-design-carousel-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Carousels"
          heading={
            <span id="graphic-design-carousel-heading">
              Carousels built to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">save & share</span>.
              </span>
            </span>
          }
          paragraph="Carousel design is one of the highest-leverage formats on Instagram and LinkedIn — saves and shares signal the algorithm to push you further. Every carousel ships with a real architecture. Pair it with our content engine on the management page."
        />

        <div className="mt-4 flex justify-center">
          <p
            className="text-[14.5px] text-center max-w-[560px]"
            style={{ color: "var(--muted)" }}
          >
            Scroll the slides below — you&rsquo;re looking at a real 7-slide
            carousel architecture.{" "}
            <a
              href="/services/social-media/management"
              className="font-semibold underline decoration-dotted underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              Add carousels to a content plan →
            </a>
          </p>
        </div>

        {/* Carousel viewport */}
        <div
          className="mt-10"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Progress bar */}
          <div className="max-w-[920px] mx-auto px-2">
            <div className="flex items-center gap-1">
              {slides.map((s, i) => (
                <span
                  key={s.index}
                  className="h-1 rounded-full"
                  style={{
                    flex: i === 0 ? 1.4 : 1,
                    background:
                      i === 0
                        ? "var(--ink)"
                        : i === 1
                          ? "rgba(11,19,43,0.5)"
                          : "rgba(11,19,43,0.18)",
                  }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
              <span className="inline-flex items-center gap-1.5">
                <Bookmark className="w-3 h-3" strokeWidth={2.5} />
                Save · Share · Swipe
              </span>
              <span>1 of 7</span>
            </div>
          </div>

          {/* Slides scroll-snap */}
          <div
            className="mt-5 -mx-4 sm:mx-0 overflow-x-auto pb-6 scroll-pl-4 sm:scroll-pl-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <ul
              className="flex gap-4 sm:gap-5 px-4 sm:px-6"
              style={{ minWidth: "fit-content" }}
            >
              {slides.map((s) => (
                <li
                  key={s.index}
                  className="shrink-0"
                  style={{
                    scrollSnapAlign: "start",
                    width: "min(78vw, 320px)",
                  }}
                >
                  <SlideCard slide={s} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Anatomy breakdown */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-[1080px] mx-auto">
          {anatomy.map((a) => (
            <div
              key={a.title}
              className="card-surface card-surface-hover p-5 sm:p-6 flex gap-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <span
                className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center"
                style={{
                  background: `${a.color}1A`,
                  color: a.color,
                  border: `1px solid ${a.color}33`,
                }}
              >
                <a.Icon className="w-5 h-5" strokeWidth={2.25} />
              </span>
              <div>
                <h3
                  className="text-[16px] font-bold leading-tight mb-1"
                  style={{ color: "var(--ink)" }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Need 4 carousels next month?
          </span>
          <SecondaryButton asLink href="/contact">
            Order a carousel set
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <article
      className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden border"
      style={{
        background: slide.bg,
        borderColor: "var(--border-color)",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.10), 0 12px 32px rgba(17,35,68,0.14)",
      }}
    >
      {/* Page badge */}
      <span
        className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.14em] z-10"
        style={{
          background:
            slide.badgeColor ?? (slide.fg === "#fff" ? "#fff" : "#0B132B"),
          color:
            slide.badgeColor === "#FCD34D"
              ? "#0B132B"
              : slide.fg === "#fff"
                ? "#0B132B"
                : "#fff",
        }}
      >
        {slide.eyebrow}
      </span>

      {/* Decorative corners */}
      <span
        aria-hidden
        className="absolute top-3 right-3 w-6 h-6 rounded-full"
        style={{
          border: `2px solid ${slide.fg}`,
          opacity: 0.18,
        }}
      />

      <div className="absolute inset-x-4 top-1/3 -translate-y-1/4">
        <div
          className="text-[18px] sm:text-[22px] font-extrabold leading-[1.05] tracking-[-0.02em]"
          style={{ color: slide.fg }}
        >
          {slide.title}
        </div>
        {slide.body && (
          <p
            className="mt-3 text-[12px] sm:text-[13px] font-medium leading-[1.45]"
            style={{ color: slide.fg, opacity: 0.86 }}
            dangerouslySetInnerHTML={{ __html: slide.body }}
          />
        )}
      </div>

      {/* Bottom row */}
      <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em]"
          style={{ color: slide.fg, opacity: 0.78 }}
        >
          {slide.role === "hook" && (
            <>
              <Repeat className="w-3 h-3" strokeWidth={2.5} />
              swipe
            </>
          )}
          {slide.role === "value" && (
            <>
              <Bookmark className="w-3 h-3" strokeWidth={2.5} />
              save
            </>
          )}
          {slide.role === "proof" && (
            <>
              <Bookmark className="w-3 h-3" strokeWidth={2.5} />
              proof
            </>
          )}
          {slide.role === "cta" && (
            <>
              <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
              tap
            </>
          )}
        </span>
        <span
          className="text-[10px] font-mono"
          style={{ color: slide.fg, opacity: 0.6 }}
        >
          {slide.index}/7
        </span>
      </div>
    </article>
  )
}
