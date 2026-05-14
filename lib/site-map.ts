import type { LucideIcon } from "lucide-react"
import {
  BookOpen,
  Users,
  Trophy,
  Briefcase,
  ClipboardList,
  MessageSquare,
  Handshake,
  Search,
  MapPin,
  FileText,
  Link2,
  Bot,
  Globe,
  Palette,
  Code,
  Layout,
  PenTool,
  Smartphone,
  Share2,
  Star,
  Image,
  Video,
  Music2,
  Play,
  Plane,
  BarChart3,
  DollarSign,
  Facebook,
  Instagram,
  Wrench,
  CreditCard,
  FileSignature,
  UserPlus,
  Mail,
  Calendar,
  ListTodo,
  LineChart,
  QrCode,
  AppWindow,
  Tag,
  Zap,
  Rocket,
  Crown,
  Megaphone,
  ShoppingCart,
  Monitor,
  Building2,
  Home,
  HardHat,
  Stethoscope,
  Car,
  UtensilsCrossed,
  Store,
  BookMarked,
  Calculator,
  HelpCircle,
  Phone,
  HeadphonesIcon,
  LogIn,
  ChevronRight,
} from "lucide-react"

/* ── Types ── */
export interface NavChild {
  label: string
  href: string
  description?: string
  icon: LucideIcon
  lander?: string            // optional lander subtitle
}

export interface NavSection {
  label: string
  href: string
  icon: LucideIcon
  children?: NavChild[]
}

export interface NavCategory {
  label: string
  href: string
  icon: LucideIcon
  sections?: NavSection[]    // used by Services (nested groups)
  children?: NavChild[]      // used by flat categories
}

/* ── Site Map Data ── */

export const about: NavCategory = {
  label: "About",
  href: "/about",
  icon: BookOpen,
  children: [
    { label: "Our Story", href: "/about/our-story", icon: BookOpen, description: "How Max Market Pros started" },
    { label: "Meet The Team", href: "/about/team", icon: Users, description: "The people behind the results" },
    { label: "Careers", href: "/about/careers", icon: Briefcase, description: "Join our growing team" },
    { label: "Our Practices", href: "/about/practices", icon: ClipboardList, description: "How we work and deliver" },
    { label: "Testimonials", href: "/about/testimonials", icon: MessageSquare, description: "What our clients say" },
    { label: "Our Partners", href: "/about/partners", icon: Handshake, description: "Technology & agency partners" },
  ],
}

