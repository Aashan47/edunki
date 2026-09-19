# edunki

The edunki education-consultancy website, rebuilt off Wix as a static
Next.js site.

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- **Output:** every page is prerendered at build time — no server needed
  beyond a Node host or any static/edge host

## Running it

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Environment variables

| Variable | Needed for | How to get it |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | The contact form | Go to [web3forms.com](https://web3forms.com), enter `eedunki@gmail.com`, and they email you an access key. No account needed, free tier is 250 submissions/month. |
| `NEXT_PUBLIC_SITE_URL` | `sitemap.xml` / `robots.txt` | The live domain, e.g. `https://edunki.com` |

Until the Web3Forms key is set, the form shows an error telling the visitor to
email directly rather than silently swallowing the message.

## Editing content

All copy lives in `lib/` as plain TypeScript — no CMS, no database. Change a
string, save, done.

| File | Holds |
|---|---|
| `lib/site.ts` | Brand name, email, Calendly link, socials, nav items, the four stats |
| `lib/services.ts` | The four services and every numbered step on their detail pages |
| `lib/team.ts` | The seven team members and their full bios |
| `lib/resources.ts` | The Resources listing entries |

Adding a team member = adding one object to the array in `lib/team.ts` and
dropping a photo in `public/media/team/`. The homepage grid, the detail page,
the sitemap and the "more of the team" strip all pick it up automatically.

## Images

`Media/` holds the original files exactly as supplied. `public/media/` holds
the web copies the site actually serves, renamed to match the slugs. Next.js
resizes and converts them to AVIF/WebP on the fly, so the large originals are
fine to keep.

The Wix hero used a stock purple gradient PNG. That is now the `.hero-mesh`
CSS gradient in `app/globals.css`, in the brand navy — nothing to download,
scales to any screen.

## Old Wix URLs

`next.config.ts` holds permanent (308) redirects from every old Wix path to
its new home, so existing links and search results keep working. Check that
list if a page ever moves.

## Deploying

The site is fully static. Any of these work:

- **Vercel** — import the repo, set the two env vars, done.
- **Netlify / Cloudflare Pages** — same, build command `npm run build`.
- **Any Node host** — `npm run build && npm start`.

Point the domain at the host and update `NEXT_PUBLIC_SITE_URL`.
