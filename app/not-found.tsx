import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Home, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "We couldn't find the page you were looking for. Head back home or get in touch with the Max Market Pros team.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(22,119,255,0.08),transparent_60%)]"
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1677FF]">
          404 — Page not found
        </p>
        <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight text-[#0B132B] sm:text-6xl">
          We can&rsquo;t find that page.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-8 text-slate-600">
          The link may be broken, the page may have moved, or it never existed.
          Try one of the destinations below — or reach out and we&rsquo;ll point
          you the right direction.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1677FF] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#0D5FD9] sm:w-auto"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-[#0B132B] transition hover:border-[#1677FF] hover:text-[#1677FF] sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Get in touch
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {[
            { href: "/services", label: "All services" },
            { href: "/industries", label: "Industries we serve" },
            { href: "/plans", label: "Plans & pricing" },
            { href: "/resources/blog", label: "Latest from the blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-[#0B132B] transition hover:border-[#1677FF] hover:bg-slate-50"
            >
              <span>{link.label}</span>
              <ArrowRight
                className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#1677FF]"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
