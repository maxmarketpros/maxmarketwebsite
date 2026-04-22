"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { Star, Sparkles, Check, TrendingUp, DollarSign } from "lucide-react"

const trustItems = [
  { label: "Powered by Stripe" },
  { label: "No per-transaction markup" },
  { label: "4.9★ on Google" },
]

export function PaymentsHero() {
  return (
    <section aria-labelledby="payments-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] left-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.04) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[460px] h-[460px] sm:w-[780px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.16) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[620px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <nav aria-label="Breadcrumb" className="mb-6 text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-[var(--accent)]">Home</a></li>
                <li aria-hidden>/</li>
                <li><a href="/solutions" className="hover:text-[var(--accent)]">Solutions</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>Payments & Invoicing</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Payments & Invoicing
            </Pill>

            <h1 id="payments-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Get paid faster. Accept payments{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">anywhere</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Text-to-pay invoicing, recurring billing, deposits, and estimates — all powered by Stripe, all hooked into your CRM. Zero app downloads for your customers, zero manual entry for your team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free payments audit
              </PrimaryButton>
              <SecondaryButton asLink href="#payments-features">
                See the features
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Star className="w-4 h-4" style={{ color: "#22C55E" }} fill="currentColor" strokeWidth={0} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <InvoiceMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full opacity-60" style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
              </span>
              Paid · 2 min ago
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(34,197,94,0.32)]"
              style={{ background: "#22C55E" }}
            >
              <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
              +$4,280 today
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InvoiceMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-4 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(34,197,94,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative">
        {/* Invoice header */}
        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
              Invoice
            </div>
            <div className="text-[13px] font-bold" style={{ color: "var(--ink)" }}>
              #INV-00482
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
            style={{ background: "#22C55E14", color: "#16A34A" }}
          >
            <Check className="w-3 h-3" strokeWidth={3} />
            Paid
          </div>
        </div>

        {/* Customer */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-[10.5px]" style={{ color: "var(--muted)" }}>
              Billed to
            </div>
            <div className="text-[13px] font-bold" style={{ color: "var(--ink)" }}>
              Maria Lopez
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10.5px]" style={{ color: "var(--muted)" }}>Due</div>
            <div className="text-[12px] font-bold" style={{ color: "var(--ink)" }}>Apr 15, 2026</div>
          </div>
        </div>

        {/* Line items */}
        <div
          className="mt-3 rounded-[var(--radius-md)] border"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <LineItem label="AC tune-up · 2026 service" qty="1" total="$149.00" />
          <div className="h-[1px]" style={{ background: "var(--border-color)" }} />
          <LineItem label="Replace air filter (MERV 13)" qty="1" total="$45.00" />
          <div className="h-[1px]" style={{ background: "var(--border-color)" }} />
          <LineItem label="Labor · 30 min" qty="0.5" total="$60.00" />
        </div>

        {/* Total row */}
        <div className="mt-3 flex items-center justify-between px-2">
          <div className="text-[11px] font-semibold" style={{ color: "var(--muted)" }}>
            Total
          </div>
          <div className="text-[20px] sm:text-[22px] font-bold tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
            $254.00
          </div>
        </div>

        {/* Payment method row */}
        <div
          className="mt-3 p-2.5 rounded-[var(--radius-md)] border flex items-center gap-2"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "#22C55E", color: "#fff" }}
          >
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11.5px] font-bold" style={{ color: "var(--ink)" }}>
              Paid via Apple Pay
            </div>
            <div className="text-[10px]" style={{ color: "var(--muted)" }}>
              Visa ending 4242 · Apr 11, 2:14 PM
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 shrink-0">
            <PaymentChip label="Visa" bg="#1A1F71" />
            <PaymentChip label="MC" bg="#EB001B" />
            <PaymentChip label="" icon={<DollarSign className="w-3 h-3" strokeWidth={2.75} />} bg="#000" />
          </div>
        </div>

        {/* Action button */}
        <div
          className="mt-3 py-2.5 rounded-[var(--radius-sm)] text-center text-[13px] font-bold text-white"
          style={{
            background: "linear-gradient(180deg, #22C55E 0%, #16A34A 100%)",
            boxShadow: "0 1px 2px rgba(17,35,68,0.1), 0 4px 12px rgba(34,197,94,0.3)",
          }}
        >
          View receipt
        </div>
      </div>
    </div>
  )
}

function LineItem({ label, qty, total }: { label: string; qty: string; total: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="min-w-0 flex-1">
        <div className="text-[12px] font-semibold truncate" style={{ color: "var(--ink)" }}>
          {label}
        </div>
        <div className="text-[10px]" style={{ color: "var(--muted)" }}>
          Qty {qty}
        </div>
      </div>
      <div className="text-[12px] font-bold shrink-0" style={{ color: "var(--ink)" }}>
        {total}
      </div>
    </div>
  )
}

function PaymentChip({ label, bg, icon }: { label: string; bg: string; icon?: React.ReactNode }) {
  return (
    <div
      className="h-5 min-w-[28px] px-1.5 rounded flex items-center justify-center text-[8.5px] font-bold text-white"
      style={{ background: bg }}
    >
      {icon || label}
    </div>
  )
}
