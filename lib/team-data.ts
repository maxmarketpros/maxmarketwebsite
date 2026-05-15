export type Department =
  | "leadership"
  | "client-growth"
  | "web-development"
  | "business-development"

export interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string
  department: Department
}

export interface DepartmentMeta {
  id: Department
  pill: string
  heading: string
  headingAccent: string
  subtitle: string
  accent: string
  accentSoft: string
}

export const DEPARTMENTS: DepartmentMeta[] = [
  {
    id: "leadership",
    pill: "Leadership",
    heading: "The founders who run the floor.",
    headingAccent: "run the floor",
    subtitle:
      "Owner-operators, not figureheads. Joseph and Lawrence sign off on every Signature engagement before it kicks off — and they're in the office every morning the doors open.",
    accent: "#1677FF",
    accentSoft: "#74D3FF",
  },
  {
    id: "client-growth",
    pill: "Client Growth & Strategy",
    heading: "The operators behind every win.",
    headingAccent: "every win",
    subtitle:
      "The people who run your account day-to-day. Senior strategists and relationship leads who own outcomes, not just inboxes.",
    accent: "#0EA5E9",
    accentSoft: "#67E8F9",
  },
  {
    id: "web-development",
    pill: "Web Development",
    heading: "The engineers who ship your site.",
    headingAccent: "ship your site",
    subtitle:
      "Two in-house leads run every site we deliver — from Signature custom builds to LocalMark and ServicePro platform launches. No offshoring, no outsourcing, no junior handoffs.",
    accent: "#7C3AED",
    accentSoft: "#C4B5FD",
  },
  {
    id: "business-development",
    pill: "Business Development",
    heading: "The first conversation you'll have with us.",
    headingAccent: "first conversation",
    subtitle:
      "Our BD specialists don't pitch — they diagnose. The first call with Max Market Pros is a strategy session, not a sales script.",
    accent: "#16A34A",
    accentSoft: "#86EFAC",
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  // Leadership
  {
    slug: "joseph-stirling",
    name: "Joseph Stirling",
    role: "Co-Founder & Chief Executive Officer",
    bio: "Joseph co-founded Max Market Pros on March 19, 2020 and has spent the last five years scaling the firm into one of Orange County's most trusted full-stack marketing agencies. He sets the vision, owns every P&L decision, and personally signs off on every Signature engagement before it kicks off.",
    department: "leadership",
  },
  {
    slug: "lawrence-welsh",
    name: "Lawrence Welsh",
    role: "Co-Founder & Head of Social Media",
    bio: "Lawrence built our social media practice from a single Instagram account into a content engine that now powers organic reach for hundreds of client brands. If a Max Market Pros post stops a thumb mid-scroll, his playbook is the reason.",
    department: "leadership",
  },

  // Client Growth & Strategy
  {
    slug: "lucas-herman",
    name: "Lucas Herman",
    role: "Client Account Manager",
    bio: "Lucas runs day-to-day strategy for a portfolio of Max Market Pros' most demanding accounts. He's the operator clients reach for when a campaign needs to move from ‘performing’ to ‘best month they've ever had’ — and his accounts are the ones that quietly renew year after year.",
    department: "client-growth",
  },
  {
    slug: "brandon-lopez",
    name: "Brandon Lopez",
    role: "Client Account Manager",
    bio: "Brandon is the steady hand managing day-to-day execution for a roster of long-tenured Max Market Pros clients. He doesn't send status updates — he sends results, and his accounts know the difference.",
    department: "client-growth",
  },
  {
    slug: "mike-stirling",
    name: "Mike Stirling",
    role: "Client Relations Manager",
    bio: "Mike owns every client relationship from kickoff to long-term retention. He's personally onboarded hundreds of businesses since joining the firm and is most clients' first call when something needs to move fast.",
    department: "client-growth",
  },

  // Web Development
  {
    slug: "will-cruttenden",
    name: "Will Cruttenden",
    role: "Lead Web Developer, Signature Websites",
    bio: "Will leads the team behind our Signature Websites — the custom, conversion-tuned builds we ship for brands that need to win on first impression. He sets the bar every Signature engagement is held to, from first wireframe to launch day.",
    department: "web-development",
  },
  {
    slug: "hector-camacho",
    name: "Hector Camacho",
    role: "Lead Web Developer, LocalMark & ServicePro",
    bio: "Hector leads the team behind our LocalMark and ServicePro platforms — the workhorses that put hundreds of small businesses online with speed, SEO, and lead capture baked in from day one. Under his direction, the team ships finished sites faster than most agencies can scope them.",
    department: "web-development",
  },

  // Business Development
  {
    slug: "muzammil-ilbrahim",
    name: "Muzammil Ilbrahim",
    role: "Business Development Specialist",
    bio: "Muzammil is one of three BD specialists driving new growth for the firm. He's the first conversation most prospective clients have with Max Market Pros — and clients consistently tell us it's the reason they signed.",
    department: "business-development",
  },
  {
    slug: "myles-mendez",
    name: "Myles Mendez",
    role: "Business Development Specialist",
    bio: "Myles brings sharp consultative instincts to the BD floor. He doesn't pitch services — he diagnoses the bottleneck inside a business and prescribes the play that fixes it.",
    department: "business-development",
  },
  {
    slug: "moustafa-ramzy",
    name: "Moustafa Ramzy",
    role: "Business Development Specialist",
    bio: "Moustafa specializes in identifying the unique growth lever inside each business and matching them to the right Max Market Pros playbook before the engagement even begins.",
    department: "business-development",
  },
]

export function getMembersByDepartment(
  department: Department
): TeamMember[] {
  return TEAM_MEMBERS.filter((m) => m.department === department)
}

export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("")
}
