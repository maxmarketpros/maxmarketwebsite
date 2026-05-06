import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Tech = {
  name: string
  role: string
  why: string
  iconId?: string
  customSvg?: React.ReactNode
  brand: string
}

function VercelMark() {
  return (
    <svg viewBox="0 0 24 20" width="32" height="28" aria-hidden>
      <path d="M12 0L24 20H0L12 0Z" fill="#0B132B" />
    </svg>
  )
}

function SanityMark() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#F03E2F" />
      <path
        d="M9.5 6.5c-2 0-3.5 1.2-3.5 3 0 3.4 6.5 2.4 6.5 5.5 0 1-.8 1.7-2.2 1.7-1.7 0-2.6-.9-2.6-2.4H5c0 2.6 2 4.2 5.2 4.2 2.5 0 4.5-1.3 4.5-3.6 0-3.7-6.5-2.7-6.5-5.6 0-.9.7-1.5 2-1.5 1.3 0 2 .7 2.1 1.8h2.5c-.1-2.2-1.8-3.5-4.6-3.5z"
        fill="#fff"
      />
    </svg>
  )
}

const stack: Tech[] = [
  {
    name: "Next.js",
    role: "React framework",
    why: "App Router, RSC, ISR, edge runtime — the foundation.",
    iconId: "yUdJlcKanVbh",
    brand: "#0B132B",
  },
  {
    name: "React",
    role: "UI library",
    why: "Component model with Server Components and Suspense.",
    iconId: "bzf0DqjXFHIW",
    brand: "#61DAFB",
  },
  {
    name: "TypeScript",
    role: "Type safety",
    why: "Catches whole categories of bugs before deploy.",
    iconId: "uJM6fQYqDaZK",
    brand: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    role: "Design system",
    why: "Design tokens, utility-first, zero CSS bloat.",
    iconId: "4PiNHtUJVbLs",
    brand: "#06B6D4",
  },
  {
    name: "Vercel",
    role: "Edge hosting",
    why: "Global CDN, instant rollbacks, preview deploys.",
    customSvg: <VercelMark />,
    brand: "#0B132B",
  },
  {
    name: "Node.js",
    role: "Server runtime",
    why: "API routes, server actions, webhooks, integrations.",
    iconId: "54087",
    brand: "#5FA04E",
  },
  {
    name: "Sanity",
    role: "Headless CMS",
    why: "Structured content, real-time editing, no plugin bloat.",
    customSvg: <SanityMark />,
    brand: "#F03E2F",
  },
  {
    name: "Stripe",
    role: "Payments",
    why: "Subscriptions, checkout, marketplace — fully owned.",
    iconId: "18980",
    brand: "#635BFF",
  },
]

export function CustomCodedTechStack() {
  return (
    <section
      id="custom-coded-tech-stack"
      aria-labelledby="custom-coded-tech-stack-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The stack we ship on"
          heading={
            <span id="custom-coded-tech-stack-heading">
              A modern, owned,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">batteries-included</span>
              </span>{" "}
              stack.
            </span>
          }
          paragraph="Every custom coded website we ship runs on the same battle-tested toolchain — the one Vercel, Notion, Linear, and OpenAI use. No experimental frameworks, no proprietary lock-in."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {stack.map((t, idx) => (
            <div
              key={t.name}
              className="card-surface card-surface-hover overflow-hidden group relative"
              style={{
                borderRadius: "var(--radius-lg)",
                padding: "20px",
                animation: `fadeInUp 0.6s ease-out ${0.04 * idx}s both`,
              }}
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-[140px] h-[140px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${t.brand}1F 0%, transparent 70%)`,
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center overflow-hidden"
                    style={{
                      background: "#fff",
                      border: `1px solid ${t.brand}33`,
                      boxShadow: `0 1px 2px ${t.brand}14`,
                    }}
                  >
                    {t.iconId ? (
                      <img
                        src={icons8Url(t.iconId, 96)}
                        alt={`${t.name} logo`}
                        width={32}
                        height={32}
                        loading="lazy"
                        decoding="async"
                        className="w-[32px] h-[32px] object-contain"
                      />
                    ) : (
                      t.customSvg
                    )}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded-full"
                    style={{
                      background: `${t.brand}10`,
                      color: t.brand,
                    }}
                  >
                    {t.role}
                  </span>
                </div>
                <h3
                  className="mt-4 text-[17px] font-bold leading-[1.2] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {t.name}
                </h3>
                <p
                  className="mt-1.5 text-[13px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  {t.why}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-center text-[14px]"
          style={{ color: "var(--muted)" }}
        >
          Need a deeper look at how these pieces fit together? Jump to the{" "}
          <a
            href="#custom-coded-architecture"
            className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            style={{ color: "var(--accent)" }}
          >
            architecture diagram →
          </a>
        </p>
      </div>
    </section>
  )
}
