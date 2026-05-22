import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import {
  Search,
  MapPin,
  ShoppingCart,
  PlayCircle,
  LayoutGrid,
  Film,
  ImageIcon,
  Music,
  Star,
  Phone,
  ArrowRight,
} from "lucide-react"

type Format = {
  title: string
  subtitle: string
  platform: "google" | "facebook" | "instagram"
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  color: string
  Preview: React.FC
}

const formats: Format[] = [
  {
    title: "Google Search Ad",
    subtitle: "Capture high-intent searches",
    platform: "google",
    Icon: Search,
    color: "#4285F4",
    Preview: GoogleSearchPreview,
  },
  {
    title: "Google Local Services",
    subtitle: "Sponsored in the Map Pack",
    platform: "google",
    Icon: MapPin,
    color: "#4285F4",
    Preview: GoogleLsaPreview,
  },
  {
    title: "Google Shopping",
    subtitle: "Product carousel at top of search",
    platform: "google",
    Icon: ShoppingCart,
    color: "#4285F4",
    Preview: GoogleShoppingPreview,
  },
  {
    title: "YouTube In-Stream",
    subtitle: "Video ads before & during content",
    platform: "google",
    Icon: PlayCircle,
    color: "#FF0000",
    Preview: YouTubeInStreamPreview,
  },
  {
    title: "Facebook Feed",
    subtitle: "Sponsored posts in the main feed",
    platform: "facebook",
    Icon: LayoutGrid,
    color: "#1877F2",
    Preview: FacebookFeedPreview,
  },
  {
    title: "Facebook Reels",
    subtitle: "Short-form vertical video ads",
    platform: "facebook",
    Icon: Film,
    color: "#1877F2",
    Preview: FacebookReelsPreview,
  },
  {
    title: "Instagram Story",
    subtitle: "Full-screen vertical placements",
    platform: "instagram",
    Icon: ImageIcon,
    color: "#E1306C",
    Preview: InstagramStoryPreview,
  },
  {
    title: "Instagram Reel",
    subtitle: "Vertical video with music & CTA",
    platform: "instagram",
    Icon: Music,
    color: "#E1306C",
    Preview: InstagramReelPreview,
  },
]

