# Superintelligence Foundry — Design System

## What this company is

Superintelligence Foundry is building **Creative AGI**: the step after Generative AI. Generative
models remix and imagine from existing data; the system this company is building goes further —
it works today as an embodied scientist and engineer, making real discoveries, inventions, and
solving hard technical problems. Each solved problem feeds back in and makes the system better at
the next one. That compounding loop — not any single output — is the actual product: an
open-ended intelligence that eventually creates not just products, but whole companies,
including itself.

That self-improving, always-building character is the design brief. The brand should read as a
**foundry**: a hot, active place of production — something is always being forged, cast, poured,
shaped — rather than a cold research lab or a consumer software brand.

## Sources provided

- `uploads/SF.jpg` — the original temporary "SF" wordmark (superseded by the S mark, July 2026).
  No other brand materials, codebase, or Figma file were provided.
- No existing product exists yet. This system was built from scratch: brand direction was
  confirmed with the user via a short design-direction questionnaire (color, type, tone, scope)
  before building. There is no code repo or Figma link to record here — if one exists later,
  paste it and this section should be updated with the URL/path so future work can reference the
  real source of truth instead of this system.

## What's in this system

- **Logo:** the S mark — a warm-white stem (`--text-primary #F5F3EE`) with an azure sweep at the
  head (`--sf-azure-400 #5B8FDB`, the product) and an ember sweep at the foot
  (`--sf-ember-500 #E8703A`, the forge), encoding the accent system directly. Fills are the exact
  brand tokens. `assets/logo/sf-mark.svg`. Wordmark is plain type — no lockup file.
- **Fonts are substituted.** No brand font files were provided. See TYPOGRAPHY below and
  `tokens/fonts.css` for the exact Google Fonts substitutes chosen, and swap them for real brand
  fonts if the company licenses any.
- Everything else (color, spacing, motion, components, the marketing UI kit) was originated for
  this system based on the "foundry" brief and the questionnaire answers, and should be treated as
  a first draft to react to and iterate on — not a locked identity.

## Content fundamentals

**Voice:** a mix of scientific precision and manifesto confidence. Sentences are declarative and
short where making a claim ("Each solution makes the system better at the next one."), and
technically specific where explaining mechanism (no hand-wavy AI marketing fog). Avoid hype
adjectives ("revolutionary", "game-changing") — let the mechanism and the compounding loop argument
carry the ambition instead of adjectives.

