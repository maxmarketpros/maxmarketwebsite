export type TaskMgmtFaq = {
  q: string
  a: string
}

export const taskMgmtFaqs: TaskMgmtFaq[] = [
  {
    q: "What counts as an 'automation' in this system?",
    a: "Any repetitive workflow: when X happens, do Y. Examples — a missed call triggers an auto text-back, a quote sent triggers a 3-email follow-up sequence, a payment received triggers a thank-you SMS + review request, a new lead triggers a Slack ping to the right rep. The library has 50+ pre-built triggers plus custom webhook support.",
  },
  {
    q: "Do I have to be technical to build these?",
    a: "No. The workflow builder is drag-and-drop with plain-English triggers and actions. We also set up the first 3–5 automations for you during onboarding, based on your actual business flow.",
  },
  {
    q: "Can automations include both internal and external actions?",
    a: "Yes. 'External' actions talk to the customer (email, SMS, invoice, booking reminder). 'Internal' actions happen on your team's side (create a task, assign to a rep, update pipeline stage, ping a Slack channel). Most real workflows mix both — e.g. quote sent → email client AND assign a 3-day follow-up task to the rep.",
  },
  {
    q: "What integrates with the automation engine?",
    a: "Native: Google Calendar, Outlook, Stripe, Gmail, Facebook Lead Ads, Google Lead Forms, Twilio SMS, Slack. Via Zapier/Make: 6,000+ tools. Via webhooks: anything with an API. Custom integrations available on request.",
  },
  {
    q: "Can I put approval steps in a workflow?",
    a: "Yes. Require a manager to approve before a quote over $X goes out, before a refund processes, or before a marketing email sends. Approvals happen in-app or by SMS/email one-click approve.",
  },
  {
    q: "How do I know the automations are actually working?",
    a: "Every workflow has an execution log — what fired, when, who it affected, and whether it succeeded. Plus a dashboard that shows the aggregate: how many missed-call text-backs sent this month, how many tasks auto-assigned, how many hours the team saved.",
  },
]
