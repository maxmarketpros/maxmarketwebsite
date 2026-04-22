"use client"

import { Pill } from "./ui/pill"
import { PrimaryButton } from "./ui/primary-button"
import { SecondaryButton } from "./ui/secondary-button"
import { MockupPanel } from "./ui/mockup-panel"
import { Shield, Sparkles, Wrench } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Strong right-side blue glow */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.06) 40%, transparent 70%)',
          }}
        />
        {/* Secondary cyan glow right */}
        <div
          className="absolute top-[20%] right-[5%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(116,211,255,0.15) 0%, transparent 60%)',
          }}
        />
        {/* Subtle left glow */}
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(22,119,255,0.05) 0%, transparent 70%)',
          }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div
            className="max-w-[560px]"
            style={{ animation: 'fadeInUp 0.8s ease-out both' }}
          >
            {/* Pill */}
            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              <span className="sm:hidden">Trusted by 500+ businesses</span>
              <span className="hidden sm:inline">Trusted by 500+ local service businesses</span>
            </Pill>

            {/* H1 */}
            <h1
              className="mt-6 text-[42px] xs:text-[46px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] text-balance"
              style={{ color: 'var(--ink)' }}
            >
              <span className="whitespace-nowrap">
                Grow on <span className="accent-underline">Google</span>.
              </span>{' '}
              Get more calls &amp;{' '}
              <span className="whitespace-nowrap">booked jobs.</span>
            </h1>

            {/* Paragraph */}
            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[480px]"
              style={{ color: 'var(--muted)' }}
            >
              Done‑for‑you local SEO, web design, and lead generation built for service businesses.
              Convert more leads with reviews, messaging, and fast follow‑up tools — all in one place.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free demo
              </PrimaryButton>
              <SecondaryButton asLink href="#pricing">
                See plans &amp; pricing
              </SecondaryButton>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                { icon: <Shield className="w-4 h-4" />, text: 'Free strategy call' },
                { icon: <Wrench className="w-4 h-4" />, text: 'Done‑for‑you setup' },
                { icon: <Sparkles className="w-4 h-4" />, text: 'Built for service businesses' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-[14px] font-medium"
                  style={{ color: 'var(--muted)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Mockup */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
          >
            <MockupPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
