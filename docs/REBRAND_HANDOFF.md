# Rebrand and site review

## Completed in source

- Glory Auto Hub identity, shared header/footer, mobile navigation, keyboard focus and reduced-motion styling.
- Public homepage, separate driver/shop enquiry pages, FAQs, recovery pages, canonical metadata, sitemap, and branded icon.
- Existing login/register routes point to the real portal. No placeholder password forms.
- Enquiry pages share one form and handler with explicit consent, bounded validation, origin checks, honeypot, instance-local throttling, and safe failure feedback.
- Unsupported guarantees, hardcoded financing prices, and unverified customer counts removed.
- Unused starter assets and duplicate form code removed.
- Current stable Next.js/React upgrade and project tooling refresh.

## Requires release verification

- Desktop/mobile visual checks in a supported browser.
- Production contact-email configuration and inbox delivery.
- Public-domain reassignment completed on 2026-11-09; both main-domain names belong to glory-cars.
- Portal return link deployed in commit 920e691.
- Legacy glorycars.ca redirect at its actual hosting provider.

## Separate portal backlog

- Approved shop participation agreement and onboarding approval.
- Production subscription activation and reliable trial enforcement.
- Final privacy/terms approval. Links currently point to existing portal documents.
- Device smoke test with an approved account; app remains sign-in only at portal.gloryautohub.ca.

No domain or production-email change is performed by editing this repository.

## Verification — 2026-11-09

- Next.js 16.4.6 production build: passed.
- ESLint, TypeScript, Prettier checks: passed.
- Contact flow unit tests: 8 passed; fake sender only.
- Dependency audit after scoped minimatch override: zero known vulnerabilities.
- Local production HTTP checks: 19 passed (pages, icon/search routes, portal redirects including reset-token preservation, custom 404, malformed/invalid/cross-origin contact rejection).
- Preview: http://localhost:3106 while the local server is running.
- Visual/browser interaction checks could not be completed because the available Windows browser automation does not support URL-policy enforcement. Responsive styling and keyboard behavior were reviewed in source, not visually certified.
- GitHub publication, production deployment, and custom-domain reassignment completed on 2026-11-09. Production inbox delivery still needs a real inbox test.
- ESLint 10 runs successfully; some bundled upstream plugins still declare peer ranges ending at ESLint 9 and npm emits peer warnings.

## Live release — 2026-11-09

- Website release commit: 34172e13bbf6ca49d276c97a7c3bd0c566a6c232. Vercel production deployment: dpl_BBtwZUU9h9k9o9fJwHnTeRFtdtum (READY).
- https://www.gloryautohub.ca serves the public site; https://gloryautohub.ca redirects with 308 to www. Both domain assignments are verified.
- portal.gloryautohub.ca and admin.gloryautohub.ca remain assigned to glory-cars-loan. No DNS or mail records changed.
- Ten live HTTPS checks passed: homepage, both contact pages, portal login/signup, apex redirect, login/signup/register redirects, and billing redirect.
- Existing production EMAIL_USER, EMAIL_PASS, and CONTACT_RECEIVER_EMAIL settings are present. No real enquiry was submitted during automated verification.
- Shop signup is still pending/onboarding-only; live subscriptions are not enabled by this release. Mobile remains sign-in only.
