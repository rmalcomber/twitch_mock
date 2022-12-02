import {
  delay,
  generateResponse,
} from './helpers.ts';
import { Context } from './mod.ts';

const keywords = new Map<string, (ctx: Context) => Promise<Context>>();

keywords.set("400", (ctx) => {
  return Promise.resolve(generateResponse(ctx, 400));
});

keywords.set("401", (ctx) => {
  return Promise.resolve(generateResponse(ctx, 401));
});

keywords.set("404", (ctx) => {
  return Promise.resolve(generateResponse(ctx, 404));
});

keywords.set("500", (ctx) => {
  return Promise.resolve(generateResponse(ctx, 500));
});

keywords.set("200", (ctx) => {
  return Promise.resolve(generateResponse(ctx));
});

keywords.set("timeout", async (ctx) => {
  await delay(30 * 1000);
  return generateResponse(ctx, 408);
});

export default keywords;
