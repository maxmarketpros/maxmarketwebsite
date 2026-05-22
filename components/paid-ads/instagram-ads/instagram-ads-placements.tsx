import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, Play, Volume2 } from "lucide-react"
import { IG_GRADIENT_CSS } from "./instagram-ads-hero"

type PlacementKey = "reels" | "stories" | "feed" | "explore"

type Placement = {
  key: PlacementKey
  name: string
  bestFor: string
  description: string
  spec: { aspect: string; length: string; type: string }
  ctr: { value: string; label: string }
  hook: string
}

const placements: Placement[] = [
  {
    key: "reels",
    name: "Reels Ads",
    bestFor: "Brand discovery + UGC",
    description:
      "Vertical video that runs in the Reels feed and on Explore. Cheapest placement on Instagram when the first 1.5 seconds work &mdash; we ship 4-8 fresh hooks per month.",
    spec: { aspect: "9:16", length: "≤ 60s", type: "Vertical video" },
    ctr: { value: "1.8%", label: "Avg CTR" },
    hook: "AC bill spiked? Here&rsquo;s why.",
  },
  {
    key: "stories",
    name: "Stories Ads",
    bestFor: "Time-bound offers",
    description:
      "Full-screen 9:16 placements between organic Stories. Best surface for retargeting, abandoned-quote pushes, and limited-time offers with a tap-up CTA.",
    spec: { aspect: "9:16", length: "≤ 15s", type: "Story / video" },
    ctr: { value: "2.4%", label: "Avg tap-up rate" },
    hook: "$0 dispatch &mdash; this week only.",
  },
  {
    key: "feed",
    name: "Feed Ads",
    bestFor: "Considered purchases",
    description:
      "Sponsored posts in the main Instagram feed &mdash; static, carousel, and 4:5 video. Carries the heaviest copy block and shines for higher-ticket service quotes.",
    spec: { aspect: "1:1 / 4:5", length: "≤ 60s", type: "Static / carousel" },
    ctr: { value: "1.1%", label: "Avg CTR" },
    hook: "Real bathrooms we remodeled.",
  },
  {
    key: "explore",
    name: "Explore Ads",
    bestFor: "Net-new audiences",
    description:
      "Ads embedded in the Explore grid where users actively browse interest content. Lowest CPM placement &mdash; great for cold prospecting at scale.",
    spec: { aspect: "1:1 / 4:5", length: "Static / 60s", type: "Discovery" },
    ctr: { value: "$3.40", label: "Avg CPM" },
    hook: "Same-day repair near you.",
  },
]

