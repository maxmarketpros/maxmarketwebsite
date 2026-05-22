import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  CheckCircle2,
  ClipboardList,
  Palette,
  Calendar,
  ArrowUpRight,
  Send,
  Layers,
  FileDown,
  RefreshCw,
} from "lucide-react"

const guarantees = [
  "Unlimited revisions until you sign off",
  "Source files included on every project",
  "First concept in your inbox within 48 hours",
]

const sibling = [
  { label: "Social media management", href: "/services/social-media/management" },
  { label: "Review generation", href: "/services/social-media/review-generation" },
  { label: "SEO services", href: "/services/seo" },
  { label: "All services", href: "/services" },
]

export function GraphicDesignFinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="graphic-design-final-cta-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-6%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-6%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div
          className="card-surface overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            boxShadow:
              "0 1px 3px var(--shadow-color), 0 24px 60px var(--shadow-color)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0 lg:gap-0">
            {/* Left: copy */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border w-fit"
                style={{
                  background: "rgba(236,72,153,0.10)",
                  borderColor: "rgba(236,72,153,0.30)",
                  color: "#BE185D",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                Open for new projects
              </span>

              <h2
                id="graphic-design-final-cta-heading"
                className="mt-5 text-[32px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                Send us a project{" "}
                <span className="whitespace-nowrap">
                  <span className="accent-underline">brief</span>.
                </span>
              </h2>

              <p
                className="mt-4 text-[16px] sm:text-[17.5px] leading-[1.6] max-w-[520px]"
                style={{ color: "var(--muted)" }}
              >
                Drop the basics — what you need designed, your brand colors, the
                deadline. Concept lands in your inbox within 48 hours. Final
                files within 5 business days.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <PrimaryButton size="lg" asLink href="/contact">
                  Start my brief
                </PrimaryButton>
                <SecondaryButton asLink href="/contact">
                  Book a call
                </SecondaryButton>
              </div>

              <ul className="mt-8 space-y-2.5">
                {guarantees.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-2.5 text-[14.5px] font-medium"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(180deg, #4ADE80 0%, #16A34A 100%)",
                        color: "#fff",
                      }}
                    >
                      <CheckCircle2 className="w-3 h-3" strokeWidth={2.75} />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>

              {/* Sibling chips */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.18em] mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  Bundle with
                </div>
                <div className="flex flex-wrap gap-2">
                  {sibling.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all hover:translate-y-[-1px]"
                      style={{
                        background: "var(--surface)",
                        borderColor: "var(--border-color)",
                        color: "var(--ink)",
                      }}
                    >
                      {s.label}
                      <ArrowUpRight
                        className="w-3 h-3"
                        strokeWidth={2.5}
                        style={{ color: "var(--accent)" }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: brief intake mockup */}
            <div
              className="relative p-6 sm:p-8 lg:p-10 flex items-center"
              style={{
                background:
                  "linear-gradient(160deg, rgba(236,72,153,0.06) 0%, rgba(22,119,255,0.06) 60%, rgba(252,211,77,0.08) 100%)",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <BriefIntakeMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BriefIntakeMockup() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      <div
        className="card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #F472B6 0%, #EC4899 100%)",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(236,72,153,0.35)",
              }}
            >
              <ClipboardList className="w-3.5 h-3.5" strokeWidth={2.75} />
            </span>
            <div className="leading-tight">
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Project brief
              </div>
              <div className="text-[13px] font-bold" style={{ color: "#fff" }}>
                Acme HVAC · Q2 campaign
              </div>
            </div>
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-md"
            style={{ background: "rgba(252,211,77,0.18)", color: "#FCD34D" }}
          >
            Draft
          </span>
        </div>

        {/* Form fields */}
        <div className="p-5 space-y-3">
          <FormField
            label="Project type"
            Icon={Layers}
            value="Ad creative · 3 variants"
            chipColor="#EC4899"
          />
          <FormField
            label="Brand colors"
            Icon={Palette}
            valueNode={
              <div className="flex items-center gap-1.5">
                {["#1677FF", "#FCD34D", "#0B132B", "#BE185D"].map((c) => (
                  <span
                    key={c}
                    className="w-5 h-5 rounded-md border"
                    style={{ background: c, borderColor: "var(--border-color)" }}
                  />
                ))}
                <span
                  className="text-[11px] font-mono ml-1"
                  style={{ color: "var(--muted)" }}
                >
                  + 1 accent
                </span>
              </div>
            }
            chipColor="#1677FF"
          />
          <FormField
            label="Deliverables"
            Icon={FileDown}
            value="Meta · 4:5, 1:1, 9:16 + source"
            chipColor="#16A34A"
          />
          <FormField
            label="Deadline"
            Icon={Calendar}
            value="Friday · May 9"
            chipColor="#F59E0B"
          />
        </div>

        {/* Project timeline bar */}
        <div className="px-5 pb-5">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2.5"
            style={{ color: "var(--muted)" }}
          >
            Project timeline
          </div>
          <div className="relative">
            <div
              className="absolute inset-x-0 top-[10px] h-[3px] rounded-full"
              style={{ background: "var(--border-color)" }}
            />
            <div
              className="absolute left-0 top-[10px] h-[3px] rounded-full"
              style={{
                width: "32%",
                background:
                  "linear-gradient(90deg, #EC4899 0%, #1677FF 60%, #F59E0B 100%)",
              }}
            />
            <div className="relative grid grid-cols-4 gap-1">
              {[
                { day: "Day 0", label: "Brief", color: "#EC4899", done: true },
                { day: "Day 2", label: "Concept", color: "#1677FF", done: true },
                { day: "Day 5", label: "Revisions", color: "#F59E0B", done: false },
                { day: "Day 7", label: "Final", color: "#16A34A", done: false },
              ].map((m) => (
                <div key={m.label} className="flex flex-col items-center">
                  <span
                    className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
                    style={{
                      background: m.done ? m.color : "var(--surface)",
                      color: m.done ? "#fff" : "var(--muted)",
                      border: m.done
                        ? `2px solid ${m.color}`
                        : "2px solid var(--border-color)",
                      boxShadow: m.done ? `0 4px 12px ${m.color}55` : "none",
                    }}
                  >
                    {m.done ? (
                      <CheckCircle2 className="w-3 h-3" strokeWidth={2.75} />
                    ) : (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--muted)" }}
                      />
                    )}
                  </span>
                  <span
                    className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: m.done ? m.color : "var(--muted)" }}
                  >
                    {m.day}
                  </span>
                  <span
                    className="text-[10px] font-semibold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accept & start row */}
        <div
          className="px-5 py-4 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center gap-2">
            <RefreshCw
              className="w-3.5 h-3.5"
              strokeWidth={2.5}
              style={{ color: "var(--muted)" }}
            />
            <span
              className="text-[11px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Auto-saved · 3s ago
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11.5px] font-bold uppercase tracking-[0.08em]"
            style={{
              background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
              color: "#fff",
              boxShadow: "0 4px 14px rgba(22,119,255,0.35)",
            }}
          >
            <Send className="w-3 h-3" strokeWidth={2.75} />
            Accept & start
          </span>
        </div>
      </div>

      {/* Floating chip */}
      <div
        className="absolute -top-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #FCD34D 0%, #F59E0B 100%)",
          boxShadow:
            "0 2px 6px rgba(245,158,11,0.35), 0 14px 32px rgba(245,158,11,0.28)",
          color: "#fff",
          transform: "rotate(4deg)",
        }}
      >
        <Sparkles className="w-4 h-4" strokeWidth={2.5} />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
          48-hr concept
        </span>
      </div>
    </div>
  )
}

function FormField({
  label,
  Icon,
  value,
  valueNode,
  chipColor,
}: {
  label: string
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  value?: string
  valueNode?: React.ReactNode
  chipColor: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em]"
        style={{ color: "var(--muted)" }}
      >
        <Icon className="w-3 h-3" strokeWidth={2.5} />
        {label}
      </span>
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-md border"
        style={{
          background: "var(--bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <span
          className="w-1 h-5 rounded-full"
          style={{ background: chipColor }}
        />
        {valueNode ? (
          valueNode
        ) : (
          <span
            className="text-[13px] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            {value}
          </span>
        )}
      </div>
    </div>
  )
}
