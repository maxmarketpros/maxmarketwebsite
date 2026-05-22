import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight, Check } from "lucide-react"

type Platform = {
  title: string
  slug: string
  pill: string
  description: string
  bullets: string[]
  color: string
  iconKind: "icons8" | "monogram" | "asset"
  iconId?: string
  asset?: string
  monogram?: string
  monogramBg?: string
  monogramColor?: string
  flagship?: boolean
}

const platforms: Platform[] = [
  {
    title: "Custom-Coded Websites",
    slug: "custom-coded",
    pill: "MOST FLEXIBLE",
    description:
      "Hand-built React, Next.js, and Astro sites engineered for maximum speed, unique integrations, and total design freedom. No platform fees, no templates.",
    bullets: [
      "Lighthouse 95+ baseline",
      "Sub-second load times",
      "Any integration, any shape",
      "Headless CMS optional",
    ],
    color: "#1677FF",
    iconKind: "icons8",
    iconId: "19294",
    flagship: true,
  },
  {
    title: "Custom-Designed Websites",
    slug: "custom-designed",
    pill: "FROM SCRATCH",
    description:
      "Bespoke design systems built around your brand — typography, color, motion, the whole kit. We design in Figma, then hand off to your preferred platform.",
    bullets: ["Figma design system", "Brand-forward"],
    color: "#8B5CF6",
    iconKind: "icons8",
    iconId: "Xwqu8cUREfko",
  },
  {
    title: "Webflow Websites",
    slug: "webflow",
    pill: "NO-CODE PRO",
    description:
      "Premium no-code builds with the flexibility of custom code. Fast to launch, easy for your team to edit, and CMS-powered out of the box.",
    bullets: ["Visual CMS", "Fast launch"],
    color: "#4353FF",
    iconKind: "icons8",
    iconId: "ktrJ12qa5f65",
  },
  {
    title: "WordPress Websites",
    slug: "wordpress",
    pill: "CMS",
    description:
      "Professional WordPress development with Elementor or block-based builds, managed hosting, and full e-commerce via WooCommerce.",
    bullets: ["Plugin ecosystem", "E-commerce ready"],
    color: "#21759B",
    iconKind: "icons8",
    iconId: "13664",
  },
  {
    title: "Squarespace Websites",
    slug: "squarespace",
    pill: "POLISHED",
    description:
      "Polished template customization on Squarespace — perfect for creators, boutiques, and brands that want a beautiful site without the platform overhead.",
    bullets: ["All-in-one hosting", "Built-in blog"],
    color: "#111111",
    iconKind: "monogram",
    monogram: "Sq",
    monogramBg: "#111111",
    monogramColor: "#FFFFFF",
  },
  {
    title: "Wix Websites",
    slug: "wix",
    pill: "EASY",
    description:
      "Expert Wix Studio development with ADI, Velo integrations, and booking tools. Ideal if you're already on Wix and want to go pro.",
    bullets: ["Booking & payments", "Drag-and-drop ease"],
    color: "#0C6EFD",
    iconKind: "asset",
    asset: "/partners/wix-logo.png",
  },
  {
    title: "GoDaddy Websites",
    slug: "godaddy",
    pill: "BUDGET",
    description:
      "Personalized GoDaddy website design and support — ideal if you already own a GoDaddy domain and want a fast, affordable professional build.",
    bullets: ["Domain + hosting in one", "Quick turnaround"],
    color: "#1BDBDB",
    iconKind: "monogram",
    monogram: "GD",
    monogramBg: "#1BDBDB",
    monogramColor: "#0B132B",
  },
]

