import { SectionHeader } from "@/components/ui/section-header"
import { plans } from "@/lib/plans-data"
import { PlanCard } from "./plan-card"

export function PlansCards() {
  return (
    <section id="plans-cards" aria-labelledby="plans-cards-heading" className="relative">
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Choose your plan"
          heading={
            <span id="plans-cards-heading">
              Four plans, one obvious{" "}
              <span className="whitespace-nowrap">
                next <span className="accent-underline">move</span>.
              </span>
            </span>
          }
          paragraph="Every plan is fully managed in-house and built around the same goal: more booked jobs in your service area."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} />
          ))}
        </div>

        <p
          className="mt-10 text-center text-[14px]"
          style={{ color: "var(--muted)" }}
        >
          Need help deciding?{" "}
          <a
            href="#compare"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Compare every feature &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}
