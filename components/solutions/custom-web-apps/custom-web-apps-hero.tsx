"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Code2, LayoutDashboard, Users, Database, Settings, Bell, Plus, Search } from "lucide-react"

const trustItems = [
  { label: "You own the code" },
  { label: "2-week sprints, live previews" },
  { label: "Fixed scopes, no hourly bills" },
]

export function CustomWebAppsHero() {
  return (
    <section aria-labelledby="custom-web-apps-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[460px] h-[460px] sm:w-[780px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.16) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[620px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <nav aria-label="Breadcrumb" className="mb-6 text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-[var(--accent)]">Home</a></li>
                <li aria-hidden>/</li>
                <li><a href="/solutions" className="hover:text-[var(--accent)]">Solutions</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>Custom Web-Apps</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Custom Web App Development
            </Pill>

            <h1 id="custom-web-apps-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Software built around how you{" "}
              <span className="whitespace-nowrap">
                actually <span className="accent-underline">work</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Custom internal tools, client portals, white-label SaaS, and admin dashboards — built on modern, boring-reliable tech (Next.js + Postgres) and delivered as code you fully own.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a scoping call
              </PrimaryButton>
              <SecondaryButton asLink href="#custom-web-apps-features">
                See what we build
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Star className="w-4 h-4" style={{ color: "#8B5CF6" }} fill="currentColor" strokeWidth={0} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <AdminMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <Code2 className="w-3.5 h-3.5" style={{ color: "#8B5CF6" }} strokeWidth={2.5} />
              Built for your team
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,0.32)]"
              style={{ background: "#8B5CF6" }}
            >
              Next.js · Postgres · Stripe
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdminMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-3 sm:p-4"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(139,92,246,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative">
        {/* Browser chrome */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 rounded-t-[var(--radius-md)] border-b"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#EF4444" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F59E0B" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
          </div>
          <div
            className="ml-2 flex-1 px-2 py-0.5 rounded text-[10px] truncate border"
            style={{ background: "var(--surface)", borderColor: "var(--border-color)", color: "var(--muted)" }}
          >
            app.yourbrand.com / admin
          </div>
        </div>

        {/* Mobile: stack sidebar as top nav */}
        <div className="sm:hidden">
          <MobileAdminView />
        </div>

        {/* Tablet+: proper sidebar + main layout */}
        <div className="hidden sm:grid sm:grid-cols-[140px_1fr]" style={{ background: "var(--surface)" }}>
          {/* Sidebar */}
          <aside
            className="border-r p-3"
            style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
          >
            <div
              className="flex items-center gap-1.5 px-1.5 py-1 mb-3 rounded"
              style={{ background: "rgba(139,92,246,0.12)", color: "#8B5CF6" }}
            >
              <Code2 className="w-3 h-3" strokeWidth={2.5} />
              <span className="text-[10.5px] font-bold">Your Brand</span>
            </div>

            <SidebarItem Icon={LayoutDashboard} label="Dashboard" active />
            <SidebarItem Icon={Users} label="Customers" badge="247" />
            <SidebarItem Icon={Database} label="Projects" />
            <SidebarItem Icon={Bell} label="Notifications" badge="3" />
            <SidebarItem Icon={Settings} label="Settings" />
          </aside>

          {/* Main area */}
          <main className="p-3.5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                  Admin · Customers
                </div>
                <div className="text-[14px] font-bold" style={{ color: "var(--ink)" }}>
                  Active Customers (247)
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  className="w-6 h-6 rounded flex items-center justify-center border"
                  style={{ background: "var(--bg)", borderColor: "var(--border-color)", color: "var(--muted)" }}
                >
                  <Search className="w-3 h-3" strokeWidth={2.25} />
                </button>
                <button
                  className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10.5px] font-bold text-white"
                  style={{ background: "#8B5CF6" }}
                >
                  <Plus className="w-2.5 h-2.5" strokeWidth={3} />
                  New
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-3 flex items-center gap-3 border-b pb-1.5" style={{ borderColor: "var(--border-color)" }}>
              <Tab label="All" active />
              <Tab label="Active" />
              <Tab label="Pending" />
              <Tab label="Archived" />
            </div>

            {/* Rows */}
            <div className="mt-2 space-y-1">
              <Row name="Maria Lopez" tier="Pro" status="Active" color="#22C55E" />
              <Row name="Jordan Davis" tier="Pro" status="Active" color="#22C55E" />
              <Row name="Sarah Kwon" tier="Starter" status="Trial" color="#F59E0B" />
              <Row name="Terry Baker" tier="Pro" status="Active" color="#22C55E" />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({
  Icon,
  label,
  active,
  badge,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  active?: boolean
  badge?: string
}) {
  return (
    <div
      className="flex items-center gap-1.5 px-1.5 py-1 rounded text-[10.5px] font-semibold mb-0.5"
      style={{
        background: active ? "var(--surface)" : "transparent",
        color: active ? "#8B5CF6" : "var(--muted)",
        boxShadow: active ? "0 1px 2px rgba(17,35,68,0.04)" : "none",
      }}
    >
      <Icon className="w-3 h-3 shrink-0" strokeWidth={2.5} />
      <span className="flex-1 truncate">{label}</span>
      {badge && (
        <span
          className="text-[8.5px] font-bold px-1 rounded-full"
          style={{ background: active ? "#8B5CF6" : "var(--border-color)", color: active ? "#fff" : "var(--ink)" }}
        >
          {badge}
        </span>
      )}
    </div>
  )
}

