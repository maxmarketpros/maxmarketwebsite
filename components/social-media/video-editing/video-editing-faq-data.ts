export type VideoEditingFaqCategory =
  | "Turnaround"
  | "Files & Formats"
  | "Revisions"
  | "Pricing"
  | "Quality"

export type VideoEditingFaq = {
  q: string
  a: string
  category: VideoEditingFaqCategory
}

export const videoEditingFaqCategories: ("All" | VideoEditingFaqCategory)[] = [
  "All",
  "Turnaround",
  "Files & Formats",
  "Revisions",
  "Pricing",
  "Quality",
]

export const videoEditingFaqs: VideoEditingFaq[] = [
  {
    category: "Turnaround",
    q: "How fast is your video editing turnaround?",
    a: "Median delivery on short-form video editing is under 48 hours from upload to first cut. Long-form YouTube editing runs 4–7 days. Rush 24-hour video editing is available for ad cuts and time-sensitive Reels at a small upcharge.",
  },
  {
    category: "Turnaround",
    q: "What does the video editing workflow look like from upload to delivery?",
    a: "Upload raw footage to Frame.io or Dropbox → editor logs selects in 4 hours → V1 cut delivered within 24 hours with timestamped review link → revision pass + caption SRT + thumbnail at hour 36 → master file and platform-native exports delivered to Drive at hour 48.",
  },
  {
    category: "Turnaround",
    q: "Can you edit Reels, TikToks, and YouTube Shorts in one package?",
    a: 'Yes — every monthly video editing plan covers vertical short-form across Instagram Reels, TikTok, YouTube Shorts, and Facebook Reels. Long-form YouTube and ad cuts are add-ons. See <a href="/services/social-media/tiktok" style="color:var(--accent);font-weight:600">TikTok marketing</a> and <a href="/services/social-media/youtube" style="color:var(--accent);font-weight:600">YouTube growth</a> if you want strategy + posting bundled with the video editing.',
  },
  {
    category: "Files & Formats",
    q: "What file formats do you deliver after video editing?",
    a: "Master ProRes 422 (.mov) plus platform-native H.264 exports (.mp4) at every aspect ratio you need — 9:16 vertical, 1:1 square, 4:5 feed, 16:9 horizontal, plus 6/15/30s ad cutdowns. SRT caption files ship with every video.",
  },
  {
    category: "Files & Formats",
    q: "Do you provide captions and SRT files?",
    a: "Every short-form video edit ships with burned-in captions tuned for each platform's safe zone and an editable SRT file for YouTube/Vimeo upload. Long-form YouTube editing includes both SRT and YouTube-formatted chapters.",
  },
  {
    category: "Files & Formats",
    q: "Who owns the source files and project files after editing?",
    a: "You do. Premiere Pro / Final Cut / DaVinci project files, source footage, music licenses, motion graphic templates, and exported masters are delivered to your Drive at the end of every project. Switch agencies tomorrow and your video editing assets travel with you.",
  },
  {
    category: "Revisions",
    q: "Do you offer unlimited revisions on video edits?",
    a: "Yes — unlimited revisions during the active project window. We use Frame.io timestamped comments so feedback is fast and unambiguous. Most short-form video edits land in 1–2 revision rounds; long-form averages 2–3.",
  },
  {
    category: "Revisions",
    q: "What if I need a re-edit weeks after delivery?",
    a: "Revisions inside the active project window are unlimited. Pulling a project back open after final delivery counts against next month's edit volume — but it's never billed extra as a one-off.",
  },
  {
    category: "Pricing",
    q: "How does pricing work for monthly video editing?",
    a: 'Monthly video editing plans are priced by output volume — typically 8, 16, or 32 short-form video edits per month, with optional add-ons for long-form YouTube editing and ad cutdowns. See <a href="/#pricing" style="color:var(--accent);font-weight:600">plans &amp; pricing</a> or book a strategy call for a custom quote in 24 hours.',
  },
  {
    category: "Pricing",
    q: "Can I just buy ad-cut video editing without organic content?",
    a: 'Absolutely. Ad-only video editing packages cover hook tests, 6/15/30s cutdowns, and platform-tuned exports for Meta, TikTok, and YouTube ads. Pairs naturally with our <a href="/services/paid-ads" style="color:var(--accent);font-weight:600">paid ads team</a> if you want the creative and the media buy under one roof.',
  },
  {
    category: "Pricing",
    q: "What's included vs charged separately — stock footage, music licensing?",
    a: "Standard music licensing (Artlist, Musicbed, Epidemic), stock footage clips, sound-design libraries, and motion graphic templates are all included in the monthly video editing fee. Custom-scored music or talent-licensed tracks are passed through at cost.",
  },
  {
    category: "Quality",
    q: "Can you match our brand kit and editing style?",
    a: "Yes. Onboarding includes a brand-style call where we lock fonts, color treatment, motion graphic templates, transition language, sound design, and pacing references. Every subsequent video edit follows that style guide so your feed looks like one brand, not ten freelancers.",
  },
  {
    category: "Quality",
    q: "Do you handle vertical video for service businesses?",
    a: "Vertical short-form video editing is most of what we do — HVAC ride-alongs, contractor jobsite walkthroughs, restaurant chef demos, med-spa procedure recaps. We know the hooks, B-roll cadence, and CTA timing that convert for service-business audiences.",
  },
  {
    category: "Quality",
    q: "What software do your editors use?",
    a: "Adobe Premiere Pro is our master timeline. After Effects for motion graphics and lower-thirds. DaVinci Resolve for color grading and sound mix. Final Cut Pro for FCPX-native delivery. CapCut Pro for TikTok-native edits. Frame.io for client review. Descript for AI-driven transcript editing.",
  },
  {
    category: "Quality",
    q: "Do you do long-form YouTube editing too?",
    a: "Yes — full long-form YouTube editing including jump cuts, B-roll layering, music ducking, motion graphics, chapters, end-screens, and click-optimized thumbnails. Most service-business YouTube channels we edit average 3–10 minute videos.",
  },
]
