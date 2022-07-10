import type { NextMiddleware } from "next/server";

export const config = {
  runtime: `experimental-edge`,
};

const handler: NextMiddleware = (req, event) => {
  // req is a NextRequest as the types indicate
  // event should be a NextFetchEvent, instead it's a ServerResponse
  // eslint-disable-next-line no-console
  console.log({ req, event, url: req.url });
  return new Response();
};

export default handler;
