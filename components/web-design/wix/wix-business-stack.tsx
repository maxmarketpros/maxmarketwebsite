import { SectionHeader } from "@/components/ui/section-header"
import {
  Calendar,
  ShoppingBag,
  Users,
  CreditCard,
  Mail,
  ArrowRight,
} from "lucide-react"

type Module = {
  Icon: typeof Calendar
  title: string
  body: string
  outputs: string[]
}

const modules: Module[] = [
  {
    Icon: Calendar,
    title: "Wix Bookings",
    body: "Online scheduling, classes, recurring appointments — fully synced to your members and email.",
    outputs: ["Booking confirmed", "Calendar sync", "Reminder triggered"],
  },
  {
    Icon: Users,
    title: "Wix Members",
    body: "One profile per customer — bookings, orders, plans, favorites, and preferences in one place.",
    outputs: ["Profile created", "Login + 2FA", "Branded mobile app"],
  },
  {
    Icon: ShoppingBag,
    title: "Wix Stores",
    body: "Products, variants, inventory, shipping rules, taxes — wired to checkout and members.",
    outputs: ["Order placed", "Inventory updated", "Receipt sent"],
  },
  {
    Icon: CreditCard,
    title: "Wix Payments",
    body: "Stripe, Apple Pay, Google Pay, ACH, recurring subscriptions — one ledger, one fee structure.",
    outputs: ["Charge captured", "Subscription renewed", "Refund issued"],
  },
  {
    Icon: Mail,
    title: "Email + Automations",
    body: "Triggered email sequences and SMS — abandoned cart, post-booking, win-back, no-show recovery.",
    outputs: ["Sequence triggered", "Open + click logged", "Conversion attributed"],
  },
]

export function WixBusinessStack() {
  return (
    <section
      id="wix-business-stack"
      aria-labelledby="wix-business-stack-heading"
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(17,109,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Built-in business stack"
          heading={
            <span id="wix-business-stack-heading">
              Bookings, stores, members —{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">one synced spine</span>.
              </span>
            </span>
          }
          paragraph="Most platforms force you to bolt on Calendly, Shopify, MailChimp, and a CRM. Wix runs all five natively — and we wire them so a single customer profile drives bookings, orders, plans, and email automations."
        />

        {/* Connected stack visual */}
        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div className="relative max-w-[1080px] mx-auto">
            {/* Connecting line — desktop */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #D6FF55 10%, #116DFF 50%, #D6FF55 90%, transparent 100%)",
                opacity: 0.45,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 relative">
              {modules.map((m, i) => (
                <ModuleCard key={m.title} module={m} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Data flow note */}
        <div
          className="mt-12 max-w-[940px] mx-auto rounded-[var(--radius-lg)] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: "#0B0B0B",
            border: "1px solid rgba(214,255,85,0.28)",
          }}
        >
          <span
            className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-[14px]"
            style={{
              background: "#D6FF55",
              color: "#0B0B0B",
            }}
          >
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <div className="flex-1">
            <h3
              className="text-[18px] sm:text-[19px] font-bold leading-tight"
              style={{ color: "#fff" }}
            >
              One profile drives every interaction
            </h3>
            <p
              className="mt-1.5 text-[14.5px] leading-[1.55]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              A customer books a class → their member profile updates → they
              get a confirmation email → an SMS reminder fires 24h prior →
              they're added to a post-class win-back automation. Zero
              third-party glue. Zero duplicate data. Built straight into the
              Wix website design.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Want this stack mapped to your business?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "#0B0B0B" }}
          >
            Book a Wix systems audit
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

function ModuleCard({ module, index }: { module: Module; index: number }) {
  const isAccent = index === 0 || index === 2 || index === 4
  return (
    <div
      className="card-surface card-surface-hover p-5 relative"
      style={{
        borderRadius: "var(--radius-lg)",
        animation: `fadeInUp 0.55s ease-out ${0.06 * index}s both`,
      }}
    >
      {/* Connector dot — desktop */}
      <div
        aria-hidden
        className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full items-center justify-center"
        style={{
          background: isAccent ? "#D6FF55" : "#116DFF",
          boxShadow: isAccent
            ? "0 0 0 4px rgba(214,255,85,0.20)"
            : "0 0 0 4px rgba(17,109,255,0.20)",
        }}
      />
      <span
        className="inline-flex items-center justify-center w-12 h-12 rounded-[14px]"
        style={{
          background: isAccent
            ? "linear-gradient(135deg, #D6FF55 0%, #B8E840 100%)"
            : "linear-gradient(135deg, #0B0B0B 0%, #181818 100%)",
          color: isAccent ? "#0B0B0B" : "#D6FF55",
        }}
      >
        <module.Icon className="w-5 h-5" strokeWidth={2.25} />
      </span>
      <h3
        className="mt-4 text-[16px] sm:text-[17px] font-bold leading-tight"
        style={{ color: "var(--ink)" }}
      >
        {module.title}
      </h3>
      <p
        className="mt-2 text-[13.5px] leading-[1.55]"
        style={{ color: "var(--muted)" }}
      >
        {module.body}
      </p>
      <ul
        className="mt-4 pt-4 border-t space-y-1.5"
        style={{ borderColor: "var(--border-color)" }}
      >
        {module.outputs.map((o) => (
          <li
            key={o}
            className="flex items-center gap-1.5 text-[11.5px] font-mono font-semibold"
            style={{ color: "var(--ink)" }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: isAccent ? "#0B0B0B" : "#116DFF" }}
            />
            {o}
          </li>
        ))}
      </ul>
    </div>
  )
}
