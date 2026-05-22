import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PaySignForm } from "@/components/pay-sign/pay-sign-form"

export const metadata: Metadata = {
  title: "Pay & Sign · Create Task",
  description: "Internal sales-team form.",
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <PaySignForm />
    </main>
  )
}
