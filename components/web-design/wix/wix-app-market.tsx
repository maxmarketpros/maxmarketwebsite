import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, Sparkles } from "lucide-react"

type App = {
  name: string
  monogram: string
  bg: string
  fg: string
  category: string
}

const wixApps: App[] = [
  { name: "Wix Bookings", monogram: "Bk", bg: "#D6FF55", fg: "#0B0B0B", category: "Scheduling" },
  { name: "Wix Stores", monogram: "St", bg: "#116DFF", fg: "#fff", category: "Ecommerce" },
  { name: "Wix Members", monogram: "Mb", bg: "#FF8E1A", fg: "#fff", category: "Login & profiles" },
  { name: "Wix Pricing Plans", monogram: "$", bg: "#0B0B0B", fg: "#D6FF55", category: "Subscriptions" },
  { name: "Wix Forum", monogram: "Fm", bg: "#9D6BFF", fg: "#fff", category: "Community" },
  { name: "Wix Events", monogram: "Ev", bg: "#FF4D6D", fg: "#fff", category: "Tickets & RSVPs" },
  { name: "Wix Restaurants", monogram: "Rs", bg: "#FFC93C", fg: "#0B0B0B", category: "Menu & orders" },
  { name: "Wix Hotels", monogram: "Ht", bg: "#23C9A0", fg: "#0B0B0B", category: "Reservations" },
  { name: "Wix Forms", monogram: "Fr", bg: "#0B0B0B", fg: "#fff", category: "Lead capture" },
  { name: "Wix Chat", monogram: "Ch", bg: "#74D3FF", fg: "#0B0B0B", category: "Live chat" },
  { name: "Wix Analytics", monogram: "An", bg: "#1B7A45", fg: "#D6FF55", category: "Reporting" },
  { name: "Wix Blog", monogram: "Bl", bg: "#F26C3F", fg: "#fff", category: "Content" },
  { name: "Wix Donations", monogram: "Dn", bg: "#FFD43A", fg: "#0B0B0B", category: "Nonprofits" },
  { name: "Wix Programs", monogram: "Pr", bg: "#3D5AFE", fg: "#fff", category: "Online courses" },
  { name: "Wix Email Marketing", monogram: "Em", bg: "#0B0B0B", fg: "#74D3FF", category: "Newsletters" },
  { name: "Wix Automations", monogram: "Au", bg: "#D6FF55", fg: "#0B0B0B", category: "Triggers" },
]

const thirdParty: App[] = [
  { name: "Mailchimp", monogram: "M", bg: "#FFE01B", fg: "#0B0B0B", category: "CRM sync" },
  { name: "HubSpot", monogram: "H", bg: "#FF7A59", fg: "#fff", category: "CRM" },
  { name: "Klaviyo", monogram: "K", bg: "#0B0B0B", fg: "#D6FF55", category: "Email & SMS" },
  { name: "Stripe", monogram: "S", bg: "#635BFF", fg: "#fff", category: "Payments" },
]

export function WixAppMarket() {
  return (
    <section
      id="wix-app-market"
      aria-labelledby="wix-app-market-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] left-[-6%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,85,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,11,11,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Wix App Market integration"
          heading={
            <span id="wix-app-market-heading">
              Every Wix App,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">wired right</span>.
              </span>
            </span>
          }
          paragraph="A great Wix website design is more than a layout — it's the right native apps installed, configured, and tuned for conversion. We wire 16+ Wix App Market modules and 4 third-party integrations into a single, sync'd customer experience."
        />

        <div
          className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {wixApps.map((app, i) => (
            <AppTile
              key={app.name}
              app={app}
              index={i}
            />
          ))}
        </div>

        {/* Third-party row */}
        <div className="mt-10">
          <div
            className="flex items-center gap-3 mb-4 max-w-[860px] mx-auto"
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              + Third-party CRM / payments
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border-color)" }}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-[860px] mx-auto">
            {thirdParty.map((app, i) => (
              <AppTile key={app.name} app={app} index={i + wixApps.length} compact />
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-12 max-w-[920px] mx-auto rounded-[var(--radius-xl)] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{
            background: "#0B0B0B",
            border: "1px solid rgba(214,255,85,0.30)",
          }}
        >
          <Stat
            value="20+"
            label="Wix Apps wired"
            sub="Bookings, Stores, Members, Pricing Plans, Forum, Events…"
          />
          <Stat
            value="100%"
            label="Synced data"
            sub="One member profile drives bookings, orders, automations, and email."
          />
          <Stat
            value="0"
            label="Plugin bloat"
            sub="We pick the apps you actually use — not a Wix App Market dump."
          />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Need a specific Wix App wired in?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "#0B0B0B" }}
          >
            <Sparkles className="w-4 h-4" strokeWidth={2.5} />
            Tell us what you need
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

function AppTile({
  app,
  index,
  compact,
}: {
  app: App
  index: number
  compact?: boolean
}) {
  return (
    <div
      className="card-surface card-surface-hover p-3 sm:p-4 flex flex-col items-center text-center"
      style={{
        borderRadius: "var(--radius-md)",
        animation: `fadeInUp 0.5s ease-out ${0.02 * index}s both`,
      }}
    >
      <span
        className={`${
          compact ? "w-12 h-12 text-[18px]" : "w-14 h-14 text-[22px]"
        } rounded-[14px] flex items-center justify-center font-extrabold tracking-tight`}
        style={{
          background: app.bg,
          color: app.fg,
          boxShadow: "0 4px 12px rgba(11,11,11,0.10)",
        }}
      >
        {app.monogram}
      </span>
      <h3
        className={`mt-3 ${
          compact ? "text-[12px]" : "text-[12.5px]"
        } font-bold leading-tight`}
        style={{ color: "var(--ink)" }}
      >
        {app.name}
      </h3>
      <p
        className="mt-0.5 text-[10.5px] font-medium"
        style={{ color: "var(--muted)" }}
      >
        {app.category}
      </p>
    </div>
  )
}

function Stat({
  value,
  label,
  sub,
}: {
  value: string
  label: string
  sub: string
}) {
  return (
    <div className="text-center sm:text-left">
      <div
        className="text-[36px] sm:text-[42px] font-extrabold leading-none tracking-[-0.02em]"
        style={{ color: "#D6FF55" }}
      >
        {value}
      </div>
      <div
        className="mt-2 text-[14px] font-bold uppercase tracking-[0.08em]"
        style={{ color: "#fff" }}
      >
        {label}
      </div>
      <p
        className="mt-1 text-[12.5px] leading-[1.5]"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        {sub}
      </p>
    </div>
  )
}
