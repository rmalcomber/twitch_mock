import { Context } from './mod.ts';

export const generateResponse = (ctx: Context, code = 200, data?: string) => {
  ctx.response.status = code;
  ctx.response.body = data;
  return ctx;
};

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
