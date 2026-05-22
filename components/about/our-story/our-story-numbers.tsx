const stats = [
  { value: "Mar 19, 2020", label: "Founding day" },
  { value: "5+", label: "Years independent" },
  { value: "1,000+", label: "Businesses helped" },
  { value: "Nationwide", label: "States served" },
]

export function OurStoryNumbers() {
  return (
    <section
      aria-label="Max Market Pros by the numbers"
      className="relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Dot pattern overlay */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="our-story-numbers-dots"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#our-story-numbers-dots)" />
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute top-[-30%] left-[10%] w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
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

      <div className="section-container relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-y-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{
                animation: `fadeInUp 0.8s ease-out ${0.05 + i * 0.08}s both`,
              }}
            >
              <p
                className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-none tracking-[-0.02em]"
                style={{
                  background:
                    "linear-gradient(135deg, #B0E3FF 0%, #74D3FF 50%, #1677FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </p>
              <p
                className="mt-3 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{ color: "rgba(255,255,255,0.62)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
