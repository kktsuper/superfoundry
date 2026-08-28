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

- **superfoundry.dev — the live site.** Source of truth for the visual system as of the
  August 2026 light-mode relaunch. Built as the design component `SuperFoundry.dc.html` in the
  Claude design project `965067d0-6036-4044-953e-1cbf6765b2d9` (with earlier directions under
  `iterations/` in that project). Every semantic colour, the page gradient, the hatch texture,
  the logo variants and the partner logos in this system were read out of that file, not invented.
  The reader of this readme may not have access to that project; the values are all recorded here
  and in `tokens/`.
- `uploads/SF.jpg` — the original temporary "SF" wordmark (superseded by the S mark, July 2026).
- No product codebase or Figma file has been provided. The component primitives, spacing, motion
  and shadow systems were originated for this system from a brand questionnaire and should still be
  treated as a first draft; the colour, type, logo and page-ground layers are now confirmed
  against the live site.

## What's in this system

- **Logo:** the Aleph mark (ℵ) — adopted August 2026, replacing the earlier S mark. Aleph is the
  mathematical symbol for the transfinite: beyond the finite lies an endless hierarchy of greater
  possibilities. Three strokes carry the brand's triad: the grounding stroke is **foundation**
  (`#9FB06D`, green), within which **creation** (`#E68E57`, orange) and **intelligence**
  (`#668DC9`, blue) take form. Logo ink is `#1A1A1A` on paper `#F6F4EE`. Files in `assets/logo/`:
  `aleph-mark-light.svg` / `aleph-mark-dark.svg` (the mark alone, per ground — light is the
  default), `aleph-lockup-stacked-*` and `aleph-lockup-horizontal-*` (mark + wordmark lockups),
  `aleph-mono-stacked-*` and `aleph-mono-horizontal-*` (single-colour reproduction), and
  `aleph-mirror-light/dark.svg` (the rotationally-symmetric alternate). The legacy S-mark files
  (`sf-mark*.svg`) remain for archival reference only — do not use them in new work.
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

**Theme:** the brand relaunched in light mode in August 2026. The semantic layer therefore
defaults to warm paper, and the original dark treatment is preserved verbatim in `tokens/theme-dark.css` — deliberately NOT
imported from `styles.css`, so "Dark" is not offered as a system-wide theme. Link that file
explicitly and scope with `[data-theme="dark"]` for decks, the video intro, and inverse panels. The *palette* is
unchanged across both — only the semantic aliases flip. Reach for dark deliberately (one inverse
slide in a deck, a quote panel), not as a default.

**Color:** warm paper is the default surface (`--surface-app`, `#F3EFE8`) — the foundry floor in
daylight; warm, matte, never a cool blue-white. Paper runs from `--sf-paper-050 #FFFDFA` (cards)
down to `--sf-paper-500 #E4DDD2` (the gradient floor and chip fills); text is warm near-black ink
(`--sf-ink-900 #161311`), secondary `--sf-ink-700 #3D3833`, tertiary `--sf-ink-500 #7A7168`.
Note that these are a *warmer, lower-contrast* ramp than the pure-grey `--sf-char-*` scale, which
survives for the logo marks and inverse UI. On light grounds the accents step one notch darker so
they hold contrast: ember becomes `--sf-ember-650 #C4551F`, azure `--sf-azure-550 #3A67AF`, olive
`--sf-olive-650 #5C6E36`; on dark they revert to the brighter 500/400 steps. Three accents with a
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
Warm ink (`--surface-inverse`, `#161311`) is the high-contrast counterpart for tooltips, toasts,
and the occasional full-bleed inverse panel.
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

**Backgrounds:** never a flat fill. The page ground is a shallow warm gradient fixed to the
viewport — `--gradient-app`, `linear-gradient(160deg, #FBF8F3 0%, #F1ECE4 45%, #E4DDD2 100%)`
with `background-attachment: fixed`, so content moves and the light does not. The one texture in
the system is a **45° hatch**: a 6px tile, `--sf-ink-300 #2A2521` stroke at low opacity, used to
give intro/curtain sheets a printed, drafting-paper quality (`assets/textures/hatch.svg`; see the
"Page ground" card). Radial accent glows belong to the dark treatment only — on paper they read as
smudges. Full-bleed photography is used for one thing so far: square founder portraits, 1px
`--border-subtle` outline, no radius, no filter (`assets/imagery/`). Imagery is warm and neutral,
never tinted or duotoned.