export function WebPlatformsBento() {
  const flagship = platforms.find((p) => p.flagship)!
  const rest = platforms.filter((p) => !p.flagship)

  return (
    <section aria-labelledby="web-platforms-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Every Platform"
          heading={
            <span id="web-platforms-heading">
              Every platform, one{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">studio</span>.
              </span>
            </span>
          }
          paragraph="Pick the platform that fits your team, not the one the agency wants to sell you. Every card below is a real sub-service with its own deep-dive page."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <FlagshipCard platform={flagship} />
          {rest.map((p) => (
            <PlatformCard key={p.slug} platform={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Book a free design call
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function FlagshipCard({ platform: p }: { platform: Platform }) {
  return (
    <a
      href={`/services/web-design/${p.slug}`}
      aria-label={`Explore ${p.title}`}
      className="card-surface card-surface-hover relative overflow-hidden group md:col-span-2 lg:col-span-2"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-40px] top-[-40px] w-[240px] h-[240px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${p.color}22 0%, transparent 70%)`,
        }}
      />
      <div className="relative p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
        {/* Icon + pill */}
        <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-[180px] shrink-0">
          <PlatformIcon platform={p} large />
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
            style={{
              background: `${p.color}14`,
              color: p.color,
              border: `1px solid ${p.color}33`,
            }}
          >
            {p.pill}
          </span>
        </div>

        {/* Copy */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-[22px] sm:text-[26px] font-bold leading-[1.15] tracking-[-0.015em]"
            style={{ color: "var(--ink)" }}
          >
            {p.title}
          </h3>
          <p
            className="mt-2 text-[15px] leading-[1.6] max-w-[540px]"
            style={{ color: "var(--muted)" }}
          >
            {p.description}
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
            {p.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-[13.5px] font-medium"
                style={{ color: "var(--ink)" }}
              >
                <Check
                  className="w-4 h-4 shrink-0"
                  style={{ color: p.color }}
                  strokeWidth={2.5}
                />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold" style={{ color: p.color }}>
            Explore custom-coded
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>
    </a>
  )
}

function PlatformCard({ platform: p }: { platform: Platform }) {
  return (
    <a
      href={`/services/web-design/${p.slug}`}
      aria-label={`Explore ${p.title}`}
      className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col group"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-30px] top-[-30px] w-[150px] h-[150px]"
        style={{
          background: `radial-gradient(ellipse at center, ${p.color}18 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex items-center justify-between mb-4">
        <PlatformIcon platform={p} />
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
          style={{
            background: `${p.color}14`,
            color: p.color,
            border: `1px solid ${p.color}33`,
          }}
        >
          {p.pill}
        </span>
      </div>

      <h3
        className="relative text-[18px] sm:text-[19px] font-bold leading-[1.2] tracking-[-0.01em]"
        style={{ color: "var(--ink)" }}
      >
        {p.title}
      </h3>

      <p
        className="relative mt-2 text-[14px] leading-[1.6] flex-1"
        style={{ color: "var(--muted)" }}
      >
        {p.description}
      </p>

      <div
        className="relative mt-4 pt-4 border-t inline-flex items-center gap-1.5 text-[14px] font-semibold"
        style={{ borderColor: "var(--border-color)", color: p.color }}
      >
        Explore {p.title.split(" ")[0]}
        <ArrowRight
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </div>
    </a>
  )
}

function PlatformIcon({
  platform: p,
  large = false,
}: {
  platform: Platform
  large?: boolean
}) {
  const size = large ? "w-16 h-16" : "w-12 h-12"
  const imgSize = large ? 48 : 36
  const rounded = "rounded-[var(--radius-sm)]"

  if (p.iconKind === "icons8" && p.iconId) {
    return (
      <div
        className={`${size} ${rounded} flex items-center justify-center`}
        style={{ background: `${p.color}14` }}
      >
        <img
          src={icons8Url(p.iconId, 96)}
          alt={`${p.title} icon`}
          width={imgSize}
          height={imgSize}
          loading="lazy"
          decoding="async"
          className="object-contain"
          style={{ width: imgSize, height: imgSize }}
        />
      </div>
    )
  }

  if (p.iconKind === "asset" && p.asset) {
    return (
      <div
        className={`${size} ${rounded} flex items-center justify-center`}
        style={{ background: `${p.color}14` }}
      >
        <img
          src={p.asset}
          alt={`${p.title} logo`}
          width={imgSize}
          height={imgSize}
          loading="lazy"
          decoding="async"
          className="object-contain"
          style={{ maxWidth: imgSize, maxHeight: imgSize }}
        />
      </div>
    )
  }

  // Monogram
  return (
    <div
      className={`${size} ${rounded} flex items-center justify-center font-bold ${large ? "text-[26px]" : "text-[18px]"}`}
      style={{
        background: p.monogramBg,
        color: p.monogramColor,
        letterSpacing: "-0.02em",
        fontFamily: "Outfit, sans-serif",
      }}
      aria-label={`${p.title} logo`}
    >
      {p.monogram}
    </div>
  )
}
