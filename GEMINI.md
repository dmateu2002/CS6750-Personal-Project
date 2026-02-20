# Website Maintenance Guide (Momentum Marketing Site)

## Scope
This folder is a standalone static marketing site for `mntm.io`.

- No framework
- No build step
- No dependency install required
- Edit files directly and deploy as static assets

## Files
- `index.html`: page structure and content
- `styles.css`: full design system, layout, and animations
- `script.js`: behavior and centralized App Store URL
- `WHAT_I_BUILT.md`: implementation notes and deployment steps

## Critical Rule: App Store URL
All "Download on the App Store" buttons are wired through:

- `script.js` -> `APP_STORE_URL`

Only change the URL in one place:

```js
const APP_STORE_URL = "https://apps.apple.com/us/app/idXXXXXXXXXX";
```

Do not hardcode App Store links in HTML.

## Content Editing
Update copy in `index.html`:
- Hero headline and subheadline in `.hero-copy`
- Feature descriptions under `#features`
- FAQ entries under `#faq`
- Footer brand/domain line

## Design Editing
Use existing CSS variables in `styles.css` (`:root`) before adding new values:
- Color tokens: `--bg`, `--surface`, `--accent`, `--text`, etc.
- Radius/shadow tokens: `--radius`, `--shadow`

Prefer token changes over one-off hardcoded styles.

## Animation Notes
Reveal animations use:
- `.reveal` CSS class
- `setupRevealAnimations()` in `script.js`

If motion must be reduced, keep support for:
- `@media (prefers-reduced-motion: reduce)`

## Accessibility
When editing:
- Keep semantic sectioning (`header`, `main`, `section`, `footer`)
- Preserve heading order (`h1` -> `h2` -> `h3`)
- Maintain sufficient contrast
- Keep the skip link in place

## Deployment
Deploy the entire `website/` directory as static files to your host.
Ensure `index.html` is served from the domain root.

