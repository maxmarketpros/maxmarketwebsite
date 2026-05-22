import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { CreditCard, Utensils, Home, Package, TrendingUp } from "lucide-react"
import { MiniQR } from "./mini-qr"

type UseCase = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  color: string
  title: string
  scenario: string
  scans: string
  conversion: string
}

const useCases: UseCase[] = [
  {
    icon: CreditCard,
    color: "#1677FF",
    title: "Business Card",
    scenario: "Homeowner meets your tech, scans QR for instant review + booking widget.",
    scans: "340 scans",
    conversion: "24% book rate",
  },
  {
    icon: Utensils,
    color: "#F59E0B",
    title: "Printed Menu",
    scenario: "Restaurant table tent QR → digital menu, online ordering, and loyalty signup.",
    scans: "1,820 scans",
    conversion: "18% signup rate",
  },
  {
    icon: Home,
    color: "#22C55E",
    title: "Yard Sign",
    scenario: "Finished job yard sign — neighbors scan for a free quote on the same service.",
    scans: "142 scans",
    conversion: "38% lead rate",
  },
  {
    icon: Package,
    color: "#8B5CF6",
    title: "Product Label",
    scenario: "Service sticker on installed equipment — customer scans for warranty or refill.",
    scans: "680 scans",
    conversion: "62% return rate",
  },
]

export function QRCodesUseCases() {
  return (
    <section aria-labelledby="qr-codes-use-cases-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-8%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Where QR Codes Work"
          heading={
            <span id="qr-codes-use-cases-heading">
              Every physical touchpoint becomes a{" "}
              <span className="accent-underline">
                trackable <span className="whitespace-nowrap">lead.</span>
              </span>
            </span>
          }
          paragraph="Four real-world placements we set up for service-business clients, with scan and conversion numbers from the field."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {useCases.map((u) => <UseCaseCard key={u.title} useCase={u} />)}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="/solutions/analytics">
            See how scans connect to attribution
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const Icon = useCase.icon
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex items-start gap-4 sm:gap-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 80% 60% at 30% 0%, ${useCase.color}10 0%, transparent 65%)` }}
      />

      <div className="relative shrink-0">
        <MiniQR color={useCase.color} size={88} />
      </div>

      <div className="relative flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
            style={{ background: `${useCase.color}14`, color: useCase.color }}
          >
            <Icon className="w-3.5 h-3.5" strokeWidth={2.25} />
          </div>
          <h3 className="text-[17px] sm:text-[19px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
            {useCase.title}
          </h3>
        </div>

        <p className="text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {useCase.scenario}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: "var(--bg)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
          >
            {useCase.scans}
          </span>
          <span
            className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${useCase.color}14`, color: useCase.color }}
          >
            <TrendingUp className="w-2.5 h-2.5" strokeWidth={2.5} />
            {useCase.conversion}
          </span>
        </div>
      </div>
    </article>
  )
}
