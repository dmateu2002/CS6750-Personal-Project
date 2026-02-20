# What I Built

## 1) New folder structure
I created a new folder:
- `website/`

This keeps your app code separate from your promo website.

## 2) New marketing website
I built a complete static landing page with:
- Hero section and value proposition.
- Feature highlights based on your app architecture.
- Pricing section showing `Free`.
- FAQ section containing necessary launch information.
- Multiple App Store CTA buttons.
- Mobile responsive behavior.
- Reveal-on-scroll animation.

Files:
- `website/index.html`
- `website/styles.css`
- `website/script.js`

## 3) App Store link handling
I centralized the App Store link in one place:
- `website/script.js`

Edit this line:
- `const APP_STORE_URL = "https://apps.apple.com/us/app/momentum/id0000000000";`

After updating it once, all CTA buttons update automatically.

## 4) Brand and content choices
I aligned the site with the app's current direction observed in code:
- Midnight/cyan style direction from `Core/MomentumTheme.swift`.
- Core pillars from UI: Win Board, Journal/Scanner, Network.
- Messaging around consistency and accountability.

## 5) Files added for future AI collaboration
I added:
- `website/GEMINI.md`: explicit project instructions for future edits.
- `website/BETTER_PROMPT.md`: improved prompt template for future requests.

## 6) What you should do next
1. Replace `APP_STORE_URL` in `website/script.js` with your real App Store link.
2. Optional: Add real screenshots and testimonial quotes in `website/index.html`.
3. Deploy `website/` to `mntm.io` via your hosting provider.

## 7) Important note
I did not move or rename existing iOS app files to avoid breaking your current Xcode project.
