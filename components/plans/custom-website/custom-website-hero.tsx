import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Search,
  Brush,
  ShieldCheck,
} from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { WebsiteMockup, FloatingProofChip } from "./website-mockup"

const PROOF_PILLS = [
  { icon: Brush,        label: "Designed for your brand" },
  { icon: Smartphone,   label: "Works on every phone" },
  { icon: Search,       label: "Shows up on Google" },
  { icon: ShieldCheck,  label: "We handle the tech" },
]

export function CustomWebsiteHero() {
  return (
    <section
      id="custom-website-hero"
      aria-labelledby="custom-website-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient gradients */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[640px] h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-[-10%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.22) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.10) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[13px] mb-7"
          style={{ color: "var(--muted)" }}
        >
          <Link href="/plans" className="hover:text-[var(--accent)] transition-colors">
            All plans
          </Link>
          <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.2} />
          <span style={{ color: "var(--ink)" }} className="font-semibold">
            Custom website
          </span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="min-w-0" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(22,119,255,0.10) 0%, rgba(116,211,255,0.18) 100%)",
                color: "var(--accent)",
                border: "1px solid rgba(22,119,255,0.22)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--accent)",
                  animation: "subtlePulse 2.4s ease-in-out infinite",
                }}
              />
              Custom websites · One-time build
            </span>

            <h1
              id="custom-website-hero-heading"
              className="mt-5 text-[36px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Get a website that{" "}
              <span className="whitespace-nowrap">
                books more <span className="accent-underline">jobs</span>.
              </span>
            </h1>

            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              Custom-designed websites for local service businesses. Built for
              phones, made to be found on Google, and dead-simple to keep up to
              date. We handle the tech &mdash; you handle the calls.
            </p>

            {/* Proof pills */}
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {PROOF_PILLS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                    color: "var(--ink)",
                    boxShadow: "0 1px 2px var(--shadow-color)",
                  }}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    strokeWidth={2.4}
                    style={{ color: "var(--accent)" }}
                  />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#tiers">
                See pricing
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.4} />
              </PrimaryButton>
              <SecondaryButton asLink href="/contact/schedule">
                Book a free call
              </SecondaryButton>
            </div>

            <p className="mt-6 text-[13.5px]" style={{ color: "var(--muted)" }}>
              From <span className="font-bold" style={{ color: "var(--ink)" }}>$1,200</span>{" "}
              one-time &middot; bigger site? Just ask.
            </p>
          </div>

          {/* RIGHT — Website mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.15s both" }}
          >
            <WebsiteMockup variant="hero" businessName="Honest Plumbing" />

            <FloatingProofChip
              icon="star"
              label="4.9 on Google"
              accent="#F59E0B"
              position={{ top: "-12px", left: "-16px" }}
            />
            <FloatingProofChip
              icon="phone"
              label="+24 calls this week"
              accent="#22C55E"
              position={{ bottom: "-12px", right: "-12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