export const services: NavCategory = {
  label: "Services",
  href: "/services",
  icon: Wrench,
  sections: [
    {
      label: "SEO",
      href: "/services/seo",
      icon: Search,
      children: [
        { label: "Local SEO", href: "/services/seo/local", icon: MapPin, description: "Dominate your local market" },
        { label: "On-Page SEO", href: "/services/seo/on-page", icon: FileText, description: "Optimize every page" },
        { label: "Off-Page SEO", href: "/services/seo/off-page", icon: Link2, description: "Build authority & backlinks" },
        { label: "Technical SEO", href: "/services/seo/technical", icon: Code, description: "Site speed, crawlability & more" },
        { label: "Press Releases", href: "/services/seo/press-releases", icon: Megaphone, description: "Get featured in the news" },
        { label: "Backlinks & Directories", href: "/services/seo/backlinks", icon: Link2, description: "Citations & directory listings" },
        { label: "AI Search Visibility", href: "/services/seo/ai-search", icon: Bot, description: "Be found by AI assistants" },
      ],
    },
    {
      label: "Web Design",
      href: "/services/web-design",
      icon: Palette,
      children: [
        { label: "Webflow Websites", href: "/services/web-design/webflow", icon: Layout, description: "Beautiful no-code sites" },
        { label: "WordPress Websites", href: "/services/web-design/wordpress", icon: Globe, description: "Business WordPress support", lander: "WordPress Support for Business" },
        { label: "Squarespace Websites", href: "/services/web-design/squarespace", icon: PenTool, description: "Polished Squarespace sites" },
        { label: "GoDaddy Websites", href: "/services/web-design/godaddy", icon: Globe, description: "Personalized GoDaddy support", lander: "Personalized GoDaddy Website Support" },
        { label: "Wix Websites", href: "/services/web-design/wix", icon: Smartphone, description: "Wix partner web guidance", lander: "Wix Partner Support!" },
        { label: "Custom Designed", href: "/services/web-design/custom-designed", icon: Palette, description: "Tailored designs from scratch" },
        { label: "Custom Coded", href: "/services/web-design/custom-coded", icon: Code, description: "Fully bespoke coded websites" },
      ],
    },
    {
      label: "Social Media",
      href: "/services/social-media",
      icon: Share2,
      children: [
        { label: "Social Media Management", href: "/services/social-media/management", icon: Share2, description: "Full-service social management" },
        { label: "Review Generation", href: "/services/social-media/review-generation", icon: Star, description: "Get more 5-star reviews" },
        { label: "Graphic Design", href: "/services/social-media/graphic-design", icon: Image, description: "Scroll-stopping visuals" },
        { label: "Video Editing", href: "/services/social-media/video-editing", icon: Video, description: "Professional video content" },
        { label: "TikTok Marketing", href: "/services/social-media/tiktok", icon: Music2, description: "Short-form video strategy" },
        { label: "YouTube Marketing", href: "/services/social-media/youtube", icon: Play, description: "Grow your YouTube channel" },
        { label: "Drone Videography", href: "/services/social-media/drone", icon: Plane, description: "Aerial video for your brand" },
      ],
    },
    {
      label: "Paid Ads",
      href: "/services/paid-ads",
      icon: BarChart3,
      children: [
        { label: "Google Ads", href: "/services/paid-ads/google-ads", icon: DollarSign, description: "Search & display campaigns" },
        { label: "Facebook Ads", href: "/services/paid-ads/facebook-ads", icon: Facebook, description: "Targeted Facebook campaigns" },
        { label: "Instagram Ads", href: "/services/paid-ads/instagram-ads", icon: Instagram, description: "Visual Instagram advertising" },
      ],
    },
  ],
}

export const solutions: NavCategory = {
  label: "Solutions",
  href: "/solutions",
  icon: Zap,
  children: [
    { label: "Payments & Invoicing", href: "/solutions/payments", icon: CreditCard, description: "Accept payments & send invoices" },
    { label: "Document Signing", href: "/solutions/document-signing", icon: FileSignature, description: "Digital signatures made easy" },
    { label: "Lead Generation & Management", href: "/solutions/lead-generation", icon: UserPlus, description: "Capture & nurture every lead" },
    { label: "Email Marketing", href: "/solutions/email-marketing", icon: Mail, description: "Automated email campaigns" },
    { label: "Calendar Booking", href: "/solutions/calendar", icon: Calendar, description: "Let clients book online" },
    { label: "AI Customer Service Agents", href: "/solutions/ai-agents", icon: Bot, description: "24/7 AI-powered support" },
    { label: "Automated Task Management", href: "/solutions/task-management", icon: ListTodo, description: "Streamline your workflows" },
    { label: "Google Analytics", href: "/solutions/analytics", icon: LineChart, description: "Track every visitor & conversion" },
    { label: "QR Code Generation", href: "/solutions/qr-codes", icon: QrCode, description: "Instant QR codes for marketing" },
    { label: "Custom Web-Apps", href: "/solutions/custom-web-apps", icon: AppWindow, description: "Bespoke apps for your business" },
  ],
}