**Animation:** two registers, and the distinction matters.

*UI motion* is quick and mechanical, never bouncy or springy. Standard easing is a fast ease-out
(`--ease-standard`, `cubic-bezier(0.2,0,0,1)`) — a stamp press engaging, not an element floating
into place. Durations are short (120–360ms). Colour transitions on nav and links run at 200ms;
opacity cross-fades at 360ms; the long reveal fades at 900ms.

*The site's ambient motion* is a deliberate exception and is much more elaborate: an intro video
that cross-fades into the page, a three-band parallax starfield with a continuous forward dolly,
accent zoom-streaks that appear only while travelling, chapters that pan sideways along a shallow
arc with a custom eased snap (~3s glide, quintic tail), and a slowly rotating mission loop with
particle flow into a spinning world-model globe. Everything shares the same
`cubic-bezier(0.2,0,0,1)` and the same principle — the camera drifts, elements do not bounce. Do
not import this ambient layer into product UI or decks; it belongs to the marketing site.

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
a translucent warm ink) and for sticky nav once scrolled (subtle blur + `--surface-nav-blur`, a
translucent paper fill, so content is legible passing underneath). Not used as a general
"glassmorphism" surface treatment elsewhere.

**Text protection:** where copy has to sit over a graphic (the mission copy block overlapping the
loop diagram), the brand uses a **six-direction `text-shadow` halo in the background colour**
rather than a capsule, scrim, or blur panel — the type stays unboxed and the graphic stays
uninterrupted. Copy that pattern rather than inventing a container.

**Layout:** chapters and hero content sit on a doubled left page margin
(`calc(var(--page-margin) * 2)`) with a **2px vertical rule** in `--border-default` set 22px into
that margin, sized to the exact height of the content beside it — the system's one recurring
structural mark. Nav is fixed bottom-centre, lowercase mono labels separated by 4px ember dots.
The mark sits fixed at 26px from the top-left corner.

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
- `assets/logo/` — the Aleph mark: `aleph-mark-light/dark.svg`, lockups
  (`aleph-lockup-stacked-*`, `aleph-lockup-horizontal-*`), monochrome (`aleph-mono-*`), and the
  mirror alternate. Legacy `sf-mark*.svg` files are archival.
- `assets/logos/` — founder credential marks (Google AI, YouTube, Amazon, Google, CleverSense,
  Stanford), in dark and light variants where both exist.
- `assets/textures/hatch.svg` — the 45° hatch used on intro sheets.
- `assets/imagery/` — founder portraits (`founder-jad.webp`, `founder-nima.webp`).
- `assets/fonts/` — the substituted webfont binaries.
- `guidelines/` — foundation specimen cards for the Design System tab (Colors, Type, Spacing,
  Brand groups), including the paper & ink ramp, the page ground (gradient + hatch), the dark-theme
  scope, logo variants and partner logos.
- `components/core/` — Button, IconButton, Badge, Tag, Card.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Tooltip, Toast, Dialog.
- `components/navigation/` — Tabs, NavLink.
- `ui_kits/marketing/` — recreation of superfoundry.dev: intro curtain plus the four chapters
  (foundry, mission, founders, contact) and the bottom nav. See its own `README.md` for what is
  deliberately not recreated. The only product surface, since no app exists yet.
- `templates/marketing-page/` — a conventional scrolling landing page built from the primitives.
- `templates/slide-deck/` — 9-slide 16:9 deck: title, section divider, big stat, bar / line /
  donut charts, comparison table, inverse quote, closing.
- `thumbnail.html` — the system's tile on the project homepage.
- `SKILL.md` — portable skill file for using this system in Claude Code or elsewhere.

### Intentional additions

No source defined a component inventory (no codebase, no Figma), so per instructions this system
authors the standard primitive set sized to a marketing site's needs: Button, IconButton, Badge,
Tag, Card, Input, Select, Checkbox, Radio, Switch, Tooltip, Toast, Dialog, Tabs, NavLink. All of
these are original to this system, not lifted from an existing product.
