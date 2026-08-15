# FlipBit — Landing Page Brief

You are building a one-page marketing site for **FlipBit**, an iOS to-do app. Read
this whole file before writing code. The app's design language already exists —
your job is to extend it to the web, not to invent a new one.

---

## 1. Deliverable

- A single **`landing/index.html`**, self-contained: all CSS in one `<style>`
  block, all JS in one `<script>` block. No build step, no framework, no bundler.
- Images live in **`landing/images/`** (see §6). They are the only external files.
- Must open correctly by double-clicking the file — no local server required.
- One exception to "no external requests": the Google Fonts `<link>` in §4.
- Target: static hosting (Netlify/Vercel/GitHub Pages). Nothing server-side.

---

## 2. What FlipBit actually is

Do not embellish past this list. Every claim on the page must be true.

A to-do app built on one idea: **a task is a bit. It is 0 or 1. Nothing else.**

- Tasks are grouped by day. A day is a row of bits — a register.
- The checkbox is not a tick, it's the **digit itself**. Tapping flips `0` → `1`.
- Each day shows a **bit strip** of all its tasks, and a readout of that day as a
  single number. Tap the readout to cycle notation: **BIN → OCT → HEX**.
- The week is seven stacked day rows, each a little darker than the one above —
  depth alone says "further away." No borders, no shadows, no cards.
- **Home screen widgets**: a medium "Day" widget and a large "Week" widget. Bits
  can be flipped straight from the home screen without opening the app.
- **Records sheet**: long-press the header to see the raw week exactly as it sits
  on disk — read-only, copyable JSON. It's a trust device: proof the app isn't
  hiding machinery behind a minimal surface.
- **Local-first.** SQLite on device. No account, no sync, no server, no tracking.
- Light and dark, following the system.
- iOS only.

### Things it deliberately does NOT have — worth saying out loud on the page

No projects. No tags. No priorities. No due dates. No streaks. No notifications
nagging you. No red "overdue" styling — the app never makes you feel behind.

### Voice

Terse, declarative, confident. Short sentences. Lowercase-y engineering calm.
The app's own copy sets the register: *"Today as one register."* / *"Seven days,
seven registers."* / *"Nothing here."* / *"All done."*

**Never** write marketing filler: no "revolutionize", "supercharge", "effortlessly",
"game-changer", "in today's fast-paced world", no exclamation marks.

---

## 3. Page structure

Single column, centered, `max-width: 1040px`. In order:

1. **Nav** — tiny. App icon (`images/icon.png`, 28px, `border-radius: 22%`) +
   wordmark "FlipBit" on the left. Theme toggle on the right. Nothing else.

2. **Hero**
   - H1: `A task is a bit.` — set in the display face, large, tight leading.
   - Sub: one or two sentences. Something like: *"Zero or one. That's the whole
     model. FlipBit is a to-do app for people who want the list to stay a list."*
   - The **interactive bit strip** (§5) directly under the sub. This is the hero's
     centerpiece — it earns more attention than the button.
   - App Store button. Use `{{APP_STORE_URL}}` as the href placeholder and leave a
     `<!-- TODO -->` comment; the real URL isn't ready yet.
   - Under it, small muted text: `iOS · Free · No account · Works offline`

3. **Screenshots** — the four phone frames (§6). This is the largest visual block
   on the page and should feel like the payoff.
   - Desktop: a single row of 4, slight negative margin so it can bleed a touch
     wider than the text column. No frames, no borders, no drop shadows on the
     images — they already contain a device frame with transparent corners.
   - Under each, one line of caption in the mono face, muted, ~13px.
   - Mobile: horizontal scroll-snap carousel, one-and-a-bit visible, no scrollbar.

4. **Features** — a 2×3 grid (1 column on mobile). Six items, each a 2–4 word
   title plus one sentence:
   - *The bit is the checkbox* — Tap the digit. It goes 0 to 1. There is no
     second state to learn.
   - *A day is a register* — Every task in a day, in a row, readable at a glance
     as one number.
   - *BIN · OCT · HEX* — Tap the readout to reread the same day in another base.
   - *Flip from the home screen* — Day and Week widgets. Check things off without
     opening the app.
   - *Your data, on your phone* — SQLite on device. No account, no server, no
     analytics.
   - *Read the raw records* — Long-press the header for the week exactly as it's
     stored. Nothing is hidden.

5. **The "no" section** — one wide, quiet band. A heading like `What it doesn't do.`
   and the anti-features from §2 as a plain wrapped list of mono chips. This is a
   feature section, so give it the same weight as one. Muted colors, no accent.

6. **Footer** — one line. `FlipBit` · Privacy · Source (if public) · your name ·
   year. Muted, small, generous space above it.

Then stop. **Do not add**: testimonials, pricing tables, FAQ accordions, email
capture, cookie banners, logo clouds, "as seen in", animated gradient blobs,
social proof counters.

---

## 4. Design system

### Color — copy these exactly from `constants/colors.js`

Define as CSS custom properties on `:root` for light, and override the same names
under both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]` so the
manual toggle wins in both directions.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FAFAF9` | `#0B0B0D` |
| `--surface` | `#FFFFFF` | `#1C1C1E` |
| `--tile` | `#F2F2F1` | `#151518` |
| `--text` | `#1C1C1E` | `#F2F2F3` |
| `--muted` | `#8E8E93` | `#9B9BA1` |
| `--done` | `#AEAEB2` | `#5F5F63` |
| `--border` | `#E5E5EA` | `#2C2C2E` |
| `--accent` | `#D2481F` | `#D2481F` |