**Person:** speaks in first person plural about the company ("we're moving from Generative AI to
Creative AGI") and describes the system in third person ("the system works as an embodied
scientist and engineer"). Rarely addresses the reader as "you" — this is a company narrating what
it is building, not a product pitching a user.

**Casing:** sentence case everywhere — headlines, buttons, labels, nav. No title case, no
all-caps body copy. All-caps is reserved for small eyebrow labels/kickers, always paired with
wide letter-spacing (`--tracking-wider`), e.g. "OUR APPROACH", "LATEST WORK" — treat these as a
structural/typographic device, not a shouting device.

**Vocabulary:** verbs of making — forge, cast, build, solve, discover, invent, pour, ship. The
system is described as a worker ("embodied scientist and engineer") — not a chatbot, not an
assistant, not a copilot. Avoid consumer-software language (users, sign up, get started) in favor
of more foundational language (the system, the work, the loop).

**Emoji:** never. Unicode/emoji have no place in this brand's copy or UI chrome.

**Example lines (house style, not copied from a source):**
- "Generative AI combines and imagines new data. What comes next is AI that creates."
- "Each solution makes the system better at the next one."
- "OUR APPROACH" (eyebrow), "The loop is the product" (headline)

## Visual foundations

**Color:** a dark warm charcoal is the default surface (`--surface-app`, `#121110`) — the foundry
at night, lit by its own work; matte, warm-black, never a cool blue-dark. Three accents with a
strict division of labor: **orange is the forge, blue is the product, olive is the machine
running.** The molten ember orange lifted from the SF mark (`--sf-ember-500 #E8703A`) stands for
process, action, and heat — primary actions, active/selected states, a thin ring or glow, key
numerals/marks. The azure AI accent (`--sf-azure-*`, semantic `--accent-ai` / `--text-ai`, lighter
400/300 steps on dark surfaces) stands for the product — the intelligence itself and its outputs:
AI-generated markers, system-output UI, data attributed to the system. The olive accent
(`--sf-olive-500 #7A9448`, semantic `--accent-olive` / `--text-olive`) is a machined green used
**minimally** — live/operational status ("system running" indicators, in-flight counts) and the
rare spot highlight; its pop depends on its rarity, so never use it decoratively or in more than
one place per screen. Never use blue or olive for CTAs or interaction states, and never use orange
to label AI output — the accents must not blur.
Neutrals are warm-tinted charcoals and off-whites (`--sf-char-*`, text at `#F5F3EE`-based values)
rather than cool blue-grays — everything should feel lit by warm light, not by a screen. Warm
off-white survives as `--surface-inverse` for high-contrast moments (tooltips, toasts).
Two semi-desaturated signal colors (success green, warning amber, error red) exist for
functional states only and are used sparingly.

**Type:** a two-family system. `Manrope` for display/headlines — a modern grotesque with a
clean, spurless cap G and geometric warmth that reads technical without novelty.
`Archivo` for body/UI text — a neutral grotesque, chosen for
legibility at small sizes, pairs cleanly with Manrope without competing. `IBM Plex Mono` for
data, labels, timestamps, and anything that should read as a system readout rather than prose.
Headlines set tight (`--tracking-tight`) at large sizes; eyebrow labels set wide
(`--tracking-wider`) and small.

**Spacing:** 4px base unit, scale at `tokens/spacing.css`. Generous section spacing (`--space-24`
to `--space-40` between major sections) — the brand should feel like it has room to breathe. Content is capped at `--content-max` (1200px) and centered, with
a responsive outer margin (`--page-margin`).

**Backgrounds:** flat, matte warm grey — no gradients as a default backdrop. The one exception is a
very tight, low-opacity radial "glow" behind hero content (simulating heat/light near an accent
element), used once per screen at most. No photography-heavy full-bleed treatment yet (no imagery
was provided); no repeating pattern or texture system yet — flag this as an open area once real
imagery/photography exists (foundry/industrial photography would suit the brand well: molten
metal, sparks, machinery, workshop environments).

**Animation:** quick and mechanical, never bouncy or springy. Standard easing is a fast ease-out
(`--ease-standard`, `cubic-bezier(0.2,0,0,1)`) — like a stamp press engaging, not a UI element
floating into place. Durations are short (120–360ms). No looping decorative animation, no
parallax. A brief scale/opacity entrance is acceptable for hero content; nothing else should
animate on its own.

**Hover states:** accent buttons deepen (from
`--accent-default` to the darker `--accent-hover`); ghost/outline elements gain a subtle
`--surface-raised`-toned fill. Text links gain the accent color. No underlines appearing/disappearing
as the primary hover signal for buttons — color shift is primary.

**Press states:** a slight scale-down (0.97–0.98) plus a shift to the darker `--accent-active`
shade — reads as a mechanical press/click, not a bounce.

**Borders:** hairline (1px) borders in translucent warm ink (`--border-subtle` /
`--border-default`) are the default way to separate surfaces — preferred
over heavier shadows for most card/panel separation. A 2px accent border (`--border-accent`) marks
selected/active state on interactive elements.

**Shadows:** mostly restrained — `--shadow-sm/md/lg` are soft, warm-ink, low-opacity (borders still
do most of the separation work; shadows are a secondary depth cue). A dedicated `--shadow-glow-accent` (a soft orange glow) is used for focused/active accent
elements as a "hot metal" cue, and `--shadow-focus-ring` for keyboard focus.

**Corner radii:** mostly square. Radius is small and only appears on small controls — buttons,
inputs, tags (`--radius-sm` 2px to `--radius-lg` 6px). Pills (`--radius-pill`) are reserved for
small status/tag chips. Large surfaces (cards, panels, modals) use `--radius-md` at most — nothing
reads as "soft" or "bubbly."

**Cards:** near-white `--surface-card` fill, 1px `--border-subtle` outline, `--radius-md` corners,
`--shadow-sm` at rest. No colored left-border accent treatment. Hover (where a card is
interactive) raises the border to `--border-default`/`--border-strong` and/or lifts to
`--shadow-md` — never a background color change to the accent color.

**Transparency & blur:** used narrowly — for overlays/scrims behind modals (`--surface-overlay`,
a translucent warm ink) and for sticky nav once scrolled (subtle blur + translucent light fill so
content is legible passing underneath). Not used as a general "glassmorphism" surface treatment
elsewhere.

**Imagery color vibe:** no imagery supplied yet. When it is, the brand direction calls for warm,
high-contrast, slightly moody industrial/foundry photography — practical
light sources (molten metal, sparks, forge glow) rather than clinical, bright, blue-toned tech
photography. Flagged as an open gap — ask the user for real photography/illustration.

**Layout rules:** a persistent top nav (logo left, nav links + primary CTA right), single-column
content flow beneath, `--content-max` centered container. No fixed sidebars in the marketing site.

## Iconography

No icon system, sprite, or icon font was provided in the source materials (there is no codebase
or Figma to draw from). Per the instructions, this system does **not** hand-roll icons. It uses
**Lucide** (CDN, `lucide.dev`) as a substitute icon set — chosen for its neutral, technical,
even-stroke-weight linework that sits comfortably with the Manrope/Archivo pairing and the
industrial-but-not-cold visual direction. Icons are used sparingly: nav affordances, form
feedback (check/alert), and small UI chrome — never as decoration filling empty space. This
substitution should be revisited if the company has or adopts its own icon set. Emoji and unicode
symbols are not used as icons anywhere in this system.

## Index

- `styles.css` — root stylesheet; `@import`s everything under `tokens/`. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii/shadow/motion),
  `fonts.css` (`@font-face`/Google Fonts substitutes).
- `assets/logo/sf-mark.svg` — the S mark (light stem, azure head sweep, ember foot sweep).
- `guidelines/` — foundation specimen cards for the Design System tab (Colors, Type, Spacing,
  Brand groups).
- `components/core/` — Button, IconButton, Badge, Tag, Card.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Tooltip, Toast, Dialog.
- `components/navigation/` — Tabs, NavLink.
- `ui_kits/marketing/` — marketing website recreation: home, about, research/blog, nav — the only
  product surface, since none exists yet.
- `SKILL.md` — portable skill file for using this system in Claude Code or elsewhere.

### Intentional additions

No source defined a component inventory (no codebase, no Figma), so per instructions this system
authors the standard primitive set sized to a marketing site's needs: Button, IconButton, Badge,
Tag, Card, Input, Select, Checkbox, Radio, Switch, Tooltip, Toast, Dialog, Tabs, NavLink. All of
these are original to this system, not lifted from an existing product.
