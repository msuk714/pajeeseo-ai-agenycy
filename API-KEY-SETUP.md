# Vercel Environment Variables — Pajee SEO V12

Add these under **Vercel → Project → Settings → Environment Variables** for Production and Preview.

```env
GEMINI_API_KEY=
GEMINI_MODEL=gemini-3.5-flash
BACKLINK_GEMINI_ASSIST=true

GOOGLE_PAGESPEED_API_KEY=
GOOGLE_CRUX_API_KEY=
OPENPAGERANK_API_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=https://YOUR-PROJECT.vercel.app/api/google/callback
SESSION_SECRET=replace-with-a-long-random-secret

RESEND_API_KEY=
CONTACT_FROM_EMAIL=Pajee SEO <onboarding@resend.dev>
CONTACT_TO_EMAIL=pkitsol@gmail.com
```

## Google OAuth routes

```text
/api/google/auth
/api/google/callback
```

The Google Cloud authorised redirect URI and `GOOGLE_REDIRECT_URI` must match exactly.

## Optional Gemini behaviour for backlinks

```env
BACKLINK_GEMINI_ASSIST=true
```

- `true`: Gemini may improve public discovery queries.
- `false`: backlink discovery uses public-search and live-verification logic directly.
- Missing key, exhausted quota, invalid model, permission error, timeout, or temporary outage: the tool automatically continues with fallback discovery.

Use exactly:

```env
GEMINI_MODEL=gemini-3.5-flash
```

## Search Console backlink imports

The importer accepts CSV, semicolon CSV, TSV and plain URL/domain lists. Appropriate exports include **Latest links**, **More sample links**, and **Top linking sites**. A **Top linked pages** export contains destination pages rather than backlink sources and is explained to the user instead of being treated as a valid source list.
