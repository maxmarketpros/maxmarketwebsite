import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  Smartphone,
  Search,
  Gauge,
  Star,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Lock,
  Wrench,
  Droplet,
  Clock,
  Phone,
  ShieldCheck,
  MapPin,
  Calendar,
  Menu,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react"

const trustItems = [
  "200+ sites launched",
  "95+ Lighthouse avg.",
  "4.9★ client rating",
]

export function WebHero() {
  return (
    <section
      aria-labelledby="web-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-8%] w-[480px] h-[480px] sm:w-[720px] sm:h-[720px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[560px] h-[560px] sm:w-[880px] sm:h-[880px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.14) 0%, rgba(116,211,255,0.10) 35%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] gap-12 lg:gap-14 items-center">
          {/* Left: copy */}
          <div
            className="max-w-[640px]"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-[13px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <a href="/" className="hover:text-[var(--accent)]">
                    Home
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-[var(--accent)]"
                  >
                    Services
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>
                  Web Design
                </li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Custom Web Design &amp; Development
            </Pill>

            <h1
              id="web-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Web design that turns clicks into booked{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">jobs</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              Fast, conversion-focused websites on Webflow, WordPress,
              Squarespace, Wix, or hand-coded — built for service businesses
              that need phones to ring, not just pretty pixels.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#showcase">
                See our work
              </PrimaryButton>
              <SecondaryButton asLink href="#contact">
                Book a free design call
              </SecondaryButton>
            </div>

            {/* Pills row */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <HeroPill
                icon={<Smartphone className="w-3.5 h-3.5" strokeWidth={2.5} />}
                label="Pixel-perfect"
                color="#1677FF"
              />
              <HeroPill
                icon={<Gauge className="w-3.5 h-3.5" strokeWidth={2.5} />}
                label="Lightning-fast"
                color="#F59E0B"
              />
              <HeroPill
                icon={<Search className="w-3.5 h-3.5" strokeWidth={2.5} />}
                label="SEO-ready"
                color="#10B981"
              />
            </div>

            {/* Trust */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[14px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--accent)" }}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: mockup — phone on mobile, browser on desktop */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
          >
            {/* Phone mockup (mobile only) */}
            <div className="sm:hidden flex justify-center">
              <PhoneMockup />
            </div>
            {/* Browser mockup (tablet+ desktop) */}
            <div className="hidden sm:block">
              <BrowserMockup />
            </div>

            {/* Decorative floating badge */}
            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#10B981" }}
              />
              Live site
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroPill({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border text-[12.5px] font-semibold whitespace-nowrap"
      style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
    >
      <span
        className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
        style={{ background: `${color}1A`, color }}
      >
        {icon}
      </span>
      {label}
    </div>
  )
}

/* =========================================================================
   Phone mockup — shown on mobile only
   ========================================================================= */

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div
        className="relative w-[260px] aspect-[9/19.5] rounded-[40px] p-[6px]"
        style={{
          background: "linear-gradient(180deg, #1A2541 0%, #0B132B 100%)",
          boxShadow:
            "0 10px 30px rgba(11,19,43,0.30), 0 30px 80px -20px rgba(11,19,43,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Screen */}
        <div
          className="relative w-full h-full rounded-[34px] overflow-hidden flex flex-col"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)",
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[72px] h-[18px] rounded-b-[14px] z-20"
            style={{ background: "#0B132B" }}
          />

          {/* Status bar */}
          <div className="relative flex items-center justify-between px-5 pt-2 pb-1.5 text-[9px] font-semibold z-10"
               style={{ color: "var(--ink)" }}>
            <span>9:41</span>
            <div className="flex items-center gap-[3px]">
              <Signal className="w-2.5 h-2.5" strokeWidth={2.5} />
              <Wifi className="w-2.5 h-2.5" strokeWidth={2.5} />
              <BatteryFull className="w-3 h-3" strokeWidth={2.25} />
            </div>
          </div>

          {/* App top nav */}
          <div
            className="flex items-center justify-between px-3.5 py-2 border-b"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--accent), #0EA5E9)",
                  boxShadow: "0 1px 3px rgba(22,119,255,0.30)",
                }}
              >
                <Wrench className="w-2.5 h-2.5 text-white" strokeWidth={2.75} />
              </div>
              <div
                className="h-2 w-[54px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, #0B132B 0%, #1A2541 100%)",
                }}
              />
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center"
                style={{ background: "#10B98114", color: "#10B981" }}
              >
                <Phone className="w-2.5 h-2.5" strokeWidth={2.5} />
              </div>
              <Menu className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "var(--ink)" }} />
            </div>
          </div>

          {/* Scrollable body */}
          <div className="relative flex-1 overflow-hidden px-3.5 pt-3 pb-2">
            {/* Trust pill */}
            <div
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full mb-2 border"
              style={{ background: "#FFFBEB", borderColor: "#FCE8A8" }}
            >
              <Star
                className="w-2 h-2"
                style={{ color: "#F59E0B" }}
                fill="#F59E0B"
                strokeWidth={0}
              />
              <span className="text-[8px] font-bold" style={{ color: "#B45309" }}>
                4.9 · 214 reviews
              </span>
            </div>

            {/* Headline bars */}
            <div
              className="h-[14px] w-[92%] rounded-md mb-1"
              style={{
                background: "linear-gradient(90deg, #0B132B 0%, #1A2541 100%)",
              }}
            />
            <div
              className="h-[14px] w-[62%] rounded-md mb-2"
              style={{
                background:
                  "linear-gradient(90deg, #1A2541 0%, #1A2541 50%, rgba(22,119,255,0.75) 100%)",
              }}
            />
            {/* Body lines */}
            <div className="h-[5px] w-full rounded-full mb-0.5" style={{ background: "#DEE6F0" }} />
            <div className="h-[5px] w-[82%] rounded-full mb-2.5" style={{ background: "#E5ECF4" }} />

            {/* Hero image card — short */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-sm)] aspect-[16/9] mb-2.5"
              style={{
                background:
                  "linear-gradient(135deg, #1677FF 0%, #0EA5E9 45%, #0B6FE0 100%)",
                boxShadow: "0 4px 12px -4px rgba(22,119,255,0.35)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 30% 25%, rgba(255,255,255,0.30) 0%, transparent 60%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  maskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 85%)",
                  WebkitMaskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 85%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.22)",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)",
                  }}
                >
                  <Wrench className="w-5 h-5 text-white" strokeWidth={2.25} />
                </div>
              </div>
              <div
                className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 1px 3px rgba(11,19,43,0.18)",
                }}
              >
                <ShieldCheck
                  className="w-2 h-2"
                  strokeWidth={3}
                  style={{ color: "#10B981" }}
                />
                <span
                  className="text-[7.5px] font-bold"
                  style={{ color: "#1A2541" }}
                >
                  Licensed
                </span>
              </div>
            </div>

            {/* Full-width CTAs */}
            <div
              className="h-8 rounded-md flex items-center justify-center gap-1.5 mb-1.5"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                boxShadow: "0 2px 6px rgba(22,119,255,0.30)",
              }}
            >
              <span
                className="h-[6px] w-[88px] rounded-full"
                style={{ background: "rgba(255,255,255,0.95)" }}
              />
              <ArrowRight className="w-2.5 h-2.5 text-white" strokeWidth={3} />
            </div>
            <div
              className="h-8 rounded-md flex items-center justify-center gap-1.5 border"
              style={{
                borderColor: "var(--border-color)",
                background: "#fff",
              }}
            >
              <Phone
                className="w-3 h-3"
                strokeWidth={2.75}
                style={{ color: "#10B981" }}
              />
              <span
                className="h-[6px] w-[70px] rounded-full"
                style={{ background: "var(--ink)" }}
              />
            </div>

            {/* Trust row */}
            <div className="mt-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <ShieldCheck
                  className="w-2.5 h-2.5"
                  strokeWidth={2.5}
                  style={{ color: "#10B981" }}
                />
                <span className="h-[5px] w-10 rounded-full" style={{ background: "#C9D4E3" }} />
              </div>
              <div className="flex items-center gap-1">
                <MapPin
                  className="w-2.5 h-2.5"
                  strokeWidth={2.5}
                  style={{ color: "#1677FF" }}
                />
                <span className="h-[5px] w-12 rounded-full" style={{ background: "#C9D4E3" }} />
              </div>
              <div className="flex items-center gap-1">
                <Clock
                  className="w-2.5 h-2.5"
                  strokeWidth={2.5}
                  style={{ color: "#F59E0B" }}
                />
                <span className="h-[5px] w-8 rounded-full" style={{ background: "#C9D4E3" }} />
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="pb-1.5 flex justify-center">
            <div
              className="h-[3px] w-[72px] rounded-full"
              style={{ background: "rgba(11,19,43,0.35)" }}
            />
          </div>
        </div>
      </div>

      {/* Floating "Available today" pill */}
      <div
        className="absolute -top-2 -right-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border text-[10.5px] font-semibold shadow-[0_4px_16px_rgba(11,19,43,0.12)]"
        style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
      >
        <span className="relative flex w-1.5 h-1.5">
          <span
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: "#10B981",
              animation: "subtlePulse 2s ease-in-out infinite",
            }}
          />
          <span
            className="relative w-1.5 h-1.5 rounded-full"
            style={{ background: "#10B981" }}
          />
        </span>
        Available today
      </div>
    </div>
  )
}

