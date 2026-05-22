"use client"

import { useState } from "react"
import { icons8Url } from "@/lib/icons8"

interface FaviconProps {
  domain: string
  name: string
  /** Rendered size in pixels (default 32). */
  size?: number
  /** sz= query param sent to the favicon API (default 128 — Google up-samples for crispness). */
  fetchSize?: number
  /** Optional icons8 ID — when provided, render this icon instead of the favicon.
   *  Useful for domains whose favicon is a generic / shared brand mark
   *  (e.g., Google sub-services that all return the same Google "G"). */
  iconId?: string
}

export function Favicon({
  domain,
  name,
  size = 32,
  fetchSize = 128,
  iconId,
}: FaviconProps) {
  const [errored, setErrored] = useState(false)

  if (iconId) {
    return (
      <img
        src={icons8Url(iconId, fetchSize)}
        alt={`${name} logo`}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    )
  }

  if (errored) {
    return (
      <span
        className="inline-flex items-center justify-center font-bold"
        style={{
          width: size,
          height: size,
          background: "var(--accent-bg)",
          color: "var(--accent)",
          borderRadius: 8,
          fontSize: Math.round(size * 0.45),
          letterSpacing: "-0.02em",
        }}
        aria-label={`${name} (logo unavailable)`}
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={`https://s2.googleusercontent.com/s2/favicons?domain=${domain}&sz=${fetchSize}`}
      alt={`${name} logo`}
      width={size}
      height={size}
      onError={() => setErrored(true)}
      loading="lazy"
      decoding="async"
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  )
}
