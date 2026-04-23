import Link from "next/link"
import { Star, ShoppingBag, Check, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const reviewStats = [
  { value: "+43%", label: "review volume in 60 days" },
  { value: "4.7\u2605", label: "typical steady-state avg" },
  { value: "<18h", label: "response SLA" },
  { value: "87%",  label: "auto-request open rate" },
]

const reviewBullets = [
  "Auto-request SMS, email, and in-venue QR flow",
  "Negative-review deflection to owner before public post",
  "Monthly photo + Q&A refresh on Google Business Profile",
]

const channels = [
  { label: "Website",  bg: "rgba(22,119,255,0.12)", color: "#1677FF" },
  { label: "DoorDash", bg: "rgba(220,38,38,0.12)",  color: "#DC2626" },
  { label: "UberEats", bg: "rgba(34,197,94,0.14)",  color: "#15803D" },
  { label: "GrubHub",  bg: "rgba(245,158,11,0.14)", color: "#B45309" },
]

const orderingBullets = [
  "POS-agnostic integration: Toast, Square, Clover, Revel, Lightspeed",
  "Margin math per channel &mdash; know your real per-order P&L",
  "First-party ordering push: nudge repeat buyers off the 30%-fee apps",
]

export function RestStack() {
  return (
    <section
      aria-labelledby="rest-stack-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The Two Levers"
          heading={
            <span id="rest-stack-heading">
              Reviews go up.{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Margins too</span>.
              </span>
            </span>
          }
          paragraph="Every restaurant lives or dies on two dashboards: the one that shows what people say, and the one that shows what they paid. We run both."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left panel — REVIEW ENGINE */}
          <article
            className="card-surface card-surface-hover relative overflow-hidden p-7 sm:p-9 flex flex-col"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 85% 10%, rgba(249,115,22,0.14) 0%, transparent 65%)",
              }}
            />

            <div className="relative flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                style={{ background: "rgba(249,115,22,0.14)", color: "#F97316" }}
              >
                <Star className="w-3 h-3" strokeWidth={2.5} />
                Review engine
              </span>
            </div>

            <h3 className="relative mt-4 text-[24px] sm:text-[28px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
              Google &middot; Yelp &middot; TripAdvisor &mdash;{" "}
              <span className="whitespace-nowrap">on autopilot.</span>
            </h3>

            <p className="relative mt-3.5 text-[14.5px] leading-[1.65]" style={{ color: "var(--muted)" }}>
              Every table&rsquo;s ticket triggers a review-request SMS three hours later. 5-star responses route straight to Google; dissatisfied ones route to your GM first. AI drafts tailored replies &mdash; you approve in one tap.
            </p>

            <div className="relative mt-5 grid grid-cols-2 gap-3">
              {reviewStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[var(--radius-sm)] px-3 py-3 text-center"
                  style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.22)" }}
                >
                  <div className="text-[20px] sm:text-[22px] font-bold leading-none tracking-[-0.02em]" style={{ color: "#F97316" }}>
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <ul className="relative mt-5 space-y-2">
              {reviewBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13.5px]" style={{ color: "var(--ink)" }}>
                  <span
                    className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(249,115,22,0.15)" }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: "#F97316" }} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              <Link
                href="/services/social-media/review-generation"
                className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
              >
                Review generation
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
              <Link
                href="/solutions/ai-agents"
                className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
              >
                AI agents
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </div>
          </article>

          {/* Right panel — ORDERING STACK */}
          <article
            className="card-surface card-surface-hover relative overflow-hidden p-7 sm:p-9 flex flex-col"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 85% 10%, rgba(220,38,38,0.14) 0%, transparent 65%)",
              }}
            />

            <div className="relative flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                style={{ background: "rgba(220,38,38,0.14)", color: "#DC2626" }}
              >
                <ShoppingBag className="w-3 h-3" strokeWidth={2.5} />
                Ordering stack
              </span>
            </div>

            <h3 className="relative mt-4 text-[24px] sm:text-[28px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
              One dashboard for{" "}
              <span className="whitespace-nowrap">every order channel.</span>
            </h3>

            <p className="relative mt-3.5 text-[14.5px] leading-[1.65]" style={{ color: "var(--muted)" }}>
              First-party web orders, DoorDash, UberEats, GrubHub, in-store, phone &mdash; consolidated into one report so you can see which channel earns the margin and which just steals it.
            </p>

            <div className="relative mt-5 grid grid-cols-2 gap-3">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className="rounded-[var(--radius-sm)] px-3 py-3 text-center flex items-center justify-center"
                  style={{ background: c.bg, border: `1px solid ${c.color}33`, minHeight: "52px" }}
                >
                  <span className="text-[13px] font-bold" style={{ color: c.color }}>
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            <ul className="relative mt-5 space-y-2">
              {orderingBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13.5px]" style={{ color: "var(--ink)" }}>
                  <span
                    className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(220,38,38,0.15)" }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: "#DC2626" }} strokeWidth={3} />
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              <Link
                href="/solutions/payments"
                className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
              >
                Payments
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
              <Link
                href="/solutions/analytics"
                className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
              >
                Analytics
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </div>
          </article>
        </div>

        <p className="mt-8 text-center text-[14px]" style={{ color: "var(--muted)" }}>
          Want a stack audit? We&rsquo;ll map your current POS, delivery, and review tools in 30 min.{" "}
          <Link href="#contact" className="group inline-flex items-center gap-1 font-semibold" style={{ color: "#F97316" }}>
            Book a call
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </Link>
        </p>
      </div>
    </section>
  )
}