export function InstagramAdsPlacements() {
  return (
    <section
      id="instagram-ads-placements"
      aria-labelledby="instagram-ads-placements-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(250,126,30,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(150,47,191,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Placements"
          heading={
            <span id="instagram-ads-placements-heading">
              Every Instagram Ads placement,{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    background: IG_GRADIENT_CSS,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  mastered
                </span>
                .
              </span>
            </span>
          }
          paragraph="Instagram sells four ad surfaces &mdash; each with its own creative spec, audience headspace, and pricing curve. Our Instagram Ads management runs all four together so cold viewers eventually see the offer they&rsquo;re ready for."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {placements.map((p) => (
            <article
              key={p.key}
              className="relative card-surface card-surface-hover p-6 flex flex-col"
              style={{
                borderRadius: "var(--radius-lg)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              {/* IG gradient corner aura */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  borderRadius: "var(--radius-lg)",
                  background:
                    "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(214,41,118,0.10) 0%, transparent 60%)",
                }}
              />

              {/* Phone-frame mockup */}
              <div className="relative flex items-center justify-center mb-5">
                <PhoneMock placement={p.key} hook={p.hook} />
              </div>

              {/* Best-for tag */}
              <div className="relative">
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(250,126,30,0.10) 0%, rgba(214,41,118,0.10) 100%)",
                    border: "1px solid rgba(214,41,118,0.22)",
                    color: "#B83265",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: IG_GRADIENT_CSS }}
                  />
                  {p.bestFor}
                </span>
              </div>

              <h3
                className="relative mt-3 text-[20px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{
                  background: IG_GRADIENT_CSS,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {p.name}
              </h3>
              <p
                className="relative mt-2 text-[14px] leading-[1.55] flex-1"
                style={{ color: "var(--muted)" }}
                dangerouslySetInnerHTML={{ __html: p.description }}
              />

              {/* Spec strip */}
              <ul
                className="relative mt-4 grid grid-cols-3 gap-1.5 text-center"
                aria-label={`${p.name} creative spec`}
              >
                {[
                  { l: "Aspect", v: p.spec.aspect },
                  { l: "Length", v: p.spec.length },
                  { l: "Type", v: p.spec.type },
                ].map((s) => (
                  <li
                    key={s.l}
                    className="px-1 py-1.5 rounded-md"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div
                      className="text-[8.5px] font-bold uppercase tracking-[0.08em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.l}
                    </div>
                    <div
                      className="mt-0.5 text-[11px] font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {s.v}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Benchmark */}
              <div
                className="relative mt-4 pt-3 border-t flex items-center justify-between gap-3"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  {p.ctr.label}
                </span>
                <span
                  className="text-[18px] font-extrabold leading-none tracking-[-0.02em]"
                  style={{
                    background: IG_GRADIENT_CSS,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {p.ctr.value}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Not sure which Instagram placements fit your offer?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "var(--accent)" }}
          >
            Map placements to my offer
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * Custom inline phone-frame SVG that adapts to each placement type.
 * Reels: 9:16 with sound icon + sponsored tag.
 * Stories: 9:16 with progress bars at top.
 * Feed: 1:1 sponsored post tile within phone chrome.
 * Explore: 3-column grid of tiles within phone chrome.
 */
function PhoneMock({
  placement,
  hook,
}: {
  placement: PlacementKey
  hook: string
}) {
  // Phone outer
  return (
    <div
      className="relative aspect-[9/16] w-[150px] rounded-[22px] overflow-hidden"
      style={{
        background: "#0F1116",
        border: "2px solid rgba(15,17,22,0.92)",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.18), 0 18px 38px rgba(150,47,191,0.32)",
      }}
    >
      {/* Notch */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[44px] h-[14px] rounded-b-[10px] z-30"
        style={{ background: "#0F1116" }}
      />
      {/* Status bar */}
      <div className="absolute top-1 left-3 right-3 flex items-center justify-between text-[7.5px] font-bold text-white/85 z-20">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-1 rounded-[1px] bg-white/85" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/85" />
        </span>
      </div>

      {/* Inner content per placement */}
      {placement === "reels" && <ReelInner hook={hook} />}
      {placement === "stories" && <StoryInner hook={hook} />}
      {placement === "feed" && <FeedInner hook={hook} />}
      {placement === "explore" && <ExploreInner hook={hook} />}
    </div>
  )
}

function ReelInner({ hook }: { hook: string }) {
  return (
    <div
      className="absolute inset-0 pt-5"
      style={{
        background:
          "linear-gradient(160deg, #fa7e1e 0%, #d62976 55%, #4f5bd5 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.32) 0%, transparent 55%)",
        }}
      />
      {/* Header */}
      <div className="absolute top-5 left-2 right-2 flex items-center gap-1 text-white/95 text-[8.5px] font-semibold">
        <span className="w-3.5 h-3.5 rounded-full bg-white border border-white/70" />
        sandra.fixes
        <span
          className="ml-auto px-1 py-0.5 rounded text-[7.5px] font-bold uppercase"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          Sponsored
        </span>
      </div>
      {/* Hook overlay */}
      <div className="absolute left-2 right-7 bottom-9 text-white">
        <div
          className="text-[10.5px] font-extrabold leading-[1.15]"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
          dangerouslySetInnerHTML={{ __html: hook }}
        />
      </div>
      {/* Side icons */}
      <div className="absolute right-1.5 bottom-9 flex flex-col items-center gap-1.5 text-white/95">
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.28)" }}
        >
          <Play className="w-2.5 h-2.5" fill="#fff" strokeWidth={0} />
        </span>
        <Volume2 className="w-2.5 h-2.5" strokeWidth={2.25} />
      </div>
      {/* CTA */}
      <div className="absolute left-2 right-2 bottom-2">
        <div
          className="px-2 py-1.5 rounded-md text-[9.5px] font-bold text-center"
          style={{
            background: "rgba(255,255,255,0.94)",
            color: "#0F172A",
          }}
        >
          Book Now
        </div>
      </div>
    </div>
  )
}

function StoryInner({ hook }: { hook: string }) {
  return (
    <div
      className="absolute inset-0 pt-5"
      style={{
        background:
          "linear-gradient(180deg, #d62976 0%, #962fbf 50%, #4f5bd5 100%)",
      }}
    >
      {/* Progress bars */}
      <div className="absolute top-5 left-2 right-2 flex gap-0.5 z-20">
        <span className="flex-1 h-[2px] rounded-full bg-white/95" />
        <span className="flex-1 h-[2px] rounded-full bg-white/35" />
        <span className="flex-1 h-[2px] rounded-full bg-white/35" />
        <span className="flex-1 h-[2px] rounded-full bg-white/35" />
      </div>
      {/* Header */}
      <div className="absolute top-8 left-2 right-2 flex items-center gap-1 text-white/95 text-[8.5px] font-semibold">
        <span className="w-3.5 h-3.5 rounded-full bg-white border border-white/70" />
        acme.hvac
        <span className="ml-1 text-[7.5px] opacity-75">Sponsored</span>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.32) 0%, transparent 55%)",
        }}
      />
      {/* Big hook */}
      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 text-center text-white">
        <div
          className="text-[15px] font-extrabold leading-[1.05] tracking-[-0.01em]"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
          dangerouslySetInnerHTML={{ __html: hook }}
        />
      </div>
      {/* Tap-up arrow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 text-white/95 text-[8.5px] font-semibold flex flex-col items-center gap-0.5">
        <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white/95">
          <span
            className="block w-0 h-0"
            style={{
              borderLeft: "3.5px solid transparent",
              borderRight: "3.5px solid transparent",
              borderBottom: "5px solid #0F172A",
            }}
          />
        </span>
        <span style={{ textShadow: "0 1px 4px rgba(0,0,0,0.55)" }}>
          Swipe up
        </span>
      </div>
    </div>
  )
}

function FeedInner({ hook }: { hook: string }) {
  return (
    <div className="absolute inset-0 pt-5 bg-white">
      {/* IG header bar */}
      <div className="absolute top-5 left-0 right-0 px-2 py-1.5 flex items-center gap-1.5 border-b border-gray-100">
        <span
          className="w-4 h-4 rounded-full"
          style={{
            background: IG_GRADIENT_CSS,
            padding: 1.5,
          }}
        >
          <span className="block w-full h-full rounded-full bg-white" />
        </span>
        <span className="text-[7.5px] font-bold text-gray-900">acme.hvac</span>
        <span className="ml-auto text-[7.5px] text-gray-500">···</span>
      </div>
      {/* Square image */}
      <div
        className="absolute left-0 right-0 aspect-square mt-[26px]"
        style={{
          background:
            "linear-gradient(160deg, #fa7e1e 0%, #d62976 70%, #962fbf 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.32) 0%, transparent 60%)",
          }}
        />
        <span
          className="absolute top-1.5 left-1.5 px-1 py-0.5 rounded text-[7.5px] font-bold uppercase"
          style={{ background: "rgba(255,255,255,0.92)", color: "#B83265" }}
        >
          Sponsored
        </span>
        <div
          className="absolute left-1.5 right-1.5 bottom-1.5 text-white text-[10px] font-extrabold leading-[1.1]"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.55)" }}
          dangerouslySetInnerHTML={{ __html: hook }}
        />
      </div>
      {/* Caption block */}
      <div className="absolute left-0 right-0 bottom-0 px-2 pb-2 pt-1.5 bg-white">
        <div className="flex items-center gap-2">
          <Play
            className="w-2.5 h-2.5"
            style={{ color: "#0F172A" }}
            strokeWidth={2.5}
          />
          <span
            className="text-[8.5px] font-bold ml-auto px-1.5 py-0.5 rounded text-white"
            style={{ background: IG_GRADIENT_CSS }}
          >
            Get Quote
          </span>
        </div>
      </div>
    </div>
  )
}

