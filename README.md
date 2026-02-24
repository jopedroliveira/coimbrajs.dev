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

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
