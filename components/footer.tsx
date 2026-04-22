import Image from "next/image"
import Link from "next/link"
import {
  about,
  services,
  solutions,
  plans,
  tools,
  industries,
  resources,
  contact,
} from "@/lib/site-map"

/* ── Footer Link Groups ── */

const footerGroups = [
  {
    title: "Services",
    links: [
      ...(services.sections?.map((s) => ({ label: s.label, href: s.href })) || []),
    ],
  },
  {
    title: "Solutions",
    links:
      solutions.children?.slice(0, 6).map((c) => ({
        label: c.label.replace(" & Management", "").replace(" & Invoicing", ""),
        href: c.href,
      })) || [],
  },
  {
    title: "Plans",
    links: plans.children?.map((c) => ({ label: c.label, href: c.href })) || [],
  },
  {
    title: "Tools",
    links: tools.children?.map((c) => ({ label: c.label, href: c.href })) || [],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      ...(about.children?.slice(0, 4).map((c) => ({
        label: c.label,
        href: c.href,
      })) || []),
    ],
  },
  {
    title: "Resources",
    links: [
      ...(resources.children?.map((c) => ({ label: c.label, href: c.href })) || []),
      ...(industries.children?.slice(0, 2).map((c) => ({
        label: c.label,
        href: c.href,
      })) || []),
    ],
  },
  {
    title: "Contact",
    links: [
      ...(contact.children?.map((c) => ({
        label: c.label,
        href: c.href,
      })) || []),
      { label: "Client Portal", href: "/client-portal" },
    ],
  },
]

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="section-container py-16 sm:py-20">
        {/* ── Top: Brand + Link Columns ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-10 lg:gap-6">
          {/* Brand column — spans 2 cols on lg */}
          <div className="col-span-2">
            <Image
              src="/brand/logo.png"
              alt="Max Market Pros"
              width={160}
              height={40}
              sizes="160px"
              style={{ width: "auto", height: "36px" }}
              className="mb-5"
            />
            <p
              className="text-[14px] leading-[1.65] max-w-[300px]"
              style={{ color: "var(--muted)" }}
            >
              Done‑for‑you local SEO, web design, and lead generation. Built to
              help service businesses grow on Google and close more jobs.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {["facebook", "instagram", "linkedin", "youtube"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                      color: "var(--muted)",
                    }}
                    aria-label={social}
                  >
                    <SocialIcon name={social} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4
                className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-4"
                style={{ color: "var(--ink)" }}
              >
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] transition-colors duration-200 hover:opacity-70"
                      style={{ color: "var(--muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <p className="text-[13px]" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Max Market Pros. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[13px] hover:opacity-70 transition-opacity"
              style={{ color: "var(--muted)" }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[13px] hover:opacity-70 transition-opacity"
              style={{ color: "var(--muted)" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Social Icons ── */

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.018 10.125 11.927v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796v8.437C19.612 23.09 24 18.098 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  }
  return icons[name] || null
}
