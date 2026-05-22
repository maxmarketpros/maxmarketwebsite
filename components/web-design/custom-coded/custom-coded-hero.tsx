import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Code2, Gauge, Lock, Rocket } from "lucide-react"

const CC_INK = "#0B132B"
const CC_BLUE = "#1677FF"
const CC_VIOLET = "#7C3AED"

const proofPills = [
  { Icon: Gauge, label: "Lighthouse 100s, on mobile" },
  { Icon: Code2, label: "Hand-coded — no templates, no plugins" },
  { Icon: Lock, label: "You own every line of code" },
  { Icon: Rocket, label: "Edge-deployed on Vercel" },
]

export function CustomCodedHero() {
  return (
    <section
      aria-labelledby="custom-coded-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(124,58,237,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(22,119,255,0.10) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(22,119,255,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <a href="/" className="hover:text-[var(--accent)]">
                Home
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/services" className="hover:text-[var(--accent)]">
                Services
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a
                href="/services/web-design"
                className="hover:text-[var(--accent)]"
              >
                Web Design
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Custom Coded Websites
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(124,58,237,0.35)",
                color: CC_VIOLET,
              }}
            >
              <Code2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              Custom coded websites · hand-built, no templates
            </span>

            <h1
              id="custom-coded-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Custom coded websites that{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(124,58,237,0.30) 65%)`,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                outperform
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              No templates. No page builders. No plugin bloat. Every{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                custom coded website
              </span>{" "}
              we ship is written by hand on Next.js, React, and TypeScript,
              styled with Tailwind, and deployed to Vercel's global edge —
              Lighthouse 100s, schema on every page, full code ownership, and a
              6-week launch.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="#custom-coded-build-breakdown">
                See the build process
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: CC_BLUE,
                      color: "#fff",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>

            <p
              className="mt-8 text-[13.5px]"
              style={{ color: "var(--muted)" }}
            >
              Prefer a builder?{" "}
              <a
                href="/services/web-design/webflow"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Webflow
              </a>
              {" · "}
              <a
                href="/services/web-design/squarespace"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Squarespace
              </a>
              {" · "}
              <a
                href="/services/web-design/wordpress"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                WordPress
              </a>
              {" · "}
              <a
                href="/services/web-design/wix"
                className="font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Wix
              </a>
            </p>
          </div>

          {/* Right: code editor mock */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
            aria-label="Code editor mockup showing a hand-coded React component"
          >
            <CodeEditorFrame />
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeEditorFrame() {
  return (
    <div className="relative">
      <div
        className="relative rounded-[var(--radius-xl)] overflow-hidden"
        style={{
          background: "#0F1014",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow:
            "0 4px 24px rgba(11,19,43,0.18), 0 24px 80px rgba(11,19,43,0.30)",
        }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center gap-3 px-4 py-2.5"
          style={{
            background: "#16171C",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex gap-1.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#FF5F56" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#FFBD2E" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#27C93F" }}
            />
          </div>
          <span
            className="text-[10.5px] font-mono opacity-60"
            style={{ color: "#fff" }}
          >
            ~/maxmarketpros/app/page.tsx
          </span>
          <span
            className="ml-auto text-[9.5px] font-bold px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(34,197,94,0.18)",
              color: "#34D399",
              border: "1px solid rgba(34,197,94,0.30)",
            }}
          >
            ● Live
          </span>
        </div>

        {/* Tab strip */}
        <div
          className="flex items-center gap-1 px-2 pt-2 text-[10.5px] font-mono"
          style={{
            background: "#0F1014",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <span
            className="px-3 py-1.5 rounded-t-md flex items-center gap-1.5"
            style={{
              background: "#1D1F23",
              color: "#74D3FF",
              borderTop: "2px solid #1677FF",
            }}
          >
            <span
              className="w-2.5 h-2.5 inline-block rounded-sm"
              style={{ background: "#1677FF" }}
            />
            Hero.tsx
          </span>
          <span
            className="px-3 py-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            layout.tsx
          </span>
          <span
            className="px-3 py-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            globals.css
          </span>
        </div>

        {/* Code body */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "32px 1fr", background: "#1D1F23" }}
        >
          {/* Line gutter */}
          <div
            className="py-4 text-right text-[10.5px] font-mono pr-2 select-none"
            style={{ color: "rgba(255,255,255,0.25)", lineHeight: "1.65" }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Code lines */}
          <pre
            className="py-4 pr-4 text-[11.5px] font-mono leading-[1.65] overflow-hidden"
            style={{ color: "rgba(255,255,255,0.85)", margin: 0 }}
          >
            <CodeLine>
              <KW>import</KW> {"{ "}
              <Var>Hero</Var>
              {" }"} <KW>from</KW> <Str>"@/components/hero"</Str>
            </CodeLine>
            <CodeLine>
              <KW>import</KW> {"{ "}
              <Var>Metadata</Var>
              {" }"} <KW>from</KW> <Str>"next"</Str>
            </CodeLine>
            <CodeLine />
            <CodeLine>
              <KW>export const</KW> <Var>metadata</Var>: <Type>Metadata</Type> ={" "}
              {"{"}
            </CodeLine>
            <CodeLine indent={1}>
              <Prop>title</Prop>: <Str>"Custom Coded Websites"</Str>,
            </CodeLine>
            <CodeLine indent={1}>
              <Prop>description</Prop>: <Str>"Lighthouse 100s..."</Str>,
            </CodeLine>
            <CodeLine>{"}"}</CodeLine>
            <CodeLine />
            <CodeLine>
              <KW>export default function</KW> <Fn>Page</Fn>() {"{"}
            </CodeLine>
            <CodeLine indent={1}>
              <KW>return</KW> <Tag>{"<Hero "}</Tag>
              <Prop>shipped</Prop>=<Brace>{"{"}</Brace>
              <Bool>true</Bool>
              <Brace>{"}"}</Brace> <Tag>{"/>"}</Tag>
            </CodeLine>
            <CodeLine>{"}"}</CodeLine>
            <CodeLine>
              <span
                className="inline-block w-1.5 h-3 align-middle"
                style={{
                  background: "#74D3FF",
                  animation: "fadeInUp 1s ease-in-out infinite alternate",
                }}
              />
            </CodeLine>
          </pre>
        </div>

        {/* Bottom status bar */}
        <div
          className="flex items-center gap-3 px-3 py-1.5 text-[10px] font-mono"
          style={{
            background: "linear-gradient(90deg, #1677FF 0%, #7C3AED 100%)",
            color: "#fff",
          }}
        >
          <span className="font-bold">main</span>
          <span className="opacity-70">·</span>
          <span className="opacity-90">TypeScript · React · Next.js</span>
          <span className="ml-auto opacity-90">UTF-8 · LF · 100% ✓</span>
        </div>
      </div>

      {/* Floating Lighthouse score */}
      <div
        className="absolute -bottom-4 -right-4 sm:-right-6 px-3 py-2 rounded-[var(--radius-md)]"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-[13px]"
            style={{
              background: "linear-gradient(180deg, #34D399 0%, #10B981 100%)",
              color: "#fff",
            }}
          >
            100
          </span>
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              Lighthouse
            </div>
            <div
              className="text-[12px] font-bold"
              style={{ color: "var(--ink)" }}
            >
              Mobile · Performance
            </div>
          </div>
        </div>
      </div>

      {/* Floating bundle-size badge */}
      <div
        className="absolute top-[40%] -left-4 sm:-left-6 px-2.5 py-2 rounded-[var(--radius-md)] hidden sm:flex flex-col gap-1"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="text-[9px] font-extrabold uppercase tracking-[0.12em]"
          style={{ color: "var(--muted)" }}
        >
          JS bundle
        </span>
        <div className="flex items-baseline gap-1">
          <span
            className="text-[16px] font-extrabold tracking-[-0.02em]"
            style={{ color: CC_INK }}
          >
            38
          </span>
          <span
            className="text-[10px] font-bold"
            style={{ color: "var(--muted)" }}
          >
            kB
          </span>
        </div>
      </div>
    </div>
  )
}

function CodeLine({
  children,
  indent = 0,
}: {
  children?: React.ReactNode
  indent?: number
}) {
  return (
    <div style={{ paddingLeft: indent * 16 }}>{children ?? <span>&nbsp;</span>}</div>
  )
}

function KW({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#C792EA" }}>{children}</span>
}
function Str({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#C3E88D" }}>{children}</span>
}
function Var({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#82AAFF" }}>{children}</span>
}
function Type({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#FFCB6B" }}>{children}</span>
}
function Prop({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#74D3FF" }}>{children}</span>
}
function Fn({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#82AAFF" }}>{children}</span>
}
function Tag({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#F07178" }}>{children}</span>
}
function Brace({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#89DDFF" }}>{children}</span>
}
function Bool({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#FF9CAC" }}>{children}</span>
}
