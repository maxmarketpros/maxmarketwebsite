import { icons8Url } from "@/lib/icons8"
import { guarantees } from "@/lib/practices-data"

export function PracticesGuarantees() {
  return (
    <section
      aria-labelledby="practices-guarantees-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="practices-guarantees-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#practices-guarantees-dots)" />
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute top-[-30%] left-[10%] w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(116,211,255,0.20) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] right-[5%] w-[460px] h-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="section-container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-[760px] mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.10)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.20)",
            }}
          >
            In writing &middot; on every project
          </span>
          <h2
            id="practices-guarantees-heading"
            className="mt-5 text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-balance"
            style={{ color: "#fff" }}
          >
            What we guarantee.
          </h2>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {guarantees.map((g, i) => (
            <article
              key={g.value}
              className="text-center px-3 py-5 rounded-[var(--radius-lg)]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.06}s both`,
              }}
            >
              <span
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mx-auto"
                style={{
                  background: "rgba(116,211,255,0.18)",
                  border: "1px solid rgba(116,211,255,0.35)",
                }}
              >
                <img
                  src={icons8Url(g.iconId, 96)}
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <p
                className="mt-3 text-[14.5px] sm:text-[15px] font-bold leading-tight"
                style={{
                  background:
                    "linear-gradient(135deg, #B0E3FF 0%, #74D3FF 50%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {g.value}
              </p>
              <p
                className="mt-1.5 text-[11.5px] sm:text-[12px] leading-[1.45]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {g.explainer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
