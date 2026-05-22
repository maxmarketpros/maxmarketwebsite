import Link from "next/link"
import { Search, Palette, Share2, Megaphone, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Pillar = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  body: string
  href: string
  accent: string
  accentSoft: string
}

const pillars: Pillar[] = [
  {
    Icon: Search,
    title: "SEO",
    body: "Local SEO, on-page, technical, backlinks, AI search — the full ranking stack.",
    href: "/services/seo",
    accent: "#1677FF",
    accentSoft: "rgba(22,119,255,0.10)",
  },
  {
    Icon: Palette,
    title: "Web Design",
    body: "Custom-coded Signature builds and platform sites on Webflow, WordPress, and more.",
    href: "/services/web-design",
    accent: "#7C3AED",
    accentSoft: "rgba(124,58,237,0.10)",
  },
  {
    Icon: Share2,
    title: "Social Media",
    body: "Management, reviews, graphic design, video editing, TikTok, YouTube — all in-house.",
    href: "/services/social-media",
    accent: "#0EA5E9",
    accentSoft: "rgba(14,165,233,0.10)",
  },
  {
    Icon: Megaphone,
    title: "Paid Ads",
    body: "Google, Facebook, and Instagram ads run by certified buyers — not interns.",
    href: "/services/paid-ads",
    accent: "#22C55E",
    accentSoft: "rgba(34,197,94,0.10)",
  },
]

export function AboutServicesPillars() {
  return (
    <section
      aria-labelledby="about-services-pillars-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-[-10%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What we do"
          heading={
            <span id="about-services-pillars-heading">
              Four pillars. <span className="accent-underline">One team</span>.
            </span>
          }
          paragraph="Every service ships from the same Irvine office, by the same specialists, on the same dashboard."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <Link
              key={p.title}
              href={p.href}
              className="group card-surface card-surface-hover p-6 sm:p-7 flex flex-col"
              style={{
                animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.08}s both`,
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span
                className="w-12 h-12 rounded-[12px] inline-flex items-center justify-center shrink-0"
                style={{
                  background: p.accentSoft,
                  border: `1px solid ${p.accent}33`,
                  color: p.accent,
                }}
              >
                <p.Icon className="w-5.5 h-5.5" strokeWidth={2.25} />
              </span>

              <h3
                className="mt-5 text-[22px] sm:text-[24px] font-bold leading-tight tracking-[-0.015em]"
                style={{ color: "var(--ink)" }}
              >
                {p.title}
              </h3>

              <p
                className="mt-2 text-[14.5px] leading-[1.55] flex-1"
                style={{ color: "var(--muted)" }}
              >
                {p.body}
              </p>

              <span
                className="mt-5 inline-flex items-center text-[13.5px] font-semibold transition-transform group-hover:translate-x-0.5"
                style={{ color: p.accent }}
              >
                Explore
                <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/plans"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Or compare all plans &amp; pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
