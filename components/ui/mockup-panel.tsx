"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"

export function MockupPanel() {
  const ref = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const rotateY = (e.clientX - centerX) / 60
      const rotateX = -(e.clientY - centerY) / 60
      setRotation({ x: rotateX, y: rotateY })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={ref} className="relative w-full max-w-[560px]" style={{ perspective: '1000px' }}>
      <div
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src="/hero/GBP-Header-Graphic.png"
          alt="Google Business Profile growth dashboard"
          width={1120}
          height={700}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}
