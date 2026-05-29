# Lao Mai Travel

Next.js website for Lao Mai Travel with an embedded Sanity Studio CMS, Resend-powered booking inquiries, multilingual routes, PWA assets, Vercel Analytics, and Vercel Speed Insights.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Sanity CMS and embedded Studio at `/studio`
- Resend for contact/booking inquiry email
- next-intl for English and Thai routes
- Vercel for hosting, analytics, and speed insights

## Prerequisites

- Node.js 20 or newer
- npm
- Git
- Access to the Sanity project
- Access to the Vercel project
- Access to the Resend account and verified sending domain

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Fill in the values in `.env.local`. Do not commit real secrets.

Start the development server:

```bash
npm run dev
```

Open:

- Site, English: `http://localhost:3000/en`
- Site, Thai: `http://localhost:3000/th`
- Sanity Studio: `http://localhost:3000/studio`

## Environment Variables

| Variable | Required | Used by | Notes |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Website, Sanity Studio, seed scripts | Sanity project ID. Public value, but keep account-specific values in private handoff notes when possible. |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Website, Sanity Studio, seed scripts | Usually `production`. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No | Sanity Studio | Defaults to the value in `sanity/env.ts` when omitted. |
| `SANITY_API_READ_TOKEN` | Recommended | Website Sanity reads | Needed when the dataset or queried documents are private. |
| `SANITY_MIGRATION_TOKEN` | Only for seeding | Seed scripts | Sanity token with editor/admin write access. Do not deploy unless needed. |
| `SANITY_REVALIDATION_SECRET` | Recommended | `/api/revalidate` | Shared secret for Sanity webhook cache revalidation. |
| `RESEND_API_KEY` | Yes for contact form | `/api/contact` | Resend API key used to send booking inquiry emails. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | SEO metadata | Google Search Console verification token. |

## Sanity Setup

1. Create or select the Sanity project and dataset.
2. Add the project ID and dataset to `.env.local`.
3. In Sanity project settings, configure CORS origins:
   - `http://localhost:3000`
   - production domain, for example `https://laomaitravel.com`
   - Vercel preview domains if previews need Studio/API access
4. Create tokens:
   - Read token for `SANITY_API_READ_TOKEN` if private reads are required.
   - Editor or administrator token for `SANITY_MIGRATION_TOKEN` when running seed scripts.
5. Start the app and open `/studio` to manage content.

Optional seed commands:

```bash
npx tsx scripts/seed-singletons.ts
npx tsx scripts/seed-tours.ts
npx tsx scripts/seed-blog-post.ts
```

The seed scripts use `createOrReplace`, so they are intended to be safe to run more than once. Review content in Studio after running them.

### Sanity Revalidation Webhook

Create a Sanity webhook that sends document change payloads to:

```text
https://<production-domain>/api/revalidate
```

Set the request method to `POST` and include this header:

```text
Authorization: Bearer <SANITY_REVALIDATION_SECRET>
```

The API route maps Sanity document types to Next.js cache tags and calls `revalidateTag`.

## Resend Setup

1. Verify the sending domain in Resend for `laomaitravel.com`.
2. Create a Resend API key.
3. Set `RESEND_API_KEY` locally and in Vercel.
4. Confirm the sending address used by the contact route is allowed:

```text
Lao Mai Travel <info@laomaitravel.com>
```

Booking inquiries are sent to `info@laomaitravel.com`, with the visitor email set as `replyTo`.

## Vercel Setup

Import the Git repository into Vercel and use the project settings from `vercel.json`:

- Framework: `nextjs`
- Install command: `npm install`
- Build command: `npm run build`
- Development command: `npm run dev`
- Region: `sin1`

Add all required environment variables in Vercel for Production and Preview. At minimum, production needs Sanity variables and `RESEND_API_KEY`.

Connect the production domain, for example:

```text
laomaitravel.com
www.laomaitravel.com
```

After deployment, verify:

- `/en` and `/th` load correctly
- `/studio` loads for authenticated Sanity users
- booking form submissions send through Resend
- Sanity webhook requests revalidate updated content
- `/sitemap.xml` and `/robots.txt` respond

## Common Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Notes

- Locale routes are configured in `i18n/routing.ts` with `en` and `th`.
- Sanity schemas live under `sanity/`.
- Frontend Sanity queries and types live under `lib/sanity/`.
- Contact details are centralized in `lib/contact.ts`.
- Static images and PWA assets live under `public/`.
- Real `.env*` files are ignored by Git. Use `.env.example` as the committed template.
