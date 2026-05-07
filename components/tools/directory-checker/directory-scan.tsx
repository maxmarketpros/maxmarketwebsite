import { Pill } from "@/components/ui/pill"
import { Radar } from "lucide-react"

interface DirectoryScanProps {
  iframeSrc: string
}

export function DirectoryScan({ iframeSrc }: DirectoryScanProps) {
  return (
    <div className="max-w-[1180px] mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <Pill>
          <Radar className="w-3.5 h-3.5" strokeWidth={2.5} />
          Live scan
        </Pill>
        <p
          className="mt-3 text-[14.5px] sm:text-[15.5px] leading-[1.55] max-w-[560px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Your scan is running below. Results stream in within ~20 seconds —
          review them, then we&rsquo;ll help you fix any gaps.
        </p>
      </div>

      <div
        className="relative p-[1.5px]"
        style={{
          borderRadius: "var(--radius-xl)",
          background:
            "linear-gradient(140deg, rgba(22,119,255,0.55) 0%, rgba(116,211,255,0.40) 40%, rgba(220,230,242,0.40) 100%)",
          boxShadow:
            "0 4px 14px rgba(17,35,68,0.10), 0 30px 80px rgba(22,119,255,0.18)",
        }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "calc(var(--radius-xl) - 2px)",
            background: "var(--surface)",
          }}
        >
          <iframe
            src={iframeSrc}
            title="Yext directory listing scan"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0 h-[1100px] sm:h-[1200px] lg:h-[1300px]"
          />
        </div>
      </div>
    </div>
  )
}
