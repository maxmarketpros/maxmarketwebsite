import { Layers } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

export function PartnersHero() {
  return (
    <section aria-labelledby="partners-hero-heading" className="relative">
      <div className="absolute inset-x-0 -top-20 h-[820px] pointer-events-none -z-0">
        <div
          className="absolute top-0 right-[-10%] w-[720px] h-[720px]"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(22,119,255,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[180px] left-[-10%] w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(116,211,255,0.16) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-12 sm:pt-14 lg:pt-16 pb-10 sm:pb-12">
        <nav
          aria-label="Breadcrumb"
          className="text-[12.5px] font-medium mb-6 sm:mb-8"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <a href="/" className="hover:text-[var(--accent)]">Home</a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/about" className="hover:text-[var(--accent)]">About</a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>Partners</li>
          </ol>
        </nav>

        <div
          className="max-w-[820px]"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <Pill>
            <Layers className="w-3.5 h-3.5" strokeWidth={2.5} />
            Our Stack
          </Pill>

          <h1
            id="partners-hero-heading"
            className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Partners and platforms we{" "}
            <span className="whitespace-nowrap">
              <span className="accent-underline">build with</span>.
            </span>
          </h1>

          <p
            className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[640px]"
            style={{ color: "var(--muted)" }}
          >
            We&apos;re hands-on with the tools that actually move the needle for small businesses.
            Here&apos;s the stack behind every campaign, site, and report we ship — no platform
            bias, no upsells, just the right tool for the job.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <PrimaryButton size="lg" asLink href="#contact">
              Book a strategy call
            </PrimaryButton>
            <SecondaryButton asLink href="/services">
              Browse all services
            </SecondaryButton>
          </div>

          <div className="mt-7 flex items-center gap-3 text-[13.5px]" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-1.5 font-semibold" style={{ color: "var(--accent)" }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ background: "var(--accent)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent)" }} />
              </span>
              70+ platforms
            </span>
            <span aria-hidden>·</span>
            <span>Updated continuously</span>
            <span aria-hidden>·</span>
            <a href="#core-stack" className="hover:underline font-medium" style={{ color: "var(--ink)" }}>
              Jump to the stack ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
