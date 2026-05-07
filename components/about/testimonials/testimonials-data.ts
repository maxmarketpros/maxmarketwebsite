export type Testimonial = {
  slug: string
  name: string
  body: string
  weeksAgo: number
  reviewCount: number
  photoCount?: number
  isLocalGuide?: boolean
  industry?: string
  industryColor?: string
  teamMember?: string
  avatar:
    | { kind: "photo"; src: string }
    | { kind: "letter"; initial: string; bg: string; fg?: string }
}

export const REVIEW_RATING = 4.7
export const REVIEW_COUNT = 275
export const GOOGLE_PROFILE_URL = "https://share.google/XDNiRZc5tCK56ne5d"
export const WRITE_REVIEW_URL = "https://g.page/r/CTS89z6SUK5HEBM/review"

export const SPOTLIGHT: Testimonial = {
  slug: "tony-hloros",
  name: "Tony Peter Hloros",
  isLocalGuide: true,
  reviewCount: 20,
  photoCount: 8,
  weeksAgo: 26,
  industry: "Boxing & Entertainment",
  industryColor: "#F59E0B",
  teamMember: "Joseph & Lucas",
  avatar: { kind: "photo", src: "/testimonials/avatars/tony.jpg" },
  body:
    "I just want to say a very special thank you to Joseph and Lucas and the team. These guys have been amazing, patient, very professional and looking forward to working with them in the near future again to help elevate my businesses!! Again, I appreciate you guys very much. 5 stars isn't enough!!! — Tony H. Owner / Operator Spartan Gladiator Boxing LLC & DJ Tony Rome Entertainment LLC",
}

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "edwin-gonzalez",
    name: "Edwin Gonzalez",
    reviewCount: 3,
    photoCount: 1,
    weeksAgo: 21,
    industry: "Local SEO",
    industryColor: "#1677FF",
    teamMember: "Mostafa",
    avatar: { kind: "photo", src: "/testimonials/avatars/edwin.jpg" },
    body:
      "I am writing to express my sincere gratitude for Mr. Mostafa's guidance during our recent Zoom meeting. It is rare to find a company representative who prioritizes genuine education over immediately selling a program or subscription. I particularly appreciate his patience and the specific answers he provided, especially when I interrupted with questions regarding SEO. Thanks to his clear explanations, I now have a solid understanding of what an SEO search function is and how it operates correctly — as well as the competitive prices they offer.",
  },
  {
    slug: "nebras-gorgees",
    name: "Nebras Gorgees",
    reviewCount: 6,
    weeksAgo: 25,
    teamMember: "Mostafa",
    avatar: { kind: "letter", initial: "N", bg: "#4285F4" },
    body:
      "I've had an excellent experience with this marketing company! The team is creative, responsive, and always delivers high-quality work. A special thank you to my manager, Mostafa, for his professionalism, guidance, and dedication — he truly goes above and beyond. Highly recommend working with them!",
  },
  {
    slug: "dianna-garcia",
    name: "Dianna Garcia",
    reviewCount: 2,
    weeksAgo: 25,
    teamMember: "Lucas",
    avatar: { kind: "photo", src: "/testimonials/avatars/dianna.jpg" },
    body:
      "Max Market Pros are the BEST! Their attention to detail and commitment to customer satisfaction was remarkable! I felt heard and supported every step of the way. Their prompt communication and accessibility was exceptional. I highly recommend MaxMarketPros to anyone seeking top-notch service and a team that goes above and beyond. Thanks Lucas!",
  },
  {
    slug: "kimberly-cardenas",
    name: "Kimberly Cardenas",
    reviewCount: 1,
    weeksAgo: 32,
    industry: "Food Truck",
    industryColor: "#EF4444",
    avatar: { kind: "letter", initial: "K", bg: "#EA4335" },
    body:
      "I was skeptical, but Max Market Pros got my food truck noticed online fast. Their budget-friendly SEO and targeted ads brought in way more orders in weeks. Super easy to work with — they sent clear reports without any salesy fluff. Highly recommend for small biz owners!",
  },
  {
    slug: "hilda-d",
    name: "Hilda D.",
    reviewCount: 3,
    weeksAgo: 32,
    industry: "Yoga Studio",
    industryColor: "#A855F7",
    avatar: { kind: "photo", src: "/testimonials/avatars/hilda.jpg" },
    body:
      "My yoga studio was barely showing up online until Max Market Pros stepped in. Their simple SEO tweaks and social media posts drove more sign-ups in no time. They checked in regularly with straightforward updates, no pressure. Awesome team for small businesses looking to grow!",
  },
  {
    slug: "luis-vasquez",
    name: "Luis Vasquez",
    reviewCount: 7,
    photoCount: 2,
    weeksAgo: 32,
    industry: "Bookstore",
    industryColor: "#22C55E",
    avatar: { kind: "letter", initial: "L", bg: "#9C27B0" },
    body:
      "Max Market Pros helped my tiny bookstore pop online. Their SEO tweaks and clever social media ads brought in more customers in just a few weeks. They kept me in the loop with clear, no-pressure updates. A must for small businesses wanting to stand out!",
  },
  {
    slug: "chris-johnson",
    name: "Chris Johnson",
    reviewCount: 15,
    weeksAgo: 34,
    teamMember: "Myles",
    avatar: { kind: "photo", src: "/testimonials/avatars/chris.jpg" },
    body:
      "I worked with Max Market Pros to improve my website and online presence. My contact, Myles, was really helpful and kept me updated the whole time. I noticed more leads coming in within a few weeks, and they explained everything clearly. I would definitely reach out to them again if I need more help.",
  },
  {
    slug: "axel-duran",
    name: "Axel Duran",
    reviewCount: 4,
    weeksAgo: 35,
    industry: "Florist",
    industryColor: "#EC4899",
    avatar: { kind: "letter", initial: "A", bg: "#34A853" },
    body:
      "I came across Max Market Pros in a local business group and decided to give them a try for my florist shop's online promotion. They were really friendly, jumped right in, and put together some social media ads that brought in a ton of new orders. They even took the time to go over the results with me to make sure I was set!",
  },
  {
    slug: "jesus-paniagua",
    name: "Jesus Paniagua",
    reviewCount: 3,
    photoCount: 3,
    weeksAgo: 35,
    industry: "Gym",
    industryColor: "#F59E0B",
    avatar: { kind: "photo", src: "/testimonials/avatars/jesus.jpg" },
    body:
      "I heard about Max Market Pros from a neighbor and decided to try them for my gym's marketing. They were real easy to work with and set up some online ads that brought in a bunch of new members. I'm super happy with how things turned out and would tell anyone to give them a go. They even checked in later to make sure I was good with everything!",
  },
  {
    slug: "valerie",
    name: "Valerie",
    reviewCount: 1,
    weeksAgo: 35,
    avatar: { kind: "photo", src: "/testimonials/avatars/valerie.jpg" },
    body:
      "Max Market Pros provided excellent service from start to finish. The team was knowledgeable, responsive, and made the process stress-free. I could see improvements in my online presence quickly, and their support gave me confidence in my business growth. Definitely recommend them.",
  },
]
