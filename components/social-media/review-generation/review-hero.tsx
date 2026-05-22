import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Star,
  ShieldCheck,
  Zap,
  MessageSquare,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Inbox,
  ArrowDown,
} from "lucide-react"

const proofPills = [
  { Icon: Zap, label: "Sent 60s after job complete" },
  { Icon: Star, label: "4.0★ → 4.8★ in 30 days" },
  { Icon: ShieldCheck, label: "Bad reviews stay private" },
  { Icon: BarChart3, label: "Google + 7 more platforms" },
]

export function ReviewHero() {
  return (
    <section
      aria-labelledby="review-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-6%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.04) 45%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-[28%] left-[-12%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[8%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <a href="/" className="hover:text-[var(--accent)]">
                Home
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/services" className="hover:text-[var(--accent)]">
                Services
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a
                href="/services/social-media"
                className="hover:text-[var(--accent)]"
              >
                Social Media
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Review Generation
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(245,158,11,0.10)",
                borderColor: "rgba(245,158,11,0.30)",
                color: "#B45309",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Review Generation · Done-for-you
            </span>

            <h1
              id="review-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Turn every job into a{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">5-star review</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              We{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                automate review requests
              </span>{" "}
              by SMS and email 60 seconds after every job, route happy customers
              straight to your Google, Yelp, and Facebook profiles, and quietly
              send unhappy ones to a private inbox so you can fix the issue
              before it ever goes public.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free reputation audit
              </PrimaryButton>
              <SecondaryButton asLink href="#review-templates">
                See sample request flow
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "rgba(245,158,11,0.14)",
                      color: "#B45309",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Review Request showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <ReviewRequestShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewRequestShowcase() {
  return (
    <div className="relative max-w-[520px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-3deg) translate(-10px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.55) 100%)",
          border: "1px solid rgba(245,158,11,0.28)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(245,158,11,0.18)",
        }}
      />

      {/* Main card */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* Top status bar */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="relative w-2.5 h-2.5 rounded-full"
              style={{
                background: "#22C55E",
                boxShadow: "0 0 0 3px rgba(34,197,94,0.22)",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#FCD34D" }}
            >
              Live · Review request
            </span>
          </div>
          <span
            className="text-[10.5px] font-mono tracking-[0.08em] hidden xs:inline"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            sent · 0:58 ago
          </span>
        </div>

        {/* SMS thread */}
        <div className="px-4 sm:px-5 pt-5 pb-3 space-y-2.5">
          <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-center"
            style={{ color: "var(--muted)" }}
          >
            Today · 4:32 PM
          </div>

          {/* Outbound bubble (business → customer) */}
          <div className="flex justify-start">
            <div
              className="max-w-[78%] px-3.5 py-2.5 rounded-[18px] rounded-bl-[6px]"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[0.1em] mb-1"
                style={{ color: "var(--muted)" }}
              >
                Acme HVAC
              </div>
              <div className="text-[13.5px] leading-[1.45]">
                Hey Sarah — thanks for choosing us today! How was Marcus&apos;s
                tune-up?
              </div>
            </div>
          </div>

          {/* Inbound bubble (customer → business) */}
          <div className="flex justify-end">
            <div
              className="max-w-[78%] px-3.5 py-2.5 rounded-[18px] rounded-br-[6px]"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(22,119,255,0.30)",
              }}
            >
              <div className="flex items-center gap-0.5 mb-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5"
                    fill="#FCD34D"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <div className="text-[13.5px] leading-[1.45]">
                5 stars! He was on time, super clean, walked me through
                everything 🙌
              </div>
            </div>
          </div>

          {/* Auto-route bubble */}
          <div className="flex justify-start pt-1">
            <div
              className="max-w-[88%] px-3.5 py-2.5 rounded-[14px]"
              style={{
                background: "rgba(34,197,94,0.10)",
                border: "1px solid rgba(34,197,94,0.30)",
                color: "#15803D",
              }}
            >
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] mb-1.5">
                <CheckCircle2 className="w-3 h-3" strokeWidth={2.75} />
                Auto-routed to Google in 0.4s
              </div>
              <div
                className="text-[12.5px] leading-[1.4]"
                style={{ color: "var(--ink)" }}
              >
                Tap to leave your review on Google ↗
              </div>
            </div>
          </div>
        </div>

        {/* Branching outcome strip */}
        <div
          className="px-4 sm:px-5 pt-3 pb-4"
          style={{ borderTop: "1px dashed var(--border-color)" }}
        >
          <div
            className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-3 text-center"
            style={{ color: "var(--muted)" }}
          >
            <ArrowDown className="w-3 h-3 inline-block mr-1" strokeWidth={2.5} />
            Smart routing — based on rating
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div
              className="px-3 py-2.5 rounded-[12px] text-center"
              style={{
                background: "rgba(34,197,94,0.10)",
                border: "1px solid rgba(34,197,94,0.30)",
              }}
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                <img
                  src={icons8Url("17949", 96)}
                  alt="Google"
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 object-contain"
                />
                <img
                  src={icons8Url("20905", 96)}
                  alt="Yelp"
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 object-contain"
                />
                <img
                  src={icons8Url("118497", 96)}
                  alt="Facebook"
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                style={{ color: "#15803D" }}
              >
                4–5 ★ · public
              </div>
            </div>
            <div
              className="px-3 py-2.5 rounded-[12px] text-center"
              style={{
                background: "rgba(245,158,11,0.10)",
                border: "1px solid rgba(245,158,11,0.30)",
              }}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Inbox className="w-4 h-4" strokeWidth={2.25} style={{ color: "#B45309" }} />
                <ShieldCheck className="w-4 h-4" strokeWidth={2.25} style={{ color: "#B45309" }} />
              </div>
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                style={{ color: "#B45309" }}
              >
                1–3 ★ · private inbox
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-4 sm:px-5 py-3 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "var(--accent)" }} />
            <span
              className="text-[11px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              42% reply rate · industry avg 12%
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold"
            style={{ color: "var(--muted)" }}
          >
            <Zap className="w-3 h-3" strokeWidth={2.5} />
            Auto
          </span>
        </div>
      </div>

      {/* Floating accents */}

      {/* Top-left: reviews this month */}
      <div
        className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
          boxShadow:
            "0 2px 6px rgba(245,158,11,0.35), 0 14px 32px rgba(245,158,11,0.28)",
          color: "#fff",
          transform: "rotate(-4deg)",
        }}
      >
        <Star className="w-4 h-4" fill="#fff" strokeWidth={0} />
        <div className="flex items-baseline gap-1">
          <span className="text-[22px] font-extrabold leading-none">+47</span>
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            this month
          </span>
        </div>
      </div>

      {/* Top-right: rating chip */}
      <div
        className="absolute -top-7 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #F0FDF4 100%)",
          border: "1px solid rgba(34,197,94,0.3)",
          boxShadow:
            "0 2px 6px rgba(34,197,94,0.18), 0 14px 32px rgba(34,197,94,0.18)",
          transform: "rotate(5deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #4ADE80 0%, #22C55E 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(34,197,94,0.35)",
          }}
        >
          <Star className="w-3.5 h-3.5" strokeWidth={0} fill="#fff" />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Google rating
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            4.9 ★
          </span>
        </div>
      </div>

      {/* Bottom-right: saved chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #EFF6FF 100%)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 12px 28px rgba(22,119,255,0.14)",
          transform: "rotate(3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(22,119,255,0.35)",
          }}
        >
          <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Saved from public
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            12 this mo
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,158,11,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}
