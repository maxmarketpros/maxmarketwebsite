import Link from "next/link"
import { PERKS } from "@/lib/careers-data"
import { icons8Url } from "@/lib/icons8"

export function CareersPerks() {
  return (
    <section
      aria-labelledby="careers-perks-heading"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="section-container relative z-10 section-y">
        <div
          className="max-w-[760px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          <p
            className="text-[12px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "var(--accent)" }}
          >
            Perks &middot; What you get
          </p>
          <h2
            id="careers-perks-heading"
            className="mt-3 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            What you get here.
          </h2>
          <p
            className="mt-5 text-[16.5px] sm:text-[18px] leading-[1.65] max-w-[640px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            We've kept the team small and the perks honest. Meet some of the{" "}
            <Link
              href="/about/team"
              className="font-semibold hover:underline"
              style={{ color: "var(--ink)" }}
            >
              people you'd work with
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PERKS.map((p, i) => (
            <article
              key={p.title}
              className="card-surface card-surface-hover p-6 sm:p-7"
              style={{
                animation: `fadeInUp 0.8s ease-out ${0.08 + i * 0.05}s both`,
              }}
            >
              <span
                className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-md)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(116,211,255,0.18) 0%, rgba(22,119,255,0.12) 100%)",
                  border: "1px solid rgba(22,119,255,0.18)",
                }}
              >
                <img
                  src={icons8Url(p.iconId, 128)}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  style={{ width: 32, height: 32, objectFit: "contain" }}
                />
              </span>
              <h3
                className="mt-5 text-[19px] sm:text-[20px] font-bold leading-tight tracking-[-0.015em]"
                style={{ color: "var(--ink)" }}
              >
                {p.title}
              </h3>
              <p
                className="mt-2.5 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--muted)" }}
              >
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
