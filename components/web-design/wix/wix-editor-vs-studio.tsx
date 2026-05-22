"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import {
  Check,
  ArrowRight,
  Briefcase,
  Sparkles,
  Layout,
  MousePointerClick,
  Database,
  Code2,
  Layers,
  Smartphone,
} from "lucide-react"

type Tab = "editor" | "studio"

type Capability = {
  Icon: typeof Layout
  title: string
  body: string
}

const editorCaps: Capability[] = [
  {
    Icon: MousePointerClick,
    title: "Drag-and-drop on a fixed canvas",
    body: "Wix Editor's classic canvas — fast to ship, perfect for service businesses, salons, restaurants, fitness studios, and small ecommerce.",
  },
  {
    Icon: Layers,
    title: "App Market wired in",
    body: "Bookings, Stores, Members, Pricing Plans, Forum — we wire the right Wix App Market pieces and tune them for conversion, not just install them.",
  },
  {
    Icon: Smartphone,
    title: "Mobile-tuned in 24 hours",
    body: "Editor's separate mobile view gets a manual pass — fonts, spacing, tap targets, sticky calls — so phones don't ship a desktop afterthought.",
  },
  {
    Icon: Sparkles,
    title: "Spaces by Wix branded app",
    body: "Members, bookings, classes, and chat in your own branded mobile app — no extra dev. Big retention lift for service businesses.",
  },
]

const studioCaps: Capability[] = [
  {
    Icon: Layout,
    title: "Responsive grid + breakpoints",
    body: "Wix Studio's CSS-grid breakpoint system means one design that flows from 4K monitor to phone — no mobile-view rebuild, no broken edge cases.",
  },
  {
    Icon: Database,
    title: "CMS collections + dynamic pages",
    body: "Studio's CMS drives portfolios, locations, team pages, blog, products — content updates ship in minutes without rebuilding sections.",
  },
  {
    Icon: Code2,
    title: "Velo by Wix custom code",
    body: "JavaScript on the front and back end, Wix Data, fetch APIs, scheduled jobs, webhooks. We extend Studio when defaults stop short.",
  },
  {
    Icon: Sparkles,
    title: "Designer-grade animation + interactions",
    body: "Scroll-driven reveals, sticky scenes, hover states, custom cursor effects — the kind of polish DIY Wix Editor users can't get to.",
  },
]

const tabs: { id: Tab; label: string; sub: string; Icon: typeof Briefcase }[] = [
  {
    id: "editor",
    label: "Wix Editor",
    sub: "Small biz, fast to ship",
    Icon: Briefcase,
  },
  {
    id: "studio",
    label: "Wix Studio",
    sub: "Designer-grade, agency-built",
    Icon: Sparkles,
  },
]

export function WixEditorVsStudio() {
  const [active, setActive] = useState<Tab>("studio")
  const caps = active === "editor" ? editorCaps : studioCaps

  return (
    <section
      id="wix-editor-vs-studio"
      aria-labelledby="wix-editor-vs-studio-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,85,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Wix Editor vs Wix Studio"
          heading={
            <span id="wix-editor-vs-studio-heading">
              Two Wix products,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">one designer</span>.
              </span>
            </span>
          }
          paragraph="We build on both Wix Editor and Wix Studio — and the right pick depends on your business, not on what's trending. Toggle to see how each one shows up in a real Wix website design engagement."
        />

        {/* Toggle */}
        <div
          className="mt-10 flex justify-center"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="inline-flex items-stretch p-1.5 rounded-full"
            style={{
              background: "#0B0B0B",
              border: "1px solid rgba(214,255,85,0.30)",
            }}
            role="tablist"
            aria-label="Wix Editor vs Wix Studio"
          >
            {tabs.map((t) => {
              const isActive = active === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-200 cursor-pointer"
                  style={{
                    background: isActive ? "#D6FF55" : "transparent",
                    color: isActive ? "#0B0B0B" : "rgba(255,255,255,0.78)",
                  }}
                >
                  <t.Icon
                    className="w-4 h-4"
                    strokeWidth={2.5}
                  />
                  <span className="flex flex-col items-start leading-tight">
                    <span>{t.label}</span>
                    <span
                      className="text-[10px] font-medium normal-case"
                      style={{ opacity: isActive ? 0.78 : 0.55 }}
                    >
                      {t.sub}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Capability grid */}
        <div
          key={active}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.5s ease-out both" }}
        >
          {caps.map((c, i) => (
            <div
              key={c.title}
              className="card-surface p-6 sm:p-7"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.5s ease-out ${0.04 * i}s both`,
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center"
                  style={{
                    background:
                      active === "studio"
                        ? "linear-gradient(135deg, #D6FF55 0%, #B8E840 100%)"
                        : "linear-gradient(135deg, #116DFF 0%, #0B5BD3 100%)",
                    color: active === "studio" ? "#0B0B0B" : "#fff",
                  }}
                >
                  <c.Icon className="w-5 h-5" strokeWidth={2.25} />
                </span>
                <div>
                  <h3
                    className="text-[18px] sm:text-[19px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-[1.6]"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation strip */}
        <div
          className="mt-10 flex flex-col md:flex-row items-stretch gap-3 max-w-[860px] mx-auto"
        >
          <RecCard
            highlight={active === "editor"}
            title="Pick Wix Editor when…"
            bullets={[
              "You run a service biz (salon, gym, contractor, agency)",
              "You'll edit copy + photos yourself after launch",
              "Bookings + Stores + Members are your core stack",
            ]}
          />
          <RecCard
            highlight={active === "studio"}
            title="Pick Wix Studio when…"
            bullets={[
              "You want a designer-grade, fully responsive build",
              "You need CMS-driven pages (locations, portfolio, blog)",
              "You'll extend with Velo code or external APIs",
            ]}
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Not sure which one fits?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "#0B0B0B" }}
          >
            Get a free Wix website design recommendation
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

function RecCard({
  highlight,
  title,
  bullets,
}: {
  highlight: boolean
  title: string
  bullets: string[]
}) {
  return (
    <div
      className="flex-1 rounded-[var(--radius-lg)] p-5 sm:p-6 transition-all"
      style={{
        background: highlight ? "#0B0B0B" : "var(--surface)",
        border: highlight
          ? "1px solid rgba(214,255,85,0.45)"
          : "1px solid var(--border-color)",
        boxShadow: highlight
          ? "0 12px 40px rgba(214,255,85,0.16)"
          : "0 1px 3px var(--shadow-color)",
      }}
    >
      <h4
        className="text-[15px] font-bold tracking-[-0.01em]"
        style={{ color: highlight ? "#D6FF55" : "var(--ink)" }}
      >
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-[14px] leading-[1.5]"
            style={{
              color: highlight ? "rgba(255,255,255,0.85)" : "var(--muted)",
            }}
          >
            <Check
              className="w-4 h-4 mt-0.5 shrink-0"
              strokeWidth={3}
              style={{ color: highlight ? "#D6FF55" : "#0B0B0B" }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
