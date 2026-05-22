# Max Market Pros — Design Guidelines

> **This is the single source of truth for building new pages.** Every new page, section, or component should feel like it belongs next to the home page (`app/page.tsx`). If a pattern doesn't exist here, reuse a pattern from the home page rather than inventing a new one.

The aesthetic: **modern Stripe/Linear-inspired B2B SaaS, tuned for a local service brand.** Soft cold-white wash backgrounds, high-contrast deep-navy ink, translucent hairline borders, layered soft shadows, ambient radial "aura" glows behind content, and a vibrant cyan→blue accent that only shows up in tightly controlled moments (CTAs, pills, accent underlines, check chips).

The home page stack is the reference implementation:
`Navbar → HeroSection → PartnerLogos → InfrastructureSection → PlatformSection → IndustriesSection → PricingSection → ContactSection → Footer`

---

## 1. Design Tokens (globals.css)

**Never hardcode color hex values in components for brand/UI chrome.** Always use CSS variables from `app/globals.css`. Raw hex is reserved for category-specific accents (per-card pills, per-industry tints) and third-party brand marks.

### 1.1 Color Palette

```css
/* Surfaces */
--bg:             #F7FAFC;   /* page background wash — NEVER pure white */
--surface:        #FFFFFF;   /* cards, panels, form inputs */

/* Text */
--ink:            #0B132B;   /* headings + primary text */
--muted:          #5B6B84;   /* body copy, descriptions, microcopy */

/* Brand accent */
--accent:         #1677FF;   /* primary CTA, links, accent icons, focus ring */
--accent-hover:   #0D5FD9;   /* hover state of --accent */
--cyan:           #74D3FF;   /* used in gradients + .accent-underline */

/* Hairlines & shadows */
--border-color:   #DCE6F2;
--shadow-color:   rgba(17, 35, 68, 0.08);
--shadow-strong:  rgba(17, 35, 68, 0.14);

/* Ambient glow tints */
--glow-blue:      rgba(22, 119, 255, 0.12);
--glow-cyan:      rgba(116, 211, 255, 0.10);

/* shadcn / Tailwind compat (already mapped) */
--accent-bg:      #EBF4FF;   /* faint blue tint — check chips, icon chips */
```

**Golden rules:**
- Page background is **always** `var(--bg)` — never `#FFF`.
- Cards sit on that wash as `var(--surface)` (`#FFFFFF`).
- Text is `var(--ink)` for anything structural, `var(--muted)` for supporting copy.
- Use `var(--accent)` for action and emphasis, never as a large flat fill — it should feel reserved.

### 1.2 Category / Per-Card Accent Palette

Bento cards and per-industry panels get their own accent hex for their pill + aura. These live inline on the component, not in CSS. The canonical palette:

| Use                 | Hex        | Notes                                         |
| ------------------- | ---------- | --------------------------------------------- |
| Blue (brand)        | `#1677FF`  | Same as `--accent`. Default / primary slot.   |
| Amber               | `#F59E0B`  | Local SEO, Home Services, "speed/heat" ideas. |
| Red                 | `#EF4444`  | Speed, urgency, contractor vertical.          |
| Yellow              | `#EAB308`  | Reviews, ratings.                             |
| Green               | `#22C55E`  | CRM, lead mgmt, medical vertical.             |
| Sky                 | `#0EA5E9`  | Lead ops, automotive vertical.                |
| Teal                | `#14B8A6`  | Callback / comms.                             |
| Pink                | `#EC4899`  | Social, restaurant vertical.                  |

**Rendering convention** for per-card accents:
- Pill background: `${hex}1A` (10% alpha), text: `${hex}` solid.
- Aura: `rgba(..., 0.08–0.14)` as a radial gradient behind the icon.
- Icon chip tint: `${hex}14` with inset ring `${hex}1A`.
- Never use these hexes for primary page CTAs — the CTA is always `--accent`.

### 1.3 Radius Scale

```css
--radius-xs:   10px;   /* tiny icon chips, nav buttons, input focus */
--radius-sm:   14px;   /* buttons, inputs, inner panels, sub-cards */
--radius-md:   18px;   /* default --radius */
--radius-lg:   24px;   /* card-surface default */
--radius-xl:   28px;   /* hero panels, big ROI banners, feature wrappers */
--radius-pill: 100px;  /* pills, badges, toggles, circular icon buttons */
```

Pick by scale: the larger the surface, the larger the radius. Buttons = `sm`. Cards = `lg`. Hero containers = `xl`. Pills/avatars = `pill`.

### 1.4 Spacing System

```css
--section-py:    120px;  /* desktop vertical padding (lg+) */
--section-py-sm:  80px;  /* mobile / tablet vertical padding (below lg) */
--container-max: 1240px; /* max content width */
```

