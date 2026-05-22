import Link from "next/link"
import {
  HardHat, Home, Store, UtensilsCrossed, HeartPulse, Car,
  Scissors, Dumbbell, Camera, Dog, Briefcase, GraduationCap, ShoppingBag,
  ArrowRight,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Category = {
  id: string
  Icon: typeof HardHat
  accent: string
  title: string
  caption: string
  industryHref: string
  industryLabel: string
  types: string[]
}

const categories: Category[] = [
  {
    id: "construction",
    Icon: HardHat,
    accent: "#EF4444",
    title: "Construction & Trades",
    caption: "Heavy-permit work with emergency + planned lanes",
    industryHref: "/industries/contractors",
    industryLabel: "See contractors",
    types: [
      "Roofing", "Siding", "Gutters", "Windows & doors",
      "Exterior painting", "HVAC install & repair", "Plumbing", "Electrical",
      "Generator install", "EV charger install", "General contractors",
      "Remodelers", "Kitchen & bath", "Home additions", "Design-build",
      "Landscaping", "Hardscape", "Paving & concrete", "Fencing", "Masonry",
      "Drywall", "Flooring & tile", "Foundation repair",
    ],
  },
  {
    id: "home-services",
    Icon: Home,
    accent: "#14B8A6",
    title: "Recurring Home Services",
    caption: "Repeat-customer service businesses",
    industryHref: "/industries/home-services",
    industryLabel: "See home services",
    types: [
      "House cleaning", "Deep cleaning", "Move-out cleaning",
      "Pest control", "Termite", "Rodent", "Mosquito service",
      "Pool service", "Pool building", "Hot tub service",
      "Lawn care", "Tree trimming", "Sprinkler repair",
      "Appliance repair", "Garage door", "Locksmith",
      "Chimney sweep", "Window cleaning", "Pressure washing",
      "Gutter cleaning", "Handyman", "Junk removal", "Moving & storage",
    ],
  },
  {
    id: "beauty",
    Icon: Scissors,
    accent: "#EC4899",
    title: "Beauty & Grooming",
    caption: "Chair-based, booking-heavy, review-driven",
    industryHref: "/industries/local-service",
    industryLabel: "See local service",
    types: [
      "Hair salons", "Color bars", "Barber shops",
      "Nail salons", "Lash extensions", "Brow bars",
      "Waxing studios", "Spas & day spas", "Sugaring",
      "Tanning salons", "Makeup studios", "Blowout bars",
    ],
  },
  {
    id: "fitness",
    Icon: Dumbbell,
    accent: "#22C55E",
    title: "Fitness & Wellness",
    caption: "Membership, class packs, session-based",
    industryHref: "/industries/local-service",
    industryLabel: "See local service",
    types: [
      "Gyms", "CrossFit boxes", "Personal training studios",
      "Yoga studios", "Pilates", "Barre", "Spin",
      "Martial arts", "Boxing & MMA", "Dance fitness",
      "Massage therapy", "Bodywork", "Stretch studios",
      "Wellness coaches", "Nutritionists",
    ],
  },
  {
    id: "food",
    Icon: UtensilsCrossed,
    accent: "#F97316",
    title: "Food & Hospitality",
    caption: "POS + delivery apps + first-party ordering",
    industryHref: "/industries/restaurants",
    industryLabel: "See restaurants",
    types: [
      "Fine dining", "Fast casual", "Fast food",
      "Cafes", "Coffee shops", "Bakeries", "Donut shops",
      "Bars & pubs", "Breweries", "Wine bars", "Cocktail lounges",
      "Catering", "Food trucks", "Ghost kitchens",
      "Pizzerias", "Sushi bars", "BBQ", "Mexican", "Asian fusion",
    ],
  },
  {
    id: "medical",
    Icon: HeartPulse,
    accent: "#16A34A",
    title: "Health & Medical",
    caption: "HIPAA-safe, consult-led, treatment-heavy",
    industryHref: "/industries/medical",
    industryLabel: "See medical",
    types: [
      "Med spas", "Dermatology", "Aesthetic clinics",
      "Dental", "Orthodontics", "Cosmetic dental",
      "Chiropractic", "Physical therapy", "Sports medicine",
      "Wellness centers", "IV therapy", "Weight loss clinics",
      "Primary care", "Urgent care", "Pediatrics",
      "Vision & optometry", "Hearing", "Mental health",
    ],
  },
  {
    id: "automotive",
    Icon: Car,
    accent: "#F59E0B",
    title: "Auto & Transportation",
    caption: "Mobile-service + shop-based + rental ops",
    industryHref: "/industries/automotive",
    industryLabel: "See automotive",
    types: [
      "Auto detailing", "Mobile detailing", "Ceramic coating",
      "Auto repair shops", "Mobile mechanics", "Diesel repair",
      "Tire shops", "Oil change & lube", "Transmission",
      "Body shops", "Paint & collision", "Windshield & glass",
      "Car rentals", "Truck rentals", "Exotic rentals",
      "Car wash", "Express wash",
    ],
  },
  {
    id: "events",
    Icon: Camera,
    accent: "#8B5CF6",
    title: "Events & Entertainment",
    caption: "Seasonal, portfolio-led, deposit-first",
    industryHref: "/industries/local-service",
    industryLabel: "See local service",
    types: [
      "Wedding photographers", "Videographers", "Commercial photo",
      "Event planners", "Wedding planners", "Corporate events",
      "DJs", "Live bands", "Entertainers",
      "Florists", "Venues", "Party rentals",
      "Bounce houses", "Photo booths",
    ],
  },
  {
    id: "pets",
    Icon: Dog,
    accent: "#F59E0B",
    title: "Pet Services",
    caption: "Recurring appointments, trust-based",
    industryHref: "/industries/local-service",
    industryLabel: "See local service",
    types: [
      "Dog grooming", "Cat grooming", "Mobile grooming",
      "Dog boarding", "Daycare", "Pet sitting",
      "Dog walking", "Puppy training", "Behavior training",
      "Pet photography", "Pet hotels", "Veterinary",
    ],
  },
  {
    id: "professional",
    Icon: Briefcase,
    accent: "#1677FF",
    title: "Professional Services",
    caption: "High-ticket, consultative, trust-heavy",
    industryHref: "/industries/local-service",
    industryLabel: "See local service",
    types: [
      "Attorneys", "Law firms", "Paralegals",
      "CPAs", "Bookkeepers", "Tax prep",
      "Financial advisors", "Wealth managers",
      "Notaries", "Translators",
      "Insurance agents", "Insurance brokers",
      "Real estate agents", "Mortgage brokers",
      "Home inspectors", "Real estate photographers",
    ],
  },
  {
    id: "education",
    Icon: GraduationCap,
    accent: "#14B8A6",
    title: "Education & Arts",
    caption: "Enrollment cycles, parent-driven searches",
    industryHref: "/industries/local-service",
    industryLabel: "See local service",
    types: [
      "Tutors", "Test prep", "Academic coaches",
      "Music lessons", "Instrument teachers",
      "Dance studios", "Ballet", "Hip-hop", "Theater classes",
      "Art classes", "Pottery", "Painting studios",
      "Language schools", "Driving schools",
      "Preschools", "After-school programs", "Summer camps",
    ],
  },
  {
    id: "retail",
    Icon: ShoppingBag,
    accent: "#0EA5E9",
    title: "Retail & Specialty",
    caption: "Walk-in + storefront + specialty repair",
    industryHref: "/industries/local-service",
    industryLabel: "See local service",
    types: [
      "Jewelry stores", "Watch repair", "Engraving",
      "Dry cleaners", "Laundromats",
      "Tailors & alterations", "Shoe repair", "Leather repair",
      "Bike shops", "Sporting goods", "Outdoor gear",
      "Computer repair", "Phone repair", "Smart home install",
      "Photography studios", "Portrait studios",
      "Print shops", "Sign shops", "Embroidery",
      "Gift shops", "Florists",
    ],
  },
]

export function HubCatalog() {
  const total = categories.reduce((sum, c) => sum + c.types.length, 0)

  return (
    <section id="hub-catalog" aria-labelledby="hub-catalog-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Every business we serve"
          heading={
            <>
              {total}+ local business types.{" "}
              <span className="whitespace-nowrap">
                One <span className="accent-underline">ranking</span> team.
              </span>
            </>
          }
          paragraph={"Browse by category. Each group maps to one of our six industry playbooks \u2014 and every business type below has been ranked, retained, or rebuilt by us at some point."}
        />

        {/* Category nav (anchor rail) */}
        <div className="mt-12 overflow-x-auto -mx-6 px-6 pb-2">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] pr-1" style={{ color: "var(--muted)" }}>
              Jump to
            </span>
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#cat-${c.id}`}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${c.accent}2A`,
                  color: "var(--ink)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.accent }} />
                {c.title}
              </a>
            ))}
          </div>
        </div>

        {/* Category blocks */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} />
          ))}
        </div>

        {/* Footer summary strip */}
        <div
          className="mt-12 overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #EBF4FF 0%, #F7FAFC 50%, #E6FCF5 100%)",
            border: "1px solid var(--border-color)",
          }}
        >
          <p className="text-[15px] sm:text-[16px] font-medium max-w-[680px] mx-auto" style={{ color: "var(--ink)" }}>
            Don&rsquo;t see your exact business? We&rsquo;ve probably still ranked it. The marketing stack is industry-agnostic &mdash; the tuning is where we earn our fee.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[14.5px] text-white"
              style={{ background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)" }}
            >
              Ask about your vertical
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link href="/solutions" className="text-[13.5px] font-semibold" style={{ color: "var(--accent)" }}>
              Browse our 10 solutions &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryBlock({ cat }: { cat: Category }) {
  const { id, Icon, accent, title, caption, industryHref, industryLabel, types } = cat
  return (
    <article
      id={`cat-${id}`}
      className="relative card-surface overflow-hidden p-6 sm:p-7 scroll-mt-24"
    >
      {/* Side accent strip */}
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[4px]"
        style={{ background: `linear-gradient(180deg, ${accent} 0%, ${accent}66 100%)` }}
      />
      {/* Soft aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-6 w-[260px] h-[180px]"
        style={{
          background: `radial-gradient(ellipse 70% 100% at 20% 30%, ${accent}18 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
            style={{
              background: `${accent}14`,
              boxShadow: `inset 0 0 0 1px ${accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color: accent }} strokeWidth={2.1} />
          </span>
          <div>
            <h3 className="text-[17px] sm:text-[18px] font-bold leading-tight tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
              {title}
            </h3>
            <p className="text-[12px] mt-0.5" style={{ color: accent }}>
              {caption}
            </p>
          </div>
        </div>

        <span
          className="text-[10.5px] font-semibold uppercase tracking-[0.08em] px-2 py-1 rounded-full whitespace-nowrap"
          style={{ background: `${accent}14`, color: accent }}
        >
          {types.length} types
        </span>
      </div>

      {/* Types list */}
      <ul className="relative mt-5 flex flex-wrap gap-1.5">
        {types.map((t) => (
          <li
            key={t}
            className="text-[12.5px] font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "var(--surface)",
              border: `1px solid ${accent}22`,
              color: "var(--ink)",
            }}
          >
            {t}
          </li>
        ))}
      </ul>

      {/* Footer link */}
      <Link
        href={industryHref}
        className="group mt-5 pt-4 flex items-center gap-1.5 text-[13px] font-semibold border-t"
        style={{ borderColor: "var(--border-color)", color: accent }}
      >
        {industryLabel} playbook
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
      </Link>
    </article>
  )
}
