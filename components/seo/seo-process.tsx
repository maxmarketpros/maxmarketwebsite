import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Search,
  ClipboardList,
  FileEdit,
  Link2,
  LineChart,
} from "lucide-react"

const steps = [
  {
    Icon: Search,
    title: "Audit",
    description:
      "Deep-dive analysis of your site, competitors, and target keywords to spot exactly what's holding you back.",
  },
  {
    Icon: ClipboardList,
    title: "Strategy",
    description:
      "Custom SEO roadmap: priority keywords, page-by-page action plan, and a 90-day ranking forecast.",
  },
  {
    Icon: FileEdit,
    title: "On-Page",
    description:
      "We rewrite, restructure, and optimize every page for search intent — plus technical fixes that unlock rankings.",
  },
  {
    Icon: Link2,
    title: "Authority",
    description:
      "Build citations, earn backlinks, and grow brand mentions that signal trust to Google and AI engines.",
  },
  {
    Icon: LineChart,
    title: "Report & Iterate",
    description:
      "Transparent monthly reports showing rankings, traffic, leads, and the next 30 days of work.",
  },
]

export function SeoProcess() {
  return (
    <section aria-labelledby="seo-process-heading" className="relative">
      <div className="section-container section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-16 items-start">
          <div>
            <SectionHeader
              pill="How We Rank You"
              centered={false}
              heading={
                <span id="seo-process-heading">
                  A proven{" "}
                  <span className="accent-underline">5-step process</span> to
                  page <span className="whitespace-nowrap">one.</span>
                </span>
              }
              paragraph="No mystery. No black-box tactics. Every month we tell you exactly what we're working on and how it moves your rankings."
            />

            <div className="mt-12 relative">
              {/* Connector line — desktop */}
              <div
                aria-hidden
                className="hidden md:block absolute left-[26px] top-6 bottom-6 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--accent) 0%, var(--cyan) 100%)",
                  opacity: 0.25,
                }}
              />

              <ol className="space-y-6 md:space-y-7">
                {steps.map((step, idx) => (
                  <li key={step.title} className="flex gap-5 md:gap-6 relative">
                    {/* Numbered icon */}
                    <div className="shrink-0">
                      <div
                        className="w-[54px] h-[54px] rounded-full flex items-center justify-center relative z-10"
                        style={{
                          background:
                            "linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)",
                          boxShadow:
                            "0 1px 2px rgba(17,35,68,0.1), 0 8px 20px rgba(22,119,255,0.25)",
                        }}
                      >
                        <step.Icon
                          className="w-5 h-5 text-white"
                          strokeWidth={2.25}
                        />
                      </div>
                      <div
                        className="mt-2 text-center text-[12px] font-semibold uppercase tracking-[0.1em]"
                        style={{ color: "var(--muted)" }}
                      >
                        Step {idx + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3
                        className="text-[20px] sm:text-[22px] font-bold tracking-[-0.01em]"
                        style={{ color: "var(--ink)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-2 text-[15.5px] leading-[1.6] max-w-[560px]"
                        style={{ color: "var(--muted)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10">
              <SecondaryButton asLink href="#contact">
                See if we're a fit for your business
              </SecondaryButton>
            </div>
          </div>

          {/* Illustration card — sticky on desktop */}
          <aside className="lg:sticky lg:top-24 hidden md:block">
            <div
              className="card-surface relative overflow-hidden p-8"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(22,119,255,0.10) 0%, transparent 70%)",
                }}
              />
              <div className="relative flex flex-col items-center text-center">
                <img
                  src={icons8Url("107441", 256)}
                  alt="SEO audit clipboard illustration"
                  width={160}
                  height={160}
                  className="w-[140px] h-[140px] object-contain"
                />
                <div
                  className="mt-4 text-[12.5px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: "var(--accent)" }}
                >
                  Starts with
                </div>
                <div
                  className="mt-1 text-[20px] font-bold tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  A free SEO audit
                </div>
                <p
                  className="mt-2 text-[14px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  We analyze your site, top 3 competitors, and local market —
                  then show you exactly what's broken and how to fix it.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