Use `.section-container` (max 1240 px, 24 px horizontal padding) for every section's inner wrapper. Vertical padding is applied via the `.section-y` utility (80 px below `lg`, 120 px at `lg+`). Put both classes on the wrapper *inside* the `<section>`, not the `<section>` itself — keeps ambient background layers bleed-free.

```tsx
<section className="relative">
  <div className="absolute inset-0 pointer-events-none">…auras…</div>
  <div className="section-container section-y relative z-10">…content…</div>
</section>
```

**Never** hand-roll `paddingTop/Bottom: 'var(--section-py)'` inline — always use `.section-y`.

**Between elements (rhythm):**
- Pill → H2: `mt-5` (20px)
- H2 → paragraph: `mt-5` / `mt-6`
- Header block → grid: `mt-14`
- Within a card: title→desc `mt-2`, desc→bullets `mt-4/mt-5`

### 1.5 Shadows

Avoid solid `shadow-md` style shadows. Stack two shadows — a tight 1–2px crisp shadow plus a blurred larger one — to get the "Stripe float."

| Usage                     | Shadow                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| **Default card**          | `0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)` (via `.card-surface`)     |
| **Card hover**            | `0 2px 8px var(--shadow-color), 0 8px 32px var(--shadow-strong)` + `translateY(-2px)`      |
| **Primary button**        | `0 1px 2px rgba(17,35,68,.10), 0 4px 12px rgba(22,119,255,.25)`                           |
| **Primary button hover**  | `0 2px 4px rgba(17,35,68,.12), 0 8px 24px rgba(22,119,255,.30)` + `translateY(-1px)`       |
| **Hero panel (max)**      | `0 1px 3px rgba(17,35,68,.04), 0 20px 40px -16px rgba(17,35,68,.12), 0 40px 80px -32px rgba(17,35,68,.10)` |
| **Recommended pricing**   | `0 4px 24px rgba(22,119,255,.15), 0 1px 3px var(--shadow-color)`                          |

### 1.6 Typography

Font stack: **Outfit** (loaded in `app/layout.tsx` as `--font-outfit`, aliased through `--font-sans`). All text inherits this — never swap fonts per-section.

**Canonical type scales:**

| Role                          | Mobile | `xs:` | `sm:` | `lg:` | Weight          | Tracking      | Leading    | Color          |
| ----------------------------- | ------ | ----- | ----- | ----- | --------------- | ------------- | ---------- | -------------- |
| **H1 (hero only)**            | 42     | 46    | 54    | 64    | `font-bold`     | `-0.025em → -0.03em` | `1.05` | `var(--ink)`   |
| **H2 (every section)**        | 32     | —     | 40    | 48    | `font-bold`     | `-0.02em`     | `1.1`      | `var(--ink)`   |
| **H3 (card title)**           | 20     | —     | 22    | —     | `font-bold`     | `-0.01em`     | `1.2`      | `var(--ink)`   |
| **H3 (feature / contact)**    | 22     | —     | 24    | —     | `font-bold`     | `-0.01em`     | `1.2`      | `var(--ink)`   |
| **Lead paragraph**            | 17     | —     | 19    | —     | `font-medium`   | normal        | `1.6–1.65` | `var(--muted)` |
| **Body / card desc**          | 15     | —     | —     | —     | `font-medium`   | normal        | `1.55`     | `var(--muted)` |
| **Small body / list**         | 14–14.5| —     | —     | —     | `font-medium`   | normal        | `1.5`      | `var(--ink)`   |
| **Pill / eyebrow**            | 11–13  | —     | —     | —     | `font-semibold` | `0.06–0.12em` UPPERCASE | — | `var(--accent)` |
| **Input label**               | 13     | —     | —     | —     | `font-semibold` | normal        | —          | `var(--ink)`   |
| **Metric number (pricing)**   | 48     | —     | —     | —     | `font-bold`     | `-0.02em`     | none       | `var(--ink)`   |

**H1 is the only heading bigger than H2 on mobile.** H1 42 px vs. H2 32 px gives a 10 px lead — clear hierarchy. Never drop H1 below 40 on mobile; never push H2 above 34 on mobile.

**H2 is ALWAYS rendered via `SectionHeader`** (which encodes the scale). If you inline an H2 — for a split-layout section like Industries/Contact — copy this exact class string:

```tsx
className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
style={{ color: 'var(--ink)' }}
```

Do not invent per-section scales. If a section feels like it needs a smaller H2, it should just use the standard one with a tighter `max-w` on the heading instead.

