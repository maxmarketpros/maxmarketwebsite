"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  /** 0–1 portion of the element that must be visible to trigger. Default 0.15. */
  threshold?: number
  /** Margin around the root viewport, e.g. "0px 0px -10% 0px". */
  rootMargin?: string
  /** Reveal only once, then stop observing. Default true. */
  once?: boolean
}

/**
 * IntersectionObserver-based reveal hook. Returns a ref to attach and a boolean
 * that flips true when the element scrolls into view. Honors reduced-motion by
 * reporting `inView: true` immediately (no entrance animation).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.disconnect()
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
