# Fireblog + Nuxt example

Generate a super fast static blog with Nuxt and fireblog, with the new "full static mode "from Nuxt.

## getting started

copy `.env.template` to create a `.env` file. Use your own fireblog GraphQL endpoint and blog id here.

Run dev server:

```sh
npm run dev
```

Build and serve your static blog:

```sh
npm run generate
```

You can now serve your static files from your `dist` directory running this command:

```sh
npm run serve
```

## deploy

You can deploy your blog with Netlify or Vercel. Or you can simply upload files from your `dist` directory anywhere, that is the beauty of static blogs !
