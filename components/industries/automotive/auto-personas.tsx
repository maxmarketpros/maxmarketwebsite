import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type StackLink = { label: string; href: string }
type Persona = {
  key: string
  name: string
  icons8Id: string
  accent: string
  blurb: string
  pains: string[]
  stack: StackLink[]
  footerLink?: StackLink
}

const featuredPersona: Persona = {
  key: "detailing",
  name: "Auto Detailing Studios",
  icons8Id: "kPqREch101hQ", // Automatic Car Wash
  accent: "#EC4899",
  blurb:
    "Detailing is a visual game — and the right Instagram Reel, review loop, and booking page turn a slow Tuesday into a two-week waitlist.",
  pains: [
    "Inconsistent weekday bookings between busy weekends",
    "Incredible results but not enough video / review proof",
    "Calls and DMs that get lost after 5pm",
  ],
  stack: [
    { label: "Social Media",         href: "/services/social-media" },
    { label: "Review Generation",    href: "/services/social-media/review-generation" },
    { label: "Calendar & Booking",   href: "/solutions/calendar" },
    { label: "Lead Generation",      href: "/solutions/lead-generation" },
  ],
  footerLink: { label: "See the detailer playbook", href: "#journey" },
}

const personas: Persona[] = [
  {
    key: "mobile",
    name: "Mobile Auto Repair",
    icons8Id: "31007", // Van
    accent: "#F59E0B",
    blurb: "Win the job before the competition can call back.",
    pains: [
      "Lost jobs to whoever answers first",
      "No way to qualify leads on the road",
      "Inconsistent territory ROI",
    ],
    stack: [
      { label: "Local SEO",          href: "/services/seo/local" },
      { label: "Google Ads",         href: "/services/paid-ads/google-ads" },
      { label: "AI Voice Agent",     href: "/solutions/ai-agents" },
      { label: "Lead Capture",       href: "/solutions/lead-generation" },
    ],
  },
  {
    key: "repair",
    name: "Auto Repair Shops",
    icons8Id: "111638", // Mechanic
    accent: "#EF4444",
    blurb: "Fill the bays and stop missing the after-hours calls.",
    pains: [
      "Phones ring off the hook — until they don't",
      "Techs juggling estimates, follow-ups, and dispatch",
      "No clean report of which channel drove what",
    ],
    stack: [
      { label: "Local SEO",          href: "/services/seo/local" },
      { label: "Google Ads",         href: "/services/paid-ads/google-ads" },
      { label: "Booking",            href: "/solutions/calendar" },
      { label: "Analytics",          href: "/solutions/analytics" },
    ],
  },
  {
    key: "specialty",
    name: "Tire / Body / Glass",
    icons8Id: "aHm1PkoQsKZ1", // Windscreen
    accent: "#14B8A6",
    blurb: "Own every \"near me\" search in a 20-mile radius.",
    pains: [
      "Commoditized — hard to stand out from chains",
      "Insurance + deposits slow the booking process",
      "Seasonal spikes need matching ad spend",
    ],
    stack: [
      { label: "SEO",                href: "/services/seo" },
      { label: "Paid Ads",           href: "/services/paid-ads" },
      { label: "Lead Gen",           href: "/solutions/lead-generation" },
      { label: "Payments",           href: "/solutions/payments" },
    ],
  },
  {
    key: "rentals",
    name: "Car Rentals",
    icons8Id: "17577", // Car Rental
    accent: "#0EA5E9",
    blurb: "Turn casual browsers into booked, paid reservations.",
    pains: [
      "Website doesn't show availability clearly",
      "Customers ghost when paperwork is manual",
      "Hard to re-engage drivers for repeat rentals",
    ],
    stack: [
      { label: "Web Design",         href: "/services/web-design" },
      { label: "Payments",           href: "/solutions/payments" },
      { label: "Document Signing",   href: "/solutions/document-signing" },
      { label: "Email & SMS",        href: "/solutions/email-marketing" },
    ],
  },
]

