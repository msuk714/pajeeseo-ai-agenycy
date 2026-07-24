# Deploy Pajee SEO V12 on Vercel

## GitHub structure

Upload the ZIP contents directly to the repository root. The repository must show:

```text
index.html
vercel.json
package.json
api/
lib/
assets/
tools/
results/
reports/
services/
```

Do not upload an extra parent folder around these files.

## Vercel settings

```text
Framework Preset: Other
Root Directory: blank
Build Command: blank
Output Directory: blank
```

Add the environment variables from `API-KEY-SETUP.md`, then deploy. After replacing an older build, redeploy without the existing build cache.

## Production checks

1. Open `/api/router?action=health`.
2. Run PageSpeed on one public URL in Mobile and Desktop mode.
3. Run Keyword Intelligence and AI Roadmap.
4. Connect Google and verify both Search Console and GA4 tabs inside `/reports/google-performance/`.
5. Run Backlink Intelligence with discovery mode and a Search Console export.
6. Run Schema Intelligence in Single Page and Whole Website mode.
7. Submit the contact form and confirm the Resend recipient.

Live responses depend on API keys, quotas, Google property permissions and the target website allowing public crawling.
