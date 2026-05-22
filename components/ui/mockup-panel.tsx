"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export function MockupPanel() {
  const rootRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    // Skip parallax entirely on touch / hover-less devices
    if (window.matchMedia("(hover: none)").matches) return

    const coords = { x: 0, y: 0 }
    let rafId = 0
    let pending = false

    const handleMouseMove = (e: MouseEvent) => {
      if (!rootRef.current) return
      const rect = rootRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      coords.x = -(e.clientY - centerY) / 60
      coords.y = (e.clientX - centerX) / 60
      if (!pending) {
        pending = true
        rafId = requestAnimationFrame(apply)
      }
    }

    const apply = () => {
      pending = false
      if (tiltRef.current) {
        tiltRef.current.style.transform = `rotateX(${coords.x}deg) rotateY(${coords.y}deg)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={rootRef} className="relative w-full max-w-[560px]" style={{ perspective: "1000px" }}>
      <div
        ref={tiltRef}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <Image
          src="/hero/GBP-Header-Graphic.png"
          alt="Google Business Profile growth dashboard"
          width={1120}
          height={700}
          sizes="(max-width: 1024px) 92vw, 560px"
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}