**Text utilities:**
- `.text-gradient` — cyan→blue diagonal gradient on text. Use sparingly on a single word.
- `.accent-underline` — the signature cyan highlight bar behind the last word of a headline. Use on exactly **one** word per headline. It adds `::after` cyan block at 50% opacity, `-z-index: 1`, sitting 2px from the bottom of the text.

**Anti-orphan rule (mandatory):** Never let a terminal period, question mark, or exclamation wrap onto a line by itself. Wrap the **last word + its punctuation** in `whitespace-nowrap`. This is the single most common mistake when writing new section copy — every H1/H2 with punctuation must ship with the guard.

```tsx
{/* ✅ Good — period stays with "business." */}
<h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
    style={{ color: 'var(--ink)' }}>
  An unfair <span className="accent-underline">advantage</span>
  <br />
  for your <span className="whitespace-nowrap">local business.</span>
</h2>

{/* ✅ Good — nested nowrap when the accent word is the final one */}
<h2 …>
  Engineered to{" "}
  <span className="whitespace-nowrap">
    <span className="accent-underline">close</span>.
  </span>
</h2>

{/* ❌ Bad — "." can orphan on narrow screens */}
<h2 …>
  for your local business.
</h2>
```

Always pair the nowrap with `text-balance` on the heading so wide-viewport breaks still look intentional.

---

## 2. Utility Classes (in globals.css)

Prefer these over re-declaring their styles. They encode the design system.

- **`.section-container`** — 1240 px max, 24 px horizontal padding, auto-centered. Use inside every `<section>`.
- **`.section-y`** — 80 px vertical padding below `lg`, 120 px at `lg+`. Always paired with `.section-container`. **Never** use inline `var(--section-py)` padding — always this utility.
- **`.card-surface`** — white surface + 1 px `--border-color` + the default stacked shadow + `--radius-lg`. Base for every card.
- **`.card-surface-hover`** — add on hover-eligible cards; adds `translateY(-2px)` + stronger shadow transition.
- **`.noise-overlay`** — 3.5% opacity grain (`/hero/noise.png`) to kill banding on large gradient sections. Drop inside an absolute layer behind content.
- **`.accent-underline`** — cyan highlight bar behind a single word (see typography).
- **`.text-gradient`** — cyan→blue gradient on text fill.

---

## 3. Component Library (components/ui)

**Never duplicate these.** Import from `@/components/ui/*`. If a new page needs a tweak, extend these components rather than cloning.

### 3.1 `<Pill>` — eyebrow label
- Rounded-full, `--accent-bg` background, `--accent` text, `--border-color` border.
- Uppercase, tight letter-spacing.
- Import: `@/components/ui/pill`.

### 3.2 `<SectionHeader pill="…" heading={<>…</>} paragraph="…" centered />`
- The canonical header for a centered section. Renders: pill → H2 → paragraph with correct spacing.
- Pass `centered={false}` for left-aligned split-section variants (see Industries).
- Use `<span className="accent-underline">word</span>` inside `heading` to highlight exactly one word.

### 3.3 `<PrimaryButton size="lg" asLink href="…">`
- Gradient blue fill (`linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)`), white text, `rounded-[var(--radius-sm)]`.
- Stacked blue-tinted shadow, `translateY(-1px)` on hover.
- Sizes: default (`px-6 py-2.5 text-[15px]`) / `lg` (`px-8 py-3.5 text-[17px]`).
- Use `asLink + href` when it's a navigation CTA.

### 3.4 `<SecondaryButton asLink href="…">`
- Transparent background, `--accent` text, chevron-right suffix, same hover lift.
- Always pairs next to a `<PrimaryButton>` in hero-style CTA clusters.

### 3.5 `<PricingCard>`
- `--surface` + `--radius-xl`.
- Features: plan name → `$XXX/mo` metric → buildout line → full-width CTA → hairline divider → bullet list (each row: check-chip + text).
- `recommended` variant: 2px `--accent` border, scale-[1.03], blue-tinted shadow, top "MOST POPULAR" strap in solid `--accent` bg / white text.

### 3.6 `<MockupPanel>`
- Wrapper for the hero dashboard image with mouse-parallax 3D tilt.
- Use any large product mockup inside `/hero/` — max width 560 px, drop-shadow-2xl.
- **Perf contract:** parallax is implemented with a `useRef` + `requestAnimationFrame` writing `transform` directly to the DOM (no React re-renders on mousemove). The effect is **disabled entirely on `(hover: none)` devices** via `matchMedia`. Don't reintroduce `setState` inside mousemove handlers anywhere in the site.

