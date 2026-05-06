import { ArrowRight, ArrowRightLeft } from "lucide-react"

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const platforms = [
  {
    name: "Squarespace",
    href: "/services/web-design/squarespace",
    domain: "squarespace.com",
    blurb: "Polished design, fast Lighthouse",
  },
  {
    name: "WordPress",
    href: "/services/web-design/wordpress",
    domain: "wordpress.org",
    blurb: "Open source, fully extensible",
  },
  {
    name: "Custom-coded",
    href: "/services/web-design/custom-coded",
    domain: "vercel.com",
    blurb: "Next.js + headless CMS",
  },
]

export function GoDaddyMigrationStrip() {
  return (
    <section
      aria-labelledby="godaddy-migration-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container py-16 sm:py-20">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #0B132B 0%, #11203F 60%, #0FB3B3 130%)",
            border: "1px solid rgba(27,219,219,0.30)",
            boxShadow:
              "0 4px 12px rgba(11,19,43,0.20), 0 20px 60px rgba(11,19,43,0.30)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-10 w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(27,219,219,0.32) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-10 w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
            }}
          />

          <div className="relative px-6 sm:px-10 lg:px-14 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-center">
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <ArrowRightLeft className="w-3 h-3" strokeWidth={2.5} />
                Outgrowing GoDaddy?
              </span>
              <h2
                id="godaddy-migration-heading"
                className="mt-4 text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
                style={{ color: "#fff" }}
              >
                If GoDaddy hits its ceiling,
                <br className="hidden sm:block" /> we{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(27,219,219,0.55) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  move you cleanly
                </span>
                .
              </h2>
              <p
                className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] max-w-[460px]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Some businesses outgrow Websites + Marketing. When that day comes,
                we migrate to a platform that fits — without losing rankings,
                domain, or email.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="group relative overflow-hidden p-4 transition-all"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "var(--radius-lg)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-10 h-10 rounded-md flex items-center justify-center"
                      style={{ background: "#fff" }}
                    >
                      <img
                        src={favicon(p.domain, 128)}
                        alt={`${p.name} logo`}
                        width={22}
                        height={22}
                        loading="lazy"
                        decoding="async"
                        className="w-[22px] h-[22px] object-contain"
                      />
                    </span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    />
                  </div>
                  <div
                    className="mt-3 text-[15px] font-extrabold"
                    style={{ color: "#fff" }}
                  >
                    Move to {p.name}
                  </div>
                  <div
                    className="mt-1 text-[12px] leading-tight"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {p.blurb}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
