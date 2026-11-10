# Glory Auto Hub — public website

Public repair-financing website, rebranded from Glory Cars. This repository does not create user accounts or store loan applications.

## Local development

Use Node.js 24 (see .nvmrc).

```powershell
cd D:\Dev\glory-cars
npm ci
npm run dev
```

Open http://localhost:3000. Use `npm run dev -- --port 3106` if the loan portal already uses port 3000.

Copy .env.example to .env.local and set the Gmail sender/app password and recipient addresses to enable contact delivery. Without these values the form returns a friendly unavailable message; it never pretends an email was sent. No production credentials are included.

## Pages and ownership

| Route                                 | Purpose                                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------- |
| /                                     | Public homepage, repair-financing process, shop onboarding information, FAQs |
| /contactCustomer                      | Customer enquiry form                                                        |
| /contactMechanic                      | Shop enquiry form; separate registration link                                |
| /login                                | Redirects to portal.gloryautohub.ca/login                                    |
| /register, /signup                    | Redirect to portal.gloryautohub.ca/signup                                    |
| /dashboard/*                          | Preserves old main-domain dashboard links by redirecting to the portal       |
| /forgot-password/_, /reset-password/_ | Redirect to the portal; query parameters preserved                           |
| /about/_, /privacy/_, /terms/*        | Redirect to the portal's existing disclosures                                |
| /api/contact                          | Validated server-side email delivery                                         |
| /robots.txt, /sitemap.xml             | Search discovery                                                             |

Target public origin: https://www.gloryautohub.ca. The apex domain should redirect to www. Authentication, shop onboarding, trial entitlement, subscription billing, and the mobile API remain in the separate glorycars-loan project at https://portal.gloryautohub.ca.

The Android app remains sign-in only and keeps its portal API origin. Web registration currently creates a pending shop. It does not activate a trial or a subscription. Agreement/approval completion and live billing remain separate portal work; do not advertise automatic activation.

## Checks

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npm run format:check
```

Tests cover contact validation, origin checking, input size limits, throttling, honeypot handling, delivery success, and sanitized provider failures. They use a fake sender and send no emails.

## Contact delivery

- Required: EMAIL_USER, EMAIL_PASS, and a fallback CONTACT_RECEIVER_EMAIL or the matching role recipient.
- Optional role recipients: CONTACT_RECEIVER_CUSTOMER_EMAIL, CONTACT_RECEIVER_MECHANIC_EMAIL.
- Recipients and sender are server-configured; the visitor cannot set them.
- Reply-To uses the validated visitor address. Messages are plain text.
- No form contents, addresses, or SMTP errors are logged.
- Per-instance request throttling and a honeypot provide basic spam resistance. For production, configure a Vercel WAF rate limit for POST /api/contact; the in-memory counter is not distributed or durable.
- Delivery must still be tested against the configured production mailbox.

## Release status

This is the working checkout in D:\Dev\glory-cars. The earlier copy under glorycars-loan/tmp is a stale backup, not the active project.
The rebrand was deployed on 2026-11-09 at https://www.gloryautohub.ca, with the apex redirecting to www. The release commit is 34172e1; see docs/REBRAND_HANDOFF.md for verification and remaining work. Production inbox delivery still needs a real test.

Vercel marketing project: glory-cars.
Vercel portal project: glory-cars-loan.

gloryautohub.ca and www.gloryautohub.ca now belong to the marketing project. Keep portal.gloryautohub.ca and admin.gloryautohub.ca on the portal project. Preserve email DNS records. The old glorycars.ca address is a separate hosting/domain task and is not changed by these source edits.

## Maintenance

Next.js 16 and React 19, TypeScript, plain CSS, Lucide icons, Nodemailer, ESLint, and Prettier. No separate login system, database, client-side email credentials, or unused Tailwind/starter-logo stack.
Read AGENTS.md and the bundled Next.js docs before making framework changes.

A scoped minimatch override updates the affected development-tool dependency to a patched release. Node 24 is required. Recheck the override when upgrading ESLint/typescript-eslint; retain it only while upstream ranges still select vulnerable versions.