export const plans: NavCategory = {
  label: "Plans",
  href: "/plans",
  icon: Tag,
  children: [
    { label: "StarterMark Plan", href: "/plans/startermark", icon: Rocket, description: "$199/month — Smallest starter package" },
    { label: "LocalMark Plan", href: "/plans/localmark", icon: MapPin, description: "$499/month — Local visibility" },
    { label: "ServicePro Plan", href: "/plans/servicepro", icon: Zap, description: "$899/month — Full-service growth" },
    { label: "Signature Plan", href: "/plans/signature", icon: Crown, description: "$1,499/month — Premium package" },
    { label: "A La Carte", href: "/plans/a-la-carte", icon: ShoppingCart, description: "Pick exactly what you need" },
    { label: "Custom Website", href: "/plans/custom-website", icon: Monitor, description: "One-time website build" },
  ],
}

export const tools: NavCategory = {
  label: "Tools",
  href: "/tools",
  icon: Wrench,
  children: [
    { label: "Local Ranking Checker", href: "/tools/ranking-checker", icon: MapPin, description: "Check your Google Maps ranking" },
    { label: "Website SEO Auditor", href: "/tools/seo-auditor", icon: Search, description: "Free instant SEO audit" },
    { label: "Directory Listing Checker", href: "/tools/directory-checker", icon: ClipboardList, description: "Audit your business listings" },
    { label: "Logo Creator", href: "/tools/logo-creator", icon: PenTool, description: "AI-powered logo generation" },
  ],
}

export const industries: NavCategory = {
  label: "Industries",
  href: "/industries",
  icon: Building2,
  children: [
    { label: "Home Services", href: "/industries/home-services", icon: Home, description: "HVAC, plumbing, electrical & more" },
    { label: "Contractors", href: "/industries/contractors", icon: HardHat, description: "General contractors & builders" },
    { label: "Medical Practices", href: "/industries/medical", icon: Stethoscope, description: "Doctors, dentists & clinics" },
    { label: "Automotive", href: "/industries/automotive", icon: Car, description: "Auto shops & dealerships" },
    { label: "Restaurants", href: "/industries/restaurants", icon: UtensilsCrossed, description: "Restaurants & food service" },
    { label: "Local Service Businesses", href: "/industries/local-service", icon: Store, description: "Any local service business" },
  ],
}

export const resources: NavCategory = {
  label: "Resources",
  href: "/resources",
  icon: BookMarked,
  children: [
    { label: "Blog", href: "/resources/blog", icon: BookOpen, description: "Tips, guides & industry news" },
    { label: "Case Studies", href: "/resources/case-studies", icon: Trophy, description: "Deep dives into client wins" },
    { label: "Marketing ROI Calculator", href: "/resources/roi-calculator", icon: Calculator, description: "See your potential ROI" },
    { label: "FAQ", href: "/resources/faq", icon: HelpCircle, description: "Frequently asked questions" },
  ],
}

export const contact: NavCategory = {
  label: "Contact",
  href: "/contact",
  icon: Phone,
  children: [
    { label: "Schedule a Call", href: "/contact/schedule", icon: Calendar, description: "Book a free strategy call" },
    { label: "Support", href: "/contact/support", icon: HeadphonesIcon, description: "Get help with your account" },
  ],
}

export const clientPortal: NavCategory = {
  label: "Client Portal",
  href: "/client-portal",
  icon: LogIn,
}

/* ── Aggregated arrays for navbar / footer ── */

/** Primary nav categories (shown in the mega menu) */
export const primaryNav: NavCategory[] = [
  about,
  services,
  solutions,
  plans,
  tools,
  industries,
  resources,
]

/** All top-level categories including contact & portal */
export const allCategories: NavCategory[] = [
  ...primaryNav,
  contact,
  clientPortal,
]

/** Flatten all leaf-level children for search / footer */
export function getAllLeafLinks(): NavChild[] {
  const leaves: NavChild[] = []
  for (const cat of allCategories) {
    if (cat.children) leaves.push(...cat.children)
    if (cat.sections) {
      for (const sec of cat.sections) {
        if (sec.children) leaves.push(...sec.children)
      }
    }
  }
  return leaves
}
