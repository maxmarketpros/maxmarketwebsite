export type DocSigningFaq = {
  q: string
  a: string
}

export const docSigningFaqs: DocSigningFaq[] = [
  {
    q: "Are electronic signatures actually legally binding?",
    a: "Yes — e-signatures are legally binding under ESIGN (US federal), UETA (US state), and eIDAS (EU). Every signed document includes a tamper-evident audit trail: IP address, timestamp, user agent, signer identity, and a unique document hash. These records hold up in court the same as pen-and-paper signatures.",
  },
  {
    q: "Can I send the same contract to multiple signers?",
    a: "Yes. Sequential signing (client signs, then partner, then you), parallel signing (everyone signs in any order), and custom signer order. Each signer gets their own reminder cadence, and you see exactly where the document is stuck.",
  },
  {
    q: "What if a client says they didn't sign it?",
    a: "The audit trail proves otherwise. We capture their IP, device fingerprint, timestamp, and the exact document hash at the moment of signing — all tied to their verified email or phone number. Disputes become a non-issue.",
  },
  {
    q: "Can I reuse templates for common contracts?",
    a: "Yes. Service agreements, proposals, change orders, NDAs, and any custom doc you send repeatedly become a one-click template — with dynamic fields that auto-populate from the contact record (name, address, scope, price, dates).",
  },
  {
    q: "Does it work on mobile?",
    a: "Built mobile-first. Customers can tap a link in their text or email, scroll through the doc, and sign with their finger (or Apple Pencil, or trackpad) — no app download. 72% of signatures come from mobile devices.",
  },
  {
    q: "Can I require a payment or deposit with the signature?",
    a: "Yes. Attach a payment step to any document — deposit, full payment, or scheduled installment plan. The signature and the payment both clear before the document is considered fully executed. Closes loopholes and cuts no-pay jobs dramatically.",
  },
]
