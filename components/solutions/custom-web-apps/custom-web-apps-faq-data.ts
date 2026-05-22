export type CustomWebAppsFaq = {
  q: string
  a: string
}

export const customWebAppsFaqs: CustomWebAppsFaq[] = [
  {
    q: "When should I build custom instead of buying software?",
    a: "Custom wins when (1) you're paying per-user fees on 50+ seats and the math flips vs. custom, (2) your workflow is genuinely unique and off-the-shelf tools create friction every day, (3) you want to productize your internal tool as a revenue stream, or (4) you need data sovereignty. If you're a 3-person team still figuring out your workflow, buy first.",
  },
  {
    q: "What does a custom web app cost?",
    a: "MVP builds typically run $15K–$45K depending on scope and integrations. Larger multi-role admin platforms with billing, auth, and custom dashboards range $60K–$150K+. We scope every project against a fixed deliverable list so there's no hourly-billing surprises.",
  },
  {
    q: "How long does it take?",
    a: "MVPs ship in 6–10 weeks. Larger builds are 3–5 months. We work in 2-week sprints with live previews every Friday — so you're never surprised by where the project is or what's been built.",
  },
  {
    q: "What tech stack do you build on?",
    a: "Next.js + React for the frontend, Postgres + Supabase (or Prisma) for the database, Stripe for billing, Clerk/Auth.js for auth, and Vercel for hosting. We only use modern, well-supported tools — nothing obscure that'll be hard to hire for in two years.",
  },
  {
    q: "Do I own the code?",
    a: "Yes, completely. Source code is delivered in your GitHub organization from day one. You can take it to another dev team anytime. We don't use proprietary frameworks or lock you into our maintenance.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing maintenance retainers (bug fixes, security patches, small enhancements) or hand-off packages where we document everything and your in-house or new dev team takes over. Either way, you're never stuck depending on us.",
  },
]
