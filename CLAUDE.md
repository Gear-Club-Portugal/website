# Gear Club Portugal — Website

Static website for Gear Club Portugal, built with React + Vite. Content is managed in Contentful and pulled at build time, producing a fully static bundle hosted on Cloudflare Pages.

## Architecture

- **No runtime server.** Contentful webhooks trigger Cloudflare Pages builds. `scripts/download-content.cjs` fetches all content and writes JSON to `src/assets/data/`. Vite bundles it. No API calls at runtime.
- **Languages:** Portuguese (`pt`) and English (`en`) via `i18next`. All routes are prefixed `/:lang/...`. Navigating to `/` redirects to `/en`.
- **UI library:** MUI v5 with Emotion. Use MUI components before reaching for raw HTML. Theme overrides live in `src/theme.js`.
- **Alias:** `~` resolves to `src/`. Use it in imports.

## Project structure

```
src/
  assets/data/    # generated JSON (gitignored — produced by download-content.cjs)
  components/     # reusable, stateless UI components
  containers/     # composed sections (combine multiple components)
  pages/          # top-level route components
  hooks/          # shared React hooks
  helpers/        # pure utility functions
  config.toml     # static config: contacts, socials, calendar URL
  i18n.js         # translations (pt/en)
  routes.js       # route slug definitions
scripts/
  download-content.cjs  # Contentful fetch → src/assets/data/*.json
```

## Commands

```bash
yarn install                   # install deps
yarn download-data             # fetch Contentful content locally (needs .env)
yarn dev                       # Vite dev server
yarn build                     # production build
yarn lint                      # ESLint (zero warnings policy)
yarn format                    # Prettier write
yarn format:check              # Prettier check (used in CI)
yarn download-data-and-build   # full production build
```

## Code conventions

- **No comments unless the logic is non-obvious.** Self-documenting names over explanatory prose.
- **No TypeScript.** Plain JS + JSX with PropTypes where types matter at runtime.
- **Functional components only.** No class components.
- **ESLint + Prettier are enforced in CI.** Every change must pass `yarn lint` and `yarn format:check` with zero warnings before merging.
- **No unused variables.** ESLint is configured to error on them.
- **Small, focused components.** `components/` are stateless and reusable. State and data wiring belong in `containers/` or `pages/`.
- **i18n is mandatory for user-visible strings.** Use `useTranslation()` — no hardcoded UI text.

## Security

- **Never commit secrets.** `.env` is gitignored. Contentful credentials and any API tokens live there only.
- **Sanitize rich text before rendering.** `html-react-parser` is used with `dompurify` for any Contentful rich text rendered as HTML. Do not bypass DOMPurify.
- **Keep dependencies updated.** Dependabot monitors this repo. Fix security advisories promptly — prefer upgrading the vulnerable package directly over adding `resolutions` overrides, but use resolutions when a direct upgrade isn't possible (e.g. transitive deps locked by an older parent).
- **No `dangerouslySetInnerHTML` without sanitization.** If you must use it, pipe through DOMPurify first.
- **No `eval`, no dynamic `require`, no CDN script tags** added to `index.html` or components.
- **Content Security Policy** is managed at the Cloudflare Pages level — do not weaken it via meta tags.

## Adding a new page

1. Add a `page` content entry in Contentful with the desired slug.
2. The download script picks it up automatically into `pages.json`.
3. If it needs a dedicated route, add the slug to `src/routes.js` and create the component under `src/pages/`.
4. Wire the route in `src/App.jsx`.

## Dependency management

- Package manager: **Yarn 4** (Berry). Use `yarn` commands, not `npm`.
- Do not use `yarn add --dev` for runtime dependencies or vice versa.
- The `resolutions` field in `package.json` is used to force patched versions of transitive dependencies when upstream hasn't updated. Document the reason in a commit message.

## Specialized agents

Use these sub-agents for focused tasks:

| Agent | When to use |
|---|---|
| `dependency-auditor` | Dependabot alerts, security advisories, Yarn resolutions |
| `ui-developer` | React components, MUI styling, i18n, routing |
| `content-pipeline` | Contentful schema, download script, build data flow |
| `code-reviewer` | Pre-merge review of any change for security, quality, correctness |

## CI

GitHub Actions runs on every PR to `dev`:
1. `yarn lint` — zero warnings allowed
2. `yarn format:check` — formatting must match Prettier config

Both must pass before merging.
