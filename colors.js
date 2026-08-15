// Palette rationale (see binary-todo-reddit-research.md):
// - One accent only. The research's core lesson is "don't add complexity" —
//   that includes visual complexity, so there's no separate success/warning/
//   info hue, just one accent used for every emphasis (add button, checkbox
//   fill, focus state).
// - No red anywhere. §19 explicitly rejects "overdue guilt" styling; `danger`
//   below is a muted rose used only for the delete-swipe affordance, never
//   for task state. The burnt orange below is a *completion* colour — it
//   only ever appears on a bit that's already been switched to 1 — so it
//   doesn't reintroduce the guilt signalling that rule exists to prevent.
// - Backgrounds are off-black/off-white, not pure #000/#FFF, since this is
//   an app meant to be opened many times a day.

// One value for both themes. The instinct in dark mode is to lift the
// accent for a near-black background, but every brighter orange trades
// away the thing the accent actually has to carry: the white "1" inside a
// completed bit. #E8663C measures 3.28:1 behind that digit and #F2703F
// only 2.93:1, both under the 4.5:1 small-text minimum, while this value
// holds 4.48:1 on the digit and still reads 4.39:1 against #0B0B0D.
const accent = '#D2481F';
const accentDark = accent;

// The week list is a gradient of stacked bars: the top of the week sits
// nearly flush with the background and each day below it steps a little
// darker, so depth alone communicates "further away" without a single
// border or shadow. `mixHex` interpolates that ramp between the two
// `shade*` stops below.
export function mixHex(a, b, t) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (shift) => {
    const va = (pa >> shift) & 0xff;
    const vb = (pb >> shift) & 0xff;
    return Math.round(va + (vb - va) * t);
  };
  const hex = ((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1);
  return `#${hex}`;
}

// Task rows are tinted with the accent at low alpha rather than a
// separate grey, so the unchecked bit reads as *available* instead of
// disabled without introducing a second hue to the palette.
export function withAlpha(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 0xff}, ${(n >> 8) & 0xff}, ${n & 0xff}, ${alpha})`;
}

export const Colors = {
  light: {
    background: '#FAFAF9',
    surface: '#FFFFFF',
    // One step along the same background→shadeTo ramp the week bars use
    // (t ≈ 0.12), so a task tile lifts off the page by depth alone — no
    // border, no shadow — exactly like the collapsed day rows above it.
    // `surface` can't do this job in light mode: #FFFFFF on a #FAFAF9
    // background is a 2-value difference and reads as flat.
    taskSurface: '#F2F2F1',
    text: '#1C1C1E',
    textMuted: '#8E8E93',
    textDone: '#AEAEB2',
    border: '#E5E5EA',
    shadeFrom: '#ECECE9',
    shadeTo: '#B6B6B2',
    accent,
    danger: '#D97A6C',
  },
  dark: {
    background: '#0B0B0D',
    surface: '#1C1C1E',
    // Same idea, further along the ramp (t ≈ 0.18): near-black needs a
    // wider step than off-white before the lift is visible at all.
    taskSurface: '#151518',
    text: '#F2F2F3',
    textMuted: '#9B9BA1',
    textDone: '#5F5F63',
    border: '#2C2C2E',
    shadeFrom: '#1A1A1D',
    shadeTo: '#434348',
    accent: accentDark,
    danger: '#E08B7D',
  },
};

export default Colors;
