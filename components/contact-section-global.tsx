"use client"

import { usePathname } from "next/navigation"
import { ContactGetInTouch } from "./contact/contact-get-in-touch"
import { ContactOffice } from "./contact/contact-office"

export function ContactSectionGlobal() {
  const pathname = usePathname()
  if (pathname === "/contact") return null
  return (
    <>
      <ContactGetInTouch variant="section" />
      <ContactOffice />
    </>
  )
}
