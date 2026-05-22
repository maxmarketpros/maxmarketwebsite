import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Check,
  X,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Globe,
} from "lucide-react"

type Annotation = {
  n: number
  label: string
  good: string
  bad: string
}

const annotations: Annotation[] = [
  {
    n: 1,
    label: "Publisher authority",
    good: "DR 78 trade publication",
    bad: "DR 12 scraper site",
  },
  {
    n: 2,
    label: "Topical relevance",
    good: "HVAC / home blog",
    bad: "Off-topic gambling page",
  },
  {
    n: 3,
    label: "Placement",
    good: "Inside editorial body",
    bad: "Hidden footer / sidebar",
  },
  {
    n: 4,
    label: "Anchor text",
    good: "Branded + natural phrase",
    bad: "Exact-match keyword spam",
  },
  {
    n: 5,
    label: "Surrounding content",
    good: "Original journalism",
    bad: "AI / scraped boilerplate",
  },
  {
    n: 6,
    label: "Link attribute",
    good: 'rel="dofollow"',
    bad: 'rel="nofollow ugc"',
  },
]

function GoodCard() {
  return (
    <div
      className="relative overflow-hidden p-5 sm:p-6"
      style={{
        background: "linear-gradient(180deg, #fff 0%, #F0FDF4 100%)",
        border: "1px solid rgba(34,197,94,0.30)",
        borderRadius: "var(--radius-xl)",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.06), 0 16px 36px rgba(34,197,94,0.10)",
      }}
    >
      {/* Corner aura */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 w-[260px] h-[260px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative">
        {/* Verdict header */}
        <div className="flex items-center gap-2.5">
          <span
            className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(180deg, #4ADE80 0%, #16A34A 100%)",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(34,197,94,0.35)",
            }}
          >
            <ShieldCheck className="w-4.5 h-4.5" strokeWidth={2.5} />
          </span>
          <div>
            <span
              className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#15803D" }}
            >
              Editorial backlink
            </span>
            <h3
              className="text-[18px] sm:text-[20px] font-bold leading-tight tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              What we build for you.
            </h3>
          </div>
        </div>

        {/* Browser frame */}
        <div
          className="mt-5 overflow-hidden"
          style={{
            background: "#fff",
            border: "1px solid rgba(34,197,94,0.20)",
            borderRadius: "var(--radius-md)",
            boxShadow: "0 1px 3px rgba(17,35,68,0.05)",
          }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 border-b"
            style={{
              borderColor: "var(--border-color)",
              background: "#F8FAFC",
            }}
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: "#FCA5A5" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#FDE68A" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#86EFAC" }} />
            </span>
            <span
              className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                color: "var(--muted)",
              }}
            >
              <Lock className="w-2.5 h-2.5" strokeWidth={2.5} />
              hvactrade.com/spring-buying-guide
            </span>
          </div>
          <div className="px-4 py-4">
            <div
              className="text-[10.5px] font-bold uppercase tracking-[0.12em] mb-2"
              style={{ color: "var(--muted)" }}
            >
              HVAC Trade · Editorial · 1,840 words
            </div>
            <p
              className="text-[13.5px] leading-[1.65]"
              style={{ color: "var(--ink)" }}
            >
              For homeowners weighing energy upgrades this spring, working with{" "}
              <a
                className="relative font-semibold whitespace-nowrap"
                style={{ color: "#15803D" }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[1px] h-[6px] rounded-sm"
                  style={{
                    background: "rgba(34,197,94,0.30)",
                    zIndex: -1,
                  }}
                />
                a licensed Phoenix HVAC contractor
              </a>{" "}
              ensures the rebate paperwork, sizing math, and 16+ SEER heat-pump
              install all clear inspection on the first pass.
            </p>
            <div
              className="mt-3 flex items-center gap-2 text-[10px] font-mono"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#15803D",
                  fontWeight: 700,
                }}
              >
                rel=&quot;dofollow&quot;
              </span>
              <span>· in-content · paragraph 4 of 9</span>
            </div>
          </div>
        </div>

        {/* Annotations */}
        <ul className="mt-5 space-y-2">
          {annotations.map((a) => (
            <li
              key={a.n}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[12px]"
              style={{
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.16)",
              }}
            >
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold"
                style={{
                  background: "linear-gradient(180deg, #4ADE80 0%, #16A34A 100%)",
                  color: "#fff",
                  boxShadow: "0 1px 2px rgba(22,101,52,0.30)",
                }}
              >
                {a.n}
              </span>
              <span
                className="flex-1 text-[12.5px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                {a.label}
              </span>
              <span
                className="text-[11.5px] font-semibold text-right"
                style={{ color: "#15803D" }}
              >
                {a.good}
              </span>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(34,197,94,0.18)",
                  color: "#15803D",
                }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function BadCard() {
  return (
    <div
      className="relative overflow-hidden p-5 sm:p-6"
      style={{
        background: "linear-gradient(180deg, #fff 0%, #FEF2F2 100%)",
        border: "1px solid rgba(239,68,68,0.28)",
        borderRadius: "var(--radius-xl)",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.06), 0 16px 36px rgba(239,68,68,0.10)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 w-[260px] h-[260px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(239,68,68,0.16) 0%, transparent 65%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-2.5">
          <span
            className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(180deg, #F87171 0%, #DC2626 100%)",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(239,68,68,0.30)",
            }}
          >
            <ShieldAlert className="w-4.5 h-4.5" strokeWidth={2.5} />
          </span>
          <div>
            <span
              className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#B91C1C" }}
            >
              Junk backlink
            </span>
            <h3
              className="text-[18px] sm:text-[20px] font-bold leading-tight tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              What we never touch.
            </h3>
          </div>
        </div>

        <div
          className="mt-5 overflow-hidden"
          style={{
            background: "#fff",
            border: "1px solid rgba(239,68,68,0.20)",
            borderRadius: "var(--radius-md)",
            boxShadow: "0 1px 3px rgba(17,35,68,0.05)",
            filter: "saturate(0.85)",
          }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 border-b"
            style={{
              borderColor: "var(--border-color)",
              background: "#F8FAFC",
            }}
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: "#FCA5A5" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#FDE68A" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#86EFAC" }} />
            </span>
            <span
              className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                color: "var(--muted)",
              }}
            >
              <Globe className="w-2.5 h-2.5" strokeWidth={2.5} />
              top100best-cities-list.xyz/footer
            </span>
          </div>
          <div className="px-4 py-4">
            <div
              className="text-[10.5px] font-bold uppercase tracking-[0.12em] mb-2"
              style={{ color: "var(--muted)" }}
            >
              Footer link list · 320 outbound links
            </div>
            <p
              className="text-[12.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Top cities &middot; Top services &middot; Top providers &middot;{" "}
              <a
                className="relative font-semibold whitespace-nowrap"
                style={{ color: "#B91C1C" }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[1px] h-[6px] rounded-sm"
                  style={{
                    background: "rgba(239,68,68,0.22)",
                    zIndex: -1,
                  }}
                />
                best HVAC contractor click here
              </a>{" "}
              &middot; Cheap deals &middot; Online casino &middot; Loans now &middot; SEO services
            </p>
            <div
              className="mt-3 flex items-center gap-2 text-[10px] font-mono"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(239,68,68,0.10)",
                  color: "#B91C1C",
                  fontWeight: 700,
                }}
              >
                rel=&quot;nofollow ugc&quot;
              </span>
              <span>· footer · link 247 of 320</span>
            </div>
          </div>
        </div>

        <ul className="mt-5 space-y-2">
          {annotations.map((a) => (
            <li
              key={a.n}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[12px]"
              style={{
                background: "rgba(239,68,68,0.05)",
                border: "1px solid rgba(239,68,68,0.14)",
              }}
            >
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold"
                style={{
                  background: "linear-gradient(180deg, #F87171 0%, #DC2626 100%)",
                  color: "#fff",
                  boxShadow: "0 1px 2px rgba(127,29,29,0.30)",
                }}
              >
                {a.n}
              </span>
              <span
                className="flex-1 text-[12.5px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                {a.label}
              </span>
              <span
                className="text-[11.5px] font-semibold text-right"
                style={{ color: "#B91C1C" }}
              >
                {a.bad}
              </span>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(239,68,68,0.18)",
                  color: "#B91C1C",
                }}
              >
                <X className="w-3 h-3" strokeWidth={3} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function BacklinksAnatomy() {
  return (
    <section
      id="backlinks-anatomy"
      aria-labelledby="backlinks-anatomy-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-8%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Backlink anatomy"
          heading={
            <>
              The 6 quality checks every link must pass{" "}
              <span className="whitespace-nowrap">
                before we{" "}
                <span className="accent-underline">build it</span>.
              </span>
            </>
          }
          paragraph="Most agencies sell volume — links per month, citations per quarter. We sell links that hold up. Here’s the side-by-side: what an editorial backlink actually looks like vs. the junk Google is paid to ignore."
        />

        <div
          className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <GoodCard />
          <BadCard />
        </div>

        {/* Closing banner */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-5 card-surface"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(90deg, rgba(20,184,166,0.06) 0%, #fff 60%)",
            border: "1px solid rgba(20,184,166,0.22)",
          }}
        >
          <span
            className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0"
            style={{
              background:
                "linear-gradient(180deg, #2DD4BF 0%, #14B8A6 100%)",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(20,184,166,0.35)",
            }}
          >
            <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <p
            className="flex-1 text-[15px] sm:text-[16px] font-semibold leading-[1.5] text-center sm:text-left"
            style={{ color: "var(--ink)" }}
          >
            Every backlink we build clears all 6 checks before it ships — or it
            doesn&rsquo;t go live. Period.
          </p>
          <SecondaryButton asLink href="#contact">
            Vet links for my site
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
