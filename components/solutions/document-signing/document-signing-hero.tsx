"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Check, ShieldCheck, Edit3 } from "lucide-react"

const trustItems = [
  { label: "ESIGN + UETA compliant" },
  { label: "Court-ready audit trail" },
  { label: "72% signed on mobile" },
]

export function DocumentSigningHero() {
  return (
    <section aria-labelledby="doc-signing-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[840px] sm:h-[840px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[460px] h-[460px] sm:w-[760px] sm:h-[760px] rounded-full"
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
                <li aria-current="page" style={{ color: "var(--ink)" }}>Document Signing</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              E-Signatures & Contracts
            </Pill>

            <h1 id="doc-signing-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Close deals with a signature —{" "}
              <span className="whitespace-nowrap">
                not a <span className="accent-underline">filing cabinet</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Legally binding e-signatures for proposals, service agreements, change orders, and NDAs — signed from any phone in under 90 seconds. Full audit trail included.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Request a sample document
              </PrimaryButton>
              <SecondaryButton asLink href="#doc-signing-features">
                See the features
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Star className="w-4 h-4" style={{ color: "#8B5CF6" }} fill="currentColor" strokeWidth={0} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <ContractMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#8B5CF6" }} strokeWidth={2.5} />
              ESIGN + UETA
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,0.32)]"
              style={{ background: "#8B5CF6" }}
            >
              <Check className="w-3.5 h-3.5" strokeWidth={2.75} />
              Signed · 2:14 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContractMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-4 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(139,92,246,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative">
        {/* Document header */}
        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center"
              style={{ background: "rgba(139,92,246,0.14)", color: "#8B5CF6" }}
            >
              <Edit3 className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[13px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                Master Service Agreement
              </div>
              <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                Version 2 · 3 pages
              </div>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
            style={{ background: "#22C55E14", color: "#16A34A" }}
          >
            <Check className="w-3 h-3" strokeWidth={3} />
            Signed
          </div>
        </div>

        {/* Document pages stack (2-up visual) */}
        <div className="mt-3 relative">
          {/* Back page peek */}
          <div
            aria-hidden
            className="absolute -top-2 left-3 right-3 h-10 rounded-t-[var(--radius-md)] border"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              borderBottom: "none",
              opacity: 0.5,
            }}
          />

          {/* Front page */}
          <div
            className="relative rounded-[var(--radius-md)] border p-4 sm:p-5 space-y-3"
            style={{ background: "var(--surface)", borderColor: "var(--border-color)", boxShadow: "0 8px 24px rgba(17,35,68,0.06)" }}
          >
            {/* Document title */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                Page 3 of 3
              </div>
              <div className="mt-1 text-[13px] font-bold" style={{ color: "var(--ink)" }}>
                Acceptance & Signatures
              </div>
            </div>

            {/* Simulated paragraphs */}
            <div className="space-y-1">
              <div className="h-2 rounded-full w-full" style={{ background: "var(--border-color)" }} />
              <div className="h-2 rounded-full w-[92%]" style={{ background: "var(--border-color)" }} />
              <div className="h-2 rounded-full w-[68%]" style={{ background: "var(--border-color)" }} />
            </div>

            {/* Signature fields */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <SignatureField
                role="Client"
                name="Maria Lopez"
                signed
                color="#8B5CF6"
              />
              <SignatureField
                role="Company"
                name="Max Market Pros"
                signed
                color="#1677FF"
              />
            </div>

            {/* Timestamp / audit row */}
            <div
              className="mt-2 flex items-center gap-2 rounded-[var(--radius-sm)] p-2 border"
              style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: "#8B5CF6" }} strokeWidth={2.5} />
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-bold truncate" style={{ color: "var(--ink)" }}>
                  Audit trail captured
                </div>
                <div className="text-[9.5px] truncate" style={{ color: "var(--muted)" }}>
                  IP 73.194.x.x · iOS Safari · 2:14 PM PT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SignatureField({
  role,
  name,
  signed,
  color,
}: {
  role: string
  name: string
  signed: boolean
  color: string
}) {
  return (
    <div
      className="rounded-[var(--radius-sm)] border p-2"
      style={{
        background: signed ? `${color}08` : "var(--bg)",
        borderColor: signed ? `${color}44` : "var(--border-color)",
      }}
    >
      <div className="text-[9px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
        {role}
      </div>
      <div
        className="mt-0.5 italic text-[13px] font-semibold"
        style={{
          fontFamily: "cursive, system-ui",
          color: signed ? color : "var(--muted)",
          textDecoration: signed ? "underline" : "none",
          textUnderlineOffset: "3px",
          textDecorationThickness: "2px",
          textDecorationColor: `${color}66`,
        }}
      >
        {signed ? name : "Pending..."}
      </div>
      <div className="mt-0.5 text-[9px] font-medium" style={{ color: "var(--muted)" }}>
        {name}
      </div>
    </div>
  )
}