**One accent, and that's it.** `#D2481F` in both themes — it's chosen to hold
4.48:1 against the white "1" that sits inside a filled bit, and 4.39:1 against the
dark background. Do not lighten it for dark mode. Do not introduce a second hue,
a success green, or a gradient. Emphasis that isn't the accent is done with
*depth* — a step along the background ramp — never with a new color.

**No red anywhere.** No borders or shadows to create separation; use the tile
color instead, the way the app does.

### Type

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@500;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

- **Archivo Narrow 700** — H1, section headings, the wordmark. Uppercase for
  section headings with generous `letter-spacing`, matching the app's day names.
- **JetBrains Mono 400/700** — every digit on the page, captions, chips, the
  `BIN/OCT/HEX` tag, small labels. Its dotted zero and serifed one are the reason
  it's here; digits must never render in a fallback face.
- **Body copy**: the system UI stack
  (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
  Archivo is a display face — don't set paragraphs in it.

### Layout feel

Generous vertical rhythm (sections ~96–128px apart on desktop, ~64px on mobile).
Everything left-aligned on one axis, including the hero — the app is strict about
this. Centered text only in the footer, if at all. Rounded corners: 10px on small
elements, 14px on tiles. Respect `prefers-reduced-motion` by disabling all
animation and autoplay.

---

## 5. The one interactive element

A working bit strip in the hero. This is the page's whole argument, made
playable — spend real effort here and nowhere else.

- A row of ~12 bits. Each is a square tile (`--tile` background) with a mono digit
  centered in it. Unfilled = `0`, digit in `--muted`. Filled = `1`, background
  `--accent`, digit white.
- Click or tap a bit to flip it. The transition is quick and physical:
  ~140ms `cubic-bezier(0.2, 0, 0, 1)`, with a small scale dip (0.94 → 1) on press.
  No bounce, no spring overshoot, no confetti.
- To the right of the strip, a readout of the strip as a number, with a small tag
  chip reading `BIN` / `OCT` / `HEX`. Clicking the readout cycles the notation in
  that order — by base, ascending. Decimal is deliberately excluded: it produces a
  number that can be mistaken for a count of tasks.
- The strip starts with a few bits already set, so its initial state reads as
  "a real day" rather than as an empty control.
- Keyboard accessible: each bit is a real `<button>` with
  `aria-pressed`, reachable by Tab, flippable with Space/Enter.
- Under it, one muted mono line: `tap a bit.`

Do not animate anything else on the page. No scroll-triggered reveals, no
parallax, no typewriter effect, no counters ticking up.

---

## 6. Images

Four iPhone 17 Pro frame screenshots go in `landing/images/`. **They are not in
the repo yet** — the user will drop them in. Reference them by these exact names
and write the markup so it works the moment the files land:

| File | Expected content | Caption (mono, muted) |
|---|---|---|
| `images/shot-week.png` | The week view, seven stacked day rows | `the week, seven registers` |
| `images/shot-day.png` | A day open with its task list and bits | `a day, open` |
| `images/shot-widget.png` | Home screen widgets | `flip from the home screen` |
| `images/shot-source.png` | The records sheet | `the raw records` |

If a file is missing, the slot must degrade to a neutral `--tile` placeholder of
the same aspect ratio rather than a broken-image icon — the layout should never
shift when the real files arrive.

Requirements: `loading="lazy"` on all but the first, explicit `width`/`height` (or
`aspect-ratio`) to reserve space, a real descriptive `alt` on each, and
`max-width: 100%`. Also copy `assets/icon.png` to `landing/images/icon.png` for
the nav and favicon.

---

## 7. Non-negotiables

- **Accessible**: semantic landmarks (`<header> <main> <section> <footer>`), one
  `<h1>`, headings in order, visible focus rings (use `--accent`), all interactive
  elements real buttons/links, contrast ≥ 4.5:1 for body text in both themes.
- **Responsive**: works at 320px through 2560px. The body must never scroll
  horizontally — the screenshot carousel scrolls inside its own container.
- **Theme toggle** persists to `localStorage` and defaults to system. No flash of
  the wrong theme on load: set `data-theme` from an inline script in `<head>`
  before the body paints.
- **Meta**: `<title>FlipBit — A task is a bit.</title>`, a meta description, Open
  Graph + Twitter card tags (`og:image` → `images/shot-week.png`), `theme-color`
  for both schemes, favicon from the app icon.
- Total page weight under 1.5MB with images. Compress the screenshots.
- No tracking scripts. No third-party embeds. The privacy claim on the page has to
  be true of the page itself.

---

## 8. Done when

- [ ] `landing/index.html` opens standalone and renders correctly with no console errors
- [ ] Bit strip flips on click and on keyboard; readout cycles BIN → OCT → HEX
- [ ] Light and dark both correct; toggle persists; no flash on reload
- [ ] Four screenshot slots present, captioned, and gracefully empty if files are missing
- [ ] No horizontal scroll at 320px
- [ ] Exactly one accent color used, `#D2481F`, in both themes
- [ ] Every claim on the page is true of the shipped app
- [ ] Zero words from the banned-filler list in §2
