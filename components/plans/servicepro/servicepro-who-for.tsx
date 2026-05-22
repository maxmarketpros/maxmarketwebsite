import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { serviceproAudience } from "@/lib/servicepro-data"

export function ServiceProWhoFor() {
  return (
    <section
      aria-labelledby="servicepro-who-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Who it’s for"
          heading={
            <span id="servicepro-who-heading">
              Built for the local service business{" "}
              <span className="whitespace-nowrap">
                ready to <span className="accent-underline">scale</span>.
              </span>
            </span>
          }
          paragraph="ServicePro is the Most Popular plan for a reason — it’s designed for the moment a local business goes from getting found to getting fully booked."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {serviceproAudience.map((profile, i) => (
            <div
              key={profile.title}
              className="card-surface card-surface-hover relative overflow-hidden p-7 flex flex-col"
              style={{ animation: `fadeInUp 0.7s ease-out ${0.1 + i * 0.08}s both` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 w-[55%] h-[55%]"
                style={{
                  background: `radial-gradient(ellipse 80% 100% at 80% 20%, ${profile.accent}1F 0%, transparent 70%)`,
                }}
              />

              <div className="relative flex-1 flex flex-col">
                <img
                  src={icons8Url(profile.iconId, 192)}
                  alt={profile.iconAlt}
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="w-[80px] h-[80px] object-contain shrink-0"
                />
                <h3
                  className="mt-5 text-[19px] sm:text-[20px] font-bold leading-[1.25] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {profile.title}
                </h3>
                <p
                  className="mt-3 text-[15px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  {profile.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
