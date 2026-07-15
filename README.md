# PajeeSEO Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS build of the PajeeSEO agency website.
Homepage includes the redesigned hero (animated "live results" panel), the AI Agents flagship
section, and the Portfolio section with expandable keyword-proof case study cards.

## Pages included

- `/` — Home (Hero, AI Agents flagship section, Portfolio, CTA banner)
- `/portfolio` — full Portfolio page
- `/services`, `/about`, `/blog`, `/contact` — scaffolded, contact page has a working proposal form UI

Services (`/services`), About, and Blog are placeholder pages for now — same design system,
full layouts to be built in the next pass along with the individual service detail pages
(Digital Marketing, Web & App Development, UI/UX Design, Content Marketing, AI Agents &
Automation).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy — GitHub + Vercel

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial PajeeSEO website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/pajeeseo-website.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the GitHub repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Once live, go to your Vercel project → **Settings → Domains** and add `pajeeseo.com`,
   then point your domain's DNS to Vercel as instructed there.

Every push to `main` auto-deploys; every pull request gets its own preview URL.

## Before real launch

- Replace the WhatsApp number placeholder (`wa.me/00000000000`) in `components/WhatsAppFab.tsx`
  and `app/contact/page.tsx` with the real business number.
- Wire `components/ProposalForm.tsx` to a real submit endpoint (e.g. a Vercel serverless
  function at `app/api/contact/route.ts`, or a service like Formspree) — it currently only
  shows a success state client-side.
- Swap placeholder case-study data in `components/PortfolioSection.tsx` for real client
  results, keywords, and URLs.
- Add GA4 / Search Console verification and `sitemap.xml` / `robots.txt` before launch
  (see the Blueprint document, Section 9).