function Tab({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={`text-[11px] font-semibold pb-1 ${active ? "border-b-2" : ""}`}
      style={{
        color: active ? "#8B5CF6" : "var(--muted)",
        borderColor: active ? "#8B5CF6" : "transparent",
      }}
    >
      {label}
    </span>
  )
}

function Row({ name, tier, status, color }: { name: string; tier: string; status: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2 px-2 py-1.5 rounded border text-[10.5px]"
      style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center text-[8.5px] font-bold shrink-0"
        style={{ background: "rgba(139,92,246,0.14)", color: "#8B5CF6" }}
      >
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <span className="font-bold flex-1 truncate" style={{ color: "var(--ink)" }}>{name}</span>
      <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-full border" style={{ borderColor: "var(--border-color)", color: "var(--muted)" }}>
        {tier}
      </span>
      <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: `${color}14`, color }}>
        {status}
      </span>
    </div>
  )
}

function MobileAdminView() {
  return (
    <div className="p-3 space-y-2.5" style={{ background: "var(--surface)" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: "rgba(139,92,246,0.14)", color: "#8B5CF6" }}>
            <Code2 className="w-3 h-3" strokeWidth={2.5} />
          </div>
          <span className="text-[11px] font-bold" style={{ color: "var(--ink)" }}>Your Brand Admin</span>
        </div>
        <button className="w-6 h-6 rounded flex items-center justify-center border" style={{ background: "var(--bg)", borderColor: "var(--border-color)", color: "var(--muted)" }}>
          <Search className="w-3 h-3" strokeWidth={2.25} />
        </button>
      </div>

      {/* Page header */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          Admin · Customers
        </div>
        <div className="text-[14px] font-bold" style={{ color: "var(--ink)" }}>
          Active Customers (247)
        </div>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Active", value: "247", color: "#22C55E" },
          { label: "Trial", value: "18", color: "#F59E0B" },
          { label: "Churn", value: "3", color: "#EF4444" },
        ].map((k) => (
          <div key={k.label} className="rounded-[var(--radius-xs)] border p-2" style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}>
            <div className="w-1 h-3 rounded-full" style={{ background: k.color }} />
            <div className="mt-1 text-[8.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              {k.label}
            </div>
            <div className="text-[15px] font-bold tracking-[-0.02em] leading-none" style={{ color: "var(--ink)" }}>
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Table preview */}
      <div className="space-y-1">
        <Row name="Maria Lopez" tier="Pro" status="Active" color="#22C55E" />
        <Row name="Jordan Davis" tier="Pro" status="Active" color="#22C55E" />
        <Row name="Sarah Kwon" tier="Starter" status="Trial" color="#F59E0B" />
      </div>

      <div
        className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10.5px] font-bold text-white"
        style={{ background: "#8B5CF6" }}
      >
        <Plus className="w-2.5 h-2.5" strokeWidth={3} />
        New customer
      </div>
    </div>
  )
}
