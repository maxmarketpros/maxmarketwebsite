interface LogoRowItem {
  domain: string
  label: string
  caption?: string
}

interface LogoRowProps {
  items: LogoRowItem[]
  columns?: 2 | 3 | 4
  size?: 32 | 48 | 64
}

export function LogoRow({ items, columns = 4, size = 48 }: LogoRowProps) {
  const colClass =
    columns === 4
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : columns === 3
      ? "grid-cols-2 sm:grid-cols-3"
      : "grid-cols-2"

  return (
    <div className={`grid ${colClass} gap-3 sm:gap-4`}>
      {items.map((item, idx) => (
        <div
          key={`${item.domain}-${item.label}-${idx}`}
          className="card-surface card-surface-hover flex flex-col items-center text-center px-3 py-4 sm:px-4 sm:py-5 gap-2"
          style={{ borderRadius: "var(--radius-md)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`}
            alt={`${item.label} logo`}
            width={size}
            height={size}
            loading="lazy"
            decoding="async"
            className="rounded-[8px]"
            style={{ width: size, height: size }}
          />
          <div
            className="text-[13px] sm:text-[14px] font-bold leading-tight mt-1"
            style={{ color: "var(--ink)" }}
          >
            {item.label}
          </div>
          {item.caption ? (
            <div
              className="text-[11.5px] sm:text-[12px] leading-[1.35]"
              style={{ color: "var(--muted)" }}
            >
              {item.caption}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
