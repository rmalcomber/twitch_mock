import { generateResponse } from './helpers.ts';
import keywords from './keywords.ts';
import { Router } from './mod.ts';
import Setup from './setup.ts';

const app = Setup();
const router = new Router();

// Default route for all
router.get("/helix/clips", async (ctx) => {
  const broadcasterId = ctx.request.url.searchParams.get("broadcaster_id");

  // Check for broadcast ID
  if (!broadcasterId) {
    return generateResponse(ctx, 404);
  }

  // Check if boradcast Id is in keywords
  if (keywords.has(broadcasterId)) {
    const fn = keywords.get(broadcasterId);
    if (fn) return fn(ctx);
  }

  // Otherwise assume there's a datafile
  try {
    const dataFile = await Deno.readTextFile(`./data/${broadcasterId}.json`);
    return generateResponse(ctx, 200, JSON.parse(dataFile));
  } catch {
    return generateResponse(ctx, 400);
  }
});

app.use(router.routes());

const port = Deno.args[0] || "3030";
await app.listen({ port: +port });
