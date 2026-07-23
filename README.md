# Coimbra.JS

Hello there.

Start dev server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Routes

- `/` — Home page
- `/signage` — Redirects to `/signage/welcome`
- `/signage/welcome` — Welcome slide
- `/signage/opening` — Opening slide
- `/signage/break` — Break slide
- `/signage/thankyou` — Thank you slide

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying

The site runs on Cloudflare Workers, not Pages. `@sveltejs/adapter-cloudflare`
writes a worker and its static assets to `.svelte-kit/cloudflare`, and
`wrangler.jsonc` points at both.

Pushes to `main` go through Workers Builds. Dashboard settings:

| Setting        | Value                 |
| -------------- | --------------------- |
| Build command  | `npm run build`       |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/`                   |

There is no build output directory to configure. Wrangler takes the paths from
`wrangler.jsonc`, so if the adapter ever changes where it writes, update `main`
and `assets.directory` to match.

To deploy by hand:

```sh
npx wrangler login
npm run deploy
```

Do not connect this repo to Pages. The Pages pipeline wants
`pages_build_output_dir` in the wrangler config, finds Workers keys instead,
skips the file, and then fails looking for a `dist` directory that nothing
creates.