### 3.7 Form inputs (see `contact-section.tsx`)
- Label: `text-[13px] font-semibold` in `--ink`, `mb-2`.
- Input: `rounded-[var(--radius-sm)]`, `--surface` bg, 1px `--border-color`, `px-4 py-3 text-[15px]`, focus-ring 2px `--ring` (which is `--accent`).
- Textareas: `resize-none`, minimum `rows={3}`.

### 3.8 Icons
Two icon systems coexist — **do not mix inside the same visual slot**:
- **Icons8** (via `icons8Url(id, size)` from `lib/icons8.ts`) — colorful 3D-ish product icons. Used for bento card hero-icons, contact info chips, sub-cards. IDs are embedded inline in each component.
- **Lucide** (`lucide-react`) — thin 1.9–2.5 stroke line icons. Used for inline controls (checks, arrows, chevrons, hamburger, trust-bullet icons). `strokeWidth={2.5}` for checks in chips; `strokeWidth={1.9}` for industry category icons.

---

## 4. Section Anatomy (the home-page pattern)

Every standard section follows this skeleton. Copy-paste as the starting point for any new page section.

```tsx
<section id="…" className="relative">
  {/* 1. Ambient background layer (absolute, pointer-events-none) */}
  <div className="absolute inset-0 pointer-events-none">
    {/* optional: radial aura orb(s) positioned top-right / bottom-left */}
    {/* optional: .noise-overlay for grain */}
  </div>

  {/* 2. Content wrapper */}
  <div
    className="section-container relative z-10"
    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
  >
    {/* 3. Section header */}
    <SectionHeader
      pill="EYEBROW LABEL"
      heading={<>Primary claim. <span className="accent-underline">Accent word</span>.</>}
      paragraph="One-sentence supporting description that tells the value."
    />

    {/* 4. Content grid (14px+ top margin, fadeInUp animation) */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-… gap-…"
         style={{ animation: 'fadeInUp 0.7s ease-out both' }}>
      {/* cards */}
    </div>
  </div>
</section>
```

**Do:**
- Always stack `absolute inset-0` background layers *before* the content wrapper.
- Always put content in `relative z-10` so it renders above the ambient layer.
- Always animate content grids in with `fadeInUp` (already defined in `globals.css`).

**Don't:**
- Don't put `paddingY` on the `<section>` itself — that clips the aura orbs.
- Don't apply background gradients to `<section>` directly — use a child absolute div.
- Don't stack two sections with clashing glows in the same viewport height.

---

## 5. Ambient Layers (Auras, Grain, Dots)

The signature glow look is built from three ingredients, layered *behind* content:

### 5.1 Aura orbs (radial gradient blobs)
Large, extremely soft, absolutely positioned off-canvas. **Always responsive** — a 900 × 900 blur is expensive to paint on phones, so step blobs down at base and upsize at `sm:`. Typical hero stack:

```tsx
{/* Primary blue aura — top right, biggest */}
<div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
     style={{
       background: 'radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.06) 40%, transparent 70%)',
     }} />
{/* Secondary cyan aura — slightly inset */}
<div className="absolute top-[20%] right-[5%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
     style={{ background: 'radial-gradient(circle, rgba(116,211,255,0.15) 0%, transparent 60%)' }} />
{/* Tertiary — bottom-left anchor, very faint */}
<div className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
     style={{ background: 'radial-gradient(circle, rgba(22,119,255,0.05) 0%, transparent 70%)' }} />
```

**Inside-card auras** (bento pattern) — smaller ellipses anchored to the corner behind the card's icon:
```tsx
<div aria-hidden className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
     style={{ background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${auraColor} 0%, transparent 70%)` }} />
```

Aura opacity rule of thumb: page-level `0.04–0.18`, card-level `0.06–0.14`. If it looks obvious, it's too strong.

### 5.2 Noise grain
Drop `<div className="absolute inset-0 noise-overlay" />` inside the ambient layer. It's already tuned to 3.5% opacity and tiles `/hero/noise.png`. Apply to any section with a visible gradient, not to small cards.

### 5.3 Panel corner glow (Industries pattern)
For a single white panel, tint one corner inward with a contained radial:
```tsx
<div aria-hidden className="pointer-events-none absolute top-0 right-0"
     style={{ width: '55%', height: '45%',
              background: 'radial-gradient(ellipse 80% 100% at 85% 0%, rgba(22,119,255,0.06), transparent 65%)' }} />
