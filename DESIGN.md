# AuraFlow design system: "Loom"

A workflow is a set of threads that cross at each step, so AuraFlow borrows
from weaving: undyed linen ground, threads in natural dye colours, walnut ink.
The hero canvas draws each connection as a thread on a warp-lined cloth, and
each step as a tagged swatch with a coloured selvedge.

## Colour (`frontend/src/index.css` `:root`)
| Token | Value | Use |
|---|---|---|
| `--bg` / `--bg2` / `--bg3` | `#F2EEE6` / `#FBF9F5` / `#E9E3D7` | linen ground, cards, insets |
| `--t1` / `--t2` / `--t3` | `#2A2420` / `#5A524B` / `#7A716A` | walnut ink |
| `--in` | `#23395B` | indigo dye: primary buttons, links, active states |
| `--cy` / `--pk` / `--re` | `#B0412E` | madder: accent words, section underline, errors |
| `--em` | `#4F7A3A` | moss: success, secondary accent words |
| `--am` | `#B88A1E` | weld yellow: warnings, popular-plan tag |

Every old indigo/cyan/emerald/pink literal (CSS and JSX) is mapped to these
dyes. No gradients, glows or glass; the logo is four crossing threads.

## Type
Petrona for headlines and big numbers (accent words in italic); Karla for UI
and body. No tracked uppercase labels.

## Components
- Section tags: sentence case with a madder underline.
- Buttons: 4px radius; primary indigo, secondary ink outline.
- Feature icons: one stroke SVG set (`src/components/Icon.jsx`), no emoji.
- Featured price card: indigo with linen text.
- Dashboard nav: inset madder edge on the active item; on screens under
  900px the sidebar becomes a top bar with a scrolling nav strip.

## Motion
Hero threads keep their stitch-flow animation, off under `prefers-reduced-motion`.
