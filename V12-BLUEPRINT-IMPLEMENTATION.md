# Pajee SEO V12 — Blueprint Implementation

## Shared UX system

All nine tools use one maintainable component system while retaining a distinct purpose-led report design:

- statistics, KPI, score and comparison cards
- circular gauges, radar, line, bar, stacked bar, donut, scatter and funnel visuals
- responsive tabs, accordions, drawers and tooltips
- searchable, sortable and paginated evidence tables
- skeleton loading and partial-data notices
- verified, estimated, live, invalid and unavailable source badges
- mandatory AI Insights and 30/60/90-day roadmap
- PDF/print, CSV, Excel-compatible and Google-Sheets-ready exports
- mobile export action and touch-friendly controls

## Tool implementation

### Complete SEO Growth Report

A single Growth Readiness view combines keyword opportunity, Mobile/Desktop performance, website health, public/verified visibility, authority evidence, executive summary and a connected 90-day plan.

### AI Growth Roadmap

Includes current-state KPIs, impact-versus-effort matrix, competitor gap comparison, phased roadmap, task-board structure, measurement plan, dependencies and goal-specific AI Insights.

### Whole Website SEO Audit

Supports discovery and batched crawl up to 500 URLs, live progress, site-health pillars, severity filters, page-by-page explorer, technical tabs, content, images, internal links, authority context and exportable evidence.

### Keyword Intelligence

Includes intent distribution, clusters, transparent demand ranges, content gaps, page matching, SERP/PAA evidence states, AI recommendations and phased content plan.

### PageSpeed & Core Web Vitals

Includes separate Mobile/Desktop reports, four Lighthouse score gauges, actual CrUX LCP/INP/CLS where available, screenshots, filmstrip, opportunity savings, resource evidence, causes and issue-specific fix guidance.

### Organic Search Performance

Separates Public Estimate from Verified Google data. The unified Google report contains Search Console and GA4 tabs, shared date comparisons, query/page/device/country/search-appearance/sitemap and analytics dimensions, and proper pagination.

### Traffic & Behaviour Analytics

Separates public traffic bands from verified GA4. Includes acquisition mix, discoverability profile, behaviour bands, funnel explanation, conversion measurement recommendations and GA4 connection path.

### Backlink & Authority Intelligence

Gemini is optional. Quota/model/credential failures automatically fall back to public discovery and live HTML verification. Search Console exports are imported, referring domains and anchors are analysed, evidence is paginated, and Pajee Authority remains a transparent Pajee metric rather than a Google/Ahrefs claim.

### Schema Intelligence

Two clear workflows—Analyse and Generate—with Single Page/Whole Website scope, sitemap discovery, page-wise coverage, valid/invalid/missing statuses, recommendations, relevant generation, JSON-LD preview, download/copy and official validation links.

## Responsive implementation

The layout system includes explicit desktop, tablet and mobile breakpoints. Report identities, action controls, charts, forms, KPI grids, roadmaps, schema pickers, table controls and pagination stack or wrap according to available width. Dense evidence tables are isolated in local horizontal scrollers rather than forcing the entire page to overflow.
