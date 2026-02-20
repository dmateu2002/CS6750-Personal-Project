# WHAT I BUILT: Momentum Marketing Website

## Summary
Built a standalone premium marketing site in `website/` for `mntm.io` using plain HTML/CSS/JS.

No iOS app files were modified.

## Delivered Files
- `website/index.html`
- `website/styles.css`
- `website/script.js`
- `website/GEMINI.md`
- `website/WHAT_I_BUILT.md`

## Detailed Changelog

### 1) Structure (`website/index.html`)
Implemented a single-page semantic layout:
- Sticky header with brand, nav links, and App Store CTA
- Hero section with strong value proposition and tactical visual panel
- Features section with three app pillars:
  - Win Board
  - AI Journal/Scanner
  - Network
- Pricing section explicitly set to `Free`
- FAQ section using native `<details>`/`<summary>` for accessible disclosure
- Footer with brand/domain and CTA
- Real Momentum logo assets integrated from app `Logos/` folder:
  - Header icon
  - Hero wordmark
  - Footer icon

Accessibility and semantics included:
- Skip link (`Skip to content`)
- Proper `header/main/section/footer` structure
- Clear heading hierarchy
- Descriptive labels and readable content structure

### 2) Visual System (`website/styles.css`)
Built a custom high-end visual style:
- Custom color token system in `:root`
- Layered gradients + radial glows + masked grid treatment
- Distinct tactical typography:
  - `Space Grotesk` for primary copy
  - `IBM Plex Mono` for system/data tone
- Reusable button system and card surfaces
- Purposeful section contrast and depth
- Responsive behavior for desktop/tablet/mobile

Motion and UX:
- Scroll-reveal transitions via `.reveal` classes
- Reduced-motion fallback with `prefers-reduced-motion`
- Hover/focus states for interactive elements

### 3) Behavior (`website/script.js`)
Added maintainable JS behaviors:
- Centralized App Store URL constant:
  - `const APP_STORE_URL = "..."`
- Automatic wiring of all CTA links using `[data-appstore-cta]`
- IntersectionObserver reveal animation initialization

This ensures every App Store button updates from one URL constant.

## How to Edit

### Update App Store link (single source)
Edit:
- `website/script.js`

Change:
```js
const APP_STORE_URL = "https://apps.apple.com/us/app/idXXXXXXXXXX";
```

### Update copy
Edit:
- `website/index.html`

Common areas:
- Hero headline and subtext
- Feature copy blocks
- FAQ questions/answers
- Footer brand/domain text

### Update branding/design
Edit:
- `website/styles.css`

Start with `:root` tokens for global updates:
- Colors
- Radius
- Shadow

### Update logo assets
Current logo files used by site:
- `website/assets/logos/momentum-icon.png`
- `website/assets/logos/momentum-wordmark.png`

To swap logos, replace those files and keep the same names, or update paths in:
- `website/index.html`

## How to Run Locally
From repository root:

```bash
cd website
python3 -m http.server 8080
```

Open:
- `http://localhost:8080`

## Deployment (Static)
Deploy `website/` as static files on your host.

Minimum required:
- Serve `index.html` at domain root
- Serve `styles.css` and `script.js` from same directory

## Notes
- Current App Store URL is a placeholder in `script.js`.
- Replace before production launch.