function ExploreInner({ hook }: { hook: string }) {
  const tiles = [
    "#fa7e1e",
    "#d62976",
    "#962fbf",
    "#4f5bd5",
    "#fa7e1e",
    "#962fbf",
    "#d62976",
    "#4f5bd5",
    "#fa7e1e",
  ]
  return (
    <div className="absolute inset-0 pt-6 bg-white">
      {/* Search bar */}
      <div className="absolute top-5 left-2 right-2 h-3 rounded-md bg-gray-100" />
      {/* 3-col tile grid */}
      <div className="absolute top-10 left-0 right-0 grid grid-cols-3 gap-[1px] bg-gray-200">
        {tiles.map((c, i) => (
          <div
            key={i}
            className="aspect-square relative"
            style={{
              background:
                i === 4
                  ? "linear-gradient(160deg, #fa7e1e 0%, #d62976 70%, #962fbf 100%)"
                  : c,
              opacity: i === 4 ? 1 : 0.85,
            }}
          >
            {i === 4 && (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)",
                  }}
                />
                <span
                  className="absolute top-0.5 left-0.5 px-1 py-0 rounded text-[6.5px] font-bold uppercase"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "#B83265",
                  }}
                >
                  Ad
                </span>
                <div
                  className="absolute inset-x-1 bottom-1 text-white text-[7px] font-extrabold leading-[1.05]"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.55)" }}
                  dangerouslySetInnerHTML={{ __html: hook }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
