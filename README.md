# Steps to Reproduce

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
