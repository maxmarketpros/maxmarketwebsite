import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { posts } from "@/lib/blog-data"
import { caseStudies } from "@/lib/case-studies-data"
import { faqCategories } from "@/app/resources/faq/faq-categories"

type PillStyle = { bg: string; color: string }

function pillStyle(color: string): PillStyle {
  return { bg: `${color}1A`, color }
}

export function ResourcesBento() {
  // Top 4 latest posts for the Blog card
  const latestForBlog = [...posts]
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .slice(0, 4)

  const featuredStudy = caseStudies[0]
  const featuredKpis = featuredStudy.kpis.slice(0, 2)

  return (
    <section className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Four pillars"
          heading={
            <>
              Built for owners, not{" "}
              <span className="accent-underline">marketers.</span>
            </>
          }
          paragraph="Every resource here is written by the team that runs the campaigns — no fluff, no recycled checklists, just the playbooks we use with paying clients."
        />

        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* ── Blog (large) ── */}
          <BentoCard
            href="/resources/blog"
            spanMd="md:col-span-2"
            spanLg="lg:col-span-4"
            iconId="18911"
            pill="Marketing Blog"
            pillColor="#1677FF"
            auraColor="rgba(22,119,255,0.10)"
            title="Marketing playbooks, every other week."
            description="Benchmarks, head-to-head breakdowns, and growth plays for service businesses — custom websites, Google Ads, local SEO, AI search, and the metrics that actually drive booked jobs."
            chips={["AI Search", "Local SEO", "Google Ads", "Web Design"]}
            cta="Read the blog"
          >
            <div className="mt-5 space-y-2">
              {latestForBlog.map((p) => (
                <Link
                  key={p.slug}
                  href={`/resources/blog/${p.slug}`}
                  className="group flex items-start gap-3 rounded-[var(--radius-xs)] p-3 -mx-1 transition-colors hover:bg-[var(--accent-bg)]"
                >
                  <span
                    className="mt-0.5 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <div className="min-w-0">
                    <div
                      className="text-[14px] font-semibold leading-snug"
                      style={{ color: "var(--ink)" }}
                    >
                      {p.shortTitle ?? p.title}
                    </div>
                    <div
                      className="mt-1 text-[12px] uppercase tracking-[0.06em] font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.category}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </BentoCard>

          {/* ── Case Studies ── */}
          <BentoCard
            href="/resources/case-studies"
            spanMd="md:col-span-1"
            spanLg="lg:col-span-2"
            iconId="16951"
            pill="Case Studies"
            pillColor="#F59E0B"
            auraColor="rgba(245,158,11,0.10)"
            title="Real clients. Real numbers."
            description="Two deep dives — a 30-year SoCal concrete contractor and a 22-year pool tile cleaning crew — with screenshots, rankings, and owner quotes."
            cta="Read the case studies"
          >
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {featuredKpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-[var(--radius-sm)] p-3 bg-white border"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div
                    className="text-[20px] font-bold leading-none tracking-[-0.01em]"
                    style={{ color: "#F59E0B" }}
                  >
                    {k.value}
                  </div>
                  <div
                    className="mt-1.5 text-[11.5px] font-semibold uppercase tracking-[0.05em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {k.label}
                  </div>
                  <div
                    className="mt-1 text-[11.5px] leading-snug"
                    style={{ color: "var(--muted)" }}
                  >
                    {k.sub}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* ── ROI Calculator ── */}
          <BentoCard
            href="/resources/roi-calculator"
            spanMd="md:col-span-1"
            spanLg="lg:col-span-2"
            iconId="12780"
            pill="ROI Calculator"
            pillColor="#22C55E"
            auraColor="rgba(34,197,94,0.10)"
            title="How many jobs to break even?"
            description="Plug in your average profit per job. See how few new jobs it takes to pay for each plan — and what a conservative pipeline looks like on top."
            cta="Open the calculator"
          >
            <div className="mt-5 rounded-[var(--radius-sm)] border p-3.5 bg-white" style={{ borderColor: "var(--border-color)" }}>
              <div className="flex items-center justify-between text-[12px]">
                <span style={{ color: "var(--muted)" }}>Profit / job</span>
                <span className="font-semibold" style={{ color: "var(--ink)" }}>$850</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[12px]">
                <span style={{ color: "var(--muted)" }}>LocalMark plan</span>
                <span className="font-semibold" style={{ color: "var(--ink)" }}>$499/mo</span>
              </div>
              <div className="my-3 h-px" style={{ background: "var(--border-color)" }} />
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold uppercase tracking-[0.05em]" style={{ color: "#22C55E" }}>
                  Break even
                </span>
                <span className="text-[20px] font-bold tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                  ~1 job
                </span>
              </div>
            </div>
          </BentoCard>

          {/* ── FAQ (large) ── */}
          <BentoCard
            href="/resources/faq"
            spanMd="md:col-span-2"
            spanLg="lg:col-span-4"
            iconId="13558"
            pill="FAQ"
            pillColor="#0EA5E9"
            auraColor="rgba(116,211,255,0.18)"
            title="40 answers — clear, honest, no sales-pitch."
            description="Everything we get asked on intro calls about local SEO, websites, Google Ads, plans, pricing, timelines, ownership, and how to cancel. Skim it before you book a call."
            cta="See every FAQ"
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {faqCategories.map((c) => (
                <span
                  key={c.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-[12.5px] font-medium rounded-full"
                  style={{
                    background: "var(--surface)",
                    color: "var(--muted)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <Check className="w-3 h-3" style={{ color: "#0EA5E9" }} strokeWidth={3} />
                  {c.label}
                </span>
              ))}
            </div>
            <div
              className="mt-4 text-[13px] font-semibold uppercase tracking-[0.05em]"
              style={{ color: "var(--accent)" }}
            >
              40 questions • 8 categories • updated weekly
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}

interface BentoCardProps {
  href: string
  spanMd: string
  spanLg: string
  iconId: string
  pill: string
  pillColor: string
  auraColor: string
  title: string
  description: string
  chips?: string[]
  cta: string
  children?: React.ReactNode
}

function BentoCard({
  href,
  spanMd,
  spanLg,
  iconId,
  pill,
  pillColor,
  auraColor,
  title,
  description,
  chips,
  cta,
  children,
}: BentoCardProps) {
  return (
    <div
      className={`${spanMd} ${spanLg} card-surface card-surface-hover relative overflow-hidden p-6 group`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${auraColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative">
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(iconId, 128)}
            alt=""
            width={52}
            height={52}
            loading="lazy"
            decoding="async"
            className="w-[52px] h-[52px] object-contain shrink-0"
          />
          <span
            className="self-center inline-block text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={pillStyleInline(pillColor)}
          >
            {pill}
          </span>
        </div>

        <h3
          className="mt-4 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {title}
        </h3>

        <p
          className="mt-2 text-[15px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>

        {chips && (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="inline-block px-3 py-1 text-[12.5px] font-medium rounded-full"
                style={{
                  background: "var(--surface)",
                  color: "var(--muted)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {children}

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold transition-transform hover:translate-x-0.5"
          style={{ color: "var(--accent)" }}
        >
          {cta}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}

function pillStyleInline(color: string): React.CSSProperties {
  return {
    background: `${color}1A`,
    color,
  }
}
