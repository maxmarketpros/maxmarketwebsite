import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { startermarkAudience } from "@/lib/startermark-data"

export function StarterMarkWhoFor() {
  return (
    <section
      aria-labelledby="startermark-who-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[-5%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Who it's for"
          heading={
            <span id="startermark-who-heading">
              Built for businesses that need to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">start somewhere</span>.
              </span>
            </span>
          }
          paragraph="StarterMark isn't the right plan if you're already booked solid. It's the right plan if you're trying to look real, get on Google, and start taking quotes — without paying for things you don't need yet."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-[860px] mx-auto">
          {startermarkAudience.map((profile, i) => (
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
