import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  CheckCircle2,
  Star,
  Inbox,
  BellRing,
  ShieldCheck,
  XCircle,
  Sparkles,
  Heart,
} from "lucide-react"

const dontDoList = [
  {
    label: "Review gating",
    note: "Sending only happy customers to public review sites — direct policy violation on Google + Yelp.",
  },
  {
    label: "Buying or trading reviews",
    note: "FTC violation. Risk of permanent profile suspension and federal fines.",
  },
  {
    label: "Asking employees for reviews",
    note: "Inflates ratings dishonestly and gets flagged when reviewers share an IP / device.",
  },
  {
    label: "Incentives for 5-star reviews",
    note: '"Leave us a 5★ review for $10 off" is illegal in most states and against every platform&apos;s ToS.',
  },
]

export function ReviewFilter() {
  return (
    <section
      id="review-filter"
      aria-labelledby="review-filter-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-5%] right-[-8%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Bad-Review Filter"
          heading={
            <span id="review-filter-heading">
              Stop bad reviews{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">before they go public</span>.
              </span>
            </span>
          }
          paragraph="We don't gate, block, or hide reviews — that's against Google's terms of service. What we do is offer every customer two clearly-marked paths and let them choose. Happy customers naturally pick the public one. Unhappy ones almost always pick the private one — and now you can fix the issue before it ever hits a public profile."
        />

        <div
          className="mt-14 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Funnel diagram */}
          <div
            className="relative card-surface p-6 sm:p-8 lg:p-10"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            {/* Step 1: Trigger */}
            <div className="flex flex-col items-center text-center">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <Sparkles className="w-3 h-3" strokeWidth={2.75} />
                Step 1
              </span>
              <div
                className="mt-3 inline-flex items-center gap-2.5 px-5 py-3 rounded-[14px]"
                style={{
                  background: "linear-gradient(180deg, #fff 0%, #F8FAFC 100%)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                <CheckCircle2
                  className="w-5 h-5"
                  strokeWidth={2.5}
                  style={{ color: "#22C55E" }}
                />
                <span
                  className="text-[15px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Job marked complete in CRM
                </span>
              </div>
            </div>

            {/* Connector */}
            <div
              aria-hidden
              className="mx-auto my-3 w-px h-8"
              style={{ background: "var(--border-color)" }}
            />

            {/* Step 2: Ask */}
            <div className="flex flex-col items-center text-center">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <Sparkles className="w-3 h-3" strokeWidth={2.75} />
                Step 2 · 60 seconds later
              </span>
              <div
                className="mt-3 w-full max-w-[440px] px-5 py-5 rounded-[14px]"
                style={{
                  background:
                    "linear-gradient(180deg, #FFF7ED 0%, #FEF3C7 100%)",
                  border: "1px solid rgba(245,158,11,0.30)",
                  boxShadow: "0 4px 14px rgba(245,158,11,0.18)",
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "#B45309" }}
                >
                  SMS · sent to customer
                </div>
                <div
                  className="text-[15.5px] font-semibold leading-[1.4] mb-3"
                  style={{ color: "var(--ink)" }}
                >
                  &ldquo;How was your experience today?&rdquo;
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`${n} star rating`}
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-transform hover:scale-110"
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(245,158,11,0.30)",
                        boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                      }}
                    >
                      <Star
                        className="w-5 h-5"
                        fill="#F59E0B"
                        strokeWidth={0}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Branch arrows */}
            <div
              aria-hidden
              className="relative mx-auto mt-3 mb-6 max-w-[440px]"
              style={{ height: 36 }}
            >
              <svg
                viewBox="0 0 440 36"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 220 0 L 220 12 L 80 12 L 80 36"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 220 0 L 220 12 L 360 12 L 360 36"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Step 3: Branches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 4-5 ★ branch */}
              <div
                className="p-5 rounded-[14px]"
                style={{
                  background:
                    "linear-gradient(180deg, #F0FDF4 0%, #DCFCE7 100%)",
                  border: "1px solid rgba(34,197,94,0.30)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: "rgba(34,197,94,0.20)",
                      color: "#15803D",
                    }}
                  >
                    4–5 ★
                  </span>
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "#15803D" }}
                  >
                    Public path
                  </span>
                </div>
                <div
                  className="text-[15px] font-bold mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  Routed to public review
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  {[
                    { id: "17949", alt: "Google" },
                    { id: "20905", alt: "Yelp" },
                    { id: "118497", alt: "Facebook" },
                  ].map((logo) => (
                    <span
                      key={logo.alt}
                      className="w-7 h-7 rounded-[8px] flex items-center justify-center"
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(34,197,94,0.20)",
                      }}
                    >
                      <img
                        src={icons8Url(logo.id, 96)}
                        alt={logo.alt}
                        width={16}
                        height={16}
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4 object-contain"
                      />
                    </span>
                  ))}
                </div>
                <div
                  className="text-[12.5px] leading-[1.45]"
                  style={{ color: "var(--muted)" }}
                >
                  One-tap deeplink to their highest-priority platform — no
                  Google account login friction.
                </div>
              </div>

              {/* 1-3 ★ branch */}
              <div
                className="p-5 rounded-[14px]"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)",
                  border: "1px solid rgba(245,158,11,0.30)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: "rgba(245,158,11,0.20)",
                      color: "#B45309",
                    }}
                  >
                    1–3 ★
                  </span>
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "#B45309" }}
                  >
                    Private path
                  </span>
                </div>
                <div
                  className="text-[15px] font-bold mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  Private feedback inbox
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-bold"
                    style={{
                      background: "rgba(245,158,11,0.14)",
                      color: "#B45309",
                    }}
                  >
                    <Inbox className="w-3 h-3" strokeWidth={2.5} />
                    Owner inbox
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-bold"
                    style={{
                      background: "rgba(245,158,11,0.14)",
                      color: "#B45309",
                    }}
                  >
                    <BellRing className="w-3 h-3" strokeWidth={2.5} />
                    SMS in 5 min
                  </span>
                </div>
                <div
                  className="text-[12.5px] leading-[1.45]"
                  style={{ color: "var(--muted)" }}
                >
                  Customer always retains the option to post publicly — we just
                  give them a faster way to reach you first.
                </div>
              </div>
            </div>

            {/* Outcome stat */}
            <div
              className="mt-6 flex items-center gap-3 p-4 rounded-[var(--radius-md)]"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #FBA5C2 0%, #EC4899 100%)",
                  color: "#fff",
                  boxShadow: "0 2px 6px rgba(236,72,153,0.30)",
                }}
              >
                <Heart className="w-5 h-5" fill="#fff" strokeWidth={0} />
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[14.5px] font-bold leading-[1.35]"
                  style={{ color: "var(--ink)" }}
                >
                  73% of recovered customers come back to leave a 5-star public
                  review
                </div>
                <div
                  className="text-[12.5px] mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  Owner replies, fixes the issue, customer feels heard, rating
                  flips.
                </div>
              </div>
            </div>
          </div>

          {/* Side panel: what we don't do */}
          <div className="flex flex-col gap-6">
            <div
              className="p-6 rounded-[var(--radius-xl)]"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 3px var(--shadow-color), 0 8px 24px var(--shadow-color)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                  style={{
                    background: "rgba(34,197,94,0.14)",
                    color: "#15803D",
                  }}
                >
                  <ShieldCheck className="w-5 h-5" strokeWidth={2.25} />
                </span>
                <div>
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Compliance
                  </div>
                  <div
                    className="text-[16px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    What we never do
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {dontDoList.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 pb-3"
                    style={{
                      borderBottom: "1px solid var(--border-color)",
                    }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(239,68,68,0.10)",
                        color: "#DC2626",
                      }}
                    >
                      <XCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[13.5px] font-semibold line-through"
                        style={{ color: "var(--ink)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-[12px] leading-[1.4] mt-0.5"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: item.note }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-4 pt-3 text-[12.5px] leading-[1.5]"
                style={{ color: "var(--muted)" }}
              >
                Every public review on your profile is from a real customer who
                completed a real job. That&apos;s the only kind that compounds.
              </div>
            </div>

            <PrimaryButton size="lg" asLink href="#contact">
              See it run on a sample customer
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