```

---

## 6. Section Patterns (home-page blueprints)

Reuse these structures for new pages. Don't invent new section archetypes unless there's a clear reason.

### 6.1 Hero (split: content left, visual right)
- 2-col grid on `lg`, stacked on mobile.
- Left column: `<Pill>` → H1 (very large, with `accent-underline`) → lead paragraph → button row → trust-bullet row.
- Right column: `<MockupPanel>` (or any key visual wrapped the same way).
- Triple ambient aura stack (top-right blue, mid-right cyan, bottom-left blue).
- Animate left with `fadeInUp` 0s, right with `fadeInUp` 0.2s.
- See: `components/hero-section.tsx`.

### 6.2 Infrastructure / Feature Grid (equal emphasis, 2×N)
- `SectionHeader` centered → `mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6`.
- Each card: `.card-surface.card-surface-hover` + per-card aura + icon panel on the right (desktop) / top (mobile) + pill → title → description → check-bullet list.
- Icons8 product icons, 176px square (single) or 2×2 grid of 80px icons (multi).
- See: `components/infrastructure-section.tsx`.

### 6.3 Bento Grid (asymmetric, 6-column lg grid)
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5`.
- Cards define their own `spanMd`/`spanLg`. Mix 4-col and 2-col cards to create rhythm. Three rows deep max.
- Each card: 52px Icons8 icon + pill row → title → description → optional bullets/chips/sub-cards/mini-chart.
- The inline SVG "trend line" pattern (gradient-filled area + crisp accent line) is the canonical lightweight viz. See `BentoCard` in `platform-section.tsx`.
- See: `components/platform-section.tsx`.

### 6.4 Split Section (left copy block, right clickable panel)
- `grid grid-cols-1 lg:grid-cols-12 gap-16` — `lg:col-span-5` left, `lg:col-span-7` right.
- Left is left-aligned (not `centered`): `<Pill>` → H2 → paragraph → arrow-text link (with animated hover underline + translating arrow).
- Right is a single large white panel (28px radius, dual-layer soft shadow, corner aura) containing a 2-col grid of clickable rows. Row dividers are `rgba(11,19,43,0.06)` hairlines, hover tint is `rgba(22,119,255,0.03)`.
- See: `components/industries-section.tsx`.

### 6.5 Pricing (3 cards + monthly/annual toggle + ROI banner)
- `SectionHeader` → toggle row (`Monthly ⟷ Annual [+Save 15% badge when on]`) → 3 equal `<PricingCard>` (middle `recommended`) → `card-surface` ROI banner with heading + sub + CTA aligned right.
- **Mobile guard:** the `recommended` card's `scale-[1.03]` lift is `md:scale-[1.03]` only. Never apply a `scale-*` transform to a full-width mobile column — it pushes past the viewport.
- See: `components/pricing-section.tsx`.

### 6.6 Contact (info left, form right)
- One large `card-surface` with `--radius-xl`, split `grid lg:grid-cols-[1.05fr_1fr]`.
- Left cell: pill → H2 (`accent-underline` on "local market") → description → contact-info chip stack (icon chip + label + value) → trust-bullet list. Soft corner aura behind the pill area.
- Right cell (darker `--bg`, left-bordered): form heading + sub → 2-col field pairs → full-width textarea → full-width `<PrimaryButton size="lg">`.
- On submit: replace form with success state (green check disc, thank-you heading, 24-hour follow-up copy).
- See: `components/contact-section.tsx`.

### 6.7 Partner / Logo Strip
- Narrow section (`py-12 sm:py-16`, no section-py).
- Uppercase muted eyebrow "FEATURED PARTNERS" → infinite horizontal scroll track, duplicated array, `30s linear infinite`, pauses on hover.
- Logos sized `h-8 sm:h-9 w-auto`, 56px gaps.
- See: `components/partner-logos.tsx`.

### 6.8 Navbar
- Fixed, 72px tall, glass morphism: `backdrop-blur-16px` + translucent `--bg` (0.6 idle → 0.92 scrolled).
- Hairline bottom border appears only when scrolled.
- Desktop: logo + hover mega-menu dropdowns (driven by `lib/site-map.ts`) + "Client Portal" text link + `<PrimaryButton>` Book a Call.
- Mega panel: 20-px blur glass, 1px border, dual shadow, grouped link columns, each with a colored section label and icon + two-line link rows (title + muted description).
- Mobile: hamburger → full-height accordion with nested sub-accordions.
- See: `components/navbar.tsx`.

### 6.9 Footer
- 16–20px vertical padding top/bottom, single 1px `--border-color` top rule.
- 9-col lg grid: brand column (2 cols, logo + description + social icons) + 7 link columns sourced from `lib/site-map.ts`.
- Column headings: `text-[12px] font-semibold uppercase tracking-[0.08em]` in `--ink`.
- Link items: `text-[13px]` in `--muted`, hover `opacity-70`.
- Bottom bar: copyright + Privacy / Terms links above another top-border hairline.
- Social icons: 36px circular buttons with `--bg` fill and `--border-color` rim.
- See: `components/footer.tsx`.

