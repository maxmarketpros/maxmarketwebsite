export type CalendarFaq = {
  q: string
  a: string
}

export const calendarFaqs: CalendarFaq[] = [
  {
    q: "Can clients book appointments 24/7 — even when we're closed?",
    a: "Yes, that's the whole point. Your booking widget is live on your website, your Google Business Profile, and your social links. Clients pick a time that works, get an instant confirmation text, and show up Monday morning — while you were asleep.",
  },
  {
    q: "Does it sync with our existing Google Calendar or Outlook?",
    a: "Two-way sync with Google Calendar, Outlook, iCloud, and Office 365. Block off personal events, sync multiple calendars per rep, and we'll never double-book. Time zones, recurring events, and all-day blocks work exactly like you'd expect.",
  },
  {
    q: "What about round-robin or team scheduling?",
    a: "Round-robin distribution across any number of reps, weighted availability, team-based services (e.g. a tech + a helper), and service-specific durations. You can also require specific reps for specific services.",
  },
  {
    q: "Can I take a deposit when someone books?",
    a: "Yes. Require full payment, a percentage deposit, or a flat no-show fee before the booking is confirmed. Processed through our integrated payments, deposited to your bank, and automatically refunded if the client cancels per your policy.",
  },
  {
    q: "Do clients get reminders so they actually show up?",
    a: "Automated SMS and email reminders go out at the intervals you choose (24h before, 2h before, anytime in between). No-shows drop 29% on average once you turn on reminders — and you can send custom follow-ups after every appointment too.",
  },
  {
    q: "Can I embed the booking widget on a third-party site?",
    a: "Yes. Drop a single `<script>` tag into your Webflow, WordPress, Wix, Squarespace, or custom site. Also works in emails as a direct booking link. For service-specific landing pages we can even brand it to match.",
  },
]
