// VERIFY: representative Irvine home-services funnel from a managed Google
// Search + LSA account. Tighten with the owner's actual GA4 + CallRail data.
const STEPS = [
  {
    label: "Impressions",
    value: "84,200",
    pctOfPrev: 100,
    pctOfTop: 100,
    width: 100,
    note: "Geo-targeted to OC; exact + phrase match only.",
  },
  {
    label: "Clicks",
    value: "6,740",
    pctOfPrev: 8.0,
    pctOfTop: 8.0,
    width: 78,
    note: "8.0% CTR — top quartile for service trades.",
  },
  {
    label: "Form / call started",
    value: "2,158",
    pctOfPrev: 32.0,
    pctOfTop: 2.56,
    width: 56,
    note: "Landing-page speed and call extensions move this number most.",
  },
  {
    label: "Qualified leads",
    value: "1,295",
    pctOfPrev: 60.0,
    pctOfTop: 1.54,
    width: 38,
    note: "Sub-3-minute first response = 60%+ qualification rate.",
  },
  {
    label: "Booked jobs",
    value: "712",
    pctOfPrev: 55.0,
    pctOfTop: 0.85,
    width: 22,
    note: "Confirmed appointment on the calendar; revenue tracked.",
  },
]

export function ConversionFunnel() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="mb-5">
        <div
          className="text-[11px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--accent)" }}
        >
          Click → booked job
        </div>
        <h3
          className="text-[18px] sm:text-[20px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          The five drop-off points that decide your CPA
        </h3>
      </div>

      <div className="space-y-3">
        {STEPS.map((step, idx) => (
          <div
            key={step.label}
            className="px-4 py-4 rounded-xl"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold tabular-nums"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  {idx + 1}
                </span>
                <span
                  className="text-[14.5px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {step.label}
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[18px] font-bold tabular-nums"
                  style={{ color: "var(--ink)" }}
                >
                  {step.value}
                </span>
                {idx > 0 ? (
                  <span
                    className="text-[12px] font-bold tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    {step.pctOfPrev}% of prev
                  </span>
                ) : null}
              </div>
            </div>
            <div
              className="relative h-2.5 rounded-full overflow-hidden"
              style={{ background: "rgba(11,19,43,0.06)" }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${step.width}%`,
                  background:
                    idx === 0
                      ? "#1677FF"
                      : idx === STEPS.length - 1
                      ? "#22A06B"
                      : "linear-gradient(90deg, #1677FF, #74D3FF)",
                }}
              />
            </div>
            <p
              className="mt-2 text-[12.5px] leading-snug"
              style={{ color: "var(--muted)" }}
            >
              {step.note}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-5 grid grid-cols-3 gap-3 px-4 py-4 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(22,119,255,0.08), rgba(116,211,255,0.10))",
          border: "1px solid var(--border-color)",
        }}
      >
        <Stat label="Spend" value="$13,250" />
        <Stat label="Booked jobs" value="712" />
        <Stat label="Cost per booked job" value="$18.61" highlight />
      </div>
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="text-center">
      <div
        className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </div>
      <div
        className="text-[18px] sm:text-[20px] font-bold tabular-nums leading-tight mt-1"
        style={{ color: highlight ? "var(--accent)" : "var(--ink)" }}
      >
        {value}
      </div>
    </div>
  )
}