export function PaidAdsFormats() {
  return (
    <section
      id="paid-ads-formats"
      aria-labelledby="paid-ads-formats-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Ad Formats"
          heading={
            <span id="paid-ads-formats-heading">
              Every ad format,{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">built in-house.</span>
              </span>
            </span>
          }
          paragraph="Search, shopping, video, stories, reels, feed — our creative team produces ad assets for every placement across Google, Meta, and Instagram. No outsourced shops. No stock templates."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {formats.map((f) => (
            <FormatCard key={f.title} format={f} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold group"
            style={{ color: "var(--accent)" }}
          >
            See which ad formats fit your business
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

function FormatCard({ format }: { format: Format }) {
  const { Icon, Preview } = format
  return (
    <div
      className="card-surface card-surface-hover relative overflow-hidden p-5 flex flex-col"
      aria-label={`${format.title} ad format example`}
    >
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-[50%] h-[40%]"
        style={{
          background: `radial-gradient(ellipse 100% 100% at 100% 0%, ${format.color}14 0%, transparent 70%)`,
        }}
      />

      {/* Preview area */}
      <div
        className="relative aspect-[4/3] rounded-[var(--radius-sm)] overflow-hidden border"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,19,43,0.025) 0%, rgba(11,19,43,0.05) 100%)",
          borderColor: "var(--border-color)",
        }}
      >
        <Preview />
      </div>

      {/* Meta */}
      <div className="relative mt-4 flex items-start gap-2">
        <div
          className="w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
          style={{ background: `${format.color}14`, color: format.color }}
        >
          <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
        </div>
        <div className="min-w-0">
          <h3
            className="text-[15px] font-bold leading-tight tracking-[-0.005em]"
            style={{ color: "var(--ink)" }}
          >
            {format.title}
          </h3>
          <p
            className="mt-1 text-[12.5px] leading-[1.4]"
            style={{ color: "var(--muted)" }}
          >
            {format.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------
   Custom ad-format mockups (hand-coded HTML/SVG)
   ------------------------------------------------------------------------- */

function GoogleSearchPreview() {
  return (
    <div className="absolute inset-0 p-3 flex flex-col gap-2">
      <div
        className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[8px] font-bold uppercase tracking-wider w-fit"
        style={{ background: "#202124", color: "#fff" }}
      >
        Sponsored
      </div>
      <div className="flex items-center gap-1.5">
        <div
          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "#fff", border: "1px solid #DCE6F2" }}
        >
          <span className="text-[9px] font-bold" style={{ color: "#4285F4" }}>G</span>
        </div>
        <div className="text-[9px]" style={{ color: "#202124" }}>
          yourbusiness.com
        </div>
      </div>
      <div
        className="text-[13px] font-medium leading-tight"
        style={{ color: "#1a0dab" }}
      >
        Emergency Plumbing — 24/7 Service
      </div>
      <div
        className="text-[9.5px] leading-[1.35]"
        style={{ color: "#4d5156" }}
      >
        Same-day dispatch · Flat rates · Licensed & insured. Book online in 30 seconds.
      </div>
      <div className="mt-auto flex items-center gap-1.5">
        <div
          className="text-[8px] font-semibold px-1.5 py-0.5 rounded"
          style={{ background: "#E8F0FE", color: "#1967D2" }}
        >
          Call now
        </div>
        <div
          className="text-[8px] font-semibold px-1.5 py-0.5 rounded"
          style={{ background: "#E8F0FE", color: "#1967D2" }}
        >
          Book online
        </div>
      </div>
    </div>
  )
}

function GoogleLsaPreview() {
  return (
    <div className="absolute inset-0 p-3 flex flex-col gap-1.5">
      <div
        className="text-[8px] font-bold uppercase tracking-wider w-fit px-1.5 py-0.5 rounded"
        style={{ background: "#E6F4EA", color: "#137333" }}
      >
        Google Guaranteed
      </div>
      {[
        { name: "Acme Plumbing Co.", rating: "4.9", reviews: "214" },
        { name: "Max Market Pros HVAC", rating: "5.0", reviews: "156" },
      ].map((biz) => (
        <div
          key={biz.name}
          className="flex items-center gap-2 p-1.5 rounded border"
          style={{
            background: "#fff",
            borderColor: "#DCE6F2",
          }}
        >
          <div
            className="w-6 h-6 rounded-full shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
            }}
          />
          <div className="flex-1 min-w-0">
            <div
              className="text-[9.5px] font-semibold leading-tight truncate"
              style={{ color: "#202124" }}
            >
              {biz.name}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <Star
                className="w-2.5 h-2.5"
                style={{ color: "#FBBC05" }}
                fill="#FBBC05"
                strokeWidth={0}
              />
              <span
                className="text-[8.5px] font-medium"
                style={{ color: "#202124" }}
              >
                {biz.rating}
              </span>
              <span className="text-[8.5px]" style={{ color: "#70757a" }}>
                ({biz.reviews})
              </span>
            </div>
          </div>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "#E8F0FE", color: "#1967D2" }}
          >
            <Phone className="w-2.5 h-2.5" strokeWidth={2.5} />
          </div>
        </div>
      ))}
    </div>
  )
}

