export interface Role {
  slug: string
  title: string
  summary: string
  iconId: string
  doBullets: string[]
  lookFor: string[]
}

export const ROLES: Role[] = [
  {
    slug: "sales-account-executive",
    title: "Sales / Account Executive",
    summary: "Help local business owners choose the right growth plan.",
    iconId: "TPAsV6Sqk7pu",
    doBullets: [
      "Run discovery calls with inbound leads from our SEO and paid funnels",
      "Walk owners through plan options and close on a 30-day kickoff",
      "Hand off cleanly to the strategy and delivery team",
    ],
    lookFor: [
      "1+ year selling services, agency, or local SaaS",
      "Comfortable with $1K–$10K monthly conversations",
      "In office in Irvine, five days a week",
    ],
  },
  {
    slug: "web-designer-developer",
    title: "Web Designer + Developer",
    summary: "Build custom websites that book real jobs for service businesses.",
    iconId: "114334",
    doBullets: [
      "Design and ship Webflow and Next.js sites for service businesses",
      "Own a build end-to-end — wireframe, design, copy direction, launch",
      "Keep Lighthouse scores above 95 and ship clean, schema-rich pages",
    ],
    lookFor: [
      "Portfolio with 5+ shipped marketing sites",
      "Strong on Webflow, Figma, and modern responsive layout",
      "Bonus: Next.js, Tailwind, headless CMS experience",
    ],
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    summary: "Run social for service-business clients — strategy to posting.",
    iconId: "G0Qd3Sb6FPqB",
    doBullets: [
      "Own monthly content calendars for 8–12 local clients",
      "Write captions, plan shoots, post across IG, FB, TikTok, LinkedIn",
      "Pull weekly insights and shape next month's plan around them",
    ],
    lookFor: [
      "1+ year managing social for businesses (not personal accounts)",
      "Sharp writer with a feel for short-form copy and hooks",
      "Comfortable on camera and coordinating filming days",
    ],
  },
  {
    slug: "video-editor",
    title: "Video Editor / Videographer",
    summary: "Shoot and cut short-form video that wins attention for clients.",
    iconId: "19596",
    doBullets: [
      "Shoot on-location with clients (Orange County and LA radius)",
      "Edit short-form for IG Reels, TikTok, YouTube Shorts in Premiere or CapCut",
      "Develop video templates and motion systems we can scale",
    ],
    lookFor: [
      "Reel of recent short-form work — branded, not personal",
      "Fluent in Premiere or CapCut, plus solid color and audio basics",
      "Own a usable camera kit — we provide additional gear",
    ],
  },
  {
    slug: "seo-specialist",
    title: "SEO Specialist",
    summary: "Drive rankings, local map pack wins, and qualified organic leads.",
    iconId: "QNjsAGAlpuNW",
    doBullets: [
      "Run on-page, technical, local, and AI-search SEO for client accounts",
      "Audit sites, fix the technical floor, and plan content calendars",
      "Report wins in plain English — calls, leads, rankings, share of voice",
    ],
    lookFor: [
      "2+ years doing SEO for real businesses, not just side projects",
      "Comfort with Search Console, GA4, GBP, and an audit toolkit",
      "Solid writer who can brief content and edit it to rank",
    ],
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    summary: "Brand systems, ad creative, social, and print for our clients.",
    iconId: "13369",
    doBullets: [
      "Design logos, brand kits, and ongoing social and ad creative",
      "Pair with our web team on landing page direction and assets",
      "Maintain client brand guidelines and asset libraries",
    ],
    lookFor: [
      "Portfolio with brand, social, and ad work for real clients",
      "Strong on Figma plus Illustrator and Photoshop fluency",
      "Range — clean B2B to bold local service brands",
    ],
  },
  {
    slug: "paid-ads-specialist",
    title: "Paid Ads Specialist",
    summary: "Run Google and Meta ads that bring booked jobs, not vanity clicks.",
    iconId: "DJWvJRSGysWS",
    doBullets: [
      "Build, launch, and optimize Google and Meta campaigns end-to-end",
      "Own tracking — conversion API, GTM, offline conversions where it counts",
      "Brief creative for the design and video teams when ads need fresh fuel",
    ],
    lookFor: [
      "2+ years managing $10K+/month in Google or Meta spend",
      "Comfortable across local services, e-com, and lead-gen accounts",
      "Google Ads cert preferred — strong opinions about CPL, even better",
    ],
  },
  {
    slug: "account-manager",
    title: "Account Manager",
    summary: "Be the trusted face of Max Market Pros for our retained clients.",
    iconId: "13540",
    doBullets: [
      "Own the relationship for 12–18 retained clients across plans",
      "Run monthly reviews, set priorities, and translate strategy into action",
      "Coordinate across SEO, ads, web, social, and video to deliver on time",
    ],
    lookFor: [
      "1+ year in client services, agency AM, or customer success",
      "Calm under pressure, organized, allergic to dropped balls",
      "Genuine interest in local businesses and how they actually make money",
    ],
  },
]

export interface Tool {
  domain: string
  name: string
  iconId?: string
}

export const TOOLS: Tool[] = [
  { domain: "webflow.com", name: "Webflow" },
  { domain: "figma.com", name: "Figma" },
  { domain: "nextjs.org", name: "Next.js" },
  { domain: "adobe.com", name: "Adobe Premiere" },
  { domain: "capcut.com", name: "CapCut" },
  { domain: "ads.google.com", name: "Google Ads" },
  { domain: "business.facebook.com", name: "Meta Ads" },
  { domain: "search.google.com", name: "Search Console" },
  { domain: "ahrefs.com", name: "Ahrefs" },
  { domain: "notion.so", name: "Notion" },
  { domain: "slack.com", name: "Slack" },
  { domain: "openai.com", name: "ChatGPT" },
]

export interface Perk {
  iconId: string
  title: string
  body: string
}

export const PERKS: Perk[] = [
  {
    iconId: "13246",
    title: "Office in Irvine, CA",
    body: "In-person, five days a week. No remote — we believe great teams are built side by side.",
  },
  {
    iconId: "mBzT9ySeO_go",
    title: "Real mentorship",
    body: "Sit next to senior strategists, designers, and operators who've actually shipped.",
  },
  {
    iconId: "13138",
    title: "Equipment provided",
    body: "Workstation, monitor, peripherals, and the tooling you need to do the job well.",
  },
  {
    iconId: "O713QAUVtMnH",
    title: "Career path mapped",
    body: "Quarterly reviews, clear next-step roles, and ownership of meaningful work day one.",
  },
  {
    iconId: "12867",
    title: "Team lunches",
    body: "Weekly team lunch on us. Small thing — but the kind of small thing teams remember.",
  },
  {
    iconId: "JizgObtyfWS2",
    title: "Work that ships",
    body: "Client work, in market, this quarter. No theater, no decks for the sake of decks.",
  },
]
