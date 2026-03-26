"use client"

import { SectionHeader } from "./ui/section-header"
import { FeatureCard } from "./ui/feature-card"
import {
  Globe,
  MapPin,
  Headphones,
  Share2,
  Palette,
  Search,
  Server,
  BarChart3,
  Zap,
  Target,
  Building2,
  Inbox,
  Bot,
  PieChart,
  Users,
  Megaphone,
} from "lucide-react"

export function InfrastructureSection() {
  return (
    <section id="features" className="relative">
      {/* Subtle noise */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="section-container relative z-10" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
        {/* Section intro */}
        <SectionHeader
          pill="Our Digital Infrastructure"
          heading={
            <>
              Built to rank.
              <br />
              Engineered to <span className="accent-underline">close</span>.
            </>
          }
          paragraph="We provide the complete marketing engine required to dominate local search and capture every lead across your territory."
        />

        {/* Three feature cards */}
        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ animation: 'fadeInUp 0.7s ease-out both' }}
        >
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Custom SEO Websites"
            description="Fast, mobile‑first, high‑converting websites designed to turn local search traffic into booked jobs."
            bullets={[
              "High‑conversion design",
              "On‑page technical SEO",
              "Fully managed premium hosting",
            ]}
          />
          <FeatureCard
            icon={<MapPin className="w-6 h-6" />}
            title="Google Map Pack Dominance"
            description="Secure top positions in the map pack where targeted local customers are ready to call."
            bullets={[
              "Keyword rank tracking",
              "Weekly profile updates",
              "Local citation building",
            ]}
          />
          <FeatureCard
            icon={<Headphones className="w-6 h-6" />}
            title="CRM & Missed Call Tracking"
            description="Track every lead and automatically text back when a call is missed — never lose a job again."
            bullets={[
              "Unified communications inbox",
              "Automated lead follow‑up",
              "ROI & pipeline tracking",
            ]}
          />
        </div>

        {/* Wide social media card */}
        <div className="mt-6" style={{ animation: 'fadeInUp 0.7s ease-out 0.15s both' }}>
          <div className="card-surface card-surface-hover overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left — illustration area */}
              <div
                className="p-8 lg:p-10 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-bg) 0%, var(--bg) 100%)',
                }}
              >
                <div className="grid grid-cols-2 gap-4 max-w-[320px] w-full">
                  {[
                    { icon: <Palette className="w-6 h-6" />, label: "Content" },
                    { icon: <Target className="w-6 h-6" />, label: "Targeting" },
                    { icon: <Users className="w-6 h-6" />, label: "Engagement" },
                    { icon: <Megaphone className="w-6 h-6" />, label: "Authority" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="card-surface rounded-[var(--radius-sm)] p-5 flex flex-col items-center gap-3 text-center"
                    >
                      <div
                        className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center"
                        style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div
                  className="w-12 h-12 rounded-[var(--radius-xs)] flex items-center justify-center mb-5"
                  style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                >
                  <Share2 className="w-6 h-6" />
                </div>
                <h3
                  className="text-[24px] sm:text-[28px] font-bold leading-[1.2] tracking-[-0.01em]"
                  style={{ color: 'var(--ink)' }}
                >
                  Complete Social Media Management
                </h3>
                <p
                  className="mt-3 text-[16px] leading-[1.6] mb-6"
                  style={{ color: 'var(--muted)' }}
                >
                  Build authority and stay top of mind with a fully managed social presence that drives brand awareness and local engagement.
                </p>
                <ul className="space-y-3">
                  {[
                    "Custom branded content",
                    "Local audience targeting",
                    "Proactive engagement",
                    "Brand authority building",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px]" style={{ color: 'var(--ink)' }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
