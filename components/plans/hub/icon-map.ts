import {
  Globe, Search, MapPin, Compass, Palette, Server, FileText,
  List, Inbox, MessageCircle, BarChart3, LineChart,
  Share2, Image as ImageIcon, CreditCard, Star, Sparkles, Bot,
  PhoneMissed, Mic, Link2, Newspaper, Megaphone, Camera, Video,
  MessagesSquare, Send, Workflow, Mail, PenLine,
  Rocket, Crown, QrCode,
  Plane, Receipt, Building2, ListChecks, Zap, Wand2, Headphones, ScrollText,
  Tv2, Music2, IdCard, Calculator,
  type LucideIcon,
} from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
  Globe, Search, MapPin, Compass, Palette, Server, FileText,
  List, Inbox, MessageCircle, BarChart3, LineChart,
  Share2, ImageIcon, CreditCard, Star, Sparkles, Bot,
  PhoneMissed, Mic, Link2, Newspaper, Megaphone, Camera, Video,
  MessagesSquare, Send, Workflow, Mail, PenLine,
  Rocket, Crown, QrCode,
  Plane, Receipt, Building2, ListChecks, Zap, Wand2, Headphones, ScrollText,
  Tv2, Music2, IdCard, Calculator,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles
}
