import { SectionHeader } from "@/components/ui/section-header"
import {
  Smartphone,
  MapPin,
  Lock,
  TrendingUp,
  Mic,
  Search,
  Car,
  Compass,
  Wallet,
  Glasses,
} from "lucide-react"

const stats = [
  {
    Icon: Smartphone,
    value: "1.3B+",
    label: "Active iPhones worldwide",
    sub: "Every one ships with Apple Maps as the default",
  },
  {
    Icon: MapPin,
    value: "~25%",
    label: "Of US turn-by-turn navigation",
    sub: "Tens of millions of “near me” searches a day",
  },
  {
    Icon: Lock,
    value: "58%",
    label: "Of US businesses unclaimed",
    sub: "Their Apple listing is wrong, thin, or empty",
  },
  {
    Icon: TrendingUp,
    value: "16%",
    label: "Actively manage their profile",
    sub: "A wide-open window to outrank locals",
  },
]

const surfaces = [
  { Icon: MapPin, label: "Apple Maps" },
  { Icon: Mic, label: "Siri" },
  { Icon: Search, label: "Spotlight" },
  { Icon: Car, label: "CarPlay" },
  { Icon: Compass, label: "Safari" },
  { Icon: Wallet, label: "Wallet" },
  { Icon: Glasses, label: "Vision Pro" },
]

export function AppleBusinessWhy() {
  return (
    <section
      aria-labelledby="apple-business-why-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Apple Maps, why now"
          heading={
            <span id="apple-business-why-heading">
              Half your market is on iPhone — and almost{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">no one is managing</span>
              </span>{" "}
              their Apple listing.
            </span>
          }
          paragraph="iPhone users skew older, higher-income, and more brand-loyal — exactly who local service businesses want. Yet most of your competitors have never claimed their Apple profile, so a properly managed one wins visibility fast."
        />

        {/* Stat cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className="card-surface card-surface-hover p-5 sm:p-6"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.6s ease-out ${0.08 * idx}s both`,
              }}
            >
              <span
                className="w-10 h-10 rounded-[11px] flex items-center justify-center"
                style={{
                  background: "rgba(22,119,255,0.1)",
                  color: "var(--accent)",
                }}
              >
                <s.Icon className="w-5 h-5" strokeWidth={2.25} />
              </span>
              <div
                className="mt-4 text-[30px] sm:text-[38px] font-extrabold tracking-[-0.02em] leading-none"
                style={{ color: "var(--ink)" }}
              >
                {s.value}
              </div>
              <div
                className="mt-2 text-[13.5px] font-semibold leading-[1.3]"
                style={{ color: "var(--ink)" }}
              >
                {s.label}
              </div>
              <div
                className="mt-1.5 text-[12.5px] leading-[1.45]"
                style={{ color: "var(--muted)" }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Surfaces strip */}
        <div
          className="mt-10 rounded-[var(--radius-lg)] border p-6 sm:p-7"
          style={{
            background: "var(--bg)",
            borderColor: "var(--border-color)",
            animation: "fadeInUp 0.7s ease-out 0.1s both",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="lg:w-[260px] shrink-0">
              <div
                className="text-[12px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--accent)" }}
              >
                One profile, everywhere Apple
              </div>
              <p
                className="mt-1.5 text-[14px] leading-[1.5]"
                style={{ color: "var(--muted)" }}
              >
                Update once and your brand, hours, and actions stay consistent
                across every Apple surface.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {surfaces.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13.5px] font-semibold"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <s.Icon
                    className="w-4 h-4"
                    strokeWidth={2.25}
                    style={{ color: "var(--accent)" }}
                  />
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
