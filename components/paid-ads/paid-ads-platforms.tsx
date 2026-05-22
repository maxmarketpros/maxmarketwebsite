import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Check,
  Search as SearchIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "lucide-react"

type Platform = {
  href: string
  iconId: string
  pill: string
  pillColor: string
  auraColor: string
  LucideIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  deliverables: string[]
  flagship?: boolean
}

const platforms: Platform[] = [
  {
    href: "/services/paid-ads/google-ads",
    iconId: "ui4CTPMMDCFh",
    pill: "Flagship · Highest intent",
    pillColor: "#4285F4",
    auraColor: "rgba(66,133,244,0.11)",
    LucideIcon: SearchIcon,
    title: "Google Ads",
    description:
      "Capture high-intent search traffic the moment a customer is ready to buy. Search, Performance Max, Shopping, YouTube, and Local Services Ads — all managed against your ROAS target, not Google's.",
    deliverables: [
      "Google Search campaigns",
      "Performance Max",
      "Shopping Ads",
      "YouTube pre-roll & in-stream",
      "Local Services Ads (LSA)",
      "Display Remarketing",
      "GA4 + conversion tracking",
      "Keyword & negative list mgmt",
    ],
    flagship: true,
  },
  {
    href: "/services/paid-ads/facebook-ads",
    iconId: "118497",
    pill: "Meta · Reach",
    pillColor: "#1877F2",
    auraColor: "rgba(24,119,242,0.09)",
    LucideIcon: FacebookIcon,
    title: "Facebook Ads",
    description:
      "Put your business in front of millions of scrollers. Feed, Reels, Stories, Marketplace, and Messenger — with creative and targeting built for local lead generation.",
    deliverables: [
      "Feed, Reels & Stories ads",
      "Marketplace placements",
      "Retargeting + lookalike audiences",
      "Lead forms + Messenger ads",
      "Meta Pixel & CAPI setup",
    ],
  },
  {
    href: "/services/paid-ads/instagram-ads",
    iconId: "32323",
    pill: "IG · Creative",
    pillColor: "#E1306C",
    auraColor: "rgba(225,48,108,0.10)",
    LucideIcon: InstagramIcon,
    title: "Instagram Ads",
    description:
      "Show up in the feeds people actually watch. Reels, Stories, and Explore placements with thumb-stopping creative built by our in-house video and design team.",
    deliverables: [
      "Reels & Stories ads",
      "Feed + Explore placements",
      "Influencer whitelisting",
      "Shoppable tags + catalog ads",
      "Creative production included",
    ],
  },
]

export function PaidAdsPlatforms() {
  return (
    <section
      id="paid-ads-platforms"
      aria-labelledby="paid-ads-platforms-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Platforms We Run"
          heading={
            <span id="paid-ads-platforms-heading">
              Google Ads, Meta, and{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">Instagram.</span>
              </span>
            </span>
          }
          paragraph="The three platforms that drive 92% of paid-ad revenue for local service businesses. Click any platform to see the full breakdown."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {platforms.map((p) => (
            <PlatformCard key={p.title} platform={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Book a free ad strategy call
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function PlatformCard({ platform }: { platform: Platform }) {
  const { LucideIcon, flagship } = platform
  const spanClass = flagship ? "md:col-span-2" : ""

  return (
    <a
      href={platform.href}
      className={`${spanClass} card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col group`}
      aria-label={`Learn more about ${platform.title}`}
    >
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[60%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${platform.auraColor} 0%, transparent 70%)`,
        }}
      />
      {flagship && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-0 w-[50%] h-[60%]"
          style={{
            background: `radial-gradient(ellipse 80% 100% at 80% 80%, ${platform.auraColor} 0%, transparent 70%)`,
          }}
        />
      )}

      <div className="relative flex-1 flex flex-col">
        {/* Icon + pill */}
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(platform.iconId, flagship ? 192 : 128)}
            alt={`${platform.title} logo`}
            width={flagship ? 68 : 52}
            height={flagship ? 68 : 52}
            loading="lazy"
            decoding="async"
            className={`${flagship ? "w-[68px] h-[68px]" : "w-[52px] h-[52px]"} object-contain shrink-0`}
          />
          <span
            className="self-center inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{
              background: `${platform.pillColor}1A`,
              color: platform.pillColor,
            }}
          >
            <LucideIcon className="w-3 h-3" strokeWidth={2.5} />
            {platform.pill}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mt-4 ${flagship ? "text-[24px] sm:text-[28px]" : "text-[20px] sm:text-[22px]"} font-bold leading-[1.2] tracking-[-0.01em]`}
          style={{ color: "var(--ink)" }}
        >
          {platform.title}
        </h3>

        {/* Description */}
        <p
          className={`mt-2 ${flagship ? "text-[16px] sm:text-[17px]" : "text-[15px]"} leading-[1.55]`}
          style={{ color: "var(--muted)" }}
        >
          {platform.description}
        </p>

        {/* Deliverables */}
        <ul
          className={`mt-5 space-y-2 ${flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-4 sm:space-y-0 sm:gap-y-2.5" : ""}`}
        >
          {platform.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 text-[14px]"
              style={{ color: "var(--ink)" }}
            >
              <span
                className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: `${platform.pillColor}1A`,
                  color: platform.pillColor,
                }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-[1.45]">{d}</span>
            </li>
          ))}
        </ul>

        {/* Explore link */}
        <div
          className="mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t"
          style={{
            borderColor: "var(--border-color)",
            color: platform.pillColor,
          }}
        >
          <span>Explore {platform.title}</span>
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </a>
  )
}
