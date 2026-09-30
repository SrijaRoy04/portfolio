---
name: Terminal Precision
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets modern software engineers, technical founders, and systems architects who demand an ultra-refined, high-signal presentation. It blends technical minimalism with deep-layer glassmorphism, evoking precision, computational clarity, and progressive craft. 

The aesthetic is built on rich void backgrounds, controlled luminance levels, crisp borders, and electric indigo optical accents that command focal priority without visual clutter.

## Colors

The palette revolves around deep optical voids and radiant spectral highlights:

- **Primary (`#3b82f6` - Electric Blue):** Used for focal action items, active navigational markers, and high-priority interactive states.
- **Secondary (`#6366f1` - Deep Indigo):** Acts as the supporting luminescence in linear gradients, secondary highlights, and technical accent rings.
- **Tertiary (`#06b6d4` - Tech Cyan):** Reserved for code tokens, status indicators (e.g., active builds, deployment success), and technical metadata callouts.
- **Neutral (`#090d16` - Deep Space Obsidian):** The foundational canvasing surface. Tonal container tiers scale up through `#0e1526`, `#141d33`, and `#1e293b`. Text hierarchies rely on pure `#ffffff` for primary display headers, `#94a3b8` for structural body text, and `#64748b` for subtle timestamp or code annotations.

## Typography

The typography architecture uses a dual-engine Sans + Monospace pairing:

- **Display & Headings:** `Geist` provides tight tracking, sharp geometry, and structural coldness ideal for tech portfolios.
- **Body & Longform:** `Inter` handles paragraphs, project case breakdowns, and narrative summaries with high legibility across varied pixel densities.
- **Code & Micro-labels:** `JetBrains Mono` formats tech-stack labels, repository metrics, terminal readouts, and inline code blocks, emphasizing deliberate technical craftsmanship.

## Layout & Spacing

A 12-column responsive fluid grid governs structural alignment:

- **Desktop (≥1024px):** Max container width capped at `1200px` for high readability, 12-column grid, `1.5rem` gutters, and `2rem` outer page margins.
- **Tablet (768px – 1023px):** 8-column layout with `1.25rem` gutters and `1.5rem` outer margins.
- **Mobile (<768px):** 4-column layout with `1rem` gutters and `1rem` margins. Complex multi-column project cards collapse down to a single vertical stack.

Vertical pacing follows an 8pt base grid cadence (`space-xs` through `space-xl`).

## Elevation & Depth

Visual hierarchy uses frosted glassmorphism anchored by hairline borders:

- **Surface Tiers:**
  - **Base Canvas:** Solid `#090d16`.
  - **Glass Surface Level 1 (Background panels):** `rgba(15, 23, 42, 0.5)` with `16px` backdrop blur and a `1px` stroke of `rgba(255, 255, 255, 0.08)`.
  - **Glass Surface Level 2 (Interactive cards, popovers):** `rgba(20, 29, 51, 0.65)` with `20px` backdrop blur and a `1px` stroke of `rgba(255, 255, 255, 0.12)`.
- **Lighting & Shadows:** Avoid muddy drop shadows. Instead, apply low-opacity directional illumination: `0 10px 30px -10px rgba(0, 0, 0, 0.5)` paired with a soft radial indigo top-glow (`box-shadow: 0 0 25px -5px rgba(99, 102, 241, 0.15)`) on hover states.

## Shapes

The geometry uses a modern rounded aesthetic (`roundedness: 2`). Base interactive elements (inputs, standard buttons, code blocks) use `0.5rem` (8px). Larger glassmorphic cards and modal windows step up to `1rem` (16px), retaining structural discipline without tipping into aggressive pill shapes.

## Components

### Buttons
- **Primary:** Linear gradient background (`to right, #3b82f6, #6366f1`), high-contrast pure white text, 8px corner radius, padding `0.625rem 1.25rem`. Hover triggers a brightness increase and a subtle outer electric halo.
- **Secondary (Glass):** Backdrop blur `12px`, background `rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#e2e8f0`. Hover border shifts to `rgba(99, 102, 241, 0.5)`.

### Chips & Badges
- **Tech Stack Chips:** Background `rgba(59, 130, 246, 0.08)`, border `1px solid rgba(59, 130, 246, 0.25)`, typography `label-badge` (`JetBrains Mono`), color `#93c5fd`. Includes a `4px` dot indicator or technical mono prefix (`$`, `v1.`, `::`).

### Cards (Project & Experience)
- Multi-layered frosted container with subtle inner highlights (`inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`). Hovering elevates the card via a subtle `-2px` Y-axis translation and lights up border color to `rgba(59, 130, 246, 0.4)`.

### Code Blocks & Snippets
- Inset canvas background (`#050811`), `1px solid rgba(255, 255, 255, 0.06)`, padded with `1rem`. Houses file labels, copy buttons, and language badges formatted in `JetBrains Mono`.

### Inputs & Form Controls
- Dark translucent background (`rgba(15, 23, 42, 0.6)`), border `1px solid rgba(255, 255, 255, 0.1)`, text `#f8fafc`. Focus state introduces a razor-sharp electric blue outline with `box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3)`.