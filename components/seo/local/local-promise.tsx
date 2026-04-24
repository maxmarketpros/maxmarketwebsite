import { SectionHeader } from "@/components/ui/section-header"
import { X, ShieldCheck } from "lucide-react"

type Item = {
  title: string
  reason: string
}

const items: Item[] = [
  {
    title: "No PBNs or link farms",
    reason:
      "Private blog networks get deindexed in waves. We build real local authority — chamber, press, niche directories, community sponsorships.",
  },
  {
    title: "No review gating",
    reason:
      "Filtering negative reviews before they reach Google violates Google\u2019s terms. One violation can suspend your Google Business Profile.",
  },
  {
    title: "No duplicate GBP listings",
    reason:
      "Spinning up extra GBPs to spam city keywords is a fast-track to permanent suspension. One verified profile, optimized properly, wins.",
  },
  {
    title: "No copy-paste geo pages",
    reason:
      "Thin, templated city pages don\u2019t rank and Google\u2019s helpful-content system actively demotes them. Every geo page gets unique copy.",
  },
  {
    title: "No keyword stuffing",
    reason:
      "Reads terrible to real buyers and has been a ranking penalty since 2011. We write for the customer first, then check keyword coverage.",
  },
  {
    title: "No long-term contracts",
    reason:
      "Good Local SEO retains clients on results, not contracts. Month-to-month after the first 90 days. If we\u2019re not moving rank, fire us.",
  },
]

export function LocalPromise() {
  return (
    <section
      id="local-promise"
      aria-labelledby="local-promise-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Our Anti-Playbook"
          heading={
            <span id="local-promise-heading">
              What we refuse to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">do</span>.
              </span>
            </span>
          }
          paragraph="The Local SEO industry is full of shortcuts that wreck Google Business Profiles and burn Map Pack rankings within months. Here are six we will never touch — even if a client asks."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {items.map((item) => (
            <PromiseCard key={item.title} item={item} />
          ))}
        </div>

        {/* Closing promise bar */}
        <div className="mt-12 flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border"
            style={{
              background: "rgba(34,197,94,0.08)",
              borderColor: "rgba(34,197,94,0.28)",
            }}
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "rgba(34,197,94,0.18)",
                color: "#22C55E",
              }}
            >
              <ShieldCheck className="w-4 h-4" strokeWidth={2.25} />
            </span>
            <span
              className="text-[13.5px] sm:text-[14.5px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Google-compliant Local SEO. Month-to-month. Durable rankings.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function PromiseCard({ item }: { item: Item }) {
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 25% 25%, rgba(239,68,68,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <span
          className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center"
          style={{
            background: "rgba(239,68,68,0.10)",
            boxShadow:
              "inset 0 0 0 1px rgba(239,68,68,0.22), inset 0 1px 0 rgba(255,255,255,0.6)",
            color: "#EF4444",
          }}
        >
          <X className="w-5 h-5" strokeWidth={2.75} />
        </span>

        <h3
          className="mt-4 text-[18px] sm:text-[20px] font-bold tracking-[-0.01em] leading-[1.25]"
          style={{ color: "var(--ink)" }}
        >
          {item.title}
        </h3>

        <p
          className="mt-2.5 text-[14.5px] leading-[1.6]"
          style={{ color: "var(--muted)" }}
        >
          {item.reason}
        </p>
      </div>
    </article>
  )
}