---

## 7. Card Design Rules

Every card is a variation of `.card-surface`:

1. **Base structure:**
   - Background: `var(--surface)` (white).
   - Border: `1px solid var(--border-color)`.
   - Radius: `var(--radius-lg)` (24px) default. `--radius-xl` for hero-scale wrappers, `--radius-sm` for inner sub-cards.
   - Shadow: stacked light + soft (from `.card-surface`).
   - Padding: `p-7 md:p-8` for feature cards, `p-6` for bento cards, `p-8 sm:p-10 lg:p-12` for hero containers.

2. **Optional aura layer** (for bento/feature cards):
   - Absolute, corner-anchored, radial gradient, pointer-events-none.
   - Opacity `0.08–0.14`. Size `~70% width × 55% height`.

3. **Anchor row** (icon + pill):
   - Icons8 product icon on the left (52–56px for bento, 176px for feature cards).
   - Inline pill to the right of the icon (feature cards use pill above title; bento uses pill next to icon).

4. **Text block:**
   - `h3` title (20–24px bold, `--ink`) `mt-4`.
   - Description (`15px`, `--muted`) `mt-2`.
   - Bullets/chips/sub-cards start at `mt-4/mt-5`.

5. **Check-chip bullet:**
   ```tsx
   <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
         style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>
     <Check className="w-3 h-3" strokeWidth={2.5} />
   </span>
   ```
   Always paired with `text-[14px]` `--ink` body.

6. **Filter chip:**
   ```tsx
   <span className="inline-block px-3 py-1 text-[12.5px] font-medium rounded-full"
         style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border-color)' }}>
     Label
   </span>
   ```

7. **Sub-card (card-inside-card):**
   - `rounded-[var(--radius-sm)]`, `bg-white`, 1px `--border-color` border, no shadow.
   - Icon chip (36px, `--radius-xs`, `--accent-bg` bg) + label + micro-description.

8. **Hover:**
   - Whole card lifts `translateY(-2px)` + deepens shadow (via `.card-surface-hover`). Nested rows get an individual `-translate-y-[1px]` treat for polish.

---

## 8. Motion & Interaction

- **Easing:** default `ease-out`. Duration 200ms for state changes, 300ms for transforms, 700–800ms for entrance `fadeInUp`.
- **Entrance:** every main content grid animates `animation: fadeInUp 0.7s ease-out both;`. Offset sibling elements by `0.2s` delays in the hero split pattern.
- **Hover lifts:** buttons `-1px`, cards `-2px`. Never more than 2px on a regular interaction — bigger is theatrical.
- **Arrow nudges:** the "View all →" pattern translates the arrow `translate-x-1.5` on group hover, and draws a 1px underline via `scale-x` from `origin-left`.
- **Parallax:** only used on hero mockups (`MockupPanel` tracks mouse across the window, tilts up to ±9°).
- **Toggles:** 56×28px pill with a 24px white knob, 300ms transition, background swaps from `--border-color` to `--accent`.
- **Scrolling logo strip:** 30s linear infinite, pauses on hover.
- **Smooth scroll:** set globally on `<html>` via `scroll-behavior: smooth`. Use `#contact`, `#pricing`, `#features`, `#industries` anchors to jump.

---

## 9. Responsive Breakpoints

Tailwind defaults, but these are the ones actually used:

| Prefix | Min width | Used for                                              |
| ------ | --------- | ----------------------------------------------------- |
| (base) | 0         | mobile-first, single column, smaller type             |
| `xs:`  | 475px     | H1 bump-ups (rare — only hero)                         |
| `sm:`  | 640px     | type size jumps, grid column splits, CTA row wraps    |
| `md:`  | 768px     | 2-col grids, bento intermediate spans                 |
| `lg:`  | 1024px    | desktop navbar, split sections, 6-col bento, 3-col pricing |
| `xl:`  | 1280px    | rarely — container caps at 1240px                      |

**Pattern:** declare the mobile layout first, then upgrade with `md:`/`lg:`. Don't write `xl:` rules unless there's a real >1280px behavior.

**Mobile specifics:**
- Cards re-order (icon on top, text below).
- Section py remains 120px — don't shrink unless explicitly switching to `var(--section-py-sm)`.
- Trust-bullet rows wrap (`flex-wrap`) before stacking.
- CTA clusters: `flex flex-wrap items-center gap-4` keeps buttons tidy.

---

## 10. Copy & Voice Rules (that affect visual density)

