"use client"

import Image from "next/image"

const partners = [
  { name: "Google", src: "/partners/google-logo.webp" },
  { name: "Google My Business", src: "/partners/google-my-business-logo.webp" },
  { name: "Semrush", src: "/partners/semrush-logo.png" },
  { name: "HighLevel", src: "/partners/highlevel-logo.png" },
  { name: "Yelp", src: "/partners/yelp-logo.png" },
  { name: "Webflow", src: "/partners/webflow-logo.svg" },
  { name: "Wix", src: "/partners/wix-logo.png" },
  { name: "Netlify", src: "/partners/netlify-logo.png" },
  { name: "Relume", src: "/partners/relume-logo.png" },
]

export function PartnerLogos() {
  // Double the array for seamless infinite scroll
  const doubled = [...partners, ...partners]

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="section-container">
        <p
          className="text-center text-[13px] font-semibold uppercase tracking-[0.1em] mb-8"
          style={{ color: 'var(--muted)' }}
        >
          Featured Partners
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-14 animate-scroll whitespace-nowrap w-max">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="relative h-8 sm:h-9 w-auto shrink-0"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={120}
                height={36}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
