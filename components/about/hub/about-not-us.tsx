import Link from "next/link"
import { X, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Row = {
  not: string
  notWhy: string
  is: string
  isWhy: React.ReactNode
}

const rows: Row[] = [
  {
    not: "Not a content mill.",
    notWhy:
      "We don't crank out template pages, copy-paste geo grids, or junk blog posts to pad a deliverable list.",
    is: "Senior-owned strategy.",
    isWhy: (
      <>
        Every plan is written by a senior strategist who runs it with you.{" "}
        <Link
          href="/about/practices"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          How we run accounts &rarr;
        </Link>
      </>
    ),
  },
  {
    not: "Not freelance.",
    notWhy:
      "No subcontractor networks, no overseas hand-offs, no juniors shadowing your account.",
    is: "Full in-house team.",
    isWhy: (
      <>
        Ten W-2 specialists in Irvine &mdash; designers, developers, ad buyers,
        SEOs. All on one payroll, all on one calendar.{" "}
        <Link
          href="/about/team"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          Meet them &rarr;
        </Link>
      </>
    ),
  },
  {
    not: "Not lock-in.",
    notWhy:
      "No 24-month contracts, no surprise renewal fees, no ransoming your domain or assets.",
    is: "Fixed scope. Clear exit.",
    isWhy: (
      <>
        Engagements are written in fixed scope with transparent reporting.
        Cancel any time and we hand back the keys.{" "}
        <Link
          href="/about/practices#guarantees"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          What we guarantee &rarr;
        </Link>
      </>
    ),
  },
]

export function AboutNotUs() {
  return (
    <section
      aria-labelledby="about-not-us-heading"
      className="relative"
      style={{ background: "#FFFFFF" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What we're not"
          heading={
            <span id="about-not-us-heading">
              Three things we&rsquo;re{" "}
              <span className="accent-underline">not</span>.
            </span>
          }
          paragraph="A lot of agencies are. We built Max Market Pros specifically so it wouldn't be."
        />

        <div className="mt-12 sm:mt-14 space-y-5 sm:space-y-6 max-w-[1100px] mx-auto">
          {rows.map((r, i) => (
            <article
              key={r.not}
              className="grid grid-cols-1 md:grid-cols-2 overflow-hidden card-surface"
              style={{
                animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.08}s both`,
                borderRadius: "var(--radius-lg)",
              }}
            >
              {/* NOT side */}
              <div
                className="p-6 sm:p-7 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(244,63,94,0.06) 0%, rgba(244,63,94,0.02) 100%)",
                  borderRight: "1px solid var(--border-color)",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                  style={{
                    background: "rgba(244,63,94,0.12)",
                    color: "#E11D48",
                    border: "1px solid rgba(244,63,94,0.22)",
                  }}
                >
                  <X className="w-3 h-3" strokeWidth={3} />
                  Not us
                </span>
                <h3
                  className="mt-4 text-[20px] sm:text-[24px] font-bold leading-tight tracking-[-0.015em]"
                  style={{ color: "var(--ink)" }}
                >
                  {r.not}
                </h3>
                <p
                  className="mt-3 text-[14.5px] sm:text-[15px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  {r.notWhy}
                </p>
              </div>

              {/* IS side */}
              <div
                className="p-6 sm:p-7 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(22,119,255,0.06) 0%, rgba(116,211,255,0.04) 100%)",
                }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.12em]"
                  style={{
                    background: "rgba(22,119,255,0.12)",
                    color: "var(--accent)",
                    border: "1px solid rgba(22,119,255,0.22)",
                  }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                  What we are
                </span>
                <h3
                  className="mt-4 text-[20px] sm:text-[24px] font-bold leading-tight tracking-[-0.015em]"
                  style={{ color: "var(--ink)" }}
                >
                  {r.is}
                </h3>
                <p
                  className="mt-3 text-[14.5px] sm:text-[15px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  {r.isWhy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