export function AutoPersonas() {
  return (
    <section id="personas" aria-labelledby="auto-personas-heading" className="relative scroll-mt-20" style={{ background: "var(--surface)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Who we serve"
          heading={
            <span id="auto-personas-heading">
              Built for the{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">local auto economy.</span>
              </span>
            </span>
          }
          paragraph="From mobile wrenches to full detailing studios — every auto business has a different rhythm. We meet each one where it is."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Featured left card (spans 3 on lg) */}
          <FeaturedCard persona={featuredPersona} />

          {/* Right 2x2 grid (4 cards, each takes 1 col on md, span-3 combined on lg as 2x2) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {personas.map((p) => (
              <PersonaCard key={p.key} persona={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const detailerDeliverables: { id: string; label: string }[] = [
  { id: "13778",           label: "GBP Posts" },
  { id: "12776",           label: "Booking" },
  { id: "LlgB5a8aAr0G",    label: "Review Asks" },
  { id: "71474",           label: "Win-backs" },
]

function FeaturedCard({ persona }: { persona: Persona }) {
  return (
    <div className="lg:col-span-3 card-surface card-surface-hover relative overflow-hidden p-7 sm:p-9 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 80% 60% at 20% 15%, ${persona.accent}1F 0%, transparent 70%)` }}
      />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-4">
          <div
            className="shrink-0 rounded-[var(--radius-md)] p-3 flex items-center justify-center"
            style={{ background: `${persona.accent}14`, border: `1px solid ${persona.accent}2A` }}
          >
            <img
              src={icons8Url(persona.icons8Id, 176)}
              alt=""
              width={80}
              height={80}
              className="w-[80px] h-[80px]"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
              style={{ background: `${persona.accent}14`, color: persona.accent }}
            >
              Featured · Detailing
            </span>
            <h3 className="mt-3 text-[24px] sm:text-[28px] font-bold leading-[1.15] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
              {persona.name}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.6]" style={{ color: "var(--muted)" }}>
          {persona.blurb}
        </p>

        <ul className="mt-5 space-y-2.5">
          {persona.pains.map((pain) => (
            <li key={pain} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--ink)" }}>
              <span
                className="mt-[3px] w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${persona.accent}1F`, color: persona.accent }}
              >
                <Check className="w-3 h-3" strokeWidth={2.8} />
              </span>
              <span>{pain}</span>
            </li>
          ))}
        </ul>

        <div
          className="mt-6 pt-5"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--muted)" }}>
            What we ship every week
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {detailerDeliverables.map((d) => (
              <div
                key={d.id}
                className="relative overflow-hidden rounded-[var(--radius-sm)] px-3 py-3 flex items-center gap-2.5"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: `radial-gradient(ellipse 80% 80% at 20% 30%, ${persona.accent}14 0%, transparent 70%)` }}
                />
                <img
                  src={icons8Url(d.id, 96)}
                  alt=""
                  width={36}
                  height={36}
                  className="relative w-9 h-9 shrink-0"
                  loading="lazy"
                />
                <span className="relative text-[12.5px] font-semibold" style={{ color: "var(--ink)" }}>
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-auto pt-6"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--muted)" }}>
            Recommended stack
          </div>
          <div className="flex flex-wrap gap-2">
            {persona.stack.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-semibold transition-colors"
                style={{
                  background: `${persona.accent}14`,
                  color: persona.accent,
                  border: `1px solid ${persona.accent}2E`,
                }}
              >
                {item.label}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            ))}
          </div>
        </div>

        {persona.footerLink && (
          <Link
            href={persona.footerLink.href}
            className="group mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold"
            style={{ color: persona.accent }}
          >
            {persona.footerLink.label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        )}
      </div>
    </div>
  )
}

function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <div className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 80% 60% at 20% 15%, ${persona.accent}1A 0%, transparent 70%)` }}
      />

      <div className="relative flex items-start gap-3">
        <img
          src={icons8Url(persona.icons8Id, 128)}
          alt=""
          width={52}
          height={52}
          className="w-[52px] h-[52px] shrink-0"
          loading="lazy"
        />
        <span
          className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${persona.accent}14`, color: persona.accent }}
        >
          {persona.name}
        </span>
      </div>

      <h3 className="relative mt-4 text-[19px] sm:text-[20px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
        {persona.name}
      </h3>
      <p className="relative mt-2 text-[14.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
        {persona.blurb}
      </p>

      <ul className="relative mt-4 space-y-2">
        {persona.pains.map((pain) => (
          <li key={pain} className="flex items-start gap-2.5 text-[13.5px]" style={{ color: "var(--ink)" }}>
            <span
              className="mt-[3px] w-4 h-4 rounded-full flex items-center justify-center shrink-0"
              style={{ background: `${persona.accent}1F`, color: persona.accent }}
            >
              <Check className="w-2.5 h-2.5" strokeWidth={2.8} />
            </span>
            <span>{pain}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {persona.stack.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-semibold transition-colors"
            style={{
              background: `${persona.accent}14`,
              color: persona.accent,
              border: `1px solid ${persona.accent}2E`,
            }}
          >
            {item.label}
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </Link>
        ))}
      </div>
    </div>
  )
}
