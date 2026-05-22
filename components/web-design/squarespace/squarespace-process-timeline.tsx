import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  ClipboardList,
  PenTool,
  Palette,
  Wrench,
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
    title: "Strategy + brand intake",
    body: "Kickoff call, sitemap draft, asset audit. We map the goals before we open Squarespace.",
    bullets: ["Goals + ICP locked", "Sitemap drafted"],
    Icon: ClipboardList,
    tag: "Kickoff",
  },
  {
    day: "Day 3",
    title: "Wireframes",
    body: "Homepage and four inner templates wireframed and approved before any visual design starts.",
    bullets: ["Mobile + desktop", "Two revision rounds"],
    Icon: PenTool,
    tag: "Plan",
  },
  {
    day: "Day 7",
    title: "Visual design in Squarespace",
    body: "Real builds in Fluid Engine — typography, color, sections — with a live preview link in your inbox.",
    bullets: ["Live preview link", "Brand-locked design"],
    Icon: Palette,
    tag: "Design",
  },
  {
    day: "Day 11",
    title: "Build-out + integrations",
    body: "All pages, SEO, schema, custom CSS, code injection, forms, GA4, GTM, and Pixel — wired and tested.",
    bullets: ["All pages built", "Tracking wired"],
    Icon: Wrench,
    tag: "Build",
  },
  {
    day: "Day 14",
    title: "QA + launch",
    body: "Lighthouse pass, mobile QA, DNS cutover, redirect plan, training video — and you go live.",
    bullets: ["Zero-downtime cutover", "Walkthrough video"],
    Icon: Rocket,
    tag: "Launch",
  },
]

export function SquarespaceProcessTimeline() {
  return (
    <section
      id="squarespace-process"
      aria-labelledby="squarespace-process-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[30%] left-[10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="14-day build process"
          heading={
            <span id="squarespace-process-heading">
              Your Squarespace website design,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">live in 14 days</span>.
              </span>
            </span>
          }
          paragraph="Every Squarespace website design we deliver runs on the same transparent schedule — so you know what's happening on your behalf, and exactly when."
        />

        <div className="mt-14 relative">
          {/* Connecting rail line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[3px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,11,11,0.6) 0%, rgba(22,119,255,0.7) 60%, rgba(34,197,94,0.7) 100%)",
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
                          ? "linear-gradient(180deg, #161616 0%, #0B0B0B 100%)"
                          : "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                      color: "#fff",
                      boxShadow:
                        idx === milestones.length - 1
                          ? "0 4px 14px rgba(16,185,129,0.35)"
                          : idx === 0
                          ? "0 4px 14px rgba(11,11,11,0.35)"
                          : "0 4px 14px rgba(22,119,255,0.35)",
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
                      style={{ color: "#0B0B0B" }}
                    >
                      {m.day}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: "rgba(22,119,255,0.08)",
                        color: "var(--accent)",
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
                          style={{ background: "#1677FF" }}
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
          <SecondaryButton asLink href="#squarespace-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
