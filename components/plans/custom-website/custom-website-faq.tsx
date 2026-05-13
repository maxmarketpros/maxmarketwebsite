"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"

const CW_BLUE = "#1677FF"

type Faq = { q: string; aText: string; a: React.ReactNode }

export const customWebsiteFaqs: Faq[] = [
  {
    q: "How long until my site is live?",
    aText:
      "2 weeks for a 5-page site, 3 weeks for an 11-page, 5 weeks for a 21-page, and 8 weeks for a 51-page build. You get a fixed launch date on the first call — no 'we'll see' timelines.",
    a: (
      <>
        2 weeks for a 5-page site, 3 weeks for an 11-page, 5 weeks for a
        21-page, and 8 weeks for a 51-page build. You get a fixed launch date on
        the first call &mdash; no &ldquo;we&rsquo;ll see&rdquo; timelines.
      </>
    ),
  },
  {
    q: "Do I have to learn anything technical?",
    aText:
      "Nope. We handle hosting, the domain, the tech, the updates — all of it. You get a phone number for changes; we make them. You run your business.",
    a: (
      <>
        Nope. We handle hosting, the domain, the tech, the updates &mdash; all
        of it. You get a phone number for changes; we make them. You run your
        business.
      </>
    ),
  },
  {
    q: "What if I want to change something later?",
    aText:
      "Text us or email. Most small changes (swap a photo, fix a typo, add a service) are quick. Bigger changes (a new section, a new page) get a quick quote. You're never locked out of your own site.",
    a: (
      <>
        Text us or email. Most small changes (swap a photo, fix a typo, add a
        service) are quick. Bigger changes get a quick quote. You&rsquo;re never
        locked out of your own site.
      </>
    ),
  },
  {
    q: "Do you handle hosting and the domain?",
    aText:
      "Yes. We set up hosting on your behalf, register a domain or migrate your existing one, set up SSL, and handle the DNS. You own the domain — we just make sure it works.",
    a: (
      <>
        Yes. We set up hosting on your behalf, register a domain or migrate your
        existing one, set up SSL, and handle the DNS. You own the domain
        &mdash; we just make sure it works.
      </>
    ),
  },
  {
    q: "What if my photos are bad or I don't have a logo?",
    aText:
      "We've got you. If your photos aren't great, we can use placeholder imagery, source stock that fits your brand, or coach you through a 30-minute phone photo shoot. No logo? We can design one on the larger tiers, or pair you with a designer.",
    a: (
      <>
        We&rsquo;ve got you. If your photos aren&rsquo;t great, we use
        placeholders, source stock that fits your brand, or coach you through a
        30-minute phone photo shoot. No logo? We can design one for you on the
        larger tiers.
      </>
    ),
  },
  {
    q: "Can you write the words on the pages for me?",
    aText:
      "Yes. We draft every page from your service expertise — we'll ask you the right questions on the strategy call. You review and approve before we build. You're never staring at a blank page.",
    a: (
      <>
        Yes. We draft every page from your service expertise &mdash; we ask the
        right questions on the strategy call. You review and approve before we
        build. You&rsquo;re never staring at a blank page.
      </>
    ),
  },
  {
    q: "Will my site show up on Google?",
    aText:
      "Yes. Every site is built with search in mind — every page is set up to be found by people in your area searching for what you offer. Want to climb higher and beat the big chains? Add ongoing local SEO to grow over time.",
    a: (
      <>
        Yes. Every site is built with search in mind &mdash; every page is set
        up to be found by people in your area searching for what you offer.
        Want to climb higher and beat the big chains?{" "}
        <a
          href="/services/seo"
          style={{ color: CW_BLUE, fontWeight: 600 }}
        >
          Add ongoing local SEO
        </a>{" "}
        to grow over time.
      </>
    ),
  },
  {
    q: "Can I add a monthly marketing plan later?",
    aText:
      "Absolutely — most clients do exactly that. Buy the site outright, then add a monthly plan when you're ready to grow with ads, social, reviews, and more.",
    a: (
      <>
        Absolutely &mdash; most clients do exactly that. Buy the site outright,
        then add a{" "}
        <a href="/plans" style={{ color: CW_BLUE, fontWeight: 600 }}>
          monthly marketing plan
        </a>{" "}
        when you&rsquo;re ready to grow with ads, social, reviews, and more.
      </>
    ),
  },
  {
    q: "What if my business grows and I need more pages?",
    aText:
      "Adding pages is easy. We can grow your site one page at a time, or do a bigger upgrade pass when you launch a new service or new location. You're never stuck.",
    a: (
      <>
        Adding pages is easy. We can grow your site one page at a time, or do a
        bigger upgrade pass when you launch a new service or new location.
        You&rsquo;re never stuck.
      </>
    ),
  },
  {
    q: "Do you build for my industry?",
    aText:
      "Probably yes. We've built sites for plumbers, HVAC, roofers, landscapers, electricians, painters, cleaners, and contractors of every flavor. If you're a local service business, we can build for you.",
    a: (
      <>
        Probably yes. We&rsquo;ve built sites for plumbers, HVAC, roofers,
        landscapers, electricians, painters, cleaners, and contractors of every
        flavor. If you&rsquo;re a local service business, we can build for you.{" "}
        <a
          href="/contact/schedule"
          style={{ color: CW_BLUE, fontWeight: 600 }}
        >
          Ask on a quick call
        </a>{" "}
        if you&rsquo;re not sure.
      </>
    ),
  },
]

export function CustomWebsiteFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="custom-website-faq"
      aria-labelledby="custom-website-faq-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Common questions"
          heading={
            <span id="custom-website-faq-heading">
              Real questions, real{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">answers</span>.
              </span>
            </span>
          }
          paragraph="The most common things we get asked before someone says yes to a custom website."
        />

        <div
          className="mt-12 max-w-[880px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {customWebsiteFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              const num = `Q${String(idx + 1).padStart(2, "0")}`
              return (
                <li
                  key={faq.q}
                  className="card-surface overflow-hidden"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
                  >
                    <span
                      className="shrink-0 inline-flex items-center justify-center px-2 py-1 rounded-md text-[11px] font-bold font-mono tracking-[0.05em]"
                      style={{
                        background: isOpen
                          ? `linear-gradient(180deg, #2B8AFF 0%, ${CW_BLUE} 100%)`
                          : "rgba(22,119,255,0.10)",
                        color: isOpen ? "#fff" : CW_BLUE,
                        minWidth: 36,
                      }}
                    >
                      {num}
                    </span>
                    <span
                      className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35] pt-0.5"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="shrink-0 w-5 h-5 mt-1 transition-transform duration-300"
                      strokeWidth={2.25}
                      style={{
                        color: isOpen ? CW_BLUE : "var(--muted)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="px-5 sm:px-6 pb-6 pl-[68px] sm:pl-[80px] text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Got a different question?
            </span>
            <SecondaryButton asLink href="/contact/schedule">
              Book a free call
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CustomWebsiteFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: customWebsiteFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