- **Headlines** are 2 lines max on desktop, 3 lines on mobile. Always mark the emphasis word with `accent-underline`.
- **Lead paragraphs** cap at ~160 characters (about 2 short lines at `max-w-[480px]`).
- **Bullets** are 2–5 per card, each 2–6 words. They're fragments, not full sentences — e.g. *"Weekly profile updates"*, *"Automated lead follow-up"*. Title case.
- **Pills** are short (2–4 words), UPPERCASE, no trailing punctuation.
- Use `‑` (non-breaking hyphen) inside compound brand terms like `Done‑for‑you` / `Click‑to‑call` to prevent awkward breaks.

---

## 11. Third-Party / Brand Exceptions

Two exceptions break the color rules on purpose — keep them narrow:

### 11.1 Google Business Profile visuals
When rendering a Google Business-styled element (star row, map pin, verified badge, before/after results screenshot):
- Google Blue `#4285F4`, Google Green `#34A853`, Google Red `#EA4335`, Google Yellow `#FBBC05`.
- Use the brand color on text/stroke, but tint backgrounds at 10% alpha (`rgba(52,168,83,0.10)`) so they still fit the glass system.
- Never use these colors for our own CTAs, section accents, or hover states.

### 11.2 Partner logos
Rendered at their native colors (see `components/partner-logos.tsx`). Don't desaturate/monochrome them — the design reads stronger with them in color.

---

## 12. Performance Contract

The landing page is image-heavy and interaction-rich. These are non-negotiable rules that keep it snappy at every viewport.

### 12.1 Images
- **Next/Image optimization is ON** (`next.config.mjs` — no `unoptimized: true`). Next.js automatically serves WEBP/AVIF variants at appropriate widths.
- **Every `<Image>` must declare `sizes`** (otherwise Next ships the full-resolution source). Hero: `sizes="(max-width: 1024px) 92vw, 560px"`. Logos: `sizes="160px"`. Partner-style fixed-width: `sizes="120px"`.
- **Brand logo `<Image>`** also needs inline `style={{ width: 'auto', height: '36px' }}` because Tailwind height/width classes trigger Next's aspect-ratio warning. The explicit style overrides both dimensions cleanly.
- **Varied-aspect marks** (partner logos, third-party badges): use a plain `<img>` tag with `loading="lazy" decoding="async"`. `next/image` warns repeatedly on mismatched intrinsic ratios — not worth the fight.
- **Icons8 `<img>` tags** always get both `loading="lazy"` and `decoding="async"`. Request the icon at 2× the rendered size (e.g. rendered 64 → request `icons8Url(id, 128)`) for retina crispness.
- **Icons8 host is whitelisted** in `next.config.mjs` `images.remotePatterns` — don't remove that entry.

### 12.2 Animation & event handlers
- **Mousemove-driven animations must use `ref + requestAnimationFrame + element.style.transform`** — never `setState`. See `components/ui/mockup-panel.tsx` for the canonical implementation.
- **Disable heavy parallax on touch devices.** Guard with `window.matchMedia('(hover: none)').matches` in the `useEffect` — attach no listener and leave transform at identity.
- **Scroll handlers** should dedupe state updates: `setScrolled((prev) => prev === next ? prev : next)`. See `components/navbar.tsx`.
- **All scroll/resize/mousemove listeners must use `{ passive: true }`.**
- **Entrance animations** (`fadeInUp`) fire once on mount with `animation-fill-mode: both`. Don't gate them with `IntersectionObserver` — the extra code isn't worth the marginal perf win.

### 12.3 Paint cost
- **Keep large blurred elements responsive** (see §5.1) — a 900 × 900 radial blur is fine on desktop, too heavy on a 375-px phone.
- **Avoid `box-shadow` with very large blur radii on hover-animated cards.** Two stacked shadows (tight + soft) are cheaper than one huge blur.
- **Noise grain** is a tiled PNG at 3.5% opacity — don't layer multiple copies or increase opacity above 5%.

### 12.4 Bundle hygiene
- **Client components only when needed.** Default to server components. Mark `"use client"` only when you use state, refs, browser APIs, or event handlers.
- **Import icons by name** from `lucide-react` so tree-shaking works. Do not `import * as Icons from 'lucide-react'`.
- **No ad-hoc animation libraries.** The existing `@keyframes fadeInUp` + CSS transitions cover every entrance/interaction in the design — `framer-motion` is in the dependency tree but reserve it for genuinely advanced cases (layout shifts, shared-element transitions).

---

## 13. Accessibility & Quality Bar

