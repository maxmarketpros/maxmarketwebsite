"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PrimaryButton } from "./ui/primary-button"
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react"
import {
  primaryNav,
  contact,
  clientPortal,
  type NavCategory,
  type NavSection,
  type NavChild,
} from "@/lib/site-map"

/* ─────────────────────────────────────────────
   MEGA MENU NAVBAR
   ───────────────────────────────────────────── */

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 10
      setScrolled((prev) => (prev === next ? prev : next))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* close mega menu on click outside */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  /* close mobile menu on route change or ESC */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(label)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 200)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(247,250,252,0.92)"
            : "rgba(247,250,252,0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${
            scrolled ? "var(--border-color)" : "transparent"
          }`,
        }}
      >
        <div className="section-container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="Max Market Pros — home"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              setMobileOpen(false)
            }}
          >
            <Image
              src="/brand/logo.png"
              alt="Max Market Pros"
              width={160}
              height={40}
              sizes="160px"
              style={{ width: "auto", height: "36px" }}
              priority
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryNav.map((cat) => (
              <div
                key={cat.label}
                className="relative"
                onMouseEnter={() => openMenu(cat.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium rounded-[var(--radius-xs)] transition-all duration-200 cursor-pointer"
                  style={{
                    color:
                      activeMenu === cat.label
                        ? "var(--accent)"
                        : "var(--muted)",
                    background:
                      activeMenu === cat.label
                        ? "rgba(22,119,255,0.06)"
                        : "transparent",
                  }}
                  onClick={() =>
                    setActiveMenu(activeMenu === cat.label ? null : cat.label)
                  }
                >
                  {cat.label}
                  <ChevronDown
                    className="w-3.5 h-3.5 transition-transform duration-200"
                    style={{
                      transform:
                        activeMenu === cat.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* ── Dropdown Panel ── */}
                {activeMenu === cat.label && (
                  <div
                    className="absolute top-full left-0 pt-3"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <MegaPanel category={cat} onClose={() => setActiveMenu(null)} />
                  </div>
                )}
              </div>
            ))}

            {/* Contact — simple link */}
            <Link
              href="/contact"
              className="px-3 py-2 text-[14px] font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--muted)" }}
            >
              Contact
            </Link>
          </div>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/client-portal"
              className="text-[14px] font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--muted)" }}
            >
              Client Portal
            </Link>
            <PrimaryButton asLink href="/contact/schedule">
              Book a Call
            </PrimaryButton>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius-xs)] transition-colors cursor-pointer"
            style={{ color: "var(--ink)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t overflow-y-auto"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              maxHeight: "calc(100vh - 72px)",
            }}
          >
            <div className="section-container py-4 flex flex-col">
              {primaryNav.map((cat) => (
                <MobileAccordion
                  key={cat.label}
                  category={cat}
                  isExpanded={mobileExpanded === cat.label}
                  onToggle={() =>
                    setMobileExpanded(
                      mobileExpanded === cat.label ? null : cat.label
                    )
                  }
                  subExpanded={mobileSubExpanded}
                  onSubToggle={(label) =>
                    setMobileSubExpanded(
                      mobileSubExpanded === label ? null : label
                    )
                  }
                  onClose={() => setMobileOpen(false)}
                />
              ))}

              {/* Contact */}
              <Link
                href="/contact"
                className="py-3 text-[15px] font-medium"
                style={{ color: "var(--ink)" }}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <div
                className="mt-3 pt-4 flex flex-col gap-3"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                <Link
                  href="/client-portal"
                  className="text-[15px] font-medium"
                  style={{ color: "var(--muted)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Client Portal
                </Link>
                <PrimaryButton asLink href="/contact/schedule">
                  Book a Call
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  )
}

/* ─────────────────────────────────────────────
   MEGA PANEL (Desktop Dropdown)
   ───────────────────────────────────────────── */

function MegaPanel({
  category,
  onClose,
}: {
  category: NavCategory
  onClose: () => void
}) {
  const hasSubSections = !!category.sections && category.sections.length > 0
  const children = category.children || []

  return (
    <div
      className="rounded-[var(--radius-lg)] animate-in fade-in slide-in-from-top-2 duration-200"
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--border-color)",
        boxShadow:
          "0 20px 60px rgba(11,18,32,0.12), 0 0 0 1px rgba(0,0,0,0.03)",
        minWidth: hasSubSections ? "960px" : children.length > 6 ? "680px" : "480px",
        maxWidth: "1100px",
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-3 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <Link
          href={category.href}
          className="text-[13px] font-semibold uppercase tracking-[0.06em] flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ color: "var(--ink)" }}
          onClick={onClose}
        >
          <category.icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
          {category.label}
          <ExternalLink className="w-3 h-3 opacity-40" />
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        {hasSubSections ? (
          /* ── Services-style: grouped sections ── */
          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: `repeat(${Math.min(
                category.sections!.length,
                4
              )}, 1fr)`,
            }}
          >
            {category.sections!.map((section) => (
              <div key={section.label}>
                <Link
                  href={section.href}
                  className="flex items-center gap-2 mb-3 text-[12px] font-semibold uppercase tracking-[0.06em] hover:opacity-70 transition-opacity"
                  style={{ color: "var(--accent)" }}
                  onClick={onClose}
                >
                  <section.icon
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--accent)" }}
                  />
                  {section.label}
                </Link>
                <div className="flex flex-col gap-0.5">
                  {section.children?.map((child) => (
                    <MegaLink
                      key={child.href}
                      child={child}
                      onClose={onClose}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── Flat children grid ── */
          <div
            className="grid gap-x-6 gap-y-0.5"
            style={{
              gridTemplateColumns:
                children.length > 5
                  ? "repeat(2, 1fr)"
                  : children.length > 3
                  ? "repeat(2, 1fr)"
                  : "1fr",
            }}
          >
            {children.map((child) => (
              <MegaLink key={child.href} child={child} onClose={onClose} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MEGA LINK (single dropdown item)
   ───────────────────────────────────────────── */

function MegaLink({
  child,
  onClose,
}: {
  child: NavChild
  onClose: () => void
}) {
  return (
    <Link
      href={child.href}
      className="group flex items-start gap-3 px-3 py-2.5 rounded-[var(--radius-xs)] transition-colors duration-150"
      style={{ color: "var(--ink)" }}
      onClick={onClose}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(22,119,255,0.04)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent"
      }}
    >
      <div
        className="mt-0.5 w-8 h-8 shrink-0 rounded-[8px] flex items-center justify-center"
        style={{
          background: "rgba(22,119,255,0.06)",
          border: "1px solid rgba(22,119,255,0.08)",
        }}
      >
        <child.icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
      </div>
      <div>
        <span className="block text-[13px] font-semibold leading-tight" style={{ color: "var(--ink)" }}>
          {child.label}
        </span>
        {child.description && (
          <span
            className="block text-[12px] mt-0.5 leading-snug"
            style={{ color: "var(--muted)" }}
          >
            {child.description}
          </span>
        )}
      </div>
    </Link>
  )
}

/* ─────────────────────────────────────────────
   MOBILE ACCORDION
   ───────────────────────────────────────────── */

function MobileAccordion({
  category,
  isExpanded,
  onToggle,
  subExpanded,
  onSubToggle,
  onClose,
}: {
  category: NavCategory
  isExpanded: boolean
  onToggle: () => void
  subExpanded: string | null
  onSubToggle: (label: string) => void
  onClose: () => void
}) {
  const hasSubSections = !!category.sections && category.sections.length > 0
  const children = category.children || []

  return (
    <div style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="flex items-stretch">
        <Link
          href={category.href}
          onClick={onClose}
          className="flex-1 flex items-center gap-2 py-3 text-[15px] font-medium"
          style={{ color: "var(--ink)" }}
        >
          <category.icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
          {category.label}
        </Link>
        <button
          type="button"
          aria-label={`Toggle ${category.label} submenu`}
          aria-expanded={isExpanded}
          className="flex items-center justify-center px-3 cursor-pointer"
          onClick={onToggle}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform duration-200"
            style={{
              color: "var(--muted)",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="pb-3 pl-2">
          {/* Link to overview page */}
          <Link
            href={category.href}
            className="flex items-center gap-2 px-3 py-2 text-[13px] font-semibold rounded-[var(--radius-xs)] mb-1"
            style={{ color: "var(--accent)" }}
            onClick={onClose}
          >
            View All {category.label}
            <ChevronRight className="w-3 h-3" />
          </Link>

          {hasSubSections
            ? category.sections!.map((section) => (
                <div key={section.label}>
                  <div className="flex items-stretch">
                    <Link
                      href={section.href}
                      onClick={onClose}
                      className="flex-1 flex items-center gap-2 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.04em]"
                      style={{ color: "var(--accent)" }}
                    >
                      <section.icon className="w-3.5 h-3.5" />
                      {section.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${section.label} submenu`}
                      aria-expanded={subExpanded === section.label}
                      className="flex items-center justify-center px-3 cursor-pointer"
                      onClick={() => onSubToggle(section.label)}
                    >
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{
                          color: "var(--accent)",
                          transform:
                            subExpanded === section.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </button>
                  </div>
                  {subExpanded === section.label &&
                    section.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 px-6 py-2 text-[14px] transition-colors duration-150 hover:opacity-70"
                        style={{ color: "var(--muted)" }}
                        onClick={onClose}
                      >
                        <child.icon className="w-3.5 h-3.5 shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                </div>
              ))
            : children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex items-center gap-2 px-3 py-2 text-[14px] transition-colors duration-150 hover:opacity-70"
                  style={{ color: "var(--muted)" }}
                  onClick={onClose}
                >
                  <child.icon className="w-3.5 h-3.5 shrink-0" />
                  {child.label}
                </Link>
              ))}
        </div>
      )}
    </div>
  )
}
