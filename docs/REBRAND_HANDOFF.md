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
- Public-domain reassignment in Vercel after confirming the deployed commit.
- Portal return-link update to the new public domain.
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
- Production inbox delivery, GitHub publication, deployment, and custom-domain reassignment are not completed.
- ESLint 10 runs successfully; some bundled upstream plugins still declare peer ranges ending at ESLint 9 and npm emits peer warnings.
