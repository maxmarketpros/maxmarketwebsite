export type AIAgentsFaq = {
  q: string
  a: string
}

export const aiAgentsFaqs: AIAgentsFaq[] = [
  {
    q: "Will the AI agent sound like a real person?",
    a: "For text, yes — conversations read like a trained front-desk rep who knows your business cold. For voice, the AI uses natural-sounding voices that pass most customer interactions. And the whole thing is tuned to hand off to a human the moment a conversation gets complex or emotional.",
  },
  {
    q: "What if the AI doesn't know the answer?",
    a: "It admits it, takes a message, and either pings a rep instantly or books a callback on your calendar. No made-up answers, no hallucinations — we lock the AI to a knowledge base we build from your FAQs, service pages, pricing, and past conversations.",
  },
  {
    q: "Does it actually book appointments, or just chat?",
    a: "It books. The AI reads real availability from your connected calendar, asks the right qualifying questions, collects the customer's info, requires a deposit if you want one, and drops a confirmed booking on the calendar — all inside the same conversation.",
  },
  {
    q: "Where does the AI agent live?",
    a: "Wherever your customers already are: your website chat widget, text SMS, Facebook Messenger, Instagram DMs, Google Business Profile messages, and web-phone voice calls. One brain, every channel.",
  },
  {
    q: "How do I train it on my business specifics?",
    a: "We handle the heavy lift. You hand us your FAQs, pricing, service areas, and policies; we turn that into the agent's knowledge base. It takes 2–3 hours of collaborative review, then the agent is live.",
  },
  {
    q: "Can I control which questions the AI answers vs. escalates?",
    a: "Yes. You set the escalation rules — specific keywords, pricing beyond a threshold, emotional language, after-hours emergencies — and the AI hands off to your team or rings a specific rep's phone.",
  },
]
