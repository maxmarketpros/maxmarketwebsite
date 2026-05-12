import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { signatureTeam, SIGNATURE_BOOK_HREF } from "@/lib/signature-data"

export function SignatureConcierge() {
  return (
    <section
      aria-labelledby="signature-concierge-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[-5%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Your dedicated team"
          heading={
            <span id="signature-concierge-heading">
              A whole marketing department,{" "}
              <span className="whitespace-nowrap">
                on <span className="accent-underline">retainer</span>.
              </span>
            </span>
          }
          paragraph="Signature isn’t one generalist juggling everything. It’s four specialists, each owning a clear slice of your marketing — coordinated by a single strategy lead so you only ever talk to one person."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {signatureTeam.map((member, i) => (
            <div
              key={member.role}
              className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col items-start"
              style={{ animation: `fadeInUp 0.7s ease-out ${0.08 + i * 0.07}s both` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 w-[60%] h-[60%]"
                style={{
                  background: `radial-gradient(ellipse 80% 100% at 80% 20%, ${member.accent}24 0%, transparent 70%)`,
                }}
              />

              <div className="relative">
                <div
                  className="w-[68px] h-[68px] rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${member.accent}26 0%, ${member.accent}0A 100%)`,
                    border: `1px solid ${member.accent}40`,
                  }}
                >
                  <img
                    src={icons8Url(member.iconId, 192)}
                    alt={member.iconAlt}
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-[56px] h-[56px] object-contain"
                  />
                </div>

                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{ background: `${member.accent}14`, color: member.accent, border: `1px solid ${member.accent}33` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: member.accent, animation: "subtlePulse 2.4s ease-in-out infinite" }}
                  />
                  Dedicated
                </span>

                <h3
                  className="mt-3 text-[18px] font-bold leading-[1.25] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {member.role}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                  {member.owns}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-10 rounded-[var(--radius-xl)] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color)",
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="hidden sm:inline-flex w-11 h-11 rounded-[12px] items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(124,58,237,0.12) 100%)",
                color: "#BE185D",
                border: "1px solid rgba(236,72,153,0.30)",
              }}
            >
              <Users className="w-5 h-5" strokeWidth={2.3} />
            </span>
            <div>
              <h3 className="text-[17px] sm:text-[19px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
                One team. One POC. One bill.
              </h3>
              <p className="mt-1 text-[14px]" style={{ color: "var(--muted)" }}>
                Meet your full team on your first strategy call.
              </p>
            </div>
          </div>
          <Link
            href={SIGNATURE_BOOK_HREF}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold px-5 py-2.5 rounded-[var(--radius-sm)] text-white transition-all hover:translate-y-[-1px] shrink-0"
            style={{
              background: "linear-gradient(135deg, #F472B6 0%, #EC4899 60%, #BE185D 100%)",
              boxShadow: "0 4px 14px rgba(236,72,153,0.40)",
            }}
          >
            Meet the team
            <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  )
}
