export type DroneFaqCategory =
  | "Booking"
  | "FAA & Legal"
  | "Footage"
  | "Pricing"
  | "Delivery"

export type DroneFaq = {
  q: string
  a: string
  category: DroneFaqCategory
}

export const droneFaqCategories: ("All" | DroneFaqCategory)[] = [
  "All",
  "Booking",
  "FAA & Legal",
  "Footage",
  "Pricing",
  "Delivery",
]

export const droneFaqs: DroneFaq[] = [
  {
    category: "Booking",
    q: "How fast can you book a drone videography shoot?",
    a: "Most drone videography shoots are quoted within 24 hours and on the calendar within 72 hours — assuming the airspace is clear. Last-minute real estate listings can usually be flown the same week. Tell us the address and the deliverable and we'll send back a window the same day.",
  },
  {
    category: "Booking",
    q: "Do you travel for drone shoots?",
    a: 'Yes. Our home base is Orange County, CA — drone videography shoots within 60 miles include travel free. Beyond that we add a flat travel rate per mile and per overnight. We regularly fly real estate listings, weddings, and brand films across CA, AZ, NV, and TX.',
  },
  {
    category: "Booking",
    q: "What if the weather is bad on shoot day?",
    a: "We watch your shoot window for 7 days. If winds exceed 22 mph or rain hits the property in the scheduled hour, we reschedule one window back at no charge. Drones are not flown in unsafe conditions — that's how you lose a $7,000 cinema rig and your license.",
  },
  {
    category: "FAA & Legal",
    q: "Are your drone pilots FAA Part 107 certified?",
    a: "Every drone videography pilot on our roster carries an active FAA Part 107 Remote Pilot Certificate, current within the 24-month recurrent training requirement. We're happy to provide certificate numbers and proof of insurance ahead of any shoot — most commercial clients require it.",
  },
  {
    category: "FAA & Legal",
    q: "Do you handle controlled airspace and LAANC authorization?",
    a: "Yes. If your shoot is near an airport, military zone, or in restricted airspace, we file LAANC authorization for you (or a manual FAA waiver if the location requires it). Lead time is usually 24–72 hours. We do not fly without authorization, period.",
  },
  {
    category: "FAA & Legal",
    q: "Are your drones insured?",
    a: "Yes — every drone videography shoot is covered by $2M aviation liability insurance, plus hull coverage on the equipment. We can issue certificates of insurance to property owners, venues, or HOAs ahead of the shoot.",
  },
  {
    category: "Footage",
    q: "What resolution and frame rate do you shoot?",
    a: "Standard real estate drone videography is captured in 5.1K at 30fps with 10-bit color. Brand films and hospitality reels are shot in 5.1K or 8K at 60fps for slow-mo. Stills are shot in 24MP RAW. You receive both edited deliverables and full raw files.",
  },
  {
    category: "Footage",
    q: "Can I get aerial drone photography in addition to video?",
    a: 'Every drone videography package includes 8–15 high-resolution aerial photos at no extra charge — the kind of stills MLS, Zillow, and Google Business Profile will index. Need pure aerial photography only? See our <a href="/services/social-media/graphic-design" style="color:#0E7490;font-weight:600">creative production page</a> or just ask for a stills-only quote.',
  },
  {
    category: "Footage",
    q: "Will the drone footage work on Instagram Reels and YouTube Shorts?",
    a: 'Yes. We deliver three formats from every shoot: a 16:9 master cut, a 9:16 vertical Reel/Short, and a 1:1 square. If you also want full social media management, our <a href="/services/social-media/management" style="color:#0E7490;font-weight:600">social media team</a> can publish the cuts on a content calendar — and our <a href="/services/social-media/video-editing" style="color:#0E7490;font-weight:600">video editing team</a> can add captions, motion graphics, and music sync.',
  },
  {
    category: "Pricing",
    q: "How much does a drone videography shoot cost?",
    a: 'Real estate drone videography starts at a fixed flat rate per property and scales with shot complexity, edit length, and travel. Brand films, weddings, and multi-day commercial shoots are quoted custom. Most home-services and listing clients land between $400 and $1,800 per shoot. See our <a href="/#pricing" style="color:#0E7490;font-weight:600">plans &amp; pricing</a> for bundles or book a 15-minute call for an exact quote.',
  },
  {
    category: "Pricing",
    q: "Are there discounts for ongoing drone videography work?",
    a: "Yes. Construction progress captures, multi-listing real estate teams, and resort/hospitality brands get monthly retainer pricing — same fixed-window flights, predictable monthly invoice, faster turnaround. Tell us the volume on the strategy call and we'll quote a retainer.",
  },
  {
    category: "Delivery",
    q: "How fast do I get my edited drone footage back?",
    a: "Standard turnaround is 48 hours from the end of the shoot for a fully edited, color-graded, music-synced video. Rush 24-hour turnarounds are available on request for an added fee. Raw footage is delivered the same day if you need to edit yourself.",
  },
  {
    category: "Delivery",
    q: "How is the final drone footage delivered?",
    a: "We deliver via Frame.io review link with one round of revisions baked in, then final files (MP4 in three aspect ratios + raw 5.1K footage) go to your Google Drive, Dropbox, or WeTransfer. You own the footage outright — no licensing fees, no hidden re-use limits.",
  },
  {
    category: "Delivery",
    q: "Can I keep the raw drone footage for my own editor?",
    a: "Absolutely. Every drone videography package includes the raw 5.1K source files and full metadata. Plenty of clients use us for the flight + capture only and edit in-house. Just tell us up-front so we capture extra coverage for editing flexibility.",
  },
]
