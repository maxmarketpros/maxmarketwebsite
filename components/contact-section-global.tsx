"use client"

import { usePathname } from "next/navigation"
import { ContactSection } from "./contact-section"

export function ContactSectionGlobal() {
  const pathname = usePathname()
  if (pathname === "/contact") return null
  return <ContactSection />
}