function GoogleShoppingPreview() {
  return (
    <div className="absolute inset-0 p-3 flex flex-col gap-1.5">
      <div
        className="text-[8px] font-bold uppercase tracking-wider w-fit"
        style={{ color: "#70757a" }}
      >
        Sponsored · Shopping
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[
          { price: "$129", color: "#4285F4" },
          { price: "$249", color: "#34A853" },
          { price: "$89", color: "#FBBC05" },
        ].map((p, i) => (
          <div
            key={i}
            className="rounded border p-1.5 flex flex-col"
            style={{ background: "#fff", borderColor: "#DCE6F2" }}
          >
            <div
              className="flex-1 rounded mb-1"
              style={{
                background: `linear-gradient(135deg, ${p.color}33 0%, ${p.color}0D 100%)`,
                minHeight: "30px",
              }}
            />
            <div
              className="text-[9px] font-bold"
              style={{ color: "#202124" }}
            >
              {p.price}
            </div>
            <div
              className="text-[7.5px] truncate"
              style={{ color: "#70757a" }}
            >
              Top rated
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function YouTubeInStreamPreview() {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "#0F0F0F" }}
    >
      {/* Video frame */}
      <div className="flex-1 relative flex items-center justify-center">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,0,0,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="relative w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.95)" }}
        >
          <PlayCircle
            className="w-5 h-5"
            style={{ color: "#FF0000" }}
            strokeWidth={0}
            fill="#FF0000"
          />
        </div>
        {/* Ad label */}
        <div
          className="absolute left-2 top-2 text-[8px] font-bold px-1.5 py-0.5 rounded"
          style={{ background: "#FFC107", color: "#202124" }}
        >
          Ad
        </div>
        {/* Skip button */}
        <div
          className="absolute right-2 bottom-5 text-[8px] font-semibold px-2 py-1 rounded"
          style={{
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          Skip Ad ▶
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-[3px] relative" style={{ background: "rgba(255,255,255,0.2)" }}>
        <div
          className="absolute left-0 top-0 h-full"
          style={{ width: "35%", background: "#FF0000" }}
        />
      </div>
    </div>
  )
}

function FacebookFeedPreview() {
  return (
    <div className="absolute inset-0 p-2.5 flex flex-col gap-1.5" style={{ background: "#fff" }}>
      {/* header */}
      <div className="flex items-center gap-1.5">
        <div
          className="w-6 h-6 rounded-full shrink-0"
          style={{
            background:
              "linear-gradient(135deg, #1877F2 0%, #4267B2 100%)",
          }}
        />
        <div className="flex-1 min-w-0">
          <div
            className="text-[9px] font-semibold leading-tight truncate"
            style={{ color: "#050505" }}
          >
            Max Market Pros
          </div>
          <div
            className="text-[8px] leading-tight"
            style={{ color: "#65676B" }}
          >
            Sponsored · 1h
          </div>
        </div>
      </div>
      {/* body text */}
      <div
        className="text-[9px] leading-[1.35]"
        style={{ color: "#050505" }}
      >
        Booked solid this summer? We can help.
      </div>
      {/* image */}
      <div
        className="flex-1 rounded-sm"
        style={{
          background:
            "linear-gradient(135deg, #1877F233 0%, #E1306C22 100%)",
          minHeight: "28px",
        }}
      />
      {/* CTA button */}
      <div
        className="flex items-center justify-between px-2 py-1 rounded-sm"
        style={{ background: "#F0F2F5" }}
      >
        <div>
          <div
            className="text-[8px] font-semibold leading-tight"
            style={{ color: "#050505" }}
          >
            maxmarketpros.com
          </div>
          <div className="text-[7.5px]" style={{ color: "#65676B" }}>
            Get a free audit
          </div>
        </div>
        <div
          className="text-[8px] font-semibold px-2 py-1 rounded"
          style={{ background: "#E7F3FF", color: "#1877F2" }}
        >
          Learn more
        </div>
      </div>
    </div>
  )
}

function FacebookReelsPreview() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#000" }}
    >
      {/* vertical phone */}
      <div
        className="relative h-full flex flex-col"
        style={{
          aspectRatio: "9/16",
          maxHeight: "100%",
          background:
            "linear-gradient(180deg, #1877F266 0%, #4267B266 50%, #E1306C44 100%)",
        }}
      >
        {/* Sponsored label */}
        <div
          className="absolute top-1.5 left-1.5 text-[7px] font-bold px-1 py-0.5 rounded"
          style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
        >
          Sponsored
        </div>
        {/* Play button */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.9)" }}
          >
            <PlayCircle
              className="w-3 h-3"
              style={{ color: "#1877F2" }}
              strokeWidth={0}
              fill="#1877F2"
            />
          </div>
        </div>
        {/* CTA */}
        <div className="px-1.5 pb-1.5">
          <div
            className="text-[7.5px] font-semibold text-center py-1 rounded"
            style={{ background: "#1877F2", color: "#fff" }}
          >
            Learn more →
          </div>
        </div>
      </div>
    </div>
  )
}

