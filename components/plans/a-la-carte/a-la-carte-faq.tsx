"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"

interface Faq {
  q: string
  a: string // may include HTML
}

const faqs: Faq[] = [
  {
    q: "Do I need a monthly plan to buy these?",
    a: 'Nope — anything in this menu can be purchased standalone. That said, our <a href="/plans/localmark" style="color:#22C55E;font-weight:600">LocalMark</a>, <a href="/plans/servicepro" style="color:#F59E0B;font-weight:600">ServicePro</a>, and <a href="/plans/signature" style="color:#EC4899;font-weight:600">Signature</a> plans bundle the most-requested combos at a discount, so once you stack a few items it almost always makes more sense to pick a plan.',
  },
  {
    q: 'What does "Included in Signature" mean?',
    a: 'Items marked <em>Included in Signature</em> ship free with the <a href="/plans/signature" style="color:#EC4899;font-weight:600">Signature plan</a>. If you select Signature in the calculator, those line items auto-check and drop to $0. You can still purchase them à la carte while on another tier.',
  },
  {
    q: 'Why are some services listed as "Custom quote"?',
    a: 'Things like Google Ads management, drone videography, quarterly PR, AI agents, and custom backlinks vary a lot by scope, niche, and goals. We don\'t want to lock you (or us) into the wrong number — we confirm scope on a <a href="/contact/schedule" style="color:#1677FF;font-weight:600">strategy call</a> before quoting.',
  },
  {
    q: "How do quantity-based items work?",
    a: "Graphic design packs are <strong>$100 per pack</strong> — each pack includes 4 graphics and 1 round of revisions. Short-form video packs are <strong>$400 per pack</strong> — each pack includes 4 one-minute videos edited for TikTok / Reels / YouTube Shorts. Zapier / API integrations are <strong>$250 per integration</strong>. Use the + / − controls to bump quantity.",
  },
  {
    q: "Is the estimate binding?",
    a: 'No. It\'s a planning tool — final pricing depends on business specifics, content, integrations, and location. We finalize the number on the <a href="/contact/schedule" style="color:#1677FF;font-weight:600">strategy call</a> after we understand your scope.',
  },
  {
    q: "What happens after I submit?",
    a: 'A strategist reviews your selections and either confirms the quote by email or follows up with a few clarifying questions — usually within one business day. You can also <a href="/contact/schedule" style="color:#1677FF;font-weight:600">book a call</a> directly if you want answers faster.',
  },
]

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "")
}

export function ALaCarteFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="a-la-carte-faq" aria-labelledby="a-la-carte-faq-heading" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="À la carte FAQ"
          heading={
            <span id="a-la-carte-faq-heading">
              Quick answers about{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">add-ons</span>.
              </span>
            </span>
          }
          paragraph="What's included, what's custom, and how the estimate becomes a real quote."
        />

        <div className="mt-10 max-w-[920px] mx-auto" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <ul
            className="divide-y rounded-[var(--radius-lg)] border overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              boxShadow: "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
            }}
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li key={faq.q} style={{ borderColor: "var(--border-color)" }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 sm:gap-5 px-5 sm:px-7 py-5 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
                  >
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform"
                      style={{
                        background: isOpen
                          ? "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)"
                          : "var(--accent-bg)",
                        color: isOpen ? "#fff" : "var(--accent)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.75} />
                    </span>
                    <span
                      className="flex-1 min-w-0 pt-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35]"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-5 sm:px-7 pb-6 pl-[68px] sm:pl-[88px] text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Still have questions?
            </span>
            <SecondaryButton asLink href="/contact/schedule">
              Talk to a strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ALaCarteFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
