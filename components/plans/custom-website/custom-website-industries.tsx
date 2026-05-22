import { Pill } from "@/components/ui/pill"
import { industriesServed } from "@/lib/custom-website-data"
import { icons8Url } from "@/lib/icons8"

export function CustomWebsiteIndustries() {
  return (
    <section
      id="custom-website-industries"
      aria-labelledby="custom-website-industries-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container pt-14 sm:pt-20 pb-8 sm:pb-10">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Pill>Built for the trades</Pill>
          </div>
          <h2
            id="custom-website-industries-heading"
            className="text-[22px] sm:text-[26px] font-bold leading-tight tracking-[-0.02em]"
            style={{ color: "var(--ink)" }}
          >
            Websites for the businesses that keep towns running.
          </h2>
        </div>

        <ul
          className="mt-9 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {industriesServed.map((ind) => (
            <li
              key={ind.name}
              className="flex flex-col items-center justify-center gap-2 px-3 py-4 rounded-[var(--radius-md)] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 2px var(--shadow-color)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icons8Url(ind.icons8Id, 96)}
                alt={`${ind.name} icon`}
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                style={{ width: 36, height: 36 }}
              />
              <span
                className="text-[12.5px] font-bold leading-tight text-center"
                style={{ color: "var(--ink)" }}
              >
                {ind.name}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 text-center text-[13.5px]"
          style={{ color: "var(--muted)" }}
        >
          Don&rsquo;t see your trade?{" "}
          <a
            href="/contact/schedule"
            className="font-semibold underline decoration-[var(--cyan)] decoration-2 underline-offset-4 hover:text-[var(--accent)] transition-colors"
            style={{ color: "var(--ink)" }}
          >
            We build for almost every local service business
          </a>
          .
        </p>
      </div>
    </section>
  )
}
