import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  ClipboardList,
  Palette,
  LayoutGrid,
  Database,
  Sparkles,
  Rocket,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WF_BLUE = "#146EF5"

type Milestone = {
  day: string
  title: string
  body: string
  bullets: string[]
  Icon: LucideIcon
  tag: string
}

const milestones: Milestone[] = [
  {
    day: "Day 1–2",
    title: "Strategy & sitemap",
    body: "Kickoff call, page tree, IA, content audit. We map every URL before opening Webflow Designer.",
    bullets: ["ICP + goals locked", "Sitemap + URL map"],
    Icon: ClipboardList,
    tag: "Kickoff",
  },
  {
    day: "Day 3–4",
    title: "Style guide in Designer",
    body: "Color, typography, spacing tokens, button variants, and a Symbol library — built once, reused on every page.",
    bullets: ["Design tokens", "Symbols + variables"],
    Icon: Palette,
    tag: "System",
  },
  {
    day: "Day 5–8",
    title: "Designer build",
    body: "Real builds in Webflow — every page, every breakpoint, every interaction — with a live .webflow.io staging link.",
    bullets: ["Live staging URL", "All 4 breakpoints"],
    Icon: LayoutGrid,
    tag: "Design",
  },
  {
    day: "Day 9–10",
    title: "CMS Collections wired",
    body: "Service, Area, Case Study, and Author Collections modeled and populated. Dynamic templates render from a single source of truth.",
    bullets: ["54 dynamic pages", "Multi-ref relationships"],
    Icon: Database,
    tag: "CMS",
  },
  {
    day: "Day 11–12",
    title: "Interactions + SEO",
    body: "Animation timeline, JSON-LD schema, alt text, clean slugs, sitemap.xml, GA4 + GTM + Pixel — everything wired and validated.",
    bullets: ["5 interaction layers", "Schema everywhere"],
    Icon: Sparkles,
    tag: "Tune",
  },
  {
    day: "Day 13–14",
    title: "QA + publish",
    body: "Lighthouse pass, redirect map, DNS cutover, 30-day support — and the site goes live on Webflow's CDN.",
    bullets: ["Zero-downtime cutover", "Lighthouse 95+ pass"],
    Icon: Rocket,
    tag: "Launch",
  },
]

export function WebflowProcessTimeline() {
  return (
    <section
      id="webflow-process"
      aria-labelledby="webflow-process-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[30%] left-[10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,110,245,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="14-day delivery"
          heading={
            <span id="webflow-process-heading">
              Kickoff to live in{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  14 days
                </span>
                .
              </span>
            </span>
          }
          paragraph="Every Webflow website design we deliver runs on the same transparent schedule — six milestones, one shared Loom, zero scope creep."
        />

        <div className="mt-14 relative">
          {/* Connecting rail */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[24px] left-[8%] right-[8%] h-[3px] rounded-full z-0"
            style={{
              background: `linear-gradient(90deg, rgba(11,19,43,0.6) 0%, ${WF_BLUE} 50%, rgba(34,197,94,0.7) 100%)`,
            }}
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-3 relative items-stretch">
            {milestones.map((m, idx) => (
              <li
                key={m.day}
                className="relative flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
                }}
              >
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className="relative w-[48px] h-[48px] rounded-full flex items-center justify-center z-10"
                    style={{
                      background:
                        idx === milestones.length - 1
                          ? "linear-gradient(180deg, #34D399 0%, #10B981 100%)"
                          : idx === 0
                          ? "linear-gradient(180deg, #1F2937 0%, #0B132B 100%)"
                          : `linear-gradient(180deg, #2A7BF7 0%, ${WF_BLUE} 100%)`,
                      color: "#fff",
                      boxShadow:
                        idx === milestones.length - 1
                          ? "0 4px 14px rgba(16,185,129,0.35)"
                          : idx === 0
                          ? "0 4px 14px rgba(11,19,43,0.35)"
                          : "0 4px 14px rgba(20,110,245,0.35)",
                      border: "4px solid #fff",
                    }}
                  >
                    <m.Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </div>
                </div>

                <div
                  className="mt-4 card-surface card-surface-hover p-4 relative flex-1"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.day}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: "rgba(20,110,245,0.10)",
                        color: WF_BLUE,
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[15.5px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="mt-2 text-[13px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.body}
                  </p>
                  <ul
                    className="mt-3 pt-3 border-t space-y-1"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    {m.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[12.5px] font-medium flex items-center gap-1.5"
                        style={{ color: "var(--ink)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: WF_BLUE }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Lock your kickoff date
          </PrimaryButton>
          <SecondaryButton asLink href="#webflow-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
