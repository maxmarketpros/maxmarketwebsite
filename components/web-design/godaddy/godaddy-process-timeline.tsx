import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  ClipboardCheck,
  PenTool,
  Palette,
  SearchCheck,
  Rocket,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

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
    day: "Day 1",
    title: "Audit + intake",
    body: "We grade your existing GoDaddy site on speed, SEO, and conversion, and align on goals before opening the editor.",
    bullets: ["Lighthouse baseline", "Goals + ICP locked"],
    Icon: ClipboardCheck,
    tag: "Audit",
  },
  {
    day: "Day 3",
    title: "Strategy + wireframe",
    body: "Sitemap and wireframes for homepage and four inner templates — approved before any visual design starts.",
    bullets: ["Mobile + desktop", "Two revision rounds"],
    Icon: PenTool,
    tag: "Plan",
  },
  {
    day: "Day 7",
    title: "Design in GoDaddy",
    body: "Real builds inside Websites + Marketing or Managed WordPress — typography, color, hero, sections, with a live staging link.",
    bullets: ["Live staging link", "Brand-locked design"],
    Icon: Palette,
    tag: "Design",
  },
  {
    day: "Day 11",
    title: "SEO + speed pass",
    body: "Schema, metas, alt text, image compression, font subsetting, GA4, GTM, and Pixel — wired and tested.",
    bullets: ["Schema on every page", "Lighthouse 90+ target"],
    Icon: SearchCheck,
    tag: "Tune",
  },
  {
    day: "Day 14",
    title: "Launch + handoff",
    body: "DNS cutover with you on the call, redirect plan, training video, and a 30-day support window post-launch.",
    bullets: ["Zero-downtime cutover", "Walkthrough video"],
    Icon: Rocket,
    tag: "Launch",
  },
]

export function GoDaddyProcessTimeline() {
  return (
    <section
      id="godaddy-process"
      aria-labelledby="godaddy-process-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[30%] left-[10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(27,219,219,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="14-day build process"
          heading={
            <span id="godaddy-process-heading">
              How our GoDaddy website design process{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">ships in 14 days</span>.
              </span>
            </span>
          }
          paragraph="Every GoDaddy website design we deliver runs on the same transparent schedule — so you know what's happening on your behalf, and exactly when."
        />

        <div className="mt-14 relative">
          {/* Connecting rail line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[3px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,19,43,0.6) 0%, rgba(27,219,219,0.7) 60%, rgba(34,197,94,0.7) 100%)",
            }}
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative items-stretch">
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
                          ? "linear-gradient(180deg, #11203F 0%, #0B132B 100%)"
                          : "linear-gradient(180deg, #1BDBDB 0%, #0FB3B3 100%)",
                      color:
                        idx === 0 || idx === milestones.length - 1
                          ? "#fff"
                          : "#0B132B",
                      boxShadow:
                        idx === milestones.length - 1
                          ? "0 4px 14px rgba(16,185,129,0.35)"
                          : idx === 0
                          ? "0 4px 14px rgba(11,19,43,0.35)"
                          : "0 4px 14px rgba(27,219,219,0.35)",
                      border: "4px solid #fff",
                    }}
                  >
                    <m.Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                  </div>
                </div>

                <div
                  className="mt-4 card-surface card-surface-hover p-5 relative flex-1"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: "#0B132B" }}
                    >
                      {m.day}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: "rgba(27,219,219,0.12)",
                        color: "#0FB3B3",
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[16px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-[1.55]"
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
                          style={{ background: "#1BDBDB" }}
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
            Start your 14-day build
          </PrimaryButton>
          <SecondaryButton asLink href="#godaddy-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
