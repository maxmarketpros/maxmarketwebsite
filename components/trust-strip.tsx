"use client"

const partners = [
  { name: "Google", src: "/partners/google-logo.webp" },
  { name: "Google My Business", src: "/partners/google-my-business-logo.webp" },
  { name: "Semrush", src: "/partners/semrush-logo.png" },
  { name: "HighLevel", src: "/partners/highlevel-logo.png" },
  { name: "Yelp", src: "/partners/yelp-logo.png" },
  { name: "Webflow", src: "/partners/webflow-logo.svg" },
  { name: "Wix", src: "/partners/wix-logo.png" },
  { name: "Netlify", src: "/partners/netlify-logo.png" },
  { name: "Relume", src: "/partners/relume-logo.png" },
]

export function TrustStrip() {
  const doubled = [...partners, ...partners]

  return (
    <div
      data-trust-strip
      className="mt-10 sm:mt-12 lg:mt-14 relative overflow-hidden flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border-color)",
        borderRadius: "var(--radius-lg)",
        boxShadow:
          "0 1px 2px var(--shadow-color), 0 4px 16px var(--shadow-color)",
      }}
    >
      {/* Eyebrow label */}
      <div
        className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] shrink-0 text-center sm:text-left"
        style={{ color: "var(--muted)" }}
      >
        Powered by trusted platforms
      </div>

      {/* Divider (sm+) */}
      <div
        aria-hidden
        className="hidden sm:block self-stretch w-px"
        style={{ background: "var(--border-color)" }}
      />

      {/* Scrolling row with edge fades */}
      <div
        className="relative flex-1 w-full overflow-hidden trust-mask"
      >
        <div className="flex items-center gap-8 sm:gap-10 trust-scroll whitespace-nowrap w-max">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center justify-center h-5 sm:h-6 w-[88px] sm:w-[104px] shrink-0"
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trust-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }
        @keyframes trust-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .trust-scroll {
          animation: trust-scroll 45s linear infinite;
        }
        .trust-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