- **Color contrast:** `--ink` on `--bg/--surface` is AAA. `--muted` on `--surface` is ≥AA. Never use `--muted` on anything darker than `--bg`.
- **Focus state:** every interactive element gets `focus-ring` of 2px `--ring` (which is `--accent`). Don't strip `:focus-visible`.
- **Click targets:** minimum 36×36px. Circular icon buttons use `w-9 h-9`.
- **Motion:** all animations respect that the user hasn't opted-out — keep the in-view animation to a single soft slide + fade, never parallax large layouts.
- **Alt text:** Icons8 decorative icons use `alt=""` (purely visual). Partner logos + hero product shots always take descriptive alt.
- **Semantic HTML:** `<section>` per logical block, `id` anchor on every top-level section (`#features`, `#pricing`, `#industries`, `#contact`). Headings go H1 (hero) → H2 (section) → H3 (card) with no level skips.

---

## 14. File & Import Conventions

- **Path aliases:** `@/components/*`, `@/lib/*`, `@/hooks/*`. Always use the alias, never a relative `../..`.
- **Section components** live in `components/` (one file per section).
- **Reusable UI primitives** live in `components/ui/`.
- **Design tokens** live *only* in `app/globals.css` — do not redefine them inside a component.
- **Site map / nav data** lives in `lib/site-map.ts`. Nav and footer both consume from here — when adding a new page, update the site map first.
- **Icons** via `icons8Url(id, size)` from `@/lib/icons8`. Prefer larger source `size` (128/200) with smaller rendered `width/height` for retina crispness.
- **Client components** only when interactivity is needed (state, hooks, mouse/scroll handlers). Mark with `"use client"` at the very top.

---

## 15. When Building a New Page — the Checklist

1. **Use the standard shell.** Render `<Navbar />` at the top via the root layout (already done). The page content sits in `<main>` and gets `<ContactSection />` + `<Footer />` auto-appended by `app/layout.tsx`.
2. **Open with a hero-style section** if it's a landing page: `<Pill>` + H1 + lead + CTA row + visual. Use the hero's triple-aura pattern.
3. **Follow the section rhythm** — alternate "dense grid" sections with "split copy/panel" sections so the page breathes.
4. **Pull from `components/ui/`** first. Only add new UI primitives when a genuinely new shape is needed.
5. **Every section gets:** `id` anchor, `.section-container`, `SectionHeader` (unless it's a non-headered strip), `mt-14` before the content grid, `fadeInUp` animation on the grid.
6. **Test both themes of state:** idle + hover on cards, default + scrolled on navbar, empty + submitted on forms.
7. **Update `lib/site-map.ts`** if the page needs navbar/footer entries. Do not hand-edit nav items in either component.
8. **Review against the home page.** Scroll home, scroll your new page. If they don't feel like siblings — wrong radii, wrong shadows, wrong type scale — fix it before shipping.

---

## 16. Quick Reference — Copy/Paste Snippets

**Standard section opening:**
```tsx
<section id="…" className="relative">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
         style={{ background: 'radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 70%)' }} />
    <div className="absolute inset-0 noise-overlay" />
  </div>
  <div className="section-container section-y relative z-10">
    <SectionHeader
      pill="…"
      heading={
        <>
          Leading phrase.{" "}
          <span className="whitespace-nowrap">
            <span className="accent-underline">final word</span>.
          </span>
        </>
      }
      paragraph="…"
    />
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         style={{ animation: 'fadeInUp 0.7s ease-out both' }}>
      {/* cards */}
    </div>
  </div>
</section>
```

**Standard feature card:**
```tsx
<div className="card-surface card-surface-hover relative overflow-hidden p-7 md:p-8">
  <div aria-hidden className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
       style={{ background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${auraColor} 0%, transparent 70%)` }} />
  <div className="relative">
    <div className="flex items-start gap-3">
      <img src={icons8Url(iconId, 128)} alt="" width={52} height={52} className="w-[52px] h-[52px] object-contain shrink-0" />
      <span className="self-center inline-block text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{ background: `${pillColor}1A`, color: pillColor }}>
        {pill}
      </span>
    </div>
    <h3 className="mt-4 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
        style={{ color: 'var(--ink)' }}>{title}</h3>
    <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: 'var(--muted)' }}>{description}</p>
  </div>
</div>
```

**Check-chip bullet:**
```tsx
<li className="flex items-center gap-2.5 text-[14.5px]" style={{ color: 'var(--ink)' }}>
  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
        style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>
    <Check className="w-3 h-3" strokeWidth={3} />
  </span>
  {text}
</li>
```

**CTA pair:**
```tsx
<div className="mt-8 flex flex-wrap items-center gap-4">
  <PrimaryButton size="lg" asLink href="#contact">Book a free demo</PrimaryButton>
  <SecondaryButton asLink href="#pricing">See plans &amp; pricing</SecondaryButton>
</div>
```

---

**Final rule:** if you're unsure, open `app/page.tsx` and its section components. Match what's there. The home page *is* the design system.
