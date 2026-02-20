# GEMINI.md

## Project context
This `website/` directory contains the marketing site for Momentum (`mntm.io`).
The iOS app code remains in the repository root and was not moved.

## Site goals
- Promote the Momentum app with a strong brand voice.
- Communicate essential launch info quickly.
- Keep pricing explicitly visible as **Free**.
- Route all primary call-to-actions to the App Store.

## Tech stack
- Static site: HTML + CSS + vanilla JavaScript.
- No build step required.

## File map
- `website/index.html`: page structure and content.
- `website/styles.css`: visual design, responsive layout, animations.
- `website/script.js`: App Store URL injection and reveal-on-scroll behavior.
- `website/WHAT_I_BUILT.md`: detailed implementation notes.
- `website/BETTER_PROMPT.md`: improved reusable prompt.

## Critical editing rule
If you need to change the App Store destination, edit this constant only:
- `website/script.js` -> `APP_STORE_URL`

All page buttons with `data-app-store-link` update automatically.

## Content rules
- Keep messaging concise, tactical, and consistency-focused.
- Preserve the current value proposition: Win Board, AI Journal, Network.
- Keep pricing as `Free` unless explicitly changed by the owner.

## Design rules
- Preserve the midnight + cyan + lime visual identity.
- Keep custom typography (`Space Grotesk`, `IBM Plex Mono`) unless replaced intentionally.
- Maintain mobile responsiveness and readable contrast.

## Deployment notes
Any static hosting works (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
Deploy the `website/` folder contents to `mntm.io`.
