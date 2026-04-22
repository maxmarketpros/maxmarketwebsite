export type PaymentsFaq = {
  q: string
  a: string
}

export const paymentsFaqs: PaymentsFaq[] = [
  {
    q: "What payment methods can customers use?",
    a: "Every major credit card (Visa, Mastercard, Amex, Discover), Apple Pay, Google Pay, ACH/bank transfer, and manual check recording. Processing runs on Stripe rails, so rates are industry-standard 2.9% + $0.30 per transaction with no hidden add-ons.",
  },
  {
    q: "How does text-to-pay work?",
    a: "You send an invoice, the customer gets a branded text message with a 'Pay Now' link, they tap it, enter their card (or use Apple Pay), and the payment is deposited to your bank in 1–2 business days. No app to download, no login required. It's 59% faster than mailing a paper invoice.",
  },
  {
    q: "Can I set up recurring billing or payment plans?",
    a: "Yes. Monthly retainers, service contracts, equipment leases, payment plans on larger jobs — all automated. Customer's card is stored securely (PCI compliant), retries fail automatically, and customers get notified before each charge.",
  },
  {
    q: "How fast do I get the money in my bank account?",
    a: "Standard deposits are 1–2 business days via Stripe's ACH rails. Instant deposits (for a small fee) push funds to your bank in minutes. For high-volume accounts, we can set up daily or weekly batch schedules.",
  },
  {
    q: "Can I require a deposit before work starts?",
    a: "Yes. Attach a deposit requirement to any invoice, estimate, or booking — full amount, percentage, or flat deposit. Work only proceeds once the deposit clears. Cuts no-pay jobs dramatically.",
  },
  {
    q: "What about pricing — are there markups on Stripe fees?",
    a: "Zero markup. You pay Stripe's published rates directly; we don't charge per-transaction fees on top. The platform itself is billed as a flat monthly subscription through your plan.",
  },
]
