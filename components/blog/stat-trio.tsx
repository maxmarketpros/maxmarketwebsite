import { icons8Url } from "@/lib/icons8"

export interface StatTrioItem {
  iconId: string
  value: string
  label: string
  sub?: string
}

interface StatTrioProps {
  items: StatTrioItem[]
  columns?: 3 | 4
}

export function StatTrio({ items, columns = 3 }: StatTrioProps) {
  const colClass =
    columns === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-3"

  return (
    <div className={`grid ${colClass} gap-3 sm:gap-5`}>
      {items.map((stat, i) => (
        <div
          key={stat.label}
          className="card-surface card-surface-hover p-5 sm:p-6 flex flex-col gap-3 sm:gap-4"
          style={{
            borderRadius: "var(--radius-lg)",
            animation: `fadeInUp 0.7s ease-out ${i * 0.06}s both`,
          }}
        >
          <div
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
            style={{ background: "var(--accent-bg)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={icons8Url(stat.iconId, 96)}
              alt=""
              width={28}
              height={28}
              loading="lazy"
              decoding="async"
              className="w-7 h-7 object-contain"
            />
          </div>
          <div>
            <div
              className="text-[28px] sm:text-[34px] font-bold leading-[1.05] tracking-[-0.02em] tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              {stat.value}
            </div>
            <div
              className="mt-1 text-[13px] sm:text-[14px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              {stat.label}
            </div>
            {stat.sub ? (
              <div
                className="mt-0.5 text-[12px] sm:text-[13px]"
                style={{ color: "var(--muted)" }}
              >
                {stat.sub}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}
