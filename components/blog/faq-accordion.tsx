"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export interface FaqItem {
  question: string
  answer: React.ReactNode
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div
      className="card-surface px-2 sm:px-5"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border-b last:border-b-0"
            style={{ borderColor: "var(--border-color)" }}
          >
            <AccordionTrigger className="text-[16px] sm:text-[17px] font-semibold py-5 px-3 hover:no-underline">
              <span style={{ color: "var(--ink)" }}>{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-[1.6] px-3 pb-5">
              <div style={{ color: "var(--muted)" }}>{item.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
