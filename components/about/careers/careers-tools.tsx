import Link from "next/link"
import { Favicon } from "@/components/about/practices/favicon"
import { TOOLS } from "@/lib/careers-data"

export function CareersTools() {
  return (
    <section
      aria-labelledby="careers-tools-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container relative z-10 section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <p
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--accent)" }}
            >
              Your toolkit
            </p>
            <h2
              id="careers-tools-heading"
              className="mt-3 text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Tools you'll use daily.
            </h2>
            <p
              className="mt-6 text-[16.5px] sm:text-[17.5px] leading-[1.7] max-w-[520px]"
              style={{ color: "var(--muted)" }}
            >
              We invest in modern tooling so the team can focus on real client
              outcomes — not on fighting their software. See more about how we{" "}
              <Link
                href="/about/practices"
                className="font-semibold hover:underline"
                style={{ color: "var(--ink)" }}
              >
                actually run engagements
              </Link>
              .
            </p>
          </div>

          <div
            className="rounded-[var(--radius-xl)] p-5 sm:p-6 lg:p-7"
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.06), 0 8px 28px rgba(17,35,68,0.08)",
              animation: "fadeInUp 0.9s ease-out 0.1s both",
            }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
              {TOOLS.map((t) => (
                <div
                  key={t.domain}
                  className="flex flex-col items-center gap-2 px-3 py-4 rounded-[var(--radius-sm)] transition-colors hover:bg-[rgba(22,119,255,0.04)]"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-[var(--radius-sm)] inline-flex items-center justify-center"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <Favicon
                      domain={t.domain}
                      name={t.name}
                      size={22}
                      iconId={t.iconId}
                    />
                  </span>
                  <span
                    className="text-[11.5px] font-semibold text-center leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
