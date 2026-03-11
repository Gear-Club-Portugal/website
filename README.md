# Gear Club Portugal — Website

Static website for [Gear Club Portugal](https://gearclubportugal.com), built with React + Vite. Content is managed in Contentful and pulled at build time, producing a fully static bundle hosted on Cloudflare Pages.

## How it works

1. A Contentful webhook triggers a new build on Cloudflare Pages whenever content changes.
2. The build runs `download-content.cjs`, which fetches all content from Contentful and writes it as JSON files under `src/assets/data/`.
3. Vite builds the React app, bundling the JSON data into the static output.
4. Cloudflare Pages serves the result — no server, no runtime API calls.

## Local development

### Prerequisites

- Node.js 20+
- Yarn 4 (`corepack enable`)
- A Contentful space with the expected content types (see [Content model](#content-model))

### Environment variables

Create a `.env` file in the project root (already gitignored):

```
CONTENTFUL_SPACE_ID=<your_space_id>
CONTENTFUL_ACCESS_TOKEN=<your_content_delivery_api_token>
```

Both values are in the Contentful web app under **Settings → API keys**.

### Setup

```bash
yarn install
yarn download-data   # pulls content from Contentful into src/assets/data/
yarn dev             # starts the Vite dev server
```

To do a full production-like build locally:

```bash
yarn download-data-and-build
yarn preview
```

## Project structure

```
src/
  assets/data/       # generated JSON files (gitignored, produced by download-content.cjs)
  components/        # reusable, stateless UI components
  containers/        # composed UI sections (combine multiple components)
  pages/             # top-level route components
  hooks/             # shared React hooks and utility functions
  config.toml        # static site config: contacts, social handles, calendar URL
  i18n.js            # Portuguese / English translations
  routes.js          # route slug definitions
scripts/
  download-content.cjs  # fetches Contentful data and writes JSON to src/assets/data/
public/
  _redirects         # Cloudflare Pages routing rules (SPA fallback)
```

## Content model

The Contentful space has five content types used by the download script:

| Content type | Key fields |
|---|---|
| `post` | title, body (rich text), slug, publishedAt, mainImage, author, category |
| `event` | name, shortName, slug, eventDate, textualEventDate, location, description, program, packs, mainImage, coverImage, registerForm, sponsors, type |
| `banner` | title, subtitle1, subtitle2, slug, image |
| `page` | name, slug, body (rich text), mainImage, links |
| `award` | title, subtitle, description, votingForm, nominies, order |

Fields not present in Contentful for a given entry are handled as `null` in the download script.

## Static config (`src/config.toml`)

Settings that don't belong in Contentful live here:

- **contacts** — email address shown in the footer
- **socials** — Instagram, Facebook, X handles
- **events.calendar** — URL for the "Add to Calendar" button

## Routing

All routes are prefixed with the language code: `/:lang/...`

Supported languages: `pt` (Portuguese), `en` (English).

Navigating to `/` or an unknown language slug redirects to `/en`.

## Adding a new page

1. Add a content entry of type `page` in Contentful with the desired slug.
2. The download script will include it in `pages.json` automatically.
3. If it needs a dedicated route, add the slug to `src/routes.js` and create the page component under `src/pages/`.
4. Wire the route in `src/App.jsx`.

## Deployment

Cloudflare Pages is configured to run:

```
yarn download-data-and-build
```

as its build command, with `dist` as the output directory. The Contentful webhook points at the Cloudflare Pages deploy hook URL.