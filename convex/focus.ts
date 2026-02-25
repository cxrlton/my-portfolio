import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const doc = await ctx.db.query("currentFocus").first();
    return doc?.text ?? "";
  },
});

export const set = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("currentFocus").first();
    if (existing) {
      await ctx.db.patch(existing._id, { text: args.text });
    } else {
      await ctx.db.insert("currentFocus", { text: args.text });
    }
  },
});
