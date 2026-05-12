import {
  Globe, Search, MapPin, Compass, Palette, Server, FileText,
  List, Inbox, MessageCircle, BarChart3, LineChart,
  Share2, Image as ImageIcon, CreditCard, Star, Sparkles, Bot,
  PhoneMissed, Mic, Link2, Newspaper, Megaphone, Camera, Video,
  MessagesSquare, Send, Workflow, Mail, PenLine,
  Rocket, Crown, QrCode,
  type LucideIcon,
} from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
  Globe, Search, MapPin, Compass, Palette, Server, FileText,
  List, Inbox, MessageCircle, BarChart3, LineChart,
  Share2, ImageIcon, CreditCard, Star, Sparkles, Bot,
  PhoneMissed, Mic, Link2, Newspaper, Megaphone, Camera, Video,
  MessagesSquare, Send, Workflow, Mail, PenLine,
  Rocket, Crown, QrCode,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles
}
