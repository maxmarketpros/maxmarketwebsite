import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  ClipboardList,
  Wrench,
  Palette,
  Search,
  Rocket,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WP_BLUE = "#00749C"

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
    title: "Strategy & audit",
    body: "Kickoff call, sitemap draft, content + SEO audit. We map goals before opening WordPress.",
    bullets: ["ICP + goals locked", "Sitemap drafted"],
    Icon: ClipboardList,
    tag: "Kickoff",
  },
  {
    day: "Day 3",
    title: "Plugin & theme architecture",
    body: "Theme tier picked, plugin stack chosen, hosting provisioned. The full stack — wired before any pixels move.",
    bullets: ["Theme path locked", "12-plugin stack staged"],
    Icon: Wrench,
    tag: "Stack",
  },
  {
    day: "Day 7",
    title: "Design + Gutenberg blocks",
    body: "Real builds in WordPress — block patterns, typography, color, sections — with a live staging preview link in your inbox.",
    bullets: ["Live staging link", "Brand-locked design"],
    Icon: Palette,
    tag: "Design",
  },
  {
    day: "Day 11",
    title: "SEO + performance hardening",
    body: "Schema injected, Yoast / Rank Math configured, WP Rocket cached, Wordfence locked, GA4 + GTM + Pixel wired.",
    bullets: ["Schema everywhere", "Lighthouse 90+ pass"],
    Icon: Search,
    tag: "Tune",
  },
  {
    day: "Day 14",
    title: "Launch + 30-day support",
    body: "DNS cutover, redirect map, training video, indexing check — and you go live with 30 days of free post-launch support.",
    bullets: ["Zero-downtime cutover", "Walkthrough video"],
    Icon: Rocket,
    tag: "Launch",
  },
]

export function WordpressProcessTimeline() {
  return (
    <section
      id="wordpress-process"
      aria-labelledby="wordpress-process-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[30%] left-[10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,116,156,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="14-day delivery"
          heading={
            <span id="wordpress-process-heading">
              Kickoff to live in{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)",
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
          paragraph="Every WordPress website design we deliver runs on the same transparent schedule — so you know what's happening on your behalf, and exactly when."
        />

        <div className="mt-14 relative">
          {/* Connecting rail */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[3px] rounded-full z-0"
            style={{
              background: `linear-gradient(90deg, rgba(11,19,43,0.6) 0%, ${WP_BLUE} 60%, rgba(34,197,94,0.7) 100%)`,
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
                          ? "linear-gradient(180deg, #1F2937 0%, #0B132B 100%)"
                          : `linear-gradient(180deg, #1893BD 0%, ${WP_BLUE} 100%)`,
                      color: "#fff",
                      boxShadow:
                        idx === milestones.length - 1
                          ? "0 4px 14px rgba(16,185,129,0.35)"
                          : idx === 0
                          ? "0 4px 14px rgba(11,19,43,0.35)"
                          : "0 4px 14px rgba(0,116,156,0.35)",
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
                      style={{ color: "var(--ink)" }}
                    >
                      {m.day}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: "rgba(0,116,156,0.10)",
                        color: WP_BLUE,
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
                          style={{ background: WP_BLUE }}
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
          <SecondaryButton asLink href="#wordpress-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
