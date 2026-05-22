import { MapPin, Clock, Navigation } from "lucide-react"

const hours = [
  { day: "Monday", time: "8:30 AM – 3:30 PM" },
  { day: "Tuesday", time: "8:30 AM – 3:30 PM" },
  { day: "Wednesday", time: "8:30 AM – 3:30 PM" },
  { day: "Thursday", time: "8:30 AM – 3:30 PM" },
  { day: "Friday", time: "8:30 AM – 3:30 PM" },
  { day: "Saturday", time: "Closed", closed: true },
  { day: "Sunday", time: "Closed", closed: true },
]

const todayIndex = () => {
  // 0=Sunday, 1=Monday, ... 6=Saturday — map to our array order (Mon..Sun)
  const d = new Date().getDay()
  return d === 0 ? 6 : d - 1
}

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/102400538247639",
    Icon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.018 10.125 11.927v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796v8.437C19.612 23.09 24 18.098 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/maxmarketpros/",
    Icon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joseph-stirling/",
    Icon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCUPi3awpe7Hrt5CUID9MLog",
    Icon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function ContactOffice() {
  const today = todayIndex()

  return (
    <section
      aria-labelledby="contact-office-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8">
          {/* Office + map card */}
          <div
            className="card-surface overflow-hidden flex flex-col"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div className="p-7 sm:p-8">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.10em] rounded-full"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <MapPin className="w-3 h-3" strokeWidth={2.5} />
                Our office
              </span>
              <h2
                id="contact-office-heading"
                className="mt-4 text-[28px] sm:text-[34px] font-bold leading-[1.1] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                Visit our Irvine office.
              </h2>
              <address
                className="mt-4 not-italic text-[16px] leading-[1.6]"
                style={{ color: "var(--ink)" }}
              >
                <strong>Max Market Pros</strong>
                <br />
                2600 Michelson Dr, 16th Floor
                <br />
                Irvine, CA 92612
              </address>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2600+Michelson+Dr+16th+Fl,+Irvine,+CA+92612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-sm)] text-[14px] font-semibold transition-colors"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <Navigation className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Get directions
                </a>
                <a
                  href="tel:+19496030389"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-sm)] text-[14px] font-semibold transition-colors hover:bg-[var(--bg)]"
                  style={{
                    border: "1px solid var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  Call from the lobby
                </a>
              </div>
            </div>

            {/* Map embed — grows to fill the remaining card height */}
            <div
              className="relative w-full flex-1"
              style={{
                minHeight: 320,
                borderTop: "1px solid var(--border-color)",
                background: "var(--bg)",
              }}
            >
              <iframe
                title="Map showing Max Market Pros office in Irvine, CA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.355408359939!2d-117.85053459999999!3d33.6738603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce7a447c59297%3A0x47ae50923ef7bc34!2sMax%20Market%20Pros!5e0!3m2!1sen!2sus!4v1778177261503!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Hours + socials column */}
          <div className="flex flex-col gap-6">
            {/* Hours card */}
            <div
              className="card-surface p-7 sm:p-8"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.10em] rounded-full"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <Clock className="w-3 h-3" strokeWidth={2.5} />
                Hours
              </span>
              <h2
                className="mt-4 text-[24px] sm:text-[28px] font-bold leading-[1.15] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                Hours of operation
              </h2>
              <ul className="mt-5 divide-y" style={{ borderColor: "var(--border-color)" }}>
                {hours.map((h, idx) => {
                  const isToday = idx === today
                  return (
                    <li
                      key={h.day}
                      className="flex items-center justify-between py-2.5"
                      style={{
                        borderBottom: "1px solid var(--border-color)",
                      }}
                    >
                      <span
                        className="text-[14.5px] font-semibold flex items-center gap-2"
                        style={{
                          color: isToday ? "var(--accent)" : "var(--ink)",
                        }}
                      >
                        {h.day}
                        {isToday && (
                          <span
                            className="text-[10px] font-bold uppercase tracking-[0.10em] px-1.5 py-0.5 rounded"
                            style={{
                              background: "var(--accent)",
                              color: "#fff",
                            }}
                          >
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className="text-[14px] font-medium"
                        style={{
                          color: h.closed ? "var(--muted)" : "var(--ink)",
                        }}
                      >
                        {h.time}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <p
                className="mt-5 text-[13.5px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                After hours? Drop us a{" "}
                <a
                  href="#contact"
                  className="font-semibold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  message
                </a>{" "}
                — we&rsquo;ll respond by 9 AM the next business day.
              </p>
            </div>

            {/* Socials card */}
            <div
              className="card-surface p-7 sm:p-8"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.10em] rounded-full"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                Follow along
              </span>
              <h2
                className="mt-4 text-[24px] sm:text-[28px] font-bold leading-[1.15] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                See our work daily.
              </h2>
              <p
                className="mt-3 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--muted)" }}
              >
                Wins, behind-the-scenes builds, and quick local-marketing tips
                for service businesses.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--bg)]"
                    style={{
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      <s.Icon />
                    </span>
                    <span
                      className="text-[14px] font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {s.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