function InstagramStoryPreview() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#000" }}
    >
      <div
        className="relative h-full flex flex-col"
        style={{
          aspectRatio: "9/16",
          maxHeight: "100%",
          background:
            "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)",
        }}
      >
        {/* progress bars */}
        <div className="flex gap-0.5 p-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 h-[2px] rounded-full"
              style={{
                background:
                  i === 1 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
        {/* header */}
        <div className="px-1.5 py-0.5 flex items-center gap-1">
          <div
            className="w-3.5 h-3.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #fff, #f9f9f9)",
              border: "1px solid rgba(255,255,255,0.8)",
            }}
          />
          <div
            className="text-[7px] font-semibold"
            style={{ color: "#fff" }}
          >
            maxmarketpros
          </div>
          <div
            className="text-[6px] ml-auto px-1 py-0.5 rounded"
            style={{ background: "rgba(0,0,0,0.3)", color: "#fff" }}
          >
            Sponsored
          </div>
        </div>
        {/* center */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.9)" }}
          >
            <PlayCircle
              className="w-3 h-3"
              style={{ color: "#E1306C" }}
              strokeWidth={0}
              fill="#E1306C"
            />
          </div>
        </div>
        {/* Swipe up pill */}
        <div className="px-2 pb-1.5 flex items-center justify-center">
          <div
            className="text-[7px] font-semibold px-2 py-1 rounded-full flex items-center gap-1"
            style={{ background: "rgba(255,255,255,0.95)", color: "#0B132B" }}
          >
            <ArrowRight className="w-2 h-2" strokeWidth={3} />
            Swipe up
          </div>
        </div>
      </div>
    </div>
  )
}

function InstagramReelPreview() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#000" }}
    >
      <div
        className="relative h-full flex flex-col"
        style={{
          aspectRatio: "9/16",
          maxHeight: "100%",
          background:
            "linear-gradient(180deg, #833AB4 0%, #E1306C 50%, #FD1D1D 100%)",
        }}
      >
        {/* Sponsored */}
        <div
          className="absolute top-1.5 left-1.5 text-[7px] font-bold px-1 py-0.5 rounded"
          style={{ background: "rgba(0,0,0,0.45)", color: "#fff" }}
        >
          Sponsored
        </div>
        {/* waveform */}
        <div className="absolute bottom-8 left-1.5 right-1.5 flex items-end gap-0.5 h-4 opacity-80">
          {[3, 5, 7, 4, 6, 8, 5, 3, 7, 4, 6, 5, 3, 6, 8, 5, 4, 7].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h * 3}px`,
                background: "rgba(255,255,255,0.85)",
              }}
            />
          ))}
        </div>
        {/* bottom CTA */}
        <div className="mt-auto px-1.5 pb-1.5 relative">
          <div
            className="text-[7.5px] font-semibold text-center py-1 rounded flex items-center justify-center gap-1"
            style={{ background: "#fff", color: "#0B132B" }}
          >
            Shop now
            <ArrowRight className="w-2 h-2" strokeWidth={3} />
          </div>
        </div>
        {/* Instagram reel logo corner */}
        <div
          className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.95)" }}
        >
          <img
            src={icons8Url("32323", 32)}
            alt=""
            width={12}
            height={12}
            loading="lazy"
            decoding="async"
            className="w-[12px] h-[12px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}
