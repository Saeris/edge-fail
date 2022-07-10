This is a minimal example demoing Nextjs 12.2 Edge Runtime failing to be detected, instead running in the default Nodejs runtime instead.

The example [Edge API route](./src/pages/edige.ts), does only one thing: log out the `req`, `event` objects received as arguments for the handler function, as well as the `req.url` which should be a complete URL string with protocol and origin.

According to the [documentation](https://vercel.com/docs/concepts/functions/edge-functions/quickstart) for this feature, Edge API route handlers have the same function signature as Edge Middleware, meaning the two arguments they receive are of types `NextRequest` and `NextFetchEvent`. According to the docs, the only thing that needs to be added to an API route to use the Edge runtime is the following code:

```ts
export const config = {
  runtime: "experimental-edge",
};
```

This example demonstrates that this does not always work as expected. The API route can silently fall into running in the Nodejs runtime instead, thus changing the argument types to `NextRequest` and `NextResponse`. Inspecting the console output after making a request to `localhost:3000/api/edge` shows that the received arguments are indead extended from `IncomingMessage` and `ServerResponse`.

## Steps to Reproduce

- Install deps: `yarn`
- Check Nextjs version: `yarn why next`
- Start dev server: `yarn dev`
- Review console output, should have warning for experimental Nextjs feature (images), verifying the server is ^v12.2.0. Missing is a warning about experimental edge runtime.
- Visit api route: http://localhost:3000/api/edge
- Review console output, should be following shape:

```bash
{
    req: IncomingMessage {
        ...
    },
    event: ServerResponse {
        ...
    },
    url: '/api/edge'
}
```
