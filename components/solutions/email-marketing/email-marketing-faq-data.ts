export type EmailMarketingFaq = {
  q: string
  a: string
}

export const emailMarketingFaqs: EmailMarketingFaq[] = [
  {
    q: "What's the difference between a broadcast and a drip sequence?",
    a: "A broadcast goes out to your list once — think newsletters or seasonal promos. A drip sequence fires automatically based on triggers (someone fills a form, becomes a customer, abandons a quote) and sends the right email at the right time. Drip campaigns drive 320% more revenue than broadcasts because the messaging is relevant to where the person is in your funnel.",
  },
  {
    q: "How do I stop our emails from hitting spam?",
    a: "Deliverability is part of the setup. We handle SPF, DKIM, and DMARC records, warm up your sending domain, monitor inbox placement across Gmail and Outlook, and clean your list of bounces automatically. Our average inbox-placement rate is 96%+.",
  },
  {
    q: "Can I personalize emails beyond just first names?",
    a: "Yes. Merge fields for any data on the contact (service type, city, last job date, deal size), plus conditional content blocks — so a customer who had a $10K job gets different messaging than a $300 job. All data flows straight from the CRM with zero manual lift.",
  },
  {
    q: "Do you build the email templates or do we?",
    a: "Either way. Most clients hand us their brand assets and we build a reusable template library for them (welcome series, quote follow-up, seasonal, re-engagement, review request). If you prefer DIY, the drag-and-drop email builder is beginner-friendly with zero HTML required.",
  },
  {
    q: "What about text message (SMS) marketing?",
    a: "SMS is baked into the same platform — you can trigger a text and an email from the same workflow, see them in the same inbox, and pay for them under one plan. Most service businesses run SMS for time-sensitive messages (reminders, promos) and email for long-form nurture.",
  },
  {
    q: "How do I measure whether it's working?",
    a: "Every campaign shows open rate, click rate, reply rate, unsubscribes, and — most importantly — revenue attributed. Because email is connected to your CRM, we can tell you exactly which email closed which deal.",
  },
]