/* =========================================================================
   Browser mockup — shown on tablet/desktop
   ========================================================================= */

function BrowserMockup() {
  const services = [
    { Icon: Wrench, color: "#1677FF", label: "Repair" },
    { Icon: Droplet, color: "#0EA5E9", label: "Installation" },
    { Icon: Clock, color: "#10B981", label: "24/7 Service" },
  ]

  return (
    <div
      className="card-surface relative overflow-hidden"
      style={{
        borderRadius: "var(--radius-xl)",
        boxShadow:
          "0 1px 2px rgba(17,35,68,0.04), 0 24px 60px -20px rgba(17,35,68,0.18), 0 40px 100px -40px rgba(22,119,255,0.18)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2.5 px-3.5 py-2.5 border-b"
        style={{
          background: "linear-gradient(180deg, #F6F8FC 0%, #ECF1F8 100%)",
          borderColor: "var(--border-color)",
        }}
      >
        {/* Traffic lights */}
        <div className="flex gap-1.5 shrink-0">
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#FF6057", boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.08)" }}
          />
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#FFBD2E", boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.08)" }}
          />
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#27C93F", boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.08)" }}
          />
        </div>
        {/* Browser nav icons */}
        <div className="hidden sm:flex items-center gap-1 ml-1.5" style={{ color: "#8A97AA" }}>
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.25} />
          <ArrowRight className="w-3.5 h-3.5 opacity-40" strokeWidth={2.25} />
          <RotateCw className="w-3 h-3 ml-0.5" strokeWidth={2.25} />
        </div>
        {/* URL bar */}
        <div
          className="ml-1 sm:ml-2 flex-1 h-6 rounded-md flex items-center gap-1.5 px-2.5 text-[10.5px] sm:text-[11px] font-medium"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            color: "var(--muted)",
          }}
        >
          <Lock className="w-3 h-3 shrink-0" strokeWidth={2.25} style={{ color: "#10B981" }} />
          <span style={{ color: "var(--ink)" }}>yourbrand.com</span>
          <span className="ml-auto hidden sm:inline text-[10px]" style={{ color: "#B8C3D4" }}>
            ⌘R
          </span>
        </div>
        {/* Right-side profile dot */}
        <div
          className="hidden sm:flex w-5 h-5 rounded-full items-center justify-center shrink-0 text-[9px] font-bold text-white"
          style={{
            background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
          }}
        >
          Y
        </div>
      </div>

      {/* Page body */}
      <div
        className="relative p-4 sm:p-5"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)",
        }}
      >
        {/* Dot-grid pattern overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D8E2F0 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 100% 80% at 50% 30%, #000 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 80% at 50% 30%, #000 0%, transparent 75%)",
          }}
        />
        {/* Soft blue aura behind hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[55%] h-[55%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 100% 0%, rgba(22,119,255,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Top nav */}
        <div className="relative flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-1.5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--accent), #0EA5E9)",
                boxShadow: "0 2px 6px rgba(22,119,255,0.30)",
              }}
            >
              <Wrench className="w-3 h-3 text-white" strokeWidth={2.75} />
            </div>
            <div
              className="h-2.5 w-[84px] rounded-full"
              style={{
                background: "linear-gradient(90deg, #0B132B 0%, #1A2541 100%)",
              }}
            />
          </div>
          <div className="flex items-center gap-2.5">
            {/* Phone chip — clickable look */}
            <span
              className="hidden xs:flex h-6 items-center gap-1 px-2 rounded-md border"
              style={{
                borderColor: "var(--border-color)",
                background: "#fff",
              }}
            >
              <Phone
                className="w-2.5 h-2.5"
                strokeWidth={2.5}
                style={{ color: "#10B981" }}
              />
              <span
                className="h-[6px] w-10 rounded-full"
                style={{ background: "#1A2541" }}
              />
            </span>
            {/* Primary CTA — "Book Now" */}
            <span
              className="h-6 px-3 rounded-md flex items-center gap-1"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                boxShadow: "0 2px 6px rgba(22,119,255,0.30)",
              }}
            >
              <Calendar className="w-2.5 h-2.5 text-white" strokeWidth={2.75} />
              <span
                className="h-[6px] w-10 rounded-full"
                style={{ background: "rgba(255,255,255,0.9)" }}
              />
            </span>
          </div>
        </div>

        {/* Hero split: copy + service visual */}
        <div className="relative grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] gap-3 sm:gap-4 mb-4 sm:mb-5">
          {/* Left: copy */}
          <div>
            {/* Trust pill */}
            <div
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full mb-2.5 border"
              style={{
                background: "#FFFBEB",
                borderColor: "#FCE8A8",
              }}
            >
              <Star
                className="w-2 h-2"
                style={{ color: "#F59E0B" }}
                fill="#F59E0B"
                strokeWidth={0}
              />
              <span
                className="text-[8.5px] font-bold"
                style={{ color: "#B45309" }}
              >
                4.9
              </span>
              <span
                className="h-[5px] w-8 rounded-full"
                style={{ background: "#E5BE6D" }}
              />
            </div>
            {/* Headline bars */}
            <div
              className="h-[18px] w-[92%] rounded-md mb-1.5"
              style={{
                background:
                  "linear-gradient(90deg, #0B132B 0%, #1A2541 100%)",
              }}
            />
            <div
              className="h-[18px] w-[68%] rounded-md mb-3"
              style={{
                background:
                  "linear-gradient(90deg, #1A2541 0%, #1A2541 60%, rgba(22,119,255,0.65) 100%)",
              }}
            />
            {/* Body lines */}
            <div className="h-[6px] w-full rounded-full mb-1" style={{ background: "#DEE6F0" }} />
            <div className="h-[6px] w-[88%] rounded-full mb-1" style={{ background: "#DEE6F0" }} />
            <div className="h-[6px] w-[60%] rounded-full mb-3.5" style={{ background: "#E5ECF4" }} />
            {/* CTA buttons */}
            <div className="flex gap-2 items-center">
              {/* Primary: Get a Free Quote */}
              <span
                className="relative h-7 px-3 rounded-md flex items-center gap-1.5"
                style={{
                  background:
                    "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                  boxShadow: "0 2px 6px rgba(22,119,255,0.30)",
                }}
              >
                <span
                  className="h-[6px] w-14 rounded-full"
                  style={{ background: "rgba(255,255,255,0.95)" }}
                />
                <ArrowRight className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </span>
              {/* Secondary: Call now */}
              <span
                className="h-7 px-3 rounded-md border flex items-center gap-1.5"
                style={{
                  borderColor: "var(--border-color)",
                  background: "#fff",
                }}
              >
                <Phone
                  className="w-2.5 h-2.5"
                  strokeWidth={2.75}
                  style={{ color: "#10B981" }}
                />
                <span
                  className="h-[6px] w-10 rounded-full"
                  style={{ background: "var(--ink)" }}
                />
              </span>
            </div>
            {/* Trust row */}
            <div className="mt-3 flex items-center gap-2.5 flex-wrap">
              <div className="flex items-center gap-1">
                <ShieldCheck
                  className="w-3 h-3"
                  strokeWidth={2.5}
                  style={{ color: "#10B981" }}
                />
                <span
                  className="h-[6px] w-12 rounded-full"
                  style={{ background: "#C9D4E3" }}
                />
              </div>
              <div className="flex items-center gap-1">
                <MapPin
                  className="w-3 h-3"
                  strokeWidth={2.5}
                  style={{ color: "#1677FF" }}
                />
                <span
                  className="h-[6px] w-14 rounded-full"
                  style={{ background: "#C9D4E3" }}
                />
              </div>
            </div>
          </div>

          {/* Right: service visual card */}
          <div className="relative">
            {/* Photo-style gradient card */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-md)] aspect-[4/3.6]"
              style={{
                background:
                  "linear-gradient(135deg, #1677FF 0%, #0EA5E9 45%, #0B6FE0 100%)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.04), 0 8px 20px -8px rgba(22,119,255,0.35)",
              }}
            >
              {/* soft glow */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 60%), radial-gradient(ellipse 90% 70% at 80% 90%, rgba(11,19,43,0.25) 0%, transparent 60%)",
                }}
              />
              {/* Grid pattern */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  maskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 80%)",
                }}
              />
              {/* Big wrench icon as "service scene" */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Wrench
                    className="w-7 h-7 sm:w-9 sm:h-9 text-white"
                    strokeWidth={2.25}
                  />
                </div>
              </div>
              {/* Top badge: "Licensed & Insured" */}
              <div
                className="absolute top-2 left-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 1px 4px rgba(11,19,43,0.15)",
                }}
              >
                <ShieldCheck
                  className="w-2 h-2"
                  strokeWidth={3}
                  style={{ color: "#10B981" }}
                />
                <span
                  className="h-[5px] w-8 rounded-full"
                  style={{ background: "#1A2541" }}
                />
              </div>
              {/* Floating review card (bottom-right) */}
              <div
                className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2 py-1.5 rounded-md"
                style={{
                  background: "#fff",
                  boxShadow: "0 4px 12px rgba(11,19,43,0.18)",
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #F59E0B, #EF4444)",
                  }}
                >
                  <Star
                    className="w-2.5 h-2.5 text-white"
                    fill="#fff"
                    strokeWidth={0}
                  />
                </div>
                <div>
                  <div className="flex gap-[1.5px] mb-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="w-1.5 h-1.5"
                        style={{ color: "#F59E0B" }}
                        fill="#F59E0B"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <div
                    className="h-[5px] w-12 rounded-full"
                    style={{ background: "#C9D4E3" }}
                  />
                </div>
              </div>
            </div>
            {/* "Available today" pill floating above card */}
            <div
              className="absolute -top-2 -right-1 inline-flex items-center gap-1 px-2 py-1 rounded-full"
              style={{
                background: "#fff",
                boxShadow: "0 2px 8px rgba(11,19,43,0.12)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span
                className="relative flex w-1.5 h-1.5"
              >
                <span
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: "#10B981",
                    animation: "subtlePulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="relative w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10B981" }}
                />
              </span>
              <span
                className="h-[5px] w-12 rounded-full"
                style={{ background: "#1A2541" }}
              />
            </div>
          </div>
        </div>

        {/* Services row */}
        <div className="relative grid grid-cols-3 gap-2 sm:gap-2.5">
          {services.map(({ Icon, color, label }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-[var(--radius-sm)] p-2.5 border flex items-center gap-2"
              style={{
                borderColor: "var(--border-color)",
                background: "#fff",
                boxShadow: "0 1px 2px rgba(17,35,68,0.03)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-12px] top-[-12px] w-[40px] h-[40px]"
                style={{
                  background: `radial-gradient(circle, ${color}26 0%, transparent 70%)`,
                }}
              />
              <div
                className="relative w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                style={{ background: `${color}14`, color }}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
              <div className="relative flex-1 min-w-0">
                <div
                  className="h-[7px] w-[80%] rounded-full mb-1"
                  style={{ background: "#1A2541" }}
                />
                <div
                  className="h-[5px] w-[55%] rounded-full"
                  style={{ background: "#C9D4E3" }}
                />
              </div>
              <span className="sr-only">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
