"use client"

import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import { ROLES } from "@/lib/careers-data"
import { icons8Url } from "@/lib/icons8"

export function CareersRoles() {
  const handleApply = (slug: string) => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("careersRole", slug)
      } catch {
        // ignore
      }
      window.dispatchEvent(
        new CustomEvent("careers:select-role", { detail: { slug } }),
      )
    }
  }

  return (
    <section
      id="roles"
      aria-labelledby="careers-roles-heading"
      className="relative overflow-hidden scroll-mt-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="section-container relative z-10 section-y">
        <div className="max-w-[820px]">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "var(--accent)" }}
          >
            Open positions
          </p>
          <h2
            id="careers-roles-heading"
            className="mt-3 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Open roles in Irvine.
          </h2>
          <p
            className="mt-5 text-[16.5px] sm:text-[17.5px] leading-[1.7] max-w-[640px]"
            style={{ color: "var(--muted)" }}
          >
            Every role here is in-office, full-time, and reports to a senior
            operator. Compensation is competitive and discussed transparently in
            interviews — we just don't post salary bands publicly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {ROLES.map((r, i) => (
            <article
              key={r.slug}
              className="card-surface p-6 sm:p-7 lg:p-8 flex flex-col"
              style={{
                animation: `fadeInUp 0.8s ease-out ${0.06 + i * 0.05}s both`,
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="inline-flex items-center justify-center shrink-0 w-14 h-14 rounded-[var(--radius-md)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(116,211,255,0.18) 0%, rgba(22,119,255,0.12) 100%)",
                    border: "1px solid rgba(22,119,255,0.18)",
                  }}
                >
                  <img
                    src={icons8Url(r.iconId, 128)}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    style={{ width: 36, height: 36, objectFit: "contain" }}
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="mt-1.5 text-[14px] sm:text-[14.5px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {r.summary}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <p
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-2.5"
                    style={{ color: "var(--accent)" }}
                  >
                    What you'd do
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {r.doBullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[13.5px] leading-[1.5]"
                        style={{ color: "var(--ink)" }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          strokeWidth={2.4}
                          style={{ color: "var(--accent)" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-2.5"
                    style={{ color: "var(--muted)" }}
                  >
                    What we look for
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {r.lookFor.map((b) => (
                      <li
                        key={b}
                        className="text-[13.5px] leading-[1.5] pl-3.5 relative"
                        style={{ color: "var(--ink)" }}
                      >
                        <span
                          className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--border-color)" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                <span
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold"
                  style={{ color: "var(--muted)" }}
                >
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2.4} />
                  Irvine, CA · In-office · Full-time
                </span>
                <a
                  href="#apply"
                  onClick={() => handleApply(r.slug)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-sm)] font-semibold text-[13.5px] transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                    color: "#fff",
                    boxShadow:
                      "0 1px 2px rgba(17,35,68,0.1), 0 4px 12px rgba(22,119,255,0.22)",
                  }}
                >
                  Apply for this role
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.6} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
