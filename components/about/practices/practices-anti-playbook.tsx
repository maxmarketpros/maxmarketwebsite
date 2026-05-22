import { SectionHeader } from "@/components/ui/section-header"
import { X, ShieldCheck } from "lucide-react"
import { refusals } from "@/lib/practices-data"

export function PracticesAntiPlaybook() {
  return (
    <section
      aria-labelledby="practices-anti-playbook-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Our Anti-Playbook"
          heading={
            <span id="practices-anti-playbook-heading">
              What we{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">refuse</span> to do
              </span>
              .
            </span>
          }
          paragraph="The marketing industry is full of shortcuts that get accounts suspended, sites deindexed, and rankings burned within months. Here are six tactics we will never touch — even if a client asks."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {refusals.map((r, i) => (
            <article
              key={r.title}
              className="card-surface card-surface-hover p-6 relative"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.05}s both`,
              }}
            >
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4"
                style={{
                  background: "rgba(244,63,94,0.10)",
                  color: "#F43F5E",
                  border: "1px solid rgba(244,63,94,0.25)",
                }}
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <h3
                className="text-[17px] sm:text-[18px] font-bold leading-tight tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {r.title}
              </h3>
              <p
                className="mt-2.5 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--muted)" }}
              >
                {r.reason}
              </p>
            </article>
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
              Google-compliant. Senior-staffed. Built to last.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
